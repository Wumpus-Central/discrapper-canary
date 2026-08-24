"use strict";
r.d(t, { Fe: () => l, HI: () => u, rd: () => s });
var n = r(20853),
    i = r(361037),
    o = r(582128);
let a = (0, o.createContext)({
    isNative: !0,
    open: function (e, t) {
        if (e instanceof HTMLAnchorElement) l(e, t);
        else if (e.hasAttribute("data-href")) {
            let r = document.createElement("a");
            (r.href = e.getAttribute("data-href")),
                e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")),
                e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")),
                e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")),
                e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")),
                e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")),
                e.appendChild(r),
                l(r, t),
                e.removeChild(r);
        }
    },
    useHref: (e) => e,
});
function s() {
    return (0, o.useContext)(a);
}
function l(e, t, r = !0) {
    var o, a;
    let { metaKey: s, ctrlKey: u, altKey: c, shiftKey: f } = t;
    (0, i.gm)() &&
        (null == (a = window.event) || null == (o = a.type) ? void 0 : o.startsWith("key")) &&
        "_blank" === e.target &&
        ((0, i.cX)() ? (s = !0) : (u = !0));
    let d =
        (0, i.Tc)() && (0, i.cX)() && !(0, i.bh)() && 1
            ? new KeyboardEvent("keydown", { keyIdentifier: "Enter", metaKey: s, ctrlKey: u, altKey: c, shiftKey: f })
            : new MouseEvent("click", { metaKey: s, ctrlKey: u, altKey: c, shiftKey: f, bubbles: !0, cancelable: !0 });
    (l.isOpening = r), (0, n.e)(e), e.dispatchEvent(d), (l.isOpening = !1);
}
function u(e) {
    var t;
    let r = s().useHref(null != (t = e.href) ? t : "");
    return {
        "data-href": e.href ? r : void 0,
        "data-target": e.target,
        "data-rel": e.rel,
        "data-download": e.download,
        "data-ping": e.ping,
        "data-referrer-policy": e.referrerPolicy,
    };
}
l.isOpening = !1;
