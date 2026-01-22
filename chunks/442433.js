n.d(t, {
    L3: () => p,
    Z_: () => d,
    jA: () => f,
}),
    n(492834);
var r = n(73153),
    i = n(267102),
    a = n(723702),
    s = n(454235),
    o = n(652215);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e) {
    r.h.dispatch({
        type: "CONTEXT_MENU_OPEN",
        contextMenu: e,
    });
}

function d(e) {
    {
        let { flushSync: t } = n(340287);
        t(() => {
            r.h.wait(() => {
                r.h
                    .dispatch({
                        type: "CONTEXT_MENU_CLOSE",
                    })
                    .finally(e);
            });
        });
    }
}

function f(e, t, n, r) {
    var l, d, f;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let p = 0,
        _ = 0;
    if (("pageX" in e && ((p = e.pageX), (_ = e.pageY)), 0 === p && 0 === _)) {
        let t = null == (f = e.target) ? void 0 : f.getBoundingClientRect(),
            { left: n = 0, top: r = 0, width: i = 0, height: a = 0 } = null != t ? t : {};
        (p = n + i / 2), (_ = r + a / 2);
    }
    let h = {
        render: t,
        renderLazy: r,
        target: null != (l = e.target) ? l : e.currentTarget,
        rect: new DOMRect(p, _, 0, 0),
        config: c(
            {
                context: __OVERLAY__ ? o.BRT.OVERLAY : null != (d = (0, i.zd)()) ? d : o.BRT.APP,
            },
            n,
        ),
    };
    if ((null == n ? void 0 : n.enableSpellCheck) && (0, a.isDesktop)()) {
        let e = () => {
                t(), u(h);
            },
            t = (0, s.nL)(e);
    } else e.preventDefault(), u(h);
}

function p(e, t, n) {
    f(e, void 0, n, t);
}
