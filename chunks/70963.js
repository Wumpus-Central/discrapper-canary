n.d(e, { Ay: () => h, M: () => g, om: () => E });
var r = n(627968);
n(64700);
var i = n(17928),
    a = n(956793),
    o = n(323073),
    l = n(378570),
    s = n(790535),
    u = n(576705),
    c = n(977997),
    d = n(939496),
    A = n(993401),
    _ = n(652215),
    f = n(996988),
    p = n(985018);
function E(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e
        ? p.intl.string(p.t["3xjX0U"])
        : t.isDM() || t.isGroupDM()
          ? p.intl.string(p.t["7hwn2A"])
          : t.isGuildStageVoice()
            ? p.intl.string(p.t.Acqcot)
            : p.intl.string(p.t.BXxdl7);
}
function g(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e
        ? p.intl.string(p.t.VJlc0S)
        : t.isDM() || t.isGroupDM()
          ? p.intl.string(p.t.ozoE2A)
          : t.isGuildStageVoice()
            ? p.intl.string(p.t["7vb2cc"])
            : p.intl.string(p.t["96ANUN"]);
}
function h(t) {
    let { channel: e, onAction: n, onClose: p } = t,
        { themeType: h } = (0, d.E)(),
        y = h === f.d.MODAL_V2,
        m = (0, i.bG)([c.A], () => c.A.isInChannel(e.id));
    if (
        !(0, i.bG)([u.A], () => {
            let t = (0, o.r9)() && (0, o.UK)(e.id);
            return (e.isPrivate() || u.A.can(_.xBc.CONNECT, e)) && !t;
        })
    )
        return null;
    let I = h === f.d.MODAL || h === f.d.MODAL_V2;
    return (0, r.jsx)(A.FD, {
        text: m ? E(e, I) : g(e, I),
        fullWidth: !y,
        onClick: (t) => {
            t.stopPropagation(),
                n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                e.isGuildStageVoice() ? (0, s.av)(e) : (a.default.selectVoiceChannel(e.id), (0, l.iN)(e.id)),
                p?.();
        },
    });
}
