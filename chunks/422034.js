r.d(n, {
    O: function () {
        return m;
    },
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(518950),
    d = r(357355),
    f = r(182294),
    p = r(388032),
    h = r(811905);
function _(e) {
    let { smallerText: n, className: r, textColor: o, isMarketingPageV2Enabled: c } = e,
        _ = (0, l.e7)([d.Z], () => d.Z.affinities.slice(0, 3).reverse()),
        g = _.map((e, n) =>
            (0, i.jsx)(
                m,
                {
                    affinity: e,
                    applyMask: n !== _.length - 1,
                    size: f.EF.SIZE_32
                },
                e.id
            )
        ),
        E = (e) => (null != e.globalName ? e.globalName : e.username),
        v = a.useMemo(
            () =>
                3 === _.length
                    ? p.intl.formatToPlainString(p.t.c7ETJC, { username: E(_[2]) })
                    : 2 === _.length
                      ? p.intl.formatToPlainString(p.t.st8Rh4, {
                            username: E(_[1]),
                            otherUsername: E(_[0])
                        })
                      : 1 === _.length
                        ? p.intl.formatToPlainString(p.t.dpjXPD, { username: E(_[0]) })
                        : '',
            [_]
        );
    if (0 === _.length) return null;
    function y() {
        return n || c
            ? (0, i.jsx)(u.Text, {
                  variant: c ? 'text-sm/normal' : 'text-lg/medium',
                  color: o,
                  children: v
              })
            : (0, i.jsx)(u.Heading, {
                  variant: 'heading-xl/medium',
                  color: o,
                  children: v
              });
    }
    return (0, i.jsxs)('div', {
        className: s()(h.container, r, { [h.v2Container]: c }),
        children: [
            (0, i.jsx)('div', {
                className: h.iconContainer,
                children: g
            }),
            (0, i.jsx)('div', {
                className: h.textContainer,
                children: (0, i.jsx)(y, {})
            })
        ]
    });
}
function m(e) {
    let { affinity: n, applyMask: r, size: a } = e,
        { avatarSrc: o, eventHandlers: l } = (0, c.Z)({
            user: n,
            size: a,
            animateOnHover: !0
        });
    return (0, i.jsx)(u.Avatar, {
        className: s()(h.icon, { [h.mask]: r }),
        src: o,
        'aria-label': n.username,
        size: a,
        ...l
    });
}
