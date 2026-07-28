"use strict";
n.d(t, {
    $P: () => L,
    H9: () => C,
    Qh: () => N,
    Se: () => D,
    Tr: () => k,
    V$: () => b,
    Z4: () => P,
    _E: () => y,
    g4: () => v,
    k8: () => M,
    wg: () => x,
    xo: () => U,
});
var i = n(435558),
    r = n.n(i),
    a = n(132500),
    s = n(562465),
    l = n(803805),
    o = n(228366),
    d = n(95561),
    c = n(202803),
    u = n(773669),
    _ = n(594061),
    E = n(821102),
    A = n(174459),
    h = n(11187),
    I = n(998218),
    f = n(157559),
    p = n(652215),
    T = n(355097),
    m = n(375708);
let g = /-/g,
    S = "klipy";
function N(e) {
    let t = null != e ? { [e]: 1 } : {};
    d.Ay.trackWithMetadata(p.HAw.SEARCH_STARTED, {
        search_type: p.I4_.GIF,
        load_id: E.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: S,
    });
}
function C(e, t) {
    let { startTime: n, ...i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = { offset: 0, limit: null, totalResults: e.length },
        a = (0, h.QL)(E.A.getAnalyticsID(), t, { ...r, ...i, results: e.length }),
        s = null == n ? {} : { load_duration_ms: Date.now() - n };
    d.Ay.trackWithMetadata(p.HAw.SEARCH_RESULT_VIEWED, { ...a, ...s, gif_provider: S });
}
function O(e, t, n) {
    let i = Date.now();
    N(t),
        s.Bo.get({
            url: p.Rsh.GIFS_SEARCH,
            query: { q: e, media_format: E.A.getSelectedFormat(), locale: u.default.locale, limit: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let a = r.body;
                C(a, t, { startTime: i, limit: n }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: a });
            },
            () => o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let R = r().debounce(O, 250);
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? D() : (o.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), n ? O(e, t, i) : R(e, t, i));
}
function y(e) {
    "" !== e &&
        null != e &&
        s.Bo.get({
            url: p.Rsh.GIFS_SUGGEST,
            query: { q: e, limit: 5, locale: u.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let n = t.body;
            o.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: n });
        });
}
function D() {
    o.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function v(e) {
    let { type: t, index: n, offset: i, limit: r, results: a, totalResults: l, query: o, gifId: c } = e,
        u = (0, h.QL)(E.A.getAnalyticsID(), t, { offset: i, limit: r, results: a, totalResults: l });
    d.Ay.trackWithMetadata(p.HAw.SEARCH_RESULT_SELECTED, { ...u, index_num: n, source_object: "GIF Picker", query: o }),
        null != c &&
            s.Bo.post({ url: p.Rsh.GIFS_SELECT, body: { id: c, q: o }, oldFormErrors: !0, rejectWithError: !0 });
}
function b() {
    let e = (0, a.A)().replace(g, "");
    d.Ay.trackWithMetadata(p.HAw.SEARCH_OPENED, { search_type: p.I4_.GIF, load_id: e }),
        o.h.wait(() => {
            o.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function M() {
    s.Bo.get({
        url: p.Rsh.GIFS_TRENDING,
        query: { locale: u.default.locale, media_format: E.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: n, gifs: i } = t;
        o.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: n, trendingGIFPreview: i[0] });
    });
}
function P(e) {
    let t = Date.now();
    N(p.dD.TRENDING_GIFS),
        s.Bo.get({
            url: p.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: E.A.getSelectedFormat(), locale: u.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let { body: i } = n;
                C(i, p.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: i });
            },
            () => {
                o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function U(e) {
    let t = I.A.toURLSafe(e);
    return null == t ? e : (0, c.fr)(t) ? (0, c.w6)(t).toString() : e;
}
function w(e) {
    let t = I.A.toURLSafe(e.src);
    return null != t && ((0, c.BX)(t) || (0, c.fr)(t));
}
let G = /\.(webp|avif|gif)(\?|$)/i;
function x(e) {
    _.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            var n;
            let i = r().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                a =
                    (/\.(mp4|webm)(\?|$)/i.test(e.src) && null != e.gifSrc && "" !== e.gifSrc && e.gifSrc !== e.src) ||
                    (w(e) && null != e.gifSrc)
                        ? e.gifSrc
                        : e.src,
                s = (n =
                    w(e) && G.test(a)
                        ? (function (e) {
                              let t = I.A.toURLSafe(e);
                              if (null == t) return e;
                              let n = t.pathname.toLowerCase(),
                                  i = n.endsWith(".webp"),
                                  r = n.endsWith(".avif"),
                                  a = n.endsWith(".gif");
                              return i || r || a
                                  ? ((r || a) && t.searchParams.set("format", "webp"),
                                    t.searchParams.set("animated", "true"),
                                    t.toString())
                                  : e;
                          })(a)
                        : a).startsWith("//")
                    ? `https:${n}`
                    : n,
                o = G.test(s) ? l.TL.IMAGE : e.format;
            if (((t.gifs[U(e.url)] = { ...e, src: s, format: o, order: i + 1 }), l.uz.toBinary(t).length > 762880))
                return f.A.show({ title: m.intl.string(m.t["+XYXtZ"]), body: m.intl.string(m.t.YSDH9n) }), !1;
            let d = r().size(t.gifs);
            d > 2 && (t.hideTooltip = !0), A.default.track(p.HAw.GIF_FAVORITED, { total_num_favorited: d });
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function k(e) {
    _.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[U(e)],
                A.default.track(p.HAw.GIF_UNFAVORITED, { total_num_favorited: r().size(t.gifs) });
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
