r.d(n, {
    s: function () {
        return v;
    }
});
var i = r(161578),
    a = r(961742),
    o = r(295415),
    s = r(27273);
async function l(e) {
    let n = e.toDataURL();
    return 'data:,' === n ? e.cloneNode(!1) : (0, a.Bi)(n);
}
async function u(e, n) {
    if (e.currentSrc) {
        let n = document.createElement('canvas'),
            r = n.getContext('2d');
        (n.width = e.clientWidth), (n.height = e.clientHeight), null == r || r.drawImage(e, 0, 0, n.width, n.height);
        let i = n.toDataURL();
        return (0, a.Bi)(i);
    }
    let r = e.poster,
        i = (0, o.b)(r),
        l = await (0, s.sx)(r, i, n);
    return (0, a.Bi)(l);
}
async function c(e) {
    var n;
    try {
        if (null === (n = null == e ? void 0 : e.contentDocument) || void 0 === n ? void 0 : n.body) return await v(e.contentDocument.body, {}, !0);
    } catch (e) {}
    return e.cloneNode(!1);
}
async function d(e, n) {
    return (0, a.oY)(e, HTMLCanvasElement) ? l(e) : (0, a.oY)(e, HTMLVideoElement) ? u(e, n) : (0, a.oY)(e, HTMLIFrameElement) ? c(e) : e.cloneNode(!1);
}
let f = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
async function p(e, n, r) {
    var i, o;
    let s = [];
    return (f(e) && e.assignedNodes ? (s = (0, a.qo)(e.assignedNodes())) : (0, a.oY)(e, HTMLIFrameElement) && (null === (i = e.contentDocument) || void 0 === i ? void 0 : i.body) ? (s = (0, a.qo)(e.contentDocument.body.childNodes)) : (s = (0, a.qo)((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes)), 0 === s.length || (0, a.oY)(e, HTMLVideoElement))
        ? n
        : (await s.reduce(
              (e, i) =>
                  e
                      .then(() => v(i, r))
                      .then((e) => {
                          e && n.appendChild(e);
                      }),
              Promise.resolve()
          ),
          n);
}
function h(e, n) {
    let r = n.style;
    if (!r) return;
    let i = window.getComputedStyle(e);
    i.cssText
        ? ((r.cssText = i.cssText), (r.transformOrigin = i.transformOrigin))
        : (0, a.qo)(i).forEach((o) => {
              let s = i.getPropertyValue(o);
              if ('font-size' === o && s.endsWith('px')) {
                  let e = Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1;
                  s = `${e}px`;
              }
              (0, a.oY)(e, HTMLIFrameElement) && 'display' === o && 'inline' === s && (s = 'block'), 'd' === o && n.getAttribute('d') && (s = `path(${n.getAttribute('d')})`), r.setProperty(o, s, i.getPropertyPriority(o));
          });
}
function _(e, n) {
    (0, a.oY)(e, HTMLTextAreaElement) && (n.innerHTML = e.value), (0, a.oY)(e, HTMLInputElement) && n.setAttribute('value', e.value);
}
function m(e, n) {
    if ((0, a.oY)(e, HTMLSelectElement)) {
        let r = Array.from(n.children).find((n) => e.value === n.getAttribute('value'));
        r && r.setAttribute('selected', '');
    }
}
function g(e, n) {
    return (0, a.oY)(n, Element) && (h(e, n), (0, i.b)(e, n), _(e, n), m(e, n)), n;
}
async function E(e, n) {
    let r = e.querySelectorAll ? e.querySelectorAll('use') : [];
    if (0 === r.length) return e;
    let i = {};
    for (let a = 0; a < r.length; a++) {
        let o = r[a].getAttribute('xlink:href');
        if (o) {
            let r = e.querySelector(o),
                a = document.querySelector(o);
            !r && a && !i[o] && (i[o] = await v(a, n, !0));
        }
    }
    let a = Object.values(i);
    if (a.length) {
        let n = 'http://www.w3.org/1999/xhtml',
            r = document.createElementNS(n, 'svg');
        r.setAttribute('xmlns', n), (r.style.position = 'absolute'), (r.style.width = '0'), (r.style.height = '0'), (r.style.overflow = 'hidden'), (r.style.display = 'none');
        let i = document.createElementNS(n, 'defs');
        r.appendChild(i);
        for (let e = 0; e < a.length; e++) i.appendChild(a[e]);
        e.appendChild(r);
    }
    return e;
}
async function v(e, n, r) {
    return r || !n.filter || n.filter(e)
        ? Promise.resolve(e)
              .then((e) => d(e, n))
              .then((r) => p(e, r, n))
              .then((n) => g(e, n))
              .then((e) => E(e, n))
        : null;
}
