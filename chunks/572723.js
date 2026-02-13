i.d(t, { default: () => L }), i(134528), i(947204);
var n = i(627968),
    a = i(64700),
    l = i(835245),
    r = i(311907),
    s = i(562465),
    o = i(843282),
    u = i(732955),
    d = i(397927),
    c = i(817363),
    m = i(565150),
    h = i(521502),
    p = i(851023),
    x = i(349688),
    f = i(914905),
    v = i(176634),
    g = i(101555),
    b = i(386976),
    j = i(32523),
    _ = i(287809),
    y = i(486020),
    S = i(405269),
    w = i(723702),
    k = i(256252),
    C = i(382913),
    E = i(985018),
    A = i(433963);
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
        [V, M] = a.useState(""),
        [W, Y] = a.useState([]),
        [H, K] = a.useState(),
        [$, F] = a.useState(),
        [U, G] = a.useState(!1),
        [q, Z] = a.useState(""),
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
        [et, ei] = a.useState(""),
        [en, ea] = a.useState(""),
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
            if (null != e.body && "84800b0e9bed6ea0f557b2e971f45d6a89d2708a" !== e.body.hash) {
                let e = new Date("1770942477402"),
                    t = new Date(),
                    i = (0, S.Tf)(t, e);
                i.hours > 6 && ep(i.hours);
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
            let [t, { variantId: i }] = e;
            return { experimentId: t, variantId: i };
        });
    async function ej() {
        if ((em(!1), "" === T || "" === I || null == D)) return void eo(!0);
        let e = H?.features?.find((e) => (0, k.wY)(e) === $);
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
                    url: V,
                    buildOverride: ef?.id ?? null,
                    experimentOverrides: eb,
                },
                !0 === U
                    ? {
                          overridePlatformInformation: U,
                          device: q,
                          operatingSystem: J,
                          operatingSystemVersion: Q,
                          clientVersion: et,
                          clientBuildNumber: en,
                          locale: el,
                      }
                    : { overridePlatformInformation: U },
                t,
            ).catch(() => em(!0));
        ed(!1),
            null != a && a.ok
                ? (ex && window.open(a.body.permalink_url, "_blank"),
                  L(),
                  (0, d.mMO)(async () => {
                      let { default: e } = await i.e("71256").then(i.bind(i, 369323));
                      return (t) => (0, n.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : em(!0);
    }
    return (
        a.useEffect(() => {
            async function e() {
                K(await (0, k.xt)());
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
        (0, n.jsx)(u.aFV, {
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
            children: (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)(d.BJc, {
                        gap: 8,
                        children: [
                            null != ef &&
                                (0, n.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, n.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: E.intl.string(E.t["ZP/hEx"]),
                                        }),
                                        (0, n.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.format(E.t["yY60+7"], {
                                                buildOverrideHook: () => (0, n.jsx)("b", { children: ef?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == ef &&
                                null != eh &&
                                (0, n.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, n.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: E.intl.formatToPlainString(E.t["ql2Q/e"], { hours: eh }),
                                        }),
                                        (0, n.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.x18RUs),
                                        }),
                                    ],
                                }),
                            ex &&
                                Object.keys(eb).length > 0 &&
                                (0, n.jsxs)(d.wx6, {
                                    type: "warning",
                                    children: [
                                        (0, n.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, n.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: eb.map((e) =>
                                                (0, n.jsxs)(
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
                    (0, n.jsxs)(d.BJc, {
                        gap: 24,
                        padding: { top: 8, bottom: 8 },
                        children: [
                            (0, n.jsx)(d.ksK, {
                                label: E.intl.string(E.t.OZRgjw),
                                error: es && "" === T ? E.intl.string(E.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: T,
                                maxLength: 100,
                                onChange: B,
                                autoFocus: !0,
                            }),
                            (0, n.jsx)(d.fs1, {
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
                            (0, n.jsx)(o.Te, {
                                label: E.intl.string(E.t.xMXLda),
                                errorMessage: es && void 0 === D ? E.intl.string(E.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, n.jsxs)("div", {
                                            className: A.jS,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: A.Kt,
                                                    children: [
                                                        (0, n.jsx)("img", {
                                                            alt: "",
                                                            className: A.YN,
                                                            src: (0, y._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, n.jsx)(d.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: A.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(d.Text, {
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
                                (0, n.jsx)(d.ZiE, {
                                    selectionMode: "single",
                                    label: E.intl.string(E.t["77VVd8"]),
                                    value: $,
                                    options:
                                        H?.features
                                            ?.filter((e) => "" !== (0, k.wY)(e))
                                            ?.map((e) => ({
                                                id: (0, k.wY)(e),
                                                label: e.name ?? "",
                                                value: (0, k.wY)(e),
                                            }))
                                            ?.sort((e, t) => e.label.localeCompare(t.label)) ?? [],
                                    disabled: null == H,
                                    onSelectionChange: (e) => F(e),
                                }),
                            (0, n.jsx)(d.ksK, {
                                label: E.intl.string(E.t["7p5pqh"]),
                                placeholder: E.intl.string(E.t.HewMzo),
                                type: "text",
                                value: V,
                                maxLength: 5e3,
                                onChange: M,
                            }),
                            (0, n.jsx)(d.Checkbox, {
                                checked: U,
                                onChange: (e) => G(e),
                                label: E.intl.string(E.t.ayhqiH),
                            }),
                            U
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: q,
                                              onChange: (e) => Z(e),
                                          }),
                                          (0, n.jsx)(d.l6P, {
                                              label: E.intl.string(E.t.kcHxi6),
                                              value: J,
                                              options: O,
                                              onSelectionChange: X,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, n.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: Q,
                                              onChange: (e) => ee(e),
                                          }),
                                          (0, n.jsx)(d.ksK, {
                                              label: E.intl.string(E.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: et,
                                              onChange: (e) => ei(e),
                                          }),
                                          (0, n.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: en,
                                              onChange: (e) => ea(e),
                                          }),
                                          (0, n.jsx)(d.ksK, {
                                              label: E.intl.string(E.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: el,
                                              onChange: (e) => er(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, n.jsx)(d.Button, {
                                variant: "secondary",
                                text: E.intl.string(E.t.HVxmOD),
                                onClick: () => {
                                    P.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, n.jsx)("div", {
                                className: A.Fg,
                                children: (0, n.jsx)(c.A, {
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
                                ? (0, n.jsx)(d.D0$, {
                                      label: "Preview",
                                      children: (0, n.jsx)("div", {
                                          ref: N,
                                          className: A.ZO,
                                          children:
                                              W.length > 0 &&
                                              W.map((e) =>
                                                  (0, n.jsxs)(
                                                      "div",
                                                      {
                                                          className: A.oh,
                                                          children: [
                                                              (0, n.jsxs)("div", {
                                                                  children: [
                                                                      (0, n.jsx)(f.J, { size: x.L.SMALL, upload: e }),
                                                                      (0, n.jsx)("div", {
                                                                          className: A.eA,
                                                                          children: (0, n.jsx)(g.Ay, {
                                                                              children: (0, n.jsx)(p.A, {
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
                                                                                  children: (0, n.jsx)(d.ucK, {
                                                                                      size: "md",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, n.jsx)(d.Text, {
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
                                ? (0, n.jsx)(d.Text, {
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
