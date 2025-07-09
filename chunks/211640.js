n.d(t, { Z: () => f });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    o = n(257559),
    a = n(946273),
    s = n(592125),
    c = n(375954),
    u = n(496675),
    d = n(796263),
    p = n(130883),
    h = n(388032);
function f(e) {
    let { message: t, user: n, guild: f, channel: m } = e,
        g = (0, i.e7)([u.Z], () => null != n && null != f && (0, a.CX)(n, f, [u.Z])),
        { messageReference: b } = t,
        _ = (0, i.e7)([c.Z], () => (null != b ? c.Z.getMessage(b.channel_id, b.message_id) : null)),
        y = (0, i.e7)([s.Z], () => (null != _ ? s.Z.getChannel(_.channel_id) : null)),
        C = (0, i.e7)([s.Z], () => {
            var e, t;
            return null != (t = null == (e = s.Z.getChannel(m.id)) ? void 0 : e.isArchivedThread()) && t;
        });
    if (!g) return null;
    let x = null == _ ? h.intl.string(p.default['0IZbwM']) : h.intl.string(p.default.Uj6oDw),
        v = null == _,
        O = 'delete-message-'.concat(t.id);
    return (0, r.jsx)(
        d.Z,
        {
            text: x,
            icon: l.XHJ,
            onClick: () => {
                null != y &&
                    null != _ &&
                    o.Z.confirmDelete(y, _, !1, {
                        isFlagResolved: C,
                        moderatorReportChannelId: m.id
                    });
            },
            disabled: v,
            color: l.zxk.Colors.RED
        },
        O
    );
}
