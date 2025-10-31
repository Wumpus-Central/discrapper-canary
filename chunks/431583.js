n.r(t), n.d(t, { default: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(525654),
    o = n.n(s),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(755721),
    f = n(481060),
    m = n(391650),
    h = n(313201),
    g = n(314897),
    _ = n(594174),
    b = n(626135),
    E = n(361207),
    O = n(981631),
    I = n(388032),
    y = n(394369);
let v = [
        {
            getOs: () => I.intl.string(I.t.NK5ySJ),
            icon: y.apple,
            url: () => (0, E.w4)("osx", !1),
            platformKey: 0,
        },
        {
            getOs: () => I.intl.string(I.t.OvKGE6),
            icon: y.windows,
            url: () => (0, E.w4)("win", !1),
            platformKey: 1,
        },
        {
            getOs: () => I.intl.string(I.t.dJB4PN),
            icon: y.linux,
            url: [
                {
                    url: () => (0, E.w4)("linux", !1, "deb"),
                    getText: () => I.intl.string(I.t.Sodsus),
                },
                {
                    url: () => (0, E.w4)("linux", !1, "tar.gz"),
                    getText: () => I.intl.string(I.t.G3U6IV),
                },
            ],
            platformKey: 2,
        },
    ],
    C = [
        {
            getOs: () => I.intl.string(I.t.wCVyNT),
            icon: y.ios,
            url: () => O.fzT.IOS,
            platformKey: 3,
        },
        {
            getOs: () => I.intl.string(I.t.wuQpJD),
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
    T = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: s, claimed: o } = e,
            { getOs: c, icon: u, url: d, platformKey: p } = n,
            m = c(),
            h = a()(y.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = o ? e.url() : "";
                return (0, r.jsx)(
                    S,
                    {
                        url: n,
                        onClick: () => i(m),
                        text: e.getText(),
                    },
                    "".concat(n, "-").concat(t),
                );
            });
        else {
            let e = o ? d() : void 0;
            t = (0, r.jsx)(S, {
                url: e,
                onClick: () => i(m),
                text: I.intl.string(I.t["1WjMbC"]),
            });
        }
        return (0, r.jsx)("li", {
            className: a()(y.platform, { [y.active]: s }),
            onMouseEnter: () => l(p),
            children: (0, r.jsxs)("div", {
                className: y.contentWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.iconWrap,
                        children: [
                            (0, r.jsx)("div", { className: h }),
                            (0, r.jsx)("div", { className: a()(y.active, h) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Heading, {
                                className: y.platformName,
                                variant: "heading-lg/semibold",
                                children: m,
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
function N(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        a = (0, d.e7)([_.default], () => _.default.getCurrentUser()),
        s = (0, d.e7)([g.default], () => g.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        [E, S] = i.useState(
            (function () {
                var e;
                switch (null == (e = o().os) ? void 0 : e.family) {
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
    function N(e) {
        (null != u.getToken() || null != s) &&
            b.default.track(O.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: t,
                qr_code: !1,
            }),
            p || (n(), m.j());
    }
    function j(e) {
        S(e);
    }
    i.useEffect(() => {
        b.default.track(O.rMx.OPEN_MODAL, {
            type: "Download App",
            source: { location: t },
        });
    }, [t]);
    let P = (0, h.Dt)();
    return (0, r.jsxs)(f.Y0X, {
        className: y.downloadApps,
        transitionState: l,
        "aria-labelledby": P,
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
                            id: P,
                            children: I.intl.string(I.t["BK8LK+"]),
                        }),
                    }),
                    !c.tq &&
                        (0, r.jsxs)("div", {
                            className: y.platformsWrap,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: y.header,
                                    children: I.intl.string(I.t["0KK0bP"]),
                                }),
                                (0, r.jsx)("ul", {
                                    className: y.platforms,
                                    children: v.map((e) =>
                                        (0, r.jsx)(
                                            T,
                                            {
                                                isActive: E === e.platformKey,
                                                platform: e,
                                                onClick: N,
                                                onMouseEnter: j,
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
                                    children: I.intl.string(I.t.RdSNWa),
                                }),
                            (0, r.jsx)("ul", {
                                className: y.platforms,
                                children: C.map((e) =>
                                    (0, r.jsx)(
                                        T,
                                        {
                                            isActive: E === e.platformKey,
                                            platform: e,
                                            onClick: N,
                                            onMouseEnter: j,
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
                    children: I.intl.format(I.t["RJS+1P"], {}),
                }),
            }),
        ],
    });
}
