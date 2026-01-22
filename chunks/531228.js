r.d(t, { A: () => f });
var a = r(1139),
    n = r(106526),
    s = r(64700),
    o = r(223108),
    i = r.n(o),
    c = r(431384),
    l = ["data"];
function u(e) {
    var t = Object.getOwnPropertyNames(e).length;
    return "".concat(t, " ").concat(1 !== t ? "keys" : "key");
}
var b = function (e) {
    var t = e.data,
        r = (0, n.A)(e, l);
    return s.createElement(
        c.A,
        (0, a.A)({}, r, {
            data: t,
            nodeType: "Object",
            nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
            createItemString: u,
            expandable: Object.getOwnPropertyNames(t).length > 0,
        }),
    );
};
b.propTypes = {
    data: i().object,
    nodeType: i().string.isRequired,
};
let f = b;
