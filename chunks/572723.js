n.d(t, { default: () => Y }), n(134528), n(947204);
var i = n(627968),
    a = n(64700),
    l = n(835245),
    r = n(311907),
    s = n(562465),
    o = n(843282),
    u = n(189213),
    d = n(834730),
    c = n(192308),
    m = n(331322),
    p = n(683071),
    h = n(534514),
    f = n(292666),
    v = n(260598),
    g = n(783878),
    x = n(150934),
    b = n(691885),
    j = n(821609),
    y = n(452027),
    _ = n(241326),
    S = n(817363),
    w = n(565150),
    k = n(521502),
    E = n(851023),
    C = n(349688),
    A = n(914905),
    O = n(176634),
    L = n(101555),
    P = n(386976),
    N = n(32523),
    I = n(287809),
    B = n(486020),
    D = n(405269),
    R = n(723702),
    z = n(256252),
    M = n(382913),
    T = n(985018),
    V = n(763180);
let W = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function Y(e) {
    let { transitionState: t, onClose: Y } = e,
        $ = a.useRef(null),
        q = a.useRef(null),
        [F, H] = a.useState(!1),
        [U, G] = a.useState(""),
        [Z, X] = a.useState(""),
        [J, K] = a.useState(),
        [Q, ee] = a.useState(""),
        [et, en] = a.useState([]),
        [ei, ea] = a.useState(),
        [el, er] = a.useState(),
        [es, eo] = a.useState(!1),
        [eu, ed] = a.useState(""),
        [ec, em] = a.useState(
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
            })((0, R.getOS)()),
        ),
        [ep, eh] = a.useState(""),
        [ef, ev] = a.useState(""),
        [eg, ex] = a.useState(""),
        [eb, ej] = a.useState(""),
        [ey, e_] = a.useState(!1),
        [eS, ew] = a.useState(!1),
        [ek, eE] = a.useState(!1),
        [eC, eA] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "c1ea4d003c39d60d1cfe1080be064091929ac58f" !== e.body.hash) {
                let e = new Date("1776967788958"),
                    t = new Date(),
                    n = (0, D.Tf)(t, e);
                n.hours > 6 && eA(n.hours);
            }
        });
    }, []);
    let eO = (0, r.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eL = (0, r.bG)([k.A], () => k.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eP } = (0, N.hI)(),
        { overridesInfo: eN } = (0, P.op)(),
        eI = Object.entries({ ...eP, ...eN }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function eB() {
        if ((eE(!1), "" === U || "" === Z || null == J)) return void e_(!0);
        let e = ei?.features?.find((e) => (0, z.wY)(e) === el);
        ew(!0), e_(!1);
        let t = (0, M.B)(
                et.map((e) => {
                    let { item: t } = e;
                    return t;
                }),
            ),
            a = await (0, z.zC)(
                {
                    name: U,
                    description: Z,
                    priority: J,
                    feature: e,
                    url: Q,
                    buildOverride: eL?.id ?? null,
                    experimentOverrides: eI,
                },
                !0 === es
                    ? {
                          overridePlatformInformation: es,
                          device: eu,
                          operatingSystem: ec,
                          operatingSystemVersion: ep,
                          clientVersion: ef,
                          clientBuildNumber: eg,
                          locale: eb,
                      }
                    : { overridePlatformInformation: es },
                t,
            ).catch(() => eE(!0));
        ew(!1),
            null != a && a.ok
                ? (eO && window.open(a.body.permalink_url, "_blank"),
                  Y(),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await n.e("71256").then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : eE(!0);
    }
    return (
        a.useEffect(() => {
            async function e() {
                ea(await (0, z.xt)());
            }
            eO && e();
        }, [eO]),
        a.useEffect(() => {
            et.length > 0 && q.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [et]),
        (0, O.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    en((e) =>
                        e.some((e) => e.filename === t.name && e.item.file?.size === t.size)
                            ? e
                            : [...e, new w.Ay({ id: (0, l.A)(), file: t, platform: w.xz.WEB, origin: "clipboard" })],
                    );
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                X((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.Modal, {
            size: "md",
            transitionState: t,
            "aria-label": T.intl.string(T.t.mCCdwi),
            title: T.intl.string(T.t["5LqopY"]),
            actions: [
                { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: Y, autoFocus: !1 },
                {
                    variant: "primary",
                    text: eO ? "Submit and Open Report" : "Submit Report",
                    loading: eS,
                    onClick: eB,
                    autoFocus: !1,
                },
            ],
            onClose: Y,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(m.B, {
                        gap: 8,
                        children: [
                            null != eL &&
                                (0, i.jsxs)(p.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            variant: "heading-md/medium",
                                            children: T.intl.string(T.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: T.intl.format(T.t["yY60+7"], {
                                                buildOverrideHook: () => (0, i.jsx)("b", { children: eL?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == eL &&
                                null != eC &&
                                (0, i.jsxs)(p.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            variant: "heading-md/medium",
                                            children: T.intl.formatToPlainString(T.t["ql2Q/e"], { hours: eC }),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: T.intl.string(T.t.x18RUs),
                                        }),
                                    ],
                                }),
                            eO &&
                                Object.keys(eI).length > 0 &&
                                (0, i.jsxs)(p.w, {
                                    type: "warning",
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: eI.map((e) =>
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
                    (0, i.jsxs)(m.B, {
                        gap: 24,
                        padding: { top: 8, bottom: 8 },
                        children: [
                            (0, i.jsx)(f.k, {
                                label: T.intl.string(T.t.OZRgjw),
                                error: ey && "" === U ? T.intl.string(T.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: U,
                                maxLength: 100,
                                onChange: G,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(v.f, {
                                label: T.intl.string(T.t["1SplH2"]),
                                error: ey && "" === Z ? T.intl.string(T.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: Z,
                                onChange: X,
                                description: eO
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: T.intl.string(T.t.xMXLda),
                                errorMessage: ey && void 0 === J ? T.intl.string(T.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: V.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: V.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: V.YN,
                                                            src: (0, B._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: V.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.E, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: V.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: K,
                                options: (0, z.lx)().map((e) => ({ priority: e, value: e.value, label: e.title })),
                                optionClassName: V.sI,
                                value: J,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            eO &&
                                (0, i.jsx)(g.Z, {
                                    selectionMode: "single",
                                    label: T.intl.string(T.t["77VVd8"]),
                                    value: el,
                                    options: (function (e, t) {
                                        let n = new Map();
                                        for (let t of e?.features ?? []) {
                                            let e = t.name ?? "";
                                            n.set(e, (n.get(e) ?? 0) + 1);
                                        }
                                        return (
                                            e?.features
                                                ?.filter((e) => "" !== (0, z.wY)(e))
                                                ?.map((e) => {
                                                    let i = e.name ?? "",
                                                        a = (n.get(i) ?? 0) > 1,
                                                        l = null != e.squad && "" !== e.squad,
                                                        r = a && l ? `${i} (${e.squad})` : i;
                                                    return {
                                                        id: (0, z.wY)(e),
                                                        label: r,
                                                        value: (0, z.wY)(e),
                                                        description: t ? e.squad : void 0,
                                                    };
                                                })
                                                ?.sort((e, t) => e.label.localeCompare(t.label)) ?? []
                                        );
                                    })(ei, F),
                                    disabled: null == ei,
                                    onSelectionChange: (e) => er(e),
                                    matchSorterOptions: { keys: ["label", "value"] },
                                    onQueryChange: (e) => H("" !== e.target.value.trim()),
                                }),
                            (0, i.jsx)(f.k, {
                                label: T.intl.string(T.t["7p5pqh"]),
                                placeholder: T.intl.string(T.t.HewMzo),
                                type: "text",
                                value: Q,
                                maxLength: 5e3,
                                onChange: ee,
                            }),
                            (0, i.jsx)(x.S, { checked: es, onChange: (e) => eo(e), label: T.intl.string(T.t.ayhqiH) }),
                            es
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(f.k, {
                                              label: T.intl.string(T.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: eu,
                                              onChange: (e) => ed(e),
                                          }),
                                          (0, i.jsx)(b.l, {
                                              label: T.intl.string(T.t.kcHxi6),
                                              value: ec,
                                              options: W,
                                              onSelectionChange: em,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: T.intl.string(T.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: ep,
                                              onChange: (e) => eh(e),
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: T.intl.string(T.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: ef,
                                              onChange: (e) => ev(e),
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: T.intl.string(T.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: eg,
                                              onChange: (e) => ex(e),
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: T.intl.string(T.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: eb,
                                              onChange: (e) => ej(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(j.$, {
                                variant: "secondary",
                                text: T.intl.string(T.t.HVxmOD),
                                onClick: () => {
                                    $.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: V.Fg,
                                children: (0, i.jsx)(S.A, {
                                    ref: $,
                                    onChange: (e) => {
                                        e.currentTarget?.files?.[0] != null &&
                                            en([
                                                ...et,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new w.Ay({
                                                            id: (0, l.A)(),
                                                            file: e,
                                                            platform: w.xz.WEB,
                                                            origin: "file_picker",
                                                        }),
                                                ),
                                            ]);
                                    },
                                    multiple: !0,
                                }),
                            }),
                            et.length > 0
                                ? (0, i.jsx)(y.D, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: q,
                                          className: V.ZO,
                                          children:
                                              et.length > 0 &&
                                              et.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: V.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(A.J, { size: C.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: V.eA,
                                                                          children: (0, i.jsx)(L.Ay, {
                                                                              children: (0, i.jsx)(E.A, {
                                                                                  tooltip: T.intl.string(T.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void en(
                                                                                              et.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(_.u, {
                                                                                      size: "md",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, i.jsx)(d.E, {
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
                            ek
                                ? (0, i.jsx)(d.E, {
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
