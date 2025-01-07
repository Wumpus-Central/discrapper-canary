n(627341);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(278074),
    o = n(91192),
    c = n(481060),
    d = n(209613),
    u = n(82295),
    g = n(863653),
    m = n(785681),
    f = n(485664),
    p = n(880257),
    _ = n(631885),
    h = n(895328),
    x = n(568671),
    E = n(419821),
    b = n(367515),
    C = n(250285),
    v = n(292352),
    T = n(134612),
    N = n(388032),
    I = n(259289),
    S = n(232186),
    R = n(926895);
function j(e) {
    let { header: t, description: n, stepNumber: r } = e;
    return (0, i.jsxs)('div', {
        className: I.step,
        children: [
            (0, i.jsx)('div', {
                className: I.stepNumber,
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
function A() {
    return (0, i.jsxs)('div', {
        className: s()(I.box, I.linkingBanner, I.linkingBannerParent),
        children: [
            (0, i.jsxs)('div', {
                className: s()(I.linkingBannerUpper),
                children: [
                    (0, i.jsxs)('div', {
                        className: I.__invalid_header,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                className: S.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, i.jsx)(c.HeadingLevel, { children: N.intl.string(N.t.pHEnV1) })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: S.marginBottom20,
                                children: N.intl.string(N.t['1J/gZ2'])
                            })
                        ]
                    }),
                    (0, i.jsx)('img', {
                        className: I.bannerArt,
                        src: R,
                        alt: N.intl.string(N.t['r+PDmp'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: I.steps,
                children: [
                    (0, i.jsx)(j, {
                        header: N.intl.string(N.t['7xxAnp']),
                        description: N.intl.string(N.t['1M9So6']),
                        stepNumber: 1
                    }),
                    (0, i.jsx)(j, {
                        header: N.intl.string(N.t['AXgx+f']),
                        description: N.intl.string(N.t.GzMFnZ),
                        stepNumber: 2
                    }),
                    (0, i.jsx)(j, {
                        header: N.intl.string(N.t.MZn1tL),
                        description: N.intl.string(N.t['8rLBxM']),
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function P() {
    let e = (0, _.VM)();
    return (0, i.jsxs)('div', {
        className: s()(I.box, I.linkingBanner),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(c.Heading, {
                        className: S.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, i.jsx)(c.HeadingLevel, { children: N.intl.string(N.t.zUCWEB) })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: S.marginBottom20,
                        children: N.intl.format(N.t.yMnoDg, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, i.jsx)(x.Z, {})
                ]
            }),
            (0, i.jsx)('img', {
                className: I.bannerArt,
                src: R,
                alt: N.intl.string(N.t['r+PDmp'])
            })
        ]
    });
}
function O(e) {
    let { sectionType: t, sectionTitle: n, requests: a } = e,
        s = r.useRef(null),
        l = ''.concat(t, '-list'),
        g = (0, d.Z)(l),
        m = r.useCallback(
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
                              children: () => (t === v.ne.ACTIVE ? (0, i.jsx)(E.u, { user: s }) : (0, i.jsx)(b.B, { user: s }))
                          },
                          s.id
                      );
            },
            [a, t]
        ),
        f = r.useCallback(
            () =>
                (0, i.jsx)(
                    u.Z,
                    {
                        className: I.__invalid_sectionTitle,
                        children: (0, i.jsx)(c.Text, {
                            className: S.marginBottom8,
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
            navigator: g,
            children: (0, i.jsx)(o.SJ, {
                children: (e) => {
                    let { ref: t, role: r, ...o } = e;
                    return (0, i.jsx)(
                        c.List,
                        {
                            className: I.__invalid_list,
                            innerRole: r,
                            innerAriaLabel: n,
                            ref: (e) => {
                                var n;
                                (s.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            sectionHeight: v.zE,
                            rowHeight: v.ip,
                            renderSection: f,
                            renderRow: m,
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
let Z = () => {
        let e = (0, p.Z)(),
            t = (0, _.mq)(v.ne.ACTIVE),
            n = e ? v.AG : v.i0,
            r = {
                count: t.length,
                max: n
            },
            a = (0, m.o)(N.intl.formatToPlainString(N.t['+tnO39'], r), N.intl.formatToPlainString(N.t['pu6/U1'], r));
        return (0, i.jsx)(i.Fragment, {
            children:
                t.length > 0
                    ? (0, i.jsx)(O, {
                          sectionType: v.ne.ACTIVE,
                          sectionTitle: a,
                          requests: t
                      })
                    : (0, i.jsxs)('div', {
                          className: I.section,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: S.marginBottom8,
                                  variant: 'eyebrow',
                                  color: 'header-secondary',
                                  children: a
                              }),
                              (0, i.jsx)('div', {
                                  className: I.box,
                                  children: (0, i.jsx)(h.Z, { text: N.intl.string(N.t.C4ScLC) })
                              })
                          ]
                      })
        });
    },
    M = () => {
        let e = (0, _.VM)(),
            t = (0, p.Z)() ? v.AG : v.i0,
            n = (0, m.o)(N.intl.formatToPlainString(N.t['1/PzIi'], { maxConnections: t }), N.intl.formatToPlainString(N.t.RcTgiI, { maxConnections: t }));
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
        let e = (0, f.o)(),
            t = (0, g.zF)('family-center-requests-page-desktop'),
            n = (0, l.EQ)({
                helpline: e,
                throughline: t
            })
                .with({ helpline: !0 }, () => N.intl.format(N.t.KOwsf3, { helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' }))
                .with({ throughline: !0 }, () => N.intl.format(N.t['6tsC8v'], { helpLink: T.$l }))
                .otherwise(() => null);
        return null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: s()(I.__invalid_helpLineInfo, S.marginTop20),
                  children: [
                      (0, i.jsx)(c.Heading, {
                          className: I.supportHeader,
                          variant: 'heading-sm/semibold',
                          children: (0, i.jsx)(c.HeadingLevel, { children: N.intl.string(N.t['7/tVho']) })
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
        let e = (0, _.mq)(v.ne.PENDING),
            t = (0, m.o)(N.intl.formatToPlainString(N.t.IkAgkJ, { count: e.length }), N.intl.formatToPlainString(N.t.Q8XnAQ, { count: e.length }));
        return 0 === e.length
            ? null
            : (0, i.jsx)(O, {
                  sectionType: v.ne.PENDING,
                  sectionTitle: t,
                  requests: e
              });
    };
t.Z = () => {
    let e = (0, p.Z)();
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [e ? (0, i.jsx)(A, {}) : (0, i.jsx)(P, {}), (0, i.jsx)(Z, {}), (0, i.jsx)(y, {}), (0, i.jsx)(M, {}), (0, i.jsx)(B, {})]
    });
};
