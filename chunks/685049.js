n.d(t, { d: () => g, o: () => u });
var i = n(627968),
    a = n(409626),
    l = n(692969),
    s = n(562153),
    r = n(415043),
    o = n(617086),
    c = n(985018),
    d = n(73934);
function u(e) {
    let { applicationId: t, ...n } = e,
        a = (0, o.A)(t);
    return a.length > 0
        ? (0, i.jsx)(r.A, {
              label: c.intl.formatToPlainString(c.t.ujhJdG, { numFriends: a.length }),
              users: a,
              maxUsers: 4,
              ...n,
          })
        : null;
}
function g(e) {
    var t, n, u;
    let g,
        { userId: m, applicationId: _, guildId: f, channelId: x, className: p } = e,
        I = (0, o.A)(_),
        A = I.length > 0,
        h =
            ((t = I),
            (n = f),
            (u = x),
            (g = t.slice(0, 3).map((e) => s.Ay.getName(n, u, e))),
            1 === t.length
                ? c.intl.formatToPlainString(c.t.FURqTU, { name: g[0] })
                : 2 === t.length
                  ? c.intl.formatToPlainString(c.t["08Usu/"], { name1: g[0], name2: g[1] })
                  : 3 === t.length
                    ? c.intl.formatToPlainString(c.t.NTYHag, { name1: g[0], name2: g[1], name3: g[2] })
                    : c.intl.formatToPlainString(c.t["i/5oAn"], {
                          name1: g[0],
                          name2: g[1],
                          name3: g[2],
                          numPeople: t.length - 3,
                      })),
        E = (0, l.A)({
            location: "SocialProofButton",
            applicationId: _,
            source: a.Ob.UserProfile,
            sourceUserId: m,
            trackEntryPointImpression: !0,
        });
    return A && null != E
        ? (0, i.jsx)(r.H, {
              users: I,
              label: h,
              className: p,
              onClick: E,
              guildId: f,
              channelId: x,
              "aria-label": h,
              overflowCountColor: "text-strong",
              overflowCountClassName: d.L,
          })
        : null;
}
