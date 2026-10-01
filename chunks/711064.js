(a.r(t), a.d(t, { default: () => t4 }), a(321073));
var n = a(477900),
    s = a(582128),
    i = a(503698),
    o = a.n(i),
    l = a(536637),
    r = a.n(l),
    d = a(478104),
    u = a(17928),
    m = a(314116),
    c = a(534890),
    p = a(646270),
    h = a(31300),
    f = a(376357),
    g = a(857250),
    y = a(97483),
    b = a(834730),
    w = a(323384),
    k = a(939249),
    v = a(866665),
    j = a(140735),
    x = a(289873),
    C = a(821609),
    A = a(92446),
    N = a(625903),
    I = a(297264),
    S = a(97893),
    P = a(364522),
    E = a(103557),
    T = a(150934),
    R = a(691885),
    M = a(789645),
    _ = a(152367),
    D = a(661531),
    O = a(627363),
    G = a(625180),
    z = a(672929),
    B = a(775946),
    F = a(742589),
    L = a(976860),
    V = a(402860),
    H = a(885386),
    U = a(696451),
    Y = a(71393),
    q = a(576705),
    K = a(486020),
    X = a(277977),
    W = a(50617),
    Z = a(375708),
    $ = a(673724),
    Q = a(948230),
    J = a(637708),
    ee = a(936494),
    et = a(443741),
    ea = a(208137),
    en = a(993396),
    es = a(822835),
    ei = a(287809),
    eo = a(427262),
    el = a(783791),
    er = a(725592),
    ed = a(459514),
    eu = a(455435),
    em = a(808728),
    ec = a(683180),
    ep = a(74029),
    eh = a(559676),
    ef = a(58551),
    eg = a(215181),
    ey = a(805332),
    eb = a(972786);
