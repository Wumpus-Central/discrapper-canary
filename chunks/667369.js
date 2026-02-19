"use strict";
n.d(t, { _: () => r }), n(321073);
var i = n(370876),
    s = n(946116),
    l = n(985018);
function r(e, t) {
    if (t !== s.mU.ALL) return [{ entries: (0, i._t)(e), appendEndCard: !0 }];
    let n = [],
        r = (0, i.A3)(e),
        a = new Set(r.map((e) => e.guildId));
    r.length > 0 && n.push({ header: l.intl.string(l.t.CbaapP), entries: r, appendEndCard: !1 });
    let o = e.filter((e) => !a.has(e.guildId));
    return (
        (o = (0, i.DN)(o)).length > 0 && n.push({ header: l.intl.string(l.t.wxbhEe), entries: o, appendEndCard: !0 }), n
    );
}
