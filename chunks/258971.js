if (
    (n.d(t, {
        Uc: () => T,
        Xh: () => E,
        aQ: () => p,
        m_: () => d,
        z8: () => O
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var r,
        c = n(512969);
var l = n(972959),
    a = n(264043),
    o = n(34674),
    i = n(703656),
    s = n(979007),
    u = n(981631),
    d = (((r = {}).HOME = 'home'), (r.SEARCH = 'search'), (r.APPLICATION = 'application'), (r.CATEGORY = 'category'), r);
let p = (0, l.H)(() => ({})),
    O = (0, l.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function T() {
    let {
        location: { state: e }
    } = (0, i.s1)();
    return null == e ? void 0 : e.previousView;
}
function E() {
    var e, t, n;
    let {
        location: { pathname: r, search: l }
    } = (0, i.s1)();
    if (
        null !=
        (0, c.LX)(r, {
            path: u.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, c.LX)(r, {
            path: u.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(l),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let r = Number(e.get('category_id'));
        Number.isInteger(r) && r !== o.MU && (t.categoryId = r.toString());
        let c = Number(e.get('page'));
        return null != c && c > 1 && (t.page = c), t;
    }
    let d = (0, c.LX)(r, {
            path: [u.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: p } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e ? e : {};
    if (null != d && null != p)
        return {
            type: 'category',
            categoryId: p
        };
    let O = (0, c.LX)(r, {
            path: [u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: T, section: E, skuId: m } = null !== (t = null == O ? void 0 : O.params) && void 0 !== t ? t : {};
    if (null != O && null != T) {
        let e = null === (n = a.Z.getApplication(T)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: T,
            applicationName: e,
            section: null != E ? E : null != m ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
