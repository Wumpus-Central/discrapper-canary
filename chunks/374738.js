(a.r(t), a.d(t, { default: () => at }), a(321073));
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
    x = a(140735),
    j = a(289873),
    C = a(821609),
    A = a(92446),
    I = a(625903),
    N = a(297264),
    S = a(97893),
    P = a(364522),
    E = a(103557),
    T = a(150934),
    R = a(691885),
    M = a(789645),
    _ = a(152367),
    O = a(661531),
    D = a(627363),
    G = a(47167),
    z = a(713654),
    B = a(625180),
    F = a(672929),
    L = a(775946),
    V = a(742589),
    H = a(976860),
    U = a(402860),
    Y = a(885386),
    q = a(734057),
    K = a(696451),
    X = a(71393),
    W = a(576705),
    Z = a(486020),
    $ = a(277977),
    Q = a(50617),
    J = a(375708),
    ee = a(673724),
    et = a(948230),
    ea = a(637708),
    en = a(936494),
    es = a(443741),
    ei = a(208137),
    eo = a(993396),
    el = a(972786),
    er = a(822835),
    ed = a(287809),
    eu = a(427262),
    em = a(783791),
    ec = a(725592),
    ep = a(459514),
    eh = a(455435),
    ef = a(808728),
    eg = a(683180),
    ey = a(74029),
    eb = a(559676),
    ew = a(58551),
    ek = a(215181),
    ev = a(805332);
function ex(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var ej = a(58703),
    eC = a(127181),
    eA = a(192308);
function eI() {
    (0, eA.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, n.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var eN = a(413927);
function eS() {
    let e = (0, eC.TH)("desktop");
    if (0 === e.length) return null;
    let t = J.intl.string(Q.default.x07mpp);
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
                        children: J.intl.string(Q.default.h5CwHI),
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
                                        (0, ej.i$)(r()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eC.MZ)(e) ? ` \xb7 ${J.intl.string(Q.default.vvxuUI)}` : null,
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
            (0, eC.B)("desktop")
                ? (0, n.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: J.intl.string(Q.default.YWxThz),
                      onClick: eI,
                  })
                : null,
        ],
    });
}
var eP = a(823436);
function eE(e) {
    let { className: t, ariaLabel: a, disabled: s, onClick: i, children: o } = e;
    return (0, n.jsx)(k.D, { "aria-disabled": s, "aria-label": a, className: t, onClick: s ? void 0 : i, children: o });
}
var eT = a(865665),
    eR = a(568190);
let eM = { x: 5, y: 7 },
    e_ = { x: 5, y: 4 };
