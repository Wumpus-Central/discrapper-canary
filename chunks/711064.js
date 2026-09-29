(a.r(t), a.d(t, { default: () => t3 }), a(321073));
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
    N = a(297264),
    I = a(97893),
    S = a(364522),
    E = a(103557),
    P = a(150934),
    T = a(691885),
    R = a(789645),
    _ = a(152367),
    M = a(661531),
    O = a(627363),
    D = a(625180),
    G = a(672929),
    z = a(742589),
    F = a(976860),
    L = a(402860),
    B = a(885386),
    V = a(696451),
    H = a(71393),
    U = a(576705),
    Y = a(486020),
    q = a(277977),
    X = a(759967),
    K = a(375708),
    W = a(673724),
    Z = a(948230),
    $ = a(637708),
    Q = a(936494),
    J = a(443741),
    ee = a(208137),
    et = a(993396),
    ea = a(822835),
    en = a(287809),
    ei = a(427262),
    es = a(783791),
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
    let t = K.intl.string(X.default.x07mpp);
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
                        children: K.intl.string(X.default.h5CwHI),
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
                                        (0, ew.MZ)(e) ? ` \xb7 ${K.intl.string(X.default.vvxuUI)}` : null,
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
                      text: K.intl.string(X.default.YWxThz),
                      onClick: ev,
                  })
                : null,
        ],
    });
}
var eC = a(654547);
function eA(e) {
    let { className: t, ariaLabel: a, disabled: i, onClick: s, children: o } = e;
    return (0, n.jsx)(w.D, { "aria-disabled": i, "aria-label": a, className: t, onClick: i ? void 0 : s, children: o });
}
var eN = a(865665),
    eI = a(568190);
let eS = { x: 5, y: 7 },
    eE = { x: 5, y: 4 };
