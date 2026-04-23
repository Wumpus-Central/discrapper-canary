"use strict";
n.d(t, {
    AS: () => c,
    Kh: () => p,
    Ot: () => E,
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
    s = n(719442),
    a = n(253018),
    o = n(184034),
    l = n(551483);
if ((n(654821), !s.KE._addedDiscordOverrides)) {
    let e = s.KE.positions;
    s.KE.positions = function* (t) {
        let n,
            r,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: a = t.selection, unit: o = "offset", reverse: l = !1, voids: c = !1 } = i ?? {};
        if (null == a) return;
        if (("block" === o && (o = "line"), "offset" === o)) {
            for (let n of e(t, i)) yield n;
            return;
        }
        n = p.isPoint(a)
            ? l
                ? { anchor: a, focus: u.start(t, []) }
                : { anchor: a, focus: u.end(t, []) }
            : u.range(t, a);
        let [E, m] = h.edges(n),
            g = u.blocks(t),
            A = l ? -1 : 1,
            I = E.path[0] ?? 0,
            T = m.path[0] ?? g.length - 1,
            S = l ? T : I,
            y = l ? I : T,
            N = !1;
        "line" === o && (yield l ? m : E);
        for (let n = S; !N && (!l ? n <= y : n >= y); n += A)
            for (let a of (function* n(a) {
                let [u, p] = a,
                    h = p.length,
                    g = f.isAncestor(p, E.path),
                    I = f.isAncestor(p, m.path),
                    T = g ? E.path[h] : 0,
                    S = I ? m.path[h] : u.children.length - 1,
                    y = l ? S : T,
                    v = l ? T : S;
                for (let a = y; !N && (!l ? a <= v : a >= v); a += A) {
                    let h = u.children[a],
                        g = f.child(p, a);
                    if (d.isElement(h)) {
                        let e = l ? m.path : E.path;
                        if (!(f.equals(g, e) || f.isAncestor(g, e))) {
                            let e = t.isVoid(h);
                            if ("line" === o && d.isElement(h) && !e) {
                                null != r && (yield r, (r = void 0)), (N = !0);
                                return;
                            }
                            if (!c && e) continue;
                        }
                        for (let e of n([h, g])) yield e;
                    } else if (_.isText(h))
                        if ("line" === o) r = { path: g, offset: l ? 0 : h.text.length };
                        else if (0 === h.text.length) yield { path: g, offset: 0 };
                        else {
                            let n = s.KE.range(t, g);
                            for (let r of (f.equals(g, E.path) && (n.anchor = E),
                            f.equals(g, m.path) && (n.focus = m),
                            e(t, { ...i, at: n })))
                                yield r;
                        }
                }
                "line" === o && d.isElement(u) && !t.isVoid(u) && (null != r && (yield r, (r = void 0)), (N = !0));
            })(g[n]))
                yield a;
    };
    let t = a.rL.findDocumentOrShadowRoot;
    (a.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let u = {
        ...s.KE,
        ...a.rL,
        richValue: (e) => e.children,
        blocks: (e) => u.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => d.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => d.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => d.isElement(t) && s.KE.isVoid(e, t),
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
                    s = u.before(e, r, { unit: "offset" });
                if (null == i || null == s || !p.equals(i, s)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : u.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = a.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let r = t.getRangeAt(0);
                    null != r && (n = a.rL.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, r] = h.edges(t),
                i = u.nodes(e, { at: t, mode: "lowest", match: (e) => _.isText(e) }),
                s = "";
            for (let [e, t] of i) {
                let i = f.equals(t, n.path) ? n.offset : 0,
                    a = f.equals(t, r.path) ? r.offset : 0;
                s += e.text.substring(i, a);
            }
            return s;
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
                s = r.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === i.sedReplace && s.startsWith("s/")) || (i.autocomplete?.reactions === !0 && s.startsWith("+")))
            );
        },
        focus(e) {
            a.rL.isFocused(e) || (a.rL.focus(e), a.rL.deselect(e));
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
                s = null;
            return (
                p.equals(e.selection.anchor, n)
                    ? (i = "start")
                    : p.equals(e.selection.anchor, r)
                      ? (i = "end")
                      : h.includes(t, e.selection.anchor) && (i = "inside"),
                p.equals(e.selection.focus, n)
                    ? (s = "start")
                    : p.equals(e.selection.focus, r)
                      ? (s = "end")
                      : h.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: i, focus: s }
            );
        },
    },
    c = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    d = {
        ...s.Hg,
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
                s = i.join("");
            return { entries: o.q(s, t ?? null, r, n), serializedChildren: i };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return _.isText(t) && 0 === t.text.length;
        },
    },
    _ = { ...s.EY },
    f = {
        ...s.wA,
        isFirstEditorBlock: (e) => f.equals(e, l.Xg),
        isFirstEditorText: (e) => f.equals(e, l.fP),
        isFirstChild: (e, t) => f.equals(t, f.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    p = {
        ...s.bR,
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
        ...s.Q6,
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
                [i, s] = h.edges(t);
            return (p.isBefore(n, i) && (n = i), p.isAfter(r, s) && (r = s), h.isForward(e))
                ? { anchor: n, focus: r }
                : { anchor: r, focus: n };
        },
    },
    E = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && h.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!u.hasPath(e, n.path) || !u.hasPath(e, r.path)) return !1;
            let [i] = u.node(e, n.path),
                [s] = u.node(e, r.path);
            return _.isText(i) && _.isText(s) && n.offset <= i.text.length && r.offset <= s.text.length;
        },
    },
    m = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    g = (e, t, n) => {
        let r = u.toDOMRange(e, t).getBoundingClientRect(),
            i = u.toDOMRange(e, n).getBoundingClientRect();
        return m(r, i) && m(i, r);
    },
    A = (e, t, n, r) => {
        let i = { anchor: t, focus: t },
            s = 0,
            a = n.length,
            o = Math.floor((s + a) / 2);
        for (; o !== s; )
            if (
                (g(e, { anchor: n[o], focus: n[o] }, i) ? (r ? (a = o) : (s = o)) : r ? (s = o) : (a = o),
                (o = Math.floor((s + a) / 2)),
                !r && o === n.length - 2 && a === n.length - 1)
            ) {
                let t = n[n.length - 1];
                g(e, { anchor: t, focus: t }, i) && (o = a);
            }
        return n[o];
    },
    I = {
        getLineStart(e, t, n) {
            let r = u.getParentElement(e, t);
            if (null == r) return null;
            let i = u.start(e, r[1]),
                s = Array.from(u.positions(e, { at: { anchor: i, focus: t } })),
                a = A(e, t, s, !0);
            if (n && p.equals(t, a) && !p.isAtEnd(t, r)) {
                let n = u.after(e, t);
                if (null == n) return a;
                a = A(e, n, s, !0);
            }
            return a;
        },
        getLineEnd(e, t, n) {
            let r = u.getParentElement(e, t);
            if (null == r) return null;
            let i = u.end(e, r[1]),
                s = Array.from(u.positions(e, { at: { anchor: t, focus: i } })),
                a = A(e, t, s, !1);
            if (n && p.equals(t, a) && !p.isAtEnd(t, r)) {
                let n = u.after(e, t);
                if (null == n) return a;
                a = A(e, n, s, !1);
            }
            return a;
        },
    };
