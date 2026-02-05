i.d(t, { A: () => _ });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    r = i(956793),
    s = i(806246),
    o = i(378570),
    d = i(383501),
    c = i(954571),
    u = i(652215),
    m = i(985018);
function _(e) {
    let { variant: t = "active", size: i = "sm", hangStatusChannel: _, onAction: A, userId: g, ...h } = e,
        f = (0, a.bG)([d.A], () => d.A.getChannelId() === _.id);
    return (0, n.jsx)(l.Button, {
        text: f ? m.intl.string(m.t.BXxdl7) : m.intl.string(m.t["9C444m"]),
        onClick: () => {
            A?.(),
                r.default.selectVoiceChannel(_.id),
                (0, o.iN)(_.id),
                c.default.track(u.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: "UserProfilePopout",
                    ...(0, s.A)(_.id),
                    other_user_id: g,
                    cta_type: f ? "open" : "join",
                });
        },
        variant: t,
        size: i,
        fullWidth: !0,
        ...h,
    });
}
