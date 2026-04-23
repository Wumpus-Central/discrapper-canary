r.r(t), r.d(t, { VerifyAccountLoading: () => h, VerifyAccountDeekLink: () => R, default: () => g });
var n,
    l = r(627968),
    a = r(64700),
    i = r(873263),
    c = r(607399),
    s =
        (((n = {})[(n.HANDOFF_AUTHORIZED = 0)] = "HANDOFF_AUTHORIZED"),
        (n[(n.HANDOFF_ERROR = 1)] = "HANDOFF_ERROR"),
        (n[(n.HANDOFF_SUCCESS = 2)] = "HANDOFF_SUCCESS"),
        n),
    o = r(862482),
    u = r(289873),
    d = r(939249),
    f = r(77468),
    N = r(186840),
    p = r(458518),
    O = r(573648),
    C = r(129014),
    m = r(998218),
    S = r(950198),
    _ = r(652215),
    E = r(985018),
    y = r(225299);
let A = null != window.opener;
function g() {
    let e = (0, i.W6)(),
        t = (0, p.o)(),
        r = t.get("code"),
        n = t.get("oauth_verifier"),
        o = t.get("state") ?? "",
        u = t.get("loading"),
        d = t.get("iss") ?? void 0,
        { type: C } = (0, i.g)(),
        E = (0, S.mw)(C),
        [y, g] = a.useState(!1),
        [x, b] = a.useState(!1),
        j = (0, N.A)(),
        D = null == n ? (r ?? "") : n;
    a.useEffect(() => {
        let r;
        if (null != u) return;
        for (let e of t.keys()) e.startsWith("openid.") && (null == r && (r = {}), (r[e] = t.get(e)));
        let n = (0, S.mw)(C);
        !(async function () {
            if (null == n || !O.A.isSupported(n)) return;
            function l(r) {
                let { status: l, body: a } = r;
                if (null != n) {
                    if (a?.redirect) {
                        window.location = a.redirect;
                        return;
                    }
                    if ([200, 204].includes(l)) {
                        e.replace(_.BVt.CONNECTIONS_SUCCESS(n)), A && window.close();
                        return;
                    }
                    a?.code != null && t.append("error-code", a.code),
                        e.replace(`${_.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                }
            }
            if (await w({ platformType: n, code: D, state: o, openidParams: r, iss: d, handleCallbackResponse: l }))
                return;
            let a = await T(n, o, D, r, d);
            0 === a
                ? g(!0)
                : 1 === a
                  ? e.replace(`${_.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                  : 3 === a
                    ? c.Fr
                        ? b(!0)
                        : e.replace(`${_.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                    : v({
                          platformType: n,
                          state: o,
                          handleCallbackResponse: l,
                          handleCallbackError: (r) => {
                              r?.body?.code != null && t.append("error-code", r.body.code),
                                  e.replace(`${_.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                          },
                          openidParams: r,
                          code: D,
                          iss: d,
                      });
        })();
    }, [D, e, u, C, t, o, d]),
        a.useEffect(() => {
            let t;
            if (!y) return;
            let r = 0;
            async function n() {
                if (null == E) return;
                let { handoff_status: l, success_redirect: a } = (await f.A.getHandoffStatus(E, o)).body;
                if (l === s.HANDOFF_SUCCESS)
                    if (null == m.A.toURLSafe(a)) return e.replace(_.BVt.CONNECTIONS_SUCCESS(E));
                    else {
                        window.location = a;
                        return;
                    }
                if (l === s.HANDOFF_ERROR || r >= 10) return e.replace(_.BVt.CONNECTIONS_ERROR(E));
                t = setTimeout(() => {
                    j() && ((r += 1), n());
                }, 1e3);
            }
            return (
                n(),
                () => {
                    null != t && clearTimeout(t);
                }
            );
        }, [j, e, E, y, o]);
    let I = a.useMemo(() => {
        if (null != E) return `discord://${_.BVt.CONNECTIONS(E)}/?${t.toString()}`;
    }, [E, t]);
    return null != E && O.A.isSupported(E)
        ? x
            ? (0, l.jsx)(R, {
                  platformType: E,
                  deeplink: I,
                  onClick: () => {
                      b(!1), g(!0);
                  },
              })
            : (0, l.jsx)(h, { platformType: E })
        : null;
}
function h(e) {
    let { platformType: t } = e,
        r = O.A.get(t);
    return (0, l.jsxs)(S.mP, {
        platformType: t,
        children: [
            (0, l.jsx)("div", { className: y.iU, children: E.intl.format(E.t.AOKOe7, { name: r.name }) }),
            (0, l.jsx)("div", {
                className: y.UD,
                children: (0, l.jsx)(o.$n, {
                    className: y.HM,
                    disabled: !0,
                    children: (0, l.jsx)(u.y, { itemClassName: y.$N }),
                }),
            }),
        ],
    });
}
function R(e) {
    let { deeplink: t, onClick: r, platformType: n } = e,
        a = O.A.get(n);
    return (0, l.jsx)(S.mP, {
        platformType: n,
        children: (0, l.jsxs)("div", {
            className: y.UD,
            children: [
                (0, l.jsx)("div", {
                    className: y.iU,
                    children: E.intl.format(E.t["6ig6i5"], { connectionName: a.name }),
                }),
                (0, l.jsx)(d.D, {
                    tag: "a",
                    href: t,
                    onClick: r,
                    target: "_self",
                    children: (0, l.jsx)(o.$n, { className: y.HM, children: E.intl.string(E.t.flvacA) }),
                }),
            ],
        }),
    });
}
async function w(e) {
    let { platformType: t, code: r, state: n, openidParams: l, iss: a, handleCallbackResponse: i } = e;
    if (c.Fr || A) return !1;
    try {
        let e = await C.default
            .request(_.e$_.CONNECTIONS_CALLBACK, { code: r, openid_params: l, iss: a, state: n, providerType: t })
            .finally(() => {
                C.default.disconnect();
            });
        return i(e), !0;
    } catch (e) {
        return !1;
    }
}
async function T(e, t, r, n, l) {
    try {
        return await f.A.sessionHandoff(e, t, r, n, l), 0;
    } catch (e) {
        if (e?.body?.code === 10020) return 2;
        if (e?.body?.code === 40001) return 3;
        return 1;
    }
}
async function v(e) {
    let {
        platformType: t,
        state: r,
        handleCallbackResponse: n,
        handleCallbackError: l,
        openidParams: a,
        code: i,
        iss: c,
    } = e;
    try {
        let e = await f.A.callback(t, { code: i, openid_params: a, state: r, iss: c }, !A);
        return n(e), !0;
    } catch (e) {
        return l(e), !0;
    }
}
