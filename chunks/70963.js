"use strict";
n.d(t, { Ay: () => E });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(730852),
    a = n(323073),
    o = n(378570),
    l = n(790535),
    u = n(576705),
    c = n(977997),
    d = n(939496),
    _ = n(993401),
    f = n(652215),
    h = n(996988),
    p = n(375708);
function E(e) {
    let { channel: t, onAction: n, onClose: E } = e,
        { themeType: m } = (0, d.E)(),
        g = m === h.d.MODAL_V2,
        A = (0, r.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, r.bG)([u.A], () => {
            let e = (0, a.r9)() && (0, a.UK)(t.id);
            return (t.isPrivate() || u.A.can(f.xBc.CONNECT, t)) && !e;
        })
    )
        return null;
    let I = m === h.d.MODAL || m === h.d.MODAL_V2;
    return (0, i.jsx)(_.FD, {
        text: A
            ? (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? p.intl.string(p.t["3xjX0U"])
                      : e.isDM() || e.isGroupDM()
                        ? p.intl.string(p.t["7hwn2A"])
                        : e.isGuildStageVoice()
                          ? p.intl.string(p.t.Acqcot)
                          : p.intl.string(p.t.BXxdl7);
              })(t, I)
            : (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? p.intl.string(p.t.VJlc0S)
                      : e.isDM() || e.isGroupDM()
                        ? p.intl.string(p.t.ozoE2A)
                        : e.isGuildStageVoice()
                          ? p.intl.string(p.t["7vb2cc"])
                          : p.intl.string(p.t["96ANUN"]);
              })(t, I),
        fullWidth: !g,
        onClick: (e) => {
            e.stopPropagation(),
                n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, l.av)(t) : (s.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
                E?.();
        },
    });
}
