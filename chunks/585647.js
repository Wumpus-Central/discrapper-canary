n.d(t, { Z: () => o }), n(47120);
var r = n(485589),
    a = n(14160),
    i = n(247123),
    l = n(207662);
let o = {
    id: 'aria-attribute-valid-value',
    selector: l.J8,
    tags: [],
    metadata: {
        description: 'ARIA attributes must use valid values',
        help: ''
    },
    check: function (e) {
        let t = (function (e) {
            for (let h of l.cg)
                if (e.hasAttribute(h)) {
                    var t, n, a, o, u, c, s, d, f;
                    let l = e.getAttribute(h),
                        b = r.aria.get(h);
                    switch (b.type) {
                        case 'string':
                            return i.w;
                        case 'id':
                            return (t = h), (n = l), null == document.getElementById(n) ? ''.concat(t, ' references #').concat(n, ' which does not exist') : i.w;
                        case 'idlist':
                            return (function (e, t, n) {
                                if (('aria-controls' === e && ('false' === n.getAttribute('aria-expanded') || 'false' === n.getAttribute('aria-selected'))) || ('aria-owns' === e && 'false' === n.getAttribute('aria-expanded'))) return i.w;
                                for (let n of t.split(' ')) if (null == document.getElementById(n)) return ''.concat(e, ' references #').concat(t, ' which does not exist');
                                return i.w;
                            })(h, l, e);
                        case 'integer':
                            return (a = h), String(parseInt((o = l), 10)) !== o ? ''.concat(a, ' requires an integer but got ').concat(o) : i.w;
                        case 'number':
                            return (u = h), isFinite((c = l)) ? i.w : ''.concat(u, ' requires a numeric value but got ').concat(c);
                        case 'boolean':
                            return (s = h), (d = l), (f = b), 'true' === d || 'false' === d || ('' === d && !0 === f.allowundefined) ? i.w : ''.concat(s, ' must be either "true" or "false"');
                        case 'token':
                            return (function (e, t, n) {
                                var r, a;
                                let l = (function (e) {
                                    switch (e) {
                                        case 'true':
                                            return !0;
                                        case 'false':
                                            return !1;
                                        default:
                                            return e;
                                    }
                                })(t);
                                return (null === (r = n.values) || void 0 === r ? void 0 : r.includes(l))
                                    ? i.w
                                    : ''
                                          .concat(e, ' was ')
                                          .concat(t, ' but must be: ')
                                          .concat(null === (a = n.values) || void 0 === a ? void 0 : a.join(', '));
                            })(h, l, b);
                        case 'tokenlist':
                            return (function (e, t, n) {
                                for (let i of t.split(' ')) {
                                    var r, a;
                                    if (null === (r = n.values) || void 0 === r || !r.includes(i))
                                        return ''
                                            .concat(e, ' included ')
                                            .concat(t, ' but is restricted to: ')
                                            .concat(null === (a = n.values) || void 0 === a ? void 0 : a.join(', '));
                                }
                                return i.w;
                            })(h, l, b);
                        case 'tristate':
                            return (function (e, t) {
                                switch (t) {
                                    case 'true':
                                    case 'false':
                                    case 'mixed':
                                        return i.w;
                                    default:
                                        return ''.concat(e, ' must be "true", "false", or "mixed" not ').concat(t);
                                }
                            })(h, l);
                    }
                }
            return i.w;
        })(e);
        return t !== i.w && ((0, l.Uu)(e) || !(0, a.p)(e)) ? i.w : t;
    }
};
