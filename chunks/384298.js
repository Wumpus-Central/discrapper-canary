n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(287734),
    o = n(622822),
    s = n(359110),
    l = n(922482),
    c = n(496675),
    u = n(979651),
    d = n(652853),
    f = n(475413),
    p = n(981631),
    _ = n(671955),
    m = n(388032);
function h(e) {
    let { channel: t, onAction: n, onClose: h } = e,
        { themeType: g } = (0, d.z)(),
        E = g === _.l.MODAL_V2,
        b = (0, i.e7)([u.Z], () => u.Z.isInChannel(t.id));
    if (
        !(0, i.e7)([c.Z], () => {
            let e = (0, o.dl)() && (0, o.zd)(t.id);
            return (t.isPrivate() || c.Z.can(p.Plq.CONNECT, t)) && !e;
        })
    )
        return null;
    let y = () =>
            g === _.l.MODAL || g === _.l.MODAL_V2
                ? m.intl.string(m.t["3xjX0U"])
                : t.isDM() || t.isGroupDM()
                  ? m.intl.string(m.t["7hwn2A"])
                  : t.isGuildStageVoice()
                    ? m.intl.string(m.t.Acqcot)
                    : m.intl.string(m.t.BXxdl7),
        O = () =>
            g === _.l.MODAL || g === _.l.MODAL_V2
                ? m.intl.string(m.t.VJlc0S)
                : t.isDM() || t.isGroupDM()
                  ? m.intl.string(m.t.ozoE2A)
                  : t.isGuildStageVoice()
                    ? m.intl.string(m.t["7vb2cc"])
                    : m.intl.string(m.t["96ANUN"]),
        v = (e) => {
            e.stopPropagation(),
                null == n || n({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, l.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)),
                null == h || h();
        };
    return (0, r.jsx)(f.i6, {
        text: b ? y() : O(),
        fullWidth: !E,
        onClick: v,
    });
}
