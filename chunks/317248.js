(n.d(t, { default: () => F }), n(134528), n(947204));
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
    p = n(683071),
    h = n(95477),
    g = n(103557),
    v = n(890497),
    f = n(150934),
    x = n(691885),
    b = n(821609),
    j = n(452027),
    y = n(241326),
    S = n(780777),
    k = n(565150),
    w = n(521502),
    C = n(851023),
    E = n(215497),
    _ = n(914905),
    O = n(176634),
    L = n(101555),
    A = n(386976),
    N = n(32523),
    B = n(274652),
    I = n(287809),
    R = n(486020),
    P = n(58703),
    M = n(723702);
n(321073);
var T = n(562708),
    $ = n(108088),
    V = n(363195),
    W = n(499785),
    z = n(652215),
    q = n(105292);
async function D() {
    return (await s.Bo.get({ url: z.Rsh.BUG_REPORTS, rejectWithError: !1 })).body;
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
        { name: "theme", value: V.A.theme },
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
        (0, $.a)(z.Umv.WEB_APP));
    try {
        return await W.A.post({
            url: z.Rsh.BUG_REPORTS,
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
}
var G = n(814241);
let Y = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function F(e) {
    let { transitionState: t, onClose: T } = e,
        $ = a.useRef(null),
        V = a.useRef(null),
        [W, z] = a.useState(!1),
        [F, Z] = a.useState(""),
        [X, J] = a.useState(""),
        [Q, K] = a.useState(),
        [ee, et] = a.useState(""),
        [en, ei] = a.useState([]),
        [ea, el] = a.useState(),
        [er, es] = a.useState(),
        [eo, eu] = a.useState(!1),
        [ed, ec] = a.useState(""),
        [em, ep] = a.useState(
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
        [eh, eg] = a.useState(""),
        [ev, ef] = a.useState(""),
        [ex, eb] = a.useState(""),
        [ej, ey] = a.useState(""),
        [eS, ek] = a.useState(!1),
        [ew, eC] = a.useState(!1),
        [eE, e_] = a.useState(!1),
        [eO, eL] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "fcb8f85d2fdc23bb48528be04c1d39c93bf256c3" !== e.body.hash) {
                let e = new Date("1793227720180"),
                    t = new Date(),
                    n = (0, P.Tf)(t, e);
                n.hours > 6 && eL(n.hours);
            }
        });
    }, []);
    let eA = (0, r.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eN = (0, r.bG)([w.A], () => w.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eB } = (0, N.hI)(),
        { overridesInfo: eI } = (0, A.op)(),
        eR = Object.entries({ ...eB, ...eI }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function eP() {
        if ((e_(!1), "" === F || "" === X || null == Q)) return void ek(!0);
        let e = ea?.features?.find((e) => H(e) === er);
        (eC(!0), ek(!1));
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
                          operatingSystemVersion: eh,
                          clientVersion: ev,
                          clientBuildNumber: ex,
                          locale: ej,
                      }
                    : { overridePlatformInformation: eo },
                t,
            ).catch(() => e_(!0));
        (eC(!1),
            null != a && a.ok
                ? (eA && window.open(a.body.permalink_url, "_blank"),
                  T(),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("89514"), n.e("876587")]).then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : e_(!0));
    }
    return (
        a.useEffect(() => {
            async function e() {
                el(await D());
            }
            eA && e();
        }, [eA]),
        a.useEffect(() => {
            en.length > 0 && V.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, [en]),
        (0, O.A)({
            onPasteFiles: a.useCallback((e) => {
                let t = Array.from(e)
                    .filter((e) => e.type.startsWith("image/"))
                    .at(0);
                void 0 !== t &&
                    ei((e) =>
                        e.some((e) => e.filename === t.name && e.item.file?.size === t.size)
                            ? e
                            : [...e, new k.Ay({ id: (0, l.A)(), file: t, platform: B.x.WEB, origin: "clipboard" })],
                    );
            }, []),
            onPasteBackgroundText: a.useCallback((e) => {
                J((t) => t.concat(e));
            }, []),
        }),
        (0, i.jsx)(u.a, {
            size: "md",
            transitionState: t,
            "aria-label": q.intl.string(q.t.mCCdwi),
            title: q.intl.string(q.t["5LqopY"]),
            actions: [
                { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: T, autoFocus: !1 },
                {
                    variant: "primary",
                    text: eA ? "Submit and Open Report" : "Submit Report",
                    loading: ew,
                    onClick: eP,
                    autoFocus: !1,
                },
            ],
            onClose: T,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(m.B, {
                        gap: 8,
                        children: [
                            null != eN &&
                                (0, i.jsx)(p.w, {
                                    type: "critical",
                                    title: q.intl.string(q.t["ZP/hEx"]),
                                    message: q.intl.format(q.t["yY60+7"], {
                                        buildOverrideHook: () => (0, i.jsx)("b", { children: eN?.id }),
                                    }),
                                    role: "none",
                                }),
                            null == eN &&
                                null != eO &&
                                (0, i.jsx)(p.w, {
                                    type: "critical",
                                    title: q.intl.formatToPlainString(q.t["ql2Q/e"], { hours: eO }),
                                    message: q.intl.string(q.t.x18RUs),
                                    role: "status",
                                }),
                            eA &&
                                Object.keys(eR).length > 0 &&
                                (0, i.jsx)(p.w, {
                                    type: "warning",
                                    message: "You have the following experiments overridden:",
                                    messageList: eR.map((e) => `${e.experimentId} (variant ${e.variantId})`),
                                    role: "none",
                                }),
                        ],
                    }),
                    (0, i.jsxs)(m.B, {
                        gap: 24,
                        padding: { top: 8, bottom: 8 },
                        children: [
                            (0, i.jsx)(h.k, {
                                label: q.intl.string(q.t.OZRgjw),
                                error: eS && "" === F ? q.intl.string(q.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: F,
                                maxLength: 100,
                                onChange: Z,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(g.f, {
                                label: q.intl.string(q.t["1SplH2"]),
                                error: eS && "" === X ? q.intl.string(q.t.EkokLy) : null,
                                placeholder: "What did you expect to see?",
                                value: X,
                                onChange: J,
                                description: eA
                                    ? "You can add additional information/media on the ticket after submitting"
                                    : void 0,
                                autosize: !0,
                            }),
                            (0, i.jsx)(o.Te, {
                                label: q.intl.string(q.t.xMXLda),
                                errorMessage: eS && void 0 === Q ? q.intl.string(q.t.EkokLy) : null,
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
                                optionClassName: G.sI,
                                value: Q,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            eA &&
                                (0, i.jsx)(v.Z, {
                                    selectionMode: "single",
                                    label: q.intl.string(q.t["77VVd8"]),
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
                                    })(ea, W),
                                    disabled: null == ea,
                                    onSelectionChange: (e) => es(e),
                                    matchSorterOptions: { keys: ["label", "value"] },
                                    onQueryChange: (e) => z("" !== e.target.value.trim()),
                                }),
                            (0, i.jsx)(h.k, {
                                label: q.intl.string(q.t["7p5pqh"]),
                                placeholder: q.intl.string(q.t.HewMzo),
                                type: "text",
                                value: ee,
                                maxLength: 5e3,
                                onChange: et,
                            }),
                            (0, i.jsx)(f.S, { checked: eo, onChange: (e) => eu(e), label: q.intl.string(q.t.ayhqiH) }),
                            eo
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(h.k, {
                                              label: q.intl.string(q.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ed,
                                              onChange: (e) => ec(e),
                                          }),
                                          (0, i.jsx)(x.l, {
                                              label: q.intl.string(q.t.kcHxi6),
                                              value: em,
                                              options: Y,
                                              onSelectionChange: ep,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: q.intl.string(q.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: eh,
                                              onChange: (e) => eg(e),
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: q.intl.string(q.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: ev,
                                              onChange: (e) => ef(e),
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: q.intl.string(q.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: ex,
                                              onChange: (e) => eb(e),
                                          }),
                                          (0, i.jsx)(h.k, {
                                              label: q.intl.string(q.t["4Z5+zg"]),
                                              placeholder: "Locale",
                                              value: ej,
                                              onChange: (e) => ey(e),
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(b.$, {
                                variant: "secondary",
                                text: q.intl.string(q.t.HVxmOD),
                                onClick: function () {
                                    $.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: G.Fg,
                                children: (0, i.jsx)(S.A, {
                                    ref: $,
                                    onChange: function (e) {
                                        e.currentTarget?.files?.[0] != null &&
                                            ei([
                                                ...en,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new k.Ay({
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
                            en.length > 0
                                ? (0, i.jsx)(j.D, {
                                      label: "Preview",
                                      children: (0, i.jsx)("div", {
                                          ref: V,
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
                                                                      (0, i.jsx)(_.J, { size: E.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: G.eA,
                                                                          children: (0, i.jsx)(L.Ay, {
                                                                              children: (0, i.jsx)(C.A, {
                                                                                  tooltip: q.intl.string(q.t.vN7REz),
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
                            eE
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
