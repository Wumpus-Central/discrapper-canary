t.d(l, { default: () => eu });
var s = t(627968),
    n = t(64700),
    r = t(224640),
    a = t(20742),
    i = t(189213),
    u = t(939249),
    c = t(750943),
    o = t(834730),
    d = t(391242),
    m = t(683071),
    g = t(289873),
    h = t(743674),
    f = t(45837),
    x = t(888697),
    C = t(636537),
    j = t(844045),
    b = t(375708);
function y(e) {
    if (!(e instanceof C.oh)) return b.intl.string(j.default.CqBvCr);
    if (429 === e.status) return b.intl.string(j.default.yHHcCH);
    if (403 === e.status) return b.intl.string(j.default["Dfnp+b"]);
    switch (e.body?.code) {
        case 575001:
            return b.intl.string(j.default.sw6JQB);
        case 575002:
            return b.intl.string(j.default.repluE);
        case 575003:
            return b.intl.string(j.default.XDjFpR);
        case 575004:
        case 55e4:
            return b.intl.string(j.default.HHJFhr);
        default:
            return b.intl.string(j.default.CqBvCr);
    }
}
var k = t(522435),
    p = t(493819),
    N = t(503698),
    E = t.n(N),
    v = t(17928),
    I = t(890856),
    S = t(477155),
    A = t(892547),
    R = t(497685),
    D = t(291147),
    H = t(703244),
    G = t(285961),
    _ = t(821102),
    F = t(803805),
    P = t(661531),
    w = t(92008),
    L = t(25277),
    U = t(327143),
    O = t(131955),
    M = t(652215),
    T = t(573436);
