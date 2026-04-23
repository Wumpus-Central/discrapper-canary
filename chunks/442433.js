"use strict";
n.d(t, { L3: () => u, Z_: () => d, jA: () => _ });
var i = n(228366),
    r = n(267102),
    s = n(723702),
    a = n(454235),
    o = n(652215);
function l(e) {
    i.h.dispatch({ type: "CONTEXT_MENU_OPEN", contextMenu: e });
}
function d(e) {
    {
        let { flushSync: t } = n(340287);
        t(() => {
            i.h.wait(() => {
                i.h.dispatch({ type: "CONTEXT_MENU_CLOSE" }).finally(e);
            });
        });
    }
}
function _(e, t, n, i) {
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let d = 0,
        _ = 0;
    if (("pageX" in e && ((d = e.pageX), (_ = e.pageY)), 0 === d && 0 === _)) {
        let { left: t = 0, top: n = 0, width: i = 0, height: r = 0 } = e.target?.getBoundingClientRect() ?? {};
        (d = t + i / 2), (_ = n + r / 2);
    }
    let u = {
        render: t,
        renderLazy: i,
        target: e.target ?? e.currentTarget,
        rect: new DOMRect(d, _, 0, 0),
        config: { context: __OVERLAY__ ? o.BRT.OVERLAY : ((0, r.zd)() ?? o.BRT.APP), ...n },
    };
    if (n?.enableSpellCheck && (0, s.isDesktop)()) {
        let e = (0, a.nL)(() => {
            e(), l(u);
        });
    } else e.preventDefault(), l(u);
}
function u(e, t, n) {
    _(e, void 0, n, t);
}
