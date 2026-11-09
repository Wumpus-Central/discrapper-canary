var i = n(73153),
    r = n(267102),
    a = n(723702),
    s = n(334604),
    l = n(652215);
let o = null;
function d(e) {
    i.h.dispatch({ type: "CONTEXT_MENU_OPEN", contextMenu: e });
}
function c(e, t, n, i) {
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let c = 0,
        u = 0;
    if (("pageX" in e && ((c = e.pageX), (u = e.pageY)), 0 === c && 0 === u)) {
        let t = e.target,
            n = t?.ownerDocument.defaultView?.getSelection();
        if (null != n && n.rangeCount > 0 && null != t) {
            let e = n.getRangeAt(0);
            if (t.contains(e.commonAncestorContainer)) {
                let t = e.getBoundingClientRect();
                0 !== t.height && ((c = t.left), (u = t.bottom));
            }
        }
        if (0 === c && 0 === u) {
            let { left: e = 0, top: n = 0, width: i = 0, height: r = 0 } = t?.getBoundingClientRect() ?? {};
            ((c = e + i / 2), (u = n + r / 2));
        }
    }
    let _ = {
            render: t,
            renderLazy: i,
            target: e.target ?? e.currentTarget,
            rect: new DOMRect(c, u, 0, 0),
            config: { context: __OVERLAY__ ? l.BRT.OVERLAY : ((0, r.zd)() ?? l.BRT.APP), ...n },
        },
        E = "nativeEvent" in e ? e.nativeEvent : e;
    if (n?.enableSpellCheck && (0, a.xl)() && E.isTrusted) {
        o?.();
        let e = !1;
        function A() {
            return !e && ((e = !0), clearTimeout(t), n(), o === A && (o = null), !0);
        }
        let t = setTimeout(() => {
                A() && ((0, s.$x)(), d(_));
            }, 500),
            n = (0, s.nL)(() => {
                A() && d(_);
            });
        o = A;
    } else (o?.(), e.preventDefault(), d(_));
}
n.d(
    t,
    {},
    {
        L3: function (e, t, n) {
            c(e, void 0, n, t);
        },
        Z_: function (e) {
            o?.();
            {
                let { flushSync: t } = n(333007);
                t(() => {
                    i.h.dispatch({ type: "CONTEXT_MENU_CLOSE" }).finally(e);
                });
            }
        },
        jA: c,
    },
);
