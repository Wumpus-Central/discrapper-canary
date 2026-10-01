r.d(t, {
    EY: () => em,
    Hg: () => Q,
    KE: () => $,
    Q6: () => eh,
    bP: () => er,
    bR: () => ec,
    gB: () => eM,
    h6: () => ep,
    ie: () => p,
    wA: () => eo,
});
var u,
    n,
    a = r(694260),
    o = r(159563);
function i(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var s = new WeakMap(),
    l = new WeakMap(),
    c = new WeakMap(),
    f = new WeakMap(),
    d = new WeakMap(),
    D = new WeakMap(),
    h = new WeakMap();
function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? C(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : C(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var p = () => {
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
            for (var r of $.pathRefs(e)) ei.transform(r, t);
            for (var u of $.pointRefs(e)) ef.transform(u, t);
            for (var n of $.rangeRefs(e)) eC.transform(n, t);
            var a,
                o,
                i = s.get(e) || [],
                f = l.get(e) || new Set(),
                d = (e) => {
                    if (e) {
                        var t = e.join(",");
                        o.has(t) || (o.add(t), a.push(e));
                    }
                };
            if (eo.operationCanTransformPath(t)) for (var D of ((a = []), (o = new Set()), i)) d(eo.transform(D, t));
            else ((a = i), (o = f));
            for (var h of e.getDirtyPaths(t)) d(h);
            (s.set(e, a),
                l.set(e, o),
                eM.transform(e, t),
                e.operations.push(t),
                $.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                c.get(e) ||
                    (c.set(e, !0),
                    Promise.resolve().then(() => {
                        (c.set(e, !1), e.onChange({ operation: t }), (e.operations = []));
                    })));
        },
        addMark: (t, r) => {
            var { selection: u, markableVoid: n } = e;
            if (u) {
                var a = (t, r) => {
                        if (!em.isText(t)) return !1;
                        var [u, n] = $.parent(e, r);
                        return !e.isVoid(u) || e.markableVoid(u);
                    },
                    o = eh.isExpanded(u),
                    i = !1;
                if (!o) {
                    var [s, l] = $.node(e, u);
                    if (s && a(s, l)) {
                        var [f] = $.parent(e, l);
                        i = f && e.markableVoid(f);
                    }
                }
                if (o || i) eM.setNodes(e, { [t]: r }, { match: a, split: !0, voids: !0 });
                else {
                    var d = v(v({}, $.marks(e) || {}), {}, { [t]: r });
                    ((e.marks = d), c.get(e) || e.onChange());
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: r } = e;
            r && eh.isCollapsed(r) && eM.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: r } = e;
            r && eh.isCollapsed(r) && eM.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: r } = e;
            r && eh.isExpanded(r) && eM.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? er.fragment(e, t) : [];
        },
        insertBreak: () => {
            eM.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eM.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            eM.insertFragment(e, t);
        },
        insertNode: (t) => {
            eM.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: r, marks: u } = e;
            if (r) {
                if (u) {
                    var n = v({ text: t }, u);
                    eM.insertNodes(e, n);
                } else eM.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [r, u] = t;
            if (!em.isText(r)) {
                if (Q.isElement(r) && 0 === r.children.length)
                    return void eM.insertNodes(e, { text: "" }, { at: u.concat(0), voids: !0 });
                for (
                    var n =
                            !$.isEditor(r) &&
                            Q.isElement(r) &&
                            (e.isInline(r) ||
                                0 === r.children.length ||
                                em.isText(r.children[0]) ||
                                e.isInline(r.children[0])),
                        a = 0,
                        o = 0;
                    o < r.children.length;
                    o++, a++
                ) {
                    var i = er.get(e, u);
                    if (!em.isText(i)) {
                        var s = r.children[o],
                            l = i.children[a - 1],
                            c = o === r.children.length - 1;
                        if ((em.isText(s) || (Q.isElement(s) && e.isInline(s))) !== n)
                            (eM.removeNodes(e, { at: u.concat(a), voids: !0 }), a--);
                        else if (Q.isElement(s)) {
                            if (e.isInline(s))
                                if (null != l && em.isText(l)) {
                                    if (c) {
                                        var f = { text: "" };
                                        (eM.insertNodes(e, f, { at: u.concat(a + 1), voids: !0 }), a++);
                                    }
                                } else {
                                    var d = { text: "" };
                                    (eM.insertNodes(e, d, { at: u.concat(a), voids: !0 }), a++);
                                }
                        } else
                            null != l &&
                                em.isText(l) &&
                                (em.equals(s, l, { loose: !0 })
                                    ? (eM.mergeNodes(e, { at: u.concat(a), voids: !0 }), a--)
                                    : "" === l.text
                                      ? (eM.removeNodes(e, { at: u.concat(a - 1), voids: !0 }), a--)
                                      : "" === s.text && (eM.removeNodes(e, { at: u.concat(a), voids: !0 }), a--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: r } = e;
            if (r) {
                var u = (t, r) => {
                        if (!em.isText(t)) return !1;
                        var [u, n] = $.parent(e, r);
                        return !e.isVoid(u) || e.markableVoid(u);
                    },
                    n = eh.isExpanded(r),
                    a = !1;
                if (!n) {
                    var [o, i] = $.node(e, r);
                    if (o && u(o, i)) {
                        var [s] = $.parent(e, i);
                        a = s && e.markableVoid(s);
                    }
                }
                if (n || a) eM.unsetNodes(e, t, { match: u, split: !0, voids: !0 });
                else {
                    var l = v({}, $.marks(e) || {});
                    (delete l[t], (e.marks = l), c.get(e) || e.onChange());
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
                    var { node: r, path: u } = e;
                    return [
                        ...eo.levels(u),
                        ...(em.isText(r)
                            ? []
                            : Array.from(er.nodes(r), (e) => {
                                  var [, t] = e;
                                  return u.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: n } = e;
                    return [...eo.ancestors(n), eo.previous(n)];
                case "move_node":
                    var { path: a, newPath: o } = e;
                    if (eo.equals(a, o)) return [];
                    var i = [],
                        s = [];
                    for (var l of eo.ancestors(a)) {
                        var c = eo.transform(l, e);
                        i.push(c);
                    }
                    for (var f of eo.ancestors(o)) {
                        var d = eo.transform(f, e);
                        s.push(d);
                    }
                    var D = s[s.length - 1],
                        h = o[o.length - 1];
                    return [...i, ...s, D.concat(h)];
                case "remove_node":
                    var { path: C } = e;
                    return [...eo.ancestors(C)];
                case "split_node":
                    var { path: v } = e;
                    return [...eo.levels(v), eo.next(v)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: r } = e,
                u = 42 * r;
            if (t > u)
                throw Error(
                    "Could not completely normalize the editor after ".concat(
                        u,
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
    var r,
        u,
        n = (function (e, t) {
            if (null == e) return {};
            var r,
                u,
                n = {},
                a = Object.keys(e);
            for (u = 0; u < a.length; u++) ((r = a[u]), t.indexOf(r) >= 0 || (n[r] = e[r]));
            return n;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (u = 0; u < a.length; u++)
            ((r = a[u]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
    }
    return n;
}
var B = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !t,
            u = t ? y(e) : e,
            a = n.None,
            o = n.None,
            i = 0,
            s = null;
        for (var l of u) {
            var c = l.codePointAt(0);
            if (!c) break;
            var f = W(l, c);
            if (
                (([a, o] = r ? [o, f] : [f, a]),
                (a & n.ZWJ) != 0 &&
                    (o & n.ExtPict) != 0 &&
                    !(r ? z(e.substring(0, i)) : z(e.substring(0, e.length - i))))
            )
                break;
            if (
                ((a & n.RI) != 0 &&
                    (o & n.RI) != 0 &&
                    !(s = null !== s ? !s : !!r || q(e.substring(0, e.length - i)))) ||
                (a !== n.None &&
                    o !== n.None &&
                    (function (e, t) {
                        return -1 === _.findIndex((r) => (e & r[0]) != 0 && (t & r[1]) != 0);
                    })(a, o))
            )
                break;
            i += l.length;
        }
        return i || 1;
    },
    E = /\s/,
    A =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    F = /['\u2018\u2019]/,
    m = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, u = !1; e.length > 0;) {
            var n = B(e, t),
                [a, o] = b(e, n, t);
            if (w(a, o, t)) ((u = !0), (r += n));
            else if (u) break;
            else r += n;
            e = o;
        }
        return r;
    },
    b = (e, t, r) => {
        if (r) {
            var u = e.length - t;
            return [e.slice(u, e.length), e.slice(0, u)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    w = function e(t, r) {
        var u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (E.test(t)) return !1;
        if (F.test(t)) {
            var n = B(r, u),
                [a, o] = b(r, n, u);
            if (e(a, o, u)) return !0;
        }
        return !A.test(t);
    },
    y = function* (e) {
        for (var t = e.length - 1, r = 0; r < e.length; r++) {
            var u = e.charAt(t - r);
            if (O(u.charCodeAt(0))) {
                var n = e.charAt(t - r - 1);
                if (x(n.charCodeAt(0))) {
                    (yield n + u, r++);
                    continue;
                }
            }
            yield u;
        }
    },
    x = (e) => e >= 55296 && e <= 56319,
    O = (e) => e >= 56320 && e <= 57343;
(((u = n || (n = {}))[(u.None = 0)] = "None"),
    (u[(u.Extend = 1)] = "Extend"),
    (u[(u.ZWJ = 2)] = "ZWJ"),
    (u[(u.RI = 4)] = "RI"),
    (u[(u.Prepend = 8)] = "Prepend"),
    (u[(u.SpacingMark = 16)] = "SpacingMark"),
    (u[(u.L = 32)] = "L"),
    (u[(u.V = 64)] = "V"),
    (u[(u.T = 128)] = "T"),
    (u[(u.LV = 256)] = "LV"),
    (u[(u.LVT = 512)] = "LVT"),
    (u[(u.ExtPict = 1024)] = "ExtPict"),
    (u[(u.Any = 2048)] = "Any"));
var k =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    P =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    S =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    T = /^[\u1100-\u115F\uA960-\uA97C]$/,
    j = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    R = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    N =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    M =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    K =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    W = (e, t) => {
        var r = n.Any;
        return (
            -1 !== e.search(k) && (r |= n.Extend),
            8205 === t && (r |= n.ZWJ),
            t >= 127462 && t <= 127487 && (r |= n.RI),
            -1 !== e.search(P) && (r |= n.Prepend),
            -1 !== e.search(S) && (r |= n.SpacingMark),
            -1 !== e.search(T) && (r |= n.L),
            -1 !== e.search(j) && (r |= n.V),
            -1 !== e.search(R) && (r |= n.T),
            -1 !== e.search(N) && (r |= n.LV),
            -1 !== e.search(M) && (r |= n.LVT),
            -1 !== e.search(K) && (r |= n.ExtPict),
            r
        );
    },
    _ = [
        [n.L, n.L | n.V | n.LV | n.LVT],
        [n.LV | n.V, n.V | n.T],
        [n.LVT | n.T, n.T],
        [n.Any, n.Extend | n.ZWJ],
        [n.Any, n.SpacingMark],
        [n.Prepend, n.Any],
        [n.ZWJ, n.ExtPict],
        [n.RI, n.RI],
    ],
    L =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    z = (e) => -1 !== e.search(L),
    I = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    q = (e) => {
        var t = e.match(I);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    V = (e) => (0, a.Q)(e) && er.isNodeList(e.children) && !$.isEditor(e),
    Q = {
        isAncestor: (e) => (0, a.Q)(e) && er.isNodeList(e.children),
        isElement: V,
        isElementList: (e) => Array.isArray(e) && e.every((e) => Q.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return V(e) && e[r] === t;
        },
        matches(e, t) {
            for (var r in t) if ("children" !== r && e[r] !== t[r]) return !1;
            return !0;
        },
    },
    H = ["text"],
    U = ["text"];
function J(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? J(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : J(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var Y = new WeakMap(),
    $ = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: r = !1, mode: u = "lowest", at: n = e.selection, match: a } = t;
            if (n) {
                var o = $.path(e, n);
                for (var [i, s] of $.levels(e, { at: o, voids: r, match: a, reverse: "lowest" === u }))
                    if (!em.isText(i)) {
                        if (eh.isRange(n)) {
                            if (eo.isAncestor(s, n.anchor.path) && eo.isAncestor(s, n.focus.path)) return [i, s];
                        } else if (!eo.equals(o, s)) return [i, s];
                    }
            }
        },
        addMark(e, t, r) {
            e.addMark(t, r);
        },
        after(e, t) {
            var r,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = $.point(e, t, { edge: "end" }),
                a = $.end(e, []),
                { distance: o = 1 } = u,
                i = 0;
            for (var s of $.positions(e, X(X({}, u), {}, { at: { anchor: n, focus: a } }))) {
                if (i > o) break;
                (0 !== i && (r = s), i++);
            }
            return r;
        },
        before(e, t) {
            var r,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = $.start(e, []),
                a = $.point(e, t, { edge: "start" }),
                { distance: o = 1 } = u,
                i = 0;
            for (var s of $.positions(e, X(X({}, u), {}, { at: { anchor: n, focus: a }, reverse: !0 }))) {
                if (i > o) break;
                (0 !== i && (r = s), i++);
            }
            return r;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: r = "character" } = t;
            e.deleteBackward(r);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: r = "character" } = t;
            e.deleteForward(r);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: r = "forward" } = t;
            e.deleteFragment(r);
        },
        edges: (e, t) => [$.start(e, t), $.end(e, t)],
        end: (e, t) => $.point(e, t, { edge: "end" }),
        first(e, t) {
            var r = $.path(e, t, { edge: "start" });
            return $.node(e, r);
        },
        fragment(e, t) {
            var r = $.range(e, t);
            return er.fragment(e, r);
        },
        hasBlocks: (e, t) => t.children.some((t) => Q.isElement(t) && $.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => em.isText(t) || $.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => em.isText(e)),
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
            var t = Y.get(e);
            if (void 0 !== t) return t;
            if (!(0, a.Q)(e)) return !1;
            var r =
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
                (null === e.marks || (0, a.Q)(e.marks)) &&
                (null === e.selection || eh.isRange(e.selection)) &&
                er.isNodeList(e.children) &&
                ea.isOperationList(e.operations);
            return (Y.set(e, r), r);
        },
        isEnd(e, t, r) {
            var u = $.end(e, r);
            return ec.equals(t, u);
        },
        isEdge: (e, t, r) => $.isStart(e, t, r) || $.isEnd(e, t, r),
        isEmpty(e, t) {
            var { children: r } = t,
                [u] = r;
            return 0 === r.length || (1 === r.length && em.isText(u) && "" === u.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = f.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, r) {
            if (0 !== t.offset) return !1;
            var u = $.start(e, r);
            return ec.equals(t, u);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var r = $.path(e, t, { edge: "end" });
            return $.node(e, r);
        },
        leaf(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                u = $.path(e, t, r);
            return [er.leaf(e, u), u];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: r = e.selection, reverse: u = !1, voids: n = !1 } = t,
                { match: a } = t;
            if ((null == a && (a = () => !0), r)) {
                var o = [],
                    i = $.path(e, r);
                for (var [s, l] of er.levels(e, i))
                    if (a(s, l) && (o.push([s, l]), !n && Q.isElement(s) && $.isVoid(e, s))) break;
                (u && o.reverse(), yield* o);
            }
        },
        marks(e) {
            var { marks: t, selection: r } = e;
            if (!r) return null;
            if (t) return t;
            if (eh.isExpanded(r)) {
                var [u] = $.nodes(e, { match: em.isText });
                if (!u) return {};
                var [n] = u;
                return g(n, H);
            }
            var { anchor: a } = r,
                { path: o } = a,
                [i] = $.leaf(e, o);
            if (0 === a.offset) {
                var s = $.previous(e, { at: o, match: em.isText });
                if (!$.above(e, { match: (t) => Q.isElement(t) && $.isVoid(e, t) && e.markableVoid(t) })) {
                    var l = $.above(e, { match: (t) => Q.isElement(t) && $.isBlock(e, t) });
                    if (s && l) {
                        var [c, f] = s,
                            [, d] = l;
                        eo.isAncestor(d, f) && (i = c);
                    }
                }
            }
            return g(i, U);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: r = "lowest", voids: u = !1 } = t,
                { match: n, at: a = e.selection } = t;
            if (a) {
                var o = $.after(e, a, { voids: u });
                if (o) {
                    var [, i] = $.last(e, []),
                        s = [o.path, i];
                    if (eo.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                    if (null == n)
                        if (eo.isPath(a)) {
                            var [l] = $.parent(e, a);
                            n = (e) => l.children.includes(e);
                        } else n = () => !0;
                    var [c] = $.nodes(e, { at: s, match: n, mode: r, voids: u });
                    return c;
                }
            }
        },
        node(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                u = $.path(e, t, r);
            return [er.get(e, u), u];
        },
        *nodes(e) {
            var t,
                r,
                u,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: a = e.selection, mode: o = "all", universal: i = !1, reverse: s = !1, voids: l = !1 } = n,
                { match: c } = n;
            if ((c || (c = () => !0), a)) {
                if (Z.isSpan(a)) ((t = a[0]), (r = a[1]));
                else {
                    var f = $.path(e, a, { edge: "start" }),
                        d = $.path(e, a, { edge: "end" });
                    ((t = s ? d : f), (r = s ? f : d));
                }
                var D = er.nodes(e, {
                        reverse: s,
                        from: t,
                        to: r,
                        pass: (t) => {
                            var [r] = t;
                            return !l && Q.isElement(r) && $.isVoid(e, r);
                        },
                    }),
                    h = [];
                for (var [C, v] of D) {
                    var p = u && 0 === eo.compare(v, u[1]);
                    if ("highest" !== o || !p) {
                        if (!c(C, v))
                            if (i && !p && em.isText(C)) return;
                            else continue;
                        if ("lowest" === o && p) {
                            u = [C, v];
                            continue;
                        }
                        var g = "lowest" === o ? u : [C, v];
                        (g && (i ? h.push(g) : yield g), (u = [C, v]));
                    }
                }
                ("lowest" === o && u && (i ? h.push(u) : yield u), i && (yield* h));
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: r = !1, operation: u } = t,
                n = (e) => s.get(e) || [],
                a = (e) => {
                    var t = n(e).pop(),
                        r = t.join(",");
                    return ((l.get(e) || new Set()).delete(r), t);
                };
            if ($.isNormalizing(e)) {
                if (r) {
                    var o = Array.from(er.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        i = new Set(o.map((e) => e.join(",")));
                    (s.set(e, o), l.set(e, i));
                }
                0 !== n(e).length &&
                    $.withoutNormalizing(e, () => {
                        for (var t of n(e))
                            if (er.has(e, t)) {
                                var r = $.node(e, t),
                                    [o, i] = r;
                                Q.isElement(o) && 0 === o.children.length && e.normalizeNode(r, { operation: u });
                            }
                        for (var s = n(e), l = s.length, c = 0; 0 !== s.length;) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: s,
                                    iteration: c,
                                    initialDirtyPathsLength: l,
                                    operation: u,
                                })
                            )
                                return;
                            var f = a(e);
                            if (er.has(e, f)) {
                                var d = $.node(e, f);
                                e.normalizeNode(d, { operation: u });
                            }
                            (c++, (s = n(e)));
                        }
                    });
            }
        },
        parent(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                u = $.path(e, t, r),
                n = eo.parent(u);
            return $.node(e, n);
        },
        path(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: u, edge: n } = r;
            if (eo.isPath(t)) {
                if ("start" === n) {
                    var [, a] = er.first(e, t);
                    t = a;
                } else if ("end" === n) {
                    var [, o] = er.last(e, t);
                    t = o;
                }
            }
            return (
                eh.isRange(t) &&
                    (t =
                        "start" === n ? eh.start(t) : "end" === n ? eh.end(t) : eo.common(t.anchor.path, t.focus.path)),
                ec.isPoint(t) && (t = t.path),
                null != u && (t = t.slice(0, u)),
                t
            );
        },
        hasPath: (e, t) => er.has(e, t),
        pathRef(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: u = "forward" } = r,
                n = {
                    current: t,
                    affinity: u,
                    unref() {
                        var { current: t } = n;
                        return ($.pathRefs(e).delete(n), (n.current = null), t);
                    },
                };
            return ($.pathRefs(e).add(n), n);
        },
        pathRefs(e) {
            var t = d.get(e);
            return (t || ((t = new Set()), d.set(e, t)), t);
        },
        point(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: u = "start" } = r;
            if (eo.isPath(t)) {
                if ("end" === u) {
                    var n,
                        [, a] = er.last(e, t);
                    n = a;
                } else {
                    var [, o] = er.first(e, t);
                    n = o;
                }
                var i = er.get(e, n);
                if (!em.isText(i))
                    throw Error(
                        "Cannot get the "
                            .concat(u, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(u, " text node."),
                    );
                return { path: n, offset: "end" === u ? i.text.length : 0 };
            }
            if (eh.isRange(t)) {
                var [s, l] = eh.edges(t);
                return "start" === u ? s : l;
            }
            return t;
        },
        pointRef(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: u = "forward" } = r,
                n = {
                    current: t,
                    affinity: u,
                    unref() {
                        var { current: t } = n;
                        return ($.pointRefs(e).delete(n), (n.current = null), t);
                    },
                };
            return ($.pointRefs(e).add(n), n);
        },
        pointRefs(e) {
            var t = D.get(e);
            return (t || ((t = new Set()), D.set(e, t)), t);
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: r = e.selection, unit: u = "offset", reverse: n = !1, voids: a = !1 } = t;
            if (r) {
                var o = $.range(e, r),
                    [i, s] = eh.edges(o),
                    l = n ? s : i,
                    c = !1,
                    f = "",
                    d = 0,
                    D = 0,
                    h = 0;
                for (var [C, v] of $.nodes(e, { at: r, reverse: n, voids: a })) {
                    if (Q.isElement(C)) {
                        if (!a && e.isVoid(C)) {
                            yield $.start(e, v);
                            continue;
                        }
                        if (e.isInline(C)) continue;
                        if ($.hasInlines(e, C)) {
                            var p = eo.isAncestor(v, s.path) ? s : $.end(e, v),
                                g = eo.isAncestor(v, i.path) ? i : $.start(e, v);
                            ((f = $.string(e, { anchor: g, focus: p }, { voids: a })), (c = !0));
                        }
                    }
                    if (em.isText(C)) {
                        var E,
                            A,
                            F,
                            w = eo.equals(v, l.path);
                        for (
                            w
                                ? ((D = n ? l.offset : C.text.length - l.offset), (h = l.offset))
                                : ((D = C.text.length), (h = n ? D : 0)),
                                (w || c || "offset" === u) && (yield { path: v, offset: h }, (c = !1));
                            ;
                        ) {
                            if (0 === d) {
                                if ("" === f) break;
                                ((E = f),
                                    (A = u),
                                    (F = n),
                                    (f = b(
                                        f,
                                        (d =
                                            "character" === A
                                                ? B(E, F)
                                                : "word" === A
                                                  ? m(E, F)
                                                  : "line" === A || "block" === A
                                                    ? E.length
                                                    : 1),
                                        n,
                                    )[1]));
                            }
                            if (((h = n ? h - d : h + d), (D -= d) < 0)) {
                                d = -D;
                                break;
                            }
                            ((d = 0), yield { path: v, offset: h });
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: r = "lowest", voids: u = !1 } = t,
                { match: n, at: a = e.selection } = t;
            if (a) {
                var o = $.before(e, a, { voids: u });
                if (o) {
                    var [, i] = $.first(e, []),
                        s = [o.path, i];
                    if (eo.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == n)
                        if (eo.isPath(a)) {
                            var [l] = $.parent(e, a);
                            n = (e) => l.children.includes(e);
                        } else n = () => !0;
                    var [c] = $.nodes(e, { reverse: !0, at: s, match: n, mode: r, voids: u });
                    return c;
                }
            }
        },
        range: (e, t, r) => (eh.isRange(t) && !r ? t : { anchor: $.start(e, t), focus: $.end(e, r || t) }),
        rangeRef(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: u = "forward" } = r,
                n = {
                    current: t,
                    affinity: u,
                    unref() {
                        var { current: t } = n;
                        return ($.rangeRefs(e).delete(n), (n.current = null), t);
                    },
                };
            return ($.rangeRefs(e).add(n), n);
        },
        rangeRefs(e) {
            var t = h.get(e);
            return (t || ((t = new Set()), h.set(e, t)), t);
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            f.set(e, t);
        },
        start: (e, t) => $.point(e, t, { edge: "start" }),
        string(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: u = !1 } = r,
                n = $.range(e, t),
                [a, o] = eh.edges(n),
                i = "";
            for (var [s, l] of $.nodes(e, { at: n, match: em.isText, voids: u })) {
                var c = s.text;
                (eo.equals(l, o.path) && (c = c.slice(0, o.offset)),
                    eo.equals(l, a.path) && (c = c.slice(a.offset)),
                    (i += c));
            }
            return i;
        },
        unhangRange(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: u = !1 } = r,
                [n, a] = eh.edges(t);
            if (0 !== n.offset || 0 !== a.offset || eh.isCollapsed(t) || eo.hasPrevious(a.path)) return t;
            var o = $.above(e, { at: a, match: (t) => Q.isElement(t) && $.isBlock(e, t), voids: u }),
                i = o ? o[1] : [],
                s = { anchor: $.start(e, n), focus: a },
                l = !0;
            for (var [c, f] of $.nodes(e, { at: s, match: em.isText, reverse: !0, voids: u })) {
                if (l) {
                    l = !1;
                    continue;
                }
                if ("" !== c.text || eo.isBefore(f, i)) {
                    a = { path: f, offset: c.text.length };
                    break;
                }
            }
            return { anchor: n, focus: a };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return $.above(e, X(X({}, t), {}, { match: (t) => Q.isElement(t) && $.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var r = $.isNormalizing(e);
            $.setNormalizing(e, !1);
            try {
                t();
            } finally {
                $.setNormalizing(e, r);
            }
            $.normalize(e);
        },
    },
    Z = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(eo.isPath) },
    G = ["children"],
    ee = ["text"],
    et = new WeakMap(),
    er = {
        ancestor(e, t) {
            var r = er.get(e, t);
            if (em.isText(r))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(ep.stringify(r)),
                );
            return r;
        },
        *ancestors(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var u of eo.ancestors(t, r)) {
                var n = [er.ancestor(e, u), u];
                yield n;
            }
        },
        child(e, t) {
            if (em.isText(e)) throw Error("Cannot get the child of a text node: ".concat(ep.stringify(e)));
            var r = e.children[t];
            if (null == r) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(ep.stringify(e)));
            return r;
        },
        *children(e, t) {
            for (
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: u = !1 } = r,
                    n = er.ancestor(e, t),
                    { children: a } = n,
                    o = u ? a.length - 1 : 0;
                u ? o >= 0 : o < a.length;
            ) {
                var i = er.child(n, o),
                    s = t.concat(o);
                (yield [i, s], (o = u ? o - 1 : o + 1));
            }
        },
        common(e, t, r) {
            var u = eo.common(t, r);
            return [er.get(e, u), u];
        },
        descendant(e, t) {
            var r = er.get(e, t);
            if ($.isEditor(r))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(ep.stringify(r)),
                );
            return r;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, u] of er.nodes(e, t)) 0 !== u.length && (yield [r, u]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, u] of er.nodes(e, t)) Q.isElement(r) && (yield [r, u]);
        },
        extractProps(e) {
            if (Q.isAncestor(e)) {
                var t = g(e, G);
                return t;
            }
            var t = g(e, ee);
            return t;
        },
        first(e, t) {
            for (var r = t.slice(), u = er.get(e, r); u;)
                if (em.isText(u) || 0 === u.children.length) break;
                else ((u = u.children[0]), r.push(0));
            return [u, r];
        },
        fragment(e, t) {
            if (em.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(ep.stringify(e)));
            return (0, o.jM)({ children: e.children }, (e) => {
                var [r, u] = eh.edges(t);
                for (var [, n] of er.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, r] = e;
                        return !eh.includes(t, r);
                    },
                })) {
                    if (!eh.includes(t, n)) {
                        var a = er.parent(e, n),
                            o = n[n.length - 1];
                        a.children.splice(o, 1);
                    }
                    if (eo.equals(n, u.path)) {
                        var i = er.leaf(e, n);
                        i.text = i.text.slice(0, u.offset);
                    }
                    if (eo.equals(n, r.path)) {
                        var s = er.leaf(e, n);
                        s.text = s.text.slice(r.offset);
                    }
                }
                $.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var r = e, u = 0; u < t.length; u++) {
                var n = t[u];
                if (em.isText(r) || !r.children[n])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(ep.stringify(e)));
                r = r.children[n];
            }
            return r;
        },
        has(e, t) {
            for (var r = e, u = 0; u < t.length; u++) {
                var n = t[u];
                if (em.isText(r) || !r.children[n]) return !1;
                r = r.children[n];
            }
            return !0;
        },
        isNode: (e) => em.isText(e) || Q.isElement(e) || $.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = et.get(e);
            if (void 0 !== t) return t;
            var r = e.every((e) => er.isNode(e));
            return (et.set(e, r), r);
        },
        last(e, t) {
            for (var r = t.slice(), u = er.get(e, r); u;)
                if (em.isText(u) || 0 === u.children.length) break;
                else {
                    var n = u.children.length - 1;
                    ((u = u.children[n]), r.push(n));
                }
            return [u, r];
        },
        leaf(e, t) {
            var r = er.get(e, t);
            if (!em.isText(r))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(ep.stringify(r)),
                );
            return r;
        },
        *levels(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var u of eo.levels(t, r)) {
                var n = er.get(e, u);
                yield [n, u];
            }
        },
        matches: (e, t) =>
            (Q.isElement(e) && Q.isElementProps(t) && Q.matches(e, t)) ||
            (em.isText(e) && em.isTextProps(t) && em.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: r, reverse: u = !1 } = t,
                    { from: n = [], to: a } = t,
                    o = new Set(),
                    i = [],
                    s = e;
                !(a && (u ? eo.isBefore(i, a) : eo.isAfter(i, a)));
            ) {
                if (
                    (o.has(s) || (yield [s, i]),
                    !o.has(s) && !em.isText(s) && 0 !== s.children.length && (null == r || !1 === r([s, i])))
                ) {
                    o.add(s);
                    var l = u ? s.children.length - 1 : 0;
                    (eo.isAncestor(i, n) && (l = n[i.length]), (i = i.concat(l)), (s = er.get(e, i)));
                    continue;
                }
                if (0 === i.length) break;
                if (!u) {
                    var c = eo.next(i);
                    if (er.has(e, c)) {
                        ((i = c), (s = er.get(e, i)));
                        continue;
                    }
                }
                if (u && 0 !== i[i.length - 1]) {
                    ((i = eo.previous(i)), (s = er.get(e, i)));
                    continue;
                }
                ((i = eo.parent(i)), (s = er.get(e, i)), o.add(s));
            }
        },
        parent(e, t) {
            var r = eo.parent(t),
                u = er.get(e, r);
            if (em.isText(u))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return u;
        },
        string: (e) => (em.isText(e) ? e.text : e.children.map(er.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, u] of er.nodes(e, t)) em.isText(r) && (yield [r, u]);
        },
    };
