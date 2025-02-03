if (
    (n.d(t, {
        Uc: () => S,
        Xh: () => I,
        aQ: () => d,
        m_: () => c,
        z8: () => s
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var l,
        i = n(512969);
var a = n(972959),
    r = n(264043),
    o = n(34674),
    E = n(703656),
    u = n(979007),
    _ = n(981631),
    c = (((l = {}).HOME = 'home'), (l.SEARCH = 'search'), (l.APPLICATION = 'application'), (l.CATEGORY = 'category'), l);
let d = (0, a.H)(() => ({})),
    s = (0, a.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function S() {
    let {
        location: { state: e }
    } = (0, E.s1)();
    return null == e ? void 0 : e.previousView;
}
function I() {
    var e, t, n;
    let {
        location: { pathname: l, search: a }
    } = (0, E.s1)();
    if (
        null !=
        (0, i.LX)(l, {
            path: _.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, i.LX)(l, {
            path: _.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(a),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let l = Number(e.get('category_id'));
        Number.isInteger(l) && l !== o.MU && (t.categoryId = l.toString());
        let i = Number(e.get('page'));
        return null != i && i > 1 && (t.page = i), t;
    }
    let c = (0, i.LX)(l, {
            path: [_.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: d } = null !== (e = null == c ? void 0 : c.params) && void 0 !== e ? e : {};
    if (null != c && null != d)
        return {
            type: 'category',
            categoryId: d
        };
    let s = (0, i.LX)(l, {
            path: [_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), _.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: S, section: I, skuId: T } = null !== (t = null == s ? void 0 : s.params) && void 0 !== t ? t : {};
    if (null != s && null != S) {
        let e = null === (n = r.Z.getApplication(S)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: S,
            applicationName: e,
            section: null != I ? I : null != T ? u.GlobalDiscoveryAppsSections.STORE : u.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
