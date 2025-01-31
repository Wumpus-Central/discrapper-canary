n.d(t, {
    Zy: () => u,
    jW: () => d,
    vq: () => c
}),
    n(773603);
var i = n(570140),
    r = n(40851),
    a = n(358085),
    s = n(601993),
    o = n(981631);
function l(e) {
    i.Z.dispatch({
        type: 'CONTEXT_MENU_OPEN',
        contextMenu: e
    });
}
function u(e) {
    {
        let { flushSync: t } = n(995295);
        t(() => {
            i.Z.wait(() => {
                i.Z.dispatch({ type: 'CONTEXT_MENU_CLOSE' }).finally(e);
            });
        });
    }
}
function c(e, t, n, i) {
    var u, c, d;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let f = 0,
        _ = 0;
    if (('pageX' in e && ((f = e.pageX), (_ = e.pageY)), 0 === f && 0 === _)) {
        let t = null === (u = e.target) || void 0 === u ? void 0 : u.getBoundingClientRect(),
            { left: n = 0, top: i = 0, width: r = 0, height: a = 0 } = null != t ? t : {};
        (f = n + r / 2), (_ = i + a / 2);
    }
    let p = {
        render: t,
        renderLazy: i,
        target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
        rect: new DOMRect(f, _, 0, 0),
        config: {
            context: __OVERLAY__ ? o.IlC.OVERLAY : null !== (d = (0, r.GB)()) && void 0 !== d ? d : o.IlC.APP,
            ...n
        }
    };
    if ((null == n ? void 0 : n.enableSpellCheck) && (0, a.isDesktop)()) {
        let e = () => {
                t(), l(p);
            },
            t = (0, s.RD)(e);
    } else e.preventDefault(), l(p);
}
function d(e, t, n) {
    c(e, void 0, n, t);
}
