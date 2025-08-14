n.d(t, {
    Nz: () => s,
    o9: () => a,
}),
    n(35282);
var r,
    s = (((r = {}).PHONE = "phone"), (r.EMAIL = "email"), r);
let i = /^[-() \d]+$/;
function a(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && i.test(t);
}
