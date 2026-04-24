"use strict";
n.d(t, { A: () => w, w: () => L });
var a,
    r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(607399),
    c = n(17928),
    d = n(473193),
    u = n(36075),
    _ = n(939249),
    p = n(545442),
    m = n(775602),
    h = n(793574),
    f = n(688810),
    g = n(922301),
    b = n(368919),
    v = n(73392),
    A = n(386467),
    x = n(534400),
    E = n(176201),
    T = n(676608),
    S = n(342296),
    C = n(317525),
    I = n(486020),
    y = n(109054),
    N = n(560936),
    R = n(743981),
    j = n(334211),
    L = (((a = {})[(a.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (a[(a.BADGES = 1)] = "BADGES"), a);
function w(e) {
    let {
            author: t,
            message: n,
            channel: a,
            userOverride: l,
            compact: L = !1,
            withMentionPrefix: w = !1,
            showPopout: O = !1,
            hideGuildTag: D = !1,
            hideSystemTag: M = !1,
            className: P,
            onClick: k,
            onContextMenu: U,
            onPopoutRequestClose: G,
            renderPopout: H,
            decorations: F,
            previewGuildId: B,
            subscribeToGroupId: V,
        } = e,
        W = i.useRef(null),
        z = i.useContext(A.A),
        Z = a?.guild_id ?? z,
        { analyticsLocations: Y } = (0, f.Ay)(h.A.USERNAME),
        $ = w ? "@" : "",
        { nick: K, colorString: q, colorStrings: J, colorRoleName: X, displayNameStyles: Q } = t,
        ee = (0, c.bG)([m.A], () => m.A.roleStyle),
        et = "username" === ee,
        en = (0, v.a)({ displayNameStyles: Q }),
        ea = (0, c.bG)([C.A], () =>
            null == t.guildId || null == t.colorRoleId ? null : C.A.getRole(t.guildId, t.colorRoleId),
        ),
        er = (0, T.jV)(B ?? Z, ea),
        ei = (0, y.A)(n),
        el = i.useContext(d.C),
        es = el?.animate || O,
        eo = er && (0, E.kz)(t),
        ec = et && eo,
        ed = a?.isPrivate() && null != Q;
    (0, N.A)({ shouldSubscribe: ed || ec, subscribeToGroupId: V, authorId: n.author.id });
    let { gradientStyle: eu, gradientClassname: e_ } = (0, u.v5)({
            colorStrings: J,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: es,
        }),
        ep = (0, u.CR)($ + K),
        em = {
            className: s()(j.oF, en, { [e_]: ec, [j.IW]: "username" === ee && null != q }),
            style: (() => {
                if (et)
                    return ec && null != J
                        ? { ...eu, textDecorationColor: J?.primaryColor ?? void 0 }
                        : null != q
                          ? { color: q }
                          : void 0;
            })(),
            onClick: k,
            onContextMenu: U,
            children: ed
                ? (0, r.jsx)(b.A, {
                      userName: ep,
                      displayNameStyles: Q,
                      effectDisplayType: es ? g.G.ANIMATED : g.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != k,
                      textClassName: j.Mu,
                  })
                : ep,
            "data-text": $ + K,
            "data-username-has-gradient": !!eo || void 0,
        },
        eh = i.useMemo(
            () =>
                D
                    ? null
                    : (0, r.jsx)(x.Cw, {
                          primaryGuild: t.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: Z,
                          className: j.s4,
                          badgeSize: L ? R.Sl.SIZE_12 : void 0,
                      }),
            [L, t.primaryGuild, Z, n.author.id, D],
        ),
        ef = l ?? n.author,
        eg =
            null != H && null != O
                ? (0, r.jsx)(S.A, {
                      targetElementRef: W,
                      user: ef,
                      guildId: Z,
                      channelId: n.channel_id,
                      renderPopout: H,
                      shouldShow: O,
                      shouldPreload: ei,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != t.guildMemberAvatar && null != Z
                              ? (0, I.s7)({ guildId: Z, userId: ef.id, avatar: t.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: G,
                      clickTrap: O,
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(_.D, {
                                      tag: "span",
                                      innerRef: W,
                                      ...n,
                                      ...em,
                                      className: s()(em.className, j.vk, P),
                                  }),
                                  eh,
                              ],
                          });
                      },
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(_.D, { ...em, className: s()(em.className, P) }), eh],
                  }),
        eb = null != F ? F[0] : null,
        ev = null != F ? F[1] : null;
    return (0, r.jsxs)(f.f5, {
        value: Y,
        children: [
            null != eb && !M && L ? (0, r.jsxs)(r.Fragment, { children: [" ", eb, " "] }) : null,
            "dot" === ee
                ? (0, r.jsx)(p.W, { color: q, colors: eo ? J : null, name: X, className: j.m4, hoverOverride: es })
                : null,
            eg,
            null != ev ? ev : null,
            null == eb || M || L ? null : eb,
        ],
    });
}
