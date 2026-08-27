t.d(a, { P: () => d });
var r = t(117530),
    n = t(256062),
    i = t(184093),
    o = t(668310),
    l = t(366632),
    u = t(114218),
    s = t(582128);
function d(e, a, t) {
    let { direction: d } = (0, l.Y)(),
        m = (0, s.useMemo)(() => (0, r.C7)(a), [a]),
        { keyboardProps: h } = (0, o.d)({
            shortcuts: {
                "Alt+ArrowDown": () => "setOpen" in e && void e.setOpen(!0),
                "Alt+ArrowUp": () => "setOpen" in e && void e.setOpen(!0),
                ArrowLeft: (e) => {
                    if (t) return !1;
                    if ("rtl" !== d) return void m.focusPrevious();
                    if (a.current) {
                        let t = (0, n.wt)(e),
                            r = c(a.current, t.getBoundingClientRect().left, -1);
                        if (r) return void r.focus();
                    }
                    return !1;
                },
                ArrowRight: (e) => {
                    if (t) return !1;
                    if ("rtl" !== d) return void m.focusNext();
                    if (a.current) {
                        let t = (0, n.wt)(e),
                            r = c(a.current, t.getBoundingClientRect().left, 1);
                        if (r) return void r.focus();
                    }
                    return !1;
                },
            },
            allowRepeats: !0,
        }),
        y = () => {
            if (!a.current) return;
            let e = window.event ? (0, n.wt)(window.event) : null,
                t = (0, r.N$)(a.current, { tabbable: !0 });
            if ((e && ((t.currentNode = e), (e = t.previousNode())), !e)) {
                let a;
                do (a = t.lastChild()) && (e = a);
                while (a);
            }
            for (; e?.hasAttribute("data-placeholder"); ) {
                let a = t.previousNode();
                if (a && a.hasAttribute("data-placeholder")) e = a;
                else break;
            }
            e && e.focus();
        },
        { pressProps: D } = (0, u.d)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && y();
            },
            onPress(e) {
                ("touch" === e.pointerType || "pen" === e.pointerType) && y();
            },
        });
    return (0, i.v)(D, h);
}
function c(e, a, t) {
    let n = (0, r.N$)(e, { tabbable: !0 }),
        i = n.nextNode(),
        o = null,
        l = 1 / 0;
    for (; i; ) {
        let e = i.getBoundingClientRect().left - a,
            r = Math.abs(e);
        Math.sign(e) === t && r < l && ((o = i), (l = r)), (i = n.nextNode());
    }
    return o;
}
