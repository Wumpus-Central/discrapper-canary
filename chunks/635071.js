n.d(t, { A: () => f, w: () => y });
var i,
    l = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    c = n(311907),
    _ = n(473193),
    E = n(36075),
    d = n(397927),
    u = n(775602),
    A = n(793574),
    T = n(688810),
    I = n(922301),
    N = n(750112),
    R = n(73392),
    S = n(386467),
    C = n(534400),
    O = n(176201),
    p = n(676608),
    m = n(342296),
    D = n(317525),
    P = n(486020),
    g = n(109054),
    h = n(560936),
    U = n(743981),
    M = n(679740),
    y = (((i = {})[(i.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (i[(i.BADGES = 1)] = "BADGES"), i);
function f(e) {
    let {
            author: t,
            message: n,
            channel: i,
            userOverride: a,
            compact: y = !1,
            withMentionPrefix: f = !1,
            showPopout: L = !1,
            hideGuildTag: k = !1,
            hideSystemTag: x = !1,
            className: G,
            onClick: b,
            onContextMenu: j,
            onPopoutRequestClose: B,
            renderPopout: v,
            decorations: q,
            previewGuildId: X,
            subscribeToGroupId: F,
        } = e,
        w = r.useRef(null),
        V = r.useContext(S.A),
        H = i?.guild_id ?? V,
        { analyticsLocations: W } = (0, T.Ay)(A.A.USERNAME),
        K = f ? "@" : "",
        { nick: Y, colorString: $, colorStrings: z, colorRoleName: J, displayNameStyles: Q } = t,
        Z = (0, c.bG)([u.A], () => u.A.roleStyle),
        ee = "username" === Z,
        et = (0, R.a)({ displayNameStyles: Q }),
        en = (0, c.bG)([D.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : D.A.getRole(t.guildId, t.colorRoleId),
        ),
        ei = (0, p.jV)(X ?? H, en),
        el = (0, g.A)(n),
        er = r.useContext(_.C),
        ea = er?.animate || L,
        es = ei && (0, O.kz)(t),
        eo = ee && es,
        ec = i?.isPrivate() && null != Q;
    (0, h.A)({ shouldSubscribe: ec || eo, subscribeToGroupId: F, authorId: n.author.id });
    let { gradientStyle: e_, gradientClassname: eE } = (0, d.v5K)({
            colorStrings: z,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: ea,
        }),
        ed = (0, E.CR)(K + Y),
        eu = {
            className: s()(M.oF, et, { [eE]: eo, [M.IW]: "username" === Z && null != $ }),
            style: (() => {
                if (ee)
                    return eo && null != z
                        ? { ...e_, textDecorationColor: z?.primaryColor ?? void 0 }
                        : null != $
                          ? { color: $ }
                          : void 0;
            })(),
            onClick: b,
            onContextMenu: j,
            children: ec
                ? (0, l.jsx)(N.A, {
                      userName: ed,
                      displayNameStyles: Q,
                      effectDisplayType: ea ? I.G.ANIMATED : I.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != b,
                  })
                : ed,
            "data-text": K + Y,
            "data-username-has-gradient": !!es || void 0,
        },
        eA = r.useMemo(
            () =>
                y && !k
                    ? (0, l.jsx)(C.Ay, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: H,
                          className: M.s4,
                          badgeSize: U.Sl.SIZE_12,
                      })
                    : null,
            [y, t.primaryGuild, H, n.author.id, k],
        ),
        eT = a ?? n.author,
        eI =
            null != v && null != L
                ? (0, l.jsx)(m.A, {
                      targetElementRef: w,
                      user: eT,
                      renderPopout: v,
                      shouldShow: L,
                      shouldPreload: el,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != H
                              ? (0, P.s7)({ guildId: H, userId: eT.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: B,
                      clickTrap: L,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(d.DUT, {
                                      tag: "span",
                                      innerRef: w,
                                      ...n,
                                      ...eu,
                                      className: s()(eu.className, M.vk, G),
                                  }),
                                  eA,
                              ],
                          });
                      },
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(d.DUT, { ...eu, className: s()(eu.className, G) }), eA],
                  }),
        eN = null != q ? q[0] : null,
        eR = null != q ? q[1] : null;
    return (0, l.jsxs)(T.f5, {
        value: W,
        children: [
            null != eN && !x && y ? (0, l.jsxs)(l.Fragment, { children: [" ", eN, " "] }) : null,
            "dot" === Z
                ? (0, l.jsx)(d.WYI, { color: $, colors: es ? z : null, name: J, className: M.m4, hoverOverride: ea })
                : null,
            eI,
            !y &&
                !k &&
                (0, l.jsx)(C.Ay, {
                    primaryGuild: t.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: H,
                    className: M.s4,
                }),
            null != eR ? eR : null,
            null == eN || x || y ? null : eN,
        ],
    });
}
