s.d(t, { Pd: () => n, Vl: () => i });
var r,
    n = (((r = {}).PHONE = "phone"), (r.EMAIL = "email"), r);
let a = /^[-() \d]+$/;
function i(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && a.test(t);
}
