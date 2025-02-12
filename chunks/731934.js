n.d(t, { Z: () => k }), n(627341);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(278074),
    o = n(91192),
    c = n(481060),
    d = n(209613),
    u = n(82295),
    m = n(785681),
    g = n(485664),
    _ = n(880257),
    p = n(631885),
    f = n(895328),
    h = n(568671),
    x = n(419821),
    E = n(367515),
    C = n(250285),
    b = n(292352),
    v = n(134612),
    T = n(388032),
    N = n(401549),
    I = n(352943),
    R = n(814632),
    j = n(926895);
function S(e) {
    let { header: t, description: n, stepNumber: r } = e;
    return (0, i.jsxs)('div', {
        className: I.step,
        children: [
            (0, i.jsx)('div', {
                className: I.stepNumber,
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
        className: s()(I.box, N.box, I.linkingBanner, I.linkingBannerParent),
        children: [
            (0, i.jsxs)('div', {
                className: s()(I.linkingBannerUpper),
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(c.X6q, {
                                className: R.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, i.jsx)(c.y5t, { children: T.intl.string(T.t.pHEnV1) })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: R.marginBottom20,
                                children: T.intl.string(T.t['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: I.bannerArt,
                        src: j,
                        alt: T.intl.string(T.t['r+PDmp'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: I.steps,
                children: [
                    (0, i.jsx)(S, {
                        header: T.intl.string(T.t['7xxAnp']),
                        description: T.intl.string(T.t['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, i.jsx)(S, {
                        header: T.intl.string(T.t['AXgx+f']),
                        description: T.intl.string(T.t.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, i.jsx)(S, {
                        header: T.intl.string(T.t.MZn1tL),
                        description: T.intl.string(T.t['8rLBxM']),
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function P() {
    let e = (0, p.VM)();
    return (0, i.jsxs)('div', {
        className: s()(I.box, N.box, I.linkingBanner),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: R.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, i.jsx)(c.y5t, { children: T.intl.string(T.t.zUCWEB) })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: R.marginBottom20,
                        children: T.intl.format(T.t.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, i.jsx)(h.Z, {})
                ]
            }),
            (0, i.jsx)('img', {
                className: I.bannerArt,
                src: j,
                alt: T.intl.string(T.t['r+PDmp'])
            })
        ]
    });
}
function Z(e) {
    let { sectionType: t, sectionTitle: n, requests: a } = e,
        s = r.useRef(null),
        l = ''.concat(t, '-list'),
        m = (0, d.Z)(l),
        g = r.useCallback(
            (e) => {
                let { row: n, listIndex: r } = e,
                    s = a[n],
                    l = r === a.length;
                return null == s
                    ? null
                    : (0, i.jsx)(
                          C.Z,
                          {
                              userId: s.id,
                              isLast: l,
                              children: () => (t === b.ne.ACTIVE ? (0, i.jsx)(x.u, { user: s }) : (0, i.jsx)(E.B, { user: s }))
                          },
                          s.id
                      );
            },
            [a, t]
        ),
        _ = r.useCallback(
            () =>
                (0, i.jsx)(
                    u.Z,
                    {
                        className: I.__invalid_sectionTitle,
                        children: (0, i.jsx)(c.Text, {
                            className: R.marginBottom8,
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
        className: I.section,
        children: (0, i.jsx)(o.bG, {
            navigator: m,
            children: (0, i.jsx)(o.SJ, {
                children: (e) => {
                    let { ref: t, role: r, ...o } = e;
                    return (0, i.jsx)(
                        c.aVo,
                        {
                            className: I.__invalid_list,
                            innerRole: r,
                            innerAriaLabel: n,
                            ref: (e) => {
                                var n;
                                (s.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            sectionHeight: b.zE,
                            rowHeight: b.ip,
                            renderSection: _,
                            renderRow: g,
                            sections: [a.length],
                            chunkSize: 30,
                            fade: !0,
                            ...o
                        },
                        l
                    );
                }
            })
        })
    });
}
let w = () => {
        let e = (0, _.Z)(),
            t = (0, p.mq)(b.ne.ACTIVE),
            n = e ? b.AG : b.i0,
            r = {
                count: t.length,
                max: n
            },
            a = (0, m.o)(T.intl.formatToPlainString(T.t['+tnO39'], r), T.intl.formatToPlainString(T.t['pu6/U1'], r));
        return (0, i.jsx)(i.Fragment, {
            children:
                t.length > 0
                    ? (0, i.jsx)(Z, {
                          sectionType: b.ne.ACTIVE,
                          sectionTitle: a,
                          requests: t
                      })
                    : (0, i.jsxs)('div', {
                          className: I.section,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: R.marginBottom8,
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  children: a
                              }),
                              (0, i.jsx)('div', {
                                  className: I.box,
                                  children: (0, i.jsx)(f.Z, { text: T.intl.string(T.t.C4ScLC) })
                              })
                          ]
                      })
        });
    },
    M = () => {
        let e = (0, p.VM)(),
            t = (0, _.Z)() ? b.AG : b.i0,
            n = (0, m.o)(T.intl.formatToPlainString(T.t['1/PzIi'], { maxConnections: t }), T.intl.formatToPlainString(T.t.RcTgiI, { maxConnections: t }));
        return e
            ? (0, i.jsx)('div', {
                  className: I.maxConnectionInfo,
                  children: (0, i.jsx)(c.Text, {
                      variant: 'text-xxs/medium',
                      color: 'text-muted',
                      children: n
                  })
              })
            : null;
    },
    B = () => {
        let e = (0, g.o)(),
            t = (0, g.Q)(),
            n = (0, l.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => T.intl.format(T.t.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => T.intl.format(T.t['6tsC8v'], { helpLink: v.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: s()(I.__invalid_helpLineInfo, R.marginTop20),
                  children: [
                      (0, i.jsx)(c.X6q, {
                          className: I.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, i.jsx)(c.y5t, { children: T.intl.string(T.t['7/tVho']) })
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-muted',
                          children: n
                      })
                  ]
              });
    },
    y = () => {
        let e = (0, p.mq)(b.ne.PENDING),
            t = (0, m.o)(T.intl.formatToPlainString(T.t.IkAgkJ, { count: e.length }), T.intl.formatToPlainString(T.t.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, i.jsx)(Z, {
                  sectionType: b.ne.PENDING,
                  sectionTitle: t,
                  requests: e
              });
    },
    k = () => {
        let e = (0, _.Z)();
        return (0, i.jsxs)('div', {
            className: I.container,
            children: [e ? (0, i.jsx)(A, {}) : (0, i.jsx)(P, {}), (0, i.jsx)(w, {}), (0, i.jsx)(y, {}), (0, i.jsx)(M, {}), (0, i.jsx)(B, {})]
        });
    };
