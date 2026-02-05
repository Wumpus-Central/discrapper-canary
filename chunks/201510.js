n.d(t, { default: () => p });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(732955),
    o = n(397927),
    s = n(198982),
    u = n(775602),
    d = n(21161),
    c = n(445077),
    h = n(71393),
    g = n(664531),
    f = n(652215),
    b = n(985018);
function p(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([h.A], () => h.A.getGuild(t)),
        [p, k] = a.useState(null),
        [C, x] = a.useState(""),
        { createMultipleConfettiAt: m } = a.useContext(d.x),
        w = (0, r.bG)([u.A], () => u.A.useReducedMotion, []),
        A = async (t) => {
            let { onClose: n, guildId: i } = e;
            t.preventDefault(), k(null);
            try {
                await (0, c.T)(i, { nick: C }), n?.();
            } catch (e) {
                k(new s.LG(e));
            }
        },
        { transitionState: v, onClose: G } = e,
        S = h.A.getGuildsArray().filter((e) => e.id !== t && e.features.has(f.GuildFeatures.HUB)).length > 0,
        y = !w && !S && n?.features.has(f.GuildFeatures.HUB) && (0, g.a)();
    return (
        a.useEffect(() => {
            y && m(window.innerWidth / 2, window.innerHeight / 2);
        }, [m, y]),
        (0, i.jsx)(l.aFV, {
            title: b.intl.formatToPlainString(b.t["d+6kzl"], { guildName: n?.name }),
            actions: [
                { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: G },
                { variant: "primary", text: b.intl.string(b.t.Np4yXU), onClick: A },
            ],
            transitionState: v,
            onClose: G,
            children: (0, i.jsx)("form", {
                onSubmit: A,
                children: (0, i.jsx)(o.ksK, {
                    label: b.intl.string(b.t.pt6jhx),
                    placeholder: b.intl.string(b.t.RfWvWI),
                    description: b.intl.string(b.t.VAaqfF),
                    onChange: (e) => {
                        x(e);
                    },
                    error: p?.getFirstFieldErrorMessage("name"),
                    value: C,
                }),
            }),
        })
    );
}
