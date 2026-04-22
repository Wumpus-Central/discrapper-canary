n.d(t, { _: () => k, g: () => D });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(311907),
    d = n(459192),
    c = n(602853),
    u = n(827734),
    h = n(534890),
    m = n(939249),
    p = n(47167),
    g = n(713654),
    f = n(941971),
    _ = n(734057),
    x = n(71393),
    A = n(222823),
    E = n(994500),
    S = n(485296),
    I = n(741961),
    v = n(287809),
    b = n(1193),
    C = n(145567),
    T = n(922611),
    j = n(651813),
    y = n(919843),
    w = n(534765),
    N = n(34307),
    R = n(652215),
    M = n(985018),
    O = n(870143),
    k = (((i = {}).DEFAULT = "DEFAULT"), (i.CHANNEL_TYPE = "CHANNEL_TYPE"), i);
let D = a.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: n, iconVariant: i = "DEFAULT" } = e,
        s = null != n && t === n,
        k = (0, o.bG)([b.A], () => b.A.getSelectedChannelId() === t, [t]),
        D = (0, o.bG)([b.A], () => b.A.getVoiceChatMinimized()),
        z = (0, c.r)(u.A.colors.ICON_STATUS_ONLINE),
        P = (0, o.bG)([S.A], () => !!s && !!(S.A.isAnyoneElseSpeaking() || S.A.isCurrentUserSpeaking()), [s]),
        [L, V] = a.useState(!1),
        { mentionCount: G, isMentionLowImportance: U } = (0, o.cf)(
            [A.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: A.Ay.getMentionCount(t),
                          isMentionLowImportance: A.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: H,
            user: F,
            guild: W,
            channel: Z,
        } = (0, o.cf)([_.A, x.A, v.default, E.A], () => {
            let e = _.A.getChannel(t) ?? null;
            if (null == e) return { label: M.intl.string(M.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, p.m1)(e, v.default, E.A);
            return { label: n, user: (0, j.j)(e, v.default), guild: (0, j.P)(e, x.A), channel: e };
        }, [t]);
    a.useEffect(() => {
        null == Z && (0, y.b)(t);
    }, [Z, t]);
    let Y = (0, o.bG)([I.A, v.default], () => {
            if (null == Z) return !1;
            let e = v.default.getCurrentUser()?.id ?? null,
                t = I.A.getTypingUsers(Z.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [Z]),
        X = (0, o.bG)([A.Ay], () => {
            let e = Z?.id;
            return null != e && A.Ay.hasUnread(e);
        }, [Z]),
        B = (0, r.jsx)("div", {
            className: O.St,
            children: (() => {
                let e = Z?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === i && !e) {
                    let e = (0, g.gU)(Z, W);
                    e ??= h.o;
                    let t = s && !D && P,
                        n = { boxShadow: "none" },
                        i = z.rgba({ opacity: 0.85 }),
                        a = z.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${a})`),
                        (0, r.jsx)("div", {
                            className: l()(O.s, k && O.lJ),
                            style: n,
                            children: (0, r.jsx)(e, {
                                className: O.Yc,
                                size: "sm",
                                color: k ? u.A.colors.WHITE : u.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(T.g, {
                    channel: Z,
                    user: F,
                    guild: W,
                    isSelected: k,
                    size: T.c.SIZE_40,
                    isTyping: Y,
                    mentionCount: G,
                    isMentionLowImportance: U,
                });
            })(),
        }),
        K = (0, w.r)({ channel: Z, guild: W, user: F }),
        q = Z?.isPrivate() ?? !1,
        Q = W?.name ?? "",
        $ = q ? void 0 : H,
        J = q ? H : "" !== Q ? Q : H,
        ee = (() => {
            if (null == Z || q) return null;
            let e = (0, g.gU)(Z, W);
            return (e ??= h.o), (0, r.jsx)(e, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == Z
        ? (0, r.jsx)("div", { className: O.R })
        : (0, r.jsx)(d.u, {
              title: $,
              body: J,
              asset: ee,
              assetSize: 20,
              "aria-label": H,
              children: (0, r.jsxs)(m.D, {
                  className: O.pc,
                  onClick: () => {
                      s && (0, C.S$)({ minimized: !1 }),
                          (0, C.D$)({
                              target: { kind: C.bB.CHANNEL, channelId: t, guildId: W?.id ?? null, messageId: null },
                              source: N.B.MANUAL,
                              widgetType: R.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: K,
                  onMouseEnter: () => V(!0),
                  onMouseLeave: () => V(!1),
                  children: [
                      B,
                      (0, r.jsx)("div", {
                          className: O.vT,
                          children: (0, r.jsx)(f.A, { selected: k, hovered: L, unread: X }),
                      }),
                  ],
              }),
          });
});
