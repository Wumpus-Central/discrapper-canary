n.d(t, { Z: () => u }), n(47120), n(301563);
var r = n(485589),
    a = n(14160),
    l = n(247123),
    i = n(207662);
let u = {
    id: 'aria-attribute-valid-value',
    selector: i.J8,
    tags: [],
    metadata: {
        description: 'ARIA attributes must use valid values',
        help: ''
    },
    check: function (e) {
        let t = (function (e) {
            for (let k of i.cg)
                if (e.hasAttribute(k)) {
                    let i = e.getAttribute(k),
                        I = r.aria.get(k);
                    switch (I.type) {
                        case 'string':
                            return l.w;
                        case 'id':
                            return (u = k), (o = i), null == document.getElementById(o) ? ''.concat(u, ' references #').concat(o, ' which does not exist') : l.w;
                        case 'idlist':
                            var t = k,
                                n = i,
                                a = e;
                            if (('aria-controls' === t && ('false' === a.getAttribute('aria-expanded') || 'false' === a.getAttribute('aria-selected'))) || ('aria-owns' === t && 'false' === a.getAttribute('aria-expanded'))) return l.w;
                            for (let e of n.split(' ')) if (null == document.getElementById(e)) return ''.concat(t, ' references #').concat(n, ' which does not exist');
                            return l.w;
                        case 'integer':
                            return (c = k), String(parseInt((s = i), 10)) !== s ? ''.concat(c, ' requires an integer but got ').concat(s) : l.w;
                        case 'number':
                            return (d = k), isFinite((f = i)) ? l.w : ''.concat(d, ' requires a numeric value but got ').concat(f);
                        case 'boolean':
                            return (h = k), (b = i), (m = I), 'true' === b || 'false' === b || ('' === b && !0 === m.allowundefined) ? l.w : ''.concat(h, ' must be either "true" or "false"');
                        case 'token':
                            return (function (e, t, n) {
                                var r, a;
                                let i = (function (e) {
                                    switch (e) {
                                        case 'true':
                                            return !0;
                                        case 'false':
                                            return !1;
                                        default:
                                            return e;
                                    }
                                })(t);
                                return (null == (r = n.values) ? void 0 : r.includes(i))
                                    ? l.w
                                    : ''
                                          .concat(e, ' was ')
                                          .concat(t, ' but must be: ')
                                          .concat(null == (a = n.values) ? void 0 : a.join(', '));
                            })(k, i, I);
                        case 'tokenlist':
                            var u,
                                o,
                                c,
                                s,
                                d,
                                f,
                                h,
                                b,
                                m,
                                p,
                                g,
                                v = k,
                                w = i,
                                A = I;
                            for (let e of w.split(' ')) {
                                if (null == (p = A.values) || !p.includes(e))
                                    return ''
                                        .concat(v, ' included ')
                                        .concat(w, ' but is restricted to: ')
                                        .concat(null == (g = A.values) ? void 0 : g.join(', '));
                            }
                            return l.w;
                        case 'tristate':
                            var y = k,
                                x = i;
                            switch (x) {
                                case 'true':
                                case 'false':
                                case 'mixed':
                                    return l.w;
                                default:
                                    return ''.concat(y, ' must be "true", "false", or "mixed" not ').concat(x);
                            }
                    }
                }
            return l.w;
        })(e);
        return t !== l.w && ((0, i.Uu)(e) || !(0, a.p)(e)) ? l.w : t;
    }
};
