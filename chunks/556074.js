r.r(t), r.d(t, { VerifyAccountDeekLink: () => h, VerifyAccountLoading: () => g, default: () => A });
var n = r(627968),
    l = r(64700),
    a = r(873263),
    i = r(607399),
    c = r(590053),
    s = r(862482),
    o = r(289873),
    u = r(939249),
    d = r(77468),
    f = r(964459),
    N = r(458518),
    p = r(573648),
    O = r(129014),
    C = r(998218),
    m = r(950198),
    S = r(652215),
    _ = r(985018),
    E = r(225299);
let y = null != window.opener;
function A() {
    let e = (0, a.W6)(),
        t = (0, N.o)(),
        r = t.get("code"),
        s = t.get("oauth_verifier"),
        o = t.get("state") ?? "",
        u = t.get("loading"),
        O = t.get("iss") ?? void 0,
        { type: _ } = (0, a.g)(),
        E = (0, m.mw)(_),
        [A, v] = l.useState(!1),
        [x, b] = l.useState(!1),
        j = (0, f.A)(),
        D = null == s ? (r ?? "") : s;
    l.useEffect(() => {
        let r;
        if (null != u) return;
        for (let e of t.keys()) e.startsWith("openid.") && (null == r && (r = {}), (r[e] = t.get(e)));
        let n = (0, m.mw)(_);
        !(async function () {
            if (null == n || !p.A.isSupported(n)) return;
            function l(r) {
                let { status: l, body: a } = r;
                if (null != n) {
                    if (a?.redirect) {
                        window.location = a.redirect;
                        return;
                    }
                    if ([200, 204].includes(l)) {
                        e.replace(S.BVt.CONNECTIONS_SUCCESS(n)), y && window.close();
                        return;
                    }
                    a?.code != null && t.append("error-code", a.code),
                        e.replace(`${S.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                }
            }
            if (await R({ platformType: n, code: D, state: o, openidParams: r, iss: O, handleCallbackResponse: l }))
                return;
            let a = await w(n, o, D, r, O);
            0 === a
                ? v(!0)
                : 1 === a
                  ? e.replace(`${S.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                  : 3 === a
                    ? i.Fr
                        ? b(!0)
                        : e.replace(`${S.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                    : T({
                          platformType: n,
                          state: o,
                          handleCallbackResponse: l,
                          handleCallbackError: (r) => {
                              r?.body?.code != null && t.append("error-code", r.body.code),
                                  e.replace(`${S.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`);
                          },
                          openidParams: r,
                          code: D,
                          iss: O,
                      });
        })();
    }, [D, e, u, _, t, o, O]),
        l.useEffect(() => {
            let t;
            if (!A) return;
            let r = 0;
            async function n() {
                if (null == E) return;
                let { handoff_status: l, success_redirect: a } = (await d.A.getHandoffStatus(E, o)).body;
                if (l === c.N.HANDOFF_SUCCESS)
                    if (null == C.A.toURLSafe(a)) return e.replace(S.BVt.CONNECTIONS_SUCCESS(E));
                    else {
                        window.location = a;
                        return;
                    }
                if (l === c.N.HANDOFF_ERROR || r >= 10) return e.replace(S.BVt.CONNECTIONS_ERROR(E));
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
        }, [j, e, E, A, o]);
    let I = l.useMemo(() => {
        if (null != E) return `discord://${S.BVt.CONNECTIONS(E)}/?${t.toString()}`;
    }, [E, t]);
    return null != E && p.A.isSupported(E)
        ? x
            ? (0, n.jsx)(h, {
                  platformType: E,
                  deeplink: I,
                  onClick: () => {
                      b(!1), v(!0);
                  },
              })
            : (0, n.jsx)(g, { platformType: E })
        : null;
}
function g(e) {
    let { platformType: t } = e,
        r = p.A.get(t);
    return (0, n.jsxs)(m.mP, {
        platformType: t,
        children: [
            (0, n.jsx)("div", { className: E.iU, children: _.intl.format(_.t.AOKOe7, { name: r.name }) }),
            (0, n.jsx)("div", {
                className: E.UD,
                children: (0, n.jsx)(s.$n, {
                    className: E.HM,
                    disabled: !0,
                    children: (0, n.jsx)(o.y, { itemClassName: E.$N }),
                }),
            }),
        ],
    });
}
function h(e) {
    let { deeplink: t, onClick: r, platformType: l } = e,
        a = p.A.get(l);
    return (0, n.jsx)(m.mP, {
        platformType: l,
        children: (0, n.jsxs)("div", {
            className: E.UD,
            children: [
                (0, n.jsx)("div", {
                    className: E.iU,
                    children: _.intl.format(_.t["6ig6i5"], { connectionName: a.name }),
                }),
                (0, n.jsx)(u.D, {
                    tag: "a",
                    href: t,
                    onClick: r,
                    target: "_self",
                    children: (0, n.jsx)(s.$n, { className: E.HM, children: _.intl.string(_.t.flvacA) }),
                }),
            ],
        }),
    });
}
async function R(e) {
    let { platformType: t, code: r, state: n, openidParams: l, iss: a, handleCallbackResponse: c } = e;
    if (i.Fr || y) return !1;
    try {
        let e = await O.default
            .request(S.e$_.CONNECTIONS_CALLBACK, { code: r, openid_params: l, iss: a, state: n, providerType: t })
            .finally(() => {
                O.default.disconnect();
            });
        return c(e), !0;
    } catch (e) {
        return !1;
    }
}
async function w(e, t, r, n, l) {
    try {
        return await d.A.sessionHandoff(e, t, r, n, l), 0;
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
        handleCallbackError: l,
        openidParams: a,
        code: i,
        iss: c,
    } = e;
    try {
        let e = await d.A.callback(t, { code: i, openid_params: a, state: r, iss: c }, !y);
        return n(e), !0;
    } catch (e) {
        return l(e), !0;
    }
}
