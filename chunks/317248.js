(n.d(t, { default: () => Z }), n(134528), n(947204));
var i = n(477900),
    a = n(582128),
    l = n(132500),
    r = n(17928),
    s = n(636537),
    o = n(843282),
    u = n(189213),
    d = n(834730),
    c = n(192308),
    m = n(331322),
    h = n(683071),
    p = n(297264),
    v = n(95477),
    g = n(103557),
    x = n(890497),
    f = n(150934),
    b = n(691885),
    j = n(821609),
    y = n(452027),
    S = n(241326),
    k = n(780777),
    w = n(565150),
    E = n(521502),
    C = n(851023),
    _ = n(215497),
    O = n(914905),
    A = n(176634),
    L = n(101555),
    N = n(386976),
    I = n(32523),
    B = n(274652),
    R = n(287809),
    P = n(486020),
    M = n(58703),
    T = n(723702);
n(321073);
var D = n(562708),
    V = n(144009),
    W = n(363195),
    $ = n(499785),
    z = n(652215),
    q = n(375708);
async function H() {
    return (await s.Bo.get({ url: z.Rsh.BUG_REPORTS, rejectWithError: !1 })).body;
}
function U(e) {
    let t = e?.name ?? "",
        n = e?.squad ?? "";
    return "" === t && "" === n ? "" : t + "::" + n;
}
async function G(e, t, n) {
    let i = [
        { name: "name", value: e.name },
        { name: "priority", value: `${e.priority}` },
        { name: "override_platform_information", value: `${t.overridePlatformInformation}` },
        { name: "theme", value: W.A.theme },
    ];
    ("" !== e.description && i.push({ name: "description", value: e.description }),
        "" !== e.url && i.push({ name: "external_url", value: e.url }),
        null != e.buildOverride && i.push({ name: "build_override", value: e.buildOverride }),
        null != e.experimentOverrides &&
            i.push({
                name: "experiment_overrides",
                value: e.experimentOverrides.map((e) => `${e.experimentId}:${e.variantId}`).join(", "),
            }));
    let a = e.feature?.asana_inbox_id;
    null != a && "" !== a && i.push({ name: "asana_inbox_id", value: `${a}` });
    let l = e.feature?.name;
    (null != l && "" !== l && i.push({ name: "feature_name", value: l }),
        t.overridePlatformInformation &&
            (i.push({ name: "device", value: t.device }),
            i.push({ name: "os", value: t.operatingSystem }),
            i.push({ name: "os_version", value: t.operatingSystemVersion }),
            i.push({ name: "client_version", value: t.clientVersion }),
            i.push({ name: "client_build_number", value: t.clientBuildNumber }),
            i.push({ name: "release_channel", value: window.GLOBAL_ENV.RELEASE_CHANNEL }),
            i.push({ name: "locale", value: t.locale })),
        (0, V.a)(z.Umv.WEB_APP));
    try {
        return await $.A.post({
            url: z.Rsh.BUG_REPORTS,
            attachments: n,
            fields: i,
            trackedActionData: {
                event: D.NetworkActionNames.BUG_REPORT_SUBMIT,
                properties: { priority: e.priority, asana_inbox_id: a },
            },
            rejectWithError: !1,
        });
    } catch (e) {
        return e;
    }
}
var Y = n(814241);
let F = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function Z(e) {
    let { transitionState: t, onClose: D } = e,
        V = a.useRef(null),
        W = a.useRef(null),
        [$, z] = a.useState(!1),
        [Z, X] = a.useState(""),
        [J, Q] = a.useState(""),
        [K, ee] = a.useState(),
        [et, en] = a.useState(""),
        [ei, ea] = a.useState([]),
        [el, er] = a.useState(),
        [es, eo] = a.useState(),
        [eu, ed] = a.useState(!1),
        [ec, em] = a.useState(""),
        [eh, ep] = a.useState(
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
            })((0, T.getOS)()),
        ),
        [ev, eg] = a.useState(""),
        [ex, ef] = a.useState(""),
        [eb, ej] = a.useState(""),
        [ey, eS] = a.useState(""),
        [ek, ew] = a.useState(!1),
        [eE, eC] = a.useState(!1),
        [e_, eO] = a.useState(!1),
        [eA, eL] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "9ca8e70479a8aef3b3602109ba6e19abf6e549bb" !== e.body.hash) {
                let e = new Date("1790913706254"),
                    t = new Date(),
                    n = (0, M.Tf)(t, e);
                n.hours > 6 && eL(n.hours);
            }
        });
    }, []);
    let eN = (0, r.bG)([R.default], () => {
            let e = R.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eI = (0, r.bG)([E.A], () => E.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eB } = (0, I.hI)(),
        { overridesInfo: eR } = (0, N.op)(),
        eP = Object.entries({ ...eB, ...eR }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function eM() {
        if ((eO(!1), "" === Z || "" === J || null == K)) return void ew(!0);
        let e = el?.features?.find((e) => U(e) === es);
        (eC(!0), ew(!1));
        let t = ei
                .map((e) => {
                    let { item: t } = e;
                    return t;
                })
                .map((e, t) => ({ file: e.file, name: e.id ?? `attachment_${t}`, filename: e.file?.name })),
            a = await G(
                {
                    name: Z,
                    description: J,
                    priority: K,
                    feature: e,
                    url: et,
                    buildOverride: eI?.id ?? null,
                    experimentOverrides: eP,
                },
                !0 === eu
                    ? {
                          overridePlatformInformation: eu,
                          device: ec,
                          operatingSystem: eh,
                          operatingSystemVersion: ev,
                          clientVersion: ex,
                          clientBuildNumber: eb,
                          locale: ey,
                      }
                    : { overridePlatformInformation: eu },
                t,
            ).catch(() => eO(!0));
        (eC(!1),
            null != a && a.ok
                ? (eN && window.open(a.body.permalink_url, "_blank"),
                  D(),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("89514"), n.e("876587")]).then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : eO(!0));
    }
    return (
        a.useEffect(() => {
            async function e() {
                er(await H());
            }
            eN && e();
        }, [eN]),
        a.useEffect(() => {
            ei.length > 0 && W.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [ei]),
        (0, A.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    ea((e) =>
                        e.some((e) => e.filename === t.name && e.item.file?.size === t.size)
                            ? e
                            : [...e, new w.Ay({ id: (0, l.A)(), file: t, platform: B.x.WEB, origin: "clipboard" })],
                    );
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                Q((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.a, {
            size: "md",
            transitionState: t,
            "aria-label": q.intl.string(q.t.mCCdwi),
            title: q.intl.string(q.t["5LqopY"]),
            actions: [
                { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: D, autoFocus: !1 },
                {
                    variant: "primary",
                    text: eN ? "Submit and Open Report" : "Submit Report",
                    loading: eE,
                    onClick: eM,
                    autoFocus: !1,
                },
            ],
            onClose: D,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(m.B, {
                        gap: 8,
                        children: [
                            null != eI &&
                                (0, i.jsxs)(h.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/medium",
                                            children: q.intl.string(q.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: q.intl.format(q.t["yY60+7"], {
                                                buildOverrideHook: () => (0, i.jsx)("b", { children: eI?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == eI &&
                                null != eA &&
                                (0, i.jsxs)(h.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/medium",
                                            children: q.intl.formatToPlainString(q.t["ql2Q/e"], { hours: eA }),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: q.intl.string(q.t.x18RUs),
                                        }),
                                    ],
                                }),
                            eN &&
                                Object.keys(eP).length > 0 &&
                                (0, i.jsxs)(h.w, {
                                    type: "warning",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: eP.map((e) =>
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
                            (0, i.jsx)(v.k, {
                                label: q.intl.string(q.t.OZRgjw),
                                error: ek && "" === Z ? q.intl.string(q.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: Z,
                                maxLength: 100,
                                onChange: X,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(g.f, {
                                label: q.intl.string(q.t["1SplH2"]),
                                error: ek && "" === J ? q.intl.string(q.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: J,
                                onChange: Q,
                                description: eN
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: q.intl.string(q.t.xMXLda),
                                errorMessage: ek && void 0 === K ? q.intl.string(q.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: Y.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: Y.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: Y.YN,
                                                            src: (0, P._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: Y.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.E, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: Y.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: ee,
                                options: [
                                    {
                                        title: q.intl.string(q.t.VwIij9),
                                        description: q.intl.format(q.t.DOP8yY, {}),
                                        emoji: "801497159479722084",
                                        value: 0,
                                    },
                                    {
                                        title: q.intl.string(q.t.rYfJop),
                                        description: q.intl.format(q.t["+LEfDL"], {}),
                                        emoji: "410336837563973632",
                                        value: 1,
                                    },
                                    {
                                        title: q.intl.string(q.t["9LSuy3"]),
                                        description: q.intl.format(q.t.nC7pvx, {}),
                                        emoji: "841420679643529296",
                                        value: 2,
                                    },
                                    {
                                        title: q.intl.string(q.t.Ia0ska),
                                        description: q.intl.format(q.t.D4rbgX, {}),
                                        emoji: "827645852352512021",
                                        value: 3,
                                    },
                                ].map((e) => ({ priority: e, value: e.value, label: e.title })),
                                optionClassName: Y.sI,
                                value: K,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            eN &&
                                (0, i.jsx)(x.Z, {
                                    selectionMode: "single",
                                    label: q.intl.string(q.t["77VVd8"]),
                                    value: es,
                                    options: (function (e, t) {
                                        let n = new Map();
                                        for (let t of e?.features ?? []) {
                                            let e = t.name ?? "";
                                            n.set(e, (n.get(e) ?? 0) + 1);
                                        }
                                        return (
                                            e?.features
                                                ?.filter((e) => "" !== U(e))
                                                ?.map((e) => {
                                                    let i = e.name ?? "",
                                                        a = (n.get(i) ?? 0) > 1,
                                                        l = null != e.squad && "" !== e.squad,
                                                        r = a && l ? `${i} (${e.squad})` : i;
                                                    return {
                                                        id: U(e),
                                                        label: r,
                                                        value: U(e),
                                                        description: t ? e.squad : void 0,
                                                    };
                                                })
                                                ?.sort((e, t) => e.label.localeCompare(t.label)) ?? []
                                        );
                                    })(el, $),
                                    disabled: null == el,
                                    onSelectionChange: (e) => eo(e),
                                    matchSorterOptions: { keys: ["label", "value"] },
                                    onQueryChange: (e) => z("" !== e.target.value.trim()),
                                }),
                            (0, i.jsx)(v.k, {
                                label: q.intl.string(q.t["7p5pqh"]),
                                placeholder: q.intl.string(q.t.HewMzo),
                                type: "text",
                                value: et,
                                maxLength: 5e3,
                                onChange: en,
                            }),
                            (0, i.jsx)(f.S, { checked: eu, onChange: (e) => ed(e), label: q.intl.string(q.t.ayhqiH) }),
                            eu
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(v.k, {
                                              label: q.intl.string(q.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ec,
                                              onChange: (e) => em(e),
                                          }),
                                          (0, i.jsx)(b.l, {
                                              label: q.intl.string(q.t.kcHxi6),
                                              value: eh,
                                              options: F,
                                              onSelectionChange: ep,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: q.intl.string(q.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: ev,
                                              onChange: (e) => eg(e),
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: q.intl.string(q.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: ex,
                                              onChange: (e) => ef(e),
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: q.intl.string(q.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: eb,
                                              onChange: (e) => ej(e),
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: q.intl.string(q.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ey,
                                              onChange: (e) => eS(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(j.$, {
                                variant: "secondary",
                                text: q.intl.string(q.t.HVxmOD),
                                onClick: function () {
                                    V.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: Y.Fg,
                                children: (0, i.jsx)(k.A, {
                                    ref: V,
                                    onChange: function (e) {
                                        e.currentTarget?.files?.[0] != null &&
                                            ea([
                                                ...ei,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new w.Ay({
                                                            id: (0, l.A)(),
                                                            file: e,
                                                            platform: B.x.WEB,
                                                            origin: "file_picker",
                                                        }),
                                                ),
                                            ]);
                                    },
                                    multiple: !0,
                                }),
                            }),
                            ei.length > 0
                                ? (0, i.jsx)(y.D, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: W,
                                          className: Y.ZO,
                                          children:
                                              ei.length > 0 &&
                                              ei.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: Y.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(O.J, { size: _.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: Y.eA,
                                                                          children: (0, i.jsx)(L.Ay, {
                                                                              children: (0, i.jsx)(C.A, {
                                                                                  tooltip: q.intl.string(q.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void ea(
                                                                                              ei.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(S.TrashIcon, {
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
                            e_
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
