n.d(t, { Z: () => m });
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
    f = n(732380),
    _ = n(981631),
    p = n(671955),
    h = n(388032);
function m(e) {
    let { channel: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, d.z)(),
        E = g === p.l.MODAL_V2,
        b = (0, i.e7)([u.Z], () => u.Z.isInChannel(t.id));
    if (
        !(0, i.e7)([c.Z], () => {
            let e = (0, o.dl)() && (0, o.zd)(t.id);
            return (t.isPrivate() || c.Z.can(_.Plq.CONNECT, t)) && !e;
        })
    )
        return null;
    let y = () =>
            g === p.l.MODAL || g === p.l.MODAL_V2
                ? h.intl.string(h.t["3xjX0U"])
                : t.isDM() || t.isGroupDM()
                  ? h.intl.string(h.t["7hwn2A"])
                  : t.isGuildStageVoice()
                    ? h.intl.string(h.t.Acqcot)
                    : h.intl.string(h.t.BXxdl7),
        O = () =>
            g === p.l.MODAL || g === p.l.MODAL_V2
                ? h.intl.string(h.t.VJlc0S)
                : t.isDM() || t.isGroupDM()
                  ? h.intl.string(h.t.ozoE2A)
                  : t.isGuildStageVoice()
                    ? h.intl.string(h.t["7vb2cc"])
                    : h.intl.string(h.t["96ANUN"]),
        v = (e) => {
            e.stopPropagation(),
                null == n || n({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, l.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)),
                null == m || m();
        };
    return (0, r.jsx)(f.O1, {
        text: b ? y() : O(),
        fullWidth: !E,
        onClick: v,
    });
}
