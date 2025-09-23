n.d(t, { Z: () => R }), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(951288);
n(647438);
var i = n(772848),
    l = n(756647),
    a = n(481060),
    o = n(570140),
    s = n(355467),
    c = n(899742),
    u = n(493683),
    d = n(457330),
    p = n(533307),
    f = n(317381),
    h = n(122613),
    g = n(649256),
    m = n(100527),
    b = n(728345),
    _ = n(962220),
    O = n(69580),
    E = n(937797),
    y = n(703656),
    v = n(553795),
    I = n(594174),
    C = n(626135),
    S = n(585483),
    T = n(591759),
    N = n(998502),
    P = n(996106),
    j = n(109815),
    x = n(186901),
    A = n(981631),
    Z = n(46140);
function w(e) {
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
function L(e, t) {
    null != e &&
        C.default.track(A.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.s)(e),
            link_type: t,
        });
}
let R = {
    [A.Etm.INVITE_BROWSER]: {
        scope: x.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            return await (0, j.T)(t, "Desktop Modal");
        },
    },
    [A.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: x.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == I.default.getCurrentUser()) return;
            let { guildTemplate: i } = await _.Z.resolveGuildTemplate(t);
            if (null == i)
                throw new P.Z({ errorCode: A.lTL.INVALID_GUILD_TEMPLATE }, "Invalid guild template id: ".concat(t));
            return (
                N.ZP.focus(),
                (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("10778"), n.e("10570")]).then(n.bind(n, 766775));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = w({}, t)),
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
    [A.Etm.GIFT_CODE_BROWSER]: {
        scope: x.cE,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, i) => {
                o.Z.wait(() => {
                    p.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: l } = i;
                            N.ZP.focus(),
                                C.default.track(A.rMx.OPEN_MODAL, {
                                    type: "gift_accept",
                                    location: A.SaU,
                                }),
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e("92446"), n.e("74387")]).then(
                                        n.bind(n, 409858),
                                    );
                                    return (n) => (0, r.jsx)(e, w({ code: t }, n));
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() =>
                            i(new P.Z({ errorCode: A.lTL.INVALID_GIFT_CODE }, "Invalid gift code: ".concat(t))),
                        );
                });
            });
        },
    },
    [A.Etm.DEEP_LINK]: {
        scope: {
            [x.Gp.ANY]: [x.cE, x.lH],
        },
        handler(e) {
            let {
                args: { type: t, params: n },
            } = e;
            switch ((N.ZP.focus(), t)) {
                case x.jE.USER_SETTINGS:
                    null != n &&
                        ((0, y.dL)({
                            pathname: A.Z5c.SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.CHANGELOG:
                    null != n &&
                        ((0, y.dL)(T.Z.formatPathWithQuery(A.Z5c.CHANGELOGS(n.date), n.query)),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.LIBRARY:
                    (0, y.dL)(A.Z5c.APPLICATION_LIBRARY), null != n && L(n.fingerprint, (0, x.O)(t));
                    break;
                case x.jE.STORE_HOME:
                    (0, y.dL)(A.Z5c.APPLICATION_STORE), null != n && L(n.fingerprint, (0, x.O)(t));
                    break;
                case x.jE.STORE_LISTING:
                    null != n &&
                        ((0, y.dL)(A.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, y.dL)({
                            pathname: A.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.CHANNEL:
                    null != n &&
                        ((0, y.dL)({
                            pathname: A.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search,
                        }),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.QUEST_HOME: {
                    let { enabled: e } = E.m8.getConfig({ location: Z.dr.QUEST_DEEP_LINK_UTIL });
                    null != n
                        ? ((0, y.dL)({
                              pathname: e ? A.Z5c.QUEST_HOME_V2 : A.Z5c.QUEST_HOME,
                              hash: n.questId,
                          }),
                          L(n.fingerprint, (0, x.O)(t)))
                        : (0, y.dL)(e ? A.Z5c.QUEST_HOME_V2 : A.Z5c.QUEST_HOME);
                    break;
                }
                case x.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, y.dL)({
                            pathname: A.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: "?game=".concat(n.gameId),
                        }),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.OAUTH2:
                    let r = new URL(A.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let l = (0, O.getOAuth2AuthorizeProps)(r.toString());
                    if (null != l) return (0, O.openOAuth2ModalWithCreateGuildModal)(l), !0;
                    return !1;
                case x.jE.SHOP:
                    null != n &&
                        ((0, y.dL)({
                            pathname: A.Z5c.COLLECTIBLES_SHOP,
                            search: n.search,
                        }),
                        L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.FEATURES:
                case x.jE.SHOP:
                    (null == n ? void 0 : n.path) != null &&
                        ((0, y.dL)({ pathname: n.path }), L(n.fingerprint, (0, x.O)(t)));
                    break;
                case x.jE.ACTIVITIES:
                    if (null != n) {
                        let e = n.attemptId || (0, i.Z)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    var r, i;
                                    let l = f.ZP.getCurrentEmbeddedActivity();
                                    if ((null == l ? void 0 : l.applicationId) === e)
                                        return void C.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let a = await b.ZP.fetchApplication(e),
                                        o = null == a || null == (r = a.bot) ? void 0 : r.id;
                                    if (null == o)
                                        return void C.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let s = await u.Z.openPrivateChannel({ recipientIds: o }),
                                        c = new URL(t),
                                        d = null != (i = c.searchParams.get("referrer_id")) ? i : void 0,
                                        { customId: p } = await (0, g.ur)(
                                            e,
                                            c.searchParams.get("link_id"),
                                            c.searchParams.get("custom_id"),
                                        );
                                    await (0, h.Z)({
                                        targetApplicationId: e,
                                        channelId: s,
                                        analyticsLocations: [m.Z.DEEPLINK],
                                        customId: p,
                                        referrerId: d,
                                    }),
                                        C.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    C.default.track(A.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(n.applicationId, n.url, e),
                            L(n.fingerprint, (0, x.O)(t)),
                            !0
                        );
                    }
                    return !1;
            }
        },
    },
    [A.Etm.BROWSER_HANDOFF]: {
        scope: x.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            N.ZP.focus(null, !0), (0, c.lx)(t, n);
        },
    },
    [A.Etm.CONNECTIONS_CALLBACK]: {
        scope: x.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l },
            } = e;
            if (!v.Z.hasPendingAuthorizedState(l))
                throw new P.Z(
                    { errorCode: A.lTL.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    v.Z.deletePendingAuthorizedState(l),
                    await d.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l,
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400)
                    throw new P.Z({ errorCode: A.lTL.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (S.S.dispatch(A.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [A.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: x.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r },
            } = e;
            return (0, s.rt)({
                paymentSourceType: A.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r,
            });
        },
    },
    [A.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: x.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r, payment_source_type: i },
            } = e;
            return (0, s.rt)({
                paymentSourceType: i,
                state: t,
                path: n,
                query: r,
            });
        },
    },
};
