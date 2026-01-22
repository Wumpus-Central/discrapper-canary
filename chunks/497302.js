n.d(t, { A: () => b }), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(713654),
    o = n(698441),
    c = n(435328),
    u = n(563312),
    d = n(826383),
    p = n(9448),
    f = n(974930),
    h = n(734057),
    A = n(71393),
    g = n(985018),
    m = n(659088);
function b(e) {
    var t, n;
    let { eventId: b } = e,
        _ = (0, l.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(b), [b]),
        E = (0, l.bG)([A.A], () => A.A.getGuild(null == _ ? void 0 : _.guild_id), [_]),
        O = (0, l.bG)([h.A], () => h.A.getChannel(null == _ ? void 0 : _.channel_id), [_]),
        y = (0, u.nh)(b, null),
        I = null != _ && (0, o.Fd)(_),
        v = null != _ ? (0, f.G3)(_) : null,
        S = (0, d.A)(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, v),
        C = null == y ? void 0 : y.startTime.toISOString(),
        { startDateTimeString: N } = i.useMemo(
            () =>
                I
                    ? { startDateTimeString: g.intl.string(g.t.TxqPQR) }
                    : (0, f.CC)(null != C ? C : new Date().toISOString()),
            [C, I],
        ),
        T = null != _ ? (0, p.oF)(_) : void 0,
        j = null != (t = null == O ? void 0 : O.name) ? t : T,
        x = null != O ? (0, s.gU)(O) : null;
    if (null == _ || null == E) return null;
    let P = null != _.description && _.description.length > 0;
    return (0, r.jsxs)("div", {
        className: m.Qo,
        children: [
            (0, r.jsx)("div", {
                className: m.At,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: I ? "status-positive" : "text-brand",
                    children: N,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-lg/semibold",
                className: P ? m.X_ : void 0,
                children: _.name,
            }),
            P &&
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: m.tj,
                    children: (0, c.l)(null != (n = _.description) ? n : "", !0, { guildId: E.id }),
                }),
            (0, r.jsx)("hr", { className: m.Yl }),
            (0, r.jsxs)("div", {
                className: m.oo,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.ik,
                        children: [
                            (0, r.jsx)(a.nFg, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: g.intl.format(g.t["+DLsD8"], { count: S }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: m.ik,
                        children: [
                            null != x
                                ? (0, r.jsx)(x, {
                                      size: "xs",
                                      color: "currentColor",
                                  })
                                : null,
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: m.HA,
                                children: null != j ? (0, c.l)(j, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
