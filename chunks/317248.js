n.d(t, { default: () => F }), n(134528), n(947204);
var i = n(627968),
    a = n(64700),
    l = n(132500),
    r = n(17928),
    s = n(636537),
    o = n(843282),
    u = n(189213),
    d = n(834730),
    c = n(192308),
    m = n(331322),
    h = n(683071),
    p = n(534514),
    v = n(292666),
    g = n(260598),
    x = n(783878),
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
    B = n(32523),
    I = n(287809),
    R = n(486020),
    P = n(58703),
    M = n(723702);
n(321073);
var z = n(110259),
    D = n(77138),
    T = n(363195),
    V = n(499785),
    W = n(652215),
    $ = n(985018);
async function q() {
    return (await s.Bo.get({ url: W.Rsh.BUG_REPORTS, rejectWithError: !1 })).body;
}
function H(e) {
    let t = e?.name ?? "",
        n = e?.squad ?? "";
    return "" === t && "" === n ? "" : t + "::" + n;
}
async function U(e, t, n) {
    let i = [
        { name: "name", value: e.name },
        { name: "priority", value: `${e.priority}` },
        { name: "override_platform_information", value: `${t.overridePlatformInformation}` },
        { name: "theme", value: T.A.theme },
    ];
    "" !== e.description && i.push({ name: "description", value: e.description }),
        "" !== e.url && i.push({ name: "external_url", value: e.url }),
        null != e.buildOverride && i.push({ name: "build_override", value: e.buildOverride }),
        null != e.experimentOverrides &&
            i.push({
                name: "experiment_overrides",
                value: e.experimentOverrides.map((e) => `${e.experimentId}:${e.variantId}`).join(", "),
            });
    let a = e.feature?.asana_inbox_id;
    null != a && "" !== a && i.push({ name: "asana_inbox_id", value: `${a}` });
    let l = e.feature?.name;
    null != l && "" !== l && i.push({ name: "feature_name", value: l }),
        t.overridePlatformInformation &&
            (i.push({ name: "device", value: t.device }),
            i.push({ name: "os", value: t.operatingSystem }),
            i.push({ name: "os_version", value: t.operatingSystemVersion }),
            i.push({ name: "client_version", value: t.clientVersion }),
            i.push({ name: "client_build_number", value: t.clientBuildNumber }),
            i.push({ name: "release_channel", value: window.GLOBAL_ENV.RELEASE_CHANNEL }),
            i.push({ name: "locale", value: t.locale })),
        (0, D.a)(W.Umv.WEB_APP);
    try {
        return await V.A.post({
            url: W.Rsh.BUG_REPORTS,
            attachments: n,
            fields: i,
            trackedActionData: {
                event: z.NetworkActionNames.BUG_REPORT_SUBMIT,
                properties: { priority: e.priority, asana_inbox_id: a },
            },
            rejectWithError: !1,
        });
    } catch (e) {
        return e;
    }
}
var G = n(763180);
let Y = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function F(e) {
    let { transitionState: t, onClose: z } = e,
        D = a.useRef(null),
        T = a.useRef(null),
        [V, W] = a.useState(!1),
        [F, Z] = a.useState(""),
        [X, J] = a.useState(""),
        [Q, K] = a.useState(),
        [ee, et] = a.useState(""),
        [en, ei] = a.useState([]),
        [ea, el] = a.useState(),
        [er, es] = a.useState(),
        [eo, eu] = a.useState(!1),
        [ed, ec] = a.useState(""),
        [em, eh] = a.useState(
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
            })((0, M.getOS)()),
        ),
        [ep, ev] = a.useState(""),
        [eg, ex] = a.useState(""),
        [ef, eb] = a.useState(""),
        [ej, ey] = a.useState(""),
        [eS, ek] = a.useState(!1),
        [ew, eE] = a.useState(!1),
        [eC, e_] = a.useState(!1),
        [eO, eA] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "45aa7ae3fe93013bb1b546eafd0af3c26aaef1f7" !== e.body.hash) {
                let e = new Date("1777399126456"),
                    t = new Date(),
                    n = (0, P.Tf)(t, e);
                n.hours > 6 && eA(n.hours);
            }
        });
    }, []);
    let eL = (0, r.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eN = (0, r.bG)([E.A], () => E.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eB } = (0, B.hI)(),
        { overridesInfo: eI } = (0, N.op)(),
        eR = Object.entries({ ...eB, ...eI }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function eP() {
        if ((e_(!1), "" === F || "" === X || null == Q)) return void ek(!0);
        let e = ea?.features?.find((e) => H(e) === er);
        eE(!0), ek(!1);
        let t = en
                .map((e) => {
                    let { item: t } = e;
                    return t;
                })
                .map((e, t) => ({ file: e.file, name: e.id ?? `attachment_${t}`, filename: e.file?.name })),
            a = await U(
                {
                    name: F,
                    description: X,
                    priority: Q,
                    feature: e,
                    url: ee,
                    buildOverride: eN?.id ?? null,
                    experimentOverrides: eR,
                },
                !0 === eo
                    ? {
                          overridePlatformInformation: eo,
                          device: ed,
                          operatingSystem: em,
                          operatingSystemVersion: ep,
                          clientVersion: eg,
                          clientBuildNumber: ef,
                          locale: ej,
                      }
                    : { overridePlatformInformation: eo },
                t,
            ).catch(() => e_(!0));
        eE(!1),
            null != a && a.ok
                ? (eL && window.open(a.body.permalink_url, "_blank"),
                  z(),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("93013"), n.e("76587")]).then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : e_(!0);
    }
    return (
        a.useEffect(() => {
            async function e() {
                el(await q());
            }
            eL && e();
        }, [eL]),
        a.useEffect(() => {
            en.length > 0 && T.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [en]),
        (0, A.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    ei((e) =>
                        e.some((e) => e.filename === t.name && e.item.file?.size === t.size)
                            ? e
                            : [...e, new w.Ay({ id: (0, l.A)(), file: t, platform: w.xz.WEB, origin: "clipboard" })],
                    );
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                J((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.Modal, {
            size: "md",
            transitionState: t,
            "aria-label": $.intl.string($.t.mCCdwi),
            title: $.intl.string($.t["5LqopY"]),
            actions: [
                { variant: "secondary", text: $.intl.string($.t["ETE/oC"]), onClick: z, autoFocus: !1 },
                {
                    variant: "primary",
                    text: eL ? "Submit and Open Report" : "Submit Report",
                    loading: ew,
                    onClick: eP,
                    autoFocus: !1,
                },
            ],
            onClose: z,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(m.B, {
                        gap: 8,
                        children: [
                            null != eN &&
                                (0, i.jsxs)(h.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/medium",
                                            children: $.intl.string($.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: $.intl.format($.t["yY60+7"], {
                                                buildOverrideHook: () => (0, i.jsx)("b", { children: eN?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == eN &&
                                null != eO &&
                                (0, i.jsxs)(h.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/medium",
                                            children: $.intl.formatToPlainString($.t["ql2Q/e"], { hours: eO }),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: $.intl.string($.t.x18RUs),
                                        }),
                                    ],
                                }),
                            eL &&
                                Object.keys(eR).length > 0 &&
                                (0, i.jsxs)(h.w, {
                                    type: "warning",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: eR.map((e) =>
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
                                label: $.intl.string($.t.OZRgjw),
                                error: eS && "" === F ? $.intl.string($.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: F,
                                maxLength: 100,
                                onChange: Z,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(g.f, {
                                label: $.intl.string($.t["1SplH2"]),
                                error: eS && "" === X ? $.intl.string($.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: X,
                                onChange: J,
                                description: eL
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: $.intl.string($.t.xMXLda),
                                errorMessage: eS && void 0 === Q ? $.intl.string($.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: G.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: G.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: G.YN,
                                                            src: (0, R._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: G.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.E, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: G.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: K,
                                options: [
                                    {
                                        title: $.intl.string($.t.VwIij9),
                                        description: $.intl.format($.t.DOP8yY, {}),
                                        emoji: "801497159479722084",
                                        value: 0,
                                    },
                                    {
                                        title: $.intl.string($.t.rYfJop),
                                        description: $.intl.format($.t["+LEfDL"], {}),
                                        emoji: "410336837563973632",
                                        value: 1,
                                    },
                                    {
                                        title: $.intl.string($.t["9LSuy3"]),
                                        description: $.intl.format($.t.nC7pvx, {}),
                                        emoji: "841420679643529296",
                                        value: 2,
                                    },
                                    {
                                        title: $.intl.string($.t.Ia0ska),
                                        description: $.intl.format($.t.D4rbgX, {}),
                                        emoji: "827645852352512021",
                                        value: 3,
                                    },
                                ].map((e) => ({ priority: e, value: e.value, label: e.title })),
                                optionClassName: G.sI,
                                value: Q,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            eL &&
                                (0, i.jsx)(x.Z, {
                                    selectionMode: "single",
                                    label: $.intl.string($.t["77VVd8"]),
                                    value: er,
                                    options: (function (e, t) {
                                        let n = new Map();
                                        for (let t of e?.features ?? []) {
                                            let e = t.name ?? "";
                                            n.set(e, (n.get(e) ?? 0) + 1);
                                        }
                                        return (
                                            e?.features
                                                ?.filter((e) => "" !== H(e))
                                                ?.map((e) => {
                                                    let i = e.name ?? "",
                                                        a = (n.get(i) ?? 0) > 1,
                                                        l = null != e.squad && "" !== e.squad,
                                                        r = a && l ? `${i} (${e.squad})` : i;
                                                    return {
                                                        id: H(e),
                                                        label: r,
                                                        value: H(e),
                                                        description: t ? e.squad : void 0,
                                                    };
                                                })
                                                ?.sort((e, t) => e.label.localeCompare(t.label)) ?? []
                                        );
                                    })(ea, V),
                                    disabled: null == ea,
                                    onSelectionChange: (e) => es(e),
                                    matchSorterOptions: { keys: ["label", "value"] },
                                    onQueryChange: (e) => W("" !== e.target.value.trim()),
                                }),
                            (0, i.jsx)(v.k, {
                                label: $.intl.string($.t["7p5pqh"]),
                                placeholder: $.intl.string($.t.HewMzo),
                                type: "text",
                                value: ee,
                                maxLength: 5e3,
                                onChange: et,
                            }),
                            (0, i.jsx)(f.S, { checked: eo, onChange: (e) => eu(e), label: $.intl.string($.t.ayhqiH) }),
                            eo
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(v.k, {
                                              label: $.intl.string($.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ed,
                                              onChange: (e) => ec(e),
                                          }),
                                          (0, i.jsx)(b.l, {
                                              label: $.intl.string($.t.kcHxi6),
                                              value: em,
                                              options: Y,
                                              onSelectionChange: eh,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: $.intl.string($.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: ep,
                                              onChange: (e) => ev(e),
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: $.intl.string($.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: eg,
                                              onChange: (e) => ex(e),
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: $.intl.string($.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: ef,
                                              onChange: (e) => eb(e),
                                          }),
                                          (0, i.jsx)(v.k, {
                                              label: $.intl.string($.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ej,
                                              onChange: (e) => ey(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(j.$, {
                                variant: "secondary",
                                text: $.intl.string($.t.HVxmOD),
                                onClick: () => {
                                    D.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: G.Fg,
                                children: (0, i.jsx)(k.A, {
                                    ref: D,
                                    onChange: (e) => {
                                        e.currentTarget?.files?.[0] != null &&
                                            ei([
                                                ...en,
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
                            en.length > 0
                                ? (0, i.jsx)(y.D, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: T,
                                          className: G.ZO,
                                          children:
                                              en.length > 0 &&
                                              en.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: G.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(O.J, { size: _.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: G.eA,
                                                                          children: (0, i.jsx)(L.Ay, {
                                                                              children: (0, i.jsx)(C.A, {
                                                                                  tooltip: $.intl.string($.t.vN7REz),
                                                                                  onClick: () => {
                                                                                      var t;
                                                                                      return (
                                                                                          (t = e.id),
                                                                                          void ei(
                                                                                              en.filter(
                                                                                                  (e) => e.id !== t,
                                                                                              ),
                                                                                          )
                                                                                      );
                                                                                  },
                                                                                  dangerous: !0,
                                                                                  children: (0, i.jsx)(S.u, {
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
                            eC
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
