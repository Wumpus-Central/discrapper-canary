n.d(t, { Z: () => w }), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
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
    g = n(649256),
    m = n(100527),
    b = n(728345),
    _ = n(962220),
    E = n(69580),
    O = n(703656),
    N = n(314897),
    y = n(553795),
    I = n(594174),
    v = n(626135),
    C = n(585483),
    S = n(591759),
    T = n(998502),
    P = n(996106),
    j = n(186901),
    A = n(981631);
function Z(e) {
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
function x(e, t) {
    null != e &&
        v.default.track(A.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, i.s)(e),
            link_type: t
        });
}
let w = {
    [A.Etm.INVITE_BROWSER]: {
        scope: j.cE,
        async handler(e) {
            let {
                    args: { code: t }
                } = e,
                { invite: n } = await p.ZP.resolveInvite(t, 'Desktop Modal');
            if (null == n) throw new P.Z({ errorCode: A.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
            return (
                N.default.isAuthenticated()
                    ? a.Z.dispatch({
                          type: 'INVITE_MODAL_OPEN',
                          invite: n,
                          code: t,
                          context: A.IlC.APP
                      })
                    : (0, O.dL)(A.Z5c.INVITE(t)),
                {
                    invite: n,
                    code: t
                }
            );
        }
    },
    [A.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: j.cE,
        async handler(e) {
            let {
                args: { code: t }
            } = e;
            if (null == I.default.getCurrentUser()) return;
            let { guildTemplate: i } = await _.Z.resolveGuildTemplate(t);
            if (null == i) throw new P.Z({ errorCode: A.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
            return (
                T.ZP.focus(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = Z({}, t)),
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
    [A.Etm.GIFT_CODE_BROWSER]: {
        scope: j.cE,
        handler(e) {
            let {
                args: { code: t }
            } = e;
            return new Promise((e, i) => {
                a.Z.wait(() => {
                    d.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: a } = i;
                            T.ZP.focus(),
                                v.default.track(A.rMx.OPEN_MODAL, {
                                    type: 'gift_accept',
                                    location: A.SaU
                                }),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e('92446'), n.e('43310')]).then(n.bind(n, 409858));
                                    return (n) => (0, r.jsx)(e, Z({ code: t }, n));
                                }),
                                e({ giftCode: a });
                        })
                        .catch(() => i(new P.Z({ errorCode: A.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                });
            });
        }
    },
    [A.Etm.DEEP_LINK]: {
        scope: j.cE,
        handler(e) {
            let {
                args: { type: t, params: n }
            } = e;
            switch ((T.ZP.focus(), t)) {
                case j.jE.USER_SETTINGS:
                    null != n && ((0, O.dL)(A.Z5c.SETTINGS(n.section, n.subsection)), x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.CHANGELOG:
                    null != n && ((0, O.dL)(S.Z.formatPathWithQuery(A.Z5c.CHANGELOGS(n.date), n.query)), x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.LIBRARY:
                    (0, O.dL)(A.Z5c.APPLICATION_LIBRARY), null != n && x(n.fingerprint, (0, j.O)(t));
                    break;
                case j.jE.STORE_HOME:
                    (0, O.dL)(A.Z5c.APPLICATION_STORE), null != n && x(n.fingerprint, (0, j.O)(t));
                    break;
                case j.jE.STORE_LISTING:
                    null != n && ((0, O.dL)(A.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, O.dL)({
                            pathname: A.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search
                        }),
                        x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.CHANNEL:
                    null != n &&
                        ((0, O.dL)({
                            pathname: A.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search
                        }),
                        x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.QUEST_HOME:
                    null != n
                        ? ((0, O.dL)({
                              pathname: A.Z5c.QUEST_HOME,
                              hash: n.questId
                          }),
                          x(n.fingerprint, (0, j.O)(t)))
                        : (0, O.dL)(A.Z5c.QUEST_HOME);
                    break;
                case j.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, O.dL)({
                            pathname: A.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: '?game='.concat(n.gameId)
                        }),
                        x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.OAUTH2:
                    let r = new URL(A.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let i = (0, E.getOAuth2AuthorizeProps)(r.toString());
                    if (null != i) return (0, E.openOAuth2ModalWithCreateGuildModal)(i), !0;
                    return !1;
                case j.jE.SHOP:
                    null != n &&
                        ((0, O.dL)({
                            pathname: A.Z5c.COLLECTIBLES_SHOP,
                            search: n.search
                        }),
                        x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.FEATURES:
                case j.jE.SHOP:
                    (null == n ? void 0 : n.path) != null && ((0, O.dL)({ pathname: n.path }), x(n.fingerprint, (0, j.O)(t)));
                    break;
                case j.jE.ACTIVITIES:
                    if (null != n)
                        return (
                            (async function (e, t) {
                                var r, i;
                                let l = h.ZP.getCurrentEmbeddedActivity();
                                if ((null == l ? void 0 : l.applicationId) === e) return;
                                let a = await b.ZP.fetchApplication(n.applicationId),
                                    o = null == a || null == (r = a.bot) ? void 0 : r.id;
                                if (null == o) return;
                                let s = await c.Z.openPrivateChannel(o),
                                    u = new URL(t),
                                    d = null != (i = u.searchParams.get('referrer_id')) ? i : void 0,
                                    { customId: p } = await (0, g.ur)(e, u.searchParams.get('link_id'), u.searchParams.get('custom_id'));
                                await (0, f.Z)({
                                    targetApplicationId: e,
                                    channelId: s,
                                    analyticsLocations: [m.Z.DEEPLINK],
                                    customId: p,
                                    referrerId: d
                                });
                            })(n.applicationId, n.url),
                            x(n.fingerprint, (0, j.O)(t)),
                            !0
                        );
                    return !1;
            }
        }
    },
    [A.Etm.BROWSER_HANDOFF]: {
        scope: j.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n }
            } = e;
            T.ZP.focus(null, !0), (0, s.lx)(t, n);
        }
    },
    [A.Etm.CONNECTIONS_CALLBACK]: {
        scope: j.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l }
            } = e;
            if (!y.Z.hasPendingAuthorizedState(l)) throw new P.Z({ errorCode: A.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
            try {
                return (
                    y.Z.deletePendingAuthorizedState(l),
                    await u.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400) throw new P.Z({ errorCode: A.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                throw (C.S.dispatch(A.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        }
    },
    [A.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: j.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r }
            } = e;
            return (0, o.rt)({
                paymentSourceType: A.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r
            });
        }
    },
    [A.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: j.cE,
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
