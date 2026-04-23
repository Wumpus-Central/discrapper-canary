n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(834730),
    r = n(177953),
    d = n(47167),
    o = n(713654),
    c = n(698441),
    u = n(435328),
    m = n(563312),
    h = n(826383),
    g = n(9448),
    p = n(974930),
    v = n(734057),
    x = n(71393),
    A = n(985018),
    f = n(165553);
function _(e) {
    let { eventId: t } = e,
        n = (0, s.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(t), [t]),
        _ = (0, s.bG)([x.A], () => x.A.getGuild(n?.guild_id), [n]),
        y = (0, s.bG)([v.A], () => v.A.getChannel(n?.channel_id), [n]),
        b = (0, m.nh)(t, null),
        I = null != n && (0, c.Fd)(n),
        j = null != n ? (0, p.G3)(n) : null,
        E = (0, h.A)(n?.guild_id, n?.id, j),
        k = b?.startTime.toISOString(),
        { startDateTimeString: T } = i.useMemo(
            () => (I ? { startDateTimeString: A.intl.string(A.t.TxqPQR) } : (0, p.CC)(k ?? new Date().toISOString())),
            [k, I],
        ),
        C = (0, d.Ay)(y),
        w = null != n ? (0, g.oF)(n) : void 0,
        N = C ?? w,
        S = null != y ? (0, o.gU)(y) : null;
    if (null == n || null == _) return null;
    let M = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: f.Qo,
        children: [
            (0, a.jsx)("div", {
                className: f.At,
                children: (0, a.jsx)(l.E, {
                    variant: "text-sm/semibold",
                    color: I ? "status-positive" : "text-brand",
                    children: T,
                }),
            }),
            (0, a.jsx)(l.E, { variant: "text-lg/semibold", className: M ? f.X_ : void 0, children: n.name }),
            M &&
                (0, a.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: f.tj,
                    children: (0, u.l)(n.description ?? "", !0, { guildId: _.id }),
                }),
            (0, a.jsx)("hr", { className: f.Yl }),
            (0, a.jsxs)("div", {
                className: f.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: f.ik,
                        children: [
                            (0, a.jsx)(r.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(l.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.format(A.t["+DLsD8"], { count: E }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: f.ik,
                        children: [
                            null != S ? (0, a.jsx)(S, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(l.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: f.HA,
                                children: null != N ? (0, u.l)(N, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
