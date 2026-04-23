l.d(t, { default: () => H });
var n,
    i = l(627968),
    s = l(64700),
    a = l(735438),
    r = l(311907),
    d = l(935462),
    o = l(430690),
    c = l(123292),
    u = l(821609),
    x = l(192308),
    h = l(834730),
    m = l(846293),
    g = l(775602),
    v = l(21161),
    j = l(520467),
    A = l(915089),
    E = l(808728),
    p = l(71393),
    N = l(735547),
    C = l(645034),
    f = l(698441),
    y = l(496092),
    b = l(485394),
    S = l(761836),
    I = l(794782),
    T = l(9448),
    R = l(974930),
    D = l(70456),
    _ = l(105253),
    k = l(692026),
    G = l(816647),
    L = l(300153),
    M = l(505966),
    P = l(988794),
    U = l(652215),
    z = l(985018),
    V = l(780616);
let { INVITE_OPTIONS_7_DAYS: F, INVITE_OPTIONS_UNLIMITED: w } = N.Ay;
var B =
    (((n = B || {})[(n.ENTITY = 0)] = "ENTITY"),
    (n[(n.SETTINGS = 1)] = "SETTINGS"),
    (n[(n.PREVIEW = 2)] = "PREVIEW"),
    (n[(n.SUCCESS = 3)] = "SUCCESS"),
    n);
