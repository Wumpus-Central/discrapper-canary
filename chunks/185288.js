t.d(a, { P: () => u });
var r = t(13163),
    n = t(803082),
    i = t(853590),
    l = t(64700),
    o = t(8321);
function u(e, a, t) {
    let { direction: u } = (0, i.Y)(),
        d = (0, l.useMemo)(() => (0, r.C7)(a), [a]),
        c = () => {
            var e;
            if (!a.current) return;
            let t = null == (e = window.event) ? void 0 : e.target,
                n = (0, r.N$)(a.current, { tabbable: !0 });
            if ((t && ((n.currentNode = t), (t = n.previousNode())), !t)) {
                let e;
                do (e = n.lastChild()) && (t = e);
                while (e);
            }
            for (; null == t ? void 0 : t.hasAttribute("data-placeholder"); ) {
                let e = n.previousNode();
                if (e && e.hasAttribute("data-placeholder")) t = e;
                else break;
            }
            t && t.focus();
        },
        { pressProps: m } = (0, o.d)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && c();
            },
            onPress(e) {
                ("touch" === e.pointerType || "pen" === e.pointerType) && c();
            },
        });
    return (0, n.v)(m, {
        onKeyDown: (r) => {
            if (
                r.currentTarget.contains(r.target) &&
                (r.altKey &&
                    ("ArrowDown" === r.key || "ArrowUp" === r.key) &&
                    "setOpen" in e &&
                    (r.preventDefault(), r.stopPropagation(), e.setOpen(!0)),
                !t)
            )
                switch (r.key) {
                    case "ArrowLeft":
                        if ((r.preventDefault(), r.stopPropagation(), "rtl" === u)) {
                            if (a.current) {
                                let e = r.target,
                                    t = s(a.current, e.getBoundingClientRect().left, -1);
                                t && t.focus();
                            }
                        } else d.focusPrevious();
                        break;
                    case "ArrowRight":
                        if ((r.preventDefault(), r.stopPropagation(), "rtl" === u)) {
                            if (a.current) {
                                let e = r.target,
                                    t = s(a.current, e.getBoundingClientRect().left, 1);
                                t && t.focus();
                            }
                        } else d.focusNext();
                }
        },
    });
}
function s(e, a, t) {
    let n = (0, r.N$)(e, { tabbable: !0 }),
        i = n.nextNode(),
        l = null,
        o = 1 / 0;
    for (; i; ) {
        let e = i.getBoundingClientRect().left - a,
            r = Math.abs(e);
        Math.sign(e) === t && r < o && ((l = i), (o = r)), (i = n.nextNode());
    }
    return l;
}
