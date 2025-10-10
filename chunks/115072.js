n.d(t, { default: () => k }), n(953529), n(642613), n(388685), n(784620), n(973216);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    a = n(442837),
    o = n(544891),
    s = n(755721),
    u = n(481060),
    c = n(53281),
    d = n(476326),
    m = n(304761),
    p = n(273031),
    f = n(859235),
    v = n(898463),
    h = n(951394),
    g = n(667344),
    x = n(493075),
    b = n(594174),
    y = n(768581),
    j = n(55935),
    O = n(358085),
    _ = n(223356),
    S = n(225452),
    w = n(388032),
    P = n(176059);
function C(e) {
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
}
let E = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    label: e,
    value: e,
}));
function k(e) {
    var t, k, T, D;
    let { transitionState: N, onClose: I } = e,
        A = i.useRef(null),
        L = i.useRef(null),
        [R, Z] = i.useState(""),
        [M, z] = i.useState(""),
        [q, B] = i.useState(),
        [V, W] = i.useState(""),
        [G, H] = i.useState([]),
        [U, X] = i.useState(),
        [Y, K] = i.useState(),
        [J, Q] = i.useState(!1),
        [F, $] = i.useState(""),
        [ee, et] = i.useState(
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
        [en, er] = i.useState(""),
        [ei, el] = i.useState(""),
        [ea, eo] = i.useState(""),
        [es, eu] = i.useState(""),
        [ec, ed] = i.useState(!1),
        [em, ep] = i.useState(!1),
        [ef, ev] = i.useState(!1),
        [eh, eg] = i.useState(null);
    i.useEffect(() => {
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
                if (null != e.body && "f95b2fda777b1560edb64d44d9741204dfcd1aa8" !== e.body.hash) {
                    let e = new Date("1759962183119"),
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
        eO = Object.entries(C({}, ey, ej)).map((e) => {
            let [t, { variantId: n }] = e;
            return {
                experimentId: t,
                variantId: n,
            };
        }),
        e_ = () => {
            null == I || I();
        };
    async function eS() {
        var e, t;
        if ((ev(!1), "" === R || "" === M || null == q)) return void ed(!0);
        let i = null == U || null == (e = U.features) ? void 0 : e.find((e) => (0, _.pD)(e) === Y);
        ep(!0), ed(!1);
        let l = (0, S.D)(
                G.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, _.ZD)(
                {
                    name: R,
                    description: M,
                    priority: q,
                    feature: i,
                    url: V,
                    buildOverride: null != (t = null == eb ? void 0 : eb.id) ? t : null,
                    experimentOverrides: eO,
                },
                !0 === J
                    ? {
                          overridePlatformInformation: J,
                          device: F,
                          operatingSystem: ee,
                          operatingSystemVersion: en,
                          clientVersion: ei,
                          clientBuildNumber: ea,
                          locale: es,
                      }
                    : { overridePlatformInformation: J },
                l,
            ).catch(() => ev(!0));
        ep(!1),
            null != a && a.ok
                ? (ex && window.open(a.body.permalink_url, "_blank"),
                  e_(),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("64648").then(n.bind(n, 81155));
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = C({}, t)),
                              (i = i = { asanaTask: a.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n),
                          );
                      };
                  }))
                : ev(!0);
    }
    i.useEffect(() => {
        async function e() {
            X(await (0, _.WG)());
        }
        ex && e();
    }, [ex]),
        i.useEffect(() => {
            if (G.length > 0) {
                var e;
                null == (e = L.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
            }
        }, [G]);
    let ew = i.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith("image/"))
                .at(0);
            void 0 === t ||
                G.some((e) => {
                    var n;
                    return e.filename === t.name && (null == (n = e.item.file) ? void 0 : n.size) === t.size;
                }) ||
                H([
                    ...G,
                    new d.ZP({
                        id: (0, l.Z)(),
                        file: t,
                        platform: d.ow.WEB,
                        origin: "clipboard",
                    }),
                ]);
        },
        [G],
    );
    return (0, r.jsxs)(u.Y0X, {
        transitionState: N,
        "aria-label": w.intl.string(w.t.mCCdws),
        size: u.CgR.MEDIUM,
        parentComponent: "BugReporterModal",
        children: [
            (0, r.jsx)(u.xBx, {
                children: (0, r.jsx)(u.X6q, {
                    variant: "heading-lg/semibold",
                    children: (0, r.jsx)(u.H, { children: w.intl.string(w.t["5Lqopa"]) }),
                }),
            }),
            (0, r.jsx)(u.hzk, {
                onPaste: ew,
                children: (0, r.jsxs)("form", {
                    onSubmit: eS,
                    children: [
                        null != eb &&
                            (0, r.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                body: w.intl.format(w.t["yY60+/"], {
                                    buildOverrideHook: () => (0, r.jsx)("b", { children: null == eb ? void 0 : eb.id }),
                                }),
                                title: w.intl.string(w.t["ZP/hEx"]),
                            }),
                        null == eb &&
                            null != eh &&
                            (0, r.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                title: w.intl.formatToPlainString(w.t["ql2Q/f"], { hours: eh }),
                                body: w.intl.string(w.t.x18RUl),
                            }),
                        ex &&
                            Object.keys(eO).length > 0 &&
                            (0, r.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                title: "You have the following experiments overridden:",
                                body: eO.map((e) =>
                                    (0, r.jsxs)(
                                        "div",
                                        {
                                            children: [e.experimentId, " (variant ", e.variantId, ")"],
                                        },
                                        e.experimentId,
                                    ),
                                ),
                            }),
                        (0, r.jsxs)(u.Kqy, {
                            gap: 24,
                            padding: {
                                top: 8,
                                bottom: 8,
                            },
                            children: [
                                (0, r.jsx)(u.oil, {
                                    label: w.intl.string(w.t.OZRgj4),
                                    error: ec && "" === R ? w.intl.string(w.t.EkokLy) : null,
                                    placeholder: "Something is broken on this screen.",
                                    type: "text",
                                    value: R,
                                    maxLength: 100,
                                    onChange: Z,
                                }),
                                (0, r.jsx)(u.Kx8, {
                                    label: w.intl.string(w.t["1SplHx"]),
                                    error: ec && "" === M ? w.intl.string(w.t.EkokLy) : null,
                                    placeholder: "What did you expect to see?",
                                    value: M,
                                    onChange: z,
                                    description: ex
                                        ? "You can add additional information/media on the ticket after submitting"
                                        : void 0,
                                }),
                                (0, r.jsx)(u.q4e, {
                                    label: w.intl.string(w.t.xMXLdX),
                                    errorMessage: ec && void 0 === q ? w.intl.string(w.t.EkokLy) : null,
                                    renderOptionLabel: (e) =>
                                        (function (e) {
                                            let t = e.priority;
                                            return (0, r.jsxs)("div", {
                                                className: P.formPriorityImageContainer,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: P.formPriorityTitleContainer,
                                                        children: [
                                                            (0, r.jsx)("img", {
                                                                alt: "",
                                                                className: P.formPriorityImage,
                                                                src: (0, y.gT)({
                                                                    id: t.emoji,
                                                                    animated: !0,
                                                                    size: 48,
                                                                }),
                                                            }),
                                                            (0, r.jsx)(u.Text, {
                                                                color: "header-primary",
                                                                variant: "text-sm/semibold",
                                                                className: P.formPriorityTitle,
                                                                children: t.title,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        color: "header-secondary",
                                                        variant: "text-xs/normal",
                                                        className: P.formPriorityDescription,
                                                        children: t.description,
                                                    }),
                                                ],
                                            });
                                        })(e),
                                    onChange: B,
                                    options: (0, _.Tj)().map((e) => ({
                                        priority: e,
                                        value: e.value,
                                        label: e.title,
                                    })),
                                    optionClassName: P.formPriorityOption,
                                    value: q,
                                    maxVisibleItems: 4,
                                    closeOnSelect: !0,
                                }),
                                ex &&
                                    (0, r.jsx)(u.VcW, {
                                        label: w.intl.string(w.t["77VVd3"]),
                                        value: Y,
                                        options:
                                            null !=
                                            (D =
                                                null == U ||
                                                null == (T = U.features) ||
                                                null == (k = T.filter((e) => "" !== (0, _.pD)(e))) ||
                                                null ==
                                                    (t = k.map((e) => {
                                                        var t;
                                                        return {
                                                            label: null != (t = e.name) ? t : "",
                                                            value: (0, _.pD)(e),
                                                        };
                                                    }))
                                                    ? void 0
                                                    : t.sort((e, t) => e.label.localeCompare(t.label)))
                                                ? D
                                                : [],
                                        isDisabled: null == U,
                                        onChange: (e) => K(e),
                                    }),
                                (0, r.jsx)(u.oil, {
                                    label: w.intl.string(w.t["7p5pqq"]),
                                    placeholder: w.intl.string(w.t.HewMzs),
                                    type: "text",
                                    value: V,
                                    maxLength: 5000,
                                    onChange: W,
                                }),
                                (0, r.jsx)(u.XZJ, {
                                    checked: J,
                                    onChange: (e) => Q(e),
                                    label: w.intl.string(w.t.ayhqiI),
                                }),
                                J
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(u.oil, {
                                                  label: w.intl.string(w.t.rrI4Tk),
                                                  placeholder: "Device",
                                                  value: F,
                                                  onChange: (e) => $(e),
                                              }),
                                              (0, r.jsx)(u.q4e, {
                                                  label: w.intl.string(w.t.kcHxi4),
                                                  value: ee,
                                                  options: E,
                                                  onChange: (e) => et(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: w.intl.string(w.t.rEtxdn),
                                                  placeholder: "Operating System Version",
                                                  value: en,
                                                  onChange: (e) => er(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: w.intl.string(w.t["wy1M/v"]),
                                                  placeholder: "Client Version",
                                                  value: ei,
                                                  onChange: (e) => el(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: w.intl.string(w.t.f7kbVl),
                                                  placeholder: "Client Build Number",
                                                  value: ea,
                                                  onChange: (e) => eo(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: w.intl.string(w.t["4Z5+zs"]),
                                                  placeholder: "Locale",
                                                  value: es,
                                                  onChange: (e) => eu(e),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsxs)(s.zx, {
                                    color: s.zx.Colors.PRIMARY,
                                    children: [
                                        w.intl.string(w.t.HVxmOD),
                                        (0, r.jsx)(c.Z, {
                                            ref: A,
                                            onChange: (e) => {
                                                var t, n;
                                                (null == (n = e.currentTarget) || null == (t = n.files)
                                                    ? void 0
                                                    : t[0]) != null &&
                                                    H([
                                                        ...G,
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
                                    ],
                                }),
                                G.length > 0
                                    ? (0, r.jsx)(u.gNt, {
                                          label: "Preview",
                                          children: (0, r.jsx)("div", {
                                              ref: L,
                                              className: P.attachments,
                                              children:
                                                  G.length > 0 &&
                                                  G.map((e) =>
                                                      (0, r.jsxs)(
                                                          "div",
                                                          {
                                                              className: P.attachment,
                                                              children: [
                                                                  (0, r.jsxs)("div", {
                                                                      children: [
                                                                          (0, r.jsx)(v.r, {
                                                                              size: f.q.SMALL,
                                                                              upload: e,
                                                                          }),
                                                                          (0, r.jsx)("div", {
                                                                              className: P.removeAttachment,
                                                                              children: (0, r.jsx)(h.ZP, {
                                                                                  children: (0, r.jsx)(p.Z, {
                                                                                      tooltip: w.intl.string(
                                                                                          w.t.vN7REx,
                                                                                      ),
                                                                                      onClick: () => {
                                                                                          var t;
                                                                                          return (
                                                                                              (t = e.id),
                                                                                              void H(
                                                                                                  G.filter(
                                                                                                      (e) => e.id !== t,
                                                                                                  ),
                                                                                              )
                                                                                          );
                                                                                      },
                                                                                      dangerous: !0,
                                                                                      children: (0, r.jsx)(u.XHJ, {
                                                                                          size: "md",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  (0, r.jsx)(u.Text, {
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
                                ef
                                    ? (0, r.jsx)(u.Text, {
                                          color: "text-danger",
                                          variant: "text-sm/normal",
                                          children: "Something went wrong, try again!",
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(u.mzw, {
                children: (0, r.jsxs)(u.Kqy, {
                    direction: "horizontal",
                    gap: 8,
                    justify: "end",
                    children: [
                        (0, r.jsx)(u.zxk, {
                            variant: "primary",
                            text: ex ? "Submit and Open Report" : "Submit Report",
                            loading: em,
                            onClick: eS,
                        }),
                        (0, r.jsx)(u.zxk, {
                            variant: "secondary",
                            text: w.intl.string(w.t["ETE/oK"]),
                            onClick: e_,
                        }),
                    ],
                }),
            }),
        ],
    });
}
