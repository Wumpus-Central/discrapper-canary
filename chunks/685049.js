n.d(t, { d: () => _, o: () => u });
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
function _(e) {
    var t, n, u;
    let _,
        { userId: g, applicationId: f, guildId: m, channelId: x, className: p } = e,
        I = (0, o.A)(f),
        A = I.length > 0,
        h =
            ((t = I),
            (n = m),
            (u = x),
            (_ = t.slice(0, 3).map((e) => s.Ay.getName(n, u, e))),
            1 === t.length
                ? c.intl.formatToPlainString(c.t.FURqTU, { name: _[0] })
                : 2 === t.length
                  ? c.intl.formatToPlainString(c.t["08Usu/"], { name1: _[0], name2: _[1] })
                  : 3 === t.length
                    ? c.intl.formatToPlainString(c.t.NTYHag, { name1: _[0], name2: _[1], name3: _[2] })
                    : c.intl.formatToPlainString(c.t["i/5oAn"], {
                          name1: _[0],
                          name2: _[1],
                          name3: _[2],
                          numPeople: t.length - 3,
                      })),
        E = (0, l.A)({
            location: "SocialProofButton",
            applicationId: f,
            source: a.Ob.UserProfile,
            sourceUserId: g,
            trackEntryPointImpression: !0,
        });
    return A && null != E
        ? (0, i.jsx)(r.H, {
              users: I,
              label: h,
              className: p,
              onClick: E,
              guildId: m,
              channelId: x,
              "aria-label": h,
              overflowCountColor: "text-strong",
              overflowCountClassName: d.L,
          })
        : null;
}
