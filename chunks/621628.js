n.d(t, {
    Z: () => j,
    u: () => _
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
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(675478),
    g = n(581883),
    p = n(883904),
    h = n(68985),
    f = n(211644),
    b = n(804501),
    N = n(533936),
    x = n(20493);
function _(e) {
    let { className: t, contents: n, content: i, onChange: s } = e,
        a = o.z[i],
        { isDismissed: l, handleToggleDismissState: c, recurringDismissibleContentInfo: u } = (0, b.x)(a, n),
        m = '';
    if (null == u || (void 0 === u.lastDismissedVersion && void 0 === u.lastDismissedAtMs)) m = '';
    else if (void 0 !== u.lastDismissedVersion && 0 !== u.lastDismissedVersion) m = 'last_dismissed_version: '.concat(u.lastDismissedVersion);
    else if (void 0 !== u.lastDismissedAtMs) {
        let e = new Date(u.lastDismissedAtMs).toLocaleString();
        m = 'last_dismissed_at: '.concat(e);
    }
    return (0, r.jsxs)(d.j7V, {
        value: l,
        onChange: () => {
            s(i), c();
        },
        className: t,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: x.marginTop4,
                children: ''.concat(i.toLowerCase(), ' (').concat(o.z[i], ')')
            }),
            null != m &&
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: x.marginTop4,
                    children: m
                })
        ]
    });
}
function E(e) {
    let { items: t, dismissedContents: n, handleChange: i } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, r.jsx)(
                    _,
                    {
                        contents: n,
                        content: e,
                        onChange: i
                    },
                    e
                )
            )
    });
}
function j() {
    var e;
    let t = (0, f.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: n,
            dailyCapOverridden: s,
            newUserMinAgeRequiredOverridden: b
        } = (0, l.cj)([h.Z], () => ({
            dailyCapReached: h.Z.hasUserHitDCCap(),
            dailyCapOverridden: h.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: h.Z.newUserMinAgeRequiredOverridden
        })),
        [_, j] = i.useState(''),
        C =
            null !=
            (e = (0, l.e7)([g.Z], () => {
                var e;
                return null == (e = g.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        [O, S] = (function (e, t) {
            let [n, r] = i.useState(() => {
                let n = c.K.get(e);
                return null != n ? n : t;
            });
            return (
                i.useEffect(() => {
                    c.K.set(e, n);
                }, [e, n]),
                [n, r]
            );
        })('RecentDismissibleOverrides', []),
        v = (e) => {
            S((t) => {
                let n = new Set(t);
                n.delete(e);
                let r = Array.from(n).slice(0, 4);
                return r.unshift(e), r;
            });
        },
        T = t.map((e) => o.z[e]),
        I = O.filter((e) => e.toLowerCase().includes(_.toLowerCase())).filter((e) => !T.includes(e)),
        y = Object.keys(o.z)
            .filter((e) => !T.includes(e))
            .filter((e) => !O.includes(e))
            .filter((e) => e.toLowerCase().includes(_.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.hjN, {
                title: 'Dismissible Content Fatigue',
                tag: d.RB0.H1,
                className: x.marginBottom60,
                children: [
                    (0, r.jsx)(d.xJW, {
                        children: (0, r.jsxs)(d.R94, {
                            className: x.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, r.jsx)(d.j7V, {
                        value: s,
                        onChange: p.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, r.jsx)(d.j7V, {
                        value: b,
                        onChange: p.KC,
                        children: 'Override Minimum User Account Age Requirement'
                    }),
                    (0, r.jsxs)(d.xJW, {
                        children: [
                            (0, r.jsx)(d.zxk, {
                                onClick: () => (0, p.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, r.jsx)(d.R94, {
                                className: x.marginTop4,
                                children: 'This will reset the daily cap and content seen during session'
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(d.hjN, {
                title: 'Dismissible Contents',
                tag: d.RB0.H1,
                children: [
                    (0, r.jsx)(d.E1j, {
                        className: x.marginBottom20,
                        size: d.E1j.Sizes.LARGE,
                        query: _,
                        onChange: j,
                        onClear: () => j('')
                    }),
                    (0, r.jsxs)(d.xJW, {
                        className: N.buttonsContainer,
                        children: [
                            (0, r.jsx)(d.zxk, {
                                onClick: m.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, r.jsx)(d.zxk, {
                                onClick: m.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, r.jsxs)('div', {
                              className: x.marginBottom20,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: x.marginBottom20,
                                      children: (0, r.jsx)(d.vwX, { children: 'Recently Shown' })
                                  }),
                                  (0, r.jsx)(E, {
                                      items: T,
                                      dismissedContents: C,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    I.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('div', {
                                      className: x.marginBottom20,
                                      children: (0, r.jsx)(d.vwX, { children: 'Recent Overrides' })
                                  }),
                                  (0, r.jsx)(E, {
                                      items: I,
                                      dismissedContents: C,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    (0, r.jsx)(u.Z, {
                        className: a()(x.marginBottom20, x.marginTop20),
                        children: (0, r.jsx)(d.vwX, { children: 'Available Dismissible Contents' })
                    }),
                    (0, r.jsx)(E, {
                        items: y,
                        dismissedContents: C,
                        handleChange: v
                    })
                ]
            })
        ]
    });
}
