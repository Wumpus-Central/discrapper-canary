a.d(e, {
    Rt: () => o,
    iY: () => c,
    l4: () => _,
    qT: () => i
});
var r = a(573736);
let n = a(899517).n;
function o(t, e = {}) {
    if (!t) return '<unknown>';
    try {
        let a,
            o = t,
            _ = [],
            i = 0,
            c = 0,
            s = Array.isArray(e) ? e : e.keyAttrs,
            E = (!Array.isArray(e) && e.maxStringLength) || 80;
        for (
            ;
            o &&
            i++ < 5 &&
            ((a = (function (t, e) {
                let a = [];
                if (!t || !t.tagName) return '';
                if (n.HTMLElement && t instanceof HTMLElement && t.dataset) {
                    if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement) return t.dataset.sentryElement;
                }
                a.push(t.tagName.toLowerCase());
                let o = e && e.length ? e.filter((e) => t.getAttribute(e)).map((e) => [e, t.getAttribute(e)]) : null;
                if (o && o.length)
                    o.forEach((t) => {
                        a.push(`[${t[0]}="${t[1]}"]`);
                    });
                else {
                    t.id && a.push(`#${t.id}`);
                    let e = t.className;
                    if (e && (0, r.HD)(e)) for (let t of e.split(/\s+/)) a.push(`.${t}`);
                }
                for (let e of ['aria-label', 'type', 'name', 'title', 'alt']) {
                    let r = t.getAttribute(e);
                    r && a.push(`[${e}="${r}"]`);
                }
                return a.join('');
            })(o, s)),
            'html' !== a && (!(i > 1) || !(c + 3 * _.length + a.length >= E)));

        )
            _.push(a), (c += a.length), (o = o.parentNode);
        return _.reverse().join(' > ');
    } catch (t) {
        return '<unknown>';
    }
}
function _() {
    try {
        return n.document.location.href;
    } catch (t) {
        return '';
    }
}
function i(t) {
    return n.document && n.document.querySelector ? n.document.querySelector(t) : null;
}
function c(t) {
    if (!n.HTMLElement) return null;
    let e = t;
    for (let t = 0; t < 5 && e; t++) {
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement;
        }
        e = e.parentNode;
    }
    return null;
}
