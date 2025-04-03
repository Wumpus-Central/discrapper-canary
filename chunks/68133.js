n.d(t, { s: () => E });
var r = n(161578),
    i = n(961742),
    o = n(295415),
    a = n(27273);
async function s(e) {
    let t = e.toDataURL();
    return 'data:,' === t ? e.cloneNode(!1) : (0, i.Bi)(t);
}
async function l(e, t) {
    if (e.currentSrc) {
        let t = document.createElement('canvas'),
            n = t.getContext('2d');
        (t.width = e.clientWidth), (t.height = e.clientHeight), null == n || n.drawImage(e, 0, 0, t.width, t.height);
        let r = t.toDataURL();
        return (0, i.Bi)(r);
    }
    let n = e.poster,
        r = (0, o.b)(n),
        s = await (0, a.sx)(n, r, t);
    return (0, i.Bi)(s);
}
async function c(e) {
    var t;
    try {
        if (null == (t = null == e ? void 0 : e.contentDocument) ? void 0 : t.body) return await E(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
}
async function u(e, t) {
    return (0, i.oY)(e, HTMLCanvasElement) ? s(e) : (0, i.oY)(e, HTMLVideoElement) ? l(e, t) : (0, i.oY)(e, HTMLIFrameElement) ? c(e) : e.cloneNode(!1);
}
let d = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
async function f(e, t, n) {
    var r, o;
    let a = [];
    return (
        0 === (a = d(e) && e.assignedNodes ? (0, i.qo)(e.assignedNodes()) : (0, i.oY)(e, HTMLIFrameElement) && (null == (r = e.contentDocument) ? void 0 : r.body) ? (0, i.qo)(e.contentDocument.body.childNodes) : (0, i.qo)((null != (o = e.shadowRoot) ? o : e).childNodes)).length ||
            (0, i.oY)(e, HTMLVideoElement) ||
            (await a.reduce(
                (e, r) =>
                    e
                        .then(() => E(r, n))
                        .then((e) => {
                            e && t.appendChild(e);
                        }),
                Promise.resolve()
            )),
        t
    );
}
function _(e, t) {
    let n = t.style;
    if (!n) return;
    let r = window.getComputedStyle(e);
    r.cssText
        ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
        : (0, i.qo)(r).forEach((o) => {
              let a = r.getPropertyValue(o);
              if ('font-size' === o && a.endsWith('px')) {
                  let e = Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1;
                  a = `${e}px`;
              }
              (0, i.oY)(e, HTMLIFrameElement) && 'display' === o && 'inline' === a && (a = 'block'), 'd' === o && t.getAttribute('d') && (a = `path(${t.getAttribute('d')})`), n.setProperty(o, a, r.getPropertyPriority(o));
          });
}
function p(e, t) {
    (0, i.oY)(e, HTMLTextAreaElement) && (t.innerHTML = e.value), (0, i.oY)(e, HTMLInputElement) && t.setAttribute('value', e.value);
}
function h(e, t) {
    if ((0, i.oY)(e, HTMLSelectElement)) {
        let n = Array.from(t.children).find((t) => e.value === t.getAttribute('value'));
        n && n.setAttribute('selected', '');
    }
}
function m(e, t) {
    return (0, i.oY)(t, Element) && (_(e, t), (0, r.b)(e, t), p(e, t), h(e, t)), t;
}
async function g(e, t) {
    let n = e.querySelectorAll ? e.querySelectorAll('use') : [];
    if (0 === n.length) return e;
    let r = {};
    for (let i = 0; i < n.length; i++) {
        let o = n[i].getAttribute('xlink:href');
        if (o) {
            let n = e.querySelector(o),
                i = document.querySelector(o);
            n || !i || r[o] || (r[o] = await E(i, t, !0));
        }
    }
    let i = Object.values(r);
    if (i.length) {
        let t = 'http://www.w3.org/1999/xhtml',
            n = document.createElementNS(t, 'svg');
        n.setAttribute('xmlns', t), (n.style.position = 'absolute'), (n.style.width = '0'), (n.style.height = '0'), (n.style.overflow = 'hidden'), (n.style.display = 'none');
        let r = document.createElementNS(t, 'defs');
        n.appendChild(r);
        for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
        e.appendChild(n);
    }
    return e;
}
async function E(e, t, n) {
    return n || !t.filter || t.filter(e)
        ? Promise.resolve(e)
              .then((e) => u(e, t))
              .then((n) => f(e, n, t))
              .then((t) => m(e, t))
              .then((e) => g(e, t))
        : null;
}
