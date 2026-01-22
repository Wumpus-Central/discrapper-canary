n.d(t, { A: () => u }), n(896048), n(638769);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(716965),
    o = n(985018),
    l = n(80739);
let c = 5;
function u(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: u, onChannelChange: d, error: f } = e,
        [p, _] = i.useState(null),
        h = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let t = await (0, s.$Q)(e);
                n === e &&
                    (t.sort((e, t) => e.name.localeCompare(t.name)),
                    _({
                        guildId: e,
                        channels: t,
                    }),
                    (h.current = !0));
            }
            _(null), null == n ? d(null) : e(n);
        }, [d, n]),
        i.useEffect(() => {
            !h.current || (null == p ? null != u && d(null) : p.channels.some((e) => e.id === u) || d(null));
        }, [p, d, u, n]),
        null == n)
    )
        return null;
    let m =
        null == p || p.guildId !== n
            ? []
            : (null != (t = null == p ? void 0 : p.channels) ? t : []).map((e) => ({
                  id: e.id,
                  value: e.id,
                  label: e.name,
              }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(a.ZiE, {
            label: o.intl.string(o.t["8qKd+J"]),
            helperText: o.intl.string(o.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: c,
            errorMessage: f,
            onSelectionChange: d,
            placeholder: o.intl.string(o.t["Re/64R"]),
            options: m,
            value: null != u ? u : void 0,
        }),
    });
}
