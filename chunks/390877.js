n.d(t, { d: () => v, o: () => E });
var i = n(627968),
    a = n(409626),
    l = n(692969),
    s = n(562153);
n(64700);
var r = n(503698),
    o = n.n(r),
    c = n(342952),
    d = n(990078),
    u = n(778712),
    _ = n(834730),
    g = n(939249),
    m = n(915089),
    f = n(499270);
function x(e) {
    let { label: t, className: n, size: a = u._3.SIZE_16, maxUsers: l = 4, ...s } = e,
        r = (0, m.GV)();
    return (0, i.jsxs)("div", {
        className: o()(n, f.k),
        children: [
            (0, i.jsx)(c.I, { "aria-labelledby": r, overflowCountClassName: f.j, size: a, maxUsers: l, ...s }),
            (0, i.jsx)(_.E, { variant: "text-xs/normal", color: "text-subtle", id: r, children: t }),
        ],
    });
}
function p(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: a,
        size: l = u._3.SIZE_16,
        maxUsers: s = 4,
        onClick: r,
        ..._
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(d.m, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(g.D, {
                onClick: r,
                "aria-label": t,
                children: (0, i.jsx)(c.I, {
                    size: l,
                    maxUsers: s,
                    overflowCountClassName: o()(f.j, a),
                    "aria-hidden": !0,
                    ..._,
                }),
            }),
        }),
    });
}
var I = n(617086),
    A = n(985018),
    h = n(73934);
function E(e) {
    let { applicationId: t, ...n } = e,
        a = (0, I.A)(t);
    return a.length > 0
        ? (0, i.jsx)(x, {
              label: A.intl.formatToPlainString(A.t.ujhJdG, { numFriends: a.length }),
              users: a,
              maxUsers: 4,
              ...n,
          })
        : null;
}
function v(e) {
    var t, n, r;
    let o,
        { userId: c, applicationId: d, guildId: u, channelId: _, className: g } = e,
        m = (0, I.A)(d),
        f = m.length > 0,
        x =
            ((t = m),
            (n = u),
            (r = _),
            (o = t.slice(0, 3).map((e) => s.Ay.getName(n, r, e))),
            1 === t.length
                ? A.intl.formatToPlainString(A.t.FURqTU, { name: o[0] })
                : 2 === t.length
                  ? A.intl.formatToPlainString(A.t["08Usu/"], { name1: o[0], name2: o[1] })
                  : 3 === t.length
                    ? A.intl.formatToPlainString(A.t.NTYHag, { name1: o[0], name2: o[1], name3: o[2] })
                    : A.intl.formatToPlainString(A.t["i/5oAn"], {
                          name1: o[0],
                          name2: o[1],
                          name3: o[2],
                          numPeople: t.length - 3,
                      })),
        E = (0, l.A)({
            location: "SocialProofButton",
            applicationId: d,
            source: a.Ob.UserProfile,
            sourceUserId: c,
            trackEntryPointImpression: !0,
        });
    return f && null != E
        ? (0, i.jsx)(p, {
              users: m,
              label: x,
              className: g,
              onClick: E,
              guildId: u,
              channelId: _,
              "aria-label": x,
              overflowCountColor: "text-strong",
              overflowCountClassName: h.L,
          })
        : null;
}
