n.d(t, { A: () => R, w: () => M });
var a,
    i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(607399),
    c = n(17928),
    d = n(473193),
    u = n(36075),
    m = n(939249),
    _ = n(545442),
    h = n(775602),
    p = n(793574),
    g = n(688810),
    f = n(922301),
    A = n(368919),
    b = n(73392),
    T = n(386467),
    I = n(534400),
    E = n(176201),
    C = n(676608),
    S = n(342296),
    y = n(317525),
    x = n(486020),
    v = n(109054),
    O = n(560936),
    N = n(743981),
    w = n(334211),
    M = (((a = {})[(a.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (a[(a.BADGES = 1)] = "BADGES"), a);
function R(e) {
    let {
            author: t,
            message: n,
            channel: a,
            userOverride: r,
            compact: M = !1,
            withMentionPrefix: R = !1,
            showPopout: L = !1,
            hideGuildTag: j = !1,
            hideSystemTag: k = !1,
            className: D,
            onClick: F,
            onContextMenu: P,
            onPopoutRequestClose: G,
            renderPopout: U,
            decorations: H,
            previewGuildId: B,
            subscribeToGroupId: V,
        } = e,
        z = l.useRef(null),
        $ = l.useContext(T.A),
        W = a?.guild_id ?? $,
        { analyticsLocations: J } = (0, g.Ay)(p.A.USERNAME),
        Z = R ? "@" : "",
        { nick: X, colorString: K, colorStrings: Q, colorRoleName: q, displayNameStyles: Y } = t,
        ee = (0, c.bG)([h.A], () => h.A.roleStyle),
        et = "username" === ee,
        en = (0, b.a)({ displayNameStyles: Y }),
        ea = (0, c.bG)([y.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : y.A.getRole(t.guildId, t.colorRoleId),
        ),
        ei = (0, C.jV)(B ?? W, ea),
        el = (0, v.A)(n),
        er = l.useContext(d.C),
        es = er?.animate || L,
        eo = ei && (0, E.kz)(t),
        ec = et && eo,
        ed = a?.isPrivate() && null != Y;
    (0, O.A)({ shouldSubscribe: ed || ec, subscribeToGroupId: V, authorId: n.author.id });
    let { gradientStyle: eu, gradientClassname: em } = (0, u.v5)({
            colorStrings: Q,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: es,
        }),
        e_ = (0, u.CR)(Z + X),
        eh = {
            className: s()(w.oF, en, { [em]: ec, [w.IW]: "username" === ee && null != K }),
            style: (() => {
                if (et)
                    return ec && null != Q
                        ? { ...eu, textDecorationColor: Q?.primaryColor ?? void 0 }
                        : null != K
                          ? { color: K }
                          : void 0;
            })(),
            onClick: F,
            onContextMenu: P,
            children: ed
                ? (0, i.jsx)(A.A, {
                      userName: e_,
                      displayNameStyles: Y,
                      effectDisplayType: es ? f.G.ANIMATED : f.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != F,
                      textClassName: w.Mu,
                  })
                : e_,
            "data-text": Z + X,
            "data-username-has-gradient": !!eo || void 0,
        },
        ep = l.useMemo(
            () =>
                j
                    ? null
                    : (0, i.jsx)(I.Cw, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: W,
                          className: w.s4,
                          badgeSize: M ? N.Sl.SIZE_12 : void 0,
                      }),
            [M, t.primaryGuild, W, n.author.id, j],
        ),
        eg = r ?? n.author,
        ef =
            null != U && null != L
                ? (0, i.jsx)(S.A, {
                      targetElementRef: z,
                      user: eg,
                      guildId: W,
                      channelId: n.channel_id,
                      renderPopout: U,
                      shouldShow: L,
                      shouldPreload: el,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != W
                              ? (0, x.s7)({ guildId: W, userId: eg.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: G,
                      clickTrap: L,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(m.D, {
                                      tag: "span",
                                      innerRef: z,
                                      ...n,
                                      ...eh,
                                      className: s()(eh.className, w.vk, D),
                                  }),
                                  ep,
                              ],
                          });
                      },
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(m.D, { ...eh, className: s()(eh.className, D) }), ep],
                  }),
        eA = null != H ? H[0] : null,
        eb = null != H ? H[1] : null;
    return (0, i.jsxs)(g.f5, {
        value: J,
        children: [
            null != eA && !k && M ? (0, i.jsxs)(i.Fragment, { children: [" ", eA, " "] }) : null,
            "dot" === ee
                ? (0, i.jsx)(_.W, { color: K, colors: eo ? Q : null, name: q, className: w.m4, hoverOverride: es })
                : null,
            ef,
            null != eb ? eb : null,
            null == eA || k || M ? null : eA,
        ],
    });
}
