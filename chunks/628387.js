n.d(t, { Pd: () => r, Vl: () => i });
var s,
    r = (((s = {}).PHONE = "phone"), (s.EMAIL = "email"), s);
let a = /^[-() \d]+$/;
function i(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && a.test(t);
}
