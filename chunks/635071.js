n.d(l, { A: () => j, w: () => b });
var r,
    u = n(627968),
    t = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(607399),
    o = n(17928),
    d = n(473193),
    c = n(521100),
    A = n(939249),
    m = n(545442),
    p = n(775602),
    h = n(793574),
    S = n(688810),
    f = n(922301),
    I = n(368919),
    v = n(252545),
    R = n(386467),
    y = n(534400),
    T = n(176201),
    _ = n(676608),
    g = n(342296),
    N = n(317525),
    x = n(486020),
    C = n(109054),
    E = n(560936),
    G = n(743981),
    M = n(334211),
    b = (((r = {})[(r.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (r[(r.BADGES = 1)] = "BADGES"), r);
function j(e) {
    let {
            author: l,
            message: n,
            channel: r,
            userOverride: s,
            compact: b = !1,
            withMentionPrefix: j = !1,
            showPopout: O = !1,
            hideGuildTag: D = !1,
            hideSystemTag: w = !1,
            className: F,
            onClick: k,
            onContextMenu: V,
            onPopoutRequestClose: P,
            renderPopout: z,
            decorations: H,
            previewGuildId: L,
            subscribeToGroupId: B,
        } = e,
        U = t.useRef(null),
        W = t.useContext(R.A),
        $ = r?.guild_id ?? W,
        { analyticsLocations: Z } = (0, S.Ay)(h.A.USERNAME),
        K = j ? "@" : "",
        { nick: Y, colorString: q, colorStrings: J, colorRoleName: Q, displayNameStyles: X } = l,
        ee = (0, o.bG)([p.A], () => p.A.roleStyle),
        el = "username" === ee,
        en = (0, v.a)({ displayNameStyles: X }),
        er = (0, o.bG)([N.A], () =>
            null == l.guildId || null == l.colorRoleId ? null : N.A.getRole(l.guildId, l.colorRoleId),
        ),
        eu = (0, _.jV)(L ?? $, er),
        et = (0, C.A)(n),
        es = t.useContext(d.C),
        ea = es?.animate || O,
        ei = eu && (0, T.kz)(l),
        eo = el && ei,
        ed = r?.isPrivate() && null != X;
    (0, E.A)({ shouldSubscribe: ed || eo, subscribeToGroupId: B, authorId: n.author.id });
    let { gradientStyle: ec, gradientClassname: eA } = (0, c.v5)({
            colorStrings: J,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: ea,
        }),
        em = (0, c.CR)(K + Y),
        ep = {
            className: a()(M.oF, en, { [eA]: eo, [M.IW]: "username" === ee && null != q }),
            style: (() => {
                if (el)
                    return eo && null != J
                        ? { ...ec, textDecorationColor: J?.primaryColor ?? void 0 }
                        : null != q
                          ? { color: q }
                          : void 0;
            })(),
            onClick: k,
            onContextMenu: V,
            children: ed
                ? (0, u.jsx)(I.A, {
                      userName: em,
                      displayNameStyles: X,
                      effectDisplayType: ea ? f.G.ANIMATED : f.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != k,
                      textClassName: M.Mu,
                  })
                : em,
            "data-text": K + Y,
            "data-username-has-gradient": !!ei || void 0,
        },
        eh = t.useMemo(
            () =>
                D
                    ? null
                    : (0, u.jsx)(y.Cw, {
                          primaryGuild: l.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: $,
                          className: M.s4,
                          badgeSize: b ? G.Sl.SIZE_12 : void 0,
                      }),
            [b, l.primaryGuild, $, n.author.id, D],
        ),
        eS = s ?? n.author,
        ef =
            null != z && null != O
                ? (0, u.jsx)(g.A, {
                      targetElementRef: U,
                      user: eS,
                      guildId: $,
                      channelId: n.channel_id,
                      renderPopout: z,
                      shouldShow: O,
                      shouldPreload: et,
                      position: i.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != l.guildMemberAvatar && null != $
                              ? (0, x.s7)({ guildId: $, userId: eS.id, avatar: l.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: P,
                      clickTrap: O,
                      children: (e) => {
                          let { onClick: l, ...n } = e;
                          return (0, u.jsxs)(u.Fragment, {
                              children: [
                                  (0, u.jsx)(A.D, {
                                      tag: "span",
                                      innerRef: U,
                                      ...n,
                                      ...ep,
                                      className: a()(ep.className, M.vk, F),
                                  }),
                                  eh,
                              ],
                          });
                      },
                  })
                : (0, u.jsxs)(u.Fragment, {
                      children: [(0, u.jsx)(A.D, { ...ep, className: a()(ep.className, F) }), eh],
                  }),
        eI = null != H ? H[0] : null,
        ev = null != H ? H[1] : null;
    return (0, u.jsxs)(S.f5, {
        value: Z,
        children: [
            null != eI && !w && b ? (0, u.jsxs)(u.Fragment, { children: [" ", eI, " "] }) : null,
            "dot" === ee
                ? (0, u.jsx)(m.W, { color: q, colors: ei ? J : null, name: Q, className: M.m4, hoverOverride: ea })
                : null,
            ef,
            null != ev ? ev : null,
            null == eI || w || b ? null : eI,
        ],
    });
}
