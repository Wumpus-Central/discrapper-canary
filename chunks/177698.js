n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(531826),
    s = n(812206),
    o = n(69580),
    d = n(371651),
    c = n(808506),
    u = n(358085),
    h = n(998502),
    m = n(145597),
    p = n(996106),
    g = n(703912),
    _ = n(852926),
    f = n(981631);
let E = (0, g.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: c, scopes: u, parsedPermissions: h, responseType: g, redirectUri: E, codeChallenge: I, codeChallengeMethod: C, state: N, guildId: v, channelId: T, prompt: S, disableGuildSelect: A, disclosures: Z, integrationType: x, pid: b } = e,
            L = 'OAuth2Authorize_'.concat(n, '_').concat(v, '_').concat(T),
            y = null != x ? (null == c ? void 0 : c.get(x)) : void 0,
            O = null !== (t = null == y ? void 0 : y.application) && void 0 !== t ? t : s.Z.getApplication(n);
        return new Promise((e, t) => {
            let s = (0, _.jU)(b),
                y = (i) => {
                    let { clientId: l, location: a } = i;
                    (null == l || l === n) && (s.lock(), r.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', y), null != location ? e(a) : t(new p.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'User cancelled authorization')));
                },
                P = d.default.isOverlayOOPEnabledForPid(null != b ? b : (0, m.QF)());
            if (s.context === f.IlC.OVERLAY && !P) {
                r.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', y),
                    r.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: c,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != Z ? Z : [],
                            responseType: g,
                            redirectUri: E,
                            codeChallenge: I,
                            codeChallengeMethod: C,
                            state: N,
                            permissions: h.toString(),
                            guildId: v,
                            channelId: T,
                            prompt: S,
                            disableGuildSelect: 'boolean' == typeof A ? A : 'true' === A,
                            integrationType: x
                        }
                    });
                return;
            }
            let R = l.z1l;
            null != O &&
            null !=
                (0, a.ZP)({
                    application: O,
                    channelId: T
                })
                ? (R = l.u1M)
                : P && (R = l.u1M),
                (0, l.h7j)(
                    (e) =>
                        (0, i.jsx)(o.OAuth2AuthorizeModal, {
                            ...e,
                            authorizations: c,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != Z ? Z : [],
                            callback: y,
                            responseType: g,
                            redirectUri: E,
                            codeChallenge: I,
                            codeChallengeMethod: C,
                            state: N,
                            permissions: h,
                            guildId: v,
                            channelId: T,
                            prompt: S,
                            disableGuildSelect: 'boolean' == typeof A ? A : 'true' === A,
                            integrationType: x
                        }),
                    {
                        modalKey: L,
                        onCloseRequest: () => {
                            (0, l.Mr3)(L), t(new p.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                        }
                    },
                    R
                );
        });
    },
    function (e, t, n) {
        if (c.Z.isReady(null != n ? n : 0) || !u.isPlatformEmbedded) return;
        let i = (0, a.ZP)({
            application: e,
            channelId: t
        });
        (0, u.isWindows)() ? h.ZP.minimize(i) : h.ZP.restore(i), h.ZP.focus(i);
    }
);
