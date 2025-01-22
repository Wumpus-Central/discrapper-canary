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
    S = n(980463),
    T = n(328908),
    j = n(135793),
    A = n(111810),
    y = n(222677),
    P = n(995774),
    M = n(931651),
    R = n(280845),
    L = n(2818),
    k = n(768943),
    O = n(665906),
    D = n(695346),
    w = n(314897),
    B = n(323873),
    U = n(271383),
    H = n(430824),
    G = n(607744),
    F = n(496675),
    V = n(626135),
    z = n(572004),
    W = n(176354),
    K = n(823379),
    Y = n(970257),
    q = n(418476),
    X = n(151007),
    J = n(432376),
    Q = n(373662),
    $ = n(996861),
    ee = n(603490),
    et = n(225138),
    en = n(717680),
    ei = n(981631),
    el = n(921944),
    er = n(185923),
    ea = n(388032),
    es = n(522613);
let eo = [x.ZP.getByName('100'), x.ZP.getByName('laughing'), x.ZP.getByName('sparkling_heart')].filter(K.lm);
function ec(e) {
    e.stopPropagation();
}
function ed(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: r } = e;
    return (0, et.useMessageMenu)({
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
        ariaLabel: ea.intl.string(ea.t.Lv7LxM)
    });
}
let eu = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !W.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: er.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        r = (l.length >= 3 ? l : [...(0, v.Z)(l.concat(eo)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e) => {
            var l;
            let r = a.find((t) => (0, P.ir)(t.emoji, (0, P.g1)(e))),
                s = null != r ? ea.intl.string(ea.t.wunKKC) : ea.intl.string(ea.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != r ? ea.intl.formatToPlainString(ea.t.vjeruL, { emojiName: o }) : ea.intl.formatToPlainString(ea.t.L1JQwM, { emojiName: o });
            return (0, i.jsx)(
                Q.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: es.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: es.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        em({
                            type: null != r ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: y.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: es.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function eh(e) {
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
            canViewThread: y,
            canForward: P,
            isExpanded: M,
            showMoreUtilities: B,
            showEmojiPicker: W,
            showMessageBookmarksActions: K,
            isMessageBookmark: et,
            setPopout: er,
            hasDeveloperMode: es,
            isGuildInviteReminder: eo,
            isFocused: ec
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: r, setPopout: a, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([H.Z], () => H.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([w.default], () => w.default.getId()),
                h = (0, O.$R)(t),
                f = (0, O.Gu)(t),
                g = D.nc.useSetting(),
                C = D.Sb.useSetting(),
                x = (0, c.e7)([G.Z], () => null == t.guild_id || G.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: v, canAddNewReactions: E } = (0, c.cj)(
                    [F.Z],
                    () => ({
                        canAddNewReactions: x && F.Z.can(ei.Plq.ADD_REACTIONS, t),
                        canManageMessages: F.Z.can(ei.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, x]
                ),
                b = (0, R.U)(t, n),
                Z = (0, O.NE)(t, n),
                S = (0, O.Ek)(n),
                T = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([U.ZP], () => null != t.guild_id && U.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = o.id === u,
                y = (v || n.canDeleteOwnMessage(u)) && h && !ei.V$x.UNDELETABLE.has(n.type);
            n.type === ei.uaV.AUTO_MODERATION_ACTION && (y = y && v);
            let P = (0, Y.a4)(n),
                M = (0, X.Z)(n, t, v),
                B = !t.isSystemDM() && (0, q.Z)(n, u) && h && !f,
                { disableReactionCreates: V } = (0, J.Z)({
                    channel: t,
                    canChat: x,
                    renderReactions: g,
                    canAddNewReactions: E,
                    isLurking: T,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                W = t.type === ei.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(ei.oNc.NEWS) && (A || v) && (0, m.Z)(n),
                K = t.getGuildId(),
                Q = null != K && (n.type === ei.uaV.USER_JOIN || n.type === ei.uaV.GUILD_INVITE_REMINDER) && F.Z.canWithPartialContext(ei.Plq.MANAGE_GUILD, { guildId: K }),
                { canForwardMessages: $ } = (0, _.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                ee = (0, I.a)(n),
                { enabled: et } = L.Z.useExperiment({ location: 'message_utilities' }),
                el = (0, c.e7)([k.Z], () => null != k.Z.getSavedMessage(t.id, n.id)),
                er = (0, en.Z)(),
                ea = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: M,
                canEdit: B,
                canDelete: y,
                canReport: P,
                canReply: b,
                canStartThread: Z,
                canViewThread: S,
                canForward: $ && ee,
                canCopy: z.wS,
                hasDeveloperMode: C,
                canReact: !V && g,
                canPublish: W,
                canConfigureJoin: Q,
                isExpanded: er && !ea && !i && !l && !r,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: r,
                showMessageBookmarksActions: et,
                isMessageBookmark: el,
                setPopout: a,
                isFocused: s,
                isGuildInviteReminder: n.type === ei.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eh = l.useCallback(() => {
            !B &&
                V.default.track(ei.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                er({ moreUtilities: !B });
        }, [B, er, n]),
        ep = l.useCallback(() => {
            er({ emojiPicker: !W });
        }, [W, er]),
        em = (0, O.$R)(t),
        eg = n.hasFlag(ei.iLy.CROSSPOSTED),
        [eC, ex] = (0, f.cv)(P ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ev = eC === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [e_, eI] = l.useState(!1),
        eE = l.useCallback(() => {
            eI(!0);
        }, []),
        eb = l.useCallback(() => {
            eI(!1);
        }, []),
        eZ = l.useCallback(
            (e, t) => {
                ex(el.L.TAKE_ACTION), (0, $.ts)(e, t);
            },
            [ex]
        ),
        { canShowReactionsOnMessageHover: eN } = C.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    C.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eS = (0, A.V1)('ExpandingButtons') && !n.hasPotions(),
        eT = l.useCallback(
            (e) => {
                try {
                    (0, S.qc)(t.id, n.id, e);
                } catch {
                    (0, u.showToast)((0, u.createToast)(ea.intl.string(ea.t.xsfC2d), u.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          r && es
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t.zBoHlZ),
                                        icon: u.IdIcon,
                                        onClick: (e) => (0, $.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          r && !eo
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t.WqhZsr),
                                        icon: u.LinkIcon,
                                        onClick: () => (0, $.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          v
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t.NpHUi4),
                                        icon: u.CircleQuestionIcon,
                                        onClick: () => (0, $.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          em
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t.RpE9k5),
                                        icon: u.ChatMarkUnreadIcon,
                                        onClick: () => (0, $.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          K
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: et ? ea.intl.string(ea.t.LHUP9P) : ea.intl.string(ea.t['9p3D9v']),
                                        icon: et ? u.BookmarkIcon : u.BookmarkOutlineIcon,
                                        onClick: () => (et ? (0, $.eM)(t, n) : (0, $.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: n.pinned ? ea.intl.string(ea.t['Bse+Fx']) : ea.intl.string(ea.t['CvQ18/']),
                                        icon: u.PinIcon,
                                        onClick: (e) => (0, $.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          Z && P
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t.rBIGBA),
                                        icon: u.ThreadIcon,
                                        onClick: () => (0, $.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          b && h
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t['5IEsGx']),
                                        icon: u.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, $.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            x && !eo
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eN && !M
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eu, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(Q.fO, {})
                                    ]
                                })
                              : null,
                          (0, i.jsx)(ee.Z, {
                              togglePopout: ep,
                              renderEmojiPicker: ef,
                              shouldShow: W,
                              isFocused: ec,
                              channel: t,
                              message: n
                          }),
                          eS
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: ea.intl.string(ea.t.icaJW1),
                                        icon: u.ExperimentalConfettiIcon,
                                        onClick: () =>
                                            (0, j.openMessageConfettiModal)({
                                                channelId: t.id,
                                                message: n,
                                                onRedeem: eT,
                                                onClose: T.Qy
                                            })
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            b && !h
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: ea.intl.string(ea.t['5IEsGx']),
                          icon: u.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, $.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: ea.intl.string(ea.t.bt75u7),
                          icon: u.PencilIcon,
                          onClick: () => (0, $.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            P
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: ea.intl.string(ea.t.I3ltXF),
                          icon: E.Z,
                          onClick: () => eZ(t, n),
                          onTooltipShow: eE,
                          onTooltipHide: eb,
                          showNewBadge: !e_ && ev
                      },
                      'forward'
                  )
                : null,
            Z && !P
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: ea.intl.string(ea.t.rBIGBA),
                          icon: u.ThreadIcon,
                          onClick: () => (0, $.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !Z && y
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: ea.intl.string(ea.t['39d0Wl']),
                          icon: u.ThreadIcon,
                          onClick: () => (0, $.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: eg ? ea.intl.string(ea.t['1kWJAg']) : ea.intl.string(ea.t['MFGE5+']),
                          icon: u.AnnouncementsIcon,
                          onClick: () => (0, $.Xl)(t, n),
                          disabled: eg
                      },
                      'publish'
                  )
                : null,
            s && (eo || M)
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: ea.intl.string(ea.t.oyYWHB),
                          icon: u.TrashIcon,
                          onClick: (e) => (0, $.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !M
                      },
                      'delete'
                  )
                : null,
            M && s
                ? null
                : (0, i.jsx)(u.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: r } = e;
                          return (0, i.jsx)(ed, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: r,
                              updatePosition: l
                          });
                      },
                      shouldShow: B,
                      onRequestClose: eh,
                      position: 'left',
                      align: 'top',
                      animation: u.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: r } = t;
                          return (0, i.jsx)(
                              Q.sF,
                              {
                                  label: ea.intl.string(ea.t.UKOtz8),
                                  icon: u.MoreHorizontalIcon,
                                  selected: r,
                                  onClick: eh,
                                  ...l
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function ep(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        r = null == n.interaction || (null != n.interactionData && (0, Z.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                r &&
                (0, i.jsx)(
                    Q.sF,
                    {
                        label: ea.intl.string(ea.t['5911LS']),
                        icon: u.RetryIcon,
                        onClick: () => (0, $.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                Q.sF,
                {
                    label: ea.intl.string(ea.t.oyYWHB),
                    icon: u.TrashIcon,
                    onClick: (e) => (0, $.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function em(e) {
    let { type: t, emoji: n, channel: i, message: l, location: r, isBurst: a = !1 } = e;
    if (null == n) return;
    let s = (0, P.g1)(n);
    'add' === t
        ? (0, y.rU)(i.id, l.id, s, r, { burst: a })
        : (0, y.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: r,
              options: { burst: a }
          });
}
function ef(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? ei.ZY5.GUILD_CHANNEL : ei.ZY5.DM_CHANNEL,
                section: (0, P.s4)(e),
                object: ei.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(M.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, r) => {
            em({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: y.TW.MESSAGE_REACTION_PICKER,
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
        s = (0, c.e7)([B.Z], () => B.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ei.yb.SEND_FAILED
                ? (0, i.jsx)(ep, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        d = (function (e) {
            let { message: t } = e;
            return t.state !== ei.yb.SEND_FAILED ? (0, i.jsx)(eh, { ...e }) : null;
        })(e);
    return s || (null == o && null == d)
        ? null
        : (0, i.jsx)('div', {
              className: a()(e.className, {
                  [es.container]: !0,
                  [es.isHeader]: l,
                  [es.isReply]: r
              }),
              onClick: ec,
              onContextMenu: ec,
              role: 'group',
              'aria-label': ea.intl.string(ea.t.Lv7LxM),
              children: (0, i.jsxs)(Q.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
