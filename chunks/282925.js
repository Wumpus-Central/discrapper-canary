n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(921944),
    a = n(388032),
    s = n(784168),
    l = n(905287);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { onDismissClick: t, onCheckItOutClick: n } = e;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)('img', {
                src: l.Z,
                className: s.image,
                alt: 'Nitroween Gift Box'
            }),
            (0, r.jsx)(i.olH, {
                onClick: t,
                withCircleBackground: !0,
                className: s.closeButton,
                innerClassName: s.popoutCloseButton
            }),
            (0, r.jsxs)('div', {
                className: s.body,
                children: [
                    (0, r.jsx)(i.X6q, {
                        className: s.text,
                        variant: 'heading-sm/semibold',
                        children: a.NW.string(a.t['YMI+UV'])
                    }),
                    (0, r.jsx)(i.Text, {
                        className: s.text,
                        variant: 'text-sm/normal',
                        children: a.NW.string(a.t.BIBwbm)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s.buttonContainer,
                children: (0, r.jsx)(i.zxk, {
                    className: s.ctaButton,
                    color: i.zxk.Colors.BRAND_INVERTED,
                    onClick: () => n(),
                    children: a.NW.string(a.t.RzWDqa)
                })
            }),
            (0, r.jsx)('div', { className: s.pointer })
        ]
    });
}
function p(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: a } = e;
    return (0, r.jsx)(i.yRy, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(
                _,
                f(u({}, e), {
                    onDismissClick: () => {
                        t(), a(o.L.USER_DISMISS);
                    },
                    onCheckItOutClick: () => {
                        n(), t(), a(o.L.TAKE_ACTION);
                    }
                })
            ),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, r.jsx)('div', { className: s.popoutTarget })
    });
}
