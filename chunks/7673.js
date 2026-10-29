(n.r(t), n.d(t, { layoutSystemCollection: () => tR, layoutSystemConfig: () => tD }));
var l = n(477900),
    a = n(582128),
    r = n(834730),
    s = n(297264),
    i = n(821609),
    o = n(976860),
    c = n(105292);
let d = {
    COLLECTIBLES_SHOP_THE_VAULT_COLLECTION: c.t["/35Yzx"],
    COLLECTIBLES_SHOP_THE_COLLECTION: c.t.xYKa1T,
    COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT: c.t.Yr70c4,
    COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON: c.t.AfrvRD,
    COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON_BROWSE: c.t["i/yzHs"],
    COLLECTIBLES_FIND_YOUR_STYLE_SECTION_HEADER: c.t.NSv5KV,
    COLLECTIBLES_FIND_YOUR_STYLE_SECTION_DISCLAIMER_SHORT: c.t.euks4U,
    TAKE_ME_THERE: c.t.jVcuVY,
    GLOBAL_DISCOVERY_QUESTS_HOME_ORBS_INTRO_TITLE: c.t.BCBIlp,
    GLOBAL_DISCOVERY_QUESTS_HOME_ORBS_INTRO_DESCRIPTION: c.t.U9FY0J,
    GO_TO_QUEST_HOME_CTA: c.t["1CdL8d"],
};
function u(e) {
    if (e in d) {
        let t = c.intl.string(d[e]);
        if ("" !== t) return t;
    }
    return e;
}
let h = function (e) {
        let { href: t, ctaText: n, variant: a = "secondary" } = e,
            r = u(n);
        return (0, l.jsx)(i.$, {
            variant: a,
            text: r,
            onClick: () => {
                (0, o.pX)(t);
            },
        });
    },
    m = function (e) {
        let { content: t, ...n } = e,
            a = u(String(t));
        return (0, l.jsx)(s.D, { ...n, children: a });
    };
var x = n(331322);
let p = function (e) {
        let { gap: t = 24, ...n } = e;
        return (0, l.jsx)(x.B, { ...n, gap: t });
    },
    b = function (e) {
        let { content: t, ...n } = e,
            a = u(String(t));
        return (0, l.jsx)(r.E, { ...n, children: a });
    };
var g = n(866665);
let f = function (e) {
    let { text: t, ...n } = e,
        a = u(String(t));
    return (0, l.jsx)(g.m, { text: a, ...n, asContainer: !0 });
};
var j = n(503698),
    v = n.n(j),
    y = n(123292),
    k = n(770178),
    S = n(152858),
    E = n(15447);
function C(e) {
    let { index: t, active: n, setPage: a } = e;
    return (0, l.jsx)("div", {
        className: v()(E.page, { [E.active]: n }),
        children: (0, l.jsx)(y.Q, {
            role: "button",
            variant: n ? "always-white" : "secondary",
            size: "sm",
            text: (t + 1).toString(),
            onClick: () => a(t),
        }),
    });
}
function T(e) {
    let { page: t, pages: n, setPage: r } = e,
        [s, i] = a.useState(0),
        o = (0, k.w)((e) => {
            let { contentRect: t } = e;
            i(t.width);
        }),
        c = a.useMemo(() => {
            let e;
            if (null == n || n < 1) return null;
            let a = Math.min(8, Math.max(3, Math.floor((s - 160) / 32)));
            if (n <= a) e = Array.from({ length: n }, (e, t) => t);
            else {
                let l = a - 2,
                    r = Math.max(1, t - Math.floor(l / 2)),
                    s = Math.min(n - 2, r + l - 1);
                r = Math.max(1, s - l + 1);
                let i = Array.from({ length: l }, (e, t) => r + t);
                (r > 1 && (i[0] = "ellipsis"), s < n - 2 && (i[i.length - 1] = "ellipsis"), (e = [0, ...i, n - 1]));
            }
            return e.map((e, n) =>
                "number" == typeof e
                    ? (0, l.jsx)(C, { index: e, active: t === e, setPage: r }, e)
                    : (0, l.jsx)(
                          "div",
                          { className: E.page, children: (0, l.jsx)(b, { variant: "text-md/bold", content: "..." }) },
                          `ellipsis-${n}`,
                      ),
            );
        }, [t, n, r, s]);
    return (0, l.jsx)("div", {
        ref: o,
        className: E.pagination,
        children: (0, l.jsxs)(p, {
            direction: "horizontal",
            justify: "center",
            align: "center",
            children: [
                (0, l.jsx)(y.Q, {
                    variant: "secondary",
                    disabled: 0 === t,
                    text: "Back",
                    onClick: () => {
                        r(t - 1);
                    },
                }),
                (0, l.jsx)("div", {
                    className: E.pageNumbers,
                    children: (0, l.jsx)(p, {
                        direction: "horizontal",
                        justify: "center",
                        align: "center",
                        children: c,
                    }),
                }),
                (0, l.jsx)(y.Q, {
                    variant: "secondary",
                    disabled: t === n - 1,
                    text: "Next",
                    onClick: () => {
                        r(t + 1);
                    },
                }),
            ],
        }),
    });
}
let I = a.createContext(void 0);
function w(e, t, n, l) {
    return null == t || null == n ? e : l ? e.slice(0, n) : e.slice(n * t, n * (t + 1));
}
function L(e, t, n) {
    let {
            paginationStrategy: l = S.oV.PAGINATE,
            perPage: r,
            paginationPosition: s = "bottom",
            scrollToTop: i = !0,
        } = t ?? {},
        o = l === S.oV.TRUNCATE,
        [c, d] = a.useState(0),
        [u, h] = a.useState(r),
        [m, x] = a.useState(e),
        p = null == r || r < 1 ? 0 : Math.ceil(e / r),
        b = null != r && r > 0;
    return (
        (u !== r || m !== e) && (h(r), x(e), d(0)),
        {
            page: c,
            pages: p,
            paginate: b,
            showPagination: !o && b && p > 1,
            paginationPosition: s,
            truncate: o,
            perPage: r,
            setPage: a.useCallback(
                (e) => {
                    (d(e),
                        i && n?.current != null && n.current.scrollIntoView({ behavior: "instant", block: "start" }));
                },
                [i, n],
            ),
        }
    );
}
let V = function (e) {
        let { columns: t = 3, paginationOptions: n, children: r } = e,
            s = Math.max(1, Math.min(6, Math.floor(t))),
            i = a.Children.count(r),
            o = a.useRef(null),
            {
                page: c,
                pages: d,
                paginate: u,
                showPagination: h,
                paginationPosition: m,
                truncate: x,
                perPage: p,
                setPage: b,
            } = L(i, n, o),
            g = a.useMemo(() => w(a.Children.toArray(r), u ? c : void 0, p, x), [c, p, r, u, x]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                h && "top" === m && (0, l.jsx)(T, { page: c, pages: d, setPage: b }),
                (0, l.jsx)(I.Provider, {
                    value: n,
                    children: (0, l.jsx)("div", {
                        ref: o,
                        className: E.gridContainer,
                        children: (0, l.jsx)("div", { className: v()(E.grid, E[`columns${s}`]), children: g }),
                    }),
                }),
                h && "bottom" === m && (0, l.jsx)(T, { page: c, pages: d, setPage: b }),
            ],
        });
    },
    A = function (e) {
        let { verticalMargin: t = 16, padding: n = 0, children: a } = e;
        return (0, l.jsx)("section", {
            style: { alignSelf: "start", width: "100%", marginTop: t, marginBottom: t, padding: n },
            children: a,
        });
    };
var _ = n(607470);
(n(323874), n(14289), n(35956), n(321073));
var P = n(435558),
    O = n(736653);
let M = {
        gif: "image/gif",
        webp: "image/webp",
        apng: "image/apng",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        mp4: "video/mp4",
        webm: "video/webm",
        mov: "video/quicktime",
    },
    F = new Set(["video/mp4", "video/webm", "video/quicktime"]);
function B(e) {
    return null != e && F.has(e);
}
let N = [],
    H = new Map(),
    R = new Map();
function D(e, t) {
    if (null != e) return (0, P.isString)(e) ? e : "light" === t ? e.light : e.dark;
}
function U(e) {
    try {
        let t = new URL(e).pathname;
        return M[t.split(".").pop()?.toLowerCase() ?? ""];
    } catch {
        return M[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""];
    }
}
let G = function (e) {
    let t = (0, O.Ay)(),
        n = a.useMemo(() => {
            var n;
            return null == e
                ? N
                : ((n = Array.isArray(e) ? e : [e]),
                  n.flatMap((e) => {
                      if (null == e) return [];
                      if ("object" == typeof e && "src" in e) {
                          let n = D(e.src, t);
                          return null == n ? [] : [{ src: n, alt: e.alt, mimeType: U(n) }];
                      }
                      let n = D(e, t);
                      return null != n ? [{ src: n, mimeType: U(n) }] : [];
                  }));
        }, [e, t]),
        [l, r] = a.useState({}),
        [s, i] = a.useState(new Set());
    return (
        a.useEffect(() => {
            if (0 === n.length) return;
            let e = {},
                t = [];
            for (let { src: l, mimeType: a } of n) null == a && (H.has(l) ? (e[l] = H.get(l)) : t.push(l));
            if (0 === Object.keys(e).length && 0 === t.length) return;
            let l = !1;
            return (
                (async function () {
                    let n =
                        t.length > 0
                            ? await Promise.all(
                                  t.map(async (e) => [
                                      e,
                                      await (function (e) {
                                          if (H.has(e)) return Promise.resolve({ mimeType: H.get(e), status: void 0 });
                                          let t = R.get(e);
                                          if (null != t) return t;
                                          let n = fetch(e, { method: "HEAD" })
                                              .then((t) => {
                                                  if (!t.ok) return { mimeType: void 0, status: t.status };
                                                  let n = (t.headers.get("Content-Type") ?? "").split(";")[0].trim(),
                                                      l = "" !== n ? n : void 0;
                                                  return (H.set(e, l), { mimeType: l, status: t.status });
                                              })
                                              .catch(() => ({ mimeType: void 0, status: void 0 }))
                                              .finally(() => R.delete(e));
                                          return (R.set(e, n), n);
                                      })(e),
                                  ]),
                              )
                            : [];
                    if (!l) {
                        let t = {},
                            l = [];
                        for (let [e, a] of n) null != a.status && a.status >= 400 ? l.push(e) : (t[e] = a.mimeType);
                        (r((n) => ({ ...n, ...e, ...t })), l.length > 0 && i((e) => new Set([...e, ...l])));
                    }
                })(),
                () => {
                    l = !0;
                }
            );
        }, [n]),
        a.useMemo(() => {
            if (0 === n.length) return null;
            let e = n.map((e) => ({ ...e, mimeType: e.mimeType ?? l[e.src] }));
            return e.find((e) => !s.has(e.src)) ?? e[0];
        }, [n, l, s])
    );
};
var Y = n(169819);
let $ = function (e) {
    let {
            backgroundImage: t,
            backgroundSize: n = "cover",
            backgroundPosition: a = "center",
            backgroundRepeat: r = "no-repeat",
            backgroundColor: s,
            padding: i = 16,
            children: o,
        } = e,
        c = G(t),
        d = B(c?.mimeType);
    return (0, l.jsxs)("div", {
        className: Y.k,
        style: {
            ...(!d && null != c ? { backgroundImage: `url(${c.src})` } : {}),
            backgroundSize: n,
            backgroundPosition: a,
            backgroundRepeat: r,
            backgroundColor: s,
            padding: i,
        },
        children: [
            d &&
                null != c &&
                (0, l.jsx)(_.A, { className: Y.O, src: c.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            o,
        ],
    });
};
var z = n(219407);
let W = function (e) {
    let { children: t, overflowable: n = !1 } = e;
    return (0, l.jsx)("div", { className: v()(z.N, { [z.L]: n }), children: t });
};
function K() {
    return (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120, minWidth: 120 } });
}
var Q = n(939249),
    q = n(715333);
