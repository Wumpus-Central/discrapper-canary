n.d(t, { Z: () => em }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(893999),
    u = n(442837),
    d = n(481060),
    p = n(596454),
    f = n(607070),
    h = n(110630),
    g = n(543241),
    m = n(633302),
    b = n(856985),
    y = n(660189),
    v = n(868643),
    O = n(245216),
    j = n(223606),
    x = n(188597),
    C = n(41776),
    E = n(980463),
    S = n(328908),
    _ = n(992970),
    I = n(135793),
    P = n(576645),
    Z = n(84040),
    N = n(222677),
    T = n(995774),
    A = n(931651),
    w = n(280845),
    R = n(2818),
    D = n(768943),
    M = n(665906),
    k = n(695346),
    L = n(314897),
    U = n(323873),
    G = n(271383),
    B = n(430824),
    F = n(607744),
    H = n(496675),
    V = n(626135),
    z = n(572004),
    W = n(176354),
    K = n(823379),
    Y = n(970257),
    q = n(418476),
    X = n(151007),
    Q = n(901461),
    J = n(432376),
    $ = n(373662),
    ee = n(996861),
    et = n(603490),
    en = n(225138),
    er = n(981631),
    ei = n(185923),
    el = n(388032),
    ea = n(84819);
function eo(e) {
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
let es = [m.ZP.getByName("100"), m.ZP.getByName("laughing"), m.ZP.getByName("sparkling_heart")].filter(K.lm);
function ec(e) {
    e.stopPropagation();
}
function eu(e) {
    let { message: t, channel: n, canReport: r, onClose: i, updatePosition: l } = e;
    return (0, en.S)({
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
        emojiId: null,
        canReport: r,
        onHeightUpdate: l,
        onClose: i,
        navId: "message-actions",
        ariaLabel: el.intl.string(el.t.Lv7LxN),
    });
}
let ed = i.memo(function (e) {
    let { channel: t, message: n } = e,
        i = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !W.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ei.Hz.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        l = (i.length >= 3 ? i : [...(0, b.Z)(i.concat(es)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            var i;
            let l = a.find((t) => (0, T.ir)(t.emoji, (0, T.g1)(e))),
                o = null != l ? el.intl.string(el.t.wunKKA) : el.intl.string(el.t.XVx5BN),
                s = null == e.id ? e.uniqueName : e.name,
                c =
                    null != l
                        ? el.intl.formatToPlainString(el.t.vjeruO, { emojiName: s })
                        : el.intl.formatToPlainString(el.t.L1JQwE, { emojiName: s });
            return (0, r.jsx)(
                $.sF,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: ea.emojiTooltipText,
                                children: ":".concat(e.name, ":"),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: ea.emojiTooltipText,
                                children: o,
                            }),
                        ],
                    }),
                    label: c,
                    onClick: () =>
                        eh({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: N.TW.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(p.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: ea.emoji,
                        canSelect: !1,
                    }),
                },
                "".concat(null != (i = e.id) ? i : 0, ":").concat(e.name),
            );
        }),
    });
});
function ep(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: a,
            canDelete: o,
            canReport: s,
            canEdit: p,
            canPublish: g,
            canReact: m,
            canConfigureJoin: b,
            canReply: j,
            canStartThread: x,
            canViewThread: N,
            canForward: T,
            isExpanded: A,
            showMoreUtilities: U,
            showEmojiPicker: W,
            showMessageBookmarksActions: K,
            isMessageBookmark: en,
            setPopout: ei,
            hasDeveloperMode: ea,
            isFocused: es,
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
                p = (0, u.e7)([B.Z], () => B.Z.getGuild(t.guild_id), [t.guild_id]),
                g = (0, u.e7)([L.default], () => L.default.getId()),
                m = (0, M.$R)(t),
                b = (0, M.Gu)(t),
                { firstMessage: O } = (0, u.e7)([y.Z], () => y.Z.getMessage(t.id), [t.id]),
                j = k.nc.useSetting(),
                x = k.Sb.useSetting(),
                E = (0, u.e7)([F.Z], () => null == t.guild_id || F.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: S, canAddNewReactions: _ } = (0, u.cj)(
                    [H.Z],
                    () => ({
                        canAddNewReactions: E && H.Z.can(er.Plq.ADD_REACTIONS, t),
                        canManageMessages: H.Z.can(er.Plq.MANAGE_MESSAGES, t),
                    }),
                    [t, E],
                ),
                I = (0, w.U)(t, n),
                P = (0, M.NE)(t, n),
                Z = (0, M.Ek)(n),
                N = (0, u.e7)([C.Z], () => null != t.guild_id && C.Z.isLurking(t.guild_id), [t]),
                T = (0, u.e7)([G.ZP], () => null != t.guild_id && G.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = d.id === g,
                U = (S || n.canDeleteOwnMessage(g)) && m && !er.V$x.UNDELETABLE.has(n.type);
            n.type === er.uaV.AUTO_MODERATION_ACTION && (U = U && S),
                t.isModeratorReportChannel() && (U = U && n.id !== (null == O ? void 0 : O.id) && !(0, Q.Z)(n));
            let V = (0, Y.a4)(n),
                W = (0, X.Z)(n, t),
                K = !t.isSystemDM() && (0, q.Z)(n, g) && m && !b,
                { disableReactionCreates: $ } = (0, J.Z)({
                    channel: t,
                    canChat: E,
                    renderReactions: j,
                    canAddNewReactions: _,
                    isLurking: N,
                    isGuest: T,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                ee =
                    t.type === er.d4z.GUILD_ANNOUNCEMENT &&
                    null != p &&
                    p.features.has(er.GuildFeatures.NEWS) &&
                    (A || S) &&
                    (0, h.Z)(n),
                et = t.getGuildId(),
                en =
                    null != et &&
                    n.type === er.uaV.USER_JOIN &&
                    H.Z.canWithPartialContext(er.Plq.MANAGE_GUILD, { guildId: et }),
                ei = (0, v.a)(n),
                { enabled: el } = R.Z.useExperiment({ location: "message_utilities" }),
                ea = (0, u.e7)([D.Z], () => null != D.Z.getSavedMessage(t.id, n.id)),
                eo = (0, c.Z)(a),
                es = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: W,
                canEdit: K,
                canDelete: U,
                canReport: V,
                canReply: I,
                canStartThread: P,
                canViewThread: Z,
                canForward: ei,
                canCopy: z.wS,
                hasDeveloperMode: x,
                canReact: !$ && j,
                canPublish: ee,
                canConfigureJoin: en,
                isExpanded: eo && !es && !r && !i && !l,
                showEmojiPicker: r,
                showEmojiBurstPicker: i,
                showMoreUtilities: l,
                showMessageBookmarksActions: el,
                isMessageBookmark: ea,
                setPopout: o,
                isFocused: s,
            };
        })(e),
        ec = i.useRef(null),
        ep = i.useCallback(() => {
            U ||
                V.default.track(er.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                ei({ moreUtilities: !U });
        }, [U, ei, n]),
        ef = i.useCallback(() => {
            ei({ emojiPicker: !W });
        }, [W, ei]),
        eh = (0, M.$R)(t),
        em = n.hasFlag(er.iLy.CROSSPOSTED),
        eb = (0, Z.Z)(t),
        ey = (0, P.Nt)(),
        ev = eb && ey && !n.hasPotions(),
        eO = i.useCallback(
            (e) => {
                try {
                    (0, E.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(el.intl.string(el.t.xsfC2S), d.ToastType.FAILURE));
                }
            },
            [t.id, n.id],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && ea
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.zBoHlf),
                                        icon: d.VuL,
                                        onClick: (e) => (0, ee.F4)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.WqhZss),
                                        icon: d.xPt,
                                        onClick: () => (0, ee.fB)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          b
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.NpHUi1),
                                        icon: d.idN,
                                        onClick: () => (0, ee.zW)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          eh
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.RpE9k7),
                                        icon: d.z7b,
                                        onClick: () => (0, ee.B8)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          K
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: en ? el.intl.string(el.t.LHUP9D) : el.intl.string(el.t["9p3D9p"]),
                                        icon: en ? d.plf : d.gt9,
                                        onClick: () => (en ? (0, ee.eM)(t, n) : (0, ee.dF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          a
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: n.pinned ? el.intl.string(el.t["Bse+F/"]) : el.intl.string(el.t.CvQ18w),
                                        icon: d.qQX,
                                        onClick: (e) => (0, ee.rY)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          x && T
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.rBIGBL),
                                        icon: d.or_,
                                        onClick: () => (0, ee.gK)(t, n),
                                    },
                                    "thread",
                                )
                              : null,
                          j && p
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t["5IEsGx"]),
                                        icon: d.n$P,
                                        onClick: (e) => (0, ee.HH)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            m
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          A
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(ed, {
                                            channel: t,
                                            message: n,
                                        }),
                                        (0, r.jsx)($.fO, {}),
                                    ],
                                }),
                          (0, r.jsx)(et.Z, {
                              togglePopout: ef,
                              renderEmojiPicker: eg,
                              shouldShow: W,
                              isFocused: es,
                              channel: t,
                              message: n,
                          }),
                          ev
                              ? (0, r.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.icaJW5),
                                        icon: d.l22,
                                        onClick: () => {
                                            V.default.track(er.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
                                                location: _.MG.MessageExpandingButtons,
                                            }),
                                                (0, I.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: eO,
                                                    onClose: S.Qy,
                                                    source: _.YD.MessageExpandingButtons,
                                                });
                                        },
                                    },
                                    "add-confetti-potion",
                                )
                              : null,
                      ],
                  })
                : null,
            j && !p
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t["5IEsGx"]),
                          icon: d.n$P,
                          onClick: (e) => (0, ee.HH)(t, n, e),
                      },
                      "reply-other",
                  )
                : null,
            p
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.bt75uw),
                          icon: d.vdY,
                          onClick: () => (0, ee.Hd)(t, n),
                      },
                      "edit",
                  )
                : null,
            T
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.I3ltXO),
                          icon: O.Z,
                          onClick: () => (0, ee.ts)(t, n),
                      },
                      "forward",
                  )
                : null,
            x && !T
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.rBIGBL),
                          icon: d.or_,
                          onClick: () => (0, ee.gK)(t, n),
                      },
                      "thread",
                  )
                : null,
            !x && N
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t["39d0Wj"]),
                          icon: d.or_,
                          onClick: () => (0, ee.qe)(t, n),
                      },
                      "view-thread",
                  )
                : null,
            g
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: em ? el.intl.string(el.t["1kWJAr"]) : el.intl.string(el.t.MFGE51),
                          icon: d.MqZ,
                          onClick: () => (0, ee.Xl)(t, n),
                          disabled: em,
                      },
                      "publish",
                  )
                : null,
            o && A
                ? (0, r.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.oyYWHE),
                          icon: d.XHJ,
                          onClick: (e) => (0, ee.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !A,
                      },
                      "delete",
                  )
                : null,
            A && o
                ? null
                : (0, r.jsx)(d.yRy, {
                      targetElementRef: ec,
                      renderPopout: (e) => {
                          let { updatePosition: i, closePopout: l } = e;
                          return (0, r.jsx)(eu, {
                              channel: t,
                              message: n,
                              canReport: s,
                              onClose: l,
                              updatePosition: i,
                          });
                      },
                      shouldShow: U,
                      onRequestClose: ep,
                      position: "left",
                      align: "top",
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
                              $.sF,
                              eo(
                                  {
                                      ref: ec,
                                      label: el.intl.string(el.t["UKOtz+"]),
                                      icon: d.xhG,
                                      selected: l,
                                      onClick: ep,
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
function ef(e) {
    let { channel: t, message: n } = e,
        i = (0, u.e7)([j.Z], () => null != j.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, x.$s)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i &&
                l &&
                (0, r.jsx)(
                    $.sF,
                    {
                        label: el.intl.string(el.t["5911Lb"]),
                        icon: d.Oe7,
                        onClick: () => (0, ee.mG)(t, n),
                    },
                    "retry",
                ),
            (0, r.jsx)(
                $.sF,
                {
                    label: el.intl.string(el.t.oyYWHE),
                    icon: d.XHJ,
                    onClick: (e) => (0, ee.$Z)(t, n, e),
                },
                "delete-usent",
            ),
        ],
    });
}
function eh(e) {
    let { type: t, emoji: n, channel: r, message: i, location: l, isBurst: a = !1 } = e;
    if (null == n) return;
    let o = (0, T.g1)(n);
    "add" === t
        ? (0, N.rU)(r.id, i.id, o, l, { burst: a })
        : (0, N.WO)({
              channelId: r.id,
              messageId: i.id,
              emoji: o,
              location: l,
              options: { burst: a },
          });
}
function eg(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = eo(
            { openPopoutType: "message_reaction_emoji_picker" },
            i && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? er.ZY5.GUILD_CHANNEL : er.ZY5.DM_CHANNEL,
                section: (0, T.s4)(e),
                object: er.qAy.EMOJI_REACTION_PICKER_POPOUT,
            },
        );
    return (0, r.jsx)(A.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r) => {
            let { emoji: i, willClose: l, isBurst: a } = r;
            eh({
                type: "add",
                emoji: i,
                channel: e,
                message: t,
                location: N.TW.MESSAGE_REACTION_PICKER,
                isBurst: a,
            }),
                l && (a ? s()(n, 150)() : n());
        },
        analyticsOverride: l,
        messageId: t.id,
    });
}
let em = i.memo(function (e) {
    let { channel: t, message: n, isHeader: i, isReply: l } = e,
        o = (0, u.e7)([U.Z], () => U.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === er.yb.SEND_FAILED
                ? (0, r.jsx)(ef, {
                      channel: t,
                      message: n,
                  })
                : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== er.yb.SEND_FAILED ? (0, r.jsx)(ep, eo({}, e)) : null;
        })(e);
    return o || (null == s && null == c)
        ? null
        : (0, r.jsx)("div", {
              className: a()(e.className, {
                  [ea.container]: !0,
                  [ea.isHeader]: i,
                  [ea.isReply]: l,
              }),
              onClick: ec,
              onContextMenu: ec,
              role: "group",
              "aria-label": el.intl.string(el.t.Lv7LxN),
              children: (0, r.jsxs)($.ZP, {
                  className: e.innerClassName,
                  children: [s, c],
              }),
          });
});
