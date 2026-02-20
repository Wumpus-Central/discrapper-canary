"use strict";
n.d(t, { Hd: () => a });
var r = n(875565);
let i = n(978862).O,
    s = 80;
function a(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n,
            r = e,
            i = 5,
            a = [],
            l = 0,
            u = 0,
            c = " > ",
            d = c.length,
            _ = Array.isArray(t) ? t : t.keyAttrs,
            f = (!Array.isArray(t) && t.maxStringLength) || s;
        for (; r && l++ < i && ((n = o(r, _)), "html" !== n && (!(l > 1) || !(u + a.length * d + n.length >= f))); )
            a.push(n), (u += n.length), (r = r.parentNode);
        return a.reverse().join(c);
    } catch (e) {
        return "<unknown>";
    }
}
function o(e, t) {
    let n = e,
        s = [];
    if (!n || !n.tagName) return "";
    if (i.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    s.push(n.tagName.toLowerCase());
    let a = t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
    if (a && a.length)
        a.forEach((e) => {
            s.push(`[${e[0]}="${e[1]}"]`);
        });
    else {
        n.id && s.push(`#${n.id}`);
        let e = n.className;
        if (e && (0, r.Kg)(e)) for (let t of e.split(/\s+/)) s.push(`.${t}`);
    }
    for (let e of ["aria-label", "type", "name", "title", "alt"]) {
        let t = n.getAttribute(e);
        t && s.push(`[${e}="${t}"]`);
    }
    return s.join("");
}
