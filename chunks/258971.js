if (
    (n.d(t, {
        Uc: () => O,
        Xh: () => _,
        aQ: () => d,
        m_: () => p,
        z8: () => S
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var a,
        r = n(512969);
var l = n(972959),
    o = n(264043),
    i = n(34674),
    c = n(703656),
    u = n(979007),
    s = n(981631),
    p = (((a = {}).HOME = 'home'), (a.SEARCH = 'search'), (a.APPLICATION = 'application'), (a.CATEGORY = 'category'), a);
let d = (0, l.H)(() => ({})),
    S = (0, l.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function O() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function _() {
    var e, t, n;
    let {
        location: { pathname: a, search: l }
    } = (0, c.s1)();
    if (
        null !=
        (0, r.LX)(a, {
            path: s.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, r.LX)(a, {
            path: s.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(l),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let a = Number(e.get('category_id'));
        Number.isInteger(a) && a !== i.MU && (t.categoryId = a.toString());
        let r = Number(e.get('page'));
        return null != r && r > 1 && (t.page = r), t;
    }
    let p = (0, r.LX)(a, {
            path: [s.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: d } = null !== (e = null == p ? void 0 : p.params) && void 0 !== e ? e : {};
    if (null != p && null != d)
        return {
            type: 'category',
            categoryId: d
        };
    let S = (0, r.LX)(a, {
            path: [s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: O, section: _, skuId: E } = null !== (t = null == S ? void 0 : S.params) && void 0 !== t ? t : {};
    if (null != S && null != O) {
        let e = null === (n = o.Z.getApplication(O)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: O,
            applicationName: e,
            section: null != _ ? _ : null != E ? u.GlobalDiscoveryAppsSections.STORE : u.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
