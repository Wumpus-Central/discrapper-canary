n.d(t, { $N: () => a, Hd: () => o, NX: () => s, xE: () => l });
var r = n(875565);
let i = n(978862).O;
function o(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n,
            o = e,
            a = [],
            s = 0,
            l = 0,
            c = Array.isArray(t) ? t : t.keyAttrs,
            u = (!Array.isArray(t) && t.maxStringLength) || 80;
        for (
            ;
            o &&
            s++ < 5 &&
            ((n = (function (e, t) {
                let n = [];
                if (!e || !e.tagName) return "";
                if (i.HTMLElement && e instanceof HTMLElement && e.dataset) {
                    if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                n.push(e.tagName.toLowerCase());
                let o = t && t.length ? t.filter((t) => e.getAttribute(t)).map((t) => [t, e.getAttribute(t)]) : null;
                if (o && o.length)
                    o.forEach((e) => {
                        n.push(`[${e[0]}="${e[1]}"]`);
                    });
                else {
                    e.id && n.push(`#${e.id}`);
                    let t = e.className;
                    if (t && (0, r.Kg)(t)) for (let e of t.split(/\s+/)) n.push(`.${e}`);
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                    let r = e.getAttribute(t);
                    r && n.push(`[${t}="${r}"]`);
                }
                return n.join("");
            })(o, c)),
            "html" !== n && (!(s > 1) || !(l + 3 * a.length + n.length >= u)));
        )
            a.push(n), (l += n.length), (o = o.parentNode);
        return a.reverse().join(" > ");
    } catch (e) {
        return "<unknown>";
    }
}
function a() {
    try {
        return i.document.location.href;
    } catch (e) {
        return "";
    }
}
function s(e) {
    return i.document && i.document.querySelector ? i.document.querySelector(e) : null;
}
function l(e) {
    if (!i.HTMLElement) return null;
    let t = e;
    for (let e = 0; e < 5 && t; e++) {
        if (t instanceof HTMLElement) {
            if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
            if (t.dataset.sentryElement) return t.dataset.sentryElement;
        }
        t = t.parentNode;
    }
    return null;
}
