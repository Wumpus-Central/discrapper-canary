n.d(t, { Z: () => m });
var i = n(54381),
    r = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(946273),
    s = n(819514),
    c = n(592125),
    u = n(375954),
    d = n(496675),
    p = n(796263),
    f = n(792389),
    h = n(388032);
function m(e) {
    let { message: t, user: n, guild: m, channel: g } = e,
        b = (0, r.e7)([d.Z], () => null != n && null != m && (0, o.CX)(n, m, [d.Z])),
        { messageReference: C } = t,
        y = (0, r.e7)([u.Z], () => (null != C ? u.Z.getMessage(C.channel_id, C.message_id) : null)),
        v = (0, r.e7)([c.Z], () => (null != y ? c.Z.getChannel(y.channel_id) : null)),
        x = (0, r.e7)([c.Z], () => {
            var e, t;
            return null != (t = null == (e = c.Z.getChannel(g.id)) ? void 0 : e.isArchivedThread()) && t;
        });
    if (!b) return null;
    let O = null == y ? h.intl.string(f.default["0IZbwC"]) : h.intl.string(f.default.Uj6oD4),
        E = null == y,
        j = "delete-message-".concat(t.id);
    return (0, i.jsx)(
        p.Z,
        {
            text: O,
            icon: a.XHJ,
            onClick: () => {
                null != v &&
                    null != y &&
                    s.Z.confirmDelete(v, y, !1, {
                        isFlagResolved: x,
                        moderatorReportChannelId: g.id,
                    });
            },
            disabled: E,
            color: l.zx.Colors.RED,
        },
        j,
    );
}
