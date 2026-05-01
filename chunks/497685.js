r.d(t, {
    $P: () => N,
    H9: () => w,
    Qh: () => F,
    Se: () => D,
    Tr: () => W,
    V$: () => j,
    Z4: () => L,
    _E: () => T,
    g4: () => P,
    k8: () => k,
    wg: () => M,
    xo: () => b,
});
var s = r(735438),
    n = r.n(s),
    l = r(132500),
    i = r(636537),
    a = r(803805),
    o = r(228366),
    u = r(58149),
    d = r(703244),
    c = r(202803),
    h = r(773669),
    m = r(594061),
    p = r(821102),
    f = r(954571),
    g = r(11187),
    I = r(998218),
    E = r(157559),
    R = r(652215),
    _ = r(355097),
    y = r(985018);
let S = /-/g,
    C = ".webp",
    A = ".avif",
    v = ".gif";
function F(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.Ay.trackWithMetadata(R.HAw.SEARCH_STARTED, {
        search_type: R.I4_.GIF,
        load_id: p.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, d.cf)(),
    });
}
function w(e, t) {
    let { startTime: r, ...s } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = { offset: 0, limit: null, totalResults: e.length },
        l = (0, g.QL)(p.A.getAnalyticsID(), t, { ...n, ...s, results: e.length }),
        i = null == r ? {} : { load_duration_ms: Date.now() - r };
    u.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_VIEWED, { ...l, ...i, gif_provider: (0, d.cf)() });
}
function x(e, t, r) {
    let s = Date.now();
    F(t),
        i.Bo.get({
            url: R.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: p.A.getSelectedFormat(),
                provider: (0, d.cf)(),
                locale: h.default.locale,
                limit: r,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (n) => {
                let l = n.body;
                w(l, t, { startTime: s, limit: r }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: l });
            },
            () => o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let G = n().debounce(x, 250);
function N(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? D() : (o.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), r ? x(e, t, s) : G(e, t, s));
}
function T(e) {
    "" !== e &&
        null != e &&
        i.Bo.get({
            url: R.Rsh.GIFS_SUGGEST,
            query: { q: e, provider: (0, d.cf)(), limit: 5, locale: h.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let r = t.body;
            o.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: r });
        });
}
function D() {
    o.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function P(e) {
    let { type: t, index: r, offset: s, limit: n, results: l, totalResults: a, query: o, gifId: c } = e,
        h = (0, g.QL)(p.A.getAnalyticsID(), t, { offset: s, limit: n, results: l, totalResults: a });
    if (
        (u.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_SELECTED, {
            ...h,
            index_num: r,
            source_object: "GIF Picker",
            query: o,
        }),
        null != c)
    ) {
        let e = (0, d.cf)();
        i.Bo.post({
            url: R.Rsh.GIFS_SELECT,
            body: { id: c, q: o, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}
function j() {
    let e = (0, l.A)().replace(S, "");
    u.Ay.trackWithMetadata(R.HAw.SEARCH_OPENED, { search_type: R.I4_.GIF, load_id: e }),
        o.h.wait(() => {
            o.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function k() {
    i.Bo.get({
        url: R.Rsh.GIFS_TRENDING,
        query: { provider: (0, d.cf)(), locale: h.default.locale, media_format: p.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: r, gifs: s } = t;
        o.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: r, trendingGIFPreview: s[0] });
    });
}
function L(e) {
    let t = Date.now();
    F(R.dD.TRENDING_GIFS),
        i.Bo.get({
            url: R.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: p.A.getSelectedFormat(), provider: (0, d.cf)(), locale: h.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let { body: s } = r;
                w(s, R.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: s });
            },
            () => {
                o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function b(e) {
    let t = I.A.toURLSafe(e);
    return null == t ? e : (0, c.fr)(t) ? (0, c.w6)(t).toString() : e;
}
function U(e) {
    let t = I.A.toURLSafe(e.src);
    return null != t && ((0, c.BX)(t) || (0, c.fr)(t));
}
function M(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            let r = n().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                s = U(e) && null != e.gifSrc ? e.gifSrc : e.src,
                l =
                    U(e) &&
                    (function (e) {
                        let t = I.A.toURLSafe(e);
                        if (null == t) return !1;
                        let r = t.pathname.toLowerCase();
                        return r.endsWith(C) || r.endsWith(A) || r.endsWith(v);
                    })(s),
                i = l
                    ? (function (e) {
                          let t = I.A.toURLSafe(e);
                          if (null == t) return e;
                          let r = t.pathname.toLowerCase(),
                              s = r.endsWith(C),
                              n = r.endsWith(A),
                              l = r.endsWith(v);
                          return s || n || l
                              ? ((n || l) && t.searchParams.set("format", "webp"),
                                t.searchParams.set("animated", "true"),
                                t.toString())
                              : e;
                      })(s)
                    : s,
                o = l ? a.TL.IMAGE : e.format;
            if (((t.gifs[b(e.url)] = { ...e, src: i, format: o, order: r + 1 }), a.uz.toBinary(t).length > 762880))
                return E.A.show({ title: y.intl.string(y.t["+XYXtZ"]), body: y.intl.string(y.t.YSDH9n) }), !1;
            let u = n().size(t.gifs);
            u > 2 && (t.hideTooltip = !0), f.default.track(R.HAw.GIF_FAVORITED, { total_num_favorited: u });
        },
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function W(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[b(e)],
                f.default.track(R.HAw.GIF_UNFAVORITED, { total_num_favorited: n().size(t.gifs) });
        },
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
