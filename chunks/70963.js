"use strict";
n.d(t, { Ay: () => g, M: () => E, om: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(956793),
    a = n(323073),
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
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? h.intl.string(h.t["3xjX0U"])
        : e.isDM() || e.isGroupDM()
          ? h.intl.string(h.t["7hwn2A"])
          : e.isGuildStageVoice()
            ? h.intl.string(h.t.Acqcot)
            : h.intl.string(h.t.BXxdl7);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? h.intl.string(h.t.VJlc0S)
        : e.isDM() || e.isGroupDM()
          ? h.intl.string(h.t.ozoE2A)
          : e.isGuildStageVoice()
            ? h.intl.string(h.t["7vb2cc"])
            : h.intl.string(h.t["96ANUN"]);
}
function g(e) {
    let { channel: t, onAction: n, onClose: h } = e,
        { themeType: g } = (0, d.E)(),
        A = g === p.d.MODAL_V2,
        I = (0, i.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, i.bG)([u.A], () => {
            let e = (0, a.r9)() && (0, a.UK)(t.id);
            return (t.isPrivate() || u.A.can(f.xBc.CONNECT, t)) && !e;
        })
    )
        return null;
    let T = (e) => {
            e.stopPropagation(),
                n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, l.av)(t) : (s.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
                h?.();
        },
        S = g === p.d.MODAL || g === p.d.MODAL_V2;
    return (0, r.jsx)(_.FD, { text: I ? m(t, S) : E(t, S), fullWidth: !A, onClick: T });
}
