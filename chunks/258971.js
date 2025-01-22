if (
    (n.d(e, {
        Uc: function () {
            return O;
        },
        Xh: function () {
            return I;
        },
        aQ: function () {
            return d;
        },
        m_: function () {
            return r;
        },
        z8: function () {
            return S;
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
        l,
        o = n(512969);
var a = n(972959),
    i = n(264043),
    c = n(34674),
    u = n(703656),
    s = n(979007),
    p = n(981631);
((l = r || (r = {})).HOME = 'home'), (l.SEARCH = 'search'), (l.APPLICATION = 'application'), (l.CATEGORY = 'category');
let d = (0, a.H)(() => ({})),
    S = (0, a.H)(() => ({
        sessionId: null,
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    }));
function O() {
    let {
        location: { state: t }
    } = (0, u.s1)();
    return null == t ? void 0 : t.previousView;
}
function I() {
    var t, e, n;
    let {
        location: { pathname: r, search: l }
    } = (0, u.s1)();
    if (
        null !=
        (0, o.LX)(r, {
            path: p.Z5c.GLOBAL_DISCOVERY_APPS,
            exact: !0
        })
    )
        return { type: 'home' };
    if (
        null !=
        (0, o.LX)(r, {
            path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
            exact: !0
        })
    ) {
        let t = new URLSearchParams(l),
            e = { type: 'search' },
            n = t.get('q');
        null != n && '' !== n && (e.query = n);
        let r = Number(t.get('category_id'));
        Number.isInteger(r) && r !== c.MU && (e.categoryId = r.toString());
        let o = Number(t.get('page'));
        return null != o && o > 1 && (e.page = o), e;
    }
    let a = (0, o.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId')],
            exact: !0
        }),
        { categoryId: d } = null !== (t = null == a ? void 0 : a.params) && void 0 !== t ? t : {};
    if (null != a && null != d)
        return {
            type: 'category',
            categoryId: d
        };
    let S = (0, o.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'), p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', ':section'), p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')],
            exact: !0
        }),
        { applicationId: O, section: I, skuId: _ } = null !== (e = null == S ? void 0 : S.params) && void 0 !== e ? e : {};
    if (null != S && null != O) {
        let t = null === (n = i.Z.getApplication(O)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: O,
            applicationName: t,
            section: null != I ? I : null != _ ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
        };
    }
}
