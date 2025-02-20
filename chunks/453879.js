n.d(t, { v: () => o }), n(47120), n(653041);
var r = n(975984),
    i = n(75666),
    l = n(388032);
function o(e, t) {
    if (t !== i.AR.ALL)
        return [
            {
                entries: (0, r.TR)(e),
                appendEndCard: !0
            }
        ];
    let n = [],
        o = (0, r.Lz)(e),
        a = new Set(o.map((e) => e.guildId));
    o.length > 0 &&
        n.push({
            header: l.NW.string(l.t.CbaapK),
            entries: o,
            appendEndCard: !1
        });
    let s = e.filter((e) => !a.has(e.guildId));
    return (
        (s = (0, r.Th)(s)).length > 0 &&
            n.push({
                header: l.NW.string(l.t.wxbhER),
                entries: s,
                appendEndCard: !0
            }),
        n
    );
}
