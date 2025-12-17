n.r(t), n.d(t, { default: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(159691),
    f = n(481060),
    g = n(391650),
    h = n(314897),
    m = n(594174),
    b = n(626135),
    _ = n(361207),
    E = n(981631),
    O = n(388032),
    v = n(948864);
let y = [
        {
            getOs: () => O.intl.string(O.t.NK5ySJ),
            icon: v.apple,
            url: () => (0, _.w4)("osx", !1),
            platformKey: 0,
        },
        {
            getOs: () => O.intl.string(O.t.OvKGE6),
            icon: v.windows,
            url: () => (0, _.w4)("win", !1),
            platformKey: 1,
        },
        {
            getOs: () => O.intl.string(O.t.dJB4PN),
            icon: v.linux,
            url: [
                {
                    url: () => (0, _.w4)("linux", !1, "deb"),
                    getText: () => O.intl.string(O.t.Sodsus),
                },
                {
                    url: () => (0, _.w4)("linux", !1, "tar.gz"),
                    getText: () => O.intl.string(O.t.G3U6IV),
                },
            ],
            platformKey: 2,
        },
    ],
    I = [
        {
            getOs: () => O.intl.string(O.t.wCVyNT),
            icon: v.ios,
            url: () => E.fzT.IOS,
            platformKey: 3,
        },
        {
            getOs: () => O.intl.string(O.t.wuQpJD),
            icon: v.android,
            url: () => E.fzT.ANDROID,
            platformKey: 4,
        },
    ],
    C = (e) => {
        let { os: t, url: n, onClick: l } = e,
            a = i.useRef(null),
            [o, s] = i.useState(!1),
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
                  onRequestOpen: () => s(!0),
                  onRequestClose: () => s(!1),
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
                                  icon: o ? p.sXD : p.hic,
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
            { getOs: o, icon: s, url: c, platformKey: u } = t,
            d = o(),
            p = a()(v.icon, s);
        return (0, r.jsx)("li", {
            className: a()(v.platform, { [v.active]: l }),
            onMouseEnter: () => i(u),
            children: (0, r.jsxs)("div", {
                className: v.contentWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.iconWrap,
                        children: [
                            (0, r.jsx)("div", { className: p }),
                            (0, r.jsx)("div", { className: a()(v.active, p) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Heading, {
                                className: v.platformName,
                                variant: "heading-lg/semibold",
                                children: d,
                            }),
                            (0, r.jsx)("div", {
                                className: v.downloadButton,
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
        o = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        _ = (0, d.e7)([h.default], () => h.default.getFingerprint()),
        C = null == o || o.isClaimed(),
        [T, N] = i.useState(
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
    function j(e, r) {
        (null != u.getToken() || null != _) &&
            b.default.track(E.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: C,
                referring_location: t,
                qr_code: !1,
            }),
            C ? window.open(r, "_blank") : (n(), g.j());
    }
    function P(e) {
        N(e);
    }
    return (
        i.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, {
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
                className: v.container,
                children: [
                    !c.tq &&
                        (0, r.jsxs)("div", {
                            className: v.platformsWrap,
                            children: [
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: v.header,
                                    children: O.intl.string(O.t["0KK0bP"]),
                                }),
                                (0, r.jsx)("ul", {
                                    className: a()(v.platforms, v.platformsDesktop),
                                    children: y.map((e) =>
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
                        className: v.platformsWrap,
                        children: [
                            !c.tq &&
                                (0, r.jsx)(f.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-subtle",
                                    className: v.header,
                                    children: O.intl.string(O.t.RdSNWa),
                                }),
                            (0, r.jsx)("ul", {
                                className: a()(v.platforms, v.platformsMobile),
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
