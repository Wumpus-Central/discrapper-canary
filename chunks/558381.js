r.d(n, {
    Hq: function () {
        return _;
    },
    M9: function () {
        return g;
    },
    Oj: function () {
        return E;
    },
    cj: function () {
        return m;
    },
    km: function () {
        return p;
    },
    oJ: function () {
        return f;
    },
    rV: function () {
        return h;
    },
    yt: function () {
        return v;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(115130);
r(812206);
var s = r(703656),
    l = r(55563);
r(551428);
var u = r(695103),
    c = r(73346),
    d = r(981631);
function f(e) {
    let n = { application_id: e };
    return (0, c.Kb)({
        url: d.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(
        (e) => (
            a.Z.dispatch({
                type: 'STORE_LISTINGS_FETCH_SUCCESS',
                storeListings: e.body.map((e) => ({
                    ...e,
                    published: !0
                }))
            }),
            e.body
        )
    );
}
function p(e) {
    let n = l.Z.get(e),
        r = null != n && (u.Z.inTestModeForApplication(n.applicationId) || o.Z.inDevModeForApplication(n.applicationId));
    return (
        a.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_START',
            skuId: e
        }),
        (0, c.Kb)({
            url: r ? d.ANM.STORE_LISTINGS_SKU(e) : d.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
            rejectWithError: !1
        })
            .then((e) => {
                r
                    ? a.Z.dispatch({
                          type: 'STORE_LISTINGS_FETCH_SUCCESS',
                          storeListings: e.body
                      })
                    : a.Z.dispatch({
                          type: 'STORE_LISTING_FETCH_SUCCESS',
                          storeListing: e.body
                      });
            })
            .catch(() => {
                a.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                });
            })
    );
}
function h(e) {
    return (0, c.Kb)({
        url: d.ANM.STORE_LISTING(e),
        rejectWithError: !1
    }).then((e) => {
        a.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function _(e) {
    return (0, c.Kb)({
        url: d.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(e),
        rejectWithError: !1
    }).then((e) => {
        a.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function m() {
    a.Z.dispatch({ type: 'APPLICATION_STORE_MATURE_AGREE' });
}
function g() {
    (0, s.uL)(d.Z5c.APPLICATION_STORE);
}
function E(e) {
    return i.tn.post({
        url: d.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function v(e, n) {
    let { pathname: r, ...i } = (0, c.ZI)(e, n);
    (0, s.uL)(r, i);
}
