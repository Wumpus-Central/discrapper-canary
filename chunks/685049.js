n.d(t, { d: () => m, o: () => u });
var i = n(627968),
    a = n(409626),
    l = n(692969),
    s = n(562153),
    r = n(415043),
    o = n(617086),
    c = n(985018),
    d = n(638398);
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
function m(e) {
    var t, n, u;
    let m,
        { userId: g, applicationId: p, guildId: x, channelId: f, className: _ } = e,
        h = (0, o.A)(p),
        A = h.length > 0,
        I =
            ((t = h),
            (n = x),
            (u = f),
            (m = t.slice(0, 3).map((e) => s.Ay.getName(n, u, e))),
            1 === t.length
                ? c.intl.formatToPlainString(c.t.FURqTU, { name: m[0] })
                : 2 === t.length
                  ? c.intl.formatToPlainString(c.t["08Usu/"], { name1: m[0], name2: m[1] })
                  : 3 === t.length
                    ? c.intl.formatToPlainString(c.t.NTYHag, { name1: m[0], name2: m[1], name3: m[2] })
                    : c.intl.formatToPlainString(c.t["i/5oAn"], {
                          name1: m[0],
                          name2: m[1],
                          name3: m[2],
                          numPeople: t.length - 3,
                      })),
        v = (0, l.A)({
            location: "SocialProofButton",
            applicationId: p,
            source: a.Ob.UserProfile,
            sourceUserId: g,
            trackEntryPointImpression: !0,
        });
    return A && null != v
        ? (0, i.jsx)(r.H, {
              users: h,
              label: I,
              className: _,
              onClick: v,
              guildId: x,
              channelId: f,
              "aria-label": I,
              overflowCountColor: "text-strong",
              overflowCountClassName: d.L,
          })
        : null;
}
