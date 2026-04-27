t.d(l, { default: () => ec });
var s = t(627968),
    n = t(64700),
    r = t(224640),
    a = t(20742),
    i = t(189213),
    c = t(939249),
    u = t(750943),
    o = t(834730),
    d = t(391242),
    g = t(683071),
    m = t(289873),
    h = t(743674),
    f = t(45837),
    x = t(888697),
    b = t(636537),
    C = t(844045),
    j = t(985018);
function p(e) {
    if (!(e instanceof b.oh)) return j.intl.string(C.default.CqBvCr);
    if (429 === e.status) return j.intl.string(C.default.yHHcCH);
    if (403 === e.status) return j.intl.string(C.default["Dfnp+b"]);
    switch (e.body?.code) {
        case 575001:
            return j.intl.string(C.default.sw6JQB);
        case 575002:
            return j.intl.string(C.default.repluE);
        case 575003:
            return j.intl.string(C.default.XDjFpR);
        case 575004:
        case 55e4:
            return j.intl.string(C.default.HHJFhr);
        default:
            return j.intl.string(C.default.CqBvCr);
    }
}
var _ = t(522435),
    y = t(493819),
    k = t(503698),
    I = t.n(k),
    N = t(17928),
    E = t(890856),
    v = t(477155),
    S = t(892547),
    A = t(497685),
    G = t(291147),
    R = t(703244),
    D = t(285961),
    H = t(821102),
    U = t(803805),
    L = t(661531),
    F = t(92008),
    P = t(25277),
    w = t(327143),
    T = t(131955),
    O = t(652215),
    M = t(573436);
