r.d(n, {
    NW: function () {
        return o;
    },
    tf: function () {
        return a;
    },
    zH: function () {
        return s;
    }
});
var i = r(192379),
    a = function (e) {
        return (0, i.useEffect)(e, []);
    },
    o = function () {
        var e = (0, i.useState)(0)[1],
            n = (0, i.useRef)(!1);
        return (
            a(function () {
                return function () {
                    n.current = !0;
                };
            }),
            function () {
                !n.current && e({});
            }
        );
    };
function s(e) {
    var n = (0, i.useRef)(void 0);
    return (
        (0, i.useEffect)(function () {
            n.current = e;
        }),
        n.current
    );
}
