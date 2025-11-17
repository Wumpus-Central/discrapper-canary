n.d(t, {
    fU: () => d,
    nG: () => l,
    tv: () => s,
});
var r = n(928276),
    i = n(21814),
    a = n(473749);
let o = (0, a.createContext)({
    isNative: !0,
    open: u,
    useHref: (e) => e,
});
function s() {
    return (0, a.useContext)(o);
}
function l(e, t, n = !0) {
    var a, o;
    let { metaKey: s, ctrlKey: c, altKey: u, shiftKey: d } = t;
    (0, i.vU)() &&
        (null == (o = window.event) || null == (a = o.type) ? void 0 : a.startsWith("key")) &&
        "_blank" === e.target &&
        ((0, i.V5)() ? (s = !0) : (c = !0));
    let f =
        (0, i.Pf)() && (0, i.V5)() && !(0, i.zc)() && 1
            ? new KeyboardEvent("keydown", {
                  keyIdentifier: "Enter",
                  metaKey: s,
                  ctrlKey: c,
                  altKey: u,
                  shiftKey: d,
              })
            : new MouseEvent("click", {
                  metaKey: s,
                  ctrlKey: c,
                  altKey: u,
                  shiftKey: d,
                  bubbles: !0,
                  cancelable: !0,
              });
    (l.isOpening = n), (0, r.A)(e), e.dispatchEvent(f), (l.isOpening = !1);
}
function c(e, t) {
    if (e instanceof HTMLAnchorElement) t(e);
    else if (e.hasAttribute("data-href")) {
        let n = document.createElement("a");
        (n.href = e.getAttribute("data-href")),
            e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")),
            e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")),
            e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")),
            e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")),
            e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")),
            e.appendChild(n),
            t(n),
            e.removeChild(n);
    }
}
function u(e, t) {
    c(e, (e) => l(e, t));
}
function d(e) {
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
