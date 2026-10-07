l.d(t, { Ay: () => C });
var e = l(477900);
l(582128);
var n = l(17928),
    s = l(730852),
    a = l(323073),
    d = l(597306),
    o = l(378570),
    r = l(747376),
    c = l(576705),
    u = l(977997),
    A = l(939496),
    h = l(993401),
    x = l(652215),
    g = l(996988),
    m = l(660183);
function C(i) {
    let { channel: t, onAction: l, onClose: C } = i,
        { themeType: j } = (0, A.E)(),
        p = j === g.d.MODAL_V2,
        v = (0, n.bG)([u.A], () => u.A.isInChannel(t.id));
    if (
        !(0, n.bG)([c.A], () => {
            let i = (0, d.r)() && (0, a.UK)(t.id);
            return (t.isPrivate() || c.A.can(x.xBc.CONNECT, t)) && !i;
        })
    )
        return null;
    let N = j === g.d.MODAL || j === g.d.MODAL_V2;
    return (0, e.jsx)(h.FD, {
        text: v
            ? (function (i) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? m.intl.string(m.t["3xjX0U"])
                      : i.isDM() || i.isGroupDM()
                        ? m.intl.string(m.t["7hwn2A"])
                        : i.isGuildStageVoice()
                          ? m.intl.string(m.t.Acqcot)
                          : m.intl.string(m.t.BXxdl7);
              })(t, N)
            : (function (i) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? m.intl.string(m.t.VJlc0S)
                      : i.isDM() || i.isGroupDM()
                        ? m.intl.string(m.t.ozoE2A)
                        : i.isGuildStageVoice()
                          ? m.intl.string(m.t["7vb2cc"])
                          : m.intl.string(m.t["96ANUN"]);
              })(t, N),
        fullWidth: !p,
        onClick: (i) => {
            (i.stopPropagation(),
                l?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, r.av)(t) : (s.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
                C?.());
        },
    });
}
