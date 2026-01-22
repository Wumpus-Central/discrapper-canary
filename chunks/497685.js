n.d(t, {
    $P: () => V,
    H9: () => k,
    Qh: () => M,
    Se: () => B,
    Tr: () => J,
    V$: () => Y,
    Z4: () => K,
    _E: () => F,
    g4: () => H,
    k8: () => W,
    wg: () => $,
    xo: () => z,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(735438),
    i = n.n(r),
    a = n(835245),
    s = n(562465),
    o = n(803805),
    l = n(73153),
    c = n(58149),
    u = n(380544),
    d = n(202803),
    f = n(773669),
    p = n(594061),
    _ = n(821102),
    h = n(954571),
    m = n(11187),
    g = n(998218),
    E = n(157559),
    b = n(652215),
    y = n(355097),
    O = n(985018);

function A(e, t, n) {
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
                A(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = C(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let N = 250,
    R = /-/g,
    w = "format",
    P = "animated",
    D = "webp",
    x = ".webp",
    L = ".avif",
    j = ".gif";

function M(e) {
    let t =
        null != e
            ? {
                  [e]: 1,
              }
            : {};
    c.Ay.trackWithMetadata(b.HAw.SEARCH_STARTED, {
        search_type: b.I4_.GIF,
        load_id: _.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, u.cf)(),
    });
}

function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        [r = {}] = [n],
        { startTime: i } = r,
        a = T(r, ["startTime"]),
        s = {
            offset: 0,
            limit: null,
            totalResults: e.length,
        },
        o = (0, m.QL)(
            _.A.getAnalyticsID(),
            t,
            I(v({}, s, a), {
                results: e.length,
            }),
        ),
        l =
            null == i
                ? {}
                : {
                      load_duration_ms: Date.now() - i,
                  };
    c.Ay.trackWithMetadata(
        b.HAw.SEARCH_RESULT_VIEWED,
        I(v({}, o, l), {
            gif_provider: (0, u.cf)(),
        }),
    );
}

function U(e, t, n) {
    let r = Date.now();
    M(t),
        s.Bo.get({
            url: b.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: _.A.getSelectedFormat(),
                provider: (0, u.cf)(),
                locale: f.default.locale,
                limit: n,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (i) => {
                let a = i.body;
                k(a, t, {
                    startTime: r,
                    limit: n,
                }),
                    l.h.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        query: e,
                        items: a,
                    });
            },
            () =>
                l.h.dispatch({
                    type: "GIF_PICKER_QUERY_FAILURE",
                    query: e,
                }),
        );
}
let G = i().debounce(U, N);

function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    "" === e
        ? B()
        : (l.h.dispatch({
              type: "GIF_PICKER_QUERY",
              query: e,
          }),
          n ? U(e, t, r) : G(e, t, r));
}

function F(e) {
    "" !== e &&
        null != e &&
        s.Bo.get({
            url: b.Rsh.GIFS_SUGGEST,
            query: {
                q: e,
                provider: (0, u.cf)(),
                limit: 5,
                locale: f.default.locale,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let n = t.body;
            l.h.dispatch({
                type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                query: e,
                items: n,
            });
        });
}

function B() {
    l.h.dispatch({
        type: "GIF_PICKER_QUERY",
        query: "",
    });
}

function H(e) {
    let { type: t, index: n, offset: r, limit: i, results: a, totalResults: o, query: l, gifId: d } = e,
        f = (0, m.QL)(_.A.getAnalyticsID(), t, {
            offset: r,
            limit: i,
            results: a,
            totalResults: o,
        });
    if (
        (c.Ay.trackWithMetadata(
            b.HAw.SEARCH_RESULT_SELECTED,
            I(v({}, f), {
                index_num: n,
                source_object: "GIF Picker",
                query: l,
            }),
        ),
        null != d)
    ) {
        let e = (0, u.cf)();
        s.Bo.post({
            url: b.Rsh.GIFS_SELECT,
            body: {
                id: d,
                q: l,
                provider: e,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}

function Y() {
    let e = (0, a.A)().replace(R, "");
    c.Ay.trackWithMetadata(b.HAw.SEARCH_OPENED, {
        search_type: b.I4_.GIF,
        load_id: e,
    }),
        l.h.wait(() => {
            l.h.dispatch({
                type: "GIF_PICKER_INITIALIZE",
                analyticsID: e,
            });
        });
}

function W() {
    s.Bo.get({
        url: b.Rsh.GIFS_TRENDING,
        query: {
            provider: (0, u.cf)(),
            locale: f.default.locale,
            media_format: _.A.getSelectedFormat(),
        },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: n, gifs: r } = t;
        l.h.dispatch({
            type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
            trendingCategories: n,
            trendingGIFPreview: r[0],
        });
    });
}

function K(e) {
    let t = Date.now();
    M(b.dD.TRENDING_GIFS),
        s.Bo.get({
            url: b.Rsh.GIFS_TRENDING_GIFS,
            query: {
                media_format: _.A.getSelectedFormat(),
                provider: (0, u.cf)(),
                locale: f.default.locale,
                limit: e,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let { body: r } = n;
                k(r, b.dD.TRENDING_GIFS, {
                    startTime: t,
                    limit: e,
                }),
                    l.h.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: r,
                    });
            },
            () => {
                l.h.dispatch({
                    type: "GIF_PICKER_QUERY_FAILURE",
                });
            },
        );
}

function z(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? e : (0, d.fr)(t) ? (0, d.w6)(t).toString() : e;
}

function q(e) {
    let t = g.A.toURLSafe(e.src);
    return null != t && ((0, d.BX)(t) || (0, d.fr)(t));
}

function X(e) {
    return q(e) && null != e.gifSrc ? e.gifSrc : e.src;
}

function Z(e) {
    let t = g.A.toURLSafe(e);
    if (null == t) return !1;
    let n = t.pathname.toLowerCase();
    return n.endsWith(x) || n.endsWith(L) || n.endsWith(j);
}

function Q(e) {
    let t = g.A.toURLSafe(e);
    if (null == t) return e;
    let n = t.pathname.toLowerCase(),
        r = n.endsWith(x),
        i = n.endsWith(L),
        a = n.endsWith(j);
    return r || i || a ? ((i || a) && t.searchParams.set(w, D), t.searchParams.set(P, "true"), t.toString()) : e;
}

function $(e) {
    p.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            var n;
            let r = null != (n = i().max(Object.values(t.gifs).map((e) => e.order))) ? n : 0,
                a = X(e),
                s = q(e) && Z(a),
                l = s ? Q(a) : a,
                c = s ? o.TL.IMAGE : e.format;
            if (
                ((t.gifs[z(e.url)] = I(v({}, e), {
                    src: l,
                    format: c,
                    order: r + 1,
                })),
                o.uz.toBinary(t).length > 762880)
            )
                return (
                    E.A.show({
                        title: O.intl.string(O.t["+XYXtZ"]),
                        body: O.intl.string(O.t.YSDH9n),
                    }),
                    !1
                );
            let u = i().size(t.gifs);
            u > 2 && (t.hideTooltip = !0),
                h.default.track(b.HAw.GIF_FAVORITED, {
                    total_num_favorited: u,
                });
        },
        y.Sb.INFREQUENT_USER_ACTION,
    );
}

function J(e) {
    p.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[z(e)],
                h.default.track(b.HAw.GIF_UNFAVORITED, {
                    total_num_favorited: i().size(t.gifs),
                });
        },
        y.Sb.INFREQUENT_USER_ACTION,
    );
}
