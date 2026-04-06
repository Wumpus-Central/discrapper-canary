n.d(t, { default: () => L }), n(134528), n(947204);
var i = n(627968),
    a = n(64700),
    r = n(835245),
    l = n(311907),
    s = n(562465),
    o = n(843282),
    u = n(732955),
    d = n(397927),
    c = n(817363),
    m = n(565150),
    h = n(521502),
    p = n(851023),
    f = n(349688),
    x = n(914905),
    v = n(176634),
    g = n(101555),
    b = n(386976),
    j = n(32523),
    y = n(287809),
    _ = n(486020),
    S = n(405269),
    w = n(723702),
    k = n(256252),
    C = n(382913),
    E = n(985018),
    O = n(545052);
let A = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function L(e) {
    let { transitionState: t, onClose: L } = e,
        P = a.useRef(null),
        N = a.useRef(null),
        [T, B] = a.useState(!1),
        [I, R] = a.useState(""),
        [D, z] = a.useState(""),
        [M, V] = a.useState(),
        [W, Y] = a.useState(""),
        [$, H] = a.useState([]),
        [q, K] = a.useState(),
        [F, U] = a.useState(),
        [G, Z] = a.useState(!1),
        [J, X] = a.useState(""),
        [Q, ee] = a.useState(
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
        [et, en] = a.useState(""),
        [ei, ea] = a.useState(""),
        [er, el] = a.useState(""),
        [es, eo] = a.useState(""),
        [eu, ed] = a.useState(!1),
        [ec, em] = a.useState(!1),
        [eh, ep] = a.useState(!1),
        [ef, ex] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "f67d1146cf95bdbf9e7bf8f212dd59c196a3a3b3" !== e.body.hash) {
                let e = new Date("1775511443145"),
                    t = new Date(),
                    n = (0, S.Tf)(t, e);
                n.hours > 6 && ex(n.hours);
            }
        });
    }, []);
    let ev = (0, l.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eg = (0, l.bG)([h.A], () => h.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eb } = (0, j.hI)(),
        { overridesInfo: ej } = (0, b.op)(),
        ey = Object.entries({ ...eb, ...ej }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function e_() {
        if ((ep(!1), "" === I || "" === D || null == M)) return void ed(!0);
        let e = q?.features?.find((e) => (0, k.wY)(e) === F);
        em(!0), ed(!1);
        let t = (0, C.B)(
                $.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, k.zC)(
                {
                    name: I,
                    description: D,
                    priority: M,
                    feature: e,
                    url: W,
                    buildOverride: eg?.id ?? null,
                    experimentOverrides: ey,
                },
                !0 === G
                    ? {
                          overridePlatformInformation: G,
                          device: J,
                          operatingSystem: Q,
                          operatingSystemVersion: et,
                          clientVersion: ei,
                          clientBuildNumber: er,
                          locale: es,
                      }
                    : { overridePlatformInformation: G },
                t,
            ).catch(() => ep(!0));
        em(!1),
            null != a && a.ok
                ? (ev && window.open(a.body.permalink_url, "_blank"),
                  L(),
                  (0, d.mMO)(async () => {
                      let { default: e } = await n.e("71256").then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : ep(!0);
    }
    return (
        a.useEffect(() => {
            async function e() {
                K(await (0, k.xt)());
            }
            ev && e();
        }, [ev]),
        a.useEffect(() => {
            $.length > 0 && N.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [$]),
        (0, v.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    H((e) =>
                        e.some((e) => e.filename === t.name && e.item.file?.size === t.size)
                            ? e
                            : [...e, new m.Ay({ id: (0, r.A)(), file: t, platform: m.xz.WEB, origin: "clipboard" })],
                    );
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                z((t) => t.concat(e));
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
                    text: ev ? "Submit and Open Report" : "Submit Report",
                    loading: ec,
                    onClick: e_,
                    autoFocus: !1,
                },
            ],
            onClose: L,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(d.BJc, {
                        gap: 8,
                        children: [
                            null != eg &&
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
                                                buildOverrideHook: () => (0, i.jsx)("b", { children: eg?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == eg &&
                                null != ef &&
                                (0, i.jsxs)(d.wx6, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: E.intl.formatToPlainString(E.t["ql2Q/e"], { hours: ef }),
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.x18RUs),
                                        }),
                                    ],
                                }),
                            ev &&
                                Object.keys(ey).length > 0 &&
                                (0, i.jsxs)(d.wx6, {
                                    type: "warning",
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: ey.map((e) =>
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
                                error: eu && "" === I ? E.intl.string(E.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: I,
                                maxLength: 100,
                                onChange: R,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(d.fs1, {
                                label: E.intl.string(E.t["1SplH2"]),
                                error: eu && "" === D ? E.intl.string(E.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: D,
                                onChange: z,
                                description: ev
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: E.intl.string(E.t.xMXLda),
                                errorMessage: eu && void 0 === M ? E.intl.string(E.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: O.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: O.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: O.YN,
                                                            src: (0, _._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: O.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: O.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: V,
                                options: (0, k.lx)().map((e) => ({ priority: e, value: e.value, label: e.title })),
                                optionClassName: O.sI,
                                value: M,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            ev &&
                                (0, i.jsx)(d.ZiE, {
                                    selectionMode: "single",
                                    label: E.intl.string(E.t["77VVd8"]),
                                    value: F,
                                    options: (function (e, t) {
                                        let n = new Map();
                                        for (let t of e?.features ?? []) {
                                            let e = t.name ?? "";
                                            n.set(e, (n.get(e) ?? 0) + 1);
                                        }
                                        return (
                                            e?.features
                                                ?.filter((e) => "" !== (0, k.wY)(e))
                                                ?.map((e) => {
                                                    let i = e.name ?? "",
                                                        a = (n.get(i) ?? 0) > 1,
                                                        r = null != e.squad && "" !== e.squad,
                                                        l = a && r ? `${i} (${e.squad})` : i;
                                                    return {
                                                        id: (0, k.wY)(e),
                                                        label: l,
                                                        value: (0, k.wY)(e),
                                                        description: t ? e.squad : void 0,
                                                    };
                                                })
                                                ?.sort((e, t) => e.label.localeCompare(t.label)) ?? []
                                        );
                                    })(q, T),
                                    disabled: null == q,
                                    onSelectionChange: (e) => U(e),
                                    matchSorterOptions: { keys: ["label", "value"] },
                                    onQueryChange: (e) => B("" !== e.target.value.trim()),
                                }),
                            (0, i.jsx)(d.ksK, {
                                label: E.intl.string(E.t["7p5pqh"]),
                                placeholder: E.intl.string(E.t.HewMzo),
                                type: "text",
                                value: W,
                                maxLength: 5e3,
                                onChange: Y,
                            }),
                            (0, i.jsx)(d.Checkbox, {
                                checked: G,
                                onChange: (e) => Z(e),
                                label: E.intl.string(E.t.ayhqiH),
                            }),
                            G
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: J,
                                              onChange: (e) => X(e),
                                          }),
                                          (0, i.jsx)(d.l6P, {
                                              label: E.intl.string(E.t.kcHxi6),
                                              value: Q,
                                              options: A,
                                              onSelectionChange: ee,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: et,
                                              onChange: (e) => en(e),
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: ei,
                                              onChange: (e) => ea(e),
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: er,
                                              onChange: (e) => el(e),
                                          }),
                                          (0, i.jsx)(d.ksK, {
                                              label: E.intl.string(E.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: es,
                                              onChange: (e) => eo(e),
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
                                className: O.Fg,
                                children: (0, i.jsx)(c.A, {
                                    ref: P,
                                    onChange: (e) => {
                                        e.currentTarget?.files?.[0] != null &&
                                            H([
                                                ...$,
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
                            $.length > 0
                                ? (0, i.jsx)(d.D0$, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: N,
                                          className: O.ZO,
                                          children:
                                              $.length > 0 &&
                                              $.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: O.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(x.J, { size: f.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: O.eA,
                                                                          children: (0, i.jsx)(g.Ay, {
                                                                              children: (0, i.jsx)(p.A, {
                                                                                  tooltip: E.intl.string(E.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void H(
                                                                                              $.filter(
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
