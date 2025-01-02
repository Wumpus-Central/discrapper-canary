n.d(t, {
    Y: function () {
        return V;
    }
}),
    n(47120);
var l,
    i,
    s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    d = n(442837),
    u = n(481060),
    c = n(893776),
    m = n(809206),
    f = n(607070),
    g = n(600164),
    x = n(339085),
    h = n(565138),
    v = n(894376),
    j = n(446495),
    p = n(601964),
    N = n(650774),
    I = n(271383),
    C = n(430824),
    F = n(594174),
    E = n(626135),
    M = n(768581),
    T = n(863249),
    b = n(944163),
    S = n(63568),
    y = n(246364),
    L = n(983736),
    Z = n(266395),
    R = n(990488),
    P = n(592286),
    A = n(981631),
    O = n(388032),
    _ = n(832311),
    w = n(419851),
    U = n(296507),
    B = n(866402),
    k = n(246403);
((i = l || (l = {}))[(i.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (i[(i.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (i[(i.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM');
let G = (e) => {
        let { headerId: t, email: n, password: l, setEmail: i, setPassword: r, emailError: a, passwordError: o } = e;
        return (0, s.jsxs)('div', {
            className: _.content,
            children: [
                (0, s.jsx)('div', {
                    className: _.applicationIconContainer,
                    children: (0, s.jsx)('img', {
                        alt: O.intl.string(O.t.ewGfjo),
                        src: w,
                        className: _.applicationIcon
                    })
                }),
                (0, s.jsx)(u.Heading, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: _.header,
                    children: O.intl.string(O.t.MhcDLy)
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: O.intl.string(O.t.SPlaR0)
                }),
                (0, s.jsx)('hr', { className: _.divider }),
                (0, s.jsx)(u.FormItem, {
                    title: O.intl.string(O.t.dI4d4e),
                    className: _.formItem,
                    children: (0, s.jsx)(u.TextInput, {
                        value: n,
                        error: a,
                        onChange: i,
                        autoFocus: !0
                    })
                }),
                (0, s.jsx)(u.FormItem, {
                    title: O.intl.string(O.t['CIGa+/']),
                    className: _.formItem,
                    children: (0, s.jsx)(u.TextInput, {
                        type: 'password',
                        value: l,
                        error: o,
                        onChange: r
                    })
                })
            ]
        });
    },
    H = (e) => {
        let { headerId: t, email: n } = e;
        return (0, s.jsxs)('div', {
            className: _.content,
            children: [
                (0, s.jsx)('img', {
                    alt: O.intl.string(O.t.wNAbl5),
                    src: k,
                    className: _.applicationIcon
                }),
                (0, s.jsx)(u.Heading, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: _.header,
                    children: O.intl.format(O.t.v01XgI, { email: n })
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: O.intl.string(O.t['/Hw5aW'])
                }),
                (0, s.jsx)(u.Button, {
                    className: _.resendButton,
                    size: u.Button.Sizes.NONE,
                    look: u.Button.Looks.LINK,
                    onClick: () => c.Z.verifyResend(),
                    children: O.intl.string(O.t['MLk/mJ'])
                })
            ]
        });
    },
    V = (e) => {
        var t;
        let { guildId: n, formState: l, updateFormState: i, isPreview: r = !1, disableVerification: a = !1 } = e,
            o = (0, d.e7)([b.Z], () => b.Z.get(n));
        if (null == o) return null;
        let u = null !== (t = null != l ? l : null == o ? void 0 : o.formFields) && void 0 !== t ? t : [],
            c = r ? R.W : R.r;
        return (0, s.jsx)(c, {
            guildId: n,
            formFields: u,
            updateFormFields: i,
            disableVerification: a
        });
    },
    z = () =>
        n
            .e('26176')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    D = (e) => {
        let { headerId: t, guildId: n, formState: l, updateFormState: i, useReducedMotion: r, disableVerification: a, isPreview: d = !1 } = e;
        return (0, s.jsxs)('div', {
            className: _.content,
            children: [
                (0, s.jsxs)('div', {
                    className: _.animationAndSparklesContainer,
                    children: [
                        (0, s.jsx)('img', {
                            alt: O.intl.string(O.t.VoB8OT),
                            src: B,
                            className: o()(_.sparkleIcon, _.sparkleBottom)
                        }),
                        (0, s.jsx)(u.LottieAnimation, {
                            importData: z,
                            shouldAnimate: !r,
                            className: _.animation
                        }),
                        (0, s.jsx)('img', {
                            alt: O.intl.string(O.t.VoB8OT),
                            src: U,
                            className: o()(_.sparkleIcon, _.sparkleTop)
                        })
                    ]
                }),
                (0, s.jsx)(u.Heading, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: _.header,
                    children: O.intl.string(O.t.DrEECw)
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: _.subheader,
                    children: O.intl.string(O.t['7D3C5u'])
                }),
                (0, s.jsx)('hr', { className: _.divider }),
                (0, s.jsx)(V, {
                    guildId: n,
                    formState: l,
                    updateFormState: i,
                    isPreview: d,
                    disableVerification: a
                })
            ]
        });
    };
t.Z = (e) => {
    var t, n;
    let { headerId: l, guildId: i, onClose: a, onComplete: c, inviteCode: R, isPreview: w = !1 } = e,
        U = (0, Z.rb)((e) => e.hasUnsubmittedChanges),
        B = (0, d.e7)([C.Z], () => C.Z.getGuild(i)),
        k = (0, d.e7)([b.Z], () => b.Z.get(i)),
        V = (0, S.jS)(i, 'MemberVerificationScreens'),
        z = (0, d.e7)([v.Z], () => v.Z.pendingState),
        J = r.useMemo(() => {
            var e, t;
            let n;
            if (!w || !V) return null;
            if ((null == z ? void 0 : z.joinType) === j.A.APPLY && null != z.pendingVerificationFields) n = [...z.pendingVerificationFields];
            else if ((null == z ? void 0 : z.joinType) === j.A.INVITE && null != z.termRules) {
                let e = z.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
                n = [
                    {
                        field_type: y.QJ.TERMS,
                        label: O.intl.string(O.t['9suSIC']),
                        values: e,
                        required: !0
                    }
                ];
            }
            return null == n
                ? null
                : {
                      version: null !== (e = null == k ? void 0 : k.version) && void 0 !== e ? e : '',
                      description: null !== (t = null == k ? void 0 : k.description) && void 0 !== t ? t : '',
                      formFields: n,
                      guild: null == k ? void 0 : k.guild
                  };
        }, [V, w, z, k]),
        Q = null != J ? J : k,
        q = null == Q ? void 0 : Q.formFields.some((e) => e.field_type !== y.QJ.TERMS),
        W = (0, d.e7)([F.default], () => F.default.getCurrentUser()),
        Y = !(null == W ? void 0 : W.isClaimed()),
        X = null == W ? void 0 : W.verified,
        K = null == W ? void 0 : W.isPhoneVerified(),
        $ = (0, d.e7)([x.ZP], () => x.ZP.getGuildEmoji(i)),
        { storeMemberCount: ee, storeOnlineCount: et } = (0, d.cj)([N.Z], () => ({
            storeMemberCount: N.Z.getMemberCount(i),
            storeOnlineCount: N.Z.getOnlineCount(i)
        })),
        [en, el] = r.useState(null !== (t = null == Q ? void 0 : Q.formFields) && void 0 !== t ? t : []),
        [ei, es] = r.useState(!1),
        [er, ea] = r.useState(null),
        [eo, ed] = r.useState(''),
        [eu, ec] = r.useState(''),
        [em, ef] = r.useState(null),
        [eg, ex] = r.useState(null),
        eh = null == Q ? void 0 : Q.guild,
        ev = r.useMemo(
            () =>
                null != B
                    ? B
                    : null != eh
                      ? new p.ZP({
                            ...eh,
                            verificationLevel: eh.verification_level
                        })
                      : null,
            [B, eh]
        ),
        ej = null !== (n = null == ev ? void 0 : ev.hasFeature(A.oNc.CLAN)) && void 0 !== n && n,
        {
            emojisToRender: ep,
            remainingEmojis: eN,
            numGuildEmoji: eI
        } = r.useMemo(() => {
            var e;
            let t = [...(null !== (e = 0 === $.length ? (null == eh ? void 0 : eh.emojis) : $) && void 0 !== e ? e : [])].reverse(),
                n = 0,
                l = t.length;
            return (
                l > 12 && null != t && (n = Math.min(l - (t = t.slice(0, 11)).length, 99)),
                {
                    emojisToRender: t,
                    remainingEmojis: n,
                    numGuildEmoji: l
                }
            );
        }, [eh, $]),
        eC = null != ee ? ee : null == eh ? void 0 : eh.approximate_member_count,
        eF = null != et ? et : null == eh ? void 0 : eh.approximate_presence_count,
        [eE, eM] = r.useState(!q && Y ? 0 : 2);
    r.useEffect(
        () => (
            (0, Z.a5)(!1),
            () => {
                (0, Z.a5)(!1);
            }
        ),
        []
    ),
        r.useEffect(() => {
            if (!w) T.ZP.fetchVerificationForm(i, R);
        }, [i, R, w]),
        r.useEffect(() => {
            null != Q && el(Q.formFields);
        }, [Q]),
        r.useEffect(() => {
            null != W && W.isClaimed() && eM(2);
        }, [W]),
        r.useEffect(() => {
            1 === eE && X && eM(2);
        }, [eE, X]),
        r.useEffect(() => {
            null != i &&
                E.default.track(A.rMx.OPEN_MODAL, {
                    type: P.N4,
                    guild_id: i
                });
        }, [i]),
        r.useEffect(() => {
            let e = en.some((e) => e.field_type !== y.QJ.TERMS && (0, L.OA)(e));
            e && !U ? (0, Z.a5)(!0) : !e && U && (0, Z.a5)(!1);
        }, [en, U]);
    let eT = r.useMemo(() => {
            if (en.some((e) => !(0, L.OA)(e))) return !0;
            if (q || (null == W ? void 0 : W.isStaff())) return !1;
            switch (null == ev ? void 0 : ev.verificationLevel) {
                case A.sFg.VERY_HIGH:
                    return !K;
                case A.sFg.LOW:
                case A.sFg.MEDIUM:
                case A.sFg.HIGH:
                    return !X && !K;
                case A.sFg.NONE:
                default:
                    return !1;
            }
        }, [en, ev, q, W, K, X]),
        eb = (0, d.e7)([f.Z], () => f.Z.useReducedMotion);
    if (null == ev) return null;
    let eS = async () => {
            es(!0), ef(null), ex(null);
            try {
                await (0, m.S2)({
                    email: eo,
                    password: eu
                }),
                    es(!1),
                    eM(1);
            } catch (n) {
                var e, t;
                ef(null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.email), ex(null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.password);
            } finally {
                es(!1);
            }
        },
        ey = async () => {
            es(!0), ea(null);
            let e = null != W ? I.ZP.getMember(i, W.id) : null;
            if (null != e && !e.isPending) {
                null == a || a(!0);
                return;
            }
            try {
                await (null == c
                    ? void 0
                    : c({
                          ...(null != Q ? Q : b.t),
                          formFields: en
                      })),
                    null == a || a(!0);
            } catch (l) {
                var t, n;
                let e = null == l ? void 0 : l.body;
                (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? ea(O.intl.string(O.t.PD09Sk)) : ea(null == e ? void 0 : e.message);
            } finally {
                es(!1);
            }
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                justify: g.Z.Justify.BETWEEN,
                className: _.guildSidebar,
                shrink: 0,
                children: [
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(h.Z, {
                                guild: ev,
                                active: !0,
                                className: o()(_.guildIcon, { [_.guildIconNoIcon]: null == ev.icon })
                            }),
                            (0, s.jsx)(u.Heading, {
                                variant: 'heading-lg/semibold',
                                className: _.guildName,
                                children: null == ev ? void 0 : ev.name
                            }),
                            (0, s.jsx)(u.Text, {
                                className: _.guildDescription,
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: null == Q ? void 0 : Q.description
                            }),
                            null != ep && ep.length > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)('hr', { className: _.divider }),
                                          (0, s.jsx)(u.FormTitle, { children: O.intl.format(O.t.KHLg5e, { emojis: eI }) }),
                                          (0, s.jsxs)('div', {
                                              className: _.emojisContainer,
                                              children: [
                                                  ep.map((e) => {
                                                      let t = M.ZP.getEmojiURL({
                                                          id: e.id,
                                                          animated: !1,
                                                          size: 24
                                                      });
                                                      return (0, s.jsx)(
                                                          u.Tooltip,
                                                          {
                                                              text: ':'.concat(e.name, ':'),
                                                              children: (e) =>
                                                                  (0, s.jsx)('img', {
                                                                      ...e,
                                                                      width: 24,
                                                                      height: 24,
                                                                      src: t,
                                                                      className: _.emoji,
                                                                      alt: ''
                                                                  })
                                                          },
                                                          e.id
                                                      );
                                                  }),
                                                  null != eN && eN > 0
                                                      ? (0, s.jsx)(u.Heading, {
                                                            variant: 'heading-deprecated-12/semibold',
                                                            className: _.emoji,
                                                            color: 'header-secondary',
                                                            children: '+'.concat(eN)
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
                            null != eF &&
                                (0, s.jsxs)(g.Z, {
                                    align: g.Z.Align.CENTER,
                                    className: _.onlineCount,
                                    children: [
                                        (0, s.jsx)('div', { className: _.dotOnline }),
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: O.intl.format(O.t['Oj3M6+'], { membersOnline: eF })
                                        })
                                    ]
                                }),
                            null != eC &&
                                (0, s.jsxs)(g.Z, {
                                    align: g.Z.Align.CENTER,
                                    children: [
                                        (0, s.jsx)('div', { className: _.dotMembers }),
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: O.intl.format(O.t.LM4ufX, { members: eC })
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: _.modal,
                children: [
                    (0, s.jsx)(u.ModalContent, {
                        className: _.modalContent,
                        children: (0, s.jsx)(u.Sequencer, {
                            className: o()(_.sequencer, { [_.centerContent]: 2 !== eE }),
                            steps: [0, 1, 2],
                            step: eE,
                            children: (() => {
                                switch (eE) {
                                    case 0:
                                        return (0, s.jsx)(G, {
                                            headerId: l,
                                            email: eo,
                                            password: eu,
                                            setEmail: ed,
                                            setPassword: ec,
                                            emailError: em,
                                            passwordError: eg
                                        });
                                    case 1:
                                        return (0, s.jsx)(H, {
                                            headerId: l,
                                            email: eo
                                        });
                                    case 2:
                                        return (0, s.jsx)(D, {
                                            headerId: l,
                                            guildId: i,
                                            formState: en,
                                            updateFormState: el,
                                            isPreview: w,
                                            useReducedMotion: eb,
                                            disableVerification: q
                                        });
                                }
                            })()
                        })
                    }),
                    (() => {
                        switch (eE) {
                            case 0:
                                return (0, s.jsxs)(u.ModalFooter, {
                                    className: _.footer,
                                    children: [
                                        (0, s.jsx)(u.Button, {
                                            className: _.submitButton,
                                            type: 'submit',
                                            submitting: ei,
                                            onClick: eS,
                                            disabled: 0 === eo.length || 0 === eu.length,
                                            children: O.intl.string(O.t.PDTjLC)
                                        }),
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: O.intl.string(O.t['9GPiR0'])
                                        })
                                    ]
                                });
                            case 1:
                                return null;
                            case 2:
                                return (0, s.jsxs)(u.ModalFooter, {
                                    className: _.footer,
                                    children: [
                                        (0, s.jsx)(u.Button, {
                                            className: _.submitButton,
                                            type: 'submit',
                                            submitting: ei,
                                            onClick: ey,
                                            color: u.Button.Colors.GREEN,
                                            disabled: null == c || eT,
                                            children: O.intl.string(O.t.geKm7u)
                                        }),
                                        null != er &&
                                            (0, s.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-danger',
                                                children: er
                                            }),
                                        null == er &&
                                            q &&
                                            (0, s.jsxs)('div', {
                                                className: _.disclaimerFooter,
                                                children: [
                                                    (0, s.jsx)(u.Text, {
                                                        color: 'header-secondary',
                                                        variant: 'text-xs/normal',
                                                        children: O.intl.string(O.t['+fPCTU'])
                                                    }),
                                                    ej &&
                                                        (0, s.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: O.intl.string(O.t.FwXzw8)
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
