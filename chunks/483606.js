var r = n(557939),
    i = n(410323),
    a = n(321727),
    o = n(304880),
    u = i("".charCodeAt);
r(
    { target: "String", proto: !0 },
    {
        isWellFormed: function () {
            for (var e = o(a(this)), t = e.length, n = 0; n < t; n++) {
                var r = u(e, n);
                if ((63488 & r) == 55296 && (r >= 56320 || ++n >= t || (64512 & u(e, n)) != 56320)) return !1;
            }
            return !0;
        },
    },
);
