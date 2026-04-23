"use strict";
n.d(t, {
    EY: () => ey,
    Hg: () => W,
    KE: () => Q,
    Q6: () => ep,
    bP: () => en,
    bR: () => ec,
    gB: () => ek,
    h6: () => em,
    ie: () => m,
    wA: () => ea,
});
var r,
    i,
    s = n(694260),
    a = n(159563);
function o(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var l = new WeakMap(),
    u = new WeakMap(),
    c = new WeakMap(),
    d = new WeakMap(),
    _ = new WeakMap(),
    f = new WeakMap(),
    p = new WeakMap();
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? h(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
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
            for (var n of Q.pathRefs(e)) eo.transform(n, t);
            for (var r of Q.pointRefs(e)) ed.transform(r, t);
            for (var i of Q.rangeRefs(e)) eh.transform(i, t);
            var s,
                a,
                o = l.get(e) || [],
                d = u.get(e) || new Set(),
                _ = (e) => {
                    if (e) {
                        var t = e.join(",");
                        a.has(t) || (a.add(t), s.push(e));
                    }
                };
            if (ea.operationCanTransformPath(t)) for (var f of ((s = []), (a = new Set()), o)) _(ea.transform(f, t));
            else (s = o), (a = d);
            for (var p of e.getDirtyPaths(t)) _(p);
            l.set(e, s),
                u.set(e, a),
                ek.transform(e, t),
                e.operations.push(t),
                Q.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                c.get(e) ||
                    (c.set(e, !0),
                    Promise.resolve().then(() => {
                        c.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
                var s = (t, n) => {
                        if (!ey.isText(t)) return !1;
                        var [r, i] = Q.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    a = ep.isExpanded(r),
                    o = !1;
                if (!a) {
                    var [l, u] = Q.node(e, r);
                    if (l && s(l, u)) {
                        var [d] = Q.parent(e, u);
                        o = d && e.markableVoid(d);
                    }
                }
                if (a || o) ek.setNodes(e, { [t]: n }, { match: s, split: !0, voids: !0 });
                else {
                    var _ = E(E({}, Q.marks(e) || {}), {}, { [t]: n });
                    (e.marks = _), c.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && ep.isCollapsed(n) && ek.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && ep.isCollapsed(n) && ek.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && ep.isExpanded(n) && ek.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? en.fragment(e, t) : [];
        },
        insertBreak: () => {
            ek.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            ek.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            ek.insertFragment(e, t);
        },
        insertNode: (t) => {
            ek.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
                if (r) {
                    var i = E({ text: t }, r);
                    ek.insertNodes(e, i);
                } else ek.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!ey.isText(n)) {
                if (W.isElement(n) && 0 === n.children.length)
                    return void ek.insertNodes(e, { text: "" }, { at: r.concat(0), voids: !0 });
                for (
                    var i =
                            !Q.isEditor(n) &&
                            W.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                ey.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        s = 0,
                        a = 0;
                    a < n.children.length;
                    a++, s++
                ) {
                    var o = en.get(e, r);
                    if (!ey.isText(o)) {
                        var l = n.children[a],
                            u = o.children[s - 1],
                            c = a === n.children.length - 1;
                        if ((ey.isText(l) || (W.isElement(l) && e.isInline(l))) !== i)
                            ek.removeNodes(e, { at: r.concat(s), voids: !0 }), s--;
                        else if (W.isElement(l)) {
                            if (e.isInline(l))
                                if (null != u && ey.isText(u)) {
                                    if (c) {
                                        var d = { text: "" };
                                        ek.insertNodes(e, d, { at: r.concat(s + 1), voids: !0 }), s++;
                                    }
                                } else {
                                    var _ = { text: "" };
                                    ek.insertNodes(e, _, { at: r.concat(s), voids: !0 }), s++;
                                }
                        } else
                            null != u &&
                                ey.isText(u) &&
                                (ey.equals(l, u, { loose: !0 })
                                    ? (ek.mergeNodes(e, { at: r.concat(s), voids: !0 }), s--)
                                    : "" === u.text
                                      ? (ek.removeNodes(e, { at: r.concat(s - 1), voids: !0 }), s--)
                                      : "" === l.text && (ek.removeNodes(e, { at: r.concat(s), voids: !0 }), s--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!ey.isText(t)) return !1;
                        var [r, i] = Q.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    i = ep.isExpanded(n),
                    s = !1;
                if (!i) {
                    var [a, o] = Q.node(e, n);
                    if (a && r(a, o)) {
                        var [l] = Q.parent(e, o);
                        s = l && e.markableVoid(l);
                    }
                }
                if (i || s) ek.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
                else {
                    var u = E({}, Q.marks(e) || {});
                    delete u[t], (e.marks = u), c.get(e) || e.onChange();
                }
            }
        },
        getDirtyPaths: (e) => {
            switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                    var { path: t } = e;
                    return ea.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...ea.levels(r),
                        ...(ey.isText(n)
                            ? []
                            : Array.from(en.nodes(n), (e) => {
                                  var [, t] = e;
                                  return r.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: i } = e;
                    return [...ea.ancestors(i), ea.previous(i)];
                case "move_node":
                    var { path: s, newPath: a } = e;
                    if (ea.equals(s, a)) return [];
                    var o = [],
                        l = [];
                    for (var u of ea.ancestors(s)) {
                        var c = ea.transform(u, e);
                        o.push(c);
                    }
                    for (var d of ea.ancestors(a)) {
                        var _ = ea.transform(d, e);
                        l.push(_);
                    }
                    var f = l[l.length - 1],
                        p = a[a.length - 1];
                    return [...o, ...l, f.concat(p)];
                case "remove_node":
                    var { path: h } = e;
                    return [...ea.ancestors(h)];
                case "split_node":
                    var { path: E } = e;
                    return [...ea.levels(E), ea.next(E)];
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
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
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
            r = t ? C(e) : e,
            s = i.None,
            a = i.None,
            o = 0,
            l = null;
        for (var u of r) {
            var c = u.codePointAt(0);
            if (!c) break;
            var d = G(u, c);
            if (
                (([s, a] = n ? [a, d] : [d, s]),
                (s & i.ZWJ) != 0 &&
                    (a & i.ExtPict) != 0 &&
                    !(n ? B(e.substring(0, o)) : B(e.substring(0, e.length - o))))
            )
                break;
            if (
                ((s & i.RI) != 0 &&
                    (a & i.RI) != 0 &&
                    !(l = null !== l ? !l : !!n || j(e.substring(0, e.length - o)))) ||
                (s !== i.None &&
                    a !== i.None &&
                    (function (e, t) {
                        return -1 === F.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0);
                    })(s, a))
            )
                break;
            o += u.length;
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
                [s, a] = N(e, i, t);
            if (v(s, a, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = a;
        }
        return n;
    },
    N = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    v = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (I.test(t)) return !1;
        if (S.test(t)) {
            var i = A(n, r),
                [s, a] = N(n, i, r);
            if (e(s, a, r)) return !0;
        }
        return !T.test(t);
    },
    C = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (R(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (O(i.charCodeAt(0))) {
                    yield i + r, n++;
                    continue;
                }
            }
            yield r;
        }
    },
    O = (e) => e >= 55296 && e <= 56319,
    R = (e) => e >= 56320 && e <= 57343;
((r = i || (i = {}))[(r.None = 0)] = "None"),
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
var b =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    D =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    L =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    w = /^[\u1100-\u115F\uA960-\uA97C]$/,
    M = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    P = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    x =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    k =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    U =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    G = (e, t) => {
        var n = i.Any;
        return (
            -1 !== e.search(b) && (n |= i.Extend),
            8205 === t && (n |= i.ZWJ),
            t >= 127462 && t <= 127487 && (n |= i.RI),
            -1 !== e.search(D) && (n |= i.Prepend),
            -1 !== e.search(L) && (n |= i.SpacingMark),
            -1 !== e.search(w) && (n |= i.L),
            -1 !== e.search(M) && (n |= i.V),
            -1 !== e.search(P) && (n |= i.T),
            -1 !== e.search(x) && (n |= i.LV),
            -1 !== e.search(k) && (n |= i.LVT),
            -1 !== e.search(U) && (n |= i.ExtPict),
            n
        );
    },
    F = [
        [i.L, i.L | i.V | i.LV | i.LVT],
        [i.LV | i.V, i.V | i.T],
        [i.LVT | i.T, i.T],
        [i.Any, i.Extend | i.ZWJ],
        [i.Any, i.SpacingMark],
        [i.Prepend, i.Any],
        [i.ZWJ, i.ExtPict],
        [i.RI, i.RI],
    ],
    V =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    B = (e) => -1 !== e.search(V),
    H = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    j = (e) => {
        var t = e.match(H);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    Y = (e) => (0, s.Q)(e) && en.isNodeList(e.children) && !Q.isEditor(e),
    W = {
        isAncestor: (e) => (0, s.Q)(e) && en.isNodeList(e.children),
        isElement: Y,
        isElementList: (e) => Array.isArray(e) && e.every((e) => W.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return Y(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    K = ["text"],
    $ = ["text"];
function z(e, t) {
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
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? z(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : z(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var X = new WeakMap(),
    Q = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: i = e.selection, match: s } = t;
            if (i) {
                var a = Q.path(e, i);
                for (var [o, l] of Q.levels(e, { at: a, voids: n, match: s, reverse: "lowest" === r }))
                    if (!ey.isText(o)) {
                        if (ep.isRange(i)) {
                            if (ea.isAncestor(l, i.anchor.path) && ea.isAncestor(l, i.focus.path)) return [o, l];
                        } else if (!ea.equals(a, l)) return [o, l];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = Q.point(e, t, { edge: "end" }),
                s = Q.end(e, []),
                { distance: a = 1 } = r,
                o = 0;
            for (var l of Q.positions(e, q(q({}, r), {}, { at: { anchor: i, focus: s } }))) {
                if (o > a) break;
                0 !== o && (n = l), o++;
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = Q.start(e, []),
                s = Q.point(e, t, { edge: "start" }),
                { distance: a = 1 } = r,
                o = 0;
            for (var l of Q.positions(e, q(q({}, r), {}, { at: { anchor: i, focus: s }, reverse: !0 }))) {
                if (o > a) break;
                0 !== o && (n = l), o++;
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
        edges: (e, t) => [Q.start(e, t), Q.end(e, t)],
        end: (e, t) => Q.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = Q.path(e, t, { edge: "start" });
            return Q.node(e, n);
        },
        fragment(e, t) {
            var n = Q.range(e, t);
            return en.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => W.isElement(t) && Q.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => ey.isText(t) || Q.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => ey.isText(e)),
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
            var t = X.get(e);
            if (void 0 !== t) return t;
            if (!(0, s.Q)(e)) return !1;
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
                (null === e.marks || (0, s.Q)(e.marks)) &&
                (null === e.selection || ep.isRange(e.selection)) &&
                en.isNodeList(e.children) &&
                es.isOperationList(e.operations);
            return X.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = Q.end(e, n);
            return ec.equals(t, r);
        },
        isEdge: (e, t, n) => Q.isStart(e, t, n) || Q.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && ey.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = d.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = Q.start(e, n);
            return ec.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = Q.path(e, t, { edge: "end" });
            return Q.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = Q.path(e, t, n);
            return [en.leaf(e, r), r];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
                { match: s } = t;
            if ((null == s && (s = () => !0), n)) {
                var a = [],
                    o = Q.path(e, n);
                for (var [l, u] of en.levels(e, o))
                    if (s(l, u) && (a.push([l, u]), !i && W.isElement(l) && Q.isVoid(e, l))) break;
                r && a.reverse(), yield* a;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (ep.isExpanded(n)) {
                var [r] = Q.nodes(e, { match: ey.isText });
                if (!r) return {};
                var [i] = r;
                return g(i, K);
            }
            var { anchor: s } = n,
                { path: a } = s,
                [o] = Q.leaf(e, a);
            if (0 === s.offset) {
                var l = Q.previous(e, { at: a, match: ey.isText });
                if (!Q.above(e, { match: (t) => W.isElement(t) && Q.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = Q.above(e, { match: (t) => W.isElement(t) && Q.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l,
                            [, _] = u;
                        ea.isAncestor(_, d) && (o = c);
                    }
                }
            }
            return g(o, $);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: s = e.selection } = t;
            if (s) {
                var a = Q.after(e, s, { voids: r });
                if (a) {
                    var [, o] = Q.last(e, []),
                        l = [a.path, o];
                    if (ea.isPath(s) && 0 === s.length) throw Error("Cannot get the next node from the root node!");
                    if (null == i)
                        if (ea.isPath(s)) {
                            var [u] = Q.parent(e, s);
                            i = (e) => u.children.includes(e);
                        } else i = () => !0;
                    var [c] = Q.nodes(e, { at: l, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = Q.path(e, t, n);
            return [en.get(e, r), r];
        },
        *nodes(e) {
            var t,
                n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: s = e.selection, mode: a = "all", universal: o = !1, reverse: l = !1, voids: u = !1 } = i,
                { match: c } = i;
            if ((c || (c = () => !0), s)) {
                if (Z.isSpan(s)) (t = s[0]), (n = s[1]);
                else {
                    var d = Q.path(e, s, { edge: "start" }),
                        _ = Q.path(e, s, { edge: "end" });
                    (t = l ? _ : d), (n = l ? d : _);
                }
                var f = en.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !u && W.isElement(n) && Q.isVoid(e, n);
                        },
                    }),
                    p = [];
                for (var [h, E] of f) {
                    var m = r && 0 === ea.compare(E, r[1]);
                    if ("highest" !== a || !m) {
                        if (!c(h, E))
                            if (o && !m && ey.isText(h)) return;
                            else continue;
                        if ("lowest" === a && m) {
                            r = [h, E];
                            continue;
                        }
                        var g = "lowest" === a ? r : [h, E];
                        g && (o ? p.push(g) : yield g), (r = [h, E]);
                    }
                }
                "lowest" === a && r && (o ? p.push(r) : yield r), o && (yield* p);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: r } = t,
                i = (e) => l.get(e) || [],
                s = (e) => {
                    var t = i(e).pop(),
                        n = t.join(",");
                    return (u.get(e) || new Set()).delete(n), t;
                };
            if (Q.isNormalizing(e)) {
                if (n) {
                    var a = Array.from(en.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        o = new Set(a.map((e) => e.join(",")));
                    l.set(e, a), u.set(e, o);
                }
                0 !== i(e).length &&
                    Q.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (en.has(e, t)) {
                                var n = Q.node(e, t),
                                    [a, o] = n;
                                W.isElement(a) && 0 === a.children.length && e.normalizeNode(n, { operation: r });
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
                            if (en.has(e, d)) {
                                var _ = Q.node(e, d);
                                e.normalizeNode(_, { operation: r });
                            }
                            c++, (l = i(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = Q.path(e, t, n),
                i = ea.parent(r);
            return Q.node(e, i);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: r, edge: i } = n;
            if (ea.isPath(t)) {
                if ("start" === i) {
                    var [, s] = en.first(e, t);
                    t = s;
                } else if ("end" === i) {
                    var [, a] = en.last(e, t);
                    t = a;
                }
            }
            return (
                ep.isRange(t) &&
                    (t =
                        "start" === i ? ep.start(t) : "end" === i ? ep.end(t) : ea.common(t.anchor.path, t.focus.path)),
                ec.isPoint(t) && (t = t.path),
                null != r && (t = t.slice(0, r)),
                t
            );
        },
        hasPath: (e, t) => en.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return Q.pathRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return Q.pathRefs(e).add(i), i;
        },
        pathRefs(e) {
            var t = _.get(e);
            return t || ((t = new Set()), _.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: r = "start" } = n;
            if (ea.isPath(t)) {
                if ("end" === r) {
                    var i,
                        [, s] = en.last(e, t);
                    i = s;
                } else {
                    var [, a] = en.first(e, t);
                    i = a;
                }
                var o = en.get(e, i);
                if (!ey.isText(o))
                    throw Error(
                        "Cannot get the "
                            .concat(r, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(r, " text node."),
                    );
                return { path: i, offset: "end" === r ? o.text.length : 0 };
            }
            if (ep.isRange(t)) {
                var [l, u] = ep.edges(t);
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
                        return Q.pointRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return Q.pointRefs(e).add(i), i;
        },
        pointRefs(e) {
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: i = !1, voids: s = !1 } = t;
            if (n) {
                var a = Q.range(e, n),
                    [o, l] = ep.edges(a),
                    u = i ? l : o,
                    c = !1,
                    d = "",
                    _ = 0,
                    f = 0,
                    p = 0;
                for (var [h, E] of Q.nodes(e, { at: n, reverse: i, voids: s })) {
                    if (W.isElement(h)) {
                        if (!s && e.isVoid(h)) {
                            yield Q.start(e, E);
                            continue;
                        }
                        if (e.isInline(h)) continue;
                        if (Q.hasInlines(e, h)) {
                            var m = ea.isAncestor(E, l.path) ? l : Q.end(e, E),
                                g = ea.isAncestor(E, o.path) ? o : Q.start(e, E);
                            (d = Q.string(e, { anchor: g, focus: m }, { voids: s })), (c = !0);
                        }
                    }
                    if (ey.isText(h)) {
                        var I,
                            T,
                            S,
                            v = ea.equals(E, u.path);
                        for (
                            v
                                ? ((f = i ? u.offset : h.text.length - u.offset), (p = u.offset))
                                : ((f = h.text.length), (p = i ? f : 0)),
                                (v || c || "offset" === r) && (yield { path: E, offset: p }, (c = !1));
                            ;
                        ) {
                            if (0 === _) {
                                if ("" === d) break;
                                (I = d),
                                    (T = r),
                                    (S = i),
                                    (d = N(
                                        d,
                                        (_ =
                                            "character" === T
                                                ? A(I, S)
                                                : "word" === T
                                                  ? y(I, S)
                                                  : "line" === T || "block" === T
                                                    ? I.length
                                                    : 1),
                                        i,
                                    )[1]);
                            }
                            if (((p = i ? p - _ : p + _), (f -= _) < 0)) {
                                _ = -f;
                                break;
                            }
                            (_ = 0), yield { path: E, offset: p };
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: s = e.selection } = t;
            if (s) {
                var a = Q.before(e, s, { voids: r });
                if (a) {
                    var [, o] = Q.first(e, []),
                        l = [a.path, o];
                    if (ea.isPath(s) && 0 === s.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == i)
                        if (ea.isPath(s)) {
                            var [u] = Q.parent(e, s);
                            i = (e) => u.children.includes(e);
                        } else i = () => !0;
                    var [c] = Q.nodes(e, { reverse: !0, at: l, match: i, mode: n, voids: r });
                    return c;
                }
            }
        },
        range: (e, t, n) => (ep.isRange(t) && !n ? t : { anchor: Q.start(e, t), focus: Q.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return Q.rangeRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return Q.rangeRefs(e).add(i), i;
        },
        rangeRefs(e) {
            var t = p.get(e);
            return t || ((t = new Set()), p.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            d.set(e, t);
        },
        start: (e, t) => Q.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                i = Q.range(e, t),
                [s, a] = ep.edges(i),
                o = "";
            for (var [l, u] of Q.nodes(e, { at: i, match: ey.isText, voids: r })) {
                var c = l.text;
                ea.equals(u, a.path) && (c = c.slice(0, a.offset)),
                    ea.equals(u, s.path) && (c = c.slice(s.offset)),
                    (o += c);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [i, s] = ep.edges(t);
            if (0 !== i.offset || 0 !== s.offset || ep.isCollapsed(t) || ea.hasPrevious(s.path)) return t;
            var a = Q.above(e, { at: s, match: (t) => W.isElement(t) && Q.isBlock(e, t), voids: r }),
                o = a ? a[1] : [],
                l = { anchor: Q.start(e, i), focus: s },
                u = !0;
            for (var [c, d] of Q.nodes(e, { at: l, match: ey.isText, reverse: !0, voids: r })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ("" !== c.text || ea.isBefore(d, o)) {
                    s = { path: d, offset: c.text.length };
                    break;
                }
            }
            return { anchor: i, focus: s };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Q.above(e, q(q({}, t), {}, { match: (t) => W.isElement(t) && Q.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = Q.isNormalizing(e);
            Q.setNormalizing(e, !1);
            try {
                t();
            } finally {
                Q.setNormalizing(e, n);
            }
            Q.normalize(e);
        },
    },
    Z = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(ea.isPath) },
    J = ["children"],
    ee = ["text"],
    et = new WeakMap(),
    en = {
        ancestor(e, t) {
            var n = en.get(e, t);
            if (ey.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(em.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of ea.ancestors(t, n)) {
                var i = [en.ancestor(e, r), r];
                yield i;
            }
        },
        child(e, t) {
            if (ey.isText(e)) throw Error("Cannot get the child of a text node: ".concat(em.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(em.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    i = en.ancestor(e, t),
                    { children: s } = i,
                    a = r ? s.length - 1 : 0;
                r ? a >= 0 : a < s.length;
            ) {
                var o = en.child(i, a),
                    l = t.concat(a);
                yield [o, l], (a = r ? a - 1 : a + 1);
            }
        },
        common(e, t, n) {
            var r = ea.common(t, n);
            return [en.get(e, r), r];
        },
        descendant(e, t) {
            var n = en.get(e, t);
            if (Q.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(em.stringify(n)),
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
                var t = g(e, J);
                return t;
            }
            var t = g(e, ee);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r; )
                if (ey.isText(r) || 0 === r.children.length) break;
                else (r = r.children[0]), n.push(0);
            return [r, n];
        },
        fragment(e, t) {
            if (ey.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(em.stringify(e)));
            return (0, a.jM)({ children: e.children }, (e) => {
                var [n, r] = ep.edges(t);
                for (var [, i] of en.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !ep.includes(t, n);
                    },
                })) {
                    if (!ep.includes(t, i)) {
                        var s = en.parent(e, i),
                            a = i[i.length - 1];
                        s.children.splice(a, 1);
                    }
                    if (ea.equals(i, r.path)) {
                        var o = en.leaf(e, i);
                        o.text = o.text.slice(0, r.offset);
                    }
                    if (ea.equals(i, n.path)) {
                        var l = en.leaf(e, i);
                        l.text = l.text.slice(n.offset);
                    }
                }
                Q.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (ey.isText(n) || !n.children[i])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(em.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (ey.isText(n) || !n.children[i]) return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: (e) => ey.isText(e) || W.isElement(e) || Q.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = et.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => en.isNode(e));
            return et.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r; )
                if (ey.isText(r) || 0 === r.children.length) break;
                else {
                    var i = r.children.length - 1;
                    (r = r.children[i]), n.push(i);
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = en.get(e, t);
            if (!ey.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(em.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of ea.levels(t, n)) {
                var i = en.get(e, r);
                yield [i, r];
            }
        },
        matches: (e, t) =>
            (W.isElement(e) && W.isElementProps(t) && W.matches(e, t)) ||
            (ey.isText(e) && ey.isTextProps(t) && ey.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: i = [], to: s } = t,
                    a = new Set(),
                    o = [],
                    l = e;
                !(s && (r ? ea.isBefore(o, s) : ea.isAfter(o, s)));
            ) {
                if (
                    (a.has(l) || (yield [l, o]),
                    !a.has(l) && !ey.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, o])))
                ) {
                    a.add(l);
                    var u = r ? l.children.length - 1 : 0;
                    ea.isAncestor(o, i) && (u = i[o.length]), (o = o.concat(u)), (l = en.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!r) {
                    var c = ea.next(o);
                    if (en.has(e, c)) {
                        (o = c), (l = en.get(e, o));
                        continue;
                    }
                }
                if (r && 0 !== o[o.length - 1]) {
                    (o = ea.previous(o)), (l = en.get(e, o));
                    continue;
                }
                (o = ea.parent(o)), (l = en.get(e, o)), a.add(l);
            }
        },
        parent(e, t) {
            var n = ea.parent(t),
                r = en.get(e, n);
            if (ey.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (ey.isText(e) ? e.text : e.children.map(en.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of en.nodes(e, t)) ey.isText(n) && (yield [n, r]);
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
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? er(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : er(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var es = {
        isNodeOperation: (e) => es.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!(0, s.Q)(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return ea.isPath(e.path) && en.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && ea.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && ea.isPath(e.path) && (0, s.Q)(e.properties);
                case "move_node":
                    return ea.isPath(e.path) && ea.isPath(e.newPath);
                case "set_node":
                    return ea.isPath(e.path) && (0, s.Q)(e.properties) && (0, s.Q)(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && ep.isRange(e.newProperties)) ||
                        (null === e.newProperties && ep.isRange(e.properties)) ||
                        ((0, s.Q)(e.properties) && (0, s.Q)(e.newProperties))
                    );
                case "split_node":
                    return ea.isPath(e.path) && "number" == typeof e.position && (0, s.Q)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => es.isOperation(e)),
        isSelectionOperation: (e) => es.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => es.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return ei(ei({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return ei(ei({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return ei(ei({}, e), {}, { type: "split_node", path: ea.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (ea.equals(t, n)) return e;
                    if (ea.isSibling(n, t)) return ei(ei({}, e), {}, { path: t, newPath: n });
                    var r = ea.transform(n, e),
                        i = ea.transform(ea.next(n), e);
                    return ei(ei({}, e), {}, { path: r, newPath: i });
                case "remove_node":
                    return ei(ei({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return ei(ei({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: s, newProperties: a } = e;
                    return ei(ei({}, e), {}, { properties: a, newProperties: s });
                case "set_selection":
                    var { properties: o, newProperties: l } = e;
                    if (null == o) return ei(ei({}, e), {}, { properties: l, newProperties: null });
                    if (null == l) return ei(ei({}, e), {}, { properties: null, newProperties: o });
                    return ei(ei({}, e), {}, { properties: l, newProperties: o });
                case "split_node":
                    return ei(ei({}, e), {}, { type: "merge_node", path: ea.next(e.path) });
            }
        },
    },
    ea = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                r = ea.levels(e, t);
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
            return ea.equals(r, i) && s > a;
        },
        endsAt(e, t) {
            var n = e.length,
                r = e.slice(0, n),
                i = t.slice(0, n);
            return ea.equals(r, i);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                s = e[n],
                a = t[n];
            return ea.equals(r, i) && s < a;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === ea.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === ea.compare(e, t),
        isBefore: (e, t) => -1 === ea.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === ea.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === ea.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === ea.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === ea.compare(e, t),
        isPath: (e) => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && ea.equals(n, r);
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
            if (!ea.isAncestor(t, e) && !ea.equals(e, t))
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
                    (ea.equals(s, r) || ea.endsBefore(s, r) || ea.isAncestor(s, r)) && (r[s.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: a } = t;
                    if (ea.equals(a, r) || ea.isAncestor(a, r)) return null;
                    ea.endsBefore(a, r) && (r[a.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: l } = t;
                    ea.equals(o, r) || ea.endsBefore(o, r)
                        ? (r[o.length - 1] -= 1)
                        : ea.isAncestor(o, r) && ((r[o.length - 1] -= 1), (r[o.length] += l));
                    break;
                case "split_node":
                    var { path: u, position: c } = t;
                    if (ea.equals(u, r)) {
                        if ("forward" === i) r[r.length - 1] += 1;
                        else if ("backward" !== i) return null;
                    } else
                        ea.endsBefore(u, r)
                            ? (r[u.length - 1] += 1)
                            : ea.isAncestor(u, r) && e[u.length] >= c && ((r[u.length - 1] += 1), (r[u.length] -= c));
                    break;
                case "move_node":
                    var { path: d, newPath: _ } = t;
                    if (ea.equals(d, _)) break;
                    if (ea.isAncestor(d, r) || ea.equals(d, r)) {
                        var f = _.slice();
                        return (
                            ea.endsBefore(d, _) && d.length < _.length && (f[d.length - 1] -= 1),
                            f.concat(r.slice(d.length))
                        );
                    }
                    ea.isSibling(d, _) && (ea.isAncestor(_, r) || ea.equals(_, r))
                        ? ea.endsBefore(d, r)
                            ? (r[d.length - 1] -= 1)
                            : (r[d.length - 1] += 1)
                        : ea.endsBefore(_, r) || ea.equals(_, r) || ea.isAncestor(_, r)
                          ? (ea.endsBefore(d, r) && (r[d.length - 1] -= 1), (r[_.length - 1] += 1))
                          : ea.endsBefore(d, r) && (ea.equals(_, r) && (r[_.length - 1] += 1), (r[d.length - 1] -= 1));
            }
            return r;
        },
    },
    eo = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ea.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
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
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? el(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ec = {
        compare(e, t) {
            var n = ea.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === ec.compare(e, t),
        isBefore: (e, t) => -1 === ec.compare(e, t),
        equals: (e, t) => e.offset === t.offset && ea.equals(e.path, t.path),
        isPoint: (e) => (0, s.Q)(e) && "number" == typeof e.offset && ea.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: i, offset: s } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = ea.transform(i, t, n);
                        break;
                    case "insert_text":
                        ea.equals(t.path, i) &&
                            (t.offset < s || (t.offset === s && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        ea.equals(t.path, i) && (e.offset += t.position), (e.path = ea.transform(i, t, n));
                        break;
                    case "remove_text":
                        ea.equals(t.path, i) && t.offset <= s && (e.offset -= Math.min(s - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (ea.equals(t.path, i) || ea.isAncestor(t.path, i)) return null;
                        e.path = ea.transform(i, t, n);
                        break;
                    case "split_node":
                        if (ea.equals(t.path, i))
                            if (t.position === s && null == r) return null;
                            else
                                (t.position < s || (t.position === s && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = ea.transform(i, t, eu(eu({}, n), {}, { affinity: "forward" }))));
                        else e.path = ea.transform(i, t, n);
                }
            });
        },
    },
    ed = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ec.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    e_ = ["anchor", "focus"];
function ef(e, t) {
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
var ep = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: r, focus: i } = e;
            return ep.isBackward(e) === n ? [r, i] : [i, r];
        },
        end(e) {
            var [, t] = ep.edges(e);
            return t;
        },
        equals: (e, t) => ec.equals(e.anchor, t.anchor) && ec.equals(e.focus, t.focus),
        includes(e, t) {
            if (ep.isRange(t)) {
                if (ep.includes(e, t.anchor) || ep.includes(e, t.focus)) return !0;
                var [n, r] = ep.edges(e),
                    [i, s] = ep.edges(t);
                return ec.isBefore(n, i) && ec.isAfter(r, s);
            }
            var [a, o] = ep.edges(e),
                l = !1,
                u = !1;
            return (
                ec.isPoint(t)
                    ? ((l = ec.compare(t, a) >= 0), (u = 0 >= ec.compare(t, o)))
                    : ((l = ea.compare(t, a.path) >= 0), (u = 0 >= ea.compare(t, o.path))),
                l && u
            );
        },
        intersection(e, t) {
            var n = g(e, e_),
                [r, i] = ep.edges(e),
                [s, a] = ep.edges(t),
                l = ec.isBefore(r, s) ? s : r,
                u = ec.isBefore(i, a) ? i : a;
            return ec.isBefore(u, l)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? ef(Object(n), !0).forEach(function (t) {
                                    o(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : ef(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                      }
                      return e;
                  })({ anchor: l, focus: u }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return ec.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return ec.equals(t, n);
        },
        isExpanded: (e) => !ep.isCollapsed(e),
        isForward: (e) => !ep.isBackward(e),
        isRange: (e) => (0, s.Q)(e) && ec.isPoint(e.anchor) && ec.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = ep.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.jM)(e, (e) => {
                if (null === e) return null;
                var r,
                    i,
                    { affinity: s = "inward" } = n;
                if ("inward" === s) {
                    var a = ep.isCollapsed(e);
                    ep.isForward(e)
                        ? ((r = "forward"), (i = a ? r : "backward"))
                        : ((r = "backward"), (i = a ? r : "forward"));
                } else
                    "outward" === s
                        ? ep.isForward(e)
                            ? ((r = "backward"), (i = "forward"))
                            : ((r = "forward"), (i = "backward"))
                        : ((r = s), (i = s));
                var o = ec.transform(e.anchor, t, { affinity: r }),
                    l = ec.transform(e.focus, t, { affinity: i });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        },
    },
    eh = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ep.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    eE = void 0,
    em = {
        setScrubber(e) {
            eE = e;
        },
        stringify: (e) => JSON.stringify(e, eE),
    },
    eg = (e, t) => {
        for (var n in e) {
            var r = e[n],
                i = t[n];
            if ((0, s.Q)(r) && (0, s.Q)(i)) {
                if (!eg(r, i)) return !1;
            } else if (Array.isArray(r) && Array.isArray(i)) {
                if (r.length !== i.length) return !1;
                for (var a = 0; a < r.length; a++) if (r[a] !== i[a]) return !1;
            } else if (r !== i) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    eA = ["text"],
    eI = ["anchor", "focus"];
function eT(e, t) {
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
            ? eT(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eT(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ey = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;
        return eg(r ? g(e, eA) : e, r ? g(t, eA) : t);
    },
    isText: (e) => (0, s.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => ey.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [eS({}, e)];
        for (var r of t) {
            var i = g(r, eI),
                [s, a] = ep.edges(r),
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
                    E = void 0;
                if (c < l) {
                    var m = c - f;
                    (E = eS(eS({}, p), {}, { text: p.text.slice(m) })),
                        (p = eS(eS({}, p), {}, { text: p.text.slice(0, m) }));
                }
                if (u > f) {
                    var A = u - f;
                    (h = eS(eS({}, p), {}, { text: p.text.slice(0, A) })),
                        (p = eS(eS({}, p), {}, { text: p.text.slice(A) }));
                }
                Object.assign(p, i), h && o.push(h), o.push(p), E && o.push(E);
            }
            n = o;
        }
        return n;
    },
};
function eN(e, t) {
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
function ev(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eN(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eN(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eC = ["text"],
    eO = ["children"];
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
function eb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eR(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eR(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eD = (e, t) =>
        W.isElement(t) ? !!Q.isVoid(e, t) || (1 === t.children.length && eD(e, t.children[0])) : !Q.isEditor(t) && !0,
    eL = (e, t) => {
        var [n] = Q.node(e, t);
        return (e) => e === n;
    };
function ew(e, t) {
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
            ? ew(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ew(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
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
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eP(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eP(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ek = ex(
    ex(
        ex(
            ex(
                {},
                {
                    transform(e, t) {
                        e.children = (0, a.mq)(e.children);
                        var n = e.selection && (0, a.mq)(e.selection);
                        try {
                            n = ((e, t, n) => {
                                switch (n.type) {
                                    case "insert_node":
                                        var { path: r, node: i } = n,
                                            s = en.parent(e, r),
                                            a = r[r.length - 1];
                                        if (a > s.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    r,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((s.children.splice(a, 0, i), t))
                                            for (var [o, l] of ep.points(t)) t[l] = ec.transform(o, n);
                                        break;
                                    case "insert_text":
                                        var { path: u, offset: c, text: d } = n;
                                        if (0 === d.length) break;
                                        var _ = en.leaf(e, u),
                                            f = _.text.slice(0, c),
                                            p = _.text.slice(c);
                                        if (((_.text = f + d + p), t))
                                            for (var [h, E] of ep.points(t)) t[E] = ec.transform(h, n);
                                        break;
                                    case "merge_node":
                                        var { path: m } = n,
                                            g = en.get(e, m),
                                            A = ea.previous(m),
                                            I = en.get(e, A),
                                            T = en.parent(e, m),
                                            S = m[m.length - 1];
                                        if (ey.isText(g) && ey.isText(I)) I.text += g.text;
                                        else if (ey.isText(g) || ey.isText(I))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(m, "] to nodes of different interfaces: ")
                                                    .concat(em.stringify(g), " ")
                                                    .concat(em.stringify(I)),
                                            );
                                        else I.children.push(...g.children);
                                        if ((T.children.splice(S, 1), t))
                                            for (var [y, N] of ep.points(t)) t[N] = ec.transform(y, n);
                                        break;
                                    case "move_node":
                                        var { path: v, newPath: C } = n;
                                        if (ea.isAncestor(v, C))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(v, "] to new path [")
                                                    .concat(C, "] because the destination is inside itself."),
                                            );
                                        var O = en.get(e, v),
                                            R = en.parent(e, v),
                                            b = v[v.length - 1];
                                        R.children.splice(b, 1);
                                        var D = ea.transform(v, n),
                                            L = en.get(e, ea.parent(D)),
                                            w = D[D.length - 1];
                                        if ((L.children.splice(w, 0, O), t))
                                            for (var [M, P] of ep.points(t)) t[P] = ec.transform(M, n);
                                        break;
                                    case "remove_node":
                                        var { path: x } = n,
                                            k = x[x.length - 1];
                                        if ((en.parent(e, x).children.splice(k, 1), t))
                                            for (var [U, G] of ep.points(t)) {
                                                var F = ec.transform(U, n);
                                                if (null != t && null != F) t[G] = F;
                                                else {
                                                    var V = void 0,
                                                        B = void 0;
                                                    for (var [H, j] of en.texts(e))
                                                        if (-1 === ea.compare(j, x)) V = [H, j];
                                                        else {
                                                            B = [H, j];
                                                            break;
                                                        }
                                                    var Y = !1;
                                                    V &&
                                                        B &&
                                                        (Y = ea.equals(B[1], x)
                                                            ? !ea.hasPrevious(B[1])
                                                            : ea.common(V[1], x).length < ea.common(B[1], x).length),
                                                        V && !Y
                                                            ? ((U.path = V[1]), (U.offset = V[0].text.length))
                                                            : B
                                                              ? ((U.path = B[1]), (U.offset = 0))
                                                              : (t = null);
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: W, offset: K, text: $ } = n;
                                        if (0 === $.length) break;
                                        var z = en.leaf(e, W),
                                            q = z.text.slice(0, K),
                                            X = z.text.slice(K + $.length);
                                        if (((z.text = q + X), t))
                                            for (var [Q, Z] of ep.points(t)) t[Z] = ec.transform(Q, n);
                                        break;
                                    case "set_node":
                                        var { path: J, properties: ee, newProperties: et } = n;
                                        if (0 === J.length) throw Error("Cannot set properties on the root node!");
                                        var er = en.get(e, J);
                                        for (var ei in et) {
                                            if ("children" === ei || "text" === ei)
                                                throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                                            var es = et[ei];
                                            null == es ? delete er[ei] : (er[ei] = es);
                                        }
                                        for (var eo in ee) et.hasOwnProperty(eo) || delete er[eo];
                                        break;
                                    case "set_selection":
                                        var { newProperties: el } = n;
                                        if (null == el) t = el;
                                        else {
                                            if (null == t) {
                                                if (!ep.isRange(el))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            em.stringify(el),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = ev({}, el);
                                            }
                                            for (var eu in el) {
                                                var ed = el[eu];
                                                if (null == ed) {
                                                    if ("anchor" === eu || "focus" === eu)
                                                        throw Error(
                                                            'Cannot remove the "'.concat(eu, '" selection property'),
                                                        );
                                                    delete t[eu];
                                                } else t[eu] = ed;
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var e_,
                                            { path: ef, position: eh, properties: eE } = n;
                                        if (0 === ef.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    ef,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var eg = en.get(e, ef),
                                            eA = en.parent(e, ef),
                                            eI = ef[ef.length - 1];
                                        if (ey.isText(eg)) {
                                            var eT = eg.text.slice(0, eh),
                                                eS = eg.text.slice(eh);
                                            (eg.text = eT), (e_ = ev(ev({}, eE), {}, { text: eS }));
                                        } else {
                                            var eN = eg.children.slice(0, eh),
                                                eC = eg.children.slice(eh);
                                            (eg.children = eN), (e_ = ev(ev({}, eE), {}, { children: eC }));
                                        }
                                        if ((eA.children.splice(eI + 1, 0, e_), t))
                                            for (var [eO, eR] of ep.points(t)) t[eR] = ec.transform(eO, n);
                                }
                                return t;
                            })(e, n, t);
                        } finally {
                            (e.children = (0, a.vD)(e.children)),
                                n ? (e.selection = (0, a.Qx)(n) ? (0, a.vD)(n) : n) : (e.selection = null);
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(e, () => {
                        var { hanging: r = !1, voids: i = !1, mode: s = "lowest" } = n,
                            { at: a, match: o, select: l } = n;
                        if ((en.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [u] = t;
                            if (
                                (a ||
                                    ((a = e.selection ? e.selection : e.children.length > 0 ? Q.end(e, []) : [0]),
                                    (l = !0)),
                                null == l && (l = !1),
                                ep.isRange(a))
                            )
                                if ((r || (a = Q.unhangRange(e, a, { voids: i })), ep.isCollapsed(a))) a = a.anchor;
                                else {
                                    var [, c] = ep.edges(a),
                                        d = Q.pointRef(e, c);
                                    ek.delete(e, { at: a }), (a = d.unref());
                                }
                            if (ec.isPoint(a)) {
                                null == o &&
                                    (o = ey.isText(u)
                                        ? (e) => ey.isText(e)
                                        : e.isInline(u)
                                          ? (t) => ey.isText(t) || Q.isInline(e, t)
                                          : (t) => W.isElement(t) && Q.isBlock(e, t));
                                var [_] = Q.nodes(e, { at: a.path, match: o, mode: s, voids: i });
                                if (!_) return;
                                var [, f] = _,
                                    p = Q.pathRef(e, f),
                                    h = Q.isEnd(e, a, f);
                                ek.splitNodes(e, { at: a, match: o, mode: s, voids: i });
                                var E = p.unref();
                                a = h ? ea.next(E) : E;
                            }
                            var m = ea.parent(a),
                                g = a[a.length - 1];
                            if (!(!i && Q.void(e, { at: m }))) {
                                for (var A of t) {
                                    var I = m.concat(g);
                                    g++, e.apply({ type: "insert_node", path: I, node: A }), (a = ea.next(a));
                                }
                                if (((a = ea.previous(a)), l)) {
                                    var T = Q.end(e, a);
                                    T && ek.select(e, T);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(e, () => {
                        var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
                            { match: s } = t;
                        if ((null == s && (s = ea.isPath(n) ? eL(e, n) : (t) => W.isElement(t) && Q.isBlock(e, t)), n))
                            for (var a of Array.from(Q.nodes(e, { at: n, match: s, mode: r, voids: i }), (t) => {
                                var [, n] = t;
                                return Q.pathRef(e, n);
                            })) {
                                var o = a.unref();
                                if (o.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            o,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [l, u] = Q.node(e, ea.parent(o)),
                                    c = o[o.length - 1],
                                    { length: d } = l.children;
                                if (1 === d) {
                                    var _ = ea.next(u);
                                    ek.moveNodes(e, { at: o, to: _, voids: i }), ek.removeNodes(e, { at: u, voids: i });
                                } else if (0 === c) ek.moveNodes(e, { at: o, to: u, voids: i });
                                else if (c === d - 1) {
                                    var f = ea.next(u);
                                    ek.moveNodes(e, { at: o, to: f, voids: i });
                                } else {
                                    var p = ea.next(o),
                                        h = ea.next(u);
                                    ek.splitNodes(e, { at: p, voids: i }), ek.moveNodes(e, { at: o, to: h, voids: i });
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { match: i, at: s = e.selection } = t,
                            { hanging: a = !1, voids: o = !1, mode: l = "lowest" } = t;
                        if (s) {
                            if (null == i)
                                if (ea.isPath(s)) {
                                    var [u] = Q.parent(e, s);
                                    i = (e) => u.children.includes(e);
                                } else i = (t) => W.isElement(t) && Q.isBlock(e, t);
                            if ((!a && ep.isRange(s) && (s = Q.unhangRange(e, s, { voids: o })), ep.isRange(s)))
                                if (ep.isCollapsed(s)) s = s.anchor;
                                else {
                                    var [, c] = ep.edges(s),
                                        d = Q.pointRef(e, c);
                                    ek.delete(e, { at: s }), (s = d.unref()), null == t.at && ek.select(e, s);
                                }
                            var [_] = Q.nodes(e, { at: s, match: i, voids: o, mode: l }),
                                f = Q.previous(e, { at: s, match: i, voids: o, mode: l });
                            if (_ && f) {
                                var [p, h] = _,
                                    [E, m] = f;
                                if (0 !== h.length && 0 !== m.length) {
                                    var A = ea.next(m),
                                        I = ea.common(h, m),
                                        T = ea.isSibling(h, m),
                                        S = Array.from(Q.levels(e, { at: h }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(I.length)
                                            .slice(0, -1),
                                        y = Q.above(e, {
                                            at: h,
                                            mode: "highest",
                                            match: (t) => S.includes(t) && eD(e, t),
                                        }),
                                        N = y && Q.pathRef(e, y[1]);
                                    if (ey.isText(p) && ey.isText(E)) {
                                        var v = g(p, eC);
                                        (r = E.text.length), (n = v);
                                    } else if (W.isElement(p) && W.isElement(E)) {
                                        var v = g(p, eO);
                                        (r = E.children.length), (n = v);
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    h,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(em.stringify(p), " ")
                                                .concat(em.stringify(E)),
                                        );
                                    T || ek.moveNodes(e, { at: h, to: A, voids: o }),
                                        N && ek.removeNodes(e, { at: N.current, voids: o }),
                                        (W.isElement(E) && Q.isEmpty(e, E)) ||
                                        (ey.isText(E) && "" === E.text && 0 !== m[m.length - 1])
                                            ? ek.removeNodes(e, { at: m, voids: o })
                                            : e.apply({ type: "merge_node", path: A, position: r, properties: n }),
                                        N && N.unref();
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    Q.withoutNormalizing(e, () => {
                        var { to: n, at: r = e.selection, mode: i = "lowest", voids: s = !1 } = t,
                            { match: a } = t;
                        if (r) {
                            null == a && (a = ea.isPath(r) ? eL(e, r) : (t) => W.isElement(t) && Q.isBlock(e, t));
                            var o = Q.pathRef(e, n);
                            for (var l of Array.from(Q.nodes(e, { at: r, match: a, mode: i, voids: s }), (t) => {
                                var [, n] = t;
                                return Q.pathRef(e, n);
                            })) {
                                var u = l.unref(),
                                    c = o.current;
                                0 !== u.length && e.apply({ type: "move_node", path: u, newPath: c }),
                                    o.current &&
                                        ea.isSibling(c, u) &&
                                        ea.isAfter(c, u) &&
                                        (o.current = ea.next(o.current));
                            }
                            o.unref();
                        }
                    });
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(e, () => {
                        var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
                            { at: s = e.selection, match: a } = t;
                        if (s)
                            for (var o of (null == a &&
                                (a = ea.isPath(s) ? eL(e, s) : (t) => W.isElement(t) && Q.isBlock(e, t)),
                            !n && ep.isRange(s) && (s = Q.unhangRange(e, s, { voids: r })),
                            Array.from(Q.nodes(e, { at: s, match: a, mode: i, voids: r }), (t) => {
                                var [, n] = t;
                                return Q.pathRef(e, n);
                            }))) {
                                var l = o.unref();
                                if (l) {
                                    var [u] = Q.node(e, l);
                                    e.apply({ type: "remove_node", path: l, node: u });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(e, () => {
                        var { match: r, at: i = e.selection, compare: s, merge: a } = n,
                            { hanging: o = !1, mode: l = "lowest", split: u = !1, voids: c = !1 } = n;
                        if (i) {
                            if (
                                (null == r && (r = ea.isPath(i) ? eL(e, i) : (t) => W.isElement(t) && Q.isBlock(e, t)),
                                !o && ep.isRange(i) && (i = Q.unhangRange(e, i, { voids: c })),
                                u && ep.isRange(i))
                            ) {
                                if (ep.isCollapsed(i) && Q.leaf(e, i.anchor)[0].text.length > 0) return;
                                var d = Q.rangeRef(e, i, { affinity: "inward" }),
                                    [_, f] = ep.edges(i),
                                    p = "lowest" === l ? "lowest" : "highest",
                                    h = Q.isEnd(e, f, f.path);
                                ek.splitNodes(e, { at: f, match: r, mode: p, voids: c, always: !h });
                                var E = Q.isStart(e, _, _.path);
                                ek.splitNodes(e, { at: _, match: r, mode: p, voids: c, always: !E }),
                                    (i = d.unref()),
                                    null == n.at && ek.select(e, i);
                            }
                            for (var [m, g] of (s || (s = (e, t) => e !== t),
                            Q.nodes(e, { at: i, match: r, mode: l, voids: c }))) {
                                var A = {},
                                    I = {};
                                if (0 !== g.length) {
                                    var T = !1;
                                    for (var S in t)
                                        "children" !== S &&
                                            "text" !== S &&
                                            s(t[S], m[S]) &&
                                            ((T = !0),
                                            m.hasOwnProperty(S) && (A[S] = m[S]),
                                            a ? null != t[S] && (I[S] = a(m[S], t[S])) : null != t[S] && (I[S] = t[S]));
                                    T && e.apply({ type: "set_node", path: g, properties: A, newProperties: I });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { mode: i = "lowest", voids: s = !1 } = t,
                            { match: a, at: o = e.selection, height: l = 0, always: u = !1 } = t;
                        if (
                            (null == a && (a = (t) => W.isElement(t) && Q.isBlock(e, t)),
                            ep.isRange(o) &&
                                (o = ((e, t) => {
                                    if (ep.isCollapsed(t)) return t.anchor;
                                    var [, n] = ep.edges(t),
                                        r = Q.pointRef(e, n);
                                    return ek.delete(e, { at: t }), r.unref();
                                })(e, o)),
                            ea.isPath(o))
                        ) {
                            var c = o,
                                d = Q.point(e, c),
                                [_] = Q.parent(e, c);
                            (a = (e) => e === _), (l = d.path.length - c.length + 1), (o = d), (u = !0);
                        }
                        if (o) {
                            var f = Q.pointRef(e, o, { affinity: "backward" });
                            try {
                                var [p] = Q.nodes(e, { at: o, match: a, mode: i, voids: s });
                                if (!p) return;
                                var h = Q.void(e, { at: o, mode: "highest" });
                                if (!s && h) {
                                    var [E, m] = h;
                                    if (W.isElement(E) && e.isInline(E)) {
                                        var g = Q.after(e, m);
                                        if (!g) {
                                            var A = ea.next(m);
                                            ek.insertNodes(e, { text: "" }, { at: A, voids: s }), (g = Q.point(e, A));
                                        }
                                        (o = g), (u = !0);
                                    }
                                    (l = o.path.length - m.length + 1), (u = !0);
                                }
                                n = Q.pointRef(e, o);
                                var I = o.path.length - l,
                                    [, T] = p,
                                    S = o.path.slice(0, I),
                                    y = 0 === l ? o.offset : o.path[I] + 0;
                                for (var [N, v] of Q.levels(e, { at: S, reverse: !0, voids: s })) {
                                    var C = !1;
                                    if (
                                        v.length < T.length ||
                                        0 === v.length ||
                                        (!s && W.isElement(N) && Q.isVoid(e, N))
                                    )
                                        break;
                                    var O = f.current,
                                        R = Q.isEnd(e, O, v);
                                    if (u || !f || !Q.isEdge(e, O, v)) {
                                        C = !0;
                                        var b = en.extractProps(N);
                                        e.apply({ type: "split_node", path: v, position: y, properties: b });
                                    }
                                    y = v[v.length - 1] + (C || R ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var D = n.current || Q.end(e, []);
                                    ek.select(e, D);
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
                    ek.setNodes(e, r, n);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(e, () => {
                        var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                            { at: s = e.selection, match: a } = t;
                        if (s) {
                            null == a && (a = ea.isPath(s) ? eL(e, s) : (t) => W.isElement(t) && Q.isBlock(e, t)),
                                ea.isPath(s) && (s = Q.range(e, s));
                            var o = ep.isRange(s) ? Q.rangeRef(e, s) : null;
                            for (var l of Array.from(Q.nodes(e, { at: s, match: a, mode: n, voids: i }), (t) => {
                                var [, n] = t;
                                return Q.pathRef(e, n);
                            }).reverse())
                                !(function (t) {
                                    var n = t.unref(),
                                        [s] = Q.node(e, n),
                                        a = Q.range(e, n);
                                    r && o && (a = ep.intersection(o.current, a)),
                                        ek.liftNodes(e, {
                                            at: a,
                                            match: (e) => W.isAncestor(s) && s.children.includes(e),
                                            voids: i,
                                        });
                                })(l);
                            o && o.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(e, () => {
                        var { mode: r = "lowest", split: i = !1, voids: s = !1 } = n,
                            { match: a, at: o = e.selection } = n;
                        if (o) {
                            if (
                                (null == a &&
                                    (a = ea.isPath(o)
                                        ? eL(e, o)
                                        : e.isInline(t)
                                          ? (t) => (W.isElement(t) && Q.isInline(e, t)) || ey.isText(t)
                                          : (t) => W.isElement(t) && Q.isBlock(e, t)),
                                i && ep.isRange(o))
                            ) {
                                var [l, u] = ep.edges(o),
                                    c = Q.rangeRef(e, o, { affinity: "inward" });
                                ek.splitNodes(e, { at: u, match: a, voids: s }),
                                    ek.splitNodes(e, { at: l, match: a, voids: s }),
                                    (o = c.unref()),
                                    null == n.at && ek.select(e, o);
                            }
                            for (var [, d] of Array.from(
                                Q.nodes(e, {
                                    at: o,
                                    match: e.isInline(t)
                                        ? (t) => W.isElement(t) && Q.isBlock(e, t)
                                        : (e) => Q.isEditor(e),
                                    mode: "lowest",
                                    voids: s,
                                }),
                            )) {
                                var _ = ep.isRange(o) ? ep.intersection(o, Q.range(e, d)) : o;
                                if (_) {
                                    var f = Array.from(Q.nodes(e, { at: _, match: a, mode: r, voids: s }));
                                    if (
                                        f.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [n] = f,
                                                    r = f[f.length - 1],
                                                    [, i] = n,
                                                    [, a] = r;
                                                if (0 === i.length && 0 === a.length) return "continue";
                                                var o = ea.equals(i, a) ? ea.parent(i) : ea.common(i, a),
                                                    l = Q.range(e, i, a),
                                                    [u] = Q.node(e, o),
                                                    c = o.length + 1,
                                                    d = ea.next(a.slice(0, c)),
                                                    _ = eb(eb({}, t), {}, { children: [] });
                                                ek.insertNodes(e, _, { at: d, voids: s }),
                                                    ek.moveNodes(e, {
                                                        at: l,
                                                        match: (e) => W.isAncestor(u) && u.children.includes(e),
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
        ),
        {
            collapse(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { edge: n = "anchor" } = t,
                    { selection: r } = e;
                if (r) {
                    if ("anchor" === n) ek.select(e, r.anchor);
                    else if ("focus" === n) ek.select(e, r.focus);
                    else if ("start" === n) {
                        var [i] = ep.edges(r);
                        ek.select(e, i);
                    } else if ("end" === n) {
                        var [, s] = ep.edges(r);
                        ek.select(e, s);
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
                    "start" === a && (a = ep.isBackward(n) ? "focus" : "anchor"),
                        "end" === a && (a = ep.isBackward(n) ? "anchor" : "focus");
                    var { anchor: o, focus: l } = n,
                        u = { distance: r, unit: i },
                        c = {};
                    if (null == a || "anchor" === a) {
                        var d = s ? Q.before(e, o, u) : Q.after(e, o, u);
                        d && (c.anchor = d);
                    }
                    if (null == a || "focus" === a) {
                        var _ = s ? Q.before(e, l, u) : Q.after(e, l, u);
                        _ && (c.focus = _);
                    }
                    ek.setSelection(e, c);
                }
            },
            select(e, t) {
                var { selection: n } = e;
                if (((t = Q.range(e, t)), n)) return void ek.setSelection(e, t);
                if (!ep.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            em.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: n, newProperties: t });
            },
            setPoint(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: r } = e,
                    { edge: i = "both" } = n;
                if (r) {
                    "start" === i && (i = ep.isBackward(r) ? "focus" : "anchor"),
                        "end" === i && (i = ep.isBackward(r) ? "anchor" : "focus");
                    var { anchor: s, focus: a } = r,
                        o = "anchor" === i ? s : a;
                    ek.setSelection(e, { ["anchor" === i ? "anchor" : "focus"]: eM(eM({}, o), t) });
                }
            },
            setSelection(e, t) {
                var { selection: n } = e,
                    r = {},
                    i = {};
                if (n) {
                    for (var s in t)
                        (("anchor" !== s || null == t.anchor || ec.equals(t.anchor, n.anchor)) &&
                            ("focus" !== s || null == t.focus || ec.equals(t.focus, n.focus)) &&
                            ("anchor" === s || "focus" === s || t[s] === n[s])) ||
                            ((r[s] = n[s]), (i[s] = t[s]));
                    Object.keys(r).length > 0 && e.apply({ type: "set_selection", properties: r, newProperties: i });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Q.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: i = "character", distance: s = 1, voids: a = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var u = !1;
                    if ((ep.isRange(o) && ep.isCollapsed(o) && ((u = !0), (o = o.anchor)), ec.isPoint(o))) {
                        var c = Q.void(e, { at: o, mode: "highest" });
                        if (!a && c) {
                            var [, d] = c;
                            o = d;
                        } else {
                            var _ = { unit: i, distance: s },
                                f = r ? Q.before(e, o, _) || Q.start(e, []) : Q.after(e, o, _) || Q.end(e, []);
                            (o = { anchor: o, focus: f }), (l = !0);
                        }
                    }
                    if (ea.isPath(o)) return void ek.removeNodes(e, { at: o, voids: a });
                    if (!ep.isCollapsed(o)) {
                        if (!l) {
                            var [, p] = ep.edges(o),
                                h = Q.end(e, []);
                            ec.equals(p, h) || (o = Q.unhangRange(e, o, { voids: a }));
                        }
                        var [E, m] = ep.edges(o),
                            g = Q.above(e, { match: (t) => W.isElement(t) && Q.isBlock(e, t), at: E, voids: a }),
                            A = Q.above(e, { match: (t) => W.isElement(t) && Q.isBlock(e, t), at: m, voids: a }),
                            I = g && A && !ea.equals(g[1], A[1]),
                            T = ea.equals(E.path, m.path),
                            S = a ? null : Q.void(e, { at: E, mode: "highest" }),
                            y = a ? null : Q.void(e, { at: m, mode: "highest" });
                        if (S) {
                            var N = Q.before(e, E);
                            N && g && ea.isAncestor(g[1], N.path) && (E = N);
                        }
                        if (y) {
                            var v = Q.after(e, m);
                            v && A && ea.isAncestor(A[1], v.path) && (m = v);
                        }
                        var C = [];
                        for (var O of Q.nodes(e, { at: o, voids: a })) {
                            var [R, b] = O;
                            (!n || 0 !== ea.compare(b, n)) &&
                                ((!a && W.isElement(R) && Q.isVoid(e, R)) ||
                                    (!ea.isCommon(b, E.path) && !ea.isCommon(b, m.path))) &&
                                (C.push(O), (n = b));
                        }
                        var D = Array.from(C, (t) => {
                                var [, n] = t;
                                return Q.pathRef(e, n);
                            }),
                            L = Q.pointRef(e, E),
                            w = Q.pointRef(e, m),
                            M = "";
                        if (!T && !S) {
                            var P = L.current,
                                [x] = Q.leaf(e, P),
                                { path: k } = P,
                                { offset: U } = E,
                                G = x.text.slice(U);
                            G.length > 0 && (e.apply({ type: "remove_text", path: k, offset: U, text: G }), (M = G));
                        }
                        if (
                            (D.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => ek.removeNodes(e, { at: t, voids: a })),
                            !y)
                        ) {
                            var F = w.current,
                                [V] = Q.leaf(e, F),
                                { path: B } = F,
                                H = T ? E.offset : 0,
                                j = V.text.slice(H, m.offset);
                            j.length > 0 && (e.apply({ type: "remove_text", path: B, offset: H, text: j }), (M = j));
                        }
                        !T && I && w.current && L.current && ek.mergeNodes(e, { at: w.current, hanging: !0, voids: a }),
                            u &&
                                r &&
                                "character" === i &&
                                M.length > 1 &&
                                M.match(/[\u0E00-\u0E7F]+/) &&
                                ek.insertText(e, M.slice(0, M.length - s));
                        var Y = L.unref(),
                            K = w.unref(),
                            $ = r ? Y || K : K || Y;
                        null == t.at && $ && ek.select(e, $);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Q.withoutNormalizing(e, () => {
                var r,
                    { hanging: i = !1, voids: s = !1 } = n,
                    { at: a = e.selection } = n;
                if (t.length) {
                    if (a) {
                        if (ep.isRange(a))
                            if ((i || (a = Q.unhangRange(e, a, { voids: s })), ep.isCollapsed(a))) a = a.anchor;
                            else {
                                var [, o] = ep.edges(a);
                                if (!s && Q.void(e, { at: o })) return;
                                var l = Q.pointRef(e, o);
                                ek.delete(e, { at: a }), (a = l.unref());
                            }
                        else ea.isPath(a) && (a = Q.start(e, a));
                        if (!(!s && Q.void(e, { at: a }))) {
                            var u = Q.above(e, {
                                at: a,
                                match: (t) => W.isElement(t) && Q.isInline(e, t),
                                mode: "highest",
                                voids: s,
                            });
                            if (u) {
                                var [, c] = u;
                                Q.isEnd(e, a, c) ? (a = Q.after(e, c)) : Q.isStart(e, a, c) && (a = Q.before(e, c));
                            }
                            var [, d] = Q.above(e, {
                                    match: (t) => W.isElement(t) && Q.isBlock(e, t),
                                    at: a,
                                    voids: s,
                                }),
                                _ = Q.isStart(e, a, d),
                                f = Q.isEnd(e, a, d),
                                p = _ && f,
                                h = !_ || (_ && f),
                                E = !f,
                                [, m] = en.first({ children: t }, []),
                                [, g] = en.last({ children: t }, []),
                                A = [],
                                I = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!p ||
                                            !(
                                                (h &&
                                                    ea.isAncestor(r, m) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (E &&
                                                    ea.isAncestor(r, g) &&
                                                    W.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var T of en.nodes({ children: t }, { pass: I })) I(T) && A.push(T);
                            var S = [],
                                y = [],
                                N = [],
                                v = !0,
                                C = !1;
                            for (var [O] of A)
                                W.isElement(O) && !e.isInline(O)
                                    ? ((v = !1), (C = !0), y.push(O))
                                    : v
                                      ? S.push(O)
                                      : N.push(O);
                            var [R] = Q.nodes(e, {
                                    at: a,
                                    match: (t) => ey.isText(t) || Q.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                [, b] = R,
                                D = Q.isStart(e, a, b),
                                L = Q.isEnd(e, a, b),
                                w = Q.pathRef(e, f && !N.length ? ea.next(d) : d),
                                M = Q.pathRef(e, L ? ea.next(b) : b);
                            ek.splitNodes(e, {
                                at: a,
                                match: (t) =>
                                    C ? W.isElement(t) && Q.isBlock(e, t) : ey.isText(t) || Q.isInline(e, t),
                                mode: C ? "lowest" : "highest",
                                always: C && (!_ || S.length > 0) && (!f || N.length > 0),
                                voids: s,
                            });
                            var P = Q.pathRef(e, !D || (D && L) ? ea.next(b) : b);
                            if (
                                (ek.insertNodes(e, S, {
                                    at: P.current,
                                    match: (t) => ey.isText(t) || Q.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                p && !S.length && y.length && !N.length && ek.delete(e, { at: d, voids: s }),
                                ek.insertNodes(e, y, {
                                    at: w.current,
                                    match: (t) => W.isElement(t) && Q.isBlock(e, t),
                                    mode: "lowest",
                                    voids: s,
                                }),
                                ek.insertNodes(e, N, {
                                    at: M.current,
                                    match: (t) => ey.isText(t) || Q.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                !n.at &&
                                    (N.length > 0 && M.current
                                        ? (r = ea.previous(M.current))
                                        : y.length > 0 && w.current
                                          ? (r = ea.previous(w.current))
                                          : P.current && (r = ea.previous(P.current)),
                                    r))
                            ) {
                                var x = Q.end(e, r);
                                ek.select(e, x);
                            }
                            P.unref(), w.unref(), M.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Q.withoutNormalizing(e, () => {
                var { voids: r = !1 } = n,
                    { at: i = e.selection } = n;
                if (i) {
                    if ((ea.isPath(i) && (i = Q.range(e, i)), ep.isRange(i)))
                        if (ep.isCollapsed(i)) i = i.anchor;
                        else {
                            var s = ep.end(i);
                            if (!r && Q.void(e, { at: s })) return;
                            var a = ep.start(i),
                                o = Q.pointRef(e, a),
                                l = Q.pointRef(e, s);
                            ek.delete(e, { at: i, voids: r });
                            var u = o.unref(),
                                c = l.unref();
                            (i = u || c), ek.setSelection(e, { anchor: i, focus: i });
                        }
                    if (!(!r && Q.void(e, { at: i }))) {
                        var { path: d, offset: _ } = i;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: _, text: t });
                    }
                }
            });
        },
    },
);
