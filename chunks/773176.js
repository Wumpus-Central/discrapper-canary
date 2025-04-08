n.d(t, { Z: () => e_ }), n(388685);
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
    y = n(868643),
    x = n(245216),
    v = n(223606),
    j = n(188597),
    O = n(41776),
    E = n(980463),
    N = n(328908),
    I = n(992970),
    P = n(135793),
    S = n(576645),
    Z = n(84040),
    T = n(222677),
    A = n(995774),
    w = n(931651),
    R = n(280845),
    k = n(2818),
    M = n(768943),
    L = n(665906),
    D = n(695346),
    W = n(314897),
    U = n(323873),
    B = n(271383),
    H = n(430824),
    F = n(607744),
    G = n(496675),
    V = n(626135),
    z = n(572004),
    Y = n(176354),
    q = n(823379),
    K = n(970257),
    X = n(418476),
    Q = n(151007),
    J = n(432376),
    $ = n(373662),
    ee = n(996861),
    et = n(603490),
    en = n(225138),
    er = n(717680),
    ei = n(981631),
    el = n(921944),
    eo = n(185923),
    ea = n(388032),
    es = n(351131);
function ec(e) {
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
let eu = [_.ZP.getByName('100'), _.ZP.getByName('laughing'), _.ZP.getByName('sparkling_heart')].filter(q.lm);
function ed(e) {
    e.stopPropagation();
}
function ep(e) {
    let { message: t, channel: n, canReport: r, onClose: i, updatePosition: l } = e;
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
        canReport: r,
        onHeightUpdate: l,
        onClose: i,
        navId: 'message-actions',
        ariaLabel: ea.NW.string(ea.t.Lv7LxM)
    });
}
let eh = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !Y.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: eo.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        l = (i.length >= 3 ? i : [...(0, C.Z)(i.concat(eu)).values()]).slice(0, 3),
        o = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            var i;
            let l = o.find((t) => (0, A.ir)(t.emoji, (0, A.g1)(e))),
                a = null != l ? ea.NW.string(ea.t.wunKKC) : ea.NW.string(ea.t.XVx5BA),
                s = null == e.id ? e.uniqueName : e.name,
                c = null != l ? ea.NW.formatToPlainString(ea.t.vjeruL, { emojiName: s }) : ea.NW.formatToPlainString(ea.t.L1JQwM, { emojiName: s });
            return (0, r.jsx)(
                $.sF,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: es.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: es.emojiTooltipText,
                                children: a
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eg({
                            type: null != l ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: T.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, r.jsx)(p.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: es.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null != (i = e.id) ? i : 0, ':').concat(e.name)
            );
        })
    });
});
function ef(e) {
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
            canReply: v,
            canStartThread: j,
            canViewThread: T,
            canForward: A,
            isExpanded: w,
            showMoreUtilities: U,
            showEmojiPicker: Y,
            showMessageBookmarksActions: q,
            isMessageBookmark: en,
            setPopout: eo,
            hasDeveloperMode: es,
            isGuildInviteReminder: eu,
            isFocused: ed
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: r, showEmojiBurstPicker: i, showMoreUtilities: l, setPopout: o, isFocused: a } = e,
                { author: s } = n,
                u = (0, c.e7)([H.Z], () => H.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([W.default], () => W.default.getId()),
                p = (0, L.$R)(t),
                m = (0, L.Gu)(t),
                g = D.nc.useSetting(),
                b = D.Sb.useSetting(),
                _ = (0, c.e7)([F.Z], () => null == t.guild_id || F.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: C, canAddNewReactions: x } = (0, c.cj)(
                    [G.Z],
                    () => ({
                        canAddNewReactions: _ && G.Z.can(ei.Plq.ADD_REACTIONS, t),
                        canManageMessages: G.Z.can(ei.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, _]
                ),
                v = (0, R.U)(t, n),
                j = (0, L.NE)(t, n),
                E = (0, L.Ek)(n),
                N = (0, c.e7)([O.Z], () => null != t.guild_id && O.Z.isLurking(t.guild_id), [t]),
                I = (0, c.e7)([B.ZP], () => null != t.guild_id && B.ZP.isCurrentUserGuest(t.guild_id), [t]),
                P = s.id === d,
                S = (C || n.canDeleteOwnMessage(d)) && p && !ei.V$x.UNDELETABLE.has(n.type);
            n.type === ei.uaV.AUTO_MODERATION_ACTION && (S = S && C);
            let Z = (0, K.a4)(n),
                T = (0, Q.Z)(n, t, C),
                A = !t.isSystemDM() && (0, X.Z)(n, d) && p && !m,
                { disableReactionCreates: w } = (0, J.Z)({
                    channel: t,
                    canChat: _,
                    renderReactions: g,
                    canAddNewReactions: x,
                    isLurking: N,
                    isGuest: I,
                    isActiveChannelOrUnarchivableThread: p
                }),
                U = t.type === ei.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(ei.oNc.NEWS) && (P || C) && (0, f.Z)(n),
                V = t.getGuildId(),
                Y = null != V && (n.type === ei.uaV.USER_JOIN || n.type === ei.uaV.GUILD_INVITE_REMINDER) && G.Z.canWithPartialContext(ei.Plq.MANAGE_GUILD, { guildId: V }),
                q = (0, y.a)(n),
                { enabled: $ } = k.Z.useExperiment({ location: 'message_utilities' }),
                ee = (0, c.e7)([M.Z], () => null != M.Z.getSavedMessage(t.id, n.id)),
                et = (0, er.Z)(),
                en = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: T,
                canEdit: A,
                canDelete: S,
                canReport: Z,
                canReply: v,
                canStartThread: j,
                canViewThread: E,
                canForward: q,
                canCopy: z.wS,
                hasDeveloperMode: b,
                canReact: !w && g,
                canPublish: U,
                canConfigureJoin: Y,
                isExpanded: et && !en && !r && !i && !l,
                showEmojiPicker: r,
                showEmojiBurstPicker: i,
                showMoreUtilities: l,
                showMessageBookmarksActions: $,
                isMessageBookmark: ee,
                setPopout: o,
                isFocused: a,
                isGuildInviteReminder: n.type === ei.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        ef = i.useRef(null),
        em = i.useCallback(() => {
            U ||
                V.default.track(ei.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                eo({ moreUtilities: !U });
        }, [U, eo, n]),
        eg = i.useCallback(() => {
            eo({ emojiPicker: !Y });
        }, [Y, eo]),
        e_ = (0, L.$R)(t),
        eC = n.hasFlag(ei.iLy.CROSSPOSTED),
        [ey, ex] = (0, m.cv)(A ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ev = ey === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [ej, eO] = i.useState(!1),
        eE = i.useCallback(() => {
            eO(!0);
        }, []),
        eN = i.useCallback(() => {
            eO(!1);
        }, []),
        eI = i.useCallback(
            (e, t) => {
                ex(el.L.TAKE_ACTION), (0, ee.ts)(e, t);
            },
            [ex]
        ),
        { canShowReactionsOnMessageHover: eP } = b.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    b.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eS = (0, Z.Z)(t, n),
        eZ = (0, S.Nt)(),
        eT = eS && eZ && !n.hasPotions(),
        eA = i.useCallback(
            (e) => {
                try {
                    (0, E.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(ea.NW.string(ea.t.xsfC2d), d.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && es
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t.zBoHlZ),
                                        icon: d.VuL,
                                        onClick: (e) => (0, ee.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          l && !eu
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t.WqhZsr),
                                        icon: d.xPt,
                                        onClick: () => (0, ee.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          C
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t.NpHUi4),
                                        icon: d.idN,
                                        onClick: () => (0, ee.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          e_
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t.RpE9k5),
                                        icon: d.z7b,
                                        onClick: () => (0, ee.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          q
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: en ? ea.NW.string(ea.t.LHUP9P) : ea.NW.string(ea.t['9p3D9v']),
                                        icon: en ? d.plf : d.gt9,
                                        onClick: () => (en ? (0, ee.eM)(t, n) : (0, ee.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          o
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: n.pinned ? ea.NW.string(ea.t['Bse+Fx']) : ea.NW.string(ea.t['CvQ18/']),
                                        icon: d.qQX,
                                        onClick: (e) => (0, ee.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          j && A
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t.rBIGBA),
                                        icon: d.or_,
                                        onClick: () => (0, ee.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          v && p
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t['5IEsGx']),
                                        icon: d.n$P,
                                        onClick: (e) => (0, ee.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            _ && !eu
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          eP && !w
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(eh, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, r.jsx)($.fO, {})
                                    ]
                                })
                              : null,
                          (0, r.jsx)(et.Z, {
                              togglePopout: eg,
                              renderEmojiPicker: eb,
                              shouldShow: Y,
                              isFocused: ed,
                              channel: t,
                              message: n
                          }),
                          eT
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: ea.NW.string(ea.t.icaJW1),
                                        icon: d.l22,
                                        onClick: () => {
                                            V.default.track(ei.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: I.MG.MessageExpandingButtons }),
                                                (0, P.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eA,
                                                    onClose: N.Qy,
                                                    source: I.YD.MessageExpandingButtons
                                                });
                                        }
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            v && !p
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: ea.NW.string(ea.t['5IEsGx']),
                          icon: d.n$P,
                          onClick: (e) => (0, ee.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            p
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: ea.NW.string(ea.t.bt75u7),
                          icon: d.vdY,
                          onClick: () => (0, ee.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            A
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: ea.NW.string(ea.t.I3ltXF),
                          icon: x.Z,
                          onClick: () => eI(t, n),
                          onTooltipShow: eE,
                          onTooltipHide: eN,
                          showNewBadge: !ej && ev
                      },
                      'forward'
                  )
                : null,
            j && !A
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: ea.NW.string(ea.t.rBIGBA),
                          icon: d.or_,
                          onClick: () => (0, ee.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !j && T
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: ea.NW.string(ea.t['39d0Wl']),
                          icon: d.or_,
                          onClick: () => (0, ee.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            g
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: eC ? ea.NW.string(ea.t['1kWJAg']) : ea.NW.string(ea.t['MFGE5+']),
                          icon: d.MqZ,
                          onClick: () => (0, ee.Xl)(t, n),
                          disabled: eC
                      },
                      'publish'
                  )
                : null,
            a && (eu || w)
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: ea.NW.string(ea.t.oyYWHB),
                          icon: d.XHJ,
                          onClick: (e) => (0, ee.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !w
                      },
                      'delete'
                  )
                : null,
            w && a
                ? null
                : (0, r.jsx)(d.yRy, {
                      targetElementRef: ef,
                      renderPopout: (e) => {
                          let { updatePosition: i, closePopout: l } = e;
                          return (0, r.jsx)(ep, {
                              channel: t,
                              message: n,
                              canReport: s,
                              onClose: l,
                              updatePosition: i
                          });
                      },
                      shouldShow: U,
                      onRequestClose: em,
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
                              $.sF,
                              ec(
                                  {
                                      ref: ef,
                                      label: ea.NW.string(ea.t.UKOtz8),
                                      icon: d.xhG,
                                      selected: l,
                                      onClick: em
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
function em(e) {
    let { channel: t, message: n } = e,
        i = (0, c.e7)([v.Z], () => null != v.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, j.$s)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    $.sF,
                    {
                        label: ea.NW.string(ea.t['5911LS']),
                        icon: d.Oe7,
                        onClick: () => (0, ee.mG)(t, n)
                    },
                    'retry'
                ),
            (0, r.jsx)(
                $.sF,
                {
                    label: ea.NW.string(ea.t.oyYWHB),
                    icon: d.XHJ,
                    onClick: (e) => (0, ee.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eg(e) {
    let { type: t, emoji: n, channel: r, message: i, location: l, isBurst: o = !1 } = e;
    if (null == n) return;
    let a = (0, A.g1)(n);
    'add' === t
        ? (0, T.rU)(r.id, i.id, a, l, { burst: o })
        : (0, T.WO)({
              channelId: r.id,
              messageId: i.id,
              emoji: a,
              location: l,
              options: { burst: o }
          });
}
function eb(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = ec(
            { openPopoutType: 'message_reaction_emoji_picker' },
            i && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? ei.ZY5.GUILD_CHANNEL : ei.ZY5.DM_CHANNEL,
                section: (0, A.s4)(e),
                object: ei.qAy.EMOJI_REACTION_PICKER_POPOUT
            }
        );
    return (0, r.jsx)(w.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r, i, l) => {
            eg({
                type: 'add',
                emoji: r,
                channel: e,
                message: t,
                location: T.TW.MESSAGE_REACTION_PICKER,
                isBurst: l
            }),
                i && (l ? s()(n, 150)() : n());
        },
        analyticsOverride: l,
        messageId: t.id
    });
}
let e_ = i.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: l } = e,
        a = (0, c.e7)([U.Z], () => U.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ei.yb.SEND_FAILED
                ? (0, r.jsx)(em, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        u = (function (e) {
            let { message: t } = e;
            return t.state !== ei.yb.SEND_FAILED ? (0, r.jsx)(ef, ec({}, e)) : null;
        })(e);
    return a || (null == s && null == u)
        ? null
        : (0, r.jsx)('div', {
              className: o()(e.className, {
                  [es.container]: !0,
                  [es.isHeader]: i,
                  [es.isReply]: l
              }),
              onClick: ed,
              onContextMenu: ed,
              role: 'group',
              'aria-label': ea.NW.string(ea.t.Lv7LxM),
              children: (0, r.jsxs)($.ZP, {
                  className: e.innerClassName,
                  children: [s, u]
              })
          });
});
