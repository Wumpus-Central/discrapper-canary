(n.d(t, { default: () => G }), n(134528), n(947204));
var i = n(477900),
    a = n(582128),
    l = n(115560),
    r = n(855986),
    s = n(620632),
    o = n(843282),
    u = n(189213),
    d = n(834730),
    c = n(192308),
    m = n(331322),
    p = n(683071),
    h = n(95477),
    v = n(103557),
    g = n(890497),
    f = n(150934),
    x = n(691885),
    b = n(821609),
    j = n(452027),
    y = n(241326),
    S = n(307955),
    k = n(565150),
    w = n(521502),
    C = n(851023),
    E = n(198554),
    _ = n(914905),
    O = n(176634),
    A = n(101555),
    L = n(386976),
    N = n(32523),
    R = n(274652),
    B = n(287809),
    I = n(486020),
    P = n(5377),
    M = n(723702);
n(321073);
var T = n(613412),
    $ = n(497029),
    V = n(413599),
    W = n(499785),
    q = n(652215),
    z = n(792996);
function D(e) {
    let t = e?.name ?? "",
        n = e?.squad ?? "";
    return "" === t && "" === n ? "" : t + "::" + n;
}
var H = n(814241);
let U = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function G(e) {
    let { transitionState: t, onClose: G } = e,
        Y = a.useRef(null),
        F = a.useRef(null),
        [Z, X] = a.useState(!1),
        [J, Q] = a.useState(""),
        [K, ee] = a.useState(""),
        [et, en] = a.useState(),
        [ei, ea] = a.useState(""),
        [el, er] = a.useState([]),
        [es, eo] = a.useState(),
        [eu, ed] = a.useState(),
        [ec, em] = a.useState(!1),
        [ep, eh] = a.useState(""),
        [ev, eg] = a.useState(
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
            })((0, M.R0)()),
        ),
        [ef, ex] = a.useState(""),
        [eb, ej] = a.useState(""),
        [ey, eS] = a.useState(""),
        [ek, ew] = a.useState(""),
        [eC, eE] = a.useState(!1),
        [e_, eO] = a.useState(!1),
        [eA, eL] = a.useState(!1),
        [eN, eR] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "18617a712ce462b23e27952903c99d8947b9da5e" !== e.body.hash) {
                let e = new Date("1794621523856"),
                    t = new Date(),
                    n = (0, P.Tf)(t, e);
                n.hours > 6 && eR(n.hours);
            }
        });
    }, []);
    let eB = (0, r.bG)([B.default], () => {
            let e = B.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eI = (0, r.bG)([w.A], () => w.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eP } = (0, N.hI)(),
        { overridesInfo: eM } = (0, L.op)(),
        eT = Object.entries({ ...eP, ...eM }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    return (
        a.useEffect(() => {
            eB &&
                (async function () {
                    eo(
                        await (async function () {
                            return (await s.Bo.get({ url: q.Rsh.BUG_REPORTS, rejectWithError: !1 })).body;
                        })(),
                    );
                })();
        }, [eB]),
        a.useEffect(() => {
            el.length > 0 && F.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [el]),
        (0, O.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    er((e) => {
                        if (e.some((e) => e.filename === t.name && e.item.file?.size === t.size)) return e;
                        let n = new k.Ay({ id: (0, l.A)(), file: t, platform: R.x.WEB, origin: "clipboard" });
                        return [...e, n];
                    });
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                ee((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.a, {
            size: "md",
            transitionState: t,
            "aria-label": z.intl.string(z.t.mCCdwi),
            title: z.intl.string(z.t["5LqopY"]),
            actions: [
                { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: G, autoFocus: !1 },
                {
                    variant: "primary",
                    text: eB ? "Submit and Open Report" : "Submit Report",
                    loading: e_,
                    onClick: async function () {
                        if ((eL(!1), "" === J || "" === K || null == et)) return void eE(!0);
                        let e = es?.features?.find((e) => D(e) === eu);
                        (eO(!0), eE(!1));
                        let t = el
                                .map((e) => {
                                    let { item: t } = e;
                                    return t;
                                })
                                .map((e, t) => ({
                                    file: e.file,
                                    name: e.id ?? `attachment_${t}`,
                                    filename: e.file?.name,
                                })),
                            a = await (async function (e, t, n) {
                                let i = [
                                    { name: "name", value: e.name },
                                    { name: "priority", value: `${e.priority}` },
                                    {
                                        name: "override_platform_information",
                                        value: `${t.overridePlatformInformation}`,
                                    },
                                    { name: "theme", value: V.A.theme },
                                ];
                                ("" !== e.description && i.push({ name: "description", value: e.description }),
                                    "" !== e.url && i.push({ name: "external_url", value: e.url }),
                                    null != e.buildOverride &&
                                        i.push({ name: "build_override", value: e.buildOverride }),
                                    null != e.experimentOverrides &&
                                        i.push({
                                            name: "experiment_overrides",
                                            value: e.experimentOverrides
                                                .map((e) => `${e.experimentId}:${e.variantId}`)
                                                .join(", "),
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
                                    (0, $.a)(q.Umv.WEB_APP));
                                try {
                                    return await W.A.post({
                                        url: q.Rsh.BUG_REPORTS,
                                        attachments: n,
                                        fields: i,
                                        trackedActionData: {
                                            event: T.NetworkActionNames.BUG_REPORT_SUBMIT,
                                            properties: { priority: e.priority, asana_inbox_id: a },
                                        },
                                        rejectWithError: !1,
                                    });
                                } catch (e) {
                                    return e;
                                }
                            })(
                                {
                                    name: J,
                                    description: K,
                                    priority: et,
                                    feature: e,
                                    url: ei,
                                    buildOverride: eI?.id ?? null,
                                    experimentOverrides: eT,
                                },
                                !0 === ec
                                    ? {
                                          overridePlatformInformation: ec,
                                          device: ep,
                                          operatingSystem: ev,
                                          operatingSystemVersion: ef,
                                          clientVersion: eb,
                                          clientBuildNumber: ey,
                                          locale: ek,
                                      }
                                    : { overridePlatformInformation: ec },
                                t,
                            ).catch(() => eL(!0));
                        (eO(!1),
                            null != a && a.ok
                                ? (eB && window.open(a.body.permalink_url, "_blank"),
                                  G(),
                                  (0, c.mM)(async () => {
                                      let { default: e } = await Promise.all([n.e(89514), n.e(876587)]).then(
                                          n.bind(n, 369323),
                                      );
                                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                                  }))
                                : eL(!0));
                    },
                    autoFocus: !1,
                },
            ],
            onClose: G,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(m.B, {
                        gap: 8,
                        children: [
                            null != eI &&
                                (0, i.jsx)(p.w, {
                                    type: "critical",
                                    title: z.intl.string(z.t["ZP/hEx"]),
                                    message: z.intl.format(z.t["yY60+7"], {
                                        buildOverrideHook: () => (0, i.jsx)("b", { children: eI?.id }),
                                    }),
                                    role: "none",
                                }),
                            null == eI &&
                                null != eN &&
                                (0, i.jsx)(p.w, {
                                    type: "critical",
                                    title: z.intl.formatToPlainString(z.t["ql2Q/e"], { hours: eN }),
                                    message: z.intl.string(z.t.x18RUs),
                                    role: "status",
                                }),
                            eB &&
                                Object.keys(eT).length > 0 &&
                                (0, i.jsx)(p.w, {
                                    type: "warning",
                                    message: "You have the following experiments overridden:",
                                    messageList: eT.map((e) => `${e.experimentId} (variant ${e.variantId})`),
                                    role: "none",
                                }),
                        ],
                    }),
                    (0, i.jsxs)(m.B, {
                        gap: 24,
                        padding: { top: 8, bottom: 8 },
                        children: [
                            (0, i.jsx)(h.k, {
                                label: z.intl.string(z.t.OZRgjw),
                                error: eC && "" === J ? z.intl.string(z.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: J,
                                maxLength: 100,
                                onChange: Q,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(v.f, {
                                label: z.intl.string(z.t["1SplH2"]),
                                error: eC && "" === K ? z.intl.string(z.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: K,
                                onChange: ee,
                                description: eB
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: z.intl.string(z.t.xMXLda),
                                errorMessage: eC && void 0 === et ? z.intl.string(z.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: H.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: H.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: H.YN,
                                                            src: (0, I._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.E, {
                                                            color: "text-strong",
                                                            variant: "body-sm/semibold",
                                                            className: H.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.E, {
                                                    color: "text-default",
                                                    variant: "body-xs/normal",
                                                    className: H.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: en,
                                options: [
                                    {
                                        title: z.intl.string(z.t.VwIij9),
                                        description: z.intl.format(z.t.DOP8yY, {}),
                                        emoji: "801497159479722084",
                                        value: 0,
                                    },
                                    {
                                        title: z.intl.string(z.t.rYfJop),
                                        description: z.intl.format(z.t["+LEfDL"], {}),
                                        emoji: "410336837563973632",
                                        value: 1,
                                    },
                                    {
                                        title: z.intl.string(z.t["9LSuy3"]),
                                        description: z.intl.format(z.t.nC7pvx, {}),
                                        emoji: "841420679643529296",
                                        value: 2,
                                    },
                                    {
                                        title: z.intl.string(z.t.Ia0ska),
                                        description: z.intl.format(z.t.D4rbgX, {}),
                                        emoji: "827645852352512021",
                                        value: 3,
                                    },
                                ].map((e) => ({ priority: e, value: e.value, label: e.title })),
                                optionClassName: H.sI,
                                value: et,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            eB &&
                                (0, i.jsx)(g.Z, {
                                    selectionMode: "single",
                                    label: z.intl.string(z.t["77VVd8"]),
                                    value: eu,
                                    options: (function (e, t) {
                                        let n = new Map();
                                        for (let t of e?.features ?? []) {
                                            let e = t.name ?? "";
                                            n.set(e, (n.get(e) ?? 0) + 1);
                                        }
                                        return (
                                            e?.features
                                                ?.filter((e) => "" !== D(e))
                                                ?.map((e) => {
                                                    let i = e.name ?? "",
                                                        a = (n.get(i) ?? 0) > 1,
                                                        l = null != e.squad && "" !== e.squad,
                                                        r = a && l ? `${i} (${e.squad})` : i;
                                                    return {
                                                        id: D(e),
                                                        label: r,
                                                        value: D(e),
                                                        description: t ? e.squad : void 0,
                                                    };
                                                })
                                                ?.sort((e, t) => e.label.localeCompare(t.label)) ?? []
                                        );
                                    })(es, Z),
                                    disabled: null == es,
                                    onSelectionChange: (e) => ed(e),
                                    matchSorterOptions: { keys: ["label", "value"] },
                                    onQueryChange: (e) => X("" !== e.target.value.trim()),
                                }),
                            (0, i.jsx)(h.k, {
                                label: z.intl.string(z.t["7p5pqh"]),
                                placeholder: z.intl.string(z.t.HewMzo),
                                type: "text",
                                value: ei,
                                maxLength: 5e3,
                                onChange: ea,
                            }),
                            (0, i.jsx)(f.S, { checked: ec, onChange: (e) => em(e), label: z.intl.string(z.t.ayhqiH) }),
                            ec
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(h.k, {
                                              label: z.intl.string(z.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ep,
                                              onChange: (e) => eh(e),
                                          }),
                                          (0, i.jsx)(x.l, {
                                              label: z.intl.string(z.t.kcHxi6),
                                              value: ev,
                                              options: U,
                                              onSelectionChange: eg,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: z.intl.string(z.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: ef,
                                              onChange: (e) => ex(e),
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: z.intl.string(z.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: eb,
                                              onChange: (e) => ej(e),
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: z.intl.string(z.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: ey,
                                              onChange: (e) => eS(e),
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: z.intl.string(z.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ek,
                                              onChange: (e) => ew(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(b.$, {
                                variant: "secondary",
                                text: z.intl.string(z.t.HVxmOD),
                                onClick: function () {
                                    Y.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: H.Fg,
                                children: (0, i.jsx)(S.A, {
                                    ref: Y,
                                    onChange: function (e) {
                                        if (e.currentTarget?.files?.[0] != null) {
                                            let t = Array.from(e.currentTarget.files).map(
                                                (e) =>
                                                    new k.Ay({
                                                        id: (0, l.A)(),
                                                        file: e,
                                                        platform: R.x.WEB,
                                                        origin: "file_picker",
                                                    }),
                                            );
                                            er([...el, ...t]);
                                        }
                                    },
                                    multiple: !0,
                                }),
                            }),
                            el.length > 0
                                ? (0, i.jsx)(j.D, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: F,
                                          className: H.ZO,
                                          children:
                                              el.length > 0 &&
                                              el.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: H.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(_.J, { size: E.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: H.eA,
                                                                          children: (0, i.jsx)(A.Ay, {
                                                                              children: (0, i.jsx)(C.A, {
                                                                                  tooltip: z.intl.string(z.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void er(
                                                                                              el.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(y.TrashIcon, {
                                                                                      size: "md",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, i.jsx)(d.E, {
                                                                  variant: "footnote/medium",
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
                            eA
                                ? (0, i.jsx)(d.E, {
                                      color: "text-feedback-critical",
                                      variant: "body-sm/normal",
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
