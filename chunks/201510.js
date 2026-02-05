e.d(n, { default: () => p });
var i = e(627968),
    r = e(64700),
    a = e(311907),
    l = e(732955),
    s = e(397927),
    o = e(198982),
    c = e(445077),
    u = e(71393),
    d = e(985018);
function p(t) {
    let { guildId: n } = t,
        e = (0, a.bG)([u.A], () => u.A.getGuild(n)),
        [p, g] = r.useState(null),
        [h, k] = r.useState(""),
        f = async (n) => {
            let { onClose: e, guildId: i } = t;
            n.preventDefault(), g(null);
            try {
                await (0, c.T)(i, { nick: h }), e?.();
            } catch (t) {
                g(new o.LG(t));
            }
        },
        { transitionState: m, onClose: C } = t;
    return (0, i.jsx)(l.aFV, {
        title: d.intl.formatToPlainString(d.t["d+6kzl"], { guildName: e?.name }),
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: C },
            { variant: "primary", text: d.intl.string(d.t.Np4yXU), onClick: f },
        ],
        transitionState: m,
        onClose: C,
        children: (0, i.jsx)("form", {
            onSubmit: f,
            children: (0, i.jsx)(s.ksK, {
                label: d.intl.string(d.t.pt6jhx),
                placeholder: d.intl.string(d.t.RfWvWI),
                description: d.intl.string(d.t.VAaqfF),
                onChange: (t) => {
                    k(t);
                },
                error: p?.getFirstFieldErrorMessage("name"),
                value: h,
            }),
        }),
    });
}
