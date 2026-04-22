"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(783878),
    a = n(716965),
    o = n(985018),
    l = n(551280);
function u(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: u, error: d } = e,
        [c, _] = i.useState(null),
        f = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let n = await (0, a.$Q)(e);
                t === e &&
                    (n.sort((e, t) => e.name.localeCompare(t.name)), _({ guildId: e, channels: n }), (f.current = !0));
            }
            _(null), null == t ? u(null) : e(t);
        }, [u, t]),
        i.useEffect(() => {
            !f.current || (null == c ? null != n && u(null) : c.channels.some((e) => e.id === n) || u(null));
        }, [c, u, n, t]),
        null == t)
    )
        return null;
    let E =
        null == c || c.guildId !== t ? [] : (c?.channels ?? []).map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(s.Z, {
            label: o.intl.string(o.t["8qKd+J"]),
            helperText: o.intl.string(o.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: d,
            onSelectionChange: u,
            placeholder: o.intl.string(o.t["Re/64R"]),
            options: E,
            value: n ?? void 0,
        }),
    });
}
