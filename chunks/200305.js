i.d(t, { Z: () => G }), i(388685), i(583741), i(953529);
var n = i(200651),
    l = i(192379),
    r = i(120356),
    s = i.n(r),
    a = i(442837),
    o = i(481060),
    u = i(893776),
    c = i(809206),
    d = i(607070),
    m = i(600164),
    f = i(339085),
    E = i(565138),
    g = i(650774),
    h = i(271383),
    N = i(594174),
    I = i(626135),
    v = i(768581),
    p = i(944163),
    j = i(246364),
    _ = i(983736),
    x = i(187565),
    S = i(990488),
    y = i(592286),
    b = i(981631),
    O = i(388032),
    T = i(916199),
    C = i(419851),
    A = i(296507),
    P = i(866402),
    D = i(246403);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
let F = (e) => {
        let { headerId: t, email: i, password: l, setEmail: r, setPassword: s, emailError: a, passwordError: u } = e;
        return (0, n.jsxs)('div', {
            className: T.content,
            children: [
                (0, n.jsx)('div', {
                    className: T.applicationIconContainer,
                    children: (0, n.jsx)('img', {
                        alt: O.NW.string(O.t.ewGfjo),
                        src: C,
                        className: T.applicationIcon
                    })
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: T.header,
                    children: O.NW.string(O.t.MhcDLy)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: O.NW.string(O.t.SPlaR0)
                }),
                (0, n.jsx)('hr', { className: T.divider }),
                (0, n.jsx)(o.xJW, {
                    title: O.NW.string(O.t.dI4d4e),
                    className: T.formItem,
                    children: (0, n.jsx)(o.oil, {
                        value: i,
                        error: a,
                        onChange: r,
                        autoFocus: !0
                    })
                }),
                (0, n.jsx)(o.xJW, {
                    title: O.NW.string(O.t['CIGa+/']),
                    className: T.formItem,
                    children: (0, n.jsx)(o.oil, {
                        type: 'password',
                        value: l,
                        error: u,
                        onChange: s
                    })
                })
            ]
        });
    },
    w = (e) => {
        let { headerId: t, email: i } = e;
        return (0, n.jsxs)('div', {
            className: T.content,
            children: [
                (0, n.jsx)('img', {
                    alt: O.NW.string(O.t.wNAbl5),
                    src: D,
                    className: T.applicationIcon
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: T.header,
                    children: O.NW.format(O.t.v01XgI, { email: i })
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: O.NW.string(O.t['/Hw5aW'])
                }),
                (0, n.jsx)(o.zxk, {
                    className: T.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => u.Z.verifyResend(),
                    children: O.NW.string(O.t['MLk/mJ'])
                })
            ]
        });
    },
    V = (e) => {
        var t;
        let { guildId: i, formState: l, updateFormState: r, isPreview: s = !1, disableVerification: o = !1 } = e,
            u = (0, a.e7)([p.Z], () => p.Z.get(i));
        if (null == u) return null;
        let c = null != (t = null != l ? l : null == u ? void 0 : u.formFields) ? t : [],
            d = s ? S.W : S.r;
        return (0, n.jsx)(d, {
            guildId: i,
            formFields: c,
            updateFormFields: r,
            disableVerification: o
        });
    },
    M = () =>
        i
            .e('43841')
            .then(i.t.bind(i, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    Z = (e) => {
        let { headerId: t, guildId: i, formState: l, updateFormState: r, useReducedMotion: a, disableVerification: u, isPreview: c = !1 } = e;
        return (0, n.jsxs)('div', {
            className: T.content,
            children: [
                (0, n.jsxs)('div', {
                    className: T.animationAndSparklesContainer,
                    children: [
                        (0, n.jsx)('img', {
                            alt: O.NW.string(O.t.VoB8OT),
                            src: P,
                            className: s()(T.sparkleIcon, T.sparkleBottom)
                        }),
                        (0, n.jsx)(o.Fmz, {
                            importData: M,
                            shouldAnimate: !a,
                            className: T.animation
                        }),
                        (0, n.jsx)('img', {
                            alt: O.NW.string(O.t.VoB8OT),
                            src: A,
                            className: s()(T.sparkleIcon, T.sparkleTop)
                        })
                    ]
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: T.header,
                    children: O.NW.string(O.t.DrEECw)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: T.subheader,
                    children: O.NW.string(O.t['7D3C5u'])
                }),
                (0, n.jsx)('hr', { className: T.divider }),
                (0, n.jsx)(V, {
                    guildId: i,
                    formState: l,
                    updateFormState: r,
                    isPreview: c,
                    disableVerification: u
                })
            ]
        });
    },
    G = (e) => {
        var t, i;
        let { verificationForm: r, headerId: u, guildId: S, onClose: C, onComplete: A, isPreview: P = !1 } = e,
            D = null == r ? void 0 : r.guild,
            V = (0, x.N0)(S, D, P),
            M = null == r ? void 0 : r.formFields.some((e) => e.field_type !== j.QJ.TERMS),
            G = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
            B = null == G ? void 0 : G.verified,
            k = null == G ? void 0 : G.isPhoneVerified(),
            W = (0, a.e7)([f.ZP], () => f.ZP.getGuildEmoji(S)),
            { storeMemberCount: U, storeOnlineCount: z } = (0, a.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(S),
                storeOnlineCount: g.Z.getOnlineCount(S)
            })),
            [H, q] = l.useState(null != (t = null == r ? void 0 : r.formFields) ? t : []),
            [J, Y] = l.useState(!1),
            [X, K] = l.useState(null),
            [Q, $] = l.useState(''),
            [ee, et] = l.useState(''),
            [ei, en] = l.useState(null),
            [el, er] = l.useState(null),
            es = null != (i = null == V ? void 0 : V.hasFeature(b.oNc.CLAN)) && i,
            {
                emojisToRender: ea,
                remainingEmojis: eo,
                numGuildEmoji: eu
            } = l.useMemo(() => {
                var e;
                let t = [...(null != (e = 0 === W.length ? (null == D ? void 0 : D.emojis) : W) ? e : [])].reverse(),
                    i = 0,
                    n = t.length;
                return (
                    n > 12 && null != t && (i = Math.min(n - (t = t.slice(0, 11)).length, 99)),
                    {
                        emojisToRender: t,
                        remainingEmojis: i,
                        numGuildEmoji: n
                    }
                );
            }, [D, W]),
            ec = null != U ? U : null == D ? void 0 : D.approximate_member_count,
            ed = null != z ? z : null == D ? void 0 : D.approximate_presence_count,
            em = null != M && M,
            { currentStep: ef, setCurrentStep: eE } = (0, x.k3)(G, em);
        (0, x.lk)(H),
            l.useEffect(() => {
                null != r && q(r.formFields);
            }, [r]),
            l.useEffect(() => {
                null != S &&
                    I.default.track(b.rMx.OPEN_MODAL, {
                        type: y.N4,
                        guild_id: S
                    });
            }, [S]);
        let eg = l.useMemo(() => {
                if (H.some((e) => !(0, _.OA)(e))) return !0;
                if (em || (null == G ? void 0 : G.isStaff())) return !1;
                switch (null == V ? void 0 : V.verificationLevel) {
                    case b.sFg.VERY_HIGH:
                        return !k;
                    case b.sFg.LOW:
                    case b.sFg.MEDIUM:
                    case b.sFg.HIGH:
                        return !B && !k;
                    case b.sFg.NONE:
                    default:
                        return !1;
                }
            }, [H, V, em, G, k, B]),
            eh = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
        if (null == V) return null;
        let eN = async () => {
                Y(!0), en(null), er(null);
                try {
                    await (0, c.S2)({
                        email: Q,
                        password: ee
                    }),
                        Y(!1),
                        eE(1);
                } catch (i) {
                    var e, t;
                    en(null == i || null == (e = i.body) ? void 0 : e.email), er(null == i || null == (t = i.body) ? void 0 : t.password);
                } finally {
                    Y(!1);
                }
            },
            eI = async () => {
                Y(!0), K(null);
                let e = null != G ? h.ZP.getMember(S, G.id) : null;
                if (null != e && !e.isPending) {
                    null == C || C(!0);
                    return;
                }
                try {
                    await (null == A ? void 0 : A(R(L({}, null != r ? r : p.t), { formFields: H }))), null == C || C(!0);
                } catch (n) {
                    var t, i;
                    let e = null == n ? void 0 : n.body;
                    (null == e || null == (t = e.errors) ? void 0 : t.version) != null || (null == e || null == (i = e.errors) ? void 0 : i.form_fields) != null ? K(O.NW.string(O.t.PD09Sk)) : K(null == e ? void 0 : e.message);
                } finally {
                    Y(!1);
                }
            };
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    justify: m.Z.Justify.BETWEEN,
                    className: T.guildSidebar,
                    shrink: 0,
                    children: [
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(E.Z, {
                                    guild: V,
                                    active: !0,
                                    className: s()(T.guildIcon, { [T.guildIconNoIcon]: null == V.icon })
                                }),
                                (0, n.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: T.guildName,
                                    children: null == V ? void 0 : V.name
                                }),
                                (0, n.jsx)(o.Text, {
                                    className: T.guildDescription,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: null == r ? void 0 : r.description
                                }),
                                null != ea && ea.length > 0
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)('hr', { className: T.divider }),
                                              (0, n.jsx)(o.vwX, { children: O.NW.format(O.t.KHLg5e, { emojis: eu }) }),
                                              (0, n.jsxs)('div', {
                                                  className: T.emojisContainer,
                                                  children: [
                                                      ea.map((e) => {
                                                          let t = v.ZP.getEmojiURL({
                                                              id: e.id,
                                                              animated: !1,
                                                              size: 24
                                                          });
                                                          return (0, n.jsx)(
                                                              o.ua7,
                                                              {
                                                                  text: ':'.concat(e.name, ':'),
                                                                  children: (e) =>
                                                                      (0, n.jsx)(
                                                                          'img',
                                                                          R(L({}, e), {
                                                                              width: 24,
                                                                              height: 24,
                                                                              src: t,
                                                                              className: T.emoji,
                                                                              alt: ''
                                                                          })
                                                                      )
                                                              },
                                                              e.id
                                                          );
                                                      }),
                                                      null != eo && eo > 0
                                                          ? (0, n.jsx)(o.X6q, {
                                                                variant: 'heading-deprecated-12/semibold',
                                                                className: T.emoji,
                                                                color: 'header-secondary',
                                                                children: '+'.concat(eo)
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
                                null != ed &&
                                    (0, n.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        className: T.onlineCount,
                                        children: [
                                            (0, n.jsx)('div', { className: T.dotOnline }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: O.NW.format(O.t['Oj3M6+'], { membersOnline: ed })
                                            })
                                        ]
                                    }),
                                null != ec &&
                                    (0, n.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        children: [
                                            (0, n.jsx)('div', { className: T.dotMembers }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: O.NW.format(O.t.LM4ufX, { members: ec })
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: T.modal,
                    children: [
                        (0, n.jsx)(o.hzk, {
                            className: T.modalContent,
                            children: (0, n.jsx)(o.qBt, {
                                className: s()(T.sequencer, { [T.centerContent]: 2 !== ef }),
                                steps: [0, 1, 2],
                                step: ef,
                                children: (() => {
                                    switch (ef) {
                                        case 0:
                                            return (0, n.jsx)(F, {
                                                headerId: u,
                                                email: Q,
                                                password: ee,
                                                setEmail: $,
                                                setPassword: et,
                                                emailError: ei,
                                                passwordError: el
                                            });
                                        case 1:
                                            return (0, n.jsx)(w, {
                                                headerId: u,
                                                email: Q
                                            });
                                        case 2:
                                            return (0, n.jsx)(Z, {
                                                headerId: u,
                                                guildId: S,
                                                formState: H,
                                                updateFormState: q,
                                                isPreview: P,
                                                useReducedMotion: eh,
                                                disableVerification: em
                                            });
                                    }
                                })()
                            })
                        }),
                        (() => {
                            switch (ef) {
                                case 0:
                                    return (0, n.jsxs)(o.mzw, {
                                        className: T.footer,
                                        children: [
                                            (0, n.jsx)(o.zxk, {
                                                className: T.submitButton,
                                                type: 'submit',
                                                submitting: J,
                                                onClick: eN,
                                                disabled: 0 === Q.length || 0 === ee.length,
                                                children: O.NW.string(O.t.PDTjLC)
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: O.NW.string(O.t['9GPiR0'])
                                            })
                                        ]
                                    });
                                case 1:
                                    return null;
                                case 2:
                                    return (0, n.jsxs)(o.mzw, {
                                        className: T.footer,
                                        children: [
                                            (0, n.jsx)(o.zxk, {
                                                className: T.submitButton,
                                                type: 'submit',
                                                submitting: J,
                                                onClick: eI,
                                                color: o.zxk.Colors.GREEN,
                                                disabled: null == A || eg,
                                                children: O.NW.string(O.t.geKm7u)
                                            }),
                                            null != X &&
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-danger',
                                                    children: X
                                                }),
                                            null == X &&
                                                M &&
                                                (0, n.jsxs)('div', {
                                                    className: T.disclaimerFooter,
                                                    children: [
                                                        (0, n.jsx)(o.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: O.NW.string(O.t['+fPCTU'])
                                                        }),
                                                        es &&
                                                            (0, n.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: O.NW.string(O.t.VjgH0d)
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
