var i,
    a = r(757143);
var o = r(47120);
var s = r(442837),
    l = r(377108),
    u = r(552075),
    c = r(570140),
    d = r(981631),
    f = r(388032);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    _ = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    m = (() => h.MP4)(),
    g = null,
    E = '',
    v = '',
    y = [],
    b = [],
    I = m,
    T = [],
    S = [];
function A(e) {
    g = e.analyticsID;
}
function C(e) {
    '' === (E = e.query) && ((v = ''), (y = []), (T = []));
}
function N(e) {
    switch (e) {
        case _.FIXED_HEIGHT_MP4:
        case _.FIXED_HEIGHT_SMALL_MP4:
        case _.FIXED_WIDTH_MP4:
        case _.FIXED_WIDTH_SMALL_MP4:
        case _.DOWNSIZED_SMALL_MP4:
        case _.ORIGINAL_MP4:
        case h.MP4:
        case h.TINYMP4:
        case h.NANOMP4:
        case h.WEBM:
        case h.TINYWEBM:
        case h.NANOWEBM:
            return !0;
        default:
            return !1;
    }
}
function R(e) {
    return e.replace(/^https?:/, '');
}
function O(e) {
    if (null != e.query && E === v) return !1;
    null != e.query && (v = e.query),
        (y = e.items.map((e) => {
            let { width: n, height: r, src: i, gif_src: a, url: o, id: s } = e;
            return {
                width: n,
                height: r,
                src: R(i),
                gifSrc: R(a),
                url: o,
                id: s,
                format: N(I) ? l.EO.VIDEO : l.EO.IMAGE
            };
        }));
}
function D(e) {
    let { query: n } = e;
    if (null == n) return !1;
    (v = n), (y = []);
}
function x(e) {
    let n = e.trendingCategories;
    b = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: d.wI2.TRENDING_GIFS,
                      icon: u.I,
                      name: f.intl.string(f.t.H6zNFx),
                      src: R(e.trendingGIFPreview.src),
                      format: l.EO.IMAGE
                  }
              ]
            : []),
        ...n.map((e) => ({
            ...e,
            src: R(e.src),
            type: d.wI2.TRENDING_CATEGORY,
            format: l.EO.VIDEO
        }))
    ];
}
function L(e) {
    let { items: n } = e;
    T = n;
}
function w(e) {
    let { items: n } = e;
    S = n;
}
class P extends (i = s.ZP.Store) {
    getAnalyticsID() {
        return g;
    }
    getQuery() {
        return E;
    }
    getResultQuery() {
        return v;
    }
    getResultItems() {
        return y;
    }
    getTrendingCategories() {
        return b;
    }
    getSelectedFormat() {
        return I;
    }
    getSuggestions() {
        return T;
    }
    getTrendingSearchTerms() {
        return S;
    }
}
p(P, 'displayName', 'GIFPickerViewStore'),
    (n.Z = new P(c.Z, {
        GIF_PICKER_INITIALIZE: A,
        GIF_PICKER_QUERY: C,
        GIF_PICKER_QUERY_SUCCESS: O,
        GIF_PICKER_QUERY_FAILURE: D,
        GIF_PICKER_TRENDING_FETCH_SUCCESS: x,
        GIF_PICKER_SUGGESTIONS_SUCCESS: L,
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: w
    }));
