n.d(t, {
    default: () => V,
}),
    n(896048);
var l,
    r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(311907),
    o = n(397927),
    c = n(846293),
    u = n(775602),
    d = n(21161),
    x = n(520467),
    g = n(915089),
    m = n(808728),
    h = n(71393),
    j = n(735547),
    v = n(645034),
    f = n(698441),
    p = n(496092),
    b = n(485394),
    y = n(761836),
    O = n(794782),
    A = n(9448),
    E = n(974930),
    N = n(70456),
    P = n(105253),
    C = n(692026),
    S = n(816647),
    T = n(300153),
    w = n(505966),
    I = n(988794),
    D = n(652215),
    k = n(985018),
    G = n(643637);

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: _, INVITE_OPTIONS_UNLIMITED: M } = j.Ay;
var L =
    (((l = L || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);

function z(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.x);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            n(
                {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: l.left - 100,
                            y: l.top - 100,
                        },
                        maxValue: {
                            x: l.left + 100,
                            y: l.top + 100,
                        },
                    },
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: -20,
                            y: -20,
                        },
                        maxValue: {
                            x: -60,
                            y: -60,
                        },
                    },
                },
                80,
            ),
                n(
                    {
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100,
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100,
                            },
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20,
                            },
                            maxValue: {
                                x: 60,
                                y: -60,
                            },
                        },
                    },
                    80,
                );
        }, [n, t]),
        null
    );
}

