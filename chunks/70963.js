n.d(t, { Ay: () => m, M: () => g, om: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(956793),
    l = n(323073),
    o = n(378570),
    s = n(323443),
    u = n(576705),
    c = n(977997),
    d = n(939496),
    f = n(993401),
    A = n(652215),
    _ = n(996988),
    E = n(985018);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? E.intl.string(E.t["3xjX0U"])
        : e.isDM() || e.isGroupDM()
          ? E.intl.string(E.t["7hwn2A"])
          : e.isGuildStageVoice()
            ? E.intl.string(E.t.Acqcot)
            : E.intl.string(E.t.BXxdl7);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t
        ? E.intl.string(E.t.VJlc0S)
        : e.isDM() || e.isGroupDM()
          ? E.intl.string(E.t.ozoE2A)
          : e.isGuildStageVoice()
            ? E.intl.string(E.t["7vb2cc"])
            : E.intl.string(E.t["96ANUN"]);
}
function m(e) {
    let { channel: t, onAction: n, onClose: E } = e,
        { themeType: m } = (0, d.E)(),
        h = m === _.d.MODAL_V2,
        y = (0, i.bG)([c.A], () => c.A.isInChannel(t.id));
    if (
        !(0, i.bG)([u.A], () => {
            let e = (0, l.r9)() && (0, l.UK)(t.id);
            return (t.isPrivate() || u.A.can(A.xBc.CONNECT, t)) && !e;
        })
    )
        return null;
    let I = m === _.d.MODAL || m === _.d.MODAL_V2;
    return (0, r.jsx)(f.FD, {
        text: y ? p(t, I) : g(t, I),
        fullWidth: !h,
        onClick: (e) => {
            e.stopPropagation(),
                n?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                t.isGuildStageVoice() ? (0, s.av)(t) : (a.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)),
                E?.();
        },
    });
}
