l.d(t, { Z: () => X }), l(388685), l(583741), l(953529);
var s = l(200651),
    n = l(192379),
    r = l(120356),
    i = l.n(r),
    a = l(442837),
    o = l(481060),
    c = l(893776),
    d = l(809206),
    u = l(607070),
    m = l(600164),
    x = l(339085),
    h = l(565138),
    g = l(650774),
    j = l(271383),
    v = l(594174),
    N = l(626135),
    f = l(768581),
    p = l(944163),
    b = l(246364),
    y = l(983736),
    O = l(187565),
    E = l(990488),
    W = l(592286),
    w = l(981631),
    C = l(388032),
    k = l(916199),
    P = l(419851),
    S = l(296507),
    I = l(866402),
    T = l(246403);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                (s = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, s);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
let M = (e) => {
        let { headerId: t, email: l, password: n, setEmail: r, setPassword: i, emailError: a, passwordError: c } = e;
        return (0, s.jsxs)('div', {
            className: k.content,
            children: [
                (0, s.jsx)('div', {
                    className: k.applicationIconContainer,
                    children: (0, s.jsx)('img', {
                        alt: C.NW.string(C.t.ewGfjo),
                        src: P,
                        className: k.applicationIcon
                    })
                }),
                (0, s.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: k.header,
                    children: C.NW.string(C.t.MhcDLy)
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: C.NW.string(C.t.SPlaR0)
                }),
                (0, s.jsx)('hr', { className: k.divider }),
                (0, s.jsx)(o.xJW, {
                    title: C.NW.string(C.t.dI4d4e),
                    className: k.formItem,
                    children: (0, s.jsx)(o.oil, {
                        value: l,
                        error: a,
                        onChange: r,
                        autoFocus: !0
                    })
                }),
                (0, s.jsx)(o.xJW, {
                    title: C.NW.string(C.t['CIGa+/']),
                    className: k.formItem,
                    children: (0, s.jsx)(o.oil, {
                        type: 'password',
                        value: n,
                        error: c,
                        onChange: i
                    })
                })
            ]
        });
    },
    D = (e) => {
        let { headerId: t, email: l } = e;
        return (0, s.jsxs)('div', {
            className: k.content,
            children: [
                (0, s.jsx)('img', {
                    alt: C.NW.string(C.t.wNAbl5),
                    src: T,
                    className: k.applicationIcon
                }),
                (0, s.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: k.header,
                    children: C.NW.format(C.t.v01XgI, { email: l })
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: C.NW.string(C.t['/Hw5aW'])
                }),
                (0, s.jsx)(o.zxk, {
                    className: k.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => c.Z.verifyResend(),
                    children: C.NW.string(C.t['MLk/mJ'])
                })
            ]
        });
    },
    R = (e) => {
        var t;
        let { guildId: l, formState: n, updateFormState: r, isPreview: i = !1, disableVerification: o = !1 } = e,
            c = (0, a.e7)([p.Z], () => p.Z.get(l));
        if (null == c) return null;
        let d = null != (t = null != n ? n : null == c ? void 0 : c.formFields) ? t : [],
            u = i ? E.W : E.r;
        return (0, s.jsx)(u, {
            guildId: l,
            formFields: d,
            updateFormFields: r,
            disableVerification: o
        });
    },
    z = () =>
        l
            .e('43841')
            .then(l.t.bind(l, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    L = (e) => {
        let { headerId: t, guildId: l, formState: n, updateFormState: r, useReducedMotion: a, disableVerification: c, isPreview: d = !1 } = e;
        return (0, s.jsxs)('div', {
            className: k.content,
            children: [
                (0, s.jsxs)('div', {
                    className: k.animationAndSparklesContainer,
                    children: [
                        (0, s.jsx)('img', {
                            alt: C.NW.string(C.t.VoB8OT),
                            src: I,
                            className: i()(k.sparkleIcon, k.sparkleBottom)
                        }),
                        (0, s.jsx)(o.Fmz, {
                            importData: z,
                            shouldAnimate: !a,
                            className: k.animation
                        }),
                        (0, s.jsx)('img', {
                            alt: C.NW.string(C.t.VoB8OT),
                            src: S,
                            className: i()(k.sparkleIcon, k.sparkleTop)
                        })
                    ]
                }),
                (0, s.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: k.header,
                    children: C.NW.string(C.t.DrEECw)
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: k.subheader,
                    children: C.NW.string(C.t['7D3C5u'])
                }),
                (0, s.jsx)('hr', { className: k.divider }),
                (0, s.jsx)(R, {
                    guildId: l,
                    formState: n,
                    updateFormState: r,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    X = (e) => {
        var t, l;
        let { verificationForm: r, headerId: c, guildId: E, onClose: P, onComplete: S, isPreview: I = !1 } = e,
            T = null == r ? void 0 : r.guild,
            R = (0, O.N0)(E, T, I),
            z = null == r ? void 0 : r.formFields.some((e) => e.field_type !== b.QJ.TERMS),
            X = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
            _ = null == X ? void 0 : X.verified,
            B = null == X ? void 0 : X.isPhoneVerified(),
            A = (0, a.e7)([x.ZP], () => x.ZP.getGuildEmoji(E)),
            { storeMemberCount: V, storeOnlineCount: H } = (0, a.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(E),
                storeOnlineCount: g.Z.getOnlineCount(E)
            })),
            [q, G] = n.useState(null != (t = null == r ? void 0 : r.formFields) ? t : []),
            [U, J] = n.useState(!1),
            [K, Y] = n.useState(null),
            [Q, $] = n.useState(''),
            [ee, et] = n.useState(''),
            [el, es] = n.useState(null),
            [en, er] = n.useState(null),
            ei = null != (l = null == R ? void 0 : R.hasFeature(w.oNc.CLAN)) && l,
            {
                emojisToRender: ea,
                remainingEmojis: eo,
                numGuildEmoji: ec
            } = n.useMemo(() => {
                var e;
                let t = [...(null != (e = 0 === A.length ? (null == T ? void 0 : T.emojis) : A) ? e : [])].reverse(),
                    l = 0,
                    s = t.length;
                return (
                    s > 12 && null != t && (l = Math.min(s - (t = t.slice(0, 11)).length, 99)),
                    {
                        emojisToRender: t,
                        remainingEmojis: l,
                        numGuildEmoji: s
                    }
                );
            }, [T, A]),
            ed = null != V ? V : null == T ? void 0 : T.approximate_member_count,
            eu = null != H ? H : null == T ? void 0 : T.approximate_presence_count,
            em = null != z && z,
            { currentStep: ex, setCurrentStep: eh } = (0, O.k3)(X, em);
        (0, O.lk)(q),
            n.useEffect(() => {
                null != r && G(r.formFields);
            }, [r]),
            n.useEffect(() => {
                null != E &&
                    N.default.track(w.rMx.OPEN_MODAL, {
                        type: W.N4,
                        guild_id: E
                    });
            }, [E]);
        let eg = n.useMemo(() => {
                if (q.some((e) => !(0, y.OA)(e))) return !0;
                if (em || (null == X ? void 0 : X.isStaff())) return !1;
                switch (null == R ? void 0 : R.verificationLevel) {
                    case w.sFg.VERY_HIGH:
                        return !B;
                    case w.sFg.LOW:
                    case w.sFg.MEDIUM:
                    case w.sFg.HIGH:
                        return !_ && !B;
                    case w.sFg.NONE:
                    default:
                        return !1;
                }
            }, [q, R, em, X, B, _]),
            ej = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
        if (null == R) return null;
        let ev = async () => {
                J(!0), es(null), er(null);
                try {
                    await (0, d.S2)({
                        email: Q,
                        password: ee
                    }),
                        J(!1),
                        eh(1);
                } catch (l) {
                    var e, t;
                    es(null == l || null == (e = l.body) ? void 0 : e.email), er(null == l || null == (t = l.body) ? void 0 : t.password);
                } finally {
                    J(!1);
                }
            },
            eN = async () => {
                J(!0), Y(null);
                let e = null != X ? j.ZP.getMember(E, X.id) : null;
                if (null != e && !e.isPending) {
                    null == P || P(!0);
                    return;
                }
                try {
                    await (null == S ? void 0 : S(Z(F({}, null != r ? r : p.t), { formFields: q }))), null == P || P(!0);
                } catch (s) {
                    var t, l;
                    let e = null == s ? void 0 : s.body;
                    (null == e || null == (t = e.errors) ? void 0 : t.version) != null || (null == e || null == (l = e.errors) ? void 0 : l.form_fields) != null ? Y(C.NW.string(C.t.PD09Sk)) : Y(null == e ? void 0 : e.message);
                } finally {
                    J(!1);
                }
            };
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    justify: m.Z.Justify.BETWEEN,
                    className: k.guildSidebar,
                    shrink: 0,
                    children: [
                        (0, s.jsxs)('div', {
                            children: [
                                (0, s.jsx)(h.Z, {
                                    guild: R,
                                    active: !0,
                                    className: i()(k.guildIcon, { [k.guildIconNoIcon]: null == R.icon })
                                }),
                                (0, s.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: k.guildName,
                                    children: null == R ? void 0 : R.name
                                }),
                                (0, s.jsx)(o.Text, {
                                    className: k.guildDescription,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: null == r ? void 0 : r.description
                                }),
                                null != ea && ea.length > 0
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)('hr', { className: k.divider }),
                                              (0, s.jsx)(o.vwX, { children: C.NW.format(C.t.KHLg5e, { emojis: ec }) }),
                                              (0, s.jsxs)('div', {
                                                  className: k.emojisContainer,
                                                  children: [
                                                      ea.map((e) => {
                                                          let t = f.ZP.getEmojiURL({
                                                              id: e.id,
                                                              animated: !1,
                                                              size: 24
                                                          });
                                                          return (0, s.jsx)(
                                                              o.ua7,
                                                              {
                                                                  text: ':'.concat(e.name, ':'),
                                                                  children: (e) =>
                                                                      (0, s.jsx)(
                                                                          'img',
                                                                          Z(F({}, e), {
                                                                              width: 24,
                                                                              height: 24,
                                                                              src: t,
                                                                              className: k.emoji,
                                                                              alt: ''
                                                                          })
                                                                      )
                                                              },
                                                              e.id
                                                          );
                                                      }),
                                                      null != eo && eo > 0
                                                          ? (0, s.jsx)(o.X6q, {
                                                                variant: 'heading-deprecated-12/semibold',
                                                                className: k.emoji,
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
                        (0, s.jsxs)('div', {
                            children: [
                                null != eu &&
                                    (0, s.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        className: k.onlineCount,
                                        children: [
                                            (0, s.jsx)('div', { className: k.dotOnline }),
                                            (0, s.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: C.NW.format(C.t['Oj3M6+'], { membersOnline: eu })
                                            })
                                        ]
                                    }),
                                null != ed &&
                                    (0, s.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        children: [
                                            (0, s.jsx)('div', { className: k.dotMembers }),
                                            (0, s.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: C.NW.format(C.t.LM4ufX, { members: ed })
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: k.modal,
                    children: [
                        (0, s.jsx)(o.hzk, {
                            className: k.modalContent,
                            children: (0, s.jsx)(o.qBt, {
                                className: i()(k.sequencer, { [k.centerContent]: 2 !== ex }),
                                steps: [0, 1, 2],
                                step: ex,
                                children: (() => {
                                    switch (ex) {
                                        case 0:
                                            return (0, s.jsx)(M, {
                                                headerId: c,
                                                email: Q,
                                                password: ee,
                                                setEmail: $,
                                                setPassword: et,
                                                emailError: el,
                                                passwordError: en
                                            });
                                        case 1:
                                            return (0, s.jsx)(D, {
                                                headerId: c,
                                                email: Q
                                            });
                                        case 2:
                                            return (0, s.jsx)(L, {
                                                headerId: c,
                                                guildId: E,
                                                formState: q,
                                                updateFormState: G,
                                                isPreview: I,
                                                useReducedMotion: ej,
                                                disableVerification: em
                                            });
                                    }
                                })()
                            })
                        }),
                        (() => {
                            switch (ex) {
                                case 0:
                                    return (0, s.jsxs)(o.mzw, {
                                        className: k.footer,
                                        children: [
                                            (0, s.jsx)(o.zxk, {
                                                className: k.submitButton,
                                                type: 'submit',
                                                submitting: U,
                                                onClick: ev,
                                                disabled: 0 === Q.length || 0 === ee.length,
                                                children: C.NW.string(C.t.PDTjLC)
                                            }),
                                            (0, s.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: C.NW.string(C.t['9GPiR0'])
                                            })
                                        ]
                                    });
                                case 1:
                                    return null;
                                case 2:
                                    return (0, s.jsxs)(o.mzw, {
                                        className: k.footer,
                                        children: [
                                            (0, s.jsx)(o.zxk, {
                                                className: k.submitButton,
                                                type: 'submit',
                                                submitting: U,
                                                onClick: eN,
                                                color: o.zxk.Colors.GREEN,
                                                disabled: null == S || eg,
                                                children: C.NW.string(C.t.geKm7u)
                                            }),
                                            null != K &&
                                                (0, s.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-danger',
                                                    children: K
                                                }),
                                            null == K &&
                                                z &&
                                                (0, s.jsxs)('div', {
                                                    className: k.disclaimerFooter,
                                                    children: [
                                                        (0, s.jsx)(o.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: C.NW.string(C.t['+fPCTU'])
                                                        }),
                                                        ei &&
                                                            (0, s.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: C.NW.string(C.t.VjgH0d)
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
