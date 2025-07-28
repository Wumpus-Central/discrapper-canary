(r.d(t, {
    Nz: () => s,
    o9: () => o
}),
    r(35282));
var n,
    s = (((n = {}).PHONE = 'phone'), (n.EMAIL = 'email'), n);
let i = /^[-() \d]+$/,
    l = (e) => e.startsWith('+');
function o(e, t) {
    return 'phone' === e ? !l(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
