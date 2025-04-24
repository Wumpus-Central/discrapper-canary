n.d(t, { Z: () => L }), n(953529), n(314940);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(278074),
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
    _ = n(419821),
    x = n(367515),
    E = n(250285),
    C = n(292352),
    j = n(134612),
    O = n(332495),
    S = n(388032),
    v = n(589608),
    T = n(34997),
    I = n(20493),
    N = n(926895);
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
        className: l()(T.box, v.box, T.linkingBanner, T.linkingBannerParent),
        children: [
            (0, i.jsxs)('div', {
                className: T.linkingBannerUpper,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(c.X6q, {
                                className: I.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, i.jsx)(c.y5t, { children: S.intl.string(O.default.pHEnV1) })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: I.marginBottom20,
                                children: S.intl.string(O.default['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: T.bannerArt,
                        src: N,
                        alt: S.intl.string(O.default['r+PDmp'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: T.steps,
                children: [
                    (0, i.jsx)(y, {
                        header: S.intl.string(O.default['7xxAnp']),
                        description: S.intl.string(O.default['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, i.jsx)(y, {
                        header: S.intl.string(O.default['AXgx+f']),
                        description: S.intl.string(O.default.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, i.jsx)(y, {
                        header: S.intl.string(O.default.MZn1tL),
                        description: S.intl.string(O.default['8rLBxM']),
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
        className: l()(T.box, v.box, T.linkingBanner),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: I.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, i.jsx)(c.y5t, { children: S.intl.string(O.default.zUCWEB) })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: I.marginBottom20,
                        children: S.intl.format(O.default.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, i.jsx)(b.Z, {})
                ]
            }),
            (0, i.jsx)('img', {
                className: T.bannerArt,
                src: N,
                alt: S.intl.string(O.default['r+PDmp'])
            })
        ]
    });
}
function R(e) {
    let { sectionType: t, sectionTitle: n, requests: s } = e,
        l = r.useRef(null),
        a = ''.concat(t, '-list'),
        m = (0, d.Z)(a),
        p = r.useCallback(
            (e) => {
                let { row: n, listIndex: r } = e,
                    l = s[n],
                    a = r === s.length;
                return null == l
                    ? null
                    : (0, i.jsx)(
                          E.Z,
                          {
                              userId: l.id,
                              isLast: a,
                              children: () => (t === C.ne.ACTIVE ? (0, i.jsx)(_.u, { user: l }) : (0, i.jsx)(x.B, { user: l }))
                          },
                          l.id
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
                            className: I.marginBottom8,
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
                                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                            }
                            return r;
                        })(e, ['ref', 'role']);
                    return (0, i.jsx)(
                        c.aVo,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                innerRole: r,
                                innerAriaLabel: n,
                                ref: (e) => {
                                    var n;
                                    (l.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                },
                                sectionHeight: C.zE,
                                rowHeight: C.ip,
                                renderSection: g,
                                renderRow: p,
                                sections: [s.length],
                                chunkSize: 30,
                                fade: !0
                            },
                            o
                        ),
                        a
                    );
                }
            })
        })
    });
}
let D = () => {
        let e = (0, g.Z)(),
            t = (0, h.mq)(C.ne.ACTIVE),
            n = e ? C.AG : C.i0,
            r = {
                count: t.length,
                max: n
            },
            s = (0, m.o)(S.intl.formatToPlainString(O.default['+tnO39'], r), S.intl.formatToPlainString(O.default['pu6/U1'], r));
        return t.length > 0
            ? (0, i.jsx)(R, {
                  sectionType: C.ne.ACTIVE,
                  sectionTitle: s,
                  requests: t
              })
            : (0, i.jsxs)('div', {
                  className: T.section,
                  children: [
                      (0, i.jsx)(c.Text, {
                          className: I.marginBottom8,
                          variant: 'eyebrow',
                          color: 'header-secondary',
                          children: s
                      }),
                      (0, i.jsx)('div', {
                          className: T.box,
                          children: (0, i.jsx)(f.Z, { text: S.intl.string(O.default.C4ScLC) })
                      })
                  ]
              });
    },
    Z = () => {
        let e = (0, h.VM)(),
            t = (0, g.Z)() ? C.AG : C.i0,
            n = (0, m.o)(S.intl.formatToPlainString(O.default['1/PzIi'], { maxConnections: t }), S.intl.formatToPlainString(O.default.RcTgiI, { maxConnections: t }));
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
            n = (0, a.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => S.intl.format(O.default.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => S.intl.format(O.default['6tsC8v'], { helpLink: j.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: l()(T.__invalid_helpLineInfo, I.marginTop20),
                  children: [
                      (0, i.jsx)(c.X6q, {
                          className: T.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, i.jsx)(c.y5t, { children: S.intl.string(O.default['7/tVho']) })
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
        let e = (0, h.mq)(C.ne.PENDING),
            t = (0, m.o)(S.intl.formatToPlainString(O.default.IkAgkJ, { count: e.length }), S.intl.formatToPlainString(O.default.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, i.jsx)(R, {
                  sectionType: C.ne.PENDING,
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
