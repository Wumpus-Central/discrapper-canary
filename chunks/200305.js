i.d(l, {
    Y: () => L,
    Z: () => _
}),
    i(47120);
var n = i(200651),
    s = i(192379),
    t = i(120356),
    r = i.n(t),
    a = i(442837),
    d = i(481060),
    o = i(893776),
    c = i(809206),
    u = i(607070),
    m = i(600164),
    x = i(339085),
    h = i(565138),
    v = i(650774),
    g = i(271383),
    j = i(594174),
    N = i(626135),
    f = i(768581),
    p = i(944163),
    b = i(246364),
    C = i(983736),
    k = i(187565),
    y = i(990488),
    E = i(592286),
    w = i(981631),
    I = i(388032),
    F = i(832311),
    Z = i(419851),
    T = i(296507),
    S = i(866402),
    M = i(246403);
let P = (e) => {
        let { headerId: l, email: i, password: s, setEmail: t, setPassword: r, emailError: a, passwordError: o } = e;
        return (0, n.jsxs)('div', {
            className: F.content,
            children: [
                (0, n.jsx)('div', {
                    className: F.applicationIconContainer,
                    children: (0, n.jsx)('img', {
                        alt: I.intl.string(I.t.ewGfjo),
                        src: Z,
                        className: F.applicationIcon
                    })
                }),
                (0, n.jsx)(d.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: I.intl.string(I.t.MhcDLy)
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: I.intl.string(I.t.SPlaR0)
                }),
                (0, n.jsx)('hr', { className: F.divider }),
                (0, n.jsx)(d.xJW, {
                    title: I.intl.string(I.t.dI4d4e),
                    className: F.formItem,
                    children: (0, n.jsx)(d.oil, {
                        value: i,
                        error: a,
                        onChange: t,
                        autoFocus: !0
                    })
                }),
                (0, n.jsx)(d.xJW, {
                    title: I.intl.string(I.t['CIGa+/']),
                    className: F.formItem,
                    children: (0, n.jsx)(d.oil, {
                        type: 'password',
                        value: s,
                        error: o,
                        onChange: r
                    })
                })
            ]
        });
    },
    z = (e) => {
        let { headerId: l, email: i } = e;
        return (0, n.jsxs)('div', {
            className: F.content,
            children: [
                (0, n.jsx)('img', {
                    alt: I.intl.string(I.t.wNAbl5),
                    src: M,
                    className: F.applicationIcon
                }),
                (0, n.jsx)(d.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: I.intl.format(I.t.v01XgI, { email: i })
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: I.intl.string(I.t['/Hw5aW'])
                }),
                (0, n.jsx)(d.zxk, {
                    className: F.resendButton,
                    size: d.zxk.Sizes.NONE,
                    look: d.zxk.Looks.LINK,
                    onClick: () => o.Z.verifyResend(),
                    children: I.intl.string(I.t['MLk/mJ'])
                })
            ]
        });
    },
    L = (e) => {
        var l;
        let { guildId: i, formState: s, updateFormState: t, isPreview: r = !1, disableVerification: d = !1 } = e,
            o = (0, a.e7)([p.Z], () => p.Z.get(i));
        if (null == o) return null;
        let c = null !== (l = null != s ? s : null == o ? void 0 : o.formFields) && void 0 !== l ? l : [],
            u = r ? y.W : y.r;
        return (0, n.jsx)(u, {
            guildId: i,
            formFields: c,
            updateFormFields: t,
            disableVerification: d
        });
    },
    O = () =>
        i
            .e('43841')
            .then(i.t.bind(i, 737848, 19))
            .then((e) => {
                let { default: l } = e;
                return l;
            }),
    R = (e) => {
        let { headerId: l, guildId: i, formState: s, updateFormState: t, useReducedMotion: a, disableVerification: o, isPreview: c = !1 } = e;
        return (0, n.jsxs)('div', {
            className: F.content,
            children: [
                (0, n.jsxs)('div', {
                    className: F.animationAndSparklesContainer,
                    children: [
                        (0, n.jsx)('img', {
                            alt: I.intl.string(I.t.VoB8OT),
                            src: S,
                            className: r()(F.sparkleIcon, F.sparkleBottom)
                        }),
                        (0, n.jsx)(d.Fmz, {
                            importData: O,
                            shouldAnimate: !a,
                            className: F.animation
                        }),
                        (0, n.jsx)('img', {
                            alt: I.intl.string(I.t.VoB8OT),
                            src: T,
                            className: r()(F.sparkleIcon, F.sparkleTop)
                        })
                    ]
                }),
                (0, n.jsx)(d.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: I.intl.string(I.t.DrEECw)
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: F.subheader,
                    children: I.intl.string(I.t['7D3C5u'])
                }),
                (0, n.jsx)('hr', { className: F.divider }),
                (0, n.jsx)(L, {
                    guildId: i,
                    formState: s,
                    updateFormState: t,
                    isPreview: c,
                    disableVerification: o
                })
            ]
        });
    },
    _ = (e) => {
        var l, i;
        let { verificationForm: t, headerId: o, guildId: y, onClose: Z, onComplete: T, isPreview: S = !1 } = e,
            M = null == t ? void 0 : t.guild,
            L = (0, k.N0)(y, M, S),
            O = null == t ? void 0 : t.formFields.some((e) => e.field_type !== b.QJ.TERMS),
            _ = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
            D = null == _ ? void 0 : _.verified,
            A = null == _ ? void 0 : _.isPhoneVerified(),
            X = (0, a.e7)([x.ZP], () => x.ZP.getGuildEmoji(y)),
            { storeMemberCount: B, storeOnlineCount: V } = (0, a.cj)([v.Z], () => ({
                storeMemberCount: v.Z.getMemberCount(y),
                storeOnlineCount: v.Z.getOnlineCount(y)
            })),
            [q, G] = s.useState(null !== (l = null == t ? void 0 : t.formFields) && void 0 !== l ? l : []),
            [H, W] = s.useState(!1),
            [J, U] = s.useState(null),
            [K, Y] = s.useState(''),
            [Q, $] = s.useState(''),
            [ee, el] = s.useState(null),
            [ei, en] = s.useState(null),
            es = null !== (i = null == L ? void 0 : L.hasFeature(w.oNc.CLAN)) && void 0 !== i && i,
            {
                emojisToRender: et,
                remainingEmojis: er,
                numGuildEmoji: ea
            } = s.useMemo(() => {
                var e;
                let l = [...(null !== (e = 0 === X.length ? (null == M ? void 0 : M.emojis) : X) && void 0 !== e ? e : [])].reverse(),
                    i = 0,
                    n = l.length;
                return (
                    n > 12 && null != l && (i = Math.min(n - (l = l.slice(0, 11)).length, 99)),
                    {
                        emojisToRender: l,
                        remainingEmojis: i,
                        numGuildEmoji: n
                    }
                );
            }, [M, X]),
            ed = null != B ? B : null == M ? void 0 : M.approximate_member_count,
            eo = null != V ? V : null == M ? void 0 : M.approximate_presence_count,
            ec = null != O && O,
            { currentStep: eu, setCurrentStep: em } = (0, k.k3)(_, ec);
        (0, k.lk)(q),
            s.useEffect(() => {
                null != t && G(t.formFields);
            }, [t]),
            s.useEffect(() => {
                null != y &&
                    N.default.track(w.rMx.OPEN_MODAL, {
                        type: E.N4,
                        guild_id: y
                    });
            }, [y]);
        let ex = s.useMemo(() => {
                if (q.some((e) => !(0, C.OA)(e))) return !0;
                if (ec || (null == _ ? void 0 : _.isStaff())) return !1;
                switch (null == L ? void 0 : L.verificationLevel) {
                    case w.sFg.VERY_HIGH:
                        return !A;
                    case w.sFg.LOW:
                    case w.sFg.MEDIUM:
                    case w.sFg.HIGH:
                        return !D && !A;
                    case w.sFg.NONE:
                    default:
                        return !1;
                }
            }, [q, L, ec, _, A, D]),
            eh = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
        if (null == L) return null;
        let ev = async () => {
                W(!0), el(null), en(null);
                try {
                    await (0, c.S2)({
                        email: K,
                        password: Q
                    }),
                        W(!1),
                        em(1);
                } catch (i) {
                    var e, l;
                    el(null == i ? void 0 : null === (e = i.body) || void 0 === e ? void 0 : e.email), en(null == i ? void 0 : null === (l = i.body) || void 0 === l ? void 0 : l.password);
                } finally {
                    W(!1);
                }
            },
            eg = async () => {
                W(!0), U(null);
                let e = null != _ ? g.ZP.getMember(y, _.id) : null;
                if (null != e && !e.isPending) {
                    null == Z || Z(!0);
                    return;
                }
                try {
                    await (null == T
                        ? void 0
                        : T({
                              ...(null != t ? t : p.t),
                              formFields: q
                          })),
                        null == Z || Z(!0);
                } catch (n) {
                    var l, i;
                    let e = null == n ? void 0 : n.body;
                    (null == e ? void 0 : null === (l = e.errors) || void 0 === l ? void 0 : l.version) != null || (null == e ? void 0 : null === (i = e.errors) || void 0 === i ? void 0 : i.form_fields) != null ? U(I.intl.string(I.t.PD09Sk)) : U(null == e ? void 0 : e.message);
                } finally {
                    W(!1);
                }
            };
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    justify: m.Z.Justify.BETWEEN,
                    className: F.guildSidebar,
                    shrink: 0,
                    children: [
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(h.Z, {
                                    guild: L,
                                    active: !0,
                                    className: r()(F.guildIcon, { [F.guildIconNoIcon]: null == L.icon })
                                }),
                                (0, n.jsx)(d.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: F.guildName,
                                    children: null == L ? void 0 : L.name
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: F.guildDescription,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: null == t ? void 0 : t.description
                                }),
                                null != et && et.length > 0
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)('hr', { className: F.divider }),
                                              (0, n.jsx)(d.vwX, { children: I.intl.format(I.t.KHLg5e, { emojis: ea }) }),
                                              (0, n.jsxs)('div', {
                                                  className: F.emojisContainer,
                                                  children: [
                                                      et.map((e) => {
                                                          let l = f.ZP.getEmojiURL({
                                                              id: e.id,
                                                              animated: !1,
                                                              size: 24
                                                          });
                                                          return (0, n.jsx)(
                                                              d.ua7,
                                                              {
                                                                  text: ':'.concat(e.name, ':'),
                                                                  children: (e) =>
                                                                      (0, n.jsx)('img', {
                                                                          ...e,
                                                                          width: 24,
                                                                          height: 24,
                                                                          src: l,
                                                                          className: F.emoji,
                                                                          alt: ''
                                                                      })
                                                              },
                                                              e.id
                                                          );
                                                      }),
                                                      null != er && er > 0
                                                          ? (0, n.jsx)(d.X6q, {
                                                                variant: 'heading-deprecated-12/semibold',
                                                                className: F.emoji,
                                                                color: 'header-secondary',
                                                                children: '+'.concat(er)
                                                            })
                                                          : null
                                                  ]
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            children: [
                                null != eo &&
                                    (0, n.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        className: F.onlineCount,
                                        children: [
                                            (0, n.jsx)('div', { className: F.dotOnline }),
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: I.intl.format(I.t['Oj3M6+'], { membersOnline: eo })
                                            })
                                        ]
                                    }),
                                null != ed &&
                                    (0, n.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        children: [
                                            (0, n.jsx)('div', { className: F.dotMembers }),
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: I.intl.format(I.t.LM4ufX, { members: ed })
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: F.modal,
                    children: [
                        (0, n.jsx)(d.hzk, {
                            className: F.modalContent,
                            children: (0, n.jsx)(d.qBt, {
                                className: r()(F.sequencer, { [F.centerContent]: 2 !== eu }),
                                steps: [0, 1, 2],
                                step: eu,
                                children: (() => {
                                    switch (eu) {
                                        case 0:
                                            return (0, n.jsx)(P, {
                                                headerId: o,
                                                email: K,
                                                password: Q,
                                                setEmail: Y,
                                                setPassword: $,
                                                emailError: ee,
                                                passwordError: ei
                                            });
                                        case 1:
                                            return (0, n.jsx)(z, {
                                                headerId: o,
                                                email: K
                                            });
                                        case 2:
                                            return (0, n.jsx)(R, {
                                                headerId: o,
                                                guildId: y,
                                                formState: q,
                                                updateFormState: G,
                                                isPreview: S,
                                                useReducedMotion: eh,
                                                disableVerification: ec
                                            });
                                    }
                                })()
                            })
                        }),
                        (() => {
                            switch (eu) {
                                case 0:
                                    return (0, n.jsxs)(d.mzw, {
                                        className: F.footer,
                                        children: [
                                            (0, n.jsx)(d.zxk, {
                                                className: F.submitButton,
                                                type: 'submit',
                                                submitting: H,
                                                onClick: ev,
                                                disabled: 0 === K.length || 0 === Q.length,
                                                children: I.intl.string(I.t.PDTjLC)
                                            }),
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: I.intl.string(I.t['9GPiR0'])
                                            })
                                        ]
                                    });
                                case 1:
                                    return null;
                                case 2:
                                    return (0, n.jsxs)(d.mzw, {
                                        className: F.footer,
                                        children: [
                                            (0, n.jsx)(d.zxk, {
                                                className: F.submitButton,
                                                type: 'submit',
                                                submitting: H,
                                                onClick: eg,
                                                color: d.zxk.Colors.GREEN,
                                                disabled: null == T || ex,
                                                children: I.intl.string(I.t.geKm7u)
                                            }),
                                            null != J &&
                                                (0, n.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-danger',
                                                    children: J
                                                }),
                                            null == J &&
                                                O &&
                                                (0, n.jsxs)('div', {
                                                    className: F.disclaimerFooter,
                                                    children: [
                                                        (0, n.jsx)(d.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: I.intl.string(I.t['+fPCTU'])
                                                        }),
                                                        es &&
                                                            (0, n.jsx)(d.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: I.intl.string(I.t.FwXzw8)
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
