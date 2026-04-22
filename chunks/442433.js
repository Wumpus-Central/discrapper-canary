"use strict";
n.d(t, { L3: () => c, Z_: () => u, jA: () => d });
var r = n(73153),
    i = n(267102),
    s = n(723702),
    a = n(454235),
    o = n(652215);
function l(e) {
    r.h.dispatch({ type: "CONTEXT_MENU_OPEN", contextMenu: e });
}
function u(e) {
    {
        let { flushSync: t } = n(340287);
        t(() => {
            r.h.wait(() => {
                r.h.dispatch({ type: "CONTEXT_MENU_CLOSE" }).finally(e);
            });
        });
    }
}
function d(e, t, n, r) {
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let u = 0,
        d = 0;
    if (("pageX" in e && ((u = e.pageX), (d = e.pageY)), 0 === u && 0 === d)) {
        let { left: t = 0, top: n = 0, width: r = 0, height: i = 0 } = e.target?.getBoundingClientRect() ?? {};
        (u = t + r / 2), (d = n + i / 2);
    }
    let c = {
        render: t,
        renderLazy: r,
        target: e.target ?? e.currentTarget,
        rect: new DOMRect(u, d, 0, 0),
        config: { context: __OVERLAY__ ? o.BRT.OVERLAY : ((0, i.zd)() ?? o.BRT.APP), ...n },
    };
    if (n?.enableSpellCheck && (0, s.isDesktop)()) {
        let e = (0, a.nL)(() => {
            e(), l(c);
        });
    } else e.preventDefault(), l(c);
}
function c(e, t, n) {
    d(e, void 0, n, t);
}
