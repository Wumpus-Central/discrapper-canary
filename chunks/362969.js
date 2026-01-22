n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(55619),
    o = n(195043),
    l = n(351906),
    c = n(723702),
    u = n(780964),
    d = n(790174),
    f = n(840065),
    p = n(531525),
    _ = n(652215),
    h = n(985018),
    m = n(884269);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function b() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: g,
            hidePersonalInformation: b,
            disableSounds: y,
            disableNotifications: O,
            enableContentProtection: A,
        } = (0, i.cf)([l.A], () => E({}, l.A.getSettings())),
        v = () =>
            (0, r.jsxs)(a.ZpM, {
                type: a.ZpM.Types.PRIMARY,
                className: m.dH,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/medium",
                                children: h.intl.string(h.t.bxGbHL),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: h.intl.format(h.t["4rmZnx"], {
                                    streamkitURL: _.X7G.STREAMKIT,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        src: n(582343),
                        width: 184,
                        height: 110,
                        alt: "",
                        className: m.Ox,
                    }),
                ],
            }),
        S = () => {
            if (c.isPlatformEmbedded)
                return (0, r.jsx)(a.dOG, {
                    label: h.intl.string(h.t["PKDAJ/"]),
                    description: h.intl.string(h.t.ZPi4lM),
                    checked: t,
                    onChange: (e) => I("autoToggle", e),
                });
        },
        I = (e, t) => {
            s.A.update({
                [e]: t,
            });
        },
        T = () => {
            (0, f.openUserSettings)(u.X.KEYBINDS_PANEL, {
                section: _.nc_.KEYBINDS,
            });
        };
    return (0, r.jsx)(d.A, {
        title: h.intl.string(h.t.S5GfOW),
        children: (0, r.jsxs)(a.BJc, {
            gap: 24,
            children: [
                (0, r.jsx)(o.x, {
                    setting: p.H.STREAMER_MODE_INTEGRATIONS,
                    children: v(),
                }),
                (0, r.jsx)(o.x, {
                    setting: p.H.STREAMER_MODE_ENABLE,
                    children: (0, r.jsxs)(a.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(a.dOG, {
                                label: h.intl.string(h.t.p9ZAJZ),
                                description: h.intl.format(h.t.MLVL2M, {
                                    onClick: T,
                                }),
                                checked: e,
                                onChange: (e) => I("enabled", e),
                            }),
                            S(),
                            (0, r.jsx)(a.cGx, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(a.nVY, {
                    label: h.intl.string(h.t["+1H47t"]),
                    className: m.a9,
                    children: [
                        (0, r.jsx)(o.x, {
                            setting: p.H.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                            children: (0, r.jsx)(a.dOG, {
                                label: h.intl.string(h.t.UpQziA),
                                description: h.intl.string(h.t["+9Lra7"]),
                                checked: b,
                                onChange: (e) => I("hidePersonalInformation", e),
                            }),
                        }),
                        (0, r.jsx)(o.x, {
                            setting: p.H.STREAMER_MODE_HIDE_INVITE_LINKS,
                            children: (0, r.jsx)(a.dOG, {
                                label: h.intl.string(h.t.q7WNGv),
                                description: h.intl.string(h.t.m7mS2U),
                                checked: g,
                                onChange: (e) => I("hideInstantInvites", e),
                            }),
                        }),
                        (0, r.jsx)(o.x, {
                            setting: p.H.STREAMER_MODE_DISABLE_SOUNDS,
                            children: (0, r.jsx)(a.dOG, {
                                label: h.intl.string(h.t.o56OZu),
                                description: h.intl.string(h.t.eAkaik),
                                checked: y,
                                onChange: (e) => I("disableSounds", e),
                            }),
                        }),
                        (0, r.jsx)(o.x, {
                            setting: p.H.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                            children: (0, r.jsx)(a.dOG, {
                                label: h.intl.string(h.t.qmYiYd),
                                description: h.intl.string(h.t["ZAmpQ/"]),
                                checked: O,
                                onChange: (e) => I("disableNotifications", e),
                            }),
                        }),
                        (0, r.jsx)(o.x, {
                            setting: p.H.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                            children: (0, r.jsx)(a.dOG, {
                                label: h.intl.string(h.t["iA81+a"]),
                                description: h.intl.string(h.t.P4vj0h),
                                checked: A,
                                onChange: (e) => I("enableContentProtection", e),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
