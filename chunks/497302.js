n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(713654),
    o = n(698441),
    d = n(435328),
    c = n(563312),
    u = n(826383),
    A = n(9448),
    h = n(974930),
    _ = n(734057),
    m = n(71393),
    p = n(985018),
    g = n(659088);
function E(e) {
    let { eventId: t } = e,
        n = (0, a.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]),
        E = (0, a.bG)([m.A], () => m.A.getGuild(n?.guild_id), [n]),
        f = (0, a.bG)([_.A], () => _.A.getChannel(n?.channel_id), [n]),
        I = (0, c.nh)(t, null),
        C = null != n && (0, o.Fd)(n),
        N = null != n ? (0, h.G3)(n) : null,
        T = (0, u.A)(n?.guild_id, n?.id, N),
        S = I?.startTime.toISOString(),
        { startDateTimeString: x } = r.useMemo(
            () => (C ? { startDateTimeString: p.intl.string(p.t.TxqPQR) } : (0, h.CC)(S ?? new Date().toISOString())),
            [S, C],
        ),
        v = null != n ? (0, A.oF)(n) : void 0,
        b = f?.name ?? v,
        y = null != f ? (0, s.gU)(f) : null;
    if (null == n || null == E) return null;
    let L = null != n.description && n.description.length > 0;
    return (0, i.jsxs)("div", {
        className: g.Qo,
        children: [
            (0, i.jsx)("div", {
                className: g.At,
                children: (0, i.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    color: C ? "status-positive" : "text-brand",
                    children: x,
                }),
            }),
            (0, i.jsx)(l.Text, { variant: "text-lg/semibold", className: L ? g.X_ : void 0, children: n.name }),
            L &&
                (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: g.tj,
                    children: (0, d.l)(n.description ?? "", !0, { guildId: E.id }),
                }),
            (0, i.jsx)("hr", { className: g.Yl }),
            (0, i.jsxs)("div", {
                className: g.oo,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.ik,
                        children: [
                            (0, i.jsx)(l.nFg, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: p.intl.format(p.t["+DLsD8"], { count: T }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: g.ik,
                        children: [
                            null != y ? (0, i.jsx)(y, { size: "xs", color: "currentColor" }) : null,
                            (0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: g.HA,
                                children: null != b ? (0, d.l)(b, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
