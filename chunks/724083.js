var r = n(840475),
    i = n(569743),
    a = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)(
    "of",
    function () {
        for (var e = 0, t = arguments.length, n = new (a(this))(t); t > e; ) n[e] = arguments[e++];
        return n;
    },
    i,
);
