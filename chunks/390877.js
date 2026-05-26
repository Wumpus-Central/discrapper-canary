i.d(t, { d: () => v, o: () => N });
var n = i(627968),
    l = i(409626),
    s = i(692969),
    a = i(562153),
    r = i(510466);
i(64700);
var c = i(503698),
    o = i.n(c),
    u = i(342952),
    d = i(990078),
    m = i(778712),
    g = i(834730),
    f = i(939249),
    x = i(915089),
    I = i(556742);
function p(e) {
    let { label: t, className: i, size: l = m._3.SIZE_16, maxUsers: s = 4, ...a } = e,
        r = (0, x.GV)();
    return (0, n.jsxs)("div", {
        className: o()(i, I.k),
        children: [
            (0, n.jsx)(u.I, { "aria-labelledby": r, overflowCountClassName: I.j, size: l, maxUsers: s, ...a }),
            (0, n.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", id: r, children: t }),
        ],
    });
}
function h(e) {
    let {
        label: t,
        className: i,
        overflowCountClassName: l,
        size: s = m._3.SIZE_16,
        maxUsers: a = 4,
        onClick: r,
        ...c
    } = e;
    return (0, n.jsx)("div", {
        className: i,
        children: (0, n.jsx)(d.m, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, n.jsx)(f.D, {
                onClick: r,
                "aria-label": t,
                children: (0, n.jsx)(u.I, {
                    size: s,
                    maxUsers: a,
                    overflowCountClassName: o()(I.j, l),
                    "aria-hidden": !0,
                    ...c,
                }),
            }),
        }),
    });
}
var A = i(617086),
    E = i(375708),
    j = i(473486);
function N(e) {
    let { applicationId: t, ...i } = e,
        l = (0, A.A)(t),
        s = (0, r.S)("SocialProofWithLabel");
    return 0 === l.length || s
        ? null
        : (0, n.jsx)(p, {
              label: E.intl.formatToPlainString(E.t.ujhJdG, { numFriends: l.length }),
              users: l,
              maxUsers: 4,
              ...i,
          });
}
function v(e) {
    var t, i, c;
    let o,
        { userId: u, applicationId: d, guildId: m, channelId: g, className: f } = e,
        x = (0, A.A)(d),
        I = (0, r.S)("GameCoverSocialProofButton"),
        p =
            ((t = x),
            (i = m),
            (c = g),
            (o = t.slice(0, 3).map((e) => a.Ay.getName(i, c, e))),
            1 === t.length
                ? E.intl.formatToPlainString(E.t.FURqTU, { name: o[0] })
                : 2 === t.length
                  ? E.intl.formatToPlainString(E.t["08Usu/"], { name1: o[0], name2: o[1] })
                  : 3 === t.length
                    ? E.intl.formatToPlainString(E.t.NTYHag, { name1: o[0], name2: o[1], name3: o[2] })
                    : E.intl.formatToPlainString(E.t["i/5oAn"], {
                          name1: o[0],
                          name2: o[1],
                          name3: o[2],
                          numPeople: t.length - 3,
                      })),
        N = (0, s.A)({
            location: "SocialProofButton",
            applicationId: d,
            source: l.Ob.UserProfile,
            sourceUserId: u,
            trackEntryPointImpression: !0,
        });
    return 0 === x.length || I || null == N
        ? null
        : (0, n.jsx)(h, {
              users: x,
              label: p,
              className: f,
              onClick: N,
              guildId: m,
              channelId: g,
              "aria-label": p,
              overflowCountColor: "text-strong",
              overflowCountClassName: j.L,
          });
}
