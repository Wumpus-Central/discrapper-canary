n.d(t, { Z: () => b }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651);
n(192379);
var l = n(756647),
    r = n(481060),
    a = n(570140),
    s = n(355467),
    o = n(899742),
    c = n(457330),
    d = n(533307),
    u = n(447543),
    h = n(185669),
    m = n(962220),
    p = n(69580),
    g = n(703656),
    _ = n(314897),
    f = n(553795),
    E = n(594174),
    I = n(626135),
    C = n(585483),
    v = n(591759),
    N = n(998502),
    T = n(996106),
    S = n(186901),
    Z = n(981631);
function A(e, t) {
    null != e &&
        I.default.track(Z.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.s)(e),
            link_type: t
        });
}
let b = {
    [Z.Etm.INVITE_BROWSER]: {
        scope: S.cE,
        async handler(e) {
            let {
                    args: { code: t }
                } = e,
                { invite: n } = await u.Z.resolveInvite(t, 'Desktop Modal');
            if (null == n) throw new T.Z({ errorCode: Z.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
            return (
                _.default.isAuthenticated()
                    ? a.Z.dispatch({
                          type: 'INVITE_MODAL_OPEN',
                          invite: n,
                          code: t,
                          context: Z.IlC.APP
                      })
                    : (0, g.dL)(Z.Z5c.INVITE(t)),
                {
                    invite: n,
                    code: t
                }
            );
        }
    },
    [Z.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: S.cE,
        async handler(e) {
            let {
                args: { code: t }
            } = e;
            if (null == E.default.getCurrentUser()) return;
            let { guildTemplate: l } = await m.Z.resolveGuildTemplate(t);
            if (null == l) throw new T.Z({ errorCode: Z.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
            return (
                N.ZP.focus(),
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('10778'), n.e('92713')]).then(n.bind(n, 766775));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildTemplate: l
                        });
                }),
                {
                    guildTemplate: l,
                    code: t
                }
            );
        }
    },
    [Z.Etm.GIFT_CODE_BROWSER]: {
        scope: S.cE,
        handler(e) {
            let {
                args: { code: t }
            } = e;
            return new Promise((e, l) => {
                a.Z.wait(() => {
                    d.Z.resolveGiftCode(t, !0, !0)
                        .then((l) => {
                            let { giftCode: a } = l;
                            N.ZP.focus(),
                                I.default.track(Z.rMx.OPEN_MODAL, {
                                    type: 'gift_accept',
                                    location: Z.SaU
                                }),
                                (0, r.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e('92446'), n.e('67590')]).then(n.bind(n, 409858));
                                    return (n) =>
                                        (0, i.jsx)(e, {
                                            code: t,
                                            ...n
                                        });
                                }),
                                e({ giftCode: a });
                        })
                        .catch(() => l(new T.Z({ errorCode: Z.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                });
            });
        }
    },
    [Z.Etm.DEEP_LINK]: {
        scope: S.cE,
        handler(e) {
            let {
                args: { type: t, params: n }
            } = e;
            switch ((N.ZP.focus(), t)) {
                case S.jE.USER_SETTINGS:
                    null != n && ((0, g.dL)(Z.Z5c.SETTINGS(n.section, n.subsection)), A(n.fingerprint, 'settings'));
                    break;
                case S.jE.CHANGELOG:
                    null != n && ((0, g.dL)(v.Z.formatPathWithQuery(Z.Z5c.CHANGELOGS(n.date), n.query)), A(n.fingerprint, 'changelog'));
                    break;
                case S.jE.LIBRARY:
                    (0, g.dL)(Z.Z5c.APPLICATION_LIBRARY), null != n && A(n.fingerprint, 'library');
                    break;
                case S.jE.STORE_HOME:
                    (0, g.dL)(Z.Z5c.APPLICATION_STORE), null != n && A(n.fingerprint, 'store');
                    break;
                case S.jE.STORE_LISTING:
                    null != n && ((0, g.dL)(Z.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), A(n.fingerprint, 'store'));
                    break;
                case S.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, g.dL)({
                            pathname: Z.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search
                        }),
                        A(n.fingerprint, 'guild_settings'));
                    break;
                case S.jE.CHANNEL:
                    null != n &&
                        ((0, g.dL)({
                            pathname: Z.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search
                        }),
                        A(n.fingerprint, 'channel'));
                    break;
                case S.jE.QUEST_HOME:
                    null != n
                        ? ((0, g.dL)({
                              pathname: Z.Z5c.QUEST_HOME,
                              hash: n.questId
                          }),
                          A(n.fingerprint, 'quest_home'))
                        : (0, g.dL)(Z.Z5c.QUEST_HOME);
                    break;
                case S.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, g.dL)({
                            pathname: Z.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: '?game='.concat(n.gameId)
                        }),
                        A(n.fingerprint, 'discovery_game'));
                    break;
                case S.jE.OAUTH2:
                    let i = new URL(Z.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    i.search = n.search;
                    let l = (0, p.getOAuth2AuthorizeProps)(i.toString());
                    if (null != l) return (0, p.openOAuth2ModalWithCreateGuildModal)(l), !0;
                    return !1;
            }
        }
    },
    [Z.Etm.BROWSER_HANDOFF]: {
        scope: S.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n }
            } = e;
            N.ZP.focus(null, !0), (0, o.lx)(t, n);
        }
    },
    [Z.Etm.CONNECTIONS_CALLBACK]: {
        scope: S.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: l, state: r }
            } = e;
            if (!h.g.getCurrentConfig({ location: 'private.CONNECTIONS_CALLBACK' }).enabled && !f.Z.hasPendingAuthorizedState(r)) throw new T.Z({ errorCode: Z.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
            try {
                return (
                    f.Z.deletePendingAuthorizedState(r),
                    await c.Z.callback(t, {
                        code: n,
                        openid_params: i,
                        iss: l,
                        state: r
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400) throw new T.Z({ errorCode: Z.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                throw (C.S.dispatch(Z.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        }
    },
    [Z.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: S.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: i }
            } = e;
            return (0, s.rt)({
                paymentSourceType: Z.HeQ.PAYPAL,
                state: t,
                path: n,
                query: i
            });
        }
    },
    [Z.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: S.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: l }
            } = e;
            return (0, s.rt)({
                paymentSourceType: l,
                state: t,
                path: n,
                query: i
            });
        }
    }
};
