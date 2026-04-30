"use strict";
n.d(t, { Bn: () => E, R4: () => m, ev: () => _, h: () => p, sW: () => h, tS: () => f }), n(323874), n(14289), n(35956);
var i,
    r,
    s = n(839214),
    a = n(334465),
    o = n(976860),
    l = n(212534),
    u = n(939635),
    c = n(435220),
    d = n(652215),
    _ =
        (((i = {}).HOME = "home"),
        (i.SEARCH = "search"),
        (i.APPLICATION = "application"),
        (i.CATEGORY = "category"),
        i);
let f = (0, s.D)(() => ({}));
var h =
    (((r = {}).EXTERNAL = "External"),
    (r.KEYBOARD_SHORTCUT = "Keyboard Shortcut"),
    (r.APPLICATION_DIRECTORY_URL = "Application Directory URL"),
    (r.APPLICATION_MESSAGE_EMBED = "Application Message Embed"),
    (r.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal"),
    (r.GUILD_HEADER_POPOUT = "Guild Header Popout"),
    (r.GUILD_SETTINGS = "Guild Settings"),
    (r.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings"),
    (r.GUILD_CONTEXT_MENU = "Guild Context Menu"),
    (r.OAUTH2_EMBED = "OAuth2 Embed"),
    (r.GLOBAL_DISCOVERY_BUTTON = "Global Discovery Button"),
    (r.GLOBAL_DISCOVERY_SIDEBAR = "Global Discovery Sidebar"),
    r);
let p = (0, s.D)(() => ({ sessionId: null, guildId: null, entrypoint: null, trackedOpenedFromExternalEntrypoint: !1 }));
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
            i = e.get("q");
        null != i && "" !== i && (n.query = i);
        let r = Number(e.get("category_id"));
        Number.isInteger(r) && r !== u.lj && (n.categoryId = r.toString());
        let s = Number(e.get("page"));
        return null != s && s > 1 && (n.page = s), n;
    }
    let n = (0, a.B)(e, { path: [d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")], exact: !0 }),
        { categoryId: i } = n?.params ?? {};
    if (null != n && null != i) return { type: "category", categoryId: i };
    let r = (0, a.B)(e, {
            path: [
                d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"),
                d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            ],
            exact: !0,
        }),
        { applicationId: s, section: _, skuId: f } = r?.params ?? {};
    if (null != r && null != s) {
        let e = l.A.getApplication(s)?.name;
        return {
            type: "application",
            applicationId: s,
            applicationName: e,
            section: _ ?? (null != f ? c.GlobalDiscoveryAppsSections.STORE : c.GlobalDiscoveryAppsSections.ABOUT),
        };
    }
}
