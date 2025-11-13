n.r(t), n.d(t, { default: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(525654),
    o = n.n(s),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(159691),
    f = n(481060),
    h = n(391650),
    g = n(314897),
    m = n(594174),
    _ = n(626135),
    b = n(361207),
    E = n(981631),
    O = n(388032),
    y = n(394369);
let v = [
        {
            getOs: () => O.intl.string(O.t.NK5ySJ),
            icon: y.apple,
            url: () => (0, b.w4)("osx", !1),
            platformKey: 0,
        },
        {
            getOs: () => O.intl.string(O.t.OvKGE6),
            icon: y.windows,
            url: () => (0, b.w4)("win", !1),
            platformKey: 1,
        },
        {
            getOs: () => O.intl.string(O.t.dJB4PN),
            icon: y.linux,
            url: [
                {
                    url: () => (0, b.w4)("linux", !1, "deb"),
                    getText: () => O.intl.string(O.t.Sodsus),
                },
                {
                    url: () => (0, b.w4)("linux", !1, "tar.gz"),
                    getText: () => O.intl.string(O.t.G3U6IV),
                },
            ],
            platformKey: 2,
        },
    ],
    I = [
        {
            getOs: () => O.intl.string(O.t.wCVyNT),
            icon: y.ios,
            url: () => E.fzT.IOS,
            platformKey: 3,
        },
        {
            getOs: () => O.intl.string(O.t.wuQpJD),
            icon: y.android,
            url: () => E.fzT.ANDROID,
            platformKey: 4,
        },
    ],
    C = (e) => {
        let { os: t, url: n, onClick: l } = e,
            a = i.useRef(null),
            [s, o] = i.useState(!1),
            c = i.useCallback(
                (e) => {
                    let { closePopout: i } = e;
                    return Array.isArray(n)
                        ? (0, r.jsx)(f.v2r, {
                              navId: "download-app-menu",
                              "aria-label": O.intl.string(O.t["+1H47t"]),
                              onClose: i,
                              onSelect: void 0,
                              children: n.map((e) =>
                                  (0, r.jsx)(
                                      f.sNh,
                                      {
                                          id: e.url(),
                                          label: e.getText(),
                                          action: () => l(t, e.url()),
                                      },
                                      e.url(),
                                  ),
                              ),
                          })
                        : null;
                },
                [t, n, l],
            );
        return Array.isArray(n)
            ? (0, r.jsx)(f.yRy, {
                  renderPopout: c,
                  targetElementRef: a,
                  align: "left",
                  position: "bottom",
                  onRequestOpen: () => o(!0),
                  onRequestClose: () => o(!1),
                  children: (e) => {
                      var t, n;
                      return (0, r.jsx)(
                          p.zxk,
                          ((t = (function (e) {
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
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (n = n =
                              {
                                  buttonRef: a,
                                  text: O.intl.string(O.t["1WjMbC"]),
                                  variant: "primary",
                                  size: "sm",
                                  fullWidth: !0,
                                  icon: s ? p.sXD : p.hic,
                                  iconPosition: "end",
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t),
                      );
                  },
              })
            : (0, r.jsx)(p.zxk, {
                  text: O.intl.string(O.t["1WjMbC"]),
                  onClick: () => l(t, n()),
                  variant: "primary",
                  size: "sm",
                  fullWidth: !0,
                  role: "link",
              });
    },
    S = (e) => {
        let { platform: t, onClick: n, onMouseEnter: i, isActive: l } = e,
            { getOs: s, icon: o, url: c, platformKey: u } = t,
            d = s(),
            p = a()(y.icon, o);
        return (0, r.jsx)("li", {
            className: a()(y.platform, { [y.active]: l }),
            onMouseEnter: () => i(u),
            children: (0, r.jsxs)("div", {
                className: y.contentWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.iconWrap,
                        children: [
                            (0, r.jsx)("div", { className: p }),
                            (0, r.jsx)("div", { className: a()(y.active, p) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Heading, {
                                className: y.platformName,
                                variant: "heading-lg/semibold",
                                children: d,
                            }),
                            (0, r.jsx)("div", {
                                className: y.downloadButton,
                                children: (0, r.jsx)(C, {
                                    os: d,
                                    url: c,
                                    onClick: n,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
function T(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        s = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        b = (0, d.e7)([g.default], () => g.default.getFingerprint()),
        C = null == s || s.isClaimed(),
        [T, N] = i.useState(
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
    function j(e, r) {
        (null != u.getToken() || null != b) &&
            _.default.track(E.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: C,
                referring_location: t,
                qr_code: !1,
            }),
            C ? window.open(r, "_blank") : (n(), h.j());
    }
    function P(e) {
        N(e);
    }
    return (
        i.useEffect(() => {
            _.default.track(E.rMx.OPEN_MODAL, {
                type: "Download App",
                source: { location: t },
            });
        }, [t]),
        (0, r.jsx)(p.u_l, {
            title: O.intl.string(O.t["BK8LK+"]),
            actions: void 0,
            onClose: n,
            transitionState: l,
            preview: (0, r.jsx)(f.Text, {
                variant: "text-sm/normal",
                children: O.intl.format(O.t["RJS+1P"], {}),
            }),
            children: (0, r.jsxs)("div", {
                className: y.container,
                children: [
                    !c.tq &&
                        (0, r.jsxs)("div", {
                            className: y.platformsWrap,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-secondary",
                                    className: y.header,
                                    children: O.intl.string(O.t["0KK0bP"]),
                                }),
                                (0, r.jsx)("ul", {
                                    className: a()(y.platforms, y.platformsDesktop),
                                    children: v.map((e) =>
                                        (0, r.jsx)(
                                            S,
                                            {
                                                isActive: T === e.platformKey,
                                                platform: e,
                                                onClick: j,
                                                onMouseEnter: P,
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
                                    variant: "heading-md/normal",
                                    color: "text-secondary",
                                    className: y.header,
                                    children: O.intl.string(O.t.RdSNWa),
                                }),
                            (0, r.jsx)("ul", {
                                className: a()(y.platforms, y.platformsMobile),
                                children: I.map((e) =>
                                    (0, r.jsx)(
                                        S,
                                        {
                                            isActive: T === e.platformKey,
                                            platform: e,
                                            onClick: j,
                                            onMouseEnter: P,
                                        },
                                        e.platformKey,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
