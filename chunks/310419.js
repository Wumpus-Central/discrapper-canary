"use strict";
n.d(t, { Bn: () => E, R4: () => m, ev: () => _, h: () => h, sW: () => p, tS: () => f }), n(323874), n(14289), n(35956);
var r,
    i,
    s = n(839214),
    a = n(334465),
    o = n(976860),
    l = n(212534),
    u = n(767599),
    c = n(435220),
    d = n(652215),
    _ =
        (((r = {}).HOME = "home"),
        (r.SEARCH = "search"),
        (r.APPLICATION = "application"),
        (r.CATEGORY = "category"),
        r);
let f = (0, s.D)(() => ({}));
var p =
    (((i = {}).EXTERNAL = "External"),
    (i.KEYBOARD_SHORTCUT = "Keyboard Shortcut"),
    (i.APPLICATION_DIRECTORY_URL = "Application Directory URL"),
    (i.APPLICATION_MESSAGE_EMBED = "Application Message Embed"),
    (i.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal"),
    (i.GUILD_HEADER_POPOUT = "Guild Header Popout"),
    (i.GUILD_SETTINGS = "Guild Settings"),
    (i.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings"),
    (i.GUILD_CONTEXT_MENU = "Guild Context Menu"),
    (i.OAUTH2_EMBED = "OAuth2 Embed"),
    (i.GLOBAL_DISCOVERY_BUTTON = "Global Discovery Button"),
    (i.GLOBAL_DISCOVERY_SIDEBAR = "Global Discovery Sidebar"),
    i);
let h = (0, s.D)(() => ({ sessionId: null, guildId: null, entrypoint: null, trackedOpenedFromExternalEntrypoint: !1 }));
function E() {
    let {
        location: { state: e },
    } = (0, o.JK)();
    return e?.previousView;
}
function m() {
    let {
        location: { pathname: e, search: t },
    } = (0, o.JK)();
    if (null != (0, a.B)(e, { path: d.BVt.GLOBAL_DISCOVERY_APPS, exact: !0 })) return { type: "home" };
    if (null != (0, a.B)(e, { path: d.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })) {
        let e = new URLSearchParams(t),
            n = { type: "search" },
            r = e.get("q");
        null != r && "" !== r && (n.query = r);
        let i = Number(e.get("category_id"));
        Number.isInteger(i) && i !== u.lj && (n.categoryId = i.toString());
        let s = Number(e.get("page"));
        return null != s && s > 1 && (n.page = s), n;
    }
    let n = (0, a.B)(e, { path: [d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")], exact: !0 }),
        { categoryId: r } = n?.params ?? {};
    if (null != n && null != r) return { type: "category", categoryId: r };
    let i = (0, a.B)(e, {
            path: [
                d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"),
                d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            ],
            exact: !0,
        }),
        { applicationId: s, section: _, skuId: f } = i?.params ?? {};
    if (null != i && null != s) {
        let e = l.A.getApplication(s)?.name;
        return {
            type: "application",
            applicationId: s,
            applicationName: e,
            section: _ ?? (null != f ? c.GlobalDiscoveryAppsSections.STORE : c.GlobalDiscoveryAppsSections.ABOUT),
        };
    }
}
