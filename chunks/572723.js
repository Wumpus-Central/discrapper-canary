n.d(t, { default: () => L }), n(134528), n(947204);
var i = n(627968),
    a = n(64700),
    l = n(835245),
    r = n(311907),
    s = n(562465),
    o = n(843282),
    u = n(732955),
    d = n(397927),
    c = n(817363),
    m = n(565150),
    h = n(521502),
    p = n(851023),
    x = n(349688),
    f = n(914905),
    v = n(176634),
    g = n(101555),
    b = n(386976),
    j = n(32523),
    _ = n(287809),
    y = n(486020),
    S = n(405269),
    w = n(723702),
    k = n(256252),
    C = n(382913),
    E = n(985018),
    A = n(433963);
let O = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function L(e) {
    let { transitionState: t, onClose: L } = e,
        P = a.useRef(null),
        N = a.useRef(null),
        [T, B] = a.useState(""),
        [I, R] = a.useState(""),
        [D, z] = a.useState(),
        [M, V] = a.useState(""),
        [W, Y] = a.useState([]),
        [$, H] = a.useState(),
        [K, q] = a.useState(),
        [F, U] = a.useState(!1),
        [G, Z] = a.useState(""),
        [J, X] = a.useState(
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
        [Q, ee] = a.useState(""),
        [et, en] = a.useState(""),
        [ei, ea] = a.useState(""),
        [el, er] = a.useState(""),
        [es, eo] = a.useState(!1),
        [eu, ed] = a.useState(!1),
        [ec, em] = a.useState(!1),
        [eh, ep] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "b5493d81a77d4b9172072b5394c078408c2323de" !== e.body.hash) {
                let e = new Date("1774474520738"),
                    t = new Date(),
                    n = (0, S.Tf)(t, e);
                n.hours > 6 && ep(n.hours);
            }
        });
    }, []);
    let ex = (0, r.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        ef = (0, r.bG)([h.A], () => h.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: ev } = (0, j.hI)(),
        { overridesInfo: eg } = (0, b.op)(),
        eb = Object.entries({ ...ev, ...eg }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function ej() {
        if ((em(!1), "" === T || "" === I || null == D)) return void eo(!0);
        let e = $?.features?.find((e) => (0, k.wY)(e) === K);
        ed(!0), eo(!1);
        let t = (0, C.B)(
                W.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, k.zC)(
                {
                    name: T,
                    description: I,
                    priority: D,
                    feature: e,
                    url: M,
                    buildOverride: ef?.id ?? null,
                    experimentOverrides: eb,
                },
                !0 === F
                    ? {
                          overridePlatformInformation: F,
                          device: G,
                          operatingSystem: J,
                          operatingSystemVersion: Q,
                          clientVersion: et,
                          clientBuildNumber: ei,
                          locale: el,
                      }
                    : { overridePlatformInformation: F },
                t,
            ).catch(() => em(!0));
        ed(!1),
            null != a && a.ok
                ? (ex && window.open(a.body.permalink_url, "_blank"),
                  L(),
                  (0, d.mMO)(async () => {
                      let { default: e } = await n.e("71256").then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : em(!0);
    }
    return (
        a.useEffect(() => {
            async function e() {
                H(await (0, k.xt)());
            }
            ex && e();
        }, [ex]),
        a.useEffect(() => {
            W.length > 0 && N.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [W]),
        (0, v.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    Y((e) =>
                        e.some((e) => e.filename === t.name && e.item.file?.size === t.size)
                            ? e
                            : [...e, new m.Ay({ id: (0, l.A)(), file: t, platform: m.xz.WEB, origin: "clipboard" })],
                    );
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                R((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.aFV, {
            size: "md",
            transitionState: t,
            "aria-label": E.intl.string(E.t.mCCdwi),
            title: E.intl.string(E.t["5LqopY"]),
            actions: [
                { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: L, autoFocus: !1 },
                {
                    variant: "primary",
                    text: ex ? "Submit and Open Report" : "Submit Report",
                    loading: eu,
                    onClick: ej,
                    autoFocus: !1,
                },
            ],
            onClose: L,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(d.BJc, {
                        gap: 8,
                        children: [
                            null != ef &&
                                (0, i.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: E.intl.string(E.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.format(E.t["yY60+7"], {
                                                buildOverrideHook: () => (0, i.jsx)("b", { children: ef?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == ef &&
                                null != eh &&
                                (0, i.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: E.intl.formatToPlainString(E.t["ql2Q/e"], { hours: eh }),
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.x18RUs),
                                        }),
                                    ],
                                }),
                            ex &&
                                Object.keys(eb).length > 0 &&
                                (0, i.jsxs)(d.wx6, {
                                    type: "warning",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: eb.map((e) =>
                                                (0, i.jsxs)(
                                                    "div",
                                                    { children: [e.experimentId, " (variant ", e.variantId, ")"] },
                                                    e.experimentId,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)(d.BJc, {
                        gap: 24,
                        padding: { top: 8, bottom: 8 },
                        children: [
                            (0, i.jsx)(d.ksK, {
                                label: E.intl.string(E.t.OZRgjw),
                                error: es && "" === T ? E.intl.string(E.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: T,
                                maxLength: 100,
                                onChange: B,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(d.fs1, {
                                label: E.intl.string(E.t["1SplH2"]),
                                error: es && "" === I ? E.intl.string(E.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: I,
                                onChange: R,
                                description: ex
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: E.intl.string(E.t.xMXLda),
                                errorMessage: es && void 0 === D ? E.intl.string(E.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: A.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: A.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: A.YN,
                                                            src: (0, y._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: A.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: A.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: z,
                                options: (0, k.lx)().map((e) => ({ priority: e, value: e.value, label: e.title })),
                                optionClassName: A.sI,
                                value: D,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            ex &&
                                (0, i.jsx)(d.ZiE, {
                                    selectionMode: "single",
                                    label: E.intl.string(E.t["77VVd8"]),
                                    value: K,
                                    options: (function (e) {
                                        let t = new Map();
                                        for (let n of e?.features ?? []) {
                                            let e = n.name ?? "";
                                            t.set(e, (t.get(e) ?? 0) + 1);
                                        }
                                        return (
                                            e?.features
                                                ?.filter((e) => "" !== (0, k.wY)(e))
                                                ?.map((e) => {
                                                    let n = e.name ?? "",
                                                        i = (t.get(n) ?? 0) > 1,
                                                        a = null != e.squad && "" !== e.squad,
                                                        l = i && a ? `${n} (${e.squad})` : n;
                                                    return { id: (0, k.wY)(e), label: l, value: (0, k.wY)(e) };
                                                })
                                                ?.sort((e, t) => e.label.localeCompare(t.label)) ?? []
                                        );
                                    })($),
                                    disabled: null == $,
                                    onSelectionChange: (e) => q(e),
                                }),
                            (0, i.jsx)(d.ksK, {
                                label: E.intl.string(E.t["7p5pqh"]),
                                placeholder: E.intl.string(E.t.HewMzo),
                                type: "text",
                                value: M,
                                maxLength: 5e3,
                                onChange: V,
                            }),
                            (0, i.jsx)(d.Checkbox, {
                                checked: F,
                                onChange: (e) => U(e),
                                label: E.intl.string(E.t.ayhqiH),
                            }),
                            F
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: G,
                                              onChange: (e) => Z(e),
                                          }),
                                          (0, i.jsx)(d.l6P, {
                                              label: E.intl.string(E.t.kcHxi6),
                                              value: J,
                                              options: O,
                                              onSelectionChange: X,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: Q,
                                              onChange: (e) => ee(e),
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: et,
                                              onChange: (e) => en(e),
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: ei,
                                              onChange: (e) => ea(e),
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: el,
                                              onChange: (e) => er(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                text: E.intl.string(E.t.HVxmOD),
                                onClick: () => {
                                    P.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: A.Fg,
                                children: (0, i.jsx)(c.A, {
                                    ref: P,
                                    onChange: (e) => {
                                        e.currentTarget?.files?.[0] != null &&
                                            Y([
                                                ...W,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new m.Ay({
                                                            id: (0, l.A)(),
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
                            W.length > 0
                                ? (0, i.jsx)(d.D0$, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: N,
                                          className: A.ZO,
                                          children:
                                              W.length > 0 &&
                                              W.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: A.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(f.J, { size: x.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: A.eA,
                                                                          children: (0, i.jsx)(g.Ay, {
                                                                              children: (0, i.jsx)(p.A, {
                                                                                  tooltip: E.intl.string(E.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void Y(
                                                                                              W.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(d.ucK, {
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
                            ec
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
