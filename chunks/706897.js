t.d(l, { default: () => eg });
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
    x = t(27620),
    C = t(45837),
    j = t(888697),
    b = t(26741),
    y = t(636537),
    E = t(301454),
    I = t(375708);
function p(e) {
    if (!(e instanceof y.oh)) return I.intl.string(E.default.CqBvCr);
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
                              "aria-label": u.name,
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
        x = s.useCallback(() => (null != a.current ? a.current.getItemGrid() : []), []),
        C = s.useCallback(() => (null != a.current ? a.current.getCoordsMap() : {}), []);
    return (0, n.jsx)(w.A, {
        getItemGrid: x,
        getCoordsMap: C,
        onFocus: d,
        onSelect: o,
        children: (0, n.jsx)(L.A, { desiredItemWidth: 200, maxColumns: 6, children: f }),
    });
}
var $ = t(650583);
function V(e) {
    return e.stopPropagation();
}
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
        x = s.useCallback(
            (e) => {
                let l = h.current;
                t(e, null != l ? { source: "category", categoryType: l } : { source: "custom_search" });
            },
            [t],
        ),
        C = s.useCallback(() => {
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
            if (null != o)
                return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
            function e(e) {
                e.key === $.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), C());
            }
        }, [o, C]);
    let j = s.useCallback(
            (e) => {
                (h.current = null), f(e, W.dD.SEARCH);
            },
            [f],
        ),
        b = s.useCallback(
            (e) => {
                (h.current = null), T.Se(), f(e, W.dD.SEARCH_SUGGESTION, !0);
            },
            [f],
        ),
        y = s.useCallback(
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
                                  onClick: C,
                                  className: q.Gv,
                                  "aria-label": I.intl.string(I.t["13/7kX"]),
                                  children: (0, n.jsx)(R.r, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, n.jsx)(G.I, {
                            query: a,
                            onChange: j,
                            onClear: C,
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
                        ? (0, n.jsx)(K, { onSelectCategory: y })
                        : (0, n.jsx)(F.Ay, {
                              data: u,
                              onSelectGIF: x,
                              resultType: o,
                              resultQuery: i,
                              query: a,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: u.length,
                              suggestions: d,
                              onSelectSuggestion: b,
                          }),
            }),
        ],
    });
}
var J = t(187322);
t(321073);
var Y = t(488428),
    Z = t(964486);
