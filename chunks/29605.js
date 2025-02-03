n.d(t, {
    FT: () => H,
    L3: () => z,
    ZP: () => W
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    m = n(442837),
    h = n(481060),
    g = n(668781),
    x = n(80932),
    p = n(225433),
    _ = n(327802),
    C = n(110924),
    f = n(200876),
    v = n(730089),
    N = n(372444),
    j = n(889564),
    I = n(372129),
    E = n(357156),
    b = n(210887),
    T = n(626135),
    S = n(768581),
    R = n(176354),
    Z = n(267642),
    y = n(51144),
    A = n(434404),
    L = n(471613),
    D = n(999382),
    O = n(981631),
    k = n(185923),
    P = n(388032),
    w = n(525274),
    M = n(684309);
let U = d().throttle(x.OQ, 1000),
    G = (e) => {
        let { currentTarget: t, which: n } = e;
        13 === n && t.blur();
    },
    B = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: a = !1 } = e,
            [o, c] = r.useState(n.name),
            d = S.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = y.ZP.useUserTag(n.user);
        return (0, i.jsxs)('div', {
            className: s()(w.emojiRow, M.card),
            children: [
                (0, i.jsx)('div', {
                    className: w.emojiColumn,
                    children: (0, i.jsx)(h.ua7, {
                        text: n.available ? null : P.intl.string(P.t['KUzI7+']),
                        children: (e) =>
                            (0, i.jsx)('div', {
                                ...e,
                                className: s()(w.emojiImage, { [w.emojiDisabled]: !n.available }),
                                style: { backgroundImage: 'url('.concat(d, ')') }
                            })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: w.column,
                    children: [
                        (0, i.jsx)(h.oil, {
                            className: s()(w.emojiAliasInput, { [w.emojiAliasInputDisabled]: a }),
                            inputClassName: w.emojiInput,
                            placeholder: P.intl.string(P.t.qUpzYG),
                            onKeyPress: G,
                            onChange: c,
                            onBlur: () => {
                                o !== n.name &&
                                    (0, x.dv)({
                                        guildId: t,
                                        emojiId: n.id,
                                        name: R.ZP.sanitizeEmojiName(o)
                                    });
                            },
                            size: h.oil.Sizes.MINI,
                            value: o,
                            maxLength: k.Yc,
                            disabled: a
                        }),
                        (0, i.jsx)('div', {
                            className: w.emojiAliasPlaceholder,
                            children: (0, i.jsx)('div', {
                                className: w.emojiAliasPlaceholderContent,
                                children: o.length > 0 ? o : P.intl.string(P.t.qUpzYG)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: w.column,
                    children: [
                        (0, i.jsx)(h.qEK, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: h.EFr.SIZE_20
                        }),
                        (0, i.jsx)(h.R94, {
                            className: w.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != l &&
                    !a &&
                    (0, i.jsx)(h.P3F, {
                        'aria-label': P.intl.string(P.t.bt75u7),
                        className: w.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, i.jsx)(h.vdY, {
                            size: 'md',
                            color: 'currentColor',
                            className: w.editEmojiRolesIcon
                        })
                    }),
                !a &&
                    (0, i.jsx)(p.Z, {
                        className: w.emojiRemove,
                        onClick: () => {
                            (0, x.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    g.Z.show({
                                        title: P.intl.string(P.t.iufib2),
                                        body: P.intl.string(P.t['Whhv4+'])
                                    });
                            });
                        }
                    })
            ]
        });
    },
    F = (e) => {
        let { isLoading: t, staticEmojis: r, animatedEmojis: l, theme: s, guild: a } = e;
        return t
            ? (0, i.jsx)(h.$jN, {
                  className: w.spinner,
                  type: h.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === r.length && 0 === l.length
              ? (0, i.jsxs)(h.ubH, {
                    theme: s,
                    className: w.empty,
                    children: [
                        (0, i.jsx)(h.oxh, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, i.jsx)(h.OZU, {
                            note: P.intl.string(P.t.RBbtMz),
                            children: P.intl.string(P.t.lxsmBQ)
                        })
                    ]
                })
              : (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(z, {
                            title: P.intl.string(P.t.sMOuub),
                            maxSlots: a.getMaxEmojiSlots(),
                            emojiCount: r.length
                        }),
                        (0, i.jsx)(H, {
                            emojis: r,
                            guild: a
                        }),
                        (0, i.jsx)(z, {
                            title: P.intl.string(P.t.wWjQyc),
                            maxSlots: a.getMaxEmojiSlots(),
                            emojiCount: l.length
                        }),
                        (0, i.jsx)(H, {
                            emojis: l,
                            guild: a
                        })
                    ]
                });
    },
    z = (e) => {
        let { title: t, maxSlots: n, emojiCount: r } = e;
        return (0, i.jsxs)(h.vwX, {
            tag: h.RB0.H2,
            className: w.title,
            children: [
                t,
                (0, i.jsxs)('span', {
                    children: [' \u2014 ', P.intl.format(P.t.sgL8sL, { count: n - r })]
                })
            ]
        });
    },
    H = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1 } = e,
            a = r.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, E.Gw)(n);
        return 0 === t.length
            ? (0, i.jsx)(h.R94, {
                  type: h.geA.DESCRIPTION,
                  className: w.content,
                  children: P.intl.string(P.t.SpxYoa)
              })
            : (0, i.jsxs)(h.hjN, {
                  className: w.content,
                  children: [
                      (0, i.jsxs)('div', {
                          className: w.emojiTable,
                          children: [
                              (0, i.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: w.emojiColumn,
                                  children: P.intl.string(P.t.Z0i3Gh)
                              }),
                              (0, i.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: w.columnLabel,
                                  children: P.intl.string(P.t.giajw8)
                              }),
                              (0, i.jsx)(h.R94, {
                                  type: h.geA.DESCRIPTION,
                                  className: w.columnLabel,
                                  children: P.intl.string(P.t.edavpq)
                              })
                          ]
                      }),
                      a.map((e) =>
                          (0, i.jsx)(
                              B,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: l,
                                  editingDisabled: s || !o(e)
                              },
                              e.id
                          )
                      )
                  ]
              });
    },
    V = (e) => {
        let t,
            n,
            r,
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = a.getMaxEmojiSlots(),
            c = Math.min(o - l, o - s),
            d = a.premiumTier,
            u = (0, Z.FZ)(d, a.id);
        return null == u || d === O.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = P.intl.formatToPlainString(P.t.j0UH0t, { level: u })), (n = P.intl.formatToPlainString(P.t.VQeyKy, { level: u })), (r = O.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = P.intl.string(P.t.zT9Sxc)), (n = P.intl.formatToPlainString(P.t.dBZ1RU, { level: u })), (r = O.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(N.Z, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: O.ZY5.GUILD_SETTINGS,
                      section: O.jXE.GUILD_SETTINGS_STICKERS,
                      object: r,
                      objectType: (0, Z.ge)(u)
                  }
              }));
    },
    W = () => {
        let e = (0, m.e7)([D.Z], () => D.Z.getGuild()),
            [t, l] = r.useState('');
        o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
        let s = (0, m.e7)([b.Z], () => b.Z.theme),
            { canCreateExpressions: a } = (0, E.XJ)(e),
            { revision: c, emojis: g } = (0, m.cj)([L.Z], () => ({
                revision: L.Z.getEmojiRevision(e.id),
                emojis: L.Z.getEmojis(e.id)
            })),
            x = (0, C.Z)(c),
            [p, N] = r.useState(!1),
            [S, R] = r.useState(!1),
            Z = r.useRef(null);
        r.useEffect(() => {
            p && W();
        }, [p]),
            r.useEffect(() => {
                U(e.id);
            }, [e.id]),
            r.useEffect(() => {
                null != x && x < c && U(e.id);
            }, [c, x, e.id]);
        let [y, M] = r.useMemo(() => {
                let t = null == g ? void 0 : g.filter((t) => !(0, j.Kt)(t, e.id)),
                    [n, i] = d().partition(t, (e) => !e.animated);
                return [n, i];
            }, [g, e.id]),
            G = e.getMaxEmojiSlots(),
            B = Math.max(G - y.length, G - M.length),
            z = (n, i, r) =>
                (0, v.G)({
                    data: n,
                    file: i,
                    image: r,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0
                }),
            H = async (n) => {
                l((0, u.Z)()),
                    T.default.track(O.rMx.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }),
                    await (0, I._)(n, z),
                    N(!0);
            },
            W = () => {
                null !== Z.current && ((0, h.Mr3)(Z.current), (Z.current = null));
            },
            K = async (e) => {
                Z.current = await (0, h.ZDy)(async () => {
                    let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                    return (n) =>
                        (0, i.jsx)(t, {
                            processFiles: () => H(e),
                            ...n
                        });
                });
            },
            Y = (0, f.l)(e);
        return (0, i.jsxs)('div', {
            className: w.emojiSettings,
            children: [
                0 === B
                    ? null
                    : (0, i.jsx)(_.Z, {
                          className: w.emojiUploadContainer,
                          onDrop: K
                      }),
                (0, i.jsxs)(h.hjN, {
                    tag: h.RB0.H1,
                    title: P.intl.string(P.t.sMOuub),
                    children: [
                        (0, i.jsx)(V, {
                            guild: e,
                            staticEmojiCount: y.length,
                            animatedEmojiCount: M.length
                        }),
                        (0, i.jsxs)(h.hjN, {
                            className: w.uploader,
                            children: [
                                (0, i.jsx)(h.R94, {
                                    type: h.geA.DESCRIPTION,
                                    children: P.intl.format(P.t.TA1BR0, { count: G })
                                }),
                                Y &&
                                    (0, i.jsx)(h.R94, {
                                        type: h.geA.DESCRIPTION,
                                        children: P.intl.format(P.t.uMkfTk, { onClick: () => A.Z.open(e.id, O.pNK.ROLE_SUBSCRIPTIONS, void 0, O.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                    }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(h.vwX, {
                                            tag: h.RB0.H2,
                                            className: w.emojiUploadUploadRequirementsHeading,
                                            children: P.intl.string(P.t.jrXfy8)
                                        }),
                                        (0, i.jsxs)('ul', {
                                            className: w.emojiUploadUploadRequirementsList,
                                            children: [
                                                (0, i.jsx)('li', {
                                                    children: (0, i.jsx)(h.R94, {
                                                        type: h.geA.DESCRIPTION,
                                                        children: P.intl.string(P.t.N2qTQ0)
                                                    })
                                                }),
                                                (0, i.jsx)('li', {
                                                    children: (0, i.jsx)(h.R94, {
                                                        type: h.geA.DESCRIPTION,
                                                        children: P.intl.format(P.t.gfAXoa, { maxSize: k.xG })
                                                    })
                                                }),
                                                (0, i.jsx)('li', {
                                                    children: (0, i.jsx)(h.R94, {
                                                        type: h.geA.DESCRIPTION,
                                                        children: P.intl.string(P.t.rnwKPD)
                                                    })
                                                }),
                                                (0, i.jsx)('li', {
                                                    children: (0, i.jsx)(h.R94, {
                                                        type: h.geA.DESCRIPTION,
                                                        children: P.intl.string(P.t['8Vr5QU'])
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(h.zxk, {
                                    tabIndex: -1,
                                    size: h.zxk.Sizes.MEDIUM,
                                    onClick: () => {
                                        let t = (0, u.Z)();
                                        l(t),
                                            T.default.track(O.rMx.EMOJI_UPLOAD_STARTED, {
                                                guild_id: e.id,
                                                upload_id: t
                                            });
                                    },
                                    disabled: S || 0 === B || !a,
                                    submitting: S,
                                    focusProps: { within: !0 },
                                    children: [
                                        P.intl.string(P.t.DU0dy8),
                                        B > 0
                                            ? (0, i.jsx)(I.Z, {
                                                  disabled: S || 0 === B || !a,
                                                  tabIndex: 0,
                                                  onChange: z,
                                                  setLoading: R,
                                                  multiple: !0
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(F, {
                            isLoading: null == g,
                            staticEmojis: y,
                            animatedEmojis: M,
                            guild: e,
                            theme: s
                        })
                    ]
                })
            ]
        });
    };
