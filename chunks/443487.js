n.d(t, {
    F9: () => v,
    Zb: () => b,
    cA: () => E,
    e$: () => y,
    lS: () => I,
    ll: () => S,
    xx: () => T,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(7284),
    u = n(884902),
    d = n(271383),
    f = n(485386),
    p = n(594174),
    _ = n(5192),
    m = n(192918),
    h = n(388032),
    g = n(451419);
function E() {
    return (0, r.jsx)("div", {
        className: g.container,
        "aria-hidden": !0,
    });
}
function b(e) {
    let { children: t, selected: n, className: i, usesCardRows: o = !1 } = e;
    return (0, r.jsx)("div", {
        className: a()(
            g.container,
            g.openOnHover,
            {
                [g.selected]: n,
                [g.usesCardRows]: o,
            },
            i,
        ),
        children: t,
    });
}
function y(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: g.infoSection,
        children: t,
    });
}
function O(e) {
    let { users: t, guildId: n, "aria-hidden": i } = e;
    return (0, r.jsx)("div", {
        className: g.facePile,
        children: t.map((e, a) => {
            let o = (0, r.jsx)(s.qEK, {
                src: e.getAvatarURL(n, 80),
                size: s.EFr.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i,
            });
            return a === t.length - 1
                ? (0, r.jsx)(
                      "div",
                      {
                          className: g.facePileItem,
                          children: o,
                      },
                      e.id,
                  )
                : (0, r.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: g.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: o,
                      },
                      e.id,
                  );
        }),
    });
}
function v(e) {
    var t;
    let { guildId: n, channelId: i, entry: a, maxAvatars: l = 3 } = e,
        E = a.author_id,
        b = (0, o.e7)([p.default], () => p.default.getUser(E)),
        { displayParticipants: y, participant1: v, participant2: S, numOtherParticipants: I } = (0, m.Z)(a, l),
        T = (0, o.e7)([d.ZP], () => d.ZP.getMember(n, E)),
        C = (0, c.j)({ displayNameStyles: null == b ? void 0 : b.displayNameStyles }),
        A = (0, o.e7)([f.Z], () => {
            var e;
            return (null == T ? void 0 : T.colorRoleId) != null
                ? null == (e = f.Z.getRole(n, T.colorRoleId))
                    ? void 0
                    : e.name
                : void 0;
        }, [n, T]),
        N = (0, u.X7)(n, E, null != (t = null == T ? void 0 : T.colorStrings) ? t : null);
    if (null == b) return null;
    let P = null == T ? void 0 : T.colorString,
        R = _.ZP.getName(n, i, b);
    return (0, r.jsxs)("div", {
        className: g.userSection,
        children: [
            (0, r.jsx)(O, {
                users: y,
                guildId: n,
                "aria-hidden": !0,
            }),
            (0, r.jsx)(s.PUh, {
                colorString: null != P ? P : null,
                roleName: A,
                colorStrings: N,
                name: R,
                className: g.userName,
                displayNameStylesFont: C,
                "aria-hidden": !0,
            }),
            I > 0
                ? (0, r.jsx)("div", {
                      className: g.additionalParticipantBadge,
                      "aria-hidden": !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: g.additionalParticipantBadgeText,
                          children: ["+", I],
                      }),
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: h.intl.format(h.t.rH95Gu, {
                    user0: _.ZP.getName(n, i, v),
                    user1: _.ZP.getName(n, i, S),
                    countOthers: I,
                    name0Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: g.contentTitle,
        lineClamp: 1,
        children: t,
    });
}
function I(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(g.cardRow, n),
        children: t,
    });
}
function T() {
    return (0, r.jsx)("div", { className: g.divider });
}
