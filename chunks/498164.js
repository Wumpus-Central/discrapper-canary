n.d(t, { Z: () => M }), n(35282), n(65234), n(111804), n(490233), n(97749), n(388685), n(190126), n(368063);
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
    E = n(53144),
    v = n(113434),
    y = n(937797),
    I = n(36243),
    C = n(703656),
    S = n(553795),
    T = n(594174),
    N = n(626135),
    j = n(585483),
    P = n(591759),
    x = n(998502),
    A = n(996106),
    Z = n(109815),
    w = n(186901),
    L = n(981631),
    R = n(46140);
function D(e) {
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
function k(e, t) {
    null != e &&
        N.default.track(L.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.s)(e),
            link_type: t,
        });
}
let M = {
    [L.Etm.INVITE_BROWSER]: {
        scope: w.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            return await (0, Z.T)(t, "Desktop Modal");
        },
    },
    [L.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: w.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == T.default.getCurrentUser()) return;
            let { guildTemplate: i } = await _.Z.resolveGuildTemplate(t);
            if (null == i)
                throw new A.Z({ errorCode: L.lTL.INVALID_GUILD_TEMPLATE }, "Invalid guild template id: ".concat(t));
            return (
                x.ZP.focus(),
                (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("10778"), n.e("86015")]).then(n.bind(n, 766775));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = D({}, t)),
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
    [L.Etm.GIFT_CODE_BROWSER]: {
        scope: w.cE,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, i) => {
                o.Z.wait(() => {
                    p.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: l } = i;
                            x.ZP.focus(),
                                N.default.track(L.rMx.OPEN_MODAL, {
                                    type: "gift_accept",
                                    location: L.SaU,
                                }),
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await n.e("38029").then(n.bind(n, 409858));
                                    return (n) => (0, r.jsx)(e, D({ code: t }, n));
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() =>
                            i(new A.Z({ errorCode: L.lTL.INVALID_GIFT_CODE }, "Invalid gift code: ".concat(t))),
                        );
                });
            });
        },
    },
    [L.Etm.DEEP_LINK]: {
        scope: {
            [w.Gp.ANY]: [w.cE, w.lH],
        },
        handler(e) {
            let {
                args: { type: t, params: n },
            } = e;
            switch ((x.ZP.focus(), t)) {
                case w.jE.USER_SETTINGS:
                    null != n &&
                        ((0, C.dL)({
                            pathname: L.Z5c.SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.CHANGELOG:
                    null != n &&
                        ((0, C.dL)(P.Z.formatPathWithQuery(L.Z5c.CHANGELOGS(n.date), n.query)),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.LIBRARY:
                    (0, C.dL)(L.Z5c.APPLICATION_LIBRARY), null != n && k(n.fingerprint, (0, w.O)(t));
                    break;
                case w.jE.STORE_HOME:
                    (0, C.dL)(L.Z5c.APPLICATION_STORE), null != n && k(n.fingerprint, (0, w.O)(t));
                    break;
                case w.jE.STORE_LISTING:
                    null != n &&
                        ((0, C.dL)(L.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, C.dL)({
                            pathname: L.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.CHANNEL:
                    null != n &&
                        ((0, C.dL)({
                            pathname: L.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search,
                        }),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.QUEST_HOME: {
                    let { enabled: e } = y.m8.getConfig({ location: R.dr.QUEST_DEEP_LINK_UTIL });
                    null != n
                        ? ((0, C.dL)({
                              pathname: e ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME,
                              hash: n.questId,
                          }),
                          k(n.fingerprint, (0, w.O)(t)))
                        : (0, C.dL)(e ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME);
                    break;
                }
                case w.jE.QUEST_PREVIEW_TOOL:
                    if ((0, I.T)({ location: R.dr.QUEST_PREVIEW_TOOL_2 }) && null != n) {
                        let e = new URLSearchParams();
                        e.set(v.tR.TAB, v.e5.PREVIEW_TOOL),
                            null != n.questId && e.set(v.tR.QUEST_ID, n.questId),
                            (0, C.dL)({
                                pathname: L.Z5c.QUEST_HOME_V2,
                                search: "?".concat(e.toString()),
                            }),
                            k(n.fingerprint, (0, w.O)(t));
                    }
                    break;
                case w.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, C.dL)({
                            pathname: L.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: "?game=".concat(n.gameId),
                        }),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.OAUTH2:
                    let r = new URL(L.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let l = (0, O.getOAuth2AuthorizeProps)(r.toString());
                    if (null != l) return (0, O.openOAuth2ModalWithCreateGuildModal)(l), !0;
                    return !1;
                case w.jE.ONE_TIME_LOGIN:
                    if (null != n) return (0, E.Y)({ token: n.token }), k(n.fingerprint, (0, w.O)(t)), !0;
                    return !1;
                case w.jE.SHOP:
                    null != n &&
                        ((0, C.dL)({
                            pathname: L.Z5c.COLLECTIBLES_SHOP,
                            search: n.search,
                        }),
                        k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.FEATURES:
                    (null == n ? void 0 : n.path) != null &&
                        ((0, C.dL)({ pathname: n.path }), k(n.fingerprint, (0, w.O)(t)));
                    break;
                case w.jE.ACTIVITIES:
                    if (null != n) {
                        let e = n.attemptId || (0, i.Z)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    var r, i;
                                    let l = f.ZP.getCurrentEmbeddedActivity();
                                    if ((null == l ? void 0 : l.applicationId) === e)
                                        return void N.default.track(L.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let a = await b.ZP.fetchApplication(e),
                                        o = null == a || null == (r = a.bot) ? void 0 : r.id;
                                    if (null == o)
                                        return void N.default.track(L.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
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
                                        N.default.track(L.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    N.default.track(L.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(n.applicationId, n.url, e),
                            k(n.fingerprint, (0, w.O)(t)),
                            !0
                        );
                    }
                    return !1;
            }
        },
    },
    [L.Etm.BROWSER_HANDOFF]: {
        scope: w.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            x.ZP.focus(null, !0), (0, c.lx)(t, n);
        },
    },
    [L.Etm.CONNECTIONS_CALLBACK]: {
        scope: w.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l },
            } = e;
            if (!S.Z.hasPendingAuthorizedState(l))
                throw new A.Z(
                    { errorCode: L.lTL.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    S.Z.deletePendingAuthorizedState(l),
                    await d.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l,
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400)
                    throw new A.Z({ errorCode: L.lTL.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (j.S.dispatch(L.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [L.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: w.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r },
            } = e;
            return (0, s.rt)({
                paymentSourceType: L.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r,
            });
        },
    },
    [L.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: w.cE,
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
