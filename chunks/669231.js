t.d(a, { H: () => l });
var u = t(750528),
    n = t(43341),
    r = t(594886),
    i = t(647438),
    o = t(647199);
function l(e, a, t) {
    let { direction: l } = (0, r.j)(),
        d = (0, i.useMemo)(() => (0, u.E7)(a), [a]),
        c = () => {
            var e;
            if (!a.current) return;
            let t = null == (e = window.event) ? void 0 : e.target,
                n = (0, u.QL)(a.current, { tabbable: !0 });
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
        { pressProps: m } = (0, o.r)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && c();
            },
            onPress(e) {
                ("touch" === e.pointerType || "pen" === e.pointerType) && c();
            },
        });
    return (0, n.d)(m, {
        onKeyDown: (u) => {
            if (
                u.currentTarget.contains(u.target) &&
                (u.altKey &&
                    ("ArrowDown" === u.key || "ArrowUp" === u.key) &&
                    "setOpen" in e &&
                    (u.preventDefault(), u.stopPropagation(), e.setOpen(!0)),
                !t)
            )
                switch (u.key) {
                    case "ArrowLeft":
                        if ((u.preventDefault(), u.stopPropagation(), "rtl" === l)) {
                            if (a.current) {
                                let e = u.target,
                                    t = s(a.current, e.getBoundingClientRect().left, -1);
                                t && t.focus();
                            }
                        } else d.focusPrevious();
                        break;
                    case "ArrowRight":
                        if ((u.preventDefault(), u.stopPropagation(), "rtl" === l)) {
                            if (a.current) {
                                let e = u.target,
                                    t = s(a.current, e.getBoundingClientRect().left, 1);
                                t && t.focus();
                            }
                        } else d.focusNext();
                }
        },
    });
}
function s(e, a, t) {
    let n = (0, u.QL)(e, { tabbable: !0 }),
        r = n.nextNode(),
        i = null,
        o = 1 / 0;
    for (; r; ) {
        let e = r.getBoundingClientRect().left - a,
            u = Math.abs(e);
        Math.sign(e) === t && u < o && ((i = r), (o = u)), (r = n.nextNode());
    }
    return i;
}
