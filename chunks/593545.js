n.d(t, { Z: () => D }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(608787),
    l = n(496600),
    c = n(28664),
    u = n(481060),
    d = n(40330),
    f = n(571989),
    p = n(828061),
    _ = n(259580),
    m = n(424218),
    h = n(388032),
    g = n(708702),
    E = n(164701);
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
function S(e) {
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
                        c = S(t).decode(await s.arrayBuffer()),
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
function C(e) {
    let { expanded: t, setExpanded: n, isWholeFile: i, numLines: a } = e,
        o = h.intl.formatToPlainString(i ? h.t.Go5Vvs : h.t.yJcYan, { lines: a });
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: "".concat(t ? h.intl.string(h.t.iTcuma) : h.intl.string(h.t.dcl9MQ), " (").concat(o, ")"),
        children: (0, r.jsxs)(u.P3F, {
            className: g.toggleExpandSection,
            onClick: () => {
                n(!t);
            },
            children: [
                (0, r.jsx)(_.Z, { direction: t ? _.Z.Directions.UP : _.Z.Directions.DOWN }),
                t ? h.intl.string(h.t.iTcuma) : h.intl.string(h.t.dcl9MQ),
            ],
        }),
    });
}
function A(e) {
    let { url: t, fileName: n, fileSize: i } = e,
        a = "".concat(n, " (").concat((0, m.IC)(i), ")");
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
                    children: (0, m.IC)(i),
                }),
            }),
            (0, r.jsx)(c.u, {
                text: "".concat(h.intl.string(h.t["1WjMbC"]), " ").concat(a),
                children: (0, r.jsx)(u.eee, {
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
                "aria-label": h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: g.languageSelector,
                    children: (0, r.jsxs)(l.uz, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(p.u).map((e) => ({
                            value: e,
                            label: e,
                            id: e,
                        })),
                        value: t,
                        children: [(0, r.jsx)(l.Ct, { placeholder: h.intl.string(h.t.GofftW) }), (0, r.jsx)(l.px, {})],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(c.u, {
                text: h.intl.string(h.t.utm4qs),
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
function P(e) {
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: h.intl.string(h.t["0PQYk3"]),
        children: (0, r.jsx)(u.P3F, {
            className: g.openFullPreviewSection,
            onClick: () => {
                (0, u.h7j)((t) => (0, r.jsx)(w, y({}, e, t)));
            },
            children: (0, r.jsx)(u.bJT, {
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
            setExpanded: c,
            language: d,
            setLanguage: p,
            bytesLeft: _,
            className: E,
        } = e,
        b = null == s ? void 0 : s.split("\n"),
        y = null != (t = null == b ? void 0 : b.length) ? t : 0,
        O = l ? 100 : 6,
        v = 0 === _,
        S = "";
    v && l && y > O ? (S = "\n...") : v || (S = "..."),
        "" !== S &&
            (v
                ? (S += " " + h.intl.formatToPlainString(h.t.DQnFp2, { lines: y - O }))
                : (S += " " + h.intl.formatToPlainString(h.t["1+gGcK"], { formattedBytes: (0, m.IC)(_) })));
    let I = (null == b ? void 0 : b.slice(0, O).join("\n")) + S,
        R = (0, f.nM)(I),
        w = l || O < y;
    return (0, r.jsxs)("div", {
        className: o()(E, g.container),
        children: [
            (0, r.jsx)("div", {
                className: o()(g.textContainer, { [g.expanded]: l }),
                children:
                    null == s
                        ? (0, r.jsx)(u.$jN, { className: g.spinner })
                        : (0, r.jsx)(T, {
                              text: R,
                              language: d,
                          }),
            }),
            (0, r.jsxs)(u.Text, {
                color: "text-default",
                className: g.footer,
                variant: "text-sm/normal",
                children: [
                    w
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(C, {
                                      expanded: l,
                                      setExpanded: c,
                                      isWholeFile: v,
                                      numLines: y,
                                  }),
                                  (0, r.jsx)(P, {
                                      url: n,
                                      fileName: i,
                                      fileSize: a,
                                      language: d,
                                      fileContents: s,
                                      bytesLeft: _,
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsx)("div", { className: g.footerGap }),
                    (0, r.jsx)(A, {
                        url: n,
                        fileName: i,
                        fileSize: a,
                    }),
                    (0, r.jsx)(N, {
                        language: d,
                        setLanguage: p,
                        align: "top",
                    }),
                ],
            }),
        ],
    });
}
function w(e) {
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
        [f, p] = i.useState(s),
        _ = null != l ? l : "";
    return (
        0 !== c && (_ += "... ".concat(h.intl.formatToPlainString(h.t["1+gGcK"], { formattedBytes: (0, m.IC)(c) }))),
        (0, r.jsx)(u.IX, {
            transitionState: o,
            "aria-label": h.intl.string(h.t["qxQjc+"]),
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
                                : (0, r.jsx)(T, {
                                      text: _,
                                      language: f,
                                  }),
                    }),
                    (0, r.jsxs)(u.Text, {
                        color: "text-default",
                        className: g.modalFooter,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)("div", { className: g.footerGap }),
                            (0, r.jsx)(A, {
                                url: t,
                                fileName: n,
                                fileSize: a,
                            }),
                            (0, r.jsx)(N, {
                                language: f,
                                setLanguage: p,
                                align: "bottom",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let D = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: s, className: l, onClick: c, onContextMenu: u } = e,
            [f, p] = i.useState(!1),
            [_, m] = i.useState(n.split(".").slice(-1)[0]),
            { fileContents: h, bytesLeft: E, hadError: b } = I(t, s);
        return b
            ? (0, r.jsx)(d.Z, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  onClick: c,
                  onContextMenu: u,
                  className: l,
              })
            : (0, r.jsx)(R, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: h,
                  bytesLeft: E,
                  expanded: f,
                  setExpanded: p,
                  language: _,
                  setLanguage: m,
                  className: o()(g.newMosaicStyle, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
