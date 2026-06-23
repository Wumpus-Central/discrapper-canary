i.d(n, { default: () => p });
var e = i(627968),
    r = i(64700),
    a = i(17928),
    l = i(189213),
    s = i(292666),
    o = i(913122),
    c = i(445077),
    u = i(71393),
    d = i(375708);
function p(t) {
    let { guildId: n } = t,
        i = (0, a.bG)([u.A], () => u.A.getGuild(n)),
        [p, g] = r.useState(null),
        [h, f] = r.useState("");
    async function k(n) {
        let { onClose: i, guildId: e } = t;
        n.preventDefault(), g(null);
        try {
            await (0, c.T)(e, { nick: h }), i?.();
        } catch (t) {
            g(new o.LG(t));
        }
    }
    let { transitionState: m, onClose: C } = t;
    return (0, e.jsx)(l.Modal, {
        title: d.intl.formatToPlainString(d.t["d+6kzl"], { guildName: i?.name }),
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: C },
            { variant: "primary", text: d.intl.string(d.t.Np4yXU), onClick: k },
        ],
        transitionState: m,
        onClose: C,
        children: (0, e.jsx)("form", {
            onSubmit: k,
            children: (0, e.jsx)(s.k, {
                label: d.intl.string(d.t.pt6jhx),
                placeholder: d.intl.string(d.t.RfWvWI),
                description: d.intl.string(d.t.VAaqfF),
                onChange: function (t) {
                    f(t);
                },
                error: p?.getFirstFieldErrorMessage("name"),
                value: h,
            }),
        }),
    });
}
