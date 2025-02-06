n.d(t, { Z: () => L }), n(627341);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(278074),
    o = n(91192),
    c = n(481060),
    d = n(209613),
    u = n(82295),
    m = n(785681),
    h = n(485664),
    g = n(880257),
    _ = n(631885),
    x = n(895328),
    p = n(568671),
    E = n(419821),
    C = n(367515),
    f = n(250285),
    T = n(292352),
    N = n(134612),
    I = n(388032),
    S = n(441685),
    b = n(259289),
    v = n(232186),
    j = n(926895);
function A(e) {
    let { header: t, description: n, stepNumber: s } = e;
    return (0, i.jsxs)('div', {
        className: b.step,
        children: [
            (0, i.jsx)('div', {
                className: b.stepNumber,
                children: (0, i.jsx)(c.X6q, {
                    variant: 'heading-md/semibold',
                    color: 'text-brand',
                    children: (0, i.jsx)(c.y5t, { children: s })
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
function O() {
    return (0, i.jsxs)('div', {
        className: l()(b.box, S.box, b.linkingBanner, b.linkingBannerParent),
        children: [
            (0, i.jsxs)('div', {
                className: l()(b.linkingBannerUpper),
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(c.X6q, {
                                className: v.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, i.jsx)(c.y5t, { children: I.intl.string(I.t.pHEnV1) })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: v.marginBottom20,
                                children: I.intl.string(I.t['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: b.bannerArt,
                        src: j,
                        alt: I.intl.string(I.t['r+PDmp'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: b.steps,
                children: [
                    (0, i.jsx)(A, {
                        header: I.intl.string(I.t['7xxAnp']),
                        description: I.intl.string(I.t['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, i.jsx)(A, {
                        header: I.intl.string(I.t['AXgx+f']),
                        description: I.intl.string(I.t.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, i.jsx)(A, {
                        header: I.intl.string(I.t.MZn1tL),
                        description: I.intl.string(I.t['8rLBxM']),
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function R() {
    let e = (0, _.VM)();
    return (0, i.jsxs)('div', {
        className: l()(b.box, S.box, b.linkingBanner),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: v.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, i.jsx)(c.y5t, { children: I.intl.string(I.t.zUCWEB) })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: v.marginBottom20,
                        children: I.intl.format(I.t.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, i.jsx)(p.Z, {})
                ]
            }),
            (0, i.jsx)('img', {
                className: b.bannerArt,
                src: j,
                alt: I.intl.string(I.t['r+PDmp'])
            })
        ]
    });
}
function P(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        l = s.useRef(null),
        a = ''.concat(t, '-list'),
        m = (0, d.Z)(a),
        h = s.useCallback(
            (e) => {
                let { row: n, listIndex: s } = e,
                    l = r[n],
                    a = s === r.length;
                return null == l
                    ? null
                    : (0, i.jsx)(
                          f.Z,
                          {
                              userId: l.id,
                              isLast: a,
                              children: () => (t === T.ne.ACTIVE ? (0, i.jsx)(E.u, { user: l }) : (0, i.jsx)(C.B, { user: l }))
                          },
                          l.id
                      );
            },
            [r, t]
        ),
        g = s.useCallback(
            () =>
                (0, i.jsx)(
                    u.Z,
                    {
                        className: b.__invalid_sectionTitle,
                        children: (0, i.jsx)(c.Text, {
                            className: v.marginBottom8,
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
        className: b.section,
        children: (0, i.jsx)(o.bG, {
            navigator: m,
            children: (0, i.jsx)(o.SJ, {
                children: (e) => {
                    let { ref: t, role: s, ...o } = e;
                    return (0, i.jsx)(
                        c.aVo,
                        {
                            className: b.__invalid_list,
                            innerRole: s,
                            innerAriaLabel: n,
                            ref: (e) => {
                                var n;
                                (l.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            sectionHeight: T.zE,
                            rowHeight: T.ip,
                            renderSection: g,
                            renderRow: h,
                            sections: [r.length],
                            chunkSize: 30,
                            fade: !0,
                            ...o
                        },
                        a
                    );
                }
            })
        })
    });
}
let D = () => {
        let e = (0, g.Z)(),
            t = (0, _.mq)(T.ne.ACTIVE),
            n = e ? T.AG : T.i0,
            s = {
                count: t.length,
                max: n
            },
            r = (0, m.o)(I.intl.formatToPlainString(I.t['+tnO39'], s), I.intl.formatToPlainString(I.t['pu6/U1'], s));
        return (0, i.jsx)(i.Fragment, {
            children:
                t.length > 0
                    ? (0, i.jsx)(P, {
                          sectionType: T.ne.ACTIVE,
                          sectionTitle: r,
                          requests: t
                      })
                    : (0, i.jsxs)('div', {
                          className: b.section,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: v.marginBottom8,
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  children: r
                              }),
                              (0, i.jsx)('div', {
                                  className: b.box,
                                  children: (0, i.jsx)(x.Z, { text: I.intl.string(I.t.C4ScLC) })
                              })
                          ]
                      })
        });
    },
    Z = () => {
        let e = (0, _.VM)(),
            t = (0, g.Z)() ? T.AG : T.i0,
            n = (0, m.o)(I.intl.formatToPlainString(I.t['1/PzIi'], { maxConnections: t }), I.intl.formatToPlainString(I.t.RcTgiI, { maxConnections: t }));
        return e
            ? (0, i.jsx)('div', {
                  className: b.maxConnectionInfo,
                  children: (0, i.jsx)(c.Text, {
                      variant: 'text-xxs/medium',
                      color: 'text-muted',
                      children: n
                  })
              })
            : null;
    },
    y = () => {
        let e = (0, h.o)(),
            t = (0, h.Q)(),
            n = (0, a.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => I.intl.format(I.t.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => I.intl.format(I.t['6tsC8v'], { helpLink: N.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: l()(b.__invalid_helpLineInfo, v.marginTop20),
                  children: [
                      (0, i.jsx)(c.X6q, {
                          className: b.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, i.jsx)(c.y5t, { children: I.intl.string(I.t['7/tVho']) })
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
        let e = (0, _.mq)(T.ne.PENDING),
            t = (0, m.o)(I.intl.formatToPlainString(I.t.IkAgkJ, { count: e.length }), I.intl.formatToPlainString(I.t.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, i.jsx)(P, {
                  sectionType: T.ne.PENDING,
                  sectionTitle: t,
                  requests: e
              });
    },
    L = () => {
        let e = (0, g.Z)();
        return (0, i.jsxs)('div', {
            className: b.container,
            children: [e ? (0, i.jsx)(O, {}) : (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(k, {}), (0, i.jsx)(Z, {}), (0, i.jsx)(y, {})]
        });
    };
