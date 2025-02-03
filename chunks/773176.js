n.d(t, { Z: () => e_ }), n(47120);
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
    y = n(84040),
    P = n(222677),
    R = n(995774),
    M = n(931651),
    L = n(280845),
    k = n(2818),
    O = n(768943),
    D = n(665906),
    w = n(695346),
    U = n(314897),
    B = n(323873),
    F = n(271383),
    H = n(430824),
    G = n(607744),
    V = n(496675),
    z = n(626135),
    W = n(572004),
    Y = n(176354),
    q = n(823379),
    K = n(970257),
    X = n(418476),
    J = n(151007),
    Q = n(432376),
    $ = n(373662),
    ee = n(996861),
    et = n(603490),
    en = n(225138),
    ei = n(717680),
    el = n(981631),
    ea = n(921944),
    er = n(185923),
    es = n(388032),
    eo = n(522613);
let ec = [C.ZP.getByName('100'), C.ZP.getByName('laughing'), C.ZP.getByName('sparkling_heart')].filter(q.lm);
function ed(e) {
    e.stopPropagation();
}
function eu(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: a } = e;
    return (0, en.S)({
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
        ariaLabel: es.intl.string(es.t.Lv7LxM)
    });
}
let eh = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !Y.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: er.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        a = (l.length >= 3 ? l : [...(0, x.Z)(l.concat(ec)).values()]).slice(0, 3),
        r = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            var l;
            let a = r.find((t) => (0, R.ir)(t.emoji, (0, R.g1)(e))),
                s = null != a ? es.intl.string(es.t.wunKKC) : es.intl.string(es.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != a ? es.intl.formatToPlainString(es.t.vjeruL, { emojiName: o }) : es.intl.formatToPlainString(es.t.L1JQwM, { emojiName: o });
            return (0, i.jsx)(
                $.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: eo.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: eo.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        ef({
                            type: null != a ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: P.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: eo.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function ep(e) {
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
            canViewThread: P,
            canForward: R,
            isExpanded: M,
            showMoreUtilities: B,
            showEmojiPicker: Y,
            showMessageBookmarksActions: q,
            isMessageBookmark: en,
            setPopout: er,
            hasDeveloperMode: eo,
            isGuildInviteReminder: ec,
            isFocused: ed
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: a, setPopout: r, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([H.Z], () => H.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([U.default], () => U.default.getId()),
                h = (0, D.$R)(t),
                f = (0, D.Gu)(t),
                g = w.nc.useSetting(),
                _ = w.Sb.useSetting(),
                C = (0, c.e7)([G.Z], () => null == t.guild_id || G.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: I } = (0, c.cj)(
                    [V.Z],
                    () => ({
                        canAddNewReactions: C && V.Z.can(el.Plq.ADD_REACTIONS, t),
                        canManageMessages: V.Z.can(el.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, C]
                ),
                b = (0, L.U)(t, n),
                Z = (0, D.NE)(t, n),
                T = (0, D.Ek)(n),
                S = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([F.ZP], () => null != t.guild_id && F.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = o.id === u,
                y = (x || n.canDeleteOwnMessage(u)) && h && !el.V$x.UNDELETABLE.has(n.type);
            n.type === el.uaV.AUTO_MODERATION_ACTION && (y = y && x);
            let P = (0, K.a4)(n),
                R = (0, J.Z)(n, t, x),
                M = !t.isSystemDM() && (0, X.Z)(n, u) && h && !f,
                { disableReactionCreates: B } = (0, Q.Z)({
                    channel: t,
                    canChat: C,
                    renderReactions: g,
                    canAddNewReactions: I,
                    isLurking: S,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                z = t.type === el.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(el.oNc.NEWS) && (A || x) && (0, m.Z)(n),
                Y = t.getGuildId(),
                q = null != Y && (n.type === el.uaV.USER_JOIN || n.type === el.uaV.GUILD_INVITE_REMINDER) && V.Z.canWithPartialContext(el.Plq.MANAGE_GUILD, { guildId: Y }),
                { canForwardMessages: $ } = (0, v.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                ee = (0, E.a)(n),
                { enabled: et } = k.Z.useExperiment({ location: 'message_utilities' }),
                en = (0, c.e7)([O.Z], () => null != O.Z.getSavedMessage(t.id, n.id)),
                ea = (0, ei.Z)(),
                er = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: M,
                canDelete: y,
                canReport: P,
                canReply: b,
                canStartThread: Z,
                canViewThread: T,
                canForward: $ && ee,
                canCopy: W.wS,
                hasDeveloperMode: _,
                canReact: !B && g,
                canPublish: z,
                canConfigureJoin: q,
                isExpanded: ea && !er && !i && !l && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: a,
                showMessageBookmarksActions: et,
                isMessageBookmark: en,
                setPopout: r,
                isFocused: s,
                isGuildInviteReminder: n.type === el.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        ep = l.useCallback(() => {
            B ||
                z.default.track(el.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                er({ moreUtilities: !B });
        }, [B, er, n]),
        em = l.useCallback(() => {
            er({ emojiPicker: !Y });
        }, [Y, er]),
        ef = (0, D.$R)(t),
        e_ = n.hasFlag(el.iLy.CROSSPOSTED),
        [eC, ex] = (0, f.cv)(R ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ev = eC === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eE, eI] = l.useState(!1),
        eb = l.useCallback(() => {
            eI(!0);
        }, []),
        eZ = l.useCallback(() => {
            eI(!1);
        }, []),
        eN = l.useCallback(
            (e, t) => {
                ex(ea.L.TAKE_ACTION), (0, ee.ts)(e, t);
            },
            [ex]
        ),
        { canShowReactionsOnMessageHover: eT } = _.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    _.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eS = (0, y.Z)(t, n),
        ej = (0, A.V1)('ExpandingButtons'),
        eA = eS && ej && !n.hasPotions(),
        ey = l.useCallback(
            (e) => {
                try {
                    (0, T.qc)(t.id, n.id, e);
                } catch {
                    (0, u.showToast)((0, u.createToast)(es.intl.string(es.t.xsfC2d), u.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          a && eo
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t.zBoHlZ),
                                        icon: u.VuL,
                                        onClick: (e) => (0, ee.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          a && !ec
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t.WqhZsr),
                                        icon: u.xPt,
                                        onClick: () => (0, ee.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          x
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t.NpHUi4),
                                        icon: u.idN,
                                        onClick: () => (0, ee.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          ef
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t.RpE9k5),
                                        icon: u.z7b,
                                        onClick: () => (0, ee.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          q
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: en ? es.intl.string(es.t.LHUP9P) : es.intl.string(es.t['9p3D9v']),
                                        icon: en ? u.plf : u.gt9,
                                        onClick: () => (en ? (0, ee.eM)(t, n) : (0, ee.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          r
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: n.pinned ? es.intl.string(es.t['Bse+Fx']) : es.intl.string(es.t['CvQ18/']),
                                        icon: u.qQX,
                                        onClick: (e) => (0, ee.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          Z && R
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t.rBIGBA),
                                        icon: u.or_,
                                        onClick: () => (0, ee.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          b && h
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t['5IEsGx']),
                                        icon: u.n$P,
                                        onClick: (e) => (0, ee.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            C && !ec
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eT && !M
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eh, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)($.fO, {})
                                    ]
                                })
                              : null,
                          (0, i.jsx)(et.Z, {
                              togglePopout: em,
                              renderEmojiPicker: eg,
                              shouldShow: Y,
                              isFocused: ed,
                              channel: t,
                              message: n
                          }),
                          eA
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: es.intl.string(es.t.icaJW1),
                                        icon: u.l22,
                                        onClick: () =>
                                            (0, j.s)({
                                                channelId: t.id,
                                                message: n,
                                                onRedeem: ey,
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
                      $.sF,
                      {
                          label: es.intl.string(es.t['5IEsGx']),
                          icon: u.n$P,
                          onClick: (e) => (0, ee.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: es.intl.string(es.t.bt75u7),
                          icon: u.vdY,
                          onClick: () => (0, ee.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            R
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: es.intl.string(es.t.I3ltXF),
                          icon: I.Z,
                          onClick: () => eN(t, n),
                          onTooltipShow: eb,
                          onTooltipHide: eZ,
                          showNewBadge: !eE && ev
                      },
                      'forward'
                  )
                : null,
            Z && !R
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: es.intl.string(es.t.rBIGBA),
                          icon: u.or_,
                          onClick: () => (0, ee.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !Z && P
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: es.intl.string(es.t['39d0Wl']),
                          icon: u.or_,
                          onClick: () => (0, ee.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: e_ ? es.intl.string(es.t['1kWJAg']) : es.intl.string(es.t['MFGE5+']),
                          icon: u.MqZ,
                          onClick: () => (0, ee.Xl)(t, n),
                          disabled: e_
                      },
                      'publish'
                  )
                : null,
            s && (ec || M)
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: es.intl.string(es.t.oyYWHB),
                          icon: u.XHJ,
                          onClick: (e) => (0, ee.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !M
                      },
                      'delete'
                  )
                : null,
            M && s
                ? null
                : (0, i.jsx)(u.yRy, {
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: a } = e;
                          return (0, i.jsx)(eu, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: a,
                              updatePosition: l
                          });
                      },
                      shouldShow: B,
                      onRequestClose: ep,
                      position: 'left',
                      align: 'top',
                      animation: u.yRy.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: a } = t;
                          return (0, i.jsx)(
                              $.sF,
                              {
                                  label: es.intl.string(es.t.UKOtz8),
                                  icon: u.xhG,
                                  selected: a,
                                  onClick: ep,
                                  ...l
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function em(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        a = null == n.interaction || (null != n.interactionData && (0, Z.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                a &&
                (0, i.jsx)(
                    $.sF,
                    {
                        label: es.intl.string(es.t['5911LS']),
                        icon: u.Oe7,
                        onClick: () => (0, ee.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                $.sF,
                {
                    label: es.intl.string(es.t.oyYWHB),
                    icon: u.XHJ,
                    onClick: (e) => (0, ee.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function ef(e) {
    let { type: t, emoji: n, channel: i, message: l, location: a, isBurst: r = !1 } = e;
    if (null == n) return;
    let s = (0, R.g1)(n);
    'add' === t
        ? (0, P.rU)(i.id, l.id, s, a, { burst: r })
        : (0, P.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: a,
              options: { burst: r }
          });
}
function eg(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? el.ZY5.GUILD_CHANNEL : el.ZY5.DM_CHANNEL,
                section: (0, R.s4)(e),
                object: el.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(M.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, a) => {
            ef({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: P.TW.MESSAGE_REACTION_PICKER,
                isBurst: a
            }),
                l && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id
    });
}
let e_ = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: a } = e,
        s = (0, c.e7)([B.Z], () => B.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === el.yb.SEND_FAILED
                ? (0, i.jsx)(em, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        d = (function (e) {
            let { message: t } = e;
            return t.state !== el.yb.SEND_FAILED ? (0, i.jsx)(ep, { ...e }) : null;
        })(e);
    return s || (null == o && null == d)
        ? null
        : (0, i.jsx)('div', {
              className: r()(e.className, {
                  [eo.container]: !0,
                  [eo.isHeader]: l,
                  [eo.isReply]: a
              }),
              onClick: ed,
              onContextMenu: ed,
              role: 'group',
              'aria-label': es.intl.string(es.t.Lv7LxM),
              children: (0, i.jsxs)($.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
