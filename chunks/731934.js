n.d(t, { Z: () => B }), n(953529), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(91192),
    c = n(481060),
    u = n(209613),
    d = n(82295),
    f = n(785681),
    p = n(485664),
    _ = n(880257),
    m = n(631885),
    h = n(895328),
    g = n(568671),
    E = n(419821),
    b = n(367515),
    y = n(250285),
    O = n(292352),
    v = n(134612),
    S = n(744038),
    I = n(388032),
    T = n(519279),
    A = n(790680),
    C = n(197571),
    N = n(926895);
function P(e, t, n) {
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
function R(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function x(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, r.jsxs)("div", {
        className: A.step,
        children: [
            (0, r.jsx)("div", {
                className: A.stepNumber,
                children: (0, r.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, r.jsx)(c.y5t, { children: i }),
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-sm/bold",
                        children: (0, r.jsx)(c.y5t, { children: t }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: n,
                    }),
                ],
            }),
        ],
    });
}
function L() {
    return (0, r.jsxs)("div", {
        className: o()(A.box, T.box, A.linkingBanner, A.linkingBannerParent),
        children: [
            (0, r.jsxs)("div", {
                className: A.linkingBannerUpper,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(c.Heading, {
                                className: C.marginBottom8,
                                variant: "heading-xl/medium",
                                children: (0, r.jsx)(c.y5t, { children: I.intl.string(S.default.pHEnV5) }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: C.marginBottom20,
                                children: I.intl.string(S.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        className: A.bannerArt,
                        src: N,
                        alt: I.intl.string(S.default["r+PDmu"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: A.steps,
                children: [
                    (0, r.jsx)(x, {
                        header: I.intl.string(S.default["7xxAni"]),
                        description: I.intl.string(S.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, r.jsx)(x, {
                        header: I.intl.string(S.default["AXgx+a"]),
                        description: I.intl.string(S.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, r.jsx)(x, {
                        header: I.intl.string(S.default.MZn1tG),
                        description: I.intl.string(S.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function j() {
    let e = (0, m.VM)();
    return (0, r.jsxs)("div", {
        className: o()(A.box, T.box, A.linkingBanner),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Heading, {
                        className: C.marginBottom8,
                        variant: "heading-xl/medium",
                        children: (0, r.jsx)(c.y5t, { children: I.intl.string(S.default.zUCWEL) }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.marginBottom20,
                        children: I.intl.format(S.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, r.jsx)(g.Z, {}),
                ],
            }),
            (0, r.jsx)("img", {
                className: A.bannerArt,
                src: N,
                alt: I.intl.string(S.default["r+PDmu"]),
            }),
        ],
    });
}
function M(e) {
    let { sectionType: t, sectionTitle: n, requests: a } = e,
        o = i.useRef(null),
        s = "".concat(t, "-list"),
        f = (0, u.Z)(s),
        p = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    o = a[n],
                    s = i === a.length;
                return null == o
                    ? null
                    : (0, r.jsx)(
                          y.Z,
                          {
                              userId: o.id,
                              isLast: s,
                              children: () =>
                                  t === O.ne.ACTIVE ? (0, r.jsx)(E.u, { user: o }) : (0, r.jsx)(b.B, { user: o }),
                          },
                          o.id,
                      );
            },
            [a, t],
        ),
        _ = i.useCallback(
            () =>
                (0, r.jsx)(
                    d.Z,
                    {
                        children: (0, r.jsx)(c.Text, {
                            className: C.marginBottom8,
                            variant: "eyebrow",
                            color: "text-default",
                            children: n,
                        }),
                    },
                    "title",
                ),
            [n],
        );
    return (0, r.jsx)("div", {
        className: A.section,
        children: (0, r.jsx)(l.bG, {
            navigator: f,
            children: (0, r.jsx)(l.SJ, {
                children: (e) => {
                    var { ref: t, role: i } = e,
                        l = w(e, ["ref", "role"]);
                    return (0, r.jsx)(
                        c.aVo,
                        R(
                            {
                                innerRole: i,
                                innerAriaLabel: n,
                                ref: (e) => {
                                    var n;
                                    (o.current = e),
                                        (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                                sectionHeight: O.zE,
                                rowHeight: O.ip,
                                renderSection: _,
                                renderRow: p,
                                sections: [a.length],
                                chunkSize: 30,
                                fade: !0,
                            },
                            l,
                        ),
                        s,
                    );
                },
            }),
        }),
    });
}
let k = () => {
        let e = (0, _.Z)(),
            t = (0, m.zu)(),
            n = e ? O.AG : O.i0,
            i = {
                count: t.length,
                max: n,
            },
            a = (0, f.o)(
                I.intl.formatToPlainString(S.default["+tnO34"], i),
                I.intl.formatToPlainString(S.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, r.jsx)(M, {
                  sectionType: O.ne.ACTIVE,
                  sectionTitle: a,
                  requests: t,
              })
            : (0, r.jsxs)("div", {
                  className: A.section,
                  children: [
                      (0, r.jsx)(c.Text, {
                          className: C.marginBottom8,
                          variant: "eyebrow",
                          color: "text-default",
                          children: a,
                      }),
                      (0, r.jsx)("div", {
                          className: A.box,
                          children: (0, r.jsx)(h.Z, { text: I.intl.string(S.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    U = () => {
        let e = (0, m.VM)(),
            t = (0, _.Z)() ? O.AG : O.i0,
            n = (0, f.o)(
                I.intl.formatToPlainString(S.default["1/PzIj"], { maxConnections: t }),
                I.intl.formatToPlainString(S.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, r.jsx)("div", {
                  className: A.maxConnectionInfo,
                  children: (0, r.jsx)(c.Text, {
                      variant: "text-xxs/medium",
                      color: "text-muted",
                      children: n,
                  }),
              })
            : null;
    },
    G = () => {
        let e = (0, p.o)(),
            t = (0, p.Q)(),
            n = (0, s.EQ)({
                helpline: e,
                throughline: t,
            })
                .with({ helpline: !0 }, () =>
                    I.intl.format(S.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => I.intl.format(S.default["6tsC8u"], { helpLink: v.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, r.jsxs)("div", {
                  className: C.marginTop20,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          className: A.supportHeader,
                          variant: "heading-sm/semibold",
                          children: (0, r.jsx)(c.y5t, { children: I.intl.string(S.default["7/tVhv"]) }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: n,
                      }),
                  ],
              });
    },
    Z = () => {
        let e = (0, m.ov)(O.ne.PENDING),
            t = (0, f.o)(
                I.intl.formatToPlainString(S.default.IkAgkG, { count: e.length }),
                I.intl.formatToPlainString(S.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)(M, {
                  sectionType: O.ne.PENDING,
                  sectionTitle: t,
                  requests: e,
              });
    },
    B = () => {
        let e = (0, _.Z)();
        return (0, r.jsxs)("div", {
            className: A.container,
            children: [
                e ? (0, r.jsx)(L, {}) : (0, r.jsx)(j, {}),
                (0, r.jsx)(k, {}),
                (0, r.jsx)(Z, {}),
                (0, r.jsx)(U, {}),
                (0, r.jsx)(G, {}),
            ],
        });
    };
