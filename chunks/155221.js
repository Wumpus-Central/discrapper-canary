n.d(t, {
    Z: () => es,
    a: () => z,
}),
    n(388685),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(664751),
    o = n(828700),
    s = n(990547),
    l = n(719711),
    c = n(271579),
    u = n(756647),
    d = n(442837),
    f = n(433517),
    p = n(799656),
    _ = n(765717),
    m = n(663993),
    h = n(329816),
    g = n(554608),
    E = n(83949),
    b = n(137412),
    y = n(893607),
    O = n(314897),
    v = n(626135),
    S = n(361207),
    I = n(690032),
    T = n(358085),
    A = n(998502),
    C = n(981631),
    N = n(188785),
    P = n(436620);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(928518), n(972830), n(704806);
let L = (0, m.Un)({
        createPromise: () => n.e("47620").then(n.bind(n, 576184)),
        webpackId: 576184,
        name: "UnsupportedBrowser",
    }),
    j = (0, m.Un)({
        createPromise: () => Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583)),
        webpackId: 431583,
        name: "DownloadApps",
    }),
    M = (0, m.Un)({
        createPromise: () => n.e("81226").then(n.bind(n, 484097)),
        webpackId: 484097,
        name: "InviteProxy",
    }),
    k = (0, m.Un)({
        createPromise: () => Promise.all([n.e("800"), n.e("30556")]).then(n.bind(n, 675207)),
        webpackId: 675207,
        name: "VerifyConnectedAccount",
    }),
    U = (0, m.Un)({
        createPromise: () => Promise.all([n.e("800"), n.e("3809")]).then(n.bind(n, 301001)),
        webpackId: 301001,
        name: "VerifyConnectedAccountSuccess",
    }),
    G = (0, m.Un)({
        createPromise: () => Promise.all([n.e("800"), n.e("1544")]).then(n.bind(n, 926665)),
        webpackId: 926665,
        name: "VerifyConnectedAccountError",
    }),
    Z = (0, m.Un)({
        createPromise: () => Promise.all([n.e("800"), n.e("67127")]).then(n.bind(n, 832462)),
        webpackId: 832462,
        name: "LinkConnectedAccount",
    }),
    B = (0, m.Un)({
        createPromise: () => n.e("46455").then(n.bind(n, 924339)),
        webpackId: 924339,
        name: "LinkAuthorize",
    }),
    F = (0, m.Un)({
        createPromise: () => Promise.all([n.e("1216"), n.e("69773")]).then(n.bind(n, 197528)),
        webpackId: 197528,
        name: "ActivateDevice",
    }),
    V = (0, m.Un)({
        createPromise: () =>
            Promise.all([
                n.e("61924"),
                n.e("57804"),
                n.e("50448"),
                n.e("82821"),
                n.e("49552"),
                n.e("42604"),
                n.e("23032"),
                n.e("49894"),
                n.e("90508"),
                n.e("49049"),
                n.e("38697"),
                n.e("6915"),
                n.e("33285"),
                n.e("63575"),
                n.e("89250"),
                n.e("62856"),
                n.e("35129"),
                n.e("66201"),
                n.e("43342"),
                n.e("93375"),
                n.e("91315"),
                n.e("30474"),
                n.e("24358"),
                n.e("38342"),
                n.e("91689"),
                n.e("39206"),
                n.e("91053"),
                n.e("83615"),
                n.e("46931"),
                n.e("22516"),
                n.e("37220"),
                n.e("22173"),
                n.e("20598"),
                n.e("30634"),
                n.e("95546"),
                n.e("34740"),
                n.e("77069"),
                n.e("60831"),
                n.e("72472"),
                n.e("83243"),
                n.e("77803"),
                n.e("64271"),
                n.e("88282"),
                n.e("69844"),
                n.e("29709"),
                n.e("13532"),
                n.e("32996"),
                n.e("1272"),
            ]).then(n.bind(n, 457094)),
        webpackId: 457094,
        name: "ViewsWithMainInterface",
        memo: !0,
        id: 457094,
    }),
    H = (0, m.Un)({
        createPromise: () =>
            Promise.all([
                n.e("1216"),
                n.e("52030"),
                n.e("10778"),
                n.e("12581"),
                n.e("41619"),
                n.e("13532"),
                n.e("34061"),
                n.e("27978"),
            ]).then(n.bind(n, 822699)),
        webpackId: 822699,
        name: "ViewsWithAuth",
    }),
    Y = (0, m.Un)({
        createPromise: () => Promise.all([n.e("12581"), n.e("96858")]).then(n.bind(n, 285773)),
        webpackId: 285773,
        name: "ViewsWithOAuth2",
    }),
    W = (0, m.Un)({
        createPromise: () => n.e("57047").then(n.bind(n, 549652)),
        webpackId: 549652,
        name: "BrowserHandoff",
    }),
    K = (0, m.Un)({
        createPromise: () => n.e("71747").then(n.bind(n, 573276)),
        webpackId: 573276,
        name: "MobileWebHandoffFallback",
    }),
    z = (0, m.Un)({
        createPromise: () =>
            Promise.all([
                n.e("61924"),
                n.e("57804"),
                n.e("49552"),
                n.e("42604"),
                n.e("90508"),
                n.e("49049"),
                n.e("38697"),
                n.e("6915"),
                n.e("33285"),
                n.e("63575"),
                n.e("89250"),
                n.e("62856"),
                n.e("35129"),
                n.e("66201"),
                n.e("43342"),
                n.e("93375"),
                n.e("91315"),
                n.e("30474"),
                n.e("24358"),
                n.e("38342"),
                n.e("39206"),
                n.e("91053"),
                n.e("46931"),
                n.e("37220"),
                n.e("22173"),
                n.e("20598"),
                n.e("95546"),
                n.e("34740"),
                n.e("60831"),
                n.e("72472"),
                n.e("64271"),
                n.e("63141"),
            ]).then(n.bind(n, 290161)),
        webpackId: 290161,
        name: "Overlay",
    }),
    q = (0, m.Un)({
        createPromise: () => n.e("75347").then(n.bind(n, 430075)),
        webpackId: 430075,
        name: "SuspendedUserSafetyHubPage",
    }),
    X = (0, m.Un)({
        createPromise: () => Promise.all([n.e("72868"), n.e("10125")]).then(n.bind(n, 630107)),
        webpackId: 630107,
        name: "QuestsLandingPage",
    }),
    Q = (0, m.Un)({
        createPromise: () => Promise.all([n.e("72868"), n.e("41734")]).then(n.bind(n, 792459)),
        webpackId: 792459,
        name: "QuestPreviewLandingPage",
    }),
    J = (0, m.Un)({
        createPromise: () => Promise.all([n.e("800"), n.e("58131")]).then(n.bind(n, 531338)),
        webpackId: 531338,
        name: "ConnectionsAuthorizeContinue",
    }),
    $ = (0, m.Un)({
        createPromise: () => n.e("78449").then(n.bind(n, 684572)),
        webpackId: 684572,
        name: "ApplicationDirectoryRoutes",
    }),
    ee = (0, m.Un)({
        createPromise: () => n.e("20501").then(n.bind(n, 332116)),
        webpackId: 332116,
        name: "ApplicationDirectoryGlobalDiscoveryRoutes",
    }),
    et = () => (0, r.jsx)(V, {}),
    en = new Set([
        C.Z5c.LOGIN,
        C.Z5c.LOGIN_HANDOFF,
        C.Z5c.INVITE_LOGIN(":inviteCode"),
        C.Z5c.GIFT_CODE_LOGIN(":giftCode"),
        C.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
    ]);
