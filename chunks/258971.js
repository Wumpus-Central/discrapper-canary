if (
    (n.d(t, {
        Uc: function () {
            return A;
        },
        Xh: function () {
            return d;
        },
        aQ: function () {
            return S;
        },
        m_: function () {
            return r;
        },
        z8: function () {
            return I;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    12633 == n.j)
)
    var r,
        o,
        i = n(512969);
var l = n(972959),
    c = n(264043),
    a = n(34674),
    u = n(703656),
    s = n(979007),
    p = n(981631);
((o = r || (r = {})).HOME = 'home'), (o.SEARCH = 'search'), (o.APPLICATION = 'application'), (o.CATEGORY = 'category');
let S = (0, l.H)(() => ({})),
    I = (0, l.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function A() {
    let {
        location: { state: e }
    } = (0, u.s1)();
    return null == e ? void 0 : e.previousView;
}
function d() {
    var e, t, n;
    let {
        location: { pathname: r, search: o }
    } = (0, u.s1)();
    if (
        null !=
        (0, i.LX)(r, {
            path: p.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, i.LX)(r, {
            path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let e = new URLSearchParams(o),
            t = { type: 'search' },
            n = e.get('q');
        null != n && '' !== n && (t.query = n);
        let r = Number(e.get('category_id'));
        Number.isInteger(r) && r !== a.MU && (t.categoryId = r.toString());
        let i = Number(e.get('page'));
        return null != i && i > 1 && (t.page = i), t;
    }
    let l = (0, i.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: S } = null !== (e = null == l ? void 0 : l.params) && void 0 !== e ? e : {};
    if (null != l && null != S)
        return {
            type: 'category',
            categoryId: S
        };
    let I = (0, i.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: A, section: d, skuId: O } = null !== (t = null == I ? void 0 : I.params) && void 0 !== t ? t : {};
    if (null != I && null != A) {
        let e = null === (n = c.Z.getApplication(A)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: A,
            applicationName: e,
            section: null != d ? d : null != O ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
