n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(47167),
    o = n(713654),
    d = n(698441),
    c = n(435328),
    u = n(563312),
    A = n(826383),
    h = n(9448),
    _ = n(974930),
    m = n(734057),
    g = n(71393),
    p = n(985018),
    E = n(166734);
function I(e) {
    let { eventId: t } = e,
        n = (0, l.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(t), [t]),
        I = (0, l.bG)([g.A], () => g.A.getGuild(n?.guild_id), [n]),
        f = (0, l.bG)([m.A], () => m.A.getChannel(n?.channel_id), [n]),
        C = (0, u.nh)(t, null),
        T = null != n && (0, d.Fd)(n),
        N = null != n ? (0, _.G3)(n) : null,
        S = (0, A.A)(n?.guild_id, n?.id, N),
        x = C?.startTime.toISOString(),
        { startDateTimeString: v } = a.useMemo(
            () => (T ? { startDateTimeString: p.intl.string(p.t.TxqPQR) } : (0, _.CC)(x ?? new Date().toISOString())),
            [x, T],
        ),
        b = (0, s.Ay)(f),
        y = null != n ? (0, h.oF)(n) : void 0,
        O = b ?? y,
        L = null != f ? (0, o.gU)(f) : null;
    if (null == n || null == I) return null;
    let R = null != n.description && n.description.length > 0;
    return (0, i.jsxs)("div", {
        className: E.Qo,
        children: [
            (0, i.jsx)("div", {
                className: E.At,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/semibold",
                    color: T ? "status-positive" : "text-brand",
                    children: v,
                }),
            }),
            (0, i.jsx)(r.Text, { variant: "text-lg/semibold", className: R ? E.X_ : void 0, children: n.name }),
            R &&
                (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: E.tj,
                    children: (0, c.l)(n.description ?? "", !0, { guildId: I.id }),
                }),
            (0, i.jsx)("hr", { className: E.Yl }),
            (0, i.jsxs)("div", {
                className: E.oo,
                children: [
                    (0, i.jsxs)("div", {
                        className: E.ik,
                        children: [
                            (0, i.jsx)(r.nFg, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: p.intl.format(p.t["+DLsD8"], { count: S }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: E.ik,
                        children: [
                            null != L ? (0, i.jsx)(L, { size: "xs", color: "currentColor" }) : null,
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: E.HA,
                                children: null != O ? (0, c.l)(O, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
