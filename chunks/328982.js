(a.r(t), a.d(t, { default: () => tq }), a(321073));
var n,
    l = a(477900),
    i = a(582128),
    s = a(503698),
    o = a.n(s),
    r = a(536637),
    d = a.n(r),
    u = a(17928),
    c = a(314116),
    p = a(534890),
    m = a(646270),
    h = a(31300),
    f = a(939249),
    g = a(323384),
    y = a(834730),
    b = a(691540),
    w = a(857250),
    k = a(97483),
    x = a(821609),
    v = a(92446),
    j = a(625903),
    C = a(297264),
    A = a(97893),
    N = a(364522),
    I = a(103557),
    S = a(691885),
    E = a(789645),
    P = a(289873),
    _ = a(152367),
    T = a(661531),
    R = a(627363),
    M = a(625180),
    O = a(672929),
    G = a(742589),
    D = a(976860),
    z = a(885386),
    V = a(696451),
    L = a(71393),
    B = a(576705),
    F = a(486020),
    H = a(50617),
    Y = a(375708),
    q = a(673724),
    U = a(948230),
    X = a(637708),
    W = a(936494);
async function K(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, U.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var $ = a(208137),
    Z = a(993396),
    Q = a(822835),
    J = a(66708),
    ee = a(74029),
    et = a(559676),
    ea = a(58551),
    en = a(805332),
    el = a(277977),
    ei = a(972786);
function es(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var eo = a(58703),
    er = a(127181),
    ed = a(192308);
function eu() {
    (0, ed.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ec = a(413927);
function ep() {
    let e = (0, er.TH)("desktop");
    if (0 === e.length) return null;
    let t = Y.intl.string(H.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: ec.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: ec.bZ,
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
                className: ec.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: ec.S3,
                            children: [
                                (0, l.jsxs)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ec.VO,
                                    children: [
                                        (0, eo.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, er.MZ)(e) ? ` \xb7 ${Y.intl.string(H.default.vvxuUI)}` : null,
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
            (0, er.B)("desktop")
                ? (0, l.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(H.default.YWxThz),
                      onClick: eu,
                  })
                : null,
        ],
    });
}
var em = a(884599);
function eh(e) {
    let { className: t, ariaLabel: a, disabled: n, onClick: i, children: s } = e;
    return (0, l.jsx)(f.D, { "aria-disabled": n, "aria-label": a, className: t, onClick: n ? void 0 : i, children: s });
}
var ef = a(865665),
    eg = a(568190);
let ey = { x: 5, y: 7 },
    eb = { x: 5, y: 4 };
function ew(e) {
    let { listClassName: t, radius: a, children: n } = e,
        [s, o] = i.useState(!1);
    return (0, l.jsxs)("div", {
        className: eg.n,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, l.jsx)("ol", { className: t, children: n }),
            s ? (0, l.jsx)(ef.C, { area: 64, radius: a, color: T.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ek = a(210744),
    ex = a(864970),
    ev = a(707554),
    ej = a(770178),
    eC = a(765548),
    eA = a(597643),
    eN = a(885576),
    eI = a(236730);
let eS = "heading-xxl/semibold",
    eE = !1;
function eP() {
    let e = i.useRef(null),
        [t, a] = i.useState(!0),
        n = (0, eC.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        s = (0, ej.w)(n, [], { fireOnMount: !0 }),
        o = (0, u.bG)([eA.A], () => eA.A.isConnected());
    i.useEffect(() => {
        if (!o || !t || eE) return;
        let a = !1,
            n = 0;
        function l() {
            a ||
                (n = window.setTimeout(() => {
                    ((eE = !0), e.current?.play());
                }, 400));
        }
        let i = document.fonts;
        return (
            null == i ? l() : i.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(l, l),
            () => {
                ((a = !0), window.clearTimeout(n));
            }
        );
    }, [o, t]);
    let r = (0, u.bG)([eN.A], () => eN.A.isIdle()),
        d = i.useRef(r);
    i.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eE && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let c = Y.intl.string(H.default["2tYpRK"]);
    return (0, l.jsx)("div", {
        ref: s,
        className: eI.x,
        children: t
            ? (0, l.jsx)(ev.H, { children: (0, l.jsx)(ex.o, { ref: e, text: c, variant: eS, delay: null }) })
            : (0, l.jsx)(C.D, { variant: eS, children: c }),
    });
}
var e_ = a(922016),
    eT = a(980707),
    eR = a(477782),
    eM = a(81369),
    eO = a(402879);
async function eG(e, t, a) {
    (0, el.Hc)(e);
    let n = await (0, el.vX)(e, t);
    (0, el.dv)(e, a, [n]);
}
function eD(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, q.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, q.ZJ)((0, q.yr)(t)) });
}
async function ez(e, t) {
    let a,
        n =
            ((a = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === a ? "vibegration" : a}.zip`),
        l = await (0, el.cS)(e, n);
    await (0, eO.F)(l, n);
}
function eV(e) {
    let t = i.useRef(null),
        a = i.useCallback(
            (t) => {
                let a = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != a && e(a));
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
            onChange: a,
        }),
    };
}
var eL = a(950305),
    eB = a(664121);
let eF = [
    { value: "user", icon: eL.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eB.R, nameMessage: H.default.LdgKdI },
];
function eH(e) {
    let { importing: t, onImport: a } = e,
        n = i.useRef(null),
        s = eV(i.useCallback((e) => a(e, "user"), [a])),
        o = eV(i.useCallback((e) => a(e, "guild"), [a])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: e_.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(eT.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eR.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: eF
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        eR.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: i } = a;
                    return (0, l.jsx)(x.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: eM.H,
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
var eY = a(379307),
    eq = a(629584),
    eU = a(753514),
    eX = a(491920);
function eW(e) {
    let { modes: t, mode: a, onChange: n, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eU.kZ)(e), "aria-controls": (0, eU.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == a
        ? null
        : (0, l.jsx)(eq.I, {
              role: "tablist",
              look: "pill",
              className: o()(eX.b, s),
              optionClassName: eX.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var eK = a(663417),
    e$ = a(70688),
    eZ = a(173936),
    eQ = a(473935),
    eJ = a(365199),
    e0 = a(7437),
    e2 = a(147036),
    e6 = a(957565),
    e9 = a(123917),
    e1 = a(557875);
let e8 = new Set();
var e7 = a(976814),
    e3 = a(746080),
    e5 = a(793712);
let e4 = [];
function te(e) {
    (0, b.P0)((0, w.o)(e, k.Ck.FAILURE));
}
function tt(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: n,
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
            isRefreshing: x = !1,
            onClose: v,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        N = i.useRef(null),
        { pending: I, refresh: S } = (0, e0.A)(C ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [a, n] = i.useState(e8),
                l = i.useRef(e8),
                s = i.useCallback((e) => {
                    ((l.current = (0, e1.Q6)(l.current, e)), n(l.current));
                }, []);
            return {
                pending: a,
                connect: i.useCallback(
                    (a) => {
                        if (null == e) return;
                        let i = (0, e1.K9)(l.current, a.type);
                        async function o() {
                            let n = await (0, el.JI)(e, a.type);
                            (s(a.type), "url" === n.type)
                                ? (0, e9.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e1.rq)(n.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), n(i), o().catch(() => s(a.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, te),
        _ = (0, u.bG)([el.Ay], () => (null == A ? e4 : el.Ay.getDeclaredConnections(A))),
        T = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: Y.intl.string(H.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
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
            offers: i.useMemo(() => (0, e1.Xl)(_), [_]),
            connectPending: E,
        }),
        R = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        M = null != m && r,
        O = o && null != p,
        D = M || null != d || O || null != h || null != f || null != g,
        z = e6.p5 && null != n,
        V = e6.p5;
    return null != y || null != v || D || V || o
        ? (0, l.jsx)(e_.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: e_.Y.Animation.NONE,
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
                              ? (0, l.jsxs)(eR.rX, {
                                    children: [
                                        null != y
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "refresh",
                                                  icon: eK.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eK.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: x,
                                                  action: y,
                                              })
                                            : null,
                                        null != v
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "close",
                                                  icon: e$.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: e$.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: v,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          T.length > 0
                              ? (0, l.jsx)(eR.rX, {
                                    children: T.map((e) =>
                                        (0, l.jsx)(
                                            eR.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
                                                    let t = null == e.connectionType ? null : R.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          D
                              ? (0, l.jsxs)(eR.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          V
                              ? (0, l.jsxs)(eR.rX, {
                                    children: [
                                        z
                                            ? (0, l.jsx)(eR.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eZ.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eZ.LinkIcon },
                                                  action: () =>
                                                      (0, e6.C)((0, e2.n)(n, e3.VV.VIBEGRATIONS, t), () =>
                                                          (0, b.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), k.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eR.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eQ.L,
                                            leadingAccessory: { type: "icon", icon: eQ.L },
                                            action: () =>
                                                (0, e6.C)(t, () =>
                                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), k.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eR.rX, {
                                    children: [
                                        (0, l.jsx)(eR.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: j.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                            action: () =>
                                                (0, e7.A)(t, { guildId: s ?? n, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, l.jsx)(eR.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: Y.intl.formatToPlainString(H.default.ZokHVz, { name: a }),
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
                  let { onClick: a } = e,
                      { isShown: n } = t;
                  return (0, l.jsx)("div", {
                      ref: N,
                      className: e5.h,
                      children: (0, l.jsx)(G.A.Icon, {
                          icon: eJ.MoreHorizontalIcon,
                          tooltip: Y.intl.string(Y.t["UKOtz+"]),
                          "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                          "aria-haspopup": "menu",
                          "aria-expanded": n,
                          selected: n,
                          onClick: a,
                      }),
                  });
              },
          })
        : null;
}
var ta = a(769979);
function tn(e) {
    let { title: t, actions: a, breadcrumb: n } = e;
    return (0, l.jsx)(G.A, {
        hideSearch: !0,
        toolbar: a,
        className: ta.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: ta.QF,
            children: [
                (0, l.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: T.A.colors.TEXT_STRONG,
                    className: ta.Kk,
                }),
                null != n
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(G.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, l.jsx)(G.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(G.A.Title, { className: ta.Qw, wrapperClassName: ta.DD, children: t }),
            ],
        }),
    });
}
var tl = a(73432),
    ti = a(683071),
    ts = a(47167),
    to = a(808728),
    tr = a(994500),
    td = a(287809),
    tu = a(652215);
let tc = "conjuring-help";
var tp = a(107148);
function tm() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([td.default, L.A, to.Ay, tr.A], () => {
                let e = td.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(tu.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = to.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, ts.m1)(t, td.default, tr.A) === tc;
                    });
                    if (null != a) return { isStaff: e, guildId: t.id, channelId: a.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != a
                    ? { kind: "channel", guildId: t, channelId: a }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, D.pX)(tu.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, e9.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: tp.l,
              children: (0, l.jsx)(ti.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(H.default["4BsHmp"], { channel: tc, onNavigate: t }),
              }),
          });
}
var th = a(321593),
    tf = a(580954),
    tg = a(227189),
    ty = a(189213),
    tb = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function tw(e) {
    let { reason: t, transitionState: a, onClose: n } = e,
        i = t === tb.PERMISSIONS;
    return (0, l.jsx)(ty.Modal, {
        transitionState: a,
        onClose: n,
        title: Y.intl.string(i ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(i ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(i ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function tk(e) {
    (0, ed.openModal)((t) => (0, l.jsx)(tw, { ...t, reason: e }));
}
var tx = a(480007),
    tv = a(584936),
    tj = a(536820),
    tC = a(548118);
let tA = "user";
var tN = a(683180);
let tI = "user",
    tS = "no-server",
    tE = new Map();
function tP(e) {
    return tE.get(e) ?? null;
}
function t_(e) {
    switch (e) {
        case "all":
        case tI:
        case tS:
            return null;
        default:
            return e;
    }
}
function tT(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tI:
            return "user" === e.install_scope;
        case tS:
            return null == (0, X.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tR = a(506774);
let tM = "VibegrationsProjectsPanelOpen";
function tO() {
    return tR.w.get(tM) ?? null;
}
function tG(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tD = a(165610),
    tz = a(352978);
function tV(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tL(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tB(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tF(e) {
    let t,
        a,
        n,
        s,
        o,
        { project: r, guildId: p, onSelect: m, onRemix: h } = e,
        x =
            ((t = r.id),
            (a = r.name),
            (n = i.useRef(!1)),
            (s = i.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, b.P0)((0, w.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: a }), k.Ck.MESSAGE)),
                    ez(t, a)
                        .catch((e) => {
                            let a;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, b.P0)(
                                    (0, w.o)(
                                        409 === (a = e instanceof el._v ? e.status : null)
                                            ? Y.intl.string(H.default.uB40Hz)
                                            : 404 === a
                                              ? Y.intl.string(H.default.wCq2jC)
                                              : Y.intl.string(H.default.G2GqyP),
                                        k.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            n.current = !1;
                        }));
            }, [t, a])),
            {
                onExport: s,
                onImport: (o = eV(
                    i.useCallback(
                        (e) => {
                            let n = eD(e);
                            null != n
                                ? (0, b.P0)((0, w.o)(n, k.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: a }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(tu.BVt.CHANNEL(p, e3.VV.VIBEGRATIONS, t));
                                          try {
                                              await eG(t, e, Y.intl.string(H.default.C7GU2r));
                                          } catch {
                                              (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), k.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, a, p],
                    ),
                )).open,
                importInput: o.input,
            }),
        v = r.preview_application_id ?? r.application_id,
        { data: j } = (0, R.YY)(v),
        C = j?.icon == null ? null : F.Ay.getApplicationIconURL({ id: v, icon: j.icon, size: 40 }),
        A =
            null == r.updated_at
                ? null
                : Y.intl.formatToPlainString(H.default.oMDaqr, { time: d()(r.updated_at).fromNow() }),
        N = (0, X.HC)(r),
        I =
            (0, u.bG)([L.A], () => (null == N ? null : (L.A.getGuild(N)?.name ?? null)), [N]) ??
            Y.intl.string(H.default["qqH+iN"]);
    return (0, l.jsxs)("div", {
        className: tz.OY,
        children: [
            (0, l.jsx)(th.Ay, { projectId: r.id }),
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
                        (0, l.jsx)(tt, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: p,
                            projectGuildId: r.guild_id,
                            isOwner: (0, ei.PV)(r),
                            canRemix: (0, ei.H_)(r),
                            onRemix: h,
                            onExport: x.onExport,
                            onImport: x.onImport,
                        }),
                        x.importInput,
                    ],
                }),
            }),
        ],
    });
}
function tH(e) {
    var t, n;
    let { project: s, projectsLoaded: o, onBack: r, guildId: d } = e,
        [p, m] = i.useState(!1),
        [h, f] = i.useState(!0),
        [g, A] = i.useState(!1),
        [N, I] = i.useState(!1),
        [S, E] = i.useState(!1),
        P = z.Q_.useSetting(),
        [_, T] = i.useState(null),
        [V, L] = i.useState(null),
        B = s?.id ?? null,
        F = i.useRef(B),
        q = i.useRef(!0),
        X = i.useRef(!1),
        W = i.useRef(null);
    ((F.current = B),
        i.useEffect(
            () => (
                (q.current = !0),
                () => {
                    q.current = !1;
                }
            ),
            [],
        ));
    let $ = (0, u.bG)([ei.Ay], () => (null == B ? null : ei.Ay.getIntegrationStatus(B)), [B]),
        { data: Z, isLoading: J } = (0, R.YY)(s?.preview_application_id ?? void 0),
        es = null != B && V !== B,
        eo = $?.preview_ready === !0,
        er = $?.has_activity === !0,
        {
            availability: eu,
            activeMode: ec,
            setMode: ep,
            widgetApplicationId: eh,
        } = (0, Q.q)({
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
        eg = p || es || J,
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
        { active: ej } = (0, ee.Q_)(B),
        eC = i.useRef(null),
        eA = (0, et.o4)(B),
        eN = Y.intl.string(eA ? H.default.bfQ4Ki : ej ? H.default.rfNEHn : H.default.lXcEa2),
        eI = i.useCallback(() => {
            if (null != B) {
                if (ej) return void (0, ee.PS)(B);
                (E(!1), A(!1), I(!1), f(!0), (0, ee.nI)(B));
            }
        }, [B, ej]),
        eS = i.useCallback(() => {
            E((e) => !e && (f(!0), A(!1), I(!1), !0));
        }, []),
        eE = i.useCallback(() => E(!1), []),
        eP = i.useCallback(
            (e) => {
                if (null == s || X.current) return;
                let t = s.id;
                function a() {
                    return q.current && F.current === t;
                }
                ((X.current = !0),
                    A(!1),
                    f(!0),
                    T({ entry: e, status: "restoring" }),
                    (0, el.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && T({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (T({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.q6iZ84), k.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (X.current = !1);
                        }));
            },
            [s],
        ),
        e_ = (0, u.bG)([en.A], () => en.A.isBuilderPreviewMobile()),
        eT = Y.intl.string(e_ ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eR = i.useCallback(() => (0, U.GG)(!e_), [e_]),
        eM = (0, O.A)(s?.preview_application_id ?? null, tD.sd),
        eO = (0, tD.x1)(eM) && eM.data.proxyTicketRefreshing,
        ez = i.useCallback(() => {
            null == eM || eO || M.A.refreshProxyTicket(eM.id);
        }, [eM, eO]),
        eL = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eM?.id), (0, el.Bn)(e), (0, tf.A)().leaveFrame(t)), r());
        }, [s, eM?.id, r]),
        eB = i.useCallback(() => {
            null != s && (f(!0), (0, el.dv)(s.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [s]),
        eF = eV(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        a = eD(e);
                    null != a
                        ? (0, b.P0)((0, w.o)(a, k.Ck.FAILURE))
                        : (0, c.A)({
                              title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: s.name }),
                              subtitle: Y.intl.string(H.default["6syXoH"]),
                              confirmText: Y.intl.string(H.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await eG(t, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), k.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eH = i.useCallback(() => {
            null != s && (0, tv.A)(s, d);
        }, [s, d]),
        eY = i.useCallback(async () => {
            if (null == B || F.current !== B) return;
            W.current?.abort();
            let e = new AbortController();
            ((W.current = e), L(null));
            try {
                await (0, U.U1)(B, e.signal);
            } catch {
            } finally {
                e.signal.aborted || W.current !== e || F.current !== B || L(B);
            }
        }, [B]);
    i.useEffect(
        () => (
            eY(),
            () => {
                (W.current?.abort(), (W.current = null));
            }
        ),
        [eY],
    );
    let eq =
            ((t = s ?? null), (n = $ ?? null), n?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eU = i.useCallback(async () => {
            null != s && (await K(s, eq));
        }, [eq, s]),
        eX = i.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eY();
        }, [eY, eU]),
        eK = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || J || es
                ? null
                : {
                      ...(0, tg.p)({ applicationId: e, application: Z ?? null, guildId: eq }),
                      onClose: () => {
                          eX();
                      },
                  };
        }, [es, eX, eq, J, Z, s?.preview_application_id]),
        e$ = ef ? { type: "permissions", authorizeProps: eK } : es && null == $ ? { type: "checking" } : void 0;
    i.useEffect(() => {
        null == s && o && (0, D.pX)(tu.BVt.CHANNEL(d, e3.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let eZ = i.useCallback((e) => {
            m(!0);
            let t = (0, el.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(Y.intl.string(H.default.fNP6Cd));
                (0, U.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, b.P0)(
                            (0, w.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), k.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        eQ = i.useCallback(() => {
            if (null == s) return;
            if (!eo) return void tk(tb.NO_PREVIEW);
            if (ef) return void tk(tb.PERMISSIONS);
            if ("user" === s.install_scope)
                return void eZ(s.id)
                    .then(() => {
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), k.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, el.$C)(s.id);
            (e.catch(() => {}),
                (0, tx.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: eZ(s.id),
                    initialDraft: e,
                }));
        }, [d, ef, eo, s, eZ]),
        eJ =
            null != s && (0, ei.jf)(s)
                ? (0, l.jsx)(x.$, { size: "sm", variant: "primary", loading: p, disabled: eg, onClick: eQ, text: ey })
                : null,
        e0 = (0, l.jsx)(tn, {
            title: s?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tz.FO,
                          children: [
                              eu.showModeSwitch ? (0, l.jsx)(eW, { modes: eu.modes, mode: ec, onChange: ep }) : null,
                              (0, l.jsx)(G.A.Icon, {
                                  icon: e_ ? tB : tL,
                                  tooltip: eT,
                                  "aria-label": eT,
                                  selected: e_,
                                  onClick: eR,
                              }),
                              (0, l.jsx)(G.A.Icon, {
                                  ref: eC,
                                  icon: tl.A,
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
                              (0, l.jsx)(G.A.Icon, {
                                  icon: j.SettingsIcon,
                                  tooltip: Y.intl.string(H.default.cWmjzs),
                                  "aria-label": Y.intl.string(H.default.cWmjzs),
                                  onClick: () => (0, e7.A)(s.id, { guildId: d, isPreview: !0 }),
                              }),
                              (0, l.jsx)(tt, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ei.PV)(s),
                                  canRemix: (0, ei.H_)(s),
                                  onRefresh: (0, tD.x1)(eM) ? ez : void 0,
                                  isRefreshing: eO,
                                  onClose: eL,
                                  onExport: eB,
                                  onImport: eF.open,
                                  onRemix: eH,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, ed.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  a.e("964476"),
                                                  a.e("461590"),
                                              ]).then(a.bind(a, 84469));
                                              return (a) => (0, l.jsx)(t, { ...a, projectId: e });
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
                                      eu.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== eu.profileState
                                          ? eh
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              eb
                                  ? null
                                  : (0, l.jsx)(G.A.Icon, { icon: tV, tooltip: ew, "aria-label": ew, onClick: ex }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tz.nj,
        children: [
            eF.input,
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
                                          (0, l.jsx)(x.$, {
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
                              em.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eC,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: tD.sd,
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
                                  availability: eu,
                                  activeMode: ec,
                                  widgetApplicationId: eh,
                              },
                              s.id,
                          ),
            }),
        ],
    });
}
function tY(e) {
    let {
            projects: t,
            idea: n,
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
            onStartTemplate: R,
            onSubmitTemplate: M,
            onCancelTemplate: O,
            onSkipTemplate: D,
            onImportNewProject: z,
            importing: V,
        } = e,
        [B, F] = i.useState(() => ({ guildId: s, filter: tP(s) })),
        X = (B.guildId === s ? B.filter : tP(s)) ?? s,
        W = i.useCallback(
            (e) => {
                (tE.set(s, e), F({ guildId: s, filter: e }));
            },
            [s],
        ),
        K = (0, u.yK)(
            [L.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = L.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, s),
            [t, s],
        ),
        Z = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Y.intl.string(H.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tI,
                    leading: eL.UserIcon,
                    label: Y.intl.string(H.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tS,
                    leading: eB.R,
                    label: Y.intl.string(H.default["qqH+iN"]),
                },
                ...K.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, l.jsx)(tC.Ay, { guild: e, size: tC.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [K],
        ),
        Q = (0, u.yK)(
            [ei.Ay, L.A],
            () => {
                let e = t_(X);
                if (null != e) return ei.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(L.A.getGuilds()))
                    ei.Ay.hasFetchedGuildProjects(e.id) && t.push(...ei.Ay.getSharedProjects(e.id));
                return t;
            },
            [X],
        );
    i.useEffect(() => {
        let e = t_(X);
        null == e || ei.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [X]);
    let J = i.useMemo(
            () =>
                Q.filter((e) => tT(e, X)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Q, X],
        ),
        ee = i.useMemo(
            () => [
                {
                    label: Y.intl.string(H.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tA,
                            label: Y.intl.string(H.default.UXnPhI),
                            leading: eL.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, l.jsx)(tC.Ay, { guild: e, size: tC.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        et = i.useMemo(
            () =>
                t
                    .filter((e) => tT(e, X))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, X],
        ),
        ea = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tN.X0)(e, s)
                    ? v(e.id)
                    : (0, b.P0)((0, w.o)(Y.intl.string(H.default["wY7I+H"]), k.Ck.MESSAGE));
            },
            [s, v],
        ),
        en = Y.intl.string(H.default.TU9IGR),
        el = [
            Y.intl.string(H.default["E+Q26x"]),
            Y.intl.string(H.default["06/jqP"]),
            Y.intl.string(H.default["3gSfUa"]),
        ],
        es = [
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
        eo = i.useCallback(
            (e) => {
                var t, n;
                null != e.wizard
                    ? ((t = {
                          template: e,
                          guildId: s,
                          eligibleGuilds: h,
                          onStart: (t) => R(e.name, t),
                          onSubmit: M,
                          onCancel: O,
                          onSkip: D,
                      }),
                      (0, ed.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                  a.bind(a, 248702),
                              );
                              return (a) => (0, l.jsx)(e, { ...a, ...t });
                          },
                          { modalKey: "VibegrationsTemplateWizardModal" },
                      ))
                    : C(((n = e.name), Y.intl.formatToPlainString(H.default["9D9L0S"], { templateName: n })));
            },
            [h, s, O, C, D, R, M],
        ),
        er = Y.intl.string(H.default.FYK2xQ),
        eu = Y.intl.string(H.default["/SUK82"]),
        ec = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || C());
            },
            [c, C],
        ),
        em = t_(X) ?? s,
        ef = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(em), [em]),
        eg = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(s), [s]),
        [ek, ex] = i.useState(tO),
        ev = i.useMemo(() => tR.w.get(tG(s)) ?? !1, [s]),
        ej = "success" === eg,
        eC = (0, u.yK)([ei.Ay], () => ei.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => tT(e, s)),
        eA = ek ?? (!!eC || "error" === eg || (!ej && ev));
    i.useEffect(() => {
        ej && tR.w.set(tG(s), eC);
    }, [ej, eC, s]);
    let eN = i.useCallback((e) => {
            (tR.w.set(tM, e), ex(e));
        }, []),
        eI = i.useCallback(() => eN(!eA), [eN, eA]),
        eS = i.useCallback(() => eN(!1), [eN]),
        eE = Y.intl.string(H.default.jDPFDh),
        e_ = eA ? eE : Y.intl.string(H.default.a6d2y1);
    return (0, l.jsx)("div", {
        className: o()(tz.nj, tz.a0),
        children: (0, l.jsxs)("div", {
            className: tz.Yo,
            children: [
                (0, l.jsxs)("main", {
                    className: tz.ps,
                    children: [
                        (0, l.jsx)(tn, {
                            title: Y.intl.string(H.default.Xmvb23),
                            actions: (0, l.jsx)(G.A.Icon, {
                                icon: A.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: eA,
                                onClick: eI,
                            }),
                        }),
                        (0, l.jsx)(N.Ip, {
                            className: tz.Yy,
                            children: (0, l.jsx)("div", {
                                className: tz.Mo,
                                children: (0, l.jsxs)("section", {
                                    className: o()(tz.Qs, tz.Ix),
                                    children: [
                                        (0, l.jsx)(tm, {}),
                                        (0, l.jsx)(eP, {}),
                                        (0, l.jsxs)("section", {
                                            className: tz.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tz.G9,
                                                    children: [
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: er,
                                                        }),
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(ew, {
                                                    listClassName: tz.Aw,
                                                    radius: ey,
                                                    children: es.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tz.EA,
                                                                children: (0, l.jsxs)(eh, {
                                                                    disabled: r,
                                                                    ariaLabel: Y.intl.formatToPlainString(
                                                                        H.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tz.nx, tz.rz),
                                                                    onClick: () => eo(e),
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
                                            "aria-label": eu,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tz.G9,
                                                    children: [
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(ew, {
                                                    listClassName: tz.Aw,
                                                    radius: eb,
                                                    children: el.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tz.EA,
                                                                children: (0, l.jsx)(eh, {
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
                                        (0, l.jsx)(ep, {}),
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
                                        label: en,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: en,
                                        error: d,
                                        onChange: j,
                                        onKeyDown: ec,
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
                                                    options: ee,
                                                    value: p,
                                                    onSelectionChange: m,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, l.jsx)(eY.A, {
                                                settings: f ?? q.v0,
                                                tiers: q.qf,
                                                choices: (0, $.e)()
                                                    ? {
                                                          main: [...q.S8.main, ...q.wF.main],
                                                          subagent: [...q.S8.subagent, ...q.wF.subagent],
                                                          thinking: q.S8.thinking,
                                                      }
                                                    : q.S8,
                                                disabled: r,
                                                onChange: g,
                                            }),
                                            (0, l.jsx)(x.$, {
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
                    hidden: !eA,
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
                                        (0, l.jsx)(eH, { importing: V, onImport: z }),
                                        (0, l.jsx)(G.A.Icon, { icon: E.P, tooltip: eE, "aria-label": eE, onClick: eS }),
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
                                        options: Z,
                                        value: X,
                                        onSelectionChange: W,
                                    }),
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tz.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === ef || "loading" === ef) && 0 === et.length
                                    ? (0, l.jsx)("div", { className: tz.E8, children: (0, l.jsx)(P.y, {}) })
                                    : "error" === ef && 0 === et.length
                                      ? (0, l.jsxs)("div", {
                                            className: tz.E8,
                                            children: [
                                                (0, l.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tz.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, l.jsx)(x.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(em),
                                                }),
                                            ],
                                        })
                                      : 0 === et.length
                                        ? (0, l.jsx)("div", {
                                              className: tz.D1,
                                              children: (0, l.jsxs)("div", {
                                                  className: tz.ST,
                                                  children: [
                                                      (0, l.jsx)(_.D, { size: "lg", color: T.A.colors.TEXT_SUBTLE }),
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
                                              children: et.map((e) =>
                                                  (0, l.jsx)(
                                                      tF,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => ea(e),
                                                          onRemix: () => (0, tv.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                J.length > 0
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
                                                  children: J.map((e) =>
                                                      (0, l.jsx)(
                                                          tF,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => ea(e),
                                                              onRemix: () => (0, tv.A)(e, s),
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
        { guildId: a, projectId: n } = e,
        s = (0, u.yK)([ei.Ay], () => ei.Ay.getOwnedProjects()),
        o = (0, u.yK)([V.Ay], () => V.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [L.A, B.A],
            () => {
                let e = L.A.getGuild(a);
                return null != e && B.A.can(tu.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, c] = i.useState(""),
        p = n ?? null,
        [m, h] = i.useState(!1),
        [f, g] = i.useState(null),
        y = (0, tj._)("VibegrationsScreen"),
        [x, v] = i.useState(null);
    i.useEffect(() => {
        v(null);
    }, [a]);
    let j = i.useMemo(() => (y.some((e) => e.id === a) ? a : tA), [y, a]),
        C = x ?? j,
        A = C === tA ? "user" : "guild",
        N = C === tA ? a : C,
        [I, S] = i.useState(null);
    (i.useEffect(() => {
        (0, U.hF)(a);
    }, [a, o, r]),
        i.useEffect(() => {
            (0, U.dm)(a, p);
        }, [a, p]));
    let E = i.useCallback(
            async (e, t, a) => {
                let n = await (0, U.gA)({ guild_id: t, install_scope: a });
                ((0, el.Hc)(n),
                    (0, el.r2)(n, I ?? q.v0),
                    (0, el.dv)(n, e),
                    (0, D.pX)(tu.BVt.CHANNEL(t, e3.VV.VIBEGRATIONS, n)),
                    c(""),
                    S(null));
            },
            [I],
        ),
        P = i.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = es({ idea: t, installScope: A, submitting: m });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        await E(t, N, A);
                    } catch (e) {
                        g((0, W.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, d, m],
        ),
        _ = i.useCallback(
            async (e, t) => {
                let a = await (0, U.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, el.Hc)(a), (0, el.r2)(a, I ?? q.v0), (0, el.dv)(a, (0, Z.v8)(e)), a);
            },
            [I],
        ),
        T = i.useCallback(async (e, t, a) => {
            if (ei.Ay.getProject(e)?.guild_id !== t) {
                let a = await (0, U.M7)(e, { guild_id: t, preview_guild_id: t });
                if (!a.ok) throw new W.uQ((0, W.hj)(a), a.status);
            }
            ((0, el.dv)(e, a), (0, J.R6)(e), (0, D.pX)(tu.BVt.CHANNEL(t, e3.VV.VIBEGRATIONS, e)), S(null));
        }, []),
        R = i.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        M = i.useCallback(
            (e) => {
                let t = ei.Ay.getProject(e)?.guild_id ?? a;
                ((0, D.pX)(tu.BVt.CHANNEL(t, e3.VV.VIBEGRATIONS, e)), S(null));
            },
            [a],
        ),
        [O, G] = i.useState(!1),
        z = i.useCallback(
            async (e, t) => {
                let n = eD(e);
                if (null != n) return void (0, b.P0)((0, w.o)(n, k.Ck.FAILURE));
                G(!0);
                let l = null;
                try {
                    ((l = await (0, U.gA)({ guild_id: a, install_scope: t })),
                        (0, el.Hc)(l),
                        (0, el.r2)(l, I ?? q.v0),
                        await eG(l, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, D.pX)(tu.BVt.CHANNEL(a, e3.VV.VIBEGRATIONS, l)),
                        S(null));
                } catch {
                    (null != l && (await (0, U.xx)(l).catch(() => void 0)),
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), k.Ck.FAILURE)));
                } finally {
                    G(!1);
                }
            },
            [a, I],
        ),
        F = i.useCallback(
            (e) => {
                (0, D.pX)(tu.BVt.CHANNEL(a, e3.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        X = i.useCallback(() => {
            (0, D.pX)(tu.BVt.CHANNEL(a, e3.VV.VIBEGRATIONS));
        }, [a]),
        K = i.useCallback((e) => {
            (c(e), g(null));
        }, []),
        $ = (0, u.bG)(
            [ei.Ay],
            () => {
                if (null == p) return null;
                let e = ei.Ay.getProject(p);
                return null == e || (0, ei.PV)(e) || e.guild_id === a ? e : null;
            },
            [p, a],
        ),
        Q = (0, u.bG)([ei.Ay], () => ei.Ay.hasFetchedGuildProjects(a), [a]);
    return null != p
        ? (0, l.jsx)(tH, { project: $, projectsLoaded: Q, onBack: X, guildId: a }, p)
        : (0, l.jsx)(tY, {
              projects: s,
              modelSettings: I,
              onModelSettingsChange: S,
              idea: d,
              guildId: a,
              submitting: m,
              createError: f,
              createDisabled: "idea" === (t = es({ idea: d, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: F,
              onIdeaChange: K,
              onCreate: P,
              onStartTemplate: _,
              onSubmitTemplate: T,
              onCancelTemplate: R,
              onSkipTemplate: M,
              onImportNewProject: z,
              importing: O,
              conjureTarget: C,
              onConjureTargetChange: v,
              eligibleGuilds: y,
          });
}
