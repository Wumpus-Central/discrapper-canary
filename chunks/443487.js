n.d(t, {
    F9: () => v,
    Zb: () => b,
    cA: () => E,
    e$: () => y,
    lS: () => T,
    ll: () => I,
    xx: () => S,
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
    _ = n(594174),
    p = n(5192),
    h = n(192918),
    m = n(388032),
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
        b = (0, o.e7)([_.default], () => _.default.getUser(E)),
        { displayParticipants: y, participant1: v, participant2: I, numOtherParticipants: T } = (0, h.Z)(a, l),
        S = (0, o.e7)([d.ZP], () => d.ZP.getMember(n, E)),
        A = (0, c.j)({ displayNameStyles: null == b ? void 0 : b.displayNameStyles }),
        C = (0, o.e7)([f.Z], () => {
            var e;
            return (null == S ? void 0 : S.colorRoleId) != null
                ? null == (e = f.Z.getRole(n, S.colorRoleId))
                    ? void 0
                    : e.name
                : void 0;
        }, [n, S]),
        N = (0, u.X7)(n, E, null != (t = null == S ? void 0 : S.colorStrings) ? t : null);
    if (null == b) return null;
    let R = null == S ? void 0 : S.colorString,
        P = p.ZP.getName(n, i, b);
    return (0, r.jsxs)("div", {
        className: g.userSection,
        children: [
            (0, r.jsx)(O, {
                users: y,
                guildId: n,
                "aria-hidden": !0,
            }),
            (0, r.jsx)(s.PUh, {
                colorString: null != R ? R : null,
                roleName: C,
                colorStrings: N,
                name: P,
                className: g.userName,
                displayNameStylesFont: A,
                "aria-hidden": !0,
            }),
            T > 0
                ? (0, r.jsx)("div", {
                      className: g.additionalParticipantBadge,
                      "aria-hidden": !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: g.additionalParticipantBadgeText,
                          children: ["+", T],
                      }),
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: m.intl.format(m.t.rH95Gu, {
                    user0: p.ZP.getName(n, i, v),
                    user1: p.ZP.getName(n, i, I),
                    countOthers: T,
                    name0Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: g.contentTitle,
        lineClamp: 1,
        children: t,
    });
}
function T(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(g.cardRow, n),
        children: t,
    });
}
function S() {
    return (0, r.jsx)("div", { className: g.divider });
}
