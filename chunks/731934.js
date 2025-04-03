n.d(t, { Z: () => W }), n(266796), n(627341);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(278074),
    o = n(91192),
    c = n(481060),
    d = n(209613),
    u = n(82295),
    m = n(785681),
    g = n(485664),
    p = n(880257),
    h = n(631885),
    f = n(895328),
    b = n(568671),
    N = n(419821),
    x = n(367515),
    _ = n(250285),
    E = n(292352),
    j = n(134612),
    O = n(332495),
    C = n(388032),
    S = n(589608),
    v = n(34997),
    T = n(20493),
    I = n(926895);
function y(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, r.jsxs)('div', {
        className: v.step,
        children: [
            (0, r.jsx)('div', {
                className: v.stepNumber,
                children: (0, r.jsx)(c.X6q, {
                    variant: 'heading-md/semibold',
                    color: 'text-brand',
                    children: (0, r.jsx)(c.y5t, { children: i })
                })
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-sm/bold',
                        children: (0, r.jsx)(c.y5t, { children: t })
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: n
                    })
                ]
            })
        ]
    });
}
function A() {
    return (0, r.jsxs)('div', {
        className: a()(v.box, S.box, v.linkingBanner, v.linkingBannerParent),
        children: [
            (0, r.jsxs)('div', {
                className: v.linkingBannerUpper,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(c.X6q, {
                                className: T.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, r.jsx)(c.y5t, { children: C.NW.string(O.Z.pHEnV1) })
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: T.marginBottom20,
                                children: C.NW.string(O.Z['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, r.jsx)('img', {
                        className: v.bannerArt,
                        src: I,
                        alt: C.NW.string(O.Z['r+PDmp'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: v.steps,
                children: [
                    (0, r.jsx)(y, {
                        header: C.NW.string(O.Z['7xxAnp']),
                        description: C.NW.string(O.Z['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, r.jsx)(y, {
                        header: C.NW.string(O.Z['AXgx+f']),
                        description: C.NW.string(O.Z.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, r.jsx)(y, {
                        header: C.NW.string(O.Z.MZn1tL),
                        description: C.NW.string(O.Z['8rLBxM']),
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function P() {
    let e = (0, h.VM)();
    return (0, r.jsxs)('div', {
        className: a()(v.box, S.box, v.linkingBanner),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: T.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, r.jsx)(c.y5t, { children: C.NW.string(O.Z.zUCWEB) })
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: T.marginBottom20,
                        children: C.NW.format(O.Z.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, r.jsx)(b.Z, {})
                ]
            }),
            (0, r.jsx)('img', {
                className: v.bannerArt,
                src: I,
                alt: C.NW.string(O.Z['r+PDmp'])
            })
        ]
    });
}
function R(e) {
    let { sectionType: t, sectionTitle: n, requests: s } = e,
        a = i.useRef(null),
        l = ''.concat(t, '-list'),
        m = (0, d.Z)(l),
        g = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    a = s[n],
                    l = i === s.length;
                return null == a
                    ? null
                    : (0, r.jsx)(
                          _.Z,
                          {
                              userId: a.id,
                              isLast: l,
                              children: () => (t === E.ne.ACTIVE ? (0, r.jsx)(N.u, { user: a }) : (0, r.jsx)(x.B, { user: a }))
                          },
                          a.id
                      );
            },
            [s, t]
        ),
        p = i.useCallback(
            () =>
                (0, r.jsx)(
                    u.Z,
                    {
                        children: (0, r.jsx)(c.Text, {
                            className: T.marginBottom8,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: n
                        })
                    },
                    'title'
                ),
            [n]
        );
    return (0, r.jsx)('div', {
        className: v.section,
        children: (0, r.jsx)(o.bG, {
            navigator: m,
            children: (0, r.jsx)(o.SJ, {
                children: (e) => {
                    var { ref: t, role: i } = e,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                            }
                            return i;
                        })(e, ['ref', 'role']);
                    return (0, r.jsx)(
                        c.aVo,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                innerRole: i,
                                innerAriaLabel: n,
                                ref: (e) => {
                                    var n;
                                    (a.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                                sectionHeight: E.zE,
                                rowHeight: E.ip,
                                renderSection: p,
                                renderRow: g,
                                sections: [s.length],
                                chunkSize: 30,
                                fade: !0
                            },
                            o
                        ),
                        l
                    );
                }
            })
        })
    });
}
let D = () => {
        let e = (0, p.Z)(),
            t = (0, h.mq)(E.ne.ACTIVE),
            n = e ? E.AG : E.i0,
            i = {
                count: t.length,
                max: n
            },
            s = (0, m.o)(C.NW.formatToPlainString(O.Z['+tnO39'], i), C.NW.formatToPlainString(O.Z['pu6/U1'], i));
        return t.length > 0
            ? (0, r.jsx)(R, {
                  sectionType: E.ne.ACTIVE,
                  sectionTitle: s,
                  requests: t
              })
            : (0, r.jsxs)('div', {
                  className: v.section,
                  children: [
                      (0, r.jsx)(c.Text, {
                          className: T.marginBottom8,
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: s
                      }),
                      (0, r.jsx)('div', {
                          className: v.box,
                          children: (0, r.jsx)(f.Z, { text: C.NW.string(O.Z.C4ScLC) })
                      })
                  ]
              });
    },
    Z = () => {
        let e = (0, h.VM)(),
            t = (0, p.Z)() ? E.AG : E.i0,
            n = (0, m.o)(C.NW.formatToPlainString(O.Z['1/PzIi'], { maxConnections: t }), C.NW.formatToPlainString(O.Z.RcTgiI, { maxConnections: t }));
        return e
            ? (0, r.jsx)('div', {
                  className: v.maxConnectionInfo,
                  children: (0, r.jsx)(c.Text, {
                      variant: 'text-xxs/medium',
                      color: 'text-muted',
                      children: n
                  })
              })
            : null;
    },
    w = () => {
        let e = (0, g.o)(),
            t = (0, g.Q)(),
            n = (0, l.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => C.NW.format(O.Z.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => C.NW.format(O.Z['6tsC8v'], { helpLink: j.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(v.__invalid_helpLineInfo, T.marginTop20),
                  children: [
                      (0, r.jsx)(c.X6q, {
                          className: v.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, r.jsx)(c.y5t, { children: C.NW.string(O.Z['7/tVho']) })
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-muted',
                          children: n
                      })
                  ]
              });
    },
    k = () => {
        let e = (0, h.mq)(E.ne.PENDING),
            t = (0, m.o)(C.NW.formatToPlainString(O.Z.IkAgkJ, { count: e.length }), C.NW.formatToPlainString(O.Z.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, r.jsx)(R, {
                  sectionType: E.ne.PENDING,
                  sectionTitle: t,
                  requests: e
              });
    },
    W = () => {
        let e = (0, p.Z)();
        return (0, r.jsxs)('div', {
            className: v.container,
            children: [e ? (0, r.jsx)(A, {}) : (0, r.jsx)(P, {}), (0, r.jsx)(D, {}), (0, r.jsx)(k, {}), (0, r.jsx)(Z, {}), (0, r.jsx)(w, {})]
        });
    };
