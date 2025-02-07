n.d(t, { Z: () => eC }), n(47120);
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
    j = n(992970),
    y = n(135793),
    A = n(111810),
    P = n(84040),
    R = n(222677),
    M = n(995774),
    L = n(931651),
    k = n(280845),
    O = n(2818),
    D = n(768943),
    w = n(665906),
    U = n(695346),
    B = n(314897),
    F = n(323873),
    H = n(271383),
    G = n(430824),
    V = n(607744),
    z = n(496675),
    W = n(626135),
    Y = n(572004),
    q = n(176354),
    K = n(823379),
    X = n(970257),
    J = n(418476),
    Q = n(151007),
    $ = n(432376),
    ee = n(373662),
    et = n(996861),
    en = n(603490),
    ei = n(225138),
    el = n(717680),
    ea = n(981631),
    er = n(921944),
    es = n(185923),
    eo = n(388032),
    ec = n(522613);
let ed = [C.ZP.getByName('100'), C.ZP.getByName('laughing'), C.ZP.getByName('sparkling_heart')].filter(K.lm);
function eu(e) {
    e.stopPropagation();
}
function eh(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: a } = e;
    return (0, ei.S)({
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
        ariaLabel: eo.intl.string(eo.t.Lv7LxM)
    });
}
let ep = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !q.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: es.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        a = (l.length >= 3 ? l : [...(0, x.Z)(l.concat(ed)).values()]).slice(0, 3),
        r = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            var l;
            let a = r.find((t) => (0, M.ir)(t.emoji, (0, M.g1)(e))),
                s = null != a ? eo.intl.string(eo.t.wunKKC) : eo.intl.string(eo.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != a ? eo.intl.formatToPlainString(eo.t.vjeruL, { emojiName: o }) : eo.intl.formatToPlainString(eo.t.L1JQwM, { emojiName: o });
            return (0, i.jsx)(
                ee.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: ec.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: ec.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eg({
                            type: null != a ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: R.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: ec.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function em(e) {
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
            canViewThread: R,
            canForward: M,
            isExpanded: L,
            showMoreUtilities: F,
            showEmojiPicker: q,
            showMessageBookmarksActions: K,
            isMessageBookmark: ei,
            setPopout: es,
            hasDeveloperMode: ec,
            isGuildInviteReminder: ed,
            isFocused: eu
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: a, setPopout: r, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([G.Z], () => G.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([B.default], () => B.default.getId()),
                h = (0, w.$R)(t),
                f = (0, w.Gu)(t),
                g = U.nc.useSetting(),
                _ = U.Sb.useSetting(),
                C = (0, c.e7)([V.Z], () => null == t.guild_id || V.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: I } = (0, c.cj)(
                    [z.Z],
                    () => ({
                        canAddNewReactions: C && z.Z.can(ea.Plq.ADD_REACTIONS, t),
                        canManageMessages: z.Z.can(ea.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, C]
                ),
                b = (0, k.U)(t, n),
                Z = (0, w.NE)(t, n),
                T = (0, w.Ek)(n),
                S = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([H.ZP], () => null != t.guild_id && H.ZP.isCurrentUserGuest(t.guild_id), [t]),
                y = o.id === u,
                A = (x || n.canDeleteOwnMessage(u)) && h && !ea.V$x.UNDELETABLE.has(n.type);
            n.type === ea.uaV.AUTO_MODERATION_ACTION && (A = A && x);
            let P = (0, X.a4)(n),
                R = (0, Q.Z)(n, t, x),
                M = !t.isSystemDM() && (0, J.Z)(n, u) && h && !f,
                { disableReactionCreates: L } = (0, $.Z)({
                    channel: t,
                    canChat: C,
                    renderReactions: g,
                    canAddNewReactions: I,
                    isLurking: S,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                F = t.type === ea.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(ea.oNc.NEWS) && (y || x) && (0, m.Z)(n),
                W = t.getGuildId(),
                q = null != W && (n.type === ea.uaV.USER_JOIN || n.type === ea.uaV.GUILD_INVITE_REMINDER) && z.Z.canWithPartialContext(ea.Plq.MANAGE_GUILD, { guildId: W }),
                { canForwardMessages: K } = (0, v.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                ee = (0, E.a)(n),
                { enabled: et } = O.Z.useExperiment({ location: 'message_utilities' }),
                en = (0, c.e7)([D.Z], () => null != D.Z.getSavedMessage(t.id, n.id)),
                ei = (0, el.Z)(),
                er = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: M,
                canDelete: A,
                canReport: P,
                canReply: b,
                canStartThread: Z,
                canViewThread: T,
                canForward: K && ee,
                canCopy: Y.wS,
                hasDeveloperMode: _,
                canReact: !L && g,
                canPublish: F,
                canConfigureJoin: q,
                isExpanded: ei && !er && !i && !l && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: a,
                showMessageBookmarksActions: et,
                isMessageBookmark: en,
                setPopout: r,
                isFocused: s,
                isGuildInviteReminder: n.type === ea.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        em = l.useCallback(() => {
            F ||
                W.default.track(ea.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                es({ moreUtilities: !F });
        }, [F, es, n]),
        ef = l.useCallback(() => {
            es({ emojiPicker: !q });
        }, [q, es]),
        eg = (0, w.$R)(t),
        eC = n.hasFlag(ea.iLy.CROSSPOSTED),
        [ex, ev] = (0, f.cv)(M ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        eE = ex === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eI, eb] = l.useState(!1),
        eZ = l.useCallback(() => {
            eb(!0);
        }, []),
        eN = l.useCallback(() => {
            eb(!1);
        }, []),
        eT = l.useCallback(
            (e, t) => {
                ev(er.L.TAKE_ACTION), (0, et.ts)(e, t);
            },
            [ev]
        ),
        { canShowReactionsOnMessageHover: eS } = _.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    _.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let ej = (0, P.Z)(t, n),
        ey = (0, A.V1)('ExpandingButtons'),
        eA = ej && ey && !n.hasPotions(),
        eP = l.useCallback(
            (e) => {
                try {
                    (0, T.qc)(t.id, n.id, e);
                } catch {
                    (0, u.showToast)((0, u.createToast)(eo.intl.string(eo.t.xsfC2d), u.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            L
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          a && ec
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.zBoHlZ),
                                        icon: u.VuL,
                                        onClick: (e) => (0, et.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          a && !ed
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.WqhZsr),
                                        icon: u.xPt,
                                        onClick: () => (0, et.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          x
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.NpHUi4),
                                        icon: u.idN,
                                        onClick: () => (0, et.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eg
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.RpE9k5),
                                        icon: u.z7b,
                                        onClick: () => (0, et.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          K
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: ei ? eo.intl.string(eo.t.LHUP9P) : eo.intl.string(eo.t['9p3D9v']),
                                        icon: ei ? u.plf : u.gt9,
                                        onClick: () => (ei ? (0, et.eM)(t, n) : (0, et.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          r
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: n.pinned ? eo.intl.string(eo.t['Bse+Fx']) : eo.intl.string(eo.t['CvQ18/']),
                                        icon: u.qQX,
                                        onClick: (e) => (0, et.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          Z && M
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.rBIGBA),
                                        icon: u.or_,
                                        onClick: () => (0, et.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          b && h
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t['5IEsGx']),
                                        icon: u.n$P,
                                        onClick: (e) => (0, et.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            C && !ed
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eS && !L
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(ep, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(ee.fO, {})
                                    ]
                                })
                              : null,
                          (0, i.jsx)(en.Z, {
                              togglePopout: ef,
                              renderEmojiPicker: e_,
                              shouldShow: q,
                              isFocused: eu,
                              channel: t,
                              message: n
                          }),
                          eA
                              ? (0, i.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.icaJW1),
                                        icon: u.l22,
                                        onClick: () => {
                                            W.default.track(ea.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: j.MG.MessageExpandingButtons }),
                                                (0, y.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eP,
                                                    onClose: S.Qy,
                                                    source: j.YD.MessageExpandingButtons
                                                });
                                        }
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            b && !h
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t['5IEsGx']),
                          icon: u.n$P,
                          onClick: (e) => (0, et.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.bt75u7),
                          icon: u.vdY,
                          onClick: () => (0, et.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            M
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.I3ltXF),
                          icon: I.Z,
                          onClick: () => eT(t, n),
                          onTooltipShow: eZ,
                          onTooltipHide: eN,
                          showNewBadge: !eI && eE
                      },
                      'forward'
                  )
                : null,
            Z && !M
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.rBIGBA),
                          icon: u.or_,
                          onClick: () => (0, et.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !Z && R
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t['39d0Wl']),
                          icon: u.or_,
                          onClick: () => (0, et.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eC ? eo.intl.string(eo.t['1kWJAg']) : eo.intl.string(eo.t['MFGE5+']),
                          icon: u.MqZ,
                          onClick: () => (0, et.Xl)(t, n),
                          disabled: eC
                      },
                      'publish'
                  )
                : null,
            s && (ed || L)
                ? (0, i.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.oyYWHB),
                          icon: u.XHJ,
                          onClick: (e) => (0, et.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !L
                      },
                      'delete'
                  )
                : null,
            L && s
                ? null
                : (0, i.jsx)(u.yRy, {
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: a } = e;
                          return (0, i.jsx)(eh, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: a,
                              updatePosition: l
                          });
                      },
                      shouldShow: F,
                      onRequestClose: em,
                      position: 'left',
                      align: 'top',
                      animation: u.yRy.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: a } = t;
                          return (0, i.jsx)(
                              ee.sF,
                              {
                                  label: eo.intl.string(eo.t.UKOtz8),
                                  icon: u.xhG,
                                  selected: a,
                                  onClick: em,
                                  ...l
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function ef(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        a = null == n.interaction || (null != n.interactionData && (0, Z.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                a &&
                (0, i.jsx)(
                    ee.sF,
                    {
                        label: eo.intl.string(eo.t['5911LS']),
                        icon: u.Oe7,
                        onClick: () => (0, et.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                ee.sF,
                {
                    label: eo.intl.string(eo.t.oyYWHB),
                    icon: u.XHJ,
                    onClick: (e) => (0, et.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eg(e) {
    let { type: t, emoji: n, channel: i, message: l, location: a, isBurst: r = !1 } = e;
    if (null == n) return;
    let s = (0, M.g1)(n);
    'add' === t
        ? (0, R.rU)(i.id, l.id, s, a, { burst: r })
        : (0, R.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: a,
              options: { burst: r }
          });
}
function e_(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? ea.ZY5.GUILD_CHANNEL : ea.ZY5.DM_CHANNEL,
                section: (0, M.s4)(e),
                object: ea.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(L.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, a) => {
            eg({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: R.TW.MESSAGE_REACTION_PICKER,
                isBurst: a
            }),
                l && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id
    });
}
let eC = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: a } = e,
        s = (0, c.e7)([F.Z], () => F.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ea.yb.SEND_FAILED
                ? (0, i.jsx)(ef, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        d = (function (e) {
            let { message: t } = e;
            return t.state !== ea.yb.SEND_FAILED ? (0, i.jsx)(em, { ...e }) : null;
        })(e);
    return s || (null == o && null == d)
        ? null
        : (0, i.jsx)('div', {
              className: r()(e.className, {
                  [ec.container]: !0,
                  [ec.isHeader]: l,
                  [ec.isReply]: a
              }),
              onClick: eu,
              onContextMenu: eu,
              role: 'group',
              'aria-label': eo.intl.string(eo.t.Lv7LxM),
              children: (0, i.jsxs)(ee.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
