n.d(t, {
    O: () => g,
    Z: () => m
}),
    n(583741);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(518950),
    u = n(357355),
    d = n(182294),
    f = n(388032),
    _ = n(556921);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { smallerText: t, className: n, textColor: a, isMarketingPageV2Enabled: c } = e,
        p = (0, s.e7)([u.Z], () => u.Z.affinities.slice(0, 3).reverse()),
        h = p.map((e, t) =>
            (0, r.jsx)(
                g,
                {
                    affinity: e,
                    applyMask: t !== p.length - 1,
                    size: d.EF.SIZE_32
                },
                e.id
            )
        ),
        m = (e) => (null != e.globalName ? e.globalName : e.username),
        E = i.useMemo(
            () =>
                3 === p.length
                    ? f.intl.formatToPlainString(f.t.c7ETJC, { username: m(p[2]) })
                    : 2 === p.length
                      ? f.intl.formatToPlainString(f.t.st8Rh4, {
                            username: m(p[1]),
                            otherUsername: m(p[0])
                        })
                      : 1 === p.length
                        ? f.intl.formatToPlainString(f.t.dpjXPD, { username: m(p[0]) })
                        : '',
            [p]
        );
    if (0 === p.length) return null;
    function b() {
        return t || c
            ? (0, r.jsx)(l.Text, {
                  variant: c ? 'text-sm/normal' : 'text-lg/medium',
                  color: a,
                  children: E
              })
            : (0, r.jsx)(l.X6q, {
                  variant: 'heading-xl/medium',
                  color: a,
                  children: E
              });
    }
    return (0, r.jsxs)('div', {
        className: o()(_.container, n, { [_.v2Container]: c }),
        children: [
            (0, r.jsx)('div', {
                className: _.iconContainer,
                children: h
            }),
            (0, r.jsx)('div', {
                className: _.textContainer,
                children: (0, r.jsx)(b, {})
            })
        ]
    });
}
function g(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: a, eventHandlers: s } = (0, c.Z)({
            user: t,
            size: i,
            animateOnHover: !0
        });
    return (0, r.jsx)(
        l.qEK,
        h(
            {
                className: o()(_.icon, { [_.mask]: n }),
                src: a,
                'aria-label': t.username,
                size: i
            },
            s
        )
    );
}
