n.d(t, { Z: () => I }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(733860);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(118012),
    h = n(675478),
    g = n(581883),
    _ = n(883904),
    x = n(68985),
    p = n(211644),
    E = n(804501),
    C = n(518378),
    f = n(232186);
function T(e) {
    let { contents: t, content: n, onChange: s } = e,
        r = o.z[n],
        { isDismissed: l, handleToggleDismissState: a, recurringDismissibleContentInfo: c } = (0, E.x)(r, t),
        u = '';
    if (null == c || (void 0 === c.lastDismissedVersion && void 0 === c.lastDismissedAtMs)) u = '';
    else if (void 0 !== c.lastDismissedVersion && 0 !== c.lastDismissedVersion) u = 'last_dismissed_version: '.concat(c.lastDismissedVersion);
    else if (void 0 !== c.lastDismissedAtMs) {
        let e = new Date(c.lastDismissedAtMs).toLocaleString();
        u = 'last_dismissed_at: '.concat(e);
    }
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(d.j7V, {
            value: l,
            onChange: () => {
                s(n), a();
            },
            children: (0, i.jsx)(d.R94, {
                size: m.Z.Sizes.SIZE_16,
                className: f.marginTop4,
                children: ''.concat(n.toLowerCase(), ' (').concat(o.z[n], ') ').concat(u)
            })
        })
    });
}
function N(e) {
    let { items: t, dismissedContents: n, handleChange: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, i.jsx)(
                    T,
                    {
                        contents: n,
                        content: e,
                        onChange: s
                    },
                    e
                )
            )
    });
}
function I() {
    var e;
    let t = (0, p.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: n,
            dailyCapOverridden: r,
            newUserMinAgeRequiredOverridden: m
        } = (0, a.cj)([x.Z], () => ({
            dailyCapReached: x.Z.hasUserHitDCCap(),
            dailyCapOverridden: x.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: x.Z.newUserMinAgeRequiredOverridden
        })),
        [E, T] = s.useState(''),
        I =
            null !==
                (e = (0, a.e7)([g.Z], () => {
                    var e;
                    return null === (e = g.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        [S, b] = (function (e, t) {
            let [n, i] = s.useState(() => {
                let n = c.K.get(e);
                return null != n ? n : t;
            });
            return (
                s.useEffect(() => {
                    c.K.set(e, n);
                }, [e, n]),
                [n, i]
            );
        })('RecentDismissibleOverrides', []),
        v = (e) => {
            b((t) => {
                let n = new Set(t);
                n.delete(e);
                let i = Array.from(n).slice(0, 4);
                return i.unshift(e), i;
            });
        },
        j = t.map((e) => o.z[e]),
        A = S.filter((e) => e.toLowerCase().includes(E.toLowerCase())).filter((e) => !j.includes(e)),
        O = Object.keys(o.z)
            .filter((e) => !j.includes(e))
            .filter((e) => !S.includes(e))
            .filter((e) => e.toLowerCase().includes(E.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.hjN, {
                title: 'Dismissible Content Fatigue',
                tag: d.RB0.H1,
                className: f.marginBottom60,
                children: [
                    (0, i.jsx)(d.xJW, {
                        children: (0, i.jsxs)(d.R94, {
                            className: f.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, i.jsx)(d.j7V, {
                        value: r,
                        onChange: _.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, i.jsx)(d.j7V, {
                        value: m,
                        onChange: _.KC,
                        children: 'Override Minimum User Account Age Requirement'
                    }),
                    (0, i.jsxs)(d.xJW, {
                        children: [
                            (0, i.jsx)(d.zxk, {
                                onClick: () => (0, _.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, i.jsx)(d.R94, {
                                className: f.marginTop4,
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
                        className: f.marginBottom20,
                        size: d.E1j.Sizes.LARGE,
                        query: E,
                        onChange: T,
                        onClear: () => T('')
                    }),
                    (0, i.jsxs)(d.xJW, {
                        className: C.buttonsContainer,
                        children: [
                            (0, i.jsx)(d.zxk, {
                                onClick: h.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, i.jsx)(d.zxk, {
                                onClick: h.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, i.jsxs)('div', {
                              className: f.marginBottom20,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: f.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recently Shown' })
                                  }),
                                  (0, i.jsx)(N, {
                                      items: j,
                                      dismissedContents: I,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    A.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: f.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recent Overrides' })
                                  }),
                                  (0, i.jsx)(N, {
                                      items: A,
                                      dismissedContents: I,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        className: l()(f.marginBottom20, f.marginTop20),
                        children: (0, i.jsx)(d.vwX, { children: 'Available Dismissible Contents' })
                    }),
                    (0, i.jsx)(N, {
                        items: O,
                        dismissedContents: I,
                        handleChange: v
                    })
                ]
            })
        ]
    });
}
