l.d(t, { layoutSystemConfig: () => tQ });
var n,
    r,
    a = l(477900),
    s = l(582128),
    i = l(834730),
    o = l(534514),
    c = l(821609),
    d = l(976860),
    u = l(792996);
let h = {
    COLLECTIBLES_SHOP_THE_VAULT_COLLECTION: u.t["/35Yzx"],
    COLLECTIBLES_SHOP_THE_COLLECTION: u.t.xYKa1T,
    COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT: u.t.Yr70c4,
    COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON: u.t.AfrvRD,
    COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON_BROWSE: u.t["i/yzHs"],
    COLLECTIBLES_FIND_YOUR_STYLE_SECTION_HEADER: u.t.NSv5KV,
    COLLECTIBLES_FIND_YOUR_STYLE_SECTION_DISCLAIMER_SHORT: u.t.euks4U,
    TAKE_ME_THERE: u.t.jVcuVY,
    GLOBAL_DISCOVERY_QUESTS_HOME_ORBS_INTRO_TITLE: u.t.BCBIlp,
    GLOBAL_DISCOVERY_QUESTS_HOME_ORBS_INTRO_DESCRIPTION: u.t.U9FY0J,
    GO_TO_QUEST_HOME_CTA: u.t["1CdL8d"],
};
function m(e) {
    if (e in h) {
        let t = u.intl.string(h[e]);
        if ("" !== t) return t;
    }
    return e;
}
let b = function (e) {
        let { href: t, ctaText: l, variant: n = "secondary" } = e,
            r = m(l);
        return (0, a.jsx)(c.$, {
            variant: n,
            text: r,
            onClick: () => {
                (0, d.pX)(t);
            },
        });
    },
    x = function (e) {
        let { content: t, ...l } = e,
            n = m(String(t));
        return (0, a.jsx)(o.D, { ...l, children: n });
    };
var p = l(331322);
let f = function (e) {
        let { gap: t = 24, ...l } = e;
        return (0, a.jsx)(p.B, { ...l, gap: t });
    },
    g = function (e) {
        let { content: t, ...l } = e,
            n = m(String(t));
        return (0, a.jsx)(i.E, { ...l, children: n });
    };
var j = l(866665);
let y = function (e) {
    let { text: t, ...l } = e,
        n = m(String(t));
    return (0, a.jsx)(j.m, { text: n, ...l, asContainer: !0 });
};
var v = l(503698),
    k = l.n(v),
    S = l(123292),
    E = l(770178),
    C = (((n = {}).PAGE = "page"), (n.ITEM = "item"), n),
    T = (((r = {}).PAGINATE = "paginate"), (r.TRUNCATE = "truncate"), r);
let I = new Set(["SkuList", "SubLayout", "SubTemplate"]);
var L = l(15447);
function w(e) {
    let { index: t, active: l, setPage: n } = e;
    return (0, a.jsx)("div", {
        className: k()(L.page, { [L.active]: l }),
        children: (0, a.jsx)(S.Q, {
            role: "button",
            variant: l ? "always-white" : "secondary",
            size: "sm",
            text: (t + 1).toString(),
            onClick: () => n(t),
        }),
    });
}
function A(e) {
    let { page: t, pages: l, setPage: n } = e,
        [r, i] = s.useState(0),
        o = (0, E.w)((e) => {
            let { contentRect: t } = e;
            i(t.width);
        }),
        c = s.useMemo(() => {
            let e;
            if (null == l || l < 1) return null;
            let s = Math.min(8, Math.max(3, Math.floor((r - 160) / 32)));
            if (l <= s) e = Array.from({ length: l }, (e, t) => t);
            else {
                let n = s - 2,
                    r = Math.max(1, t - Math.floor(n / 2)),
                    a = Math.min(l - 2, r + n - 1);
                r = Math.max(1, a - n + 1);
                let i = Array.from({ length: n }, (e, t) => r + t);
                (r > 1 && (i[0] = "ellipsis"), a < l - 2 && (i[i.length - 1] = "ellipsis"), (e = [0, ...i, l - 1]));
            }
            return e.map((e, l) =>
                "number" == typeof e
                    ? (0, a.jsx)(w, { index: e, active: t === e, setPage: n }, e)
                    : (0, a.jsx)(
                          "div",
                          {
                              className: L.page,
                              children: (0, a.jsx)(g, { variant: "body-md/semibold", content: "..." }),
                          },
                          `ellipsis-${l}`,
                      ),
            );
        }, [t, l, n, r]);
    return (0, a.jsx)("div", {
        ref: o,
        className: L.pagination,
        children: (0, a.jsxs)(f, {
            direction: "horizontal",
            justify: "center",
            align: "center",
            children: [
                (0, a.jsx)(S.Q, {
                    variant: "secondary",
                    disabled: 0 === t,
                    text: "Back",
                    onClick: () => {
                        n(t - 1);
                    },
                }),
                (0, a.jsx)("div", {
                    className: L.pageNumbers,
                    children: (0, a.jsx)(f, {
                        direction: "horizontal",
                        justify: "center",
                        align: "center",
                        children: c,
                    }),
                }),
                (0, a.jsx)(S.Q, {
                    variant: "secondary",
                    disabled: t === l - 1,
                    text: "Next",
                    onClick: () => {
                        n(t + 1);
                    },
                }),
            ],
        }),
    });
}
let V = s.createContext(void 0);
function M(e, t, l, n) {
    return null == t || null == l ? e : n ? e.slice(0, l) : e.slice(l * t, l * (t + 1));
}
function _(e, t, l) {
    let {
            paginationStrategy: n = T.PAGINATE,
            perPage: r,
            paginationPosition: a = "bottom",
            scrollToTop: i = !0,
        } = t ?? {},
        o = n === T.TRUNCATE,
        [c, d] = s.useState(0),
        [u, h] = s.useState(r),
        [m, b] = s.useState(e),
        x = null == r || r < 1 ? 0 : Math.ceil(e / r),
        p = null != r && r > 0;
    return (
        (u !== r || m !== e) && (h(r), b(e), d(0)),
        {
            page: c,
            pages: x,
            paginate: p,
            showPagination: !o && p && x > 1,
            paginationPosition: a,
            truncate: o,
            perPage: r,
            setPage: s.useCallback(
                (e) => {
                    (d(e),
                        i && l?.current != null && l.current.scrollIntoView({ behavior: "instant", block: "start" }));
                },
                [i, l],
            ),
        }
    );
}
let P = function (e) {
        let { columns: t = 3, paginationOptions: l, children: n } = e,
            r = Math.max(1, Math.min(6, Math.floor(t))),
            i = s.Children.count(n),
            o = s.useRef(null),
            {
                page: c,
                pages: d,
                paginate: u,
                showPagination: h,
                paginationPosition: m,
                truncate: b,
                perPage: x,
                setPage: p,
            } = _(i, l, o),
            f = s.useMemo(() => M(s.Children.toArray(n), u ? c : void 0, x, b), [c, x, n, u, b]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                h && "top" === m && (0, a.jsx)(A, { page: c, pages: d, setPage: p }),
                (0, a.jsx)(V.Provider, {
                    value: l,
                    children: (0, a.jsx)("div", {
                        ref: o,
                        className: L.gridContainer,
                        children: (0, a.jsx)("div", { className: k()(L.grid, L[`columns${r}`]), children: f }),
                    }),
                }),
                h && "bottom" === m && (0, a.jsx)(A, { page: c, pages: d, setPage: p }),
            ],
        });
    },
    O = function (e) {
        let { verticalMargin: t = 16, padding: l = 0, children: n } = e;
        return (0, a.jsx)("section", {
            style: { alignSelf: "start", width: "100%", marginTop: t, marginBottom: t, padding: l },
            children: n,
        });
    };
var N = l(607470);
(l(323874), l(14289), l(35956), l(321073));
var B = l(435558),
    F = l(736653);
