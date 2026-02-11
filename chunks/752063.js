"use strict";
n.d(t, { A: () => R });
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
    h = n(985018),
    p = n(34481),
    g = n(431055);
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
function A(e, t) {
    let [n, r] = i.useState(!1),
        [a, s] = i.useState(null),
        [o, l] = i.useState(1);
    return (
        i.useEffect(() => {
            let n = 5e4;
            !(async function () {
                try {
                    let i = await fetch(e, { headers: { Range: `bytes=0-${n}`, Accept: "text/plain" } }),
                        a = E(t).decode(await i.arrayBuffer()),
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
function I(e) {
    let { text: t, language: i, wordWrap: a } = e,
        l = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", { className: s()(g.kw, p.Xb, "hljs", { [p.Zw]: a }), children: t }),
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
                          className: s()(g.kw, p.Xb, "hljs", n.language, { [p.Zw]: a }),
                          dangerouslySetInnerHTML: { __html: n.value },
                      }),
                  });
        },
        renderFallback: () => l(),
    });
}
function T(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: a } = e,
        s = h.intl.formatToPlainString(a ? h.t.Go5Vvs : h.t.yJcYan, { lines: i }),
        o = `${t ? h.intl.string(h.t.iTcuma) : h.intl.string(h.t.dcl9MQ)} (${s})`;
    return (0, r.jsx)("div", {
        className: p.py,
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
function y(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, f.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: p.VI,
        children: [
            (0, r.jsx)("div", {
                className: p.VW,
                children: (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: p.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(u.Text, { variant: "text-xs/normal", color: "text-subtle", children: (0, f.up)(n) }),
        ],
    });
}
function S(e) {
    let { language: t, setLanguage: n, align: a } = e,
        s = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: s,
        position: "left",
        align: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.lGe, {
                "aria-label": h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: p.md,
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
                text: h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)(u.GaO, { ...e, size: "sm", color: "currentColor", className: p.Qw, ref: s }),
            }),
    });
}
function v(e) {
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
                        text: h.intl.string(h.t["UKOtz+"]),
                        children: (0, r.jsx)(u.DUT, {
                            ...e,
                            className: p.IQ,
                            children: (0, r.jsx)(u.jNK, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(u.MzZ, {
                ref: c,
                href: a,
                download: s,
                className: p.op,
                children: (0, r.jsx)(u.s3U, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function C(e) {
    return (0, r.jsx)(l.m, {
        asContainer: !0,
        text: h.intl.string(h.t["0PQYk3"]),
        children: (0, r.jsx)(u.DUT, {
            className: p.R1,
            onClick: () => {
                (0, u.qfG)((t) => (0, r.jsx)(N, { ...e, ...t }));
            },
            children: (0, r.jsx)(u._Xm, { size: "sm", color: "currentColor" }),
        }),
    });
}
function b(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: a,
            expanded: o,
            setExpanded: l,
            language: c,
            setLanguage: _,
            wordWrap: g,
            setWordWrap: E,
            bytesLeft: A,
            className: b,
        } = e,
        N = a?.split("\n"),
        R = N?.length ?? 0,
        O = o ? 100 : 6,
        D = 0 === A,
        L = "";
    D && o && R > O ? (L = "\n...") : D || (L = "..."),
        "" !== L &&
            (D
                ? (L += " " + h.intl.formatToPlainString(h.t.DQnFp2, { lines: R - O }))
                : (L += " " + h.intl.formatToPlainString(h.t["1+gGcK"], { formattedBytes: (0, f.up)(A) })));
    let w = N?.slice(0, O).join("\n") + L,
        x = (0, d.sJ)(w),
        P = o || O < R;
    return (0, r.jsxs)("div", {
        className: s()(b, p.kL),
        children: [
            (0, r.jsx)("div", {
                className: s()(p.FS, { [p.sz]: o }),
                children:
                    null == a
                        ? (0, r.jsx)(u.y$y, { className: p.u1 })
                        : (0, r.jsx)(I, { text: x, language: c, wordWrap: g }),
            }),
            (0, r.jsxs)("div", {
                className: p.qr,
                children: [
                    P ? (0, r.jsx)(T, { expanded: o, setExpanded: l, numLines: R, isWholeFile: D }) : null,
                    (0, r.jsx)(y, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: p.Kb }),
                    (0, r.jsx)(S, { language: c, setLanguage: _, align: "top" }),
                    null != a
                        ? (0, r.jsx)(C, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: c,
                              wordWrap: g,
                              fileContents: a,
                              bytesLeft: A,
                          })
                        : null,
                    (0, r.jsx)(v, { wordWrap: g, setWordWrap: E, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function N(e) {
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
        [g, E] = i.useState(o),
        [A, T] = i.useState(l),
        C = c ?? "";
    return (
        0 !== d && (C += `... ${h.intl.formatToPlainString(h.t["1+gGcK"], { formattedBytes: (0, f.up)(d) })}`),
        (0, r.jsx)(u.dWK, {
            transitionState: s,
            "aria-label": h.intl.string(h.t["qxQjc+"]),
            size: "xxl",
            onClose: _,
            children: (0, r.jsxs)("div", {
                className: p.jE,
                children: [
                    (0, r.jsx)(u.IpV, {
                        className: p.ot,
                        children:
                            null == c
                                ? (0, r.jsx)(u.y$y, { className: p.u1 })
                                : (0, r.jsx)(I, { text: C, language: g, wordWrap: A }),
                    }),
                    (0, r.jsxs)(u.Text, {
                        color: "text-default",
                        className: p.Hx,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)(y, { fileName: n, fileSize: a }),
                            (0, r.jsx)("div", { className: p.Kb }),
                            (0, r.jsx)(S, { language: g, setLanguage: E, align: "bottom" }),
                            (0, r.jsx)(v, { wordWrap: A, setWordWrap: T, url: t, fileName: n }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let R = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: o, className: l, onClick: u, onContextMenu: d } = e,
            [_, f] = i.useState(!1),
            [h, g] = i.useState(n.split(".").slice(-1)[0]),
            [E, I] = i.useState(!1),
            { fileContents: T, bytesLeft: y, hadError: S } = A(t, o);
        return S
            ? (0, r.jsx)(c.A, { url: t, fileName: n, fileSize: a, onClick: u, onContextMenu: d, className: l })
            : (0, r.jsx)(b, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: T,
                  bytesLeft: y,
                  expanded: _,
                  setExpanded: f,
                  language: h,
                  setLanguage: g,
                  wordWrap: E,
                  setWordWrap: I,
                  className: s()(p.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
