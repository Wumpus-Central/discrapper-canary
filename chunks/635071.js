n.d(t, { A: () => U, w: () => D });
var i,
    l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    c = n(311907),
    d = n(473193),
    u = n(36075),
    _ = n(397927),
    E = n(775602),
    T = n(793574),
    A = n(688810),
    I = n(922301),
    p = n(750112),
    N = n(73392),
    m = n(386467),
    R = n(534400),
    h = n(176201),
    S = n(676608),
    g = n(342296),
    C = n(317525),
    O = n(486020),
    y = n(109054),
    x = n(560936),
    f = n(743981),
    P = n(767283),
    D = (((i = {})[(i.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (i[(i.BADGES = 1)] = "BADGES"), i);
function U(e) {
    let {
            author: t,
            message: n,
            channel: i,
            userOverride: s,
            compact: D = !1,
            withMentionPrefix: U = !1,
            showPopout: M = !1,
            hideGuildTag: L = !1,
            hideSystemTag: j = !1,
            className: b,
            onClick: v,
            onContextMenu: k,
            onPopoutRequestClose: G,
            renderPopout: B,
            decorations: w,
            previewGuildId: H,
            subscribeToGroupId: F,
        } = e,
        V = r.useRef(null),
        $ = r.useContext(m.A),
        W = i?.guild_id ?? $,
        { analyticsLocations: q } = (0, A.Ay)(T.A.USERNAME),
        X = U ? "@" : "",
        { nick: K, colorString: z, colorStrings: J, colorRoleName: Y, displayNameStyles: Q } = t,
        Z = (0, c.bG)([E.A], () => E.A.roleStyle),
        ee = "username" === Z,
        et = (0, N.a)({ displayNameStyles: Q }),
        en = (0, c.bG)([C.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : C.A.getRole(t.guildId, t.colorRoleId),
        ),
        ei = (0, S.jV)(H ?? W, en),
        el = (0, y.A)(n),
        er = r.useContext(d.C),
        es = er?.animate || M,
        ea = ei && (0, h.kz)(t),
        eo = ee && ea,
        ec = i?.isPrivate() && null != Q;
    (0, x.A)({ shouldSubscribe: ec || eo, subscribeToGroupId: F, authorId: n.author.id });
    let { gradientStyle: ed, gradientClassname: eu } = (0, _.v5K)({
            colorStrings: J,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: es,
        }),
        e_ = (0, u.CR)(X + K),
        eE = {
            className: a()(P.oF, et, { [eu]: eo, [P.IW]: "username" === Z && null != z }),
            style: (() => {
                if (ee)
                    return eo && null != J
                        ? { ...ed, textDecorationColor: J?.primaryColor ?? void 0 }
                        : null != z
                          ? { color: z }
                          : void 0;
            })(),
            onClick: v,
            onContextMenu: k,
            children: ec
                ? (0, l.jsx)(p.A, {
                      userName: e_,
                      displayNameStyles: Q,
                      effectDisplayType: es ? I.G.ANIMATED : I.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != v,
                      textClassName: P.Mu,
                  })
                : e_,
            "data-text": X + K,
            "data-username-has-gradient": !!ea || void 0,
        },
        eT = r.useMemo(
            () =>
                L
                    ? null
                    : (0, l.jsx)(R.Cw, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: W,
                          className: P.s4,
                          badgeSize: D ? f.Sl.SIZE_12 : void 0,
                      }),
            [D, t.primaryGuild, W, n.author.id, L],
        ),
        eA = s ?? n.author,
        eI =
            null != B && null != M
                ? (0, l.jsx)(g.A, {
                      targetElementRef: V,
                      user: eA,
                      guildId: W,
                      channelId: n.channel_id,
                      renderPopout: B,
                      shouldShow: M,
                      shouldPreload: el,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != W
                              ? (0, O.s7)({ guildId: W, userId: eA.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: G,
                      clickTrap: M,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(_.DUT, {
                                      tag: "span",
                                      innerRef: V,
                                      ...n,
                                      ...eE,
                                      className: a()(eE.className, P.vk, b),
                                  }),
                                  eT,
                              ],
                          });
                      },
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(_.DUT, { ...eE, className: a()(eE.className, b) }), eT],
                  }),
        ep = null != w ? w[0] : null,
        eN = null != w ? w[1] : null;
    return (0, l.jsxs)(A.f5, {
        value: q,
        children: [
            null != ep && !j && D ? (0, l.jsxs)(l.Fragment, { children: [" ", ep, " "] }) : null,
            "dot" === Z
                ? (0, l.jsx)(_.WYI, { color: z, colors: ea ? J : null, name: Y, className: P.m4, hoverOverride: es })
                : null,
            eI,
            null != eN ? eN : null,
            null == ep || j || D ? null : ep,
        ],
    });
}
