"use strict";
n.d(t, { P: () => l });
var r = n(13163),
    i = n(803082),
    a = n(853590),
    s = n(64700),
    o = n(8321);
function l(e, t, n) {
    let { direction: l } = (0, a.Y)(),
        c = (0, s.useMemo)(() => (0, r.C7)(t), [t]),
        d = (r) => {
            if (
                r.currentTarget.contains(r.target) &&
                (r.altKey &&
                    ("ArrowDown" === r.key || "ArrowUp" === r.key) &&
                    "setOpen" in e &&
                    (r.preventDefault(), r.stopPropagation(), e.setOpen(!0)),
                !n)
            )
                switch (r.key) {
                    case "ArrowLeft":
                        if ((r.preventDefault(), r.stopPropagation(), "rtl" === l)) {
                            if (t.current) {
                                let e = r.target,
                                    n = u(t.current, e.getBoundingClientRect().left, -1);
                                n && n.focus();
                            }
                        } else c.focusPrevious();
                        break;
                    case "ArrowRight":
                        if ((r.preventDefault(), r.stopPropagation(), "rtl" === l)) {
                            if (t.current) {
                                let e = r.target,
                                    n = u(t.current, e.getBoundingClientRect().left, 1);
                                n && n.focus();
                            }
                        } else c.focusNext();
                }
        },
        _ = () => {
            var e;
            if (!t.current) return;
            let n = null == (e = window.event) ? void 0 : e.target,
                i = (0, r.N$)(t.current, { tabbable: !0 });
            if ((n && ((i.currentNode = n), (n = i.previousNode())), !n)) {
                let e;
                do (e = i.lastChild()) && (n = e);
                while (e);
            }
            for (; null == n ? void 0 : n.hasAttribute("data-placeholder"); ) {
                let e = i.previousNode();
                if (e && e.hasAttribute("data-placeholder")) n = e;
                else break;
            }
            n && n.focus();
        },
        { pressProps: f } = (0, o.d)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && _();
            },
            onPress(e) {
                ("touch" === e.pointerType || "pen" === e.pointerType) && _();
            },
        });
    return (0, i.v)(f, { onKeyDown: d });
}
function u(e, t, n) {
    let i = (0, r.N$)(e, { tabbable: !0 }),
        a = i.nextNode(),
        s = null,
        o = 1 / 0;
    for (; a; ) {
        let e = a.getBoundingClientRect().left - t,
            r = Math.abs(e);
        Math.sign(e) === n && r < o && ((s = a), (o = r)), (a = i.nextNode());
    }
    return s;
}
