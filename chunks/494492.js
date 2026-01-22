n.d(t, {
    A: () => d,
}),
    n(228524);
var r = n(627968),
    i = n(64700);
n(516773);
var l = n(311907),
    s = n(397927),
    a = n(997509),
    c = n(555337),
    o = n(985018);

function d(e) {
    let { profile: t, canManageGuild: n } = e,
        d = t.id,
        u = i.useCallback(
            (e) => {
                a.A.updateGuild({
                    description: e,
                }),
                    a.A.updateGuildProfile(d, {
                        description: e,
                    });
            },
            [d],
        ),
        f = (0, l.bG)([c.A], () => c.A.getError("description"));
    return (0, r.jsx)(s.fs1, {
        label: o.intl.string(o.t.Z27SCb),
        description: o.intl.string(o.t.pw0MIk),
        value: t.description,
        placeholder: o.intl.string(o.t.Nvfowl),
        onChange: u,
        maxLength: 300,
        disabled: !n,
        error: f,
    });
}
