var s, r;
n.d(t, {
    Nz: function () {
        return s;
    },
    o9: function () {
        return a;
    }
}),
    ((r = s || (s = {})).PHONE = 'phone'),
    (r.EMAIL = 'email');
let i = /^[-() \d]+$/,
    l = (e) => e.startsWith('+');
function a(e, t) {
    return 'phone' === e ? !l(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
