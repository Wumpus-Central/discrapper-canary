n.d(t, { default: () => p }), n(896048);
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(732955),
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
        n = (0, l.bG)([h.A], () => h.A.getGuild(t)),
        [p, k] = a.useState(null),
        [C, v] = a.useState(""),
        { createMultipleConfettiAt: x } = a.useContext(d.x),
        m = (0, l.bG)([u.A], () => u.A.useReducedMotion, []),
        w = async (t) => {
            let { onClose: n, guildId: i } = e;
            t.preventDefault(), k(null);
            try {
                await (0, c.T)(i, { nick: C }), null == n || n();
            } catch (e) {
                k(new s.LG(e));
            }
        },
        { transitionState: A, onClose: G } = e,
        S = h.A.getGuildsArray().filter((e) => e.id !== t && e.features.has(f.GuildFeatures.HUB)).length > 0,
        y = !m && !S && (null == n ? void 0 : n.features.has(f.GuildFeatures.HUB)) && (0, g.a)();
    return (
        a.useEffect(() => {
            y && x(window.innerWidth / 2, window.innerHeight / 2);
        }, [x, y]),
        (0, i.jsx)(r.aFV, {
            title: b.intl.formatToPlainString(b.t["d+6kzl"], { guildName: null == n ? void 0 : n.name }),
            actions: [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oC"]),
                    onClick: G,
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t.Np4yXU),
                    onClick: w,
                },
            ],
            transitionState: A,
            onClose: G,
            children: (0, i.jsx)("form", {
                onSubmit: w,
                children: (0, i.jsx)(o.ksK, {
                    label: b.intl.string(b.t.pt6jhx),
                    placeholder: b.intl.string(b.t.RfWvWI),
                    description: b.intl.string(b.t.VAaqfF),
                    onChange: (e) => {
                        v(e);
                    },
                    error: null == p ? void 0 : p.getFirstFieldErrorMessage("name"),
                    value: C,
                }),
            }),
        })
    );
}