let J = function (e) {
    let { src: t } = e,
        n = G(t);
    return null == n
        ? null
        : B(n.mimeType)
          ? (0, l.jsx)(_.A, { className: q.S, src: n.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, l.jsx)("img", { className: q.S, src: n.src, alt: n.alt ?? "" });
};
var X = n(948111);
let Z = function (e) {
    let { backgroundImage: t, logoSrc: n, supplementalImage: a, href: r, ctaText: s } = e,
        i = null != r;
    return (0, l.jsxs)(Q.D, {
        className: X.rJ,
        onClick: i
            ? (e) => {
                  (e.preventDefault(), (0, o.pX)(r));
              }
            : void 0,
        children: [
            (0, l.jsx)(W, {
                overflowable: !0,
                children: (0, l.jsx)($, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, l.jsx)("div", {
                        className: X.rf,
                        children: (0, l.jsxs)("div", {
                            className: X.kb,
                            children: [
                                (0, l.jsx)("div", {}),
                                null != n &&
                                    (0, l.jsx)("div", { className: X.wm, children: (0, l.jsx)(J, { src: n }) }),
                                null != s && (0, l.jsx)(h, { ctaText: s, variant: "overlay-primary", href: r }),
                            ],
                        }),
                    }),
                }),
            }),
            null != a && (0, l.jsx)("div", { className: X.hP, children: (0, l.jsx)(J, { src: a }) }),
        ],
    });
};
var ee = n(713517),
    et = n(715591);
function en(e) {
    let { position: t, children: n } = e;
    return (0, l.jsx)("div", { className: v()(et.child, et[t]), children: n });
}
let el = (e) => {
    let { children: t, paused: n = !1, slideDuration: r = 5e3 } = e,
        [s, i] = a.useState(0),
        o = a.useRef(null),
        c = (0, ee.M)(o),
        d = a.useRef(void 0),
        u = a.useMemo(
            () =>
                a.Children.map(t, (e) =>
                    a.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : a.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        );
    a.useEffect(() => {
        Array.isArray(u) ? i(s >= u?.length ? Math.max(u?.length - 1, 0) : s) : i(0);
    }, [u, s]);
    let h = n || c;
    return (a.useEffect(() => {
        if (h) {
            null != d.current && (window.clearTimeout(d.current), (d.current = void 0));
            return;
        }
        (window.clearTimeout(d.current),
            (d.current = window.setTimeout(function e() {
                (i((e) => {
                    let t = e + 1;
                    return t >= (u?.length ?? 1) ? 0 : t;
                }),
                    (d.current = window.setTimeout(e, r)));
            }, r)));
    }, [h, r, u]),
    a.useEffect(
        () => () => {
            window.clearTimeout(d.current);
        },
        [],
    ),
    null == u)
        ? null
        : Array.isArray(u)
          ? (0, l.jsx)("div", {
                ref: o,
                className: et.carousel,
                children: (0, l.jsx)("div", {
                    className: et.children,
                    children: u?.map((e, t) => {
                        var n, a, r;
                        let i =
                            ((n = t),
                            (a = s),
                            (r = u.length),
                            n === a
                                ? "center"
                                : n < a
                                  ? a === r - 1 && 0 === n
                                      ? "right"
                                      : "left"
                                  : 0 === a && n === r - 1
                                    ? "left"
                                    : "right");
                        return (0, l.jsx)(en, { position: i, children: e }, t);
                    }),
                }),
            })
          : (0, l.jsx)("div", {
                ref: o,
                className: et.carousel,
                children: (0, l.jsx)("div", {
                    className: et.children,
                    children: (0, l.jsx)(en, { position: "center", children: t }),
                }),
            });
};
function ea() {
    return (0, l.jsx)("div", {
        style: { display: "flex", justifyContent: "center", alignItems: "center" },
        children: (0, l.jsx)("div", { style: { height: 96, width: 96, borderRadius: 48, background: "grey" } }),
    });
}
function er() {
    return (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 240 } });
}
var es = n(395399);
let ei = function (e) {
        let { colors: t, angle: n = 180, padding: r = 16, children: s } = e,
            i = a.useMemo(() => {
                if (t.length > 1) return `linear-gradient(${n}deg, ${t.join(", ")})`;
                if (t.length > 0) {
                    let e = t[0];
                    return `linear-gradient(${n}deg, ${e}, ${e})`;
                }
            }, [t, n]);
        return (0, l.jsx)("div", { className: es.k, style: { backgroundImage: i, padding: r }, children: s });
    },
    eo = function (e) {
        let { children: t, columns: n = 1, rows: a = 1 } = e,
            r = Math.max(1, Math.min(6, Math.floor(n))),
            s = Math.max(1, Math.min(6, Math.floor(a))),
            i = E[`gridItemColumns${r}`],
            o = E[`gridItemRows${s}`];
        return (0, l.jsx)("div", { className: `${E.gridItem} ${i} ${o}`, children: t });
    };
