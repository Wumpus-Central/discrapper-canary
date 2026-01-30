n.d(t, {
    default: () => L,
}),
    n(228524),
    n(638769),
    n(896048),
    n(134528),
    n(947204);
var i = n(627968),
    l = n(64700),
    r = n(835245),
    a = n(311907),
    o = n(562465),
    s = n(843282),
    u = n(732955),
    c = n(397927),
    d = n(817363),
    m = n(565150),
    v = n(521502),
    p = n(851023),
    h = n(349688),
    f = n(914905),
    x = n(176634),
    g = n(101555),
    b = n(386976),
    j = n(32523),
    y = n(287809),
    _ = n(486020),
    w = n(405269),
    O = n(723702),
    S = n(256252),
    k = n(382913),
    C = n(985018),
    E = n(433963);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let A = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));

function L(e) {
    var t, L, N, T;
    let { transitionState: B, onClose: I } = e,
        D = l.useRef(null),
        R = l.useRef(null),
        [z, V] = l.useState(""),
        [M, W] = l.useState(""),
        [Y, H] = l.useState(),
        [K, F] = l.useState(""),
        [U, G] = l.useState([]),
        [q, Z] = l.useState(),
        [J, X] = l.useState(),
        [Q, $] = l.useState(!1),
        [ee, et] = l.useState(""),
        [en, ei] = l.useState(
            (function (e) {
                switch (e) {
                    case "windows":
                        return "Windows";
                    case "macos":
                        return "Mac OS X";
                    case "linux":
                        return "Linux";
                }
                return "";
            })((0, O.getOS)()),
        ),
        [el, er] = l.useState(""),
        [ea, eo] = l.useState(""),
        [es, eu] = l.useState(""),
        [ec, ed] = l.useState(""),
        [em, ev] = l.useState(!1),
        [ep, eh] = l.useState(!1),
        [ef, ex] = l.useState(!1),
        [eg, eb] = l.useState(null);
    l.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.Bo.get({
            url: ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat("/assets/", "version.")
                .concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
            query: {
                cache: e,
            },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "c7a61a70b17759b20e5d28b88b3feed25cb8c8dc" !== e.body.hash) {
                let e = new Date("1769814525734"),
                    t = new Date(),
                    n = (0, w.Tf)(t, e);
                n.hours > 6 && eb(n.hours);
            }
        });
    }, []);
    let ej = (0, a.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ey = (0, a.bG)([v.A], () => {
            var e;
            return null == (e = v.A.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        { overridesInfo: e_ } = (0, j.hI)(),
        { overridesInfo: ew } = (0, b.op)(),
        eO = Object.entries(P({}, e_, ew)).map((e) => {
            let [t, { variantId: n }] = e;
            return {
                experimentId: t,
                variantId: n,
            };
        });
    async function eS() {
        var e, t;
        if ((ex(!1), "" === z || "" === M || null == Y)) return void ev(!0);
        let l = null == q || null == (t = q.features) ? void 0 : t.find((e) => (0, S.wY)(e) === J);
        eh(!0), ev(!1);
        let r = (0, k.B)(
                U.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, S.zC)(
                {
                    name: z,
                    description: M,
                    priority: Y,
                    feature: l,
                    url: K,
                    buildOverride: null != (e = null == ey ? void 0 : ey.id) ? e : null,
                    experimentOverrides: eO,
                },
                !0 === Q
                    ? {
                          overridePlatformInformation: Q,
                          device: ee,
                          operatingSystem: en,
                          operatingSystemVersion: el,
                          clientVersion: ea,
                          clientBuildNumber: es,
                          locale: ec,
                      }
                    : {
                          overridePlatformInformation: Q,
                      },
                r,
            ).catch(() => ex(!0));
        eh(!1),
            null != a && a.ok
                ? (ej && window.open(a.body.permalink_url, "_blank"),
                  I(),
                  (0, c.mMO)(async () => {
                      let { default: e } = await n.e("71256").then(n.bind(n, 369323));
                      return (t) => {
                          var n, l;
                          return (0, i.jsx)(
                              e,
                              ((n = P({}, t)),
                              (l = l =
                                  {
                                      asanaTask: a.body,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n),
                          );
                      };
                  }))
                : ex(!0);
    }
    return (
        l.useEffect(() => {
            async function e() {
                Z(await (0, S.xt)());
            }
            ej && e();
        }, [ej]),
        l.useEffect(() => {
            if (U.length > 0) {
                var e;
                null == (e = R.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
            }
        }, [U]),
        (0, x.A)({
            onPasteFiles: l.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    G((e) =>
                        e.some((e) => {
                            var n;
                            return e.filename === t.name && (null == (n = e.item.file) ? void 0 : n.size) === t.size;
                        })
                            ? e
                            : [
                                  ...e,
                                  new m.Ay({
                                      id: (0, r.A)(),
                                      file: t,
                                      platform: m.xz.WEB,
                                      origin: "clipboard",
                                  }),
                              ],
                    );
            }, []),
            onPasteBackgroundText: l.useCallback((e) => {
                W((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.aFV, {
            size: "md",
            transitionState: B,
            "aria-label": C.intl.string(C.t.mCCdwi),
            title: C.intl.string(C.t["5LqopY"]),
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: I,
                    autoFocus: !1,
                },
                {
                    variant: "primary",
                    text: ej ? "Submit and Open Report" : "Submit Report",
                    loading: ep,
                    onClick: eS,
                    autoFocus: !1,
                },
            ],
            onClose: I,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(c.BJc, {
                        gap: 8,
                        children: [
                            null != ey &&
                                (0, i.jsxs)(c.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            variant: "heading-md/medium",
                                            children: C.intl.string(C.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/normal",
                                            children: C.intl.format(C.t["yY60+7"], {
                                                buildOverrideHook: () =>
                                                    (0, i.jsx)("b", {
                                                        children: null == ey ? void 0 : ey.id,
                                                    }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == ey &&
                                null != eg &&
                                (0, i.jsxs)(c.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            variant: "heading-md/medium",
                                            children: C.intl.formatToPlainString(C.t["ql2Q/e"], {
                                                hours: eg,
                                            }),
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/normal",
                                            children: C.intl.string(C.t.x18RUs),
                                        }),
                                    ],
                                }),
                            ej &&
                                Object.keys(eO).length > 0 &&
                                (0, i.jsxs)(c.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/normal",
                                            children: eO.map((e) =>
                                                (0, i.jsxs)(
                                                    "div",
                                                    {
                                                        children: [e.experimentId, " (variant ", e.variantId, ")"],
                                                    },
                                                    e.experimentId,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)(c.BJc, {
                        gap: 24,
                        padding: {
                            top: 8,
                            bottom: 8,
                        },
                        children: [
                            (0, i.jsx)(c.ksK, {
                                label: C.intl.string(C.t.OZRgjw),
                                error: em && "" === z ? C.intl.string(C.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: z,
                                maxLength: 100,
                                onChange: V,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(c.fs1, {
                                label: C.intl.string(C.t["1SplH2"]),
                                error: em && "" === M ? C.intl.string(C.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: M,
                                onChange: W,
                                description: ej
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(s.Te, {
                                label: C.intl.string(C.t.xMXLda),
                                errorMessage: em && void 0 === Y ? C.intl.string(C.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: E.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: E.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: E.YN,
                                                            src: (0, _._O)({
                                                                id: t.emoji,
                                                                animated: !0,
                                                                size: 48,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(c.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: E.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: E.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: H,
                                options: (0, S.lx)().map((e) => ({
                                    priority: e,
                                    value: e.value,
                                    label: e.title,
                                })),
                                optionClassName: E.sI,
                                value: Y,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            ej &&
                                (0, i.jsx)(c.ZiE, {
                                    selectionMode: "single",
                                    label: C.intl.string(C.t["77VVd8"]),
                                    value: J,
                                    options:
                                        null !=
                                        (t =
                                            null == q ||
                                            null == (T = q.features) ||
                                            null == (N = T.filter((e) => "" !== (0, S.wY)(e))) ||
                                            null ==
                                                (L = N.map((e) => {
                                                    var t;
                                                    return {
                                                        id: (0, S.wY)(e),
                                                        label: null != (t = e.name) ? t : "",
                                                        value: (0, S.wY)(e),
                                                    };
                                                }))
                                                ? void 0
                                                : L.sort((e, t) => e.label.localeCompare(t.label)))
                                            ? t
                                            : [],
                                    disabled: null == q,
                                    onSelectionChange: (e) => X(e),
                                }),
                            (0, i.jsx)(c.ksK, {
                                label: C.intl.string(C.t["7p5pqh"]),
                                placeholder: C.intl.string(C.t.HewMzo),
                                type: "text",
                                value: K,
                                maxLength: 5e3,
                                onChange: F,
                            }),
                            (0, i.jsx)(c.Checkbox, {
                                checked: Q,
                                onChange: (e) => $(e),
                                label: C.intl.string(C.t.ayhqiH),
                            }),
                            Q
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(c.ksK, {
                                              label: C.intl.string(C.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ee,
                                              onChange: (e) => et(e),
                                          }),
                                          (0, i.jsx)(c.l6P, {
                                              label: C.intl.string(C.t.kcHxi6),
                                              value: en,
                                              options: A,
                                              onSelectionChange: ei,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(c.ksK, {
                                              label: C.intl.string(C.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: el,
                                              onChange: (e) => er(e),
                                          }),
                                          (0, i.jsx)(c.ksK, {
                                              label: C.intl.string(C.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: ea,
                                              onChange: (e) => eo(e),
                                          }),
                                          (0, i.jsx)(c.ksK, {
                                              label: C.intl.string(C.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: es,
                                              onChange: (e) => eu(e),
                                          }),
                                          (0, i.jsx)(c.ksK, {
                                              label: C.intl.string(C.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ec,
                                              onChange: (e) => ed(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                text: C.intl.string(C.t.HVxmOD),
                                onClick: () => {
                                    var e;
                                    null == (e = D.current) || e.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: E.Fg,
                                children: (0, i.jsx)(d.A, {
                                    ref: D,
                                    onChange: (e) => {
                                        var t, n;
                                        (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) !=
                                            null &&
                                            G([
                                                ...U,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new m.Ay({
                                                            id: (0, r.A)(),
                                                            file: e,
                                                            platform: m.xz.WEB,
                                                            origin: "file_picker",
                                                        }),
                                                ),
                                            ]);
                                    },
                                    multiple: !0,
                                }),
                            }),
                            U.length > 0
                                ? (0, i.jsx)(c.D0$, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: R,
                                          className: E.ZO,
                                          children:
                                              U.length > 0 &&
                                              U.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: E.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(f.J, {
                                                                          size: h.L.SMALL,
                                                                          upload: e,
                                                                      }),
                                                                      (0, i.jsx)("div", {
                                                                          className: E.eA,
                                                                          children: (0, i.jsx)(g.Ay, {
                                                                              children: (0, i.jsx)(p.A, {
                                                                                  tooltip: C.intl.string(C.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void G(
                                                                                              U.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(c.ucK, {
                                                                                      size: "md",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, i.jsx)(c.Text, {
                                                                  variant: "text-xxs/medium",
                                                                  color: "text-subtle",
                                                                  children: e.filename,
                                                              }),
                                                          ],
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                      }),
                                  })
                                : null,
                            ef
                                ? (0, i.jsx)(c.Text, {
                                      color: "text-feedback-critical",
                                      variant: "text-sm/normal",
                                      children: "Something went wrong, try again!",
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        })
    );
}
