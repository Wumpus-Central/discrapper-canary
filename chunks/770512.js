r.d(t, { Z: () => l });
var n = r(473749),
    o = r(857614),
    a = r(329022),
    i = r(291413);
let l = function (e) {
    var t = e.onClick,
        r = e.onSwatchHover,
        l = e.group,
        s = e.active,
        u = (0, o.default)({
            default: {
                group: {
                    paddingBottom: "10px",
                    width: "40px",
                    float: "left",
                    marginRight: "10px",
                },
            },
        });
    return n.createElement(
        "div",
        { style: u.group },
        (0, a.Z)(l, function (e, o) {
            return n.createElement(i.Z, {
                key: e,
                color: e,
                active: e.toLowerCase() === s,
                first: 0 === o,
                last: o === l.length - 1,
                onClick: t,
                onSwatchHover: r,
            });
        }),
    );
};
