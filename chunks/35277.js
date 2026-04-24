"use strict";
n.d(t, { b: () => r }), n(134528), n(947204);
var l = n(154283),
    i = n(317681),
    s = n(820066),
    a = n(551483);
let r = {
    ...l.gB,
    resetSelectionToEditorStart(e) {
        l.gB.select(e, s.VW.start(e, []));
    },
    resetSelectionToEditorEnd(e) {
        l.gB.select(e, s.VW.end(e, []));
    },
    delete(e, t) {
        let { at: n, distance: i, unit: a, reverse: r = !1, select: o = !1, bounds: c, voids: u } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection;
        }
        let [d, h] = s.ZF.isRange(n) ? s.ZF.edges(n) : s.VW.edges(e, n);
        if (null != i || null != a)
            if (r) {
                let t = s.VW.before(e, d, { distance: i, unit: a }) ?? s.VW.start(e, []);
                if ("character" === a && (i ?? 1) === 1 && s.PW.equals(d.path, h.path)) {
                    let n = s.VW.leaf(e, d.path),
                        l = null != n ? n[0].text : "";
                    l.length > 0 &&
                        null != l[l.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (t = s.VW.before(e, d, { distance: i, unit: "offset" }) ?? s.VW.start(e, []));
                }
                d = t;
            } else h = s.VW.after(e, h, { distance: i, unit: a }) ?? s.VW.end(e, []);
        if (null != c) {
            let [e, t] = s.ZF.edges(c);
            s.Kh.isBefore(d, e) && (d = e), s.Kh.isAfter(h, t) && (h = t);
        }
        !s.Kh.equals(d, h) &&
            (l.gB.delete(e, { at: { anchor: d, focus: h }, hanging: !0, voids: u }),
            o && s.VW.hasPath(e, d.path) && l.gB.select(e, d));
    },
    textToText(e, t, n) {
        let i = s.VW.getSelectionOverlap(e, n),
            [a, r] = s.ZF.edges(n),
            o = s.VW.before(e, a) ?? s.VW.start(e, []),
            u = s.VW.after(e, r);
        s.ZF.isExpanded(n) && l.gB.delete(e, { at: n, voids: !0 }),
            l.gB.insertText(e, t, { at: o }),
            (o = o ?? s.VW.start(e, [])),
            (u = u ?? s.VW.end(e, [])),
            c(e, i, o, u, u);
    },
    textToVoid(e, t, n) {
        let i = s.VW.getSelectionOverlap(e, n),
            a = s.ZF.start(n),
            r = s.PW.next(a.path),
            o = { path: s.PW.next(r), offset: 0 };
        l.gB.delete(e, { at: n, voids: !0 }),
            0 === a.offset && l.gB.insertNodes(e, [{ text: "" }], { at: a.path }),
            l.gB.insertNodes(e, [t], { at: a }),
            (s.VW.hasPath(e, o.path) && s.l5.isText(s.VW.node(e, o.path)[0])) ||
                l.gB.insertNodes(e, [{ text: "" }], { at: o.path }),
            c(e, i, a, o, o);
    },
    textToInline(e, t, n) {
        let i = s.VW.getSelectionOverlap(e, n),
            a = t.children[t.children.length - 1],
            r = s.ZF.start(n),
            o = s.PW.next(r.path),
            u = { path: s.PW.child(o, t.children.length - 1), offset: s.l5.isText(a) ? a.text.length : 0 };
        l.gB.delete(e, { at: n, voids: !0 }),
            0 === r.offset && l.gB.insertNodes(e, [{ text: "" }], { at: r.path }),
            l.gB.insertNodes(e, [t], { at: r }),
            c(e, i, r, u, u);
    },
    voidToText(e, t, n) {
        let i = s.VW.getSelectionOverlap(e, n),
            a = s.VW.before(e, n) ?? s.VW.start(e, []),
            r = { path: a.path, offset: a.offset + t.length };
        l.gB.delete(e, { at: n, voids: !0 }), l.gB.insertText(e, t, { at: a }), c(e, i, a, a, r);
    },
    removeInline(e, t) {
        let n = s.VW.getSelectionOverlap(e, t),
            i = s.VW.before(e, t) ?? s.VW.start(e, []);
        l.gB.delete(e, { at: t, voids: !0 }), c(e, n, i, i, i);
    },
    removeInlineChildren(e, t) {
        let [n, i] = t,
            a = s.VW.getSelectionOverlap(e, i),
            r = { path: s.PW.child(i, 0), offset: 0 };
        s.VW.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--) l.gB.removeNodes(e, { at: s.PW.child(i, t), voids: !0 });
        }),
            c(e, a, null, r, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            a = i.n$(e);
        if (null != a)
            for (let i = 0; i < a[0].children.length; i++) {
                let r = a[0].children[i];
                if (s.AS.isType(r, "applicationCommandOption") && r.optionName === t)
                    return void (n ? l.gB.select(e, [0, i]) : l.gB.select(e, s.VW.end(e, [0, i])));
            }
    },
    selectPreviousCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : s.VW.end(e, a.Xg).path,
            n = i.M3(e),
            r = s.VW.previous(e, { at: t, match: (e) => e !== n?.[0] && s.AS.isType(e, "applicationCommandOption") });
        null != r ? l.gB.select(e, r[1]) : s.PW.isAfter(t, a.fP) && l.gB.select(e, s.VW.end(e, a.fP));
    },
    selectNextCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : s.VW.start(e, a.Xg).path,
            n = i.M3(e),
            o = s.VW.next(e, { at: t, match: (e) => e !== n?.[0] && s.AS.isType(e, "applicationCommandOption") });
        null != o ? l.gB.select(e, o[1]) : r.resetSelectionToEditorEnd(e);
    },
    insertCommandOption(e, t) {
        r.resetSelectionToEditorEnd(e),
            r.insertNodes(e, [
                {
                    type: "applicationCommandOption",
                    optionName: t.name,
                    optionDisplayName: t.displayName,
                    optionType: t.type,
                    children: [{ text: "" }],
                },
            ]);
    },
    keyboardMove(e, t) {
        let { distance: n = 1, unit: i = "character", reverse: a = !1, edge: r } = t ?? {},
            o = e.selection;
        if (null == o) return;
        let c = o.focus;
        if (s.ZF.isExpanded(o)) {
            if (void 0 === r && "character" === i) return void l.gB.collapse(e, { edge: a ? "start" : "end" });
            "focus" !== r && (c = "line" === i || a ? s.ZF.start(o) : s.ZF.end(o));
        }
        let u = (a ? s.VW.before : s.VW.after)(e, c, { unit: i, distance: n });
        null != u && l.gB.setSelection(e, "focus" === r ? { focus: u } : { anchor: u, focus: u });
    },
};
function o(e, t, n, l, i) {
    switch (t) {
        case "start":
            return n;
        case "inside":
            return l;
        case "end":
            return i;
    }
    return e;
}
function c(e, t, n, l, i) {
    if (null == t.anchor && null == t.focus) return;
    let s = o(e.selection?.anchor, t.anchor, n, l, i),
        a = o(e.selection?.focus, t.focus, n, l, i);
    null == s || null == a || r.select(e, { anchor: s, focus: a });
}
