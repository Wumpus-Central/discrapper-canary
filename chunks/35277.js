"use strict";
n.d(t, { b: () => a }), n(134528), n(947204);
var l = n(154283),
    i = n(317681),
    r = n(820066),
    s = n(551483);
let a = {
    ...l.gB,
    resetSelectionToEditorStart(e) {
        l.gB.select(e, r.VW.start(e, []));
    },
    resetSelectionToEditorEnd(e) {
        l.gB.select(e, r.VW.end(e, []));
    },
    delete(e, t) {
        let { at: n, distance: i, unit: s, reverse: a = !1, select: o = !1, bounds: u, voids: c } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection;
        }
        let [d, m] = r.ZF.isRange(n) ? r.ZF.edges(n) : r.VW.edges(e, n);
        if (null != i || null != s)
            if (a) {
                let t = r.VW.before(e, d, { distance: i, unit: s }) ?? r.VW.start(e, []);
                if ("character" === s && (i ?? 1) === 1 && r.PW.equals(d.path, m.path)) {
                    let n = r.VW.leaf(e, d.path),
                        l = null != n ? n[0].text : "";
                    l.length > 0 &&
                        null != l[l.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (t = r.VW.before(e, d, { distance: i, unit: "offset" }) ?? r.VW.start(e, []));
                }
                d = t;
            } else m = r.VW.after(e, m, { distance: i, unit: s }) ?? r.VW.end(e, []);
        if (null != u) {
            let [e, t] = r.ZF.edges(u);
            r.Kh.isBefore(d, e) && (d = e), r.Kh.isAfter(m, t) && (m = t);
        }
        !r.Kh.equals(d, m) &&
            (l.gB.delete(e, { at: { anchor: d, focus: m }, hanging: !0, voids: c }),
            o && r.VW.hasPath(e, d.path) && l.gB.select(e, d));
    },
    textToText(e, t, n) {
        let i = r.VW.getSelectionOverlap(e, n),
            [s, a] = r.ZF.edges(n),
            o = r.VW.before(e, s) ?? r.VW.start(e, []),
            c = r.VW.after(e, a);
        r.ZF.isExpanded(n) && l.gB.delete(e, { at: n, voids: !0 }),
            l.gB.insertText(e, t, { at: o }),
            (o = o ?? r.VW.start(e, [])),
            (c = c ?? r.VW.end(e, [])),
            u(e, i, o, c, c);
    },
    textToVoid(e, t, n) {
        let i = r.VW.getSelectionOverlap(e, n),
            s = r.ZF.start(n),
            a = r.PW.next(s.path),
            o = { path: r.PW.next(a), offset: 0 };
        l.gB.delete(e, { at: n, voids: !0 }),
            0 === s.offset && l.gB.insertNodes(e, [{ text: "" }], { at: s.path }),
            l.gB.insertNodes(e, [t], { at: s }),
            (r.VW.hasPath(e, o.path) && r.l5.isText(r.VW.node(e, o.path)[0])) ||
                l.gB.insertNodes(e, [{ text: "" }], { at: o.path }),
            u(e, i, s, o, o);
    },
    textToInline(e, t, n) {
        let i = r.VW.getSelectionOverlap(e, n),
            s = t.children[t.children.length - 1],
            a = r.ZF.start(n),
            o = r.PW.next(a.path),
            c = { path: r.PW.child(o, t.children.length - 1), offset: r.l5.isText(s) ? s.text.length : 0 };
        l.gB.delete(e, { at: n, voids: !0 }),
            0 === a.offset && l.gB.insertNodes(e, [{ text: "" }], { at: a.path }),
            l.gB.insertNodes(e, [t], { at: a }),
            u(e, i, a, c, c);
    },
    voidToText(e, t, n) {
        let i = r.VW.getSelectionOverlap(e, n),
            s = r.VW.before(e, n) ?? r.VW.start(e, []),
            a = { path: s.path, offset: s.offset + t.length };
        l.gB.delete(e, { at: n, voids: !0 }), l.gB.insertText(e, t, { at: s }), u(e, i, s, s, a);
    },
    removeInline(e, t) {
        let n = r.VW.getSelectionOverlap(e, t),
            i = r.VW.before(e, t) ?? r.VW.start(e, []);
        l.gB.delete(e, { at: t, voids: !0 }), u(e, n, i, i, i);
    },
    removeInlineChildren(e, t) {
        let [n, i] = t,
            s = r.VW.getSelectionOverlap(e, i),
            a = { path: r.PW.child(i, 0), offset: 0 };
        r.VW.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--) l.gB.removeNodes(e, { at: r.PW.child(i, t), voids: !0 });
        }),
            u(e, s, null, a, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            s = i.n$(e);
        if (null != s)
            for (let i = 0; i < s[0].children.length; i++) {
                let a = s[0].children[i];
                if (r.AS.isType(a, "applicationCommandOption") && a.optionName === t)
                    return void (n ? l.gB.select(e, [0, i]) : l.gB.select(e, r.VW.end(e, [0, i])));
            }
    },
    selectPreviousCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : r.VW.end(e, s.Xg).path,
            n = i.M3(e),
            a = r.VW.previous(e, { at: t, match: (e) => e !== n?.[0] && r.AS.isType(e, "applicationCommandOption") });
        null != a ? l.gB.select(e, a[1]) : r.PW.isAfter(t, s.fP) && l.gB.select(e, r.VW.end(e, s.fP));
    },
    selectNextCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : r.VW.start(e, s.Xg).path,
            n = i.M3(e),
            o = r.VW.next(e, { at: t, match: (e) => e !== n?.[0] && r.AS.isType(e, "applicationCommandOption") });
        null != o ? l.gB.select(e, o[1]) : a.resetSelectionToEditorEnd(e);
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
        let { distance: n = 1, unit: i = "character", reverse: s = !1, edge: a } = t ?? {},
            o = e.selection;
        if (null == o) return;
        let u = o.focus;
        if (r.ZF.isExpanded(o)) {
            if (void 0 === a && "character" === i) return void l.gB.collapse(e, { edge: s ? "start" : "end" });
            "focus" !== a && (u = "line" === i || s ? r.ZF.start(o) : r.ZF.end(o));
        }
        let c = (s ? r.VW.before : r.VW.after)(e, u, { unit: i, distance: n });
        null != c && l.gB.setSelection(e, "focus" === a ? { focus: c } : { anchor: c, focus: c });
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
function u(e, t, n, l, i) {
    if (null == t.anchor && null == t.focus) return;
    let r = o(e.selection?.anchor, t.anchor, n, l, i),
        s = o(e.selection?.focus, t.focus, n, l, i);
    null == r || null == s || a.select(e, { anchor: r, focus: s });
}
