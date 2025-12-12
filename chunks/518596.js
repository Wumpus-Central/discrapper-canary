n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => y,
        getUserSettingsSectionsByWebUserSettings: () => T,
        getWebUserSettingsByUserSettingsSections: () => I,
        openUserSettings: () => O,
        openUserSettingsFromParsedUrl: () => C,
    }),
    n(388685),
    n(35282);
var r = n(54381),
    i = n(481060),
    a = n(570140),
    o = n(37234),
    s = n(230711),
    l = n(924557),
    c = n(996435),
    u = n(626135),
    d = n(313789),
    f = n(526665),
    p = n(981631);
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
function m(e) {
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
function g(e, t) {
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = "USER_SETTINGS_MODAL_MODAL_KEY";
async function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { section: p.oAB.ACCOUNT },
        s = arguments.length > 2 ? arguments[2] : void 0;
    var { subsection: l, stackingBehavior: u = "replaceAll" } = t,
        d = E(t, ["subsection", "stackingBehavior"]);
    a.Z.dispatch(
        m(
            {
                type: "USER_SETTINGS_MODAL_OPEN",
                subsection: null != l ? l : null,
            },
            d,
        ),
    ),
        (0, f.yP)("openUserSettings")
            ? (0, i.nfh)(y)
                ? c.Z.setState({ requestedTargetKey: e })
                : await (0, i.ZDy)(
                      async () => {
                          let { default: t } = await Promise.all([n.e("77069"), n.e("91968")]).then(n.bind(n, 245286));
                          return (n) => (0, r.jsx)(t, g(m({}, n), { target: e }));
                      },
                      {
                          modalKey: y,
                          stackingBehavior: u,
                          stackNextByDefault: !0,
                          contextKey: i.z1l,
                      },
                  )
            : (0, o.jN)(p.S9g.USER_SETTINGS),
        null == s || s();
}
function v(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    u.default.track(p.rMx.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function S(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    u.default.track(p.rMx.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function I() {
    let e = (0, f.KV)("getWebUserSettingFromSection"),
        t = new Map([
            [p.oAB.ACCOUNT, d.n.ACCOUNT_PANEL],
            [p.oAB.PROFILE_CUSTOMIZATION, d.n.PROFILE_PANEL],
            [p.oAB.CONTENT_AND_SOCIAL, d.n.CONTENT_AND_SOCIAL_PANEL],
            [p.oAB.DATA_AND_PRIVACY, d.n.DATA_AND_PRIVACY_PANEL],
            [p.oAB.FAMILY_CENTER, d.n.FAMILY_CENTER_PANEL],
            [p.oAB.SESSIONS, d.n.SESSIONS_PANEL],
            [p.oAB.AUTHORIZED_APPS, d.n.AUTHORIZED_APPS_PANEL],
            [p.oAB.CONNECTIONS, d.n.CONNECTIONS_PANEL],
            [p.oAB.CLIPS, d.n.CLIPS_PANEL],
            [p.oAB.PRIVATE_BROWSING, d.n.PRIVATE_BROWSING_PANEL],
            [p.oAB.PREMIUM, d.n.NITRO_PANEL],
            [p.oAB.GUILD_BOOSTING, d.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
            [p.oAB.SUBSCRIPTIONS, d.n.SUBSCRIPTIONS_PANEL],
            [p.oAB.INVENTORY, d.n.GIFT_PANEL],
            [p.oAB.BILLING, d.n.BILLING_PANEL],
            [p.oAB.APPEARANCE, d.n.APPEARANCE_PANEL],
            [p.oAB.ACCESSIBILITY, d.n.ACCESSIBILITY_PANEL],
            [p.oAB.VOICE, d.n.VOICE_AND_VIDEO_PANEL],
            [p.oAB.POGGERMODE, d.n.POGGERMODE_PANEL],
            [p.oAB.TEXT, d.n.CHAT_PANEL],
            [p.oAB.NOTIFICATIONS, e ? d.n.NOTIFICATIONS_PANEL : d.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
            [p.oAB.KEYBINDS, d.n.KEYBINDS_PANEL],
            [p.oAB.LANGUAGE, d.n.LANGUAGE_AND_TIME_PANEL],
            [p.oAB.WINDOWS, d.n.WINDOWS_PANEL],
            [p.oAB.LINUX, d.n.LINUX_PANEL],
            [p.oAB.STREAMER_MODE, d.n.STREAMER_MODE_PANEL],
            [p.oAB.ADVANCED, d.n.ADVANCED_PANEL],
            [p.oAB.ACTIVITY_PRIVACY, d.n.ACTIVITY_PRIVACY_PANEL],
            [p.oAB.REGISTERED_GAMES, d.n.REGISTERED_GAMES_PANEL],
            [p.oAB.OVERLAY, d.n.OVERLAY_PANEL],
            [p.oAB.EXPERIMENTS, d.n.EXPERIMENTS_PANEL],
            [p.oAB.DEVELOPER_OPTIONS, d.n.DEVELOPER_OPTIONS_PANEL],
        ]);
    return e && !(0, l.w2)() && t.delete(p.oAB.CLIPS), t;
}
function T() {
    let e = I(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
function C(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    v({
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
    if ((0, f.yP)("renderUserSettingsRedirector")) {
        let e = I(),
            r = e.get(t.section);
        if (null == r) {
            S({
                section: t.section,
                subsection: t.subsection,
                urlOrigin: n,
            }),
                O();
            return;
        }
        {
            let n = null != t.subsection && "" !== t.subsection ? e.get(p.oAB[t.subsection]) : null;
            O(null != n ? n : r, {
                section: t.section,
                subsection: t.subsection,
            });
        }
    } else i();
}
