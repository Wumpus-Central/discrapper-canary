n.r(t), n.d(t, { default: () => e7 });
var l,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(17928),
    u = n(314116),
    p = n(534890),
    m = n(646270),
    g = n(31300),
    h = n(794083),
    f = n(939249),
    x = n(834730),
    j = n(691540),
    b = n(857250),
    y = n(97483),
    v = n(866665),
    C = n(408278),
    w = n(92446),
    k = n(625903),
    A = n(297264),
    N = n(821609),
    E = n(364522),
    I = n(103557),
    S = n(691885),
    R = n(289873),
    P = n(152367),
    _ = n(661531),
    D = n(627363),
    z = n(625180),
    T = n(672929),
    M = n(976860),
    V = n(885386),
    L = n(696451),
    G = n(71393),
    F = n(576705),
    B = n(486020),
    Y = n(759967),
    H = n(375708),
    K = n(673724),
    O = n(948230),
    X = n(976713),
    U = n(692200),
    q = n(683180),
    W = n(208137),
    Z = n(805332),
    $ = n(18739),
    Q = n(972786);
function J(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ee = n(58703);
let et = [
    {
        date: "2026-09-06",
        summary:
            "Collaborators on an app shared with their server can now remix it into a copy of their own, with no need for the owner to turn sharing on first.",
    },
    {
        date: "2026-09-06",
        summary:
            "Remixed an app? When the original improves, Conjure offers to update your copy while keeping every change you made, only checking with you on the rare spot it cannot keep both. You can also ask it to inherit updates from another app by its project id, even for a project you imported rather than remixed.",
    },
    { date: "2026-09-05", summary: "GPT-6 Astra joins the model picker and now powers the Big Brain effort stop." },
    {
        date: "2026-09-05",
        summary:
            "The rune panel is simpler now: one Conjuring count covers all the work in a turn, with Compacting listed separately.",
    },
    {
        date: "2026-09-05",
        summary:
            "Your app now has its own web address: pages people can open in a browser, a second address showing the version you are still working on, and a Sign in with Discord button that never asks anyone for a password.",
    },
    {
        date: "2026-09-05",
        summary:
            "Claude Fable 5.1 replaces Claude Fable 5 in the model picker, sharper on long builds at the same price.",
    },
    {
        date: "2026-09-03",
        summary: "Remix an app and Conjure builds your copy first, so the ideas it suggests are ones you can try.",
    },
    {
        date: "2026-09-03",
        summary:
            "Your published app stays playable while Conjure drives the preview, instead of both freezing at once.",
    },
    {
        date: "2026-09-02",
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
    },
    {
        date: "2026-09-02",
        summary:
            "Apps now know who\u2019s using them the moment they open, without asking anyone to sign in or approve anything.",
    },
    {
        date: "2026-09-02",
        summary:
            "A project you import gets fixed up and running straight away, instead of asking you to approve a plan.",
    },
    {
        date: "2026-09-02",
        summary:
            "Small follow-ups like adding sign-in are built straight away, instead of coming back as another plan to approve.",
    },
    {
        date: "2026-09-02",
        summary:
            "When a plan is redrawn, the new sketch keeps the look of the one before it, so your app still looks like itself.",
    },
    {
        date: "2026-09-01",
        summary:
            "Publishing now offers patch notes: Conjure drafts what changed since your last release, you edit them, and they post to a channel you pick.",
    },
    {
        date: "2026-09-01",
        summary: "People you share a project with can see the Publish control, instead of it being owner-only.",
    },
    {
        date: "2026-09-01",
        summary:
            "Checklist items Conjure is still working on show a spinner, so running and done tell apart at a glance.",
    },
    {
        date: "2026-08-31",
        summary: "Plan proposals come with a wireframe sketch, so you can see the shape of the app before you say go.",
    },
    {
        date: "2026-08-31",
        summary:
            "With Discord\u2019s Developer Mode on, a debug pane beside the builder shows your app\u2019s live logs and what your project is spending.",
    },
    {
        date: "2026-08-31",
        summary:
            "Your project gets a real name as soon as Conjure lands on a plan, instead of sitting as Untitled App.",
    },
    {
        date: "2026-08-31",
        summary:
            "App icons are drawn to suit what the app actually does, and always come back solid rather than see-through.",
    },
    {
        date: "2026-08-28",
        summary: "Apps you install just for yourself can hold an ordinary back-and-forth conversation with you in DMs.",
    },
    {
        date: "2026-08-26",
        summary:
            "You can move back and forth through Conjure\u2019s questions instead of being held on the one in front of you.",
    },
    {
        date: "2026-08-26",
        summary: "Hand a project to a whole role in settings, rather than adding one person at a time.",
    },
    {
        date: "2026-08-25",
        summary: "Conjuring has its own doorway in the desktop title bar, so it is one click away from anywhere.",
    },
];
var en = n(413927);
function el() {
    let e = et.slice(0, 3);
    if (0 === e.length) return null;
    let t = H.intl.string(Y.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: en.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: en.bZ,
                children: [
                    (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: H.intl.string(Y.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: en.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: en.S3,
                            children: [
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: en.VO,
                                    children: (0, ee.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                }),
                                (0, i.jsx)(x.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
        ],
    });
}
var ei = n(59345),
    ea = n(922016),
    es = n(980707),
    er = n(477782),
    eo = n(81369),
    ed = n(402879);
async function ec(e, t, n) {
    (0, $.Hc)(e);
    let l = await (0, $.vX)(e, t);
    (0, $.dv)(e, n, [l]);
}
function eu(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, K.x5)(e.size, t)
        ? null
        : H.intl.formatToPlainString(Y.default.AzziHF, { size: (0, K.ZJ)((0, K.yr)(t)) });
}
async function ep(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        i = await (0, $.cS)(e, l);
    await (0, ed.F)(i, l);
}
function em(e) {
    let t = a.useRef(null),
        n = a.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != n && e(n);
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, i.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var eg = n(950305),
    eh = n(664121);
let ef = [
    { value: "user", icon: eg.UserIcon, nameMessage: Y.default.iqXIRN },
    { value: "guild", icon: eh.R, nameMessage: Y.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: n } = e,
        l = a.useRef(null),
        s = em(a.useCallback((e) => n(e, "user"), [n])),
        r = em(a.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ea.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ea.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(es.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": H.intl.string(Y.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(er.rX, {
                            label: H.intl.string(Y.default.MLg0S8),
                            children: ef
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: H.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        er.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: a } = n;
                    return (0, i.jsx)(N.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eo.H,
                        text: H.intl.string(Y.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            s.input,
            r.input,
        ],
    });
}
var ej = n(113491),
    eb = n(629584),
    ey = n(148853),
    ev = n(491920);
function eC(e) {
    let { modes: t, mode: n, onChange: l, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, ey.kZ)(e), "aria-controls": (0, ey.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, i.jsx)(eb.I, {
              role: "tablist",
              look: "pill",
              className: r()(ev.b, s),
              optionClassName: ev.u,
              options: o,
              value: n,
              onChange: d,
          });
}
var ew = n(663417),
    ek = n(70688),
    eA = n(173936),
    eN = n(473935),
    eE = n(365199),
    eI = n(770818),
    eS = n(147036),
    eR = n(957565),
    eP = n(557875),
    e_ = n(869369),
    eD = n(123917);
let ez = new Set();
n(321073);
var eT = n(746080);
let eM = [];
function eV(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: s,
            isOwner: r,
            canRemix: o,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: g,
            onVersionHistory: h,
            onRefresh: f,
            isRefreshing: x = !1,
            onClose: v,
            refreshApplicationId: w,
            previewProjectId: A,
        } = e,
        N = a.useRef(null),
        { pending: E, refresh: I } = (0, eI.A)(w ?? null),
        { pending: S, connect: R } = (function (e) {
            let [t, n] = a.useState(ez),
                l = a.useRef(ez),
                i = a.useCallback((e) => {
                    (l.current = (0, eP.Q6)(l.current, e)), n(l.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eP.K9)(l.current, t.type);
                        async function s() {
                            let n = await (0, $.JI)(e, t.type);
                            if ((i(t.type), "url" === n.type)) return void (0, eD.h)({ href: n.url, trusted: !1 });
                            let l =
                                "setup" === (0, eP.rq)(n.error)
                                    ? H.intl.string(Y.default.avu1u4)
                                    : H.intl.string(Y.default["5fwOcF"]);
                            (0, j.P0)((0, b.o)(l, y.Ck.FAILURE));
                        }
                        null != a && ((l.current = a), n(a), s().catch(() => i(t.type)));
                    },
                    [e, i],
                ),
            };
        })(A ?? null),
        P = (0, c.bG)([$.Ay], () => (null == A ? eM : $.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: H.intl.string(Y.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: H.intl.formatToPlainString(Y.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != w,
            refreshPending: E,
            offers: a.useMemo(() => (0, eP.Xl)(P), [P]),
            connectPending: S,
        }),
        D = a.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        z = null != m && o,
        T = r && null != p,
        M = z || null != d || T || null != g || null != h,
        V = eR.p5 && null != l,
        L = eR.p5;
    return null != f || null != v || M || L || r
        ? (0, i.jsx)(ea.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: ea.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)(es.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": H.intl.string(H.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != f || null != v
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        null != f
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "refresh",
                                                  icon: ew.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ew.RefreshIcon },
                                                  label: H.intl.string(Y.default.xKexN1),
                                                  disabled: x,
                                                  action: f,
                                              })
                                            : null,
                                        null != v
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "close",
                                                  icon: ek.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ek.DoorExitIcon },
                                                  label: H.intl.string(Y.default.Ea0Wrr),
                                                  action: v,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, i.jsx)(er.rX, {
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            er.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void I();
                                                    let t = null == e.connectionType ? null : D.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          M
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "remix",
                                                  label: H.intl.string(Y.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "export",
                                                  label: H.intl.string(Y.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        T
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "import",
                                                  label: H.intl.string(Y.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "connect-tool",
                                                  label: H.intl.string(Y.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "version-history",
                                                  label: H.intl.string(Y.default.jAWwzi),
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          L
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        V
                                            ? (0, i.jsx)(er.Dr, {
                                                  id: "copy-link",
                                                  label: H.intl.string(H.t.WqhZss),
                                                  icon: eA.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eA.LinkIcon },
                                                  action: () =>
                                                      (0, eR.C)((0, eS.n)(l, eT.VV.VIBEGRATIONS, t), () =>
                                                          (0, j.P0)(
                                                              (0, b.o)(H.intl.string(H.t["L/PwZf"]), y.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(er.Dr, {
                                            id: "copy-project-id",
                                            label: H.intl.string(Y.default.b4TqpT),
                                            icon: eN.L,
                                            leadingAccessory: { type: "icon", icon: eN.L },
                                            action: () =>
                                                (0, eR.C)(t, () =>
                                                    (0, j.P0)((0, b.o)(H.intl.string(Y.default.WOKsTg), y.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(er.rX, {
                                    children: [
                                        (0, i.jsx)(er.Dr, {
                                            id: "settings",
                                            label: H.intl.string(Y.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, e_.A)(t, s ?? l),
                                        }),
                                        (0, i.jsx)(er.Dr, {
                                            id: "delete",
                                            label: H.intl.string(H.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: H.intl.formatToPlainString(Y.default.ZokHVz, { name: n }),
                                                    subtitle: H.intl.string(Y.default.NmF939),
                                                    confirmText: H.intl.string(H.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, O.xx)(t)).ok)
                                                            throw Error(H.intl.string(Y.default.tqKZCi));
                                                    },
                                                });
                                            },
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, i.jsx)(C.K, {
                      ...e,
                      buttonRef: N,
                      icon: eE.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": H.intl.string(H.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": n,
                  });
              },
          })
        : null;
}
var eL = n(742589),
    eG = n(769979);
function eF(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, i.jsx)(eL.A, {
        hideSearch: !0,
        toolbar: n,
        className: eG.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eG.QF,
            children: [
                (0, i.jsx)(P.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eG.Kk,
                }),
                null != l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eL.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, i.jsx)(eL.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(eL.A.Title, { className: eG.Qw, wrapperClassName: eG.DD, children: t }),
            ],
        }),
    });
}
var eB = n(321593),
    eY = n(580954),
    eH = n(192308),
    eK = n(189213),
    eO = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l);
function eX(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        a = "permissions" === t;
    return (0, i.jsx)(eK.Modal, {
        transitionState: n,
        onClose: l,
        title: H.intl.string(a ? Y.default.Rtlv25 : Y.default["+UouPe"]),
        subtitle: H.intl.string(a ? Y.default["nDQB/b"] : Y.default["E0QD++"]),
        size: "sm",
        actions: [{ text: H.intl.string(a ? H.t.BddRzS : Y.default["+Zh4FA"]), variant: "primary", onClick: l }],
    });
}
function eU(e) {
    (0, eH.openModal)((t) => (0, i.jsx)(eX, { ...t, reason: e }));
}
var eq = n(480007),
    eW = n(584936),
    eZ = n(899154),
    e$ = n(652215),
    eQ = n(675210),
    eJ = n(165610),
    e0 = n(352978);
function e2(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function e6(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e1(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function e9(e) {
    return (0, i.jsx)(h.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e8(e) {
    let t,
        n,
        l,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        g =
            ((t = o.id),
            (n = o.name),
            (l = a.useRef(!1)),
            (s = a.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, j.P0)((0, b.o)(H.intl.formatToPlainString(Y.default.u9TapG, { name: n }), y.Ck.MESSAGE)),
                    ep(t, n)
                        .catch((e) => {
                            let n;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof $._v ? e.status : null)
                                            ? H.intl.string(Y.default.uB40Hz)
                                            : 404 === n
                                              ? H.intl.string(Y.default.wCq2jC)
                                              : H.intl.string(Y.default.G2GqyP),
                                        y.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (r = em(
                    a.useCallback(
                        (e) => {
                            let l = eu(e);
                            null != l
                                ? (0, j.P0)((0, b.o)(l, y.Ck.FAILURE))
                                : (0, u.A)({
                                      title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: n }),
                                      subtitle: H.intl.string(Y.default["6syXoH"]),
                                      confirmText: H.intl.string(Y.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, M.pX)(e$.BVt.CHANNEL(c, eT.VV.VIBEGRATIONS, t));
                                          try {
                                              await ec(t, e, H.intl.string(Y.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), y.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        h = o.preview_application_id ?? o.application_id,
        { data: v } = (0, D.YY)(h),
        C =
            null == o.updated_at
                ? null
                : H.intl.formatToPlainString(Y.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: e0.OY,
        children: [
            (0, i.jsx)(eB.Ay, { projectId: o.id }),
            (0, i.jsxs)(f.D, {
                className: e0.W6,
                onClick: p,
                children: [
                    (0, i.jsx)("img", {
                        alt: "",
                        src: B.Ay.getApplicationIconURL({ id: h, icon: v?.icon, size: 40 }),
                        className: e0.VJ,
                    }),
                    (0, i.jsxs)("div", {
                        className: e0.MM,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: e0.j1,
                                children: o.name,
                            }),
                            null == C
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e0.h3,
                                      children: (0, i.jsx)(x.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: C,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: e0.M2,
                children: (0, i.jsxs)("div", {
                    className: e0.Pl,
                    children: [
                        (0, i.jsx)(eV, {
                            projectId: o.id,
                            projectName: o.name,
                            guildId: c,
                            projectGuildId: o.guild_id,
                            isOwner: (0, Q.PV)(o),
                            canRemix: (0, Q.H_)(o),
                            onRemix: m,
                            onExport: g.onExport,
                            onImport: g.onImport,
                        }),
                        g.importInput,
                    ],
                }),
            }),
        ],
    });
}
function e3(e) {
    let { project: t, projectsLoaded: l, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, h] = a.useState(!1),
        [f, E] = a.useState(!1),
        I = V.Q_.useSetting(),
        [S, R] = a.useState(null),
        [P, _] = a.useState(null),
        L = t?.id ?? null,
        G = a.useRef(L),
        F = a.useRef(!0),
        B = a.useRef(!1),
        K = a.useRef(null);
    (G.current = L),
        a.useEffect(
            () => (
                (F.current = !0),
                () => {
                    F.current = !1;
                }
            ),
            [],
        );
    let X = (0, c.bG)([Q.Ay], () => (null == L ? null : Q.Ay.getIntegrationStatus(L)), [L]),
        { data: q, isLoading: W } = (0, D.YY)(t?.preview_application_id ?? void 0),
        J = null != L && P !== L,
        ee = X?.preview_ready === !0,
        et = X?.has_activity === !0,
        {
            availability: en,
            activeMode: el,
            setMode: ea,
            widgetApplicationId: es,
        } = (0, eZ.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: et,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: X?.owner_authorization_revoked === !0,
        }),
        er = (0, eQ.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: ee,
            integrationInstalled: X?.integration_installed ?? null,
            botPermissionsChanged: X?.bot_permissions_changed === !0,
        }),
        eo = o || J || W,
        ed = H.intl.string(Y.default["5gU57O"]),
        ep = p && !f && !g,
        eg = H.intl.string(ep ? Y.default.YdgE0j : Y.default.aWVf4j),
        eh = a.useCallback(() => {
            if (f || g) {
                E(!1), h(!1), m(!0);
                return;
            }
            m((e) => !e);
        }, [f, g]),
        ef = a.useCallback(() => m(!1), []),
        ex = a.useCallback(() => {
            E((e) => !e && (m(!0), h(!1), !0));
        }, []),
        ej = a.useCallback(() => E(!1), []),
        eb = a.useCallback(
            (e) => {
                if (null == t || B.current) return;
                let n = t.id;
                function l() {
                    return F.current && G.current === n;
                }
                (B.current = !0),
                    h(!1),
                    m(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, $.oB)(n, e.sha)
                        .then(
                            () => {
                                l() && R({ entry: e, status: "restored" });
                            },
                            (t) => {
                                l() &&
                                    (R({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, j.P0)((0, b.o)(H.intl.string(Y.default.q6iZ84), y.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            l() && (B.current = !1);
                        });
            },
            [t],
        ),
        ey = (0, c.bG)([Z.A], () => Z.A.isBuilderPreviewMobile()),
        ev = H.intl.string(ey ? Y.default["3uCc8U"] : Y.default["+nzCxZ"]),
        ew = a.useCallback(() => (0, O.GG)(!ey), [ey]),
        ek = (0, T.A)(t?.preview_application_id ?? null, eJ.sd),
        eA = (0, eJ.x1)(ek) && ek.data.proxyTicketRefreshing,
        eN = a.useCallback(() => {
            null == ek || eA || z.A.refreshProxyTicket(ek.id);
        }, [ek, eA]),
        eE = a.useCallback(() => {
            var e, n;
            null != t && ((e = t.id), (n = ek?.id), (0, $.Bn)(e), (0, eY.A)().leaveFrame(n)), s();
        }, [t, ek?.id, s]),
        eI = a.useCallback(() => {
            null != t && (m(!0), (0, $.dv)(t.id, H.intl.string(Y.default["2ejwtJ"])));
        }, [t]),
        eS = em(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        l = eu(e);
                    null != l
                        ? (0, j.P0)((0, b.o)(l, y.Ck.FAILURE))
                        : (0, u.A)({
                              title: H.intl.formatToPlainString(Y.default.XYZqZK, { name: t.name }),
                              subtitle: H.intl.string(Y.default["6syXoH"]),
                              confirmText: H.intl.string(Y.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ec(n, e, H.intl.string(Y.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), y.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eR = a.useCallback(() => {
            null != t && (0, eW.A)(t, r);
        }, [t, r]),
        eP = a.useCallback(async () => {
            if (null == L || G.current !== L) return;
            K.current?.abort();
            let e = new AbortController();
            (K.current = e), _(null);
            try {
                await (0, O.U1)(L, e.signal);
            } catch {
            } finally {
                e.signal.aborted || K.current !== e || G.current !== L || _(L);
            }
        }, [L]);
    a.useEffect(
        () => (
            eP(),
            () => {
                K.current?.abort(), (K.current = null);
            }
        ),
        [eP],
    );
    let eD = X?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        ez = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eD && t.preview_guild_id === eD) ||
                (await (0, O.M7)(t.id, { guild_id: eD, preview_guild_id: eD }));
        }, [eD, t]),
        eM = a.useCallback(async () => {
            try {
                await ez();
            } catch {}
            await eP();
        }, [eP, ez]),
        eL = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: q ?? null,
                    guildId: eD,
                    onClose: () => {
                        eM();
                    },
                });
        }, [eM, eD, q, t]),
        eG = er
            ? { type: "permissions", onReviewPermissions: eL, loading: W || J }
            : J && null == X
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && l && (0, M.pX)(e$.BVt.CHANNEL(r, eT.VV.VIBEGRATIONS));
    }, [r, t, l]);
    let eB = a.useCallback((e) => {
            d(!0);
            let t = (0, $.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(H.intl.string(Y.default.fNP6Cd));
                (0, O.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, j.P0)(
                            (0, b.o)(e instanceof Error ? e.message : H.intl.string(Y.default.fNP6Cd), y.Ck.FAILURE),
                        );
                    })
                    .finally(() => d(!1)),
                t
            );
        }, []),
        eK = a.useCallback(() => {
            if (null == t) return;
            if (!ee) return void eU(eO.NO_PREVIEW);
            if (er) return void eU(eO.PERMISSIONS);
            let e = (0, $.$C)(t.id);
            e.catch(() => {}),
                (0, eq.A)({
                    projectId: t.id,
                    guildId: r,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: eB(t.id),
                    initialDraft: e,
                });
        }, [r, er, ee, t, eB]),
        eX = (0, i.jsx)(eF, {
            title: t?.name ?? H.intl.string(Y.default.F2dRba),
            breadcrumb: { title: H.intl.string(Y.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: e0.FO,
                          children: [
                              en.showModeSwitch ? (0, i.jsx)(eC, { modes: en.modes, mode: el, onChange: ea }) : null,
                              (0, i.jsx)(v.m, {
                                  text: ev,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(C.K, {
                                      icon: ey ? e1 : e6,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": ev,
                                      "aria-pressed": ey,
                                      onClick: ew,
                                  }),
                              }),
                              (0, i.jsx)("div", { className: e0.YJ }),
                              I
                                  ? (0, i.jsx)(v.m, {
                                        text: H.intl.string(Y.default["8MLfBT"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: w.BugIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["8MLfBT"]),
                                            "aria-pressed": f,
                                            onClick: ex,
                                        }),
                                    })
                                  : null,
                              ep
                                  ? null
                                  : (0, i.jsx)(v.m, {
                                        text: eg,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e2,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": eg,
                                            "aria-pressed": ep,
                                            onClick: eh,
                                        }),
                                    }),
                              (0, Q.PV)(t)
                                  ? (0, i.jsx)(v.m, {
                                        text: H.intl.string(Y.default["xhcY+n"]),
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: k.SettingsIcon,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": H.intl.string(Y.default["xhcY+n"]),
                                            onClick: () => (0, e_.A)(t.id, t.guild_id ?? r),
                                        }),
                                    })
                                  : null,
                              (0, Q.jf)(t)
                                  ? (0, i.jsx)(v.m, {
                                        text: ed,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(C.K, {
                                            icon: e9,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": ed,
                                            loading: o,
                                            disabled: eo,
                                            onClick: eK,
                                        }),
                                    })
                                  : null,
                              (0, i.jsx)(eV, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, Q.PV)(t),
                                  canRemix: (0, Q.H_)(t),
                                  onRefresh: (0, eJ.x1)(ek) ? eN : void 0,
                                  isRefreshing: eA,
                                  onClose: eE,
                                  onExport: eI,
                                  onImport: eS.open,
                                  onRemix: eR,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eH.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, i.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      S?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                m(!0), E(!1), h(!0);
                                            },
                                  refreshApplicationId:
                                      en.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== en.profileState
                                          ? es
                                          : null,
                                  previewProjectId: t.id,
                              }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: e0.nj,
        children: [
            eS.input,
            (0, i.jsx)("main", {
                className: e0.JX,
                children:
                    null == t
                        ? (0, i.jsxs)("div", {
                              className: e0.j5,
                              children: [
                                  eX,
                                  (0, i.jsxs)("div", {
                                      className: e0.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: H.intl.string(Y.default.F2dRba),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: H.intl.string(Y.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: H.intl.string(Y.default["42EdIV"]),
                                              onClick: () => (0, O.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ei.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eJ.sd,
                                  header: eX,
                                  chatOpen: p,
                                  onCloseChat: ef,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => h(!1),
                                  debugOpen: I && f,
                                  onCloseDebug: ej,
                                  onRestoreVersion: eb,
                                  restoreState: S,
                                  previewReady: ee,
                                  previewGate: eG,
                                  availability: en,
                                  activeMode: el,
                                  widgetApplicationId: es,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e5(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: l,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: g,
            modelSettings: h,
            onModelSettingsChange: j,
            onSelectProject: b,
            onIdeaChange: y,
            onCreate: v,
            onImportNewProject: C,
            importing: w,
        } = e,
        k = a.useMemo(
            () =>
                n
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [n],
        ),
        D = a.useRef(null);
    a.useEffect(() => {
        null != g && D.current?.querySelector("button")?.focus();
    }, [g]);
    let z = a.useMemo(
            () =>
                t
                    .filter((e) => (0, q.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        T = H.intl.string(Y.default.TU9IGR),
        M = [
            H.intl.string(Y.default["E+Q26x"]),
            H.intl.string(Y.default["06/jqP"]),
            H.intl.string(Y.default["3gSfUa"]),
        ],
        V = [
            {
                id: "feature-showcase",
                name: H.intl.string(Y.default.BLDsiz),
                description: H.intl.string(Y.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: H.intl.string(Y.default["+abXa8"]),
                description: H.intl.string(Y.default.OZYPMR),
            },
        ],
        L = H.intl.string(Y.default.FYK2xQ),
        G = H.intl.string(Y.default["/SUK82"]),
        F = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || v());
            },
            [u, v],
        );
    return (0, i.jsxs)("div", {
        className: r()(e0.nj, e0.a0),
        children: [
            (0, i.jsx)(eF, { title: H.intl.string(Y.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: e0.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: e0.ps,
                        children: [
                            (0, i.jsx)(E.Ip, {
                                className: e0.Yy,
                                children: (0, i.jsx)("div", {
                                    className: e0.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(e0.Qs, e0.Ix),
                                        children: [
                                            (0, i.jsx)(A.D, {
                                                variant: "heading-xl/semibold",
                                                children: H.intl.string(Y.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e0.WI,
                                                "aria-label": L,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e0.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: L,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e0.Aw,
                                                        children: V.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e0.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": H.intl.formatToPlainString(
                                                                            Y.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(e0.nx, e0.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return v(
                                                                                      ((t = e.name),
                                                                                      H.intl.formatToPlainString(
                                                                                          Y.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e0.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(x.E, {
                                                                                className: e0.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: e.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: e0.WI,
                                                "aria-label": G,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: e0.G9,
                                                        children: [
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: G,
                                                            }),
                                                            (0, i.jsx)(x.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: H.intl.string(Y.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: e0.Aw,
                                                        children: M.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: e0.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: e0.nx,
                                                                        onClick: d ? void 0 : () => v(e),
                                                                        children: (0, i.jsx)(x.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: e0.un,
                                                                            children: e,
                                                                        }),
                                                                    }),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(el, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: e0.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(e0.Qs, e0.DA),
                                    children: [
                                        (0, i.jsx)(I.f, {
                                            label: T,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: T,
                                            error: c,
                                            onChange: y,
                                            onKeyDown: F,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: e0.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: e0.gH,
                                                    ref: D,
                                                    children: (0, i.jsx)(S.l, {
                                                        selectionMode: "single",
                                                        label: H.intl.string(Y.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: H.intl.string(Y.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: H.intl.string(Y.default.MLg0S8),
                                                                options: ef.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: H.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, i.jsx)(ej.A, {
                                                    settings: h ?? X.Cl,
                                                    choices: (0, W.e)()
                                                        ? {
                                                              main: [...K.S8.main, ...K.wF.main],
                                                              subagent: [...K.S8.subagent, ...K.wF.subagent],
                                                              thinking: K.S8.thinking,
                                                          }
                                                        : K.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(N.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: H.intl.string(H.t.CumH4u),
                                                    disabled: u,
                                                    loading: d,
                                                    onClick: () => v(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("aside", {
                        className: e0.pA,
                        "aria-label": H.intl.string(Y.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: e0.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e0.RM,
                                        children: [
                                            (0, i.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: H.intl.string(Y.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: H.intl.string(Y.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ex, { importing: w, onImport: C }),
                                ],
                            }),
                            (0, i.jsxs)(E.Ip, {
                                className: e0.xe,
                                children: [
                                    (null == l || "loading" === l.type) && 0 === z.length
                                        ? (0, i.jsx)("div", { className: e0.E8, children: (0, i.jsx)(R.y, {}) })
                                        : l?.type === "error" && 0 === z.length
                                          ? (0, i.jsxs)("div", {
                                                className: e0.E8,
                                                children: [
                                                    (0, i.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: e0.JS,
                                                        children: H.intl.string(Y.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: H.intl.string(Y.default["42EdIV"]),
                                                        onClick: () => (0, O.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, i.jsx)("div", {
                                                  className: e0.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: e0.ST,
                                                      children: [
                                                          (0, i.jsx)(P.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: e0.sI,
                                                              children: H.intl.string(Y.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: e0.Dq,
                                                  children: z.map((e) =>
                                                      (0, i.jsx)(
                                                          e8,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => b(e.id),
                                                              onRemix: () => (0, eW.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    k.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: e0.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e0.uc,
                                                      children: [
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: H.intl.string(Y.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: H.intl.string(Y.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e0.Dq,
                                                      children: k.map((e) =>
                                                          (0, i.jsx)(
                                                              e8,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => b(e.id),
                                                                  onRemix: () => (0, eW.A)(e, o),
                                                              },
                                                              e.id,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let t,
        { guildId: n, projectId: l } = e,
        s = (0, c.yK)([Q.Ay], () => Q.Ay.getOwnedProjects()),
        r = (0, c.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        o = (0, c.yK)([Q.Ay], () => Q.Ay.getSharedProjects(n), [n]),
        d = (0, c.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        u = (0, c.bG)([G.A, F.A], () => {
            let e = G.A.getGuild(n);
            return null != e && F.A.can(e$.xBc.MANAGE_GUILD, e);
        }, [n]),
        [p, m] = a.useState(""),
        g = l ?? null,
        [h, f] = a.useState(!1),
        [x, v] = a.useState(null),
        [C, w] = a.useState("guild"),
        [k, A] = a.useState(null),
        [N, E] = a.useState(null);
    a.useEffect(() => {
        (0, O.hF)(n);
    }, [n, d, u]),
        a.useEffect(() => {
            (0, O.dm)(n, g);
        }, [n, g]);
    let I = a.useCallback((e) => {
            w(e), A(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    l = J({ idea: t, installScope: C, submitting: h });
                if ("idea" !== l && "submitting" !== l) {
                    if (null == C) return void A(H.intl.string(Y.default.jQ3nQB));
                    null != e && m(e), f(!0), v(null);
                    try {
                        let e = await (0, O.gA)({ guild_id: n, install_scope: C });
                        (0, $.Hc)(e),
                            (0, $.r2)(e, N ?? X.Cl),
                            (0, $.dv)(e, t),
                            (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS, e)),
                            m(""),
                            E(null);
                    } catch (e) {
                        v(e instanceof Error ? e.message : H.intl.string(Y.default.KKkp5Y));
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, n, p, N, h],
        ),
        [R, P] = a.useState(!1),
        _ = a.useCallback(
            async (e, t) => {
                let l = eu(e);
                if (null != l) return void (0, j.P0)((0, b.o)(l, y.Ck.FAILURE));
                P(!0);
                let i = null;
                try {
                    (i = await (0, O.gA)({ guild_id: n, install_scope: t })),
                        (0, $.Hc)(i),
                        (0, $.r2)(i, N ?? X.Cl),
                        await ec(i, e, H.intl.string(Y.default.KjEtrZ)),
                        (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS, i)),
                        E(null);
                } catch {
                    null != i && (await (0, O.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, b.o)(H.intl.string(Y.default["02GpNr"]), y.Ck.FAILURE));
                } finally {
                    P(!1);
                }
            },
            [n, N],
        ),
        D = a.useCallback(
            (e) => {
                (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        z = a.useCallback(() => {
            (0, M.pX)(e$.BVt.CHANNEL(n, eT.VV.VIBEGRATIONS));
        }, [n]),
        T = a.useCallback((e) => {
            m(e), v(null);
        }, []),
        V = (0, c.bG)([Q.Ay], () => {
            if (null == g) return null;
            let e = Q.Ay.getProject(g);
            return null == e || (0, Q.PV)(e) || e.guild_id === n ? e : null;
        }, [g, n]),
        B = (0, c.bG)([Q.Ay], () => Q.Ay.hasFetchedGuildProjects(n), [n]);
    return null != g
        ? (0, i.jsx)(e3, { project: V, projectsLoaded: B, onBack: z, guildId: n }, g)
        : (0, i.jsx)(e5, {
              projects: s,
              sharedProjects: o,
              fetchState: r,
              modelSettings: N,
              onModelSettingsChange: E,
              idea: p,
              guildId: n,
              submitting: h,
              createError: x,
              createDisabled: "idea" === (t = J({ idea: p, installScope: C, submitting: h })) || "submitting" === t,
              onSelectProject: D,
              onIdeaChange: T,
              onCreate: S,
              onImportNewProject: _,
              importing: R,
              installScope: C,
              onInstallScopeChange: I,
              installScopeError: k,
          });
}
