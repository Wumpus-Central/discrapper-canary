var i = d(49954);
d.d(
    t,
    {},
    {
        n: function (l, t) {
            return "granted" === l && !0 === t && !(0, i.a)();
        },
        r: function (l, t) {
            return "granted" === l || "denied" === l || "prompt" === l || "refresh" === l ? l : t;
        },
        t: function (l, t) {
            return "granted" === l && (!0 !== t || (0, i.a)());
        },
    },
);
