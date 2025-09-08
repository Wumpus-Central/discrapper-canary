n.d(t, { Z: () => e_ }), n(388685);
var r = n(951288),
    i = n(647438),
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
    y = n(633302),
    _ = n(856985),
    C = n(660189),
    v = n(868643),
    x = n(245216),
    O = n(223606),
    j = n(188597),
    E = n(41776),
    S = n(980463),
    I = n(328908),
    P = n(992970),
    Z = n(135793),
    T = n(576645),
    N = n(84040),
    A = n(222677),
    w = n(995774),
    R = n(931651),
    M = n(280845),
    D = n(2818),
    L = n(768943),
    k = n(665906),
    U = n(695346),
    B = n(314897),
    G = n(323873),
    H = n(271383),
    F = n(430824),
    V = n(607744),
    z = n(496675),
    W = n(626135),
    q = n(572004),
    Y = n(176354),
    K = n(823379),
    X = n(970257),
    Q = n(418476),
    J = n(151007),
    $ = n(901461),
    ee = n(432376),
    et = n(373662),
    en = n(996861),
    er = n(603490),
    ei = n(225138),
    el = n(981631),
    ea = n(921944),
    eo = n(185923),
    es = n(388032),
    ec = n(785727);
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let ed = [y.ZP.getByName("100"), y.ZP.getByName("laughing"), y.ZP.getByName("sparkling_heart")].filter(K.lm);
function ep(e) {
    e.stopPropagation();
}
function eh(e) {
    let { message: t, channel: n, canReport: r, onClose: i, updatePosition: l } = e;
    return (0, ei.S)({
        message: t,
        channel: n,
        textSelection: "",
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
        navId: "message-actions",
        ariaLabel: es.intl.string(es.t.Lv7LxM),
    });
}
let ef = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, b.q5)(t.guild_id).filter(
            (e) =>
                !Y.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: eo.Hz.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        l = (i.length >= 3 ? i : [...(0, _.Z)(i.concat(ed)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            var i;
            let l = a.find((t) => (0, w.ir)(t.emoji, (0, w.g1)(e))),
                o = null != l ? es.intl.string(es.t.wunKKC) : es.intl.string(es.t.XVx5BA),
                s = null == e.id ? e.uniqueName : e.name,
                c =
                    null != l
                        ? es.intl.formatToPlainString(es.t.vjeruL, { emojiName: s })
                        : es.intl.formatToPlainString(es.t.L1JQwM, { emojiName: s });
            return (0, r.jsx)(
                et.sF,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.Text, {
                                variant: "text-sm/medium",
                                color: "header-primary",
                                className: ec.emojiTooltipText,
                                children: ":".concat(e.name, ":"),
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: ec.emojiTooltipText,
                                children: o,
                            }),
                        ],
                    }),
                    label: c,
                    onClick: () =>
                        eb({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: A.TW.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: ec.emoji,
                        canSelect: !1,
                    }),
                },
                "".concat(null != (i = e.id) ? i : 0, ":").concat(e.name),
            );
        }),
    });
});
function em(e) {
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
            canConfigureJoin: _,
            canReply: O,
            canStartThread: j,
            canViewThread: A,
            canForward: w,
            isExpanded: R,
            showMoreUtilities: G,
            showEmojiPicker: Y,
            showMessageBookmarksActions: K,
            isMessageBookmark: ei,
            setPopout: eo,
            hasDeveloperMode: ec,
            isFocused: ed,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: r,
                    showEmojiBurstPicker: i,
                    showMoreUtilities: l,
                    messageWindow: a,
                    setPopout: o,
                    isFocused: s,
                } = e,
                { author: d } = n,
                p = (0, u.e7)([F.Z], () => F.Z.getGuild(t.guild_id), [t.guild_id]),
                h = (0, u.e7)([B.default], () => B.default.getId()),
                g = (0, k.$R)(t),
                b = (0, k.Gu)(t),
                { firstMessage: y } = (0, u.e7)([C.Z], () => C.Z.getMessage(t.id), [t.id]),
                _ = U.nc.useSetting(),
                x = U.Sb.useSetting(),
                O = (0, u.e7)([V.Z], () => null == t.guild_id || V.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: j, canAddNewReactions: S } = (0, u.cj)(
                    [z.Z],
                    () => ({
                        canAddNewReactions: O && z.Z.can(el.Plq.ADD_REACTIONS, t),
                        canManageMessages: z.Z.can(el.Plq.MANAGE_MESSAGES, t),
                    }),
                    [t, O],
                ),
                I = (0, M.U)(t, n),
                P = (0, k.NE)(t, n),
                Z = (0, k.Ek)(n),
                T = (0, u.e7)([E.Z], () => null != t.guild_id && E.Z.isLurking(t.guild_id), [t]),
                N = (0, u.e7)([H.ZP], () => null != t.guild_id && H.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = d.id === h,
                w = (j || n.canDeleteOwnMessage(h)) && g && !el.V$x.UNDELETABLE.has(n.type);
            n.type === el.uaV.AUTO_MODERATION_ACTION && (w = w && j),
                t.isModeratorReportChannel() && (w = w && n.id !== (null == y ? void 0 : y.id) && !(0, $.Z)(n));
            let R = (0, X.a4)(n),
                G = (0, J.Z)(n, t),
                W = !t.isSystemDM() && (0, Q.Z)(n, h) && g && !b,
                { disableReactionCreates: Y } = (0, ee.Z)({
                    channel: t,
                    canChat: O,
                    renderReactions: _,
                    canAddNewReactions: S,
                    isLurking: T,
                    isGuest: N,
                    isActiveChannelOrUnarchivableThread: g,
                }),
                K =
                    t.type === el.d4z.GUILD_ANNOUNCEMENT &&
                    null != p &&
                    p.features.has(el.oNc.NEWS) &&
                    (A || j) &&
                    (0, m.Z)(n),
                et = t.getGuildId(),
                en =
                    null != et &&
                    n.type === el.uaV.USER_JOIN &&
                    z.Z.canWithPartialContext(el.Plq.MANAGE_GUILD, { guildId: et }),
                er = (0, v.a)(n),
                { enabled: ei } = D.Z.useExperiment({ location: "message_utilities" }),
                ea = (0, u.e7)([L.Z], () => null != L.Z.getSavedMessage(t.id, n.id)),
                eo = (0, c.Z)(a),
                es = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: G,
                canEdit: W,
                canDelete: w,
                canReport: R,
                canReply: I,
                canStartThread: P,
                canViewThread: Z,
                canForward: er,
                canCopy: q.wS,
                hasDeveloperMode: x,
                canReact: !Y && _,
                canPublish: K,
                canConfigureJoin: en,
                isExpanded: eo && !es && !r && !i && !l,
                showEmojiPicker: r,
                showEmojiBurstPicker: i,
                showMoreUtilities: l,
                showMessageBookmarksActions: ei,
                isMessageBookmark: ea,
                setPopout: o,
                isFocused: s,
            };
        })(e),
        ep = i.useRef(null),
        em = i.useCallback(() => {
            G ||
                W.default.track(el.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                }),
                eo({ moreUtilities: !G });
        }, [G, eo, n]),
        eg = i.useCallback(() => {
            eo({ emojiPicker: !Y });
        }, [Y, eo]),
        eb = (0, k.$R)(t),
        e_ = n.hasFlag(el.iLy.CROSSPOSTED),
        [eC, ev] = (0, g.cv)(w ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ex = eC === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eO, ej] = i.useState(!1),
        eE = i.useCallback(() => {
            ej(!0);
        }, []),
        eS = i.useCallback(() => {
            ej(!1);
        }, []),
        eI = i.useCallback(
            (e, t) => {
                ev(ea.L.TAKE_ACTION), (0, en.ts)(e, t);
            },
            [ev],
        ),
        eP = (0, N.Z)(t),
        eZ = (0, T.Nt)(),
        eT = eP && eZ && !n.hasPotions(),
        eN = i.useCallback(
            (e) => {
                try {
                    (0, S.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, p.showToast)((0, p.createToast)(es.intl.string(es.t.xsfC2d), p.ToastType.FAILURE));
                }
            },
            [t.id, n.id],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && ec
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.zBoHlZ),
                                        icon: p.VuL,
                                        onClick: (e) => (0, en.F4)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.WqhZsr),
                                        icon: p.xPt,
                                        onClick: () => (0, en.fB)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          _
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.NpHUi4),
                                        icon: p.idN,
                                        onClick: () => (0, en.zW)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          eb
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.RpE9k5),
                                        icon: p.z7b,
                                        onClick: () => (0, en.B8)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          K
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: ei ? es.intl.string(es.t.LHUP9P) : es.intl.string(es.t["9p3D9v"]),
                                        icon: ei ? p.plf : p.gt9,
                                        onClick: () => (ei ? (0, en.eM)(t, n) : (0, en.dF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          a
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: n.pinned
                                            ? es.intl.string(es.t["Bse+Fx"])
                                            : es.intl.string(es.t["CvQ18/"]),
                                        icon: p.qQX,
                                        onClick: (e) => (0, en.rY)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          j && w
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.rBIGBA),
                                        icon: p.or_,
                                        onClick: () => (0, en.gK)(t, n),
                                    },
                                    "thread",
                                )
                              : null,
                          O && h
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t["5IEsGx"]),
                                        icon: p.n$P,
                                        onClick: (e) => (0, en.HH)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          R
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(ef, {
                                            channel: t,
                                            message: n,
                                        }),
                                        (0, r.jsx)(et.fO, {}),
                                    ],
                                }),
                          (0, r.jsx)(er.Z, {
                              togglePopout: eg,
                              renderEmojiPicker: ey,
                              shouldShow: Y,
                              isFocused: ed,
                              channel: t,
                              message: n,
                          }),
                          eT
                              ? (0, r.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.icaJW1),
                                        icon: p.l22,
                                        onClick: () => {
                                            W.default.track(el.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
                                                location: P.MG.MessageExpandingButtons,
                                            }),
                                                (0, Z.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eN,
                                                    onClose: I.Qy,
                                                    source: P.YD.MessageExpandingButtons,
                                                });
                                        },
                                    },
                                    "add-confetti-potion",
                                )
                              : null,
                      ],
                  })
                : null,
            O && !h
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t["5IEsGx"]),
                          icon: p.n$P,
                          onClick: (e) => (0, en.HH)(t, n, e),
                      },
                      "reply-other",
                  )
                : null,
            h
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t.bt75u7),
                          icon: p.vdY,
                          onClick: () => (0, en.Hd)(t, n),
                      },
                      "edit",
                  )
                : null,
            w
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t.I3ltXF),
                          icon: x.Z,
                          onClick: () => eI(t, n),
                          onTooltipShow: eE,
                          onTooltipHide: eS,
                          showNewBadge: !eO && ex,
                      },
                      "forward",
                  )
                : null,
            j && !w
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t.rBIGBA),
                          icon: p.or_,
                          onClick: () => (0, en.gK)(t, n),
                      },
                      "thread",
                  )
                : null,
            !j && A
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t["39d0Wl"]),
                          icon: p.or_,
                          onClick: () => (0, en.qe)(t, n),
                      },
                      "view-thread",
                  )
                : null,
            b
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: e_ ? es.intl.string(es.t["1kWJAg"]) : es.intl.string(es.t["MFGE5+"]),
                          icon: p.MqZ,
                          onClick: () => (0, en.Xl)(t, n),
                          disabled: e_,
                      },
                      "publish",
                  )
                : null,
            o && R
                ? (0, r.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t.oyYWHB),
                          icon: p.XHJ,
                          onClick: (e) => (0, en.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !R,
                      },
                      "delete",
                  )
                : null,
            R && o
                ? null
                : (0, r.jsx)(p.yRy, {
                      targetElementRef: ep,
                      renderPopout: (e) => {
                          let { updatePosition: i, closePopout: l } = e;
                          return (0, r.jsx)(eh, {
                              channel: t,
                              message: n,
                              canReport: s,
                              onClose: l,
                              updatePosition: i,
                          });
                      },
                      shouldShow: G,
                      onRequestClose: em,
                      position: "left",
                      align: "top",
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
                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++)
                                          (n = l[r]),
                                              !(t.indexOf(n) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                  (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, ["onClick"]),
                              { isShown: l } = t;
                          return (0, r.jsx)(
                              et.sF,
                              eu(
                                  {
                                      ref: ep,
                                      label: es.intl.string(es.t.UKOtz8),
                                      icon: p.xhG,
                                      selected: l,
                                      onClick: em,
                                  },
                                  i,
                              ),
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function eg(e) {
    let { channel: t, message: n } = e,
        i = (0, u.e7)([O.Z], () => null != O.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, j.$s)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    et.sF,
                    {
                        label: es.intl.string(es.t["5911LS"]),
                        icon: p.Oe7,
                        onClick: () => (0, en.mG)(t, n),
                    },
                    "retry",
                ),
            (0, r.jsx)(
                et.sF,
                {
                    label: es.intl.string(es.t.oyYWHB),
                    icon: p.XHJ,
                    onClick: (e) => (0, en.$Z)(t, n, e),
                },
                "delete-usent",
            ),
        ],
    });
}
function eb(e) {
    let { type: t, emoji: n, channel: r, message: i, location: l, isBurst: a = !1 } = e;
    if (null == n) return;
    let o = (0, w.g1)(n);
    "add" === t
        ? (0, A.rU)(r.id, i.id, o, l, { burst: a })
        : (0, A.WO)({
              channelId: r.id,
              messageId: i.id,
              emoji: o,
              location: l,
              options: { burst: a },
          });
}
function ey(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = eu(
            { openPopoutType: "message_reaction_emoji_picker" },
            i && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? el.ZY5.GUILD_CHANNEL : el.ZY5.DM_CHANNEL,
                section: (0, w.s4)(e),
                object: el.qAy.EMOJI_REACTION_PICKER_POPOUT,
            },
        );
    return (0, r.jsx)(R.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r) => {
            let { emoji: i, willClose: l, isBurst: a } = r;
            eb({
                type: "add",
                emoji: i,
                channel: e,
                message: t,
                location: A.TW.MESSAGE_REACTION_PICKER,
                isBurst: a,
            }),
                l && (a ? s()(n, 150)() : n());
        },
        analyticsOverride: l,
        messageId: t.id,
    });
}
let e_ = i.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: l } = e,
        o = (0, u.e7)([G.Z], () => G.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === el.yb.SEND_FAILED
                ? (0, r.jsx)(eg, {
                      channel: t,
                      message: n,
                  })
                : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== el.yb.SEND_FAILED ? (0, r.jsx)(em, eu({}, e)) : null;
        })(e);
    return o || (null == s && null == c)
        ? null
        : (0, r.jsx)("div", {
              className: a()(e.className, {
                  [ec.container]: !0,
                  [ec.isHeader]: i,
                  [ec.isReply]: l,
              }),
              onClick: ep,
              onContextMenu: ep,
              role: "group",
              "aria-label": es.intl.string(es.t.Lv7LxM),
              children: (0, r.jsxs)(et.ZP, {
                  className: e.innerClassName,
                  children: [s, c],
              }),
          });
});
