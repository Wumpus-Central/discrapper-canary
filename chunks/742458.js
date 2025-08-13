n.d(t, {
    Nz: () => s,
    o9: () => l,
}),
    n(35282);
var r,
    s = (((r = {}).PHONE = "phone"), (r.EMAIL = "email"), r);
let i = /^[-() \d]+$/,
    a = (e) => e.startsWith("+");
function l(e, t) {
    return "phone" === e ? !a(t) : "email" !== e && !(t.length < 3) && i.test(t);
}
