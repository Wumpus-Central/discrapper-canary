(a.r(t), a.d(t, { default: () => ao }), a(321073));
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
    I = a(625903),
    S = a(297264),
    N = a(97893),
    P = a(364522),
    E = a(103557),
    T = a(150934),
    M = a(691885),
    R = a(789645),
    _ = a(152367),
    O = a(661531),
    D = a(442433),
    G = a(627363),
    z = a(47167),
    B = a(713654),
    F = a(625180),
    L = a(672929),
    V = a(775946),
    H = a(742589),
    U = a(976860),
    Y = a(402860),
    q = a(885386),
    K = a(734057),
    X = a(696451),
    W = a(71393),
    Z = a(576705),
    $ = a(486020),
    Q = a(277977),
    J = a(50617),
    ee = a(375708),
    et = a(673724),
    ea = a(948230),
    en = a(637708),
    es = a(936494),
    ei = a(443741),
    eo = a(208137),
    el = a(993396),
    er = a(972786),
    ed = a(822835),
    eu = a(287809),
    em = a(427262),
    ec = a(783791),
    ep = a(725592),
    eh = a(459514),
    ef = a(455435),
    eg = a(808728),
    ey = a(683180),
    eb = a(74029),
    ew = a(559676),
    ek = a(58551),
    ev = a(84442),
    ej = a(805332);
