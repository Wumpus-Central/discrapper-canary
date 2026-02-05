"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(156828),
    l = n(990078),
    u = n(397927),
    c = n(718468),
    d = n(417964),
    _ = n(639169),
    f = n(255438),
    p = n(985018),
    h = n(772543),
    m = n(829681);
function g(e) {
    let t = "utf-8",
        n = e?.split("charset=").slice(-1)[0] ?? t;
    try {
        return new TextDecoder(n);
    } catch (r) {
        if (e?.startsWith("text") || n.toLowerCase().includes("utf")) return new TextDecoder(t);
        throw r;
    }
}
function E(e, t) {
    let [n, r] = i.useState(!1),
        [a, s] = i.useState(null),
        [o, l] = i.useState(1);
    return (
        i.useEffect(() => {
            let n = 5e4;
            !(async function () {
                try {
                    let i = await fetch(e, { headers: { Range: `bytes=0-${n}`, Accept: "text/plain" } }),
                        a = g(t).decode(await i.arrayBuffer()),
                        o = i.headers.get("content-range") ?? "0",
                        u = i.headers.get("content-length") ?? "1",
                        c = parseInt(o.split("/")[1]) - parseInt(u);
                    s(0 === c ? a : a.slice(0, -1)), l(c), r(!1);
                } catch (e) {
                    l(0), r(!0);
                }
            })();
        }, [e, t]),
        { fileContents: a, bytesLeft: o, hadError: n }
    );
}
function A(e) {
    let { text: t, language: i, wordWrap: a } = e,
        l = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", { className: s()(m.kw, h.Xb, "hljs", { [h.Zw]: a }), children: t }),
            });
    return (0, r.jsx)(o.c2, {
        createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
        webpackId: 752238,
        render: (e) => {
            if (!e.hasLanguage(i)) return l();
            let n = e.highlight(i, t, !0);
            return null == n
                ? l()
                : (0, r.jsx)("pre", {
                      children: (0, r.jsx)("code", {
                          className: s()(m.kw, h.Xb, "hljs", n.language, { [h.Zw]: a }),
                          dangerouslySetInnerHTML: { __html: n.value },
                      }),
                  });
        },
        renderFallback: () => l(),
    });
}
function I(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: a } = e,
        s = p.intl.formatToPlainString(a ? p.t.Go5Vvs : p.t.yJcYan, { lines: i }),
        o = `${t ? p.intl.string(p.t.iTcuma) : p.intl.string(p.t.dcl9MQ)} (${s})`;
    return (0, r.jsx)("div", {
        className: h.py,
        children: (0, r.jsx)(l.m, {
            text: o,
            children: (0, r.jsx)(u.K0, {
                icon: t ? u.tN5 : u.abt,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": o,
            }),
        }),
    });
}
function T(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, f.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: h.VI,
        children: [
            (0, r.jsx)("div", {
                className: h.VW,
                children: (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: h.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(u.Text, { variant: "text-xs/normal", color: "text-subtle", children: (0, f.up)(n) }),
        ],
    });
}
function y(e) {
    let { language: t, setLanguage: n, align: a } = e,
        s = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: s,
        position: "left",
        align: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.lGe, {
                "aria-label": p.intl.string(p.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: h.md,
                    children: (0, r.jsxs)(u.iS7, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(_.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, r.jsx)(u.a32, { placeholder: p.intl.string(p.t.GofftW) }),
                            (0, r.jsx)(u.X2W, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(l.m, {
                text: p.intl.string(p.t.utm4qs),
                children: (0, r.jsx)(u.GaO, { ...e, size: "sm", color: "currentColor", className: h.Qw, ref: s }),
            }),
    });
}
function S(e) {
    let { wordWrap: t, setWordWrap: n, url: a, fileName: s } = e,
        o = i.useRef(null),
        c = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.YNO, {
                targetElementRef: o,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsx)(u.W1t, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: i,
                        onSelect: () => {},
                        "aria-label": p.intl.string(p.t.PdRCRg),
                        children: (0, r.jsxs)(u.rXV, {
                            children: [
                                (0, r.jsx)(u.Drp, {
                                    id: "download",
                                    label: p.intl.string(p.t["1WjMbC"]),
                                    icon: u.s3U,
                                    action: () => {
                                        c.current?.click(), i();
                                    },
                                }),
                                (0, r.jsx)(u.sLh, {
                                    id: "word-wrap",
                                    label: p.intl.string(p.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(l.m, {
                        text: p.intl.string(p.t["UKOtz+"]),
                        children: (0, r.jsx)(u.DUT, {
                            ...e,
                            className: h.IQ,
                            children: (0, r.jsx)(u.jNK, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(u.MzZ, {
                ref: c,
                href: a,
                download: s,
                className: h.op,
                children: (0, r.jsx)(u.s3U, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function v(e) {
    return (0, r.jsx)(l.m, {
        asContainer: !0,
        text: p.intl.string(p.t["0PQYk3"]),
        children: (0, r.jsx)(u.DUT, {
            className: h.R1,
            onClick: () => {
                (0, u.qfG)((t) => (0, r.jsx)(b, { ...e, ...t }));
            },
            children: (0, r.jsx)(u._Xm, { size: "sm", color: "currentColor" }),
        }),
    });
}
function C(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: a,
            expanded: o,
            setExpanded: l,
            language: c,
            setLanguage: _,
            wordWrap: m,
            setWordWrap: g,
            bytesLeft: E,
            className: C,
        } = e,
        b = a?.split("\n"),
        N = b?.length ?? 0,
        R = o ? 100 : 6,
        O = 0 === E,
        D = "";
    O && o && N > R ? (D = "\n...") : O || (D = "..."),
        "" !== D &&
            (O
                ? (D += " " + p.intl.formatToPlainString(p.t.DQnFp2, { lines: N - R }))
                : (D += " " + p.intl.formatToPlainString(p.t["1+gGcK"], { formattedBytes: (0, f.up)(E) })));
    let L = b?.slice(0, R).join("\n") + D,
        w = (0, d.sJ)(L),
        x = o || R < N;
    return (0, r.jsxs)("div", {
        className: s()(C, h.kL),
        children: [
            (0, r.jsx)("div", {
                className: s()(h.FS, { [h.sz]: o }),
                children:
                    null == a
                        ? (0, r.jsx)(u.y$y, { className: h.u1 })
                        : (0, r.jsx)(A, { text: w, language: c, wordWrap: m }),
            }),
            (0, r.jsxs)("div", {
                className: h.qr,
                children: [
                    x ? (0, r.jsx)(I, { expanded: o, setExpanded: l, numLines: N, isWholeFile: O }) : null,
                    (0, r.jsx)(T, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: h.Kb }),
                    (0, r.jsx)(y, { language: c, setLanguage: _, align: "top" }),
                    null != a
                        ? (0, r.jsx)(v, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: c,
                              wordWrap: m,
                              fileContents: a,
                              bytesLeft: E,
                          })
                        : null,
                    (0, r.jsx)(S, { wordWrap: m, setWordWrap: g, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function b(e) {
    let {
            url: t,
            fileName: n,
            fileSize: a,
            transitionState: s,
            language: o,
            wordWrap: l,
            fileContents: c,
            bytesLeft: d,
            onClose: _,
        } = e,
        [m, g] = i.useState(o),
        [E, I] = i.useState(l),
        v = c ?? "";
    return (
        0 !== d && (v += `... ${p.intl.formatToPlainString(p.t["1+gGcK"], { formattedBytes: (0, f.up)(d) })}`),
        (0, r.jsx)(u.dWK, {
            transitionState: s,
            "aria-label": p.intl.string(p.t["qxQjc+"]),
            size: "xxl",
            onClose: _,
            children: (0, r.jsxs)("div", {
                className: h.jE,
                children: [
                    (0, r.jsx)(u.IpV, {
                        className: h.ot,
                        children:
                            null == c
                                ? (0, r.jsx)(u.y$y, { className: h.u1 })
                                : (0, r.jsx)(A, { text: v, language: m, wordWrap: E }),
                    }),
                    (0, r.jsxs)(u.Text, {
                        color: "text-default",
                        className: h.Hx,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)(T, { fileName: n, fileSize: a }),
                            (0, r.jsx)("div", { className: h.Kb }),
                            (0, r.jsx)(y, { language: m, setLanguage: g, align: "bottom" }),
                            (0, r.jsx)(S, { wordWrap: E, setWordWrap: I, url: t, fileName: n }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let N = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: o, className: l, onClick: u, onContextMenu: d } = e,
            [_, f] = i.useState(!1),
            [p, m] = i.useState(n.split(".").slice(-1)[0]),
            [g, A] = i.useState(!1),
            { fileContents: I, bytesLeft: T, hadError: y } = E(t, o);
        return y
            ? (0, r.jsx)(c.A, { url: t, fileName: n, fileSize: a, onClick: u, onContextMenu: d, className: l })
            : (0, r.jsx)(C, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: I,
                  bytesLeft: T,
                  expanded: _,
                  setExpanded: f,
                  language: p,
                  setLanguage: m,
                  wordWrap: g,
                  setWordWrap: A,
                  className: s()(h.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
