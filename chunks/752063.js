"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
function E(e) {
    let t = "utf-8",
        n = e?.split("charset=").slice(-1)[0] ?? t;
    try {
        return new TextDecoder(n);
    } catch (r) {
        if (e?.startsWith("text") || n.toLowerCase().includes("utf")) return new TextDecoder(t);
        throw r;
    }
}
function g(e, t) {
    let [n, r] = i.useState(!1),
        [s, a] = i.useState(null),
        [o, l] = i.useState(1);
    return (
        i.useEffect(() => {
            let n = 5e4;
            !(async function () {
                try {
                    let i = await fetch(e, { headers: { Range: `bytes=0-${n}`, Accept: "text/plain" } }),
                        s = E(t).decode(await i.arrayBuffer()),
                        o = i.headers.get("content-range") ?? "0",
                        u = i.headers.get("content-length") ?? "1",
                        c = parseInt(o.split("/")[1]) - parseInt(u);
                    a(0 === c ? s : s.slice(0, -1)), l(c), r(!1);
                } catch (e) {
                    l(0), r(!0);
                }
            })();
        }, [e, t]),
        { fileContents: s, bytesLeft: o, hadError: n }
    );
}
function A(e) {
    let { text: t, language: i, wordWrap: s } = e,
        l = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", { className: a()(m.kw, h.Xb, "hljs", { [h.Zw]: s }), children: t }),
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
                          className: a()(m.kw, h.Xb, "hljs", n.language, { [h.Zw]: s }),
                          dangerouslySetInnerHTML: { __html: n.value },
                      }),
                  });
        },
        renderFallback: () => l(),
    });
}
function I(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: s } = e,
        a = p.intl.formatToPlainString(s ? p.t.Go5Vvs : p.t.yJcYan, { lines: i }),
        o = `${t ? p.intl.string(p.t.iTcuma) : p.intl.string(p.t.dcl9MQ)} (${a})`;
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
function S(e) {
    let { language: t, setLanguage: n, align: s } = e,
        a = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: a,
        position: "left",
        align: s,
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
                children: (0, r.jsx)(u.GaO, { ...e, size: "sm", color: "currentColor", className: h.Qw, ref: a }),
            }),
    });
}
function y(e) {
    let { wordWrap: t, setWordWrap: n, url: s, fileName: a } = e,
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
                href: s,
                download: a,
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
                (0, u.qfG)((t) => (0, r.jsx)(C, { ...e, ...t }));
            },
            children: (0, r.jsx)(u._Xm, { size: "sm", color: "currentColor" }),
        }),
    });
}
function N(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: s,
            expanded: o,
            setExpanded: l,
            language: c,
            setLanguage: _,
            wordWrap: m,
            setWordWrap: E,
            bytesLeft: g,
            className: N,
        } = e,
        C = s?.split("\n"),
        R = C?.length ?? 0,
        O = o ? 100 : 6,
        b = 0 === g,
        D = "";
    b && o && R > O ? (D = "\n...") : b || (D = "..."),
        "" !== D &&
            (b
                ? (D += " " + p.intl.formatToPlainString(p.t.DQnFp2, { lines: R - O }))
                : (D += " " + p.intl.formatToPlainString(p.t["1+gGcK"], { formattedBytes: (0, f.up)(g) })));
    let L = C?.slice(0, O).join("\n") + D,
        w = (0, d.sJ)(L),
        M = o || O < R;
    return (0, r.jsxs)("div", {
        className: a()(N, h.kL),
        children: [
            (0, r.jsx)(u.IpV, {
                className: h.FS,
                children:
                    null == s
                        ? (0, r.jsx)(u.y$y, { className: h.u1 })
                        : (0, r.jsx)(A, { text: w, language: c, wordWrap: m }),
            }),
            (0, r.jsxs)("div", {
                className: h.qr,
                children: [
                    M ? (0, r.jsx)(I, { expanded: o, setExpanded: l, numLines: R, isWholeFile: b }) : null,
                    (0, r.jsx)(T, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: h.Kb }),
                    (0, r.jsx)(S, { language: c, setLanguage: _, align: "top" }),
                    null != s
                        ? (0, r.jsx)(v, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: c,
                              wordWrap: m,
                              fileContents: s,
                              bytesLeft: g,
                          })
                        : null,
                    (0, r.jsx)(y, { wordWrap: m, setWordWrap: E, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function C(e) {
    let {
            url: t,
            fileName: n,
            fileSize: s,
            transitionState: a,
            language: o,
            wordWrap: l,
            fileContents: c,
            bytesLeft: d,
            onClose: _,
        } = e,
        [m, E] = i.useState(o),
        [g, I] = i.useState(l),
        v = c ?? "";
    return (
        0 !== d && (v += `... ${p.intl.formatToPlainString(p.t["1+gGcK"], { formattedBytes: (0, f.up)(d) })}`),
        (0, r.jsx)(u.dWK, {
            transitionState: a,
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
                                : (0, r.jsx)(A, { text: v, language: m, wordWrap: g }),
                    }),
                    (0, r.jsxs)(u.Text, {
                        color: "text-default",
                        className: h.Hx,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)(T, { fileName: n, fileSize: s }),
                            (0, r.jsx)("div", { className: h.Kb }),
                            (0, r.jsx)(S, { language: m, setLanguage: E, align: "bottom" }),
                            (0, r.jsx)(y, { wordWrap: g, setWordWrap: I, url: t, fileName: n }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let R = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: s, contentType: o, className: l, onClick: u, onContextMenu: d } = e,
            [_, f] = i.useState(!1),
            [p, m] = i.useState(n.split(".").slice(-1)[0]),
            [E, A] = i.useState(!1),
            { fileContents: I, bytesLeft: T, hadError: S } = g(t, o);
        return S
            ? (0, r.jsx)(c.A, { url: t, fileName: n, fileSize: s, onClick: u, onContextMenu: d, className: l })
            : (0, r.jsx)(N, {
                  url: t,
                  fileName: n,
                  fileSize: s,
                  fileContents: I,
                  bytesLeft: T,
                  expanded: _,
                  setExpanded: f,
                  language: p,
                  setLanguage: m,
                  wordWrap: E,
                  setWordWrap: A,
                  className: a()(h.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
