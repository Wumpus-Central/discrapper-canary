n.d(t, { default: () => w });
var l,
    i = n(627968),
    s = n(64700),
    a = n(735438),
    r = n(311907),
    d = n(397927),
    c = n(846293),
    o = n(775602),
    u = n(21161),
    x = n(520467),
    h = n(915089),
    m = n(808728),
    g = n(71393),
    v = n(735547),
    j = n(645034),
    A = n(698441),
    N = n(496092),
    f = n(485394),
    E = n(761836),
    p = n(794782),
    C = n(9448),
    T = n(974930),
    y = n(70456),
    b = n(105253),
    I = n(692026),
    S = n(816647),
    G = n(300153),
    k = n(505966),
    _ = n(988794),
    R = n(652215),
    D = n(985018),
    M = n(643637);
let { INVITE_OPTIONS_7_DAYS: P, INVITE_OPTIONS_UNLIMITED: L } = v.Ay;
var z =
    (((l = z || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function U(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = s.useContext(u.x);
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
function V(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            isEdit: c,
            formErrors: u,
            transitionState: m,
            loading: g,
            error: v,
            onChange: j,
            onSave: N,
            onClose: f,
            createdEvent: E,
        } = e,
        p = (0, h.GV)(),
        C = s.useRef(n),
        T = !(0, a.isEqual)(C.current, n),
        k = s.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.intl.string(D.t["56QlKS"]),
                    valid: null == u.entity,
                    userErrorMessage: u.entity,
                },
                {
                    slideId: 1,
                    label: D.intl.string(D.t["w5/ntT"]),
                    valid: null == u.schedule && null == u.topic && (!c || T),
                    userErrorMessage: u.schedule,
                },
                { slideId: 2, label: D.intl.string(D.t["8aJzT4"]), valid: !0 },
            ],
            [u, c, T],
        ),
        _ = Object.keys(z).length,
        R = (0, A.Fd)(n),
        P = (e) => Math.max(0, Math.min(e, _ - 1)),
        [L, V] = s.useState(+!!R),
        [w, F] = s.useState(!1),
        B = s.useMemo(
            () =>
                k
                    .slice(0, L + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [k, L],
        ),
        O = L >= k.length ? 3 : k[P(L)].slideId,
        H = 3 === O;
    (0, y.N)((e) => e.onUpdateCanCloseModal)(H);
    let X = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        Y = s.useRef(null),
        q = (e) => {
            F(!1), V(P(e));
        },
        J = s.useRef(q);
    s.useEffect(() => {
        J.current = q;
    }),
        s.useEffect(() => {
            E?.id != null && J.current(3);
        }, [E?.id]);
    let W = () => {
            B && (2 === O ? N() : H ? f() : q(L + 1));
        },
        Q = () => {
            q(L - 1);
        },
        K = D.intl.string(D.t.PDTjLN);
    return (
        2 === O && (K = c ? D.intl.string(D.t.e5VEcE) : D.intl.string(D.t["60lJ0C"])),
        (0, i.jsxs)(d.EOs, {
            transitionState: m,
            "aria-labelledby": p,
            size: d.rIJ.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !X && H ? (0, i.jsx)(U, { modal: Y.current }) : null,
                (0, i.jsxs)(d.$mQ, {
                    className: M.Qs,
                    scrollerRef: Y,
                    "data-migration-pending": !0,
                    children: [
                        !H &&
                            (0, i.jsx)(x.A, {
                                steps: k.map((e) => e.label),
                                stepIndex: L,
                                onClick: (e) => {
                                    e < L ? Q() : e > L && W();
                                },
                            }),
                        (0, i.jsxs)(d.tN_, {
                            activeSlide: O,
                            width: 440,
                            onSlideReady: (e) => {
                                F(e === O);
                            },
                            children: [
                                (0, i.jsx)(d.q7S, {
                                    id: 0,
                                    children: (0, i.jsx)(b.A, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: u.entity,
                                        isSlideReady: w,
                                        onChange: j,
                                    }),
                                }),
                                (0, i.jsx)(d.q7S, {
                                    id: 1,
                                    children: (0, i.jsx)(S.A, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: j,
                                        error: v,
                                        validationErrorMessage: u.schedule,
                                        isSlideReady: w,
                                    }),
                                }),
                                (0, i.jsx)(d.q7S, {
                                    id: 2,
                                    children: (0, i.jsx)(I.A, { guildId: t, guildEvent: n, guildEventId: l, error: v }),
                                }),
                                (0, i.jsx)(d.q7S, { id: 3, children: (0, i.jsx)(G.A, { onClose: f, event: E }) }),
                            ],
                        }),
                    ],
                }),
                !H &&
                    (0, i.jsxs)(d.jlY, {
                        className: M.qr,
                        "data-migration-pending": !0,
                        children: [
                            (0, i.jsxs)("div", {
                                className: M.mG,
                                children: [
                                    (0, i.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: D.intl.string(D.t["ETE/oC"]),
                                        onClick: f,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: M.x6,
                                        children: (0, i.jsx)(d.Button, {
                                            variant: "primary",
                                            text: K,
                                            onClick: W,
                                            disabled: !B,
                                            loading: g,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== O &&
                                (0, i.jsx)("div", {
                                    className: M.zt,
                                    children: (0, i.jsx)(d.QWc, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: Q,
                                        text: D.intl.string(D.t["13/7kX"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function w(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: a, onClose: o } = e;
    (0, r.bG)([g.A], () => g.A.getGuild(t));
    let u = (0, r.bG)([A.Ay], () => A.Ay.getGuildScheduledEvent(l), [l]),
        x = (0, r.bG)([m.Ay], () => m.Ay.getDefaultChannel(t), [t]),
        h = (0, p.UZ)(u, x),
        [v, y] = s.useState(h),
        [b] = s.useState((0, p.lc)(u)),
        [I, S] = s.useState(null),
        [G, { loading: M, error: z }] = (0, j.A)(async () => {
            var e;
            let n, i;
            if (null != I) return;
            if (b && null != l) return await N.A.saveEvent(l, v, t), o();
            let s = await N.A.createGuildEvent(v, t);
            return (
                (e = s.body),
                (n = (0, f.K7)(e)),
                null != (i = e.channel_id ?? x?.id) &&
                    c.Ay.createInvite(i, { max_age: P.value, max_uses: L.value }, R.PE1.GUILD_EVENTS),
                n ? S(e) : o(),
                s
            );
        }),
        U = s.useMemo(() => (0, k.A)(v, b), [v, b]);
    return (0, i.jsx)(V, {
        guildId: t,
        guildEvent: v,
        guildEventId: l,
        isEdit: b,
        formErrors: U,
        transitionState: a,
        loading: M,
        error: z,
        onChange: (e) => {
            if (null != e.entityType) {
                let n = (0, C.dy)(e.entityType),
                    [l] = (0, E.kh)(t, n);
                (e.channelId = l?.id ?? null),
                    e.entityType !== _.Ps.EXTERNAL && v.entityType === _.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            y((t) => ({ ...t, ...e }));
        },
        onSave: () => {
            null != v.recurrenceRule && b && (0, T.DS)(u, v)
                ? (0, d.mMO)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: D.intl.string(D.t.BW1Qoh),
                              subtitle: D.intl.string(D.t.aNCYas),
                              confirmText: D.intl.string(D.t.e5VEcE),
                              cancelText: D.intl.string(D.t.oEAioF),
                              onConfirm: G,
                              children: (0, i.jsx)(d.Text, {
                                  variant: "text-md/normal",
                                  children: D.intl.format(D.t.RWBa5X, {}),
                              }),
                          });
                  })
                : G();
        },
        onClose: o,
        createdEvent: I,
    });
}
