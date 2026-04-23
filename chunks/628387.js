s.d(t, { Pd: () => n, Vl: () => a });
var r,
    n = (((r = {}).PHONE = "phone"), (r.EMAIL = "email"), r);
let l = /^[-() \d]+$/;
function a(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && l.test(t);
}
