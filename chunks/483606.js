var u = r(557939),
    n = r(410323),
    a = r(321727),
    o = r(304880),
    i = n("".charCodeAt);
u(
    { target: "String", proto: !0 },
    {
        isWellFormed: function () {
            for (var e = o(a(this)), t = e.length, r = 0; r < t; r++) {
                var u = i(e, r);
                if ((63488 & u) == 55296 && (u >= 56320 || ++r >= t || (64512 & i(e, r)) != 56320)) return !1;
            }
            return !0;
        },
    },
);
