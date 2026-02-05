"use strict";
n.d(t, {
    $P: () => P,
    H9: () => L,
    Qh: () => D,
    Se: () => k,
    Tr: () => z,
    V$: () => G,
    Z4: () => F,
    _E: () => M,
    g4: () => U,
    k8: () => V,
    wg: () => K,
    xo: () => B,
});
var r = n(735438),
    i = n.n(r),
    a = n(835245),
    s = n(562465),
    o = n(803805),
    l = n(73153),
    u = n(58149),
    c = n(380544),
    d = n(202803),
    _ = n(773669),
    f = n(594061),
    p = n(821102),
    h = n(954571),
    m = n(11187),
    g = n(998218),
    E = n(157559),
    A = n(652215),
    I = n(355097),
    T = n(985018);
let y = 250,
    S = /-/g,
    v = "format",
    C = "animated",
    b = "webp",
    N = ".webp",
    R = ".avif",
    O = ".gif";
function D(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.Ay.trackWithMetadata(A.HAw.SEARCH_STARTED, {
        search_type: A.I4_.GIF,
        load_id: p.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, c.cf)(),
    });
}
function L(e, t) {
    let { startTime: n, ...r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = { offset: 0, limit: null, totalResults: e.length },
        a = (0, m.QL)(p.A.getAnalyticsID(), t, { ...i, ...r, results: e.length }),
        s = null == n ? {} : { load_duration_ms: Date.now() - n };
    u.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_VIEWED, { ...a, ...s, gif_provider: (0, c.cf)() });
}
function w(e, t, n) {
    let r = Date.now();
    D(t),
        s.Bo.get({
            url: A.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: p.A.getSelectedFormat(),
                provider: (0, c.cf)(),
                locale: _.default.locale,
                limit: n,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (i) => {
                let a = i.body;
                L(a, t, { startTime: r, limit: n }),
                    l.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: a });
            },
            () => l.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let x = i().debounce(w, y);
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? k() : (l.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), n ? w(e, t, r) : x(e, t, r));
}
function M(e) {
    "" !== e &&
        null != e &&
        s.Bo.get({
            url: A.Rsh.GIFS_SUGGEST,
            query: { q: e, provider: (0, c.cf)(), limit: 5, locale: _.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let n = t.body;
            l.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: n });
        });
}
function k() {
    l.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function U(e) {
    let { type: t, index: n, offset: r, limit: i, results: a, totalResults: o, query: l, gifId: d } = e,
        _ = (0, m.QL)(p.A.getAnalyticsID(), t, { offset: r, limit: i, results: a, totalResults: o });
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
        s.Bo.post({
            url: A.Rsh.GIFS_SELECT,
            body: { id: d, q: l, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}
function G() {
    let e = (0, a.A)().replace(S, "");
    u.Ay.trackWithMetadata(A.HAw.SEARCH_OPENED, { search_type: A.I4_.GIF, load_id: e }),
        l.h.wait(() => {
            l.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function V() {
    s.Bo.get({
        url: A.Rsh.GIFS_TRENDING,
        query: { provider: (0, c.cf)(), locale: _.default.locale, media_format: p.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: n, gifs: r } = t;
        l.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: n, trendingGIFPreview: r[0] });
    });
}
function F(e) {
    let t = Date.now();
    D(A.dD.TRENDING_GIFS),
        s.Bo.get({
            url: A.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: p.A.getSelectedFormat(), provider: (0, c.cf)(), locale: _.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let { body: r } = n;
                L(r, A.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    l.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: r });
            },
            () => {
                l.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function B(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? e : (0, d.fr)(t) ? (0, d.w6)(t).toString() : e;
}
function j(e) {
    let t = g.A.toURLSafe(e.src);
    return null != t && ((0, d.BX)(t) || (0, d.fr)(t));
}
function H(e) {
    return j(e) && null != e.gifSrc ? e.gifSrc : e.src;
}
function Y(e) {
    let t = g.A.toURLSafe(e);
    if (null == t) return !1;
    let n = t.pathname.toLowerCase();
    return n.endsWith(N) || n.endsWith(R) || n.endsWith(O);
}
function W(e) {
    let t = g.A.toURLSafe(e);
    if (null == t) return e;
    let n = t.pathname.toLowerCase(),
        r = n.endsWith(N),
        i = n.endsWith(R),
        a = n.endsWith(O);
    return r || i || a ? ((i || a) && t.searchParams.set(v, b), t.searchParams.set(C, "true"), t.toString()) : e;
}
function K(e) {
    f.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            let n = i().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                r = H(e),
                a = j(e) && Y(r),
                s = a ? W(r) : r,
                l = a ? o.TL.IMAGE : e.format;
            if (((t.gifs[B(e.url)] = { ...e, src: s, format: l, order: n + 1 }), o.uz.toBinary(t).length > 762880))
                return E.A.show({ title: T.intl.string(T.t["+XYXtZ"]), body: T.intl.string(T.t.YSDH9n) }), !1;
            let u = i().size(t.gifs);
            u > 2 && (t.hideTooltip = !0), h.default.track(A.HAw.GIF_FAVORITED, { total_num_favorited: u });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
function z(e) {
    f.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[B(e)],
                h.default.track(A.HAw.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
