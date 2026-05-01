n.d(t, { d: () => N, o: () => j });
var i = n(627968),
    l = n(409626),
    s = n(692969),
    a = n(562153);
n(64700);
var r = n(503698),
    c = n.n(r),
    o = n(342952),
    u = n(990078),
    d = n(778712),
    g = n(834730),
    m = n(939249),
    f = n(915089),
    x = n(499270);
function p(e) {
    let { label: t, className: n, size: l = d._3.SIZE_16, maxUsers: s = 4, ...a } = e,
        r = (0, f.GV)();
    return (0, i.jsxs)("div", {
        className: c()(n, x.k),
        children: [
            (0, i.jsx)(o.I, { "aria-labelledby": r, overflowCountClassName: x.j, size: l, maxUsers: s, ...a }),
            (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", id: r, children: t }),
        ],
    });
}
function I(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: l,
        size: s = d._3.SIZE_16,
        maxUsers: a = 4,
        onClick: r,
        ...g
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(u.m, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(m.D, {
                onClick: r,
                "aria-label": t,
                children: (0, i.jsx)(o.I, {
                    size: s,
                    maxUsers: a,
                    overflowCountClassName: c()(x.j, l),
                    "aria-hidden": !0,
                    ...g,
                }),
            }),
        }),
    });
}
var A = n(617086),
    h = n(985018),
    E = n(73934);
function j(e) {
    let { applicationId: t, ...n } = e,
        l = (0, A.A)(t);
    return l.length > 0
        ? (0, i.jsx)(p, {
              label: h.intl.formatToPlainString(h.t.ujhJdG, { numFriends: l.length }),
              users: l,
              maxUsers: 4,
              ...n,
          })
        : null;
}
function N(e) {
    var t, n, r;
    let c,
        { userId: o, applicationId: u, guildId: d, channelId: g, className: m } = e,
        f = (0, A.A)(u),
        x = f.length > 0,
        p =
            ((t = f),
            (n = d),
            (r = g),
            (c = t.slice(0, 3).map((e) => a.Ay.getName(n, r, e))),
            1 === t.length
                ? h.intl.formatToPlainString(h.t.FURqTU, { name: c[0] })
                : 2 === t.length
                  ? h.intl.formatToPlainString(h.t["08Usu/"], { name1: c[0], name2: c[1] })
                  : 3 === t.length
                    ? h.intl.formatToPlainString(h.t.NTYHag, { name1: c[0], name2: c[1], name3: c[2] })
                    : h.intl.formatToPlainString(h.t["i/5oAn"], {
                          name1: c[0],
                          name2: c[1],
                          name3: c[2],
                          numPeople: t.length - 3,
                      })),
        j = (0, s.A)({
            location: "SocialProofButton",
            applicationId: u,
            source: l.Ob.UserProfile,
            sourceUserId: o,
            trackEntryPointImpression: !0,
        });
    return x && null != j
        ? (0, i.jsx)(I, {
              users: f,
              label: p,
              className: m,
              onClick: j,
              guildId: d,
              channelId: g,
              "aria-label": p,
              overflowCountColor: "text-strong",
              overflowCountClassName: E.L,
          })
        : null;
}
