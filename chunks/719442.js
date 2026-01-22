n.d(t, {
    EY: () => eT,
    Hg: () => z,
    KE: () => J,
    Q6: () => eg,
    bP: () => ei,
    bR: () => ef,
    gB: () => eW,
    h6: () => ey,
    ie: () => m,
    wA: () => el,
});
var r,
    i = n(694260),
    a = n(159563);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var o = new WeakMap(),
    l = new WeakMap(),
    c = new WeakMap(),
    u = new WeakMap(),
    d = new WeakMap(),
    f = new WeakMap(),
    p = new WeakMap();

function _(e, t) {
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
            ? _(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (t) {
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
            for (var n of J.pathRefs(e)) ec.transform(n, t);
            for (var r of J.pointRefs(e)) ep.transform(r, t);
            for (var i of J.rangeRefs(e)) eE.transform(i, t);
            var a,
                s,
                u = o.get(e) || [],
                d = l.get(e) || new Set(),
                f = (e) => {
                    if (e) {
                        var t = e.join(",");
                        s.has(t) || (s.add(t), a.push(e));
                    }
                };
            if (el.operationCanTransformPath(t)) for (var p of ((a = []), (s = new Set()), u)) f(el.transform(p, t));
            else (a = u), (s = d);
            for (var _ of e.getDirtyPaths(t)) f(_);
            o.set(e, a),
                l.set(e, s),
                eW.transform(e, t),
                e.operations.push(t),
                J.normalize(e, {
                    operation: t,
                }),
                "set_selection" === t.type && (e.marks = null),
                c.get(e) ||
                    (c.set(e, !0),
                    Promise.resolve().then(() => {
                        c.set(e, !1),
                            e.onChange({
                                operation: t,
                            }),
                            (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
                var a = (t, n) => {
                        if (!eT.isText(t)) return !1;
                        var [r, i] = J.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    s = eg.isExpanded(r),
                    o = !1;
                if (!s) {
                    var [l, u] = J.node(e, r);
                    if (l && a(l, u)) {
                        var [d] = J.parent(e, u);
                        o = d && e.markableVoid(d);
                    }
                }
                if (s || o)
                    eW.setNodes(
                        e,
                        {
                            [t]: n,
                        },
                        {
                            match: a,
                            split: !0,
                            voids: !0,
                        },
                    );
                else {
                    var f = h(
                        h({}, J.marks(e) || {}),
                        {},
                        {
                            [t]: n,
                        },
                    );
                    (e.marks = f), c.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n &&
                eg.isCollapsed(n) &&
                eW.delete(e, {
                    unit: t,
                    reverse: !0,
                });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n &&
                eg.isCollapsed(n) &&
                eW.delete(e, {
                    unit: t,
                });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n &&
                eg.isExpanded(n) &&
                eW.delete(e, {
                    reverse: "backward" === t,
                });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? ei.fragment(e, t) : [];
        },
        insertBreak: () => {
            eW.splitNodes(e, {
                always: !0,
            });
        },
        insertSoftBreak: () => {
            eW.splitNodes(e, {
                always: !0,
            });
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
                    var i = h(
                        {
                            text: t,
                        },
                        r,
                    );
                    eW.insertNodes(e, i);
                } else eW.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!eT.isText(n)) {
                if (z.isElement(n) && 0 === n.children.length) {
                    var i = {
                        text: "",
                    };
                    eW.insertNodes(e, i, {
                        at: r.concat(0),
                        voids: !0,
                    });
                    return;
                }
                for (
                    var a =
                            !J.isEditor(n) &&
                            z.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                eT.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        s = 0,
                        o = 0;
                    o < n.children.length;
                    o++, s++
                ) {
                    var l = ei.get(e, r);
                    if (!eT.isText(l)) {
                        var c = n.children[o],
                            u = l.children[s - 1],
                            d = o === n.children.length - 1,
                            f = eT.isText(c) || (z.isElement(c) && e.isInline(c));
                        if (f !== a)
                            eW.removeNodes(e, {
                                at: r.concat(s),
                                voids: !0,
                            }),
                                s--;
                        else if (z.isElement(c)) {
                            if (e.isInline(c))
                                if (null != u && eT.isText(u)) {
                                    if (d) {
                                        var p = {
                                            text: "",
                                        };
                                        eW.insertNodes(e, p, {
                                            at: r.concat(s + 1),
                                            voids: !0,
                                        }),
                                            s++;
                                    }
                                } else {
                                    var _ = {
                                        text: "",
                                    };
                                    eW.insertNodes(e, _, {
                                        at: r.concat(s),
                                        voids: !0,
                                    }),
                                        s++;
                                }
                        } else
                            null != u &&
                                eT.isText(u) &&
                                (eT.equals(c, u, {
                                    loose: !0,
                                })
                                    ? (eW.mergeNodes(e, {
                                          at: r.concat(s),
                                          voids: !0,
                                      }),
                                      s--)
                                    : "" === u.text
                                      ? (eW.removeNodes(e, {
                                            at: r.concat(s - 1),
                                            voids: !0,
                                        }),
                                        s--)
                                      : "" === c.text &&
                                        (eW.removeNodes(e, {
                                            at: r.concat(s),
                                            voids: !0,
                                        }),
                                        s--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!eT.isText(t)) return !1;
                        var [r, i] = J.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    i = eg.isExpanded(n),
                    a = !1;
                if (!i) {
                    var [s, o] = J.node(e, n);
                    if (s && r(s, o)) {
                        var [l] = J.parent(e, o);
                        a = l && e.markableVoid(l);
                    }
                }
                if (i || a)
                    eW.unsetNodes(e, t, {
                        match: r,
                        split: !0,
                        voids: !0,
                    });
                else {
                    var u = h({}, J.marks(e) || {});
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
                    return el.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...el.levels(r),
                        ...(eT.isText(n)
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
                    var { path: a, newPath: s } = e;
                    if (el.equals(a, s)) return [];
                    var o = [],
                        l = [];
                    for (var c of el.ancestors(a)) {
                        var u = el.transform(c, e);
                        o.push(u);
                    }
                    for (var d of el.ancestors(s)) {
                        var f = el.transform(d, e);
                        l.push(f);
                    }
                    var p = l[l.length - 1],
                        _ = s[s.length - 1];
                    return [...o, ...l, p.concat(_)];
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

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var b = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            i = t ? T(e) : e,
            a = r.None,
            s = r.None,
            o = 0,
            l = null,
            c = null;
        for (var u of i) {
            var d = u.codePointAt(0);
            if (!d) break;
            var f = U(u, d);
            if (
                (([a, s] = n ? [s, f] : [f, a]),
                (G(a, r.ZWJ) && G(s, r.ExtPict) && !(l = n ? H(e.substring(0, o)) : H(e.substring(0, e.length - o)))) ||
                    (G(a, r.RI) && G(s, r.RI) && !(c = null !== c ? !c : !!n || W(e.substring(0, e.length - o)))) ||
                    (a !== r.None && s !== r.None && F(a, s)))
            )
                break;
            o += u.length;
        }
        return o || 1;
    },
    y = /\s/,
    O =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    A = /['\u2018\u2019]/,
    v = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0; ) {
            var i = b(e, t),
                [a, s] = S(e, i, t);
            if (I(a, s, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = s;
        }
        return n;
    },
    S = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    I = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (y.test(t)) return !1;
        if (A.test(t)) {
            var i = b(n, r),
                [a, s] = S(n, i, r);
            if (e(a, s, r)) return !0;
        }
        return !O.test(t);
    },
    T = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (N(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (C(i.charCodeAt(0))) {
                    yield i + r, n++;
                    continue;
                }
            }
            yield r;
        }
    },
    C = (e) => e >= 55296 && e <= 56319,
    N = (e) => e >= 56320 && e <= 57343;
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
var R =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    w =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    P =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    D = /^[\u1100-\u115F\uA960-\uA97C]$/,
    x = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    L = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    j =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    M =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    k =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    U = (e, t) => {
        var n = r.Any;
        return (
            -1 !== e.search(R) && (n |= r.Extend),
            8205 === t && (n |= r.ZWJ),
            t >= 127462 && t <= 127487 && (n |= r.RI),
            -1 !== e.search(w) && (n |= r.Prepend),
            -1 !== e.search(P) && (n |= r.SpacingMark),
            -1 !== e.search(D) && (n |= r.L),
            -1 !== e.search(x) && (n |= r.V),
            -1 !== e.search(L) && (n |= r.T),
            -1 !== e.search(j) && (n |= r.LV),
            -1 !== e.search(M) && (n |= r.LVT),
            -1 !== e.search(k) && (n |= r.ExtPict),
            n
        );
    };

function G(e, t) {
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

function F(e, t) {
    return -1 === V.findIndex((n) => G(e, n[0]) && G(t, n[1]));
}
var B =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    H = (e) => -1 !== e.search(B),
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
var $ = new WeakMap(),
    J = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: i = e.selection, match: a } = t;
            if (i) {
                var s = J.path(e, i),
                    o = "lowest" === r;
                for (var [l, c] of J.levels(e, {
                    at: s,
                    voids: n,
                    match: a,
                    reverse: o,
                }))
                    if (!eT.isText(l)) {
                        if (eg.isRange(i)) {
                            if (el.isAncestor(c, i.anchor.path) && el.isAncestor(c, i.focus.path)) return [l, c];
                        } else if (!el.equals(s, c)) return [l, c];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = {
                    anchor: J.point(e, t, {
                        edge: "end",
                    }),
                    focus: J.end(e, []),
                },
                { distance: a = 1 } = r,
                s = 0;
            for (var o of J.positions(
                e,
                Q(
                    Q({}, r),
                    {},
                    {
                        at: i,
                    },
                ),
            )) {
                if (s > a) break;
                0 !== s && (n = o), s++;
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = {
                    anchor: J.start(e, []),
                    focus: J.point(e, t, {
                        edge: "start",
                    }),
                },
                { distance: a = 1 } = r,
                s = 0;
            for (var o of J.positions(
                e,
                Q(
                    Q({}, r),
                    {},
                    {
                        at: i,
                        reverse: !0,
                    },
                ),
            )) {
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
        edges: (e, t) => [J.start(e, t), J.end(e, t)],
        end: (e, t) =>
            J.point(e, t, {
                edge: "end",
            }),
        first(e, t) {
            var n = J.path(e, t, {
                edge: "start",
            });
            return J.node(e, n);
        },
        fragment(e, t) {
            var n = J.range(e, t);
            return ei.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => z.isElement(t) && J.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => eT.isText(t) || J.isInline(e, t)),
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
            var t = $.get(e);
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
                (null === e.selection || eg.isRange(e.selection)) &&
                ei.isNodeList(e.children) &&
                eo.isOperationList(e.operations);
            return $.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = J.end(e, n);
            return ef.equals(t, r);
        },
        isEdge: (e, t, n) => J.isStart(e, t, n) || J.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && eT.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = u.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = J.start(e, n);
            return ef.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = J.path(e, t, {
                edge: "end",
            });
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
                { match: a } = t;
            if ((null == a && (a = () => !0), n)) {
                var s = [],
                    o = J.path(e, n);
                for (var [l, c] of ei.levels(e, o))
                    if (a(l, c) && (s.push([l, c]), !i && z.isElement(l) && J.isVoid(e, l))) break;
                r && s.reverse(), yield* s;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (eg.isExpanded(n)) {
                var [r] = J.nodes(e, {
                    match: eT.isText,
                });
                if (!r) return {};
                var [i] = r;
                return E(i, q);
            }
            var { anchor: a } = n,
                { path: s } = a,
                [o] = J.leaf(e, s);
            if (0 === a.offset) {
                var l = J.previous(e, {
                    at: s,
                    match: eT.isText,
                });
                if (
                    !J.above(e, {
                        match: (t) => z.isElement(t) && J.isVoid(e, t) && e.markableVoid(t),
                    })
                ) {
                    var c = J.above(e, {
                        match: (t) => z.isElement(t) && J.isBlock(e, t),
                    });
                    if (l && c) {
                        var [u, d] = l,
                            [, f] = c;
                        el.isAncestor(f, d) && (o = u);
                    }
                }
            }
            return E(o, X);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var s = J.after(e, a, {
                    voids: r,
                });
                if (s) {
                    var [, o] = J.last(e, []),
                        l = [s.path, o];
                    if (el.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                    if (null == i)
                        if (el.isPath(a)) {
                            var [c] = J.parent(e, a);
                            i = (e) => c.children.includes(e);
                        } else i = () => !0;
                    var [u] = J.nodes(e, {
                        at: l,
                        match: i,
                        mode: n,
                        voids: r,
                    });
                    return u;
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
                { at: a = e.selection, mode: s = "all", universal: o = !1, reverse: l = !1, voids: c = !1 } = i,
                { match: u } = i;
            if ((u || (u = () => !0), a)) {
                if (ee.isSpan(a)) (t = a[0]), (n = a[1]);
                else {
                    var d = J.path(e, a, {
                            edge: "start",
                        }),
                        f = J.path(e, a, {
                            edge: "end",
                        });
                    (t = l ? f : d), (n = l ? d : f);
                }
                var p = ei.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !c && z.isElement(n) && J.isVoid(e, n);
                        },
                    }),
                    _ = [];
                for (var [h, m] of p) {
                    var g = r && 0 === el.compare(m, r[1]);
                    if ("highest" !== s || !g) {
                        if (!u(h, m))
                            if (o && !g && eT.isText(h)) return;
                            else continue;
                        if ("lowest" === s && g) {
                            r = [h, m];
                            continue;
                        }
                        var E = "lowest" === s ? r : [h, m];
                        E && (o ? _.push(E) : yield E), (r = [h, m]);
                    }
                }
                "lowest" === s && r && (o ? _.push(r) : yield r), o && (yield* _);
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
            if (J.isNormalizing(e)) {
                if (n) {
                    var c = Array.from(ei.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        u = new Set(c.map((e) => e.join(",")));
                    o.set(e, c), l.set(e, u);
                }
                0 !== i(e).length &&
                    J.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (ei.has(e, t)) {
                                var n = J.node(e, t),
                                    [a, o] = n;
                                z.isElement(a) &&
                                    0 === a.children.length &&
                                    e.normalizeNode(n, {
                                        operation: r,
                                    });
                            }
                        for (var l = i(e), c = l.length, u = 0; 0 !== l.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: l,
                                    iteration: u,
                                    initialDirtyPathsLength: c,
                                    operation: r,
                                })
                            )
                                return;
                            var d = s(e);
                            if (ei.has(e, d)) {
                                var f = J.node(e, d);
                                e.normalizeNode(f, {
                                    operation: r,
                                });
                            }
                            u++, (l = i(e));
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
                    var [, a] = ei.first(e, t);
                    t = a;
                } else if ("end" === i) {
                    var [, s] = ei.last(e, t);
                    t = s;
                }
            }
            return (
                eg.isRange(t) &&
                    (t =
                        "start" === i ? eg.start(t) : "end" === i ? eg.end(t) : el.common(t.anchor.path, t.focus.path)),
                ef.isPoint(t) && (t = t.path),
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
                        [, a] = ei.last(e, t);
                    i = a;
                } else {
                    var [, s] = ei.first(e, t);
                    i = s;
                }
                var o = ei.get(e, i);
                if (!eT.isText(o))
                    throw Error(
                        "Cannot get the "
                            .concat(r, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(r, " text node."),
                    );
                return {
                    path: i,
                    offset: "end" === r ? o.text.length : 0,
                };
            }
            if (eg.isRange(t)) {
                var [l, c] = eg.edges(t);
                return "start" === r ? l : c;
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
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: i = !1, voids: a = !1 } = t;
            if (n) {
                var s = J.range(e, n),
                    [o, l] = eg.edges(s),
                    c = i ? l : o,
                    u = !1,
                    d = "",
                    f = 0,
                    p = 0,
                    _ = 0;
                for (var [h, m] of J.nodes(e, {
                    at: n,
                    reverse: i,
                    voids: a,
                })) {
                    if (z.isElement(h)) {
                        if (!a && e.isVoid(h)) {
                            yield J.start(e, m);
                            continue;
                        }
                        if (e.isInline(h)) continue;
                        if (J.hasInlines(e, h)) {
                            var g = el.isAncestor(m, l.path) ? l : J.end(e, m),
                                E = el.isAncestor(m, o.path) ? o : J.start(e, m);
                            (d = J.string(
                                e,
                                {
                                    anchor: E,
                                    focus: g,
                                },
                                {
                                    voids: a,
                                },
                            )),
                                (u = !0);
                        }
                    }
                    if (eT.isText(h)) {
                        var y = el.equals(m, c.path);
                        for (
                            y
                                ? ((p = i ? c.offset : h.text.length - c.offset), (_ = c.offset))
                                : ((p = h.text.length), (_ = i ? p : 0)),
                                (y || u || "offset" === r) &&
                                    (yield {
                                        path: m,
                                        offset: _,
                                    },
                                    (u = !1));
                            ;
                        ) {
                            if (0 === f) {
                                if ("" === d) break;
                                (f = O(d, r, i)), (d = S(d, f, i)[1]);
                            }
                            if (((_ = i ? _ - f : _ + f), (p -= f) < 0)) {
                                f = -p;
                                break;
                            }
                            (f = 0),
                                yield {
                                    path: m,
                                    offset: _,
                                };
                        }
                    }
                }
            }

            function O(e, t, n) {
                return "character" === t
                    ? b(e, n)
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
                var s = J.before(e, a, {
                    voids: r,
                });
                if (s) {
                    var [, o] = J.first(e, []),
                        l = [s.path, o];
                    if (el.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == i)
                        if (el.isPath(a)) {
                            var [c] = J.parent(e, a);
                            i = (e) => c.children.includes(e);
                        } else i = () => !0;
                    var [u] = J.nodes(e, {
                        reverse: !0,
                        at: l,
                        match: i,
                        mode: n,
                        voids: r,
                    });
                    return u;
                }
            }
        },
        range: (e, t, n) =>
            eg.isRange(t) && !n
                ? t
                : {
                      anchor: J.start(e, t),
                      focus: J.end(e, n || t),
                  },
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
            var t = p.get(e);
            return t || ((t = new Set()), p.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            u.set(e, t);
        },
        start: (e, t) =>
            J.point(e, t, {
                edge: "start",
            }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                i = J.range(e, t),
                [a, s] = eg.edges(i),
                o = "";
            for (var [l, c] of J.nodes(e, {
                at: i,
                match: eT.isText,
                voids: r,
            })) {
                var u = l.text;
                el.equals(c, s.path) && (u = u.slice(0, s.offset)),
                    el.equals(c, a.path) && (u = u.slice(a.offset)),
                    (o += u);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [i, a] = eg.edges(t);
            if (0 !== i.offset || 0 !== a.offset || eg.isCollapsed(t) || el.hasPrevious(a.path)) return t;
            var s = J.above(e, {
                    at: a,
                    match: (t) => z.isElement(t) && J.isBlock(e, t),
                    voids: r,
                }),
                o = s ? s[1] : [],
                l = {
                    anchor: J.start(e, i),
                    focus: a,
                },
                c = !0;
            for (var [u, d] of J.nodes(e, {
                at: l,
                match: eT.isText,
                reverse: !0,
                voids: r,
            })) {
                if (c) {
                    c = !1;
                    continue;
                }
                if ("" !== u.text || el.isBefore(d, o)) {
                    a = {
                        path: d,
                        offset: u.text.length,
                    };
                    break;
                }
            }
            return {
                anchor: i,
                focus: a,
            };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return J.above(
                e,
                Q(
                    Q({}, t),
                    {},
                    {
                        match: (t) => z.isElement(t) && J.isVoid(e, t),
                    },
                ),
            );
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
    ee = {
        isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(el.isPath),
    },
    et = ["children"],
    en = ["text"],
    er = new WeakMap(),
    ei = {
        ancestor(e, t) {
            var n = ei.get(e, t);
            if (eT.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(ey.stringify(n)),
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
            if (eT.isText(e)) throw Error("Cannot get the child of a text node: ".concat(ey.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(ey.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    i = ei.ancestor(e, t),
                    { children: a } = i,
                    s = r ? a.length - 1 : 0;
                r ? s >= 0 : s < a.length;
            ) {
                var o = ei.child(i, s),
                    l = t.concat(s);
                yield [o, l], (s = r ? s - 1 : s + 1);
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
                        .concat(ey.stringify(n)),
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
                var t = E(e, et);
                return t;
            }
            var t = E(e, en);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = ei.get(e, n); r; )
                if (eT.isText(r) || 0 === r.children.length) break;
                else (r = r.children[0]), n.push(0);
            return [r, n];
        },
        fragment(e, t) {
            if (eT.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(ey.stringify(e)));
            return (0, a.jM)(
                {
                    children: e.children,
                },
                (e) => {
                    var [n, r] = eg.edges(t);
                    for (var [, i] of ei.nodes(e, {
                        reverse: !0,
                        pass: (e) => {
                            var [, n] = e;
                            return !eg.includes(t, n);
                        },
                    })) {
                        if (!eg.includes(t, i)) {
                            var a = ei.parent(e, i),
                                s = i[i.length - 1];
                            a.children.splice(s, 1);
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
                },
            ).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eT.isText(n) || !n.children[i])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(ey.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (eT.isText(n) || !n.children[i]) return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: (e) => eT.isText(e) || z.isElement(e) || J.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = er.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => ei.isNode(e));
            return er.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = ei.get(e, n); r; )
                if (eT.isText(r) || 0 === r.children.length) break;
                else {
                    var i = r.children.length - 1;
                    (r = r.children[i]), n.push(i);
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = ei.get(e, t);
            if (!eT.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(ey.stringify(n)),
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
            (eT.isText(e) && eT.isTextProps(t) && eT.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: i = [], to: a } = t,
                    s = new Set(),
                    o = [],
                    l = e;
                !(a && (r ? el.isBefore(o, a) : el.isAfter(o, a)));
            ) {
                if (
                    (s.has(l) || (yield [l, o]),
                    !s.has(l) && !eT.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, o])))
                ) {
                    s.add(l);
                    var c = r ? l.children.length - 1 : 0;
                    el.isAncestor(o, i) && (c = i[o.length]), (o = o.concat(c)), (l = ei.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!r) {
                    var u = el.next(o);
                    if (ei.has(e, u)) {
                        (o = u), (l = ei.get(e, o));
                        continue;
                    }
                }
                if (r && 0 !== o[o.length - 1]) {
                    (o = el.previous(o)), (l = ei.get(e, o));
                    continue;
                }
                (o = el.parent(o)), (l = ei.get(e, o)), s.add(l);
            }
        },
        parent(e, t) {
            var n = el.parent(t),
                r = ei.get(e, n);
            if (eT.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (eT.isText(e) ? e.text : e.children.map(ei.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of ei.nodes(e, t)) eT.isText(n) && (yield [n, r]);
        },
    };

function ea(e, t) {
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
                        (null === e.properties && eg.isRange(e.newProperties)) ||
                        (null === e.newProperties && eg.isRange(e.properties)) ||
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
                    return es(
                        es({}, e),
                        {},
                        {
                            type: "remove_node",
                        },
                    );
                case "insert_text":
                    return es(
                        es({}, e),
                        {},
                        {
                            type: "remove_text",
                        },
                    );
                case "merge_node":
                    return es(
                        es({}, e),
                        {},
                        {
                            type: "split_node",
                            path: el.previous(e.path),
                        },
                    );
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (el.equals(t, n)) return e;
                    if (el.isSibling(n, t))
                        return es(
                            es({}, e),
                            {},
                            {
                                path: t,
                                newPath: n,
                            },
                        );
                    var r = el.transform(n, e),
                        i = el.transform(el.next(n), e);
                    return es(
                        es({}, e),
                        {},
                        {
                            path: r,
                            newPath: i,
                        },
                    );
                case "remove_node":
                    return es(
                        es({}, e),
                        {},
                        {
                            type: "insert_node",
                        },
                    );
                case "remove_text":
                    return es(
                        es({}, e),
                        {},
                        {
                            type: "insert_text",
                        },
                    );
                case "set_node":
                    var { properties: a, newProperties: s } = e;
                    return es(
                        es({}, e),
                        {},
                        {
                            properties: s,
                            newProperties: a,
                        },
                    );
                case "set_selection":
                    var { properties: o, newProperties: l } = e;
                    if (null == o)
                        return es(
                            es({}, e),
                            {},
                            {
                                properties: l,
                                newProperties: null,
                            },
                        );
                    if (null == l)
                        return es(
                            es({}, e),
                            {},
                            {
                                properties: null,
                                newProperties: o,
                            },
                        );
                    return es(
                        es({}, e),
                        {},
                        {
                            properties: l,
                            newProperties: o,
                        },
                    );
                case "split_node":
                    return es(
                        es({}, e),
                        {},
                        {
                            type: "merge_node",
                            path: el.next(e.path),
                        },
                    );
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
                a = e[n],
                s = t[n];
            return el.equals(r, i) && a > s;
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
                a = e[n],
                s = t[n];
            return el.equals(r, i) && a < s;
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
                    var { path: a } = t;
                    (el.equals(a, r) || el.endsBefore(a, r) || el.isAncestor(a, r)) && (r[a.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: s } = t;
                    if (el.equals(s, r) || el.isAncestor(s, r)) return null;
                    el.endsBefore(s, r) && (r[s.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: l } = t;
                    el.equals(o, r) || el.endsBefore(o, r)
                        ? (r[o.length - 1] -= 1)
                        : el.isAncestor(o, r) && ((r[o.length - 1] -= 1), (r[o.length] += l));
                    break;
                case "split_node":
                    var { path: c, position: u } = t;
                    if (el.equals(c, r)) {
                        if ("forward" === i) r[r.length - 1] += 1;
                        else if ("backward" !== i) return null;
                    } else
                        el.endsBefore(c, r)
                            ? (r[c.length - 1] += 1)
                            : el.isAncestor(c, r) && e[c.length] >= u && ((r[c.length - 1] += 1), (r[c.length] -= u));
                    break;
                case "move_node":
                    var { path: d, newPath: f } = t;
                    if (el.equals(d, f)) break;
                    if (el.isAncestor(d, r) || el.equals(d, r)) {
                        var p = f.slice();
                        return (
                            el.endsBefore(d, f) && d.length < f.length && (p[d.length - 1] -= 1),
                            p.concat(r.slice(d.length))
                        );
                    }
                    el.isSibling(d, f) && (el.isAncestor(f, r) || el.equals(f, r))
                        ? el.endsBefore(d, r)
                            ? (r[d.length - 1] -= 1)
                            : (r[d.length - 1] += 1)
                        : el.endsBefore(f, r) || el.equals(f, r) || el.isAncestor(f, r)
                          ? (el.endsBefore(d, r) && (r[d.length - 1] -= 1), (r[f.length - 1] += 1))
                          : el.endsBefore(d, r) && (el.equals(f, r) && (r[f.length - 1] += 1), (r[d.length - 1] -= 1));
            }
            return r;
        },
    },
    ec = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = el.transform(n, t, {
                    affinity: r,
                });
                (e.current = i), null == i && e.unref();
            }
        },
    };

function eu(e, t) {
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
            ? eu(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eu(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ef = {
        compare(e, t) {
            var n = el.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === ef.compare(e, t),
        isBefore: (e, t) => -1 === ef.compare(e, t),
        equals: (e, t) => e.offset === t.offset && el.equals(e.path, t.path),
        isPoint: (e) => (0, i.Q)(e) && "number" == typeof e.offset && el.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, a.jM)(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: i, offset: a } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = el.transform(i, t, n);
                        break;
                    case "insert_text":
                        el.equals(t.path, i) &&
                            (t.offset < a || (t.offset === a && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        el.equals(t.path, i) && (e.offset += t.position), (e.path = el.transform(i, t, n));
                        break;
                    case "remove_text":
                        el.equals(t.path, i) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (el.equals(t.path, i) || el.isAncestor(t.path, i)) return null;
                        e.path = el.transform(i, t, n);
                        break;
                    case "split_node":
                        if (el.equals(t.path, i))
                            if (t.position === a && null == r) return null;
                            else
                                (t.position < a || (t.position === a && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = el.transform(
                                        i,
                                        t,
                                        ed(
                                            ed({}, n),
                                            {},
                                            {
                                                affinity: "forward",
                                            },
                                        ),
                                    )));
                        else e.path = el.transform(i, t, n);
                }
            });
        },
    },
    ep = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = ef.transform(n, t, {
                    affinity: r,
                });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    e_ = ["anchor", "focus"];

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
                { anchor: r, focus: i } = e;
            return eg.isBackward(e) === n ? [r, i] : [i, r];
        },
        end(e) {
            var [, t] = eg.edges(e);
            return t;
        },
        equals: (e, t) => ef.equals(e.anchor, t.anchor) && ef.equals(e.focus, t.focus),
        includes(e, t) {
            if (eg.isRange(t)) {
                if (eg.includes(e, t.anchor) || eg.includes(e, t.focus)) return !0;
                var [n, r] = eg.edges(e),
                    [i, a] = eg.edges(t);
                return ef.isBefore(n, i) && ef.isAfter(r, a);
            }
            var [s, o] = eg.edges(e),
                l = !1,
                c = !1;
            return (
                ef.isPoint(t)
                    ? ((l = ef.compare(t, s) >= 0), (c = 0 >= ef.compare(t, o)))
                    : ((l = el.compare(t, s.path) >= 0), (c = 0 >= el.compare(t, o.path))),
                l && c
            );
        },
        intersection(e, t) {
            var n = E(e, e_),
                [r, i] = eg.edges(e),
                [a, s] = eg.edges(t),
                o = ef.isBefore(r, a) ? a : r,
                l = ef.isBefore(i, s) ? i : s;
            return ef.isBefore(l, o)
                ? null
                : em(
                      {
                          anchor: o,
                          focus: l,
                      },
                      n,
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
        isRange: (e) => (0, i.Q)(e) && ef.isPoint(e.anchor) && ef.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = eg.edges(e);
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
                    var s = eg.isCollapsed(e);
                    eg.isForward(e)
                        ? ((r = "forward"), (i = s ? r : "backward"))
                        : ((r = "backward"), (i = s ? r : "forward"));
                } else
                    "outward" === a
                        ? eg.isForward(e)
                            ? ((r = "backward"), (i = "forward"))
                            : ((r = "forward"), (i = "backward"))
                        : ((r = a), (i = a));
                var o = ef.transform(e.anchor, t, {
                        affinity: r,
                    }),
                    l = ef.transform(e.focus, t, {
                        affinity: i,
                    });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        },
    },
    eE = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = eg.transform(n, t, {
                    affinity: r,
                });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    eb = void 0,
    ey = {
        setScrubber(e) {
            eb = e;
        },
        stringify: (e) => JSON.stringify(e, eb),
    },
    eO = (e, t) => {
        for (var n in e) {
            var r = e[n],
                a = t[n];
            if ((0, i.Q)(r) && (0, i.Q)(a)) {
                if (!eO(r, a)) return !1;
            } else if (Array.isArray(r) && Array.isArray(a)) {
                if (r.length !== a.length) return !1;
                for (var s = 0; s < r.length; s++) if (r[s] !== a[s]) return !1;
            } else if (r !== a) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    eA = ["text"],
    ev = ["anchor", "focus"];

function eS(e, t) {
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
var eT = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;

        function i(e) {
            return E(e, eA);
        }
        return eO(r ? i(e) : e, r ? i(t) : t);
    },
    isText: (e) => (0, i.Q)(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => eT.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [eI({}, e)];
        for (var r of t) {
            var i = E(r, ev),
                [a, s] = eg.edges(r),
                o = [],
                l = 0,
                c = a.offset,
                u = s.offset;
            for (var d of n) {
                var { length: f } = d.text,
                    p = l;
                if (((l += f), c <= p && l <= u)) {
                    Object.assign(d, i), o.push(d);
                    continue;
                }
                if ((c !== u && (c === l || u === p)) || c > l || u < p || (u === p && 0 !== p)) {
                    o.push(d);
                    continue;
                }
                var _ = d,
                    h = void 0,
                    m = void 0;
                if (u < l) {
                    var g = u - p;
                    (m = eI(
                        eI({}, _),
                        {},
                        {
                            text: _.text.slice(g),
                        },
                    )),
                        (_ = eI(
                            eI({}, _),
                            {},
                            {
                                text: _.text.slice(0, g),
                            },
                        ));
                }
                if (c > p) {
                    var b = c - p;
                    (h = eI(
                        eI({}, _),
                        {},
                        {
                            text: _.text.slice(0, b),
                        },
                    )),
                        (_ = eI(
                            eI({}, _),
                            {},
                            {
                                text: _.text.slice(b),
                            },
                        ));
                }
                Object.assign(_, i), h && o.push(h), o.push(_), m && o.push(m);
            }
            n = o;
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

function eN(e) {
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
var eR = (e, t, n) => {
        switch (n.type) {
            case "insert_node":
                var { path: r, node: i } = n,
                    a = ei.parent(e, r),
                    s = r[r.length - 1];
                if (s > a.children.length)
                    throw Error(
                        'Cannot apply an "insert_node" operation at path ['.concat(
                            r,
                            "] because the destination is past the end of the node.",
                        ),
                    );
                if ((a.children.splice(s, 0, i), t)) for (var [o, l] of eg.points(t)) t[l] = ef.transform(o, n);
                break;
            case "insert_text":
                var { path: c, offset: u, text: d } = n;
                if (0 === d.length) break;
                var f = ei.leaf(e, c),
                    p = f.text.slice(0, u),
                    _ = f.text.slice(u);
                if (((f.text = p + d + _), t)) for (var [h, m] of eg.points(t)) t[m] = ef.transform(h, n);
                break;
            case "merge_node":
                var { path: g } = n,
                    E = ei.get(e, g),
                    b = el.previous(g),
                    y = ei.get(e, b),
                    O = ei.parent(e, g),
                    A = g[g.length - 1];
                if (eT.isText(E) && eT.isText(y)) y.text += E.text;
                else if (eT.isText(E) || eT.isText(y))
                    throw Error(
                        'Cannot apply a "merge_node" operation at path ['
                            .concat(g, "] to nodes of different interfaces: ")
                            .concat(ey.stringify(E), " ")
                            .concat(ey.stringify(y)),
                    );
                else y.children.push(...E.children);
                if ((O.children.splice(A, 1), t)) for (var [v, S] of eg.points(t)) t[S] = ef.transform(v, n);
                break;
            case "move_node":
                var { path: I, newPath: T } = n;
                if (el.isAncestor(I, T))
                    throw Error(
                        "Cannot move a path ["
                            .concat(I, "] to new path [")
                            .concat(T, "] because the destination is inside itself."),
                    );
                var C = ei.get(e, I),
                    N = ei.parent(e, I),
                    R = I[I.length - 1];
                N.children.splice(R, 1);
                var w = el.transform(I, n),
                    P = ei.get(e, el.parent(w)),
                    D = w[w.length - 1];
                if ((P.children.splice(D, 0, C), t)) for (var [x, L] of eg.points(t)) t[L] = ef.transform(x, n);
                break;
            case "remove_node":
                var { path: j } = n,
                    M = j[j.length - 1];
                if ((ei.parent(e, j).children.splice(M, 1), t))
                    for (var [k, U] of eg.points(t)) {
                        var G = ef.transform(k, n);
                        if (null != t && null != G) t[U] = G;
                        else {
                            var V = void 0,
                                F = void 0;
                            for (var [B, H] of ei.texts(e))
                                if (-1 === el.compare(H, j)) V = [B, H];
                                else {
                                    F = [B, H];
                                    break;
                                }
                            var Y = !1;
                            V &&
                                F &&
                                (Y = el.equals(F[1], j)
                                    ? !el.hasPrevious(F[1])
                                    : el.common(V[1], j).length < el.common(F[1], j).length),
                                V && !Y
                                    ? ((k.path = V[1]), (k.offset = V[0].text.length))
                                    : F
                                      ? ((k.path = F[1]), (k.offset = 0))
                                      : (t = null);
                        }
                    }
                break;
            case "remove_text":
                var { path: W, offset: K, text: z } = n;
                if (0 === z.length) break;
                var q = ei.leaf(e, W),
                    X = q.text.slice(0, K),
                    Z = q.text.slice(K + z.length);
                if (((q.text = X + Z), t)) for (var [Q, $] of eg.points(t)) t[$] = ef.transform(Q, n);
                break;
            case "set_node":
                var { path: J, properties: ee, newProperties: et } = n;
                if (0 === J.length) throw Error("Cannot set properties on the root node!");
                var en = ei.get(e, J);
                for (var er in et) {
                    if ("children" === er || "text" === er)
                        throw Error('Cannot set the "'.concat(er, '" property of nodes!'));
                    var ea = et[er];
                    null == ea ? delete en[er] : (en[er] = ea);
                }
                for (var es in ee) et.hasOwnProperty(es) || delete en[es];
                break;
            case "set_selection":
                var { newProperties: eo } = n;
                if (null == eo) t = eo;
                else {
                    if (null == t) {
                        if (!eg.isRange(eo))
                            throw Error(
                                'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    ey.stringify(eo),
                                    " when there is no current selection.",
                                ),
                            );
                        t = eN({}, eo);
                    }
                    for (var ec in eo) {
                        var eu = eo[ec];
                        if (null == eu) {
                            if ("anchor" === ec || "focus" === ec)
                                throw Error('Cannot remove the "'.concat(ec, '" selection property'));
                            delete t[ec];
                        } else t[ec] = eu;
                    }
                }
                break;
            case "split_node":
                var ed,
                    { path: ep, position: e_, properties: eh } = n;
                if (0 === ep.length)
                    throw Error(
                        'Cannot apply a "split_node" operation at path ['.concat(
                            ep,
                            "] because the root node cannot be split.",
                        ),
                    );
                var em = ei.get(e, ep),
                    eE = ei.parent(e, ep),
                    eb = ep[ep.length - 1];
                if (eT.isText(em)) {
                    var eO = em.text.slice(0, e_),
                        eA = em.text.slice(e_);
                    (em.text = eO),
                        (ed = eN(
                            eN({}, eh),
                            {},
                            {
                                text: eA,
                            },
                        ));
                } else {
                    var ev = em.children.slice(0, e_),
                        eS = em.children.slice(e_);
                    (em.children = ev),
                        (ed = eN(
                            eN({}, eh),
                            {},
                            {
                                children: eS,
                            },
                        ));
                }
                if ((eE.children.splice(eb + 1, 0, ed), t))
                    for (var [eI, eC] of eg.points(t)) t[eC] = ef.transform(eI, n);
        }
        return t;
    },
    ew = {
        transform(e, t) {
            e.children = (0, a.mq)(e.children);
            var n = e.selection && (0, a.mq)(e.selection);
            try {
                n = eR(e, n, t);
            } finally {
                (e.children = (0, a.vD)(e.children)),
                    n ? (e.selection = (0, a.Qx)(n) ? (0, a.vD)(n) : n) : (e.selection = null);
            }
        },
    },
    eP = ["text"],
    eD = ["children"];

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
var ej = {
        insertNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var { hanging: r = !1, voids: i = !1, mode: a = "lowest" } = n,
                    { at: s, match: o, select: l } = n;
                if ((ei.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [c] = t;
                    if (
                        (s || ((s = e.selection ? e.selection : e.children.length > 0 ? J.end(e, []) : [0]), (l = !0)),
                        null == l && (l = !1),
                        eg.isRange(s))
                    )
                        if (
                            (r ||
                                (s = J.unhangRange(e, s, {
                                    voids: i,
                                })),
                            eg.isCollapsed(s))
                        )
                            s = s.anchor;
                        else {
                            var [, u] = eg.edges(s),
                                d = J.pointRef(e, u);
                            eW.delete(e, {
                                at: s,
                            }),
                                (s = d.unref());
                        }
                    if (ef.isPoint(s)) {
                        null == o &&
                            (o = eT.isText(c)
                                ? (e) => eT.isText(e)
                                : e.isInline(c)
                                  ? (t) => eT.isText(t) || J.isInline(e, t)
                                  : (t) => z.isElement(t) && J.isBlock(e, t));
                        var [f] = J.nodes(e, {
                            at: s.path,
                            match: o,
                            mode: a,
                            voids: i,
                        });
                        if (!f) return;
                        var [, p] = f,
                            _ = J.pathRef(e, p),
                            h = J.isEnd(e, s, p);
                        eW.splitNodes(e, {
                            at: s,
                            match: o,
                            mode: a,
                            voids: i,
                        });
                        var m = _.unref();
                        s = h ? el.next(m) : m;
                    }
                    var g = el.parent(s),
                        E = s[s.length - 1];
                    if (
                        !(
                            !i &&
                            J.void(e, {
                                at: g,
                            })
                        )
                    ) {
                        for (var b of t) {
                            var y = g.concat(E);
                            E++,
                                e.apply({
                                    type: "insert_node",
                                    path: y,
                                    node: b,
                                }),
                                (s = el.next(s));
                        }
                        if (((s = el.previous(s)), l)) {
                            var O = J.end(e, s);
                            O && eW.select(e, O);
                        }
                    }
                }
            });
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
                    { match: a } = t;
                if ((null == a && (a = el.isPath(n) ? eU(e, n) : (t) => z.isElement(t) && J.isBlock(e, t)), n)) {
                    var s = J.nodes(e, {
                            at: n,
                            match: a,
                            mode: r,
                            voids: i,
                        }),
                        o = Array.from(s, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        });
                    for (var l of o) {
                        var c = l.unref();
                        if (c.length < 2)
                            throw Error(
                                "Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."),
                            );
                        var [u, d] = J.node(e, el.parent(c)),
                            f = c[c.length - 1],
                            { length: p } = u.children;
                        if (1 === p) {
                            var _ = el.next(d);
                            eW.moveNodes(e, {
                                at: c,
                                to: _,
                                voids: i,
                            }),
                                eW.removeNodes(e, {
                                    at: d,
                                    voids: i,
                                });
                        } else if (0 === f)
                            eW.moveNodes(e, {
                                at: c,
                                to: d,
                                voids: i,
                            });
                        else if (f === p - 1) {
                            var h = el.next(d);
                            eW.moveNodes(e, {
                                at: c,
                                to: h,
                                voids: i,
                            });
                        } else {
                            var m = el.next(c),
                                g = el.next(d);
                            eW.splitNodes(e, {
                                at: m,
                                voids: i,
                            }),
                                eW.moveNodes(e, {
                                    at: c,
                                    to: g,
                                    voids: i,
                                });
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
                    { match: i, at: a = e.selection } = t,
                    { hanging: s = !1, voids: o = !1, mode: l = "lowest" } = t;
                if (a) {
                    if (null == i)
                        if (el.isPath(a)) {
                            var [c] = J.parent(e, a);
                            i = (e) => c.children.includes(e);
                        } else i = (t) => z.isElement(t) && J.isBlock(e, t);
                    if (
                        (!s &&
                            eg.isRange(a) &&
                            (a = J.unhangRange(e, a, {
                                voids: o,
                            })),
                        eg.isRange(a))
                    )
                        if (eg.isCollapsed(a)) a = a.anchor;
                        else {
                            var [, u] = eg.edges(a),
                                d = J.pointRef(e, u);
                            eW.delete(e, {
                                at: a,
                            }),
                                (a = d.unref()),
                                null == t.at && eW.select(e, a);
                        }
                    var [f] = J.nodes(e, {
                            at: a,
                            match: i,
                            voids: o,
                            mode: l,
                        }),
                        p = J.previous(e, {
                            at: a,
                            match: i,
                            voids: o,
                            mode: l,
                        });
                    if (f && p) {
                        var [_, h] = f,
                            [m, g] = p;
                        if (0 !== h.length && 0 !== g.length) {
                            var b = el.next(g),
                                y = el.common(h, g),
                                O = el.isSibling(h, g),
                                A = Array.from(
                                    J.levels(e, {
                                        at: h,
                                    }),
                                    (e) => {
                                        var [t] = e;
                                        return t;
                                    },
                                )
                                    .slice(y.length)
                                    .slice(0, -1),
                                v = J.above(e, {
                                    at: h,
                                    mode: "highest",
                                    match: (t) => A.includes(t) && eM(e, t),
                                }),
                                S = v && J.pathRef(e, v[1]);
                            if (eT.isText(_) && eT.isText(m)) {
                                var I = E(_, eP);
                                (r = m.text.length), (n = I);
                            } else if (z.isElement(_) && z.isElement(m)) {
                                var I = E(_, eD);
                                (r = m.children.length), (n = I);
                            } else
                                throw Error(
                                    "Cannot merge the node at path ["
                                        .concat(h, "] with the previous sibling because it is not the same kind: ")
                                        .concat(ey.stringify(_), " ")
                                        .concat(ey.stringify(m)),
                                );
                            O ||
                                eW.moveNodes(e, {
                                    at: h,
                                    to: b,
                                    voids: o,
                                }),
                                S &&
                                    eW.removeNodes(e, {
                                        at: S.current,
                                        voids: o,
                                    }),
                                (z.isElement(m) && J.isEmpty(e, m)) ||
                                (eT.isText(m) && "" === m.text && 0 !== g[g.length - 1])
                                    ? eW.removeNodes(e, {
                                          at: g,
                                          voids: o,
                                      })
                                    : e.apply({
                                          type: "merge_node",
                                          path: b,
                                          position: r,
                                          properties: n,
                                      }),
                                S && S.unref();
                        }
                    }
                }
            });
        },
        moveNodes(e, t) {
            J.withoutNormalizing(e, () => {
                var { to: n, at: r = e.selection, mode: i = "lowest", voids: a = !1 } = t,
                    { match: s } = t;
                if (r) {
                    null == s && (s = el.isPath(r) ? eU(e, r) : (t) => z.isElement(t) && J.isBlock(e, t));
                    var o = J.pathRef(e, n),
                        l = J.nodes(e, {
                            at: r,
                            match: s,
                            mode: i,
                            voids: a,
                        }),
                        c = Array.from(l, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        });
                    for (var u of c) {
                        var d = u.unref(),
                            f = o.current;
                        0 !== d.length &&
                            e.apply({
                                type: "move_node",
                                path: d,
                                newPath: f,
                            }),
                            o.current && el.isSibling(f, d) && el.isAfter(f, d) && (o.current = el.next(o.current));
                    }
                    o.unref();
                }
            });
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
                    { at: a = e.selection, match: s } = t;
                if (a) {
                    null == s && (s = el.isPath(a) ? eU(e, a) : (t) => z.isElement(t) && J.isBlock(e, t)),
                        !n &&
                            eg.isRange(a) &&
                            (a = J.unhangRange(e, a, {
                                voids: r,
                            }));
                    var o = J.nodes(e, {
                            at: a,
                            match: s,
                            mode: i,
                            voids: r,
                        }),
                        l = Array.from(o, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        });
                    for (var c of l) {
                        var u = c.unref();
                        if (u) {
                            var [d] = J.node(e, u);
                            e.apply({
                                type: "remove_node",
                                path: u,
                                node: d,
                            });
                        }
                    }
                }
            });
        },
        setNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var { match: r, at: i = e.selection, compare: a, merge: s } = n,
                    { hanging: o = !1, mode: l = "lowest", split: c = !1, voids: u = !1 } = n;
                if (i) {
                    if (
                        (null == r && (r = el.isPath(i) ? eU(e, i) : (t) => z.isElement(t) && J.isBlock(e, t)),
                        !o &&
                            eg.isRange(i) &&
                            (i = J.unhangRange(e, i, {
                                voids: u,
                            })),
                        c && eg.isRange(i))
                    ) {
                        if (eg.isCollapsed(i) && J.leaf(e, i.anchor)[0].text.length > 0) return;
                        var d = J.rangeRef(e, i, {
                                affinity: "inward",
                            }),
                            [f, p] = eg.edges(i),
                            _ = "lowest" === l ? "lowest" : "highest",
                            h = J.isEnd(e, p, p.path);
                        eW.splitNodes(e, {
                            at: p,
                            match: r,
                            mode: _,
                            voids: u,
                            always: !h,
                        });
                        var m = J.isStart(e, f, f.path);
                        eW.splitNodes(e, {
                            at: f,
                            match: r,
                            mode: _,
                            voids: u,
                            always: !m,
                        }),
                            (i = d.unref()),
                            null == n.at && eW.select(e, i);
                    }
                    for (var [g, E] of (a || (a = (e, t) => e !== t),
                    J.nodes(e, {
                        at: i,
                        match: r,
                        mode: l,
                        voids: u,
                    }))) {
                        var b = {},
                            y = {};
                        if (0 !== E.length) {
                            var O = !1;
                            for (var A in t)
                                "children" !== A &&
                                    "text" !== A &&
                                    a(t[A], g[A]) &&
                                    ((O = !0),
                                    g.hasOwnProperty(A) && (b[A] = g[A]),
                                    s ? null != t[A] && (y[A] = s(g[A], t[A])) : null != t[A] && (y[A] = t[A]));
                            O &&
                                e.apply({
                                    type: "set_node",
                                    path: E,
                                    properties: b,
                                    newProperties: y,
                                });
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
                    { mode: i = "lowest", voids: a = !1 } = t,
                    { match: s, at: o = e.selection, height: l = 0, always: c = !1 } = t;
                if (
                    (null == s && (s = (t) => z.isElement(t) && J.isBlock(e, t)),
                    eg.isRange(o) && (o = ek(e, o)),
                    el.isPath(o))
                ) {
                    var u = o,
                        d = J.point(e, u),
                        [f] = J.parent(e, u);
                    (s = (e) => e === f), (l = d.path.length - u.length + 1), (o = d), (c = !0);
                }
                if (o) {
                    var p = J.pointRef(e, o, {
                        affinity: "backward",
                    });
                    try {
                        var [_] = J.nodes(e, {
                            at: o,
                            match: s,
                            mode: i,
                            voids: a,
                        });
                        if (!_) return;
                        var h = J.void(e, {
                                at: o,
                                mode: "highest",
                            }),
                            m = 0;
                        if (!a && h) {
                            var [g, E] = h;
                            if (z.isElement(g) && e.isInline(g)) {
                                var b = J.after(e, E);
                                if (!b) {
                                    var y = {
                                            text: "",
                                        },
                                        O = el.next(E);
                                    eW.insertNodes(e, y, {
                                        at: O,
                                        voids: a,
                                    }),
                                        (b = J.point(e, O));
                                }
                                (o = b), (c = !0);
                            }
                            (l = o.path.length - E.length + 1), (c = !0);
                        }
                        n = J.pointRef(e, o);
                        var A = o.path.length - l,
                            [, v] = _,
                            S = o.path.slice(0, A),
                            I = 0 === l ? o.offset : o.path[A] + m;
                        for (var [T, C] of J.levels(e, {
                            at: S,
                            reverse: !0,
                            voids: a,
                        })) {
                            var N = !1;
                            if (C.length < v.length || 0 === C.length || (!a && z.isElement(T) && J.isVoid(e, T)))
                                break;
                            var R = p.current,
                                w = J.isEnd(e, R, C);
                            if (c || !p || !J.isEdge(e, R, C)) {
                                N = !0;
                                var P = ei.extractProps(T);
                                e.apply({
                                    type: "split_node",
                                    path: C,
                                    position: I,
                                    properties: P,
                                });
                            }
                            I = C[C.length - 1] + (N || w ? 1 : 0);
                        }
                        if (null == t.at) {
                            var D = n.current || J.end(e, []);
                            eW.select(e, D);
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
            for (var i of t) r[i] = null;
            eW.setNodes(e, r, n);
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                    { at: a = e.selection, match: s } = t;
                if (a) {
                    null == s && (s = el.isPath(a) ? eU(e, a) : (t) => z.isElement(t) && J.isBlock(e, t)),
                        el.isPath(a) && (a = J.range(e, a));
                    var o = eg.isRange(a) ? J.rangeRef(e, a) : null,
                        l = J.nodes(e, {
                            at: a,
                            match: s,
                            mode: n,
                            voids: i,
                        }),
                        c = Array.from(l, (t) => {
                            var [, n] = t;
                            return J.pathRef(e, n);
                        }).reverse(),
                        u = function (t) {
                            var n = t.unref(),
                                [a] = J.node(e, n),
                                s = J.range(e, n);
                            r && o && (s = eg.intersection(o.current, s)),
                                eW.liftNodes(e, {
                                    at: s,
                                    match: (e) => z.isAncestor(a) && a.children.includes(e),
                                    voids: i,
                                });
                        };
                    for (var d of c) u(d);
                    o && o.unref();
                }
            });
        },
        wrapNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            J.withoutNormalizing(e, () => {
                var { mode: r = "lowest", split: i = !1, voids: a = !1 } = n,
                    { match: s, at: o = e.selection } = n;
                if (o) {
                    if (
                        (null == s &&
                            (s = el.isPath(o)
                                ? eU(e, o)
                                : e.isInline(t)
                                  ? (t) => (z.isElement(t) && J.isInline(e, t)) || eT.isText(t)
                                  : (t) => z.isElement(t) && J.isBlock(e, t)),
                        i && eg.isRange(o))
                    ) {
                        var [l, c] = eg.edges(o),
                            u = J.rangeRef(e, o, {
                                affinity: "inward",
                            });
                        eW.splitNodes(e, {
                            at: c,
                            match: s,
                            voids: a,
                        }),
                            eW.splitNodes(e, {
                                at: l,
                                match: s,
                                voids: a,
                            }),
                            (o = u.unref()),
                            null == n.at && eW.select(e, o);
                    }
                    var d = Array.from(
                        J.nodes(e, {
                            at: o,
                            match: e.isInline(t) ? (t) => z.isElement(t) && J.isBlock(e, t) : (e) => J.isEditor(e),
                            mode: "lowest",
                            voids: a,
                        }),
                    );
                    for (var [, f] of d) {
                        var p = eg.isRange(o) ? eg.intersection(o, J.range(e, f)) : o;
                        if (p) {
                            var _ = Array.from(
                                J.nodes(e, {
                                    at: p,
                                    match: s,
                                    mode: r,
                                    voids: a,
                                }),
                            );
                            if (
                                _.length > 0 &&
                                "continue" ===
                                    (function () {
                                        var [n] = _,
                                            r = _[_.length - 1],
                                            [, i] = n,
                                            [, s] = r;
                                        if (0 === i.length && 0 === s.length) return "continue";
                                        var o = el.equals(i, s) ? el.parent(i) : el.common(i, s),
                                            l = J.range(e, i, s),
                                            [c] = J.node(e, o),
                                            u = o.length + 1,
                                            d = el.next(s.slice(0, u)),
                                            f = eL(
                                                eL({}, t),
                                                {},
                                                {
                                                    children: [],
                                                },
                                            );
                                        eW.insertNodes(e, f, {
                                            at: d,
                                            voids: a,
                                        }),
                                            eW.moveNodes(e, {
                                                at: l,
                                                match: (e) => z.isAncestor(c) && c.children.includes(e),
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
    eM = (e, t) => {
        if (z.isElement(t)) {
            var n = t;
            return !!J.isVoid(e, t) || (1 === n.children.length && eM(e, n.children[0]));
        }
        return !J.isEditor(t) && !0;
    },
    ek = (e, t) => {
        if (eg.isCollapsed(t)) return t.anchor;
        var [, n] = eg.edges(t),
            r = J.pointRef(e, n);
        return (
            eW.delete(e, {
                at: t,
            }),
            r.unref()
        );
    },
    eU = (e, t) => {
        var [n] = J.node(e, t);
        return (e) => e === n;
    };

function eG(e, t) {
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
            ? eG(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eG(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eF = {
        collapse(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { edge: n = "anchor" } = t,
                { selection: r } = e;
            if (r) {
                if ("anchor" === n) eW.select(e, r.anchor);
                else if ("focus" === n) eW.select(e, r.focus);
                else if ("start" === n) {
                    var [i] = eg.edges(r);
                    eW.select(e, i);
                } else if ("end" === n) {
                    var [, a] = eg.edges(r);
                    eW.select(e, a);
                }
            }
        },
        deselect(e) {
            var { selection: t } = e;
            t &&
                e.apply({
                    type: "set_selection",
                    properties: t,
                    newProperties: null,
                });
        },
        move(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { selection: n } = e,
                { distance: r = 1, unit: i = "character", reverse: a = !1 } = t,
                { edge: s = null } = t;
            if (n) {
                "start" === s && (s = eg.isBackward(n) ? "focus" : "anchor"),
                    "end" === s && (s = eg.isBackward(n) ? "anchor" : "focus");
                var { anchor: o, focus: l } = n,
                    c = {
                        distance: r,
                        unit: i,
                    },
                    u = {};
                if (null == s || "anchor" === s) {
                    var d = a ? J.before(e, o, c) : J.after(e, o, c);
                    d && (u.anchor = d);
                }
                if (null == s || "focus" === s) {
                    var f = a ? J.before(e, l, c) : J.after(e, l, c);
                    f && (u.focus = f);
                }
                eW.setSelection(e, u);
            }
        },
        select(e, t) {
            var { selection: n } = e;
            if (((t = J.range(e, t)), n)) return void eW.setSelection(e, t);
            if (!eg.isRange(t))
                throw Error(
                    "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                        ey.stringify(t),
                    ),
                );
            e.apply({
                type: "set_selection",
                properties: n,
                newProperties: t,
            });
        },
        setPoint(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { selection: r } = e,
                { edge: i = "both" } = n;
            if (r) {
                "start" === i && (i = eg.isBackward(r) ? "focus" : "anchor"),
                    "end" === i && (i = eg.isBackward(r) ? "anchor" : "focus");
                var { anchor: a, focus: s } = r,
                    o = "anchor" === i ? a : s;
                eW.setSelection(e, {
                    ["anchor" === i ? "anchor" : "focus"]: eV(eV({}, o), t),
                });
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
                Object.keys(r).length > 0 &&
                    e.apply({
                        type: "set_selection",
                        properties: r,
                        newProperties: i,
                    });
            }
        },
    },
    eB = {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            J.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: i = "character", distance: a = 1, voids: s = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var c = !1;
                    if ((eg.isRange(o) && eg.isCollapsed(o) && ((c = !0), (o = o.anchor)), ef.isPoint(o))) {
                        var u = J.void(e, {
                            at: o,
                            mode: "highest",
                        });
                        if (!s && u) {
                            var [, d] = u;
                            o = d;
                        } else {
                            var f = {
                                    unit: i,
                                    distance: a,
                                },
                                p = r ? J.before(e, o, f) || J.start(e, []) : J.after(e, o, f) || J.end(e, []);
                            (o = {
                                anchor: o,
                                focus: p,
                            }),
                                (l = !0);
                        }
                    }
                    if (el.isPath(o))
                        return void eW.removeNodes(e, {
                            at: o,
                            voids: s,
                        });
                    if (!eg.isCollapsed(o)) {
                        if (!l) {
                            var [, _] = eg.edges(o),
                                h = J.end(e, []);
                            ef.equals(_, h) ||
                                (o = J.unhangRange(e, o, {
                                    voids: s,
                                }));
                        }
                        var [m, g] = eg.edges(o),
                            E = J.above(e, {
                                match: (t) => z.isElement(t) && J.isBlock(e, t),
                                at: m,
                                voids: s,
                            }),
                            b = J.above(e, {
                                match: (t) => z.isElement(t) && J.isBlock(e, t),
                                at: g,
                                voids: s,
                            }),
                            y = E && b && !el.equals(E[1], b[1]),
                            O = el.equals(m.path, g.path),
                            A = s
                                ? null
                                : J.void(e, {
                                      at: m,
                                      mode: "highest",
                                  }),
                            v = s
                                ? null
                                : J.void(e, {
                                      at: g,
                                      mode: "highest",
                                  });
                        if (A) {
                            var S = J.before(e, m);
                            S && E && el.isAncestor(E[1], S.path) && (m = S);
                        }
                        if (v) {
                            var I = J.after(e, g);
                            I && b && el.isAncestor(b[1], I.path) && (g = I);
                        }
                        var T = [];
                        for (var C of J.nodes(e, {
                            at: o,
                            voids: s,
                        })) {
                            var [N, R] = C;
                            (!n || 0 !== el.compare(R, n)) &&
                                ((!s && z.isElement(N) && J.isVoid(e, N)) ||
                                    (!el.isCommon(R, m.path) && !el.isCommon(R, g.path))) &&
                                (T.push(C), (n = R));
                        }
                        var w = Array.from(T, (t) => {
                                var [, n] = t;
                                return J.pathRef(e, n);
                            }),
                            P = J.pointRef(e, m),
                            D = J.pointRef(e, g),
                            x = "";
                        if (!O && !A) {
                            var L = P.current,
                                [j] = J.leaf(e, L),
                                { path: M } = L,
                                { offset: k } = m,
                                U = j.text.slice(k);
                            U.length > 0 &&
                                (e.apply({
                                    type: "remove_text",
                                    path: M,
                                    offset: k,
                                    text: U,
                                }),
                                (x = U));
                        }
                        if (
                            (w
                                .reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) =>
                                    eW.removeNodes(e, {
                                        at: t,
                                        voids: s,
                                    }),
                                ),
                            !v)
                        ) {
                            var G = D.current,
                                [V] = J.leaf(e, G),
                                { path: F } = G,
                                B = O ? m.offset : 0,
                                H = V.text.slice(B, g.offset);
                            H.length > 0 &&
                                (e.apply({
                                    type: "remove_text",
                                    path: F,
                                    offset: B,
                                    text: H,
                                }),
                                (x = H));
                        }
                        !O &&
                            y &&
                            D.current &&
                            P.current &&
                            eW.mergeNodes(e, {
                                at: D.current,
                                hanging: !0,
                                voids: s,
                            }),
                            c &&
                                r &&
                                "character" === i &&
                                x.length > 1 &&
                                x.match(/[\u0E00-\u0E7F]+/) &&
                                eW.insertText(e, x.slice(0, x.length - a));
                        var Y = P.unref(),
                            W = D.unref(),
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
                    { hanging: i = !1, voids: a = !1 } = n,
                    { at: s = e.selection } = n;
                if (t.length) {
                    if (s) {
                        if (eg.isRange(s))
                            if (
                                (i ||
                                    (s = J.unhangRange(e, s, {
                                        voids: a,
                                    })),
                                eg.isCollapsed(s))
                            )
                                s = s.anchor;
                            else {
                                var [, o] = eg.edges(s);
                                if (
                                    !a &&
                                    J.void(e, {
                                        at: o,
                                    })
                                )
                                    return;
                                var l = J.pointRef(e, o);
                                eW.delete(e, {
                                    at: s,
                                }),
                                    (s = l.unref());
                            }
                        else el.isPath(s) && (s = J.start(e, s));
                        if (
                            !(
                                !a &&
                                J.void(e, {
                                    at: s,
                                })
                            )
                        ) {
                            var c = J.above(e, {
                                at: s,
                                match: (t) => z.isElement(t) && J.isInline(e, t),
                                mode: "highest",
                                voids: a,
                            });
                            if (c) {
                                var [, u] = c;
                                J.isEnd(e, s, u) ? (s = J.after(e, u)) : J.isStart(e, s, u) && (s = J.before(e, u));
                            }
                            var d = J.above(e, {
                                    match: (t) => z.isElement(t) && J.isBlock(e, t),
                                    at: s,
                                    voids: a,
                                }),
                                [, f] = d,
                                p = J.isStart(e, s, f),
                                _ = J.isEnd(e, s, f),
                                h = p && _,
                                m = !p || (p && _),
                                g = !_,
                                [, E] = ei.first(
                                    {
                                        children: t,
                                    },
                                    [],
                                ),
                                [, b] = ei.last(
                                    {
                                        children: t,
                                    },
                                    [],
                                ),
                                y = [],
                                O = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!h ||
                                            !(
                                                (m &&
                                                    el.isAncestor(r, E) &&
                                                    z.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (g &&
                                                    el.isAncestor(r, b) &&
                                                    z.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var A of ei.nodes(
                                {
                                    children: t,
                                },
                                {
                                    pass: O,
                                },
                            ))
                                O(A) && y.push(A);
                            var v = [],
                                S = [],
                                I = [],
                                T = !0,
                                C = !1;
                            for (var [N] of y)
                                z.isElement(N) && !e.isInline(N)
                                    ? ((T = !1), (C = !0), S.push(N))
                                    : T
                                      ? v.push(N)
                                      : I.push(N);
                            var [R] = J.nodes(e, {
                                    at: s,
                                    match: (t) => eT.isText(t) || J.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                [, w] = R,
                                P = J.isStart(e, s, w),
                                D = J.isEnd(e, s, w),
                                x = J.pathRef(e, _ && !I.length ? el.next(f) : f),
                                L = J.pathRef(e, D ? el.next(w) : w);
                            eW.splitNodes(e, {
                                at: s,
                                match: (t) =>
                                    C ? z.isElement(t) && J.isBlock(e, t) : eT.isText(t) || J.isInline(e, t),
                                mode: C ? "lowest" : "highest",
                                always: C && (!p || v.length > 0) && (!_ || I.length > 0),
                                voids: a,
                            });
                            var j = J.pathRef(e, !P || (P && D) ? el.next(w) : w);
                            if (
                                (eW.insertNodes(e, v, {
                                    at: j.current,
                                    match: (t) => eT.isText(t) || J.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                h &&
                                    !v.length &&
                                    S.length &&
                                    !I.length &&
                                    eW.delete(e, {
                                        at: f,
                                        voids: a,
                                    }),
                                eW.insertNodes(e, S, {
                                    at: x.current,
                                    match: (t) => z.isElement(t) && J.isBlock(e, t),
                                    mode: "lowest",
                                    voids: a,
                                }),
                                eW.insertNodes(e, I, {
                                    at: L.current,
                                    match: (t) => eT.isText(t) || J.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                !n.at &&
                                    (I.length > 0 && L.current
                                        ? (r = el.previous(L.current))
                                        : S.length > 0 && x.current
                                          ? (r = el.previous(x.current))
                                          : j.current && (r = el.previous(j.current)),
                                    r))
                            ) {
                                var M = J.end(e, r);
                                eW.select(e, M);
                            }
                            j.unref(), x.unref(), L.unref();
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
                    if ((el.isPath(i) && (i = J.range(e, i)), eg.isRange(i)))
                        if (eg.isCollapsed(i)) i = i.anchor;
                        else {
                            var a = eg.end(i);
                            if (
                                !r &&
                                J.void(e, {
                                    at: a,
                                })
                            )
                                return;
                            var s = eg.start(i),
                                o = J.pointRef(e, s),
                                l = J.pointRef(e, a);
                            eW.delete(e, {
                                at: i,
                                voids: r,
                            });
                            var c = o.unref(),
                                u = l.unref();
                            (i = c || u),
                                eW.setSelection(e, {
                                    anchor: i,
                                    focus: i,
                                });
                        }
                    if (
                        !(
                            !r &&
                            J.void(e, {
                                at: i,
                            })
                        )
                    ) {
                        var { path: d, offset: f } = i;
                        t.length > 0 &&
                            e.apply({
                                type: "insert_text",
                                path: d,
                                offset: f,
                                text: t,
                            });
                    }
                }
            });
        },
    };

function eH(e, t) {
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
            ? eH(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eH(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eW = eY(eY(eY(eY({}, ew), ej), eF), eB);