let R = {
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
    H = new Set(["video/mp4", "video/webm", "video/quicktime"]);
function D(e) {
    return null != e && H.has(e);
}
let G = [],
    U = new Map(),
    Y = new Map();
function $(e, t) {
    if (null != e) return (0, B.isString)(e) ? e : "light" === t ? e.light : e.dark;
}
function W(e) {
    try {
        let t = new URL(e).pathname;
        return R[t.split(".").pop()?.toLowerCase() ?? ""];
    } catch {
        return R[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""];
    }
}
let z = function (e) {
    let t = (0, F.Ay)(),
        l = s.useMemo(() => {
            var l;
            return null == e
                ? G
                : ((l = Array.isArray(e) ? e : [e]),
                  l.flatMap((e) => {
                      if (null == e) return [];
                      if ("object" == typeof e && "src" in e) {
                          let l = $(e.src, t);
                          return null == l ? [] : [{ src: l, alt: e.alt, mimeType: W(l) }];
                      }
                      let l = $(e, t);
                      return null != l ? [{ src: l, mimeType: W(l) }] : [];
                  }));
        }, [e, t]),
        [n, r] = s.useState({}),
        [a, i] = s.useState(new Set());
    return (
        s.useEffect(() => {
            if (0 === l.length) return;
            let e = {},
                t = [];
            for (let { src: n, mimeType: r } of l) null == r && (U.has(n) ? (e[n] = U.get(n)) : t.push(n));
            if (0 === Object.keys(e).length && 0 === t.length) return;
            let n = !1;
            return (
                !(async function () {
                    let l =
                        t.length > 0
                            ? await Promise.all(
                                  t.map(async (e) => [
                                      e,
                                      await (function (e) {
                                          if (U.has(e)) return Promise.resolve({ mimeType: U.get(e), status: void 0 });
                                          let t = Y.get(e);
                                          if (null != t) return t;
                                          let l = fetch(e, { method: "HEAD" })
                                              .then((t) => {
                                                  if (!t.ok) return { mimeType: void 0, status: t.status };
                                                  let l = (t.headers.get("Content-Type") ?? "").split(";")[0].trim(),
                                                      n = "" !== l ? l : void 0;
                                                  return (U.set(e, n), { mimeType: n, status: t.status });
                                              })
                                              .catch(() => ({ mimeType: void 0, status: void 0 }))
                                              .finally(() => Y.delete(e));
                                          return (Y.set(e, l), l);
                                      })(e),
                                  ]),
                              )
                            : [];
                    if (!n) {
                        let t = {},
                            n = [];
                        for (let [e, r] of l) null != r.status && r.status >= 400 ? n.push(e) : (t[e] = r.mimeType);
                        (r((l) => ({ ...l, ...e, ...t })), n.length > 0 && i((e) => new Set([...e, ...n])));
                    }
                })(),
                () => {
                    n = !0;
                }
            );
        }, [l]),
        s.useMemo(() => {
            if (0 === l.length) return null;
            let e = l.map((e) => ({ ...e, mimeType: e.mimeType ?? n[e.src] }));
            return e.find((e) => !a.has(e.src)) ?? e[0];
        }, [l, n, a])
    );
};
var K = l(169819);
let Q = function (e) {
    let {
            backgroundImage: t,
            backgroundSize: l = "cover",
            backgroundPosition: n = "center",
            backgroundRepeat: r = "no-repeat",
            backgroundColor: s,
            padding: i = 16,
            children: o,
        } = e,
        c = z(t),
        d = D(c?.mimeType);
    return (0, a.jsxs)("div", {
        className: K.k,
        style: {
            ...(!d && null != c ? { backgroundImage: `url(${c.src})` } : {}),
            backgroundSize: l,
            backgroundPosition: n,
            backgroundRepeat: r,
            backgroundColor: s,
            padding: i,
        },
        children: [
            d &&
                null != c &&
                (0, a.jsx)(N.A, { className: K.O, src: c.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            o,
        ],
    });
};
var q = l(219407);
let J = function (e) {
    let { children: t, overflowable: l = !1 } = e;
    return (0, a.jsx)("div", { className: k()(q.N, { [q.L]: l }), children: t });
};
function X() {
    return (0, a.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120, minWidth: 120 } });
}
var Z = l(939249),
    ee = l(715333);
let et = function (e) {
    let { src: t } = e,
        l = z(t);
    return null == l
        ? null
        : D(l.mimeType)
          ? (0, a.jsx)(N.A, { className: ee.S, src: l.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, a.jsx)("img", { className: ee.S, src: l.src, alt: l.alt ?? "" });
};
var el = l(948111);
let en = function (e) {
    let { backgroundImage: t, logoSrc: l, supplementalImage: n, href: r, ctaText: s } = e,
        i = null != r;
    return (0, a.jsxs)(Z.D, {
        className: el.rJ,
        onClick: i
            ? (e) => {
                  (e.preventDefault(), (0, d.pX)(r));
              }
            : void 0,
        children: [
            (0, a.jsx)(J, {
                overflowable: !0,
                children: (0, a.jsx)(Q, {
                    backgroundImage: t,
                    backgroundPosition: "left",
                    padding: 24,
                    children: (0, a.jsx)("div", {
                        className: el.rf,
                        children: (0, a.jsxs)("div", {
                            className: el.kb,
                            children: [
                                (0, a.jsx)("div", {}),
                                null != l &&
                                    (0, a.jsx)("div", { className: el.wm, children: (0, a.jsx)(et, { src: l }) }),
                                null != s && (0, a.jsx)(b, { ctaText: s, variant: "overlay-primary", href: r }),
                            ],
                        }),
                    }),
                }),
            }),
            null != n && (0, a.jsx)("div", { className: el.hP, children: (0, a.jsx)(et, { src: n }) }),
        ],
    });
};
var er = l(713517),
    ea = l(715591);
function es(e) {
    let { position: t, children: l } = e;
    return (0, a.jsx)("div", { className: k()(ea.child, ea[t]), children: l });
}
let ei = (e) => {
    let { children: t, paused: l = !1, slideDuration: n = 5e3 } = e,
        [r, i] = s.useState(0),
        o = s.useRef(null),
        c = (0, er.M)(o),
        d = s.useRef(void 0),
        u = s.useMemo(
            () =>
                s.Children.map(t, (e) =>
                    s.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : s.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        );
    s.useEffect(() => {
        Array.isArray(u) ? i(r >= u?.length ? Math.max(u?.length - 1, 0) : r) : i(0);
    }, [u, r]);
    let h = l || c;
    return (s.useEffect(() => {
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
                    (d.current = window.setTimeout(e, n)));
            }, n)));
    }, [h, n, u]),
    s.useEffect(
        () => () => {
            window.clearTimeout(d.current);
        },
        [],
    ),
    null == u)
        ? null
        : Array.isArray(u)
          ? (0, a.jsx)("div", {
                ref: o,
                className: ea.carousel,
                children: (0, a.jsx)("div", {
                    className: ea.children,
                    children: u?.map((e, t) => {
                        var l, n, s;
                        let i =
                            ((l = t),
                            (n = r),
                            (s = u.length),
                            l === n
                                ? "center"
                                : l < n
                                  ? n === s - 1 && 0 === l
                                      ? "right"
                                      : "left"
                                  : 0 === n && l === s - 1
                                    ? "left"
                                    : "right");
                        return (0, a.jsx)(es, { position: i, children: e }, t);
                    }),
                }),
            })
          : (0, a.jsx)("div", {
                ref: o,
                className: ea.carousel,
                children: (0, a.jsx)("div", {
                    className: ea.children,
                    children: (0, a.jsx)(es, { position: "center", children: t }),
                }),
            });
};
function eo() {
    return (0, a.jsx)("div", {
        style: { display: "flex", justifyContent: "center", alignItems: "center" },
        children: (0, a.jsx)("div", { style: { height: 96, width: 96, borderRadius: 48, background: "grey" } }),
    });
}
function ec() {
    return (0, a.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 240 } });
}
var ed = l(395399);
let eu = function (e) {
        let { colors: t, angle: l = 180, padding: n = 16, children: r } = e,
            i = s.useMemo(() => {
                if (t.length > 1) return `linear-gradient(${l}deg, ${t.join(", ")})`;
                if (t.length > 0) {
                    let e = t[0];
                    return `linear-gradient(${l}deg, ${e}, ${e})`;
                }
            }, [t, l]);
        return (0, a.jsx)("div", { className: ed.k, style: { backgroundImage: i, padding: n }, children: r });
    },
    eh = function (e) {
        let { children: t, columns: l = 1, rows: n = 1 } = e,
            r = Math.max(1, Math.min(6, Math.floor(l))),
            s = Math.max(1, Math.min(6, Math.floor(n))),
            i = L[`gridItemColumns${r}`],
            o = L[`gridItemRows${s}`];
        return (0, a.jsx)("div", { className: `${L.gridItem} ${i} ${o}`, children: t });
    };
