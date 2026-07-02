"use strict";
n.d(t, {
    EY: () => eT,
    Hg: () => W,
    KE: () => X,
    Q6: () => em,
    bP: () => en,
    bR: () => eu,
    gB: () => eP,
    h6: () => eh,
    ie: () => h,
    wA: () => eo,
});
var r,
    a,
    i = n(694260),
    o = n(159563);
function s(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var l = new WeakMap(),
    c = new WeakMap(),
    u = new WeakMap(),
    d = new WeakMap(),
    _ = new WeakMap(),
    p = new WeakMap(),
    m = new WeakMap();
function f(e, t) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? f(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var h = () => {
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
            for (var n of X.pathRefs(e)) es.transform(n, t);
            for (var r of X.pointRefs(e)) ed.transform(r, t);
            for (var a of X.rangeRefs(e)) ef.transform(a, t);
            var i,
                o,
                s = l.get(e) || [],
                d = c.get(e) || new Set(),
                _ = (e) => {
                    if (e) {
                        var t = e.join(",");
                        o.has(t) || (o.add(t), i.push(e));
                    }
                };
            if (eo.operationCanTransformPath(t)) for (var p of ((i = []), (o = new Set()), s)) _(eo.transform(p, t));
            else (i = s), (o = d);
            for (var m of e.getDirtyPaths(t)) _(m);
            l.set(e, i),
                c.set(e, o),
                eP.transform(e, t),
                e.operations.push(t),
                X.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                u.get(e) ||
                    (u.set(e, !0),
                    Promise.resolve().then(() => {
                        u.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: r, markableVoid: a } = e;
            if (r) {
                var i = (t, n) => {
                        if (!eT.isText(t)) return !1;
                        var [r, a] = X.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    o = em.isExpanded(r),
                    s = !1;
                if (!o) {
                    var [l, c] = X.node(e, r);
                    if (l && i(l, c)) {
                        var [d] = X.parent(e, c);
                        s = d && e.markableVoid(d);
                    }
                }
                if (o || s) eP.setNodes(e, { [t]: n }, { match: i, split: !0, voids: !0 });
                else {
                    var _ = g(g({}, X.marks(e) || {}), {}, { [t]: n });
                    (e.marks = _), u.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && em.isCollapsed(n) && eP.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && em.isCollapsed(n) && eP.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && em.isExpanded(n) && eP.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? en.fragment(e, t) : [];
        },
        insertBreak: () => {
            eP.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eP.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            eP.insertFragment(e, t);
        },
        insertNode: (t) => {
            eP.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
                if (r) {
                    var a = g({ text: t }, r);
                    eP.insertNodes(e, a);
                } else eP.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!eT.isText(n)) {
                if (W.isElement(n) && 0 === n.children.length)
                    return void eP.insertNodes(e, { text: "" }, { at: r.concat(0), voids: !0 });
                for (
                    var a =
                            !X.isEditor(n) &&
                            W.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                eT.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        i = 0,
                        o = 0;
                    o < n.children.length;
                    o++, i++
                ) {
                    var s = en.get(e, r);
                    if (!eT.isText(s)) {
                        var l = n.children[o],
                            c = s.children[i - 1],
                            u = o === n.children.length - 1;
                        if ((eT.isText(l) || (W.isElement(l) && e.isInline(l))) !== a)
                            eP.removeNodes(e, { at: r.concat(i), voids: !0 }), i--;
                        else if (W.isElement(l)) {
                            if (e.isInline(l))
                                if (null != c && eT.isText(c)) {
                                    if (u) {
                                        var d = { text: "" };
                                        eP.insertNodes(e, d, { at: r.concat(i + 1), voids: !0 }), i++;
                                    }
                                } else {
                                    var _ = { text: "" };
                                    eP.insertNodes(e, _, { at: r.concat(i), voids: !0 }), i++;
                                }
                        } else
                            null != c &&
                                eT.isText(c) &&
                                (eT.equals(l, c, { loose: !0 })
                                    ? (eP.mergeNodes(e, { at: r.concat(i), voids: !0 }), i--)
                                    : "" === c.text
                                      ? (eP.removeNodes(e, { at: r.concat(i - 1), voids: !0 }), i--)
                                      : "" === l.text && (eP.removeNodes(e, { at: r.concat(i), voids: !0 }), i--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!eT.isText(t)) return !1;
                        var [r, a] = X.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    a = em.isExpanded(n),
                    i = !1;
                if (!a) {
                    var [o, s] = X.node(e, n);
                    if (o && r(o, s)) {
                        var [l] = X.parent(e, s);
                        i = l && e.markableVoid(l);
                    }
                }
                if (a || i) eP.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
                else {
                    var c = g({}, X.marks(e) || {});
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
                    return eo.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...eo.levels(r),
                        ...(eT.isText(n)
                            ? []
                            : Array.from(en.nodes(n), (e) => {
                                  var [, t] = e;
                                  return r.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: a } = e;
                    return [...eo.ancestors(a), eo.previous(a)];
                case "move_node":
                    var { path: i, newPath: o } = e;
                    if (eo.equals(i, o)) return [];
                    var s = [],
                        l = [];
                    for (var c of eo.ancestors(i)) {
                        var u = eo.transform(c, e);
                        s.push(u);
                    }
                    for (var d of eo.ancestors(o)) {
                        var _ = eo.transform(d, e);
                        l.push(_);
                    }
                    var p = l[l.length - 1],
                        m = o[o.length - 1];
                    return [...s, ...l, p.concat(m)];
                case "remove_node":
                    var { path: f } = e;
                    return [...eo.ancestors(f)];
                case "split_node":
                    var { path: g } = e;
                    return [...eo.levels(g), eo.next(g)];
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
var E = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            r = t ? O(e) : e,
            i = a.None,
            o = a.None,
            s = 0,
            l = null;
        for (var c of r) {
            var u = c.codePointAt(0);
            if (!u) break;
            var d = Y(c, u);
            if (
                (([i, o] = n ? [o, d] : [d, i]),
                (i & a.ZWJ) != 0 &&
                    (o & a.ExtPict) != 0 &&
                    !(n ? j(e.substring(0, s)) : j(e.substring(0, e.length - s))))
            )
                break;
            if (
                ((i & a.RI) != 0 &&
                    (o & a.RI) != 0 &&
                    !(l = null !== l ? !l : !!n || G(e.substring(0, e.length - s)))) ||
                (i !== a.None &&
                    o !== a.None &&
                    (function (e, t) {
                        return -1 === B.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0);
                    })(i, o))
            )
                break;
            s += c.length;
        }
        return s || 1;
    },
    y = /\s/,
    v =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    S = /['\u2018\u2019]/,
    T = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0; ) {
            var a = E(e, t),
                [i, o] = C(e, a, t);
            if (D(i, o, t)) (r = !0), (n += a);
            else if (r) break;
            else n += a;
            e = o;
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
    D = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (y.test(t)) return !1;
        if (S.test(t)) {
            var a = E(n, r),
                [i, o] = C(n, a, r);
            if (e(i, o, r)) return !0;
        }
        return !v.test(t);
    },
    O = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (A(r.charCodeAt(0))) {
                var a = e.charAt(t - n - 1);
                if (w(a.charCodeAt(0))) {
                    yield a + r, n++;
                    continue;
                }
            }
            yield r;
        }
    },
    w = (e) => e >= 55296 && e <= 56319,
    A = (e) => e >= 56320 && e <= 57343;
((r = a || (a = {}))[(r.None = 0)] = "None"),
    (r[(r.Extend = 1)] = "Extend"),
    (r[(r.ZWJ = 2)] = "ZWJ"),
    (r[(r.RI = 4)] = "RI"),
    (r[(r.Prepend = 8)] = "Prepend"),
    (r[(r.SpacingMark = 16)] = "SpacingMark"),
    (r[(r.L = 32)] = "L"),
    (r[(r.V = 64)] = "V"),
    (r[(r.T = 128)] = "T"),
    (r[(r.LV = 256)] = "LV"),
    (r[(r.LVT = 512)] = "LVT"),
    (r[(r.ExtPict = 1024)] = "ExtPict"),
    (r[(r.Any = 2048)] = "Any");
var R =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    M =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    N =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    x = /^[\u1100-\u115F\uA960-\uA97C]$/,
    L = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    k = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    I =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    P =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    F =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    Y = (e, t) => {
        var n = a.Any;
        return (
            -1 !== e.search(R) && (n |= a.Extend),
            8205 === t && (n |= a.ZWJ),
            t >= 127462 && t <= 127487 && (n |= a.RI),
            -1 !== e.search(M) && (n |= a.Prepend),
            -1 !== e.search(N) && (n |= a.SpacingMark),
            -1 !== e.search(x) && (n |= a.L),
            -1 !== e.search(L) && (n |= a.V),
            -1 !== e.search(k) && (n |= a.T),
            -1 !== e.search(I) && (n |= a.LV),
            -1 !== e.search(P) && (n |= a.LVT),
            -1 !== e.search(F) && (n |= a.ExtPict),
            n
        );
    },
    B = [
        [a.L, a.L | a.V | a.LV | a.LVT],
        [a.LV | a.V, a.V | a.T],
        [a.LVT | a.T, a.T],
        [a.Any, a.Extend | a.ZWJ],
        [a.Any, a.SpacingMark],
        [a.Prepend, a.Any],
        [a.ZWJ, a.ExtPict],
        [a.RI, a.RI],
    ],
    U =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    j = (e) => -1 !== e.search(U),
    H = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    G = (e) => {
        var t = e.match(H);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    z = (e) => (0, i.Q)(e) && en.isNodeList(e.children) && !X.isEditor(e),
    W = {
        isAncestor: (e) => (0, i.Q)(e) && en.isNodeList(e.children),
        isElement: z,
        isElementList: (e) => Array.isArray(e) && e.every((e) => W.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return z(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    q = ["text"],
    V = ["text"];
function $(e, t) {
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
            ? $(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : $(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var K = new WeakMap(),
    X = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: a = e.selection, match: i } = t;
            if (a) {
                var o = X.path(e, a);
                for (var [s, l] of X.levels(e, { at: o, voids: n, match: i, reverse: "lowest" === r }))
                    if (!eT.isText(s)) {
                        if (em.isRange(a)) {
                            if (eo.isAncestor(l, a.anchor.path) && eo.isAncestor(l, a.focus.path)) return [s, l];
                        } else if (!eo.equals(o, l)) return [s, l];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = X.point(e, t, { edge: "end" }),
                i = X.end(e, []),
                { distance: o = 1 } = r,
                s = 0;
            for (var l of X.positions(e, Q(Q({}, r), {}, { at: { anchor: a, focus: i } }))) {
                if (s > o) break;
                0 !== s && (n = l), s++;
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = X.start(e, []),
                i = X.point(e, t, { edge: "start" }),
                { distance: o = 1 } = r,
                s = 0;
            for (var l of X.positions(e, Q(Q({}, r), {}, { at: { anchor: a, focus: i }, reverse: !0 }))) {
                if (s > o) break;
                0 !== s && (n = l), s++;
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
        edges: (e, t) => [X.start(e, t), X.end(e, t)],
        end: (e, t) => X.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = X.path(e, t, { edge: "start" });
            return X.node(e, n);
        },
        fragment(e, t) {
            var n = X.range(e, t);
            return en.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => W.isElement(t) && X.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => eT.isText(t) || X.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => eT.isText(e)),
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
            var t = K.get(e);
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
                (null === e.selection || em.isRange(e.selection)) &&
                en.isNodeList(e.children) &&
                ei.isOperationList(e.operations);
            return K.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = X.end(e, n);
            return eu.equals(t, r);
        },
        isEdge: (e, t, n) => X.isStart(e, t, n) || X.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && eT.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = d.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = X.start(e, n);
            return eu.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = X.path(e, t, { edge: "end" });
            return X.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = X.path(e, t, n);
            return [en.leaf(e, r), r];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: r = !1, voids: a = !1 } = t,
                { match: i } = t;
            if ((null == i && (i = () => !0), n)) {
                var o = [],
                    s = X.path(e, n);
                for (var [l, c] of en.levels(e, s))
                    if (i(l, c) && (o.push([l, c]), !a && W.isElement(l) && X.isVoid(e, l))) break;
                r && o.reverse(), yield* o;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (em.isExpanded(n)) {
                var [r] = X.nodes(e, { match: eT.isText });
                if (!r) return {};
                var [a] = r;
                return b(a, q);
            }
            var { anchor: i } = n,
                { path: o } = i,
                [s] = X.leaf(e, o);
            if (0 === i.offset) {
                var l = X.previous(e, { at: o, match: eT.isText });
                if (!X.above(e, { match: (t) => W.isElement(t) && X.isVoid(e, t) && e.markableVoid(t) })) {
                    var c = X.above(e, { match: (t) => W.isElement(t) && X.isBlock(e, t) });
                    if (l && c) {
                        var [u, d] = l,
                            [, _] = c;
                        eo.isAncestor(_, d) && (s = u);
                    }
                }
            }
            return b(s, V);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: a, at: i = e.selection } = t;
            if (i) {
                var o = X.after(e, i, { voids: r });
                if (o) {
                    var [, s] = X.last(e, []),
                        l = [o.path, s];
                    if (eo.isPath(i) && 0 === i.length) throw Error("Cannot get the next node from the root node!");
                    if (null == a)
                        if (eo.isPath(i)) {
                            var [c] = X.parent(e, i);
                            a = (e) => c.children.includes(e);
                        } else a = () => !0;
                    var [u] = X.nodes(e, { at: l, match: a, mode: n, voids: r });
                    return u;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = X.path(e, t, n);
            return [en.get(e, r), r];
        },
        *nodes(e) {
            var t,
                n,
                r,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: i = e.selection, mode: o = "all", universal: s = !1, reverse: l = !1, voids: c = !1 } = a,
                { match: u } = a;
            if ((u || (u = () => !0), i)) {
                if (Z.isSpan(i)) (t = i[0]), (n = i[1]);
                else {
                    var d = X.path(e, i, { edge: "start" }),
                        _ = X.path(e, i, { edge: "end" });
                    (t = l ? _ : d), (n = l ? d : _);
                }
                var p = en.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !c && W.isElement(n) && X.isVoid(e, n);
                        },
                    }),
                    m = [];
                for (var [f, g] of p) {
                    var h = r && 0 === eo.compare(g, r[1]);
                    if ("highest" !== o || !h) {
                        if (!u(f, g))
                            if (s && !h && eT.isText(f)) return;
                            else continue;
                        if ("lowest" === o && h) {
                            r = [f, g];
                            continue;
                        }
                        var b = "lowest" === o ? r : [f, g];
                        b && (s ? m.push(b) : yield b), (r = [f, g]);
                    }
                }
                "lowest" === o && r && (s ? m.push(r) : yield r), s && (yield* m);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: r } = t,
                a = (e) => l.get(e) || [],
                i = (e) => {
                    var t = a(e).pop(),
                        n = t.join(",");
                    return (c.get(e) || new Set()).delete(n), t;
                };
            if (X.isNormalizing(e)) {
                if (n) {
                    var o = Array.from(en.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        s = new Set(o.map((e) => e.join(",")));
                    l.set(e, o), c.set(e, s);
                }
                0 !== a(e).length &&
                    X.withoutNormalizing(e, () => {
                        for (var t of a(e))
                            if (en.has(e, t)) {
                                var n = X.node(e, t),
                                    [o, s] = n;
                                W.isElement(o) && 0 === o.children.length && e.normalizeNode(n, { operation: r });
                            }
                        for (var l = a(e), c = l.length, u = 0; 0 !== l.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: l,
                                    iteration: u,
                                    initialDirtyPathsLength: c,
                                    operation: r,
                                })
                            )
                                return;
                            var d = i(e);
                            if (en.has(e, d)) {
                                var _ = X.node(e, d);
                                e.normalizeNode(_, { operation: r });
                            }
                            u++, (l = a(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = X.path(e, t, n),
                a = eo.parent(r);
            return X.node(e, a);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: r, edge: a } = n;
            if (eo.isPath(t)) {
                if ("start" === a) {
                    var [, i] = en.first(e, t);
                    t = i;
                } else if ("end" === a) {
                    var [, o] = en.last(e, t);
                    t = o;
                }
            }
            return (
                em.isRange(t) &&
                    (t =
                        "start" === a ? em.start(t) : "end" === a ? em.end(t) : eo.common(t.anchor.path, t.focus.path)),
                eu.isPoint(t) && (t = t.path),
                null != r && (t = t.slice(0, r)),
                t
            );
        },
        hasPath: (e, t) => en.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                a = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = a;
                        return X.pathRefs(e).delete(a), (a.current = null), t;
                    },
                };
            return X.pathRefs(e).add(a), a;
        },
        pathRefs(e) {
            var t = _.get(e);
            return t || ((t = new Set()), _.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: r = "start" } = n;
            if (eo.isPath(t)) {
                if ("end" === r) {
                    var a,
                        [, i] = en.last(e, t);
                    a = i;
                } else {
                    var [, o] = en.first(e, t);
                    a = o;
                }
                var s = en.get(e, a);
                if (!eT.isText(s))
                    throw Error(
                        "Cannot get the "
                            .concat(r, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(r, " text node."),
                    );
                return { path: a, offset: "end" === r ? s.text.length : 0 };
            }
            if (em.isRange(t)) {
                var [l, c] = em.edges(t);
                return "start" === r ? l : c;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                a = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = a;
                        return X.pointRefs(e).delete(a), (a.current = null), t;
                    },
                };
            return X.pointRefs(e).add(a), a;
        },
        pointRefs(e) {
            var t = p.get(e);
            return t || ((t = new Set()), p.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: a = !1, voids: i = !1 } = t;
            if (n) {
                var o = X.range(e, n),
                    [s, l] = em.edges(o),
                    c = a ? l : s,
                    u = !1,
                    d = "",
                    _ = 0,
                    p = 0,
                    m = 0;
                for (var [f, g] of X.nodes(e, { at: n, reverse: a, voids: i })) {
                    if (W.isElement(f)) {
                        if (!i && e.isVoid(f)) {
                            yield X.start(e, g);
                            continue;
                        }
                        if (e.isInline(f)) continue;
                        if (X.hasInlines(e, f)) {
                            var h = eo.isAncestor(g, l.path) ? l : X.end(e, g),
                                b = eo.isAncestor(g, s.path) ? s : X.start(e, g);
                            (d = X.string(e, { anchor: b, focus: h }, { voids: i })), (u = !0);
                        }
                    }
                    if (eT.isText(f)) {
                        var y,
                            v,
                            S,
                            D = eo.equals(g, c.path);
                        for (
                            D
                                ? ((p = a ? c.offset : f.text.length - c.offset), (m = c.offset))
                                : ((p = f.text.length), (m = a ? p : 0)),
                                (D || u || "offset" === r) && (yield { path: g, offset: m }, (u = !1));
                            ;
                        ) {
                            if (0 === _) {
                                if ("" === d) break;
                                (y = d),
                                    (v = r),
                                    (S = a),
                                    (d = C(
                                        d,
                                        (_ =
                                            "character" === v
                                                ? E(y, S)
                                                : "word" === v
                                                  ? T(y, S)
                                                  : "line" === v || "block" === v
                                                    ? y.length
                                                    : 1),
                                        a,
                                    )[1]);
                            }
                            if (((m = a ? m - _ : m + _), (p -= _) < 0)) {
                                _ = -p;
                                break;
                            }
                            (_ = 0), yield { path: g, offset: m };
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: a, at: i = e.selection } = t;
            if (i) {
                var o = X.before(e, i, { voids: r });
                if (o) {
                    var [, s] = X.first(e, []),
                        l = [o.path, s];
                    if (eo.isPath(i) && 0 === i.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == a)
                        if (eo.isPath(i)) {
                            var [c] = X.parent(e, i);
                            a = (e) => c.children.includes(e);
                        } else a = () => !0;
                    var [u] = X.nodes(e, { reverse: !0, at: l, match: a, mode: n, voids: r });
                    return u;
                }
            }
        },
        range: (e, t, n) => (em.isRange(t) && !n ? t : { anchor: X.start(e, t), focus: X.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                a = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = a;
                        return X.rangeRefs(e).delete(a), (a.current = null), t;
                    },
                };
            return X.rangeRefs(e).add(a), a;
        },
        rangeRefs(e) {
            var t = m.get(e);
            return t || ((t = new Set()), m.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            d.set(e, t);
        },
        start: (e, t) => X.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                a = X.range(e, t),
                [i, o] = em.edges(a),
                s = "";
            for (var [l, c] of X.nodes(e, { at: a, match: eT.isText, voids: r })) {
                var u = l.text;
                eo.equals(c, o.path) && (u = u.slice(0, o.offset)),
                    eo.equals(c, i.path) && (u = u.slice(i.offset)),
                    (s += u);
            }
            return s;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [a, i] = em.edges(t);
            if (0 !== a.offset || 0 !== i.offset || em.isCollapsed(t) || eo.hasPrevious(i.path)) return t;
            var o = X.above(e, { at: i, match: (t) => W.isElement(t) && X.isBlock(e, t), voids: r }),
                s = o ? o[1] : [],
                l = { anchor: X.start(e, a), focus: i },
                c = !0;
            for (var [u, d] of X.nodes(e, { at: l, match: eT.isText, reverse: !0, voids: r })) {
                if (c) {
                    c = !1;
                    continue;
                }
                if ("" !== u.text || eo.isBefore(d, s)) {
                    i = { path: d, offset: u.text.length };
                    break;
                }
            }
            return { anchor: a, focus: i };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return X.above(e, Q(Q({}, t), {}, { match: (t) => W.isElement(t) && X.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = X.isNormalizing(e);
            X.setNormalizing(e, !1);
            try {
                t();
            } finally {
                X.setNormalizing(e, n);
            }
            X.normalize(e);
        },
    },
    Z = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(eo.isPath) },
    J = ["children"],
    ee = ["text"],
    et = new WeakMap(),
    en = {
        ancestor(e, t) {
            var n = en.get(e, t);
            if (eT.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(eh.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of eo.ancestors(t, n)) {
                var a = [en.ancestor(e, r), r];
                yield a;
            }
        },
        child(e, t) {
            if (eT.isText(e)) throw Error("Cannot get the child of a text node: ".concat(eh.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(eh.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    a = en.ancestor(e, t),
                    { children: i } = a,
                    o = r ? i.length - 1 : 0;
                r ? o >= 0 : o < i.length;
            ) {
                var s = en.child(a, o),
                    l = t.concat(o);
                yield [s, l], (o = r ? o - 1 : o + 1);
            }
        },
        common(e, t, n) {
            var r = eo.common(t, n);
            return [en.get(e, r), r];
        },
        descendant(e, t) {
            var n = en.get(e, t);
            if (X.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(eh.stringify(n)),
                );
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) 0 !== r.length && (yield [n, r]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) W.isElement(n) && (yield [n, r]);
        },
        extractProps(e) {
            if (W.isAncestor(e)) {
                var t = b(e, J);
                return t;
            }
            var t = b(e, ee);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r; )
                if (eT.isText(r) || 0 === r.children.length) break;
                else (r = r.children[0]), n.push(0);
            return [r, n];
        },
        fragment(e, t) {
            if (eT.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(eh.stringify(e)));
            return (0, o.jM)({ children: e.children }, (e) => {
                var [n, r] = em.edges(t);
                for (var [, a] of en.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !em.includes(t, n);
                    },
                })) {
                    if (!em.includes(t, a)) {
                        var i = en.parent(e, a),
                            o = a[a.length - 1];
                        i.children.splice(o, 1);
                    }
                    if (eo.equals(a, r.path)) {
                        var s = en.leaf(e, a);
                        s.text = s.text.slice(0, r.offset);
                    }
                    if (eo.equals(a, n.path)) {
                        var l = en.leaf(e, a);
                        l.text = l.text.slice(n.offset);
                    }
                }
                X.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var a = t[r];
                if (eT.isText(n) || !n.children[a])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(eh.stringify(e)));
                n = n.children[a];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var a = t[r];
                if (eT.isText(n) || !n.children[a]) return !1;
                n = n.children[a];
            }
            return !0;
        },
        isNode: (e) => eT.isText(e) || W.isElement(e) || X.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = et.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => en.isNode(e));
            return et.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r; )
                if (eT.isText(r) || 0 === r.children.length) break;
                else {
                    var a = r.children.length - 1;
                    (r = r.children[a]), n.push(a);
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = en.get(e, t);
            if (!eT.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(eh.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of eo.levels(t, n)) {
                var a = en.get(e, r);
                yield [a, r];
            }
        },
        matches: (e, t) =>
            (W.isElement(e) && W.isElementProps(t) && W.matches(e, t)) ||
            (eT.isText(e) && eT.isTextProps(t) && eT.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: a = [], to: i } = t,
                    o = new Set(),
                    s = [],
                    l = e;
                !(i && (r ? eo.isBefore(s, i) : eo.isAfter(s, i)));
            ) {
                if (
                    (o.has(l) || (yield [l, s]),
                    !o.has(l) && !eT.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, s])))
                ) {
                    o.add(l);
                    var c = r ? l.children.length - 1 : 0;
                    eo.isAncestor(s, a) && (c = a[s.length]), (s = s.concat(c)), (l = en.get(e, s));
                    continue;
                }
                if (0 === s.length) break;
                if (!r) {
                    var u = eo.next(s);
                    if (en.has(e, u)) {
                        (s = u), (l = en.get(e, s));
                        continue;
                    }
                }
                if (r && 0 !== s[s.length - 1]) {
                    (s = eo.previous(s)), (l = en.get(e, s));
                    continue;
                }
                (s = eo.parent(s)), (l = en.get(e, s)), o.add(l);
            }
        },
        parent(e, t) {
            var n = eo.parent(t),
                r = en.get(e, n);
            if (eT.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (eT.isText(e) ? e.text : e.children.map(en.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) eT.isText(n) && (yield [n, r]);
        },
    };
function er(e, t) {
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
function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? er(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : er(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ei = {
        isNodeOperation: (e) => ei.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!(0, i.Q)(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return eo.isPath(e.path) && en.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && eo.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && eo.isPath(e.path) && (0, i.Q)(e.properties);
                case "move_node":
                    return eo.isPath(e.path) && eo.isPath(e.newPath);
                case "set_node":
                    return eo.isPath(e.path) && (0, i.Q)(e.properties) && (0, i.Q)(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && em.isRange(e.newProperties)) ||
                        (null === e.newProperties && em.isRange(e.properties)) ||
                        ((0, i.Q)(e.properties) && (0, i.Q)(e.newProperties))
                    );
                case "split_node":
                    return eo.isPath(e.path) && "number" == typeof e.position && (0, i.Q)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => ei.isOperation(e)),
        isSelectionOperation: (e) => ei.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => ei.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return ea(ea({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return ea(ea({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return ea(ea({}, e), {}, { type: "split_node", path: eo.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (eo.equals(t, n)) return e;
                    if (eo.isSibling(n, t)) return ea(ea({}, e), {}, { path: t, newPath: n });
                    var r = eo.transform(n, e),
                        a = eo.transform(eo.next(n), e);
                    return ea(ea({}, e), {}, { path: r, newPath: a });
                case "remove_node":
                    return ea(ea({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return ea(ea({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: i, newProperties: o } = e;
                    return ea(ea({}, e), {}, { properties: o, newProperties: i });
                case "set_selection":
                    var { properties: s, newProperties: l } = e;
                    if (null == s) return ea(ea({}, e), {}, { properties: l, newProperties: null });
                    if (null == l) return ea(ea({}, e), {}, { properties: null, newProperties: s });
                    return ea(ea({}, e), {}, { properties: l, newProperties: s });
                case "split_node":
                    return ea(ea({}, e), {}, { type: "merge_node", path: eo.next(e.path) });
            }
        },
    },
    eo = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                r = eo.levels(e, t);
            return n ? r.slice(1) : r.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                var a = e[r];
                if (a !== t[r]) break;
                n.push(a);
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
                a = t.slice(0, n),
                i = e[n],
                o = t[n];
            return eo.equals(r, a) && i > o;
        },
        endsAt(e, t) {
            var n = e.length,
                r = e.slice(0, n),
                a = t.slice(0, n);
            return eo.equals(r, a);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                a = t.slice(0, n),
                i = e[n],
                o = t[n];
            return eo.equals(r, a) && i < o;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === eo.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === eo.compare(e, t),
        isBefore: (e, t) => -1 === eo.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === eo.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === eo.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === eo.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === eo.compare(e, t),
        isPath: (e) => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && eo.equals(n, r);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: n = !1 } = t,
                    r = [],
                    a = 0;
                a <= e.length;
                a++
            )
                r.push(e.slice(0, a));
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
            if (!eo.isAncestor(t, e) && !eo.equals(e, t))
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
                { affinity: a = "forward" } = n;
            if (0 === e.length) return r;
            switch (t.type) {
                case "insert_node":
                    var { path: i } = t;
                    (eo.equals(i, r) || eo.endsBefore(i, r) || eo.isAncestor(i, r)) && (r[i.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: o } = t;
                    if (eo.equals(o, r) || eo.isAncestor(o, r)) return null;
                    eo.endsBefore(o, r) && (r[o.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: s, position: l } = t;
                    eo.equals(s, r) || eo.endsBefore(s, r)
                        ? (r[s.length - 1] -= 1)
                        : eo.isAncestor(s, r) && ((r[s.length - 1] -= 1), (r[s.length] += l));
                    break;
                case "split_node":
                    var { path: c, position: u } = t;
                    if (eo.equals(c, r)) {
                        if ("forward" === a) r[r.length - 1] += 1;
                        else if ("backward" !== a) return null;
                    } else
                        eo.endsBefore(c, r)
                            ? (r[c.length - 1] += 1)
                            : eo.isAncestor(c, r) && e[c.length] >= u && ((r[c.length - 1] += 1), (r[c.length] -= u));
                    break;
                case "move_node":
                    var { path: d, newPath: _ } = t;
                    if (eo.equals(d, _)) break;
                    if (eo.isAncestor(d, r) || eo.equals(d, r)) {
                        var p = _.slice();
                        return (
                            eo.endsBefore(d, _) && d.length < _.length && (p[d.length - 1] -= 1),
                            p.concat(r.slice(d.length))
                        );
                    }
                    eo.isSibling(d, _) && (eo.isAncestor(_, r) || eo.equals(_, r))
                        ? eo.endsBefore(d, r)
                            ? (r[d.length - 1] -= 1)
                            : (r[d.length - 1] += 1)
                        : eo.endsBefore(_, r) || eo.equals(_, r) || eo.isAncestor(_, r)
                          ? (eo.endsBefore(d, r) && (r[d.length - 1] -= 1), (r[_.length - 1] += 1))
                          : eo.endsBefore(d, r) && (eo.equals(_, r) && (r[_.length - 1] += 1), (r[d.length - 1] -= 1));
            }
            return r;
        },
    },
    es = /^(38190|98365)$/.test(n.j)
        ? null
        : {
              transform(e, t) {
                  var { current: n, affinity: r } = e;
                  if (null != n) {
                      var a = eo.transform(n, t, { affinity: r });
                      (e.current = a), null == a && e.unref();
                  }
              },
          };
function el(e, t) {
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
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? el(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eu = {
        compare(e, t) {
            var n = eo.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === eu.compare(e, t),
        isBefore: (e, t) => -1 === eu.compare(e, t),
        equals: (e, t) => e.offset === t.offset && eo.equals(e.path, t.path),
        isPoint: (e) => (0, i.Q)(e) && "number" == typeof e.offset && eo.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: a, offset: i } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = eo.transform(a, t, n);
                        break;
                    case "insert_text":
                        eo.equals(t.path, a) &&
                            (t.offset < i || (t.offset === i && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        eo.equals(t.path, a) && (e.offset += t.position), (e.path = eo.transform(a, t, n));
                        break;
                    case "remove_text":
                        eo.equals(t.path, a) && t.offset <= i && (e.offset -= Math.min(i - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (eo.equals(t.path, a) || eo.isAncestor(t.path, a)) return null;
                        e.path = eo.transform(a, t, n);
                        break;
                    case "split_node":
                        if (eo.equals(t.path, a))
                            if (t.position === i && null == r) return null;
                            else
                                (t.position < i || (t.position === i && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = eo.transform(a, t, ec(ec({}, n), {}, { affinity: "forward" }))));
                        else e.path = eo.transform(a, t, n);
                }
            });
        },
    },
    ed = /^(38190|98365)$/.test(n.j)
        ? null
        : {
              transform(e, t) {
                  var { current: n, affinity: r } = e;
                  if (null != n) {
                      var a = eu.transform(n, t, { affinity: r });
                      (e.current = a), null == a && e.unref();
                  }
              },
          },
    e_ = ["anchor", "focus"];
function ep(e, t) {
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
var em = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: r, focus: a } = e;
            return em.isBackward(e) === n ? [r, a] : [a, r];
        },
        end(e) {
            var [, t] = em.edges(e);
            return t;
        },
        equals: (e, t) => eu.equals(e.anchor, t.anchor) && eu.equals(e.focus, t.focus),
        includes(e, t) {
            if (em.isRange(t)) {
                if (em.includes(e, t.anchor) || em.includes(e, t.focus)) return !0;
                var [n, r] = em.edges(e),
                    [a, i] = em.edges(t);
                return eu.isBefore(n, a) && eu.isAfter(r, i);
            }
            var [o, s] = em.edges(e),
                l = !1,
                c = !1;
            return (
                eu.isPoint(t)
                    ? ((l = eu.compare(t, o) >= 0), (c = 0 >= eu.compare(t, s)))
                    : ((l = eo.compare(t, o.path) >= 0), (c = 0 >= eo.compare(t, s.path))),
                l && c
            );
        },
        intersection(e, t) {
            var n = b(e, e_),
                [r, a] = em.edges(e),
                [i, o] = em.edges(t),
                l = eu.isBefore(r, i) ? i : r,
                c = eu.isBefore(a, o) ? a : o;
            return eu.isBefore(c, l)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? ep(Object(n), !0).forEach(function (t) {
                                    s(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : ep(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                      }
                      return e;
                  })({ anchor: l, focus: c }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return eu.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return eu.equals(t, n);
        },
        isExpanded: (e) => !em.isCollapsed(e),
        isForward: (e) => !em.isBackward(e),
        isRange: (e) => (0, i.Q)(e) && eu.isPoint(e.anchor) && eu.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = em.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.jM)(e, (e) => {
                if (null === e) return null;
                var r,
                    a,
                    { affinity: i = "inward" } = n;
                if ("inward" === i) {
                    var o = em.isCollapsed(e);
                    em.isForward(e)
                        ? ((r = "forward"), (a = o ? r : "backward"))
                        : ((r = "backward"), (a = o ? r : "forward"));
                } else
                    "outward" === i
                        ? em.isForward(e)
                            ? ((r = "backward"), (a = "forward"))
                            : ((r = "forward"), (a = "backward"))
                        : ((r = i), (a = i));
                var s = eu.transform(e.anchor, t, { affinity: r }),
                    l = eu.transform(e.focus, t, { affinity: a });
                if (!s || !l) return null;
                (e.anchor = s), (e.focus = l);
            });
        },
    },
    ef = /^(38190|98365)$/.test(n.j)
        ? null
        : {
              transform(e, t) {
                  var { current: n, affinity: r } = e;
                  if (null != n) {
                      var a = em.transform(n, t, { affinity: r });
                      (e.current = a), null == a && e.unref();
                  }
              },
          },
    eg = void 0,
    eh = {
        setScrubber(e) {
            eg = e;
        },
        stringify: (e) => JSON.stringify(e, eg),
    },
    eb = (e, t) => {
        for (var n in e) {
            var r = e[n],
                a = t[n];
            if ((0, i.Q)(r) && (0, i.Q)(a)) {
                if (!eb(r, a)) return !1;
            } else if (Array.isArray(r) && Array.isArray(a)) {
                if (r.length !== a.length) return !1;
                for (var o = 0; o < r.length; o++) if (r[o] !== a[o]) return !1;
            } else if (r !== a) return !1;
        }
        for (var s in t) if (void 0 === e[s] && void 0 !== t[s]) return !1;
        return !0;
    },
    eE = ["text"],
    ey = ["anchor", "focus"];
function ev(e, t) {
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
function eS(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ev(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ev(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eT = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;
        return eb(r ? b(e, eE) : e, r ? b(t, eE) : t);
    },
    isText: (e) => (0, i.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eT.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [eS({}, e)];
        for (var r of t) {
            var a = b(r, ey),
                [i, o] = em.edges(r),
                s = [],
                l = 0,
                c = i.offset,
                u = o.offset;
            for (var d of n) {
                var { length: _ } = d.text,
                    p = l;
                if (((l += _), c <= p && l <= u)) {
                    Object.assign(d, a), s.push(d);
                    continue;
                }
                if ((c !== u && (c === l || u === p)) || c > l || u < p || (u === p && 0 !== p)) {
                    s.push(d);
                    continue;
                }
                var m = d,
                    f = void 0,
                    g = void 0;
                if (u < l) {
                    var h = u - p;
                    (g = eS(eS({}, m), {}, { text: m.text.slice(h) })),
                        (m = eS(eS({}, m), {}, { text: m.text.slice(0, h) }));
                }
                if (c > p) {
                    var E = c - p;
                    (f = eS(eS({}, m), {}, { text: m.text.slice(0, E) })),
                        (m = eS(eS({}, m), {}, { text: m.text.slice(E) }));
                }
                Object.assign(m, a), f && s.push(f), s.push(m), g && s.push(g);
            }
            n = s;
        }
        return n;
    },
};
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
function eD(e) {
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
var eO = ["text"],
    ew = ["children"];
function eA(e, t) {
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
function eR(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eA(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eA(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eM = (e, t) =>
        W.isElement(t) ? !!X.isVoid(e, t) || (1 === t.children.length && eM(e, t.children[0])) : !X.isEditor(t) && !0,
    eN = (e, t) => {
        var [n] = X.node(e, t);
        return (e) => e === n;
    };
function ex(e, t) {
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
function eL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ex(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ex(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function ek(e, t) {
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
function eI(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ek(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ek(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eP = eI(
    eI(
        eI(
            eI(
                {},
                {
                    transform(e, t) {
                        e.children = (0, o.mq)(e.children);
                        var n = e.selection && (0, o.mq)(e.selection);
                        try {
                            n = ((e, t, n) => {
                                switch (n.type) {
                                    case "insert_node":
                                        var { path: r, node: a } = n,
                                            i = en.parent(e, r),
                                            o = r[r.length - 1];
                                        if (o > i.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    r,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((i.children.splice(o, 0, a), t))
                                            for (var [s, l] of em.points(t)) t[l] = eu.transform(s, n);
                                        break;
                                    case "insert_text":
                                        var { path: c, offset: u, text: d } = n;
                                        if (0 === d.length) break;
                                        var _ = en.leaf(e, c),
                                            p = _.text.slice(0, u),
                                            m = _.text.slice(u);
                                        if (((_.text = p + d + m), t))
                                            for (var [f, g] of em.points(t)) t[g] = eu.transform(f, n);
                                        break;
                                    case "merge_node":
                                        var { path: h } = n,
                                            b = en.get(e, h),
                                            E = eo.previous(h),
                                            y = en.get(e, E),
                                            v = en.parent(e, h),
                                            S = h[h.length - 1];
                                        if (eT.isText(b) && eT.isText(y)) y.text += b.text;
                                        else if (eT.isText(b) || eT.isText(y))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(h, "] to nodes of different interfaces: ")
                                                    .concat(eh.stringify(b), " ")
                                                    .concat(eh.stringify(y)),
                                            );
                                        else y.children.push(...b.children);
                                        if ((v.children.splice(S, 1), t))
                                            for (var [T, C] of em.points(t)) t[C] = eu.transform(T, n);
                                        break;
                                    case "move_node":
                                        var { path: D, newPath: O } = n;
                                        if (eo.isAncestor(D, O))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(D, "] to new path [")
                                                    .concat(O, "] because the destination is inside itself."),
                                            );
                                        var w = en.get(e, D),
                                            A = en.parent(e, D),
                                            R = D[D.length - 1];
                                        A.children.splice(R, 1);
                                        var M = eo.transform(D, n),
                                            N = en.get(e, eo.parent(M)),
                                            x = M[M.length - 1];
                                        if ((N.children.splice(x, 0, w), t))
                                            for (var [L, k] of em.points(t)) t[k] = eu.transform(L, n);
                                        break;
                                    case "remove_node":
                                        var { path: I } = n,
                                            P = I[I.length - 1];
                                        if ((en.parent(e, I).children.splice(P, 1), t))
                                            for (var [F, Y] of em.points(t)) {
                                                var B = eu.transform(F, n);
                                                if (null != t && null != B) t[Y] = B;
                                                else {
                                                    var U = void 0,
                                                        j = void 0;
                                                    for (var [H, G] of en.texts(e))
                                                        if (-1 === eo.compare(G, I)) U = [H, G];
                                                        else {
                                                            j = [H, G];
                                                            break;
                                                        }
                                                    var z = !1;
                                                    U &&
                                                        j &&
                                                        (z = eo.equals(j[1], I)
                                                            ? !eo.hasPrevious(j[1])
                                                            : eo.common(U[1], I).length < eo.common(j[1], I).length),
                                                        U && !z
                                                            ? ((F.path = U[1]), (F.offset = U[0].text.length))
                                                            : j
                                                              ? ((F.path = j[1]), (F.offset = 0))
                                                              : (t = null);
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: W, offset: q, text: V } = n;
                                        if (0 === V.length) break;
                                        var $ = en.leaf(e, W),
                                            Q = $.text.slice(0, q),
                                            K = $.text.slice(q + V.length);
                                        if ((($.text = Q + K), t))
                                            for (var [X, Z] of em.points(t)) t[Z] = eu.transform(X, n);
                                        break;
                                    case "set_node":
                                        var { path: J, properties: ee, newProperties: et } = n;
                                        if (0 === J.length) throw Error("Cannot set properties on the root node!");
                                        var er = en.get(e, J);
                                        for (var ea in et) {
                                            if ("children" === ea || "text" === ea)
                                                throw Error('Cannot set the "'.concat(ea, '" property of nodes!'));
                                            var ei = et[ea];
                                            null == ei ? delete er[ea] : (er[ea] = ei);
                                        }
                                        for (var es in ee) et.hasOwnProperty(es) || delete er[es];
                                        break;
                                    case "set_selection":
                                        var { newProperties: el } = n;
                                        if (null == el) t = el;
                                        else {
                                            if (null == t) {
                                                if (!em.isRange(el))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            eh.stringify(el),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = eD({}, el);
                                            }
                                            for (var ec in el) {
                                                var ed = el[ec];
                                                if (null == ed) {
                                                    if ("anchor" === ec || "focus" === ec)
                                                        throw Error(
                                                            'Cannot remove the "'.concat(ec, '" selection property'),
                                                        );
                                                    delete t[ec];
                                                } else t[ec] = ed;
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var e_,
                                            { path: ep, position: ef, properties: eg } = n;
                                        if (0 === ep.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    ep,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var eb = en.get(e, ep),
                                            eE = en.parent(e, ep),
                                            ey = ep[ep.length - 1];
                                        if (eT.isText(eb)) {
                                            var ev = eb.text.slice(0, ef),
                                                eS = eb.text.slice(ef);
                                            (eb.text = ev), (e_ = eD(eD({}, eg), {}, { text: eS }));
                                        } else {
                                            var eC = eb.children.slice(0, ef),
                                                eO = eb.children.slice(ef);
                                            (eb.children = eC), (e_ = eD(eD({}, eg), {}, { children: eO }));
                                        }
                                        if ((eE.children.splice(ey + 1, 0, e_), t))
                                            for (var [ew, eA] of em.points(t)) t[eA] = eu.transform(ew, n);
                                }
                                return t;
                            })(e, n, t);
                        } finally {
                            (e.children = (0, o.vD)(e.children)),
                                n ? (e.selection = (0, o.Qx)(n) ? (0, o.vD)(n) : n) : (e.selection = null);
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    X.withoutNormalizing(e, () => {
                        var { hanging: r = !1, voids: a = !1, mode: i = "lowest" } = n,
                            { at: o, match: s, select: l } = n;
                        if ((en.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [c] = t;
                            if (
                                (o ||
                                    ((o = e.selection ? e.selection : e.children.length > 0 ? X.end(e, []) : [0]),
                                    (l = !0)),
                                null == l && (l = !1),
                                em.isRange(o))
                            )
                                if ((r || (o = X.unhangRange(e, o, { voids: a })), em.isCollapsed(o))) o = o.anchor;
                                else {
                                    var [, u] = em.edges(o),
                                        d = X.pointRef(e, u);
                                    eP.delete(e, { at: o }), (o = d.unref());
                                }
                            if (eu.isPoint(o)) {
                                null == s &&
                                    (s = eT.isText(c)
                                        ? (e) => eT.isText(e)
                                        : e.isInline(c)
                                          ? (t) => eT.isText(t) || X.isInline(e, t)
                                          : (t) => W.isElement(t) && X.isBlock(e, t));
                                var [_] = X.nodes(e, { at: o.path, match: s, mode: i, voids: a });
                                if (!_) return;
                                var [, p] = _,
                                    m = X.pathRef(e, p),
                                    f = X.isEnd(e, o, p);
                                eP.splitNodes(e, { at: o, match: s, mode: i, voids: a });
                                var g = m.unref();
                                o = f ? eo.next(g) : g;
                            }
                            var h = eo.parent(o),
                                b = o[o.length - 1];
                            if (!(!a && X.void(e, { at: h }))) {
                                for (var E of t) {
                                    var y = h.concat(b);
                                    b++, e.apply({ type: "insert_node", path: y, node: E }), (o = eo.next(o));
                                }
                                if (((o = eo.previous(o)), l)) {
                                    var v = X.end(e, o);
                                    v && eP.select(e, v);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var { at: n = e.selection, mode: r = "lowest", voids: a = !1 } = t,
                            { match: i } = t;
                        if ((null == i && (i = eo.isPath(n) ? eN(e, n) : (t) => W.isElement(t) && X.isBlock(e, t)), n))
                            for (var o of Array.from(X.nodes(e, { at: n, match: i, mode: r, voids: a }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            })) {
                                var s = o.unref();
                                if (s.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            s,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [l, c] = X.node(e, eo.parent(s)),
                                    u = s[s.length - 1],
                                    { length: d } = l.children;
                                if (1 === d) {
                                    var _ = eo.next(c);
                                    eP.moveNodes(e, { at: s, to: _, voids: a }), eP.removeNodes(e, { at: c, voids: a });
                                } else if (0 === u) eP.moveNodes(e, { at: s, to: c, voids: a });
                                else if (u === d - 1) {
                                    var p = eo.next(c);
                                    eP.moveNodes(e, { at: s, to: p, voids: a });
                                } else {
                                    var m = eo.next(s),
                                        f = eo.next(c);
                                    eP.splitNodes(e, { at: m, voids: a }), eP.moveNodes(e, { at: s, to: f, voids: a });
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { match: a, at: i = e.selection } = t,
                            { hanging: o = !1, voids: s = !1, mode: l = "lowest" } = t;
                        if (i) {
                            if (null == a)
                                if (eo.isPath(i)) {
                                    var [c] = X.parent(e, i);
                                    a = (e) => c.children.includes(e);
                                } else a = (t) => W.isElement(t) && X.isBlock(e, t);
                            if ((!o && em.isRange(i) && (i = X.unhangRange(e, i, { voids: s })), em.isRange(i)))
                                if (em.isCollapsed(i)) i = i.anchor;
                                else {
                                    var [, u] = em.edges(i),
                                        d = X.pointRef(e, u);
                                    eP.delete(e, { at: i }), (i = d.unref()), null == t.at && eP.select(e, i);
                                }
                            var [_] = X.nodes(e, { at: i, match: a, voids: s, mode: l }),
                                p = X.previous(e, { at: i, match: a, voids: s, mode: l });
                            if (_ && p) {
                                var [m, f] = _,
                                    [g, h] = p;
                                if (0 !== f.length && 0 !== h.length) {
                                    var E = eo.next(h),
                                        y = eo.common(f, h),
                                        v = eo.isSibling(f, h),
                                        S = Array.from(X.levels(e, { at: f }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(y.length)
                                            .slice(0, -1),
                                        T = X.above(e, {
                                            at: f,
                                            mode: "highest",
                                            match: (t) => S.includes(t) && eM(e, t),
                                        }),
                                        C = T && X.pathRef(e, T[1]);
                                    if (eT.isText(m) && eT.isText(g)) {
                                        var D = b(m, eO);
                                        (r = g.text.length), (n = D);
                                    } else if (W.isElement(m) && W.isElement(g)) {
                                        var D = b(m, ew);
                                        (r = g.children.length), (n = D);
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    f,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(eh.stringify(m), " ")
                                                .concat(eh.stringify(g)),
                                        );
                                    v || eP.moveNodes(e, { at: f, to: E, voids: s }),
                                        C && eP.removeNodes(e, { at: C.current, voids: s }),
                                        (W.isElement(g) && X.isEmpty(e, g)) ||
                                        (eT.isText(g) && "" === g.text && 0 !== h[h.length - 1])
                                            ? eP.removeNodes(e, { at: h, voids: s })
                                            : e.apply({ type: "merge_node", path: E, position: r, properties: n }),
                                        C && C.unref();
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    X.withoutNormalizing(e, () => {
                        var { to: n, at: r = e.selection, mode: a = "lowest", voids: i = !1 } = t,
                            { match: o } = t;
                        if (r) {
                            null == o && (o = eo.isPath(r) ? eN(e, r) : (t) => W.isElement(t) && X.isBlock(e, t));
                            var s = X.pathRef(e, n);
                            for (var l of Array.from(X.nodes(e, { at: r, match: o, mode: a, voids: i }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            })) {
                                var c = l.unref(),
                                    u = s.current;
                                0 !== c.length && e.apply({ type: "move_node", path: c, newPath: u }),
                                    s.current &&
                                        eo.isSibling(u, c) &&
                                        eo.isAfter(u, c) &&
                                        (s.current = eo.next(s.current));
                            }
                            s.unref();
                        }
                    });
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var { hanging: n = !1, voids: r = !1, mode: a = "lowest" } = t,
                            { at: i = e.selection, match: o } = t;
                        if (i)
                            for (var s of (null == o &&
                                (o = eo.isPath(i) ? eN(e, i) : (t) => W.isElement(t) && X.isBlock(e, t)),
                            !n && em.isRange(i) && (i = X.unhangRange(e, i, { voids: r })),
                            Array.from(X.nodes(e, { at: i, match: o, mode: a, voids: r }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            }))) {
                                var l = s.unref();
                                if (l) {
                                    var [c] = X.node(e, l);
                                    e.apply({ type: "remove_node", path: l, node: c });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    X.withoutNormalizing(e, () => {
                        var { match: r, at: a = e.selection, compare: i, merge: o } = n,
                            { hanging: s = !1, mode: l = "lowest", split: c = !1, voids: u = !1 } = n;
                        if (a) {
                            if (
                                (null == r && (r = eo.isPath(a) ? eN(e, a) : (t) => W.isElement(t) && X.isBlock(e, t)),
                                !s && em.isRange(a) && (a = X.unhangRange(e, a, { voids: u })),
                                c && em.isRange(a))
                            ) {
                                if (em.isCollapsed(a) && X.leaf(e, a.anchor)[0].text.length > 0) return;
                                var d = X.rangeRef(e, a, { affinity: "inward" }),
                                    [_, p] = em.edges(a),
                                    m = "lowest" === l ? "lowest" : "highest",
                                    f = X.isEnd(e, p, p.path);
                                eP.splitNodes(e, { at: p, match: r, mode: m, voids: u, always: !f });
                                var g = X.isStart(e, _, _.path);
                                eP.splitNodes(e, { at: _, match: r, mode: m, voids: u, always: !g }),
                                    (a = d.unref()),
                                    null == n.at && eP.select(e, a);
                            }
                            for (var [h, b] of (i || (i = (e, t) => e !== t),
                            X.nodes(e, { at: a, match: r, mode: l, voids: u }))) {
                                var E = {},
                                    y = {};
                                if (0 !== b.length) {
                                    var v = !1;
                                    for (var S in t)
                                        "children" !== S &&
                                            "text" !== S &&
                                            i(t[S], h[S]) &&
                                            ((v = !0),
                                            h.hasOwnProperty(S) && (E[S] = h[S]),
                                            o ? null != t[S] && (y[S] = o(h[S], t[S])) : null != t[S] && (y[S] = t[S]));
                                    v && e.apply({ type: "set_node", path: b, properties: E, newProperties: y });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { mode: a = "lowest", voids: i = !1 } = t,
                            { match: o, at: s = e.selection, height: l = 0, always: c = !1 } = t;
                        if (
                            (null == o && (o = (t) => W.isElement(t) && X.isBlock(e, t)),
                            em.isRange(s) &&
                                (s = ((e, t) => {
                                    if (em.isCollapsed(t)) return t.anchor;
                                    var [, n] = em.edges(t),
                                        r = X.pointRef(e, n);
                                    return eP.delete(e, { at: t }), r.unref();
                                })(e, s)),
                            eo.isPath(s))
                        ) {
                            var u = s,
                                d = X.point(e, u),
                                [_] = X.parent(e, u);
                            (o = (e) => e === _), (l = d.path.length - u.length + 1), (s = d), (c = !0);
                        }
                        if (s) {
                            var p = X.pointRef(e, s, { affinity: "backward" });
                            try {
                                var [m] = X.nodes(e, { at: s, match: o, mode: a, voids: i });
                                if (!m) return;
                                var f = X.void(e, { at: s, mode: "highest" });
                                if (!i && f) {
                                    var [g, h] = f;
                                    if (W.isElement(g) && e.isInline(g)) {
                                        var b = X.after(e, h);
                                        if (!b) {
                                            var E = eo.next(h);
                                            eP.insertNodes(e, { text: "" }, { at: E, voids: i }), (b = X.point(e, E));
                                        }
                                        (s = b), (c = !0);
                                    }
                                    (l = s.path.length - h.length + 1), (c = !0);
                                }
                                n = X.pointRef(e, s);
                                var y = s.path.length - l,
                                    [, v] = m,
                                    S = s.path.slice(0, y),
                                    T = 0 === l ? s.offset : s.path[y] + 0;
                                for (var [C, D] of X.levels(e, { at: S, reverse: !0, voids: i })) {
                                    var O = !1;
                                    if (
                                        D.length < v.length ||
                                        0 === D.length ||
                                        (!i && W.isElement(C) && X.isVoid(e, C))
                                    )
                                        break;
                                    var w = p.current,
                                        A = X.isEnd(e, w, D);
                                    if (c || !p || !X.isEdge(e, w, D)) {
                                        O = !0;
                                        var R = en.extractProps(C);
                                        e.apply({ type: "split_node", path: D, position: T, properties: R });
                                    }
                                    T = D[D.length - 1] + (O || A ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var M = n.current || X.end(e, []);
                                    eP.select(e, M);
                                }
                            } finally {
                                p.unref(), null == (r = n) || r.unref();
                            }
                        }
                    });
                },
                unsetNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(t) || (t = [t]);
                    var r = {};
                    for (var a of t) r[a] = null;
                    eP.setNodes(e, r, n);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    X.withoutNormalizing(e, () => {
                        var { mode: n = "lowest", split: r = !1, voids: a = !1 } = t,
                            { at: i = e.selection, match: o } = t;
                        if (i) {
                            null == o && (o = eo.isPath(i) ? eN(e, i) : (t) => W.isElement(t) && X.isBlock(e, t)),
                                eo.isPath(i) && (i = X.range(e, i));
                            var s = em.isRange(i) ? X.rangeRef(e, i) : null;
                            for (var l of Array.from(X.nodes(e, { at: i, match: o, mode: n, voids: a }), (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            }).reverse())
                                !(function (t) {
                                    var n = t.unref(),
                                        [i] = X.node(e, n),
                                        o = X.range(e, n);
                                    r && s && (o = em.intersection(s.current, o)),
                                        eP.liftNodes(e, {
                                            at: o,
                                            match: (e) => W.isAncestor(i) && i.children.includes(e),
                                            voids: a,
                                        });
                                })(l);
                            s && s.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    X.withoutNormalizing(e, () => {
                        var { mode: r = "lowest", split: a = !1, voids: i = !1 } = n,
                            { match: o, at: s = e.selection } = n;
                        if (s) {
                            if (
                                (null == o &&
                                    (o = eo.isPath(s)
                                        ? eN(e, s)
                                        : e.isInline(t)
                                          ? (t) => (W.isElement(t) && X.isInline(e, t)) || eT.isText(t)
                                          : (t) => W.isElement(t) && X.isBlock(e, t)),
                                a && em.isRange(s))
                            ) {
                                var [l, c] = em.edges(s),
                                    u = X.rangeRef(e, s, { affinity: "inward" });
                                eP.splitNodes(e, { at: c, match: o, voids: i }),
                                    eP.splitNodes(e, { at: l, match: o, voids: i }),
                                    (s = u.unref()),
                                    null == n.at && eP.select(e, s);
                            }
                            for (var [, d] of Array.from(
                                X.nodes(e, {
                                    at: s,
                                    match: e.isInline(t)
                                        ? (t) => W.isElement(t) && X.isBlock(e, t)
                                        : (e) => X.isEditor(e),
                                    mode: "lowest",
                                    voids: i,
                                }),
                            )) {
                                var _ = em.isRange(s) ? em.intersection(s, X.range(e, d)) : s;
                                if (_) {
                                    var p = Array.from(X.nodes(e, { at: _, match: o, mode: r, voids: i }));
                                    if (
                                        p.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [n] = p,
                                                    r = p[p.length - 1],
                                                    [, a] = n,
                                                    [, o] = r;
                                                if (0 === a.length && 0 === o.length) return "continue";
                                                var s = eo.equals(a, o) ? eo.parent(a) : eo.common(a, o),
                                                    l = X.range(e, a, o),
                                                    [c] = X.node(e, s),
                                                    u = s.length + 1,
                                                    d = eo.next(o.slice(0, u)),
                                                    _ = eR(eR({}, t), {}, { children: [] });
                                                eP.insertNodes(e, _, { at: d, voids: i }),
                                                    eP.moveNodes(e, {
                                                        at: l,
                                                        match: (e) => W.isAncestor(c) && c.children.includes(e),
                                                        to: d.concat(0),
                                                        voids: i,
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
        ),
        {
            collapse(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { edge: n = "anchor" } = t,
                    { selection: r } = e;
                if (r) {
                    if ("anchor" === n) eP.select(e, r.anchor);
                    else if ("focus" === n) eP.select(e, r.focus);
                    else if ("start" === n) {
                        var [a] = em.edges(r);
                        eP.select(e, a);
                    } else if ("end" === n) {
                        var [, i] = em.edges(r);
                        eP.select(e, i);
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
                    { distance: r = 1, unit: a = "character", reverse: i = !1 } = t,
                    { edge: o = null } = t;
                if (n) {
                    "start" === o && (o = em.isBackward(n) ? "focus" : "anchor"),
                        "end" === o && (o = em.isBackward(n) ? "anchor" : "focus");
                    var { anchor: s, focus: l } = n,
                        c = { distance: r, unit: a },
                        u = {};
                    if (null == o || "anchor" === o) {
                        var d = i ? X.before(e, s, c) : X.after(e, s, c);
                        d && (u.anchor = d);
                    }
                    if (null == o || "focus" === o) {
                        var _ = i ? X.before(e, l, c) : X.after(e, l, c);
                        _ && (u.focus = _);
                    }
                    eP.setSelection(e, u);
                }
            },
            select(e, t) {
                var { selection: n } = e;
                if (((t = X.range(e, t)), n)) return void eP.setSelection(e, t);
                if (!em.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            eh.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: n, newProperties: t });
            },
            setPoint(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: r } = e,
                    { edge: a = "both" } = n;
                if (r) {
                    "start" === a && (a = em.isBackward(r) ? "focus" : "anchor"),
                        "end" === a && (a = em.isBackward(r) ? "anchor" : "focus");
                    var { anchor: i, focus: o } = r,
                        s = "anchor" === a ? i : o;
                    eP.setSelection(e, { ["anchor" === a ? "anchor" : "focus"]: eL(eL({}, s), t) });
                }
            },
            setSelection(e, t) {
                var { selection: n } = e,
                    r = {},
                    a = {};
                if (n) {
                    for (var i in t)
                        (("anchor" !== i || null == t.anchor || eu.equals(t.anchor, n.anchor)) &&
                            ("focus" !== i || null == t.focus || eu.equals(t.focus, n.focus)) &&
                            ("anchor" === i || "focus" === i || t[i] === n[i])) ||
                            ((r[i] = n[i]), (a[i] = t[i]));
                    Object.keys(r).length > 0 && e.apply({ type: "set_selection", properties: r, newProperties: a });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: a = "character", distance: i = 1, voids: o = !1 } = t,
                    { at: s = e.selection, hanging: l = !1 } = t;
                if (s) {
                    var c = !1;
                    if ((em.isRange(s) && em.isCollapsed(s) && ((c = !0), (s = s.anchor)), eu.isPoint(s))) {
                        var u = X.void(e, { at: s, mode: "highest" });
                        if (!o && u) {
                            var [, d] = u;
                            s = d;
                        } else {
                            var _ = { unit: a, distance: i },
                                p = r ? X.before(e, s, _) || X.start(e, []) : X.after(e, s, _) || X.end(e, []);
                            (s = { anchor: s, focus: p }), (l = !0);
                        }
                    }
                    if (eo.isPath(s)) return void eP.removeNodes(e, { at: s, voids: o });
                    if (!em.isCollapsed(s)) {
                        if (!l) {
                            var [, m] = em.edges(s),
                                f = X.end(e, []);
                            eu.equals(m, f) || (s = X.unhangRange(e, s, { voids: o }));
                        }
                        var [g, h] = em.edges(s),
                            b = X.above(e, { match: (t) => W.isElement(t) && X.isBlock(e, t), at: g, voids: o }),
                            E = X.above(e, { match: (t) => W.isElement(t) && X.isBlock(e, t), at: h, voids: o }),
                            y = b && E && !eo.equals(b[1], E[1]),
                            v = eo.equals(g.path, h.path),
                            S = o ? null : X.void(e, { at: g, mode: "highest" }),
                            T = o ? null : X.void(e, { at: h, mode: "highest" });
                        if (S) {
                            var C = X.before(e, g);
                            C && b && eo.isAncestor(b[1], C.path) && (g = C);
                        }
                        if (T) {
                            var D = X.after(e, h);
                            D && E && eo.isAncestor(E[1], D.path) && (h = D);
                        }
                        var O = [];
                        for (var w of X.nodes(e, { at: s, voids: o })) {
                            var [A, R] = w;
                            (!n || 0 !== eo.compare(R, n)) &&
                                ((!o && W.isElement(A) && X.isVoid(e, A)) ||
                                    (!eo.isCommon(R, g.path) && !eo.isCommon(R, h.path))) &&
                                (O.push(w), (n = R));
                        }
                        var M = Array.from(O, (t) => {
                                var [, n] = t;
                                return X.pathRef(e, n);
                            }),
                            N = X.pointRef(e, g),
                            x = X.pointRef(e, h),
                            L = "";
                        if (!v && !S) {
                            var k = N.current,
                                [I] = X.leaf(e, k),
                                { path: P } = k,
                                { offset: F } = g,
                                Y = I.text.slice(F);
                            Y.length > 0 && (e.apply({ type: "remove_text", path: P, offset: F, text: Y }), (L = Y));
                        }
                        if (
                            (M.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => eP.removeNodes(e, { at: t, voids: o })),
                            !T)
                        ) {
                            var B = x.current,
                                [U] = X.leaf(e, B),
                                { path: j } = B,
                                H = v ? g.offset : 0,
                                G = U.text.slice(H, h.offset);
                            G.length > 0 && (e.apply({ type: "remove_text", path: j, offset: H, text: G }), (L = G));
                        }
                        !v && y && x.current && N.current && eP.mergeNodes(e, { at: x.current, hanging: !0, voids: o }),
                            c &&
                                r &&
                                "character" === a &&
                                L.length > 1 &&
                                L.match(/[\u0E00-\u0E7F]+/) &&
                                eP.insertText(e, L.slice(0, L.length - i));
                        var z = N.unref(),
                            q = x.unref(),
                            V = r ? z || q : q || z;
                        null == t.at && V && eP.select(e, V);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var r,
                    { hanging: a = !1, voids: i = !1 } = n,
                    { at: o = e.selection } = n;
                if (t.length) {
                    if (o) {
                        if (em.isRange(o))
                            if ((a || (o = X.unhangRange(e, o, { voids: i })), em.isCollapsed(o))) o = o.anchor;
                            else {
                                var [, s] = em.edges(o);
                                if (!i && X.void(e, { at: s })) return;
                                var l = X.pointRef(e, s);
                                eP.delete(e, { at: o }), (o = l.unref());
                            }
                        else eo.isPath(o) && (o = X.start(e, o));
                        if (!(!i && X.void(e, { at: o }))) {
                            var c = X.above(e, {
                                at: o,
                                match: (t) => W.isElement(t) && X.isInline(e, t),
                                mode: "highest",
                                voids: i,
                            });
                            if (c) {
                                var [, u] = c;
                                X.isEnd(e, o, u) ? (o = X.after(e, u)) : X.isStart(e, o, u) && (o = X.before(e, u));
                            }
                            var [, d] = X.above(e, {
                                    match: (t) => W.isElement(t) && X.isBlock(e, t),
                                    at: o,
                                    voids: i,
                                }),
                                _ = X.isStart(e, o, d),
                                p = X.isEnd(e, o, d),
                                m = _ && p,
                                f = !_ || (_ && p),
                                g = !p,
                                [, h] = en.first({ children: t }, []),
                                [, b] = en.last({ children: t }, []),
                                E = [],
                                y = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!m ||
                                            !(
                                                (f &&
                                                    eo.isAncestor(r, h) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (g &&
                                                    eo.isAncestor(r, b) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var v of en.nodes({ children: t }, { pass: y })) y(v) && E.push(v);
                            var S = [],
                                T = [],
                                C = [],
                                D = !0,
                                O = !1;
                            for (var [w] of E)
                                W.isElement(w) && !e.isInline(w)
                                    ? ((D = !1), (O = !0), T.push(w))
                                    : D
                                      ? S.push(w)
                                      : C.push(w);
                            var [A] = X.nodes(e, {
                                    at: o,
                                    match: (t) => eT.isText(t) || X.isInline(e, t),
                                    mode: "highest",
                                    voids: i,
                                }),
                                [, R] = A,
                                M = X.isStart(e, o, R),
                                N = X.isEnd(e, o, R),
                                x = X.pathRef(e, p && !C.length ? eo.next(d) : d),
                                L = X.pathRef(e, N ? eo.next(R) : R);
                            eP.splitNodes(e, {
                                at: o,
                                match: (t) =>
                                    O ? W.isElement(t) && X.isBlock(e, t) : eT.isText(t) || X.isInline(e, t),
                                mode: O ? "lowest" : "highest",
                                always: O && (!_ || S.length > 0) && (!p || C.length > 0),
                                voids: i,
                            });
                            var k = X.pathRef(e, !M || (M && N) ? eo.next(R) : R);
                            if (
                                (eP.insertNodes(e, S, {
                                    at: k.current,
                                    match: (t) => eT.isText(t) || X.isInline(e, t),
                                    mode: "highest",
                                    voids: i,
                                }),
                                m && !S.length && T.length && !C.length && eP.delete(e, { at: d, voids: i }),
                                eP.insertNodes(e, T, {
                                    at: x.current,
                                    match: (t) => W.isElement(t) && X.isBlock(e, t),
                                    mode: "lowest",
                                    voids: i,
                                }),
                                eP.insertNodes(e, C, {
                                    at: L.current,
                                    match: (t) => eT.isText(t) || X.isInline(e, t),
                                    mode: "highest",
                                    voids: i,
                                }),
                                !n.at &&
                                    (C.length > 0 && L.current
                                        ? (r = eo.previous(L.current))
                                        : T.length > 0 && x.current
                                          ? (r = eo.previous(x.current))
                                          : k.current && (r = eo.previous(k.current)),
                                    r))
                            ) {
                                var I = X.end(e, r);
                                eP.select(e, I);
                            }
                            k.unref(), x.unref(), L.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var { voids: r = !1 } = n,
                    { at: a = e.selection } = n;
                if (a) {
                    if ((eo.isPath(a) && (a = X.range(e, a)), em.isRange(a)))
                        if (em.isCollapsed(a)) a = a.anchor;
                        else {
                            var i = em.end(a);
                            if (!r && X.void(e, { at: i })) return;
                            var o = em.start(a),
                                s = X.pointRef(e, o),
                                l = X.pointRef(e, i);
                            eP.delete(e, { at: a, voids: r });
                            var c = s.unref(),
                                u = l.unref();
                            (a = c || u), eP.setSelection(e, { anchor: a, focus: a });
                        }
                    if (!(!r && X.void(e, { at: a }))) {
                        var { path: d, offset: _ } = a;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: _, text: t });
                    }
                }
            });
        },
    },
);
