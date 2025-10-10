n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => E,
        getUserSettingsSectionsByWebUserSettings: () => I,
        getWebUserSettingsByUserSettingsSections: () => v,
        openUserSettings: () => b,
        openUserSettingsFromParsedUrl: () => T,
    }),
    n(388685),
    n(35282);
var r = n(951288),
    i = n(481060),
    a = n(570140),
    o = n(37234),
    s = n(230711),
    l = n(626135),
    c = n(313789),
    u = n(526665),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = "USER_SETTINGS_MODAL_MODAL_KEY",
    b = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.n.ACCOUNT_PANEL,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { section: d.oAB.ACCOUNT };
        var { subsection: s } = t,
            l = m(t, ["subsection"]);
        a.Z.dispatch(
            _(
                {
                    type: "USER_SETTINGS_MODAL_OPEN",
                    subsection: null != s ? s : null,
                },
                l,
            ),
        ),
            (0, u.yP)("openUserSettings")
                ? (0, i.ZDy)(
                      async () => {
                          let { default: t } = await Promise.all([n.e("9452"), n.e("75685")]).then(n.bind(n, 245286));
                          return (n) => (0, r.jsx)(t, h(_({}, n), { target: e }));
                      },
                      {
                          modalKey: E,
                          stackingBehavior: "replaceAll",
                          stackNextByDefault: !0,
                      },
                  )
                : (0, o.jN)(d.S9g.USER_SETTINGS);
    };
function y(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    l.default.track(d.rMx.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function O(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    l.default.track(d.rMx.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function v() {
    let e = (0, u.KV)("getWebUserSettingFromSection");
    return new Map([
        [d.oAB.ACCOUNT, c.n.ACCOUNT_PANEL],
        [d.oAB.PROFILE_CUSTOMIZATION, c.n.PROFILE_PANEL],
        [d.oAB.CONTENT_AND_SOCIAL, c.n.CONTENT_AND_SOCIAL_PANEL],
        [d.oAB.DATA_AND_PRIVACY, c.n.DATA_AND_PRIVACY_PANEL],
        [d.oAB.FAMILY_CENTER, c.n.FAMILY_CENTER_PANEL],
        [d.oAB.SESSIONS, c.n.SESSIONS_PANEL],
        [d.oAB.AUTHORIZED_APPS, c.n.AUTHORIZED_APPS_PANEL],
        [d.oAB.CONNECTIONS, c.n.CONNECTIONS_PANEL],
        [d.oAB.CLIPS, c.n.CLIPS_PANEL],
        [d.oAB.PREMIUM, c.n.NITRO_PANEL],
        [d.oAB.SUBSCRIPTIONS, c.n.SUBSCRIPTIONS_PANEL],
        [d.oAB.INVENTORY, c.n.GIFT_PANEL],
        [d.oAB.BILLING, c.n.BILLING_PANEL],
        [d.oAB.APPEARANCE, c.n.APPEARANCE_PANEL],
        [d.oAB.ACCESSIBILITY, c.n.ACCESSIBILITY_PANEL],
        [d.oAB.VOICE, c.n.VOICE_AND_VIDEO_PANEL],
        [d.oAB.POGGERMODE, c.n.POGGERMODE_PANEL],
        [d.oAB.TEXT, c.n.CHAT_PANEL],
        [d.oAB.NOTIFICATIONS, e ? c.n.NOTIFICATIONS_PANEL : c.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
        [d.oAB.KEYBINDS, c.n.KEYBINDS_PANEL],
        [d.oAB.LOCALE, c.n.LOCALE_PANEL],
        [d.oAB.WINDOWS, c.n.WINDOWS_PANEL],
        [d.oAB.LINUX, c.n.LINUX_PANEL],
        [d.oAB.STREAMER_MODE, c.n.STREAMER_MODE_PANEL],
        [d.oAB.ADVANCED, c.n.ADVANCED_PANEL],
        [d.oAB.ACTIVITY_PRIVACY, c.n.ACTIVITY_PRIVACY_PANEL],
        [d.oAB.REGISTERED_GAMES, c.n.REGISTERED_GAMES_PANEL],
        [d.oAB.OVERLAY, c.n.OVERLAY_PANEL],
        [d.oAB.EXPERIMENTS, c.n.EXPERIMENTS_PANEL],
        [d.oAB.DEVELOPER_OPTIONS, c.n.DEVELOPER_OPTIONS_PANEL],
    ]);
}
function I() {
    let e = v(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
function T(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    y({
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
    if ((0, u.yP)("renderUserSettingsRedirector")) {
        let e = v().get(t.section);
        null == e
            ? (O({
                  section: t.section,
                  subsection: t.subsection,
                  urlOrigin: n,
              }),
              i())
            : b(e, {
                  section: t.section,
                  subsection: t.subsection,
              });
    } else i();
}
