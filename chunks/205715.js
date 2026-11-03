s.d(t, { default: () => A });
var e = s(477900),
    a = s(582128),
    c = s(554146),
    n = s(62617);
function r(i) {
    let { alt: t, ariaLabel: s, ariaHidden: c, role: r, size: d = 64 } = i,
        l = a.useMemo(() => (0, n.H)({ width: d, height: d, intrinsicWidth: 64, intrinsicHeight: 64 }), [d]);
    return (0, e.jsx)("img", {
        style: l,
        src: "https://cdn.discordapp.com/assets/content/6f2327d812c75a6d27a59dd476f7e35db632b0e8ca8d3ced52d6ff0c867f6e5f.svg",
        className: (0, n.Z)(),
        alt: t,
        "aria-label": s,
        "aria-hidden": c,
        role: r ?? "img",
    });
}
var d = s(780171);
function l(i) {
    let { alt: t, ariaLabel: s, ariaHidden: c, role: r, size: d = 64 } = i,
        l = a.useMemo(() => (0, n.H)({ width: d, height: d, intrinsicWidth: 64, intrinsicHeight: 64 }), [d]);
    return (0, e.jsx)("img", {
        style: l,
        src: "https://cdn.discordapp.com/assets/content/3b8d3a95cbf44767e9a35569bdbebbb5515039e038bfb53924f500e33dc225c4.svg",
        className: (0, n.Z)(),
        alt: t,
        "aria-label": s,
        "aria-hidden": c,
        role: r ?? "img",
    });
}
var o = s(772707),
    m = s(834730),
    b = s(826673),
    h = s(837057),
    u = s(749314),
    f = s(174459),
    p = s(310419),
    g = s(652215),
    x = s(49999),
    j = s(488995),
    v = s(105292),
    y = s(935794);
function A(i) {
    let { guildId: t, transitionState: s, onClose: n, analyticsType: A } = i;
    async function N() {
        ((0, b.Dr)(A, { forceTrack: !0, dismissAction: x.i.SECONDARY, guildId: t }), await n());
    }
    return (
        a.useEffect(() => {
            f.default.track(g.HAw.DISMISSIBLE_CONTENT_SHOWN, { type: c.M[A], guild_id: t });
        }, [t, A]),
        (0, e.jsx)(o.k, {
            title: v.intl.string(v.t["2tv5YG"]),
            subtitle: v.intl.string(v.t.pgwlD7),
            transitionState: s,
            size: "sm",
            gradientColor: "blue",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/2c7d0b82f2c7be0c182a49fcfab5e6a0b4931dccef76e6a851e54260aebca02a.svg",
                aspectRatio: "6/4",
            },
            onClose: N,
            actions: [
                {
                    variant: "primary",
                    text: v.intl.string(v.t["5e8Mrp"]),
                    onClick: function () {
                        (n(),
                            (0, b.Dr)(A, { forceTrack: !0, dismissAction: x.i.PRIMARY, guildId: t }),
                            (0, h.transitionToGlobalDiscovery)({
                                tab: j.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: t,
                                    entrypoint: { name: p.sW.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            }));
                    },
                },
            ],
            children: (0, e.jsxs)("ul", {
                className: y.qI,
                children: [
                    (0, e.jsxs)("li", {
                        className: y.Aw,
                        children: [
                            (0, e.jsx)(r, { alt: "", ariaHidden: !0, size: 24 }),
                            (0, e.jsx)(m.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, e.jsx)(u.A, { className: y.yF }),
                    (0, e.jsxs)("li", {
                        className: y.Aw,
                        children: [
                            (0, e.jsx)(d.u, { alt: "", ariaHidden: !0, size: 24 }),
                            (0, e.jsx)(m.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, e.jsx)(u.A, { className: y.yF }),
                    (0, e.jsxs)("li", {
                        className: y.Aw,
                        children: [
                            (0, e.jsx)(l, { alt: "", ariaHidden: !0, size: 24 }),
                            (0, e.jsx)(m.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t.wQJMPC),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
