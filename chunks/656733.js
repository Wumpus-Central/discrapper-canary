n.d(t, { Z: () => H }), n(704826), n(35282), n(388685);
var r,
    i = n(442837),
    a = n(377108),
    o = n(570140),
    s = n(981631),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = "mp4",
    _ = "tinymp4",
    m = "nanomp4",
    h = "webm",
    g = "tinywebm",
    E = "nanowebm",
    b = "fixed_height.mp4",
    y = "fixed_height_small.mp4",
    O = "fixed_width.mp4",
    v = "fixed_width_small.mp4",
    S = "downsized_small.mp4",
    I = "original.mp4",
    T = h,
    C = M(T) ? a.EO.VIDEO : a.EO.IMAGE,
    A = null,
    N = "",
    P = "",
    R = [],
    w = [],
    D = [],
    x = [];
function L(e) {
    A = e.analyticsID;
}
function j(e) {
    "" === (N = e.query) && ((P = ""), (R = []), (D = []));
}
function M(e) {
    switch (e) {
        case b:
        case y:
        case O:
        case v:
        case S:
        case I:
        case p:
        case _:
        case m:
        case h:
        case g:
        case E:
            return !0;
        default:
            return !1;
    }
}
function k(e) {
    return e.replace(/^https?:/, "");
}
function U(e) {
    if (null != e.query && N === P) return !1;
    null != e.query && (P = e.query),
        (R = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: o } = e;
            return {
                width: t,
                height: n,
                src: k(r),
                gifSrc: k(i),
                url: a,
                id: o,
                format: C,
            };
        }));
}
function G(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (P = t), (R = []);
}
function Z(e) {
    let t = e.trendingCategories;
    w = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: s.wI2.TRENDING_GIFS,
                      name: l.intl.string(l.t.H6zNFz),
                      src: k(e.trendingGIFPreview.src),
                      format: C,
                  },
              ]
            : []),
        ...t.map((e) =>
            f(u({}, e), {
                src: k(e.src),
                type: s.wI2.TRENDING_CATEGORY,
                format: C,
            }),
        ),
    ];
}
function F(e) {
    let { items: t } = e;
    D = t;
}
function B(e) {
    let { items: t } = e;
    x = t;
}
class V extends (r = i.ZP.Store) {
    getAnalyticsID() {
        return A;
    }
    getQuery() {
        return N;
    }
    getResultQuery() {
        return P;
    }
    getResultItems() {
        return R;
    }
    getTrendingCategories() {
        return w;
    }
    getSelectedFormat() {
        return T;
    }
    getSuggestions() {
        return D;
    }
    getTrendingSearchTerms() {
        return x;
    }
}
c(V, "displayName", "GIFPickerViewStore");
let H = new V(o.Z, {
    GIF_PICKER_INITIALIZE: L,
    GIF_PICKER_QUERY: j,
    GIF_PICKER_QUERY_SUCCESS: U,
    GIF_PICKER_QUERY_FAILURE: G,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: Z,
    GIF_PICKER_SUGGESTIONS_SUCCESS: F,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: B,
});
