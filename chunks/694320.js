n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(436774),
    _ = n(592125),
    p = n(944486),
    h = n(626135),
    m = n(981631),
    g = n(388032),
    E = n(569408);
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
    (0, c.ZDy)(async () => {
        let { default: e } = await n.e("3289").then(n.bind(n, 682609));
        return (t) => (0, r.jsx)(e, y({ channel: null }, t));
    });
}
function v(e) {
    let { className: t, iconOnly: n } = e,
        a = (0, s.e7)([p.Z, _.Z], () => {
            let e = _.Z.getChannel(p.Z.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? m.ZY5.DM_CHANNEL : m.ZY5.GUILD_CHANNEL;
        }),
        { analyticsLocations: b } = (0, d.ZP)(u.Z.PREMIUM_UPSELL);
    i.useEffect(() => {
        h.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
            type: "longer messages inline",
            location: {
                location_page: a,
                location_section: m.jXE.CHANNEL_TEXT_AREA,
            },
            location_stack: b,
        });
    }, [a, b]);
    let y = () =>
            (0, r.jsxs)("div", {
                className: o()(E.root, t),
                children: [
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        className: E.premium,
                        color: f.JX.PREMIUM_TIER_2,
                    }),
                    (0, r.jsx)(c.Text, {
                        className: E.text,
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.BNAIBU, { onLearnMore: O }),
                    }),
                ],
            }),
        v = () =>
            (0, r.jsx)(c.P3F, {
                className: E.iconOnly,
                onClick: () => O(),
                children: (0, r.jsx)(l.u, {
                    text: g.intl.string(g.t["+eFIjX"]),
                    position: "top",
                    children: (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: E.premium,
                    }),
                }),
            });
    return n ? v() : y();
}
