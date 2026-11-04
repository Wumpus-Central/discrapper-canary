var e = t(477900);
t(582128);
var n = t(855986),
    s = t(597798),
    a = t(323073),
    d = t(597306),
    o = t(378570),
    r = t(129095),
    c = t(576705),
    u = t(977997),
    A = t(939496),
    h = t(993401),
    x = t(652215),
    g = t(996988),
    m = t(792996);
t.d(
    l,
    {},
    {
        Ay: function (i) {
            let { channel: l, onAction: t, onClose: C } = i,
                { themeType: j } = (0, A.E)(),
                p = j === g.d.MODAL_V2,
                v = (0, n.bG)([u.A], () => u.A.isInChannel(l.id));
            if (
                !(0, n.bG)([c.A], () => {
                    let i = (0, d.r)() && (0, a.UK)(l.id);
                    return (l.isPrivate() || c.A.can(x.xBc.CONNECT, l)) && !i;
                })
            )
                return null;
            let N = j === g.d.MODAL || j === g.d.MODAL_V2;
            return (0, e.jsx)(h.FD, {
                text: v
                    ? (function (i) {
                          let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          return l
                              ? m.intl.string(m.t["3xjX0U"])
                              : i.isDM() || i.isGroupDM()
                                ? m.intl.string(m.t["7hwn2A"])
                                : i.isGuildStageVoice()
                                  ? m.intl.string(m.t.Acqcot)
                                  : m.intl.string(m.t.BXxdl7);
                      })(l, N)
                    : (function (i) {
                          let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          return l
                              ? m.intl.string(m.t.VJlc0S)
                              : i.isDM() || i.isGroupDM()
                                ? m.intl.string(m.t.ozoE2A)
                                : i.isGuildStageVoice()
                                  ? m.intl.string(m.t["7vb2cc"])
                                  : m.intl.string(m.t["96ANUN"]);
                      })(l, N),
                fullWidth: !p,
                onClick: (i) => {
                    (i.stopPropagation(),
                        t?.({ action: "PRESS_JOIN_CALL_BUTTON" }),
                        l.isGuildStageVoice() ? (0, r.av)(l) : (s.default.selectVoiceChannel(l.id), (0, o.iN)(l.id)),
                        C?.());
                },
            });
        },
    },
);
