(n.d(t, { Z: () => eA }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(893999),
    u = n(442837),
    d = n(704215),
    f = n(481060),
    _ = n(596454),
    p = n(607070),
    h = n(110630),
    m = n(706140),
    g = n(543241),
    E = n(407477),
    b = n(633302),
    y = n(856985),
    O = n(660189),
    v = n(868643),
    I = n(245216),
    T = n(223606),
    S = n(188597),
    A = n(41776),
    N = n(980463),
    C = n(328908),
    w = n(992970),
    R = n(135793),
    P = n(576645),
    D = n(84040),
    L = n(222677),
    x = n(995774),
    k = n(931651),
    j = n(280845),
    M = n(2818),
    U = n(768943),
    G = n(665906),
    B = n(695346),
    Z = n(314897),
    F = n(323873),
    V = n(271383),
    H = n(430824),
    Y = n(607744),
    W = n(496675),
    K = n(626135),
    z = n(572004),
    q = n(176354),
    $ = n(823379),
    X = n(970257),
    Q = n(418476),
    J = n(151007),
    ee = n(901461),
    et = n(432376),
    en = n(373662),
    er = n(996861),
    ei = n(603490),
    ea = n(225138),
    eo = n(981631),
    es = n(921944),
    el = n(185923),
    ec = n(388032),
    eu = n(351131);
function ed(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ef(e) {
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
                ed(e, t, n[t]);
            }));
    }
    return e;
}
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ep(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let eh = [b.ZP.getByName('100'), b.ZP.getByName('laughing'), b.ZP.getByName('sparkling_heart')].filter($.lm);
function em(e) {
    e.stopPropagation();
}
function eg(e) {
    let { message: t, channel: n, canReport: r, onClose: i, updatePosition: a } = e;
    return (0, ea.S)({
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
        onHeightUpdate: a,
        onClose: i,
        navId: 'message-actions',
        ariaLabel: ec.intl.string(ec.t.Lv7LxM)
    });
}
let eE = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !q.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: el.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        a = (i.length >= 3 ? i : [...(0, y.Z)(i.concat(eh)).values()]).slice(0, 3),
        o = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: a.map((e) => {
            var i;
            let a = o.find((t) => (0, x.ir)(t.emoji, (0, x.g1)(e))),
                s = null != a ? ec.intl.string(ec.t.wunKKC) : ec.intl.string(ec.t.XVx5BA),
                l = null == e.id ? e.uniqueName : e.name,
                c = null != a ? ec.intl.formatToPlainString(ec.t.vjeruL, { emojiName: l }) : ec.intl.formatToPlainString(ec.t.L1JQwM, { emojiName: l }),
                u = () =>
                    ev({
                        type: null != a ? 'remove' : 'add',
                        emoji: e,
                        channel: t,
                        message: n,
                        location: L.TW.MESSAGE_HOVER_BAR
                    });
            return (0, r.jsx)(
                en.sF,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: eu.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: eu.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: u,
                    children: (0, r.jsx)(_.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: eu.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null != (i = e.id) ? i : 0, ':').concat(e.name)
            );
        })
    });
});
function eb(e) {
    let { channel: t, message: n, showEmojiPicker: r, showEmojiBurstPicker: i, showMoreUtilities: a, messageWindow: o, setPopout: s, isFocused: l } = e,
        { author: d } = n,
        f = (0, u.e7)([H.Z], () => H.Z.getGuild(t.guild_id), [t.guild_id]),
        _ = (0, u.e7)([Z.default], () => Z.default.getId()),
        m = (0, G.$R)(t),
        g = (0, G.Gu)(t),
        { firstMessage: E } = (0, u.e7)([O.Z], () => O.Z.getMessage(t.id), [t.id]),
        b = B.nc.useSetting(),
        y = B.Sb.useSetting(),
        I = (0, u.e7)([Y.Z], () => null == t.guild_id || Y.Z.canChatInGuild(t.guild_id), [t]),
        { canManageMessages: T, canAddNewReactions: S } = (0, u.cj)(
            [W.Z],
            () => ({
                canAddNewReactions: I && W.Z.can(eo.Plq.ADD_REACTIONS, t),
                canManageMessages: W.Z.can(eo.Plq.MANAGE_MESSAGES, t)
            }),
            [t, I]
        ),
        N = (0, j.U)(t, n),
        C = (0, G.NE)(t, n),
        w = (0, G.Ek)(n),
        R = (0, u.e7)([A.Z], () => null != t.guild_id && A.Z.isLurking(t.guild_id), [t]),
        P = (0, u.e7)([V.ZP], () => null != t.guild_id && V.ZP.isCurrentUserGuest(t.guild_id), [t]),
        D = d.id === _,
        L = (T || n.canDeleteOwnMessage(_)) && m && !eo.V$x.UNDELETABLE.has(n.type);
    (n.type === eo.uaV.AUTO_MODERATION_ACTION && (L = L && T), t.isModeratorReportChannel() && (L = L && n.id !== (null == E ? void 0 : E.id) && !(0, ee.Z)(n)));
    let x = (0, X.a4)(n),
        k = (0, J.Z)(n, t),
        F = !t.isSystemDM() && (0, Q.Z)(n, _) && m && !g,
        { disableReactionCreates: K } = (0, et.Z)({
            channel: t,
            canChat: I,
            renderReactions: b,
            canAddNewReactions: S,
            isLurking: R,
            isGuest: P,
            isActiveChannelOrUnarchivableThread: m
        }),
        q = t.type === eo.d4z.GUILD_ANNOUNCEMENT && null != f && f.features.has(eo.oNc.NEWS) && (D || T) && (0, h.Z)(n),
        $ = t.getGuildId(),
        en = null != $ && n.type === eo.uaV.USER_JOIN && W.Z.canWithPartialContext(eo.Plq.MANAGE_GUILD, { guildId: $ }),
        er = (0, v.a)(n),
        { enabled: ei } = M.Z.useExperiment({ location: 'message_utilities' }),
        ea = (0, u.e7)([U.Z], () => null != U.Z.getSavedMessage(t.id, n.id)),
        es = (0, c.Z)(o),
        el = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ec = es && !el && !r && !i && !a;
    return {
        channel: t,
        message: n,
        canPin: k,
        canEdit: F,
        canDelete: L,
        canReport: x,
        canReply: N,
        canStartThread: C,
        canViewThread: w,
        canForward: er,
        canCopy: z.wS,
        hasDeveloperMode: y,
        canReact: !K && b,
        canPublish: q,
        canConfigureJoin: en,
        isExpanded: ec,
        showEmojiPicker: r,
        showEmojiBurstPicker: i,
        showMoreUtilities: a,
        showMessageBookmarksActions: ei,
        isMessageBookmark: ea,
        setPopout: s,
        isFocused: l
    };
}
function ey(e) {
    let { channel: t, message: n, canCopy: a, canPin: o, canDelete: s, canReport: l, canEdit: c, canPublish: u, canReact: _, canConfigureJoin: p, canReply: h, canStartThread: g, canViewThread: b, canForward: y, isExpanded: O, showMoreUtilities: v, showEmojiPicker: T, showMessageBookmarksActions: S, isMessageBookmark: A, setPopout: L, hasDeveloperMode: x, isFocused: k } = eb(e),
        j = i.useRef(null),
        M = i.useCallback(() => {
            (v ||
                K.default.track(eo.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                L({ moreUtilities: !v }));
        }, [v, L, n]),
        U = i.useCallback(() => {
            L({ emojiPicker: !T });
        }, [T, L]),
        B = (0, G.$R)(t),
        Z = n.hasFlag(eo.iLy.CROSSPOSTED),
        [F, V] = (0, m.cv)(y ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        H = F === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [Y, W] = i.useState(!1),
        z = i.useCallback(() => {
            W(!0);
        }, []),
        q = i.useCallback(() => {
            W(!1);
        }, []),
        $ = i.useCallback(
            (e, t) => {
                (V(es.L.TAKE_ACTION), (0, er.ts)(e, t));
            },
            [V]
        ),
        { canShowReactionsOnMessageHover: X } = E.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    E.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    let Q = (0, D.Z)(t),
        J = (0, P.Nt)(),
        ee = Q && J && !n.hasPotions(),
        et = i.useCallback(
            (e) => {
                try {
                    (0, N.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, f.showToast)((0, f.createToast)(ec.intl.string(ec.t.xsfC2d), f.ToastType.FAILURE));
                }
            },
            [t.id, n.id]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          a && x
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t.zBoHlZ),
                                        icon: f.VuL,
                                        onClick: (e) => (0, er.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          a
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t.WqhZsr),
                                        icon: f.xPt,
                                        onClick: () => (0, er.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          p
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t.NpHUi4),
                                        icon: f.idN,
                                        onClick: () => (0, er.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          B
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t.RpE9k5),
                                        icon: f.z7b,
                                        onClick: () => (0, er.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          S
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: A ? ec.intl.string(ec.t.LHUP9P) : ec.intl.string(ec.t['9p3D9v']),
                                        icon: A ? f.plf : f.gt9,
                                        onClick: () => (A ? (0, er.eM)(t, n) : (0, er.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          o
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: n.pinned ? ec.intl.string(ec.t['Bse+Fx']) : ec.intl.string(ec.t['CvQ18/']),
                                        icon: f.qQX,
                                        onClick: (e) => (0, er.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          g && y
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t.rBIGBA),
                                        icon: f.or_,
                                        onClick: () => (0, er.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          h && c
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t['5IEsGx']),
                                        icon: f.n$P,
                                        onClick: (e) => (0, er.HH)(t, n, e)
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
                          X && !O
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(eE, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, r.jsx)(en.fO, {})
                                    ]
                                })
                              : null,
                          (0, r.jsx)(ei.Z, {
                              togglePopout: U,
                              renderEmojiPicker: eI,
                              shouldShow: T,
                              isFocused: k,
                              channel: t,
                              message: n
                          }),
                          ee
                              ? (0, r.jsx)(
                                    en.sF,
                                    {
                                        label: ec.intl.string(ec.t.icaJW1),
                                        icon: f.l22,
                                        onClick: () => {
                                            (K.default.track(eo.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: w.MG.MessageExpandingButtons }),
                                                (0, R.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: et,
                                                    onClose: C.Qy,
                                                    source: w.YD.MessageExpandingButtons
                                                }));
                                        }
                                    },
                                    'add-confetti-potion'
                                )
                              : null
                      ]
                  })
                : null,
            h && !c
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: ec.intl.string(ec.t['5IEsGx']),
                          icon: f.n$P,
                          onClick: (e) => (0, er.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            c
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: ec.intl.string(ec.t.bt75u7),
                          icon: f.vdY,
                          onClick: () => (0, er.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            y
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: ec.intl.string(ec.t.I3ltXF),
                          icon: I.Z,
                          onClick: () => $(t, n),
                          onTooltipShow: z,
                          onTooltipHide: q,
                          showNewBadge: !Y && H
                      },
                      'forward'
                  )
                : null,
            g && !y
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: ec.intl.string(ec.t.rBIGBA),
                          icon: f.or_,
                          onClick: () => (0, er.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !g && b
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: ec.intl.string(ec.t['39d0Wl']),
                          icon: f.or_,
                          onClick: () => (0, er.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            u
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: Z ? ec.intl.string(ec.t['1kWJAg']) : ec.intl.string(ec.t['MFGE5+']),
                          icon: f.MqZ,
                          onClick: () => (0, er.Xl)(t, n),
                          disabled: Z
                      },
                      'publish'
                  )
                : null,
            s && O
                ? (0, r.jsx)(
                      en.sF,
                      {
                          label: ec.intl.string(ec.t.oyYWHB),
                          icon: f.XHJ,
                          onClick: (e) => (0, er.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !O
                      },
                      'delete'
                  )
                : null,
            O && s
                ? null
                : (0, r.jsx)(f.yRy, {
                      targetElementRef: j,
                      renderPopout: (e) => {
                          let { updatePosition: i, closePopout: a } = e;
                          return (0, r.jsx)(eg, {
                              channel: t,
                              message: n,
                              canReport: l,
                              onClose: a,
                              updatePosition: i
                          });
                      },
                      shouldShow: v,
                      onRequestClose: M,
                      position: 'left',
                      align: 'top',
                      animation: f.yRy.Animation.NONE,
                      children: (e, t) => {
                          var { onClick: n } = e,
                              i = e_(e, ['onClick']),
                              { isShown: a } = t;
                          return (0, r.jsx)(
                              en.sF,
                              ef(
                                  {
                                      ref: j,
                                      label: ec.intl.string(ec.t.UKOtz8),
                                      icon: f.xhG,
                                      selected: a,
                                      onClick: M
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
function eO(e) {
    let { channel: t, message: n } = e,
        i = (0, u.e7)([T.Z], () => null != T.Z.getMessage(n.id), [n.id]),
        a = null == n.interaction || (null != n.interactionData && (0, S.$s)(n.interactionData)),
        o = !i && a;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o &&
                (0, r.jsx)(
                    en.sF,
                    {
                        label: ec.intl.string(ec.t['5911LS']),
                        icon: f.Oe7,
                        onClick: () => (0, er.mG)(t, n)
                    },
                    'retry'
                ),
            (0, r.jsx)(
                en.sF,
                {
                    label: ec.intl.string(ec.t.oyYWHB),
                    icon: f.XHJ,
                    onClick: (e) => (0, er.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function ev(e) {
    let { type: t, emoji: n, channel: r, message: i, location: a, isBurst: o = !1 } = e;
    if (null == n) return;
    let s = (0, x.g1)(n);
    'add' === t
        ? (0, L.rU)(r.id, i.id, s, a, { burst: o })
        : (0, L.WO)({
              channelId: r.id,
              messageId: i.id,
              emoji: s,
              location: a,
              options: { burst: o }
          });
}
function eI(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = ef(
            { openPopoutType: 'message_reaction_emoji_picker' },
            i && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? eo.ZY5.GUILD_CHANNEL : eo.ZY5.DM_CHANNEL,
                section: (0, x.s4)(e),
                object: eo.qAy.EMOJI_REACTION_PICKER_POPOUT
            }
        );
    return (0, r.jsx)(k.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r) => {
            let { emoji: i, willClose: a, isBurst: o } = r;
            (ev({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: L.TW.MESSAGE_REACTION_PICKER,
                isBurst: o
            }),
                a && (o ? l()(n, 150)() : n()));
        },
        analyticsOverride: a,
        messageId: t.id
    });
}
function eT(e) {
    let { channel: t, message: n } = e;
    return n.state === eo.yb.SEND_FAILED
        ? (0, r.jsx)(eO, {
              channel: t,
              message: n
          })
        : null;
}
function eS(e) {
    let { message: t } = e;
    return t.state !== eo.yb.SEND_FAILED ? (0, r.jsx)(ey, ef({}, e)) : null;
}
let eA = i.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: a } = e,
        s = (0, u.e7)([F.Z], () => F.Z.isEditing(t.id, n.id), [t.id, n.id]),
        l = eT(e),
        c = eS(e);
    return s || (null == l && null == c)
        ? null
        : (0, r.jsx)('div', {
              className: o()(e.className, {
                  [eu.container]: !0,
                  [eu.isHeader]: i,
                  [eu.isReply]: a
              }),
              onClick: em,
              onContextMenu: em,
              role: 'group',
              'aria-label': ec.intl.string(ec.t.Lv7LxM),
              children: (0, r.jsxs)(en.ZP, {
                  className: e.innerClassName,
                  children: [l, c]
              })
          });
});
