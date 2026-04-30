"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(783878),
    a = n(716965),
    o = n(985018),
    l = n(551280);
function _(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: _, error: d } = e,
        [u, c] = r.useState(null),
        E = r.useRef(!1);
    if (
        (r.useEffect(() => {
            async function e(e) {
                let n = await (0, a.$Q)(e);
                t === e &&
                    (n.sort((e, t) => e.name.localeCompare(t.name)), c({ guildId: e, channels: n }), (E.current = !0));
            }
            c(null), null == t ? _(null) : e(t);
        }, [_, t]),
        r.useEffect(() => {
            !E.current || (null == u ? null != n && _(null) : u.channels.some((e) => e.id === n) || _(null));
        }, [u, _, n, t]),
        null == t)
    )
        return null;
    let h =
        null == u || u.guildId !== t ? [] : (u?.channels ?? []).map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: l.g,
        children: (0, i.jsx)(s.Z, {
            label: o.intl.string(o.t["8qKd+J"]),
            helperText: o.intl.string(o.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: d,
            onSelectionChange: _,
            placeholder: o.intl.string(o.t["Re/64R"]),
            options: h,
            value: n ?? void 0,
        }),
    });
}
