r.d(t, {
    Rt: () => i,
    iY: () => s,
    l4: () => o,
    qT: () => _,
});
var n = r(661822);
let a = r(606093).n;
function i(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let r,
            i = e,
            o = [],
            _ = 0,
            s = 0,
            c = Array.isArray(t) ? t : t.keyAttrs,
            E = (!Array.isArray(t) && t.maxStringLength) || 80;
        for (
            ;
            i &&
            _++ < 5 &&
            ((r = (function (e, t) {
                let r = [];
                if (!e || !e.tagName) return "";
                if (a.HTMLElement && e instanceof HTMLElement && e.dataset) {
                    if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                r.push(e.tagName.toLowerCase());
                let i = t && t.length ? t.filter((t) => e.getAttribute(t)).map((t) => [t, e.getAttribute(t)]) : null;
                if (i && i.length)
                    i.forEach((e) => {
                        r.push(`[${e[0]}="${e[1]}"]`);
                    });
                else {
                    e.id && r.push(`#${e.id}`);
                    let t = e.className;
                    if (t && (0, n.HD)(t)) for (let e of t.split(/\s+/)) r.push(`.${e}`);
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                    let n = e.getAttribute(t);
                    n && r.push(`[${t}="${n}"]`);
                }
                return r.join("");
            })(i, c)),
            "html" !== r && (!(_ > 1) || !(s + 3 * o.length + r.length >= E)));
        )
            o.push(r), (s += r.length), (i = i.parentNode);
        return o.reverse().join(" > ");
    } catch (e) {
        return "<unknown>";
    }
}
function o() {
    try {
        return a.document.location.href;
    } catch (e) {
        return "";
    }
}
function _(e) {
    return a.document && a.document.querySelector ? a.document.querySelector(e) : null;
}
function s(e) {
    if (!a.HTMLElement) return null;
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
