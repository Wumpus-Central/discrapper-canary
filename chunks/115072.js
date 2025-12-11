n.d(t, { default: () => T }), n(953529), n(642613), n(388685), n(784620), n(973216);
var i = n(54381),
    r = n(473749),
    a = n(772848),
    l = n(442837),
    o = n(544891),
    s = n(668339),
    u = n(199849),
    c = n(159691),
    d = n(481060),
    m = n(53281),
    f = n(476326),
    p = n(304761),
    v = n(273031),
    h = n(859235),
    g = n(898463),
    x = n(951394),
    b = n(667344),
    y = n(493075),
    j = n(594174),
    O = n(768581),
    S = n(55935),
    w = n(358085),
    P = n(223356),
    _ = n(225452),
    C = n(388032),
    E = n(294698);
function k(e) {
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
let D = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    label: e,
    value: e,
}));
function T(e) {
    var t, T, L, I;
    let { transitionState: N, onClose: A } = e,
        M = r.useRef(null),
        R = r.useRef(null),
        [Z, W] = r.useState(""),
        [B, V] = r.useState(""),
        [H, q] = r.useState(),
        [z, G] = r.useState(""),
        [U, Y] = r.useState([]),
        [X, F] = r.useState(),
        [K, J] = r.useState(),
        [Q, $] = r.useState(!1),
        [ee, et] = r.useState(""),
        [en, ei] = r.useState(
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
            })((0, w.getOS)()),
        ),
        [er, ea] = r.useState(""),
        [el, eo] = r.useState(""),
        [es, eu] = r.useState(""),
        [ec, ed] = r.useState(""),
        [em, ef] = r.useState(!1),
        [ep, ev] = r.useState(!1),
        [eh, eg] = r.useState(!1),
        [ex, eb] = r.useState(null);
    r.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.tn
            .get({
                url: ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat("/assets/", "version.")
                    .concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                query: { cache: e },
                rejectWithError: !0,
            })
            .then((e) => {
                if (null != e.body && "84b271aef686b009e79406f9bdcfef11665c6d39" !== e.body.hash) {
                    let e = new Date("1765489481318"),
                        t = new Date(),
                        n = (0, S.TD)(t, e);
                    n.hours > 6 && eb(n.hours);
                }
            });
    }, []);
    let ey = (0, l.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ej = (0, l.e7)([p.C], () => {
            var e;
            return null == (e = p.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        { overridesInfo: eO } = (0, y.sI)(),
        { overridesInfo: eS } = (0, b.Qb)(),
        ew = Object.entries(k({}, eO, eS)).map((e) => {
            let [t, { variantId: n }] = e;
            return {
                experimentId: t,
                variantId: n,
            };
        });
    async function eP() {
        var e, t;
        if ((eg(!1), "" === Z || "" === B || null == H)) return void ef(!0);
        let r = null == X || null == (e = X.features) ? void 0 : e.find((e) => (0, P.pD)(e) === K);
        ev(!0), ef(!1);
        let a = (0, _.D)(
                U.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            l = await (0, P.ZD)(
                {
                    name: Z,
                    description: B,
                    priority: H,
                    feature: r,
                    url: z,
                    buildOverride: null != (t = null == ej ? void 0 : ej.id) ? t : null,
                    experimentOverrides: ew,
                },
                !0 === Q
                    ? {
                          overridePlatformInformation: Q,
                          device: ee,
                          operatingSystem: en,
                          operatingSystemVersion: er,
                          clientVersion: el,
                          clientBuildNumber: es,
                          locale: ec,
                      }
                    : { overridePlatformInformation: Q },
                a,
            ).catch(() => eg(!0));
        ev(!1),
            null != l && l.ok
                ? (ey && window.open(l.body.permalink_url, "_blank"),
                  A(),
                  (0, d.ZDy)(async () => {
                      let { default: e } = await n.e("64648").then(n.bind(n, 81155));
                      return (t) => {
                          var n, r;
                          return (0, i.jsx)(
                              e,
                              ((n = k({}, t)),
                              (r = r = { asanaTask: l.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              n),
                          );
                      };
                  }))
                : eg(!0);
    }
    return (
        r.useEffect(() => {
            async function e() {
                F(await (0, P.WG)());
            }
            ey && e();
        }, [ey]),
        r.useEffect(() => {
            if (U.length > 0) {
                var e;
                null == (e = R.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
            }
        }, [U]),
        r.useEffect(() => {
            let e = (e) => {
                var t;
                let n = null == (t = e.clipboardData) ? void 0 : t.files;
                if (null == n || 0 === n.length) return;
                let i = Array.from(n).filter((e) => e.type.startsWith("image/"));
                if (0 === i.length) return;
                e.preventDefault(), e.stopPropagation();
                let r = i.at(0);
                void 0 !== r &&
                    Y((e) =>
                        e.some((e) => {
                            var t;
                            return e.filename === r.name && (null == (t = e.item.file) ? void 0 : t.size) === r.size;
                        })
                            ? e
                            : [
                                  ...e,
                                  new f.ZP({
                                      id: (0, a.Z)(),
                                      file: r,
                                      platform: f.ow.WEB,
                                      origin: "clipboard",
                                  }),
                              ],
                    );
            };
            return (
                document.addEventListener("paste", e, !0),
                () => {
                    document.removeEventListener("paste", e, !0);
                }
            );
        }, []),
        (0, i.jsx)(c.u_l, {
            size: "md",
            transitionState: N,
            "aria-label": C.intl.string(C.t.mCCdwi),
            title: C.intl.string(C.t["5LqopY"]),
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: A,
                    autoFocus: !1,
                },
                {
                    variant: "primary",
                    text: ey ? "Submit and Open Report" : "Submit Report",
                    loading: ep,
                    onClick: eP,
                    autoFocus: !1,
                },
            ],
            onClose: A,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(d.Kqy, {
                        gap: 8,
                        children: [
                            null != ej &&
                                (0, i.jsxs)(d.M14, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: C.intl.string(C.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: C.intl.format(C.t["yY60+7"], {
                                                buildOverrideHook: () =>
                                                    (0, i.jsx)("b", { children: null == ej ? void 0 : ej.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == ej &&
                                null != ex &&
                                (0, i.jsxs)(d.M14, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: C.intl.formatToPlainString(C.t["ql2Q/e"], { hours: ex }),
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: C.intl.string(C.t.x18RUs),
                                        }),
                                    ],
                                }),
                            ey &&
                                Object.keys(ew).length > 0 &&
                                (0, i.jsxs)(d.M14, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: ew.map((e) =>
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
                    (0, i.jsxs)(d.Kqy, {
                        gap: 24,
                        padding: {
                            top: 8,
                            bottom: 8,
                        },
                        children: [
                            (0, i.jsx)(d.oil, {
                                label: C.intl.string(C.t.OZRgjw),
                                error: em && "" === Z ? C.intl.string(C.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: Z,
                                maxLength: 100,
                                onChange: W,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(d.Kx8, {
                                label: C.intl.string(C.t["1SplH2"]),
                                error: em && "" === B ? C.intl.string(C.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: B,
                                onChange: V,
                                description: ey
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                            }),
                            (0, i.jsx)(u.y6, {
                                label: C.intl.string(C.t.xMXLda),
                                errorMessage: em && void 0 === H ? C.intl.string(C.t.EkokLy) : null,
                                renderOptionLabel: (e) =>
                                    (function (e) {
                                        let t = e.priority;
                                        return (0, i.jsxs)("div", {
                                            className: E.formPriorityImageContainer,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: E.formPriorityTitleContainer,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: E.formPriorityImage,
                                                            src: (0, O.gT)({
                                                                id: t.emoji,
                                                                animated: !0,
                                                                size: 48,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: E.formPriorityTitle,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: E.formPriorityDescription,
                                                    children: t.description,
                                                }),
                                            ],
                                        });
                                    })(e),
                                onChange: q,
                                options: (0, P.Tj)().map((e) => ({
                                    priority: e,
                                    value: e.value,
                                    label: e.title,
                                })),
                                optionClassName: E.formPriorityOption,
                                value: H,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                            }),
                            ey &&
                                (0, i.jsx)(s.d, {
                                    label: C.intl.string(C.t["77VVd8"]),
                                    value: K,
                                    options:
                                        null !=
                                        (I =
                                            null == X ||
                                            null == (L = X.features) ||
                                            null == (T = L.filter((e) => "" !== (0, P.pD)(e))) ||
                                            null ==
                                                (t = T.map((e) => {
                                                    var t;
                                                    return {
                                                        label: null != (t = e.name) ? t : "",
                                                        value: (0, P.pD)(e),
                                                    };
                                                }))
                                                ? void 0
                                                : t.sort((e, t) => e.label.localeCompare(t.label)))
                                            ? I
                                            : [],
                                    isDisabled: null == X,
                                    onChange: (e) => J(e),
                                }),
                            (0, i.jsx)(d.oil, {
                                label: C.intl.string(C.t["7p5pqh"]),
                                placeholder: C.intl.string(C.t.HewMzo),
                                type: "text",
                                value: z,
                                maxLength: 5000,
                                onChange: G,
                            }),
                            (0, i.jsx)(d.Checkbox, {
                                checked: Q,
                                onChange: (e) => $(e),
                                label: C.intl.string(C.t.ayhqiH),
                            }),
                            Q
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(d.oil, {
                                              label: C.intl.string(C.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ee,
                                              onChange: (e) => et(e),
                                          }),
                                          (0, i.jsx)(u.y6, {
                                              label: C.intl.string(C.t.kcHxi6),
                                              value: en,
                                              options: D,
                                              onChange: (e) => ei(e),
                                          }),
                                          (0, i.jsx)(d.oil, {
                                              label: C.intl.string(C.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: er,
                                              onChange: (e) => ea(e),
                                          }),
                                          (0, i.jsx)(d.oil, {
                                              label: C.intl.string(C.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: el,
                                              onChange: (e) => eo(e),
                                          }),
                                          (0, i.jsx)(d.oil, {
                                              label: C.intl.string(C.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: es,
                                              onChange: (e) => eu(e),
                                          }),
                                          (0, i.jsx)(d.oil, {
                                              label: C.intl.string(C.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ec,
                                              onChange: (e) => ed(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                text: C.intl.string(C.t.HVxmOD),
                                onClick: () => {
                                    var e;
                                    null == (e = M.current) || e.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: E.fileInput,
                                children: (0, i.jsx)(m.Z, {
                                    ref: M,
                                    onChange: (e) => {
                                        var t, n;
                                        (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) !=
                                            null &&
                                            Y([
                                                ...U,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new f.ZP({
                                                            id: (0, a.Z)(),
                                                            file: e,
                                                            platform: f.ow.WEB,
                                                            origin: "file_picker",
                                                        }),
                                                ),
                                            ]);
                                    },
                                    multiple: !0,
                                }),
                            }),
                            U.length > 0
                                ? (0, i.jsx)(d.gNt, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: R,
                                          className: E.attachments,
                                          children:
                                              U.length > 0 &&
                                              U.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: E.attachment,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(g.r, {
                                                                          size: h.q.SMALL,
                                                                          upload: e,
                                                                      }),
                                                                      (0, i.jsx)("div", {
                                                                          className: E.removeAttachment,
                                                                          children: (0, i.jsx)(x.ZP, {
                                                                              children: (0, i.jsx)(v.Z, {
                                                                                  tooltip: C.intl.string(C.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void Y(
                                                                                              U.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(d.XHJ, {
                                                                                      size: "md",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, i.jsx)(d.Text, {
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
                            eh
                                ? (0, i.jsx)(d.Text, {
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
