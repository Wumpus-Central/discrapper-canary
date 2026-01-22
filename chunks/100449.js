n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(717558),
    u = n(287809),
    d = n(562153),
    f = n(732777),
    p = n(806931),
    h = n(731854),
    b = n(334609);
let g = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        i = (0, s.bG)([u.default], () => u.default.getUser(n.user.id), [n.user.id]),
        f = l.useMemo(() => {
            var e, r;
            return null !=
                (e = null != (r = d.Ay.getNickname(t.guild_id, t.id, i)) ? r : null == i ? void 0 : i.globalName)
                ? e
                : n.userNick;
        }, [t, i, n.userNick]),
        p = (0, c.A)({
            userId: n.user.id,
            context: h.x.DEFAULT,
        });
    if (null == i) return null;
    let g = o._3J.SIZE_32,
        m = o.vCh[g].size,
        A = i.getAvatarURL(t.guild_id, m);
    return (0, r.jsxs)("div", {
        className: a()(b.vB, {
            [b.zY]: p,
        }),
        children: [
            (0, r.jsx)(o.euF, {
                className: b.my,
                size: g,
                src: A,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("div", {
                className: b.Xh,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: f,
                }),
            }),
        ],
    });
});

function m(e) {
    let { channel: t, participants: n } = e,
        i = (0, f.A)(t.id),
        a = l.useMemo(() => {
            if (null == i) return [];
            let e = new Set(i.participants.map((e) => e.userId));
            return n.filter((t) => !(!(0, p.Xw)(t) || e.has(t.user.id)));
        }, [n, i]);
    return 0 === a.length
        ? null
        : (0, r.jsx)("div", {
              className: b.kL,
              children: a.map((e) =>
                  (0, p.Xw)(e)
                      ? (0, r.jsx)(
                            g,
                            {
                                channel: t,
                                participant: e,
                            },
                            e.user.id,
                        )
                      : null,
              ),
          });
}
