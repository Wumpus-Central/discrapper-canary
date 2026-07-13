"use strict";
n.d(t, { T: () => o });
var i = n(64700),
    r = n(735438),
    a = n(96203),
    s = n(760716),
    l = n(652215);
function o(e) {
    let t = (0, a.A)({ userId: e }),
        n = (0, s.i)((e) => e.recommendationApplicationIds);
    return i.useMemo(() => (0, r.uniq)([l.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
