n.d(t, {
    O: () => h,
    Z: () => p
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(518950),
    c = n(357355),
    d = n(182294),
    f = n(388032),
    _ = n(952670);
function p(e) {
    let { smallerText: t, className: n, textColor: a, isMarketingPageV2Enabled: u } = e,
        p = (0, o.e7)([c.Z], () => c.Z.affinities.slice(0, 3).reverse()),
        m = p.map((e, t) =>
            (0, i.jsx)(
                h,
                {
                    affinity: e,
                    applyMask: t !== p.length - 1,
                    size: d.EF.SIZE_32
                },
                e.id
            )
        ),
        g = (e) => (null != e.globalName ? e.globalName : e.username),
        E = r.useMemo(
            () =>
                3 === p.length
                    ? f.intl.formatToPlainString(f.t.c7ETJC, { username: g(p[2]) })
                    : 2 === p.length
                      ? f.intl.formatToPlainString(f.t.st8Rh4, {
                            username: g(p[1]),
                            otherUsername: g(p[0])
                        })
                      : 1 === p.length
                        ? f.intl.formatToPlainString(f.t.dpjXPD, { username: g(p[0]) })
                        : '',
            [p]
        );
    if (0 === p.length) return null;
    function v() {
        return t || u
            ? (0, i.jsx)(l.Text, {
                  variant: u ? 'text-sm/normal' : 'text-lg/medium',
                  color: a,
                  children: E
              })
            : (0, i.jsx)(l.X6q, {
                  variant: 'heading-xl/medium',
                  color: a,
                  children: E
              });
    }
    return (0, i.jsxs)('div', {
        className: s()(_.container, n, { [_.v2Container]: u }),
        children: [
            (0, i.jsx)('div', {
                className: _.iconContainer,
                children: m
            }),
            (0, i.jsx)('div', {
                className: _.textContainer,
                children: (0, i.jsx)(v, {})
            })
        ]
    });
}
function h(e) {
    let { affinity: t, applyMask: n, size: r } = e,
        { avatarSrc: a, eventHandlers: o } = (0, u.Z)({
            user: t,
            size: r,
            animateOnHover: !0
        });
    return (0, i.jsx)(l.qEK, {
        className: s()(_.icon, { [_.mask]: n }),
        src: a,
        'aria-label': t.username,
        size: r,
        ...o
    });
}