function U(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            isEdit: c,
            formErrors: d,
            transitionState: m,
            loading: h,
            error: j,
            onChange: v,
            onSave: p,
            onClose: b,
            createdEvent: y,
        } = e,
        O = (0, g.GV)(),
        A = i.useRef(n),
        E = !(0, s.isEqual)(A.current, n),
        w = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: k.intl.string(k.t["56QlKS"]),
                    valid: null == d.entity,
                    userErrorMessage: d.entity,
                },
                {
                    slideId: 1,
                    label: k.intl.string(k.t["w5/ntT"]),
                    valid: null == d.schedule && null == d.topic && (!c || E),
                    userErrorMessage: d.schedule,
                },
                {
                    slideId: 2,
                    label: k.intl.string(k.t["8aJzT4"]),
                    valid: !0,
                },
            ],
            [d, c, E],
        ),
        I = Object.keys(L).length,
        D = (0, f.Fd)(n),
        R = (e) => Math.max(0, Math.min(e, I - 1)),
        [_, M] = i.useState(+!!D),
        [U, V] = i.useState(!1),
        F = i.useMemo(
            () =>
                w
                    .slice(0, _ + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [w, _],
        ),
        B = _ >= w.length ? 3 : w[R(_)].slideId,
        H = 3 === B;
    (0, N.N)((e) => e.onUpdateCanCloseModal)(H);
    let X = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        Y = i.useRef(null),
        q = (e) => {
            V(!1), M(R(e));
        },
        K = i.useRef(q);
    i.useEffect(() => {
        K.current = q;
    }),
        i.useEffect(() => {
            (null == y ? void 0 : y.id) != null && K.current(3);
        }, [null == y ? void 0 : y.id]);
    let J = () => {
            F && (2 === B ? p() : H ? b() : q(_ + 1));
        },
        W = () => {
            q(_ - 1);
        },
        Q = k.intl.string(k.t.PDTjLN);
    return (
        2 === B && (Q = c ? k.intl.string(k.t.e5VEcE) : k.intl.string(k.t["60lJ0C"])),
        (0, r.jsxs)(o.EOs, {
            transitionState: m,
            "aria-labelledby": O,
            size: o.rIJ.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !X && H
                    ? (0, r.jsx)(z, {
                          modal: Y.current,
                      })
                    : null,
                (0, r.jsxs)(o.$mQ, {
                    className: G.Qs,
                    scrollerRef: Y,
                    "data-migration-pending": !0,
                    children: [
                        !H &&
                            (0, r.jsx)(x.A, {
                                steps: w.map((e) => e.label),
                                stepIndex: _,
                                onClick: (e) => {
                                    e < _ ? W() : e > _ && J();
                                },
                            }),
                        (0, r.jsxs)(o.tN_, {
                            activeSlide: B,
                            width: 440,
                            onSlideReady: (e) => {
                                V(e === B);
                            },
                            children: [
                                (0, r.jsx)(o.q7S, {
                                    id: 0,
                                    children: (0, r.jsx)(P.A, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: U,
                                        onChange: v,
                                    }),
                                }),
                                (0, r.jsx)(o.q7S, {
                                    id: 1,
                                    children: (0, r.jsx)(S.A, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: v,
                                        error: j,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: U,
                                    }),
                                }),
                                (0, r.jsx)(o.q7S, {
                                    id: 2,
                                    children: (0, r.jsx)(C.A, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: j,
                                    }),
                                }),
                                (0, r.jsx)(o.q7S, {
                                    id: 3,
                                    children: (0, r.jsx)(T.A, {
                                        onClose: b,
                                        event: y,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !H &&
                    (0, r.jsxs)(o.jlY, {
                        className: G.qr,
                        "data-migration-pending": !0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: G.mG,
                                children: [
                                    (0, r.jsx)(o.Button, {
                                        variant: "secondary",
                                        text: k.intl.string(k.t["ETE/oC"]),
                                        onClick: b,
                                    }),
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: G.x6,
                                        children: (0, r.jsx)(o.Button, {
                                            variant: "primary",
                                            text: Q,
                                            onClick: J,
                                            disabled: !F,
                                            loading: h,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== B &&
                                (0, r.jsx)("div", {
                                    className: G.zt,
                                    children: (0, r.jsx)(o.QWc, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: W,
                                        text: k.intl.string(k.t["13/7kX"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}

function V(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: s, onClose: u } = e;
    (0, a.bG)([h.A], () => h.A.getGuild(t));
    let d = (0, a.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(l), [l]),
        x = (0, a.bG)([m.Ay], () => m.Ay.getDefaultChannel(t), [t]),
        g = (0, O.UZ)(d, x),
        [j, N] = i.useState(g),
        [P] = i.useState((0, O.lc)(d)),
        [C, S] = i.useState(null),
        [T, { loading: G, error: L }] = (0, v.A)(async () => {
            var e, n;
            let r, i;
            if (null != C) return;
            if (P && null != l) return await p.A.saveEvent(l, j, t), u();
            let s = await p.A.createGuildEvent(j, t);
            return (
                (e = s.body),
                (r = (0, b.K7)(e)),
                null != (i = null != (n = e.channel_id) ? n : null == x ? void 0 : x.id) &&
                    c.Ay.createInvite(
                        i,
                        {
                            max_age: _.value,
                            max_uses: M.value,
                        },
                        D.PE1.GUILD_EVENTS,
                    ),
                r ? S(e) : u(),
                s
            );
        }),
        z = i.useMemo(() => (0, w.A)(j, P), [j, P]);
    return (0, r.jsx)(U, {
        guildId: t,
        guildEvent: j,
        guildEventId: l,
        isEdit: P,
        formErrors: z,
        transitionState: s,
        loading: G,
        error: L,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let l = (0, A.dy)(e.entityType),
                    [r] = (0, y.kh)(t, l);
                (e.channelId = null != (n = null == r ? void 0 : r.id) ? n : null),
                    e.entityType !== I.Ps.EXTERNAL && j.entityType === I.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            N((t) => R({}, t, e));
        },
        onSave: () => {
            null != j.recurrenceRule && P && (0, E.DS)(d, j)
                ? (0, o.mMO)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
                      return (t) => {
                          var n, l;
                          return (0, r.jsx)(
                              e,
                              ((n = R({}, t)),
                              (l = l =
                                  {
                                      title: k.intl.string(k.t.BW1Qoh),
                                      subtitle: k.intl.string(k.t.aNCYas),
                                      confirmText: k.intl.string(k.t.e5VEcE),
                                      cancelText: k.intl.string(k.t.oEAioF),
                                      onConfirm: T,
                                      children: (0, r.jsx)(o.Text, {
                                          variant: "text-md/normal",
                                          children: k.intl.format(k.t.RWBa5X, {}),
                                      }),
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n),
                          );
                      };
                  })
                : T();
        },
        onClose: u,
        createdEvent: C,
    });
}
