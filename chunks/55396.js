a.d(t, { default: () => z }), a(388685), a(539854);
var n = a(255367),
    l = a(73800),
    i = a(658722),
    s = a.n(i),
    r = a(392711),
    o = a(442837),
    c = a(481060),
    d = a(224706),
    m = a(812206),
    u = a(835473),
    h = a(206295),
    g = a(669764),
    x = a(925329),
    p = a(77498),
    j = a(49012),
    f = a(810568),
    v = a(701488),
    N = a(388032),
    _ = a(271387);
function I(e) {
    let { showOutdatedInfoOption: t, onChoice: a } = e,
        l = [
            {
                name: N.intl.string(N.t['o/xUFh']),
                value: 1
            },
            ...(t
                ? [
                      {
                          name: N.intl.string(N.t['ry3/tL']),
                          value: 2
                      }
                  ]
                : []),
            {
                name: N.intl.string(N.t.JyZlTk),
                value: 3
            }
        ];
    return (0, n.jsxs)(c.hzk, {
        className: _.content,
        children: [
            (0, n.jsx)(c.X6q, {
                variant: 'heading-xl/bold',
                className: _.header,
                children: N.intl.string(N.t['8itBsL'])
            }),
            (0, n.jsx)(c.Text, {
                className: _.tip,
                variant: 'text-md/normal',
                children: N.intl.string(N.t.X7ab09)
            }),
            (0, n.jsx)(c.FXm, {
                className: _.radioGroup,
                options: l,
                onChange: (e) => {
                    let { value: t } = e;
                    return a(t);
                }
            })
        ]
    });
}
function k(e) {
    let { applicationId: t, onSubmitted: a, viewId: l } = e,
        i = (0, u.q)(t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: N.intl.string(N.t.lWk2u7)
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.ZQfxS0)
                    })
                ]
            }),
            (0, n.jsx)(c.mzw, {
                className: _.footer,
                children: (0, n.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, j.q)({
                            href: (null == i ? void 0 : i.name) != null ? ''.concat('https://www.igdb.com/search?utf8=\u2713&q=').concat(encodeURIComponent(i.name)) : 'https://www.igdb.com',
                            trusted: !0
                        }),
                            (0, f.MH)({
                                applicationId: t,
                                submitted: !0,
                                viewId: l
                            }),
                            a();
                    },
                    children: N.intl.string(N.t.RSATCA)
                })
            })
        ]
    });
}
let b = (e) => {
    let { id: t, name: a, applicationRecord: l } = e;
    return (0, n.jsxs)('div', {
        className: _.gameSuggestion,
        children: [
            null != t
                ? (0, n.jsx)(x.Z, {
                      game: l,
                      className: _.smolGameIcon
                  })
                : (0, n.jsx)(c.vdY, {
                      className: _.customGameNameIcon,
                      size: 'sm'
                  }),
            a
        ]
    });
};
function w(e) {
    var t, a, i;
    let { applicationId: x, onSubmitted: j, viewId: I } = e,
        [k, w] = l.useState(''),
        C = (0, o.e7)([m.Z], () => m.Z.getApplication(x)),
        [S, z] = l.useState(''),
        G = (0, o.e7)([g.Z], () => g.Z.getGame(x)),
        L = null != (a = null != (t = null == G ? void 0 : G.name) ? t : null == C ? void 0 : C.name) ? a : '',
        Z = null == C ? void 0 : C.getIconURL(v.Si.LARGE),
        { primaryColor: X, secondaryColor: q } = (0, h.Z)(Z);
    l.useEffect(() => {
        d.Z.getDetectableGames();
    }, []);
    let B = (0, o.Wu)(
            [p.Z],
            () => {
                let e = ((null == k ? void 0 : k.length) > 0 ? k : L).toLowerCase(),
                    t = null != S ? p.Z.getDetectableGame(S) : void 0;
                return (0, r.chain)(p.Z.games)
                    .filter((t) => s()(e, t.name.toLowerCase()))
                    .filter((e) => e.id !== x)
                    .take(4)
                    .concat(null != t ? [t] : [])
                    .compact()
                    .uniqBy('id')
                    .value();
            },
            [x, S, L, k]
        ),
        F = (0, u.Z)(B.map((e) => e.id)),
        R = (0, r.chain)(F).compact().keyBy('id').value(),
        T = k.length > 0 && !B.map((e) => e.name.toLowerCase()).includes(k.toLowerCase()),
        y = S === x || (null === S && 0 === k.length),
        A = B.map((e) => {
            let { name: t, id: a } = e;
            return {
                name: (0, n.jsx)(b, {
                    name: t,
                    id: a,
                    applicationRecord: R[a]
                }),
                value: a
            };
        });
    return (
        T &&
            A.push({
                name: (0, n.jsx)(b, { name: k }),
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
                            children: N.intl.string(N.t.tJzB6O)
                        }),
                        (0, n.jsx)(c.Text, {
                            className: _.tip,
                            variant: 'text-md/normal',
                            children: N.intl.string(N.t['44R0Iy'])
                        }),
                        (0, n.jsxs)('div', {
                            className: _.gameInfoBox,
                            style: { background: 'linear-gradient(45deg, '.concat(X, ', ').concat(q, ')') },
                            children: [
                                null != Z &&
                                    (0, n.jsx)('img', {
                                        className: _.gameIcon,
                                        src: Z,
                                        alt: ''
                                    }),
                                (0, n.jsx)(c.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: _.gameTitle,
                                    children: null != (i = null == G ? void 0 : G.name) ? i : null == C ? void 0 : C.name
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
                                        if (0 === e.length) null === S && z(x);
                                        else {
                                            var t;
                                            let a = B.find((t) => t.name.toLowerCase() === e.toLowerCase());
                                            z(null != (t = null == a ? void 0 : a.id) ? t : '');
                                        }
                                        w(e);
                                    },
                                    size: c.E1j.Sizes.MEDIUM,
                                    onClear: () => {
                                        null === S && z(x), w('');
                                    },
                                    placeholder: N.intl.string(N.t.UedRLy)
                                }),
                                (0, n.jsx)(c.FXm, {
                                    size: c.FXm.Sizes.NONE,
                                    radioPosition: 'right',
                                    withTransparentBackground: !0,
                                    radioItemClassName: _.gameSuggestionRadioItem,
                                    value: S,
                                    options: A,
                                    onChange: (e) => {
                                        let { value: t } = e;
                                        return z(t);
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
                            let e = null != S && S.length > 0;
                            (0, f.MH)({
                                applicationId: x,
                                suggestedGameApplicationId: e ? S : void 0,
                                suggestedGameName: e ? void 0 : k,
                                submitted: !0,
                                viewId: I
                            }),
                                j();
                        },
                        disabled: y,
                        children: N.intl.string(N.t.geKm7u)
                    })
                })
            ]
        })
    );
}
function C(e) {
    let { applicationId: t, onSubmitted: a, viewId: i } = e,
        [s, r] = l.useState('');
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: N.intl.string(N.t['/nALeX'])
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.WOuJ8v)
                    }),
                    (0, n.jsx)('div', {
                        className: _.otherFeedbackInput,
                        children: (0, n.jsx)(c.Kx8, {
                            value: s,
                            onChange: (e) => r(e),
                            placeholder: N.intl.string(N.t.AHCr5e),
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
                        (0, f.MH)({
                            applicationId: t,
                            submitted: !0,
                            feedback: s,
                            viewId: i
                        }),
                            a();
                    },
                    disabled: 0 === s.length,
                    children: N.intl.string(N.t.geKm7u)
                })
            })
        ]
    });
}
function S(e) {
    let { onClose: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: N.intl.string(N.t['pelg/f'])
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t['55S/OD'])
                    })
                ]
            }),
            (0, n.jsx)(c.mzw, {
                className: _.footer,
                children: (0, n.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: t,
                    children: N.intl.string(N.t.i4jeWV)
                })
            })
        ]
    });
}
function z(e) {
    let { applicationId: t, viewId: a, transitionState: i, onClose: s, showOutdatedInfoOption: r } = e,
        [o, d] = l.useState(0);
    return (0, n.jsx)(c.Y0X, {
        size: c.CgR.SMALL,
        transitionState: i,
        children: (() => {
            switch (o) {
                case 0:
                    return (0, n.jsx)(I, {
                        showOutdatedInfoOption: r,
                        onChoice: (e) => d(e)
                    });
                case 1:
                    return (0, n.jsx)(w, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => d(4)
                    });
                case 2:
                    return (0, n.jsx)(k, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => s()
                    });
                case 3:
                    return (0, n.jsx)(C, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => d(4)
                    });
                case 4:
                    return (0, n.jsx)(S, { onClose: s });
            }
        })()
    });
}
