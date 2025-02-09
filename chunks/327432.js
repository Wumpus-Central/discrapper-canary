n.d(t, {
    E9: () => ef,
    Jh: () => m,
    ML: () => $,
    NB: () => er,
    W_: () => K,
    YR: () => eY,
    e6: () => eg,
    o4: () => ey,
    xv: () => eN,
    y$: () => el
});
var i,
    r = n(855242),
    a = n(688451);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o = new WeakMap(),
    l = new WeakMap(),
    u = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    f = new WeakMap(),
    _ = new WeakMap();
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? p(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var m = () => {
    var e = {
        children: [],
        operations: [],
        selection: null,
        marks: null,
        isInline: () => !1,
        isVoid: () => !1,
        markableVoid: () => !1,
        onChange: () => {},
        apply: (t) => {
            for (var n of $.pathRefs(e)) eu.transform(n, t);
            for (var i of $.pointRefs(e)) e_.transform(i, t);
            for (var r of $.rangeRefs(e)) eE.transform(r, t);
            var a,
                s,
                c = o.get(e) || [],
                d = l.get(e) || new Set(),
                f = (e) => {
                    if (e) {
                        var t = e.join(',');
                        s.has(t) || (s.add(t), a.push(e));
                    }
                };
            if (el.operationCanTransformPath(t)) for (var _ of ((a = []), (s = new Set()), c)) f(el.transform(_, t));
            else (a = c), (s = d);
            for (var p of e.getDirtyPaths(t)) f(p);
            o.set(e, a),
                l.set(e, s),
                eY.transform(e, t),
                e.operations.push(t),
                $.normalize(e, { operation: t }),
                'set_selection' === t.type && (e.marks = null),
                u.get(e) ||
                    (u.set(e, !0),
                    Promise.resolve().then(() => {
                        u.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: i, markableVoid: r } = e;
            if (i) {
                var a = (t, n) => {
                        if (!eN.isText(t)) return !1;
                        var [i, r] = $.parent(e, n);
                        return !e.isVoid(i) || e.markableVoid(i);
                    },
                    s = eg.isExpanded(i),
                    o = !1;
                if (!s) {
                    var [l, c] = $.node(e, i);
                    if (l && a(l, c)) {
                        var [d] = $.parent(e, c);
                        o = d && e.markableVoid(d);
                    }
                }
                if (s || o)
                    eY.setNodes(
                        e,
                        { [t]: n },
                        {
                            match: a,
                            split: !0,
                            voids: !0
                        }
                    );
                else {
                    var f = h(h({}, $.marks(e) || {}), {}, { [t]: n });
                    (e.marks = f), u.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n &&
                eg.isCollapsed(n) &&
                eY.delete(e, {
                    unit: t,
                    reverse: !0
                });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && eg.isCollapsed(n) && eY.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && eg.isExpanded(n) && eY.delete(e, { reverse: 'backward' === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? er.fragment(e, t) : [];
        },
        insertBreak: () => {
            eY.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eY.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            eY.insertFragment(e, t);
        },
        insertNode: (t) => {
            eY.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: i } = e;
            if (n) {
                if (i) {
                    var r = h({ text: t }, i);
                    eY.insertNodes(e, r);
                } else eY.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, i] = t;
            if (!eN.isText(n)) {
                if (K.isElement(n) && 0 === n.children.length) {
                    var r = { text: '' };
                    eY.insertNodes(e, r, {
                        at: i.concat(0),
                        voids: !0
                    });
                    return;
                }
                for (var a = !$.isEditor(n) && K.isElement(n) && (e.isInline(n) || 0 === n.children.length || eN.isText(n.children[0]) || e.isInline(n.children[0])), s = 0, o = 0; o < n.children.length; o++, s++) {
                    var l = er.get(e, i);
                    if (!eN.isText(l)) {
                        var u = n.children[o],
                            c = l.children[s - 1],
                            d = o === n.children.length - 1,
                            f = eN.isText(u) || (K.isElement(u) && e.isInline(u));
                        if (f !== a)
                            eY.removeNodes(e, {
                                at: i.concat(s),
                                voids: !0
                            }),
                                s--;
                        else if (K.isElement(u)) {
                            if (e.isInline(u)) {
                                if (null != c && eN.isText(c)) {
                                    if (d) {
                                        var _ = { text: '' };
                                        eY.insertNodes(e, _, {
                                            at: i.concat(s + 1),
                                            voids: !0
                                        }),
                                            s++;
                                    }
                                } else {
                                    var p = { text: '' };
                                    eY.insertNodes(e, p, {
                                        at: i.concat(s),
                                        voids: !0
                                    }),
                                        s++;
                                }
                            }
                        } else
                            null != c &&
                                eN.isText(c) &&
                                (eN.equals(u, c, { loose: !0 })
                                    ? (eY.mergeNodes(e, {
                                          at: i.concat(s),
                                          voids: !0
                                      }),
                                      s--)
                                    : '' === c.text
                                      ? (eY.removeNodes(e, {
                                            at: i.concat(s - 1),
                                            voids: !0
                                        }),
                                        s--)
                                      : '' === u.text &&
                                        (eY.removeNodes(e, {
                                            at: i.concat(s),
                                            voids: !0
                                        }),
                                        s--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var i = (t, n) => {
                        if (!eN.isText(t)) return !1;
                        var [i, r] = $.parent(e, n);
                        return !e.isVoid(i) || e.markableVoid(i);
                    },
                    r = eg.isExpanded(n),
                    a = !1;
                if (!r) {
                    var [s, o] = $.node(e, n);
                    if (s && i(s, o)) {
                        var [l] = $.parent(e, o);
                        a = l && e.markableVoid(l);
                    }
                }
                if (r || a)
                    eY.unsetNodes(e, t, {
                        match: i,
                        split: !0,
                        voids: !0
                    });
                else {
                    var c = h({}, $.marks(e) || {});
                    delete c[t], (e.marks = c), u.get(e) || e.onChange();
                }
            }
        },
        getDirtyPaths: (e) => {
            switch (e.type) {
                case 'insert_text':
                case 'remove_text':
                case 'set_node':
                    var { path: t } = e;
                    return el.levels(t);
                case 'insert_node':
                    var { node: n, path: i } = e;
                    return [
                        ...el.levels(i),
                        ...(eN.isText(n)
                            ? []
                            : Array.from(er.nodes(n), (e) => {
                                  var [, t] = e;
                                  return i.concat(t);
                              }))
                    ];
                case 'merge_node':
                    var { path: r } = e;
                    return [...el.ancestors(r), el.previous(r)];
                case 'move_node':
                    var { path: a, newPath: s } = e;
                    if (el.equals(a, s)) return [];
                    var o = [],
                        l = [];
                    for (var u of el.ancestors(a)) {
                        var c = el.transform(u, e);
                        o.push(c);
                    }
                    for (var d of el.ancestors(s)) {
                        var f = el.transform(d, e);
                        l.push(f);
                    }
                    var _ = l[l.length - 1],
                        p = s[s.length - 1];
                    return [...o, ...l, _.concat(p)];
                case 'remove_node':
                    var { path: h } = e;
                    return [...el.ancestors(h)];
                case 'split_node':
                    var { path: m } = e;
                    return [...el.levels(m), el.next(m)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
                i = 42 * n;
            if (t > i) throw Error('Could not completely normalize the editor after '.concat(i, ' iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.'));
            return !0;
        }
    };
    return e;
};
function g(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        a = Object.keys(e);
    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var v = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            r = t ? N(e) : e,
            a = i.None,
            s = i.None,
            o = 0,
            l = null,
            u = null;
        for (var c of r) {
            var d = c.codePointAt(0);
            if (!d) break;
            var f = G(c, d);
            if ((([a, s] = n ? [s, f] : [f, a]), (B(a, i.ZWJ) && B(s, i.ExtPict) && !(l = n ? j(e.substring(0, o)) : j(e.substring(0, e.length - o)))) || (B(a, i.RI) && B(s, i.RI) && !(u = null !== u ? !u : !!n || Y(e.substring(0, e.length - o)))) || (a !== i.None && s !== i.None && F(a, s)))) break;
            o += c.length;
        }
        return o || 1;
    },
    y = /\s/,
    I = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    T = /['\u2018\u2019]/,
    b = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = !1; e.length > 0; ) {
            var r = v(e, t),
                [a, s] = S(e, r, t);
            if (A(a, s, t)) (i = !0), (n += r);
            else if (i) break;
            else n += r;
            e = s;
        }
        return n;
    },
    S = (e, t, n) => {
        if (n) {
            var i = e.length - t;
            return [e.slice(i, e.length), e.slice(0, i)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    A = function e(t, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (y.test(t)) return !1;
        if (T.test(t)) {
            var r = v(n, i),
                [a, s] = S(n, r, i);
            if (e(a, s, i)) return !0;
        }
        return !I.test(t);
    },
    N = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var i = e.charAt(t - n);
            if (R(i.charCodeAt(0))) {
                var r = e.charAt(t - n - 1);
                if (C(r.charCodeAt(0))) {
                    yield r + i, n++;
                    continue;
                }
            }
            yield i;
        }
    },
    C = (e) => e >= 55296 && e <= 56319,
    R = (e) => e >= 56320 && e <= 57343;
!(function (e) {
    (e[(e.None = 0)] = 'None'), (e[(e.Extend = 1)] = 'Extend'), (e[(e.ZWJ = 2)] = 'ZWJ'), (e[(e.RI = 4)] = 'RI'), (e[(e.Prepend = 8)] = 'Prepend'), (e[(e.SpacingMark = 16)] = 'SpacingMark'), (e[(e.L = 32)] = 'L'), (e[(e.V = 64)] = 'V'), (e[(e.T = 128)] = 'T'), (e[(e.LV = 256)] = 'LV'), (e[(e.LVT = 512)] = 'LVT'), (e[(e.ExtPict = 1024)] = 'ExtPict'), (e[(e.Any = 2048)] = 'Any');
})(i || (i = {}));
var O = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    D = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    L = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    x = /^[\u1100-\u115F\uA960-\uA97C]$/,
    w = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    P = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    M = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    k =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    U = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    G = (e, t) => {
        var n = i.Any;
        return -1 !== e.search(O) && (n |= i.Extend), 8205 === t && (n |= i.ZWJ), t >= 127462 && t <= 127487 && (n |= i.RI), -1 !== e.search(D) && (n |= i.Prepend), -1 !== e.search(L) && (n |= i.SpacingMark), -1 !== e.search(x) && (n |= i.L), -1 !== e.search(w) && (n |= i.V), -1 !== e.search(P) && (n |= i.T), -1 !== e.search(M) && (n |= i.LV), -1 !== e.search(k) && (n |= i.LVT), -1 !== e.search(U) && (n |= i.ExtPict), n;
    };
function B(e, t) {
    return (e & t) != 0;
}
var Z = [
    [i.L, i.L | i.V | i.LV | i.LVT],
    [i.LV | i.V, i.V | i.T],
    [i.LVT | i.T, i.T],
    [i.Any, i.Extend | i.ZWJ],
    [i.Any, i.SpacingMark],
    [i.Prepend, i.Any],
    [i.ZWJ, i.ExtPict],
    [i.RI, i.RI]
];
function F(e, t) {
    return -1 === Z.findIndex((n) => B(e, n[0]) && B(t, n[1]));
}
var V =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    j = (e) => -1 !== e.search(V),
    H = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    Y = (e) => {
        var t = e.match(H);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    W = (e) => (0, r.P)(e) && er.isNodeList(e.children) && !$.isEditor(e),
    K = {
        isAncestor: (e) => (0, r.P)(e) && er.isNodeList(e.children),
        isElement: W,
        isElementList: (e) => Array.isArray(e) && e.every((e) => K.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'type';
            return W(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ('children' !== n && e[n] !== t[n]) return !1;
            return !0;
        }
    },
    z = ['text'],
    q = ['text'];
function Q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Q(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var J = new WeakMap(),
    $ = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: i = 'lowest', at: r = e.selection, match: a } = t;
            if (r) {
                var s = $.path(e, r),
                    o = 'lowest' === i;
                for (var [l, u] of $.levels(e, {
                    at: s,
                    voids: n,
                    match: a,
                    reverse: o
                }))
                    if (!eN.isText(l)) {
                        if (eg.isRange(r)) {
                            if (el.isAncestor(u, r.anchor.path) && el.isAncestor(u, r.focus.path)) return [l, u];
                        } else if (!el.equals(s, u)) return [l, u];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = {
                    anchor: $.point(e, t, { edge: 'end' }),
                    focus: $.end(e, [])
                },
                { distance: a = 1 } = i,
                s = 0;
            for (var o of $.positions(e, X(X({}, i), {}, { at: r }))) {
                if (s > a) break;
                0 !== s && (n = o), s++;
            }
            return n;
        },
        before(e, t) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = {
                    anchor: $.start(e, []),
                    focus: $.point(e, t, { edge: 'start' })
                },
                { distance: a = 1 } = i,
                s = 0;
            for (var o of $.positions(
                e,
                X(
                    X({}, i),
                    {},
                    {
                        at: r,
                        reverse: !0
                    }
                )
            )) {
                if (s > a) break;
                0 !== s && (n = o), s++;
            }
            return n;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = 'character' } = t;
            e.deleteBackward(n);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = 'character' } = t;
            e.deleteForward(n);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: n = 'forward' } = t;
            e.deleteFragment(n);
        },
        edges: (e, t) => [$.start(e, t), $.end(e, t)],
        end: (e, t) => $.point(e, t, { edge: 'end' }),
        first(e, t) {
            var n = $.path(e, t, { edge: 'start' });
            return $.node(e, n);
        },
        fragment(e, t) {
            var n = $.range(e, t);
            return er.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => K.isElement(t) && $.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => eN.isText(t) || $.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => eN.isText(e)),
        insertBreak(e) {
            e.insertBreak();
        },
        insertSoftBreak(e) {
            e.insertSoftBreak();
        },
        insertFragment(e, t) {
            e.insertFragment(t);
        },
        insertNode(e, t) {
            e.insertNode(t);
        },
        insertText(e, t) {
            e.insertText(t);
        },
        isBlock: (e, t) => !e.isInline(t),
        isEditor(e) {
            var t = J.get(e);
            if (void 0 !== t) return t;
            if (!(0, r.P)(e)) return !1;
            var n = 'function' == typeof e.addMark && 'function' == typeof e.apply && 'function' == typeof e.deleteBackward && 'function' == typeof e.deleteForward && 'function' == typeof e.deleteFragment && 'function' == typeof e.insertBreak && 'function' == typeof e.insertSoftBreak && 'function' == typeof e.insertFragment && 'function' == typeof e.insertNode && 'function' == typeof e.insertText && 'function' == typeof e.isInline && 'function' == typeof e.isVoid && 'function' == typeof e.normalizeNode && 'function' == typeof e.onChange && 'function' == typeof e.removeMark && 'function' == typeof e.getDirtyPaths && (null === e.marks || (0, r.P)(e.marks)) && (null === e.selection || eg.isRange(e.selection)) && er.isNodeList(e.children) && eo.isOperationList(e.operations);
            return J.set(e, n), n;
        },
        isEnd(e, t, n) {
            var i = $.end(e, n);
            return ef.equals(t, i);
        },
        isEdge: (e, t, n) => $.isStart(e, t, n) || $.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [i] = n;
            return 0 === n.length || (1 === n.length && eN.isText(i) && '' === i.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = c.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var i = $.start(e, n);
            return ef.equals(t, i);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = $.path(e, t, { edge: 'end' });
            return $.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = $.path(e, t, n);
            return [er.leaf(e, i), i];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: i = !1, voids: r = !1 } = t,
                { match: a } = t;
            if ((null == a && (a = () => !0), n)) {
                var s = [],
                    o = $.path(e, n);
                for (var [l, u] of er.levels(e, o)) if (a(l, u) && (s.push([l, u]), !r && K.isElement(l) && $.isVoid(e, l))) break;
                i && s.reverse(), yield* s;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (eg.isExpanded(n)) {
                var [i] = $.nodes(e, { match: eN.isText });
                if (!i) return {};
                var [r] = i;
                return E(r, z);
            }
            var { anchor: a } = n,
                { path: s } = a,
                [o] = $.leaf(e, s);
            if (0 === a.offset) {
                var l = $.previous(e, {
                    at: s,
                    match: eN.isText
                });
                if (!$.above(e, { match: (t) => K.isElement(t) && $.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = $.above(e, { match: (t) => K.isElement(t) && $.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l,
                            [, f] = u;
                        el.isAncestor(f, d) && (o = c);
                    }
                }
            }
            return E(o, q);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = 'lowest', voids: i = !1 } = t,
                { match: r, at: a = e.selection } = t;
            if (a) {
                var s = $.after(e, a, { voids: i });
                if (s) {
                    var [, o] = $.last(e, []),
                        l = [s.path, o];
                    if (el.isPath(a) && 0 === a.length) throw Error('Cannot get the next node from the root node!');
                    if (null == r) {
                        if (el.isPath(a)) {
                            var [u] = $.parent(e, a);
                            r = (e) => u.children.includes(e);
                        } else r = () => !0;
                    }
                    var [c] = $.nodes(e, {
                        at: l,
                        match: r,
                        mode: n,
                        voids: i
                    });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = $.path(e, t, n);
            return [er.get(e, i), i];
        },
        *nodes(e) {
            var t,
                n,
                i,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: a = e.selection, mode: s = 'all', universal: o = !1, reverse: l = !1, voids: u = !1 } = r,
                { match: c } = r;
            if ((c || (c = () => !0), a)) {
                if (ee.isSpan(a)) (t = a[0]), (n = a[1]);
                else {
                    var d = $.path(e, a, { edge: 'start' }),
                        f = $.path(e, a, { edge: 'end' });
                    (t = l ? f : d), (n = l ? d : f);
                }
                var _ = er.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !u && K.isElement(n) && $.isVoid(e, n);
                        }
                    }),
                    p = [];
                for (var [h, m] of _) {
                    var g = i && 0 === el.compare(m, i[1]);
                    if ('highest' !== s || !g) {
                        if (!c(h, m)) {
                            if (o && !g && eN.isText(h)) return;
                            continue;
                        }
                        if ('lowest' === s && g) {
                            i = [h, m];
                            continue;
                        }
                        var E = 'lowest' === s ? i : [h, m];
                        E && (o ? p.push(E) : yield E), (i = [h, m]);
                    }
                }
                'lowest' === s && i && (o ? p.push(i) : yield i), o && (yield* p);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: i } = t,
                r = (e) => o.get(e) || [],
                a = (e) => l.get(e) || new Set(),
                s = (e) => {
                    var t = r(e).pop(),
                        n = t.join(',');
                    return a(e).delete(n), t;
                };
            if ($.isNormalizing(e)) {
                if (n) {
                    var u = Array.from(er.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        c = new Set(u.map((e) => e.join(',')));
                    o.set(e, u), l.set(e, c);
                }
                0 !== r(e).length &&
                    $.withoutNormalizing(e, () => {
                        for (var t of r(e))
                            if (er.has(e, t)) {
                                var n = $.node(e, t),
                                    [a, o] = n;
                                K.isElement(a) && 0 === a.children.length && e.normalizeNode(n, { operation: i });
                            }
                        for (var l = r(e), u = l.length, c = 0; 0 !== l.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: l,
                                    iteration: c,
                                    initialDirtyPathsLength: u,
                                    operation: i
                                })
                            )
                                return;
                            var d = s(e);
                            if (er.has(e, d)) {
                                var f = $.node(e, d);
                                e.normalizeNode(f, { operation: i });
                            }
                            c++, (l = r(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = $.path(e, t, n),
                r = el.parent(i);
            return $.node(e, r);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: i, edge: r } = n;
            if (el.isPath(t)) {
                if ('start' === r) {
                    var [, a] = er.first(e, t);
                    t = a;
                } else if ('end' === r) {
                    var [, s] = er.last(e, t);
                    t = s;
                }
            }
            return eg.isRange(t) && (t = 'start' === r ? eg.start(t) : 'end' === r ? eg.end(t) : el.common(t.anchor.path, t.focus.path)), ef.isPoint(t) && (t = t.path), null != i && (t = t.slice(0, i)), t;
        },
        hasPath: (e, t) => er.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = 'forward' } = n,
                r = {
                    current: t,
                    affinity: i,
                    unref() {
                        var { current: t } = r;
                        return $.pathRefs(e).delete(r), (r.current = null), t;
                    }
                };
            return $.pathRefs(e).add(r), r;
        },
        pathRefs(e) {
            var t = d.get(e);
            return t || ((t = new Set()), d.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: i = 'start' } = n;
            if (el.isPath(t)) {
                if ('end' === i) {
                    var r,
                        [, a] = er.last(e, t);
                    r = a;
                } else {
                    var [, s] = er.first(e, t);
                    r = s;
                }
                var o = er.get(e, r);
                if (!eN.isText(o)) throw Error('Cannot get the '.concat(i, ' point in the node at path [').concat(t, '] because it has no ').concat(i, ' text node.'));
                return {
                    path: r,
                    offset: 'end' === i ? o.text.length : 0
                };
            }
            if (eg.isRange(t)) {
                var [l, u] = eg.edges(t);
                return 'start' === i ? l : u;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = 'forward' } = n,
                r = {
                    current: t,
                    affinity: i,
                    unref() {
                        var { current: t } = r;
                        return $.pointRefs(e).delete(r), (r.current = null), t;
                    }
                };
            return $.pointRefs(e).add(r), r;
        },
        pointRefs(e) {
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: i = 'offset', reverse: r = !1, voids: a = !1 } = t;
            if (n) {
                var s = $.range(e, n),
                    [o, l] = eg.edges(s),
                    u = r ? l : o,
                    c = !1,
                    d = '',
                    f = 0,
                    _ = 0,
                    p = 0;
                for (var [h, m] of $.nodes(e, {
                    at: n,
                    reverse: r,
                    voids: a
                })) {
                    if (K.isElement(h)) {
                        if (!a && e.isVoid(h)) {
                            yield $.start(e, m);
                            continue;
                        }
                        if (e.isInline(h)) continue;
                        if ($.hasInlines(e, h)) {
                            var g = el.isAncestor(m, l.path) ? l : $.end(e, m),
                                E = el.isAncestor(m, o.path) ? o : $.start(e, m);
                            (d = $.string(
                                e,
                                {
                                    anchor: E,
                                    focus: g
                                },
                                { voids: a }
                            )),
                                (c = !0);
                        }
                    }
                    if (eN.isText(h)) {
                        var y = el.equals(m, u.path);
                        for (
                            y ? ((_ = r ? u.offset : h.text.length - u.offset), (p = u.offset)) : ((_ = h.text.length), (p = r ? _ : 0)),
                                (y || c || 'offset' === i) &&
                                    (yield {
                                        path: m,
                                        offset: p
                                    },
                                    (c = !1));
                            ;

                        ) {
                            if (0 === f) {
                                if ('' === d) break;
                                (f = I(d, i, r)), (d = S(d, f, r)[1]);
                            }
                            if (((p = r ? p - f : p + f), (_ -= f) < 0)) {
                                f = -_;
                                break;
                            }
                            (f = 0),
                                yield {
                                    path: m,
                                    offset: p
                                };
                        }
                    }
                }
            }
            function I(e, t, n) {
                return 'character' === t ? v(e, n) : 'word' === t ? b(e, n) : 'line' === t || 'block' === t ? e.length : 1;
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = 'lowest', voids: i = !1 } = t,
                { match: r, at: a = e.selection } = t;
            if (a) {
                var s = $.before(e, a, { voids: i });
                if (s) {
                    var [, o] = $.first(e, []),
                        l = [s.path, o];
                    if (el.isPath(a) && 0 === a.length) throw Error('Cannot get the previous node from the root node!');
                    if (null == r) {
                        if (el.isPath(a)) {
                            var [u] = $.parent(e, a);
                            r = (e) => u.children.includes(e);
                        } else r = () => !0;
                    }
                    var [c] = $.nodes(e, {
                        reverse: !0,
                        at: l,
                        match: r,
                        mode: n,
                        voids: i
                    });
                    return c;
                }
            }
        },
        range: (e, t, n) =>
            eg.isRange(t) && !n
                ? t
                : {
                      anchor: $.start(e, t),
                      focus: $.end(e, n || t)
                  },
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = 'forward' } = n,
                r = {
                    current: t,
                    affinity: i,
                    unref() {
                        var { current: t } = r;
                        return $.rangeRefs(e).delete(r), (r.current = null), t;
                    }
                };
            return $.rangeRefs(e).add(r), r;
        },
        rangeRefs(e) {
            var t = _.get(e);
            return t || ((t = new Set()), _.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            c.set(e, t);
        },
        start: (e, t) => $.point(e, t, { edge: 'start' }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: i = !1 } = n,
                r = $.range(e, t),
                [a, s] = eg.edges(r),
                o = '';
            for (var [l, u] of $.nodes(e, {
                at: r,
                match: eN.isText,
                voids: i
            })) {
                var c = l.text;
                el.equals(u, s.path) && (c = c.slice(0, s.offset)), el.equals(u, a.path) && (c = c.slice(a.offset)), (o += c);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: i = !1 } = n,
                [r, a] = eg.edges(t);
            if (0 !== r.offset || 0 !== a.offset || eg.isCollapsed(t) || el.hasPrevious(a.path)) return t;
            var s = $.above(e, {
                    at: a,
                    match: (t) => K.isElement(t) && $.isBlock(e, t),
                    voids: i
                }),
                o = s ? s[1] : [],
                l = {
                    anchor: $.start(e, r),
                    focus: a
                },
                u = !0;
            for (var [c, d] of $.nodes(e, {
                at: l,
                match: eN.isText,
                reverse: !0,
                voids: i
            })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ('' !== c.text || el.isBefore(d, o)) {
                    a = {
                        path: d,
                        offset: c.text.length
                    };
                    break;
                }
            }
            return {
                anchor: r,
                focus: a
            };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return $.above(e, X(X({}, t), {}, { match: (t) => K.isElement(t) && $.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = $.isNormalizing(e);
            $.setNormalizing(e, !1);
            try {
                t();
            } finally {
                $.setNormalizing(e, n);
            }
            $.normalize(e);
        }
    },
    ee = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(el.isPath) },
    et = ['children'],
    en = ['text'],
    ei = new WeakMap(),
    er = {
        ancestor(e, t) {
            var n = er.get(e, t);
            if (eN.isText(n)) throw Error('Cannot get the ancestor node at path ['.concat(t, '] because it refers to a text node instead: ').concat(ey.stringify(n)));
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var i of el.ancestors(t, n)) {
                var r = [er.ancestor(e, i), i];
                yield r;
            }
        },
        child(e, t) {
            if (eN.isText(e)) throw Error('Cannot get the child of a text node: '.concat(ey.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error('Cannot get child at index `'.concat(t, '` in node: ').concat(ey.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { reverse: i = !1 } = n, r = er.ancestor(e, t), { children: a } = r, s = i ? a.length - 1 : 0; i ? s >= 0 : s < a.length; ) {
                var o = er.child(r, s),
                    l = t.concat(s);
                yield [o, l], (s = i ? s - 1 : s + 1);
            }
        },
        common(e, t, n) {
            var i = el.common(t, n);
            return [er.get(e, i), i];
        },
        descendant(e, t) {
            var n = er.get(e, t);
            if ($.isEditor(n)) throw Error('Cannot get the descendant node at path ['.concat(t, '] because it refers to the root editor node instead: ').concat(ey.stringify(n)));
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, i] of er.nodes(e, t)) 0 !== i.length && (yield [n, i]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, i] of er.nodes(e, t)) K.isElement(n) && (yield [n, i]);
        },
        extractProps(e) {
            if (K.isAncestor(e)) {
                var t = E(e, et);
                return t;
            }
            var t = E(e, en);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), i = er.get(e, n); i && !eN.isText(i) && 0 !== i.children.length; ) (i = i.children[0]), n.push(0);
            return [i, n];
        },
        fragment(e, t) {
            if (eN.isText(e)) throw Error('Cannot get a fragment starting from a root text node: '.concat(ey.stringify(e)));
            return (0, a.Uy)({ children: e.children }, (e) => {
                var [n, i] = eg.edges(t);
                for (var [, r] of er.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !eg.includes(t, n);
                    }
                })) {
                    if (!eg.includes(t, r)) {
                        var a = er.parent(e, r),
                            s = r[r.length - 1];
                        a.children.splice(s, 1);
                    }
                    if (el.equals(r, i.path)) {
                        var o = er.leaf(e, r);
                        o.text = o.text.slice(0, i.offset);
                    }
                    if (el.equals(r, n.path)) {
                        var l = er.leaf(e, r);
                        l.text = l.text.slice(n.offset);
                    }
                }
                $.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, i = 0; i < t.length; i++) {
                var r = t[i];
                if (eN.isText(n) || !n.children[r]) throw Error('Cannot find a descendant at path ['.concat(t, '] in node: ').concat(ey.stringify(e)));
                n = n.children[r];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, i = 0; i < t.length; i++) {
                var r = t[i];
                if (eN.isText(n) || !n.children[r]) return !1;
                n = n.children[r];
            }
            return !0;
        },
        isNode: (e) => eN.isText(e) || K.isElement(e) || $.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = ei.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => er.isNode(e));
            return ei.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), i = er.get(e, n); i && !eN.isText(i) && 0 !== i.children.length; ) {
                var r = i.children.length - 1;
                (i = i.children[r]), n.push(r);
            }
            return [i, n];
        },
        leaf(e, t) {
            var n = er.get(e, t);
            if (!eN.isText(n)) throw Error('Cannot get the leaf node at path ['.concat(t, '] because it refers to a non-leaf node: ').concat(ey.stringify(n)));
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var i of el.levels(t, n)) {
                var r = er.get(e, i);
                yield [r, i];
            }
        },
        matches: (e, t) => (K.isElement(e) && K.isElementProps(t) && K.matches(e, t)) || (eN.isText(e) && eN.isTextProps(t) && eN.matches(e, t)),
        *nodes(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { pass: n, reverse: i = !1 } = t, { from: r = [], to: a } = t, s = new Set(), o = [], l = e; !(a && (i ? el.isBefore(o, a) : el.isAfter(o, a))); ) {
                if ((s.has(l) || (yield [l, o]), !s.has(l) && !eN.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, o])))) {
                    s.add(l);
                    var u = i ? l.children.length - 1 : 0;
                    el.isAncestor(o, r) && (u = r[o.length]), (o = o.concat(u)), (l = er.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!i) {
                    var c = el.next(o);
                    if (er.has(e, c)) {
                        (o = c), (l = er.get(e, o));
                        continue;
                    }
                }
                if (i && 0 !== o[o.length - 1]) {
                    (o = el.previous(o)), (l = er.get(e, o));
                    continue;
                }
                (o = el.parent(o)), (l = er.get(e, o)), s.add(l);
            }
        },
        parent(e, t) {
            var n = el.parent(t),
                i = er.get(e, n);
            if (eN.isText(i)) throw Error('Cannot get the parent of path ['.concat(t, '] because it does not exist in the root.'));
            return i;
        },
        string: (e) => (eN.isText(e) ? e.text : e.children.map(er.string).join('')),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, i] of er.nodes(e, t)) eN.isText(n) && (yield [n, i]);
        }
    };
