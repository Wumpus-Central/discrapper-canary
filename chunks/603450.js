n.d(t, {
    A: () => u,
    l: () => c,
});
var r = n(21814),
    i = n(477232),
    a = n(890532);
let o = "default",
    s = "",
    l = new WeakMap();
function c(e) {
    if ((0, r.gn)()) {
        if ("default" === o) {
            let t = (0, i.r3)(e);
            (s = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = "none");
        }
        o = "disabled";
    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        l.set(e, e.style[t]), (e.style[t] = "none");
    }
}
function u(e) {
    if ((0, r.gn)())
        "disabled" === o &&
            ((o = "restoring"),
            setTimeout(() => {
                (0, a.Q)(() => {
                    if ("restoring" === o) {
                        let t = (0, i.r3)(e);
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = s || ""),
                            (s = ""),
                            (o = "default");
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
        let t = l.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        "none" === e.style[n] && (e.style[n] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            l.delete(e);
    }
}
