n.d(t, { Bn: () => T, R4: () => h, ev: () => E, h: () => I, sW: () => A, tS: () => u }), n(323874), n(14289), n(35956);
var i,
    a,
    r = n(839214),
    s = n(334465),
    l = n(976860),
    o = n(212534),
    d = n(767599),
    c = n(435220),
    _ = n(652215),
    E =
        (((i = {}).HOME = "home"),
        (i.SEARCH = "search"),
        (i.APPLICATION = "application"),
        (i.CATEGORY = "category"),
        i);
let u = (0, r.D)(() => ({}));
var A =
    (((a = {}).EXTERNAL = "External"),
    (a.KEYBOARD_SHORTCUT = "Keyboard Shortcut"),
    (a.APPLICATION_DIRECTORY_URL = "Application Directory URL"),
    (a.APPLICATION_MESSAGE_EMBED = "Application Message Embed"),
    (a.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal"),
    (a.GUILD_HEADER_POPOUT = "Guild Header Popout"),
    (a.GUILD_SETTINGS = "Guild Settings"),
    (a.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings"),
    (a.GUILD_CONTEXT_MENU = "Guild Context Menu"),
    (a.OAUTH2_EMBED = "OAuth2 Embed"),
    (a.GLOBAL_DISCOVERY_BUTTON = "Global Discovery Button"),
    (a.GLOBAL_DISCOVERY_SIDEBAR = "Global Discovery Sidebar"),
    a);
let I = (0, r.D)(() => ({ sessionId: null, guildId: null, entrypoint: null, trackedOpenedFromExternalEntrypoint: !1 }));
function T() {
    let {
        location: { state: e },
    } = (0, l.JK)();
    return e?.previousView;
}
function h() {
    let {
        location: { pathname: e, search: t },
    } = (0, l.JK)();
    if (null != (0, s.B)(e, { path: _.BVt.GLOBAL_DISCOVERY_APPS, exact: !0 })) return { type: "home" };
    if (null != (0, s.B)(e, { path: _.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })) {
        let e = new URLSearchParams(t),
            n = { type: "search" },
            i = e.get("q");
        null != i && "" !== i && (n.query = i);
        let a = Number(e.get("category_id"));
        Number.isInteger(a) && a !== d.lj && (n.categoryId = a.toString());
        let r = Number(e.get("page"));
        return null != r && r > 1 && (n.page = r), n;
    }
    let n = (0, s.B)(e, { path: [_.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")], exact: !0 }),
        { categoryId: i } = n?.params ?? {};
    if (null != n && null != i) return { type: "category", categoryId: i };
    let a = (0, s.B)(e, {
            path: [
                _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"),
                _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            ],
            exact: !0,
        }),
        { applicationId: r, section: E, skuId: u } = a?.params ?? {};
    if (null != a && null != r) {
        let e = o.A.getApplication(r)?.name;
        return {
            type: "application",
            applicationId: r,
            applicationName: e,
            section: E ?? (null != u ? c.GlobalDiscoveryAppsSections.STORE : c.GlobalDiscoveryAppsSections.ABOUT),
        };
    }
}
