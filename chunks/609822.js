"use strict";
r.d(t, { A: () => b });
var a = r(1139),
    n = r(106526),
    o = r(64700),
    s = r(223108),
    i = r.n(s),
    l = r(431384),
    c = ["data"];
function u(e) {
    return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item");
}
var f = function (e) {
    var t = e.data,
        r = (0, n.A)(e, c);
    return o.createElement(
        l.A,
        (0, a.A)({}, r, {
            data: t,
            nodeType: "Array",
            nodeTypeIndicator: "[]",
            createItemString: u,
            expandable: t.length > 0,
        }),
    );
};
f.propTypes = { data: i().array };
let b = f;
