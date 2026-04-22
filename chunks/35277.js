"use strict";
n.d(t, { b: () => a }), n(134528), n(947204);
var i = n(719442),
    l = n(317681),
    s = n(711371),
    r = n(551483);
let a = {
    ...i.gB,
    resetSelectionToEditorStart(e) {
        i.gB.select(e, s.VW.start(e, []));
    },
    resetSelectionToEditorEnd(e) {
        i.gB.select(e, s.VW.end(e, []));
    },
    delete(e, t) {
        let { at: n, distance: l, unit: r, reverse: a = !1, select: o = !1, bounds: c, voids: u } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection;
        }
        let [d, h] = s.ZF.isRange(n) ? s.ZF.edges(n) : s.VW.edges(e, n);
        if (null != l || null != r)
            if (a) {
                let t = s.VW.before(e, d, { distance: l, unit: r }) ?? s.VW.start(e, []);
                if ("character" === r && (l ?? 1) === 1 && s.PW.equals(d.path, h.path)) {
                    let n = s.VW.leaf(e, d.path),
                        i = null != n ? n[0].text : "";
                    i.length > 0 &&
                        null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (t = s.VW.before(e, d, { distance: l, unit: "offset" }) ?? s.VW.start(e, []));
                }
                d = t;
            } else h = s.VW.after(e, h, { distance: l, unit: r }) ?? s.VW.end(e, []);
        if (null != c) {
            let [e, t] = s.ZF.edges(c);
            s.Kh.isBefore(d, e) && (d = e), s.Kh.isAfter(h, t) && (h = t);
        }
        !s.Kh.equals(d, h) &&
            (i.gB.delete(e, { at: { anchor: d, focus: h }, hanging: !0, voids: u }),
            o && s.VW.hasPath(e, d.path) && i.gB.select(e, d));
    },
    textToText(e, t, n) {
        let l = s.VW.getSelectionOverlap(e, n),
            [r, a] = s.ZF.edges(n),
            o = s.VW.before(e, r) ?? s.VW.start(e, []),
            u = s.VW.after(e, a);
        s.ZF.isExpanded(n) && i.gB.delete(e, { at: n, voids: !0 }),
            i.gB.insertText(e, t, { at: o }),
            (o = o ?? s.VW.start(e, [])),
            (u = u ?? s.VW.end(e, [])),
            c(e, l, o, u, u);
    },
    textToVoid(e, t, n) {
        let l = s.VW.getSelectionOverlap(e, n),
            r = s.ZF.start(n),
            a = s.PW.next(r.path),
            o = { path: s.PW.next(a), offset: 0 };
        i.gB.delete(e, { at: n, voids: !0 }),
            0 === r.offset && i.gB.insertNodes(e, [{ text: "" }], { at: r.path }),
            i.gB.insertNodes(e, [t], { at: r }),
            (s.VW.hasPath(e, o.path) && s.l5.isText(s.VW.node(e, o.path)[0])) ||
                i.gB.insertNodes(e, [{ text: "" }], { at: o.path }),
            c(e, l, r, o, o);
    },
    textToInline(e, t, n) {
        let l = s.VW.getSelectionOverlap(e, n),
            r = t.children[t.children.length - 1],
            a = s.ZF.start(n),
            o = s.PW.next(a.path),
            u = { path: s.PW.child(o, t.children.length - 1), offset: s.l5.isText(r) ? r.text.length : 0 };
        i.gB.delete(e, { at: n, voids: !0 }),
            0 === a.offset && i.gB.insertNodes(e, [{ text: "" }], { at: a.path }),
            i.gB.insertNodes(e, [t], { at: a }),
            c(e, l, a, u, u);
    },
    voidToText(e, t, n) {
        let l = s.VW.getSelectionOverlap(e, n),
            r = s.VW.before(e, n) ?? s.VW.start(e, []),
            a = { path: r.path, offset: r.offset + t.length };
        i.gB.delete(e, { at: n, voids: !0 }), i.gB.insertText(e, t, { at: r }), c(e, l, r, r, a);
    },
    removeInline(e, t) {
        let n = s.VW.getSelectionOverlap(e, t),
            l = s.VW.before(e, t) ?? s.VW.start(e, []);
        i.gB.delete(e, { at: t, voids: !0 }), c(e, n, l, l, l);
    },
    removeInlineChildren(e, t) {
        let [n, l] = t,
            r = s.VW.getSelectionOverlap(e, l),
            a = { path: s.PW.child(l, 0), offset: 0 };
        s.VW.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--) i.gB.removeNodes(e, { at: s.PW.child(l, t), voids: !0 });
        }),
            c(e, r, null, a, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = l.n$(e);
        if (null != r)
            for (let l = 0; l < r[0].children.length; l++) {
                let a = r[0].children[l];
                if (s.AS.isType(a, "applicationCommandOption") && a.optionName === t)
                    return void (n ? i.gB.select(e, [0, l]) : i.gB.select(e, s.VW.end(e, [0, l])));
            }
    },
    selectPreviousCommandOption(e) {
        if (null == l.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : s.VW.end(e, r.Xg).path,
            n = l.M3(e),
            a = s.VW.previous(e, { at: t, match: (e) => e !== n?.[0] && s.AS.isType(e, "applicationCommandOption") });
        null != a ? i.gB.select(e, a[1]) : s.PW.isAfter(t, r.fP) && i.gB.select(e, s.VW.end(e, r.fP));
    },
    selectNextCommandOption(e) {
        if (null == l.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : s.VW.start(e, r.Xg).path,
            n = l.M3(e),
            o = s.VW.next(e, { at: t, match: (e) => e !== n?.[0] && s.AS.isType(e, "applicationCommandOption") });
        null != o ? i.gB.select(e, o[1]) : a.resetSelectionToEditorEnd(e);
    },
    insertCommandOption(e, t) {
        a.resetSelectionToEditorEnd(e),
            a.insertNodes(e, [
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
        let { distance: n = 1, unit: l = "character", reverse: r = !1, edge: a } = t ?? {},
            o = e.selection;
        if (null == o) return;
        let c = o.focus;
        if (s.ZF.isExpanded(o)) {
            if (void 0 === a && "character" === l) return void i.gB.collapse(e, { edge: r ? "start" : "end" });
            "focus" !== a && (c = "line" === l || r ? s.ZF.start(o) : s.ZF.end(o));
        }
        let u = (r ? s.VW.before : s.VW.after)(e, c, { unit: l, distance: n });
        null != u && i.gB.setSelection(e, "focus" === a ? { focus: u } : { anchor: u, focus: u });
    },
};
function o(e, t, n, i, l) {
    switch (t) {
        case "start":
            return n;
        case "inside":
            return i;
        case "end":
            return l;
    }
    return e;
}
function c(e, t, n, i, l) {
    if (null == t.anchor && null == t.focus) return;
    let s = o(e.selection?.anchor, t.anchor, n, i, l),
        r = o(e.selection?.focus, t.focus, n, i, l);
    null == s || null == r || a.select(e, { anchor: s, focus: r });
}
