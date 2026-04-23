n.d(t, { Ay: () => h, M: () => g, om: () => E });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(956793),
    o = n(323073),
    l = n(378570),
    s = n(323443),
    u = n(576705),
    c = n(977997),
    d = n(939496),
    A = n(993401),
    _ = n(652215),
    f = n(996988),
    p = n(985018);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? p.intl.string(p.t["3xjX0U"])
        : e.isDM() || e.isGroupDM()
          ? p.intl.string(p.t["7hwn2A"])
          : e.isGuildStageVoice()
            ? p.intl.string(p.t.Acqcot)
            : p.intl.string(p.t.BXxdl7);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? p.intl.string(p.t.VJlc0S)
        : e.isDM() || e.isGroupDM()
          ? p.intl.string(p.t.ozoE2A)
          : e.isGuildStageVoice()
            ? p.intl.string(p.t["7vb2cc"])
            : p.intl.string(p.t["96ANUN"]);
}
function h(e) {
    let { channel: t, onAction: n, onClose: p } = e,
        { themeType: h } = (0, d.E)(),
        y = h === f.d.MODAL_V2,
        m = (0, i.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, i.bG)([u.A], () => {
            let e = (0, o.r9)() && (0, o.UK)(t.id);
            return (t.isPrivate() || u.A.can(_.xBc.CONNECT, t)) && !e;
        })
    )
        return null;
    let I = h === f.d.MODAL || h === f.d.MODAL_V2;
    return (0, r.jsx)(A.FD, {
        text: m ? E(t, I) : g(t, I),
        fullWidth: !y,
        onClick: (e) => {
            e.stopPropagation(),
                n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, s.av)(t) : (a.default.selectVoiceChannel(t.id), (0, l.iN)(t.id)),
                p?.();
        },
    });
}
