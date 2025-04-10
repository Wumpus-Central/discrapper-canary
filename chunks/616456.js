let r, n, _, o, i, c;
a.d(e, {
    G: () => aH,
    T: () => ax
});
var s,
    E,
    l,
    u,
    I,
    R,
    d,
    A,
    f = a(505676),
    p = a(507690),
    N = a(572299),
    T = a(263449),
    L = a(946471),
    h = a(233517),
    O = a(822578),
    D = a(696486),
    g = a(988097),
    P = a(820754),
    m = a(899517),
    y = a(202811),
    v = a(370336),
    C = a(467510),
    S = a(101284),
    G = a(622916),
    b = a(394798),
    M = a(886115),
    U = a(617726),
    w = a(928541),
    B = a(14588),
    W = a(26506),
    Y = a(650093),
    H = a(501684),
    K = a(157079),
    k = a(469359),
    x = a(393523);
let V = m.n,
    F = 'sentryReplaySession',
    j = 'Unable to send Replay';
function X(t, e) {
    return null != t ? t : e();
}
function $(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let n = t[r],
            _ = t[r + 1];
        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
        'access' === n || 'optionalAccess' === n ? ((e = a), (a = _(a))) : ('call' === n || 'optionalCall' === n) && ((a = _((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
function q(t) {
    let e = $([t, 'optionalAccess', (t) => t.host]);
    return $([e, 'optionalAccess', (t) => t.shadowRoot]) === t;
}
function z(t) {
    return '[object ShadowRoot]' === Object.prototype.toString.call(t);
}
function J(t) {
    try {
        var e;
        let a = t.rules || t.cssRules;
        return a ? ((e = Array.from(a, Z).join('')).includes(' background-clip: text;') && !e.includes(' -webkit-background-clip: text;') && (e = e.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;')), e) : null;
    } catch (t) {
        return null;
    }
}
function Z(t) {
    let e;
    if ('styleSheet' in t)
        try {
            e =
                J(t.styleSheet) ||
                (function (t) {
                    let { cssText: e } = t;
                    if (e.split('"').length < 3) return e;
                    let a = ['@import', `url(${JSON.stringify(t.href)})`];
                    return '' === t.layerName ? a.push('layer') : t.layerName && a.push(`layer(${t.layerName})`), t.supportsText && a.push(`supports(${t.supportsText})`), t.media.length && a.push(t.media.mediaText), a.join(' ') + ';';
                })(t);
        } catch (t) {}
    else if ('selectorText' in t && t.selectorText.includes(':')) return t.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, '$1\\$2');
    return e || t.cssText;
}
((s = d || (d = {}))[(s.Document = 0)] = 'Document'), (s[(s.DocumentType = 1)] = 'DocumentType'), (s[(s.Element = 2)] = 'Element'), (s[(s.Text = 3)] = 'Text'), (s[(s.CDATA = 4)] = 'CDATA'), (s[(s.Comment = 5)] = 'Comment');
class Q {
    constructor() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(t) {
        return t ? X($([this, 'access', (t) => t.getMeta, 'call', (e) => e(t), 'optionalAccess', (t) => t.id]), () => -1) : -1;
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null;
    }
    removeNodeFromMap(t) {
        let e = this.getId(t);
        this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach((t) => this.removeNodeFromMap(t));
    }
    has(t) {
        return this.idNodeMap.has(t);
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t);
    }
    add(t, e) {
        let a = e.id;
        this.idNodeMap.set(a, t), this.nodeMetaMap.set(t, e);
    }
    replace(t, e) {
        let a = this.getNode(t);
        if (a) {
            let t = this.nodeMetaMap.get(a);
            t && this.nodeMetaMap.set(e, t);
        }
        this.idNodeMap.set(t, e);
    }
    reset() {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
}
function tt({ maskInputOptions: t, tagName: e, type: a }) {
    return 'OPTION' === e && (e = 'SELECT'), !!(t[e.toLowerCase()] || (a && t[a]) || 'password' === a || ('INPUT' === e && !a && t.text));
}
function te({ isMasked: t, element: e, value: a, maskInputFn: r }) {
    let n = a || '';
    return t ? (r && (n = r(n, e)), '*'.repeat(n.length)) : n;
}
function ta(t) {
    return t.toLowerCase();
}
function tr(t) {
    return t.toUpperCase();
}
let tn = '__rrweb_original__';
function t_(t) {
    let e = t.type;
    return t.hasAttribute('data-rr-is-password') ? 'password' : e ? ta(e) : null;
}
function to(t, e, a) {
    return 'INPUT' === e && ('radio' === a || 'checkbox' === a) ? t.getAttribute('value') || '' : t.value;
}
function ti(t, e) {
    let a;
    try {
        a = new URL(
            t,
            X(e, () => window.location.href)
        );
    } catch (t) {
        return null;
    }
    return X($([a.pathname.match(/\.([0-9a-z]+)(?:$)/i), 'optionalAccess', (t) => t[1]]), () => null);
}
let tc = {};
function ts(t) {
    let e = tc[t];
    if (e) return e;
    let a = window.document,
        r = window[t];
    if (a && 'function' == typeof a.createElement)
        try {
            let e = a.createElement('iframe');
            (e.hidden = !0), a.head.appendChild(e);
            let n = e.contentWindow;
            n && n[t] && (r = n[t]), a.head.removeChild(e);
        } catch (t) {}
    return (tc[t] = r.bind(window));
}
function tE(...t) {
    return ts('setTimeout')(...t);
}
function tl(...t) {
    return ts('clearTimeout')(...t);
}
let tu = 1,
    tI = RegExp('[^a-z0-9-_:]');
function tR() {
    return tu++;
}
let td = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    tA = /^(?:[a-z+]+:)?\/\//i,
    tf = /^www\..*/i,
    tp = /^(data:)([^,]*),(.*)/i;
function tN(t, e) {
    return (t || '').replace(td, (t, a, r, n, _, o) => {
        let i = r || _ || o,
            c = a || n || '';
        if (!i) return t;
        if (tA.test(i) || tf.test(i) || tp.test(i)) return `url(${c}${i}${c})`;
        if ('/' === i[0]) {
            let t;
            return `url(${c}${(e.indexOf('//') > -1 ? e.split('/').slice(0, 3).join('/') : e.split('/')[0]).split('?')[0] + i}${c})`;
        }
        let s = e.split('/'),
            E = i.split('/');
        for (let t of (s.pop(), E))
            if ('.' === t) continue;
            else '..' === t ? s.pop() : s.push(t);
        return `url(${c}${s.join('/')}${c})`;
    });
}
let tT = /^[^ \t\n\r\u000c]+/,
    tL = /^[, \t\n\r\u000c]+/;
function th(t, e) {
    if (!e || '' === e.trim()) return e;
    let a = t.createElement('a');
    return (a.href = e), a.href;
}
function tO() {
    let t = document.createElement('a');
    return (t.href = ''), t.href;
}
function tD(t, e, a, r, n, _) {
    if (!r) return r;
    if ('src' === a || ('href' === a && ('use' !== e || '#' !== r[0])) || ('xlink:href' === a && '#' !== r[0])) return th(t, r);
    if ('background' === a && ('table' === e || 'td' === e || 'th' === e)) return th(t, r);
    if ('srcset' === a)
        return (function (t, e) {
            if ('' === e.trim()) return e;
            let a = 0;
            function r(t) {
                let r,
                    n = t.exec(e.substring(a));
                return n ? ((r = n[0]), (a += r.length), r) : '';
            }
            let n = [];
            for (; r(tL), !(a >= e.length); ) {
                let _ = r(tT);
                if (',' === _.slice(-1)) (_ = th(t, _.substring(0, _.length - 1))), n.push(_);
                else {
                    let r = '';
                    _ = th(t, _);
                    let o = !1;
                    for (;;) {
                        let t = e.charAt(a);
                        if ('' === t) {
                            n.push((_ + r).trim());
                            break;
                        }
                        if (o) ')' === t && (o = !1);
                        else if (',' === t) {
                            (a += 1), n.push((_ + r).trim());
                            break;
                        } else '(' === t && (o = !0);
                        (r += t), (a += 1);
                    }
                }
            }
            return n.join(', ');
        })(t, r);
    if ('style' === a) return tN(r, tO());
    else if ('object' === e && 'data' === a) return th(t, r);
    return 'function' == typeof _ ? _(a, r, n) : r;
}
function tg(t, e, a) {
    return ('video' === t || 'audio' === t) && 'autoplay' === e;
}
function tP(t, e, a = 1 / 0, r = 0) {
    return !t || t.nodeType !== t.ELEMENT_NODE || r > a ? -1 : e(t) ? r : tP(t.parentNode, e, a, r + 1);
}
function tm(t, e) {
    return (a) => {
        if (null === a) return !1;
        try {
            if (t) {
                if ('string' == typeof t) {
                    if (a.matches(`.${t}`)) return !0;
                } else if (
                    (function (t, e) {
                        for (let a = t.classList.length; a--; ) {
                            let r = t.classList[a];
                            if (e.test(r)) return !0;
                        }
                        return !1;
                    })(a, t)
                )
                    return !0;
            }
            if (e && a.matches(e)) return !0;
            return !1;
        } catch (t) {
            return !1;
        }
    };
}
function ty(t, e, a, r, n, _) {
    try {
        let o = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
        if (null === o) return !1;
        if ('INPUT' === o.tagName) {
            let t = o.getAttribute('autocomplete');
            if (['current-password', 'new-password', 'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc'].includes(t)) return !0;
        }
        let i = -1,
            c = -1;
        if (_) {
            if ((c = tP(o, tm(r, n))) < 0) return !0;
            i = tP(o, tm(e, a), c >= 0 ? c : 1 / 0);
        } else {
            if ((i = tP(o, tm(e, a))) < 0) return !1;
            c = tP(o, tm(r, n), i >= 0 ? i : 1 / 0);
        }
        return i >= 0 ? !(c >= 0) || i <= c : !(c >= 0) && !!_;
    } catch (t) {}
    return !!_;
}
function tv(t) {
    return null == t ? '' : t.toLowerCase();
}
function tC(t, e) {
    let a,
        { doc: _, mirror: o, blockClass: i, blockSelector: c, unblockSelector: s, maskAllText: E, maskTextClass: l, unmaskTextClass: u, maskTextSelector: I, unmaskTextSelector: R, skipChild: A = !1, inlineStylesheet: f = !0, maskInputOptions: p = {}, maskAttributeFn: N, maskTextFn: T, maskInputFn: L, slimDOMOptions: h, dataURLOptions: O = {}, inlineImages: D = !1, recordCanvas: g = !1, onSerialize: P, onIframeLoad: m, iframeLoadTimeout: y = 5000, onStylesheetLoad: v, stylesheetLoadTimeout: C = 5000, keepIframeSrcFn: S = () => !1, newlyAddedElement: G = !1 } = e,
        { preserveWhiteSpace: b = !0 } = e,
        M = (function (t, e) {
            let { doc: a, mirror: _, blockClass: o, blockSelector: i, unblockSelector: c, maskAllText: s, maskAttributeFn: E, maskTextClass: l, unmaskTextClass: u, maskTextSelector: I, unmaskTextSelector: R, inlineStylesheet: A, maskInputOptions: f = {}, maskTextFn: p, maskInputFn: N, dataURLOptions: T = {}, inlineImages: L, recordCanvas: h, keepIframeSrcFn: O, newlyAddedElement: D = !1 } = e,
                g = (function (t, e) {
                    if (!e.hasNode(t)) return;
                    let a = e.getId(t);
                    return 1 === a ? void 0 : a;
                })(a, _);
            switch (t.nodeType) {
                case t.DOCUMENT_NODE:
                    if ('CSS1Compat' !== t.compatMode)
                        return {
                            type: d.Document,
                            childNodes: [],
                            compatMode: t.compatMode
                        };
                    return {
                        type: d.Document,
                        childNodes: []
                    };
                case t.DOCUMENT_TYPE_NODE:
                    return {
                        type: d.DocumentType,
                        name: t.name,
                        publicId: t.publicId,
                        systemId: t.systemId,
                        rootId: g
                    };
                case t.ELEMENT_NODE:
                    return (function (t, e) {
                        let a,
                            { doc: _, blockClass: o, blockSelector: i, unblockSelector: c, inlineStylesheet: s, maskInputOptions: E = {}, maskAttributeFn: l, maskInputFn: u, dataURLOptions: I = {}, inlineImages: R, recordCanvas: A, keepIframeSrcFn: f, newlyAddedElement: p = !1, rootId: N, maskAllText: T, maskTextClass: L, unmaskTextClass: h, maskTextSelector: O, unmaskTextSelector: D } = e,
                            g = (function (t, e, a, r) {
                                try {
                                    if (r && t.matches(r)) return !1;
                                    if ('string' == typeof e) {
                                        if (t.classList.contains(e)) return !0;
                                    } else
                                        for (let a = t.classList.length; a--; ) {
                                            let r = t.classList[a];
                                            if (e.test(r)) return !0;
                                        }
                                    if (a) return t.matches(a);
                                } catch (t) {}
                                return !1;
                            })(t, o, i, c),
                            P = (function (t) {
                                if (t instanceof HTMLFormElement) return 'form';
                                let e = ta(t.tagName);
                                return tI.test(e) ? 'div' : e;
                            })(t),
                            m = {},
                            y = t.attributes.length;
                        for (let e = 0; e < y; e++) {
                            let a = t.attributes[e];
                            a.name && !tg(P, a.name, a.value) && (m[a.name] = tD(_, P, ta(a.name), a.value, t, l));
                        }
                        if ('link' === P && s) {
                            let e = Array.from(_.styleSheets).find((e) => e.href === t.href),
                                a = null;
                            e && (a = J(e)), a && (delete m.rel, delete m.href, (m._cssText = tN(a, e.href)));
                        }
                        if ('style' === P && t.sheet && !(t.innerText || t.textContent || '').trim().length) {
                            let e = J(t.sheet);
                            e && (m._cssText = tN(e, tO()));
                        }
                        if ('input' === P || 'textarea' === P || 'select' === P || 'option' === P) {
                            let e = t_(t),
                                a = to(t, tr(P), e),
                                r = t.checked;
                            if ('submit' !== e && 'button' !== e && a) {
                                let r = ty(
                                    t,
                                    L,
                                    O,
                                    h,
                                    D,
                                    tt({
                                        type: e,
                                        tagName: tr(P),
                                        maskInputOptions: E
                                    })
                                );
                                m.value = te({
                                    isMasked: r,
                                    element: t,
                                    value: a,
                                    maskInputFn: u
                                });
                            }
                            r && (m.checked = r);
                        }
                        if (('option' === P && (t.selected && !E.select ? (m.selected = !0) : delete m.selected), 'canvas' === P && A)) {
                            if ('2d' === t.__context)
                                !(function (t) {
                                    let e = t.getContext('2d');
                                    if (!e) return !0;
                                    for (let a = 0; a < t.width; a += 50)
                                        for (let r = 0; r < t.height; r += 50) {
                                            let n = e.getImageData;
                                            if (new Uint32Array((tn in n ? n[tn] : n).call(e, a, r, Math.min(50, t.width - a), Math.min(50, t.height - r)).data.buffer).some((t) => 0 !== t)) return !1;
                                        }
                                    return !0;
                                })(t) && (m.rr_dataURL = t.toDataURL(I.type, I.quality));
                            else if (!('__context' in t)) {
                                let e = t.toDataURL(I.type, I.quality),
                                    a = document.createElement('canvas');
                                (a.width = t.width), (a.height = t.height), e !== a.toDataURL(I.type, I.quality) && (m.rr_dataURL = e);
                            }
                        }
                        if ('img' === P && R) {
                            r || (n = (r = _.createElement('canvas')).getContext('2d'));
                            let e = t.crossOrigin;
                            t.crossOrigin = 'anonymous';
                            let a = () => {
                                t.removeEventListener('load', a);
                                try {
                                    (r.width = t.naturalWidth), (r.height = t.naturalHeight), n.drawImage(t, 0, 0), (m.rr_dataURL = r.toDataURL(I.type, I.quality));
                                } catch (e) {
                                    console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`);
                                }
                                e ? (m.crossOrigin = e) : t.removeAttribute('crossorigin');
                            };
                            t.complete && 0 !== t.naturalWidth ? a() : t.addEventListener('load', a);
                        }
                        if ((('audio' === P || 'video' === P) && ((m.rr_mediaState = t.paused ? 'paused' : 'played'), (m.rr_mediaCurrentTime = t.currentTime)), !p && (t.scrollLeft && (m.rr_scrollLeft = t.scrollLeft), t.scrollTop && (m.rr_scrollTop = t.scrollTop)), g)) {
                            let { width: e, height: a } = t.getBoundingClientRect();
                            m = {
                                class: m.class,
                                rr_width: `${e}px`,
                                rr_height: `${a}px`
                            };
                        }
                        'iframe' !== P || f(m.src) || (g || t.contentDocument || (m.rr_src = m.src), delete m.src);
                        try {
                            customElements.get(P) && (a = !0);
                        } catch (t) {}
                        return {
                            type: d.Element,
                            tagName: P,
                            attributes: m,
                            childNodes: [],
                            isSVG: !!('svg' === t.tagName || t.ownerSVGElement) || void 0,
                            needBlock: g,
                            rootId: N,
                            isCustom: a
                        };
                    })(t, {
                        doc: a,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: c,
                        inlineStylesheet: A,
                        maskAttributeFn: E,
                        maskInputOptions: f,
                        maskInputFn: N,
                        dataURLOptions: T,
                        inlineImages: L,
                        recordCanvas: h,
                        keepIframeSrcFn: O,
                        newlyAddedElement: D,
                        rootId: g,
                        maskAllText: s,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: I,
                        unmaskTextSelector: R
                    });
                case t.TEXT_NODE:
                    return (function (t, e) {
                        let { maskAllText: a, maskTextClass: r, unmaskTextClass: n, maskTextSelector: _, unmaskTextSelector: o, maskTextFn: i, maskInputOptions: c, maskInputFn: s, rootId: E } = e,
                            l = t.parentNode && t.parentNode.tagName,
                            u = t.textContent,
                            I = 'STYLE' === l || void 0,
                            R = 'SCRIPT' === l || void 0,
                            A = 'TEXTAREA' === l || void 0;
                        if (I && u) {
                            try {
                                t.nextSibling || t.previousSibling || ($([t, 'access', (t) => t.parentNode, 'access', (t) => t.sheet, 'optionalAccess', (t) => t.cssRules]) && (u = J(t.parentNode.sheet)));
                            } catch (e) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t);
                            }
                            u = tN(u, tO());
                        }
                        R && (u = 'SCRIPT_PLACEHOLDER');
                        let f = ty(t, r, _, n, o, a);
                        return (
                            I || R || A || !u || !f || (u = i ? i(u, t.parentElement) : u.replace(/[\S]/g, '*')),
                            A && u && (c.textarea || f) && (u = s ? s(u, t.parentNode) : u.replace(/[\S]/g, '*')),
                            'OPTION' === l &&
                                u &&
                                (u = te({
                                    isMasked: ty(
                                        t,
                                        r,
                                        _,
                                        n,
                                        o,
                                        tt({
                                            type: null,
                                            tagName: l,
                                            maskInputOptions: c
                                        })
                                    ),
                                    element: t,
                                    value: u,
                                    maskInputFn: s
                                })),
                            {
                                type: d.Text,
                                textContent: u || '',
                                isStyle: I,
                                rootId: E
                            }
                        );
                    })(t, {
                        maskAllText: s,
                        maskTextClass: l,
                        unmaskTextClass: u,
                        maskTextSelector: I,
                        unmaskTextSelector: R,
                        maskTextFn: p,
                        maskInputOptions: f,
                        maskInputFn: N,
                        rootId: g
                    });
                case t.CDATA_SECTION_NODE:
                    return {
                        type: d.CDATA,
                        textContent: '',
                        rootId: g
                    };
                case t.COMMENT_NODE:
                    return {
                        type: d.Comment,
                        textContent: t.textContent || '',
                        rootId: g
                    };
                default:
                    return !1;
            }
        })(t, {
            doc: _,
            mirror: o,
            blockClass: i,
            blockSelector: c,
            maskAllText: E,
            unblockSelector: s,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: I,
            unmaskTextSelector: R,
            inlineStylesheet: f,
            maskInputOptions: p,
            maskAttributeFn: N,
            maskTextFn: T,
            maskInputFn: L,
            dataURLOptions: O,
            inlineImages: D,
            recordCanvas: g,
            keepIframeSrcFn: S,
            newlyAddedElement: G
        });
    if (!M) return console.warn(t, 'not serialized'), null;
    a = o.hasNode(t)
        ? o.getId(t)
        : !(function (t, e) {
                if (e.comment && t.type === d.Comment) return !0;
                if (t.type === d.Element) {
                    if (e.script && ('script' === t.tagName || ('link' === t.tagName && ('preload' === t.attributes.rel || 'modulepreload' === t.attributes.rel) && 'script' === t.attributes.as) || ('link' === t.tagName && 'prefetch' === t.attributes.rel && 'string' == typeof t.attributes.href && 'js' === ti(t.attributes.href)))) return !0;
                    else if (e.headFavicon && (('link' === t.tagName && 'shortcut icon' === t.attributes.rel) || ('meta' === t.tagName && (tv(t.attributes.name).match(/^msapplication-tile(image|color)$/) || 'application-name' === tv(t.attributes.name) || 'icon' === tv(t.attributes.rel) || 'apple-touch-icon' === tv(t.attributes.rel) || 'shortcut icon' === tv(t.attributes.rel))))) return !0;
                    else if ('meta' === t.tagName) {
                        if (e.headMetaDescKeywords && tv(t.attributes.name).match(/^description|keywords$/)) return !0;
                        else if (e.headMetaSocial && (tv(t.attributes.property).match(/^(og|twitter|fb):/) || tv(t.attributes.name).match(/^(og|twitter):/) || 'pinterest' === tv(t.attributes.name))) return !0;
                        else if (e.headMetaRobots && ('robots' === tv(t.attributes.name) || 'googlebot' === tv(t.attributes.name) || 'bingbot' === tv(t.attributes.name))) return !0;
                        else if (e.headMetaHttpEquiv && void 0 !== t.attributes['http-equiv']) return !0;
                        else if (e.headMetaAuthorship && ('author' === tv(t.attributes.name) || 'generator' === tv(t.attributes.name) || 'framework' === tv(t.attributes.name) || 'publisher' === tv(t.attributes.name) || 'progid' === tv(t.attributes.name) || tv(t.attributes.property).match(/^article:/) || tv(t.attributes.property).match(/^product:/))) return !0;
                        else if (e.headMetaVerification && ('google-site-verification' === tv(t.attributes.name) || 'yandex-verification' === tv(t.attributes.name) || 'csrf-token' === tv(t.attributes.name) || 'p:domain_verify' === tv(t.attributes.name) || 'verify-v1' === tv(t.attributes.name) || 'verification' === tv(t.attributes.name) || 'shopify-checkout-api-token' === tv(t.attributes.name))) return !0;
                    }
                }
                return !1;
            })(M, h) &&
            (b || M.type !== d.Text || M.isStyle || M.textContent.replace(/^\s+|\s+$/gm, '').length)
          ? tR()
          : -2;
    let U = Object.assign(M, { id: a });
    if ((o.add(t, U), -2 === a)) return null;
    P && P(t);
    let w = !A;
    if (U.type === d.Element) {
        (w = w && !U.needBlock), delete U.needBlock;
        let e = t.shadowRoot;
        e && z(e) && (U.isShadowHost = !0);
    }
    if ((U.type === d.Document || U.type === d.Element) && w) {
        h.headWhitespace && U.type === d.Element && 'head' === U.tagName && (b = !1);
        let e = {
            doc: _,
            mirror: o,
            blockClass: i,
            blockSelector: c,
            maskAllText: E,
            unblockSelector: s,
            maskTextClass: l,
            unmaskTextClass: u,
            maskTextSelector: I,
            unmaskTextSelector: R,
            skipChild: A,
            inlineStylesheet: f,
            maskInputOptions: p,
            maskAttributeFn: N,
            maskTextFn: T,
            maskInputFn: L,
            slimDOMOptions: h,
            dataURLOptions: O,
            inlineImages: D,
            recordCanvas: g,
            preserveWhiteSpace: b,
            onSerialize: P,
            onIframeLoad: m,
            iframeLoadTimeout: y,
            onStylesheetLoad: v,
            stylesheetLoadTimeout: C,
            keepIframeSrcFn: S
        };
        for (let a of Array.from(t.childNodes)) {
            let t = tC(a, e);
            t && U.childNodes.push(t);
        }
        if (t.nodeType === t.ELEMENT_NODE && t.shadowRoot)
            for (let a of Array.from(t.shadowRoot.childNodes)) {
                let r = tC(a, e);
                r && (z(t.shadowRoot) && (r.isShadow = !0), U.childNodes.push(r));
            }
    }
    return (
        t.parentNode && q(t.parentNode) && z(t.parentNode) && (U.isShadow = !0),
        U.type === d.Element &&
            'iframe' === U.tagName &&
            (function (t, e, a) {
                let r,
                    n = t.contentWindow;
                if (!n) return;
                let _ = !1;
                try {
                    r = n.document.readyState;
                } catch (t) {
                    return;
                }
                if ('complete' !== r) {
                    let r = tE(() => {
                        _ || (e(), (_ = !0));
                    }, a);
                    t.addEventListener('load', () => {
                        tl(r), (_ = !0), e();
                    });
                    return;
                }
                let o = 'about:blank';
                if (n.location.href !== o || t.src === o || '' === t.src) return tE(e, 0), t.addEventListener('load', e);
                t.addEventListener('load', e);
            })(
                t,
                () => {
                    let e = t.contentDocument;
                    if (e && m) {
                        let a = tC(e, {
                            doc: e,
                            mirror: o,
                            blockClass: i,
                            blockSelector: c,
                            unblockSelector: s,
                            maskAllText: E,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: I,
                            unmaskTextSelector: R,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputOptions: p,
                            maskAttributeFn: N,
                            maskTextFn: T,
                            maskInputFn: L,
                            slimDOMOptions: h,
                            dataURLOptions: O,
                            inlineImages: D,
                            recordCanvas: g,
                            preserveWhiteSpace: b,
                            onSerialize: P,
                            onIframeLoad: m,
                            iframeLoadTimeout: y,
                            onStylesheetLoad: v,
                            stylesheetLoadTimeout: C,
                            keepIframeSrcFn: S
                        });
                        a && m(t, a);
                    }
                },
                y
            ),
        U.type === d.Element &&
            'link' === U.tagName &&
            'string' == typeof U.attributes.rel &&
            ('stylesheet' === U.attributes.rel || ('preload' === U.attributes.rel && 'string' == typeof U.attributes.href && 'css' === ti(U.attributes.href))) &&
            (function (t, e, a) {
                let r,
                    n = !1;
                try {
                    r = t.sheet;
                } catch (t) {
                    return;
                }
                if (r) return;
                let _ = tE(() => {
                    n || (e(), (n = !0));
                }, a);
                t.addEventListener('load', () => {
                    tl(_), (n = !0), e();
                });
            })(
                t,
                () => {
                    if (v) {
                        let e = tC(t, {
                            doc: _,
                            mirror: o,
                            blockClass: i,
                            blockSelector: c,
                            unblockSelector: s,
                            maskAllText: E,
                            maskTextClass: l,
                            unmaskTextClass: u,
                            maskTextSelector: I,
                            unmaskTextSelector: R,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputOptions: p,
                            maskAttributeFn: N,
                            maskTextFn: T,
                            maskInputFn: L,
                            slimDOMOptions: h,
                            dataURLOptions: O,
                            inlineImages: D,
                            recordCanvas: g,
                            preserveWhiteSpace: b,
                            onSerialize: P,
                            onIframeLoad: m,
                            iframeLoadTimeout: y,
                            onStylesheetLoad: v,
                            stylesheetLoadTimeout: C,
                            keepIframeSrcFn: S
                        });
                        e && v(t, e);
                    }
                },
                C
            ),
        U
    );
}
function tS(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let n = t[r],
            _ = t[r + 1];
        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
        'access' === n || 'optionalAccess' === n ? ((e = a), (a = _(a))) : ('call' === n || 'optionalCall' === n) && ((a = _((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
function tG(t, e, a = document) {
    let r = {
        capture: !0,
        passive: !0
    };
    return a.addEventListener(t, e, r), () => a.removeEventListener(t, e, r);
}
let tb = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
    tM = {
        map: {},
        getId: () => (console.error(tb), -1),
        getNode: () => (console.error(tb), null),
        removeNodeFromMap() {
            console.error(tb);
        },
        has: () => (console.error(tb), !1),
        reset() {
            console.error(tb);
        }
    };
function tU(t, e, a = {}) {
    let r = null,
        n = 0;
    return function (..._) {
        let o = Date.now();
        n || !1 !== a.leading || (n = o);
        let i = e - (o - n),
            c = this;
        i <= 0 || i > e
            ? (r &&
                  ((function (...t) {
                      tZ('clearTimeout')(...t);
                  })(r),
                  (r = null)),
              (n = o),
              t.apply(c, _))
            : r ||
              !1 === a.trailing ||
              (r = tQ(() => {
                  (n = !1 === a.leading ? 0 : Date.now()), (r = null), t.apply(c, _);
              }, i));
    };
}
function tw(t, e, a) {
    try {
        if (!(e in t)) return () => {};
        let r = t[e],
            n = a(r);
        return (
            'function' == typeof n &&
                ((n.prototype = n.prototype || {}),
                Object.defineProperties(n, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })),
            (t[e] = n),
            () => {
                t[e] = r;
            }
        );
    } catch (t) {
        return () => {};
    }
}
'undefined' != typeof window && window.Proxy && window.Reflect && (tM = new Proxy(tM, { get: (t, e, a) => ('map' === e && console.error(tb), Reflect.get(t, e, a)) }));
let tB = Date.now;
function tW(t) {
    let e = t.document;
    return {
        left: e.scrollingElement ? e.scrollingElement.scrollLeft : void 0 !== t.pageXOffset ? t.pageXOffset : tS([e, 'optionalAccess', (t) => t.documentElement, 'access', (t) => t.scrollLeft]) || tS([e, 'optionalAccess', (t) => t.body, 'optionalAccess', (t) => t.parentElement, 'optionalAccess', (t) => t.scrollLeft]) || tS([e, 'optionalAccess', (t) => t.body, 'optionalAccess', (t) => t.scrollLeft]) || 0,
        top: e.scrollingElement ? e.scrollingElement.scrollTop : void 0 !== t.pageYOffset ? t.pageYOffset : tS([e, 'optionalAccess', (t) => t.documentElement, 'access', (t) => t.scrollTop]) || tS([e, 'optionalAccess', (t) => t.body, 'optionalAccess', (t) => t.parentElement, 'optionalAccess', (t) => t.scrollTop]) || tS([e, 'optionalAccess', (t) => t.body, 'optionalAccess', (t) => t.scrollTop]) || 0
    };
}
function tY() {
    return window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || (document.body && document.body.clientHeight);
}
function tH() {
    return window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || (document.body && document.body.clientWidth);
}
function tK(t) {
    return t ? (t.nodeType === t.ELEMENT_NODE ? t : t.parentElement) : null;
}
function tk(t, e, a, r, n) {
    if (!t) return !1;
    let _ = tK(t);
    if (!_) return !1;
    let o = tm(e, a);
    if (!n) {
        let t = r && _.matches(r);
        return o(_) && !t;
    }
    let i = tP(_, o),
        c = -1;
    return !(i < 0) && (r && (c = tP(_, tm(null, r))), (i > -1 && c < 0) || i < c);
}
function tx(t, e) {
    return -2 === e.getId(t);
}
function tV(t) {
    return !!t.changedTouches;
}
function tF(t, e) {
    return !!('IFRAME' === t.nodeName && e.getMeta(t));
}
function tj(t, e) {
    return !!('LINK' === t.nodeName && t.nodeType === t.ELEMENT_NODE && t.getAttribute && 'stylesheet' === t.getAttribute('rel') && e.getMeta(t));
}
function tX(t) {
    return !!tS([t, 'optionalAccess', (t) => t.shadowRoot]);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (tB = () => new Date().getTime());
class t$ {
    constructor() {
        (this.id = 1), (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map());
    }
    getId(t) {
        return (0, f.h)(this.styleIDMap.get(t), () => -1);
    }
    has(t) {
        return this.styleIDMap.has(t);
    }
    add(t, e) {
        let a;
        return this.has(t) ? this.getId(t) : ((a = void 0 === e ? this.id++ : e), this.styleIDMap.set(t, a), this.idStyleMap.set(a, t), a);
    }
    getStyle(t) {
        return this.idStyleMap.get(t) || null;
    }
    reset() {
        (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1);
    }
    generateId() {
        return this.id++;
    }
}
function tq(t) {
    let e = null;
    return tS([t, 'access', (t) => t.getRootNode, 'optionalCall', (t) => t(), 'optionalAccess', (t) => t.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && t.getRootNode().host && (e = t.getRootNode().host), e;
}
function tz(t) {
    let e = t.ownerDocument;
    return (
        !!e &&
        (e.contains(t) ||
            (function (t) {
                let e = t.ownerDocument;
                if (!e) return !1;
                let a = (function (t) {
                    let e,
                        a = t;
                    for (; (e = tq(a)); ) a = e;
                    return a;
                })(t);
                return e.contains(a);
            })(t))
    );
}
let tJ = {};
function tZ(t) {
    let e = tJ[t];
    if (e) return e;
    let a = window.document,
        r = window[t];
    if (a && 'function' == typeof a.createElement)
        try {
            let e = a.createElement('iframe');
            (e.hidden = !0), a.head.appendChild(e);
            let n = e.contentWindow;
            n && n[t] && (r = n[t]), a.head.removeChild(e);
        } catch (t) {}
    return (tJ[t] = r.bind(window));
}
function tQ(...t) {
    return tZ('setTimeout')(...t);
}
var t0 = (((E = t0 || {})[(E.DomContentLoaded = 0)] = 'DomContentLoaded'), (E[(E.Load = 1)] = 'Load'), (E[(E.FullSnapshot = 2)] = 'FullSnapshot'), (E[(E.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'), (E[(E.Meta = 4)] = 'Meta'), (E[(E.Custom = 5)] = 'Custom'), (E[(E.Plugin = 6)] = 'Plugin'), E),
    t1 = (((l = t1 || {})[(l.Mutation = 0)] = 'Mutation'), (l[(l.MouseMove = 1)] = 'MouseMove'), (l[(l.MouseInteraction = 2)] = 'MouseInteraction'), (l[(l.Scroll = 3)] = 'Scroll'), (l[(l.ViewportResize = 4)] = 'ViewportResize'), (l[(l.Input = 5)] = 'Input'), (l[(l.TouchMove = 6)] = 'TouchMove'), (l[(l.MediaInteraction = 7)] = 'MediaInteraction'), (l[(l.StyleSheetRule = 8)] = 'StyleSheetRule'), (l[(l.CanvasMutation = 9)] = 'CanvasMutation'), (l[(l.Font = 10)] = 'Font'), (l[(l.Log = 11)] = 'Log'), (l[(l.Drag = 12)] = 'Drag'), (l[(l.StyleDeclaration = 13)] = 'StyleDeclaration'), (l[(l.Selection = 14)] = 'Selection'), (l[(l.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'), (l[(l.CustomElement = 16)] = 'CustomElement'), l),
    t2 = (((u = t2 || {})[(u.MouseUp = 0)] = 'MouseUp'), (u[(u.MouseDown = 1)] = 'MouseDown'), (u[(u.Click = 2)] = 'Click'), (u[(u.ContextMenu = 3)] = 'ContextMenu'), (u[(u.DblClick = 4)] = 'DblClick'), (u[(u.Focus = 5)] = 'Focus'), (u[(u.Blur = 6)] = 'Blur'), (u[(u.TouchStart = 7)] = 'TouchStart'), (u[(u.TouchMove_Departed = 8)] = 'TouchMove_Departed'), (u[(u.TouchEnd = 9)] = 'TouchEnd'), (u[(u.TouchCancel = 10)] = 'TouchCancel'), u),
    t3 = (((I = t3 || {})[(I.Mouse = 0)] = 'Mouse'), (I[(I.Pen = 1)] = 'Pen'), (I[(I.Touch = 2)] = 'Touch'), I);
class t6 {
    constructor() {
        (this.length = 0), (this.head = null), (this.tail = null);
    }
    get(t) {
        if (t >= this.length) throw Error('Position outside of list range');
        let e = this.head;
        for (let a = 0; a < t; a++)
            e =
                (function (t) {
                    let e,
                        a = t[0],
                        r = 1;
                    for (; r < t.length; ) {
                        let n = t[r],
                            _ = t[r + 1];
                        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
                        'access' === n || 'optionalAccess' === n ? ((e = a), (a = _(a))) : ('call' === n || 'optionalCall' === n) && ((a = _((...t) => a.call(e, ...t))), (e = void 0));
                    }
                    return a;
                })([e, 'optionalAccess', (t) => t.next]) || null;
        return e;
    }
    addNode(t) {
        let e = {
            value: t,
            previous: null,
            next: null
        };
        if (((t.__ln = e), t.previousSibling && '__ln' in t.previousSibling)) {
            let a = t.previousSibling.__ln.next;
            (e.next = a), (e.previous = t.previousSibling.__ln), (t.previousSibling.__ln.next = e), a && (a.previous = e);
        } else if (t.nextSibling && '__ln' in t.nextSibling && t.nextSibling.__ln.previous) {
            let a = t.nextSibling.__ln.previous;
            (e.previous = a), (e.next = t.nextSibling.__ln), (t.nextSibling.__ln.previous = e), a && (a.next = e);
        } else this.head && (this.head.previous = e), (e.next = this.head), (this.head = e);
        null === e.next && (this.tail = e), this.length++;
    }
    removeNode(t) {
        let e = t.__ln;
        this.head && (e.previous ? ((e.previous.next = e.next), e.next ? (e.next.previous = e.previous) : (this.tail = e.previous)) : ((this.head = e.next), this.head ? (this.head.previous = null) : (this.tail = null)), t.__ln && delete t.__ln, this.length--);
    }
}
let t4 = (t, e) => `${t}@${e}`;
class t5 {
    constructor() {
        (this.frozen = !1),
            (this.locked = !1),
            (this.texts = []),
            (this.attributes = []),
            (this.attributeMap = new WeakMap()),
            (this.removes = []),
            (this.mapRemoves = []),
            (this.movedMap = {}),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.processMutations = (t) => {
                t.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
                if (this.frozen || this.locked) return;
                let t = [],
                    e = new Set(),
                    a = new t6(),
                    r = (t) => {
                        let e = t,
                            a = -2;
                        for (; -2 === a; ) a = (e = e && e.nextSibling) && this.mirror.getId(e);
                        return a;
                    },
                    n = (n) => {
                        if (!n.parentNode || !tz(n)) return;
                        let _ = q(n.parentNode) ? this.mirror.getId(tq(n)) : this.mirror.getId(n.parentNode),
                            o = r(n);
                        if (-1 === _ || -1 === o) return a.addNode(n);
                        let i = tC(n, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: (t) => {
                                tF(t, this.mirror) && this.iframeManager.addIframe(t), tj(t, this.mirror) && this.stylesheetManager.trackLinkElement(t), tX(n) && this.shadowDomManager.addShadowRoot(n.shadowRoot, this.doc);
                            },
                            onIframeLoad: (t, e) => {
                                this.iframeManager.attachIframe(t, e), t.contentWindow && this.canvasManager.addWindow(t.contentWindow), this.shadowDomManager.observeAttachShadow(t);
                            },
                            onStylesheetLoad: (t, e) => {
                                this.stylesheetManager.attachLinkElement(t, e);
                            }
                        });
                        i &&
                            (t.push({
                                parentId: _,
                                nextId: o,
                                node: i
                            }),
                            e.add(i.id));
                    };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let t of this.movedSet) (!t7(this.removes, t, this.mirror) || this.movedSet.has(t.parentNode)) && n(t);
                for (let t of this.addedSet) t9(this.droppedSet, t) || t7(this.removes, t, this.mirror) ? (t9(this.movedSet, t) ? n(t) : this.droppedSet.add(t)) : n(t);
                let _ = null;
                for (; a.length; ) {
                    let t = null;
                    if (_) {
                        let e = this.mirror.getId(_.value.parentNode),
                            a = r(_.value);
                        -1 !== e && -1 !== a && (t = _);
                    }
                    if (!t) {
                        let e = a.tail;
                        for (; e; ) {
                            let a = e;
                            if (((e = e.previous), a)) {
                                let e = this.mirror.getId(a.value.parentNode);
                                if (-1 === r(a.value)) continue;
                                if (-1 !== e) {
                                    t = a;
                                    break;
                                }
                                {
                                    let e = a.value;
                                    if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        let r = e.parentNode.host;
                                        if (-1 !== this.mirror.getId(r)) {
                                            t = a;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!t) {
                        for (; a.head; ) a.removeNode(a.head.value);
                        break;
                    }
                    (_ = t.previous), a.removeNode(t.value), n(t.value);
                }
                let o = {
                    texts: this.texts
                        .map((t) => ({
                            id: this.mirror.getId(t.node),
                            value: t.value
                        }))
                        .filter((t) => !e.has(t.id))
                        .filter((t) => this.mirror.has(t.id)),
                    attributes: this.attributes
                        .map((t) => {
                            let { attributes: e } = t;
                            if ('string' == typeof e.style) {
                                let a = JSON.stringify(t.styleDiff),
                                    r = JSON.stringify(t._unchangedStyles);
                                a.length < e.style.length && (a + r).split('var(').length === e.style.split('var(').length && (e.style = t.styleDiff);
                            }
                            return {
                                id: this.mirror.getId(t.node),
                                attributes: e
                            };
                        })
                        .filter((t) => !e.has(t.id))
                        .filter((t) => this.mirror.has(t.id)),
                    removes: this.removes,
                    adds: t
                };
                (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && ((this.texts = []), (this.attributes = []), (this.attributeMap = new WeakMap()), (this.removes = []), (this.addedSet = new Set()), (this.movedSet = new Set()), (this.droppedSet = new Set()), (this.movedMap = {}), this.mutationCb(o));
            }),
            (this.processMutation = (t) => {
                if (!tx(t.target, this.mirror))
                    switch (t.type) {
                        case 'characterData': {
                            let e = t.target.textContent;
                            tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                e === t.oldValue ||
                                this.texts.push({
                                    value: ty(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && e ? (this.maskTextFn ? this.maskTextFn(e, tK(t.target)) : e.replace(/[\S]/g, '*')) : e,
                                    node: t.target
                                });
                            break;
                        }
                        case 'attributes': {
                            let e = t.target,
                                a = t.attributeName,
                                r = t.target.getAttribute(a);
                            if ('value' === a) {
                                let a = t_(e),
                                    n = e.tagName;
                                r = to(e, n, a);
                                let _ = tt({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: n,
                                    type: a
                                });
                                r = te({
                                    isMasked: ty(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, _),
                                    element: e,
                                    value: r,
                                    maskInputFn: this.maskInputFn
                                });
                            }
                            if (tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === t.oldValue) return;
                            let n = this.attributeMap.get(t.target);
                            if ('IFRAME' === e.tagName && 'src' === a && !this.keepIframeSrcFn(r))
                                if (e.contentDocument) return;
                                else a = 'rr_src';
                            if (
                                (n ||
                                    ((n = {
                                        node: t.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {}
                                    }),
                                    this.attributes.push(n),
                                    this.attributeMap.set(t.target, n)),
                                'type' === a && 'INPUT' === e.tagName && 'password' === (t.oldValue || '').toLowerCase() && e.setAttribute('data-rr-is-password', 'true'),
                                !tg(e.tagName, a) && ((n.attributes[a] = tD(this.doc, ta(e.tagName), ta(a), r, e, this.maskAttributeFn)), 'style' === a))
                            ) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument();
                                    } catch (t) {
                                        this.unattachedDoc = this.doc;
                                    }
                                let a = this.unattachedDoc.createElement('span');
                                for (let r of (t.oldValue && a.setAttribute('style', t.oldValue), Array.from(e.style))) {
                                    let t = e.style.getPropertyValue(r),
                                        _ = e.style.getPropertyPriority(r);
                                    t !== a.style.getPropertyValue(r) || _ !== a.style.getPropertyPriority(r) ? ('' === _ ? (n.styleDiff[r] = t) : (n.styleDiff[r] = [t, _])) : (n._unchangedStyles[r] = [t, _]);
                                }
                                for (let t of Array.from(a.style)) '' === e.style.getPropertyValue(t) && (n.styleDiff[t] = !1);
                            }
                            break;
                        }
                        case 'childList':
                            if (tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            t.addedNodes.forEach((e) => this.genAdds(e, t.target)),
                                t.removedNodes.forEach((e) => {
                                    let a = this.mirror.getId(e),
                                        r = q(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                    tk(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) ||
                                        tx(e, this.mirror) ||
                                        -1 === this.mirror.getId(e) ||
                                        (this.addedSet.has(e)
                                            ? (t8(this.addedSet, e), this.droppedSet.add(e))
                                            : (this.addedSet.has(t.target) && -1 === a) ||
                                              (function t(e, a) {
                                                  if (q(e)) return !1;
                                                  let r = a.getId(e);
                                                  return !a.has(r) || ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, a)));
                                              })(t.target, this.mirror) ||
                                              (this.movedSet.has(e) && this.movedMap[t4(a, r)]
                                                  ? t8(this.movedSet, e)
                                                  : this.removes.push({
                                                        parentId: r,
                                                        id: a,
                                                        isShadow: !!(q(t.target) && z(t.target)) || void 0
                                                    })),
                                        this.mapRemoves.push(e));
                                });
                    }
            }),
            (this.genAdds = (t, e) => {
                if (!this.processedNodeManager.inOtherBuffer(t, this) && !(this.addedSet.has(t) || this.movedSet.has(t))) {
                    if (this.mirror.hasNode(t)) {
                        if (tx(t, this.mirror)) return;
                        this.movedSet.add(t);
                        let a = null;
                        e && this.mirror.hasNode(e) && (a = this.mirror.getId(e)), a && -1 !== a && (this.movedMap[t4(this.mirror.getId(t), a)] = !0);
                    } else this.addedSet.add(t), this.droppedSet.delete(t);
                    !tk(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) &&
                        (t.childNodes.forEach((t) => this.genAdds(t)),
                        tX(t) &&
                            t.shadowRoot.childNodes.forEach((e) => {
                                this.processedNodeManager.add(e, this), this.genAdds(e, t);
                            }));
                }
            });
    }
    init(t) {
        ['mutationCb', 'blockClass', 'blockSelector', 'unblockSelector', 'maskAllText', 'maskTextClass', 'unmaskTextClass', 'maskTextSelector', 'unmaskTextSelector', 'inlineStylesheet', 'maskInputOptions', 'maskAttributeFn', 'maskTextFn', 'maskInputFn', 'keepIframeSrcFn', 'recordCanvas', 'inlineImages', 'slimDOMOptions', 'dataURLOptions', 'doc', 'mirror', 'iframeManager', 'stylesheetManager', 'shadowDomManager', 'canvasManager', 'processedNodeManager'].forEach((e) => {
            this[e] = t[e];
        });
    }
    freeze() {
        (this.frozen = !0), this.canvasManager.freeze();
    }
    unfreeze() {
        (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
        return this.frozen;
    }
    lock() {
        (this.locked = !0), this.canvasManager.lock();
    }
    unlock() {
        (this.locked = !1), this.canvasManager.unlock(), this.emit();
    }
    reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset();
    }
}
function t8(t, e) {
    t.delete(e), e.childNodes.forEach((e) => t8(t, e));
}
function t7(t, e, a) {
    return (
        0 !== t.length &&
        (function t(e, a, r) {
            let { parentNode: n } = a;
            if (!n) return !1;
            let _ = r.getId(n);
            return !!e.some((t) => t.id === _) || t(e, n, r);
        })(t, e, a)
    );
}
function t9(t, e) {
    return (
        0 !== t.size &&
        (function t(e, a) {
            let { parentNode: r } = a;
            return !!r && (!!e.has(r) || t(e, r));
        })(t, e)
    );
}
let et = (t) =>
    _
        ? (...e) => {
              try {
                  return t(...e);
              } catch (t) {
                  if (_ && !0 === _(t)) return () => {};
                  throw t;
              }
          }
        : t;
function ee(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let n = t[r],
            _ = t[r + 1];
        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
        'access' === n || 'optionalAccess' === n ? ((e = a), (a = _(a))) : ('call' === n || 'optionalCall' === n) && ((a = _((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
let ea = [];
function er(t) {
    try {
        if ('composedPath' in t) {
            let e = t.composedPath();
            if (e.length) return e[0];
        } else if ('path' in t && t.path.length) return t.path[0];
    } catch (t) {}
    return t && t.target;
}
function en(t, e) {
    let a = new t5();
    ea.push(a), a.init(t);
    let r = window.MutationObserver || window.__rrMutationObserver,
        n = ee([window, 'optionalAccess', (t) => t.Zone, 'optionalAccess', (t) => t.__symbol__, 'optionalCall', (t) => t('MutationObserver')]);
    n && window[n] && (r = window[n]);
    let _ = new r(
        et((e) => {
            (t.onMutation && !1 === t.onMutation(e)) || a.processMutations.bind(a)(e);
        })
    );
    return (
        _.observe(e, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }),
        _
    );
}
function e_({ scrollCb: t, doc: e, mirror: a, blockClass: r, blockSelector: n, unblockSelector: _, sampling: o }) {
    return tG(
        'scroll',
        et(
            tU(
                et((o) => {
                    let i = er(o);
                    if (!i || tk(i, r, n, _, !0)) return;
                    let c = a.getId(i);
                    if (i === e && e.defaultView) {
                        let a = tW(e.defaultView);
                        t({
                            id: c,
                            x: a.left,
                            y: a.top
                        });
                    } else
                        t({
                            id: c,
                            x: i.scrollLeft,
                            y: i.scrollTop
                        });
                }),
                o.scroll || 100
            )
        ),
        e
    );
}
let eo = ['INPUT', 'TEXTAREA', 'SELECT'],
    ei = new WeakMap();
function ec(t) {
    var e = [];
    if ((eu('CSSGroupingRule') && t.parentRule instanceof CSSGroupingRule) || (eu('CSSMediaRule') && t.parentRule instanceof CSSMediaRule) || (eu('CSSSupportsRule') && t.parentRule instanceof CSSSupportsRule) || (eu('CSSConditionRule') && t.parentRule instanceof CSSConditionRule)) {
        let a = Array.from(t.parentRule.cssRules).indexOf(t);
        e.unshift(a);
    } else if (t.parentStyleSheet) {
        let a = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
        e.unshift(a);
    }
    return e;
}
function es(t, e, a) {
    let r, n;
    return t
        ? (t.ownerNode ? (r = e.getId(t.ownerNode)) : (n = a.getId(t)),
          {
              styleId: n,
              id: r
          })
        : {};
}
function eE({ mirror: t, stylesheetManager: e }, a) {
    let r = null;
    r = '#document' === a.nodeName ? t.getId(a) : t.getId(a.host);
    let n = '#document' === a.nodeName ? ee([a, 'access', (t) => t.defaultView, 'optionalAccess', (t) => t.Document]) : ee([a, 'access', (t) => t.ownerDocument, 'optionalAccess', (t) => t.defaultView, 'optionalAccess', (t) => t.ShadowRoot]),
        _ = ee([n, 'optionalAccess', (t) => t.prototype]) ? Object.getOwnPropertyDescriptor(ee([n, 'optionalAccess', (t) => t.prototype]), 'adoptedStyleSheets') : void 0;
    return null !== r && -1 !== r && n && _
        ? (Object.defineProperty(a, 'adoptedStyleSheets', {
              configurable: _.configurable,
              enumerable: _.enumerable,
              get() {
                  return ee([_, 'access', (t) => t.get, 'optionalAccess', (t) => t.call, 'call', (t) => t(this)]);
              },
              set(t) {
                  let a = ee([_, 'access', (t) => t.set, 'optionalAccess', (t) => t.call, 'call', (e) => e(this, t)]);
                  if (null !== r && -1 !== r)
                      try {
                          e.adoptStyleSheets(t, r);
                      } catch (t) {}
                  return a;
              }
          }),
          et(() => {
              Object.defineProperty(a, 'adoptedStyleSheets', {
                  configurable: _.configurable,
                  enumerable: _.enumerable,
                  get: _.get,
                  set: _.set
              });
          }))
        : () => {};
}
function el(t, e = {}) {
    let a,
        r = t.doc.defaultView;
    if (!r) return () => {};
    t.recordDOM && (a = en(t, t.doc));
    let n = (function ({ mousemoveCb: t, sampling: e, doc: a, mirror: r }) {
            let n;
            if (!1 === e.mousemove) return () => {};
            let _ = 'number' == typeof e.mousemove ? e.mousemove : 50,
                o = 'number' == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                i = [],
                c = tU(
                    et((e) => {
                        let a = Date.now() - n;
                        t(
                            i.map((t) => ((t.timeOffset -= a), t)),
                            e
                        ),
                            (i = []),
                            (n = null);
                    }),
                    o
                ),
                s = et(
                    tU(
                        et((t) => {
                            let e = er(t),
                                { clientX: a, clientY: _ } = tV(t) ? t.changedTouches[0] : t;
                            n || (n = tB()),
                                i.push({
                                    x: a,
                                    y: _,
                                    id: r.getId(e),
                                    timeOffset: tB() - n
                                }),
                                c('undefined' != typeof DragEvent && t instanceof DragEvent ? t1.Drag : t instanceof MouseEvent ? t1.MouseMove : t1.TouchMove);
                        }),
                        _,
                        { trailing: !1 }
                    )
                ),
                E = [tG('mousemove', s, a), tG('touchmove', s, a), tG('drag', s, a)];
            return et(() => {
                E.forEach((t) => t());
            });
        })(t),
        _ = (function ({ mouseInteractionCb: t, doc: e, mirror: a, blockClass: r, blockSelector: n, unblockSelector: _, sampling: o }) {
            if (!1 === o.mouseInteraction) return () => {};
            let i = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                c = [],
                s = null,
                E = (e) => (o) => {
                    let i = er(o);
                    if (tk(i, r, n, _, !0)) return;
                    let c = null,
                        E = e;
                    if ('pointerType' in o) {
                        switch (o.pointerType) {
                            case 'mouse':
                                c = t3.Mouse;
                                break;
                            case 'touch':
                                c = t3.Touch;
                                break;
                            case 'pen':
                                c = t3.Pen;
                        }
                        c === t3.Touch ? (t2[e] === t2.MouseDown ? (E = 'TouchStart') : t2[e] === t2.MouseUp && (E = 'TouchEnd')) : t3.Pen;
                    } else tV(o) && (c = t3.Touch);
                    null !== c ? ((s = c), ((E.startsWith('Touch') && c === t3.Touch) || (E.startsWith('Mouse') && c === t3.Mouse)) && (c = null)) : t2[e] === t2.Click && ((c = s), (s = null));
                    let l = tV(o) ? o.changedTouches[0] : o;
                    if (!l) return;
                    let u = a.getId(i),
                        { clientX: I, clientY: R } = l;
                    et(t)({
                        type: t2[E],
                        id: u,
                        x: I,
                        y: R,
                        ...(null !== c && { pointerType: c })
                    });
                };
            return (
                Object.keys(t2)
                    .filter((t) => Number.isNaN(Number(t)) && !t.endsWith('_Departed') && !1 !== i[t])
                    .forEach((t) => {
                        let a = ta(t),
                            r = E(t);
                        if (window.PointerEvent)
                            switch (t2[t]) {
                                case t2.MouseDown:
                                case t2.MouseUp:
                                    a = a.replace('mouse', 'pointer');
                                    break;
                                case t2.TouchStart:
                                case t2.TouchEnd:
                                    return;
                            }
                        c.push(tG(a, r, e));
                    }),
                et(() => {
                    c.forEach((t) => t());
                })
            );
        })(t),
        o = e_(t),
        i = (function ({ viewportResizeCb: t }, { win: e }) {
            let a = -1,
                r = -1;
            return tG(
                'resize',
                et(
                    tU(
                        et(() => {
                            let e = tY(),
                                n = tH();
                            (a !== e || r !== n) &&
                                (t({
                                    width: Number(n),
                                    height: Number(e)
                                }),
                                (a = e),
                                (r = n));
                        }),
                        200
                    )
                ),
                e
            );
        })(t, { win: r }),
        c = (function ({ inputCb: t, doc: e, mirror: a, blockClass: r, blockSelector: n, unblockSelector: _, ignoreClass: o, ignoreSelector: i, maskInputOptions: c, maskInputFn: s, sampling: E, userTriggeredOnInput: l, maskTextClass: u, unmaskTextClass: I, maskTextSelector: R, unmaskTextSelector: d }) {
            function A(t) {
                let a = er(t),
                    E = t.isTrusted,
                    A = a && tr(a.tagName);
                if (('OPTION' === A && (a = a.parentElement), !a || !A || 0 > eo.indexOf(A) || tk(a, r, n, _, !0))) return;
                let p = a;
                if (p.classList.contains(o) || (i && p.matches(i))) return;
                let N = t_(a),
                    T = to(p, A, N),
                    L = !1,
                    h = tt({
                        maskInputOptions: c,
                        tagName: A,
                        type: N
                    }),
                    O = ty(a, u, R, I, d, h);
                ('radio' === N || 'checkbox' === N) && (L = a.checked),
                    (T = te({
                        isMasked: O,
                        element: a,
                        value: T,
                        maskInputFn: s
                    })),
                    f(
                        a,
                        l
                            ? {
                                  text: T,
                                  isChecked: L,
                                  userTriggered: E
                              }
                            : {
                                  text: T,
                                  isChecked: L
                              }
                    );
                let D = a.name;
                'radio' === N &&
                    D &&
                    L &&
                    e.querySelectorAll(`input[type="radio"][name="${D}"]`).forEach((t) => {
                        if (t !== a) {
                            let e = te({
                                isMasked: O,
                                element: t,
                                value: to(t, A, N),
                                maskInputFn: s
                            });
                            f(
                                t,
                                l
                                    ? {
                                          text: e,
                                          isChecked: !L,
                                          userTriggered: !1
                                      }
                                    : {
                                          text: e,
                                          isChecked: !L
                                      }
                            );
                        }
                    });
            }
            function f(e, r) {
                let n = ei.get(e);
                if (!n || n.text !== r.text || n.isChecked !== r.isChecked) {
                    ei.set(e, r);
                    let n = a.getId(e);
                    et(t)({
                        ...r,
                        id: n
                    });
                }
            }
            let p = ('last' === E.input ? ['change'] : ['input', 'change']).map((t) => tG(t, et(A), e)),
                N = e.defaultView;
            if (!N)
                return () => {
                    p.forEach((t) => t());
                };
            let T = N.Object.getOwnPropertyDescriptor(N.HTMLInputElement.prototype, 'value'),
                L = [
                    [N.HTMLInputElement.prototype, 'value'],
                    [N.HTMLInputElement.prototype, 'checked'],
                    [N.HTMLSelectElement.prototype, 'value'],
                    [N.HTMLTextAreaElement.prototype, 'value'],
                    [N.HTMLSelectElement.prototype, 'selectedIndex'],
                    [N.HTMLOptionElement.prototype, 'selected']
                ];
            return (
                T &&
                    T.set &&
                    p.push(
                        ...L.map((t) =>
                            (function t(e, a, r, n, _ = window) {
                                let o = _.Object.getOwnPropertyDescriptor(e, a);
                                return (
                                    _.Object.defineProperty(
                                        e,
                                        a,
                                        n
                                            ? r
                                            : {
                                                  set(t) {
                                                      tQ(() => {
                                                          r.set.call(this, t);
                                                      }, 0),
                                                          o && o.set && o.set.call(this, t);
                                                  }
                                              }
                                    ),
                                    () => t(e, a, o || {}, !0)
                                );
                            })(
                                t[0],
                                t[1],
                                {
                                    set() {
                                        et(A)({
                                            target: this,
                                            isTrusted: !1
                                        });
                                    }
                                },
                                !1,
                                N
                            )
                        )
                    ),
                et(() => {
                    p.forEach((t) => t());
                })
            );
        })(t),
        s = (function ({ mediaInteractionCb: t, blockClass: e, blockSelector: a, unblockSelector: r, mirror: n, sampling: _, doc: o }) {
            let i = et((o) =>
                    tU(
                        et((_) => {
                            let i = er(_);
                            if (!i || tk(i, e, a, r, !0)) return;
                            let { currentTime: c, volume: s, muted: E, playbackRate: l } = i;
                            t({
                                type: o,
                                id: n.getId(i),
                                currentTime: c,
                                volume: s,
                                muted: E,
                                playbackRate: l
                            });
                        }),
                        _.media || 500
                    )
                ),
                c = [tG('play', i(0), o), tG('pause', i(1), o), tG('seeked', i(2), o), tG('volumechange', i(3), o), tG('ratechange', i(4), o)];
            return et(() => {
                c.forEach((t) => t());
            });
        })(t),
        E = () => {},
        l = () => {},
        u = () => {},
        I = () => {};
    t.recordDOM &&
        ((E = (function ({ styleSheetRuleCb: t, mirror: e, stylesheetManager: a }, { win: r }) {
            let n, _;
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let o = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: et((r, n, _) => {
                    let [o, i] = _,
                        { id: c, styleId: s } = es(n, e, a.styleMirror);
                    return (
                        ((c && -1 !== c) || (s && -1 !== s)) &&
                            t({
                                id: c,
                                styleId: s,
                                adds: [
                                    {
                                        rule: o,
                                        index: i
                                    }
                                ]
                            }),
                        r.apply(n, _)
                    );
                })
            });
            let i = r.CSSStyleSheet.prototype.deleteRule;
            (r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                apply: et((r, n, _) => {
                    let [o] = _,
                        { id: i, styleId: c } = es(n, e, a.styleMirror);
                    return (
                        ((i && -1 !== i) || (c && -1 !== c)) &&
                            t({
                                id: i,
                                styleId: c,
                                removes: [{ index: o }]
                            }),
                        r.apply(n, _)
                    );
                })
            })),
                r.CSSStyleSheet.prototype.replace &&
                    ((n = r.CSSStyleSheet.prototype.replace),
                    (r.CSSStyleSheet.prototype.replace = new Proxy(n, {
                        apply: et((r, n, _) => {
                            let [o] = _,
                                { id: i, styleId: c } = es(n, e, a.styleMirror);
                            return (
                                ((i && -1 !== i) || (c && -1 !== c)) &&
                                    t({
                                        id: i,
                                        styleId: c,
                                        replace: o
                                    }),
                                r.apply(n, _)
                            );
                        })
                    }))),
                r.CSSStyleSheet.prototype.replaceSync &&
                    ((_ = r.CSSStyleSheet.prototype.replaceSync),
                    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(_, {
                        apply: et((r, n, _) => {
                            let [o] = _,
                                { id: i, styleId: c } = es(n, e, a.styleMirror);
                            return (
                                ((i && -1 !== i) || (c && -1 !== c)) &&
                                    t({
                                        id: i,
                                        styleId: c,
                                        replaceSync: o
                                    }),
                                r.apply(n, _)
                            );
                        })
                    })));
            let c = {};
            eI('CSSGroupingRule') ? (c.CSSGroupingRule = r.CSSGroupingRule) : (eI('CSSMediaRule') && (c.CSSMediaRule = r.CSSMediaRule), eI('CSSConditionRule') && (c.CSSConditionRule = r.CSSConditionRule), eI('CSSSupportsRule') && (c.CSSSupportsRule = r.CSSSupportsRule));
            let s = {};
            return (
                Object.entries(c).forEach(([r, n]) => {
                    (s[r] = {
                        insertRule: n.prototype.insertRule,
                        deleteRule: n.prototype.deleteRule
                    }),
                        (n.prototype.insertRule = new Proxy(s[r].insertRule, {
                            apply: et((r, n, _) => {
                                let [o, i] = _,
                                    { id: c, styleId: s } = es(n.parentStyleSheet, e, a.styleMirror);
                                return (
                                    ((c && -1 !== c) || (s && -1 !== s)) &&
                                        t({
                                            id: c,
                                            styleId: s,
                                            adds: [
                                                {
                                                    rule: o,
                                                    index: [...ec(n), i || 0]
                                                }
                                            ]
                                        }),
                                    r.apply(n, _)
                                );
                            })
                        })),
                        (n.prototype.deleteRule = new Proxy(s[r].deleteRule, {
                            apply: et((r, n, _) => {
                                let [o] = _,
                                    { id: i, styleId: c } = es(n.parentStyleSheet, e, a.styleMirror);
                                return (
                                    ((i && -1 !== i) || (c && -1 !== c)) &&
                                        t({
                                            id: i,
                                            styleId: c,
                                            removes: [
                                                {
                                                    index: [...ec(n), o]
                                                }
                                            ]
                                        }),
                                    r.apply(n, _)
                                );
                            })
                        }));
                }),
                et(() => {
                    (r.CSSStyleSheet.prototype.insertRule = o),
                        (r.CSSStyleSheet.prototype.deleteRule = i),
                        n && (r.CSSStyleSheet.prototype.replace = n),
                        _ && (r.CSSStyleSheet.prototype.replaceSync = _),
                        Object.entries(c).forEach(([t, e]) => {
                            (e.prototype.insertRule = s[t].insertRule), (e.prototype.deleteRule = s[t].deleteRule);
                        });
                })
            );
        })(t, { win: r })),
        (l = eE(t, t.doc)),
        (u = (function ({ styleDeclarationCb: t, mirror: e, ignoreCSSAttributes: a, stylesheetManager: r }, { win: n }) {
            let _ = n.CSSStyleDeclaration.prototype.setProperty;
            n.CSSStyleDeclaration.prototype.setProperty = new Proxy(_, {
                apply: et((n, o, i) => {
                    let [c, s, E] = i;
                    if (a.has(c)) return _.apply(o, [c, s, E]);
                    let { id: l, styleId: u } = es(ee([o, 'access', (t) => t.parentRule, 'optionalAccess', (t) => t.parentStyleSheet]), e, r.styleMirror);
                    return (
                        ((l && -1 !== l) || (u && -1 !== u)) &&
                            t({
                                id: l,
                                styleId: u,
                                set: {
                                    property: c,
                                    value: s,
                                    priority: E
                                },
                                index: ec(o.parentRule)
                            }),
                        n.apply(o, i)
                    );
                })
            });
            let o = n.CSSStyleDeclaration.prototype.removeProperty;
            return (
                (n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: et((n, _, i) => {
                        let [c] = i;
                        if (a.has(c)) return o.apply(_, [c]);
                        let { id: s, styleId: E } = es(ee([_, 'access', (t) => t.parentRule, 'optionalAccess', (t) => t.parentStyleSheet]), e, r.styleMirror);
                        return (
                            ((s && -1 !== s) || (E && -1 !== E)) &&
                                t({
                                    id: s,
                                    styleId: E,
                                    remove: { property: c },
                                    index: ec(_.parentRule)
                                }),
                            n.apply(_, i)
                        );
                    })
                })),
                et(() => {
                    (n.CSSStyleDeclaration.prototype.setProperty = _), (n.CSSStyleDeclaration.prototype.removeProperty = o);
                })
            );
        })(t, { win: r })),
        t.collectFonts &&
            (I = (function ({ fontCb: t, doc: e }) {
                let a = e.defaultView;
                if (!a) return () => {};
                let r = [],
                    n = new WeakMap(),
                    _ = a.FontFace;
                a.FontFace = function (t, e, a) {
                    let r = new _(t, e, a);
                    return (
                        n.set(r, {
                            family: t,
                            buffer: 'string' != typeof e,
                            descriptors: a,
                            fontSource: 'string' == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                        }),
                        r
                    );
                };
                let o = tw(e.fonts, 'add', function (e) {
                    return function (a) {
                        return (
                            tQ(
                                et(() => {
                                    let e = n.get(a);
                                    e && (t(e), n.delete(a));
                                }),
                                0
                            ),
                            e.apply(this, [a])
                        );
                    };
                });
                return (
                    r.push(() => {
                        a.FontFace = _;
                    }),
                    r.push(o),
                    et(() => {
                        r.forEach((t) => t());
                    })
                );
            })(t)));
    let R = (function (t) {
            let { doc: e, mirror: a, blockClass: r, blockSelector: n, unblockSelector: _, selectionCb: o } = t,
                i = !0,
                c = et(() => {
                    let t = e.getSelection();
                    if (!t || (i && ee([t, 'optionalAccess', (t) => t.isCollapsed]))) return;
                    i = t.isCollapsed || !1;
                    let c = [],
                        s = t.rangeCount || 0;
                    for (let e = 0; e < s; e++) {
                        let { startContainer: o, startOffset: i, endContainer: s, endOffset: E } = t.getRangeAt(e);
                        tk(o, r, n, _, !0) ||
                            tk(s, r, n, _, !0) ||
                            c.push({
                                start: a.getId(o),
                                startOffset: i,
                                end: a.getId(s),
                                endOffset: E
                            });
                    }
                    o({ ranges: c });
                });
            return c(), tG('selectionchange', c);
        })(t),
        d = (function ({ doc: t, customElementCb: e }) {
            let a = t.defaultView;
            return a && a.customElements
                ? tw(a.customElements, 'define', function (t) {
                      return function (a, r, n) {
                          try {
                              e({ define: { name: a } });
                          } catch (t) {}
                          return t.apply(this, [a, r, n]);
                      };
                  })
                : () => {};
        })(t),
        A = [];
    for (let e of t.plugins) A.push(e.observer(e.callback, r, e.options));
    return et(() => {
        ea.forEach((t) => t.reset()), ee([a, 'optionalAccess', (t) => t.disconnect, 'call', (t) => t()]), n(), _(), o(), i(), c(), s(), E(), l(), u(), I(), R(), d(), A.forEach((t) => t());
    });
}
function eu(t) {
    return void 0 !== window[t];
}
function eI(t) {
    return !!(void 0 !== window[t] && window[t].prototype && 'insertRule' in window[t].prototype && 'deleteRule' in window[t].prototype);
}
class eR {
    constructor(t) {
        (this.generateIdFn = t), (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(t, e, a, r) {
        let n = a || this.getIdToRemoteIdMap(t),
            _ = r || this.getRemoteIdToIdMap(t),
            o = n.get(e);
        return o || ((o = this.generateIdFn()), n.set(e, o), _.set(o, e)), o;
    }
    getIds(t, e) {
        let a = this.getIdToRemoteIdMap(t),
            r = this.getRemoteIdToIdMap(t);
        return e.map((e) => this.getId(t, e, a, r));
    }
    getRemoteId(t, e, a) {
        let r = a || this.getRemoteIdToIdMap(t);
        if ('number' != typeof e) return e;
        let n = r.get(e);
        return n || -1;
    }
    getRemoteIds(t, e) {
        let a = this.getRemoteIdToIdMap(t);
        return e.map((e) => this.getRemoteId(t, e, a));
    }
    reset(t) {
        if (!t) {
            (this.iframeIdToRemoteIdMap = new WeakMap()), (this.iframeRemoteIdToIdMap = new WeakMap());
            return;
        }
        this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
    }
    getIdToRemoteIdMap(t) {
        let e = this.iframeIdToRemoteIdMap.get(t);
        return e || ((e = new Map()), this.iframeIdToRemoteIdMap.set(t, e)), e;
    }
    getRemoteIdToIdMap(t) {
        let e = this.iframeRemoteIdToIdMap.get(t);
        return e || ((e = new Map()), this.iframeRemoteIdToIdMap.set(t, e)), e;
    }
}
function ed(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let n = t[r],
            _ = t[r + 1];
        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
        'access' === n || 'optionalAccess' === n ? ((e = a), (a = _(a))) : ('call' === n || 'optionalCall' === n) && ((a = _((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
class eA {
    constructor() {
        (this.crossOriginIframeMirror = new eR(tR)), (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class ef {
    constructor(t) {
        (this.iframes = new WeakMap()), (this.crossOriginIframeMap = new WeakMap()), (this.crossOriginIframeMirror = new eR(tR)), (this.crossOriginIframeRootIdMap = new WeakMap()), (this.mutationCb = t.mutationCb), (this.wrappedEmit = t.wrappedEmit), (this.stylesheetManager = t.stylesheetManager), (this.recordCrossOriginIframes = t.recordCrossOriginIframes), (this.crossOriginIframeStyleMirror = new eR(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror))), (this.mirror = t.mirror), this.recordCrossOriginIframes && window.addEventListener('message', this.handleMessage.bind(this));
    }
    addIframe(t) {
        this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
    }
    addLoadListener(t) {
        this.loadListener = t;
    }
    attachIframe(t, e) {
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(t),
                    nextId: null,
                    node: e
                }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }),
            ed([this, 'access', (t) => t.loadListener, 'optionalCall', (e) => e(t)]),
            t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument));
    }
    handleMessage(t) {
        if ('rrweb' !== t.data.type || t.origin !== t.data.origin || !t.source) return;
        let e = this.crossOriginIframeMap.get(t.source);
        if (!e) return;
        let a = this.transformCrossOriginEvent(e, t.data.event);
        a && this.wrappedEmit(a, t.data.isCheckout);
    }
    transformCrossOriginEvent(t, e) {
        switch (e.type) {
            case t0.FullSnapshot: {
                this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(e.data.node, t);
                let a = e.data.node.id;
                return (
                    this.crossOriginIframeRootIdMap.set(t, a),
                    this.patchRootIdOnNode(e.data.node, a),
                    {
                        timestamp: e.timestamp,
                        type: t0.IncrementalSnapshot,
                        data: {
                            source: t1.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(t),
                                    nextId: null,
                                    node: e.data.node
                                }
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    }
                );
            }
            case t0.Meta:
            case t0.Load:
            case t0.DomContentLoaded:
                break;
            case t0.Plugin:
                return e;
            case t0.Custom:
                return this.replaceIds(e.data.payload, t, ['id', 'parentId', 'previousId', 'nextId']), e;
            case t0.IncrementalSnapshot:
                switch (e.data.source) {
                    case t1.Mutation:
                        return (
                            e.data.adds.forEach((e) => {
                                this.replaceIds(e, t, ['parentId', 'nextId', 'previousId']), this.replaceIdOnNode(e.node, t);
                                let a = this.crossOriginIframeRootIdMap.get(t);
                                a && this.patchRootIdOnNode(e.node, a);
                            }),
                            e.data.removes.forEach((e) => {
                                this.replaceIds(e, t, ['parentId', 'id']);
                            }),
                            e.data.attributes.forEach((e) => {
                                this.replaceIds(e, t, ['id']);
                            }),
                            e.data.texts.forEach((e) => {
                                this.replaceIds(e, t, ['id']);
                            }),
                            e
                        );
                    case t1.Drag:
                    case t1.TouchMove:
                    case t1.MouseMove:
                        return (
                            e.data.positions.forEach((e) => {
                                this.replaceIds(e, t, ['id']);
                            }),
                            e
                        );
                    case t1.ViewportResize:
                        return !1;
                    case t1.MediaInteraction:
                    case t1.MouseInteraction:
                    case t1.Scroll:
                    case t1.CanvasMutation:
                    case t1.Input:
                        return this.replaceIds(e.data, t, ['id']), e;
                    case t1.StyleSheetRule:
                    case t1.StyleDeclaration:
                        return this.replaceIds(e.data, t, ['id']), this.replaceStyleIds(e.data, t, ['styleId']), e;
                    case t1.Font:
                        return e;
                    case t1.Selection:
                        return (
                            e.data.ranges.forEach((e) => {
                                this.replaceIds(e, t, ['start', 'end']);
                            }),
                            e
                        );
                    case t1.AdoptedStyleSheet:
                        return (
                            this.replaceIds(e.data, t, ['id']),
                            this.replaceStyleIds(e.data, t, ['styleIds']),
                            ed([
                                e,
                                'access',
                                (t) => t.data,
                                'access',
                                (t) => t.styles,
                                'optionalAccess',
                                (t) => t.forEach,
                                'call',
                                (e) =>
                                    e((e) => {
                                        this.replaceStyleIds(e, t, ['styleId']);
                                    })
                            ]),
                            e
                        );
                }
        }
        return !1;
    }
    replace(t, e, a, r) {
        for (let n of r) (Array.isArray(e[n]) || 'number' == typeof e[n]) && (Array.isArray(e[n]) ? (e[n] = t.getIds(a, e[n])) : (e[n] = t.getId(a, e[n])));
        return e;
    }
    replaceIds(t, e, a) {
        return this.replace(this.crossOriginIframeMirror, t, e, a);
    }
    replaceStyleIds(t, e, a) {
        return this.replace(this.crossOriginIframeStyleMirror, t, e, a);
    }
    replaceIdOnNode(t, e) {
        this.replaceIds(t, e, ['id', 'rootId']),
            'childNodes' in t &&
                t.childNodes.forEach((t) => {
                    this.replaceIdOnNode(t, e);
                });
    }
    patchRootIdOnNode(t, e) {
        t.type === d.Document || t.rootId || (t.rootId = e),
            'childNodes' in t &&
                t.childNodes.forEach((t) => {
                    this.patchRootIdOnNode(t, e);
                });
    }
}
class ep {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class eN {
    constructor(t) {
        (this.shadowDoms = new WeakSet()), (this.restoreHandlers = []), (this.mutationCb = t.mutationCb), (this.scrollCb = t.scrollCb), (this.bypassOptions = t.bypassOptions), (this.mirror = t.mirror), this.init();
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(t, e) {
        if (!z(t) || this.shadowDoms.has(t)) return;
        this.shadowDoms.add(t), this.bypassOptions.canvasManager.addShadowRoot(t);
        let a = en(
            {
                ...this.bypassOptions,
                doc: e,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            },
            t
        );
        this.restoreHandlers.push(() => a.disconnect()),
            this.restoreHandlers.push(
                e_({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: t,
                    mirror: this.mirror
                })
            ),
            tQ(() => {
                t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
                    this.restoreHandlers.push(
                        eE(
                            {
                                mirror: this.mirror,
                                stylesheetManager: this.bypassOptions.stylesheetManager
                            },
                            t
                        )
                    );
            }, 0);
    }
    observeAttachShadow(t) {
        t.contentWindow && t.contentDocument && this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
    }
    patchAttachShadow(t, e) {
        let a = this;
        this.restoreHandlers.push(
            tw(t.prototype, 'attachShadow', function (t) {
                return function (r) {
                    let n = t.call(this, r);
                    return this.shadowRoot && tz(this) && a.addShadowRoot(this.shadowRoot, e), n;
                };
            })
        );
    }
    reset() {
        this.restoreHandlers.forEach((t) => {
            try {
                t();
            } catch (t) {}
        }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet()),
            this.bypassOptions.canvasManager.resetShadowRoots();
    }
}
class eT {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class eL {
    constructor(t) {
        (this.trackedLinkElements = new WeakSet()), (this.styleMirror = new t$()), (this.mutationCb = t.mutationCb), (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb);
    }
    attachLinkElement(t, e) {
        '_cssText' in e.attributes &&
            this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [
                    {
                        id: e.id,
                        attributes: e.attributes
                    }
                ]
            }),
            this.trackLinkElement(t);
    }
    trackLinkElement(t) {
        this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
    }
    adoptStyleSheets(t, e) {
        if (0 === t.length) return;
        let a = {
                id: e,
                styleIds: []
            },
            r = [];
        for (let e of t) {
            let t;
            this.styleMirror.has(e)
                ? (t = this.styleMirror.getId(e))
                : ((t = this.styleMirror.add(e)),
                  r.push({
                      styleId: t,
                      rules: Array.from(e.rules || CSSRule, (t, e) => ({
                          rule: Z(t),
                          index: e
                      }))
                  })),
                a.styleIds.push(t);
        }
        r.length > 0 && (a.styles = r), this.adoptedStyleSheetCb(a);
    }
    reset() {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(t) {}
}
class eh {
    constructor() {
        (this.nodeMap = new WeakMap()), (this.loop = !0), this.periodicallyClear();
    }
    periodicallyClear() {
        !(function (...t) {
            tZ('requestAnimationFrame')(...t);
        })(() => {
            this.clear(), this.loop && this.periodicallyClear();
        });
    }
    inOtherBuffer(t, e) {
        let a = this.nodeMap.get(t);
        return a && Array.from(a).some((t) => t !== e);
    }
    add(t, e) {
        this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(e));
    }
    clear() {
        this.nodeMap = new WeakMap();
    }
    destroy() {
        this.loop = !1;
    }
}
try {
    if (2 !== Array.from([1], (t) => 2 * t)[0]) {
        let t = document.createElement('iframe');
        document.body.appendChild(t), (Array.from = (0, p.x)([t, 'access', (t) => t.contentWindow, 'optionalAccess', (t) => t.Array, 'access', (t) => t.from]) || Array.from), document.body.removeChild(t);
    }
} catch (t) {
    console.debug('Unable to override Array.from', t);
}
let eO = new Q();
function eD(t = {}) {
    let e,
        { emit: a, checkoutEveryNms: r, checkoutEveryNth: n, blockClass: c = 'rr-block', blockSelector: s = null, unblockSelector: E = null, ignoreClass: l = 'rr-ignore', ignoreSelector: u = null, maskAllText: I = !1, maskTextClass: R = 'rr-mask', unmaskTextClass: d = null, maskTextSelector: A = null, unmaskTextSelector: f = null, inlineStylesheet: N = !0, maskAllInputs: T, maskInputOptions: L, slimDOMOptions: h, maskAttributeFn: O, maskInputFn: D, maskTextFn: g, maxCanvasSize: P = null, packFn: m, sampling: y = {}, dataURLOptions: v = {}, mousemoveWait: C, recordDOM: S = !0, recordCanvas: G = !1, recordCrossOriginIframes: b = !1, recordAfter: M = 'DOMContentLoaded' === t.recordAfter ? t.recordAfter : 'load', userTriggeredOnInput: U = !1, collectFonts: w = !1, inlineImages: B = !1, plugins: W, keepIframeSrcFn: Y = () => !1, ignoreCSSAttributes: H = new Set([]), errorHandler: K, onMutation: k, getCanvasManager: x } = t;
    _ = K;
    let V = !b || window.parent === window,
        F = !1;
    if (!V)
        try {
            window.parent.document && (F = !1);
        } catch (t) {
            F = !0;
        }
    if (V && !a) throw Error('emit function is required');
    void 0 !== C && void 0 === y.mousemove && (y.mousemove = C), eO.reset();
    let j =
            !0 === T
                ? {
                      color: !0,
                      date: !0,
                      'datetime-local': !0,
                      email: !0,
                      month: !0,
                      number: !0,
                      range: !0,
                      search: !0,
                      tel: !0,
                      text: !0,
                      time: !0,
                      url: !0,
                      week: !0,
                      textarea: !0,
                      select: !0,
                      radio: !0,
                      checkbox: !0
                  }
                : void 0 !== L
                  ? L
                  : {},
        X =
            !0 === h || 'all' === h
                ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaVerification: !0,
                      headMetaAuthorship: 'all' === h,
                      headMetaDescKeywords: 'all' === h
                  }
                : h || {};
    !(function (t = window) {
        'NodeList' in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach),
            'DOMTokenList' in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            Node.prototype.contains ||
                (Node.prototype.contains = (...t) => {
                    let e = t[0];
                    if (!(0 in t)) throw TypeError('1 argument is required');
                    do if (this === e) return !0;
                    while ((e = e && e.parentNode));
                    return !1;
                });
    })();
    let $ = 0,
        q = (t) => {
            for (let e of W || []) e.eventProcessor && (t = e.eventProcessor(t));
            return m && !F && (t = m(t)), t;
        };
    o = (t, _) => {
        if (((t.timestamp = tB()), (0, p.x)([ea, 'access', (t) => t[0], 'optionalAccess', (t) => t.isFrozen, 'call', (t) => t()]) && t.type !== t0.FullSnapshot && (t.type !== t0.IncrementalSnapshot || t.data.source !== t1.Mutation) && ea.forEach((t) => t.unfreeze()), V)) (0, p.x)([a, 'optionalCall', (e) => e(q(t), _)]);
        else if (F) {
            let e = {
                type: 'rrweb',
                event: q(t),
                origin: window.location.origin,
                isCheckout: _
            };
            window.parent.postMessage(e, '*');
        }
        if (t.type === t0.FullSnapshot) (e = t), ($ = 0);
        else if (t.type === t0.IncrementalSnapshot) {
            if (t.data.source === t1.Mutation && t.data.isAttachIframe) return;
            $++;
            let a = n && $ >= n,
                _ = r && e && t.timestamp - e.timestamp > r;
            (a || _) && t_(!0);
        }
    };
    let z = (t) => {
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.Mutation,
                    ...t
                }
            });
        },
        J = (t) =>
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.Scroll,
                    ...t
                }
            }),
        Z = (t) =>
            o({
                type: t0.IncrementalSnapshot,
                data: {
                    source: t1.CanvasMutation,
                    ...t
                }
            }),
        tt = new eL({
            mutationCb: z,
            adoptedStyleSheetCb: (t) =>
                o({
                    type: t0.IncrementalSnapshot,
                    data: {
                        source: t1.AdoptedStyleSheet,
                        ...t
                    }
                })
        }),
        te =
            'boolean' == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
                ? new eA()
                : new ef({
                      mirror: eO,
                      mutationCb: z,
                      stylesheetManager: tt,
                      recordCrossOriginIframes: b,
                      wrappedEmit: o
                  });
    for (let t of W || [])
        t.getMirror &&
            t.getMirror({
                nodeMirror: eO,
                crossOriginIframeMirror: te.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: te.crossOriginIframeStyleMirror
            });
    let ta = new eh(),
        tr = (function (t, e) {
            try {
                return t ? t(e) : new eT();
            } catch (t) {
                return console.warn('Unable to initialize CanvasManager'), new eT();
            }
        })(x, {
            mirror: eO,
            win: window,
            mutationCb: (t) =>
                o({
                    type: t0.IncrementalSnapshot,
                    data: {
                        source: t1.CanvasMutation,
                        ...t
                    }
                }),
            recordCanvas: G,
            blockClass: c,
            blockSelector: s,
            unblockSelector: E,
            maxCanvasSize: P,
            sampling: y.canvas,
            dataURLOptions: v,
            errorHandler: K
        }),
        tn =
            'boolean' == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new ep()
                : new eN({
                      mutationCb: z,
                      scrollCb: J,
                      bypassOptions: {
                          onMutation: k,
                          blockClass: c,
                          blockSelector: s,
                          unblockSelector: E,
                          maskAllText: I,
                          maskTextClass: R,
                          unmaskTextClass: d,
                          maskTextSelector: A,
                          unmaskTextSelector: f,
                          inlineStylesheet: N,
                          maskInputOptions: j,
                          dataURLOptions: v,
                          maskAttributeFn: O,
                          maskTextFn: g,
                          maskInputFn: D,
                          recordCanvas: G,
                          inlineImages: B,
                          sampling: y,
                          slimDOMOptions: X,
                          iframeManager: te,
                          stylesheetManager: tt,
                          canvasManager: tr,
                          keepIframeSrcFn: Y,
                          processedNodeManager: ta
                      },
                      mirror: eO
                  }),
        t_ = (t = !1) => {
            if (!S) return;
            o(
                {
                    type: t0.Meta,
                    data: {
                        href: window.location.href,
                        width: tH(),
                        height: tY()
                    }
                },
                t
            ),
                tt.reset(),
                tn.init(),
                ea.forEach((t) => t.lock());
            let e = (function (t, e) {
                let { mirror: a = new Q(), blockClass: r = 'rr-block', blockSelector: n = null, unblockSelector: _ = null, maskAllText: o = !1, maskTextClass: i = 'rr-mask', unmaskTextClass: c = null, maskTextSelector: s = null, unmaskTextSelector: E = null, inlineStylesheet: l = !0, inlineImages: u = !1, recordCanvas: I = !1, maskAllInputs: R = !1, maskAttributeFn: d, maskTextFn: A, maskInputFn: f, slimDOM: p = !1, dataURLOptions: N, preserveWhiteSpace: T, onSerialize: L, onIframeLoad: h, iframeLoadTimeout: O, onStylesheetLoad: D, stylesheetLoadTimeout: g, keepIframeSrcFn: P = () => !1 } = e || {};
                return tC(t, {
                    doc: t,
                    mirror: a,
                    blockClass: r,
                    blockSelector: n,
                    unblockSelector: _,
                    maskAllText: o,
                    maskTextClass: i,
                    unmaskTextClass: c,
                    maskTextSelector: s,
                    unmaskTextSelector: E,
                    skipChild: !1,
                    inlineStylesheet: l,
                    maskInputOptions:
                        !0 === R
                            ? {
                                  color: !0,
                                  date: !0,
                                  'datetime-local': !0,
                                  email: !0,
                                  month: !0,
                                  number: !0,
                                  range: !0,
                                  search: !0,
                                  tel: !0,
                                  text: !0,
                                  time: !0,
                                  url: !0,
                                  week: !0,
                                  textarea: !0,
                                  select: !0
                              }
                            : !1 === R
                              ? {}
                              : R,
                    maskAttributeFn: d,
                    maskTextFn: A,
                    maskInputFn: f,
                    slimDOMOptions:
                        !0 === p || 'all' === p
                            ? {
                                  script: !0,
                                  comment: !0,
                                  headFavicon: !0,
                                  headWhitespace: !0,
                                  headMetaDescKeywords: 'all' === p,
                                  headMetaSocial: !0,
                                  headMetaRobots: !0,
                                  headMetaHttpEquiv: !0,
                                  headMetaAuthorship: !0,
                                  headMetaVerification: !0
                              }
                            : !1 === p
                              ? {}
                              : p,
                    dataURLOptions: N,
                    inlineImages: u,
                    recordCanvas: I,
                    preserveWhiteSpace: T,
                    onSerialize: L,
                    onIframeLoad: h,
                    iframeLoadTimeout: O,
                    onStylesheetLoad: D,
                    stylesheetLoadTimeout: g,
                    keepIframeSrcFn: P,
                    newlyAddedElement: !1
                });
            })(document, {
                mirror: eO,
                blockClass: c,
                blockSelector: s,
                unblockSelector: E,
                maskAllText: I,
                maskTextClass: R,
                unmaskTextClass: d,
                maskTextSelector: A,
                unmaskTextSelector: f,
                inlineStylesheet: N,
                maskAllInputs: j,
                maskAttributeFn: O,
                maskInputFn: D,
                maskTextFn: g,
                slimDOM: X,
                dataURLOptions: v,
                recordCanvas: G,
                inlineImages: B,
                onSerialize: (t) => {
                    tF(t, eO) && te.addIframe(t), tj(t, eO) && tt.trackLinkElement(t), tX(t) && tn.addShadowRoot(t.shadowRoot, document);
                },
                onIframeLoad: (t, e) => {
                    te.attachIframe(t, e), t.contentWindow && tr.addWindow(t.contentWindow), tn.observeAttachShadow(t);
                },
                onStylesheetLoad: (t, e) => {
                    tt.attachLinkElement(t, e);
                },
                keepIframeSrcFn: Y
            });
            if (!e) return console.warn('Failed to snapshot the document');
            o({
                type: t0.FullSnapshot,
                data: {
                    node: e,
                    initialOffset: tW(window)
                }
            }),
                ea.forEach((t) => t.unlock()),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && tt.adoptStyleSheets(document.adoptedStyleSheets, eO.getId(document));
        };
    i = t_;
    try {
        let t = [],
            e = (t) =>
                et(el)(
                    {
                        onMutation: k,
                        mutationCb: z,
                        mousemoveCb: (t, e) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: e,
                                    positions: t
                                }
                            }),
                        mouseInteractionCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.MouseInteraction,
                                    ...t
                                }
                            }),
                        scrollCb: J,
                        viewportResizeCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.ViewportResize,
                                    ...t
                                }
                            }),
                        inputCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.Input,
                                    ...t
                                }
                            }),
                        mediaInteractionCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.MediaInteraction,
                                    ...t
                                }
                            }),
                        styleSheetRuleCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.StyleSheetRule,
                                    ...t
                                }
                            }),
                        styleDeclarationCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.StyleDeclaration,
                                    ...t
                                }
                            }),
                        canvasMutationCb: Z,
                        fontCb: (t) =>
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.Font,
                                    ...t
                                }
                            }),
                        selectionCb: (t) => {
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.Selection,
                                    ...t
                                }
                            });
                        },
                        customElementCb: (t) => {
                            o({
                                type: t0.IncrementalSnapshot,
                                data: {
                                    source: t1.CustomElement,
                                    ...t
                                }
                            });
                        },
                        blockClass: c,
                        ignoreClass: l,
                        ignoreSelector: u,
                        maskAllText: I,
                        maskTextClass: R,
                        unmaskTextClass: d,
                        maskTextSelector: A,
                        unmaskTextSelector: f,
                        maskInputOptions: j,
                        inlineStylesheet: N,
                        sampling: y,
                        recordDOM: S,
                        recordCanvas: G,
                        inlineImages: B,
                        userTriggeredOnInput: U,
                        collectFonts: w,
                        doc: t,
                        maskAttributeFn: O,
                        maskInputFn: D,
                        maskTextFn: g,
                        keepIframeSrcFn: Y,
                        blockSelector: s,
                        unblockSelector: E,
                        slimDOMOptions: X,
                        dataURLOptions: v,
                        mirror: eO,
                        iframeManager: te,
                        stylesheetManager: tt,
                        shadowDomManager: tn,
                        processedNodeManager: ta,
                        canvasManager: tr,
                        ignoreCSSAttributes: H,
                        plugins:
                            (0, p.x)([
                                W,
                                'optionalAccess',
                                (t) => t.filter,
                                'call',
                                (t) => t((t) => t.observer),
                                'optionalAccess',
                                (t) => t.map,
                                'call',
                                (t) =>
                                    t((t) => ({
                                        observer: t.observer,
                                        options: t.options,
                                        callback: (e) =>
                                            o({
                                                type: t0.Plugin,
                                                data: {
                                                    plugin: t.name,
                                                    payload: e
                                                }
                                            })
                                    }))
                            ]) || []
                    },
                    {}
                );
        te.addLoadListener((a) => {
            try {
                t.push(e(a.contentDocument));
            } catch (t) {
                console.warn(t);
            }
        });
        let a = () => {
            t_(), t.push(e(document));
        };
        return (
            'interactive' === document.readyState || 'complete' === document.readyState
                ? a()
                : (t.push(
                      tG('DOMContentLoaded', () => {
                          o({
                              type: t0.DomContentLoaded,
                              data: {}
                          }),
                              'DOMContentLoaded' === M && a();
                      })
                  ),
                  t.push(
                      tG(
                          'load',
                          () => {
                              o({
                                  type: t0.Load,
                                  data: {}
                              }),
                                  'load' === M && a();
                          },
                          window
                      )
                  )),
            () => {
                t.forEach((t) => t()), ta.destroy(), (i = void 0), (_ = void 0);
            }
        );
    } catch (t) {
        console.warn(t);
    }
}
function eg(t) {
    return t > 9999999999 ? t : 1000 * t;
}
function eP(t) {
    return t > 9999999999 ? t / 1000 : t;
}
function em(t, e) {
    'sentry.transaction' !== e.category &&
        (['ui.click', 'ui.input'].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(),
        t.addUpdate(
            () => (
                t.throttledAddEvent({
                    type: t0.Custom,
                    timestamp: 1000 * (e.timestamp || 0),
                    data: {
                        tag: 'breadcrumb',
                        payload: (0, y.Fv)(e, 10, 1000)
                    }
                }),
                'console' === e.category
            )
        ));
}
function ey(t) {
    return t.closest('button,a') || t;
}
function ev(t) {
    let e = eC(t);
    return e && e instanceof Element ? ey(e) : e;
}
function eC(t) {
    var e;
    return 'object' == typeof (e = t) && e && 'target' in e ? t.target : t;
}
(eD.mirror = eO),
    (eD.takeFullSnapshot = function (t) {
        if (!i) throw Error('please take full snapshot after start recording');
        i(t);
    });
class eS {
    constructor(t, e, a = em) {
        (this._lastMutation = 0), (this._lastScroll = 0), (this._clicks = []), (this._timeout = e.timeout / 1000), (this._threshold = e.threshold / 1000), (this._scollTimeout = e.scrollTimeout / 1000), (this._replay = t), (this._ignoreSelector = e.ignoreSelector), (this._addBreadcrumbEvent = a);
    }
    addListeners() {
        var t;
        let e =
            ((t = () => {
                this._lastMutation = eb();
            }),
            c ||
                ((c = []),
                (0, v.hl)(V, 'open', function (t) {
                    return function (...e) {
                        if (c)
                            try {
                                c.forEach((t) => t());
                            } catch (t) {}
                        return t.apply(V, e);
                    };
                })),
            c.push(t),
            () => {
                let e = c ? c.indexOf(t) : -1;
                e > -1 && c.splice(e, 1);
            });
        this._teardown = () => {
            e(), (this._clicks = []), (this._lastMutation = 0), (this._lastScroll = 0);
        };
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(t, e) {
        var a, r, n;
        if (((a = e), (r = this._ignoreSelector), !eG.includes(a.tagName) || ('INPUT' === a.tagName && !['submit', 'button'].includes(a.getAttribute('type') || '')) || ('A' === a.tagName && (a.hasAttribute('download') || (a.hasAttribute('target') && '_self' !== a.getAttribute('target')))) || (r && a.matches(r)) || !((n = t).data && 'number' == typeof n.data.nodeId && n.timestamp))) return;
        let _ = {
            timestamp: eP(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: e
        };
        this._clicks.some((t) => t.node === _.node && 1 > Math.abs(t.timestamp - _.timestamp)) || (this._clicks.push(_), 1 === this._clicks.length && this._scheduleCheckClicks());
    }
    registerMutation(t = Date.now()) {
        this._lastMutation = eP(t);
    }
    registerScroll(t = Date.now()) {
        this._lastScroll = eP(t);
    }
    registerClick(t) {
        let e = ey(t);
        this._handleMultiClick(e);
    }
    _handleMultiClick(t) {
        this._getClicks(t).forEach((t) => {
            t.clickCount++;
        });
    }
    _getClicks(t) {
        return this._clicks.filter((e) => e.node === t);
    }
    _checkClicks() {
        let t = [],
            e = eb();
        for (let a of (this._clicks.forEach((a) => {
            !a.mutationAfter && this._lastMutation && (a.mutationAfter = a.timestamp <= this._lastMutation ? this._lastMutation - a.timestamp : void 0), !a.scrollAfter && this._lastScroll && (a.scrollAfter = a.timestamp <= this._lastScroll ? this._lastScroll - a.timestamp : void 0), a.timestamp + this._timeout <= e && t.push(a);
        }),
        t)) {
            let t = this._clicks.indexOf(a);
            t > -1 && (this._generateBreadcrumbs(a), this._clicks.splice(t, 1));
        }
        this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(t) {
        let e = this._replay,
            a = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
            r = t.mutationAfter && t.mutationAfter <= this._threshold,
            { clickCount: n, clickBreadcrumb: _ } = t;
        if (!a && !r) {
            let a = 1000 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                r = a < 1000 * this._timeout ? 'mutation' : 'timeout',
                o = {
                    type: 'default',
                    message: _.message,
                    timestamp: _.timestamp,
                    category: 'ui.slowClickDetected',
                    data: {
                        ..._.data,
                        url: V.location.href,
                        route: e.getCurrentRoute(),
                        timeAfterClickMs: a,
                        endReason: r,
                        clickCount: n || 1
                    }
                };
            this._addBreadcrumbEvent(e, o);
            return;
        }
        if (n > 1) {
            let t = {
                type: 'default',
                message: _.message,
                timestamp: _.timestamp,
                category: 'ui.multiClick',
                data: {
                    ..._.data,
                    url: V.location.href,
                    route: e.getCurrentRoute(),
                    clickCount: n,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(e, t);
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), (this._checkClickTimeout = (0, Y.iK)(() => this._checkClicks(), 1000));
    }
}
let eG = ['A', 'BUTTON', 'INPUT'];
function eb() {
    return Date.now() / 1000;
}
function eM(t) {
    return {
        timestamp: Date.now() / 1000,
        type: 'default',
        ...t
    };
}
((R = A || (A = {}))[(R.Document = 0)] = 'Document'), (R[(R.DocumentType = 1)] = 'DocumentType'), (R[(R.Element = 2)] = 'Element'), (R[(R.Text = 3)] = 'Text'), (R[(R.CDATA = 4)] = 'CDATA'), (R[(R.Comment = 5)] = 'Comment');
let eU = new Set(['id', 'class', 'aria-label', 'role', 'name', 'alt', 'title', 'data-test-id', 'data-testid', 'disabled', 'aria-disabled', 'data-sentry-component']),
    ew = (t) => (e) => {
        var a, r;
        if (!t.isEnabled()) return;
        let n = (function (t) {
            let { target: e, message: a } = (function (t) {
                let e,
                    a = 'click' === t.name,
                    r = null;
                try {
                    (r = a ? ev(t.event) : eC(t.event)), (e = (0, C.Rt)(r, { maxStringLength: 200 }) || '<unknown>');
                } catch (t) {
                    e = '<unknown>';
                }
                return {
                    target: r,
                    message: e
                };
            })(t);
            return eM({
                category: `ui.${t.name}`,
                ...eB(e, a)
            });
        })(e);
        if (!n) return;
        let _ = 'click' === e.name,
            o = _ ? e.event : void 0;
        _ && t.clickDetector && o && o.target && !o.altKey && !o.metaKey && !o.ctrlKey && !o.shiftKey && ((a = t.clickDetector), (r = ev(e.event)), a.handleClick(n, r)), em(t, n);
    };
function eB(t, e) {
    let a = eD.mirror.getId(t),
        r = a && eD.mirror.getNode(a),
        n = r && eD.mirror.getMeta(r),
        _ = n && n.type === A.Element ? n : null;
    return {
        message: e,
        data: _
            ? {
                  nodeId: a,
                  node: {
                      id: a,
                      tagName: _.tagName,
                      textContent: Array.from(_.childNodes)
                          .map((t) => t.type === A.Text && t.textContent)
                          .filter(Boolean)
                          .map((t) => t.trim())
                          .join(''),
                      attributes: (function (t) {
                          let e = {};
                          for (let a in (!t['data-sentry-component'] && t['data-sentry-element'] && (t['data-sentry-component'] = t['data-sentry-element']), t))
                              if (eU.has(a)) {
                                  let r = a;
                                  ('data-testid' === a || 'data-test-id' === a) && (r = 'testId'), (e[r] = t[a]);
                              }
                          return e;
                      })(_.attributes)
                  }
              }
            : {}
    };
}
let eW = {
    resource: function (t) {
        let { entryType: e, initiatorType: a, name: r, responseEnd: n, startTime: _, decodedBodySize: o, encodedBodySize: i, responseStatus: c, transferSize: s } = t;
        return ['fetch', 'xmlhttprequest'].includes(a)
            ? null
            : {
                  type: `${e}.${a}`,
                  start: eK(_),
                  end: eK(n),
                  name: r,
                  data: {
                      size: s,
                      statusCode: c,
                      decodedBodySize: o,
                      encodedBodySize: i
                  }
              };
    },
    paint: function (t) {
        let { duration: e, entryType: a, name: r, startTime: n } = t,
            _ = eK(n);
        return {
            type: a,
            name: r,
            start: _,
            end: _ + e,
            data: void 0
        };
    },
    navigation: function (t) {
        let { entryType: e, name: a, decodedBodySize: r, duration: n, domComplete: _, encodedBodySize: o, domContentLoadedEventStart: i, domContentLoadedEventEnd: c, domInteractive: s, loadEventStart: E, loadEventEnd: l, redirectCount: u, startTime: I, transferSize: R, type: d } = t;
        return 0 === n
            ? null
            : {
                  type: `${e}.${d}`,
                  start: eK(I),
                  end: eK(_),
                  name: a,
                  data: {
                      size: R,
                      decodedBodySize: r,
                      encodedBodySize: o,
                      duration: n,
                      domInteractive: s,
                      domContentLoadedEventStart: i,
                      domContentLoadedEventEnd: c,
                      loadEventStart: E,
                      loadEventEnd: l,
                      domComplete: _,
                      redirectCount: u
                  }
              };
    }
};
function eY(t, e) {
    return ({ metric: a }) => void e.replayPerformanceEntries.push(t(a));
}
function eH(t) {
    let e = eW[t.entryType];
    return e ? e(t) : null;
}
function eK(t) {
    return ((S.Z1 || V.performance.timeOrigin) + t) / 1000;
}
function ek(t) {
    let e = t.entries[t.entries.length - 1];
    return ej(t, 'largest-contentful-paint', e && e.element ? [e.element] : void 0);
}
function ex(t) {
    let e = t.entries[t.entries.length - 1],
        a = [];
    if (e && e.sources) for (let t of e.sources) t.node && a.push(t.node);
    return ej(t, 'cumulative-layout-shift', a);
}
function eV(t) {
    let e = t.entries[t.entries.length - 1];
    return ej(t, 'first-input-delay', e && e.target ? [e.target] : void 0);
}
function eF(t) {
    let e = t.entries[t.entries.length - 1];
    return ej(t, 'interaction-to-next-paint', e && e.target ? [e.target] : void 0);
}
function ej(t, e, a) {
    let r = t.value,
        n = t.rating,
        _ = eK(r);
    return {
        type: 'web-vital',
        name: e,
        start: _,
        end: _,
        data: {
            value: r,
            size: r,
            rating: n,
            nodeIds: a ? a.map((t) => eD.mirror.getId(t)) : void 0
        }
    };
}
let eX = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function e$(t, e) {
    eX && (G.kg.info(t), e && ez(t));
}
function eq(t, e) {
    eX &&
        (G.kg.info(t),
        e &&
            (0, Y.iK)(() => {
                ez(t);
            }, 0));
}
function ez(t) {
    (0, N.n)(
        {
            category: 'console',
            data: { logger: 'replay' },
            level: 'info',
            message: t
        },
        { level: 'info' }
    );
}
class eJ extends Error {
    constructor() {
        super('Event buffer exceeded maximum size of 20000000.');
    }
}
class eZ {
    constructor() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
        return this.events.length > 0;
    }
    get type() {
        return 'sync';
    }
    destroy() {
        this.events = [];
    }
    async addEvent(t) {
        let e = JSON.stringify(t).length;
        if (((this._totalSize += e), this._totalSize > 20000000)) throw new eJ();
        this.events.push(t);
    }
    finish() {
        return new Promise((t) => {
            let e = this.events;
            this.clear(), t(JSON.stringify(e));
        });
    }
    clear() {
        (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    getEarliestTimestamp() {
        let t = this.events.map((t) => t.timestamp).sort()[0];
        return t ? eg(t) : null;
    }
}
class eQ {
    constructor(t) {
        (this._worker = t), (this._id = 0);
    }
    ensureReady() {
        return (
            this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((t, e) => {
                    this._worker.addEventListener(
                        'message',
                        ({ data: a }) => {
                            a.success ? t() : e();
                        },
                        { once: !0 }
                    ),
                        this._worker.addEventListener(
                            'error',
                            (t) => {
                                e(t);
                            },
                            { once: !0 }
                        );
                })),
            this._ensureReadyPromise
        );
    }
    destroy() {
        e$('[Replay] Destroying compression worker'), this._worker.terminate();
    }
    postMessage(t, e) {
        let a = this._getAndIncrementId();
        return new Promise((r, n) => {
            let _ = ({ data: e }) => {
                if (e.method === t && e.id === a) {
                    if ((this._worker.removeEventListener('message', _), !e.success)) {
                        eX && G.kg.error('[Replay]', e.response), n(Error('Error in compression worker'));
                        return;
                    }
                    r(e.response);
                }
            };
            this._worker.addEventListener('message', _),
                this._worker.postMessage({
                    id: a,
                    method: t,
                    arg: e
                });
        });
    }
    _getAndIncrementId() {
        return this._id++;
    }
}
class e0 {
    constructor(t) {
        (this._worker = new eQ(t)), (this._earliestTimestamp = null), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
        return !!this._earliestTimestamp;
    }
    get type() {
        return 'worker';
    }
    ensureReady() {
        return this._worker.ensureReady();
    }
    destroy() {
        this._worker.destroy();
    }
    addEvent(t) {
        let e = eg(t.timestamp);
        (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
        let a = JSON.stringify(t);
        return ((this._totalSize += a.length), this._totalSize > 20000000) ? Promise.reject(new eJ()) : this._sendEventToWorker(a);
    }
    finish() {
        return this._finishRequest();
    }
    clear() {
        (this._earliestTimestamp = null),
            (this._totalSize = 0),
            (this.hasCheckout = !1),
            this._worker.postMessage('clear').then(null, (t) => {
                eX && G.kg.warn('[Replay] Sending "clear" message to worker failed', t);
            });
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp;
    }
    _sendEventToWorker(t) {
        return this._worker.postMessage('addEvent', t);
    }
    async _finishRequest() {
        let t = await this._worker.postMessage('finish');
        return (this._earliestTimestamp = null), (this._totalSize = 0), t;
    }
}
class e1 {
    constructor(t) {
        (this._fallback = new eZ()), (this._compression = new e0(t)), (this._used = this._fallback), (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
    }
    get type() {
        return this._used.type;
    }
    get hasEvents() {
        return this._used.hasEvents;
    }
    get hasCheckout() {
        return this._used.hasCheckout;
    }
    set hasCheckout(t) {
        this._used.hasCheckout = t;
    }
    destroy() {
        this._fallback.destroy(), this._compression.destroy();
    }
    clear() {
        return this._used.clear();
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp();
    }
    addEvent(t) {
        return this._used.addEvent(t);
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish();
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise;
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady();
        } catch (t) {
            e$('[Replay] Failed to load the compression worker, falling back to simple buffer');
            return;
        }
        await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
        let { events: t, hasCheckout: e } = this._fallback,
            a = [];
        for (let e of t) a.push(this._compression.addEvent(e));
        (this._compression.hasCheckout = e), (this._used = this._compression);
        try {
            await Promise.all(a);
        } catch (t) {
            eX && G.kg.warn('[Replay] Failed to add events when switching buffers.', t);
        }
    }
}
function e2() {
    try {
        return 'sessionStorage' in V && !!V.sessionStorage;
    } catch (t) {
        return !1;
    }
}
function e3(t) {
    return void 0 !== t && Math.random() < t;
}
function e6(t) {
    let e = Date.now(),
        a = t.id || (0, b.DM)(),
        r = t.started || e,
        n = t.lastActivity || e,
        _ = t.segmentId || 0;
    return {
        id: a,
        started: r,
        lastActivity: n,
        segmentId: _,
        sampled: t.sampled,
        previousSessionId: t.previousSessionId
    };
}
function e4(t) {
    if (e2())
        try {
            V.sessionStorage.setItem(F, JSON.stringify(t));
        } catch (t) {}
}
function e5({ sessionSampleRate: t, allowBuffering: e, stickySession: a = !1 }, { previousSessionId: r } = {}) {
    let n = e6({
        sampled: e3(t) ? 'session' : !!e && 'buffer',
        previousSessionId: r
    });
    return a && e4(n), n;
}
function e8(t, e, a = +new Date()) {
    return null === t || void 0 === e || e < 0 || (0 !== e && t + e <= a);
}
function e7(t, { maxReplayDuration: e, sessionIdleExpire: a, targetTime: r = Date.now() }) {
    return e8(t.started, e, r) || e8(t.lastActivity, a, r);
}
function e9(t, { sessionIdleExpire: e, maxReplayDuration: a }) {
    return (
        !!e7(t, {
            sessionIdleExpire: e,
            maxReplayDuration: a
        }) &&
        ('buffer' !== t.sampled || 0 !== t.segmentId)
    );
}
function at({ traceInternals: t, sessionIdleExpire: e, maxReplayDuration: a, previousSessionId: r }, n) {
    let _ =
        n.stickySession &&
        (function (t) {
            if (!e2()) return null;
            try {
                let e = V.sessionStorage.getItem(F);
                if (!e) return null;
                let a = JSON.parse(e);
                return eq('[Replay] Loading existing session', t), e6(a);
            } catch (t) {
                return null;
            }
        })(t);
    return _
        ? e9(_, {
              sessionIdleExpire: e,
              maxReplayDuration: a
          })
            ? (eq('[Replay] Session in sessionStorage is expired, creating new one...'), e5(n, { previousSessionId: _.id }))
            : _
        : (eq('[Replay] Creating new session', t), e5(n, { previousSessionId: r }));
}
function ae(t, e, a) {
    return !!ar(t, e) && (aa(t, e, a), !0);
}
async function aa(t, e, a) {
    if (!t.eventBuffer) return null;
    try {
        a && 'buffer' === t.recordingMode && t.eventBuffer.clear(), a && (t.eventBuffer.hasCheckout = !0);
        let r = t.getOptions(),
            n = (function (t, e) {
                try {
                    if ('function' == typeof e && t.type === t0.Custom) return e(t);
                } catch (t) {
                    return eX && G.kg.error('[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...', t), null;
                }
                return t;
            })(e, r.beforeAddRecordingEvent);
        if (!n) return;
        return await t.eventBuffer.addEvent(n);
    } catch (r) {
        let e = r && r instanceof eJ ? 'addEventSizeExceeded' : 'addEvent';
        t.handleException(r), await t.stop({ reason: e });
        let a = (0, T.s3)();
        a && a.recordDroppedEvent('internal_sdk_error', 'replay');
    }
}
function ar(t, e) {
    if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
    let a = eg(e.timestamp);
    return !(a + t.timeouts.sessionIdlePause < Date.now()) && (!(a > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration) || (eq(`[Replay] Skipping event with timestamp ${a} because it is after maxReplayDuration`, t.getOptions()._experiments.traceInternals), !1));
}
function an(t) {
    return 'transaction' === t.type;
}
function a_(t) {
    return 'feedback' === t.type;
}
function ao(t) {
    return !!t.category;
}
function ai(t, e) {
    return e.map(({ type: e, start: a, end: r, name: n, data: _ }) => {
        let o = t.throttledAddEvent({
            type: t0.Custom,
            timestamp: a,
            data: {
                tag: 'performanceSpan',
                payload: {
                    op: e,
                    description: n,
                    startTimestamp: a,
                    endTimestamp: r,
                    data: _
                }
            }
        });
        return 'string' == typeof o ? Promise.resolve(null) : o;
    });
}
function ac(t, e) {
    var a;
    t.isEnabled() && null !== e && ((a = e.name), ((!eX || !t.getOptions()._experiments.traceInternals) && (0, L.W)(a, (0, T.s3)())) || t.addUpdate(() => (ai(t, [e]), !0)));
}
function as(t) {
    if (!t) return;
    let e = new TextEncoder();
    try {
        if ('string' == typeof t) return e.encode(t).length;
        if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
        if (t instanceof FormData) {
            let a = af(t);
            return e.encode(a).length;
        }
        if (t instanceof Blob) return t.size;
        if (t instanceof ArrayBuffer) return t.byteLength;
    } catch (t) {}
}
function aE(t) {
    if (!t) return;
    let e = parseInt(t, 10);
    return isNaN(e) ? void 0 : e;
}
function al(t) {
    try {
        if ('string' == typeof t) return [t];
        if (t instanceof URLSearchParams) return [t.toString()];
        if (t instanceof FormData) return [af(t)];
        if (!t) return [void 0];
    } catch (e) {
        return eX && G.kg.warn('[Replay] Failed to serialize body', t), [void 0, 'BODY_PARSE_ERROR'];
    }
    return eX && G.kg.info('[Replay] Skipping network body because of body type', t), [void 0, 'UNPARSEABLE_BODY_TYPE'];
}
function au(t, e) {
    if (!t)
        return {
            headers: {},
            size: void 0,
            _meta: { warnings: [e] }
        };
    let a = { ...t._meta },
        r = a.warnings || [];
    return (a.warnings = [...r, e]), (t._meta = a), t;
}
function aI(t, e) {
    if (!e) return null;
    let { startTimestamp: a, endTimestamp: r, url: n, method: _, statusCode: o, request: i, response: c } = e;
    return {
        type: t,
        start: a / 1000,
        end: r / 1000,
        name: n,
        data: (0, v.Jr)({
            method: _,
            statusCode: o,
            request: i,
            response: c
        })
    };
}
function aR(t) {
    return {
        headers: {},
        size: t,
        _meta: { warnings: ['URL_SKIPPED'] }
    };
}
function ad(t, e, a) {
    if (!e && 0 === Object.keys(t).length) return;
    if (!e) return { headers: t };
    if (!a)
        return {
            headers: t,
            size: e
        };
    let r = {
            headers: t,
            size: e
        },
        { body: n, warnings: _ } = (function (t) {
            if (!t || 'string' != typeof t) return { body: t };
            let e = t.length > 150000,
                a = (function (t) {
                    let e = t[0],
                        a = t[t.length - 1];
                    return ('[' === e && ']' === a) || ('{' === e && '}' === a);
                })(t);
            if (e) {
                let e = t.slice(0, 150000);
                return a
                    ? {
                          body: e,
                          warnings: ['MAYBE_JSON_TRUNCATED']
                      }
                    : {
                          body: `${e}…`,
                          warnings: ['TEXT_TRUNCATED']
                      };
            }
            if (a)
                try {
                    return { body: JSON.parse(t) };
                } catch (t) {}
            return { body: t };
        })(a);
    return (r.body = n), _ && _.length > 0 && (r._meta = { warnings: _ }), r;
}
function aA(t, e) {
    return Object.entries(t).reduce((a, [r, n]) => {
        let _ = r.toLowerCase();
        return e.includes(_) && t[r] && (a[_] = n), a;
    }, {});
}
function af(t) {
    return new URLSearchParams(t).toString();
}
function ap(t, e) {
    let a = (function (t, e = V.document.baseURI) {
        if (t.startsWith('http://') || t.startsWith('https://') || t.startsWith(V.location.origin)) return t;
        let a = new URL(t, e);
        if (a.origin !== new URL(e).origin) return t;
        let r = a.href;
        return !t.endsWith('/') && r.endsWith('/') ? r.slice(0, -1) : r;
    })(t);
    return (0, M.U0)(a, e);
}
async function aN(t, e, a) {
    try {
        let r = await aT(t, e, a),
            n = aI('resource.fetch', r);
        ac(a.replay, n);
    } catch (t) {
        eX && G.kg.error('[Replay] Failed to capture fetch breadcrumb', t);
    }
}
async function aT(t, e, a) {
    let r = Date.now(),
        { startTimestamp: n = r, endTimestamp: _ = r } = e,
        { url: o, method: i, status_code: c = 0, request_body_size: s, response_body_size: E } = t.data,
        l = ap(o, a.networkDetailAllowUrls) && !ap(o, a.networkDetailDenyUrls);
    return {
        startTimestamp: n,
        endTimestamp: _,
        url: o,
        method: i,
        statusCode: c,
        request: l
            ? (function ({ networkCaptureBodies: t, networkRequestHeaders: e }, a, r) {
                  var n, _;
                  let o = a ? ((n = a), (_ = e), 1 === n.length && 'string' != typeof n[0] ? ag(n[0], _) : 2 === n.length ? ag(n[1], _) : {}) : {};
                  if (!t) return ad(o, r, void 0);
                  let [i, c] = al(aO(a)),
                      s = ad(o, r, i);
                  return c ? au(s, c) : s;
              })(a, e.input, s)
            : aR(s),
        response: await aL(l, a, e.response, E)
    };
}
async function aL(t, { networkCaptureBodies: e, networkResponseHeaders: a }, r, n) {
    if (!t && void 0 !== n) return aR(n);
    let _ = r ? aD(r.headers, a) : {};
    if (!r || (!e && void 0 !== n)) return ad(_, n, void 0);
    let [o, i] = await ah(r),
        c = (function (t, { networkCaptureBodies: e, responseBodySize: a, captureDetails: r, headers: n }) {
            try {
                let _ = t && t.length && void 0 === a ? as(t) : a;
                if (!r) return aR(_);
                if (e) return ad(n, _, t);
                return ad(n, _, void 0);
            } catch (t) {
                return eX && G.kg.warn('[Replay] Failed to serialize response body', t), ad(n, a, void 0);
            }
        })(o, {
            networkCaptureBodies: e,
            responseBodySize: n,
            captureDetails: t,
            headers: _
        });
    return i ? au(c, i) : c;
}
async function ah(t) {
    let e = (function (t) {
        try {
            return t.clone();
        } catch (t) {
            eX && G.kg.warn('[Replay] Failed to clone response body', t);
        }
    })(t);
    if (!e) return [void 0, 'BODY_PARSE_ERROR'];
    try {
        var a;
        return [
            await ((a = e),
            new Promise((t, e) => {
                let r = (0, Y.iK)(() => e(Error('Timeout while trying to read response body')), 500);
                aP(a)
                    .then(
                        (e) => t(e),
                        (t) => e(t)
                    )
                    .finally(() => clearTimeout(r));
            }))
        ];
    } catch (t) {
        return eX && G.kg.warn('[Replay] Failed to get text body from response', t), [void 0, 'BODY_PARSE_ERROR'];
    }
}
function aO(t = []) {
    if (2 === t.length && 'object' == typeof t[1]) return t[1].body;
}
function aD(t, e) {
    let a = {};
    return (
        e.forEach((e) => {
            t.get(e) && (a[e] = t.get(e));
        }),
        a
    );
}
function ag(t, e) {
    if (!t) return {};
    let a = t.headers;
    return a ? (a instanceof Headers ? aD(a, e) : Array.isArray(a) ? {} : aA(a, e)) : {};
}
async function aP(t) {
    return await t.text();
}
async function am(t, e, a) {
    try {
        let r = (function (t, e, a) {
                let r = Date.now(),
                    { startTimestamp: n = r, endTimestamp: _ = r, input: o, xhr: i } = e,
                    { url: c, method: s, status_code: E = 0, request_body_size: l, response_body_size: u } = t.data;
                if (!c) return null;
                if (!i || !ap(c, a.networkDetailAllowUrls) || ap(c, a.networkDetailDenyUrls)) {
                    let t = aR(l);
                    return {
                        startTimestamp: n,
                        endTimestamp: _,
                        url: c,
                        method: s,
                        statusCode: E,
                        request: t,
                        response: aR(u)
                    };
                }
                let I = i[K.xU],
                    R = I ? aA(I.request_headers, a.networkRequestHeaders) : {},
                    d = aA(
                        (function (t) {
                            let e = t.getAllResponseHeaders();
                            return e
                                ? e.split('\r\n').reduce((t, e) => {
                                      let [a, r] = e.split(': ');
                                      return r && (t[a.toLowerCase()] = r), t;
                                  }, {})
                                : {};
                        })(i),
                        a.networkResponseHeaders
                    ),
                    [A, f] = a.networkCaptureBodies ? al(o) : [void 0],
                    [p, N] = a.networkCaptureBodies
                        ? (function (t) {
                              let e = [];
                              try {
                                  return [t.responseText];
                              } catch (t) {
                                  e.push(t);
                              }
                              try {
                                  var a = t.response,
                                      r = t.responseType;
                                  try {
                                      if ('string' == typeof a) return [a];
                                      if (a instanceof Document) return [a.body.outerHTML];
                                      if ('json' === r && a && 'object' == typeof a) return [JSON.stringify(a)];
                                      if (!a) return [void 0];
                                  } catch (t) {
                                      return eX && G.kg.warn('[Replay] Failed to serialize body', a), [void 0, 'BODY_PARSE_ERROR'];
                                  }
                                  return eX && G.kg.info('[Replay] Skipping network body because of body type', a), [void 0, 'UNPARSEABLE_BODY_TYPE'];
                              } catch (t) {
                                  e.push(t);
                              }
                              return eX && G.kg.warn('[Replay] Failed to get xhr response body', ...e), [void 0];
                          })(i)
                        : [void 0],
                    T = ad(R, l, A),
                    L = ad(d, u, p);
                return {
                    startTimestamp: n,
                    endTimestamp: _,
                    url: c,
                    method: s,
                    statusCode: E,
                    request: f ? au(T, f) : T,
                    response: N ? au(L, N) : L
                };
            })(t, e, a),
            n = aI('resource.xhr', r);
        ac(a.replay, n);
    } catch (t) {
        eX && G.kg.error('[Replay] Failed to capture xhr breadcrumb', t);
    }
}
async function ay(t) {
    try {
        return Promise.all(
            ai(t, [
                (function (t) {
                    let { jsHeapSizeLimit: e, totalJSHeapSize: a, usedJSHeapSize: r } = t,
                        n = Date.now() / 1000;
                    return {
                        type: 'memory',
                        name: 'memory',
                        start: n,
                        end: n,
                        data: {
                            memory: {
                                jsHeapSizeLimit: e,
                                totalJSHeapSize: a,
                                usedJSHeapSize: r
                            }
                        }
                    };
                })(V.performance.memory)
            ])
        );
    } catch (t) {
        return [];
    }
}
async function av({ client: t, scope: e, replayId: a, event: r }) {
    let n = {
        event_id: a,
        integrations: 'object' != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
    };
    t.emit('preprocessEvent', r, n);
    let _ = await (0, O.R)(t.getOptions(), r, n, e, t, (0, T.aF)());
    if (!_) return null;
    _.platform = _.platform || 'javascript';
    let o = t.getSdkMetadata(),
        { name: i, version: c } = (o && o.sdk) || {};
    return (
        (_.sdk = {
            ..._.sdk,
            name: i || 'sentry.javascript.unknown',
            version: c || '0.0.0'
        }),
        _
    );
}
async function aC({ recordingData: t, replayId: e, segmentId: a, eventContext: r, timestamp: n, session: _ }) {
    var o;
    let i,
        c = (function ({ recordingData: t, headers: e }) {
            let a,
                r = `${JSON.stringify(e)}
`;
            if ('string' == typeof t) a = `${r}${t}`;
            else {
                let e = new TextEncoder().encode(r);
                (a = new Uint8Array(e.length + t.length)).set(e), a.set(t, e.length);
            }
            return a;
        })({
            recordingData: t,
            headers: { segment_id: a }
        }),
        { urls: s, errorIds: E, traceIds: l, initialTimestamp: u } = r,
        I = (0, T.s3)(),
        R = (0, T.nZ)(),
        d = I && I.getTransport(),
        A = I && I.getDsn();
    if (!I || !d || !A || !_.sampled) return (0, w.WD)({});
    let f = {
            type: 'replay_event',
            replay_start_timestamp: u / 1000,
            timestamp: n / 1000,
            error_ids: E,
            trace_ids: l,
            urls: s,
            replay_id: e,
            segment_id: a,
            replay_type: _.sampled
        },
        p = await av({
            scope: R,
            client: I,
            replayId: e,
            event: f
        });
    if (!p) return I.recordDroppedEvent('event_processor', 'replay', f), e$('An event processor returned `null`, will not send event.'), (0, w.WD)({});
    delete p.sdkProcessingMetadata;
    let N =
        ((o = I.getOptions().tunnel),
        (0, U.Jd)((0, U.Cd)(p, (0, U.HY)(p), o, A), [
            [{ type: 'replay_event' }, p],
            [
                {
                    type: 'replay_recording',
                    length: 'string' == typeof c ? new TextEncoder().encode(c).length : c.length
                },
                c
            ]
        ]));
    try {
        i = await d.send(N);
    } catch (e) {
        let t = Error(j);
        try {
            t.cause = e;
        } catch (t) {}
        throw t;
    }
    if ('number' == typeof i.statusCode && (i.statusCode < 200 || i.statusCode >= 300)) throw new aS(i.statusCode);
    let L = (0, B.WG)({}, i);
    if ((0, B.Q)(L, 'replay')) throw new aG(L);
    return i;
}
class aS extends Error {
    constructor(t) {
        super(`Transport returned status code ${t}`);
    }
}
class aG extends Error {
    constructor(t) {
        super('Rate limit hit'), (this.rateLimits = t);
    }
}
async function ab(
    t,
    e = {
        count: 0,
        interval: 5000
    }
) {
    let { recordingData: a, options: r } = t;
    if (a.length)
        try {
            return await aC(t), !0;
        } catch (a) {
            if (a instanceof aS || a instanceof aG) throw a;
            if (((0, h.v)('Replays', { _retryCount: e.count }), eX && r._experiments && r._experiments.captureExceptions && (0, h.Tb)(a), e.count >= 3)) {
                let t = Error(`${j} - max retries exceeded`);
                try {
                    t.cause = a;
                } catch (t) {}
                throw t;
            }
            return (
                (e.interval *= ++e.count),
                new Promise((a, r) => {
                    (0, Y.iK)(async () => {
                        try {
                            await ab(t, e), a(!0);
                        } catch (t) {
                            r(t);
                        }
                    }, e.interval);
                })
            );
        }
}
let aM = '__THROTTLED';
class aU {
    constructor({ options: t, recordingOptions: e }) {
        aU.prototype.__init.call(this),
            aU.prototype.__init2.call(this),
            aU.prototype.__init3.call(this),
            aU.prototype.__init4.call(this),
            aU.prototype.__init5.call(this),
            aU.prototype.__init6.call(this),
            (this.eventBuffer = null),
            (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            (this.recordingMode = 'session'),
            (this.timeouts = {
                sessionIdlePause: 300000,
                sessionIdleExpire: 900000
            }),
            (this._lastActivity = Date.now()),
            (this._isEnabled = !1),
            (this._isPaused = !1),
            (this._requiresManualStart = !1),
            (this._hasInitializedCoreListeners = !1),
            (this._context = {
                errorIds: new Set(),
                traceIds: new Set(),
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: ''
            }),
            (this._recordingOptions = e),
            (this._options = t),
            (this._debouncedFlush = (function (t, e, a) {
                let r,
                    n,
                    _,
                    o = a && a.maxWait ? Math.max(a.maxWait, e) : 0;
                function i() {
                    return c(), (r = t());
                }
                function c() {
                    void 0 !== n && clearTimeout(n), void 0 !== _ && clearTimeout(_), (n = _ = void 0);
                }
                function s() {
                    return n && clearTimeout(n), (n = (0, Y.iK)(i, e)), o && void 0 === _ && (_ = (0, Y.iK)(i, o)), r;
                }
                return (
                    (s.cancel = c),
                    (s.flush = function () {
                        return void 0 !== n || void 0 !== _ ? i() : r;
                    }),
                    s
                );
            })(() => this._flush(), this._options.flushMinDelay, { maxWait: this._options.flushMaxDelay })),
            (this._throttledAddEvent = (function (t, e, a) {
                let r = new Map(),
                    n = (t) => {
                        let e = t - 5;
                        r.forEach((t, a) => {
                            a < e && r.delete(a);
                        });
                    },
                    _ = () => [...r.values()].reduce((t, e) => t + e, 0),
                    o = !1;
                return (...e) => {
                    let a = Math.floor(Date.now() / 1000);
                    if ((n(a), _() >= 300)) {
                        let t = o;
                        return (o = !0), t ? '__SKIPPED' : aM;
                    }
                    o = !1;
                    let i = r.get(a) || 0;
                    return r.set(a, i + 1), t(...e);
                };
            })((t, e) => (ar(this, t) ? aa(this, t, e) : Promise.resolve(null)), 0, 0));
        let { slowClickTimeout: a, slowClickIgnoreSelectors: r } = this.getOptions(),
            n = a
                ? {
                      threshold: Math.min(3000, a),
                      timeout: a,
                      scrollTimeout: 300,
                      ignoreSelector: r ? r.join(',') : ''
                  }
                : void 0;
        n && (this.clickDetector = new eS(this, n));
    }
    getContext() {
        return this._context;
    }
    isEnabled() {
        return this._isEnabled;
    }
    isPaused() {
        return this._isPaused;
    }
    isRecordingCanvas() {
        return !!this._canvas;
    }
    getOptions() {
        return this._options;
    }
    handleException(t) {
        eX && G.kg.error('[Replay]', t), eX && this._options._experiments && this._options._experiments.captureExceptions && (0, h.Tb)(t);
    }
    initializeSampling(t) {
        let { errorSampleRate: e, sessionSampleRate: a } = this._options,
            r = e <= 0 && a <= 0;
        if (((this._requiresManualStart = r), !r)) {
            if ((this._initializeSessionForSampling(t), !this.session)) return void this.handleException(Error('Unable to initialize and create session'));
            !1 !== this.session.sampled && ((this.recordingMode = 'buffer' === this.session.sampled && 0 === this.session.segmentId ? 'buffer' : 'session'), eq(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording());
        }
    }
    start() {
        if (this._isEnabled && 'session' === this.recordingMode) {
            eX && G.kg.info('[Replay] Recording is already in progress');
            return;
        }
        if (this._isEnabled && 'buffer' === this.recordingMode) {
            eX && G.kg.info('[Replay] Buffering is in progress, call `flush()` to save the replay');
            return;
        }
        eq('[Replay] Starting replay in session mode', this._options._experiments.traceInternals), this._updateUserActivity();
        let t = at(
            {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                traceInternals: this._options._experiments.traceInternals
            },
            {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1
            }
        );
        (this.session = t), this._initializeRecording();
    }
    startBuffering() {
        if (this._isEnabled) {
            eX && G.kg.info('[Replay] Buffering is in progress, call `flush()` to save the replay');
            return;
        }
        eq('[Replay] Starting replay in buffer mode', this._options._experiments.traceInternals);
        let t = at(
            {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                traceInternals: this._options._experiments.traceInternals
            },
            {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0
            }
        );
        (this.session = t), (this.recordingMode = 'buffer'), this._initializeRecording();
    }
    startRecording() {
        try {
            var t;
            let e,
                a = this._canvas;
            this._stopRecording = eD({
                ...this._recordingOptions,
                ...('buffer' === this.recordingMode && { checkoutEveryNms: 60000 }),
                emit:
                    ((t = this),
                    (e = !1),
                    (a, r) => {
                        if (!t.checkAndHandleExpiredSession()) {
                            eX && G.kg.warn('[Replay] Received replay event after session expired.');
                            return;
                        }
                        let n = r || !e;
                        (e = !0),
                            t.clickDetector &&
                                (function (t, e) {
                                    try {
                                        var a;
                                        if (((a = e), 3 !== a.type)) return;
                                        let { source: r } = e.data;
                                        if ((r === t1.Mutation && t.registerMutation(e.timestamp), r === t1.Scroll && t.registerScroll(e.timestamp), e.data.source === t1.MouseInteraction)) {
                                            let { type: a, id: r } = e.data,
                                                n = eD.mirror.getNode(r);
                                            n instanceof HTMLElement && a === t2.Click && t.registerClick(n);
                                        }
                                    } catch (t) {}
                                })(t.clickDetector, a),
                            t.addUpdate(() => {
                                var e;
                                if (('buffer' === t.recordingMode && n && t.setInitialState(), !ae(t, a, n))) return !0;
                                if (!n) return !1;
                                if (
                                    ((e = t),
                                    n &&
                                        e.session &&
                                        0 === e.session.segmentId &&
                                        ae(
                                            e,
                                            (function (t) {
                                                let e = t.getOptions();
                                                return {
                                                    type: t0.Custom,
                                                    timestamp: Date.now(),
                                                    data: {
                                                        tag: 'options',
                                                        payload: {
                                                            shouldRecordCanvas: t.isRecordingCanvas(),
                                                            sessionSampleRate: e.sessionSampleRate,
                                                            errorSampleRate: e.errorSampleRate,
                                                            useCompressionOption: e.useCompression,
                                                            blockAllMedia: e.blockAllMedia,
                                                            maskAllText: e.maskAllText,
                                                            maskAllInputs: e.maskAllInputs,
                                                            useCompression: !!t.eventBuffer && 'worker' === t.eventBuffer.type,
                                                            networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                                            networkCaptureBodies: e.networkCaptureBodies,
                                                            networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                                            networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                                        }
                                                    }
                                                };
                                            })(e),
                                            !1
                                        ),
                                    t.session && t.session.previousSessionId)
                                )
                                    return !0;
                                if ('buffer' === t.recordingMode && t.session && t.eventBuffer) {
                                    let e = t.eventBuffer.getEarliestTimestamp();
                                    e && (e$(`[Replay] Updating session start time to earliest event in buffer to ${new Date(e)}`, t.getOptions()._experiments.traceInternals), (t.session.started = e), t.getOptions().stickySession && e4(t.session));
                                }
                                return 'session' === t.recordingMode && t.flush(), !0;
                            });
                    }),
                onMutation: this._onMutationHandler,
                ...(a
                    ? {
                          recordCanvas: a.recordCanvas,
                          getCanvasManager: a.getCanvasManager,
                          sampling: a.sampling,
                          dataURLOptions: a.dataURLOptions
                      }
                    : {})
            });
        } catch (t) {
            this.handleException(t);
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), (this._stopRecording = void 0)), !0;
        } catch (t) {
            return this.handleException(t), !1;
        }
    }
    async stop({ forceFlush: t = !1, reason: e } = {}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                e$(`[Replay] Stopping Replay${e ? ` triggered by ${e}` : ''}`, this._options._experiments.traceInternals),
                    this._removeListeners(),
                    this.stopRecording(),
                    this._debouncedFlush.cancel(),
                    t && (await this._flush({ force: !0 })),
                    this.eventBuffer && this.eventBuffer.destroy(),
                    (this.eventBuffer = null),
                    (function () {
                        if (e2())
                            try {
                                V.sessionStorage.removeItem(F);
                            } catch (t) {}
                    })(),
                    (this.session = void 0);
            } catch (t) {
                this.handleException(t);
            }
        }
    }
    pause() {
        this._isPaused || ((this._isPaused = !0), this.stopRecording(), e$('[Replay] Pausing replay', this._options._experiments.traceInternals));
    }
    resume() {
        this._isPaused && this._checkSession() && ((this._isPaused = !1), this.startRecording(), e$('[Replay] Resuming replay', this._options._experiments.traceInternals));
    }
    async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
        if ('session' === this.recordingMode) return this.flushImmediate();
        let e = Date.now();
        e$('[Replay] Converting buffer to session', this._options._experiments.traceInternals), await this.flushImmediate();
        let a = this.stopRecording();
        t && a && 'session' !== this.recordingMode && ((this.recordingMode = 'session'), this.session && (this._updateUserActivity(e), this._updateSessionActivity(e), this._maybeSaveSession()), this.startRecording());
    }
    addUpdate(t) {
        let e = t();
        'buffer' !== this.recordingMode && !0 !== e && this._debouncedFlush();
    }
    triggerUserActivity() {
        if ((this._updateUserActivity(), !this._stopRecording)) {
            if (!this._checkSession()) return;
            this.resume();
            return;
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity();
    }
    updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity();
    }
    conditionalFlush() {
        return 'buffer' === this.recordingMode ? Promise.resolve() : this.flushImmediate();
    }
    flush() {
        return this._debouncedFlush();
    }
    flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush();
    }
    cancelFlush() {
        this._debouncedFlush.cancel();
    }
    getSessionId() {
        return this.session && this.session.id;
    }
    checkAndHandleExpiredSession() {
        return this._lastActivity && e8(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && 'session' === this.session.sampled ? void this.pause() : !!this._checkSession();
    }
    setInitialState() {
        let t = `${V.location.pathname}${V.location.hash}${V.location.search}`,
            e = `${V.location.origin}${t}`;
        (this.performanceEntries = []), (this.replayPerformanceEntries = []), this._clearContext(), (this._context.initialUrl = e), (this._context.initialTimestamp = Date.now()), this._context.urls.push(e);
    }
    throttledAddEvent(t, e) {
        let a = this._throttledAddEvent(t, e);
        if (a === aM) {
            let t = eM({ category: 'replay.throttled' });
            this.addUpdate(
                () =>
                    !ae(this, {
                        type: 5,
                        timestamp: t.timestamp || 0,
                        data: {
                            tag: 'breadcrumb',
                            payload: t,
                            metric: !0
                        }
                    })
            );
        }
        return a;
    }
    getCurrentRoute() {
        let t = this.lastActiveSpan || (0, D.HN)(),
            e = t && (0, D.Gx)(t),
            a = ((e && (0, D.XU)(e).data) || {})[g.Zj];
        if (e && a && ['route', 'custom'].includes(a)) return (0, D.XU)(e).description;
    }
    _initializeRecording() {
        this.setInitialState(),
            this._updateSessionActivity(),
            (this.eventBuffer = (function ({ useCompression: t, workerUrl: e }) {
                if (t && window.Worker) {
                    let t = (function (t) {
                        try {
                            let e =
                                t ||
                                (function () {
                                    if ('undefined' == typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                                        let t = new Blob([
                                            'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});'
                                        ]);
                                        return URL.createObjectURL(t);
                                    }
                                    return '';
                                })();
                            if (!e) return;
                            e$(`[Replay] Using compression worker${t ? ` from ${t}` : ''}`);
                            let a = new Worker(e);
                            return new e1(a);
                        } catch (t) {
                            e$('[Replay] Failed to create compression worker');
                        }
                    })(e);
                    if (t) return t;
                }
                return e$('[Replay] Using simple buffer'), new eZ();
            })({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl
            })),
            this._removeListeners(),
            this._addListeners(),
            (this._isEnabled = !0),
            (this._isPaused = !1),
            this.startRecording();
    }
    _initializeSessionForSampling(t) {
        let e = this._options.errorSampleRate > 0,
            a = at(
                {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: t
                },
                {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: e
                }
            );
        this.session = a;
    }
    _checkSession() {
        if (!this.session) return !1;
        let t = this.session;
        return (
            !e9(t, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration
            }) || (this._refreshSession(t), !1)
        );
    }
    async _refreshSession(t) {
        this._isEnabled && (await this.stop({ reason: 'refresh session' }), this.initializeSampling(t.id));
    }
    _addListeners() {
        try {
            V.document.addEventListener('visibilitychange', this._handleVisibilityChange),
                V.addEventListener('blur', this._handleWindowBlur),
                V.addEventListener('focus', this._handleWindowFocus),
                V.addEventListener('keydown', this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                    (!(function (t) {
                        let e = (0, T.s3)();
                        (0, k.O)(ew(t)),
                            (0, x.a)((e) => {
                                if (!t.isEnabled()) return;
                                let a = (function (t) {
                                    let { from: e, to: a } = t,
                                        r = Date.now() / 1000;
                                    return {
                                        type: 'navigation.push',
                                        start: r,
                                        end: r,
                                        name: a,
                                        data: { previous: e }
                                    };
                                })(e);
                                null !== a && (t.getContext().urls.push(a.name), t.triggerUserActivity(), t.addUpdate(() => (ai(t, [a]), !1)));
                            });
                        let a = (0, T.s3)();
                        a &&
                            a.on('beforeAddBreadcrumb', (e) =>
                                (function (t, e) {
                                    var a;
                                    if (!t.isEnabled() || !ao(e)) return;
                                    let r =
                                        ((a = e),
                                        !ao(a) || ['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(a.category) || a.category.startsWith('ui.')
                                            ? null
                                            : 'console' === a.category
                                              ? (function (t) {
                                                    let e = t.data && t.data.arguments;
                                                    if (!Array.isArray(e) || 0 === e.length) return eM(t);
                                                    let a = !1,
                                                        r = e.map((t) => {
                                                            if (!t) return t;
                                                            if ('string' == typeof t) return t.length > 5000 ? ((a = !0), `${t.slice(0, 5000)}…`) : t;
                                                            if ('object' == typeof t)
                                                                try {
                                                                    let e = (0, y.Fv)(t, 7);
                                                                    if (JSON.stringify(e).length > 5000) return (a = !0), `${JSON.stringify(e, null, 2).slice(0, 5000)}…`;
                                                                    return e;
                                                                } catch (t) {}
                                                            return t;
                                                        });
                                                    return eM({
                                                        ...t,
                                                        data: {
                                                            ...t.data,
                                                            arguments: r,
                                                            ...(a ? { _meta: { warnings: ['CONSOLE_ARG_TRUNCATED'] } } : {})
                                                        }
                                                    });
                                                })(a)
                                              : eM(a));
                                    r && em(t, r);
                                })(t, e)
                            );
                        let r = (0, T.s3)();
                        try {
                            let { networkDetailAllowUrls: e, networkDetailDenyUrls: a, networkCaptureBodies: n, networkRequestHeaders: _, networkResponseHeaders: o } = t.getOptions(),
                                i = {
                                    replay: t,
                                    networkDetailAllowUrls: e,
                                    networkDetailDenyUrls: a,
                                    networkCaptureBodies: n,
                                    networkRequestHeaders: _,
                                    networkResponseHeaders: o
                                };
                            r &&
                                r.on('beforeAddBreadcrumb', (t, e) =>
                                    (function (t, e, a) {
                                        if (e.data)
                                            try {
                                                var r, n, _, o;
                                                if (
                                                    ((r = e),
                                                    'xhr' === r.category &&
                                                        (n = a) &&
                                                        n.xhr &&
                                                        (!(function (t, e) {
                                                            let { xhr: a, input: r } = e;
                                                            if (!a) return;
                                                            let n = as(r),
                                                                _ = a.getResponseHeader('content-length')
                                                                    ? aE(a.getResponseHeader('content-length'))
                                                                    : (function (t, e) {
                                                                          try {
                                                                              let a = 'json' === e && t && 'object' == typeof t ? JSON.stringify(t) : t;
                                                                              return as(a);
                                                                          } catch (t) {
                                                                              return;
                                                                          }
                                                                      })(a.response, a.responseType);
                                                            void 0 !== n && (t.data.request_body_size = n), void 0 !== _ && (t.data.response_body_size = _);
                                                        })(e, a),
                                                        am(e, a, t)),
                                                    (_ = e),
                                                    'fetch' === _.category && (o = a) && o.response)
                                                ) {
                                                    let { input: r, response: n } = a,
                                                        _ = as(r ? aO(r) : void 0),
                                                        o = n ? aE(n.headers.get('content-length')) : void 0;
                                                    void 0 !== _ && (e.data.request_body_size = _), void 0 !== o && (e.data.response_body_size = o), aN(e, a, t);
                                                }
                                            } catch (t) {
                                                eX && G.kg.warn('Error when enriching network breadcrumb');
                                            }
                                    })(i, t, e)
                                );
                        } catch (t) {}
                        let n = Object.assign(
                            (e, a) =>
                                t.isEnabled()
                                    ? 'replay_event' === e.type
                                        ? (delete e.breadcrumbs, e)
                                        : (!e.type || an(e) || a_(e)) && t.checkAndHandleExpiredSession()
                                          ? a_(e)
                                              ? (t.flush(),
                                                (e.contexts.feedback.replay_id = t.getSessionId()),
                                                t.triggerUserActivity(),
                                                t.addUpdate(
                                                    () =>
                                                        !e.timestamp ||
                                                        (t.throttledAddEvent({
                                                            type: t0.Custom,
                                                            timestamp: 1000 * e.timestamp,
                                                            data: {
                                                                tag: 'breadcrumb',
                                                                payload: {
                                                                    timestamp: e.timestamp,
                                                                    type: 'default',
                                                                    category: 'sentry.feedback',
                                                                    data: { feedbackId: e.event_id }
                                                                }
                                                            }
                                                        }),
                                                        !1)
                                                ),
                                                e)
                                              : !e.type && e.exception && e.exception.values && e.exception.values.length && a.originalException && a.originalException.__rrweb__ && !t.getOptions()._experiments.captureExceptions
                                                ? (eX && G.kg.log('[Replay] Ignoring error from rrweb internals', e), null)
                                                : ((('buffer' === t.recordingMode && e.message !== j && e.exception && !e.type && e3(t.getOptions().errorSampleRate)) || 'session' === t.recordingMode) &&
                                                      (e.tags = {
                                                          ...e.tags,
                                                          replayId: t.getSessionId()
                                                      }),
                                                  e)
                                          : e
                                    : e,
                            { id: 'Replay' }
                        );
                        (0, h.Qy)(n),
                            e &&
                                (e.on('beforeSendEvent', (e) => {
                                    t.isEnabled() &&
                                        !e.type &&
                                        (function (t, e) {
                                            let a = e.exception && e.exception.values && e.exception.values[0] && e.exception.values[0].value;
                                            'string' == typeof a &&
                                                (a.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || a.match(/(does not match server-rendered HTML|Hydration failed because)/i)) &&
                                                em(
                                                    t,
                                                    eM({
                                                        category: 'replay.hydrate-error',
                                                        data: { url: (0, C.l4)() }
                                                    })
                                                );
                                        })(t, e);
                                }),
                                e.on('afterSendEvent', (e, a) => {
                                    if (!t.isEnabled() || (e.type && !an(e))) return;
                                    let r = a && a.statusCode;
                                    if (r && !(r < 200) && !(r >= 300)) {
                                        if (an(e))
                                            return void (function (t, e) {
                                                let a = t.getContext();
                                                e.contexts && e.contexts.trace && e.contexts.trace.trace_id && a.traceIds.size < 100 && a.traceIds.add(e.contexts.trace.trace_id);
                                            })(t, e);
                                        !(function (t, e) {
                                            let a = t.getContext();
                                            if ((e.event_id && a.errorIds.size < 100 && a.errorIds.add(e.event_id), 'buffer' !== t.recordingMode || !e.tags || !e.tags.replayId)) return;
                                            let { beforeErrorSampling: r } = t.getOptions();
                                            ('function' != typeof r || r(e)) &&
                                                (0, Y.iK)(() => {
                                                    t.sendBufferedReplayOrFlush();
                                                });
                                        })(t, e);
                                    }
                                }),
                                e.on('createDsc', (e) => {
                                    let a = t.getSessionId();
                                    a && t.isEnabled() && 'session' === t.recordingMode && t.checkAndHandleExpiredSession() && (e.replay_id = a);
                                }),
                                e.on('spanStart', (e) => {
                                    t.lastActiveSpan = e;
                                }),
                                e.on('spanEnd', (e) => {
                                    t.lastActiveSpan = e;
                                }),
                                e.on('beforeSendFeedback', (e, a) => {
                                    let r = t.getSessionId();
                                    a && a.includeReplay && t.isEnabled() && r && e.contexts && e.contexts.feedback && (e.contexts.feedback.replay_id = r);
                                }));
                    })(this),
                    (this._hasInitializedCoreListeners = !0));
        } catch (t) {
            this.handleException(t);
        }
        this._performanceCleanupCallback = (function (t) {
            function e(e) {
                t.performanceEntries.includes(e) || t.performanceEntries.push(e);
            }
            function a({ entries: t }) {
                t.forEach(e);
            }
            let r = [];
            return (
                ['navigation', 'paint', 'resource'].forEach((t) => {
                    r.push((0, H._j)(t, a));
                }),
                r.push((0, H.$A)(eY(ek, t)), (0, H.PR)(eY(ex, t)), (0, H.to)(eY(eV, t)), (0, H.YF)(eY(eF, t))),
                () => {
                    r.forEach((t) => t());
                }
            );
        })(this);
    }
    _removeListeners() {
        try {
            V.document.removeEventListener('visibilitychange', this._handleVisibilityChange), V.removeEventListener('blur', this._handleWindowBlur), V.removeEventListener('focus', this._handleWindowFocus), V.removeEventListener('keydown', this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback();
        } catch (t) {
            this.handleException(t);
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            'visible' === V.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
        };
    }
    __init2() {
        this._handleWindowBlur = () => {
            let t = eM({ category: 'ui.blur' });
            this._doChangeToBackgroundTasks(t);
        };
    }
    __init3() {
        this._handleWindowFocus = () => {
            let t = eM({ category: 'ui.focus' });
            this._doChangeToForegroundTasks(t);
        };
    }
    __init4() {
        this._handleKeyboardEvent = (t) => {
            !(function (t, e) {
                if (!t.isEnabled()) return;
                t.updateUserActivity();
                let a = (function (t) {
                    var e;
                    let { metaKey: a, shiftKey: r, ctrlKey: n, altKey: _, key: o, target: i } = t;
                    if (!i || 'INPUT' === (e = i).tagName || 'TEXTAREA' === e.tagName || e.isContentEditable || !o) return null;
                    let c = a || n || _,
                        s = 1 === o.length;
                    if (!c && s) return null;
                    let E = (0, C.Rt)(i, { maxStringLength: 200 }) || '<unknown>',
                        l = eB(i, E);
                    return eM({
                        category: 'ui.keyDown',
                        message: E,
                        data: {
                            ...l.data,
                            metaKey: a,
                            shiftKey: r,
                            ctrlKey: n,
                            altKey: _,
                            key: o
                        }
                    });
                })(e);
                a && em(t, a);
            })(this, t);
        };
    }
    _doChangeToBackgroundTasks(t) {
        this.session &&
            (e7(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire
            }) ||
                (t && this._createCustomBreadcrumb(t), this.conditionalFlush()));
    }
    _doChangeToForegroundTasks(t) {
        if (this.session) {
            if (!this.checkAndHandleExpiredSession()) return void e$('[Replay] Document has become active, but session has expired');
            t && this._createCustomBreadcrumb(t);
        }
    }
    _updateUserActivity(t = Date.now()) {
        this._lastActivity = t;
    }
    _updateSessionActivity(t = Date.now()) {
        this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
    }
    _createCustomBreadcrumb(t) {
        this.addUpdate(() => {
            this.throttledAddEvent({
                type: t0.Custom,
                timestamp: t.timestamp || 0,
                data: {
                    tag: 'breadcrumb',
                    payload: t
                }
            });
        });
    }
    _addPerformanceEntries() {
        let t = this.performanceEntries.map(eH).filter(Boolean).concat(this.replayPerformanceEntries);
        return (this.performanceEntries = []), (this.replayPerformanceEntries = []), Promise.all(ai(this, t));
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
    }
    _updateInitialTimestampFromEventBuffer() {
        let { session: t, eventBuffer: e } = this;
        if (!t || !e || this._requiresManualStart || t.segmentId) return;
        let a = e.getEarliestTimestamp();
        a && a < this._context.initialTimestamp && (this._context.initialTimestamp = a);
    }
    _popEventContext() {
        let t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(), t;
    }
    async _runFlush() {
        let t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            eX && G.kg.error('[Replay] No session or eventBuffer found to flush.');
            return;
        }
        if ((await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents)) {
            if ((await ay(this), this.eventBuffer) && t === this.getSessionId())
                try {
                    this._updateInitialTimestampFromEventBuffer();
                    let e = Date.now();
                    if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 30000) throw Error('Session is too long, not sending replay');
                    let a = this._popEventContext(),
                        r = this.session.segmentId++;
                    this._maybeSaveSession();
                    let n = await this.eventBuffer.finish();
                    await ab({
                        replayId: t,
                        recordingData: n,
                        segmentId: r,
                        eventContext: a,
                        session: this.session,
                        options: this.getOptions(),
                        timestamp: e
                    });
                } catch (e) {
                    this.handleException(e), this.stop({ reason: 'sendReplay' });
                    let t = (0, T.s3)();
                    t && t.recordDroppedEvent('send_error', 'replay');
                }
        }
    }
    __init5() {
        this._flush = async ({ force: t = !1 } = {}) => {
            if (!this._isEnabled && !t) return;
            if (!this.checkAndHandleExpiredSession()) {
                eX && G.kg.error('[Replay] Attempting to finish replay event after session expired.');
                return;
            }
            if (!this.session) return;
            let e = this.session.started,
                a = Date.now() - e;
            this._debouncedFlush.cancel();
            let r = a < this._options.minReplayDuration,
                n = a > this._options.maxReplayDuration + 5000;
            if (r || n) {
                e$(`[Replay] Session duration (${Math.floor(a / 1000)}s) is too ${r ? 'short' : 'long'}, not sending replay.`, this._options._experiments.traceInternals), r && this._debouncedFlush();
                return;
            }
            let _ = this.eventBuffer;
            if ((_ && 0 === this.session.segmentId && !_.hasCheckout && e$('[Replay] Flushing initial segment without checkout.', this._options._experiments.traceInternals), !this._flushLock)) {
                (this._flushLock = this._runFlush()), await this._flushLock, (this._flushLock = void 0);
                return;
            }
            try {
                await this._flushLock;
            } catch (t) {
                eX && G.kg.error(t);
            } finally {
                this._debouncedFlush();
            }
        };
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && e4(this.session);
    }
    __init6() {
        this._onMutationHandler = (t) => {
            let e = t.length,
                a = this._options.mutationLimit,
                r = this._options.mutationBreadcrumbLimit,
                n = a && e > a;
            if (e > r || n) {
                let t = eM({
                    category: 'replay.mutations',
                    data: {
                        count: e,
                        limit: n
                    }
                });
                this._createCustomBreadcrumb(t);
            }
            return (
                !n ||
                (this.stop({
                    reason: 'mutationLimit',
                    forceFlush: 'session' === this.recordingMode
                }),
                !1)
            );
        };
    }
}
function aw(t, e) {
    return [...t, ...e].join(',');
}
let aB = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    aW = ['content-length', 'content-type', 'accept'],
    aY = !1,
    aH = (t) => new aK(t);
class aK {
    static __initStatic() {
        this.id = 'Replay';
    }
    constructor({ flushMinDelay: t = 5000, flushMaxDelay: e = 5500, minReplayDuration: a = 4999, maxReplayDuration: r = 3600000, stickySession: n = !0, useCompression: _ = !0, workerUrl: o, _experiments: i = {}, maskAllText: c = !0, maskAllInputs: s = !0, blockAllMedia: E = !0, mutationBreadcrumbLimit: l = 750, mutationLimit: u = 10000, slowClickTimeout: I = 7000, slowClickIgnoreSelectors: R = [], networkDetailAllowUrls: d = [], networkDetailDenyUrls: A = [], networkCaptureBodies: f = !0, networkRequestHeaders: p = [], networkResponseHeaders: N = [], mask: T = [], maskAttributes: L = ['title', 'placeholder'], unmask: h = [], block: O = [], unblock: D = [], ignore: g = [], maskFn: P, beforeAddRecordingEvent: m, beforeErrorSampling: y } = {}) {
        this.name = aK.id;
        let v = (function ({ mask: t, unmask: e, block: a, unblock: r, ignore: n }) {
            return {
                maskTextSelector: aw(t, ['.sentry-mask', '[data-sentry-mask]']),
                unmaskTextSelector: aw(e, []),
                blockSelector: aw(a, ['.sentry-block', '[data-sentry-block]', 'base[href="/"]']),
                unblockSelector: aw(r, []),
                ignoreSelector: aw(n, ['.sentry-ignore', '[data-sentry-ignore]', 'input[type="file"]'])
            };
        })({
            mask: T,
            unmask: h,
            block: O,
            unblock: D,
            ignore: g
        });
        if (
            ((this._recordingOptions = {
                maskAllInputs: s,
                maskAllText: c,
                maskInputOptions: { password: !0 },
                maskTextFn: P,
                maskInputFn: P,
                maskAttributeFn: (t, e, a) =>
                    (function ({ el: t, key: e, maskAttributes: a, maskAllText: r, privacyOptions: n, value: _ }) {
                        return !r || (n.unmaskTextSelector && t.matches(n.unmaskTextSelector)) ? _ : a.includes(e) || ('value' === e && 'INPUT' === t.tagName && ['submit', 'button'].includes(t.getAttribute('type') || '')) ? _.replace(/[\S]/g, '*') : _;
                    })({
                        maskAttributes: L,
                        maskAllText: c,
                        privacyOptions: v,
                        key: t,
                        value: e,
                        el: a
                    }),
                ...v,
                slimDOMOptions: 'all',
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: (t) => {
                    try {
                        t.__rrweb__ = !0;
                    } catch (t) {}
                }
            }),
            (this._initialOptions = {
                flushMinDelay: t,
                flushMaxDelay: e,
                minReplayDuration: Math.min(a, 15000),
                maxReplayDuration: Math.min(r, 3600000),
                stickySession: n,
                useCompression: _,
                workerUrl: o,
                blockAllMedia: E,
                maskAllInputs: s,
                maskAllText: c,
                mutationBreadcrumbLimit: l,
                mutationLimit: u,
                slowClickTimeout: I,
                slowClickIgnoreSelectors: R,
                networkDetailAllowUrls: d,
                networkDetailDenyUrls: A,
                networkCaptureBodies: f,
                networkRequestHeaders: ak(p),
                networkResponseHeaders: ak(N),
                beforeAddRecordingEvent: m,
                beforeErrorSampling: y,
                _experiments: i
            }),
            this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${aB}` : aB),
            this._isInitialized && (0, W.j)())
        )
            throw Error('Multiple Sentry Session Replay instances are not supported');
        this._isInitialized = !0;
    }
    get _isInitialized() {
        return aY;
    }
    set _isInitialized(t) {
        aY = t;
    }
    afterAllSetup(t) {
        (0, W.j)() && !this._replay && (this._setup(t), this._initialize(t));
    }
    start() {
        this._replay && this._replay.start();
    }
    startBuffering() {
        this._replay && this._replay.startBuffering();
    }
    stop() {
        return this._replay ? this._replay.stop({ forceFlush: 'session' === this._replay.recordingMode }) : Promise.resolve();
    }
    flush(t) {
        return this._replay ? (this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : (this._replay.start(), Promise.resolve())) : Promise.resolve();
    }
    getReplayId() {
        if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId();
    }
    _initialize(t) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(t), this._replay.initializeSampling());
    }
    _setup(t) {
        let e = (function (t, e) {
            let a = e.getOptions(),
                r = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...(0, v.Jr)(t)
                },
                n = (0, P.o)(a.replaysSessionSampleRate),
                _ = (0, P.o)(a.replaysOnErrorSampleRate);
            return (
                null == n &&
                    null == _ &&
                    (0, G.Cf)(() => {
                        console.warn('Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.');
                    }),
                null != n && (r.sessionSampleRate = n),
                null != _ && (r.errorSampleRate = _),
                r
            );
        })(this._initialOptions, t);
        this._replay = new aU({
            options: e,
            recordingOptions: this._recordingOptions
        });
    }
    _maybeLoadFromReplayCanvasIntegration(t) {
        try {
            let e = t.getIntegrationByName('ReplayCanvas');
            if (!e) return;
            this._replay._canvas = e.getOptions();
        } catch (t) {}
    }
}
function ak(t) {
    return [...aW, ...t.map((t) => t.toLowerCase())];
}
function ax() {
    let t = (0, T.s3)();
    return t && t.getIntegrationByName('Replay');
}
aK.__initStatic();