function eP(e) {
    let { listClassName: t, radius: a, children: s } = e,
        [o, l] = i.useState(!1);
    return (0, n.jsxs)("div", {
        className: eI.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: s }),
            o ? (0, n.jsx)(eN.C, { area: 64, radius: a, color: M.A.colors.TEXT_BRAND }) : null,
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
let eF = "heading-xxl/semibold",
    eL = !1;
function eB() {
    let e = i.useRef(null),
        [t, a] = i.useState(!0),
        s = (0, eO.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eM.w)(s, [], { fireOnMount: !0 }),
        l = (0, d.bG)([eD.A], () => eD.A.isConnected());
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
    let r = (0, d.bG)([eG.A], () => eG.A.isIdle()),
        u = i.useRef(r);
    i.useEffect(() => {
        let t = u.current && !r;
        ((u.current = r), t && eL && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = K.intl.string(X.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: ez.x,
        children: t
            ? (0, n.jsx)(e_.H, { children: (0, n.jsx)(eR.o, { ref: e, text: m, variant: eF, delay: null }) })
            : (0, n.jsx)(N.D, { variant: eF, children: m }),
    });
}
var eV = a(922016),
    eH = a(980707),
    eU = a(477782),
    eY = a(81369),
    eq = a(402879);
async function eX(e, t, a) {
    (0, q.Hc)(e);
    let n = await (0, q.vX)(e, t);
    (0, q.dv)(e, a, [n]);
}
function eK(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, W.x5)(e.size, t)
        ? null
        : K.intl.formatToPlainString(X.default.AzziHF, { size: (0, W.ZJ)((0, W.yr)(t)) });
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
        i = await (0, q.cS)(e, n);
    await (0, eq.F)(i, n);
}
function eZ(e) {
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
var e$ = a(950305),
    eQ = a(664121);
let eJ = [
    { value: "user", icon: e$.UserIcon, nameMessage: X.default.iqXIRN },
    { value: "guild", icon: eQ.R, nameMessage: X.default.LdgKdI },
];
function e0(e) {
    let { importing: t, onImport: a } = e,
        s = i.useRef(null),
        o = eZ(i.useCallback((e) => a(e, "user"), [a])),
        l = eZ(i.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eV.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: eV.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eH.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": K.intl.string(X.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eU.rX, {
                            label: K.intl.string(X.default.MLg0S8),
                            children: eJ
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: K.intl.string(e.nameMessage),
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
                    let { isShown: i } = a;
                    return (0, n.jsx)(x.$, {
                        ...e,
                        buttonRef: s,
                        variant: "secondary",
                        size: "sm",
                        icon: eY.H,
                        text: K.intl.string(X.default["NHP2+t"]),
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
var e2 = a(379307),
    e6 = a(629584),
    e1 = a(753514),
    e9 = a(491920);
function e8(e) {
    let { modes: t, mode: a, onChange: s, className: l } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, e1.kZ)(e), "aria-controls": (0, e1.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                s(e.value);
            },
            [s],
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
    ti = a(957565),
    ts = a(123917),
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
            previewProjectId: N,
            trigger: I = "header",
        } = e,
        S = i.useRef(null),
        { pending: E, refresh: P } = (0, ta.A)(C ?? null),
        { pending: T, connect: R } = (function (e, t) {
            let [a, n] = i.useState(tl),
                s = i.useRef(tl),
                o = i.useCallback((e) => {
                    ((s.current = (0, to.Q6)(s.current, e)), n(s.current));
                }, []);
            return {
                pending: a,
                connect: i.useCallback(
                    (a) => {
                        if (null == e) return;
                        let i = (0, to.K9)(s.current, a.type);
                        async function l() {
                            let n = await (0, q.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, ts.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, to.rq)(n.error)
                                          ? K.intl.string(X.default.avu1u4)
                                          : K.intl.string(X.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((s.current = i), n(i), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(N ?? null, tc),
        _ = (0, d.bG)([q.Ay], () => (null == N ? tm : q.Ay.getDeclaredConnections(N))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: i } = e,
                s = [];
            for (let { connection: e, offer: o } of (t &&
                s.push({
                    id: "preview-refresh",
                    label: K.intl.string(X.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                s.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: K.intl.formatToPlainString(X.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: K.intl.formatToPlainString(X.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return s;
        })({
            canRefresh: null != C,
            refreshPending: E,
            offers: i.useMemo(() => (0, to.Xl)(_), [_]),
            connectPending: T,
        }),
        O = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        D = null != p && r,
        G = l && null != c,
        F = D || null != m || G || null != y || null != b || null != w,
        L = ti.p5 && null != s,
        B = ti.p5;
    return null != v || null != x || F || B || l
        ? (0, n.jsx)(eV.Y, {
              targetElementRef: S,
              position: "bottom",
              align: "right",
              animation: eV.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, n.jsxs)(eH.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": K.intl.string(K.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != v || null != x
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        null != v
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "refresh",
                                                  icon: e7.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e7.RefreshIcon },
                                                  label: K.intl.string(X.default.xKexN1),
                                                  disabled: j,
                                                  action: v,
                                              })
                                            : null,
                                        null != x
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "close",
                                                  icon: e3.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: e3.DoorExitIcon },
                                                  label: K.intl.string(X.default.Ea0Wrr),
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
                                                    if ("refresh" === e.kind) return void P();
                                                    let t = null == e.connectionType ? null : O.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          F
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        D
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "remix",
                                                  label: K.intl.string(X.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != m
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "export",
                                                  label: K.intl.string(X.default["7iamDC"]),
                                                  action: m,
                                              })
                                            : null,
                                        G
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "import",
                                                  label: K.intl.string(X.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != y
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "connect-tool",
                                                  label: K.intl.string(X.default["3qelzD"]),
                                                  action: y,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "version-history",
                                                  label: K.intl.string(X.default.jAWwzi),
                                                  action: b,
                                              })
                                            : null,
                                        null != w
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "restore-points",
                                                  label: K.intl.string(X.default.FRjicO),
                                                  action: w,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          B
                              ? (0, n.jsxs)(eU.rX, {
                                    children: [
                                        L
                                            ? (0, n.jsx)(eU.Dr, {
                                                  id: "copy-link",
                                                  label: K.intl.string(K.t.WqhZss),
                                                  icon: e4.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: e4.LinkIcon },
                                                  action: () =>
                                                      (0, ti.C)((0, tn.n)(s, td.VV.VIBEGRATIONS, t), () =>
                                                          (0, h.P0)(
                                                              (0, f.o)(K.intl.string(K.t["L/PwZf"]), g.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, n.jsx)(eU.Dr, {
                                            id: "copy-project-id",
                                            label: K.intl.string(X.default.b4TqpT),
                                            icon: e5.L,
                                            leadingAccessory: { type: "icon", icon: e5.L },
                                            action: () =>
                                                (0, ti.C)(t, () =>
                                                    (0, h.P0)((0, f.o)(K.intl.string(X.default.WOKsTg), g.Ck.SUCCESS)),
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
                                            label: K.intl.string(X.default["xhcY+n"]),
                                            icon: A.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                            action: () =>
                                                (0, tr.A)(t, { guildId: o ?? s, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, n.jsx)(eU.Dr, {
                                            id: "delete",
                                            label: K.intl.string(K.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: K.intl.formatToPlainString(X.default.ZokHVz, { name: a }),
                                                    subtitle: K.intl.string(X.default.NmF939),
                                                    confirmText: K.intl.string(K.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, Z.K)(t, () =>
                                                            (0, h.P0)(
                                                                (0, f.o)(K.intl.string(X.default.tqKZCi), g.Ck.FAILURE),
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
                      className: tu.h,
                      children:
                          "iconButton" === I
                              ? (0, n.jsx)(k.m, {
                                    text: K.intl.string(K.t["UKOtz+"]),
                                    children: (0, n.jsx)(te.K, {
                                        icon: tt.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": K.intl.string(K.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": i,
                                        onClick: a,
                                    }),
                                })
                              : (0, n.jsx)(z.A.Icon, {
                                    icon: tt.MoreHorizontalIcon,
                                    tooltip: K.intl.string(K.t["UKOtz+"]),
                                    "aria-label": K.intl.string(K.t["UKOtz+"]),
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
        i = [t.creator, ...t.collaborators],
        s = i.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(tb.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tg.Ay, { users: i.slice(0, 3), max: 3, size: tg.DN.SIZE_16, renderUser: tk }),
            s > 0 ? (0, n.jsxs)(y.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", s] }) : null,
        ],
    });
}
var tj = a(769979);
function tx(e) {
    let { title: t, actions: a, breadcrumb: i } = e;
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
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(z.A.Title, { onClick: i.onClick, children: i.title }),
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
    tN = a(47167),
    tI = a(994500),
    tS = a(652215);
let tE = "conjuring-help";
var tP = a(107148);
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
                    if (!t.features.has(tS.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = ed.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tN.m1)(t, en.default, tI.A) === tE;
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
                    ? (0, F.pX)(tS.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, ts.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: tP.l,
              children: (0, n.jsx)(tA.w, {
                  type: "info",
                  iconAlign: "center",
                  children: K.intl.format(X.default["4BsHmp"], { channel: tE, onNavigate: t }),
              }),
          });
}
var tR = a(321593),
    t_ = a(580954),
    tM = a(227189),
    tO = a(189213),
    tD = a(145216);
function tG(e) {
    let { reason: t, transitionState: a, onClose: i } = e,
        s = t === tD.H.PERMISSIONS;
    return (0, n.jsx)(tO.a, {
        transitionState: a,
        onClose: i,
        title: K.intl.string(s ? X.default.Rtlv25 : X.default["+UouPe"]),
        subtitle: K.intl.string(s ? X.default["nDQB/b"] : X.default["E0QD++"]),
        size: "sm",
        actions: [{ text: K.intl.string(s ? K.t.BddRzS : X.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
var tz = a(480007),
    tF = a(584936),
    tL = a(548118);
let tB = "user",
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
function tX(e, t) {
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
var tK = a(506774);
let tW = "VibegrationsProjectsPanelOpen";
function tZ() {
    return tK.w.get(tW) ?? null;
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
        (0, L.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(a.bind(a, 468689))
            .then((t) => {
                let { default: a } = t;
                return a.open(e, tS.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function t9(e) {
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
        N,
        { project: I, guildId: S, onSelect: E, onRemix: P, shared: T = !1 } = e,
        R =
            ((a = I.id),
            (s = I.name),
            (l = i.useRef(!1)),
            (m = i.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, h.P0)((0, f.o)(K.intl.formatToPlainString(X.default.u9TapG, { name: s }), g.Ck.MESSAGE)),
                    eW(a, s)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, h.P0)(
                                    (0, f.o)(
                                        409 === (t = e instanceof q._v ? e.status : null)
                                            ? K.intl.string(X.default.uB40Hz)
                                            : 404 === t
                                              ? K.intl.string(X.default.wCq2jC)
                                              : K.intl.string(X.default.G2GqyP),
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
                onImport: (c = eZ(
                    i.useCallback(
                        (e) => {
                            let t = eK(e);
                            null != t
                                ? (0, h.P0)((0, f.o)(t, g.Ck.FAILURE))
                                : (0, u.A)({
                                      title: K.intl.formatToPlainString(X.default.XYZqZK, { name: s }),
                                      subtitle: K.intl.string(X.default["6syXoH"]),
                                      confirmText: K.intl.string(X.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, F.pX)(tS.BVt.CHANNEL(S, td.VV.VIBEGRATIONS, a));
                                          try {
                                              await eX(a, e, K.intl.string(X.default.C7GU2r));
                                          } catch {
                                              (0, h.P0)((0, f.o)(K.intl.string(X.default["02GpNr"]), g.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [a, s, S],
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
                : K.intl.formatToPlainString(X.default.oMDaqr, { time: r()(I.updated_at).fromNow() }),
        z = (0, $.HC)(I),
        L =
            (0, d.bG)([H.A], () => (null == z ? null : (H.A.getGuild(z)?.name ?? null)), [z]) ??
            K.intl.string(X.default["qqH+iN"]),
        B = (0, d.bG)([eg.Ay], () => eg.Ay.isProjectDeleting(I.id), [I.id]),
        V =
            ((t = T ? I : null),
            (p = t?.id),
            (x = t?.owner_user_id),
            (C = (0, d.yK)(
                [es.Ay],
                () =>
                    null == p
                        ? []
                        : [
                              ...new Set(
                                  es.Ay.getMessages(p)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== x ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [p, x],
            )),
            i.useEffect(() => {
                null != x && ((0, eo.Y)(x), C.forEach(eo.Y));
            }, [x, C]),
            (A = (0, d.bG)([en.default], () => (null == x ? null : en.default.getUser(x)), [x])),
            (N = (0, d.yK)([en.default], () => C.map((e) => en.default.getUser(e)).filter((e) => null != e), [C])),
            i.useMemo(
                () =>
                    null == A
                        ? null
                        : {
                              creator: A,
                              collaborators: N,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? K.intl.formatToPlainString(X.default.TwgkQe, { creator: e })
                                      : K.intl.formatToPlainString(X.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (a = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === a
                                                      ? K.intl.formatToPlainString(K.t["8s9z8P"], { first: t[0] })
                                                      : 2 === a
                                                        ? K.intl.formatToPlainString(K.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === a
                                                          ? K.intl.formatToPlainString(K.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : K.intl.formatToPlainString(K.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: a - 3,
                                                            }),
                                        });
                              })(
                                  (0, ei.mG)(A),
                                  N.map((e) => (0, ei.mG)(e)),
                              ),
                          },
                [A, N],
            )),
        U = i.useId(),
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
        className: o()(tJ.OY, { [tJ.Wy]: B }),
        "aria-busy": B,
        children: [
            (0, n.jsx)(tR.Ay, { projectId: I.id }),
            (0, n.jsxs)(w.D, {
                className: tJ.W6,
                onClick: B ? void 0 : E,
                tabIndex: B ? -1 : void 0,
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
                                    null == V || B ? null : (0, n.jsx)(tv, { creator: V, className: tJ.rb }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: tJ.h3,
                                children: [
                                    (0, n.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tJ.Wb,
                                        children: B ? K.intl.string(X.default.EwXXks) : L,
                                    }),
                                    null == G || B
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
                children: B
                    ? (0, n.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: tJ.Pl,
                          children: [
                              (0, n.jsx)(tp, {
                                  projectId: I.id,
                                  projectName: I.name,
                                  guildId: S,
                                  projectGuildId: I.guild_id,
                                  isOwner: (0, eg.PV)(I),
                                  canRemix: (0, eg.H_)(I),
                                  onRemix: P,
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
    let { project: s, projectsLoaded: o, onBack: l, guildId: r } = e,
        [m, c] = i.useState(!0),
        [p, b] = i.useState(!1),
        [w, v] = i.useState(!1),
        [j, I] = i.useState(!1),
        S = B.Q_.useSetting(),
        [E, P] = i.useState(null),
        [T, R] = i.useState(null),
        _ = s?.id ?? null,
        M = i.useRef(_),
        L = i.useRef(!0),
        V = i.useRef(!1),
        H = i.useRef(null);
    ((M.current = _),
        i.useEffect(
            () => (
                (L.current = !0),
                () => {
                    L.current = !1;
                }
            ),
            [],
        ));
    let U = (0, d.bG)([eg.Ay], () => (null == _ ? null : eg.Ay.getIntegrationStatus(_)), [_]),
        { data: Y, isLoading: W } = (0, O.YY)(s?.preview_application_id ?? void 0),
        $ = null != _ && T !== _,
        Q = U?.preview_ready === !0,
        ee = U?.has_activity === !0,
        {
            availability: et,
            activeMode: en,
            setMode: ei,
            widgetApplicationId: es,
        } = (0, ea.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ee,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
        }),
        eo = (0, eh.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: Q,
            integrationInstalled: U?.integration_installed ?? null,
            botPermissionsChanged: U?.bot_permissions_changed === !0,
        }),
        el = m && !j && !p && !w,
        em = K.intl.string(el ? X.default.YdgE0j : X.default.aWVf4j),
        ey = i.useCallback(() => {
            if (j || p || w) {
                (I(!1), b(!1), v(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [j, p, w]),
        eb = i.useCallback(() => c(!1), []),
        { active: ew } = (0, ec.Q_)(_),
        ev = i.useRef(null),
        ej = (0, ep.o4)(_),
        ex = K.intl.string(ej ? X.default.bfQ4Ki : ew ? X.default.rfNEHn : X.default.lXcEa2),
        eA = i.useCallback(() => {
            if (null != _) {
                if (ew) return void (0, ec.PS)(_);
                (I(!1), b(!1), v(!1), c(!0), (0, ec.nI)(_));
            }
        }, [_, ew]),
        eN = i.useCallback(() => {
            I((e) => !e && (c(!0), b(!1), v(!1), !0));
        }, []),
        eI = i.useCallback(() => I(!1), []),
        eS = i.useCallback(
            (e) => {
                if (null == s || V.current) return;
                let t = s.id;
                function a() {
                    return L.current && M.current === t;
                }
                ((V.current = !0),
                    b(!1),
                    c(!0),
                    P({ entry: e, status: "restoring" }),
                    (0, q.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && P({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (P({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, h.P0)((0, f.o)(K.intl.string(X.default.q6iZ84), g.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (V.current = !1);
                        }));
            },
            [s],
        ),
        eE = (0, d.bG)([ef.A], () => ef.A.isBuilderPreviewMobile()),
        eP = K.intl.string(eE ? X.default["3uCc8U"] : X.default["+nzCxZ"]),
        eR = i.useCallback(() => (0, Z.GG)(!eE), [eE]),
        e_ = (0, G.A)(s?.preview_application_id ?? null, tQ.sd),
        eM = (0, tQ.x1)(e_) && e_.data.proxyTicketRefreshing,
        eO = i.useCallback(() => {
            null == e_ || eM || D.A.refreshProxyTicket(e_.id);
        }, [e_, eM]),
        eD = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = e_?.id), (0, q.Bn)(e), (0, t_.A)().leaveFrame(t)), l());
        }, [s, e_?.id, l]),
        eG = i.useCallback(() => {
            null != s && (c(!0), (0, q.dv)(s.id, K.intl.string(X.default["2ejwtJ"])));
        }, [s]),
        ez = eZ(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        a = eK(e);
                    null != a
                        ? (0, h.P0)((0, f.o)(a, g.Ck.FAILURE))
                        : (0, u.A)({
                              title: K.intl.formatToPlainString(X.default.XYZqZK, { name: s.name }),
                              subtitle: K.intl.string(X.default["6syXoH"]),
                              confirmText: K.intl.string(X.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await eX(t, e, K.intl.string(X.default.C7GU2r));
                                  } catch {
                                      (0, h.P0)((0, f.o)(K.intl.string(X.default["02GpNr"]), g.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eF = i.useCallback(() => {
            null != s && (0, tF.A)(s, r);
        }, [s, r]),
        eL = i.useCallback(async () => {
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
    i.useEffect(
        () => (
            eL(),
            () => {
                (H.current?.abort(), (H.current = null));
            }
        ),
        [eL],
    );
    let eB = (0, J.H)(s ?? null, U ?? null, r),
        eV = ((t = s?.application_id ?? null), (0, d.bG)([ed.Ay], () => (null == t ? null : (0, eu.SH)(r, t)), [r, t])),
        eH = i.useMemo(() => (null == eV ? null : () => (0, F.pX)(tS.BVt.CHANNEL(r, eV))), [r, eV]),
        eU = i.useCallback(async () => {
            null != s && (await (0, J.w)(s, eB));
        }, [eB, s]),
        eY = i.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eL();
        }, [eL, eU]),
        eq = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || W || $
                ? null
                : {
                      ...(0, tM.p)({ applicationId: e, application: Y ?? null, guildId: eB }),
                      onClose: () => {
                          eY();
                      },
                  };
        }, [$, eY, eB, W, Y, s?.preview_application_id]),
        eW = eo ? { type: "permissions", authorizeProps: eq } : $ && null == U ? { type: "checking" } : void 0,
        e$ = (0, d.bG)([eg.Ay], () => null != _ && eg.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == s && o) || e$) && (0, F.pX)(tS.BVt.CHANNEL(r, td.VV.VIBEGRATIONS));
    }, [r, s, o, e$]);
    let eQ = i.useMemo(() => ({ guildId: r, platform: t1, busy: $ || W }), [r, $, W]),
        eJ = (0, er.Ay)(_, eQ),
        e0 = eJ?.upToDate === !0 ? K.intl.string(X.default["5U1fkv"]) : (eJ?.disabledReason ?? null),
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
            title: s?.name ?? K.intl.string(X.default.F2dRba),
            breadcrumb: { title: K.intl.string(X.default.Xmvb23), onClick: l },
            actions:
                null == s
                    ? null
                    : (0, n.jsxs)("div", {
                          className: tJ.FO,
                          children: [
                              et.showModeSwitch ? (0, n.jsx)(e8, { modes: et.modes, mode: en, onChange: ei }) : null,
                              (0, n.jsx)(z.A.Icon, {
                                  icon: eE ? t6 : t2,
                                  tooltip: eP,
                                  "aria-label": eP,
                                  selected: eE,
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
                              "frame" === en ? (0, n.jsx)(eT.A, { frame: e_, controlProjectId: s.id }) : null,
                              (0, n.jsx)("div", { className: tJ.YJ }),
                              S
                                  ? (0, n.jsx)(z.A.Icon, {
                                        icon: C.BugIcon,
                                        tooltip: K.intl.string(X.default["8MLfBT"]),
                                        "aria-label": K.intl.string(X.default["8MLfBT"]),
                                        selected: j,
                                        onClick: eN,
                                    })
                                  : null,
                              (0, n.jsx)(z.A.Icon, {
                                  icon: A.SettingsIcon,
                                  tooltip: K.intl.string(X.default.cWmjzs),
                                  "aria-label": K.intl.string(X.default.cWmjzs),
                                  onClick: () => (0, tr.A)(s.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tp, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: r,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eg.PV)(s),
                                  canRemix: (0, eg.H_)(s),
                                  onRefresh: (0, tQ.x1)(e_) ? eO : void 0,
                                  isRefreshing: eM,
                                  onClose: eD,
                                  onExport: eG,
                                  onImport: ez.open,
                                  onRemix: eF,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
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
                                      E?.status === "restoring"
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
                                          ? es
                                          : null,
                                  previewProjectId: s.id,
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
                    null == s
                        ? (0, n.jsxs)("div", {
                              className: tJ.j5,
                              children: [
                                  e6,
                                  (0, n.jsxs)("div", {
                                      className: tJ.sD,
                                      children: [
                                          (0, n.jsx)(N.D, {
                                              variant: "heading-lg/semibold",
                                              children: K.intl.string(X.default.F2dRba),
                                          }),
                                          (0, n.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: K.intl.string(X.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: K.intl.string(X.default["42EdIV"]),
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
                                      projectId: s.id,
                                      designFeedbackToggleRef: ev,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: tQ.sd,
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
                                      onCloseDebug: eI,
                                      onRestoreVersion: eS,
                                      restoreState: E,
                                      previewReady: Q,
                                      previewGate: eW,
                                      availability: et,
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
function t7(e) {
    let {
            projects: t,
            idea: s,
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
            onIdeaChange: N,
            onCreate: O,
            onCreateFromTemplate: D,
            onStartTemplate: G,
            onSubmitTemplate: F,
            onCancelTemplate: L,
            onSkipTemplate: B,
            onImportNewProject: V,
            importing: U,
        } = e,
        [Y, q] = i.useState(() => ({ guildId: l, filter: tY(l) })),
        $ = (Y.guildId === l ? Y.filter : tY(l)) ?? l,
        Q = i.useCallback(
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
        et = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: K.intl.string(X.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tV,
                    leading: e$.UserIcon,
                    label: K.intl.string(X.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tH,
                    leading: eQ.R,
                    label: K.intl.string(X.default["qqH+iN"]),
                },
                ...J.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tL.Ay, { guild: e, size: tL.Ay.Sizes.MINI, active: !0 }),
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
    i.useEffect(() => {
        let e = tq($);
        null == e || eg.Ay.hasFetchedGuildProjects(e) || (0, Z.hF)(e);
    }, [$]);
    let en = i.useMemo(
            () =>
                ea
                    .filter((e) => tX(e, $))
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [ea, $],
        ),
        ei = i.useMemo(
            () => [
                {
                    label: K.intl.string(X.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tB,
                            label: K.intl.string(X.default.UXnPhI),
                            leading: e$.UserIcon,
                        },
                        ...k.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tL.Ay, { guild: e, size: tL.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [k],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tX(e, $))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, $],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eu.X0)(e, l)
                    ? A(e.id)
                    : (0, h.P0)((0, f.o)(K.intl.string(X.default["wY7I+H"]), g.Ck.MESSAGE));
            },
            [l, A],
        ),
        el = K.intl.string(X.default.TU9IGR),
        er = [
            K.intl.string(X.default["E+Q26x"]),
            K.intl.string(X.default["06/jqP"]),
            K.intl.string(X.default["3gSfUa"]),
        ],
        ed = [
            {
                id: "moderation-bot",
                name: K.intl.string(X.default.idRAwG),
                description: K.intl.string(X.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: K.intl.string(X.default.BLDsiz),
                description: K.intl.string(X.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: K.intl.string(X.default["+abXa8"]),
                description: K.intl.string(X.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: K.intl.string(X.default.ieAgex),
                description: K.intl.string(X.default["5yvj+f"]),
            },
        ],
        em = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: l,
                        eligibleGuilds: k,
                        onStart: (t) => G(e.name, t),
                        onSubmit: (t, a, n) => F(e, t, a, n),
                        onCancel: L,
                        onSkip: B,
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
            [k, l, L, D, B, G, F],
        ),
        ec = K.intl.string(X.default.FYK2xQ),
        ep = K.intl.string(X.default["/SUK82"]),
        eh = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || O());
            },
            [m, O],
        ),
        ef = tq($) ?? l,
        ey = (0, d.bG)([eg.Ay], () => eg.Ay.getGuildProjectsFetchState(ef), [ef]),
        eb = (0, d.bG)([eg.Ay], () => eg.Ay.getGuildProjectsFetchState(l), [l]),
        [ew, ev] = i.useState(tZ),
        ej = i.useMemo(() => tK.w.get(t$(l)) ?? !1, [l]),
        eC = "success" === eb,
        eN = (0, d.yK)([eg.Ay], () => eg.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => tX(e, l)),
        eI = ew ?? (!!eN || "error" === eb || (!eC && ej));
    i.useEffect(() => {
        eC && tK.w.set(t$(l), eN);
    }, [eC, eN, l]);
    let eT = i.useCallback((e) => {
            (tK.w.set(tW, e), ev(e));
        }, []),
        eR = i.useCallback(() => eT(!eI), [eT, eI]),
        e_ = i.useCallback(() => eT(!1), [eT]),
        eM = K.intl.string(X.default.jDPFDh),
        eO = eI ? eM : K.intl.string(X.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(tJ.nj, tJ.a0),
        children: (0, n.jsxs)("div", {
            className: tJ.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: tJ.ps,
                    children: [
                        (0, n.jsx)(tx, {
                            title: K.intl.string(X.default.Xmvb23),
                            actions: (0, n.jsx)(z.A.Icon, {
                                icon: I.Z,
                                tooltip: eO,
                                "aria-label": eO,
                                selected: eI,
                                onClick: eR,
                            }),
                        }),
                        (0, n.jsx)(S.Ip, {
                            className: tJ.Yy,
                            children: (0, n.jsx)("div", {
                                className: tJ.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(tJ.Qs, tJ.Ix),
                                    children: [
                                        (0, n.jsx)(tT, {}),
                                        (0, n.jsx)(eB, {}),
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
                                                            children: K.intl.string(X.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eP, {
                                                    listClassName: tJ.Aw,
                                                    radius: eS,
                                                    children: ed.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: tJ.EA,
                                                                children: (0, n.jsxs)(eA, {
                                                                    disabled: r,
                                                                    ariaLabel: K.intl.formatToPlainString(
                                                                        X.default.ER1uQ4,
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
                                                            children: K.intl.string(X.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eP, {
                                                    listClassName: tJ.Aw,
                                                    radius: eE,
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
                                    (0, n.jsx)(E.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: s,
                                        placeholder: el,
                                        error: u,
                                        onChange: N,
                                        onKeyDown: eh,
                                    }),
                                    null != b
                                        ? (0, n.jsx)(P.S, {
                                              checked: b,
                                              disabled: r,
                                              onChange: () => w(!b),
                                              label: K.intl.string(X.default.nyY2CS),
                                              description: K.intl.string(X.default.EwshDz),
                                          })
                                        : null,
                                    (0, n.jsxs)("div", {
                                        className: tJ.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: tJ.gH,
                                                children: (0, n.jsx)(T.l, {
                                                    selectionMode: "single",
                                                    label: K.intl.string(X.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: K.intl.string(X.default.MLg0S8),
                                                    options: ei,
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
                                                text: K.intl.string(K.t.CumH4u),
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
                    "aria-label": K.intl.string(X.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: tJ.IR,
                            children: [
                                (0, n.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tJ.RM,
                                    children: K.intl.string(X.default.Bo5fE3),
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
                        (0, n.jsxs)(S.Ip, {
                            className: tJ.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: tJ.Vw,
                                    children: (0, n.jsx)(T.l, {
                                        selectionMode: "single",
                                        label: K.intl.string(X.default.mvtKAm),
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
                                    children: K.intl.string(X.default.YnAFtT),
                                }),
                                ("unattempted" === ey || "loading" === ey) && 0 === es.length
                                    ? (0, n.jsx)("div", { className: tJ.E8, children: (0, n.jsx)(j.y, {}) })
                                    : "error" === ey && 0 === es.length
                                      ? (0, n.jsxs)("div", {
                                            className: tJ.E8,
                                            children: [
                                                (0, n.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tJ.JS,
                                                    children: K.intl.string(X.default["IN/HRP"]),
                                                }),
                                                (0, n.jsx)(x.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: K.intl.string(X.default["42EdIV"]),
                                                    onClick: () => (0, Z.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
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
                                                          children: K.intl.string(X.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: tJ.Dq,
                                              children: es.map((e) =>
                                                  (0, n.jsx)(
                                                      t9,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tF.A)(e, l),
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
                                                          children: K.intl.string(X.default.jrCnUc),
                                                      }),
                                                      (0, n.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: K.intl.string(X.default["1KEhDu"]),
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
                                                              onRemix: () => (0, tF.A)(e, l),
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
        { guildId: a, projectId: s } = e,
        o = (0, d.yK)([eg.Ay], () => eg.Ay.getOwnedProjects()),
        l = (0, d.yK)([V.Ay], () => V.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, d.bG)(
            [H.A, U.A],
            () => {
                let e = H.A.getGuild(a);
                return null != e && U.A.can(tS.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [u, m] = i.useState(""),
        c = s ?? null,
        [p, y] = i.useState(!1),
        [b, w] = i.useState(null),
        k = (0, el._)("VibegrationsScreen"),
        [v, j] = i.useState(null);
    i.useEffect(() => {
        j(null);
    }, [a]);
    let x = i.useMemo(() => (k.some((e) => e.id === a) ? a : tB), [k, a]),
        C = v ?? x,
        A = C === tB ? "user" : "guild",
        N = C === tB ? a : C,
        [I, S] = i.useState(!1),
        [E, P] = i.useState(null);
    (i.useEffect(() => {
        (0, Z.hF)(a);
    }, [a, l, r]),
        i.useEffect(() => {
            (0, Z.dm)(a, c);
        }, [a, c]));
    let T = i.useCallback(
            async (e, t, a) => {
                let n = await (0, Z.gA)({ guild_id: t, install_scope: a, flags: (0, W.RS)("guild" === a && I) });
                ((0, q.Hc)(n),
                    (0, q.r2)(n, E ?? W.v0),
                    e(n),
                    (0, F.pX)(tS.BVt.CHANNEL(t, td.VV.VIBEGRATIONS, n)),
                    m(""),
                    P(null));
            },
            [I, E],
        ),
        R = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    a = ey({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), y(!0), w(null));
                    try {
                        await T((e) => (0, q.dv)(e, t), N, A);
                    } catch (e) {
                        w((0, Q.Xd)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [T, A, N, u, p],
        ),
        _ = i.useCallback(
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
                                    K.intl.formatToPlainString(X.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        w((0, Q.Xd)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [T, A, N, p],
        ),
        M = i.useCallback(
            async (e, t) => {
                let a = await (0, Z.gA)({ guild_id: t, install_scope: "guild", flags: (0, W.RS)(I) });
                return ((0, q.Hc)(a), (0, q.r2)(a, E ?? W.v0), (0, q.dv)(a, (0, et.v8)(e)), a);
            },
            [I, E],
        ),
        O = i.useCallback(async (e, t, a, n) => {
            if (eg.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, Z.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new Q.uQ((0, Q.hj)(e), e.status);
            }
            ((0, q.dv)(t, n, void 0, { templateId: e.id }),
                (0, em.R6)(t),
                (0, F.pX)(tS.BVt.CHANNEL(a, td.VV.VIBEGRATIONS, t)),
                P(null));
        }, []),
        D = i.useCallback((e) => {
            (0, Z.xx)(e).catch(() => void 0);
        }, []),
        G = i.useCallback(
            (e) => {
                let t = eg.Ay.getProject(e)?.guild_id ?? a;
                ((0, F.pX)(tS.BVt.CHANNEL(t, td.VV.VIBEGRATIONS, e)), P(null));
            },
            [a],
        ),
        [z, L] = i.useState(!1),
        B = i.useCallback(
            async (e, t) => {
                let n = eK(e);
                if (null != n) return void (0, h.P0)((0, f.o)(n, g.Ck.FAILURE));
                L(!0);
                let i = null;
                try {
                    ((i = await (0, Z.gA)({ guild_id: a, install_scope: t, flags: (0, W.RS)("guild" === t && I) })),
                        (0, q.Hc)(i),
                        (0, q.r2)(i, E ?? W.v0),
                        await eX(i, e, K.intl.string(X.default.KjEtrZ)),
                        (0, F.pX)(tS.BVt.CHANNEL(a, td.VV.VIBEGRATIONS, i)),
                        P(null));
                } catch {
                    (null != i && (await (0, Z.xx)(i).catch(() => void 0)),
                        (0, h.P0)((0, f.o)(K.intl.string(X.default["02GpNr"]), g.Ck.FAILURE)));
                } finally {
                    L(!1);
                }
            },
            [a, I, E],
        ),
        Y = i.useCallback(
            (e) => {
                (0, F.pX)(tS.BVt.CHANNEL(a, td.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        $ = i.useCallback(() => {
            (0, F.pX)(tS.BVt.CHANNEL(a, td.VV.VIBEGRATIONS));
        }, [a]),
        J = i.useCallback((e) => {
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
              modelSettings: E,
              onModelSettingsChange: P,
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
              onImportNewProject: B,
              importing: z,
              conjureTarget: C,
              onConjureTargetChange: j,
              nativeAppChannels: "guild" === A ? I : null,
              onNativeAppChannelsChange: S,
              eligibleGuilds: k,
          });
}
