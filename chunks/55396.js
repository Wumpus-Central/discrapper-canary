t.d(a, { default: () => S }), t(388685), t(539854);
var n = t(200651),
    s = t(192379),
    l = t(658722),
    i = t.n(l),
    r = t(392711),
    o = t(442837),
    c = t(481060),
    d = t(224706),
    m = t(812206),
    u = t(835473),
    h = t(206295),
    g = t(669764),
    x = t(925329),
    p = t(77498),
    N = t(49012),
    j = t(810568),
    f = t(701488),
    v = t(388032),
    _ = t(271387);
function I(e) {
    let { showOutdatedInfoOption: a, onChoice: t } = e,
        s = [
            {
                name: v.NW.string(v.t['o/xUFh']),
                value: 1
            },
            ...(a
                ? [
                      {
                          name: v.NW.string(v.t['ry3/tL']),
                          value: 2
                      }
                  ]
                : []),
            {
                name: v.NW.string(v.t.JyZlTk),
                value: 3
            }
        ];
    return (0, n.jsxs)(c.hzk, {
        className: _.content,
        children: [
            (0, n.jsx)(c.X6q, {
                variant: 'heading-xl/bold',
                className: _.header,
                children: v.NW.string(v.t['8itBsL'])
            }),
            (0, n.jsx)(c.Text, {
                className: _.tip,
                variant: 'text-md/normal',
                children: v.NW.string(v.t.X7ab09)
            }),
            (0, n.jsx)(c.FXm, {
                className: _.radioGroup,
                options: s,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                }
            })
        ]
    });
}
function k(e) {
    let { applicationId: a, onSubmitted: t, viewId: s } = e,
        l = (0, u.q)(a);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: v.NW.string(v.t.lWk2u7)
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: v.NW.string(v.t.ZQfxS0)
                    })
                ]
            }),
            (0, n.jsx)(c.mzw, {
                className: _.footer,
                children: (0, n.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, N.q)({
                            href: (null == l ? void 0 : l.name) != null ? ''.concat('https://www.igdb.com/search?utf8=\u2713&q=').concat(encodeURIComponent(l.name)) : 'https://www.igdb.com',
                            trusted: !0
                        }),
                            (0, j.MH)({
                                applicationId: a,
                                submitted: !0,
                                viewId: s
                            }),
                            t();
                    },
                    children: v.NW.string(v.t.RSATCA)
                })
            })
        ]
    });
}
let W = (e) => {
    let { id: a, name: t, applicationRecord: s } = e;
    return (0, n.jsxs)('div', {
        className: _.gameSuggestion,
        children: [
            null != a
                ? (0, n.jsx)(x.Z, {
                      game: s,
                      className: _.smolGameIcon
                  })
                : (0, n.jsx)(c.vdY, {
                      className: _.customGameNameIcon,
                      size: 'sm'
                  }),
            t
        ]
    });
};
function b(e) {
    var a, t, l;
    let { applicationId: x, onSubmitted: N, viewId: I } = e,
        [k, b] = s.useState(''),
        w = (0, o.e7)([m.Z], () => m.Z.getApplication(x)),
        [C, S] = s.useState(''),
        z = (0, o.e7)([g.Z], () => g.Z.getGame(x)),
        G = null != (t = null != (a = null == z ? void 0 : z.name) ? a : null == w ? void 0 : w.name) ? t : '',
        L = null == w ? void 0 : w.getIconURL(f.Si.LARGE),
        { primaryColor: Z, secondaryColor: X } = (0, h.Z)(L);
    s.useEffect(() => {
        d.Z.getDetectableGames();
    }, []);
    let q = (0, o.Wu)(
            [p.Z],
            () => {
                let e = ((null == k ? void 0 : k.length) > 0 ? k : G).toLowerCase(),
                    a = null != C ? p.Z.getDetectableGame(C) : void 0;
                return (0, r.chain)(p.Z.games)
                    .filter((a) => i()(e, a.name.toLowerCase()))
                    .filter((e) => e.id !== x)
                    .take(4)
                    .concat(null != a ? [a] : [])
                    .compact()
                    .uniqBy('id')
                    .value();
            },
            [x, C, G, k]
        ),
        B = (0, u.Z)(q.map((e) => e.id)),
        F = (0, r.chain)(B).compact().keyBy('id').value(),
        R = k.length > 0 && !q.map((e) => e.name.toLowerCase()).includes(k.toLowerCase()),
        T = C === x || (null === C && 0 === k.length),
        y = q.map((e) => {
            let { name: a, id: t } = e;
            return {
                name: (0, n.jsx)(W, {
                    name: a,
                    id: t,
                    applicationRecord: F[t]
                }),
                value: t
            };
        });
    return (
        R &&
            y.push({
                name: (0, n.jsx)(W, { name: k }),
                value: ''
            }),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(c.hzk, {
                    className: _.content,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: _.header,
                            children: v.NW.string(v.t.tJzB6O)
                        }),
                        (0, n.jsx)(c.Text, {
                            className: _.tip,
                            variant: 'text-md/normal',
                            children: v.NW.string(v.t['44R0Iy'])
                        }),
                        (0, n.jsxs)('div', {
                            className: _.gameInfoBox,
                            style: { background: 'linear-gradient(45deg, '.concat(Z, ', ').concat(X, ')') },
                            children: [
                                null != L &&
                                    (0, n.jsx)('img', {
                                        className: _.gameIcon,
                                        src: L,
                                        alt: ''
                                    }),
                                (0, n.jsx)(c.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: _.gameTitle,
                                    children: null != (l = null == z ? void 0 : z.name) ? l : null == w ? void 0 : w.name
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: _.applicationSearch,
                            children: [
                                (0, n.jsx)(c.E1j, {
                                    className: _.searchBar,
                                    query: k,
                                    onChange: (e) => {
                                        if (0 === e.length) null === C && S(x);
                                        else {
                                            var a;
                                            let t = q.find((a) => a.name.toLowerCase() === e.toLowerCase());
                                            S(null != (a = null == t ? void 0 : t.id) ? a : '');
                                        }
                                        b(e);
                                    },
                                    size: c.E1j.Sizes.MEDIUM,
                                    onClear: () => {
                                        null === C && S(x), b('');
                                    },
                                    placeholder: v.NW.string(v.t.UedRLy)
                                }),
                                (0, n.jsx)(c.FXm, {
                                    size: c.FXm.Sizes.NONE,
                                    radioPosition: 'right',
                                    withTransparentBackground: !0,
                                    radioItemClassName: _.gameSuggestionRadioItem,
                                    value: C,
                                    options: y,
                                    onChange: (e) => {
                                        let { value: a } = e;
                                        return S(a);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(c.mzw, {
                    className: _.footer,
                    children: (0, n.jsx)(c.zxk, {
                        fullWidth: !0,
                        onClick: () => {
                            let e = null != C && C.length > 0;
                            (0, j.MH)({
                                applicationId: x,
                                suggestedGameApplicationId: e ? C : void 0,
                                suggestedGameName: e ? void 0 : k,
                                submitted: !0,
                                viewId: I
                            }),
                                N();
                        },
                        disabled: T,
                        children: v.NW.string(v.t.geKm7u)
                    })
                })
            ]
        })
    );
}
function w(e) {
    let { applicationId: a, onSubmitted: t, viewId: l } = e,
        [i, r] = s.useState('');
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: v.NW.string(v.t['/nALeX'])
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: v.NW.string(v.t.WOuJ8v)
                    }),
                    (0, n.jsx)('div', {
                        className: _.otherFeedbackInput,
                        children: (0, n.jsx)(c.Kx8, {
                            value: i,
                            onChange: (e) => r(e),
                            placeholder: v.NW.string(v.t.AHCr5e),
                            maxLength: 300
                        })
                    })
                ]
            }),
            (0, n.jsx)(c.mzw, {
                className: _.footer,
                children: (0, n.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, j.MH)({
                            applicationId: a,
                            submitted: !0,
                            feedback: i,
                            viewId: l
                        }),
                            t();
                    },
                    disabled: 0 === i.length,
                    children: v.NW.string(v.t.geKm7u)
                })
            })
        ]
    });
}
function C(e) {
    let { onClose: a } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: v.NW.string(v.t['pelg/f'])
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: v.NW.string(v.t['55S/OD'])
                    })
                ]
            }),
            (0, n.jsx)(c.mzw, {
                className: _.footer,
                children: (0, n.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: a,
                    children: v.NW.string(v.t.i4jeWV)
                })
            })
        ]
    });
}
function S(e) {
    let { applicationId: a, viewId: t, transitionState: l, onClose: i, showOutdatedInfoOption: r } = e,
        [o, d] = s.useState(0);
    return (0, n.jsx)(c.Y0X, {
        size: c.CgR.SMALL,
        transitionState: l,
        children: (() => {
            switch (o) {
                case 0:
                    return (0, n.jsx)(I, {
                        showOutdatedInfoOption: r,
                        onChoice: (e) => d(e)
                    });
                case 1:
                    return (0, n.jsx)(b, {
                        applicationId: a,
                        viewId: t,
                        onSubmitted: () => d(4)
                    });
                case 2:
                    return (0, n.jsx)(k, {
                        applicationId: a,
                        viewId: t,
                        onSubmitted: () => i()
                    });
                case 3:
                    return (0, n.jsx)(w, {
                        applicationId: a,
                        viewId: t,
                        onSubmitted: () => d(4)
                    });
                case 4:
                    return (0, n.jsx)(C, { onClose: i });
            }
        })()
    });
}
