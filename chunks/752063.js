"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(156828),
    o = n(990078),
    c = n(408278),
    u = n(900797),
    d = n(847374),
    h = n(834730),
    m = n(265872),
    p = n(305866),
    f = n(389723),
    g = n(939249),
    _ = n(387758),
    x = n(861672),
    A = n(477782),
    C = n(32880),
    E = n(365199),
    I = n(349288),
    v = n(192308),
    y = n(26430),
    S = n(573613),
    b = n(289873),
    N = n(224640),
    T = n(718468),
    j = n(417964),
    R = n(639169),
    w = n(157941),
    L = n(255438),
    M = n(985018),
    k = n(460224),
    O = n(429128);
function P(e) {
    let { text: t, language: l, wordWrap: s } = e,
        o = () => (0, i.jsx)("code", { className: r()(O.kw, k.Xb, "hljs", { [k.Zw]: s }), children: t });
    return (0, i.jsx)("pre", {
        children: (0, i.jsx)(w.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: l,
            className: r()(O.kw, k.Xb, "hljs", { [k.Zw]: s }),
            children: (0, i.jsx)(a.c2, {
                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 752238)),
                webpackId: 752238,
                render: (e) => {
                    if (!e.hasLanguage(l)) return o();
                    let n = e.highlight(l, t, !0);
                    return null == n
                        ? o()
                        : (0, i.jsx)("code", {
                              className: r()(O.kw, k.Xb, "hljs", n.language, { [k.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => o(),
            }),
        }),
    });
}
function D(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        r = M.intl.formatToPlainString(s ? M.t.Go5Vvs : M.t.yJcYan, { lines: l }),
        a = `${t ? M.intl.string(M.t.iTcuma) : M.intl.string(M.t.dcl9MQ)} (${r})`;
    return (0, i.jsx)("div", {
        className: k.py,
        children: (0, i.jsx)(o.m, {
            text: a,
            children: (0, i.jsx)(c.K, {
                icon: t ? u.t : d.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": a,
            }),
        }),
    });
}
function U(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, L.up)(n)})`;
    return (0, i.jsxs)("div", {
        className: k.VI,
        children: [
            (0, i.jsx)("div", {
                className: k.VW,
                children: (0, i.jsx)(o.m, {
                    text: l,
                    children: (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: k.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, L.up)(n) }),
        ],
    });
}
function V(e) {
    let { language: t, setLanguage: n, align: s } = e,
        r = l.useRef(null);
    return (0, i.jsx)(m.Y, {
        targetElementRef: r,
        position: "left",
        align: s,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(p.l, {
                "aria-label": M.intl.string(M.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: k.md,
                    children: (0, i.jsxs)(f.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), l();
                        },
                        options: Array.from(R.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [(0, i.jsx)(f.a3, { placeholder: M.intl.string(M.t.GofftW) }), (0, i.jsx)(f.X2, {})],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(o.m, {
                ariaHidden: !0,
                text: M.intl.string(M.t.utm4qs),
                children: (0, i.jsx)(g.D, {
                    ...e,
                    className: k.Qw,
                    "aria-label": M.intl.string(M.t.utm4qs),
                    children: (0, i.jsx)(_.G, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function G(e) {
    let { wordWrap: t, setWordWrap: n, url: s, fileName: r } = e,
        a = l.useRef(null),
        c = l.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Y, {
                targetElementRef: a,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsx)(x.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: l,
                        onSelect: () => {},
                        "aria-label": M.intl.string(M.t.PdRCRg),
                        children: (0, i.jsxs)(A.rX, {
                            children: [
                                (0, i.jsx)(A.Dr, {
                                    id: "download",
                                    label: M.intl.string(M.t["1WjMbC"]),
                                    icon: C.s,
                                    action: () => {
                                        c.current?.click(), l();
                                    },
                                }),
                                (0, i.jsx)(A.sL, {
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
                    (0, i.jsx)(o.m, {
                        ariaHidden: !0,
                        text: M.intl.string(M.t["UKOtz+"]),
                        children: (0, i.jsx)(g.D, {
                            ...e,
                            className: k.IQ,
                            "aria-label": M.intl.string(M.t["UKOtz+"]),
                            children: (0, i.jsx)(E.j, { ref: a, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(I.Anchor, {
                ref: c,
                href: s,
                download: r,
                className: k.op,
                children: (0, i.jsx)(C.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function F(e) {
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: M.intl.string(M.t["0PQYk3"]),
        children: (0, i.jsx)(g.D, {
            className: k.R1,
            "aria-label": M.intl.string(M.t["0PQYk3"]),
            onClick: () => {
                (0, v.openModal)((t) => (0, i.jsx)(H, { ...e, ...t }));
            },
            children: (0, i.jsx)(y._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function B(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            fileContents: s,
            expanded: a,
            setExpanded: o,
            language: c,
            setLanguage: u,
            wordWrap: d,
            setWordWrap: h,
            bytesLeft: m,
            className: p,
        } = e,
        f = s?.split("\n"),
        g = f?.length ?? 0,
        _ = a ? 100 : 6,
        x = 0 === m,
        A = "";
    x && a && g > _ ? (A = "\n...") : x || (A = "..."),
        "" !== A &&
            (x
                ? (A += " " + M.intl.formatToPlainString(M.t.DQnFp2, { lines: g - _ }))
                : (A += " " + M.intl.formatToPlainString(M.t["1+gGcK"], { formattedBytes: (0, L.up)(m) })));
    let C = f?.slice(0, _).join("\n") + A,
        E = (0, j.sJ)(C),
        I = a || _ < g;
    return (0, i.jsxs)("div", {
        className: r()(p, k.kL),
        children: [
            (0, i.jsx)(S.Ip, {
                className: k.FS,
                children:
                    null == s
                        ? (0, i.jsx)(b.y, { className: k.u1 })
                        : (0, i.jsx)(P, { text: E, language: c, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: k.qr,
                role: "group",
                "aria-label": M.intl.string(M.t.TlXA8e),
                children: [
                    I ? (0, i.jsx)(D, { expanded: a, setExpanded: o, numLines: g, isWholeFile: x }) : null,
                    (0, i.jsx)(U, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: k.Kb }),
                    (0, i.jsx)(V, { language: c, setLanguage: u, align: "top" }),
                    null != s
                        ? (0, i.jsx)(F, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: c,
                              wordWrap: d,
                              fileContents: s,
                              bytesLeft: m,
                          })
                        : null,
                    (0, i.jsx)(G, { wordWrap: d, setWordWrap: h, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function H(e) {
    let {
            url: t,
            fileName: n,
            fileSize: s,
            transitionState: r,
            language: a,
            wordWrap: o,
            fileContents: c,
            bytesLeft: u,
            onClose: d,
        } = e,
        [m, p] = l.useState(a),
        [f, g] = l.useState(o),
        _ = c ?? "";
    return (
        0 !== u && (_ += `... ${M.intl.formatToPlainString(M.t["1+gGcK"], { formattedBytes: (0, L.up)(u) })}`),
        (0, i.jsx)(N.d, {
            transitionState: r,
            "aria-label": M.intl.string(M.t["qxQjc+"]),
            size: "xxl",
            onClose: d,
            children: (0, i.jsxs)("div", {
                className: k.jE,
                children: [
                    (0, i.jsx)(S.Ip, {
                        className: k.ot,
                        children:
                            null == c
                                ? (0, i.jsx)(b.y, { className: k.u1 })
                                : (0, i.jsx)(P, { text: _, language: m, wordWrap: f }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": M.intl.string(M.t.TlXA8e),
                        children: (0, i.jsxs)(h.E, {
                            color: "text-default",
                            className: k.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(U, { fileName: n, fileSize: s }),
                                (0, i.jsx)("div", { className: k.Kb }),
                                (0, i.jsx)(V, { language: m, setLanguage: p, align: "bottom" }),
                                (0, i.jsx)(G, { wordWrap: f, setWordWrap: g, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let W = l.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: s, contentType: a, className: o, onClick: c, onContextMenu: u } = e,
            [d, h] = l.useState(!1),
            [m, p] = l.useState(n.split(".").slice(-1)[0]),
            [f, g] = l.useState(!1),
            {
                fileContents: _,
                bytesLeft: x,
                hadError: A,
            } = (function (e, t) {
                let [n, i] = l.useState(!1),
                    [s, r] = l.useState(null),
                    [a, o] = l.useState(1);
                return (
                    l.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    l = (function (e) {
                                        let t = "utf-8",
                                            n = e?.split("charset=").slice(-1)[0] ?? t;
                                        try {
                                            return new TextDecoder(n);
                                        } catch (i) {
                                            if (e?.startsWith("text") || n.toLowerCase().includes("utf"))
                                                return new TextDecoder(t);
                                            throw i;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    s = n.headers.get("content-range") ?? "0",
                                    a = n.headers.get("content-length") ?? "1",
                                    c = parseInt(s.split("/")[1]) - parseInt(a);
                                r(0 === c ? l : l.slice(0, -1)), o(c), i(!1);
                            } catch (e) {
                                o(0), i(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: a, hadError: n }
                );
            })(t, a);
        return A
            ? (0, i.jsx)(T.A, { url: t, fileName: n, fileSize: s, onClick: c, onContextMenu: u, className: o })
            : (0, i.jsx)(B, {
                  url: t,
                  fileName: n,
                  fileSize: s,
                  fileContents: _,
                  bytesLeft: x,
                  expanded: d,
                  setExpanded: h,
                  language: m,
                  setLanguage: p,
                  wordWrap: f,
                  setWordWrap: g,
                  className: r()(k.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