function ex(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var eC = a(58703),
    eA = a(127181),
    eI = a(192308);
function eS() {
    (0, eI.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var eN = a(413927);
function eP() {
    let e = (0, eA.TH)("desktop");
    if (0 === e.length) return null;
    let t = ee.intl.string(J.default.x07mpp);
    return (0, n.jsxs)("section", {
        className: eN.rN,
        "aria-label": t,
        children: [
            (0, n.jsxs)("div", {
                className: eN.bZ,
                children: [
                    (0, n.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: ee.intl.string(J.default.h5CwHI),
                    }),
                ],
            }),
            (0, n.jsx)("ol", {
                className: eN.V,
                children: e.map((e) =>
                    (0, n.jsxs)(
                        "li",
                        {
                            className: eN.S3,
                            children: [
                                (0, n.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eN.VO,
                                    children: [
                                        (0, eC.i$)(r()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eA.MZ)(e) ? ` \xb7 ${ee.intl.string(J.default.vvxuUI)}` : null,
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
            (0, eA.B)("desktop")
                ? (0, n.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: ee.intl.string(J.default.YWxThz),
                      onClick: eS,
                  })
                : null,
        ],
    });
}
var eE = a(788878);
function eT(e) {
    let { className: t, ariaLabel: a, disabled: s, onClick: i, children: o } = e;
    return (0, n.jsx)(k.D, { "aria-disabled": s, "aria-label": a, className: t, onClick: s ? void 0 : i, children: o });
}
var eM = a(865665),
    eR = a(568190);
let e_ = { x: 5, y: 7 },
    eO = { x: 5, y: 4 };
function eD(e) {
    let { listClassName: t, radius: a, children: i } = e,
        [o, l] = s.useState(!1);
    return (0, n.jsxs)("div", {
        className: eR.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: i }),
            o ? (0, n.jsx)(eM.C, { area: 64, radius: a, color: O.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eG = a(210744),
    ez = a(864970),
    eB = a(707554),
    eF = a(770178),
    eL = a(765548),
    eV = a(597643),
    eH = a(885576),
    eU = a(236730);
let eY = "heading-xxl/semibold",
    eq = !1;
function eK() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        i = (0, eL.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eF.w)(i, [], { fireOnMount: !0 }),
        l = (0, u.bG)([eV.A], () => eV.A.isConnected());
    s.useEffect(() => {
        if (!l || !t || eq) return;
        let a = !1,
            n = 0;
        function s() {
            a ||
                (n = window.setTimeout(() => {
                    ((eq = !0), e.current?.play());
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
    let r = (0, u.bG)([eH.A], () => eH.A.isIdle()),
        d = s.useRef(r);
    s.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eq && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = ee.intl.string(J.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: eU.x,
        children: t
            ? (0, n.jsx)(eB.H, { children: (0, n.jsx)(ez.o, { ref: e, text: m, variant: eY, delay: null }) })
            : (0, n.jsx)(S.D, { variant: eY, children: m }),
    });
}
var eX = a(922016),
    eW = a(980707),
    eZ = a(477782),
    e$ = a(81369),
    eQ = a(402879);
async function eJ(e, t, a) {
    (0, Q.Hc)(e);
    let n = await (0, Q.vX)(e, t);
    (0, Q.dv)(e, a, [n]);
}
function e0(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, et.x5)(e.size, t)
        ? null
        : ee.intl.formatToPlainString(J.default.AzziHF, { size: (0, et.ZJ)((0, et.yr)(t)) });
}
async function e2(e, t) {
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
        s = await (0, Q.cS)(e, n);
    await (0, eQ.F)(s, n);
}
function e6(e) {
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
var e1 = a(950305),
    e9 = a(664121);
let e8 = [
    { value: "user", icon: e1.UserIcon, nameMessage: J.default.iqXIRN },
    { value: "guild", icon: e9.R, nameMessage: J.default.LdgKdI },
];
function e3(e) {
    let { importing: t, onImport: a } = e,
        i = s.useRef(null),
        o = e6(s.useCallback((e) => a(e, "user"), [a])),
        l = e6(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eX.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: eX.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eW.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": ee.intl.string(J.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eZ.rX, {
                            label: ee.intl.string(J.default.MLg0S8),
                            children: e8
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ee.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        eZ.Dr,
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
                        icon: e$.H,
                        text: ee.intl.string(J.default["NHP2+t"]),
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
var e7 = a(379307),
    e4 = a(629584),
    e5 = a(753514),
    te = a(491920);
function tt(e) {
    let { modes: t, mode: a, onChange: i, className: l } = e,
        r = s.useMemo(() => t.map((e) => ({ value: e, name: (0, e5.kZ)(e), "aria-controls": (0, e5.z3)(e) })), [t]),
        d = s.useCallback(
            (e) => {
                i(e.value);
            },
            [i],
        );
    return null == a
        ? null
        : (0, n.jsx)(e4.I, {
              role: "tablist",
              look: "pill",
              className: o()(te.b, l),
              optionClassName: te.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var ta = a(782603),
    tn = a(780338),
    ts = a(663417),
    ti = a(70688),
    to = a(173936),
    tl = a(473935),
    tr = a(408278),
    td = a(365199),
    tu = a(7437),
    tm = a(147036),
    tc = a(957565),
    tp = a(123917),
    th = a(557875);
let tf = new Set();
var tg = a(313007),
    ty = a(976814),
    tb = a(746080),
    tw = a(793712);
let tk = [];
function tv(e) {
    (0, f.P)((0, g.o)(e, y.Ck.FAILURE));
}
function tj(e) {
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
            isRefreshing: v = !1,
            onClose: j,
            refreshApplicationId: x,
            previewProjectId: C,
            onCloseMenu: A,
        } = e,
        S = (0, tg.$s)(t),
        { pending: N, refresh: P } = (0, tu.A)(x ?? null),
        { pending: E, connect: T } = (function (e, t) {
            let [a, n] = s.useState(tf),
                i = s.useRef(tf),
                o = s.useCallback((e) => {
                    ((i.current = (0, th.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, th.K9)(i.current, a.type);
                        async function l() {
                            let n = await (0, Q.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, tp.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, th.rq)(n.error)
                                          ? ee.intl.string(J.default.avu1u4)
                                          : ee.intl.string(J.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(C ?? null, tv),
        M = (0, u.bG)([Q.Ay], () => (null == C ? tk : Q.Ay.getDeclaredConnections(C))),
        R = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: s } = e,
                i = [];
            for (let { connection: e, offer: o } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ee.intl.string(J.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                i.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ee.intl.formatToPlainString(J.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: s.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ee.intl.formatToPlainString(J.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != x,
            refreshPending: N,
            offers: s.useMemo(() => (0, th.Xl)(M), [M]),
            connectPending: E,
        }),
        _ = s.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        O = null != p && r,
        D = l && null != c,
        G = O || null != d || D || null != h || null != b || null != w,
        z = tc.p5 && null != i,
        B = tc.p5,
        F = S ? ta.BellIcon : tn.BellSlashIcon;
    return (0, n.jsxs)(eW.W, {
        "data-menu-migrated": !0,
        navId: `vibegrations-project-actions-${t}`,
        "aria-label": ee.intl.string(ee.t.ogxXGq),
        onClose: A,
        onSelect: A,
        children: [
            null != k || null != j
                ? (0, n.jsxs)(eZ.rX, {
                      children: [
                          null != k
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "refresh",
                                    icon: ts.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: ts.RefreshIcon },
                                    label: ee.intl.string(J.default.xKexN1),
                                    disabled: v,
                                    action: k,
                                })
                              : null,
                          null != j
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "close",
                                    icon: ti.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: ti.DoorExitIcon },
                                    label: ee.intl.string(J.default.Ea0Wrr),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            R.length > 0
                ? (0, n.jsx)(eZ.rX, {
                      children: R.map((e) =>
                          (0, n.jsx)(
                              eZ.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void P();
                                      let t = null == e.connectionType ? null : _.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, n.jsx)(eZ.rX, {
                children: (0, n.jsx)(eZ.Dr, {
                    id: "mute",
                    label: ee.intl.string(S ? J.default.ZTkrp3 : J.default.fwSfWU),
                    icon: F,
                    leadingAccessory: { type: "icon", icon: F },
                    action: () => (0, tg.qQ)(t, !S),
                }),
            }),
            G
                ? (0, n.jsxs)(eZ.rX, {
                      children: [
                          O
                              ? (0, n.jsx)(eZ.Dr, { id: "remix", label: ee.intl.string(J.default.vPI794), action: p })
                              : null,
                          null != d
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "export",
                                    label: ee.intl.string(J.default["7iamDC"]),
                                    action: d,
                                })
                              : null,
                          D
                              ? (0, n.jsx)(eZ.Dr, { id: "import", label: ee.intl.string(J.default.lf8HqE), action: c })
                              : null,
                          null != h
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "connect-tool",
                                    label: ee.intl.string(J.default["3qelzD"]),
                                    action: h,
                                })
                              : null,
                          null != b
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "version-history",
                                    label: ee.intl.string(J.default.jAWwzi),
                                    action: b,
                                })
                              : null,
                          null != w
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "restore-points",
                                    label: ee.intl.string(J.default.FRjicO),
                                    action: w,
                                })
                              : null,
                      ],
                  })
                : null,
            B
                ? (0, n.jsxs)(eZ.rX, {
                      children: [
                          z
                              ? (0, n.jsx)(eZ.Dr, {
                                    id: "copy-link",
                                    label: ee.intl.string(ee.t.WqhZss),
                                    icon: to.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: to.LinkIcon },
                                    action: () =>
                                        (0, tc.C)((0, tm.n)(i, tb.VV.VIBEGRATIONS, t), () =>
                                            (0, f.P)((0, g.o)(ee.intl.string(ee.t["L/PwZf"]), y.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, n.jsx)(eZ.Dr, {
                              id: "copy-project-id",
                              label: ee.intl.string(J.default.b4TqpT),
                              icon: tl.L,
                              leadingAccessory: { type: "icon", icon: tl.L },
                              action: () =>
                                  (0, tc.C)(t, () =>
                                      (0, f.P)((0, g.o)(ee.intl.string(J.default.WOKsTg), y.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            l
                ? (0, n.jsxs)(eZ.rX, {
                      children: [
                          (0, n.jsx)(eZ.Dr, {
                              id: "settings",
                              label: ee.intl.string(J.default["xhcY+n"]),
                              icon: I.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                              action: () => (0, ty.A)(t, { guildId: o ?? i, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, n.jsx)(eZ.Dr, {
                              id: "delete",
                              label: ee.intl.string(ee.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: ee.intl.formatToPlainString(J.default.ZokHVz, { name: a }),
                                      subtitle: ee.intl.string(J.default.NmF939),
                                      confirmText: ee.intl.string(ee.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, ea.K)(t, () =>
                                              (0, f.P)((0, g.o)(ee.intl.string(J.default.tqKZCi), y.Ck.FAILURE)),
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
}
function tx(e) {
    let { trigger: t = "header", ...a } = e,
        i = s.useRef(null);
    return (0, n.jsx)(eX.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tj, { ...a, onCloseMenu: t });
        },
        children: (e, a) => {
            let { onClick: s } = e,
                { isShown: o } = a;
            return (0, n.jsx)("div", {
                ref: i,
                className: tw.h,
                children:
                    "iconButton" === t
                        ? (0, n.jsx)(v.m, {
                              text: ee.intl.string(ee.t["UKOtz+"]),
                              children: (0, n.jsx)(tr.K, {
                                  icon: td.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": o,
                                  onClick: s,
                              }),
                          })
                        : (0, n.jsx)(H.A.Icon, {
                              icon: td.MoreHorizontalIcon,
                              tooltip: ee.intl.string(ee.t["UKOtz+"]),
                              "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": o,
                              selected: o,
                              onClick: s,
                          }),
            });
        },
    });
}
var tC = a(778712),
    tA = a(97808),
    tI = a(104171),
    tS = a(889227),
    tN = a(350086);
let tP = tC._3.SIZE_16;
function tE(e) {
    return e instanceof tS.A
        ? (0, n.jsx)(tA.eu, { src: e.getAvatarURL(void 0, (0, tC.FT)(tP)), size: tP, "aria-hidden": !0 })
        : null;
}
function tT(e) {
    let { creator: t, className: a } = e,
        s = [t.creator, ...t.collaborators],
        i = s.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(tN.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tI.Ay, { users: s.slice(0, 3), max: 3, size: tI.DN.SIZE_16, renderUser: tE }),
            i > 0 ? (0, n.jsxs)(b.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var tM = a(769979);
function tR(e) {
    let { title: t, actions: a, breadcrumb: s } = e;
    return (0, n.jsx)(H.A, {
        hideSearch: !0,
        toolbar: a,
        className: tM.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: tM.QF,
            children: [
                (0, n.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: O.A.colors.TEXT_STRONG,
                    className: tM.Kk,
                }),
                null != s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(H.A.Title, { onClick: s.onClick, children: s.title }),
                              (0, n.jsx)(H.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(H.A.Title, { className: tM.Qw, wrapperClassName: tM.DD, children: t }),
            ],
        }),
    });
}
var t_ = a(73432),
    tO = a(683071),
    tD = a(994500),
    tG = a(652215);
let tz = "conjuring-help";
var tB = a(107148);
function tF() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([eu.default, W.A, eg.Ay, tD.A], () => {
                let e = eu.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of W.A.getGuildsArray()) {
                    if (!t.features.has(tG.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = eg.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, eu.default, tD.A) === tz;
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
                    ? (0, U.pX)(tG.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tp.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: tB.l,
              children: (0, n.jsx)(tO.w, {
                  type: "info",
                  iconAlign: "center",
                  children: ee.intl.format(J.default["4BsHmp"], { channel: tz, onNavigate: t }),
              }),
          });
}
var tL = a(321593),
    tV = a(580954),
    tH = a(227189),
    tU = a(189213),
    tY = a(145216);
function tq(e) {
    let { reason: t, transitionState: a, onClose: s } = e,
        i = t === tY.H.PERMISSIONS;
    return (0, n.jsx)(tU.a, {
        transitionState: a,
        onClose: s,
        title: ee.intl.string(i ? J.default.Rtlv25 : J.default["+UouPe"]),
        subtitle: ee.intl.string(i ? J.default["nDQB/b"] : J.default["E0QD++"]),
        size: "sm",
        actions: [{ text: ee.intl.string(i ? ee.t.BddRzS : J.default["+Zh4FA"]), variant: "primary", onClick: s }],
    });
}
var tK = a(480007),
    tX = a(584936),
    tW = a(548118);
let tZ = "user",
    t$ = "user",
    tQ = "no-server",
    tJ = new Map();
function t0(e) {
    return tJ.get(e) ?? null;
}
function t2(e) {
    switch (e) {
        case "all":
        case t$:
        case tQ:
            return null;
        default:
            return e;
    }
}
function t6(e, t) {
    switch (t) {
        case "all":
            return !0;
        case t$:
            return "user" === e.install_scope;
        case tQ:
            return null == (0, en.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var t1 = a(506774);
let t9 = "VibegrationsProjectsPanelOpen";
function t8() {
    return t1.w.get(t9) ?? null;
}
function t3(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var t7 = a(165610),
    t4 = a(352978);
function t5(e) {
    return (0, n.jsx)(c.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ae(e) {
    return (0, n.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function at(e) {
    return (0, n.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
let aa = {
    showPublishBlocked: function (e) {
        (0, eI.openModal)((t) => (0, n.jsx)(tq, { ...t, reason: e }));
    },
    openPublishNotes: tK.A,
    showError: (e) => (0, f.P)((0, g.o)(e, y.Ck.FAILURE)),
    openProfile: (e) => {
        (0, Y.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(a.bind(a, 468689))
            .then((t) => {
                let { default: a } = t;
                return a.open(e, tG.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function an(e) {
    var t;
    let a,
        i,
        l,
        c,
        p,
        h,
        C,
        A,
        I,
        S,
        { project: N, guildId: P, onSelect: E, onRemix: T, shared: M = !1 } = e,
        R =
            ((a = N.id),
            (i = N.name),
            (l = s.useRef(!1)),
            (c = s.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, f.P)((0, g.o)(ee.intl.formatToPlainString(J.default.u9TapG, { name: i }), y.Ck.MESSAGE)),
                    e2(a, i)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, f.P)(
                                    (0, g.o)(
                                        409 === (t = e instanceof Q._v ? e.status : null)
                                            ? ee.intl.string(J.default.uB40Hz)
                                            : 404 === t
                                              ? ee.intl.string(J.default.wCq2jC)
                                              : ee.intl.string(J.default.G2GqyP),
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
                onImport: (p = e6(
                    s.useCallback(
                        (e) => {
                            let t = e0(e);
                            null != t
                                ? (0, f.P)((0, g.o)(t, y.Ck.FAILURE))
                                : (0, m.A)({
                                      title: ee.intl.formatToPlainString(J.default.XYZqZK, { name: i }),
                                      subtitle: ee.intl.string(J.default["6syXoH"]),
                                      confirmText: ee.intl.string(J.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, U.pX)(tG.BVt.CHANNEL(P, tb.VV.VIBEGRATIONS, a));
                                          try {
                                              await eJ(a, e, ee.intl.string(J.default.C7GU2r));
                                          } catch {
                                              (0, f.P)((0, g.o)(ee.intl.string(J.default["02GpNr"]), y.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [a, i, P],
                    ),
                )).open,
                importInput: p.input,
            }),
        _ = N.preview_application_id ?? N.application_id,
        { data: O } = (0, G.YY)(_),
        z = O?.icon == null ? null : $.Ay.getApplicationIconURL({ id: _, icon: O.icon, size: 40 }),
        B =
            null == N.updated_at
                ? null
                : ee.intl.formatToPlainString(J.default.oMDaqr, { time: r()(N.updated_at).fromNow() }),
        F = (0, en.HC)(N),
        L =
            (0, u.bG)([W.A], () => (null == F ? null : (W.A.getGuild(F)?.name ?? null)), [F]) ??
            ee.intl.string(J.default["qqH+iN"]),
        H = (0, u.bG)([er.Ay], () => er.Ay.isProjectDeleting(N.id), [N.id]),
        Y =
            ((t = M ? N : null),
            (h = t?.id),
            (C = t?.owner_user_id),
            (A = (0, u.yK)(
                [ec.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  ec.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== C ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, C],
            )),
            s.useEffect(() => {
                null != C && ((0, ep.Y)(C), A.forEach(ep.Y));
            }, [C, A]),
            (I = (0, u.bG)([eu.default], () => (null == C ? null : eu.default.getUser(C)), [C])),
            (S = (0, u.yK)([eu.default], () => A.map((e) => eu.default.getUser(e)).filter((e) => null != e), [A])),
            s.useMemo(
                () =>
                    null == I
                        ? null
                        : {
                              creator: I,
                              collaborators: S,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? ee.intl.formatToPlainString(J.default.TwgkQe, { creator: e })
                                      : ee.intl.formatToPlainString(J.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (a = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === a
                                                      ? ee.intl.formatToPlainString(ee.t["8s9z8P"], { first: t[0] })
                                                      : 2 === a
                                                        ? ee.intl.formatToPlainString(ee.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === a
                                                          ? ee.intl.formatToPlainString(ee.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ee.intl.formatToPlainString(ee.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: a - 3,
                                                            }),
                                        });
                              })(
                                  (0, em.mG)(I),
                                  S.map((e) => (0, em.mG)(e)),
                              ),
                          },
                [I, S],
            )),
        q = s.useId(),
        K = (0, n.jsx)(b.E, { variant: "text-md/semibold", color: "text-strong", className: t4.j1, children: N.name }),
        X =
            null == z
                ? (0, n.jsx)("div", {
                      className: t4.a8,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(w.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, n.jsx)("img", { alt: "", src: z, className: t4.VJ }),
        Z = (0, ev.lE)(N.id),
        et = {
            projectId: N.id,
            projectName: N.name,
            guildId: P,
            projectGuildId: N.guild_id,
            isOwner: (0, er.PV)(N),
            canRemix: (0, er.H_)(N),
            onRemix: T,
            onExport: R.onExport,
            onImport: R.onImport,
        };
    return (0, n.jsxs)("div", {
        className: o()(t4.OY, { [t4.Wy]: H }),
        "aria-busy": H,
        children: [
            (0, n.jsx)(tL.Ay, { projectId: N.id }),
            null == Z || H ? null : (0, n.jsx)("div", { className: t4.SB, "aria-hidden": !0 }),
            (0, n.jsxs)(k.D, {
                className: t4.W6,
                onClick: H ? void 0 : E,
                onContextMenu: function (e) {
                    H || (0, D.jA)(e, () => (0, n.jsx)(tj, { ...et, onCloseMenu: D.Z_ }));
                },
                tabIndex: H ? -1 : void 0,
                "aria-describedby": null != Y ? q : void 0,
                children: [
                    X,
                    (0, n.jsxs)("div", {
                        className: t4.MM,
                        children: [
                            (0, n.jsxs)("div", {
                                className: t4.Ub,
                                children: [
                                    null != Y ? (0, n.jsx)(v.m, { text: Y.label, ariaHidden: !0, children: K }) : K,
                                    null == Y || H ? null : (0, n.jsx)(tT, { creator: Y, className: t4.rb }),
                                    Z !== d.I.NEEDS_INPUT || H
                                        ? null
                                        : (0, n.jsxs)("div", {
                                              className: t4.fs,
                                              children: [
                                                  (0, n.jsx)(V.A, { mentionsCount: 1 }),
                                                  (0, n.jsx)(j.A, { children: ee.intl.string(J.default.V3e2Yd) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: t4.h3,
                                children: [
                                    (0, n.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: t4.Wb,
                                        children: H ? ee.intl.string(J.default.EwXXks) : L,
                                    }),
                                    null == B || H
                                        ? null
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: t4.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: t4.zM,
                                                      children: B,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != Y ? (0, n.jsx)(j.A, { id: q, children: Y.label }) : null,
            (0, n.jsx)("div", {
                className: t4.M2,
                children: H
                    ? (0, n.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: t4.Pl,
                          children: [(0, n.jsx)(tx, { ...et, trigger: "iconButton" }), R.importInput],
                      }),
            }),
        ],
    });
}
function as(e) {
    var t;
    let { project: i, projectsLoaded: o, onBack: l, guildId: r } = e,
        [d, c] = s.useState(!0),
        [p, h] = s.useState(!1),
        [w, k] = s.useState(!1),
        [j, x] = s.useState(!1),
        N = q.Q_.useSetting(),
        [P, E] = s.useState(null),
        [T, M] = s.useState(null),
        R = i?.id ?? null,
        _ = s.useRef(R),
        O = s.useRef(!0),
        D = s.useRef(!1),
        V = s.useRef(null);
    ((_.current = R),
        s.useEffect(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        ));
    let Y = (0, u.bG)([er.Ay], () => (null == R ? null : er.Ay.getIntegrationStatus(R)), [R]),
        { data: X, isLoading: W } = (0, G.YY)(i?.preview_application_id ?? void 0),
        Z = null != R && T !== R,
        $ = Y?.preview_ready === !0,
        et = Y?.has_activity === !0,
        {
            availability: en,
            activeMode: es,
            setMode: eo,
            widgetApplicationId: el,
        } = (0, ed.q)({
            applicationId: i?.preview_application_id ?? null,
            previewApplicationId: i?.preview_application_id ?? null,
            declaredActivity: et,
            installScope: i?.install_scope ?? null,
            ownerAuthorizationRevoked: Y?.owner_authorization_revoked === !0,
        }),
        eu = (0, ek.Qg)({
            installScope: i?.install_scope ?? null,
            previewReady: $,
            integrationInstalled: Y?.integration_installed ?? null,
            botPermissionsChanged: Y?.bot_permissions_changed === !0,
        }),
        em = d && !j && !p && !w,
        ec = ee.intl.string(em ? J.default.YdgE0j : J.default.aWVf4j),
        ep = s.useCallback(() => {
            if (j || p || w) {
                (x(!1), h(!1), k(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [j, p, w]),
        eh = s.useCallback(() => c(!1), []),
        { active: ev } = (0, eb.Q_)(R),
        ex = s.useRef(null),
        eC = (0, ew.o4)(R),
        eA = ee.intl.string(eC ? J.default.bfQ4Ki : ev ? J.default.rfNEHn : J.default.lXcEa2),
        eS = s.useCallback(() => {
            if (null != R) {
                if (ev) return void (0, eb.PS)(R);
                (x(!1), h(!1), k(!1), c(!0), (0, eb.nI)(R));
            }
        }, [R, ev]),
        eN = s.useCallback(() => {
            x((e) => !e && (c(!0), h(!1), k(!1), !0));
        }, []),
        eP = s.useCallback(() => x(!1), []),
        eT = s.useCallback(
            (e) => {
                if (null == i || D.current) return;
                let t = i.id;
                function a() {
                    return O.current && _.current === t;
                }
                ((D.current = !0),
                    h(!1),
                    c(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, Q.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && E({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, f.P)((0, g.o)(ee.intl.string(J.default.q6iZ84), y.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (D.current = !1);
                        }));
            },
            [i],
        ),
        eM = (0, u.bG)([ej.A], () => ej.A.isBuilderPreviewMobile()),
        eR = ee.intl.string(eM ? J.default["3uCc8U"] : J.default["+nzCxZ"]),
        e_ = s.useCallback(() => (0, ea.GG)(!eM), [eM]),
        eO = (0, L.A)(i?.preview_application_id ?? null, t7.sd),
        eD = (0, t7.x1)(eO) && eO.data.proxyTicketRefreshing,
        ez = s.useCallback(() => {
            null == eO || eD || F.A.refreshProxyTicket(eO.id);
        }, [eO, eD]),
        eB = s.useCallback(() => {
            var e, t;
            (null != i && ((e = i.id), (t = eO?.id), (0, Q.Bn)(e), (0, tV.A)().leaveFrame(t)), l());
        }, [i, eO?.id, l]),
        eF = s.useCallback(() => {
            null != i && (c(!0), (0, Q.dv)(i.id, ee.intl.string(J.default["2ejwtJ"])));
        }, [i]),
        eL = e6(
            s.useCallback(
                (e) => {
                    if (null == i) return;
                    let t = i.id,
                        a = e0(e);
                    null != a
                        ? (0, f.P)((0, g.o)(a, y.Ck.FAILURE))
                        : (0, m.A)({
                              title: ee.intl.formatToPlainString(J.default.XYZqZK, { name: i.name }),
                              subtitle: ee.intl.string(J.default["6syXoH"]),
                              confirmText: ee.intl.string(J.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await eJ(t, e, ee.intl.string(J.default.C7GU2r));
                                  } catch {
                                      (0, f.P)((0, g.o)(ee.intl.string(J.default["02GpNr"]), y.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [i],
            ),
        ),
        eV = s.useCallback(() => {
            null != i && (0, tX.A)(i, r);
        }, [i, r]),
        eH = s.useCallback(async () => {
            if (null == R || _.current !== R) return;
            V.current?.abort();
            let e = new AbortController();
            ((V.current = e), M(null));
            try {
                await (0, ea.U1)(R, e.signal);
            } catch {
            } finally {
                e.signal.aborted || V.current !== e || _.current !== R || M(R);
            }
        }, [R]);
    s.useEffect(
        () => (
            eH(),
            () => {
                (V.current?.abort(), (V.current = null));
            }
        ),
        [eH],
    );
    let eU = (0, ei.H)(i ?? null, Y ?? null, r),
        eY = ((t = i?.application_id ?? null), (0, u.bG)([eg.Ay], () => (null == t ? null : (0, ey.SH)(r, t)), [r, t])),
        eq = s.useMemo(() => (null == eY ? null : () => (0, U.pX)(tG.BVt.CHANNEL(r, eY))), [r, eY]),
        eK = s.useCallback(async () => {
            null != i && (await (0, ei.w)(i, eU));
        }, [eU, i]),
        eX = s.useCallback(async () => {
            try {
                await eK();
            } catch {}
            await eH();
        }, [eH, eK]),
        eW = s.useMemo(() => {
            let e = i?.preview_application_id;
            return null == e || W || Z
                ? null
                : {
                      ...(0, tH.p)({ applicationId: e, application: X ?? null, guildId: eU }),
                      onClose: () => {
                          eX();
                      },
                  };
        }, [Z, eX, eU, W, X, i?.preview_application_id]),
        eZ = eu ? { type: "permissions", authorizeProps: eW } : Z && null == Y ? { type: "checking" } : void 0,
        e$ = (0, u.bG)([er.Ay], () => null != R && er.Ay.isProjectDeleting(R), [R]);
    s.useEffect(() => {
        ((null == i && o) || e$) && (0, U.bG)(tG.BVt.CHANNEL(r, tb.VV.VIBEGRATIONS));
    }, [r, i, o, e$]);
    let eQ = s.useMemo(() => ({ guildId: r, platform: aa, busy: Z || W }), [r, Z, W]),
        e2 = (0, ef.Ay)(R, eQ),
        e1 = e2?.intent === "open" && "channel" === e2.destination ? e2.appChannelId : null,
        e9 = (0, u.bG)([K.A], () => (null == e1 ? null : K.A.getChannel(e1)), [e1]),
        e8 = (0, z.Ay)(e9),
        e3 = (0, B.gU)(e9),
        e7 =
            null != e8 && null != e3
                ? ee.intl.format(J.default.W95rrI, {
                      channel: e8,
                      channelIconHook: (e, t) =>
                          (0, n.jsx)(e3, { size: "xs", color: "currentColor", className: t4.Y2 }, t),
                  })
                : e2?.label,
        e4 = e2?.upToDate === !0 ? ee.intl.string(J.default["5U1fkv"]) : (e2?.disabledReason ?? null),
        e5 =
            null == e2
                ? null
                : (0, n.jsx)("div", {
                      className: t4.As,
                      children: (0, n.jsx)(v.m, {
                          text: e4,
                          asContainer: !0,
                          children: (0, n.jsx)(C.$, {
                              size: "sm",
                              variant: e2.upToDate ? "secondary" : "primary",
                              loading: e2.publishing,
                              disabled: e2.disabled,
                              onClick: () => e2.run("header"),
                              text: e7,
                          }),
                      }),
                  }),
        te = (0, n.jsx)(tR, {
            title: i?.name ?? ee.intl.string(J.default.F2dRba),
            breadcrumb: { title: ee.intl.string(J.default.Xmvb23), onClick: l },
            actions:
                null == i
                    ? null
                    : (0, n.jsxs)("div", {
                          className: t4.FO,
                          children: [
                              en.showModeSwitch ? (0, n.jsx)(tt, { modes: en.modes, mode: es, onChange: eo }) : null,
                              (0, n.jsx)(H.A.Icon, {
                                  icon: eM ? at : ae,
                                  tooltip: eR,
                                  "aria-label": eR,
                                  selected: eM,
                                  onClick: e_,
                              }),
                              (0, n.jsx)(H.A.Icon, {
                                  ref: ex,
                                  icon: t_.A,
                                  tooltip: eA,
                                  "aria-label": eA,
                                  selected: ev,
                                  disabled: eC,
                                  onClick: eS,
                              }),
                              "frame" === es ? (0, n.jsx)(eG.A, { frame: eO, controlProjectId: i.id }) : null,
                              (0, n.jsx)("div", { className: t4.YJ }),
                              N
                                  ? (0, n.jsx)(H.A.Icon, {
                                        icon: A.BugIcon,
                                        tooltip: ee.intl.string(J.default["8MLfBT"]),
                                        "aria-label": ee.intl.string(J.default["8MLfBT"]),
                                        selected: j,
                                        onClick: eN,
                                    })
                                  : null,
                              (0, n.jsx)(H.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: ee.intl.string(J.default.cWmjzs),
                                  "aria-label": ee.intl.string(J.default.cWmjzs),
                                  onClick: () => (0, ty.A)(i.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tx, {
                                  projectId: i.id,
                                  projectName: i.name,
                                  guildId: r,
                                  projectGuildId: i.guild_id,
                                  isOwner: (0, er.PV)(i),
                                  canRemix: (0, er.H_)(i),
                                  onRefresh: (0, t7.x1)(eO) ? ez : void 0,
                                  isRefreshing: eD,
                                  onClose: eB,
                                  onExport: eF,
                                  onImport: eL.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = i.id),
                                          void (0, eI.openModalLazy)(async () => {
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
                                      en.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== en.profileState
                                          ? el
                                          : null,
                                  previewProjectId: i.id,
                              }),
                              em
                                  ? null
                                  : (0, n.jsx)(H.A.Icon, { icon: t5, tooltip: ec, "aria-label": ec, onClick: ep }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: t4.nj,
        children: [
            eL.input,
            (0, n.jsx)("main", {
                className: t4.JX,
                children:
                    null == i
                        ? (0, n.jsxs)("div", {
                              className: t4.j5,
                              children: [
                                  te,
                                  (0, n.jsxs)("div", {
                                      className: t4.sD,
                                      children: [
                                          (0, n.jsx)(S.D, {
                                              variant: "heading-lg/semibold",
                                              children: ee.intl.string(J.default.F2dRba),
                                          }),
                                          (0, n.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ee.intl.string(J.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ee.intl.string(J.default["42EdIV"]),
                                              onClick: () => (0, ea.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(ef.Qc.Provider, {
                              value: eQ,
                              children: (0, n.jsx)(
                                  eE.A,
                                  {
                                      projectId: i.id,
                                      designFeedbackToggleRef: ex,
                                      applicationId: i.preview_application_id,
                                      previewApplicationId: i.preview_application_id,
                                      surface: t7.sd,
                                      header: te,
                                      chatOpen: d,
                                      onCloseChat: eh,
                                      chatHeaderAction: e5,
                                      versionHistoryOpen: p,
                                      onCloseVersionHistory: () => h(!1),
                                      restorePointsOpen: w,
                                      onCloseRestorePoints: () => k(!1),
                                      installScope: i.install_scope,
                                      debugOpen: N && j,
                                      onCloseDebug: eP,
                                      onRestoreVersion: eT,
                                      restoreState: P,
                                      previewReady: $,
                                      previewGate: eZ,
                                      availability: en,
                                      activeMode: es,
                                      widgetApplicationId: el,
                                      onOpenPublishedApp: eq,
                                  },
                                  i.id,
                              ),
                          }),
            }),
        ],
    });
}
function ai(e) {
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
            onIdeaChange: I,
            onCreate: S,
            onCreateFromTemplate: D,
            onStartTemplate: G,
            onSubmitTemplate: z,
            onCancelTemplate: B,
            onSkipTemplate: F,
            onImportNewProject: L,
            importing: V,
        } = e,
        [U, Y] = s.useState(() => ({ guildId: l, filter: t0(l) })),
        q = (U.guildId === l ? U.filter : t0(l)) ?? l,
        K = s.useCallback(
            (e) => {
                (tJ.set(l, e), Y({ guildId: l, filter: e }));
            },
            [l],
        ),
        X = (0, u.yK)(
            [W.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = W.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, l),
            [t, l],
        ),
        Z = s.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: ee.intl.string(J.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: t$,
                    leading: e1.UserIcon,
                    label: ee.intl.string(J.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tQ,
                    leading: e9.R,
                    label: ee.intl.string(J.default["qqH+iN"]),
                },
                ...X.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tW.Ay, { guild: e, size: tW.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [X],
        ),
        $ = (0, u.yK)(
            [er.Ay, W.A],
            () => {
                let e = t2(q);
                if (null != e) return er.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(W.A.getGuilds()))
                    er.Ay.hasFetchedGuildProjects(e.id) && t.push(...er.Ay.getSharedProjects(e.id));
                return t;
            },
            [q],
        );
    s.useEffect(() => {
        let e = t2(q);
        null == e || er.Ay.hasFetchedGuildProjects(e) || (0, ea.hF)(e);
    }, [q]);
    let Q = s.useMemo(
            () =>
                $.filter((e) => t6(e, q)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [$, q],
        ),
        en = s.useMemo(
            () => [
                {
                    label: ee.intl.string(J.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tZ,
                            label: ee.intl.string(J.default.UXnPhI),
                            leading: e1.UserIcon,
                        },
                        ...k.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tW.Ay, { guild: e, size: tW.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [k],
        ),
        es = s.useMemo(
            () =>
                t
                    .filter((e) => t6(e, q))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, q],
        ),
        ei = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ey.X0)(e, l)
                    ? A(e.id)
                    : (0, f.P)((0, g.o)(ee.intl.string(J.default["wY7I+H"]), y.Ck.MESSAGE));
            },
            [l, A],
        ),
        el = ee.intl.string(J.default.TU9IGR),
        ed = [
            ee.intl.string(J.default["E+Q26x"]),
            ee.intl.string(J.default["06/jqP"]),
            ee.intl.string(J.default["3gSfUa"]),
        ],
        eu = [
            {
                id: "moderation-bot",
                name: ee.intl.string(J.default.idRAwG),
                description: ee.intl.string(J.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ee.intl.string(J.default.BLDsiz),
                description: ee.intl.string(J.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: ee.intl.string(J.default["+abXa8"]),
                description: ee.intl.string(J.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: ee.intl.string(J.default.ieAgex),
                description: ee.intl.string(J.default["5yvj+f"]),
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
                        onSubmit: (t, a, n) => z(e, t, a, n),
                        onCancel: B,
                        onSkip: F,
                    }),
                    (0, eI.openModalLazy)(
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
            [k, l, B, D, F, G, z],
        ),
        ec = ee.intl.string(J.default.FYK2xQ),
        ep =
            (s.useEffect(() => {
                (0, ea.b8)();
            }, []),
            (0, u.bG)([er.Ay], () => {
                let e = er.Ay.getMaxProjects();
                return null != e && er.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - er.Ay.getOwnedProjects().length)
                    : null;
            })),
        eh = ee.intl.string(J.default["/SUK82"]),
        ef = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || S());
            },
            [m, S],
        ),
        eg = t2(q) ?? l,
        eb = (0, u.bG)([er.Ay], () => er.Ay.getGuildProjectsFetchState(eg), [eg]),
        ew = (0, u.bG)([er.Ay], () => er.Ay.getGuildProjectsFetchState(l), [l]),
        [ek, ev] = s.useState(t8),
        ej = s.useMemo(() => t1.w.get(t3(l)) ?? !1, [l]),
        ex = "success" === ew,
        eC = (0, u.yK)([er.Ay], () => er.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => t6(e, l)),
        eA = ek ?? (!!eC || "error" === ew || (!ex && ej));
    s.useEffect(() => {
        ex && t1.w.set(t3(l), eC);
    }, [ex, eC, l]);
    let eS = s.useCallback((e) => {
            (t1.w.set(t9, e), ev(e));
        }, []),
        eN = s.useCallback(() => eS(!eA), [eS, eA]),
        eE = s.useCallback(() => eS(!1), [eS]),
        eM = ee.intl.string(J.default.jDPFDh),
        eR = eA ? eM : ee.intl.string(J.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(t4.nj, t4.a0),
        children: (0, n.jsxs)("div", {
            className: t4.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: t4.ps,
                    children: [
                        (0, n.jsx)(tR, {
                            title: ee.intl.string(J.default.Xmvb23),
                            actions: (0, n.jsx)(H.A.Icon, {
                                icon: N.Z,
                                tooltip: eR,
                                "aria-label": eR,
                                selected: eA,
                                onClick: eN,
                            }),
                        }),
                        (0, n.jsx)(P.Ip, {
                            className: t4.Yy,
                            children: (0, n.jsx)("div", {
                                className: t4.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(t4.Qs, t4.Ix),
                                    children: [
                                        (0, n.jsx)(tF, {}),
                                        (0, n.jsx)(eK, {}),
                                        (0, n.jsxs)("section", {
                                            className: t4.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t4.G9,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ee.intl.string(J.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eD, {
                                                    listClassName: t4.Aw,
                                                    radius: e_,
                                                    children: eu.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t4.EA,
                                                                children: (0, n.jsxs)(eT, {
                                                                    disabled: r,
                                                                    ariaLabel: ee.intl.formatToPlainString(
                                                                        J.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(t4.nx, t4.rz),
                                                                    onClick: () => em(e),
                                                                    children: [
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t4.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t4.BK,
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
                                            className: t4.WI,
                                            "aria-label": eh,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t4.G9,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eh,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ee.intl.string(J.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eD, {
                                                    listClassName: t4.Aw,
                                                    radius: eO,
                                                    children: ed.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t4.EA,
                                                                children: (0, n.jsx)(eT, {
                                                                    disabled: r,
                                                                    className: t4.nx,
                                                                    onClick: () => S(e),
                                                                    children: (0, n.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t4.un,
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
                                        (0, n.jsx)(eP, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: t4.Yl,
                            children: (0, n.jsxs)("div", {
                                className: o()(t4.Qs, t4.DA),
                                children: [
                                    (0, n.jsx)(E.f, {
                                        label: el,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: i,
                                        placeholder: el,
                                        error: d,
                                        onChange: I,
                                        onKeyDown: ef,
                                    }),
                                    null != h
                                        ? (0, n.jsx)(T.S, {
                                              checked: h,
                                              disabled: r,
                                              onChange: () => w(!h),
                                              label: ee.intl.string(J.default.nyY2CS),
                                              description: ee.intl.string(J.default.EwshDz),
                                          })
                                        : null,
                                    (0, n.jsxs)("div", {
                                        className: t4.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: t4.gH,
                                                children: (0, n.jsx)(M.l, {
                                                    selectionMode: "single",
                                                    label: ee.intl.string(J.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: ee.intl.string(J.default.MLg0S8),
                                                    options: en,
                                                    value: c,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            null != ep
                                                ? (0, n.jsx)(b.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === ep ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === ep
                                                              ? ee.intl.string(J.default.JQU61N)
                                                              : ee.intl.formatToPlainString(J.default["336dtK"], {
                                                                    count: ep,
                                                                }),
                                                  })
                                                : null,
                                            (0, n.jsx)(e7.A, {
                                                settings: v ?? et.v0,
                                                tiers: et.qf,
                                                choices: (0, eo.e)()
                                                    ? {
                                                          main: [...et.S8.main, ...et.wF.main],
                                                          subagent: [...et.S8.subagent, ...et.wF.subagent],
                                                          thinking: et.S8.thinking,
                                                      }
                                                    : et.S8,
                                                disabled: r,
                                                onChange: j,
                                            }),
                                            (0, n.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ee.intl.string(ee.t.CumH4u),
                                                disabled: m,
                                                loading: r,
                                                onClick: () => S(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("aside", {
                    className: t4.pA,
                    hidden: !eA,
                    "aria-label": ee.intl.string(J.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: t4.IR,
                            children: [
                                (0, n.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t4.RM,
                                    children: ee.intl.string(J.default.Bo5fE3),
                                }),
                                (0, n.jsxs)("div", {
                                    className: t4.Ss,
                                    children: [
                                        (0, n.jsx)(e3, { importing: V, onImport: L }),
                                        (0, n.jsx)(H.A.Icon, { icon: R.P, tooltip: eM, "aria-label": eM, onClick: eE }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)(P.Ip, {
                            className: t4.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: t4.Vw,
                                    children: (0, n.jsx)(M.l, {
                                        selectionMode: "single",
                                        label: ee.intl.string(J.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Z,
                                        value: q,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t4.wE,
                                    children: ee.intl.string(J.default.YnAFtT),
                                }),
                                ("unattempted" === eb || "loading" === eb) && 0 === es.length
                                    ? (0, n.jsx)("div", { className: t4.E8, children: (0, n.jsx)(x.y, {}) })
                                    : "error" === eb && 0 === es.length
                                      ? (0, n.jsxs)("div", {
                                            className: t4.E8,
                                            children: [
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t4.JS,
                                                    children: ee.intl.string(J.default["IN/HRP"]),
                                                }),
                                                (0, n.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ee.intl.string(J.default["42EdIV"]),
                                                    onClick: () => (0, ea.hF)(eg),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, n.jsx)("div", {
                                              className: t4.D1,
                                              children: (0, n.jsxs)("div", {
                                                  className: t4.ST,
                                                  children: [
                                                      (0, n.jsx)(_.D, { size: "lg", color: O.A.colors.TEXT_SUBTLE }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t4.sI,
                                                          children: ee.intl.string(J.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: t4.Dq,
                                              children: es.map((e) =>
                                                  (0, n.jsx)(
                                                      an,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => ei(e),
                                                          onRemix: () => (0, tX.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                Q.length > 0
                                    ? (0, n.jsxs)("div", {
                                          className: t4.qx,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: t4.uc,
                                                  children: [
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ee.intl.string(J.default.jrCnUc),
                                                      }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ee.intl.string(J.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: t4.Dq,
                                                  children: Q.map((e) =>
                                                      (0, n.jsx)(
                                                          an,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => ei(e),
                                                              onRemix: () => (0, tX.A)(e, l),
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
function ao(e) {
    let t,
        { guildId: a, projectId: i } = e,
        o = (0, u.yK)([er.Ay], () => er.Ay.getOwnedProjects()),
        l = (0, u.yK)([X.Ay], () => X.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [W.A, Z.A],
            () => {
                let e = W.A.getGuild(a);
                return null != e && Z.A.can(tG.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, m] = s.useState(""),
        c = i ?? null,
        [p, h] = s.useState(!1),
        [b, w] = s.useState(null),
        k = (0, eh._)("VibegrationsScreen"),
        [v, j] = s.useState(null);
    s.useEffect(() => {
        j(null);
    }, [a]);
    let x = s.useMemo(() => (k.some((e) => e.id === a) ? a : tZ), [k, a]),
        C = v ?? x,
        A = C === tZ ? "user" : "guild",
        I = C === tZ ? a : C,
        [S, N] = s.useState(!0),
        [P, E] = s.useState(null);
    (s.useEffect(() => {
        (0, ea.hF)(a);
    }, [a, l, r]),
        s.useEffect(() => {
            (0, ea.dm)(a, c);
        }, [a, c]));
    let T = s.useCallback(
            async (e, t, a) => {
                let n = await (0, ea.gA)({ guild_id: t, install_scope: a, flags: (0, et.RS)("guild" === a && S) });
                ((0, Q.Hc)(n),
                    (0, Q.r2)(n, P ?? et.v0),
                    e(n),
                    (0, U.pX)(tG.BVt.CHANNEL(t, tb.VV.VIBEGRATIONS, n)),
                    m(""),
                    E(null));
            },
            [S, P],
        ),
        M = s.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = ex({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), h(!0), w(null));
                    try {
                        await T((e) => (0, Q.dv)(e, t), I, A);
                    } catch (e) {
                        w((0, es.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, A, I, d, p],
        ),
        R = s.useCallback(
            async (e) => {
                if (!p) {
                    (h(!0), w(null));
                    try {
                        await T(
                            (t) => {
                                var a;
                                (0, Q.dv)(
                                    t,
                                    ((a = e.name),
                                    ee.intl.formatToPlainString(J.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            I,
                            A,
                        );
                    } catch (e) {
                        w((0, es.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, A, I, p],
        ),
        _ = s.useCallback(
            async (e, t) => {
                let a = await (0, ea.gA)({ guild_id: t, install_scope: "guild", flags: (0, et.RS)(S) });
                return ((0, Q.Hc)(a), (0, Q.r2)(a, P ?? et.v0), (0, Q.dv)(a, (0, el.v8)(e)), a);
            },
            [S, P],
        ),
        O = s.useCallback(async (e, t, a, n) => {
            if (er.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, ea.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new es.uQ((0, es.hj)(e), e.status);
            }
            ((0, Q.dv)(t, n, void 0, { templateId: e.id }),
                (0, U.pX)(tG.BVt.CHANNEL(a, tb.VV.VIBEGRATIONS, t)),
                E(null));
        }, []),
        D = s.useCallback((e) => {
            (0, ea.xx)(e).catch(() => void 0);
        }, []),
        G = s.useCallback(
            (e) => {
                let t = er.Ay.getProject(e)?.guild_id ?? a;
                ((0, U.pX)(tG.BVt.CHANNEL(t, tb.VV.VIBEGRATIONS, e)), E(null));
            },
            [a],
        ),
        [z, B] = s.useState(!1),
        F = s.useCallback(
            async (e, t) => {
                let n = e0(e);
                if (null != n) return void (0, f.P)((0, g.o)(n, y.Ck.FAILURE));
                B(!0);
                let s = null;
                try {
                    ((s = await (0, ea.gA)({ guild_id: a, install_scope: t, flags: (0, et.RS)("guild" === t && S) })),
                        (0, Q.Hc)(s),
                        (0, Q.r2)(s, P ?? et.v0),
                        await eJ(s, e, ee.intl.string(J.default.KjEtrZ)),
                        (0, U.pX)(tG.BVt.CHANNEL(a, tb.VV.VIBEGRATIONS, s)),
                        E(null));
                } catch {
                    (null != s && (await (0, ea.xx)(s).catch(() => void 0)),
                        (0, f.P)((0, g.o)(ee.intl.string(J.default["02GpNr"]), y.Ck.FAILURE)));
                } finally {
                    B(!1);
                }
            },
            [a, S, P],
        ),
        L = s.useCallback(
            (e) => {
                (0, U.pX)(tG.BVt.CHANNEL(a, tb.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        V = s.useCallback(() => {
            (0, U.pX)(tG.BVt.CHANNEL(a, tb.VV.VIBEGRATIONS));
        }, [a]),
        H = s.useCallback((e) => {
            (m(e), w(null));
        }, []),
        Y = (0, u.bG)(
            [er.Ay],
            () => {
                if (null == c) return null;
                let e = er.Ay.getProject(c);
                return null == e || (0, er.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        q = (0, u.bG)([er.Ay], () => er.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, n.jsx)(as, { project: Y, projectsLoaded: q, onBack: V, guildId: a }, c)
        : (0, n.jsx)(ai, {
              projects: o,
              modelSettings: P,
              onModelSettingsChange: E,
              idea: d,
              guildId: a,
              submitting: p,
              createError: b,
              createDisabled: "idea" === (t = ex({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: L,
              onIdeaChange: H,
              onCreate: M,
              onCreateFromTemplate: R,
              onStartTemplate: _,
              onSubmitTemplate: O,
              onCancelTemplate: D,
              onSkipTemplate: G,
              onImportNewProject: F,
              importing: z,
              conjureTarget: C,
              onConjureTargetChange: j,
              nativeAppChannels: "guild" === A ? S : null,
              onNativeAppChannelsChange: N,
              eligibleGuilds: k,
          });
}
