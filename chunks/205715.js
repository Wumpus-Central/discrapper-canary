e.d(i, { default: () => N });
var s = e(477900),
    a = e(582128),
    c = e(554146),
    n = e(62617);
function r(t) {
    let { alt: i, ariaLabel: e, ariaHidden: c, role: r, size: d = 64 } = t,
        l = a.useMemo(() => (0, n.H)({ width: d, height: d, intrinsicWidth: 64, intrinsicHeight: 64 }), [d]);
    return (0, s.jsx)("img", {
        style: l,
        src: "https://cdn.discordapp.com/assets/content/6f2327d812c75a6d27a59dd476f7e35db632b0e8ca8d3ced52d6ff0c867f6e5f.svg",
        className: (0, n.Z)(),
        alt: i,
        "aria-label": e,
        "aria-hidden": c,
        role: r ?? "img",
    });
}
var d = e(780171);
function l(t) {
    let { alt: i, ariaLabel: e, ariaHidden: c, role: r, size: d = 64 } = t,
        l = a.useMemo(() => (0, n.H)({ width: d, height: d, intrinsicWidth: 64, intrinsicHeight: 64 }), [d]);
    return (0, s.jsx)("img", {
        style: l,
        src: "https://cdn.discordapp.com/assets/content/3b8d3a95cbf44767e9a35569bdbebbb5515039e038bfb53924f500e33dc225c4.svg",
        className: (0, n.Z)(),
        alt: i,
        "aria-label": e,
        "aria-hidden": c,
        role: r ?? "img",
    });
}
var o = e(772707),
    m = e(834730),
    h = e(826673),
    u = e(837057),
    f = e(749314),
    b = e(174459),
    p = e(310419),
    g = e(652215),
    x = e(49999),
    j = e(488995),
    v = e(105292),
    A = e(935794);
function N(t) {
    let { guildId: i, transitionState: e, onClose: n, analyticsType: N } = t;
    async function w() {
        ((0, h.Dr)(N, { forceTrack: !0, dismissAction: x.i.SECONDARY, guildId: i }), await n());
    }
    return (
        a.useEffect(() => {
            b.default.track(g.HAw.DISMISSIBLE_CONTENT_SHOWN, { type: c.M[N], guild_id: i });
        }, [i, N]),
        (0, s.jsx)(o.k, {
            title: v.intl.string(v.t["2tv5YG"]),
            subtitle: v.intl.string(v.t.pgwlD7),
            transitionState: e,
            size: "sm",
            gradientColor: "blue",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/2c7d0b82f2c7be0c182a49fcfab5e6a0b4931dccef76e6a851e54260aebca02a.svg",
                aspectRatio: "6/4",
            },
            onClose: w,
            actions: [
                {
                    variant: "primary",
                    text: v.intl.string(v.t["5e8Mrp"]),
                    onClick: function () {
                        (n(),
                            (0, h.Dr)(N, { forceTrack: !0, dismissAction: x.i.PRIMARY, guildId: i }),
                            (0, u.transitionToGlobalDiscovery)({
                                tab: j.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: i,
                                    entrypoint: { name: p.sW.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            }));
                    },
                },
            ],
            children: (0, s.jsxs)("ul", {
                className: A.qI,
                children: [
                    (0, s.jsxs)("li", {
                        className: A.Aw,
                        children: [
                            (0, s.jsx)(r, { alt: "", ariaHidden: !0, size: 24 }),
                            (0, s.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)(f.A, { className: A.yF }),
                    (0, s.jsxs)("li", {
                        className: A.Aw,
                        children: [
                            (0, s.jsx)(d.u, { alt: "", ariaHidden: !0, size: 24 }),
                            (0, s.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: v.intl.string(v.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, s.jsx)(f.A, { className: A.yF }),
                    (0, s.jsxs)("li", {
                        className: A.Aw,
                        children: [
                            (0, s.jsx)(l, { alt: "", ariaHidden: !0, size: 24 }),
                            (0, s.jsx)(m.E, {
                                variant: "text-sm/medium",
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
