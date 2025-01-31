if (
    (n.d(t, {
        Uc: () => I,
        Xh: () => f,
        aQ: () => s,
        m_: () => u,
        z8: () => E
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var i,
        o = n(512969);
var a = n(972959),
    l = n(264043),
    r = n(34674),
    c = n(703656),
    _ = n(979007),
    d = n(981631),
    u = (((i = {}).HOME = 'home'), (i.SEARCH = 'search'), (i.APPLICATION = 'application'), (i.CATEGORY = 'category'), i);
let s = (0, a.H)(() => ({})),
    E = (0, a.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function I() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function f() {
    var e, t, n;
    let {
        location: { pathname: i, search: a }
    } = (0, c.s1)();
    if (
        null !=
        (0, o.LX)(i, {
            path: d.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, o.LX)(i, {
            path: d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(a),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let i = Number(e.get('category_id'));
        Number.isInteger(i) && i !== r.MU && (t.categoryId = i.toString());
        let o = Number(e.get('page'));
        return null != o && o > 1 && (t.page = o), t;
    }
    let u = (0, o.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: s } = null !== (e = null == u ? void 0 : u.params) && void 0 !== e ? e : {};
    if (null != u && null != s)
        return {
            type: 'category',
            categoryId: s
        };
    let E = (0, o.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: I, section: f, skuId: T } = null !== (t = null == E ? void 0 : E.params) && void 0 !== t ? t : {};
    if (null != E && null != I) {
        let e = null === (n = l.Z.getApplication(I)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: I,
            applicationName: e,
            section: null != f ? f : null != T ? _.GlobalDiscoveryAppsSections.STORE : _.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
