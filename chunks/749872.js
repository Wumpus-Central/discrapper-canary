l.d(t, { A: () => z });
var n = l(477900),
    i = l(582128),
    s = l(649852),
    a = l.n(s),
    C = l(811315),
    r = l.n(C),
    d = l(164636),
    o = l(192308),
    c = l(534514),
    u = l(683438),
    m = l(265872),
    h = l(821609),
    g = l(112173),
    f = l(71393),
    x = l(576705),
    H = l(287809),
    p = l(633340),
    j = l(504049),
    v = l(134413),
    b = l(406318),
    A = l(221950),
    M = l(435558),
    V = l.n(M),
    L = l(855986),
    D = l(189213),
    R = l(771871),
    E = l(95362),
    I = l(890497),
    _ = l(834730),
    S = l(73153),
    N = l(620632),
    y = l(652215);
let Z = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await N.Bo.get({
                url: y.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: (0, N.fT)(),
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await N.Bo.get({
            url: y.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, N.fT)(),
        });
    },
    prune: (e, t, l) =>
        N.Bo.post({
            url: y.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, N.fT)(),
        }),
};
var T = l(34457),
    w = l(317525);
function U(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let k = (0, l(196765).v)((e) => ({
    entries: {},
    setPreview(t, l, n, i, s) {
        let a = U(t, l, n);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let C = l[a];
            return (
                (null == C || (C.count <= i && !C.isFinished)) &&
                    (l[a] = { count: i, isFinished: s, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
var O = l(792996),
    F = l(208005);
function P(e) {
    var t;
    let l,
        { guild: s, transitionState: a, onClose: C } = e,
        [r, d] = i.useState(7),
        [o, c] = i.useState([]),
        { count: u, isLoading: m } =
            ((t = s.id),
            (l = k((e) => {
                let l = U(t, r, o),
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
                a = Number(e.prune.pruneCount);
            ((t = e.guildId), (l = e.prune.isFinished), k.getState().setPreview(t, n, i, a, l));
        }
        return (
            S.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                S.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [s.id, r, o]),
        i.useEffect(() => {
            null == u && Z.updateEstimateV2(s.id, r, o);
        }, [s.id, r, o, u]));
    let h = i.useCallback(() => {
            (Z.prune(s.id, r, o), C(), k.getState().clear());
        }, [s.id, r, o, C]),
        g = (0, L.yK)(
            [x.A, w.A],
            () => {
                let e = x.A.getHighestRole(s);
                return V()(w.A.getSortedRoles(s.id))
                    .filter((t) => !(0, T.Oy)(t) && x.A.isRoleHigher(s, e, t))
                    .map((e) => {
                        let { id: t, name: l } = e;
                        return { id: t, label: l, value: t };
                    })
                    .value();
            },
            [s],
        );
    return (0, n.jsx)(D.a, {
        title: `${O.intl.string(O.t.zbyz7p)}\u{2014}${null != s ? s.name : ""}`,
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), onClick: C, variant: "secondary" },
            { text: O.intl.string(O.t["2mIlKQ"]), onClick: h },
        ],
        onClose: async () => {
            await C();
        },
        transitionState: a,
        children: (0, n.jsxs)("div", {
            className: F.Q,
            children: [
                (0, n.jsx)(R.z, {
                    label: O.intl.string(O.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: O.intl.formatToPlainString(O.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: O.intl.formatToPlainString(O.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: function (e) {
                        d(Number(e));
                    },
                }),
                (0, n.jsx)(E.Ip, {
                    className: F.X,
                    children: (0, n.jsx)(I.Z, {
                        selectionMode: "multiple",
                        label: O.intl.string(O.t.buoe17),
                        maxOptionsVisible: 10,
                        value: o,
                        onSelectionChange: (e) => c(e),
                        options: g,
                    }),
                }),
                (0, n.jsx)(_.E, {
                    variant: "body-sm/normal",
                    children:
                        o.length > 0
                            ? O.intl.format(m ? O.t.xSDcLk : O.t["5WxHHp"], { members: u ?? -1, days: r })
                            : O.intl.format(m ? O.t["98cHOp"] : O.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
}
let B = function (e) {
    return (0, L.bG)(
        [f.A, x.A, H.default],
        () => (0, v.dQ)(f.A.getGuild(e.guild.id) ?? e.guild, H.default.getCurrentUser(), x.A),
        [e.guild],
    )
        ? (0, n.jsx)(P, { ...e })
        : null;
};
var G = l(779662),
    q = l(60433);
let z = function (e) {
    let { guild: t, ref: s } = e,
        C = i.useRef(null),
        M = (0, d.bG)([b.A], () => b.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        V = (0, d.bG)(
            [f.A, x.A, H.default],
            () => (0, v.dQ)(f.A.getGuild(t.id) ?? t, H.default.getCurrentUser(), x.A),
            [t],
        ),
        L = p.A.useConfig({ guildId: t.id, location: "Members page select by list" }).enabled,
        { canAccessBulkActions: D } = (0, v.lN)(t.id),
        R = i.useCallback(() => {
            (0, o.mM)(async () => {
                let { default: e } = await l.e(721654).then(l.bind(l, 224789));
                return (l) => (0, n.jsx)(e, { ...l, guildId: t.id });
            });
        }, [t.id]),
        E = i.useCallback(() => {
            null != t && V && (0, o.mM)(async () => (e) => (0, n.jsx)(B, { ...e, guild: t }));
        }, [t, V]),
        I = (0, d.bG)([b.A], () => b.A.getSearchStateByGuildId(t.id), [t.id], r()),
        _ = (0, j.Ks)(t.id),
        [S, N] = i.useState(I.query),
        y = i.useCallback(
            (e) => {
                let l = e.trim();
                (l.length > 0 && _(), (0, A.Ld)(t.id, { query: l }));
            },
            [t.id, _],
        ),
        Z = i.useMemo(() => a()(y, 300), [y]),
        T = i.useCallback(
            (e) => {
                (N(e), Z(e));
            },
            [Z],
        ),
        w = i.useCallback(() => {
            (N(""), y(""));
        }, [y]);
    return (
        i.useImperativeHandle(s, () => ({
            resetSearchText() {
                N("");
            },
        })),
        (0, n.jsxs)("div", {
            className: q.db,
            children: [
                (0, n.jsx)("div", {
                    className: q.wL,
                    children: M
                        ? (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: O.intl.string(O.t.y12ALM) })
                        : (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: O.intl.string(O.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: q.Rt,
                    children: (0, n.jsx)("div", {
                        className: q.wL,
                        children: (0, n.jsx)(u.I, {
                            size: "sm",
                            query: S,
                            placeholder: O.intl.string(O.t["NVoAM+"]),
                            onChange: T,
                            onClear: w,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(m.Y, {
                        targetElementRef: C,
                        animation: m.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, n.jsx)(G.default, { guildId: t.id, onClose: l });
                        },
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(h.$, {
                                ...l,
                                buttonRef: C,
                                text: O.intl.string(O.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: g.ArrowsUpDownIcon,
                            });
                        },
                    }),
                }),
                L &&
                    D &&
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(h.$, {
                            text: O.intl.string(O.t.w6lmZW),
                            onClick: R,
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                (0, n.jsx)("div", {
                    className: q.nw,
                    children:
                        V &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: q.__invalid_pruneButton,
                            children: (0, n.jsx)(h.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: O.intl.string(O.t["2mIlKQ"]),
                                onClick: E,
                                "aria-label": O.intl.string(O.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
};