let z = O.xP.map(function (e) {
    return { type: M.dD.TRENDING_CATEGORY, name: e.name, src: e.previewUrl, format: F.TL.IMAGE };
});
function q(e) {
    let { name: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: T.FP }),
            (0, s.jsx)("div", { className: T.O1, children: (0, s.jsx)("span", { className: T.yb, children: l }) }),
        ],
    });
}
function B(e) {
    let { onSelectCategory: l } = e,
        { imagePool: t, videoPool: r } = (0, G.d5)(),
        a = n.useRef(null),
        [i, u] = n.useState(null),
        c = n.useCallback((e) => {
            let l = a.current;
            if (null == l) return;
            let t = l.getCoordsMap()[e];
            null != t && (l.scrollIntoViewRect({ start: t.top - 10, end: t.top + t.height + 10 }), u(e));
        }, []),
        o = n.useCallback(
            (e) => {
                let t = z.find((l) => l.name === e);
                null != t && l(t.name);
            },
            [l],
        ),
        d = n.useCallback((e, l) => {
            if (e > 0) return null;
            let t = z[l];
            return null != t ? t.name : null;
        }, []),
        m = n.useCallback(() => 110, []),
        g = n.useCallback(
            (e, n, a, u) => {
                if (e > 0) return null;
                let c = z[n];
                return null == c
                    ? null
                    : (0, s.jsx)(
                          G.uG,
                          {
                              format: c.format,
                              color: P.A.colors.BACKGROUND_BASE_LOWEST.css,
                              src: c.src,
                              item: c,
                              index: n,
                              coords: a,
                              onClick: () => l(c.name),
                              renderExtras: q,
                              focused: c.name === i,
                              imagePool: t,
                              videoPool: r,
                          },
                          u,
                      );
            },
            [i, t, r, l],
        ),
        h = n.useCallback(
            (e) =>
                (0, s.jsx)(w.f, {
                    ref: a,
                    fade: !0,
                    className: T.jR,
                    itemGutter: 12,
                    getItemKey: d,
                    columns: e,
                    getItemHeight: m,
                    renderItem: g,
                    sections: [z.length],
                    chunkSize: 50,
                }),
            [m, d, g],
        ),
        f = n.useCallback(() => (null != a.current ? a.current.getItemGrid() : []), []),
        x = n.useCallback(() => (null != a.current ? a.current.getCoordsMap() : {}), []);
    return (0, s.jsx)(L.A, {
        getItemGrid: f,
        getCoordsMap: x,
        onFocus: c,
        onSelect: o,
        children: (0, s.jsx)(U.A, { desiredItemWidth: 200, maxColumns: 6, children: h }),
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
            suggestions: c,
        } = (0, v.cf)([_.A], () => ({
            query: _.A.getQuery(),
            resultQuery: _.A.getResultQuery(),
            resultItems: _.A.getResultItems(),
            suggestions: _.A.getSuggestions(),
        })),
        [o, d] = n.useState(null),
        m = n.useRef(null),
        g = n.useCallback((e, l, t) => {
            R.$P(e, l, t), d("" === e ? null : l);
        }, []),
        h = n.useCallback(() => {
            R.Se(), d(null), m.current?.focus();
        }, []);
    n.useEffect(
        () => (
            R.V$(),
            () => {
                R.Se();
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
                g(e, M.dD.SEARCH);
            },
            [g],
        ),
        x = n.useCallback(
            (e) => {
                R.Se(), g(e, M.dD.SEARCH_SUGGESTION, !0);
            },
            [g],
        ),
        C = n.useCallback(
            (e) => {
                g(e, M.dD.TRENDING_CATEGORY, !0), m.current?.focus();
            },
            [g],
        ),
        y = (0, D.w)((0, H.cf)()),
        k = null != o;
    return (0, s.jsxs)(I.s, {
        className: E()(T.kL, l),
        onClick: Q,
        "aria-label": b.intl.string(j.default.yP0hhq),
        children: [
            (0, s.jsx)("div", {
                className: T.wx,
                children: (0, s.jsxs)("div", {
                    className: T.U1,
                    children: [
                        k
                            ? (0, s.jsx)(u.D, {
                                  onClick: h,
                                  className: T.Gv,
                                  "aria-label": b.intl.string(b.t["13/7kX"]),
                                  children: (0, s.jsx)(S.r, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, s.jsx)(A.I, {
                            query: r,
                            onChange: f,
                            onClear: h,
                            placeholder: y,
                            "aria-label": y,
                            ref: m,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: T.Qs,
                children:
                    null == o
                        ? (0, s.jsx)(B, { onSelectCategory: C })
                        : (0, s.jsx)(G.Ay, {
                              data: i,
                              onSelectGIF: t,
                              resultType: o,
                              resultQuery: a,
                              query: r,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: i.length,
                              suggestions: c,
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
    return (0, s.jsx)(u.D, {
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
                        C.Bo.get({
                            url: M.Rsh.SEARCH_GUILD(e),
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
        u = n.useCallback((e, l) => r[l]?.url ?? null, [r]),
        c = n.useCallback(
            (e, l, n, a) => {
                if (e > 0) return null;
                let i = r[l];
                return null == i ? null : (0, s.jsx)(Z, { item: i, coords: n, onSelect: t }, a);
            },
            [r, t],
        ),
        o = n.useCallback(
            (e) =>
                (0, s.jsx)(w.f, {
                    fade: !0,
                    className: Y.q4,
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
        ? (0, s.jsx)("div", { className: Y.qE, children: (0, s.jsx)(g.y, { type: g.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, s.jsx)("div", {
                className: Y.HU,
                children: (0, s.jsx)(U.A, { desiredItemWidth: 150, maxColumns: 3, children: o }),
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
                C.Bo.get({
                    url: M.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(t),
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
                children: (0, s.jsx)(u.D, {
                    className: Y.uK,
                    onClick: t,
                    children: (0, s.jsxs)("div", {
                        className: Y.Mn,
                        children: [
                            (0, s.jsx)(c.X, { size: "md", color: "currentColor" }),
                            (0, s.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: b.intl.string(j.default.zetfRy),
                            }),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("li", {
                children: (0, s.jsxs)(u.D, {
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
                                    children: b.intl.string(j.default.HkszWk),
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
            (0, s.jsx)(o.E, { variant: "text-sm/semibold", children: b.intl.string(j.default.SQb1dl) }),
            (0, s.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Y.u2,
                children: b.intl.string(j.default["2THN2i"]),
            }),
            (0, s.jsx)("div", {
                className: Y.si,
                children: O.Kg.map((e, t) => {
                    let { gif: n, png: r } = e;
                    return (0, s.jsx)(
                        u.D,
                        {
                            onClick: () => l(n),
                            children: (0, s.jsx)(p.A, {
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
        a = n.useMemo(() => (0, k.Sq)({ guildId: l, bannerHash: t }), [l, t]),
        i = (0, h.S)(a?.imageUrl ?? ""),
        c = n.useCallback(() => r(t), [t, r]);
    return null == a
        ? null
        : (0, s.jsx)(u.D, {
              className: Y.yh,
              style: { backgroundColor: i },
              onClick: c,
              children: (0, s.jsx)(p.A, { imageUrl: a.imageUrl, animatedUrl: a.animatedUrl, className: Y.vA }),
          });
}
function ei(e) {
    let { guildId: l, hashes: t, onSelect: n } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(o.E, { variant: "text-sm/semibold", children: b.intl.string(j.default.dDID2M) }),
            (0, s.jsx)("div", {
                className: Y.si,
                children: t.slice(0, 9).map((e) => (0, s.jsx)(ea, { guildId: l, hash: e, onSelect: n }, e)),
            }),
        ],
    });
}
function eu(e) {
    var l;
    let t,
        u,
        { transitionState: c, onClose: o, channel: d } = e,
        [h, f] = n.useState("HOME"),
        [C, k] = n.useState(null),
        { recentImageHashes: p, isLoading: N } =
            ((l = d.guild_id),
            (t = el.useField("isLoading")),
            (u = el.useField("imageHashes")),
            n.useEffect(() => (null != l && el.getField("fetch")(l), () => el.getField("cancelPendingFetch")()), [l]),
            { recentImageHashes: u, isLoading: t }),
        E = n.useCallback(
            async (e) => {
                k(null);
                try {
                    await (0, x.Hd)(d.id, e), o();
                } catch (e) {
                    k(y(e));
                }
            },
            [d.id, o],
        ),
        v = n.useCallback(
            async (e) => {
                k(null);
                try {
                    await (0, x.B$)(d.id, e), o();
                } catch (e) {
                    k(y(e));
                }
            },
            [d.id, o],
        ),
        I = n.useCallback(
            (e) => {
                let l = e.gifSrc ?? e.src ?? e.url;
                null != l && E(l);
            },
            [E],
        ),
        S = n.useCallback(() => (k(null), f("HOME"), Promise.resolve()), []),
        A = null != C ? (0, s.jsx)(m.w, { type: "critical", children: C }) : null;
    if ("RECENT_UPLOADS" === h) {
        let e = b.intl.string(j.default.aBnIyR);
        return (0, s.jsxs)(r.d, {
            transitionState: c,
            onClose: S,
            size: "md",
            "aria-label": e,
            children: [
                (0, s.jsx)(a.rQ, { title: e, subtitle: b.intl.string(j.default["5VL9Ju"]) }),
                (0, s.jsxs)("div", {
                    className: Y.n3,
                    children: [A, (0, s.jsx)(ee, { guildId: d.guild_id, onSelect: E })],
                }),
            ],
        });
    }
    if ("GIF_PICKER" === h) {
        let e = b.intl.string(j.default.HkszWk);
        return (0, s.jsxs)(r.d, {
            transitionState: c,
            onClose: S,
            size: "md",
            "aria-label": e,
            children: [
                (0, s.jsx)(a.rQ, { title: e }),
                (0, s.jsxs)("div", {
                    className: Y.n3,
                    children: [
                        A,
                        (0, s.jsx)("div", {
                            className: Y.SD,
                            children: (0, s.jsx)(W, { className: Y.XC, onSelectGIF: I }),
                        }),
                    ],
                }),
            ],
        });
    }
    return (0, s.jsx)(i.Modal, {
        transitionState: c,
        onClose: o,
        size: "md",
        title: b.intl.string(j.default.yyPbqI),
        subtitle: b.intl.string(j.default["+y6KsI"]),
        notice: null != C ? { message: C, type: "critical" } : void 0,
        actions: [],
        children: (0, s.jsxs)("div", {
            className: Y.jE,
            children: [
                (0, s.jsx)(en, {
                    onOpenGIFPicker: () => {
                        k(null), f("GIF_PICKER");
                    },
                    onOpenRecentUploads: () => {
                        k(null), f("RECENT_UPLOADS");
                    },
                }),
                N
                    ? (0, s.jsx)("div", { className: Y.g4, children: (0, s.jsx)(g.y, {}) })
                    : p.length > 0
                      ? (0, s.jsx)(ei, { guildId: d.guild_id, hashes: p, onSelect: v })
                      : (0, s.jsx)(er, { onSelect: E }),
            ],
        }),
    });
}
