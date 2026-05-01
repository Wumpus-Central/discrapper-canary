n.d(t, { d: () => v, o: () => N });
var i = n(627968),
    l = n(409626),
    s = n(692969),
    a = n(562153),
    r = n(510466);
n(64700);
var c = n(503698),
    o = n.n(c),
    u = n(342952),
    d = n(990078),
    g = n(778712),
    m = n(834730),
    f = n(939249),
    x = n(915089),
    I = n(499270);
function p(e) {
    let { label: t, className: n, size: l = g._3.SIZE_16, maxUsers: s = 4, ...a } = e,
        r = (0, x.GV)();
    return (0, i.jsxs)("div", {
        className: o()(n, I.k),
        children: [
            (0, i.jsx)(u.I, { "aria-labelledby": r, overflowCountClassName: I.j, size: l, maxUsers: s, ...a }),
            (0, i.jsx)(m.E, { variant: "text-xs/normal", color: "text-subtle", id: r, children: t }),
        ],
    });
}
function A(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: l,
        size: s = g._3.SIZE_16,
        maxUsers: a = 4,
        onClick: r,
        ...c
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(d.m, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(f.D, {
                onClick: r,
                "aria-label": t,
                children: (0, i.jsx)(u.I, {
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
var h = n(617086),
    E = n(375708),
    j = n(73934);
function N(e) {
    let { applicationId: t, ...n } = e,
        l = (0, h.A)(t),
        s = (0, r.S)("SocialProofWithLabel");
    return 0 === l.length || s
        ? null
        : (0, i.jsx)(p, {
              label: E.intl.formatToPlainString(E.t.ujhJdG, { numFriends: l.length }),
              users: l,
              maxUsers: 4,
              ...n,
          });
}
function v(e) {
    var t, n, c;
    let o,
        { userId: u, applicationId: d, guildId: g, channelId: m, className: f } = e,
        x = (0, h.A)(d),
        I = (0, r.S)("GameCoverSocialProofButton"),
        p =
            ((t = x),
            (n = g),
            (c = m),
            (o = t.slice(0, 3).map((e) => a.Ay.getName(n, c, e))),
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
        : (0, i.jsx)(A, {
              users: x,
              label: p,
              className: f,
              onClick: N,
              guildId: g,
              channelId: m,
              "aria-label": p,
              overflowCountColor: "text-strong",
              overflowCountClassName: j.L,
          });
}
