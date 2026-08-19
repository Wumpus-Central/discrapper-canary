"use strict";
n.d(t, { Bn: () => I, R4: () => f, ev: () => _, h: () => h, sW: () => A, tS: () => E }), n(323874), n(14289), n(35956);
var i,
    r,
    a = n(839214),
    s = n(334465),
    l = n(976860),
    o = n(212534),
    d = n(939635),
    c = n(435220),
    u = n(652215),
    _ =
        (((i = {}).HOME = "home"),
        (i.SEARCH = "search"),
        (i.APPLICATION = "application"),
        (i.CATEGORY = "category"),
        i);
let E = (0, a.D)(() => ({}));
var A =
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
let h = (0, a.D)(() => ({ sessionId: null, guildId: null, entrypoint: null, trackedOpenedFromExternalEntrypoint: !1 }));
function I() {
    let {
        location: { state: e },
    } = (0, l.JK)();
    return e?.previousView;
}
function f() {
    let {
        location: { pathname: e, search: t },
    } = (0, l.JK)();
    if (null != (0, s.B)(e, { path: u.BVt.GLOBAL_DISCOVERY_APPS, exact: !0 })) return { type: "home" };
    if (null != (0, s.B)(e, { path: u.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })) {
        let e = new URLSearchParams(t),
            n = { type: "search" },
            i = e.get("q");
        null != i && "" !== i && (n.query = i);
        let r = Number(e.get("category_id"));
        Number.isInteger(r) && r !== d.lj && (n.categoryId = r.toString());
        let a = Number(e.get("page"));
        return null != a && a > 1 && (n.page = a), n;
    }
    let n = (0, s.B)(e, { path: [u.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")], exact: !0 }),
        { categoryId: i } = n?.params ?? {};
    if (null != n && null != i) return { type: "category", categoryId: i };
    let r = (0, s.B)(e, {
            path: [
                u.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                u.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"),
                u.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            ],
            exact: !0,
        }),
        { applicationId: a, section: _, skuId: E } = r?.params ?? {};
    if (null != r && null != a) {
        let e = o.A.getApplication(a)?.name;
        return {
            type: "application",
            applicationId: a,
            applicationName: e,
            section: _ ?? (null != E ? c.GlobalDiscoveryAppsSections.STORE : c.GlobalDiscoveryAppsSections.ABOUT),
        };
    }
}
