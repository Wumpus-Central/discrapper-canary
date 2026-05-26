n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(778712),
    c = n(97808),
    d = n(834730),
    u = n(717558),
    h = n(287809),
    p = n(562153),
    m = n(732777),
    A = n(806931),
    x = n(731854),
    g = n(82410);
let C = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        a = (0, r.bG)([h.default], () => h.default.getUser(n.user.id), [n.user.id]),
        m = l.useMemo(() => p.Ay.getNickname(t.guild_id, t.id, a) ?? a?.globalName ?? n.userNick, [t, a, n.userNick]),
        A = (0, u.A)({ userId: n.user.id, context: x.x.DEFAULT });
    if (null == a) return null;
    let C = o._3.SIZE_32,
        f = o.vC[C].size,
        E = a.getAvatarURL(t.guild_id, f);
    return (0, i.jsxs)("div", {
        className: s()(g.vB, { [g.zY]: A }),
        children: [
            (0, i.jsx)(c.eu, { className: g.my, size: C, src: E, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: g.Xh,
                children: (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-default", children: m }),
            }),
        ],
    });
});
function f(e) {
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
              children: s.map((e) => ((0, A.Xw)(e) ? (0, i.jsx)(C, { channel: t, participant: e }, e.user.id) : null)),
          });
}
