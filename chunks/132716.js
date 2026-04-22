"use strict";
n.d(t, { Fe: () => l, HI: () => u, rd: () => o });
var r = n(401705),
    i = n(408713),
    s = n(64700);
let a = (0, s.createContext)({
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
function o() {
    return (0, s.useContext)(a);
}
function l(e, t, n = !0) {
    var s, a;
    let { metaKey: o, ctrlKey: u, altKey: d, shiftKey: c } = t;
    (0, i.gm)() &&
        (null == (a = window.event) || null == (s = a.type) ? void 0 : s.startsWith("key")) &&
        "_blank" === e.target &&
        ((0, i.cX)() ? (o = !0) : (u = !0));
    let _ =
        (0, i.Tc)() && (0, i.cX)() && !(0, i.bh)() && 1
            ? new KeyboardEvent("keydown", { keyIdentifier: "Enter", metaKey: o, ctrlKey: u, altKey: d, shiftKey: c })
            : new MouseEvent("click", { metaKey: o, ctrlKey: u, altKey: d, shiftKey: c, bubbles: !0, cancelable: !0 });
    (l.isOpening = n), (0, r.e)(e), e.dispatchEvent(_), (l.isOpening = !1);
}
function u(e) {
    var t;
    let n = o().useHref(null != (t = e.href) ? t : "");
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
