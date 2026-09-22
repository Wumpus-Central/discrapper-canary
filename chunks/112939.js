(n.r(t), n.d(t, { default: () => tP }), n(321073));
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
    w = n(857250),
    x = n(97483),
    k = n(821609),
    v = n(92446),
    j = n(625903),
    C = n(297264),
    A = n(97893),
    N = n(364522),
    I = n(103557),
    S = n(691885),
    E = n(789645),
    P = n(289873),
    _ = n(152367),
    R = n(661531),
    T = n(627363),
    M = n(625180),
    O = n(672929),
    D = n(742589),
    V = n(976860),
    z = n(885386),
    G = n(696451),
    L = n(71393),
    F = n(576705),
    B = n(486020),
    H = n(50617),
    Y = n(375708),
    U = n(948230),
    q = n(637708),
    X = n(936494),
    K = n(976713);
async function W(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, U.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var $ = n(673724),
    Z = n(208137),
    Q = n(993396),
    J = n(822835),
    ee = n(66708),
    et = n(74029),
    en = n(559676),
    ea = n(58551),
    el = n(805332),
    ei = n(277977),
    es = n(972786);
function eo(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var er = n(58703),
    ed = n(127181),
    eu = n(192308);
function ec() {
    (0, eu.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ep = n(413927);
function em() {
    let e = (0, ed.TH)("desktop");
    if (0 === e.length) return null;
    let t = Y.intl.string(H.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: ep.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: ep.bZ,
                children: [
                    (0, l.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(H.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: ep.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: ep.S3,
                            children: [
                                (0, l.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ep.VO,
                                    children: [
                                        (0, er.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ed.MZ)(e) ? ` \xb7 ${Y.intl.string(H.default.vvxuUI)}` : null,
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
            (0, ed.B)("desktop")
                ? (0, l.jsx)(k.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(H.default.YWxThz),
                      onClick: ec,
                  })
                : null,
        ],
    });
}
var eh = n(92598),
    ef = n(210744),
    eg = n(922016),
    eb = n(980707),
    ey = n(477782),
    ew = n(81369),
    ex = n(402879);
async function ek(e, t, n) {
    (0, ei.Hc)(e);
    let a = await (0, ei.vX)(e, t);
    (0, ei.dv)(e, n, [a]);
}
function ev(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, $.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, $.ZJ)((0, $.yr)(t)) });
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
        l = await (0, ei.cS)(e, a);
    await (0, ex.F)(l, a);
}
function eC(e) {
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
var eA = n(950305),
    eN = n(664121);
let eI = [
    { value: "user", icon: eA.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eN.R, nameMessage: H.default.LdgKdI },
];
function eS(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = eC(i.useCallback((e) => n(e, "user"), [n])),
        o = eC(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eg.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: eg.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(eb.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(ey.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: eI
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        ey.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(k.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: ew.H,
                        text: Y.intl.string(H.default["NHP2+t"]),
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
var eE = n(113491),
    eP = n(629584),
    e_ = n(753514),
    eR = n(491920);
function eT(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, e_.kZ)(e), "aria-controls": (0, e_.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(eP.I, {
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
    eO = n(70688),
    eD = n(173936),
    eV = n(473935),
    ez = n(365199),
    eG = n(7437),
    eL = n(147036),
    eF = n(957565),
    eB = n(123917),
    eH = n(557875);
let eY = new Set();
var eU = n(869369),
    eq = n(746080),
    eX = n(793712);
let eK = [];
function eW(e) {
    (0, y.P0)((0, w.o)(e, x.Ck.FAILURE));
}
function e$(e) {
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
            isRefreshing: k = !1,
            onClose: v,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        N = i.useRef(null),
        { pending: I, refresh: S } = (0, eG.A)(C ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [n, a] = i.useState(eY),
                l = i.useRef(eY),
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
                            let a = await (0, ei.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, eB.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eH.rq)(a.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), a(i), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, eW),
        _ = (0, u.bG)([ei.Ay], () => (null == A ? eK : ei.Ay.getDeclaredConnections(A))),
        R = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: Y.intl.string(H.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: I,
            offers: i.useMemo(() => (0, eH.Xl)(_), [_]),
            connectPending: E,
        }),
        T = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        M = null != m && r,
        O = o && null != p,
        V = M || null != d || O || null != h || null != f || null != g,
        z = eF.p5 && null != a,
        G = eF.p5;
    return null != b || null != v || V || G || o
        ? (0, l.jsx)(eg.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: eg.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(eb.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != b || null != v
                              ? (0, l.jsxs)(ey.rX, {
                                    children: [
                                        null != b
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "refresh",
                                                  icon: eM.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eM.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: k,
                                                  action: b,
                                              })
                                            : null,
                                        null != v
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "close",
                                                  icon: eO.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eO.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: v,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          R.length > 0
                              ? (0, l.jsx)(ey.rX, {
                                    children: R.map((e) =>
                                        (0, l.jsx)(
                                            ey.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
                                                    let t = null == e.connectionType ? null : T.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          V
                              ? (0, l.jsxs)(ey.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          G
                              ? (0, l.jsxs)(ey.rX, {
                                    children: [
                                        z
                                            ? (0, l.jsx)(ey.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eD.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eD.LinkIcon },
                                                  action: () =>
                                                      (0, eF.C)((0, eL.n)(a, eq.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(ey.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eV.L,
                                            leadingAccessory: { type: "icon", icon: eV.L },
                                            action: () =>
                                                (0, eF.C)(t, () =>
                                                    (0, y.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(ey.rX, {
                                    children: [
                                        (0, l.jsx)(ey.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: j.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                            action: () => (0, eU.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(ey.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: Y.intl.formatToPlainString(H.default.ZokHVz, { name: n }),
                                                    subtitle: Y.intl.string(H.default.NmF939),
                                                    confirmText: Y.intl.string(Y.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, U.xx)(t)).ok)
                                                            throw Error(Y.intl.string(H.default.tqKZCi));
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
                      children: (0, l.jsx)(D.A.Icon, {
                          icon: ez.MoreHorizontalIcon,
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
function eQ(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(D.A, {
        hideSearch: !0,
        toolbar: n,
        className: eZ.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: eZ.QF,
            children: [
                (0, l.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: eZ.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(D.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(D.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(D.A.Title, { className: eZ.Qw, wrapperClassName: eZ.DD, children: t }),
            ],
        }),
    });
}
var eJ = n(73432),
    e0 = n(683071),
    e2 = n(47167),
    e1 = n(808728),
    e6 = n(994500),
    e9 = n(287809),
    e8 = n(652215);
let e7 = "conjuring-help";
var e3 = n(107148);
function e5() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([e9.default, L.A, e1.Ay, e6.A], () => {
                let e = e9.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(e8.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = e1.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, e2.m1)(t, e9.default, e6.A) === e7;
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
                    ? (0, V.pX)(e8.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eB.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: e3.l,
              children: (0, l.jsx)(e0.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(H.default["4BsHmp"], { channel: e7, onNavigate: t }),
              }),
          });
}
var e4 = n(321593),
    te = n(580954),
    tt = n(227189),
    tn = n(189213),
    ta = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function tl(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = t === ta.PERMISSIONS;
    return (0, l.jsx)(tn.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(i ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(i ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(i ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function ti(e) {
    (0, eu.openModal)((t) => (0, l.jsx)(tl, { ...t, reason: e }));
}
var ts = n(480007),
    to = n(584936),
    tr = n(536820),
    td = n(548118);
let tu = "user";
var tc = n(683180);
let tp = "user",
    tm = "no-server",
    th = new Map();
function tf(e) {
    return th.get(e) ?? null;
}
function tg(e) {
    switch (e) {
        case "all":
        case tp:
        case tm:
            return null;
        default:
            return e;
    }
}
function tb(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tp:
            return "user" === e.install_scope;
        case tm:
            return null == (0, q.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var ty = n(506774);
let tw = "VibegrationsProjectsPanelOpen";
function tx() {
    return ty.w.get(tw) ?? null;
}
function tk(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tv = n(165610),
    tj = n(352978);
function tC(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tA(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tN(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tI(e) {
    let t,
        n,
        a,
        s,
        o,
        { project: r, guildId: p, onSelect: m, onRemix: h } = e,
        k =
            ((t = r.id),
            (n = r.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, w.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    ej(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, w.o)(
                                        409 === (n = e instanceof ei._v ? e.status : null)
                                            ? Y.intl.string(H.default.uB40Hz)
                                            : 404 === n
                                              ? Y.intl.string(H.default.wCq2jC)
                                              : Y.intl.string(H.default.G2GqyP),
                                        x.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (o = eC(
                    i.useCallback(
                        (e) => {
                            let a = ev(e);
                            null != a
                                ? (0, y.P0)((0, w.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(e8.BVt.CHANNEL(p, eq.VV.VIBEGRATIONS, t));
                                          try {
                                              await ek(t, e, Y.intl.string(H.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, p],
                    ),
                )).open,
                importInput: o.input,
            }),
        v = r.preview_application_id ?? r.application_id,
        { data: j } = (0, T.YY)(v),
        C = j?.icon == null ? null : B.Ay.getApplicationIconURL({ id: v, icon: j.icon, size: 40 }),
        A =
            null == r.updated_at
                ? null
                : Y.intl.formatToPlainString(H.default.oMDaqr, { time: d()(r.updated_at).fromNow() }),
        N = (0, q.HC)(r),
        I =
            (0, u.bG)([L.A], () => (null == N ? null : (L.A.getGuild(N)?.name ?? null)), [N]) ??
            Y.intl.string(H.default["qqH+iN"]);
    return (0, l.jsxs)("div", {
        className: tj.OY,
        children: [
            (0, l.jsx)(e4.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tj.W6,
                onClick: m,
                children: [
                    null == C
                        ? (0, l.jsx)("div", {
                              className: tj.a8,
                              "aria-hidden": !0,
                              children: (0, l.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, l.jsx)("img", { alt: "", src: C, className: tj.VJ }),
                    (0, l.jsxs)("div", {
                        className: tj.MM,
                        children: [
                            (0, l.jsx)(b.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tj.j1,
                                children: r.name,
                            }),
                            (0, l.jsxs)("div", {
                                className: tj.h3,
                                children: [
                                    (0, l.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tj.Wb,
                                        children: I,
                                    }),
                                    null == A
                                        ? null
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("span", {
                                                      className: tj.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, l.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tj.zM,
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
                className: tj.M2,
                children: (0, l.jsxs)("div", {
                    className: tj.Pl,
                    children: [
                        (0, l.jsx)(e$, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: p,
                            projectGuildId: r.guild_id,
                            isOwner: (0, es.PV)(r),
                            canRemix: (0, es.H_)(r),
                            onRemix: h,
                            onExport: k.onExport,
                            onImport: k.onImport,
                        }),
                        k.importInput,
                    ],
                }),
            }),
        ],
    });
}
function tS(e) {
    var t, a;
    let { project: s, projectsLoaded: o, onBack: r, guildId: d } = e,
        [p, m] = i.useState(!1),
        [h, f] = i.useState(!0),
        [g, A] = i.useState(!1),
        [N, I] = i.useState(!1),
        [S, E] = i.useState(!1),
        P = z.Q_.useSetting(),
        [_, R] = i.useState(null),
        [G, L] = i.useState(null),
        F = s?.id ?? null,
        B = i.useRef(F),
        q = i.useRef(!0),
        X = i.useRef(!1),
        K = i.useRef(null);
    ((B.current = F),
        i.useEffect(
            () => (
                (q.current = !0),
                () => {
                    q.current = !1;
                }
            ),
            [],
        ));
    let $ = (0, u.bG)([es.Ay], () => (null == F ? null : es.Ay.getIntegrationStatus(F)), [F]),
        { data: Z, isLoading: Q } = (0, T.YY)(s?.preview_application_id ?? void 0),
        ee = null != F && G !== F,
        eo = $?.preview_ready === !0,
        er = $?.has_activity === !0,
        {
            availability: ed,
            activeMode: ec,
            setMode: ep,
            widgetApplicationId: em,
        } = (0, J.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: er,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: $?.owner_authorization_revoked === !0,
        }),
        eg = (0, ea.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: eo,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        eb = p || ee || Q,
        ey = Y.intl.string(H.default["5gU57O"]),
        ew = h && !S && !g && !N,
        ex = Y.intl.string(ew ? H.default.YdgE0j : H.default.aWVf4j),
        ej = i.useCallback(() => {
            if (S || g || N) {
                (E(!1), A(!1), I(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [S, g, N]),
        eA = i.useCallback(() => f(!1), []),
        { active: eN } = (0, et.Q_)(F),
        eI = i.useRef(null),
        eS = (0, en.o4)(F),
        eE = Y.intl.string(eS ? H.default.bfQ4Ki : eN ? H.default.rfNEHn : H.default.lXcEa2),
        eP = i.useCallback(() => {
            if (null != F) {
                if (eN) return void (0, et.PS)(F);
                (E(!1), A(!1), I(!1), f(!0), (0, et.nI)(F));
            }
        }, [F, eN]),
        e_ = i.useCallback(() => {
            E((e) => !e && (f(!0), A(!1), I(!1), !0));
        }, []),
        eR = i.useCallback(() => E(!1), []),
        eM = i.useCallback(
            (e) => {
                if (null == s || X.current) return;
                let t = s.id;
                function n() {
                    return q.current && B.current === t;
                }
                ((X.current = !0),
                    A(!1),
                    f(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, ei.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && R({ entry: e, status: "restored" });
                            },
                            (a) => {
                                n() &&
                                    (R({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, a),
                                    (0, y.P0)((0, w.o)(Y.intl.string(H.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (X.current = !1);
                        }));
            },
            [s],
        ),
        eO = (0, u.bG)([el.A], () => el.A.isBuilderPreviewMobile()),
        eD = Y.intl.string(eO ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eV = i.useCallback(() => (0, U.GG)(!eO), [eO]),
        ez = (0, O.A)(s?.preview_application_id ?? null, tv.sd),
        eG = (0, tv.x1)(ez) && ez.data.proxyTicketRefreshing,
        eL = i.useCallback(() => {
            null == ez || eG || M.A.refreshProxyTicket(ez.id);
        }, [ez, eG]),
        eF = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ez?.id), (0, ei.Bn)(e), (0, te.A)().leaveFrame(t)), r());
        }, [s, ez?.id, r]),
        eB = i.useCallback(() => {
            null != s && (f(!0), (0, ei.dv)(s.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [s]),
        eH = eC(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ev(e);
                    null != n
                        ? (0, y.P0)((0, w.o)(n, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: s.name }),
                              subtitle: Y.intl.string(H.default["6syXoH"]),
                              confirmText: Y.intl.string(H.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await ek(t, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eY = i.useCallback(() => {
            null != s && (0, to.A)(s, d);
        }, [s, d]),
        eX = i.useCallback(async () => {
            if (null == F || B.current !== F) return;
            K.current?.abort();
            let e = new AbortController();
            ((K.current = e), L(null));
            try {
                await (0, U.U1)(F, e.signal);
            } catch {
            } finally {
                e.signal.aborted || K.current !== e || B.current !== F || L(F);
            }
        }, [F]);
    i.useEffect(
        () => (
            eX(),
            () => {
                (K.current?.abort(), (K.current = null));
            }
        ),
        [eX],
    );
    let eK =
            ((t = s ?? null), (a = $ ?? null), a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eW = i.useCallback(async () => {
            null != s && (await W(s, eK));
        }, [eK, s]),
        eZ = i.useCallback(async () => {
            try {
                await eW();
            } catch {}
            await eX();
        }, [eX, eW]),
        e0 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || Q || ee
                ? null
                : {
                      ...(0, tt.p)({ applicationId: e, application: Z ?? null, guildId: eK }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [ee, eZ, eK, Q, Z, s?.preview_application_id]),
        e2 = eg ? { type: "permissions", authorizeProps: e0 } : ee && null == $ ? { type: "checking" } : void 0;
    i.useEffect(() => {
        null == s && o && (0, V.pX)(e8.BVt.CHANNEL(d, eq.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let e1 = i.useCallback((e) => {
            m(!0);
            let t = (0, ei.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(Y.intl.string(H.default.fNP6Cd));
                (0, U.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, w.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        e6 = i.useCallback(() => {
            if (null == s) return;
            if (!eo) return void ti(ta.NO_PREVIEW);
            if (eg) return void ti(ta.PERMISSIONS);
            if ("user" === s.install_scope)
                return void e1(s.id)
                    .then(() => {
                        (0, y.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, ei.$C)(s.id);
            (e.catch(() => {}),
                (0, ts.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: e1(s.id),
                    initialDraft: e,
                }));
        }, [d, eg, eo, s, e1]),
        e9 =
            null != s && (0, es.jf)(s)
                ? (0, l.jsx)(k.$, { size: "sm", variant: "primary", loading: p, disabled: eb, onClick: e6, text: ey })
                : null,
        e7 = (0, l.jsx)(eQ, {
            title: s?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tj.FO,
                          children: [
                              ed.showModeSwitch ? (0, l.jsx)(eT, { modes: ed.modes, mode: ec, onChange: ep }) : null,
                              (0, l.jsx)(D.A.Icon, {
                                  icon: eO ? tN : tA,
                                  tooltip: eD,
                                  "aria-label": eD,
                                  selected: eO,
                                  onClick: eV,
                              }),
                              (0, l.jsx)(D.A.Icon, {
                                  ref: eI,
                                  icon: eJ.A,
                                  tooltip: eE,
                                  "aria-label": eE,
                                  selected: eN,
                                  disabled: eS,
                                  onClick: eP,
                              }),
                              "frame" === ec ? (0, l.jsx)(ef.A, { frame: ez, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: tj.YJ }),
                              P
                                  ? (0, l.jsx)(D.A.Icon, {
                                        icon: v.BugIcon,
                                        tooltip: Y.intl.string(H.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                        selected: S,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, es.PV)(s)
                                  ? (0, l.jsx)(D.A.Icon, {
                                        icon: j.SettingsIcon,
                                        tooltip: Y.intl.string(H.default["xhcY+n"]),
                                        "aria-label": Y.intl.string(H.default["xhcY+n"]),
                                        onClick: () => (0, eU.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(e$, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, es.PV)(s),
                                  canRemix: (0, es.H_)(s),
                                  onRefresh: (0, tv.x1)(ez) ? eL : void 0,
                                  isRefreshing: eG,
                                  onClose: eF,
                                  onExport: eB,
                                  onImport: eH.open,
                                  onRemix: eY,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, eu.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, l.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      _?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (f(!0), E(!1), I(!1), A(!0));
                                            },
                                  onRestorePoints: () => {
                                      (f(!0), E(!1), A(!1), I(!0));
                                  },
                                  refreshApplicationId:
                                      ed.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ed.profileState
                                          ? em
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ew
                                  ? null
                                  : (0, l.jsx)(D.A.Icon, { icon: tC, tooltip: ex, "aria-label": ex, onClick: ej }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tj.nj,
        children: [
            eH.input,
            (0, l.jsx)("main", {
                className: tj.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: tj.j5,
                              children: [
                                  e7,
                                  (0, l.jsxs)("div", {
                                      className: tj.sD,
                                      children: [
                                          (0, l.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(H.default.F2dRba),
                                          }),
                                          (0, l.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(H.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(H.default["42EdIV"]),
                                              onClick: () => (0, U.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              eh.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eI,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: tv.sd,
                                  header: e7,
                                  chatOpen: h,
                                  onCloseChat: eA,
                                  chatHeaderAction: e9,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: N,
                                  onCloseRestorePoints: () => I(!1),
                                  installScope: s.install_scope,
                                  debugOpen: P && S,
                                  onCloseDebug: eR,
                                  onRestoreVersion: eM,
                                  restoreState: _,
                                  previewReady: eo,
                                  previewGate: e2,
                                  availability: ed,
                                  activeMode: ec,
                                  widgetApplicationId: em,
                              },
                              s.id,
                          ),
            }),
        ],
    });
}
function tE(e) {
    let {
            projects: t,
            idea: a,
            guildId: s,
            submitting: r,
            createError: d,
            createDisabled: c,
            conjureTarget: p,
            onConjureTargetChange: m,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: v,
            onSelectProject: j,
            onIdeaChange: T,
            onCreate: M,
            onStartTemplate: O,
            onSubmitTemplate: V,
            onCancelTemplate: z,
            onSkipTemplate: G,
            onImportNewProject: F,
            importing: B,
        } = e,
        [q, X] = i.useState(() => ({ guildId: s, filter: tf(s) })),
        W = (q.guildId === s ? q.filter : tf(s)) ?? s,
        Q = i.useCallback(
            (e) => {
                (th.set(s, e), X({ guildId: s, filter: e }));
            },
            [s],
        ),
        J = (0, u.yK)(
            [L.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let a = [];
                    for (let e of n) {
                        let t = L.A.getGuild(e);
                        null != t && a.push(t);
                    }
                    return a.sort((e, t) => e.name.localeCompare(t.name));
                })(t, s),
            [t, s],
        ),
        ee = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Y.intl.string(H.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tp,
                    leading: eA.UserIcon,
                    label: Y.intl.string(H.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tm,
                    leading: eN.R,
                    label: Y.intl.string(H.default["qqH+iN"]),
                },
                ...J.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, l.jsx)(td.Ay, { guild: e, size: td.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [J],
        ),
        et = (0, u.yK)(
            [es.Ay, L.A],
            () => {
                let e = tg(W);
                if (null != e) return es.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(L.A.getGuilds()))
                    es.Ay.hasFetchedGuildProjects(e.id) && t.push(...es.Ay.getSharedProjects(e.id));
                return t;
            },
            [W],
        );
    i.useEffect(() => {
        let e = tg(W);
        null == e || es.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [W]);
    let en = i.useMemo(
            () =>
                et
                    .filter((e) => tb(e, W))
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [et, W],
        ),
        ea = i.useMemo(
            () => [
                {
                    label: Y.intl.string(H.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tu,
                            label: Y.intl.string(H.default.UXnPhI),
                            leading: eA.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, l.jsx)(td.Ay, { guild: e, size: td.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        el = i.useMemo(
            () =>
                t
                    .filter((e) => tb(e, W))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, W],
        ),
        ei = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tc.X0)(e, s)
                    ? j(e.id)
                    : (0, y.P0)((0, w.o)(Y.intl.string(H.default["wY7I+H"]), x.Ck.MESSAGE));
            },
            [s, j],
        ),
        eo = Y.intl.string(H.default.TU9IGR),
        er = [
            Y.intl.string(H.default["E+Q26x"]),
            Y.intl.string(H.default["06/jqP"]),
            Y.intl.string(H.default["3gSfUa"]),
        ],
        ed = [
            {
                id: "moderation-bot",
                name: Y.intl.string(H.default.idRAwG),
                description: Y.intl.string(H.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: Y.intl.string(H.default.BLDsiz),
                description: Y.intl.string(H.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Y.intl.string(H.default["+abXa8"]),
                description: Y.intl.string(H.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: Y.intl.string(H.default.ieAgex),
                description: Y.intl.string(H.default["5yvj+f"]),
            },
        ],
        ec = i.useCallback(
            (e) => {
                var t, a;
                null != e.wizard
                    ? ((t = {
                          template: e,
                          guildId: s,
                          eligibleGuilds: h,
                          onStart: (t) => O(e.name, t),
                          onSubmit: V,
                          onCancel: z,
                          onSkip: G,
                      }),
                      (0, eu.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([n.e("247719"), n.e("948979")]).then(
                                  n.bind(n, 248702),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, ...t });
                          },
                          { modalKey: "VibegrationsTemplateWizardModal" },
                      ))
                    : M(((a = e.name), Y.intl.formatToPlainString(H.default["9D9L0S"], { templateName: a })));
            },
            [h, s, z, M, G, O, V],
        ),
        ep = Y.intl.string(H.default.FYK2xQ),
        eh = Y.intl.string(H.default["/SUK82"]),
        ef = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || M());
            },
            [c, M],
        ),
        eg = tg(W) ?? s,
        eb = (0, u.bG)([es.Ay], () => es.Ay.getGuildProjectsFetchState(eg), [eg]),
        ey = (0, u.bG)([es.Ay], () => es.Ay.getGuildProjectsFetchState(s), [s]),
        [ew, ex] = i.useState(tx),
        ek = i.useMemo(() => ty.w.get(tk(s)) ?? !1, [s]),
        ev = "success" === ey,
        ej = (0, u.yK)([es.Ay], () => es.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => tb(e, s)),
        eC = ew ?? (!!ej || "error" === ey || (!ev && ek));
    i.useEffect(() => {
        ev && ty.w.set(tk(s), ej);
    }, [ev, ej, s]);
    let eI = i.useCallback((e) => {
            (ty.w.set(tw, e), ex(e));
        }, []),
        eP = i.useCallback(() => eI(!eC), [eI, eC]),
        e_ = i.useCallback(() => eI(!1), [eI]),
        eR = Y.intl.string(H.default.jDPFDh),
        eT = eC ? eR : Y.intl.string(H.default.a6d2y1);
    return (0, l.jsx)("div", {
        className: o()(tj.nj, tj.a0),
        children: (0, l.jsxs)("div", {
            className: tj.Yo,
            children: [
                (0, l.jsxs)("main", {
                    className: tj.ps,
                    children: [
                        (0, l.jsx)(eQ, {
                            title: Y.intl.string(H.default.Xmvb23),
                            actions: (0, l.jsx)(D.A.Icon, {
                                icon: A.Z,
                                tooltip: eT,
                                "aria-label": eT,
                                selected: eC,
                                onClick: eP,
                            }),
                        }),
                        (0, l.jsx)(N.Ip, {
                            className: tj.Yy,
                            children: (0, l.jsx)("div", {
                                className: tj.Mo,
                                children: (0, l.jsxs)("section", {
                                    className: o()(tj.Qs, tj.Ix),
                                    children: [
                                        (0, l.jsx)(e5, {}),
                                        (0, l.jsx)(C.D, {
                                            variant: "heading-xl/semibold",
                                            children: Y.intl.string(H.default["2tYpRK"]),
                                        }),
                                        (0, l.jsxs)("section", {
                                            className: tj.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tj.G9,
                                                    children: [
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ep,
                                                        }),
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("ol", {
                                                    className: tj.Aw,
                                                    children: ed.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tj.EA,
                                                                children: (0, l.jsxs)(f.D, {
                                                                    "aria-disabled": r,
                                                                    "aria-label": Y.intl.formatToPlainString(
                                                                        H.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tj.nx, tj.rz),
                                                                    onClick: r ? void 0 : () => ec(e),
                                                                    children: [
                                                                        (0, l.jsx)(b.E, {
                                                                            className: tj.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, l.jsx)(b.E, {
                                                                            className: tj.BK,
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
                                            className: tj.WI,
                                            "aria-label": eh,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tj.G9,
                                                    children: [
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eh,
                                                        }),
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("ol", {
                                                    className: tj.Aw,
                                                    children: er.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tj.EA,
                                                                children: (0, l.jsx)(f.D, {
                                                                    "aria-disabled": r,
                                                                    className: tj.nx,
                                                                    onClick: r ? void 0 : () => M(e),
                                                                    children: (0, l.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tj.un,
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
                                        (0, l.jsx)(em, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: tj.Yl,
                            children: (0, l.jsxs)("div", {
                                className: o()(tj.Qs, tj.DA),
                                children: [
                                    (0, l.jsx)(I.f, {
                                        label: eo,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: a,
                                        placeholder: eo,
                                        error: d,
                                        onChange: T,
                                        onKeyDown: ef,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: tj.VP,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: tj.gH,
                                                children: (0, l.jsx)(S.l, {
                                                    selectionMode: "single",
                                                    label: Y.intl.string(H.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: Y.intl.string(H.default.MLg0S8),
                                                    options: ea,
                                                    value: p,
                                                    onSelectionChange: m,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, l.jsx)(eE.A, {
                                                settings: g ?? K.Cl,
                                                choices: (0, Z.e)()
                                                    ? {
                                                          main: [...$.S8.main, ...$.wF.main],
                                                          subagent: [...$.S8.subagent, ...$.wF.subagent],
                                                          thinking: $.S8.thinking,
                                                      }
                                                    : $.S8,
                                                disabled: r,
                                                onChange: v,
                                            }),
                                            (0, l.jsx)(k.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: Y.intl.string(Y.t.CumH4u),
                                                disabled: c,
                                                loading: r,
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
                    className: tj.pA,
                    hidden: !eC,
                    "aria-label": Y.intl.string(H.default.Bo5fE3),
                    children: [
                        (0, l.jsxs)("div", {
                            className: tj.IR,
                            children: [
                                (0, l.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tj.RM,
                                    children: Y.intl.string(H.default.Bo5fE3),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tj.Ss,
                                    children: [
                                        (0, l.jsx)(eS, { importing: B, onImport: F }),
                                        (0, l.jsx)(D.A.Icon, { icon: E.P, tooltip: eR, "aria-label": eR, onClick: e_ }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)(N.Ip, {
                            className: tj.xe,
                            children: [
                                (0, l.jsx)("div", {
                                    className: tj.Vw,
                                    children: (0, l.jsx)(S.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(H.default.mvtKAm),
                                        hideLabel: !0,
                                        options: ee,
                                        value: W,
                                        onSelectionChange: Q,
                                    }),
                                }),
                                (0, l.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tj.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === eb || "loading" === eb) && 0 === el.length
                                    ? (0, l.jsx)("div", { className: tj.E8, children: (0, l.jsx)(P.y, {}) })
                                    : "error" === eb && 0 === el.length
                                      ? (0, l.jsxs)("div", {
                                            className: tj.E8,
                                            children: [
                                                (0, l.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tj.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, l.jsx)(k.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(eg),
                                                }),
                                            ],
                                        })
                                      : 0 === el.length
                                        ? (0, l.jsx)("div", {
                                              className: tj.D1,
                                              children: (0, l.jsxs)("div", {
                                                  className: tj.ST,
                                                  children: [
                                                      (0, l.jsx)(_.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tj.sI,
                                                          children: Y.intl.string(H.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, l.jsx)("div", {
                                              className: tj.Dq,
                                              children: el.map((e) =>
                                                  (0, l.jsx)(
                                                      tI,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => ei(e),
                                                          onRemix: () => (0, to.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                en.length > 0
                                    ? (0, l.jsxs)("div", {
                                          className: tj.qx,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tj.uc,
                                                  children: [
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Y.intl.string(H.default.jrCnUc),
                                                      }),
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Y.intl.string(H.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: tj.Dq,
                                                  children: en.map((e) =>
                                                      (0, l.jsx)(
                                                          tI,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => ei(e),
                                                              onRemix: () => (0, to.A)(e, s),
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
function tP(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([es.Ay], () => es.Ay.getOwnedProjects()),
        o = (0, u.yK)([G.Ay], () => G.Ay.getSelfMember(n)?.roles ?? [], [n]),
        r = (0, u.bG)(
            [L.A, F.A],
            () => {
                let e = L.A.getGuild(n);
                return null != e && F.A.can(e8.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [d, c] = i.useState(""),
        p = a ?? null,
        [m, h] = i.useState(!1),
        [f, g] = i.useState(null),
        b = (0, tr._)("VibegrationsScreen"),
        [k, v] = i.useState(null);
    i.useEffect(() => {
        v(null);
    }, [n]);
    let j = i.useMemo(() => (b.some((e) => e.id === n) ? n : tu), [b, n]),
        C = k ?? j,
        A = C === tu ? "user" : "guild",
        N = C === tu ? n : C,
        [I, S] = i.useState(null);
    (i.useEffect(() => {
        (0, U.hF)(n);
    }, [n, o, r]),
        i.useEffect(() => {
            (0, U.dm)(n, p);
        }, [n, p]));
    let E = i.useCallback(
            async (e, t, n) => {
                let a = await (0, U.gA)({ guild_id: t, install_scope: n });
                ((0, ei.Hc)(a),
                    (0, ei.r2)(a, I ?? K.Cl),
                    (0, ei.dv)(a, e),
                    (0, V.pX)(e8.BVt.CHANNEL(t, eq.VV.VIBEGRATIONS, a)),
                    c(""),
                    S(null));
            },
            [I],
        ),
        P = i.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    n = eo({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        await E(t, N, A);
                    } catch (e) {
                        g((0, X.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, d, m],
        ),
        _ = i.useCallback(
            async (e, t) => {
                let n = await (0, U.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, ei.Hc)(n), (0, ei.r2)(n, I ?? K.Cl), (0, ei.dv)(n, (0, Q.v8)(e)), n);
            },
            [I],
        ),
        R = i.useCallback(async (e, t, n) => {
            if (es.Ay.getProject(e)?.guild_id !== t) {
                let n = await (0, U.M7)(e, { guild_id: t, preview_guild_id: t });
                if (!n.ok) throw new X.uQ((0, X.hj)(n), n.status);
            }
            ((0, ei.dv)(e, n), (0, ee.R6)(e), (0, V.pX)(e8.BVt.CHANNEL(t, eq.VV.VIBEGRATIONS, e)), S(null));
        }, []),
        T = i.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        M = i.useCallback(
            (e) => {
                let t = es.Ay.getProject(e)?.guild_id ?? n;
                ((0, V.pX)(e8.BVt.CHANNEL(t, eq.VV.VIBEGRATIONS, e)), S(null));
            },
            [n],
        ),
        [O, D] = i.useState(!1),
        z = i.useCallback(
            async (e, t) => {
                let a = ev(e);
                if (null != a) return void (0, y.P0)((0, w.o)(a, x.Ck.FAILURE));
                D(!0);
                let l = null;
                try {
                    ((l = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, ei.Hc)(l),
                        (0, ei.r2)(l, I ?? K.Cl),
                        await ek(l, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, V.pX)(e8.BVt.CHANNEL(n, eq.VV.VIBEGRATIONS, l)),
                        S(null));
                } catch {
                    (null != l && (await (0, U.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    D(!1);
                }
            },
            [n, I],
        ),
        B = i.useCallback(
            (e) => {
                (0, V.pX)(e8.BVt.CHANNEL(n, eq.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        q = i.useCallback(() => {
            (0, V.pX)(e8.BVt.CHANNEL(n, eq.VV.VIBEGRATIONS));
        }, [n]),
        W = i.useCallback((e) => {
            (c(e), g(null));
        }, []),
        $ = (0, u.bG)(
            [es.Ay],
            () => {
                if (null == p) return null;
                let e = es.Ay.getProject(p);
                return null == e || (0, es.PV)(e) || e.guild_id === n ? e : null;
            },
            [p, n],
        ),
        Z = (0, u.bG)([es.Ay], () => es.Ay.hasFetchedGuildProjects(n), [n]);
    return null != p
        ? (0, l.jsx)(tS, { project: $, projectsLoaded: Z, onBack: q, guildId: n }, p)
        : (0, l.jsx)(tE, {
              projects: s,
              modelSettings: I,
              onModelSettingsChange: S,
              idea: d,
              guildId: n,
              submitting: m,
              createError: f,
              createDisabled: "idea" === (t = eo({ idea: d, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: B,
              onIdeaChange: W,
              onCreate: P,
              onStartTemplate: _,
              onSubmitTemplate: R,
              onCancelTemplate: T,
              onSkipTemplate: M,
              onImportNewProject: z,
              importing: O,
              conjureTarget: C,
              onConjureTargetChange: v,
              eligibleGuilds: b,
          });
}
