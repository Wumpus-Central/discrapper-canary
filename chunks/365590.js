(n.r(t), n.d(t, { default: () => tN }), n(321073));
var a,
    l = n(477900),
    i = n(582128),
    s = n(503698),
    o = n.n(s),
    r = n(536637),
    d = n.n(r),
    u = n(17928),
    c = n(314116),
    p = n(534890),
    m = n(646270),
    h = n(31300),
    f = n(939249),
    g = n(323384),
    b = n(834730),
    y = n(691540),
    x = n(857250),
    w = n(97483),
    v = n(821609),
    j = n(92446),
    k = n(625903),
    C = n(297264),
    A = n(97893),
    N = n(364522),
    I = n(103557),
    S = n(691885),
    E = n(789645),
    P = n(289873),
    R = n(152367),
    _ = n(661531),
    M = n(627363),
    D = n(625180),
    T = n(672929),
    O = n(742589),
    F = n(976860),
    G = n(885386),
    V = n(696451),
    z = n(71393),
    L = n(576705),
    H = n(486020),
    B = n(50617),
    Y = n(375708),
    U = n(948230),
    X = n(637708),
    q = n(936494),
    K = n(976713);
async function W(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, U.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var Z = n(673724),
    $ = n(208137),
    Q = n(933294),
    J = n(822835),
    ee = n(74029),
    et = n(559676),
    en = n(58551),
    ea = n(805332),
    el = n(277977),
    ei = n(972786);
function es(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eo = n(58703),
    er = n(127181),
    ed = n(192308);
function eu() {
    (0, ed.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ec = n(413927);
function ep() {
    let e = (0, er.TH)("desktop");
    if (0 === e.length) return null;
    let t = Y.intl.string(B.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: ec.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: ec.bZ,
                children: [
                    (0, l.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(B.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: ec.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: ec.S3,
                            children: [
                                (0, l.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ec.VO,
                                    children: [
                                        (0, eo.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, er.MZ)(e) ? ` \xb7 ${Y.intl.string(B.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, l.jsx)(b.E, {
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
            (0, er.B)("desktop")
                ? (0, l.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(B.default.YWxThz),
                      onClick: eu,
                  })
                : null,
        ],
    });
}
var em = n(121063),
    eh = n(210744),
    ef = n(922016),
    eg = n(980707),
    eb = n(477782),
    ey = n(81369),
    ex = n(402879);
async function ew(e, t, n) {
    (0, el.Hc)(e);
    let a = await (0, el.vX)(e, t);
    (0, el.dv)(e, n, [a]);
}
function ev(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Z.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(B.default.AzziHF, { size: (0, Z.ZJ)((0, Z.yr)(t)) });
}
async function ej(e, t) {
    let n,
        a =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        l = await (0, el.cS)(e, a);
    await (0, ex.F)(l, a);
}
function ek(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, l.jsx)("input", {
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
var eC = n(950305),
    eA = n(664121);
let eN = [
    { value: "user", icon: eC.UserIcon, nameMessage: B.default.iqXIRN },
    { value: "guild", icon: eA.R, nameMessage: B.default.LdgKdI },
];
function eI(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = ek(i.useCallback((e) => n(e, "user"), [n])),
        o = ek(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ef.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: ef.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(eg.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(B.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eb.rX, {
                            label: Y.intl.string(B.default.MLg0S8),
                            children: eN
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        eb.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(v.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: ey.H,
                        text: Y.intl.string(B.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            s.input,
            o.input,
        ],
    });
}
var eS = n(113491),
    eE = n(629584),
    eP = n(753514),
    eR = n(491920);
function e_(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eP.kZ)(e), "aria-controls": (0, eP.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(eE.I, {
              role: "tablist",
              look: "pill",
              className: o()(eR.b, s),
              optionClassName: eR.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eM = n(663417),
    eD = n(70688),
    eT = n(173936),
    eO = n(473935),
    eF = n(365199),
    eG = n(410645),
    eV = n(147036),
    ez = n(957565),
    eL = n(123917),
    eH = n(557875);
let eB = new Set();
var eY = n(869369),
    eU = n(746080),
    eX = n(793712);
let eq = [];
function eK(e) {
    (0, y.P0)((0, x.o)(e, w.Ck.FAILURE));
}
function eW(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: a,
            projectGuildId: s,
            isOwner: o,
            canRemix: r,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: h,
            onVersionHistory: f,
            onRestorePoints: g,
            onRefresh: b,
            isRefreshing: v = !1,
            onClose: j,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        N = i.useRef(null),
        { pending: I, refresh: S } = (0, eG.A)(C ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [n, a] = i.useState(eB),
                l = i.useRef(eB),
                s = i.useCallback((e) => {
                    ((l.current = (0, eH.Q6)(l.current, e)), a(l.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, eH.K9)(l.current, n.type);
                        async function o() {
                            let a = await (0, el.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, eL.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eH.rq)(a.error)
                                          ? Y.intl.string(B.default.avu1u4)
                                          : Y.intl.string(B.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), a(i), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, eK),
        R = (0, u.bG)([el.Ay], () => (null == A ? eq : el.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: Y.intl.string(B.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(B.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(B.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: I,
            offers: i.useMemo(() => (0, eH.Xl)(R), [R]),
            connectPending: E,
        }),
        M = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        D = null != m && r,
        T = o && null != p,
        F = D || null != d || T || null != h || null != f || null != g,
        G = ez.p5 && null != a,
        V = ez.p5;
    return null != b || null != j || F || V || o
        ? (0, l.jsx)(ef.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: ef.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(eg.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != b || null != j
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        null != b
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "refresh",
                                                  icon: eM.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eM.RefreshIcon },
                                                  label: Y.intl.string(B.default.xKexN1),
                                                  disabled: v,
                                                  action: b,
                                              })
                                            : null,
                                        null != j
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "close",
                                                  icon: eD.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eD.DoorExitIcon },
                                                  label: Y.intl.string(B.default.Ea0Wrr),
                                                  action: j,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, l.jsx)(eb.rX, {
                                    children: _.map((e) =>
                                        (0, l.jsx)(
                                            eb.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
                                                    let t = null == e.connectionType ? null : M.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          F
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        D
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(B.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(B.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        T
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(B.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(B.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(B.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(B.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          V
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        G
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eT.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eT.LinkIcon },
                                                  action: () =>
                                                      (0, ez.C)((0, eV.n)(a, eU.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, x.o)(Y.intl.string(Y.t["L/PwZf"]), w.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eb.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(B.default.b4TqpT),
                                            icon: eO.L,
                                            leadingAccessory: { type: "icon", icon: eO.L },
                                            action: () =>
                                                (0, ez.C)(t, () =>
                                                    (0, y.P0)((0, x.o)(Y.intl.string(B.default.WOKsTg), w.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        (0, l.jsx)(eb.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(B.default["xhcY+n"]),
                                            icon: k.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: k.SettingsIcon },
                                            action: () => (0, eY.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(eb.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: Y.intl.formatToPlainString(B.default.ZokHVz, { name: n }),
                                                    subtitle: Y.intl.string(B.default.NmF939),
                                                    confirmText: Y.intl.string(Y.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, U.xx)(t)).ok)
                                                            throw Error(Y.intl.string(B.default.tqKZCi));
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
                  let { onClick: n } = e,
                      { isShown: a } = t;
                  return (0, l.jsx)("div", {
                      ref: N,
                      className: eX.h,
                      children: (0, l.jsx)(O.A.Icon, {
                          icon: eF.MoreHorizontalIcon,
                          tooltip: Y.intl.string(Y.t["UKOtz+"]),
                          "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                          "aria-haspopup": "menu",
                          "aria-expanded": a,
                          selected: a,
                          onClick: n,
                      }),
                  });
              },
          })
        : null;
}
var eZ = n(769979);
function e$(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(O.A, {
        hideSearch: !0,
        toolbar: n,
        className: eZ.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: eZ.QF,
            children: [
                (0, l.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: eZ.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(O.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(O.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(O.A.Title, { className: eZ.Qw, wrapperClassName: eZ.DD, children: t }),
            ],
        }),
    });
}
var eQ = n(73432),
    eJ = n(683071),
    e0 = n(47167),
    e2 = n(808728),
    e1 = n(994500),
    e6 = n(287809),
    e9 = n(652215);
let e8 = "conjuring-help";
var e7 = n(107148);
function e3() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([e6.default, z.A, e2.Ay, e1.A], () => {
                let e = e6.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of z.A.getGuildsArray()) {
                    if (!t.features.has(e9.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = e2.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, e0.m1)(t, e6.default, e1.A) === e8;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, F.pX)(e9.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eL.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: e7.l,
              children: (0, l.jsx)(eJ.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(B.default["4BsHmp"], { channel: e8, onNavigate: t }),
              }),
          });
}
var e5 = n(321593),
    e4 = n(580954),
    te = n(189213),
    tt = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function tn(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = t === tt.PERMISSIONS;
    return (0, l.jsx)(te.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(i ? B.default.Rtlv25 : B.default["+UouPe"]),
        subtitle: Y.intl.string(i ? B.default["nDQB/b"] : B.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(i ? Y.t.BddRzS : B.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function ta(e) {
    (0, ed.openModal)((t) => (0, l.jsx)(tn, { ...t, reason: e }));
}
var tl = n(480007),
    ti = n(584936),
    ts = n(548118),
    to = n(683180);
let tr = "user",
    td = "no-server",
    tu = new Map();
function tc(e) {
    return tu.get(e) ?? null;
}
function tp(e) {
    switch (e) {
        case "all":
        case tr:
        case td:
            return null;
        default:
            return e;
    }
}
function tm(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tr:
            return "user" === e.install_scope;
        case td:
            return null == (0, X.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var th = n(506774);
let tf = "VibegrationsProjectsPanelOpen";
function tg() {
    return th.w.get(tf) ?? null;
}
function tb(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var ty = n(165610),
    tx = n(352978);
function tw(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tv(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tj(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tk(e) {
    let t,
        n,
        a,
        s,
        o,
        { project: r, guildId: p, onSelect: m, onRemix: h } = e,
        v =
            ((t = r.id),
            (n = r.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, x.o)(Y.intl.formatToPlainString(B.default.u9TapG, { name: n }), w.Ck.MESSAGE)),
                    ej(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, x.o)(
                                        409 === (n = e instanceof el._v ? e.status : null)
                                            ? Y.intl.string(B.default.uB40Hz)
                                            : 404 === n
                                              ? Y.intl.string(B.default.wCq2jC)
                                              : Y.intl.string(B.default.G2GqyP),
                                        w.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (o = ek(
                    i.useCallback(
                        (e) => {
                            let a = ev(e);
                            null != a
                                ? (0, y.P0)((0, x.o)(a, w.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(B.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(B.default["6syXoH"]),
                                      confirmText: Y.intl.string(B.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, F.pX)(e9.BVt.CHANNEL(p, eU.VV.VIBEGRATIONS, t));
                                          try {
                                              await ew(t, e, Y.intl.string(B.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, x.o)(Y.intl.string(B.default["02GpNr"]), w.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, p],
                    ),
                )).open,
                importInput: o.input,
            }),
        j = r.preview_application_id ?? r.application_id,
        { data: k } = (0, M.YY)(j),
        C = k?.icon == null ? null : H.Ay.getApplicationIconURL({ id: j, icon: k.icon, size: 40 }),
        A =
            null == r.updated_at
                ? null
                : Y.intl.formatToPlainString(B.default.oMDaqr, { time: d()(r.updated_at).fromNow() }),
        N = (0, X.HC)(r),
        I =
            (0, u.bG)([z.A], () => (null == N ? null : (z.A.getGuild(N)?.name ?? null)), [N]) ??
            Y.intl.string(B.default["qqH+iN"]);
    return (0, l.jsxs)("div", {
        className: tx.OY,
        children: [
            (0, l.jsx)(e5.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tx.W6,
                onClick: m,
                children: [
                    null == C
                        ? (0, l.jsx)("div", {
                              className: tx.a8,
                              "aria-hidden": !0,
                              children: (0, l.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, l.jsx)("img", { alt: "", src: C, className: tx.VJ }),
                    (0, l.jsxs)("div", {
                        className: tx.MM,
                        children: [
                            (0, l.jsx)(b.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tx.j1,
                                children: r.name,
                            }),
                            (0, l.jsxs)("div", {
                                className: tx.h3,
                                children: [
                                    (0, l.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tx.Wb,
                                        children: I,
                                    }),
                                    null == A
                                        ? null
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("span", {
                                                      className: tx.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, l.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tx.zM,
                                                      children: A,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tx.M2,
                children: (0, l.jsxs)("div", {
                    className: tx.Pl,
                    children: [
                        (0, l.jsx)(eW, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: p,
                            projectGuildId: r.guild_id,
                            isOwner: (0, ei.PV)(r),
                            canRemix: (0, ei.H_)(r),
                            onRemix: h,
                            onExport: v.onExport,
                            onImport: v.onImport,
                        }),
                        v.importInput,
                    ],
                }),
            }),
        ],
    });
}
function tC(e) {
    var t, a;
    let { project: s, projectsLoaded: o, onBack: r, guildId: d } = e,
        [p, m] = i.useState(!1),
        [h, f] = i.useState(!0),
        [g, A] = i.useState(!1),
        [N, I] = i.useState(!1),
        [S, E] = i.useState(!1),
        P = G.Q_.useSetting(),
        [R, _] = i.useState(null),
        [V, z] = i.useState(null),
        L = s?.id ?? null,
        H = i.useRef(L),
        X = i.useRef(!0),
        q = i.useRef(!1),
        K = i.useRef(null);
    ((H.current = L),
        i.useEffect(
            () => (
                (X.current = !0),
                () => {
                    X.current = !1;
                }
            ),
            [],
        ));
    let Z = (0, u.bG)([ei.Ay], () => (null == L ? null : ei.Ay.getIntegrationStatus(L)), [L]),
        { data: $, isLoading: es } = (0, M.YY)(s?.preview_application_id ?? void 0),
        eo = null != L && V !== L,
        er = Z?.preview_ready === !0,
        eu = Z?.has_activity === !0,
        {
            availability: ec,
            activeMode: ep,
            setMode: ef,
            widgetApplicationId: eg,
        } = (0, J.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: eu,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: Z?.owner_authorization_revoked === !0,
        }),
        eb = (0, en.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: er,
            integrationInstalled: Z?.integration_installed ?? null,
            botPermissionsChanged: Z?.bot_permissions_changed === !0,
        }),
        ey = p || eo || es,
        ex = Y.intl.string(B.default["5gU57O"]),
        ej = h && !S && !g && !N,
        eC = Y.intl.string(ej ? B.default.YdgE0j : B.default.aWVf4j),
        eA = i.useCallback(() => {
            if (S || g || N) {
                (E(!1), A(!1), I(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [S, g, N]),
        eN = i.useCallback(() => f(!1), []),
        { active: eI } = (0, ee.Q_)(L),
        eS = i.useRef(null),
        eE = (0, et.o4)(L),
        eP = Y.intl.string(eE ? B.default.bfQ4Ki : eI ? B.default.rfNEHn : B.default.lXcEa2),
        eR = i.useCallback(() => {
            if (null != L) {
                if (eI) return void (0, ee.PS)(L);
                (E(!1), A(!1), I(!1), f(!0), (0, ee.nI)(L));
            }
        }, [L, eI]),
        eM = i.useCallback(() => {
            E((e) => !e && (f(!0), A(!1), I(!1), !0));
        }, []),
        eD = i.useCallback(() => E(!1), []),
        eT = i.useCallback(
            (e) => {
                if (null == s || q.current) return;
                let t = s.id;
                function n() {
                    return X.current && H.current === t;
                }
                ((q.current = !0),
                    A(!1),
                    f(!0),
                    _({ entry: e, status: "restoring" }),
                    (0, el.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && _({ entry: e, status: "restored" });
                            },
                            (a) => {
                                n() &&
                                    (_({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, a),
                                    (0, y.P0)((0, x.o)(Y.intl.string(B.default.q6iZ84), w.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (q.current = !1);
                        }));
            },
            [s],
        ),
        eO = (0, u.bG)([ea.A], () => ea.A.isBuilderPreviewMobile()),
        eF = Y.intl.string(eO ? B.default["3uCc8U"] : B.default["+nzCxZ"]),
        eG = i.useCallback(() => (0, U.GG)(!eO), [eO]),
        eV = (0, T.A)(s?.preview_application_id ?? null, ty.sd),
        ez = (0, ty.x1)(eV) && eV.data.proxyTicketRefreshing,
        eL = i.useCallback(() => {
            null == eV || ez || D.A.refreshProxyTicket(eV.id);
        }, [eV, ez]),
        eH = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eV?.id), (0, el.Bn)(e), (0, e4.A)().leaveFrame(t)), r());
        }, [s, eV?.id, r]),
        eB = i.useCallback(() => {
            null != s && (f(!0), (0, el.dv)(s.id, Y.intl.string(B.default["2ejwtJ"])));
        }, [s]),
        eX = ek(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ev(e);
                    null != n
                        ? (0, y.P0)((0, x.o)(n, w.Ck.FAILURE))
                        : (0, c.A)({
                              title: Y.intl.formatToPlainString(B.default.XYZqZK, { name: s.name }),
                              subtitle: Y.intl.string(B.default["6syXoH"]),
                              confirmText: Y.intl.string(B.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await ew(t, e, Y.intl.string(B.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, x.o)(Y.intl.string(B.default["02GpNr"]), w.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eq = i.useCallback(() => {
            null != s && (0, ti.A)(s, d);
        }, [s, d]),
        eK = i.useCallback(async () => {
            if (null == L || H.current !== L) return;
            K.current?.abort();
            let e = new AbortController();
            ((K.current = e), z(null));
            try {
                await (0, U.U1)(L, e.signal);
            } catch {
            } finally {
                e.signal.aborted || K.current !== e || H.current !== L || z(L);
            }
        }, [L]);
    i.useEffect(
        () => (
            eK(),
            () => {
                (K.current?.abort(), (K.current = null));
            }
        ),
        [eK],
    );
    let eZ =
            ((t = s ?? null), (a = Z ?? null), a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eJ = i.useCallback(async () => {
            null != s && (await W(s, eZ));
        }, [eZ, s]),
        e0 = i.useCallback(async () => {
            try {
                await eJ();
            } catch {}
            await eK();
        }, [eK, eJ]),
        e2 = i.useCallback(() => {
            let e = s?.preview_application_id;
            null != s &&
                null != e &&
                Q.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: $ ?? null,
                    guildId: eZ,
                    onClose: () => {
                        e0();
                    },
                });
        }, [e0, eZ, $, s]),
        e1 = eb
            ? { type: "permissions", onReviewPermissions: e2, loading: es || eo }
            : eo && null == Z
              ? { type: "checking" }
              : void 0;
    i.useEffect(() => {
        null == s && o && (0, F.pX)(e9.BVt.CHANNEL(d, eU.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let e6 = i.useCallback((e) => {
            m(!0);
            let t = (0, el.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(Y.intl.string(B.default.fNP6Cd));
                (0, U.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, x.o)(e instanceof Error ? e.message : Y.intl.string(B.default.fNP6Cd), w.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        e8 = i.useCallback(() => {
            if (null == s) return;
            if (!er) return void ta(tt.NO_PREVIEW);
            if (eb) return void ta(tt.PERMISSIONS);
            if ("user" === s.install_scope)
                return void e6(s.id)
                    .then(() => {
                        (0, y.P0)((0, x.o)(Y.intl.string(B.default.wA0o0L), w.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, el.$C)(s.id);
            (e.catch(() => {}),
                (0, tl.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: e6(s.id),
                    initialDraft: e,
                }));
        }, [d, eb, er, s, e6]),
        e7 =
            null != s && (0, ei.jf)(s)
                ? (0, l.jsx)(v.$, { size: "sm", variant: "primary", loading: p, disabled: ey, onClick: e8, text: ex })
                : null,
        e3 = (0, l.jsx)(e$, {
            title: s?.name ?? Y.intl.string(B.default.F2dRba),
            breadcrumb: { title: Y.intl.string(B.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tx.FO,
                          children: [
                              ec.showModeSwitch ? (0, l.jsx)(e_, { modes: ec.modes, mode: ep, onChange: ef }) : null,
                              (0, l.jsx)(O.A.Icon, {
                                  icon: eO ? tj : tv,
                                  tooltip: eF,
                                  "aria-label": eF,
                                  selected: eO,
                                  onClick: eG,
                              }),
                              (0, l.jsx)(O.A.Icon, {
                                  ref: eS,
                                  icon: eQ.A,
                                  tooltip: eP,
                                  "aria-label": eP,
                                  selected: eI,
                                  disabled: eE,
                                  onClick: eR,
                              }),
                              "frame" === ep ? (0, l.jsx)(eh.A, { frame: eV, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: tx.YJ }),
                              P
                                  ? (0, l.jsx)(O.A.Icon, {
                                        icon: j.BugIcon,
                                        tooltip: Y.intl.string(B.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(B.default["8MLfBT"]),
                                        selected: S,
                                        onClick: eM,
                                    })
                                  : null,
                              (0, ei.PV)(s)
                                  ? (0, l.jsx)(O.A.Icon, {
                                        icon: k.SettingsIcon,
                                        tooltip: Y.intl.string(B.default["xhcY+n"]),
                                        "aria-label": Y.intl.string(B.default["xhcY+n"]),
                                        onClick: () => (0, eY.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(eW, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ei.PV)(s),
                                  canRemix: (0, ei.H_)(s),
                                  onRefresh: (0, ty.x1)(eV) ? eL : void 0,
                                  isRefreshing: ez,
                                  onClose: eH,
                                  onExport: eB,
                                  onImport: eX.open,
                                  onRemix: eq,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, ed.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, l.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      R?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (f(!0), E(!1), I(!1), A(!0));
                                            },
                                  onRestorePoints: () => {
                                      (f(!0), E(!1), A(!1), I(!0));
                                  },
                                  refreshApplicationId:
                                      ec.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ec.profileState
                                          ? eg
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ej
                                  ? null
                                  : (0, l.jsx)(O.A.Icon, { icon: tw, tooltip: eC, "aria-label": eC, onClick: eA }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tx.nj,
        children: [
            eX.input,
            (0, l.jsx)("main", {
                className: tx.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: tx.j5,
                              children: [
                                  e3,
                                  (0, l.jsxs)("div", {
                                      className: tx.sD,
                                      children: [
                                          (0, l.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(B.default.F2dRba),
                                          }),
                                          (0, l.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(B.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(v.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(B.default["42EdIV"]),
                                              onClick: () => (0, U.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              em.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eS,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: ty.sd,
                                  header: e3,
                                  chatOpen: h,
                                  onCloseChat: eN,
                                  chatHeaderAction: e7,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: N,
                                  onCloseRestorePoints: () => I(!1),
                                  installScope: s.install_scope,
                                  debugOpen: P && S,
                                  onCloseDebug: eD,
                                  onRestoreVersion: eT,
                                  restoreState: R,
                                  previewReady: er,
                                  previewGate: e1,
                                  availability: ec,
                                  activeMode: ep,
                                  widgetApplicationId: eg,
                              },
                              s.id,
                          ),
            }),
        ],
    });
}
function tA(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: r,
            createDisabled: d,
            installScope: c,
            onInstallScopeChange: p,
            installScopeError: m,
            modelSettings: h,
            onModelSettingsChange: g,
            onSelectProject: j,
            onIdeaChange: k,
            onCreate: M,
            onImportNewProject: D,
            importing: T,
        } = e,
        [F, G] = i.useState(() => ({ guildId: a, filter: tc(a) })),
        V = (F.guildId === a ? F.filter : tc(a)) ?? a,
        L = i.useCallback(
            (e) => {
                (tu.set(a, e), G({ guildId: a, filter: e }));
            },
            [a],
        ),
        H = (0, u.yK)(
            [z.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let a = [];
                    for (let e of n) {
                        let t = z.A.getGuild(e);
                        null != t && a.push(t);
                    }
                    return a.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        X = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: R.D, label: Y.intl.string(B.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tr,
                    leading: eC.UserIcon,
                    label: Y.intl.string(B.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: td,
                    leading: eA.R,
                    label: Y.intl.string(B.default["qqH+iN"]),
                },
                ...H.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, l.jsx)(ts.Ay, { guild: e, size: ts.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [H],
        ),
        q = (0, u.yK)(
            [ei.Ay, z.A],
            () => {
                let e = tp(V);
                if (null != e) return ei.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(z.A.getGuilds()))
                    ei.Ay.hasFetchedGuildProjects(e.id) && t.push(...ei.Ay.getSharedProjects(e.id));
                return t;
            },
            [V],
        );
    i.useEffect(() => {
        let e = tp(V);
        null == e || ei.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [V]);
    let W = i.useMemo(
            () =>
                q
                    .filter((e) => tm(e, V))
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [q, V],
        ),
        Q = i.useRef(null);
    i.useEffect(() => {
        null != m && Q.current?.querySelector("button")?.focus();
    }, [m]);
    let J = i.useMemo(
            () =>
                t
                    .filter((e) => tm(e, V))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, V],
        ),
        ee = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, to.X0)(e, a)
                    ? j(e.id)
                    : (0, y.P0)((0, x.o)(Y.intl.string(B.default["wY7I+H"]), w.Ck.MESSAGE));
            },
            [a, j],
        ),
        et = Y.intl.string(B.default.TU9IGR),
        en = [
            Y.intl.string(B.default["E+Q26x"]),
            Y.intl.string(B.default["06/jqP"]),
            Y.intl.string(B.default["3gSfUa"]),
        ],
        ea = [
            {
                id: "feature-showcase",
                name: Y.intl.string(B.default.BLDsiz),
                description: Y.intl.string(B.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Y.intl.string(B.default["+abXa8"]),
                description: Y.intl.string(B.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: Y.intl.string(B.default.ieAgex),
                description: Y.intl.string(B.default["5yvj+f"]),
            },
        ],
        el = Y.intl.string(B.default.FYK2xQ),
        es = Y.intl.string(B.default["/SUK82"]),
        eo = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || M());
            },
            [d, M],
        ),
        er = tp(V) ?? a,
        ed = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(er), [er]),
        eu = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(a), [a]),
        [ec, em] = i.useState(tg),
        eh = i.useMemo(() => th.w.get(tb(a)) ?? !1, [a]),
        ef = "success" === eu,
        eg = (0, u.yK)([ei.Ay], () => ei.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => tm(e, a)),
        eb = ec ?? (!!eg || "error" === eu || (!ef && eh));
    i.useEffect(() => {
        ef && th.w.set(tb(a), eg);
    }, [ef, eg, a]);
    let ey = i.useCallback((e) => {
            (th.w.set(tf, e), em(e));
        }, []),
        ex = i.useCallback(() => ey(!eb), [ey, eb]),
        ew = i.useCallback(() => ey(!1), [ey]),
        ev = Y.intl.string(B.default.jDPFDh),
        ej = eb ? ev : Y.intl.string(B.default.a6d2y1);
    return (0, l.jsx)("div", {
        className: o()(tx.nj, tx.a0),
        children: (0, l.jsxs)("div", {
            className: tx.Yo,
            children: [
                (0, l.jsxs)("main", {
                    className: tx.ps,
                    children: [
                        (0, l.jsx)(e$, {
                            title: Y.intl.string(B.default.Xmvb23),
                            actions: (0, l.jsx)(O.A.Icon, {
                                icon: A.Z,
                                tooltip: ej,
                                "aria-label": ej,
                                selected: eb,
                                onClick: ex,
                            }),
                        }),
                        (0, l.jsx)(N.Ip, {
                            className: tx.Yy,
                            children: (0, l.jsx)("div", {
                                className: tx.Mo,
                                children: (0, l.jsxs)("section", {
                                    className: o()(tx.Qs, tx.Ix),
                                    children: [
                                        (0, l.jsx)(e3, {}),
                                        (0, l.jsx)(C.D, {
                                            variant: "heading-xl/semibold",
                                            children: Y.intl.string(B.default["2tYpRK"]),
                                        }),
                                        (0, l.jsxs)("section", {
                                            className: tx.WI,
                                            "aria-label": el,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tx.G9,
                                                    children: [
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: el,
                                                        }),
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(B.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("ol", {
                                                    className: tx.Aw,
                                                    children: ea.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tx.EA,
                                                                children: (0, l.jsxs)(f.D, {
                                                                    "aria-disabled": s,
                                                                    "aria-label": Y.intl.formatToPlainString(
                                                                        B.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tx.nx, tx.rz),
                                                                    onClick: s
                                                                        ? void 0
                                                                        : () => {
                                                                              var t;
                                                                              return M(
                                                                                  ((t = e.name),
                                                                                  Y.intl.formatToPlainString(
                                                                                      B.default["9D9L0S"],
                                                                                      { templateName: t },
                                                                                  )),
                                                                              );
                                                                          },
                                                                    children: [
                                                                        (0, l.jsx)(b.E, {
                                                                            className: tx.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, l.jsx)(b.E, {
                                                                            className: tx.BK,
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
                                        (0, l.jsxs)("section", {
                                            className: tx.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tx.G9,
                                                    children: [
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(B.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("ol", {
                                                    className: tx.Aw,
                                                    children: en.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tx.EA,
                                                                children: (0, l.jsx)(f.D, {
                                                                    "aria-disabled": s,
                                                                    className: tx.nx,
                                                                    onClick: s ? void 0 : () => M(e),
                                                                    children: (0, l.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tx.un,
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
                                        (0, l.jsx)(ep, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: tx.Yl,
                            children: (0, l.jsxs)("div", {
                                className: o()(tx.Qs, tx.DA),
                                children: [
                                    (0, l.jsx)(I.f, {
                                        label: et,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: et,
                                        error: r,
                                        onChange: k,
                                        onKeyDown: eo,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: tx.VP,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: tx.gH,
                                                ref: Q,
                                                children: (0, l.jsx)(S.l, {
                                                    selectionMode: "single",
                                                    label: Y.intl.string(B.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: Y.intl.string(B.default.MLg0S8),
                                                    options: [
                                                        {
                                                            label: Y.intl.string(B.default.MLg0S8),
                                                            options: eN.map((e) => ({
                                                                id: `install-scope-option-${e.value}`,
                                                                value: e.value,
                                                                leading: e.icon,
                                                                label: Y.intl.string(e.nameMessage),
                                                            })),
                                                        },
                                                    ],
                                                    value: c ?? void 0,
                                                    onSelectionChange: p,
                                                    errorMessage: m,
                                                }),
                                            }),
                                            (0, l.jsx)(eS.A, {
                                                settings: h ?? K.Cl,
                                                choices: (0, $.e)()
                                                    ? {
                                                          main: [...Z.S8.main, ...Z.wF.main],
                                                          subagent: [...Z.S8.subagent, ...Z.wF.subagent],
                                                          thinking: Z.S8.thinking,
                                                      }
                                                    : Z.S8,
                                                disabled: s,
                                                onChange: g,
                                            }),
                                            (0, l.jsx)(v.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: Y.intl.string(Y.t.CumH4u),
                                                disabled: d,
                                                loading: s,
                                                onClick: () => M(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("aside", {
                    className: tx.pA,
                    hidden: !eb,
                    "aria-label": Y.intl.string(B.default.Bo5fE3),
                    children: [
                        (0, l.jsxs)("div", {
                            className: tx.IR,
                            children: [
                                (0, l.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tx.RM,
                                    children: Y.intl.string(B.default.Bo5fE3),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tx.Ss,
                                    children: [
                                        (0, l.jsx)(eI, { importing: T, onImport: D }),
                                        (0, l.jsx)(O.A.Icon, { icon: E.P, tooltip: ev, "aria-label": ev, onClick: ew }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)(N.Ip, {
                            className: tx.xe,
                            children: [
                                (0, l.jsx)("div", {
                                    className: tx.Vw,
                                    children: (0, l.jsx)(S.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(B.default.mvtKAm),
                                        hideLabel: !0,
                                        options: X,
                                        value: V,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, l.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tx.wE,
                                    children: Y.intl.string(B.default.YnAFtT),
                                }),
                                ("unattempted" === ed || "loading" === ed) && 0 === J.length
                                    ? (0, l.jsx)("div", { className: tx.E8, children: (0, l.jsx)(P.y, {}) })
                                    : "error" === ed && 0 === J.length
                                      ? (0, l.jsxs)("div", {
                                            className: tx.E8,
                                            children: [
                                                (0, l.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tx.JS,
                                                    children: Y.intl.string(B.default["IN/HRP"]),
                                                }),
                                                (0, l.jsx)(v.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(B.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(er),
                                                }),
                                            ],
                                        })
                                      : 0 === J.length
                                        ? (0, l.jsx)("div", {
                                              className: tx.D1,
                                              children: (0, l.jsxs)("div", {
                                                  className: tx.ST,
                                                  children: [
                                                      (0, l.jsx)(R.D, { size: "lg", color: _.A.colors.TEXT_SUBTLE }),
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tx.sI,
                                                          children: Y.intl.string(B.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, l.jsx)("div", {
                                              className: tx.Dq,
                                              children: J.map((e) =>
                                                  (0, l.jsx)(
                                                      tk,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => ee(e),
                                                          onRemix: () => (0, ti.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, l.jsxs)("div", {
                                          className: tx.qx,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tx.uc,
                                                  children: [
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Y.intl.string(B.default.jrCnUc),
                                                      }),
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Y.intl.string(B.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: tx.Dq,
                                                  children: W.map((e) =>
                                                      (0, l.jsx)(
                                                          tk,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => ee(e),
                                                              onRemix: () => (0, ti.A)(e, a),
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
    });
}
function tN(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([ei.Ay], () => ei.Ay.getOwnedProjects()),
        o = (0, u.yK)([V.Ay], () => V.Ay.getSelfMember(n)?.roles ?? [], [n]),
        r = (0, u.bG)(
            [z.A, L.A],
            () => {
                let e = z.A.getGuild(n);
                return null != e && L.A.can(e9.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [d, c] = i.useState(""),
        p = a ?? null,
        [m, h] = i.useState(!1),
        [f, g] = i.useState(null),
        [b, v] = i.useState("guild"),
        [j, k] = i.useState(null),
        [C, A] = i.useState(null);
    (i.useEffect(() => {
        (0, U.hF)(n);
    }, [n, o, r]),
        i.useEffect(() => {
            (0, U.dm)(n, p);
        }, [n, p]));
    let N = i.useCallback((e) => {
            (v(e), k(null));
        }, []),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = es({ idea: t, installScope: b, submitting: m });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == b) return void k(Y.intl.string(B.default.jQ3nQB));
                    (null != e && c(e), h(!0), g(null));
                    try {
                        let e = await (0, U.gA)({ guild_id: n, install_scope: b });
                        ((0, el.Hc)(e),
                            (0, el.r2)(e, C ?? K.Cl),
                            (0, el.dv)(e, t),
                            (0, F.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS, e)),
                            c(""),
                            A(null));
                    } catch (e) {
                        g((0, q.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [b, n, d, C, m],
        ),
        [S, E] = i.useState(!1),
        P = i.useCallback(
            async (e, t) => {
                let a = ev(e);
                if (null != a) return void (0, y.P0)((0, x.o)(a, w.Ck.FAILURE));
                E(!0);
                let l = null;
                try {
                    ((l = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, el.Hc)(l),
                        (0, el.r2)(l, C ?? K.Cl),
                        await ew(l, e, Y.intl.string(B.default.KjEtrZ)),
                        (0, F.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS, l)),
                        A(null));
                } catch {
                    (null != l && (await (0, U.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, x.o)(Y.intl.string(B.default["02GpNr"]), w.Ck.FAILURE)));
                } finally {
                    E(!1);
                }
            },
            [n, C],
        ),
        R = i.useCallback(
            (e) => {
                (0, F.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        _ = i.useCallback(() => {
            (0, F.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS));
        }, [n]),
        M = i.useCallback((e) => {
            (c(e), g(null));
        }, []),
        D = (0, u.bG)(
            [ei.Ay],
            () => {
                if (null == p) return null;
                let e = ei.Ay.getProject(p);
                return null == e || (0, ei.PV)(e) || e.guild_id === n ? e : null;
            },
            [p, n],
        ),
        T = (0, u.bG)([ei.Ay], () => ei.Ay.hasFetchedGuildProjects(n), [n]);
    return null != p
        ? (0, l.jsx)(tC, { project: D, projectsLoaded: T, onBack: _, guildId: n }, p)
        : (0, l.jsx)(tA, {
              projects: s,
              modelSettings: C,
              onModelSettingsChange: A,
              idea: d,
              guildId: n,
              submitting: m,
              createError: f,
              createDisabled: "idea" === (t = es({ idea: d, installScope: b, submitting: m })) || "submitting" === t,
              onSelectProject: R,
              onIdeaChange: M,
              onCreate: I,
              onImportNewProject: P,
              importing: S,
              installScope: b,
              onInstallScopeChange: N,
              installScopeError: j,
          });
}
