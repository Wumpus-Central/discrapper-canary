"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(64700),
    l = n(627794),
    r = n(690420);
function a(e) {
    let { guildId: t, triggerType: n } = e,
        a = s.useMemo(() => () => (0, l._I)(t, n), [t, n]),
        [o] = s.useState(a);
    return (0, i.jsx)(r.A, { rule: o });
}
