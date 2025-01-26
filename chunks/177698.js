var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(531826),
    s = n(812206),
    o = n(69580),
    c = n(371651),
    d = n(808506),
    u = n(358085),
    h = n(998502),
    m = n(145597),
    p = n(996106),
    g = n(703912),
    f = n(852926),
    _ = n(981631);
t.Z = (0, g.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: d, scopes: u, parsedPermissions: h, responseType: g, redirectUri: E, codeChallenge: I, codeChallengeMethod: C, state: v, guildId: N, channelId: S, prompt: T, disableGuildSelect: b, disclosures: A, integrationType: Z, pid: x } = e,
            L = 'OAuth2Authorize_'.concat(n, '_').concat(N, '_').concat(S),
            y = null != Z ? (null == d ? void 0 : d.get(Z)) : void 0,
            P = null !== (t = null == y ? void 0 : y.application) && void 0 !== t ? t : s.Z.getApplication(n);
        return new Promise((e, t) => {
            let s = (0, f.jU)(x),
                y = (i) => {
                    let { clientId: r, location: a } = i;
                    if (null == r || r === n) s.lock(), l.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', y), null != location ? e(a) : t(new p.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                },
                O = c.Z.isOverlayOOPEnabledForPid(null != x ? x : (0, m.QF)());
            if (s.context === _.IlC.OVERLAY && !O) {
                l.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', y),
                    l.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: d,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != A ? A : [],
                            responseType: g,
                            redirectUri: E,
                            codeChallenge: I,
                            codeChallengeMethod: C,
                            state: v,
                            permissions: h.toString(),
                            guildId: N,
                            channelId: S,
                            prompt: T,
                            disableGuildSelect: 'boolean' == typeof b ? b : 'true' === b,
                            integrationType: Z
                        }
                    });
                return;
            }
            let R = r.DEFAULT_MODAL_CONTEXT;
            null != P &&
            null !=
                (0, a.ZP)({
                    application: P,
                    channelId: S
                })
                ? (R = r.POPOUT_MODAL_CONTEXT)
                : O && (R = r.POPOUT_MODAL_CONTEXT),
                (0, r.openModal)(
                    (e) =>
                        (0, i.jsx)(o.OAuth2AuthorizeModal, {
                            ...e,
                            authorizations: d,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != A ? A : [],
                            callback: y,
                            responseType: g,
                            redirectUri: E,
                            codeChallenge: I,
                            codeChallengeMethod: C,
                            state: v,
                            permissions: h,
                            guildId: N,
                            channelId: S,
                            prompt: T,
                            disableGuildSelect: 'boolean' == typeof b ? b : 'true' === b,
                            integrationType: Z
                        }),
                    {
                        modalKey: L,
                        onCloseRequest: () => {
                            (0, r.closeModal)(L), t(new p.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                        }
                    },
                    R
                );
        });
    },
    function (e, t, n) {
        if (d.Z.isReady(null != n ? n : 0) || !u.isPlatformEmbedded) return;
        let i = (0, a.ZP)({
            application: e,
            channelId: t
        });
        (0, u.isWindows)() ? h.ZP.minimize(i) : h.ZP.restore(i), h.ZP.focus(i);
    }
);
