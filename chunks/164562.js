let i;
var r = n(70283),
    a = n(982240);
let s = [],
    l = s;
function o(e) {
    return (
        e !== i &&
            ((i = e),
            (l =
                null == e
                    ? s
                    : e.map((e) => ({
                          name: e.name ?? "",
                          threshold: (0, a.rL)(e),
                          icon: e.simple_icon_url,
                          largeIcon: e.complex_icon_static_url,
                      })))),
        l
    );
}
n.d(
    t,
    {},
    {
        VL: function (e, t) {
            let n = -1;
            for (let i = 0; i < e.length; i++) t >= e[i].threshold && (n = i);
            return n;
        },
        XN: o,
        ol: function () {
            return o(a.Ay.getBadgeById(r.$.ORB_VOID)?.tiers);
        },
    },
);
