r.r(t), r.d(t, { VerifyAccountDeekLink: () => g, VerifyAccountLoading: () => A, default: () => y });
var n = r(627968),
    l = r(64700),
    a = r(873263),
    i = r(607399),
    c = r(590053),
    s = r(421380),
    o = r(397927),
    u = r(77468),
    d = r(964459),
    f = r(458518),
    N = r(573648),
    p = r(129014),
    O = r(998218),
    C = r(950198),
    m = r(652215),
    S = r(985018),
    _ = r(941827);
let E = null != window.opener;
function y() {
    let e = (0, a.W6)(),
        t = (0, f.o)(),
        r = t.get("code"),
        s = t.get("oauth_verifier"),
        o = t.get("state") ?? "",
        p = t.get("loading"),
        S = t.get("iss") ?? void 0,
        { type: _ } = (0, a.g)(),
        y = (0, C.mw)(_),
        [T, v] = l.useState(!1),
        [x, b] = l.useState(!1),
        j = (0, d.A)(),
        D = null == s ? (r ?? "") : s;
    l.useEffect(() => {
        let r;
        if (null != p) return;
        for (let e of t.keys()) e.startsWith("openid.") && (null == r && (r = {}), (r[e] = t.get(e)));
        let n = (0, C.mw)(_);
        !(async function () {
            if (null == n || !N.A.isSupported(n)) return;
            function l(r) {
                let { status: l, body: a } = r;
                if (null != n) {
                    if (a?.redirect) {
                        window.location = a.redirect;
                        return;
                    }
                    if ([200, 204].includes(l)) {
                        e.replace(m.BVt.CONNECTIONS_SUCCESS(n)), E && window.close();
                        return;
                    }
                    a?.code != null && t.append("error-code", a.code),
                        e.replace(`${m.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                }
            }
            if (await h({ platformType: n, code: D, state: o, openidParams: r, iss: S, handleCallbackResponse: l }))
                return;
            let a = await R(n, o, D, r, S);
            0 === a
                ? v(!0)
                : 1 === a
                  ? e.replace(`${m.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                  : 3 === a
                    ? i.Fr
                        ? b(!0)
                        : e.replace(`${m.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                    : w({
                          platformType: n,
                          state: o,
                          handleCallbackResponse: l,
                          handleCallbackError: (r) => {
                              r?.body?.code != null && t.append("error-code", r.body.code),
                                  e.replace(`${m.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                          },
                          openidParams: r,
                          code: D,
                          iss: S,
                      });
        })();
    }, [D, e, p, _, t, o, S]),
        l.useEffect(() => {
            let t;
            if (!T) return;
            let r = 0;
            async function n() {
                if (null == y) return;
                let { handoff_status: l, success_redirect: a } = (await u.A.getHandoffStatus(y, o)).body;
                if (l === c.N.HANDOFF_SUCCESS)
                    if (null == O.A.toURLSafe(a)) return e.replace(m.BVt.CONNECTIONS_SUCCESS(y));
                    else {
                        window.location = a;
                        return;
                    }
                if (l === c.N.HANDOFF_ERROR || r >= 10) return e.replace(m.BVt.CONNECTIONS_ERROR(y));
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
        }, [j, e, y, T, o]);
    let I = l.useMemo(() => {
        if (null != y) return `discord://${m.BVt.CONNECTIONS(y)}/?${t.toString()}`;
    }, [y, t]);
    return null != y && N.A.isSupported(y)
        ? x
            ? (0, n.jsx)(g, {
                  platformType: y,
                  deeplink: I,
                  onClick: () => {
                      b(!1), v(!0);
                  },
              })
            : (0, n.jsx)(A, { platformType: y })
        : null;
}
function A(e) {
    let { platformType: t } = e,
        r = N.A.get(t);
    return (0, n.jsxs)(C.mP, {
        platformType: t,
        children: [
            (0, n.jsx)("div", { className: _.iU, children: S.intl.format(S.t.AOKOe7, { name: r.name }) }),
            (0, n.jsx)("div", {
                className: _.UD,
                children: (0, n.jsx)(s.$n, {
                    className: _.HM,
                    disabled: !0,
                    children: (0, n.jsx)(o.y$y, { itemClassName: _.$N }),
                }),
            }),
        ],
    });
}
function g(e) {
    let { deeplink: t, onClick: r, platformType: l } = e,
        a = N.A.get(l);
    return (0, n.jsx)(C.mP, {
        platformType: l,
        children: (0, n.jsxs)("div", {
            className: _.UD,
            children: [
                (0, n.jsx)("div", {
                    className: _.iU,
                    children: S.intl.format(S.t["6ig6i5"], { connectionName: a.name }),
                }),
                (0, n.jsx)(o.DUT, {
                    tag: "a",
                    href: t,
                    onClick: r,
                    target: "_self",
                    children: (0, n.jsx)(s.$n, { className: _.HM, children: S.intl.string(S.t.flvacA) }),
                }),
            ],
        }),
    });
}
async function h(e) {
    let { platformType: t, code: r, state: n, openidParams: l, iss: a, handleCallbackResponse: c } = e;
    if (i.Fr || E) return !1;
    try {
        let e = await p.default
            .request(m.e$_.CONNECTIONS_CALLBACK, { code: r, openid_params: l, iss: a, state: n, providerType: t })
            .finally(() => {
                p.default.disconnect();
            });
        return c(e), !0;
    } catch (e) {
        return !1;
    }
}
async function R(e, t, r, n, l) {
    try {
        return await u.A.sessionHandoff(e, t, r, n, l), 0;
    } catch (e) {
        if (e?.body?.code === 10020) return 2;
        if (e?.body?.code === 40001) return 3;
        return 1;
    }
}
async function w(e) {
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
        let e = await u.A.callback(t, { code: i, openid_params: a, state: r, iss: c }, !E);
        return n(e), !0;
    } catch (e) {
        return l(e), !0;
    }
}
