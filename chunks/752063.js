n.d(t, {
    A: () => P,
}),
    n(747238),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(156828),
    l = n(990078),
    c = n(397927),
    u = n(718468),
    d = n(417964),
    f = n(639169),
    p = n(255438),
    _ = n(985018),
    h = n(772543),
    m = n(829681);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
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

function b(e, t) {
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

function O(e) {
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

function v(e, t) {
    let [n, r] = i.useState(!1),
        [a, o] = i.useState(null),
        [s, l] = i.useState(1);
    return (
        i.useEffect(() => {
            let n = 5e4;
            !(async function () {
                try {
                    var i, a;
                    let s = await fetch(e, {
                            headers: {
                                Range: "bytes=0-".concat(n),
                                Accept: "text/plain",
                            },
                        }),
                        c = O(t).decode(await s.arrayBuffer()),
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

function A(e) {
    let { text: t, language: i, wordWrap: a } = e,
        l = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", {
                    className: o()(m.kw, h.Xb, "hljs", {
                        [h.Zw]: a,
                    }),
                    children: t,
                }),
            });
    return (0, r.jsx)(s.c2, {
        createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
        webpackId: 752238,
        render: (e) => {
            if (!e.hasLanguage(i)) return l();
            let n = e.highlight(i, t, !0);
            return null == n
                ? l()
                : (0, r.jsx)("pre", {
                      children: (0, r.jsx)("code", {
                          className: o()(m.kw, h.Xb, "hljs", n.language, {
                              [h.Zw]: a,
                          }),
                          dangerouslySetInnerHTML: {
                              __html: n.value,
                          },
                      }),
                  });
        },
        renderFallback: () => l(),
    });
}

function I(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: a } = e,
        o = _.intl.formatToPlainString(a ? _.t.Go5Vvs : _.t.yJcYan, {
            lines: i,
        }),
        s = "".concat(t ? _.intl.string(_.t.iTcuma) : _.intl.string(_.t.dcl9MQ), " (").concat(o, ")");
    return (0, r.jsx)("div", {
        className: h.py,
        children: (0, r.jsx)(l.m, {
            text: s,
            children: (0, r.jsx)(c.K0, {
                icon: t ? c.tN5 : c.abt,
                size: "md",
                variant: "secondary",
                onClick: () => (null == n ? void 0 : n(!t)),
                "aria-label": s,
            }),
        }),
    });
}

function S(e) {
    let { fileName: t, fileSize: n } = e,
        i = "".concat(t, " (").concat((0, p.up)(n), ")");
    return (0, r.jsxs)("div", {
        className: h.VI,
        children: [
            (0, r.jsx)("div", {
                className: h.VW,
                children: (0, r.jsx)(l.m, {
                    text: i,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: h.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: (0, p.up)(n),
            }),
        ],
    });
}

function T(e) {
    let { language: t, setLanguage: n, align: a } = e,
        o = i.useRef(null);
    return (0, r.jsx)(c.YNO, {
        targetElementRef: o,
        position: "left",
        align: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(c.lGe, {
                "aria-label": _.intl.string(_.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: h.md,
                    children: (0, r.jsxs)(c.iS7, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(f.Q).map((e) => ({
                            value: e,
                            label: e,
                            id: e,
                        })),
                        value: t,
                        children: [
                            (0, r.jsx)(c.a32, {
                                placeholder: _.intl.string(_.t.GofftW),
                            }),
                            (0, r.jsx)(c.X2W, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(l.m, {
                text: _.intl.string(_.t.utm4qs),
                children: (0, r.jsx)(
                    c.GaO,
                    b(E({}, e), {
                        size: "sm",
                        color: "currentColor",
                        className: h.Qw,
                        ref: o,
                    }),
                ),
            }),
    });
}

function C(e) {
    let { wordWrap: t, setWordWrap: n, url: a, fileName: o } = e,
        s = i.useRef(null),
        u = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.YNO, {
                targetElementRef: s,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsx)(c.W1t, {
                        navId: "plaintext-preview-overflow-menu",
                        onClose: i,
                        onSelect: () => {},
                        "aria-label": _.intl.string(_.t.PdRCRg),
                        children: (0, r.jsxs)(c.rXV, {
                            children: [
                                (0, r.jsx)(c.Drp, {
                                    id: "download",
                                    label: _.intl.string(_.t["1WjMbC"]),
                                    icon: c.s3U,
                                    action: () => {
                                        var e;
                                        null == (e = u.current) || e.click(), i();
                                    },
                                }),
                                (0, r.jsx)(c.sLh, {
                                    id: "word-wrap",
                                    label: _.intl.string(_.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(l.m, {
                        text: _.intl.string(_.t["UKOtz+"]),
                        children: (0, r.jsx)(
                            c.DUT,
                            b(E({}, e), {
                                className: h.IQ,
                                children: (0, r.jsx)(c.jNK, {
                                    ref: s,
                                    size: "sm",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                    }),
            }),
            (0, r.jsx)(c.MzZ, {
                ref: u,
                href: a,
                download: o,
                className: h.op,
                children: (0, r.jsx)(c.s3U, {
                    size: "sm",
                    color: "currentColor",
                }),
            }),
        ],
    });
}

function N(e) {
    return (0, r.jsx)(l.m, {
        asContainer: !0,
        text: _.intl.string(_.t["0PQYk3"]),
        children: (0, r.jsx)(c.DUT, {
            className: h.R1,
            onClick: () => {
                (0, c.qfG)((t) => (0, r.jsx)(R, E({}, e, t)));
            },
            children: (0, r.jsx)(c._Xm, {
                size: "sm",
                color: "currentColor",
            }),
        }),
    });
}

function w(e) {
    var t;
    let {
            url: n,
            fileName: i,
            fileSize: a,
            fileContents: s,
            expanded: l,
            setExpanded: u,
            language: f,
            setLanguage: m,
            wordWrap: g,
            setWordWrap: E,
            bytesLeft: y,
            className: b,
        } = e,
        O = null == s ? void 0 : s.split("\n"),
        v = null != (t = null == O ? void 0 : O.length) ? t : 0,
        w = l ? 100 : 6,
        R = 0 === y,
        P = "";
    R && l && v > w ? (P = "\n...") : R || (P = "..."),
        "" !== P &&
            (R
                ? (P +=
                      " " +
                      _.intl.formatToPlainString(_.t.DQnFp2, {
                          lines: v - w,
                      }))
                : (P +=
                      " " +
                      _.intl.formatToPlainString(_.t["1+gGcK"], {
                          formattedBytes: (0, p.up)(y),
                      })));
    let D = (null == O ? void 0 : O.slice(0, w).join("\n")) + P,
        L = (0, d.sJ)(D),
        x = l || w < v;
    return (0, r.jsxs)("div", {
        className: o()(b, h.kL),
        children: [
            (0, r.jsx)("div", {
                className: o()(h.FS, {
                    [h.sz]: l,
                }),
                children:
                    null == s
                        ? (0, r.jsx)(c.y$y, {
                              className: h.u1,
                          })
                        : (0, r.jsx)(A, {
                              text: L,
                              language: f,
                              wordWrap: g,
                          }),
            }),
            (0, r.jsxs)("div", {
                className: h.qr,
                children: [
                    x
                        ? (0, r.jsx)(I, {
                              expanded: l,
                              setExpanded: u,
                              numLines: v,
                              isWholeFile: R,
                          })
                        : null,
                    (0, r.jsx)(S, {
                        fileName: i,
                        fileSize: a,
                    }),
                    (0, r.jsx)("div", {
                        className: h.Kb,
                    }),
                    (0, r.jsx)(T, {
                        language: f,
                        setLanguage: m,
                        align: "top",
                    }),
                    null != s
                        ? (0, r.jsx)(N, {
                              url: n,
                              fileName: i,
                              fileSize: a,
                              language: f,
                              wordWrap: g,
                              fileContents: s,
                              bytesLeft: y,
                          })
                        : null,
                    (0, r.jsx)(C, {
                        wordWrap: g,
                        setWordWrap: E,
                        url: n,
                        fileName: i,
                    }),
                ],
            }),
        ],
    });
}

function R(e) {
    let {
            url: t,
            fileName: n,
            fileSize: a,
            transitionState: o,
            language: s,
            wordWrap: l,
            fileContents: u,
            bytesLeft: d,
            onClose: f,
        } = e,
        [m, g] = i.useState(s),
        [E, y] = i.useState(l),
        b = null != u ? u : "";
    return (
        0 !== d &&
            (b += "... ".concat(
                _.intl.formatToPlainString(_.t["1+gGcK"], {
                    formattedBytes: (0, p.up)(d),
                }),
            )),
        (0, r.jsx)(c.dWK, {
            transitionState: o,
            "aria-label": _.intl.string(_.t["qxQjc+"]),
            size: "xxl",
            onClose: f,
            children: (0, r.jsxs)("div", {
                className: h.jE,
                children: [
                    (0, r.jsx)(c.IpV, {
                        className: h.ot,
                        children:
                            null == u
                                ? (0, r.jsx)(c.y$y, {
                                      className: h.u1,
                                  })
                                : (0, r.jsx)(A, {
                                      text: b,
                                      language: m,
                                      wordWrap: E,
                                  }),
                    }),
                    (0, r.jsxs)(c.Text, {
                        color: "text-default",
                        className: h.Hx,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)(S, {
                                fileName: n,
                                fileSize: a,
                            }),
                            (0, r.jsx)("div", {
                                className: h.Kb,
                            }),
                            (0, r.jsx)(T, {
                                language: m,
                                setLanguage: g,
                                align: "bottom",
                            }),
                            (0, r.jsx)(C, {
                                wordWrap: E,
                                setWordWrap: y,
                                url: t,
                                fileName: n,
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let P = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: s, className: l, onClick: c, onContextMenu: d } = e,
            [f, p] = i.useState(!1),
            [_, m] = i.useState(n.split(".").slice(-1)[0]),
            [g, E] = i.useState(!1),
            { fileContents: y, bytesLeft: b, hadError: O } = v(t, s);
        return O
            ? (0, r.jsx)(u.A, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  onClick: c,
                  onContextMenu: d,
                  className: l,
              })
            : (0, r.jsx)(w, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: y,
                  bytesLeft: b,
                  expanded: f,
                  setExpanded: p,
                  language: _,
                  setLanguage: m,
                  wordWrap: g,
                  setWordWrap: E,
                  className: o()(h.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
