n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(778712),
    c = n(97808),
    d = n(834730),
    u = n(717558),
    p = n(287809),
    h = n(562153),
    m = n(732777),
    A = n(806931),
    x = n(731854),
    g = n(82410);
let f = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        a = (0, r.bG)([p.default], () => p.default.getUser(n.user.id), [n.user.id]),
        m = l.useMemo(() => h.Ay.getNickname(t.guild_id, t.id, a) ?? a?.globalName ?? n.userNick, [t, a, n.userNick]),
        A = (0, u.A)({ userId: n.user.id, context: x.x.DEFAULT });
    if (null == a) return null;
    let f = o._3.SIZE_32,
        C = o.vC[f].size,
        y = a.getAvatarURL(t.guild_id, C);
    return (0, i.jsxs)("div", {
        className: s()(g.vB, { [g.zY]: A }),
        children: [
            (0, i.jsx)(c.eu, { className: g.my, size: f, src: y, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: g.Xh,
                children: (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-default", children: m }),
            }),
        ],
    });
});
function C(e) {
    let { channel: t, participants: n } = e,
        a = (0, m.A)(t.id),
        s = l.useMemo(() => {
            if (null == a) return [];
            let e = new Set(a.participants.map((e) => e.userId));
            return n.filter((t) => !(!(0, A.Xw)(t) || e.has(t.user.id)));
        }, [n, a]);
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: g.kL,
              children: s.map((e) => ((0, A.Xw)(e) ? (0, i.jsx)(f, { channel: t, participant: e }, e.user.id) : null)),
          });
}
