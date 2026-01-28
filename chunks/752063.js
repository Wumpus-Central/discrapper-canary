n.d(t, {
    A: () => D,
}),
    n(747238),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(156828),
    l = n(389723),
    c = n(990078),
    u = n(397927),
    d = n(718468),
    f = n(417964),
    p = n(639169),
    _ = n(255438),
    h = n(985018),
    m = n(772543),
    g = n(829681);

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
                E(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
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
            : b(Object(t)).forEach(function (n) {
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

function A(e, t) {
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

function I(e) {
    let { text: t, language: i, wordWrap: a } = e,
        l = () =>
            (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", {
                    className: o()(g.kw, m.Xb, "hljs", {
                        [m.Zw]: a,
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
                          className: o()(g.kw, m.Xb, "hljs", n.language, {
                              [m.Zw]: a,
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

function S(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: a } = e,
        o = h.intl.formatToPlainString(a ? h.t.Go5Vvs : h.t.yJcYan, {
            lines: i,
        }),
        s = "".concat(t ? h.intl.string(h.t.iTcuma) : h.intl.string(h.t.dcl9MQ), " (").concat(o, ")");
    return (0, r.jsx)("div", {
        className: m.py,
        children: (0, r.jsx)(c.m, {
            text: s,
            children: (0, r.jsx)(u.K0, {
                icon: t ? u.tN5 : u.abt,
                size: "md",
                variant: "secondary",
                onClick: () => (null == n ? void 0 : n(!t)),
                "aria-label": s,
            }),
        }),
    });
}

function T(e) {
    let { fileName: t, fileSize: n } = e,
        i = "".concat(t, " (").concat((0, _.up)(n), ")");
    return (0, r.jsxs)("div", {
        className: m.VI,
        children: [
            (0, r.jsx)("div", {
                className: m.VW,
                children: (0, r.jsx)(c.m, {
                    text: i,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: m.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: (0, _.up)(n),
            }),
        ],
    });
}

function C(e) {
    let { language: t, setLanguage: n, align: a } = e,
        o = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: o,
        position: "left",
        align: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.lGe, {
                "aria-label": h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: m.md,
                    children: (0, r.jsxs)(l.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(p.Q).map((e) => ({
                            value: e,
                            label: e,
                            id: e,
                        })),
                        value: t,
                        children: [
                            (0, r.jsx)(l.a3, {
                                placeholder: h.intl.string(h.t.GofftW),
                            }),
                            (0, r.jsx)(l.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(c.m, {
                text: h.intl.string(h.t.utm4qs),
                children: (0, r.jsx)(
                    u.GaO,
                    O(y({}, e), {
                        size: "sm",
                        color: "currentColor",
                        className: m.Qw,
                        ref: o,
                    }),
                ),
            }),
    });
}

function N(e) {
    let { wordWrap: t, setWordWrap: n, url: a } = e,
        o = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: o,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.W1t, {
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
                                let e = document.createElement("a");
                                (e.href = a), e.click(), URL.revokeObjectURL(a), i();
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
            (0, r.jsx)(c.m, {
                text: h.intl.string(h.t["UKOtz+"]),
                children: (0, r.jsx)(
                    u.DUT,
                    O(y({}, e), {
                        className: m.IQ,
                        children: (0, r.jsx)(u.jNK, {
                            ref: o,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                ),
            }),
    });
}

function w(e) {
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: h.intl.string(h.t["0PQYk3"]),
        children: (0, r.jsx)(u.DUT, {
            className: m.R1,
            onClick: () => {
                (0, u.qfG)((t) => (0, r.jsx)(P, y({}, e, t)));
            },
            children: (0, r.jsx)(u._Xm, {
                size: "sm",
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
            wordWrap: g,
            setWordWrap: E,
            bytesLeft: y,
            className: b,
        } = e,
        O = null == s ? void 0 : s.split("\n"),
        v = null != (t = null == O ? void 0 : O.length) ? t : 0,
        A = l ? 100 : 6,
        R = 0 === y,
        P = "";
    R && l && v > A ? (P = "\n...") : R || (P = "..."),
        "" !== P &&
            (R
                ? (P +=
                      " " +
                      h.intl.formatToPlainString(h.t.DQnFp2, {
                          lines: v - A,
                      }))
                : (P +=
                      " " +
                      h.intl.formatToPlainString(h.t["1+gGcK"], {
                          formattedBytes: (0, _.up)(y),
                      })));
    let D = (null == O ? void 0 : O.slice(0, A).join("\n")) + P,
        L = (0, f.sJ)(D),
        x = l || A < v;
    return (0, r.jsxs)("div", {
        className: o()(b, m.kL),
        children: [
            (0, r.jsx)("div", {
                className: o()(m.FS, {
                    [m.sz]: l,
                }),
                children:
                    null == s
                        ? (0, r.jsx)(u.y$y, {
                              className: m.u1,
                          })
                        : (0, r.jsx)(I, {
                              text: L,
                              language: d,
                              wordWrap: g,
                          }),
            }),
            (0, r.jsxs)("div", {
                className: m.qr,
                children: [
                    x
                        ? (0, r.jsx)(S, {
                              expanded: l,
                              setExpanded: c,
                              numLines: v,
                              isWholeFile: R,
                          })
                        : null,
                    (0, r.jsx)(T, {
                        fileName: i,
                        fileSize: a,
                    }),
                    (0, r.jsx)("div", {
                        className: m.Kb,
                    }),
                    (0, r.jsx)(C, {
                        language: d,
                        setLanguage: p,
                        align: "top",
                    }),
                    null != s
                        ? (0, r.jsx)(w, {
                              url: n,
                              fileName: i,
                              fileSize: a,
                              language: d,
                              wordWrap: g,
                              fileContents: s,
                              bytesLeft: y,
                          })
                        : null,
                    (0, r.jsx)(N, {
                        wordWrap: g,
                        setWordWrap: E,
                        url: n,
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
            wordWrap: l,
            fileContents: c,
            bytesLeft: d,
            onClose: f,
        } = e,
        [p, g] = i.useState(s),
        [E, y] = i.useState(l),
        b = null != c ? c : "";
    return (
        0 !== d &&
            (b += "... ".concat(
                h.intl.formatToPlainString(h.t["1+gGcK"], {
                    formattedBytes: (0, _.up)(d),
                }),
            )),
        (0, r.jsx)(u.dWK, {
            transitionState: o,
            "aria-label": h.intl.string(h.t["qxQjc+"]),
            size: "xxl",
            onClose: f,
            children: (0, r.jsxs)("div", {
                className: m.jE,
                children: [
                    (0, r.jsx)(u.IpV, {
                        className: m.ot,
                        children:
                            null == c
                                ? (0, r.jsx)(u.y$y, {
                                      className: m.u1,
                                  })
                                : (0, r.jsx)(I, {
                                      text: b,
                                      language: p,
                                      wordWrap: E,
                                  }),
                    }),
                    (0, r.jsxs)(u.Text, {
                        color: "text-default",
                        className: m.Hx,
                        variant: "text-sm/normal",
                        children: [
                            (0, r.jsx)(T, {
                                fileName: n,
                                fileSize: a,
                            }),
                            (0, r.jsx)("div", {
                                className: m.Kb,
                            }),
                            (0, r.jsx)(C, {
                                language: p,
                                setLanguage: g,
                                align: "bottom",
                            }),
                            (0, r.jsx)(N, {
                                wordWrap: E,
                                setWordWrap: y,
                                url: t,
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
            [_, h] = i.useState(n.split(".").slice(-1)[0]),
            [g, E] = i.useState(!1),
            { fileContents: y, bytesLeft: b, hadError: O } = A(t, s);
        return O
            ? (0, r.jsx)(d.A, {
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
                  fileContents: y,
                  bytesLeft: b,
                  expanded: f,
                  setExpanded: p,
                  language: _,
                  setLanguage: h,
                  wordWrap: g,
                  setWordWrap: E,
                  className: o()(m.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
