n.d(t, {
    Uc: function () {
        return _;
    },
    Xh: function () {
        return m;
    },
    aQ: function () {
        return p;
    },
    m_: function () {
        return i;
    },
    z8: function () {
        return f;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i,
    r,
    a = n(512969),
    o = n(972959),
    s = n(264043),
    l = n(34674),
    c = n(703656),
    u = n(979007),
    d = n(981631);
((r = i || (i = {})).HOME = 'home'), (r.SEARCH = 'search'), (r.APPLICATION = 'application'), (r.CATEGORY = 'category');
let p = (0, o.H)(() => ({})),
    f = (0, o.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function _() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function m() {
    var e, t, n;
    let {
        location: { pathname: i, search: r }
    } = (0, c.s1)();
    if (
        null !=
        (0, a.LX)(i, {
            path: d.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, a.LX)(i, {
            path: d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(r),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let i = Number(e.get('category_id'));
        Number.isInteger(i) && i !== l.MU && (t.categoryId = i.toString());
        let a = Number(e.get('page'));
        return null != a && a > 1 && (t.page = a), t;
    }
    let o = (0, a.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: p } = null !== (e = null == o ? void 0 : o.params) && void 0 !== e ? e : {};
    if (null != o && null != p)
        return {
            type: 'category',
            categoryId: p
        };
    let f = (0, a.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: _, section: m, skuId: h } = null !== (t = null == f ? void 0 : f.params) && void 0 !== t ? t : {};
    if (null != f && null != _) {
        let e = null === (n = s.Z.getApplication(_)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: _,
            applicationName: e,
            section: null != m ? m : null != h ? u.GlobalDiscoveryAppsSections.STORE : u.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
