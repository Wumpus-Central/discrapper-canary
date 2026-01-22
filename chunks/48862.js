n.d(t, {
    A: () => A,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(793574),
    d = n(688810),
    f = n(404374),
    p = n(734057),
    _ = n(309010),
    h = n(954571),
    m = n(652215),
    g = n(985018),
    E = n(133440);

function b(e, t, n) {
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

function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}

function O() {
    (0, c.mMO)(async () => {
        let { default: e } = await n.e("66920").then(n.bind(n, 220763));
        return (t) =>
            (0, r.jsx)(
                e,
                y(
                    {
                        channel: null,
                    },
                    t,
                ),
            );
    });
}

function A(e) {
    let { className: t, iconOnly: n } = e,
        a = (0, o.bG)([_.A, p.A], () => {
            let e = p.A.getChannel(_.A.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: b } = (0, d.Ay)(u.A.PREMIUM_UPSELL);
    i.useEffect(() => {
        h.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            type: "longer messages inline",
            location: {
                location_page: a,
                location_section: m.JJy.CHANNEL_TEXT_AREA,
            },
            location_stack: b,
        });
    }, [a, b]);
    let y = () =>
            (0, r.jsxs)("div", {
                className: s()(E.zr, t),
                children: [
                    (0, r.jsx)(c.tvc, {
                        size: "md",
                        className: E.M2,
                        color: f.k0.PREMIUM_TIER_2,
                    }),
                    (0, r.jsx)(c.Text, {
                        className: E.Qq,
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.BNAIBU, {
                            onLearnMore: O,
                        }),
                    }),
                ],
            }),
        A = () =>
            (0, r.jsx)(c.DUT, {
                className: E.e7,
                onClick: () => O(),
                children: (0, r.jsx)(l.m, {
                    text: g.intl.string(g.t["+eFIjX"]),
                    position: "top",
                    children: (0, r.jsx)(c.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: E.M2,
                    }),
                }),
            });
    return n ? A() : y();
}
