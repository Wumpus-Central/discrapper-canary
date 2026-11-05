l.d(t, { A: () => q });
var n = l(477900),
    i = l(582128),
    C = l(649852),
    s = l.n(C),
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
    j = l(504049),
    p = l(134413),
    v = l(406318),
    V = l(221950),
    b = l(435558),
    A = l.n(b),
    M = l(855986),
    L = l(189213),
    D = l(771871),
    R = l(95362),
    S = l(890497),
    E = l(834730),
    N = l(73153),
    I = l(620632),
    y = l(652215);
let Z = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await I.Bo.get({
                url: y.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: (0, I.fT)(),
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await I.Bo.get({
            url: y.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, I.fT)(),
        });
    },
    prune: (e, t, l) =>
        I.Bo.post({
            url: y.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, I.fT)(),
        }),
};
var _ = l(34457),
    w = l(317525);
function U(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let T = (0, l(196765).v)((e) => ({
    entries: {},
    setPreview(t, l, n, i, C) {
        let s = U(t, l, n);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let a = l[s];
            return (
                (null == a || (a.count <= i && !a.isFinished)) &&
                    (l[s] = { count: i, isFinished: C, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
var k = l(792996),
    O = l(208005);
function F(e) {
    var t;
    let l,
        { guild: C, transitionState: s, onClose: a } = e,
        [r, d] = i.useState(7),
        [o, c] = i.useState([]),
        { count: u, isLoading: m } =
            ((t = C.id),
            (l = T((e) => {
                let l = U(t, r, o),
                    n = e.entries[l];
                return null != n && Date.now() - n.cachedAt < 36e5 ? n : null;
            })),
            { count: l?.count, isLoading: l?.isFinished === !1 });
    (i.useEffect(() => {
        function e(e) {
            var t, l;
            if (e.guildId !== C.id || !e.prune.isPreview) return;
            let n = e.prune.days,
                i = e.prune.includeRoles,
                s = Number(e.prune.pruneCount);
            ((t = e.guildId), (l = e.prune.isFinished), T.getState().setPreview(t, n, i, s, l));
        }
        return (
            N.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                N.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [C.id, r, o]),
        i.useEffect(() => {
            null == u && Z.updateEstimateV2(C.id, r, o);
        }, [C.id, r, o, u]));
    let h = i.useCallback(() => {
            (Z.prune(C.id, r, o), a(), T.getState().clear());
        }, [C.id, r, o, a]),
        H = (0, M.yK)(
            [x.A, w.A],
            () => {
                let e = x.A.getHighestRole(C);
                return A()(w.A.getSortedRoles(C.id))
                    .filter((t) => !(0, _.Oy)(t) && x.A.isRoleHigher(C, e, t))
                    .map((e) => {
                        let { id: t, name: l } = e;
                        return { id: t, label: l, value: t };
                    })
                    .value();
            },
            [C],
        );
    return (0, n.jsx)(L.a, {
        title: `${k.intl.string(k.t.zbyz7p)}\u{2014}${null != C ? C.name : ""}`,
        actions: [
            { text: k.intl.string(k.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: k.intl.string(k.t["2mIlKQ"]), onClick: h },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: s,
        children: (0, n.jsxs)("div", {
            className: O.Q,
            children: [
                (0, n.jsx)(D.z, {
                    label: k.intl.string(k.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: k.intl.formatToPlainString(k.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: k.intl.formatToPlainString(k.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: function (e) {
                        d(Number(e));
                    },
                }),
                (0, n.jsx)(R.Ip, {
                    className: O.X,
                    children: (0, n.jsx)(S.Z, {
                        selectionMode: "multiple",
                        label: k.intl.string(k.t.buoe17),
                        maxOptionsVisible: 10,
                        value: o,
                        onSelectionChange: (e) => c(e),
                        options: H,
                    }),
                }),
                (0, n.jsx)(E.E, {
                    variant: "body-sm/normal",
                    children:
                        o.length > 0
                            ? k.intl.format(m ? k.t.xSDcLk : k.t["5WxHHp"], { members: u ?? -1, days: r })
                            : k.intl.format(m ? k.t["98cHOp"] : k.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
}
let G = function (e) {
    return (0, M.bG)(
        [g.A, x.A, f.default],
        () => (0, p.dQ)(g.A.getGuild(e.guild.id) ?? e.guild, f.default.getCurrentUser(), x.A),
        [e.guild],
    )
        ? (0, n.jsx)(F, { ...e })
        : null;
};
var P = l(779662),
    B = l(60433);
let q = function (e) {
    let { guild: t, ref: l } = e,
        C = i.useRef(null),
        a = (0, d.bG)([v.A], () => v.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        b = (0, d.bG)(
            [g.A, x.A, f.default],
            () => (0, p.dQ)(g.A.getGuild(t.id) ?? t, f.default.getCurrentUser(), x.A),
            [t],
        ),
        A = i.useCallback(() => {
            null != t && b && (0, o.mM)(async () => (e) => (0, n.jsx)(G, { ...e, guild: t }));
        }, [t, b]),
        M = (0, d.bG)([v.A], () => v.A.getSearchStateByGuildId(t.id), [t.id], r()),
        L = (0, j.Ks)(t.id),
        [D, R] = i.useState(M.query),
        S = i.useCallback(
            (e) => {
                let l = e.trim();
                (l.length > 0 && L(), (0, V.Ld)(t.id, { query: l }));
            },
            [t.id, L],
        ),
        E = i.useMemo(() => s()(S, 300), [S]),
        N = i.useCallback(
            (e) => {
                (R(e), E(e));
            },
            [E],
        ),
        I = i.useCallback(() => {
            (R(""), S(""));
        }, [S]);
    return (
        i.useImperativeHandle(l, () => ({
            resetSearchText() {
                R("");
            },
        })),
        (0, n.jsxs)("div", {
            className: B.db,
            children: [
                (0, n.jsx)("div", {
                    className: B.wL,
                    children: a
                        ? (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: k.intl.string(k.t.y12ALM) })
                        : (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: k.intl.string(k.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: B.Rt,
                    children: (0, n.jsx)("div", {
                        className: B.wL,
                        children: (0, n.jsx)(u.I, {
                            size: "sm",
                            query: D,
                            placeholder: k.intl.string(k.t["NVoAM+"]),
                            onChange: N,
                            onClear: I,
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
                            return (0, n.jsx)(P.default, { guildId: t.id, onClose: l });
                        },
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(h.$, {
                                ...l,
                                buttonRef: C,
                                text: k.intl.string(k.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: H.ArrowsUpDownIcon,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: B.nw,
                    children:
                        b &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: B.__invalid_pruneButton,
                            children: (0, n.jsx)(h.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: k.intl.string(k.t["2mIlKQ"]),
                                onClick: A,
                                "aria-label": k.intl.string(k.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
};
