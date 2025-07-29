(n.d(t, { Z: () => x }), n(704826), n(35282), n(388685));
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
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
let f = {
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
    h = f.WEBM,
    m = A(h) ? a.EO.VIDEO : a.EO.IMAGE,
    g = null,
    E = '',
    b = '',
    y = [],
    O = [],
    v = [],
    I = [];
function T(e) {
    g = e.analyticsID;
}
function S(e) {
    '' === (E = e.query) && ((b = ''), (y = []), (v = []));
}
function A(e) {
    switch (e) {
        case p.FIXED_HEIGHT_MP4:
        case p.FIXED_HEIGHT_SMALL_MP4:
        case p.FIXED_WIDTH_MP4:
        case p.FIXED_WIDTH_SMALL_MP4:
        case p.DOWNSIZED_SMALL_MP4:
        case p.ORIGINAL_MP4:
        case f.MP4:
        case f.TINYMP4:
        case f.NANOMP4:
        case f.WEBM:
        case f.TINYWEBM:
        case f.NANOWEBM:
            return !0;
        default:
            return !1;
    }
}
function N(e) {
    return e.replace(/^https?:/, '');
}
function C(e) {
    if (null != e.query && E === b) return !1;
    (null != e.query && (b = e.query),
        (y = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: o } = e;
            return {
                width: t,
                height: n,
                src: N(r),
                gifSrc: N(i),
                url: a,
                id: o,
                format: m
            };
        })));
}
function R(e) {
    let { query: t } = e;
    if (null == t) return !1;
    ((b = t), (y = []));
}
function P(e) {
    let t = e.trendingCategories;
    O = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: s.wI2.TRENDING_GIFS,
                      name: l.intl.string(l.t.H6zNFx),
                      src: N(e.trendingGIFPreview.src),
                      format: m
                  }
              ]
            : []),
        ...t.map((e) =>
            _(u({}, e), {
                src: N(e.src),
                type: s.wI2.TRENDING_CATEGORY,
                format: m
            })
        )
    ];
}
function w(e) {
    let { items: t } = e;
    v = t;
}
function D(e) {
    let { items: t } = e;
    I = t;
}
class L extends (r = i.ZP.Store) {
    getAnalyticsID() {
        return g;
    }
    getQuery() {
        return E;
    }
    getResultQuery() {
        return b;
    }
    getResultItems() {
        return y;
    }
    getTrendingCategories() {
        return O;
    }
    getSelectedFormat() {
        return h;
    }
    getSuggestions() {
        return v;
    }
    getTrendingSearchTerms() {
        return I;
    }
}
c(L, 'displayName', 'GIFPickerViewStore');
let x = new L(o.Z, {
    GIF_PICKER_INITIALIZE: T,
    GIF_PICKER_QUERY: S,
    GIF_PICKER_QUERY_SUCCESS: C,
    GIF_PICKER_QUERY_FAILURE: R,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: P,
    GIF_PICKER_SUGGESTIONS_SUCCESS: w,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: D
});
