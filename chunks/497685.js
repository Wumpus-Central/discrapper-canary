r.d(t, {
    $P: () => x,
    H9: () => C,
    Qh: () => v,
    Se: () => T,
    Tr: () => M,
    V$: () => G,
    Z4: () => j,
    _E: () => F,
    g4: () => N,
    k8: () => D,
    wg: () => b,
    xo: () => P,
});
var n = r(435558),
    s = r.n(n),
    l = r(132500),
    i = r(636537),
    a = r(803805),
    o = r(228366),
    u = r(95561),
    c = r(336807),
    d = r(679164),
    h = r(773669),
    m = r(594061),
    p = r(821102),
    g = r(174459),
    f = r(11187),
    I = r(998218),
    R = r(157559),
    E = r(652215),
    _ = r(355097),
    y = r(375708);
let S = /-/g;
function v(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.Ay.trackWithMetadata(E.HAw.SEARCH_STARTED, {
        search_type: E.I4_.GIF,
        load_id: p.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: c.jQ,
    });
}
function C(e, t) {
    let { startTime: r, ...n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = { offset: 0, limit: null, totalResults: e.length },
        l = (0, f.QL)(p.A.getAnalyticsID(), t, { ...s, ...n, results: e.length }),
        i = null == r ? {} : { load_duration_ms: Date.now() - r };
    u.Ay.trackWithMetadata(E.HAw.SEARCH_RESULT_VIEWED, { ...l, ...i, gif_provider: c.jQ });
}
function A(e, t, r) {
    let n = Date.now();
    v(t),
        i.Bo.get({
            url: E.Rsh.GIFS_SEARCH,
            query: { q: e, media_format: p.A.getSelectedFormat(), locale: h.default.locale, limit: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (s) => {
                let l = s.body;
                C(l, t, { startTime: n, limit: r }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: l });
            },
            () => o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let w = s().debounce(A, 250);
function x(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? T() : (o.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), r ? A(e, t, n) : w(e, t, n));
}
function F(e) {
    "" !== e &&
        null != e &&
        i.Bo.get({
            url: E.Rsh.GIFS_SUGGEST,
            query: { q: e, limit: 5, locale: h.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let r = t.body;
            o.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: r });
        });
}
function T() {
    o.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function N(e) {
    let { type: t, index: r, offset: n, limit: s, results: l, totalResults: a, query: o, gifId: c } = e,
        d = (0, f.QL)(p.A.getAnalyticsID(), t, { offset: n, limit: s, results: l, totalResults: a });
    u.Ay.trackWithMetadata(E.HAw.SEARCH_RESULT_SELECTED, { ...d, index_num: r, source_object: "GIF Picker", query: o }),
        null != c &&
            i.Bo.post({ url: E.Rsh.GIFS_SELECT, body: { id: c, q: o }, oldFormErrors: !0, rejectWithError: !0 });
}
function G() {
    let e = (0, l.A)().replace(S, "");
    u.Ay.trackWithMetadata(E.HAw.SEARCH_OPENED, { search_type: E.I4_.GIF, load_id: e }),
        o.h.wait(() => {
            o.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function D() {
    i.Bo.get({
        url: E.Rsh.GIFS_TRENDING,
        query: { locale: h.default.locale, media_format: p.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: r, gifs: n } = t;
        o.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: r, trendingGIFPreview: n[0] });
    });
}
function j(e) {
    let t = Date.now();
    v(E.dD.TRENDING_GIFS),
        i.Bo.get({
            url: E.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: p.A.getSelectedFormat(), locale: h.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let { body: n } = r;
                C(n, E.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: n });
            },
            () => {
                o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function P(e) {
    let t = I.A.toURLSafe(e);
    return null == t ? e : d.i(t) ? d.w6(t).toString() : e;
}
function k(e) {
    let t = I.A.toURLSafe(e.src);
    return null != t && (d.BX(t) || d.i(t));
}
let L = /\.(webp|avif|gif)(\?|$)/i;
function b(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            var r;
            let n = s().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                l =
                    (/\.(mp4|webm)(\?|$)/i.test(e.src) && null != e.gifSrc && "" !== e.gifSrc && e.gifSrc !== e.src) ||
                    (k(e) && null != e.gifSrc)
                        ? e.gifSrc
                        : e.src,
                i = (r =
                    k(e) && L.test(l)
                        ? (function (e) {
                              let t = I.A.toURLSafe(e);
                              if (null == t) return e;
                              let r = t.pathname.toLowerCase(),
                                  n = r.endsWith(".webp"),
                                  s = r.endsWith(".avif"),
                                  l = r.endsWith(".gif");
                              return n || s || l
                                  ? ((s || l) && t.searchParams.set("format", "webp"),
                                    t.searchParams.set("animated", "true"),
                                    t.toString())
                                  : e;
                          })(l)
                        : l).startsWith("//")
                    ? `https:${r}`
                    : r,
                o = L.test(i) ? a.TL.IMAGE : e.format;
            if (((t.gifs[P(e.url)] = { ...e, src: i, format: o, order: n + 1 }), a.uz.toBinary(t).length > 762880))
                return R.A.show({ title: y.intl.string(y.t["+XYXtZ"]), body: y.intl.string(y.t.YSDH9n) }), !1;
            let u = s().size(t.gifs);
            u > 2 && (t.hideTooltip = !0), g.default.track(E.HAw.GIF_FAVORITED, { total_num_favorited: u });
        },
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function M(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[P(e)],
                g.default.track(E.HAw.GIF_UNFAVORITED, { total_num_favorited: s().size(t.gifs) });
        },
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
