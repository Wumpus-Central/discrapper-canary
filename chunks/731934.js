n.d(t, { Z: () => Z }), n(953529), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(91192),
    c = n(481060),
    u = n(209613),
    d = n(82295),
    f = n(785681),
    _ = n(485664),
    p = n(880257),
    h = n(631885),
    m = n(895328),
    g = n(568671),
    E = n(419821),
    b = n(367515),
    y = n(250285),
    O = n(292352),
    v = n(134612),
    I = n(382402),
    S = n(388032),
    T = n(152269),
    A = n(153437),
    C = n(10198),
    N = n(926895);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
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
                                children: (0, r.jsx)(c.y5t, { children: S.intl.string(I.default.pHEnV5) }),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: C.marginBottom20,
                                children: S.intl.string(I.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        className: A.bannerArt,
                        src: N,
                        alt: S.intl.string(I.default["r+PDmu"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: A.steps,
                children: [
                    (0, r.jsx)(x, {
                        header: S.intl.string(I.default["7xxAni"]),
                        description: S.intl.string(I.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, r.jsx)(x, {
                        header: S.intl.string(I.default["AXgx+a"]),
                        description: S.intl.string(I.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, r.jsx)(x, {
                        header: S.intl.string(I.default.MZn1tG),
                        description: S.intl.string(I.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function M() {
    let e = (0, h.VM)();
    return (0, r.jsxs)("div", {
        className: o()(A.box, T.box, A.linkingBanner),
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Heading, {
                        className: C.marginBottom8,
                        variant: "heading-xl/medium",
                        children: (0, r.jsx)(c.y5t, { children: S.intl.string(I.default.zUCWEL) }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.marginBottom20,
                        children: S.intl.format(I.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, r.jsx)(g.Z, {}),
                ],
            }),
            (0, r.jsx)("img", {
                className: A.bannerArt,
                src: N,
                alt: S.intl.string(I.default["r+PDmu"]),
            }),
        ],
    });
}
function j(e) {
    let { sectionType: t, sectionTitle: n, requests: a } = e,
        o = i.useRef(null),
        s = "".concat(t, "-list"),
        f = (0, u.Z)(s),
        _ = i.useCallback(
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
        p = i.useCallback(
            () =>
                (0, r.jsx)(
                    d.Z,
                    {
                        children: (0, r.jsx)(c.Text, {
                            className: C.marginBottom8,
                            variant: "eyebrow",
                            color: "header-secondary",
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
                        P(
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
                                renderSection: p,
                                renderRow: _,
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
        let e = (0, p.Z)(),
            t = (0, h.zu)(),
            n = e ? O.AG : O.i0,
            i = {
                count: t.length,
                max: n,
            },
            a = (0, f.o)(
                S.intl.formatToPlainString(I.default["+tnO34"], i),
                S.intl.formatToPlainString(I.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, r.jsx)(j, {
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
                          color: "header-secondary",
                          children: a,
                      }),
                      (0, r.jsx)("div", {
                          className: A.box,
                          children: (0, r.jsx)(m.Z, { text: S.intl.string(I.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    U = () => {
        let e = (0, h.VM)(),
            t = (0, p.Z)() ? O.AG : O.i0,
            n = (0, f.o)(
                S.intl.formatToPlainString(I.default["1/PzIj"], { maxConnections: t }),
                S.intl.formatToPlainString(I.default.RcTgiE, { maxConnections: t }),
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
        let e = (0, _.o)(),
            t = (0, _.Q)(),
            n = (0, s.EQ)({
                helpline: e,
                throughline: t,
            })
                .with({ helpline: !0 }, () =>
                    S.intl.format(I.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => S.intl.format(I.default["6tsC8u"], { helpLink: v.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, r.jsxs)("div", {
                  className: C.marginTop20,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          className: A.supportHeader,
                          variant: "heading-sm/semibold",
                          children: (0, r.jsx)(c.y5t, { children: S.intl.string(I.default["7/tVhv"]) }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: n,
                      }),
                  ],
              });
    },
    B = () => {
        let e = (0, h.ov)(O.ne.PENDING),
            t = (0, f.o)(
                S.intl.formatToPlainString(I.default.IkAgkG, { count: e.length }),
                S.intl.formatToPlainString(I.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length
            ? null
            : (0, r.jsx)(j, {
                  sectionType: O.ne.PENDING,
                  sectionTitle: t,
                  requests: e,
              });
    },
    Z = () => {
        let e = (0, p.Z)();
        return (0, r.jsxs)("div", {
            className: A.container,
            children: [
                e ? (0, r.jsx)(L, {}) : (0, r.jsx)(M, {}),
                (0, r.jsx)(k, {}),
                (0, r.jsx)(B, {}),
                (0, r.jsx)(U, {}),
                (0, r.jsx)(G, {}),
            ],
        });
    };