function O(e) {
    let { modal: t } = e,
        { createMultipleConfetti: l } = s.useContext(v.x);
    return (
        s.useEffect(() => {
            let e = t?.getScrollerNode();
            if (null == e) return;
            let n = e.getBoundingClientRect();
            l(
                {
                    position: {
                        type: "static-random",
                        minValue: { x: n.left - 100, y: n.top - 100 },
                        maxValue: { x: n.left + 100, y: n.top + 100 },
                    },
                    velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: -60, y: -60 } },
                },
                80,
            ),
                l(
                    {
                        position: {
                            type: "static-random",
                            minValue: { x: n.right - 100, y: n.top - 100 },
                            maxValue: { x: n.right + 100, y: n.top + 100 },
                        },
                        velocity: { type: "static-random", minValue: { x: 20, y: -20 }, maxValue: { x: 60, y: -60 } },
                    },
                    80,
                );
        }, [l, t]),
        null
    );
}
function X(e) {
    let {
            guildId: t,
            guildEvent: l,
            guildEventId: n,
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
        S = s.useRef(l),
        I = !(0, a.isEqual)(S.current, l),
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
        M = (0, f.Fd)(l),
        P = (e) => Math.max(0, Math.min(e, R - 1)),
        [U, F] = s.useState(+!!M),
        [w, X] = s.useState(!1),
        H = s.useMemo(
            () =>
                T.slice(0, U + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [T, U],
        ),
        Y = U >= T.length ? 3 : T[P(U)].slideId,
        q = 3 === Y;
    (0, D.N)((e) => e.onUpdateCanCloseModal)(q);
    let Q = (0, r.bG)([g.A], () => g.A.useReducedMotion),
        W = s.useRef(null),
        $ = (e) => {
            X(!1), F(P(e));
        },
        Z = s.useRef($);
    s.useEffect(() => {
        Z.current = $;
    }),
        s.useEffect(() => {
            y?.id != null && Z.current(3);
        }, [y?.id]);
    let J = () => {
            H && (2 === Y ? N() : q ? C() : $(U + 1));
        },
        K = () => {
            $(U - 1);
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
                !Q && q ? (0, i.jsx)(O, { modal: W.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: V.Qs,
                    scrollerRef: W,
                    "data-migration-pending": !0,
                    children: [
                        !q &&
                            (0, i.jsx)(j.A, {
                                steps: T.map((e, t) => ({ label: e.label, disabled: t > U && !H })),
                                stepIndex: U,
                                onClick: (e) => {
                                    e < U ? K() : e > U && J();
                                },
                            }),
                        (0, i.jsxs)(o.t, {
                            activeSlide: Y,
                            width: 440,
                            onSlideReady: (e) => {
                                X(e === Y);
                            },
                            children: [
                                (0, i.jsx)(o.q, {
                                    id: 0,
                                    children: (0, i.jsx)(_.A, {
                                        guildId: t,
                                        guildEvent: l,
                                        validationErrorMessage: h.entity,
                                        isSlideReady: w,
                                        onChange: p,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 1,
                                    children: (0, i.jsx)(G.A, {
                                        guildEvent: l,
                                        guildEventId: n,
                                        guildId: t,
                                        onChange: p,
                                        error: E,
                                        validationErrorMessage: h.schedule,
                                        isSlideReady: w,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 2,
                                    children: (0, i.jsx)(k.A, { guildId: t, guildEvent: l, guildEventId: n, error: E }),
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
                            0 !== Y &&
                                (0, i.jsx)("div", {
                                    className: V.zt,
                                    children: (0, i.jsx)(c.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: K,
                                        text: z.intl.string(z.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: V.mG,
                                children: [
                                    (0, i.jsx)(u.$, {
                                        variant: "secondary",
                                        text: z.intl.string(z.t["ETE/oC"]),
                                        onClick: C,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: V.x6,
                                        children: (0, i.jsx)(u.$, {
                                            variant: "primary",
                                            text: ee,
                                            onClick: J,
                                            disabled: !H,
                                            loading: v,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        })
    );
}
function H(e) {
    let { guildId: t, guildScheduledEventId: n, transitionState: a, onClose: d } = e;
    (0, r.bG)([p.A], () => p.A.getGuild(t));
    let o = (0, r.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(n), [n]),
        c = (0, r.bG)([E.Ay], () => E.Ay.getDefaultChannel(t), [t]),
        u = (0, I.UZ)(o, c),
        [g, v] = s.useState(u),
        [j] = s.useState((0, I.lc)(o)),
        [A, N] = s.useState(null),
        [D, { loading: _, error: k }] = (0, C.A)(async () => {
            var e;
            let l, i;
            if (null != A) return;
            if (j && null != n) return await y.A.saveEvent(n, g, t), d();
            let s = await y.A.createGuildEvent(g, t);
            return (
                (e = s.body),
                (l = (0, b.K7)(e)),
                null != (i = e.channel_id ?? c?.id) &&
                    m.Ay.createInvite(i, { max_age: F.value, max_uses: w.value }, U.PE1.GUILD_EVENTS),
                l ? N(e) : d(),
                s
            );
        }),
        G = s.useMemo(() => (0, M.A)(g, j), [g, j]);
    return (0, i.jsx)(X, {
        guildId: t,
        guildEvent: g,
        guildEventId: n,
        isEdit: j,
        formErrors: G,
        transitionState: a,
        loading: _,
        error: k,
        onChange: (e) => {
            if (null != e.entityType) {
                let l = (0, T.dy)(e.entityType),
                    [n] = (0, S.kh)(t, l);
                (e.channelId = n?.id ?? null),
                    e.entityType !== P.Ps.EXTERNAL && g.entityType === P.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            v((t) => ({ ...t, ...e }));
        },
        onSave: () => {
            null != g.recurrenceRule && j && (0, R.DS)(o, g)
                ? (0, x.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await l.e("4823").then(l.bind(l, 158954));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: z.intl.string(z.t.BW1Qoh),
                              subtitle: z.intl.string(z.t.aNCYas),
                              confirmText: z.intl.string(z.t.e5VEcE),
                              cancelText: z.intl.string(z.t.oEAioF),
                              onConfirm: D,
                              children: (0, i.jsx)(h.E, {
                                  variant: "text-md/normal",
                                  children: z.intl.format(z.t.RWBa5X, {}),
                              }),
                          });
                  })
                : D();
        },
        onClose: d,
        createdEvent: A,
    });
}
