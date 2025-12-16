n.d(t, {
    PF: () => J,
    R7: () => B,
    Tg: () => H,
    UU: () => Y,
    gK: () => V,
    hM: () => M,
    iy: () => W,
    mO: () => Z,
    t1: () => j,
    uL: () => X,
    v2: () => F,
    yC: () => G,
}),
    n(704826),
    n(35282);
var r = n(392711),
    i = n.n(r),
    a = n(772848),
    o = n(544891),
    s = n(377108),
    l = n(570140),
    c = n(367907),
    u = n(198620),
    d = n(706454),
    f = n(675478),
    p = n(656733),
    _ = n(626135),
    m = n(708406),
    h = n(591759),
    g = n(668781),
    E = n(981631),
    b = n(526761),
    y = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = 250,
    N = /-/g,
    P = "format",
    R = "animated",
    w = "webp",
    D = ".webp",
    x = ".avif",
    L = ".gif";
function j(e) {
    let t = null != e ? { [e]: 1 } : {};
    c.ZP.trackWithMetadata(E.rMx.SEARCH_STARTED, {
        search_type: E.aib.GIF,
        load_id: p.Z.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
    });
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var { startTime: r } = n,
        i = T(n, ["startTime"]);
    let a = {
            offset: 0,
            limit: null,
            totalResults: e.length,
        },
        o = (0, m._2)(p.Z.getAnalyticsID(), t, I(v({}, a, i), { results: e.length })),
        s = null == r ? {} : { load_duration_ms: Date.now() - r };
    c.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_VIEWED, v({}, o, s));
}
function k(e, t, n) {
    let r = Date.now();
    j(t),
        o.tn
            .get({
                url: E.ANM.GIFS_SEARCH,
                query: {
                    q: e,
                    media_format: p.Z.getSelectedFormat(),
                    provider: "tenor",
                    locale: d.default.locale,
                    limit: n,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (i) => {
                    let a = i.body;
                    M(a, t, {
                        startTime: r,
                        limit: n,
                    }),
                        l.Z.dispatch({
                            type: "GIF_PICKER_QUERY_SUCCESS",
                            query: e,
                            items: a,
                        });
                },
                () =>
                    l.Z.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE",
                        query: e,
                    }),
            );
}
let U = i().debounce(k, A);
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    "" === e
        ? F()
        : (l.Z.dispatch({
              type: "GIF_PICKER_QUERY",
              query: e,
          }),
          n ? k(e, t, r) : U(e, t, r));
}
function Z(e) {
    "" !== e &&
        null != e &&
        o.tn
            .get({
                url: E.ANM.GIFS_SUGGEST,
                query: {
                    q: e,
                    provider: "tenor",
                    limit: 5,
                    locale: d.default.locale,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then((t) => {
                let n = t.body;
                l.Z.dispatch({
                    type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                    query: e,
                    items: n,
                });
            });
}
function F() {
    l.Z.dispatch({
        type: "GIF_PICKER_QUERY",
        query: "",
    });
}
function B(e) {
    let { type: t, index: n, offset: r, limit: i, results: a, totalResults: s, query: l, gifId: u } = e,
        d = (0, m._2)(p.Z.getAnalyticsID(), t, {
            offset: r,
            limit: i,
            results: a,
            totalResults: s,
        });
    c.ZP.trackWithMetadata(
        E.rMx.SEARCH_RESULT_SELECTED,
        I(v({}, d), {
            index_num: n,
            source_object: "GIF Picker",
            query: l,
        }),
    ),
        null != u &&
            o.tn.post({
                url: E.ANM.GIFS_SELECT,
                body: {
                    id: u,
                    q: l,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
}
function V() {
    let e = (0, a.Z)().replace(N, "");
    c.ZP.trackWithMetadata(E.rMx.SEARCH_OPENED, {
        search_type: E.aib.GIF,
        load_id: e,
    }),
        l.Z.wait(() => {
            l.Z.dispatch({
                type: "GIF_PICKER_INITIALIZE",
                analyticsID: e,
            });
        });
}
function H() {
    o.tn
        .get({
            url: E.ANM.GIFS_TRENDING,
            query: {
                provider: "tenor",
                locale: d.default.locale,
                media_format: p.Z.getSelectedFormat(),
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        })
        .then((e) => {
            let { body: t } = e,
                { categories: n, gifs: r } = t;
            l.Z.dispatch({
                type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                trendingCategories: n,
                trendingGIFPreview: r[0],
            });
        });
}
function Y(e) {
    let t = Date.now();
    j(E.wI2.TRENDING_GIFS),
        o.tn
            .get({
                url: E.ANM.GIFS_TRENDING_GIFS,
                query: {
                    media_format: p.Z.getSelectedFormat(),
                    provider: "tenor",
                    locale: d.default.locale,
                    limit: e,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (n) => {
                    let { body: r } = n;
                    M(r, E.wI2.TRENDING_GIFS, {
                        startTime: t,
                        limit: e,
                    }),
                        l.Z.dispatch({
                            type: "GIF_PICKER_QUERY_SUCCESS",
                            items: r,
                        });
                },
                () => {
                    l.Z.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
                },
            );
}
function W(e) {
    let t = h.Z.toURLSafe(e);
    return null == t ? e : (0, u.MO)(t) ? (0, u.q5)(t).toString() : e;
}
function K(e) {
    let t = h.Z.toURLSafe(e.src);
    return null != t && ((0, u._M)(t) || (0, u.MO)(t));
}
function z(e) {
    return K(e) && null != e.gifSrc ? e.gifSrc : e.src;
}
function q(e) {
    let t = h.Z.toURLSafe(e);
    if (null == t) return !1;
    let n = t.pathname.toLowerCase();
    return n.endsWith(D) || n.endsWith(x) || n.endsWith(L);
}
function Q(e) {
    let t = h.Z.toURLSafe(e);
    if (null == t) return e;
    let n = t.pathname.toLowerCase(),
        r = n.endsWith(D),
        i = n.endsWith(x),
        a = n.endsWith(L);
    return r || i || a ? ((i || a) && t.searchParams.set(P, w), t.searchParams.set(R, "true"), t.toString()) : e;
}
function X(e) {
    f.DZ.updateAsync(
        "favoriteGifs",
        (t) => {
            var n;
            let r = null != (n = i().max(Object.values(t.gifs).map((e) => e.order))) ? n : 0,
                a = z(e),
                o = K(e) && q(a),
                l = o ? Q(a) : a,
                c = o ? s.EO.IMAGE : e.format;
            if (
                ((t.gifs[W(e.url)] = I(v({}, e), {
                    src: l,
                    format: c,
                    order: r + 1,
                })),
                s.wK.toBinary(t).length > b.vY)
            )
                return (
                    g.Z.show({
                        title: y.intl.string(y.t["+XYXtZ"]),
                        body: y.intl.string(y.t.YSDH9n),
                    }),
                    !1
                );
            let u = i().size(t.gifs);
            u > 2 && (t.hideTooltip = !0), _.default.track(E.rMx.GIF_FAVORITED, { total_num_favorited: u });
        },
        b.fy.INFREQUENT_USER_ACTION,
    );
}
function J(e) {
    f.DZ.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[W(e)],
                _.default.track(E.rMx.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) });
        },
        b.fy.INFREQUENT_USER_ACTION,
    );
}
