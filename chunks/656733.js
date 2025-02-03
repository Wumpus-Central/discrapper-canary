n.d(t, { Z: () => L }), n(757143), n(47120);
var i,
    r = n(442837),
    a = n(377108),
    s = n(552075),
    o = n(570140),
    l = n(981631),
    u = n(388032);
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
let d = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    f = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    _ = d.MP4,
    p = null,
    h = '',
    m = '',
    g = [],
    E = [],
    v = _,
    y = [],
    I = [];
function b(e) {
    p = e.analyticsID;
}
function T(e) {
    '' === (h = e.query) && ((m = ''), (g = []), (y = []));
}
function S(e) {
    switch (e) {
        case f.FIXED_HEIGHT_MP4:
        case f.FIXED_HEIGHT_SMALL_MP4:
        case f.FIXED_WIDTH_MP4:
        case f.FIXED_WIDTH_SMALL_MP4:
        case f.DOWNSIZED_SMALL_MP4:
        case f.ORIGINAL_MP4:
        case d.MP4:
        case d.TINYMP4:
        case d.NANOMP4:
        case d.WEBM:
        case d.TINYWEBM:
        case d.NANOWEBM:
            return !0;
        default:
            return !1;
    }
}
function A(e) {
    return e.replace(/^https?:/, '');
}
function N(e) {
    if (null != e.query && h === m) return !1;
    null != e.query && (m = e.query),
        (g = e.items.map((e) => {
            let { width: t, height: n, src: i, gif_src: r, url: s, id: o } = e;
            return {
                width: t,
                height: n,
                src: A(i),
                gifSrc: A(r),
                url: s,
                id: o,
                format: S(v) ? a.EO.VIDEO : a.EO.IMAGE
            };
        }));
}
function C(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (m = t), (g = []);
}
function R(e) {
    let t = e.trendingCategories;
    E = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: l.wI2.TRENDING_GIFS,
                      icon: s.I,
                      name: u.intl.string(u.t.H6zNFx),
                      src: A(e.trendingGIFPreview.src),
                      format: a.EO.IMAGE
                  }
              ]
            : []),
        ...t.map((e) => ({
            ...e,
            src: A(e.src),
            type: l.wI2.TRENDING_CATEGORY,
            format: a.EO.VIDEO
        }))
    ];
}
function O(e) {
    let { items: t } = e;
    y = t;
}
function D(e) {
    let { items: t } = e;
    I = t;
}
class x extends (i = r.ZP.Store) {
    getAnalyticsID() {
        return p;
    }
    getQuery() {
        return h;
    }
    getResultQuery() {
        return m;
    }
    getResultItems() {
        return g;
    }
    getTrendingCategories() {
        return E;
    }
    getSelectedFormat() {
        return v;
    }
    getSuggestions() {
        return y;
    }
    getTrendingSearchTerms() {
        return I;
    }
}
c(x, 'displayName', 'GIFPickerViewStore');
let L = new x(o.Z, {
    GIF_PICKER_INITIALIZE: b,
    GIF_PICKER_QUERY: T,
    GIF_PICKER_QUERY_SUCCESS: N,
    GIF_PICKER_QUERY_FAILURE: C,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: R,
    GIF_PICKER_SUGGESTIONS_SUCCESS: O,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: D
});
