(a.r(t), a.d(t, { default: () => t3 }), a(321073));
var n = a(477900),
    s = a(582128),
    i = a(503698),
    o = a.n(i),
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
    S = a(297264),
    I = a(97893),
    N = a(364522),
    P = a(103557),
    E = a(150934),
    T = a(691885),
    R = a(789645),
    _ = a(152367),
    M = a(661531),
    O = a(627363),
    D = a(625180),
    G = a(672929),
    z = a(742589),
    B = a(976860),
    F = a(402860),
    L = a(885386),
    V = a(696451),
    H = a(71393),
    U = a(576705),
    Y = a(486020),
    q = a(277977),
    K = a(759967),
    X = a(375708),
    W = a(673724),
    Z = a(948230),
    $ = a(637708),
    Q = a(936494),
    J = a(443741),
    ee = a(208137),
    et = a(993396),
    ea = a(822835),
    en = a(287809),
    es = a(427262),
    ei = a(783791),
    eo = a(725592),
    el = a(459514),
    er = a(455435),
    ed = a(808728),
    eu = a(683180),
    em = a(66708),
    ec = a(74029),
    ep = a(559676),
    eh = a(58551),
    ef = a(805332),
    eg = a(972786);
function ey(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var eb = a(58703),
    ew = a(127181),
    ek = a(192308);
function ev() {
    (0, ek.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ej = a(413927);
function ex() {
    let e = (0, ew.TH)("desktop");
    if (0 === e.length) return null;
    let t = X.intl.string(K.default.x07mpp);
    return (0, n.jsxs)("section", {
        className: ej.rN,
        "aria-label": t,
        children: [
            (0, n.jsxs)("div", {
                className: ej.bZ,
                children: [
                    (0, n.jsx)(y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: X.intl.string(K.default.h5CwHI),
                    }),
                ],
            }),
            (0, n.jsx)("ol", {
                className: ej.V,
                children: e.map((e) =>
                    (0, n.jsxs)(
                        "li",
                        {
                            className: ej.S3,
                            children: [
                                (0, n.jsxs)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ej.VO,
                                    children: [
                                        (0, eb.i$)(r()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ew.MZ)(e) ? ` \xb7 ${X.intl.string(K.default.vvxuUI)}` : null,
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
            (0, ew.B)("desktop")
                ? (0, n.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: X.intl.string(K.default.YWxThz),
                      onClick: ev,
                  })
                : null,
        ],
    });
}
var eC = a(347842);
function eA(e) {
    let { className: t, ariaLabel: a, disabled: s, onClick: i, children: o } = e;
    return (0, n.jsx)(w.D, { "aria-disabled": s, "aria-label": a, className: t, onClick: s ? void 0 : i, children: o });
}
var eS = a(865665),
    eI = a(568190);
let eN = { x: 5, y: 7 },
    eP = { x: 5, y: 4 };
function eE(e) {
    let { listClassName: t, radius: a, children: i } = e,
        [o, l] = s.useState(!1);
    return (0, n.jsxs)("div", {
        className: eI.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: i }),
            o ? (0, n.jsx)(eS.C, { area: 64, radius: a, color: M.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eT = a(210744),
    eR = a(864970),
    e_ = a(707554),
    eM = a(770178),
    eO = a(765548),
    eD = a(597643),
    eG = a(885576),
    ez = a(236730);
let eB = "heading-xxl/semibold",
    eF = !1;
function eL() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        i = (0, eO.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eM.w)(i, [], { fireOnMount: !0 }),
        l = (0, d.bG)([eD.A], () => eD.A.isConnected());
    s.useEffect(() => {
        if (!l || !t || eF) return;
        let a = !1,
            n = 0;
        function s() {
            a ||
                (n = window.setTimeout(() => {
                    ((eF = !0), e.current?.play());
                }, 400));
        }
        let i = document.fonts;
        return (
            null == i ? s() : i.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(s, s),
            () => {
                ((a = !0), window.clearTimeout(n));
            }
        );
    }, [l, t]);
    let r = (0, d.bG)([eG.A], () => eG.A.isIdle()),
        u = s.useRef(r);
    s.useEffect(() => {
        let t = u.current && !r;
        ((u.current = r), t && eF && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = X.intl.string(K.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: ez.x,
        children: t
            ? (0, n.jsx)(e_.H, { children: (0, n.jsx)(eR.o, { ref: e, text: m, variant: eB, delay: null }) })
            : (0, n.jsx)(S.D, { variant: eB, children: m }),
    });
}
var eV = a(922016),
    eH = a(980707),
    eU = a(477782),
    eY = a(81369),
    eq = a(402879);
async function eK(e, t, a) {
    (0, q.Hc)(e);
    let n = await (0, q.vX)(e, t);
    (0, q.dv)(e, a, [n]);
}
function eX(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, W.x5)(e.size, t)
        ? null
        : X.intl.formatToPlainString(K.default.AzziHF, { size: (0, W.ZJ)((0, W.yr)(t)) });
}
async function eW(e, t) {
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
        s = await (0, q.cS)(e, n);
    await (0, eq.F)(s, n);
}
function eZ(e) {
    let t = s.useRef(null),
        a = s.useCallback(
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
var e$ = a(950305),
    eQ = a(664121);
let eJ = [
    { value: "user", icon: e$.UserIcon, nameMessage: K.default.iqXIRN },
    { value: "guild", icon: eQ.R, nameMessage: K.default.LdgKdI },
];
function e0(e) {
    let { importing: t, onImport: a } = e,
        i = s.useRef(null),
        o = eZ(s.useCallback((e) => a(e, "user"), [a])),
        l = eZ(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eV.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: eV.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eH.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": X.intl.string(K.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eU.rX, {
                            label: X.intl.string(K.default.MLg0S8),
                            children: eJ
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: X.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        eU.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: s } = a;
                    return (0, n.jsx)(x.$, {
                        ...e,
                        buttonRef: i,
                        variant: "secondary",
                        size: "sm",
                        icon: eY.H,
                        text: X.intl.string(K.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": s,
                    });
                },
            }),
            o.input,
            l.input,
        ],
    });
}
var e2 = a(379307),
    e6 = a(629584),
    e1 = a(753514),
    e9 = a(491920);
function e8(e) {
    let { modes: t, mode: a, onChange: i, className: l } = e,
        r = s.useMemo(() => t.map((e) => ({ value: e, name: (0, e1.kZ)(e), "aria-controls": (0, e1.z3)(e) })), [t]),
        d = s.useCallback(
            (e) => {
                i(e.value);
            },
            [i],
        );
    return null == a
        ? null
        : (0, n.jsx)(e6.I, {
              role: "tablist",
              look: "pill",
              className: o()(e9.b, l),
              optionClassName: e9.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var e7 = a(663417),
    e3 = a(70688),
    e4 = a(173936),
    e5 = a(473935),
    te = a(408278),
    tt = a(365199),
    ta = a(7437),
    tn = a(147036),
    ts = a(957565),
    ti = a(123917),
    to = a(557875);
let tl = new Set();
var tr = a(976814),
    td = a(746080),
    tu = a(793712);
let tm = [];
function tc(e) {
    (0, h.P0)((0, f.o)(e, g.Ck.FAILURE));
}
function tp(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: i,
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
            previewProjectId: S,
            trigger: I = "header",
        } = e,
        N = s.useRef(null),
        { pending: P, refresh: E } = (0, ta.A)(C ?? null),
        { pending: T, connect: R } = (function (e, t) {
            let [a, n] = s.useState(tl),
                i = s.useRef(tl),
                o = s.useCallback((e) => {
                    ((i.current = (0, to.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, to.K9)(i.current, a.type);
                        async function l() {
                            let n = await (0, q.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, ti.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, to.rq)(n.error)
                                          ? X.intl.string(K.default.avu1u4)
                                          : X.intl.string(K.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(S ?? null, tc),
        _ = (0, d.bG)([q.Ay], () => (null == S ? tm : q.Ay.getDeclaredConnections(S))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: s } = e,
                i = [];
            for (let { connection: e, offer: o } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: X.intl.string(K.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                i.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: X.intl.formatToPlainString(K.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: s.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: X.intl.formatToPlainString(K.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: P,
            offers: s.useMemo(() => (0, to.Xl)(_), [_]),
            connectPending: T,
        }),
        O = s.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        D = null != p && r,
        G = l && null != c,
        B = D || null != m || G || null != y || null != b || null != w,
        F = ts.p5 && null != i,
        L = ts.p5;
    return null != v || null != x || B || L || l
        ? (0, n.jsx)(eV.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: eV.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, n.jsxs)(eH.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": X.intl.string(X.t.ogxXGq),
                      onClose: s,
                      onSelect: s,
                      children: [
                          null != v || null != x
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        null != v
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "refresh",
                                                  icon: e7.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e7.RefreshIcon },
                                                  label: X.intl.string(K.default.xKexN1),
                                                  disabled: j,
                                                  action: v,
                                              })
                                            : null,
                                        null != x
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "close",
                                                  icon: e3.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: e3.DoorExitIcon },
                                                  label: X.intl.string(K.default.Ea0Wrr),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          M.length > 0
                              ? (0, n.jsx)(eU.rX, {
                                    children: M.map((e) =>
                                        (0, n.jsx)(
                                            eU.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : O.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          B
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        D
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "remix",
                                                  label: X.intl.string(K.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != m
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "export",
                                                  label: X.intl.string(K.default["7iamDC"]),
                                                  action: m,
                                              })
                                            : null,
                                        G
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "import",
                                                  label: X.intl.string(K.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != y
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "connect-tool",
                                                  label: X.intl.string(K.default["3qelzD"]),
                                                  action: y,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "version-history",
                                                  label: X.intl.string(K.default.jAWwzi),
                                                  action: b,
                                              })
                                            : null,
                                        null != w
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "restore-points",
                                                  label: X.intl.string(K.default.FRjicO),
                                                  action: w,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          L
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        F
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "copy-link",
                                                  label: X.intl.string(X.t.WqhZss),
                                                  icon: e4.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: e4.LinkIcon },
                                                  action: () =>
                                                      (0, ts.C)((0, tn.n)(i, td.VV.VIBEGRATIONS, t), () =>
                                                          (0, h.P0)(
                                                              (0, f.o)(X.intl.string(X.t["L/PwZf"]), g.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, n.jsx)(eU.Dr, {
                                            id: "copy-project-id",
                                            label: X.intl.string(K.default.b4TqpT),
                                            icon: e5.L,
                                            leadingAccessory: { type: "icon", icon: e5.L },
                                            action: () =>
                                                (0, ts.C)(t, () =>
                                                    (0, h.P0)((0, f.o)(X.intl.string(K.default.WOKsTg), g.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          l
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        (0, n.jsx)(eU.Dr, {
                                            id: "settings",
                                            label: X.intl.string(K.default["xhcY+n"]),
                                            icon: A.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                            action: () =>
                                                (0, tr.A)(t, { guildId: o ?? i, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, n.jsx)(eU.Dr, {
                                            id: "delete",
                                            label: X.intl.string(X.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: X.intl.formatToPlainString(K.default.ZokHVz, { name: a }),
                                                    subtitle: X.intl.string(K.default.NmF939),
                                                    confirmText: X.intl.string(X.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, Z.K)(t, () =>
                                                            (0, h.P0)(
                                                                (0, f.o)(X.intl.string(K.default.tqKZCi), g.Ck.FAILURE),
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
                      { isShown: s } = t;
                  return (0, n.jsx)("div", {
                      ref: N,
                      className: tu.h,
                      children:
                          "iconButton" === I
                              ? (0, n.jsx)(k.m, {
                                    text: X.intl.string(X.t["UKOtz+"]),
                                    children: (0, n.jsx)(te.K, {
                                        icon: tt.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": X.intl.string(X.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": s,
                                        onClick: a,
                                    }),
                                })
                              : (0, n.jsx)(z.A.Icon, {
                                    icon: tt.MoreHorizontalIcon,
                                    tooltip: X.intl.string(X.t["UKOtz+"]),
                                    "aria-label": X.intl.string(X.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": s,
                                    selected: s,
                                    onClick: a,
                                }),
                  });
              },
          })
        : null;
}
var th = a(778712),
    tf = a(97808),
    tg = a(104171),
    ty = a(889227),
    tb = a(350086);
let tw = th._3.SIZE_16;
function tk(e) {
    return e instanceof ty.A
        ? (0, n.jsx)(tf.eu, { src: e.getAvatarURL(void 0, (0, th.FT)(tw)), size: tw, "aria-hidden": !0 })
        : null;
}
function tv(e) {
    let { creator: t, className: a } = e,
        s = [t.creator, ...t.collaborators],
        i = s.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(tb.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tg.Ay, { users: s.slice(0, 3), max: 3, size: tg.DN.SIZE_16, renderUser: tk }),
            i > 0 ? (0, n.jsxs)(y.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var tj = a(769979);
function tx(e) {
    let { title: t, actions: a, breadcrumb: s } = e;
    return (0, n.jsx)(z.A, {
        hideSearch: !0,
        toolbar: a,
        className: tj.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: tj.QF,
            children: [
                (0, n.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: M.A.colors.TEXT_STRONG,
                    className: tj.Kk,
                }),
                null != s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(z.A.Title, { onClick: s.onClick, children: s.title }),
                              (0, n.jsx)(z.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(z.A.Title, { className: tj.Qw, wrapperClassName: tj.DD, children: t }),
            ],
        }),
    });
}
var tC = a(73432),
    tA = a(683071),
    tS = a(47167),
    tI = a(994500),
    tN = a(652215);
let tP = "conjuring-help";
var tE = a(107148);
function tT() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, d.cf)([en.default, H.A, ed.Ay, tI.A], () => {
                let e = en.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of H.A.getGuildsArray()) {
                    if (!t.features.has(tN.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = ed.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tS.m1)(t, en.default, tI.A) === tP;
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
        t = s.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, B.pX)(tN.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, ti.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: tE.l,
              children: (0, n.jsx)(tA.w, {
                  type: "info",
                  iconAlign: "center",
                  children: X.intl.format(K.default["4BsHmp"], { channel: tP, onNavigate: t }),
              }),
          });
}
var tR = a(321593),
    t_ = a(580954),
    tM = a(227189),
    tO = a(189213),
    tD = a(145216);
function tG(e) {
    let { reason: t, transitionState: a, onClose: s } = e,
        i = t === tD.H.PERMISSIONS;
    return (0, n.jsx)(tO.a, {
        transitionState: a,
        onClose: s,
        title: X.intl.string(i ? K.default.Rtlv25 : K.default["+UouPe"]),
        subtitle: X.intl.string(i ? K.default["nDQB/b"] : K.default["E0QD++"]),
        size: "sm",
        actions: [{ text: X.intl.string(i ? X.t.BddRzS : K.default["+Zh4FA"]), variant: "primary", onClick: s }],
    });
}
var tz = a(480007),
    tB = a(584936),
    tF = a(548118);
let tL = "user",
    tV = "user",
    tH = "no-server",
    tU = new Map();
function tY(e) {
    return tU.get(e) ?? null;
}
function tq(e) {
    switch (e) {
        case "all":
        case tV:
        case tH:
            return null;
        default:
            return e;
    }
}
function tK(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tV:
            return "user" === e.install_scope;
        case tH:
            return null == (0, $.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tX = a(506774);
let tW = "VibegrationsProjectsPanelOpen";
function tZ() {
    return tX.w.get(tW) ?? null;
}
function t$(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tQ = a(165610),
    tJ = a(352978);
function t0(e) {
    return (0, n.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function t2(e) {
    return (0, n.jsx)(c.u, { ...e, size: "custom", width: 20, height: 20 });
}
function t6(e) {
    return (0, n.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
let t1 = {
    showPublishBlocked: function (e) {
        (0, ek.openModal)((t) => (0, n.jsx)(tG, { ...t, reason: e }));
    },
    openPublishNotes: tz.A,
    showError: (e) => (0, h.P0)((0, f.o)(e, g.Ck.FAILURE)),
    openProfile: (e) => {
        (0, F.openUserProfileModal)({ userId: e });
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
function t9(e) {
    var t;
    let a,
        i,
        l,
        m,
        c,
        p,
        x,
        C,
        A,
        S,
        { project: I, guildId: N, onSelect: P, onRemix: E, shared: T = !1 } = e,
        R =
            ((a = I.id),
            (i = I.name),
            (l = s.useRef(!1)),
            (m = s.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, h.P0)((0, f.o)(X.intl.formatToPlainString(K.default.u9TapG, { name: i }), g.Ck.MESSAGE)),
                    eW(a, i)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, h.P0)(
                                    (0, f.o)(
                                        409 === (t = e instanceof q._v ? e.status : null)
                                            ? X.intl.string(K.default.uB40Hz)
                                            : 404 === t
                                              ? X.intl.string(K.default.wCq2jC)
                                              : X.intl.string(K.default.G2GqyP),
                                        g.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [a, i])),
            {
                onExport: m,
                onImport: (c = eZ(
                    s.useCallback(
                        (e) => {
                            let t = eX(e);
                            null != t
                                ? (0, h.P0)((0, f.o)(t, g.Ck.FAILURE))
                                : (0, u.A)({
                                      title: X.intl.formatToPlainString(K.default.XYZqZK, { name: i }),
                                      subtitle: X.intl.string(K.default["6syXoH"]),
                                      confirmText: X.intl.string(K.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, B.pX)(tN.BVt.CHANNEL(N, td.VV.VIBEGRATIONS, a));
                                          try {
                                              await eK(a, e, X.intl.string(K.default.C7GU2r));
                                          } catch {
                                              (0, h.P0)((0, f.o)(X.intl.string(K.default["02GpNr"]), g.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [a, i, N],
                    ),
                )).open,
                importInput: c.input,
            }),
        _ = I.preview_application_id ?? I.application_id,
        { data: M } = (0, O.YY)(_),
        D = M?.icon == null ? null : Y.Ay.getApplicationIconURL({ id: _, icon: M.icon, size: 40 }),
        G =
            null == I.updated_at
                ? null
                : X.intl.formatToPlainString(K.default.oMDaqr, { time: r()(I.updated_at).fromNow() }),
        z = (0, $.HC)(I),
        F =
            (0, d.bG)([H.A], () => (null == z ? null : (H.A.getGuild(z)?.name ?? null)), [z]) ??
            X.intl.string(K.default["qqH+iN"]),
        L = (0, d.bG)([eg.Ay], () => eg.Ay.isProjectDeleting(I.id), [I.id]),
        V =
            ((t = T ? I : null),
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
            s.useEffect(() => {
                null != x && ((0, eo.Y)(x), C.forEach(eo.Y));
            }, [x, C]),
            (A = (0, d.bG)([en.default], () => (null == x ? null : en.default.getUser(x)), [x])),
            (S = (0, d.yK)([en.default], () => C.map((e) => en.default.getUser(e)).filter((e) => null != e), [C])),
            s.useMemo(
                () =>
                    null == A
                        ? null
                        : {
                              creator: A,
                              collaborators: S,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? X.intl.formatToPlainString(K.default.TwgkQe, { creator: e })
                                      : X.intl.formatToPlainString(K.default.yZ9HPM, {
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
                                  (0, es.mG)(A),
                                  S.map((e) => (0, es.mG)(e)),
                              ),
                          },
                [A, S],
            )),
        U = s.useId(),
        W = (0, n.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: tJ.j1, children: I.name }),
        Z =
            null == D
                ? (0, n.jsx)("div", {
                      className: tJ.a8,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(b.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, n.jsx)("img", { alt: "", src: D, className: tJ.VJ });
    return (0, n.jsxs)("div", {
        className: o()(tJ.OY, { [tJ.Wy]: L }),
        "aria-busy": L,
        children: [
            (0, n.jsx)(tR.Ay, { projectId: I.id }),
            (0, n.jsxs)(w.D, {
                className: tJ.W6,
                onClick: L ? void 0 : P,
                tabIndex: L ? -1 : void 0,
                "aria-describedby": null != V ? U : void 0,
                children: [
                    Z,
                    (0, n.jsxs)("div", {
                        className: tJ.MM,
                        children: [
                            (0, n.jsxs)("div", {
                                className: tJ.Ub,
                                children: [
                                    null != V ? (0, n.jsx)(k.m, { text: V.label, ariaHidden: !0, children: W }) : W,
                                    null == V || L ? null : (0, n.jsx)(tv, { creator: V, className: tJ.rb }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: tJ.h3,
                                children: [
                                    (0, n.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tJ.Wb,
                                        children: L ? X.intl.string(K.default.EwXXks) : F,
                                    }),
                                    null == G || L
                                        ? null
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: tJ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tJ.zM,
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
            null != V ? (0, n.jsx)(v.A, { id: U, children: V.label }) : null,
            (0, n.jsx)("div", {
                className: tJ.M2,
                children: L
                    ? (0, n.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: tJ.Pl,
                          children: [
                              (0, n.jsx)(tp, {
                                  projectId: I.id,
                                  projectName: I.name,
                                  guildId: N,
                                  projectGuildId: I.guild_id,
                                  isOwner: (0, eg.PV)(I),
                                  canRemix: (0, eg.H_)(I),
                                  onRemix: E,
                                  onExport: R.onExport,
                                  onImport: R.onImport,
                                  trigger: "iconButton",
                              }),
                              R.importInput,
                          ],
                      }),
            }),
        ],
    });
}
function t8(e) {
    var t;
    let { project: i, projectsLoaded: o, onBack: l, guildId: r } = e,
        [m, c] = s.useState(!0),
        [p, b] = s.useState(!1),
        [w, v] = s.useState(!1),
        [j, I] = s.useState(!1),
        N = L.Q_.useSetting(),
        [P, E] = s.useState(null),
        [T, R] = s.useState(null),
        _ = i?.id ?? null,
        M = s.useRef(_),
        F = s.useRef(!0),
        V = s.useRef(!1),
        H = s.useRef(null);
    ((M.current = _),
        s.useEffect(
            () => (
                (F.current = !0),
                () => {
                    F.current = !1;
                }
            ),
            [],
        ));
    let U = (0, d.bG)([eg.Ay], () => (null == _ ? null : eg.Ay.getIntegrationStatus(_)), [_]),
        { data: Y, isLoading: W } = (0, O.YY)(i?.preview_application_id ?? void 0),
        $ = null != _ && T !== _,
        Q = U?.preview_ready === !0,
        ee = U?.has_activity === !0,
        {
            availability: et,
            activeMode: en,
            setMode: es,
            widgetApplicationId: ei,
        } = (0, ea.q)({
            applicationId: i?.preview_application_id ?? null,
            previewApplicationId: i?.preview_application_id ?? null,
            declaredActivity: ee,
            installScope: i?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
        }),
        eo = (0, eh.Qg)({
            installScope: i?.install_scope ?? null,
            previewReady: Q,
            integrationInstalled: U?.integration_installed ?? null,
            botPermissionsChanged: U?.bot_permissions_changed === !0,
        }),
        el = m && !j && !p && !w,
        em = X.intl.string(el ? K.default.YdgE0j : K.default.aWVf4j),
        ey = s.useCallback(() => {
            if (j || p || w) {
                (I(!1), b(!1), v(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [j, p, w]),
        eb = s.useCallback(() => c(!1), []),
        { active: ew } = (0, ec.Q_)(_),
        ev = s.useRef(null),
        ej = (0, ep.o4)(_),
        ex = X.intl.string(ej ? K.default.bfQ4Ki : ew ? K.default.rfNEHn : K.default.lXcEa2),
        eA = s.useCallback(() => {
            if (null != _) {
                if (ew) return void (0, ec.PS)(_);
                (I(!1), b(!1), v(!1), c(!0), (0, ec.nI)(_));
            }
        }, [_, ew]),
        eS = s.useCallback(() => {
            I((e) => !e && (c(!0), b(!1), v(!1), !0));
        }, []),
        eI = s.useCallback(() => I(!1), []),
        eN = s.useCallback(
            (e) => {
                if (null == i || V.current) return;
                let t = i.id;
                function a() {
                    return F.current && M.current === t;
                }
                ((V.current = !0),
                    b(!1),
                    c(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, q.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && E({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, h.P0)((0, f.o)(X.intl.string(K.default.q6iZ84), g.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (V.current = !1);
                        }));
            },
            [i],
        ),
        eP = (0, d.bG)([ef.A], () => ef.A.isBuilderPreviewMobile()),
        eE = X.intl.string(eP ? K.default["3uCc8U"] : K.default["+nzCxZ"]),
        eR = s.useCallback(() => (0, Z.GG)(!eP), [eP]),
        e_ = (0, G.A)(i?.preview_application_id ?? null, tQ.sd),
        eM = (0, tQ.x1)(e_) && e_.data.proxyTicketRefreshing,
        eO = s.useCallback(() => {
            null == e_ || eM || D.A.refreshProxyTicket(e_.id);
        }, [e_, eM]),
        eD = s.useCallback(() => {
            var e, t;
            (null != i && ((e = i.id), (t = e_?.id), (0, q.Bn)(e), (0, t_.A)().leaveFrame(t)), l());
        }, [i, e_?.id, l]),
        eG = s.useCallback(() => {
            null != i && (c(!0), (0, q.dv)(i.id, X.intl.string(K.default["2ejwtJ"])));
        }, [i]),
        ez = eZ(
            s.useCallback(
                (e) => {
                    if (null == i) return;
                    let t = i.id,
                        a = eX(e);
                    null != a
                        ? (0, h.P0)((0, f.o)(a, g.Ck.FAILURE))
                        : (0, u.A)({
                              title: X.intl.formatToPlainString(K.default.XYZqZK, { name: i.name }),
                              subtitle: X.intl.string(K.default["6syXoH"]),
                              confirmText: X.intl.string(K.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await eK(t, e, X.intl.string(K.default.C7GU2r));
                                  } catch {
                                      (0, h.P0)((0, f.o)(X.intl.string(K.default["02GpNr"]), g.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [i],
            ),
        ),
        eB = s.useCallback(() => {
            null != i && (0, tB.A)(i, r);
        }, [i, r]),
        eF = s.useCallback(async () => {
            if (null == _ || M.current !== _) return;
            H.current?.abort();
            let e = new AbortController();
            ((H.current = e), R(null));
            try {
                await (0, Z.U1)(_, e.signal);
            } catch {
            } finally {
                e.signal.aborted || H.current !== e || M.current !== _ || R(_);
            }
        }, [_]);
    s.useEffect(
        () => (
            eF(),
            () => {
                (H.current?.abort(), (H.current = null));
            }
        ),
        [eF],
    );
    let eL = (0, J.H)(i ?? null, U ?? null, r),
        eV = ((t = i?.application_id ?? null), (0, d.bG)([ed.Ay], () => (null == t ? null : (0, eu.SH)(r, t)), [r, t])),
        eH = s.useMemo(() => (null == eV ? null : () => (0, B.pX)(tN.BVt.CHANNEL(r, eV))), [r, eV]),
        eU = s.useCallback(async () => {
            null != i && (await (0, J.w)(i, eL));
        }, [eL, i]),
        eY = s.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eF();
        }, [eF, eU]),
        eq = s.useMemo(() => {
            let e = i?.preview_application_id;
            return null == e || W || $
                ? null
                : {
                      ...(0, tM.p)({ applicationId: e, application: Y ?? null, guildId: eL }),
                      onClose: () => {
                          eY();
                      },
                  };
        }, [$, eY, eL, W, Y, i?.preview_application_id]),
        eW = eo ? { type: "permissions", authorizeProps: eq } : $ && null == U ? { type: "checking" } : void 0,
        e$ = (0, d.bG)([eg.Ay], () => null != _ && eg.Ay.isProjectDeleting(_), [_]);
    s.useEffect(() => {
        ((null == i && o) || e$) && (0, B.bG)(tN.BVt.CHANNEL(r, td.VV.VIBEGRATIONS));
    }, [r, i, o, e$]);
    let eQ = s.useMemo(() => ({ guildId: r, platform: t1, busy: $ || W }), [r, $, W]),
        eJ = (0, er.Ay)(_, eQ),
        e0 = eJ?.upToDate === !0 ? X.intl.string(K.default["5U1fkv"]) : (eJ?.disabledReason ?? null),
        e2 =
            null == eJ
                ? null
                : (0, n.jsx)("div", {
                      className: tJ.As,
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
        e6 = (0, n.jsx)(tx, {
            title: i?.name ?? X.intl.string(K.default.F2dRba),
            breadcrumb: { title: X.intl.string(K.default.Xmvb23), onClick: l },
            actions:
                null == i
                    ? null
                    : (0, n.jsxs)("div", {
                          className: tJ.FO,
                          children: [
                              et.showModeSwitch ? (0, n.jsx)(e8, { modes: et.modes, mode: en, onChange: es }) : null,
                              (0, n.jsx)(z.A.Icon, {
                                  icon: eP ? t6 : t2,
                                  tooltip: eE,
                                  "aria-label": eE,
                                  selected: eP,
                                  onClick: eR,
                              }),
                              (0, n.jsx)(z.A.Icon, {
                                  ref: ev,
                                  icon: tC.A,
                                  tooltip: ex,
                                  "aria-label": ex,
                                  selected: ew,
                                  disabled: ej,
                                  onClick: eA,
                              }),
                              "frame" === en ? (0, n.jsx)(eT.A, { frame: e_, controlProjectId: i.id }) : null,
                              (0, n.jsx)("div", { className: tJ.YJ }),
                              N
                                  ? (0, n.jsx)(z.A.Icon, {
                                        icon: C.BugIcon,
                                        tooltip: X.intl.string(K.default["8MLfBT"]),
                                        "aria-label": X.intl.string(K.default["8MLfBT"]),
                                        selected: j,
                                        onClick: eS,
                                    })
                                  : null,
                              (0, n.jsx)(z.A.Icon, {
                                  icon: A.SettingsIcon,
                                  tooltip: X.intl.string(K.default.cWmjzs),
                                  "aria-label": X.intl.string(K.default.cWmjzs),
                                  onClick: () => (0, tr.A)(i.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tp, {
                                  projectId: i.id,
                                  projectName: i.name,
                                  guildId: r,
                                  projectGuildId: i.guild_id,
                                  isOwner: (0, eg.PV)(i),
                                  canRemix: (0, eg.H_)(i),
                                  onRefresh: (0, tQ.x1)(e_) ? eO : void 0,
                                  isRefreshing: eM,
                                  onClose: eD,
                                  onExport: eG,
                                  onImport: ez.open,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = i.id),
                                          void (0, ek.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  a.e("964476"),
                                                  a.e("461590"),
                                              ]).then(a.bind(a, 84469));
                                              return (a) => (0, n.jsx)(t, { ...a, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      P?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (c(!0), I(!1), v(!1), b(!0));
                                            },
                                  onRestorePoints: () => {
                                      (c(!0), I(!1), b(!1), v(!0));
                                  },
                                  refreshApplicationId:
                                      et.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== et.profileState
                                          ? ei
                                          : null,
                                  previewProjectId: i.id,
                              }),
                              el
                                  ? null
                                  : (0, n.jsx)(z.A.Icon, { icon: t0, tooltip: em, "aria-label": em, onClick: ey }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: tJ.nj,
        children: [
            ez.input,
            (0, n.jsx)("main", {
                className: tJ.JX,
                children:
                    null == i
                        ? (0, n.jsxs)("div", {
                              className: tJ.j5,
                              children: [
                                  e6,
                                  (0, n.jsxs)("div", {
                                      className: tJ.sD,
                                      children: [
                                          (0, n.jsx)(S.D, {
                                              variant: "heading-lg/semibold",
                                              children: X.intl.string(K.default.F2dRba),
                                          }),
                                          (0, n.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: X.intl.string(K.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: X.intl.string(K.default["42EdIV"]),
                                              onClick: () => (0, Z.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(er.Qc.Provider, {
                              value: eQ,
                              children: (0, n.jsx)(
                                  eC.A,
                                  {
                                      projectId: i.id,
                                      designFeedbackToggleRef: ev,
                                      applicationId: i.preview_application_id,
                                      previewApplicationId: i.preview_application_id,
                                      surface: tQ.sd,
                                      header: e6,
                                      chatOpen: m,
                                      onCloseChat: eb,
                                      chatHeaderAction: e2,
                                      versionHistoryOpen: p,
                                      onCloseVersionHistory: () => b(!1),
                                      restorePointsOpen: w,
                                      onCloseRestorePoints: () => v(!1),
                                      installScope: i.install_scope,
                                      debugOpen: N && j,
                                      onCloseDebug: eI,
                                      onRestoreVersion: eN,
                                      restoreState: P,
                                      previewReady: Q,
                                      previewGate: eW,
                                      availability: et,
                                      activeMode: en,
                                      widgetApplicationId: ei,
                                      onOpenPublishedApp: eH,
                                  },
                                  i.id,
                              ),
                          }),
            }),
        ],
    });
}
function t7(e) {
    let {
            projects: t,
            idea: i,
            guildId: l,
            submitting: r,
            createError: u,
            createDisabled: m,
            conjureTarget: c,
            onConjureTargetChange: p,
            nativeAppChannels: b,
            onNativeAppChannelsChange: w,
            eligibleGuilds: k,
            modelSettings: v,
            onModelSettingsChange: C,
            onSelectProject: A,
            onIdeaChange: S,
            onCreate: O,
            onCreateFromTemplate: D,
            onStartTemplate: G,
            onSubmitTemplate: B,
            onCancelTemplate: F,
            onSkipTemplate: L,
            onImportNewProject: V,
            importing: U,
        } = e,
        [Y, q] = s.useState(() => ({ guildId: l, filter: tY(l) })),
        $ = (Y.guildId === l ? Y.filter : tY(l)) ?? l,
        Q = s.useCallback(
            (e) => {
                (tU.set(l, e), q({ guildId: l, filter: e }));
            },
            [l],
        ),
        J = (0, d.yK)(
            [H.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = H.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, l),
            [t, l],
        ),
        et = s.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: X.intl.string(K.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tV,
                    leading: e$.UserIcon,
                    label: X.intl.string(K.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tH,
                    leading: eQ.R,
                    label: X.intl.string(K.default["qqH+iN"]),
                },
                ...J.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tF.Ay, { guild: e, size: tF.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [J],
        ),
        ea = (0, d.yK)(
            [eg.Ay, H.A],
            () => {
                let e = tq($);
                if (null != e) return eg.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(H.A.getGuilds()))
                    eg.Ay.hasFetchedGuildProjects(e.id) && t.push(...eg.Ay.getSharedProjects(e.id));
                return t;
            },
            [$],
        );
    s.useEffect(() => {
        let e = tq($);
        null == e || eg.Ay.hasFetchedGuildProjects(e) || (0, Z.hF)(e);
    }, [$]);
    let en = s.useMemo(
            () =>
                ea
                    .filter((e) => tK(e, $))
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [ea, $],
        ),
        es = s.useMemo(
            () => [
                {
                    label: X.intl.string(K.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tL,
                            label: X.intl.string(K.default.UXnPhI),
                            leading: e$.UserIcon,
                        },
                        ...k.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tF.Ay, { guild: e, size: tF.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [k],
        ),
        ei = s.useMemo(
            () =>
                t
                    .filter((e) => tK(e, $))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, $],
        ),
        eo = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eu.X0)(e, l)
                    ? A(e.id)
                    : (0, h.P0)((0, f.o)(X.intl.string(K.default["wY7I+H"]), g.Ck.MESSAGE));
            },
            [l, A],
        ),
        el = X.intl.string(K.default.TU9IGR),
        er = [
            X.intl.string(K.default["E+Q26x"]),
            X.intl.string(K.default["06/jqP"]),
            X.intl.string(K.default["3gSfUa"]),
        ],
        ed = [
            {
                id: "moderation-bot",
                name: X.intl.string(K.default.idRAwG),
                description: X.intl.string(K.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: X.intl.string(K.default.BLDsiz),
                description: X.intl.string(K.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: X.intl.string(K.default["+abXa8"]),
                description: X.intl.string(K.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: X.intl.string(K.default.ieAgex),
                description: X.intl.string(K.default["5yvj+f"]),
            },
        ],
        em = s.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: l,
                        eligibleGuilds: k,
                        onStart: (t) => G(e.name, t),
                        onSubmit: (t, a, n) => B(e, t, a, n),
                        onCancel: F,
                        onSkip: L,
                    }),
                    (0, ek.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                a.bind(a, 248702),
                            );
                            return (a) => (0, n.jsx)(e, { ...a, ...t });
                        },
                        { modalKey: "VibegrationsTemplateWizardModal" },
                    ));
                }
                D(e);
            },
            [k, l, F, D, L, G, B],
        ),
        ec = X.intl.string(K.default.FYK2xQ),
        ep = X.intl.string(K.default["/SUK82"]),
        eh = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || O());
            },
            [m, O],
        ),
        ef = tq($) ?? l,
        ey = (0, d.bG)([eg.Ay], () => eg.Ay.getGuildProjectsFetchState(ef), [ef]),
        eb = (0, d.bG)([eg.Ay], () => eg.Ay.getGuildProjectsFetchState(l), [l]),
        [ew, ev] = s.useState(tZ),
        ej = s.useMemo(() => tX.w.get(t$(l)) ?? !1, [l]),
        eC = "success" === eb,
        eS = (0, d.yK)([eg.Ay], () => eg.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => tK(e, l)),
        eI = ew ?? (!!eS || "error" === eb || (!eC && ej));
    s.useEffect(() => {
        eC && tX.w.set(t$(l), eS);
    }, [eC, eS, l]);
    let eT = s.useCallback((e) => {
            (tX.w.set(tW, e), ev(e));
        }, []),
        eR = s.useCallback(() => eT(!eI), [eT, eI]),
        e_ = s.useCallback(() => eT(!1), [eT]),
        eM = X.intl.string(K.default.jDPFDh),
        eO = eI ? eM : X.intl.string(K.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(tJ.nj, tJ.a0),
        children: (0, n.jsxs)("div", {
            className: tJ.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: tJ.ps,
                    children: [
                        (0, n.jsx)(tx, {
                            title: X.intl.string(K.default.Xmvb23),
                            actions: (0, n.jsx)(z.A.Icon, {
                                icon: I.Z,
                                tooltip: eO,
                                "aria-label": eO,
                                selected: eI,
                                onClick: eR,
                            }),
                        }),
                        (0, n.jsx)(N.Ip, {
                            className: tJ.Yy,
                            children: (0, n.jsx)("div", {
                                className: tJ.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(tJ.Qs, tJ.Ix),
                                    children: [
                                        (0, n.jsx)(tT, {}),
                                        (0, n.jsx)(eL, {}),
                                        (0, n.jsxs)("section", {
                                            className: tJ.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: tJ.G9,
                                                    children: [
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: X.intl.string(K.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eE, {
                                                    listClassName: tJ.Aw,
                                                    radius: eN,
                                                    children: ed.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: tJ.EA,
                                                                children: (0, n.jsxs)(eA, {
                                                                    disabled: r,
                                                                    ariaLabel: X.intl.formatToPlainString(
                                                                        K.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tJ.nx, tJ.rz),
                                                                    onClick: () => em(e),
                                                                    children: [
                                                                        (0, n.jsx)(y.E, {
                                                                            className: tJ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, n.jsx)(y.E, {
                                                                            className: tJ.BK,
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
                                            className: tJ.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: tJ.G9,
                                                    children: [
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ep,
                                                        }),
                                                        (0, n.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: X.intl.string(K.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eE, {
                                                    listClassName: tJ.Aw,
                                                    radius: eP,
                                                    children: er.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: tJ.EA,
                                                                children: (0, n.jsx)(eA, {
                                                                    disabled: r,
                                                                    className: tJ.nx,
                                                                    onClick: () => O(e),
                                                                    children: (0, n.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tJ.un,
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
                                        (0, n.jsx)(ex, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: tJ.Yl,
                            children: (0, n.jsxs)("div", {
                                className: o()(tJ.Qs, tJ.DA),
                                children: [
                                    (0, n.jsx)(P.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: i,
                                        placeholder: el,
                                        error: u,
                                        onChange: S,
                                        onKeyDown: eh,
                                    }),
                                    null != b
                                        ? (0, n.jsx)(E.S, {
                                              checked: b,
                                              disabled: r,
                                              onChange: () => w(!b),
                                              label: X.intl.string(K.default.nyY2CS),
                                              description: X.intl.string(K.default.EwshDz),
                                          })
                                        : null,
                                    (0, n.jsxs)("div", {
                                        className: tJ.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: tJ.gH,
                                                children: (0, n.jsx)(T.l, {
                                                    selectionMode: "single",
                                                    label: X.intl.string(K.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: X.intl.string(K.default.MLg0S8),
                                                    options: es,
                                                    value: c,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, n.jsx)(e2.A, {
                                                settings: v ?? W.v0,
                                                tiers: W.qf,
                                                choices: (0, ee.e)()
                                                    ? {
                                                          main: [...W.S8.main, ...W.wF.main],
                                                          subagent: [...W.S8.subagent, ...W.wF.subagent],
                                                          thinking: W.S8.thinking,
                                                      }
                                                    : W.S8,
                                                disabled: r,
                                                onChange: C,
                                            }),
                                            (0, n.jsx)(x.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: X.intl.string(X.t.CumH4u),
                                                disabled: m,
                                                loading: r,
                                                onClick: () => O(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("aside", {
                    className: tJ.pA,
                    hidden: !eI,
                    "aria-label": X.intl.string(K.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: tJ.IR,
                            children: [
                                (0, n.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tJ.RM,
                                    children: X.intl.string(K.default.Bo5fE3),
                                }),
                                (0, n.jsxs)("div", {
                                    className: tJ.Ss,
                                    children: [
                                        (0, n.jsx)(e0, { importing: U, onImport: V }),
                                        (0, n.jsx)(z.A.Icon, { icon: R.P, tooltip: eM, "aria-label": eM, onClick: e_ }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)(N.Ip, {
                            className: tJ.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: tJ.Vw,
                                    children: (0, n.jsx)(T.l, {
                                        selectionMode: "single",
                                        label: X.intl.string(K.default.mvtKAm),
                                        hideLabel: !0,
                                        options: et,
                                        value: $,
                                        onSelectionChange: Q,
                                    }),
                                }),
                                (0, n.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tJ.wE,
                                    children: X.intl.string(K.default.YnAFtT),
                                }),
                                ("unattempted" === ey || "loading" === ey) && 0 === ei.length
                                    ? (0, n.jsx)("div", { className: tJ.E8, children: (0, n.jsx)(j.y, {}) })
                                    : "error" === ey && 0 === ei.length
                                      ? (0, n.jsxs)("div", {
                                            className: tJ.E8,
                                            children: [
                                                (0, n.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tJ.JS,
                                                    children: X.intl.string(K.default["IN/HRP"]),
                                                }),
                                                (0, n.jsx)(x.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: X.intl.string(K.default["42EdIV"]),
                                                    onClick: () => (0, Z.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === ei.length
                                        ? (0, n.jsx)("div", {
                                              className: tJ.D1,
                                              children: (0, n.jsxs)("div", {
                                                  className: tJ.ST,
                                                  children: [
                                                      (0, n.jsx)(_.D, { size: "lg", color: M.A.colors.TEXT_SUBTLE }),
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tJ.sI,
                                                          children: X.intl.string(K.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: tJ.Dq,
                                              children: ei.map((e) =>
                                                  (0, n.jsx)(
                                                      t9,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tB.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                en.length > 0
                                    ? (0, n.jsxs)("div", {
                                          className: tJ.qx,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: tJ.uc,
                                                  children: [
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: X.intl.string(K.default.jrCnUc),
                                                      }),
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: X.intl.string(K.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: tJ.Dq,
                                                  children: en.map((e) =>
                                                      (0, n.jsx)(
                                                          t9,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tB.A)(e, l),
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
function t3(e) {
    let t,
        { guildId: a, projectId: i } = e,
        o = (0, d.yK)([eg.Ay], () => eg.Ay.getOwnedProjects()),
        l = (0, d.yK)([V.Ay], () => V.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, d.bG)(
            [H.A, U.A],
            () => {
                let e = H.A.getGuild(a);
                return null != e && U.A.can(tN.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [u, m] = s.useState(""),
        c = i ?? null,
        [p, y] = s.useState(!1),
        [b, w] = s.useState(null),
        k = (0, el._)("VibegrationsScreen"),
        [v, j] = s.useState(null);
    s.useEffect(() => {
        j(null);
    }, [a]);
    let x = s.useMemo(() => (k.some((e) => e.id === a) ? a : tL), [k, a]),
        C = v ?? x,
        A = C === tL ? "user" : "guild",
        S = C === tL ? a : C,
        [I, N] = s.useState(!1),
        [P, E] = s.useState(null);
    (s.useEffect(() => {
        (0, Z.hF)(a);
    }, [a, l, r]),
        s.useEffect(() => {
            (0, Z.dm)(a, c);
        }, [a, c]));
    let T = s.useCallback(
            async (e, t, a) => {
                let n = await (0, Z.gA)({ guild_id: t, install_scope: a, flags: (0, W.RS)("guild" === a && I) });
                ((0, q.Hc)(n),
                    (0, q.r2)(n, P ?? W.v0),
                    e(n),
                    (0, B.pX)(tN.BVt.CHANNEL(t, td.VV.VIBEGRATIONS, n)),
                    m(""),
                    E(null));
            },
            [I, P],
        ),
        R = s.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    a = ey({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), y(!0), w(null));
                    try {
                        await T((e) => (0, q.dv)(e, t), S, A);
                    } catch (e) {
                        w((0, Q.Xd)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [T, A, S, u, p],
        ),
        _ = s.useCallback(
            async (e) => {
                if (!p) {
                    (y(!0), w(null));
                    try {
                        await T(
                            (t) => {
                                var a;
                                (0, q.dv)(
                                    t,
                                    ((a = e.name),
                                    X.intl.formatToPlainString(K.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            S,
                            A,
                        );
                    } catch (e) {
                        w((0, Q.Xd)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [T, A, S, p],
        ),
        M = s.useCallback(
            async (e, t) => {
                let a = await (0, Z.gA)({ guild_id: t, install_scope: "guild", flags: (0, W.RS)(I) });
                return ((0, q.Hc)(a), (0, q.r2)(a, P ?? W.v0), (0, q.dv)(a, (0, et.v8)(e)), a);
            },
            [I, P],
        ),
        O = s.useCallback(async (e, t, a, n) => {
            if (eg.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, Z.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new Q.uQ((0, Q.hj)(e), e.status);
            }
            ((0, q.dv)(t, n, void 0, { templateId: e.id }),
                (0, em.R6)(t),
                (0, B.pX)(tN.BVt.CHANNEL(a, td.VV.VIBEGRATIONS, t)),
                E(null));
        }, []),
        D = s.useCallback((e) => {
            (0, Z.xx)(e).catch(() => void 0);
        }, []),
        G = s.useCallback(
            (e) => {
                let t = eg.Ay.getProject(e)?.guild_id ?? a;
                ((0, B.pX)(tN.BVt.CHANNEL(t, td.VV.VIBEGRATIONS, e)), E(null));
            },
            [a],
        ),
        [z, F] = s.useState(!1),
        L = s.useCallback(
            async (e, t) => {
                let n = eX(e);
                if (null != n) return void (0, h.P0)((0, f.o)(n, g.Ck.FAILURE));
                F(!0);
                let s = null;
                try {
                    ((s = await (0, Z.gA)({ guild_id: a, install_scope: t, flags: (0, W.RS)("guild" === t && I) })),
                        (0, q.Hc)(s),
                        (0, q.r2)(s, P ?? W.v0),
                        await eK(s, e, X.intl.string(K.default.KjEtrZ)),
                        (0, B.pX)(tN.BVt.CHANNEL(a, td.VV.VIBEGRATIONS, s)),
                        E(null));
                } catch {
                    (null != s && (await (0, Z.xx)(s).catch(() => void 0)),
                        (0, h.P0)((0, f.o)(X.intl.string(K.default["02GpNr"]), g.Ck.FAILURE)));
                } finally {
                    F(!1);
                }
            },
            [a, I, P],
        ),
        Y = s.useCallback(
            (e) => {
                (0, B.pX)(tN.BVt.CHANNEL(a, td.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        $ = s.useCallback(() => {
            (0, B.pX)(tN.BVt.CHANNEL(a, td.VV.VIBEGRATIONS));
        }, [a]),
        J = s.useCallback((e) => {
            (m(e), w(null));
        }, []),
        ee = (0, d.bG)(
            [eg.Ay],
            () => {
                if (null == c) return null;
                let e = eg.Ay.getProject(c);
                return null == e || (0, eg.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        ea = (0, d.bG)([eg.Ay], () => eg.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, n.jsx)(t8, { project: ee, projectsLoaded: ea, onBack: $, guildId: a }, c)
        : (0, n.jsx)(t7, {
              projects: o,
              modelSettings: P,
              onModelSettingsChange: E,
              idea: u,
              guildId: a,
              submitting: p,
              createError: b,
              createDisabled: "idea" === (t = ey({ idea: u, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: Y,
              onIdeaChange: J,
              onCreate: R,
              onCreateFromTemplate: _,
              onStartTemplate: M,
              onSubmitTemplate: O,
              onCancelTemplate: D,
              onSkipTemplate: G,
              onImportNewProject: L,
              importing: z,
              conjureTarget: C,
              onConjureTargetChange: j,
              nativeAppChannels: "guild" === A ? I : null,
              onNativeAppChannelsChange: N,
              eligibleGuilds: k,
          });
}
