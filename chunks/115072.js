n.d(t, { default: () => E }), n(953529), n(642613), n(388685), n(784620), n(973216);
var i = n(951288),
    r = n(647438),
    l = n(772848),
    a = n(442837),
    o = n(544891),
    s = n(159691),
    u = n(481060),
    c = n(53281),
    d = n(476326),
    m = n(304761),
    p = n(273031),
    v = n(859235),
    f = n(898463),
    h = n(951394),
    g = n(667344),
    x = n(493075),
    b = n(594174),
    y = n(768581),
    j = n(55935),
    _ = n(358085),
    O = n(223356),
    S = n(225452),
    w = n(388032),
    P = n(176059);
function C(e) {
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
let k = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    label: e,
    value: e,
}));
function E(e) {
    var t, E, D, T;
    let { transitionState: I, onClose: L } = e,
        N = r.useRef(null),
        A = r.useRef(null),
        [M, R] = r.useState(""),
        [W, Z] = r.useState(""),
        [V, B] = r.useState(),
        [H, q] = r.useState(""),
        [z, G] = r.useState([]),
        [U, Y] = r.useState(),
        [X, F] = r.useState(),
        [K, J] = r.useState(!1),
        [Q, $] = r.useState(""),
        [ee, et] = r.useState(
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
            })((0, _.getOS)()),
        ),
        [en, ei] = r.useState(""),
        [er, el] = r.useState(""),
        [ea, eo] = r.useState(""),
        [es, eu] = r.useState(""),
        [ec, ed] = r.useState(!1),
        [em, ep] = r.useState(!1),
        [ev, ef] = r.useState(!1),
        [eh, eg] = r.useState(null);
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
                if (null != e.body && "dcb3ff805646482955644e9393961f693b39ac62" !== e.body.hash) {
                    let e = new Date("1761949144318"),
                        t = new Date(),
                        n = (0, j.TD)(t, e);
                    n.hours > 6 && eg(n.hours);
                }
            });
    }, []);
    let ex = (0, a.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        eb = (0, a.e7)([m.C], () => {
            var e;
            return null == (e = m.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        { overridesInfo: ey } = (0, x.s)(),
        { overridesInfo: ej } = (0, g.Q)(),
        e_ = Object.entries(C({}, ey, ej)).map((e) => {
            let [t, { variantId: n }] = e;
            return {
                experimentId: t,
                variantId: n,
            };
        });
    async function eO() {
        var e, t;
        if ((ef(!1), "" === M || "" === W || null == V)) return void ed(!0);
        let r = null == U || null == (e = U.features) ? void 0 : e.find((e) => (0, O.pD)(e) === X);
        ep(!0), ed(!1);
        let l = (0, S.D)(
                z.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, O.ZD)(
                {
                    name: M,
                    description: W,
                    priority: V,
                    feature: r,
                    url: H,
                    buildOverride: null != (t = null == eb ? void 0 : eb.id) ? t : null,
                    experimentOverrides: e_,
                },
                !0 === K
                    ? {
                          overridePlatformInformation: K,
                          device: Q,
                          operatingSystem: ee,
                          operatingSystemVersion: en,
                          clientVersion: er,
                          clientBuildNumber: ea,
                          locale: es,
                      }
                    : { overridePlatformInformation: K },
                l,
            ).catch(() => ef(!0));
        ep(!1),
            null != a && a.ok
                ? (ex && window.open(a.body.permalink_url, "_blank"),
                  L(),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("64648").then(n.bind(n, 81155));
                      return (t) => {
                          var n, r;
                          return (0, i.jsx)(
                              e,
                              ((n = C({}, t)),
                              (r = r = { asanaTask: a.body }),
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
                : ef(!0);
    }
    r.useEffect(() => {
        async function e() {
            Y(await (0, O.WG)());
        }
        ex && e();
    }, [ex]),
        r.useEffect(() => {
            if (z.length > 0) {
                var e;
                null == (e = A.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
            }
        }, [z]);
    let eS = r.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith("image/"))
                .at(0);
            void 0 === t ||
                z.some((e) => {
                    var n;
                    return e.filename === t.name && (null == (n = e.item.file) ? void 0 : n.size) === t.size;
                }) ||
                G([
                    ...z,
                    new d.ZP({
                        id: (0, l.Z)(),
                        file: t,
                        platform: d.ow.WEB,
                        origin: "clipboard",
                    }),
                ]);
        },
        [z],
    );
    return (0, i.jsx)(s.u_l, {
        size: "md",
        transitionState: I,
        "aria-label": w.intl.string(w.t.mCCdwi),
        title: w.intl.string(w.t["5LqopY"]),
        actions: [
            {
                variant: "secondary",
                text: w.intl.string(w.t["ETE/oC"]),
                onClick: L,
                autoFocus: !1,
            },
            {
                variant: "primary",
                text: ex ? "Submit and Open Report" : "Submit Report",
                loading: em,
                onClick: eO,
                autoFocus: !1,
            },
        ],
        onClose: L,
        children: (0, i.jsxs)("div", {
            onPaste: eS,
            children: [
                (0, i.jsxs)(u.Kqy, {
                    gap: 8,
                    children: [
                        null != eb &&
                            (0, i.jsxs)(u.M14, {
                                type: "critical",
                                children: [
                                    (0, i.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: w.intl.string(w.t["ZP/hEx"]),
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: w.intl.format(w.t["yY60+7"], {
                                            buildOverrideHook: () =>
                                                (0, i.jsx)("b", { children: null == eb ? void 0 : eb.id }),
                                        }),
                                    }),
                                ],
                            }),
                        null == eb &&
                            null != eh &&
                            (0, i.jsxs)(u.M14, {
                                type: "critical",
                                children: [
                                    (0, i.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: w.intl.formatToPlainString(w.t["ql2Q/e"], { hours: eh }),
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: w.intl.string(w.t.x18RUs),
                                    }),
                                ],
                            }),
                        ex &&
                            Object.keys(e_).length > 0 &&
                            (0, i.jsxs)(u.M14, {
                                type: "critical",
                                children: [
                                    (0, i.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: "You have the following experiments overridden:",
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: e_.map((e) =>
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
                (0, i.jsxs)(u.Kqy, {
                    gap: 24,
                    padding: {
                        top: 8,
                        bottom: 8,
                    },
                    children: [
                        (0, i.jsx)(u.oil, {
                            label: w.intl.string(w.t.OZRgjw),
                            error: ec && "" === M ? w.intl.string(w.t.EkokLy) : null,
                            placeholder: "Something is broken on this screen.",
                            type: "text",
                            value: M,
                            maxLength: 100,
                            onChange: R,
                            autoFocus: !0,
                        }),
                        (0, i.jsx)(u.Kx8, {
                            label: w.intl.string(w.t["1SplH2"]),
                            error: ec && "" === W ? w.intl.string(w.t.EkokLy) : null,
                            placeholder: "What did you expect to see?",
                            value: W,
                            onChange: Z,
                            description: ex
                                ? "You can add additional information/media on the ticket after submitting"
                                : void 0,
                        }),
                        (0, i.jsx)(u.q4e, {
                            label: w.intl.string(w.t.xMXLda),
                            errorMessage: ec && void 0 === V ? w.intl.string(w.t.EkokLy) : null,
                            renderOptionLabel: (e) =>
                                (function (e) {
                                    let t = e.priority;
                                    return (0, i.jsxs)("div", {
                                        className: P.formPriorityImageContainer,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: P.formPriorityTitleContainer,
                                                children: [
                                                    (0, i.jsx)("img", {
                                                        alt: "",
                                                        className: P.formPriorityImage,
                                                        src: (0, y.gT)({
                                                            id: t.emoji,
                                                            animated: !0,
                                                            size: 48,
                                                        }),
                                                    }),
                                                    (0, i.jsx)(u.Text, {
                                                        color: "header-primary",
                                                        variant: "text-sm/semibold",
                                                        className: P.formPriorityTitle,
                                                        children: t.title,
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(u.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                className: P.formPriorityDescription,
                                                children: t.description,
                                            }),
                                        ],
                                    });
                                })(e),
                            onChange: B,
                            options: (0, O.Tj)().map((e) => ({
                                priority: e,
                                value: e.value,
                                label: e.title,
                            })),
                            optionClassName: P.formPriorityOption,
                            value: V,
                            maxVisibleItems: 4,
                            closeOnSelect: !0,
                        }),
                        ex &&
                            (0, i.jsx)(u.VcW, {
                                label: w.intl.string(w.t["77VVd8"]),
                                value: X,
                                options:
                                    null !=
                                    (T =
                                        null == U ||
                                        null == (D = U.features) ||
                                        null == (E = D.filter((e) => "" !== (0, O.pD)(e))) ||
                                        null ==
                                            (t = E.map((e) => {
                                                var t;
                                                return {
                                                    label: null != (t = e.name) ? t : "",
                                                    value: (0, O.pD)(e),
                                                };
                                            }))
                                            ? void 0
                                            : t.sort((e, t) => e.label.localeCompare(t.label)))
                                        ? T
                                        : [],
                                isDisabled: null == U,
                                onChange: (e) => F(e),
                            }),
                        (0, i.jsx)(u.oil, {
                            label: w.intl.string(w.t["7p5pqh"]),
                            placeholder: w.intl.string(w.t.HewMzo),
                            type: "text",
                            value: H,
                            maxLength: 5000,
                            onChange: q,
                        }),
                        (0, i.jsx)(u.Checkbox, {
                            checked: K,
                            onChange: (e) => J(e),
                            label: w.intl.string(w.t.ayhqiH),
                        }),
                        K
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.oil, {
                                          label: w.intl.string(w.t.rrI4Tk),
                                          placeholder: "Device",
                                          value: Q,
                                          onChange: (e) => $(e),
                                      }),
                                      (0, i.jsx)(u.q4e, {
                                          label: w.intl.string(w.t.kcHxi6),
                                          value: ee,
                                          options: k,
                                          onChange: (e) => et(e),
                                      }),
                                      (0, i.jsx)(u.oil, {
                                          label: w.intl.string(w.t.rEtxdg),
                                          placeholder: "Operating System Version",
                                          value: en,
                                          onChange: (e) => ei(e),
                                      }),
                                      (0, i.jsx)(u.oil, {
                                          label: w.intl.string(w.t["wy1M/t"]),
                                          placeholder: "Client Version",
                                          value: er,
                                          onChange: (e) => el(e),
                                      }),
                                      (0, i.jsx)(u.oil, {
                                          label: w.intl.string(w.t.f7kbVu),
                                          placeholder: "Client Build Number",
                                          value: ea,
                                          onChange: (e) => eo(e),
                                      }),
                                      (0, i.jsx)(u.oil, {
                                          label: w.intl.string(w.t["4Z5+zg"]),
                                          placeholder: "Locale",
                                          value: es,
                                          onChange: (e) => eu(e),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(u.Button, {
                            variant: "secondary",
                            text: w.intl.string(w.t.HVxmOD),
                            onClick: () => {
                                var e;
                                null == (e = N.current) || e.activateUploadDialogue();
                            },
                            fullWidth: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: P.fileInput,
                            children: (0, i.jsx)(c.Z, {
                                ref: N,
                                onChange: (e) => {
                                    var t, n;
                                    (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) != null &&
                                        G([
                                            ...z,
                                            ...Array.from(e.currentTarget.files).map(
                                                (e) =>
                                                    new d.ZP({
                                                        id: (0, l.Z)(),
                                                        file: e,
                                                        platform: d.ow.WEB,
                                                        origin: "file_picker",
                                                    }),
                                            ),
                                        ]);
                                },
                                multiple: !0,
                            }),
                        }),
                        z.length > 0
                            ? (0, i.jsx)(u.gNt, {
                                  label: "Preview",
                                  children: (0, i.jsx)("div", {
                                      ref: A,
                                      className: P.attachments,
                                      children:
                                          z.length > 0 &&
                                          z.map((e) =>
                                              (0, i.jsxs)(
                                                  "div",
                                                  {
                                                      className: P.attachment,
                                                      children: [
                                                          (0, i.jsxs)("div", {
                                                              children: [
                                                                  (0, i.jsx)(f.r, {
                                                                      size: v.q.SMALL,
                                                                      upload: e,
                                                                  }),
                                                                  (0, i.jsx)("div", {
                                                                      className: P.removeAttachment,
                                                                      children: (0, i.jsx)(h.ZP, {
                                                                          children: (0, i.jsx)(p.Z, {
                                                                              tooltip: w.intl.string(w.t.vN7REz),
                                                                              onClick: () => {
                                                                                  var t;
                                                                                  return (
                                                                                      (t = e.id),
                                                                                      void G(
                                                                                          z.filter((e) => e.id !== t),
                                                                                      )
                                                                                  );
                                                                              },
                                                                              dangerous: !0,
                                                                              children: (0, i.jsx)(u.XHJ, {
                                                                                  size: "md",
                                                                                  color: "currentColor",
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(u.Text, {
                                                              variant: "text-xxs/medium",
                                                              color: "text-secondary",
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
                        ev
                            ? (0, i.jsx)(u.Text, {
                                  color: "text-danger",
                                  variant: "text-sm/normal",
                                  children: "Something went wrong, try again!",
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
