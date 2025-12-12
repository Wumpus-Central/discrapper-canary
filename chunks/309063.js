n.d(t, {
    Rt: () => a,
    iY: () => s,
    l4: () => o,
    qT: () => _,
});
var r = n(661822);
let i = n(606093).n;
function a(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n,
            a = e,
            o = [],
            _ = 0,
            s = 0,
            c = Array.isArray(t) ? t : t.keyAttrs,
            E = (!Array.isArray(t) && t.maxStringLength) || 80;
        for (
            ;
            a &&
            _++ < 5 &&
            ((n = (function (e, t) {
                let n = [];
                if (!e || !e.tagName) return "";
                if (i.HTMLElement && e instanceof HTMLElement && e.dataset) {
                    if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                n.push(e.tagName.toLowerCase());
                let a = t && t.length ? t.filter((t) => e.getAttribute(t)).map((t) => [t, e.getAttribute(t)]) : null;
                if (a && a.length)
                    a.forEach((e) => {
                        n.push(`[${e[0]}="${e[1]}"]`);
                    });
                else {
                    e.id && n.push(`#${e.id}`);
                    let t = e.className;
                    if (t && (0, r.HD)(t)) for (let e of t.split(/\s+/)) n.push(`.${e}`);
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                    let r = e.getAttribute(t);
                    r && n.push(`[${t}="${r}"]`);
                }
                return n.join("");
            })(a, c)),
            "html" !== n && (!(_ > 1) || !(s + 3 * o.length + n.length >= E)));
        )
            o.push(n), (s += n.length), (a = a.parentNode);
        return o.reverse().join(" > ");
    } catch (e) {
        return "<unknown>";
    }
}
function o() {
    try {
        return i.document.location.href;
    } catch (e) {
        return "";
    }
}
function _(e) {
    return i.document && i.document.querySelector ? i.document.querySelector(e) : null;
}
function s(e) {
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
