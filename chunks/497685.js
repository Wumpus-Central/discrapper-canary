"use strict";
n.d(t, {
    $P: () => L,
    H9: () => y,
    Qh: () => O,
    Se: () => w,
    Tr: () => F,
    V$: () => k,
    Z4: () => U,
    _E: () => b,
    g4: () => P,
    k8: () => M,
    wg: () => V,
    xo: () => x,
});
var i = n(735438),
    r = n.n(i),
    s = n(132500),
    a = n(636537),
    o = n(803805),
    l = n(228366),
    d = n(58149),
    _ = n(703244),
    u = n(202803),
    c = n(773669),
    E = n(594061),
    h = n(821102),
    m = n(954571),
    f = n(11187),
    g = n(998218),
    p = n(157559),
    A = n(652215),
    I = n(355097),
    T = n(985018);
let S = /-/g,
    N = ".webp",
    C = ".avif",
    R = ".gif";
function O(e) {
    let t = null != e ? { [e]: 1 } : {};
    d.Ay.trackWithMetadata(A.HAw.SEARCH_STARTED, {
        search_type: A.I4_.GIF,
        load_id: h.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, _.cf)(),
    });
}
function y(e, t) {
    let { startTime: n, ...i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = { offset: 0, limit: null, totalResults: e.length },
        s = (0, f.QL)(h.A.getAnalyticsID(), t, { ...r, ...i, results: e.length }),
        a = null == n ? {} : { load_duration_ms: Date.now() - n };
    d.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_VIEWED, { ...s, ...a, gif_provider: (0, _.cf)() });
}
function v(e, t, n) {
    let i = Date.now();
    O(t),
        a.Bo.get({
            url: A.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: h.A.getSelectedFormat(),
                provider: (0, _.cf)(),
                locale: c.default.locale,
                limit: n,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let s = r.body;
                y(s, t, { startTime: i, limit: n }),
                    l.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: s });
            },
            () => l.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let D = r().debounce(v, 250);
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? w() : (l.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), n ? v(e, t, i) : D(e, t, i));
}
function b(e) {
    "" !== e &&
        null != e &&
        a.Bo.get({
            url: A.Rsh.GIFS_SUGGEST,
            query: { q: e, provider: (0, _.cf)(), limit: 5, locale: c.default.locale },
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
function P(e) {
    let { type: t, index: n, offset: i, limit: r, results: s, totalResults: o, query: l, gifId: u } = e,
        c = (0, f.QL)(h.A.getAnalyticsID(), t, { offset: i, limit: r, results: s, totalResults: o });
    if (
        (d.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_SELECTED, {
            ...c,
            index_num: n,
            source_object: "GIF Picker",
            query: l,
        }),
        null != u)
    ) {
        let e = (0, _.cf)();
        a.Bo.post({
            url: A.Rsh.GIFS_SELECT,
            body: { id: u, q: l, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}
function k() {
    let e = (0, s.A)().replace(S, "");
    d.Ay.trackWithMetadata(A.HAw.SEARCH_OPENED, { search_type: A.I4_.GIF, load_id: e }),
        l.h.wait(() => {
            l.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function M() {
    a.Bo.get({
        url: A.Rsh.GIFS_TRENDING,
        query: { provider: (0, _.cf)(), locale: c.default.locale, media_format: h.A.getSelectedFormat() },
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
    O(A.dD.TRENDING_GIFS),
        a.Bo.get({
            url: A.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: h.A.getSelectedFormat(), provider: (0, _.cf)(), locale: c.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let { body: i } = n;
                y(i, A.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    l.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: i });
            },
            () => {
                l.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function x(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? e : (0, u.fr)(t) ? (0, u.w6)(t).toString() : e;
}
function G(e) {
    let t = g.A.toURLSafe(e.src);
    return null != t && ((0, u.BX)(t) || (0, u.fr)(t));
}
function V(e) {
    E.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            let n = r().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                i = G(e) && null != e.gifSrc ? e.gifSrc : e.src,
                s =
                    G(e) &&
                    (function (e) {
                        let t = g.A.toURLSafe(e);
                        if (null == t) return !1;
                        let n = t.pathname.toLowerCase();
                        return n.endsWith(N) || n.endsWith(C) || n.endsWith(R);
                    })(i),
                a = s
                    ? (function (e) {
                          let t = g.A.toURLSafe(e);
                          if (null == t) return e;
                          let n = t.pathname.toLowerCase(),
                              i = n.endsWith(N),
                              r = n.endsWith(C),
                              s = n.endsWith(R);
                          return i || r || s
                              ? ((r || s) && t.searchParams.set("format", "webp"),
                                t.searchParams.set("animated", "true"),
                                t.toString())
                              : e;
                      })(i)
                    : i,
                l = s ? o.TL.IMAGE : e.format;
            if (((t.gifs[x(e.url)] = { ...e, src: a, format: l, order: n + 1 }), o.uz.toBinary(t).length > 762880))
                return p.A.show({ title: T.intl.string(T.t["+XYXtZ"]), body: T.intl.string(T.t.YSDH9n) }), !1;
            let d = r().size(t.gifs);
            d > 2 && (t.hideTooltip = !0), m.default.track(A.HAw.GIF_FAVORITED, { total_num_favorited: d });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
function F(e) {
    E.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[x(e)],
                m.default.track(A.HAw.GIF_UNFAVORITED, { total_num_favorited: r().size(t.gifs) });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
