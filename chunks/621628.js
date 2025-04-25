n.d(t, {
    Z: () => C,
    u: () => E
}),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(290780),
    n(642613);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(675478),
    p = n(581883),
    g = n(883904),
    h = n(68985),
    f = n(211644),
    b = n(804501),
    _ = n(533936),
    x = n(20493);
function E(e) {
    let { className: t, contents: n, content: r, onChange: s } = e,
        l = o.z[r],
        { isDismissed: a, handleToggleDismissState: c, recurringDismissibleContentInfo: u } = (0, b.x)(l, n),
        m = '';
    if (null == u || (void 0 === u.lastDismissedVersion && void 0 === u.lastDismissedAtMs)) m = '';
    else if (void 0 !== u.lastDismissedVersion && 0 !== u.lastDismissedVersion) m = 'last_dismissed_version: '.concat(u.lastDismissedVersion);
    else if (void 0 !== u.lastDismissedAtMs) {
        let e = new Date(u.lastDismissedAtMs).toLocaleString();
        m = 'last_dismissed_at: '.concat(e);
    }
    return (0, i.jsxs)(d.j7V, {
        value: a,
        onChange: () => {
            s(r), c();
        },
        className: t,
        children: [
            (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: x.marginTop4,
                children: ''.concat(r.toLowerCase(), ' (').concat(o.z[r], ')')
            }),
            null != m &&
                (0, i.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: x.marginTop4,
                    children: m
                })
        ]
    });
}
function j(e) {
    let { items: t, dismissedContents: n, handleChange: r } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, i.jsx)(
                    E,
                    {
                        contents: n,
                        content: e,
                        onChange: r
                    },
                    e
                )
            )
    });
}
function C() {
    var e;
    let t = (0, f.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: n,
            dailyCapOverridden: s,
            newUserMinAgeRequiredOverridden: b
        } = (0, a.cj)([h.Z], () => ({
            dailyCapReached: h.Z.hasUserHitDCCap(),
            dailyCapOverridden: h.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: h.Z.newUserMinAgeRequiredOverridden
        })),
        [E, C] = r.useState(''),
        O =
            null !=
            (e = (0, a.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        [S, v] = (function (e, t) {
            let [n, i] = r.useState(() => {
                let n = c.K.get(e);
                return null != n ? n : t;
            });
            return (
                r.useEffect(() => {
                    c.K.set(e, n);
                }, [e, n]),
                [n, i]
            );
        })('RecentDismissibleOverrides', []),
        T = (e) => {
            v((t) => {
                let n = new Set(t);
                n.delete(e);
                let i = Array.from(n).slice(0, 4);
                return i.unshift(e), i;
            });
        },
        I = t.map((e) => o.z[e]),
        N = S.filter((e) => e.toLowerCase().includes(E.toLowerCase())).filter((e) => !I.includes(e)),
        y = Object.keys(o.z)
            .filter((e) => !I.includes(e))
            .filter((e) => !S.includes(e))
            .filter((e) => e.toLowerCase().includes(E.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.hjN, {
                title: 'Dismissible Content Fatigue',
                tag: d.RB0.H1,
                className: x.marginBottom60,
                children: [
                    (0, i.jsx)(d.xJW, {
                        children: (0, i.jsxs)(d.R94, {
                            className: x.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, i.jsx)(d.j7V, {
                        value: s,
                        onChange: g.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, i.jsx)(d.j7V, {
                        value: b,
                        onChange: g.KC,
                        children: 'Override Minimum User Account Age Requirement'
                    }),
                    (0, i.jsxs)(d.xJW, {
                        children: [
                            (0, i.jsx)(d.zxk, {
                                onClick: () => (0, g.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, i.jsx)(d.R94, {
                                className: x.marginTop4,
                                children: 'This will reset the daily cap and content seen during session'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(d.hjN, {
                title: 'Dismissible Contents',
                tag: d.RB0.H1,
                children: [
                    (0, i.jsx)(d.E1j, {
                        className: x.marginBottom20,
                        size: d.E1j.Sizes.LARGE,
                        query: E,
                        onChange: C,
                        onClear: () => C('')
                    }),
                    (0, i.jsxs)(d.xJW, {
                        className: _.buttonsContainer,
                        children: [
                            (0, i.jsx)(d.zxk, {
                                onClick: m.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, i.jsx)(d.zxk, {
                                onClick: m.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, i.jsxs)('div', {
                              className: x.marginBottom20,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: x.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recently Shown' })
                                  }),
                                  (0, i.jsx)(j, {
                                      items: I,
                                      dismissedContents: O,
                                      handleChange: T
                                  })
                              ]
                          })
                        : null,
                    N.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: x.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recent Overrides' })
                                  }),
                                  (0, i.jsx)(j, {
                                      items: N,
                                      dismissedContents: O,
                                      handleChange: T
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        className: l()(x.marginBottom20, x.marginTop20),
                        children: (0, i.jsx)(d.vwX, { children: 'Available Dismissible Contents' })
                    }),
                    (0, i.jsx)(j, {
                        items: y,
                        dismissedContents: O,
                        handleChange: T
                    })
                ]
            })
        ]
    });
}
