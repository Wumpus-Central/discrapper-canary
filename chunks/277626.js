"use strict";
var r = n(834647),
    a = n(241091),
    o = n(280173),
    i = n(463843),
    s = n(381568),
    l = i.Map,
    c = i.set;
r(
    { target: "Map", proto: !0, real: !0, forced: !0 },
    {
        mapKeys: function (e) {
            var t = o(this),
                n = a(e, arguments.length > 1 ? arguments[1] : void 0),
                r = new l();
            return (
                s(t, function (e, a) {
                    c(r, n(e, a, t), e);
                }),
                r
            );
        },
    },
);
