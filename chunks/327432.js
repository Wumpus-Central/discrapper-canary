r.d(n, {
    E9: function () {
        return e_;
    },
    Jh: function () {
        return g;
    },
    ML: function () {
        return ee;
    },
    NB: function () {
        return ea;
    },
    W_: function () {
        return z;
    },
    YR: function () {
        return eW;
    },
    e6: function () {
        return eE;
    },
    o4: function () {
        return eT;
    },
    xv: function () {
        return eC;
    },
    y$: function () {
        return eu;
    }
});
var i,
    a = r(855242),
    s = r(688451);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
var l = new WeakMap(),
    u = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    f = new WeakMap(),
    _ = new WeakMap(),
    h = new WeakMap();
function p(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? p(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : p(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var g = () => {
    var e = {
        children: [],
        operations: [],
        selection: null,
        marks: null,
        isInline: () => !1,
        isVoid: () => !1,
        markableVoid: () => !1,
        onChange: () => {},
        apply: (n) => {
            for (var r of ee.pathRefs(e)) ec.transform(r, n);
            for (var i of ee.pointRefs(e)) eh.transform(i, n);
            for (var a of ee.rangeRefs(e)) ev.transform(a, n);
            var s,
                o,
                d = l.get(e) || [],
                f = u.get(e) || new Set(),
                _ = (e) => {
                    if (e) {
                        var n = e.join(',');
                        !o.has(n) && (o.add(n), s.push(e));
                    }
                };
            if (eu.operationCanTransformPath(n)) for (var h of ((s = []), (o = new Set()), d)) _(eu.transform(h, n));
            else (s = d), (o = f);
            for (var p of e.getDirtyPaths(n)) _(p);
            l.set(e, s),
                u.set(e, o),
                eW.transform(e, n),
                e.operations.push(n),
                ee.normalize(e, { operation: n }),
                'set_selection' === n.type && (e.marks = null),
                !c.get(e) &&
                    (c.set(e, !0),
                    Promise.resolve().then(() => {
                        c.set(e, !1), e.onChange({ operation: n }), (e.operations = []);
                    }));
        },
        addMark: (n, r) => {
            var { selection: i, markableVoid: a } = e;
            if (i) {
                var s = (n, r) => {
                        if (!eC.isText(n)) return !1;
                        var [i, a] = ee.parent(e, r);
                        return !e.isVoid(i) || e.markableVoid(i);
                    },
                    o = eE.isExpanded(i),
                    l = !1;
                if (!o) {
                    var [u, d] = ee.node(e, i);
                    if (u && s(u, d)) {
                        var [f] = ee.parent(e, d);
                        l = f && e.markableVoid(f);
                    }
                }
                if (o || l)
                    eW.setNodes(
                        e,
                        { [n]: r },
                        {
                            match: s,
                            split: !0,
                            voids: !0
                        }
                    );
                else {
                    var _ = m(m({}, ee.marks(e) || {}), {}, { [n]: r });
                    (e.marks = _), !c.get(e) && e.onChange();
                }
            }
        },
        deleteBackward: (n) => {
            var { selection: r } = e;
            r &&
                eE.isCollapsed(r) &&
                eW.delete(e, {
                    unit: n,
                    reverse: !0
                });
        },
        deleteForward: (n) => {
            var { selection: r } = e;
            r && eE.isCollapsed(r) && eW.delete(e, { unit: n });
        },
        deleteFragment: (n) => {
            var { selection: r } = e;
            r && eE.isExpanded(r) && eW.delete(e, { reverse: 'backward' === n });
        },
        getFragment: () => {
            var { selection: n } = e;
            return n ? ea.fragment(e, n) : [];
        },
        insertBreak: () => {
            eW.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eW.splitNodes(e, { always: !0 });
        },
        insertFragment: (n) => {
            eW.insertFragment(e, n);
        },
        insertNode: (n) => {
            eW.insertNodes(e, n);
        },
        insertText: (n) => {
            var { selection: r, marks: i } = e;
            if (r) {
                if (i) {
                    var a = m({ text: n }, i);
                    eW.insertNodes(e, a);
                } else eW.insertText(e, n);
                e.marks = null;
            }
        },
        normalizeNode: (n) => {
            var [r, i] = n;
            if (!eC.isText(r)) {
                if (z.isElement(r) && 0 === r.children.length) {
                    var a = { text: '' };
                    eW.insertNodes(e, a, {
                        at: i.concat(0),
                        voids: !0
                    });
                    return;
                }
                for (var s = !ee.isEditor(r) && z.isElement(r) && (e.isInline(r) || 0 === r.children.length || eC.isText(r.children[0]) || e.isInline(r.children[0])), o = 0, l = 0; l < r.children.length; l++, o++) {
                    var u = ea.get(e, i);
                    if (!eC.isText(u)) {
                        var c = r.children[l],
                            d = u.children[o - 1],
                            f = l === r.children.length - 1,
                            _ = eC.isText(c) || (z.isElement(c) && e.isInline(c));
                        if (_ !== s)
                            eW.removeNodes(e, {
                                at: i.concat(o),
                                voids: !0
                            }),
                                o--;
                        else if (z.isElement(c)) {
                            if (e.isInline(c)) {
                                if (null != d && eC.isText(d)) {
                                    if (f) {
                                        var h = { text: '' };
                                        eW.insertNodes(e, h, {
                                            at: i.concat(o + 1),
                                            voids: !0
                                        }),
                                            o++;
                                    }
                                } else {
                                    var p = { text: '' };
                                    eW.insertNodes(e, p, {
                                        at: i.concat(o),
                                        voids: !0
                                    }),
                                        o++;
                                }
                            }
                        } else
                            null != d &&
                                eC.isText(d) &&
                                (eC.equals(c, d, { loose: !0 })
                                    ? (eW.mergeNodes(e, {
                                          at: i.concat(o),
                                          voids: !0
                                      }),
                                      o--)
                                    : '' === d.text
                                      ? (eW.removeNodes(e, {
                                            at: i.concat(o - 1),
                                            voids: !0
                                        }),
                                        o--)
                                      : '' === c.text &&
                                        (eW.removeNodes(e, {
                                            at: i.concat(o),
                                            voids: !0
                                        }),
                                        o--));
                    }
                }
            }
        },
        removeMark: (n) => {
            var { selection: r } = e;
            if (r) {
                var i = (n, r) => {
                        if (!eC.isText(n)) return !1;
                        var [i, a] = ee.parent(e, r);
                        return !e.isVoid(i) || e.markableVoid(i);
                    },
                    a = eE.isExpanded(r),
                    s = !1;
                if (!a) {
                    var [o, l] = ee.node(e, r);
                    if (o && i(o, l)) {
                        var [u] = ee.parent(e, l);
                        s = u && e.markableVoid(u);
                    }
                }
                if (a || s)
                    eW.unsetNodes(e, n, {
                        match: i,
                        split: !0,
                        voids: !0
                    });
                else {
                    var d = m({}, ee.marks(e) || {});
                    delete d[n], (e.marks = d), !c.get(e) && e.onChange();
                }
            }
        },
        getDirtyPaths: (e) => {
            switch (e.type) {
                case 'insert_text':
                case 'remove_text':
                case 'set_node':
                    var { path: n } = e;
                    return eu.levels(n);
                case 'insert_node':
                    var { node: r, path: i } = e;
                    return [
                        ...eu.levels(i),
                        ...(eC.isText(r)
                            ? []
                            : Array.from(ea.nodes(r), (e) => {
                                  var [, n] = e;
                                  return i.concat(n);
                              }))
                    ];
                case 'merge_node':
                    var { path: a } = e;
                    return [...eu.ancestors(a), eu.previous(a)];
                case 'move_node':
                    var { path: s, newPath: o } = e;
                    if (eu.equals(s, o)) return [];
                    var l = [],
                        u = [];
                    for (var c of eu.ancestors(s)) {
                        var d = eu.transform(c, e);
                        l.push(d);
                    }
                    for (var f of eu.ancestors(o)) {
                        var _ = eu.transform(f, e);
                        u.push(_);
                    }
                    var h = u[u.length - 1],
                        p = o[o.length - 1];
                    return [...l, ...u, h.concat(p)];
                case 'remove_node':
                    var { path: m } = e;
                    return [...eu.ancestors(m)];
                case 'split_node':
                    var { path: g } = e;
                    return [...eu.levels(g), eu.next(g)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: n, initialDirtyPathsLength: r } = e,
                i = 42 * r;
            if (n > i) throw Error('Could not completely normalize the editor after '.concat(i, ' iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.'));
            return !0;
        }
    };
    return e;
};
function E(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        s = Object.keys(e);
    for (i = 0; i < s.length; i++) (r = s[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
function v(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = E(e, n);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) {
            if (((r = s[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        }
    }
    return a;
}
var I = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !n,
            a = n ? C(e) : e,
            s = i.None,
            o = i.None,
            l = 0,
            u = null,
            c = null;
        for (var d of a) {
            var f = d.codePointAt(0);
            if (!f) break;
            var _ = G(d, f);
            if ((([s, o] = r ? [o, _] : [_, s]), (Z(s, i.ZWJ) && Z(o, i.ExtPict) && !(u = r ? H(e.substring(0, l)) : H(e.substring(0, e.length - l)))) || (Z(s, i.RI) && Z(o, i.RI) && !(c = null !== c ? !c : !!r || W(e.substring(0, e.length - l)))) || (s !== i.None && o !== i.None && V(s, o)))) break;
            l += d.length;
        }
        return l || 1;
    },
    T = /\s/,
    b = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    y = /['\u2018\u2019]/,
    S = function (e) {
        for (var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, i = !1; e.length > 0; ) {
            var a = I(e, n),
                [s, o] = A(e, a, n);
            if (N(s, o, n)) (i = !0), (r += a);
            else if (i) break;
            else r += a;
            e = o;
        }
        return r;
    },
    A = (e, n, r) => {
        if (r) {
            var i = e.length - n;
            return [e.slice(i, e.length), e.slice(0, i)];
        }
        return [e.slice(0, n), e.slice(n)];
    },
    N = function e(n, r) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (T.test(n)) return !1;
        if (y.test(n)) {
            var a = I(r, i),
                [s, o] = A(r, a, i);
            if (e(s, o, i)) return !0;
        }
        return !b.test(n) && !0;
    },
    C = function* (e) {
        for (var n = e.length - 1, r = 0; r < e.length; r++) {
            var i = e.charAt(n - r);
            if (O(i.charCodeAt(0))) {
                var a = e.charAt(n - r - 1);
                if (R(a.charCodeAt(0))) {
                    yield a + i, r++;
                    continue;
                }
            }
            yield i;
        }
    },
    R = (e) => e >= 55296 && e <= 56319,
    O = (e) => e >= 56320 && e <= 57343;
!(function (e) {
    (e[(e.None = 0)] = 'None'), (e[(e.Extend = 1)] = 'Extend'), (e[(e.ZWJ = 2)] = 'ZWJ'), (e[(e.RI = 4)] = 'RI'), (e[(e.Prepend = 8)] = 'Prepend'), (e[(e.SpacingMark = 16)] = 'SpacingMark'), (e[(e.L = 32)] = 'L'), (e[(e.V = 64)] = 'V'), (e[(e.T = 128)] = 'T'), (e[(e.LV = 256)] = 'LV'), (e[(e.LVT = 512)] = 'LVT'), (e[(e.ExtPict = 1024)] = 'ExtPict'), (e[(e.Any = 2048)] = 'Any');
})(i || (i = {}));
var D = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    L = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    x = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    w = /^[\u1100-\u115F\uA960-\uA97C]$/,
    P = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    M = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    k = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    U =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    B = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    G = (e, n) => {
        var r = i.Any;
        return -1 !== e.search(D) && (r |= i.Extend), 8205 === n && (r |= i.ZWJ), n >= 127462 && n <= 127487 && (r |= i.RI), -1 !== e.search(L) && (r |= i.Prepend), -1 !== e.search(x) && (r |= i.SpacingMark), -1 !== e.search(w) && (r |= i.L), -1 !== e.search(P) && (r |= i.V), -1 !== e.search(M) && (r |= i.T), -1 !== e.search(k) && (r |= i.LV), -1 !== e.search(U) && (r |= i.LVT), -1 !== e.search(B) && (r |= i.ExtPict), r;
    };
function Z(e, n) {
    return (e & n) != 0;
}
var F = [
    [i.L, i.L | i.V | i.LV | i.LVT],
    [i.LV | i.V, i.V | i.T],
    [i.LVT | i.T, i.T],
    [i.Any, i.Extend | i.ZWJ],
    [i.Any, i.SpacingMark],
    [i.Prepend, i.Any],
    [i.ZWJ, i.ExtPict],
    [i.RI, i.RI]
];
function V(e, n) {
    return -1 === F.findIndex((r) => Z(e, r[0]) && Z(n, r[1]));
}
var j =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    H = (e) => -1 !== e.search(j),
    Y = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    W = (e) => {
        var n = e.match(Y);
        return null !== n && (n[0].length / 2) % 2 == 1;
    },
    K = (e) => (0, a.P)(e) && ea.isNodeList(e.children) && !ee.isEditor(e),
    z = {
        isAncestor: (e) => (0, a.P)(e) && ea.isNodeList(e.children),
        isElement: K,
        isElementList: (e) => Array.isArray(e) && e.every((e) => z.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'type';
            return K(e) && e[r] === n;
        },
        matches(e, n) {
            for (var r in n) {
                if ('children' !== r) {
                    if (e[r] !== n[r]) return !1;
                }
            }
            return !0;
        }
    },
    q = ['text'],
    Q = ['text'];
function X(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function J(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? X(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : X(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var $ = new WeakMap(),
    ee = {
        above(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: r = !1, mode: i = 'lowest', at: a = e.selection, match: s } = n;
            if (!!a) {
                var o = ee.path(e, a),
                    l = 'lowest' === i;
                for (var [u, c] of ee.levels(e, {
                    at: o,
                    voids: r,
                    match: s,
                    reverse: l
                }))
                    if (!eC.isText(u)) {
                        if (eE.isRange(a)) {
                            if (eu.isAncestor(c, a.anchor.path) && eu.isAncestor(c, a.focus.path)) return [u, c];
                        } else if (!eu.equals(o, c)) return [u, c];
                    }
            }
        },
        addMark(e, n, r) {
            e.addMark(n, r);
        },
        after(e, n) {
            var r,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = ee.point(e, n, { edge: 'end' }),
                s = {
                    anchor: a,
                    focus: ee.end(e, [])
                },
                { distance: o = 1 } = i,
                l = 0;
            for (var u of ee.positions(e, J(J({}, i), {}, { at: s }))) {
                if (l > o) break;
                0 !== l && (r = u), l++;
            }
            return r;
        },
        before(e, n) {
            var r,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = ee.start(e, []),
                s = {
                    anchor: a,
                    focus: ee.point(e, n, { edge: 'start' })
                },
                { distance: o = 1 } = i,
                l = 0;
            for (var u of ee.positions(
                e,
                J(
                    J({}, i),
                    {},
                    {
                        at: s,
                        reverse: !0
                    }
                )
            )) {
                if (l > o) break;
                0 !== l && (r = u), l++;
            }
            return r;
        },
        deleteBackward(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: r = 'character' } = n;
            e.deleteBackward(r);
        },
        deleteForward(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: r = 'character' } = n;
            e.deleteForward(r);
        },
        deleteFragment(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: r = 'forward' } = n;
            e.deleteFragment(r);
        },
        edges: (e, n) => [ee.start(e, n), ee.end(e, n)],
        end: (e, n) => ee.point(e, n, { edge: 'end' }),
        first(e, n) {
            var r = ee.path(e, n, { edge: 'start' });
            return ee.node(e, r);
        },
        fragment(e, n) {
            var r = ee.range(e, n);
            return ea.fragment(e, r);
        },
        hasBlocks: (e, n) => n.children.some((n) => z.isElement(n) && ee.isBlock(e, n)),
        hasInlines: (e, n) => n.children.some((n) => eC.isText(n) || ee.isInline(e, n)),
        hasTexts: (e, n) => n.children.every((e) => eC.isText(e)),
        insertBreak(e) {
            e.insertBreak();
        },
        insertSoftBreak(e) {
            e.insertSoftBreak();
        },
        insertFragment(e, n) {
            e.insertFragment(n);
        },
        insertNode(e, n) {
            e.insertNode(n);
        },
        insertText(e, n) {
            e.insertText(n);
        },
        isBlock: (e, n) => !e.isInline(n),
        isEditor(e) {
            var n = $.get(e);
            if (void 0 !== n) return n;
            if (!(0, a.P)(e)) return !1;
            var r = 'function' == typeof e.addMark && 'function' == typeof e.apply && 'function' == typeof e.deleteBackward && 'function' == typeof e.deleteForward && 'function' == typeof e.deleteFragment && 'function' == typeof e.insertBreak && 'function' == typeof e.insertSoftBreak && 'function' == typeof e.insertFragment && 'function' == typeof e.insertNode && 'function' == typeof e.insertText && 'function' == typeof e.isInline && 'function' == typeof e.isVoid && 'function' == typeof e.normalizeNode && 'function' == typeof e.onChange && 'function' == typeof e.removeMark && 'function' == typeof e.getDirtyPaths && (null === e.marks || (0, a.P)(e.marks)) && (null === e.selection || eE.isRange(e.selection)) && ea.isNodeList(e.children) && el.isOperationList(e.operations);
            return $.set(e, r), r;
        },
        isEnd(e, n, r) {
            var i = ee.end(e, r);
            return e_.equals(n, i);
        },
        isEdge: (e, n, r) => ee.isStart(e, n, r) || ee.isEnd(e, n, r),
        isEmpty(e, n) {
            var { children: r } = n,
                [i] = r;
            return 0 === r.length || (1 === r.length && eC.isText(i) && '' === i.text && !e.isVoid(n));
        },
        isInline: (e, n) => e.isInline(n),
        isNormalizing(e) {
            var n = d.get(e);
            return void 0 === n || n;
        },
        isStart(e, n, r) {
            if (0 !== n.offset) return !1;
            var i = ee.start(e, r);
            return e_.equals(n, i);
        },
        isVoid: (e, n) => e.isVoid(n),
        last(e, n) {
            var r = ee.path(e, n, { edge: 'end' });
            return ee.node(e, r);
        },
        leaf(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = ee.path(e, n, r);
            return [ea.leaf(e, i), i];
        },
        *levels(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: r = e.selection, reverse: i = !1, voids: a = !1 } = n,
                { match: s } = n;
            if ((null == s && (s = () => !0), !!r)) {
                var o = [],
                    l = ee.path(e, r);
                for (var [u, c] of ea.levels(e, l)) {
                    if (!!s(u, c)) {
                        if ((o.push([u, c]), !a && z.isElement(u) && ee.isVoid(e, u))) break;
                    }
                }
                i && o.reverse(), yield* o;
            }
        },
        marks(e) {
            var { marks: n, selection: r } = e;
            if (!r) return null;
            if (n) return n;
            if (eE.isExpanded(r)) {
                var [i] = ee.nodes(e, { match: eC.isText });
                if (!i) return {};
                var [a] = i;
                return v(a, q);
            }
            var { anchor: s } = r,
                { path: o } = s,
                [l] = ee.leaf(e, o);
            if (0 === s.offset) {
                var u = ee.previous(e, {
                    at: o,
                    match: eC.isText
                });
                if (!ee.above(e, { match: (n) => z.isElement(n) && ee.isVoid(e, n) && e.markableVoid(n) })) {
                    var c = ee.above(e, { match: (n) => z.isElement(n) && ee.isBlock(e, n) });
                    if (u && c) {
                        var [d, f] = u,
                            [, _] = c;
                        eu.isAncestor(_, f) && (l = d);
                    }
                }
            }
            return v(l, Q);
        },
        next(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: r = 'lowest', voids: i = !1 } = n,
                { match: a, at: s = e.selection } = n;
            if (!!s) {
                var o = ee.after(e, s, { voids: i });
                if (o) {
                    var [, l] = ee.last(e, []),
                        u = [o.path, l];
                    if (eu.isPath(s) && 0 === s.length) throw Error('Cannot get the next node from the root node!');
                    if (null == a) {
                        if (eu.isPath(s)) {
                            var [c] = ee.parent(e, s);
                            a = (e) => c.children.includes(e);
                        } else a = () => !0;
                    }
                    var [d] = ee.nodes(e, {
                        at: u,
                        match: a,
                        mode: r,
                        voids: i
                    });
                    return d;
                }
            }
        },
        node(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = ee.path(e, n, r);
            return [ea.get(e, i), i];
        },
        *nodes(e) {
            var n,
                r,
                i,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: s = e.selection, mode: o = 'all', universal: l = !1, reverse: u = !1, voids: c = !1 } = a,
                { match: d } = a;
            if ((!d && (d = () => !0), !!s)) {
                if (et.isSpan(s)) (n = s[0]), (r = s[1]);
                else {
                    var f = ee.path(e, s, { edge: 'start' }),
                        _ = ee.path(e, s, { edge: 'end' });
                    (n = u ? _ : f), (r = u ? f : _);
                }
                var h = ea.nodes(e, {
                        reverse: u,
                        from: n,
                        to: r,
                        pass: (n) => {
                            var [r] = n;
                            return !c && z.isElement(r) && ee.isVoid(e, r);
                        }
                    }),
                    p = [];
                for (var [m, g] of h) {
                    var E = i && 0 === eu.compare(g, i[1]);
                    if ('highest' !== o || !E) {
                        if (!d(m, g)) {
                            if (l && !E && eC.isText(m)) return;
                            continue;
                        }
                        if ('lowest' === o && E) {
                            i = [m, g];
                            continue;
                        }
                        var v = 'lowest' === o ? i : [m, g];
                        v && (l ? p.push(v) : yield v), (i = [m, g]);
                    }
                }
                'lowest' === o && i && (l ? p.push(i) : yield i), l && (yield* p);
            }
        },
        normalize(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: r = !1, operation: i } = n,
                a = (e) => l.get(e) || [],
                s = (e) => u.get(e) || new Set(),
                o = (e) => {
                    var n = a(e).pop(),
                        r = n.join(',');
                    return s(e).delete(r), n;
                };
            if (!ee.isNormalizing(e)) return;
            if (r) {
                var c = Array.from(ea.nodes(e), (e) => {
                        var [, n] = e;
                        return n;
                    }),
                    d = new Set(c.map((e) => e.join(',')));
                l.set(e, c), u.set(e, d);
            }
            if (0 !== a(e).length)
                ee.withoutNormalizing(e, () => {
                    for (var n of a(e))
                        if (ea.has(e, n)) {
                            var r = ee.node(e, n),
                                [s, l] = r;
                            z.isElement(s) && 0 === s.children.length && e.normalizeNode(r, { operation: i });
                        }
                    for (var u = a(e), c = u.length, d = 0; 0 !== u.length; ) {
                        if (
                            !e.shouldNormalize({
                                dirtyPaths: u,
                                iteration: d,
                                initialDirtyPathsLength: c,
                                operation: i
                            })
                        )
                            return;
                        var f = o(e);
                        if (ea.has(e, f)) {
                            var _ = ee.node(e, f);
                            e.normalizeNode(_, { operation: i });
                        }
                        d++, (u = a(e));
                    }
                });
        },
        parent(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = ee.path(e, n, r),
                a = eu.parent(i);
            return ee.node(e, a);
        },
        path(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: i, edge: a } = r;
            if (eu.isPath(n)) {
                if ('start' === a) {
                    var [, s] = ea.first(e, n);
                    n = s;
                } else if ('end' === a) {
                    var [, o] = ea.last(e, n);
                    n = o;
                }
            }
            return eE.isRange(n) && (n = 'start' === a ? eE.start(n) : 'end' === a ? eE.end(n) : eu.common(n.anchor.path, n.focus.path)), e_.isPoint(n) && (n = n.path), null != i && (n = n.slice(0, i)), n;
        },
        hasPath: (e, n) => ea.has(e, n),
        pathRef(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = 'forward' } = r,
                a = {
                    current: n,
                    affinity: i,
                    unref() {
                        var { current: n } = a;
                        return ee.pathRefs(e).delete(a), (a.current = null), n;
                    }
                };
            return ee.pathRefs(e).add(a), a;
        },
        pathRefs(e) {
            var n = f.get(e);
            return !n && ((n = new Set()), f.set(e, n)), n;
        },
        point(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: i = 'start' } = r;
            if (eu.isPath(n)) {
                if ('end' === i) {
                    var a,
                        [, s] = ea.last(e, n);
                    a = s;
                } else {
                    var [, o] = ea.first(e, n);
                    a = o;
                }
                var l = ea.get(e, a);
                if (!eC.isText(l)) throw Error('Cannot get the '.concat(i, ' point in the node at path [').concat(n, '] because it has no ').concat(i, ' text node.'));
                return {
                    path: a,
                    offset: 'end' === i ? l.text.length : 0
                };
            }
            if (eE.isRange(n)) {
                var [u, c] = eE.edges(n);
                return 'start' === i ? u : c;
            }
            return n;
        },
        pointRef(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = 'forward' } = r,
                a = {
                    current: n,
                    affinity: i,
                    unref() {
                        var { current: n } = a;
                        return ee.pointRefs(e).delete(a), (a.current = null), n;
                    }
                };
            return ee.pointRefs(e).add(a), a;
        },
        pointRefs(e) {
            var n = _.get(e);
            return !n && ((n = new Set()), _.set(e, n)), n;
        },
        *positions(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: r = e.selection, unit: i = 'offset', reverse: a = !1, voids: s = !1 } = n;
            if (!!r) {
                var o = ee.range(e, r),
                    [l, u] = eE.edges(o),
                    c = a ? u : l,
                    d = !1,
                    f = '',
                    _ = 0,
                    h = 0,
                    p = 0;
                for (var [m, g] of ee.nodes(e, {
                    at: r,
                    reverse: a,
                    voids: s
                })) {
                    if (z.isElement(m)) {
                        if (!s && e.isVoid(m)) {
                            yield ee.start(e, g);
                            continue;
                        }
                        if (e.isInline(m)) continue;
                        if (ee.hasInlines(e, m)) {
                            var E = eu.isAncestor(g, u.path) ? u : ee.end(e, g),
                                v = eu.isAncestor(g, l.path) ? l : ee.start(e, g);
                            (f = ee.string(
                                e,
                                {
                                    anchor: v,
                                    focus: E
                                },
                                { voids: s }
                            )),
                                (d = !0);
                        }
                    }
                    if (eC.isText(m)) {
                        var T = eu.equals(g, c.path);
                        for (
                            T ? ((h = a ? c.offset : m.text.length - c.offset), (p = c.offset)) : ((h = m.text.length), (p = a ? h : 0)),
                                (T || d || 'offset' === i) &&
                                    (yield {
                                        path: g,
                                        offset: p
                                    },
                                    (d = !1));
                            ;

                        ) {
                            if (0 === _) {
                                if ('' === f) break;
                                (_ = b(f, i, a)), (f = A(f, _, a)[1]);
                            }
                            if (((p = a ? p - _ : p + _), (h -= _) < 0)) {
                                _ = -h;
                                break;
                            }
                            (_ = 0),
                                yield {
                                    path: g,
                                    offset: p
                                };
                        }
                    }
                }
            }
            function b(e, n, r) {
                if ('character' === n) return I(e, r);
                if ('word' === n) return S(e, r);
                if ('line' === n || 'block' === n) return e.length;
                return 1;
            }
        },
        previous(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: r = 'lowest', voids: i = !1 } = n,
                { match: a, at: s = e.selection } = n;
            if (!s) return;
            var o = ee.before(e, s, { voids: i });
            if (!!o) {
                var [, l] = ee.first(e, []),
                    u = [o.path, l];
                if (eu.isPath(s) && 0 === s.length) throw Error('Cannot get the previous node from the root node!');
                if (null == a) {
                    if (eu.isPath(s)) {
                        var [c] = ee.parent(e, s);
                        a = (e) => c.children.includes(e);
                    } else a = () => !0;
                }
                var [d] = ee.nodes(e, {
                    reverse: !0,
                    at: u,
                    match: a,
                    mode: r,
                    voids: i
                });
                return d;
            }
        },
        range: (e, n, r) =>
            eE.isRange(n) && !r
                ? n
                : {
                      anchor: ee.start(e, n),
                      focus: ee.end(e, r || n)
                  },
        rangeRef(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = 'forward' } = r,
                a = {
                    current: n,
                    affinity: i,
                    unref() {
                        var { current: n } = a;
                        return ee.rangeRefs(e).delete(a), (a.current = null), n;
                    }
                };
            return ee.rangeRefs(e).add(a), a;
        },
        rangeRefs(e) {
            var n = h.get(e);
            return !n && ((n = new Set()), h.set(e, n)), n;
        },
        removeMark(e, n) {
            e.removeMark(n);
        },
        setNormalizing(e, n) {
            d.set(e, n);
        },
        start: (e, n) => ee.point(e, n, { edge: 'start' }),
        string(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: i = !1 } = r,
                a = ee.range(e, n),
                [s, o] = eE.edges(a),
                l = '';
            for (var [u, c] of ee.nodes(e, {
                at: a,
                match: eC.isText,
                voids: i
            })) {
                var d = u.text;
                eu.equals(c, o.path) && (d = d.slice(0, o.offset)), eu.equals(c, s.path) && (d = d.slice(s.offset)), (l += d);
            }
            return l;
        },
        unhangRange(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: i = !1 } = r,
                [a, s] = eE.edges(n);
            if (0 !== a.offset || 0 !== s.offset || eE.isCollapsed(n) || eu.hasPrevious(s.path)) return n;
            var o = ee.above(e, {
                    at: s,
                    match: (n) => z.isElement(n) && ee.isBlock(e, n),
                    voids: i
                }),
                l = o ? o[1] : [],
                u = {
                    anchor: ee.start(e, a),
                    focus: s
                },
                c = !0;
            for (var [d, f] of ee.nodes(e, {
                at: u,
                match: eC.isText,
                reverse: !0,
                voids: i
            })) {
                if (c) {
                    c = !1;
                    continue;
                }
                if ('' !== d.text || eu.isBefore(f, l)) {
                    s = {
                        path: f,
                        offset: d.text.length
                    };
                    break;
                }
            }
            return {
                anchor: a,
                focus: s
            };
        },
        void(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return ee.above(e, J(J({}, n), {}, { match: (n) => z.isElement(n) && ee.isVoid(e, n) }));
        },
        withoutNormalizing(e, n) {
            var r = ee.isNormalizing(e);
            ee.setNormalizing(e, !1);
            try {
                n();
            } finally {
                ee.setNormalizing(e, r);
            }
            ee.normalize(e);
        }
    },
    et = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(eu.isPath) },
    en = ['children'],
    er = ['text'],
    ei = new WeakMap(),
    ea = {
        ancestor(e, n) {
            var r = ea.get(e, n);
            if (eC.isText(r)) throw Error('Cannot get the ancestor node at path ['.concat(n, '] because it refers to a text node instead: ').concat(eT.stringify(r)));
            return r;
        },
        *ancestors(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var i of eu.ancestors(n, r)) {
                var a = [ea.ancestor(e, i), i];
                yield a;
            }
        },
        child(e, n) {
            if (eC.isText(e)) throw Error('Cannot get the child of a text node: '.concat(eT.stringify(e)));
            var r = e.children[n];
            if (null == r) throw Error('Cannot get child at index `'.concat(n, '` in node: ').concat(eT.stringify(e)));
            return r;
        },
        *children(e, n) {
            for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { reverse: i = !1 } = r, a = ea.ancestor(e, n), { children: s } = a, o = i ? s.length - 1 : 0; i ? o >= 0 : o < s.length; ) {
                var l = ea.child(a, o),
                    u = n.concat(o);
                yield [l, u], (o = i ? o - 1 : o + 1);
            }
        },
        common(e, n, r) {
            var i = eu.common(n, r);
            return [ea.get(e, i), i];
        },
        descendant(e, n) {
            var r = ea.get(e, n);
            if (ee.isEditor(r)) throw Error('Cannot get the descendant node at path ['.concat(n, '] because it refers to the root editor node instead: ').concat(eT.stringify(r)));
            return r;
        },
        *descendants(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, i] of ea.nodes(e, n)) 0 !== i.length && (yield [r, i]);
        },
        *elements(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, i] of ea.nodes(e, n)) z.isElement(r) && (yield [r, i]);
        },
        extractProps(e) {
            if (z.isAncestor(e)) {
                var n = v(e, en);
                return n;
            }
            var n = v(e, er);
            return n;
        },
        first(e, n) {
            for (var r = n.slice(), i = ea.get(e, r); i && !eC.isText(i) && 0 !== i.children.length; ) {
                (i = i.children[0]), r.push(0);
            }
            return [i, r];
        },
        fragment(e, n) {
            if (eC.isText(e)) throw Error('Cannot get a fragment starting from a root text node: '.concat(eT.stringify(e)));
            return (0, s.Uy)({ children: e.children }, (e) => {
                var [r, i] = eE.edges(n);
                for (var [, a] of ea.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, r] = e;
                        return !eE.includes(n, r);
                    }
                })) {
                    if (!eE.includes(n, a)) {
                        var s = ea.parent(e, a),
                            o = a[a.length - 1];
                        s.children.splice(o, 1);
                    }
                    if (eu.equals(a, i.path)) {
                        var l = ea.leaf(e, a);
                        l.text = l.text.slice(0, i.offset);
                    }
                    if (eu.equals(a, r.path)) {
                        var u = ea.leaf(e, a);
                        u.text = u.text.slice(r.offset);
                    }
                }
                ee.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, n) {
            for (var r = e, i = 0; i < n.length; i++) {
                var a = n[i];
                if (eC.isText(r) || !r.children[a]) throw Error('Cannot find a descendant at path ['.concat(n, '] in node: ').concat(eT.stringify(e)));
                r = r.children[a];
            }
            return r;
        },
        has(e, n) {
            for (var r = e, i = 0; i < n.length; i++) {
                var a = n[i];
                if (eC.isText(r) || !r.children[a]) return !1;
                r = r.children[a];
            }
            return !0;
        },
        isNode: (e) => eC.isText(e) || z.isElement(e) || ee.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var n = ei.get(e);
            if (void 0 !== n) return n;
            var r = e.every((e) => ea.isNode(e));
            return ei.set(e, r), r;
        },
        last(e, n) {
            for (var r = n.slice(), i = ea.get(e, r); i && !eC.isText(i) && 0 !== i.children.length; ) {
                var a = i.children.length - 1;
                (i = i.children[a]), r.push(a);
            }
            return [i, r];
        },
        leaf(e, n) {
            var r = ea.get(e, n);
            if (!eC.isText(r)) throw Error('Cannot get the leaf node at path ['.concat(n, '] because it refers to a non-leaf node: ').concat(eT.stringify(r)));
            return r;
        },
        *levels(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var i of eu.levels(n, r)) {
                var a = ea.get(e, i);
                yield [a, i];
            }
        },
        matches: (e, n) => (z.isElement(e) && z.isElementProps(n) && z.matches(e, n)) || (eC.isText(e) && eC.isTextProps(n) && eC.matches(e, n)),
        *nodes(e) {
            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { pass: r, reverse: i = !1 } = n, { from: a = [], to: s } = n, o = new Set(), l = [], u = e; !(s && (i ? eu.isBefore(l, s) : eu.isAfter(l, s))); ) {
                if ((!o.has(u) && (yield [u, l]), !o.has(u) && !eC.isText(u) && 0 !== u.children.length && (null == r || !1 === r([u, l])))) {
                    o.add(u);
                    var c = i ? u.children.length - 1 : 0;
                    eu.isAncestor(l, a) && (c = a[l.length]), (l = l.concat(c)), (u = ea.get(e, l));
                    continue;
                }
                if (0 === l.length) break;
                if (!i) {
                    var d = eu.next(l);
                    if (ea.has(e, d)) {
                        (l = d), (u = ea.get(e, l));
                        continue;
                    }
                }
                if (i && 0 !== l[l.length - 1]) {
                    (l = eu.previous(l)), (u = ea.get(e, l));
                    continue;
                }
                (l = eu.parent(l)), (u = ea.get(e, l)), o.add(u);
            }
        },
        parent(e, n) {
            var r = eu.parent(n),
                i = ea.get(e, r);
            if (eC.isText(i)) throw Error('Cannot get the parent of path ['.concat(n, '] because it does not exist in the root.'));
            return i;
        },
        string: (e) => (eC.isText(e) ? e.text : e.children.map(ea.string).join('')),
        *texts(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, i] of ea.nodes(e, n)) eC.isText(r) && (yield [r, i]);
        }
    };
