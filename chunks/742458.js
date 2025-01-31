s.d(t, {
    Nz: () => r,
    o9: () => a
});
var n,
    r = (((n = {}).PHONE = 'phone'), (n.EMAIL = 'email'), n);
let i = /^[-() \d]+$/,
    l = (e) => e.startsWith('+');
function a(e, t) {
    return 'phone' === e ? !l(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
