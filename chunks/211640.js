n.d(t, { Z: () => h });
var r = n(255367),
    i = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(257559),
    l = n(946273),
    c = n(592125),
    u = n(375954),
    d = n(496675),
    f = n(796263),
    _ = n(130883),
    p = n(388032);
function h(e) {
    let { message: t, user: n, guild: h, channel: m } = e,
        g = (0, i.e7)([d.Z], () => null != n && null != h && (0, l.CX)(n, h, [d.Z])),
        { messageReference: E } = t,
        b = (0, i.e7)([u.Z], () => (null != E ? u.Z.getMessage(E.channel_id, E.message_id) : null)),
        y = (0, i.e7)([c.Z], () => (null != b ? c.Z.getChannel(b.channel_id) : null)),
        O = (0, i.e7)([c.Z], () => {
            var e, t;
            return null != (t = null == (e = c.Z.getChannel(m.id)) ? void 0 : e.isArchivedThread()) && t;
        });
    if (!g) return null;
    let v = () => {
            null != y &&
                null != b &&
                s.Z.confirmDelete(y, b, !1, {
                    isFlagResolved: O,
                    moderatorReportChannelId: m.id,
                });
        },
        I = null == b ? p.intl.string(_.default["0IZbwM"]) : p.intl.string(_.default.Uj6oDw),
        T = null == b,
        S = "delete-message-".concat(t.id);
    return (0, r.jsx)(
        f.Z,
        {
            text: I,
            icon: a.XHJ,
            onClick: v,
            disabled: T,
            color: o.zx.Colors.RED,
        },
        S,
    );
}
