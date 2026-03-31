n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(717558),
    d = n(287809),
    u = n(562153),
    h = n(732777),
    A = n(806931),
    _ = n(731854),
    m = n(643802);
let g = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        s = (0, r.bG)([d.default], () => d.default.getUser(n.user.id), [n.user.id]),
        h = l.useMemo(() => u.Ay.getNickname(t.guild_id, t.id, s) ?? s?.globalName ?? n.userNick, [t, s, n.userNick]),
        A = (0, c.A)({ userId: n.user.id, context: _.x.DEFAULT });
    if (null == s) return null;
    let g = o._3J.SIZE_32,
        p = o.vCh[g].size,
        f = s.getAvatarURL(t.guild_id, p);
    return (0, i.jsxs)("div", {
        className: a()(m.vB, { [m.zY]: A }),
        children: [
            (0, i.jsx)(o.euF, { className: m.my, size: g, src: f, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: m.Xh,
                children: (0, i.jsx)(o.Text, { variant: "text-xs/medium", color: "text-default", children: h }),
            }),
        ],
    });
});
function p(e) {
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
              children: a.map((e) => ((0, A.Xw)(e) ? (0, i.jsx)(g, { channel: t, participant: e }, e.user.id) : null)),
          });
}
