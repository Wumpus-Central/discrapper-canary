s.d(e, { A: () => tn });
var n = s(477900),
    i = s(582128),
    r = s(731738),
    l = s(289873),
    a = s(417098),
    c = s(964486),
    o = s(913379),
    d = s(129230),
    u = s(308645),
    m = s(335891),
    N = s(855986),
    h = s(207913),
    E = s(259960),
    I = s(257110),
    g = s(435558),
    x = s(993077),
    _ = s(778712),
    A = s(534514),
    D = s(834730),
    f = s(287809),
    j = s(739010),
    v = s(881979),
    C = s(97808),
    T = s(825176),
    O = s(476324);
function S(t) {
    let { user: e, size: s } = t,
        i = (0, _.Kj)(s),
        r = null != e ? e.getAvatarURL(null, i.size) : O;
    return (0, n.jsx)("div", {
        className: T.oJ,
        children: (0, n.jsx)("div", {
            className: T.my,
            style: { width: i.size, height: i.size },
            children: (0, n.jsx)(C.eu, { src: r, "aria-hidden": !0, size: s }),
        }),
    });
}
var p = s(792996),
    P = s(312646);
function L() {
    let t = (0, m.K)(),
        e = (0, N.bG)([f.default], () => f.default.getCurrentUser()),
        [s, r] = i.useState(36),
        l = i.useRef({
            [j.PN.ALL_GOOD]: null,
            [j.PN.LIMITED]: null,
            [j.PN.VERY_LIMITED]: null,
            [j.PN.AT_RISK]: null,
            [j.PN.SUSPENDED]: null,
        }),
        a = i.useCallback(() => {
            r(Math.max(Math.max(...Object.values(l.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    i.useEffect(() => {
        a();
        let t = (0, g.debounce)(a, 100);
        return (window.addEventListener("resize", t), () => window.removeEventListener("resize", t));
    }, [a]);
    let c = (0, v.QB)(),
        { title: o, description: d, color: u, Icon: h } = c[t.state],
        E = Object.keys(c).length;
    return (0, n.jsxs)(x.Z, {
        className: P.kL,
        outline: !1,
        type: x.s.CUSTOM,
        children: [
            (0, n.jsx)("div", { className: P.ME, children: (0, n.jsx)(S, { user: e, size: _._3.SIZE_80 }) }),
            (0, n.jsxs)("div", {
                className: P.h5,
                children: [
                    (0, n.jsxs)("div", {
                        className: P.DD,
                        children: [
                            (0, n.jsx)(A.D, {
                                color: "text-strong",
                                variant: "heading-lg/medium",
                                children: p.intl.format(o, {
                                    hook: (t) =>
                                        (0, n.jsx)(D.E, {
                                            style: { color: u.css },
                                            variant: "heading-lg/semibold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, n.jsx)(D.E, { color: "text-default", variant: "body-sm/normal", children: d }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: P.vK,
                        style: { height: s },
                        children: [
                            (0, n.jsx)("div", { className: P.n8 }),
                            Object.entries(c).map((e, s) => {
                                let [i, r] = e,
                                    a = parseInt(i) === t.state;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: P.Kx,
                                        ref: (t) => {
                                            l.current[parseInt(i)] = t;
                                        },
                                        children: [
                                            a
                                                ? (0, n.jsx)(h, { className: P.xL, color: r.color })
                                                : (0, n.jsx)("div", {
                                                      className: P.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === E - 1 ? -6 : 0,
                                                      },
                                                      children: (0, n.jsx)("div", { className: P.Ie }),
                                                  }),
                                            p.intl.format(r.status, {
                                                hook: (t) =>
                                                    (0, n.jsx)(D.E, {
                                                        color: "text-default",
                                                        variant: "body-sm/normal",
                                                        className: P.Rh,
                                                        children: t,
                                                    }),
                                            }),
                                        ],
                                    },
                                    s,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var R = s(503698),
    b = s.n(R),
    M = s(939249),
    k = s(738188),
    U = s(646514),
    K = s(369606),
    G = s(192308),
    V = s(761508),
    y = s(147925),
    B = s(303727),
    w = s(811091),
    Y = s(393033),
    H = s(985481),
    W = s(239093),
    z = s(652215),
    F = s(557398);
function X(t) {
    let { status: e, onClick: s, opened: i, count: r } = t;
    return (0, n.jsxs)(M.D, {
        className: F.wx,
        onClick: s,
        children: [
            (0, n.jsx)("div", {
                className: F.Y5,
                children: (0, n.jsx)(k.WarningIcon, {
                    size: "md",
                    color: "active" === e ? U.A.colors.INTERACTIVE_TEXT_ACTIVE : U.A.colors.ICON_MUTED,
                }),
            }),
            (0, n.jsxs)("div", {
                className: F.DD,
                children: [
                    (0, n.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children:
                            "active" === e
                                ? p.intl.formatToPlainString(p.t.IeV2oY, { count: r.toString() })
                                : p.intl.formatToPlainString(p.t.fZAHBT, { count: r.toString() }),
                    }),
                    (0, n.jsx)(A.D, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: "active" === e ? p.intl.string(p.t.XJ2YVR) : p.intl.string(p.t.SzGV0g),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: F.OW,
                children: (0, n.jsx)(y.A, {
                    width: 18,
                    height: 18,
                    direction: i ? y.A.Directions.UP : y.A.Directions.DOWN,
                }),
            }),
        ],
    });
}
function $() {
    return (0, n.jsxs)("div", {
        className: F.p$,
        children: [
            (0, n.jsxs)("div", {
                className: F.zc,
                children: [
                    (0, n.jsx)("div", {
                        className: F.Wk,
                        children: (0, n.jsx)(K.TrophyIcon, { size: "md", color: "currentColor", className: F.Kk }),
                    }),
                    (0, n.jsx)(B.A, { className: F.uf }),
                ],
            }),
            (0, n.jsx)(A.D, { variant: "heading-sm/semibold", className: F.q6, children: p.intl.string(p.t.reLFaV) }),
            (0, n.jsx)(D.E, { variant: "body-xs/normal", className: F.WO, children: p.intl.string(p.t.ERdH1o) }),
        ],
    });
}
function Q() {
    return (0, n.jsx)("div", {
        className: F.p$,
        children: (0, n.jsx)(D.E, { variant: "body-xs/normal", className: F.WO, children: p.intl.string(p.t.RV3AXf) }),
    });
}
function Z(t) {
    let { timestamp: e } = t;
    return (0, n.jsx)(D.E, { variant: "body-xs/normal", className: F.vE, children: (0, Y._W)(e) });
}
function q() {
    return (0, n.jsx)(D.E, { variant: "body-xs/semibold", className: F.Ad, children: p.intl.string(p.t.QKMRC4) });
}
function J(t) {
    let { classification: e } = t,
        { id: r, description: l } = e,
        a = w.default.extractTimestamp(r),
        c = 864e5 > Math.abs(w.default.extractTimestamp(e.id) - new Date().getTime()),
        o = i.useMemo(() => {
            let t = {
                description: l,
                descriptionHook: (t) => (0, n.jsx)(D.E, { tag: "span", variant: "heading-lg/semibold", children: t }),
            };
            return (0, Y._g)(e)
                ? e?.guild_metadata?.member_type === j.Z9.OWNER
                    ? p.intl.format(p.t.Lb0HVv, { ...t, guildName: e?.guild_metadata?.name })
                    : p.intl.format(p.t.rmpEPD, {
                          guildName: e?.guild_metadata?.name,
                          classification_type: t.description,
                          classificationHook: t.descriptionHook,
                      })
                : p.intl.format(p.t.QY4g5t, t);
        }, [e, l]);
    return (0, n.jsx)(
        M.D,
        {
            onClick: function () {
                (0, G.mM)(async () => {
                    let { default: t } = await Promise.all([
                        s.e(252964),
                        s.e(384054),
                        s.e(592e3),
                        s.e(524434),
                        s.e(990185),
                        s.e(752924),
                        s.e(849162),
                        s.e(660201),
                        s.e(726464),
                        s.e(481647),
                        s.e(749248),
                        s.e(900361),
                        s.e(21921),
                        s.e(676418),
                        s.e(166495),
                        s.e(139970),
                        s.e(727779),
                        s.e(717602),
                        s.e(585503),
                        s.e(382465),
                        s.e(941040),
                        s.e(648344),
                        s.e(553984),
                        s.e(704727),
                        s.e(102698),
                        s.e(533015),
                        s.e(935948),
                        s.e(144989),
                        s.e(51194),
                        s.e(637867),
                        s.e(668615),
                    ]).then(s.bind(s, 163002));
                    return (e) => (0, n.jsx)(t, { classificationId: r, source: W.XN.StandingTab, ...e });
                });
            },
            className: b()(F.zk, { [F.V5]: c }),
            children: (0, n.jsxs)("div", {
                className: F.iQ,
                children: [
                    c ? (0, n.jsx)(q, {}) : (0, n.jsx)(Z, { timestamp: a }),
                    (0, n.jsx)(A.D, { variant: "heading-lg/medium", children: o }),
                ],
            }),
        },
        r,
    );
}
function tt(t) {
    let { status: e, classifications: s } = t,
        [r, l] = i.useState(!1),
        [a, c] = i.useState(3),
        o = (0, m.K)(),
        u = (0, N.bG)([h.A], () => h.A.getIsDsaEligible()),
        E = i.useMemo(() => s.slice(0, a), [s, a]);
    i.useEffect(() => {
        r &&
            d.default.track(z.HAw.SAFETY_HUB_ACTION, {
                action: W.ZU.ViewViolationsDropdown,
                account_standing: o.state,
                classification_ids: E.map((t) => Number(t.id)),
                source: W.XN.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: u,
            });
    }, [r, o.state, E, u]);
    let I = s.length - E.length > 3 ? 3 : s.length - E.length;
    return (0, n.jsxs)("div", {
        className: F.Wm,
        children: [
            (0, n.jsx)(X, { status: e, onClick: () => l((t) => !t), opened: r, count: s.length }),
            r &&
                (0, n.jsxs)("div", {
                    className: F.ld,
                    children: [
                        (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                        E.length > 0 && E.map((t) => (0, n.jsx)(J, { classification: t }, t.id)),
                        E.length < s.length &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                                    (0, n.jsx)("button", {
                                        className: F.Hr,
                                        onClick: () => c((t) => t + I),
                                        children: p.intl.format(p.t["9Ml56H"], { nextPageSize: I }),
                                    }),
                                ],
                            }),
                        0 === E.length && "active" === e && (0, n.jsx)($, {}),
                        0 === E.length && "expired" === e && (0, n.jsx)(Q, {}),
                    ],
                }),
        ],
    });
}
function te() {
    let t = (0, H.CI)(),
        e = (0, H.XK)();
    return 0 === t.length && 0 === e.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(tt, { status: "active", classifications: t }),
                  (0, n.jsx)(tt, { status: "expired", classifications: e }),
              ],
          });
}
var ts = s(296922);
function tn() {
    let t = (0, I.A)(),
        e = (0, E.v)(),
        s = (0, m.K)(),
        g = (0, N.bG)([h.A], () => h.A.getFetchError());
    (0, c.Ay)(() => {
        u.Yn();
    });
    let x = i.useRef(s);
    return (i.useEffect(() => {
        x.current = s;
    }),
    i.useEffect(() => {
        e &&
            (d.default.track(z.HAw.SAFETY_HUB_VIEWED, { account_standing: x.current.state }),
            o.A.increment({ name: r.K.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, n.jsx)(l.y, {})
        : null != g
          ? (0, n.jsxs)(a.$T, {
                color: a.Hv.DANGER,
                className: ts.aL,
                children: [
                    p.intl.string(p.t.TDRvqs),
                    (0, n.jsx)(a.zr, { onClick: () => u.Yn(), children: p.intl.string(p.t.R1AN4F) }),
                ],
            })
          : (0, n.jsxs)("div", { className: ts.kL, children: [(0, n.jsx)(L, {}), (0, n.jsx)(te, {})] });
}
