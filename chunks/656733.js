n.d(t, { Z: () => L }), n(757143), n(47120);
var i,
    r = n(442837),
    a = n(377108),
    s = n(570140),
    o = n(981631),
    l = n(388032);
function u(e, t, n) {
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
let c = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    d = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    f = c.MP4,
    _ = null,
    p = '',
    h = '',
    m = [],
    g = [],
    E = f,
    v = [],
    y = [];
function I(e) {
    _ = e.analyticsID;
}
function T(e) {
    '' === (p = e.query) && ((h = ''), (m = []), (v = []));
}
function b(e) {
    switch (e) {
        case d.FIXED_HEIGHT_MP4:
        case d.FIXED_HEIGHT_SMALL_MP4:
        case d.FIXED_WIDTH_MP4:
        case d.FIXED_WIDTH_SMALL_MP4:
        case d.DOWNSIZED_SMALL_MP4:
        case d.ORIGINAL_MP4:
        case c.MP4:
        case c.TINYMP4:
        case c.NANOMP4:
        case c.WEBM:
        case c.TINYWEBM:
        case c.NANOWEBM:
            return !0;
        default:
            return !1;
    }
}
function S(e) {
    return e.replace(/^https?:/, '');
}
function A(e) {
    if (null != e.query && p === h) return !1;
    null != e.query && (h = e.query),
        (m = e.items.map((e) => {
            let { width: t, height: n, src: i, gif_src: r, url: s, id: o } = e;
            return {
                width: t,
                height: n,
                src: S(i),
                gifSrc: S(r),
                url: s,
                id: o,
                format: b(E) ? a.EO.VIDEO : a.EO.IMAGE
            };
        }));
}
function N(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (h = t), (m = []);
}
function C(e) {
    let t = e.trendingCategories;
    g = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: o.wI2.TRENDING_GIFS,
                      name: l.intl.string(l.t.H6zNFx),
                      src: S(e.trendingGIFPreview.src),
                      format: a.EO.IMAGE
                  }
              ]
            : []),
        ...t.map((e) => ({
            ...e,
            src: S(e.src),
            type: o.wI2.TRENDING_CATEGORY,
            format: a.EO.VIDEO
        }))
    ];
}
function R(e) {
    let { items: t } = e;
    v = t;
}
function O(e) {
    let { items: t } = e;
    y = t;
}
class D extends (i = r.ZP.Store) {
    getAnalyticsID() {
        return _;
    }
    getQuery() {
        return p;
    }
    getResultQuery() {
        return h;
    }
    getResultItems() {
        return m;
    }
    getTrendingCategories() {
        return g;
    }
    getSelectedFormat() {
        return E;
    }
    getSuggestions() {
        return v;
    }
    getTrendingSearchTerms() {
        return y;
    }
}
u(D, 'displayName', 'GIFPickerViewStore');
let L = new D(s.Z, {
    GIF_PICKER_INITIALIZE: I,
    GIF_PICKER_QUERY: T,
    GIF_PICKER_QUERY_SUCCESS: A,
    GIF_PICKER_QUERY_FAILURE: N,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: C,
    GIF_PICKER_SUGGESTIONS_SUCCESS: R,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: O
});
