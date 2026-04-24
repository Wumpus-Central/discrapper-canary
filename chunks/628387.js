s.d(t, { Pd: () => n, Vl: () => r });
var l,
    n = (((l = {}).PHONE = "phone"), (l.EMAIL = "email"), l);
let a = /^[-() \d]+$/;
function r(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && a.test(t);
}
