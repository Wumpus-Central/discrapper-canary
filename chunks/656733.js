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
let _ = "mp4",
    p = "tinymp4",
    h = "nanomp4",
    m = "webm",
    g = "tinywebm",
    E = "nanowebm",
    b = "fixed_height.mp4",
    y = "fixed_height_small.mp4",
    O = "fixed_width.mp4",
    v = "fixed_width_small.mp4",
    I = "downsized_small.mp4",
    T = "original.mp4",
    S = m,
    A = k(S) ? a.EO.VIDEO : a.EO.IMAGE,
    C = null,
    N = "",
    R = "",
    P = [],
    D = [],
    w = [],
    L = [];
function x(e) {
    C = e.analyticsID;
}
function M(e) {
    "" === (N = e.query) && ((R = ""), (P = []), (w = []));
}
function k(e) {
    switch (e) {
        case b:
        case y:
        case O:
        case v:
        case I:
        case T:
        case _:
        case p:
        case h:
        case m:
        case g:
        case E:
            return !0;
        default:
            return !1;
    }
}
function j(e) {
    return e.replace(/^https?:/, "");
}
function U(e) {
    if (null != e.query && N === R) return !1;
    null != e.query && (R = e.query),
        (P = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: o } = e;
            return {
                width: t,
                height: n,
                src: j(r),
                gifSrc: j(i),
                url: a,
                id: o,
                format: A,
            };
        }));
}
function G(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (R = t), (P = []);
}
function B(e) {
    let t = e.trendingCategories;
    D = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: s.wI2.TRENDING_GIFS,
                      name: l.intl.string(l.t.H6zNFz),
                      src: j(e.trendingGIFPreview.src),
                      format: A,
                  },
              ]
            : []),
        ...t.map((e) =>
            f(u({}, e), {
                src: j(e.src),
                type: s.wI2.TRENDING_CATEGORY,
                format: A,
            }),
        ),
    ];
}
function Z(e) {
    let { items: t } = e;
    w = t;
}
function F(e) {
    let { items: t } = e;
    L = t;
}
class V extends (r = i.ZP.Store) {
    getAnalyticsID() {
        return C;
    }
    getQuery() {
        return N;
    }
    getResultQuery() {
        return R;
    }
    getResultItems() {
        return P;
    }
    getTrendingCategories() {
        return D;
    }
    getSelectedFormat() {
        return S;
    }
    getSuggestions() {
        return w;
    }
    getTrendingSearchTerms() {
        return L;
    }
}
c(V, "displayName", "GIFPickerViewStore");
let H = new V(o.Z, {
    GIF_PICKER_INITIALIZE: x,
    GIF_PICKER_QUERY: M,
    GIF_PICKER_QUERY_SUCCESS: U,
    GIF_PICKER_QUERY_FAILURE: G,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: B,
    GIF_PICKER_SUGGESTIONS_SUCCESS: Z,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: F,
});
