n.d(t, { default: () => A }), n(228524), n(638769), n(896048), n(134528), n(947204);
var l = n(627968),
    i = n(64700),
    a = n(835245),
    r = n(621466),
    o = n(311907),
    s = n(562465),
    u = n(843282),
    c = n(732955),
    d = n(397927),
    m = n(817363),
    v = n(565150),
    p = n(521502),
    h = n(851023),
    f = n(349688),
    x = n(914905),
    g = n(101555),
    b = n(386976),
    j = n(32523),
    y = n(287809),
    w = n(486020),
    O = n(405269),
    S = n(723702),
    k = n(256252),
    E = n(382913),
    _ = n(985018),
    C = n(433963);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let P = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function A(e) {
    var t, A, N, T;
    let { transitionState: B, onClose: D } = e,
        I = i.useRef(null),
        R = i.useRef(null),
        [M, V] = i.useState(""),
        [z, H] = i.useState(""),
        [W, Y] = i.useState(),
        [K, q] = i.useState(""),
        [U, F] = i.useState([]),
        [G, Z] = i.useState(),
        [J, X] = i.useState(),
        [Q, $] = i.useState(!1),
        [ee, et] = i.useState(""),
        [en, el] = i.useState(
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
            })((0, S.getOS)()),
        ),
        [ei, ea] = i.useState(""),
        [er, eo] = i.useState(""),
        [es, eu] = i.useState(""),
        [ec, ed] = i.useState(""),
        [em, ev] = i.useState(!1),
        [ep, eh] = i.useState(!1),
        [ef, ex] = i.useState(!1),
        [eg, eb] = i.useState(null);
    i.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat("/assets/", "version.")
                .concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "4e1818290817afb4d92f289508416cc4e8e00823" !== e.body.hash) {
                let e = new Date("1769101111997"),
                    t = new Date(),
                    n = (0, O.Tf)(t, e);
                n.hours > 6 && eb(n.hours);
            }
        });
    }, []);
    let ej = (0, o.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ey = (0, o.bG)([p.A], () => {
            var e;
            return null == (e = p.A.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        { overridesInfo: ew } = (0, j.hI)(),
        { overridesInfo: eO } = (0, b.op)(),
        eS = Object.entries(L({}, ew, eO)).map((e) => {
            let [t, { variantId: n }] = e;
            return {
                experimentId: t,
                variantId: n,
            };
        });
    async function ek() {
        var e, t;
        if ((ex(!1), "" === M || "" === z || null == W)) return void ev(!0);
        let i = null == G || null == (t = G.features) ? void 0 : t.find((e) => (0, k.wY)(e) === J);
        eh(!0), ev(!1);
        let a = (0, E.B)(
                U.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            r = await (0, k.zC)(
                {
                    name: M,
                    description: z,
                    priority: W,
                    feature: i,
                    url: K,
                    buildOverride: null != (e = null == ey ? void 0 : ey.id) ? e : null,
                    experimentOverrides: eS,
                },
                !0 === Q
                    ? {
                          overridePlatformInformation: Q,
                          device: ee,
                          operatingSystem: en,
                          operatingSystemVersion: ei,
                          clientVersion: er,
                          clientBuildNumber: es,
                          locale: ec,
                      }
                    : { overridePlatformInformation: Q },
                a,
            ).catch(() => ex(!0));
        eh(!1),
            null != r && r.ok
                ? (ej && window.open(r.body.permalink_url, "_blank"),
                  D(),
                  (0, d.mMO)(async () => {
                      let { default: e } = await n.e("71256").then(n.bind(n, 369323));
                      return (t) => {
                          var n, i;
                          return (0, l.jsx)(
                              e,
                              ((n = L({}, t)),
                              (i = i = { asanaTask: r.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n),
                          );
                      };
                  }))
                : ex(!0);
    }
    return (
        i.useEffect(() => {
            async function e() {
                Z(await (0, k.xt)());
            }
            ej && e();
        }, [ej]),
        i.useEffect(() => {
            if (U.length > 0) {
                var e;
                null == (e = R.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
            }
        }, [U]),
        i.useEffect(() => {
            let e = (e) => {
                var t, n;
                let l = null == (t = e.clipboardData) ? void 0 : t.files;
                if (null != l && l.length > 0) {
                    let t = Array.from(l).filter((e) => e.type.startsWith("image/"));
                    if (t.length > 0) {
                        e.preventDefault(), e.stopPropagation();
                        let n = t.at(0);
                        void 0 !== n &&
                            F((e) =>
                                e.some((e) => {
                                    var t;
                                    return (
                                        e.filename === n.name &&
                                        (null == (t = e.item.file) ? void 0 : t.size) === n.size
                                    );
                                })
                                    ? e
                                    : [
                                          ...e,
                                          new v.Ay({
                                              id: (0, a.A)(),
                                              file: n,
                                              platform: v.xz.WEB,
                                              origin: "clipboard",
                                          }),
                                      ],
                            );
                    }
                }
                let i = document.activeElement;
                if (!((0, r.vq)(i, HTMLInputElement) || (0, r.vq)(i, HTMLTextAreaElement))) {
                    let t = null == (n = e.clipboardData) ? void 0 : n.getData("text");
                    null != t && (e.preventDefault(), e.stopPropagation(), H(z.concat(t)));
                }
            };
            return (
                document.addEventListener("paste", e, !0),
                () => {
                    document.removeEventListener("paste", e, !0);
                }
            );
        }, [z]),
        (0, l.jsx)(c.aFV, {
            size: "md",
            transitionState: B,
            "aria-label": _.intl.string(_.t.mCCdwi),
            title: _.intl.string(_.t["5LqopY"]),
            actions: [
                {
                    variant: "secondary",
                    text: _.intl.string(_.t["ETE/oC"]),
                    onClick: D,
                    autoFocus: !1,
                },
                {
                    variant: "primary",
                    text: ej ? "Submit and Open Report" : "Submit Report",
                    loading: ep,
                    onClick: ek,
                    autoFocus: !1,
                },
            ],
            onClose: D,
            children: (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)(d.BJc, {
                        gap: 8,
                        children: [
                            null != ey &&
                                (0, l.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, l.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: _.intl.string(_.t["ZP/hEx"]),
                                        }),
                                        (0, l.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: _.intl.format(_.t["yY60+7"], {
                                                buildOverrideHook: () =>
                                                    (0, l.jsx)("b", { children: null == ey ? void 0 : ey.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == ey &&
                                null != eg &&
                                (0, l.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, l.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: _.intl.formatToPlainString(_.t["ql2Q/e"], { hours: eg }),
                                        }),
                                        (0, l.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: _.intl.string(_.t.x18RUs),
                                        }),
                                    ],
                                }),
                            ej &&
                                Object.keys(eS).length > 0 &&
                                (0, l.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, l.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, l.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: eS.map((e) =>
                                                (0, l.jsxs)(
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
                    (0, l.jsxs)(d.BJc, {
                        gap: 24,
                        padding: {
                            top: 8,
                            bottom: 8,
                        },
                        children: [
                            (0, l.jsx)(d.ksK, {
                                label: _.intl.string(_.t.OZRgjw),
                                error: em && "" === M ? _.intl.string(_.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: M,
                                maxLength: 100,
                                onChange: V,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(d.fs1, {
                                label: _.intl.string(_.t["1SplH2"]),
                                error: em && "" === z ? _.intl.string(_.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: z,
                                onChange: H,
                                description: ej
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                            }),
                            (0, l.jsx)(u.Te, {
                                label: _.intl.string(_.t.xMXLda),
                                errorMessage: em && void 0 === W ? _.intl.string(_.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, l.jsxs)("div", {
                                            className: C.jS,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: C.Kt,
                                                    children: [
                                                        (0, l.jsx)("img", {
                                                            alt: "",
                                                            className: C.YN,
                                                            src: (0, w._O)({
                                                                id: t.emoji,
                                                                animated: !0,
                                                                size: 48,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(d.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: C.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(d.Text, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: C.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: Y,
                                options: (0, k.lx)().map((e) => ({
                                    priority: e,
                                    value: e.value,
                                    label: e.title,
                                })),
                                optionClassName: C.sI,
                                value: W,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            ej &&
                                (0, l.jsx)(d.ZiE, {
                                    selectionMode: "single",
                                    label: _.intl.string(_.t["77VVd8"]),
                                    value: J,
                                    options:
                                        null !=
                                        (t =
                                            null == G ||
                                            null == (T = G.features) ||
                                            null == (N = T.filter((e) => "" !== (0, k.wY)(e))) ||
                                            null ==
                                                (A = N.map((e) => {
                                                    var t;
                                                    return {
                                                        id: (0, k.wY)(e),
                                                        label: null != (t = e.name) ? t : "",
                                                        value: (0, k.wY)(e),
                                                    };
                                                }))
                                                ? void 0
                                                : A.sort((e, t) => e.label.localeCompare(t.label)))
                                            ? t
                                            : [],
                                    disabled: null == G,
                                    onSelectionChange: (e) => X(e),
                                }),
                            (0, l.jsx)(d.ksK, {
                                label: _.intl.string(_.t["7p5pqh"]),
                                placeholder: _.intl.string(_.t.HewMzo),
                                type: "text",
                                value: K,
                                maxLength: 5000,
                                onChange: q,
                            }),
                            (0, l.jsx)(d.Checkbox, {
                                checked: Q,
                                onChange: (e) => $(e),
                                label: _.intl.string(_.t.ayhqiH),
                            }),
                            Q
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(d.ksK, {
                                              label: _.intl.string(_.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ee,
                                              onChange: (e) => et(e),
                                          }),
                                          (0, l.jsx)(d.l6P, {
                                              label: _.intl.string(_.t.kcHxi6),
                                              value: en,
                                              options: P,
                                              onSelectionChange: el,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, l.jsx)(d.ksK, {
                                              label: _.intl.string(_.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: ei,
                                              onChange: (e) => ea(e),
                                          }),
                                          (0, l.jsx)(d.ksK, {
                                              label: _.intl.string(_.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: er,
                                              onChange: (e) => eo(e),
                                          }),
                                          (0, l.jsx)(d.ksK, {
                                              label: _.intl.string(_.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: es,
                                              onChange: (e) => eu(e),
                                          }),
                                          (0, l.jsx)(d.ksK, {
                                              label: _.intl.string(_.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ec,
                                              onChange: (e) => ed(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, l.jsx)(d.Button, {
                                variant: "secondary",
                                text: _.intl.string(_.t.HVxmOD),
                                onClick: () => {
                                    var e;
                                    null == (e = I.current) || e.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, l.jsx)("div", {
                                className: C.Fg,
                                children: (0, l.jsx)(m.A, {
                                    ref: I,
                                    onChange: (e) => {
                                        var t, n;
                                        (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) !=
                                            null &&
                                            F([
                                                ...U,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new v.Ay({
                                                            id: (0, a.A)(),
                                                            file: e,
                                                            platform: v.xz.WEB,
                                                            origin: "file_picker",
                                                        }),
                                                ),
                                            ]);
                                    },
                                    multiple: !0,
                                }),
                            }),
                            U.length > 0
                                ? (0, l.jsx)(d.D0$, {
                                      label: "Preview",
                                      children: (0, l.jsx)("div", {
                                          ref: R,
                                          className: C.ZO,
                                          children:
                                              U.length > 0 &&
                                              U.map((e) =>
                                                  (0, l.jsxs)(
                                                      "div",
                                                      {
                                                          className: C.oh,
                                                          children: [
                                                              (0, l.jsxs)("div", {
                                                                  children: [
                                                                      (0, l.jsx)(x.J, {
                                                                          size: f.L.SMALL,
                                                                          upload: e,
                                                                      }),
                                                                      (0, l.jsx)("div", {
                                                                          className: C.eA,
                                                                          children: (0, l.jsx)(g.Ay, {
                                                                              children: (0, l.jsx)(h.A, {
                                                                                  tooltip: _.intl.string(_.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void F(
                                                                                              U.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, l.jsx)(d.ucK, {
                                                                                      size: "md",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, l.jsx)(d.Text, {
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
                                ? (0, l.jsx)(d.Text, {
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
