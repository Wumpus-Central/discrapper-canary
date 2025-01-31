n.d(t, { s: () => E });
var i = n(161578),
    r = n(961742),
    a = n(295415),
    s = n(27273);
async function o(e) {
    let t = e.toDataURL();
    return 'data:,' === t ? e.cloneNode(!1) : (0, r.Bi)(t);
}
async function l(e, t) {
    if (e.currentSrc) {
        let t = document.createElement('canvas'),
            n = t.getContext('2d');
        (t.width = e.clientWidth), (t.height = e.clientHeight), null == n || n.drawImage(e, 0, 0, t.width, t.height);
        let i = t.toDataURL();
        return (0, r.Bi)(i);
    }
    let n = e.poster,
        i = (0, a.b)(n),
        o = await (0, s.sx)(n, i, t);
    return (0, r.Bi)(o);
}
async function u(e) {
    var t;
    try {
        if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body) return await E(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
}
async function c(e, t) {
    return (0, r.oY)(e, HTMLCanvasElement) ? o(e) : (0, r.oY)(e, HTMLVideoElement) ? l(e, t) : (0, r.oY)(e, HTMLIFrameElement) ? u(e) : e.cloneNode(!1);
}
let d = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
async function f(e, t, n) {
    var i, a;
    let s = [];
    return (
        d(e) && e.assignedNodes ? (s = (0, r.qo)(e.assignedNodes())) : (0, r.oY)(e, HTMLIFrameElement) && (null === (i = e.contentDocument) || void 0 === i ? void 0 : i.body) ? (s = (0, r.qo)(e.contentDocument.body.childNodes)) : (s = (0, r.qo)((null !== (a = e.shadowRoot) && void 0 !== a ? a : e).childNodes)),
        0 === s.length ||
            (0, r.oY)(e, HTMLVideoElement) ||
            (await s.reduce(
                (e, i) =>
                    e
                        .then(() => E(i, n))
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
    let i = window.getComputedStyle(e);
    i.cssText
        ? ((n.cssText = i.cssText), (n.transformOrigin = i.transformOrigin))
        : (0, r.qo)(i).forEach((a) => {
              let s = i.getPropertyValue(a);
              if ('font-size' === a && s.endsWith('px')) {
                  let e = Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1;
                  s = `${e}px`;
              }
              (0, r.oY)(e, HTMLIFrameElement) && 'display' === a && 'inline' === s && (s = 'block'), 'd' === a && t.getAttribute('d') && (s = `path(${t.getAttribute('d')})`), n.setProperty(a, s, i.getPropertyPriority(a));
          });
}
function p(e, t) {
    (0, r.oY)(e, HTMLTextAreaElement) && (t.innerHTML = e.value), (0, r.oY)(e, HTMLInputElement) && t.setAttribute('value', e.value);
}
function h(e, t) {
    if ((0, r.oY)(e, HTMLSelectElement)) {
        let n = Array.from(t.children).find((t) => e.value === t.getAttribute('value'));
        n && n.setAttribute('selected', '');
    }
}
function m(e, t) {
    return (0, r.oY)(t, Element) && (_(e, t), (0, i.b)(e, t), p(e, t), h(e, t)), t;
}
async function g(e, t) {
    let n = e.querySelectorAll ? e.querySelectorAll('use') : [];
    if (0 === n.length) return e;
    let i = {};
    for (let r = 0; r < n.length; r++) {
        let a = n[r].getAttribute('xlink:href');
        if (a) {
            let n = e.querySelector(a),
                r = document.querySelector(a);
            n || !r || i[a] || (i[a] = await E(r, t, !0));
        }
    }
    let r = Object.values(i);
    if (r.length) {
        let t = 'http://www.w3.org/1999/xhtml',
            n = document.createElementNS(t, 'svg');
        n.setAttribute('xmlns', t), (n.style.position = 'absolute'), (n.style.width = '0'), (n.style.height = '0'), (n.style.overflow = 'hidden'), (n.style.display = 'none');
        let i = document.createElementNS(t, 'defs');
        n.appendChild(i);
        for (let e = 0; e < r.length; e++) i.appendChild(r[e]);
        e.appendChild(n);
    }
    return e;
}
async function E(e, t, n) {
    return n || !t.filter || t.filter(e)
        ? Promise.resolve(e)
              .then((e) => c(e, t))
              .then((n) => f(e, n, t))
              .then((t) => m(e, t))
              .then((e) => g(e, t))
        : null;
}
