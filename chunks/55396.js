a.d(t, { default: () => z }), a(47120), a(653041);
var n = a(200651),
    i = a(192379),
    l = a(658722),
    s = a.n(l),
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
    _ = a(715907);
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
    return (0, n.jsx)(n.Fragment, {
        children: (0, n.jsxs)(c.hzk, {
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
        })
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
                    fullWidth: !0,
                    onClick: () => {
                        (0, j.q)({
                            href: (null == l ? void 0 : l.name) != null ? ''.concat('https://www.igdb.com/search?utf8=\u2713&q=').concat(encodeURIComponent(l.name)) : 'https://www.igdb.com',
                            trusted: !0
                        }),
                            (0, f.MH)({
                                applicationId: t,
                                submitted: !0,
                                viewId: i
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
function w(e) {
    var t, a, l;
    let { applicationId: x, onSubmitted: j, viewId: I } = e,
        [k, w] = i.useState(''),
        C = (0, o.e7)([m.Z], () => m.Z.getApplication(x)),
        [S, z] = i.useState(''),
        G = (0, o.e7)([g.Z], () => g.Z.getGame(x)),
        L = null !== (a = null !== (t = null == G ? void 0 : G.name) && void 0 !== t ? t : null == C ? void 0 : C.name) && void 0 !== a ? a : '',
        Z = null == C ? void 0 : C.getIconURL(v.Si.LARGE),
        { primaryColor: F, secondaryColor: X } = (0, h.Z)(Z);
    i.useEffect(() => {
        d.Z.getDetectableGames();
    }, []);
    let q = (0, o.Wu)(
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
        B = (0, u.Z)(q.map((e) => e.id)),
        R = (0, r.chain)(B).compact().keyBy('id').value(),
        T = k.length > 0 && !q.map((e) => e.name.toLowerCase()).includes(k.toLowerCase()),
        y = S === x || (null === S && 0 === k.length),
        A = q.map((e) => {
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
                            style: { background: 'linear-gradient(45deg, '.concat(F, ', ').concat(X, ')') },
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
                                    children: null !== (l = null == G ? void 0 : G.name) && void 0 !== l ? l : null == C ? void 0 : C.name
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
                                            let a = q.find((t) => t.name.toLowerCase() === e.toLowerCase());
                                            z(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '');
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
                    fullWidth: !0,
                    onClick: () => {
                        (0, f.MH)({
                            applicationId: t,
                            submitted: !0,
                            feedback: s,
                            viewId: l
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
    let { applicationId: t, viewId: a, transitionState: l, onClose: s, showOutdatedInfoOption: r } = e,
        [o, d] = i.useState(0);
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
