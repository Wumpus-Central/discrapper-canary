e.d(n, { default: () => p });
var i = e(627968),
    r = e(64700),
    a = e(17928),
    l = e(189213),
    s = e(292666),
    o = e(845584),
    c = e(445077),
    d = e(71393),
    u = e(985018);
function p(t) {
    let { guildId: n } = t,
        e = (0, a.bG)([d.A], () => d.A.getGuild(n)),
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
    return (0, i.jsx)(l.Modal, {
        title: u.intl.formatToPlainString(u.t["d+6kzl"], { guildName: e?.name }),
        actions: [
            { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: C },
            { variant: "primary", text: u.intl.string(u.t.Np4yXU), onClick: f },
        ],
        transitionState: m,
        onClose: C,
        children: (0, i.jsx)("form", {
            onSubmit: f,
            children: (0, i.jsx)(s.k, {
                label: u.intl.string(u.t.pt6jhx),
                placeholder: u.intl.string(u.t.RfWvWI),
                description: u.intl.string(u.t.VAaqfF),
                onChange: (t) => {
                    k(t);
                },
                error: p?.getFirstFieldErrorMessage("name"),
                value: h,
            }),
        }),
    });
}
