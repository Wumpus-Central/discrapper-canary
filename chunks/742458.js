r.d(t, {
    Nz: () => s,
    o9: () => o,
}),
    r(35282);
var n,
    s = (((n = {}).PHONE = "phone"), (n.EMAIL = "email"), n);
let i = /^[-() \d]+$/;
function o(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && i.test(t);
}
