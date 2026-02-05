"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(956793),
    s = n(323073),
    o = n(378570),
    l = n(323443),
    u = n(576705),
    c = n(977997),
    d = n(939496),
    _ = n(993401),
    f = n(652215),
    p = n(996988),
    h = n(985018);
function m(e) {
    let { channel: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, d.E)(),
        E = g === p.d.MODAL_V2,
        A = (0, i.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, i.bG)([u.A], () => {
            let e = (0, s.r9)() && (0, s.UK)(t.id);
            return (t.isPrivate() || u.A.can(f.xBc.CONNECT, t)) && !e;
        })
    )
        return null;
    let I = () =>
            g === p.d.MODAL || g === p.d.MODAL_V2
                ? h.intl.string(h.t["3xjX0U"])
                : t.isDM() || t.isGroupDM()
                  ? h.intl.string(h.t["7hwn2A"])
                  : t.isGuildStageVoice()
                    ? h.intl.string(h.t.Acqcot)
                    : h.intl.string(h.t.BXxdl7),
        T = () =>
            g === p.d.MODAL || g === p.d.MODAL_V2
                ? h.intl.string(h.t.VJlc0S)
                : t.isDM() || t.isGroupDM()
                  ? h.intl.string(h.t.ozoE2A)
                  : t.isGuildStageVoice()
                    ? h.intl.string(h.t["7vb2cc"])
                    : h.intl.string(h.t["96ANUN"]),
        y = (e) => {
            e.stopPropagation(),
                n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, l.av)(t) : (a.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
                m?.();
        };
    return (0, r.jsx)(_.FD, { text: A ? I() : T(), fullWidth: !E, onClick: y });
}
