n.d(t, { Z: () => x }), n(757143), n(301563), n(47120);
var r,
    i = n(442837),
    o = n(377108),
    a = n(570140),
    s = n(981631),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
let _ = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    p = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    h = _.MP4,
    m = null,
    g = '',
    E = '',
    b = [],
    y = [],
    v = h,
    O = [],
    I = [];
function S(e) {
    m = e.analyticsID;
}
function T(e) {
    '' === (g = e.query) && ((E = ''), (b = []), (O = []));
}
function N(e) {
    switch (e) {
        case p.FIXED_HEIGHT_MP4:
        case p.FIXED_HEIGHT_SMALL_MP4:
        case p.FIXED_WIDTH_MP4:
        case p.FIXED_WIDTH_SMALL_MP4:
        case p.DOWNSIZED_SMALL_MP4:
        case p.ORIGINAL_MP4:
        case _.MP4:
        case _.TINYMP4:
        case _.NANOMP4:
        case _.WEBM:
        case _.TINYWEBM:
        case _.NANOWEBM:
            return !0;
        default:
            return !1;
    }
}
function A(e) {
    return e.replace(/^https?:/, '');
}
function C(e) {
    if (null != e.query && g === E) return !1;
    null != e.query && (E = e.query),
        (b = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: s } = e;
            return {
                width: t,
                height: n,
                src: A(r),
                gifSrc: A(i),
                url: a,
                id: s,
                format: N(v) ? o.EO.VIDEO : o.EO.IMAGE
            };
        }));
}
function R(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (E = t), (b = []);
}
function P(e) {
    let t = e.trendingCategories;
    y = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: s.wI2.TRENDING_GIFS,
                      name: l.NW.string(l.t.H6zNFx),
                      src: A(e.trendingGIFPreview.src),
                      format: o.EO.IMAGE
                  }
              ]
            : []),
        ...t.map((e) =>
            f(u({}, e), {
                src: A(e.src),
                type: s.wI2.TRENDING_CATEGORY,
                format: o.EO.VIDEO
            })
        )
    ];
}
function w(e) {
    let { items: t } = e;
    O = t;
}
function D(e) {
    let { items: t } = e;
    I = t;
}
class L extends (r = i.ZP.Store) {
    getAnalyticsID() {
        return m;
    }
    getQuery() {
        return g;
    }
    getResultQuery() {
        return E;
    }
    getResultItems() {
        return b;
    }
    getTrendingCategories() {
        return y;
    }
    getSelectedFormat() {
        return v;
    }
    getSuggestions() {
        return O;
    }
    getTrendingSearchTerms() {
        return I;
    }
}
c(L, 'displayName', 'GIFPickerViewStore');
let x = new L(a.Z, {
    GIF_PICKER_INITIALIZE: S,
    GIF_PICKER_QUERY: T,
    GIF_PICKER_QUERY_SUCCESS: C,
    GIF_PICKER_QUERY_FAILURE: R,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: P,
    GIF_PICKER_SUGGESTIONS_SUCCESS: w,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: D
});
