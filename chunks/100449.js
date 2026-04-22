n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(778712),
    c = n(97808),
    d = n(834730),
    u = n(717558),
    p = n(287809),
    h = n(562153),
    _ = n(732777),
    m = n(806931),
    A = n(731854),
    x = n(203050);
let f = a.memo(function (e) {
    let { channel: t, participant: n } = e,
        l = (0, r.bG)([p.default], () => p.default.getUser(n.user.id), [n.user.id]),
        _ = a.useMemo(() => h.Ay.getNickname(t.guild_id, t.id, l) ?? l?.globalName ?? n.userNick, [t, l, n.userNick]),
        m = (0, u.A)({ userId: n.user.id, context: A.x.DEFAULT });
    if (null == l) return null;
    let f = o._3.SIZE_32,
        g = o.vC[f].size,
        C = l.getAvatarURL(t.guild_id, g);
    return (0, i.jsxs)("div", {
        className: s()(x.vB, { [x.zY]: m }),
        children: [
            (0, i.jsx)(c.eu, { className: x.my, size: f, src: C, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: x.Xh,
                children: (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-default", children: _ }),
            }),
        ],
    });
});
function g(e) {
    let { channel: t, participants: n } = e,
        l = (0, _.A)(t.id),
        s = a.useMemo(() => {
            if (null == l) return [];
            let e = new Set(l.participants.map((e) => e.userId));
            return n.filter((t) => !(!(0, m.Xw)(t) || e.has(t.user.id)));
        }, [n, l]);
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: x.kL,
              children: s.map((e) => ((0, m.Xw)(e) ? (0, i.jsx)(f, { channel: t, participant: e }, e.user.id) : null)),
          });
}
