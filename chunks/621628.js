n.d(t, {
    Z: () => S,
    u: () => C
}),
    n(388685),
    n(539854),
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
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(675478),
    g = n(581883),
    p = n(883904),
    h = n(68985),
    f = n(211644),
    b = n(428967),
    _ = n(972118),
    x = n(533936),
    E = n(20493);
function j(e) {
    let { content: t } = e,
        n = (0, a.e7)([g.Z], () => {
            var e, n;
            return null == (n = g.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates) ? void 0 : e[t];
        });
    if (null == n) return null;
    let r = [],
        { lastDismissedVersion: s, lastDismissedAtMs: l, lastDismissedObjectId: o } = n;
    if ((void 0 !== s && 0 !== s && r.push('last_dismissed_version: '.concat(s)), void 0 !== l)) {
        let e = Number(l),
            t = Number.isNaN(e) ? 'n/a' : new Date(e).toLocaleString();
        r.push('last_dismissed_at: '.concat(t));
    }
    return (void 0 !== o && '0' !== o && r.push('last_dismissed_object_id: '.concat(o)), 0 === r.length)
        ? null
        : (0, i.jsx)(d.Text, {
              variant: 'text-xs/normal',
              className: E.marginTop4,
              children: r.join(', ')
          });
}
function C(e) {
    let { className: t, contents: n, content: r, onChange: s } = e,
        l = o.z[r],
        { isDismissed: a, handleToggleDismissState: c } = (0, _.Z)(l, n);
    return (0, i.jsxs)(d.j7V, {
        value: a,
        onChange: () => {
            s(r), c();
        },
        className: t,
        children: [
            (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: E.marginTop4,
                children: ''.concat(r.toLowerCase(), ' (').concat(o.z[r], ')')
            }),
            (0, b.qh)(l) && (0, i.jsx)(j, { content: l })
        ]
    });
}
function O(e) {
    let { items: t, dismissedContents: n, handleChange: r } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, i.jsx)(
                    C,
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
function S() {
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
        [_, j] = r.useState(''),
        C =
            null !=
            (e = (0, a.e7)([g.Z], () => {
                var e;
                return null == (e = g.Z.settings.userContent) ? void 0 : e.dismissedContents;
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
        N = S.filter((e) => e.toLowerCase().includes(_.toLowerCase())).filter((e) => !I.includes(e)),
        y = Object.keys(o.z)
            .filter((e) => !I.includes(e))
            .filter((e) => !S.includes(e))
            .filter((e) => e.toLowerCase().includes(_.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.hjN, {
                title: 'Dismissible Content Fatigue',
                tag: d.RB0.H1,
                className: E.marginBottom60,
                children: [
                    (0, i.jsx)(d.xJW, {
                        children: (0, i.jsxs)(d.R94, {
                            className: E.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, i.jsx)(d.j7V, {
                        value: s,
                        onChange: p.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, i.jsx)(d.j7V, {
                        value: b,
                        onChange: p.KC,
                        children: 'Override Minimum User Account Age Requirement'
                    }),
                    (0, i.jsxs)(d.xJW, {
                        children: [
                            (0, i.jsx)(d.zxk, {
                                onClick: () => (0, p.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, i.jsx)(d.R94, {
                                className: E.marginTop4,
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
                        className: E.marginBottom20,
                        size: d.E1j.Sizes.LARGE,
                        query: _,
                        onChange: j,
                        onClear: () => j('')
                    }),
                    (0, i.jsxs)(d.xJW, {
                        className: x.buttonsContainer,
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
                              className: E.marginBottom20,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: E.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recently Shown' })
                                  }),
                                  (0, i.jsx)(O, {
                                      items: I,
                                      dismissedContents: C,
                                      handleChange: T
                                  })
                              ]
                          })
                        : null,
                    N.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: E.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recent Overrides' })
                                  }),
                                  (0, i.jsx)(O, {
                                      items: N,
                                      dismissedContents: C,
                                      handleChange: T
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        className: l()(E.marginBottom20, E.marginTop20),
                        children: (0, i.jsx)(d.vwX, { children: 'Available Dismissible Contents' })
                    }),
                    (0, i.jsx)(O, {
                        items: y,
                        dismissedContents: C,
                        handleChange: T
                    })
                ]
            })
        ]
    });
}
