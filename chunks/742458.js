r.d(t, {
    Nz: () => s,
    o9: () => a
}),
    r(35282);
var n,
    s = (((n = {}).PHONE = 'phone'), (n.EMAIL = 'email'), n);
let i = /^[-() \d]+$/,
    l = (e) => e.startsWith('+');
function a(e, t) {
    return 'phone' === e ? !l(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