function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ea(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ea(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eo = {
        isNodeOperation: (e) => eo.isOperation(e) && e.type.endsWith('_node'),
        isOperation(e) {
            if (!(0, r.P)(e)) return !1;
            switch (e.type) {
                case 'insert_node':
                case 'remove_node':
                    return el.isPath(e.path) && er.isNode(e.node);
                case 'insert_text':
                case 'remove_text':
                    return 'number' == typeof e.offset && 'string' == typeof e.text && el.isPath(e.path);
                case 'merge_node':
                    return 'number' == typeof e.position && el.isPath(e.path) && (0, r.P)(e.properties);
                case 'move_node':
                    return el.isPath(e.path) && el.isPath(e.newPath);
                case 'set_node':
                    return el.isPath(e.path) && (0, r.P)(e.properties) && (0, r.P)(e.newProperties);
                case 'set_selection':
                    return (null === e.properties && eg.isRange(e.newProperties)) || (null === e.newProperties && eg.isRange(e.properties)) || ((0, r.P)(e.properties) && (0, r.P)(e.newProperties));
                case 'split_node':
                    return el.isPath(e.path) && 'number' == typeof e.position && (0, r.P)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => eo.isOperation(e)),
        isSelectionOperation: (e) => eo.isOperation(e) && e.type.endsWith('_selection'),
        isTextOperation: (e) => eo.isOperation(e) && e.type.endsWith('_text'),
        inverse(e) {
            switch (e.type) {
                case 'insert_node':
                    return es(es({}, e), {}, { type: 'remove_node' });
                case 'insert_text':
                    return es(es({}, e), {}, { type: 'remove_text' });
                case 'merge_node':
                    return es(
                        es({}, e),
                        {},
                        {
                            type: 'split_node',
                            path: el.previous(e.path)
                        }
                    );
                case 'move_node':
                    var { newPath: t, path: n } = e;
                    if (el.equals(t, n)) return e;
                    if (el.isSibling(n, t))
                        return es(
                            es({}, e),
                            {},
                            {
                                path: t,
                                newPath: n
                            }
                        );
                    var i = el.transform(n, e),
                        r = el.transform(el.next(n), e);
                    return es(
                        es({}, e),
                        {},
                        {
                            path: i,
                            newPath: r
                        }
                    );
                case 'remove_node':
                    return es(es({}, e), {}, { type: 'insert_node' });
                case 'remove_text':
                    return es(es({}, e), {}, { type: 'insert_text' });
                case 'set_node':
                    var { properties: a, newProperties: s } = e;
                    return es(
                        es({}, e),
                        {},
                        {
                            properties: s,
                            newProperties: a
                        }
                    );
                case 'set_selection':
                    var { properties: o, newProperties: l } = e;
                    if (null == o)
                        return es(
                            es({}, e),
                            {},
                            {
                                properties: l,
                                newProperties: null
                            }
                        );
                    if (null == l)
                        return es(
                            es({}, e),
                            {},
                            {
                                properties: null,
                                newProperties: o
                            }
                        );
                    return es(
                        es({}, e),
                        {},
                        {
                            properties: l,
                            newProperties: o
                        }
                    );
                case 'split_node':
                    return es(
                        es({}, e),
                        {},
                        {
                            type: 'merge_node',
                            path: el.next(e.path)
                        }
                    );
            }
        }
    },
    el = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                i = el.levels(e, t);
            return n ? i.slice(1) : i.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], i = 0; i < e.length && i < t.length; i++) {
                var r = e[i];
                if (r !== t[i]) break;
                n.push(r);
            }
            return n;
        },
        compare(e, t) {
            for (var n = Math.min(e.length, t.length), i = 0; i < n; i++) {
                if (e[i] < t[i]) return -1;
                if (e[i] > t[i]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var n = e.length - 1,
                i = e.slice(0, n),
                r = t.slice(0, n),
                a = e[n],
                s = t[n];
            return el.equals(i, r) && a > s;
        },
        endsAt(e, t) {
            var n = e.length,
                i = e.slice(0, n),
                r = t.slice(0, n);
            return el.equals(i, r);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                i = e.slice(0, n),
                r = t.slice(0, n),
                a = e[n],
                s = t[n];
            return el.equals(i, r) && a < s;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === el.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === el.compare(e, t),
        isBefore: (e, t) => -1 === el.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === el.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === el.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === el.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === el.compare(e, t),
        isPath: (e) => Array.isArray(e) && (0 === e.length || 'number' == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                i = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && el.equals(n, i);
        },
        levels(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { reverse: n = !1 } = t, i = [], r = 0; r <= e.length; r++) i.push(e.slice(0, r));
            return n && i.reverse(), i;
        },
        next(e) {
            if (0 === e.length) throw Error('Cannot get the next path of a root path ['.concat(e, '], because it has no next index.'));
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
        },
        operationCanTransformPath(e) {
            switch (e.type) {
                case 'insert_node':
                case 'remove_node':
                case 'merge_node':
                case 'split_node':
                case 'move_node':
                    return !0;
                default:
                    return !1;
            }
        },
        parent(e) {
            if (0 === e.length) throw Error('Cannot get the parent path of the root path ['.concat(e, '].'));
            return e.slice(0, -1);
        },
        previous(e) {
            if (0 === e.length) throw Error('Cannot get the previous path of a root path ['.concat(e, '], because it has no previous index.'));
            var t = e[e.length - 1];
            if (t <= 0) throw Error('Cannot get the previous path of a first child path ['.concat(e, '] because it would result in a negative index.'));
            return e.slice(0, -1).concat(t - 1);
        },
        relative(e, t) {
            if (!el.isAncestor(t, e) && !el.equals(e, t)) throw Error('Cannot get the relative path of ['.concat(e, '] inside ancestor [').concat(t, '], because it is not above or equal to the path.'));
            return e.slice(t.length);
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var i = [...e],
                { affinity: r = 'forward' } = n;
            if (0 === e.length) return i;
            switch (t.type) {
                case 'insert_node':
                    var { path: a } = t;
                    (el.equals(a, i) || el.endsBefore(a, i) || el.isAncestor(a, i)) && (i[a.length - 1] += 1);
                    break;
                case 'remove_node':
                    var { path: s } = t;
                    if (el.equals(s, i) || el.isAncestor(s, i)) return null;
                    el.endsBefore(s, i) && (i[s.length - 1] -= 1);
                    break;
                case 'merge_node':
                    var { path: o, position: l } = t;
                    el.equals(o, i) || el.endsBefore(o, i) ? (i[o.length - 1] -= 1) : el.isAncestor(o, i) && ((i[o.length - 1] -= 1), (i[o.length] += l));
                    break;
                case 'split_node':
                    var { path: u, position: c } = t;
                    if (el.equals(u, i)) {
                        if ('forward' === r) i[i.length - 1] += 1;
                        else if ('backward' !== r) return null;
                    } else el.endsBefore(u, i) ? (i[u.length - 1] += 1) : el.isAncestor(u, i) && e[u.length] >= c && ((i[u.length - 1] += 1), (i[u.length] -= c));
                    break;
                case 'move_node':
                    var { path: d, newPath: f } = t;
                    if (el.equals(d, f)) break;
                    if (el.isAncestor(d, i) || el.equals(d, i)) {
                        var _ = f.slice();
                        return el.endsBefore(d, f) && d.length < f.length && (_[d.length - 1] -= 1), _.concat(i.slice(d.length));
                    }
                    el.isSibling(d, f) && (el.isAncestor(f, i) || el.equals(f, i)) ? (el.endsBefore(d, i) ? (i[d.length - 1] -= 1) : (i[d.length - 1] += 1)) : el.endsBefore(f, i) || el.equals(f, i) || el.isAncestor(f, i) ? (el.endsBefore(d, i) && (i[d.length - 1] -= 1), (i[f.length - 1] += 1)) : el.endsBefore(d, i) && (el.equals(f, i) && (i[f.length - 1] += 1), (i[d.length - 1] -= 1));
            }
            return i;
        }
    },
    eu = {
        transform(e, t) {
            var { current: n, affinity: i } = e;
            if (null != n) {
                var r = el.transform(n, t, { affinity: i });
                (e.current = r), null == r && e.unref();
            }
        }
    };
function ec(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ec(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ec(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ef = {
        compare(e, t) {
            var n = el.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0) : n;
        },
        isAfter: (e, t) => 1 === ef.compare(e, t),
        isBefore: (e, t) => -1 === ef.compare(e, t),
        equals: (e, t) => e.offset === t.offset && el.equals(e.path, t.path),
        isPoint: (e) => (0, r.P)(e) && 'number' == typeof e.offset && el.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.Uy)(e, (e) => {
                if (null === e) return null;
                var { affinity: i = 'forward' } = n,
                    { path: r, offset: a } = e;
                switch (t.type) {
                    case 'insert_node':
                    case 'move_node':
                        e.path = el.transform(r, t, n);
                        break;
                    case 'insert_text':
                        el.equals(t.path, r) && (t.offset < a || (t.offset === a && 'forward' === i)) && (e.offset += t.text.length);
                        break;
                    case 'merge_node':
                        el.equals(t.path, r) && (e.offset += t.position), (e.path = el.transform(r, t, n));
                        break;
                    case 'remove_text':
                        el.equals(t.path, r) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                        break;
                    case 'remove_node':
                        if (el.equals(t.path, r) || el.isAncestor(t.path, r)) return null;
                        e.path = el.transform(r, t, n);
                        break;
                    case 'split_node':
                        if (el.equals(t.path, r)) {
                            if (t.position === a && null == i) return null;
                            (t.position < a || (t.position === a && 'forward' === i)) && ((e.offset -= t.position), (e.path = el.transform(r, t, ed(ed({}, n), {}, { affinity: 'forward' }))));
                        } else e.path = el.transform(r, t, n);
                }
            });
        }
    },
    e_ = {
        transform(e, t) {
            var { current: n, affinity: i } = e;
            if (null != n) {
                var r = ef.transform(n, t, { affinity: i });
                (e.current = r), null == r && e.unref();
            }
        }
    },
    ep = ['anchor', 'focus'];
function eh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function em(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eh(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eh(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eg = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: i, focus: r } = e;
            return eg.isBackward(e) === n ? [i, r] : [r, i];
        },
        end(e) {
            var [, t] = eg.edges(e);
            return t;
        },
        equals: (e, t) => ef.equals(e.anchor, t.anchor) && ef.equals(e.focus, t.focus),
        includes(e, t) {
            if (eg.isRange(t)) {
                if (eg.includes(e, t.anchor) || eg.includes(e, t.focus)) return !0;
                var [n, i] = eg.edges(e),
                    [r, a] = eg.edges(t);
                return ef.isBefore(n, r) && ef.isAfter(i, a);
            }
            var [s, o] = eg.edges(e),
                l = !1,
                u = !1;
            return ef.isPoint(t) ? ((l = ef.compare(t, s) >= 0), (u = 0 >= ef.compare(t, o))) : ((l = el.compare(t, s.path) >= 0), (u = 0 >= el.compare(t, o.path))), l && u;
        },
        intersection(e, t) {
            var n = E(e, ep),
                [i, r] = eg.edges(e),
                [a, s] = eg.edges(t),
                o = ef.isBefore(i, a) ? a : i,
                l = ef.isBefore(r, s) ? r : s;
            return ef.isBefore(l, o)
                ? null
                : em(
                      {
                          anchor: o,
                          focus: l
                      },
                      n
                  );
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return ef.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return ef.equals(t, n);
        },
        isExpanded: (e) => !eg.isCollapsed(e),
        isForward: (e) => !eg.isBackward(e),
        isRange: (e) => (0, r.P)(e) && ef.isPoint(e.anchor) && ef.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, 'anchor'], yield [e.focus, 'focus'];
        },
        start(e) {
            var [t] = eg.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.Uy)(e, (e) => {
                if (null === e) return null;
                var i,
                    r,
                    { affinity: a = 'inward' } = n;
                if ('inward' === a) {
                    var s = eg.isCollapsed(e);
                    eg.isForward(e) ? ((i = 'forward'), (r = s ? i : 'backward')) : ((i = 'backward'), (r = s ? i : 'forward'));
                } else 'outward' === a ? (eg.isForward(e) ? ((i = 'backward'), (r = 'forward')) : ((i = 'forward'), (r = 'backward'))) : ((i = a), (r = a));
                var o = ef.transform(e.anchor, t, { affinity: i }),
                    l = ef.transform(e.focus, t, { affinity: r });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        }
    },
    eE = {
        transform(e, t) {
            var { current: n, affinity: i } = e;
            if (null != n) {
                var r = eg.transform(n, t, { affinity: i });
                (e.current = r), null == r && e.unref();
            }
        }
    },
    ev = void 0,
    ey = {
        setScrubber(e) {
            ev = e;
        },
        stringify: (e) => JSON.stringify(e, ev)
    },
    eI = (e, t) => {
        for (var n in e) {
            var i = e[n],
                a = t[n];
            if ((0, r.P)(i) && (0, r.P)(a)) {
                if (!eI(i, a)) return !1;
            } else if (Array.isArray(i) && Array.isArray(a)) {
                if (i.length !== a.length) return !1;
                for (var s = 0; s < i.length; s++) if (i[s] !== a[s]) return !1;
            } else if (i !== a) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    eT = ['text'],
    eb = ['anchor', 'focus'];
function eS(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eA(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eS(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eS(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eN = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: i = !1 } = n;
        function r(e) {
            return E(e, eT);
        }
        return eI(i ? r(e) : e, i ? r(t) : t);
    },
    isText: (e) => (0, r.P)(e) && 'string' == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eN.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ('text' !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [eA({}, e)];
        for (var i of t) {
            var r = E(i, eb),
                [a, s] = eg.edges(i),
                o = [],
                l = 0,
                u = a.offset,
                c = s.offset;
            for (var d of n) {
                var { length: f } = d.text,
                    _ = l;
                if (((l += f), u <= _ && l <= c)) {
                    Object.assign(d, r), o.push(d);
                    continue;
                }
                if ((u !== c && (u === l || c === _)) || u > l || c < _ || (c === _ && 0 !== _)) {
                    o.push(d);
                    continue;
                }
                var p = d,
                    h = void 0,
                    m = void 0;
                if (c < l) {
                    var g = c - _;
                    (m = eA(eA({}, p), {}, { text: p.text.slice(g) })), (p = eA(eA({}, p), {}, { text: p.text.slice(0, g) }));
                }
                if (u > _) {
                    var v = u - _;
                    (h = eA(eA({}, p), {}, { text: p.text.slice(0, v) })), (p = eA(eA({}, p), {}, { text: p.text.slice(v) }));
                }
                Object.assign(p, r), h && o.push(h), o.push(p), m && o.push(m);
            }
            n = o;
        }
        return n;
    }
};
function eC(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eR(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eC(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eC(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eO = (e, t, n) => {
        switch (n.type) {
            case 'insert_node':
                var { path: i, node: r } = n,
                    a = er.parent(e, i),
                    s = i[i.length - 1];
                if (s > a.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(i, '] because the destination is past the end of the node.'));
                if ((a.children.splice(s, 0, r), t)) for (var [o, l] of eg.points(t)) t[l] = ef.transform(o, n);
                break;
            case 'insert_text':
                var { path: u, offset: c, text: d } = n;
                if (0 === d.length) break;
                var f = er.leaf(e, u),
                    _ = f.text.slice(0, c),
                    p = f.text.slice(c);
                if (((f.text = _ + d + p), t)) for (var [h, m] of eg.points(t)) t[m] = ef.transform(h, n);
                break;
            case 'merge_node':
                var { path: g } = n,
                    E = er.get(e, g),
                    v = el.previous(g),
                    y = er.get(e, v),
                    I = er.parent(e, g),
                    T = g[g.length - 1];
                if (eN.isText(E) && eN.isText(y)) y.text += E.text;
                else if (eN.isText(E) || eN.isText(y)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(g, '] to nodes of different interfaces: ').concat(ey.stringify(E), ' ').concat(ey.stringify(y)));
                else y.children.push(...E.children);
                if ((I.children.splice(T, 1), t)) for (var [b, S] of eg.points(t)) t[S] = ef.transform(b, n);
                break;
            case 'move_node':
                var { path: A, newPath: N } = n;
                if (el.isAncestor(A, N)) throw Error('Cannot move a path ['.concat(A, '] to new path [').concat(N, '] because the destination is inside itself.'));
                var C = er.get(e, A),
                    R = er.parent(e, A),
                    O = A[A.length - 1];
                R.children.splice(O, 1);
                var D = el.transform(A, n),
                    L = er.get(e, el.parent(D)),
                    x = D[D.length - 1];
                if ((L.children.splice(x, 0, C), t)) for (var [w, P] of eg.points(t)) t[P] = ef.transform(w, n);
                break;
            case 'remove_node':
                var { path: M } = n,
                    k = M[M.length - 1];
                if ((er.parent(e, M).children.splice(k, 1), t))
                    for (var [U, G] of eg.points(t)) {
                        var B = ef.transform(U, n);
                        if (null != t && null != B) t[G] = B;
                        else {
                            var Z = void 0,
                                F = void 0;
                            for (var [V, j] of er.texts(e))
                                if (-1 === el.compare(j, M)) Z = [V, j];
                                else {
                                    F = [V, j];
                                    break;
                                }
                            var H = !1;
                            Z && F && (H = el.equals(F[1], M) ? !el.hasPrevious(F[1]) : el.common(Z[1], M).length < el.common(F[1], M).length), Z && !H ? ((U.path = Z[1]), (U.offset = Z[0].text.length)) : F ? ((U.path = F[1]), (U.offset = 0)) : (t = null);
                        }
                    }
                break;
            case 'remove_text':
                var { path: Y, offset: W, text: K } = n;
                if (0 === K.length) break;
                var z = er.leaf(e, Y),
                    q = z.text.slice(0, W),
                    Q = z.text.slice(W + K.length);
                if (((z.text = q + Q), t)) for (var [X, J] of eg.points(t)) t[J] = ef.transform(X, n);
                break;
            case 'set_node':
                var { path: $, properties: ee, newProperties: et } = n;
                if (0 === $.length) throw Error('Cannot set properties on the root node!');
                var en = er.get(e, $);
                for (var ei in et) {
                    if ('children' === ei || 'text' === ei) throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                    var ea = et[ei];
                    null == ea ? delete en[ei] : (en[ei] = ea);
                }
                for (var es in ee) et.hasOwnProperty(es) || delete en[es];
                break;
            case 'set_selection':
                var { newProperties: eo } = n;
                if (null == eo) t = eo;
                else {
                    if (null == t) {
                        if (!eg.isRange(eo)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(ey.stringify(eo), ' when there is no current selection.'));
                        t = eR({}, eo);
                    }
                    for (var eu in eo) {
                        var ec = eo[eu];
                        if (null == ec) {
                            if ('anchor' === eu || 'focus' === eu) throw Error('Cannot remove the "'.concat(eu, '" selection property'));
                            delete t[eu];
                        } else t[eu] = ec;
                    }
                }
                break;
            case 'split_node':
                var ed,
                    { path: e_, position: ep, properties: eh } = n;
                if (0 === e_.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(e_, '] because the root node cannot be split.'));
                var em = er.get(e, e_),
                    eE = er.parent(e, e_),
                    ev = e_[e_.length - 1];
                if (eN.isText(em)) {
                    var eI = em.text.slice(0, ep),
                        eT = em.text.slice(ep);
                    (em.text = eI), (ed = eR(eR({}, eh), {}, { text: eT }));
                } else {
                    var eb = em.children.slice(0, ep),
                        eS = em.children.slice(ep);
                    (em.children = eb), (ed = eR(eR({}, eh), {}, { children: eS }));
                }
                if ((eE.children.splice(ev + 1, 0, ed), t)) for (var [eA, eC] of eg.points(t)) t[eC] = ef.transform(eA, n);
        }
        return t;
    },
    eD = {
        transform(e, t) {
            e.children = (0, a.P2)(e.children);
            var n = e.selection && (0, a.P2)(e.selection);
            try {
                n = eO(e, n, t);
            } finally {
                (e.children = (0, a._x)(e.children)), n ? (e.selection = (0, a.mv)(n) ? (0, a._x)(n) : n) : (e.selection = null);
            }
        }
    },
    eL = ['text'],
    ex = ['children'];
function ew(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eP(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ew(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ew(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eM = {
        insertNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var { hanging: i = !1, voids: r = !1, mode: a = 'lowest' } = n,
                    { at: s, match: o, select: l } = n;
                if ((er.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [u] = t;
                    if ((s || ((s = e.selection ? e.selection : e.children.length > 0 ? $.end(e, []) : [0]), (l = !0)), null == l && (l = !1), eg.isRange(s))) {
                        if ((i || (s = $.unhangRange(e, s, { voids: r })), eg.isCollapsed(s))) s = s.anchor;
                        else {
                            var [, c] = eg.edges(s),
                                d = $.pointRef(e, c);
                            eY.delete(e, { at: s }), (s = d.unref());
                        }
                    }
                    if (ef.isPoint(s)) {
                        null == o && (o = eN.isText(u) ? (e) => eN.isText(e) : e.isInline(u) ? (t) => eN.isText(t) || $.isInline(e, t) : (t) => K.isElement(t) && $.isBlock(e, t));
                        var [f] = $.nodes(e, {
                            at: s.path,
                            match: o,
                            mode: a,
                            voids: r
                        });
                        if (!f) return;
                        var [, _] = f,
                            p = $.pathRef(e, _),
                            h = $.isEnd(e, s, _);
                        eY.splitNodes(e, {
                            at: s,
                            match: o,
                            mode: a,
                            voids: r
                        });
                        var m = p.unref();
                        s = h ? el.next(m) : m;
                    }
                    var g = el.parent(s),
                        E = s[s.length - 1];
                    if (!(!r && $.void(e, { at: g }))) {
                        for (var v of t) {
                            var y = g.concat(E);
                            E++,
                                e.apply({
                                    type: 'insert_node',
                                    path: y,
                                    node: v
                                }),
                                (s = el.next(s));
                        }
                        if (((s = el.previous(s)), l)) {
                            var I = $.end(e, s);
                            I && eY.select(e, I);
                        }
                    }
                }
            });
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var { at: n = e.selection, mode: i = 'lowest', voids: r = !1 } = t,
                    { match: a } = t;
                if ((null == a && (a = el.isPath(n) ? eG(e, n) : (t) => K.isElement(t) && $.isBlock(e, t)), n))
                    for (var s of Array.from(
                        $.nodes(e, {
                            at: n,
                            match: a,
                            mode: i,
                            voids: r
                        }),
                        (t) => {
                            var [, n] = t;
                            return $.pathRef(e, n);
                        }
                    )) {
                        var o = s.unref();
                        if (o.length < 2) throw Error('Cannot lift node at a path ['.concat(o, '] because it has a depth of less than `2`.'));
                        var [l, u] = $.node(e, el.parent(o)),
                            c = o[o.length - 1],
                            { length: d } = l.children;
                        if (1 === d) {
                            var f = el.next(u);
                            eY.moveNodes(e, {
                                at: o,
                                to: f,
                                voids: r
                            }),
                                eY.removeNodes(e, {
                                    at: u,
                                    voids: r
                                });
                        } else if (0 === c)
                            eY.moveNodes(e, {
                                at: o,
                                to: u,
                                voids: r
                            });
                        else if (c === d - 1) {
                            var _ = el.next(u);
                            eY.moveNodes(e, {
                                at: o,
                                to: _,
                                voids: r
                            });
                        } else {
                            var p = el.next(o),
                                h = el.next(u);
                            eY.splitNodes(e, {
                                at: p,
                                voids: r
                            }),
                                eY.moveNodes(e, {
                                    at: o,
                                    to: h,
                                    voids: r
                                });
                        }
                    }
            });
        },
        mergeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var n,
                    i,
                    { match: r, at: a = e.selection } = t,
                    { hanging: s = !1, voids: o = !1, mode: l = 'lowest' } = t;
                if (!!a) {
                    if (null == r) {
                        if (el.isPath(a)) {
                            var [u] = $.parent(e, a);
                            r = (e) => u.children.includes(e);
                        } else r = (t) => K.isElement(t) && $.isBlock(e, t);
                    }
                    if ((!s && eg.isRange(a) && (a = $.unhangRange(e, a, { voids: o })), eg.isRange(a))) {
                        if (eg.isCollapsed(a)) a = a.anchor;
                        else {
                            var [, c] = eg.edges(a),
                                d = $.pointRef(e, c);
                            eY.delete(e, { at: a }), (a = d.unref()), null == t.at && eY.select(e, a);
                        }
                    }
                    var [f] = $.nodes(e, {
                            at: a,
                            match: r,
                            voids: o,
                            mode: l
                        }),
                        _ = $.previous(e, {
                            at: a,
                            match: r,
                            voids: o,
                            mode: l
                        });
                    if (f && _) {
                        var [p, h] = f,
                            [m, g] = _;
                        if (0 !== h.length && 0 !== g.length) {
                            var v = el.next(g),
                                y = el.common(h, g),
                                I = el.isSibling(h, g),
                                T = Array.from($.levels(e, { at: h }), (e) => {
                                    var [t] = e;
                                    return t;
                                })
                                    .slice(y.length)
                                    .slice(0, -1),
                                b = $.above(e, {
                                    at: h,
                                    mode: 'highest',
                                    match: (t) => T.includes(t) && ek(e, t)
                                }),
                                S = b && $.pathRef(e, b[1]);
                            if (eN.isText(p) && eN.isText(m)) {
                                var A = E(p, eL);
                                (i = m.text.length), (n = A);
                            } else if (K.isElement(p) && K.isElement(m)) {
                                var A = E(p, ex);
                                (i = m.children.length), (n = A);
                            } else throw Error('Cannot merge the node at path ['.concat(h, '] with the previous sibling because it is not the same kind: ').concat(ey.stringify(p), ' ').concat(ey.stringify(m)));
                            I ||
                                eY.moveNodes(e, {
                                    at: h,
                                    to: v,
                                    voids: o
                                }),
                                S &&
                                    eY.removeNodes(e, {
                                        at: S.current,
                                        voids: o
                                    }),
                                (K.isElement(m) && $.isEmpty(e, m)) || (eN.isText(m) && '' === m.text && 0 !== g[g.length - 1])
                                    ? eY.removeNodes(e, {
                                          at: g,
                                          voids: o
                                      })
                                    : e.apply({
                                          type: 'merge_node',
                                          path: v,
                                          position: i,
                                          properties: n
                                      }),
                                S && S.unref();
                        }
                    }
                }
            });
        },
        moveNodes(e, t) {
            $.withoutNormalizing(e, () => {
                var { to: n, at: i = e.selection, mode: r = 'lowest', voids: a = !1 } = t,
                    { match: s } = t;
                if (i) {
                    null == s && (s = el.isPath(i) ? eG(e, i) : (t) => K.isElement(t) && $.isBlock(e, t));
                    var o = $.pathRef(e, n);
                    for (var l of Array.from(
                        $.nodes(e, {
                            at: i,
                            match: s,
                            mode: r,
                            voids: a
                        }),
                        (t) => {
                            var [, n] = t;
                            return $.pathRef(e, n);
                        }
                    )) {
                        var u = l.unref(),
                            c = o.current;
                        0 !== u.length &&
                            e.apply({
                                type: 'move_node',
                                path: u,
                                newPath: c
                            }),
                            o.current && el.isSibling(c, u) && el.isAfter(c, u) && (o.current = el.next(o.current));
                    }
                    o.unref();
                }
            });
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var { hanging: n = !1, voids: i = !1, mode: r = 'lowest' } = t,
                    { at: a = e.selection, match: s } = t;
                if (a)
                    for (var o of (null == s && (s = el.isPath(a) ? eG(e, a) : (t) => K.isElement(t) && $.isBlock(e, t)),
                    !n && eg.isRange(a) && (a = $.unhangRange(e, a, { voids: i })),
                    Array.from(
                        $.nodes(e, {
                            at: a,
                            match: s,
                            mode: r,
                            voids: i
                        }),
                        (t) => {
                            var [, n] = t;
                            return $.pathRef(e, n);
                        }
                    ))) {
                        var l = o.unref();
                        if (l) {
                            var [u] = $.node(e, l);
                            e.apply({
                                type: 'remove_node',
                                path: l,
                                node: u
                            });
                        }
                    }
            });
        },
        setNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var { match: i, at: r = e.selection, compare: a, merge: s } = n,
                    { hanging: o = !1, mode: l = 'lowest', split: u = !1, voids: c = !1 } = n;
                if (r) {
                    if ((null == i && (i = el.isPath(r) ? eG(e, r) : (t) => K.isElement(t) && $.isBlock(e, t)), !o && eg.isRange(r) && (r = $.unhangRange(e, r, { voids: c })), u && eg.isRange(r))) {
                        if (eg.isCollapsed(r) && $.leaf(e, r.anchor)[0].text.length > 0) return;
                        var d = $.rangeRef(e, r, { affinity: 'inward' }),
                            [f, _] = eg.edges(r),
                            p = 'lowest' === l ? 'lowest' : 'highest',
                            h = $.isEnd(e, _, _.path);
                        eY.splitNodes(e, {
                            at: _,
                            match: i,
                            mode: p,
                            voids: c,
                            always: !h
                        });
                        var m = $.isStart(e, f, f.path);
                        eY.splitNodes(e, {
                            at: f,
                            match: i,
                            mode: p,
                            voids: c,
                            always: !m
                        }),
                            (r = d.unref()),
                            null == n.at && eY.select(e, r);
                    }
                    for (var [g, E] of (a || (a = (e, t) => e !== t),
                    $.nodes(e, {
                        at: r,
                        match: i,
                        mode: l,
                        voids: c
                    }))) {
                        var v = {},
                            y = {};
                        if (0 !== E.length) {
                            var I = !1;
                            for (var T in t) 'children' !== T && 'text' !== T && a(t[T], g[T]) && ((I = !0), g.hasOwnProperty(T) && (v[T] = g[T]), s ? null != t[T] && (y[T] = s(g[T], t[T])) : null != t[T] && (y[T] = t[T]));
                            I &&
                                e.apply({
                                    type: 'set_node',
                                    path: E,
                                    properties: v,
                                    newProperties: y
                                });
                        }
                    }
                }
            });
        },
        splitNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var n,
                    i,
                    { mode: r = 'lowest', voids: a = !1 } = t,
                    { match: s, at: o = e.selection, height: l = 0, always: u = !1 } = t;
                if ((null == s && (s = (t) => K.isElement(t) && $.isBlock(e, t)), eg.isRange(o) && (o = eU(e, o)), el.isPath(o))) {
                    var c = o,
                        d = $.point(e, c),
                        [f] = $.parent(e, c);
                    (s = (e) => e === f), (l = d.path.length - c.length + 1), (o = d), (u = !0);
                }
                if (o) {
                    var _ = $.pointRef(e, o, { affinity: 'backward' });
                    try {
                        var [p] = $.nodes(e, {
                            at: o,
                            match: s,
                            mode: r,
                            voids: a
                        });
                        if (!p) return;
                        var h = $.void(e, {
                                at: o,
                                mode: 'highest'
                            }),
                            m = 0;
                        if (!a && h) {
                            var [g, E] = h;
                            if (K.isElement(g) && e.isInline(g)) {
                                var v = $.after(e, E);
                                if (!v) {
                                    var y = { text: '' },
                                        I = el.next(E);
                                    eY.insertNodes(e, y, {
                                        at: I,
                                        voids: a
                                    }),
                                        (v = $.point(e, I));
                                }
                                (o = v), (u = !0);
                            }
                            (l = o.path.length - E.length + 1), (u = !0);
                        }
                        n = $.pointRef(e, o);
                        var T = o.path.length - l,
                            [, b] = p,
                            S = o.path.slice(0, T),
                            A = 0 === l ? o.offset : o.path[T] + m;
                        for (var [N, C] of $.levels(e, {
                            at: S,
                            reverse: !0,
                            voids: a
                        })) {
                            var R = !1;
                            if (C.length < b.length || 0 === C.length || (!a && K.isElement(N) && $.isVoid(e, N))) break;
                            var O = _.current,
                                D = $.isEnd(e, O, C);
                            if (u || !_ || !$.isEdge(e, O, C)) {
                                R = !0;
                                var L = er.extractProps(N);
                                e.apply({
                                    type: 'split_node',
                                    path: C,
                                    position: A,
                                    properties: L
                                });
                            }
                            A = C[C.length - 1] + (R || D ? 1 : 0);
                        }
                        if (null == t.at) {
                            var x = n.current || $.end(e, []);
                            eY.select(e, x);
                        }
                    } finally {
                        _.unref(), null === (i = n) || void 0 === i || i.unref();
                    }
                }
            });
        },
        unsetNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Array.isArray(t) || (t = [t]);
            var i = {};
            for (var r of t) i[r] = null;
            eY.setNodes(e, i, n);
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var { mode: n = 'lowest', split: i = !1, voids: r = !1 } = t,
                    { at: a = e.selection, match: s } = t;
                if (a) {
                    null == s && (s = el.isPath(a) ? eG(e, a) : (t) => K.isElement(t) && $.isBlock(e, t)), el.isPath(a) && (a = $.range(e, a));
                    var o = eg.isRange(a) ? $.rangeRef(e, a) : null,
                        l = Array.from(
                            $.nodes(e, {
                                at: a,
                                match: s,
                                mode: n,
                                voids: r
                            }),
                            (t) => {
                                var [, n] = t;
                                return $.pathRef(e, n);
                            }
                        ).reverse(),
                        u = function (t) {
                            var n = t.unref(),
                                [a] = $.node(e, n),
                                s = $.range(e, n);
                            i && o && (s = eg.intersection(o.current, s)),
                                eY.liftNodes(e, {
                                    at: s,
                                    match: (e) => K.isAncestor(a) && a.children.includes(e),
                                    voids: r
                                });
                        };
                    for (var c of l) u(c);
                    o && o.unref();
                }
            });
        },
        wrapNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var { mode: i = 'lowest', split: r = !1, voids: a = !1 } = n,
                    { match: s, at: o = e.selection } = n;
                if (o) {
                    if ((null == s && (s = el.isPath(o) ? eG(e, o) : e.isInline(t) ? (t) => (K.isElement(t) && $.isInline(e, t)) || eN.isText(t) : (t) => K.isElement(t) && $.isBlock(e, t)), r && eg.isRange(o))) {
                        var [l, u] = eg.edges(o),
                            c = $.rangeRef(e, o, { affinity: 'inward' });
                        eY.splitNodes(e, {
                            at: u,
                            match: s,
                            voids: a
                        }),
                            eY.splitNodes(e, {
                                at: l,
                                match: s,
                                voids: a
                            }),
                            (o = c.unref()),
                            null == n.at && eY.select(e, o);
                    }
                    for (var [, d] of Array.from(
                        $.nodes(e, {
                            at: o,
                            match: e.isInline(t) ? (t) => K.isElement(t) && $.isBlock(e, t) : (e) => $.isEditor(e),
                            mode: 'lowest',
                            voids: a
                        })
                    )) {
                        var f = eg.isRange(o) ? eg.intersection(o, $.range(e, d)) : o;
                        if (f) {
                            var _ = Array.from(
                                $.nodes(e, {
                                    at: f,
                                    match: s,
                                    mode: i,
                                    voids: a
                                })
                            );
                            if (
                                _.length > 0 &&
                                'continue' ===
                                    (function () {
                                        var [n] = _,
                                            i = _[_.length - 1],
                                            [, r] = n,
                                            [, s] = i;
                                        if (0 === r.length && 0 === s.length) return 'continue';
                                        var o = el.equals(r, s) ? el.parent(r) : el.common(r, s),
                                            l = $.range(e, r, s),
                                            [u] = $.node(e, o),
                                            c = o.length + 1,
                                            d = el.next(s.slice(0, c)),
                                            f = eP(eP({}, t), {}, { children: [] });
                                        eY.insertNodes(e, f, {
                                            at: d,
                                            voids: a
                                        }),
                                            eY.moveNodes(e, {
                                                at: l,
                                                match: (e) => K.isAncestor(u) && u.children.includes(e),
                                                to: d.concat(0),
                                                voids: a
                                            });
                                    })()
                            )
                                continue;
                        }
                    }
                }
            });
        }
    },
    ek = (e, t) => {
        if (K.isElement(t)) {
            var n = t;
            return !!$.isVoid(e, t) || (1 === n.children.length && ek(e, n.children[0]));
        }
        return !$.isEditor(t);
    },
    eU = (e, t) => {
        if (eg.isCollapsed(t)) return t.anchor;
        var [, n] = eg.edges(t),
            i = $.pointRef(e, n);
        return eY.delete(e, { at: t }), i.unref();
    },
    eG = (e, t) => {
        var [n] = $.node(e, t);
        return (e) => e === n;
    };
