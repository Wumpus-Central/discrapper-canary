r.d(n, {
    O: function () {
        return m;
    },
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(518950),
    d = r(357355),
    f = r(182294),
    _ = r(388032),
    h = r(811905);
function p(e) {
    let { smallerText: n, className: r, textColor: s, isMarketingPageV2Enabled: c } = e,
        p = (0, l.e7)([d.Z], () => d.Z.affinities.slice(0, 3).reverse()),
        g = p.map((e, n) =>
            (0, i.jsx)(
                m,
                {
                    affinity: e,
                    applyMask: n !== p.length - 1,
                    size: f.EF.SIZE_32
                },
                e.id
            )
        ),
        E = (e) => (null != e.globalName ? e.globalName : e.username),
        v = a.useMemo(
            () =>
                3 === p.length
                    ? _.intl.formatToPlainString(_.t.c7ETJC, { username: E(p[2]) })
                    : 2 === p.length
                      ? _.intl.formatToPlainString(_.t.st8Rh4, {
                            username: E(p[1]),
                            otherUsername: E(p[0])
                        })
                      : 1 === p.length
                        ? _.intl.formatToPlainString(_.t.dpjXPD, { username: E(p[0]) })
                        : '',
            [p]
        );
    if (0 === p.length) return null;
    function I() {
        return n || c
            ? (0, i.jsx)(u.Text, {
                  variant: c ? 'text-sm/normal' : 'text-lg/medium',
                  color: s,
                  children: v
              })
            : (0, i.jsx)(u.Heading, {
                  variant: 'heading-xl/medium',
                  color: s,
                  children: v
              });
    }
    return (0, i.jsxs)('div', {
        className: o()(h.container, r, { [h.v2Container]: c }),
        children: [
            (0, i.jsx)('div', {
                className: h.iconContainer,
                children: g
            }),
            (0, i.jsx)('div', {
                className: h.textContainer,
                children: (0, i.jsx)(I, {})
            })
        ]
    });
}
function m(e) {
    let { affinity: n, applyMask: r, size: a } = e,
        { avatarSrc: s, eventHandlers: l } = (0, c.Z)({
            user: n,
            size: a,
            animateOnHover: !0
        });
    return (0, i.jsx)(u.Avatar, {
        className: o()(h.icon, { [h.mask]: r }),
        src: s,
        'aria-label': n.username,
        size: a,
        ...l
    });
}
