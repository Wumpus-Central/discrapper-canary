n.d(t, {
    PF: () => V,
    R7: () => k,
    Tg: () => U,
    UU: () => G,
    gK: () => j,
    hM: () => P,
    iy: () => B,
    mO: () => x,
    t1: () => R,
    uL: () => F,
    v2: () => M,
    yC: () => L
}),
    n(757143),
    n(301563);
var r = n(392711),
    i = n.n(r),
    o = n(772848),
    a = n(544891),
    s = n(377108),
    l = n(570140),
    c = n(367907),
    u = n(198620),
    d = n(706454),
    f = n(675478),
    _ = n(656733),
    p = n(626135),
    h = n(708406),
    m = n(591759),
    g = n(668781),
    E = n(981631),
    b = n(526761),
    y = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = 250,
    C = /-/g;
function R(e) {
    let t = null != e ? { [e]: 1 } : {};
    c.ZP.trackWithMetadata(E.rMx.SEARCH_STARTED, {
        search_type: E.aib.GIF,
        load_id: _.Z.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t
    });
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var { startTime: r } = n,
        i = T(n, ['startTime']);
    let o = {
            offset: 0,
            limit: null,
            totalResults: e.length
        },
        a = (0, h._)(_.Z.getAnalyticsID(), t, S(O({}, o, i), { results: e.length })),
        s = null == r ? {} : { load_duration_ms: Date.now() - r };
    c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_VIEWED, O({}, a, s));
}
function w(e, t, n) {
    let r = Date.now();
    R(t),
        a.tn
            .get({
                url: E.ANM.GIFS_SEARCH,
                query: {
                    q: e,
                    media_format: _.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: d.default.locale,
                    limit: n
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (i) => {
                    let o = i.body;
                    P(o, t, {
                        startTime: r,
                        limit: n
                    }),
                        l.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            query: e,
                            items: o
                        });
                },
                () =>
                    l.Z.dispatch({
                        type: 'GIF_PICKER_QUERY_FAILURE',
                        query: e
                    })
            );
}
let D = i().debounce(w, A);
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    '' === e
        ? M()
        : (l.Z.dispatch({
              type: 'GIF_PICKER_QUERY',
              query: e
          }),
          n ? w(e, t, r) : D(e, t, r));
}
function x(e) {
    '' !== e &&
        null != e &&
        a.tn
            .get({
                url: E.ANM.GIFS_SUGGEST,
                query: {
                    q: e,
                    provider: 'tenor',
                    limit: 5,
                    locale: d.default.locale
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((t) => {
                let n = t.body;
                l.Z.dispatch({
                    type: 'GIF_PICKER_SUGGESTIONS_SUCCESS',
                    query: e,
                    items: n
                });
            });
}
function M() {
    l.Z.dispatch({
        type: 'GIF_PICKER_QUERY',
        query: ''
    });
}
function k(e) {
    let { type: t, index: n, offset: r, limit: i, results: o, totalResults: s, query: l, gifId: u } = e,
        d = (0, h._)(_.Z.getAnalyticsID(), t, {
            offset: r,
            limit: i,
            results: o,
            totalResults: s
        });
    c.ZP.trackWithMetadata(
        E.rMx.SEARCH_RESULT_SELECTED,
        S(O({}, d), {
            index_num: n,
            source_object: 'GIF Picker',
            query: l
        })
    ),
        null != u &&
            a.tn.post({
                url: E.ANM.GIFS_SELECT,
                body: {
                    id: u,
                    q: l
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
}
function j() {
    let e = (0, o.Z)().replace(C, '');
    c.ZP.trackWithMetadata(E.rMx.SEARCH_OPENED, {
        search_type: E.aib.GIF,
        load_id: e
    }),
        l.Z.wait(() => {
            l.Z.dispatch({
                type: 'GIF_PICKER_INITIALIZE',
                analyticsID: e
            });
        });
}
function U() {
    a.tn
        .get({
            url: E.ANM.GIFS_TRENDING,
            query: {
                provider: 'tenor',
                locale: d.default.locale,
                media_format: _.Z.getSelectedFormat()
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then((e) => {
            let { body: t } = e,
                { categories: n, gifs: r } = t;
            l.Z.dispatch({
                type: 'GIF_PICKER_TRENDING_FETCH_SUCCESS',
                trendingCategories: n,
                trendingGIFPreview: r[0]
            });
        });
}
function G(e) {
    let t = Date.now();
    R(E.wI2.TRENDING_GIFS),
        a.tn
            .get({
                url: E.ANM.GIFS_TRENDING_GIFS,
                query: {
                    media_format: _.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: d.default.locale,
                    limit: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (n) => {
                    let { body: r } = n;
                    P(r, E.wI2.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }),
                        l.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            items: r
                        });
                },
                () => {
                    l.Z.dispatch({ type: 'GIF_PICKER_QUERY_FAILURE' });
                }
            );
}
function B(e) {
    let t = m.Z.toURLSafe(e);
    return null == t ? e : (0, u.MO)(t) ? (0, u.q5)(t).toString() : e;
}
function F(e) {
    f.DZ.updateAsync(
        'favoriteGifs',
        (t) => {
            var n;
            let r = null != (n = i().max(Object.values(t.gifs).map((e) => e.order))) ? n : 0;
            if (((t.gifs[B(e.url)] = S(O({}, e), { order: r + 1 })), s.wK.toBinary(t).length > b.vY))
                return (
                    g.Z.show({
                        title: y.NW.string(y.t['+XYXtb']),
                        body: y.NW.string(y.t.YSDH9v)
                    }),
                    !1
                );
            let o = i().size(t.gifs);
            o > 2 && (t.hideTooltip = !0), p.default.track(E.rMx.GIF_FAVORITED, { total_num_favorited: o });
        },
        b.fy.INFREQUENT_USER_ACTION
    );
}
function V(e) {
    f.DZ.updateAsync(
        'favoriteGifs',
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[B(e)], p.default.track(E.rMx.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) });
        },
        b.fy.INFREQUENT_USER_ACTION
    );
}
