"use strict";
n.d(t, {
    AS: () => c,
    Kh: () => p,
    Ot: () => m,
    PW: () => f,
    VW: () => u,
    ZF: () => h,
    cv: () => d,
    e0: () => I,
    l5: () => _,
}),
    n(134528),
    n(947204);
var r = n(284009),
    i = n.n(r),
    a = n(719442),
    s = n(253018),
    o = n(184034),
    l = n(551483);
if ((n(654821), !a.KE._addedDiscordOverrides)) {
    let e = a.KE.positions;
    a.KE.positions = function* (t) {
        let n,
            r,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: s = t.selection, unit: o = "offset", reverse: l = !1, voids: c = !1 } = i ?? {};
        if (null == s) return;
        if (("block" === o && (o = "line"), "offset" === o)) {
            for (let n of e(t, i)) yield n;
            return;
        }
        n = p.isPoint(s)
            ? l
                ? { anchor: s, focus: u.start(t, []) }
                : { anchor: s, focus: u.end(t, []) }
            : u.range(t, s);
        let [m, g] = h.edges(n),
            E = u.blocks(t),
            A = l ? -1 : 1,
            I = m.path[0] ?? 0,
            T = g.path[0] ?? E.length - 1,
            y = l ? T : I,
            S = l ? I : T,
            v = !1;
        function* C(n) {
            let [s, u] = n,
                p = u.length,
                h = f.isAncestor(u, m.path),
                E = f.isAncestor(u, g.path),
                I = h ? m.path[p] : 0,
                T = E ? g.path[p] : s.children.length - 1,
                y = l ? T : I,
                S = l ? I : T;
            for (let n = y; !v && (!l ? n <= S : n >= S); n += A) {
                let p = s.children[n],
                    h = f.child(u, n);
                if (d.isElement(p)) {
                    let e = l ? g.path : m.path;
                    if (!(f.equals(h, e) || f.isAncestor(h, e))) {
                        let e = t.isVoid(p);
                        if ("line" === o && d.isElement(p) && !e) {
                            null != r && (yield r, (r = void 0)), (v = !0);
                            return;
                        }
                        if (!c && e) continue;
                    }
                    for (let e of C([p, h])) yield e;
                } else if (_.isText(p))
                    if ("line" === o) r = { path: h, offset: l ? 0 : p.text.length };
                    else if (0 === p.text.length) yield { path: h, offset: 0 };
                    else {
                        let n = a.KE.range(t, h);
                        for (let r of (f.equals(h, m.path) && (n.anchor = m),
                        f.equals(h, g.path) && (n.focus = g),
                        e(t, { ...i, at: n })))
                            yield r;
                    }
            }
            "line" === o && d.isElement(s) && !t.isVoid(s) && (null != r && (yield r, (r = void 0)), (v = !0));
        }
        "line" === o && (yield l ? g : m);
        for (let e = y; !v && (!l ? e <= S : e >= S); e += A) for (let t of C(E[e])) yield t;
    };
    let t = s.rL.findDocumentOrShadowRoot;
    (s.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (a.KE._addedDiscordOverrides = !0);
}
let u = {
        ...a.KE,
        ...s.rL,
        richValue: (e) => e.children,
        blocks: (e) => u.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => d.isElement(t) && a.KE.isBlock(e, t),
        isInline: (e, t) => d.isElement(t) && a.KE.isInline(e, t),
        isVoid: (e, t) => d.isElement(t) && a.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = u.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && d.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = u.node(e, l.fP);
            return _.isText(t[0]) ? t[0] : null;
        },
        getCurrentBlock(e) {
            return null == e.selection ? null : this.getParentBlock(e, e.selection);
        },
        getCurrentElement(e) {
            return null == e.selection ? null : this.getParentElement(e, e.selection);
        },
        getCurrentInline(e) {
            return null == e.selection ? null : this.getParentInline(e, e.selection);
        },
        getCurrentVoid(e) {
            return null == e.selection ? null : this.getParentVoid(e, e.selection);
        },
        getCurrentText(e) {
            let t = null != e.selection ? h.toPoint(e.selection) : null;
            return null == t ? null : u.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            u.above(e, { at: t, match: (t) => d.isElement(t) && u.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => u.above(e, { at: t, match: (e) => d.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => u.above(e, { at: t, match: (t) => u.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => u.above(e, { at: t, match: (t) => u.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            u.above(e, { at: t, match: (e) => d.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = h.toPoint(e.selection);
            return null == n ? null : u.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            u.nodes(e, { at: l.Dl, match: (e) => d.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (h.isExpanded(e.selection)) {
                let [n, r] = h.edges(e.selection),
                    i = u.after(e, n, { unit: "offset" }),
                    a = u.before(e, r, { unit: "offset" });
                if (null == i || null == a || !p.equals(i, a)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : u.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = s.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let r = t.getRangeAt(0);
                    null != r && (n = s.rL.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, r] = h.edges(t),
                i = u.nodes(e, { at: t, mode: "lowest", match: (e) => _.isText(e) }),
                a = "";
            for (let [e, t] of i) {
                let i = f.equals(t, n.path) ? n.offset : 0,
                    s = f.equals(t, r.path) ? r.offset : 0;
                a += e.text.substring(i, s);
            }
            return a;
        },
        withoutNormalizing(e, t) {
            let n = u.isNormalizing(e);
            u.setNormalizing(e, !1);
            try {
                t();
            } finally {
                u.setNormalizing(e, n);
            }
            !1 !== n && u.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = u.richValue(e),
                n = t[0],
                r = n?.type === "line" ? n.children[0] : null;
            if (null == r || !_.isText(r)) return !1;
            let i = e.chatInputType,
                a = r.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === i.sedReplace && a.startsWith("s/")) || (i.autocomplete?.reactions === !0 && a.startsWith("+")))
            );
        },
        focus(e) {
            s.rL.isFocused(e) || (s.rL.focus(e), s.rL.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection) return { anchor: null, focus: null };
            if (f.isPath(t)) {
                let n = u.range(e, t),
                    [r] = u.node(e, t);
                if (d.isElement(r)) {
                    let r = u.before(e, t),
                        i = u.after(e, t);
                    t = { anchor: r ?? n.anchor, focus: i ?? n.focus };
                } else t = n;
            }
            let [n, r] = h.edges(t),
                i = null,
                a = null;
            return (
                p.equals(e.selection.anchor, n)
                    ? (i = "start")
                    : p.equals(e.selection.anchor, r)
                      ? (i = "end")
                      : h.includes(t, e.selection.anchor) && (i = "inside"),
                p.equals(e.selection.focus, n)
                    ? (a = "start")
                    : p.equals(e.selection.focus, r)
                      ? (a = "end")
                      : h.includes(t, e.selection.focus) && (a = "inside"),
                { anchor: i, focus: a }
            );
        },
    },
    c = {
        ...a.bP,
        isType: (e, t) => a.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => a.Hg.isElement(e) && t.has(e.type),
    },
    d = {
        ...a.Hg,
        updateElement(e, t) {
            let n = u.node(e, t[1]);
            return (
                i()(!u.isEditor(t[0]), "Element is the root node"),
                i()(null != n, "Failed to find element"),
                i()(d.isElement(n[0]), "Node at this path is no longer an element"),
                i()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let r = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                i = e.children.map((e) => (_.isText(e) ? e.text : "?")),
                a = i.join("");
            return { entries: o.q(a, t ?? null, r, n), serializedChildren: i };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return _.isText(t) && 0 === t.text.length;
        },
    },
    _ = { ...a.EY },
    f = {
        ...a.wA,
        isFirstEditorBlock: (e) => f.equals(e, l.Xg),
        isFirstEditorText: (e) => f.equals(e, l.fP),
        isFirstChild: (e, t) => f.equals(t, f.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    p = {
        ...a.bR,
        start(e) {
            let [, t] = e;
            return { path: f.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return { path: f.child(n, t.children.length - 1), offset: _.isText(r) ? r.text.length : 0 };
        },
        isAtStart(e, t) {
            return p.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return p.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, r] = h.edges(t);
            return p.isBefore(e, n) && (e = n), p.isAfter(e, r) && (e = r), e;
        },
    },
    h = {
        ...a.Q6,
        toPoint: (e) => (null == e || h.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                anchor: { path: f.child(n, 0), offset: 0 },
                focus: { path: f.child(n, t.children.length - 1), offset: _.isText(r) ? r.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, r] = h.edges(e),
                [i, a] = h.edges(t);
            return (p.isBefore(n, i) && (n = i), p.isAfter(r, a) && (r = a), h.isForward(e))
                ? { anchor: n, focus: r }
                : { anchor: r, focus: n };
        },
    },
    m = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && h.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!u.hasPath(e, n.path) || !u.hasPath(e, r.path)) return !1;
            let [i] = u.node(e, n.path),
                [a] = u.node(e, r.path);
            return _.isText(i) && _.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length;
        },
    },
    g = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    E = (e, t, n) => {
        let r = u.toDOMRange(e, t).getBoundingClientRect(),
            i = u.toDOMRange(e, n).getBoundingClientRect();
        return g(r, i) && g(i, r);
    },
    A = (e, t, n, r) => {
        let i = { anchor: t, focus: t },
            a = 0,
            s = n.length,
            o = Math.floor((a + s) / 2);
        for (; o !== a; )
            if (
                (E(e, { anchor: n[o], focus: n[o] }, i) ? (r ? (s = o) : (a = o)) : r ? (a = o) : (s = o),
                (o = Math.floor((a + s) / 2)),
                !r && o === n.length - 2 && s === n.length - 1)
            ) {
                let t = n[n.length - 1];
                E(e, { anchor: t, focus: t }, i) && (o = s);
            }
        return n[o];
    },
    I = {
        getLineStart(e, t, n) {
            let r = u.getParentElement(e, t);
            if (null == r) return null;
            let i = { anchor: u.start(e, r[1]), focus: t },
                a = Array.from(u.positions(e, { at: i })),
                s = A(e, t, a, !0);
            if (n && p.equals(t, s) && !p.isAtEnd(t, r)) {
                let n = u.after(e, t);
                if (null == n) return s;
                s = A(e, n, a, !0);
            }
            return s;
        },
        getLineEnd(e, t, n) {
            let r = u.getParentElement(e, t);
            if (null == r) return null;
            let i = { anchor: t, focus: u.end(e, r[1]) },
                a = Array.from(u.positions(e, { at: i })),
                s = A(e, t, a, !1);
            if (n && p.equals(t, s) && !p.isAtEnd(t, r)) {
                let n = u.after(e, t);
                if (null == n) return s;
                s = A(e, n, a, !1);
            }
            return s;
        },
    };