function eB(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eZ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eB(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eB(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eF = {
        collapse(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { edge: n = 'anchor' } = t,
                { selection: i } = e;
            if (i) {
                if ('anchor' === n) eY.select(e, i.anchor);
                else if ('focus' === n) eY.select(e, i.focus);
                else if ('start' === n) {
                    var [r] = eg.edges(i);
                    eY.select(e, r);
                } else if ('end' === n) {
                    var [, a] = eg.edges(i);
                    eY.select(e, a);
                }
            }
        },
        deselect(e) {
            var { selection: t } = e;
            t &&
                e.apply({
                    type: 'set_selection',
                    properties: t,
                    newProperties: null
                });
        },
        move(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { selection: n } = e,
                { distance: i = 1, unit: r = 'character', reverse: a = !1 } = t,
                { edge: s = null } = t;
            if (n) {
                'start' === s && (s = eg.isBackward(n) ? 'focus' : 'anchor'), 'end' === s && (s = eg.isBackward(n) ? 'anchor' : 'focus');
                var { anchor: o, focus: l } = n,
                    u = {
                        distance: i,
                        unit: r
                    },
                    c = {};
                if (null == s || 'anchor' === s) {
                    var d = a ? $.before(e, o, u) : $.after(e, o, u);
                    d && (c.anchor = d);
                }
                if (null == s || 'focus' === s) {
                    var f = a ? $.before(e, l, u) : $.after(e, l, u);
                    f && (c.focus = f);
                }
                eY.setSelection(e, c);
            }
        },
        select(e, t) {
            var { selection: n } = e;
            if (((t = $.range(e, t)), n)) {
                eY.setSelection(e, t);
                return;
            }
            if (!eg.isRange(t)) throw Error('When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: '.concat(ey.stringify(t)));
            e.apply({
                type: 'set_selection',
                properties: n,
                newProperties: t
            });
        },
        setPoint(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { selection: i } = e,
                { edge: r = 'both' } = n;
            if (i) {
                'start' === r && (r = eg.isBackward(i) ? 'focus' : 'anchor'), 'end' === r && (r = eg.isBackward(i) ? 'anchor' : 'focus');
                var { anchor: a, focus: s } = i,
                    o = 'anchor' === r ? a : s;
                eY.setSelection(e, { ['anchor' === r ? 'anchor' : 'focus']: eZ(eZ({}, o), t) });
            }
        },
        setSelection(e, t) {
            var { selection: n } = e,
                i = {},
                r = {};
            if (n) {
                for (var a in t) (('anchor' !== a || null == t.anchor || ef.equals(t.anchor, n.anchor)) && ('focus' !== a || null == t.focus || ef.equals(t.focus, n.focus)) && ('anchor' === a || 'focus' === a || t[a] === n[a])) || ((i[a] = n[a]), (r[a] = t[a]));
                Object.keys(i).length > 0 &&
                    e.apply({
                        type: 'set_selection',
                        properties: i,
                        newProperties: r
                    });
            }
        }
    },
    eV = {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var n,
                    { reverse: i = !1, unit: r = 'character', distance: a = 1, voids: s = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var u = !1;
                    if ((eg.isRange(o) && eg.isCollapsed(o) && ((u = !0), (o = o.anchor)), ef.isPoint(o))) {
                        var c = $.void(e, {
                            at: o,
                            mode: 'highest'
                        });
                        if (!s && c) {
                            var [, d] = c;
                            o = d;
                        } else {
                            var f = {
                                    unit: r,
                                    distance: a
                                },
                                _ = i ? $.before(e, o, f) || $.start(e, []) : $.after(e, o, f) || $.end(e, []);
                            (o = {
                                anchor: o,
                                focus: _
                            }),
                                (l = !0);
                        }
                    }
                    if (el.isPath(o)) {
                        eY.removeNodes(e, {
                            at: o,
                            voids: s
                        });
                        return;
                    }
                    if (!eg.isCollapsed(o)) {
                        if (!l) {
                            var [, p] = eg.edges(o),
                                h = $.end(e, []);
                            ef.equals(p, h) || (o = $.unhangRange(e, o, { voids: s }));
                        }
                        var [m, g] = eg.edges(o),
                            E = $.above(e, {
                                match: (t) => K.isElement(t) && $.isBlock(e, t),
                                at: m,
                                voids: s
                            }),
                            v = $.above(e, {
                                match: (t) => K.isElement(t) && $.isBlock(e, t),
                                at: g,
                                voids: s
                            }),
                            y = E && v && !el.equals(E[1], v[1]),
                            I = el.equals(m.path, g.path),
                            T = s
                                ? null
                                : $.void(e, {
                                      at: m,
                                      mode: 'highest'
                                  }),
                            b = s
                                ? null
                                : $.void(e, {
                                      at: g,
                                      mode: 'highest'
                                  });
                        if (T) {
                            var S = $.before(e, m);
                            S && E && el.isAncestor(E[1], S.path) && (m = S);
                        }
                        if (b) {
                            var A = $.after(e, g);
                            A && v && el.isAncestor(v[1], A.path) && (g = A);
                        }
                        var N = [];
                        for (var C of $.nodes(e, {
                            at: o,
                            voids: s
                        })) {
                            var [R, O] = C;
                            (!n || 0 !== el.compare(O, n)) && ((!s && K.isElement(R) && $.isVoid(e, R)) || (!el.isCommon(O, m.path) && !el.isCommon(O, g.path))) && (N.push(C), (n = O));
                        }
                        var D = Array.from(N, (t) => {
                                var [, n] = t;
                                return $.pathRef(e, n);
                            }),
                            L = $.pointRef(e, m),
                            x = $.pointRef(e, g),
                            w = '';
                        if (!I && !T) {
                            var P = L.current,
                                [M] = $.leaf(e, P),
                                { path: k } = P,
                                { offset: U } = m,
                                G = M.text.slice(U);
                            G.length > 0 &&
                                (e.apply({
                                    type: 'remove_text',
                                    path: k,
                                    offset: U,
                                    text: G
                                }),
                                (w = G));
                        }
                        if (
                            (D.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) =>
                                    eY.removeNodes(e, {
                                        at: t,
                                        voids: s
                                    })
                                ),
                            !b)
                        ) {
                            var B = x.current,
                                [Z] = $.leaf(e, B),
                                { path: F } = B,
                                V = I ? m.offset : 0,
                                j = Z.text.slice(V, g.offset);
                            j.length > 0 &&
                                (e.apply({
                                    type: 'remove_text',
                                    path: F,
                                    offset: V,
                                    text: j
                                }),
                                (w = j));
                        }
                        !I &&
                            y &&
                            x.current &&
                            L.current &&
                            eY.mergeNodes(e, {
                                at: x.current,
                                hanging: !0,
                                voids: s
                            }),
                            u && i && 'character' === r && w.length > 1 && w.match(/[\u0E00-\u0E7F]+/) && eY.insertText(e, w.slice(0, w.length - a));
                        var H = L.unref(),
                            Y = x.unref(),
                            W = i ? H || Y : Y || H;
                        null == t.at && W && eY.select(e, W);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var i,
                    { hanging: r = !1, voids: a = !1 } = n,
                    { at: s = e.selection } = n;
                if (t.length && s) {
                    if (eg.isRange(s)) {
                        if ((r || (s = $.unhangRange(e, s, { voids: a })), eg.isCollapsed(s))) s = s.anchor;
                        else {
                            var [, o] = eg.edges(s);
                            if (!a && $.void(e, { at: o })) return;
                            var l = $.pointRef(e, o);
                            eY.delete(e, { at: s }), (s = l.unref());
                        }
                    } else el.isPath(s) && (s = $.start(e, s));
                    if (!(!a && $.void(e, { at: s }))) {
                        var u = $.above(e, {
                            at: s,
                            match: (t) => K.isElement(t) && $.isInline(e, t),
                            mode: 'highest',
                            voids: a
                        });
                        if (u) {
                            var [, c] = u;
                            $.isEnd(e, s, c) ? (s = $.after(e, c)) : $.isStart(e, s, c) && (s = $.before(e, c));
                        }
                        var [, d] = $.above(e, {
                                match: (t) => K.isElement(t) && $.isBlock(e, t),
                                at: s,
                                voids: a
                            }),
                            f = $.isStart(e, s, d),
                            _ = $.isEnd(e, s, d),
                            p = f && _,
                            h = !f || (f && _),
                            m = !_,
                            [, g] = er.first({ children: t }, []),
                            [, E] = er.last({ children: t }, []),
                            v = [],
                            y = (t) => {
                                var [n, i] = t;
                                return 0 !== i.length && (!!p || !((h && el.isAncestor(i, g) && K.isElement(n) && !e.isVoid(n) && !e.isInline(n)) || (m && el.isAncestor(i, E) && K.isElement(n) && !e.isVoid(n) && !e.isInline(n))));
                            };
                        for (var I of er.nodes({ children: t }, { pass: y })) y(I) && v.push(I);
                        var T = [],
                            b = [],
                            S = [],
                            A = !0,
                            N = !1;
                        for (var [C] of v) K.isElement(C) && !e.isInline(C) ? ((A = !1), (N = !0), b.push(C)) : A ? T.push(C) : S.push(C);
                        var [R] = $.nodes(e, {
                                at: s,
                                match: (t) => eN.isText(t) || $.isInline(e, t),
                                mode: 'highest',
                                voids: a
                            }),
                            [, O] = R,
                            D = $.isStart(e, s, O),
                            L = $.isEnd(e, s, O),
                            x = $.pathRef(e, _ && !S.length ? el.next(d) : d),
                            w = $.pathRef(e, L ? el.next(O) : O);
                        eY.splitNodes(e, {
                            at: s,
                            match: (t) => (N ? K.isElement(t) && $.isBlock(e, t) : eN.isText(t) || $.isInline(e, t)),
                            mode: N ? 'lowest' : 'highest',
                            always: N && (!f || T.length > 0) && (!_ || S.length > 0),
                            voids: a
                        });
                        var P = $.pathRef(e, !D || (D && L) ? el.next(O) : O);
                        if (
                            (eY.insertNodes(e, T, {
                                at: P.current,
                                match: (t) => eN.isText(t) || $.isInline(e, t),
                                mode: 'highest',
                                voids: a
                            }),
                            p &&
                                !T.length &&
                                b.length &&
                                !S.length &&
                                eY.delete(e, {
                                    at: d,
                                    voids: a
                                }),
                            eY.insertNodes(e, b, {
                                at: x.current,
                                match: (t) => K.isElement(t) && $.isBlock(e, t),
                                mode: 'lowest',
                                voids: a
                            }),
                            eY.insertNodes(e, S, {
                                at: w.current,
                                match: (t) => eN.isText(t) || $.isInline(e, t),
                                mode: 'highest',
                                voids: a
                            }),
                            !n.at && (S.length > 0 && w.current ? (i = el.previous(w.current)) : b.length > 0 && x.current ? (i = el.previous(x.current)) : P.current && (i = el.previous(P.current)), i))
                        ) {
                            var M = $.end(e, i);
                            eY.select(e, M);
                        }
                        P.unref(), x.unref(), w.unref();
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var { voids: i = !1 } = n,
                    { at: r = e.selection } = n;
                if (r) {
                    if ((el.isPath(r) && (r = $.range(e, r)), eg.isRange(r))) {
                        if (eg.isCollapsed(r)) r = r.anchor;
                        else {
                            var a = eg.end(r);
                            if (!i && $.void(e, { at: a })) return;
                            var s = eg.start(r),
                                o = $.pointRef(e, s),
                                l = $.pointRef(e, a);
                            eY.delete(e, {
                                at: r,
                                voids: i
                            });
                            var u = o.unref(),
                                c = l.unref();
                            (r = u || c),
                                eY.setSelection(e, {
                                    anchor: r,
                                    focus: r
                                });
                        }
                    }
                    if (!(!i && $.void(e, { at: r }))) {
                        var { path: d, offset: f } = r;
                        t.length > 0 &&
                            e.apply({
                                type: 'insert_text',
                                path: d,
                                offset: f,
                                text: t
                            });
                    }
                }
            });
        }
    };
function ej(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eH(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eY = eH(eH(eH(eH({}, eD), eM), eF), eV);
