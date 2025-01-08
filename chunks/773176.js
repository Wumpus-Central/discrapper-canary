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
    S = n(111810),
    T = n(222677),
    j = n(995774),
    A = n(931651),
    y = n(280845),
    P = n(2818),
    M = n(768943),
    R = n(665906),
    L = n(695346),
    k = n(314897),
    O = n(323873),
    D = n(271383),
    w = n(430824),
    B = n(607744),
    U = n(496675),
    H = n(626135),
    G = n(572004),
    F = n(176354),
    V = n(823379),
    z = n(970257),
    W = n(418476),
    K = n(151007),
    Y = n(432376),
    q = n(373662),
    X = n(996861),
    J = n(603490),
    Q = n(225138),
    $ = n(717680),
    ee = n(981631),
    et = n(921944),
    en = n(185923),
    ei = n(388032),
    el = n(522613);
let er = [x.ZP.getByName('100'), x.ZP.getByName('laughing'), x.ZP.getByName('sparkling_heart')].filter(V.lm);
function ea(e) {
    e.stopPropagation();
}
function es(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: r } = e;
    return (0, Q.useMessageMenu)({
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
        ariaLabel: ei.intl.string(ei.t.Lv7LxM)
    });
}
let eo = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !F.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: en.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        r = (l.length >= 3 ? l : [...(0, v.Z)(l.concat(er)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e) => {
            var l;
            let r = a.find((t) => (0, j.ir)(t.emoji, (0, j.g1)(e))),
                s = null != r ? ei.intl.string(ei.t.wunKKC) : ei.intl.string(ei.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != r ? ei.intl.formatToPlainString(ei.t.vjeruL, { emojiName: o }) : ei.intl.formatToPlainString(ei.t.L1JQwM, { emojiName: o });
            return (0, i.jsx)(
                q.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: el.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: el.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eu({
                            type: null != r ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: T.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: el.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function ec(e) {
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
            canViewThread: T,
            canForward: j,
            isExpanded: A,
            showMoreUtilities: O,
            showEmojiPicker: F,
            showMessageBookmarksActions: V,
            isMessageBookmark: Q,
            setPopout: en,
            hasDeveloperMode: el,
            isGuildInviteReminder: er,
            isFocused: ea
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: r, setPopout: a, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([w.Z], () => w.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([k.default], () => k.default.getId()),
                h = (0, R.$R)(t),
                f = (0, R.Gu)(t),
                g = L.nc.useSetting(),
                C = L.Sb.useSetting(),
                x = (0, c.e7)([B.Z], () => null == t.guild_id || B.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: v, canAddNewReactions: E } = (0, c.cj)(
                    [U.Z],
                    () => ({
                        canAddNewReactions: x && U.Z.can(ee.Plq.ADD_REACTIONS, t),
                        canManageMessages: U.Z.can(ee.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, x]
                ),
                b = (0, y.U)(t, n),
                Z = (0, R.NE)(t, n),
                S = (0, R.Ek)(n),
                T = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([D.ZP], () => null != t.guild_id && D.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = o.id === u,
                O = (v || n.canDeleteOwnMessage(u)) && h && !ee.V$x.UNDELETABLE.has(n.type);
            n.type === ee.uaV.AUTO_MODERATION_ACTION && (O = O && v);
            let H = (0, z.a4)(n),
                F = (0, K.Z)(n, t, v),
                V = !t.isSystemDM() && (0, W.Z)(n, u) && h && !f,
                { disableReactionCreates: q } = (0, Y.Z)({
                    channel: t,
                    canChat: x,
                    renderReactions: g,
                    canAddNewReactions: E,
                    isLurking: T,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === ee.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(ee.oNc.NEWS) && (A || v) && (0, m.Z)(n),
                J = t.getGuildId(),
                Q = null != J && (n.type === ee.uaV.USER_JOIN || n.type === ee.uaV.GUILD_INVITE_REMINDER) && U.Z.canWithPartialContext(ee.Plq.MANAGE_GUILD, { guildId: J }),
                { canForwardMessages: et } = (0, _.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, I.a)(n),
                { enabled: ei } = P.Z.useExperiment({ location: 'message_utilities' }),
                el = (0, c.e7)([M.Z], () => null != M.Z.getSavedMessage(t.id, n.id)),
                er = (0, $.Z)(),
                ea = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: F,
                canEdit: V,
                canDelete: O,
                canReport: H,
                canReply: b,
                canStartThread: Z,
                canViewThread: S,
                canForward: et && en,
                canCopy: G.wS,
                hasDeveloperMode: C,
                canReact: !q && g,
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
                isGuildInviteReminder: n.type === ee.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        ec = l.useCallback(() => {
            !O &&
                H.default.track(ee.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                en({ moreUtilities: !O });
        }, [O, en, n]),
        ed = l.useCallback(() => {
            en({ emojiPicker: !F });
        }, [F, en]),
        eu = (0, R.$R)(t),
        ep = n.hasFlag(ee.iLy.CROSSPOSTED),
        [em, ef] = (0, f.cv)(j ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        eg = em === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eC, ex] = l.useState(!1),
        ev = l.useCallback(() => {
            ex(!0);
        }, []),
        e_ = l.useCallback(() => {
            ex(!1);
        }, []),
        eI = l.useCallback(
            (e, t) => {
                ef(et.L.TAKE_ACTION), (0, X.ts)(e, t);
            },
            [ef]
        ),
        { canShowReactionsOnMessageHover: eE } = C.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    C.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eb = (0, S.V1)('ExpandingButtons') && !n.hasPotions();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          r && el
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t.zBoHlZ),
                                        icon: u.IdIcon,
                                        onClick: (e) => (0, X.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          r && !er
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t.WqhZsr),
                                        icon: u.LinkIcon,
                                        onClick: () => (0, X.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          v
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t.NpHUi4),
                                        icon: u.CircleQuestionIcon,
                                        onClick: () => (0, X.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eu
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t.RpE9k5),
                                        icon: u.ChatMarkUnreadIcon,
                                        onClick: () => (0, X.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          V
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: Q ? ei.intl.string(ei.t.LHUP9P) : ei.intl.string(ei.t['9p3D9v']),
                                        icon: Q ? u.BookmarkIcon : u.BookmarkOutlineIcon,
                                        onClick: () => (Q ? (0, X.eM)(t, n) : (0, X.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: n.pinned ? ei.intl.string(ei.t['Bse+Fx']) : ei.intl.string(ei.t['CvQ18/']),
                                        icon: u.PinIcon,
                                        onClick: (e) => (0, X.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          Z && j
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t.rBIGBA),
                                        icon: u.ThreadIcon,
                                        onClick: () => (0, X.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          b && h
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t['5IEsGx']),
                                        icon: u.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, X.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            x && !er
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eE && !A
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eo, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(q.fO, {})
                                    ]
                                })
                              : null,
                          (0, i.jsx)(J.Z, {
                              togglePopout: ed,
                              renderEmojiPicker: eh,
                              shouldShow: F,
                              isFocused: ea,
                              channel: t,
                              message: n
                          }),
                          eb
                              ? (0, i.jsx)(
                                    q.sF,
                                    {
                                        label: ei.intl.string(ei.t.axfAra),
                                        icon: u.PotionIcon,
                                        onClick: () => {}
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            b && !h
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ei.intl.string(ei.t['5IEsGx']),
                          icon: u.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, X.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ei.intl.string(ei.t.bt75u7),
                          icon: u.PencilIcon,
                          onClick: () => (0, X.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            j
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ei.intl.string(ei.t.I3ltXF),
                          icon: E.Z,
                          onClick: () => eI(t, n),
                          onTooltipShow: ev,
                          onTooltipHide: e_,
                          showNewBadge: !eC && eg
                      },
                      'forward'
                  )
                : null,
            Z && !j
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ei.intl.string(ei.t.rBIGBA),
                          icon: u.ThreadIcon,
                          onClick: () => (0, X.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !Z && T
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ei.intl.string(ei.t['39d0Wl']),
                          icon: u.ThreadIcon,
                          onClick: () => (0, X.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ep ? ei.intl.string(ei.t['1kWJAg']) : ei.intl.string(ei.t['MFGE5+']),
                          icon: u.AnnouncementsIcon,
                          onClick: () => (0, X.Xl)(t, n),
                          disabled: ep
                      },
                      'publish'
                  )
                : null,
            s && (er || A)
                ? (0, i.jsx)(
                      q.sF,
                      {
                          label: ei.intl.string(ei.t.oyYWHB),
                          icon: u.TrashIcon,
                          onClick: (e) => (0, X.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !A
                      },
                      'delete'
                  )
                : null,
            A && s
                ? null
                : (0, i.jsx)(u.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: r } = e;
                          return (0, i.jsx)(es, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: r,
                              updatePosition: l
                          });
                      },
                      shouldShow: O,
                      onRequestClose: ec,
                      position: 'left',
                      align: 'top',
                      animation: u.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: r } = t;
                          return (0, i.jsx)(
                              q.sF,
                              {
                                  label: ei.intl.string(ei.t.UKOtz8),
                                  icon: u.MoreHorizontalIcon,
                                  selected: r,
                                  onClick: ec,
                                  ...l
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function ed(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        r = null == n.interaction || (null != n.interactionData && (0, Z.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                r &&
                (0, i.jsx)(
                    q.sF,
                    {
                        label: ei.intl.string(ei.t['5911LS']),
                        icon: u.RetryIcon,
                        onClick: () => (0, X.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                q.sF,
                {
                    label: ei.intl.string(ei.t.oyYWHB),
                    icon: u.TrashIcon,
                    onClick: (e) => (0, X.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eu(e) {
    let { type: t, emoji: n, channel: i, message: l, location: r, isBurst: a = !1 } = e;
    if (null == n) return;
    let s = (0, j.g1)(n);
    'add' === t
        ? (0, T.rU)(i.id, l.id, s, r, { burst: a })
        : (0, T.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: r,
              options: { burst: a }
          });
}
function eh(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                section: (0, j.s4)(e),
                object: ee.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(A.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, r) => {
            eu({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: T.TW.MESSAGE_REACTION_PICKER,
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
        s = (0, c.e7)([O.Z], () => O.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ee.yb.SEND_FAILED
                ? (0, i.jsx)(ed, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        d = (function (e) {
            let { message: t } = e;
            return t.state !== ee.yb.SEND_FAILED ? (0, i.jsx)(ec, { ...e }) : null;
        })(e);
    return s || (null == o && null == d)
        ? null
        : (0, i.jsx)('div', {
              className: a()(e.className, {
                  [el.container]: !0,
                  [el.isHeader]: l,
                  [el.isReply]: r
              }),
              onClick: ea,
              onContextMenu: ea,
              role: 'group',
              'aria-label': ei.intl.string(ei.t.Lv7LxM),
              children: (0, i.jsxs)(q.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