function em(e) {
    let { color: t, children: l } = e;
    return (0, a.jsx)("div", {
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
        children: l,
    });
}
let eb = {
    name: "Grid",
    id: "grid",
    component: function (e) {
        let {
            columns: t,
            paginationStrategy: l,
            perPage: n,
            paginationPosition: r,
            gridItemColumns: s,
            gridItemRows: o,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(i.E, {
                    variant: "body-lg/semibold",
                    children:
                        "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                }),
                (0, a.jsx)("br", {}),
                (0, a.jsx)(i.E, {
                    variant: "body-lg/semibold",
                    children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                }),
                (0, a.jsx)("div", {
                    style: { marginTop: 24 },
                    children: (0, a.jsxs)(P, {
                        columns: t,
                        paginationOptions: { paginationStrategy: l, perPage: n, paginationPosition: r },
                        children: [
                            (0, a.jsx)(em, { color: "red" }),
                            (0, a.jsx)(eh, {
                                columns: s,
                                rows: o,
                                children: (0, a.jsx)(em, {
                                    color: "orange",
                                    children: (0, a.jsx)(i.E, { variant: "body-lg/semibold", children: "GridItem" }),
                                }),
                            }),
                            (0, a.jsx)(em, { color: "yellow" }),
                            (0, a.jsx)(em, { color: "green" }),
                            (0, a.jsx)(em, { color: "blue" }),
                            (0, a.jsx)(em, { color: "violet" }),
                            (0, a.jsx)(em, { color: "red" }),
                            (0, a.jsx)(em, { color: "orange" }),
                            (0, a.jsx)(em, { color: "yellow" }),
                            (0, a.jsx)(em, { color: "green" }),
                            (0, a.jsx)(em, { color: "blue" }),
                            (0, a.jsx)(em, { color: "violet" }),
                            (0, a.jsx)(em, { color: "red" }),
                            (0, a.jsx)(em, { color: "orange" }),
                            (0, a.jsx)(em, { color: "yellow" }),
                            (0, a.jsx)(em, { color: "green" }),
                            (0, a.jsx)(em, { color: "blue" }),
                            (0, a.jsx)(em, { color: "violet" }),
                            (0, a.jsx)(em, { color: "red" }),
                            (0, a.jsx)(em, { color: "orange" }),
                            (0, a.jsx)(em, { color: "yellow" }),
                            (0, a.jsx)(em, { color: "green" }),
                            (0, a.jsx)(em, { color: "blue" }),
                            (0, a.jsx)(em, {
                                color: "violet",
                                children: (0, a.jsx)(i.E, { variant: "body-lg/semibold", children: "Last Child" }),
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
            defaultValue: T.PAGINATE,
            options: [
                { label: "Paginate", value: T.PAGINATE },
                { label: "Truncate", value: T.TRUNCATE },
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
var ex = l(150934),
    ep = l(95477),
    ef = l(691885),
    eg = l(713387),
    ej = l(855986),
    ey = l(408278),
    ev = l(548411),
    ek = l(554830),
    eS = l(59520),
    eE = l(775602),
    eC = l(619893);
function eT(e) {
    return `var(--space-${e})`;
}
let eI = function (e) {
    let {
            children: t,
            gap: l = 24,
            edgeFade: n = "xl",
            hideActionsWhenDisabled: r = !0,
            className: i,
            iconButtonSize: o,
            scrollBehavior: c = C.PAGE,
            "aria-label": d,
            gridContainerProps: h,
            gridRowProps: m,
        } = e,
        b = s.useId(),
        x = null != h,
        f = s.useRef(0),
        g = s.useRef(0),
        j = s.useRef(0),
        y = s.useRef(!1),
        v = s.useRef(!1),
        S = s.useRef(null),
        T = s.useRef(null),
        I = (0, ej.bG)([eE.Ay], () => eE.Ay.keyboardModeEnabled),
        L = (0, ej.bG)([eE.Ay], () => eE.Ay.useReducedMotion),
        w = s.useMemo(
            () =>
                s.Children.map(t, (e) =>
                    s.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : s.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [A, V] = s.useState(!1),
        [M, _] = s.useState(!1),
        [P, O] = s.useState(!0);
    function N() {
        V(g.current > f.current);
    }
    let B = s.useCallback(() => {
            let e;
            if (x || v.current) return null;
            let t = D.current;
            if (null == t || 0 === t.childElementCount) return null;
            let l = j.current,
                n = t.clientWidth,
                r = t.scrollWidth - n;
            if (l <= 0) e = 0;
            else if (l >= r) e = t.childElementCount - 1;
            else {
                let r = l + n / 2,
                    a = 0,
                    s = 1 / 0;
                for (let e = 0; e < t.children.length; e++) {
                    let l = t.children[e],
                        n = Math.abs(l.offsetLeft + l.offsetWidth / 2 - r);
                    n < s && ((s = n), (a = e));
                }
                e = a;
            }
            return ((S.current = e), e);
        }, [x]),
        F = s.useCallback(() => {
            let e = D.current;
            null != e && (_(j.current > 0), O(j.current + e.clientWidth < e.scrollWidth), B());
        }, [B]),
        R = s.useCallback(() => {
            if (x) return;
            let e = D.current;
            if (null == e) return;
            let t = S.current;
            Array.from(e.children).forEach((e, l) => {
                Array.from(e.children).forEach((e) => {
                    I && l !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [I, x]),
        H = (0, E.w)((e) => {
            let { contentRect: t } = e;
            ((f.current = t.width), null != D.current && (j.current = D.current?.scrollLeft), N(), F(), R());
        }),
        D = s.useRef(null);
    s.useEffect(() => {
        let e = D.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            ((g.current = e.scrollWidth), e.scrollLeft !== j.current && (e.scrollLeft = j.current), N(), F());
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let l = new MutationObserver(() => {
            (t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != T.current && T.current >= e.childElementCount && (T.current = null));
        });
        function n() {
            null != e && (c === C.ITEM && (j.current = e.scrollLeft), F());
        }
        return (
            l.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", n),
            () => {
                (t.disconnect(), l.disconnect(), e.removeEventListener("scrollend", n));
            }
        );
    }, [F, c]);
    let G = s.useCallback(
            (e) => {
                let t = D.current;
                if (null == t) return;
                let l = L ? "auto" : "smooth",
                    n = Math.max(0, t.scrollWidth - t.clientWidth);
                if (x) {
                    let r = "right" === e ? t.clientWidth : -t.clientWidth,
                        a = Math.max(0, Math.min(n, j.current + r));
                    ((j.current = a),
                        (y.current = !0),
                        t.addEventListener("scrollend", () => (y.current = !1), { once: !0 }),
                        t.scrollTo({ left: a, behavior: l }),
                        F());
                    return;
                }
                if (c === C.ITEM && null != t.firstElementChild) {
                    let r = S.current ?? B() ?? 0,
                        a = Math.max(0, Math.min(t.childElementCount - 1, r + ("right" === e ? 1 : -1))),
                        s = t.children[a];
                    if (null != s) {
                        let e = Math.max(0, Math.min(n, s.offsetLeft));
                        ((j.current = e),
                            (y.current = !0),
                            t.addEventListener(
                                "scrollend",
                                () => {
                                    ((y.current = !1), (S.current = a), (T.current = a));
                                },
                                { once: !0 },
                            ),
                            t.scrollTo({ left: e, behavior: l }),
                            F(),
                            (S.current = a),
                            (T.current = a));
                    }
                    return;
                }
                let r = "right" === e ? f.current : -f.current,
                    a = Math.max(0, Math.min(n, j.current + r));
                ((j.current = a),
                    (y.current = !0),
                    t.addEventListener("scrollend", () => (y.current = !1), { once: !0 }),
                    t.scrollTo({ left: a, behavior: l }),
                    F());
                let s = B();
                null != s && (T.current = s);
            },
            [x, c, L, F, B],
        ),
        U = s.useCallback(() => G("left"), [G]),
        Y = s.useCallback(() => G("right"), [G]),
        $ = (0, eS.I)(U, 200, [U]),
        W = (0, eS.I)(Y, 200, [Y]),
        z = s.useCallback(() => {
            let e = D.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        K = s.useCallback(() => {
            let e = D.current;
            if (null != e) {
                for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                R();
            }
        }, [R]),
        Q = s.useCallback(() => {
            setTimeout(() => {
                z() || K();
            }, 10);
        }, [z, K]);
    (s.useLayoutEffect(() => {
        x || z() || K();
    }, [w, x, z, K]),
        s.useEffect(() => {
            R();
        }, [I, R]));
    let q = { "--custom-edge-fade-width": eT(n) };
    return (0, a.jsxs)("div", {
        ref: H,
        role: null != d ? "region" : void 0,
        "aria-label": d,
        style: q,
        className: k()(eC.kL, i),
        children: [
            A &&
                (0, a.jsxs)("div", {
                    className: eC.o1,
                    role: "group",
                    children: [
                        (0, a.jsx)("div", {
                            className: k()(eC.x6, { [eC.r9]: !M && r }),
                            children: (0, a.jsx)(ey.K, {
                                icon: ev.ArrowLargeLeftIcon,
                                size: o,
                                variant: "overlay-secondary",
                                onClick: $,
                                disabled: !M,
                                "aria-label": u.intl.string(u.t.FQx1Ru),
                                "aria-hidden": !M && r,
                                "aria-controls": b,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: k()(eC.x6, { [eC.r9]: !P && r }),
                            children: (0, a.jsx)(ey.K, {
                                icon: ek.ArrowLargeRightIcon,
                                size: o,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !P,
                                "aria-label": u.intl.string(u.t.H4hwjn),
                                "aria-hidden": !P && r,
                                "aria-controls": b,
                            }),
                        }),
                    ],
                }),
            x
                ? (0, a.jsx)(p.B, {
                      direction: "horizontal",
                      gap: l,
                      id: b,
                      "aria-label": d,
                      ref: D,
                      className: k()(eC.Y_, { [eC.jL]: M, [eC.w6]: P, [eC.XG]: M && P, [eC.DY]: I }),
                      ...h,
                      tabIndex: -1,
                      onScroll: (e) => {
                          y.current || ((j.current = e.target.scrollLeft), F());
                      },
                      children: (0, a.jsx)("div", { ...m, className: eC.lJ, style: { gap: eT(l) }, children: t }),
                  })
                : (0, a.jsx)(p.B, {
                      direction: "horizontal",
                      gap: l,
                      id: b,
                      "aria-label": d,
                      ref: D,
                      className: k()(eC.Y_, { [eC.jL]: M, [eC.w6]: P, [eC.XG]: M && P, [eC.DY]: I }),
                      tabIndex: 0,
                      onFocus: (e) => {
                          let t = D.current;
                          if (null != t) {
                              if (
                                  (e.preventDefault(),
                                  (null == S.current || S.current >= t.childElementCount) && B(),
                                  -1 !== t.tabIndex)
                              ) {
                                  let e = T.current,
                                      l = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                      n = t.children[l];
                                  null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (S.current = l), R());
                              }
                              t.setAttribute("tabIndex", "-1");
                          }
                      },
                      onBlur: (e) => {
                          (e.preventDefault(), Q());
                      },
                      onKeyDown: (e) => {
                          let t = D.current;
                          if (null == t) return;
                          let l = t.children,
                              n = S.current ?? 0,
                              r = l[n];
                          null != r && r.setAttribute("tabIndex", "-1");
                          let a = ["ArrowLeft"],
                              s = ["ArrowRight"];
                          if ([...a, ...s].includes(e.key))
                              if (
                                  (e.preventDefault(),
                                  a.includes(e.key) && (n = Math.max(0, n - 1)),
                                  s.includes(e.key) && (n = Math.min(t.childElementCount - 1, n + 1)),
                                  null != (r = l[n]))
                              ) {
                                  (r.setAttribute("tabIndex", "0"),
                                      t.setAttribute("tabIndex", "-1"),
                                      r.focus({ preventScroll: !0 }));
                                  let e = r.offsetLeft - t.clientWidth / 2 + r.offsetWidth / 2,
                                      l = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                                  ((j.current = l),
                                      l !== t.scrollLeft &&
                                          ((y.current = !0),
                                          (v.current = !0),
                                          t.addEventListener(
                                              "scrollend",
                                              () => {
                                                  ((y.current = !1), (v.current = !1));
                                              },
                                              { once: !0 },
                                          ),
                                          t.scrollTo({ left: l, behavior: L ? "auto" : "smooth" })),
                                      (S.current = n),
                                      (T.current = n),
                                      R());
                              } else (t.setAttribute("tabIndex", "0"), B());
                      },
                      onScroll: (e) => {
                          y.current || ((j.current = e.target.scrollLeft), F());
                      },
                      children: w,
                  }),
        ],
    });
};
var eL = l(196637);
let ew = [
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
function eA() {
    return (0, a.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120 } });
}
var eV = l(674658),
    eM = l(987421),
    e_ = l(561769);
let eP = function (e) {
    let { skuId: t, aspectRatio: l } = e,
        { product: n } = (0, eV.q)(t, !0),
        {
            flattenProductVariants: r,
            productOverride: i,
            prioritizedCurrency: o,
            standalonePreview: c,
        } = s.useContext(e_.v3),
        d = s.useMemo(
            () => ({
                flattenProductVariants: r ?? !1,
                productOverride: i,
                prioritizedCurrency: o,
                standalonePreview: c,
            }),
            [r, i, o, c],
        );
    return null == n
        ? null
        : (0, a.jsx)(e_.v3.Provider, { value: d, children: (0, a.jsx)(eM.A, { skuId: t, aspectRatio: l }) });
};
var eO = l(19641);
function eN() {
    return (0, a.jsx)("div", { className: eO.iM });
}
let eB = function (e) {
        let { children: t } = e,
            l = s.useMemo(
                () =>
                    s.Children.map(t, (e) =>
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", { className: eO.jf, children: e }), (0, a.jsx)(eN, {})],
                        }),
                    ),
                [t],
            );
        return (0, a.jsx)("div", { className: eO.qV, children: (0, a.jsx)("div", { className: eO.Y_, children: l }) });
    },
    eF = {
        title: "Containers",
        stories: [
            eb,
            {
                name: "Card",
                id: "card",
                component: function () {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/semibold",
                                children:
                                    "Card wraps its children in a container that has border-radius and elevation on hover.",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/semibold",
                                children:
                                    "It will take up the full width of the parent, and the minimum height for its children",
                            }),
                            (0, a.jsxs)(O, {
                                children: [
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: { background: "red" },
                                            children: (0, a.jsx)(X, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: { background: "orange" },
                                            children: (0, a.jsx)(X, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: { background: "yellow" },
                                            children: (0, a.jsx)(X, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: { background: "green" },
                                            children: (0, a.jsx)(X, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: { background: "blue" },
                                            children: (0, a.jsx)(X, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: { background: "violet" },
                                            children: (0, a.jsx)(X, {}),
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(O, {
                                children: [
                                    (0, a.jsx)(i.E, {
                                        variant: "body-md/normal",
                                        children: "Cards inside of a horizontal stack with a min-width of 120px",
                                    }),
                                    (0, a.jsxs)(f, {
                                        direction: "horizontal",
                                        children: [
                                            (0, a.jsx)(J, {
                                                children: (0, a.jsx)("div", {
                                                    style: { background: "red" },
                                                    children: (0, a.jsx)(X, {}),
                                                }),
                                            }),
                                            (0, a.jsx)(J, {
                                                children: (0, a.jsx)("div", {
                                                    style: { background: "orange" },
                                                    children: (0, a.jsx)(X, {}),
                                                }),
                                            }),
                                            (0, a.jsx)(J, {
                                                children: (0, a.jsx)("div", {
                                                    style: { background: "yellow" },
                                                    children: (0, a.jsx)(X, {}),
                                                }),
                                            }),
                                            (0, a.jsx)(J, {
                                                children: (0, a.jsx)("div", {
                                                    style: { background: "green" },
                                                    children: (0, a.jsx)(X, {}),
                                                }),
                                            }),
                                            (0, a.jsx)(J, {
                                                children: (0, a.jsx)("div", {
                                                    style: { background: "blue" },
                                                    children: (0, a.jsx)(X, {}),
                                                }),
                                            }),
                                            (0, a.jsx)(J, {
                                                children: (0, a.jsx)("div", {
                                                    style: { background: "violet" },
                                                    children: (0, a.jsx)(X, {}),
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
                    let { verticalMargin: t, padding: l } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/semibold",
                                children:
                                    "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children.",
                            }),
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)("div", {
                                        style: { background: "red" },
                                        children: (0, a.jsx)(O, {
                                            verticalMargin: t,
                                            padding: l,
                                            children: (0, a.jsx)(eA, {}),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        style: { background: "orange" },
                                        children: (0, a.jsx)(O, {
                                            verticalMargin: t,
                                            padding: l,
                                            children: (0, a.jsx)(eA, {}),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        style: { background: "yellow" },
                                        children: (0, a.jsx)(O, {
                                            verticalMargin: t,
                                            padding: l,
                                            children: (0, a.jsx)(eA, {}),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        style: { background: "green" },
                                        children: (0, a.jsx)(O, {
                                            verticalMargin: t,
                                            padding: l,
                                            children: (0, a.jsx)(eA, {}),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        style: { background: "blue" },
                                        children: (0, a.jsx)(O, {
                                            verticalMargin: t,
                                            padding: l,
                                            children: (0, a.jsx)(eA, {}),
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        style: { background: "violet" },
                                        children: (0, a.jsx)(O, {
                                            verticalMargin: t,
                                            padding: l,
                                            children: (0, a.jsx)(eA, {}),
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
                    let { backgroundImage: t, secondBackgroundImage: l } = e;
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/semibold",
                                children:
                                    "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset",
                            }),
                            (0, a.jsx)(Q, {
                                backgroundImage: { src: t },
                                children: (0, a.jsx)(O, {
                                    children: (0, a.jsx)(P, {
                                        columns: 2,
                                        children: (0, a.jsxs)(f, {
                                            direction: "vertical",
                                            children: [
                                                (0, a.jsx)(o.D, {
                                                    variant: "heading-xxl/semibold",
                                                    children: "What can I get with orbs?",
                                                }),
                                                (0, a.jsx)(i.E, {
                                                    variant: "body-md/normal",
                                                    children:
                                                        "Spend Orbs on exclusives or grab your favorites from the shop",
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                            (0, a.jsx)(O, {
                                children: (0, a.jsx)(i.E, {
                                    variant: "body-lg/semibold",
                                    children: "It also automatically handles animated asset urls",
                                }),
                            }),
                            (0, a.jsx)(Q, {
                                backgroundImage: { src: l },
                                children: (0, a.jsx)(O, {
                                    children: (0, a.jsx)(P, {
                                        columns: 2,
                                        children: (0, a.jsxs)(f, {
                                            direction: "vertical",
                                            children: [
                                                (0, a.jsx)(o.D, {
                                                    variant: "heading-xxl/semibold",
                                                    children: "What can I get with orbs?",
                                                }),
                                                (0, a.jsx)(i.E, {
                                                    variant: "body-md/normal",
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
                    let { color1: t, color2: l, color3: n, angle: r } = e,
                        s = [t, l, n].filter((e) => null != e && "" !== e);
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/semibold",
                                children:
                                    "GradientBackground takes a `colors` array and renders a linear gradient behind its children at the given angle.",
                            }),
                            (0, a.jsx)(eu, {
                                colors: s,
                                angle: r,
                                children: (0, a.jsx)(O, {
                                    children: (0, a.jsx)(P, {
                                        columns: 2,
                                        children: (0, a.jsxs)(f, {
                                            direction: "vertical",
                                            children: [
                                                (0, a.jsx)(o.D, {
                                                    variant: "heading-xxl/semibold",
                                                    children: "What can I get with orbs?",
                                                }),
                                                (0, a.jsx)(i.E, {
                                                    variant: "body-md/normal",
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
                    let [e, t] = s.useState(15),
                        [l, n] = s.useState(8),
                        [r, i] = s.useState("xl"),
                        [o, d] = s.useState(!0),
                        u = s.useMemo(
                            () =>
                                [...Array(e)].map((e, t) =>
                                    (0, a.jsx)(
                                        Z.D,
                                        {
                                            className: eL.j,
                                            onClick: () => console.log(t),
                                            children: (0, a.jsxs)(p.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                children: [
                                                    (0, a.jsx)("div", { children: t }),
                                                    t % 3 == 0 &&
                                                        (0, a.jsx)(c.$, {
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
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(eI, { gap: l, edgeFade: r, hideActionsWhenDisabled: o, children: u }),
                            (0, a.jsx)(eg.nB, {}),
                            (0, a.jsxs)(eg.MG, {
                                children: [
                                    (0, a.jsx)(ex.S, {
                                        checked: o,
                                        onChange: () => d(!o),
                                        label: "Hide Actions When Disabled",
                                    }),
                                    (0, a.jsx)(ep.k, {
                                        type: "number",
                                        min: 0,
                                        value: e.toString(),
                                        onChange: (e) => {
                                            t((0, B.clamp)(+e, 0, 100));
                                        },
                                        label: "Children Count",
                                    }),
                                ],
                            }),
                            (0, a.jsx)(eg.MG, {
                                children: (0, a.jsx)(ef.l, {
                                    value: l,
                                    options: ew,
                                    onSelectionChange: n,
                                    label: "Children Gap",
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            }),
                            (0, a.jsx)(eg.MG, {
                                children: (0, a.jsx)(ef.l, {
                                    value: r,
                                    options: ew,
                                    onSelectionChange: i,
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
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/normal",
                                children: "Carousel steps through the children with a swipe and fade animation.",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/normal",
                                children:
                                    "It has very minimal configuration options, instead choosing to be opinionated about the functionality of a carousel in a Layout System world.",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/normal",
                                children:
                                    "The carousel will pause slidding when the mouse hovers it, and resume on mouse leave.",
                            }),
                            (0, a.jsx)(O, {
                                children: (0, a.jsxs)(ei, {
                                    ...e,
                                    children: [
                                        (0, a.jsx)("div", {
                                            style: { background: "red" },
                                            children: (0, a.jsx)(ec, {}),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { background: "orange" },
                                            children: (0, a.jsx)(ec, {}),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { background: "yellow" },
                                            children: (0, a.jsx)(ec, {}),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { background: "green" },
                                            children: (0, a.jsx)(ec, {}),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { background: "blue" },
                                            children: (0, a.jsx)(ec, {}),
                                        }),
                                        (0, a.jsx)("div", {
                                            style: { background: "violet" },
                                            children: (0, a.jsx)(ec, {}),
                                        }),
                                    ],
                                }),
                            }),
                            (0, a.jsxs)(O, {
                                children: [
                                    (0, a.jsx)(i.E, {
                                        variant: "body-md/normal",
                                        children:
                                            "Here is an example of what a carousel inside of a card might look like for showing off different products",
                                    }),
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsx)(J, {
                                        children: (0, a.jsx)("div", {
                                            style: {
                                                background: "white",
                                                padding: 12,
                                                borderRadius: 8,
                                                aspectRatio: "1/1",
                                                maxWidth: 240,
                                                display: "flex",
                                                overflow: "hidden",
                                            },
                                            children: (0, a.jsxs)(ei, {
                                                ...e,
                                                children: [
                                                    (0, a.jsx)(eo, {}),
                                                    (0, a.jsx)(eo, {}),
                                                    (0, a.jsx)(eo, {}),
                                                    (0, a.jsx)(eo, {}),
                                                    (0, a.jsx)(eo, {}),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(O, {
                                children: [
                                    (0, a.jsx)(i.E, {
                                        variant: "body-md/normal",
                                        children: "And here is an example of a FeaturedBlock Carousel",
                                    }),
                                    (0, a.jsx)("br", {}),
                                    (0, a.jsxs)(ei, {
                                        ...e,
                                        children: [
                                            (0, a.jsx)(en, {
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
                                            (0, a.jsx)(en, {
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
                                            (0, a.jsx)(en, {
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
                                            (0, a.jsx)(en, {
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
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/semibold",
                                children:
                                    "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/normal",
                                children:
                                    "Skeleton hides its children and applies a mask over the whole container of the child",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/normal",
                                children:
                                    "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                            }),
                            (0, a.jsxs)(O, {
                                children: [
                                    (0, a.jsx)(i.E, {
                                        variant: "body-md/normal",
                                        children: "Basic rectangular skeleton",
                                    }),
                                    (0, a.jsx)(eB, {
                                        children: (0, a.jsx)("div", {
                                            style: { height: 120, width: "100%", background: "transparent" },
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/normal",
                                children:
                                    "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                            }),
                            (0, a.jsx)(O, {
                                children: (0, a.jsxs)(P, {
                                    columns: 3,
                                    children: [
                                        (0, a.jsx)(eB, { children: (0, a.jsx)(eP, { skuId: "1458472704192811088" }) }),
                                        (0, a.jsx)(eB, { children: (0, a.jsx)(eP, { skuId: "1458472704192811088" }) }),
                                        (0, a.jsx)(eB, { children: (0, a.jsx)(eP, { skuId: "1458472704192811088" }) }),
                                    ],
                                }),
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-lg/normal",
                                children:
                                    "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                            }),
                            (0, a.jsx)(O, {
                                children: (0, a.jsxs)(P, {
                                    columns: 2,
                                    children: [
                                        (0, a.jsx)(eB, {
                                            children: (0, a.jsx)(en, {
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
                                        (0, a.jsx)(eB, {
                                            children: (0, a.jsx)(en, {
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
var eR = l(3284);
let eH = function (e) {
    let { padding: t = 0, children: l } = e;
    return (0, a.jsx)("div", { className: eR.$, style: { paddingInline: Math.max(0, t) }, children: l });
};
var eD = l(544244);
let eG = function (e) {
    let { padding: t = 32, children: l } = e;
    return (0, a.jsx)("div", { className: eD.H, style: { paddingInline: Math.max(0, t) }, children: l });
};
var eU = l(217651);
let eY = function (e) {
    let { backgroundImage: t, href: l, ctaText: n } = e,
        r = m(n);
    return (0, a.jsx)(J, {
        children: (0, a.jsx)(Z.D, {
            className: eU.v,
            onClick: () => (0, d.pX)(l),
            children: (0, a.jsx)(Q, {
                backgroundImage: t,
                backgroundPosition: "left",
                children: (0, a.jsx)("div", {
                    className: eU.j,
                    children: (0, a.jsx)(i.E, {
                        variant: "body-lg/semibold",
                        color: "text-overlay-light",
                        children: r,
                    }),
                }),
            }),
        }),
    });
};
var e$ = l(449388);
let eW = function (e) {
    let { backgroundImage: t, href: l, ctaText: n } = e,
        r = m(n ?? "");
    return (0, a.jsx)("div", {
        className: e$.q,
        children: (0, a.jsx)(Q, {
            backgroundImage: t,
            backgroundPosition: "left",
            children: (0, a.jsx)("div", {
                className: e$.R,
                children: (0, a.jsx)(i.E, { variant: "body-lg/semibold", color: "text-overlay-light", children: r }),
            }),
        }),
    });
};
var ez = l(132407);
let eK = function (e) {
    let { bannerSrc: t, logoSrc: l, backgroundColor: n, href: r, children: s } = e;
    return (0, a.jsx)("div", {
        className: ez.ZK,
        children: (0, a.jsx)(Q, {
            backgroundImage: t,
            backgroundColor: n,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            padding: "var(--space-8)",
            children: (0, a.jsxs)("div", {
                className: ez.Qs,
                children: [
                    (0, a.jsxs)("div", {
                        className: ez.VW,
                        children: [
                            null != l && (0, a.jsx)("div", { className: ez.wm, children: (0, a.jsx)(et, { src: l }) }),
                            null != r &&
                                (0, a.jsx)(b, {
                                    variant: "overlay-primary",
                                    href: r,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != s && (0, a.jsx)("div", { className: ez.Y_, children: s }),
                ],
            }),
        }),
    });
};
function eQ() {
    return (0, a.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
}
var eq = l(362373);
let eJ = function (e) {
    let { bannerSrc: t, logoSrc: l, backgroundColor: n, href: r, children: s } = e;
    return (0, a.jsxs)("div", {
        className: eq.ZK,
        children: [
            (0, a.jsx)("div", {
                className: eq.vK,
                style: null != n ? { background: n } : void 0,
                children: (0, a.jsx)(et, { src: t }),
            }),
            (0, a.jsxs)("div", {
                className: eq.Qs,
                children: [
                    (0, a.jsxs)("div", {
                        className: eq.wx,
                        children: [
                            null != l && (0, a.jsx)("div", { className: eq.wm, children: (0, a.jsx)(et, { src: l }) }),
                            null != r &&
                                (0, a.jsx)(b, {
                                    variant: "overlay-primary",
                                    href: r,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != s && (0, a.jsx)("div", { className: eq.Y_, children: s }),
                ],
            }),
        ],
    });
};
function eX() {
    return (0, a.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
}
let eZ = {
        title: "Heroes",
        stories: [
            {
                name: "ContainedHero",
                id: "contained-hero",
                component: function (e) {
                    let {
                        containerHeight: t,
                        showChildren: l,
                        bannerSrc: n,
                        animatedBannerSrc: r,
                        logoSrc: s,
                        href: i,
                        backgroundColor: o,
                    } = e;
                    function c() {
                        return l
                            ? (0, a.jsxs)(eI, {
                                  children: [
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                      (0, a.jsx)(eQ, {}),
                                  ],
                              })
                            : null;
                    }
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                style: { height: l ? void 0 : t },
                                children: (0, a.jsx)(eK, {
                                    bannerSrc: { src: n },
                                    logoSrc: { src: s },
                                    href: i,
                                    backgroundColor: o,
                                    children: c(),
                                }),
                            }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("div", {
                                style: { height: l ? void 0 : t },
                                children: (0, a.jsx)(eK, {
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
                    let { bannerSrc: t, animatedBannerSrc: l, logoSrc: n, backgroundColor: r, href: s } = e;
                    return (0, a.jsx)(eJ, {
                        bannerSrc: "" !== l ? [{ src: l }, { src: t }] : { src: t },
                        logoSrc: "" !== n ? { src: n } : void 0,
                        backgroundColor: r,
                        href: "" !== s ? s : void 0,
                        children: (0, a.jsxs)(eI, {
                            children: [
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
                                (0, a.jsx)(eX, {}),
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
    e0 = "dummy-tenant",
    e1 = {
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
    e4 = {
        id: "dummy-popular-picks",
        children: [
            {
                block: "Section",
                verticalMargin: 32,
                padding: 0,
                children: [{ block: "Text", variant: "body-lg/semibold", content: "Popular Picks" }],
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
    e8 = {
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
var e7 = l(441136),
    e5 = l(160862);
function e2(e) {
    let { value: t, onChange: l } = e,
        n = s.useRef(null),
        r = t.match(/\n*$/)?.[0] ?? "",
        i = t.slice(0, t.length - r.length);
    return (0, a.jsxs)("div", {
        className: e5.t,
        children: [
            (0, a.jsxs)("pre", {
                className: e5.c5,
                "aria-hidden": "true",
                children: [(0, a.jsx)(e7.E, { code: i, lang: "json", className: "hljs" }), r],
            }),
            (0, a.jsx)("textarea", {
                ref: n,
                className: e5.mW,
                value: t,
                onChange: function (e) {
                    l(e.target.value);
                },
                onScroll: function (e) {
                    let t = e.target,
                        l = t.previousElementSibling;
                    null != l && ((l.scrollTop = t.scrollTop), (l.scrollLeft = t.scrollLeft));
                },
                onKeyDown: function (e) {
                    if ("Tab" === e.key) {
                        e.preventDefault();
                        let r = e.target,
                            a = r.selectionStart,
                            s = r.selectionEnd;
                        if (e.shiftKey) {
                            let e = t.lastIndexOf("\n", a - 1) + 1,
                                r = t.indexOf("\n", a),
                                s = t.substring(e, -1 === r ? t.length : r),
                                i = 0;
                            for (let e = 0; e < Math.min(2, s.length); e++)
                                if (" " === s[e]) i++;
                                else break;
                            i > 0 &&
                                (l(t.substring(0, e) + t.substring(e + i)),
                                setTimeout(() => {
                                    if (null != n.current) {
                                        let t = Math.max(e, a - i);
                                        n.current.selectionStart = n.current.selectionEnd = t;
                                    }
                                }, 0));
                        } else
                            (l(t.substring(0, a) + "  " + t.substring(s)),
                                setTimeout(() => {
                                    null != n.current && (n.current.selectionStart = n.current.selectionEnd = a + 2);
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
var e6 = l(115560),
    e3 = l(841702),
    e9 = l(450047);
function te(e) {
    let {
            skuIds: t = [],
            skuBlock: l = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: r = !1,
            showSkeleton: i = !1,
            componentMap: o,
            pagedSkuIds: c,
            page: d,
            perPage: u,
            truncate: h,
        } = e,
        m = (0, e9.D)(t, !0),
        { purchases: b, isFetching: x } = (0, e3.b5)(),
        p = (0, s.useMemo)(
            () =>
                r
                    ? M(
                          [...t].sort((e, t) => (null != b.get(e)) - (null != b.get(t))),
                          d,
                          u,
                          h,
                      )
                    : c,
            [t, c, r, b, d, u, h],
        ),
        f = o[l],
        g = o.Skeleton;
    return null == f
        ? null
        : (m || (r && x)) && i
          ? p.map((e, t) =>
                null != g
                    ? (0, a.jsx)(g, { children: (0, a.jsx)(f, { ...n, skuId: e, productId: e }) }, `${e}-${t}`)
                    : null,
            )
          : p.map((e, t) => (0, a.jsx)(f, { ...n, skuId: e, productId: e }, `${e}-${t}`));
}
let tt = function (e) {
    let {
            skuIds: t = [],
            skuBlock: l = "ShopProductCard",
            skuBlockProps: n,
            sortPurchased: r = !1,
            eagerLoad: i = !1,
            showSkeleton: o = !1,
            componentMap: c,
            paginationOptions: d,
        } = e,
        u = s.useContext(V),
        h = d ?? u,
        m = s.useRef(null),
        {
            page: b,
            pages: x,
            paginate: p,
            showPagination: f,
            paginationPosition: g,
            truncate: j,
            perPage: y,
            setPage: v,
        } = _(t.length, h, m),
        k = (0, s.useMemo)(() => M(t, p ? b : void 0, y, j), [t, p, b, y, j]),
        S = f && "top" === g,
        E = f && "bottom" === g,
        C =
            null != h
                ? (0, a.jsx)("div", {
                      ref: m,
                      "aria-hidden": "true",
                      style: { position: "absolute", top: 0, height: 0 },
                  })
                : null;
    if (i || r)
        return (0, a.jsxs)(a.Fragment, {
            children: [
                C,
                S && (0, a.jsx)(A, { page: b, pages: x, setPage: v }),
                (0, a.jsx)(te, {
                    skuIds: t,
                    skuBlock: l,
                    skuBlockProps: n,
                    sortPurchased: r,
                    showSkeleton: o,
                    componentMap: c,
                    pagedSkuIds: k,
                    page: p ? b : void 0,
                    perPage: p ? y : void 0,
                    truncate: j,
                }),
                E && (0, a.jsx)(A, { page: b, pages: x, setPage: v }),
            ],
        });
    let T = c[l];
    return null == T
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  C,
                  S && (0, a.jsx)(A, { page: b, pages: x, setPage: v }),
                  k.map((e, t) => (0, a.jsx)(T, { ...n, skuId: e, productId: e }, `${e}-${t}`)),
                  E && (0, a.jsx)(A, { page: b, pages: x, setPage: v }),
              ],
          });
};
var tl = l(343446),
    tn = l(620632),
    tr = l(73153),
    ta = l(627784),
    ts = l(403362);
let ti = (0, ts.m6)()
        ? {
              [e0]: {
                  "dummy-shop-home": e1,
                  "dummy-orb-shelf": e8,
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
    to = (0, ts.m6)() ? ["dummy-skeleton"] : [],
    tc = (0, ts.m6)() ? { [e0]: { "dummy-popular-picks": e4 } } : {},
    td = (0, ts.m6)() ? ["dummy-skeleton-template"] : [];
function tu(e, t) {
    return `${e}/${t}`;
}
let th = ti,
    tm = new Set(to),
    tb = {},
    tx = tc,
    tp = new Set(td),
    tf = {};
function tg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = Object.entries(t)
            .sort((e, t) => {
                let [l] = e,
                    [n] = t;
                return l.localeCompare(n);
            })
            .map((e) => {
                let [t, l] = e;
                return `${t}:${l}`;
            })
            .join("-");
    return "" !== l ? `${e}-${l}` : e;
}
class tj extends ej.Ay.Store {
    static displayName = "LayoutSystemStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (th[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && tm.has(tu(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (tb[tu(e, t)] ?? null);
    }
    getTemplateLayout(e, t, l) {
        if (null == e || null == t) return null;
        let n = tg(t, l);
        return tx[e]?.[n] ?? null;
    }
    isFetchingTemplate(e, t, l) {
        let n = tg(t ?? "", l);
        return null != e && null != t && tp.has(tu(e, n));
    }
    getTemplateFetchError(e, t, l) {
        return null == e || null == t ? null : (tf[tu(e, tg(t ?? "", l))] ?? null);
    }
}
let ty = new tj(tr.h, {
    LAYOUT_SYSTEM_FETCH: function (e) {
        let { tenantId: t, layoutId: l } = e;
        tm.add(tu(t, l));
    },
    LAYOUT_SYSTEM_FETCH_SUCCESS: function (e) {
        let { tenantId: t, layout: l } = e;
        (((th[t] ??= {})[l.id] = l), delete tb[tu(t, l.id)], tm.delete(tu(t, l.id)));
    },
    LAYOUT_SYSTEM_FETCH_FAILURE: function (e) {
        let { tenantId: t, layoutId: l, apiError: n } = e;
        ((tb[tu(t, l)] = n), tm.delete(tu(t, l)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH: function (e) {
        let { tenantId: t, templateId: l, requestParams: n } = e;
        tp.add(tu(t, tg(l, n)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS: function (e) {
        let { tenantId: t, templateId: l, requestParams: n, layout: r } = e,
            a = tg(l, n);
        (((tx[t] ??= {})[a] = r), delete tf[tu(t, a)], tp.delete(tu(t, a)));
    },
    LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE: function (e) {
        let { tenantId: t, templateId: l, requestParams: n, apiError: r } = e,
            a = tg(l, n);
        ((tf[tu(t, a)] = r), tp.delete(tu(t, a)));
    },
    LOGOUT: function () {
        ((th = {}), (tm = new Set()), (tb = {}), (tx = {}), (tp = new Set()), (tf = {}));
    },
});
var tv = l(652215);
let tk = ["request_params"];
function tS(e) {
    return (0, B.isObject)(e)
        ? (0, B.isArray)(e)
            ? e.map(tS)
            : (0, B.reduce)(
                  e,
                  (e, t, l) => {
                      let n = (0, B.camelCase)(l);
                      return tk.includes(l) ? { ...e, [n]: t } : { ...e, [n]: tS(t) };
                  },
                  {},
              )
        : e;
}
let tE = function (e, t) {
        let l = (0, ej.bG)([tl.A], () => tl.A.hasLoadedExperiments),
            [n, r, a] = (0, ej.yK)([ty], () => [ty.getLayout(e, t), ty.isFetchingLayout(e, t), ty.getFetchError(e, t)]),
            i = null == n && null != t && l && !r && null == a;
        return (
            s.useEffect(() => {
                i &&
                    (async function (e) {
                        let { tenantId: t, layoutId: l, abortSignal: n } = e;
                        if (!ty.isFetchingLayout(t, l))
                            try {
                                tr.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH", tenantId: t, layoutId: l });
                                let e = await tn.Bo.get({
                                    url: tv.Rsh.LAYOUT_SYSTEM(t, l),
                                    rejectWithError: !0,
                                    signal: n,
                                });
                                tr.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH_SUCCESS", tenantId: t, layout: tS(e.body) });
                            } catch (n) {
                                let e = new ta.LG(n);
                                throw (
                                    tr.h.dispatch({
                                        type: "LAYOUT_SYSTEM_FETCH_FAILURE",
                                        tenantId: t,
                                        layoutId: l,
                                        apiError: e,
                                    }),
                                    e
                                );
                            }
                    })({ tenantId: e, layoutId: t }).catch(() => {});
            }, [i, e, t]),
            { layout: n, loading: r, error: a }
        );
    },
    tC = function (e, t, l) {
        let n = (0, ej.bG)([tl.A], () => tl.A.hasLoadedExperiments),
            [r, a, i] = (0, ej.yK)([ty], () => [
                ty.getTemplateLayout(e, t, l),
                ty.isFetchingTemplate(e, t, l),
                ty.getTemplateFetchError(e, t, l),
            ]),
            o = null == r && null != t && n && !a && null == i;
        return (
            s.useEffect(() => {
                o &&
                    (async function (e) {
                        let { tenantId: t, templateId: l, abortSignal: n, requestParams: r } = e;
                        if (!ty.isFetchingTemplate(t, l, r))
                            try {
                                tr.h.dispatch({
                                    type: "LAYOUT_SYSTEM_TEMPLATE_FETCH",
                                    tenantId: t,
                                    templateId: l,
                                    requestParams: r,
                                });
                                let e = await tn.Bo.get({
                                    url: tv.Rsh.LAYOUT_SYSTEM_TEMPLATE(t, l),
                                    rejectWithError: !0,
                                    signal: n,
                                    query: r,
                                });
                                tr.h.dispatch({
                                    type: "LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS",
                                    tenantId: t,
                                    templateId: l,
                                    requestParams: r,
                                    layout: tS(e.body),
                                });
                            } catch (n) {
                                let e = new ta.LG(n);
                                throw (
                                    tr.h.dispatch({
                                        type: "LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE",
                                        tenantId: t,
                                        templateId: l,
                                        requestParams: r,
                                        apiError: e,
                                    }),
                                    e
                                );
                            }
                    })({ tenantId: e, templateId: t, requestParams: l }).catch(() => {});
            }, [o, e, t, l]),
            { layout: r, loading: a, error: i }
        );
    };
var tT = l(575593);
l(673033);
let tI = function () {
        return null;
    },
    tL = {
        ContainedHero: eK,
        FullHero: eJ,
        NarrowContent: eG,
        FullBleedContent: eH,
        InteractiveHScroll: eI,
        Carousel: ei,
        Grid: P,
        GridItem: eh,
        Section: O,
        Card: J,
        BackgroundImage: Q,
        GradientBackground: eu,
        Skeleton: eB,
        FeaturedChip: eY,
        FeaturedCollection: en,
        FeaturedProduct: () => null,
        ShopProductCard: eP,
        GridItemShopProductCard: function (e) {
            let { skuId: t, auto: l, columns: n, rows: r } = e,
                { product: i } = (0, eV.q)(t, !0),
                {
                    flattenProductVariants: o,
                    productOverride: c,
                    prioritizedCurrency: d,
                    standalonePreview: u,
                } = s.useContext(e_.v3),
                h = s.useMemo(
                    () => ({
                        flattenProductVariants: o ?? !1,
                        productOverride: c,
                        prioritizedCurrency: d,
                        standalonePreview: u,
                    }),
                    [o, c, d, u],
                );
            if (null == i) return null;
            if (i.type === tT.R.BUNDLE) {
                let e = l ? 2 : n,
                    s = l ? 1 : r,
                    i = `${e}/${s}`;
                return (0, a.jsx)(e_.v3.Provider, {
                    value: h,
                    children: (0, a.jsx)(eh, {
                        columns: e,
                        rows: s,
                        children: (0, a.jsx)(eM.A, { skuId: t, aspectRatio: i }),
                    }),
                });
            }
            if (i.type === tT.R.PROFILE_EFFECT) {
                let e = l ? 1 : n,
                    s = l ? 2 : r,
                    i = `${e}/${s}`;
                return (0, a.jsx)(e_.v3.Provider, {
                    value: h,
                    children: (0, a.jsx)(eh, {
                        columns: e,
                        rows: s,
                        children: (0, a.jsx)(eM.A, { skuId: t, aspectRatio: i }),
                    }),
                });
            }
            return l
                ? (0, a.jsx)(e_.v3.Provider, { value: h, children: (0, a.jsx)(eM.A, { skuId: t, aspectRatio: "1/1" }) })
                : (0, a.jsx)(e_.v3.Provider, {
                      value: h,
                      children: (0, a.jsx)(eh, {
                          columns: n,
                          rows: r,
                          children: (0, a.jsx)(eM.A, { skuId: t, aspectRatio: `${n}/${r}` }),
                      }),
                  });
        },
        SkuList: tt,
        SubLayout: function (e) {
            let { layoutId: t, tenantId: l, skeleton: n, componentMap: r, renderLayout: a } = e,
                { layout: s, loading: i } = tE(l, t);
            return i && null != n
                ? a({ overrides: r, layout: { id: "skeleton", children: n } })
                : null == s
                  ? null
                  : a({ layout: s, overrides: r });
        },
        SubTemplate: function (e) {
            let { templateId: t, tenantId: l, skeleton: n, requestParams: r, componentMap: a, renderLayout: s } = e,
                { layout: i, loading: o } = tC(l, t, r);
            return o && null != n
                ? s({ overrides: a, layout: { id: "skeleton", children: n } })
                : null == i
                  ? null
                  : s({ layout: i, overrides: a });
        },
        Button: b,
        Heading: x,
        Stack: f,
        Text: g,
        Tooltip: y,
        Image: et,
        Any: tI,
    };
function tw() {
    let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s.useMemo(() => {
        let t = (0, B.cloneDeep)(tL);
        if (null != e) for (let [l, n] of Object.entries(e)) null != n && (t[l] = n);
        return t;
    }, [e]);
}
function tA(e, t) {
    return e.children.map((e) =>
        (function e(t, l) {
            if ("string" == typeof t) return t;
            let n = "Any" === t.block && "string" == typeof t.tag ? `Any:${t.tag}` : t.block,
                { block: r, ...s } = t,
                i = l[n] ?? l[r];
            if (null == i) return null;
            let o = (() => {
                    if ("children" in t) {
                        if (!Array.isArray(t.children) && null != t.children) return e(t.children, l);
                        if (null != t.children && t.children.length > 0) return t.children.map((t) => e(t, l));
                    }
                    return null;
                })(),
                c = I.has(r) ? { ...s, componentMap: l, renderLayout: tP } : s;
            return (0, a.jsx)(i, { ...c, children: o }, (0, e6.A)());
        })(e, t),
    );
}
class tV extends s.Component {
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
function tM(e) {
    let { layout: t, Components: l } = e;
    return s.useMemo(() => tA(t, l), [t, l]);
}
function t_(e) {
    let { layout: t, overrides: l, onError: n, onEmptyLayout: r } = e,
        i = tw({ overrides: l });
    return (
        s.useEffect(() => {
            0 === t.children.length && r?.();
        }, [t, r]),
        (0, a.jsx)(tV, { onError: n, children: (0, a.jsx)(tM, { layout: t, Components: i }) })
    );
}
function tP(e) {
    return (0, a.jsx)(t_, { ...e });
}
var tO = l(758836),
    tN = l(802249);
let tB = { prioritizedCurrency: tO.Hi.ORBS };
var tF = l(993077);
function tR(e) {
    let { color: t, children: l } = e;
    return (0, a.jsx)(tF.Z, {
        style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
        children: (0, a.jsx)(i.E, { variant: "body-md/semibold", children: l }),
    });
}
let tH = {
    title: "Mana",
    stories: [
        {
            name: "Button",
            id: "layout-system-button",
            component: function (e) {
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(i.E, {
                            variant: "body-lg/semibold",
                            children: "Button component for Layout System interactions.",
                        }),
                        (0, a.jsxs)(p.B, {
                            direction: "vertical",
                            children: [
                                (0, a.jsx)(b, { ...e }),
                                (0, a.jsx)("hr", {}),
                                (0, a.jsx)(b, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                                (0, a.jsx)(b, { href: e.href, ctaText: "Variant = secondary", variant: "secondary" }),
                                (0, a.jsx)(b, {
                                    href: e.href,
                                    ctaText: "Variant = critical-primary",
                                    variant: "critical-primary",
                                }),
                                (0, a.jsx)(b, {
                                    href: e.href,
                                    ctaText: "Variant = critical-secondary",
                                    variant: "critical-secondary",
                                }),
                                (0, a.jsx)(b, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                                (0, a.jsx)(b, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-primary",
                                    variant: "overlay-primary",
                                }),
                                (0, a.jsx)(b, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-secondary",
                                    variant: "overlay-secondary",
                                }),
                                (0, a.jsx)(b, { href: e.href, ctaText: "Variant = expressive", variant: "expressive" }),
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
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(i.E, {
                            variant: "body-lg/semibold",
                            children: "Heading component for Layout System content.",
                        }),
                        (0, a.jsx)(x, { ...e }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsx)(x, { content: "Variant = heading-xs/medium", variant: "heading-xs/medium" }),
                        (0, a.jsx)(x, { content: "Variant = heading-xs/semibold", variant: "heading-xs/semibold" }),
                        (0, a.jsx)(x, { content: "Variant = heading-sm/medium", variant: "heading-sm/medium" }),
                        (0, a.jsx)(x, { content: "Variant = heading-sm/semibold", variant: "heading-sm/semibold" }),
                        (0, a.jsx)(x, { content: "Variant = heading-lg/medium", variant: "heading-lg/medium" }),
                        (0, a.jsx)(x, { content: "Variant = heading-lg/semibold", variant: "heading-lg/semibold" }),
                    ],
                });
            },
            controls: {
                content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "heading-sm/semibold",
                    options: [
                        { label: "heading-xs/medium", value: "heading-xs/medium" },
                        { label: "heading-xs/semibold", value: "heading-xs/semibold" },
                        { label: "heading-sm/medium", value: "heading-sm/medium" },
                        { label: "heading-sm/semibold", value: "heading-sm/semibold" },
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
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(i.E, {
                            variant: "body-lg/semibold",
                            children: "Stack component for Layout System.",
                        }),
                        (0, a.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, a.jsxs)(f, {
                                ...e,
                                children: [
                                    (0, a.jsx)(tR, { color: "#5865F2", children: "Item 1" }),
                                    (0, a.jsx)(tR, { color: "#57F287", children: "Item 2" }),
                                    (0, a.jsx)(tR, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsx)(i.E, { variant: "body-md/semibold", children: "Horizontal Stack" }),
                        (0, a.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, a.jsxs)(f, {
                                ...e,
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(tR, { color: "#5865F2", children: "Item 1" }),
                                    (0, a.jsx)(tR, { color: "#57F287", children: "Item 2" }),
                                    (0, a.jsx)(tR, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, a.jsx)(i.E, { variant: "body-md/semibold", children: "Vertical Stack" }),
                        (0, a.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, a.jsxs)(f, {
                                ...e,
                                direction: "vertical",
                                children: [
                                    (0, a.jsx)(tR, { color: "#5865F2", children: "Item 1" }),
                                    (0, a.jsx)(tR, { color: "#57F287", children: "Item 2" }),
                                    (0, a.jsx)(tR, { color: "#FEE75C", children: "Item 3" }),
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
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(i.E, {
                            variant: "body-lg/semibold",
                            children: "Text component for Layout System content.",
                        }),
                        (0, a.jsx)(g, { ...e }),
                        (0, a.jsx)("hr", {}),
                        (0, a.jsx)(g, { content: "Variant = body-xs/normal", variant: "body-xs/normal" }),
                        (0, a.jsx)(g, { content: "Variant = body-sm/normal", variant: "body-sm/normal" }),
                        (0, a.jsx)(g, { content: "Variant = body-sm/medium", variant: "body-sm/medium" }),
                        (0, a.jsx)(g, { content: "Variant = body-sm/semibold", variant: "body-sm/semibold" }),
                        (0, a.jsx)(g, { content: "Variant = body-md/normal", variant: "body-md/normal" }),
                        (0, a.jsx)(g, { content: "Variant = body-md/medium", variant: "body-md/medium" }),
                        (0, a.jsx)(g, { content: "Variant = body-md/semibold", variant: "body-md/semibold" }),
                        (0, a.jsx)(g, { content: "Variant = body-lg/normal", variant: "body-lg/normal" }),
                        (0, a.jsx)(g, { content: "Variant = body-lg/medium", variant: "body-lg/medium" }),
                        (0, a.jsx)(g, { content: "Variant = body-lg/semibold", variant: "body-lg/semibold" }),
                    ],
                });
            },
            controls: {
                content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "body-md/normal",
                    options: [
                        { label: "body-xs/normal", value: "body-xs/normal" },
                        { label: "body-sm/normal", value: "body-sm/normal" },
                        { label: "body-sm/medium", value: "body-sm/medium" },
                        { label: "body-sm/semibold", value: "body-sm/semibold" },
                        { label: "body-md/normal", value: "body-md/normal" },
                        { label: "body-md/medium", value: "body-md/medium" },
                        { label: "body-md/semibold", value: "body-md/semibold" },
                        { label: "body-lg/normal", value: "body-lg/normal" },
                        { label: "body-lg/medium", value: "body-lg/medium" },
                        { label: "body-lg/semibold", value: "body-lg/semibold" },
                    ],
                },
            },
        },
        {
            name: "Tooltip",
            id: "layout-system-tooltip",
            component: function (e) {
                return (0, a.jsx)(y, {
                    ...e,
                    children: (0, a.jsx)("div", {
                        style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                        children: (0, a.jsx)(i.E, { variant: "body-lg/semibold", children: "Hover me." }),
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
var tD = l(206845);
let tG = {
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
    tU = {
        title: "Recursive",
        stories: [
            {
                name: "SkuList",
                id: "skulist",
                component: function (e) {
                    let { skuIds: t, sortPurchased: l, eagerLoad: n, showSkeleton: r } = e,
                        s = tw();
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(o.D, {
                                variant: "heading-lg/semibold",
                                children: "The SkuList component takes a list of skus and maps them into a block",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/semibold",
                                children:
                                    "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/semibold",
                                children:
                                    "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                            }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)(P, {
                                columns: 3,
                                children: (0, a.jsx)(tt, {
                                    skuIds: t?.split(","),
                                    skuBlock: "ShopProductCard",
                                    sortPurchased: l,
                                    eagerLoad: n,
                                    showSkeleton: r,
                                    componentMap: s,
                                }),
                            }),
                            (0, a.jsx)("hr", {}),
                            (0, a.jsx)(i.E, { variant: "body-md/semibold", children: "Sample Skus:" }),
                            (0, a.jsxs)(p.B, {
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(i.E, { variant: "body-sm/semibold", children: "Avatar Decoration" }),
                                    (0, a.jsx)(tD.A, {
                                        text: u.intl.string(u.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704192811088",
                                        children: (e) =>
                                            (0, a.jsx)(Z.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, a.jsx)(i.E, {
                                                    variant: "body-sm/normal",
                                                    children: "1458472704192811088",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(p.B, {
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(i.E, { variant: "body-sm/semibold", children: "Profile Effect" }),
                                    (0, a.jsx)(tD.A, {
                                        text: u.intl.string(u.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458479739110166560",
                                        children: (e) =>
                                            (0, a.jsx)(Z.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, a.jsx)(i.E, {
                                                    variant: "body-sm/normal",
                                                    children: "1458479739110166560",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(p.B, {
                                direction: "horizontal",
                                children: [
                                    (0, a.jsx)(i.E, { variant: "body-sm/semibold", children: "Nameplate" }),
                                    (0, a.jsx)(tD.A, {
                                        text: u.intl.string(u.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704524156959",
                                        children: (e) =>
                                            (0, a.jsx)(Z.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, a.jsx)(i.E, {
                                                    variant: "body-sm/normal",
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
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(o.D, {
                                variant: "heading-lg/semibold",
                                children: 'The SubLayout component accepts a layout id and "get or fetch"es the layout',
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/semibold",
                                children:
                                    "When resolved, the layout trees are merged into one layout. This allows for the asynchronous resolution of layouts, for faster first paints",
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/semibold",
                                children:
                                    "Here, the \"popular picks\" are actually a sub layout with the id 'dummy-popular-picks'",
                            }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("hr", {}),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)(t_, { layout: e1 }),
                        ],
                    });
                },
                controls: {},
            },
            {
                name: "SubLayout - Loading State",
                id: "sub-layout-skeleton",
                component: function () {
                    return (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(o.D, {
                                variant: "heading-lg/semibold",
                                children:
                                    'The SubLayout can take a "Skeleton" property which is just `children` to display if the layout is being fetched from the api',
                            }),
                            (0, a.jsx)(i.E, {
                                variant: "body-md/semibold",
                                children:
                                    "Here we use the `Skeleton` component to show the shop cards loading while the (dummy) Shop Cards SubLayout are resolving (it will never stop loading for demonstration purposes)",
                            }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("hr", {}),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)(t_, { layout: tG }),
                        ],
                    });
                },
                controls: {},
            },
        ],
    };
var tY = l(88686),
    t$ = l(780898),
    tW = l(214881),
    tz = l(486020);
let tK = function (e) {
        let { skuId: t, size: l = 128, animated: n = !1 } = e,
            { product: r } = (0, eV.q)(t, !0),
            s = r?.items[0];
        if (null == s) return null;
        if (s.type === tT.R.AVATAR_DECORATION) {
            let e = tz.Ay.getAvatarDecorationURL({ avatarDecoration: s, size: l, canAnimate: n });
            return null != e ? (0, a.jsx)("img", { src: e, alt: s.label }) : null;
        }
        if (s.type === tT.R.PROFILE_EFFECT) {
            let e = s.thumbnailPreviewSrc;
            return (0, a.jsx)("img", { src: e, alt: s.accessibilityLabel });
        }
        if (s.type === tT.R.NAMEPLATE) {
            let e = (0, t$.WK)(s);
            return (0, a.jsx)(tW.A, { nameplate: e, placement: tY.u.PREVIEW });
        }
        return null;
    },
    tQ = {
        collections: [
            {
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
                                    let [e, t] = s.useState(JSON.stringify(e1, null, 2)),
                                        [l, n] = s.useState(e);
                                    return (
                                        s.useEffect(() => {
                                            try {
                                                (function (e) {
                                                    let t =
                                                        arguments.length > 1 && void 0 !== arguments[1]
                                                            ? arguments[1]
                                                            : tL;
                                                    try {
                                                        return (tA(e, t), !0);
                                                    } catch (e) {
                                                        return !1;
                                                    }
                                                })(JSON.parse(e)) && n(e);
                                            } catch {}
                                        }, [e]),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)(e2, { value: e, onChange: (e) => t(e) }),
                                                (0, a.jsx)("hr", {}),
                                                (0, a.jsx)(t_, { layout: JSON.parse(l) }),
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
                                                                        variant: "heading-xxl/semibold",
                                                                        content: "Introducing Discord Orbs",
                                                                    },
                                                                    {
                                                                        block: "Text",
                                                                        variant: "body-lg/normal",
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
                                                                                        variant: "heading-xxl/semibold",
                                                                                        content:
                                                                                            "What can I get with orbs?",
                                                                                    },
                                                                                    {
                                                                                        block: "Text",
                                                                                        variant: "body-md/normal",
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
                                    return (0, a.jsxs)("div", {
                                        style: { position: "relative" },
                                        children: [
                                            (0, a.jsx)("div", {
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
                                            (0, a.jsx)(e_.v3.Provider, {
                                                value: tB,
                                                children: (0, a.jsx)("div", {
                                                    style: { position: "relative" },
                                                    children: (0, a.jsx)(t_, { layout: e }),
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
                                    let { lightAsset: t, darkAsset: l } = e,
                                        n = {
                                            id: "themed-images",
                                            children: [
                                                {
                                                    block: "BackgroundImage",
                                                    backgroundImage: { src: { light: t, dark: l } },
                                                    children: [
                                                        {
                                                            block: "Stack",
                                                            direction: "vertical",
                                                            children: [
                                                                {
                                                                    block: "Heading",
                                                                    variant: "heading-xl/semibold",
                                                                    content: "Theme-aware images",
                                                                },
                                                                {
                                                                    block: "Text",
                                                                    variant: "body-md/normal",
                                                                    content: "Switch your app theme to see this change",
                                                                },
                                                                {
                                                                    block: "Text",
                                                                    variant: "body-sm/normal",
                                                                    content:
                                                                        "(Light shows multiple orbs, dark shows hands holding an orb)",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        };
                                    return (0, a.jsx)(t_, { layout: n });
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
                                    (0, u.useSyncMessages)(tN.c);
                                    let l = m(t);
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsxs)(i.E, {
                                                variant: "body-lg/semibold",
                                                children: [
                                                    "Any registered string key can be used to reference client-side international strings",
                                                    " ",
                                                ],
                                            }),
                                            (0, a.jsx)(i.E, {
                                                variant: "body-md/normal",
                                                children: "Strings are registered in `useLayoutSystemString.tsx`",
                                            }),
                                            (0, a.jsx)("br", {}),
                                            (0, a.jsx)("hr", {}),
                                            (0, a.jsx)("br", {}),
                                            (0, a.jsxs)(i.E, {
                                                variant: "body-md/semibold",
                                                children: ["Received: ", t],
                                            }),
                                            (0, a.jsxs)(i.E, {
                                                variant: "body-md/semibold",
                                                children: ["Resolved: ", l],
                                            }),
                                        ],
                                    });
                                },
                                controls: {
                                    text: {
                                        label: "Text",
                                        type: "text",
                                        defaultValue: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                    },
                                },
                            },
                        ],
                    },
                    tH,
                    eF,
                    {
                        title: "Content Wrappers",
                        stories: [
                            {
                                name: "NarrowContent",
                                id: "narrow-content",
                                component: function (e) {
                                    let { padding: t } = e;
                                    return (0, a.jsx)("div", {
                                        style: { background: "#5865f2", width: "100%" },
                                        children: (0, a.jsx)(eG, {
                                            padding: t,
                                            children: (0, a.jsx)("div", {
                                                style: {
                                                    background: "white",
                                                    color: "#000",
                                                    padding: 16,
                                                    fontWeight: "bold",
                                                },
                                                children: "Content constrained to 1080px, centered",
                                            }),
                                        }),
                                    });
                                },
                                controls: {
                                    padding: { label: "Padding", type: "number", defaultValue: 32, minValue: 0 },
                                },
                            },
                            {
                                name: "FullBleedContent",
                                id: "full-bleed-content",
                                component: function (e) {
                                    let { padding: t } = e;
                                    return (0, a.jsx)("div", {
                                        style: { background: "#5865f2", width: "100%" },
                                        children: (0, a.jsx)(eH, {
                                            padding: t,
                                            children: (0, a.jsx)("div", {
                                                style: {
                                                    background: "white",
                                                    color: "#000",
                                                    padding: 16,
                                                    fontWeight: "bold",
                                                },
                                                children: "Full-width content",
                                            }),
                                        }),
                                    });
                                },
                                controls: {
                                    padding: { label: "Padding", type: "number", defaultValue: 0, minValue: 0 },
                                },
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
                                    let { backgroundImage: t, ...l } = e,
                                        n = { backgroundImage: { src: t }, ...l };
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(i.E, {
                                                variant: "body-lg/semibold",
                                                children:
                                                    "Featured Chip will take up the full width of the parent, so it is best suited for LayoutSystemStack or Grid parents",
                                            }),
                                            (0, a.jsx)(O, { children: (0, a.jsx)(eY, { ...n }) }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Grid (3):",
                                                    }),
                                                    (0, a.jsxs)(P, {
                                                        columns: 3,
                                                        children: [
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Stack:",
                                                    }),
                                                    (0, a.jsxs)(f, {
                                                        direction: "horizontal",
                                                        children: [
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
                                                            (0, a.jsx)(eY, { ...n }),
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
                                            backgroundImage: l,
                                            logoSrc: n,
                                            supplementalImage: r,
                                            ctaText: s,
                                            href: o,
                                        } = e,
                                        c = {
                                            backgroundImage: { src: l },
                                            logoSrc: { src: n },
                                            supplementalImage: { src: r },
                                            ctaText: s,
                                            href: o,
                                        };
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(i.E, {
                                                variant: "body-lg/semibold",
                                                children:
                                                    "Featured Collection will take up the full width of the parent, so it is best suited for LayoutSystemStack or Grid parents",
                                            }),
                                            (0, a.jsx)(O, { children: (0, a.jsx)(en, { ...c }) }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsxs)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: ["Grid (", t, "):"],
                                                    }),
                                                    (0, a.jsxs)(P, {
                                                        columns: t,
                                                        children: [(0, a.jsx)(en, { ...c }), (0, a.jsx)(en, { ...c })],
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Stack:",
                                                    }),
                                                    (0, a.jsxs)(f, {
                                                        direction: "horizontal",
                                                        children: [
                                                            (0, a.jsx)(en, { ...c }),
                                                            (0, a.jsx)(en, { ...c }),
                                                            (0, a.jsx)(en, { ...c }),
                                                            (0, a.jsx)(en, { ...c }),
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
                                    let { backgroundImage: t, ...l } = e,
                                        n = { backgroundImage: { src: t }, ...l };
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(i.E, { variant: "body-lg/semibold", children: "PLACEHOLDER" }),
                                            (0, a.jsx)(O, { children: (0, a.jsx)(eW, { ...n }) }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Grid (3):",
                                                    }),
                                                    (0, a.jsxs)(P, {
                                                        columns: 3,
                                                        children: [
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Stack:",
                                                    }),
                                                    (0, a.jsxs)(f, {
                                                        direction: "horizontal",
                                                        children: [
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
                                                            (0, a.jsx)(eW, { ...n }),
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
                    eZ,
                    tU,
                    {
                        title: "Sku",
                        stories: [
                            {
                                name: "ShopProductCard",
                                id: "shopProduct-card",
                                component: function (e) {
                                    let { skuId: t } = e;
                                    return (0, a.jsx)("div", { children: (0, a.jsx)(eP, { skuId: t }) });
                                },
                                controls: {
                                    skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" },
                                },
                            },
                            {
                                name: "SkuPreview",
                                id: "skupreview",
                                component: function (e) {
                                    let { skuId: t } = e;
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(tK, { skuId: t }),
                                            (0, a.jsx)("hr", {}),
                                            (0, a.jsx)(i.E, { variant: "body-md/semibold", children: "Sample Skus:" }),
                                            (0, a.jsxs)(p.B, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-sm/semibold",
                                                        children: "Avatar Decoration",
                                                    }),
                                                    (0, a.jsx)(tD.A, {
                                                        text: u.intl.string(u.t.OpuAlK),
                                                        delay: 0,
                                                        "aria-label": !1,
                                                        copyValue: "1458472704192811088",
                                                        children: (e) =>
                                                            (0, a.jsx)(Z.D, {
                                                                ...e,
                                                                style: { cursor: "pointer" },
                                                                children: (0, a.jsx)(i.E, {
                                                                    variant: "body-sm/normal",
                                                                    children: "1458472704192811088",
                                                                }),
                                                            }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(p.B, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-sm/semibold",
                                                        children: "Profile Effect",
                                                    }),
                                                    (0, a.jsx)(tD.A, {
                                                        text: u.intl.string(u.t.OpuAlK),
                                                        delay: 0,
                                                        "aria-label": !1,
                                                        copyValue: "1458479739110166560",
                                                        children: (e) =>
                                                            (0, a.jsx)(Z.D, {
                                                                ...e,
                                                                style: { cursor: "pointer" },
                                                                children: (0, a.jsx)(i.E, {
                                                                    variant: "body-sm/normal",
                                                                    children: "1458479739110166560",
                                                                }),
                                                            }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(p.B, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-sm/semibold",
                                                        children: "Nameplate",
                                                    }),
                                                    (0, a.jsx)(tD.A, {
                                                        text: u.intl.string(u.t.OpuAlK),
                                                        delay: 0,
                                                        "aria-label": !1,
                                                        copyValue: "1458472704524156959",
                                                        children: (e) =>
                                                            (0, a.jsx)(Z.D, {
                                                                ...e,
                                                                style: { cursor: "pointer" },
                                                                children: (0, a.jsx)(i.E, {
                                                                    variant: "body-sm/normal",
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
                                    skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" },
                                },
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
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(i.E, {
                                                variant: "body-md/semibold",
                                                children:
                                                    "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                                            }),
                                            (0, a.jsx)(i.E, {
                                                variant: "body-md/semibold",
                                                children:
                                                    "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                                            }),
                                            (0, a.jsx)(O, { children: (0, a.jsx)(tI, {}) }),
                                        ],
                                    });
                                },
                                controls: {},
                            },
                            {
                                name: "Image",
                                id: "layout-system-image",
                                component: function (e) {
                                    let { imageSrc: t, videoSrc: l } = e;
                                    return (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Static image",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        style: { height: 200 },
                                                        children: (0, a.jsx)(et, { src: { src: t } }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(O, {
                                                children: [
                                                    (0, a.jsx)(i.E, {
                                                        variant: "body-lg/semibold",
                                                        children: "Video asset",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        style: { height: 200 },
                                                        children: (0, a.jsx)(et, { src: { src: l } }),
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
        ],
    };
