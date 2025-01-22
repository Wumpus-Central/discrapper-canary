r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
let a = [
        ['position', 'absolute'],
        ['top', '-100px'],
        ['left', '-100px'],
        ['width', '100px'],
        ['height', '100px'],
        ['overflow', 'scroll']
    ],
    o = [
        ['width', '200px'],
        ['height', '200px']
    ];
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = document.createElement('div'),
        r = document.createElement('div');
    for (let [e, r] of a) n.style[e] = r;
    for (let [e, n] of o) r.style[e] = n;
    n.appendChild(r), document.body.appendChild(n), (n.className = e);
    let i = {
        width: n.offsetWidth - n.clientWidth,
        height: n.offsetHeight - n.clientHeight
    };
    return document.body.removeChild(n), i;
}
