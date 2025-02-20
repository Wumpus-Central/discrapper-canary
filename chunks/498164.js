n.d(t, { Z: () => P }), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(200651);
n(192379);
var i = n(756647),
    l = n(481060),
    o = n(570140),
    a = n(355467),
    s = n(899742),
    c = n(457330),
    u = n(533307),
    d = n(447543),
    p = n(185669),
    h = n(962220),
    f = n(69580),
    g = n(703656),
    m = n(314897),
    b = n(553795),
    _ = n(594174),
    E = n(626135),
    O = n(585483),
    N = n(591759),
    v = n(998502),
    y = n(996106),
    I = n(186901),
    C = n(981631);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    null != e &&
        E.default.track(C.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, i.s)(e),
            link_type: t
        });
}
let P = {
    [C.Etm.INVITE_BROWSER]: {
        scope: I.cE,
        async handler(e) {
            let {
                    args: { code: t }
                } = e,
                { invite: n } = await d.Z.resolveInvite(t, 'Desktop Modal');
            if (null == n) throw new y.Z({ errorCode: C.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
            return (
                m.default.isAuthenticated()
                    ? o.Z.dispatch({
                          type: 'INVITE_MODAL_OPEN',
                          invite: n,
                          code: t,
                          context: C.IlC.APP
                      })
                    : (0, g.dL)(C.Z5c.INVITE(t)),
                {
                    invite: n,
                    code: t
                }
            );
        }
    },
    [C.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: I.cE,
        async handler(e) {
            let {
                args: { code: t }
            } = e;
            if (null == _.default.getCurrentUser()) return;
            let { guildTemplate: i } = await h.Z.resolveGuildTemplate(t);
            if (null == i) throw new y.Z({ errorCode: C.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
            return (
                v.ZP.focus(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('10778'), n.e('82195')]).then(n.bind(n, 766775));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = S({}, t)),
                            (l = l = { guildTemplate: i }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n)
                        );
                    };
                }),
                {
                    guildTemplate: i,
                    code: t
                }
            );
        }
    },
    [C.Etm.GIFT_CODE_BROWSER]: {
        scope: I.cE,
        handler(e) {
            let {
                args: { code: t }
            } = e;
            return new Promise((e, i) => {
                o.Z.wait(() => {
                    u.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: o } = i;
                            v.ZP.focus(),
                                E.default.track(C.rMx.OPEN_MODAL, {
                                    type: 'gift_accept',
                                    location: C.SaU
                                }),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e('92446'), n.e('76837')]).then(n.bind(n, 409858));
                                    return (n) => (0, r.jsx)(e, S({ code: t }, n));
                                }),
                                e({ giftCode: o });
                        })
                        .catch(() => i(new y.Z({ errorCode: C.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                });
            });
        }
    },
    [C.Etm.DEEP_LINK]: {
        scope: I.cE,
        handler(e) {
            let {
                args: { type: t, params: n }
            } = e;
            switch ((v.ZP.focus(), t)) {
                case I.jE.USER_SETTINGS:
                    null != n && ((0, g.dL)(C.Z5c.SETTINGS(n.section, n.subsection)), T(n.fingerprint, 'settings'));
                    break;
                case I.jE.CHANGELOG:
                    null != n && ((0, g.dL)(N.Z.formatPathWithQuery(C.Z5c.CHANGELOGS(n.date), n.query)), T(n.fingerprint, 'changelog'));
                    break;
                case I.jE.LIBRARY:
                    (0, g.dL)(C.Z5c.APPLICATION_LIBRARY), null != n && T(n.fingerprint, 'library');
                    break;
                case I.jE.STORE_HOME:
                    (0, g.dL)(C.Z5c.APPLICATION_STORE), null != n && T(n.fingerprint, 'store');
                    break;
                case I.jE.STORE_LISTING:
                    null != n && ((0, g.dL)(C.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), T(n.fingerprint, 'store'));
                    break;
                case I.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, g.dL)({
                            pathname: C.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search
                        }),
                        T(n.fingerprint, 'guild_settings'));
                    break;
                case I.jE.CHANNEL:
                    null != n &&
                        ((0, g.dL)({
                            pathname: C.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search
                        }),
                        T(n.fingerprint, 'channel'));
                    break;
                case I.jE.QUEST_HOME:
                    null != n
                        ? ((0, g.dL)({
                              pathname: C.Z5c.QUEST_HOME,
                              hash: n.questId
                          }),
                          T(n.fingerprint, 'quest_home'))
                        : (0, g.dL)(C.Z5c.QUEST_HOME);
                    break;
                case I.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, g.dL)({
                            pathname: C.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: '?game='.concat(n.gameId)
                        }),
                        T(n.fingerprint, 'discovery_game'));
                    break;
                case I.jE.OAUTH2:
                    let r = new URL(C.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let i = (0, f.getOAuth2AuthorizeProps)(r.toString());
                    if (null != i) return (0, f.openOAuth2ModalWithCreateGuildModal)(i), !0;
                    return !1;
            }
        }
    },
    [C.Etm.BROWSER_HANDOFF]: {
        scope: I.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n }
            } = e;
            v.ZP.focus(null, !0), (0, s.lx)(t, n);
        }
    },
    [C.Etm.CONNECTIONS_CALLBACK]: {
        scope: I.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l }
            } = e;
            if (!p.g.getCurrentConfig({ location: 'private.CONNECTIONS_CALLBACK' }).enabled && !b.Z.hasPendingAuthorizedState(l)) throw new y.Z({ errorCode: C.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
            try {
                return (
                    b.Z.deletePendingAuthorizedState(l),
                    await c.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400) throw new y.Z({ errorCode: C.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                throw (O.S.dispatch(C.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        }
    },
    [C.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: I.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r }
            } = e;
            return (0, a.rt)({
                paymentSourceType: C.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r
            });
        }
    },
    [C.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: I.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r, payment_source_type: i }
            } = e;
            return (0, a.rt)({
                paymentSourceType: i,
                state: t,
                path: n,
                query: r
            });
        }
    }
};
