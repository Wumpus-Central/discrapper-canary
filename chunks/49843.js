i.d(n, { default: () => k });
var a = i(477900);
i(582128);
var e = i(17928),
    c = i(189213),
    s = i(123292),
    l = i(681026),
    r = i(413125),
    o = i(808728),
    d = i(71393),
    u = i(686978),
    p = i(375708),
    h = i(58641);
function k(t) {
    let { guildId: n, transitionState: i, onClose: k } = t,
        C = (0, e.bG)([d.A], () => d.A.getGuild(n), [n]),
        f = (0, e.bG)([o.Ay], () => o.Ay.getDefaultChannel(n), [n]),
        { steps: y } = (0, r.c)(f, C);
    async function w() {
        ((0, u.cO)(n), await k());
    }
    async function x(t) {
        (await k(), t.onClick());
    }
    return (0, a.jsxs)(c.a, {
        title: p.intl.string(p.t["tu/tr8"]),
        onClose: k,
        actions: [],
        transitionState: i,
        children: [
            y.map((t) =>
                (0, a.jsx)(
                    l.E,
                    { iconUrl: t.iconUrl, header: t.title, completed: t.completed, onClick: () => x(t) },
                    t.key,
                ),
            ),
            (0, a.jsx)("div", {
                className: h.T,
                children: (0, a.jsx)(s.Q, { variant: "secondary", text: p.intl.string(p.t["9E36wf"]), onClick: w }),
            }),
        ],
    });
}
