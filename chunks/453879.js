n.d(t, { v: () => a }), n(388685), n(539854);
var r = n(975984),
    i = n(75666),
    l = n(388032);
function a(e, t) {
    if (t !== i.AR.ALL)
        return [
            {
                entries: (0, r.TR)(e),
                appendEndCard: !0
            }
        ];
    let n = [],
        a = (0, r.Lz)(e),
        o = new Set(a.map((e) => e.guildId));
    a.length > 0 &&
        n.push({
            header: l.intl.string(l.t.CbaapK),
            entries: a,
            appendEndCard: !1
        });
    let s = e.filter((e) => !o.has(e.guildId));
    return (
        (s = (0, r.Th)(s)).length > 0 &&
            n.push({
                header: l.intl.string(l.t.wxbhER),
                entries: s,
                appendEndCard: !0
            }),
        n
    );
}
