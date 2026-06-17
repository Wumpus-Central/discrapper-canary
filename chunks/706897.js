t.d(l, { default: () => eo });
var n = t(627968),
    s = t(64700),
    r = t(517846),
    a = t(224640),
    i = t(20742),
    u = t(189213),
    c = t(939249),
    d = t(750943),
    o = t(834730),
    g = t(391242),
    m = t(683071),
    h = t(289873),
    f = t(743674),
    C = t(27620),
    x = t(45837),
    j = t(888697),
    y = t(26741),
    b = t(636537),
    E = t(301454),
    I = t(375708);
function p(e) {
    if (!(e instanceof b.oh)) return I.intl.string(E.default.CqBvCr);
    if (429 === e.status) return I.intl.string(E.default.yHHcCH);
    if (403 === e.status) return I.intl.string(E.default["Dfnp+b"]);
    switch (e.body?.code) {
        case 575001:
            return I.intl.string(E.default.sw6JQB);
        case 575002:
            return I.intl.string(E.default.repluE);
        case 575003:
            return I.intl.string(E.default.XDjFpR);
        case 575004:
        case 55e4:
            return I.intl.string(E.default.HHJFhr);
        default:
            return I.intl.string(E.default.CqBvCr);
    }
}
var k = t(522435),
    N = t(493819),
    S = t(503698),
    v = t.n(S),
    _ = t(17928),
    A = t(890856),
    R = t(477155),
    G = t(892547),
    T = t(497685),
    H = t(291147),
    D = t(703244),
    F = t(285961),
    M = t(821102),
    O = t(803805),
    P = t(661531),
    U = t(92008),
    w = t(25277),
    L = t(327143),
    z = t(131955),
    W = t(652215),
    q = t(70716);
