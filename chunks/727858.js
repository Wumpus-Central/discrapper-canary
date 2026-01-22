var r = n(257943),
    i = n(614886),
    a = n(647055),
    s = n(485155),
    o = n(883972).get,
    l = RegExp.prototype,
    c = TypeError;
r &&
    i &&
    s(l, "dotAll", {
        configurable: !0,
        get: function () {
            if (this !== l) {
                if ("RegExp" === a(this)) return !!o(this).dotAll;
                throw new c("Incompatible receiver, RegExp required");
            }
        },
    });
