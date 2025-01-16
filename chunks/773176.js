n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(954955),
    o = n.n(s),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(596454),
    p = n(607070),
    m = n(110630),
    f = n(706140),
    g = n(543241),
    C = n(407477),
    x = n(633302),
    v = n(856985),
    _ = n(346610),
    I = n(868643),
    E = n(245216),
    b = n(223606),
    Z = n(188597),
    N = n(41776),
    S = n(135793),
    T = n(111810),
    j = n(222677),
    A = n(995774),
    y = n(931651),
    P = n(280845),
    M = n(2818),
    R = n(768943),
    L = n(665906),
    k = n(695346),
    O = n(314897),
    D = n(323873),
    w = n(271383),
    B = n(430824),
    U = n(607744),
    H = n(496675),
    G = n(626135),
    F = n(572004),
    V = n(176354),
    z = n(823379),
    W = n(970257),
    K = n(418476),
    Y = n(151007),
    q = n(432376),
    X = n(373662),
    J = n(996861),
    Q = n(603490),
    $ = n(225138),
    ee = n(717680),
    et = n(981631),
    en = n(921944),
    ei = n(185923),
    el = n(388032),
    er = n(522613);
let ea = [x.ZP.getByName('100'), x.ZP.getByName('laughing'), x.ZP.getByName('sparkling_heart')].filter(z.lm);
function es(e) {
    e.stopPropagation();
}
function eo(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: r } = e;
    return (0, $.useMessageMenu)({
        message: t,
        channel: n,
        textSelection: '',
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: i,
        onHeightUpdate: r,
        onClose: l,
        navId: 'message-actions',
        ariaLabel: el.intl.string(el.t.Lv7LxM)
    });
}
let ec = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !V.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ei.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        r = (l.length >= 3 ? l : [...(0, v.Z)(l.concat(ea)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e) => {
            var l;
            let r = a.find((t) => (0, A.ir)(t.emoji, (0, A.g1)(e))),
                s = null != r ? el.intl.string(el.t.wunKKC) : el.intl.string(el.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != r ? el.intl.formatToPlainString(el.t.vjeruL, { emojiName: o }) : el.intl.formatToPlainString(el.t.L1JQwM, { emojiName: o });
            return (0, i.jsx)(
                X.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: er.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: er.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eh({
                            type: null != r ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: j.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: er.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function ed(e) {
    let {
            channel: t,
            message: n,
            canCopy: r,
            canPin: a,
            canDelete: s,
            canReport: o,
            canEdit: h,
            canPublish: g,
            canReact: x,
            canConfigureJoin: v,
            canReply: b,
            canStartThread: Z,
            canViewThread: j,
            canForward: A,
            isExpanded: y,
            showMoreUtilities: D,
            showEmojiPicker: V,
            showMessageBookmarksActions: z,
            isMessageBookmark: $,
            setPopout: ei,
            hasDeveloperMode: er,
            isGuildInviteReminder: ea,
            isFocused: es
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: r, setPopout: a, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([B.Z], () => B.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([O.default], () => O.default.getId()),
                h = (0, L.$R)(t),
                f = (0, L.Gu)(t),
                g = k.nc.useSetting(),
                C = k.Sb.useSetting(),
                x = (0, c.e7)([U.Z], () => null == t.guild_id || U.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: v, canAddNewReactions: E } = (0, c.cj)(
                    [H.Z],
                    () => ({
                        canAddNewReactions: x && H.Z.can(et.Plq.ADD_REACTIONS, t),
                        canManageMessages: H.Z.can(et.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, x]
                ),
                b = (0, P.U)(t, n),
                Z = (0, L.NE)(t, n),
                S = (0, L.Ek)(n),
                T = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([w.ZP], () => null != t.guild_id && w.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = o.id === u,
                y = (v || n.canDeleteOwnMessage(u)) && h && !et.V$x.UNDELETABLE.has(n.type);
            n.type === et.uaV.AUTO_MODERATION_ACTION && (y = y && v);
            let D = (0, W.a4)(n),
                G = (0, Y.Z)(n, t, v),
                V = !t.isSystemDM() && (0, K.Z)(n, u) && h && !f,
                { disableReactionCreates: z } = (0, q.Z)({
                    channel: t,
                    canChat: x,
                    renderReactions: g,
                    canAddNewReactions: E,
                    isLurking: T,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === et.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(et.oNc.NEWS) && (A || v) && (0, m.Z)(n),
                J = t.getGuildId(),
                Q = null != J && (n.type === et.uaV.USER_JOIN || n.type === et.uaV.GUILD_INVITE_REMINDER) && H.Z.canWithPartialContext(et.Plq.MANAGE_GUILD, { guildId: J }),
                { canForwardMessages: $ } = (0, _.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, I.a)(n),
                { enabled: ei } = M.Z.useExperiment({ location: 'message_utilities' }),
                el = (0, c.e7)([R.Z], () => null != R.Z.getSavedMessage(t.id, n.id)),
                er = (0, ee.Z)(),
                ea = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: G,
                canEdit: V,
                canDelete: y,
                canReport: D,
                canReply: b,
                canStartThread: Z,
                canViewThread: S,
                canForward: $ && en,
                canCopy: F.wS,
                hasDeveloperMode: C,
                canReact: !z && g,
                canPublish: X,
                canConfigureJoin: Q,
                isExpanded: er && !ea && !i && !l && !r,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: r,
                showMessageBookmarksActions: ei,
                isMessageBookmark: el,
                setPopout: a,
                isFocused: s,
                isGuildInviteReminder: n.type === et.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        ed = l.useCallback(() => {
            !D &&
                G.default.track(et.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                ei({ moreUtilities: !D });
        }, [D, ei, n]),
        eu = l.useCallback(() => {
            ei({ emojiPicker: !V });
        }, [V, ei]),
        eh = (0, L.$R)(t),
        em = n.hasFlag(et.iLy.CROSSPOSTED),
        [ef, eg] = (0, f.cv)(A ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        eC = ef === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [ex, ev] = l.useState(!1),
        e_ = l.useCallback(() => {
            ev(!0);
        }, []),
        eI = l.useCallback(() => {
            ev(!1);
        }, []),
        eE = l.useCallback(
            (e, t) => {
                eg(en.L.TAKE_ACTION), (0, J.ts)(e, t);
            },
            [eg]
        ),
        { canShowReactionsOnMessageHover: eb } = C.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    C.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eZ = (0, T.V1)('ExpandingButtons') && !n.hasPotions();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          r && er
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t.zBoHlZ),
                                        icon: u.IdIcon,
                                        onClick: (e) => (0, J.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          r && !ea
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t.WqhZsr),
                                        icon: u.LinkIcon,
                                        onClick: () => (0, J.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          v
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t.NpHUi4),
                                        icon: u.CircleQuestionIcon,
                                        onClick: () => (0, J.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eh
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t.RpE9k5),
                                        icon: u.ChatMarkUnreadIcon,
                                        onClick: () => (0, J.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          z
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: $ ? el.intl.string(el.t.LHUP9P) : el.intl.string(el.t['9p3D9v']),
                                        icon: $ ? u.BookmarkIcon : u.BookmarkOutlineIcon,
                                        onClick: () => ($ ? (0, J.eM)(t, n) : (0, J.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: n.pinned ? el.intl.string(el.t['Bse+Fx']) : el.intl.string(el.t['CvQ18/']),
                                        icon: u.PinIcon,
                                        onClick: (e) => (0, J.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          Z && A
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t.rBIGBA),
                                        icon: u.ThreadIcon,
                                        onClick: () => (0, J.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          b && h
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t['5IEsGx']),
                                        icon: u.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, J.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            x && !ea
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eb && !y
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(ec, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(X.fO, {})
                                    ]
                                })
                              : null,
                          (0, i.jsx)(Q.Z, {
                              togglePopout: eu,
                              renderEmojiPicker: ep,
                              shouldShow: V,
                              isFocused: es,
                              channel: t,
                              message: n
                          }),
                          eZ
                              ? (0, i.jsx)(
                                    X.sF,
                                    {
                                        label: el.intl.string(el.t.icaJW1),
                                        icon: u.PotionIcon,
                                        onClick: () => (0, S.openMessageConfettiModal)(t, n)
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            b && !h
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: el.intl.string(el.t['5IEsGx']),
                          icon: u.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, J.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: el.intl.string(el.t.bt75u7),
                          icon: u.PencilIcon,
                          onClick: () => (0, J.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            A
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: el.intl.string(el.t.I3ltXF),
                          icon: E.Z,
                          onClick: () => eE(t, n),
                          onTooltipShow: e_,
                          onTooltipHide: eI,
                          showNewBadge: !ex && eC
                      },
                      'forward'
                  )
                : null,
            Z && !A
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: el.intl.string(el.t.rBIGBA),
                          icon: u.ThreadIcon,
                          onClick: () => (0, J.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !Z && j
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: el.intl.string(el.t['39d0Wl']),
                          icon: u.ThreadIcon,
                          onClick: () => (0, J.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: em ? el.intl.string(el.t['1kWJAg']) : el.intl.string(el.t['MFGE5+']),
                          icon: u.AnnouncementsIcon,
                          onClick: () => (0, J.Xl)(t, n),
                          disabled: em
                      },
                      'publish'
                  )
                : null,
            s && (ea || y)
                ? (0, i.jsx)(
                      X.sF,
                      {
                          label: el.intl.string(el.t.oyYWHB),
                          icon: u.TrashIcon,
                          onClick: (e) => (0, J.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !y
                      },
                      'delete'
                  )
                : null,
            y && s
                ? null
                : (0, i.jsx)(u.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: r } = e;
                          return (0, i.jsx)(eo, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: r,
                              updatePosition: l
                          });
                      },
                      shouldShow: D,
                      onRequestClose: ed,
                      position: 'left',
                      align: 'top',
                      animation: u.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: r } = t;
                          return (0, i.jsx)(
                              X.sF,
                              {
                                  label: el.intl.string(el.t.UKOtz8),
                                  icon: u.MoreHorizontalIcon,
                                  selected: r,
                                  onClick: ed,
                                  ...l
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function eu(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        r = null == n.interaction || (null != n.interactionData && (0, Z.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                r &&
                (0, i.jsx)(
                    X.sF,
                    {
                        label: el.intl.string(el.t['5911LS']),
                        icon: u.RetryIcon,
                        onClick: () => (0, J.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                X.sF,
                {
                    label: el.intl.string(el.t.oyYWHB),
                    icon: u.TrashIcon,
                    onClick: (e) => (0, J.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eh(e) {
    let { type: t, emoji: n, channel: i, message: l, location: r, isBurst: a = !1 } = e;
    if (null == n) return;
    let s = (0, A.g1)(n);
    'add' === t
        ? (0, j.rU)(i.id, l.id, s, r, { burst: a })
        : (0, j.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: r,
              options: { burst: a }
          });
}
function ep(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? et.ZY5.GUILD_CHANNEL : et.ZY5.DM_CHANNEL,
                section: (0, A.s4)(e),
                object: et.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(y.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, r) => {
            eh({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: j.TW.MESSAGE_REACTION_PICKER,
                isBurst: r
            }),
                l && (r ? o()(n, 150)() : n());
        },
        analyticsOverride: r,
        messageId: t.id
    });
}
t.Z = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: r } = e,
        s = (0, c.e7)([D.Z], () => D.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === et.yb.SEND_FAILED
                ? (0, i.jsx)(eu, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        d = (function (e) {
            let { message: t } = e;
            return t.state !== et.yb.SEND_FAILED ? (0, i.jsx)(ed, { ...e }) : null;
        })(e);
    return s || (null == o && null == d)
        ? null
        : (0, i.jsx)('div', {
              className: a()(e.className, {
                  [er.container]: !0,
                  [er.isHeader]: l,
                  [er.isReply]: r
              }),
              onClick: es,
              onContextMenu: es,
              role: 'group',
              'aria-label': el.intl.string(el.t.Lv7LxM),
              children: (0, i.jsxs)(X.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
