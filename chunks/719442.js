"use strict";
n.d(t, {
    EY: () => eC,
    Hg: () => z,
    KE: () => J,
    Q6: () => eE,
    bP: () => ei,
    bR: () => e_,
    gB: () => eW,
    h6: () => eI,
    ie: () => m,
    wA: () => el,
});
var r,
    i = n(694260),
    s = n(159563);
function a(e, t, n) {
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
function p(e, t) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? p(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
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
            for (var n of J.pathRefs(e)) eu.transform(n, t);
            for (var r of J.pointRefs(e)) ef.transform(r, t);
            for (var i of J.rangeRefs(e)) eg.transform(i, t);
            var s,
                a,
                c = o.get(e) || [],
                d = l.get(e) || new Set(),
                _ = (e) => {
                    if (e) {
                        var t = e.join(",");
                        a.has(t) || (a.add(t), s.push(e));
                    }
                };
            if (el.operationCanTransformPath(t)) for (var f of ((s = []), (a = new Set()), c)) _(el.transform(f, t));
            else (s = c), (a = d);
            for (var p of e.getDirtyPaths(t)) _(p);
            o.set(e, s),
                l.set(e, a),
                eW.transform(e, t),
                e.operations.push(t),
                J.normalize(e, { operation: t }),
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
                var s = (t, n) => {
                        if (!eC.isText(t)) return !1;
                        var [r, i] = J.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    a = eE.isExpanded(r),
                    o = !1;
                if (!a) {
                    var [l, c] = J.node(e, r);
                    if (l && s(l, c)) {
                        var [d] = J.parent(e, c);
                        o = d && e.markableVoid(d);
                    }
                }
                if (a || o) eW.setNodes(e, { [t]: n }, { match: s, split: !0, voids: !0 });
                else {
                    var _ = h(h({}, J.marks(e) || {}), {}, { [t]: n });
                    (e.marks = _), u.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && eE.isCollapsed(n) && eW.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && eE.isCollapsed(n) && eW.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && eE.isExpanded(n) && eW.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? ei.fragment(e, t) : [];
        },
        insertBreak: () => {
            eW.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eW.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            eW.insertFragment(e, t);
        },
        insertNode: (t) => {
            eW.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
                if (r) {
                    var i = h({ text: t }, r);
                    eW.insertNodes(e, i);
                } else eW.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!eC.isText(n)) {
                if (z.isElement(n) && 0 === n.children.length) {
                    var i = { text: "" };
                    eW.insertNodes(e, i, { at: r.concat(0), voids: !0 });
                    return;
                }
                for (
                    var s =
                            !J.isEditor(n) &&
                            z.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                eC.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        a = 0,
                        o = 0;
                    o < n.children.length;
                    o++, a++
                ) {
                    var l = ei.get(e, r);
                    if (!eC.isText(l)) {
                        var u = n.children[o],
                            c = l.children[a - 1],
                            d = o === n.children.length - 1,
                            _ = eC.isText(u) || (z.isElement(u) && e.isInline(u));
                        if (_ !== s) eW.removeNodes(e, { at: r.concat(a), voids: !0 }), a--;
                        else if (z.isElement(u)) {
                            if (e.isInline(u))
                                if (null != c && eC.isText(c)) {
                                    if (d) {
                                        var f = { text: "" };
                                        eW.insertNodes(e, f, { at: r.concat(a + 1), voids: !0 }), a++;
                                    }
                                } else {
                                    var p = { text: "" };
                                    eW.insertNodes(e, p, { at: r.concat(a), voids: !0 }), a++;
                                }
                        } else
                            null != c &&
                                eC.isText(c) &&
                                (eC.equals(u, c, { loose: !0 })
                                    ? (eW.mergeNodes(e, { at: r.concat(a), voids: !0 }), a--)
                                    : "" === c.text
                                      ? (eW.removeNodes(e, { at: r.concat(a - 1), voids: !0 }), a--)
                                      : "" === u.text && (eW.removeNodes(e, { at: r.concat(a), voids: !0 }), a--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!eC.isText(t)) return !1;
                        var [r, i] = J.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    i = eE.isExpanded(n),
                    s = !1;
                if (!i) {
                    var [a, o] = J.node(e, n);
                    if (a && r(a, o)) {
                        var [l] = J.parent(e, o);
                        s = l && e.markableVoid(l);
                    }
                }
                if (i || s) eW.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
                else {
                    var c = h({}, J.marks(e) || {});
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
                    return el.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...el.levels(r),
                        ...(eC.isText(n)
                            ? []
                            : Array.from(ei.nodes(n), (e) => {
                                  var [, t] = e;
                                  return r.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: i } = e;
                    return [...el.ancestors(i), el.previous(i)];
                case "move_node":
                    var { path: s, newPath: a } = e;
                    if (el.equals(s, a)) return [];
                    var o = [],
                        l = [];
                    for (var u of el.ancestors(s)) {
                        var c = el.transform(u, e);
                        o.push(c);
                    }
                    for (var d of el.ancestors(a)) {
                        var _ = el.transform(d, e);
                        l.push(_);
                    }
                    var f = l[l.length - 1],
                        p = a[a.length - 1];
                    return [...o, ...l, f.concat(p)];
                case "remove_node":
                    var { path: h } = e;
                    return [...el.ancestors(h)];
                case "split_node":
                    var { path: m } = e;
                    return [...el.levels(m), el.next(m)];
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
        s = Object.keys(e);
    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++)
            (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var A = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            i = t ? C(e) : e,
            s = r.None,
            a = r.None,
            o = 0,
            l = null,
            u = null;
        for (var c of i) {
            var d = c.codePointAt(0);
            if (!d) break;
            var _ = G(c, d);
            if (
                (([s, a] = n ? [a, _] : [_, s]),
                (F(s, r.ZWJ) && F(a, r.ExtPict) && !(l = n ? j(e.substring(0, o)) : j(e.substring(0, e.length - o)))) ||
                    (F(s, r.RI) && F(a, r.RI) && !(u = null !== u ? !u : !!n || W(e.substring(0, e.length - o)))) ||
                    (s !== r.None && a !== r.None && B(s, a)))
            )
                break;
            o += c.length;
        }
        return o || 1;
    },
    I = /\s/,
    T =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    S = /['\u2018\u2019]/,
    y = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0; ) {
            var i = A(e, t),
                [s, a] = v(e, i, t);
            if (N(s, a, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = a;
        }
        return n;
    },
    v = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    N = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (I.test(t)) return !1;
        if (S.test(t)) {
            var i = A(n, r),
                [s, a] = v(n, i, r);
            if (e(s, a, r)) return !0;
        }
        return !T.test(t);
    },
    C = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (R(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (b(i.charCodeAt(0))) {
                    yield i + r, n++;
                    continue;
                }
            }
            yield r;
        }
    },
    b = (e) => e >= 55296 && e <= 56319,
    R = (e) => e >= 56320 && e <= 57343;
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
var O =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    D =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    L =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    w = /^[\u1100-\u115F\uA960-\uA97C]$/,
    x = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    M = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    P =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    k =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    U =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    G = (e, t) => {
        var n = r.Any;
        return (
            -1 !== e.search(O) && (n |= r.Extend),
            8205 === t && (n |= r.ZWJ),
            t >= 127462 && t <= 127487 && (n |= r.RI),
            -1 !== e.search(D) && (n |= r.Prepend),
            -1 !== e.search(L) && (n |= r.SpacingMark),
            -1 !== e.search(w) && (n |= r.L),
            -1 !== e.search(x) && (n |= r.V),
            -1 !== e.search(M) && (n |= r.T),
            -1 !== e.search(P) && (n |= r.LV),
            -1 !== e.search(k) && (n |= r.LVT),
            -1 !== e.search(U) && (n |= r.ExtPict),
            n
        );
    };
function F(e, t) {
    return (e & t) != 0;
}
var V = [
    [r.L, r.L | r.V | r.LV | r.LVT],
    [r.LV | r.V, r.V | r.T],
    [r.LVT | r.T, r.T],
    [r.Any, r.Extend | r.ZWJ],
    [r.Any, r.SpacingMark],
    [r.Prepend, r.Any],
    [r.ZWJ, r.ExtPict],
    [r.RI, r.RI],
];
function B(e, t) {
    return -1 === V.findIndex((n) => F(e, n[0]) && F(t, n[1]));
}
var H =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    j = (e) => -1 !== e.search(H),
    Y = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    W = (e) => {
        var t = e.match(Y);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    K = (e) => (0, i.Q)(e) && ei.isNodeList(e.children) && !J.isEditor(e),
    z = {
        isAncestor: (e) => (0, i.Q)(e) && ei.isNodeList(e.children),
        isElement: K,
        isElementList: (e) => Array.isArray(e) && e.every((e) => z.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return K(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    $ = ["text"],
    q = ["text"];
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
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Z(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var Q = new WeakMap(),
    J = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: i = e.selection, match: s } = t;
            if (i) {
                var a = J.path(e, i),
                    o = "lowest" === r;
                for (var [l, u] of J.levels(e, { at: a, voids: n, match: s, reverse: o }))
                    if (!eC.isText(l)) {
                        if (eE.isRange(i)) {
                            if (el.isAncestor(u, i.anchor.path) && el.isAncestor(u, i.focus.path)) return [l, u];
                        } else if (!el.equals(a, u)) return [l, u];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = { anchor: J.point(e, t, { edge: "end" }), focus: J.end(e, []) },
                { distance: s = 1 } = r,
                a = 0;
            for (var o of J.positions(e, X(X({}, r), {}, { at: i }))) {
                if (a > s) break;
                0 !== a && (n = o), a++;
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = { anchor: J.start(e, []), focus: J.point(e, t, { edge: "start" }) },
                { distance: s = 1 } = r,
                a = 0;
            for (var o of J.positions(e, X(X({}, r), {}, { at: i, reverse: !0 }))) {
                if (a > s) break;
                0 !== a && (n = o), a++;
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
        edges: (e, t) => [J.start(e, t), J.end(e, t)],
        end: (e, t) => J.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = J.path(e, t, { edge: "start" });
            return J.node(e, n);
        },
        fragment(e, t) {
            var n = J.range(e, t);
            return ei.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => z.isElement(t) && J.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => eC.isText(t) || J.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => eC.isText(e)),
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
            var t = Q.get(e);
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
                ei.isNodeList(e.children) &&
                eo.isOperationList(e.operations);
            return Q.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = J.end(e, n);
            return e_.equals(t, r);
        },
        isEdge: (e, t, n) => J.isStart(e, t, n) || J.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && eC.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = c.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = J.start(e, n);
            return e_.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = J.path(e, t, { edge: "end" });
            return J.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = J.path(e, t, n);
            return [ei.leaf(e, r), r];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
                { match: s } = t;
            if ((null == s && (s = () => !0), n)) {
                var a = [],
                    o = J.path(e, n);
                for (var [l, u] of ei.levels(e, o))
                    if (s(l, u) && (a.push([l, u]), !i && z.isElement(l) && J.isVoid(e, l))) break;
                r && a.reverse(), yield* a;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (eE.isExpanded(n)) {
                var [r] = J.nodes(e, { match: eC.isText });
                if (!r) return {};
                var [i] = r;
                return g(i, $);
            }
            var { anchor: s } = n,
                { path: a } = s,
                [o] = J.leaf(e, a);
            if (0 === s.offset) {
                var l = J.previous(e, { at: a, match: eC.isText });
                if (!J.above(e, { match: (t) => z.isElement(t) && J.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = J.above(e, { match: (t) => z.isElement(t) && J.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l,
                            [, _] = u;
                        el.isAncestor(_, d) && (o = c);
                    }
                }
            }
            return g(o, q);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: s = e.selection } = t;
            if (s) {
                var a = J.after(e, s, { voids: r });
                if (a) {
                    var [, o] = J.last(e, []),
                        l = [a.path, o];
                    if (el.isPath(s) && 0 === s.length) throw Error("Cannot get the next node from the root node!");
                    if (null == i)
                        if (el.isPath(s)) {
                            var [u] = J.parent(e, s);
                            i = (e) => u.children.includes(e);
                        } else i = () => !0;
                    var [c] = J.nodes(e, { at: l, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = J.path(e, t, n);
            return [ei.get(e, r), r];
        },
        *nodes(e) {
            var t,
                n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: s = e.selection, mode: a = "all", universal: o = !1, reverse: l = !1, voids: u = !1 } = i,
                { match: c } = i;
            if ((c || (c = () => !0), s)) {
                if (ee.isSpan(s)) (t = s[0]), (n = s[1]);
                else {
                    var d = J.path(e, s, { edge: "start" }),
                        _ = J.path(e, s, { edge: "end" });
                    (t = l ? _ : d), (n = l ? d : _);
                }
                var f = ei.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !u && z.isElement(n) && J.isVoid(e, n);
                        },
                    }),
                    p = [];
                for (var [h, m] of f) {
                    var E = r && 0 === el.compare(m, r[1]);
                    if ("highest" !== a || !E) {
                        if (!c(h, m))
                            if (o && !E && eC.isText(h)) return;
                            else continue;
                        if ("lowest" === a && E) {
                            r = [h, m];
                            continue;
                        }
                        var g = "lowest" === a ? r : [h, m];
                        g && (o ? p.push(g) : yield g), (r = [h, m]);
                    }
                }
                "lowest" === a && r && (o ? p.push(r) : yield r), o && (yield* p);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: r } = t,
                i = (e) => o.get(e) || [],
                s = (e) => l.get(e) || new Set(),
                a = (e) => {
                    var t = i(e).pop(),
                        n = t.join(",");
                    return s(e).delete(n), t;
                };
            if (J.isNormalizing(e)) {
                if (n) {
                    var u = Array.from(ei.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        c = new Set(u.map((e) => e.join(",")));
                    o.set(e, u), l.set(e, c);
                }
                0 !== i(e).length &&
                    J.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (ei.has(e, t)) {
                                var n = J.node(e, t),
                                    [s, o] = n;
                                z.isElement(s) && 0 === s.children.length && e.normalizeNode(n, { operation: r });
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
                            var d = a(e);
                            if (ei.has(e, d)) {
                                var _ = J.node(e, d);
                                e.normalizeNode(_, { operation: r });
                            }
                            c++, (l = i(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = J.path(e, t, n),
                i = el.parent(r);
            return J.node(e, i);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: r, edge: i } = n;
            if (el.isPath(t)) {
                if ("start" === i) {
                    var [, s] = ei.first(e, t);
                    t = s;
                } else if ("end" === i) {
                    var [, a] = ei.last(e, t);
                    t = a;
                }
            }
            return (
                eE.isRange(t) &&
                    (t =
                        "start" === i ? eE.start(t) : "end" === i ? eE.end(t) : el.common(t.anchor.path, t.focus.path)),
                e_.isPoint(t) && (t = t.path),
                null != r && (t = t.slice(0, r)),
                t
            );
        },
        hasPath: (e, t) => ei.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return J.pathRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return J.pathRefs(e).add(i), i;
        },
        pathRefs(e) {
            var t = d.get(e);
            return t || ((t = new Set()), d.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: r = "start" } = n;
            if (el.isPath(t)) {
                if ("end" === r) {
                    var i,
                        [, s] = ei.last(e, t);
                    i = s;
                } else {
                    var [, a] = ei.first(e, t);
                    i = a;
                }
                var o = ei.get(e, i);
                if (!eC.isText(o))
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
                        return J.pointRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return J.pointRefs(e).add(i), i;
        },
        pointRefs(e) {
            var t = _.get(e);
            return t || ((t = new Set()), _.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: i = !1, voids: s = !1 } = t;
            if (n) {
                var a = J.range(e, n),
                    [o, l] = eE.edges(a),
                    u = i ? l : o,
                    c = !1,
                    d = "",
                    _ = 0,
                    f = 0,
                    p = 0;
                for (var [h, m] of J.nodes(e, { at: n, reverse: i, voids: s })) {
                    if (z.isElement(h)) {
                        if (!s && e.isVoid(h)) {
                            yield J.start(e, m);
                            continue;
                        }
                        if (e.isInline(h)) continue;
                        if (J.hasInlines(e, h)) {
                            var E = el.isAncestor(m, l.path) ? l : J.end(e, m),
                                g = el.isAncestor(m, o.path) ? o : J.start(e, m);
                            (d = J.string(e, { anchor: g, focus: E }, { voids: s })), (c = !0);
                        }
                    }
                    if (eC.isText(h)) {
                        var I = el.equals(m, u.path);
                        for (
                            I
                                ? ((f = i ? u.offset : h.text.length - u.offset), (p = u.offset))
                                : ((f = h.text.length), (p = i ? f : 0)),
                                (I || c || "offset" === r) && (yield { path: m, offset: p }, (c = !1));
                            ;
                        ) {
                            if (0 === _) {
                                if ("" === d) break;
                                (_ = T(d, r, i)), (d = v(d, _, i)[1]);
                            }
                            if (((p = i ? p - _ : p + _), (f -= _) < 0)) {
                                _ = -f;
                                break;
                            }
                            (_ = 0), yield { path: m, offset: p };
                        }
                    }
                }
            }
            function T(e, t, n) {
                return "character" === t
                    ? A(e, n)
                    : "word" === t
                      ? y(e, n)
                      : "line" === t || "block" === t
                        ? e.length
                        : 1;
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: s = e.selection } = t;
            if (s) {
                var a = J.before(e, s, { voids: r });
                if (a) {
                    var [, o] = J.first(e, []),
                        l = [a.path, o];
                    if (el.isPath(s) && 0 === s.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == i)
                        if (el.isPath(s)) {
                            var [u] = J.parent(e, s);
                            i = (e) => u.children.includes(e);
                        } else i = () => !0;
                    var [c] = J.nodes(e, { reverse: !0, at: l, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        range: (e, t, n) => (eE.isRange(t) && !n ? t : { anchor: J.start(e, t), focus: J.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return J.rangeRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return J.rangeRefs(e).add(i), i;
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
        start: (e, t) => J.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                i = J.range(e, t),
                [s, a] = eE.edges(i),
                o = "";
            for (var [l, u] of J.nodes(e, { at: i, match: eC.isText, voids: r })) {
                var c = l.text;
                el.equals(u, a.path) && (c = c.slice(0, a.offset)),
                    el.equals(u, s.path) && (c = c.slice(s.offset)),
                    (o += c);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [i, s] = eE.edges(t);
            if (0 !== i.offset || 0 !== s.offset || eE.isCollapsed(t) || el.hasPrevious(s.path)) return t;
            var a = J.above(e, { at: s, match: (t) => z.isElement(t) && J.isBlock(e, t), voids: r }),
                o = a ? a[1] : [],
                l = { anchor: J.start(e, i), focus: s },
                u = !0;
            for (var [c, d] of J.nodes(e, { at: l, match: eC.isText, reverse: !0, voids: r })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ("" !== c.text || el.isBefore(d, o)) {
                    s = { path: d, offset: c.text.length };
                    break;
                }
            }
            return { anchor: i, focus: s };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return J.above(e, X(X({}, t), {}, { match: (t) => z.isElement(t) && J.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = J.isNormalizing(e);
            J.setNormalizing(e, !1);
            try {
                t();
            } finally {
                J.setNormalizing(e, n);
            }
            J.normalize(e);
        },
    },
    ee = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(el.isPath) },
    et = ["children"],
    en = ["text"],
    er = new WeakMap(),
    ei = {
        ancestor(e, t) {
            var n = ei.get(e, t);
            if (eC.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(eI.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of el.ancestors(t, n)) {
                var i = [ei.ancestor(e, r), r];
                yield i;
            }
        },
        child(e, t) {
            if (eC.isText(e)) throw Error("Cannot get the child of a text node: ".concat(eI.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(eI.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    i = ei.ancestor(e, t),
                    { children: s } = i,
                    a = r ? s.length - 1 : 0;
                r ? a >= 0 : a < s.length;
            ) {
                var o = ei.child(i, a),
                    l = t.concat(a);
                yield [o, l], (a = r ? a - 1 : a + 1);
            }
        },
        common(e, t, n) {
            var r = el.common(t, n);
            return [ei.get(e, r), r];
        },
        descendant(e, t) {
            var n = ei.get(e, t);
            if (J.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(eI.stringify(n)),
                );
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ei.nodes(e, t)) 0 !== r.length && (yield [n, r]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ei.nodes(e, t)) z.isElement(n) && (yield [n, r]);
        },
        extractProps(e) {
            if (z.isAncestor(e)) {
                var t = g(e, et);
                return t;
            }
            var t = g(e, en);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = ei.get(e, n); r; )
                if (eC.isText(r) || 0 === r.children.length) break;
                else (r = r.children[0]), n.push(0);
            return [r, n];
        },
        fragment(e, t) {
            if (eC.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(eI.stringify(e)));
            return (0, s.jM)({ children: e.children }, (e) => {
                var [n, r] = eE.edges(t);
                for (var [, i] of ei.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !eE.includes(t, n);
                    },
                })) {
                    if (!eE.includes(t, i)) {
                        var s = ei.parent(e, i),
                            a = i[i.length - 1];
                        s.children.splice(a, 1);
                    }
                    if (el.equals(i, r.path)) {
                        var o = ei.leaf(e, i);
                        o.text = o.text.slice(0, r.offset);
                    }
                    if (el.equals(i, n.path)) {
                        var l = ei.leaf(e, i);
                        l.text = l.text.slice(n.offset);
                    }
                }
                J.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eC.isText(n) || !n.children[i])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(eI.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eC.isText(n) || !n.children[i]) return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: (e) => eC.isText(e) || z.isElement(e) || J.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = er.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => ei.isNode(e));
            return er.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = ei.get(e, n); r; )
                if (eC.isText(r) || 0 === r.children.length) break;
                else {
                    var i = r.children.length - 1;
                    (r = r.children[i]), n.push(i);
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = ei.get(e, t);
            if (!eC.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(eI.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of el.levels(t, n)) {
                var i = ei.get(e, r);
                yield [i, r];
            }
        },
        matches: (e, t) =>
            (z.isElement(e) && z.isElementProps(t) && z.matches(e, t)) ||
            (eC.isText(e) && eC.isTextProps(t) && eC.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: i = [], to: s } = t,
                    a = new Set(),
                    o = [],
                    l = e;
                !(s && (r ? el.isBefore(o, s) : el.isAfter(o, s)));
            ) {
                if (
                    (a.has(l) || (yield [l, o]),
                    !a.has(l) && !eC.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, o])))
                ) {
                    a.add(l);
                    var u = r ? l.children.length - 1 : 0;
                    el.isAncestor(o, i) && (u = i[o.length]), (o = o.concat(u)), (l = ei.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!r) {
                    var c = el.next(o);
                    if (ei.has(e, c)) {
                        (o = c), (l = ei.get(e, o));
                        continue;
                    }
                }
                if (r && 0 !== o[o.length - 1]) {
                    (o = el.previous(o)), (l = ei.get(e, o));
                    continue;
                }
                (o = el.parent(o)), (l = ei.get(e, o)), a.add(l);
            }
        },
        parent(e, t) {
            var n = el.parent(t),
                r = ei.get(e, n);
            if (eC.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (eC.isText(e) ? e.text : e.children.map(ei.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ei.nodes(e, t)) eC.isText(n) && (yield [n, r]);
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
function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? es(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : es(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eo = {
        isNodeOperation: (e) => eo.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!(0, i.Q)(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return el.isPath(e.path) && ei.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && el.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && el.isPath(e.path) && (0, i.Q)(e.properties);
                case "move_node":
                    return el.isPath(e.path) && el.isPath(e.newPath);
                case "set_node":
                    return el.isPath(e.path) && (0, i.Q)(e.properties) && (0, i.Q)(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && eE.isRange(e.newProperties)) ||
                        (null === e.newProperties && eE.isRange(e.properties)) ||
                        ((0, i.Q)(e.properties) && (0, i.Q)(e.newProperties))
                    );
                case "split_node":
                    return el.isPath(e.path) && "number" == typeof e.position && (0, i.Q)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => eo.isOperation(e)),
        isSelectionOperation: (e) => eo.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => eo.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return ea(ea({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return ea(ea({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return ea(ea({}, e), {}, { type: "split_node", path: el.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (el.equals(t, n)) return e;
                    if (el.isSibling(n, t)) return ea(ea({}, e), {}, { path: t, newPath: n });
                    var r = el.transform(n, e),
                        i = el.transform(el.next(n), e);
                    return ea(ea({}, e), {}, { path: r, newPath: i });
                case "remove_node":
                    return ea(ea({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return ea(ea({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: s, newProperties: a } = e;
                    return ea(ea({}, e), {}, { properties: a, newProperties: s });
                case "set_selection":
                    var { properties: o, newProperties: l } = e;
                    if (null == o) return ea(ea({}, e), {}, { properties: l, newProperties: null });
                    if (null == l) return ea(ea({}, e), {}, { properties: null, newProperties: o });
                    return ea(ea({}, e), {}, { properties: l, newProperties: o });
                case "split_node":
                    return ea(ea({}, e), {}, { type: "merge_node", path: el.next(e.path) });
            }
        },
    },
    el = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                r = el.levels(e, t);
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
                s = e[n],
                a = t[n];
            return el.equals(r, i) && s > a;
        },
        endsAt(e, t) {
            var n = e.length,
                r = e.slice(0, n),
                i = t.slice(0, n);
            return el.equals(r, i);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                s = e[n],
                a = t[n];
            return el.equals(r, i) && s < a;
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
        isPath: (e) => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && el.equals(n, r);
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
            if (!el.isAncestor(t, e) && !el.equals(e, t))
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
                    var { path: s } = t;
                    (el.equals(s, r) || el.endsBefore(s, r) || el.isAncestor(s, r)) && (r[s.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: a } = t;
                    if (el.equals(a, r) || el.isAncestor(a, r)) return null;
                    el.endsBefore(a, r) && (r[a.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: l } = t;
                    el.equals(o, r) || el.endsBefore(o, r)
                        ? (r[o.length - 1] -= 1)
                        : el.isAncestor(o, r) && ((r[o.length - 1] -= 1), (r[o.length] += l));
                    break;
                case "split_node":
                    var { path: u, position: c } = t;
                    if (el.equals(u, r)) {
                        if ("forward" === i) r[r.length - 1] += 1;
                        else if ("backward" !== i) return null;
                    } else
                        el.endsBefore(u, r)
                            ? (r[u.length - 1] += 1)
                            : el.isAncestor(u, r) && e[u.length] >= c && ((r[u.length - 1] += 1), (r[u.length] -= c));
                    break;
                case "move_node":
                    var { path: d, newPath: _ } = t;
                    if (el.equals(d, _)) break;
                    if (el.isAncestor(d, r) || el.equals(d, r)) {
                        var f = _.slice();
                        return (
                            el.endsBefore(d, _) && d.length < _.length && (f[d.length - 1] -= 1),
                            f.concat(r.slice(d.length))
                        );
                    }
                    el.isSibling(d, _) && (el.isAncestor(_, r) || el.equals(_, r))
                        ? el.endsBefore(d, r)
                            ? (r[d.length - 1] -= 1)
                            : (r[d.length - 1] += 1)
                        : el.endsBefore(_, r) || el.equals(_, r) || el.isAncestor(_, r)
                          ? (el.endsBefore(d, r) && (r[d.length - 1] -= 1), (r[_.length - 1] += 1))
                          : el.endsBefore(d, r) && (el.equals(_, r) && (r[_.length - 1] += 1), (r[d.length - 1] -= 1));
            }
            return r;
        },
    },
    eu = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = el.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    };
function ec(e, t) {
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
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ec(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ec(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e_ = {
        compare(e, t) {
            var n = el.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === e_.compare(e, t),
        isBefore: (e, t) => -1 === e_.compare(e, t),
        equals: (e, t) => e.offset === t.offset && el.equals(e.path, t.path),
        isPoint: (e) => (0, i.Q)(e) && "number" == typeof e.offset && el.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, s.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: i, offset: s } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = el.transform(i, t, n);
                        break;
                    case "insert_text":
                        el.equals(t.path, i) &&
                            (t.offset < s || (t.offset === s && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        el.equals(t.path, i) && (e.offset += t.position), (e.path = el.transform(i, t, n));
                        break;
                    case "remove_text":
                        el.equals(t.path, i) && t.offset <= s && (e.offset -= Math.min(s - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (el.equals(t.path, i) || el.isAncestor(t.path, i)) return null;
                        e.path = el.transform(i, t, n);
                        break;
                    case "split_node":
                        if (el.equals(t.path, i))
                            if (t.position === s && null == r) return null;
                            else
                                (t.position < s || (t.position === s && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = el.transform(i, t, ed(ed({}, n), {}, { affinity: "forward" }))));
                        else e.path = el.transform(i, t, n);
                }
            });
        },
    },
    ef = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = e_.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    ep = ["anchor", "focus"];
function eh(e, t) {
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
function em(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eh(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eh(Object(n)).forEach(function (t) {
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
        equals: (e, t) => e_.equals(e.anchor, t.anchor) && e_.equals(e.focus, t.focus),
        includes(e, t) {
            if (eE.isRange(t)) {
                if (eE.includes(e, t.anchor) || eE.includes(e, t.focus)) return !0;
                var [n, r] = eE.edges(e),
                    [i, s] = eE.edges(t);
                return e_.isBefore(n, i) && e_.isAfter(r, s);
            }
            var [a, o] = eE.edges(e),
                l = !1,
                u = !1;
            return (
                e_.isPoint(t)
                    ? ((l = e_.compare(t, a) >= 0), (u = 0 >= e_.compare(t, o)))
                    : ((l = el.compare(t, a.path) >= 0), (u = 0 >= el.compare(t, o.path))),
                l && u
            );
        },
        intersection(e, t) {
            var n = g(e, ep),
                [r, i] = eE.edges(e),
                [s, a] = eE.edges(t),
                o = e_.isBefore(r, s) ? s : r,
                l = e_.isBefore(i, a) ? i : a;
            return e_.isBefore(l, o) ? null : em({ anchor: o, focus: l }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return e_.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return e_.equals(t, n);
        },
        isExpanded: (e) => !eE.isCollapsed(e),
        isForward: (e) => !eE.isBackward(e),
        isRange: (e) => (0, i.Q)(e) && e_.isPoint(e.anchor) && e_.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = eE.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, s.jM)(e, (e) => {
                if (null === e) return null;
                var r,
                    i,
                    { affinity: s = "inward" } = n;
                if ("inward" === s) {
                    var a = eE.isCollapsed(e);
                    eE.isForward(e)
                        ? ((r = "forward"), (i = a ? r : "backward"))
                        : ((r = "backward"), (i = a ? r : "forward"));
                } else
                    "outward" === s
                        ? eE.isForward(e)
                            ? ((r = "backward"), (i = "forward"))
                            : ((r = "forward"), (i = "backward"))
                        : ((r = s), (i = s));
                var o = e_.transform(e.anchor, t, { affinity: r }),
                    l = e_.transform(e.focus, t, { affinity: i });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        },
    },
    eg = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = eE.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    eA = void 0,
    eI = {
        setScrubber(e) {
            eA = e;
        },
        stringify: (e) => JSON.stringify(e, eA),
    },
    eT = (e, t) => {
        for (var n in e) {
            var r = e[n],
                s = t[n];
            if ((0, i.Q)(r) && (0, i.Q)(s)) {
                if (!eT(r, s)) return !1;
            } else if (Array.isArray(r) && Array.isArray(s)) {
                if (r.length !== s.length) return !1;
                for (var a = 0; a < r.length; a++) if (r[a] !== s[a]) return !1;
            } else if (r !== s) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    eS = ["text"],
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
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ev(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ev(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eC = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;
        function i(e) {
            return g(e, eS);
        }
        return eT(r ? i(e) : e, r ? i(t) : t);
    },
    isText: (e) => (0, i.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eC.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [eN({}, e)];
        for (var r of t) {
            var i = g(r, ey),
                [s, a] = eE.edges(r),
                o = [],
                l = 0,
                u = s.offset,
                c = a.offset;
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
                var p = d,
                    h = void 0,
                    m = void 0;
                if (c < l) {
                    var E = c - f;
                    (m = eN(eN({}, p), {}, { text: p.text.slice(E) })),
                        (p = eN(eN({}, p), {}, { text: p.text.slice(0, E) }));
                }
                if (u > f) {
                    var A = u - f;
                    (h = eN(eN({}, p), {}, { text: p.text.slice(0, A) })),
                        (p = eN(eN({}, p), {}, { text: p.text.slice(A) }));
                }
                Object.assign(p, i), h && o.push(h), o.push(p), m && o.push(m);
            }
            n = o;
        }
        return n;
    },
};
function eb(e, t) {
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
            ? eb(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eb(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eO = (e, t, n) => {
        switch (n.type) {
            case "insert_node":
                var { path: r, node: i } = n,
                    s = ei.parent(e, r),
                    a = r[r.length - 1];
                if (a > s.children.length)
                    throw Error(
                        'Cannot apply an "insert_node" operation at path ['.concat(
                            r,
                            "] because the destination is past the end of the node.",
                        ),
                    );
                if ((s.children.splice(a, 0, i), t)) for (var [o, l] of eE.points(t)) t[l] = e_.transform(o, n);
                break;
            case "insert_text":
                var { path: u, offset: c, text: d } = n;
                if (0 === d.length) break;
                var _ = ei.leaf(e, u),
                    f = _.text.slice(0, c),
                    p = _.text.slice(c);
                if (((_.text = f + d + p), t)) for (var [h, m] of eE.points(t)) t[m] = e_.transform(h, n);
                break;
            case "merge_node":
                var { path: E } = n,
                    g = ei.get(e, E),
                    A = el.previous(E),
                    I = ei.get(e, A),
                    T = ei.parent(e, E),
                    S = E[E.length - 1];
                if (eC.isText(g) && eC.isText(I)) I.text += g.text;
                else if (eC.isText(g) || eC.isText(I))
                    throw Error(
                        'Cannot apply a "merge_node" operation at path ['
                            .concat(E, "] to nodes of different interfaces: ")
                            .concat(eI.stringify(g), " ")
                            .concat(eI.stringify(I)),
                    );
                else I.children.push(...g.children);
                if ((T.children.splice(S, 1), t)) for (var [y, v] of eE.points(t)) t[v] = e_.transform(y, n);
                break;
            case "move_node":
                var { path: N, newPath: C } = n;
                if (el.isAncestor(N, C))
                    throw Error(
                        "Cannot move a path ["
                            .concat(N, "] to new path [")
                            .concat(C, "] because the destination is inside itself."),
                    );
                var b = ei.get(e, N),
                    R = ei.parent(e, N),
                    O = N[N.length - 1];
                R.children.splice(O, 1);
                var D = el.transform(N, n),
                    L = ei.get(e, el.parent(D)),
                    w = D[D.length - 1];
                if ((L.children.splice(w, 0, b), t)) for (var [x, M] of eE.points(t)) t[M] = e_.transform(x, n);
                break;
            case "remove_node":
                var { path: P } = n,
                    k = P[P.length - 1];
                if ((ei.parent(e, P).children.splice(k, 1), t))
                    for (var [U, G] of eE.points(t)) {
                        var F = e_.transform(U, n);
                        if (null != t && null != F) t[G] = F;
                        else {
                            var V = void 0,
                                B = void 0;
                            for (var [H, j] of ei.texts(e))
                                if (-1 === el.compare(j, P)) V = [H, j];
                                else {
                                    B = [H, j];
                                    break;
                                }
                            var Y = !1;
                            V &&
                                B &&
                                (Y = el.equals(B[1], P)
                                    ? !el.hasPrevious(B[1])
                                    : el.common(V[1], P).length < el.common(B[1], P).length),
                                V && !Y
                                    ? ((U.path = V[1]), (U.offset = V[0].text.length))
                                    : B
                                      ? ((U.path = B[1]), (U.offset = 0))
                                      : (t = null);
                        }
                    }
                break;
            case "remove_text":
                var { path: W, offset: K, text: z } = n;
                if (0 === z.length) break;
                var $ = ei.leaf(e, W),
                    q = $.text.slice(0, K),
                    Z = $.text.slice(K + z.length);
                if ((($.text = q + Z), t)) for (var [X, Q] of eE.points(t)) t[Q] = e_.transform(X, n);
                break;
            case "set_node":
                var { path: J, properties: ee, newProperties: et } = n;
                if (0 === J.length) throw Error("Cannot set properties on the root node!");
                var en = ei.get(e, J);
                for (var er in et) {
                    if ("children" === er || "text" === er)
                        throw Error('Cannot set the "'.concat(er, '" property of nodes!'));
                    var es = et[er];
                    null == es ? delete en[er] : (en[er] = es);
                }
                for (var ea in ee) et.hasOwnProperty(ea) || delete en[ea];
                break;
            case "set_selection":
                var { newProperties: eo } = n;
                if (null == eo) t = eo;
                else {
                    if (null == t) {
                        if (!eE.isRange(eo))
                            throw Error(
                                'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    eI.stringify(eo),
                                    " when there is no current selection.",
                                ),
                            );
                        t = eR({}, eo);
                    }
                    for (var eu in eo) {
                        var ec = eo[eu];
                        if (null == ec) {
                            if ("anchor" === eu || "focus" === eu)
                                throw Error('Cannot remove the "'.concat(eu, '" selection property'));
                            delete t[eu];
                        } else t[eu] = ec;
                    }
                }
                break;
            case "split_node":
                var ed,
                    { path: ef, position: ep, properties: eh } = n;
                if (0 === ef.length)
                    throw Error(
                        'Cannot apply a "split_node" operation at path ['.concat(
                            ef,
                            "] because the root node cannot be split.",
                        ),
                    );
                var em = ei.get(e, ef),
                    eg = ei.parent(e, ef),
                    eA = ef[ef.length - 1];
                if (eC.isText(em)) {
                    var eT = em.text.slice(0, ep),
                        eS = em.text.slice(ep);
                    (em.text = eT), (ed = eR(eR({}, eh), {}, { text: eS }));
                } else {
                    var ey = em.children.slice(0, ep),
                        ev = em.children.slice(ep);
                    (em.children = ey), (ed = eR(eR({}, eh), {}, { children: ev }));
                }
                if ((eg.children.splice(eA + 1, 0, ed), t))
                    for (var [eN, eb] of eE.points(t)) t[eb] = e_.transform(eN, n);
        }
        return t;
    },
    eD = {
        transform(e, t) {
            e.children = (0, s.mq)(e.children);
            var n = e.selection && (0, s.mq)(e.selection);
            try {
                n = eO(e, n, t);
            } finally {
                (e.children = (0, s.vD)(e.children)),
                    n ? (e.selection = (0, s.Qx)(n) ? (0, s.vD)(n) : n) : (e.selection = null);
            }
        },
    },
    eL = ["text"],
    ew = ["children"];
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
function eM(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ex(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ex(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eP = {
        insertNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var { hanging: r = !1, voids: i = !1, mode: s = "lowest" } = n,
                    { at: a, match: o, select: l } = n;
                if ((ei.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [u] = t;
                    if (
                        (a || ((a = e.selection ? e.selection : e.children.length > 0 ? J.end(e, []) : [0]), (l = !0)),
                        null == l && (l = !1),
                        eE.isRange(a))
                    )
                        if ((r || (a = J.unhangRange(e, a, { voids: i })), eE.isCollapsed(a))) a = a.anchor;
                        else {
                            var [, c] = eE.edges(a),
                                d = J.pointRef(e, c);
                            eW.delete(e, { at: a }), (a = d.unref());
                        }
                    if (e_.isPoint(a)) {
                        null == o &&
                            (o = eC.isText(u)
                                ? (e) => eC.isText(e)
                                : e.isInline(u)
                                  ? (t) => eC.isText(t) || J.isInline(e, t)
                                  : (t) => z.isElement(t) && J.isBlock(e, t));
                        var [_] = J.nodes(e, { at: a.path, match: o, mode: s, voids: i });
                        if (!_) return;
                        var [, f] = _,
                            p = J.pathRef(e, f),
                            h = J.isEnd(e, a, f);
                        eW.splitNodes(e, { at: a, match: o, mode: s, voids: i });
                        var m = p.unref();
                        a = h ? el.next(m) : m;
                    }
                    var E = el.parent(a),
                        g = a[a.length - 1];
                    if (!(!i && J.void(e, { at: E }))) {
                        for (var A of t) {
                            var I = E.concat(g);
                            g++, e.apply({ type: "insert_node", path: I, node: A }), (a = el.next(a));
                        }
                        if (((a = el.previous(a)), l)) {
                            var T = J.end(e, a);
                            T && eW.select(e, T);
                        }
                    }
                }
            });
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
                    { match: s } = t;
                if ((null == s && (s = el.isPath(n) ? eG(e, n) : (t) => z.isElement(t) && J.isBlock(e, t)), n)) {
                    var a = J.nodes(e, { at: n, match: s, mode: r, voids: i }),
                        o = Array.from(a, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        });
                    for (var l of o) {
                        var u = l.unref();
                        if (u.length < 2)
                            throw Error(
                                "Cannot lift node at a path [".concat(u, "] because it has a depth of less than `2`."),
                            );
                        var [c, d] = J.node(e, el.parent(u)),
                            _ = u[u.length - 1],
                            { length: f } = c.children;
                        if (1 === f) {
                            var p = el.next(d);
                            eW.moveNodes(e, { at: u, to: p, voids: i }), eW.removeNodes(e, { at: d, voids: i });
                        } else if (0 === _) eW.moveNodes(e, { at: u, to: d, voids: i });
                        else if (_ === f - 1) {
                            var h = el.next(d);
                            eW.moveNodes(e, { at: u, to: h, voids: i });
                        } else {
                            var m = el.next(u),
                                E = el.next(d);
                            eW.splitNodes(e, { at: m, voids: i }), eW.moveNodes(e, { at: u, to: E, voids: i });
                        }
                    }
                }
            });
        },
        mergeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var n,
                    r,
                    { match: i, at: s = e.selection } = t,
                    { hanging: a = !1, voids: o = !1, mode: l = "lowest" } = t;
                if (s) {
                    if (null == i)
                        if (el.isPath(s)) {
                            var [u] = J.parent(e, s);
                            i = (e) => u.children.includes(e);
                        } else i = (t) => z.isElement(t) && J.isBlock(e, t);
                    if ((!a && eE.isRange(s) && (s = J.unhangRange(e, s, { voids: o })), eE.isRange(s)))
                        if (eE.isCollapsed(s)) s = s.anchor;
                        else {
                            var [, c] = eE.edges(s),
                                d = J.pointRef(e, c);
                            eW.delete(e, { at: s }), (s = d.unref()), null == t.at && eW.select(e, s);
                        }
                    var [_] = J.nodes(e, { at: s, match: i, voids: o, mode: l }),
                        f = J.previous(e, { at: s, match: i, voids: o, mode: l });
                    if (_ && f) {
                        var [p, h] = _,
                            [m, E] = f;
                        if (0 !== h.length && 0 !== E.length) {
                            var A = el.next(E),
                                I = el.common(h, E),
                                T = el.isSibling(h, E),
                                S = Array.from(J.levels(e, { at: h }), (e) => {
                                    var [t] = e;
                                    return t;
                                })
                                    .slice(I.length)
                                    .slice(0, -1),
                                y = J.above(e, { at: h, mode: "highest", match: (t) => S.includes(t) && ek(e, t) }),
                                v = y && J.pathRef(e, y[1]);
                            if (eC.isText(p) && eC.isText(m)) {
                                var N = g(p, eL);
                                (r = m.text.length), (n = N);
                            } else if (z.isElement(p) && z.isElement(m)) {
                                var N = g(p, ew);
                                (r = m.children.length), (n = N);
                            } else
                                throw Error(
                                    "Cannot merge the node at path ["
                                        .concat(h, "] with the previous sibling because it is not the same kind: ")
                                        .concat(eI.stringify(p), " ")
                                        .concat(eI.stringify(m)),
                                );
                            T || eW.moveNodes(e, { at: h, to: A, voids: o }),
                                v && eW.removeNodes(e, { at: v.current, voids: o }),
                                (z.isElement(m) && J.isEmpty(e, m)) ||
                                (eC.isText(m) && "" === m.text && 0 !== E[E.length - 1])
                                    ? eW.removeNodes(e, { at: E, voids: o })
                                    : e.apply({ type: "merge_node", path: A, position: r, properties: n }),
                                v && v.unref();
                        }
                    }
                }
            });
        },
        moveNodes(e, t) {
            J.withoutNormalizing(e, () => {
                var { to: n, at: r = e.selection, mode: i = "lowest", voids: s = !1 } = t,
                    { match: a } = t;
                if (r) {
                    null == a && (a = el.isPath(r) ? eG(e, r) : (t) => z.isElement(t) && J.isBlock(e, t));
                    var o = J.pathRef(e, n),
                        l = J.nodes(e, { at: r, match: a, mode: i, voids: s }),
                        u = Array.from(l, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        });
                    for (var c of u) {
                        var d = c.unref(),
                            _ = o.current;
                        0 !== d.length && e.apply({ type: "move_node", path: d, newPath: _ }),
                            o.current && el.isSibling(_, d) && el.isAfter(_, d) && (o.current = el.next(o.current));
                    }
                    o.unref();
                }
            });
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
                    { at: s = e.selection, match: a } = t;
                if (s) {
                    null == a && (a = el.isPath(s) ? eG(e, s) : (t) => z.isElement(t) && J.isBlock(e, t)),
                        !n && eE.isRange(s) && (s = J.unhangRange(e, s, { voids: r }));
                    var o = J.nodes(e, { at: s, match: a, mode: i, voids: r }),
                        l = Array.from(o, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        });
                    for (var u of l) {
                        var c = u.unref();
                        if (c) {
                            var [d] = J.node(e, c);
                            e.apply({ type: "remove_node", path: c, node: d });
                        }
                    }
                }
            });
        },
        setNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var { match: r, at: i = e.selection, compare: s, merge: a } = n,
                    { hanging: o = !1, mode: l = "lowest", split: u = !1, voids: c = !1 } = n;
                if (i) {
                    if (
                        (null == r && (r = el.isPath(i) ? eG(e, i) : (t) => z.isElement(t) && J.isBlock(e, t)),
                        !o && eE.isRange(i) && (i = J.unhangRange(e, i, { voids: c })),
                        u && eE.isRange(i))
                    ) {
                        if (eE.isCollapsed(i) && J.leaf(e, i.anchor)[0].text.length > 0) return;
                        var d = J.rangeRef(e, i, { affinity: "inward" }),
                            [_, f] = eE.edges(i),
                            p = "lowest" === l ? "lowest" : "highest",
                            h = J.isEnd(e, f, f.path);
                        eW.splitNodes(e, { at: f, match: r, mode: p, voids: c, always: !h });
                        var m = J.isStart(e, _, _.path);
                        eW.splitNodes(e, { at: _, match: r, mode: p, voids: c, always: !m }),
                            (i = d.unref()),
                            null == n.at && eW.select(e, i);
                    }
                    for (var [E, g] of (s || (s = (e, t) => e !== t),
                    J.nodes(e, { at: i, match: r, mode: l, voids: c }))) {
                        var A = {},
                            I = {};
                        if (0 !== g.length) {
                            var T = !1;
                            for (var S in t)
                                "children" !== S &&
                                    "text" !== S &&
                                    s(t[S], E[S]) &&
                                    ((T = !0),
                                    E.hasOwnProperty(S) && (A[S] = E[S]),
                                    a ? null != t[S] && (I[S] = a(E[S], t[S])) : null != t[S] && (I[S] = t[S]));
                            T && e.apply({ type: "set_node", path: g, properties: A, newProperties: I });
                        }
                    }
                }
            });
        },
        splitNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var n,
                    r,
                    { mode: i = "lowest", voids: s = !1 } = t,
                    { match: a, at: o = e.selection, height: l = 0, always: u = !1 } = t;
                if (
                    (null == a && (a = (t) => z.isElement(t) && J.isBlock(e, t)),
                    eE.isRange(o) && (o = eU(e, o)),
                    el.isPath(o))
                ) {
                    var c = o,
                        d = J.point(e, c),
                        [_] = J.parent(e, c);
                    (a = (e) => e === _), (l = d.path.length - c.length + 1), (o = d), (u = !0);
                }
                if (o) {
                    var f = J.pointRef(e, o, { affinity: "backward" });
                    try {
                        var [p] = J.nodes(e, { at: o, match: a, mode: i, voids: s });
                        if (!p) return;
                        var h = J.void(e, { at: o, mode: "highest" }),
                            m = 0;
                        if (!s && h) {
                            var [E, g] = h;
                            if (z.isElement(E) && e.isInline(E)) {
                                var A = J.after(e, g);
                                if (!A) {
                                    var I = { text: "" },
                                        T = el.next(g);
                                    eW.insertNodes(e, I, { at: T, voids: s }), (A = J.point(e, T));
                                }
                                (o = A), (u = !0);
                            }
                            (l = o.path.length - g.length + 1), (u = !0);
                        }
                        n = J.pointRef(e, o);
                        var S = o.path.length - l,
                            [, y] = p,
                            v = o.path.slice(0, S),
                            N = 0 === l ? o.offset : o.path[S] + m;
                        for (var [C, b] of J.levels(e, { at: v, reverse: !0, voids: s })) {
                            var R = !1;
                            if (b.length < y.length || 0 === b.length || (!s && z.isElement(C) && J.isVoid(e, C)))
                                break;
                            var O = f.current,
                                D = J.isEnd(e, O, b);
                            if (u || !f || !J.isEdge(e, O, b)) {
                                R = !0;
                                var L = ei.extractProps(C);
                                e.apply({ type: "split_node", path: b, position: N, properties: L });
                            }
                            N = b[b.length - 1] + (R || D ? 1 : 0);
                        }
                        if (null == t.at) {
                            var w = n.current || J.end(e, []);
                            eW.select(e, w);
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
            eW.setNodes(e, r, n);
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                    { at: s = e.selection, match: a } = t;
                if (s) {
                    null == a && (a = el.isPath(s) ? eG(e, s) : (t) => z.isElement(t) && J.isBlock(e, t)),
                        el.isPath(s) && (s = J.range(e, s));
                    var o = eE.isRange(s) ? J.rangeRef(e, s) : null,
                        l = J.nodes(e, { at: s, match: a, mode: n, voids: i }),
                        u = Array.from(l, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        }).reverse(),
                        c = function (t) {
                            var n = t.unref(),
                                [s] = J.node(e, n),
                                a = J.range(e, n);
                            r && o && (a = eE.intersection(o.current, a)),
                                eW.liftNodes(e, {
                                    at: a,
                                    match: (e) => z.isAncestor(s) && s.children.includes(e),
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
            J.withoutNormalizing(e, () => {
                var { mode: r = "lowest", split: i = !1, voids: s = !1 } = n,
                    { match: a, at: o = e.selection } = n;
                if (o) {
                    if (
                        (null == a &&
                            (a = el.isPath(o)
                                ? eG(e, o)
                                : e.isInline(t)
                                  ? (t) => (z.isElement(t) && J.isInline(e, t)) || eC.isText(t)
                                  : (t) => z.isElement(t) && J.isBlock(e, t)),
                        i && eE.isRange(o))
                    ) {
                        var [l, u] = eE.edges(o),
                            c = J.rangeRef(e, o, { affinity: "inward" });
                        eW.splitNodes(e, { at: u, match: a, voids: s }),
                            eW.splitNodes(e, { at: l, match: a, voids: s }),
                            (o = c.unref()),
                            null == n.at && eW.select(e, o);
                    }
                    var d = Array.from(
                        J.nodes(e, {
                            at: o,
                            match: e.isInline(t) ? (t) => z.isElement(t) && J.isBlock(e, t) : (e) => J.isEditor(e),
                            mode: "lowest",
                            voids: s,
                        }),
                    );
                    for (var [, _] of d) {
                        var f = eE.isRange(o) ? eE.intersection(o, J.range(e, _)) : o;
                        if (f) {
                            var p = Array.from(J.nodes(e, { at: f, match: a, mode: r, voids: s }));
                            if (
                                p.length > 0 &&
                                "continue" ===
                                    (function () {
                                        var [n] = p,
                                            r = p[p.length - 1],
                                            [, i] = n,
                                            [, a] = r;
                                        if (0 === i.length && 0 === a.length) return "continue";
                                        var o = el.equals(i, a) ? el.parent(i) : el.common(i, a),
                                            l = J.range(e, i, a),
                                            [u] = J.node(e, o),
                                            c = o.length + 1,
                                            d = el.next(a.slice(0, c)),
                                            _ = eM(eM({}, t), {}, { children: [] });
                                        eW.insertNodes(e, _, { at: d, voids: s }),
                                            eW.moveNodes(e, {
                                                at: l,
                                                match: (e) => z.isAncestor(u) && u.children.includes(e),
                                                to: d.concat(0),
                                                voids: s,
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
    ek = (e, t) => {
        if (z.isElement(t)) {
            var n = t;
            return !!J.isVoid(e, t) || (1 === n.children.length && ek(e, n.children[0]));
        }
        return !J.isEditor(t) && !0;
    },
    eU = (e, t) => {
        if (eE.isCollapsed(t)) return t.anchor;
        var [, n] = eE.edges(t),
            r = J.pointRef(e, n);
        return eW.delete(e, { at: t }), r.unref();
    },
    eG = (e, t) => {
        var [n] = J.node(e, t);
        return (e) => e === n;
    };
function eF(e, t) {
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
function eV(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eF(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eF(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eB = {
        collapse(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { edge: n = "anchor" } = t,
                { selection: r } = e;
            if (r) {
                if ("anchor" === n) eW.select(e, r.anchor);
                else if ("focus" === n) eW.select(e, r.focus);
                else if ("start" === n) {
                    var [i] = eE.edges(r);
                    eW.select(e, i);
                } else if ("end" === n) {
                    var [, s] = eE.edges(r);
                    eW.select(e, s);
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
                { distance: r = 1, unit: i = "character", reverse: s = !1 } = t,
                { edge: a = null } = t;
            if (n) {
                "start" === a && (a = eE.isBackward(n) ? "focus" : "anchor"),
                    "end" === a && (a = eE.isBackward(n) ? "anchor" : "focus");
                var { anchor: o, focus: l } = n,
                    u = { distance: r, unit: i },
                    c = {};
                if (null == a || "anchor" === a) {
                    var d = s ? J.before(e, o, u) : J.after(e, o, u);
                    d && (c.anchor = d);
                }
                if (null == a || "focus" === a) {
                    var _ = s ? J.before(e, l, u) : J.after(e, l, u);
                    _ && (c.focus = _);
                }
                eW.setSelection(e, c);
            }
        },
        select(e, t) {
            var { selection: n } = e;
            if (((t = J.range(e, t)), n)) return void eW.setSelection(e, t);
            if (!eE.isRange(t))
                throw Error(
                    "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                        eI.stringify(t),
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
                var { anchor: s, focus: a } = r,
                    o = "anchor" === i ? s : a;
                eW.setSelection(e, { ["anchor" === i ? "anchor" : "focus"]: eV(eV({}, o), t) });
            }
        },
        setSelection(e, t) {
            var { selection: n } = e,
                r = {},
                i = {};
            if (n) {
                for (var s in t)
                    (("anchor" !== s || null == t.anchor || e_.equals(t.anchor, n.anchor)) &&
                        ("focus" !== s || null == t.focus || e_.equals(t.focus, n.focus)) &&
                        ("anchor" === s || "focus" === s || t[s] === n[s])) ||
                        ((r[s] = n[s]), (i[s] = t[s]));
                Object.keys(r).length > 0 && e.apply({ type: "set_selection", properties: r, newProperties: i });
            }
        },
    },
    eH = {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: i = "character", distance: s = 1, voids: a = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var u = !1;
                    if ((eE.isRange(o) && eE.isCollapsed(o) && ((u = !0), (o = o.anchor)), e_.isPoint(o))) {
                        var c = J.void(e, { at: o, mode: "highest" });
                        if (!a && c) {
                            var [, d] = c;
                            o = d;
                        } else {
                            var _ = { unit: i, distance: s },
                                f = r ? J.before(e, o, _) || J.start(e, []) : J.after(e, o, _) || J.end(e, []);
                            (o = { anchor: o, focus: f }), (l = !0);
                        }
                    }
                    if (el.isPath(o)) return void eW.removeNodes(e, { at: o, voids: a });
                    if (!eE.isCollapsed(o)) {
                        if (!l) {
                            var [, p] = eE.edges(o),
                                h = J.end(e, []);
                            e_.equals(p, h) || (o = J.unhangRange(e, o, { voids: a }));
                        }
                        var [m, E] = eE.edges(o),
                            g = J.above(e, { match: (t) => z.isElement(t) && J.isBlock(e, t), at: m, voids: a }),
                            A = J.above(e, { match: (t) => z.isElement(t) && J.isBlock(e, t), at: E, voids: a }),
                            I = g && A && !el.equals(g[1], A[1]),
                            T = el.equals(m.path, E.path),
                            S = a ? null : J.void(e, { at: m, mode: "highest" }),
                            y = a ? null : J.void(e, { at: E, mode: "highest" });
                        if (S) {
                            var v = J.before(e, m);
                            v && g && el.isAncestor(g[1], v.path) && (m = v);
                        }
                        if (y) {
                            var N = J.after(e, E);
                            N && A && el.isAncestor(A[1], N.path) && (E = N);
                        }
                        var C = [];
                        for (var b of J.nodes(e, { at: o, voids: a })) {
                            var [R, O] = b;
                            (!n || 0 !== el.compare(O, n)) &&
                                ((!a && z.isElement(R) && J.isVoid(e, R)) ||
                                    (!el.isCommon(O, m.path) && !el.isCommon(O, E.path))) &&
                                (C.push(b), (n = O));
                        }
                        var D = Array.from(C, (t) => {
                                var [, n] = t;
                                return J.pathRef(e, n);
                            }),
                            L = J.pointRef(e, m),
                            w = J.pointRef(e, E),
                            x = "";
                        if (!T && !S) {
                            var M = L.current,
                                [P] = J.leaf(e, M),
                                { path: k } = M,
                                { offset: U } = m,
                                G = P.text.slice(U);
                            G.length > 0 && (e.apply({ type: "remove_text", path: k, offset: U, text: G }), (x = G));
                        }
                        if (
                            (D.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => eW.removeNodes(e, { at: t, voids: a })),
                            !y)
                        ) {
                            var F = w.current,
                                [V] = J.leaf(e, F),
                                { path: B } = F,
                                H = T ? m.offset : 0,
                                j = V.text.slice(H, E.offset);
                            j.length > 0 && (e.apply({ type: "remove_text", path: B, offset: H, text: j }), (x = j));
                        }
                        !T && I && w.current && L.current && eW.mergeNodes(e, { at: w.current, hanging: !0, voids: a }),
                            u &&
                                r &&
                                "character" === i &&
                                x.length > 1 &&
                                x.match(/[\u0E00-\u0E7F]+/) &&
                                eW.insertText(e, x.slice(0, x.length - s));
                        var Y = L.unref(),
                            W = w.unref(),
                            K = r ? Y || W : W || Y;
                        null == t.at && K && eW.select(e, K);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var r,
                    { hanging: i = !1, voids: s = !1 } = n,
                    { at: a = e.selection } = n;
                if (t.length) {
                    if (a) {
                        if (eE.isRange(a))
                            if ((i || (a = J.unhangRange(e, a, { voids: s })), eE.isCollapsed(a))) a = a.anchor;
                            else {
                                var [, o] = eE.edges(a);
                                if (!s && J.void(e, { at: o })) return;
                                var l = J.pointRef(e, o);
                                eW.delete(e, { at: a }), (a = l.unref());
                            }
                        else el.isPath(a) && (a = J.start(e, a));
                        if (!(!s && J.void(e, { at: a }))) {
                            var u = J.above(e, {
                                at: a,
                                match: (t) => z.isElement(t) && J.isInline(e, t),
                                mode: "highest",
                                voids: s,
                            });
                            if (u) {
                                var [, c] = u;
                                J.isEnd(e, a, c) ? (a = J.after(e, c)) : J.isStart(e, a, c) && (a = J.before(e, c));
                            }
                            var d = J.above(e, { match: (t) => z.isElement(t) && J.isBlock(e, t), at: a, voids: s }),
                                [, _] = d,
                                f = J.isStart(e, a, _),
                                p = J.isEnd(e, a, _),
                                h = f && p,
                                m = !f || (f && p),
                                E = !p,
                                [, g] = ei.first({ children: t }, []),
                                [, A] = ei.last({ children: t }, []),
                                I = [],
                                T = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!h ||
                                            !(
                                                (m &&
                                                    el.isAncestor(r, g) &&
                                                    z.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (E &&
                                                    el.isAncestor(r, A) &&
                                                    z.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var S of ei.nodes({ children: t }, { pass: T })) T(S) && I.push(S);
                            var y = [],
                                v = [],
                                N = [],
                                C = !0,
                                b = !1;
                            for (var [R] of I)
                                z.isElement(R) && !e.isInline(R)
                                    ? ((C = !1), (b = !0), v.push(R))
                                    : C
                                      ? y.push(R)
                                      : N.push(R);
                            var [O] = J.nodes(e, {
                                    at: a,
                                    match: (t) => eC.isText(t) || J.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                [, D] = O,
                                L = J.isStart(e, a, D),
                                w = J.isEnd(e, a, D),
                                x = J.pathRef(e, p && !N.length ? el.next(_) : _),
                                M = J.pathRef(e, w ? el.next(D) : D);
                            eW.splitNodes(e, {
                                at: a,
                                match: (t) =>
                                    b ? z.isElement(t) && J.isBlock(e, t) : eC.isText(t) || J.isInline(e, t),
                                mode: b ? "lowest" : "highest",
                                always: b && (!f || y.length > 0) && (!p || N.length > 0),
                                voids: s,
                            });
                            var P = J.pathRef(e, !L || (L && w) ? el.next(D) : D);
                            if (
                                (eW.insertNodes(e, y, {
                                    at: P.current,
                                    match: (t) => eC.isText(t) || J.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                h && !y.length && v.length && !N.length && eW.delete(e, { at: _, voids: s }),
                                eW.insertNodes(e, v, {
                                    at: x.current,
                                    match: (t) => z.isElement(t) && J.isBlock(e, t),
                                    mode: "lowest",
                                    voids: s,
                                }),
                                eW.insertNodes(e, N, {
                                    at: M.current,
                                    match: (t) => eC.isText(t) || J.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                !n.at &&
                                    (N.length > 0 && M.current
                                        ? (r = el.previous(M.current))
                                        : v.length > 0 && x.current
                                          ? (r = el.previous(x.current))
                                          : P.current && (r = el.previous(P.current)),
                                    r))
                            ) {
                                var k = J.end(e, r);
                                eW.select(e, k);
                            }
                            P.unref(), x.unref(), M.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var { voids: r = !1 } = n,
                    { at: i = e.selection } = n;
                if (i) {
                    if ((el.isPath(i) && (i = J.range(e, i)), eE.isRange(i)))
                        if (eE.isCollapsed(i)) i = i.anchor;
                        else {
                            var s = eE.end(i);
                            if (!r && J.void(e, { at: s })) return;
                            var a = eE.start(i),
                                o = J.pointRef(e, a),
                                l = J.pointRef(e, s);
                            eW.delete(e, { at: i, voids: r });
                            var u = o.unref(),
                                c = l.unref();
                            (i = u || c), eW.setSelection(e, { anchor: i, focus: i });
                        }
                    if (!(!r && J.void(e, { at: i }))) {
                        var { path: d, offset: _ } = i;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: _, text: t });
                    }
                }
            });
        },
    };
function ej(e, t) {
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
function eY(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eW = eY(eY(eY(eY({}, eD), eP), eB), eH);
