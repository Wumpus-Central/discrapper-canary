r.d(n, {
    Zy: function () {
        return d;
    },
    jW: function () {
        return p;
    },
    vq: function () {
        return f;
    }
});
var i = r(773603);
var a = r(570140),
    o = r(40851),
    s = r(358085),
    l = r(601993),
    u = r(981631);
function c(e) {
    a.Z.dispatch({
        type: 'CONTEXT_MENU_OPEN',
        contextMenu: e
    });
}
function d(e) {
    {
        let { flushSync: n } = r(995295);
        n(() => {
            a.Z.wait(() => {
                a.Z.dispatch({ type: 'CONTEXT_MENU_CLOSE' }).finally(e);
            });
        });
    }
}
function f(e, n, r, i) {
    var a, d, f;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let p = 0,
        h = 0;
    if (('pageX' in e && ((p = e.pageX), (h = e.pageY)), 0 === p && 0 === h)) {
        let n = null === (a = e.target) || void 0 === a ? void 0 : a.getBoundingClientRect(),
            { left: r = 0, top: i = 0, width: o = 0, height: s = 0 } = null != n ? n : {};
        (p = r + o / 2), (h = i + s / 2);
    }
    let _ = {
        render: n,
        renderLazy: i,
        target: null !== (d = e.target) && void 0 !== d ? d : e.currentTarget,
        rect: new DOMRect(p, h, 0, 0),
        config: {
            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : u.IlC.APP,
            ...r
        }
    };
    if ((null == r ? void 0 : r.enableSpellCheck) && (0, s.isDesktop)()) {
        let e = () => {
                n(), c(_);
            },
            n = (0, l.RD)(e);
    } else e.preventDefault(), c(_);
}
function p(e, n, r) {
    f(e, void 0, r, n);
}
