n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(733860);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(433517),
    d = n(481060),
    u = n(600164),
    m = n(118012),
    g = n(675478),
    h = n(581883),
    p = n(883904),
    x = n(68985),
    f = n(211644),
    _ = n(804501),
    E = n(518378),
    C = n(232186);
function T(e) {
    let { contents: t, content: n, onChange: r } = e,
        s = o.z[n],
        { isDismissed: a, handleToggleDismissState: l, recurringDismissibleContentInfo: c } = (0, _.x)(s, t),
        u = '';
    if (null == c || (void 0 === c.lastDismissedVersion && void 0 === c.lastDismissedAtMs)) u = '';
    else if (void 0 !== c.lastDismissedVersion && 0 !== c.lastDismissedVersion) u = 'last_dismissed_version: '.concat(c.lastDismissedVersion);
    else if (void 0 !== c.lastDismissedAtMs) {
        let e = new Date(c.lastDismissedAtMs).toLocaleString();
        u = 'last_dismissed_at: '.concat(e);
    }
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(d.FormSwitch, {
            value: a,
            onChange: () => {
                r(n), l();
            },
            children: (0, i.jsx)(d.FormText, {
                size: m.Z.Sizes.SIZE_16,
                className: C.marginTop4,
                children: ''.concat(n.toLowerCase(), ' (').concat(o.z[n], ') ').concat(u)
            })
        })
    });
}
function S(e) {
    let { items: t, dismissedContents: n, handleChange: r } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, i.jsx)(
                    T,
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
function b() {
    var e;
    let t = (0, f.ZP)((e) => e.recentlyShown),
        {
            dailyCapReached: n,
            dailyCapOverridden: s,
            newUserMinAgeRequiredOverridden: m
        } = (0, l.cj)([x.Z], () => ({
            dailyCapReached: x.Z.hasUserHitDCCap(),
            dailyCapOverridden: x.Z.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: x.Z.newUserMinAgeRequiredOverridden
        })),
        [_, T] = r.useState(''),
        b =
            null !==
                (e = (0, l.e7)([h.Z], () => {
                    var e;
                    return null === (e = h.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        [I, N] = (function (e, t) {
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
        v = (e) => {
            N((t) => {
                let n = new Set(t);
                n.delete(e);
                let i = Array.from(n).slice(0, 4);
                return i.unshift(e), i;
            });
        },
        A = t.map((e) => o.z[e]),
        j = I.filter((e) => e.toLowerCase().includes(_.toLowerCase())).filter((e) => !A.includes(e)),
        O = Object.keys(o.z)
            .filter((e) => !A.includes(e))
            .filter((e) => !I.includes(e))
            .filter((e) => e.toLowerCase().includes(_.toLowerCase()))
            .sort((e, t) => e.localeCompare(t));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.FormSection, {
                title: 'Dismissible Content Fatigue',
                tag: d.FormTitleTags.H1,
                className: C.marginBottom60,
                children: [
                    (0, i.jsx)(d.FormItem, {
                        children: (0, i.jsxs)(d.FormText, {
                            className: C.marginBottom4,
                            children: ['Daily Cap Reached: ', n ? 'Yes' : 'No']
                        })
                    }),
                    (0, i.jsx)(d.FormSwitch, {
                        value: s,
                        onChange: p.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, i.jsx)(d.FormSwitch, {
                        value: m,
                        onChange: p.KC,
                        children: 'Override Minimum User Account Age Requirement'
                    }),
                    (0, i.jsxs)(d.FormItem, {
                        children: [
                            (0, i.jsx)(d.Button, {
                                onClick: () => (0, p.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, i.jsx)(d.FormText, {
                                className: C.marginTop4,
                                children: 'This will reset the daily cap and content seen during session'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(d.FormSection, {
                title: 'Dismissible Contents',
                tag: d.FormTitleTags.H1,
                children: [
                    (0, i.jsx)(d.SearchBar, {
                        className: C.marginBottom20,
                        size: d.SearchBar.Sizes.LARGE,
                        query: _,
                        onChange: T,
                        onClear: () => T('')
                    }),
                    (0, i.jsxs)(d.FormItem, {
                        className: E.buttonsContainer,
                        children: [
                            (0, i.jsx)(d.Button, {
                                onClick: g.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, i.jsx)(d.Button, {
                                onClick: g.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    t.length > 0
                        ? (0, i.jsxs)('div', {
                              className: C.marginBottom20,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: C.marginBottom20,
                                      children: (0, i.jsx)(d.FormTitle, { children: 'Recently Shown' })
                                  }),
                                  (0, i.jsx)(S, {
                                      items: A,
                                      dismissedContents: b,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    j.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: C.marginBottom20,
                                      children: (0, i.jsx)(d.FormTitle, { children: 'Recent Overrides' })
                                  }),
                                  (0, i.jsx)(S, {
                                      items: j,
                                      dismissedContents: b,
                                      handleChange: v
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)(u.Z, {
                        className: a()(C.marginBottom20, C.marginTop20),
                        children: (0, i.jsx)(d.FormTitle, { children: 'Available Dismissible Contents' })
                    }),
                    (0, i.jsx)(S, {
                        items: O,
                        dismissedContents: b,
                        handleChange: v
                    })
                ]
            })
        ]
    });
}
