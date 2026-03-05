n.d(t, { A: () => d });
var i = n(311907),
    r = n(73153);
let l = !!(null != window && "navigation" in window) && (window.navigation.canGoBack ?? !1),
    a = !!(null != window && "navigation" in window) && (window.navigation.canGoForward ?? !1);
function s() {
    "navigation" in window && ((l = window.navigation.canGoBack ?? !1), (a = window.navigation.canGoForward ?? !1));
}
class o extends i.Ay.Store {
    static displayName = "BackForwardNavStore";
    get canGoBack() {
        return l;
    }
    get canGoForward() {
        return a;
    }
}
let d = new o(r.h, { ROUTE_CHANGED: s, LOGOUT: s });
