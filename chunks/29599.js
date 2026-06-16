r.r(t), r.d(t, { VerifyAccountLoading: () => h, VerifyAccountDeekLink: () => g, default: () => _ });
var n,
    i = r(627968),
    l = r(64700),
    a = r(873263),
    c = r(607399),
    o =
        (((n = {})[(n.HANDOFF_AUTHORIZED = 0)] = "HANDOFF_AUTHORIZED"),
        (n[(n.HANDOFF_ERROR = 1)] = "HANDOFF_ERROR"),
        (n[(n.HANDOFF_SUCCESS = 2)] = "HANDOFF_SUCCESS"),
        n),
    s = r(862482),
    u = r(289873),
    d = r(939249),
    f = r(77468),
    N = r(186840),
    p = r(458518),
    O = r(573648),
    C = r(129014),
    S = r(998218),
    m = r(950198),
    E = r(652215),
    R = r(375708),
    y = r(225299);
let A = null != window.opener;
function _() {
    let e = (0, a.W6)(),
        t = (0, p.o)(),
        r = t.get("code"),
        n = t.get("oauth_verifier"),
        s = t.get("state") ?? "",
        u = t.get("loading"),
        d = t.get("iss") ?? void 0,
        { type: C } = (0, a.g)(),
        R = (0, m.mw)(C),
        [y, _] = l.useState(!1),
        [x, D] = l.useState(!1),
        H = (0, N.A)(),
        $ = null == n ? (r ?? "") : n;
    l.useEffect(() => {
        let r;
        if (null != u) return;
        for (let e of t.keys()) e.startsWith("openid.") && (null == r && (r = {}), (r[e] = t.get(e)));
        let n = (0, m.mw)(C);
        !(async function () {
            if (null == n || !O.A.isSupported(n)) return;
            function i(r) {
                let { status: i, body: l } = r;
                if (null != n) {
                    if (l?.redirect) {
                        window.location = l.redirect;
                        return;
                    }
                    if ([200, 204].includes(i)) {
                        e.replace(E.BVt.CONNECTIONS_SUCCESS(n)), A && window.close();
                        return;
                    }
                    l?.code != null && t.append("error-code", l.code),
                        e.replace(`${E.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                }
            }
            if (await w({ platformType: n, code: $, state: s, openidParams: r, iss: d, handleCallbackResponse: i }))
                return;
            let l = await F(n, s, $, r, d);
            0 === l
                ? _(!0)
                : 1 === l
                  ? e.replace(`${E.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                  : 3 === l
                    ? c.Fr
                        ? D(!0)
                        : e.replace(`${E.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                    : T({
                          platformType: n,
                          state: s,
                          handleCallbackResponse: i,
                          handleCallbackError: (r) => {
                              r?.body?.code != null && t.append("error-code", r.body.code),
                                  e.replace(`${E.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                          },
                          openidParams: r,
                          code: $,
                          iss: d,
                      });
        })();
    }, [$, e, u, C, t, s, d]),
        l.useEffect(() => {
            let t;
            if (!y) return;
            let r = 0;
            async function n() {
                if (null == R) return;
                let { handoff_status: i, success_redirect: l } = (await f.A.getHandoffStatus(R, s)).body;
                if (i === o.HANDOFF_SUCCESS)
                    if (null == S.A.toURLSafe(l)) return e.replace(E.BVt.CONNECTIONS_SUCCESS(R));
                    else {
                        window.location = l;
                        return;
                    }
                if (i === o.HANDOFF_ERROR || r >= 10) return e.replace(E.BVt.CONNECTIONS_ERROR(R));
                t = setTimeout(() => {
                    H() && ((r += 1), n());
                }, 1e3);
            }
            return (
                n(),
                () => {
                    null != t && clearTimeout(t);
                }
            );
        }, [H, e, R, y, s]);
    let j = l.useMemo(() => {
        if (null != R) return `discord://${E.BVt.CONNECTIONS(R)}/?${t.toString()}`;
    }, [R, t]);
    return null != R && O.A.isSupported(R)
        ? x
            ? (0, i.jsx)(g, {
                  platformType: R,
                  deeplink: j,
                  onClick: () => {
                      D(!1), _(!0);
                  },
              })
            : (0, i.jsx)(h, { platformType: R })
        : null;
}
function h(e) {
    let { platformType: t } = e,
        r = O.A.get(t);
    return (0, i.jsxs)(m.mP, {
        platformType: t,
        children: [
            (0, i.jsx)("div", { className: y.iU, children: R.intl.format(R.t.AOKOe7, { name: r.name }) }),
            (0, i.jsx)("div", {
                className: y.UD,
                children: (0, i.jsx)(s.$n, {
                    className: y.HM,
                    disabled: !0,
                    children: (0, i.jsx)(u.y, { itemClassName: y.$N }),
                }),
            }),
        ],
    });
}
function g(e) {
    let { deeplink: t, onClick: r, platformType: n } = e,
        l = O.A.get(n);
    return (0, i.jsx)(m.mP, {
        platformType: n,
        children: (0, i.jsxs)("div", {
            className: y.UD,
            children: [
                (0, i.jsx)("div", {
                    className: y.iU,
                    children: R.intl.format(R.t["6ig6i5"], { connectionName: l.name }),
                }),
                (0, i.jsx)(d.D, {
                    tag: "a",
                    href: t,
                    onClick: r,
                    target: "_self",
                    children: (0, i.jsx)(s.$n, { className: y.HM, children: R.intl.string(R.t.flvacA) }),
                }),
            ],
        }),
    });
}
async function w(e) {
    let { platformType: t, code: r, state: n, openidParams: i, iss: l, handleCallbackResponse: a } = e;
    if (c.Fr || A) return !1;
    try {
        let e = await C.default
            .request(E.e$_.CONNECTIONS_CALLBACK, { code: r, openid_params: i, iss: l, state: n, providerType: t })
            .finally(() => {
                C.default.disconnect();
            });
        return a(e), !0;
    } catch (e) {
        return !1;
    }
}
async function F(e, t, r, n, i) {
    try {
        return await f.A.sessionHandoff(e, t, r, n, i), 0;
    } catch (e) {
        if (e?.body?.code === 10020) return 2;
        if (e?.body?.code === 40001) return 3;
        return 1;
    }
}
async function T(e) {
    let {
        platformType: t,
        state: r,
        handleCallbackResponse: n,
        handleCallbackError: i,
        openidParams: l,
        code: a,
        iss: c,
    } = e;
    try {
        let e = await f.A.callback(t, { code: a, openid_params: l, state: r, iss: c }, !A);
        return n(e), !0;
    } catch (e) {
        return i(e), !0;
    }
}
