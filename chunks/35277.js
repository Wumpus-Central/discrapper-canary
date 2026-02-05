"use strict";
n.d(t, { b: () => o }), n(134528), n(947204);
var r = n(719442),
    i = n(317681),
    a = n(711371),
    s = n(551483);
let o = {
    ...r.gB,
    resetSelectionToEditorStart(e) {
        r.gB.select(e, a.VW.start(e, []));
    },
    resetSelectionToEditorEnd(e) {
        r.gB.select(e, a.VW.end(e, []));
    },
    delete(e, t) {
        let { at: n, distance: i, unit: s, reverse: o = !1, select: l = !1, bounds: u, voids: c } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection;
        }
        let [d, _] = a.ZF.isRange(n) ? a.ZF.edges(n) : a.VW.edges(e, n);
        if (null != i || null != s)
            if (o) {
                let t = a.VW.before(e, d, { distance: i, unit: s }) ?? a.VW.start(e, []);
                if ("character" === s && (i ?? 1) === 1 && a.PW.equals(d.path, _.path)) {
                    let n = a.VW.leaf(e, d.path),
                        r = null != n ? n[0].text : "";
                    r.length > 0 &&
                        null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (t = a.VW.before(e, d, { distance: i, unit: "offset" }) ?? a.VW.start(e, []));
                }
                d = t;
            } else _ = a.VW.after(e, _, { distance: i, unit: s }) ?? a.VW.end(e, []);
        if (null != u) {
            let [e, t] = a.ZF.edges(u);
            a.Kh.isBefore(d, e) && (d = e), a.Kh.isAfter(_, t) && (_ = t);
        }
        !a.Kh.equals(d, _) &&
            (r.gB.delete(e, { at: { anchor: d, focus: _ }, hanging: !0, voids: c }),
            l && a.VW.hasPath(e, d.path) && r.gB.select(e, d));
    },
    textToText(e, t, n) {
        let i = a.VW.getSelectionOverlap(e, n),
            [s, o] = a.ZF.edges(n),
            l = a.VW.before(e, s) ?? a.VW.start(e, []),
            c = a.VW.after(e, o);
        a.ZF.isExpanded(n) && r.gB.delete(e, { at: n, voids: !0 }),
            r.gB.insertText(e, t, { at: l }),
            (l = l ?? a.VW.start(e, [])),
            (c = c ?? a.VW.end(e, [])),
            u(e, i, l, c, c);
    },
    textToVoid(e, t, n) {
        let i = a.VW.getSelectionOverlap(e, n),
            s = a.ZF.start(n),
            o = a.PW.next(s.path),
            l = { path: a.PW.next(o), offset: 0 };
        r.gB.delete(e, { at: n, voids: !0 }),
            0 === s.offset && r.gB.insertNodes(e, [{ text: "" }], { at: s.path }),
            r.gB.insertNodes(e, [t], { at: s }),
            (a.VW.hasPath(e, l.path) && a.l5.isText(a.VW.node(e, l.path)[0])) ||
                r.gB.insertNodes(e, [{ text: "" }], { at: l.path }),
            u(e, i, s, l, l);
    },
    textToInline(e, t, n) {
        let i = a.VW.getSelectionOverlap(e, n),
            s = t.children[t.children.length - 1],
            o = a.ZF.start(n),
            l = a.PW.next(o.path),
            c = { path: a.PW.child(l, t.children.length - 1), offset: a.l5.isText(s) ? s.text.length : 0 };
        r.gB.delete(e, { at: n, voids: !0 }),
            0 === o.offset && r.gB.insertNodes(e, [{ text: "" }], { at: o.path }),
            r.gB.insertNodes(e, [t], { at: o }),
            u(e, i, o, c, c);
    },
    voidToText(e, t, n) {
        let i = a.VW.getSelectionOverlap(e, n),
            s = a.VW.before(e, n) ?? a.VW.start(e, []),
            o = { path: s.path, offset: s.offset + t.length };
        r.gB.delete(e, { at: n, voids: !0 }), r.gB.insertText(e, t, { at: s }), u(e, i, s, s, o);
    },
    removeInline(e, t) {
        let n = a.VW.getSelectionOverlap(e, t),
            i = a.VW.before(e, t) ?? a.VW.start(e, []);
        r.gB.delete(e, { at: t, voids: !0 }), u(e, n, i, i, i);
    },
    removeInlineChildren(e, t) {
        let [n, i] = t,
            s = a.VW.getSelectionOverlap(e, i),
            o = { path: a.PW.child(i, 0), offset: 0 };
        a.VW.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--) r.gB.removeNodes(e, { at: a.PW.child(i, t), voids: !0 });
        }),
            u(e, s, null, o, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            s = i.n$(e);
        if (null != s)
            for (let i = 0; i < s[0].children.length; i++) {
                let o = s[0].children[i];
                if (a.AS.isType(o, "applicationCommandOption") && o.optionName === t)
                    return void (n ? r.gB.select(e, [0, i]) : r.gB.select(e, a.VW.end(e, [0, i])));
            }
    },
    selectPreviousCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : a.VW.end(e, s.Xg).path,
            n = i.M3(e),
            o = a.VW.previous(e, { at: t, match: (e) => e !== n?.[0] && a.AS.isType(e, "applicationCommandOption") });
        null != o ? r.gB.select(e, o[1]) : a.PW.isAfter(t, s.fP) && r.gB.select(e, a.VW.end(e, s.fP));
    },
    selectNextCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : a.VW.start(e, s.Xg).path,
            n = i.M3(e),
            l = a.VW.next(e, { at: t, match: (e) => e !== n?.[0] && a.AS.isType(e, "applicationCommandOption") });
        null != l ? r.gB.select(e, l[1]) : o.resetSelectionToEditorEnd(e);
    },
    insertCommandOption(e, t) {
        o.resetSelectionToEditorEnd(e),
            o.insertNodes(e, [
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
        let { distance: n = 1, unit: i = "character", reverse: s = !1, edge: o } = t ?? {},
            l = e.selection;
        if (null == l) return;
        let u = l.focus;
        if (a.ZF.isExpanded(l)) {
            if (void 0 === o && "character" === i) return void r.gB.collapse(e, { edge: s ? "start" : "end" });
            "focus" !== o && (u = "line" === i || s ? a.ZF.start(l) : a.ZF.end(l));
        }
        let c = (s ? a.VW.before : a.VW.after)(e, u, { unit: i, distance: n });
        null != c && r.gB.setSelection(e, "focus" === o ? { focus: c } : { anchor: c, focus: c });
    },
};
function l(e, t, n, r, i) {
    switch (t) {
        case "start":
            return n;
        case "inside":
            return r;
        case "end":
            return i;
    }
    return e;
}
function u(e, t, n, r, i) {
    if (null == t.anchor && null == t.focus) return;
    let a = l(e.selection?.anchor, t.anchor, n, r, i),
        s = l(e.selection?.focus, t.focus, n, r, i);
    if (null == a || null == s) return;
    let u = { anchor: a, focus: s };
    o.select(e, u);
}