function er(e, t) {
    return t ? e.filter((e) => !en.has(e)) : e;
}
class ei extends i.Component {
    componentDidMount() {
        A.ZP.cleanupDisplaySleep(), b.Z.initialize();
    }
    componentWillUnmount() {
        b.Z.terminate();
    }
    render() {
        let e,
            { isAuthenticated: t, migrationStatus: n, skipsSettingDefaultPageTitle: i } = this.props;
        return (
            (e =
                n === g.P.IN_PROGRESS
                    ? null
                    : P.KO
                      ? T.isPlatformEmbedded
                          ? (0, r.jsxs)(o.rs, {
                                children: [
                                    t
                                        ? null
                                        : (0, r.jsx)(o.AW, {
                                              path: C.Z5c.ACCOUNT_STANDING,
                                              component: q,
                                          }),
                                    (0, r.jsx)(o.AW, {
                                        exact: !0,
                                        path: C.Z5c.INDEX,
                                        render: () => (0, r.jsx)(p.Z, {}),
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        exact: !0,
                                        path: C.Z5c.APPS,
                                        component: j,
                                    }),
                                    (0, r.jsx)(o.AW, {
                                        path: er(
                                            [
                                                C.Z5c.LOGIN,
                                                C.Z5c.REGISTER,
                                                C.Z5c.INVITE(":inviteCode"),
                                                C.Z5c.INVITE_LOGIN(":inviteCode"),
                                                C.Z5c.GIFT_CODE(":giftCode"),
                                                C.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                                                C.Z5c.RESET,
                                            ],
                                            N.a,
                                        ),
                                        component: H,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.INVITE_PROXY(y.Hw.channelId()),
                                        component: M,
                                    }),
                                    (0, r.jsx)(o.l_, {
                                        from: C.Z5c.INVITE(""),
                                        to: C.Z5c.LOGIN,
                                    }),
                                    (0, r.jsx)(o.l_, {
                                        from: C.Z5c.GIFT_CODE(""),
                                        to: C.Z5c.LOGIN,
                                    }),
                                    (0, r.jsx)(o.AW, { render: et }),
                                ],
                            })
                          : (0, r.jsxs)(o.rs, {
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        exact: !0,
                                        path: C.Z5c.INDEX,
                                        render: () => (0, r.jsx)(p.Z, {}),
                                    }),
                                    (0, r.jsx)(o.AW, {
                                        path: er(
                                            [
                                                C.Z5c.LOGIN_ONE_TIME,
                                                C.Z5c.LOGIN,
                                                C.Z5c.LOGIN_HANDOFF,
                                                C.Z5c.REGISTER,
                                                C.Z5c.BILLING_PREFIX,
                                                C.Z5c.BILLING_PROMOTION_REDEMPTION(":code"),
                                                C.Z5c.INVITE(":inviteCode"),
                                                C.Z5c.INVITE_LOGIN(":inviteCode"),
                                                C.Z5c.GIFT_CODE(":giftCode"),
                                                C.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                                                C.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
                                                C.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                                                C.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                                                C.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                                                C.Z5c.RESET,
                                                C.Z5c.REPORT,
                                                C.Z5c.REPORT_SECOND_LOOK,
                                                C.Z5c.ACCOUNT_REVERT(":token"),
                                            ],
                                            N.a,
                                        ),
                                        component: H,
                                    }),
                                    t
                                        ? null
                                        : (0, r.jsx)(o.AW, {
                                              path: C.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                              component: H,
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(o.AW, {
                                              path: C.Z5c.CHANNEL(
                                                  y.Hw.guildId(),
                                                  y.Hw.channelId({ optional: !0 }),
                                                  ":messageId?",
                                              ),
                                              component: H,
                                          }),
                                    (0, r.jsx)(o.l_, {
                                        from: C.Z5c.INVITE(""),
                                        to: C.Z5c.LOGIN,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.INVITE_PROXY(y.Hw.channelId()),
                                        component: M,
                                    }),
                                    (0, r.jsx)(o.l_, {
                                        from: C.Z5c.GIFT_CODE(""),
                                        to: C.Z5c.LOGIN,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.QUESTS(":questId"),
                                        component: X,
                                        impressionName: s.ImpressionNames.QUESTS_LANDING_PAGE,
                                        impressionProperties: (e) => {
                                            let { computedMatch: t } = e;
                                            return { quest_id: t.params.questId };
                                        },
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.QUEST_PREVIEW(":questId"),
                                        component: Q,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.HANDOFF,
                                        component: W,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.MOBILE_WEB_HANDOFF,
                                        component: K,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.CONNECTION_LINK(":type"),
                                        component: Z,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.CONNECTION_LINK_AUTHORIZE(":type"),
                                        component: B,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.ACTIVATE,
                                        component: F,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.ACTIVATE_HANDOFF,
                                        component: F,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                        component: J,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.CONNECTIONS_SUCCESS(":type"),
                                        component: U,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.CONNECTIONS_ERROR(":type"),
                                        component: G,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.CONNECTIONS(":type"),
                                        component: k,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.DOWNLOAD_QR_CODE_REDIRECT,
                                        render: () => {
                                            var e, t, n;
                                            let r = null == (e = v.default.getSuperProperties()) ? void 0 : e.os,
                                                i = (0, a.parse)(
                                                    (null != (n = window.location.search) ? n : "").substr(1),
                                                ),
                                                o = null == (t = i.referring_location) ? void 0 : t.toString();
                                            return (
                                                ("iOS" === r || "Android" === r) &&
                                                    v.default.track(C.rMx.DOWNLOAD_APP, {
                                                        platform: r,
                                                        ptb: !1,
                                                        released: !0,
                                                        has_e_mail: "true" === i.has_e_mail,
                                                        referring_location: o,
                                                        qr_code: !0,
                                                    }),
                                                (window.location.href = (0, S.Gn)(
                                                    null != o && "" !== o ? o : "qr_code",
                                                    r,
                                                )),
                                                null
                                            );
                                        },
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        path: C.Z5c.OPEN_APP_FROM_EMAIL,
                                        render: () => {
                                            var e, t;
                                            let n = null == (e = v.default.getSuperProperties()) ? void 0 : e.os,
                                                i = (0, I.o)(null != (t = window.location.search) ? t : "");
                                            if ("iOS" !== n && "Android" !== n)
                                                return (0, r.jsx)(o.l_, {
                                                    to:
                                                        null != i.desktop
                                                            ? "".concat(i.desktop.pathname).concat(i.desktop.search)
                                                            : C.Z5c.APP,
                                                });
                                            {
                                                let e = (0, S.Gn)("app_open_from_email", n, i.mobile),
                                                    t = (0, c.zS)(e);
                                                null != t &&
                                                    v.default.track(C.rMx.DEEP_LINK_CLICKED, {
                                                        fingerprint: (0, u.K)(t.fingerprint),
                                                        attempt_id: t.attemptId,
                                                        source: t.utmSource,
                                                        destination: null != i.mobile ? i.mobile.toString() : null,
                                                    }),
                                                    (window.location.href = e);
                                            }
                                        },
                                    }),
                                    (0, r.jsx)(o.l_, {
                                        from: C.Z5c.CONNECT_AUTHORIZE,
                                        to: x(w({}, location), { pathname: C.Z5c.OAUTH2_AUTHORIZE }),
                                    }),
                                    (0, r.jsx)(o.AW, {
                                        path: [
                                            C.Z5c.OAUTH2_AUTHORIZED,
                                            C.Z5c.OAUTH2_AUTHORIZE,
                                            C.Z5c.OAUTH2_ERROR,
                                            C.Z5c.OAUTH2_WHITELIST_ACCEPT,
                                        ],
                                        component: Y,
                                    }),
                                    t
                                        ? null
                                        : (0, r.jsx)(o.AW, {
                                              path: [C.Z5c.ACCOUNT_STANDING],
                                              component: q,
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(o.AW, {
                                              path: [C.Z5c.APPLICATION_DIRECTORY],
                                              component: $,
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(o.AW, {
                                              path: [C.Z5c.GLOBAL_DISCOVERY_APPS],
                                              component: ee,
                                          }),
                                    (0, r.jsx)(o.AW, { render: et }),
                                    (0, r.jsx)(o.l_, {
                                        from: C.Z5c.ACCOUNT_REVERT(""),
                                        to: C.Z5c.LOGIN,
                                    }),
                                ],
                            })
                      : (0, r.jsx)(o.rs, { children: (0, r.jsx)(_.Z, { component: L }) })),
            (0, r.jsxs)(h.Z, {
                skipsSettingDefaultPageTitle: i,
                children: [
                    e,
                    T.isPlatformEmbedded && (n === g.P.NOT_STARTED || n === g.P.IN_PROGRESS) && !0 !== f.K.get(l.SV)
                        ? (0, r.jsx)(E.Z, {})
                        : null,
                ],
            })
        );
    }
}
function ea() {
    let { pathname: e } = (0, o.TH)();
    return null != (0, o.LX)(e, { path: C.Z5c.APPLICATION_DIRECTORY });
}
function eo(e) {
    let t = ea();
    return (0, r.jsx)(ei, x(w({}, e), { skipsSettingDefaultPageTitle: t }));
}
let es = d.ZP.connectStores(
    [O.default, g.Z],
    () => ({
        isAuthenticated: O.default.isAuthenticated(),
        migrationStatus: g.Z.getMigrationStatus(),
    }),
    { forwardRef: !0 },
)(eo);
