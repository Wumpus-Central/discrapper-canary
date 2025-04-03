n.d(t, { Z: () => w }), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(200651);
n(192379);
var i = n(756647),
    l = n(481060),
    a = n(570140),
    o = n(355467),
    s = n(899742),
    c = n(493683),
    u = n(457330),
    d = n(533307),
    p = n(447543),
    h = n(317381),
    f = n(122613),
    g = n(508686),
    m = n(100527),
    b = n(728345),
    _ = n(185669),
    E = n(962220),
    O = n(69580),
    N = n(703656),
    y = n(314897),
    I = n(553795),
    v = n(594174),
    C = n(626135),
    S = n(585483),
    T = n(591759),
    P = n(998502),
    j = n(996106),
    A = n(186901),
    Z = n(981631);
function x(e) {
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
function L(e, t) {
    null != e &&
        C.default.track(Z.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, i.s)(e),
            link_type: t
        });
}
let w = {
    [Z.Etm.INVITE_BROWSER]: {
        scope: A.cE,
        async handler(e) {
            let {
                    args: { code: t }
                } = e,
                { invite: n } = await p.ZP.resolveInvite(t, 'Desktop Modal');
            if (null == n) throw new j.Z({ errorCode: Z.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
            return (
                y.default.isAuthenticated()
                    ? a.Z.dispatch({
                          type: 'INVITE_MODAL_OPEN',
                          invite: n,
                          code: t,
                          context: Z.IlC.APP
                      })
                    : (0, N.dL)(Z.Z5c.INVITE(t)),
                {
                    invite: n,
                    code: t
                }
            );
        }
    },
    [Z.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: A.cE,
        async handler(e) {
            let {
                args: { code: t }
            } = e;
            if (null == v.default.getCurrentUser()) return;
            let { guildTemplate: i } = await E.Z.resolveGuildTemplate(t);
            if (null == i) throw new j.Z({ errorCode: Z.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
            return (
                P.ZP.focus(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = x({}, t)),
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
    [Z.Etm.GIFT_CODE_BROWSER]: {
        scope: A.cE,
        handler(e) {
            let {
                args: { code: t }
            } = e;
            return new Promise((e, i) => {
                a.Z.wait(() => {
                    d.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: a } = i;
                            P.ZP.focus(),
                                C.default.track(Z.rMx.OPEN_MODAL, {
                                    type: 'gift_accept',
                                    location: Z.SaU
                                }),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e('92446'), n.e('43310')]).then(n.bind(n, 409858));
                                    return (n) => (0, r.jsx)(e, x({ code: t }, n));
                                }),
                                e({ giftCode: a });
                        })
                        .catch(() => i(new j.Z({ errorCode: Z.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                });
            });
        }
    },
    [Z.Etm.DEEP_LINK]: {
        scope: A.cE,
        handler(e) {
            let {
                args: { type: t, params: n }
            } = e;
            switch ((P.ZP.focus(), t)) {
                case A.jE.USER_SETTINGS:
                    null != n && ((0, N.dL)(Z.Z5c.SETTINGS(n.section, n.subsection)), L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.CHANGELOG:
                    null != n && ((0, N.dL)(T.Z.formatPathWithQuery(Z.Z5c.CHANGELOGS(n.date), n.query)), L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.LIBRARY:
                    (0, N.dL)(Z.Z5c.APPLICATION_LIBRARY), null != n && L(n.fingerprint, (0, A.O)(t));
                    break;
                case A.jE.STORE_HOME:
                    (0, N.dL)(Z.Z5c.APPLICATION_STORE), null != n && L(n.fingerprint, (0, A.O)(t));
                    break;
                case A.jE.STORE_LISTING:
                    null != n && ((0, N.dL)(Z.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, N.dL)({
                            pathname: Z.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search
                        }),
                        L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.CHANNEL:
                    null != n &&
                        ((0, N.dL)({
                            pathname: Z.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search
                        }),
                        L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.QUEST_HOME:
                    null != n
                        ? ((0, N.dL)({
                              pathname: Z.Z5c.QUEST_HOME,
                              hash: n.questId
                          }),
                          L(n.fingerprint, (0, A.O)(t)))
                        : (0, N.dL)(Z.Z5c.QUEST_HOME);
                    break;
                case A.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, N.dL)({
                            pathname: Z.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: '?game='.concat(n.gameId)
                        }),
                        L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.OAUTH2:
                    let r = new URL(Z.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let i = (0, O.getOAuth2AuthorizeProps)(r.toString());
                    if (null != i) return (0, O.openOAuth2ModalWithCreateGuildModal)(i), !0;
                    return !1;
                case A.jE.SHOP:
                    null != n &&
                        ((0, N.dL)({
                            pathname: Z.Z5c.COLLECTIBLES_SHOP,
                            search: n.search
                        }),
                        L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.FEATURES:
                case A.jE.SHOP:
                    (null == n ? void 0 : n.path) != null && ((0, N.dL)({ pathname: n.path }), L(n.fingerprint, (0, A.O)(t)));
                    break;
                case A.jE.ACTIVITIES:
                    if (null != n)
                        return (
                            (async function (e, t) {
                                var r;
                                let i = h.ZP.getCurrentEmbeddedActivity();
                                if ((null == i ? void 0 : i.applicationId) === e) return;
                                let l = await b.ZP.fetchApplication(n.applicationId),
                                    a = null == l || null == (r = l.bot) ? void 0 : r.id;
                                if (null == a) return;
                                let o = await c.Z.openPrivateChannel(a),
                                    s = new URL(t),
                                    { customId: u, referrerId: d } = await (0, g.u)(e, s.searchParams.get('link_id'), s.searchParams.get('custom_id'), s.searchParams.get('referrer_id'));
                                await (0, f.Z)({
                                    targetApplicationId: e,
                                    channelId: o,
                                    analyticsLocations: [m.Z.DEEPLINK],
                                    customId: u,
                                    referrerId: d
                                });
                            })(n.applicationId, n.url),
                            L(n.fingerprint, (0, A.O)(t)),
                            !0
                        );
                    return !1;
            }
        }
    },
    [Z.Etm.BROWSER_HANDOFF]: {
        scope: A.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n }
            } = e;
            P.ZP.focus(null, !0), (0, s.lx)(t, n);
        }
    },
    [Z.Etm.CONNECTIONS_CALLBACK]: {
        scope: A.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l }
            } = e;
            if (!_.g.getCurrentConfig({ location: 'private.CONNECTIONS_CALLBACK' }).enabled && !I.Z.hasPendingAuthorizedState(l)) throw new j.Z({ errorCode: Z.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
            try {
                return (
                    I.Z.deletePendingAuthorizedState(l),
                    await u.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400) throw new j.Z({ errorCode: Z.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                throw (S.S.dispatch(Z.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        }
    },
    [Z.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: A.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r }
            } = e;
            return (0, o.rt)({
                paymentSourceType: Z.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r
            });
        }
    },
    [Z.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: A.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r, payment_source_type: i }
            } = e;
            return (0, o.rt)({
                paymentSourceType: i,
                state: t,
                path: n,
                query: r
            });
        }
    }
};
