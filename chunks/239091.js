n.d(t, {
    Zy: () => d,
    jW: () => _,
    vq: () => f
}),
    n(773603);
var r = n(570140),
    i = n(40851),
    o = n(358085),
    a = n(601993),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e) {
    r.Z.dispatch({
        type: 'CONTEXT_MENU_OPEN',
        contextMenu: e
    });
}
function d(e) {
    {
        let { flushSync: t } = n(995295);
        t(() => {
            r.Z.wait(() => {
                r.Z.dispatch({ type: 'CONTEXT_MENU_CLOSE' }).finally(e);
            });
        });
    }
}
function f(e, t, n, r) {
    var l, d, f;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let _ = 0,
        p = 0;
    if (('pageX' in e && ((_ = e.pageX), (p = e.pageY)), 0 === _ && 0 === p)) {
        let t = null == (l = e.target) ? void 0 : l.getBoundingClientRect(),
            { left: n = 0, top: r = 0, width: i = 0, height: o = 0 } = null != t ? t : {};
        (_ = n + i / 2), (p = r + o / 2);
    }
    let h = {
        render: t,
        renderLazy: r,
        target: null != (d = e.target) ? d : e.currentTarget,
        rect: new DOMRect(_, p, 0, 0),
        config: c({ context: __OVERLAY__ ? s.IlC.OVERLAY : null != (f = (0, i.GB)()) ? f : s.IlC.APP }, n)
    };
    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.isDesktop)()) {
        let e = () => {
                t(), u(h);
            },
            t = (0, a.RD)(e);
    } else e.preventDefault(), u(h);
}
function _(e, t, n) {
    f(e, void 0, n, t);
}
