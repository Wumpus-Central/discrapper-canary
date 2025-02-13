if (
    (n.d(t, {
        Uc: () => p,
        Xh: () => h,
        aQ: () => u,
        m_: () => d,
        z8: () => f
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var i,
        a = n(512969);
var o = n(972959),
    r = n(264043),
    l = n(34674),
    c = n(703656),
    s = n(979007),
    _ = n(981631),
    d = (((i = {}).HOME = 'home'), (i.SEARCH = 'search'), (i.APPLICATION = 'application'), (i.CATEGORY = 'category'), i);
let u = (0, o.H)(() => ({})),
    f = (0, o.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function p() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function h() {
    var e, t, n;
    let {
        location: { pathname: i, search: o }
    } = (0, c.s1)();
    if (
        null !=
        (0, a.LX)(i, {
            path: _.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, a.LX)(i, {
            path: _.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(o),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let i = Number(e.get('category_id'));
        Number.isInteger(i) && i !== l.MU && (t.categoryId = i.toString());
        let a = Number(e.get('page'));
        return null != a && a > 1 && (t.page = a), t;
    }
    let d = (0, a.LX)(i, {
            path: [_.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: u } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e ? e : {};
    if (null != d && null != u)
        return {
            type: 'category',
            categoryId: u
        };
    let f = (0, a.LX)(i, {
            path: [_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: p, section: h, skuId: g } = null !== (t = null == f ? void 0 : f.params) && void 0 !== t ? t : {};
    if (null != f && null != p) {
        let e = null === (n = r.Z.getApplication(p)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: p,
            applicationName: e,
            section: null != h ? h : null != g ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
