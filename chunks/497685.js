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
function y(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.Ay.trackWithMetadata(m.HAw.SEARCH_STARTED, {
        search_type: m.I4_.GIF,
        load_id: f.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: "klipy",
    });
}
function F(e, t) {
    let { startTime: r, ...n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = { offset: 0, limit: null, totalResults: e.length },
        l = (0, I.QL)(f.A.getAnalyticsID(), t, { ...i, ...n, results: e.length }),
        o = null == r ? {} : { load_duration_ms: Date.now() - r };
    u.Ay.trackWithMetadata(m.HAw.SEARCH_RESULT_VIEWED, { ...l, ...o, gif_provider: "klipy" });
}
function G(e, t, r) {
    let n = Date.now();
    (y(t),
        o.Bo.get({
            url: m.Rsh.GIFS_SEARCH,
            query: { q: e, media_format: f.A.getSelectedFormat(), locale: d.default.locale, limit: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (i) => {
                let l = i.body;
                (F(l, t, { startTime: n, limit: r }),
                    s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: l }));
            },
            () => s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        ));
}
let C = i().debounce(G, 250);
function A() {
    s.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function T(e) {
    let t = h.A.toURLSafe(e);
    return null == t ? e : c.i(t) ? c.w6(t).toString() : e;
}
function w(e) {
    let t = h.A.toURLSafe(e.src);
    return null != t && (c.BX(t) || c.i(t));
}
let D = /\.(webp|avif|gif)(\?|$)/i;
r.d(
    t,
    {},
    {
        $P: function (e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = arguments.length > 3 ? arguments[3] : void 0;
            "" === e ? A() : (s.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), r ? G(e, t, n) : C(e, t, n));
        },
        H9: F,
        Qh: y,
        Se: A,
        Tr: function (e) {
            _.bW.updateAsync(
                "favoriteGifs",
                (t) => {
                    (e in t.gifs ? delete t.gifs[e] : delete t.gifs[T(e)],
                        E.default.track(m.HAw.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) }));
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        V$: function () {
            let e = (0, l.A)().replace(R, "");
            (u.Ay.trackWithMetadata(m.HAw.SEARCH_OPENED, { search_type: m.I4_.GIF, load_id: e }),
                s.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e }));
        },
        Z4: function (e) {
            let t = Date.now();
            (y(m.dD.TRENDING_GIFS),
                o.Bo.get({
                    url: m.Rsh.GIFS_TRENDING_GIFS,
                    query: { media_format: f.A.getSelectedFormat(), locale: d.default.locale, limit: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (r) => {
                        let { body: n } = r;
                        (F(n, m.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                            s.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: n }));
                    },
                    () => {
                        s.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
                    },
                ));
        },
        _E: function (e) {
            "" !== e &&
                null != e &&
                o.Bo.get({
                    url: m.Rsh.GIFS_SUGGEST,
                    query: { q: e, limit: 5, locale: d.default.locale },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then((t) => {
                    let r = t.body;
                    s.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: r });
                });
        },
        g4: function (e) {
            let { type: t, index: r, offset: n, limit: i, results: l, totalResults: a, query: s, gifId: c } = e,
                d = (0, I.QL)(f.A.getAnalyticsID(), t, { offset: n, limit: i, results: l, totalResults: a });
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
            }).then((e) => {
                let { body: t } = e,
                    { categories: r, gifs: n } = t;
                s.h.dispatch({
                    type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                    trendingCategories: r,
                    trendingGIFPreview: n[0],
                });
            });
        },
        wg: function (e) {
            _.bW.updateAsync(
                "favoriteGifs",
                (t) => {
                    var r;
                    let n = i().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                        l =
                            (/\.(mp4|webm)(\?|$)/i.test(e.src) &&
                                null != e.gifSrc &&
                                "" !== e.gifSrc &&
                                e.gifSrc !== e.src) ||
                            (w(e) && null != e.gifSrc)
                                ? e.gifSrc
                                : e.src,
                        o = (r =
                            w(e) && D.test(l)
                                ? (function (e) {
                                      let t = h.A.toURLSafe(e);
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
                        s = D.test(o) ? a.TL.IMAGE : e.format;
                    if (
                        ((t.gifs[T(e.url)] = { ...e, src: o, format: s, order: n + 1 }),
                        a.uz.toBinary(t).length > 762880)
                    )
                        return (S.A.show({ title: p.intl.string(p.t["+XYXtZ"]), body: p.intl.string(p.t.YSDH9n) }), !1);
                    let u = i().size(t.gifs);
                    (u > 2 && (t.hideTooltip = !0), E.default.track(m.HAw.GIF_FAVORITED, { total_num_favorited: u }));
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        xo: T,
    },
);
