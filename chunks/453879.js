n.d(t, { v: () => a }), n(388685), n(539854);
var r = n(975984),
    i = n(75666),
    l = n(388032);
function a(e, t) {
    if (t !== i.AR.ALL)
        return [
            {
                entries: (0, r.TR)(e),
                appendEndCard: !0,
            },
        ];
    let n = [],
        a = (0, r.Lz)(e),
        s = new Set(a.map((e) => e.guildId));
    a.length > 0 &&
        n.push({
            header: l.intl.string(l.t.CbaapP),
            entries: a,
            appendEndCard: !1,
        });
    let o = e.filter((e) => !s.has(e.guildId));
    return (
        (o = (0, r.Th)(o)).length > 0 &&
            n.push({
                header: l.intl.string(l.t.wxbhEe),
                entries: o,
                appendEndCard: !0,
            }),
        n
    );
}
