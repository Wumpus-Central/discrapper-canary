r.d(
    t,
    {},
    {
        O: function (e) {
            return null !== e && "object" == typeof e && !Array.isArray(e);
        },
        V: function (e) {
            let t = typeof e;
            if ("object" == t) {
                if (Array.isArray(e)) return "array";
                if (null === e) return "null";
            }
            return t;
        },
    },
);
