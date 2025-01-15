var s, r;
n.d(e, {
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
    l = (t) => t.startsWith('+');
function a(t, e) {
    return 'phone' === t ? !l(e) : 'email' !== t && !(e.length < 3) && i.test(e);
}
