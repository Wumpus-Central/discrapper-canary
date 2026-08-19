t.d(l, { default: () => eo });
var n = t(477900),
    s = t(582128),
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
    E = t(31021),
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
    H = t(336807),
    D = t(285961),
    F = t(821102),
    M = t(803805),
    O = t(661531),
    P = t(92008),
    U = t(25277),
    w = t(327143),
    L = t(131955),
    z = t(652215),
    W = t(768388);
let q = L.xP.map(function (e) {
    return { type: z.dD.TRENDING_CATEGORY, categoryType: e.type, name: e.name, src: e.previewUrl, format: M.TL.IMAGE };
});
function B(e) {
    let { name: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: W.FP }),
            (0, n.jsx)("div", { className: W.O1, children: (0, n.jsx)("span", { className: W.yb, children: l }) }),
        ],
    });
}
function Q(e) {
    let { onSelectCategory: l } = e,
        { imagePool: t, videoPool: r } = (0, D.d5)(),
        a = s.useRef(null),
        [i, u] = s.useState(null),
        c = s.useCallback(
            (e) => {
                null != (0, L.bQ)(e.name) && l({ name: e.name, type: e.categoryType });
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
                let l = q.find((l) => l.name === e);
                null != l && c(l);
            },
            [c],
        ),
        g = s.useCallback((e, l) => {
            if (e > 0) return null;
            let t = q[l];
            return null != t ? t.name : null;
        }, []),
        m = s.useCallback(() => 110, []),
        h = s.useCallback(
            (e, l, s, a) => {
                if (e > 0) return null;
                let u = q[l];
                return null == u
                    ? null
                    : (0, n.jsx)(
                          D.uG,
                          {
                              format: u.format,
                              color: O.A.colors.BACKGROUND_BASE_LOWEST.css,
                              src: u.src,
                              item: u,
                              index: l,
                              coords: s,
                              onClick: () => c(u),
                              renderExtras: B,
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
                (0, n.jsx)(P.f, {
                    ref: a,
                    fade: !0,
                    className: W.jR,
                    itemGutter: 12,
                    getItemKey: g,
                    columns: e,
                    getItemHeight: m,
                    renderItem: h,
                    sections: [q.length],
                    chunkSize: 50,
                }),
            [m, g, h],
        ),
        x = s.useCallback(() => (null != a.current ? a.current.getItemGrid() : []), []),
        C = s.useCallback(() => (null != a.current ? a.current.getCoordsMap() : {}), []);
    return (0, n.jsx)(U.A, {
        getItemGrid: x,
        getCoordsMap: C,
        onFocus: d,
        onSelect: o,
        children: (0, n.jsx)(w.A, { desiredItemWidth: 200, maxColumns: 6, children: f }),
    });
}
var K = t(650583);
function $(e) {
    return e.stopPropagation();
}
function V(e) {
    let { className: l, onSelectGIF: t, onSelectCategory: r } = e,
        {
            query: a,
            resultQuery: i,
            resultItems: u,
            suggestions: d,
        } = (0, _.cf)([F.A], () => ({
            query: F.A.getQuery(),
            resultQuery: F.A.getResultQuery(),
            resultItems: F.A.getResultItems(),
            suggestions: F.A.getSuggestions(),
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
                e.key === K.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), C());
            }
        }, [o, C]);
    let j = s.useCallback(
            (e) => {
                (h.current = null), f(e, z.dD.SEARCH);
            },
            [f],
        ),
        b = s.useCallback(
            (e) => {
                (h.current = null), T.Se(), f(e, z.dD.SEARCH_SUGGESTION, !0);
            },
            [f],
        ),
        y = s.useCallback(
            (e) => {
                let { name: l, type: t } = e;
                (h.current = t), r?.(t), f(l, z.dD.TRENDING_CATEGORY, !0), m.current?.focus();
            },
            [r, f],
        ),
        p = (0, H.wT)(),
        k = null != o;
    return (0, n.jsxs)(A.s, {
        className: v()(W.kL, l),
        onClick: $,
        "aria-label": I.intl.string(E.default.yP0hhq),
        children: [
            (0, n.jsx)("div", {
                className: W.wx,
                children: (0, n.jsxs)("div", {
                    className: W.U1,
                    children: [
                        k
                            ? (0, n.jsx)(c.D, {
                                  onClick: C,
                                  className: W.Gv,
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
                className: W.Qs,
                children:
                    null == o
                        ? (0, n.jsx)(Q, { onSelectCategory: y })
                        : (0, n.jsx)(D.Ay, {
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
var X = t(259678);
t(321073);
var J = t(488428),
    Y = t(964486);
let Z = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function ee(e, l) {
    null != l.width && null != l.height && e.push({ url: l.proxy_url ?? l.url, width: l.width, height: l.height });
}
var el = t(752119);
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
                        y.Bo.get({
                            url: z.Rsh.SEARCH_GUILD(e),
                            query: J.stringify(Z),
                            oldFormErrors: !0,
                            rejectWithError: (0, y.fT)(),
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
        d = s.useRef(null),
        o = s.useCallback(
            (e) =>
                (0, n.jsx)(P.f, {
                    fade: !0,
                    className: el.q4,
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
        ? (0, n.jsx)("div", { className: el.qE, children: (0, n.jsx)(h.y, { type: h.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, n.jsx)("div", {
                className: el.HU,
                ref: d,
                children: (0, n.jsx)(X.xp, {
                    containerRef: d,
                    children: (0, n.jsx)(w.A, { desiredItemWidth: 150, maxColumns: 3, children: o }),
                }),
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
                y.Bo.get({
                    url: z.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(t),
                    oldFormErrors: !0,
                    rejectWithError: (0, y.fT)(),
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
        { shouldAnimate: s, onMouseEnter: r, onMouseLeave: a } = (0, C.A)();
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
                children: L.Kg.map((e, t) => {
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
        [f, C] = s.useState("HOME"),
        [y, N] = s.useState(null),
        { recentImageHashes: S, isLoading: v } =
            ((l = g.guild_id),
            (t = es.useField("isLoading")),
            (c = es.useField("imageHashes")),
            s.useEffect(() => (null != l && es.getField("fetch")(l), () => es.getField("cancelPendingFetch")()), [l]),
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
                            children: (0, n.jsx)(V, { className: el.XC, onSelectGIF: R, onSelectCategory: G }),
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
            className: el.jE,
            children: [
                (0, n.jsx)(ei, {
                    onOpenGIFPicker: () => {
                        N(null), C("GIF_PICKER");
                    },
                    onOpenRecentUploads: () => {
                        N(null), C("RECENT_UPLOADS");
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
