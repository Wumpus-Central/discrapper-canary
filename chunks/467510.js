n.d(t, { Rt: () => o });
var r = n(573736);
let i = n(899517).n,
    a = 80;
function o(e, t = {}) {
    if (!e) return '<unknown>';
    try {
        let n,
            r = e,
            i = 5,
            o = [],
            l = 0,
            c = 0,
            u = ' > ',
            d = u.length,
            f = Array.isArray(t) ? t : t.keyAttrs,
            _ = (!Array.isArray(t) && t.maxStringLength) || a;
        for (; r && l++ < i && ((n = s(r, f)), 'html' !== n && (!(l > 1) || !(c + o.length * d + n.length >= _))); ) (o.push(n), (c += n.length), (r = r.parentNode));
        return o.reverse().join(u);
    } catch (e) {
        return '<unknown>';
    }
}
function s(e, t) {
    let n = e,
        a = [];
    if (!n || !n.tagName) return '';
    if (i.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    a.push(n.tagName.toLowerCase());
    let o = t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
    if (o && o.length)
        o.forEach((e) => {
            a.push(`[${e[0]}="${e[1]}"]`);
        });
    else {
        n.id && a.push(`#${n.id}`);
        let e = n.className;
        if (e && (0, r.HD)(e)) for (let t of e.split(/\s+/)) a.push(`.${t}`);
    }
    for (let e of ['aria-label', 'type', 'name', 'title', 'alt']) {
        let t = n.getAttribute(e);
        t && a.push(`[${e}="${t}"]`);
    }
    return a.join('');
}
