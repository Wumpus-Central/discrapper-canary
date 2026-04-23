n.d(t, { _: () => a }), n(321073);
var i = n(370876),
    l = n(946116),
    s = n(985018);
function a(e, t) {
    if (t !== l.mU.ALL) return [{ entries: (0, i._t)(e), appendEndCard: !0 }];
    let n = [],
        a = (0, i.A3)(e),
        r = new Set(a.map((e) => e.guildId));
    a.length > 0 && n.push({ header: s.intl.string(s.t.CbaapP), entries: a, appendEndCard: !1 });
    let o = e.filter((e) => !r.has(e.guildId));
    return (
        (o = (0, i.DN)(o)).length > 0 && n.push({ header: s.intl.string(s.t.wxbhEe), entries: o, appendEndCard: !0 }), n
    );
}
