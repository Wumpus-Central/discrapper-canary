n.d(t, { Z: () => eg }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(893999),
    u = n(442837),
    d = n(481060),
    p = n(596454),
    h = n(607070),
    f = n(110630),
    m = n(543241),
    g = n(633302),
    b = n(856985),
    C = n(660189),
    y = n(868643),
    _ = n(245216),
    v = n(223606),
    O = n(188597),
    x = n(41776),
    E = n(980463),
    j = n(328908),
    S = n(992970),
    P = n(135793),
    I = n(576645),
    Z = n(84040),
    T = n(222677),
    N = n(995774),
    A = n(931651),
    w = n(280845),
    M = n(2818),
    R = n(768943),
    L = n(665906),
    D = n(695346),
    k = n(314897),
    U = n(323873),
    V = n(271383),
    F = n(430824),
    B = n(607744),
    H = n(496675),
    G = n(626135),
    W = n(572004),
    z = n(176354),
    q = n(823379),
    K = n(970257),
    Y = n(418476),
    X = n(151007),
    J = n(901461),
    Q = n(432376),
    $ = n(373662),
    ee = n(996861),
    et = n(603490),
    en = n(225138),
    ei = n(981631),
    er = n(185923),
    el = n(388032),
    ea = n(785727);
function eo(e) {
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
let es = [g.ZP.getByName("100"), g.ZP.getByName("laughing"), g.ZP.getByName("sparkling_heart")].filter(q.lm);
function ec(e) {
    e.stopPropagation();
}
function eu(e) {
    let { message: t, channel: n, canReport: i, onClose: r, updatePosition: l } = e;
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
        canReport: i,
        onHeightUpdate: l,
        onClose: r,
        navId: "message-actions",
        ariaLabel: el.intl.string(el.t.Lv7LxN),
    });
}
let ed = r.memo(function (e) {
    let { channel: t, message: n } = e,
        r = (0, m.q5)(t.guild_id).filter(
            (e) =>
                !z.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: er.Hz.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        l = (r.length >= 3 ? r : [...(0, b.Z)(r.concat(es)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e) => {
            var r;
            let l = a.find((t) => (0, N.ir)(t.emoji, (0, N.g1)(e))),
                o = null != l ? el.intl.string(el.t.wunKKA) : el.intl.string(el.t.XVx5BN),
                s = null == e.id ? e.uniqueName : e.name,
                c =
                    null != l
                        ? el.intl.formatToPlainString(el.t.vjeruO, { emojiName: s })
                        : el.intl.formatToPlainString(el.t.L1JQwE, { emojiName: s });
            return (0, i.jsx)(
                $.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "header-primary",
                                className: ea.emojiTooltipText,
                                children: ":".concat(e.name, ":"),
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: ea.emojiTooltipText,
                                children: o,
                            }),
                        ],
                    }),
                    label: c,
                    onClick: () =>
                        ef({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: T.TW.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, i.jsx)(p.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: ea.emoji,
                        canSelect: !1,
                    }),
                },
                "".concat(null != (r = e.id) ? r : 0, ":").concat(e.name),
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
            canPublish: m,
            canReact: g,
            canConfigureJoin: b,
            canReply: v,
            canStartThread: O,
            canViewThread: T,
            canForward: N,
            isExpanded: A,
            showMoreUtilities: U,
            showEmojiPicker: z,
            showMessageBookmarksActions: q,
            isMessageBookmark: en,
            setPopout: er,
            hasDeveloperMode: ea,
            isFocused: es,
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
                m = (0, u.e7)([k.default], () => k.default.getId()),
                g = (0, L.$R)(t),
                b = (0, L.Gu)(t),
                { firstMessage: _ } = (0, u.e7)([C.Z], () => C.Z.getMessage(t.id), [t.id]),
                v = D.nc.useSetting(),
                O = D.Sb.useSetting(),
                E = (0, u.e7)([B.Z], () => null == t.guild_id || B.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: j, canAddNewReactions: S } = (0, u.cj)(
                    [H.Z],
                    () => ({
                        canAddNewReactions: E && H.Z.can(ei.Plq.ADD_REACTIONS, t),
                        canManageMessages: H.Z.can(ei.Plq.MANAGE_MESSAGES, t),
                    }),
                    [t, E],
                ),
                P = (0, w.U)(t, n),
                I = (0, L.NE)(t, n),
                Z = (0, L.Ek)(n),
                T = (0, u.e7)([x.Z], () => null != t.guild_id && x.Z.isLurking(t.guild_id), [t]),
                N = (0, u.e7)([V.ZP], () => null != t.guild_id && V.ZP.isCurrentUserGuest(t.guild_id), [t]),
                A = d.id === m,
                U = (j || n.canDeleteOwnMessage(m)) && g && !ei.V$x.UNDELETABLE.has(n.type);
            n.type === ei.uaV.AUTO_MODERATION_ACTION && (U = U && j),
                t.isModeratorReportChannel() && (U = U && n.id !== (null == _ ? void 0 : _.id) && !(0, J.Z)(n));
            let G = (0, K.a4)(n),
                z = (0, X.Z)(n, t),
                q = !t.isSystemDM() && (0, Y.Z)(n, m) && g && !b,
                { disableReactionCreates: $ } = (0, Q.Z)({
                    channel: t,
                    canChat: E,
                    renderReactions: v,
                    canAddNewReactions: S,
                    isLurking: T,
                    isGuest: N,
                    isActiveChannelOrUnarchivableThread: g,
                }),
                ee =
                    t.type === ei.d4z.GUILD_ANNOUNCEMENT &&
                    null != p &&
                    p.features.has(ei.GuildFeatures.NEWS) &&
                    (A || j) &&
                    (0, f.Z)(n),
                et = t.getGuildId(),
                en =
                    null != et &&
                    n.type === ei.uaV.USER_JOIN &&
                    H.Z.canWithPartialContext(ei.Plq.MANAGE_GUILD, { guildId: et }),
                er = (0, y.a)(n),
                { enabled: el } = M.Z.useExperiment({ location: "message_utilities" }),
                ea = (0, u.e7)([R.Z], () => null != R.Z.getSavedMessage(t.id, n.id)),
                eo = (0, c.Z)(a),
                es = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: z,
                canEdit: q,
                canDelete: U,
                canReport: G,
                canReply: P,
                canStartThread: I,
                canViewThread: Z,
                canForward: er,
                canCopy: W.wS,
                hasDeveloperMode: O,
                canReact: !$ && v,
                canPublish: ee,
                canConfigureJoin: en,
                isExpanded: eo && !es && !i && !r && !l,
                showEmojiPicker: i,
                showEmojiBurstPicker: r,
                showMoreUtilities: l,
                showMessageBookmarksActions: el,
                isMessageBookmark: ea,
                setPopout: o,
                isFocused: s,
            };
        })(e),
        ec = r.useRef(null),
        ep = r.useCallback(() => {
            U ||
                G.default.track(ei.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                er({ moreUtilities: !U });
        }, [U, er, n]),
        eh = r.useCallback(() => {
            er({ emojiPicker: !z });
        }, [z, er]),
        ef = (0, L.$R)(t),
        eg = n.hasFlag(ei.iLy.CROSSPOSTED),
        eb = (0, Z.Z)(t),
        eC = (0, I.Nt)(),
        ey = eb && eC && !n.hasPotions(),
        e_ = r.useCallback(
            (e) => {
                try {
                    (0, E.qc)(t.id, n.id, e);
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(el.intl.string(el.t.xsfC2S), d.ToastType.FAILURE));
                }
            },
            [t.id, n.id],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          l && ea
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.NpHUi1),
                                        icon: d.idN,
                                        onClick: () => (0, ee.zW)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          ef
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.RpE9k7),
                                        icon: d.z7b,
                                        onClick: () => (0, ee.B8)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          q
                              ? (0, i.jsx)(
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
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: n.pinned ? el.intl.string(el.t["Bse+F/"]) : el.intl.string(el.t.CvQ18w),
                                        icon: d.qQX,
                                        onClick: (e) => (0, ee.rY)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          O && N
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.rBIGBL),
                                        icon: d.or_,
                                        onClick: () => (0, ee.gK)(t, n),
                                    },
                                    "thread",
                                )
                              : null,
                          v && p
                              ? (0, i.jsx)(
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
            g
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          A
                              ? null
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(ed, {
                                            channel: t,
                                            message: n,
                                        }),
                                        (0, i.jsx)($.fO, {}),
                                    ],
                                }),
                          (0, i.jsx)(et.Z, {
                              togglePopout: eh,
                              renderEmojiPicker: em,
                              shouldShow: z,
                              isFocused: es,
                              channel: t,
                              message: n,
                          }),
                          ey
                              ? (0, i.jsx)(
                                    $.sF,
                                    {
                                        label: el.intl.string(el.t.icaJW5),
                                        icon: d.l22,
                                        onClick: () => {
                                            G.default.track(ei.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
                                                location: S.MG.MessageExpandingButtons,
                                            }),
                                                (0, P.s)({
                                                    channelId: t.id,
                                                    message: n,
                                                    onRedeem: e_,
                                                    onClose: j.Qy,
                                                    source: S.YD.MessageExpandingButtons,
                                                });
                                        },
                                    },
                                    "add-confetti-potion",
                                )
                              : null,
                      ],
                  })
                : null,
            v && !p
                ? (0, i.jsx)(
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
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.bt75uw),
                          icon: d.vdY,
                          onClick: () => (0, ee.Hd)(t, n),
                      },
                      "edit",
                  )
                : null,
            N
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.I3ltXO),
                          icon: _.Z,
                          onClick: () => (0, ee.ts)(t, n),
                      },
                      "forward",
                  )
                : null,
            O && !N
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t.rBIGBL),
                          icon: d.or_,
                          onClick: () => (0, ee.gK)(t, n),
                      },
                      "thread",
                  )
                : null,
            !O && T
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: el.intl.string(el.t["39d0Wj"]),
                          icon: d.or_,
                          onClick: () => (0, ee.qe)(t, n),
                      },
                      "view-thread",
                  )
                : null,
            m
                ? (0, i.jsx)(
                      $.sF,
                      {
                          label: eg ? el.intl.string(el.t["1kWJAr"]) : el.intl.string(el.t.MFGE51),
                          icon: d.MqZ,
                          onClick: () => (0, ee.Xl)(t, n),
                          disabled: eg,
                      },
                      "publish",
                  )
                : null,
            o && A
                ? (0, i.jsx)(
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
                : (0, i.jsx)(d.yRy, {
                      targetElementRef: ec,
                      renderPopout: (e) => {
                          let { updatePosition: r, closePopout: l } = e;
                          return (0, i.jsx)(eu, {
                              channel: t,
                              message: n,
                              canReport: s,
                              onClose: l,
                              updatePosition: r,
                          });
                      },
                      shouldShow: U,
                      onRequestClose: ep,
                      position: "left",
                      align: "top",
                      animation: d.yRy.Animation.NONE,
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
                              $.sF,
                              eo(
                                  {
                                      ref: ec,
                                      label: el.intl.string(el.t["UKOtz+"]),
                                      icon: d.xhG,
                                      selected: l,
                                      onClick: ep,
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
function eh(e) {
    let { channel: t, message: n } = e,
        r = (0, u.e7)([v.Z], () => null != v.Z.getMessage(n.id), [n.id]),
        l = null == n.interaction || (null != n.interactionData && (0, O.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !r &&
                l &&
                (0, i.jsx)(
                    $.sF,
                    {
                        label: el.intl.string(el.t["5911Lb"]),
                        icon: d.Oe7,
                        onClick: () => (0, ee.mG)(t, n),
                    },
                    "retry",
                ),
            (0, i.jsx)(
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
function ef(e) {
    let { type: t, emoji: n, channel: i, message: r, location: l, isBurst: a = !1 } = e;
    if (null == n) return;
    let o = (0, N.g1)(n);
    "add" === t
        ? (0, T.rU)(i.id, r.id, o, l, { burst: a })
        : (0, T.WO)({
              channelId: i.id,
              messageId: r.id,
              emoji: o,
              location: l,
              options: { burst: a },
          });
}
function em(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = eo(
            { openPopoutType: "message_reaction_emoji_picker" },
            r && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? ei.ZY5.GUILD_CHANNEL : ei.ZY5.DM_CHANNEL,
                section: (0, N.s4)(e),
                object: ei.qAy.EMOJI_REACTION_PICKER_POPOUT,
            },
        );
    return (0, i.jsx)(A.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: r, willClose: l, isBurst: a } = i;
            ef({
                type: "add",
                emoji: r,
                channel: e,
                message: t,
                location: T.TW.MESSAGE_REACTION_PICKER,
                isBurst: a,
            }),
                l && (a ? s()(n, 150)() : n());
        },
        analyticsOverride: l,
        messageId: t.id,
    });
}
let eg = r.memo(function (e) {
    let { channel: t, message: n, isHeader: r, isReply: l } = e,
        o = (0, u.e7)([U.Z], () => U.Z.isEditing(t.id, n.id), [t.id, n.id]),
        s = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ei.yb.SEND_FAILED
                ? (0, i.jsx)(eh, {
                      channel: t,
                      message: n,
                  })
                : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== ei.yb.SEND_FAILED ? (0, i.jsx)(ep, eo({}, e)) : null;
        })(e);
    return o || (null == s && null == c)
        ? null
        : (0, i.jsx)("div", {
              className: a()(e.className, {
                  [ea.container]: !0,
                  [ea.isHeader]: r,
                  [ea.isReply]: l,
              }),
              onClick: ec,
              onContextMenu: ec,
              role: "group",
              "aria-label": el.intl.string(el.t.Lv7LxN),
              children: (0, i.jsxs)($.ZP, {
                  className: e.innerClassName,
                  children: [s, c],
              }),
          });
});
