e.d(t, { Ay: () => m });
var l = e(627968);
e(64700);
var n = e(17928),
    s = e(730852),
    a = e(323073),
    d = e(378570),
    o = e(790535),
    r = e(576705),
    c = e(977997),
    A = e(939496),
    u = e(993401),
    h = e(652215),
    x = e(996988),
    g = e(375708);
function m(i) {
    let { channel: t, onAction: e, onClose: m } = i,
        { themeType: j } = (0, A.E)(),
        p = j === x.d.MODAL_V2,
        C = (0, n.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, n.bG)([r.A], () => {
            let i = (0, a.r9)() && (0, a.UK)(t.id);
            return (t.isPrivate() || r.A.can(h.xBc.CONNECT, t)) && !i;
        })
    )
        return null;
    let N = j === x.d.MODAL || j === x.d.MODAL_V2;
    return (0, l.jsx)(u.FD, {
        text: C
            ? (function (i) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? g.intl.string(g.t["3xjX0U"])
                      : i.isDM() || i.isGroupDM()
                        ? g.intl.string(g.t["7hwn2A"])
                        : i.isGuildStageVoice()
                          ? g.intl.string(g.t.Acqcot)
                          : g.intl.string(g.t.BXxdl7);
              })(t, N)
            : (function (i) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? g.intl.string(g.t.VJlc0S)
                      : i.isDM() || i.isGroupDM()
                        ? g.intl.string(g.t.ozoE2A)
                        : i.isGuildStageVoice()
                          ? g.intl.string(g.t["7vb2cc"])
                          : g.intl.string(g.t["96ANUN"]);
              })(t, N),
        fullWidth: !p,
        onClick: (i) => {
            i.stopPropagation(),
                e?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, o.av)(t) : (s.default.selectVoiceChannel(t.id), (0, d.iN)(t.id)),
                m?.();
        },
    });
}
