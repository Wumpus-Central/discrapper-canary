n.d(t, {
    Bn: () => _,
    R4: () => h,
    ev: () => u,
    h: () => p,
    sW: () => f,
    tS: () => d,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(960488),
    i = n(839214),
    a = n(976860),
    s = n(212534),
    o = n(767599),
    l = n(435220),
    c = n(652215),
    u = (function (e) {
        return (e.HOME = "home"), (e.SEARCH = "search"), (e.APPLICATION = "application"), (e.CATEGORY = "category"), e;
    })({});
let d = (0, i.D)(() => ({}));
var f = (function (e) {
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
let p = (0, i.D)(() => ({
    sessionId: null,
    guildId: null,
    entrypoint: null,
    trackedOpenedFromExternalEntrypoint: !1,
}));

function _() {
    let {
        location: { state: e },
    } = (0, a.JK)();
    return null == e ? void 0 : e.previousView;
}

function h() {
    var e, t, n;
    let {
        location: { pathname: i, search: u },
    } = (0, a.JK)();
    if (
        null !=
        (0, r.B6)(i, {
            path: c.BVt.GLOBAL_DISCOVERY_APPS,
            exact: !0,
        })
    )
        return {
            type: "home",
        };
    if (
        null !=
        (0, r.B6)(i, {
            path: c.BVt.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0,
        })
    ) {
        let e = new URLSearchParams(u),
            t = {
                type: "search",
            },
            n = e.get("q");
        null != n && "" !== n && (t.query = n);
        let r = Number(e.get("category_id"));
        Number.isInteger(r) && r !== o.lj && (t.categoryId = r.toString());
        let i = Number(e.get("page"));
        return null != i && i > 1 && (t.page = i), t;
    }
    let d = (0, r.B6)(i, {
            path: [c.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
        }),
        { categoryId: f } = null != (e = null == d ? void 0 : d.params) ? e : {};
    if (null != d && null != f)
        return {
            type: "category",
            categoryId: f,
        };
    let p = (0, r.B6)(i, {
            path: [
                c.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                c.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"),
                c.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
            ],
            exact: !0,
        }),
        { applicationId: _, section: h, skuId: m } = null != (t = null == p ? void 0 : p.params) ? t : {};
    if (null != p && null != _) {
        let e = null == (n = s.A.getApplication(_)) ? void 0 : n.name;
        return {
            type: "application",
            applicationId: _,
            applicationName: e,
            section:
                null != h ? h : null != m ? l.GlobalDiscoveryAppsSections.STORE : l.GlobalDiscoveryAppsSections.ABOUT,
        };
    }
}
