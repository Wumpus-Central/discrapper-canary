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
    B = n(576705),
    F = n(486020),
    H = n(759967),
    Y = n(375708),
    q = n(673724),
    U = n(948230),
    X = n(637708),
    K = n(936494);
async function W(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, U.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var $ = n(208137),
    Z = n(993396),
    Q = n(822835),
    J = n(66708),
    ee = n(74029),
    et = n(559676),
    en = n(58551),
    ea = n(805332),
    el = n(277977),
    ei = n(972786);
function es(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eo = n(58703),
    er = n(127181),
    ed = n(192308);
function eu() {
    (0, ed.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ec = n(413927);
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
                ? (0, l.jsx)(k.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(H.default.YWxThz),
                      onClick: eu,
                  })
                : null,
        ],
    });
}
var em = n(30392);
function eh(e) {
    let { className: t, ariaLabel: n, disabled: a, onClick: i, children: s } = e;
    return (0, l.jsx)(f.D, { "aria-disabled": a, "aria-label": n, className: t, onClick: a ? void 0 : i, children: s });
}
var ef = n(865665),
    eg = n(568190);
let ey = { x: 5, y: 7 },
    eb = { x: 5, y: 4 };
function ew(e) {
    let { listClassName: t, radius: n, children: a } = e,
        [s, o] = i.useState(!1);
    return (0, l.jsxs)("div", {
        className: eg.n,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, l.jsx)("ol", { className: t, children: a }),
            s ? (0, l.jsx)(ef.C, { area: 64, radius: n, color: R.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ex = n(210744),
    ek = n(864970),
    ev = n(707554),
    ej = n(770178),
    eC = n(765548),
    eA = n(597643),
    eN = n(885576),
    eI = n(236730);
let eS = "heading-xxl/semibold",
    eE = !1;
function eP() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        a = (0, eC.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        s = (0, ej.w)(a, [], { fireOnMount: !0 }),
        o = (0, u.bG)([eA.A], () => eA.A.isConnected());
    i.useEffect(() => {
        if (!o || !t || eE) return;
        let n = !1,
            a = 0;
        function l() {
            n ||
                (a = window.setTimeout(() => {
                    ((eE = !0), e.current?.play());
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
            ? (0, l.jsx)(ev.H, { children: (0, l.jsx)(ek.o, { ref: e, text: c, variant: eS, delay: null }) })
            : (0, l.jsx)(C.D, { variant: eS, children: c }),
    });
}
var e_ = n(922016),
    eR = n(980707),
    eT = n(477782),
    eM = n(81369),
    eO = n(402879);
async function eG(e, t, n) {
    (0, el.Hc)(e);
    let a = await (0, el.vX)(e, t);
    (0, el.dv)(e, n, [a]);
}
function eD(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, q.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, q.ZJ)((0, q.yr)(t)) });
}
async function eV(e, t) {
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
        l = await (0, el.cS)(e, a);
    await (0, eO.F)(l, a);
}
function ez(e) {
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
var eL = n(950305),
    eB = n(664121);
let eF = [
    { value: "user", icon: eL.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eB.R, nameMessage: H.default.LdgKdI },
];
function eH(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = ez(i.useCallback((e) => n(e, "user"), [n])),
        o = ez(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: e_.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(eR.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eT.rX, {
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
                                        eT.Dr,
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
var eY = n(427896),
    eq = n(629584),
    eU = n(753514),
    eX = n(491920);
function eK(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eU.kZ)(e), "aria-controls": (0, eU.z3)(e) })), [t]),
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
              className: o()(eX.b, s),
              optionClassName: eX.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eW = n(663417),
    e$ = n(70688),
    eZ = n(173936),
    eQ = n(473935),
    eJ = n(365199),
    e0 = n(7437),
    e2 = n(147036),
    e6 = n(957565),
    e9 = n(123917),
    e1 = n(557875);
let e8 = new Set();
var e7 = n(869369),
    e3 = n(746080),
    e5 = n(793712);
let e4 = [];
function te(e) {
    (0, b.P0)((0, w.o)(e, x.Ck.FAILURE));
}
function tt(e) {
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
        { pending: I, refresh: S } = (0, e0.A)(C ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [n, a] = i.useState(e8),
                l = i.useRef(e8),
                s = i.useCallback((e) => {
                    ((l.current = (0, e1.Q6)(l.current, e)), a(l.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, e1.K9)(l.current, n.type);
                        async function o() {
                            let a = await (0, el.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, e9.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e1.rq)(a.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), a(i), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, te),
        _ = (0, u.bG)([el.Ay], () => (null == A ? e4 : el.Ay.getDeclaredConnections(A))),
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
            offers: i.useMemo(() => (0, e1.Xl)(_), [_]),
            connectPending: E,
        }),
        T = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        M = null != m && r,
        O = o && null != p,
        D = M || null != d || O || null != h || null != f || null != g,
        V = e6.p5 && null != a,
        z = e6.p5;
    return null != y || null != v || D || z || o
        ? (0, l.jsx)(e_.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: e_.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(eR.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != y || null != v
                              ? (0, l.jsxs)(eT.rX, {
                                    children: [
                                        null != y
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "refresh",
                                                  icon: eW.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eW.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: k,
                                                  action: y,
                                              })
                                            : null,
                                        null != v
                                            ? (0, l.jsx)(eT.Dr, {
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
                          R.length > 0
                              ? (0, l.jsx)(eT.rX, {
                                    children: R.map((e) =>
                                        (0, l.jsx)(
                                            eT.Dr,
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
                              ? (0, l.jsxs)(eT.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z
                              ? (0, l.jsxs)(eT.rX, {
                                    children: [
                                        V
                                            ? (0, l.jsx)(eT.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eZ.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eZ.LinkIcon },
                                                  action: () =>
                                                      (0, e6.C)((0, e2.n)(a, e3.VV.VIBEGRATIONS, t), () =>
                                                          (0, b.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eT.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eQ.L,
                                            leadingAccessory: { type: "icon", icon: eQ.L },
                                            action: () =>
                                                (0, e6.C)(t, () =>
                                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eT.rX, {
                                    children: [
                                        (0, l.jsx)(eT.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: j.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                            action: () => (0, e7.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(eT.Dr, {
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
                      className: e5.h,
                      children: (0, l.jsx)(G.A.Icon, {
                          icon: eJ.MoreHorizontalIcon,
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
var tn = n(769979);
function ta(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(G.A, {
        hideSearch: !0,
        toolbar: n,
        className: tn.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: tn.QF,
            children: [
                (0, l.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: tn.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(G.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(G.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(G.A.Title, { className: tn.Qw, wrapperClassName: tn.DD, children: t }),
            ],
        }),
    });
}
var tl = n(73432),
    ti = n(683071),
    ts = n(47167),
    to = n(808728),
    tr = n(994500),
    td = n(287809),
    tu = n(652215);
let tc = "conjuring-help";
var tp = n(107148);
function tm() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([td.default, L.A, to.Ay, tr.A], () => {
                let e = td.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(tu.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = to.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, ts.m1)(t, td.default, tr.A) === tc;
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
var th = n(321593),
    tf = n(580954),
    tg = n(227189),
    ty = n(189213),
    tb = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function tw(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = t === tb.PERMISSIONS;
    return (0, l.jsx)(ty.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(i ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(i ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(i ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function tx(e) {
    (0, ed.openModal)((t) => (0, l.jsx)(tw, { ...t, reason: e }));
}
var tk = n(480007),
    tv = n(584936),
    tj = n(536820),
    tC = n(548118);
let tA = "user";
var tN = n(683180);
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
function tR(e, t) {
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
var tT = n(506774);
let tM = "VibegrationsProjectsPanelOpen";
function tO() {
    return tT.w.get(tM) ?? null;
}
function tG(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tD = n(165610),
    tV = n(352978);
function tz(e) {
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
                    eV(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, b.P0)(
                                    (0, w.o)(
                                        409 === (n = e instanceof el._v ? e.status : null)
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
                onImport: (o = ez(
                    i.useCallback(
                        (e) => {
                            let a = eD(e);
                            null != a
                                ? (0, b.P0)((0, w.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(tu.BVt.CHANNEL(p, e3.VV.VIBEGRATIONS, t));
                                          try {
                                              await eG(t, e, Y.intl.string(H.default.C7GU2r));
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
        className: tV.OY,
        children: [
            (0, l.jsx)(th.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tV.W6,
                onClick: m,
                children: [
                    null == C
                        ? (0, l.jsx)("div", {
                              className: tV.a8,
                              "aria-hidden": !0,
                              children: (0, l.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, l.jsx)("img", { alt: "", src: C, className: tV.VJ }),
                    (0, l.jsxs)("div", {
                        className: tV.MM,
                        children: [
                            (0, l.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tV.j1,
                                children: r.name,
                            }),
                            (0, l.jsxs)("div", {
                                className: tV.h3,
                                children: [
                                    (0, l.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tV.Wb,
                                        children: I,
                                    }),
                                    null == A
                                        ? null
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("span", {
                                                      className: tV.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, l.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tV.zM,
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
                className: tV.M2,
                children: (0, l.jsxs)("div", {
                    className: tV.Pl,
                    children: [
                        (0, l.jsx)(tt, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: p,
                            projectGuildId: r.guild_id,
                            isOwner: (0, ei.PV)(r),
                            canRemix: (0, ei.H_)(r),
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
function tH(e) {
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
        B = s?.id ?? null,
        F = i.useRef(B),
        q = i.useRef(!0),
        X = i.useRef(!1),
        K = i.useRef(null);
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
        { data: Z, isLoading: J } = (0, T.YY)(s?.preview_application_id ?? void 0),
        es = null != B && z !== B,
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
        ef = (0, en.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: eo,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        eg = p || es || J,
        ey = Y.intl.string(H.default["5gU57O"]),
        eb = h && !S && !g && !N,
        ew = Y.intl.string(eb ? H.default.YdgE0j : H.default.aWVf4j),
        ek = i.useCallback(() => {
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
                function n() {
                    return q.current && F.current === t;
                }
                ((X.current = !0),
                    A(!1),
                    f(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, el.oB)(t, e.sha)
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
        e_ = (0, u.bG)([ea.A], () => ea.A.isBuilderPreviewMobile()),
        eR = Y.intl.string(e_ ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eT = i.useCallback(() => (0, U.GG)(!e_), [e_]),
        eM = (0, O.A)(s?.preview_application_id ?? null, tD.sd),
        eO = (0, tD.x1)(eM) && eM.data.proxyTicketRefreshing,
        eV = i.useCallback(() => {
            null == eM || eO || M.A.refreshProxyTicket(eM.id);
        }, [eM, eO]),
        eL = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eM?.id), (0, el.Bn)(e), (0, tf.A)().leaveFrame(t)), r());
        }, [s, eM?.id, r]),
        eB = i.useCallback(() => {
            null != s && (f(!0), (0, el.dv)(s.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [s]),
        eF = ez(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = eD(e);
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
                                      await eG(t, e, Y.intl.string(H.default.C7GU2r));
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
            null != s && (0, tv.A)(s, d);
        }, [s, d]),
        eY = i.useCallback(async () => {
            if (null == B || F.current !== B) return;
            K.current?.abort();
            let e = new AbortController();
            ((K.current = e), L(null));
            try {
                await (0, U.U1)(B, e.signal);
            } catch {
            } finally {
                e.signal.aborted || K.current !== e || F.current !== B || L(B);
            }
        }, [B]);
    i.useEffect(
        () => (
            eY(),
            () => {
                (K.current?.abort(), (K.current = null));
            }
        ),
        [eY],
    );
    let eq =
            ((t = s ?? null), (a = $ ?? null), a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eU = i.useCallback(async () => {
            null != s && (await W(s, eq));
        }, [eq, s]),
        eX = i.useCallback(async () => {
            try {
                await eU();
            } catch {}
            await eY();
        }, [eY, eU]),
        eW = i.useMemo(() => {
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
        e$ = ef ? { type: "permissions", authorizeProps: eW } : es && null == $ ? { type: "checking" } : void 0;
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
                            (0, w.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        eQ = i.useCallback(() => {
            if (null == s) return;
            if (!eo) return void tx(tb.NO_PREVIEW);
            if (ef) return void tx(tb.PERMISSIONS);
            if ("user" === s.install_scope)
                return void eZ(s.id)
                    .then(() => {
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, el.$C)(s.id);
            (e.catch(() => {}),
                (0, tk.A)({
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
                ? (0, l.jsx)(k.$, { size: "sm", variant: "primary", loading: p, disabled: eg, onClick: eQ, text: ey })
                : null,
        e0 = (0, l.jsx)(ta, {
            title: s?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tV.FO,
                          children: [
                              eu.showModeSwitch ? (0, l.jsx)(eK, { modes: eu.modes, mode: ec, onChange: ep }) : null,
                              (0, l.jsx)(G.A.Icon, {
                                  icon: e_ ? tB : tL,
                                  tooltip: eR,
                                  "aria-label": eR,
                                  selected: e_,
                                  onClick: eT,
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
                              "frame" === ec ? (0, l.jsx)(ex.A, { frame: eM, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: tV.YJ }),
                              P
                                  ? (0, l.jsx)(G.A.Icon, {
                                        icon: v.BugIcon,
                                        tooltip: Y.intl.string(H.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                        selected: S,
                                        onClick: eS,
                                    })
                                  : null,
                              (0, ei.PV)(s)
                                  ? (0, l.jsx)(G.A.Icon, {
                                        icon: j.SettingsIcon,
                                        tooltip: Y.intl.string(H.default["xhcY+n"]),
                                        "aria-label": Y.intl.string(H.default["xhcY+n"]),
                                        onClick: () => (0, e7.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(tt, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ei.PV)(s),
                                  canRemix: (0, ei.H_)(s),
                                  onRefresh: (0, tD.x1)(eM) ? eV : void 0,
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
                                      eu.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== eu.profileState
                                          ? eh
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              eb
                                  ? null
                                  : (0, l.jsx)(G.A.Icon, { icon: tz, tooltip: ew, "aria-label": ew, onClick: ek }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tV.nj,
        children: [
            eF.input,
            (0, l.jsx)("main", {
                className: tV.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: tV.j5,
                              children: [
                                  e0,
                                  (0, l.jsxs)("div", {
                                      className: tV.sD,
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
        [B, F] = i.useState(() => ({ guildId: s, filter: tP(s) })),
        X = (B.guildId === s ? B.filter : tP(s)) ?? s,
        K = i.useCallback(
            (e) => {
                (tE.set(s, e), F({ guildId: s, filter: e }));
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
                ...W.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, l.jsx)(tC.Ay, { guild: e, size: tC.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
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
                Q.filter((e) => tR(e, X)).sort((e, t) =>
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
                    .filter((e) => tR(e, X))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, X],
        ),
        en = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tN.X0)(e, s)
                    ? v(e.id)
                    : (0, b.P0)((0, w.o)(Y.intl.string(H.default["wY7I+H"]), x.Ck.MESSAGE));
            },
            [s, v],
        ),
        ea = Y.intl.string(H.default.TU9IGR),
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
                      (0, ed.openModalLazy)(
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
        [ex, ek] = i.useState(tO),
        ev = i.useMemo(() => tT.w.get(tG(s)) ?? !1, [s]),
        ej = "success" === eg,
        eC = (0, u.yK)([ei.Ay], () => ei.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => tR(e, s)),
        eA = ex ?? (!!eC || "error" === eg || (!ej && ev));
    i.useEffect(() => {
        ej && tT.w.set(tG(s), eC);
    }, [ej, eC, s]);
    let eN = i.useCallback((e) => {
            (tT.w.set(tM, e), ek(e));
        }, []),
        eI = i.useCallback(() => eN(!eA), [eN, eA]),
        eS = i.useCallback(() => eN(!1), [eN]),
        eE = Y.intl.string(H.default.jDPFDh),
        e_ = eA ? eE : Y.intl.string(H.default.a6d2y1);
    return (0, l.jsx)("div", {
        className: o()(tV.nj, tV.a0),
        children: (0, l.jsxs)("div", {
            className: tV.Yo,
            children: [
                (0, l.jsxs)("main", {
                    className: tV.ps,
                    children: [
                        (0, l.jsx)(ta, {
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
                            className: tV.Yy,
                            children: (0, l.jsx)("div", {
                                className: tV.Mo,
                                children: (0, l.jsxs)("section", {
                                    className: o()(tV.Qs, tV.Ix),
                                    children: [
                                        (0, l.jsx)(tm, {}),
                                        (0, l.jsx)(eP, {}),
                                        (0, l.jsxs)("section", {
                                            className: tV.WI,
                                            "aria-label": er,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tV.G9,
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
                                                    listClassName: tV.Aw,
                                                    radius: ey,
                                                    children: es.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tV.EA,
                                                                children: (0, l.jsxs)(eh, {
                                                                    disabled: r,
                                                                    ariaLabel: Y.intl.formatToPlainString(
                                                                        H.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tV.nx, tV.rz),
                                                                    onClick: () => eo(e),
                                                                    children: [
                                                                        (0, l.jsx)(y.E, {
                                                                            className: tV.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, l.jsx)(y.E, {
                                                                            className: tV.BK,
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
                                            className: tV.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tV.G9,
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
                                                    listClassName: tV.Aw,
                                                    radius: eb,
                                                    children: el.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tV.EA,
                                                                children: (0, l.jsx)(eh, {
                                                                    disabled: r,
                                                                    className: tV.nx,
                                                                    onClick: () => C(e),
                                                                    children: (0, l.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tV.un,
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
                            className: tV.Yl,
                            children: (0, l.jsxs)("div", {
                                className: o()(tV.Qs, tV.DA),
                                children: [
                                    (0, l.jsx)(I.f, {
                                        label: ea,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: a,
                                        placeholder: ea,
                                        error: d,
                                        onChange: j,
                                        onKeyDown: ec,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: tV.VP,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: tV.gH,
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
                    className: tV.pA,
                    hidden: !eA,
                    "aria-label": Y.intl.string(H.default.Bo5fE3),
                    children: [
                        (0, l.jsxs)("div", {
                            className: tV.IR,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tV.RM,
                                    children: Y.intl.string(H.default.Bo5fE3),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tV.Ss,
                                    children: [
                                        (0, l.jsx)(eH, { importing: z, onImport: V }),
                                        (0, l.jsx)(G.A.Icon, { icon: E.P, tooltip: eE, "aria-label": eE, onClick: eS }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)(N.Ip, {
                            className: tV.xe,
                            children: [
                                (0, l.jsx)("div", {
                                    className: tV.Vw,
                                    children: (0, l.jsx)(S.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(H.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Z,
                                        value: X,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tV.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === ef || "loading" === ef) && 0 === et.length
                                    ? (0, l.jsx)("div", { className: tV.E8, children: (0, l.jsx)(P.y, {}) })
                                    : "error" === ef && 0 === et.length
                                      ? (0, l.jsxs)("div", {
                                            className: tV.E8,
                                            children: [
                                                (0, l.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tV.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, l.jsx)(k.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(em),
                                                }),
                                            ],
                                        })
                                      : 0 === et.length
                                        ? (0, l.jsx)("div", {
                                              className: tV.D1,
                                              children: (0, l.jsxs)("div", {
                                                  className: tV.ST,
                                                  children: [
                                                      (0, l.jsx)(_.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, l.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tV.sI,
                                                          children: Y.intl.string(H.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, l.jsx)("div", {
                                              className: tV.Dq,
                                              children: et.map((e) =>
                                                  (0, l.jsx)(
                                                      tF,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, tv.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                J.length > 0
                                    ? (0, l.jsxs)("div", {
                                          className: tV.qx,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tV.uc,
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
                                                  className: tV.Dq,
                                                  children: J.map((e) =>
                                                      (0, l.jsx)(
                                                          tF,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => en(e),
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
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([ei.Ay], () => ei.Ay.getOwnedProjects()),
        o = (0, u.yK)([z.Ay], () => z.Ay.getSelfMember(n)?.roles ?? [], [n]),
        r = (0, u.bG)(
            [L.A, B.A],
            () => {
                let e = L.A.getGuild(n);
                return null != e && B.A.can(tu.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [d, c] = i.useState(""),
        p = a ?? null,
        [m, h] = i.useState(!1),
        [f, g] = i.useState(null),
        y = (0, tj._)("VibegrationsScreen"),
        [k, v] = i.useState(null);
    i.useEffect(() => {
        v(null);
    }, [n]);
    let j = i.useMemo(() => (y.some((e) => e.id === n) ? n : tA), [y, n]),
        C = k ?? j,
        A = C === tA ? "user" : "guild",
        N = C === tA ? n : C,
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
                ((0, el.Hc)(a),
                    (0, el.r2)(a, I ?? q.v0),
                    (0, el.dv)(a, e),
                    (0, D.pX)(tu.BVt.CHANNEL(t, e3.VV.VIBEGRATIONS, a)),
                    c(""),
                    S(null));
            },
            [I],
        ),
        P = i.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    n = es({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        await E(t, N, A);
                    } catch (e) {
                        g((0, K.Xd)(e));
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
                return ((0, el.Hc)(n), (0, el.r2)(n, I ?? q.v0), (0, el.dv)(n, (0, Z.v8)(e)), n);
            },
            [I],
        ),
        R = i.useCallback(async (e, t, n) => {
            if (ei.Ay.getProject(e)?.guild_id !== t) {
                let n = await (0, U.M7)(e, { guild_id: t, preview_guild_id: t });
                if (!n.ok) throw new K.uQ((0, K.hj)(n), n.status);
            }
            ((0, el.dv)(e, n), (0, J.R6)(e), (0, D.pX)(tu.BVt.CHANNEL(t, e3.VV.VIBEGRATIONS, e)), S(null));
        }, []),
        T = i.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        M = i.useCallback(
            (e) => {
                let t = ei.Ay.getProject(e)?.guild_id ?? n;
                ((0, D.pX)(tu.BVt.CHANNEL(t, e3.VV.VIBEGRATIONS, e)), S(null));
            },
            [n],
        ),
        [O, G] = i.useState(!1),
        V = i.useCallback(
            async (e, t) => {
                let a = eD(e);
                if (null != a) return void (0, b.P0)((0, w.o)(a, x.Ck.FAILURE));
                G(!0);
                let l = null;
                try {
                    ((l = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, el.Hc)(l),
                        (0, el.r2)(l, I ?? q.v0),
                        await eG(l, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, D.pX)(tu.BVt.CHANNEL(n, e3.VV.VIBEGRATIONS, l)),
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
        F = i.useCallback(
            (e) => {
                (0, D.pX)(tu.BVt.CHANNEL(n, e3.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        X = i.useCallback(() => {
            (0, D.pX)(tu.BVt.CHANNEL(n, e3.VV.VIBEGRATIONS));
        }, [n]),
        W = i.useCallback((e) => {
            (c(e), g(null));
        }, []),
        $ = (0, u.bG)(
            [ei.Ay],
            () => {
                if (null == p) return null;
                let e = ei.Ay.getProject(p);
                return null == e || (0, ei.PV)(e) || e.guild_id === n ? e : null;
            },
            [p, n],
        ),
        Q = (0, u.bG)([ei.Ay], () => ei.Ay.hasFetchedGuildProjects(n), [n]);
    return null != p
        ? (0, l.jsx)(tH, { project: $, projectsLoaded: Q, onBack: X, guildId: n }, p)
        : (0, l.jsx)(tY, {
              projects: s,
              modelSettings: I,
              onModelSettingsChange: S,
              idea: d,
              guildId: n,
              submitting: m,
              createError: f,
              createDisabled: "idea" === (t = es({ idea: d, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: F,
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
