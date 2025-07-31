(n.d(t, { Z: () => L }), n(953529), n(314940));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(278074),
    o = n(91192),
    c = n(481060),
    d = n(209613),
    u = n(82295),
    m = n(785681),
    p = n(485664),
    g = n(880257),
    h = n(631885),
    f = n(895328),
    b = n(568671),
    x = n(419821),
    _ = n(367515),
    j = n(250285),
    E = n(292352),
    O = n(134612),
    C = n(916723),
    v = n(388032),
    S = n(589608),
    T = n(34997),
    N = n(20493),
    I = n(926895);
function y(e) {
    let { header: t, description: n, stepNumber: r } = e;
    return (0, i.jsxs)('div', {
        className: T.step,
        children: [
            (0, i.jsx)('div', {
                className: T.stepNumber,
                children: (0, i.jsx)(c.X6q, {
                    variant: 'heading-md/semibold',
                    color: 'text-brand',
                    children: (0, i.jsx)(c.y5t, { children: r })
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-sm/bold',
                        children: (0, i.jsx)(c.y5t, { children: t })
                    }),
                    (0, i.jsx)(c.Text, {
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
    return (0, i.jsxs)('div', {
        className: a()(T.box, S.box, T.linkingBanner, T.linkingBannerParent),
        children: [
            (0, i.jsxs)('div', {
                className: T.linkingBannerUpper,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(c.X6q, {
                                className: N.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, i.jsx)(c.y5t, { children: v.intl.string(C.default.pHEnV1) })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: N.marginBottom20,
                                children: v.intl.string(C.default['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: T.bannerArt,
                        src: I,
                        alt: v.intl.string(C.default['r+PDmp'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: T.steps,
                children: [
                    (0, i.jsx)(y, {
                        header: v.intl.string(C.default['7xxAnp']),
                        description: v.intl.string(C.default['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, i.jsx)(y, {
                        header: v.intl.string(C.default['AXgx+f']),
                        description: v.intl.string(C.default.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, i.jsx)(y, {
                        header: v.intl.string(C.default.MZn1tL),
                        description: v.intl.string(C.default['8rLBxM']),
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function P() {
    let e = (0, h.VM)();
    return (0, i.jsxs)('div', {
        className: a()(T.box, S.box, T.linkingBanner),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: N.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, i.jsx)(c.y5t, { children: v.intl.string(C.default.zUCWEB) })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: N.marginBottom20,
                        children: v.intl.format(C.default.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, i.jsx)(b.Z, {})
                ]
            }),
            (0, i.jsx)('img', {
                className: T.bannerArt,
                src: I,
                alt: v.intl.string(C.default['r+PDmp'])
            })
        ]
    });
}
function R(e) {
    let { sectionType: t, sectionTitle: n, requests: s } = e,
        a = r.useRef(null),
        l = ''.concat(t, '-list'),
        m = (0, d.Z)(l),
        p = r.useCallback(
            (e) => {
                let { row: n, listIndex: r } = e,
                    a = s[n],
                    l = r === s.length;
                return null == a
                    ? null
                    : (0, i.jsx)(
                          j.Z,
                          {
                              userId: a.id,
                              isLast: l,
                              children: () => (t === E.ne.ACTIVE ? (0, i.jsx)(x.u, { user: a }) : (0, i.jsx)(_.B, { user: a }))
                          },
                          a.id
                      );
            },
            [s, t]
        ),
        g = r.useCallback(
            () =>
                (0, i.jsx)(
                    u.Z,
                    {
                        children: (0, i.jsx)(c.Text, {
                            className: N.marginBottom8,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: n
                        })
                    },
                    'title'
                ),
            [n]
        );
    return (0, i.jsx)('div', {
        className: T.section,
        children: (0, i.jsx)(o.bG, {
            navigator: m,
            children: (0, i.jsx)(o.SJ, {
                children: (e) => {
                    var { ref: t, role: r } = e,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        s = Object.keys(e);
                                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                            }
                            return r;
                        })(e, ['ref', 'role']);
                    return (0, i.jsx)(
                        c.aVo,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
                            }
                            return e;
                        })(
                            {
                                innerRole: r,
                                innerAriaLabel: n,
                                ref: (e) => {
                                    var n;
                                    ((a.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null));
                                },
                                sectionHeight: E.zE,
                                rowHeight: E.ip,
                                renderSection: g,
                                renderRow: p,
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
        let e = (0, g.Z)(),
            t = (0, h.mq)(E.ne.ACTIVE),
            n = e ? E.AG : E.i0,
            r = {
                count: t.length,
                max: n
            },
            s = (0, m.o)(v.intl.formatToPlainString(C.default['+tnO39'], r), v.intl.formatToPlainString(C.default['pu6/U1'], r));
        return t.length > 0
            ? (0, i.jsx)(R, {
                  sectionType: E.ne.ACTIVE,
                  sectionTitle: s,
                  requests: t
              })
            : (0, i.jsxs)('div', {
                  className: T.section,
                  children: [
                      (0, i.jsx)(c.Text, {
                          className: N.marginBottom8,
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: s
                      }),
                      (0, i.jsx)('div', {
                          className: T.box,
                          children: (0, i.jsx)(f.Z, { text: v.intl.string(C.default.C4ScLC) })
                      })
                  ]
              });
    },
    Z = () => {
        let e = (0, h.VM)(),
            t = (0, g.Z)() ? E.AG : E.i0,
            n = (0, m.o)(v.intl.formatToPlainString(C.default['1/PzIi'], { maxConnections: t }), v.intl.formatToPlainString(C.default.RcTgiI, { maxConnections: t }));
        return e
            ? (0, i.jsx)('div', {
                  className: T.maxConnectionInfo,
                  children: (0, i.jsx)(c.Text, {
                      variant: 'text-xxs/medium',
                      color: 'text-muted',
                      children: n
                  })
              })
            : null;
    },
    w = () => {
        let e = (0, p.o)(),
            t = (0, p.Q)(),
            n = (0, l.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => v.intl.format(C.default.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => v.intl.format(C.default['6tsC8v'], { helpLink: O.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: a()(T.__invalid_helpLineInfo, N.marginTop20),
                  children: [
                      (0, i.jsx)(c.X6q, {
                          className: T.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, i.jsx)(c.y5t, { children: v.intl.string(C.default['7/tVho']) })
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-muted',
                          children: n
                      })
                  ]
              });
    },
    k = () => {
        let e = (0, h.mq)(E.ne.PENDING),
            t = (0, m.o)(v.intl.formatToPlainString(C.default.IkAgkJ, { count: e.length }), v.intl.formatToPlainString(C.default.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, i.jsx)(R, {
                  sectionType: E.ne.PENDING,
                  sectionTitle: t,
                  requests: e
              });
    },
    L = () => {
        let e = (0, g.Z)();
        return (0, i.jsxs)('div', {
            className: T.container,
            children: [e ? (0, i.jsx)(A, {}) : (0, i.jsx)(P, {}), (0, i.jsx)(D, {}), (0, i.jsx)(k, {}), (0, i.jsx)(Z, {}), (0, i.jsx)(w, {})]
        });
    };
