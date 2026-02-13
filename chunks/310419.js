"use strict";
n.d(t, { Bn: () => h, R4: () => p, ev: () => c, h: () => f, sW: () => _, tS: () => d }), n(323874), n(14289), n(35956);
var r = n(839214),
    i = n(334465),
    a = n(976860),
    s = n(212534),
    o = n(767599),
    l = n(435220),
    u = n(652215),
    c = (function (e) {
        return (e.HOME = "home"), (e.SEARCH = "search"), (e.APPLICATION = "application"), (e.CATEGORY = "category"), e;
    })({});
let d = (0, r.D)(() => ({}));
var _ = (function (e) {
    return (
        (e.EXTERNAL = "External"),
        (e.KEYBOARD_SHORTCUT = "Keyboard Shortcut"),
        (e.APPLICATION_DIRECTORY_URL = "Application Directory URL"),
        (e.APPLICATION_MESSAGE_EMBED = "Application Message Embed"),
        (e.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal"),
        (e.GUILD_HEADER_POPOUT = "Guild Header Popout"),
        (e.GUILD_SETTINGS = "Guild Settings"),
        (e.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings"),
        (e.GUILD_CONTEXT_MENU = "Guild Context Menu"),
        (e.OAUTH2_EMBED = "OAuth2 Embed"),
        (e.GLOBAL_DISCOVERY_BUTTON = "Global Discovery Button"),
        (e.GLOBAL_DISCOVERY_SIDEBAR = "Global Discovery Sidebar"),
        e
    );
})({});
let f = (0, r.D)(() => ({ sessionId: null, guildId: null, entrypoint: null, trackedOpenedFromExternalEntrypoint: !1 }));
function h() {
    let {
        location: { state: e },
    } = (0, a.JK)();
    return e?.previousView;
}
function p() {
    let {
        location: { pathname: e, search: t },
    } = (0, a.JK)();
    if (null != (0, i.B)(e, { path: u.BVt.GLOBAL_DISCOVERY_APPS, exact: !0 })) return { type: "home" };
    if (null != (0, i.B)(e, { path: u.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })) {
        let e = new URLSearchParams(t),
            n = { type: "search" },
            r = e.get("q");
        null != r && "" !== r && (n.query = r);
        let i = Number(e.get("category_id"));
        Number.isInteger(i) && i !== o.lj && (n.categoryId = i.toString());
        let a = Number(e.get("page"));
        return null != a && a > 1 && (n.page = a), n;
    }
    let n = (0, i.B)(e, { path: [u.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")], exact: !0 }),
        { categoryId: r } = n?.params ?? {};
    if (null != n && null != r) return { type: "category", categoryId: r };
    let c = (0, i.B)(e, {
            path: [
                u.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                u.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"),
                u.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            ],
            exact: !0,
        }),
        { applicationId: d, section: _, skuId: f } = c?.params ?? {};
    if (null != c && null != d) {
        let e = s.A.getApplication(d)?.name;
        return {
            type: "application",
            applicationId: d,
            applicationName: e,
            section: _ ?? (null != f ? l.GlobalDiscoveryAppsSections.STORE : l.GlobalDiscoveryAppsSections.ABOUT),
        };
    }
}