let q = T.xP.map(function (e) {
    return { type: O.dD.TRENDING_CATEGORY, name: e.name, src: e.previewUrl, format: U.TL.IMAGE };
});
function z(e) {
    let { name: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: M.FP }),
            (0, s.jsx)("div", { className: M.O1, children: (0, s.jsx)("span", { className: M.yb, children: l }) }),
        ],
    });
}
function B(e) {
    let { onSelectCategory: l } = e,
        { imagePool: t, videoPool: r } = (0, D.d5)(),
        a = n.useRef(null),
        [i, c] = n.useState(null),
        u = n.useCallback((e) => {
            let l = a.current;
            if (null == l) return;
            let t = l.getCoordsMap()[e];
            null != t && (l.scrollIntoViewRect({ start: t.top - 10, end: t.top + t.height + 10 }), c(e));
        }, []),
        o = n.useCallback(
            (e) => {
                let t = q.find((l) => l.name === e);
                null != t && l(t.name);
            },
            [l],
        ),
        d = n.useCallback((e, l) => {
            if (e > 0) return null;
            let t = q[l];
            return null != t ? t.name : null;
        }, []),
        g = n.useCallback(() => 110, []),
        m = n.useCallback(
            (e, n, a, c) => {
                if (e > 0) return null;
                let u = q[n];
                return null == u
                    ? null
                    : (0, s.jsx)(
                          D.uG,
                          {
                              format: u.format,
                              color: L.A.colors.BACKGROUND_BASE_LOWEST.css,
                              src: u.src,
                              item: u,
                              index: n,
                              coords: a,
                              onClick: () => l(u.name),
                              renderExtras: z,
                              focused: u.name === i,
                              imagePool: t,
                              videoPool: r,
                          },
                          c,
                      );
            },
            [i, t, r, l],
        ),
        h = n.useCallback(
            (e) =>
                (0, s.jsx)(F.f, {
                    ref: a,
                    fade: !0,
                    className: M.jR,
                    itemGutter: 12,
                    getItemKey: d,
                    columns: e,
                    getItemHeight: g,
                    renderItem: m,
                    sections: [q.length],
                    chunkSize: 50,
                }),
            [g, d, m],
        ),
        f = n.useCallback(() => (null != a.current ? a.current.getItemGrid() : []), []),
        x = n.useCallback(() => (null != a.current ? a.current.getCoordsMap() : {}), []);
    return (0, s.jsx)(P.A, {
        getItemGrid: f,
        getCoordsMap: x,
        onFocus: u,
        onSelect: o,
        children: (0, s.jsx)(w.A, { desiredItemWidth: 200, maxColumns: 6, children: h }),
    });
}
var K = t(650583);
let Q = (e) => e.stopPropagation();
function W(e) {
    let { className: l, onSelectGIF: t } = e,
        {
            query: r,
            resultQuery: a,
            resultItems: i,
            suggestions: u,
        } = (0, N.cf)([H.A], () => ({
            query: H.A.getQuery(),
            resultQuery: H.A.getResultQuery(),
            resultItems: H.A.getResultItems(),
            suggestions: H.A.getSuggestions(),
        })),
        [o, d] = n.useState(null),
        g = n.useRef(null),
        m = n.useCallback((e, l, t) => {
            A.$P(e, l, t), d("" === e ? null : l);
        }, []),
        h = n.useCallback(() => {
            A.Se(), d(null), g.current?.focus();
        }, []);
    n.useEffect(
        () => (
            A.V$(),
            () => {
                A.Se();
            }
        ),
        [],
    ),
        n.useEffect(() => {
            if (null == o) return;
            let e = (e) => {
                e.key === K.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), h());
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, [o, h]);
    let f = n.useCallback(
            (e) => {
                m(e, O.dD.SEARCH);
            },
            [m],
        ),
        x = n.useCallback(
            (e) => {
                A.Se(), m(e, O.dD.SEARCH_SUGGESTION, !0);
            },
            [m],
        ),
        b = n.useCallback(
            (e) => {
                m(e, O.dD.TRENDING_CATEGORY, !0), g.current?.focus();
            },
            [m],
        ),
        p = (0, G.w)((0, R.cf)()),
        _ = null != o;
    return (0, s.jsxs)(E.s, {
        className: I()(M.kL, l),
        onClick: Q,
        "aria-label": j.intl.string(C.default.yP0hhq),
        children: [
            (0, s.jsx)("div", {
                className: M.wx,
                children: (0, s.jsxs)("div", {
                    className: M.U1,
                    children: [
                        _
                            ? (0, s.jsx)(c.D, {
                                  onClick: h,
                                  className: M.Gv,
                                  "aria-label": j.intl.string(j.t["13/7kX"]),
                                  children: (0, s.jsx)(v.r, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, s.jsx)(S.I, {
                            query: r,
                            onChange: f,
                            onClear: h,
                            placeholder: p,
                            "aria-label": p,
                            ref: g,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: M.Qs,
                children:
                    null == o
                        ? (0, s.jsx)(B, { onSelectCategory: b })
                        : (0, s.jsx)(D.Ay, {
                              data: i,
                              onSelectGIF: t,
                              resultType: o,
                              resultQuery: a,
                              query: r,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: i.length,
                              suggestions: u,
                              onSelectSuggestion: x,
                          }),
            }),
        ],
    });
}
t(321073);
var V = t(488428),
    X = t(964486);
let $ = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function J(e, l) {
    null != l.width && null != l.height && e.push({ url: l.proxy_url ?? l.url, width: l.width, height: l.height });
}
var Y = t(462367);
function Z(e) {
    let { item: l, coords: t, onSelect: r } = e,
        a = n.useCallback(() => {
            r(l.url);
        }, [l.url, r]);
    return (0, s.jsx)(c.D, {
        className: Y.Se,
        style: t,
        onClick: a,
        children: (0, s.jsx)("img", { src: l.url, alt: "", className: Y.rx, loading: "lazy" }),
    });
}
function ee(e) {
    let { guildId: l, onSelect: t } = e,
        { mediaItems: r, isLoading: a } = (function (e) {
            let [l, t] = n.useState([]),
                [s, r] = n.useState(!0);
            return (
                (0, X.Ay)(() => {
                    if (null == e) return void r(!1);
                    let l = !1;
                    return (
                        b.Bo.get({
                            url: O.Rsh.SEARCH_GUILD(e),
                            query: V.stringify($),
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
                                                    if (null != e.attachments) for (let t of e.attachments) J(l, t);
                                                    if (null != e.embeds)
                                                        for (let t of e.embeds) {
                                                            let e = t.image ?? t.thumbnail;
                                                            null != e && J(l, e);
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
                { mediaItems: l, isLoading: s }
            );
        })(l),
        i = n.useCallback(
            (e, l, t) => {
                if (e > 0) return 0;
                let s = r[l];
                return null == s ? 0 : t * (s.height / s.width);
            },
            [r],
        ),
        c = n.useCallback((e, l) => r[l]?.url ?? null, [r]),
        u = n.useCallback(
            (e, l, n, a) => {
                if (e > 0) return null;
                let i = r[l];
                return null == i ? null : (0, s.jsx)(Z, { item: i, coords: n, onSelect: t }, a);
            },
            [r, t],
        ),
        o = n.useCallback(
            (e) =>
                (0, s.jsx)(F.f, {
                    fade: !0,
                    className: Y.q4,
                    columns: e,
                    sections: [r.length],
                    itemGutter: 8,
                    getItemKey: c,
                    getItemHeight: i,
                    renderItem: u,
                    chunkSize: 128,
                }),
            [r, c, i, u],
        );
    return a
        ? (0, s.jsx)("div", { className: Y.qE, children: (0, s.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, s.jsx)("div", {
                className: Y.HU,
                children: (0, s.jsx)(w.A, { desiredItemWidth: 150, maxColumns: 3, children: o }),
            });
}
let el = (0, t(839214).D)((e, l) => ({
        imageHashes: [],
        isLoading: !1,
        guildId: null,
        abortController: null,
        cancelPendingFetch: () => {
            let { abortController: t } = l();
            null != t && (t.abort(), e({ abortController: null, isLoading: !1 }));
        },
        fetch: (t) => {
            let s = l();
            if (s.isLoading && s.guildId === t) return;
            s.cancelPendingFetch();
            let n = new AbortController();
            e({ isLoading: !0, guildId: t, abortController: n, imageHashes: [] }),
                b.Bo.get({
                    url: O.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(t),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                    signal: n.signal,
                })
                    .then((s) => {
                        l().guildId === t &&
                            e({ imageHashes: s.body.image_hashes, isLoading: !1, abortController: null });
                    })
                    .catch(() => {
                        n.signal.aborted ||
                            (l().guildId === t && e({ imageHashes: [], isLoading: !1, abortController: null }));
                    });
        },
    })),
    et = [
        { gif: t(203736), png: t(775788) },
        { gif: t(640237), png: t(689006) },
        { gif: t(964805), png: t(533798) },
        { gif: t(322821), png: t(891814) },
    ];
function es(e) {
    let { shouldAnimate: l } = e;
    return (0, s.jsx)("div", {
        className: Y.p8,
        children: et.map((e) =>
            (0, s.jsx)("div", { className: Y.Nw, style: { backgroundImage: `url(${l ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function en(e) {
    let { onOpenGIFPicker: l, onOpenRecentUploads: t } = e,
        { shouldAnimate: n, onMouseEnter: r, onMouseLeave: a } = (0, f.A)();
    return (0, s.jsxs)("ul", {
        className: Y.f9,
        children: [
            (0, s.jsx)("li", {
                children: (0, s.jsx)(c.D, {
                    className: Y.uK,
                    onClick: t,
                    children: (0, s.jsxs)("div", {
                        className: Y.Mn,
                        children: [
                            (0, s.jsx)(u.X, { size: "md", color: "currentColor" }),
                            (0, s.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: j.intl.string(C.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("li", {
                children: (0, s.jsxs)(c.D, {
                    className: Y.uK,
                    onClick: l,
                    onMouseEnter: r,
                    onMouseLeave: a,
                    children: [
                        (0, s.jsx)(es, { shouldAnimate: n }),
                        (0, s.jsxs)("div", {
                            className: Y.MF,
                            children: [
                                (0, s.jsx)(d.O, { size: "md", color: "currentColor" }),
                                (0, s.jsx)(o.E, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: j.intl.string(C.default.HkszWk),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function er(e) {
    let { onSelect: l } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(o.E, { variant: "text-sm/semibold", children: j.intl.string(C.default.SQb1dl) }),
            (0, s.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Y.u2,
                children: j.intl.string(C.default["2THN2i"]),
            }),
            (0, s.jsx)("div", {
                className: Y.si,
                children: T.Kg.map((e, t) => {
                    let { gif: n, png: r } = e;
                    return (0, s.jsx)(
                        c.D,
                        {
                            onClick: () => l(n),
                            children: (0, s.jsx)(y.A, {
                                imageUrl: r,
                                animatedUrl: n,
                                autoPlayOnMount: !0,
                                className: Y.yh,
                            }),
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function ea(e) {
    let { guildId: l, hash: t, onSelect: r } = e,
        a = n.useMemo(() => (0, _.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        i = (0, h.S)(a?.imageUrl ?? ""),
        u = n.useCallback(() => r(t), [t, r]);
    return null == a
        ? null
        : (0, s.jsx)(c.D, {
              className: Y.yh,
              style: { backgroundColor: i },
              onClick: u,
              children: (0, s.jsx)(y.A, { imageUrl: a.imageUrl, animatedUrl: a.animatedUrl, className: Y.vA }),
          });
}
function ei(e) {
    let { guildId: l, hashes: t, onSelect: n } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(o.E, { variant: "text-sm/semibold", children: j.intl.string(C.default.dDID2M) }),
            (0, s.jsx)("div", {
                className: Y.si,
                children: t.slice(0, 9).map((e) => (0, s.jsx)(ea, { guildId: l, hash: e, onSelect: n }, e)),
            }),
        ],
    });
}
function ec(e) {
    var l;
    let t,
        c,
        { transitionState: u, onClose: o, channel: d } = e,
        [h, f] = n.useState("HOME"),
        [b, _] = n.useState(null),
        { recentImageHashes: y, isLoading: k } =
            ((l = d.guild_id),
            (t = el.useField("isLoading")),
            (c = el.useField("imageHashes")),
            n.useEffect(() => (null != l && el.getField("fetch")(l), () => el.getField("cancelPendingFetch")()), [l]),
            { recentImageHashes: c, isLoading: t }),
        I = n.useCallback(
            async (e) => {
                _(null);
                try {
                    await (0, x.Hd)(d.id, e), o();
                } catch (e) {
                    _(p(e));
                }
            },
            [d.id, o],
        ),
        N = n.useCallback(
            async (e) => {
                _(null);
                try {
                    await (0, x.B$)(d.id, e), o();
                } catch (e) {
                    _(p(e));
                }
            },
            [d.id, o],
        ),
        E = n.useCallback(
            (e) => {
                let l = e.gifSrc ?? e.src ?? e.url;
                null != l && I(l);
            },
            [I],
        ),
        v = n.useCallback(() => (_(null), f("HOME"), Promise.resolve()), []),
        S = null != b ? (0, s.jsx)(g.w, { type: "critical", children: b }) : null;
    return "RECENT_UPLOADS" === h
        ? (0, s.jsxs)(r.d, {
              transitionState: u,
              onClose: v,
              size: "md",
              children: [
                  (0, s.jsx)(a.rQ, {
                      title: j.intl.string(C.default.aBnIyR),
                      subtitle: j.intl.string(C.default["5VL9Ju"]),
                  }),
                  (0, s.jsxs)("div", {
                      className: Y.n3,
                      children: [S, (0, s.jsx)(ee, { guildId: d.guild_id, onSelect: I })],
                  }),
              ],
          })
        : "GIF_PICKER" === h
          ? (0, s.jsxs)(r.d, {
                transitionState: u,
                onClose: v,
                size: "md",
                children: [
                    (0, s.jsx)(a.rQ, { title: j.intl.string(C.default.HkszWk) }),
                    (0, s.jsxs)("div", {
                        className: Y.n3,
                        children: [
                            S,
                            (0, s.jsx)("div", {
                                className: Y.SD,
                                children: (0, s.jsx)(W, { className: Y.XC, onSelectGIF: E }),
                            }),
                        ],
                    }),
                ],
            })
          : (0, s.jsx)(i.Modal, {
                transitionState: u,
                onClose: o,
                size: "md",
                title: j.intl.string(C.default.yyPbqI),
                subtitle: j.intl.string(C.default["+y6KsI"]),
                notice: null != b ? { message: b, type: "critical" } : void 0,
                actions: [],
                children: (0, s.jsxs)("div", {
                    className: Y.jE,
                    children: [
                        (0, s.jsx)(en, {
                            onOpenGIFPicker: () => {
                                _(null), f("GIF_PICKER");
                            },
                            onOpenRecentUploads: () => {
                                _(null), f("RECENT_UPLOADS");
                            },
                        }),
                        k
                            ? (0, s.jsx)("div", { className: Y.g4, children: (0, s.jsx)(m.y, {}) })
                            : y.length > 0
                              ? (0, s.jsx)(ei, { guildId: d.guild_id, hashes: y, onSelect: N })
                              : (0, s.jsx)(er, { onSelect: I }),
                    ],
                }),
            });
}
