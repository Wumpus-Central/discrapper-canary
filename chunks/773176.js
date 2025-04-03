n.d(t, { Z: () => eC }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(954955),
    s = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    p = n(596454),
    h = n(607070),
    f = n(110630),
    m = n(706140),
    g = n(543241),
    b = n(407477),
    _ = n(633302),
    C = n(856985),
    y = n(346610),
    x = n(868643),
    v = n(245216),
    j = n(223606),
    O = n(188597),
    E = n(41776),
    N = n(980463),
    I = n(328908),
    P = n(992970),
    S = n(135793),
    Z = n(576645),
    T = n(84040),
    A = n(222677),
    w = n(995774),
    R = n(931651),
    M = n(280845),
    k = n(2818),
    L = n(768943),
    D = n(665906),
    W = n(695346),
    U = n(314897),
    B = n(323873),
    H = n(271383),
    F = n(430824),
    G = n(607744),
    V = n(496675),
    z = n(626135),
    Y = n(572004),
    q = n(176354),
    K = n(823379),
    X = n(970257),
    Q = n(418476),
    J = n(151007),
    $ = n(432376),
    ee = n(373662),
    et = n(996861),
    en = n(603490),
    er = n(225138),
    ei = n(717680),
    el = n(981631),
    eo = n(921944),
    ea = n(185923),
    es = n(388032),
    ec = n(351131);
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let ed = [_.ZP.getByName('100'), _.ZP.getByName('laughing'), _.ZP.getByName('sparkling_heart')].filter(K.lm);
function ep(e) {
    e.stopPropagation();
}
function eh(e) {
    let { message: t, channel: n, canReport: r, onClose: i, updatePosition: l } = e;
    return (0, er.S)({
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
        canReport: r,
        onHeightUpdate: l,
        onClose: i,
        navId: 'message-actions',
        ariaLabel: es.NW.string(es.t.Lv7LxM)
    });
}
let ef = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !q.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ea.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        l = (i.length >= 3 ? i : [...(0, C.Z)(i.concat(ed)).values()]).slice(0, 3),
        o = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            var i;
            let l = o.find((t) => (0, w.ir)(t.emoji, (0, w.g1)(e))),
                a = null != l ? es.NW.string(es.t.wunKKC) : es.NW.string(es.t.XVx5BA),
                s = null == e.id ? e.uniqueName : e.name,
                c = null != l ? es.NW.formatToPlainString(es.t.vjeruL, { emojiName: s }) : es.NW.formatToPlainString(es.t.L1JQwM, { emojiName: s });
            return (0, r.jsx)(
                ee.sF,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: ec.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: ec.emojiTooltipText,
                                children: a
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eb({
                            type: null != l ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: A.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, r.jsx)(p.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: ec.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null != (i = e.id) ? i : 0, ':').concat(e.name)
            );
        })
    });
});
function em(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: o,
            canDelete: a,
            canReport: s,
            canEdit: p,
            canPublish: g,
            canReact: _,
            canConfigureJoin: C,
            canReply: j,
            canStartThread: O,
            canViewThread: A,
            canForward: w,
            isExpanded: R,
            showMoreUtilities: B,
            showEmojiPicker: q,
            showMessageBookmarksActions: K,
            isMessageBookmark: er,
            setPopout: ea,
            hasDeveloperMode: ec,
            isGuildInviteReminder: ed,
            isFocused: ep
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: r, showEmojiBurstPicker: i, showMoreUtilities: l, setPopout: o, isFocused: a } = e,
                { author: s } = n,
                u = (0, c.e7)([F.Z], () => F.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([U.default], () => U.default.getId()),
                p = (0, D.$R)(t),
                m = (0, D.Gu)(t),
                g = W.nc.useSetting(),
                b = W.Sb.useSetting(),
                _ = (0, c.e7)([G.Z], () => null == t.guild_id || G.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: C, canAddNewReactions: v } = (0, c.cj)(
                    [V.Z],
                    () => ({
                        canAddNewReactions: _ && V.Z.can(el.Plq.ADD_REACTIONS, t),
                        canManageMessages: V.Z.can(el.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, _]
                ),
                j = (0, M.U)(t, n),
                O = (0, D.NE)(t, n),
                N = (0, D.Ek)(n),
                I = (0, c.e7)([E.Z], () => null != t.guild_id && E.Z.isLurking(t.guild_id), [t]),
                P = (0, c.e7)([H.ZP], () => null != t.guild_id && H.ZP.isCurrentUserGuest(t.guild_id), [t]),
                S = s.id === d,
                Z = (C || n.canDeleteOwnMessage(d)) && p && !el.V$x.UNDELETABLE.has(n.type);
            n.type === el.uaV.AUTO_MODERATION_ACTION && (Z = Z && C);
            let T = (0, X.a4)(n),
                A = (0, J.Z)(n, t, C),
                w = !t.isSystemDM() && (0, Q.Z)(n, d) && p && !m,
                { disableReactionCreates: R } = (0, $.Z)({
                    channel: t,
                    canChat: _,
                    renderReactions: g,
                    canAddNewReactions: v,
                    isLurking: I,
                    isGuest: P,
                    isActiveChannelOrUnarchivableThread: p
                }),
                B = t.type === el.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(el.oNc.NEWS) && (S || C) && (0, f.Z)(n),
                z = t.getGuildId(),
                q = null != z && (n.type === el.uaV.USER_JOIN || n.type === el.uaV.GUILD_INVITE_REMINDER) && V.Z.canWithPartialContext(el.Plq.MANAGE_GUILD, { guildId: z }),
                { canForwardMessages: K } = (0, y.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                ee = (0, x.a)(n),
                { enabled: et } = k.Z.useExperiment({ location: 'message_utilities' }),
                en = (0, c.e7)([L.Z], () => null != L.Z.getSavedMessage(t.id, n.id)),
                er = (0, ei.Z)(),
                eo = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: A,
                canEdit: w,
                canDelete: Z,
                canReport: T,
                canReply: j,
                canStartThread: O,
                canViewThread: N,
                canForward: K && ee,
                canCopy: Y.wS,
                hasDeveloperMode: b,
                canReact: !R && g,
                canPublish: B,
                canConfigureJoin: q,
                isExpanded: er && !eo && !r && !i && !l,
                showEmojiPicker: r,
                showEmojiBurstPicker: i,
                showMoreUtilities: l,
                showMessageBookmarksActions: et,
                isMessageBookmark: en,
                setPopout: o,
                isFocused: a,
                isGuildInviteReminder: n.type === el.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        em = i.useRef(null),
        eg = i.useCallback(() => {
            B ||
                z.default.track(el.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                ea({ moreUtilities: !B });
        }, [B, ea, n]),
        eb = i.useCallback(() => {
            ea({ emojiPicker: !q });
        }, [q, ea]),
        eC = (0, D.$R)(t),
        ey = n.hasFlag(el.iLy.CROSSPOSTED),
        [ex, ev] = (0, m.cv)(w ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ej = ex === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eO, eE] = i.useState(!1),
        eN = i.useCallback(() => {
            eE(!0);
        }, []),
        eI = i.useCallback(() => {
            eE(!1);
        }, []),
        eP = i.useCallback(
            (e, t) => {
                ev(eo.L.TAKE_ACTION), (0, et.ts)(e, t);
            },
            [ev]
        ),
        { canShowReactionsOnMessageHover: eS } = b.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    b.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eZ = (0, T.Z)(t, n),
        eT = (0, Z.Nt)(),
        eA = eZ && eT && !n.hasPotions(),
        ew = i.useCallback(
            (e) => {
                try {
                    (0, N.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(es.NW.string(es.t.xsfC2d), d.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && ec
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t.zBoHlZ),
                                        icon: d.VuL,
                                        onClick: (e) => (0, et.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          l && !ed
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t.WqhZsr),
                                        icon: d.xPt,
                                        onClick: () => (0, et.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          C
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t.NpHUi4),
                                        icon: d.idN,
                                        onClick: () => (0, et.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eC
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t.RpE9k5),
                                        icon: d.z7b,
                                        onClick: () => (0, et.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          K
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: er ? es.NW.string(es.t.LHUP9P) : es.NW.string(es.t['9p3D9v']),
                                        icon: er ? d.plf : d.gt9,
                                        onClick: () => (er ? (0, et.eM)(t, n) : (0, et.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          o
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: n.pinned ? es.NW.string(es.t['Bse+Fx']) : es.NW.string(es.t['CvQ18/']),
                                        icon: d.qQX,
                                        onClick: (e) => (0, et.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          O && w
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t.rBIGBA),
                                        icon: d.or_,
                                        onClick: () => (0, et.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          j && p
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t['5IEsGx']),
                                        icon: d.n$P,
                                        onClick: (e) => (0, et.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            _ && !ed
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          eS && !R
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(ef, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, r.jsx)(ee.fO, {})
                                    ]
                                })
                              : null,
                          (0, r.jsx)(en.Z, {
                              togglePopout: eb,
                              renderEmojiPicker: e_,
                              shouldShow: q,
                              isFocused: ep,
                              channel: t,
                              message: n
                          }),
                          eA
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: es.NW.string(es.t.icaJW1),
                                        icon: d.l22,
                                        onClick: () => {
                                            z.default.track(el.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: P.MG.MessageExpandingButtons }),
                                                (0, S.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: ew,
                                                    onClose: I.Qy,
                                                    source: P.YD.MessageExpandingButtons
                                                });
                                        }
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            j && !p
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: es.NW.string(es.t['5IEsGx']),
                          icon: d.n$P,
                          onClick: (e) => (0, et.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            p
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: es.NW.string(es.t.bt75u7),
                          icon: d.vdY,
                          onClick: () => (0, et.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            w
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: es.NW.string(es.t.I3ltXF),
                          icon: v.Z,
                          onClick: () => eP(t, n),
                          onTooltipShow: eN,
                          onTooltipHide: eI,
                          showNewBadge: !eO && ej
                      },
                      'forward'
                  )
                : null,
            O && !w
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: es.NW.string(es.t.rBIGBA),
                          icon: d.or_,
                          onClick: () => (0, et.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !O && A
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: es.NW.string(es.t['39d0Wl']),
                          icon: d.or_,
                          onClick: () => (0, et.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: ey ? es.NW.string(es.t['1kWJAg']) : es.NW.string(es.t['MFGE5+']),
                          icon: d.MqZ,
                          onClick: () => (0, et.Xl)(t, n),
                          disabled: ey
                      },
                      'publish'
                  )
                : null,
            a && (ed || R)
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: es.NW.string(es.t.oyYWHB),
                          icon: d.XHJ,
                          onClick: (e) => (0, et.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !R
                      },
                      'delete'
                  )
                : null,
            R && a
                ? null
                : (0, r.jsx)(d.yRy, {
                      targetElementRef: em,
                      renderPopout: (e) => {
                          let { updatePosition: i, closePopout: l } = e;
                          return (0, r.jsx)(eh, {
                              channel: t,
                              message: n,
                              canReport: s,
                              onClose: l,
                              updatePosition: i
                          });
                      },
                      shouldShow: B,
                      onRequestClose: eg,
                      position: 'left',
                      align: 'top',
                      animation: d.yRy.Animation.NONE,
                      children: (e, t) => {
                          var { onClick: n } = e,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = {},
                                              l = Object.keys(e);
                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, ['onClick']),
                              { isShown: l } = t;
                          return (0, r.jsx)(
                              ee.sF,
                              eu(
                                  {
                                      ref: em,
                                      label: es.NW.string(es.t.UKOtz8),
                                      icon: d.xhG,
                                      selected: l,
                                      onClick: eg
                                  },
                                  i
                              ),
                              'more'
                          );
                      }
                  })
        ]
    });
}
function eg(e) {
    let { channel: t, message: n } = e,
        i = (0, c.e7)([j.Z], () => null != j.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, O.$s)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    ee.sF,
                    {
                        label: es.NW.string(es.t['5911LS']),
                        icon: d.Oe7,
                        onClick: () => (0, et.mG)(t, n)
                    },
                    'retry'
                ),
            (0, r.jsx)(
                ee.sF,
                {
                    label: es.NW.string(es.t.oyYWHB),
                    icon: d.XHJ,
                    onClick: (e) => (0, et.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eb(e) {
    let { type: t, emoji: n, channel: r, message: i, location: l, isBurst: o = !1 } = e;
    if (null == n) return;
    let a = (0, w.g1)(n);
    'add' === t
        ? (0, A.rU)(r.id, i.id, a, l, { burst: o })
        : (0, A.WO)({
              channelId: r.id,
              messageId: i.id,
              emoji: a,
              location: l,
              options: { burst: o }
          });
}
function e_(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = eu(
            { openPopoutType: 'message_reaction_emoji_picker' },
            i && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? el.ZY5.GUILD_CHANNEL : el.ZY5.DM_CHANNEL,
                section: (0, w.s4)(e),
                object: el.qAy.EMOJI_REACTION_PICKER_POPOUT
            }
        );
    return (0, r.jsx)(R.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r, i, l) => {
            eb({
                type: 'add',
                emoji: r,
                channel: e,
                message: t,
                location: A.TW.MESSAGE_REACTION_PICKER,
                isBurst: l
            }),
                i && (l ? s()(n, 150)() : n());
        },
        analyticsOverride: l,
        messageId: t.id
    });
}
let eC = i.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: l } = e,
        a = (0, c.e7)([B.Z], () => B.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === el.yb.SEND_FAILED
                ? (0, r.jsx)(eg, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        u = (function (e) {
            let { message: t } = e;
            return t.state !== el.yb.SEND_FAILED ? (0, r.jsx)(em, eu({}, e)) : null;
        })(e);
    return a || (null == s && null == u)
        ? null
        : (0, r.jsx)('div', {
              className: o()(e.className, {
                  [ec.container]: !0,
                  [ec.isHeader]: i,
                  [ec.isReply]: l
              }),
              onClick: ep,
              onContextMenu: ep,
              role: 'group',
              'aria-label': es.NW.string(es.t.Lv7LxM),
              children: (0, r.jsxs)(ee.ZP, {
                  className: e.innerClassName,
                  children: [s, u]
              })
          });
});
