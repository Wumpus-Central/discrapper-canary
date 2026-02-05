"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(36525),
    a = n(555337),
    o = n(199940),
    d = n(132514),
    c = n(985018);
function u(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([d.A], () => d.A.getSettings()),
        a = (0, l.bG)([d.A], () => d.A.getSubmitting()),
        u = s.useCallback(() => {
            try {
                (0, o.W5)(t, n);
            } catch {}
        }, [t, n]);
    return (0, i.jsx)(r.A, { onSave: u, onReset: o.sk, submitting: a, onSaveText: c.intl.string(c.t["R3BPH+"]) });
}
let m = function () {
    let e = (0, l.bG)([a.A], () => a.A.getGuild());
    return null == e ? null : (0, i.jsx)(u, { guildId: e.id });
};
