var r = {
        ECB: n(706584),
        CBC: n(100653),
        CFB: n(836997),
        CFB8: n(210856),
        CFB1: n(880767),
        OFB: n(689941),
        CTR: n(869133),
        GCM: n(869133)
    },
    i = n(313739);
for (var o in i) i[o].module = r[i[o].mode];
e.exports = i;
