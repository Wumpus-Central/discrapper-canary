n.d(t, {
    Z: () => ea,
    a: () => z
}),
    n(388685),
    n(35282);
var r = n(200651),
    i = n(192379),
    o = n(664751),
    a = n(512969),
    s = n(990547),
    l = n(719711),
    c = n(271579),
    u = n(756647),
    d = n(442837),
    f = n(433517),
    _ = n(799656),
    p = n(765717),
    h = n(663993),
    m = n(329816),
    g = n(554608),
    E = n(83949),
    b = n(137412),
    y = n(893607),
    v = n(314897),
    O = n(626135),
    I = n(361207),
    S = n(690032),
    T = n(358085),
    N = n(998502),
    A = n(981631),
    C = n(188785),
    R = n(436620);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
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
                P(e, t, n[t]);
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
function L(e, t) {
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
let x = (0, h.Un)({
        createPromise: () => n.e('47620').then(n.bind(n, 576184)),
        webpackId: 576184,
        name: 'UnsupportedBrowser'
    }),
    M = (0, h.Un)({
        createPromise: () => n.e('74023').then(n.bind(n, 431583)),
        webpackId: 431583,
        name: 'DownloadApps'
    }),
    k = (0, h.Un)({
        createPromise: () => n.e('81226').then(n.bind(n, 484097)),
        webpackId: 484097,
        name: 'InviteProxy'
    }),
    j = (0, h.Un)({
        createPromise: () => n.e('30556').then(n.bind(n, 675207)),
        webpackId: 675207,
        name: 'VerifyConnectedAccount'
    }),
    U = (0, h.Un)({
        createPromise: () => n.e('3809').then(n.bind(n, 301001)),
        webpackId: 301001,
        name: 'VerifyConnectedAccountSuccess'
    }),
    G = (0, h.Un)({
        createPromise: () => n.e('1544').then(n.bind(n, 926665)),
        webpackId: 926665,
        name: 'VerifyConnectedAccountError'
    }),
    B = (0, h.Un)({
        createPromise: () => n.e('67127').then(n.bind(n, 832462)),
        webpackId: 832462,
        name: 'LinkConnectedAccount'
    }),
    F = (0, h.Un)({
        createPromise: () => n.e('46455').then(n.bind(n, 924339)),
        webpackId: 924339,
        name: 'LinkAuthorize'
    }),
    V = (0, h.Un)({
        createPromise: () => Promise.all([n.e('53419'), n.e('69773')]).then(n.bind(n, 197528)),
        webpackId: 197528,
        name: 'ActivateDevice'
    }),
    Z = (0, h.Un)({
        createPromise: () => Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('48835'), n.e('14274'), n.e('35535'), n.e('34981'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('22878'), n.e('13351'), n.e('16383'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('20875'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('80284'), n.e('15483'), n.e('49245'), n.e('17938'), n.e('93602'), n.e('27146'), n.e('49508'), n.e('22646'), n.e('85679'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('2286'), n.e('27458'), n.e('93243'), n.e('88708'), n.e('82169'), n.e('88712'), n.e('70205'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('42743'), n.e('40790'), n.e('49049'), n.e('7590'), n.e('91689'), n.e('3589'), n.e('93375'), n.e('64679'), n.e('98254'), n.e('22356'), n.e('43438'), n.e('35755'), n.e('56534'), n.e('75862'), n.e('94989'), n.e('37220'), n.e('91315'), n.e('84181'), n.e('77803'), n.e('73344'), n.e('86383'), n.e('84921'), n.e('97299'), n.e('24920'), n.e('48791'), n.e('63099'), n.e('95468'), n.e('29709'), n.e('1272')]).then(n.bind(n, 457094)),
        webpackId: 457094,
        name: 'ViewsWithMainInterface',
        memo: !0,
        id: 457094
    }),
    H = (0, h.Un)({
        createPromise: () => Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('53419'), n.e('4181'), n.e('75492'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('22878'), n.e('13351'), n.e('16383'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('20875'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('80284'), n.e('15483'), n.e('49245'), n.e('17938'), n.e('93602'), n.e('27146'), n.e('49508'), n.e('22646'), n.e('85679'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('2286'), n.e('27458'), n.e('93243'), n.e('88708'), n.e('82169'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('40790'), n.e('62117'), n.e('36526'), n.e('40419'), n.e('56422'), n.e('26011'), n.e('52030'), n.e('1337'), n.e('86383'), n.e('10778'), n.e('56782'), n.e('84956'), n.e('27978')]).then(n.bind(n, 822699)),
        webpackId: 822699,
        name: 'ViewsWithAuth'
    }),
    W = (0, h.Un)({
        createPromise: () => Promise.all([n.e('86383'), n.e('96858')]).then(n.bind(n, 285773)),
        webpackId: 285773,
        name: 'ViewsWithOAuth2'
    }),
    Y = (0, h.Un)({
        createPromise: () => n.e('57047').then(n.bind(n, 549652)),
        webpackId: 549652,
        name: 'BrowserHandoff'
    }),
    K = (0, h.Un)({
        createPromise: () => n.e('71747').then(n.bind(n, 573276)),
        webpackId: 573276,
        name: 'MobileWebHandoffFallback'
    }),
    z = (0, h.Un)({
        createPromise: () => Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('48835'), n.e('14274'), n.e('35535'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('22878'), n.e('13351'), n.e('16383'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('20875'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('80284'), n.e('15483'), n.e('49245'), n.e('17938'), n.e('93602'), n.e('27146'), n.e('49508'), n.e('22646'), n.e('85679'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('2286'), n.e('27458'), n.e('93243'), n.e('88708'), n.e('82169'), n.e('88712'), n.e('70205'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('42743'), n.e('40790'), n.e('49049'), n.e('7590'), n.e('3589'), n.e('93375'), n.e('64679'), n.e('98254'), n.e('22356'), n.e('43438'), n.e('35755'), n.e('75862'), n.e('94989'), n.e('37220'), n.e('91315'), n.e('84181'), n.e('73344'), n.e('84921'), n.e('97299'), n.e('24920'), n.e('48791'), n.e('63141')]).then(n.bind(n, 290161)),
        webpackId: 290161,
        name: 'Overlay'
    }),
    q = (0, h.Un)({
        createPromise: () => Promise.all([n.e('3940'), n.e('18824'), n.e('75347')]).then(n.bind(n, 430075)),
        webpackId: 430075,
        name: 'SuspendedUserSafetyHubPage'
    }),
    Q = (0, h.Un)({
        createPromise: () => Promise.all([n.e('19878'), n.e('10125')]).then(n.bind(n, 630107)),
        webpackId: 630107,
        name: 'QuestsLandingPage'
    }),
    X = (0, h.Un)({
        createPromise: () => n.e('58131').then(n.bind(n, 531338)),
        webpackId: 531338,
        name: 'ConnectionsAuthorizeContinue'
    }),
    J = (0, h.Un)({
        createPromise: () => n.e('78449').then(n.bind(n, 684572)),
        webpackId: 684572,
        name: 'ApplicationDirectoryRoutes'
    }),
    $ = (0, h.Un)({
        createPromise: () => n.e('20501').then(n.bind(n, 332116)),
        webpackId: 332116,
        name: 'ApplicationDirectoryGlobalDiscoveryRoutes'
    }),
    ee = () => (0, r.jsx)(Z, {}),
    et = new Set([A.Z5c.LOGIN, A.Z5c.LOGIN_HANDOFF, A.Z5c.INVITE_LOGIN(':inviteCode'), A.Z5c.GIFT_CODE_LOGIN(':giftCode'), A.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')]);
function en(e, t) {
    return t ? e.filter((e) => !et.has(e)) : e;
}
class er extends i.Component {
    componentDidMount() {
        N.ZP.cleanupDisplaySleep(), b.Z.initialize();
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
                    : R.KO
                      ? T.isPlatformEmbedded
                          ? (0, r.jsxs)(a.rs, {
                                children: [
                                    t
                                        ? null
                                        : (0, r.jsx)(a.AW, {
                                              path: A.Z5c.ACCOUNT_STANDING,
                                              component: q
                                          }),
                                    (0, r.jsx)(a.AW, {
                                        exact: !0,
                                        path: A.Z5c.INDEX,
                                        render: () => (0, r.jsx)(_.Z, {})
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        exact: !0,
                                        path: A.Z5c.APPS,
                                        component: M
                                    }),
                                    (0, r.jsx)(a.AW, {
                                        path: en([A.Z5c.LOGIN, A.Z5c.REGISTER, A.Z5c.INVITE(':inviteCode'), A.Z5c.INVITE_LOGIN(':inviteCode'), A.Z5c.GIFT_CODE(':giftCode'), A.Z5c.GIFT_CODE_LOGIN(':giftCode'), A.Z5c.RESET], C.a),
                                        component: H
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.INVITE_PROXY(y.Hw.channelId()),
                                        component: k
                                    }),
                                    (0, r.jsx)(a.l_, {
                                        from: A.Z5c.INVITE(''),
                                        to: A.Z5c.LOGIN
                                    }),
                                    (0, r.jsx)(a.l_, {
                                        from: A.Z5c.GIFT_CODE(''),
                                        to: A.Z5c.LOGIN
                                    }),
                                    (0, r.jsx)(a.AW, { render: ee })
                                ]
                            })
                          : (0, r.jsxs)(a.rs, {
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        exact: !0,
                                        path: A.Z5c.INDEX,
                                        render: () => (0, r.jsx)(_.Z, {})
                                    }),
                                    (0, r.jsx)(a.AW, {
                                        path: en([A.Z5c.LOGIN, A.Z5c.LOGIN_HANDOFF, A.Z5c.REGISTER, A.Z5c.BILLING_PREFIX, A.Z5c.BILLING_PROMOTION_REDEMPTION(':code'), A.Z5c.INVITE(':inviteCode'), A.Z5c.INVITE_LOGIN(':inviteCode'), A.Z5c.GIFT_CODE(':giftCode'), A.Z5c.GIFT_CODE_LOGIN(':giftCode'), A.Z5c.GUILD_TEMPLATE(':guildTemplateCode'), A.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), A.Z5c.DISABLE_EMAIL_NOTIFICATIONS, A.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, A.Z5c.RESET, A.Z5c.REPORT, A.Z5c.REPORT_SECOND_LOOK, A.Z5c.ACCOUNT_REVERT(':token')], C.a),
                                        component: H
                                    }),
                                    t
                                        ? null
                                        : (0, r.jsx)(a.AW, {
                                              path: A.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                                              component: H
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(a.AW, {
                                              path: A.Z5c.CHANNEL(y.Hw.guildId(), y.Hw.channelId({ optional: !0 }), ':messageId?'),
                                              component: H
                                          }),
                                    (0, r.jsx)(a.l_, {
                                        from: A.Z5c.INVITE(''),
                                        to: A.Z5c.LOGIN
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.INVITE_PROXY(y.Hw.channelId()),
                                        component: k
                                    }),
                                    (0, r.jsx)(a.l_, {
                                        from: A.Z5c.GIFT_CODE(''),
                                        to: A.Z5c.LOGIN
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.QUESTS(':questId'),
                                        component: Q,
                                        impressionName: s.ImpressionNames.QUESTS_LANDING_PAGE,
                                        impressionProperties: (e) => {
                                            let { computedMatch: t } = e;
                                            return { quest_id: t.params.questId };
                                        }
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.HANDOFF,
                                        component: Y
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.MOBILE_WEB_HANDOFF,
                                        component: K
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.CONNECTION_LINK(':type'),
                                        component: B
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.CONNECTION_LINK_AUTHORIZE(':type'),
                                        component: F
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.ACTIVATE,
                                        component: V
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.ACTIVATE_HANDOFF,
                                        component: V
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.CONNECTIONS_AUTHORIZE_CONTINUE(':type'),
                                        component: X
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.CONNECTIONS_SUCCESS(':type'),
                                        component: U
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.CONNECTIONS_ERROR(':type'),
                                        component: G
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.CONNECTIONS(':type'),
                                        component: j
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.DOWNLOAD_QR_CODE_REDIRECT,
                                        render: () => {
                                            var e, t, n;
                                            let r = null == (e = O.default.getSuperProperties()) ? void 0 : e.os,
                                                i = (0, o.parse)((null != (n = window.location.search) ? n : '').substr(1)),
                                                a = null == (t = i.referring_location) ? void 0 : t.toString();
                                            return (
                                                ('iOS' === r || 'Android' === r) &&
                                                    O.default.track(A.rMx.DOWNLOAD_APP, {
                                                        platform: r,
                                                        ptb: !1,
                                                        released: !0,
                                                        has_e_mail: 'true' === i.has_e_mail,
                                                        referring_location: a,
                                                        qr_code: !0
                                                    }),
                                                (window.location.href = (0, I.Gn)(null != a && '' !== a ? a : 'qr_code', r)),
                                                null
                                            );
                                        }
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        path: A.Z5c.OPEN_APP_FROM_EMAIL,
                                        render: () => {
                                            var e, t;
                                            let n = null == (e = O.default.getSuperProperties()) ? void 0 : e.os,
                                                i = (0, S.o)(null != (t = window.location.search) ? t : '');
                                            if ('iOS' !== n && 'Android' !== n) return (0, r.jsx)(a.l_, { to: null != i.desktop ? ''.concat(i.desktop.pathname).concat(i.desktop.search) : A.Z5c.APP });
                                            {
                                                let e = (0, I.Gn)('app_open_from_email', n, i.mobile),
                                                    t = (0, c.zS)(e);
                                                null != t &&
                                                    O.default.track(A.rMx.DEEP_LINK_CLICKED, {
                                                        fingerprint: (0, u.K)(t.fingerprint),
                                                        attempt_id: t.attemptId,
                                                        source: t.utmSource,
                                                        destination: null != i.mobile ? i.mobile.toString() : null
                                                    }),
                                                    (window.location.href = e);
                                            }
                                        }
                                    }),
                                    (0, r.jsx)(a.l_, {
                                        from: A.Z5c.CONNECT_AUTHORIZE,
                                        to: L(w({}, location), { pathname: A.Z5c.OAUTH2_AUTHORIZE })
                                    }),
                                    (0, r.jsx)(a.AW, {
                                        path: [A.Z5c.OAUTH2_AUTHORIZED, A.Z5c.OAUTH2_AUTHORIZE, A.Z5c.OAUTH2_ERROR, A.Z5c.OAUTH2_WHITELIST_ACCEPT],
                                        component: W
                                    }),
                                    t
                                        ? null
                                        : (0, r.jsx)(a.AW, {
                                              path: [A.Z5c.ACCOUNT_STANDING],
                                              component: q
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(a.AW, {
                                              path: [A.Z5c.APPLICATION_DIRECTORY],
                                              component: J
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(a.AW, {
                                              path: [A.Z5c.GLOBAL_DISCOVERY_APPS],
                                              component: $
                                          }),
                                    (0, r.jsx)(a.AW, { render: ee }),
                                    (0, r.jsx)(a.l_, {
                                        from: A.Z5c.ACCOUNT_REVERT(''),
                                        to: A.Z5c.LOGIN
                                    })
                                ]
                            })
                      : (0, r.jsx)(a.rs, { children: (0, r.jsx)(p.Z, { component: x }) })),
            (0, r.jsxs)(m.Z, {
                skipsSettingDefaultPageTitle: i,
                children: [e, T.isPlatformEmbedded && (n === g.P.NOT_STARTED || n === g.P.IN_PROGRESS) && !0 !== f.K.get(l.SV) ? (0, r.jsx)(E.Z, {}) : null]
            })
        );
    }
}
function ei() {
    let { pathname: e } = (0, a.TH)();
    return null != (0, a.LX)(e, { path: A.Z5c.APPLICATION_DIRECTORY });
}
function eo(e) {
    let t = ei();
    return (0, r.jsx)(er, L(w({}, e), { skipsSettingDefaultPageTitle: t }));
}
let ea = d.ZP.connectStores(
    [v.default, g.Z],
    () => ({
        isAuthenticated: v.default.isAuthenticated(),
        migrationStatus: g.Z.getMigrationStatus()
    }),
    { forwardRef: !0 }
)(eo);
