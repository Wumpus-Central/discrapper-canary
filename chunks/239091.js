n.d(t, {
    Zy: () => d,
    jW: () => f,
    vq: () => _
}),
    n(457542);
var r = n(570140),
    i = n(40851),
    a = n(358085),
    o = n(601993),
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
        let { flushSync: t } = n(867309);
        t(() => {
            r.Z.wait(() => {
                r.Z.dispatch({ type: 'CONTEXT_MENU_CLOSE' }).finally(e);
            });
        });
    }
}
function _(e, t, n, r) {
    var l, d, _;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let f = 0,
        p = 0;
    if (('pageX' in e && ((f = e.pageX), (p = e.pageY)), 0 === f && 0 === p)) {
        let t = null == (l = e.target) ? void 0 : l.getBoundingClientRect(),
            { left: n = 0, top: r = 0, width: i = 0, height: a = 0 } = null != t ? t : {};
        (f = n + i / 2), (p = r + a / 2);
    }
    let h = {
        render: t,
        renderLazy: r,
        target: null != (d = e.target) ? d : e.currentTarget,
        rect: new DOMRect(f, p, 0, 0),
        config: c({ context: __OVERLAY__ ? s.IlC.OVERLAY : null != (_ = (0, i.GB)()) ? _ : s.IlC.APP }, n)
    };
    if ((null == n ? void 0 : n.enableSpellCheck) && (0, a.isDesktop)()) {
        let e = () => {
                t(), u(h);
            },
            t = (0, o.RD)(e);
    } else e.preventDefault(), u(h);
}
function f(e, t, n) {
    _(e, void 0, n, t);
}
