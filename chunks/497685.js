r.d(t, {
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
    u = r(666860),
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
    R = r(660183);
let F = /-/g;
function G(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.Ay.trackWithMetadata(g.HAw.SEARCH_STARTED, {
        search_type: g.I4_.GIF,
        load_id: E.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: c.jQ,
    });
}
function y(e, t) {
    let { startTime: r, ...n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = { offset: 0, limit: null, totalResults: e.length },
        l = (0, h.QL)(E.A.getAnalyticsID(), t, { ...i, ...n, results: e.length }),
        o = null == r ? {} : { load_duration_ms: Date.now() - r };
    u.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_VIEWED, { ...l, ...o, gif_provider: c.jQ });
}
function C(e, t, r) {
    let n = Date.now();
    (G(t),
        o.Bo.get({
            url: g.Rsh.GIFS_SEARCH,
            query: { q: e, media_format: E.A.getSelectedFormat(), locale: _.default.locale, limit: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (i) => {
                let l = i.body;
                (y(l, t, { startTime: n, limit: r }),
                    s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: l }));
            },
            () => s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        ));
}
let A = i().debounce(C, 250);
function T(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? D() : (s.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), r ? C(e, t, n) : A(e, t, n));
}
function w(e) {
    "" !== e &&
        null != e &&
        o.Bo.get({
            url: g.Rsh.GIFS_SUGGEST,
            query: { q: e, limit: 5, locale: _.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let r = t.body;
            s.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: r });
        });
}
function D() {
    s.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function N(e) {
    let { type: t, index: r, offset: n, limit: i, results: l, totalResults: a, query: s, gifId: c } = e,
        d = (0, h.QL)(E.A.getAnalyticsID(), t, { offset: n, limit: i, results: l, totalResults: a });
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
    let e = (0, l.A)().replace(F, "");
    (u.Ay.trackWithMetadata(g.HAw.SEARCH_OPENED, { search_type: g.I4_.GIF, load_id: e }),
        s.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e }));
}
function U() {
    o.Bo.get({
        url: g.Rsh.GIFS_TRENDING,
        query: { locale: _.default.locale, media_format: E.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: r, gifs: n } = t;
        s.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: r, trendingGIFPreview: n[0] });
    });
}
function P(e) {
    let t = Date.now();
    (G(g.dD.TRENDING_GIFS),
        o.Bo.get({
            url: g.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: E.A.getSelectedFormat(), locale: _.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let { body: n } = r;
                (y(n, g.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: n }));
            },
            () => {
                s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        ));
}
function b(e) {
    let t = S.A.toURLSafe(e);
    return null == t ? e : d.i(t) ? d.w6(t).toString() : e;
}
function L(e) {
    let t = S.A.toURLSafe(e.src);
    return null != t && (d.BX(t) || d.i(t));
}
let k = /\.(webp|avif|gif)(\?|$)/i;
function K(e) {
    f.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            var r;
            let n = i().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                l =
                    (/\.(mp4|webm)(\?|$)/i.test(e.src) && null != e.gifSrc && "" !== e.gifSrc && e.gifSrc !== e.src) ||
                    (L(e) && null != e.gifSrc)
                        ? e.gifSrc
                        : e.src,
                o = (r =
                    L(e) && k.test(l)
                        ? (function (e) {
                              let t = S.A.toURLSafe(e);
                              if (null == t) return e;
                              let r = t.pathname.toLowerCase(),
                                  n = r.endsWith(".webp"),
                                  i = r.endsWith(".avif"),
                                  l = r.endsWith(".gif");
                              return n || i || l
                                  ? ((i || l) && t.searchParams.set("format", "webp"),
                                    t.searchParams.set("animated", "true"),
                                    t.toString())
                                  : e;
                          })(l)
                        : l).startsWith("//")
                    ? `https:${r}`
                    : r,
                s = k.test(o) ? a.TL.IMAGE : e.format;
            if (((t.gifs[b(e.url)] = { ...e, src: o, format: s, order: n + 1 }), a.uz.toBinary(t).length > 762880))
                return (m.A.show({ title: R.intl.string(R.t["+XYXtZ"]), body: R.intl.string(R.t.YSDH9n) }), !1);
            let u = i().size(t.gifs);
            (u > 2 && (t.hideTooltip = !0), I.default.track(g.HAw.GIF_FAVORITED, { total_num_favorited: u }));
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function Q(e) {
    f.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            (e in t.gifs ? delete t.gifs[e] : delete t.gifs[b(e)],
                I.default.track(g.HAw.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) }));
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
