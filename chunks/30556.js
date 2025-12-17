t.d(n, {
    H: () => m,
    v: () => p,
});
var l = t(54381),
    i = t(473749),
    o = t(481060),
    r = t(493683),
    a = t(475413),
    c = t(228168),
    s = t(388032);
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function u(e, n) {
    if (null == e) return {};
    var t,
        l,
        i = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = {},
                o = Object.keys(e);
            for (l = 0; l < o.length; l++) (t = o[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (l = 0; l < o.length; l++)
            (t = o[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
    }
    return i;
}
function f(e) {
    let { userId: n, onClose: t } = e,
        l = i.useCallback(() => {
            r.Z.openPrivateChannel({ recipientIds: n }), null == t || t(), (0, o.pTH)();
        }, [n, t]);
    return {
        action: c.yM.SEND_MESSAGE,
        icon: o.kBi,
        onClick: l,
        text: s.intl.string(s.t.zROXEV),
    };
}
function m(e) {
    var { userId: n, onClose: t, variant: i = "primary" } = e,
        o = u(e, ["userId", "onClose", "variant"]);
    let r = f({
        userId: n,
        onClose: t,
    });
    return (0, l.jsx)(a.i6, d({ variant: i }, r, o));
}
function p(e) {
    var { userId: n, onClose: t, variant: i = "primary" } = e,
        o = u(e, ["userId", "onClose", "variant"]);
    let r = f({
            userId: n,
            onClose: t,
        }),
        { text: c } = r,
        s = u(r, ["text"]);
    return (0, l.jsx)(
        a.ef,
        d(
            {
                tooltipText: c,
                "aria-label": c,
                variant: i,
            },
            s,
            o,
        ),
    );
}
