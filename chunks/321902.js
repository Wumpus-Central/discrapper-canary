"use strict";
n.d(t, { T: () => l });
var r = n(64700),
    i = n(735438),
    s = n(96203),
    a = n(760716),
    o = n(652215);
function l(e) {
    let t = (0, s.A)({ userId: e }),
        n = (0, a.i)((e) => e.recommendationApplicationIds);
    return r.useMemo(() => (0, i.uniq)([o.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
