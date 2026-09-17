(n.r(t), n.d(t, { default: () => td }));
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
    g = n(834730),
    y = n(691540),
    b = n(857250),
    x = n(97483),
    j = n(821609),
    w = n(92446),
    v = n(625903),
    k = n(297264),
    C = n(364522),
    A = n(103557),
    I = n(691885),
    N = n(289873),
    E = n(152367),
    S = n(661531),
    P = n(627363),
    R = n(625180),
    _ = n(672929),
    T = n(742589),
    D = n(976860),
    M = n(885386),
    L = n(696451),
    V = n(71393),
    z = n(576705),
    O = n(486020),
    G = n(50617),
    B = n(375708),
    F = n(948230),
    Y = n(936494),
    H = n(976713),
    X = n(673724),
    U = n(208137),
    q = n(964992),
    K = n(683180),
    W = n(805332),
    Z = n(277977),
    $ = n(972786);
function Q(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var J = n(58703),
    ee = n(127181),
    et = n(192308);
function en() {
    (0, et.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ea = n(413927);
function el() {
    let e = (0, ee.TH)("desktop");
    if (0 === e.length) return null;
    let t = B.intl.string(G.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: ea.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: ea.bZ,
                children: [
                    (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: B.intl.string(G.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: ea.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: ea.S3,
                            children: [
                                (0, l.jsxs)(g.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ea.VO,
                                    children: [
                                        (0, J.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ee.MZ)(e) ? ` \xb7 ${B.intl.string(G.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, l.jsx)(g.E, {
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
            (0, ee.B)("desktop")
                ? (0, l.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      text: B.intl.string(G.default.YWxThz),
                      onClick: en,
                  })
                : null,
        ],
    });
}
var ei = n(803510),
    es = n(210744),
    eo = n(922016),
    er = n(980707),
    ed = n(477782),
    eu = n(81369),
    ec = n(402879);
async function ep(e, t, n) {
    (0, Z.Hc)(e);
    let a = await (0, Z.vX)(e, t);
    (0, Z.dv)(e, n, [a]);
}
function em(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, X.x5)(e.size, t)
        ? null
        : B.intl.formatToPlainString(G.default.AzziHF, { size: (0, X.ZJ)((0, X.yr)(t)) });
}
async function eh(e, t) {
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
        l = await (0, Z.cS)(e, a);
    await (0, ec.F)(l, a);
}
function ef(e) {
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
var eg = n(950305),
    ey = n(664121);
let eb = [
    { value: "user", icon: eg.UserIcon, nameMessage: G.default.iqXIRN },
    { value: "guild", icon: ey.R, nameMessage: G.default.LdgKdI },
];
function ex(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = ef(i.useCallback((e) => n(e, "user"), [n])),
        o = ef(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eo.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: eo.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(er.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": B.intl.string(G.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(ed.rX, {
                            label: B.intl.string(G.default.MLg0S8),
                            children: eb
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: B.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        ed.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(j.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: eu.H,
                        text: B.intl.string(G.default["NHP2+t"]),
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
var ej = n(113491),
    ew = n(629584),
    ev = n(148853),
    ek = n(491920);
function eC(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, ev.kZ)(e), "aria-controls": (0, ev.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(ew.I, {
              role: "tablist",
              look: "pill",
              className: o()(ek.b, s),
              optionClassName: ek.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eA = n(663417),
    eI = n(70688),
    eN = n(173936),
    eE = n(473935),
    eS = n(365199),
    eP = n(770818),
    eR = n(147036),
    e_ = n(957565),
    eT = n(557875),
    eD = n(869369),
    eM = n(123917);
let eL = new Set();
n(321073);
var eV = n(746080),
    ez = n(793712);
let eO = [];
function eG(e) {
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
            onRefresh: j,
            isRefreshing: w = !1,
            onClose: k,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        I = i.useRef(null),
        { pending: N, refresh: E } = (0, eP.A)(C ?? null),
        { pending: S, connect: P } = (function (e) {
            let [t, n] = i.useState(eL),
                a = i.useRef(eL),
                l = i.useCallback((e) => {
                    ((a.current = (0, eT.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: t,
                connect: i.useCallback(
                    (t) => {
                        if (null == e) return;
                        let i = (0, eT.K9)(a.current, t.type);
                        async function s() {
                            let n = await (0, Z.JI)(e, t.type);
                            if ((l(t.type), "url" === n.type)) return void (0, eM.h)({ href: n.url, trusted: !1 });
                            let a =
                                "setup" === (0, eT.rq)(n.error)
                                    ? B.intl.string(G.default.avu1u4)
                                    : B.intl.string(G.default["5fwOcF"]);
                            (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => l(t.type)));
                    },
                    [e, l],
                ),
            };
        })(A ?? null),
        R = (0, u.bG)([Z.Ay], () => (null == A ? eO : Z.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: B.intl.string(G.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: B.intl.formatToPlainString(G.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: B.intl.formatToPlainString(G.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: N,
            offers: i.useMemo(() => (0, eT.Xl)(R), [R]),
            connectPending: S,
        }),
        D = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        M = null != m && r,
        L = o && null != p,
        V = M || null != d || L || null != h || null != f || null != g,
        z = e_.p5 && null != a,
        O = e_.p5;
    return null != j || null != k || V || O || o
        ? (0, l.jsx)(eo.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: eo.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(er.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": B.intl.string(B.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != j || null != k
                              ? (0, l.jsxs)(ed.rX, {
                                    children: [
                                        null != j
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "refresh",
                                                  icon: eA.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eA.RefreshIcon },
                                                  label: B.intl.string(G.default.xKexN1),
                                                  disabled: w,
                                                  action: j,
                                              })
                                            : null,
                                        null != k
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "close",
                                                  icon: eI.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eI.DoorExitIcon },
                                                  label: B.intl.string(G.default.Ea0Wrr),
                                                  action: k,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, l.jsx)(ed.rX, {
                                    children: _.map((e) =>
                                        (0, l.jsx)(
                                            ed.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : D.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          V
                              ? (0, l.jsxs)(ed.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "remix",
                                                  label: B.intl.string(G.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "export",
                                                  label: B.intl.string(G.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        L
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "import",
                                                  label: B.intl.string(G.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "connect-tool",
                                                  label: B.intl.string(G.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "version-history",
                                                  label: B.intl.string(G.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "restore-points",
                                                  label: B.intl.string(G.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          O
                              ? (0, l.jsxs)(ed.rX, {
                                    children: [
                                        z
                                            ? (0, l.jsx)(ed.Dr, {
                                                  id: "copy-link",
                                                  label: B.intl.string(B.t.WqhZss),
                                                  icon: eN.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eN.LinkIcon },
                                                  action: () =>
                                                      (0, e_.C)((0, eR.n)(a, eV.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(B.intl.string(B.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(ed.Dr, {
                                            id: "copy-project-id",
                                            label: B.intl.string(G.default.b4TqpT),
                                            icon: eE.L,
                                            leadingAccessory: { type: "icon", icon: eE.L },
                                            action: () =>
                                                (0, e_.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(B.intl.string(G.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(ed.rX, {
                                    children: [
                                        (0, l.jsx)(ed.Dr, {
                                            id: "settings",
                                            label: B.intl.string(G.default["xhcY+n"]),
                                            icon: v.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                            action: () => (0, eD.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(ed.Dr, {
                                            id: "delete",
                                            label: B.intl.string(B.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: B.intl.formatToPlainString(G.default.ZokHVz, { name: n }),
                                                    subtitle: B.intl.string(G.default.NmF939),
                                                    confirmText: B.intl.string(B.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, F.xx)(t)).ok)
                                                            throw Error(B.intl.string(G.default.tqKZCi));
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
                      ref: I,
                      className: ez.h,
                      children: (0, l.jsx)(T.A.Icon, {
                          icon: eS.MoreHorizontalIcon,
                          tooltip: B.intl.string(B.t["UKOtz+"]),
                          "aria-label": B.intl.string(B.t["UKOtz+"]),
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
var eB = n(769979);
function eF(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(T.A, {
        hideSearch: !0,
        toolbar: n,
        className: eB.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: eB.QF,
            children: [
                (0, l.jsx)(E.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: eB.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(T.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(T.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(T.A.Title, { className: eB.Qw, wrapperClassName: eB.DD, children: t }),
            ],
        }),
    });
}
var eY = n(73432),
    eH = n(683071),
    eX = n(47167),
    eU = n(808728),
    eq = n(994500),
    eK = n(287809),
    eW = n(652215);
let eZ = "conjuring-help";
var e$ = n(107148);
function eQ() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([eK.default, V.A, eU.Ay, eq.A], () => {
                let e = eK.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of V.A.getGuildsArray()) {
                    if (!t.features.has(eW.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eU.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, eX.m1)(t, eK.default, eq.A) === eZ;
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
                    ? (0, D.pX)(eW.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eM.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: e$.l,
              children: (0, l.jsx)(eH.w, {
                  type: "info",
                  iconAlign: "center",
                  children: B.intl.format(G.default["4BsHmp"], { channel: eZ, onNavigate: t }),
              }),
          });
}
var eJ = n(321593),
    e0 = n(580954),
    e2 = n(189213),
    e1 = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function e6(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = "permissions" === t;
    return (0, l.jsx)(e2.Modal, {
        transitionState: n,
        onClose: a,
        title: B.intl.string(i ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: B.intl.string(i ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: B.intl.string(i ? B.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function e9(e) {
    (0, et.openModal)((t) => (0, l.jsx)(e6, { ...t, reason: e }));
}
var e8 = n(480007),
    e7 = n(584936),
    e3 = n(899154),
    e5 = n(783134),
    e4 = n(985451),
    te = n(675210),
    tt = n(165610),
    tn = n(352978);
function ta(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tl(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function ti(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function ts(e) {
    let t,
        n,
        a,
        s,
        o,
        { project: r, guildId: u, onSelect: p, onRemix: m } = e,
        h =
            ((t = r.id),
            (n = r.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, b.o)(B.intl.formatToPlainString(G.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    eh(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof Z._v ? e.status : null)
                                            ? B.intl.string(G.default.uB40Hz)
                                            : 404 === n
                                              ? B.intl.string(G.default.wCq2jC)
                                              : B.intl.string(G.default.G2GqyP),
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
                onImport: (o = ef(
                    i.useCallback(
                        (e) => {
                            let a = em(e);
                            null != a
                                ? (0, y.P0)((0, b.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: B.intl.formatToPlainString(G.default.XYZqZK, { name: n }),
                                      subtitle: B.intl.string(G.default["6syXoH"]),
                                      confirmText: B.intl.string(G.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(eW.BVt.CHANNEL(u, eV.VV.VIBEGRATIONS, t));
                                          try {
                                              await ep(t, e, B.intl.string(G.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, b.o)(B.intl.string(G.default["02GpNr"]), x.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, u],
                    ),
                )).open,
                importInput: o.input,
            }),
        j = r.preview_application_id ?? r.application_id,
        { data: w } = (0, P.YY)(j),
        v =
            null == r.updated_at
                ? null
                : B.intl.formatToPlainString(G.default.oMDaqr, { time: d()(r.updated_at).fromNow() });
    return (0, l.jsxs)("div", {
        className: tn.OY,
        children: [
            (0, l.jsx)(eJ.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tn.W6,
                onClick: p,
                children: [
                    (0, l.jsx)("img", {
                        alt: "",
                        src: O.Ay.getApplicationIconURL({ id: j, icon: w?.icon, size: 40 }),
                        className: tn.VJ,
                    }),
                    (0, l.jsxs)("div", {
                        className: tn.MM,
                        children: [
                            (0, l.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tn.j1,
                                children: r.name,
                            }),
                            null == v
                                ? null
                                : (0, l.jsx)("div", {
                                      className: tn.h3,
                                      children: (0, l.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tn.M2,
                children: (0, l.jsxs)("div", {
                    className: tn.Pl,
                    children: [
                        (0, l.jsx)(eG, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: u,
                            projectGuildId: r.guild_id,
                            isOwner: (0, $.PV)(r),
                            canRemix: (0, $.H_)(r),
                            onRemix: m,
                            onExport: h.onExport,
                            onImport: h.onImport,
                        }),
                        h.importInput,
                    ],
                }),
            }),
        ],
    });
}
function to(e) {
    let { project: t, projectsLoaded: a, onBack: s, guildId: o } = e,
        [r, d] = i.useState(!1),
        [p, m] = i.useState(!0),
        [h, f] = i.useState(!1),
        [C, A] = i.useState(!1),
        [I, N] = i.useState(!1),
        E = M.Q_.useSetting(),
        [S, L] = i.useState(null),
        [V, z] = i.useState(null),
        O = t?.id ?? null,
        Y = i.useRef(O),
        H = i.useRef(!0),
        X = i.useRef(!1),
        U = i.useRef(null);
    ((Y.current = O),
        i.useEffect(
            () => (
                (H.current = !0),
                () => {
                    H.current = !1;
                }
            ),
            [],
        ));
    let K = (0, u.bG)([$.Ay], () => (null == O ? null : $.Ay.getIntegrationStatus(O)), [O]),
        { data: Q, isLoading: J } = (0, P.YY)(t?.preview_application_id ?? void 0),
        ee = null != O && V !== O,
        en = K?.preview_ready === !0,
        ea = K?.has_activity === !0,
        {
            availability: el,
            activeMode: eo,
            setMode: er,
            widgetApplicationId: ed,
        } = (0, e3.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: ea,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: K?.owner_authorization_revoked === !0,
        }),
        eu = (0, te.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: en,
            integrationInstalled: K?.integration_installed ?? null,
            botPermissionsChanged: K?.bot_permissions_changed === !0,
        }),
        ec = r || ee || J,
        eh = B.intl.string(G.default["5gU57O"]),
        eg = p && !I && !h && !C,
        ey = B.intl.string(eg ? G.default.YdgE0j : G.default.aWVf4j),
        eb = i.useCallback(() => {
            if (I || h || C) {
                (N(!1), f(!1), A(!1), m(!0));
                return;
            }
            m((e) => !e);
        }, [I, h, C]),
        ex = i.useCallback(() => m(!1), []),
        { active: ej } = (0, e5.Q_)(O),
        ew = i.useRef(null),
        ev = (0, e4.o4)(O),
        ek = B.intl.string(ev ? G.default.bfQ4Ki : ej ? G.default.rfNEHn : G.default.lXcEa2),
        eA = i.useCallback(() => {
            if (null != O) {
                if (ej) return void (0, e5.PS)(O);
                (N(!1), f(!1), A(!1), m(!0), (0, e5.nI)(O));
            }
        }, [O, ej]),
        eI = i.useCallback(() => {
            N((e) => !e && (m(!0), f(!1), A(!1), !0));
        }, []),
        eN = i.useCallback(() => N(!1), []),
        eE = i.useCallback(
            (e) => {
                if (null == t || X.current) return;
                let n = t.id;
                function a() {
                    return H.current && Y.current === n;
                }
                ((X.current = !0),
                    f(!1),
                    m(!0),
                    L({ entry: e, status: "restoring" }),
                    (0, Z.oB)(n, e.sha)
                        .then(
                            () => {
                                a() && L({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (L({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, y.P0)((0, b.o)(B.intl.string(G.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (X.current = !1);
                        }));
            },
            [t],
        ),
        eS = (0, u.bG)([W.A], () => W.A.isBuilderPreviewMobile()),
        eP = B.intl.string(eS ? G.default["3uCc8U"] : G.default["+nzCxZ"]),
        eR = i.useCallback(() => (0, F.GG)(!eS), [eS]),
        e_ = (0, _.A)(t?.preview_application_id ?? null, tt.sd),
        eT = (0, tt.x1)(e_) && e_.data.proxyTicketRefreshing,
        eM = i.useCallback(() => {
            null == e_ || eT || R.A.refreshProxyTicket(e_.id);
        }, [e_, eT]),
        eL = i.useCallback(() => {
            var e, n;
            (null != t && ((e = t.id), (n = e_?.id), (0, Z.Bn)(e), (0, e0.A)().leaveFrame(n)), s());
        }, [t, e_?.id, s]),
        ez = i.useCallback(() => {
            null != t && (m(!0), (0, Z.dv)(t.id, B.intl.string(G.default["2ejwtJ"])));
        }, [t]),
        eO = ef(
            i.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        a = em(e);
                    null != a
                        ? (0, y.P0)((0, b.o)(a, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: B.intl.formatToPlainString(G.default.XYZqZK, { name: t.name }),
                              subtitle: B.intl.string(G.default["6syXoH"]),
                              confirmText: B.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ep(n, e, B.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(B.intl.string(G.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eB = i.useCallback(() => {
            null != t && (0, e7.A)(t, o);
        }, [t, o]),
        eH = i.useCallback(async () => {
            if (null == O || Y.current !== O) return;
            U.current?.abort();
            let e = new AbortController();
            ((U.current = e), z(null));
            try {
                await (0, F.U1)(O, e.signal);
            } catch {
            } finally {
                e.signal.aborted || U.current !== e || Y.current !== O || z(O);
            }
        }, [O]);
    i.useEffect(
        () => (
            eH(),
            () => {
                (U.current?.abort(), (U.current = null));
            }
        ),
        [eH],
    );
    let eX = K?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : o,
        eU = i.useCallback(async () => {
            null == t ||
                (t.guild_id === eX && t.preview_guild_id === eX) ||
                (await (0, F.M7)(t.id, { guild_id: eX, preview_guild_id: eX }));
        }, [eX, t]),
        eq = i.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eH();
        }, [eH, eU]),
        eK = i.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                q.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: Q ?? null,
                    guildId: eX,
                    onClose: () => {
                        eq();
                    },
                });
        }, [eq, eX, Q, t]),
        eZ = eu
            ? { type: "permissions", onReviewPermissions: eK, loading: J || ee }
            : ee && null == K
              ? { type: "checking" }
              : void 0;
    i.useEffect(() => {
        null == t && a && (0, D.pX)(eW.BVt.CHANNEL(o, eV.VV.VIBEGRATIONS));
    }, [o, t, a]);
    let e$ = i.useCallback((e) => {
            d(!0);
            let t = (0, Z.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(B.intl.string(G.default.fNP6Cd));
                (0, F.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, b.o)(e instanceof Error ? e.message : B.intl.string(G.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => d(!1)),
                t
            );
        }, []),
        eQ = i.useCallback(() => {
            if (null == t) return;
            if (!en) return void e9(e1.NO_PREVIEW);
            if (eu) return void e9(e1.PERMISSIONS);
            if ("user" === t.install_scope)
                return void e$(t.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(B.intl.string(G.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, Z.$C)(t.id);
            (e.catch(() => {}),
                (0, e8.A)({
                    projectId: t.id,
                    guildId: o,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: e$(t.id),
                    initialDraft: e,
                }));
        }, [o, eu, en, t, e$]),
        eJ =
            null != t && (0, $.jf)(t)
                ? (0, l.jsx)(j.$, { size: "sm", variant: "primary", loading: r, disabled: ec, onClick: eQ, text: eh })
                : null,
        e2 = (0, l.jsx)(eF, {
            title: t?.name ?? B.intl.string(G.default.F2dRba),
            breadcrumb: { title: B.intl.string(G.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tn.FO,
                          children: [
                              el.showModeSwitch ? (0, l.jsx)(eC, { modes: el.modes, mode: eo, onChange: er }) : null,
                              (0, l.jsx)(T.A.Icon, {
                                  icon: eS ? ti : tl,
                                  tooltip: eP,
                                  "aria-label": eP,
                                  selected: eS,
                                  onClick: eR,
                              }),
                              (0, l.jsx)(T.A.Icon, {
                                  ref: ew,
                                  icon: eY.A,
                                  tooltip: ek,
                                  "aria-label": ek,
                                  selected: ej,
                                  disabled: ev,
                                  onClick: eA,
                              }),
                              "frame" === eo ? (0, l.jsx)(es.A, { frame: e_, controlProjectId: t.id }) : null,
                              (0, l.jsx)("div", { className: tn.YJ }),
                              E
                                  ? (0, l.jsx)(T.A.Icon, {
                                        icon: w.BugIcon,
                                        tooltip: B.intl.string(G.default["8MLfBT"]),
                                        "aria-label": B.intl.string(G.default["8MLfBT"]),
                                        selected: I,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, $.PV)(t)
                                  ? (0, l.jsx)(T.A.Icon, {
                                        icon: v.SettingsIcon,
                                        tooltip: B.intl.string(G.default["xhcY+n"]),
                                        "aria-label": B.intl.string(G.default["xhcY+n"]),
                                        onClick: () => (0, eD.A)(t.id, t.guild_id ?? o),
                                    })
                                  : null,
                              (0, l.jsx)(eG, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: o,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, $.PV)(t),
                                  canRemix: (0, $.H_)(t),
                                  onRefresh: (0, tt.x1)(e_) ? eM : void 0,
                                  isRefreshing: eT,
                                  onClose: eL,
                                  onExport: ez,
                                  onImport: eO.open,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, et.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, l.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      S?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (m(!0), N(!1), A(!1), f(!0));
                                            },
                                  onRestorePoints: () => {
                                      (m(!0), N(!1), f(!1), A(!0));
                                  },
                                  refreshApplicationId:
                                      el.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== el.profileState
                                          ? ed
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              eg
                                  ? null
                                  : (0, l.jsx)(T.A.Icon, { icon: ta, tooltip: ey, "aria-label": ey, onClick: eb }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tn.nj,
        children: [
            eO.input,
            (0, l.jsx)("main", {
                className: tn.JX,
                children:
                    null == t
                        ? (0, l.jsxs)("div", {
                              className: tn.j5,
                              children: [
                                  e2,
                                  (0, l.jsxs)("div", {
                                      className: tn.sD,
                                      children: [
                                          (0, l.jsx)(k.D, {
                                              variant: "heading-lg/semibold",
                                              children: B.intl.string(G.default.F2dRba),
                                          }),
                                          (0, l.jsx)(g.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: B.intl.string(G.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(j.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: B.intl.string(G.default["42EdIV"]),
                                              onClick: () => (0, F.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              ei.A,
                              {
                                  projectId: t.id,
                                  designFeedbackToggleRef: ew,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: tt.sd,
                                  header: e2,
                                  chatOpen: p,
                                  onCloseChat: ex,
                                  chatHeaderAction: eJ,
                                  versionHistoryOpen: h,
                                  onCloseVersionHistory: () => f(!1),
                                  restorePointsOpen: C,
                                  onCloseRestorePoints: () => A(!1),
                                  installScope: t.install_scope,
                                  debugOpen: E && I,
                                  onCloseDebug: eN,
                                  onRestoreVersion: eE,
                                  restoreState: S,
                                  previewReady: en,
                                  previewGate: eZ,
                                  availability: el,
                                  activeMode: eo,
                                  widgetApplicationId: ed,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function tr(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: a,
            idea: s,
            guildId: r,
            submitting: d,
            createError: u,
            createDisabled: c,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: h,
            modelSettings: y,
            onModelSettingsChange: b,
            onSelectProject: x,
            onIdeaChange: w,
            onCreate: v,
            onImportNewProject: P,
            importing: R,
        } = e,
        _ = i.useMemo(
            () =>
                n
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [n],
        ),
        T = i.useRef(null);
    i.useEffect(() => {
        null != h && T.current?.querySelector("button")?.focus();
    }, [h]);
    let D = i.useMemo(
            () =>
                t
                    .filter((e) => (0, K.X0)(e, r))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, r],
        ),
        M = B.intl.string(G.default.TU9IGR),
        L = [
            B.intl.string(G.default["E+Q26x"]),
            B.intl.string(G.default["06/jqP"]),
            B.intl.string(G.default["3gSfUa"]),
        ],
        V = [
            {
                id: "feature-showcase",
                name: B.intl.string(G.default.BLDsiz),
                description: B.intl.string(G.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: B.intl.string(G.default["+abXa8"]),
                description: B.intl.string(G.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: B.intl.string(G.default.ieAgex),
                description: B.intl.string(G.default["5yvj+f"]),
            },
        ],
        z = B.intl.string(G.default.FYK2xQ),
        O = B.intl.string(G.default["/SUK82"]),
        Y = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || v());
            },
            [c, v],
        );
    return (0, l.jsxs)("div", {
        className: o()(tn.nj, tn.a0),
        children: [
            (0, l.jsx)(eF, { title: B.intl.string(G.default.Xmvb23) }),
            (0, l.jsxs)("div", {
                className: tn.Yo,
                children: [
                    (0, l.jsxs)("main", {
                        className: tn.ps,
                        children: [
                            (0, l.jsx)(C.Ip, {
                                className: tn.Yy,
                                children: (0, l.jsx)("div", {
                                    className: tn.Mo,
                                    children: (0, l.jsxs)("section", {
                                        className: o()(tn.Qs, tn.Ix),
                                        children: [
                                            (0, l.jsx)(eQ, {}),
                                            (0, l.jsx)(k.D, {
                                                variant: "heading-xl/semibold",
                                                children: B.intl.string(G.default["2tYpRK"]),
                                            }),
                                            (0, l.jsxs)("section", {
                                                className: tn.WI,
                                                "aria-label": z,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: tn.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: z,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: B.intl.string(G.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: tn.Aw,
                                                        children: V.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: tn.EA,
                                                                    children: (0, l.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": B.intl.formatToPlainString(
                                                                            G.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: o()(tn.nx, tn.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return v(
                                                                                      ((t = e.name),
                                                                                      B.intl.formatToPlainString(
                                                                                          G.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, l.jsx)(g.E, {
                                                                                className: tn.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, l.jsx)(g.E, {
                                                                                className: tn.BK,
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
                                                className: tn.WI,
                                                "aria-label": O,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: tn.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: O,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: B.intl.string(G.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: tn.Aw,
                                                        children: L.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: tn.EA,
                                                                    children: (0, l.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: tn.nx,
                                                                        onClick: d ? void 0 : () => v(e),
                                                                        children: (0, l.jsx)(g.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: tn.un,
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
                                            (0, l.jsx)(el, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: tn.Yl,
                                children: (0, l.jsxs)("div", {
                                    className: o()(tn.Qs, tn.DA),
                                    children: [
                                        (0, l.jsx)(A.f, {
                                            label: M,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: M,
                                            error: u,
                                            onChange: w,
                                            onKeyDown: Y,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: tn.VP,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: tn.gH,
                                                    ref: T,
                                                    children: (0, l.jsx)(I.l, {
                                                        selectionMode: "single",
                                                        label: B.intl.string(G.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: B.intl.string(G.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: B.intl.string(G.default.MLg0S8),
                                                                options: eb.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: B.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: h,
                                                    }),
                                                }),
                                                (0, l.jsx)(ej.A, {
                                                    settings: y ?? H.Cl,
                                                    choices: (0, U.e)()
                                                        ? {
                                                              main: [...X.S8.main, ...X.wF.main],
                                                              subagent: [...X.S8.subagent, ...X.wF.subagent],
                                                              thinking: X.S8.thinking,
                                                          }
                                                        : X.S8,
                                                    disabled: d,
                                                    onChange: b,
                                                }),
                                                (0, l.jsx)(j.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: B.intl.string(B.t.CumH4u),
                                                    disabled: c,
                                                    loading: d,
                                                    onClick: () => v(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("aside", {
                        className: tn.pA,
                        "aria-label": B.intl.string(G.default.Bo5fE3),
                        children: [
                            (0, l.jsxs)("div", {
                                className: tn.IR,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tn.RM,
                                        children: [
                                            (0, l.jsx)(g.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: B.intl.string(G.default.Bo5fE3),
                                            }),
                                            (0, l.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: B.intl.string(G.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(ex, { importing: R, onImport: P }),
                                ],
                            }),
                            (0, l.jsxs)(C.Ip, {
                                className: tn.xe,
                                children: [
                                    (null == a || "loading" === a.type) && 0 === D.length
                                        ? (0, l.jsx)("div", { className: tn.E8, children: (0, l.jsx)(N.y, {}) })
                                        : a?.type === "error" && 0 === D.length
                                          ? (0, l.jsxs)("div", {
                                                className: tn.E8,
                                                children: [
                                                    (0, l.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: tn.JS,
                                                        children: B.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, l.jsx)(j.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: B.intl.string(G.default["42EdIV"]),
                                                        onClick: () => (0, F.hF)(r),
                                                    }),
                                                ],
                                            })
                                          : 0 === D.length
                                            ? (0, l.jsx)("div", {
                                                  className: tn.D1,
                                                  children: (0, l.jsxs)("div", {
                                                      className: tn.ST,
                                                      children: [
                                                          (0, l.jsx)(E.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tn.sI,
                                                              children: B.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, l.jsx)("div", {
                                                  className: tn.Dq,
                                                  children: D.map((e) =>
                                                      (0, l.jsx)(
                                                          ts,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => x(e.id),
                                                              onRemix: () => (0, e7.A)(e, r),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, l.jsxs)("div", {
                                              className: tn.qx,
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: tn.uc,
                                                      children: [
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: B.intl.string(G.default.jrCnUc),
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: B.intl.string(G.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: tn.Dq,
                                                      children: _.map((e) =>
                                                          (0, l.jsx)(
                                                              ts,
                                                              {
                                                                  project: e,
                                                                  guildId: r,
                                                                  onSelect: () => x(e.id),
                                                                  onRemix: () => (0, e7.A)(e, r),
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
        ],
    });
}
function td(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([$.Ay], () => $.Ay.getOwnedProjects()),
        o = (0, u.bG)([$.Ay], () => $.Ay.getProjectsFetchState()),
        r = (0, u.yK)([$.Ay], () => $.Ay.getSharedProjects(n), [n]),
        d = (0, u.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        c = (0, u.bG)(
            [V.A, z.A],
            () => {
                let e = V.A.getGuild(n);
                return null != e && z.A.can(eW.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [p, m] = i.useState(""),
        h = a ?? null,
        [f, g] = i.useState(!1),
        [j, w] = i.useState(null),
        [v, k] = i.useState("guild"),
        [C, A] = i.useState(null),
        [I, N] = i.useState(null);
    (i.useEffect(() => {
        (0, F.hF)(n);
    }, [n, d, c]),
        i.useEffect(() => {
            (0, F.dm)(n, h);
        }, [n, h]));
    let E = i.useCallback((e) => {
            (k(e), A(null));
        }, []),
        S = i.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    a = Q({ idea: t, installScope: v, submitting: f });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == v) return void A(B.intl.string(G.default.jQ3nQB));
                    (null != e && m(e), g(!0), w(null));
                    try {
                        let e = await (0, F.gA)({ guild_id: n, install_scope: v });
                        ((0, Z.Hc)(e),
                            (0, Z.r2)(e, I ?? H.Cl),
                            (0, Z.dv)(e, t),
                            (0, D.pX)(eW.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS, e)),
                            m(""),
                            N(null));
                    } catch (e) {
                        w((0, Y.Xd)(e));
                    } finally {
                        g(!1);
                    }
                }
            },
            [v, n, p, I, f],
        ),
        [P, R] = i.useState(!1),
        _ = i.useCallback(
            async (e, t) => {
                let a = em(e);
                if (null != a) return void (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                R(!0);
                let l = null;
                try {
                    ((l = await (0, F.gA)({ guild_id: n, install_scope: t })),
                        (0, Z.Hc)(l),
                        (0, Z.r2)(l, I ?? H.Cl),
                        await ep(l, e, B.intl.string(G.default.KjEtrZ)),
                        (0, D.pX)(eW.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS, l)),
                        N(null));
                } catch {
                    (null != l && (await (0, F.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(B.intl.string(G.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    R(!1);
                }
            },
            [n, I],
        ),
        T = i.useCallback(
            (e) => {
                (0, D.pX)(eW.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        M = i.useCallback(() => {
            (0, D.pX)(eW.BVt.CHANNEL(n, eV.VV.VIBEGRATIONS));
        }, [n]),
        O = i.useCallback((e) => {
            (m(e), w(null));
        }, []),
        X = (0, u.bG)(
            [$.Ay],
            () => {
                if (null == h) return null;
                let e = $.Ay.getProject(h);
                return null == e || (0, $.PV)(e) || e.guild_id === n ? e : null;
            },
            [h, n],
        ),
        U = (0, u.bG)([$.Ay], () => $.Ay.hasFetchedGuildProjects(n), [n]);
    return null != h
        ? (0, l.jsx)(to, { project: X, projectsLoaded: U, onBack: M, guildId: n }, h)
        : (0, l.jsx)(tr, {
              projects: s,
              sharedProjects: r,
              fetchState: o,
              modelSettings: I,
              onModelSettingsChange: N,
              idea: p,
              guildId: n,
              submitting: f,
              createError: j,
              createDisabled: "idea" === (t = Q({ idea: p, installScope: v, submitting: f })) || "submitting" === t,
              onSelectProject: T,
              onIdeaChange: O,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: v,
              onInstallScopeChange: E,
              installScopeError: C,
          });
}