function es(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eo(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? es(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : es(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var el = {
        isNodeOperation: (e) => el.isOperation(e) && e.type.endsWith('_node'),
        isOperation(e) {
            if (!(0, a.P)(e)) return !1;
            switch (e.type) {
                case 'insert_node':
                case 'remove_node':
                    return eu.isPath(e.path) && ea.isNode(e.node);
                case 'insert_text':
                case 'remove_text':
                    return 'number' == typeof e.offset && 'string' == typeof e.text && eu.isPath(e.path);
                case 'merge_node':
                    return 'number' == typeof e.position && eu.isPath(e.path) && (0, a.P)(e.properties);
                case 'move_node':
                    return eu.isPath(e.path) && eu.isPath(e.newPath);
                case 'set_node':
                    return eu.isPath(e.path) && (0, a.P)(e.properties) && (0, a.P)(e.newProperties);
                case 'set_selection':
                    return (null === e.properties && eE.isRange(e.newProperties)) || (null === e.newProperties && eE.isRange(e.properties)) || ((0, a.P)(e.properties) && (0, a.P)(e.newProperties));
                case 'split_node':
                    return eu.isPath(e.path) && 'number' == typeof e.position && (0, a.P)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => el.isOperation(e)),
        isSelectionOperation: (e) => el.isOperation(e) && e.type.endsWith('_selection'),
        isTextOperation: (e) => el.isOperation(e) && e.type.endsWith('_text'),
        inverse(e) {
            switch (e.type) {
                case 'insert_node':
                    return eo(eo({}, e), {}, { type: 'remove_node' });
                case 'insert_text':
                    return eo(eo({}, e), {}, { type: 'remove_text' });
                case 'merge_node':
                    return eo(
                        eo({}, e),
                        {},
                        {
                            type: 'split_node',
                            path: eu.previous(e.path)
                        }
                    );
                case 'move_node':
                    var { newPath: n, path: r } = e;
                    if (eu.equals(n, r)) return e;
                    if (eu.isSibling(r, n))
                        return eo(
                            eo({}, e),
                            {},
                            {
                                path: n,
                                newPath: r
                            }
                        );
                    var i = eu.transform(r, e),
                        a = eu.transform(eu.next(r), e);
                    return eo(
                        eo({}, e),
                        {},
                        {
                            path: i,
                            newPath: a
                        }
                    );
                case 'remove_node':
                    return eo(eo({}, e), {}, { type: 'insert_node' });
                case 'remove_text':
                    return eo(eo({}, e), {}, { type: 'insert_text' });
                case 'set_node':
                    var { properties: s, newProperties: o } = e;
                    return eo(
                        eo({}, e),
                        {},
                        {
                            properties: o,
                            newProperties: s
                        }
                    );
                case 'set_selection':
                    var { properties: l, newProperties: u } = e;
                    if (null == l)
                        return eo(
                            eo({}, e),
                            {},
                            {
                                properties: u,
                                newProperties: null
                            }
                        );
                    if (null == u)
                        return eo(
                            eo({}, e),
                            {},
                            {
                                properties: null,
                                newProperties: l
                            }
                        );
                    else
                        return eo(
                            eo({}, e),
                            {},
                            {
                                properties: u,
                                newProperties: l
                            }
                        );
                case 'split_node':
                    return eo(
                        eo({}, e),
                        {},
                        {
                            type: 'merge_node',
                            path: eu.next(e.path)
                        }
                    );
            }
        }
    },
    eu = {
        ancestors(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: r = !1 } = n,
                i = eu.levels(e, n);
            return (i = r ? i.slice(1) : i.slice(0, -1));
        },
        common(e, n) {
            for (var r = [], i = 0; i < e.length && i < n.length; i++) {
                var a = e[i];
                if (a !== n[i]) break;
                r.push(a);
            }
            return r;
        },
        compare(e, n) {
            for (var r = Math.min(e.length, n.length), i = 0; i < r; i++) {
                if (e[i] < n[i]) return -1;
                if (e[i] > n[i]) return 1;
            }
            return 0;
        },
        endsAfter(e, n) {
            var r = e.length - 1,
                i = e.slice(0, r),
                a = n.slice(0, r),
                s = e[r],
                o = n[r];
            return eu.equals(i, a) && s > o;
        },
        endsAt(e, n) {
            var r = e.length,
                i = e.slice(0, r),
                a = n.slice(0, r);
            return eu.equals(i, a);
        },
        endsBefore(e, n) {
            var r = e.length - 1,
                i = e.slice(0, r),
                a = n.slice(0, r),
                s = e[r],
                o = n[r];
            return eu.equals(i, a) && s < o;
        },
        equals: (e, n) => e.length === n.length && e.every((e, r) => e === n[r]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, n) => 1 === eu.compare(e, n),
        isAncestor: (e, n) => e.length < n.length && 0 === eu.compare(e, n),
        isBefore: (e, n) => -1 === eu.compare(e, n),
        isChild: (e, n) => e.length === n.length + 1 && 0 === eu.compare(e, n),
        isCommon: (e, n) => e.length <= n.length && 0 === eu.compare(e, n),
        isDescendant: (e, n) => e.length > n.length && 0 === eu.compare(e, n),
        isParent: (e, n) => e.length + 1 === n.length && 0 === eu.compare(e, n),
        isPath: (e) => Array.isArray(e) && (0 === e.length || 'number' == typeof e[0]),
        isSibling(e, n) {
            if (e.length !== n.length) return !1;
            var r = e.slice(0, -1),
                i = n.slice(0, -1);
            return e[e.length - 1] !== n[n.length - 1] && eu.equals(r, i);
        },
        levels(e) {
            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { reverse: r = !1 } = n, i = [], a = 0; a <= e.length; a++) i.push(e.slice(0, a));
            return r && i.reverse(), i;
        },
        next(e) {
            if (0 === e.length) throw Error('Cannot get the next path of a root path ['.concat(e, '], because it has no next index.'));
            var n = e[e.length - 1];
            return e.slice(0, -1).concat(n + 1);
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
            var n = e[e.length - 1];
            if (n <= 0) throw Error('Cannot get the previous path of a first child path ['.concat(e, '] because it would result in a negative index.'));
            return e.slice(0, -1).concat(n - 1);
        },
        relative(e, n) {
            if (!eu.isAncestor(n, e) && !eu.equals(e, n)) throw Error('Cannot get the relative path of ['.concat(e, '] inside ancestor [').concat(n, '], because it is not above or equal to the path.'));
            return e.slice(n.length);
        },
        transform(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var i = [...e],
                { affinity: a = 'forward' } = r;
            if (0 === e.length) return i;
            switch (n.type) {
                case 'insert_node':
                    var { path: s } = n;
                    (eu.equals(s, i) || eu.endsBefore(s, i) || eu.isAncestor(s, i)) && (i[s.length - 1] += 1);
                    break;
                case 'remove_node':
                    var { path: o } = n;
                    if (eu.equals(o, i) || eu.isAncestor(o, i)) return null;
                    eu.endsBefore(o, i) && (i[o.length - 1] -= 1);
                    break;
                case 'merge_node':
                    var { path: l, position: u } = n;
                    eu.equals(l, i) || eu.endsBefore(l, i) ? (i[l.length - 1] -= 1) : eu.isAncestor(l, i) && ((i[l.length - 1] -= 1), (i[l.length] += u));
                    break;
                case 'split_node':
                    var { path: c, position: d } = n;
                    if (eu.equals(c, i)) {
                        if ('forward' === a) i[i.length - 1] += 1;
                        else if ('backward' !== a) return null;
                    } else eu.endsBefore(c, i) ? (i[c.length - 1] += 1) : eu.isAncestor(c, i) && e[c.length] >= d && ((i[c.length - 1] += 1), (i[c.length] -= d));
                    break;
                case 'move_node':
                    var { path: f, newPath: _ } = n;
                    if (eu.equals(f, _)) break;
                    if (eu.isAncestor(f, i) || eu.equals(f, i)) {
                        var h = _.slice();
                        return eu.endsBefore(f, _) && f.length < _.length && (h[f.length - 1] -= 1), h.concat(i.slice(f.length));
                    }
                    eu.isSibling(f, _) && (eu.isAncestor(_, i) || eu.equals(_, i)) ? (eu.endsBefore(f, i) ? (i[f.length - 1] -= 1) : (i[f.length - 1] += 1)) : eu.endsBefore(_, i) || eu.equals(_, i) || eu.isAncestor(_, i) ? (eu.endsBefore(f, i) && (i[f.length - 1] -= 1), (i[_.length - 1] += 1)) : eu.endsBefore(f, i) && (eu.equals(_, i) && (i[_.length - 1] += 1), (i[f.length - 1] -= 1));
            }
            return i;
        }
    },
    ec = {
        transform(e, n) {
            var { current: r, affinity: i } = e;
            if (null != r) {
                var a = eu.transform(r, n, { affinity: i });
                (e.current = a), null == a && e.unref();
            }
        }
    };
function ed(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function ef(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? ed(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ed(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var e_ = {
        compare(e, n) {
            var r = eu.compare(e.path, n.path);
            if (0 === r) return e.offset < n.offset ? -1 : e.offset > n.offset ? 1 : 0;
            return r;
        },
        isAfter: (e, n) => 1 === e_.compare(e, n),
        isBefore: (e, n) => -1 === e_.compare(e, n),
        equals: (e, n) => e.offset === n.offset && eu.equals(e.path, n.path),
        isPoint: (e) => (0, a.P)(e) && 'number' == typeof e.offset && eu.isPath(e.path),
        transform(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, s.Uy)(e, (e) => {
                if (null === e) return null;
                var { affinity: i = 'forward' } = r,
                    { path: a, offset: s } = e;
                switch (n.type) {
                    case 'insert_node':
                    case 'move_node':
                        e.path = eu.transform(a, n, r);
                        break;
                    case 'insert_text':
                        eu.equals(n.path, a) && (n.offset < s || (n.offset === s && 'forward' === i)) && (e.offset += n.text.length);
                        break;
                    case 'merge_node':
                        eu.equals(n.path, a) && (e.offset += n.position), (e.path = eu.transform(a, n, r));
                        break;
                    case 'remove_text':
                        eu.equals(n.path, a) && n.offset <= s && (e.offset -= Math.min(s - n.offset, n.text.length));
                        break;
                    case 'remove_node':
                        if (eu.equals(n.path, a) || eu.isAncestor(n.path, a)) return null;
                        e.path = eu.transform(a, n, r);
                        break;
                    case 'split_node':
                        if (eu.equals(n.path, a)) {
                            if (n.position === s && null == i) return null;
                            (n.position < s || (n.position === s && 'forward' === i)) && ((e.offset -= n.position), (e.path = eu.transform(a, n, ef(ef({}, r), {}, { affinity: 'forward' }))));
                        } else e.path = eu.transform(a, n, r);
                }
            });
        }
    },
    eh = {
        transform(e, n) {
            var { current: r, affinity: i } = e;
            if (null != r) {
                var a = e_.transform(r, n, { affinity: i });
                (e.current = a), null == a && e.unref();
            }
        }
    },
    ep = ['anchor', 'focus'];
function em(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eg(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? em(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : em(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var eE = {
        edges(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: r = !1 } = n,
                { anchor: i, focus: a } = e;
            return eE.isBackward(e) === r ? [i, a] : [a, i];
        },
        end(e) {
            var [, n] = eE.edges(e);
            return n;
        },
        equals: (e, n) => e_.equals(e.anchor, n.anchor) && e_.equals(e.focus, n.focus),
        includes(e, n) {
            if (eE.isRange(n)) {
                if (eE.includes(e, n.anchor) || eE.includes(e, n.focus)) return !0;
                var [r, i] = eE.edges(e),
                    [a, s] = eE.edges(n);
                return e_.isBefore(r, a) && e_.isAfter(i, s);
            }
            var [o, l] = eE.edges(e),
                u = !1,
                c = !1;
            return e_.isPoint(n) ? ((u = e_.compare(n, o) >= 0), (c = 0 >= e_.compare(n, l))) : ((u = eu.compare(n, o.path) >= 0), (c = 0 >= eu.compare(n, l.path))), u && c;
        },
        intersection(e, n) {
            var r = v(e, ep),
                [i, a] = eE.edges(e),
                [s, o] = eE.edges(n),
                l = e_.isBefore(i, s) ? s : i,
                u = e_.isBefore(a, o) ? a : o;
            return e_.isBefore(u, l)
                ? null
                : eg(
                      {
                          anchor: l,
                          focus: u
                      },
                      r
                  );
        },
        isBackward(e) {
            var { anchor: n, focus: r } = e;
            return e_.isAfter(n, r);
        },
        isCollapsed(e) {
            var { anchor: n, focus: r } = e;
            return e_.equals(n, r);
        },
        isExpanded: (e) => !eE.isCollapsed(e),
        isForward: (e) => !eE.isBackward(e),
        isRange: (e) => (0, a.P)(e) && e_.isPoint(e.anchor) && e_.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, 'anchor'], yield [e.focus, 'focus'];
        },
        start(e) {
            var [n] = eE.edges(e);
            return n;
        },
        transform(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, s.Uy)(e, (e) => {
                if (null === e) return null;
                var i,
                    a,
                    { affinity: s = 'inward' } = r;
                if ('inward' === s) {
                    var o = eE.isCollapsed(e);
                    eE.isForward(e) ? ((i = 'forward'), (a = o ? i : 'backward')) : ((i = 'backward'), (a = o ? i : 'forward'));
                } else 'outward' === s ? (eE.isForward(e) ? ((i = 'backward'), (a = 'forward')) : ((i = 'forward'), (a = 'backward'))) : ((i = s), (a = s));
                var l = e_.transform(e.anchor, n, { affinity: i }),
                    u = e_.transform(e.focus, n, { affinity: a });
                if (!l || !u) return null;
                (e.anchor = l), (e.focus = u);
            });
        }
    },
    ev = {
        transform(e, n) {
            var { current: r, affinity: i } = e;
            if (null != r) {
                var a = eE.transform(r, n, { affinity: i });
                (e.current = a), null == a && e.unref();
            }
        }
    },
    eI = void 0,
    eT = {
        setScrubber(e) {
            eI = e;
        },
        stringify: (e) => JSON.stringify(e, eI)
    },
    eb = (e, n) => {
        for (var r in e) {
            var i = e[r],
                s = n[r];
            if ((0, a.P)(i) && (0, a.P)(s)) {
                if (!eb(i, s)) return !1;
            } else if (Array.isArray(i) && Array.isArray(s)) {
                if (i.length !== s.length) return !1;
                for (var o = 0; o < i.length; o++) if (i[o] !== s[o]) return !1;
            } else if (i !== s) return !1;
        }
        for (var l in n) if (void 0 === e[l] && void 0 !== n[l]) return !1;
        return !0;
    },
    ey = ['text'],
    eS = ['anchor', 'focus'];
function eA(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eN(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? eA(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eA(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var eC = {
    equals(e, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: i = !1 } = r;
        function a(e) {
            return v(e, ey);
        }
        return eb(i ? a(e) : e, i ? a(n) : n);
    },
    isText: (e) => (0, a.P)(e) && 'string' == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eC.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, n) {
        for (var r in n) {
            if ('text' !== r) {
                if (!e.hasOwnProperty(r) || e[r] !== n[r]) return !1;
            }
        }
        return !0;
    },
    decorations(e, n) {
        var r = [eN({}, e)];
        for (var i of n) {
            var a = v(i, eS),
                [s, o] = eE.edges(i),
                l = [],
                u = 0,
                c = s.offset,
                d = o.offset;
            for (var f of r) {
                var { length: _ } = f.text,
                    h = u;
                if (((u += _), c <= h && u <= d)) {
                    Object.assign(f, a), l.push(f);
                    continue;
                }
                if ((c !== d && (c === u || d === h)) || c > u || d < h || (d === h && 0 !== h)) {
                    l.push(f);
                    continue;
                }
                var p = f,
                    m = void 0,
                    g = void 0;
                if (d < u) {
                    var E = d - h;
                    (g = eN(eN({}, p), {}, { text: p.text.slice(E) })), (p = eN(eN({}, p), {}, { text: p.text.slice(0, E) }));
                }
                if (c > h) {
                    var I = c - h;
                    (m = eN(eN({}, p), {}, { text: p.text.slice(0, I) })), (p = eN(eN({}, p), {}, { text: p.text.slice(I) }));
                }
                Object.assign(p, a), m && l.push(m), l.push(p), g && l.push(g);
            }
            r = l;
        }
        return r;
    }
};
function eR(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eO(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? eR(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eR(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var eD = (e, n, r) => {
        switch (r.type) {
            case 'insert_node':
                var { path: i, node: a } = r,
                    s = ea.parent(e, i),
                    o = i[i.length - 1];
                if (o > s.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(i, '] because the destination is past the end of the node.'));
                if ((s.children.splice(o, 0, a), n)) for (var [l, u] of eE.points(n)) n[u] = e_.transform(l, r);
                break;
            case 'insert_text':
                var { path: c, offset: d, text: f } = r;
                if (0 === f.length) break;
                var _ = ea.leaf(e, c),
                    h = _.text.slice(0, d),
                    p = _.text.slice(d);
                if (((_.text = h + f + p), n)) for (var [m, g] of eE.points(n)) n[g] = e_.transform(m, r);
                break;
            case 'merge_node':
                var { path: E } = r,
                    v = ea.get(e, E),
                    I = eu.previous(E),
                    T = ea.get(e, I),
                    b = ea.parent(e, E),
                    y = E[E.length - 1];
                if (eC.isText(v) && eC.isText(T)) T.text += v.text;
                else if (eC.isText(v) || eC.isText(T)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(E, '] to nodes of different interfaces: ').concat(eT.stringify(v), ' ').concat(eT.stringify(T)));
                else T.children.push(...v.children);
                if ((b.children.splice(y, 1), n)) for (var [S, A] of eE.points(n)) n[A] = e_.transform(S, r);
                break;
            case 'move_node':
                var { path: N, newPath: C } = r;
                if (eu.isAncestor(N, C)) throw Error('Cannot move a path ['.concat(N, '] to new path [').concat(C, '] because the destination is inside itself.'));
                var R = ea.get(e, N),
                    O = ea.parent(e, N),
                    D = N[N.length - 1];
                O.children.splice(D, 1);
                var L = eu.transform(N, r),
                    x = ea.get(e, eu.parent(L)),
                    w = L[L.length - 1];
                if ((x.children.splice(w, 0, R), n)) for (var [P, M] of eE.points(n)) n[M] = e_.transform(P, r);
                break;
            case 'remove_node':
                var { path: k } = r,
                    U = k[k.length - 1];
                if ((ea.parent(e, k).children.splice(U, 1), n))
                    for (var [B, G] of eE.points(n)) {
                        var Z = e_.transform(B, r);
                        if (null != n && null != Z) n[G] = Z;
                        else {
                            var F = void 0,
                                V = void 0;
                            for (var [j, H] of ea.texts(e))
                                if (-1 === eu.compare(H, k)) F = [j, H];
                                else {
                                    V = [j, H];
                                    break;
                                }
                            var Y = !1;
                            F && V && (Y = eu.equals(V[1], k) ? !eu.hasPrevious(V[1]) : eu.common(F[1], k).length < eu.common(V[1], k).length), F && !Y ? ((B.path = F[1]), (B.offset = F[0].text.length)) : V ? ((B.path = V[1]), (B.offset = 0)) : (n = null);
                        }
                    }
                break;
            case 'remove_text':
                var { path: W, offset: K, text: z } = r;
                if (0 === z.length) break;
                var q = ea.leaf(e, W),
                    Q = q.text.slice(0, K),
                    X = q.text.slice(K + z.length);
                if (((q.text = Q + X), n)) for (var [J, $] of eE.points(n)) n[$] = e_.transform(J, r);
                break;
            case 'set_node':
                var { path: ee, properties: et, newProperties: en } = r;
                if (0 === ee.length) throw Error('Cannot set properties on the root node!');
                var er = ea.get(e, ee);
                for (var ei in en) {
                    if ('children' === ei || 'text' === ei) throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                    var es = en[ei];
                    null == es ? delete er[ei] : (er[ei] = es);
                }
                for (var eo in et) !en.hasOwnProperty(eo) && delete er[eo];
                break;
            case 'set_selection':
                var { newProperties: el } = r;
                if (null == el) n = el;
                else {
                    if (null == n) {
                        if (!eE.isRange(el)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(eT.stringify(el), ' when there is no current selection.'));
                        n = eO({}, el);
                    }
                    for (var ec in el) {
                        var ed = el[ec];
                        if (null == ed) {
                            if ('anchor' === ec || 'focus' === ec) throw Error('Cannot remove the "'.concat(ec, '" selection property'));
                            delete n[ec];
                        } else n[ec] = ed;
                    }
                }
                break;
            case 'split_node':
                var ef,
                    { path: eh, position: ep, properties: em } = r;
                if (0 === eh.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(eh, '] because the root node cannot be split.'));
                var eg = ea.get(e, eh),
                    ev = ea.parent(e, eh),
                    eI = eh[eh.length - 1];
                if (eC.isText(eg)) {
                    var eb = eg.text.slice(0, ep),
                        ey = eg.text.slice(ep);
                    (eg.text = eb), (ef = eO(eO({}, em), {}, { text: ey }));
                } else {
                    var eS = eg.children.slice(0, ep),
                        eA = eg.children.slice(ep);
                    (eg.children = eS), (ef = eO(eO({}, em), {}, { children: eA }));
                }
                if ((ev.children.splice(eI + 1, 0, ef), n)) for (var [eN, eR] of eE.points(n)) n[eR] = e_.transform(eN, r);
        }
        return n;
    },
    eL = {
        transform(e, n) {
            e.children = (0, s.P2)(e.children);
            var r = e.selection && (0, s.P2)(e.selection);
            try {
                r = eD(e, r, n);
            } finally {
                (e.children = (0, s._x)(e.children)), r ? (e.selection = (0, s.mv)(r) ? (0, s._x)(r) : r) : (e.selection = null);
            }
        }
    },
    ex = ['text'],
    ew = ['children'];
function eP(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eM(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? eP(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eP(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var ek = {
        insertNodes(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { hanging: i = !1, voids: a = !1, mode: s = 'lowest' } = r,
                    { at: o, match: l, select: u } = r;
                if ((ea.isNode(n) && (n = [n]), 0 === n.length)) return;
                var [c] = n;
                if ((!o && ((o = e.selection ? e.selection : e.children.length > 0 ? ee.end(e, []) : [0]), (u = !0)), null == u && (u = !1), eE.isRange(o))) {
                    if ((!i && (o = ee.unhangRange(e, o, { voids: a })), eE.isCollapsed(o))) o = o.anchor;
                    else {
                        var [, d] = eE.edges(o),
                            f = ee.pointRef(e, d);
                        eW.delete(e, { at: o }), (o = f.unref());
                    }
                }
                if (e_.isPoint(o)) {
                    null == l && (l = eC.isText(c) ? (e) => eC.isText(e) : e.isInline(c) ? (n) => eC.isText(n) || ee.isInline(e, n) : (n) => z.isElement(n) && ee.isBlock(e, n));
                    var [_] = ee.nodes(e, {
                        at: o.path,
                        match: l,
                        mode: s,
                        voids: a
                    });
                    if (!_) return;
                    var [, h] = _,
                        p = ee.pathRef(e, h),
                        m = ee.isEnd(e, o, h);
                    eW.splitNodes(e, {
                        at: o,
                        match: l,
                        mode: s,
                        voids: a
                    });
                    var g = p.unref();
                    o = m ? eu.next(g) : g;
                }
                var E = eu.parent(o),
                    v = o[o.length - 1];
                if (!(!a && ee.void(e, { at: E }))) {
                    for (var I of n) {
                        var T = E.concat(v);
                        v++,
                            e.apply({
                                type: 'insert_node',
                                path: T,
                                node: I
                            }),
                            (o = eu.next(o));
                    }
                    if (((o = eu.previous(o)), u)) {
                        var b = ee.end(e, o);
                        b && eW.select(e, b);
                    }
                }
            });
        },
        liftNodes(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var { at: r = e.selection, mode: i = 'lowest', voids: a = !1 } = n,
                    { match: s } = n;
                if ((null == s && (s = eu.isPath(r) ? eG(e, r) : (n) => z.isElement(n) && ee.isBlock(e, n)), !!r))
                    for (var o of Array.from(
                        ee.nodes(e, {
                            at: r,
                            match: s,
                            mode: i,
                            voids: a
                        }),
                        (n) => {
                            var [, r] = n;
                            return ee.pathRef(e, r);
                        }
                    )) {
                        var l = o.unref();
                        if (l.length < 2) throw Error('Cannot lift node at a path ['.concat(l, '] because it has a depth of less than `2`.'));
                        var [u, c] = ee.node(e, eu.parent(l)),
                            d = l[l.length - 1],
                            { length: f } = u.children;
                        if (1 === f) {
                            var _ = eu.next(c);
                            eW.moveNodes(e, {
                                at: l,
                                to: _,
                                voids: a
                            }),
                                eW.removeNodes(e, {
                                    at: c,
                                    voids: a
                                });
                        } else if (0 === d)
                            eW.moveNodes(e, {
                                at: l,
                                to: c,
                                voids: a
                            });
                        else if (d === f - 1) {
                            var h = eu.next(c);
                            eW.moveNodes(e, {
                                at: l,
                                to: h,
                                voids: a
                            });
                        } else {
                            var p = eu.next(l),
                                m = eu.next(c);
                            eW.splitNodes(e, {
                                at: p,
                                voids: a
                            }),
                                eW.moveNodes(e, {
                                    at: l,
                                    to: m,
                                    voids: a
                                });
                        }
                    }
            });
        },
        mergeNodes(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var r,
                    i,
                    { match: a, at: s = e.selection } = n,
                    { hanging: o = !1, voids: l = !1, mode: u = 'lowest' } = n;
                if (!s) return;
                if (null == a) {
                    if (eu.isPath(s)) {
                        var [c] = ee.parent(e, s);
                        a = (e) => c.children.includes(e);
                    } else a = (n) => z.isElement(n) && ee.isBlock(e, n);
                }
                if ((!o && eE.isRange(s) && (s = ee.unhangRange(e, s, { voids: l })), eE.isRange(s))) {
                    if (eE.isCollapsed(s)) s = s.anchor;
                    else {
                        var [, d] = eE.edges(s),
                            f = ee.pointRef(e, d);
                        eW.delete(e, { at: s }), (s = f.unref()), null == n.at && eW.select(e, s);
                    }
                }
                var [_] = ee.nodes(e, {
                        at: s,
                        match: a,
                        voids: l,
                        mode: u
                    }),
                    h = ee.previous(e, {
                        at: s,
                        match: a,
                        voids: l,
                        mode: u
                    });
                if (!_ || !h) return;
                var [p, m] = _,
                    [g, E] = h;
                if (0 !== m.length && 0 !== E.length) {
                    var I = eu.next(E),
                        T = eu.common(m, E),
                        b = eu.isSibling(m, E),
                        y = Array.from(ee.levels(e, { at: m }), (e) => {
                            var [n] = e;
                            return n;
                        })
                            .slice(T.length)
                            .slice(0, -1),
                        S = ee.above(e, {
                            at: m,
                            mode: 'highest',
                            match: (n) => y.includes(n) && eU(e, n)
                        }),
                        A = S && ee.pathRef(e, S[1]);
                    if (eC.isText(p) && eC.isText(g)) {
                        var N = v(p, ex);
                        (i = g.text.length), (r = N);
                    } else if (z.isElement(p) && z.isElement(g)) {
                        var N = v(p, ew);
                        (i = g.children.length), (r = N);
                    } else throw Error('Cannot merge the node at path ['.concat(m, '] with the previous sibling because it is not the same kind: ').concat(eT.stringify(p), ' ').concat(eT.stringify(g)));
                    !b &&
                        eW.moveNodes(e, {
                            at: m,
                            to: I,
                            voids: l
                        }),
                        A &&
                            eW.removeNodes(e, {
                                at: A.current,
                                voids: l
                            }),
                        (z.isElement(g) && ee.isEmpty(e, g)) || (eC.isText(g) && '' === g.text && 0 !== E[E.length - 1])
                            ? eW.removeNodes(e, {
                                  at: E,
                                  voids: l
                              })
                            : e.apply({
                                  type: 'merge_node',
                                  path: I,
                                  position: i,
                                  properties: r
                              }),
                        A && A.unref();
                }
            });
        },
        moveNodes(e, n) {
            ee.withoutNormalizing(e, () => {
                var { to: r, at: i = e.selection, mode: a = 'lowest', voids: s = !1 } = n,
                    { match: o } = n;
                if (!!i) {
                    null == o && (o = eu.isPath(i) ? eG(e, i) : (n) => z.isElement(n) && ee.isBlock(e, n));
                    var l = ee.pathRef(e, r);
                    for (var u of Array.from(
                        ee.nodes(e, {
                            at: i,
                            match: o,
                            mode: a,
                            voids: s
                        }),
                        (n) => {
                            var [, r] = n;
                            return ee.pathRef(e, r);
                        }
                    )) {
                        var c = u.unref(),
                            d = l.current;
                        0 !== c.length &&
                            e.apply({
                                type: 'move_node',
                                path: c,
                                newPath: d
                            }),
                            l.current && eu.isSibling(d, c) && eu.isAfter(d, c) && (l.current = eu.next(l.current));
                    }
                    l.unref();
                }
            });
        },
        removeNodes(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var { hanging: r = !1, voids: i = !1, mode: a = 'lowest' } = n,
                    { at: s = e.selection, match: o } = n;
                if (!!s)
                    for (var l of (null == o && (o = eu.isPath(s) ? eG(e, s) : (n) => z.isElement(n) && ee.isBlock(e, n)),
                    !r && eE.isRange(s) && (s = ee.unhangRange(e, s, { voids: i })),
                    Array.from(
                        ee.nodes(e, {
                            at: s,
                            match: o,
                            mode: a,
                            voids: i
                        }),
                        (n) => {
                            var [, r] = n;
                            return ee.pathRef(e, r);
                        }
                    ))) {
                        var u = l.unref();
                        if (u) {
                            var [c] = ee.node(e, u);
                            e.apply({
                                type: 'remove_node',
                                path: u,
                                node: c
                            });
                        }
                    }
            });
        },
        setNodes(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { match: i, at: a = e.selection, compare: s, merge: o } = r,
                    { hanging: l = !1, mode: u = 'lowest', split: c = !1, voids: d = !1 } = r;
                if (!!a) {
                    if ((null == i && (i = eu.isPath(a) ? eG(e, a) : (n) => z.isElement(n) && ee.isBlock(e, n)), !l && eE.isRange(a) && (a = ee.unhangRange(e, a, { voids: d })), c && eE.isRange(a))) {
                        if (eE.isCollapsed(a) && ee.leaf(e, a.anchor)[0].text.length > 0) return;
                        var f = ee.rangeRef(e, a, { affinity: 'inward' }),
                            [_, h] = eE.edges(a),
                            p = 'lowest' === u ? 'lowest' : 'highest',
                            m = ee.isEnd(e, h, h.path);
                        eW.splitNodes(e, {
                            at: h,
                            match: i,
                            mode: p,
                            voids: d,
                            always: !m
                        });
                        var g = ee.isStart(e, _, _.path);
                        eW.splitNodes(e, {
                            at: _,
                            match: i,
                            mode: p,
                            voids: d,
                            always: !g
                        }),
                            (a = f.unref()),
                            null == r.at && eW.select(e, a);
                    }
                    for (var [E, v] of (!s && (s = (e, n) => e !== n),
                    ee.nodes(e, {
                        at: a,
                        match: i,
                        mode: u,
                        voids: d
                    }))) {
                        var I = {},
                            T = {};
                        if (0 !== v.length) {
                            var b = !1;
                            for (var y in n) {
                                if ('children' !== y && 'text' !== y) s(n[y], E[y]) && ((b = !0), E.hasOwnProperty(y) && (I[y] = E[y]), o ? null != n[y] && (T[y] = o(E[y], n[y])) : null != n[y] && (T[y] = n[y]));
                            }
                            b &&
                                e.apply({
                                    type: 'set_node',
                                    path: v,
                                    properties: I,
                                    newProperties: T
                                });
                        }
                    }
                }
            });
        },
        splitNodes(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var r,
                    i,
                    { mode: a = 'lowest', voids: s = !1 } = n,
                    { match: o, at: l = e.selection, height: u = 0, always: c = !1 } = n;
                if ((null == o && (o = (n) => z.isElement(n) && ee.isBlock(e, n)), eE.isRange(l) && (l = eB(e, l)), eu.isPath(l))) {
                    var d = l,
                        f = ee.point(e, d),
                        [_] = ee.parent(e, d);
                    (o = (e) => e === _), (u = f.path.length - d.length + 1), (l = f), (c = !0);
                }
                if (!!l) {
                    var h = ee.pointRef(e, l, { affinity: 'backward' });
                    try {
                        var [p] = ee.nodes(e, {
                            at: l,
                            match: o,
                            mode: a,
                            voids: s
                        });
                        if (!p) return;
                        var m = ee.void(e, {
                                at: l,
                                mode: 'highest'
                            }),
                            g = 0;
                        if (!s && m) {
                            var [E, v] = m;
                            if (z.isElement(E) && e.isInline(E)) {
                                var I = ee.after(e, v);
                                if (!I) {
                                    var T = { text: '' },
                                        b = eu.next(v);
                                    eW.insertNodes(e, T, {
                                        at: b,
                                        voids: s
                                    }),
                                        (I = ee.point(e, b));
                                }
                                (l = I), (c = !0);
                            }
                            (u = l.path.length - v.length + 1), (c = !0);
                        }
                        r = ee.pointRef(e, l);
                        var y = l.path.length - u,
                            [, S] = p,
                            A = l.path.slice(0, y),
                            N = 0 === u ? l.offset : l.path[y] + g;
                        for (var [C, R] of ee.levels(e, {
                            at: A,
                            reverse: !0,
                            voids: s
                        })) {
                            var O = !1;
                            if (R.length < S.length || 0 === R.length || (!s && z.isElement(C) && ee.isVoid(e, C))) break;
                            var D = h.current,
                                L = ee.isEnd(e, D, R);
                            if (c || !h || !ee.isEdge(e, D, R)) {
                                O = !0;
                                var x = ea.extractProps(C);
                                e.apply({
                                    type: 'split_node',
                                    path: R,
                                    position: N,
                                    properties: x
                                });
                            }
                            N = R[R.length - 1] + (O || L ? 1 : 0);
                        }
                        if (null == n.at) {
                            var w = r.current || ee.end(e, []);
                            eW.select(e, w);
                        }
                    } finally {
                        h.unref(), null === (i = r) || void 0 === i || i.unref();
                    }
                }
            });
        },
        unsetNodes(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !Array.isArray(n) && (n = [n]);
            var i = {};
            for (var a of n) i[a] = null;
            eW.setNodes(e, i, r);
        },
        unwrapNodes(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var { mode: r = 'lowest', split: i = !1, voids: a = !1 } = n,
                    { at: s = e.selection, match: o } = n;
                if (!!s) {
                    null == o && (o = eu.isPath(s) ? eG(e, s) : (n) => z.isElement(n) && ee.isBlock(e, n)), eu.isPath(s) && (s = ee.range(e, s));
                    var l = eE.isRange(s) ? ee.rangeRef(e, s) : null,
                        u = Array.from(
                            ee.nodes(e, {
                                at: s,
                                match: o,
                                mode: r,
                                voids: a
                            }),
                            (n) => {
                                var [, r] = n;
                                return ee.pathRef(e, r);
                            }
                        ).reverse(),
                        c = function (n) {
                            var r = n.unref(),
                                [s] = ee.node(e, r),
                                o = ee.range(e, r);
                            i && l && (o = eE.intersection(l.current, o)),
                                eW.liftNodes(e, {
                                    at: o,
                                    match: (e) => z.isAncestor(s) && s.children.includes(e),
                                    voids: a
                                });
                        };
                    for (var d of u) c(d);
                    l && l.unref();
                }
            });
        },
        wrapNodes(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { mode: i = 'lowest', split: a = !1, voids: s = !1 } = r,
                    { match: o, at: l = e.selection } = r;
                if (!!l) {
                    if ((null == o && (o = eu.isPath(l) ? eG(e, l) : e.isInline(n) ? (n) => (z.isElement(n) && ee.isInline(e, n)) || eC.isText(n) : (n) => z.isElement(n) && ee.isBlock(e, n)), a && eE.isRange(l))) {
                        var [u, c] = eE.edges(l),
                            d = ee.rangeRef(e, l, { affinity: 'inward' });
                        eW.splitNodes(e, {
                            at: c,
                            match: o,
                            voids: s
                        }),
                            eW.splitNodes(e, {
                                at: u,
                                match: o,
                                voids: s
                            }),
                            (l = d.unref()),
                            null == r.at && eW.select(e, l);
                    }
                    for (var [, f] of Array.from(
                        ee.nodes(e, {
                            at: l,
                            match: e.isInline(n) ? (n) => z.isElement(n) && ee.isBlock(e, n) : (e) => ee.isEditor(e),
                            mode: 'lowest',
                            voids: s
                        })
                    )) {
                        var _ = eE.isRange(l) ? eE.intersection(l, ee.range(e, f)) : l;
                        if (!!_) {
                            var h = Array.from(
                                ee.nodes(e, {
                                    at: _,
                                    match: o,
                                    mode: i,
                                    voids: s
                                })
                            );
                            if (
                                h.length > 0 &&
                                'continue' ===
                                    (function () {
                                        var [r] = h,
                                            i = h[h.length - 1],
                                            [, a] = r,
                                            [, o] = i;
                                        if (0 === a.length && 0 === o.length) return 'continue';
                                        var l = eu.equals(a, o) ? eu.parent(a) : eu.common(a, o),
                                            u = ee.range(e, a, o),
                                            [c] = ee.node(e, l),
                                            d = l.length + 1,
                                            f = eu.next(o.slice(0, d)),
                                            _ = eM(eM({}, n), {}, { children: [] });
                                        eW.insertNodes(e, _, {
                                            at: f,
                                            voids: s
                                        }),
                                            eW.moveNodes(e, {
                                                at: u,
                                                match: (e) => z.isAncestor(c) && c.children.includes(e),
                                                to: f.concat(0),
                                                voids: s
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
    eU = (e, n) => {
        if (z.isElement(n)) {
            var r = n;
            return !!ee.isVoid(e, n) || (1 === r.children.length && eU(e, r.children[0]));
        }
        if (ee.isEditor(n)) return !1;
        return !0;
    },
    eB = (e, n) => {
        if (eE.isCollapsed(n)) return n.anchor;
        var [, r] = eE.edges(n),
            i = ee.pointRef(e, r);
        return eW.delete(e, { at: n }), i.unref();
    },
    eG = (e, n) => {
        var [r] = ee.node(e, n);
        return (e) => e === r;
    };
function eZ(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eF(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? eZ(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eZ(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var eV = {
        collapse(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { edge: r = 'anchor' } = n,
                { selection: i } = e;
            if (!!i) {
                if ('anchor' === r) eW.select(e, i.anchor);
                else if ('focus' === r) eW.select(e, i.focus);
                else if ('start' === r) {
                    var [a] = eE.edges(i);
                    eW.select(e, a);
                } else if ('end' === r) {
                    var [, s] = eE.edges(i);
                    eW.select(e, s);
                }
            }
        },
        deselect(e) {
            var { selection: n } = e;
            n &&
                e.apply({
                    type: 'set_selection',
                    properties: n,
                    newProperties: null
                });
        },
        move(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { selection: r } = e,
                { distance: i = 1, unit: a = 'character', reverse: s = !1 } = n,
                { edge: o = null } = n;
            if (!!r) {
                'start' === o && (o = eE.isBackward(r) ? 'focus' : 'anchor'), 'end' === o && (o = eE.isBackward(r) ? 'anchor' : 'focus');
                var { anchor: l, focus: u } = r,
                    c = {
                        distance: i,
                        unit: a
                    },
                    d = {};
                if (null == o || 'anchor' === o) {
                    var f = s ? ee.before(e, l, c) : ee.after(e, l, c);
                    f && (d.anchor = f);
                }
                if (null == o || 'focus' === o) {
                    var _ = s ? ee.before(e, u, c) : ee.after(e, u, c);
                    _ && (d.focus = _);
                }
                eW.setSelection(e, d);
            }
        },
        select(e, n) {
            var { selection: r } = e;
            if (((n = ee.range(e, n)), r)) {
                eW.setSelection(e, n);
                return;
            }
            if (!eE.isRange(n)) throw Error('When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: '.concat(eT.stringify(n)));
            e.apply({
                type: 'set_selection',
                properties: r,
                newProperties: n
            });
        },
        setPoint(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { selection: i } = e,
                { edge: a = 'both' } = r;
            if (!!i) {
                'start' === a && (a = eE.isBackward(i) ? 'focus' : 'anchor'), 'end' === a && (a = eE.isBackward(i) ? 'anchor' : 'focus');
                var { anchor: s, focus: o } = i,
                    l = 'anchor' === a ? s : o;
                eW.setSelection(e, { ['anchor' === a ? 'anchor' : 'focus']: eF(eF({}, l), n) });
            }
        },
        setSelection(e, n) {
            var { selection: r } = e,
                i = {},
                a = {};
            if (!!r) {
                for (var s in n) (('anchor' === s && null != n.anchor && !e_.equals(n.anchor, r.anchor)) || ('focus' === s && null != n.focus && !e_.equals(n.focus, r.focus)) || ('anchor' !== s && 'focus' !== s && n[s] !== r[s])) && ((i[s] = r[s]), (a[s] = n[s]));
                Object.keys(i).length > 0 &&
                    e.apply({
                        type: 'set_selection',
                        properties: i,
                        newProperties: a
                    });
            }
        }
    },
    ej = {
        delete(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var r,
                    { reverse: i = !1, unit: a = 'character', distance: s = 1, voids: o = !1 } = n,
                    { at: l = e.selection, hanging: u = !1 } = n;
                if (!l) return;
                var c = !1;
                if ((eE.isRange(l) && eE.isCollapsed(l) && ((c = !0), (l = l.anchor)), e_.isPoint(l))) {
                    var d = ee.void(e, {
                        at: l,
                        mode: 'highest'
                    });
                    if (!o && d) {
                        var [, f] = d;
                        l = f;
                    } else {
                        var _ = {
                                unit: a,
                                distance: s
                            },
                            h = i ? ee.before(e, l, _) || ee.start(e, []) : ee.after(e, l, _) || ee.end(e, []);
                        (l = {
                            anchor: l,
                            focus: h
                        }),
                            (u = !0);
                    }
                }
                if (eu.isPath(l)) {
                    eW.removeNodes(e, {
                        at: l,
                        voids: o
                    });
                    return;
                }
                if (!eE.isCollapsed(l)) {
                    if (!u) {
                        var [, p] = eE.edges(l),
                            m = ee.end(e, []);
                        !e_.equals(p, m) && (l = ee.unhangRange(e, l, { voids: o }));
                    }
                    var [g, E] = eE.edges(l),
                        v = ee.above(e, {
                            match: (n) => z.isElement(n) && ee.isBlock(e, n),
                            at: g,
                            voids: o
                        }),
                        I = ee.above(e, {
                            match: (n) => z.isElement(n) && ee.isBlock(e, n),
                            at: E,
                            voids: o
                        }),
                        T = v && I && !eu.equals(v[1], I[1]),
                        b = eu.equals(g.path, E.path),
                        y = o
                            ? null
                            : ee.void(e, {
                                  at: g,
                                  mode: 'highest'
                              }),
                        S = o
                            ? null
                            : ee.void(e, {
                                  at: E,
                                  mode: 'highest'
                              });
                    if (y) {
                        var A = ee.before(e, g);
                        A && v && eu.isAncestor(v[1], A.path) && (g = A);
                    }
                    if (S) {
                        var N = ee.after(e, E);
                        N && I && eu.isAncestor(I[1], N.path) && (E = N);
                    }
                    var C = [];
                    for (var R of ee.nodes(e, {
                        at: l,
                        voids: o
                    })) {
                        var [O, D] = R;
                        if (!r || 0 !== eu.compare(D, r)) ((!o && z.isElement(O) && ee.isVoid(e, O)) || (!eu.isCommon(D, g.path) && !eu.isCommon(D, E.path))) && (C.push(R), (r = D));
                    }
                    var L = Array.from(C, (n) => {
                            var [, r] = n;
                            return ee.pathRef(e, r);
                        }),
                        x = ee.pointRef(e, g),
                        w = ee.pointRef(e, E),
                        P = '';
                    if (!b && !y) {
                        var M = x.current,
                            [k] = ee.leaf(e, M),
                            { path: U } = M,
                            { offset: B } = g,
                            G = k.text.slice(B);
                        G.length > 0 &&
                            (e.apply({
                                type: 'remove_text',
                                path: U,
                                offset: B,
                                text: G
                            }),
                            (P = G));
                    }
                    if (
                        (L.reverse()
                            .map((e) => e.unref())
                            .filter((e) => null !== e)
                            .forEach((n) =>
                                eW.removeNodes(e, {
                                    at: n,
                                    voids: o
                                })
                            ),
                        !S)
                    ) {
                        var Z = w.current,
                            [F] = ee.leaf(e, Z),
                            { path: V } = Z,
                            j = b ? g.offset : 0,
                            H = F.text.slice(j, E.offset);
                        H.length > 0 &&
                            (e.apply({
                                type: 'remove_text',
                                path: V,
                                offset: j,
                                text: H
                            }),
                            (P = H));
                    }
                    !b &&
                        T &&
                        w.current &&
                        x.current &&
                        eW.mergeNodes(e, {
                            at: w.current,
                            hanging: !0,
                            voids: o
                        }),
                        c && i && 'character' === a && P.length > 1 && P.match(/[\u0E00-\u0E7F]+/) && eW.insertText(e, P.slice(0, P.length - s));
                    var Y = x.unref(),
                        W = w.unref(),
                        K = i ? Y || W : W || Y;
                    null == n.at && K && eW.select(e, K);
                }
            });
        },
        insertFragment(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var i,
                    { hanging: a = !1, voids: s = !1 } = r,
                    { at: o = e.selection } = r;
                if (!n.length) return;
                if (!o) return;
                if (eE.isRange(o)) {
                    if ((!a && (o = ee.unhangRange(e, o, { voids: s })), eE.isCollapsed(o))) o = o.anchor;
                    else {
                        var [, l] = eE.edges(o);
                        if (!s && ee.void(e, { at: l })) return;
                        var u = ee.pointRef(e, l);
                        eW.delete(e, { at: o }), (o = u.unref());
                    }
                } else eu.isPath(o) && (o = ee.start(e, o));
                if (!(!s && ee.void(e, { at: o }))) {
                    var c = ee.above(e, {
                        at: o,
                        match: (n) => z.isElement(n) && ee.isInline(e, n),
                        mode: 'highest',
                        voids: s
                    });
                    if (c) {
                        var [, d] = c;
                        ee.isEnd(e, o, d) ? (o = ee.after(e, d)) : ee.isStart(e, o, d) && (o = ee.before(e, d));
                    }
                    var [, f] = ee.above(e, {
                            match: (n) => z.isElement(n) && ee.isBlock(e, n),
                            at: o,
                            voids: s
                        }),
                        _ = ee.isStart(e, o, f),
                        h = ee.isEnd(e, o, f),
                        p = _ && h,
                        m = !_ || (_ && h),
                        g = !h,
                        [, E] = ea.first({ children: n }, []),
                        [, v] = ea.last({ children: n }, []),
                        I = [],
                        T = (n) => {
                            var [r, i] = n;
                            return 0 !== i.length && (!!p || (!((m && eu.isAncestor(i, E) && z.isElement(r) && !e.isVoid(r) && !e.isInline(r)) || (g && eu.isAncestor(i, v) && z.isElement(r) && !e.isVoid(r) && !e.isInline(r))) && !0));
                        };
                    for (var b of ea.nodes({ children: n }, { pass: T })) T(b) && I.push(b);
                    var y = [],
                        S = [],
                        A = [],
                        N = !0,
                        C = !1;
                    for (var [R] of I) z.isElement(R) && !e.isInline(R) ? ((N = !1), (C = !0), S.push(R)) : N ? y.push(R) : A.push(R);
                    var [O] = ee.nodes(e, {
                            at: o,
                            match: (n) => eC.isText(n) || ee.isInline(e, n),
                            mode: 'highest',
                            voids: s
                        }),
                        [, D] = O,
                        L = ee.isStart(e, o, D),
                        x = ee.isEnd(e, o, D),
                        w = ee.pathRef(e, h && !A.length ? eu.next(f) : f),
                        P = ee.pathRef(e, x ? eu.next(D) : D);
                    eW.splitNodes(e, {
                        at: o,
                        match: (n) => (C ? z.isElement(n) && ee.isBlock(e, n) : eC.isText(n) || ee.isInline(e, n)),
                        mode: C ? 'lowest' : 'highest',
                        always: C && (!_ || y.length > 0) && (!h || A.length > 0),
                        voids: s
                    });
                    var M = ee.pathRef(e, !L || (L && x) ? eu.next(D) : D);
                    if (
                        (eW.insertNodes(e, y, {
                            at: M.current,
                            match: (n) => eC.isText(n) || ee.isInline(e, n),
                            mode: 'highest',
                            voids: s
                        }),
                        p &&
                            !y.length &&
                            S.length &&
                            !A.length &&
                            eW.delete(e, {
                                at: f,
                                voids: s
                            }),
                        eW.insertNodes(e, S, {
                            at: w.current,
                            match: (n) => z.isElement(n) && ee.isBlock(e, n),
                            mode: 'lowest',
                            voids: s
                        }),
                        eW.insertNodes(e, A, {
                            at: P.current,
                            match: (n) => eC.isText(n) || ee.isInline(e, n),
                            mode: 'highest',
                            voids: s
                        }),
                        !r.at && (A.length > 0 && P.current ? (i = eu.previous(P.current)) : S.length > 0 && w.current ? (i = eu.previous(w.current)) : M.current && (i = eu.previous(M.current)), i))
                    ) {
                        var k = ee.end(e, i);
                        eW.select(e, k);
                    }
                    M.unref(), w.unref(), P.unref();
                }
            });
        },
        insertText(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { voids: i = !1 } = r,
                    { at: a = e.selection } = r;
                if (!a) return;
                if ((eu.isPath(a) && (a = ee.range(e, a)), eE.isRange(a))) {
                    if (eE.isCollapsed(a)) a = a.anchor;
                    else {
                        var s = eE.end(a);
                        if (!i && ee.void(e, { at: s })) return;
                        var o = eE.start(a),
                            l = ee.pointRef(e, o),
                            u = ee.pointRef(e, s);
                        eW.delete(e, {
                            at: a,
                            voids: i
                        });
                        var c = l.unref(),
                            d = u.unref();
                        (a = c || d),
                            eW.setSelection(e, {
                                anchor: a,
                                focus: a
                            });
                    }
                }
                if (!(!i && ee.void(e, { at: a }))) {
                    var { path: f, offset: _ } = a;
                    n.length > 0 &&
                        e.apply({
                            type: 'insert_text',
                            path: f,
                            offset: _,
                            text: n
                        });
                }
            });
        }
    };
function eH(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function eY(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? eH(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eH(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var eW = eY(eY(eY(eY({}, eL), ek), eV), ej);
