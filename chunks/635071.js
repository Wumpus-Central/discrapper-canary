"use strict";
n.d(t, { A: () => L, w: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    u = n(473193),
    c = n(36075),
    d = n(397927),
    _ = n(775602),
    f = n(793574),
    h = n(688810),
    p = n(922301),
    g = n(750112),
    E = n(73392),
    A = n(386467),
    I = n(534400),
    T = n(176201),
    y = n(676608),
    S = n(342296),
    v = n(317525),
    C = n(486020),
    b = n(109054),
    N = n(560936),
    R = n(743981),
    O = n(679740),
    D = (function (e) {
        return (e[(e.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (e[(e.BADGES = 1)] = "BADGES"), e;
    })({});
function L(e) {
    let {
            author: t,
            message: n,
            channel: a,
            userOverride: D,
            compact: L = !1,
            withMentionPrefix: w = !1,
            showPopout: x = !1,
            hideGuildTag: P = !1,
            hideSystemTag: M = !1,
            className: k,
            onClick: U,
            onContextMenu: G,
            onPopoutRequestClose: F,
            renderPopout: V,
            decorations: B,
            previewGuildId: j,
            subscribeToGroupId: H,
        } = e,
        Y = i.useRef(null),
        W = i.useContext(A.A),
        K = a?.guild_id ?? W,
        { analyticsLocations: $ } = (0, h.Ay)(f.A.USERNAME),
        z = w ? "@" : "",
        { nick: q, colorString: X, colorStrings: Z, colorRoleName: Q, displayNameStyles: J } = t,
        ee = (0, l.bG)([_.A], () => _.A.roleStyle),
        et = "username" === ee,
        en = "dot" === ee,
        er = (0, E.a)({ displayNameStyles: J }),
        ei = (0, l.bG)([v.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : v.A.getRole(t.guildId, t.colorRoleId),
        ),
        ea = (0, y.jV)(j ?? K, ei),
        es = (0, b.A)(n),
        eo = i.useContext(u.C),
        el = eo?.animate || x,
        eu = ea && (0, T.kz)(t),
        ec = et && eu,
        ed = a?.isPrivate() && null != J;
    (0, N.A)({ shouldSubscribe: ed || ec, subscribeToGroupId: H, authorId: n.author.id });
    let { gradientStyle: e_, gradientClassname: ef } = (0, d.v5K)({
            colorStrings: Z,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: el,
        }),
        eh = () => {
            if (et)
                return ec && null != Z
                    ? { ...e_, textDecorationColor: Z?.primaryColor ?? void 0 }
                    : null != X
                      ? { color: X }
                      : void 0;
        },
        ep = (0, c.CR)(z + q),
        em = {
            className: s()(O.oF, er, { [ef]: ec, [O.IW]: "username" === ee && null != X }),
            style: eh(),
            onClick: U,
            onContextMenu: G,
            children: ed
                ? (0, r.jsx)(g.A, {
                      userName: ep,
                      displayNameStyles: J,
                      effectDisplayType: el ? p.G.ANIMATED : p.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != U,
                  })
                : ep,
            "data-text": z + q,
            "data-username-has-gradient": !!eu || void 0,
        },
        eg = i.useMemo(
            () =>
                L && !P
                    ? (0, r.jsx)(I.Ay, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: K,
                          className: O.s4,
                          badgeSize: R.Sl.SIZE_12,
                      })
                    : null,
            [L, t.primaryGuild, K, n.author.id, P],
        ),
        eE = D ?? n.author,
        eA =
            null != V && null != x
                ? (0, r.jsx)(S.A, {
                      targetElementRef: Y,
                      user: eE,
                      renderPopout: V,
                      shouldShow: x,
                      shouldPreload: es,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != K
                              ? (0, C.s7)({ guildId: K, userId: eE.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: F,
                      clickTrap: x,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(d.DUT, {
                                      tag: "span",
                                      innerRef: Y,
                                      ...n,
                                      ...em,
                                      className: s()(em.className, O.vk, k),
                                  }),
                                  eg,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.DUT, { ...em, className: s()(em.className, k) }), eg],
                  }),
        eI = null != B ? B[0] : null,
        eT = null != B ? B[1] : null;
    return (0, r.jsxs)(h.f5, {
        value: $,
        children: [
            null != eI && !M && L ? (0, r.jsxs)(r.Fragment, { children: [" ", eI, " "] }) : null,
            en
                ? (0, r.jsx)(d.WYI, { color: X, colors: eu ? Z : null, name: Q, className: O.m4, hoverOverride: el })
                : null,
            eA,
            !L &&
                !P &&
                (0, r.jsx)(I.Ay, {
                    primaryGuild: t.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: K,
                    className: O.s4,
                }),
            null != eT ? eT : null,
            null == eI || M || L ? null : eI,
        ],
    });
}
