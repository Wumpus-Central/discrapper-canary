r.d(t, {
    $P: () => D,
    H9: () => x,
    Qh: () => y,
    Se: () => G,
    Tr: () => O,
    V$: () => j,
    Z4: () => M,
    _E: () => F,
    g4: () => P,
    k8: () => L,
    wg: () => b,
    xo: () => k,
});
var s = r(735438),
    l = r.n(s),
    n = r(835245),
    i = r(562465),
    o = r(803805),
    a = r(73153),
    c = r(58149),
    u = r(380544),
    d = r(202803),
    h = r(773669),
    m = r(594061),
    f = r(821102),
    p = r(954571),
    g = r(11187),
    E = r(998218),
    _ = r(157559),
    R = r(652215),
    I = r(355097),
    A = r(985018);
let C = /-/g,
    v = ".webp",
    w = ".avif",
    S = ".gif";
function y(e) {
    let t = null != e ? { [e]: 1 } : {};
    c.Ay.trackWithMetadata(R.HAw.SEARCH_STARTED, {
        search_type: R.I4_.GIF,
        load_id: f.A.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t,
        gif_provider: (0, u.cf)(),
    });
}
function x(e, t) {
    let { startTime: r, ...s } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = { offset: 0, limit: null, totalResults: e.length },
        n = (0, g.QL)(f.A.getAnalyticsID(), t, { ...l, ...s, results: e.length }),
        i = null == r ? {} : { load_duration_ms: Date.now() - r };
    c.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_VIEWED, { ...n, ...i, gif_provider: (0, u.cf)() });
}
function T(e, t, r) {
    let s = Date.now();
    y(t),
        i.Bo.get({
            url: R.Rsh.GIFS_SEARCH,
            query: {
                q: e,
                media_format: f.A.getSelectedFormat(),
                provider: (0, u.cf)(),
                locale: h.default.locale,
                limit: r,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (l) => {
                let n = l.body;
                x(n, t, { startTime: s, limit: r }),
                    a.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", query: e, items: n });
            },
            () => a.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
        );
}
let N = l().debounce(T, 250);
function D(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 ? arguments[3] : void 0;
    "" === e ? G() : (a.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }), r ? T(e, t, s) : N(e, t, s));
}
function F(e) {
    "" !== e &&
        null != e &&
        i.Bo.get({
            url: R.Rsh.GIFS_SUGGEST,
            query: { q: e, provider: (0, u.cf)(), limit: 5, locale: h.default.locale },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((t) => {
            let r = t.body;
            a.h.dispatch({ type: "GIF_PICKER_SUGGESTIONS_SUCCESS", query: e, items: r });
        });
}
function G() {
    a.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
}
function P(e) {
    let { type: t, index: r, offset: s, limit: l, results: n, totalResults: o, query: a, gifId: d } = e,
        h = (0, g.QL)(f.A.getAnalyticsID(), t, { offset: s, limit: l, results: n, totalResults: o });
    if (
        (c.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_SELECTED, {
            ...h,
            index_num: r,
            source_object: "GIF Picker",
            query: a,
        }),
        null != d)
    ) {
        let e = (0, u.cf)();
        i.Bo.post({
            url: R.Rsh.GIFS_SELECT,
            body: { id: d, q: a, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    }
}
function j() {
    let e = (0, n.A)().replace(C, "");
    c.Ay.trackWithMetadata(R.HAw.SEARCH_OPENED, { search_type: R.I4_.GIF, load_id: e }),
        a.h.wait(() => {
            a.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
        });
}
function L() {
    i.Bo.get({
        url: R.Rsh.GIFS_TRENDING,
        query: { provider: (0, u.cf)(), locale: h.default.locale, media_format: f.A.getSelectedFormat() },
        oldFormErrors: !0,
        rejectWithError: !0,
    }).then((e) => {
        let { body: t } = e,
            { categories: r, gifs: s } = t;
        a.h.dispatch({ type: "GIF_PICKER_TRENDING_FETCH_SUCCESS", trendingCategories: r, trendingGIFPreview: s[0] });
    });
}
function M(e) {
    let t = Date.now();
    y(R.dD.TRENDING_GIFS),
        i.Bo.get({
            url: R.Rsh.GIFS_TRENDING_GIFS,
            query: { media_format: f.A.getSelectedFormat(), provider: (0, u.cf)(), locale: h.default.locale, limit: e },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (r) => {
                let { body: s } = r;
                x(s, R.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                    a.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: s });
            },
            () => {
                a.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
        );
}
function k(e) {
    let t = E.A.toURLSafe(e);
    return null == t ? e : (0, d.fr)(t) ? (0, d.w6)(t).toString() : e;
}
function U(e) {
    let t = E.A.toURLSafe(e.src);
    return null != t && ((0, d.BX)(t) || (0, d.fr)(t));
}
function b(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            let r = l().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
                s = U(e) && null != e.gifSrc ? e.gifSrc : e.src,
                n =
                    U(e) &&
                    (function (e) {
                        let t = E.A.toURLSafe(e);
                        if (null == t) return !1;
                        let r = t.pathname.toLowerCase();
                        return r.endsWith(v) || r.endsWith(w) || r.endsWith(S);
                    })(s),
                i = n
                    ? (function (e) {
                          let t = E.A.toURLSafe(e);
                          if (null == t) return e;
                          let r = t.pathname.toLowerCase(),
                              s = r.endsWith(v),
                              l = r.endsWith(w),
                              n = r.endsWith(S);
                          return s || l || n
                              ? ((l || n) && t.searchParams.set("format", "webp"),
                                t.searchParams.set("animated", "true"),
                                t.toString())
                              : e;
                      })(s)
                    : s,
                a = n ? o.TL.IMAGE : e.format;
            if (((t.gifs[k(e.url)] = { ...e, src: i, format: a, order: r + 1 }), o.uz.toBinary(t).length > 762880))
                return _.A.show({ title: A.intl.string(A.t["+XYXtZ"]), body: A.intl.string(A.t.YSDH9n) }), !1;
            let c = l().size(t.gifs);
            c > 2 && (t.hideTooltip = !0), p.default.track(R.HAw.GIF_FAVORITED, { total_num_favorited: c });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
function O(e) {
    m.bW.updateAsync(
        "favoriteGifs",
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[k(e)],
                p.default.track(R.HAw.GIF_UNFAVORITED, { total_num_favorited: l().size(t.gifs) });
        },
        I.Sb.INFREQUENT_USER_ACTION,
    );
}
