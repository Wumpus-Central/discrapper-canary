t.d(a, { P: () => u });
var n = t(693321),
    r = t(318473),
    i = t(402112),
    l = t(64700),
    o = t(775133);
function u(e, a, t) {
    let { direction: u } = (0, i.Y)(),
        d = (0, l.useMemo)(() => (0, n.C7)(a), [a]),
        c = () => {
            var e;
            if (!a.current) return;
            let t = null == (e = window.event) ? void 0 : e.target,
                r = (0, n.N$)(a.current, { tabbable: !0 });
            if ((t && ((r.currentNode = t), (t = r.previousNode())), !t)) {
                let e;
                do (e = r.lastChild()) && (t = e);
                while (e);
            }
            for (; null == t ? void 0 : t.hasAttribute("data-placeholder"); ) {
                let e = r.previousNode();
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
    return (0, r.v)(m, {
        onKeyDown: (n) => {
            if (
                n.currentTarget.contains(n.target) &&
                (n.altKey &&
                    ("ArrowDown" === n.key || "ArrowUp" === n.key) &&
                    "setOpen" in e &&
                    (n.preventDefault(), n.stopPropagation(), e.setOpen(!0)),
                !t)
            )
                switch (n.key) {
                    case "ArrowLeft":
                        if ((n.preventDefault(), n.stopPropagation(), "rtl" === u)) {
                            if (a.current) {
                                let e = n.target,
                                    t = s(a.current, e.getBoundingClientRect().left, -1);
                                t && t.focus();
                            }
                        } else d.focusPrevious();
                        break;
                    case "ArrowRight":
                        if ((n.preventDefault(), n.stopPropagation(), "rtl" === u)) {
                            if (a.current) {
                                let e = n.target,
                                    t = s(a.current, e.getBoundingClientRect().left, 1);
                                t && t.focus();
                            }
                        } else d.focusNext();
                }
        },
    });
}
function s(e, a, t) {
    let r = (0, n.N$)(e, { tabbable: !0 }),
        i = r.nextNode(),
        l = null,
        o = 1 / 0;
    for (; i; ) {
        let e = i.getBoundingClientRect().left - a,
            n = Math.abs(e);
        Math.sign(e) === t && n < o && ((l = i), (o = n)), (i = r.nextNode());
    }
    return l;
}
