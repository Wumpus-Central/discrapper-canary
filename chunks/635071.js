"use strict";
n.d(t, { A: () => D, w: () => O });
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
    p = n(688810),
    h = n(922301),
    m = n(750112),
    g = n(73392),
    E = n(386467),
    A = n(534400),
    I = n(176201),
    T = n(676608),
    y = n(342296),
    S = n(317525),
    v = n(486020),
    C = n(109054),
    b = n(560936),
    N = n(743981),
    R = n(679740),
    O = (function (e) {
        return (e[(e.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (e[(e.BADGES = 1)] = "BADGES"), e;
    })({});
function D(e) {
    let {
            author: t,
            message: n,
            channel: a,
            userOverride: O,
            compact: D = !1,
            withMentionPrefix: L = !1,
            showPopout: w = !1,
            hideGuildTag: x = !1,
            hideSystemTag: P = !1,
            className: M,
            onClick: k,
            onContextMenu: U,
            onPopoutRequestClose: G,
            renderPopout: V,
            decorations: F,
            previewGuildId: B,
            subscribeToGroupId: j,
        } = e,
        H = i.useRef(null),
        Y = i.useContext(E.A),
        W = a?.guild_id ?? Y,
        { analyticsLocations: K } = (0, p.Ay)(f.A.USERNAME),
        z = L ? "@" : "",
        { nick: $, colorString: q, colorStrings: Z, colorRoleName: Q, displayNameStyles: X } = t,
        J = (0, l.bG)([_.A], () => _.A.roleStyle),
        ee = "username" === J,
        et = "dot" === J,
        en = (0, g.a)({ displayNameStyles: X }),
        er = (0, l.bG)([S.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : S.A.getRole(t.guildId, t.colorRoleId),
        ),
        ei = (0, T.jV)(B ?? W, er),
        ea = (0, C.A)(n),
        es = i.useContext(u.C),
        eo = es?.animate || w,
        el = ei && (0, I.kz)(t),
        eu = ee && el,
        ec = a?.isPrivate() && null != X;
    (0, b.A)({ shouldSubscribe: ec || eu, subscribeToGroupId: j, authorId: n.author.id });
    let { gradientStyle: ed, gradientClassname: e_ } = (0, d.v5K)({
            colorStrings: Z,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: eo,
        }),
        ef = () => {
            if (ee)
                return eu && null != Z
                    ? { ...ed, textDecorationColor: Z?.primaryColor ?? void 0 }
                    : null != q
                      ? { color: q }
                      : void 0;
        },
        ep = (0, c.CR)(z + $),
        eh = {
            className: s()(R.oF, en, { [e_]: eu, [R.IW]: "username" === J && null != q }),
            style: ef(),
            onClick: k,
            onContextMenu: U,
            children: ec
                ? (0, r.jsx)(m.A, {
                      userName: ep,
                      displayNameStyles: X,
                      effectDisplayType: eo ? h.G.ANIMATED : h.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != k,
                  })
                : ep,
            "data-text": z + $,
            "data-username-has-gradient": !!el || void 0,
        },
        em = i.useMemo(
            () =>
                D && !x
                    ? (0, r.jsx)(A.Ay, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: W,
                          className: R.s4,
                          badgeSize: N.Sl.SIZE_12,
                      })
                    : null,
            [D, t.primaryGuild, W, n.author.id, x],
        ),
        eg = O ?? n.author,
        eE =
            null != V && null != w
                ? (0, r.jsx)(y.A, {
                      targetElementRef: H,
                      user: eg,
                      renderPopout: V,
                      shouldShow: w,
                      shouldPreload: ea,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != W
                              ? (0, v.s7)({ guildId: W, userId: eg.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: G,
                      clickTrap: w,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(d.DUT, {
                                      tag: "span",
                                      innerRef: H,
                                      ...n,
                                      ...eh,
                                      className: s()(eh.className, R.vk, M),
                                  }),
                                  em,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(d.DUT, { ...eh, className: s()(eh.className, M) }), em],
                  }),
        eA = null != F ? F[0] : null,
        eI = null != F ? F[1] : null;
    return (0, r.jsxs)(p.f5, {
        value: K,
        children: [
            null != eA && !P && D ? (0, r.jsxs)(r.Fragment, { children: [" ", eA, " "] }) : null,
            et
                ? (0, r.jsx)(d.WYI, { color: q, colors: el ? Z : null, name: Q, className: R.m4, hoverOverride: eo })
                : null,
            eE,
            !D &&
                !x &&
                (0, r.jsx)(A.Ay, {
                    primaryGuild: t.primaryGuild,
                    userId: n.author.id,
                    contextGuildId: W,
                    className: R.s4,
                }),
            null != eI ? eI : null,
            null == eA || P || D ? null : eA,
        ],
    });
}
