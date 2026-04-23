n.d(t, { default: () => G }), n(134528), n(947204);
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
    S = n(780777),
    k = n(565150),
    E = n(521502),
    w = n(851023),
    C = n(215497),
    A = n(914905),
    O = n(176634),
    L = n(101555),
    P = n(386976),
    N = n(32523),
    I = n(287809),
    D = n(486020),
    B = n(58703),
    R = n(723702);
n(321073);
var M = n(110259),
    T = n(77138),
    z = n(363195),
    V = n(499785),
    W = n(652215),
    $ = n(985018);
async function q() {
    return (await s.Bo.get({ url: W.Rsh.BUG_REPORTS, rejectWithError: !1 })).body;
}
function F(e) {
    let t = e?.name ?? "",
        n = e?.squad ?? "";
    return "" === t && "" === n ? "" : t + "::" + n;
}
async function H(e, t, n) {
    let i = [
        { name: "name", value: e.name },
        { name: "priority", value: `${e.priority}` },
        { name: "override_platform_information", value: `${t.overridePlatformInformation}` },
        { name: "theme", value: z.A.theme },
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
        (0, T.a)(W.Umv.WEB_APP);
    try {
        return await V.A.post({
            url: W.Rsh.BUG_REPORTS,
            attachments: n,
            fields: i,
            trackedActionData: {
                event: M.NetworkActionNames.BUG_REPORT_SUBMIT,
                properties: { priority: e.priority, asana_inbox_id: a },
            },
            rejectWithError: !1,
        });
    } catch (e) {
        return e;
    }
}
var U = n(763180);
let Y = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((e) => ({
    id: e,
    label: e,
    value: e,
}));
function G(e) {
    let { transitionState: t, onClose: M } = e,
        T = a.useRef(null),
        z = a.useRef(null),
        [V, W] = a.useState(!1),
        [G, Z] = a.useState(""),
        [X, J] = a.useState(""),
        [K, Q] = a.useState(),
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
            })((0, R.getOS)()),
        ),
        [eh, ef] = a.useState(""),
        [ev, eg] = a.useState(""),
        [ex, eb] = a.useState(""),
        [ej, ey] = a.useState(""),
        [e_, eS] = a.useState(!1),
        [ek, eE] = a.useState(!1),
        [ew, eC] = a.useState(!1),
        [eA, eO] = a.useState(null);
    a.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
            query: { cache: e },
            rejectWithError: !0,
        }).then((e) => {
            if (null != e.body && "1b403b4f4bffbbc8fc15861878618cd7c2479e24" !== e.body.hash) {
                let e = new Date("1776968096744"),
                    t = new Date(),
                    n = (0, B.Tf)(t, e);
                n.hours > 6 && eO(n.hours);
            }
        });
    }, []);
    let eL = (0, r.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        }),
        eP = (0, r.bG)([E.A], () => E.A.getCurrentBuildOverride().overrides?.discord_web),
        { overridesInfo: eN } = (0, N.hI)(),
        { overridesInfo: eI } = (0, P.op)(),
        eD = Object.entries({ ...eN, ...eI }).map((e) => {
            let [t, { variantId: n }] = e;
            return { experimentId: t, variantId: n };
        });
    async function eB() {
        if ((eC(!1), "" === G || "" === X || null == K)) return void eS(!0);
        let e = ea?.features?.find((e) => F(e) === er);
        eE(!0), eS(!1);
        let t = en
                .map((e) => {
                    let { item: t } = e;
                    return t;
                })
                .map((e, t) => ({ file: e.file, name: e.id ?? `attachment_${t}`, filename: e.file?.name })),
            a = await H(
                {
                    name: G,
                    description: X,
                    priority: K,
                    feature: e,
                    url: ee,
                    buildOverride: eP?.id ?? null,
                    experimentOverrides: eD,
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
            ).catch(() => eC(!0));
        eE(!1),
            null != a && a.ok
                ? (eL && window.open(a.body.permalink_url, "_blank"),
                  M(),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await n.e("71256").then(n.bind(n, 369323));
                      return (t) => (0, i.jsx)(e, { ...t, asanaTask: a.body });
                  }))
                : eC(!0);
    }
    return (
        a.useEffect(() => {
            async function e() {
                el(await q());
            }
            eL && e();
        }, [eL]),
        a.useEffect(() => {
            en.length > 0 && z.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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
                            : [...e, new k.Ay({ id: (0, l.A)(), file: t, platform: k.xz.WEB, origin: "clipboard" })],
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
                { variant: "secondary", text: $.intl.string($.t["ETE/oC"]), onClick: M, autoFocus: !1 },
                {
                    variant: "primary",
                    text: eL ? "Submit and Open Report" : "Submit Report",
                    loading: ek,
                    onClick: eB,
                    autoFocus: !1,
                },
            ],
            onClose: M,
            children: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(m.B, {
                        gap: 8,
                        children: [
                            null != eP &&
                                (0, i.jsxs)(p.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            variant: "heading-md/medium",
                                            children: $.intl.string($.t["ZP/hEx"]),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: $.intl.format($.t["yY60+7"], {
                                                buildOverrideHook: () => (0, i.jsx)("b", { children: eP?.id }),
                                            }),
                                        }),
                                    ],
                                }),
                            null == eP &&
                                null != eA &&
                                (0, i.jsxs)(p.w, {
                                    type: "critical",
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            variant: "heading-md/medium",
                                            children: $.intl.formatToPlainString($.t["ql2Q/e"], { hours: eA }),
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: $.intl.string($.t.x18RUs),
                                        }),
                                    ],
                                }),
                            eL &&
                                Object.keys(eD).length > 0 &&
                                (0, i.jsxs)(p.w, {
                                    type: "warning",
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            variant: "heading-md/medium",
                                            children: "You have the following experiments overridden:",
                                        }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: eD.map((e) =>
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
                                label: $.intl.string($.t.OZRgjw),
                                error: e_ && "" === G ? $.intl.string($.t.EkokLy) : null,
                                placeholder: "Something is broken on this screen.",
                                type: "text",
                                value: G,
                                maxLength: 100,
                                onChange: Z,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(v.f, {
                                label: $.intl.string($.t["1SplH2"]),
                                error: e_ && "" === X ? $.intl.string($.t.EkokLy) : null,
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
                                errorMessage: e_ && void 0 === K ? $.intl.string($.t.EkokLy) : null,
                                renderOptionLabel: (e) => {
                                    let t;
                                    return (
                                        (t = e.priority),
                                        (0, i.jsxs)("div", {
                                            className: U.jS,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: U.Kt,
                                                    children: [
                                                        (0, i.jsx)("img", {
                                                            alt: "",
                                                            className: U.YN,
                                                            src: (0, D._O)({ id: t.emoji, animated: !0, size: 48 }),
                                                        }),
                                                        (0, i.jsx)(d.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/semibold",
                                                            className: U.n8,
                                                            children: t.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(d.E, {
                                                    color: "text-default",
                                                    variant: "text-xs/normal",
                                                    className: U.dP,
                                                    children: t.description,
                                                }),
                                            ],
                                        })
                                    );
                                },
                                onChange: Q,
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
                                optionClassName: U.sI,
                                value: K,
                                maxVisibleItems: 4,
                                closeOnSelect: !0,
                                "data-migration-pending": !0,
                            }),
                            eL &&
                                (0, i.jsx)(g.Z, {
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
                                                ?.filter((e) => "" !== F(e))
                                                ?.map((e) => {
                                                    let i = e.name ?? "",
                                                        a = (n.get(i) ?? 0) > 1,
                                                        l = null != e.squad && "" !== e.squad,
                                                        r = a && l ? `${i} (${e.squad})` : i;
                                                    return {
                                                        id: F(e),
                                                        label: r,
                                                        value: F(e),
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
                            (0, i.jsx)(f.k, {
                                label: $.intl.string($.t["7p5pqh"]),
                                placeholder: $.intl.string($.t.HewMzo),
                                type: "text",
                                value: ee,
                                maxLength: 5e3,
                                onChange: et,
                            }),
                            (0, i.jsx)(x.S, { checked: eo, onChange: (e) => eu(e), label: $.intl.string($.t.ayhqiH) }),
                            eo
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(f.k, {
                                              label: $.intl.string($.t.rrI4Tk),
                                              placeholder: "Device",
                                              value: ed,
                                              onChange: (e) => ec(e),
                                          }),
                                          (0, i.jsx)(b.l, {
                                              label: $.intl.string($.t.kcHxi6),
                                              value: em,
                                              options: Y,
                                              onSelectionChange: ep,
                                              selectionMode: "single",
                                              fullWidth: !0,
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: $.intl.string($.t.rEtxdg),
                                              placeholder: "Operating System Version",
                                              value: eh,
                                              onChange: (e) => ef(e),
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: $.intl.string($.t["wy1M/t"]),
                                              placeholder: "Client Version",
                                              value: ev,
                                              onChange: (e) => eg(e),
                                          }),
                                          (0, i.jsx)(f.k, {
                                              label: $.intl.string($.t.f7kbVu),
                                              placeholder: "Client Build Number",
                                              value: ex,
                                              onChange: (e) => eb(e),
                                          }),
                                          (0, i.jsx)(f.k, {
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
                                    T.current?.activateUploadDialogue();
                                },
                                fullWidth: !0,
                            }),
                            (0, i.jsx)("div", {
                                className: U.Fg,
                                children: (0, i.jsx)(S.A, {
                                    ref: T,
                                    onChange: (e) => {
                                        e.currentTarget?.files?.[0] != null &&
                                            ei([
                                                ...en,
                                                ...Array.from(e.currentTarget.files).map(
                                                    (e) =>
                                                        new k.Ay({
                                                            id: (0, l.A)(),
                                                            file: e,
                                                            platform: k.xz.WEB,
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
                                          ref: z,
                                          className: U.ZO,
                                          children:
                                              en.length > 0 &&
                                              en.map((e) =>
                                                  (0, i.jsxs)(
                                                      "div",
                                                      {
                                                          className: U.oh,
                                                          children: [
                                                              (0, i.jsxs)("div", {
                                                                  children: [
                                                                      (0, i.jsx)(A.J, { size: C.L.SMALL, upload: e }),
                                                                      (0, i.jsx)("div", {
                                                                          className: U.eA,
                                                                          children: (0, i.jsx)(L.Ay, {
                                                                              children: (0, i.jsx)(w.A, {
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
                            ew
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
