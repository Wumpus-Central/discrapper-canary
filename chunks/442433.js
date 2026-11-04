var i = n(73153),
    r = n(267102),
    a = n(723702),
    s = n(334604),
    l = n(652215);
function o(e) {
    i.h.dispatch({ type: "CONTEXT_MENU_OPEN", contextMenu: e });
}
function d(e, t, n, i) {
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let d = 0,
        c = 0;
    if (("pageX" in e && ((d = e.pageX), (c = e.pageY)), 0 === d && 0 === c)) {
        let t = e.target,
            n = t?.ownerDocument.defaultView?.getSelection();
        if (null != n && n.rangeCount > 0 && null != t) {
            let e = n.getRangeAt(0);
            if (t.contains(e.commonAncestorContainer)) {
                let t = e.getBoundingClientRect();
                0 !== t.height && ((d = t.left), (c = t.bottom));
            }
        }
        if (0 === d && 0 === c) {
            let { left: e = 0, top: n = 0, width: i = 0, height: r = 0 } = t?.getBoundingClientRect() ?? {};
            ((d = e + i / 2), (c = n + r / 2));
        }
    }
    let u = {
            render: t,
            renderLazy: i,
            target: e.target ?? e.currentTarget,
            rect: new DOMRect(d, c, 0, 0),
            config: { context: __OVERLAY__ ? l.BRT.OVERLAY : ((0, r.zd)() ?? l.BRT.APP), ...n },
        },
        _ = "nativeEvent" in e ? e.nativeEvent : e;
    if (n?.enableSpellCheck && (0, a.xl)() && _.isTrusted) {
        let e = (0, s.nL)(function () {
            (e(), o(u));
        });
    } else (e.preventDefault(), o(u));
}
n.d(
    t,
    {},
    {
        L3: function (e, t, n) {
            d(e, void 0, n, t);
        },
        Z_: function (e) {
            {
                let { flushSync: t } = n(333007);
                t(() => {
                    i.h.dispatch({ type: "CONTEXT_MENU_CLOSE" }).finally(e);
                });
            }
        },
        jA: d,
    },
);
