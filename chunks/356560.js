"use strict";
n.d(t, { Fe: () => l, HI: () => u, rd: () => s });
var r = n(20853),
    i = n(361037),
    a = n(582128);
let o = (0, a.createContext)({
    isNative: !0,
    open: function (e, t) {
        if (e instanceof HTMLAnchorElement) l(e, t);
        else if (e.hasAttribute("data-href")) {
            let n = document.createElement("a");
            (n.href = e.getAttribute("data-href")),
                e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")),
                e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")),
                e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")),
                e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")),
                e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")),
                e.appendChild(n),
                l(n, t),
                e.removeChild(n);
        }
    },
    useHref: (e) => e,
});
function s() {
    return (0, a.useContext)(o);
}
function l(e, t, n = !0) {
    var a, o;
    let { metaKey: s, ctrlKey: u, altKey: c, shiftKey: d } = t;
    (0, i.gm)() &&
        (null == (o = window.event) || null == (a = o.type) ? void 0 : a.startsWith("key")) &&
        "_blank" === e.target &&
        ((0, i.cX)() ? (s = !0) : (u = !0));
    let f =
        (0, i.Tc)() && (0, i.cX)() && !(0, i.bh)() && 1
            ? new KeyboardEvent("keydown", { keyIdentifier: "Enter", metaKey: s, ctrlKey: u, altKey: c, shiftKey: d })
            : new MouseEvent("click", { metaKey: s, ctrlKey: u, altKey: c, shiftKey: d, bubbles: !0, cancelable: !0 });
    (l.isOpening = n), (0, r.e)(e), e.dispatchEvent(f), (l.isOpening = !1);
}
function u(e) {
    var t;
    let n = s().useHref(null != (t = e.href) ? t : "");
    return {
        "data-href": e.href ? n : void 0,
        "data-target": e.target,
        "data-rel": e.rel,
        "data-download": e.download,
        "data-ping": e.ping,
        "data-referrer-policy": e.referrerPolicy,
    };
}
l.isOpening = !1;
