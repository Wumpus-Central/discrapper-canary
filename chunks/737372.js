var i = {
        ECB: n(706584),
        CBC: n(100653),
        CFB: n(836997),
        CFB8: n(210856),
        CFB1: n(880767),
        OFB: n(689941),
        CTR: n(869133),
        GCM: n(869133)
    },
    r = n(313739);
for (var a in r) r[a].module = i[r[a].mode];
e.exports = r;
