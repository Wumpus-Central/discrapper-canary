(a.d(t, { default: () => z }), a(388685), a(539854));
var n = a(255367),
    i = a(73800),
    l = a(658722),
    s = a.n(l),
    r = a(392711),
    o = a(442837),
    c = a(481060),
    m = a(224706),
    d = a(812206),
    u = a(835473),
    g = a(206295),
    h = a(669764),
    x = a(925329),
    p = a(77498),
    f = a(49012),
    j = a(810568),
    v = a(701488),
    N = a(388032),
    _ = a(271387);
function I(e) {
    let { showOutdatedInfoOption: t, onChoice: a } = e,
        i = [
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
                options: i,
                onChange: (e) => {
                    let { value: t } = e;
                    return a(t);
                }
            })
        ]
    });
}
function k(e) {
    let { applicationId: t, onSubmitted: a, viewId: i } = e,
        l = (0, u.q)(t);
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
                    variant: 'primary',
                    text: N.intl.string(N.t.RSATCA),
                    fullWidth: !0,
                    onClick: () => {
                        ((0, f.q)({
                            href: (null == l ? void 0 : l.name) != null ? ''.concat('https://www.igdb.com/search?utf8=\u2713&q=').concat(encodeURIComponent(l.name)) : 'https://www.igdb.com',
                            trusted: !0
                        }),
                            (0, j.MH)({
                                applicationId: t,
                                submitted: !0,
                                viewId: i
                            }),
                            a());
                    }
                })
            })
        ]
    });
}
let b = (e) => {
    let { id: t, name: a, applicationRecord: i } = e;
    return (0, n.jsxs)('div', {
        className: _.gameSuggestion,
        children: [
            null != t
                ? (0, n.jsx)(x.Z, {
                      game: i,
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
function C(e) {
    var t, a, l;
    let { applicationId: x, onSubmitted: f, viewId: I } = e,
        [k, C] = i.useState(''),
        w = (0, o.e7)([d.Z], () => d.Z.getApplication(x)),
        [S, z] = i.useState(''),
        G = (0, o.e7)([h.Z], () => h.Z.getGame(x)),
        L = null != (a = null != (t = null == G ? void 0 : G.name) ? t : null == w ? void 0 : w.name) ? a : '',
        y = null == w ? void 0 : w.getIconURL(v.Si.LARGE),
        { primaryColor: Z, secondaryColor: F } = (0, g.Z)(y);
    i.useEffect(() => {
        m.Z.getDetectableGames();
    }, []);
    let X = (0, o.Wu)(
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
        q = (0, u.Z)(X.map((e) => e.id)),
        B = (0, r.chain)(q).compact().keyBy('id').value(),
        R = k.length > 0 && !X.map((e) => e.name.toLowerCase()).includes(k.toLowerCase()),
        T = S === x || (null === S && 0 === k.length),
        A = X.map((e) => {
            let { name: t, id: a } = e;
            return {
                name: (0, n.jsx)(b, {
                    name: t,
                    id: a,
                    applicationRecord: B[a]
                }),
                value: a
            };
        });
    return (
        R &&
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
                            style: { background: 'linear-gradient(45deg, '.concat(Z, ', ').concat(F, ')') },
                            children: [
                                null != y &&
                                    (0, n.jsx)('img', {
                                        className: _.gameIcon,
                                        src: y,
                                        alt: ''
                                    }),
                                (0, n.jsx)(c.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: _.gameTitle,
                                    children: null != (l = null == G ? void 0 : G.name) ? l : null == w ? void 0 : w.name
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
                                            let a = X.find((t) => t.name.toLowerCase() === e.toLowerCase());
                                            z(null != (t = null == a ? void 0 : a.id) ? t : '');
                                        }
                                        C(e);
                                    },
                                    size: c.E1j.Sizes.MEDIUM,
                                    onClear: () => {
                                        (null === S && z(x), C(''));
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
                        variant: 'primary',
                        text: N.intl.string(N.t.geKm7u),
                        fullWidth: !0,
                        onClick: () => {
                            let e = null != S && S.length > 0;
                            ((0, j.MH)({
                                applicationId: x,
                                suggestedGameApplicationId: e ? S : void 0,
                                suggestedGameName: e ? void 0 : k,
                                submitted: !0,
                                viewId: I
                            }),
                                f());
                        },
                        disabled: T
                    })
                })
            ]
        })
    );
}
function w(e) {
    let { applicationId: t, onSubmitted: a, viewId: l } = e,
        [s, r] = i.useState('');
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
                    variant: 'primary',
                    text: N.intl.string(N.t.geKm7u),
                    fullWidth: !0,
                    onClick: () => {
                        ((0, j.MH)({
                            applicationId: t,
                            submitted: !0,
                            feedback: s,
                            viewId: l
                        }),
                            a());
                    },
                    disabled: 0 === s.length
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
                    variant: 'primary',
                    text: N.intl.string(N.t.i4jeWV),
                    fullWidth: !0,
                    onClick: t
                })
            })
        ]
    });
}
function z(e) {
    let { applicationId: t, viewId: a, transitionState: l, onClose: s, showOutdatedInfoOption: r } = e,
        [o, m] = i.useState(0);
    return (0, n.jsx)(c.Y0X, {
        size: c.CgR.SMALL,
        transitionState: l,
        parentComponent: 'GameProfileFeedbackModal',
        children: (() => {
            switch (o) {
                case 0:
                    return (0, n.jsx)(I, {
                        showOutdatedInfoOption: r,
                        onChoice: (e) => m(e)
                    });
                case 1:
                    return (0, n.jsx)(C, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => m(4)
                    });
                case 2:
                    return (0, n.jsx)(k, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => s()
                    });
                case 3:
                    return (0, n.jsx)(w, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => m(4)
                    });
                case 4:
                    return (0, n.jsx)(S, { onClose: s });
            }
        })()
    });
}
