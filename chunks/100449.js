n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(717558),
    c = n(287809),
    u = n(562153),
    h = n(732777),
    A = n(806931),
    g = n(731854),
    m = n(334609);
let p = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        s = (0, r.bG)([c.default], () => c.default.getUser(n.user.id), [n.user.id]),
        h = l.useMemo(() => u.Ay.getNickname(t.guild_id, t.id, s) ?? s?.globalName ?? n.userNick, [t, s, n.userNick]),
        A = (0, d.A)({ userId: n.user.id, context: g.x.DEFAULT });
    if (null == s) return null;
    let p = o._3J.SIZE_32,
        _ = o.vCh[p].size,
        x = s.getAvatarURL(t.guild_id, _);
    return (0, i.jsxs)("div", {
        className: a()(m.vB, { [m.zY]: A }),
        children: [
            (0, i.jsx)(o.euF, { className: m.my, size: p, src: x, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: m.Xh,
                children: (0, i.jsx)(o.Text, { variant: "text-xs/medium", color: "text-default", children: h }),
            }),
        ],
    });
});
function _(e) {
    let { channel: t, participants: n } = e,
        s = (0, h.A)(t.id),
        a = l.useMemo(() => {
            if (null == s) return [];
            let e = new Set(s.participants.map((e) => e.userId));
            return n.filter((t) => !(!(0, A.Xw)(t) || e.has(t.user.id)));
        }, [n, s]);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: m.kL,
              children: a.map((e) => ((0, A.Xw)(e) ? (0, i.jsx)(p, { channel: t, participant: e }, e.user.id) : null)),
          });
}
