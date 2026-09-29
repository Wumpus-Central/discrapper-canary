(a.r(t), a.d(t, { default: () => t7 }), a(321073));
var n = a(477900),
    i = a(582128),
    s = a(503698),
    o = a.n(s),
    l = a(536637),
    r = a.n(l),
    d = a(17928),
    u = a(314116),
    m = a(534890),
    c = a(646270),
    p = a(31300),
    h = a(691540),
    f = a(857250),
    g = a(97483),
    y = a(834730),
    b = a(323384),
    w = a(939249),
    k = a(866665),
    v = a(140735),
    j = a(289873),
    x = a(821609),
    C = a(92446),
    A = a(625903),
    I = a(297264),
    N = a(97893),
    S = a(364522),
    E = a(103557),
    P = a(691885),
    T = a(789645),
    _ = a(152367),
    M = a(661531),
    R = a(627363),
    O = a(625180),
    D = a(672929),
    G = a(742589),
    z = a(976860),
    L = a(402860),
    B = a(885386),
    F = a(696451),
    V = a(71393),
    H = a(576705),
    U = a(486020),
    Y = a(277977),
    q = a(759967),
    X = a(375708),
    K = a(673724),
    W = a(948230),
    Z = a(637708),
    $ = a(936494),
    Q = a(443741),
    J = a(208137),
    ee = a(993396),
    et = a(822835),
    ea = a(287809),
    en = a(427262),
    ei = a(783791),
    es = a(725592),
    eo = a(459514),
    el = a(314903),
    er = a(808728),
    ed = a(683180),
    eu = a(66708),
    em = a(74029),
    ec = a(559676),
    ep = a(58551),
    eh = a(805332),
    ef = a(972786);
