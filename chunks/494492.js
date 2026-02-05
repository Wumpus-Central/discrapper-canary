"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700);
n(516773);
var l = n(311907),
    r = n(397927),
    a = n(997509),
    o = n(555337),
    d = n(985018);
function c(e) {
    let { profile: t, canManageGuild: n } = e,
        c = t.id,
        u = s.useCallback(
            (e) => {
                a.A.updateGuild({ description: e }), a.A.updateGuildProfile(c, { description: e });
            },
            [c],
        ),
        m = (0, l.bG)([o.A], () => o.A.getError("description"));
    return (0, i.jsx)(r.fs1, {
        label: d.intl.string(d.t.Z27SCb),
        description: d.intl.string(d.t.pw0MIk),
        value: t.description,
        placeholder: d.intl.string(d.t.Nvfowl),
        onChange: u,
        maxLength: 300,
        disabled: !n,
        error: m,
    });
}
