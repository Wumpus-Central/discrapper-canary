"use strict";
n.d(t, {
    AS: () => u,
    Kh: () => p,
    Ot: () => g,
    PW: () => m,
    VW: () => c,
    ZF: () => f,
    cv: () => d,
    e0: () => C,
    l5: () => h,
}),
    n(134528),
    n(947204);
var i = n(284009),
    l = n.n(i),
    s = n(719442),
    r = n(253018),
    a = n(184034),
    o = n(551483);
if ((n(654821), !s.KE._addedDiscordOverrides)) {
    let e = s.KE.positions;
    s.KE.positions = function* (t) {
        let n,
            i,
            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: r = t.selection, unit: a = "offset", reverse: o = !1, voids: u = !1 } = l ?? {};
        if (null == r) return;
        if (("block" === a && (a = "line"), "offset" === a)) {
            for (let n of e(t, l)) yield n;
            return;
        }
        n = p.isPoint(r)
            ? o
                ? { anchor: r, focus: c.start(t, []) }
                : { anchor: r, focus: c.end(t, []) }
            : c.range(t, r);
        let [g, _] = f.edges(n),
            x = c.blocks(t),
            A = o ? -1 : 1,
            C = g.path[0] ?? 0,
            E = _.path[0] ?? x.length - 1,
            I = o ? E : C,
            v = o ? C : E,
            y = !1;
        "line" === a && (yield o ? _ : g);
        for (let n = I; !y && (!o ? n <= v : n >= v); n += A)
            for (let r of (function* n(r) {
                let [c, p] = r,
                    f = p.length,
                    x = m.isAncestor(p, g.path),
                    C = m.isAncestor(p, _.path),
                    E = x ? g.path[f] : 0,
                    I = C ? _.path[f] : c.children.length - 1,
                    v = o ? I : E,
                    S = o ? E : I;
                for (let r = v; !y && (!o ? r <= S : r >= S); r += A) {
                    let f = c.children[r],
                        x = m.child(p, r);
                    if (d.isElement(f)) {
                        let e = o ? _.path : g.path;
                        if (!(m.equals(x, e) || m.isAncestor(x, e))) {
                            let e = t.isVoid(f);
                            if ("line" === a && d.isElement(f) && !e) {
                                null != i && (yield i, (i = void 0)), (y = !0);
                                return;
                            }
                            if (!u && e) continue;
                        }
                        for (let e of n([f, x])) yield e;
                    } else if (h.isText(f))
                        if ("line" === a) i = { path: x, offset: o ? 0 : f.text.length };
                        else if (0 === f.text.length) yield { path: x, offset: 0 };
                        else {
                            let n = s.KE.range(t, x);
                            for (let i of (m.equals(x, g.path) && (n.anchor = g),
                            m.equals(x, _.path) && (n.focus = _),
                            e(t, { ...l, at: n })))
                                yield i;
                        }
                }
                "line" === a && d.isElement(c) && !t.isVoid(c) && (null != i && (yield i, (i = void 0)), (y = !0));
            })(x[n]))
                yield r;
    };
    let t = r.rL.findDocumentOrShadowRoot;
    (r.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let c = {
        ...s.KE,
        ...r.rL,
        richValue: (e) => e.children,
        blocks: (e) => c.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => d.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => d.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => d.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = c.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && d.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = c.node(e, o.fP);
            return h.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? f.toPoint(e.selection) : null;
            return null == t ? null : c.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            c.above(e, { at: t, match: (t) => d.isElement(t) && c.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => c.above(e, { at: t, match: (e) => d.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => c.above(e, { at: t, match: (t) => c.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => c.above(e, { at: t, match: (t) => c.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            c.above(e, { at: t, match: (e) => d.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = f.toPoint(e.selection);
            return null == n ? null : c.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            c.nodes(e, { at: o.Dl, match: (e) => d.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (f.isExpanded(e.selection)) {
                let [n, i] = f.edges(e.selection),
                    l = c.after(e, n, { unit: "offset" }),
                    s = c.before(e, i, { unit: "offset" });
                if (null == l || null == s || !p.equals(l, s)) return null;
                t = l;
            } else t = e.selection.anchor;
            return null == t ? null : c.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = r.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let i = t.getRangeAt(0);
                    null != i && (n = r.rL.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, i] = f.edges(t),
                l = c.nodes(e, { at: t, mode: "lowest", match: (e) => h.isText(e) }),
                s = "";
            for (let [e, t] of l) {
                let l = m.equals(t, n.path) ? n.offset : 0,
                    r = m.equals(t, i.path) ? i.offset : 0;
                s += e.text.substring(l, r);
            }
            return s;
        },
        withoutNormalizing(e, t) {
            let n = c.isNormalizing(e);
            c.setNormalizing(e, !1);
            try {
                t();
            } finally {
                c.setNormalizing(e, n);
            }
            !1 !== n && c.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = c.richValue(e),
                n = t[0],
                i = n?.type === "line" ? n.children[0] : null;
            if (null == i || !h.isText(i)) return !1;
            let l = e.chatInputType,
                s = i.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === l.sedReplace && s.startsWith("s/")) || (l.autocomplete?.reactions === !0 && s.startsWith("+")))
            );
        },
        focus(e) {
            r.rL.isFocused(e) || (r.rL.focus(e), r.rL.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection) return { anchor: null, focus: null };
            if (m.isPath(t)) {
                let n = c.range(e, t),
                    [i] = c.node(e, t);
                if (d.isElement(i)) {
                    let i = c.before(e, t),
                        l = c.after(e, t);
                    t = { anchor: i ?? n.anchor, focus: l ?? n.focus };
                } else t = n;
            }
            let [n, i] = f.edges(t),
                l = null,
                s = null;
            return (
                p.equals(e.selection.anchor, n)
                    ? (l = "start")
                    : p.equals(e.selection.anchor, i)
                      ? (l = "end")
                      : f.includes(t, e.selection.anchor) && (l = "inside"),
                p.equals(e.selection.focus, n)
                    ? (s = "start")
                    : p.equals(e.selection.focus, i)
                      ? (s = "end")
                      : f.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: l, focus: s }
            );
        },
    },
    u = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    d = {
        ...s.Hg,
        updateElement(e, t) {
            let n = c.node(e, t[1]);
            return (
                l()(!c.isEditor(t[0]), "Element is the root node"),
                l()(null != n, "Failed to find element"),
                l()(d.isElement(n[0]), "Node at this path is no longer an element"),
                l()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let i = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                l = e.children.map((e) => (h.isText(e) ? e.text : "?")),
                s = l.join("");
            return { entries: a.q(s, t ?? null, i, n), serializedChildren: l };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return h.isText(t) && 0 === t.text.length;
        },
    },
    h = { ...s.EY },
    m = {
        ...s.wA,
        isFirstEditorBlock: (e) => m.equals(e, o.Xg),
        isFirstEditorText: (e) => m.equals(e, o.fP),
        isFirstChild: (e, t) => m.equals(t, m.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    p = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: m.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return { path: m.child(n, t.children.length - 1), offset: h.isText(i) ? i.text.length : 0 };
        },
        isAtStart(e, t) {
            return p.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return p.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, i] = f.edges(t);
            return p.isBefore(e, n) && (e = n), p.isAfter(e, i) && (e = i), e;
        },
    },
    f = {
        ...s.Q6,
        toPoint: (e) => (null == e || f.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                anchor: { path: m.child(n, 0), offset: 0 },
                focus: { path: m.child(n, t.children.length - 1), offset: h.isText(i) ? i.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, i] = f.edges(e),
                [l, s] = f.edges(t);
            return (p.isBefore(n, l) && (n = l), p.isAfter(i, s) && (i = s), f.isForward(e))
                ? { anchor: n, focus: i }
                : { anchor: i, focus: n };
        },
    },
    g = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && f.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: i } = t;
            if (!c.hasPath(e, n.path) || !c.hasPath(e, i.path)) return !1;
            let [l] = c.node(e, n.path),
                [s] = c.node(e, i.path);
            return h.isText(l) && h.isText(s) && n.offset <= l.text.length && i.offset <= s.text.length;
        },
    },
    _ = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    x = (e, t, n) => {
        let i = c.toDOMRange(e, t).getBoundingClientRect(),
            l = c.toDOMRange(e, n).getBoundingClientRect();
        return _(i, l) && _(l, i);
    },
    A = (e, t, n, i) => {
        let l = { anchor: t, focus: t },
            s = 0,
            r = n.length,
            a = Math.floor((s + r) / 2);
        for (; a !== s; )
            if (
                (x(e, { anchor: n[a], focus: n[a] }, l) ? (i ? (r = a) : (s = a)) : i ? (s = a) : (r = a),
                (a = Math.floor((s + r) / 2)),
                !i && a === n.length - 2 && r === n.length - 1)
            ) {
                let t = n[n.length - 1];
                x(e, { anchor: t, focus: t }, l) && (a = r);
            }
        return n[a];
    },
    C = {
        getLineStart(e, t, n) {
            let i = c.getParentElement(e, t);
            if (null == i) return null;
            let l = c.start(e, i[1]),
                s = Array.from(c.positions(e, { at: { anchor: l, focus: t } })),
                r = A(e, t, s, !0);
            if (n && p.equals(t, r) && !p.isAtEnd(t, i)) {
                let n = c.after(e, t);
                if (null == n) return r;
                r = A(e, n, s, !0);
            }
            return r;
        },
        getLineEnd(e, t, n) {
            let i = c.getParentElement(e, t);
            if (null == i) return null;
            let l = c.end(e, i[1]),
                s = Array.from(c.positions(e, { at: { anchor: t, focus: l } })),
                r = A(e, t, s, !1);
            if (n && p.equals(t, r) && !p.isAtEnd(t, i)) {
                let n = c.after(e, t);
                if (null == n) return r;
                r = A(e, n, s, !1);
            }
            return r;
        },
    };
