var r = n(834647),
    a = n(675879),
    o = n(924230),
    i = n(693755),
    s = n(57284),
    l = n(37275),
    c = a("".indexOf);
r(
    {
        target: "String",
        proto: !0,
        forced: !l("includes"),
    },
    {
        includes: function (e) {
            return !!~c(s(i(this)), s(o(e)), arguments.length > 1 ? arguments[1] : void 0);
        },
    },
);
