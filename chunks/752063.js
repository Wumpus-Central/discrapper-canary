"use strict";
n.d(t, { A: () => O });
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
    f = n(157941),
    p = n(255438),
    h = n(985018),
    m = n(460224),
    E = n(429128);
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
function A(e, t) {
    let [n, r] = i.useState(!1),
        [s, a] = i.useState(null),
        [o, l] = i.useState(1);
    return (
        i.useEffect(() => {
            let n = 5e4;
            !(async function () {
                try {
                    let i = await fetch(e, { headers: { Range: `bytes=0-${n}`, Accept: "text/plain" } }),
                        s = g(t).decode(await i.arrayBuffer()),
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
function I(e) {
    let { text: t, language: i, wordWrap: s } = e,
        l = () => (0, r.jsx)("code", { className: a()(E.kw, m.Xb, "hljs", { [m.Zw]: s }), children: t });
    return (0, r.jsx)("pre", {
        children: (0, r.jsx)(f.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: a()(E.kw, m.Xb, "hljs", { [m.Zw]: s }),
            children: (0, r.jsx)(o.c2, {
                createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
                webpackId: 752238,
                render: (e) => {
                    if (!e.hasLanguage(i)) return l();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? l()
                        : (0, r.jsx)("code", {
                              className: a()(E.kw, m.Xb, "hljs", n.language, { [m.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => l(),
            }),
        }),
    });
}
function T(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: s } = e,
        a = h.intl.formatToPlainString(s ? h.t.Go5Vvs : h.t.yJcYan, { lines: i }),
        o = `${t ? h.intl.string(h.t.iTcuma) : h.intl.string(h.t.dcl9MQ)} (${a})`;
    return (0, r.jsx)("div", {
        className: m.py,
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
function S(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, p.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: m.VI,
        children: [
            (0, r.jsx)("div", {
                className: m.VW,
                children: (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: m.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(u.Text, { variant: "text-xs/normal", color: "text-subtle", children: (0, p.up)(n) }),
        ],
    });
}
function y(e) {
    let { language: t, setLanguage: n, align: s } = e,
        a = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: a,
        position: "left",
        align: s,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.lGe, {
                "aria-label": h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: m.md,
                    children: (0, r.jsxs)(u.iS7, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(_.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, r.jsx)(u.a32, { placeholder: h.intl.string(h.t.GofftW) }),
                            (0, r.jsx)(u.X2W, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(l.m, {
                ariaHidden: !0,
                text: h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)(u.DUT, {
                    ...e,
                    className: m.Qw,
                    "aria-label": h.intl.string(h.t.utm4qs),
                    children: (0, r.jsx)(u.GaO, { size: "sm", color: "currentColor", ref: a }),
                }),
            }),
    });
}
function v(e) {
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
                        "aria-label": h.intl.string(h.t.PdRCRg),
                        children: (0, r.jsxs)(u.rXV, {
                            children: [
                                (0, r.jsx)(u.Drp, {
                                    id: "download",
                                    label: h.intl.string(h.t["1WjMbC"]),
                                    icon: u.s3U,
                                    action: () => {
                                        c.current?.click(), i();
                                    },
                                }),
                                (0, r.jsx)(u.sLh, {
                                    id: "word-wrap",
                                    label: h.intl.string(h.t.AMKNT1),
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
                        text: h.intl.string(h.t["UKOtz+"]),
                        children: (0, r.jsx)(u.DUT, {
                            ...e,
                            className: m.IQ,
                            "aria-label": h.intl.string(h.t["UKOtz+"]),
                            children: (0, r.jsx)(u.jNK, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(u.MzZ, {
                ref: c,
                href: s,
                download: a,
                className: m.op,
                children: (0, r.jsx)(u.s3U, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function N(e) {
    return (0, r.jsx)(l.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: h.intl.string(h.t["0PQYk3"]),
        children: (0, r.jsx)(u.DUT, {
            className: m.R1,
            "aria-label": h.intl.string(h.t["0PQYk3"]),
            onClick: () => {
                (0, u.qfG)((t) => (0, r.jsx)(R, { ...e, ...t }));
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
            fileContents: s,
            expanded: o,
            setExpanded: l,
            language: c,
            setLanguage: _,
            wordWrap: f,
            setWordWrap: E,
            bytesLeft: g,
            className: A,
        } = e,
        C = s?.split("\n"),
        R = C?.length ?? 0,
        O = o ? 100 : 6,
        b = 0 === g,
        D = "";
    b && o && R > O ? (D = "\n...") : b || (D = "..."),
        "" !== D &&
            (b
                ? (D += " " + h.intl.formatToPlainString(h.t.DQnFp2, { lines: R - O }))
                : (D += " " + h.intl.formatToPlainString(h.t["1+gGcK"], { formattedBytes: (0, p.up)(g) })));
    let L = C?.slice(0, O).join("\n") + D,
        w = (0, d.sJ)(L),
        M = o || O < R;
    return (0, r.jsxs)("div", {
        className: a()(A, m.kL),
        children: [
            (0, r.jsx)(u.IpV, {
                className: m.FS,
                children:
                    null == s
                        ? (0, r.jsx)(u.y$y, { className: m.u1 })
                        : (0, r.jsx)(I, { text: w, language: c, wordWrap: f }),
            }),
            (0, r.jsxs)("div", {
                className: m.qr,
                role: "group",
                "aria-label": h.intl.string(h.t.TlXA8e),
                children: [
                    M ? (0, r.jsx)(T, { expanded: o, setExpanded: l, numLines: R, isWholeFile: b }) : null,
                    (0, r.jsx)(S, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: m.Kb }),
                    (0, r.jsx)(y, { language: c, setLanguage: _, align: "top" }),
                    null != s
                        ? (0, r.jsx)(N, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: c,
                              wordWrap: f,
                              fileContents: s,
                              bytesLeft: g,
                          })
                        : null,
                    (0, r.jsx)(v, { wordWrap: f, setWordWrap: E, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function R(e) {
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
        [f, E] = i.useState(o),
        [g, A] = i.useState(l),
        T = c ?? "";
    return (
        0 !== d && (T += `... ${h.intl.formatToPlainString(h.t["1+gGcK"], { formattedBytes: (0, p.up)(d) })}`),
        (0, r.jsx)(u.dWK, {
            transitionState: a,
            "aria-label": h.intl.string(h.t["qxQjc+"]),
            size: "xxl",
            onClose: _,
            children: (0, r.jsxs)("div", {
                className: m.jE,
                children: [
                    (0, r.jsx)(u.IpV, {
                        className: m.ot,
                        children:
                            null == c
                                ? (0, r.jsx)(u.y$y, { className: m.u1 })
                                : (0, r.jsx)(I, { text: T, language: f, wordWrap: g }),
                    }),
                    (0, r.jsx)("div", {
                        role: "group",
                        "aria-label": h.intl.string(h.t.TlXA8e),
                        children: (0, r.jsxs)(u.Text, {
                            color: "text-default",
                            className: m.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)(S, { fileName: n, fileSize: s }),
                                (0, r.jsx)("div", { className: m.Kb }),
                                (0, r.jsx)(y, { language: f, setLanguage: E, align: "bottom" }),
                                (0, r.jsx)(v, { wordWrap: g, setWordWrap: A, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let O = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: s, contentType: o, className: l, onClick: u, onContextMenu: d } = e,
            [_, f] = i.useState(!1),
            [p, h] = i.useState(n.split(".").slice(-1)[0]),
            [E, g] = i.useState(!1),
            { fileContents: I, bytesLeft: T, hadError: S } = A(t, o);
        return S
            ? (0, r.jsx)(c.A, { url: t, fileName: n, fileSize: s, onClick: u, onContextMenu: d, className: l })
            : (0, r.jsx)(C, {
                  url: t,
                  fileName: n,
                  fileSize: s,
                  fileContents: I,
                  bytesLeft: T,
                  expanded: _,
                  setExpanded: f,
                  language: p,
                  setLanguage: h,
                  wordWrap: E,
                  setWordWrap: g,
                  className: a()(m.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
