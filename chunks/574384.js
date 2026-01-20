n.d(t, { Z: () => u }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(489863),
    s = n(388032),
    l = n(829478);
let c = 5;
function u(e) {
    var t;
    let { selectedGuildId: n, selectedChannelId: u, onChannelChange: d, error: f } = e,
        [p, _] = i.useState(null),
        h = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let t = await (0, o.UR)(e);
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
            h.current && (null == p ? null != u && d(null) : p.channels.some((e) => e.id === u) || d(null));
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
        className: l.selector,
        children: (0, r.jsx)(a.VcW, {
            label: s.intl.string(s.t["8qKd+J"]),
            helperText: s.intl.string(s.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: c,
            errorMessage: f,
            onSelectionChange: d,
            placeholder: s.intl.string(s.t["Re/64R"]),
            options: m,
            value: null != u ? u : void 0,
        }),
    });
}
