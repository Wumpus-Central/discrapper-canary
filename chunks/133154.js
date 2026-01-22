n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(36525),
    a = n(555337),
    c = n(199940),
    o = n(132514),
    d = n(985018);
function u(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([o.A], () => o.A.getSettings()),
        a = (0, l.bG)([o.A], () => o.A.getSubmitting()),
        u = i.useCallback(() => {
            try {
                (0, c.W5)(t, n);
            } catch (e) {}
        }, [t, n]);
    return (0, r.jsx)(s.A, {
        onSave: u,
        onReset: c.sk,
        submitting: a,
        onSaveText: d.intl.string(d.t["R3BPH+"]),
    });
}
let f = function () {
    let e = (0, l.bG)([a.A], () => a.A.getGuild());
    return null == e ? null : (0, r.jsx)(u, { guildId: e.id });
};