function eg(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var ey = a(58703),
    eb = a(127181),
    ew = a(192308);
function ek() {
    (0, ew.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ev = a(413927);
function ej() {
    let e = (0, eb.TH)("desktop");
    if (0 === e.length) return null;
    let t = X.intl.string(q.default.x07mpp);
    return (0, n.jsxs)("section", {
        className: ev.rN,
        "aria-label": t,
        children: [
            (0, n.jsxs)("div", {
                className: ev.bZ,
                children: [
                    (0, n.jsx)(y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: X.intl.string(q.default.h5CwHI),
                    }),
                ],
            }),
            (0, n.jsx)("ol", {
                className: ev.V,
                children: e.map((e) =>
                    (0, n.jsxs)(
                        "li",
                        {
                            className: ev.S3,
                            children: [
                                (0, n.jsxs)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ev.VO,
                                    children: [
                                        (0, ey.i$)(r()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eb.MZ)(e) ? ` \xb7 ${X.intl.string(q.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, n.jsx)(y.E, {
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
            (0, eb.B)("desktop")
                ? (0, n.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: X.intl.string(q.default.YWxThz),
                      onClick: ek,
                  })
                : null,
        ],
    });
}
var ex = a(568375);
function eC(e) {
    let { className: t, ariaLabel: a, disabled: i, onClick: s, children: o } = e;
    return (0, n.jsx)(w.D, { "aria-disabled": i, "aria-label": a, className: t, onClick: i ? void 0 : s, children: o });
}
var eA = a(865665),
    eI = a(568190);
let eN = { x: 5, y: 7 },
    eS = { x: 5, y: 4 };
function eE(e) {
    let { listClassName: t, radius: a, children: s } = e,
        [o, l] = i.useState(!1);
    return (0, n.jsxs)("div", {
        className: eI.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: s }),
            o ? (0, n.jsx)(eA.C, { area: 64, radius: a, color: M.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eP = a(210744),
    eT = a(864970),
    e_ = a(707554),
    eM = a(770178),
    eR = a(765548),
    eO = a(597643),
    eD = a(885576),
    eG = a(236730);
let ez = "heading-xxl/semibold",
    eL = !1;
function eB() {
    let e = i.useRef(null),
        [t, a] = i.useState(!0),
        s = (0, eR.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eM.w)(s, [], { fireOnMount: !0 }),
        l = (0, d.bG)([eO.A], () => eO.A.isConnected());
    i.useEffect(() => {
        if (!l || !t || eL) return;
        let a = !1,
            n = 0;
        function i() {
            a ||
                (n = window.setTimeout(() => {
                    ((eL = !0), e.current?.play());
                }, 400));
        }
        let s = document.fonts;
        return (
            null == s ? i() : s.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(i, i),
            () => {
                ((a = !0), window.clearTimeout(n));
            }
        );
    }, [l, t]);
    let r = (0, d.bG)([eD.A], () => eD.A.isIdle()),
        u = i.useRef(r);
    i.useEffect(() => {
        let t = u.current && !r;
        ((u.current = r), t && eL && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = X.intl.string(q.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: eG.x,
        children: t
            ? (0, n.jsx)(e_.H, { children: (0, n.jsx)(eT.o, { ref: e, text: m, variant: ez, delay: null }) })
            : (0, n.jsx)(I.D, { variant: ez, children: m }),
    });
}
var eF = a(922016),
    eV = a(980707),
    eH = a(477782),
    eU = a(81369),
    eY = a(402879);
async function eq(e, t, a) {
    (0, Y.Hc)(e);
    let n = await (0, Y.vX)(e, t);
    (0, Y.dv)(e, a, [n]);
}
function eX(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, K.x5)(e.size, t)
        ? null
        : X.intl.formatToPlainString(q.default.AzziHF, { size: (0, K.ZJ)((0, K.yr)(t)) });
}
async function eK(e, t) {
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
        i = await (0, Y.cS)(e, n);
    await (0, eY.F)(i, n);
}
function eW(e) {
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
        input: (0, n.jsx)("input", {
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
var eZ = a(950305),
    e$ = a(664121);
let eQ = [
    { value: "user", icon: eZ.UserIcon, nameMessage: q.default.iqXIRN },
    { value: "guild", icon: e$.R, nameMessage: q.default.LdgKdI },
];
function eJ(e) {
    let { importing: t, onImport: a } = e,
        s = i.useRef(null),
        o = eW(i.useCallback((e) => a(e, "user"), [a])),
        l = eW(i.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eF.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: eF.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eV.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": X.intl.string(q.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eH.rX, {
                            label: X.intl.string(q.default.MLg0S8),
                            children: eQ
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: X.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        eH.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: i } = a;
                    return (0, n.jsx)(x.$, {
                        ...e,
                        buttonRef: s,
                        variant: "secondary",
                        size: "sm",
                        icon: eU.H,
                        text: X.intl.string(q.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            o.input,
            l.input,
        ],
    });
}
var e0 = a(379307),
    e2 = a(629584),
    e6 = a(753514),
    e1 = a(491920);
function e9(e) {
    let { modes: t, mode: a, onChange: s, className: l } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, e6.kZ)(e), "aria-controls": (0, e6.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                s(e.value);
            },
            [s],
        );
    return null == a
        ? null
        : (0, n.jsx)(e2.I, {
              role: "tablist",
              look: "pill",
              className: o()(e1.b, l),
              optionClassName: e1.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var e8 = a(663417),
    e7 = a(70688),
    e3 = a(173936),
    e5 = a(473935),
    e4 = a(408278),
    te = a(365199),
    tt = a(7437),
    ta = a(147036),
    tn = a(957565),
    ti = a(123917),
    ts = a(557875);
let to = new Set();
var tl = a(976814),
    tr = a(746080),
    td = a(793712);
let tu = [];
function tm(e) {
    (0, h.P0)((0, f.o)(e, g.Ck.FAILURE));
}
function tc(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: s,
            projectGuildId: o,
            isOwner: l,
            canRemix: r,
            onExport: m,
            onImport: c,
            onRemix: p,
            onConnectTool: y,
            onVersionHistory: b,
            onRestorePoints: w,
            onRefresh: v,
            isRefreshing: j = !1,
            onClose: x,
            refreshApplicationId: C,
            previewProjectId: I,
            trigger: N = "header",
        } = e,
        S = i.useRef(null),
        { pending: E, refresh: P } = (0, tt.A)(C ?? null),
        { pending: T, connect: _ } = (function (e, t) {
            let [a, n] = i.useState(to),
                s = i.useRef(to),
                o = i.useCallback((e) => {
                    ((s.current = (0, ts.Q6)(s.current, e)), n(s.current));
                }, []);
            return {
                pending: a,
                connect: i.useCallback(
                    (a) => {
                        if (null == e) return;
                        let i = (0, ts.K9)(s.current, a.type);
                        async function l() {
                            let n = await (0, Y.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, ti.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ts.rq)(n.error)
                                          ? X.intl.string(q.default.avu1u4)
                                          : X.intl.string(q.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((s.current = i), n(i), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(I ?? null, tm),
        M = (0, d.bG)([Y.Ay], () => (null == I ? tu : Y.Ay.getDeclaredConnections(I))),
        R = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: i } = e,
                s = [];
            for (let { connection: e, offer: o } of (t &&
                s.push({
                    id: "preview-refresh",
                    label: X.intl.string(q.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                s.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: X.intl.formatToPlainString(q.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: X.intl.formatToPlainString(q.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return s;
        })({
            canRefresh: null != C,
            refreshPending: E,
            offers: i.useMemo(() => (0, ts.Xl)(M), [M]),
            connectPending: T,
        }),
        O = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        D = null != p && r,
        z = l && null != c,
        L = D || null != m || z || null != y || null != b || null != w,
        B = tn.p5 && null != s,
        F = tn.p5;
    return null != v || null != x || L || F || l
        ? (0, n.jsx)(eF.Y, {
              targetElementRef: S,
              position: "bottom",
              align: "right",
              animation: eF.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, n.jsxs)(eV.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": X.intl.string(X.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != v || null != x
                              ? (0, n.jsxs)(eH.rX, {
                                    children: [
                                        null != v
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "refresh",
                                                  icon: e8.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e8.RefreshIcon },
                                                  label: X.intl.string(q.default.xKexN1),
                                                  disabled: j,
                                                  action: v,
                                              })
                                            : null,
                                        null != x
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "close",
                                                  icon: e7.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: e7.DoorExitIcon },
                                                  label: X.intl.string(q.default.Ea0Wrr),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          R.length > 0
                              ? (0, n.jsx)(eH.rX, {
                                    children: R.map((e) =>
                                        (0, n.jsx)(
                                            eH.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void P();
                                                    let t = null == e.connectionType ? null : O.get(e.connectionType);
                                                    null != t && _(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          L
                              ? (0, n.jsxs)(eH.rX, {
                                    children: [
                                        D
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "remix",
                                                  label: X.intl.string(q.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != m
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "export",
                                                  label: X.intl.string(q.default["7iamDC"]),
                                                  action: m,
                                              })
                                            : null,
                                        z
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "import",
                                                  label: X.intl.string(q.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != y
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "connect-tool",
                                                  label: X.intl.string(q.default["3qelzD"]),
                                                  action: y,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "version-history",
                                                  label: X.intl.string(q.default.jAWwzi),
                                                  action: b,
                                              })
                                            : null,
                                        null != w
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "restore-points",
                                                  label: X.intl.string(q.default.FRjicO),
                                                  action: w,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          F
                              ? (0, n.jsxs)(eH.rX, {
                                    children: [
                                        B
                                            ? (0, n.jsx)(eH.Dr, {
                                                  id: "copy-link",
                                                  label: X.intl.string(X.t.WqhZss),
                                                  icon: e3.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: e3.LinkIcon },
                                                  action: () =>
                                                      (0, tn.C)((0, ta.n)(s, tr.VV.VIBEGRATIONS, t), () =>
                                                          (0, h.P0)(
                                                              (0, f.o)(X.intl.string(X.t["L/PwZf"]), g.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, n.jsx)(eH.Dr, {
                                            id: "copy-project-id",
                                            label: X.intl.string(q.default.b4TqpT),
                                            icon: e5.L,
                                            leadingAccessory: { type: "icon", icon: e5.L },
                                            action: () =>
                                                (0, tn.C)(t, () =>
                                                    (0, h.P0)((0, f.o)(X.intl.string(q.default.WOKsTg), g.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          l
                              ? (0, n.jsxs)(eH.rX, {
                                    children: [
                                        (0, n.jsx)(eH.Dr, {
                                            id: "settings",
                                            label: X.intl.string(q.default["xhcY+n"]),
                                            icon: A.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                            action: () =>
                                                (0, tl.A)(t, { guildId: o ?? s, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, n.jsx)(eH.Dr, {
                                            id: "delete",
                                            label: X.intl.string(X.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: X.intl.formatToPlainString(q.default.ZokHVz, { name: a }),
                                                    subtitle: X.intl.string(q.default.NmF939),
                                                    confirmText: X.intl.string(X.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, W.K)(t, () =>
                                                            (0, h.P0)(
                                                                (0, f.o)(X.intl.string(q.default.tqKZCi), g.Ck.FAILURE),
                                                            ),
                                                        );
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
                      { isShown: i } = t;
                  return (0, n.jsx)("div", {
                      ref: S,
                      className: td.h,
                      children:
                          "iconButton" === N
                              ? (0, n.jsx)(k.m, {
                                    text: X.intl.string(X.t["UKOtz+"]),
                                    children: (0, n.jsx)(e4.K, {
                                        icon: te.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": X.intl.string(X.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": i,
                                        onClick: a,
                                    }),
                                })
                              : (0, n.jsx)(G.A.Icon, {
                                    icon: te.MoreHorizontalIcon,
                                    tooltip: X.intl.string(X.t["UKOtz+"]),
                                    "aria-label": X.intl.string(X.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": i,
                                    selected: i,
                                    onClick: a,
                                }),
                  });
              },
          })
        : null;
}
var tp = a(778712),
    th = a(97808),
    tf = a(104171),
    tg = a(889227),
    ty = a(350086);
let tb = tp._3.SIZE_16;
function tw(e) {
    return e instanceof tg.A
        ? (0, n.jsx)(th.eu, { src: e.getAvatarURL(void 0, (0, tp.FT)(tb)), size: tb, "aria-hidden": !0 })
        : null;
}
function tk(e) {
    let { creator: t, className: a } = e,
        i = [t.creator, ...t.collaborators],
        s = i.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(ty.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tf.Ay, { users: i.slice(0, 3), max: 3, size: tf.DN.SIZE_16, renderUser: tw }),
            s > 0 ? (0, n.jsxs)(y.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", s] }) : null,
        ],
    });
}
var tv = a(769979);
function tj(e) {
    let { title: t, actions: a, breadcrumb: i } = e;
    return (0, n.jsx)(G.A, {
        hideSearch: !0,
        toolbar: a,
        className: tv.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: tv.QF,
            children: [
                (0, n.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: M.A.colors.TEXT_STRONG,
                    className: tv.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(G.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(G.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(G.A.Title, { className: tv.Qw, wrapperClassName: tv.DD, children: t }),
            ],
        }),
    });
}
var tx = a(73432),
    tC = a(683071),
    tA = a(47167),
    tI = a(994500),
    tN = a(652215);
let tS = "conjuring-help";
var tE = a(107148);
function tP() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, d.cf)([ea.default, V.A, er.Ay, tI.A], () => {
                let e = ea.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of V.A.getGuildsArray()) {
                    if (!t.features.has(tN.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = er.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tA.m1)(t, ea.default, tI.A) === tS;
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
                    ? (0, z.pX)(tN.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, ti.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: tE.l,
              children: (0, n.jsx)(tC.w, {
                  type: "info",
                  iconAlign: "center",
                  children: X.intl.format(q.default["4BsHmp"], { channel: tS, onNavigate: t }),
              }),
          });
}
var tT = a(321593),
    t_ = a(580954),
    tM = a(227189),
    tR = a(189213),
    tO = a(145216);
function tD(e) {
    let { reason: t, transitionState: a, onClose: i } = e,
        s = t === tO.H.PERMISSIONS;
    return (0, n.jsx)(tR.a, {
        transitionState: a,
        onClose: i,
        title: X.intl.string(s ? q.default.Rtlv25 : q.default["+UouPe"]),
        subtitle: X.intl.string(s ? q.default["nDQB/b"] : q.default["E0QD++"]),
        size: "sm",
        actions: [{ text: X.intl.string(s ? X.t.BddRzS : q.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
var tG = a(480007),
    tz = a(584936),
    tL = a(548118);
let tB = "user",
    tF = "user",
    tV = "no-server",
    tH = new Map();
function tU(e) {
    return tH.get(e) ?? null;
}
function tY(e) {
    switch (e) {
        case "all":
        case tF:
        case tV:
            return null;
        default:
            return e;
    }
}
function tq(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tF:
            return "user" === e.install_scope;
        case tV:
            return null == (0, Z.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tX = a(506774);
let tK = "VibegrationsProjectsPanelOpen";
function tW() {
    return tX.w.get(tK) ?? null;
}
function tZ(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var t$ = a(165610),
    tQ = a(352978);
function tJ(e) {
    return (0, n.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function t0(e) {
    return (0, n.jsx)(c.u, { ...e, size: "custom", width: 20, height: 20 });
}
function t2(e) {
    return (0, n.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
let t6 = {
    showPublishBlocked: function (e) {
        (0, ew.openModal)((t) => (0, n.jsx)(tD, { ...t, reason: e }));
    },
    openPublishNotes: tG.A,
    showError: (e) => (0, h.P0)((0, f.o)(e, g.Ck.FAILURE)),
    openProfile: (e) => {
        (0, L.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(a.bind(a, 468689))
            .then((t) => {
                let { default: a } = t;
                return a.open(e, tN.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function t1(e) {
    var t;
    let a,
        s,
        l,
        m,
        c,
        p,
        x,
        C,
        A,
        I,
        { project: N, guildId: S, onSelect: E, onRemix: P, shared: T = !1 } = e,
        _ =
            ((a = N.id),
            (s = N.name),
            (l = i.useRef(!1)),
            (m = i.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, h.P0)((0, f.o)(X.intl.formatToPlainString(q.default.u9TapG, { name: s }), g.Ck.MESSAGE)),
                    eK(a, s)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, h.P0)(
                                    (0, f.o)(
                                        409 === (t = e instanceof Y._v ? e.status : null)
                                            ? X.intl.string(q.default.uB40Hz)
                                            : 404 === t
                                              ? X.intl.string(q.default.wCq2jC)
                                              : X.intl.string(q.default.G2GqyP),
                                        g.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [a, s])),
            {
                onExport: m,
                onImport: (c = eW(
                    i.useCallback(
                        (e) => {
                            let t = eX(e);
                            null != t
                                ? (0, h.P0)((0, f.o)(t, g.Ck.FAILURE))
                                : (0, u.A)({
                                      title: X.intl.formatToPlainString(q.default.XYZqZK, { name: s }),
                                      subtitle: X.intl.string(q.default["6syXoH"]),
                                      confirmText: X.intl.string(q.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, z.pX)(tN.BVt.CHANNEL(S, tr.VV.VIBEGRATIONS, a));
                                          try {
                                              await eq(a, e, X.intl.string(q.default.C7GU2r));
                                          } catch {
                                              (0, h.P0)((0, f.o)(X.intl.string(q.default["02GpNr"]), g.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [a, s, S],
                    ),
                )).open,
                importInput: c.input,
            }),
        M = N.preview_application_id ?? N.application_id,
        { data: O } = (0, R.YY)(M),
        D = O?.icon == null ? null : U.Ay.getApplicationIconURL({ id: M, icon: O.icon, size: 40 }),
        G =
            null == N.updated_at
                ? null
                : X.intl.formatToPlainString(q.default.oMDaqr, { time: r()(N.updated_at).fromNow() }),
        L = (0, Z.HC)(N),
        B =
            (0, d.bG)([V.A], () => (null == L ? null : (V.A.getGuild(L)?.name ?? null)), [L]) ??
            X.intl.string(q.default["qqH+iN"]),
        F = (0, d.bG)([ef.Ay], () => ef.Ay.isProjectDeleting(N.id), [N.id]),
        H =
            ((t = T ? N : null),
            (p = t?.id),
            (x = t?.owner_user_id),
            (C = (0, d.yK)(
                [ei.Ay],
                () =>
                    null == p
                        ? []
                        : [
                              ...new Set(
                                  ei.Ay.getMessages(p)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== x ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [p, x],
            )),
            i.useEffect(() => {
                null != x && ((0, es.Y)(x), C.forEach(es.Y));
            }, [x, C]),
            (A = (0, d.bG)([ea.default], () => (null == x ? null : ea.default.getUser(x)), [x])),
            (I = (0, d.yK)([ea.default], () => C.map((e) => ea.default.getUser(e)).filter((e) => null != e), [C])),
            i.useMemo(
                () =>
                    null == A
                        ? null
                        : {
                              creator: A,
                              collaborators: I,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? X.intl.formatToPlainString(q.default.TwgkQe, { creator: e })
                                      : X.intl.formatToPlainString(q.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (a = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === a
                                                      ? X.intl.formatToPlainString(X.t["8s9z8P"], { first: t[0] })
                                                      : 2 === a
                                                        ? X.intl.formatToPlainString(X.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === a
                                                          ? X.intl.formatToPlainString(X.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : X.intl.formatToPlainString(X.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: a - 3,
                                                            }),
                                        });
                              })(
                                  (0, en.mG)(A),
                                  I.map((e) => (0, en.mG)(e)),
                              ),
                          },
                [A, I],
            )),
        K = i.useId(),
        W = (0, n.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: tQ.j1, children: N.name }),
        $ =
            null == D
                ? (0, n.jsx)("div", {
                      className: tQ.a8,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(b.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, n.jsx)("img", { alt: "", src: D, className: tQ.VJ });
    return (0, n.jsxs)("div", {
        className: o()(tQ.OY, { [tQ.Wy]: F }),
        "aria-busy": F,
        children: [
            (0, n.jsx)(tT.Ay, { projectId: N.id }),
            (0, n.jsxs)(w.D, {
                className: tQ.W6,
                onClick: F ? void 0 : E,
                tabIndex: F ? -1 : void 0,
                "aria-describedby": null != H ? K : void 0,
                children: [
                    $,
                    (0, n.jsxs)("div", {
                        className: tQ.MM,
                        children: [
                            (0, n.jsxs)("div", {
                                className: tQ.Ub,
                                children: [
                                    null != H ? (0, n.jsx)(k.m, { text: H.label, ariaHidden: !0, children: W }) : W,
                                    null == H || F ? null : (0, n.jsx)(tk, { creator: H, className: tQ.rb }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: tQ.h3,
                                children: [
                                    (0, n.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tQ.Wb,
                                        children: F ? X.intl.string(q.default.EwXXks) : B,
                                    }),
                                    null == G || F
                                        ? null
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: tQ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tQ.zM,
                                                      children: G,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != H ? (0, n.jsx)(v.A, { id: K, children: H.label }) : null,
            (0, n.jsx)("div", {
                className: tQ.M2,
                children: F
                    ? (0, n.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: tQ.Pl,
                          children: [
                              (0, n.jsx)(tc, {
                                  projectId: N.id,
                                  projectName: N.name,
                                  guildId: S,
                                  projectGuildId: N.guild_id,
                                  isOwner: (0, ef.PV)(N),
                                  canRemix: (0, ef.H_)(N),
                                  onRemix: P,
                                  onExport: _.onExport,
                                  onImport: _.onImport,
                                  trigger: "iconButton",
                              }),
                              _.importInput,
                          ],
                      }),
            }),
        ],
    });
}
function t9(e) {
    var t;
    let { project: s, projectsLoaded: o, onBack: l, guildId: r } = e,
        [m, c] = i.useState(!0),
        [p, b] = i.useState(!1),
        [w, v] = i.useState(!1),
        [j, N] = i.useState(!1),
        S = B.Q_.useSetting(),
        [E, P] = i.useState(null),
        [T, _] = i.useState(null),
        M = s?.id ?? null,
        L = i.useRef(M),
        F = i.useRef(!0),
        V = i.useRef(!1),
        H = i.useRef(null);
    ((L.current = M),
        i.useEffect(
            () => (
                (F.current = !0),
                () => {
                    F.current = !1;
                }
            ),
            [],
        ));
    let U = (0, d.bG)([ef.Ay], () => (null == M ? null : ef.Ay.getIntegrationStatus(M)), [M]),
        { data: K, isLoading: Z } = (0, R.YY)(s?.preview_application_id ?? void 0),
        $ = null != M && T !== M,
        J = U?.preview_ready === !0,
        ee = U?.has_activity === !0,
        {
            availability: ea,
            activeMode: en,
            setMode: ei,
            widgetApplicationId: es,
        } = (0, et.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ee,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
        }),
        eo = (0, ep.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: J,
            integrationInstalled: U?.integration_installed ?? null,
            botPermissionsChanged: U?.bot_permissions_changed === !0,
        }),
        eu = m && !j && !p && !w,
        eg = X.intl.string(eu ? q.default.YdgE0j : q.default.aWVf4j),
        ey = i.useCallback(() => {
            if (j || p || w) {
                (N(!1), b(!1), v(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [j, p, w]),
        eb = i.useCallback(() => c(!1), []),
        { active: ek } = (0, em.Q_)(M),
        ev = i.useRef(null),
        ej = (0, ec.o4)(M),
        eC = X.intl.string(ej ? q.default.bfQ4Ki : ek ? q.default.rfNEHn : q.default.lXcEa2),
        eA = i.useCallback(() => {
            if (null != M) {
                if (ek) return void (0, em.PS)(M);
                (N(!1), b(!1), v(!1), c(!0), (0, em.nI)(M));
            }
        }, [M, ek]),
        eI = i.useCallback(() => {
            N((e) => !e && (c(!0), b(!1), v(!1), !0));
        }, []),
        eN = i.useCallback(() => N(!1), []),
        eS = i.useCallback(
            (e) => {
                if (null == s || V.current) return;
                let t = s.id;
                function a() {
                    return F.current && L.current === t;
                }
                ((V.current = !0),
                    b(!1),
                    c(!0),
                    P({ entry: e, status: "restoring" }),
                    (0, Y.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && P({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (P({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, h.P0)((0, f.o)(X.intl.string(q.default.q6iZ84), g.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (V.current = !1);
                        }));
            },
            [s],
        ),
        eE = (0, d.bG)([eh.A], () => eh.A.isBuilderPreviewMobile()),
        eT = X.intl.string(eE ? q.default["3uCc8U"] : q.default["+nzCxZ"]),
        e_ = i.useCallback(() => (0, W.GG)(!eE), [eE]),
        eM = (0, D.A)(s?.preview_application_id ?? null, t$.sd),
        eR = (0, t$.x1)(eM) && eM.data.proxyTicketRefreshing,
        eO = i.useCallback(() => {
            null == eM || eR || O.A.refreshProxyTicket(eM.id);
        }, [eM, eR]),
        eD = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eM?.id), (0, Y.Bn)(e), (0, t_.A)().leaveFrame(t)), l());
        }, [s, eM?.id, l]),
        eG = i.useCallback(() => {
            null != s && (c(!0), (0, Y.dv)(s.id, X.intl.string(q.default["2ejwtJ"])));
        }, [s]),
        ez = eW(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        a = eX(e);
                    null != a
                        ? (0, h.P0)((0, f.o)(a, g.Ck.FAILURE))
                        : (0, u.A)({
                              title: X.intl.formatToPlainString(q.default.XYZqZK, { name: s.name }),
                              subtitle: X.intl.string(q.default["6syXoH"]),
                              confirmText: X.intl.string(q.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await eq(t, e, X.intl.string(q.default.C7GU2r));
                                  } catch {
                                      (0, h.P0)((0, f.o)(X.intl.string(q.default["02GpNr"]), g.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eL = i.useCallback(() => {
            null != s && (0, tz.A)(s, r);
        }, [s, r]),
        eB = i.useCallback(async () => {
            if (null == M || L.current !== M) return;
            H.current?.abort();
            let e = new AbortController();
            ((H.current = e), _(null));
            try {
                await (0, W.U1)(M, e.signal);
            } catch {
            } finally {
                e.signal.aborted || H.current !== e || L.current !== M || _(M);
            }
        }, [M]);
    i.useEffect(
        () => (
            eB(),
            () => {
                (H.current?.abort(), (H.current = null));
            }
        ),
        [eB],
    );
    let eF = (0, Q.H)(s ?? null, U ?? null, r),
        eV = ((t = s?.application_id ?? null), (0, d.bG)([er.Ay], () => (null == t ? null : (0, ed.SH)(r, t)), [r, t])),
        eH = i.useMemo(() => (null == eV ? null : () => (0, z.pX)(tN.BVt.CHANNEL(r, eV))), [r, eV]),
        eU = i.useCallback(async () => {
            null != s && (await (0, Q.w)(s, eF));
        }, [eF, s]),
        eY = i.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eB();
        }, [eB, eU]),
        eK = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || Z || $
                ? null
                : {
                      ...(0, tM.p)({ applicationId: e, application: K ?? null, guildId: eF }),
                      onClose: () => {
                          eY();
                      },
                  };
        }, [$, eY, eF, Z, K, s?.preview_application_id]),
        eZ = eo ? { type: "permissions", authorizeProps: eK } : $ && null == U ? { type: "checking" } : void 0,
        e$ = (0, d.bG)([ef.Ay], () => null != M && ef.Ay.isProjectDeleting(M), [M]);
    i.useEffect(() => {
        ((null == s && o) || e$) && (0, z.pX)(tN.BVt.CHANNEL(r, tr.VV.VIBEGRATIONS));
    }, [r, s, o, e$]);
    let eQ = i.useMemo(() => ({ guildId: r, platform: t6, busy: $ || Z }), [r, $, Z]),
        eJ = (0, el.Ay)(M, eQ),
        e0 = eJ?.upToDate === !0 ? X.intl.string(q.default["5U1fkv"]) : (eJ?.disabledReason ?? null),
        e2 =
            null == eJ
                ? null
                : (0, n.jsx)("div", {
                      className: tQ.As,
                      children: (0, n.jsx)(k.m, {
                          text: e0,
                          asContainer: !0,
                          children: (0, n.jsx)(x.$, {
                              size: "sm",
                              variant: eJ.upToDate ? "secondary" : "primary",
                              loading: eJ.publishing,
                              disabled: eJ.disabled,
                              onClick: () => eJ.run("header"),
                              text: eJ.label,
                          }),
                      }),
                  }),
        e6 = (0, n.jsx)(tj, {
            title: s?.name ?? X.intl.string(q.default.F2dRba),
            breadcrumb: { title: X.intl.string(q.default.Xmvb23), onClick: l },
            actions:
                null == s
                    ? null
                    : (0, n.jsxs)("div", {
                          className: tQ.FO,
                          children: [
                              ea.showModeSwitch ? (0, n.jsx)(e9, { modes: ea.modes, mode: en, onChange: ei }) : null,
                              (0, n.jsx)(G.A.Icon, {
                                  icon: eE ? t2 : t0,
                                  tooltip: eT,
                                  "aria-label": eT,
                                  selected: eE,
                                  onClick: e_,
                              }),
                              (0, n.jsx)(G.A.Icon, {
                                  ref: ev,
                                  icon: tx.A,
                                  tooltip: eC,
                                  "aria-label": eC,
                                  selected: ek,
                                  disabled: ej,
                                  onClick: eA,
                              }),
                              "frame" === en ? (0, n.jsx)(eP.A, { frame: eM, controlProjectId: s.id }) : null,
                              (0, n.jsx)("div", { className: tQ.YJ }),
                              S
                                  ? (0, n.jsx)(G.A.Icon, {
                                        icon: C.BugIcon,
                                        tooltip: X.intl.string(q.default["8MLfBT"]),
                                        "aria-label": X.intl.string(q.default["8MLfBT"]),
                                        selected: j,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, n.jsx)(G.A.Icon, {
                                  icon: A.SettingsIcon,
                                  tooltip: X.intl.string(q.default.cWmjzs),
                                  "aria-label": X.intl.string(q.default.cWmjzs),
                                  onClick: () => (0, tl.A)(s.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tc, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: r,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ef.PV)(s),
                                  canRemix: (0, ef.H_)(s),
                                  onRefresh: (0, t$.x1)(eM) ? eO : void 0,
                                  isRefreshing: eR,
                                  onClose: eD,
                                  onExport: eG,
                                  onImport: ez.open,
                                  onRemix: eL,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, ew.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  a.e("964476"),
                                                  a.e("461590"),
                                              ]).then(a.bind(a, 84469));
                                              return (a) => (0, n.jsx)(t, { ...a, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      E?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (c(!0), N(!1), v(!1), b(!0));
                                            },
                                  onRestorePoints: () => {
                                      (c(!0), N(!1), b(!1), v(!0));
                                  },
                                  refreshApplicationId:
                                      ea.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ea.profileState
                                          ? es
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              eu
                                  ? null
                                  : (0, n.jsx)(G.A.Icon, { icon: tJ, tooltip: eg, "aria-label": eg, onClick: ey }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: tQ.nj,
        children: [
            ez.input,
            (0, n.jsx)("main", {
                className: tQ.JX,
                children:
                    null == s
                        ? (0, n.jsxs)("div", {
                              className: tQ.j5,
                              children: [
                                  e6,
                                  (0, n.jsxs)("div", {
                                      className: tQ.sD,
                                      children: [
                                          (0, n.jsx)(I.D, {
                                              variant: "heading-lg/semibold",
                                              children: X.intl.string(q.default.F2dRba),
                                          }),
                                          (0, n.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: X.intl.string(q.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: X.intl.string(q.default["42EdIV"]),
                                              onClick: () => (0, W.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(el.Qc.Provider, {
                              value: eQ,
                              children: (0, n.jsx)(
                                  ex.A,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ev,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: t$.sd,
                                      header: e6,
                                      chatOpen: m,
                                      onCloseChat: eb,
                                      chatHeaderAction: e2,
                                      versionHistoryOpen: p,
                                      onCloseVersionHistory: () => b(!1),
                                      restorePointsOpen: w,
                                      onCloseRestorePoints: () => v(!1),
                                      installScope: s.install_scope,
                                      debugOpen: S && j,
                                      onCloseDebug: eN,
                                      onRestoreVersion: eS,
                                      restoreState: E,
                                      previewReady: J,
                                      previewGate: eZ,
                                      availability: ea,
                                      activeMode: en,
                                      widgetApplicationId: es,
                                      onOpenPublishedApp: eH,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function t8(e) {
    let {
            projects: t,
            idea: s,
            guildId: l,
            submitting: r,
            createError: u,
            createDisabled: m,
            conjureTarget: c,
            onConjureTargetChange: p,
            eligibleGuilds: b,
            modelSettings: w,
            onModelSettingsChange: k,
            onSelectProject: v,
            onIdeaChange: C,
            onCreate: A,
            onCreateFromTemplate: I,
            onStartTemplate: R,
            onSubmitTemplate: O,
            onCancelTemplate: D,
            onSkipTemplate: z,
            onImportNewProject: L,
            importing: B,
        } = e,
        [F, H] = i.useState(() => ({ guildId: l, filter: tU(l) })),
        U = (F.guildId === l ? F.filter : tU(l)) ?? l,
        Y = i.useCallback(
            (e) => {
                (tH.set(l, e), H({ guildId: l, filter: e }));
            },
            [l],
        ),
        Z = (0, d.yK)(
            [V.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = V.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, l),
            [t, l],
        ),
        $ = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: X.intl.string(q.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tF,
                    leading: eZ.UserIcon,
                    label: X.intl.string(q.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tV,
                    leading: e$.R,
                    label: X.intl.string(q.default["qqH+iN"]),
                },
                ...Z.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tL.Ay, { guild: e, size: tL.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [Z],
        ),
        Q = (0, d.yK)(
            [ef.Ay, V.A],
            () => {
                let e = tY(U);
                if (null != e) return ef.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(V.A.getGuilds()))
                    ef.Ay.hasFetchedGuildProjects(e.id) && t.push(...ef.Ay.getSharedProjects(e.id));
                return t;
            },
            [U],
        );
    i.useEffect(() => {
        let e = tY(U);
        null == e || ef.Ay.hasFetchedGuildProjects(e) || (0, W.hF)(e);
    }, [U]);
    let ee = i.useMemo(
            () =>
                Q.filter((e) => tq(e, U)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Q, U],
        ),
        et = i.useMemo(
            () => [
                {
                    label: X.intl.string(q.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tB,
                            label: X.intl.string(q.default.UXnPhI),
                            leading: eZ.UserIcon,
                        },
                        ...b.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tL.Ay, { guild: e, size: tL.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [b],
        ),
        ea = i.useMemo(
            () =>
                t
                    .filter((e) => tq(e, U))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, U],
        ),
        en = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ed.X0)(e, l)
                    ? v(e.id)
                    : (0, h.P0)((0, f.o)(X.intl.string(q.default["wY7I+H"]), g.Ck.MESSAGE));
            },
            [l, v],
        ),
        ei = X.intl.string(q.default.TU9IGR),
        es = [
            X.intl.string(q.default["E+Q26x"]),
            X.intl.string(q.default["06/jqP"]),
            X.intl.string(q.default["3gSfUa"]),
        ],
        eo = [
            {
                id: "moderation-bot",
                name: X.intl.string(q.default.idRAwG),
                description: X.intl.string(q.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: X.intl.string(q.default.BLDsiz),
                description: X.intl.string(q.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: X.intl.string(q.default["+abXa8"]),
                description: X.intl.string(q.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: X.intl.string(q.default.ieAgex),
                description: X.intl.string(q.default["5yvj+f"]),
            },
        ],
        el = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: l,
                        eligibleGuilds: b,
                        onStart: (t) => R(e.name, t),
                        onSubmit: (t, a, n) => O(e, t, a, n),
                        onCancel: D,
                        onSkip: z,
                    }),
                    (0, ew.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                a.bind(a, 248702),
                            );
                            return (a) => (0, n.jsx)(e, { ...a, ...t });
                        },
                        { modalKey: "VibegrationsTemplateWizardModal" },
                    ));
                }
                I(e);
            },
            [b, l, D, I, z, R, O],
        ),
        er = X.intl.string(q.default.FYK2xQ),
        eu = X.intl.string(q.default["/SUK82"]),
        em = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || A());
            },
            [m, A],
        ),
        ec = tY(U) ?? l,
        ep = (0, d.bG)([ef.Ay], () => ef.Ay.getGuildProjectsFetchState(ec), [ec]),
        eh = (0, d.bG)([ef.Ay], () => ef.Ay.getGuildProjectsFetchState(l), [l]),
        [eg, ey] = i.useState(tW),
        eb = i.useMemo(() => tX.w.get(tZ(l)) ?? !1, [l]),
        ek = "success" === eh,
        ev = (0, d.yK)([ef.Ay], () => ef.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => tq(e, l)),
        ex = eg ?? (!!ev || "error" === eh || (!ek && eb));
    i.useEffect(() => {
        ek && tX.w.set(tZ(l), ev);
    }, [ek, ev, l]);
    let eA = i.useCallback((e) => {
            (tX.w.set(tK, e), ey(e));
        }, []),
        eI = i.useCallback(() => eA(!ex), [eA, ex]),
        eP = i.useCallback(() => eA(!1), [eA]),
        eT = X.intl.string(q.default.jDPFDh),
        e_ = ex ? eT : X.intl.string(q.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(tQ.nj, tQ.a0),
        children: (0, n.jsxs)("div", {
            className: tQ.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: tQ.ps,
                    children: [
                        (0, n.jsx)(tj, {
                            title: X.intl.string(q.default.Xmvb23),
                            actions: (0, n.jsx)(G.A.Icon, {
                                icon: N.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: ex,
                                onClick: eI,
                            }),
                        }),
                        (0, n.jsx)(S.Ip, {
                            className: tQ.Yy,
                            children: (0, n.jsx)("div", {
                                className: tQ.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(tQ.Qs, tQ.Ix),
                                    children: [
                                        (0, n.jsx)(tP, {}),
                                        (0, n.jsx)(eB, {}),
                                        (0, n.jsxs)("section", {
                                            className: tQ.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: tQ.G9,
                                                    children: [
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: er,
                                                        }),
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: X.intl.string(q.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eE, {
                                                    listClassName: tQ.Aw,
                                                    radius: eN,
                                                    children: eo.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: tQ.EA,
                                                                children: (0, n.jsxs)(eC, {
                                                                    disabled: r,
                                                                    ariaLabel: X.intl.formatToPlainString(
                                                                        q.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tQ.nx, tQ.rz),
                                                                    onClick: () => el(e),
                                                                    children: [
                                                                        (0, n.jsx)(y.E, {
                                                                            className: tQ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, n.jsx)(y.E, {
                                                                            className: tQ.BK,
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
                                        (0, n.jsxs)("section", {
                                            className: tQ.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: tQ.G9,
                                                    children: [
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: X.intl.string(q.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eE, {
                                                    listClassName: tQ.Aw,
                                                    radius: eS,
                                                    children: es.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: tQ.EA,
                                                                children: (0, n.jsx)(eC, {
                                                                    disabled: r,
                                                                    className: tQ.nx,
                                                                    onClick: () => A(e),
                                                                    children: (0, n.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tQ.un,
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
                                        (0, n.jsx)(ej, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: tQ.Yl,
                            children: (0, n.jsxs)("div", {
                                className: o()(tQ.Qs, tQ.DA),
                                children: [
                                    (0, n.jsx)(E.f, {
                                        label: ei,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: s,
                                        placeholder: ei,
                                        error: u,
                                        onChange: C,
                                        onKeyDown: em,
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: tQ.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: tQ.gH,
                                                children: (0, n.jsx)(P.l, {
                                                    selectionMode: "single",
                                                    label: X.intl.string(q.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: X.intl.string(q.default.MLg0S8),
                                                    options: et,
                                                    value: c,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, n.jsx)(e0.A, {
                                                settings: w ?? K.v0,
                                                tiers: K.qf,
                                                choices: (0, J.e)()
                                                    ? {
                                                          main: [...K.S8.main, ...K.wF.main],
                                                          subagent: [...K.S8.subagent, ...K.wF.subagent],
                                                          thinking: K.S8.thinking,
                                                      }
                                                    : K.S8,
                                                disabled: r,
                                                onChange: k,
                                            }),
                                            (0, n.jsx)(x.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: X.intl.string(X.t.CumH4u),
                                                disabled: m,
                                                loading: r,
                                                onClick: () => A(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("aside", {
                    className: tQ.pA,
                    hidden: !ex,
                    "aria-label": X.intl.string(q.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: tQ.IR,
                            children: [
                                (0, n.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tQ.RM,
                                    children: X.intl.string(q.default.Bo5fE3),
                                }),
                                (0, n.jsxs)("div", {
                                    className: tQ.Ss,
                                    children: [
                                        (0, n.jsx)(eJ, { importing: B, onImport: L }),
                                        (0, n.jsx)(G.A.Icon, { icon: T.P, tooltip: eT, "aria-label": eT, onClick: eP }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)(S.Ip, {
                            className: tQ.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: tQ.Vw,
                                    children: (0, n.jsx)(P.l, {
                                        selectionMode: "single",
                                        label: X.intl.string(q.default.mvtKAm),
                                        hideLabel: !0,
                                        options: $,
                                        value: U,
                                        onSelectionChange: Y,
                                    }),
                                }),
                                (0, n.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tQ.wE,
                                    children: X.intl.string(q.default.YnAFtT),
                                }),
                                ("unattempted" === ep || "loading" === ep) && 0 === ea.length
                                    ? (0, n.jsx)("div", { className: tQ.E8, children: (0, n.jsx)(j.y, {}) })
                                    : "error" === ep && 0 === ea.length
                                      ? (0, n.jsxs)("div", {
                                            className: tQ.E8,
                                            children: [
                                                (0, n.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tQ.JS,
                                                    children: X.intl.string(q.default["IN/HRP"]),
                                                }),
                                                (0, n.jsx)(x.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: X.intl.string(q.default["42EdIV"]),
                                                    onClick: () => (0, W.hF)(ec),
                                                }),
                                            ],
                                        })
                                      : 0 === ea.length
                                        ? (0, n.jsx)("div", {
                                              className: tQ.D1,
                                              children: (0, n.jsxs)("div", {
                                                  className: tQ.ST,
                                                  children: [
                                                      (0, n.jsx)(_.D, { size: "lg", color: M.A.colors.TEXT_SUBTLE }),
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tQ.sI,
                                                          children: X.intl.string(q.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: tQ.Dq,
                                              children: ea.map((e) =>
                                                  (0, n.jsx)(
                                                      t1,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, tz.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                ee.length > 0
                                    ? (0, n.jsxs)("div", {
                                          className: tQ.qx,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tQ.uc,
                                                  children: [
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: X.intl.string(q.default.jrCnUc),
                                                      }),
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: X.intl.string(q.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: tQ.Dq,
                                                  children: ee.map((e) =>
                                                      (0, n.jsx)(
                                                          t1,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => en(e),
                                                              onRemix: () => (0, tz.A)(e, l),
                                                              shared: !0,
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
function t7(e) {
    let t,
        { guildId: a, projectId: s } = e,
        o = (0, d.yK)([ef.Ay], () => ef.Ay.getOwnedProjects()),
        l = (0, d.yK)([F.Ay], () => F.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, d.bG)(
            [V.A, H.A],
            () => {
                let e = V.A.getGuild(a);
                return null != e && H.A.can(tN.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [u, m] = i.useState(""),
        c = s ?? null,
        [p, y] = i.useState(!1),
        [b, w] = i.useState(null),
        k = (0, eo._)("VibegrationsScreen"),
        [v, j] = i.useState(null);
    i.useEffect(() => {
        j(null);
    }, [a]);
    let x = i.useMemo(() => (k.some((e) => e.id === a) ? a : tB), [k, a]),
        C = v ?? x,
        A = C === tB ? "user" : "guild",
        I = C === tB ? a : C,
        [N, S] = i.useState(null);
    (i.useEffect(() => {
        (0, W.hF)(a);
    }, [a, l, r]),
        i.useEffect(() => {
            (0, W.dm)(a, c);
        }, [a, c]));
    let E = i.useCallback(
            async (e, t, a) => {
                let n = await (0, W.gA)({ guild_id: t, install_scope: a });
                ((0, Y.Hc)(n),
                    (0, Y.r2)(n, N ?? K.v0),
                    e(n),
                    (0, z.pX)(tN.BVt.CHANNEL(t, tr.VV.VIBEGRATIONS, n)),
                    m(""),
                    S(null));
            },
            [N],
        ),
        P = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    a = eg({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), y(!0), w(null));
                    try {
                        await E((e) => (0, Y.dv)(e, t), I, A);
                    } catch (e) {
                        w((0, $.Xd)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [E, A, I, u, p],
        ),
        T = i.useCallback(
            async (e) => {
                if (!p) {
                    (y(!0), w(null));
                    try {
                        await E(
                            (t) => {
                                var a;
                                (0, Y.dv)(
                                    t,
                                    ((a = e.name),
                                    X.intl.formatToPlainString(q.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            I,
                            A,
                        );
                    } catch (e) {
                        w((0, $.Xd)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [E, A, I, p],
        ),
        _ = i.useCallback(
            async (e, t) => {
                let a = await (0, W.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, Y.Hc)(a), (0, Y.r2)(a, N ?? K.v0), (0, Y.dv)(a, (0, ee.v8)(e)), a);
            },
            [N],
        ),
        M = i.useCallback(async (e, t, a, n) => {
            if (ef.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, W.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new $.uQ((0, $.hj)(e), e.status);
            }
            ((0, Y.dv)(t, n, void 0, { templateId: e.id }),
                (0, eu.R6)(t),
                (0, z.pX)(tN.BVt.CHANNEL(a, tr.VV.VIBEGRATIONS, t)),
                S(null));
        }, []),
        R = i.useCallback((e) => {
            (0, W.xx)(e).catch(() => void 0);
        }, []),
        O = i.useCallback(
            (e) => {
                let t = ef.Ay.getProject(e)?.guild_id ?? a;
                ((0, z.pX)(tN.BVt.CHANNEL(t, tr.VV.VIBEGRATIONS, e)), S(null));
            },
            [a],
        ),
        [D, G] = i.useState(!1),
        L = i.useCallback(
            async (e, t) => {
                let n = eX(e);
                if (null != n) return void (0, h.P0)((0, f.o)(n, g.Ck.FAILURE));
                G(!0);
                let i = null;
                try {
                    ((i = await (0, W.gA)({ guild_id: a, install_scope: t })),
                        (0, Y.Hc)(i),
                        (0, Y.r2)(i, N ?? K.v0),
                        await eq(i, e, X.intl.string(q.default.KjEtrZ)),
                        (0, z.pX)(tN.BVt.CHANNEL(a, tr.VV.VIBEGRATIONS, i)),
                        S(null));
                } catch {
                    (null != i && (await (0, W.xx)(i).catch(() => void 0)),
                        (0, h.P0)((0, f.o)(X.intl.string(q.default["02GpNr"]), g.Ck.FAILURE)));
                } finally {
                    G(!1);
                }
            },
            [a, N],
        ),
        B = i.useCallback(
            (e) => {
                (0, z.pX)(tN.BVt.CHANNEL(a, tr.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        U = i.useCallback(() => {
            (0, z.pX)(tN.BVt.CHANNEL(a, tr.VV.VIBEGRATIONS));
        }, [a]),
        Z = i.useCallback((e) => {
            (m(e), w(null));
        }, []),
        Q = (0, d.bG)(
            [ef.Ay],
            () => {
                if (null == c) return null;
                let e = ef.Ay.getProject(c);
                return null == e || (0, ef.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        J = (0, d.bG)([ef.Ay], () => ef.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, n.jsx)(t9, { project: Q, projectsLoaded: J, onBack: U, guildId: a }, c)
        : (0, n.jsx)(t8, {
              projects: o,
              modelSettings: N,
              onModelSettingsChange: S,
              idea: u,
              guildId: a,
              submitting: p,
              createError: b,
              createDisabled: "idea" === (t = eg({ idea: u, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: B,
              onIdeaChange: Z,
              onCreate: P,
              onCreateFromTemplate: T,
              onStartTemplate: _,
              onSubmitTemplate: M,
              onCancelTemplate: R,
              onSkipTemplate: O,
              onImportNewProject: L,
              importing: D,
              conjureTarget: C,
              onConjureTargetChange: j,
              eligibleGuilds: k,
          });
}
