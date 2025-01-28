n(627341);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(278074),
    o = n(91192),
    c = n(481060),
    d = n(209613),
    u = n(82295),
    m = n(863653),
    g = n(785681),
    h = n(485664),
    p = n(880257),
    x = n(631885),
    f = n(895328),
    E = n(568671),
    _ = n(419821),
    C = n(367515),
    T = n(250285),
    S = n(292352),
    b = n(134612),
    I = n(388032),
    N = n(441685),
    v = n(259289),
    A = n(232186),
    j = n(926895);
function O(e) {
    let { header: t, description: n, stepNumber: r } = e;
    return (0, i.jsxs)('div', {
        className: v.step,
        children: [
            (0, i.jsx)('div', {
                className: v.stepNumber,
                children: (0, i.jsx)(c.Heading, {
                    variant: 'heading-md/semibold',
                    color: 'text-brand',
                    children: (0, i.jsx)(c.HeadingLevel, { children: r })
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-sm/bold',
                        children: (0, i.jsx)(c.HeadingLevel, { children: t })
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
function R() {
    return (0, i.jsxs)('div', {
        className: a()(v.box, N.box, v.linkingBanner, v.linkingBannerParent),
        children: [
            (0, i.jsxs)('div', {
                className: a()(v.linkingBannerUpper),
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(c.Heading, {
                                className: A.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, i.jsx)(c.HeadingLevel, { children: I.intl.string(I.t.pHEnV1) })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: A.marginBottom20,
                                children: I.intl.string(I.t['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: v.bannerArt,
                        src: j,
                        alt: I.intl.string(I.t['r+PDmp'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: v.steps,
                children: [
                    (0, i.jsx)(O, {
                        header: I.intl.string(I.t['7xxAnp']),
                        description: I.intl.string(I.t['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, i.jsx)(O, {
                        header: I.intl.string(I.t['AXgx+f']),
                        description: I.intl.string(I.t.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, i.jsx)(O, {
                        header: I.intl.string(I.t.MZn1tL),
                        description: I.intl.string(I.t['8rLBxM']),
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function P() {
    let e = (0, x.VM)();
    return (0, i.jsxs)('div', {
        className: a()(v.box, N.box, v.linkingBanner),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.Heading, {
                        className: A.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, i.jsx)(c.HeadingLevel, { children: I.intl.string(I.t.zUCWEB) })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: A.marginBottom20,
                        children: I.intl.format(I.t.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, i.jsx)(E.Z, {})
                ]
            }),
            (0, i.jsx)('img', {
                className: v.bannerArt,
                src: j,
                alt: I.intl.string(I.t['r+PDmp'])
            })
        ]
    });
}
function D(e) {
    let { sectionType: t, sectionTitle: n, requests: s } = e,
        a = r.useRef(null),
        l = ''.concat(t, '-list'),
        m = (0, d.Z)(l),
        g = r.useCallback(
            (e) => {
                let { row: n, listIndex: r } = e,
                    a = s[n],
                    l = r === s.length;
                return null == a
                    ? null
                    : (0, i.jsx)(
                          T.Z,
                          {
                              userId: a.id,
                              isLast: l,
                              children: () => (t === S.ne.ACTIVE ? (0, i.jsx)(_.u, { user: a }) : (0, i.jsx)(C.B, { user: a }))
                          },
                          a.id
                      );
            },
            [s, t]
        ),
        h = r.useCallback(
            () =>
                (0, i.jsx)(
                    u.Z,
                    {
                        className: v.__invalid_sectionTitle,
                        children: (0, i.jsx)(c.Text, {
                            className: A.marginBottom8,
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
        className: v.section,
        children: (0, i.jsx)(o.bG, {
            navigator: m,
            children: (0, i.jsx)(o.SJ, {
                children: (e) => {
                    let { ref: t, role: r, ...o } = e;
                    return (0, i.jsx)(
                        c.List,
                        {
                            className: v.__invalid_list,
                            innerRole: r,
                            innerAriaLabel: n,
                            ref: (e) => {
                                var n;
                                (a.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            sectionHeight: S.zE,
                            rowHeight: S.ip,
                            renderSection: h,
                            renderRow: g,
                            sections: [s.length],
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
let y = () => {
        let e = (0, p.Z)(),
            t = (0, x.mq)(S.ne.ACTIVE),
            n = e ? S.AG : S.i0,
            r = {
                count: t.length,
                max: n
            },
            s = (0, g.o)(I.intl.formatToPlainString(I.t['+tnO39'], r), I.intl.formatToPlainString(I.t['pu6/U1'], r));
        return (0, i.jsx)(i.Fragment, {
            children:
                t.length > 0
                    ? (0, i.jsx)(D, {
                          sectionType: S.ne.ACTIVE,
                          sectionTitle: s,
                          requests: t
                      })
                    : (0, i.jsxs)('div', {
                          className: v.section,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: A.marginBottom8,
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  children: s
                              }),
                              (0, i.jsx)('div', {
                                  className: v.box,
                                  children: (0, i.jsx)(f.Z, { text: I.intl.string(I.t.C4ScLC) })
                              })
                          ]
                      })
        });
    },
    B = () => {
        let e = (0, x.VM)(),
            t = (0, p.Z)() ? S.AG : S.i0,
            n = (0, g.o)(I.intl.formatToPlainString(I.t['1/PzIi'], { maxConnections: t }), I.intl.formatToPlainString(I.t.RcTgiI, { maxConnections: t }));
        return e
            ? (0, i.jsx)('div', {
                  className: v.maxConnectionInfo,
                  children: (0, i.jsx)(c.Text, {
                      variant: 'text-xxs/medium',
                      color: 'text-muted',
                      children: n
                  })
              })
            : null;
    },
    Z = () => {
        let e = (0, h.o)(),
            t = (0, m.zF)('family-center-requests-page-desktop'),
            n = (0, l.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => I.intl.format(I.t.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => I.intl.format(I.t['6tsC8v'], { helpLink: b.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: a()(v.__invalid_helpLineInfo, A.marginTop20),
                  children: [
                      (0, i.jsx)(c.Heading, {
                          className: v.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, i.jsx)(c.HeadingLevel, { children: I.intl.string(I.t['7/tVho']) })
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-muted',
                          children: n
                      })
                  ]
              });
    },
    L = () => {
        let e = (0, x.mq)(S.ne.PENDING),
            t = (0, g.o)(I.intl.formatToPlainString(I.t.IkAgkJ, { count: e.length }), I.intl.formatToPlainString(I.t.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, i.jsx)(D, {
                  sectionType: S.ne.PENDING,
                  sectionTitle: t,
                  requests: e
              });
    };
t.Z = () => {
    let e = (0, p.Z)();
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [e ? (0, i.jsx)(R, {}) : (0, i.jsx)(P, {}), (0, i.jsx)(y, {}), (0, i.jsx)(L, {}), (0, i.jsx)(B, {}), (0, i.jsx)(Z, {})]
    });
};
