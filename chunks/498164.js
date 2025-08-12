n.d(t, { Z: () => A }), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(255367);
n(73800);
var i = n(756647),
    l = n(481060),
    a = n(570140),
    o = n(355467),
    s = n(899742),
    c = n(493683),
    u = n(457330),
    d = n(533307),
    p = n(317381),
    h = n(122613),
    f = n(649256),
    g = n(100527),
    m = n(728345),
    b = n(962220),
    _ = n(69580),
    O = n(703656),
    E = n(553795),
    y = n(594174),
    v = n(626135),
    I = n(585483),
    C = n(591759),
    S = n(998502),
    N = n(996106),
    T = n(109815),
    P = n(186901),
    j = n(981631);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
    null != e &&
        v.default.track(j.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, i.s)(e),
            link_type: t,
        });
}
let A = {
    [j.Etm.INVITE_BROWSER]: {
        scope: P.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            return await (0, T.T)(t, "Desktop Modal");
        },
    },
    [j.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: P.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == y.default.getCurrentUser()) return;
            let { guildTemplate: i } = await b.Z.resolveGuildTemplate(t);
            if (null == i)
                throw new N.Z({ errorCode: j.lTL.INVALID_GUILD_TEMPLATE }, "Invalid guild template id: ".concat(t));
            return (
                S.ZP.focus(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("10778"), n.e("58725")]).then(n.bind(n, 766775));
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
                            n),
                        );
                    };
                }),
                {
                    guildTemplate: i,
                    code: t,
                }
            );
        },
    },
    [j.Etm.GIFT_CODE_BROWSER]: {
        scope: P.cE,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, i) => {
                a.Z.wait(() => {
                    d.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: a } = i;
                            S.ZP.focus(),
                                v.default.track(j.rMx.OPEN_MODAL, {
                                    type: "gift_accept",
                                    location: j.SaU,
                                }),
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e("92446"), n.e("55356")]).then(
                                        n.bind(n, 409858),
                                    );
                                    return (n) => (0, r.jsx)(e, x({ code: t }, n));
                                }),
                                e({ giftCode: a });
                        })
                        .catch(() =>
                            i(new N.Z({ errorCode: j.lTL.INVALID_GIFT_CODE }, "Invalid gift code: ".concat(t))),
                        );
                });
            });
        },
    },
    [j.Etm.DEEP_LINK]: {
        scope: {
            [P.Gp.ANY]: [P.cE, P.lH],
        },
        handler(e) {
            let {
                args: { type: t, params: n },
            } = e;
            switch ((S.ZP.focus(), t)) {
                case P.jE.USER_SETTINGS:
                    null != n && ((0, O.dL)(j.Z5c.SETTINGS(n.section, n.subsection)), Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.CHANGELOG:
                    null != n &&
                        ((0, O.dL)(C.Z.formatPathWithQuery(j.Z5c.CHANGELOGS(n.date), n.query)),
                        Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.LIBRARY:
                    (0, O.dL)(j.Z5c.APPLICATION_LIBRARY), null != n && Z(n.fingerprint, (0, P.O)(t));
                    break;
                case P.jE.STORE_HOME:
                    (0, O.dL)(j.Z5c.APPLICATION_STORE), null != n && Z(n.fingerprint, (0, P.O)(t));
                    break;
                case P.jE.STORE_LISTING:
                    null != n &&
                        ((0, O.dL)(j.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)),
                        Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, O.dL)({
                            pathname: j.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.CHANNEL:
                    null != n &&
                        ((0, O.dL)({
                            pathname: j.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search,
                        }),
                        Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.QUEST_HOME:
                    null != n
                        ? ((0, O.dL)({
                              pathname: j.Z5c.QUEST_HOME,
                              hash: n.questId,
                          }),
                          Z(n.fingerprint, (0, P.O)(t)))
                        : (0, O.dL)(j.Z5c.QUEST_HOME);
                    break;
                case P.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, O.dL)({
                            pathname: j.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: "?game=".concat(n.gameId),
                        }),
                        Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.OAUTH2:
                    let r = new URL(j.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let i = (0, _.getOAuth2AuthorizeProps)(r.toString());
                    if (null != i) return (0, _.openOAuth2ModalWithCreateGuildModal)(i), !0;
                    return !1;
                case P.jE.SHOP:
                    null != n &&
                        ((0, O.dL)({
                            pathname: j.Z5c.COLLECTIBLES_SHOP,
                            search: n.search,
                        }),
                        Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.FEATURES:
                case P.jE.SHOP:
                    (null == n ? void 0 : n.path) != null &&
                        ((0, O.dL)({ pathname: n.path }), Z(n.fingerprint, (0, P.O)(t)));
                    break;
                case P.jE.ACTIVITIES:
                    if (null != n)
                        return (
                            (async function (e, t) {
                                var r, i;
                                let l = p.ZP.getCurrentEmbeddedActivity();
                                if ((null == l ? void 0 : l.applicationId) === e) return;
                                let a = await m.ZP.fetchApplication(n.applicationId),
                                    o = null == a || null == (r = a.bot) ? void 0 : r.id;
                                if (null == o) return;
                                let s = await c.Z.openPrivateChannel({ recipientIds: o }),
                                    u = new URL(t),
                                    d = null != (i = u.searchParams.get("referrer_id")) ? i : void 0,
                                    { customId: b } = await (0, f.ur)(
                                        e,
                                        u.searchParams.get("link_id"),
                                        u.searchParams.get("custom_id"),
                                    );
                                await (0, h.Z)({
                                    targetApplicationId: e,
                                    channelId: s,
                                    analyticsLocations: [g.Z.DEEPLINK],
                                    customId: b,
                                    referrerId: d,
                                });
                            })(n.applicationId, n.url),
                            Z(n.fingerprint, (0, P.O)(t)),
                            !0
                        );
                    return !1;
            }
        },
    },
    [j.Etm.BROWSER_HANDOFF]: {
        scope: P.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            S.ZP.focus(null, !0), (0, s.lx)(t, n);
        },
    },
    [j.Etm.CONNECTIONS_CALLBACK]: {
        scope: P.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l },
            } = e;
            if (!E.Z.hasPendingAuthorizedState(l))
                throw new N.Z(
                    { errorCode: j.lTL.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    E.Z.deletePendingAuthorizedState(l),
                    await u.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l,
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400)
                    throw new N.Z({ errorCode: j.lTL.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (I.S.dispatch(j.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [j.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: P.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r },
            } = e;
            return (0, o.rt)({
                paymentSourceType: j.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r,
            });
        },
    },
    [j.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: P.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r, payment_source_type: i },
            } = e;
            return (0, o.rt)({
                paymentSourceType: i,
                state: t,
                path: n,
                query: r,
            });
        },
    },
};
