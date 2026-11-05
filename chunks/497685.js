var n = r(435558),
    i = r.n(n),
    l = r(115560),
    o = r(620632),
    a = r(803805),
    s = r(73153),
    u = r(149468);
r(336807);
var c = r(679164),
    d = r(773669),
    _ = r(594061),
    f = r(821102),
    E = r(129230),
    I = r(11187),
    h = r(998218),
    S = r(157559),
    m = r(652215),
    g = r(355097),
    p = r(792996);
let R = /-/g;
function F(t) {
    let e = null != t ? { [t]: 1 } : {};
    u.Ay.trackWithMetadata(m.HAw.SEARCH_STARTED, {
        search_type: m.I4_.GIF,
        load_id: f.A.getAnalyticsID(),
        num_modifiers: Object.keys(e).length,
        modifiers: e,
        gif_provider: "klipy",
    });
}
function G(t, e) {
    let { startTime: r, ...n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = { offset: 0, limit: null, totalResults: t.length },
        l = (0, I.QL)(f.A.getAnalyticsID(), e, { ...i, ...n, results: t.length }),
        o = null == r ? {} : { load_duration_ms: Date.now() - r };
    u.Ay.trackWithMetadata(m.HAw.SEARCH_RESULT_VIEWED, { ...l, ...o, gif_provider: "klipy" });
}
function y(t, e, r) {
    let n = Date.now();
    (F(e),
        o.Bo.get({
            url: m.Rsh.GIFS_SEARCH,
            query: { q: t, media_format: f.A.getSelectedFormat(), locale: d.default.locale, limit: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (i) => {
                let l = i.body;
                (G(l, e, { startTime: n, limit: r }),
                    s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: t, items: l }));
            },
            () => s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: t }),
        ));
}
let C = i().debounce(y, 250);
function A() {
    s.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function T(t) {
    let e = h.A.toURLSafe(t);
    return null == e ? t : c.i(e) ? c.w6(e).toString() : t;
}
function w(t) {
    let e = h.A.toURLSafe(t.src);
    return null != e && (c.BX(e) || c.i(e));
}
let D = /\.(webp|avif|gif)(\?|$)/i;
r.d(
    e,
    {},
    {
        $P: function (t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = arguments.length > 3 ? arguments[3] : void 0;
            "" === t ? A() : (s.h.dispatch({ type: "GIF_PICKER_QUERY", query: t }), r ? y(t, e, n) : C(t, e, n));
        },
        H9: G,
        Qh: F,
        Se: A,
        Tr: function (t) {
            _.bW.updateAsync(
                "favoriteGifs",
                (e) => {
                    (t in e.gifs ? delete e.gifs[t] : delete e.gifs[T(t)],
                        E.default.track(m.HAw.GIF_UNFAVORITED, { total_num_favorited: i().size(e.gifs) }));
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        V$: function () {
            let t = (0, l.A)().replace(R, "");
            (u.Ay.trackWithMetadata(m.HAw.SEARCH_OPENED, { search_type: m.I4_.GIF, load_id: t }),
                s.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: t }));
        },
        Z4: function (t) {
            let e = Date.now();
            (F(m.dD.TRENDING_GIFS),
                o.Bo.get({
                    url: m.Rsh.GIFS_TRENDING_GIFS,
                    query: { media_format: f.A.getSelectedFormat(), locale: d.default.locale, limit: t },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (r) => {
                        let { body: n } = r;
                        (G(n, m.dD.TRENDING_GIFS, { startTime: e, limit: t }),
                            s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: n }));
                    },
                    () => {
                        s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
                    },
                ));
        },
        _E: function (t) {
            "" !== t &&
                null != t &&
                o.Bo.get({
                    url: m.Rsh.GIFS_SUGGEST,
                    query: { q: t, limit: 5, locale: d.default.locale },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then((e) => {
                    let r = e.body;
                    s.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: t, items: r });
                });
        },
        g4: function (t) {
            let { type: e, index: r, offset: n, limit: i, results: l, totalResults: a, query: s, gifId: c } = t,
                d = (0, I.QL)(f.A.getAnalyticsID(), e, { offset: n, limit: i, results: l, totalResults: a });
            (u.Ay.trackWithMetadata(m.HAw.SEARCH_RESULT_SELECTED, {
                ...d,
                index_num: r,
                source_object: "GIF Picker",
                query: s,
            }),
                null != c &&
                    o.Bo.post({
                        url: m.Rsh.GIFS_SELECT,
                        body: { id: c, q: s },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    }));
        },
        k8: function () {
            o.Bo.get({
                url: m.Rsh.GIFS_TRENDING,
                query: { locale: d.default.locale, media_format: f.A.getSelectedFormat() },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((t) => {
                let { body: e } = t,
                    { categories: r, gifs: n } = e;
                s.h.dispatch({
                    type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                    trendingCategories: r,
                    trendingGIFPreview: n[0],
                });
            });
        },
        wg: function (t) {
            _.bW.updateAsync(
                "favoriteGifs",
                (e) => {
                    var r;
                    let n = i().max(Object.values(e.gifs).map((t) => t.order)) ?? 0,
                        l =
                            (/\.(mp4|webm)(\?|$)/i.test(t.src) &&
                                null != t.gifSrc &&
                                "" !== t.gifSrc &&
                                t.gifSrc !== t.src) ||
                            (w(t) && null != t.gifSrc)
                                ? t.gifSrc
                                : t.src,
                        o = (r =
                            w(t) && D.test(l)
                                ? (function (t) {
                                      let e = h.A.toURLSafe(t);
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
                        s = D.test(o) ? a.TL.IMAGE : t.format;
                    if (
                        ((e.gifs[T(t.url)] = { ...t, src: o, format: s, order: n + 1 }),
                        a.uz.toBinary(e).length > 762880)
                    )
                        return (S.A.show({ title: p.intl.string(p.t["+XYXtZ"]), body: p.intl.string(p.t.YSDH9n) }), !1);
                    let u = i().size(e.gifs);
                    (u > 2 && (e.hideTooltip = !0), E.default.track(m.HAw.GIF_FAVORITED, { total_num_favorited: u }));
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        xo: T,
    },
);
