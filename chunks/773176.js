(n.d(t, { Z: () => e_ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(893999),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(596454),
    f = n(607070),
    m = n(110630),
    g = n(706140),
    b = n(543241),
    _ = n(407477),
    y = n(633302),
    C = n(856985),
    x = n(868643),
    v = n(245216),
    j = n(223606),
    O = n(188597),
    E = n(41776),
    S = n(980463),
    I = n(328908),
    P = n(992970),
    Z = n(135793),
    N = n(576645),
    T = n(84040),
    A = n(222677),
    w = n(995774),
    R = n(931651),
    M = n(280845),
    D = n(2818),
    k = n(768943),
    L = n(665906),
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
    Q = n(418476),
    J = n(151007),
    $ = n(432376),
    ee = n(373662),
    et = n(996861),
    en = n(603490),
    er = n(225138),
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
let eu = [y.ZP.getByName('100'), y.ZP.getByName('laughing'), y.ZP.getByName('sparkling_heart')].filter(K.lm);
function ed(e) {
    e.stopPropagation();
}
function ep(e) {
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
        ariaLabel: eo.intl.string(eo.t.Lv7LxM)
    });
}
let eh = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, b.q5)(t.guild_id).filter(
            (e) =>
                !q.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ea.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        l = (i.length >= 3 ? i : [...(0, C.Z)(i.concat(eu)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            var i;
            let l = a.find((t) => (0, w.ir)(t.emoji, (0, w.g1)(e))),
                o = null != l ? eo.intl.string(eo.t.wunKKC) : eo.intl.string(eo.t.XVx5BA),
                s = null == e.id ? e.uniqueName : e.name,
                c = null != l ? eo.intl.formatToPlainString(eo.t.vjeruL, { emojiName: s }) : eo.intl.formatToPlainString(eo.t.L1JQwM, { emojiName: s });
            return (0, r.jsx)(
                ee.sF,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: es.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, r.jsx)(p.Text, {
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
                            location: A.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, r.jsx)(h.Z, {
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
            canEdit: h,
            canPublish: b,
            canReact: y,
            canConfigureJoin: C,
            canReply: j,
            canStartThread: O,
            canViewThread: A,
            canForward: w,
            isExpanded: R,
            showMoreUtilities: F,
            showEmojiPicker: q,
            showMessageBookmarksActions: K,
            isMessageBookmark: er,
            setPopout: ea,
            hasDeveloperMode: es,
            isFocused: eu
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: r, showEmojiBurstPicker: i, showMoreUtilities: l, setPopout: a, isFocused: o } = e,
                { author: s } = n,
                d = (0, u.e7)([G.Z], () => G.Z.getGuild(t.guild_id), [t.guild_id]),
                p = (0, u.e7)([B.default], () => B.default.getId()),
                h = (0, L.$R)(t),
                g = (0, L.Gu)(t),
                b = U.nc.useSetting(),
                _ = U.Sb.useSetting(),
                y = (0, u.e7)([V.Z], () => null == t.guild_id || V.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: C, canAddNewReactions: v } = (0, u.cj)(
                    [z.Z],
                    () => ({
                        canAddNewReactions: y && z.Z.can(ei.Plq.ADD_REACTIONS, t),
                        canManageMessages: z.Z.can(ei.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, y]
                ),
                j = (0, M.U)(t, n),
                O = (0, L.NE)(t, n),
                S = (0, L.Ek)(n),
                I = (0, u.e7)([E.Z], () => null != t.guild_id && E.Z.isLurking(t.guild_id), [t]),
                P = (0, u.e7)([H.ZP], () => null != t.guild_id && H.ZP.isCurrentUserGuest(t.guild_id), [t]),
                Z = s.id === p,
                N = (C || n.canDeleteOwnMessage(p)) && h && !ei.V$x.UNDELETABLE.has(n.type);
            n.type === ei.uaV.AUTO_MODERATION_ACTION && (N = N && C);
            let T = (0, X.a4)(n),
                A = (0, J.Z)(n, t, C),
                w = !t.isSystemDM() && (0, Q.Z)(n, p) && h && !g,
                { disableReactionCreates: R } = (0, $.Z)({
                    channel: t,
                    canChat: y,
                    renderReactions: b,
                    canAddNewReactions: v,
                    isLurking: I,
                    isGuest: P,
                    isActiveChannelOrUnarchivableThread: h
                }),
                F = t.type === ei.d4z.GUILD_ANNOUNCEMENT && null != d && d.features.has(ei.oNc.NEWS) && (Z || C) && (0, m.Z)(n),
                W = t.getGuildId(),
                q = null != W && n.type === ei.uaV.USER_JOIN && z.Z.canWithPartialContext(ei.Plq.MANAGE_GUILD, { guildId: W }),
                K = (0, x.a)(n),
                { enabled: ee } = D.Z.useExperiment({ location: 'message_utilities' }),
                et = (0, u.e7)([k.Z], () => null != k.Z.getSavedMessage(t.id, n.id)),
                en = (0, c.Z)(),
                er = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: A,
                canEdit: w,
                canDelete: N,
                canReport: T,
                canReply: j,
                canStartThread: O,
                canViewThread: S,
                canForward: K,
                canCopy: Y.wS,
                hasDeveloperMode: _,
                canReact: !R && b,
                canPublish: F,
                canConfigureJoin: q,
                isExpanded: en && !er && !r && !i && !l,
                showEmojiPicker: r,
                showEmojiBurstPicker: i,
                showMoreUtilities: l,
                showMessageBookmarksActions: ee,
                isMessageBookmark: et,
                setPopout: a,
                isFocused: o
            };
        })(e),
        ed = i.useRef(null),
        ef = i.useCallback(() => {
            (F ||
                W.default.track(ei.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                ea({ moreUtilities: !F }));
        }, [F, ea, n]),
        em = i.useCallback(() => {
            ea({ emojiPicker: !q });
        }, [q, ea]),
        eg = (0, L.$R)(t),
        e_ = n.hasFlag(ei.iLy.CROSSPOSTED),
        [ey, eC] = (0, g.cv)(w ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ex = ey === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [ev, ej] = i.useState(!1),
        eO = i.useCallback(() => {
            ej(!0);
        }, []),
        eE = i.useCallback(() => {
            ej(!1);
        }, []),
        eS = i.useCallback(
            (e, t) => {
                (eC(el.L.TAKE_ACTION), (0, et.ts)(e, t));
            },
            [eC]
        ),
        { canShowReactionsOnMessageHover: eI } = _.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    _.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let eP = (0, T.Z)(t),
        eZ = (0, N.Nt)(),
        eN = eP && eZ && !n.hasPotions(),
        eT = i.useCallback(
            (e) => {
                try {
                    (0, S.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, p.showToast)((0, p.createToast)(eo.intl.string(eo.t.xsfC2d), p.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && es
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.zBoHlZ),
                                        icon: p.VuL,
                                        onClick: (e) => (0, et.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.WqhZsr),
                                        icon: p.xPt,
                                        onClick: () => (0, et.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          C
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.NpHUi4),
                                        icon: p.idN,
                                        onClick: () => (0, et.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eg
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.RpE9k5),
                                        icon: p.z7b,
                                        onClick: () => (0, et.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          K
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: er ? eo.intl.string(eo.t.LHUP9P) : eo.intl.string(eo.t['9p3D9v']),
                                        icon: er ? p.plf : p.gt9,
                                        onClick: () => (er ? (0, et.eM)(t, n) : (0, et.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          a
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: n.pinned ? eo.intl.string(eo.t['Bse+Fx']) : eo.intl.string(eo.t['CvQ18/']),
                                        icon: p.qQX,
                                        onClick: (e) => (0, et.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          O && w
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.rBIGBA),
                                        icon: p.or_,
                                        onClick: () => (0, et.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          j && h
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t['5IEsGx']),
                                        icon: p.n$P,
                                        onClick: (e) => (0, et.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          eI && !R
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(eh, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, r.jsx)(ee.fO, {})
                                    ]
                                })
                              : null,
                          (0, r.jsx)(en.Z, {
                              togglePopout: em,
                              renderEmojiPicker: eb,
                              shouldShow: q,
                              isFocused: eu,
                              channel: t,
                              message: n
                          }),
                          eN
                              ? (0, r.jsx)(
                                    ee.sF,
                                    {
                                        label: eo.intl.string(eo.t.icaJW1),
                                        icon: p.l22,
                                        onClick: () => {
                                            (W.default.track(ei.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: P.MG.MessageExpandingButtons }),
                                                (0, Z.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eT,
                                                    onClose: I.Qy,
                                                    source: P.YD.MessageExpandingButtons
                                                }));
                                        }
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            j && !h
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t['5IEsGx']),
                          icon: p.n$P,
                          onClick: (e) => (0, et.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.bt75u7),
                          icon: p.vdY,
                          onClick: () => (0, et.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            w
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.I3ltXF),
                          icon: v.Z,
                          onClick: () => eS(t, n),
                          onTooltipShow: eO,
                          onTooltipHide: eE,
                          showNewBadge: !ev && ex
                      },
                      'forward'
                  )
                : null,
            O && !w
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.rBIGBA),
                          icon: p.or_,
                          onClick: () => (0, et.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !O && A
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t['39d0Wl']),
                          icon: p.or_,
                          onClick: () => (0, et.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            b
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: e_ ? eo.intl.string(eo.t['1kWJAg']) : eo.intl.string(eo.t['MFGE5+']),
                          icon: p.MqZ,
                          onClick: () => (0, et.Xl)(t, n),
                          disabled: e_
                      },
                      'publish'
                  )
                : null,
            o && R
                ? (0, r.jsx)(
                      ee.sF,
                      {
                          label: eo.intl.string(eo.t.oyYWHB),
                          icon: p.XHJ,
                          onClick: (e) => (0, et.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !R
                      },
                      'delete'
                  )
                : null,
            R && o
                ? null
                : (0, r.jsx)(p.yRy, {
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
                      shouldShow: F,
                      onRequestClose: ef,
                      position: 'left',
                      align: 'top',
                      animation: p.yRy.Animation.NONE,
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
                              ee.sF,
                              ec(
                                  {
                                      ref: ed,
                                      label: eo.intl.string(eo.t.UKOtz8),
                                      icon: p.xhG,
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
        i = (0, u.e7)([j.Z], () => null != j.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, O.$s)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    ee.sF,
                    {
                        label: eo.intl.string(eo.t['5911LS']),
                        icon: p.Oe7,
                        onClick: () => (0, et.mG)(t, n)
                    },
                    'retry'
                ),
            (0, r.jsx)(
                ee.sF,
                {
                    label: eo.intl.string(eo.t.oyYWHB),
                    icon: p.XHJ,
                    onClick: (e) => (0, et.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eg(e) {
    let { type: t, emoji: n, channel: r, message: i, location: l, isBurst: a = !1 } = e;
    if (null == n) return;
    let o = (0, w.g1)(n);
    'add' === t
        ? (0, A.rU)(r.id, i.id, o, l, { burst: a })
        : (0, A.WO)({
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
                section: (0, w.s4)(e),
                object: ei.qAy.EMOJI_REACTION_PICKER_POPOUT
            }
        );
    return (0, r.jsx)(R.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r) => {
            let { emoji: i, willClose: l, isBurst: a } = r;
            (eg({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: A.TW.MESSAGE_REACTION_PICKER,
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
        o = (0, u.e7)([F.Z], () => F.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ei.yb.SEND_FAILED
                ? (0, r.jsx)(em, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== ei.yb.SEND_FAILED ? (0, r.jsx)(ef, ec({}, e)) : null;
        })(e);
    return o || (null == s && null == c)
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
              children: (0, r.jsxs)(ee.ZP, {
                  className: e.innerClassName,
                  children: [s, c]
              })
          });
});
