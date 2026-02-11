"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(716965),
    o = n(985018),
    l = n(740837);
let u = 5;
function c(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: c, error: d } = e,
        [_, f] = i.useState(null),
        h = i.useRef(!1);
    if (
        (i.useEffect(() => {
            async function e(e) {
                let n = await (0, s.$Q)(e);
                t === e &&
                    (n.sort((e, t) => e.name.localeCompare(t.name)), f({ guildId: e, channels: n }), (h.current = !0));
            }
            f(null), null == t ? c(null) : e(t);
        }, [c, t]),
        i.useEffect(() => {
            !h.current || (null == _ ? null != n && c(null) : _.channels.some((e) => e.id === n) || c(null));
        }, [_, c, n, t]),
        null == t)
    )
        return null;
    let p =
        null == _ || _.guildId !== t ? [] : (_?.channels ?? []).map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(a.ZiE, {
            label: o.intl.string(o.t["8qKd+J"]),
            helperText: o.intl.string(o.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: u,
            errorMessage: d,
            onSelectionChange: c,
            placeholder: o.intl.string(o.t["Re/64R"]),
            options: p,
            value: n ?? void 0,
        }),
    });
}
