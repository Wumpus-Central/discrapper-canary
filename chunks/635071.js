n.d(e, { A: () => k, w: () => _ });
var r,
    a = n(627968),
    u = n(64700),
    s = n(503698),
    i = n.n(s),
    t = n(607399),
    d = n(17928),
    o = n(473193),
    c = n(521100),
    m = n(939249),
    h = n(545442),
    A = n(775602),
    p = n(793574),
    v = n(688810),
    g = n(922301),
    x = n(368919),
    S = n(73392),
    G = n(386467),
    I = n(534400),
    N = n(176201),
    y = n(676608),
    C = n(342296),
    j = n(317525),
    f = n(486020),
    E = n(109054),
    R = n(560936),
    b = n(743981),
    M = n(334211),
    _ = (((r = {})[(r.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (r[(r.BADGES = 1)] = "BADGES"), r);
function k(l) {
    let {
            author: e,
            message: n,
            channel: r,
            userOverride: s,
            compact: _ = !1,
            withMentionPrefix: k = !1,
            showPopout: w = !1,
            hideGuildTag: D = !1,
            hideSystemTag: T = !1,
            className: F,
            onClick: P,
            onContextMenu: z,
            onPopoutRequestClose: U,
            renderPopout: B,
            decorations: O,
            previewGuildId: W,
            subscribeToGroupId: Y,
        } = l,
        Z = u.useRef(null),
        q = u.useContext(G.A),
        H = r?.guild_id ?? q,
        { analyticsLocations: L } = (0, v.Ay)(p.A.USERNAME),
        V = k ? "@" : "",
        { nick: J, colorString: K, colorStrings: Q, colorRoleName: X, displayNameStyles: $ } = e,
        ll = (0, d.bG)([A.Ay], () => A.Ay.roleStyle),
        le = "username" === ll,
        ln = (0, S.a)({ displayNameStyles: $ }),
        lr = (0, d.bG)([j.A], () =>
            null == e.guildId || null == e.colorRoleId ? null : j.A.getRole(e.guildId, e.colorRoleId),
        ),
        la = (0, y.jV)(W ?? H, lr),
        lu = (0, E.A)(n),
        ls = u.useContext(o.C),
        li = ls?.animate || w,
        lt = la && (0, N.kz)(e),
        ld = le && lt,
        lo = r?.isPrivate() && null != $;
    (0, R.A)({ shouldSubscribe: lo || ld, subscribeToGroupId: Y, authorId: n.author.id });
    let { gradientStyle: lc, gradientClassname: lm } = (0, c.v5)({
            colorStrings: Q,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: li,
        }),
        lh = (0, c.CR)(V + J),
        lA = {
            className: i()(M.oF, ln, { [lm]: ld, [M.IW]: "username" === ll && null != K }),
            style: (() => {
                if (le)
                    return ld && null != Q
                        ? { ...lc, textDecorationColor: Q?.primaryColor ?? void 0 }
                        : null != K
                          ? { color: K }
                          : void 0;
            })(),
            onClick: P,
            onContextMenu: z,
            children: lo
                ? (0, a.jsx)(x.A, {
                      userName: lh,
                      displayNameStyles: $,
                      effectDisplayType: li ? g.G.ANIMATED : g.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != P,
                      textClassName: M.Mu,
                  })
                : lh,
            "data-text": V + J,
            "data-username-has-gradient": !!lt || void 0,
        },
        lp = u.useMemo(
            () =>
                D
                    ? null
                    : (0, a.jsx)(I.Cw, {
                          primaryGuild: e.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: H,
                          className: M.s4,
                          badgeSize: _ ? b.Sl.SIZE_12 : void 0,
                      }),
            [_, e.primaryGuild, H, n.author.id, D],
        ),
        lv = s ?? n.author,
        lg =
            null != B && null != w
                ? (0, a.jsx)(C.A, {
                      targetElementRef: Z,
                      user: lv,
                      guildId: H,
                      channelId: n.channel_id,
                      renderPopout: B,
                      shouldShow: w,
                      shouldPreload: lu,
                      position: t.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != e.guildMemberAvatar && null != H
                              ? (0, f.s7)({ guildId: H, userId: lv.id, avatar: e.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: U,
                      clickTrap: w,
                      children: (l) => {
                          let { onClick: e, ...n } = l;
                          return (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.D, {
                                      tag: "span",
                                      innerRef: Z,
                                      ...n,
                                      ...lA,
                                      className: i()(lA.className, M.vk, F),
                                  }),
                                  lp,
                              ],
                          });
                      },
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)(m.D, { ...lA, className: i()(lA.className, F) }), lp],
                  }),
        lx = null != O ? O[0] : null,
        lS = null != O ? O[1] : null;
    return (0, a.jsxs)(v.f5, {
        value: L,
        children: [
            null != lx && !T && _ ? (0, a.jsxs)(a.Fragment, { children: [" ", lx, " "] }) : null,
            "dot" === ll
                ? (0, a.jsx)(h.W, { color: K, colors: lt ? Q : null, name: X, className: M.m4, hoverOverride: li })
                : null,
            lg,
            null != lS ? lS : null,
            null == lx || T || _ ? null : lx,
        ],
    });
}
