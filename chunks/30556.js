t.d(n, {
    H: () => p,
    v: () => f,
});
var l = t(951288),
    i = t(647438),
    r = t(481060),
    o = t(493683),
    s = t(732380),
    a = t(228168),
    c = t(388032);
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
                r = Object.keys(e);
            for (l = 0; l < r.length; l++) (t = r[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++)
            (t = r[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
    }
    return i;
}
function m(e) {
    let { userId: n, onClose: t } = e,
        l = i.useCallback(() => {
            o.Z.openPrivateChannel({ recipientIds: n }), null == t || t(), (0, r.pTH)();
        }, [n, t]);
    return {
        action: a.yM.SEND_MESSAGE,
        icon: r.kBi,
        onClick: l,
        text: c.intl.string(c.t.zROXER),
    };
}
function p(e) {
    var { userId: n, onClose: t, variant: i = "primary" } = e,
        r = u(e, ["userId", "onClose", "variant"]);
    let o = m({
        userId: n,
        onClose: t,
    });
    return (0, l.jsx)(s.O1, d({ variant: i }, o, r));
}
function f(e) {
    var { userId: n, onClose: t, variant: i = "primary" } = e,
        r = u(e, ["userId", "onClose", "variant"]);
    let o = m({
            userId: n,
            onClose: t,
        }),
        { text: a } = o,
        c = u(o, ["text"]);
    return (0, l.jsx)(
        s.pt,
        d(
            {
                tooltipText: a,
                "aria-label": a,
                variant: i,
            },
            c,
            r,
        ),
    );
}
