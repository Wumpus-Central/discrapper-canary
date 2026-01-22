n.d(t, {
    _: () => a,
}),
    n(896048),
    n(321073);
var r = n(370876),
    l = n(946116),
    i = n(985018);

function a(e, t) {
    if (t !== l.mU.ALL)
        return [
            {
                entries: (0, r._t)(e),
                appendEndCard: !0,
            },
        ];
    let n = [],
        a = (0, r.A3)(e),
        s = new Set(a.map((e) => e.guildId));
    a.length > 0 &&
        n.push({
            header: i.intl.string(i.t.CbaapP),
            entries: a,
            appendEndCard: !1,
        });
    let o = e.filter((e) => !s.has(e.guildId));
    return (
        (o = (0, r.DN)(o)).length > 0 &&
            n.push({
                header: i.intl.string(i.t.wxbhEe),
                entries: o,
                appendEndCard: !0,
            }),
        n
    );
}
