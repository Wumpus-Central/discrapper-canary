n.d(t, {
    Hq: () => p,
    M9: () => m,
    Oj: () => g,
    cj: () => h,
    km: () => f,
    oJ: () => d,
    rV: () => _,
    yt: () => E
});
var i = n(544891),
    r = n(570140),
    a = n(115130);
n(812206);
var s = n(703656),
    o = n(55563);
n(551428);
var l = n(695103),
    u = n(73346),
    c = n(981631);
function d(e) {
    let t = { application_id: e };
    return (0, u.Kb)({
        url: c.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: t,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(
        (e) => (
            r.Z.dispatch({
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
function f(e) {
    let t = o.Z.get(e),
        n = null != t && (l.Z.inTestModeForApplication(t.applicationId) || a.Z.inDevModeForApplication(t.applicationId));
    return (
        r.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_START',
            skuId: e
        }),
        (0, u.Kb)({
            url: n ? c.ANM.STORE_LISTINGS_SKU(e) : c.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
            rejectWithError: !1
        })
            .then((e) => {
                n
                    ? r.Z.dispatch({
                          type: 'STORE_LISTINGS_FETCH_SUCCESS',
                          storeListings: e.body
                      })
                    : r.Z.dispatch({
                          type: 'STORE_LISTING_FETCH_SUCCESS',
                          storeListing: e.body
                      });
            })
            .catch(() => {
                r.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: e
                });
            })
    );
}
function _(e) {
    return (0, u.Kb)({
        url: c.ANM.STORE_LISTING(e),
        rejectWithError: !1
    }).then((e) => {
        r.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function p(e) {
    return (0, u.Kb)({
        url: c.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(e),
        rejectWithError: !1
    }).then((e) => {
        r.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: e.body
        });
    });
}
function h() {
    r.Z.dispatch({ type: 'APPLICATION_STORE_MATURE_AGREE' });
}
function m() {
    (0, s.uL)(c.Z5c.APPLICATION_STORE);
}
function g(e) {
    return i.tn.post({
        url: c.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function E(e, t) {
    let { pathname: n, ...i } = (0, u.ZI)(e, t);
    (0, s.uL)(n, i);
}
