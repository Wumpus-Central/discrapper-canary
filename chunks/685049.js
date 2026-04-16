n.d(t, { d: () => A, o: () => u });
var i = n(627968),
    l = n(409626),
    a = n(692969),
    r = n(562153),
    s = n(415043),
    o = n(617086),
    d = n(985018),
    c = n(73934);
function u(e) {
    let { applicationId: t, ...n } = e,
        l = (0, o.A)(t);
    return l.length > 0
        ? (0, i.jsx)(s.A, {
              label: d.intl.formatToPlainString(d.t.ujhJdG, { numFriends: l.length }),
              users: l,
              maxUsers: 4,
              ...n,
          })
        : null;
}
function A(e) {
    var t, n, u;
    let A,
        { userId: h, applicationId: _, guildId: m, channelId: g, className: p } = e,
        E = (0, o.A)(_),
        I = E.length > 0,
        f =
            ((t = E),
            (n = m),
            (u = g),
            (A = t.slice(0, 3).map((e) => r.Ay.getName(n, u, e))),
            1 === t.length
                ? d.intl.formatToPlainString(d.t.FURqTU, { name: A[0] })
                : 2 === t.length
                  ? d.intl.formatToPlainString(d.t["08Usu/"], { name1: A[0], name2: A[1] })
                  : 3 === t.length
                    ? d.intl.formatToPlainString(d.t.NTYHag, { name1: A[0], name2: A[1], name3: A[2] })
                    : d.intl.formatToPlainString(d.t["i/5oAn"], {
                          name1: A[0],
                          name2: A[1],
                          name3: A[2],
                          numPeople: t.length - 3,
                      })),
        C = (0, a.A)({
            location: "SocialProofButton",
            applicationId: _,
            source: l.Ob.UserProfile,
            sourceUserId: h,
            trackEntryPointImpression: !0,
        });
    return I && null != C
        ? (0, i.jsx)(s.H, {
              users: E,
              label: f,
              className: p,
              onClick: C,
              guildId: m,
              channelId: g,
              "aria-label": f,
              overflowCountColor: "text-strong",
              overflowCountClassName: c.L,
          })
        : null;
}
