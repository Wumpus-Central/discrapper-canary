n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
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
    f = n(731854),
    x = n(714834);
let g = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        a = (0, r.bG)([h.default], () => h.default.getUser(n.user.id), [n.user.id]),
        m = l.useMemo(() => p.Ay.getNickname(t.guild_id, t.id, a) ?? a?.globalName ?? n.userNick, [t, a, n.userNick]),
        A = (0, u.A)({ userId: n.user.id, context: f.x.DEFAULT });
    if (null == a) return null;
    let g = o._3.SIZE_32,
        C = o.vC[g].size,
        y = a.getAvatarURL(t.guild_id, C);
    return (0, i.jsxs)("div", {
        className: s()(x.vB, { [x.zY]: A }),
        children: [
            (0, i.jsx)(c.eu, { className: x.my, size: g, src: y, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: x.Xh,
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
              className: x.kL,
              children: s.map((e) => ((0, A.Xw)(e) ? (0, i.jsx)(g, { channel: t, participant: e }, e.user.id) : null)),
          });
}