let B = z.xP.map(function (e) {
    return { type: W.dD.TRENDING_CATEGORY, categoryType: e.type, name: e.name, src: e.previewUrl, format: O.TL.IMAGE };
});
function Q(e) {
    let { name: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: q.FP }),
            (0, n.jsx)("div", { className: q.O1, children: (0, n.jsx)("span", { className: q.yb, children: l }) }),
        ],
    });
}
function K(e) {
    let { onSelectCategory: l } = e,
        { imagePool: t, videoPool: r } = (0, F.d5)(),
        a = s.useRef(null),
        [i, u] = s.useState(null),
        c = s.useCallback(
            (e) => {
                null != (0, z.bQ)(e.name) && l({ name: e.name, type: e.categoryType });
            },
            [l],
        ),
        d = s.useCallback((e) => {
            let l = a.current;
            if (null == l) return;
            let t = l.getCoordsMap()[e];
            null != t && (l.scrollIntoViewRect({ start: t.top - 10, end: t.top + t.height + 10 }), u(e));
        }, []),
        o = s.useCallback(
            (e) => {
                let l = B.find((l) => l.name === e);
                null != l && c(l);
            },
            [c],
        ),
        g = s.useCallback((e, l) => {
            if (e > 0) return null;
            let t = B[l];
            return null != t ? t.name : null;
        }, []),
        m = s.useCallback(() => 110, []),
        h = s.useCallback(
            (e, l, s, a) => {
                if (e > 0) return null;
                let u = B[l];
                return null == u
                    ? null
                    : (0, n.jsx)(
                          F.uG,
                          {
                              format: u.format,
                              color: P.A.colors.BACKGROUND_BASE_LOWEST.css,
                              src: u.src,
                              item: u,
                              index: l,
                              coords: s,
                              onClick: () => c(u),
                              renderExtras: Q,
                              focused: u.name === i,
                              imagePool: t,
                              videoPool: r,
                          },
                          a,
                      );
            },
            [i, t, r, c],
        ),
        f = s.useCallback(
            (e) =>
                (0, n.jsx)(U.f, {
                    ref: a,
                    fade: !0,
                    className: q.jR,
                    itemGutter: 12,
                    getItemKey: g,
                    columns: e,
                    getItemHeight: m,
                    renderItem: h,
                    sections: [B.length],
                    chunkSize: 50,
                }),
            [m, g, h],
        ),
        C = s.useCallback(() => (null != a.current ? a.current.getItemGrid() : []), []),
        x = s.useCallback(() => (null != a.current ? a.current.getCoordsMap() : {}), []);
    return (0, n.jsx)(w.A, {
        getItemGrid: C,
        getCoordsMap: x,
        onFocus: d,
        onSelect: o,
        children: (0, n.jsx)(L.A, { desiredItemWidth: 200, maxColumns: 6, children: f }),
    });
}
var $ = t(650583);
let V = (e) => e.stopPropagation();
function X(e) {
    let { className: l, onSelectGIF: t, onSelectCategory: r } = e,
        {
            query: a,
            resultQuery: i,
            resultItems: u,
            suggestions: d,
        } = (0, _.cf)([M.A], () => ({
            query: M.A.getQuery(),
            resultQuery: M.A.getResultQuery(),
            resultItems: M.A.getResultItems(),
            suggestions: M.A.getSuggestions(),
        })),
        [o, g] = s.useState(null),
        m = s.useRef(null),
        h = s.useRef(null),
        f = s.useCallback((e, l, t) => {
            T.$P(e, l, t), g("" === e ? null : l);
        }, []),
        C = s.useCallback(
            (e) => {
                let l = h.current;
                t(e, null != l ? { source: "category", categoryType: l } : { source: "custom_search" });
            },
            [t],
        ),
        x = s.useCallback(() => {
            T.Se(), g(null), (h.current = null), m.current?.focus();
        }, []);
    s.useEffect(
        () => (
            T.V$(),
            () => {
                T.Se();
            }
        ),
        [],
    ),
        s.useEffect(() => {
            if (null == o) return;
            let e = (e) => {
                e.key === $.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), x());
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, [o, x]);
    let j = s.useCallback(
            (e) => {
                (h.current = null), f(e, W.dD.SEARCH);
            },
            [f],
        ),
        y = s.useCallback(
            (e) => {
                (h.current = null), T.Se(), f(e, W.dD.SEARCH_SUGGESTION, !0);
            },
            [f],
        ),
        b = s.useCallback(
            (e) => {
                let { name: l, type: t } = e;
                (h.current = t), r?.(t), f(l, W.dD.TRENDING_CATEGORY, !0), m.current?.focus();
            },
            [r, f],
        ),
        p = (0, H.w)((0, D.cf)()),
        k = null != o;
    return (0, n.jsxs)(A.s, {
        className: v()(q.kL, l),
        onClick: V,
        "aria-label": I.intl.string(E.default.yP0hhq),
        children: [
            (0, n.jsx)("div", {
                className: q.wx,
                children: (0, n.jsxs)("div", {
                    className: q.U1,
                    children: [
                        k
                            ? (0, n.jsx)(c.D, {
                                  onClick: x,
                                  className: q.Gv,
                                  "aria-label": I.intl.string(I.t["13/7kX"]),
                                  children: (0, n.jsx)(R.r, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, n.jsx)(G.I, {
                            query: a,
                            onChange: j,
                            onClear: x,
                            placeholder: p,
                            "aria-label": p,
                            ref: m,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: q.Qs,
                children:
                    null == o
                        ? (0, n.jsx)(K, { onSelectCategory: b })
                        : (0, n.jsx)(F.Ay, {
                              data: u,
                              onSelectGIF: C,
                              resultType: o,
                              resultQuery: i,
                              query: a,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: u.length,
                              suggestions: d,
                              onSelectSuggestion: y,
                          }),
            }),
        ],
    });
}
t(321073);
var J = t(488428),
    Y = t(964486);
let Z = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function ee(e, l) {
    null != l.width && null != l.height && e.push({ url: l.proxy_url ?? l.url, width: l.width, height: l.height });
}
var el = t(991455);
function et(e) {
    let { item: l, coords: t, onSelect: r } = e,
        a = s.useCallback(() => {
            r(l.url);
        }, [l.url, r]);
    return (0, n.jsx)(c.D, {
        className: el.Se,
        style: t,
        onClick: a,
        children: (0, n.jsx)("img", { src: l.url, alt: "", className: el.rx, loading: "lazy" }),
    });
}
function en(e) {
    let { guildId: l, onSelect: t } = e,
        { mediaItems: r, isLoading: a } = (function (e) {
            let [l, t] = s.useState([]),
                [n, r] = s.useState(!0);
            return (
                (0, Y.Ay)(() => {
                    if (null == e) return void r(!1);
                    let l = !1;
                    return (
                        b.Bo.get({
                            url: W.Rsh.SEARCH_GUILD(e),
                            query: J.stringify(Z),
                            oldFormErrors: !0,
                            rejectWithError: !1,
                        })
                            .then((e) => {
                                l ||
                                    (t(
                                        (function (e) {
                                            let l = [];
                                            for (let t of e.messages) {
                                                let e = t[0];
                                                if (null != e) {
                                                    if (null != e.attachments) for (let t of e.attachments) ee(l, t);
                                                    if (null != e.embeds)
                                                        for (let t of e.embeds) {
                                                            let e = t.image ?? t.thumbnail;
                                                            null != e && ee(l, e);
                                                        }
                                                }
                                            }
                                            return l;
                                        })(e.body),
                                    ),
                                    r(!1));
                            })
                            .catch(() => {
                                l || r(!1);
                            }),
                        () => {
                            l = !0;
                        }
                    );
                }),
                { mediaItems: l, isLoading: n }
            );
        })(l),
        i = s.useCallback(
            (e, l, t) => {
                if (e > 0) return 0;
                let n = r[l];
                return null == n ? 0 : t * (n.height / n.width);
            },
            [r],
        ),
        u = s.useCallback((e, l) => r[l]?.url ?? null, [r]),
        c = s.useCallback(
            (e, l, s, a) => {
                if (e > 0) return null;
                let i = r[l];
                return null == i ? null : (0, n.jsx)(et, { item: i, coords: s, onSelect: t }, a);
            },
            [r, t],
        ),
        d = s.useCallback(
            (e) =>
                (0, n.jsx)(U.f, {
                    fade: !0,
                    className: el.q4,
                    columns: e,
                    sections: [r.length],
                    itemGutter: 8,
                    getItemKey: u,
                    getItemHeight: i,
                    renderItem: c,
                    chunkSize: 128,
                }),
            [r, u, i, c],
        );
    return a
        ? (0, n.jsx)("div", { className: el.qE, children: (0, n.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, n.jsx)("div", {
                className: el.HU,
                children: (0, n.jsx)(L.A, { desiredItemWidth: 150, maxColumns: 3, children: d }),
            });
}
let es = (0, t(839214).D)((e, l) => ({
        imageHashes: [],
        isLoading: !1,
        guildId: null,
        abortController: null,
        cancelPendingFetch: () => {
            let { abortController: t } = l();
            null != t && (t.abort(), e({ abortController: null, isLoading: !1 }));
        },
        fetch: (t) => {
            let n = l();
            if (n.isLoading && n.guildId === t) return;
            n.cancelPendingFetch();
            let s = new AbortController();
            e({ isLoading: !0, guildId: t, abortController: s, imageHashes: [] }),
                b.Bo.get({
                    url: W.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(t),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                    signal: s.signal,
                })
                    .then((n) => {
                        l().guildId === t &&
                            e({ imageHashes: n.body.image_hashes, isLoading: !1, abortController: null });
                    })
                    .catch(() => {
                        s.signal.aborted ||
                            (l().guildId === t && e({ imageHashes: [], isLoading: !1, abortController: null }));
                    });
        },
    })),
    er = [
        { gif: t(203736), png: t(775788) },
        { gif: t(640237), png: t(689006) },
        { gif: t(964805), png: t(533798) },
        { gif: t(322821), png: t(891814) },
    ];
function ea(e) {
    let { shouldAnimate: l } = e;
    return (0, n.jsx)("div", {
        className: el.p8,
        children: er.map((e) =>
            (0, n.jsx)("div", { className: el.Nw, style: { backgroundImage: `url(${l ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function ei(e) {
    let { onOpenGIFPicker: l, onOpenRecentUploads: t } = e,
        { shouldAnimate: s, onMouseEnter: r, onMouseLeave: a } = (0, x.A)();
    return (0, n.jsxs)("ul", {
        className: el.f9,
        children: [
            (0, n.jsx)("li", {
                children: (0, n.jsx)(c.D, {
                    className: el.uK,
                    onClick: t,
                    children: (0, n.jsxs)("div", {
                        className: el.Mn,
                        children: [
                            (0, n.jsx)(d.X, { size: "md", color: "currentColor" }),
                            (0, n.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: I.intl.string(E.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, n.jsx)("li", {
                children: (0, n.jsxs)(c.D, {
                    className: el.uK,
                    onClick: l,
                    onMouseEnter: r,
                    onMouseLeave: a,
                    children: [
                        (0, n.jsx)(ea, { shouldAnimate: s }),
                        (0, n.jsxs)("div", {
                            className: el.MF,
                            children: [
                                (0, n.jsx)(g.O, { size: "md", color: "currentColor" }),
                                (0, n.jsx)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: I.intl.string(E.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eu(e) {
    let { onSelect: l } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(o.E, { variant: "text-sm/semibold", children: I.intl.string(E.default.SQb1dl) }),
            (0, n.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: el.u2,
                children: I.intl.string(E.default["2THN2i"]),
            }),
            (0, n.jsx)("div", {
                className: el.si,
                children: z.Kg.map((e, t) => {
                    let { gif: s, png: r } = e;
                    return (0, n.jsx)(
                        c.D,
                        {
                            onClick: () => l(s),
                            children: (0, n.jsx)(N.A, {
                                imageUrl: r,
                                animatedUrl: s,
                                autoPlayOnMount: !0,
                                className: el.yh,
                            }),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function ec(e) {
    let { guildId: l, hash: t, onSelect: r } = e,
        a = s.useMemo(() => (0, k.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        i = (0, f.S)(a?.imageUrl ?? ""),
        u = s.useCallback(() => r(t), [t, r]);
    return null == a
        ? null
        : (0, n.jsx)(c.D, {
              className: el.yh,
              style: { backgroundColor: i },
              onClick: u,
              children: (0, n.jsx)(N.A, { imageUrl: a.imageUrl, animatedUrl: a.animatedUrl, className: el.vA }),
          });
}
function ed(e) {
    let { guildId: l, hashes: t, onSelect: s } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(o.E, { variant: "text-sm/semibold", children: I.intl.string(E.default.dDID2M) }),
            (0, n.jsx)("div", {
                className: el.si,
                children: t.slice(0, 9).map((e) => (0, n.jsx)(ec, { guildId: l, hash: e, onSelect: s }, e)),
            }),
        ],
    });
}
function eo(e) {
    var l;
    let t,
        c,
        { transitionState: d, onClose: o, channel: g } = e,
        [f, x] = s.useState("HOME"),
        [b, N] = s.useState(null),
        { recentImageHashes: S, isLoading: v } =
            ((l = g.guild_id),
            (t = es.useField("isLoading")),
            (c = es.useField("imageHashes")),
            s.useEffect(() => (null != l && es.getField("fetch")(l), () => es.getField("cancelPendingFetch")()), [l]),
            { recentImageHashes: c, isLoading: t });
    (0, y.$s)({ guildId: g.guild_id, channelId: g.id, contentExists: (0, k.lr)(g) });
    let _ = s.useCallback(
            async (e, l, t) => {
                N(null);
                try {
                    await (0, j.Hd)(g.id, e),
                        (0, y.z6)({ guildId: g.guild_id, channelId: g.id, contentType: l, gifCategoryType: t }),
                        (0, C.hs)(r.w.HANGOUT_WINDOW_SET),
                        o();
                } catch (e) {
                    N(p(e));
                }
            },
            [g.guild_id, g.id, o],
        ),
        A = s.useCallback(
            async (e) => {
                N(null);
                try {
                    await (0, j.B$)(g.id, e),
                        (0, y.z6)({ guildId: g.guild_id, channelId: g.id, contentType: y.cM.RECENT_IMAGE }),
                        (0, C.hs)(r.w.HANGOUT_WINDOW_SET),
                        o();
                } catch (e) {
                    N(p(e));
                }
            },
            [g.guild_id, g.id, o],
        ),
        R = s.useCallback(
            (e, l) => {
                let t = e.gifSrc ?? e.src ?? e.url;
                null != t &&
                    ("category" === l.source ? _(t, y.cM.GIF_CATEGORY, l.categoryType) : _(t, y.cM.GIF_CUSTOM_SEARCH));
            },
            [_],
        ),
        G = s.useCallback(
            (e) => {
                (0, y.pZ)({ guildId: g.guild_id, channelId: g.id, categoryType: e });
            },
            [g.guild_id, g.id],
        ),
        T = s.useCallback((e) => _(e, y.cM.RECENT_IMAGE), [_]),
        H = s.useCallback((e) => _(e, y.cM.PRESET_GIF), [_]),
        D = s.useCallback(() => (N(null), x("HOME"), Promise.resolve()), []),
        F = null != b ? (0, n.jsx)(m.w, { type: "critical", children: b }) : null;
    if ("RECENT_UPLOADS" === f) {
        let e = I.intl.string(E.default.aBnIyR);
        return (0, n.jsxs)(a.d, {
            transitionState: d,
            onClose: D,
            size: "md",
            "aria-label": e,
            children: [
                (0, n.jsx)(i.rQ, { title: e, subtitle: I.intl.string(E.default["5VL9Ju"]) }),
                (0, n.jsxs)("div", {
                    className: el.n3,
                    children: [F, (0, n.jsx)(en, { guildId: g.guild_id, onSelect: T })],
                }),
            ],
        });
    }
    if ("GIF_PICKER" === f) {
        let e = I.intl.string(E.default.HkszWk);
        return (0, n.jsxs)(a.d, {
            transitionState: d,
            onClose: D,
            size: "md",
            "aria-label": e,
            children: [
                (0, n.jsx)(i.rQ, { title: e }),
                (0, n.jsxs)("div", {
                    className: el.n3,
                    children: [
                        F,
                        (0, n.jsx)("div", {
                            className: el.SD,
                            children: (0, n.jsx)(X, { className: el.XC, onSelectGIF: R, onSelectCategory: G }),
                        }),
                    ],
                }),
            ],
        });
    }
    return (0, n.jsx)(u.Modal, {
        transitionState: d,
        onClose: o,
        size: "md",
        title: I.intl.string(E.default.yyPbqI),
        subtitle: I.intl.string(E.default["+y6KsI"]),
        notice: null != b ? { message: b, type: "critical" } : void 0,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: el.jE,
            children: [
                (0, n.jsx)(ei, {
                    onOpenGIFPicker: () => {
                        N(null), x("GIF_PICKER");
                    },
                    onOpenRecentUploads: () => {
                        N(null), x("RECENT_UPLOADS");
                    },
                }),
                v
                    ? (0, n.jsx)("div", { className: el.g4, children: (0, n.jsx)(h.y, {}) })
                    : S.length > 0
                      ? (0, n.jsx)(ed, { guildId: g.guild_id, hashes: S, onSelect: A })
                      : (0, n.jsx)(eu, { onSelect: H }),
            ],
        }),
    });
}
