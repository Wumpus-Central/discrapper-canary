"use strict";
n.d(t, { A: () => w, w: () => M });
var l,
    a = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    o = n(607399),
    c = n(311907),
    u = n(473193),
    d = n(36075),
    m = n(939249),
    g = n(545442),
    h = n(775602),
    p = n(793574),
    A = n(688810),
    _ = n(922301),
    f = n(750112),
    v = n(73392),
    x = n(386467),
    C = n(534400),
    I = n(176201),
    N = n(676608),
    E = n(342296),
    b = n(317525),
    T = n(486020),
    S = n(109054),
    y = n(560936),
    j = n(743981),
    R = n(334211),
    M = (((l = {})[(l.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (l[(l.BADGES = 1)] = "BADGES"), l);
function w(e) {
    let {
            author: t,
            message: n,
            channel: l,
            userOverride: i,
            compact: M = !1,
            withMentionPrefix: w = !1,
            showPopout: O = !1,
            hideGuildTag: D = !1,
            hideSystemTag: L = !1,
            className: k,
            onClick: G,
            onContextMenu: U,
            onPopoutRequestClose: P,
            renderPopout: V,
            decorations: F,
            previewGuildId: H,
            subscribeToGroupId: B,
        } = e,
        $ = s.useRef(null),
        z = s.useContext(x.A),
        K = l?.guild_id ?? z,
        { analyticsLocations: W } = (0, A.Ay)(p.A.USERNAME),
        J = w ? "@" : "",
        { nick: Y, colorString: q, colorStrings: Z, colorRoleName: X, displayNameStyles: Q } = t,
        ee = (0, c.bG)([h.A], () => h.A.roleStyle),
        et = "username" === ee,
        en = (0, v.a)({ displayNameStyles: Q }),
        el = (0, c.bG)([b.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : b.A.getRole(t.guildId, t.colorRoleId),
        ),
        ea = (0, N.jV)(H ?? K, el),
        es = (0, S.A)(n),
        ei = s.useContext(u.C),
        er = ei?.animate || O,
        eo = ea && (0, I.kz)(t),
        ec = et && eo,
        eu = l?.isPrivate() && null != Q;
    (0, y.A)({ shouldSubscribe: eu || ec, subscribeToGroupId: B, authorId: n.author.id });
    let { gradientStyle: ed, gradientClassname: em } = (0, d.v5)({
            colorStrings: Z,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: er,
        }),
        eg = (0, d.CR)(J + Y),
        eh = {
            className: r()(R.oF, en, { [em]: ec, [R.IW]: "username" === ee && null != q }),
            style: (() => {
                if (et)
                    return ec && null != Z
                        ? { ...ed, textDecorationColor: Z?.primaryColor ?? void 0 }
                        : null != q
                          ? { color: q }
                          : void 0;
            })(),
            onClick: G,
            onContextMenu: U,
            children: eu
                ? (0, a.jsx)(f.A, {
                      userName: eg,
                      displayNameStyles: Q,
                      effectDisplayType: er ? _.G.ANIMATED : _.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != G,
                      textClassName: R.Mu,
                  })
                : eg,
            "data-text": J + Y,
            "data-username-has-gradient": !!eo || void 0,
        },
        ep = s.useMemo(
            () =>
                D
                    ? null
                    : (0, a.jsx)(C.Cw, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: K,
                          className: R.s4,
                          badgeSize: M ? j.Sl.SIZE_12 : void 0,
                      }),
            [M, t.primaryGuild, K, n.author.id, D],
        ),
        eA = i ?? n.author,
        e_ =
            null != V && null != O
                ? (0, a.jsx)(E.A, {
                      targetElementRef: $,
                      user: eA,
                      guildId: K,
                      channelId: n.channel_id,
                      renderPopout: V,
                      shouldShow: O,
                      shouldPreload: es,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != K
                              ? (0, T.s7)({ guildId: K, userId: eA.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: P,
                      clickTrap: O,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.D, {
                                      tag: "span",
                                      innerRef: $,
                                      ...n,
                                      ...eh,
                                      className: r()(eh.className, R.vk, k),
                                  }),
                                  ep,
                              ],
                          });
                      },
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)(m.D, { ...eh, className: r()(eh.className, k) }), ep],
                  }),
        ef = null != F ? F[0] : null,
        ev = null != F ? F[1] : null;
    return (0, a.jsxs)(A.f5, {
        value: W,
        children: [
            null != ef && !L && M ? (0, a.jsxs)(a.Fragment, { children: [" ", ef, " "] }) : null,
            "dot" === ee
                ? (0, a.jsx)(g.W, { color: q, colors: eo ? Z : null, name: X, className: R.m4, hoverOverride: er })
                : null,
            e_,
            null != ev ? ev : null,
            null == ef || L || M ? null : ef,
        ],
    });
}
