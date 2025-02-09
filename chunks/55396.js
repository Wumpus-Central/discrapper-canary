n.d(t, { default: () => z }), n(47120), n(653041);
var a = n(200651),
    l = n(192379),
    i = n(658722),
    s = n.n(i),
    r = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(224706),
    m = n(812206),
    u = n(835473),
    h = n(206295),
    g = n(669764),
    x = n(925329),
    v = n(77498),
    p = n(49012),
    f = n(810568),
    j = n(701488),
    N = n(388032),
    _ = n(999144);
function I(e) {
    let { showOutdatedInfoOption: t, onChoice: n } = e,
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
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)(c.hzk, {
            className: _.content,
            children: [
                (0, a.jsx)(c.X6q, {
                    variant: 'heading-xl/bold',
                    className: _.header,
                    children: N.intl.string(N.t['8itBsL'])
                }),
                (0, a.jsx)(c.Text, {
                    className: _.tip,
                    variant: 'text-md/normal',
                    children: N.intl.string(N.t.X7ab09)
                }),
                (0, a.jsx)(c.FXm, {
                    className: _.radioGroup,
                    options: l,
                    onChange: (e) => {
                        let { value: t } = e;
                        return n(t);
                    }
                })
            ]
        })
    });
}
function k(e) {
    let { applicationId: t, onSubmitted: n, viewId: l } = e,
        i = (0, u.q)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: N.intl.string(N.t.lWk2u7)
                    }),
                    (0, a.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.ZQfxS0)
                    })
                ]
            }),
            (0, a.jsx)(c.mzw, {
                className: _.footer,
                children: (0, a.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, p.q)({
                            href: (null == i ? void 0 : i.name) != null ? ''.concat('https://www.igdb.com/search?utf8=\u2713&q=').concat(encodeURIComponent(i.name)) : 'https://www.igdb.com',
                            trusted: !0
                        }),
                            (0, f.MH)({
                                applicationId: t,
                                submitted: !0,
                                viewId: l
                            }),
                            n();
                    },
                    children: N.intl.string(N.t.RSATCA)
                })
            })
        ]
    });
}
let C = (e) => {
    let { id: t, name: n, applicationRecord: l } = e;
    return (0, a.jsxs)('div', {
        className: _.gameSuggestion,
        children: [
            null != t
                ? (0, a.jsx)(x.Z, {
                      game: l,
                      className: _.smolGameIcon
                  })
                : (0, a.jsx)(c.vdY, {
                      className: _.customGameNameIcon,
                      size: 'sm'
                  }),
            n
        ]
    });
};
function b(e) {
    var t, n, i;
    let { applicationId: x, onSubmitted: p, viewId: I } = e,
        [k, b] = l.useState(''),
        w = (0, o.e7)([m.Z], () => m.Z.getApplication(x)),
        [S, z] = l.useState(''),
        G = (0, o.e7)([g.Z], () => g.Z.getGame(x)),
        L = null !== (n = null !== (t = null == G ? void 0 : G.name) && void 0 !== t ? t : null == w ? void 0 : w.name) && void 0 !== n ? n : '',
        R = null == w ? void 0 : w.getIconURL(j.Si.LARGE),
        { primaryColor: Z, secondaryColor: B } = (0, h.Z)(R);
    l.useEffect(() => {
        d.Z.getDetectableGames();
    }, []);
    let F = (0, o.Wu)(
            [v.Z],
            () => {
                let e = ((null == k ? void 0 : k.length) > 0 ? k : L).toLowerCase(),
                    t = null != S ? v.Z.getDetectableGame(S) : void 0;
                return (0, r.chain)(v.Z.games)
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
        T = (0, u.Z)(F.map((e) => e.id)),
        X = (0, r.chain)(T).compact().keyBy('id').value(),
        q = k.length > 0 && !F.map((e) => e.name.toLowerCase()).includes(k.toLowerCase()),
        y = S === x || (null === S && 0 === k.length),
        A = F.map((e) => {
            let { name: t, id: n } = e;
            return {
                name: (0, a.jsx)(C, {
                    name: t,
                    id: n,
                    applicationRecord: X[n]
                }),
                value: n
            };
        });
    return (
        q &&
            A.push({
                name: (0, a.jsx)(C, { name: k }),
                value: ''
            }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(c.hzk, {
                    className: _.content,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            className: _.header,
                            children: N.intl.string(N.t.tJzB6O)
                        }),
                        (0, a.jsx)(c.Text, {
                            className: _.tip,
                            variant: 'text-md/normal',
                            children: N.intl.string(N.t['44R0Iy'])
                        }),
                        (0, a.jsxs)('div', {
                            className: _.gameInfoBox,
                            style: { background: 'linear-gradient(45deg, '.concat(Z, ', ').concat(B, ')') },
                            children: [
                                null != R &&
                                    (0, a.jsx)('img', {
                                        className: _.gameIcon,
                                        src: R,
                                        alt: ''
                                    }),
                                (0, a.jsx)(c.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: _.gameTitle,
                                    children: null !== (i = null == G ? void 0 : G.name) && void 0 !== i ? i : null == w ? void 0 : w.name
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: _.applicationSearch,
                            children: [
                                (0, a.jsx)(c.E1j, {
                                    className: _.searchBar,
                                    query: k,
                                    onChange: (e) => {
                                        if (0 === e.length) null === S && z(x);
                                        else {
                                            var t;
                                            let n = F.find((t) => t.name.toLowerCase() === e.toLowerCase());
                                            z(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '');
                                        }
                                        b(e);
                                    },
                                    size: c.E1j.Sizes.MEDIUM,
                                    onClear: () => {
                                        null === S && z(x), b('');
                                    },
                                    placeholder: N.intl.string(N.t.UedRLy)
                                }),
                                (0, a.jsx)(c.FXm, {
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
                (0, a.jsx)(c.mzw, {
                    className: _.footer,
                    children: (0, a.jsx)(c.zxk, {
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
                                p();
                        },
                        disabled: y,
                        children: N.intl.string(N.t.geKm7u)
                    })
                })
            ]
        })
    );
}
function w(e) {
    let { applicationId: t, onSubmitted: n, viewId: i } = e,
        [s, r] = l.useState('');
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: N.intl.string(N.t['/nALeX'])
                    }),
                    (0, a.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t.WOuJ8v)
                    }),
                    (0, a.jsx)('div', {
                        className: _.otherFeedbackInput,
                        children: (0, a.jsx)(c.Kx8, {
                            value: s,
                            onChange: (e) => r(e),
                            placeholder: N.intl.string(N.t.AHCr5e),
                            maxLength: 300
                        })
                    })
                ]
            }),
            (0, a.jsx)(c.mzw, {
                className: _.footer,
                children: (0, a.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, f.MH)({
                            applicationId: t,
                            submitted: !0,
                            feedback: s,
                            viewId: i
                        }),
                            n();
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
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        className: _.header,
                        children: N.intl.string(N.t['pelg/f'])
                    }),
                    (0, a.jsx)(c.Text, {
                        className: _.tip,
                        variant: 'text-md/normal',
                        children: N.intl.string(N.t['55S/OD'])
                    })
                ]
            }),
            (0, a.jsx)(c.mzw, {
                className: _.footer,
                children: (0, a.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: t,
                    children: N.intl.string(N.t.i4jeWV)
                })
            })
        ]
    });
}
function z(e) {
    let { applicationId: t, viewId: n, transitionState: i, onClose: s, showOutdatedInfoOption: r } = e,
        [o, d] = l.useState(0);
    return (0, a.jsx)(c.Y0X, {
        size: c.CgR.SMALL,
        transitionState: i,
        children: (() => {
            switch (o) {
                case 0:
                    return (0, a.jsx)(I, {
                        showOutdatedInfoOption: r,
                        onChoice: (e) => d(e)
                    });
                case 1:
                    return (0, a.jsx)(b, {
                        applicationId: t,
                        viewId: n,
                        onSubmitted: () => d(4)
                    });
                case 2:
                    return (0, a.jsx)(k, {
                        applicationId: t,
                        viewId: n,
                        onSubmitted: () => s()
                    });
                case 3:
                    return (0, a.jsx)(w, {
                        applicationId: t,
                        viewId: n,
                        onSubmitted: () => d(4)
                    });
                case 4:
                    return (0, a.jsx)(S, { onClose: s });
            }
        })()
    });
}