let ee = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function el(e, l) {
    null != l.width && null != l.height && e.push({ url: l.proxy_url ?? l.url, width: l.width, height: l.height });
}
var et = t(991455);
function en(e) {
    let { item: l, coords: t, onSelect: r } = e,
        a = s.useCallback(() => {
            r(l.url);
        }, [l.url, r]);
    return (0, n.jsx)(c.D, {
        className: et.Se,
        style: t,
        onClick: a,
        children: (0, n.jsx)("img", { src: l.url, alt: "", className: et.rx, loading: "lazy" }),
    });
}
function es(e) {
    let { guildId: l, onSelect: t } = e,
        { mediaItems: r, isLoading: a } = (function (e) {
            let [l, t] = s.useState([]),
                [n, r] = s.useState(!0);
            return (
                (0, Z.Ay)(() => {
                    if (null == e) return void r(!1);
                    let l = !1;
                    return (
                        y.Bo.get({
                            url: W.Rsh.SEARCH_GUILD(e),
                            query: Y.stringify(ee),
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
                                                    if (null != e.attachments) for (let t of e.attachments) el(l, t);
                                                    if (null != e.embeds)
                                                        for (let t of e.embeds) {
                                                            let e = t.image ?? t.thumbnail;
                                                            null != e && el(l, e);
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
                return null == i ? null : (0, n.jsx)(en, { item: i, coords: s, onSelect: t }, a);
            },
            [r, t],
        ),
        d = s.useRef(null),
        o = s.useCallback(
            (e) =>
                (0, n.jsx)(U.f, {
                    fade: !0,
                    className: et.q4,
                    columns: e,
                    sections: [r.length],
                    itemGutter: 8,
                    getItemKey: u,
                    getItemHeight: i,
                    renderItem: c,
                    chunkSize: 128,
                    disableFocusRingScope: !0,
                }),
            [r, u, i, c],
        );
    return a
        ? (0, n.jsx)("div", { className: et.qE, children: (0, n.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, n.jsx)("div", {
                className: et.HU,
                ref: d,
                children: (0, n.jsx)(J.xp, {
                    containerRef: d,
                    children: (0, n.jsx)(L.A, { desiredItemWidth: 150, maxColumns: 3, children: o }),
                }),
            });
}
let er = (0, t(839214).D)((e, l) => ({
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
                y.Bo.get({
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
    ea = [
        { gif: t(981355), png: t(775788) },
        { gif: t(640237), png: t(689006) },
        { gif: t(964805), png: t(533798) },
        { gif: t(322821), png: t(891814) },
    ];
function ei(e) {
    let { shouldAnimate: l } = e;
    return (0, n.jsx)("div", {
        className: et.p8,
        children: ea.map((e) =>
            (0, n.jsx)("div", { className: et.Nw, style: { backgroundImage: `url(${l ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function eu(e) {
    let { onOpenGIFPicker: l, onOpenRecentUploads: t } = e,
        { shouldAnimate: s, onMouseEnter: r, onMouseLeave: a } = (0, C.A)();
    return (0, n.jsxs)("ul", {
        className: et.f9,
        children: [
            (0, n.jsx)("li", {
                children: (0, n.jsx)(c.D, {
                    className: et.uK,
                    onClick: t,
                    children: (0, n.jsxs)("div", {
                        className: et.Mn,
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
                    className: et.uK,
                    onClick: l,
                    onMouseEnter: r,
                    onMouseLeave: a,
                    children: [
                        (0, n.jsx)(ei, { shouldAnimate: s }),
                        (0, n.jsxs)("div", {
                            className: et.MF,
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
function ec(e) {
    let { onSelect: l } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(o.E, { variant: "text-sm/semibold", children: I.intl.string(E.default.SQb1dl) }),
            (0, n.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: et.u2,
                children: I.intl.string(E.default["2THN2i"]),
            }),
            (0, n.jsx)("div", {
                className: et.si,
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
                                className: et.yh,
                            }),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function ed(e) {
    let { guildId: l, hash: t, onSelect: r } = e,
        a = s.useMemo(() => (0, k.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        i = (0, f.S)(a?.imageUrl ?? ""),
        u = s.useCallback(() => r(t), [t, r]);
    return null == a
        ? null
        : (0, n.jsx)(c.D, {
              className: et.yh,
              style: { backgroundColor: i },
              onClick: u,
              children: (0, n.jsx)(N.A, { imageUrl: a.imageUrl, animatedUrl: a.animatedUrl, className: et.vA }),
          });
}
function eo(e) {
    let { guildId: l, hashes: t, onSelect: s } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(o.E, { variant: "text-sm/semibold", children: I.intl.string(E.default.dDID2M) }),
            (0, n.jsx)("div", {
                className: et.si,
                children: t.slice(0, 9).map((e) => (0, n.jsx)(ed, { guildId: l, hash: e, onSelect: s }, e)),
            }),
        ],
    });
}
function eg(e) {
    var l;
    let t,
        c,
        { transitionState: d, onClose: o, channel: g } = e,
        [f, C] = s.useState("HOME"),
        [y, N] = s.useState(null),
        { recentImageHashes: S, isLoading: v } =
            ((l = g.guild_id),
            (t = er.useField("isLoading")),
            (c = er.useField("imageHashes")),
            s.useEffect(() => (null != l && er.getField("fetch")(l), () => er.getField("cancelPendingFetch")()), [l]),
            { recentImageHashes: c, isLoading: t });
    (0, b.$s)({ guildId: g.guild_id, channelId: g.id, contentExists: (0, k.lr)(g) });
    let _ = s.useCallback(
            async (e, l, t) => {
                N(null);
                try {
                    await (0, j.Hd)(g.id, e),
                        (0, b.z6)({ guildId: g.guild_id, channelId: g.id, contentType: l, gifCategoryType: t }),
                        (0, x.hs)(r.w.HANGOUT_WINDOW_SET),
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
                        (0, b.z6)({ guildId: g.guild_id, channelId: g.id, contentType: b.cM.RECENT_IMAGE }),
                        (0, x.hs)(r.w.HANGOUT_WINDOW_SET),
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
                    ("category" === l.source ? _(t, b.cM.GIF_CATEGORY, l.categoryType) : _(t, b.cM.GIF_CUSTOM_SEARCH));
            },
            [_],
        ),
        G = s.useCallback(
            (e) => {
                (0, b.pZ)({ guildId: g.guild_id, channelId: g.id, categoryType: e });
            },
            [g.guild_id, g.id],
        ),
        T = s.useCallback((e) => _(e, b.cM.RECENT_IMAGE), [_]),
        H = s.useCallback((e) => _(e, b.cM.PRESET_GIF), [_]),
        D = s.useCallback(() => (N(null), C("HOME"), Promise.resolve()), []),
        F = null != y ? (0, n.jsx)(m.w, { type: "critical", children: y }) : null;
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
                    className: et.n3,
                    children: [F, (0, n.jsx)(es, { guildId: g.guild_id, onSelect: T })],
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
                    className: et.n3,
                    children: [
                        F,
                        (0, n.jsx)("div", {
                            className: et.SD,
                            children: (0, n.jsx)(X, { className: et.XC, onSelectGIF: R, onSelectCategory: G }),
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
        notice: null != y ? { message: y, type: "critical" } : void 0,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: et.jE,
            children: [
                (0, n.jsx)(eu, {
                    onOpenGIFPicker: () => {
                        N(null), C("GIF_PICKER");
                    },
                    onOpenRecentUploads: () => {
                        N(null), C("RECENT_UPLOADS");
                    },
                }),
                v
                    ? (0, n.jsx)("div", { className: et.g4, children: (0, n.jsx)(h.y, {}) })
                    : S.length > 0
                      ? (0, n.jsx)(eo, { guildId: g.guild_id, hashes: S, onSelect: A })
                      : (0, n.jsx)(ec, { onSelect: H }),
            ],
        }),
    });
}
