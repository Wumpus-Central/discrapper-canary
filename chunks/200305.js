n.d(t, { Z: () => D }), n(388685), n(583741), n(953529);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(893776),
    d = n(809206),
    u = n(607070),
    m = n(600164),
    x = n(339085),
    h = n(565138),
    b = n(650774),
    g = n(271383),
    f = n(594174),
    p = n(626135),
    j = n(768581),
    _ = n(944163),
    v = n(246364),
    N = n(983736),
    C = n(187565),
    y = n(990488),
    I = n(592286),
    k = n(981631),
    w = n(388032),
    T = n(916199),
    O = n(419851),
    W = n(296507),
    B = n(866402),
    E = n(246403);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (e) => {
        let { headerId: t, email: n, password: r, setEmail: l, setPassword: o, emailError: a, passwordError: c } = e;
        return (0, i.jsxs)('div', {
            className: T.content,
            children: [
                (0, i.jsx)('div', {
                    className: T.applicationIconContainer,
                    children: (0, i.jsx)('img', {
                        alt: w.NW.string(w.t.ewGfjo),
                        src: O,
                        className: T.applicationIcon
                    })
                }),
                (0, i.jsx)(s.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: T.header,
                    children: w.NW.string(w.t.MhcDLy)
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: w.NW.string(w.t.SPlaR0)
                }),
                (0, i.jsx)('hr', { className: T.divider }),
                (0, i.jsx)(s.xJW, {
                    title: w.NW.string(w.t.dI4d4e),
                    className: T.formItem,
                    children: (0, i.jsx)(s.oil, {
                        value: n,
                        error: a,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, i.jsx)(s.xJW, {
                    title: w.NW.string(w.t['CIGa+/']),
                    className: T.formItem,
                    children: (0, i.jsx)(s.oil, {
                        type: 'password',
                        value: r,
                        error: c,
                        onChange: o
                    })
                })
            ]
        });
    },
    R = (e) => {
        let { headerId: t, email: n } = e;
        return (0, i.jsxs)('div', {
            className: T.content,
            children: [
                (0, i.jsx)('img', {
                    alt: w.NW.string(w.t.wNAbl5),
                    src: E,
                    className: T.applicationIcon
                }),
                (0, i.jsx)(s.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: T.header,
                    children: w.NW.format(w.t.v01XgI, { email: n })
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: w.NW.string(w.t['/Hw5aW'])
                }),
                (0, i.jsx)(s.zxk, {
                    className: T.resendButton,
                    size: s.zxk.Sizes.NONE,
                    look: s.zxk.Looks.LINK,
                    onClick: () => c.Z.verifyResend(),
                    children: w.NW.string(w.t['MLk/mJ'])
                })
            ]
        });
    },
    q = (e) => {
        var t;
        let { guildId: n, formState: r, updateFormState: l, isPreview: o = !1, disableVerification: s = !1 } = e,
            c = (0, a.e7)([_.Z], () => _.Z.get(n));
        if (null == c) return null;
        let d = null != (t = null != r ? r : null == c ? void 0 : c.formFields) ? t : [],
            u = o ? y.W : y.r;
        return (0, i.jsx)(u, {
            guildId: n,
            formFields: d,
            updateFormFields: l,
            disableVerification: s
        });
    },
    M = () =>
        n
            .e('43841')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    Z = (e) => {
        let { headerId: t, guildId: n, formState: r, updateFormState: l, useReducedMotion: a, disableVerification: c, isPreview: d = !1 } = e;
        return (0, i.jsxs)('div', {
            className: T.content,
            children: [
                (0, i.jsxs)('div', {
                    className: T.animationAndSparklesContainer,
                    children: [
                        (0, i.jsx)('img', {
                            alt: w.NW.string(w.t.VoB8OT),
                            src: B,
                            className: o()(T.sparkleIcon, T.sparkleBottom)
                        }),
                        (0, i.jsx)(s.Fmz, {
                            importData: M,
                            shouldAnimate: !a,
                            className: T.animation
                        }),
                        (0, i.jsx)('img', {
                            alt: w.NW.string(w.t.VoB8OT),
                            src: W,
                            className: o()(T.sparkleIcon, T.sparkleTop)
                        })
                    ]
                }),
                (0, i.jsx)(s.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: T.header,
                    children: w.NW.string(w.t.DrEECw)
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: T.subheader,
                    children: w.NW.string(w.t['7D3C5u'])
                }),
                (0, i.jsx)('hr', { className: T.divider }),
                (0, i.jsx)(q, {
                    guildId: n,
                    formState: r,
                    updateFormState: l,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    D = (e) => {
        var t, n;
        let { verificationForm: l, headerId: c, guildId: y, onClose: O, onComplete: W, isPreview: B = !1 } = e,
            E = null == l ? void 0 : l.guild,
            q = (0, C.N0)(y, E, B),
            M = null == l ? void 0 : l.formFields.some((e) => e.field_type !== v.QJ.TERMS),
            D = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            L = null == D ? void 0 : D.verified,
            z = null == D ? void 0 : D.isPhoneVerified(),
            A = (0, a.e7)([x.ZP], () => x.ZP.getGuildEmoji(y)),
            { storeMemberCount: X, storeOnlineCount: V } = (0, a.cj)([b.Z], () => ({
                storeMemberCount: b.Z.getMemberCount(y),
                storeOnlineCount: b.Z.getOnlineCount(y)
            })),
            [H, G] = r.useState(null != (t = null == l ? void 0 : l.formFields) ? t : []),
            [U, J] = r.useState(!1),
            [K, Q] = r.useState(null),
            [Y, $] = r.useState(''),
            [ee, et] = r.useState(''),
            [en, ei] = r.useState(null),
            [er, el] = r.useState(null),
            eo = null != (n = null == q ? void 0 : q.hasFeature(k.oNc.CLAN)) && n,
            {
                emojisToRender: ea,
                remainingEmojis: es,
                numGuildEmoji: ec
            } = r.useMemo(() => {
                var e;
                let t = [...(null != (e = 0 === A.length ? (null == E ? void 0 : E.emojis) : A) ? e : [])].reverse(),
                    n = 0,
                    i = t.length;
                return (
                    i > 12 && null != t && (n = Math.min(i - (t = t.slice(0, 11)).length, 99)),
                    {
                        emojisToRender: t,
                        remainingEmojis: n,
                        numGuildEmoji: i
                    }
                );
            }, [E, A]),
            ed = null != X ? X : null == E ? void 0 : E.approximate_member_count,
            eu = null != V ? V : null == E ? void 0 : E.approximate_presence_count,
            em = null != M && M,
            { currentStep: ex, setCurrentStep: eh } = (0, C.k3)(D, em);
        (0, C.lk)(H),
            r.useEffect(() => {
                null != l && G(l.formFields);
            }, [l]),
            r.useEffect(() => {
                null != y &&
                    p.default.track(k.rMx.OPEN_MODAL, {
                        type: I.N4,
                        guild_id: y
                    });
            }, [y]);
        let eb = r.useMemo(() => {
                if (H.some((e) => !(0, N.OA)(e))) return !0;
                if (em || (null == D ? void 0 : D.isStaff())) return !1;
                switch (null == q ? void 0 : q.verificationLevel) {
                    case k.sFg.VERY_HIGH:
                        return !z;
                    case k.sFg.LOW:
                    case k.sFg.MEDIUM:
                    case k.sFg.HIGH:
                        return !L && !z;
                    case k.sFg.NONE:
                    default:
                        return !1;
                }
            }, [H, q, em, D, z, L]),
            eg = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
        if (null == q) return null;
        let ef = async () => {
                J(!0), ei(null), el(null);
                try {
                    await (0, d.S2)({
                        email: Y,
                        password: ee
                    }),
                        J(!1),
                        eh(1);
                } catch (n) {
                    var e, t;
                    ei(null == n || null == (e = n.body) ? void 0 : e.email), el(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    J(!1);
                }
            },
            ep = async () => {
                J(!0), Q(null);
                let e = null != D ? g.ZP.getMember(y, D.id) : null;
                if (null != e && !e.isPending) {
                    null == O || O(!0);
                    return;
                }
                try {
                    await (null == W ? void 0 : W(F(S({}, null != l ? l : _.t), { formFields: H }))), null == O || O(!0);
                } catch (i) {
                    var t, n;
                    let e = null == i ? void 0 : i.body;
                    (null == e || null == (t = e.errors) ? void 0 : t.version) != null || (null == e || null == (n = e.errors) ? void 0 : n.form_fields) != null ? Q(w.NW.string(w.t.PD09Sk)) : Q(null == e ? void 0 : e.message);
                } finally {
                    J(!1);
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    justify: m.Z.Justify.BETWEEN,
                    className: T.guildSidebar,
                    shrink: 0,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(h.Z, {
                                    guild: q,
                                    active: !0,
                                    className: o()(T.guildIcon, { [T.guildIconNoIcon]: null == q.icon })
                                }),
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: T.guildName,
                                    children: null == q ? void 0 : q.name
                                }),
                                (0, i.jsx)(s.Text, {
                                    className: T.guildDescription,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: null == l ? void 0 : l.description
                                }),
                                null != ea && ea.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('hr', { className: T.divider }),
                                              (0, i.jsx)(s.vwX, { children: w.NW.format(w.t.KHLg5e, { emojis: ec }) }),
                                              (0, i.jsxs)('div', {
                                                  className: T.emojisContainer,
                                                  children: [
                                                      ea.map((e) => {
                                                          let t = j.ZP.getEmojiURL({
                                                              id: e.id,
                                                              animated: !1,
                                                              size: 24
                                                          });
                                                          return (0, i.jsx)(
                                                              s.ua7,
                                                              {
                                                                  text: ':'.concat(e.name, ':'),
                                                                  children: (e) =>
                                                                      (0, i.jsx)(
                                                                          'img',
                                                                          F(S({}, e), {
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
                                                      null != es && es > 0
                                                          ? (0, i.jsx)(s.X6q, {
                                                                variant: 'heading-deprecated-12/semibold',
                                                                className: T.emoji,
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
                        (0, i.jsxs)('div', {
                            children: [
                                null != eu &&
                                    (0, i.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        className: T.onlineCount,
                                        children: [
                                            (0, i.jsx)('div', { className: T.dotOnline }),
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-sm/normal',
                                                children: w.NW.format(w.t['Oj3M6+'], { membersOnline: eu })
                                            })
                                        ]
                                    }),
                                null != ed &&
                                    (0, i.jsxs)(m.Z, {
                                        align: m.Z.Align.CENTER,
                                        children: [
                                            (0, i.jsx)('div', { className: T.dotMembers }),
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-sm/normal',
                                                children: w.NW.format(w.t.LM4ufX, { members: ed })
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: T.modal,
                    children: [
                        (0, i.jsx)(s.hzk, {
                            className: T.modalContent,
                            children: (0, i.jsx)(s.qBt, {
                                className: o()(T.sequencer, { [T.centerContent]: 2 !== ex }),
                                steps: [0, 1, 2],
                                step: ex,
                                children: (() => {
                                    switch (ex) {
                                        case 0:
                                            return (0, i.jsx)(P, {
                                                headerId: c,
                                                email: Y,
                                                password: ee,
                                                setEmail: $,
                                                setPassword: et,
                                                emailError: en,
                                                passwordError: er
                                            });
                                        case 1:
                                            return (0, i.jsx)(R, {
                                                headerId: c,
                                                email: Y
                                            });
                                        case 2:
                                            return (0, i.jsx)(Z, {
                                                headerId: c,
                                                guildId: y,
                                                formState: H,
                                                updateFormState: G,
                                                isPreview: B,
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
                                    return (0, i.jsxs)(s.mzw, {
                                        className: T.footer,
                                        children: [
                                            (0, i.jsx)(s.zxk, {
                                                className: T.submitButton,
                                                type: 'submit',
                                                submitting: U,
                                                onClick: ef,
                                                disabled: 0 === Y.length || 0 === ee.length,
                                                children: w.NW.string(w.t.PDTjLC)
                                            }),
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: w.NW.string(w.t['9GPiR0'])
                                            })
                                        ]
                                    });
                                case 1:
                                    return null;
                                case 2:
                                    return (0, i.jsxs)(s.mzw, {
                                        className: T.footer,
                                        children: [
                                            (0, i.jsx)(s.zxk, {
                                                className: T.submitButton,
                                                type: 'submit',
                                                submitting: U,
                                                onClick: ep,
                                                color: s.zxk.Colors.GREEN,
                                                disabled: null == W || eb,
                                                children: w.NW.string(w.t.geKm7u)
                                            }),
                                            null != K &&
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-danger',
                                                    children: K
                                                }),
                                            null == K &&
                                                M &&
                                                (0, i.jsxs)('div', {
                                                    className: T.disclaimerFooter,
                                                    children: [
                                                        (0, i.jsx)(s.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: w.NW.string(w.t['+fPCTU'])
                                                        }),
                                                        eo &&
                                                            (0, i.jsx)(s.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: w.NW.string(w.t.VjgH0d)
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
