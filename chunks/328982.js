(n.r(t), n.d(t, { default: () => tq }), n(321073));
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
    y = n(834730),
    b = n(691540),
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
    G = n(742589),
    D = n(976860),
    V = n(885386),
    z = n(696451),
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
                    (0, l.jsx)(y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(y.E, {
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
                                (0, l.jsxs)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ep.VO,
                                    children: [
                                        (0, er.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ed.MZ)(e) ? ` \xb7 ${Y.intl.string(H.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, l.jsx)(y.E, {
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
var eh = n(92598);
function ef(e) {
    let { className: t, ariaLabel: n, disabled: a, onClick: i, children: s } = e;
    return (0, l.jsx)(f.D, { "aria-disabled": a, "aria-label": n, className: t, onClick: a ? void 0 : i, children: s });
}
var eg = n(865665),
    ey = n(568190);
let eb = { x: 5, y: 7 },
    ew = { x: 5, y: 4 };
function ex(e) {
    let { listClassName: t, radius: n, children: a } = e,
        [s, o] = i.useState(!1);
    return (0, l.jsxs)("div", {
        className: ey.n,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, l.jsx)("ol", { className: t, children: a }),
            s ? (0, l.jsx)(eg.C, { area: 64, radius: n, color: R.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ek = n(210744),
    ev = n(864970),
    ej = n(707554),
    eC = n(770178),
    eA = n(765548),
    eN = n(597643),
    eI = n(885576),
    eS = n(236730);
let eE = "heading-xxl/semibold",
    eP = !1;
function e_() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        a = (0, eA.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        s = (0, eC.w)(a, [], { fireOnMount: !0 }),
        o = (0, u.bG)([eN.A], () => eN.A.isConnected());
    i.useEffect(() => {
        if (!o || !t || eP) return;
        let n = !1,
            a = 0;
        function l() {
            n ||
                (a = window.setTimeout(() => {
                    ((eP = !0), e.current?.play());
                }, 400));
        }
        let i = document.fonts;
        return (
            null == i ? l() : i.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(l, l),
            () => {
                ((n = !0), window.clearTimeout(a));
            }
        );
    }, [o, t]);
    let r = (0, u.bG)([eI.A], () => eI.A.isIdle()),
        d = i.useRef(r);
    i.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eP && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let c = Y.intl.string(H.default["2tYpRK"]);
    return (0, l.jsx)("div", {
        ref: s,
        className: eS.x,
        children: t
            ? (0, l.jsx)(ej.H, { children: (0, l.jsx)(ev.o, { ref: e, text: c, variant: eE, delay: null }) })
            : (0, l.jsx)(C.D, { variant: eE, children: c }),
    });
}
var eR = n(922016),
    eT = n(980707),
    eM = n(477782),
    eO = n(81369),
    eG = n(402879);
async function eD(e, t, n) {
    (0, ei.Hc)(e);
    let a = await (0, ei.vX)(e, t);
    (0, ei.dv)(e, n, [a]);
}
function eV(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, $.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, $.ZJ)((0, $.yr)(t)) });
}
async function ez(e, t) {
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
    await (0, eG.F)(l, a);
}
function eL(e) {
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
var eF = n(950305),
    eB = n(664121);
let eH = [
    { value: "user", icon: eF.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eB.R, nameMessage: H.default.LdgKdI },
];
function eY(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = eL(i.useCallback((e) => n(e, "user"), [n])),
        o = eL(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eR.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: eR.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(eT.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eM.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: eH
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        eM.Dr,
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
                        icon: eO.H,
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
var eU = n(113491),
    eq = n(629584),
    eX = n(753514),
    eK = n(491920);
function eW(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eX.kZ)(e), "aria-controls": (0, eX.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(eq.I, {
              role: "tablist",
              look: "pill",
              className: o()(eK.b, s),
              optionClassName: eK.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var e$ = n(663417),
    eZ = n(70688),
    eQ = n(173936),
    eJ = n(473935),
    e0 = n(365199),
    e2 = n(7437),
    e6 = n(147036),
    e1 = n(957565),
    e9 = n(123917),
    e8 = n(557875);
let e7 = new Set();
var e3 = n(869369),
    e5 = n(746080),
    e4 = n(793712);
let te = [];
function tt(e) {
    (0, b.P0)((0, w.o)(e, x.Ck.FAILURE));
}
function tn(e) {
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
            onRefresh: y,
            isRefreshing: k = !1,
            onClose: v,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        N = i.useRef(null),
        { pending: I, refresh: S } = (0, e2.A)(C ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [n, a] = i.useState(e7),
                l = i.useRef(e7),
                s = i.useCallback((e) => {
                    ((l.current = (0, e8.Q6)(l.current, e)), a(l.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, e8.K9)(l.current, n.type);
                        async function o() {
                            let a = await (0, ei.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, e9.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e8.rq)(a.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), a(i), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, tt),
        _ = (0, u.bG)([ei.Ay], () => (null == A ? te : ei.Ay.getDeclaredConnections(A))),
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
            offers: i.useMemo(() => (0, e8.Xl)(_), [_]),
            connectPending: E,
        }),
        T = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        M = null != m && r,
        O = o && null != p,
        D = M || null != d || O || null != h || null != f || null != g,
        V = e1.p5 && null != a,
        z = e1.p5;
    return null != y || null != v || D || z || o
        ? (0, l.jsx)(eR.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: eR.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(eT.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != y || null != v
                              ? (0, l.jsxs)(eM.rX, {
                                    children: [
                                        null != y
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "refresh",
                                                  icon: e$.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e$.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: k,
                                                  action: y,
                                              })
                                            : null,
                                        null != v
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "close",
                                                  icon: eZ.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eZ.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: v,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          R.length > 0
                              ? (0, l.jsx)(eM.rX, {
                                    children: R.map((e) =>
                                        (0, l.jsx)(
                                            eM.Dr,
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
                          D
                              ? (0, l.jsxs)(eM.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z
                              ? (0, l.jsxs)(eM.rX, {
                                    children: [
                                        V
                                            ? (0, l.jsx)(eM.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eQ.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eQ.LinkIcon },
                                                  action: () =>
                                                      (0, e1.C)((0, e6.n)(a, e5.VV.VIBEGRATIONS, t), () =>
                                                          (0, b.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eM.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eJ.L,
                                            leadingAccessory: { type: "icon", icon: eJ.L },
                                            action: () =>
                                                (0, e1.C)(t, () =>
                                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eM.rX, {
                                    children: [
                                        (0, l.jsx)(eM.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: j.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                            action: () => (0, e3.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(eM.Dr, {
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
                      className: e4.h,
                      children: (0, l.jsx)(G.A.Icon, {
                          icon: e0.MoreHorizontalIcon,
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
var ta = n(769979);
function tl(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(G.A, {
        hideSearch: !0,
        toolbar: n,
        className: ta.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: ta.QF,
            children: [
                (0, l.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: ta.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(G.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(G.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(G.A.Title, { className: ta.Qw, wrapperClassName: ta.DD, children: t }),
            ],
        }),
    });
}
var ti = n(73432),
    ts = n(683071),
    to = n(47167),
    tr = n(808728),
    td = n(994500),
    tu = n(287809),
    tc = n(652215);
let tp = "conjuring-help";
var tm = n(107148);
function th() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([tu.default, L.A, tr.Ay, td.A], () => {
                let e = tu.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(tc.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = tr.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, to.m1)(t, tu.default, td.A) === tp;
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
                    ? (0, D.pX)(tc.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, e9.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: tm.l,
              children: (0, l.jsx)(ts.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(H.default["4BsHmp"], { channel: tp, onNavigate: t }),
              }),
          });
}
var tf = n(321593),
    tg = n(580954),
    ty = n(227189),
    tb = n(189213),
    tw = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function tx(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = t === tw.PERMISSIONS;
    return (0, l.jsx)(tb.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(i ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(i ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(i ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function tk(e) {
    (0, eu.openModal)((t) => (0, l.jsx)(tx, { ...t, reason: e }));
}
var tv = n(480007),
    tj = n(584936),
    tC = n(536820),
    tA = n(548118);
let tN = "user";
var tI = n(683180);
let tS = "user",
    tE = "no-server",
    tP = new Map();
function t_(e) {
    return tP.get(e) ?? null;
}
function tR(e) {
    switch (e) {
        case "all":
        case tS:
        case tE:
            return null;
        default:
            return e;
    }
}
function tT(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tS:
            return "user" === e.install_scope;
        case tE:
            return null == (0, q.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tM = n(506774);
let tO = "VibegrationsProjectsPanelOpen";
function tG() {
    return tM.w.get(tO) ?? null;
}
function tD(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tV = n(165610),
    tz = n(352978);
function tL(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tF(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tB(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tH(e) {
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
                    (0, b.P0)((0, w.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    ez(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, b.P0)(
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
                onImport: (o = eL(
                    i.useCallback(
                        (e) => {
                            let a = eV(e);
                            null != a
                                ? (0, b.P0)((0, w.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(tc.BVt.CHANNEL(p, e5.VV.VIBEGRATIONS, t));
                                          try {
                                              await eD(t, e, Y.intl.string(H.default.C7GU2r));
                                          } catch {
                                              (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
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
        className: tz.OY,
        children: [
            (0, l.jsx)(tf.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tz.W6,
                onClick: m,
                children: [
                    null == C
                        ? (0, l.jsx)("div", {
                              className: tz.a8,
                              "aria-hidden": !0,
                              children: (0, l.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, l.jsx)("img", { alt: "", src: C, className: tz.VJ }),
                    (0, l.jsxs)("div", {
                        className: tz.MM,
                        children: [
                            (0, l.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tz.j1,
                                children: r.name,
                            }),
                            (0, l.jsxs)("div", {
                                className: tz.h3,
                                children: [
                                    (0, l.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tz.Wb,
                                        children: I,
                                    }),
                                    null == A
                                        ? null
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("span", {
                                                      className: tz.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, l.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tz.zM,
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
                className: tz.M2,
                children: (0, l.jsxs)("div", {
                    className: tz.Pl,
                    children: [
                        (0, l.jsx)(tn, {
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
function tY(e) {
    var t, a;
    let { project: s, projectsLoaded: o, onBack: r, guildId: d } = e,
        [p, m] = i.useState(!1),
        [h, f] = i.useState(!0),
        [g, A] = i.useState(!1),
        [N, I] = i.useState(!1),
        [S, E] = i.useState(!1),
        P = V.Q_.useSetting(),
        [_, R] = i.useState(null),
        [z, L] = i.useState(null),
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
        ee = null != F && z !== F,
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
        ef = (0, ea.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: eo,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        eg = p || ee || Q,
        ey = Y.intl.string(H.default["5gU57O"]),
        eb = h && !S && !g && !N,
        ew = Y.intl.string(eb ? H.default.YdgE0j : H.default.aWVf4j),
        ex = i.useCallback(() => {
            if (S || g || N) {
                (E(!1), A(!1), I(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [S, g, N]),
        ev = i.useCallback(() => f(!1), []),
        { active: ej } = (0, et.Q_)(F),
        eC = i.useRef(null),
        eA = (0, en.o4)(F),
        eN = Y.intl.string(eA ? H.default.bfQ4Ki : ej ? H.default.rfNEHn : H.default.lXcEa2),
        eI = i.useCallback(() => {
            if (null != F) {
                if (ej) return void (0, et.PS)(F);
                (E(!1), A(!1), I(!1), f(!0), (0, et.nI)(F));
            }
        }, [F, ej]),
        eS = i.useCallback(() => {
            E((e) => !e && (f(!0), A(!1), I(!1), !0));
        }, []),
        eE = i.useCallback(() => E(!1), []),
        eP = i.useCallback(
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
                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (X.current = !1);
                        }));
            },
            [s],
        ),
        e_ = (0, u.bG)([el.A], () => el.A.isBuilderPreviewMobile()),
        eR = Y.intl.string(e_ ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eT = i.useCallback(() => (0, U.GG)(!e_), [e_]),
        eM = (0, O.A)(s?.preview_application_id ?? null, tV.sd),
        eO = (0, tV.x1)(eM) && eM.data.proxyTicketRefreshing,
        eG = i.useCallback(() => {
            null == eM || eO || M.A.refreshProxyTicket(eM.id);
        }, [eM, eO]),
        ez = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eM?.id), (0, ei.Bn)(e), (0, tg.A)().leaveFrame(t)), r());
        }, [s, eM?.id, r]),
        eF = i.useCallback(() => {
            null != s && (f(!0), (0, ei.dv)(s.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [s]),
        eB = eL(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = eV(e);
                    null != n
                        ? (0, b.P0)((0, w.o)(n, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: s.name }),
                              subtitle: Y.intl.string(H.default["6syXoH"]),
                              confirmText: Y.intl.string(H.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await eD(t, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eH = i.useCallback(() => {
            null != s && (0, tj.A)(s, d);
        }, [s, d]),
        eY = i.useCallback(async () => {
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
            eY(),
            () => {
                (K.current?.abort(), (K.current = null));
            }
        ),
        [eY],
    );
    let eU =
            ((t = s ?? null), (a = $ ?? null), a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eq = i.useCallback(async () => {
            null != s && (await W(s, eU));
        }, [eU, s]),
        eX = i.useCallback(async () => {
            try {
                await eq();
            } catch {}
            await eY();
        }, [eY, eq]),
        eK = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || Q || ee
                ? null
                : {
                      ...(0, ty.p)({ applicationId: e, application: Z ?? null, guildId: eU }),
                      onClose: () => {
                          eX();
                      },
                  };
        }, [ee, eX, eU, Q, Z, s?.preview_application_id]),
        e$ = ef ? { type: "permissions", authorizeProps: eK } : ee && null == $ ? { type: "checking" } : void 0;
    i.useEffect(() => {
        null == s && o && (0, D.pX)(tc.BVt.CHANNEL(d, e5.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let eZ = i.useCallback((e) => {
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
                        (0, b.P0)(
                            (0, w.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        eQ = i.useCallback(() => {
            if (null == s) return;
            if (!eo) return void tk(tw.NO_PREVIEW);
            if (ef) return void tk(tw.PERMISSIONS);
            if ("user" === s.install_scope)
                return void eZ(s.id)
                    .then(() => {
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, ei.$C)(s.id);
            (e.catch(() => {}),
                (0, tv.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: eZ(s.id),
                    initialDraft: e,
                }));
        }, [d, ef, eo, s, eZ]),
        eJ =
            null != s && (0, es.jf)(s)
                ? (0, l.jsx)(k.$, { size: "sm", variant: "primary", loading: p, disabled: eg, onClick: eQ, text: ey })
                : null,
        e0 = (0, l.jsx)(tl, {
            title: s?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tz.FO,
                          children: [
                              ed.showModeSwitch ? (0, l.jsx)(eW, { modes: ed.modes, mode: ec, onChange: ep }) : null,
                              (0, l.jsx)(G.A.Icon, {
                                  icon: e_ ? tB : tF,
                                  tooltip: eR,
                                  "aria-label": eR,
                                  selected: e_,
                                  onClick: eT,
                              }),
                              (0, l.jsx)(G.A.Icon, {
                                  ref: eC,
                                  icon: ti.A,
                                  tooltip: eN,
                                  "aria-label": eN,
                                  selected: ej,
                                  disabled: eA,
                                  onClick: eI,
                              }),
                              "frame" === ec ? (0, l.jsx)(ek.A, { frame: eM, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: tz.YJ }),
                              P
                                  ? (0, l.jsx)(G.A.Icon, {
                                        icon: v.BugIcon,
                                        tooltip: Y.intl.string(H.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                        selected: S,
                                        onClick: eS,
                                    })
                                  : null,
                              (0, es.PV)(s)
                                  ? (0, l.jsx)(G.A.Icon, {
                                        icon: j.SettingsIcon,
                                        tooltip: Y.intl.string(H.default["xhcY+n"]),
                                        "aria-label": Y.intl.string(H.default["xhcY+n"]),
                                        onClick: () => (0, e3.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(tn, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, es.PV)(s),
                                  canRemix: (0, es.H_)(s),
                                  onRefresh: (0, tV.x1)(eM) ? eG : void 0,
                                  isRefreshing: eO,
                                  onClose: ez,
                                  onExport: eF,
                                  onImport: eB.open,
                                  onRemix: eH,
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
                              eb
                                  ? null
                                  : (0, l.jsx)(G.A.Icon, { icon: tL, tooltip: ew, "aria-label": ew, onClick: ex }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tz.nj,
        children: [
            eB.input,
            (0, l.jsx)("main", {
                className: tz.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: tz.j5,
                              children: [
                                  e0,
                                  (0, l.jsxs)("div", {
                                      className: tz.sD,
                                      children: [
                                          (0, l.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(H.default.F2dRba),
                                          }),
                                          (0, l.jsx)(y.E, {
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
                                  designFeedbackToggleRef: eC,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: tV.sd,
                                  header: e0,
                                  chatOpen: h,
                                  onCloseChat: ev,
                                  chatHeaderAction: eJ,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: N,
                                  onCloseRestorePoints: () => I(!1),
                                  installScope: s.install_scope,
                                  debugOpen: P && S,
                                  onCloseDebug: eE,
                                  onRestoreVersion: eP,
                                  restoreState: _,
                                  previewReady: eo,
                                  previewGate: e$,
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
function tU(e) {
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
            modelSettings: f,
            onModelSettingsChange: g,
            onSelectProject: v,
            onIdeaChange: j,
            onCreate: C,
            onStartTemplate: T,
            onSubmitTemplate: M,
            onCancelTemplate: O,
            onSkipTemplate: D,
            onImportNewProject: V,
            importing: z,
        } = e,
        [F, B] = i.useState(() => ({ guildId: s, filter: t_(s) })),
        q = (F.guildId === s ? F.filter : t_(s)) ?? s,
        X = i.useCallback(
            (e) => {
                (tP.set(s, e), B({ guildId: s, filter: e }));
            },
            [s],
        ),
        W = (0, u.yK)(
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
        Q = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Y.intl.string(H.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tS,
                    leading: eF.UserIcon,
                    label: Y.intl.string(H.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tE,
                    leading: eB.R,
                    label: Y.intl.string(H.default["qqH+iN"]),
                },
                ...W.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, l.jsx)(tA.Ay, { guild: e, size: tA.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
        ),
        J = (0, u.yK)(
            [es.Ay, L.A],
            () => {
                let e = tR(q);
                if (null != e) return es.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(L.A.getGuilds()))
                    es.Ay.hasFetchedGuildProjects(e.id) && t.push(...es.Ay.getSharedProjects(e.id));
                return t;
            },
            [q],
        );
    i.useEffect(() => {
        let e = tR(q);
        null == e || es.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [q]);
    let ee = i.useMemo(
            () =>
                J.filter((e) => tT(e, q)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [J, q],
        ),
        et = i.useMemo(
            () => [
                {
                    label: Y.intl.string(H.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tN,
                            label: Y.intl.string(H.default.UXnPhI),
                            leading: eF.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, l.jsx)(tA.Ay, { guild: e, size: tA.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        en = i.useMemo(
            () =>
                t
                    .filter((e) => tT(e, q))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, q],
        ),
        ea = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tI.X0)(e, s)
                    ? v(e.id)
                    : (0, b.P0)((0, w.o)(Y.intl.string(H.default["wY7I+H"]), x.Ck.MESSAGE));
            },
            [s, v],
        ),
        el = Y.intl.string(H.default.TU9IGR),
        ei = [
            Y.intl.string(H.default["E+Q26x"]),
            Y.intl.string(H.default["06/jqP"]),
            Y.intl.string(H.default["3gSfUa"]),
        ],
        eo = [
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
        er = i.useCallback(
            (e) => {
                var t, a;
                null != e.wizard
                    ? ((t = {
                          template: e,
                          guildId: s,
                          eligibleGuilds: h,
                          onStart: (t) => T(e.name, t),
                          onSubmit: M,
                          onCancel: O,
                          onSkip: D,
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
                    : C(((a = e.name), Y.intl.formatToPlainString(H.default["9D9L0S"], { templateName: a })));
            },
            [h, s, O, C, D, T, M],
        ),
        ed = Y.intl.string(H.default.FYK2xQ),
        ec = Y.intl.string(H.default["/SUK82"]),
        ep = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || C());
            },
            [c, C],
        ),
        eh = tR(q) ?? s,
        eg = (0, u.bG)([es.Ay], () => es.Ay.getGuildProjectsFetchState(eh), [eh]),
        ey = (0, u.bG)([es.Ay], () => es.Ay.getGuildProjectsFetchState(s), [s]),
        [ek, ev] = i.useState(tG),
        ej = i.useMemo(() => tM.w.get(tD(s)) ?? !1, [s]),
        eC = "success" === ey,
        eA = (0, u.yK)([es.Ay], () => es.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => tT(e, s)),
        eN = ek ?? (!!eA || "error" === ey || (!eC && ej));
    i.useEffect(() => {
        eC && tM.w.set(tD(s), eA);
    }, [eC, eA, s]);
    let eI = i.useCallback((e) => {
            (tM.w.set(tO, e), ev(e));
        }, []),
        eS = i.useCallback(() => eI(!eN), [eI, eN]),
        eE = i.useCallback(() => eI(!1), [eI]),
        eP = Y.intl.string(H.default.jDPFDh),
        eR = eN ? eP : Y.intl.string(H.default.a6d2y1);
    return (0, l.jsx)("div", {
        className: o()(tz.nj, tz.a0),
        children: (0, l.jsxs)("div", {
            className: tz.Yo,
            children: [
                (0, l.jsxs)("main", {
                    className: tz.ps,
                    children: [
                        (0, l.jsx)(tl, {
                            title: Y.intl.string(H.default.Xmvb23),
                            actions: (0, l.jsx)(G.A.Icon, {
                                icon: A.Z,
                                tooltip: eR,
                                "aria-label": eR,
                                selected: eN,
                                onClick: eS,
                            }),
                        }),
                        (0, l.jsx)(N.Ip, {
                            className: tz.Yy,
                            children: (0, l.jsx)("div", {
                                className: tz.Mo,
                                children: (0, l.jsxs)("section", {
                                    className: o()(tz.Qs, tz.Ix),
                                    children: [
                                        (0, l.jsx)(th, {}),
                                        (0, l.jsx)(e_, {}),
                                        (0, l.jsxs)("section", {
                                            className: tz.WI,
                                            "aria-label": ed,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tz.G9,
                                                    children: [
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ed,
                                                        }),
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(ex, {
                                                    listClassName: tz.Aw,
                                                    radius: eb,
                                                    children: eo.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tz.EA,
                                                                children: (0, l.jsxs)(ef, {
                                                                    disabled: r,
                                                                    ariaLabel: Y.intl.formatToPlainString(
                                                                        H.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tz.nx, tz.rz),
                                                                    onClick: () => er(e),
                                                                    children: [
                                                                        (0, l.jsx)(y.E, {
                                                                            className: tz.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, l.jsx)(y.E, {
                                                                            className: tz.BK,
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
                                            className: tz.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tz.G9,
                                                    children: [
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(ex, {
                                                    listClassName: tz.Aw,
                                                    radius: ew,
                                                    children: ei.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tz.EA,
                                                                children: (0, l.jsx)(ef, {
                                                                    disabled: r,
                                                                    className: tz.nx,
                                                                    onClick: () => C(e),
                                                                    children: (0, l.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tz.un,
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
                            className: tz.Yl,
                            children: (0, l.jsxs)("div", {
                                className: o()(tz.Qs, tz.DA),
                                children: [
                                    (0, l.jsx)(I.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: a,
                                        placeholder: el,
                                        error: d,
                                        onChange: j,
                                        onKeyDown: ep,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: tz.VP,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: tz.gH,
                                                children: (0, l.jsx)(S.l, {
                                                    selectionMode: "single",
                                                    label: Y.intl.string(H.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: Y.intl.string(H.default.MLg0S8),
                                                    options: et,
                                                    value: p,
                                                    onSelectionChange: m,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, l.jsx)(eU.A, {
                                                settings: f ?? K.Cl,
                                                choices: (0, Z.e)()
                                                    ? {
                                                          main: [...$.S8.main, ...$.wF.main],
                                                          subagent: [...$.S8.subagent, ...$.wF.subagent],
                                                          thinking: $.S8.thinking,
                                                      }
                                                    : $.S8,
                                                disabled: r,
                                                onChange: g,
                                            }),
                                            (0, l.jsx)(k.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: Y.intl.string(Y.t.CumH4u),
                                                disabled: c,
                                                loading: r,
                                                onClick: () => C(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("aside", {
                    className: tz.pA,
                    hidden: !eN,
                    "aria-label": Y.intl.string(H.default.Bo5fE3),
                    children: [
                        (0, l.jsxs)("div", {
                            className: tz.IR,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tz.RM,
                                    children: Y.intl.string(H.default.Bo5fE3),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tz.Ss,
                                    children: [
                                        (0, l.jsx)(eY, { importing: z, onImport: V }),
                                        (0, l.jsx)(G.A.Icon, { icon: E.P, tooltip: eP, "aria-label": eP, onClick: eE }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)(N.Ip, {
                            className: tz.xe,
                            children: [
                                (0, l.jsx)("div", {
                                    className: tz.Vw,
                                    children: (0, l.jsx)(S.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(H.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Q,
                                        value: q,
                                        onSelectionChange: X,
                                    }),
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tz.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === eg || "loading" === eg) && 0 === en.length
                                    ? (0, l.jsx)("div", { className: tz.E8, children: (0, l.jsx)(P.y, {}) })
                                    : "error" === eg && 0 === en.length
                                      ? (0, l.jsxs)("div", {
                                            className: tz.E8,
                                            children: [
                                                (0, l.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tz.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, l.jsx)(k.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(eh),
                                                }),
                                            ],
                                        })
                                      : 0 === en.length
                                        ? (0, l.jsx)("div", {
                                              className: tz.D1,
                                              children: (0, l.jsxs)("div", {
                                                  className: tz.ST,
                                                  children: [
                                                      (0, l.jsx)(_.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, l.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tz.sI,
                                                          children: Y.intl.string(H.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, l.jsx)("div", {
                                              className: tz.Dq,
                                              children: en.map((e) =>
                                                  (0, l.jsx)(
                                                      tH,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => ea(e),
                                                          onRemix: () => (0, tj.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                ee.length > 0
                                    ? (0, l.jsxs)("div", {
                                          className: tz.qx,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tz.uc,
                                                  children: [
                                                      (0, l.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Y.intl.string(H.default.jrCnUc),
                                                      }),
                                                      (0, l.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Y.intl.string(H.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: tz.Dq,
                                                  children: ee.map((e) =>
                                                      (0, l.jsx)(
                                                          tH,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => ea(e),
                                                              onRemix: () => (0, tj.A)(e, s),
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
function tq(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([es.Ay], () => es.Ay.getOwnedProjects()),
        o = (0, u.yK)([z.Ay], () => z.Ay.getSelfMember(n)?.roles ?? [], [n]),
        r = (0, u.bG)(
            [L.A, F.A],
            () => {
                let e = L.A.getGuild(n);
                return null != e && F.A.can(tc.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [d, c] = i.useState(""),
        p = a ?? null,
        [m, h] = i.useState(!1),
        [f, g] = i.useState(null),
        y = (0, tC._)("VibegrationsScreen"),
        [k, v] = i.useState(null);
    i.useEffect(() => {
        v(null);
    }, [n]);
    let j = i.useMemo(() => (y.some((e) => e.id === n) ? n : tN), [y, n]),
        C = k ?? j,
        A = C === tN ? "user" : "guild",
        N = C === tN ? n : C,
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
                    (0, D.pX)(tc.BVt.CHANNEL(t, e5.VV.VIBEGRATIONS, a)),
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
            ((0, ei.dv)(e, n), (0, ee.R6)(e), (0, D.pX)(tc.BVt.CHANNEL(t, e5.VV.VIBEGRATIONS, e)), S(null));
        }, []),
        T = i.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        M = i.useCallback(
            (e) => {
                let t = es.Ay.getProject(e)?.guild_id ?? n;
                ((0, D.pX)(tc.BVt.CHANNEL(t, e5.VV.VIBEGRATIONS, e)), S(null));
            },
            [n],
        ),
        [O, G] = i.useState(!1),
        V = i.useCallback(
            async (e, t) => {
                let a = eV(e);
                if (null != a) return void (0, b.P0)((0, w.o)(a, x.Ck.FAILURE));
                G(!0);
                let l = null;
                try {
                    ((l = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, ei.Hc)(l),
                        (0, ei.r2)(l, I ?? K.Cl),
                        await eD(l, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, D.pX)(tc.BVt.CHANNEL(n, e5.VV.VIBEGRATIONS, l)),
                        S(null));
                } catch {
                    (null != l && (await (0, U.xx)(l).catch(() => void 0)),
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    G(!1);
                }
            },
            [n, I],
        ),
        B = i.useCallback(
            (e) => {
                (0, D.pX)(tc.BVt.CHANNEL(n, e5.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        q = i.useCallback(() => {
            (0, D.pX)(tc.BVt.CHANNEL(n, e5.VV.VIBEGRATIONS));
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
        ? (0, l.jsx)(tY, { project: $, projectsLoaded: Z, onBack: q, guildId: n }, p)
        : (0, l.jsx)(tU, {
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
              onImportNewProject: V,
              importing: O,
              conjureTarget: C,
              onConjureTargetChange: v,
              eligibleGuilds: y,
          });
}
