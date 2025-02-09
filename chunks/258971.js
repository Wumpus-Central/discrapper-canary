if (
    (n.d(t, {
        Uc: () => A,
        Xh: () => _,
        aQ: () => T,
        m_: () => d,
        z8: () => E
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var l,
        a = n(512969);
var c = n(972959),
    o = n(264043),
    i = n(34674),
    r = n(703656),
    s = n(979007),
    u = n(981631),
    d = (((l = {}).HOME = 'home'), (l.SEARCH = 'search'), (l.APPLICATION = 'application'), (l.CATEGORY = 'category'), l);
let T = (0, c.H)(() => ({})),
    E = (0, c.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function A() {
    let {
        location: { state: e }
    } = (0, r.s1)();
    return null == e ? void 0 : e.previousView;
}
function _() {
    var e, t, n;
    let {
        location: { pathname: l, search: c }
    } = (0, r.s1)();
    if (
        null !=
        (0, a.LX)(l, {
            path: u.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, a.LX)(l, {
            path: u.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(c),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let l = Number(e.get('category_id'));
        Number.isInteger(l) && l !== i.MU && (t.categoryId = l.toString());
        let a = Number(e.get('page'));
        return null != a && a > 1 && (t.page = a), t;
    }
    let d = (0, a.LX)(l, {
            path: [u.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: T } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e ? e : {};
    if (null != d && null != T)
        return {
            type: 'category',
            categoryId: T
        };
    let E = (0, a.LX)(l, {
            path: [u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: A, section: _, skuId: p } = null !== (t = null == E ? void 0 : E.params) && void 0 !== t ? t : {};
    if (null != E && null != A) {
        let e = null === (n = o.Z.getApplication(A)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: A,
            applicationName: e,
            section: null != _ ? _ : null != p ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
