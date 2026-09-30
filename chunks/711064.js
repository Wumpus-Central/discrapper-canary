(a.r(t), a.d(t, { default: () => ae }), a(321073));
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
    _ = a(789645),
    M = a(152367),
    O = a(661531),
    D = a(627363),
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
    W = a(759967),
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
    ep = a(66708),
    eh = a(74029),
    ef = a(559676),
    eg = a(58551),
    ey = a(215181),
    eb = a(805332),
    ew = a(972786);
function ek(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var ev = a(58703),
    ej = a(127181),
    ex = a(192308);
function eC() {
    (0, ex.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var eA = a(413927);
function eN() {
    let e = (0, ej.TH)("desktop");
    if (0 === e.length) return null;
    let t = Z.intl.string(W.default.x07mpp);
    return (0, n.jsxs)("section", {
        className: eA.rN,
        "aria-label": t,
        children: [
            (0, n.jsxs)("div", {
                className: eA.bZ,
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
                className: eA.V,
                children: e.map((e) =>
                    (0, n.jsxs)(
                        "li",
                        {
                            className: eA.S3,
                            children: [
                                (0, n.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eA.VO,
                                    children: [
                                        (0, ev.i$)(r()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ej.MZ)(e) ? ` \xb7 ${Z.intl.string(W.default.vvxuUI)}` : null,
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
            (0, ej.B)("desktop")
                ? (0, n.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Z.intl.string(W.default.YWxThz),
                      onClick: eC,
                  })
                : null,
        ],
    });
}
var eI = a(347842);
function eS(e) {
    let { className: t, ariaLabel: a, disabled: s, onClick: i, children: o } = e;
    return (0, n.jsx)(k.D, { "aria-disabled": s, "aria-label": a, className: t, onClick: s ? void 0 : i, children: o });
}
var eP = a(865665),
    eE = a(568190);
let eT = { x: 5, y: 7 },
    eR = { x: 5, y: 4 };
function e_(e) {
    let { listClassName: t, radius: a, children: i } = e,
        [o, l] = s.useState(!1);
    return (0, n.jsxs)("div", {
        className: eE.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: i }),
            o ? (0, n.jsx)(eP.C, { area: 64, radius: a, color: O.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eM = a(210744),
    eO = a(864970),
    eD = a(707554),
    eG = a(770178),
    ez = a(765548),
    eB = a(597643),
    eF = a(885576),
    eL = a(236730);
let eV = "heading-xxl/semibold",
    eH = !1;
function eU() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        i = (0, ez.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eG.w)(i, [], { fireOnMount: !0 }),
        l = (0, u.bG)([eB.A], () => eB.A.isConnected());
    s.useEffect(() => {
        if (!l || !t || eH) return;
        let a = !1,
            n = 0;
        function s() {
            a ||
                (n = window.setTimeout(() => {
                    ((eH = !0), e.current?.play());
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
    let r = (0, u.bG)([eF.A], () => eF.A.isIdle()),
        d = s.useRef(r);
    s.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eH && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = Z.intl.string(W.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: eL.x,
        children: t
            ? (0, n.jsx)(eD.H, { children: (0, n.jsx)(eO.o, { ref: e, text: m, variant: eV, delay: null }) })
            : (0, n.jsx)(I.D, { variant: eV, children: m }),
    });
}
var eY = a(922016),
    eq = a(980707),
    eK = a(477782),
    eX = a(81369),
    eW = a(402879);
async function eZ(e, t, a) {
    (0, X.Hc)(e);
    let n = await (0, X.vX)(e, t);
    (0, X.dv)(e, a, [n]);
}
function e$(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, $.x5)(e.size, t)
        ? null
        : Z.intl.formatToPlainString(W.default.AzziHF, { size: (0, $.ZJ)((0, $.yr)(t)) });
}
async function eQ(e, t) {
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
    await (0, eW.F)(s, n);
}
function eJ(e) {
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
var e0 = a(950305),
    e2 = a(664121);
let e6 = [
    { value: "user", icon: e0.UserIcon, nameMessage: W.default.iqXIRN },
    { value: "guild", icon: e2.R, nameMessage: W.default.LdgKdI },
];
function e1(e) {
    let { importing: t, onImport: a } = e,
        i = s.useRef(null),
        o = eJ(s.useCallback((e) => a(e, "user"), [a])),
        l = eJ(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eY.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: eY.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eq.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Z.intl.string(W.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eK.rX, {
                            label: Z.intl.string(W.default.MLg0S8),
                            children: e6
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Z.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        eK.Dr,
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
                        icon: eX.H,
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
var e9 = a(379307),
    e7 = a(629584),
    e8 = a(753514),
    e3 = a(491920);
function e5(e) {
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
        : (0, n.jsx)(e7.I, {
              role: "tablist",
              look: "pill",
              className: o()(e3.b, l),
              optionClassName: e3.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var e4 = a(663417),
    te = a(70688),
    tt = a(173936),
    ta = a(473935),
    tn = a(408278),
    ts = a(365199),
    ti = a(7437),
    to = a(147036),
    tl = a(957565),
    tr = a(123917),
    td = a(557875);
let tu = new Set();
var tm = a(976814),
    tc = a(746080),
    tp = a(793712);
let th = [];
function tf(e) {
    (0, f.P)((0, g.o)(e, y.Ck.FAILURE));
}
function tg(e) {
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
        { pending: P, refresh: E } = (0, ti.A)(C ?? null),
        { pending: T, connect: R } = (function (e, t) {
            let [a, n] = s.useState(tu),
                i = s.useRef(tu),
                o = s.useCallback((e) => {
                    ((i.current = (0, td.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, td.K9)(i.current, a.type);
                        async function l() {
                            let n = await (0, X.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, tr.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, td.rq)(n.error)
                                          ? Z.intl.string(W.default.avu1u4)
                                          : Z.intl.string(W.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(A ?? null, tf),
        _ = (0, u.bG)([X.Ay], () => (null == A ? th : X.Ay.getDeclaredConnections(A))),
        M = (function (e) {
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
            offers: s.useMemo(() => (0, td.Xl)(_), [_]),
            connectPending: T,
        }),
        O = s.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        D = null != p && r,
        G = l && null != c,
        z = D || null != d || G || null != h || null != b || null != w,
        B = tl.p5 && null != i,
        L = tl.p5;
    return null != k || null != x || z || L || l
        ? (0, n.jsx)(eY.Y, {
              targetElementRef: S,
              position: "bottom",
              align: "right",
              animation: eY.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, n.jsxs)(eq.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Z.intl.string(Z.t.ogxXGq),
                      onClose: s,
                      onSelect: s,
                      children: [
                          null != k || null != x
                              ? (0, n.jsxs)(eK.rX, {
                                    children: [
                                        null != k
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "refresh",
                                                  icon: e4.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e4.RefreshIcon },
                                                  label: Z.intl.string(W.default.xKexN1),
                                                  disabled: j,
                                                  action: k,
                                              })
                                            : null,
                                        null != x
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "close",
                                                  icon: te.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: te.DoorExitIcon },
                                                  label: Z.intl.string(W.default.Ea0Wrr),
                                                  action: x,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          M.length > 0
                              ? (0, n.jsx)(eK.rX, {
                                    children: M.map((e) =>
                                        (0, n.jsx)(
                                            eK.Dr,
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
                          z
                              ? (0, n.jsxs)(eK.rX, {
                                    children: [
                                        D
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "remix",
                                                  label: Z.intl.string(W.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "export",
                                                  label: Z.intl.string(W.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        G
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "import",
                                                  label: Z.intl.string(W.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != h
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "connect-tool",
                                                  label: Z.intl.string(W.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "version-history",
                                                  label: Z.intl.string(W.default.jAWwzi),
                                                  action: b,
                                              })
                                            : null,
                                        null != w
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "restore-points",
                                                  label: Z.intl.string(W.default.FRjicO),
                                                  action: w,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          L
                              ? (0, n.jsxs)(eK.rX, {
                                    children: [
                                        B
                                            ? (0, n.jsx)(eK.Dr, {
                                                  id: "copy-link",
                                                  label: Z.intl.string(Z.t.WqhZss),
                                                  icon: tt.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: tt.LinkIcon },
                                                  action: () =>
                                                      (0, tl.C)((0, to.n)(i, tc.VV.VIBEGRATIONS, t), () =>
                                                          (0, f.P)(
                                                              (0, g.o)(Z.intl.string(Z.t["L/PwZf"]), y.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, n.jsx)(eK.Dr, {
                                            id: "copy-project-id",
                                            label: Z.intl.string(W.default.b4TqpT),
                                            icon: ta.L,
                                            leadingAccessory: { type: "icon", icon: ta.L },
                                            action: () =>
                                                (0, tl.C)(t, () =>
                                                    (0, f.P)((0, g.o)(Z.intl.string(W.default.WOKsTg), y.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          l
                              ? (0, n.jsxs)(eK.rX, {
                                    children: [
                                        (0, n.jsx)(eK.Dr, {
                                            id: "settings",
                                            label: Z.intl.string(W.default["xhcY+n"]),
                                            icon: N.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: N.SettingsIcon },
                                            action: () =>
                                                (0, tm.A)(t, { guildId: o ?? i, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, n.jsx)(eK.Dr, {
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
                      className: tp.h,
                      children:
                          "iconButton" === I
                              ? (0, n.jsx)(v.m, {
                                    text: Z.intl.string(Z.t["UKOtz+"]),
                                    children: (0, n.jsx)(tn.K, {
                                        icon: ts.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": Z.intl.string(Z.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": s,
                                        onClick: a,
                                    }),
                                })
                              : (0, n.jsx)(F.A.Icon, {
                                    icon: ts.MoreHorizontalIcon,
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
var ty = a(778712),
    tb = a(97808),
    tw = a(104171),
    tk = a(889227),
    tv = a(350086);
let tj = ty._3.SIZE_16;
function tx(e) {
    return e instanceof tk.A
        ? (0, n.jsx)(tb.eu, { src: e.getAvatarURL(void 0, (0, ty.FT)(tj)), size: tj, "aria-hidden": !0 })
        : null;
}
function tC(e) {
    let { creator: t, className: a } = e,
        s = [t.creator, ...t.collaborators],
        i = s.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(tv.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tw.Ay, { users: s.slice(0, 3), max: 3, size: tw.DN.SIZE_16, renderUser: tx }),
            i > 0 ? (0, n.jsxs)(b.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var tA = a(769979);
function tN(e) {
    let { title: t, actions: a, breadcrumb: s } = e;
    return (0, n.jsx)(F.A, {
        hideSearch: !0,
        toolbar: a,
        className: tA.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: tA.QF,
            children: [
                (0, n.jsx)(M.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: O.A.colors.TEXT_STRONG,
                    className: tA.Kk,
                }),
                null != s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(F.A.Title, { onClick: s.onClick, children: s.title }),
                              (0, n.jsx)(F.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(F.A.Title, { className: tA.Qw, wrapperClassName: tA.DD, children: t }),
            ],
        }),
    });
}
var tI = a(73432),
    tS = a(683071),
    tP = a(47167),
    tE = a(994500),
    tT = a(652215);
let tR = "conjuring-help";
var t_ = a(107148);
function tM() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([ei.default, Y.A, em.Ay, tE.A], () => {
                let e = ei.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(tT.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = em.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tP.m1)(t, ei.default, tE.A) === tR;
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
                    ? (0, L.pX)(tT.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tr.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: t_.l,
              children: (0, n.jsx)(tS.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Z.intl.format(W.default["4BsHmp"], { channel: tR, onNavigate: t }),
              }),
          });
}
var tO = a(321593),
    tD = a(580954),
    tG = a(227189),
    tz = a(189213),
    tB = a(145216);
function tF(e) {
    let { reason: t, transitionState: a, onClose: s } = e,
        i = t === tB.H.PERMISSIONS;
    return (0, n.jsx)(tz.a, {
        transitionState: a,
        onClose: s,
        title: Z.intl.string(i ? W.default.Rtlv25 : W.default["+UouPe"]),
        subtitle: Z.intl.string(i ? W.default["nDQB/b"] : W.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Z.intl.string(i ? Z.t.BddRzS : W.default["+Zh4FA"]), variant: "primary", onClick: s }],
    });
}
var tL = a(480007),
    tV = a(584936),
    tH = a(548118);
let tU = "user",
    tY = "user",
    tq = "no-server",
    tK = new Map();
function tX(e) {
    return tK.get(e) ?? null;
}
function tW(e) {
    switch (e) {
        case "all":
        case tY:
        case tq:
            return null;
        default:
            return e;
    }
}
function tZ(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tY:
            return "user" === e.install_scope;
        case tq:
            return null == (0, J.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var t$ = a(506774);
let tQ = "VibegrationsProjectsPanelOpen";
function tJ() {
    return t$.w.get(tQ) ?? null;
}
function t0(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var t2 = a(165610),
    t6 = a(352978);
function t1(e) {
    return (0, n.jsx)(c.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function t9(e) {
    return (0, n.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function t7(e) {
    return (0, n.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
let t8 = {
    showPublishBlocked: function (e) {
        (0, ex.openModal)((t) => (0, n.jsx)(tF, { ...t, reason: e }));
    },
    openPublishNotes: tL.A,
    showError: (e) => (0, f.P)((0, g.o)(e, y.Ck.FAILURE)),
    openProfile: (e) => {
        (0, V.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(a.bind(a, 468689))
            .then((t) => {
                let { default: a } = t;
                return a.open(e, tT.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function t3(e) {
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
        _ =
            ((a = S.id),
            (i = S.name),
            (l = s.useRef(!1)),
            (c = s.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, f.P)((0, g.o)(Z.intl.formatToPlainString(W.default.u9TapG, { name: i }), y.Ck.MESSAGE)),
                    eQ(a, i)
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
                onImport: (p = eJ(
                    s.useCallback(
                        (e) => {
                            let t = e$(e);
                            null != t
                                ? (0, f.P)((0, g.o)(t, y.Ck.FAILURE))
                                : (0, m.A)({
                                      title: Z.intl.formatToPlainString(W.default.XYZqZK, { name: i }),
                                      subtitle: Z.intl.string(W.default["6syXoH"]),
                                      confirmText: Z.intl.string(W.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, L.pX)(tT.BVt.CHANNEL(P, tc.VV.VIBEGRATIONS, a));
                                          try {
                                              await eZ(a, e, Z.intl.string(W.default.C7GU2r));
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
        M = S.preview_application_id ?? S.application_id,
        { data: O } = (0, D.YY)(M),
        G = O?.icon == null ? null : K.Ay.getApplicationIconURL({ id: M, icon: O.icon, size: 40 }),
        z =
            null == S.updated_at
                ? null
                : Z.intl.formatToPlainString(W.default.oMDaqr, { time: r()(S.updated_at).fromNow() }),
        F = (0, J.HC)(S),
        V =
            (0, u.bG)([Y.A], () => (null == F ? null : (Y.A.getGuild(F)?.name ?? null)), [F]) ??
            Z.intl.string(W.default["qqH+iN"]),
        H = (0, u.bG)([ew.Ay], () => ew.Ay.isProjectDeleting(S.id), [S.id]),
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
        $ = (0, n.jsx)(b.E, { variant: "text-md/semibold", color: "text-strong", className: t6.j1, children: S.name }),
        Q =
            null == G
                ? (0, n.jsx)("div", {
                      className: t6.a8,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(w.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, n.jsx)("img", { alt: "", src: G, className: t6.VJ }),
        ee = (0, ey.lE)(S.id);
    return (0, n.jsxs)("div", {
        className: o()(t6.OY, { [t6.Wy]: H }),
        "aria-busy": H,
        children: [
            (0, n.jsx)(tO.Ay, { projectId: S.id }),
            null == ee || H ? null : (0, n.jsx)("div", { className: t6.SB, "aria-hidden": !0 }),
            (0, n.jsxs)(k.D, {
                className: t6.W6,
                onClick: H ? void 0 : E,
                tabIndex: H ? -1 : void 0,
                "aria-describedby": null != U ? q : void 0,
                children: [
                    Q,
                    (0, n.jsxs)("div", {
                        className: t6.MM,
                        children: [
                            (0, n.jsxs)("div", {
                                className: t6.Ub,
                                children: [
                                    null != U ? (0, n.jsx)(v.m, { text: U.label, ariaHidden: !0, children: $ }) : $,
                                    null == U || H ? null : (0, n.jsx)(tC, { creator: U, className: t6.rb }),
                                    ee !== d.I.NEEDS_INPUT || H
                                        ? null
                                        : (0, n.jsxs)("div", {
                                              className: t6.fs,
                                              children: [
                                                  (0, n.jsx)(B.A, { mentionsCount: 1 }),
                                                  (0, n.jsx)(j.A, { children: Z.intl.string(W.default.V3e2Yd) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: t6.h3,
                                children: [
                                    (0, n.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: t6.Wb,
                                        children: H ? Z.intl.string(W.default.EwXXks) : V,
                                    }),
                                    null == z || H
                                        ? null
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: t6.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: t6.zM,
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
                className: t6.M2,
                children: H
                    ? (0, n.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: t6.Pl,
                          children: [
                              (0, n.jsx)(tg, {
                                  projectId: S.id,
                                  projectName: S.name,
                                  guildId: P,
                                  projectGuildId: S.guild_id,
                                  isOwner: (0, ew.PV)(S),
                                  canRemix: (0, ew.H_)(S),
                                  onRemix: T,
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
function t5(e) {
    var t;
    let { project: i, projectsLoaded: o, onBack: l, guildId: r } = e,
        [d, c] = s.useState(!0),
        [p, h] = s.useState(!1),
        [w, k] = s.useState(!1),
        [j, x] = s.useState(!1),
        S = H.Q_.useSetting(),
        [P, E] = s.useState(null),
        [T, R] = s.useState(null),
        _ = i?.id ?? null,
        M = s.useRef(_),
        O = s.useRef(!0),
        B = s.useRef(!1),
        V = s.useRef(null);
    ((M.current = _),
        s.useEffect(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        ));
    let U = (0, u.bG)([ew.Ay], () => (null == _ ? null : ew.Ay.getIntegrationStatus(_)), [_]),
        { data: Y, isLoading: q } = (0, D.YY)(i?.preview_application_id ?? void 0),
        K = null != _ && T !== _,
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
        eo = (0, eg.Qg)({
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
        ep = s.useCallback(() => c(!1), []),
        { active: ey } = (0, eh.Q_)(_),
        ek = s.useRef(null),
        ev = (0, ef.o4)(_),
        ej = Z.intl.string(ev ? W.default.bfQ4Ki : ey ? W.default.rfNEHn : W.default.lXcEa2),
        eC = s.useCallback(() => {
            if (null != _) {
                if (ey) return void (0, eh.PS)(_);
                (x(!1), h(!1), k(!1), c(!0), (0, eh.nI)(_));
            }
        }, [_, ey]),
        eA = s.useCallback(() => {
            x((e) => !e && (c(!0), h(!1), k(!1), !0));
        }, []),
        eN = s.useCallback(() => x(!1), []),
        eS = s.useCallback(
            (e) => {
                if (null == i || B.current) return;
                let t = i.id;
                function a() {
                    return O.current && M.current === t;
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
        eP = (0, u.bG)([eb.A], () => eb.A.isBuilderPreviewMobile()),
        eE = Z.intl.string(eP ? W.default["3uCc8U"] : W.default["+nzCxZ"]),
        eT = s.useCallback(() => (0, Q.GG)(!eP), [eP]),
        eR = (0, z.A)(i?.preview_application_id ?? null, t2.sd),
        e_ = (0, t2.x1)(eR) && eR.data.proxyTicketRefreshing,
        eO = s.useCallback(() => {
            null == eR || e_ || G.A.refreshProxyTicket(eR.id);
        }, [eR, e_]),
        eD = s.useCallback(() => {
            var e, t;
            (null != i && ((e = i.id), (t = eR?.id), (0, X.Bn)(e), (0, tD.A)().leaveFrame(t)), l());
        }, [i, eR?.id, l]),
        eG = s.useCallback(() => {
            null != i && (c(!0), (0, X.dv)(i.id, Z.intl.string(W.default["2ejwtJ"])));
        }, [i]),
        ez = eJ(
            s.useCallback(
                (e) => {
                    if (null == i) return;
                    let t = i.id,
                        a = e$(e);
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
                                      await eZ(t, e, Z.intl.string(W.default.C7GU2r));
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
            null != i && (0, tV.A)(i, r);
        }, [i, r]),
        eF = s.useCallback(async () => {
            if (null == _ || M.current !== _) return;
            V.current?.abort();
            let e = new AbortController();
            ((V.current = e), R(null));
            try {
                await (0, Q.U1)(_, e.signal);
            } catch {
            } finally {
                e.signal.aborted || V.current !== e || M.current !== _ || R(_);
            }
        }, [_]);
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
        eH = s.useMemo(() => (null == eV ? null : () => (0, L.pX)(tT.BVt.CHANNEL(r, eV))), [r, eV]),
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
                      ...(0, tG.p)({ applicationId: e, application: Y ?? null, guildId: eL }),
                      onClose: () => {
                          eY();
                      },
                  };
        }, [K, eY, eL, q, Y, i?.preview_application_id]),
        eK = eo ? { type: "permissions", authorizeProps: eq } : K && null == U ? { type: "checking" } : void 0,
        eX = (0, u.bG)([ew.Ay], () => null != _ && ew.Ay.isProjectDeleting(_), [_]);
    s.useEffect(() => {
        ((null == i && o) || eX) && (0, L.bG)(tT.BVt.CHANNEL(r, tc.VV.VIBEGRATIONS));
    }, [r, i, o, eX]);
    let eW = s.useMemo(() => ({ guildId: r, platform: t8, busy: K || q }), [r, K, q]),
        eQ = (0, eu.Ay)(_, eW),
        e0 = eQ?.upToDate === !0 ? Z.intl.string(W.default["5U1fkv"]) : (eQ?.disabledReason ?? null),
        e2 =
            null == eQ
                ? null
                : (0, n.jsx)("div", {
                      className: t6.As,
                      children: (0, n.jsx)(v.m, {
                          text: e0,
                          asContainer: !0,
                          children: (0, n.jsx)(C.$, {
                              size: "sm",
                              variant: eQ.upToDate ? "secondary" : "primary",
                              loading: eQ.publishing,
                              disabled: eQ.disabled,
                              onClick: () => eQ.run("header"),
                              text: eQ.label,
                          }),
                      }),
                  }),
        e6 = (0, n.jsx)(tN, {
            title: i?.name ?? Z.intl.string(W.default.F2dRba),
            breadcrumb: { title: Z.intl.string(W.default.Xmvb23), onClick: l },
            actions:
                null == i
                    ? null
                    : (0, n.jsxs)("div", {
                          className: t6.FO,
                          children: [
                              ee.showModeSwitch ? (0, n.jsx)(e5, { modes: ee.modes, mode: ea, onChange: en }) : null,
                              (0, n.jsx)(F.A.Icon, {
                                  icon: eP ? t7 : t9,
                                  tooltip: eE,
                                  "aria-label": eE,
                                  selected: eP,
                                  onClick: eT,
                              }),
                              (0, n.jsx)(F.A.Icon, {
                                  ref: ek,
                                  icon: tI.A,
                                  tooltip: ej,
                                  "aria-label": ej,
                                  selected: ey,
                                  disabled: ev,
                                  onClick: eC,
                              }),
                              "frame" === ea ? (0, n.jsx)(eM.A, { frame: eR, controlProjectId: i.id }) : null,
                              (0, n.jsx)("div", { className: t6.YJ }),
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
                                  onClick: () => (0, tm.A)(i.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tg, {
                                  projectId: i.id,
                                  projectName: i.name,
                                  guildId: r,
                                  projectGuildId: i.guild_id,
                                  isOwner: (0, ew.PV)(i),
                                  canRemix: (0, ew.H_)(i),
                                  onRefresh: (0, t2.x1)(eR) ? eO : void 0,
                                  isRefreshing: e_,
                                  onClose: eD,
                                  onExport: eG,
                                  onImport: ez.open,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = i.id),
                                          void (0, ex.openModalLazy)(async () => {
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
                                  : (0, n.jsx)(F.A.Icon, { icon: t1, tooltip: er, "aria-label": er, onClick: ed }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: t6.nj,
        children: [
            ez.input,
            (0, n.jsx)("main", {
                className: t6.JX,
                children:
                    null == i
                        ? (0, n.jsxs)("div", {
                              className: t6.j5,
                              children: [
                                  e6,
                                  (0, n.jsxs)("div", {
                                      className: t6.sD,
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
                              value: eW,
                              children: (0, n.jsx)(
                                  eI.A,
                                  {
                                      projectId: i.id,
                                      designFeedbackToggleRef: ek,
                                      applicationId: i.preview_application_id,
                                      previewApplicationId: i.preview_application_id,
                                      surface: t2.sd,
                                      header: e6,
                                      chatOpen: d,
                                      onCloseChat: ep,
                                      chatHeaderAction: e2,
                                      versionHistoryOpen: p,
                                      onCloseVersionHistory: () => h(!1),
                                      restorePointsOpen: w,
                                      onCloseRestorePoints: () => k(!1),
                                      installScope: i.install_scope,
                                      debugOpen: S && j,
                                      onCloseDebug: eN,
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
function t4(e) {
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
            onCreateFromTemplate: D,
            onStartTemplate: G,
            onSubmitTemplate: z,
            onCancelTemplate: B,
            onSkipTemplate: L,
            onImportNewProject: V,
            importing: H,
        } = e,
        [U, q] = s.useState(() => ({ guildId: l, filter: tX(l) })),
        K = (U.guildId === l ? U.filter : tX(l)) ?? l,
        X = s.useCallback(
            (e) => {
                (tK.set(l, e), q({ guildId: l, filter: e }));
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
                { id: "vibegrations-filter-all", value: "all", leading: M.D, label: Z.intl.string(W.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tY,
                    leading: e0.UserIcon,
                    label: Z.intl.string(W.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tq,
                    leading: e2.R,
                    label: Z.intl.string(W.default["qqH+iN"]),
                },
                ...J.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tH.Ay, { guild: e, size: tH.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [J],
        ),
        et = (0, u.yK)(
            [ew.Ay, Y.A],
            () => {
                let e = tW(K);
                if (null != e) return ew.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    ew.Ay.hasFetchedGuildProjects(e.id) && t.push(...ew.Ay.getSharedProjects(e.id));
                return t;
            },
            [K],
        );
    s.useEffect(() => {
        let e = tW(K);
        null == e || ew.Ay.hasFetchedGuildProjects(e) || (0, Q.hF)(e);
    }, [K]);
    let en = s.useMemo(
            () =>
                et
                    .filter((e) => tZ(e, K))
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
                            value: tU,
                            label: Z.intl.string(W.default.UXnPhI),
                            leading: e0.UserIcon,
                        },
                        ...k.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tH.Ay, { guild: e, size: tH.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [k],
        ),
        ei = s.useMemo(
            () =>
                t
                    .filter((e) => tZ(e, K))
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
                    (0, ex.openModalLazy)(
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
            [k, l, B, D, L, G, z],
        ),
        em = Z.intl.string(W.default.FYK2xQ),
        ep = Z.intl.string(W.default["/SUK82"]),
        eh = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || I());
            },
            [m, I],
        ),
        ef = tW(K) ?? l,
        eg = (0, u.bG)([ew.Ay], () => ew.Ay.getGuildProjectsFetchState(ef), [ef]),
        ey = (0, u.bG)([ew.Ay], () => ew.Ay.getGuildProjectsFetchState(l), [l]),
        [eb, ek] = s.useState(tJ),
        ev = s.useMemo(() => t$.w.get(t0(l)) ?? !1, [l]),
        ej = "success" === ey,
        eC = (0, u.yK)([ew.Ay], () => ew.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => tZ(e, l)),
        eA = eb ?? (!!eC || "error" === ey || (!ej && ev));
    s.useEffect(() => {
        ej && t$.w.set(t0(l), eC);
    }, [ej, eC, l]);
    let eI = s.useCallback((e) => {
            (t$.w.set(tQ, e), ek(e));
        }, []),
        eP = s.useCallback(() => eI(!eA), [eI, eA]),
        eE = s.useCallback(() => eI(!1), [eI]),
        eM = Z.intl.string(W.default.jDPFDh),
        eO = eA ? eM : Z.intl.string(W.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(t6.nj, t6.a0),
        children: (0, n.jsxs)("div", {
            className: t6.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: t6.ps,
                    children: [
                        (0, n.jsx)(tN, {
                            title: Z.intl.string(W.default.Xmvb23),
                            actions: (0, n.jsx)(F.A.Icon, {
                                icon: S.Z,
                                tooltip: eO,
                                "aria-label": eO,
                                selected: eA,
                                onClick: eP,
                            }),
                        }),
                        (0, n.jsx)(P.Ip, {
                            className: t6.Yy,
                            children: (0, n.jsx)("div", {
                                className: t6.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(t6.Qs, t6.Ix),
                                    children: [
                                        (0, n.jsx)(tM, {}),
                                        (0, n.jsx)(eU, {}),
                                        (0, n.jsxs)("section", {
                                            className: t6.WI,
                                            "aria-label": em,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t6.G9,
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
                                                (0, n.jsx)(e_, {
                                                    listClassName: t6.Aw,
                                                    radius: eT,
                                                    children: ed.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t6.EA,
                                                                children: (0, n.jsxs)(eS, {
                                                                    disabled: r,
                                                                    ariaLabel: Z.intl.formatToPlainString(
                                                                        W.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(t6.nx, t6.rz),
                                                                    onClick: () => eu(e),
                                                                    children: [
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t6.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t6.BK,
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
                                            className: t6.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t6.G9,
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
                                                (0, n.jsx)(e_, {
                                                    listClassName: t6.Aw,
                                                    radius: eR,
                                                    children: er.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t6.EA,
                                                                children: (0, n.jsx)(eS, {
                                                                    disabled: r,
                                                                    className: t6.nx,
                                                                    onClick: () => I(e),
                                                                    children: (0, n.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t6.un,
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
                                        (0, n.jsx)(eN, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: t6.Yl,
                            children: (0, n.jsxs)("div", {
                                className: o()(t6.Qs, t6.DA),
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
                                        className: t6.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: t6.gH,
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
                                            (0, n.jsx)(e9.A, {
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
                    className: t6.pA,
                    hidden: !eA,
                    "aria-label": Z.intl.string(W.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: t6.IR,
                            children: [
                                (0, n.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t6.RM,
                                    children: Z.intl.string(W.default.Bo5fE3),
                                }),
                                (0, n.jsxs)("div", {
                                    className: t6.Ss,
                                    children: [
                                        (0, n.jsx)(e1, { importing: H, onImport: V }),
                                        (0, n.jsx)(F.A.Icon, { icon: _.P, tooltip: eM, "aria-label": eM, onClick: eE }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)(P.Ip, {
                            className: t6.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: t6.Vw,
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
                                    className: t6.wE,
                                    children: Z.intl.string(W.default.YnAFtT),
                                }),
                                ("unattempted" === eg || "loading" === eg) && 0 === ei.length
                                    ? (0, n.jsx)("div", { className: t6.E8, children: (0, n.jsx)(x.y, {}) })
                                    : "error" === eg && 0 === ei.length
                                      ? (0, n.jsxs)("div", {
                                            className: t6.E8,
                                            children: [
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t6.JS,
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
                                              className: t6.D1,
                                              children: (0, n.jsxs)("div", {
                                                  className: t6.ST,
                                                  children: [
                                                      (0, n.jsx)(M.D, { size: "lg", color: O.A.colors.TEXT_SUBTLE }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t6.sI,
                                                          children: Z.intl.string(W.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: t6.Dq,
                                              children: ei.map((e) =>
                                                  (0, n.jsx)(
                                                      t3,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tV.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                en.length > 0
                                    ? (0, n.jsxs)("div", {
                                          className: t6.qx,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: t6.uc,
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
                                                  className: t6.Dq,
                                                  children: en.map((e) =>
                                                      (0, n.jsx)(
                                                          t3,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tV.A)(e, l),
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
function ae(e) {
    let t,
        { guildId: a, projectId: i } = e,
        o = (0, u.yK)([ew.Ay], () => ew.Ay.getOwnedProjects()),
        l = (0, u.yK)([U.Ay], () => U.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [Y.A, q.A],
            () => {
                let e = Y.A.getGuild(a);
                return null != e && q.A.can(tT.xBc.MANAGE_GUILD, e);
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
    let x = s.useMemo(() => (k.some((e) => e.id === a) ? a : tU), [k, a]),
        C = v ?? x,
        A = C === tU ? "user" : "guild",
        N = C === tU ? a : C,
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
                    (0, L.pX)(tT.BVt.CHANNEL(t, tc.VV.VIBEGRATIONS, n)),
                    m(""),
                    E(null));
            },
            [I, P],
        ),
        R = s.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = ek({ idea: t, installScope: A, submitting: p });
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
        _ = s.useCallback(
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
        M = s.useCallback(
            async (e, t) => {
                let a = await (0, Q.gA)({ guild_id: t, install_scope: "guild", flags: (0, $.RS)(I) });
                return ((0, X.Hc)(a), (0, X.r2)(a, P ?? $.v0), (0, X.dv)(a, (0, en.v8)(e)), a);
            },
            [I, P],
        ),
        O = s.useCallback(async (e, t, a, n) => {
            if (ew.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, Q.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new ee.uQ((0, ee.hj)(e), e.status);
            }
            ((0, X.dv)(t, n, void 0, { templateId: e.id }),
                (0, ep.R6)(t),
                (0, L.pX)(tT.BVt.CHANNEL(a, tc.VV.VIBEGRATIONS, t)),
                E(null));
        }, []),
        D = s.useCallback((e) => {
            (0, Q.xx)(e).catch(() => void 0);
        }, []),
        G = s.useCallback(
            (e) => {
                let t = ew.Ay.getProject(e)?.guild_id ?? a;
                ((0, L.pX)(tT.BVt.CHANNEL(t, tc.VV.VIBEGRATIONS, e)), E(null));
            },
            [a],
        ),
        [z, B] = s.useState(!1),
        F = s.useCallback(
            async (e, t) => {
                let n = e$(e);
                if (null != n) return void (0, f.P)((0, g.o)(n, y.Ck.FAILURE));
                B(!0);
                let s = null;
                try {
                    ((s = await (0, Q.gA)({ guild_id: a, install_scope: t, flags: (0, $.RS)("guild" === t && I) })),
                        (0, X.Hc)(s),
                        (0, X.r2)(s, P ?? $.v0),
                        await eZ(s, e, Z.intl.string(W.default.KjEtrZ)),
                        (0, L.pX)(tT.BVt.CHANNEL(a, tc.VV.VIBEGRATIONS, s)),
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
                (0, L.pX)(tT.BVt.CHANNEL(a, tc.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        H = s.useCallback(() => {
            (0, L.pX)(tT.BVt.CHANNEL(a, tc.VV.VIBEGRATIONS));
        }, [a]),
        K = s.useCallback((e) => {
            (m(e), w(null));
        }, []),
        J = (0, u.bG)(
            [ew.Ay],
            () => {
                if (null == c) return null;
                let e = ew.Ay.getProject(c);
                return null == e || (0, ew.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        et = (0, u.bG)([ew.Ay], () => ew.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, n.jsx)(t5, { project: J, projectsLoaded: et, onBack: H, guildId: a }, c)
        : (0, n.jsx)(t4, {
              projects: o,
              modelSettings: P,
              onModelSettingsChange: E,
              idea: d,
              guildId: a,
              submitting: p,
              createError: b,
              createDisabled: "idea" === (t = ek({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: V,
              onIdeaChange: K,
              onCreate: R,
              onCreateFromTemplate: _,
              onStartTemplate: M,
              onSubmitTemplate: O,
              onCancelTemplate: D,
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
