if (
    (n.d(t, {
        Uc: () => f,
        Xh: () => b,
        aQ: () => u,
        m_: () => d,
        z8: () => p
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var a,
        i = n(512969);
var o = n(972959),
    r = n(264043),
    l = n(34674),
    c = n(703656),
    s = n(979007),
    _ = n(981631),
    d = (((a = {}).HOME = 'home'), (a.SEARCH = 'search'), (a.APPLICATION = 'application'), (a.CATEGORY = 'category'), a);
let u = (0, o.H)(() => ({})),
    p = (0, o.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function f() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function b() {
    var e, t, n;
    let {
        location: { pathname: a, search: o }
    } = (0, c.s1)();
    if (
        null !=
        (0, i.LX)(a, {
            path: _.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, i.LX)(a, {
            path: _.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(o),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let a = Number(e.get('category_id'));
        Number.isInteger(a) && a !== l.MU && (t.categoryId = a.toString());
        let i = Number(e.get('page'));
        return null != i && i > 1 && (t.page = i), t;
    }
    let d = (0, i.LX)(a, {
            path: [_.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: u } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e ? e : {};
    if (null != d && null != u)
        return {
            type: 'category',
            categoryId: u
        };
    let p = (0, i.LX)(a, {
            path: [_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: f, section: b, skuId: h } = null !== (t = null == p ? void 0 : p.params) && void 0 !== t ? t : {};
    if (null != p && null != f) {
        let e = null === (n = r.Z.getApplication(f)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: f,
            applicationName: e,
            section: null != b ? b : null != h ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
