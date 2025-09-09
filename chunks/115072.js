n.d(t, { default: () => P }), n(953529), n(642613), n(388685), n(784620), n(973216);
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
    h = n(273031),
    p = n(859235),
    f = n(898463),
    v = n(951394),
    x = n(594174),
    g = n(768581),
    y = n(55935),
    j = n(358085),
    b = n(223356),
    O = n(225452),
    S = n(388032),
    _ = n(176059);
let w = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    label: e,
    value: e,
}));
function P(e) {
    var t, P, C, E;
    let { transitionState: k, onClose: D } = e,
        T = i.useRef(null),
        N = i.useRef(null),
        [A, R] = i.useState(""),
        [L, I] = i.useState(""),
        [W, Z] = i.useState(),
        [q, z] = i.useState(""),
        [M, B] = i.useState([]),
        [V, G] = i.useState(),
        [H, U] = i.useState(),
        [X, J] = i.useState(!1),
        [K, Y] = i.useState(""),
        [F, Q] = i.useState(
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
            })((0, j.getOS)()),
        ),
        [$, ee] = i.useState(""),
        [et, en] = i.useState(""),
        [er, ei] = i.useState(""),
        [el, ea] = i.useState(""),
        [eo, es] = i.useState(!1),
        [eu, ec] = i.useState(!1),
        [ed, em] = i.useState(!1),
        [eh, ep] = i.useState(null);
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
                if (null != e.body && "76ca60330b8c2b6966d980ee386e65d5806c36c4" !== e.body.hash) {
                    let e = new Date("1757448682219"),
                        t = new Date(),
                        n = (0, y.TD)(t, e);
                    n.hours > 6 && ep(n.hours);
                }
            });
    }, []);
    let ef = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ev = (0, a.e7)([m.C], () => {
            var e;
            return null == (e = m.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        ex = () => {
            null == D || D();
        };
    async function eg() {
        var e, t;
        if ((em(!1), "" === A || "" === L || null == W)) return void es(!0);
        let i = null == V || null == (e = V.features) ? void 0 : e.find((e) => (0, b.pD)(e) === H);
        ec(!0), es(!1);
        let l = (0, O.D)(
                M.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, b.ZD)(
                {
                    name: A,
                    description: L,
                    priority: W,
                    feature: i,
                    url: q,
                    buildOverride: null != (t = null == ev ? void 0 : ev.id) ? t : null,
                },
                !0 === X
                    ? {
                          overridePlatformInformation: X,
                          device: K,
                          operatingSystem: F,
                          operatingSystemVersion: $,
                          clientVersion: et,
                          clientBuildNumber: er,
                          locale: el,
                      }
                    : { overridePlatformInformation: X },
                l,
            ).catch(() => em(!0));
        ec(!1),
            null != a && a.ok
                ? (ef && window.open(a.body.permalink_url, "_blank"),
                  ex(),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("64648").then(n.bind(n, 81155));
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
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
                              })({}, t)),
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
                : em(!0);
    }
    i.useEffect(() => {
        async function e() {
            G(await (0, b.WG)());
        }
        ef && e();
    }, [ef]),
        i.useEffect(() => {
            if (M.length > 0) {
                var e;
                null == (e = N.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
            }
        }, [M]);
    let ey = i.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith("image/"))
                .at(0);
            void 0 === t ||
                M.some((e) => {
                    var n;
                    return e.filename === t.name && (null == (n = e.item.file) ? void 0 : n.size) === t.size;
                }) ||
                B([
                    ...M,
                    new d.ZP({
                        id: (0, l.Z)(),
                        file: t,
                        platform: d.ow.WEB,
                        origin: "clipboard",
                    }),
                ]);
        },
        [M],
    );
    return (0, r.jsxs)(u.Y0X, {
        transitionState: k,
        "aria-label": S.intl.string(S.t.mCCdws),
        size: u.CgR.MEDIUM,
        parentComponent: "BugReporterModal",
        children: [
            (0, r.jsx)(u.xBx, {
                children: (0, r.jsx)(u.X6q, {
                    variant: "heading-lg/semibold",
                    children: (0, r.jsx)(u.H, { children: S.intl.string(S.t["5Lqopa"]) }),
                }),
            }),
            (0, r.jsx)(u.hzk, {
                onPaste: ey,
                children: (0, r.jsxs)("form", {
                    onSubmit: eg,
                    children: [
                        null != ev &&
                            (0, r.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                body: S.intl.format(S.t["yY60+/"], {
                                    buildOverrideHook: () => (0, r.jsx)("b", { children: null == ev ? void 0 : ev.id }),
                                }),
                                title: S.intl.string(S.t["ZP/hEx"]),
                            }),
                        null == ev &&
                            null != eh &&
                            (0, r.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                title: S.intl.formatToPlainString(S.t["ql2Q/f"], { hours: eh }),
                                body: S.intl.string(S.t.x18RUl),
                            }),
                        (0, r.jsxs)(u.Kqy, {
                            gap: 24,
                            padding: {
                                top: 8,
                                bottom: 8,
                            },
                            children: [
                                (0, r.jsx)(u.oil, {
                                    label: S.intl.string(S.t.OZRgj4),
                                    error: eo && "" === A ? S.intl.string(S.t.EkokLy) : null,
                                    placeholder: "Something is broken on this screen.",
                                    type: "text",
                                    value: A,
                                    maxLength: 100,
                                    onChange: R,
                                }),
                                (0, r.jsxs)(u.xJW, {
                                    error: eo && "" === L ? S.intl.string(S.t.EkokLy) : null,
                                    title: S.intl.string(S.t["1SplHx"]),
                                    children: [
                                        (0, r.jsx)(u.Kx8, {
                                            placeholder: "What did you expect to see?",
                                            value: L,
                                            onChange: I,
                                        }),
                                        ef &&
                                            (0, r.jsx)(u.R94, {
                                                type: u.geA.DESCRIPTION,
                                                children:
                                                    "You can add additional information/media on the ticket after submitting",
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(u.xJW, {
                                    error: eo && void 0 === W ? S.intl.string(S.t.EkokLy) : null,
                                    title: S.intl.string(S.t.xMXLdX),
                                    children: (0, r.jsx)(u.q4e, {
                                        renderOptionLabel: (e) =>
                                            (function (e) {
                                                let t = e.priority;
                                                return (0, r.jsxs)("div", {
                                                    className: _.formPriorityImageContainer,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: _.formPriorityTitleContainer,
                                                            children: [
                                                                (0, r.jsx)("img", {
                                                                    alt: "",
                                                                    className: _.formPriorityImage,
                                                                    src: (0, g.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48,
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(u.Text, {
                                                                    color: "header-primary",
                                                                    variant: "text-sm/semibold",
                                                                    className: _.formPriorityTitle,
                                                                    children: t.title,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            className: _.formPriorityDescription,
                                                            children: t.description,
                                                        }),
                                                    ],
                                                });
                                            })(e),
                                        onChange: Z,
                                        options: (0, b.Tj)().map((e) => ({
                                            priority: e,
                                            value: e.value,
                                            label: e.title,
                                        })),
                                        value: W,
                                        maxVisibleItems: 3,
                                        closeOnSelect: !0,
                                    }),
                                }),
                                ef &&
                                    (0, r.jsx)(u.xJW, {
                                        title: S.intl.string(S.t["77VVd3"]),
                                        children: (0, r.jsx)(u.VcW, {
                                            value: H,
                                            options:
                                                null !=
                                                (E =
                                                    null == V ||
                                                    null == (C = V.features) ||
                                                    null == (P = C.filter((e) => "" !== (0, b.pD)(e))) ||
                                                    null ==
                                                        (t = P.map((e) => {
                                                            var t;
                                                            return {
                                                                label: null != (t = e.name) ? t : "",
                                                                value: (0, b.pD)(e),
                                                            };
                                                        }))
                                                        ? void 0
                                                        : t.sort((e, t) => e.label.localeCompare(t.label)))
                                                    ? E
                                                    : [],
                                            isDisabled: null == V,
                                            onChange: (e) => U(e),
                                        }),
                                    }),
                                (0, r.jsx)(u.oil, {
                                    label: S.intl.string(S.t["7p5pqq"]),
                                    placeholder: S.intl.string(S.t.HewMzs),
                                    type: "text",
                                    value: q,
                                    maxLength: 5000,
                                    onChange: z,
                                }),
                                (0, r.jsx)(u.xJW, {
                                    children: (0, r.jsx)(s.$q, {
                                        value: X,
                                        onChange: (e, t) => J(t),
                                        children: S.intl.string(S.t.ayhqiI),
                                    }),
                                }),
                                X
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(u.oil, {
                                                  label: S.intl.string(S.t.rrI4Tk),
                                                  placeholder: "Device",
                                                  value: K,
                                                  onChange: (e) => Y(e),
                                              }),
                                              (0, r.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t.kcHxi4),
                                                  children: (0, r.jsx)(u.q4e, {
                                                      value: F,
                                                      options: w,
                                                      onChange: (e) => Q(e),
                                                  }),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: S.intl.string(S.t.rEtxdn),
                                                  placeholder: "Operating System Version",
                                                  value: $,
                                                  onChange: (e) => ee(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: S.intl.string(S.t["wy1M/v"]),
                                                  placeholder: "Client Version",
                                                  value: et,
                                                  onChange: (e) => en(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: S.intl.string(S.t.f7kbVl),
                                                  placeholder: "Client Build Number",
                                                  value: er,
                                                  onChange: (e) => ei(e),
                                              }),
                                              (0, r.jsx)(u.oil, {
                                                  label: S.intl.string(S.t["4Z5+zs"]),
                                                  placeholder: "Locale",
                                                  value: el,
                                                  onChange: (e) => ea(e),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsxs)(s.zx, {
                                    color: s.zx.Colors.PRIMARY,
                                    children: [
                                        S.intl.string(S.t.HVxmOD),
                                        (0, r.jsx)(c.Z, {
                                            ref: T,
                                            onChange: (e) => {
                                                var t, n;
                                                (null == (n = e.currentTarget) || null == (t = n.files)
                                                    ? void 0
                                                    : t[0]) != null &&
                                                    B([
                                                        ...M,
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
                                M.length > 0
                                    ? (0, r.jsxs)(u.hjN, {
                                          children: [
                                              (0, r.jsx)(u.vwX, { children: "Preview" }),
                                              (0, r.jsx)("div", {
                                                  ref: N,
                                                  className: _.attachments,
                                                  children:
                                                      M.length > 0 &&
                                                      M.map((e) =>
                                                          (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  className: _.attachment,
                                                                  children: [
                                                                      (0, r.jsxs)("div", {
                                                                          children: [
                                                                              (0, r.jsx)(f.r, {
                                                                                  size: p.q.SMALL,
                                                                                  upload: e,
                                                                              }),
                                                                              (0, r.jsx)("div", {
                                                                                  className: _.removeAttachment,
                                                                                  children: (0, r.jsx)(v.ZP, {
                                                                                      children: (0, r.jsx)(h.Z, {
                                                                                          tooltip: S.intl.string(
                                                                                              S.t.vN7REx,
                                                                                          ),
                                                                                          onClick: () => {
                                                                                              var t;
                                                                                              return (
                                                                                                  (t = e.id),
                                                                                                  void B(
                                                                                                      M.filter(
                                                                                                          (e) =>
                                                                                                              e.id !==
                                                                                                              t,
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
                                          ],
                                      })
                                    : null,
                                ed
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
                            text: ef ? "Submit and Open Report" : "Submit Report",
                            loading: eu,
                            onClick: eg,
                        }),
                        (0, r.jsx)(u.zxk, {
                            variant: "secondary",
                            text: S.intl.string(S.t["ETE/oK"]),
                            onClick: ex,
                        }),
                    ],
                }),
            }),
        ],
    });
}
