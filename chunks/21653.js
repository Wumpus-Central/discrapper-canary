n.d(t, { default: () => H });
var l,
    i = n(627968),
    s = n(64700),
    r = n(735438),
    a = n(311907),
    d = n(935462),
    o = n(430690),
    c = n(821609),
    u = n(123292),
    x = n(192308),
    h = n(834730),
    m = n(846293),
    g = n(775602),
    v = n(21161),
    j = n(520467),
    A = n(915089),
    E = n(808728),
    p = n(71393),
    N = n(735547),
    C = n(645034),
    f = n(698441),
    y = n(496092),
    b = n(485394),
    S = n(761836),
    I = n(794782),
    T = n(9448),
    R = n(974930),
    _ = n(70456),
    k = n(105253),
    D = n(692026),
    G = n(816647),
    L = n(300153),
    M = n(505966),
    P = n(988794),
    U = n(652215),
    z = n(985018),
    V = n(486536);
let { INVITE_OPTIONS_7_DAYS: F, INVITE_OPTIONS_UNLIMITED: w } = N.Ay;
var B =
    (((l = B || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function X(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = s.useContext(v.x);
    return (
        s.useEffect(() => {
            let e = t?.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            n(
                {
                    position: {
                        type: "static-random",
                        minValue: { x: l.left - 100, y: l.top - 100 },
                        maxValue: { x: l.left + 100, y: l.top + 100 },
                    },
                    velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: -60, y: -60 } },
                },
                80,
            ),
                n(
                    {
                        position: {
                            type: "static-random",
                            minValue: { x: l.right - 100, y: l.top - 100 },
                            maxValue: { x: l.right + 100, y: l.top + 100 },
                        },
                        velocity: { type: "static-random", minValue: { x: 20, y: -20 }, maxValue: { x: 60, y: -60 } },
                    },
                    80,
                );
        }, [n, t]),
        null
    );
}
function O(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            isEdit: x,
            formErrors: h,
            transitionState: m,
            loading: v,
            error: E,
            onChange: p,
            onSave: N,
            onClose: C,
            createdEvent: y,
        } = e,
        b = (0, A.GV)(),
        S = s.useRef(n),
        I = !(0, r.isEqual)(S.current, n),
        T = s.useMemo(
            () => [
                {
                    slideId: 0,
                    label: z.intl.string(z.t["56QlKS"]),
                    valid: null == h.entity,
                    userErrorMessage: h.entity,
                },
                {
                    slideId: 1,
                    label: z.intl.string(z.t["w5/ntT"]),
                    valid: null == h.schedule && null == h.topic && (!x || I),
                    userErrorMessage: h.schedule,
                },
                { slideId: 2, label: z.intl.string(z.t["8aJzT4"]), valid: !0 },
            ],
            [h, x, I],
        ),
        R = Object.keys(B).length,
        M = (0, f.Fd)(n),
        P = (e) => Math.max(0, Math.min(e, R - 1)),
        [U, F] = s.useState(+!!M),
        [w, O] = s.useState(!1),
        H = s.useMemo(
            () =>
                T.slice(0, U + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [T, U],
        ),
        Y = U >= T.length ? 3 : T[P(U)].slideId,
        q = 3 === Y;
    (0, _.N)((e) => e.onUpdateCanCloseModal)(q);
    let Q = (0, a.bG)([g.A], () => g.A.useReducedMotion),
        W = s.useRef(null),
        Z = (e) => {
            O(!1), F(P(e));
        },
        J = s.useRef(Z);
    s.useEffect(() => {
        J.current = Z;
    }),
        s.useEffect(() => {
            y?.id != null && J.current(3);
        }, [y?.id]);
    let $ = () => {
            H && (2 === Y ? N() : q ? C() : Z(U + 1));
        },
        K = () => {
            Z(U - 1);
        },
        ee = z.intl.string(z.t.PDTjLN);
    return (
        2 === Y && (ee = x ? z.intl.string(z.t.e5VEcE) : z.intl.string(z.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: m,
            "aria-labelledby": b,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !Q && q ? (0, i.jsx)(X, { modal: W.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: V.Qs,
                    scrollerRef: W,
                    "data-migration-pending": !0,
                    children: [
                        !q &&
                            (0, i.jsx)(j.A, {
                                steps: T.map((e) => e.label),
                                stepIndex: U,
                                onClick: (e) => {
                                    e < U ? K() : e > U && $();
                                },
                            }),
                        (0, i.jsxs)(o.t, {
                            activeSlide: Y,
                            width: 440,
                            onSlideReady: (e) => {
                                O(e === Y);
                            },
                            children: [
                                (0, i.jsx)(o.q, {
                                    id: 0,
                                    children: (0, i.jsx)(k.A, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: h.entity,
                                        isSlideReady: w,
                                        onChange: p,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 1,
                                    children: (0, i.jsx)(G.A, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: p,
                                        error: E,
                                        validationErrorMessage: h.schedule,
                                        isSlideReady: w,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 2,
                                    children: (0, i.jsx)(D.A, { guildId: t, guildEvent: n, guildEventId: l, error: E }),
                                }),
                                (0, i.jsx)(o.q, { id: 3, children: (0, i.jsx)(L.A, { onClose: C, event: y }) }),
                            ],
                        }),
                    ],
                }),
                !q &&
                    (0, i.jsxs)(d.jl, {
                        className: V.qr,
                        "data-migration-pending": !0,
                        children: [
                            (0, i.jsxs)("div", {
                                className: V.mG,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        variant: "secondary",
                                        text: z.intl.string(z.t["ETE/oC"]),
                                        onClick: C,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: V.x6,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            text: ee,
                                            onClick: $,
                                            disabled: !H,
                                            loading: v,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== Y &&
                                (0, i.jsx)("div", {
                                    className: V.zt,
                                    children: (0, i.jsx)(u.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: K,
                                        text: z.intl.string(z.t["13/7kX"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function H(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: r, onClose: d } = e;
    (0, a.bG)([p.A], () => p.A.getGuild(t));
    let o = (0, a.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(l), [l]),
        c = (0, a.bG)([E.Ay], () => E.Ay.getDefaultChannel(t), [t]),
        u = (0, I.UZ)(o, c),
        [g, v] = s.useState(u),
        [j] = s.useState((0, I.lc)(o)),
        [A, N] = s.useState(null),
        [_, { loading: k, error: D }] = (0, C.A)(async () => {
            var e;
            let n, i;
            if (null != A) return;
            if (j && null != l) return await y.A.saveEvent(l, g, t), d();
            let s = await y.A.createGuildEvent(g, t);
            return (
                (e = s.body),
                (n = (0, b.K7)(e)),
                null != (i = e.channel_id ?? c?.id) &&
                    m.Ay.createInvite(i, { max_age: F.value, max_uses: w.value }, U.PE1.GUILD_EVENTS),
                n ? N(e) : d(),
                s
            );
        }),
        G = s.useMemo(() => (0, M.A)(g, j), [g, j]);
    return (0, i.jsx)(O, {
        guildId: t,
        guildEvent: g,
        guildEventId: l,
        isEdit: j,
        formErrors: G,
        transitionState: r,
        loading: k,
        error: D,
        onChange: (e) => {
            if (null != e.entityType) {
                let n = (0, T.dy)(e.entityType),
                    [l] = (0, S.kh)(t, n);
                (e.channelId = l?.id ?? null),
                    e.entityType !== P.Ps.EXTERNAL && g.entityType === P.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            v((t) => ({ ...t, ...e }));
        },
        onSave: () => {
            null != g.recurrenceRule && j && (0, R.DS)(o, g)
                ? (0, x.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await n.e("4823").then(n.bind(n, 158954));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: z.intl.string(z.t.BW1Qoh),
                              subtitle: z.intl.string(z.t.aNCYas),
                              confirmText: z.intl.string(z.t.e5VEcE),
                              cancelText: z.intl.string(z.t.oEAioF),
                              onConfirm: _,
                              children: (0, i.jsx)(h.E, {
                                  variant: "text-md/normal",
                                  children: z.intl.format(z.t.RWBa5X, {}),
                              }),
                          });
                  })
                : _();
        },
        onClose: d,
        createdEvent: A,
    });
}
