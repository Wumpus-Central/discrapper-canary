"use strict";
var n = e(834647),
    o = e(664886),
    s = e(529030),
    i = e(539488),
    u = e(696273),
    c = e(459547);
n(
    {
        target: "Date",
        proto: !0,
        forced: e(486816)(function () {
            return (
                null !== new Date(NaN).toJSON() ||
                1 !==
                    o(Date.prototype.toJSON, {
                        toISOString: function () {
                            return 1;
                        },
                    })
            );
        }),
    },
    {
        toJSON: function (t) {
            var r = s(this),
                e = i(r, "number");
            return "number" != typeof e || isFinite(e)
                ? "toISOString" in r || "Date" !== c(r)
                    ? r.toISOString()
                    : o(u, r)
                : null;
        },
    },
);
