a.d(e, {
    Rt: () => _,
    iY: () => c,
    l4: () => o,
    qT: () => i
});
var r = a(573736);
let n = a(899517).n;
function _(t, e = {}) {
    if (!t) return '<unknown>';
    try {
        let a,
            _ = t,
            o = [],
            i = 0,
            c = 0,
            s = Array.isArray(e) ? e : e.keyAttrs,
            E = (!Array.isArray(e) && e.maxStringLength) || 80;
        for (
            ;
            _ &&
            i++ < 5 &&
            ((a = (function (t, e) {
                let a = [];
                if (!t || !t.tagName) return '';
                if (n.HTMLElement && t instanceof HTMLElement && t.dataset) {
                    if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement) return t.dataset.sentryElement;
                }
                a.push(t.tagName.toLowerCase());
                let _ = e && e.length ? e.filter((e) => t.getAttribute(e)).map((e) => [e, t.getAttribute(e)]) : null;
                if (_ && _.length)
                    _.forEach((t) => {
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
            })(_, s)),
            'html' !== a && (!(i > 1) || !(c + 3 * o.length + a.length >= E)));

        )
            o.push(a), (c += a.length), (_ = _.parentNode);
        return o.reverse().join(' > ');
    } catch (t) {
        return '<unknown>';
    }
}
function o() {
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
