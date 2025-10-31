n.d(t, { Z: () => m });
var r = n(951288),
    i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(946273),
    s = n(819514),
    c = n(592125),
    u = n(375954),
    d = n(496675),
    p = n(796263),
    f = n(43617),
    h = n(388032);
function m(e) {
    let { message: t, user: n, guild: m, channel: g } = e,
        b = (0, i.e7)([d.Z], () => null != n && null != m && (0, o.CX)(n, m, [d.Z])),
        { messageReference: _ } = t,
        y = (0, i.e7)([u.Z], () => (null != _ ? u.Z.getMessage(_.channel_id, _.message_id) : null)),
        C = (0, i.e7)([c.Z], () => (null != y ? c.Z.getChannel(y.channel_id) : null)),
        v = (0, i.e7)([c.Z], () => {
            var e, t;
            return null != (t = null == (e = c.Z.getChannel(g.id)) ? void 0 : e.isArchivedThread()) && t;
        });
    if (!b) return null;
    let O = null == y ? h.intl.string(f.default["0IZbwC"]) : h.intl.string(f.default.Uj6oD4),
        x = null == y,
        E = "delete-message-".concat(t.id);
    return (0, r.jsx)(
        p.Z,
        {
            text: O,
            icon: a.XHJ,
            onClick: () => {
                null != C &&
                    null != y &&
                    s.Z.confirmDelete(C, y, !1, {
                        isFlagResolved: v,
                        moderatorReportChannelId: g.id,
                    });
            },
            disabled: x,
            color: l.zx.Colors.RED,
        },
        E,
    );
}