function eu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eu(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eu(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var ea = {
        isNodeOperation: (e) => ea.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!(0, a.Q)(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return eo.isPath(e.path) && er.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && eo.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && eo.isPath(e.path) && (0, a.Q)(e.properties);
                case "move_node":
                    return eo.isPath(e.path) && eo.isPath(e.newPath);
                case "set_node":
                    return eo.isPath(e.path) && (0, a.Q)(e.properties) && (0, a.Q)(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && eh.isRange(e.newProperties)) ||
                        (null === e.newProperties && eh.isRange(e.properties)) ||
                        ((0, a.Q)(e.properties) && (0, a.Q)(e.newProperties))
                    );
                case "split_node":
                    return eo.isPath(e.path) && "number" == typeof e.position && (0, a.Q)(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => ea.isOperation(e)),
        isSelectionOperation: (e) => ea.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => ea.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return en(en({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return en(en({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return en(en({}, e), {}, { type: "split_node", path: eo.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: r } = e;
                    if (eo.equals(t, r)) return e;
                    if (eo.isSibling(r, t)) return en(en({}, e), {}, { path: t, newPath: r });
                    var u = eo.transform(r, e),
                        n = eo.transform(eo.next(r), e);
                    return en(en({}, e), {}, { path: u, newPath: n });
                case "remove_node":
                    return en(en({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return en(en({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: a, newProperties: o } = e;
                    return en(en({}, e), {}, { properties: o, newProperties: a });
                case "set_selection":
                    var { properties: i, newProperties: s } = e;
                    if (null == i) return en(en({}, e), {}, { properties: s, newProperties: null });
                    if (null == s) return en(en({}, e), {}, { properties: null, newProperties: i });
                    return en(en({}, e), {}, { properties: s, newProperties: i });
                case "split_node":
                    return en(en({}, e), {}, { type: "merge_node", path: eo.next(e.path) });
            }
        },
    },
    eo = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: r = !1 } = t,
                u = eo.levels(e, t);
            return r ? u.slice(1) : u.slice(0, -1);
        },
        common(e, t) {
            for (var r = [], u = 0; u < e.length && u < t.length; u++) {
                var n = e[u];
                if (n !== t[u]) break;
                r.push(n);
            }
            return r;
        },
        compare(e, t) {
            for (var r = Math.min(e.length, t.length), u = 0; u < r; u++) {
                if (e[u] < t[u]) return -1;
                if (e[u] > t[u]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var r = e.length - 1,
                u = e.slice(0, r),
                n = t.slice(0, r),
                a = e[r],
                o = t[r];
            return eo.equals(u, n) && a > o;
        },
        endsAt(e, t) {
            var r = e.length,
                u = e.slice(0, r),
                n = t.slice(0, r);
            return eo.equals(u, n);
        },
        endsBefore(e, t) {
            var r = e.length - 1,
                u = e.slice(0, r),
                n = t.slice(0, r),
                a = e[r],
                o = t[r];
            return eo.equals(u, n) && a < o;
        },
        equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
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
            var r = e.slice(0, -1),
                u = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && eo.equals(r, u);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: r = !1 } = t,
                    u = [],
                    n = 0;
                n <= e.length;
                n++
            )
                u.push(e.slice(0, n));
            return (r && u.reverse(), u);
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
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var u = [...e],
                { affinity: n = "forward" } = r;
            if (0 === e.length) return u;
            switch (t.type) {
                case "insert_node":
                    var { path: a } = t;
                    (eo.equals(a, u) || eo.endsBefore(a, u) || eo.isAncestor(a, u)) && (u[a.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: o } = t;
                    if (eo.equals(o, u) || eo.isAncestor(o, u)) return null;
                    eo.endsBefore(o, u) && (u[o.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: i, position: s } = t;
                    eo.equals(i, u) || eo.endsBefore(i, u)
                        ? (u[i.length - 1] -= 1)
                        : eo.isAncestor(i, u) && ((u[i.length - 1] -= 1), (u[i.length] += s));
                    break;
                case "split_node":
                    var { path: l, position: c } = t;
                    if (eo.equals(l, u)) {
                        if ("forward" === n) u[u.length - 1] += 1;
                        else if ("backward" !== n) return null;
                    } else
                        eo.endsBefore(l, u)
                            ? (u[l.length - 1] += 1)
                            : eo.isAncestor(l, u) && e[l.length] >= c && ((u[l.length - 1] += 1), (u[l.length] -= c));
                    break;
                case "move_node":
                    var { path: f, newPath: d } = t;
                    if (eo.equals(f, d)) break;
                    if (eo.isAncestor(f, u) || eo.equals(f, u)) {
                        var D = d.slice();
                        return (
                            eo.endsBefore(f, d) && f.length < d.length && (D[f.length - 1] -= 1),
                            D.concat(u.slice(f.length))
                        );
                    }
                    eo.isSibling(f, d) && (eo.isAncestor(d, u) || eo.equals(d, u))
                        ? eo.endsBefore(f, u)
                            ? (u[f.length - 1] -= 1)
                            : (u[f.length - 1] += 1)
                        : eo.endsBefore(d, u) || eo.equals(d, u) || eo.isAncestor(d, u)
                          ? (eo.endsBefore(f, u) && (u[f.length - 1] -= 1), (u[d.length - 1] += 1))
                          : eo.endsBefore(f, u) && (eo.equals(d, u) && (u[d.length - 1] += 1), (u[f.length - 1] -= 1));
            }
            return u;
        },
    },
    ei = {
        transform(e, t) {
            var { current: r, affinity: u } = e;
            if (null != r) {
                var n = eo.transform(r, t, { affinity: u });
                ((e.current = n), null == n && e.unref());
            }
        },
    };
function es(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? es(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : es(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var ec = {
        compare(e, t) {
            var r = eo.compare(e.path, t.path);
            return 0 === r ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : r;
        },
        isAfter: (e, t) => 1 === ec.compare(e, t),
        isBefore: (e, t) => -1 === ec.compare(e, t),
        equals: (e, t) => e.offset === t.offset && eo.equals(e.path, t.path),
        isPoint: (e) => (0, a.Q)(e) && "number" == typeof e.offset && eo.isPath(e.path),
        transform(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: u = "forward" } = r,
                    { path: n, offset: a } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = eo.transform(n, t, r);
                        break;
                    case "insert_text":
                        eo.equals(t.path, n) &&
                            (t.offset < a || (t.offset === a && "forward" === u)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        (eo.equals(t.path, n) && (e.offset += t.position), (e.path = eo.transform(n, t, r)));
                        break;
                    case "remove_text":
                        eo.equals(t.path, n) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (eo.equals(t.path, n) || eo.isAncestor(t.path, n)) return null;
                        e.path = eo.transform(n, t, r);
                        break;
                    case "split_node":
                        if (eo.equals(t.path, n))
                            if (t.position === a && null == u) return null;
                            else
                                (t.position < a || (t.position === a && "forward" === u)) &&
                                    ((e.offset -= t.position),
                                    (e.path = eo.transform(n, t, el(el({}, r), {}, { affinity: "forward" }))));
                        else e.path = eo.transform(n, t, r);
                }
            });
        },
    },
    ef = {
        transform(e, t) {
            var { current: r, affinity: u } = e;
            if (null != r) {
                var n = ec.transform(r, t, { affinity: u });
                ((e.current = n), null == n && e.unref());
            }
        },
    },
    ed = ["anchor", "focus"];
function eD(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
var eh = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: r = !1 } = t,
                { anchor: u, focus: n } = e;
            return eh.isBackward(e) === r ? [u, n] : [n, u];
        },
        end(e) {
            var [, t] = eh.edges(e);
            return t;
        },
        equals: (e, t) => ec.equals(e.anchor, t.anchor) && ec.equals(e.focus, t.focus),
        includes(e, t) {
            if (eh.isRange(t)) {
                if (eh.includes(e, t.anchor) || eh.includes(e, t.focus)) return !0;
                var [r, u] = eh.edges(e),
                    [n, a] = eh.edges(t);
                return ec.isBefore(r, n) && ec.isAfter(u, a);
            }
            var [o, i] = eh.edges(e),
                s = !1,
                l = !1;
            return (
                ec.isPoint(t)
                    ? ((s = ec.compare(t, o) >= 0), (l = 0 >= ec.compare(t, i)))
                    : ((s = eo.compare(t, o.path) >= 0), (l = 0 >= eo.compare(t, i.path))),
                s && l
            );
        },
        intersection(e, t) {
            var r = g(e, ed),
                [u, n] = eh.edges(e),
                [a, o] = eh.edges(t),
                s = ec.isBefore(u, a) ? a : u,
                l = ec.isBefore(n, o) ? n : o;
            return ec.isBefore(l, s)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? eD(Object(r), !0).forEach(function (t) {
                                    i(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                : eD(Object(r)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                  });
                      }
                      return e;
                  })({ anchor: s, focus: l }, r);
        },
        isBackward(e) {
            var { anchor: t, focus: r } = e;
            return ec.isAfter(t, r);
        },
        isCollapsed(e) {
            var { anchor: t, focus: r } = e;
            return ec.equals(t, r);
        },
        isExpanded: (e) => !eh.isCollapsed(e),
        isForward: (e) => !eh.isBackward(e),
        isRange: (e) => (0, a.Q)(e) && ec.isPoint(e.anchor) && ec.isPoint(e.focus),
        *points(e) {
            (yield [e.anchor, "anchor"], yield [e.focus, "focus"]);
        },
        start(e) {
            var [t] = eh.edges(e);
            return t;
        },
        transform(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.jM)(e, (e) => {
                if (null === e) return null;
                var u,
                    n,
                    { affinity: a = "inward" } = r;
                if ("inward" === a) {
                    var o = eh.isCollapsed(e);
                    eh.isForward(e)
                        ? ((u = "forward"), (n = o ? u : "backward"))
                        : ((u = "backward"), (n = o ? u : "forward"));
                } else
                    "outward" === a
                        ? eh.isForward(e)
                            ? ((u = "backward"), (n = "forward"))
                            : ((u = "forward"), (n = "backward"))
                        : ((u = a), (n = a));
                var i = ec.transform(e.anchor, t, { affinity: u }),
                    s = ec.transform(e.focus, t, { affinity: n });
                if (!i || !s) return null;
                ((e.anchor = i), (e.focus = s));
            });
        },
    },
    eC = {
        transform(e, t) {
            var { current: r, affinity: u } = e;
            if (null != r) {
                var n = eh.transform(r, t, { affinity: u });
                ((e.current = n), null == n && e.unref());
            }
        },
    },
    ev = void 0,
    ep = {
        setScrubber(e) {
            ev = e;
        },
        stringify: (e) => JSON.stringify(e, ev),
    },
    eg = (e, t) => {
        for (var r in e) {
            var u = e[r],
                n = t[r];
            if ((0, a.Q)(u) && (0, a.Q)(n)) {
                if (!eg(u, n)) return !1;
            } else if (Array.isArray(u) && Array.isArray(n)) {
                if (u.length !== n.length) return !1;
                for (var o = 0; o < u.length; o++) if (u[o] !== n[o]) return !1;
            } else if (u !== n) return !1;
        }
        for (var i in t) if (void 0 === e[i] && void 0 !== t[i]) return !1;
        return !0;
    },
    eB = ["text"],
    eE = ["anchor", "focus"];
function eA(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function eF(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eA(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eA(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var em = {
    equals(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: u = !1 } = r;
        return eg(u ? g(e, eB) : e, u ? g(t, eB) : t);
    },
    isText: (e) => (0, a.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => em.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var r in t) if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
        return !0;
    },
    decorations(e, t) {
        var r = [eF({}, e)];
        for (var u of t) {
            var n = g(u, eE),
                [a, o] = eh.edges(u),
                i = [],
                s = 0,
                l = a.offset,
                c = o.offset;
            for (var f of r) {
                var { length: d } = f.text,
                    D = s;
                if (((s += d), l <= D && s <= c)) {
                    (Object.assign(f, n), i.push(f));
                    continue;
                }
                if ((l !== c && (l === s || c === D)) || l > s || c < D || (c === D && 0 !== D)) {
                    i.push(f);
                    continue;
                }
                var h = f,
                    C = void 0,
                    v = void 0;
                if (c < s) {
                    var p = c - D;
                    ((v = eF(eF({}, h), {}, { text: h.text.slice(p) })),
                        (h = eF(eF({}, h), {}, { text: h.text.slice(0, p) })));
                }
                if (l > D) {
                    var B = l - D;
                    ((C = eF(eF({}, h), {}, { text: h.text.slice(0, B) })),
                        (h = eF(eF({}, h), {}, { text: h.text.slice(B) })));
                }
                (Object.assign(h, n), C && i.push(C), i.push(h), v && i.push(v));
            }
            r = i;
        }
        return r;
    },
};
function eb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eb(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eb(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var ey = ["text"],
    ex = ["children"];
function eO(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function ek(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eO(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eO(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var eP = (e, t) =>
        Q.isElement(t) ? !!$.isVoid(e, t) || (1 === t.children.length && eP(e, t.children[0])) : !$.isEditor(t) && !0,
    eS = (e, t) => {
        var [r] = $.node(e, t);
        return (e) => e === r;
    };
function eT(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eT(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eT(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function eR(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eR(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eR(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var eM = eN(
    eN(
        eN(
            eN(
                {},
                {
                    transform(e, t) {
                        e.children = (0, o.mq)(e.children);
                        var r = e.selection && (0, o.mq)(e.selection);
                        try {
                            r = ((e, t, r) => {
                                switch (r.type) {
                                    case "insert_node":
                                        var { path: u, node: n } = r,
                                            a = er.parent(e, u),
                                            o = u[u.length - 1];
                                        if (o > a.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    u,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((a.children.splice(o, 0, n), t))
                                            for (var [i, s] of eh.points(t)) t[s] = ec.transform(i, r);
                                        break;
                                    case "insert_text":
                                        var { path: l, offset: c, text: f } = r;
                                        if (0 === f.length) break;
                                        var d = er.leaf(e, l),
                                            D = d.text.slice(0, c),
                                            h = d.text.slice(c);
                                        if (((d.text = D + f + h), t))
                                            for (var [C, v] of eh.points(t)) t[v] = ec.transform(C, r);
                                        break;
                                    case "merge_node":
                                        var { path: p } = r,
                                            g = er.get(e, p),
                                            B = eo.previous(p),
                                            E = er.get(e, B),
                                            A = er.parent(e, p),
                                            F = p[p.length - 1];
                                        if (em.isText(g) && em.isText(E)) E.text += g.text;
                                        else if (em.isText(g) || em.isText(E))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(p, "] to nodes of different interfaces: ")
                                                    .concat(ep.stringify(g), " ")
                                                    .concat(ep.stringify(E)),
                                            );
                                        else E.children.push(...g.children);
                                        if ((A.children.splice(F, 1), t))
                                            for (var [m, b] of eh.points(t)) t[b] = ec.transform(m, r);
                                        break;
                                    case "move_node":
                                        var { path: w, newPath: y } = r;
                                        if (eo.isAncestor(w, y))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(w, "] to new path [")
                                                    .concat(y, "] because the destination is inside itself."),
                                            );
                                        var x = er.get(e, w),
                                            O = er.parent(e, w),
                                            k = w[w.length - 1];
                                        O.children.splice(k, 1);
                                        var P = eo.transform(w, r),
                                            S = er.get(e, eo.parent(P)),
                                            T = P[P.length - 1];
                                        if ((S.children.splice(T, 0, x), t))
                                            for (var [j, R] of eh.points(t)) t[R] = ec.transform(j, r);
                                        break;
                                    case "remove_node":
                                        var { path: N } = r,
                                            M = N[N.length - 1];
                                        if ((er.parent(e, N).children.splice(M, 1), t))
                                            for (var [K, W] of eh.points(t)) {
                                                var _ = ec.transform(K, r);
                                                if (null != t && null != _) t[W] = _;
                                                else {
                                                    var L = void 0,
                                                        z = void 0;
                                                    for (var [I, q] of er.texts(e))
                                                        if (-1 === eo.compare(q, N)) L = [I, q];
                                                        else {
                                                            z = [I, q];
                                                            break;
                                                        }
                                                    var V = !1;
                                                    (L &&
                                                        z &&
                                                        (V = eo.equals(z[1], N)
                                                            ? !eo.hasPrevious(z[1])
                                                            : eo.common(L[1], N).length < eo.common(z[1], N).length),
                                                        L && !V
                                                            ? ((K.path = L[1]), (K.offset = L[0].text.length))
                                                            : z
                                                              ? ((K.path = z[1]), (K.offset = 0))
                                                              : (t = null));
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: Q, offset: H, text: U } = r;
                                        if (0 === U.length) break;
                                        var J = er.leaf(e, Q),
                                            X = J.text.slice(0, H),
                                            Y = J.text.slice(H + U.length);
                                        if (((J.text = X + Y), t))
                                            for (var [$, Z] of eh.points(t)) t[Z] = ec.transform($, r);
                                        break;
                                    case "set_node":
                                        var { path: G, properties: ee, newProperties: et } = r;
                                        if (0 === G.length) throw Error("Cannot set properties on the root node!");
                                        var eu = er.get(e, G);
                                        for (var en in et) {
                                            if ("children" === en || "text" === en)
                                                throw Error('Cannot set the "'.concat(en, '" property of nodes!'));
                                            var ea = et[en];
                                            null == ea ? delete eu[en] : (eu[en] = ea);
                                        }
                                        for (var ei in ee) et.hasOwnProperty(ei) || delete eu[ei];
                                        break;
                                    case "set_selection":
                                        var { newProperties: es } = r;
                                        if (null == es) t = es;
                                        else {
                                            if (null == t) {
                                                if (!eh.isRange(es))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            ep.stringify(es),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = ew({}, es);
                                            }
                                            for (var el in es) {
                                                var ef = es[el];
                                                if (null == ef) {
                                                    if ("anchor" === el || "focus" === el)
                                                        throw Error(
                                                            'Cannot remove the "'.concat(el, '" selection property'),
                                                        );
                                                    delete t[el];
                                                } else t[el] = ef;
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var ed,
                                            { path: eD, position: eC, properties: ev } = r;
                                        if (0 === eD.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    eD,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var eg = er.get(e, eD),
                                            eB = er.parent(e, eD),
                                            eE = eD[eD.length - 1];
                                        if (em.isText(eg)) {
                                            var eA = eg.text.slice(0, eC),
                                                eF = eg.text.slice(eC);
                                            ((eg.text = eA), (ed = ew(ew({}, ev), {}, { text: eF })));
                                        } else {
                                            var eb = eg.children.slice(0, eC),
                                                ey = eg.children.slice(eC);
                                            ((eg.children = eb), (ed = ew(ew({}, ev), {}, { children: ey })));
                                        }
                                        if ((eB.children.splice(eE + 1, 0, ed), t))
                                            for (var [ex, eO] of eh.points(t)) t[eO] = ec.transform(ex, r);
                                }
                                return t;
                            })(e, r, t);
                        } finally {
                            ((e.children = (0, o.vD)(e.children)),
                                r ? (e.selection = (0, o.Qx)(r) ? (0, o.vD)(r) : r) : (e.selection = null));
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    $.withoutNormalizing(e, () => {
                        var { hanging: u = !1, voids: n = !1, mode: a = "lowest" } = r,
                            { at: o, match: i, select: s } = r;
                        if ((er.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [l] = t;
                            if (
                                (o ||
                                    ((o = e.selection ? e.selection : e.children.length > 0 ? $.end(e, []) : [0]),
                                    (s = !0)),
                                null == s && (s = !1),
                                eh.isRange(o))
                            )
                                if ((u || (o = $.unhangRange(e, o, { voids: n })), eh.isCollapsed(o))) o = o.anchor;
                                else {
                                    var [, c] = eh.edges(o),
                                        f = $.pointRef(e, c);
                                    (eM.delete(e, { at: o }), (o = f.unref()));
                                }
                            if (ec.isPoint(o)) {
                                null == i &&
                                    (i = em.isText(l)
                                        ? (e) => em.isText(e)
                                        : e.isInline(l)
                                          ? (t) => em.isText(t) || $.isInline(e, t)
                                          : (t) => Q.isElement(t) && $.isBlock(e, t));
                                var [d] = $.nodes(e, { at: o.path, match: i, mode: a, voids: n });
                                if (!d) return;
                                var [, D] = d,
                                    h = $.pathRef(e, D),
                                    C = $.isEnd(e, o, D);
                                eM.splitNodes(e, { at: o, match: i, mode: a, voids: n });
                                var v = h.unref();
                                o = C ? eo.next(v) : v;
                            }
                            var p = eo.parent(o),
                                g = o[o.length - 1];
                            if (!(!n && $.void(e, { at: p }))) {
                                for (var B of t) {
                                    var E = p.concat(g);
                                    (g++, e.apply({ type: "insert_node", path: E, node: B }), (o = eo.next(o)));
                                }
                                if (((o = eo.previous(o)), s)) {
                                    var A = $.end(e, o);
                                    A && eM.select(e, A);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    $.withoutNormalizing(e, () => {
                        var { at: r = e.selection, mode: u = "lowest", voids: n = !1 } = t,
                            { match: a } = t;
                        if ((null == a && (a = eo.isPath(r) ? eS(e, r) : (t) => Q.isElement(t) && $.isBlock(e, t)), r))
                            for (var o of Array.from($.nodes(e, { at: r, match: a, mode: u, voids: n }), (t) => {
                                var [, r] = t;
                                return $.pathRef(e, r);
                            })) {
                                var i = o.unref();
                                if (i.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            i,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [s, l] = $.node(e, eo.parent(i)),
                                    c = i[i.length - 1],
                                    { length: f } = s.children;
                                if (1 === f) {
                                    var d = eo.next(l);
                                    (eM.moveNodes(e, { at: i, to: d, voids: n }),
                                        eM.removeNodes(e, { at: l, voids: n }));
                                } else if (0 === c) eM.moveNodes(e, { at: i, to: l, voids: n });
                                else if (c === f - 1) {
                                    var D = eo.next(l);
                                    eM.moveNodes(e, { at: i, to: D, voids: n });
                                } else {
                                    var h = eo.next(i),
                                        C = eo.next(l);
                                    (eM.splitNodes(e, { at: h, voids: n }),
                                        eM.moveNodes(e, { at: i, to: C, voids: n }));
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    $.withoutNormalizing(e, () => {
                        var r,
                            u,
                            { match: n, at: a = e.selection } = t,
                            { hanging: o = !1, voids: i = !1, mode: s = "lowest" } = t;
                        if (a) {
                            if (null == n)
                                if (eo.isPath(a)) {
                                    var [l] = $.parent(e, a);
                                    n = (e) => l.children.includes(e);
                                } else n = (t) => Q.isElement(t) && $.isBlock(e, t);
                            if ((!o && eh.isRange(a) && (a = $.unhangRange(e, a, { voids: i })), eh.isRange(a)))
                                if (eh.isCollapsed(a)) a = a.anchor;
                                else {
                                    var [, c] = eh.edges(a),
                                        f = $.pointRef(e, c);
                                    (eM.delete(e, { at: a }), (a = f.unref()), null == t.at && eM.select(e, a));
                                }
                            var [d] = $.nodes(e, { at: a, match: n, voids: i, mode: s }),
                                D = $.previous(e, { at: a, match: n, voids: i, mode: s });
                            if (d && D) {
                                var [h, C] = d,
                                    [v, p] = D;
                                if (0 !== C.length && 0 !== p.length) {
                                    var B = eo.next(p),
                                        E = eo.common(C, p),
                                        A = eo.isSibling(C, p),
                                        F = Array.from($.levels(e, { at: C }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(E.length)
                                            .slice(0, -1),
                                        m = $.above(e, {
                                            at: C,
                                            mode: "highest",
                                            match: (t) => F.includes(t) && eP(e, t),
                                        }),
                                        b = m && $.pathRef(e, m[1]);
                                    if (em.isText(h) && em.isText(v)) {
                                        var w = g(h, ey);
                                        ((u = v.text.length), (r = w));
                                    } else if (Q.isElement(h) && Q.isElement(v)) {
                                        var w = g(h, ex);
                                        ((u = v.children.length), (r = w));
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    C,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(ep.stringify(h), " ")
                                                .concat(ep.stringify(v)),
                                        );
                                    (A || eM.moveNodes(e, { at: C, to: B, voids: i }),
                                        b && eM.removeNodes(e, { at: b.current, voids: i }),
                                        (Q.isElement(v) && $.isEmpty(e, v)) ||
                                        (em.isText(v) && "" === v.text && 0 !== p[p.length - 1])
                                            ? eM.removeNodes(e, { at: p, voids: i })
                                            : e.apply({ type: "merge_node", path: B, position: u, properties: r }),
                                        b && b.unref());
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    $.withoutNormalizing(e, () => {
                        var { to: r, at: u = e.selection, mode: n = "lowest", voids: a = !1 } = t,
                            { match: o } = t;
                        if (u) {
                            null == o && (o = eo.isPath(u) ? eS(e, u) : (t) => Q.isElement(t) && $.isBlock(e, t));
                            var i = $.pathRef(e, r);
                            for (var s of Array.from($.nodes(e, { at: u, match: o, mode: n, voids: a }), (t) => {
                                var [, r] = t;
                                return $.pathRef(e, r);
                            })) {
                                var l = s.unref(),
                                    c = i.current;
                                (0 !== l.length && e.apply({ type: "move_node", path: l, newPath: c }),
                                    i.current &&
                                        eo.isSibling(c, l) &&
                                        eo.isAfter(c, l) &&
                                        (i.current = eo.next(i.current)));
                            }
                            i.unref();
                        }
                    });
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    $.withoutNormalizing(e, () => {
                        var { hanging: r = !1, voids: u = !1, mode: n = "lowest" } = t,
                            { at: a = e.selection, match: o } = t;
                        if (a)
                            for (var i of (null == o &&
                                (o = eo.isPath(a) ? eS(e, a) : (t) => Q.isElement(t) && $.isBlock(e, t)),
                            !r && eh.isRange(a) && (a = $.unhangRange(e, a, { voids: u })),
                            Array.from($.nodes(e, { at: a, match: o, mode: n, voids: u }), (t) => {
                                var [, r] = t;
                                return $.pathRef(e, r);
                            }))) {
                                var s = i.unref();
                                if (s) {
                                    var [l] = $.node(e, s);
                                    e.apply({ type: "remove_node", path: s, node: l });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    $.withoutNormalizing(e, () => {
                        var { match: u, at: n = e.selection, compare: a, merge: o } = r,
                            { hanging: i = !1, mode: s = "lowest", split: l = !1, voids: c = !1 } = r;
                        if (n) {
                            if (
                                (null == u && (u = eo.isPath(n) ? eS(e, n) : (t) => Q.isElement(t) && $.isBlock(e, t)),
                                !i && eh.isRange(n) && (n = $.unhangRange(e, n, { voids: c })),
                                l && eh.isRange(n))
                            ) {
                                if (eh.isCollapsed(n) && $.leaf(e, n.anchor)[0].text.length > 0) return;
                                var f = $.rangeRef(e, n, { affinity: "inward" }),
                                    [d, D] = eh.edges(n),
                                    h = "lowest" === s ? "lowest" : "highest",
                                    C = $.isEnd(e, D, D.path);
                                eM.splitNodes(e, { at: D, match: u, mode: h, voids: c, always: !C });
                                var v = $.isStart(e, d, d.path);
                                (eM.splitNodes(e, { at: d, match: u, mode: h, voids: c, always: !v }),
                                    (n = f.unref()),
                                    null == r.at && eM.select(e, n));
                            }
                            for (var [p, g] of (a || (a = (e, t) => e !== t),
                            $.nodes(e, { at: n, match: u, mode: s, voids: c }))) {
                                var B = {},
                                    E = {};
                                if (0 !== g.length) {
                                    var A = !1;
                                    for (var F in t)
                                        "children" !== F &&
                                            "text" !== F &&
                                            a(t[F], p[F]) &&
                                            ((A = !0),
                                            p.hasOwnProperty(F) && (B[F] = p[F]),
                                            o ? null != t[F] && (E[F] = o(p[F], t[F])) : null != t[F] && (E[F] = t[F]));
                                    A && e.apply({ type: "set_node", path: g, properties: B, newProperties: E });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    $.withoutNormalizing(e, () => {
                        var r,
                            u,
                            { mode: n = "lowest", voids: a = !1 } = t,
                            { match: o, at: i = e.selection, height: s = 0, always: l = !1 } = t;
                        if (
                            (null == o && (o = (t) => Q.isElement(t) && $.isBlock(e, t)),
                            eh.isRange(i) &&
                                (i = ((e, t) => {
                                    if (eh.isCollapsed(t)) return t.anchor;
                                    var [, r] = eh.edges(t),
                                        u = $.pointRef(e, r);
                                    return (eM.delete(e, { at: t }), u.unref());
                                })(e, i)),
                            eo.isPath(i))
                        ) {
                            var c = i,
                                f = $.point(e, c),
                                [d] = $.parent(e, c);
                            ((o = (e) => e === d), (s = f.path.length - c.length + 1), (i = f), (l = !0));
                        }
                        if (i) {
                            var D = $.pointRef(e, i, { affinity: "backward" });
                            try {
                                var [h] = $.nodes(e, { at: i, match: o, mode: n, voids: a });
                                if (!h) return;
                                var C = $.void(e, { at: i, mode: "highest" });
                                if (!a && C) {
                                    var [v, p] = C;
                                    if (Q.isElement(v) && e.isInline(v)) {
                                        var g = $.after(e, p);
                                        if (!g) {
                                            var B = eo.next(p);
                                            (eM.insertNodes(e, { text: "" }, { at: B, voids: a }), (g = $.point(e, B)));
                                        }
                                        ((i = g), (l = !0));
                                    }
                                    ((s = i.path.length - p.length + 1), (l = !0));
                                }
                                r = $.pointRef(e, i);
                                var E = i.path.length - s,
                                    [, A] = h,
                                    F = i.path.slice(0, E),
                                    m = 0 === s ? i.offset : i.path[E] + 0;
                                for (var [b, w] of $.levels(e, { at: F, reverse: !0, voids: a })) {
                                    var y = !1;
                                    if (
                                        w.length < A.length ||
                                        0 === w.length ||
                                        (!a && Q.isElement(b) && $.isVoid(e, b))
                                    )
                                        break;
                                    var x = D.current,
                                        O = $.isEnd(e, x, w);
                                    if (l || !D || !$.isEdge(e, x, w)) {
                                        y = !0;
                                        var k = er.extractProps(b);
                                        e.apply({ type: "split_node", path: w, position: m, properties: k });
                                    }
                                    m = w[w.length - 1] + (y || O ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var P = r.current || $.end(e, []);
                                    eM.select(e, P);
                                }
                            } finally {
                                (D.unref(), null == (u = r) || u.unref());
                            }
                        }
                    });
                },
                unsetNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(t) || (t = [t]);
                    var u = {};
                    for (var n of t) u[n] = null;
                    eM.setNodes(e, u, r);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    $.withoutNormalizing(e, () => {
                        var { mode: r = "lowest", split: u = !1, voids: n = !1 } = t,
                            { at: a = e.selection, match: o } = t;
                        if (a) {
                            (null == o && (o = eo.isPath(a) ? eS(e, a) : (t) => Q.isElement(t) && $.isBlock(e, t)),
                                eo.isPath(a) && (a = $.range(e, a)));
                            var i = eh.isRange(a) ? $.rangeRef(e, a) : null;
                            for (var s of Array.from($.nodes(e, { at: a, match: o, mode: r, voids: n }), (t) => {
                                var [, r] = t;
                                return $.pathRef(e, r);
                            }).reverse())
                                !(function (t) {
                                    var r = t.unref(),
                                        [a] = $.node(e, r),
                                        o = $.range(e, r);
                                    (u && i && (o = eh.intersection(i.current, o)),
                                        eM.liftNodes(e, {
                                            at: o,
                                            match: (e) => Q.isAncestor(a) && a.children.includes(e),
                                            voids: n,
                                        }));
                                })(s);
                            i && i.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    $.withoutNormalizing(e, () => {
                        var { mode: u = "lowest", split: n = !1, voids: a = !1 } = r,
                            { match: o, at: i = e.selection } = r;
                        if (i) {
                            if (
                                (null == o &&
                                    (o = eo.isPath(i)
                                        ? eS(e, i)
                                        : e.isInline(t)
                                          ? (t) => (Q.isElement(t) && $.isInline(e, t)) || em.isText(t)
                                          : (t) => Q.isElement(t) && $.isBlock(e, t)),
                                n && eh.isRange(i))
                            ) {
                                var [s, l] = eh.edges(i),
                                    c = $.rangeRef(e, i, { affinity: "inward" });
                                (eM.splitNodes(e, { at: l, match: o, voids: a }),
                                    eM.splitNodes(e, { at: s, match: o, voids: a }),
                                    (i = c.unref()),
                                    null == r.at && eM.select(e, i));
                            }
                            for (var [, f] of Array.from(
                                $.nodes(e, {
                                    at: i,
                                    match: e.isInline(t)
                                        ? (t) => Q.isElement(t) && $.isBlock(e, t)
                                        : (e) => $.isEditor(e),
                                    mode: "lowest",
                                    voids: a,
                                }),
                            )) {
                                var d = eh.isRange(i) ? eh.intersection(i, $.range(e, f)) : i;
                                if (d) {
                                    var D = Array.from($.nodes(e, { at: d, match: o, mode: u, voids: a }));
                                    if (
                                        D.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [r] = D,
                                                    u = D[D.length - 1],
                                                    [, n] = r,
                                                    [, o] = u;
                                                if (0 === n.length && 0 === o.length) return "continue";
                                                var i = eo.equals(n, o) ? eo.parent(n) : eo.common(n, o),
                                                    s = $.range(e, n, o),
                                                    [l] = $.node(e, i),
                                                    c = i.length + 1,
                                                    f = eo.next(o.slice(0, c)),
                                                    d = ek(ek({}, t), {}, { children: [] });
                                                (eM.insertNodes(e, d, { at: f, voids: a }),
                                                    eM.moveNodes(e, {
                                                        at: s,
                                                        match: (e) => Q.isAncestor(l) && l.children.includes(e),
                                                        to: f.concat(0),
                                                        voids: a,
                                                    }));
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
                    { edge: r = "anchor" } = t,
                    { selection: u } = e;
                if (u) {
                    if ("anchor" === r) eM.select(e, u.anchor);
                    else if ("focus" === r) eM.select(e, u.focus);
                    else if ("start" === r) {
                        var [n] = eh.edges(u);
                        eM.select(e, n);
                    } else if ("end" === r) {
                        var [, a] = eh.edges(u);
                        eM.select(e, a);
                    }
                }
            },
            deselect(e) {
                var { selection: t } = e;
                t && e.apply({ type: "set_selection", properties: t, newProperties: null });
            },
            move(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { selection: r } = e,
                    { distance: u = 1, unit: n = "character", reverse: a = !1 } = t,
                    { edge: o = null } = t;
                if (r) {
                    ("start" === o && (o = eh.isBackward(r) ? "focus" : "anchor"),
                        "end" === o && (o = eh.isBackward(r) ? "anchor" : "focus"));
                    var { anchor: i, focus: s } = r,
                        l = { distance: u, unit: n },
                        c = {};
                    if (null == o || "anchor" === o) {
                        var f = a ? $.before(e, i, l) : $.after(e, i, l);
                        f && (c.anchor = f);
                    }
                    if (null == o || "focus" === o) {
                        var d = a ? $.before(e, s, l) : $.after(e, s, l);
                        d && (c.focus = d);
                    }
                    eM.setSelection(e, c);
                }
            },
            select(e, t) {
                var { selection: r } = e;
                if (((t = $.range(e, t)), r)) return void eM.setSelection(e, t);
                if (!eh.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            ep.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: r, newProperties: t });
            },
            setPoint(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: u } = e,
                    { edge: n = "both" } = r;
                if (u) {
                    ("start" === n && (n = eh.isBackward(u) ? "focus" : "anchor"),
                        "end" === n && (n = eh.isBackward(u) ? "anchor" : "focus"));
                    var { anchor: a, focus: o } = u,
                        i = "anchor" === n ? a : o;
                    eM.setSelection(e, { ["anchor" === n ? "anchor" : "focus"]: ej(ej({}, i), t) });
                }
            },
            setSelection(e, t) {
                var { selection: r } = e,
                    u = {},
                    n = {};
                if (r) {
                    for (var a in t)
                        (("anchor" !== a || null == t.anchor || ec.equals(t.anchor, r.anchor)) &&
                            ("focus" !== a || null == t.focus || ec.equals(t.focus, r.focus)) &&
                            ("anchor" === a || "focus" === a || t[a] === r[a])) ||
                            ((u[a] = r[a]), (n[a] = t[a]));
                    Object.keys(u).length > 0 && e.apply({ type: "set_selection", properties: u, newProperties: n });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.withoutNormalizing(e, () => {
                var r,
                    { reverse: u = !1, unit: n = "character", distance: a = 1, voids: o = !1 } = t,
                    { at: i = e.selection, hanging: s = !1 } = t;
                if (i) {
                    var l = !1;
                    if ((eh.isRange(i) && eh.isCollapsed(i) && ((l = !0), (i = i.anchor)), ec.isPoint(i))) {
                        var c = $.void(e, { at: i, mode: "highest" });
                        if (!o && c) {
                            var [, f] = c;
                            i = f;
                        } else {
                            var d = { unit: n, distance: a },
                                D = u ? $.before(e, i, d) || $.start(e, []) : $.after(e, i, d) || $.end(e, []);
                            ((i = { anchor: i, focus: D }), (s = !0));
                        }
                    }
                    if (eo.isPath(i)) return void eM.removeNodes(e, { at: i, voids: o });
                    if (!eh.isCollapsed(i)) {
                        if (!s) {
                            var [, h] = eh.edges(i),
                                C = $.end(e, []);
                            ec.equals(h, C) || (i = $.unhangRange(e, i, { voids: o }));
                        }
                        var [v, p] = eh.edges(i),
                            g = $.above(e, { match: (t) => Q.isElement(t) && $.isBlock(e, t), at: v, voids: o }),
                            B = $.above(e, { match: (t) => Q.isElement(t) && $.isBlock(e, t), at: p, voids: o }),
                            E = g && B && !eo.equals(g[1], B[1]),
                            A = eo.equals(v.path, p.path),
                            F = o ? null : $.void(e, { at: v, mode: "highest" }),
                            m = o ? null : $.void(e, { at: p, mode: "highest" });
                        if (F) {
                            var b = $.before(e, v);
                            b && g && eo.isAncestor(g[1], b.path) && (v = b);
                        }
                        if (m) {
                            var w = $.after(e, p);
                            w && B && eo.isAncestor(B[1], w.path) && (p = w);
                        }
                        var y = [];
                        for (var x of $.nodes(e, { at: i, voids: o })) {
                            var [O, k] = x;
                            (!r || 0 !== eo.compare(k, r)) &&
                                ((!o && Q.isElement(O) && $.isVoid(e, O)) ||
                                    (!eo.isCommon(k, v.path) && !eo.isCommon(k, p.path))) &&
                                (y.push(x), (r = k));
                        }
                        var P = Array.from(y, (t) => {
                                var [, r] = t;
                                return $.pathRef(e, r);
                            }),
                            S = $.pointRef(e, v),
                            T = $.pointRef(e, p),
                            j = "";
                        if (!A && !F) {
                            var R = S.current,
                                [N] = $.leaf(e, R),
                                { path: M } = R,
                                { offset: K } = v,
                                W = N.text.slice(K);
                            W.length > 0 && (e.apply({ type: "remove_text", path: M, offset: K, text: W }), (j = W));
                        }
                        if (
                            (P.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => eM.removeNodes(e, { at: t, voids: o })),
                            !m)
                        ) {
                            var _ = T.current,
                                [L] = $.leaf(e, _),
                                { path: z } = _,
                                I = A ? v.offset : 0,
                                q = L.text.slice(I, p.offset);
                            q.length > 0 && (e.apply({ type: "remove_text", path: z, offset: I, text: q }), (j = q));
                        }
                        (!A &&
                            E &&
                            T.current &&
                            S.current &&
                            eM.mergeNodes(e, { at: T.current, hanging: !0, voids: o }),
                            l &&
                                u &&
                                "character" === n &&
                                j.length > 1 &&
                                j.match(/[\u0E00-\u0E7F]+/) &&
                                eM.insertText(e, j.slice(0, j.length - a)));
                        var V = S.unref(),
                            H = T.unref(),
                            U = u ? V || H : H || V;
                        null == t.at && U && eM.select(e, U);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var u,
                    { hanging: n = !1, voids: a = !1 } = r,
                    { at: o = e.selection } = r;
                if (t.length) {
                    if (o) {
                        if (eh.isRange(o))
                            if ((n || (o = $.unhangRange(e, o, { voids: a })), eh.isCollapsed(o))) o = o.anchor;
                            else {
                                var [, i] = eh.edges(o);
                                if (!a && $.void(e, { at: i })) return;
                                var s = $.pointRef(e, i);
                                (eM.delete(e, { at: o }), (o = s.unref()));
                            }
                        else eo.isPath(o) && (o = $.start(e, o));
                        if (!(!a && $.void(e, { at: o }))) {
                            var l = $.above(e, {
                                at: o,
                                match: (t) => Q.isElement(t) && $.isInline(e, t),
                                mode: "highest",
                                voids: a,
                            });
                            if (l) {
                                var [, c] = l;
                                $.isEnd(e, o, c) ? (o = $.after(e, c)) : $.isStart(e, o, c) && (o = $.before(e, c));
                            }
                            var [, f] = $.above(e, {
                                    match: (t) => Q.isElement(t) && $.isBlock(e, t),
                                    at: o,
                                    voids: a,
                                }),
                                d = $.isStart(e, o, f),
                                D = $.isEnd(e, o, f),
                                h = d && D,
                                C = !d || (d && D),
                                v = !D,
                                [, p] = er.first({ children: t }, []),
                                [, g] = er.last({ children: t }, []),
                                B = [],
                                E = (t) => {
                                    var [r, u] = t;
                                    return (
                                        0 !== u.length &&
                                        (!!h ||
                                            !(
                                                (C &&
                                                    eo.isAncestor(u, p) &&
                                                    Q.isElement(r) &&
                                                    !e.isVoid(r) &&
                                                    !e.isInline(r)) ||
                                                (v &&
                                                    eo.isAncestor(u, g) &&
                                                    Q.isElement(r) &&
                                                    !e.isVoid(r) &&
                                                    !e.isInline(r))
                                            ))
                                    );
                                };
                            for (var A of er.nodes({ children: t }, { pass: E })) E(A) && B.push(A);
                            var F = [],
                                m = [],
                                b = [],
                                w = !0,
                                y = !1;
                            for (var [x] of B)
                                Q.isElement(x) && !e.isInline(x)
                                    ? ((w = !1), (y = !0), m.push(x))
                                    : w
                                      ? F.push(x)
                                      : b.push(x);
                            var [O] = $.nodes(e, {
                                    at: o,
                                    match: (t) => em.isText(t) || $.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                [, k] = O,
                                P = $.isStart(e, o, k),
                                S = $.isEnd(e, o, k),
                                T = $.pathRef(e, D && !b.length ? eo.next(f) : f),
                                j = $.pathRef(e, S ? eo.next(k) : k);
                            eM.splitNodes(e, {
                                at: o,
                                match: (t) =>
                                    y ? Q.isElement(t) && $.isBlock(e, t) : em.isText(t) || $.isInline(e, t),
                                mode: y ? "lowest" : "highest",
                                always: y && (!d || F.length > 0) && (!D || b.length > 0),
                                voids: a,
                            });
                            var R = $.pathRef(e, !P || (P && S) ? eo.next(k) : k);
                            if (
                                (eM.insertNodes(e, F, {
                                    at: R.current,
                                    match: (t) => em.isText(t) || $.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                h && !F.length && m.length && !b.length && eM.delete(e, { at: f, voids: a }),
                                eM.insertNodes(e, m, {
                                    at: T.current,
                                    match: (t) => Q.isElement(t) && $.isBlock(e, t),
                                    mode: "lowest",
                                    voids: a,
                                }),
                                eM.insertNodes(e, b, {
                                    at: j.current,
                                    match: (t) => em.isText(t) || $.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                !r.at &&
                                    (b.length > 0 && j.current
                                        ? (u = eo.previous(j.current))
                                        : m.length > 0 && T.current
                                          ? (u = eo.previous(T.current))
                                          : R.current && (u = eo.previous(R.current)),
                                    u))
                            ) {
                                var N = $.end(e, u);
                                eM.select(e, N);
                            }
                            (R.unref(), T.unref(), j.unref());
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            $.withoutNormalizing(e, () => {
                var { voids: u = !1 } = r,
                    { at: n = e.selection } = r;
                if (n) {
                    if ((eo.isPath(n) && (n = $.range(e, n)), eh.isRange(n)))
                        if (eh.isCollapsed(n)) n = n.anchor;
                        else {
                            var a = eh.end(n);
                            if (!u && $.void(e, { at: a })) return;
                            var o = eh.start(n),
                                i = $.pointRef(e, o),
                                s = $.pointRef(e, a);
                            eM.delete(e, { at: n, voids: u });
                            var l = i.unref(),
                                c = s.unref();
                            ((n = l || c), eM.setSelection(e, { anchor: n, focus: n }));
                        }
                    if (!(!u && $.void(e, { at: n }))) {
                        var { path: f, offset: d } = n;
                        t.length > 0 && e.apply({ type: "insert_text", path: f, offset: d, text: t });
                    }
                }
            });
        },
    },
);
