n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(921944),
    s = n(388032),
    l = n(784168),
    c = n(905287);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { onDismissClick: t, onCheckItOutClick: n } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)('img', {
                src: c.Z,
                className: l.image,
                alt: 'Nitroween Gift Box'
            }),
            (0, r.jsx)(o.olH, {
                onClick: t,
                withCircleBackground: !0,
                className: l.closeButton,
                innerClassName: l.popoutCloseButton
            }),
            (0, r.jsxs)('div', {
                className: l.body,
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: l.text,
                        variant: 'heading-sm/semibold',
                        children: s.intl.string(s.t['YMI+UV'])
                    }),
                    (0, r.jsx)(o.Text, {
                        className: l.text,
                        variant: 'text-sm/normal',
                        children: s.intl.string(s.t.BIBwbm)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: l.buttonContainer,
                children: (0, r.jsx)(o.zxk, {
                    className: l.ctaButton,
                    color: o.zxk.Colors.BRAND_INVERTED,
                    onClick: () => n(),
                    children: s.intl.string(s.t.RzWDqa)
                })
            }),
            (0, r.jsx)('div', { className: l.pointer })
        ]
    });
}
function h(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: s } = e,
        c = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: c,
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(
                p,
                _(d({}, e), {
                    onDismissClick: () => {
                        t(), s(a.L.USER_DISMISS);
                    },
                    onCheckItOutClick: () => {
                        n(), t(), s(a.L.TAKE_ACTION);
                    }
                })
            ),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () =>
            (0, r.jsx)('div', {
                className: l.popoutTarget,
                ref: c
            })
    });
}
