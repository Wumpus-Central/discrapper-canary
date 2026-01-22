n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(956793),
    s = n(323073),
    o = n(378570),
    l = n(323443),
    c = n(576705),
    u = n(977997),
    d = n(939496),
    f = n(993401),
    p = n(652215),
    _ = n(996988),
    h = n(985018);

function m(e) {
    let { channel: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, d.E)(),
        E = g === _.d.MODAL_V2,
        b = (0, i.bG)([u.A], () => u.A.isInChannel(t.id));
    if (
        !(0, i.bG)([c.A], () => {
            let e = (0, s.r9)() && (0, s.UK)(t.id);
            return (t.isPrivate() || c.A.can(p.xBc.CONNECT, t)) && !e;
        })
    )
        return null;
    let y = () =>
            g === _.d.MODAL || g === _.d.MODAL_V2
                ? h.intl.string(h.t["3xjX0U"])
                : t.isDM() || t.isGroupDM()
                  ? h.intl.string(h.t["7hwn2A"])
                  : t.isGuildStageVoice()
                    ? h.intl.string(h.t.Acqcot)
                    : h.intl.string(h.t.BXxdl7),
        O = () =>
            g === _.d.MODAL || g === _.d.MODAL_V2
                ? h.intl.string(h.t.VJlc0S)
                : t.isDM() || t.isGroupDM()
                  ? h.intl.string(h.t.ozoE2A)
                  : t.isGuildStageVoice()
                    ? h.intl.string(h.t["7vb2cc"])
                    : h.intl.string(h.t["96ANUN"]),
        A = (e) => {
            e.stopPropagation(),
                null == n ||
                    n({
                        action: "PRESS_JOIN_CALL_BUTTON",
                    }),
                t.isGuildStageVoice() ? (0, l.av)(t) : (a.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
                null == m || m();
        };
    return (0, r.jsx)(f.FD, {
        text: b ? y() : O(),
        fullWidth: !E,
        onClick: A,
    });
}
