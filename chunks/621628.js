n.d(t, { Z: () => C }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(290780), n(642613);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(118012),
    g = n(675478),
    p = n(581883),
    h = n(883904),
    f = n(68985),
    b = n(211644),
    N = n(804501),
    x = n(533936),
    _ = n(20493);
function E(e) {
    let { contents: t, content: n, onChange: i } = e,
        s = o.z[n],
        { isDismissed: a, handleToggleDismissState: l, recurringDismissibleContentInfo: c } = (0, N.x)(s, t),
        u = '';
    if (null == c || (void 0 === c.lastDismissedVersion && void 0 === c.lastDismissedAtMs)) u = '';
    else if (void 0 !== c.lastDismissedVersion && 0 !== c.lastDismissedVersion) u = 'last_dismissed_version: '.concat(c.lastDismissedVersion);
    else if (void 0 !== c.lastDismissedAtMs) {
        let e = new Date(c.lastDismissedAtMs).toLocaleString();
        u = 'last_dismissed_at: '.concat(e);
    }
    return (0, r.jsx)(d.j7V, {
        value: a,
        onChange: () => {
            i(n), l();
        },
        children: (0, r.jsx)(d.R94, {
            size: m.Z.Sizes.SIZE_16,
            className: _.marginTop4,
            children: ''.concat(n.toLowerCase(), ' (').concat(o.z[n], ') ').concat(u)
        })
    });
}
function j(e) {
    let { items: t, dismissedContents: n, handleChange: i } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, r.jsx)(
                    E,
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
function C() {
    var e;
    let t = (0, b.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: n,
            dailyCapOverridden: s,
            newUserMinAgeRequiredOverridden: m
        } = (0, l.cj)([f.Z], () => ({
            dailyCapReached: f.Z.hasUserHitDCCap(),
            dailyCapOverridden: f.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: f.Z.newUserMinAgeRequiredOverridden
        })),
        [N, E] = i.useState(''),
        C =
            null !=
            (e = (0, l.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.settings.userContent) ? void 0 : e.dismissedContents;
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
        I = O.filter((e) => e.toLowerCase().includes(N.toLowerCase())).filter((e) => !T.includes(e)),
        y = Object.keys(o.z)
            .filter((e) => !T.includes(e))
            .filter((e) => !O.includes(e))
            .filter((e) => e.toLowerCase().includes(N.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.hjN, {
                title: 'Dismissible Content Fatigue',
                tag: d.RB0.H1,
                className: _.marginBottom60,
                children: [
                    (0, r.jsx)(d.xJW, {
                        children: (0, r.jsxs)(d.R94, {
                            className: _.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, r.jsx)(d.j7V, {
                        value: s,
                        onChange: h.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, r.jsx)(d.j7V, {
                        value: m,
                        onChange: h.KC,
                        children: 'Override Minimum User Account Age Requirement'
                    }),
                    (0, r.jsxs)(d.xJW, {
                        children: [
                            (0, r.jsx)(d.zxk, {
                                onClick: () => (0, h.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, r.jsx)(d.R94, {
                                className: _.marginTop4,
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
                        className: _.marginBottom20,
                        size: d.E1j.Sizes.LARGE,
                        query: N,
                        onChange: E,
                        onClear: () => E('')
                    }),
                    (0, r.jsxs)(d.xJW, {
                        className: x.buttonsContainer,
                        children: [
                            (0, r.jsx)(d.zxk, {
                                onClick: g.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, r.jsx)(d.zxk, {
                                onClick: g.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, r.jsxs)('div', {
                              className: _.marginBottom20,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: _.marginBottom20,
                                      children: (0, r.jsx)(d.vwX, { children: 'Recently Shown' })
                                  }),
                                  (0, r.jsx)(j, {
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
                                      className: _.marginBottom20,
                                      children: (0, r.jsx)(d.vwX, { children: 'Recent Overrides' })
                                  }),
                                  (0, r.jsx)(j, {
                                      items: I,
                                      dismissedContents: C,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    (0, r.jsx)(u.Z, {
                        className: a()(_.marginBottom20, _.marginTop20),
                        children: (0, r.jsx)(d.vwX, { children: 'Available Dismissible Contents' })
                    }),
                    (0, r.jsx)(j, {
                        items: y,
                        dismissedContents: C,
                        handleChange: v
                    })
                ]
            })
        ]
    });
}