function ew(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var ek = a(58703),
    ev = a(127181),
    ej = a(192308);
function ex() {
    (0, ej.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var eC = a(413927);
function eA() {
    let e = (0, ev.TH)("desktop");
    if (0 === e.length) return null;
    let t = Z.intl.string(W.default.x07mpp);
    return (0, n.jsxs)("section", {
        className: eC.rN,
        "aria-label": t,
        children: [
            (0, n.jsxs)("div", {
                className: eC.bZ,
                children: [
                    (0, n.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Z.intl.string(W.default.h5CwHI),
                    }),
                ],
            }),
            (0, n.jsx)("ol", {
                className: eC.V,
                children: e.map((e) =>
                    (0, n.jsxs)(
                        "li",
                        {
                            className: eC.S3,
                            children: [
                                (0, n.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eC.VO,
                                    children: [
                                        (0, ek.i$)(r()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ev.MZ)(e) ? ` \xb7 ${Z.intl.string(W.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, n.jsx)(b.E, {
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
            (0, ev.B)("desktop")
                ? (0, n.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Z.intl.string(W.default.YWxThz),
                      onClick: ex,
                  })
                : null,
        ],
    });
}
var eN = a(776525);
function eI(e) {
    let { className: t, ariaLabel: a, disabled: s, onClick: i, children: o } = e;
    return (0, n.jsx)(k.D, { "aria-disabled": s, "aria-label": a, className: t, onClick: s ? void 0 : i, children: o });
}
var eS = a(865665),
    eP = a(568190);
let eE = { x: 5, y: 7 },
    eT = { x: 5, y: 4 };
function eR(e) {
    let { listClassName: t, radius: a, children: i } = e,
        [o, l] = s.useState(!1);
    return (0, n.jsxs)("div", {
        className: eP.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: i }),
            o ? (0, n.jsx)(eS.C, { area: 64, radius: a, color: D.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eM = a(210744),
    e_ = a(864970),
    eD = a(707554),
    eO = a(770178),
    eG = a(765548),
    ez = a(597643),
    eB = a(885576),
    eF = a(236730);
let eL = "heading-xxl/semibold",
    eV = !1;
function eH() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        i = (0, eG.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eO.w)(i, [], { fireOnMount: !0 }),
        l = (0, u.bG)([ez.A], () => ez.A.isConnected());
    s.useEffect(() => {
        if (!l || !t || eV) return;
        let a = !1,
            n = 0;
        function s() {
            a ||
                (n = window.setTimeout(() => {
                    ((eV = !0), e.current?.play());
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
    let r = (0, u.bG)([eB.A], () => eB.A.isIdle()),
        d = s.useRef(r);
    s.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eV && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = Z.intl.string(W.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: eF.x,
        children: t
            ? (0, n.jsx)(eD.H, { children: (0, n.jsx)(e_.o, { ref: e, text: m, variant: eL, delay: null }) })
            : (0, n.jsx)(I.D, { variant: eL, children: m }),
    });
}
var eU = a(922016),
    eY = a(980707),
    eq = a(477782),
    eK = a(81369),
    eX = a(402879);
async function eW(e, t, a) {
    (0, X.Hc)(e);
    let n = await (0, X.vX)(e, t);
    (0, X.dv)(e, a, [n]);
}
function eZ(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, $.x5)(e.size, t)
        ? null
        : Z.intl.formatToPlainString(W.default.AzziHF, { size: (0, $.ZJ)((0, $.yr)(t)) });
}
async function e$(e, t) {
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
        s = await (0, X.cS)(e, n);
    await (0, eX.F)(s, n);
}
function eQ(e) {
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
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: a,
        }),
    };
}
var eJ = a(950305),
    e0 = a(664121);
let e2 = [
    { value: "user", icon: eJ.UserIcon, nameMessage: W.default.iqXIRN },
    { value: "guild", icon: e0.R, nameMessage: W.default.LdgKdI },
];
function e6(e) {
    let { importing: t, onImport: a } = e,
        i = s.useRef(null),
        o = eQ(s.useCallback((e) => a(e, "user"), [a])),
        l = eQ(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eU.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: eU.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eY.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Z.intl.string(W.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eq.rX, {
                            label: Z.intl.string(W.default.MLg0S8),
                            children: e2
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Z.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        eq.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: s } = a;
                    return (0, n.jsx)(C.$, {
                        ...e,
                        buttonRef: i,
                        variant: "secondary",
                        size: "sm",
                        icon: eK.H,
                        text: Z.intl.string(W.default["NHP2+t"]),
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
var e1 = a(379307),
    e9 = a(629584),
    e8 = a(753514),
    e7 = a(491920);
function e3(e) {
    let { modes: t, mode: a, onChange: i, className: l } = e,
        r = s.useMemo(() => t.map((e) => ({ value: e, name: (0, e8.kZ)(e), "aria-controls": (0, e8.z3)(e) })), [t]),
        d = s.useCallback(
            (e) => {
                i(e.value);
            },
            [i],
        );
    return null == a
        ? null
        : (0, n.jsx)(e9.I, {
              role: "tablist",
              look: "pill",
              className: o()(e7.b, l),
              optionClassName: e7.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var e5 = a(663417),
    e4 = a(70688),
    te = a(173936),
    tt = a(473935),
    ta = a(408278),
    tn = a(365199),
    ts = a(7437),
    ti = a(147036),
    to = a(957565),
    tl = a(123917),
    tr = a(557875);
let td = new Set();
var tu = a(976814),
    tm = a(746080),
    tc = a(793712);
let tp = [];
function th(e) {
    (0, f.P)((0, g.o)(e, y.Ck.FAILURE));
}
function tf(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: i,
            projectGuildId: o,
            isOwner: l,
            canRemix: r,
            onExport: d,
            onImport: c,
            onRemix: p,
            onConnectTool: h,
            onVersionHistory: b,
            onRestorePoints: w,
            onRefresh: k,
            isRefreshing: j = !1,
            onClose: x,
            refreshApplicationId: C,
            previewProjectId: A,
            trigger: I = "header",
        } = e,
        S = s.useRef(null),
        { pending: P, refresh: E } = (0, ts.A)(C ?? null),
        { pending: T, connect: R } = (function (e, t) {
            let [a, n] = s.useState(td),
                i = s.useRef(td),
                o = s.useCallback((e) => {
                    ((i.current = (0, tr.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, tr.K9)(i.current, a.type);
                        async function l() {
                            let n = await (0, X.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, tl.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tr.rq)(n.error)
                                          ? Z.intl.string(W.default.avu1u4)
                                          : Z.intl.string(W.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(A ?? null, th),
        M = (0, u.bG)([X.Ay], () => (null == A ? tp : X.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: s } = e,
                i = [];
            for (let { connection: e, offer: o } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: Z.intl.string(W.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                i.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Z.intl.formatToPlainString(W.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: s.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Z.intl.formatToPlainString(W.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: P,
            offers: s.useMemo(() => (0, tr.Xl)(M), [M]),
            connectPending: T,
        }),
        D = s.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        O = null != p && r,
        G = l && null != c,
        z = O || null != d || G || null != h || null != b || null != w,
        B = to.p5 && null != i,
        L = to.p5;
    return null != k || null != x || z || L || l
        ? (0, n.jsx)(eU.Y, {
              targetElementRef: S,
              position: "bottom",
              align: "right",
              animation: eU.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, n.jsxs)(eY.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Z.intl.string(Z.t.ogxXGq),
                      onClose: s,
                      onSelect: s,
                      children: [
                          null != k || null != x
                              ? (0, n.jsxs)(eq.rX, {
                                    children: [
                                        null != k
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "refresh",
                                                  icon: e5.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e5.RefreshIcon },
                                                  label: Z.intl.string(W.default.xKexN1),
                                                  disabled: j,
                                                  action: k,
                                              })
                                            : null,
                                        null != x
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "close",
                                                  icon: e4.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: e4.DoorExitIcon },
                                                  label: Z.intl.string(W.default.Ea0Wrr),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, n.jsx)(eq.rX, {
                                    children: _.map((e) =>
                                        (0, n.jsx)(
                                            eq.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : D.get(e.connectionType);
                                                    null != t && R(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          z
                              ? (0, n.jsxs)(eq.rX, {
                                    children: [
                                        O
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "remix",
                                                  label: Z.intl.string(W.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "export",
                                                  label: Z.intl.string(W.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        G
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "import",
                                                  label: Z.intl.string(W.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != h
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "connect-tool",
                                                  label: Z.intl.string(W.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "version-history",
                                                  label: Z.intl.string(W.default.jAWwzi),
                                                  action: b,
                                              })
                                            : null,
                                        null != w
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "restore-points",
                                                  label: Z.intl.string(W.default.FRjicO),
                                                  action: w,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          L
                              ? (0, n.jsxs)(eq.rX, {
                                    children: [
                                        B
                                            ? (0, n.jsx)(eq.Dr, {
                                                  id: "copy-link",
                                                  label: Z.intl.string(Z.t.WqhZss),
                                                  icon: te.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: te.LinkIcon },
                                                  action: () =>
                                                      (0, to.C)((0, ti.n)(i, tm.VV.VIBEGRATIONS, t), () =>
                                                          (0, f.P)(
                                                              (0, g.o)(Z.intl.string(Z.t["L/PwZf"]), y.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, n.jsx)(eq.Dr, {
                                            id: "copy-project-id",
                                            label: Z.intl.string(W.default.b4TqpT),
                                            icon: tt.L,
                                            leadingAccessory: { type: "icon", icon: tt.L },
                                            action: () =>
                                                (0, to.C)(t, () =>
                                                    (0, f.P)((0, g.o)(Z.intl.string(W.default.WOKsTg), y.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          l
                              ? (0, n.jsxs)(eq.rX, {
                                    children: [
                                        (0, n.jsx)(eq.Dr, {
                                            id: "settings",
                                            label: Z.intl.string(W.default["xhcY+n"]),
                                            icon: N.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: N.SettingsIcon },
                                            action: () =>
                                                (0, tu.A)(t, { guildId: o ?? i, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, n.jsx)(eq.Dr, {
                                            id: "delete",
                                            label: Z.intl.string(Z.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, m.A)({
                                                    title: Z.intl.formatToPlainString(W.default.ZokHVz, { name: a }),
                                                    subtitle: Z.intl.string(W.default.NmF939),
                                                    confirmText: Z.intl.string(Z.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, Q.K)(t, () =>
                                                            (0, f.P)(
                                                                (0, g.o)(Z.intl.string(W.default.tqKZCi), y.Ck.FAILURE),
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
                      ref: S,
                      className: tc.h,
                      children:
                          "iconButton" === I
                              ? (0, n.jsx)(v.m, {
                                    text: Z.intl.string(Z.t["UKOtz+"]),
                                    children: (0, n.jsx)(ta.K, {
                                        icon: tn.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": Z.intl.string(Z.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": s,
                                        onClick: a,
                                    }),
                                })
                              : (0, n.jsx)(F.A.Icon, {
                                    icon: tn.MoreHorizontalIcon,
                                    tooltip: Z.intl.string(Z.t["UKOtz+"]),
                                    "aria-label": Z.intl.string(Z.t["UKOtz+"]),
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
var tg = a(778712),
    ty = a(97808),
    tb = a(104171),
    tw = a(889227),
    tk = a(350086);
let tv = tg._3.SIZE_16;
function tj(e) {
    return e instanceof tw.A
        ? (0, n.jsx)(ty.eu, { src: e.getAvatarURL(void 0, (0, tg.FT)(tv)), size: tv, "aria-hidden": !0 })
        : null;
}
function tx(e) {
    let { creator: t, className: a } = e,
        s = [t.creator, ...t.collaborators],
        i = s.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(tk.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tb.Ay, { users: s.slice(0, 3), max: 3, size: tb.DN.SIZE_16, renderUser: tj }),
            i > 0 ? (0, n.jsxs)(b.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var tC = a(769979);
function tA(e) {
    let { title: t, actions: a, breadcrumb: s } = e;
    return (0, n.jsx)(F.A, {
        hideSearch: !0,
        toolbar: a,
        className: tC.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: tC.QF,
            children: [
                (0, n.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: D.A.colors.TEXT_STRONG,
                    className: tC.Kk,
                }),
                null != s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(F.A.Title, { onClick: s.onClick, children: s.title }),
                              (0, n.jsx)(F.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(F.A.Title, { className: tC.Qw, wrapperClassName: tC.DD, children: t }),
            ],
        }),
    });
}
var tN = a(73432),
    tI = a(683071),
    tS = a(47167),
    tP = a(994500),
    tE = a(652215);
let tT = "conjuring-help";
var tR = a(107148);
function tM() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([ei.default, Y.A, em.Ay, tP.A], () => {
                let e = ei.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(tE.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = em.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tS.m1)(t, ei.default, tP.A) === tT;
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
                    ? (0, L.pX)(tE.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tl.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: tR.l,
              children: (0, n.jsx)(tI.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Z.intl.format(W.default["4BsHmp"], { channel: tT, onNavigate: t }),
              }),
          });
}
var t_ = a(321593),
    tD = a(580954),
    tO = a(227189),
    tG = a(189213),
    tz = a(145216);
function tB(e) {
    let { reason: t, transitionState: a, onClose: s } = e,
        i = t === tz.H.PERMISSIONS;
    return (0, n.jsx)(tG.a, {
        transitionState: a,
        onClose: s,
        title: Z.intl.string(i ? W.default.Rtlv25 : W.default["+UouPe"]),
        subtitle: Z.intl.string(i ? W.default["nDQB/b"] : W.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Z.intl.string(i ? Z.t.BddRzS : W.default["+Zh4FA"]), variant: "primary", onClick: s }],
    });
}
var tF = a(480007),
    tL = a(584936),
    tV = a(548118);
let tH = "user",
    tU = "user",
    tY = "no-server",
    tq = new Map();
function tK(e) {
    return tq.get(e) ?? null;
}
function tX(e) {
    switch (e) {
        case "all":
        case tU:
        case tY:
            return null;
        default:
            return e;
    }
}
function tW(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tU:
            return "user" === e.install_scope;
        case tY:
            return null == (0, J.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tZ = a(506774);
let t$ = "VibegrationsProjectsPanelOpen";
function tQ() {
    return tZ.w.get(t$) ?? null;
}
function tJ(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var t0 = a(165610),
    t2 = a(352978);
function t6(e) {
    return (0, n.jsx)(c.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function t1(e) {
    return (0, n.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function t9(e) {
    return (0, n.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
let t8 = {
    showPublishBlocked: function (e) {
        (0, ej.openModal)((t) => (0, n.jsx)(tB, { ...t, reason: e }));
    },
    openPublishNotes: tF.A,
    showError: (e) => (0, f.P)((0, g.o)(e, y.Ck.FAILURE)),
    openProfile: (e) => {
        (0, V.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(a.bind(a, 468689))
            .then((t) => {
                let { default: a } = t;
                return a.open(e, tE.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function t7(e) {
    var t;
    let a,
        i,
        l,
        c,
        p,
        h,
        C,
        A,
        N,
        I,
        { project: S, guildId: P, onSelect: E, onRemix: T, shared: R = !1 } = e,
        M =
            ((a = S.id),
            (i = S.name),
            (l = s.useRef(!1)),
            (c = s.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, f.P)((0, g.o)(Z.intl.formatToPlainString(W.default.u9TapG, { name: i }), y.Ck.MESSAGE)),
                    e$(a, i)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, f.P)(
                                    (0, g.o)(
                                        409 === (t = e instanceof X._v ? e.status : null)
                                            ? Z.intl.string(W.default.uB40Hz)
                                            : 404 === t
                                              ? Z.intl.string(W.default.wCq2jC)
                                              : Z.intl.string(W.default.G2GqyP),
                                        y.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [a, i])),
            {
                onExport: c,
                onImport: (p = eQ(
                    s.useCallback(
                        (e) => {
                            let t = eZ(e);
                            null != t
                                ? (0, f.P)((0, g.o)(t, y.Ck.FAILURE))
                                : (0, m.A)({
                                      title: Z.intl.formatToPlainString(W.default.XYZqZK, { name: i }),
                                      subtitle: Z.intl.string(W.default["6syXoH"]),
                                      confirmText: Z.intl.string(W.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, L.pX)(tE.BVt.CHANNEL(P, tm.VV.VIBEGRATIONS, a));
                                          try {
                                              await eW(a, e, Z.intl.string(W.default.C7GU2r));
                                          } catch {
                                              (0, f.P)((0, g.o)(Z.intl.string(W.default["02GpNr"]), y.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [a, i, P],
                    ),
                )).open,
                importInput: p.input,
            }),
        _ = S.preview_application_id ?? S.application_id,
        { data: D } = (0, O.YY)(_),
        G = D?.icon == null ? null : K.Ay.getApplicationIconURL({ id: _, icon: D.icon, size: 40 }),
        z =
            null == S.updated_at
                ? null
                : Z.intl.formatToPlainString(W.default.oMDaqr, { time: r()(S.updated_at).fromNow() }),
        F = (0, J.HC)(S),
        V =
            (0, u.bG)([Y.A], () => (null == F ? null : (Y.A.getGuild(F)?.name ?? null)), [F]) ??
            Z.intl.string(W.default["qqH+iN"]),
        H = (0, u.bG)([eb.Ay], () => eb.Ay.isProjectDeleting(S.id), [S.id]),
        U =
            ((t = R ? S : null),
            (h = t?.id),
            (C = t?.owner_user_id),
            (A = (0, u.yK)(
                [el.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  el.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== C ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, C],
            )),
            s.useEffect(() => {
                null != C && ((0, er.Y)(C), A.forEach(er.Y));
            }, [C, A]),
            (N = (0, u.bG)([ei.default], () => (null == C ? null : ei.default.getUser(C)), [C])),
            (I = (0, u.yK)([ei.default], () => A.map((e) => ei.default.getUser(e)).filter((e) => null != e), [A])),
            s.useMemo(
                () =>
                    null == N
                        ? null
                        : {
                              creator: N,
                              collaborators: I,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? Z.intl.formatToPlainString(W.default.TwgkQe, { creator: e })
                                      : Z.intl.formatToPlainString(W.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (a = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === a
                                                      ? Z.intl.formatToPlainString(Z.t["8s9z8P"], { first: t[0] })
                                                      : 2 === a
                                                        ? Z.intl.formatToPlainString(Z.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === a
                                                          ? Z.intl.formatToPlainString(Z.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : Z.intl.formatToPlainString(Z.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: a - 3,
                                                            }),
                                        });
                              })(
                                  (0, eo.mG)(N),
                                  I.map((e) => (0, eo.mG)(e)),
                              ),
                          },
                [N, I],
            )),
        q = s.useId(),
        $ = (0, n.jsx)(b.E, { variant: "text-md/semibold", color: "text-strong", className: t2.j1, children: S.name }),
        Q =
            null == G
                ? (0, n.jsx)("div", {
                      className: t2.a8,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(w.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, n.jsx)("img", { alt: "", src: G, className: t2.VJ }),
        ee = (0, eg.lE)(S.id);
    return (0, n.jsxs)("div", {
        className: o()(t2.OY, { [t2.Wy]: H }),
        "aria-busy": H,
        children: [
            (0, n.jsx)(t_.Ay, { projectId: S.id }),
            null == ee || H ? null : (0, n.jsx)("div", { className: t2.SB, "aria-hidden": !0 }),
            (0, n.jsxs)(k.D, {
                className: t2.W6,
                onClick: H ? void 0 : E,
                tabIndex: H ? -1 : void 0,
                "aria-describedby": null != U ? q : void 0,
                children: [
                    Q,
                    (0, n.jsxs)("div", {
                        className: t2.MM,
                        children: [
                            (0, n.jsxs)("div", {
                                className: t2.Ub,
                                children: [
                                    null != U ? (0, n.jsx)(v.m, { text: U.label, ariaHidden: !0, children: $ }) : $,
                                    null == U || H ? null : (0, n.jsx)(tx, { creator: U, className: t2.rb }),
                                    ee !== d.I.NEEDS_INPUT || H
                                        ? null
                                        : (0, n.jsxs)("div", {
                                              className: t2.fs,
                                              children: [
                                                  (0, n.jsx)(B.A, { mentionsCount: 1 }),
                                                  (0, n.jsx)(j.A, { children: Z.intl.string(W.default.V3e2Yd) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: t2.h3,
                                children: [
                                    (0, n.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: t2.Wb,
                                        children: H ? Z.intl.string(W.default.EwXXks) : V,
                                    }),
                                    null == z || H
                                        ? null
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: t2.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: t2.zM,
                                                      children: z,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != U ? (0, n.jsx)(j.A, { id: q, children: U.label }) : null,
            (0, n.jsx)("div", {
                className: t2.M2,
                children: H
                    ? (0, n.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: t2.Pl,
                          children: [
                              (0, n.jsx)(tf, {
                                  projectId: S.id,
                                  projectName: S.name,
                                  guildId: P,
                                  projectGuildId: S.guild_id,
                                  isOwner: (0, eb.PV)(S),
                                  canRemix: (0, eb.H_)(S),
                                  onRemix: T,
                                  onExport: M.onExport,
                                  onImport: M.onImport,
                                  trigger: "iconButton",
                              }),
                              M.importInput,
                          ],
                      }),
            }),
        ],
    });
}
function t3(e) {
    var t;
    let { project: i, projectsLoaded: o, onBack: l, guildId: r } = e,
        [d, c] = s.useState(!0),
        [p, h] = s.useState(!1),
        [w, k] = s.useState(!1),
        [j, x] = s.useState(!1),
        S = H.Q_.useSetting(),
        [P, E] = s.useState(null),
        [T, R] = s.useState(null),
        M = i?.id ?? null,
        _ = s.useRef(M),
        D = s.useRef(!0),
        B = s.useRef(!1),
        V = s.useRef(null);
    ((_.current = M),
        s.useEffect(
            () => (
                (D.current = !0),
                () => {
                    D.current = !1;
                }
            ),
            [],
        ));
    let U = (0, u.bG)([eb.Ay], () => (null == M ? null : eb.Ay.getIntegrationStatus(M)), [M]),
        { data: Y, isLoading: q } = (0, O.YY)(i?.preview_application_id ?? void 0),
        K = null != M && T !== M,
        $ = U?.preview_ready === !0,
        J = U?.has_activity === !0,
        {
            availability: ee,
            activeMode: ea,
            setMode: en,
            widgetApplicationId: ei,
        } = (0, es.q)({
            applicationId: i?.preview_application_id ?? null,
            previewApplicationId: i?.preview_application_id ?? null,
            declaredActivity: J,
            installScope: i?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
        }),
        eo = (0, ef.Qg)({
            installScope: i?.install_scope ?? null,
            previewReady: $,
            integrationInstalled: U?.integration_installed ?? null,
            botPermissionsChanged: U?.bot_permissions_changed === !0,
        }),
        el = d && !j && !p && !w,
        er = Z.intl.string(el ? W.default.YdgE0j : W.default.aWVf4j),
        ed = s.useCallback(() => {
            if (j || p || w) {
                (x(!1), h(!1), k(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [j, p, w]),
        eg = s.useCallback(() => c(!1), []),
        { active: ew } = (0, ep.Q_)(M),
        ek = s.useRef(null),
        ev = (0, eh.o4)(M),
        ex = Z.intl.string(ev ? W.default.bfQ4Ki : ew ? W.default.rfNEHn : W.default.lXcEa2),
        eC = s.useCallback(() => {
            if (null != M) {
                if (ew) return void (0, ep.PS)(M);
                (x(!1), h(!1), k(!1), c(!0), (0, ep.nI)(M));
            }
        }, [M, ew]),
        eA = s.useCallback(() => {
            x((e) => !e && (c(!0), h(!1), k(!1), !0));
        }, []),
        eI = s.useCallback(() => x(!1), []),
        eS = s.useCallback(
            (e) => {
                if (null == i || B.current) return;
                let t = i.id;
                function a() {
                    return D.current && _.current === t;
                }
                ((B.current = !0),
                    h(!1),
                    c(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, X.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && E({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, f.P)((0, g.o)(Z.intl.string(W.default.q6iZ84), y.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (B.current = !1);
                        }));
            },
            [i],
        ),
        eP = (0, u.bG)([ey.A], () => ey.A.isBuilderPreviewMobile()),
        eE = Z.intl.string(eP ? W.default["3uCc8U"] : W.default["+nzCxZ"]),
        eT = s.useCallback(() => (0, Q.GG)(!eP), [eP]),
        eR = (0, z.A)(i?.preview_application_id ?? null, t0.sd),
        e_ = (0, t0.x1)(eR) && eR.data.proxyTicketRefreshing,
        eD = s.useCallback(() => {
            null == eR || e_ || G.A.refreshProxyTicket(eR.id);
        }, [eR, e_]),
        eO = s.useCallback(() => {
            var e, t;
            (null != i && ((e = i.id), (t = eR?.id), (0, X.Bn)(e), (0, tD.A)().leaveFrame(t)), l());
        }, [i, eR?.id, l]),
        eG = s.useCallback(() => {
            null != i && (c(!0), (0, X.dv)(i.id, Z.intl.string(W.default["2ejwtJ"])));
        }, [i]),
        ez = eQ(
            s.useCallback(
                (e) => {
                    if (null == i) return;
                    let t = i.id,
                        a = eZ(e);
                    null != a
                        ? (0, f.P)((0, g.o)(a, y.Ck.FAILURE))
                        : (0, m.A)({
                              title: Z.intl.formatToPlainString(W.default.XYZqZK, { name: i.name }),
                              subtitle: Z.intl.string(W.default["6syXoH"]),
                              confirmText: Z.intl.string(W.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await eW(t, e, Z.intl.string(W.default.C7GU2r));
                                  } catch {
                                      (0, f.P)((0, g.o)(Z.intl.string(W.default["02GpNr"]), y.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [i],
            ),
        ),
        eB = s.useCallback(() => {
            null != i && (0, tL.A)(i, r);
        }, [i, r]),
        eF = s.useCallback(async () => {
            if (null == M || _.current !== M) return;
            V.current?.abort();
            let e = new AbortController();
            ((V.current = e), R(null));
            try {
                await (0, Q.U1)(M, e.signal);
            } catch {
            } finally {
                e.signal.aborted || V.current !== e || _.current !== M || R(M);
            }
        }, [M]);
    s.useEffect(
        () => (
            eF(),
            () => {
                (V.current?.abort(), (V.current = null));
            }
        ),
        [eF],
    );
    let eL = (0, et.H)(i ?? null, U ?? null, r),
        eV = ((t = i?.application_id ?? null), (0, u.bG)([em.Ay], () => (null == t ? null : (0, ec.SH)(r, t)), [r, t])),
        eH = s.useMemo(() => (null == eV ? null : () => (0, L.pX)(tE.BVt.CHANNEL(r, eV))), [r, eV]),
        eU = s.useCallback(async () => {
            null != i && (await (0, et.w)(i, eL));
        }, [eL, i]),
        eY = s.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eF();
        }, [eF, eU]),
        eq = s.useMemo(() => {
            let e = i?.preview_application_id;
            return null == e || q || K
                ? null
                : {
                      ...(0, tO.p)({ applicationId: e, application: Y ?? null, guildId: eL }),
                      onClose: () => {
                          eY();
                      },
                  };
        }, [K, eY, eL, q, Y, i?.preview_application_id]),
        eK = eo ? { type: "permissions", authorizeProps: eq } : K && null == U ? { type: "checking" } : void 0,
        eX = (0, u.bG)([eb.Ay], () => null != M && eb.Ay.isProjectDeleting(M), [M]);
    s.useEffect(() => {
        ((null == i && o) || eX) && (0, L.bG)(tE.BVt.CHANNEL(r, tm.VV.VIBEGRATIONS));
    }, [r, i, o, eX]);
    let e$ = s.useMemo(() => ({ guildId: r, platform: t8, busy: K || q }), [r, K, q]),
        eJ = (0, eu.Ay)(M, e$),
        e0 = eJ?.upToDate === !0 ? Z.intl.string(W.default["5U1fkv"]) : (eJ?.disabledReason ?? null),
        e2 =
            null == eJ
                ? null
                : (0, n.jsx)("div", {
                      className: t2.As,
                      children: (0, n.jsx)(v.m, {
                          text: e0,
                          asContainer: !0,
                          children: (0, n.jsx)(C.$, {
                              size: "sm",
                              variant: eJ.upToDate ? "secondary" : "primary",
                              loading: eJ.publishing,
                              disabled: eJ.disabled,
                              onClick: () => eJ.run("header"),
                              text: eJ.label,
                          }),
                      }),
                  }),
        e6 = (0, n.jsx)(tA, {
            title: i?.name ?? Z.intl.string(W.default.F2dRba),
            breadcrumb: { title: Z.intl.string(W.default.Xmvb23), onClick: l },
            actions:
                null == i
                    ? null
                    : (0, n.jsxs)("div", {
                          className: t2.FO,
                          children: [
                              ee.showModeSwitch ? (0, n.jsx)(e3, { modes: ee.modes, mode: ea, onChange: en }) : null,
                              (0, n.jsx)(F.A.Icon, {
                                  icon: eP ? t9 : t1,
                                  tooltip: eE,
                                  "aria-label": eE,
                                  selected: eP,
                                  onClick: eT,
                              }),
                              (0, n.jsx)(F.A.Icon, {
                                  ref: ek,
                                  icon: tN.A,
                                  tooltip: ex,
                                  "aria-label": ex,
                                  selected: ew,
                                  disabled: ev,
                                  onClick: eC,
                              }),
                              "frame" === ea ? (0, n.jsx)(eM.A, { frame: eR, controlProjectId: i.id }) : null,
                              (0, n.jsx)("div", { className: t2.YJ }),
                              S
                                  ? (0, n.jsx)(F.A.Icon, {
                                        icon: A.BugIcon,
                                        tooltip: Z.intl.string(W.default["8MLfBT"]),
                                        "aria-label": Z.intl.string(W.default["8MLfBT"]),
                                        selected: j,
                                        onClick: eA,
                                    })
                                  : null,
                              (0, n.jsx)(F.A.Icon, {
                                  icon: N.SettingsIcon,
                                  tooltip: Z.intl.string(W.default.cWmjzs),
                                  "aria-label": Z.intl.string(W.default.cWmjzs),
                                  onClick: () => (0, tu.A)(i.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tf, {
                                  projectId: i.id,
                                  projectName: i.name,
                                  guildId: r,
                                  projectGuildId: i.guild_id,
                                  isOwner: (0, eb.PV)(i),
                                  canRemix: (0, eb.H_)(i),
                                  onRefresh: (0, t0.x1)(eR) ? eD : void 0,
                                  isRefreshing: e_,
                                  onClose: eO,
                                  onExport: eG,
                                  onImport: ez.open,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = i.id),
                                          void (0, ej.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  a.e("964476"),
                                                  a.e("988322"),
                                              ]).then(a.bind(a, 748985));
                                              return (a) => (0, n.jsx)(t, { ...a, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      P?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (c(!0), x(!1), k(!1), h(!0));
                                            },
                                  onRestorePoints: () => {
                                      (c(!0), x(!1), h(!1), k(!0));
                                  },
                                  refreshApplicationId:
                                      ee.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ee.profileState
                                          ? ei
                                          : null,
                                  previewProjectId: i.id,
                              }),
                              el
                                  ? null
                                  : (0, n.jsx)(F.A.Icon, { icon: t6, tooltip: er, "aria-label": er, onClick: ed }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: t2.nj,
        children: [
            ez.input,
            (0, n.jsx)("main", {
                className: t2.JX,
                children:
                    null == i
                        ? (0, n.jsxs)("div", {
                              className: t2.j5,
                              children: [
                                  e6,
                                  (0, n.jsxs)("div", {
                                      className: t2.sD,
                                      children: [
                                          (0, n.jsx)(I.D, {
                                              variant: "heading-lg/semibold",
                                              children: Z.intl.string(W.default.F2dRba),
                                          }),
                                          (0, n.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Z.intl.string(W.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Z.intl.string(W.default["42EdIV"]),
                                              onClick: () => (0, Q.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(eu.Qc.Provider, {
                              value: e$,
                              children: (0, n.jsx)(
                                  eN.A,
                                  {
                                      projectId: i.id,
                                      designFeedbackToggleRef: ek,
                                      applicationId: i.preview_application_id,
                                      previewApplicationId: i.preview_application_id,
                                      surface: t0.sd,
                                      header: e6,
                                      chatOpen: d,
                                      onCloseChat: eg,
                                      chatHeaderAction: e2,
                                      versionHistoryOpen: p,
                                      onCloseVersionHistory: () => h(!1),
                                      restorePointsOpen: w,
                                      onCloseRestorePoints: () => k(!1),
                                      installScope: i.install_scope,
                                      debugOpen: S && j,
                                      onCloseDebug: eI,
                                      onRestoreVersion: eS,
                                      restoreState: P,
                                      previewReady: $,
                                      previewGate: eK,
                                      availability: ee,
                                      activeMode: ea,
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
function t5(e) {
    let {
            projects: t,
            idea: i,
            guildId: l,
            submitting: r,
            createError: d,
            createDisabled: m,
            conjureTarget: c,
            onConjureTargetChange: p,
            nativeAppChannels: h,
            onNativeAppChannelsChange: w,
            eligibleGuilds: k,
            modelSettings: v,
            onModelSettingsChange: j,
            onSelectProject: A,
            onIdeaChange: N,
            onCreate: I,
            onCreateFromTemplate: O,
            onStartTemplate: G,
            onSubmitTemplate: z,
            onCancelTemplate: B,
            onSkipTemplate: L,
            onImportNewProject: V,
            importing: H,
        } = e,
        [U, q] = s.useState(() => ({ guildId: l, filter: tK(l) })),
        K = (U.guildId === l ? U.filter : tK(l)) ?? l,
        X = s.useCallback(
            (e) => {
                (tq.set(l, e), q({ guildId: l, filter: e }));
            },
            [l],
        ),
        J = (0, u.yK)(
            [Y.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = Y.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, l),
            [t, l],
        ),
        ee = s.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Z.intl.string(W.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tU,
                    leading: eJ.UserIcon,
                    label: Z.intl.string(W.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tY,
                    leading: e0.R,
                    label: Z.intl.string(W.default["qqH+iN"]),
                },
                ...J.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tV.Ay, { guild: e, size: tV.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [J],
        ),
        et = (0, u.yK)(
            [eb.Ay, Y.A],
            () => {
                let e = tX(K);
                if (null != e) return eb.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    eb.Ay.hasFetchedGuildProjects(e.id) && t.push(...eb.Ay.getSharedProjects(e.id));
                return t;
            },
            [K],
        );
    s.useEffect(() => {
        let e = tX(K);
        null == e || eb.Ay.hasFetchedGuildProjects(e) || (0, Q.hF)(e);
    }, [K]);
    let en = s.useMemo(
            () =>
                et
                    .filter((e) => tW(e, K))
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [et, K],
        ),
        es = s.useMemo(
            () => [
                {
                    label: Z.intl.string(W.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tH,
                            label: Z.intl.string(W.default.UXnPhI),
                            leading: eJ.UserIcon,
                        },
                        ...k.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tV.Ay, { guild: e, size: tV.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [k],
        ),
        ei = s.useMemo(
            () =>
                t
                    .filter((e) => tW(e, K))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, K],
        ),
        eo = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ec.X0)(e, l)
                    ? A(e.id)
                    : (0, f.P)((0, g.o)(Z.intl.string(W.default["wY7I+H"]), y.Ck.MESSAGE));
            },
            [l, A],
        ),
        el = Z.intl.string(W.default.TU9IGR),
        er = [
            Z.intl.string(W.default["E+Q26x"]),
            Z.intl.string(W.default["06/jqP"]),
            Z.intl.string(W.default["3gSfUa"]),
        ],
        ed = [
            {
                id: "moderation-bot",
                name: Z.intl.string(W.default.idRAwG),
                description: Z.intl.string(W.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: Z.intl.string(W.default.BLDsiz),
                description: Z.intl.string(W.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Z.intl.string(W.default["+abXa8"]),
                description: Z.intl.string(W.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: Z.intl.string(W.default.ieAgex),
                description: Z.intl.string(W.default["5yvj+f"]),
            },
        ],
        eu = s.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: l,
                        eligibleGuilds: k,
                        onStart: (t) => G(e.name, t),
                        onSubmit: (t, a, n) => z(e, t, a, n),
                        onCancel: B,
                        onSkip: L,
                    }),
                    (0, ej.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                a.bind(a, 248702),
                            );
                            return (a) => (0, n.jsx)(e, { ...a, ...t });
                        },
                        { modalKey: "VibegrationsTemplateWizardModal" },
                    ));
                }
                O(e);
            },
            [k, l, B, O, L, G, z],
        ),
        em = Z.intl.string(W.default.FYK2xQ),
        ep = Z.intl.string(W.default["/SUK82"]),
        eh = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || I());
            },
            [m, I],
        ),
        ef = tX(K) ?? l,
        eg = (0, u.bG)([eb.Ay], () => eb.Ay.getGuildProjectsFetchState(ef), [ef]),
        ey = (0, u.bG)([eb.Ay], () => eb.Ay.getGuildProjectsFetchState(l), [l]),
        [ew, ek] = s.useState(tQ),
        ev = s.useMemo(() => tZ.w.get(tJ(l)) ?? !1, [l]),
        ex = "success" === ey,
        eC = (0, u.yK)([eb.Ay], () => eb.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => tW(e, l)),
        eN = ew ?? (!!eC || "error" === ey || (!ex && ev));
    s.useEffect(() => {
        ex && tZ.w.set(tJ(l), eC);
    }, [ex, eC, l]);
    let eS = s.useCallback((e) => {
            (tZ.w.set(t$, e), ek(e));
        }, []),
        eP = s.useCallback(() => eS(!eN), [eS, eN]),
        eM = s.useCallback(() => eS(!1), [eS]),
        e_ = Z.intl.string(W.default.jDPFDh),
        eD = eN ? e_ : Z.intl.string(W.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(t2.nj, t2.a0),
        children: (0, n.jsxs)("div", {
            className: t2.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: t2.ps,
                    children: [
                        (0, n.jsx)(tA, {
                            title: Z.intl.string(W.default.Xmvb23),
                            actions: (0, n.jsx)(F.A.Icon, {
                                icon: S.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eN,
                                onClick: eP,
                            }),
                        }),
                        (0, n.jsx)(P.Ip, {
                            className: t2.Yy,
                            children: (0, n.jsx)("div", {
                                className: t2.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(t2.Qs, t2.Ix),
                                    children: [
                                        (0, n.jsx)(tM, {}),
                                        (0, n.jsx)(eH, {}),
                                        (0, n.jsxs)("section", {
                                            className: t2.WI,
                                            "aria-label": em,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t2.G9,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: em,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Z.intl.string(W.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eR, {
                                                    listClassName: t2.Aw,
                                                    radius: eE,
                                                    children: ed.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t2.EA,
                                                                children: (0, n.jsxs)(eI, {
                                                                    disabled: r,
                                                                    ariaLabel: Z.intl.formatToPlainString(
                                                                        W.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(t2.nx, t2.rz),
                                                                    onClick: () => eu(e),
                                                                    children: [
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t2.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t2.BK,
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
                                            className: t2.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t2.G9,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ep,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Z.intl.string(W.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eR, {
                                                    listClassName: t2.Aw,
                                                    radius: eT,
                                                    children: er.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t2.EA,
                                                                children: (0, n.jsx)(eI, {
                                                                    disabled: r,
                                                                    className: t2.nx,
                                                                    onClick: () => I(e),
                                                                    children: (0, n.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t2.un,
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
                                        (0, n.jsx)(eA, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: t2.Yl,
                            children: (0, n.jsxs)("div", {
                                className: o()(t2.Qs, t2.DA),
                                children: [
                                    (0, n.jsx)(E.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: i,
                                        placeholder: el,
                                        error: d,
                                        onChange: N,
                                        onKeyDown: eh,
                                    }),
                                    null != h
                                        ? (0, n.jsx)(T.S, {
                                              checked: h,
                                              disabled: r,
                                              onChange: () => w(!h),
                                              label: Z.intl.string(W.default.nyY2CS),
                                              description: Z.intl.string(W.default.EwshDz),
                                          })
                                        : null,
                                    (0, n.jsxs)("div", {
                                        className: t2.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: t2.gH,
                                                children: (0, n.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: Z.intl.string(W.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: Z.intl.string(W.default.MLg0S8),
                                                    options: es,
                                                    value: c,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, n.jsx)(e1.A, {
                                                settings: v ?? $.v0,
                                                tiers: $.qf,
                                                choices: (0, ea.e)()
                                                    ? {
                                                          main: [...$.S8.main, ...$.wF.main],
                                                          subagent: [...$.S8.subagent, ...$.wF.subagent],
                                                          thinking: $.S8.thinking,
                                                      }
                                                    : $.S8,
                                                disabled: r,
                                                onChange: j,
                                            }),
                                            (0, n.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: Z.intl.string(Z.t.CumH4u),
                                                disabled: m,
                                                loading: r,
                                                onClick: () => I(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("aside", {
                    className: t2.pA,
                    hidden: !eN,
                    "aria-label": Z.intl.string(W.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: t2.IR,
                            children: [
                                (0, n.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t2.RM,
                                    children: Z.intl.string(W.default.Bo5fE3),
                                }),
                                (0, n.jsxs)("div", {
                                    className: t2.Ss,
                                    children: [
                                        (0, n.jsx)(e6, { importing: H, onImport: V }),
                                        (0, n.jsx)(F.A.Icon, { icon: M.P, tooltip: e_, "aria-label": e_, onClick: eM }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)(P.Ip, {
                            className: t2.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: t2.Vw,
                                    children: (0, n.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: Z.intl.string(W.default.mvtKAm),
                                        hideLabel: !0,
                                        options: ee,
                                        value: K,
                                        onSelectionChange: X,
                                    }),
                                }),
                                (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t2.wE,
                                    children: Z.intl.string(W.default.YnAFtT),
                                }),
                                ("unattempted" === eg || "loading" === eg) && 0 === ei.length
                                    ? (0, n.jsx)("div", { className: t2.E8, children: (0, n.jsx)(x.y, {}) })
                                    : "error" === eg && 0 === ei.length
                                      ? (0, n.jsxs)("div", {
                                            className: t2.E8,
                                            children: [
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t2.JS,
                                                    children: Z.intl.string(W.default["IN/HRP"]),
                                                }),
                                                (0, n.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Z.intl.string(W.default["42EdIV"]),
                                                    onClick: () => (0, Q.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === ei.length
                                        ? (0, n.jsx)("div", {
                                              className: t2.D1,
                                              children: (0, n.jsxs)("div", {
                                                  className: t2.ST,
                                                  children: [
                                                      (0, n.jsx)(_.D, { size: "lg", color: D.A.colors.TEXT_SUBTLE }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t2.sI,
                                                          children: Z.intl.string(W.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: t2.Dq,
                                              children: ei.map((e) =>
                                                  (0, n.jsx)(
                                                      t7,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tL.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                en.length > 0
                                    ? (0, n.jsxs)("div", {
                                          className: t2.qx,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: t2.uc,
                                                  children: [
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Z.intl.string(W.default.jrCnUc),
                                                      }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Z.intl.string(W.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: t2.Dq,
                                                  children: en.map((e) =>
                                                      (0, n.jsx)(
                                                          t7,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tL.A)(e, l),
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
function t4(e) {
    let t,
        { guildId: a, projectId: i } = e,
        o = (0, u.yK)([eb.Ay], () => eb.Ay.getOwnedProjects()),
        l = (0, u.yK)([U.Ay], () => U.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [Y.A, q.A],
            () => {
                let e = Y.A.getGuild(a);
                return null != e && q.A.can(tE.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, m] = s.useState(""),
        c = i ?? null,
        [p, h] = s.useState(!1),
        [b, w] = s.useState(null),
        k = (0, ed._)("VibegrationsScreen"),
        [v, j] = s.useState(null);
    s.useEffect(() => {
        j(null);
    }, [a]);
    let x = s.useMemo(() => (k.some((e) => e.id === a) ? a : tH), [k, a]),
        C = v ?? x,
        A = C === tH ? "user" : "guild",
        N = C === tH ? a : C,
        [I, S] = s.useState(!1),
        [P, E] = s.useState(null);
    (s.useEffect(() => {
        (0, Q.hF)(a);
    }, [a, l, r]),
        s.useEffect(() => {
            (0, Q.dm)(a, c);
        }, [a, c]));
    let T = s.useCallback(
            async (e, t, a) => {
                let n = await (0, Q.gA)({ guild_id: t, install_scope: a, flags: (0, $.RS)("guild" === a && I) });
                ((0, X.Hc)(n),
                    (0, X.r2)(n, P ?? $.v0),
                    e(n),
                    (0, L.pX)(tE.BVt.CHANNEL(t, tm.VV.VIBEGRATIONS, n)),
                    m(""),
                    E(null));
            },
            [I, P],
        ),
        R = s.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = ew({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), h(!0), w(null));
                    try {
                        await T((e) => (0, X.dv)(e, t), N, A);
                    } catch (e) {
                        w((0, ee.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, A, N, d, p],
        ),
        M = s.useCallback(
            async (e) => {
                if (!p) {
                    (h(!0), w(null));
                    try {
                        await T(
                            (t) => {
                                var a;
                                (0, X.dv)(
                                    t,
                                    ((a = e.name),
                                    Z.intl.formatToPlainString(W.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        w((0, ee.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, A, N, p],
        ),
        _ = s.useCallback(
            async (e, t) => {
                let a = await (0, Q.gA)({ guild_id: t, install_scope: "guild", flags: (0, $.RS)(I) });
                return ((0, X.Hc)(a), (0, X.r2)(a, P ?? $.v0), (0, X.dv)(a, (0, en.v8)(e)), a);
            },
            [I, P],
        ),
        D = s.useCallback(async (e, t, a, n) => {
            if (eb.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, Q.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new ee.uQ((0, ee.hj)(e), e.status);
            }
            ((0, X.dv)(t, n, void 0, { templateId: e.id }),
                (0, L.pX)(tE.BVt.CHANNEL(a, tm.VV.VIBEGRATIONS, t)),
                E(null));
        }, []),
        O = s.useCallback((e) => {
            (0, Q.xx)(e).catch(() => void 0);
        }, []),
        G = s.useCallback(
            (e) => {
                let t = eb.Ay.getProject(e)?.guild_id ?? a;
                ((0, L.pX)(tE.BVt.CHANNEL(t, tm.VV.VIBEGRATIONS, e)), E(null));
            },
            [a],
        ),
        [z, B] = s.useState(!1),
        F = s.useCallback(
            async (e, t) => {
                let n = eZ(e);
                if (null != n) return void (0, f.P)((0, g.o)(n, y.Ck.FAILURE));
                B(!0);
                let s = null;
                try {
                    ((s = await (0, Q.gA)({ guild_id: a, install_scope: t, flags: (0, $.RS)("guild" === t && I) })),
                        (0, X.Hc)(s),
                        (0, X.r2)(s, P ?? $.v0),
                        await eW(s, e, Z.intl.string(W.default.KjEtrZ)),
                        (0, L.pX)(tE.BVt.CHANNEL(a, tm.VV.VIBEGRATIONS, s)),
                        E(null));
                } catch {
                    (null != s && (await (0, Q.xx)(s).catch(() => void 0)),
                        (0, f.P)((0, g.o)(Z.intl.string(W.default["02GpNr"]), y.Ck.FAILURE)));
                } finally {
                    B(!1);
                }
            },
            [a, I, P],
        ),
        V = s.useCallback(
            (e) => {
                (0, L.pX)(tE.BVt.CHANNEL(a, tm.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        H = s.useCallback(() => {
            (0, L.pX)(tE.BVt.CHANNEL(a, tm.VV.VIBEGRATIONS));
        }, [a]),
        K = s.useCallback((e) => {
            (m(e), w(null));
        }, []),
        J = (0, u.bG)(
            [eb.Ay],
            () => {
                if (null == c) return null;
                let e = eb.Ay.getProject(c);
                return null == e || (0, eb.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        et = (0, u.bG)([eb.Ay], () => eb.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, n.jsx)(t3, { project: J, projectsLoaded: et, onBack: H, guildId: a }, c)
        : (0, n.jsx)(t5, {
              projects: o,
              modelSettings: P,
              onModelSettingsChange: E,
              idea: d,
              guildId: a,
              submitting: p,
              createError: b,
              createDisabled: "idea" === (t = ew({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: V,
              onIdeaChange: K,
              onCreate: R,
              onCreateFromTemplate: M,
              onStartTemplate: _,
              onSubmitTemplate: D,
              onCancelTemplate: O,
              onSkipTemplate: G,
              onImportNewProject: F,
              importing: z,
              conjureTarget: C,
              onConjureTargetChange: j,
              nativeAppChannels: "guild" === A ? I : null,
              onNativeAppChannelsChange: S,
              eligibleGuilds: k,
          });
}
