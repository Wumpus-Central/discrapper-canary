(n.d(t, { Z: () => e_ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
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
    y = n(856985),
    C = n(868643),
    x = n(245216),
    v = n(223606),
    O = n(188597),
    j = n(41776),
    E = n(980463),
    S = n(328908),
    I = n(992970),
    P = n(135793),
    Z = n(576645),
    N = n(84040),
    T = n(222677),
    A = n(995774),
    w = n(931651),
    R = n(280845),
    M = n(2818),
    D = n(768943),
    L = n(665906),
    k = n(695346),
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
    Q = n(151007),
    J = n(432376),
    $ = n(373662),
    ee = n(996861),
    et = n(603490),
    en = n(225138),
    er = n(717680),
    ei = n(981631),
    el = n(921944),
    ea = n(185923),
    eo = n(388032),
    es = n(351131);
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
        ariaLabel: eo.intl.string(eo.t.Lv7LxM)
    });
}
let eh = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !Y.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ea.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        l = (i.length >= 3 ? i : [...(0, y.Z)(i.concat(eu)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            var i;
            let l = a.find((t) => (0, A.ir)(t.emoji, (0, A.g1)(e))),
                o = null != l ? eo.intl.string(eo.t.wunKKC) : eo.intl.string(eo.t.XVx5BA),
                s = null == e.id ? e.uniqueName : e.name,
                c = null != l ? eo.intl.formatToPlainString(eo.t.vjeruL, { emojiName: s }) : eo.intl.formatToPlainString(eo.t.L1JQwM, { emojiName: s });
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
                                children: o
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
            canPin: a,
            canDelete: o,
            canReport: s,
            canEdit: p,
            canPublish: g,
            canReact: _,
            canConfigureJoin: y,
            canReply: v,
            canStartThread: O,
            canViewThread: T,
            canForward: A,
            isExpanded: w,
            showMoreUtilities: B,
            showEmojiPicker: Y,
            showMessageBookmarksActions: q,
            isMessageBookmark: en,
            setPopout: ea,
            hasDeveloperMode: es,
            isFocused: eu
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: r, showEmojiBurstPicker: i, showMoreUtilities: l, setPopout: a, isFocused: o } = e,
                { author: s } = n,
                u = (0, c.e7)([H.Z], () => H.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([U.default], () => U.default.getId()),
                p = (0, L.$R)(t),
                m = (0, L.Gu)(t),
                g = k.nc.useSetting(),
                b = k.Sb.useSetting(),
                _ = (0, c.e7)([G.Z], () => null == t.guild_id || G.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: y, canAddNewReactions: x } = (0, c.cj)(
                    [V.Z],
                    () => ({
                        canAddNewReactions: _ && V.Z.can(ei.Plq.ADD_REACTIONS, t),
                        canManageMessages: V.Z.can(ei.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, _]
                ),
                v = (0, R.U)(t, n),
                O = (0, L.NE)(t, n),
                E = (0, L.Ek)(n),
                S = (0, c.e7)([j.Z], () => null != t.guild_id && j.Z.isLurking(t.guild_id), [t]),
                I = (0, c.e7)([F.ZP], () => null != t.guild_id && F.ZP.isCurrentUserGuest(t.guild_id), [t]),
                P = s.id === d,
                Z = (y || n.canDeleteOwnMessage(d)) && p && !ei.V$x.UNDELETABLE.has(n.type);
            n.type === ei.uaV.AUTO_MODERATION_ACTION && (Z = Z && y);
            let N = (0, K.a4)(n),
                T = (0, Q.Z)(n, t, y),
                A = !t.isSystemDM() && (0, X.Z)(n, d) && p && !m,
                { disableReactionCreates: w } = (0, J.Z)({
                    channel: t,
                    canChat: _,
                    renderReactions: g,
                    canAddNewReactions: x,
                    isLurking: S,
                    isGuest: I,
                    isActiveChannelOrUnarchivableThread: p
                }),
                B = t.type === ei.d4z.GUILD_ANNOUNCEMENT && null != u && u.features.has(ei.oNc.NEWS) && (P || y) && (0, f.Z)(n),
                z = t.getGuildId(),
                Y = null != z && n.type === ei.uaV.USER_JOIN && V.Z.canWithPartialContext(ei.Plq.MANAGE_GUILD, { guildId: z }),
                q = (0, C.a)(n),
                { enabled: $ } = M.Z.useExperiment({ location: 'message_utilities' }),
                ee = (0, c.e7)([D.Z], () => null != D.Z.getSavedMessage(t.id, n.id)),
                et = (0, er.Z)(),
                en = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: T,
                canEdit: A,
                canDelete: Z,
                canReport: N,
                canReply: v,
                canStartThread: O,
                canViewThread: E,
                canForward: q,
                canCopy: W.wS,
                hasDeveloperMode: b,
                canReact: !w && g,
                canPublish: B,
                canConfigureJoin: Y,
                isExpanded: et && !en && !r && !i && !l,
                showEmojiPicker: r,
                showEmojiBurstPicker: i,
                showMoreUtilities: l,
                showMessageBookmarksActions: $,
                isMessageBookmark: ee,
                setPopout: a,
                isFocused: o
            };
        })(e),
        ed = i.useRef(null),
        ef = i.useCallback(() => {
            (B ||
                z.default.track(ei.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                ea({ moreUtilities: !B }));
        }, [B, ea, n]),
        em = i.useCallback(() => {
            ea({ emojiPicker: !Y });
        }, [Y, ea]),
        eg = (0, L.$R)(t),
        e_ = n.hasFlag(ei.iLy.CROSSPOSTED),
        [ey, eC] = (0, m.cv)(A ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ex = ey === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [ev, eO] = i.useState(!1),
        ej = i.useCallback(() => {
            eO(!0);
        }, []),
        eE = i.useCallback(() => {
            eO(!1);
        }, []),
        eS = i.useCallback(
            (e, t) => {
                (eC(el.L.TAKE_ACTION), (0, ee.ts)(e, t));
            },
            [eC]
        ),
        { canShowReactionsOnMessageHover: eI } = b.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    b.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eP = (0, N.Z)(t),
        eZ = (0, Z.Nt)(),
        eN = eP && eZ && !n.hasPotions(),
        eT = i.useCallback(
            (e) => {
                try {
                    (0, E.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(eo.intl.string(eo.t.xsfC2d), d.ToastType.FAILURE));
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
                                        label: eo.intl.string(eo.t.zBoHlZ),
                                        icon: d.VuL,
                                        onClick: (e) => (0, ee.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: eo.intl.string(eo.t.WqhZsr),
                                        icon: d.xPt,
                                        onClick: () => (0, ee.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          y
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: eo.intl.string(eo.t.NpHUi4),
                                        icon: d.idN,
                                        onClick: () => (0, ee.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eg
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: eo.intl.string(eo.t.RpE9k5),
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
                                        label: en ? eo.intl.string(eo.t.LHUP9P) : eo.intl.string(eo.t['9p3D9v']),
                                        icon: en ? d.plf : d.gt9,
                                        onClick: () => (en ? (0, ee.eM)(t, n) : (0, ee.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          a
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: n.pinned ? eo.intl.string(eo.t['Bse+Fx']) : eo.intl.string(eo.t['CvQ18/']),
                                        icon: d.qQX,
                                        onClick: (e) => (0, ee.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          O && A
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: eo.intl.string(eo.t.rBIGBA),
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
                                        label: eo.intl.string(eo.t['5IEsGx']),
                                        icon: d.n$P,
                                        onClick: (e) => (0, ee.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            _
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          eI && !w
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
                              togglePopout: em,
                              renderEmojiPicker: eb,
                              shouldShow: Y,
                              isFocused: eu,
                              channel: t,
                              message: n
                          }),
                          eN
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: eo.intl.string(eo.t.icaJW1),
                                        icon: d.l22,
                                        onClick: () => {
                                            (z.default.track(ei.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: I.MG.MessageExpandingButtons }),
                                                (0, P.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eT,
                                                    onClose: S.Qy,
                                                    source: I.YD.MessageExpandingButtons
                                                }));
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
                          label: eo.intl.string(eo.t['5IEsGx']),
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
                          label: eo.intl.string(eo.t.bt75u7),
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
                          label: eo.intl.string(eo.t.I3ltXF),
                          icon: x.Z,
                          onClick: () => eS(t, n),
                          onTooltipShow: ej,
                          onTooltipHide: eE,
                          showNewBadge: !ev && ex
                      },
                      'forward'
                  )
                : null,
            O && !A
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: eo.intl.string(eo.t.rBIGBA),
                          icon: d.or_,
                          onClick: () => (0, ee.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !O && T
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: eo.intl.string(eo.t['39d0Wl']),
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
                          label: e_ ? eo.intl.string(eo.t['1kWJAg']) : eo.intl.string(eo.t['MFGE5+']),
                          icon: d.MqZ,
                          onClick: () => (0, ee.Xl)(t, n),
                          disabled: e_
                      },
                      'publish'
                  )
                : null,
            o && w
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: eo.intl.string(eo.t.oyYWHB),
                          icon: d.XHJ,
                          onClick: (e) => (0, ee.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !w
                      },
                      'delete'
                  )
                : null,
            w && o
                ? null
                : (0, r.jsx)(d.yRy, {
                      targetElementRef: ed,
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
                      shouldShow: B,
                      onRequestClose: ef,
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
                                          for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                  }
                                  return i;
                              })(e, ['onClick']),
                              { isShown: l } = t;
                          return (0, r.jsx)(
                              $.sF,
                              ec(
                                  {
                                      ref: ed,
                                      label: eo.intl.string(eo.t.UKOtz8),
                                      icon: d.xhG,
                                      selected: l,
                                      onClick: ef
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
        l = null == n.interaction || (null != n.interactionData && (0, O.$s)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    $.sF,
                    {
                        label: eo.intl.string(eo.t['5911LS']),
                        icon: d.Oe7,
                        onClick: () => (0, ee.mG)(t, n)
                    },
                    'retry'
                ),
            (0, r.jsx)(
                $.sF,
                {
                    label: eo.intl.string(eo.t.oyYWHB),
                    icon: d.XHJ,
                    onClick: (e) => (0, ee.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eg(e) {
    let { type: t, emoji: n, channel: r, message: i, location: l, isBurst: a = !1 } = e;
    if (null == n) return;
    let o = (0, A.g1)(n);
    'add' === t
        ? (0, T.rU)(r.id, i.id, o, l, { burst: a })
        : (0, T.WO)({
              channelId: r.id,
              messageId: i.id,
              emoji: o,
              location: l,
              options: { burst: a }
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
        onSelectEmoji: (r) => {
            let { emoji: i, willClose: l, isBurst: a } = r;
            (eg({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: T.TW.MESSAGE_REACTION_PICKER,
                isBurst: a
            }),
                l && (a ? s()(n, 150)() : n()));
        },
        analyticsOverride: l,
        messageId: t.id
    });
}
let e_ = i.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: l } = e,
        o = (0, c.e7)([B.Z], () => B.Z.isEditing(t.id, n.id), [t.id, n.id]),
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
    return o || (null == s && null == u)
        ? null
        : (0, r.jsx)('div', {
              className: a()(e.className, {
                  [es.container]: !0,
                  [es.isHeader]: i,
                  [es.isReply]: l
              }),
              onClick: ed,
              onContextMenu: ed,
              role: 'group',
              'aria-label': eo.intl.string(eo.t.Lv7LxM),
              children: (0, r.jsxs)($.ZP, {
                  className: e.innerClassName,
                  children: [s, u]
              })
          });
});
