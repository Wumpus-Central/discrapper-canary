t.d(l, {
    Y: () => z,
    Z: () => _
}),
    t(47120),
    t(978209),
    t(266796);
var n = t(200651),
    r = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(442837),
    o = t(481060),
    d = t(893776),
    c = t(809206),
    u = t(607070),
    m = t(600164),
    x = t(339085),
    h = t(565138),
    j = t(650774),
    g = t(271383),
    N = t(594174),
    v = t(626135),
    f = t(768581),
    p = t(944163),
    b = t(246364),
    y = t(983736),
    O = t(187565),
    w = t(990488),
    k = t(592286),
    C = t(981631),
    W = t(388032),
    E = t(916199),
    P = t(419851),
    I = t(296507),
    S = t(866402),
    F = t(246403);
function Z(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (l) {
                var n;
                (n = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[l] = n);
            });
    }
    return e;
}
function T(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
let M = (e) => {
        let { headerId: l, email: t, password: r, setEmail: s, setPassword: i, emailError: a, passwordError: d } = e;
        return (0, n.jsxs)('div', {
            className: E.content,
            children: [
                (0, n.jsx)('div', {
                    className: E.applicationIconContainer,
                    children: (0, n.jsx)('img', {
                        alt: W.NW.string(W.t.ewGfjo),
                        src: P,
                        className: E.applicationIcon
                    })
                }),
                (0, n.jsx)(o.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: W.NW.string(W.t.MhcDLy)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: W.NW.string(W.t.SPlaR0)
                }),
                (0, n.jsx)('hr', { className: E.divider }),
                (0, n.jsx)(o.xJW, {
                    title: W.NW.string(W.t.dI4d4e),
                    className: E.formItem,
                    children: (0, n.jsx)(o.oil, {
                        value: t,
                        error: a,
                        onChange: s,
                        autoFocus: !0
                    })
                }),
                (0, n.jsx)(o.xJW, {
                    title: W.NW.string(W.t['CIGa+/']),
                    className: E.formItem,
                    children: (0, n.jsx)(o.oil, {
                        type: 'password',
                        value: r,
                        error: d,
                        onChange: i
                    })
                })
            ]
        });
    },
    D = (e) => {
        let { headerId: l, email: t } = e;
        return (0, n.jsxs)('div', {
            className: E.content,
            children: [
                (0, n.jsx)('img', {
                    alt: W.NW.string(W.t.wNAbl5),
                    src: F,
                    className: E.applicationIcon
                }),
                (0, n.jsx)(o.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: W.NW.format(W.t.v01XgI, { email: t })
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: W.NW.string(W.t['/Hw5aW'])
                }),
                (0, n.jsx)(o.zxk, {
                    className: E.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => d.Z.verifyResend(),
                    children: W.NW.string(W.t['MLk/mJ'])
                })
            ]
        });
    },
    z = (e) => {
        var l;
        let { guildId: t, formState: r, updateFormState: s, isPreview: i = !1, disableVerification: o = !1 } = e,
            d = (0, a.e7)([p.Z], () => p.Z.get(t));
        if (null == d) return null;
        let c = null != (l = null != r ? r : null == d ? void 0 : d.formFields) ? l : [],
            u = i ? w.W : w.r;
        return (0, n.jsx)(u, {
            guildId: t,
            formFields: c,
            updateFormFields: s,
            disableVerification: o
        });
    },
    L = () =>
        t
            .e('43841')
            .then(t.t.bind(t, 737848, 19))
            .then((e) => {
                let { default: l } = e;
                return l;
            }),
    R = (e) => {
        let { headerId: l, guildId: t, formState: r, updateFormState: s, useReducedMotion: a, disableVerification: d, isPreview: c = !1 } = e;
        return (0, n.jsxs)('div', {
            className: E.content,
            children: [
                (0, n.jsxs)('div', {
                    className: E.animationAndSparklesContainer,
                    children: [
                        (0, n.jsx)('img', {
                            alt: W.NW.string(W.t.VoB8OT),
                            src: S,
                            className: i()(E.sparkleIcon, E.sparkleBottom)
                        }),
                        (0, n.jsx)(o.Fmz, {
                            importData: L,
                            shouldAnimate: !a,
                            className: E.animation
                        }),
                        (0, n.jsx)('img', {
                            alt: W.NW.string(W.t.VoB8OT),
                            src: I,
                            className: i()(E.sparkleIcon, E.sparkleTop)
                        })
                    ]
                }),
                (0, n.jsx)(o.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: W.NW.string(W.t.DrEECw)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: E.subheader,
                    children: W.NW.string(W.t['7D3C5u'])
                }),
                (0, n.jsx)('hr', { className: E.divider }),
                (0, n.jsx)(z, {
                    guildId: t,
                    formState: r,
                    updateFormState: s,
                    isPreview: c,
                    disableVerification: d
                })
            ]
        });
    },
    _ = (e) => {
        var l, t;
        let { verificationForm: s, headerId: d, guildId: w, onClose: P, onComplete: I, isPreview: S = !1 } = e,
            F = null == s ? void 0 : s.guild,
            z = (0, O.N0)(w, F, S),
            L = null == s ? void 0 : s.formFields.some((e) => e.field_type !== b.QJ.TERMS),
            _ = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
            A = null == _ ? void 0 : _.verified,
            V = null == _ ? void 0 : _.isPhoneVerified(),
            B = (0, a.e7)([x.ZP], () => x.ZP.getGuildEmoji(w)),
            { storeMemberCount: X, storeOnlineCount: q } = (0, a.cj)([j.Z], () => ({
                storeMemberCount: j.Z.getMemberCount(w),
                storeOnlineCount: j.Z.getOnlineCount(w)
            })),
            [G, H] = r.useState(null != (l = null == s ? void 0 : s.formFields) ? l : []),
            [J, U] = r.useState(!1),
            [K, Y] = r.useState(null),
            [Q, $] = r.useState(''),
            [ee, el] = r.useState(''),
            [et, en] = r.useState(null),
            [er, es] = r.useState(null),
            ei = null != (t = null == z ? void 0 : z.hasFeature(C.oNc.CLAN)) && t,
            {
                emojisToRender: ea,
                remainingEmojis: eo,
                numGuildEmoji: ed
            } = r.useMemo(() => {
                var e;
                let l = [...(null != (e = 0 === B.length ? (null == F ? void 0 : F.emojis) : B) ? e : [])].reverse(),
                    t = 0,
                    n = l.length;
                return (
                    n > 12 && null != l && (t = Math.min(n - (l = l.slice(0, 11)).length, 99)),
                    {
                        emojisToRender: l,
                        remainingEmojis: t,
                        numGuildEmoji: n
                    }
                );
            }, [F, B]),
            ec = null != X ? X : null == F ? void 0 : F.approximate_member_count,
            eu = null != q ? q : null == F ? void 0 : F.approximate_presence_count,
            em = null != L && L,
            { currentStep: ex, setCurrentStep: eh } = (0, O.k3)(_, em);
        (0, O.lk)(G),
            r.useEffect(() => {
                null != s && H(s.formFields);
            }, [s]),
            r.useEffect(() => {
                null != w &&
                    v.default.track(C.rMx.OPEN_MODAL, {
                        type: k.N4,
                        guild_id: w
                    });
            }, [w]);
        let ej = r.useMemo(() => {
                if (G.some((e) => !(0, y.OA)(e))) return !0;
                if (em || (null == _ ? void 0 : _.isStaff())) return !1;
                switch (null == z ? void 0 : z.verificationLevel) {
                    case C.sFg.VERY_HIGH:
                        return !V;
                    case C.sFg.LOW:
                    case C.sFg.MEDIUM:
                    case C.sFg.HIGH:
                        return !A && !V;
                    case C.sFg.NONE:
                    default:
                        return !1;
                }
            }, [G, z, em, _, V, A]),
            eg = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
        if (null == z) return null;
        let eN = async () => {
                U(!0), en(null), es(null);
                try {
                    await (0, c.S2)({
                        email: Q,
                        password: ee
                    }),
                        U(!1),
                        eh(1);
                } catch (t) {
                    var e, l;
                    en(null == t || null == (e = t.body) ? void 0 : e.email), es(null == t || null == (l = t.body) ? void 0 : l.password);
                } finally {
                    U(!1);
                }
            },
            ev = async () => {
                U(!0), Y(null);
                let e = null != _ ? g.ZP.getMember(w, _.id) : null;
                if (null != e && !e.isPending) {
                    null == P || P(!0);
                    return;
                }
                try {
                    await (null == I ? void 0 : I(T(Z({}, null != s ? s : p.t), { formFields: G }))), null == P || P(!0);
                } catch (n) {
                    var l, t;
                    let e = null == n ? void 0 : n.body;
                    (null == e || null == (l = e.errors) ? void 0 : l.version) != null || (null == e || null == (t = e.errors) ? void 0 : t.form_fields) != null ? Y(W.NW.string(W.t.PD09Sk)) : Y(null == e ? void 0 : e.message);
                } finally {
                    U(!1);
                }
            };
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    justify: m.Z.Justify.BETWEEN,
                    className: E.guildSidebar,
                    shrink: 0,
                    children: [
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(h.Z, {
                                    guild: z,
                                    active: !0,
                                    className: i()(E.guildIcon, { [E.guildIconNoIcon]: null == z.icon })
                                }),
                                (0, n.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: E.guildName,
                                    children: null == z ? void 0 : z.name
                                }),
                                (0, n.jsx)(o.Text, {
                                    className: E.guildDescription,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: null == s ? void 0 : s.description
                                }),
                                null != ea && ea.length > 0
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)('hr', { className: E.divider }),
                                              (0, n.jsx)(o.vwX, { children: W.NW.format(W.t.KHLg5e, { emojis: ed }) }),
                                              (0, n.jsxs)('div', {
                                                  className: E.emojisContainer,
                                                  children: [
                                                      ea.map((e) => {
                                                          let l = f.ZP.getEmojiURL({
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
                                                                          T(Z({}, e), {
                                                                              width: 24,
                                                                              height: 24,
                                                                              src: l,
                                                                              className: E.emoji,
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
                                                                className: E.emoji,
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
                                null != eu &&
                                    (0, n.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        className: E.onlineCount,
                                        children: [
                                            (0, n.jsx)('div', { className: E.dotOnline }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: W.NW.format(W.t['Oj3M6+'], { membersOnline: eu })
                                            })
                                        ]
                                    }),
                                null != ec &&
                                    (0, n.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        children: [
                                            (0, n.jsx)('div', { className: E.dotMembers }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/normal',
                                                children: W.NW.format(W.t.LM4ufX, { members: ec })
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: E.modal,
                    children: [
                        (0, n.jsx)(o.hzk, {
                            className: E.modalContent,
                            children: (0, n.jsx)(o.qBt, {
                                className: i()(E.sequencer, { [E.centerContent]: 2 !== ex }),
                                steps: [0, 1, 2],
                                step: ex,
                                children: (() => {
                                    switch (ex) {
                                        case 0:
                                            return (0, n.jsx)(M, {
                                                headerId: d,
                                                email: Q,
                                                password: ee,
                                                setEmail: $,
                                                setPassword: el,
                                                emailError: et,
                                                passwordError: er
                                            });
                                        case 1:
                                            return (0, n.jsx)(D, {
                                                headerId: d,
                                                email: Q
                                            });
                                        case 2:
                                            return (0, n.jsx)(R, {
                                                headerId: d,
                                                guildId: w,
                                                formState: G,
                                                updateFormState: H,
                                                isPreview: S,
                                                useReducedMotion: eg,
                                                disableVerification: em
                                            });
                                    }
                                })()
                            })
                        }),
                        (() => {
                            switch (ex) {
                                case 0:
                                    return (0, n.jsxs)(o.mzw, {
                                        className: E.footer,
                                        children: [
                                            (0, n.jsx)(o.zxk, {
                                                className: E.submitButton,
                                                type: 'submit',
                                                submitting: J,
                                                onClick: eN,
                                                disabled: 0 === Q.length || 0 === ee.length,
                                                children: W.NW.string(W.t.PDTjLC)
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: W.NW.string(W.t['9GPiR0'])
                                            })
                                        ]
                                    });
                                case 1:
                                    return null;
                                case 2:
                                    return (0, n.jsxs)(o.mzw, {
                                        className: E.footer,
                                        children: [
                                            (0, n.jsx)(o.zxk, {
                                                className: E.submitButton,
                                                type: 'submit',
                                                submitting: J,
                                                onClick: ev,
                                                color: o.zxk.Colors.GREEN,
                                                disabled: null == I || ej,
                                                children: W.NW.string(W.t.geKm7u)
                                            }),
                                            null != K &&
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-danger',
                                                    children: K
                                                }),
                                            null == K &&
                                                L &&
                                                (0, n.jsxs)('div', {
                                                    className: E.disclaimerFooter,
                                                    children: [
                                                        (0, n.jsx)(o.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: W.NW.string(W.t['+fPCTU'])
                                                        }),
                                                        ei &&
                                                            (0, n.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: W.NW.string(W.t.VjgH0d)
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
