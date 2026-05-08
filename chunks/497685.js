"use strict";
n.d(t, {
    $P: () => D,
    H9: () => O,
    Qh: () => v,
    Se: () => w,
    Tr: () => V,
    V$: () => P,
    Z4: () => U,
    _E: () => L,
    g4: () => M,
    k8: () => x,
    wg: () => F,
    xo: () => k,
});
var i = n(735438),
    r = n.n(i),
    s = n(835245),
    a = n(636537),
    o = n(803805),
    l = n(228366),
    u = n(95561),
    c = n(703244),
    d = n(202803),
    _ = n(773669),
    f = n(594061),
    h = n(821102),
    p = n(174459),
    E = n(11187),
    m = n(998218),
    g = n(157559),
    A = n(652215),
    I = n(355097),
    T = n(375708);
let S = /-/g,
    N = ".webp",
    y = ".avif",
    C = ".gif";
function v(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.Ay.trackWithMetadata(A.HAw.SEARCH_STARTED, {
        search_type: A.I4_.GIF,
        load_id: h.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, c.cf)(),
    });
}
function O(e, t) {
    let { startTime: n, ...i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = { offset: 0, limit: null, totalResults: e.length },
        s = (0, E.QL)(h.A.getAnalyticsID(), t, { ...r, ...i, results: e.length }),
        a = null == n ? {} : { load_duration_ms: Date.now() - n };
    u.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_VIEWED, { ...s, ...a, gif_provider: (0, c.cf)() });
}
function R(e, t, n) {
    let i = Date.now();
    v(t),
        a.Bo.get({
            url: A.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: h.A.getSelectedFormat(),
                provider: (0, c.cf)(),
                locale: _.default.locale,
                limit: n,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let s = r.body;
                O(s, t, { startTime: i, limit: n }),
                    l.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: s });
            },
            () => l.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let b = r().debounce(R, 250);
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? w() : (l.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), n ? R(e, t, i) : b(e, t, i));
}
function L(e) {
    "" !== e &&
        null != e &&
        a.Bo.get({
            url: A.Rsh.GIFS_SUGGEST,
            query: { q: e, provider: (0, c.cf)(), limit: 5, locale: _.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let n = t.body;
            l.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: n });
        });
}
function w() {
    l.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function M(e) {
    let { type: t, index: n, offset: i, limit: r, results: s, totalResults: o, query: l, gifId: d } = e,
        _ = (0, E.QL)(h.A.getAnalyticsID(), t, { offset: i, limit: r, results: s, totalResults: o });
    if (
        (u.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_SELECTED, {
            ..._,
            index_num: n,
            source_object: "GIF Picker",
            query: l,
        }),
        null != d)
    ) {
        let e = (0, c.cf)();
        a.Bo.post({
            url: A.Rsh.GIFS_SELECT,
            body: { id: d, q: l, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}
function P() {
    let e = (0, s.A)().replace(S, "");
    u.Ay.trackWithMetadata(A.HAw.SEARCH_OPENED, { search_type: A.I4_.GIF, load_id: e }),
        l.h.wait(() => {
            l.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function x() {
    a.Bo.get({
        url: A.Rsh.GIFS_TRENDING,
        query: { provider: (0, c.cf)(), locale: _.default.locale, media_format: h.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: n, gifs: i } = t;
        l.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: n, trendingGIFPreview: i[0] });
    });
}
function U(e) {
    let t = Date.now();
    v(A.dD.TRENDING_GIFS),
        a.Bo.get({
            url: A.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: h.A.getSelectedFormat(), provider: (0, c.cf)(), locale: _.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let { body: i } = n;
                O(i, A.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    l.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: i });
            },
            () => {
                l.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function k(e) {
    let t = m.A.toURLSafe(e);
    return null == t ? e : (0, d.fr)(t) ? (0, d.w6)(t).toString() : e;
}
function G(e) {
    let t = m.A.toURLSafe(e.src);
    return null != t && ((0, d.BX)(t) || (0, d.fr)(t));
}
function F(e) {
    f.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            let n = r().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                i =
                    (/\.(mp4|webm)(\?|$)/i.test(e.src) && null != e.gifSrc && "" !== e.gifSrc && e.gifSrc !== e.src) ||
                    (G(e) && null != e.gifSrc)
                        ? e.gifSrc
                        : e.src,
                s =
                    G(e) &&
                    (function (e) {
                        let t = m.A.toURLSafe(e);
                        if (null == t) return !1;
                        let n = t.pathname.toLowerCase();
                        return n.endsWith(N) || n.endsWith(y) || n.endsWith(C);
                    })(i),
                a = s
                    ? (function (e) {
                          let t = m.A.toURLSafe(e);
                          if (null == t) return e;
                          let n = t.pathname.toLowerCase(),
                              i = n.endsWith(N),
                              r = n.endsWith(y),
                              s = n.endsWith(C);
                          return i || r || s
                              ? ((r || s) && t.searchParams.set("format", "webp"),
                                t.searchParams.set("animated", "true"),
                                t.toString())
                              : e;
                      })(i)
                    : i,
                l = s ? o.TL.IMAGE : e.format;
            if (((t.gifs[k(e.url)] = { ...e, src: a, format: l, order: n + 1 }), o.uz.toBinary(t).length > 762880))
                return g.A.show({ title: T.intl.string(T.t["+XYXtZ"]), body: T.intl.string(T.t.YSDH9n) }), !1;
            let u = r().size(t.gifs);
            u > 2 && (t.hideTooltip = !0), p.default.track(A.HAw.GIF_FAVORITED, { total_num_favorited: u });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
function V(e) {
    f.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[k(e)],
                p.default.track(A.HAw.GIF_UNFAVORITED, { total_num_favorited: r().size(t.gifs) });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
