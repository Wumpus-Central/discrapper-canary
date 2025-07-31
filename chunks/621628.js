(n.d(t, {
    Z: () => v,
    u: () => E
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
    n(642613));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(675478),
    p = n(581883),
    g = n(883904),
    h = n(68985),
    f = n(211644),
    b = n(428967),
    x = n(972118),
    _ = n(533936),
    j = n(20493);
function O(e) {
    let { content: t } = e,
        n = (0, l.e7)([p.Z], () => {
            var e, n;
            return null == (n = p.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates) ? void 0 : e[t];
        });
    if (null == n) return null;
    let r = [],
        { lastDismissedVersion: s, lastDismissedAtMs: a, lastDismissedObjectId: o } = n;
    if ((void 0 !== s && 0 !== s && r.push('last_dismissed_version: '.concat(s)), void 0 !== a)) {
        let e = Number(a),
            t = Number.isNaN(e) ? 'n/a' : new Date(e).toLocaleString();
        r.push('last_dismissed_at: '.concat(t));
    }
    return (void 0 !== o && '0' !== o && r.push('last_dismissed_object_id: '.concat(o)), 0 === r.length)
        ? null
        : (0, i.jsx)(d.Text, {
              variant: 'text-xs/normal',
              className: j.marginTop4,
              children: r.join(', ')
          });
}
function E(e) {
    let { className: t, contents: n, content: r, onChange: s } = e,
        a = o.z[r],
        { isDismissed: l, handleToggleDismissState: c } = (0, x.Z)(a, n);
    return (0, i.jsxs)(d.j7V, {
        value: l,
        onChange: () => {
            (s(r), c());
        },
        className: t,
        children: [
            (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: j.marginTop4,
                children: ''.concat(r.toLowerCase(), ' (').concat(o.z[r], ')')
            }),
            (0, b.qh)(a) && (0, i.jsx)(O, { content: a })
        ]
    });
}
function C(e) {
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
function v() {
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
        [x, O] = r.useState(''),
        E =
            null !=
            (e = (0, l.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        [v, S] = (function (e, t) {
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
            S((t) => {
                let n = new Set(t);
                n.delete(e);
                let i = Array.from(n).slice(0, 4);
                return (i.unshift(e), i);
            });
        },
        N = t.map((e) => o.z[e]),
        I = v.filter((e) => e.toLowerCase().includes(x.toLowerCase())).filter((e) => !N.includes(e)),
        y = Object.keys(o.z)
            .filter((e) => !N.includes(e))
            .filter((e) => !v.includes(e))
            .filter((e) => e.toLowerCase().includes(x.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.hjN, {
                title: 'Dismissible Content Fatigue',
                tag: d.RB0.H1,
                className: j.marginBottom60,
                children: [
                    (0, i.jsx)(d.xJW, {
                        children: (0, i.jsxs)(d.R94, {
                            className: j.marginBottom4,
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
                                variant: 'primary',
                                text: 'Reset DismissibleContentFrameworkStore',
                                onClick: () => (0, g.EG)()
                            }),
                            (0, i.jsx)(d.R94, {
                                className: j.marginTop4,
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
                        className: j.marginBottom20,
                        size: d.E1j.Sizes.LARGE,
                        query: x,
                        onChange: O,
                        onClear: () => O('')
                    }),
                    (0, i.jsxs)(d.xJW, {
                        className: _.buttonsContainer,
                        children: [
                            (0, i.jsx)(d.zxk, {
                                variant: 'primary',
                                text: 'Clear All Dismissed Contents',
                                onClick: m.sr
                            }),
                            (0, i.jsx)(d.zxk, {
                                variant: 'primary',
                                text: 'Check All Dismissed Contents',
                                onClick: m.bE
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, i.jsxs)('div', {
                              className: j.marginBottom20,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: j.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recently Shown' })
                                  }),
                                  (0, i.jsx)(C, {
                                      items: N,
                                      dismissedContents: E,
                                      handleChange: T
                                  })
                              ]
                          })
                        : null,
                    I.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: j.marginBottom20,
                                      children: (0, i.jsx)(d.vwX, { children: 'Recent Overrides' })
                                  }),
                                  (0, i.jsx)(C, {
                                      items: I,
                                      dismissedContents: E,
                                      handleChange: T
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        className: a()(j.marginBottom20, j.marginTop20),
                        children: (0, i.jsx)(d.vwX, { children: 'Available Dismissible Contents' })
                    }),
                    (0, i.jsx)(C, {
                        items: y,
                        dismissedContents: E,
                        handleChange: T
                    })
                ]
            })
        ]
    });
}
