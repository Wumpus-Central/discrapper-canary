"use strict";
n.d(t, { m: () => o });
var i = n(976860),
    r = n(830543),
    s = n(814793),
    a = n(652215);
function o(e) {
    let { fromContent: t, questId: n } = e;
    (0, s.jQ)({ questId: n, fromContent: t });
    let o = null != n ? `#${n}` : "";
    (0, r.default)(), (0, i.pX)(a.BVt.QUEST_HOME + o);
}
