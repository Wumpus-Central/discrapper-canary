"use strict";
n.d(t, {
    EY: () => eN,
    Hg: () => z,
    KE: () => ee,
    Q6: () => eE,
    bP: () => ea,
    bR: () => ef,
    gB: () => eK,
    h6: () => eT,
    ie: () => g,
    wA: () => eu,
});
var r,
    i = n(694260),
    a = n(159563);
function s(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var o = new WeakMap(),
    l = new WeakMap(),
    u = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    _ = new WeakMap(),
    f = new WeakMap();
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? h(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
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
        apply: (t) => {
            for (var n of ee.pathRefs(e)) ec.transform(n, t);
            for (var r of ee.pointRefs(e)) eh.transform(r, t);
            for (var i of ee.rangeRefs(e)) eA.transform(i, t);
            var a,
                s,
                c = o.get(e) || [],
                d = l.get(e) || new Set(),
                _ = (e) => {
                    if (e) {
                        var t = e.join(",");
                        s.has(t) || (s.add(t), a.push(e));
                    }
                };
            if (eu.operationCanTransformPath(t)) for (var f of ((a = []), (s = new Set()), c)) _(eu.transform(f, t));
            else (a = c), (s = d);
            for (var h of e.getDirtyPaths(t)) _(h);
            o.set(e, a),
                l.set(e, s),
                eK.transform(e, t),
                e.operations.push(t),
                ee.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                u.get(e) ||
                    (u.set(e, !0),
                    Promise.resolve().then(() => {
                        u.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
                var a = (t, n) => {
                        if (!eN.isText(t)) return !1;
                        var [r, i] = ee.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    s = eE.isExpanded(r),
                    o = !1;
                if (!s) {
                    var [l, c] = ee.node(e, r);
                    if (l && a(l, c)) {
                        var [d] = ee.parent(e, c);
                        o = d && e.markableVoid(d);
                    }
                }
                if (s || o) eK.setNodes(e, { [t]: n }, { match: a, split: !0, voids: !0 });
                else {
                    var _ = p(p({}, ee.marks(e) || {}), {}, { [t]: n });
                    (e.marks = _), u.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && eE.isCollapsed(n) && eK.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && eE.isCollapsed(n) && eK.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && eE.isExpanded(n) && eK.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? ea.fragment(e, t) : [];
        },
        insertBreak: () => {
            eK.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eK.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            eK.insertFragment(e, t);
        },
        insertNode: (t) => {
            eK.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
                if (r) {
                    var i = p({ text: t }, r);
                    eK.insertNodes(e, i);
                } else eK.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!eN.isText(n)) {
                if (z.isElement(n) && 0 === n.children.length) {
                    var i = { text: "" };
                    eK.insertNodes(e, i, { at: r.concat(0), voids: !0 });
                    return;
                }
                for (
                    var a =
                            !ee.isEditor(n) &&
                            z.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                eN.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        s = 0,
                        o = 0;
                    o < n.children.length;
                    o++, s++
                ) {
                    var l = ea.get(e, r);
                    if (!eN.isText(l)) {
                        var u = n.children[o],
                            c = l.children[s - 1],
                            d = o === n.children.length - 1,
                            _ = eN.isText(u) || (z.isElement(u) && e.isInline(u));
                        if (_ !== a) eK.removeNodes(e, { at: r.concat(s), voids: !0 }), s--;
                        else if (z.isElement(u)) {
                            if (e.isInline(u))
                                if (null != c && eN.isText(c)) {
                                    if (d) {
                                        var f = { text: "" };
                                        eK.insertNodes(e, f, { at: r.concat(s + 1), voids: !0 }), s++;
                                    }
                                } else {
                                    var h = { text: "" };
                                    eK.insertNodes(e, h, { at: r.concat(s), voids: !0 }), s++;
                                }
                        } else
                            null != c &&
                                eN.isText(c) &&
                                (eN.equals(u, c, { loose: !0 })
                                    ? (eK.mergeNodes(e, { at: r.concat(s), voids: !0 }), s--)
                                    : "" === c.text
                                      ? (eK.removeNodes(e, { at: r.concat(s - 1), voids: !0 }), s--)
                                      : "" === u.text && (eK.removeNodes(e, { at: r.concat(s), voids: !0 }), s--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!eN.isText(t)) return !1;
                        var [r, i] = ee.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    i = eE.isExpanded(n),
                    a = !1;
                if (!i) {
                    var [s, o] = ee.node(e, n);
                    if (s && r(s, o)) {
                        var [l] = ee.parent(e, o);
                        a = l && e.markableVoid(l);
                    }
                }
                if (i || a) eK.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
                else {
                    var c = p({}, ee.marks(e) || {});
                    delete c[t], (e.marks = c), u.get(e) || e.onChange();
                }
            }
        },
        getDirtyPaths: (e) => {
            switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                    var { path: t } = e;
                    return eu.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...eu.levels(r),
                        ...(eN.isText(n)
                            ? []
                            : Array.from(ea.nodes(n), (e) => {
                                  var [, t] = e;
                                  return r.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: i } = e;
                    return [...eu.ancestors(i), eu.previous(i)];
                case "move_node":
                    var { path: a, newPath: s } = e;
                    if (eu.equals(a, s)) return [];
                    var o = [],
                        l = [];
                    for (var u of eu.ancestors(a)) {
                        var c = eu.transform(u, e);
                        o.push(c);
                    }
                    for (var d of eu.ancestors(s)) {
                        var _ = eu.transform(d, e);
                        l.push(_);
                    }
                    var f = l[l.length - 1],
                        h = s[s.length - 1];
                    return [...o, ...l, f.concat(h)];
                case "remove_node":
                    var { path: p } = e;
                    return [...eu.ancestors(p)];
                case "split_node":
                    var { path: g } = e;
                    return [...eu.levels(g), eu.next(g)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
                r = 42 * n;
            if (t > r)
                throw Error(
                    "Could not completely normalize the editor after ".concat(
                        r,
                        " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                );
            return !0;
        },
    };
    return e;
};
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var I = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            i = t ? N(e) : e,
            a = r.None,
            s = r.None,
            o = 0,
            l = null,
            u = null;
        for (var c of i) {
            var d = c.codePointAt(0);
            if (!d) break;
            var _ = F(c, d);
            if (
                (([a, s] = n ? [s, _] : [_, a]),
                (V(a, r.ZWJ) && V(s, r.ExtPict) && !(l = n ? Y(e.substring(0, o)) : Y(e.substring(0, e.length - o)))) ||
                    (V(a, r.RI) && V(s, r.RI) && !(u = null !== u ? !u : !!n || K(e.substring(0, e.length - o)))) ||
                    (a !== r.None && s !== r.None && j(a, s)))
            )
                break;
            o += c.length;
        }
        return o || 1;
    },
    T = /\s/,
    y =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    S = /['\u2018\u2019]/,
    v = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0; ) {
            var i = I(e, t),
                [a, s] = C(e, i, t);
            if (b(a, s, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = s;
        }
        return n;
    },
    C = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    b = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (T.test(t)) return !1;
        if (S.test(t)) {
            var i = I(n, r),
                [a, s] = C(n, i, r);
            if (e(a, s, r)) return !0;
        }
        return !y.test(t);
    },
    N = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (O(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (R(i.charCodeAt(0))) {
                    yield i + r, n++;
                    continue;
                }
            }
            yield r;
        }
    },
    R = (e) => e >= 55296 && e <= 56319,
    O = (e) => e >= 56320 && e <= 57343;
!(function (e) {
    (e[(e.None = 0)] = "None"),
        (e[(e.Extend = 1)] = "Extend"),
        (e[(e.ZWJ = 2)] = "ZWJ"),
        (e[(e.RI = 4)] = "RI"),
        (e[(e.Prepend = 8)] = "Prepend"),
        (e[(e.SpacingMark = 16)] = "SpacingMark"),
        (e[(e.L = 32)] = "L"),
        (e[(e.V = 64)] = "V"),
        (e[(e.T = 128)] = "T"),
        (e[(e.LV = 256)] = "LV"),
        (e[(e.LVT = 512)] = "LVT"),
        (e[(e.ExtPict = 1024)] = "ExtPict"),
        (e[(e.Any = 2048)] = "Any");
})(r || (r = {}));
var D =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    L =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    w =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    x = /^[\u1100-\u115F\uA960-\uA97C]$/,
    P = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    M = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    k =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    U =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    G =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    F = (e, t) => {
        var n = r.Any;
        return (
            -1 !== e.search(D) && (n |= r.Extend),
            8205 === t && (n |= r.ZWJ),
            t >= 127462 && t <= 127487 && (n |= r.RI),
            -1 !== e.search(L) && (n |= r.Prepend),
            -1 !== e.search(w) && (n |= r.SpacingMark),
            -1 !== e.search(x) && (n |= r.L),
            -1 !== e.search(P) && (n |= r.V),
            -1 !== e.search(M) && (n |= r.T),
            -1 !== e.search(k) && (n |= r.LV),
            -1 !== e.search(U) && (n |= r.LVT),
            -1 !== e.search(G) && (n |= r.ExtPict),
            n
        );
    };
function V(e, t) {
    return (e & t) != 0;
}
var B = [
    [r.L, r.L | r.V | r.LV | r.LVT],
    [r.LV | r.V, r.V | r.T],
    [r.LVT | r.T, r.T],
    [r.Any, r.Extend | r.ZWJ],
    [r.Any, r.SpacingMark],
    [r.Prepend, r.Any],
    [r.ZWJ, r.ExtPict],
    [r.RI, r.RI],
];
function j(e, t) {
    return -1 === B.findIndex((n) => V(e, n[0]) && V(t, n[1]));
}
var H =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    Y = (e) => -1 !== e.search(H),
    W = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    K = (e) => {
        var t = e.match(W);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    $ = (e) => (0, i.Q)(e) && ea.isNodeList(e.children) && !ee.isEditor(e),
    z = {
        isAncestor: (e) => (0, i.Q)(e) && ea.isNodeList(e.children),
        isElement: $,
        isElementList: (e) => Array.isArray(e) && e.every((e) => z.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return $(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    q = ["text"],
    X = ["text"];
function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Z(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var J = new WeakMap(),
    ee = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: i = e.selection, match: a } = t;
            if (i) {
                var s = ee.path(e, i),
                    o = "lowest" === r;
                for (var [l, u] of ee.levels(e, { at: s, voids: n, match: a, reverse: o }))
                    if (!eN.isText(l)) {
                        if (eE.isRange(i)) {
                            if (eu.isAncestor(u, i.anchor.path) && eu.isAncestor(u, i.focus.path)) return [l, u];
                        } else if (!eu.equals(s, u)) return [l, u];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = { anchor: ee.point(e, t, { edge: "end" }), focus: ee.end(e, []) },
                { distance: a = 1 } = r,
                s = 0;
            for (var o of ee.positions(e, Q(Q({}, r), {}, { at: i }))) {
                if (s > a) break;
                0 !== s && (n = o), s++;
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = { anchor: ee.start(e, []), focus: ee.point(e, t, { edge: "start" }) },
                { distance: a = 1 } = r,
                s = 0;
            for (var o of ee.positions(e, Q(Q({}, r), {}, { at: i, reverse: !0 }))) {
                if (s > a) break;
                0 !== s && (n = o), s++;
            }
            return n;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = "character" } = t;
            e.deleteBackward(n);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = "character" } = t;
            e.deleteForward(n);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: n = "forward" } = t;
            e.deleteFragment(n);
        },
        edges: (e, t) => [ee.start(e, t), ee.end(e, t)],
        end: (e, t) => ee.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = ee.path(e, t, { edge: "start" });
            return ee.node(e, n);
        },
        fragment(e, t) {
            var n = ee.range(e, t);
            return ea.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => z.isElement(t) && ee.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => eN.isText(t) || ee.isInline(e, t)),
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
            if (!(0, i.Q)(e)) return !1;
            var n =
                "function" == typeof e.addMark &&
                "function" == typeof e.apply &&
                "function" == typeof e.deleteBackward &&
                "function" == typeof e.deleteForward &&
                "function" == typeof e.deleteFragment &&
                "function" == typeof e.insertBreak &&
                "function" == typeof e.insertSoftBreak &&
                "function" == typeof e.insertFragment &&
                "function" == typeof e.insertNode &&
                "function" == typeof e.insertText &&
                "function" == typeof e.isInline &&
                "function" == typeof e.isVoid &&
                "function" == typeof e.normalizeNode &&
                "function" == typeof e.onChange &&
                "function" == typeof e.removeMark &&
                "function" == typeof e.getDirtyPaths &&
                (null === e.marks || (0, i.Q)(e.marks)) &&
                (null === e.selection || eE.isRange(e.selection)) &&
                ea.isNodeList(e.children) &&
                el.isOperationList(e.operations);
            return J.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = ee.end(e, n);
            return ef.equals(t, r);
        },
        isEdge: (e, t, n) => ee.isStart(e, t, n) || ee.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && eN.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = c.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = ee.start(e, n);
            return ef.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = ee.path(e, t, { edge: "end" });
            return ee.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = ee.path(e, t, n);
            return [ea.leaf(e, r), r];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
                { match: a } = t;
            if ((null == a && (a = () => !0), n)) {
                var s = [],
                    o = ee.path(e, n);
                for (var [l, u] of ea.levels(e, o))
                    if (a(l, u) && (s.push([l, u]), !i && z.isElement(l) && ee.isVoid(e, l))) break;
                r && s.reverse(), yield* s;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (eE.isExpanded(n)) {
                var [r] = ee.nodes(e, { match: eN.isText });
                if (!r) return {};
                var [i] = r;
                return A(i, q);
            }
            var { anchor: a } = n,
                { path: s } = a,
                [o] = ee.leaf(e, s);
            if (0 === a.offset) {
                var l = ee.previous(e, { at: s, match: eN.isText });
                if (!ee.above(e, { match: (t) => z.isElement(t) && ee.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = ee.above(e, { match: (t) => z.isElement(t) && ee.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l,
                            [, _] = u;
                        eu.isAncestor(_, d) && (o = c);
                    }
                }
            }
            return A(o, X);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var s = ee.after(e, a, { voids: r });
                if (s) {
                    var [, o] = ee.last(e, []),
                        l = [s.path, o];
                    if (eu.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                    if (null == i)
                        if (eu.isPath(a)) {
                            var [u] = ee.parent(e, a);
                            i = (e) => u.children.includes(e);
                        } else i = () => !0;
                    var [c] = ee.nodes(e, { at: l, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = ee.path(e, t, n);
            return [ea.get(e, r), r];
        },
        *nodes(e) {
            var t,
                n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: a = e.selection, mode: s = "all", universal: o = !1, reverse: l = !1, voids: u = !1 } = i,
                { match: c } = i;
            if ((c || (c = () => !0), a)) {
                if (et.isSpan(a)) (t = a[0]), (n = a[1]);
                else {
                    var d = ee.path(e, a, { edge: "start" }),
                        _ = ee.path(e, a, { edge: "end" });
                    (t = l ? _ : d), (n = l ? d : _);
                }
                var f = ea.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !u && z.isElement(n) && ee.isVoid(e, n);
                        },
                    }),
                    h = [];
                for (var [p, g] of f) {
                    var E = r && 0 === eu.compare(g, r[1]);
                    if ("highest" !== s || !E) {
                        if (!c(p, g))
                            if (o && !E && eN.isText(p)) return;
                            else continue;
                        if ("lowest" === s && E) {
                            r = [p, g];
                            continue;
                        }
                        var A = "lowest" === s ? r : [p, g];
                        A && (o ? h.push(A) : yield A), (r = [p, g]);
                    }
                }
                "lowest" === s && r && (o ? h.push(r) : yield r), o && (yield* h);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: r } = t,
                i = (e) => o.get(e) || [],
                a = (e) => l.get(e) || new Set(),
                s = (e) => {
                    var t = i(e).pop(),
                        n = t.join(",");
                    return a(e).delete(n), t;
                };
            if (ee.isNormalizing(e)) {
                if (n) {
                    var u = Array.from(ea.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        c = new Set(u.map((e) => e.join(",")));
                    o.set(e, u), l.set(e, c);
                }
                0 !== i(e).length &&
                    ee.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (ea.has(e, t)) {
                                var n = ee.node(e, t),
                                    [a, o] = n;
                                z.isElement(a) && 0 === a.children.length && e.normalizeNode(n, { operation: r });
                            }
                        for (var l = i(e), u = l.length, c = 0; 0 !== l.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: l,
                                    iteration: c,
                                    initialDirtyPathsLength: u,
                                    operation: r,
                                })
                            )
                                return;
                            var d = s(e);
                            if (ea.has(e, d)) {
                                var _ = ee.node(e, d);
                                e.normalizeNode(_, { operation: r });
                            }
                            c++, (l = i(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = ee.path(e, t, n),
                i = eu.parent(r);
            return ee.node(e, i);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: r, edge: i } = n;
            if (eu.isPath(t)) {
                if ("start" === i) {
                    var [, a] = ea.first(e, t);
                    t = a;
                } else if ("end" === i) {
                    var [, s] = ea.last(e, t);
                    t = s;
                }
            }
            return (
                eE.isRange(t) &&
                    (t =
                        "start" === i ? eE.start(t) : "end" === i ? eE.end(t) : eu.common(t.anchor.path, t.focus.path)),
                ef.isPoint(t) && (t = t.path),
                null != r && (t = t.slice(0, r)),
                t
            );
        },
        hasPath: (e, t) => ea.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return ee.pathRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return ee.pathRefs(e).add(i), i;
        },
        pathRefs(e) {
            var t = d.get(e);
            return t || ((t = new Set()), d.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: r = "start" } = n;
            if (eu.isPath(t)) {
                if ("end" === r) {
                    var i,
                        [, a] = ea.last(e, t);
                    i = a;
                } else {
                    var [, s] = ea.first(e, t);
                    i = s;
                }
                var o = ea.get(e, i);
                if (!eN.isText(o))
                    throw Error(
                        "Cannot get the "
                            .concat(r, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(r, " text node."),
                    );
                return { path: i, offset: "end" === r ? o.text.length : 0 };
            }
            if (eE.isRange(t)) {
                var [l, u] = eE.edges(t);
                return "start" === r ? l : u;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return ee.pointRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return ee.pointRefs(e).add(i), i;
        },
        pointRefs(e) {
            var t = _.get(e);
            return t || ((t = new Set()), _.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: i = !1, voids: a = !1 } = t;
            if (n) {
                var s = ee.range(e, n),
                    [o, l] = eE.edges(s),
                    u = i ? l : o,
                    c = !1,
                    d = "",
                    _ = 0,
                    f = 0,
                    h = 0;
                for (var [p, g] of ee.nodes(e, { at: n, reverse: i, voids: a })) {
                    if (z.isElement(p)) {
                        if (!a && e.isVoid(p)) {
                            yield ee.start(e, g);
                            continue;
                        }
                        if (e.isInline(p)) continue;
                        if (ee.hasInlines(e, p)) {
                            var E = eu.isAncestor(g, l.path) ? l : ee.end(e, g),
                                A = eu.isAncestor(g, o.path) ? o : ee.start(e, g);
                            (d = ee.string(e, { anchor: A, focus: E }, { voids: a })), (c = !0);
                        }
                    }
                    if (eN.isText(p)) {
                        var T = eu.equals(g, u.path);
                        for (
                            T
                                ? ((f = i ? u.offset : p.text.length - u.offset), (h = u.offset))
                                : ((f = p.text.length), (h = i ? f : 0)),
                                (T || c || "offset" === r) && (yield { path: g, offset: h }, (c = !1));
                            ;
                        ) {
                            if (0 === _) {
                                if ("" === d) break;
                                (_ = y(d, r, i)), (d = C(d, _, i)[1]);
                            }
                            if (((h = i ? h - _ : h + _), (f -= _) < 0)) {
                                _ = -f;
                                break;
                            }
                            (_ = 0), yield { path: g, offset: h };
                        }
                    }
                }
            }
            function y(e, t, n) {
                return "character" === t
                    ? I(e, n)
                    : "word" === t
                      ? v(e, n)
                      : "line" === t || "block" === t
                        ? e.length
                        : 1;
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var s = ee.before(e, a, { voids: r });
                if (s) {
                    var [, o] = ee.first(e, []),
                        l = [s.path, o];
                    if (eu.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == i)
                        if (eu.isPath(a)) {
                            var [u] = ee.parent(e, a);
                            i = (e) => u.children.includes(e);
                        } else i = () => !0;
                    var [c] = ee.nodes(e, { reverse: !0, at: l, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        range: (e, t, n) => (eE.isRange(t) && !n ? t : { anchor: ee.start(e, t), focus: ee.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return ee.rangeRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return ee.rangeRefs(e).add(i), i;
        },
        rangeRefs(e) {
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            c.set(e, t);
        },
        start: (e, t) => ee.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                i = ee.range(e, t),
                [a, s] = eE.edges(i),
                o = "";
            for (var [l, u] of ee.nodes(e, { at: i, match: eN.isText, voids: r })) {
                var c = l.text;
                eu.equals(u, s.path) && (c = c.slice(0, s.offset)),
                    eu.equals(u, a.path) && (c = c.slice(a.offset)),
                    (o += c);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [i, a] = eE.edges(t);
            if (0 !== i.offset || 0 !== a.offset || eE.isCollapsed(t) || eu.hasPrevious(a.path)) return t;
            var s = ee.above(e, { at: a, match: (t) => z.isElement(t) && ee.isBlock(e, t), voids: r }),
                o = s ? s[1] : [],
                l = { anchor: ee.start(e, i), focus: a },
                u = !0;
            for (var [c, d] of ee.nodes(e, { at: l, match: eN.isText, reverse: !0, voids: r })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ("" !== c.text || eu.isBefore(d, o)) {
                    a = { path: d, offset: c.text.length };
                    break;
                }
            }
            return { anchor: i, focus: a };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return ee.above(e, Q(Q({}, t), {}, { match: (t) => z.isElement(t) && ee.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = ee.isNormalizing(e);
            ee.setNormalizing(e, !1);
            try {
                t();
            } finally {
                ee.setNormalizing(e, n);
            }
            ee.normalize(e);
        },
    },
    et = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(eu.isPath) },
    en = ["children"],
    er = ["text"],
    ei = new WeakMap(),
    ea = {
        ancestor(e, t) {
            var n = ea.get(e, t);
            if (eN.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(eT.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of eu.ancestors(t, n)) {
                var i = [ea.ancestor(e, r), r];
                yield i;
            }
        },
        child(e, t) {
            if (eN.isText(e)) throw Error("Cannot get the child of a text node: ".concat(eT.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(eT.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    i = ea.ancestor(e, t),
                    { children: a } = i,
                    s = r ? a.length - 1 : 0;
                r ? s >= 0 : s < a.length;
            ) {
                var o = ea.child(i, s),
                    l = t.concat(s);
                yield [o, l], (s = r ? s - 1 : s + 1);
            }
        },
        common(e, t, n) {
            var r = eu.common(t, n);
            return [ea.get(e, r), r];
        },
        descendant(e, t) {
            var n = ea.get(e, t);
            if (ee.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(eT.stringify(n)),
                );
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ea.nodes(e, t)) 0 !== r.length && (yield [n, r]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ea.nodes(e, t)) z.isElement(n) && (yield [n, r]);
        },
        extractProps(e) {
            if (z.isAncestor(e)) {
                var t = A(e, en);
                return t;
            }
            var t = A(e, er);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = ea.get(e, n); r; )
                if (eN.isText(r) || 0 === r.children.length) break;
                else (r = r.children[0]), n.push(0);
            return [r, n];
        },
        fragment(e, t) {
            if (eN.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(eT.stringify(e)));
            return (0, a.jM)({ children: e.children }, (e) => {
                var [n, r] = eE.edges(t);
                for (var [, i] of ea.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !eE.includes(t, n);
                    },
                })) {
                    if (!eE.includes(t, i)) {
                        var a = ea.parent(e, i),
                            s = i[i.length - 1];
                        a.children.splice(s, 1);
                    }
                    if (eu.equals(i, r.path)) {
                        var o = ea.leaf(e, i);
                        o.text = o.text.slice(0, r.offset);
                    }
                    if (eu.equals(i, n.path)) {
                        var l = ea.leaf(e, i);
                        l.text = l.text.slice(n.offset);
                    }
                }
                ee.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eN.isText(n) || !n.children[i])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(eT.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eN.isText(n) || !n.children[i]) return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: (e) => eN.isText(e) || z.isElement(e) || ee.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = ei.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => ea.isNode(e));
            return ei.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = ea.get(e, n); r; )
                if (eN.isText(r) || 0 === r.children.length) break;
                else {
                    var i = r.children.length - 1;
                    (r = r.children[i]), n.push(i);
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = ea.get(e, t);
            if (!eN.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(eT.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of eu.levels(t, n)) {
                var i = ea.get(e, r);
                yield [i, r];
            }
        },
        matches: (e, t) =>
            (z.isElement(e) && z.isElementProps(t) && z.matches(e, t)) ||
            (eN.isText(e) && eN.isTextProps(t) && eN.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: i = [], to: a } = t,
                    s = new Set(),
                    o = [],
                    l = e;
                !(a && (r ? eu.isBefore(o, a) : eu.isAfter(o, a)));
            ) {
                if (
                    (s.has(l) || (yield [l, o]),
                    !s.has(l) && !eN.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, o])))
                ) {
                    s.add(l);
                    var u = r ? l.children.length - 1 : 0;
                    eu.isAncestor(o, i) && (u = i[o.length]), (o = o.concat(u)), (l = ea.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!r) {
                    var c = eu.next(o);
                    if (ea.has(e, c)) {
                        (o = c), (l = ea.get(e, o));
                        continue;
                    }
                }
                if (r && 0 !== o[o.length - 1]) {
                    (o = eu.previous(o)), (l = ea.get(e, o));
                    continue;
                }
                (o = eu.parent(o)), (l = ea.get(e, o)), s.add(l);
            }
        },
        parent(e, t) {
            var n = eu.parent(t),
                r = ea.get(e, n);
            if (eN.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (eN.isText(e) ? e.text : e.children.map(ea.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ea.nodes(e, t)) eN.isText(n) && (yield [n, r]);
        },
    };
function es(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? es(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : es(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var el = {
        isNodeOperation: (e) => el.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!(0, i.Q)(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return eu.isPath(e.path) && ea.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && eu.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && eu.isPath(e.path) && (0, i.Q)(e.properties);
                case "move_node":
                    return eu.isPath(e.path) && eu.isPath(e.newPath);
                case "set_node":
                    return eu.isPath(e.path) && (0, i.Q)(e.properties) && (0, i.Q)(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && eE.isRange(e.newProperties)) ||
                        (null === e.newProperties && eE.isRange(e.properties)) ||
                        ((0, i.Q)(e.properties) && (0, i.Q)(e.newProperties))
                    );
                case "split_node":
                    return eu.isPath(e.path) && "number" == typeof e.position && (0, i.Q)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => el.isOperation(e)),
        isSelectionOperation: (e) => el.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => el.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return eo(eo({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return eo(eo({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return eo(eo({}, e), {}, { type: "split_node", path: eu.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (eu.equals(t, n)) return e;
                    if (eu.isSibling(n, t)) return eo(eo({}, e), {}, { path: t, newPath: n });
                    var r = eu.transform(n, e),
                        i = eu.transform(eu.next(n), e);
                    return eo(eo({}, e), {}, { path: r, newPath: i });
                case "remove_node":
                    return eo(eo({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return eo(eo({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: a, newProperties: s } = e;
                    return eo(eo({}, e), {}, { properties: s, newProperties: a });
                case "set_selection":
                    var { properties: o, newProperties: l } = e;
                    if (null == o) return eo(eo({}, e), {}, { properties: l, newProperties: null });
                    if (null == l) return eo(eo({}, e), {}, { properties: null, newProperties: o });
                    return eo(eo({}, e), {}, { properties: l, newProperties: o });
                case "split_node":
                    return eo(eo({}, e), {}, { type: "merge_node", path: eu.next(e.path) });
            }
        },
    },
    eu = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                r = eu.levels(e, t);
            return n ? r.slice(1) : r.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                var i = e[r];
                if (i !== t[r]) break;
                n.push(i);
            }
            return n;
        },
        compare(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                if (e[r] < t[r]) return -1;
                if (e[r] > t[r]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                a = e[n],
                s = t[n];
            return eu.equals(r, i) && a > s;
        },
        endsAt(e, t) {
            var n = e.length,
                r = e.slice(0, n),
                i = t.slice(0, n);
            return eu.equals(r, i);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                a = e[n],
                s = t[n];
            return eu.equals(r, i) && a < s;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === eu.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === eu.compare(e, t),
        isBefore: (e, t) => -1 === eu.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === eu.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === eu.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === eu.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === eu.compare(e, t),
        isPath: (e) => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && eu.equals(n, r);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: n = !1 } = t,
                    r = [],
                    i = 0;
                i <= e.length;
                i++
            )
                r.push(e.slice(0, i));
            return n && r.reverse(), r;
        },
        next(e) {
            if (0 === e.length)
                throw Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
        },
        operationCanTransformPath(e) {
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                case "merge_node":
                case "split_node":
                case "move_node":
                    return !0;
                default:
                    return !1;
            }
        },
        parent(e) {
            if (0 === e.length) throw Error("Cannot get the parent path of the root path [".concat(e, "]."));
            return e.slice(0, -1);
        },
        previous(e) {
            if (0 === e.length)
                throw Error(
                    "Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."),
                );
            var t = e[e.length - 1];
            if (t <= 0)
                throw Error(
                    "Cannot get the previous path of a first child path [".concat(
                        e,
                        "] because it would result in a negative index.",
                    ),
                );
            return e.slice(0, -1).concat(t - 1);
        },
        relative(e, t) {
            if (!eu.isAncestor(t, e) && !eu.equals(e, t))
                throw Error(
                    "Cannot get the relative path of ["
                        .concat(e, "] inside ancestor [")
                        .concat(t, "], because it is not above or equal to the path."),
                );
            return e.slice(t.length);
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var r = [...e],
                { affinity: i = "forward" } = n;
            if (0 === e.length) return r;
            switch (t.type) {
                case "insert_node":
                    var { path: a } = t;
                    (eu.equals(a, r) || eu.endsBefore(a, r) || eu.isAncestor(a, r)) && (r[a.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: s } = t;
                    if (eu.equals(s, r) || eu.isAncestor(s, r)) return null;
                    eu.endsBefore(s, r) && (r[s.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: l } = t;
                    eu.equals(o, r) || eu.endsBefore(o, r)
                        ? (r[o.length - 1] -= 1)
                        : eu.isAncestor(o, r) && ((r[o.length - 1] -= 1), (r[o.length] += l));
                    break;
                case "split_node":
                    var { path: u, position: c } = t;
                    if (eu.equals(u, r)) {
                        if ("forward" === i) r[r.length - 1] += 1;
                        else if ("backward" !== i) return null;
                    } else
                        eu.endsBefore(u, r)
                            ? (r[u.length - 1] += 1)
                            : eu.isAncestor(u, r) && e[u.length] >= c && ((r[u.length - 1] += 1), (r[u.length] -= c));
                    break;
                case "move_node":
                    var { path: d, newPath: _ } = t;
                    if (eu.equals(d, _)) break;
                    if (eu.isAncestor(d, r) || eu.equals(d, r)) {
                        var f = _.slice();
                        return (
                            eu.endsBefore(d, _) && d.length < _.length && (f[d.length - 1] -= 1),
                            f.concat(r.slice(d.length))
                        );
                    }
                    eu.isSibling(d, _) && (eu.isAncestor(_, r) || eu.equals(_, r))
                        ? eu.endsBefore(d, r)
                            ? (r[d.length - 1] -= 1)
                            : (r[d.length - 1] += 1)
                        : eu.endsBefore(_, r) || eu.equals(_, r) || eu.isAncestor(_, r)
                          ? (eu.endsBefore(d, r) && (r[d.length - 1] -= 1), (r[_.length - 1] += 1))
                          : eu.endsBefore(d, r) && (eu.equals(_, r) && (r[_.length - 1] += 1), (r[d.length - 1] -= 1));
            }
            return r;
        },
    },
    ec = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = eu.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    };
function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function e_(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ed(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ed(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ef = {
        compare(e, t) {
            var n = eu.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === ef.compare(e, t),
        isBefore: (e, t) => -1 === ef.compare(e, t),
        equals: (e, t) => e.offset === t.offset && eu.equals(e.path, t.path),
        isPoint: (e) => (0, i.Q)(e) && "number" == typeof e.offset && eu.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: i, offset: a } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = eu.transform(i, t, n);
                        break;
                    case "insert_text":
                        eu.equals(t.path, i) &&
                            (t.offset < a || (t.offset === a && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        eu.equals(t.path, i) && (e.offset += t.position), (e.path = eu.transform(i, t, n));
                        break;
                    case "remove_text":
                        eu.equals(t.path, i) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (eu.equals(t.path, i) || eu.isAncestor(t.path, i)) return null;
                        e.path = eu.transform(i, t, n);
                        break;
                    case "split_node":
                        if (eu.equals(t.path, i))
                            if (t.position === a && null == r) return null;
                            else
                                (t.position < a || (t.position === a && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = eu.transform(i, t, e_(e_({}, n), {}, { affinity: "forward" }))));
                        else e.path = eu.transform(i, t, n);
                }
            });
        },
    },
    eh = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ef.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    ep = ["anchor", "focus"];
function em(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? em(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : em(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eE = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: r, focus: i } = e;
            return eE.isBackward(e) === n ? [r, i] : [i, r];
        },
        end(e) {
            var [, t] = eE.edges(e);
            return t;
        },
        equals: (e, t) => ef.equals(e.anchor, t.anchor) && ef.equals(e.focus, t.focus),
        includes(e, t) {
            if (eE.isRange(t)) {
                if (eE.includes(e, t.anchor) || eE.includes(e, t.focus)) return !0;
                var [n, r] = eE.edges(e),
                    [i, a] = eE.edges(t);
                return ef.isBefore(n, i) && ef.isAfter(r, a);
            }
            var [s, o] = eE.edges(e),
                l = !1,
                u = !1;
            return (
                ef.isPoint(t)
                    ? ((l = ef.compare(t, s) >= 0), (u = 0 >= ef.compare(t, o)))
                    : ((l = eu.compare(t, s.path) >= 0), (u = 0 >= eu.compare(t, o.path))),
                l && u
            );
        },
        intersection(e, t) {
            var n = A(e, ep),
                [r, i] = eE.edges(e),
                [a, s] = eE.edges(t),
                o = ef.isBefore(r, a) ? a : r,
                l = ef.isBefore(i, s) ? i : s;
            return ef.isBefore(l, o) ? null : eg({ anchor: o, focus: l }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return ef.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return ef.equals(t, n);
        },
        isExpanded: (e) => !eE.isCollapsed(e),
        isForward: (e) => !eE.isBackward(e),
        isRange: (e) => (0, i.Q)(e) && ef.isPoint(e.anchor) && ef.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = eE.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.jM)(e, (e) => {
                if (null === e) return null;
                var r,
                    i,
                    { affinity: a = "inward" } = n;
                if ("inward" === a) {
                    var s = eE.isCollapsed(e);
                    eE.isForward(e)
                        ? ((r = "forward"), (i = s ? r : "backward"))
                        : ((r = "backward"), (i = s ? r : "forward"));
                } else
                    "outward" === a
                        ? eE.isForward(e)
                            ? ((r = "backward"), (i = "forward"))
                            : ((r = "forward"), (i = "backward"))
                        : ((r = a), (i = a));
                var o = ef.transform(e.anchor, t, { affinity: r }),
                    l = ef.transform(e.focus, t, { affinity: i });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        },
    },
    eA = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = eE.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    eI = void 0,
    eT = {
        setScrubber(e) {
            eI = e;
        },
        stringify: (e) => JSON.stringify(e, eI),
    },
    ey = (e, t) => {
        for (var n in e) {
            var r = e[n],
                a = t[n];
            if ((0, i.Q)(r) && (0, i.Q)(a)) {
                if (!ey(r, a)) return !1;
            } else if (Array.isArray(r) && Array.isArray(a)) {
                if (r.length !== a.length) return !1;
                for (var s = 0; s < r.length; s++) if (r[s] !== a[s]) return !1;
            } else if (r !== a) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    eS = ["text"],
    ev = ["anchor", "focus"];
function eC(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eb(e) {
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
var eN = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;
        function i(e) {
            return A(e, eS);
        }
        return ey(r ? i(e) : e, r ? i(t) : t);
    },
    isText: (e) => (0, i.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eN.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [eb({}, e)];
        for (var r of t) {
            var i = A(r, ev),
                [a, s] = eE.edges(r),
                o = [],
                l = 0,
                u = a.offset,
                c = s.offset;
            for (var d of n) {
                var { length: _ } = d.text,
                    f = l;
                if (((l += _), u <= f && l <= c)) {
                    Object.assign(d, i), o.push(d);
                    continue;
                }
                if ((u !== c && (u === l || c === f)) || u > l || c < f || (c === f && 0 !== f)) {
                    o.push(d);
                    continue;
                }
                var h = d,
                    p = void 0,
                    g = void 0;
                if (c < l) {
                    var E = c - f;
                    (g = eb(eb({}, h), {}, { text: h.text.slice(E) })),
                        (h = eb(eb({}, h), {}, { text: h.text.slice(0, E) }));
                }
                if (u > f) {
                    var I = u - f;
                    (p = eb(eb({}, h), {}, { text: h.text.slice(0, I) })),
                        (h = eb(eb({}, h), {}, { text: h.text.slice(I) }));
                }
                Object.assign(h, i), p && o.push(p), o.push(h), g && o.push(g);
            }
            n = o;
        }
        return n;
    },
};
function eR(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eO(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eR(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eR(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eD = (e, t, n) => {
        switch (n.type) {
            case "insert_node":
                var { path: r, node: i } = n,
                    a = ea.parent(e, r),
                    s = r[r.length - 1];
                if (s > a.children.length)
                    throw Error(
                        'Cannot apply an "insert_node" operation at path ['.concat(
                            r,
                            "] because the destination is past the end of the node.",
                        ),
                    );
                if ((a.children.splice(s, 0, i), t)) for (var [o, l] of eE.points(t)) t[l] = ef.transform(o, n);
                break;
            case "insert_text":
                var { path: u, offset: c, text: d } = n;
                if (0 === d.length) break;
                var _ = ea.leaf(e, u),
                    f = _.text.slice(0, c),
                    h = _.text.slice(c);
                if (((_.text = f + d + h), t)) for (var [p, g] of eE.points(t)) t[g] = ef.transform(p, n);
                break;
            case "merge_node":
                var { path: E } = n,
                    A = ea.get(e, E),
                    I = eu.previous(E),
                    T = ea.get(e, I),
                    y = ea.parent(e, E),
                    S = E[E.length - 1];
                if (eN.isText(A) && eN.isText(T)) T.text += A.text;
                else if (eN.isText(A) || eN.isText(T))
                    throw Error(
                        'Cannot apply a "merge_node" operation at path ['
                            .concat(E, "] to nodes of different interfaces: ")
                            .concat(eT.stringify(A), " ")
                            .concat(eT.stringify(T)),
                    );
                else T.children.push(...A.children);
                if ((y.children.splice(S, 1), t)) for (var [v, C] of eE.points(t)) t[C] = ef.transform(v, n);
                break;
            case "move_node":
                var { path: b, newPath: N } = n;
                if (eu.isAncestor(b, N))
                    throw Error(
                        "Cannot move a path ["
                            .concat(b, "] to new path [")
                            .concat(N, "] because the destination is inside itself."),
                    );
                var R = ea.get(e, b),
                    O = ea.parent(e, b),
                    D = b[b.length - 1];
                O.children.splice(D, 1);
                var L = eu.transform(b, n),
                    w = ea.get(e, eu.parent(L)),
                    x = L[L.length - 1];
                if ((w.children.splice(x, 0, R), t)) for (var [P, M] of eE.points(t)) t[M] = ef.transform(P, n);
                break;
            case "remove_node":
                var { path: k } = n,
                    U = k[k.length - 1];
                if ((ea.parent(e, k).children.splice(U, 1), t))
                    for (var [G, F] of eE.points(t)) {
                        var V = ef.transform(G, n);
                        if (null != t && null != V) t[F] = V;
                        else {
                            var B = void 0,
                                j = void 0;
                            for (var [H, Y] of ea.texts(e))
                                if (-1 === eu.compare(Y, k)) B = [H, Y];
                                else {
                                    j = [H, Y];
                                    break;
                                }
                            var W = !1;
                            B &&
                                j &&
                                (W = eu.equals(j[1], k)
                                    ? !eu.hasPrevious(j[1])
                                    : eu.common(B[1], k).length < eu.common(j[1], k).length),
                                B && !W
                                    ? ((G.path = B[1]), (G.offset = B[0].text.length))
                                    : j
                                      ? ((G.path = j[1]), (G.offset = 0))
                                      : (t = null);
                        }
                    }
                break;
            case "remove_text":
                var { path: K, offset: $, text: z } = n;
                if (0 === z.length) break;
                var q = ea.leaf(e, K),
                    X = q.text.slice(0, $),
                    Z = q.text.slice($ + z.length);
                if (((q.text = X + Z), t)) for (var [Q, J] of eE.points(t)) t[J] = ef.transform(Q, n);
                break;
            case "set_node":
                var { path: ee, properties: et, newProperties: en } = n;
                if (0 === ee.length) throw Error("Cannot set properties on the root node!");
                var er = ea.get(e, ee);
                for (var ei in en) {
                    if ("children" === ei || "text" === ei)
                        throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                    var es = en[ei];
                    null == es ? delete er[ei] : (er[ei] = es);
                }
                for (var eo in et) en.hasOwnProperty(eo) || delete er[eo];
                break;
            case "set_selection":
                var { newProperties: el } = n;
                if (null == el) t = el;
                else {
                    if (null == t) {
                        if (!eE.isRange(el))
                            throw Error(
                                'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    eT.stringify(el),
                                    " when there is no current selection.",
                                ),
                            );
                        t = eO({}, el);
                    }
                    for (var ec in el) {
                        var ed = el[ec];
                        if (null == ed) {
                            if ("anchor" === ec || "focus" === ec)
                                throw Error('Cannot remove the "'.concat(ec, '" selection property'));
                            delete t[ec];
                        } else t[ec] = ed;
                    }
                }
                break;
            case "split_node":
                var e_,
                    { path: eh, position: ep, properties: em } = n;
                if (0 === eh.length)
                    throw Error(
                        'Cannot apply a "split_node" operation at path ['.concat(
                            eh,
                            "] because the root node cannot be split.",
                        ),
                    );
                var eg = ea.get(e, eh),
                    eA = ea.parent(e, eh),
                    eI = eh[eh.length - 1];
                if (eN.isText(eg)) {
                    var ey = eg.text.slice(0, ep),
                        eS = eg.text.slice(ep);
                    (eg.text = ey), (e_ = eO(eO({}, em), {}, { text: eS }));
                } else {
                    var ev = eg.children.slice(0, ep),
                        eC = eg.children.slice(ep);
                    (eg.children = ev), (e_ = eO(eO({}, em), {}, { children: eC }));
                }
                if ((eA.children.splice(eI + 1, 0, e_), t))
                    for (var [eb, eR] of eE.points(t)) t[eR] = ef.transform(eb, n);
        }
        return t;
    },
    eL = {
        transform(e, t) {
            e.children = (0, a.mq)(e.children);
            var n = e.selection && (0, a.mq)(e.selection);
            try {
                n = eD(e, n, t);
            } finally {
                (e.children = (0, a.vD)(e.children)),
                    n ? (e.selection = (0, a.Qx)(n) ? (0, a.vD)(n) : n) : (e.selection = null);
            }
        },
    },
    ew = ["text"],
    ex = ["children"];
function eP(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eM(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eP(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eP(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ek = {
        insertNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { hanging: r = !1, voids: i = !1, mode: a = "lowest" } = n,
                    { at: s, match: o, select: l } = n;
                if ((ea.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [u] = t;
                    if (
                        (s || ((s = e.selection ? e.selection : e.children.length > 0 ? ee.end(e, []) : [0]), (l = !0)),
                        null == l && (l = !1),
                        eE.isRange(s))
                    )
                        if ((r || (s = ee.unhangRange(e, s, { voids: i })), eE.isCollapsed(s))) s = s.anchor;
                        else {
                            var [, c] = eE.edges(s),
                                d = ee.pointRef(e, c);
                            eK.delete(e, { at: s }), (s = d.unref());
                        }
                    if (ef.isPoint(s)) {
                        null == o &&
                            (o = eN.isText(u)
                                ? (e) => eN.isText(e)
                                : e.isInline(u)
                                  ? (t) => eN.isText(t) || ee.isInline(e, t)
                                  : (t) => z.isElement(t) && ee.isBlock(e, t));
                        var [_] = ee.nodes(e, { at: s.path, match: o, mode: a, voids: i });
                        if (!_) return;
                        var [, f] = _,
                            h = ee.pathRef(e, f),
                            p = ee.isEnd(e, s, f);
                        eK.splitNodes(e, { at: s, match: o, mode: a, voids: i });
                        var g = h.unref();
                        s = p ? eu.next(g) : g;
                    }
                    var E = eu.parent(s),
                        A = s[s.length - 1];
                    if (!(!i && ee.void(e, { at: E }))) {
                        for (var I of t) {
                            var T = E.concat(A);
                            A++, e.apply({ type: "insert_node", path: T, node: I }), (s = eu.next(s));
                        }
                        if (((s = eu.previous(s)), l)) {
                            var y = ee.end(e, s);
                            y && eK.select(e, y);
                        }
                    }
                }
            });
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
                    { match: a } = t;
                if ((null == a && (a = eu.isPath(n) ? eF(e, n) : (t) => z.isElement(t) && ee.isBlock(e, t)), n)) {
                    var s = ee.nodes(e, { at: n, match: a, mode: r, voids: i }),
                        o = Array.from(s, (t) => {
                            var [, n] = t;
                            return ee.pathRef(e, n);
                        });
                    for (var l of o) {
                        var u = l.unref();
                        if (u.length < 2)
                            throw Error(
                                "Cannot lift node at a path [".concat(u, "] because it has a depth of less than `2`."),
                            );
                        var [c, d] = ee.node(e, eu.parent(u)),
                            _ = u[u.length - 1],
                            { length: f } = c.children;
                        if (1 === f) {
                            var h = eu.next(d);
                            eK.moveNodes(e, { at: u, to: h, voids: i }), eK.removeNodes(e, { at: d, voids: i });
                        } else if (0 === _) eK.moveNodes(e, { at: u, to: d, voids: i });
                        else if (_ === f - 1) {
                            var p = eu.next(d);
                            eK.moveNodes(e, { at: u, to: p, voids: i });
                        } else {
                            var g = eu.next(u),
                                E = eu.next(d);
                            eK.splitNodes(e, { at: g, voids: i }), eK.moveNodes(e, { at: u, to: E, voids: i });
                        }
                    }
                }
            });
        },
        mergeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var n,
                    r,
                    { match: i, at: a = e.selection } = t,
                    { hanging: s = !1, voids: o = !1, mode: l = "lowest" } = t;
                if (a) {
                    if (null == i)
                        if (eu.isPath(a)) {
                            var [u] = ee.parent(e, a);
                            i = (e) => u.children.includes(e);
                        } else i = (t) => z.isElement(t) && ee.isBlock(e, t);
                    if ((!s && eE.isRange(a) && (a = ee.unhangRange(e, a, { voids: o })), eE.isRange(a)))
                        if (eE.isCollapsed(a)) a = a.anchor;
                        else {
                            var [, c] = eE.edges(a),
                                d = ee.pointRef(e, c);
                            eK.delete(e, { at: a }), (a = d.unref()), null == t.at && eK.select(e, a);
                        }
                    var [_] = ee.nodes(e, { at: a, match: i, voids: o, mode: l }),
                        f = ee.previous(e, { at: a, match: i, voids: o, mode: l });
                    if (_ && f) {
                        var [h, p] = _,
                            [g, E] = f;
                        if (0 !== p.length && 0 !== E.length) {
                            var I = eu.next(E),
                                T = eu.common(p, E),
                                y = eu.isSibling(p, E),
                                S = Array.from(ee.levels(e, { at: p }), (e) => {
                                    var [t] = e;
                                    return t;
                                })
                                    .slice(T.length)
                                    .slice(0, -1),
                                v = ee.above(e, { at: p, mode: "highest", match: (t) => S.includes(t) && eU(e, t) }),
                                C = v && ee.pathRef(e, v[1]);
                            if (eN.isText(h) && eN.isText(g)) {
                                var b = A(h, ew);
                                (r = g.text.length), (n = b);
                            } else if (z.isElement(h) && z.isElement(g)) {
                                var b = A(h, ex);
                                (r = g.children.length), (n = b);
                            } else
                                throw Error(
                                    "Cannot merge the node at path ["
                                        .concat(p, "] with the previous sibling because it is not the same kind: ")
                                        .concat(eT.stringify(h), " ")
                                        .concat(eT.stringify(g)),
                                );
                            y || eK.moveNodes(e, { at: p, to: I, voids: o }),
                                C && eK.removeNodes(e, { at: C.current, voids: o }),
                                (z.isElement(g) && ee.isEmpty(e, g)) ||
                                (eN.isText(g) && "" === g.text && 0 !== E[E.length - 1])
                                    ? eK.removeNodes(e, { at: E, voids: o })
                                    : e.apply({ type: "merge_node", path: I, position: r, properties: n }),
                                C && C.unref();
                        }
                    }
                }
            });
        },
        moveNodes(e, t) {
            ee.withoutNormalizing(e, () => {
                var { to: n, at: r = e.selection, mode: i = "lowest", voids: a = !1 } = t,
                    { match: s } = t;
                if (r) {
                    null == s && (s = eu.isPath(r) ? eF(e, r) : (t) => z.isElement(t) && ee.isBlock(e, t));
                    var o = ee.pathRef(e, n),
                        l = ee.nodes(e, { at: r, match: s, mode: i, voids: a }),
                        u = Array.from(l, (t) => {
                            var [, n] = t;
                            return ee.pathRef(e, n);
                        });
                    for (var c of u) {
                        var d = c.unref(),
                            _ = o.current;
                        0 !== d.length && e.apply({ type: "move_node", path: d, newPath: _ }),
                            o.current && eu.isSibling(_, d) && eu.isAfter(_, d) && (o.current = eu.next(o.current));
                    }
                    o.unref();
                }
            });
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
                    { at: a = e.selection, match: s } = t;
                if (a) {
                    null == s && (s = eu.isPath(a) ? eF(e, a) : (t) => z.isElement(t) && ee.isBlock(e, t)),
                        !n && eE.isRange(a) && (a = ee.unhangRange(e, a, { voids: r }));
                    var o = ee.nodes(e, { at: a, match: s, mode: i, voids: r }),
                        l = Array.from(o, (t) => {
                            var [, n] = t;
                            return ee.pathRef(e, n);
                        });
                    for (var u of l) {
                        var c = u.unref();
                        if (c) {
                            var [d] = ee.node(e, c);
                            e.apply({ type: "remove_node", path: c, node: d });
                        }
                    }
                }
            });
        },
        setNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { match: r, at: i = e.selection, compare: a, merge: s } = n,
                    { hanging: o = !1, mode: l = "lowest", split: u = !1, voids: c = !1 } = n;
                if (i) {
                    if (
                        (null == r && (r = eu.isPath(i) ? eF(e, i) : (t) => z.isElement(t) && ee.isBlock(e, t)),
                        !o && eE.isRange(i) && (i = ee.unhangRange(e, i, { voids: c })),
                        u && eE.isRange(i))
                    ) {
                        if (eE.isCollapsed(i) && ee.leaf(e, i.anchor)[0].text.length > 0) return;
                        var d = ee.rangeRef(e, i, { affinity: "inward" }),
                            [_, f] = eE.edges(i),
                            h = "lowest" === l ? "lowest" : "highest",
                            p = ee.isEnd(e, f, f.path);
                        eK.splitNodes(e, { at: f, match: r, mode: h, voids: c, always: !p });
                        var g = ee.isStart(e, _, _.path);
                        eK.splitNodes(e, { at: _, match: r, mode: h, voids: c, always: !g }),
                            (i = d.unref()),
                            null == n.at && eK.select(e, i);
                    }
                    for (var [E, A] of (a || (a = (e, t) => e !== t),
                    ee.nodes(e, { at: i, match: r, mode: l, voids: c }))) {
                        var I = {},
                            T = {};
                        if (0 !== A.length) {
                            var y = !1;
                            for (var S in t)
                                "children" !== S &&
                                    "text" !== S &&
                                    a(t[S], E[S]) &&
                                    ((y = !0),
                                    E.hasOwnProperty(S) && (I[S] = E[S]),
                                    s ? null != t[S] && (T[S] = s(E[S], t[S])) : null != t[S] && (T[S] = t[S]));
                            y && e.apply({ type: "set_node", path: A, properties: I, newProperties: T });
                        }
                    }
                }
            });
        },
        splitNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var n,
                    r,
                    { mode: i = "lowest", voids: a = !1 } = t,
                    { match: s, at: o = e.selection, height: l = 0, always: u = !1 } = t;
                if (
                    (null == s && (s = (t) => z.isElement(t) && ee.isBlock(e, t)),
                    eE.isRange(o) && (o = eG(e, o)),
                    eu.isPath(o))
                ) {
                    var c = o,
                        d = ee.point(e, c),
                        [_] = ee.parent(e, c);
                    (s = (e) => e === _), (l = d.path.length - c.length + 1), (o = d), (u = !0);
                }
                if (o) {
                    var f = ee.pointRef(e, o, { affinity: "backward" });
                    try {
                        var [h] = ee.nodes(e, { at: o, match: s, mode: i, voids: a });
                        if (!h) return;
                        var p = ee.void(e, { at: o, mode: "highest" }),
                            g = 0;
                        if (!a && p) {
                            var [E, A] = p;
                            if (z.isElement(E) && e.isInline(E)) {
                                var I = ee.after(e, A);
                                if (!I) {
                                    var T = { text: "" },
                                        y = eu.next(A);
                                    eK.insertNodes(e, T, { at: y, voids: a }), (I = ee.point(e, y));
                                }
                                (o = I), (u = !0);
                            }
                            (l = o.path.length - A.length + 1), (u = !0);
                        }
                        n = ee.pointRef(e, o);
                        var S = o.path.length - l,
                            [, v] = h,
                            C = o.path.slice(0, S),
                            b = 0 === l ? o.offset : o.path[S] + g;
                        for (var [N, R] of ee.levels(e, { at: C, reverse: !0, voids: a })) {
                            var O = !1;
                            if (R.length < v.length || 0 === R.length || (!a && z.isElement(N) && ee.isVoid(e, N)))
                                break;
                            var D = f.current,
                                L = ee.isEnd(e, D, R);
                            if (u || !f || !ee.isEdge(e, D, R)) {
                                O = !0;
                                var w = ea.extractProps(N);
                                e.apply({ type: "split_node", path: R, position: b, properties: w });
                            }
                            b = R[R.length - 1] + (O || L ? 1 : 0);
                        }
                        if (null == t.at) {
                            var x = n.current || ee.end(e, []);
                            eK.select(e, x);
                        }
                    } finally {
                        f.unref(), null == (r = n) || r.unref();
                    }
                }
            });
        },
        unsetNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Array.isArray(t) || (t = [t]);
            var r = {};
            for (var i of t) r[i] = null;
            eK.setNodes(e, r, n);
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                    { at: a = e.selection, match: s } = t;
                if (a) {
                    null == s && (s = eu.isPath(a) ? eF(e, a) : (t) => z.isElement(t) && ee.isBlock(e, t)),
                        eu.isPath(a) && (a = ee.range(e, a));
                    var o = eE.isRange(a) ? ee.rangeRef(e, a) : null,
                        l = ee.nodes(e, { at: a, match: s, mode: n, voids: i }),
                        u = Array.from(l, (t) => {
                            var [, n] = t;
                            return ee.pathRef(e, n);
                        }).reverse(),
                        c = function (t) {
                            var n = t.unref(),
                                [a] = ee.node(e, n),
                                s = ee.range(e, n);
                            r && o && (s = eE.intersection(o.current, s)),
                                eK.liftNodes(e, {
                                    at: s,
                                    match: (e) => z.isAncestor(a) && a.children.includes(e),
                                    voids: i,
                                });
                        };
                    for (var d of u) c(d);
                    o && o.unref();
                }
            });
        },
        wrapNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { mode: r = "lowest", split: i = !1, voids: a = !1 } = n,
                    { match: s, at: o = e.selection } = n;
                if (o) {
                    if (
                        (null == s &&
                            (s = eu.isPath(o)
                                ? eF(e, o)
                                : e.isInline(t)
                                  ? (t) => (z.isElement(t) && ee.isInline(e, t)) || eN.isText(t)
                                  : (t) => z.isElement(t) && ee.isBlock(e, t)),
                        i && eE.isRange(o))
                    ) {
                        var [l, u] = eE.edges(o),
                            c = ee.rangeRef(e, o, { affinity: "inward" });
                        eK.splitNodes(e, { at: u, match: s, voids: a }),
                            eK.splitNodes(e, { at: l, match: s, voids: a }),
                            (o = c.unref()),
                            null == n.at && eK.select(e, o);
                    }
                    var d = Array.from(
                        ee.nodes(e, {
                            at: o,
                            match: e.isInline(t) ? (t) => z.isElement(t) && ee.isBlock(e, t) : (e) => ee.isEditor(e),
                            mode: "lowest",
                            voids: a,
                        }),
                    );
                    for (var [, _] of d) {
                        var f = eE.isRange(o) ? eE.intersection(o, ee.range(e, _)) : o;
                        if (f) {
                            var h = Array.from(ee.nodes(e, { at: f, match: s, mode: r, voids: a }));
                            if (
                                h.length > 0 &&
                                "continue" ===
                                    (function () {
                                        var [n] = h,
                                            r = h[h.length - 1],
                                            [, i] = n,
                                            [, s] = r;
                                        if (0 === i.length && 0 === s.length) return "continue";
                                        var o = eu.equals(i, s) ? eu.parent(i) : eu.common(i, s),
                                            l = ee.range(e, i, s),
                                            [u] = ee.node(e, o),
                                            c = o.length + 1,
                                            d = eu.next(s.slice(0, c)),
                                            _ = eM(eM({}, t), {}, { children: [] });
                                        eK.insertNodes(e, _, { at: d, voids: a }),
                                            eK.moveNodes(e, {
                                                at: l,
                                                match: (e) => z.isAncestor(u) && u.children.includes(e),
                                                to: d.concat(0),
                                                voids: a,
                                            });
                                    })()
                            )
                                continue;
                        }
                    }
                }
            });
        },
    },
    eU = (e, t) => {
        if (z.isElement(t)) {
            var n = t;
            return !!ee.isVoid(e, t) || (1 === n.children.length && eU(e, n.children[0]));
        }
        return !ee.isEditor(t) && !0;
    },
    eG = (e, t) => {
        if (eE.isCollapsed(t)) return t.anchor;
        var [, n] = eE.edges(t),
            r = ee.pointRef(e, n);
        return eK.delete(e, { at: t }), r.unref();
    },
    eF = (e, t) => {
        var [n] = ee.node(e, t);
        return (e) => e === n;
    };
function eV(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eB(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eV(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eV(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ej = {
        collapse(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { edge: n = "anchor" } = t,
                { selection: r } = e;
            if (r) {
                if ("anchor" === n) eK.select(e, r.anchor);
                else if ("focus" === n) eK.select(e, r.focus);
                else if ("start" === n) {
                    var [i] = eE.edges(r);
                    eK.select(e, i);
                } else if ("end" === n) {
                    var [, a] = eE.edges(r);
                    eK.select(e, a);
                }
            }
        },
        deselect(e) {
            var { selection: t } = e;
            t && e.apply({ type: "set_selection", properties: t, newProperties: null });
        },
        move(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { selection: n } = e,
                { distance: r = 1, unit: i = "character", reverse: a = !1 } = t,
                { edge: s = null } = t;
            if (n) {
                "start" === s && (s = eE.isBackward(n) ? "focus" : "anchor"),
                    "end" === s && (s = eE.isBackward(n) ? "anchor" : "focus");
                var { anchor: o, focus: l } = n,
                    u = { distance: r, unit: i },
                    c = {};
                if (null == s || "anchor" === s) {
                    var d = a ? ee.before(e, o, u) : ee.after(e, o, u);
                    d && (c.anchor = d);
                }
                if (null == s || "focus" === s) {
                    var _ = a ? ee.before(e, l, u) : ee.after(e, l, u);
                    _ && (c.focus = _);
                }
                eK.setSelection(e, c);
            }
        },
        select(e, t) {
            var { selection: n } = e;
            if (((t = ee.range(e, t)), n)) return void eK.setSelection(e, t);
            if (!eE.isRange(t))
                throw Error(
                    "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                        eT.stringify(t),
                    ),
                );
            e.apply({ type: "set_selection", properties: n, newProperties: t });
        },
        setPoint(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { selection: r } = e,
                { edge: i = "both" } = n;
            if (r) {
                "start" === i && (i = eE.isBackward(r) ? "focus" : "anchor"),
                    "end" === i && (i = eE.isBackward(r) ? "anchor" : "focus");
                var { anchor: a, focus: s } = r,
                    o = "anchor" === i ? a : s;
                eK.setSelection(e, { ["anchor" === i ? "anchor" : "focus"]: eB(eB({}, o), t) });
            }
        },
        setSelection(e, t) {
            var { selection: n } = e,
                r = {},
                i = {};
            if (n) {
                for (var a in t)
                    (("anchor" !== a || null == t.anchor || ef.equals(t.anchor, n.anchor)) &&
                        ("focus" !== a || null == t.focus || ef.equals(t.focus, n.focus)) &&
                        ("anchor" === a || "focus" === a || t[a] === n[a])) ||
                        ((r[a] = n[a]), (i[a] = t[a]));
                Object.keys(r).length > 0 && e.apply({ type: "set_selection", properties: r, newProperties: i });
            }
        },
    },
    eH = {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ee.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: i = "character", distance: a = 1, voids: s = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var u = !1;
                    if ((eE.isRange(o) && eE.isCollapsed(o) && ((u = !0), (o = o.anchor)), ef.isPoint(o))) {
                        var c = ee.void(e, { at: o, mode: "highest" });
                        if (!s && c) {
                            var [, d] = c;
                            o = d;
                        } else {
                            var _ = { unit: i, distance: a },
                                f = r ? ee.before(e, o, _) || ee.start(e, []) : ee.after(e, o, _) || ee.end(e, []);
                            (o = { anchor: o, focus: f }), (l = !0);
                        }
                    }
                    if (eu.isPath(o)) return void eK.removeNodes(e, { at: o, voids: s });
                    if (!eE.isCollapsed(o)) {
                        if (!l) {
                            var [, h] = eE.edges(o),
                                p = ee.end(e, []);
                            ef.equals(h, p) || (o = ee.unhangRange(e, o, { voids: s }));
                        }
                        var [g, E] = eE.edges(o),
                            A = ee.above(e, { match: (t) => z.isElement(t) && ee.isBlock(e, t), at: g, voids: s }),
                            I = ee.above(e, { match: (t) => z.isElement(t) && ee.isBlock(e, t), at: E, voids: s }),
                            T = A && I && !eu.equals(A[1], I[1]),
                            y = eu.equals(g.path, E.path),
                            S = s ? null : ee.void(e, { at: g, mode: "highest" }),
                            v = s ? null : ee.void(e, { at: E, mode: "highest" });
                        if (S) {
                            var C = ee.before(e, g);
                            C && A && eu.isAncestor(A[1], C.path) && (g = C);
                        }
                        if (v) {
                            var b = ee.after(e, E);
                            b && I && eu.isAncestor(I[1], b.path) && (E = b);
                        }
                        var N = [];
                        for (var R of ee.nodes(e, { at: o, voids: s })) {
                            var [O, D] = R;
                            (!n || 0 !== eu.compare(D, n)) &&
                                ((!s && z.isElement(O) && ee.isVoid(e, O)) ||
                                    (!eu.isCommon(D, g.path) && !eu.isCommon(D, E.path))) &&
                                (N.push(R), (n = D));
                        }
                        var L = Array.from(N, (t) => {
                                var [, n] = t;
                                return ee.pathRef(e, n);
                            }),
                            w = ee.pointRef(e, g),
                            x = ee.pointRef(e, E),
                            P = "";
                        if (!y && !S) {
                            var M = w.current,
                                [k] = ee.leaf(e, M),
                                { path: U } = M,
                                { offset: G } = g,
                                F = k.text.slice(G);
                            F.length > 0 && (e.apply({ type: "remove_text", path: U, offset: G, text: F }), (P = F));
                        }
                        if (
                            (L.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => eK.removeNodes(e, { at: t, voids: s })),
                            !v)
                        ) {
                            var V = x.current,
                                [B] = ee.leaf(e, V),
                                { path: j } = V,
                                H = y ? g.offset : 0,
                                Y = B.text.slice(H, E.offset);
                            Y.length > 0 && (e.apply({ type: "remove_text", path: j, offset: H, text: Y }), (P = Y));
                        }
                        !y && T && x.current && w.current && eK.mergeNodes(e, { at: x.current, hanging: !0, voids: s }),
                            u &&
                                r &&
                                "character" === i &&
                                P.length > 1 &&
                                P.match(/[\u0E00-\u0E7F]+/) &&
                                eK.insertText(e, P.slice(0, P.length - a));
                        var W = w.unref(),
                            K = x.unref(),
                            $ = r ? W || K : K || W;
                        null == t.at && $ && eK.select(e, $);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var r,
                    { hanging: i = !1, voids: a = !1 } = n,
                    { at: s = e.selection } = n;
                if (t.length) {
                    if (s) {
                        if (eE.isRange(s))
                            if ((i || (s = ee.unhangRange(e, s, { voids: a })), eE.isCollapsed(s))) s = s.anchor;
                            else {
                                var [, o] = eE.edges(s);
                                if (!a && ee.void(e, { at: o })) return;
                                var l = ee.pointRef(e, o);
                                eK.delete(e, { at: s }), (s = l.unref());
                            }
                        else eu.isPath(s) && (s = ee.start(e, s));
                        if (!(!a && ee.void(e, { at: s }))) {
                            var u = ee.above(e, {
                                at: s,
                                match: (t) => z.isElement(t) && ee.isInline(e, t),
                                mode: "highest",
                                voids: a,
                            });
                            if (u) {
                                var [, c] = u;
                                ee.isEnd(e, s, c) ? (s = ee.after(e, c)) : ee.isStart(e, s, c) && (s = ee.before(e, c));
                            }
                            var d = ee.above(e, { match: (t) => z.isElement(t) && ee.isBlock(e, t), at: s, voids: a }),
                                [, _] = d,
                                f = ee.isStart(e, s, _),
                                h = ee.isEnd(e, s, _),
                                p = f && h,
                                g = !f || (f && h),
                                E = !h,
                                [, A] = ea.first({ children: t }, []),
                                [, I] = ea.last({ children: t }, []),
                                T = [],
                                y = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!p ||
                                            !(
                                                (g &&
                                                    eu.isAncestor(r, A) &&
                                                    z.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (E &&
                                                    eu.isAncestor(r, I) &&
                                                    z.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var S of ea.nodes({ children: t }, { pass: y })) y(S) && T.push(S);
                            var v = [],
                                C = [],
                                b = [],
                                N = !0,
                                R = !1;
                            for (var [O] of T)
                                z.isElement(O) && !e.isInline(O)
                                    ? ((N = !1), (R = !0), C.push(O))
                                    : N
                                      ? v.push(O)
                                      : b.push(O);
                            var [D] = ee.nodes(e, {
                                    at: s,
                                    match: (t) => eN.isText(t) || ee.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                [, L] = D,
                                w = ee.isStart(e, s, L),
                                x = ee.isEnd(e, s, L),
                                P = ee.pathRef(e, h && !b.length ? eu.next(_) : _),
                                M = ee.pathRef(e, x ? eu.next(L) : L);
                            eK.splitNodes(e, {
                                at: s,
                                match: (t) =>
                                    R ? z.isElement(t) && ee.isBlock(e, t) : eN.isText(t) || ee.isInline(e, t),
                                mode: R ? "lowest" : "highest",
                                always: R && (!f || v.length > 0) && (!h || b.length > 0),
                                voids: a,
                            });
                            var k = ee.pathRef(e, !w || (w && x) ? eu.next(L) : L);
                            if (
                                (eK.insertNodes(e, v, {
                                    at: k.current,
                                    match: (t) => eN.isText(t) || ee.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                p && !v.length && C.length && !b.length && eK.delete(e, { at: _, voids: a }),
                                eK.insertNodes(e, C, {
                                    at: P.current,
                                    match: (t) => z.isElement(t) && ee.isBlock(e, t),
                                    mode: "lowest",
                                    voids: a,
                                }),
                                eK.insertNodes(e, b, {
                                    at: M.current,
                                    match: (t) => eN.isText(t) || ee.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                !n.at &&
                                    (b.length > 0 && M.current
                                        ? (r = eu.previous(M.current))
                                        : C.length > 0 && P.current
                                          ? (r = eu.previous(P.current))
                                          : k.current && (r = eu.previous(k.current)),
                                    r))
                            ) {
                                var U = ee.end(e, r);
                                eK.select(e, U);
                            }
                            k.unref(), P.unref(), M.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ee.withoutNormalizing(e, () => {
                var { voids: r = !1 } = n,
                    { at: i = e.selection } = n;
                if (i) {
                    if ((eu.isPath(i) && (i = ee.range(e, i)), eE.isRange(i)))
                        if (eE.isCollapsed(i)) i = i.anchor;
                        else {
                            var a = eE.end(i);
                            if (!r && ee.void(e, { at: a })) return;
                            var s = eE.start(i),
                                o = ee.pointRef(e, s),
                                l = ee.pointRef(e, a);
                            eK.delete(e, { at: i, voids: r });
                            var u = o.unref(),
                                c = l.unref();
                            (i = u || c), eK.setSelection(e, { anchor: i, focus: i });
                        }
                    if (!(!r && ee.void(e, { at: i }))) {
                        var { path: d, offset: _ } = i;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: _, text: t });
                    }
                }
            });
        },
    };
function eY(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eW(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eY(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eY(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eK = eW(eW(eW(eW({}, eL), ek), ej), eH);
