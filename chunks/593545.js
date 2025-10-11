n.d(t, { Z: () => w }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(608787),
    l = n(28664),
    c = n(481060),
    u = n(40330),
    d = n(571989),
    f = n(828061),
    _ = n(259580),
    p = n(424218),
    h = n(388032),
    m = n(409077),
    g = n(154257);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
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
function I(e, t) {
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
                        c = v(t).decode(await s.arrayBuffer()),
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
function T(e) {
    let { text: t, language: i } = e,
        a = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", {
                    className: o()(g.scrollbarGhostHairline, m.codeView, "hljs"),
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
                          className: o()(g.scrollbarGhostHairline, m.codeView, "hljs", n.language),
                          dangerouslySetInnerHTML: { __html: n.value },
                      }),
                  });
        },
        renderFallback: () => a(),
    });
}
function S(e) {
    let { expanded: t, setExpanded: n, isWholeFile: i, numLines: a } = e,
        o = h.intl.formatToPlainString(i ? h.t.Go5Vvr : h.t.yJcYam, { lines: a });
    return (0, r.jsx)(l.u, {
        asContainer: !0,
        text: "".concat(t ? h.intl.string(h.t.iTcumZ) : h.intl.string(h.t.dcl9MT), " (").concat(o, ")"),
        children: (0, r.jsxs)(c.P3F, {
            className: m.toggleExpandSection,
            onClick: () => {
                n(!t);
            },
            children: [
                (0, r.jsx)(_.Z, { direction: t ? _.Z.Directions.UP : _.Z.Directions.DOWN }),
                t ? h.intl.string(h.t.iTcumZ) : h.intl.string(h.t.dcl9MT),
            ],
        }),
    });
}
function A(e) {
    let { url: t, fileName: n, fileSize: i } = e,
        a = "".concat(n, " (").concat((0, p.IC)(i), ")");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.u, {
                text: a,
                children: (0, r.jsx)("span", {
                    className: o()(m.downloadSection, m.attachmentName),
                    children: n,
                }),
            }),
            (0, r.jsx)(l.u, {
                text: a,
                children: (0, r.jsx)("span", {
                    className: o()(m.downloadSection, m.formattedSize),
                    children: (0, p.IC)(i),
                }),
            }),
            (0, r.jsx)(l.u, {
                text: "".concat(h.intl.string(h.t["1WjMbG"]), " ").concat(a),
                children: (0, r.jsx)(c.Anchor, {
                    className: m.downloadSection,
                    href: t,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: (0, r.jsx)(c._8t, {
                        size: "md",
                        color: "currentColor",
                        className: m.downloadButton,
                    }),
                }),
            }),
        ],
    });
}
function C(e) {
    let { language: t, setLanguage: n, align: a } = e,
        o = i.useRef(null);
    return (0, r.jsx)(c.yRy, {
        targetElementRef: o,
        position: "left",
        align: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(c.VqE, {
                "aria-label": h.intl.string(h.t.utm4qq),
                children: (0, r.jsx)(c.hQY, {
                    className: m.languageSelector,
                    multiSelect: !1,
                    placeholder: h.intl.string(h.t.Gofftb),
                    value: new Set([t]),
                    autoFocus: !0,
                    onChange: (e) => {
                        n(e), i();
                    },
                    children: (e) =>
                        Array.from(f.u)
                            .filter((t) => t.toLowerCase().includes(e.toLowerCase()))
                            .map((e) =>
                                (0, r.jsx)(
                                    c.lo1,
                                    {
                                        value: e,
                                        children: (0, r.jsx)(c.lo1.Label, { children: e }),
                                    },
                                    e,
                                ),
                            ),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(l.u, {
                text: h.intl.string(h.t.utm4qq),
                children: (0, r.jsx)(
                    c.nF$,
                    O(b({}, e), {
                        size: "md",
                        color: "currentColor",
                        className: m.codeIcon,
                        ref: o,
                    }),
                ),
            }),
    });
}
function N(e) {
    return (0, r.jsx)(l.u, {
        asContainer: !0,
        text: h.intl.string(h.t["0PQYk5"]),
        children: (0, r.jsx)(c.P3F, {
            className: m.openFullPreviewSection,
            onClick: () => {
                (0, c.h7j)((t) => (0, r.jsx)(P, b({}, e, t)));
            },
            children: (0, r.jsx)(c.bJT, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}
function R(e) {
    var t;
    let {
            url: n,
            fileName: i,
            fileSize: a,
            fileContents: s,
            expanded: l,
            setExpanded: u,
            language: f,
            setLanguage: _,
            bytesLeft: g,
            className: E,
        } = e,
        b = null == s ? void 0 : s.split("\n"),
        y = null != (t = null == b ? void 0 : b.length) ? t : 0,
        O = l ? 100 : 6,
        v = 0 === g,
        I = "";
    v && l && y > O ? (I = "\n...") : v || (I = "..."),
        "" !== I &&
            (v
                ? (I += " " + h.intl.formatToPlainString(h.t.DQnFp6, { lines: y - O }))
                : (I += " " + h.intl.formatToPlainString(h.t["1+gGcH"], { formattedBytes: (0, p.IC)(g) })));
    let R = (null == b ? void 0 : b.slice(0, O).join("\n")) + I,
        P = (0, d.nM)(R),
        w = l || O < y;
    return (0, r.jsxs)("div", {
        className: o()(E, m.container),
        children: [
            (0, r.jsx)("div", {
                className: o()(m.textContainer, { [m.expanded]: l }),
                children:
                    null == s
                        ? (0, r.jsx)(c.$jN, { className: m.spinner })
                        : (0, r.jsx)(T, {
                              text: P,
                              language: f,
                          }),
            }),
            (0, r.jsxs)(c.Text, {
                color: "header-secondary",
                className: m.footer,
                variant: "text-sm/normal",
                children: [
                    w
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(S, {
                                      expanded: l,
                                      setExpanded: u,
                                      isWholeFile: v,
                                      numLines: y,
                                  }),
                                  (0, r.jsx)(N, {
                                      url: n,
                                      fileName: i,
                                      fileSize: a,
                                      language: f,
                                      fileContents: s,
                                      bytesLeft: g,
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsx)("div", { className: m.footerGap }),
                    (0, r.jsx)(A, {
                        url: n,
                        fileName: i,
                        fileSize: a,
                    }),
                    (0, r.jsx)(C, {
                        language: f,
                        setLanguage: _,
                        align: "top",
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let {
            url: t,
            fileName: n,
            fileSize: a,
            transitionState: o,
            language: s,
            fileContents: l,
            bytesLeft: u,
            onClose: d,
        } = e,
        [f, _] = i.useState(s),
        g = null != l ? l : "";
    return (
        0 !== u && (g += "... ".concat(h.intl.formatToPlainString(h.t["1+gGcH"], { formattedBytes: (0, p.IC)(u) }))),
        (0, r.jsx)(c.IX, {
            transitionState: o,
            "aria-label": h.intl.string(h.t.qxQjc3),
            size: "xl",
            onClose: d,
            children: (0, r.jsxs)("div", {
                className: m.modalContent,
                children: [
                    (0, r.jsx)(c.zJl, {
                        className: m.modalTextContainer,
                        children:
                            null == l
                                ? (0, r.jsx)(c.$jN, { className: m.spinner })
                                : (0, r.jsx)(T, {
                                      text: g,
                                      language: f,
                                  }),
                    }),
                    (0, r.jsxs)(c.Text, {
                        color: "header-secondary",
                        className: m.modalFooter,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)("div", { className: m.footerGap }),
                            (0, r.jsx)(A, {
                                url: t,
                                fileName: n,
                                fileSize: a,
                            }),
                            (0, r.jsx)(C, {
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
        let { url: t, fileName: n, fileSize: a, contentType: s, className: l, onClick: c, onContextMenu: d } = e,
            [f, _] = i.useState(!1),
            [p, h] = i.useState(n.split(".").slice(-1)[0]),
            { fileContents: g, bytesLeft: E, hadError: b } = I(t, s);
        return b
            ? (0, r.jsx)(u.Z, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  onClick: c,
                  onContextMenu: d,
                  className: l,
              })
            : (0, r.jsx)(R, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: g,
                  bytesLeft: E,
                  expanded: f,
                  setExpanded: _,
                  language: p,
                  setLanguage: h,
                  className: o()(m.newMosaicStyle, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
