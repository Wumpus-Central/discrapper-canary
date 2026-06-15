r.d(t, {
    $P: () => F,
    H9: () => C,
    Qh: () => S,
    Se: () => G,
    Tr: () => U,
    V$: () => T,
    Z4: () => j,
    _E: () => x,
    g4: () => N,
    k8: () => D,
    wg: () => L,
    xo: () => P,
});
var s = r(735438),
    n = r.n(s),
    l = r(835245),
    i = r(636537),
    a = r(803805),
    o = r(228366),
    c = r(95561),
    u = r(703244),
    d = r(202803),
    h = r(773669),
    m = r(594061),
    p = r(821102),
    g = r(174459),
    f = r(11187),
    I = r(998218),
    E = r(157559),
    R = r(652215),
    _ = r(355097),
    y = r(375708);
let v = /-/g;
function S(e) {
    let t = null != e ? { [e]: 1 } : {};
    c.Ay.trackWithMetadata(R.HAw.SEARCH_STARTED, {
        search_type: R.I4_.GIF,
        load_id: p.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, u.cf)(),
    });
}
function C(e, t) {
    let { startTime: r, ...s } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = { offset: 0, limit: null, totalResults: e.length },
        l = (0, f.QL)(p.A.getAnalyticsID(), t, { ...n, ...s, results: e.length }),
        i = null == r ? {} : { load_duration_ms: Date.now() - r };
    c.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_VIEWED, { ...l, ...i, gif_provider: (0, u.cf)() });
}
function A(e, t, r) {
    let s = Date.now();
    S(t),
        i.Bo.get({
            url: R.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: p.A.getSelectedFormat(),
                provider: (0, u.cf)(),
                locale: h.default.locale,
                limit: r,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let l = n.body;
                C(l, t, { startTime: s, limit: r }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: l });
            },
            () => o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let w = n().debounce(A, 250);
function F(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? G() : (o.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), r ? A(e, t, s) : w(e, t, s));
}
function x(e) {
    "" !== e &&
        null != e &&
        i.Bo.get({
            url: R.Rsh.GIFS_SUGGEST,
            query: { q: e, provider: (0, u.cf)(), limit: 5, locale: h.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let r = t.body;
            o.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: r });
        });
}
function G() {
    o.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function N(e) {
    let { type: t, index: r, offset: s, limit: n, results: l, totalResults: a, query: o, gifId: d } = e,
        h = (0, f.QL)(p.A.getAnalyticsID(), t, { offset: s, limit: n, results: l, totalResults: a });
    if (
        (c.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_SELECTED, {
            ...h,
            index_num: r,
            source_object: "GIF Picker",
            query: o,
        }),
        null != d)
    ) {
        let e = (0, u.cf)();
        i.Bo.post({
            url: R.Rsh.GIFS_SELECT,
            body: { id: d, q: o, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}
function T() {
    let e = (0, l.A)().replace(v, "");
    c.Ay.trackWithMetadata(R.HAw.SEARCH_OPENED, { search_type: R.I4_.GIF, load_id: e }),
        o.h.wait(() => {
            o.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function D() {
    i.Bo.get({
        url: R.Rsh.GIFS_TRENDING,
        query: { provider: (0, u.cf)(), locale: h.default.locale, media_format: p.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: r, gifs: s } = t;
        o.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: r, trendingGIFPreview: s[0] });
    });
}
function j(e) {
    let t = Date.now();
    S(R.dD.TRENDING_GIFS),
        i.Bo.get({
            url: R.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: p.A.getSelectedFormat(), provider: (0, u.cf)(), locale: h.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let { body: s } = r;
                C(s, R.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: s });
            },
            () => {
                o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function P(e) {
    let t = I.A.toURLSafe(e);
    return null == t ? e : (0, d.fr)(t) ? (0, d.w6)(t).toString() : e;
}
function k(e) {
    let t = I.A.toURLSafe(e.src);
    return null != t && ((0, d.BX)(t) || (0, d.fr)(t));
}
let b = /\.(webp|avif|gif)(\?|$)/i;
function L(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            var r;
            let s = n().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                l =
                    (/\.(mp4|webm)(\?|$)/i.test(e.src) && null != e.gifSrc && "" !== e.gifSrc && e.gifSrc !== e.src) ||
                    (k(e) && null != e.gifSrc)
                        ? e.gifSrc
                        : e.src,
                i = (r =
                    k(e) && b.test(l)
                        ? (function (e) {
                              let t = I.A.toURLSafe(e);
                              if (null == t) return e;
                              let r = t.pathname.toLowerCase(),
                                  s = r.endsWith(".webp"),
                                  n = r.endsWith(".avif"),
                                  l = r.endsWith(".gif");
                              return s || n || l
                                  ? ((n || l) && t.searchParams.set("format", "webp"),
                                    t.searchParams.set("animated", "true"),
                                    t.toString())
                                  : e;
                          })(l)
                        : l).startsWith("//")
                    ? `https:${r}`
                    : r,
                o = b.test(i) ? a.TL.IMAGE : e.format;
            if (((t.gifs[P(e.url)] = { ...e, src: i, format: o, order: s + 1 }), a.uz.toBinary(t).length > 762880))
                return E.A.show({ title: y.intl.string(y.t["+XYXtZ"]), body: y.intl.string(y.t.YSDH9n) }), !1;
            let c = n().size(t.gifs);
            c > 2 && (t.hideTooltip = !0), g.default.track(R.HAw.GIF_FAVORITED, { total_num_favorited: c });
        },
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function U(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[P(e)],
                g.default.track(R.HAw.GIF_UNFAVORITED, { total_num_favorited: n().size(t.gifs) });
        },
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
