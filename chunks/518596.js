n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => b,
        getUserSettingsSectionsByWebUserSettings: () => T,
        getWebUserSettingsByUserSettingsSections: () => I,
        openUserSettings: () => y,
        openUserSettingsFromParsedUrl: () => S,
    }),
    n(388685),
    n(35282);
var r = n(951288),
    i = n(481060),
    a = n(570140),
    o = n(37234),
    s = n(230711),
    l = n(996435),
    c = n(626135),
    u = n(313789),
    d = n(526665),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = "USER_SETTINGS_MODAL_MODAL_KEY";
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { section: f.oAB.ACCOUNT },
        s = arguments.length > 2 ? arguments[2] : void 0;
    var { subsection: c, stackingBehavior: u = "replaceAll" } = t,
        _ = g(t, ["subsection", "stackingBehavior"]);
    a.Z.dispatch(
        p(
            {
                type: "USER_SETTINGS_MODAL_OPEN",
                subsection: null != c ? c : null,
            },
            _,
        ),
    ),
        (0, d.yP)("openUserSettings")
            ? (0, i.nfh)(b)
                ? l.Z.setState({ targetKey: e })
                : await (0, i.ZDy)(
                      async () => {
                          let { default: t } = await Promise.all([n.e("9452"), n.e("81014")]).then(n.bind(n, 245286));
                          return (n) => (0, r.jsx)(t, m(p({}, n), { target: e }));
                      },
                      {
                          modalKey: b,
                          stackingBehavior: u,
                          stackNextByDefault: !0,
                      },
                  )
            : (0, o.jN)(f.S9g.USER_SETTINGS),
        null == s || s();
}
function O(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    c.default.track(f.rMx.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function v(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    c.default.track(f.rMx.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function I() {
    let e = (0, d.KV)("getWebUserSettingFromSection");
    return new Map([
        [f.oAB.ACCOUNT, u.n.ACCOUNT_PANEL],
        [f.oAB.PROFILE_CUSTOMIZATION, u.n.PROFILE_PANEL],
        [f.oAB.CONTENT_AND_SOCIAL, u.n.CONTENT_AND_SOCIAL_PANEL],
        [f.oAB.DATA_AND_PRIVACY, u.n.DATA_AND_PRIVACY_PANEL],
        [f.oAB.FAMILY_CENTER, u.n.FAMILY_CENTER_PANEL],
        [f.oAB.SESSIONS, u.n.SESSIONS_PANEL],
        [f.oAB.AUTHORIZED_APPS, u.n.AUTHORIZED_APPS_PANEL],
        [f.oAB.CONNECTIONS, u.n.CONNECTIONS_PANEL],
        [f.oAB.CLIPS, u.n.CLIPS_PANEL],
        [f.oAB.PREMIUM, u.n.NITRO_PANEL],
        [f.oAB.GUILD_BOOSTING, u.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
        [f.oAB.SUBSCRIPTIONS, u.n.SUBSCRIPTIONS_PANEL],
        [f.oAB.INVENTORY, u.n.GIFT_PANEL],
        [f.oAB.BILLING, u.n.BILLING_PANEL],
        [f.oAB.APPEARANCE, u.n.APPEARANCE_PANEL],
        [f.oAB.ACCESSIBILITY, u.n.ACCESSIBILITY_PANEL],
        [f.oAB.VOICE, u.n.VOICE_AND_VIDEO_PANEL],
        [f.oAB.POGGERMODE, u.n.POGGERMODE_PANEL],
        [f.oAB.TEXT, u.n.CHAT_PANEL],
        [f.oAB.NOTIFICATIONS, e ? u.n.NOTIFICATIONS_PANEL : u.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
        [f.oAB.KEYBINDS, u.n.KEYBINDS_PANEL],
        [f.oAB.LOCALE, u.n.LOCALE_PANEL],
        [f.oAB.WINDOWS, u.n.WINDOWS_PANEL],
        [f.oAB.LINUX, u.n.LINUX_PANEL],
        [f.oAB.STREAMER_MODE, u.n.STREAMER_MODE_PANEL],
        [f.oAB.ADVANCED, u.n.ADVANCED_PANEL],
        [f.oAB.ACTIVITY_PRIVACY, u.n.ACTIVITY_PRIVACY_PANEL],
        [f.oAB.REGISTERED_GAMES, u.n.REGISTERED_GAMES_PANEL],
        [f.oAB.OVERLAY, u.n.OVERLAY_PANEL],
        [f.oAB.EXPERIMENTS, u.n.EXPERIMENTS_PANEL],
        [f.oAB.DEVELOPER_OPTIONS, u.n.DEVELOPER_OPTIONS_PANEL],
    ]);
}
function T() {
    let e = I(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
function S(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    O({
        section: t.section,
        subsection: t.subsection,
        urlOrigin: n,
    });
    let i = () => {
        s.Z.open(t.section, t.subsection, {
            openWithoutBackstack: !1,
            searchParams: t.params,
            analyticsLocations: r,
        });
    };
    if ((0, d.yP)("renderUserSettingsRedirector")) {
        let e = I().get(t.section);
        null == e
            ? (v({
                  section: t.section,
                  subsection: t.subsection,
                  urlOrigin: n,
              }),
              i())
            : y(e, {
                  section: t.section,
                  subsection: t.subsection,
              });
    } else i();
}
