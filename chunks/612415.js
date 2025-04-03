r.d(t, { Z: () => b });
var a = r(910974),
    n = r(190293),
    s = r(192379),
    o = r(639519),
    i = r.n(o),
    c = r(247595),
    l = ['data'];
function u(e) {
    var t = Object.getOwnPropertyNames(e).length;
    return ''.concat(t, ' ').concat(1 !== t ? 'keys' : 'key');
}
var f = function (e) {
    var t = e.data,
        r = (0, n.Z)(e, l);
    return s.createElement(
        c.Z,
        (0, a.Z)({}, r, {
            data: t,
            nodeType: 'Object',
            nodeTypeIndicator: 'Error' === r.nodeType ? 'Error()' : '{}',
            createItemString: u,
            expandable: Object.getOwnPropertyNames(t).length > 0
        })
    );
};
f.propTypes = {
    data: i().object,
    nodeType: i().string.isRequired
};
let b = f;
