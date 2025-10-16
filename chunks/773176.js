n.d(t, { Z: () => ey }), n(388685);
var i = n(951288),
    r = n(647438),
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
    C = n(633302),
    y = n(856985),
    _ = n(660189),
    v = n(868643),
    x = n(245216),
    O = n(223606),
    j = n(188597),
    E = n(41776),
    S = n(980463),
    P = n(328908),
    I = n(992970),
    Z = n(135793),
    T = n(576645),
    N = n(84040),
    A = n(222677),
    w = n(995774),
    M = n(931651),
    R = n(280845),
    L = n(2818),
    D = n(768943),
    k = n(665906),
    U = n(695346),
    B = n(314897),
    H = n(323873),
    V = n(271383),
    F = n(430824),
    G = n(607744),
    z = n(496675),
    W = n(626135),
    K = n(572004),
    Y = n(176354),
    q = n(823379),
    X = n(970257),
    J = n(418476),
    Q = n(151007),
    $ = n(901461),
    ee = n(432376),
    et = n(373662),
    en = n(996861),
    ei = n(603490),
    er = n(225138),
    el = n(981631),
    ea = n(921944),
    eo = n(185923),
    es = n(388032),
    ec = n(785727);
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let ed = [C.ZP.getByName("100"), C.ZP.getByName("laughing"), C.ZP.getByName("sparkling_heart")].filter(q.lm);
function ep(e) {
    e.stopPropagation();
}
function eh(e) {
    let { message: t, channel: n, canReport: i, onClose: r, updatePosition: l } = e;
    return (0, er.S)({
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
        canReport: i,
        onHeightUpdate: l,
        onClose: r,
        navId: "message-actions",
        ariaLabel: es.intl.string(es.t.Lv7LxM),
    });
}
let ef = r.memo(function (e) {
    let { channel: t, message: n } = e,
        r = (0, b.q5)(t.guild_id).filter(
            (e) =>
                !Y.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: eo.Hz.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        l = (r.length >= 3 ? r : [...(0, y.Z)(r.concat(ed)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e) => {
            var r;
            let l = a.find((t) => (0, w.ir)(t.emoji, (0, w.g1)(e))),
                o = null != l ? es.intl.string(es.t.wunKKC) : es.intl.string(es.t.XVx5BA),
                s = null == e.id ? e.uniqueName : e.name,
                c =
                    null != l
                        ? es.intl.formatToPlainString(es.t.vjeruL, { emojiName: s })
                        : es.intl.formatToPlainString(es.t.L1JQwM, { emojiName: s });
            return (0, i.jsx)(
                et.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: "text-sm/medium",
                                color: "header-primary",
                                className: ec.emojiTooltipText,
                                children: ":".concat(e.name, ":"),
                            }),
                            (0, i.jsx)(p.Text, {
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
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: ec.emoji,
                        canSelect: !1,
                    }),
                },
                "".concat(null != (r = e.id) ? r : 0, ":").concat(e.name),
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
            canReact: C,
            canConfigureJoin: y,
            canReply: O,
            canStartThread: j,
            canViewThread: A,
            canForward: w,
            isExpanded: M,
            showMoreUtilities: H,
            showEmojiPicker: Y,
            showMessageBookmarksActions: q,
            isMessageBookmark: er,
            setPopout: eo,
            hasDeveloperMode: ec,
            isFocused: ed,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: i,
                    showEmojiBurstPicker: r,
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
                { firstMessage: C } = (0, u.e7)([_.Z], () => _.Z.getMessage(t.id), [t.id]),
                y = U.nc.useSetting(),
                x = U.Sb.useSetting(),
                O = (0, u.e7)([G.Z], () => null == t.guild_id || G.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: j, canAddNewReactions: S } = (0, u.cj)(
                    [z.Z],
                    () => ({
                        canAddNewReactions: O && z.Z.can(el.Plq.ADD_REACTIONS, t),
                        canManageMessages: z.Z.can(el.Plq.MANAGE_MESSAGES, t),
                    }),
                    [t, O],
                ),
                P = (0, R.U)(t, n),
                I = (0, k.NE)(t, n),
                Z = (0, k.Ek)(n),
                T = (0, u.e7)([E.Z], () => null != t.guild_id && E.Z.isLurking(t.guild_id), [t]),
                N = (0, u.e7)([V.ZP], () => null != t.guild_id && V.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = d.id === h,
                w = (j || n.canDeleteOwnMessage(h)) && g && !el.V$x.UNDELETABLE.has(n.type);
            n.type === el.uaV.AUTO_MODERATION_ACTION && (w = w && j),
                t.isModeratorReportChannel() && (w = w && n.id !== (null == C ? void 0 : C.id) && !(0, $.Z)(n));
            let M = (0, X.a4)(n),
                H = (0, Q.Z)(n, t),
                W = !t.isSystemDM() && (0, J.Z)(n, h) && g && !b,
                { disableReactionCreates: Y } = (0, ee.Z)({
                    channel: t,
                    canChat: O,
                    renderReactions: y,
                    canAddNewReactions: S,
                    isLurking: T,
                    isGuest: N,
                    isActiveChannelOrUnarchivableThread: g,
                }),
                q =
                    t.type === el.d4z.GUILD_ANNOUNCEMENT &&
                    null != p &&
                    p.features.has(el.GuildFeatures.NEWS) &&
                    (A || j) &&
                    (0, m.Z)(n),
                et = t.getGuildId(),
                en =
                    null != et &&
                    n.type === el.uaV.USER_JOIN &&
                    z.Z.canWithPartialContext(el.Plq.MANAGE_GUILD, { guildId: et }),
                ei = (0, v.a)(n),
                { enabled: er } = L.Z.useExperiment({ location: "message_utilities" }),
                ea = (0, u.e7)([D.Z], () => null != D.Z.getSavedMessage(t.id, n.id)),
                eo = (0, c.Z)(a),
                es = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: H,
                canEdit: W,
                canDelete: w,
                canReport: M,
                canReply: P,
                canStartThread: I,
                canViewThread: Z,
                canForward: ei,
                canCopy: K.wS,
                hasDeveloperMode: x,
                canReact: !Y && y,
                canPublish: q,
                canConfigureJoin: en,
                isExpanded: eo && !es && !i && !r && !l,
                showEmojiPicker: i,
                showEmojiBurstPicker: r,
                showMoreUtilities: l,
                showMessageBookmarksActions: er,
                isMessageBookmark: ea,
                setPopout: o,
                isFocused: s,
            };
        })(e),
        ep = r.useRef(null),
        em = r.useCallback(() => {
            H ||
                W.default.track(el.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                }),
                eo({ moreUtilities: !H });
        }, [H, eo, n]),
        eg = r.useCallback(() => {
            eo({ emojiPicker: !Y });
        }, [Y, eo]),
        eb = (0, k.$R)(t),
        ey = n.hasFlag(el.iLy.CROSSPOSTED),
        [e_, ev] = (0, g.cv)(w ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ex = e_ === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eO, ej] = r.useState(!1),
        eE = r.useCallback(() => {
            ej(!0);
        }, []),
        eS = r.useCallback(() => {
            ej(!1);
        }, []),
        eP = r.useCallback(
            (e, t) => {
                ev(ea.L.TAKE_ACTION), (0, en.ts)(e, t);
            },
            [ev],
        ),
        eI = (0, N.Z)(t),
        eZ = (0, T.Nt)(),
        eT = eI && eZ && !n.hasPotions(),
        eN = r.useCallback(
            (e) => {
                try {
                    (0, S.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, p.showToast)((0, p.createToast)(es.intl.string(es.t.xsfC2d), p.ToastType.FAILURE));
                }
            },
            [t.id, n.id],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          l && ec
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.WqhZsr),
                                        icon: p.xPt,
                                        onClick: () => (0, en.fB)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          y
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.RpE9k5),
                                        icon: p.z7b,
                                        onClick: () => (0, en.B8)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          q
                              ? (0, i.jsx)(
                                    et.sF,
                                    {
                                        label: er ? es.intl.string(es.t.LHUP9P) : es.intl.string(es.t["9p3D9v"]),
                                        icon: er ? p.plf : p.gt9,
                                        onClick: () => (er ? (0, en.eM)(t, n) : (0, en.dF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
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
            C
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          M
                              ? null
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(ef, {
                                            channel: t,
                                            message: n,
                                        }),
                                        (0, i.jsx)(et.fO, {}),
                                    ],
                                }),
                          (0, i.jsx)(ei.Z, {
                              togglePopout: eg,
                              renderEmojiPicker: eC,
                              shouldShow: Y,
                              isFocused: ed,
                              channel: t,
                              message: n,
                          }),
                          eT
                              ? (0, i.jsx)(
                                    et.sF,
                                    {
                                        label: es.intl.string(es.t.icaJW1),
                                        icon: p.l22,
                                        onClick: () => {
                                            W.default.track(el.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
                                                location: I.MG.MessageExpandingButtons,
                                            }),
                                                (0, Z.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eN,
                                                    onClose: P.Qy,
                                                    source: I.YD.MessageExpandingButtons,
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
                ? (0, i.jsx)(
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
                ? (0, i.jsx)(
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
                ? (0, i.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t.I3ltXF),
                          icon: x.Z,
                          onClick: () => eP(t, n),
                          onTooltipShow: eE,
                          onTooltipHide: eS,
                          showNewBadge: !eO && ex,
                      },
                      "forward",
                  )
                : null,
            j && !w
                ? (0, i.jsx)(
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
                ? (0, i.jsx)(
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
                ? (0, i.jsx)(
                      et.sF,
                      {
                          label: ey ? es.intl.string(es.t["1kWJAg"]) : es.intl.string(es.t["MFGE5+"]),
                          icon: p.MqZ,
                          onClick: () => (0, en.Xl)(t, n),
                          disabled: ey,
                      },
                      "publish",
                  )
                : null,
            o && M
                ? (0, i.jsx)(
                      et.sF,
                      {
                          label: es.intl.string(es.t.oyYWHB),
                          icon: p.XHJ,
                          onClick: (e) => (0, en.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !M,
                      },
                      "delete",
                  )
                : null,
            M && o
                ? null
                : (0, i.jsx)(p.yRy, {
                      targetElementRef: ep,
                      renderPopout: (e) => {
                          let { updatePosition: r, closePopout: l } = e;
                          return (0, i.jsx)(eh, {
                              channel: t,
                              message: n,
                              canReport: s,
                              onClose: l,
                              updatePosition: r,
                          });
                      },
                      shouldShow: H,
                      onRequestClose: em,
                      position: "left",
                      align: "top",
                      animation: p.yRy.Animation.NONE,
                      children: (e, t) => {
                          var { onClick: n } = e,
                              r = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      i,
                                      r = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              i,
                                              r = {},
                                              l = Object.keys(e);
                                          for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                          return r;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (i = 0; i < l.length; i++)
                                          (n = l[i]),
                                              !(t.indexOf(n) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                  (r[n] = e[n]);
                                  }
                                  return r;
                              })(e, ["onClick"]),
                              { isShown: l } = t;
                          return (0, i.jsx)(
                              et.sF,
                              eu(
                                  {
                                      ref: ep,
                                      label: es.intl.string(es.t.UKOtz8),
                                      icon: p.xhG,
                                      selected: l,
                                      onClick: em,
                                  },
                                  r,
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
        r = (0, u.e7)([O.Z], () => null != O.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, j.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !r &&
                l &&
                (0, i.jsx)(
                    et.sF,
                    {
                        label: es.intl.string(es.t["5911LS"]),
                        icon: p.Oe7,
                        onClick: () => (0, en.mG)(t, n),
                    },
                    "retry",
                ),
            (0, i.jsx)(
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
    let { type: t, emoji: n, channel: i, message: r, location: l, isBurst: a = !1 } = e;
    if (null == n) return;
    let o = (0, w.g1)(n);
    "add" === t
        ? (0, A.rU)(i.id, r.id, o, l, { burst: a })
        : (0, A.WO)({
              channelId: i.id,
              messageId: r.id,
              emoji: o,
              location: l,
              options: { burst: a },
          });
}
function eC(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = eu(
            { openPopoutType: "message_reaction_emoji_picker" },
            r && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? el.ZY5.GUILD_CHANNEL : el.ZY5.DM_CHANNEL,
                section: (0, w.s4)(e),
                object: el.qAy.EMOJI_REACTION_PICKER_POPOUT,
            },
        );
    return (0, i.jsx)(M.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: r, willClose: l, isBurst: a } = i;
            eb({
                type: "add",
                emoji: r,
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
let ey = r.memo(function (e) {
    let { channel: t, message: n, isHeader: r, isReply: l } = e,
        o = (0, u.e7)([H.Z], () => H.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === el.yb.SEND_FAILED
                ? (0, i.jsx)(eg, {
                      channel: t,
                      message: n,
                  })
                : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== el.yb.SEND_FAILED ? (0, i.jsx)(em, eu({}, e)) : null;
        })(e);
    return o || (null == s && null == c)
        ? null
        : (0, i.jsx)("div", {
              className: a()(e.className, {
                  [ec.container]: !0,
                  [ec.isHeader]: r,
                  [ec.isReply]: l,
              }),
              onClick: ep,
              onContextMenu: ep,
              role: "group",
              "aria-label": es.intl.string(es.t.Lv7LxM),
              children: (0, i.jsxs)(et.ZP, {
                  className: e.innerClassName,
                  children: [s, c],
              }),
          });
});
