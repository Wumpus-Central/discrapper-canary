r.d(t, {
    Nz: () => s,
    o9: () => l
}),
    r(35282);
var n,
    s = (((n = {}).PHONE = 'phone'), (n.EMAIL = 'email'), n);
let i = /^[-() \d]+$/,
    a = (e) => e.startsWith('+');
function l(e, t) {
    return 'phone' === e ? !a(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
