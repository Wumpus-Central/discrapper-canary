n.d(t, { Z: () => eg }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(407477),
    C = n(633302),
    x = n(856985),
    v = n(346610),
    E = n(868643),
    I = n(245216),
    b = n(223606),
    Z = n(188597),
    N = n(41776),
    T = n(980463),
    S = n(328908),
    j = n(135793),
    A = n(111810),
    y = n(222677),
    P = n(995774),
    R = n(931651),
    M = n(280845),
    L = n(2818),
    k = n(768943),
    O = n(665906),
    D = n(695346),
    w = n(314897),
    U = n(323873),
    B = n(271383),
    F = n(430824),
    H = n(607744),
    G = n(496675),
    V = n(626135),
    z = n(572004),
    W = n(176354),
    Y = n(823379),
    q = n(970257),
    K = n(418476),
    X = n(151007),
    J = n(432376),
    Q = n(373662),
    $ = n(996861),
    ee = n(603490),
    et = n(225138),
    en = n(717680),
    ei = n(981631),
    el = n(921944),
    ea = n(185923),
    er = n(388032),
    es = n(522613);
let eo = [C.ZP.getByName('100'), C.ZP.getByName('laughing'), C.ZP.getByName('sparkling_heart')].filter(Y.lm);
function ec(e) {
    e.stopPropagation();
}
function ed(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: a } = e;
    return (0, et.S)({
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
        onHeightUpdate: a,
        onClose: l,
        navId: 'message-actions',
        ariaLabel: er.intl.string(er.t.Lv7LxM)
    });
}
let eu = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !W.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ea.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        a = (l.length >= 3 ? l : [...(0, x.Z)(l.concat(eo)).values()]).slice(0, 3),
        r = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            var l;
            let a = r.find((t) => (0, P.ir)(t.emoji, (0, P.g1)(e))),
                s = null != a ? er.intl.string(er.t.wunKKC) : er.intl.string(er.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != a ? er.intl.formatToPlainString(er.t.vjeruL, { emojiName: o }) : er.intl.formatToPlainString(er.t.L1JQwM, { emojiName: o });
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
                            type: null != a ? 'remove' : 'add',
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
            canCopy: a,
            canPin: r,
            canDelete: s,
            canReport: o,
            canEdit: h,
            canPublish: g,
            canReact: C,
            canConfigureJoin: x,
            canReply: b,
            canStartThread: Z,
            canViewThread: y,
            canForward: P,
            isExpanded: R,
            showMoreUtilities: U,
            showEmojiPicker: W,
            showMessageBookmarksActions: Y,
            isMessageBookmark: et,
            setPopout: ea,
            hasDeveloperMode: es,
            isGuildInviteReminder: eo,
            isFocused: ec
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: a, setPopout: r, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([F.Z], () => F.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([w.default], () => w.default.getId()),
                h = (0, O.$R)(t),
                f = (0, O.Gu)(t),
                g = D.nc.useSetting(),
                _ = D.Sb.useSetting(),
                C = (0, c.e7)([H.Z], () => null == t.guild_id || H.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: I } = (0, c.cj)(
                    [G.Z],
                    () => ({
                        canAddNewReactions: C && G.Z.can(ei.Plq.ADD_REACTIONS, t),
                        canManageMessages: G.Z.can(ei.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, C]
                ),
                b = (0, M.U)(t, n),
                Z = (0, O.NE)(t, n),
                T = (0, O.Ek)(n),
                S = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([B.ZP], () => null != t.guild_id && B.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = o.id === u,
                y = (x || n.canDeleteOwnMessage(u)) && h && !ei.V$x.UNDELETABLE.has(n.type);
            n.type === ei.uaV.AUTO_MODERATION_ACTION && (y = y && x);
            let P = (0, q.a4)(n),
                R = (0, X.Z)(n, t, x),
                U = !t.isSystemDM() && (0, K.Z)(n, u) && h && !f,
                { disableReactionCreates: V } = (0, J.Z)({
                    channel: t,
                    canChat: C,
                    renderReactions: g,
                    canAddNewReactions: I,
                    isLurking: S,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                W = t.type === ei.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(ei.oNc.NEWS) && (A || x) && (0, m.Z)(n),
                Y = t.getGuildId(),
                Q = null != Y && (n.type === ei.uaV.USER_JOIN || n.type === ei.uaV.GUILD_INVITE_REMINDER) && G.Z.canWithPartialContext(ei.Plq.MANAGE_GUILD, { guildId: Y }),
                { canForwardMessages: $ } = (0, v.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                ee = (0, E.a)(n),
                { enabled: et } = L.Z.useExperiment({ location: 'message_utilities' }),
                el = (0, c.e7)([k.Z], () => null != k.Z.getSavedMessage(t.id, n.id)),
                ea = (0, en.Z)(),
                er = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: U,
                canDelete: y,
                canReport: P,
                canReply: b,
                canStartThread: Z,
                canViewThread: T,
                canForward: $ && ee,
                canCopy: z.wS,
                hasDeveloperMode: _,
                canReact: !V && g,
                canPublish: W,
                canConfigureJoin: Q,
                isExpanded: ea && !er && !i && !l && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: a,
                showMessageBookmarksActions: et,
                isMessageBookmark: el,
                setPopout: r,
                isFocused: s,
                isGuildInviteReminder: n.type === ei.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eh = l.useCallback(() => {
            U ||
                V.default.track(ei.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                ea({ moreUtilities: !U });
        }, [U, ea, n]),
        ep = l.useCallback(() => {
            ea({ emojiPicker: !W });
        }, [W, ea]),
        em = (0, O.$R)(t),
        eg = n.hasFlag(ei.iLy.CROSSPOSTED),
        [e_, eC] = (0, f.cv)(P ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ex = e_ === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [ev, eE] = l.useState(!1),
        eI = l.useCallback(() => {
            eE(!0);
        }, []),
        eb = l.useCallback(() => {
            eE(!1);
        }, []),
        eZ = l.useCallback(
            (e, t) => {
                eC(el.L.TAKE_ACTION), (0, $.ts)(e, t);
            },
            [eC]
        ),
        { canShowReactionsOnMessageHover: eN } = _.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    _.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eT = (0, A.V1)('ExpandingButtons') && !n.hasPotions(),
        eS = l.useCallback(
            (e) => {
                try {
                    (0, T.qc)(t.id, n.id, e);
                } catch {
                    (0, u.showToast)((0, u.createToast)(er.intl.string(er.t.xsfC2d), u.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            R
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          a && es
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t.zBoHlZ),
                                        icon: u.VuL,
                                        onClick: (e) => (0, $.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          a && !eo
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t.WqhZsr),
                                        icon: u.xPt,
                                        onClick: () => (0, $.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          x
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t.NpHUi4),
                                        icon: u.idN,
                                        onClick: () => (0, $.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          em
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t.RpE9k5),
                                        icon: u.z7b,
                                        onClick: () => (0, $.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          Y
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: et ? er.intl.string(er.t.LHUP9P) : er.intl.string(er.t['9p3D9v']),
                                        icon: et ? u.plf : u.gt9,
                                        onClick: () => (et ? (0, $.eM)(t, n) : (0, $.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          r
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: n.pinned ? er.intl.string(er.t['Bse+Fx']) : er.intl.string(er.t['CvQ18/']),
                                        icon: u.qQX,
                                        onClick: (e) => (0, $.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          Z && P
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t.rBIGBA),
                                        icon: u.or_,
                                        onClick: () => (0, $.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          b && h
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t['5IEsGx']),
                                        icon: u.n$P,
                                        onClick: (e) => (0, $.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            C && !eo
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eN && !R
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
                          eT
                              ? (0, i.jsx)(
                                    Q.sF,
                                    {
                                        label: er.intl.string(er.t.icaJW1),
                                        icon: u.l22,
                                        onClick: () =>
                                            (0, j.s)({
                                                channelId: t.id,
                                                message: n,
                                                onRedeem: eS,
                                                onClose: S.Qy
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
                          label: er.intl.string(er.t['5IEsGx']),
                          icon: u.n$P,
                          onClick: (e) => (0, $.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: er.intl.string(er.t.bt75u7),
                          icon: u.vdY,
                          onClick: () => (0, $.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            P
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: er.intl.string(er.t.I3ltXF),
                          icon: I.Z,
                          onClick: () => eZ(t, n),
                          onTooltipShow: eI,
                          onTooltipHide: eb,
                          showNewBadge: !ev && ex
                      },
                      'forward'
                  )
                : null,
            Z && !P
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: er.intl.string(er.t.rBIGBA),
                          icon: u.or_,
                          onClick: () => (0, $.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !Z && y
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: er.intl.string(er.t['39d0Wl']),
                          icon: u.or_,
                          onClick: () => (0, $.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: eg ? er.intl.string(er.t['1kWJAg']) : er.intl.string(er.t['MFGE5+']),
                          icon: u.MqZ,
                          onClick: () => (0, $.Xl)(t, n),
                          disabled: eg
                      },
                      'publish'
                  )
                : null,
            s && (eo || R)
                ? (0, i.jsx)(
                      Q.sF,
                      {
                          label: er.intl.string(er.t.oyYWHB),
                          icon: u.XHJ,
                          onClick: (e) => (0, $.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !R
                      },
                      'delete'
                  )
                : null,
            R && s
                ? null
                : (0, i.jsx)(u.yRy, {
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: a } = e;
                          return (0, i.jsx)(ed, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: a,
                              updatePosition: l
                          });
                      },
                      shouldShow: U,
                      onRequestClose: eh,
                      position: 'left',
                      align: 'top',
                      animation: u.yRy.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: a } = t;
                          return (0, i.jsx)(
                              Q.sF,
                              {
                                  label: er.intl.string(er.t.UKOtz8),
                                  icon: u.xhG,
                                  selected: a,
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
        a = null == n.interaction || (null != n.interactionData && (0, Z.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                a &&
                (0, i.jsx)(
                    Q.sF,
                    {
                        label: er.intl.string(er.t['5911LS']),
                        icon: u.Oe7,
                        onClick: () => (0, $.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                Q.sF,
                {
                    label: er.intl.string(er.t.oyYWHB),
                    icon: u.XHJ,
                    onClick: (e) => (0, $.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function em(e) {
    let { type: t, emoji: n, channel: i, message: l, location: a, isBurst: r = !1 } = e;
    if (null == n) return;
    let s = (0, P.g1)(n);
    'add' === t
        ? (0, y.rU)(i.id, l.id, s, a, { burst: r })
        : (0, y.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: a,
              options: { burst: r }
          });
}
function ef(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? ei.ZY5.GUILD_CHANNEL : ei.ZY5.DM_CHANNEL,
                section: (0, P.s4)(e),
                object: ei.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(R.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, a) => {
            em({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: y.TW.MESSAGE_REACTION_PICKER,
                isBurst: a
            }),
                l && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id
    });
}
let eg = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: a } = e,
        s = (0, c.e7)([U.Z], () => U.Z.isEditing(t.id, n.id), [t.id, n.id]),
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
              className: r()(e.className, {
                  [es.container]: !0,
                  [es.isHeader]: l,
                  [es.isReply]: a
              }),
              onClick: ec,
              onContextMenu: ec,
              role: 'group',
              'aria-label': er.intl.string(er.t.Lv7LxM),
              children: (0, i.jsxs)(Q.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
