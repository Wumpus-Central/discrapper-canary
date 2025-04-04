n.d(t, {
    Uc: () => p,
    Xh: () => h,
    aQ: () => d,
    m_: () => u,
    xF: () => f,
    z8: () => _
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(512969),
    i = n(972959),
    o = n(703656),
    a = n(370210),
    s = n(216780),
    l = n(979007),
    c = n(981631),
    u = (function (e) {
        return (e.HOME = 'home'), (e.SEARCH = 'search'), (e.APPLICATION = 'application'), (e.CATEGORY = 'category'), e;
    })({});
let d = (0, i.H)(() => ({}));
var f = (function (e) {
    return (e.EXTERNAL = 'External'), (e.KEYBOARD_SHORTCUT = 'Keyboard Shortcut'), (e.APPLICATION_DIRECTORY_URL = 'Application Directory URL'), (e.APPLICATION_DIRECTORY_PROFILE_EMBED = 'Application Directory Profile Embed'), (e.APPLICATION_DIRECTORY_UPSELL_MODAL = 'Application Directory Upsell Modal'), (e.GUILD_HEADER_POPOUT = 'Guild Header Popout'), (e.GUILD_SETTINGS = 'Guild Settings'), (e.GUILD_INTEGRATION_SETTINGS = 'Guild Integration Settings'), (e.GUILD_CONTEXT_MENU = 'Guild Context Menu'), (e.OAUTH2_EMBED = 'OAuth2 Embed'), (e.GLOBAL_DISCOVERY_BUTTON = 'Global Discovery Button'), (e.GLOBAL_DISCOVERY_SIDEBAR = 'Global Discovery Sidebar'), e;
})({});
let _ = (0, i.H)(() => ({
    sessionId: null,
    guildId: null,
    entrypoint: null,
    trackedOpenedFromExternalEntrypoint: !1
}));
function p() {
    let {
        location: { state: e }
    } = (0, o.s1)();
    return null == e ? void 0 : e.previousView;
}
function h() {
    var e, t, n;
    let {
        location: { pathname: i, search: u }
    } = (0, o.s1)();
    if (
        null !=
        (0, r.LX)(i, {
            path: c.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, r.LX)(i, {
            path: c.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(u),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let r = Number(e.get('category_id'));
        Number.isInteger(r) && r !== s.MU && (t.categoryId = r.toString());
        let i = Number(e.get('page'));
        return null != i && i > 1 && (t.page = i), t;
    }
    let d = (0, r.LX)(i, {
            path: [c.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: f } = null != (e = null == d ? void 0 : d.params) ? e : {};
    if (null != d && null != f)
        return {
            type: 'category',
            categoryId: f
        };
    let _ = (0, r.LX)(i, {
            path: [c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: p, section: h, skuId: m } = null != (t = null == _ ? void 0 : _.params) ? t : {};
    if (null != _ && null != p) {
        let e = null == (n = a.Z.getApplication(p)) ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: p,
            applicationName: e,
            section: null != h ? h : null != m ? l.GlobalDiscoveryAppsSections.STORE : l.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