function ec(e) {
    let { color: t, children: n } = e;
    return (0, l.jsx)("div", {
        style: {
            background: t,
            minHeight: 120,
            height: "100%",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
        },
        children: n,
    });
}
let ed = {
    name: "Grid",
    id: "grid",
    component: function (e) {
        let {
            columns: t,
            paginationStrategy: n,
            perPage: a,
            paginationPosition: s,
            gridItemColumns: i,
            gridItemRows: o,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.E, {
                    variant: "text-lg/semibold",
                    children:
                        "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                }),
                (0, l.jsx)("br", {}),
                (0, l.jsx)(r.E, {
                    variant: "text-lg/semibold",
                    children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                }),
                (0, l.jsx)("div", {
                    style: { marginTop: 24 },
                    children: (0, l.jsxs)(V, {
                        columns: t,
                        paginationOptions: { paginationStrategy: n, perPage: a, paginationPosition: s },
                        children: [
                            (0, l.jsx)(ec, { color: "red" }),
                            (0, l.jsx)(eo, {
                                columns: i,
                                rows: o,
                                children: (0, l.jsx)(ec, {
                                    color: "orange",
                                    children: (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "GridItem" }),
                                }),
                            }),
                            (0, l.jsx)(ec, { color: "yellow" }),
                            (0, l.jsx)(ec, { color: "green" }),
                            (0, l.jsx)(ec, { color: "blue" }),
                            (0, l.jsx)(ec, { color: "violet" }),
                            (0, l.jsx)(ec, { color: "red" }),
                            (0, l.jsx)(ec, { color: "orange" }),
                            (0, l.jsx)(ec, { color: "yellow" }),
                            (0, l.jsx)(ec, { color: "green" }),
                            (0, l.jsx)(ec, { color: "blue" }),
                            (0, l.jsx)(ec, { color: "violet" }),
                            (0, l.jsx)(ec, { color: "red" }),
                            (0, l.jsx)(ec, { color: "orange" }),
                            (0, l.jsx)(ec, { color: "yellow" }),
                            (0, l.jsx)(ec, { color: "green" }),
                            (0, l.jsx)(ec, { color: "blue" }),
                            (0, l.jsx)(ec, { color: "violet" }),
                            (0, l.jsx)(ec, { color: "red" }),
                            (0, l.jsx)(ec, { color: "orange" }),
                            (0, l.jsx)(ec, { color: "yellow" }),
                            (0, l.jsx)(ec, { color: "green" }),
                            (0, l.jsx)(ec, { color: "blue" }),
                            (0, l.jsx)(ec, {
                                color: "violet",
                                children: (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Last Child" }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    controls: {
        columns: { label: "Columns", type: "number", defaultValue: 3 },
        paginationStrategy: {
            label: "Pagination Strategy",
            type: "select",
            defaultValue: S.oV.PAGINATE,
            options: [
                { label: "Paginate", value: S.oV.PAGINATE },
                { label: "Truncate", value: S.oV.TRUNCATE },
            ],
        },
        perPage: { label: "Grid Items per Page (default, all)", type: "number", defaultValue: 3 },
        paginationPosition: {
            label: "Pagination Position",
            type: "select",
            defaultValue: "bottom",
            options: [
                { label: "Top", value: "top" },
                { label: "Bottom", value: "bottom" },
            ],
        },
        gridItemColumns: { label: "Grid Item Columns", type: "number", defaultValue: 1 },
        gridItemRows: { label: "Grid Item Rows", type: "number", defaultValue: 1 },
    },
};
var eu = n(150934),
    eh = n(95477),
    em = n(691885),
    ex = n(349738),
    ep = n(449543),
    eb = n(196637);
let eg = [
    { id: "xxs", label: "xxs", value: "xxs" },
    { id: "xs", label: "xs", value: "xs" },
    { id: "sm", label: "sm", value: "sm" },
    { id: "md", label: "md", value: "md" },
    { id: "lg", label: "lg", value: "lg" },
    { id: "xl", label: "xl", value: "xl" },
    { id: "xxl", label: "xxl", value: "xxl" },
    { id: "none", label: "0px", value: 0 },
    { id: "4px", label: "4px", value: 4 },
    { id: "6px", label: "6px", value: 6 },
    { id: "8px", label: "8px", value: 8 },
    { id: "12px", label: "12px", value: 12 },
    { id: "16px", label: "16px", value: 16 },
    { id: "20px", label: "20px", value: 20 },
    { id: "24px", label: "24px", value: 24 },
    { id: "32px", label: "32px", value: 32 },
    { id: "40px", label: "40px", value: 40 },
];
function ef() {
    return (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120 } });
}
var ej = n(674658),
    ev = n(905276),
    ey = n(561769);
let ek = function (e) {
    let { skuId: t, aspectRatio: n } = e,
        { product: r } = (0, ej.q)(t, !0),
        {
            flattenProductVariants: s,
            productOverride: i,
            prioritizedCurrency: o,
            standalonePreview: c,
        } = a.useContext(ey.v3),
        d = a.useMemo(
            () => ({
                flattenProductVariants: s ?? !1,
                productOverride: i,
                prioritizedCurrency: o,
                standalonePreview: c,
            }),
            [s, i, o, c],
        );
    return null == r
        ? null
        : (0, l.jsx)(ey.v3.Provider, { value: d, children: (0, l.jsx)(ev.A, { skuId: t, aspectRatio: n }) });
};
var eS = n(19641);
function eE() {
    return (0, l.jsx)("div", { className: eS.iM });
}
let eC = function (e) {
        let { children: t } = e,
            n = a.useMemo(
                () =>
                    a.Children.map(t, (e) =>
                        (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", { className: eS.jf, children: e }), (0, l.jsx)(eE, {})],
                        }),
                    ),
                [t],
            );
        return (0, l.jsx)("div", { className: eS.qV, children: (0, l.jsx)("div", { className: eS.Y_, children: n }) });
    },
    eT = {
        title: "Containers",
        stories: [
            ed,
            {
                name: "Card",
                id: "card",
                component: function () {
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children:
                                    "Card wraps its children in a container that has border-radius and elevation on hover.",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children:
                                    "It will take up the full width of the parent, and the minimum height for its children",
                            }),
                            (0, l.jsxs)(A, {
                                children: [
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: { background: "red" },
                                            children: (0, l.jsx)(K, {}),
                                        }),
                                    }),
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: { background: "orange" },
                                            children: (0, l.jsx)(K, {}),
                                        }),
                                    }),
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: { background: "yellow" },
                                            children: (0, l.jsx)(K, {}),
                                        }),
                                    }),
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: { background: "green" },
                                            children: (0, l.jsx)(K, {}),
                                        }),
                                    }),
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: { background: "blue" },
                                            children: (0, l.jsx)(K, {}),
                                        }),
                                    }),
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: { background: "violet" },
                                            children: (0, l.jsx)(K, {}),
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(A, {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: "Cards inside of a horizontal stack with a min-width of 120px",
                                    }),
                                    (0, l.jsxs)(p, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(W, {
                                                children: (0, l.jsx)("div", {
                                                    style: { background: "red" },
                                                    children: (0, l.jsx)(K, {}),
                                                }),
                                            }),
                                            (0, l.jsx)(W, {
                                                children: (0, l.jsx)("div", {
                                                    style: { background: "orange" },
                                                    children: (0, l.jsx)(K, {}),
                                                }),
                                            }),
                                            (0, l.jsx)(W, {
                                                children: (0, l.jsx)("div", {
                                                    style: { background: "yellow" },
                                                    children: (0, l.jsx)(K, {}),
                                                }),
                                            }),
                                            (0, l.jsx)(W, {
                                                children: (0, l.jsx)("div", {
                                                    style: { background: "green" },
                                                    children: (0, l.jsx)(K, {}),
                                                }),
                                            }),
                                            (0, l.jsx)(W, {
                                                children: (0, l.jsx)("div", {
                                                    style: { background: "blue" },
                                                    children: (0, l.jsx)(K, {}),
                                                }),
                                            }),
                                            (0, l.jsx)(W, {
                                                children: (0, l.jsx)("div", {
                                                    style: { background: "violet" },
                                                    children: (0, l.jsx)(K, {}),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                controls: {},
            },
            {
                name: "Section",
                id: "section",
                component: function (e) {
                    let { verticalMargin: t, padding: n } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children:
                                    "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children.",
                            }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)("div", {
                                        style: { background: "red" },
                                        children: (0, l.jsx)(A, {
                                            verticalMargin: t,
                                            padding: n,
                                            children: (0, l.jsx)(ef, {}),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        style: { background: "orange" },
                                        children: (0, l.jsx)(A, {
                                            verticalMargin: t,
                                            padding: n,
                                            children: (0, l.jsx)(ef, {}),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        style: { background: "yellow" },
                                        children: (0, l.jsx)(A, {
                                            verticalMargin: t,
                                            padding: n,
                                            children: (0, l.jsx)(ef, {}),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        style: { background: "green" },
                                        children: (0, l.jsx)(A, {
                                            verticalMargin: t,
                                            padding: n,
                                            children: (0, l.jsx)(ef, {}),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        style: { background: "blue" },
                                        children: (0, l.jsx)(A, {
                                            verticalMargin: t,
                                            padding: n,
                                            children: (0, l.jsx)(ef, {}),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        style: { background: "violet" },
                                        children: (0, l.jsx)(A, {
                                            verticalMargin: t,
                                            padding: n,
                                            children: (0, l.jsx)(ef, {}),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                controls: {
                    verticalMargin: { label: "Vertical Margin", type: "number", defaultValue: 16 },
                    padding: { label: "Padding", type: "number", defaultValue: 8 },
                },
            },
            {
                name: "BackgroundImage",
                id: "background-image",
                component: function (e) {
                    let { backgroundImage: t, secondBackgroundImage: n } = e;
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children:
                                    "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset",
                            }),
                            (0, l.jsx)($, {
                                backgroundImage: { src: t },
                                children: (0, l.jsx)(A, {
                                    children: (0, l.jsx)(V, {
                                        columns: 2,
                                        children: (0, l.jsxs)(p, {
                                            direction: "vertical",
                                            children: [
                                                (0, l.jsx)(s.D, {
                                                    variant: "heading-xxl/bold",
                                                    children: "What can I get with orbs?",
                                                }),
                                                (0, l.jsx)(r.E, {
                                                    variant: "text-md/normal",
                                                    children:
                                                        "Spend Orbs on exclusives or grab your favorites from the shop",
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                            (0, l.jsx)(A, {
                                children: (0, l.jsx)(r.E, {
                                    variant: "text-lg/semibold",
                                    children: "It also automatically handles animated asset urls",
                                }),
                            }),
                            (0, l.jsx)($, {
                                backgroundImage: { src: n },
                                children: (0, l.jsx)(A, {
                                    children: (0, l.jsx)(V, {
                                        columns: 2,
                                        children: (0, l.jsxs)(p, {
                                            direction: "vertical",
                                            children: [
                                                (0, l.jsx)(s.D, {
                                                    variant: "heading-xxl/bold",
                                                    children: "What can I get with orbs?",
                                                }),
                                                (0, l.jsx)(r.E, {
                                                    variant: "text-md/normal",
                                                    children:
                                                        "Spend Orbs on exclusives or grab your favorites from the shop",
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                controls: {
                    backgroundImage: {
                        label: "Background Image",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                    },
                    secondBackgroundImage: {
                        label: "Second Background Image",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
                    },
                },
            },
            {
                name: "GradientBackground",
                id: "gradient-background",
                component: function (e) {
                    let { color1: t, color2: n, color3: a, angle: i } = e,
                        o = [t, n, a].filter((e) => null != e && "" !== e);
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children:
                                    "GradientBackground takes a `colors` array and renders a linear gradient behind its children at the given angle.",
                            }),
                            (0, l.jsx)(ei, {
                                colors: o,
                                angle: i,
                                children: (0, l.jsx)(A, {
                                    children: (0, l.jsx)(V, {
                                        columns: 2,
                                        children: (0, l.jsxs)(p, {
                                            direction: "vertical",
                                            children: [
                                                (0, l.jsx)(s.D, {
                                                    variant: "heading-xxl/bold",
                                                    children: "What can I get with orbs?",
                                                }),
                                                (0, l.jsx)(r.E, {
                                                    variant: "text-md/normal",
                                                    children:
                                                        "Spend Orbs on exclusives or grab your favorites from the shop",
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                controls: {
                    color1: { label: "Color 1", type: "color", defaultValue: "#5865f2" },
                    color2: { label: "Color 2", type: "color", defaultValue: "#eb459e" },
                    color3: { label: "Color 3 (optional)", type: "color", defaultValue: "" },
                    angle: { label: "Angle (deg)", type: "slider", defaultValue: 180, minValue: 0, maxValue: 360 },
                },
            },
            {
                name: "Interactive H Scroll",
                id: "interactive-h-scroll",
                component: function () {
                    let [e, t] = a.useState(15),
                        [n, r] = a.useState(8),
                        [s, o] = a.useState("xl"),
                        [c, d] = a.useState(!0),
                        u = a.useMemo(
                            () =>
                                [...Array(e)].map((e, t) =>
                                    (0, l.jsx)(
                                        Q.D,
                                        {
                                            className: eb.j,
                                            onClick: () => console.log(t),
                                            children: (0, l.jsxs)(x.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                children: [
                                                    (0, l.jsx)("div", { children: t }),
                                                    t % 3 == 0 &&
                                                        (0, l.jsx)(i.$, {
                                                            onClick: () => console.log(`clicked button ${t}`),
                                                            text: "Click Me",
                                                        }),
                                                ],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            [e],
                        );
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(ep.A, { gap: n, edgeFade: s, hideActionsWhenDisabled: c, children: u }),
                            (0, l.jsx)(ex.nB, {}),
                            (0, l.jsxs)(ex.MG, {
                                children: [
                                    (0, l.jsx)(eu.S, {
                                        checked: c,
                                        onChange: () => d(!c),
                                        label: "Hide Actions When Disabled",
                                    }),
                                    (0, l.jsx)(eh.k, {
                                        type: "number",
                                        min: 0,
                                        value: e.toString(),
                                        onChange: (e) => {
                                            t((0, P.clamp)(+e, 0, 100));
                                        },
                                        label: "Children Count",
                                    }),
                                ],
                            }),
                            (0, l.jsx)(ex.MG, {
                                children: (0, l.jsx)(em.l, {
                                    value: n,
                                    options: eg,
                                    onSelectionChange: r,
                                    label: "Children Gap",
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            }),
                            (0, l.jsx)(ex.MG, {
                                children: (0, l.jsx)(em.l, {
                                    value: s,
                                    options: eg,
                                    onSelectionChange: o,
                                    label: "Edge Fade Space",
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    });
                },
                controls: {},
            },
            {
                name: "Carousel",
                id: "carousel",
                component: function (e) {
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/normal",
                                children: "Carousel steps through the children with a swipe and fade animation.",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/normal",
                                children:
                                    "It has very minimal configuration options, instead choosing to be opinionated about the functionality of a carousel in a Layout System world.",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/normal",
                                children:
                                    "The carousel will pause slidding when the mouse hovers it, and resume on mouse leave.",
                            }),
                            (0, l.jsx)(A, {
                                children: (0, l.jsxs)(el, {
                                    ...e,
                                    children: [
                                        (0, l.jsx)("div", {
                                            style: { background: "red" },
                                            children: (0, l.jsx)(er, {}),
                                        }),
                                        (0, l.jsx)("div", {
                                            style: { background: "orange" },
                                            children: (0, l.jsx)(er, {}),
                                        }),
                                        (0, l.jsx)("div", {
                                            style: { background: "yellow" },
                                            children: (0, l.jsx)(er, {}),
                                        }),
                                        (0, l.jsx)("div", {
                                            style: { background: "green" },
                                            children: (0, l.jsx)(er, {}),
                                        }),
                                        (0, l.jsx)("div", {
                                            style: { background: "blue" },
                                            children: (0, l.jsx)(er, {}),
                                        }),
                                        (0, l.jsx)("div", {
                                            style: { background: "violet" },
                                            children: (0, l.jsx)(er, {}),
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)(A, {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children:
                                            "Here is an example of what a carousel inside of a card might look like for showing off different products",
                                    }),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsx)(W, {
                                        children: (0, l.jsx)("div", {
                                            style: {
                                                background: "white",
                                                padding: 12,
                                                borderRadius: 8,
                                                aspectRatio: "1/1",
                                                maxWidth: 240,
                                                display: "flex",
                                                overflow: "hidden",
                                            },
                                            children: (0, l.jsxs)(el, {
                                                ...e,
                                                children: [
                                                    (0, l.jsx)(ea, {}),
                                                    (0, l.jsx)(ea, {}),
                                                    (0, l.jsx)(ea, {}),
                                                    (0, l.jsx)(ea, {}),
                                                    (0, l.jsx)(ea, {}),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(A, {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: "And here is an example of a FeaturedBlock Carousel",
                                    }),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsxs)(el, {
                                        ...e,
                                        children: [
                                            (0, l.jsx)(Z, {
                                                href: "",
                                                backgroundImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                                },
                                                logoSrc: {
                                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                                },
                                                supplementalImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                                },
                                                ctaText: "View The Collection",
                                            }),
                                            (0, l.jsx)(Z, {
                                                href: "",
                                                backgroundImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                                },
                                                logoSrc: {
                                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                                },
                                                supplementalImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                                },
                                                ctaText: "View The Collection",
                                            }),
                                            (0, l.jsx)(Z, {
                                                href: "",
                                                backgroundImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                                },
                                                logoSrc: {
                                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                                },
                                                supplementalImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                                },
                                                ctaText: "View The Collection",
                                            }),
                                            (0, l.jsx)(Z, {
                                                href: "",
                                                backgroundImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                                },
                                                logoSrc: {
                                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                                },
                                                supplementalImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                                },
                                                ctaText: "View The Collection",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                controls: {
                    slideDuration: {
                        label: "Slide Duration (production default is 5000)",
                        type: "number",
                        defaultValue: 2500,
                    },
                    paused: { label: "Pause", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Skeleton",
                id: "skeleton",
                component: function () {
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children:
                                    "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/normal",
                                children:
                                    "Skeleton hides its children and applies a mask over the whole container of the child",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/normal",
                                children:
                                    "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                            }),
                            (0, l.jsxs)(A, {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: "Basic rectangular skeleton",
                                    }),
                                    (0, l.jsx)(eC, {
                                        children: (0, l.jsx)("div", {
                                            style: { height: 120, width: "100%", background: "transparent" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/normal",
                                children:
                                    "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                            }),
                            (0, l.jsx)(A, {
                                children: (0, l.jsxs)(V, {
                                    columns: 3,
                                    children: [
                                        (0, l.jsx)(eC, { children: (0, l.jsx)(ek, { skuId: "1458472704192811088" }) }),
                                        (0, l.jsx)(eC, { children: (0, l.jsx)(ek, { skuId: "1458472704192811088" }) }),
                                        (0, l.jsx)(eC, { children: (0, l.jsx)(ek, { skuId: "1458472704192811088" }) }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-lg/normal",
                                children:
                                    "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                            }),
                            (0, l.jsx)(A, {
                                children: (0, l.jsxs)(V, {
                                    columns: 2,
                                    children: [
                                        (0, l.jsx)(eC, {
                                            children: (0, l.jsx)(Z, {
                                                backgroundImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                                },
                                                logoSrc: {
                                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                                },
                                                supplementalImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                                },
                                                href: "",
                                                ctaText: "Take Me There",
                                            }),
                                        }),
                                        (0, l.jsx)(eC, {
                                            children: (0, l.jsx)(Z, {
                                                backgroundImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                                },
                                                logoSrc: {
                                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                                },
                                                supplementalImage: {
                                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                                },
                                                href: "",
                                                ctaText: "Take Me There",
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                controls: {},
            },
        ],
    };
var eI = n(3284);
let ew = function (e) {
    let { padding: t = 0, children: n } = e;
    return (0, l.jsx)("div", { className: eI.$, style: { paddingInline: Math.max(0, t) }, children: n });
};
var eL = n(544244);
let eV = function (e) {
    let { padding: t = 32, children: n } = e;
    return (0, l.jsx)("div", { className: eL.H, style: { paddingInline: Math.max(0, t) }, children: n });
};
var eA = n(217651);
let e_ = function (e) {
    let { backgroundImage: t, href: n, ctaText: a } = e,
        s = u(a);
    return (0, l.jsx)(W, {
        children: (0, l.jsx)(Q.D, {
            className: eA.v,
            onClick: () => (0, o.pX)(n),
            children: (0, l.jsx)($, {
                backgroundImage: t,
                backgroundPosition: "left",
                children: (0, l.jsx)("div", {
                    className: eA.j,
                    children: (0, l.jsx)(r.E, { variant: "text-lg/bold", color: "text-overlay-light", children: s }),
                }),
            }),
        }),
    });
};
var eP = n(227007);
let eO = function (e) {
    let { backgroundImage: t, href: n, ctaText: a } = e,
        s = u(a ?? "");
    return (0, l.jsx)("div", {
        className: eP.q,
        children: (0, l.jsx)($, {
            backgroundImage: t,
            backgroundPosition: "left",
            children: (0, l.jsx)("div", {
                className: eP.R,
                children: (0, l.jsx)(r.E, { variant: "text-lg/bold", color: "text-overlay-light", children: s }),
            }),
        }),
    });
};
var eM = n(132407);
let eF = function (e) {
    let { bannerSrc: t, logoSrc: n, backgroundColor: a, href: r, children: s } = e;
    return (0, l.jsx)("div", {
        className: eM.ZK,
        children: (0, l.jsx)($, {
            backgroundImage: t,
            backgroundColor: a,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            padding: "var(--space-8)",
            children: (0, l.jsxs)("div", {
                className: eM.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eM.VW,
                        children: [
                            null != n && (0, l.jsx)("div", { className: eM.wm, children: (0, l.jsx)(J, { src: n }) }),
                            null != r &&
                                (0, l.jsx)(h, {
                                    variant: "overlay-primary",
                                    href: r,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != s && (0, l.jsx)("div", { className: eM.Y_, children: s }),
                ],
            }),
        }),
    });
};
function eB() {
    return (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
}
var eN = n(362373);
let eH = function (e) {
    let { bannerSrc: t, logoSrc: n, backgroundColor: a, href: r, children: s } = e;
    return (0, l.jsxs)("div", {
        className: eN.ZK,
        children: [
            (0, l.jsx)("div", {
                className: eN.vK,
                style: null != a ? { background: a } : void 0,
                children: (0, l.jsx)(J, { src: t }),
            }),
            (0, l.jsxs)("div", {
                className: eN.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eN.wx,
                        children: [
                            null != n && (0, l.jsx)("div", { className: eN.wm, children: (0, l.jsx)(J, { src: n }) }),
                            null != r &&
                                (0, l.jsx)(h, {
                                    variant: "overlay-primary",
                                    href: r,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != s && (0, l.jsx)("div", { className: eN.Y_, children: s }),
                ],
            }),
        ],
    });
};
function eR() {
    return (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
}
let eD = {
        title: "Heroes",
        stories: [
            {
                name: "ContainedHero",
                id: "contained-hero",
                component: function (e) {
                    let {
                        containerHeight: t,
                        showChildren: n,
                        bannerSrc: a,
                        animatedBannerSrc: r,
                        logoSrc: s,
                        href: i,
                        backgroundColor: o,
                    } = e;
                    function c() {
                        return n
                            ? (0, l.jsxs)(ep.A, {
                                  children: [
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                      (0, l.jsx)(eB, {}),
                                  ],
                              })
                            : null;
                    }
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", {
                                style: { height: n ? void 0 : t },
                                children: (0, l.jsx)(eF, {
                                    bannerSrc: { src: a },
                                    logoSrc: { src: s },
                                    href: i,
                                    backgroundColor: o,
                                    children: c(),
                                }),
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("div", {
                                style: { height: n ? void 0 : t },
                                children: (0, l.jsx)(eF, {
                                    bannerSrc: { src: r },
                                    logoSrc: { src: s },
                                    href: i,
                                    backgroundColor: o,
                                    children: c(),
                                }),
                            }),
                        ],
                    });
                },
                controls: {
                    bannerSrc: {
                        label: "Banner Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                    },
                    animatedBannerSrc: {
                        label: "Animated Banner Source (GIF/WebP)",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
                    },
                    logoSrc: {
                        label: "Logo Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                    },
                    backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
                    href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
                    containerHeight: { label: "Container Height", type: "number", defaultValue: 150 },
                    showChildren: { label: "Show Children", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "FullHero",
                id: "full-hero",
                component: function (e) {
                    let { bannerSrc: t, animatedBannerSrc: n, logoSrc: a, backgroundColor: r, href: s } = e;
                    return (0, l.jsx)(eH, {
                        bannerSrc: "" !== n ? [{ src: n }, { src: t }] : { src: t },
                        logoSrc: "" !== a ? { src: a } : void 0,
                        backgroundColor: r,
                        href: "" !== s ? s : void 0,
                        children: (0, l.jsxs)(ep.A, {
                            children: [
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                                (0, l.jsx)(eR, {}),
                            ],
                        }),
                    });
                },
                controls: {
                    bannerSrc: {
                        label: "Banner Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                    },
                    animatedBannerSrc: { label: "Animated Banner Source (GIF/WebP)", type: "text", defaultValue: "" },
                    logoSrc: {
                        label: "Logo Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                    },
                    backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
                    href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
                },
            },
        ],
    },
    eU = "dummy-tenant",
    eG = {
        id: "dummy-shop-home",
        children: [
            {
                block: "ContainedHero",
                bannerSrc: {
                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                },
                logoSrc: {
                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                },
                backgroundColor: "red",
                children: [
                    {
                        block: "InteractiveHScroll",
                        children: [{ block: "SubLayout", tenantId: "dummy-tenant", layoutId: "dummy-sku-list" }],
                    },
                ],
            },
            {
                block: "Section",
                verticalMargin: 48,
                padding: 0,
                children: [
                    {
                        block: "Grid",
                        columns: 2,
                        children: [
                            {
                                block: "FeaturedCollection",
                                backgroundImage: {
                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                },
                                logoSrc: {
                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                },
                                supplementalImage: {
                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                },
                                href: "",
                                ctaText: "Take Me There",
                            },
                            {
                                block: "FeaturedCollection",
                                backgroundImage: {
                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                },
                                logoSrc: {
                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                },
                                supplementalImage: {
                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                },
                                href: "",
                                ctaText: "Take Me There",
                            },
                        ],
                    },
                ],
            },
            { block: "SubLayout", tenantId: "dummy-tenant", layoutId: "dummy-orb-shelf" },
            { block: "SubTemplate", tenantId: "dummy-tenant", templateId: "dummy-popular-picks" },
        ],
    },
    eY = {
        id: "dummy-popular-picks",
        children: [
            {
                block: "Section",
                verticalMargin: 32,
                padding: 0,
                children: [{ block: "Text", variant: "text-lg/semibold", content: "Popular Picks" }],
            },
            {
                block: "Section",
                verticalMargin: 32,
                padding: 0,
                children: [
                    {
                        block: "Grid",
                        columns: 4,
                        children: [
                            {
                                block: "SkuList",
                                skuBlock: "GridItemShopProductCard",
                                skuBlockProps: { auto: !0 },
                                skuIds: [
                                    "1458472704167379109",
                                    "1447654091047178423",
                                    "1458472704251396148",
                                    "1436367668788592782",
                                    "1447654090439004170",
                                    "1458472704435945653",
                                    "1428438925021548544",
                                    "1428438924564631663",
                                    "1144308439720394944",
                                    "1432550258478682222",
                                    "1458483484598337682",
                                    "1432550258126229565",
                                    "1428438924539334718",
                                    "1458472704721158372",
                                    "1447654090539667609",
                                    "1333866045236314327",
                                    "1458472704524156959",
                                    "1447654090556571799",
                                    "1428438924648382626",
                                    "1417311919643299840",
                                    "1458472704192811088",
                                    "1432550258247995533",
                                    "1212569433839636530",
                                    "1447654090661302343",
                                    "1432550258465837086",
                                    "1447654090573217912",
                                    "1280621222496964630",
                                    "1447654090623549471",
                                    "1436367668897775757",
                                    "1458472704222171347",
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    e$ = {
        id: "dummy-orb-shelf",
        children: [
            {
                block: "Section",
                verticalMargin: 8,
                padding: 0,
                children: [
                    {
                        block: "Stack",
                        direction: "horizontal",
                        justify: "space-between",
                        children: [
                            { block: "Heading", content: "Discord Orb Exclusives", variant: "heading-lg/semibold" },
                            {
                                block: "Button",
                                ctaText: "Shop All Discord Orb Exclusives",
                                href: "",
                                variant: "secondary",
                            },
                        ],
                    },
                ],
            },
            {
                block: "Section",
                verticalMargin: 8,
                padding: 0,
                children: [
                    {
                        block: "InteractiveHScroll",
                        children: [
                            { block: "ShopProductCard", skuId: "1458472704079434020" },
                            { block: "ShopProductCard", skuId: "1458472704167379109" },
                            { block: "ShopProductCard", skuId: "1458472704192811088" },
                            { block: "ShopProductCard", skuId: "1458472704222171347" },
                        ],
                    },
                ],
            },
        ],
    };
var ez = n(441136),
    eW = n(160862);
function eK(e) {
    let { value: t, onChange: n } = e,
        r = a.useRef(null),
        s = t.match(/\n*$/)?.[0] ?? "",
        i = t.slice(0, t.length - s.length);
    return (0, l.jsxs)("div", {
        className: eW.t,
        children: [
            (0, l.jsxs)("pre", {
                className: eW.c5,
                "aria-hidden": "true",
                children: [(0, l.jsx)(ez.E, { code: i, lang: "json", className: "hljs" }), s],
            }),
            (0, l.jsx)("textarea", {
                ref: r,
                className: eW.mW,
                value: t,
                onChange: function (e) {
                    n(e.target.value);
                },
                onScroll: function (e) {
                    let t = e.target,
                        n = t.previousElementSibling;
                    null != n && ((n.scrollTop = t.scrollTop), (n.scrollLeft = t.scrollLeft));
                },
                onKeyDown: function (e) {
                    if ("Tab" === e.key) {
                        e.preventDefault();
                        let l = e.target,
                            a = l.selectionStart,
                            s = l.selectionEnd;
                        if (e.shiftKey) {
                            let e = t.lastIndexOf("\n", a - 1) + 1,
                                l = t.indexOf("\n", a),
                                s = t.substring(e, -1 === l ? t.length : l),
                                i = 0;
                            for (let e = 0; e < Math.min(2, s.length); e++)
                                if (" " === s[e]) i++;
                                else break;
                            i > 0 &&
                                (n(t.substring(0, e) + t.substring(e + i)),
                                setTimeout(() => {
                                    if (null != r.current) {
                                        let t = Math.max(e, a - i);
                                        r.current.selectionStart = r.current.selectionEnd = t;
                                    }
                                }, 0));
                        } else
                            (n(t.substring(0, a) + "  " + t.substring(s)),
                                setTimeout(() => {
                                    null != r.current && (r.current.selectionStart = r.current.selectionEnd = a + 2);
                                }, 0));
                    }
                },
                spellCheck: !1,
                autoCapitalize: "off",
                autoComplete: "off",
                autoCorrect: "off",
                rows: 30,
            }),
        ],
    });
}
var eQ = n(132500),
    eq = n(841702),
    eJ = n(450047);
function eX(e) {
    let {
            skuIds: t = [],
            skuBlock: n = "ShopProductCard",
            skuBlockProps: r,
            sortPurchased: s = !1,
            showSkeleton: i = !1,
            componentMap: o,
            pagedSkuIds: c,
            page: d,
            perPage: u,
            truncate: h,
        } = e,
        m = (0, eJ.D)(t, !0),
        { purchases: x, isFetching: p } = (0, eq.b5)(),
        b = (0, a.useMemo)(
            () =>
                s
                    ? w(
                          [...t].sort((e, t) => (null != x.get(e)) - (null != x.get(t))),
                          d,
                          u,
                          h,
                      )
                    : c,
            [t, c, s, x, d, u, h],
        ),
        g = o[n],
        f = o.Skeleton;
    return null == g
        ? null
        : (m || (s && p)) && i
          ? b.map((e, t) =>
                null != f
                    ? (0, l.jsx)(f, { children: (0, l.jsx)(g, { ...r, skuId: e, productId: e }) }, `${e}-${t}`)
                    : null,
            )
          : b.map((e, t) => (0, l.jsx)(g, { ...r, skuId: e, productId: e }, `${e}-${t}`));
}
let eZ = function (e) {
    let {
            skuIds: t = [],
            skuBlock: n = "ShopProductCard",
            skuBlockProps: r,
            sortPurchased: s = !1,
            eagerLoad: i = !1,
            showSkeleton: o = !1,
            componentMap: c,
            paginationOptions: d,
        } = e,
        u = a.useContext(I),
        h = d ?? u,
        m = a.useRef(null),
        {
            page: x,
            pages: p,
            paginate: b,
            showPagination: g,
            paginationPosition: f,
            truncate: j,
            perPage: v,
            setPage: y,
        } = L(t.length, h, m),
        k = (0, a.useMemo)(() => w(t, b ? x : void 0, v, j), [t, b, x, v, j]),
        S = g && "top" === f,
        E = g && "bottom" === f,
        C =
            null != h
                ? (0, l.jsx)("div", {
                      ref: m,
                      "aria-hidden": "true",
                      style: { position: "absolute", top: 0, height: 0 },
                  })
                : null;
    if (i || s)
        return (0, l.jsxs)(l.Fragment, {
            children: [
                C,
                S && (0, l.jsx)(T, { page: x, pages: p, setPage: y }),
                (0, l.jsx)(eX, {
                    skuIds: t,
                    skuBlock: n,
                    skuBlockProps: r,
                    sortPurchased: s,
                    showSkeleton: o,
                    componentMap: c,
                    pagedSkuIds: k,
                    page: b ? x : void 0,
                    perPage: b ? v : void 0,
                    truncate: j,
                }),
                E && (0, l.jsx)(T, { page: x, pages: p, setPage: y }),
            ],
        });
    let V = c[n];
    return null == V
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  C,
                  S && (0, l.jsx)(T, { page: x, pages: p, setPage: y }),
                  k.map((e, t) => (0, l.jsx)(V, { ...r, skuId: e, productId: e }, `${e}-${t}`)),
                  E && (0, l.jsx)(T, { page: x, pages: p, setPage: y }),
              ],
          });
};
var e0 = n(17928),
    e1 = n(736056),
    e8 = n(636537),
    e4 = n(73153),
    e7 = n(913122),
    e5 = n(403362);
let e2 = (0, e5.m6)()
        ? {
              [eU]: {
                  "dummy-shop-home": eG,
                  "dummy-orb-shelf": e$,
                  "dummy-sku-list": {
                      id: "dummy-sku-list",
                      children: [
                          {
                              block: "SkuList",
                              skuBlock: "ShopProductCard",
                              skuIds: [
                                  "1458472704079434020",
                                  "1458472704167379109",
                                  "1458472704251396148",
                                  "1458472704192811088",
                                  "1458472704222171347",
                                  "1458472704272498709",
                                  "1458472704306053202",
                                  "1458472704087818312",
                                  "1458472704096075816",
                                  "1458472704104599666",
                                  "1458472704112984085",
                                  "1458472704142217441",
                              ],
                          },
                      ],
                  },
              },
          }
        : {},
    e6 = (0, e5.m6)() ? ["dummy-skeleton"] : [],
    e3 = (0, e5.m6)() ? { [eU]: { "dummy-popular-picks": eY } } : {},
    e9 = (0, e5.m6)() ? ["dummy-skeleton-template"] : [];
function te(e, t) {
    return `${e}/${t}`;
}
let tt = e2,
    tn = new Set(e6),
    tl = {},
    ta = e3,
    tr = new Set(e9),
    ts = {};
function ti(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Object.entries(t)
            .sort((e, t) => {
                let [n] = e,
                    [l] = t;
                return n.localeCompare(l);
            })
            .map((e) => {
                let [t, n] = e;
                return `${t}:${n}`;
            })
            .join("-");
    return "" !== n ? `${e}-${n}` : e;
}
class to extends e0.Ay.Store {
    static displayName = "LayoutSystemStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (tt[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && tn.has(te(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (tl[te(e, t)] ?? null);
    }
    getTemplateLayout(e, t, n) {
        if (null == e || null == t) return null;
        let l = ti(t, n);
        return ta[e]?.[l] ?? null;
    }
    isFetchingTemplate(e, t, n) {
        let l = ti(t ?? "", n);
        return null != e && null != t && tr.has(te(e, l));
    }
    getTemplateFetchError(e, t, n) {
        return null == e || null == t ? null : (ts[te(e, ti(t ?? "", n))] ?? null);
    }
}
let tc = new to(e4.h, {
    LAYOUT_SYSTEM_FETCH: function (e) {
        let { tenantId: t, layoutId: n } = e;
        tn.add(te(t, n));
    },
    LAYOUT_SYSTEM_FETCH_SUCCESS: function (e) {
        let { tenantId: t, layout: n } = e;
        (((tt[t] ??= {})[n.id] = n), delete tl[te(t, n.id)], tn.delete(te(t, n.id)));
    },
    LAYOUT_SYSTEM_FETCH_FAILURE: function (e) {
        let { tenantId: t, layoutId: n, apiError: l } = e;
        ((tl[te(t, n)] = l), tn.delete(te(t, n)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH: function (e) {
        let { tenantId: t, templateId: n, requestParams: l } = e;
        tr.add(te(t, ti(n, l)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS: function (e) {
        let { tenantId: t, templateId: n, requestParams: l, layout: a } = e,
            r = ti(n, l);
        (((ta[t] ??= {})[r] = a), delete ts[te(t, r)], tr.delete(te(t, r)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE: function (e) {
        let { tenantId: t, templateId: n, requestParams: l, apiError: a } = e,
            r = ti(n, l);
        ((ts[te(t, r)] = a), tr.delete(te(t, r)));
    },
    LOGOUT: function () {
        ((tt = {}), (tn = new Set()), (tl = {}), (ta = {}), (tr = new Set()), (ts = {}));
    },
});
var td = n(652215);
let tu = ["request_params"];
function th(e) {
    return (0, P.isObject)(e)
        ? (0, P.isArray)(e)
            ? e.map(th)
            : (0, P.reduce)(
                  e,
                  (e, t, n) => {
                      let l = (0, P.camelCase)(n);
                      return tu.includes(n) ? { ...e, [l]: t } : { ...e, [l]: th(t) };
                  },
                  {},
              )
        : e;
}
async function tm(e) {
    let { tenantId: t, layoutId: n, abortSignal: l } = e;
    if (!tc.isFetchingLayout(t, n))
        try {
            e4.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH", tenantId: t, layoutId: n });
            let e = await e8.Bo.get({ url: td.Rsh.LAYOUT_SYSTEM(t, n), rejectWithError: !0, signal: l });
            e4.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH_SUCCESS", tenantId: t, layout: th(e.body) });
        } catch (l) {
            let e = new e7.LG(l);
            throw (e4.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH_FAILURE", tenantId: t, layoutId: n, apiError: e }), e);
        }
}
async function tx(e) {
    let { tenantId: t, templateId: n, abortSignal: l, requestParams: a } = e;
    if (!tc.isFetchingTemplate(t, n, a))
        try {
            e4.h.dispatch({ type: "LAYOUT_SYSTEM_TEMPLATE_FETCH", tenantId: t, templateId: n, requestParams: a });
            let e = await e8.Bo.get({
                url: td.Rsh.LAYOUT_SYSTEM_TEMPLATE(t, n),
                rejectWithError: !0,
                signal: l,
                query: a,
            });
            e4.h.dispatch({
                type: "LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS",
                tenantId: t,
                templateId: n,
                requestParams: a,
                layout: th(e.body),
            });
        } catch (l) {
            let e = new e7.LG(l);
            throw (
                e4.h.dispatch({
                    type: "LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE",
                    tenantId: t,
                    templateId: n,
                    requestParams: a,
                    apiError: e,
                }),
                e
            );
        }
}
let tp = function (e, t) {
        let n = (0, e0.bG)([e1.A], () => e1.A.hasLoadedExperiments),
            [l, r, s] = (0, e0.yK)([tc], () => [tc.getLayout(e, t), tc.isFetchingLayout(e, t), tc.getFetchError(e, t)]),
            i = null == l && null != t && n && !r && null == s;
        return (
            a.useEffect(() => {
                i && tm({ tenantId: e, layoutId: t }).catch(() => {});
            }, [i, e, t]),
            { layout: l, loading: r, error: s }
        );
    },
    tb = function (e, t, n) {
        let l = (0, e0.bG)([e1.A], () => e1.A.hasLoadedExperiments),
            [r, s, i] = (0, e0.yK)([tc], () => [
                tc.getTemplateLayout(e, t, n),
                tc.isFetchingTemplate(e, t, n),
                tc.getTemplateFetchError(e, t, n),
            ]),
            o = null == r && null != t && l && !s && null == i;
        return (
            a.useEffect(() => {
                o && tx({ tenantId: e, templateId: t, requestParams: n }).catch(() => {});
            }, [o, e, t, n]),
            { layout: r, loading: s, error: i }
        );
    };
var tg = n(575593);
let tf = function () {
        return null;
    },
    tj = {
        ContainedHero: eF,
        FullHero: eH,
        NarrowContent: eV,
        FullBleedContent: ew,
        InteractiveHScroll: ep.A,
        Carousel: el,
        Grid: V,
        GridItem: eo,
        Section: A,
        Card: W,
        BackgroundImage: $,
        GradientBackground: ei,
        Skeleton: eC,
        FeaturedChip: e_,
        FeaturedCollection: Z,
        FeaturedProduct: () => null,
        ShopProductCard: ek,
        GridItemShopProductCard: function (e) {
            let { skuId: t, auto: n, columns: r, rows: s } = e,
                { product: i } = (0, ej.q)(t, !0),
                {
                    flattenProductVariants: o,
                    productOverride: c,
                    prioritizedCurrency: d,
                    standalonePreview: u,
                } = a.useContext(ey.v3),
                h = a.useMemo(
                    () => ({
                        flattenProductVariants: o ?? !1,
                        productOverride: c,
                        prioritizedCurrency: d,
                        standalonePreview: u,
                    }),
                    [o, c, d, u],
                );
            if (null == i) return null;
            if (i.type === tg.R.BUNDLE) {
                let e = n ? 2 : r,
                    a = n ? 1 : s,
                    i = `${e}/${a}`;
                return (0, l.jsx)(ey.v3.Provider, {
                    value: h,
                    children: (0, l.jsx)(eo, {
                        columns: e,
                        rows: a,
                        children: (0, l.jsx)(ev.A, { skuId: t, aspectRatio: i }),
                    }),
                });
            }
            if (i.type === tg.R.PROFILE_EFFECT) {
                let e = n ? 1 : r,
                    a = n ? 2 : s,
                    i = `${e}/${a}`;
                return (0, l.jsx)(ey.v3.Provider, {
                    value: h,
                    children: (0, l.jsx)(eo, {
                        columns: e,
                        rows: a,
                        children: (0, l.jsx)(ev.A, { skuId: t, aspectRatio: i }),
                    }),
                });
            }
            return n
                ? (0, l.jsx)(ey.v3.Provider, { value: h, children: (0, l.jsx)(ev.A, { skuId: t, aspectRatio: "1/1" }) })
                : (0, l.jsx)(ey.v3.Provider, {
                      value: h,
                      children: (0, l.jsx)(eo, {
                          columns: r,
                          rows: s,
                          children: (0, l.jsx)(ev.A, { skuId: t, aspectRatio: `${r}/${s}` }),
                      }),
                  });
        },
        SkuList: eZ,
        SubLayout: function (e) {
            let { layoutId: t, tenantId: n, skeleton: l, componentMap: a, renderLayout: r } = e,
                { layout: s, loading: i } = tp(n, t);
            return i && null != l
                ? r({ overrides: a, layout: { id: "skeleton", children: l } })
                : null == s
                  ? null
                  : r({ layout: s, overrides: a });
        },
        SubTemplate: function (e) {
            let { templateId: t, tenantId: n, skeleton: l, requestParams: a, componentMap: r, renderLayout: s } = e,
                { layout: i, loading: o } = tb(n, t, a);
            return o && null != l
                ? s({ overrides: r, layout: { id: "skeleton", children: l } })
                : null == i
                  ? null
                  : s({ layout: i, overrides: r });
        },
        Button: h,
        Heading: m,
        Stack: p,
        Text: b,
        Tooltip: f,
        Image: J,
        Any: tf,
    };
function tv() {
    let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return a.useMemo(() => {
        let t = (0, P.cloneDeep)(tj);
        if (null != e) for (let [n, l] of Object.entries(e)) null != l && (t[n] = l);
        return t;
    }, [e]);
}
function ty(e, t) {
    return e.children.map((e) =>
        (function e(t, n) {
            if ("string" == typeof t) return t;
            let a = "Any" === t.block && "string" == typeof t.tag ? `Any:${t.tag}` : t.block,
                { block: r, ...s } = t,
                i = n[a] ?? n[r];
            if (null == i) return null;
            let o = (() => {
                    if ("children" in t) {
                        if (!Array.isArray(t.children) && null != t.children) return e(t.children, n);
                        if (null != t.children && t.children.length > 0) return t.children.map((t) => e(t, n));
                    }
                    return null;
                })(),
                c = S.E6.has(r) ? { ...s, componentMap: n, renderLayout: tC } : s;
            return (0, l.jsx)(i, { ...c, children: o }, (0, eQ.A)());
        })(e, t),
    );
}
class tk extends a.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch() {
        this.props.onError?.();
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function tS(e) {
    let { layout: t, Components: n } = e;
    return a.useMemo(() => ty(t, n), [t, n]);
}
function tE(e) {
    let { layout: t, overrides: n, onError: r, onEmptyLayout: s } = e,
        i = tv({ overrides: n });
    return (
        a.useEffect(() => {
            0 === t.children.length && s?.();
        }, [t, s]),
        (0, l.jsx)(tk, { onError: r, children: (0, l.jsx)(tS, { layout: t, Components: i }) })
    );
}
function tC(e) {
    return (0, l.jsx)(tE, { ...e });
}
var tT = n(758836),
    tI = n(995632);
let tw = { prioritizedCurrency: tT.Hi.ORBS };
var tL = n(993077);
function tV(e) {
    let { color: t, children: n } = e;
    return (0, l.jsx)(tL.Z, {
        style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
        children: (0, l.jsx)(r.E, { variant: "text-md/semibold", children: n }),
    });
}
let tA = {
    title: "Mana",
    stories: [
        {
            name: "Button",
            id: "layout-system-button",
            component: function (e) {
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Button component for Layout System interactions.",
                        }),
                        (0, l.jsxs)(x.B, {
                            direction: "vertical",
                            children: [
                                (0, l.jsx)(h, { ...e }),
                                (0, l.jsx)("hr", {}),
                                (0, l.jsx)(h, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                                (0, l.jsx)(h, { href: e.href, ctaText: "Variant = secondary", variant: "secondary" }),
                                (0, l.jsx)(h, {
                                    href: e.href,
                                    ctaText: "Variant = critical-primary",
                                    variant: "critical-primary",
                                }),
                                (0, l.jsx)(h, {
                                    href: e.href,
                                    ctaText: "Variant = critical-secondary",
                                    variant: "critical-secondary",
                                }),
                                (0, l.jsx)(h, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                                (0, l.jsx)(h, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-primary",
                                    variant: "overlay-primary",
                                }),
                                (0, l.jsx)(h, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-secondary",
                                    variant: "overlay-secondary",
                                }),
                                (0, l.jsx)(h, { href: e.href, ctaText: "Variant = expressive", variant: "expressive" }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                href: { type: "text", label: "URL", defaultValue: "https://discord.com" },
                ctaText: { type: "text", label: "Button Text", defaultValue: "Click Me" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "secondary",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                        { label: "Critical Primary", value: "critical-primary" },
                        { label: "Critical Secondary", value: "critical-secondary" },
                        { label: "Active", value: "active" },
                        { label: "Overlay Primary", value: "overlay-primary" },
                        { label: "Overlay Secondary", value: "overlay-secondary" },
                        { label: "Expressive", value: "expressive" },
                    ],
                },
            },
        },
        {
            name: "Heading",
            id: "layout-system-heading",
            component: function (e) {
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Heading component for Layout System content.",
                        }),
                        (0, l.jsx)(m, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(m, { content: "Variant = heading-sm/normal", variant: "heading-sm/normal" }),
                        (0, l.jsx)(m, { content: "Variant = heading-sm/medium", variant: "heading-sm/medium" }),
                        (0, l.jsx)(m, { content: "Variant = heading-sm/semibold", variant: "heading-sm/semibold" }),
                        (0, l.jsx)(m, { content: "Variant = heading-md/normal", variant: "heading-md/normal" }),
                        (0, l.jsx)(m, { content: "Variant = heading-md/medium", variant: "heading-md/medium" }),
                        (0, l.jsx)(m, { content: "Variant = heading-md/semibold", variant: "heading-md/semibold" }),
                        (0, l.jsx)(m, { content: "Variant = heading-lg/normal", variant: "heading-lg/normal" }),
                        (0, l.jsx)(m, { content: "Variant = heading-lg/medium", variant: "heading-lg/medium" }),
                        (0, l.jsx)(m, { content: "Variant = heading-lg/semibold", variant: "heading-lg/semibold" }),
                    ],
                });
            },
            controls: {
                content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "heading-md/semibold",
                    options: [
                        { label: "heading-sm/normal", value: "heading-sm/normal" },
                        { label: "heading-sm/medium", value: "heading-sm/medium" },
                        { label: "heading-sm/semibold", value: "heading-sm/semibold" },
                        { label: "heading-md/normal", value: "heading-md/normal" },
                        { label: "heading-md/medium", value: "heading-md/medium" },
                        { label: "heading-md/semibold", value: "heading-md/semibold" },
                        { label: "heading-lg/normal", value: "heading-lg/normal" },
                        { label: "heading-lg/medium", value: "heading-lg/medium" },
                        { label: "heading-lg/semibold", value: "heading-lg/semibold" },
                    ],
                },
            },
        },
        {
            name: "Stack",
            id: "layout-system-stack",
            component: function (e) {
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Stack component for Layout System.",
                        }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(p, {
                                ...e,
                                children: [
                                    (0, l.jsx)(tV, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(tV, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(tV, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(r.E, { variant: "text-md/semibold", children: "Horizontal Stack" }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(p, {
                                ...e,
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(tV, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(tV, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(tV, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(r.E, { variant: "text-md/semibold", children: "Vertical Stack" }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(p, {
                                ...e,
                                direction: "vertical",
                                children: [
                                    (0, l.jsx)(tV, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(tV, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(tV, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                    ],
                });
            },
            controls: {
                direction: {
                    type: "select",
                    label: "Direction",
                    defaultValue: "vertical",
                    options: [
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                    ],
                },
                align: {
                    type: "select",
                    label: "Align",
                    defaultValue: "start",
                    options: [
                        { label: "Start", value: "start" },
                        { label: "Center", value: "center" },
                        { label: "End", value: "end" },
                        { label: "Stretch", value: "stretch" },
                    ],
                },
                justify: {
                    type: "select",
                    label: "Justify",
                    defaultValue: "start",
                    options: [
                        { label: "Start", value: "start" },
                        { label: "Center", value: "center" },
                        { label: "End", value: "end" },
                        { label: "Space Between", value: "space-between" },
                        { label: "Space Around", value: "space-around" },
                    ],
                },
            },
        },
        {
            name: "Text",
            id: "layout-system-text",
            component: function (e) {
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Text component for Layout System content.",
                        }),
                        (0, l.jsx)(b, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(b, { content: "Variant = text-xs/normal", variant: "text-xs/normal" }),
                        (0, l.jsx)(b, { content: "Variant = text-sm/normal", variant: "text-sm/normal" }),
                        (0, l.jsx)(b, { content: "Variant = text-sm/medium", variant: "text-sm/medium" }),
                        (0, l.jsx)(b, { content: "Variant = text-sm/semibold", variant: "text-sm/semibold" }),
                        (0, l.jsx)(b, { content: "Variant = text-md/normal", variant: "text-md/normal" }),
                        (0, l.jsx)(b, { content: "Variant = text-md/medium", variant: "text-md/medium" }),
                        (0, l.jsx)(b, { content: "Variant = text-md/semibold", variant: "text-md/semibold" }),
                        (0, l.jsx)(b, { content: "Variant = text-lg/normal", variant: "text-lg/normal" }),
                        (0, l.jsx)(b, { content: "Variant = text-lg/medium", variant: "text-lg/medium" }),
                        (0, l.jsx)(b, { content: "Variant = text-lg/semibold", variant: "text-lg/semibold" }),
                    ],
                });
            },
            controls: {
                content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "text-md/normal",
                    options: [
                        { label: "text-xs/normal", value: "text-xs/normal" },
                        { label: "text-sm/normal", value: "text-sm/normal" },
                        { label: "text-sm/medium", value: "text-sm/medium" },
                        { label: "text-sm/semibold", value: "text-sm/semibold" },
                        { label: "text-md/normal", value: "text-md/normal" },
                        { label: "text-md/medium", value: "text-md/medium" },
                        { label: "text-md/semibold", value: "text-md/semibold" },
                        { label: "text-lg/normal", value: "text-lg/normal" },
                        { label: "text-lg/medium", value: "text-lg/medium" },
                        { label: "text-lg/semibold", value: "text-lg/semibold" },
                    ],
                },
            },
        },
        {
            name: "Tooltip",
            id: "layout-system-tooltip",
            component: function (e) {
                return (0, l.jsx)(f, {
                    ...e,
                    children: (0, l.jsx)("div", {
                        style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                        children: (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Hover me." }),
                    }),
                });
            },
            controls: {
                text: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                position: {
                    type: "select",
                    label: "Position",
                    defaultValue: "top",
                    options: [
                        { label: "top", value: "top" },
                        { label: "left", value: "left" },
                        { label: "right", value: "right" },
                        { label: "bottom", value: "bottom" },
                    ],
                },
            },
        },
    ],
};
var t_ = n(206845);
let tP = {
        id: "dummy-show-of-skeletons",
        children: [
            {
                block: "ContainedHero",
                bannerSrc: {
                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                },
                logoSrc: {
                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                },
                backgroundColor: "rgb(25, 32, 86)",
                children: [
                    {
                        block: "SubLayout",
                        tenantId: "dummy-tenant",
                        layoutId: "dummy-skeleton",
                        skeleton: [
                            {
                                block: "InteractiveHScroll",
                                children: [
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704079434020" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704167379109" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704192811088" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704222171347" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704272498709" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704306053202" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704087818312" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704096075816" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    tO = {
        title: "Recursive",
        stories: [
            {
                name: "SkuList",
                id: "skulist",
                component: function (e) {
                    let { skuIds: t, sortPurchased: n, eagerLoad: a, showSkeleton: i } = e,
                        o = tv();
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children: "The SkuList component takes a list of skus and maps them into a block",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(V, {
                                columns: 3,
                                children: (0, l.jsx)(eZ, {
                                    skuIds: t?.split(","),
                                    skuBlock: "ShopProductCard",
                                    sortPurchased: n,
                                    eagerLoad: a,
                                    showSkeleton: i,
                                    componentMap: o,
                                }),
                            }),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)(r.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                            (0, l.jsxs)(x.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                    (0, l.jsx)(t_.A, {
                                        text: c.intl.string(c.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704192811088",
                                        children: (e) =>
                                            (0, l.jsx)(Q.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(r.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458472704192811088",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(x.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                    (0, l.jsx)(t_.A, {
                                        text: c.intl.string(c.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458479739110166560",
                                        children: (e) =>
                                            (0, l.jsx)(Q.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(r.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458479739110166560",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(x.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                    (0, l.jsx)(t_.A, {
                                        text: c.intl.string(c.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704524156959",
                                        children: (e) =>
                                            (0, l.jsx)(Q.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(r.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458472704524156959",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                controls: {
                    skuIds: {
                        label: "SKU Ids",
                        type: "text",
                        defaultValue: "1458472704192811088,1458479739110166560,1458472704524156959",
                    },
                    sortPurchased: { label: "Sort Purchased to Back", type: "boolean", defaultValue: !1 },
                    eagerLoad: { label: "Eager Load", type: "boolean", defaultValue: !1 },
                    showSkeleton: { label: "Show Skeleton", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "SubLayout",
                id: "sub-layout-basic",
                component: function () {
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children: 'The SubLayout component accepts a layout id and "get or fetch"es the layout',
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "When resolved, the layout trees are merged into one layout. This allows for the asynchronous resolution of layouts, for faster first paints",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, the \"popular picks\" are actually a sub layout with the id 'dummy-popular-picks'",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(tE, { layout: eG }),
                        ],
                    });
                },
                controls: {},
            },
            {
                name: "SubLayout - Loading State",
                id: "sub-layout-skeleton",
                component: function () {
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children:
                                    'The SubLayout can take a "Skeleton" property which is just `children` to display if the layout is being fetched from the api',
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here we use the `Skeleton` component to show the shop cards loading while the (dummy) Shop Cards SubLayout are resolving (it will never stop loading for demonstration purposes)",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(tE, { layout: tP }),
                        ],
                    });
                },
                controls: {},
            },
        ],
    };
var tM = n(88686),
    tF = n(780898),
    tB = n(214881),
    tN = n(486020);
let tH = function (e) {
        let { skuId: t, size: n = 128, animated: a = !1 } = e,
            { product: r } = (0, ej.q)(t, !0),
            s = r?.items[0];
        if (null == s) return null;
        if (s.type === tg.R.AVATAR_DECORATION) {
            let e = tN.Ay.getAvatarDecorationURL({ avatarDecoration: s, size: n, canAnimate: a });
            return null != e ? (0, l.jsx)("img", { src: e, alt: s.label }) : null;
        }
        if (s.type === tg.R.PROFILE_EFFECT) {
            let e = s.thumbnailPreviewSrc;
            return (0, l.jsx)("img", { src: e, alt: s.accessibilityLabel });
        }
        if (s.type === tg.R.NAMEPLATE) {
            let e = (0, tF.WK)(s);
            return (0, l.jsx)(tB.A, { nameplate: e, placement: tM.u.PREVIEW });
        }
        return null;
    },
    tR = {
        id: "layout-system",
        name: "Layout System",
        groups: [
            {
                title: "Layout Builder",
                stories: [
                    {
                        name: "Layout Builder",
                        id: "layout-builder",
                        component: () => {
                            let [e, t] = a.useState(JSON.stringify(eG, null, 2)),
                                [n, r] = a.useState(e);
                            return (
                                a.useEffect(() => {
                                    try {
                                        (function (e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tj;
                                            try {
                                                return (ty(e, t), !0);
                                            } catch (e) {
                                                return !1;
                                            }
                                        })(JSON.parse(e)) && r(e);
                                    } catch {}
                                }, [e]),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(eK, { value: e, onChange: (e) => t(e) }),
                                        (0, l.jsx)("hr", {}),
                                        (0, l.jsx)(tE, { layout: JSON.parse(n) }),
                                    ],
                                })
                            );
                        },
                        controls: {},
                    },
                    {
                        name: "Orb Home (sample)",
                        id: "orb-home",
                        component: function () {
                            let e = {
                                id: "orb-home",
                                children: [
                                    {
                                        block: "Section",
                                        children: [
                                            { block: "Section", verticalMargin: 256, children: [] },
                                            {
                                                block: "Stack",
                                                direction: "horizontal",
                                                justify: "space-between",
                                                children: [
                                                    {
                                                        block: "Stack",
                                                        direction: "vertical",
                                                        children: [
                                                            {
                                                                block: "Heading",
                                                                variant: "heading-xxl/bold",
                                                                content: "Introducing Discord Orbs",
                                                            },
                                                            {
                                                                block: "Text",
                                                                variant: "text-lg/normal",
                                                                content:
                                                                    "Reward your play. Earn through Quests. Spend in the Shop",
                                                            },
                                                        ],
                                                    },
                                                    { block: "Button", href: "", ctaText: "Go to Quest Home" },
                                                ],
                                            },
                                            { block: "Section", verticalMargin: 64, children: [] },
                                            {
                                                block: "Section",
                                                children: [
                                                    {
                                                        block: "Grid",
                                                        columns: 4,
                                                        children: [
                                                            {
                                                                block: "SkuList",
                                                                eagerLoad: !0,
                                                                showSkeleton: !0,
                                                                sortPurchased: !0,
                                                                skuBlock: "ShopProductCard",
                                                                skuIds: [
                                                                    "1333912750274904064",
                                                                    "1342211853484429445",
                                                                    "1427463138634109025",
                                                                    "1427463138634109026",
                                                                    "1427463138634109027",
                                                                    "1332505467980873728",
                                                                    "1427463138634109028",
                                                                    "1351351503339913256",
                                                                    "1427463138646954035",
                                                                    "1427463138646954036",
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                block: "Section",
                                                children: [
                                                    {
                                                        block: "BackgroundImage",
                                                        backgroundImage: {
                                                            src: "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                                                        },
                                                        children: [
                                                            {
                                                                block: "Grid",
                                                                columns: 2,
                                                                children: [
                                                                    {
                                                                        block: "Stack",
                                                                        direction: "vertical",
                                                                        children: [
                                                                            {
                                                                                block: "Heading",
                                                                                variant: "heading-xxl/bold",
                                                                                content: "What can I get with orbs?",
                                                                            },
                                                                            {
                                                                                block: "Text",
                                                                                variant: "text-md/normal",
                                                                                content:
                                                                                    "Spend Orbs on exclusives or grab your favorites from the shop",
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            };
                            return (0, l.jsxs)("div", {
                                style: { position: "relative" },
                                children: [
                                    (0, l.jsx)("div", {
                                        style: {
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 0.4,
                                            top: -168,
                                            left: 0,
                                            right: 0,
                                            backgroundImage:
                                                "url('https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d')",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                        },
                                    }),
                                    (0, l.jsx)(ey.v3.Provider, {
                                        value: tw,
                                        children: (0, l.jsx)("div", {
                                            style: { position: "relative" },
                                            children: (0, l.jsx)(tE, { layout: e }),
                                        }),
                                    }),
                                ],
                            });
                        },
                        controls: {},
                    },
                    {
                        name: "Themed Images",
                        id: "themed-images",
                        component: function (e) {
                            let { lightAsset: t, darkAsset: n } = e,
                                a = {
                                    id: "themed-images",
                                    children: [
                                        {
                                            block: "BackgroundImage",
                                            backgroundImage: { src: { light: t, dark: n } },
                                            children: [
                                                {
                                                    block: "Stack",
                                                    direction: "vertical",
                                                    children: [
                                                        {
                                                            block: "Heading",
                                                            variant: "heading-xl/bold",
                                                            content: "Theme-aware images",
                                                        },
                                                        {
                                                            block: "Text",
                                                            variant: "text-md/normal",
                                                            content: "Switch your app theme to see this change",
                                                        },
                                                        {
                                                            block: "Text",
                                                            variant: "text-sm/normal",
                                                            content:
                                                                "(Light shows multiple orbs, dark shows hands holding an orb)",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                };
                            return (0, l.jsx)(tE, { layout: a });
                        },
                        controls: {
                            lightAsset: {
                                label: "Light Asset URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d",
                            },
                            darkAsset: {
                                label: "Dark Asset URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                            },
                        },
                    },
                    {
                        name: "Layout System String",
                        id: "layout-system-string",
                        component: function (e) {
                            let { text: t } = e;
                            (0, c.useSyncMessages)(tI.c);
                            let n = u(t);
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(r.E, {
                                        variant: "text-lg/bold",
                                        children: [
                                            "Any registered string key can be used to reference client-side international strings",
                                            " ",
                                        ],
                                    }),
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: "Strings are registered in `useLayoutSystemString.tsx`",
                                    }),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsxs)(r.E, { variant: "text-md/semibold", children: ["Received: ", t] }),
                                    (0, l.jsxs)(r.E, { variant: "text-md/semibold", children: ["Resolved: ", n] }),
                                ],
                            });
                        },
                        controls: {
                            text: { label: "Text", type: "text", defaultValue: "COLLECTIBLES_SHOP_THE_COLLECTION" },
                        },
                    },
                ],
            },
            tA,
            eT,
            {
                title: "Content Wrappers",
                stories: [
                    {
                        name: "NarrowContent",
                        id: "narrow-content",
                        component: function (e) {
                            let { padding: t } = e;
                            return (0, l.jsx)("div", {
                                style: { background: "#5865f2", width: "100%" },
                                children: (0, l.jsx)(eV, {
                                    padding: t,
                                    children: (0, l.jsx)("div", {
                                        style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                                        children: "Content constrained to 1080px, centered",
                                    }),
                                }),
                            });
                        },
                        controls: { padding: { label: "Padding", type: "number", defaultValue: 32, minValue: 0 } },
                    },
                    {
                        name: "FullBleedContent",
                        id: "full-bleed-content",
                        component: function (e) {
                            let { padding: t } = e;
                            return (0, l.jsx)("div", {
                                style: { background: "#5865f2", width: "100%" },
                                children: (0, l.jsx)(ew, {
                                    padding: t,
                                    children: (0, l.jsx)("div", {
                                        style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                                        children: "Full-width content",
                                    }),
                                }),
                            });
                        },
                        controls: { padding: { label: "Padding", type: "number", defaultValue: 0, minValue: 0 } },
                    },
                ],
            },
            {
                title: "Featured Blocks",
                stories: [
                    {
                        name: "FeaturedChip",
                        id: "featured-chip",
                        component: function (e) {
                            let { backgroundImage: t, ...n } = e,
                                a = { backgroundImage: { src: t }, ...n };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Chip will take up the full width of the parent, so it is best suited for LayoutSystemStack or Grid parents",
                                    }),
                                    (0, l.jsx)(A, { children: (0, l.jsx)(e_, { ...a }) }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, l.jsxs)(V, {
                                                columns: 3,
                                                children: [
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(p, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                    (0, l.jsx)(e_, { ...a }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: {
                            backgroundImage: {
                                label: "Background Image",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                            },
                            ctaText: { label: "Background Image", type: "text", defaultValue: "Browse" },
                            href: { label: "href", type: "text", defaultValue: "/shop/things" },
                        },
                    },
                    {
                        name: "FeaturedCollection",
                        id: "featured-collection",
                        component: function (e) {
                            let {
                                    columns: t,
                                    backgroundImage: n,
                                    logoSrc: a,
                                    supplementalImage: s,
                                    ctaText: i,
                                    href: o,
                                } = e,
                                c = {
                                    backgroundImage: { src: n },
                                    logoSrc: { src: a },
                                    supplementalImage: { src: s },
                                    ctaText: i,
                                    href: o,
                                };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Collection will take up the full width of the parent, so it is best suited for LayoutSystemStack or Grid parents",
                                    }),
                                    (0, l.jsx)(A, { children: (0, l.jsx)(Z, { ...c }) }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsxs)(r.E, {
                                                variant: "text-lg/semibold",
                                                children: ["Grid (", t, "):"],
                                            }),
                                            (0, l.jsxs)(V, {
                                                columns: t,
                                                children: [(0, l.jsx)(Z, { ...c }), (0, l.jsx)(Z, { ...c })],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(p, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(Z, { ...c }),
                                                    (0, l.jsx)(Z, { ...c }),
                                                    (0, l.jsx)(Z, { ...c }),
                                                    (0, l.jsx)(Z, { ...c }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: {
                            backgroundImage: {
                                label: "Background Image",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                            },
                            logoSrc: {
                                label: "Logo Source",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                            },
                            supplementalImage: {
                                label: "supplemental Image",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                            },
                            ctaText: { label: "Background Image", type: "text", defaultValue: "Browse" },
                            href: { label: "href", type: "text", defaultValue: "/shop/things" },
                            columns: { label: "Columns", type: "number", defaultValue: 2 },
                        },
                    },
                    {
                        name: "FeaturedProduct",
                        id: "featured-product",
                        component: function (e) {
                            let { backgroundImage: t, ...n } = e,
                                a = { backgroundImage: { src: t }, ...n };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "PLACEHOLDER" }),
                                    (0, l.jsx)(A, { children: (0, l.jsx)(eO, { ...a }) }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, l.jsxs)(V, {
                                                columns: 3,
                                                children: [
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(p, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                    (0, l.jsx)(eO, { ...a }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: {
                            backgroundImage: {
                                label: "Background Image",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                            },
                            ctaText: { label: "Background Image", type: "text", defaultValue: "Browse" },
                            href: { label: "href", type: "text", defaultValue: "/shop/things" },
                            skuId: { label: "Sku Id", type: "text", defaultValue: "1458472704192811088" },
                        },
                    },
                ],
            },
            eD,
            tO,
            {
                title: "Sku",
                stories: [
                    {
                        name: "ShopProductCard",
                        id: "shopProduct-card",
                        component: function (e) {
                            let { skuId: t } = e;
                            return (0, l.jsx)("div", { children: (0, l.jsx)(ek, { skuId: t }) });
                        },
                        controls: { skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" } },
                    },
                    {
                        name: "SkuPreview",
                        id: "skupreview",
                        component: function (e) {
                            let { skuId: t } = e;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(tH, { skuId: t }),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsx)(r.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                                    (0, l.jsxs)(x.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                            (0, l.jsx)(t_.A, {
                                                text: c.intl.string(c.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704192811088",
                                                children: (e) =>
                                                    (0, l.jsx)(Q.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(r.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458472704192811088",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(x.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                            (0, l.jsx)(t_.A, {
                                                text: c.intl.string(c.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458479739110166560",
                                                children: (e) =>
                                                    (0, l.jsx)(Q.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(r.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458479739110166560",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(x.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                            (0, l.jsx)(t_.A, {
                                                text: c.intl.string(c.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704524156959",
                                                children: (e) =>
                                                    (0, l.jsx)(Q.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(r.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458472704524156959",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: { skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" } },
                    },
                ],
            },
            {
                title: "Utilities",
                stories: [
                    {
                        name: "The Any Block",
                        id: "any",
                        component: function () {
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                                    }),
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                                    }),
                                    (0, l.jsx)(A, { children: (0, l.jsx)(tf, {}) }),
                                ],
                            });
                        },
                        controls: {},
                    },
                    {
                        name: "Image",
                        id: "layout-system-image",
                        component: function (e) {
                            let { imageSrc: t, videoSrc: n } = e;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Static image" }),
                                            (0, l.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, l.jsx)(J, { src: { src: t } }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Video asset" }),
                                            (0, l.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, l.jsx)(J, { src: { src: n } }),
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: {
                            imageSrc: {
                                label: "Image URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                            },
                            videoSrc: {
                                label: "Video URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
                            },
                        },
                    },
                ],
            },
        ],
    },
    tD = { collections: [tR] };
