l.d(t, { A: () => z });
var n = l(477900),
    i = l(582128),
    s = l(649852),
    C = l.n(s),
    a = l(811315),
    r = l.n(a),
    d = l(164636),
    o = l(192308),
    c = l(534514),
    u = l(683438),
    m = l(265872),
    h = l(821609),
    H = l(112173),
    g = l(71393),
    x = l(576705),
    f = l(287809),
    j = l(633340),
    p = l(504049),
    v = l(134413),
    V = l(406318),
    b = l(221950),
    A = l(435558),
    M = l.n(A),
    L = l(855986),
    D = l(189213),
    R = l(771871),
    E = l(95362),
    N = l(890497),
    I = l(834730),
    S = l(73153),
    y = l(620632),
    Z = l(652215);
let _ = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await y.Bo.get({
                url: Z.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: (0, y.fT)(),
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await y.Bo.get({
            url: Z.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, y.fT)(),
        });
    },
    prune: (e, t, l) =>
        y.Bo.post({
            url: Z.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, y.fT)(),
        }),
};
var w = l(34457),
    U = l(317525);
function k(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let O = (0, l(196765).v)((e) => ({
    entries: {},
    setPreview(t, l, n, i, s) {
        let C = k(t, l, n);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let a = l[C];
            return (
                (null == a || (a.count <= i && !a.isFinished)) &&
                    (l[C] = { count: i, isFinished: s, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
var T = l(792996),
    F = l(208005);
function G(e) {
    var t;
    let l,
        { guild: s, transitionState: C, onClose: a } = e,
        [r, d] = i.useState(7),
        [o, c] = i.useState([]),
        { count: u, isLoading: m } =
            ((t = s.id),
            (l = O((e) => {
                let l = k(t, r, o),
                    n = e.entries[l];
                return null != n && Date.now() - n.cachedAt < 36e5 ? n : null;
            })),
            { count: l?.count, isLoading: l?.isFinished === !1 });
    (i.useEffect(() => {
        function e(e) {
            var t, l;
            if (e.guildId !== s.id || !e.prune.isPreview) return;
            let n = e.prune.days,
                i = e.prune.includeRoles,
                C = Number(e.prune.pruneCount);
            ((t = e.guildId), (l = e.prune.isFinished), O.getState().setPreview(t, n, i, C, l));
        }
        return (
            S.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                S.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [s.id, r, o]),
        i.useEffect(() => {
            null == u && _.updateEstimateV2(s.id, r, o);
        }, [s.id, r, o, u]));
    let h = i.useCallback(() => {
            (_.prune(s.id, r, o), a(), O.getState().clear());
        }, [s.id, r, o, a]),
        H = (0, L.yK)(
            [x.A, U.A],
            () => {
                let e = x.A.getHighestRole(s);
                return M()(U.A.getSortedRoles(s.id))
                    .filter((t) => !(0, w.Oy)(t) && x.A.isRoleHigher(s, e, t))
                    .map((e) => {
                        let { id: t, name: l } = e;
                        return { id: t, label: l, value: t };
                    })
                    .value();
            },
            [s],
        );
    return (0, n.jsx)(D.a, {
        title: `${T.intl.string(T.t.zbyz7p)}\u{2014}${null != s ? s.name : ""}`,
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: T.intl.string(T.t["2mIlKQ"]), onClick: h },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: C,
        children: (0, n.jsxs)("div", {
            className: F.Q,
            children: [
                (0, n.jsx)(R.z, {
                    label: T.intl.string(T.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: T.intl.formatToPlainString(T.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: T.intl.formatToPlainString(T.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: function (e) {
                        d(Number(e));
                    },
                }),
                (0, n.jsx)(E.Ip, {
                    className: F.X,
                    children: (0, n.jsx)(N.Z, {
                        selectionMode: "multiple",
                        label: T.intl.string(T.t.buoe17),
                        maxOptionsVisible: 10,
                        value: o,
                        onSelectionChange: (e) => c(e),
                        options: H,
                    }),
                }),
                (0, n.jsx)(I.E, {
                    variant: "body-sm/normal",
                    children:
                        o.length > 0
                            ? T.intl.format(m ? T.t.xSDcLk : T.t["5WxHHp"], { members: u ?? -1, days: r })
                            : T.intl.format(m ? T.t["98cHOp"] : T.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
}
let B = function (e) {
    return (0, L.bG)(
        [g.A, x.A, f.default],
        () => (0, v.dQ)(g.A.getGuild(e.guild.id) ?? e.guild, f.default.getCurrentUser(), x.A),
        [e.guild],
    )
        ? (0, n.jsx)(G, { ...e })
        : null;
};
var P = l(779662),
    q = l(60433);
let z = function (e) {
    let { guild: t, ref: s } = e,
        a = i.useRef(null),
        A = (0, d.bG)([V.A], () => V.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        M = (0, d.bG)(
            [g.A, x.A, f.default],
            () => (0, v.dQ)(g.A.getGuild(t.id) ?? t, f.default.getCurrentUser(), x.A),
            [t],
        ),
        L = j.A.useConfig({ guildId: t.id, location: "Members page select by list" }).enabled,
        { canAccessBulkActions: D } = (0, v.lN)(t.id),
        R = i.useCallback(() => {
            (0, o.mM)(async () => {
                let { default: e } = await l.e(721654).then(l.bind(l, 224789));
                return (l) => (0, n.jsx)(e, { ...l, guildId: t.id });
            });
        }, [t.id]),
        E = i.useCallback(() => {
            null != t && M && (0, o.mM)(async () => (e) => (0, n.jsx)(B, { ...e, guild: t }));
        }, [t, M]),
        N = (0, d.bG)([V.A], () => V.A.getSearchStateByGuildId(t.id), [t.id], r()),
        I = (0, p.Ks)(t.id),
        [S, y] = i.useState(N.query),
        Z = i.useCallback(
            (e) => {
                let l = e.trim();
                (l.length > 0 && I(), (0, b.Ld)(t.id, { query: l }));
            },
            [t.id, I],
        ),
        _ = i.useMemo(() => C()(Z, 300), [Z]),
        w = i.useCallback(
            (e) => {
                (y(e), _(e));
            },
            [_],
        ),
        U = i.useCallback(() => {
            (y(""), Z(""));
        }, [Z]);
    return (
        i.useImperativeHandle(s, () => ({
            resetSearchText() {
                y("");
            },
        })),
        (0, n.jsxs)("div", {
            className: q.db,
            children: [
                (0, n.jsx)("div", {
                    className: q.wL,
                    children: A
                        ? (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: T.intl.string(T.t.y12ALM) })
                        : (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: T.intl.string(T.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: q.Rt,
                    children: (0, n.jsx)("div", {
                        className: q.wL,
                        children: (0, n.jsx)(u.I, {
                            size: "sm",
                            query: S,
                            placeholder: T.intl.string(T.t["NVoAM+"]),
                            onChange: w,
                            onClear: U,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(m.Y, {
                        targetElementRef: a,
                        animation: m.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, n.jsx)(P.default, { guildId: t.id, onClose: l });
                        },
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(h.$, {
                                ...l,
                                buttonRef: a,
                                text: T.intl.string(T.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: H.ArrowsUpDownIcon,
                            });
                        },
                    }),
                }),
                L &&
                    D &&
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(h.$, {
                            text: T.intl.string(T.t.w6lmZW),
                            onClick: R,
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                (0, n.jsx)("div", {
                    className: q.nw,
                    children:
                        M &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: q.__invalid_pruneButton,
                            children: (0, n.jsx)(h.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: T.intl.string(T.t["2mIlKQ"]),
                                onClick: E,
                                "aria-label": T.intl.string(T.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
};
