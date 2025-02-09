n.r(t),
    n.d(t, {
        VerifyAccountDeekLink: () => _,
        VerifyAccountLoading: () => E,
        default: () => m
    }),
    n(47120),
    n(757143),
    n(773603);
var r = n(200651),
    c = n(192379),
    o = n(512969),
    l = n(873546),
    i = n(604039),
    a = n(481060),
    s = n(457330),
    u = n(733427),
    d = n(169382),
    f = n(726542),
    p = n(536285),
    N = n(591759),
    C = n(656649),
    O = n(981631),
    g = n(388032),
    v = n(667744);
let S = null != window.opener;
function m() {
    var e, t;
    let n = (0, o.k6)(),
        a = (0, d.l)(),
        p = a.get('code'),
        g = a.get('oauth_verifier'),
        v = null !== (e = a.get('state')) && void 0 !== e ? e : '',
        m = a.get('loading'),
        b = null !== (t = a.get('iss')) && void 0 !== t ? t : void 0,
        { type: A } = (0, o.UO)(),
        T = (0, C.vJ)(A),
        [x, w] = c.useState(!1),
        [Z, j] = c.useState(!1),
        k = (0, u.Z)(),
        D = null == g ? (null != p ? p : '') : g;
    c.useEffect(() => {
        let e;
        if (null != m) return;
        for (let t of a.keys()) t.startsWith('openid.') && (null == e && (e = {}), (e[t] = a.get(t)));
        let t = (0, C.vJ)(A);
        (async function () {
            if (null == t || !f.Z.isSupported(t)) return;
            function r(e) {
                let { status: r, body: c } = e;
                if (null != t) {
                    if (null == c ? void 0 : c.redirect) {
                        window.location = c.redirect;
                        return;
                    }
                    if ([200, 204].includes(r)) {
                        n.replace(O.Z5c.CONNECTIONS_SUCCESS(t)), S && window.close();
                        return;
                    }
                    (null == c ? void 0 : c.code) != null && a.append('error-code', c.code), n.replace(''.concat(O.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                }
            }
            if (
                await h({
                    platformType: t,
                    code: D,
                    state: v,
                    openidParams: e,
                    iss: b,
                    handleCallbackResponse: r
                })
            )
                return;
            let c = await R(t, v, D, e, b);
            if (0 === c) {
                w(!0);
                return;
            }
            if (1 === c) {
                n.replace(''.concat(O.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                return;
            }
            if (3 === c) {
                if (l.tq) {
                    j(!0);
                    return;
                }
                n.replace(''.concat(O.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                return;
            }
            y({
                platformType: t,
                state: v,
                handleCallbackResponse: r,
                handleCallbackError: () => {
                    n.replace(''.concat(O.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                },
                openidParams: e,
                code: D,
                iss: b
            });
        })();
    }, [D, n, m, A, a, v, b]),
        c.useEffect(() => {
            let e;
            if (!x) return;
            let t = 0;
            async function r() {
                if (null == T) return;
                let { handoff_status: c, success_redirect: o } = (await s.Z.getHandoffStatus(T, v)).body;
                if (c === i.g.HANDOFF_SUCCESS) return null == N.Z.toURLSafe(o) ? n.replace(O.Z5c.CONNECTIONS_SUCCESS(T)) : ((window.location = o), void 0);
                if (c === i.g.HANDOFF_ERROR || t >= 10) return n.replace(O.Z5c.CONNECTIONS_ERROR(T));
                e = setTimeout(() => {
                    k() && ((t += 1), r());
                }, 1000);
            }
            return (
                r(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [k, n, T, x, v]);
    let I = c.useMemo(() => {
        if (null != T) return 'discord://'.concat(O.Z5c.CONNECTIONS(T), '/?').concat(a.toString());
    }, [T, a]);
    return null != T && f.Z.isSupported(T)
        ? Z
            ? (0, r.jsx)(_, {
                  platformType: T,
                  deeplink: I,
                  onClick: () => {
                      j(!1), w(!0);
                  }
              })
            : (0, r.jsx)(E, { platformType: T })
        : null;
}
function E(e) {
    let { platformType: t } = e,
        n = f.Z.get(t);
    return (0, r.jsxs)(C.UV, {
        platformType: t,
        children: [
            (0, r.jsx)('div', {
                className: v.message,
                children: g.intl.format(g.t.AOKOe3, { name: n.name })
            }),
            (0, r.jsx)('div', {
                className: v.buttonContainer,
                children: (0, r.jsx)(a.zxk, {
                    className: v.btn,
                    disabled: !0,
                    children: (0, r.jsx)(a.$jN, { itemClassName: v.spinnerItem })
                })
            })
        ]
    });
}
function _(e) {
    let { deeplink: t, onClick: n, platformType: c } = e,
        o = f.Z.get(c);
    return (0, r.jsx)(C.UV, {
        platformType: c,
        children: (0, r.jsxs)('div', {
            className: v.buttonContainer,
            children: [
                (0, r.jsx)('div', {
                    className: v.message,
                    children: g.intl.format(g.t['6ig6i4'], { connectionName: o.name })
                }),
                (0, r.jsx)(a.P3F, {
                    tag: 'a',
                    href: t,
                    onClick: n,
                    target: '_self',
                    children: (0, r.jsx)(a.zxk, {
                        className: v.btn,
                        children: g.intl.string(g.t.flvacH)
                    })
                })
            ]
        })
    });
}
async function h(e) {
    let { platformType: t, code: n, state: r, openidParams: c, iss: o, handleCallbackResponse: i } = e;
    if (l.tq || S) return !1;
    try {
        let e = await p.default
            .request(O.Etm.CONNECTIONS_CALLBACK, {
                code: n,
                openid_params: c,
                iss: o,
                state: r,
                providerType: t
            })
            .finally(() => {
                p.default.disconnect();
            });
        return i(e), !0;
    } catch (e) {
        return !1;
    }
}
async function R(e, t, n, r, c) {
    try {
        return await s.Z.sessionHandoff(e, t, n, r, c), 0;
    } catch (e) {
        var o, l;
        if ((null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.code) === 10020) return 2;
        if ((null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === 40001) return 3;
        return 1;
    }
}
async function y(e) {
    let { platformType: t, state: n, handleCallbackResponse: r, handleCallbackError: c, openidParams: o, code: l, iss: i } = e;
    try {
        let e = await s.Z.callback(
            t,
            {
                code: l,
                openid_params: o,
                state: n,
                iss: i
            },
            !S
        );
        return r(e), !0;
    } catch (e) {
        return c(), !0;
    }
}
