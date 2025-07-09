(n.d(t, {
    Nz: () => s,
    o9: () => a
}),
    n(35282));
var r,
    s = (((r = {}).PHONE = 'phone'), (r.EMAIL = 'email'), r);
let i = /^[-() \d]+$/,
    l = (e) => e.startsWith('+');
function a(e, t) {
    return 'phone' === e ? !l(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
