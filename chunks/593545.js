n.d(t, { Z: () => w }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(608787),
    l = n(496600),
    c = n(28664),
    u = n(481060),
    d = n(40330),
    f = n(571989),
    _ = n(828061),
    p = n(259580),
    h = n(424218),
    m = n(388032),
    g = n(409077),
    E = n(154257);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t;
    let n = "utf-8",
        r = null != (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) ? t : n;
    try {
        return new TextDecoder(r);
    } catch (t) {
        if ((null == e ? void 0 : e.startsWith("text")) || r.toLowerCase().includes("utf")) return new TextDecoder(n);
        throw t;
    }
}
function T(e, t) {
    let [n, r] = i.useState(!1),
        [a, o] = i.useState(null),
        [s, l] = i.useState(1);
    return (
        i.useEffect(() => {
            let n = 50000;
            !(async function () {
                try {
                    var i, a;
                    let s = await fetch(e, {
                            headers: {
                                Range: "bytes=0-".concat(n),
                                Accept: "text/plain",
                            },
                        }),
                        c = I(t).decode(await s.arrayBuffer()),
                        u = null != (i = s.headers.get("content-range")) ? i : "0",
                        d = null != (a = s.headers.get("content-length")) ? a : "1",
                        f = parseInt(u.split("/")[1]) - parseInt(d);
                    o(0 === f ? c : c.slice(0, -1)), l(f), r(!1);
                } catch (e) {
                    l(0), r(!0);
                }
            })();
        }, [e, t]),
        {
            fileContents: a,
            bytesLeft: s,
            hadError: n,
        }
    );
}
function S(e) {
    let { text: t, language: i } = e,
        a = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", {
                    className: o()(E.scrollbarGhostHairline, g.codeView, "hljs"),
                    children: t,
                }),
            });
    return (0, r.jsx)(s.GI, {
        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
        webpackId: 364964,
        render: (e) => {
            if (!e.hasLanguage(i)) return a();
            let n = e.highlight(i, t, !0);
            return null == n
                ? a()
                : (0, r.jsx)("pre", {
                      children: (0, r.jsx)("code", {
                          className: o()(E.scrollbarGhostHairline, g.codeView, "hljs", n.language),
                          dangerouslySetInnerHTML: { __html: n.value },
                      }),
                  });
        },
        renderFallback: () => a(),
    });
}
function A(e) {
    let { expanded: t, setExpanded: n, isWholeFile: i, numLines: a } = e,
        o = m.intl.formatToPlainString(i ? m.t.Go5Vvs : m.t.yJcYan, { lines: a });
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: "".concat(t ? m.intl.string(m.t.iTcuma) : m.intl.string(m.t.dcl9MQ), " (").concat(o, ")"),
        children: (0, r.jsxs)(u.P3F, {
            className: g.toggleExpandSection,
            onClick: () => {
                n(!t);
            },
            children: [
                (0, r.jsx)(p.Z, { direction: t ? p.Z.Directions.UP : p.Z.Directions.DOWN }),
                t ? m.intl.string(m.t.iTcuma) : m.intl.string(m.t.dcl9MQ),
            ],
        }),
    });
}
function C(e) {
    let { url: t, fileName: n, fileSize: i } = e,
        a = "".concat(n, " (").concat((0, h.IC)(i), ")");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.u, {
                text: a,
                children: (0, r.jsx)("span", {
                    className: o()(g.downloadSection, g.attachmentName),
                    children: n,
                }),
            }),
            (0, r.jsx)(c.u, {
                text: a,
                children: (0, r.jsx)("span", {
                    className: o()(g.downloadSection, g.formattedSize),
                    children: (0, h.IC)(i),
                }),
            }),
            (0, r.jsx)(c.u, {
                text: "".concat(m.intl.string(m.t["1WjMbC"]), " ").concat(a),
                children: (0, r.jsx)(u.Anchor, {
                    className: g.downloadSection,
                    href: t,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: (0, r.jsx)(u._8t, {
                        size: "md",
                        color: "currentColor",
                        className: g.downloadButton,
                    }),
                }),
            }),
        ],
    });
}
function N(e) {
    let { language: t, setLanguage: n, align: a } = e,
        o = i.useRef(null);
    return (0, r.jsx)(u.yRy, {
        targetElementRef: o,
        position: "left",
        align: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.VqE, {
                "aria-label": m.intl.string(m.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: g.languageSelector,
                    children: (0, r.jsxs)(l.uz, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(_.u).map((e) => ({
                            value: e,
                            label: e,
                            id: e,
                        })),
                        value: t,
                        children: [(0, r.jsx)(l.Ct, { placeholder: m.intl.string(m.t.GofftW) }), (0, r.jsx)(l.px, {})],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(c.u, {
                text: m.intl.string(m.t.utm4qs),
                children: (0, r.jsx)(
                    u.nF$,
                    v(y({}, e), {
                        size: "md",
                        color: "currentColor",
                        className: g.codeIcon,
                        ref: o,
                    }),
                ),
            }),
    });
}
function R(e) {
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: m.intl.string(m.t["0PQYk3"]),
        children: (0, r.jsx)(u.P3F, {
            className: g.openFullPreviewSection,
            onClick: () => {
                (0, u.h7j)((t) => (0, r.jsx)(D, y({}, e, t)));
            },
            children: (0, r.jsx)(u.bJT, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}
function P(e) {
    var t;
    let {
            url: n,
            fileName: i,
            fileSize: a,
            fileContents: s,
            expanded: l,
            setExpanded: c,
            language: d,
            setLanguage: _,
            bytesLeft: p,
            className: E,
        } = e,
        b = null == s ? void 0 : s.split("\n"),
        y = null != (t = null == b ? void 0 : b.length) ? t : 0,
        O = l ? 100 : 6,
        v = 0 === p,
        I = "";
    v && l && y > O ? (I = "\n...") : v || (I = "..."),
        "" !== I &&
            (v
                ? (I += " " + m.intl.formatToPlainString(m.t.DQnFp2, { lines: y - O }))
                : (I += " " + m.intl.formatToPlainString(m.t["1+gGcK"], { formattedBytes: (0, h.IC)(p) })));
    let T = (null == b ? void 0 : b.slice(0, O).join("\n")) + I,
        P = (0, f.nM)(T),
        D = l || O < y;
    return (0, r.jsxs)("div", {
        className: o()(E, g.container),
        children: [
            (0, r.jsx)("div", {
                className: o()(g.textContainer, { [g.expanded]: l }),
                children:
                    null == s
                        ? (0, r.jsx)(u.$jN, { className: g.spinner })
                        : (0, r.jsx)(S, {
                              text: P,
                              language: d,
                          }),
            }),
            (0, r.jsxs)(u.Text, {
                color: "header-secondary",
                className: g.footer,
                variant: "text-sm/normal",
                children: [
                    D
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(A, {
                                      expanded: l,
                                      setExpanded: c,
                                      isWholeFile: v,
                                      numLines: y,
                                  }),
                                  (0, r.jsx)(R, {
                                      url: n,
                                      fileName: i,
                                      fileSize: a,
                                      language: d,
                                      fileContents: s,
                                      bytesLeft: p,
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsx)("div", { className: g.footerGap }),
                    (0, r.jsx)(C, {
                        url: n,
                        fileName: i,
                        fileSize: a,
                    }),
                    (0, r.jsx)(N, {
                        language: d,
                        setLanguage: _,
                        align: "top",
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let {
            url: t,
            fileName: n,
            fileSize: a,
            transitionState: o,
            language: s,
            fileContents: l,
            bytesLeft: c,
            onClose: d,
        } = e,
        [f, _] = i.useState(s),
        p = null != l ? l : "";
    return (
        0 !== c && (p += "... ".concat(m.intl.formatToPlainString(m.t["1+gGcK"], { formattedBytes: (0, h.IC)(c) }))),
        (0, r.jsx)(u.IX, {
            transitionState: o,
            "aria-label": m.intl.string(m.t["qxQjc+"]),
            size: "xxl",
            onClose: d,
            children: (0, r.jsxs)("div", {
                className: g.modalContent,
                children: [
                    (0, r.jsx)(u.zJl, {
                        className: g.modalTextContainer,
                        children:
                            null == l
                                ? (0, r.jsx)(u.$jN, { className: g.spinner })
                                : (0, r.jsx)(S, {
                                      text: p,
                                      language: f,
                                  }),
                    }),
                    (0, r.jsxs)(u.Text, {
                        color: "header-secondary",
                        className: g.modalFooter,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)("div", { className: g.footerGap }),
                            (0, r.jsx)(C, {
                                url: t,
                                fileName: n,
                                fileSize: a,
                            }),
                            (0, r.jsx)(N, {
                                language: f,
                                setLanguage: _,
                                align: "bottom",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let w = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: s, className: l, onClick: c, onContextMenu: u } = e,
            [f, _] = i.useState(!1),
            [p, h] = i.useState(n.split(".").slice(-1)[0]),
            { fileContents: m, bytesLeft: E, hadError: b } = T(t, s);
        return b
            ? (0, r.jsx)(d.Z, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  onClick: c,
                  onContextMenu: u,
                  className: l,
              })
            : (0, r.jsx)(P, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: m,
                  bytesLeft: E,
                  expanded: f,
                  setExpanded: _,
                  language: p,
                  setLanguage: h,
                  className: o()(g.newMosaicStyle, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
