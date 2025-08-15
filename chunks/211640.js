n.d(t, { Z: () => m });
var r = n(951288),
    i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(257559),
    s = n(946273),
    c = n(592125),
    u = n(375954),
    d = n(496675),
    p = n(796263),
    h = n(764295),
    f = n(388032);
function m(e) {
    let { message: t, user: n, guild: m, channel: g } = e,
        b = (0, i.e7)([d.Z], () => null != n && null != m && (0, s.CX)(n, m, [d.Z])),
        { messageReference: y } = t,
        _ = (0, i.e7)([u.Z], () => (null != y ? u.Z.getMessage(y.channel_id, y.message_id) : null)),
        C = (0, i.e7)([c.Z], () => (null != _ ? c.Z.getChannel(_.channel_id) : null)),
        x = (0, i.e7)([c.Z], () => {
            var e, t;
            return null != (t = null == (e = c.Z.getChannel(g.id)) ? void 0 : e.isArchivedThread()) && t;
        });
    if (!b) return null;
    let v = null == _ ? f.intl.string(h.default["0IZbwM"]) : f.intl.string(h.default.Uj6oDw),
        j = null == _,
        O = "delete-message-".concat(t.id);
    return (0, r.jsx)(
        p.Z,
        {
            text: v,
            icon: a.XHJ,
            onClick: () => {
                null != C &&
                    null != _ &&
                    o.Z.confirmDelete(C, _, !1, {
                        isFlagResolved: x,
                        moderatorReportChannelId: g.id,
                    });
            },
            disabled: j,
            color: l.zx.Colors.RED,
        },
        O,
    );
}
