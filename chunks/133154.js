n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(36525),
    a = n(555337),
    o = n(199940),
    d = n(132514),
    c = n(985018);
function u(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([d.A], () => d.A.getSettings()),
        a = (0, s.bG)([d.A], () => d.A.getSubmitting()),
        u = l.useCallback(() => {
            try {
                (0, o.W5)(t, n);
            } catch {}
        }, [t, n]);
    return (0, i.jsx)(r.A, { onSave: u, onReset: o.sk, submitting: a, onSaveText: c.intl.string(c.t["R3BPH+"]) });
}
let m = function () {
    let e = (0, s.bG)([a.A], () => a.A.getGuild());
    return null == e ? null : (0, i.jsx)(u, { guildId: e.id });
};
