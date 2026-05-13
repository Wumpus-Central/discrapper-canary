t.d(l, { default: () => ec });
var n = t(627968),
    s = t(64700),
    r = t(224640),
    a = t(20742),
    i = t(189213),
    u = t(939249),
    c = t(750943),
    d = t(834730),
    o = t(391242),
    g = t(683071),
    m = t(289873),
    h = t(743674),
    f = t(45837),
    C = t(888697),
    x = t(26741),
    j = t(636537),
    y = t(844045),
    b = t(375708);
function E(e) {
    if (!(e instanceof j.oh)) return b.intl.string(y.default.CqBvCr);
    if (429 === e.status) return b.intl.string(y.default.yHHcCH);
    if (403 === e.status) return b.intl.string(y.default["Dfnp+b"]);
    switch (e.body?.code) {
        case 575001:
            return b.intl.string(y.default.sw6JQB);
        case 575002:
            return b.intl.string(y.default.repluE);
        case 575003:
            return b.intl.string(y.default.XDjFpR);
        case 575004:
        case 55e4:
            return b.intl.string(y.default.HHJFhr);
        default:
            return b.intl.string(y.default.CqBvCr);
    }
}
var I = t(522435),
    p = t(493819),
    k = t(503698),
    N = t.n(k),
    S = t(17928),
    v = t(890856),
    _ = t(477155),
    A = t(892547),
    R = t(497685),
    G = t(291147),
    H = t(703244),
    D = t(285961),
    T = t(821102),
    F = t(803805),
    M = t(661531),
    P = t(92008),
    U = t(25277),
    w = t(327143),
    L = t(131955),
    O = t(652215),
    z = t(573436);
