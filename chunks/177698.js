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
        let { clientId: n, authorizations: d, scopes: u, parsedPermissions: h, responseType: g, redirectUri: E, codeChallenge: I, codeChallengeMethod: C, state: N, guildId: v, channelId: S, prompt: T, disableGuildSelect: A, disclosures: b, integrationType: Z, pid: x } = e,
            L = 'OAuth2Authorize_'.concat(n, '_').concat(v, '_').concat(S),
            P = null != Z ? (null == d ? void 0 : d.get(Z)) : void 0,
            O = null !== (t = null == P ? void 0 : P.application) && void 0 !== t ? t : s.Z.getApplication(n);
        return new Promise((e, t) => {
            let s = (0, f.jU)(x),
                P = (i) => {
                    let { clientId: r, location: a } = i;
                    if (null == r || r === n) s.lock(), l.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', P), null != location ? e(a) : t(new p.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                },
                y = c.Z.isOverlayOOPEnabledForPid(null != x ? x : (0, m.QF)());
            if (s.context === _.IlC.OVERLAY && !y) {
                l.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', P),
                    l.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: d,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != b ? b : [],
                            responseType: g,
                            redirectUri: E,
                            codeChallenge: I,
                            codeChallengeMethod: C,
                            state: N,
                            permissions: h.toString(),
                            guildId: v,
                            channelId: S,
                            prompt: T,
                            disableGuildSelect: 'boolean' == typeof A ? A : 'true' === A,
                            integrationType: Z
                        }
                    });
                return;
            }
            (0, r.openModal)(
                (e) =>
                    (0, i.jsx)(o.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: d,
                        clientId: n,
                        scopes: null != u ? u : [],
                        disclosures: null != b ? b : [],
                        callback: P,
                        responseType: g,
                        redirectUri: E,
                        codeChallenge: I,
                        codeChallengeMethod: C,
                        state: N,
                        permissions: h,
                        guildId: v,
                        channelId: S,
                        prompt: T,
                        disableGuildSelect: 'boolean' == typeof A ? A : 'true' === A,
                        integrationType: Z
                    }),
                {
                    modalKey: L,
                    onCloseRequest: () => {
                        (0, r.closeModal)(L), t(new p.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                    }
                },
                null != O &&
                    null !=
                        (0, a.ZP)({
                            application: O,
                            channelId: S
                        })
                    ? r.POPOUT_MODAL_CONTEXT
                    : r.DEFAULT_MODAL_CONTEXT
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