function eO(e) {
    let { listClassName: t, radius: a, children: i } = e,
        [o, l] = s.useState(!1);
    return (0, n.jsxs)("div", {
        className: eR.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, n.jsx)("ol", { className: t, children: i }),
            o ? (0, n.jsx)(eT.C, { area: 64, radius: a, color: O.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eD = a(210744),
    eG = a(864970),
    ez = a(707554),
    eB = a(770178),
    eF = a(765548),
    eL = a(597643),
    eV = a(885576),
    eH = a(236730);
let eU = "heading-xxl/semibold",
    eY = !1;
function eq() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        i = (0, eF.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, eB.w)(i, [], { fireOnMount: !0 }),
        l = (0, u.bG)([eL.A], () => eL.A.isConnected());
    s.useEffect(() => {
        if (!l || !t || eY) return;
        let a = !1,
            n = 0;
        function s() {
            a ||
                (n = window.setTimeout(() => {
                    ((eY = !0), e.current?.play());
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
    let r = (0, u.bG)([eV.A], () => eV.A.isIdle()),
        d = s.useRef(r);
    s.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eY && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = J.intl.string(Q.default["2tYpRK"]);
    return (0, n.jsx)("div", {
        ref: o,
        className: eH.x,
        children: t
            ? (0, n.jsx)(ez.H, { children: (0, n.jsx)(eG.o, { ref: e, text: m, variant: eU, delay: null }) })
            : (0, n.jsx)(N.D, { variant: eU, children: m }),
    });
}
var eK = a(922016),
    eX = a(980707),
    eW = a(477782),
    eZ = a(81369),
    e$ = a(402879);
async function eQ(e, t, a) {
    (0, $.Hc)(e);
    let n = await (0, $.vX)(e, t);
    (0, $.dv)(e, a, [n]);
}
function eJ(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ee.x5)(e.size, t)
        ? null
        : J.intl.formatToPlainString(Q.default.AzziHF, { size: (0, ee.ZJ)((0, ee.yr)(t)) });
}
async function e0(e, t) {
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
        s = await (0, $.cS)(e, n);
    await (0, e$.F)(s, n);
}
function e2(e) {
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
var e6 = a(950305),
    e1 = a(664121);
let e9 = [
    { value: "user", icon: e6.UserIcon, nameMessage: Q.default.iqXIRN },
    { value: "guild", icon: e1.R, nameMessage: Q.default.LdgKdI },
];
function e8(e) {
    let { importing: t, onImport: a } = e,
        i = s.useRef(null),
        o = e2(s.useCallback((e) => a(e, "user"), [a])),
        l = e2(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eK.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: eK.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eX.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": J.intl.string(Q.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(eW.rX, {
                            label: J.intl.string(Q.default.MLg0S8),
                            children: e9
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: J.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        eW.Dr,
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
                        icon: eZ.H,
                        text: J.intl.string(Q.default["NHP2+t"]),
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
    e3 = a(629584),
    e5 = a(753514),
    e4 = a(491920);
function te(e) {
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
        : (0, n.jsx)(e3.I, {
              role: "tablist",
              look: "pill",
              className: o()(e4.b, l),
              optionClassName: e4.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var tt = a(663417),
    ta = a(70688),
    tn = a(173936),
    ts = a(473935),
    ti = a(408278),
    to = a(365199),
    tl = a(7437),
    tr = a(147036),
    td = a(957565),
    tu = a(123917),
    tm = a(557875);
let tc = new Set();
var tp = a(976814),
    th = a(746080),
    tf = a(793712);
let tg = [];
function ty(e) {
    (0, f.P)((0, g.o)(e, y.Ck.FAILURE));
}
function tb(e) {
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
            isRefreshing: x = !1,
            onClose: j,
            refreshApplicationId: C,
            previewProjectId: A,
            trigger: N = "header",
        } = e,
        S = s.useRef(null),
        { pending: P, refresh: E } = (0, tl.A)(C ?? null),
        { pending: T, connect: R } = (function (e, t) {
            let [a, n] = s.useState(tc),
                i = s.useRef(tc),
                o = s.useCallback((e) => {
                    ((i.current = (0, tm.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, tm.K9)(i.current, a.type);
                        async function l() {
                            let n = await (0, $.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, tu.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tm.rq)(n.error)
                                          ? J.intl.string(Q.default.avu1u4)
                                          : J.intl.string(Q.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(A ?? null, ty),
        M = (0, u.bG)([$.Ay], () => (null == A ? tg : $.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: s } = e,
                i = [];
            for (let { connection: e, offer: o } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: J.intl.string(Q.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                i.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: J.intl.formatToPlainString(Q.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: s.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: J.intl.formatToPlainString(Q.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: P,
            offers: s.useMemo(() => (0, tm.Xl)(M), [M]),
            connectPending: T,
        }),
        O = s.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        D = null != p && r,
        G = l && null != c,
        z = D || null != d || G || null != h || null != b || null != w,
        B = td.p5 && null != i,
        F = td.p5;
    return null != k || null != j || z || F || l
        ? (0, n.jsx)(eK.Y, {
              targetElementRef: S,
              position: "bottom",
              align: "right",
              animation: eK.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, n.jsxs)(eX.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": J.intl.string(J.t.ogxXGq),
                      onClose: s,
                      onSelect: s,
                      children: [
                          null != k || null != j
                              ? (0, n.jsxs)(eW.rX, {
                                    children: [
                                        null != k
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "refresh",
                                                  icon: tt.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: tt.RefreshIcon },
                                                  label: J.intl.string(Q.default.xKexN1),
                                                  disabled: x,
                                                  action: k,
                                              })
                                            : null,
                                        null != j
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "close",
                                                  icon: ta.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ta.DoorExitIcon },
                                                  label: J.intl.string(Q.default.Ea0Wrr),
                                                  action: j,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, n.jsx)(eW.rX, {
                                    children: _.map((e) =>
                                        (0, n.jsx)(
                                            eW.Dr,
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
                              ? (0, n.jsxs)(eW.rX, {
                                    children: [
                                        D
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "remix",
                                                  label: J.intl.string(Q.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "export",
                                                  label: J.intl.string(Q.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        G
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "import",
                                                  label: J.intl.string(Q.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != h
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "connect-tool",
                                                  label: J.intl.string(Q.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "version-history",
                                                  label: J.intl.string(Q.default.jAWwzi),
                                                  action: b,
                                              })
                                            : null,
                                        null != w
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "restore-points",
                                                  label: J.intl.string(Q.default.FRjicO),
                                                  action: w,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          F
                              ? (0, n.jsxs)(eW.rX, {
                                    children: [
                                        B
                                            ? (0, n.jsx)(eW.Dr, {
                                                  id: "copy-link",
                                                  label: J.intl.string(J.t.WqhZss),
                                                  icon: tn.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: tn.LinkIcon },
                                                  action: () =>
                                                      (0, td.C)((0, tr.n)(i, th.VV.VIBEGRATIONS, t), () =>
                                                          (0, f.P)(
                                                              (0, g.o)(J.intl.string(J.t["L/PwZf"]), y.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, n.jsx)(eW.Dr, {
                                            id: "copy-project-id",
                                            label: J.intl.string(Q.default.b4TqpT),
                                            icon: ts.L,
                                            leadingAccessory: { type: "icon", icon: ts.L },
                                            action: () =>
                                                (0, td.C)(t, () =>
                                                    (0, f.P)((0, g.o)(J.intl.string(Q.default.WOKsTg), y.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          l
                              ? (0, n.jsxs)(eW.rX, {
                                    children: [
                                        (0, n.jsx)(eW.Dr, {
                                            id: "settings",
                                            label: J.intl.string(Q.default["xhcY+n"]),
                                            icon: I.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                                            action: () =>
                                                (0, tp.A)(t, { guildId: o ?? i, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, n.jsx)(eW.Dr, {
                                            id: "delete",
                                            label: J.intl.string(J.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, m.A)({
                                                    title: J.intl.formatToPlainString(Q.default.ZokHVz, { name: a }),
                                                    subtitle: J.intl.string(Q.default.NmF939),
                                                    confirmText: J.intl.string(J.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, et.K)(t, () =>
                                                            (0, f.P)(
                                                                (0, g.o)(J.intl.string(Q.default.tqKZCi), y.Ck.FAILURE),
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
                      className: tf.h,
                      children:
                          "iconButton" === N
                              ? (0, n.jsx)(v.m, {
                                    text: J.intl.string(J.t["UKOtz+"]),
                                    children: (0, n.jsx)(ti.K, {
                                        icon: to.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": J.intl.string(J.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": s,
                                        onClick: a,
                                    }),
                                })
                              : (0, n.jsx)(V.A.Icon, {
                                    icon: to.MoreHorizontalIcon,
                                    tooltip: J.intl.string(J.t["UKOtz+"]),
                                    "aria-label": J.intl.string(J.t["UKOtz+"]),
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
var tw = a(778712),
    tk = a(97808),
    tv = a(104171),
    tx = a(889227),
    tj = a(350086);
let tC = tw._3.SIZE_16;
function tA(e) {
    return e instanceof tx.A
        ? (0, n.jsx)(tk.eu, { src: e.getAvatarURL(void 0, (0, tw.FT)(tC)), size: tC, "aria-hidden": !0 })
        : null;
}
function tI(e) {
    let { creator: t, className: a } = e,
        s = [t.creator, ...t.collaborators],
        i = s.length - 3;
    return (0, n.jsxs)("div", {
        className: o()(tj.c, a),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)(tv.Ay, { users: s.slice(0, 3), max: 3, size: tv.DN.SIZE_16, renderUser: tA }),
            i > 0 ? (0, n.jsxs)(b.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var tN = a(769979);
function tS(e) {
    let { title: t, actions: a, breadcrumb: s } = e;
    return (0, n.jsx)(V.A, {
        hideSearch: !0,
        toolbar: a,
        className: tN.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: tN.QF,
            children: [
                (0, n.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: O.A.colors.TEXT_STRONG,
                    className: tN.Kk,
                }),
                null != s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(V.A.Title, { onClick: s.onClick, children: s.title }),
                              (0, n.jsx)(V.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(V.A.Title, { className: tN.Qw, wrapperClassName: tN.DD, children: t }),
            ],
        }),
    });
}
var tP = a(73432),
    tE = a(683071),
    tT = a(994500),
    tR = a(652215);
let tM = "conjuring-help";
var t_ = a(107148);
function tO() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([ed.default, X.A, ef.Ay, tT.A], () => {
                let e = ed.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of X.A.getGuildsArray()) {
                    if (!t.features.has(tR.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = ef.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, G.m1)(t, ed.default, tT.A) === tM;
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
                    ? (0, H.pX)(tR.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tu.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, n.jsx)("div", {
              className: t_.l,
              children: (0, n.jsx)(tE.w, {
                  type: "info",
                  iconAlign: "center",
                  children: J.intl.format(Q.default["4BsHmp"], { channel: tM, onNavigate: t }),
              }),
          });
}
var tD = a(321593),
    tG = a(580954),
    tz = a(227189),
    tB = a(189213),
    tF = a(145216);
function tL(e) {
    let { reason: t, transitionState: a, onClose: s } = e,
        i = t === tF.H.PERMISSIONS;
    return (0, n.jsx)(tB.a, {
        transitionState: a,
        onClose: s,
        title: J.intl.string(i ? Q.default.Rtlv25 : Q.default["+UouPe"]),
        subtitle: J.intl.string(i ? Q.default["nDQB/b"] : Q.default["E0QD++"]),
        size: "sm",
        actions: [{ text: J.intl.string(i ? J.t.BddRzS : Q.default["+Zh4FA"]), variant: "primary", onClick: s }],
    });
}
var tV = a(480007),
    tH = a(584936),
    tU = a(548118);
let tY = "user",
    tq = "user",
    tK = "no-server",
    tX = new Map();
function tW(e) {
    return tX.get(e) ?? null;
}
function tZ(e) {
    switch (e) {
        case "all":
        case tq:
        case tK:
            return null;
        default:
            return e;
    }
}
function t$(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tq:
            return "user" === e.install_scope;
        case tK:
            return null == (0, ea.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tQ = a(506774);
let tJ = "VibegrationsProjectsPanelOpen";
function t0() {
    return tQ.w.get(tJ) ?? null;
}
function t2(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var t6 = a(165610),
    t1 = a(352978);
function t9(e) {
    return (0, n.jsx)(c.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function t8(e) {
    return (0, n.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function t7(e) {
    return (0, n.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
let t3 = {
    showPublishBlocked: function (e) {
        (0, eA.openModal)((t) => (0, n.jsx)(tL, { ...t, reason: e }));
    },
    openPublishNotes: tV.A,
    showError: (e) => (0, f.P)((0, g.o)(e, y.Ck.FAILURE)),
    openProfile: (e) => {
        (0, U.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(a.bind(a, 468689))
            .then((t) => {
                let { default: a } = t;
                return a.open(e, tR.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function t5(e) {
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
        N,
        { project: S, guildId: P, onSelect: E, onRemix: T, shared: R = !1 } = e,
        M =
            ((a = S.id),
            (i = S.name),
            (l = s.useRef(!1)),
            (c = s.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, f.P)((0, g.o)(J.intl.formatToPlainString(Q.default.u9TapG, { name: i }), y.Ck.MESSAGE)),
                    e0(a, i)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, f.P)(
                                    (0, g.o)(
                                        409 === (t = e instanceof $._v ? e.status : null)
                                            ? J.intl.string(Q.default.uB40Hz)
                                            : 404 === t
                                              ? J.intl.string(Q.default.wCq2jC)
                                              : J.intl.string(Q.default.G2GqyP),
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
                onImport: (p = e2(
                    s.useCallback(
                        (e) => {
                            let t = eJ(e);
                            null != t
                                ? (0, f.P)((0, g.o)(t, y.Ck.FAILURE))
                                : (0, m.A)({
                                      title: J.intl.formatToPlainString(Q.default.XYZqZK, { name: i }),
                                      subtitle: J.intl.string(Q.default["6syXoH"]),
                                      confirmText: J.intl.string(Q.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(tR.BVt.CHANNEL(P, th.VV.VIBEGRATIONS, a));
                                          try {
                                              await eQ(a, e, J.intl.string(Q.default.C7GU2r));
                                          } catch {
                                              (0, f.P)((0, g.o)(J.intl.string(Q.default["02GpNr"]), y.Ck.FAILURE));
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
        { data: O } = (0, D.YY)(_),
        G = O?.icon == null ? null : Z.Ay.getApplicationIconURL({ id: _, icon: O.icon, size: 40 }),
        z =
            null == S.updated_at
                ? null
                : J.intl.formatToPlainString(Q.default.oMDaqr, { time: r()(S.updated_at).fromNow() }),
        B = (0, ea.HC)(S),
        F =
            (0, u.bG)([X.A], () => (null == B ? null : (X.A.getGuild(B)?.name ?? null)), [B]) ??
            J.intl.string(Q.default["qqH+iN"]),
        V = (0, u.bG)([el.Ay], () => el.Ay.isProjectDeleting(S.id), [S.id]),
        U =
            ((t = R ? S : null),
            (h = t?.id),
            (C = t?.owner_user_id),
            (A = (0, u.yK)(
                [em.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  em.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== C ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, C],
            )),
            s.useEffect(() => {
                null != C && ((0, ec.Y)(C), A.forEach(ec.Y));
            }, [C, A]),
            (I = (0, u.bG)([ed.default], () => (null == C ? null : ed.default.getUser(C)), [C])),
            (N = (0, u.yK)([ed.default], () => A.map((e) => ed.default.getUser(e)).filter((e) => null != e), [A])),
            s.useMemo(
                () =>
                    null == I
                        ? null
                        : {
                              creator: I,
                              collaborators: N,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? J.intl.formatToPlainString(Q.default.TwgkQe, { creator: e })
                                      : J.intl.formatToPlainString(Q.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (a = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === a
                                                      ? J.intl.formatToPlainString(J.t["8s9z8P"], { first: t[0] })
                                                      : 2 === a
                                                        ? J.intl.formatToPlainString(J.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === a
                                                          ? J.intl.formatToPlainString(J.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : J.intl.formatToPlainString(J.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: a - 3,
                                                            }),
                                        });
                              })(
                                  (0, eu.mG)(I),
                                  N.map((e) => (0, eu.mG)(e)),
                              ),
                          },
                [I, N],
            )),
        Y = s.useId(),
        q = (0, n.jsx)(b.E, { variant: "text-md/semibold", color: "text-strong", className: t1.j1, children: S.name }),
        K =
            null == G
                ? (0, n.jsx)("div", {
                      className: t1.a8,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(w.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, n.jsx)("img", { alt: "", src: G, className: t1.VJ }),
        W = (0, ek.lE)(S.id);
    return (0, n.jsxs)("div", {
        className: o()(t1.OY, { [t1.Wy]: V }),
        "aria-busy": V,
        children: [
            (0, n.jsx)(tD.Ay, { projectId: S.id }),
            null == W || V ? null : (0, n.jsx)("div", { className: t1.SB, "aria-hidden": !0 }),
            (0, n.jsxs)(k.D, {
                className: t1.W6,
                onClick: V ? void 0 : E,
                tabIndex: V ? -1 : void 0,
                "aria-describedby": null != U ? Y : void 0,
                children: [
                    K,
                    (0, n.jsxs)("div", {
                        className: t1.MM,
                        children: [
                            (0, n.jsxs)("div", {
                                className: t1.Ub,
                                children: [
                                    null != U ? (0, n.jsx)(v.m, { text: U.label, ariaHidden: !0, children: q }) : q,
                                    null == U || V ? null : (0, n.jsx)(tI, { creator: U, className: t1.rb }),
                                    W !== d.I.NEEDS_INPUT || V
                                        ? null
                                        : (0, n.jsxs)("div", {
                                              className: t1.fs,
                                              children: [
                                                  (0, n.jsx)(L.A, { mentionsCount: 1 }),
                                                  (0, n.jsx)(x.A, { children: J.intl.string(Q.default.V3e2Yd) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: t1.h3,
                                children: [
                                    (0, n.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: t1.Wb,
                                        children: V ? J.intl.string(Q.default.EwXXks) : F,
                                    }),
                                    null == z || V
                                        ? null
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: t1.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: t1.zM,
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
            null != U ? (0, n.jsx)(x.A, { id: Y, children: U.label }) : null,
            (0, n.jsx)("div", {
                className: t1.M2,
                children: V
                    ? (0, n.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, n.jsxs)("div", {
                          className: t1.Pl,
                          children: [
                              (0, n.jsx)(tb, {
                                  projectId: S.id,
                                  projectName: S.name,
                                  guildId: P,
                                  projectGuildId: S.guild_id,
                                  isOwner: (0, el.PV)(S),
                                  canRemix: (0, el.H_)(S),
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
function t4(e) {
    var t;
    let { project: i, projectsLoaded: o, onBack: l, guildId: r } = e,
        [d, c] = s.useState(!0),
        [p, h] = s.useState(!1),
        [w, k] = s.useState(!1),
        [x, j] = s.useState(!1),
        S = Y.Q_.useSetting(),
        [P, E] = s.useState(null),
        [T, R] = s.useState(null),
        M = i?.id ?? null,
        _ = s.useRef(M),
        O = s.useRef(!0),
        L = s.useRef(!1),
        U = s.useRef(null);
    ((_.current = M),
        s.useEffect(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        ));
    let K = (0, u.bG)([el.Ay], () => (null == M ? null : el.Ay.getIntegrationStatus(M)), [M]),
        { data: X, isLoading: W } = (0, D.YY)(i?.preview_application_id ?? void 0),
        Z = null != M && T !== M,
        ee = K?.preview_ready === !0,
        ea = K?.has_activity === !0,
        {
            availability: en,
            activeMode: ei,
            setMode: eo,
            widgetApplicationId: ed,
        } = (0, er.q)({
            applicationId: i?.preview_application_id ?? null,
            previewApplicationId: i?.preview_application_id ?? null,
            declaredActivity: ea,
            installScope: i?.install_scope ?? null,
            ownerAuthorizationRevoked: K?.owner_authorization_revoked === !0,
        }),
        eu = (0, ew.Qg)({
            installScope: i?.install_scope ?? null,
            previewReady: ee,
            integrationInstalled: K?.integration_installed ?? null,
            botPermissionsChanged: K?.bot_permissions_changed === !0,
        }),
        em = d && !x && !p && !w,
        ec = J.intl.string(em ? Q.default.YdgE0j : Q.default.aWVf4j),
        ep = s.useCallback(() => {
            if (x || p || w) {
                (j(!1), h(!1), k(!1), c(!0));
                return;
            }
            c((e) => !e);
        }, [x, p, w]),
        ek = s.useCallback(() => c(!1), []),
        { active: ex } = (0, ey.Q_)(M),
        ej = s.useRef(null),
        eC = (0, eb.o4)(M),
        eI = J.intl.string(eC ? Q.default.bfQ4Ki : ex ? Q.default.rfNEHn : Q.default.lXcEa2),
        eN = s.useCallback(() => {
            if (null != M) {
                if (ex) return void (0, ey.PS)(M);
                (j(!1), h(!1), k(!1), c(!0), (0, ey.nI)(M));
            }
        }, [M, ex]),
        eS = s.useCallback(() => {
            j((e) => !e && (c(!0), h(!1), k(!1), !0));
        }, []),
        eE = s.useCallback(() => j(!1), []),
        eT = s.useCallback(
            (e) => {
                if (null == i || L.current) return;
                let t = i.id;
                function a() {
                    return O.current && _.current === t;
                }
                ((L.current = !0),
                    h(!1),
                    c(!0),
                    E({ entry: e, status: "restoring" }),
                    (0, $.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && E({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (E({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, f.P)((0, g.o)(J.intl.string(Q.default.q6iZ84), y.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (L.current = !1);
                        }));
            },
            [i],
        ),
        eR = (0, u.bG)([ev.A], () => ev.A.isBuilderPreviewMobile()),
        eM = J.intl.string(eR ? Q.default["3uCc8U"] : Q.default["+nzCxZ"]),
        e_ = s.useCallback(() => (0, et.GG)(!eR), [eR]),
        eO = (0, F.A)(i?.preview_application_id ?? null, t6.sd),
        eG = (0, t6.x1)(eO) && eO.data.proxyTicketRefreshing,
        ez = s.useCallback(() => {
            null == eO || eG || B.A.refreshProxyTicket(eO.id);
        }, [eO, eG]),
        eB = s.useCallback(() => {
            var e, t;
            (null != i && ((e = i.id), (t = eO?.id), (0, $.Bn)(e), (0, tG.A)().leaveFrame(t)), l());
        }, [i, eO?.id, l]),
        eF = s.useCallback(() => {
            null != i && (c(!0), (0, $.dv)(i.id, J.intl.string(Q.default["2ejwtJ"])));
        }, [i]),
        eL = e2(
            s.useCallback(
                (e) => {
                    if (null == i) return;
                    let t = i.id,
                        a = eJ(e);
                    null != a
                        ? (0, f.P)((0, g.o)(a, y.Ck.FAILURE))
                        : (0, m.A)({
                              title: J.intl.formatToPlainString(Q.default.XYZqZK, { name: i.name }),
                              subtitle: J.intl.string(Q.default["6syXoH"]),
                              confirmText: J.intl.string(Q.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  c(!0);
                                  try {
                                      await eQ(t, e, J.intl.string(Q.default.C7GU2r));
                                  } catch {
                                      (0, f.P)((0, g.o)(J.intl.string(Q.default["02GpNr"]), y.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [i],
            ),
        ),
        eV = s.useCallback(() => {
            null != i && (0, tH.A)(i, r);
        }, [i, r]),
        eH = s.useCallback(async () => {
            if (null == M || _.current !== M) return;
            U.current?.abort();
            let e = new AbortController();
            ((U.current = e), R(null));
            try {
                await (0, et.U1)(M, e.signal);
            } catch {
            } finally {
                e.signal.aborted || U.current !== e || _.current !== M || R(M);
            }
        }, [M]);
    s.useEffect(
        () => (
            eH(),
            () => {
                (U.current?.abort(), (U.current = null));
            }
        ),
        [eH],
    );
    let eU = (0, es.H)(i ?? null, K ?? null, r),
        eY = ((t = i?.application_id ?? null), (0, u.bG)([ef.Ay], () => (null == t ? null : (0, eg.SH)(r, t)), [r, t])),
        eq = s.useMemo(() => (null == eY ? null : () => (0, H.pX)(tR.BVt.CHANNEL(r, eY))), [r, eY]),
        eK = s.useCallback(async () => {
            null != i && (await (0, es.w)(i, eU));
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
                      ...(0, tz.p)({ applicationId: e, application: X ?? null, guildId: eU }),
                      onClose: () => {
                          eX();
                      },
                  };
        }, [Z, eX, eU, W, X, i?.preview_application_id]),
        eZ = eu ? { type: "permissions", authorizeProps: eW } : Z && null == K ? { type: "checking" } : void 0,
        e$ = (0, u.bG)([el.Ay], () => null != M && el.Ay.isProjectDeleting(M), [M]);
    s.useEffect(() => {
        ((null == i && o) || e$) && (0, H.bG)(tR.BVt.CHANNEL(r, th.VV.VIBEGRATIONS));
    }, [r, i, o, e$]);
    let e0 = s.useMemo(() => ({ guildId: r, platform: t3, busy: Z || W }), [r, Z, W]),
        e6 = (0, eh.Ay)(M, e0),
        e1 = e6?.intent === "open" && "channel" === e6.destination ? e6.appChannelId : null,
        e9 = (0, u.bG)([q.A], () => (null == e1 ? null : q.A.getChannel(e1)), [e1]),
        e8 = (0, G.Ay)(e9),
        e7 = (0, z.gU)(e9),
        e3 =
            null != e8 && null != e7
                ? J.intl.format(Q.default.W95rrI, {
                      channel: e8,
                      channelIconHook: (e, t) =>
                          (0, n.jsx)(e7, { size: "xs", color: "currentColor", className: t1.Y2 }, t),
                  })
                : e6?.label,
        e5 = e6?.upToDate === !0 ? J.intl.string(Q.default["5U1fkv"]) : (e6?.disabledReason ?? null),
        e4 =
            null == e6
                ? null
                : (0, n.jsx)("div", {
                      className: t1.As,
                      children: (0, n.jsx)(v.m, {
                          text: e5,
                          asContainer: !0,
                          children: (0, n.jsx)(C.$, {
                              size: "sm",
                              variant: e6.upToDate ? "secondary" : "primary",
                              loading: e6.publishing,
                              disabled: e6.disabled,
                              onClick: () => e6.run("header"),
                              text: e3,
                          }),
                      }),
                  }),
        tt = (0, n.jsx)(tS, {
            title: i?.name ?? J.intl.string(Q.default.F2dRba),
            breadcrumb: { title: J.intl.string(Q.default.Xmvb23), onClick: l },
            actions:
                null == i
                    ? null
                    : (0, n.jsxs)("div", {
                          className: t1.FO,
                          children: [
                              en.showModeSwitch ? (0, n.jsx)(te, { modes: en.modes, mode: ei, onChange: eo }) : null,
                              (0, n.jsx)(V.A.Icon, {
                                  icon: eR ? t7 : t8,
                                  tooltip: eM,
                                  "aria-label": eM,
                                  selected: eR,
                                  onClick: e_,
                              }),
                              (0, n.jsx)(V.A.Icon, {
                                  ref: ej,
                                  icon: tP.A,
                                  tooltip: eI,
                                  "aria-label": eI,
                                  selected: ex,
                                  disabled: eC,
                                  onClick: eN,
                              }),
                              "frame" === ei ? (0, n.jsx)(eD.A, { frame: eO, controlProjectId: i.id }) : null,
                              (0, n.jsx)("div", { className: t1.YJ }),
                              S
                                  ? (0, n.jsx)(V.A.Icon, {
                                        icon: A.BugIcon,
                                        tooltip: J.intl.string(Q.default["8MLfBT"]),
                                        "aria-label": J.intl.string(Q.default["8MLfBT"]),
                                        selected: x,
                                        onClick: eS,
                                    })
                                  : null,
                              (0, n.jsx)(V.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: J.intl.string(Q.default.cWmjzs),
                                  "aria-label": J.intl.string(Q.default.cWmjzs),
                                  onClick: () => (0, tp.A)(i.id, { guildId: r, isPreview: !0 }),
                              }),
                              (0, n.jsx)(tb, {
                                  projectId: i.id,
                                  projectName: i.name,
                                  guildId: r,
                                  projectGuildId: i.guild_id,
                                  isOwner: (0, el.PV)(i),
                                  canRemix: (0, el.H_)(i),
                                  onRefresh: (0, t6.x1)(eO) ? ez : void 0,
                                  isRefreshing: eG,
                                  onClose: eB,
                                  onExport: eF,
                                  onImport: eL.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = i.id),
                                          void (0, eA.openModalLazy)(async () => {
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
                                                (c(!0), j(!1), k(!1), h(!0));
                                            },
                                  onRestorePoints: () => {
                                      (c(!0), j(!1), h(!1), k(!0));
                                  },
                                  refreshApplicationId:
                                      en.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== en.profileState
                                          ? ed
                                          : null,
                                  previewProjectId: i.id,
                              }),
                              em
                                  ? null
                                  : (0, n.jsx)(V.A.Icon, { icon: t9, tooltip: ec, "aria-label": ec, onClick: ep }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: t1.nj,
        children: [
            eL.input,
            (0, n.jsx)("main", {
                className: t1.JX,
                children:
                    null == i
                        ? (0, n.jsxs)("div", {
                              className: t1.j5,
                              children: [
                                  tt,
                                  (0, n.jsxs)("div", {
                                      className: t1.sD,
                                      children: [
                                          (0, n.jsx)(N.D, {
                                              variant: "heading-lg/semibold",
                                              children: J.intl.string(Q.default.F2dRba),
                                          }),
                                          (0, n.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: J.intl.string(Q.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: J.intl.string(Q.default["42EdIV"]),
                                              onClick: () => (0, et.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(eh.Qc.Provider, {
                              value: e0,
                              children: (0, n.jsx)(
                                  eP.A,
                                  {
                                      projectId: i.id,
                                      designFeedbackToggleRef: ej,
                                      applicationId: i.preview_application_id,
                                      previewApplicationId: i.preview_application_id,
                                      surface: t6.sd,
                                      header: tt,
                                      chatOpen: d,
                                      onCloseChat: ek,
                                      chatHeaderAction: e4,
                                      versionHistoryOpen: p,
                                      onCloseVersionHistory: () => h(!1),
                                      restorePointsOpen: w,
                                      onCloseRestorePoints: () => k(!1),
                                      installScope: i.install_scope,
                                      debugOpen: S && x,
                                      onCloseDebug: eE,
                                      onRestoreVersion: eT,
                                      restoreState: P,
                                      previewReady: ee,
                                      previewGate: eZ,
                                      availability: en,
                                      activeMode: ei,
                                      widgetApplicationId: ed,
                                      onOpenPublishedApp: eq,
                                  },
                                  i.id,
                              ),
                          }),
            }),
        ],
    });
}
function ae(e) {
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
            onModelSettingsChange: x,
            onSelectProject: A,
            onIdeaChange: I,
            onCreate: N,
            onCreateFromTemplate: D,
            onStartTemplate: G,
            onSubmitTemplate: z,
            onCancelTemplate: B,
            onSkipTemplate: F,
            onImportNewProject: L,
            importing: H,
        } = e,
        [U, Y] = s.useState(() => ({ guildId: l, filter: tW(l) })),
        q = (U.guildId === l ? U.filter : tW(l)) ?? l,
        K = s.useCallback(
            (e) => {
                (tX.set(l, e), Y({ guildId: l, filter: e }));
            },
            [l],
        ),
        W = (0, u.yK)(
            [X.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = X.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, l),
            [t, l],
        ),
        Z = s.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: J.intl.string(Q.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tq,
                    leading: e6.UserIcon,
                    label: J.intl.string(Q.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tK,
                    leading: e1.R,
                    label: J.intl.string(Q.default["qqH+iN"]),
                },
                ...W.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, n.jsx)(tU.Ay, { guild: e, size: tU.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
        ),
        $ = (0, u.yK)(
            [el.Ay, X.A],
            () => {
                let e = tZ(q);
                if (null != e) return el.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(X.A.getGuilds()))
                    el.Ay.hasFetchedGuildProjects(e.id) && t.push(...el.Ay.getSharedProjects(e.id));
                return t;
            },
            [q],
        );
    s.useEffect(() => {
        let e = tZ(q);
        null == e || el.Ay.hasFetchedGuildProjects(e) || (0, et.hF)(e);
    }, [q]);
    let ea = s.useMemo(
            () =>
                $.filter((e) => t$(e, q)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [$, q],
        ),
        en = s.useMemo(
            () => [
                {
                    label: J.intl.string(Q.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tY,
                            label: J.intl.string(Q.default.UXnPhI),
                            leading: e6.UserIcon,
                        },
                        ...k.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, n.jsx)(tU.Ay, { guild: e, size: tU.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [k],
        ),
        es = s.useMemo(
            () =>
                t
                    .filter((e) => t$(e, q))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, q],
        ),
        eo = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eg.X0)(e, l)
                    ? A(e.id)
                    : (0, f.P)((0, g.o)(J.intl.string(Q.default["wY7I+H"]), y.Ck.MESSAGE));
            },
            [l, A],
        ),
        er = J.intl.string(Q.default.TU9IGR),
        ed = [
            J.intl.string(Q.default["E+Q26x"]),
            J.intl.string(Q.default["06/jqP"]),
            J.intl.string(Q.default["3gSfUa"]),
        ],
        eu = [
            {
                id: "moderation-bot",
                name: J.intl.string(Q.default.idRAwG),
                description: J.intl.string(Q.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: J.intl.string(Q.default.BLDsiz),
                description: J.intl.string(Q.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: J.intl.string(Q.default["+abXa8"]),
                description: J.intl.string(Q.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: J.intl.string(Q.default.ieAgex),
                description: J.intl.string(Q.default["5yvj+f"]),
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
                    (0, eA.openModalLazy)(
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
        ec = J.intl.string(Q.default.FYK2xQ),
        ep =
            (s.useEffect(() => {
                (0, et.b8)();
            }, []),
            (0, u.bG)([el.Ay], () => {
                let e = el.Ay.getMaxProjects();
                return null != e && el.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - el.Ay.getOwnedProjects().length)
                    : null;
            })),
        eh = J.intl.string(Q.default["/SUK82"]),
        ef = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || N());
            },
            [m, N],
        ),
        ey = tZ(q) ?? l,
        eb = (0, u.bG)([el.Ay], () => el.Ay.getGuildProjectsFetchState(ey), [ey]),
        ew = (0, u.bG)([el.Ay], () => el.Ay.getGuildProjectsFetchState(l), [l]),
        [ek, ev] = s.useState(t0),
        ex = s.useMemo(() => tQ.w.get(t2(l)) ?? !1, [l]),
        ej = "success" === ew,
        eC = (0, u.yK)([el.Ay], () => el.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => t$(e, l)),
        eI = ek ?? (!!eC || "error" === ew || (!ej && ex));
    s.useEffect(() => {
        ej && tQ.w.set(t2(l), eC);
    }, [ej, eC, l]);
    let eN = s.useCallback((e) => {
            (tQ.w.set(tJ, e), ev(e));
        }, []),
        eP = s.useCallback(() => eN(!eI), [eN, eI]),
        eT = s.useCallback(() => eN(!1), [eN]),
        eR = J.intl.string(Q.default.jDPFDh),
        eD = eI ? eR : J.intl.string(Q.default.a6d2y1);
    return (0, n.jsx)("div", {
        className: o()(t1.nj, t1.a0),
        children: (0, n.jsxs)("div", {
            className: t1.Yo,
            children: [
                (0, n.jsxs)("main", {
                    className: t1.ps,
                    children: [
                        (0, n.jsx)(tS, {
                            title: J.intl.string(Q.default.Xmvb23),
                            actions: (0, n.jsx)(V.A.Icon, {
                                icon: S.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eI,
                                onClick: eP,
                            }),
                        }),
                        (0, n.jsx)(P.Ip, {
                            className: t1.Yy,
                            children: (0, n.jsx)("div", {
                                className: t1.Mo,
                                children: (0, n.jsxs)("section", {
                                    className: o()(t1.Qs, t1.Ix),
                                    children: [
                                        (0, n.jsx)(tO, {}),
                                        (0, n.jsx)(eq, {}),
                                        (0, n.jsxs)("section", {
                                            className: t1.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t1.G9,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: J.intl.string(Q.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eO, {
                                                    listClassName: t1.Aw,
                                                    radius: eM,
                                                    children: eu.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t1.EA,
                                                                children: (0, n.jsxs)(eE, {
                                                                    disabled: r,
                                                                    ariaLabel: J.intl.formatToPlainString(
                                                                        Q.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(t1.nx, t1.rz),
                                                                    onClick: () => em(e),
                                                                    children: [
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t1.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, n.jsx)(b.E, {
                                                                            className: t1.BK,
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
                                            className: t1.WI,
                                            "aria-label": eh,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: t1.G9,
                                                    children: [
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eh,
                                                        }),
                                                        (0, n.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: J.intl.string(Q.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(eO, {
                                                    listClassName: t1.Aw,
                                                    radius: e_,
                                                    children: ed.map((e) =>
                                                        (0, n.jsx)(
                                                            "li",
                                                            {
                                                                className: t1.EA,
                                                                children: (0, n.jsx)(eE, {
                                                                    disabled: r,
                                                                    className: t1.nx,
                                                                    onClick: () => N(e),
                                                                    children: (0, n.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t1.un,
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
                                        (0, n.jsx)(eS, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: t1.Yl,
                            children: (0, n.jsxs)("div", {
                                className: o()(t1.Qs, t1.DA),
                                children: [
                                    (0, n.jsx)(E.f, {
                                        label: er,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: i,
                                        placeholder: er,
                                        error: d,
                                        onChange: I,
                                        onKeyDown: ef,
                                    }),
                                    null != h
                                        ? (0, n.jsx)(T.S, {
                                              checked: h,
                                              disabled: r,
                                              onChange: () => w(!h),
                                              label: J.intl.string(Q.default.nyY2CS),
                                              description: J.intl.string(Q.default.EwshDz),
                                          })
                                        : null,
                                    (0, n.jsxs)("div", {
                                        className: t1.VP,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: t1.gH,
                                                children: (0, n.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: J.intl.string(Q.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: J.intl.string(Q.default.MLg0S8),
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
                                                              ? J.intl.string(Q.default.JQU61N)
                                                              : J.intl.formatToPlainString(Q.default["336dtK"], {
                                                                    count: ep,
                                                                }),
                                                  })
                                                : null,
                                            (0, n.jsx)(e7.A, {
                                                settings: v ?? ee.v0,
                                                tiers: ee.qf,
                                                choices: (0, ei.e)()
                                                    ? {
                                                          main: [...ee.S8.main, ...ee.wF.main],
                                                          subagent: [...ee.S8.subagent, ...ee.wF.subagent],
                                                          thinking: ee.S8.thinking,
                                                      }
                                                    : ee.S8,
                                                disabled: r,
                                                onChange: x,
                                            }),
                                            (0, n.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: J.intl.string(J.t.CumH4u),
                                                disabled: m,
                                                loading: r,
                                                onClick: () => N(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("aside", {
                    className: t1.pA,
                    hidden: !eI,
                    "aria-label": J.intl.string(Q.default.Bo5fE3),
                    children: [
                        (0, n.jsxs)("div", {
                            className: t1.IR,
                            children: [
                                (0, n.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t1.RM,
                                    children: J.intl.string(Q.default.Bo5fE3),
                                }),
                                (0, n.jsxs)("div", {
                                    className: t1.Ss,
                                    children: [
                                        (0, n.jsx)(e8, { importing: H, onImport: L }),
                                        (0, n.jsx)(V.A.Icon, { icon: M.P, tooltip: eR, "aria-label": eR, onClick: eT }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)(P.Ip, {
                            className: t1.xe,
                            children: [
                                (0, n.jsx)("div", {
                                    className: t1.Vw,
                                    children: (0, n.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: J.intl.string(Q.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Z,
                                        value: q,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t1.wE,
                                    children: J.intl.string(Q.default.YnAFtT),
                                }),
                                ("unattempted" === eb || "loading" === eb) && 0 === es.length
                                    ? (0, n.jsx)("div", { className: t1.E8, children: (0, n.jsx)(j.y, {}) })
                                    : "error" === eb && 0 === es.length
                                      ? (0, n.jsxs)("div", {
                                            className: t1.E8,
                                            children: [
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t1.JS,
                                                    children: J.intl.string(Q.default["IN/HRP"]),
                                                }),
                                                (0, n.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: J.intl.string(Q.default["42EdIV"]),
                                                    onClick: () => (0, et.hF)(ey),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, n.jsx)("div", {
                                              className: t1.D1,
                                              children: (0, n.jsxs)("div", {
                                                  className: t1.ST,
                                                  children: [
                                                      (0, n.jsx)(_.D, { size: "lg", color: O.A.colors.TEXT_SUBTLE }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t1.sI,
                                                          children: J.intl.string(Q.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, n.jsx)("div", {
                                              className: t1.Dq,
                                              children: es.map((e) =>
                                                  (0, n.jsx)(
                                                      t5,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tH.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                ea.length > 0
                                    ? (0, n.jsxs)("div", {
                                          className: t1.qx,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: t1.uc,
                                                  children: [
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: J.intl.string(Q.default.jrCnUc),
                                                      }),
                                                      (0, n.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: J.intl.string(Q.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, n.jsx)("div", {
                                                  className: t1.Dq,
                                                  children: ea.map((e) =>
                                                      (0, n.jsx)(
                                                          t5,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tH.A)(e, l),
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
function at(e) {
    let t,
        { guildId: a, projectId: i } = e,
        o = (0, u.yK)([el.Ay], () => el.Ay.getOwnedProjects()),
        l = (0, u.yK)([K.Ay], () => K.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [X.A, W.A],
            () => {
                let e = X.A.getGuild(a);
                return null != e && W.A.can(tR.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, m] = s.useState(""),
        c = i ?? null,
        [p, h] = s.useState(!1),
        [b, w] = s.useState(null),
        k = (0, ep._)("VibegrationsScreen"),
        [v, x] = s.useState(null);
    s.useEffect(() => {
        x(null);
    }, [a]);
    let j = s.useMemo(() => (k.some((e) => e.id === a) ? a : tY), [k, a]),
        C = v ?? j,
        A = C === tY ? "user" : "guild",
        I = C === tY ? a : C,
        [N, S] = s.useState(!0),
        [P, E] = s.useState(null);
    (s.useEffect(() => {
        (0, et.hF)(a);
    }, [a, l, r]),
        s.useEffect(() => {
            (0, et.dm)(a, c);
        }, [a, c]));
    let T = s.useCallback(
            async (e, t, a) => {
                let n = await (0, et.gA)({ guild_id: t, install_scope: a, flags: (0, ee.RS)("guild" === a && N) });
                ((0, $.Hc)(n),
                    (0, $.r2)(n, P ?? ee.v0),
                    e(n),
                    (0, H.pX)(tR.BVt.CHANNEL(t, th.VV.VIBEGRATIONS, n)),
                    m(""),
                    E(null));
            },
            [N, P],
        ),
        R = s.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = ex({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), h(!0), w(null));
                    try {
                        await T((e) => (0, $.dv)(e, t), I, A);
                    } catch (e) {
                        w((0, en.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, A, I, d, p],
        ),
        M = s.useCallback(
            async (e) => {
                if (!p) {
                    (h(!0), w(null));
                    try {
                        await T(
                            (t) => {
                                var a;
                                (0, $.dv)(
                                    t,
                                    ((a = e.name),
                                    J.intl.formatToPlainString(Q.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            I,
                            A,
                        );
                    } catch (e) {
                        w((0, en.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, A, I, p],
        ),
        _ = s.useCallback(
            async (e, t) => {
                let a = await (0, et.gA)({ guild_id: t, install_scope: "guild", flags: (0, ee.RS)(N) });
                return ((0, $.Hc)(a), (0, $.r2)(a, P ?? ee.v0), (0, $.dv)(a, (0, eo.v8)(e)), a);
            },
            [N, P],
        ),
        O = s.useCallback(async (e, t, a, n) => {
            if (el.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, et.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new en.uQ((0, en.hj)(e), e.status);
            }
            ((0, $.dv)(t, n, void 0, { templateId: e.id }),
                (0, H.pX)(tR.BVt.CHANNEL(a, th.VV.VIBEGRATIONS, t)),
                E(null));
        }, []),
        D = s.useCallback((e) => {
            (0, et.xx)(e).catch(() => void 0);
        }, []),
        G = s.useCallback(
            (e) => {
                let t = el.Ay.getProject(e)?.guild_id ?? a;
                ((0, H.pX)(tR.BVt.CHANNEL(t, th.VV.VIBEGRATIONS, e)), E(null));
            },
            [a],
        ),
        [z, B] = s.useState(!1),
        F = s.useCallback(
            async (e, t) => {
                let n = eJ(e);
                if (null != n) return void (0, f.P)((0, g.o)(n, y.Ck.FAILURE));
                B(!0);
                let s = null;
                try {
                    ((s = await (0, et.gA)({ guild_id: a, install_scope: t, flags: (0, ee.RS)("guild" === t && N) })),
                        (0, $.Hc)(s),
                        (0, $.r2)(s, P ?? ee.v0),
                        await eQ(s, e, J.intl.string(Q.default.KjEtrZ)),
                        (0, H.pX)(tR.BVt.CHANNEL(a, th.VV.VIBEGRATIONS, s)),
                        E(null));
                } catch {
                    (null != s && (await (0, et.xx)(s).catch(() => void 0)),
                        (0, f.P)((0, g.o)(J.intl.string(Q.default["02GpNr"]), y.Ck.FAILURE)));
                } finally {
                    B(!1);
                }
            },
            [a, N, P],
        ),
        L = s.useCallback(
            (e) => {
                (0, H.pX)(tR.BVt.CHANNEL(a, th.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        V = s.useCallback(() => {
            (0, H.pX)(tR.BVt.CHANNEL(a, th.VV.VIBEGRATIONS));
        }, [a]),
        U = s.useCallback((e) => {
            (m(e), w(null));
        }, []),
        Y = (0, u.bG)(
            [el.Ay],
            () => {
                if (null == c) return null;
                let e = el.Ay.getProject(c);
                return null == e || (0, el.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        q = (0, u.bG)([el.Ay], () => el.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, n.jsx)(t4, { project: Y, projectsLoaded: q, onBack: V, guildId: a }, c)
        : (0, n.jsx)(ae, {
              projects: o,
              modelSettings: P,
              onModelSettingsChange: E,
              idea: d,
              guildId: a,
              submitting: p,
              createError: b,
              createDisabled: "idea" === (t = ex({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: L,
              onIdeaChange: U,
              onCreate: R,
              onCreateFromTemplate: M,
              onStartTemplate: _,
              onSubmitTemplate: O,
              onCancelTemplate: D,
              onSkipTemplate: G,
              onImportNewProject: F,
              importing: z,
              conjureTarget: C,
              onConjureTargetChange: x,
              nativeAppChannels: "guild" === A ? N : null,
              onNativeAppChannelsChange: S,
              eligibleGuilds: k,
          });
}
