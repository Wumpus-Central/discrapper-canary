n.r(t), n.d(t, { default: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(755721),
    f = n(481060),
    h = n(391650),
    g = n(313201),
    m = n(314897),
    b = n(594174),
    _ = n(626135),
    E = n(361207),
    O = n(981631),
    v = n(388032),
    y = n(394369);
let I = [
        {
            getOs: () => v.intl.string(v.t.NK5ySE),
            icon: y.apple,
            url: () => (0, E.w4)("osx", !1),
            platformKey: 0,
        },
        {
            getOs: () => v.intl.string(v.t.OvKGEx),
            icon: y.windows,
            url: () => (0, E.w4)("win", !1),
            platformKey: 1,
        },
        {
            getOs: () => v.intl.string(v.t.dJB4PD),
            icon: y.linux,
            url: [
                {
                    url: () => (0, E.w4)("linux", !1, "deb"),
                    getText: () => v.intl.string(v.t.Sodsur),
                },
                {
                    url: () => (0, E.w4)("linux", !1, "tar.gz"),
                    getText: () => v.intl.string(v.t.G3U6IS),
                },
            ],
            platformKey: 2,
        },
    ],
    C = [
        {
            getOs: () => v.intl.string(v.t.wCVyNT),
            icon: y.ios,
            url: () => O.fzT.IOS,
            platformKey: 3,
        },
        {
            getOs: () => v.intl.string(v.t.wuQpJC),
            icon: y.android,
            url: () => O.fzT.ANDROID,
            platformKey: 4,
        },
    ],
    S = (e) => {
        let { url: t, text: n, onClick: i } = e,
            l = (0, p.nY)({ grow: !0 });
        return (0, r.jsx)(f.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a()(l, y.refreshDownloadButton),
            onClick: i,
            children: n,
        });
    },
    N = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: p } = n,
            h = c(),
            g = a()(y.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = s ? e.url() : "";
                return (0, r.jsx)(
                    S,
                    {
                        url: n,
                        onClick: () => i(h),
                        text: e.getText(),
                    },
                    "".concat(n, "-").concat(t),
                );
            });
        else {
            let e = s ? d() : void 0;
            t = (0, r.jsx)(S, {
                url: e,
                onClick: () => i(h),
                text: v.intl.string(v.t["1WjMbG"]),
            });
        }
        return (0, r.jsx)("li", {
            className: a()(y.platform, { [y.active]: o }),
            onMouseEnter: () => l(p),
            children: (0, r.jsxs)("div", {
                className: y.contentWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.iconWrap,
                        children: [
                            (0, r.jsx)("div", { className: g }),
                            (0, r.jsx)("div", { className: a()(y.active, g) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Heading, {
                                className: y.platformName,
                                variant: "heading-lg/semibold",
                                children: h,
                            }),
                            (0, r.jsx)("div", {
                                className: a()(y.downloadButtons, { [y.list]: Array.isArray(t) }),
                                children: t,
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function T(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        a = (0, d.e7)([b.default], () => b.default.getCurrentUser()),
        o = (0, d.e7)([m.default], () => m.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        [E, S] = i.useState(
            (function () {
                var e;
                switch (null == (e = s().os) ? void 0 : e.family) {
                    case "OS X":
                        return 0;
                    case "Windows":
                        return 1;
                    case "Ubuntu":
                    case "Debian":
                    case "Fedora":
                    case "Red Hat":
                    case "SuSE":
                    case "Linux":
                        return 2;
                    case "iOS":
                        return 3;
                    case "Android":
                        return 4;
                    default:
                        return;
                }
            })(),
        );
    function T(e) {
        (null != u.getToken() || null != o) &&
            _.default.track(O.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: t,
                qr_code: !1,
            }),
            p || (n(), h.j());
    }
    function P(e) {
        S(e);
    }
    i.useEffect(() => {
        _.default.track(O.rMx.OPEN_MODAL, {
            type: "Download App",
            source: { location: t },
        });
    }, [t]);
    let j = (0, g.Dt)();
    return (0, r.jsxs)(f.Y0X, {
        className: y.downloadApps,
        transitionState: l,
        "aria-labelledby": j,
        parentComponent: "DownloadAppsModal",
        children: [
            (0, r.jsx)(f.olH, {
                onClick: n,
                className: y.modalCloseButton,
            }),
            (0, r.jsxs)(f.hzk, {
                className: y.inner,
                children: [
                    (0, r.jsx)(f.nn4, {
                        children: (0, r.jsx)(f.H, {
                            id: j,
                            children: v.intl.string(v.t.BK8LKy),
                        }),
                    }),
                    !c.tq &&
                        (0, r.jsxs)("div", {
                            className: y.platformsWrap,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: y.header,
                                    children: v.intl.string(v.t["0KK0bG"]),
                                }),
                                (0, r.jsx)("ul", {
                                    className: y.platforms,
                                    children: I.map((e) =>
                                        (0, r.jsx)(
                                            N,
                                            {
                                                isActive: E === e.platformKey,
                                                platform: e,
                                                onClick: T,
                                                onMouseEnter: P,
                                                claimed: p,
                                            },
                                            e.platformKey,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: y.platformsWrap,
                        children: [
                            !c.tq &&
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: y.header,
                                    children: v.intl.string(v.t.RdSNWV),
                                }),
                            (0, r.jsx)("ul", {
                                className: y.platforms,
                                children: C.map((e) =>
                                    (0, r.jsx)(
                                        N,
                                        {
                                            isActive: E === e.platformKey,
                                            platform: e,
                                            onClick: T,
                                            onMouseEnter: P,
                                            claimed: p,
                                        },
                                        e.platformKey,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(f.mzw, {
                className: y.footer,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t["RJS+1N"], {}),
                }),
            }),
        ],
    });
}
