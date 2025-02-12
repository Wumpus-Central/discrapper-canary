n.d(t, { v: () => r }), n(47120), n(653041);
var i = n(975984),
    l = n(75666),
    a = n(388032);
function r(e, t) {
    if (t !== l.AR.ALL)
        return [
            {
                entries: (0, i.TR)(e),
                appendEndCard: !0
            }
        ];
    let n = [],
        r = (0, i.Lz)(e),
        s = new Set(r.map((e) => e.guildId));
    r.length > 0 &&
        n.push({
            header: a.intl.string(a.t.CbaapK),
            entries: r,
            appendEndCard: !1
        });
    let o = e.filter((e) => !s.has(e.guildId));
    return (
        (o = (0, i.Th)(o)).length > 0 &&
            n.push({
                header: a.intl.string(a.t.wxbhER),
                entries: o,
                appendEndCard: !0
            }),
        n
    );
}
