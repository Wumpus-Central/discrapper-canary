l.d(t, { Ay: () => m });
var e = l(627968);
l(64700);
var n = l(17928),
    s = l(730852),
    a = l(323073),
    d = l(378570),
    o = l(790535),
    r = l(576705),
    c = l(977997),
    A = l(939496),
    h = l(993401),
    u = l(652215),
    x = l(996988),
    g = l(375708);
function m(i) {
    let { channel: t, onAction: l, onClose: m } = i,
        { themeType: p } = (0, A.E)(),
        j = p === x.d.MODAL_V2,
        C = (0, n.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, n.bG)([r.A], () => {
            let i = (0, a.r9)() && (0, a.UK)(t.id);
            return (t.isPrivate() || r.A.can(u.xBc.CONNECT, t)) && !i;
        })
    )
        return null;
    let _ = p === x.d.MODAL || p === x.d.MODAL_V2;
    return (0, e.jsx)(h.FD, {
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
              })(t, _)
            : (function (i) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return t
                      ? g.intl.string(g.t.VJlc0S)
                      : i.isDM() || i.isGroupDM()
                        ? g.intl.string(g.t.ozoE2A)
                        : i.isGuildStageVoice()
                          ? g.intl.string(g.t["7vb2cc"])
                          : g.intl.string(g.t["96ANUN"]);
              })(t, _),
        fullWidth: !j,
        onClick: (i) => {
            i.stopPropagation(),
                l?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, o.av)(t) : (s.default.selectVoiceChannel(t.id), (0, d.iN)(t.id)),
                m?.();
        },
    });
}
