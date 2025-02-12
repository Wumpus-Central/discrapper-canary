l.d(i, {
    Y: () => O,
    Z: () => G
}),
    l(47120);
var t = l(200651),
    n = l(192379),
    r = l(120356),
    s = l.n(r),
    a = l(442837),
    o = l(481060),
    d = l(893776),
    u = l(809206),
    c = l(607070),
    m = l(600164),
    E = l(339085),
    h = l(565138),
    g = l(650774),
    f = l(271383),
    I = l(594174),
    v = l(626135),
    _ = l(768581),
    N = l(944163),
    x = l(246364),
    S = l(983736),
    T = l(187565),
    A = l(990488),
    C = l(592286),
    j = l(981631),
    p = l(388032),
    L = l(652536),
    D = l(419851),
    y = l(296507),
    R = l(866402),
    F = l(246403);
let P = (e) => {
        let { headerId: i, email: l, password: n, setEmail: r, setPassword: s, emailError: a, passwordError: d } = e;
        return (0, t.jsxs)('div', {
            className: L.content,
            children: [
                (0, t.jsx)('div', {
                    className: L.applicationIconContainer,
                    children: (0, t.jsx)('img', {
                        alt: p.intl.string(p.t.ewGfjo),
                        src: D,
                        className: L.applicationIcon
                    })
                }),
                (0, t.jsx)(o.X6q, {
                    id: i,
                    variant: 'heading-xl/semibold',
                    className: L.header,
                    children: p.intl.string(p.t.MhcDLy)
                }),
                (0, t.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: p.intl.string(p.t.SPlaR0)
                }),
                (0, t.jsx)('hr', { className: L.divider }),
                (0, t.jsx)(o.xJW, {
                    title: p.intl.string(p.t.dI4d4e),
                    className: L.formItem,
                    children: (0, t.jsx)(o.oil, {
                        value: l,
                        error: a,
                        onChange: r,
                        autoFocus: !0
                    })
                }),
                (0, t.jsx)(o.xJW, {
                    title: p.intl.string(p.t['CIGa+/']),
                    className: L.formItem,
                    children: (0, t.jsx)(o.oil, {
                        type: 'password',
                        value: n,
                        error: d,
                        onChange: s
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { headerId: i, email: l } = e;
        return (0, t.jsxs)('div', {
            className: L.content,
            children: [
                (0, t.jsx)('img', {
                    alt: p.intl.string(p.t.wNAbl5),
                    src: F,
                    className: L.applicationIcon
                }),
                (0, t.jsx)(o.X6q, {
                    id: i,
                    variant: 'heading-xl/semibold',
                    className: L.header,
                    children: p.intl.format(p.t.v01XgI, { email: l })
                }),
                (0, t.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: p.intl.string(p.t['/Hw5aW'])
                }),
                (0, t.jsx)(o.zxk, {
                    className: L.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => d.Z.verifyResend(),
                    children: p.intl.string(p.t['MLk/mJ'])
                })
            ]
        });
    },
    O = (e) => {
        var i;
        let { guildId: l, formState: n, updateFormState: r, isPreview: s = !1, disableVerification: o = !1 } = e,
            d = (0, a.e7)([N.Z], () => N.Z.get(l));
        if (null == d) return null;
        let u = null !== (i = null != n ? n : null == d ? void 0 : d.formFields) && void 0 !== i ? i : [],
            c = s ? A.W : A.r;
        return (0, t.jsx)(c, {
            guildId: l,
            formFields: u,
            updateFormFields: r,
            disableVerification: o
        });
    },
    V = () =>
        l
            .e('43841')
            .then(l.t.bind(l, 737848, 19))
            .then((e) => {
                let { default: i } = e;
                return i;
            }),
    M = (e) => {
        let { headerId: i, guildId: l, formState: n, updateFormState: r, useReducedMotion: a, disableVerification: d, isPreview: u = !1 } = e;
        return (0, t.jsxs)('div', {
            className: L.content,
            children: [
                (0, t.jsxs)('div', {
                    className: L.animationAndSparklesContainer,
                    children: [
                        (0, t.jsx)('img', {
                            alt: p.intl.string(p.t.VoB8OT),
                            src: R,
                            className: s()(L.sparkleIcon, L.sparkleBottom)
                        }),
                        (0, t.jsx)(o.Fmz, {
                            importData: V,
                            shouldAnimate: !a,
                            className: L.animation
                        }),
                        (0, t.jsx)('img', {
                            alt: p.intl.string(p.t.VoB8OT),
                            src: y,
                            className: s()(L.sparkleIcon, L.sparkleTop)
                        })
                    ]
                }),
                (0, t.jsx)(o.X6q, {
                    id: i,
                    variant: 'heading-xl/semibold',
                    className: L.header,
                    children: p.intl.string(p.t.DrEECw)
                }),
                (0, t.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: L.subheader,
                    children: p.intl.string(p.t['7D3C5u'])
                }),
                (0, t.jsx)('hr', { className: L.divider }),
                (0, t.jsx)(O, {
                    guildId: l,
                    formState: n,
                    updateFormState: r,
                    isPreview: u,
                    disableVerification: d
                })
            ]
        });
    },
    G = (e) => {
        var i, l;
        let { verificationForm: r, headerId: d, guildId: A, onClose: D, onComplete: y, isPreview: R = !1 } = e,
            F = null == r ? void 0 : r.guild,
            O = (0, T.N0)(A, F, R),
            V = null == r ? void 0 : r.formFields.some((e) => e.field_type !== x.QJ.TERMS),
            G = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
            Z = null == G ? void 0 : G.verified,
            w = null == G ? void 0 : G.isPhoneVerified(),
            B = (0, a.e7)([E.ZP], () => E.ZP.getGuildEmoji(A)),
            { storeMemberCount: k, storeOnlineCount: U } = (0, a.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(A),
                storeOnlineCount: g.Z.getOnlineCount(A)
            })),
            [z, H] = n.useState(null !== (i = null == r ? void 0 : r.formFields) && void 0 !== i ? i : []),
            [q, J] = n.useState(!1),
            [Y, X] = n.useState(null),
            [K, W] = n.useState(''),
            [Q, $] = n.useState(''),
            [ee, ei] = n.useState(null),
            [el, et] = n.useState(null),
            en = null !== (l = null == O ? void 0 : O.hasFeature(j.oNc.CLAN)) && void 0 !== l && l,
            {
                emojisToRender: er,
                remainingEmojis: es,
                numGuildEmoji: ea
            } = n.useMemo(() => {
                var e;
                let i = [...(null !== (e = 0 === B.length ? (null == F ? void 0 : F.emojis) : B) && void 0 !== e ? e : [])].reverse(),
                    l = 0,
                    t = i.length;
                return (
                    t > 12 && null != i && (l = Math.min(t - (i = i.slice(0, 11)).length, 99)),
                    {
                        emojisToRender: i,
                        remainingEmojis: l,
                        numGuildEmoji: t
                    }
                );
            }, [F, B]),
            eo = null != k ? k : null == F ? void 0 : F.approximate_member_count,
            ed = null != U ? U : null == F ? void 0 : F.approximate_presence_count,
            eu = null != V && V,
            { currentStep: ec, setCurrentStep: em } = (0, T.k3)(G, eu);
        (0, T.lk)(z),
            n.useEffect(() => {
                null != r && H(r.formFields);
            }, [r]),
            n.useEffect(() => {
                null != A &&
                    v.default.track(j.rMx.OPEN_MODAL, {
                        type: C.N4,
                        guild_id: A
                    });
            }, [A]);
        let eE = n.useMemo(() => {
                if (z.some((e) => !(0, S.OA)(e))) return !0;
                if (eu || (null == G ? void 0 : G.isStaff())) return !1;
                switch (null == O ? void 0 : O.verificationLevel) {
                    case j.sFg.VERY_HIGH:
                        return !w;
                    case j.sFg.LOW:
                    case j.sFg.MEDIUM:
                    case j.sFg.HIGH:
                        return !Z && !w;
                    case j.sFg.NONE:
                    default:
                        return !1;
                }
            }, [z, O, eu, G, w, Z]),
            eh = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
        if (null == O) return null;
        let eg = async () => {
                J(!0), ei(null), et(null);
                try {
                    await (0, u.S2)({
                        email: K,
                        password: Q
                    }),
                        J(!1),
                        em(1);
                } catch (l) {
                    var e, i;
                    ei(null == l ? void 0 : null === (e = l.body) || void 0 === e ? void 0 : e.email), et(null == l ? void 0 : null === (i = l.body) || void 0 === i ? void 0 : i.password);
                } finally {
                    J(!1);
                }
            },
            ef = async () => {
                J(!0), X(null);
                let e = null != G ? f.ZP.getMember(A, G.id) : null;
                if (null != e && !e.isPending) {
                    null == D || D(!0);
                    return;
                }
                try {
                    await (null == y
                        ? void 0
                        : y({
                              ...(null != r ? r : N.t),
                              formFields: z
                          })),
                        null == D || D(!0);
                } catch (t) {
                    var i, l;
                    let e = null == t ? void 0 : t.body;
                    (null == e ? void 0 : null === (i = e.errors) || void 0 === i ? void 0 : i.version) != null || (null == e ? void 0 : null === (l = e.errors) || void 0 === l ? void 0 : l.form_fields) != null ? X(p.intl.string(p.t.PD09Sk)) : X(null == e ? void 0 : e.message);
                } finally {
                    J(!1);
                }
            };
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    justify: m.Z.Justify.BETWEEN,
                    className: L.guildSidebar,
                    shrink: 0,
                    children: [
                        (0, t.jsxs)('div', {
                            children: [
                                (0, t.jsx)(h.Z, {
                                    guild: O,
                                    active: !0,
                                    className: s()(L.guildIcon, { [L.guildIconNoIcon]: null == O.icon })
                                }),
                                (0, t.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: L.guildName,
                                    children: null == O ? void 0 : O.name
                                }),
                                (0, t.jsx)(o.Text, {
                                    className: L.guildDescription,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: null == r ? void 0 : r.description
                                }),
                                null != er && er.length > 0
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)('hr', { className: L.divider }),
                                              (0, t.jsx)(o.vwX, { children: p.intl.format(p.t.KHLg5e, { emojis: ea }) }),
                                              (0, t.jsxs)('div', {
                                                  className: L.emojisContainer,
                                                  children: [
                                                      er.map((e) => {
                                                          let i = _.ZP.getEmojiURL({
                                                              id: e.id,
                                                              animated: !1,
                                                              size: 24
                                                          });
                                                          return (0, t.jsx)(
                                                              o.ua7,
                                                              {
                                                                  text: ':'.concat(e.name, ':'),
                                                                  children: (e) =>
                                                                      (0, t.jsx)('img', {
                                                                          ...e,
                                                                          width: 24,
                                                                          height: 24,
                                                                          src: i,
                                                                          className: L.emoji,
                                                                          alt: ''
                                                                      })
                                                              },
                                                              e.id
                                                          );
                                                      }),
                                                      null != es && es > 0
                                                          ? (0, t.jsx)(o.X6q, {
                                                                variant: 'heading-deprecated-12/semibold',
                                                                className: L.emoji,
                                                                color: 'header-secondary',
                                                                children: '+'.concat(es)
                                                            })
                                                          : null
                                                  ]
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            children: [
                                null != ed &&
                                    (0, t.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        className: L.onlineCount,
                                        children: [
                                            (0, t.jsx)('div', { className: L.dotOnline }),
                                            (0, t.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: p.intl.format(p.t['Oj3M6+'], { membersOnline: ed })
                                            })
                                        ]
                                    }),
                                null != eo &&
                                    (0, t.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        children: [
                                            (0, t.jsx)('div', { className: L.dotMembers }),
                                            (0, t.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: p.intl.format(p.t.LM4ufX, { members: eo })
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    className: L.modal,
                    children: [
                        (0, t.jsx)(o.hzk, {
                            className: L.modalContent,
                            children: (0, t.jsx)(o.qBt, {
                                className: s()(L.sequencer, { [L.centerContent]: 2 !== ec }),
                                steps: [0, 1, 2],
                                step: ec,
                                children: (() => {
                                    switch (ec) {
                                        case 0:
                                            return (0, t.jsx)(P, {
                                                headerId: d,
                                                email: K,
                                                password: Q,
                                                setEmail: W,
                                                setPassword: $,
                                                emailError: ee,
                                                passwordError: el
                                            });
                                        case 1:
                                            return (0, t.jsx)(b, {
                                                headerId: d,
                                                email: K
                                            });
                                        case 2:
                                            return (0, t.jsx)(M, {
                                                headerId: d,
                                                guildId: A,
                                                formState: z,
                                                updateFormState: H,
                                                isPreview: R,
                                                useReducedMotion: eh,
                                                disableVerification: eu
                                            });
                                    }
                                })()
                            })
                        }),
                        (() => {
                            switch (ec) {
                                case 0:
                                    return (0, t.jsxs)(o.mzw, {
                                        className: L.footer,
                                        children: [
                                            (0, t.jsx)(o.zxk, {
                                                className: L.submitButton,
                                                type: 'submit',
                                                submitting: q,
                                                onClick: eg,
                                                disabled: 0 === K.length || 0 === Q.length,
                                                children: p.intl.string(p.t.PDTjLC)
                                            }),
                                            (0, t.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: p.intl.string(p.t['9GPiR0'])
                                            })
                                        ]
                                    });
                                case 1:
                                    return null;
                                case 2:
                                    return (0, t.jsxs)(o.mzw, {
                                        className: L.footer,
                                        children: [
                                            (0, t.jsx)(o.zxk, {
                                                className: L.submitButton,
                                                type: 'submit',
                                                submitting: q,
                                                onClick: ef,
                                                color: o.zxk.Colors.GREEN,
                                                disabled: null == y || eE,
                                                children: p.intl.string(p.t.geKm7u)
                                            }),
                                            null != Y &&
                                                (0, t.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-danger',
                                                    children: Y
                                                }),
                                            null == Y &&
                                                V &&
                                                (0, t.jsxs)('div', {
                                                    className: L.disclaimerFooter,
                                                    children: [
                                                        (0, t.jsx)(o.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: p.intl.string(p.t['+fPCTU'])
                                                        }),
                                                        en &&
                                                            (0, t.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: p.intl.string(p.t.FwXzw8)
                                                            })
                                                    ]
                                                })
                                        ]
                                    });
                            }
                        })()
                    ]
                })
            ]
        });
    };
