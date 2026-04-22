"use strict";
n.d(t, { A: () => M, w: () => O });
var i,
    a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(607399),
    c = n(311907),
    u = n(473193),
    d = n(36075),
    _ = n(939249),
    p = n(545442),
    m = n(775602),
    A = n(793574),
    h = n(688810),
    f = n(922301),
    g = n(750112),
    E = n(73392),
    I = n(386467),
    v = n(534400),
    T = n(176201),
    S = n(676608),
    C = n(342296),
    b = n(317525),
    x = n(486020),
    y = n(109054),
    R = n(560936),
    N = n(743981),
    L = n(334211),
    O = (((i = {})[(i.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (i[(i.BADGES = 1)] = "BADGES"), i);
function M(e) {
    let {
            author: t,
            message: n,
            channel: i,
            userOverride: l,
            compact: O = !1,
            withMentionPrefix: M = !1,
            showPopout: w = !1,
            hideGuildTag: D = !1,
            hideSystemTag: P = !1,
            className: j,
            onClick: F,
            onContextMenu: U,
            onPopoutRequestClose: k,
            renderPopout: G,
            decorations: V,
            previewGuildId: B,
            subscribeToGroupId: H,
        } = e,
        W = r.useRef(null),
        Z = r.useContext(I.A),
        $ = i?.guild_id ?? Z,
        { analyticsLocations: z } = (0, h.Ay)(A.A.USERNAME),
        J = M ? "@" : "",
        { nick: Y, colorString: K, colorStrings: X, colorRoleName: q, displayNameStyles: Q } = t,
        ee = (0, c.bG)([m.A], () => m.A.roleStyle),
        et = "username" === ee,
        en = (0, E.a)({ displayNameStyles: Q }),
        ei = (0, c.bG)([b.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : b.A.getRole(t.guildId, t.colorRoleId),
        ),
        ea = (0, S.jV)(B ?? $, ei),
        er = (0, y.A)(n),
        el = r.useContext(u.C),
        es = el?.animate || w,
        eo = ea && (0, T.kz)(t),
        ec = et && eo,
        eu = i?.isPrivate() && null != Q;
    (0, R.A)({ shouldSubscribe: eu || ec, subscribeToGroupId: H, authorId: n.author.id });
    let { gradientStyle: ed, gradientClassname: e_ } = (0, d.v5)({
            colorStrings: X,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: es,
        }),
        ep = (0, d.CR)(J + Y),
        em = {
            className: s()(L.oF, en, { [e_]: ec, [L.IW]: "username" === ee && null != K }),
            style: (() => {
                if (et)
                    return ec && null != X
                        ? { ...ed, textDecorationColor: X?.primaryColor ?? void 0 }
                        : null != K
                          ? { color: K }
                          : void 0;
            })(),
            onClick: F,
            onContextMenu: U,
            children: eu
                ? (0, a.jsx)(g.A, {
                      userName: ep,
                      displayNameStyles: Q,
                      effectDisplayType: es ? f.G.ANIMATED : f.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != F,
                      textClassName: L.Mu,
                  })
                : ep,
            "data-text": J + Y,
            "data-username-has-gradient": !!eo || void 0,
        },
        eA = r.useMemo(
            () =>
                D
                    ? null
                    : (0, a.jsx)(v.Cw, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: $,
                          className: L.s4,
                          badgeSize: O ? N.Sl.SIZE_12 : void 0,
                      }),
            [O, t.primaryGuild, $, n.author.id, D],
        ),
        eh = l ?? n.author,
        ef =
            null != G && null != w
                ? (0, a.jsx)(C.A, {
                      targetElementRef: W,
                      user: eh,
                      guildId: $,
                      channelId: n.channel_id,
                      renderPopout: G,
                      shouldShow: w,
                      shouldPreload: er,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != $
                              ? (0, x.s7)({ guildId: $, userId: eh.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: k,
                      clickTrap: w,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(_.D, {
                                      tag: "span",
                                      innerRef: W,
                                      ...n,
                                      ...em,
                                      className: s()(em.className, L.vk, j),
                                  }),
                                  eA,
                              ],
                          });
                      },
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)(_.D, { ...em, className: s()(em.className, j) }), eA],
                  }),
        eg = null != V ? V[0] : null,
        eE = null != V ? V[1] : null;
    return (0, a.jsxs)(h.f5, {
        value: z,
        children: [
            null != eg && !P && O ? (0, a.jsxs)(a.Fragment, { children: [" ", eg, " "] }) : null,
            "dot" === ee
                ? (0, a.jsx)(p.W, { color: K, colors: eo ? X : null, name: q, className: L.m4, hoverOverride: es })
                : null,
            ef,
            null != eE ? eE : null,
            null == eg || P || O ? null : eg,
        ],
    });
}
