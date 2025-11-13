n.d(t, { Z: () => M }), n(35282), n(65234), n(111804), n(490233), n(97749), n(388685), n(190126), n(368063);
var r = n(951288);
n(647438);
var i = n(772848),
    l = n(756647),
    a = n(481060),
    s = n(570140),
    o = n(355467),
    c = n(899742),
    u = n(493683),
    d = n(457330),
    p = n(533307),
    f = n(317381),
    h = n(122613),
    g = n(649256),
    m = n(100527),
    _ = n(728345),
    b = n(962220),
    E = n(69580),
    O = n(53144),
    y = n(113434),
    v = n(36243),
    I = n(703656),
    C = n(553795),
    S = n(594174),
    T = n(626135),
    N = n(585483),
    j = n(591759),
    P = n(998502),
    x = n(996106),
    A = n(109815),
    Z = n(186901),
    w = n(981631),
    L = n(46140);
function R(e) {
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
function D(e, t) {
    null != e &&
        T.default.track(w.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.s)(e),
            link_type: t,
        });
}
let M = {
    [w.Etm.INVITE_BROWSER]: {
        scope: Z.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            return await (0, A.T)(t, "Desktop Modal");
        },
    },
    [w.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: Z.cE,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == S.default.getCurrentUser()) return;
            let { guildTemplate: i } = await b.Z.resolveGuildTemplate(t);
            if (null == i)
                throw new x.Z({ errorCode: w.lTL.INVALID_GUILD_TEMPLATE }, "Invalid guild template id: ".concat(t));
            return (
                P.ZP.focus(),
                (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("10778"), n.e("86015")]).then(n.bind(n, 766775));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = R({}, t)),
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
    [w.Etm.GIFT_CODE_BROWSER]: {
        scope: Z.cE,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, i) => {
                s.Z.wait(() => {
                    p.Z.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: l } = i;
                            P.ZP.focus(),
                                T.default.track(w.rMx.OPEN_MODAL, {
                                    type: "gift_accept",
                                    location: w.SaU,
                                }),
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await n.e("38029").then(n.bind(n, 409858));
                                    return (n) => (0, r.jsx)(e, R({ code: t }, n));
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() =>
                            i(new x.Z({ errorCode: w.lTL.INVALID_GIFT_CODE }, "Invalid gift code: ".concat(t))),
                        );
                });
            });
        },
    },
    [w.Etm.DEEP_LINK]: {
        scope: {
            [Z.Gp.ANY]: [Z.cE, Z.lH],
        },
        handler(e) {
            let {
                args: { type: t, params: n },
            } = e;
            switch ((P.ZP.focus(), t)) {
                case Z.jE.USER_SETTINGS:
                    null != n &&
                        ((0, I.dL)({
                            pathname: w.Z5c.SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.CHANGELOG:
                    null != n &&
                        ((0, I.dL)(j.Z.formatPathWithQuery(w.Z5c.CHANGELOGS(n.date), n.query)),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.LIBRARY:
                    (0, I.dL)(w.Z5c.APPLICATION_LIBRARY), null != n && D(n.fingerprint, (0, Z.O)(t));
                    break;
                case Z.jE.STORE_HOME:
                    (0, I.dL)(w.Z5c.APPLICATION_STORE), null != n && D(n.fingerprint, (0, Z.O)(t));
                    break;
                case Z.jE.STORE_LISTING:
                    null != n &&
                        ((0, I.dL)(w.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.PICK_GUILD_SETTINGS:
                    null != n &&
                        ((0, I.dL)({
                            pathname: w.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                            search: n.search,
                        }),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.CHANNEL:
                    null != n &&
                        ((0, I.dL)({
                            pathname: w.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                            search: n.search,
                        }),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.QUEST_HOME:
                    null != n
                        ? ((0, I.dL)({
                              pathname: w.Z5c.QUEST_HOME_V2,
                              hash: n.questId,
                          }),
                          D(n.fingerprint, (0, Z.O)(t)))
                        : (0, I.dL)(w.Z5c.QUEST_HOME_V2);
                    break;
                case Z.jE.QUEST_PREVIEW_TOOL:
                    if ((0, v.T)({ location: L.dr.QUEST_PREVIEW_TOOL_2 }) && null != n) {
                        let e = new URLSearchParams();
                        e.set(y.tR.TAB, y.e5.PREVIEW_TOOL),
                            null != n.questId && e.set(y.tR.QUEST_ID, n.questId),
                            (0, I.dL)({
                                pathname: w.Z5c.QUEST_HOME_V2,
                                search: "?".concat(e.toString()),
                            }),
                            D(n.fingerprint, (0, Z.O)(t));
                    }
                    break;
                case Z.jE.DISCOVERY_GAME_RESULTS:
                    null != n &&
                        ((0, I.dL)({
                            pathname: w.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: "?game=".concat(n.gameId),
                        }),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.OAUTH2:
                    let r = new URL(w.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = n.search;
                    let l = (0, E.getOAuth2AuthorizeProps)(r.toString());
                    if (null != l) return (0, E.openOAuth2ModalWithCreateGuildModal)(l), !0;
                    return !1;
                case Z.jE.ONE_TIME_LOGIN:
                    if (null != n) return (0, O.Y)({ token: n.token }), D(n.fingerprint, (0, Z.O)(t)), !0;
                    return !1;
                case Z.jE.SHOP:
                    null != n &&
                        ((0, I.dL)({
                            pathname: w.Z5c.COLLECTIBLES_SHOP,
                            search: n.search,
                        }),
                        D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.FEATURES:
                    (null == n ? void 0 : n.path) != null &&
                        ((0, I.dL)({ pathname: n.path }), D(n.fingerprint, (0, Z.O)(t)));
                    break;
                case Z.jE.ACTIVITIES:
                    if (null != n) {
                        let e = n.attemptId || (0, i.Z)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    var r, i;
                                    let l = f.ZP.getCurrentEmbeddedActivity();
                                    if ((null == l ? void 0 : l.applicationId) === e)
                                        return void T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let a = await _.ZP.fetchApplication(e),
                                        s = null == a || null == (r = a.bot) ? void 0 : r.id;
                                    if (null == s)
                                        return void T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let o = await u.Z.openPrivateChannel({ recipientIds: s }),
                                        c = new URL(t),
                                        d = null != (i = c.searchParams.get("referrer_id")) ? i : void 0,
                                        { customId: p } = await (0, g.ur)(
                                            e,
                                            c.searchParams.get("link_id"),
                                            c.searchParams.get("custom_id"),
                                        );
                                    await (0, h.Z)({
                                        targetApplicationId: e,
                                        channelId: o,
                                        analyticsLocations: [m.Z.DEEPLINK],
                                        customId: p,
                                        referrerId: d,
                                    }),
                                        T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    T.default.track(w.rMx.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(n.applicationId, n.url, e),
                            D(n.fingerprint, (0, Z.O)(t)),
                            !0
                        );
                    }
                    return !1;
            }
        },
    },
    [w.Etm.BROWSER_HANDOFF]: {
        scope: Z.CN,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            P.ZP.focus(null, !0), (0, c.lx)(t, n);
        },
    },
    [w.Etm.CONNECTIONS_CALLBACK]: {
        scope: Z.cE,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l },
            } = e;
            if (!C.Z.hasPendingAuthorizedState(l))
                throw new x.Z(
                    { errorCode: w.lTL.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    C.Z.deletePendingAuthorizedState(l),
                    await d.Z.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l,
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400)
                    throw new x.Z({ errorCode: w.lTL.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (N.S.dispatch(w.CkL.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [w.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: Z.cE,
        handler(e) {
            let {
                args: { state: t, path: n, query: r },
            } = e;
            return (0, o.rt)({
                paymentSourceType: w.HeQ.PAYPAL,
                state: t,
                path: n,
                query: r,
            });
        },
    },
    [w.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: Z.cE,
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
