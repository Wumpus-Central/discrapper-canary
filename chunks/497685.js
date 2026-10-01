r.d(e, {
    $P: () => T,
    H9: () => y,
    Qh: () => G,
    Se: () => D,
    Tr: () => Q,
    V$: () => v,
    Z4: () => P,
    _E: () => w,
    g4: () => N,
    k8: () => U,
    wg: () => K,
    xo: () => b,
});
var n = r(435558),
    i = r.n(n),
    l = r(132500),
    o = r(636537),
    a = r(803805),
    s = r(73153),
    u = r(95561),
    c = r(336807),
    d = r(679164),
    _ = r(773669),
    f = r(594061),
    E = r(821102),
    I = r(174459),
    h = r(11187),
    S = r(998218),
    m = r(157559),
    g = r(652215),
    p = r(355097),
    R = r(375708);
let F = /-/g;
function G(t) {
    let e = null != t ? { [t]: 1 } : {};
    u.Ay.trackWithMetadata(g.HAw.SEARCH_STARTED, {
        search_type: g.I4_.GIF,
        load_id: E.A.getAnalyticsID(),
        num_modifiers: Object.keys(e).length,
        modifiers: e,
        gif_provider: c.jQ,
    });
}
function y(t, e) {
    let { startTime: r, ...n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = { offset: 0, limit: null, totalResults: t.length },
        l = (0, h.QL)(E.A.getAnalyticsID(), e, { ...i, ...n, results: t.length }),
        o = null == r ? {} : { load_duration_ms: Date.now() - r };
    u.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_VIEWED, { ...l, ...o, gif_provider: c.jQ });
}
function C(t, e, r) {
    let n = Date.now();
    (G(e),
        o.Bo.get({
            url: g.Rsh.GIFS_SEARCH,
            query: { q: t, media_format: E.A.getSelectedFormat(), locale: _.default.locale, limit: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (i) => {
                let l = i.body;
                (y(l, e, { startTime: n, limit: r }),
                    s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: t, items: l }));
            },
            () => s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: t }),
        ));
}
let A = i().debounce(C, 250);
function T(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0;
    "" === t ? D() : (s.h.dispatch({ type: "GIF_PICKER_QUERY", query: t }), r ? C(t, e, n) : A(t, e, n));
}
function w(t) {
    "" !== t &&
        null != t &&
        o.Bo.get({
            url: g.Rsh.GIFS_SUGGEST,
            query: { q: t, limit: 5, locale: _.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((e) => {
            let r = e.body;
            s.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: t, items: r });
        });
}
function D() {
    s.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function N(t) {
    let { type: e, index: r, offset: n, limit: i, results: l, totalResults: a, query: s, gifId: c } = t,
        d = (0, h.QL)(E.A.getAnalyticsID(), e, { offset: n, limit: i, results: l, totalResults: a });
    (u.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
        ...d,
        index_num: r,
        source_object: "GIF Picker",
        query: s,
    }),
        null != c &&
            o.Bo.post({ url: g.Rsh.GIFS_SELECT, body: { id: c, q: s }, oldFormErrors: !0, rejectWithError: !0 }));
}
function v() {
    let t = (0, l.A)().replace(F, "");
    (u.Ay.trackWithMetadata(g.HAw.SEARCH_OPENED, { search_type: g.I4_.GIF, load_id: t }),
        s.h.wait(() => {
            s.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: t });
        }));
}
function U() {
    o.Bo.get({
        url: g.Rsh.GIFS_TRENDING,
        query: { locale: _.default.locale, media_format: E.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((t) => {
        let { body: e } = t,
            { categories: r, gifs: n } = e;
        s.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: r, trendingGIFPreview: n[0] });
    });
}
function P(t) {
    let e = Date.now();
    (G(g.dD.TRENDING_GIFS),
        o.Bo.get({
            url: g.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: E.A.getSelectedFormat(), locale: _.default.locale, limit: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let { body: n } = r;
                (y(n, g.dD.TRENDING_GIFS, { startTime: e, limit: t }),
                    s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: n }));
            },
            () => {
                s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        ));
}
function b(t) {
    let e = S.A.toURLSafe(t);
    return null == e ? t : d.i(e) ? d.w6(e).toString() : t;
}
function L(t) {
    let e = S.A.toURLSafe(t.src);
    return null != e && (d.BX(e) || d.i(e));
}
let k = /\.(webp|avif|gif)(\?|$)/i;
function K(t) {
    f.bW.updateAsync(
        "favoriteGifs",
        (e) => {
            var r;
            let n = i().max(Object.values(e.gifs).map((t) => t.order)) ?? 0,
                l =
                    (/\.(mp4|webm)(\?|$)/i.test(t.src) && null != t.gifSrc && "" !== t.gifSrc && t.gifSrc !== t.src) ||
                    (L(t) && null != t.gifSrc)
                        ? t.gifSrc
                        : t.src,
                o = (r =
                    L(t) && k.test(l)
                        ? (function (t) {
                              let e = S.A.toURLSafe(t);
                              if (null == e) return t;
                              let r = e.pathname.toLowerCase(),
                                  n = r.endsWith(".webp"),
                                  i = r.endsWith(".avif"),
                                  l = r.endsWith(".gif");
                              return n || i || l
                                  ? ((i || l) && e.searchParams.set("format", "webp"),
                                    e.searchParams.set("animated", "true"),
                                    e.toString())
                                  : t;
                          })(l)
                        : l).startsWith("//")
                    ? `https:${r}`
                    : r,
                s = k.test(o) ? a.TL.IMAGE : t.format;
            if (((e.gifs[b(t.url)] = { ...t, src: o, format: s, order: n + 1 }), a.uz.toBinary(e).length > 762880))
                return (m.A.show({ title: R.intl.string(R.t["+XYXtZ"]), body: R.intl.string(R.t.YSDH9n) }), !1);
            let u = i().size(e.gifs);
            (u > 2 && (e.hideTooltip = !0), I.default.track(g.HAw.GIF_FAVORITED, { total_num_favorited: u }));
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function Q(t) {
    f.bW.updateAsync(
        "favoriteGifs",
        (e) => {
            (t in e.gifs ? delete e.gifs[t] : delete e.gifs[b(t)],
                I.default.track(g.HAw.GIF_UNFAVORITED, { total_num_favorited: i().size(e.gifs) }));
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
