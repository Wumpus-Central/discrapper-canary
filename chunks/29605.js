n.d(t, {
    FT: function () {
        return z;
    },
    L3: function () {
        return H;
    }
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
    f = n(327802),
    C = n(110924),
    v = n(200876),
    N = n(730089),
    _ = n(372444),
    I = n(889564),
    T = n(372129),
    j = n(357156),
    b = n(210887),
    E = n(626135),
    S = n(768581),
    R = n(176354),
    y = n(267642),
    A = n(51144),
    Z = n(434404),
    L = n(471613),
    D = n(999382),
    O = n(981631),
    M = n(185923),
    k = n(388032),
    P = n(525274),
    w = n(684309);
let B = d().throttle(x.OQ, 1000),
    U = (e) => {
        let { currentTarget: t, which: n } = e;
        13 === n && t.blur();
    },
    G = (e) => {
        let { guildId: t, emoji: n, onEdit: l, editingDisabled: a = !1 } = e,
            [o, c] = r.useState(n.name),
            d = S.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = A.ZP.useUserTag(n.user);
        return (0, i.jsxs)('div', {
            className: s()(P.emojiRow, w.card),
            children: [
                (0, i.jsx)('div', {
                    className: P.emojiColumn,
                    children: (0, i.jsx)(h.Tooltip, {
                        text: n.available ? null : k.intl.string(k.t['KUzI7+']),
                        children: (e) =>
                            (0, i.jsx)('div', {
                                ...e,
                                className: s()(P.emojiImage, { [P.emojiDisabled]: !n.available }),
                                style: { backgroundImage: 'url('.concat(d, ')') }
                            })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: P.column,
                    children: [
                        (0, i.jsx)(h.TextInput, {
                            className: s()(P.emojiAliasInput, { [P.emojiAliasInputDisabled]: a }),
                            inputClassName: P.emojiInput,
                            placeholder: k.intl.string(k.t.qUpzYG),
                            onKeyPress: U,
                            onChange: c,
                            onBlur: () => {
                                o !== n.name &&
                                    (0, x.dv)({
                                        guildId: t,
                                        emojiId: n.id,
                                        name: R.ZP.sanitizeEmojiName(o)
                                    });
                            },
                            size: h.TextInput.Sizes.MINI,
                            value: o,
                            maxLength: M.Yc,
                            disabled: a
                        }),
                        (0, i.jsx)('div', {
                            className: P.emojiAliasPlaceholder,
                            children: (0, i.jsx)('div', {
                                className: P.emojiAliasPlaceholderContent,
                                children: o.length > 0 ? o : k.intl.string(k.t.qUpzYG)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: P.column,
                    children: [
                        (0, i.jsx)(h.Avatar, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: h.AvatarSizes.SIZE_20
                        }),
                        (0, i.jsx)(h.FormText, {
                            className: P.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != l &&
                    !a &&
                    (0, i.jsx)(h.Clickable, {
                        'aria-label': k.intl.string(k.t.bt75u7),
                        className: P.editEmojiRolesButton,
                        onClick: () => l(n, t),
                        children: (0, i.jsx)(h.PencilIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: P.editEmojiRolesIcon
                        })
                    }),
                !a &&
                    (0, i.jsx)(p.Z, {
                        className: P.emojiRemove,
                        onClick: () => {
                            (0, x.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    g.Z.show({
                                        title: k.intl.string(k.t.iufib2),
                                        body: k.intl.string(k.t['Whhv4+'])
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
            ? (0, i.jsx)(h.Spinner, {
                  className: P.spinner,
                  type: h.Spinner.Type.SPINNING_CIRCLE
              })
            : 0 === r.length && 0 === l.length
              ? (0, i.jsxs)(h.EmptyState, {
                    theme: s,
                    className: P.empty,
                    children: [
                        (0, i.jsx)(h.EmptyStateImage, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, i.jsx)(h.EmptyStateText, {
                            note: k.intl.string(k.t.RBbtMz),
                            children: k.intl.string(k.t.lxsmBQ)
                        })
                    ]
                })
              : (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(H, {
                            title: k.intl.string(k.t.sMOuub),
                            maxSlots: a.getMaxEmojiSlots(),
                            emojiCount: r.length
                        }),
                        (0, i.jsx)(z, {
                            emojis: r,
                            guild: a
                        }),
                        (0, i.jsx)(H, {
                            title: k.intl.string(k.t.wWjQyc),
                            maxSlots: a.getMaxEmojiSlots(),
                            emojiCount: l.length
                        }),
                        (0, i.jsx)(z, {
                            emojis: l,
                            guild: a
                        })
                    ]
                });
    },
    H = (e) => {
        let { title: t, maxSlots: n, emojiCount: r } = e;
        return (0, i.jsxs)(h.FormTitle, {
            tag: h.FormTitleTags.H2,
            className: P.title,
            children: [
                t,
                (0, i.jsxs)('span', {
                    children: [' \u2014 ', k.intl.format(k.t.sgL8sL, { count: n - r })]
                })
            ]
        });
    },
    z = (e) => {
        let { emojis: t, guild: n, onEdit: l, editingDisabled: s = !1 } = e,
            a = r.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, j.Gw)(n);
        return 0 === t.length
            ? (0, i.jsx)(h.FormText, {
                  type: h.FormTextTypes.DESCRIPTION,
                  className: P.content,
                  children: k.intl.string(k.t.SpxYoa)
              })
            : (0, i.jsxs)(h.FormSection, {
                  className: P.content,
                  children: [
                      (0, i.jsxs)('div', {
                          className: P.emojiTable,
                          children: [
                              (0, i.jsx)(h.FormText, {
                                  type: h.FormTextTypes.DESCRIPTION,
                                  className: P.emojiColumn,
                                  children: k.intl.string(k.t.Z0i3Gh)
                              }),
                              (0, i.jsx)(h.FormText, {
                                  type: h.FormTextTypes.DESCRIPTION,
                                  className: P.columnLabel,
                                  children: k.intl.string(k.t.giajw8)
                              }),
                              (0, i.jsx)(h.FormText, {
                                  type: h.FormTextTypes.DESCRIPTION,
                                  className: P.columnLabel,
                                  children: k.intl.string(k.t.edavpq)
                              })
                          ]
                      }),
                      a.map((e) =>
                          (0, i.jsx)(
                              G,
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
    W = (e) => {
        let t,
            n,
            r,
            { staticEmojiCount: l, animatedEmojiCount: s, guild: a } = e,
            o = a.getMaxEmojiSlots(),
            c = Math.min(o - l, o - s),
            d = a.premiumTier,
            u = (0, y.FZ)(d, a.id);
        return null == u || d === O.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = k.intl.formatToPlainString(k.t.j0UH0t, { level: u })), (n = k.intl.formatToPlainString(k.t.VQeyKy, { level: u })), (r = O.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = k.intl.string(k.t.zT9Sxc)), (n = k.intl.formatToPlainString(k.t.dBZ1RU, { level: u })), (r = O.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(_.Z, {
                  header: t,
                  text: n,
                  guild: a,
                  analyticsLocation: {
                      page: O.ZY5.GUILD_SETTINGS,
                      section: O.jXE.GUILD_SETTINGS_STICKERS,
                      object: r,
                      objectType: (0, y.ge)(u)
                  }
              }));
    };
t.ZP = () => {
    let e = (0, m.e7)([D.Z], () => D.Z.getGuild()),
        [t, l] = r.useState('');
    o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
    let s = (0, m.e7)([b.Z], () => b.Z.theme),
        { canCreateExpressions: a } = (0, j.XJ)(e),
        { revision: c, emojis: g } = (0, m.cj)([L.Z], () => ({
            revision: L.Z.getEmojiRevision(e.id),
            emojis: L.Z.getEmojis(e.id)
        })),
        x = (0, C.Z)(c),
        [p, _] = r.useState(!1),
        [S, R] = r.useState(!1),
        y = r.useRef(null);
    r.useEffect(() => {
        p && V();
    }, [p]),
        r.useEffect(() => {
            B(e.id);
        }, [e.id]),
        r.useEffect(() => {
            null != x && x < c && B(e.id);
        }, [c, x, e.id]);
    let [A, w] = r.useMemo(() => {
            let t = null == g ? void 0 : g.filter((t) => !(0, I.Kt)(t, e.id)),
                [n, i] = d().partition(t, (e) => !e.animated);
            return [n, i];
        }, [g, e.id]),
        U = e.getMaxEmojiSlots(),
        G = Math.max(U - A.length, U - w.length),
        H = (n, i, r) =>
            (0, N.G)({
                data: n,
                file: i,
                image: r,
                guildId: e.id,
                uploadId: t,
                hideErrorModal: !0
            }),
        z = async (n) => {
            l((0, u.Z)()),
                E.default.track(O.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: e.id,
                    upload_id: t
                }),
                await (0, T._)(n, H),
                _(!0);
        },
        V = () => {
            null !== y.current && ((0, h.closeModal)(y.current), (y.current = null));
        },
        Y = async (e) => {
            y.current = await (0, h.openModalLazy)(async () => {
                let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                return (n) =>
                    (0, i.jsx)(t, {
                        processFiles: () => z(e),
                        ...n
                    });
            });
        },
        K = (0, v.l)(e);
    return (0, i.jsxs)('div', {
        className: P.emojiSettings,
        children: [
            0 === G
                ? null
                : (0, i.jsx)(f.Z, {
                      className: P.emojiUploadContainer,
                      onDrop: Y
                  }),
            (0, i.jsxs)(h.FormSection, {
                tag: h.FormTitleTags.H1,
                title: k.intl.string(k.t.sMOuub),
                children: [
                    (0, i.jsx)(W, {
                        guild: e,
                        staticEmojiCount: A.length,
                        animatedEmojiCount: w.length
                    }),
                    (0, i.jsxs)(h.FormSection, {
                        className: P.uploader,
                        children: [
                            (0, i.jsx)(h.FormText, {
                                type: h.FormTextTypes.DESCRIPTION,
                                children: k.intl.format(k.t.TA1BR0, { count: U })
                            }),
                            K &&
                                (0, i.jsx)(h.FormText, {
                                    type: h.FormTextTypes.DESCRIPTION,
                                    children: k.intl.format(k.t.uMkfTk, { onClick: () => Z.Z.open(e.id, O.pNK.ROLE_SUBSCRIPTIONS, void 0, O.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(h.FormTitle, {
                                        tag: h.FormTitleTags.H2,
                                        className: P.emojiUploadUploadRequirementsHeading,
                                        children: k.intl.string(k.t.jrXfy8)
                                    }),
                                    (0, i.jsxs)('ul', {
                                        className: P.emojiUploadUploadRequirementsList,
                                        children: [
                                            (0, i.jsx)('li', {
                                                children: (0, i.jsx)(h.FormText, {
                                                    type: h.FormTextTypes.DESCRIPTION,
                                                    children: k.intl.string(k.t.N2qTQ0)
                                                })
                                            }),
                                            (0, i.jsx)('li', {
                                                children: (0, i.jsx)(h.FormText, {
                                                    type: h.FormTextTypes.DESCRIPTION,
                                                    children: k.intl.format(k.t.gfAXoa, { maxSize: M.xG })
                                                })
                                            }),
                                            (0, i.jsx)('li', {
                                                children: (0, i.jsx)(h.FormText, {
                                                    type: h.FormTextTypes.DESCRIPTION,
                                                    children: k.intl.string(k.t.rnwKPD)
                                                })
                                            }),
                                            (0, i.jsx)('li', {
                                                children: (0, i.jsx)(h.FormText, {
                                                    type: h.FormTextTypes.DESCRIPTION,
                                                    children: k.intl.string(k.t['8Vr5QU'])
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)(h.Button, {
                                tabIndex: -1,
                                size: h.Button.Sizes.MEDIUM,
                                onClick: () => {
                                    let t = (0, u.Z)();
                                    l(t),
                                        E.default.track(O.rMx.EMOJI_UPLOAD_STARTED, {
                                            guild_id: e.id,
                                            upload_id: t
                                        });
                                },
                                disabled: S || 0 === G || !a,
                                submitting: S,
                                focusProps: { within: !0 },
                                children: [
                                    k.intl.string(k.t.DU0dy8),
                                    G > 0
                                        ? (0, i.jsx)(T.Z, {
                                              disabled: S || 0 === G || !a,
                                              tabIndex: 0,
                                              onChange: H,
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
                        staticEmojis: A,
                        animatedEmojis: w,
                        guild: e,
                        theme: s
                    })
                ]
            })
        ]
    });
};
