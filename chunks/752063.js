"use strict";
n.d(t, { A: () => Y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(156828),
    l = n(990078),
    u = n(408278),
    c = n(900797),
    d = n(847374),
    _ = n(834730),
    f = n(265872),
    p = n(305866),
    h = n(389723),
    E = n(939249),
    m = n(387758),
    g = n(861672),
    A = n(477782),
    I = n(32880),
    T = n(365199),
    S = n(349288),
    y = n(192308),
    N = n(26430),
    v = n(573613),
    C = n(289873),
    O = n(224640),
    R = n(718468),
    b = n(417964),
    D = n(639169),
    L = n(157941),
    w = n(255438),
    M = n(985018),
    P = n(460224),
    x = n(429128);
function k(e) {
    let { text: t, language: i, wordWrap: s } = e,
        l = () => (0, r.jsx)("code", { className: a()(x.kw, P.Xb, "hljs", { [P.Zw]: s }), children: t });
    return (0, r.jsx)("pre", {
        children: (0, r.jsx)(L.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: a()(x.kw, P.Xb, "hljs", { [P.Zw]: s }),
            children: (0, r.jsx)(o.c2, {
                createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
                webpackId: 752238,
                render: (e) => {
                    if (!e.hasLanguage(i)) return l();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? l()
                        : (0, r.jsx)("code", {
                              className: a()(x.kw, P.Xb, "hljs", n.language, { [P.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => l(),
            }),
        }),
    });
}
function U(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: s } = e,
        a = M.intl.formatToPlainString(s ? M.t.Go5Vvs : M.t.yJcYan, { lines: i }),
        o = `${t ? M.intl.string(M.t.iTcuma) : M.intl.string(M.t.dcl9MQ)} (${a})`;
    return (0, r.jsx)("div", {
        className: P.py,
        children: (0, r.jsx)(l.m, {
            text: o,
            children: (0, r.jsx)(u.K, {
                icon: t ? c.t : d.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": o,
            }),
        }),
    });
}
function G(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, w.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: P.VI,
        children: [
            (0, r.jsx)("div", {
                className: P.VW,
                children: (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(_.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: P.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(_.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, w.up)(n) }),
        ],
    });
}
function F(e) {
    let { language: t, setLanguage: n, align: s } = e,
        a = i.useRef(null);
    return (0, r.jsx)(f.Y, {
        targetElementRef: a,
        position: "left",
        align: s,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(p.l, {
                "aria-label": M.intl.string(M.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: P.md,
                    children: (0, r.jsxs)(h.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(D.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [(0, r.jsx)(h.a3, { placeholder: M.intl.string(M.t.GofftW) }), (0, r.jsx)(h.X2, {})],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(l.m, {
                ariaHidden: !0,
                text: M.intl.string(M.t.utm4qs),
                children: (0, r.jsx)(E.D, {
                    ...e,
                    className: P.Qw,
                    "aria-label": M.intl.string(M.t.utm4qs),
                    children: (0, r.jsx)(m.G, { size: "sm", color: "currentColor", ref: a }),
                }),
            }),
    });
}
function V(e) {
    let { wordWrap: t, setWordWrap: n, url: s, fileName: a } = e,
        o = i.useRef(null),
        u = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.Y, {
                targetElementRef: o,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsx)(g.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: i,
                        onSelect: () => {},
                        "aria-label": M.intl.string(M.t.PdRCRg),
                        children: (0, r.jsxs)(A.rX, {
                            children: [
                                (0, r.jsx)(A.Dr, {
                                    id: "download",
                                    label: M.intl.string(M.t["1WjMbC"]),
                                    icon: I.s,
                                    action: () => {
                                        u.current?.click(), i();
                                    },
                                }),
                                (0, r.jsx)(A.sL, {
                                    id: "word-wrap",
                                    label: M.intl.string(M.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(l.m, {
                        ariaHidden: !0,
                        text: M.intl.string(M.t["UKOtz+"]),
                        children: (0, r.jsx)(E.D, {
                            ...e,
                            className: P.IQ,
                            "aria-label": M.intl.string(M.t["UKOtz+"]),
                            children: (0, r.jsx)(T.j, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(S.Anchor, {
                ref: u,
                href: s,
                download: a,
                className: P.op,
                children: (0, r.jsx)(I.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function B(e) {
    return (0, r.jsx)(l.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: M.intl.string(M.t["0PQYk3"]),
        children: (0, r.jsx)(E.D, {
            className: P.R1,
            "aria-label": M.intl.string(M.t["0PQYk3"]),
            onClick: () => {
                (0, y.openModal)((t) => (0, r.jsx)(j, { ...e, ...t }));
            },
            children: (0, r.jsx)(N._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function H(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: s,
            expanded: o,
            setExpanded: l,
            language: u,
            setLanguage: c,
            wordWrap: d,
            setWordWrap: _,
            bytesLeft: f,
            className: p,
        } = e,
        h = s?.split("\n"),
        E = h?.length ?? 0,
        m = o ? 100 : 6,
        g = 0 === f,
        A = "";
    g && o && E > m ? (A = "\n...") : g || (A = "..."),
        "" !== A &&
            (g
                ? (A += " " + M.intl.formatToPlainString(M.t.DQnFp2, { lines: E - m }))
                : (A += " " + M.intl.formatToPlainString(M.t["1+gGcK"], { formattedBytes: (0, w.up)(f) })));
    let I = h?.slice(0, m).join("\n") + A,
        T = (0, b.sJ)(I),
        S = o || m < E;
    return (0, r.jsxs)("div", {
        className: a()(p, P.kL),
        children: [
            (0, r.jsx)(v.Ip, {
                className: P.FS,
                children:
                    null == s
                        ? (0, r.jsx)(C.y, { className: P.u1 })
                        : (0, r.jsx)(k, { text: T, language: u, wordWrap: d }),
            }),
            (0, r.jsxs)("div", {
                className: P.qr,
                role: "group",
                "aria-label": M.intl.string(M.t.TlXA8e),
                children: [
                    S ? (0, r.jsx)(U, { expanded: o, setExpanded: l, numLines: E, isWholeFile: g }) : null,
                    (0, r.jsx)(G, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: P.Kb }),
                    (0, r.jsx)(F, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, r.jsx)(B, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: u,
                              wordWrap: d,
                              fileContents: s,
                              bytesLeft: f,
                          })
                        : null,
                    (0, r.jsx)(V, { wordWrap: d, setWordWrap: _, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function j(e) {
    let {
            url: t,
            fileName: n,
            fileSize: s,
            transitionState: a,
            language: o,
            wordWrap: l,
            fileContents: u,
            bytesLeft: c,
            onClose: d,
        } = e,
        [f, p] = i.useState(o),
        [h, E] = i.useState(l),
        m = u ?? "";
    return (
        0 !== c && (m += `... ${M.intl.formatToPlainString(M.t["1+gGcK"], { formattedBytes: (0, w.up)(c) })}`),
        (0, r.jsx)(O.d, {
            transitionState: a,
            "aria-label": M.intl.string(M.t["qxQjc+"]),
            size: "xxl",
            onClose: d,
            children: (0, r.jsxs)("div", {
                className: P.jE,
                children: [
                    (0, r.jsx)(v.Ip, {
                        className: P.ot,
                        children:
                            null == u
                                ? (0, r.jsx)(C.y, { className: P.u1 })
                                : (0, r.jsx)(k, { text: m, language: f, wordWrap: h }),
                    }),
                    (0, r.jsx)("div", {
                        role: "group",
                        "aria-label": M.intl.string(M.t.TlXA8e),
                        children: (0, r.jsxs)(_.E, {
                            color: "text-default",
                            className: P.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)(G, { fileName: n, fileSize: s }),
                                (0, r.jsx)("div", { className: P.Kb }),
                                (0, r.jsx)(F, { language: f, setLanguage: p, align: "bottom" }),
                                (0, r.jsx)(V, { wordWrap: h, setWordWrap: E, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let Y = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: s, contentType: o, className: l, onClick: u, onContextMenu: c } = e,
            [d, _] = i.useState(!1),
            [f, p] = i.useState(n.split(".").slice(-1)[0]),
            [h, E] = i.useState(!1),
            {
                fileContents: m,
                bytesLeft: g,
                hadError: A,
            } = (function (e, t) {
                let [n, r] = i.useState(!1),
                    [s, a] = i.useState(null),
                    [o, l] = i.useState(1);
                return (
                    i.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    i = (function (e) {
                                        let t = "utf-8",
                                            n = e?.split("charset=").slice(-1)[0] ?? t;
                                        try {
                                            return new TextDecoder(n);
                                        } catch (r) {
                                            if (e?.startsWith("text") || n.toLowerCase().includes("utf"))
                                                return new TextDecoder(t);
                                            throw r;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    s = n.headers.get("content-range") ?? "0",
                                    o = n.headers.get("content-length") ?? "1",
                                    u = parseInt(s.split("/")[1]) - parseInt(o);
                                a(0 === u ? i : i.slice(0, -1)), l(u), r(!1);
                            } catch (e) {
                                l(0), r(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: o, hadError: n }
                );
            })(t, o);
        return A
            ? (0, r.jsx)(R.A, { url: t, fileName: n, fileSize: s, onClick: u, onContextMenu: c, className: l })
            : (0, r.jsx)(H, {
                  url: t,
                  fileName: n,
                  fileSize: s,
                  fileContents: m,
                  bytesLeft: g,
                  expanded: d,
                  setExpanded: _,
                  language: f,
                  setLanguage: p,
                  wordWrap: h,
                  setWordWrap: E,
                  className: a()(P.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
