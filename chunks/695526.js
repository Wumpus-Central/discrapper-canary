var i = n(855986),
    r = n(287809),
    l = n(474090),
    s = n(682901),
    a = n(792996);
n.d(
    t,
    {},
    {
        o9: function (e) {
            return "upgrade" === e ? a.t.KfitWs : "acquire" === e ? a.t.Sqrz1V : a.t.yZOtoD;
        },
        qH: function () {
            return (0, i.bG)([r.default], () => {
                let e = r.default.getCurrentUser();
                return (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t
                        ? "staff"
                        : (0, l.CC)(e, s.PremiumTypes.TIER_2)
                          ? "entitled"
                          : null != e
                            ? "upgrade"
                            : "acquire";
                })(e?.premiumType, e?.isStaff() ?? !1);
            });
        },
        yh: function (e) {
            return "upgrade" === e || "acquire" === e;
        },
    },
);
