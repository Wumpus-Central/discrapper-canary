"use strict";
n.d(t, { m: () => o });
var i = n(976860),
    r = n(830543),
    a = n(814793),
    s = n(369189),
    l = n(652215);
function o(e) {
    let { fromContent: t, questId: n } = e;
    (0, a.jQ)({ questId: n, fromContent: t });
    let o = (0, s.p)() ? (0, i.JK)().location.search : "",
        d = null != n ? `#${n}` : "";
    (0, r.default)(), (0, i.pX)(l.BVt.QUEST_HOME, { search: o, hash: d });
}