let q = L.xP.map(function (e) {
    return { type: O.dD.TRENDING_CATEGORY, categoryType: e.type, name: e.name, src: e.previewUrl, format: F.TL.IMAGE };
});
function B(e) {
    let { name: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: z.FP }),
            (0, n.jsx)("div", { className: z.O1, children: (0, n.jsx)("span", { className: z.yb, children: l }) }),
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
                              color: M.A.colors.BACKGROUND_BASE_LOWEST.css,
                              src: u.src,
                              item: u,
                              index: l,
                              coords: s,
                              onClick: () => c(u),
                              renderExtras: B,
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
                (0, n.jsx)(P.f, {
                    ref: a,
                    fade: !0,
                    className: z.jR,
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
        C = s.useCallback(() => (null != a.current ? a.current.getItemGrid() : []), []),
        x = s.useCallback(() => (null != a.current ? a.current.getCoordsMap() : {}), []);
    return (0, n.jsx)(U.A, {
        getItemGrid: C,
        getCoordsMap: x,
        onFocus: d,
        onSelect: o,
        children: (0, n.jsx)(w.A, { desiredItemWidth: 200, maxColumns: 6, children: f }),
    });
}
var K = t(650583);
let W = (e) => e.stopPropagation();
function $(e) {
    let { className: l, onSelectGIF: t, onSelectCategory: r } = e,
        {
            query: a,
            resultQuery: i,
            resultItems: c,
            suggestions: d,
        } = (0, S.cf)([T.A], () => ({
            query: T.A.getQuery(),
            resultQuery: T.A.getResultQuery(),
            resultItems: T.A.getResultItems(),
            suggestions: T.A.getSuggestions(),
        })),
        [o, g] = s.useState(null),
        m = s.useRef(null),
        h = s.useRef(null),
        f = s.useCallback((e, l, t) => {
            R.$P(e, l, t), g("" === e ? null : l);
        }, []),
        C = s.useCallback(
            (e) => {
                let l = h.current;
                t(e, null != l ? { source: "category", categoryType: l } : { source: "custom_search" });
            },
            [t],
        ),
        x = s.useCallback(() => {
            R.Se(), g(null), (h.current = null), m.current?.focus();
        }, []);
    s.useEffect(
        () => (
            R.V$(),
            () => {
                R.Se();
            }
        ),
        [],
    ),
        s.useEffect(() => {
            if (null == o) return;
            let e = (e) => {
                e.key === K.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), x());
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, [o, x]);
    let j = s.useCallback(
            (e) => {
                (h.current = null), f(e, O.dD.SEARCH);
            },
            [f],
        ),
        E = s.useCallback(
            (e) => {
                (h.current = null), R.Se(), f(e, O.dD.SEARCH_SUGGESTION, !0);
            },
            [f],
        ),
        I = s.useCallback(
            (e) => {
                let { name: l, type: t } = e;
                (h.current = t), r?.(t), f(l, O.dD.TRENDING_CATEGORY, !0), m.current?.focus();
            },
            [r, f],
        ),
        p = (0, G.w)((0, H.cf)()),
        k = null != o;
    return (0, n.jsxs)(v.s, {
        className: N()(z.kL, l),
        onClick: W,
        "aria-label": b.intl.string(y.default.yP0hhq),
        children: [
            (0, n.jsx)("div", {
                className: z.wx,
                children: (0, n.jsxs)("div", {
                    className: z.U1,
                    children: [
                        k
                            ? (0, n.jsx)(u.D, {
                                  onClick: x,
                                  className: z.Gv,
                                  "aria-label": b.intl.string(b.t["13/7kX"]),
                                  children: (0, n.jsx)(_.r, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, n.jsx)(A.I, {
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
                className: z.Qs,
                children:
                    null == o
                        ? (0, n.jsx)(Q, { onSelectCategory: I })
                        : (0, n.jsx)(D.Ay, {
                              data: c,
                              onSelectGIF: C,
                              resultType: o,
                              resultQuery: i,
                              query: a,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: c.length,
                              suggestions: d,
                              onSelectSuggestion: E,
                          }),
            }),
        ],
    });
}
t(321073);
var V = t(488428),
    X = t(964486);
let J = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function Y(e, l) {
    null != l.width && null != l.height && e.push({ url: l.proxy_url ?? l.url, width: l.width, height: l.height });
}
var Z = t(462367);
function ee(e) {
    let { item: l, coords: t, onSelect: r } = e,
        a = s.useCallback(() => {
            r(l.url);
        }, [l.url, r]);
    return (0, n.jsx)(u.D, {
        className: Z.Se,
        style: t,
        onClick: a,
        children: (0, n.jsx)("img", { src: l.url, alt: "", className: Z.rx, loading: "lazy" }),
    });
}
function el(e) {
    let { guildId: l, onSelect: t } = e,
        { mediaItems: r, isLoading: a } = (function (e) {
            let [l, t] = s.useState([]),
                [n, r] = s.useState(!0);
            return (
                (0, X.Ay)(() => {
                    if (null == e) return void r(!1);
                    let l = !1;
                    return (
                        j.Bo.get({
                            url: O.Rsh.SEARCH_GUILD(e),
                            query: V.stringify(J),
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
                                                    if (null != e.attachments) for (let t of e.attachments) Y(l, t);
                                                    if (null != e.embeds)
                                                        for (let t of e.embeds) {
                                                            let e = t.image ?? t.thumbnail;
                                                            null != e && Y(l, e);
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
                return null == i ? null : (0, n.jsx)(ee, { item: i, coords: s, onSelect: t }, a);
            },
            [r, t],
        ),
        d = s.useCallback(
            (e) =>
                (0, n.jsx)(P.f, {
                    fade: !0,
                    className: Z.q4,
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
        ? (0, n.jsx)("div", { className: Z.qE, children: (0, n.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, n.jsx)("div", {
                className: Z.HU,
                children: (0, n.jsx)(w.A, { desiredItemWidth: 150, maxColumns: 3, children: d }),
            });
}
let et = (0, t(839214).D)((e, l) => ({
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
                j.Bo.get({
                    url: O.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(t),
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
    en = [
        { gif: t(203736), png: t(775788) },
        { gif: t(640237), png: t(689006) },
        { gif: t(964805), png: t(533798) },
        { gif: t(322821), png: t(891814) },
    ];
function es(e) {
    let { shouldAnimate: l } = e;
    return (0, n.jsx)("div", {
        className: Z.p8,
        children: en.map((e) =>
            (0, n.jsx)("div", { className: Z.Nw, style: { backgroundImage: `url(${l ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function er(e) {
    let { onOpenGIFPicker: l, onOpenRecentUploads: t } = e,
        { shouldAnimate: s, onMouseEnter: r, onMouseLeave: a } = (0, f.A)();
    return (0, n.jsxs)("ul", {
        className: Z.f9,
        children: [
            (0, n.jsx)("li", {
                children: (0, n.jsx)(u.D, {
                    className: Z.uK,
                    onClick: t,
                    children: (0, n.jsxs)("div", {
                        className: Z.Mn,
                        children: [
                            (0, n.jsx)(c.X, { size: "md", color: "currentColor" }),
                            (0, n.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: b.intl.string(y.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, n.jsx)("li", {
                children: (0, n.jsxs)(u.D, {
                    className: Z.uK,
                    onClick: l,
                    onMouseEnter: r,
                    onMouseLeave: a,
                    children: [
                        (0, n.jsx)(es, { shouldAnimate: s }),
                        (0, n.jsxs)("div", {
                            className: Z.MF,
                            children: [
                                (0, n.jsx)(o.O, { size: "md", color: "currentColor" }),
                                (0, n.jsx)(d.E, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: b.intl.string(y.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function ea(e) {
    let { onSelect: l } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(d.E, { variant: "text-sm/semibold", children: b.intl.string(y.default.SQb1dl) }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Z.u2,
                children: b.intl.string(y.default["2THN2i"]),
            }),
            (0, n.jsx)("div", {
                className: Z.si,
                children: L.Kg.map((e, t) => {
                    let { gif: s, png: r } = e;
                    return (0, n.jsx)(
                        u.D,
                        {
                            onClick: () => l(s),
                            children: (0, n.jsx)(p.A, {
                                imageUrl: r,
                                animatedUrl: s,
                                autoPlayOnMount: !0,
                                className: Z.yh,
                            }),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function ei(e) {
    let { guildId: l, hash: t, onSelect: r } = e,
        a = s.useMemo(() => (0, I.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        i = (0, h.S)(a?.imageUrl ?? ""),
        c = s.useCallback(() => r(t), [t, r]);
    return null == a
        ? null
        : (0, n.jsx)(u.D, {
              className: Z.yh,
              style: { backgroundColor: i },
              onClick: c,
              children: (0, n.jsx)(p.A, { imageUrl: a.imageUrl, animatedUrl: a.animatedUrl, className: Z.vA }),
          });
}
function eu(e) {
    let { guildId: l, hashes: t, onSelect: s } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(d.E, { variant: "text-sm/semibold", children: b.intl.string(y.default.dDID2M) }),
            (0, n.jsx)("div", {
                className: Z.si,
                children: t.slice(0, 9).map((e) => (0, n.jsx)(ei, { guildId: l, hash: e, onSelect: s }, e)),
            }),
        ],
    });
}
function ec(e) {
    var l;
    let t,
        u,
        { transitionState: c, onClose: d, channel: o } = e,
        [h, f] = s.useState("HOME"),
        [j, p] = s.useState(null),
        { recentImageHashes: k, isLoading: N } =
            ((l = o.guild_id),
            (t = et.useField("isLoading")),
            (u = et.useField("imageHashes")),
            s.useEffect(() => (null != l && et.getField("fetch")(l), () => et.getField("cancelPendingFetch")()), [l]),
            { recentImageHashes: u, isLoading: t });
    (0, x.$s)({ guildId: o.guild_id, channelId: o.id, contentExists: (0, I.lr)(o) });
    let S = s.useCallback(
            async (e, l, t) => {
                p(null);
                try {
                    await (0, C.Hd)(o.id, e),
                        (0, x.z6)({ guildId: o.guild_id, channelId: o.id, contentType: l, gifCategoryType: t }),
                        d();
                } catch (e) {
                    p(E(e));
                }
            },
            [o.guild_id, o.id, d],
        ),
        v = s.useCallback(
            async (e) => {
                p(null);
                try {
                    await (0, C.B$)(o.id, e),
                        (0, x.z6)({ guildId: o.guild_id, channelId: o.id, contentType: x.cM.RECENT_IMAGE }),
                        d();
                } catch (e) {
                    p(E(e));
                }
            },
            [o.guild_id, o.id, d],
        ),
        _ = s.useCallback(
            (e, l) => {
                let t = e.gifSrc ?? e.src ?? e.url;
                null != t &&
                    ("category" === l.source ? S(t, x.cM.GIF_CATEGORY, l.categoryType) : S(t, x.cM.GIF_CUSTOM_SEARCH));
            },
            [S],
        ),
        A = s.useCallback(
            (e) => {
                (0, x.pZ)({ guildId: o.guild_id, channelId: o.id, categoryType: e });
            },
            [o.guild_id, o.id],
        ),
        R = s.useCallback((e) => S(e, x.cM.RECENT_IMAGE), [S]),
        G = s.useCallback((e) => S(e, x.cM.PRESET_GIF), [S]),
        H = s.useCallback(() => (p(null), f("HOME"), Promise.resolve()), []),
        D = null != j ? (0, n.jsx)(g.w, { type: "critical", children: j }) : null;
    if ("RECENT_UPLOADS" === h) {
        let e = b.intl.string(y.default.aBnIyR);
        return (0, n.jsxs)(r.d, {
            transitionState: c,
            onClose: H,
            size: "md",
            "aria-label": e,
            children: [
                (0, n.jsx)(a.rQ, { title: e, subtitle: b.intl.string(y.default["5VL9Ju"]) }),
                (0, n.jsxs)("div", {
                    className: Z.n3,
                    children: [D, (0, n.jsx)(el, { guildId: o.guild_id, onSelect: R })],
                }),
            ],
        });
    }
    if ("GIF_PICKER" === h) {
        let e = b.intl.string(y.default.HkszWk);
        return (0, n.jsxs)(r.d, {
            transitionState: c,
            onClose: H,
            size: "md",
            "aria-label": e,
            children: [
                (0, n.jsx)(a.rQ, { title: e }),
                (0, n.jsxs)("div", {
                    className: Z.n3,
                    children: [
                        D,
                        (0, n.jsx)("div", {
                            className: Z.SD,
                            children: (0, n.jsx)($, { className: Z.XC, onSelectGIF: _, onSelectCategory: A }),
                        }),
                    ],
                }),
            ],
        });
    }
    return (0, n.jsx)(i.Modal, {
        transitionState: c,
        onClose: d,
        size: "md",
        title: b.intl.string(y.default.yyPbqI),
        subtitle: b.intl.string(y.default["+y6KsI"]),
        notice: null != j ? { message: j, type: "critical" } : void 0,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: Z.jE,
            children: [
                (0, n.jsx)(er, {
                    onOpenGIFPicker: () => {
                        p(null), f("GIF_PICKER");
                    },
                    onOpenRecentUploads: () => {
                        p(null), f("RECENT_UPLOADS");
                    },
                }),
                N
                    ? (0, n.jsx)("div", { className: Z.g4, children: (0, n.jsx)(m.y, {}) })
                    : k.length > 0
                      ? (0, n.jsx)(eu, { guildId: o.guild_id, hashes: k, onSelect: v })
                      : (0, n.jsx)(ea, { onSelect: G }),
            ],
        }),
    });
}
