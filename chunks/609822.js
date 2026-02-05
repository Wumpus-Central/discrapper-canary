"use strict";
r.d(t, { A: () => f });
var a = r(1139),
    n = r(106526),
    s = r(64700),
    o = r(223108),
    i = r.n(o),
    c = r(431384),
    l = ["data"];
function u(e) {
    return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item");
}
var b = function (e) {
    var t = e.data,
        r = (0, n.A)(e, l);
    return s.createElement(
        c.A,
        (0, a.A)({}, r, {
            data: t,
            nodeType: "Array",
            nodeTypeIndicator: "[]",
            createItemString: u,
            expandable: t.length > 0,
        }),
    );
};
b.propTypes = { data: i().array };
let f = b;
