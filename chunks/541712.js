n.d(t, { ApplicationCommandShareModal: () => eg });
var i = n(477900),
    l = n(582128),
    a = n(189213),
    s = n(192308),
    r = n(691540),
    c = n(857250),
    o = n(97483),
    u = n(289873),
    d = n(834730),
    m = n(683438),
    x = n(155718),
    h = n(429913),
    g = n(446244),
    p = n(151054),
    b = n(734057),
    f = n(71393),
    A = n(403362),
    v = n(264322),
    j = n(545152),
    C = n(429987),
    N = n(521981),
    S = n(438729),
    y = n(85935),
    k = n(885386),
    D = n(28905);
function E(e) {
    let { previewMessage: t } = e,
        n = k.hH.useSetting(),
        { content: a } = (0, N.Ay)(t, { allowHeading: !0, allowLinks: !0 }),
        s = t.attachments.map((e, t) => {
            let n = (0, y.LL)({
                src: e.url,
                containerClassName: D.oz,
                imageContainerClassName: D.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, i.jsx)(l.Fragment, { children: n }, t);
        });
    return (0, i.jsxs)("div", {
        className: D.i1,
        children: [
            (0, i.jsx)("div", { className: D.hD }),
            (0, i.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, i.jsx)(S.Ay, { message: t, content: a, compact: n }),
                    s,
                    t.components.length > 0
                        ? (0, i.jsx)(C.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
var w = n(503698),
    L = n.n(w),
    P = n(536637),
    T = n.n(P),
    _ = n(17928),
    F = n(939249),
    M = n(658675),
    z = n(778712),
    I = n(56059),
    G = n(276293),
    H = n(661531),
    q = n(966327),
    R = n(964486),
    U = n(115718),
    O = n(47167),
    Q = n(960850),
    B = n(598104),
    Z = n(255266),
    J = n(72563),
    V = n(95701),
    W = n(576705),
    X = n(290863),
    K = n(573163),
    Y = n(994500),
    $ = n(287809),
    ee = n(58703),
    et = n(427262),
    en = n(652215),
    ei = n(790782),
    el = n(375708),
    ea = n(311356);
function es(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: s,
            selected: r,
            disabled: c,
            onPressDestination: o,
            "aria-setsize": u,
            "aria-posinset": m,
        } = e,
        x = l.useRef(!1),
        h = l.useCallback(() => {
            c || o?.(t);
        }, [o, c, t]);
    return (
        (0, R.l0)(() => () => {
            x.current && ((x.current = !1), o?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, i.jsxs)(F.D, {
            className: L()(ea.HP, { [ea.r9]: c }),
            onClick: h,
            "aria-selected": r,
            "aria-setsize": u,
            "aria-posinset": m,
            children: [
                (0, i.jsxs)("div", {
                    className: ea.D_,
                    children: [
                        (0, i.jsx)("div", { className: ea.P0, children: n }),
                        (0, i.jsxs)("div", {
                            className: ea.WD,
                            children: [
                                (0, i.jsx)(d.E, {
                                    tag: "strong",
                                    className: ea.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                (0, i.jsx)(d.E, {
                                    className: ea.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: ea.kv, children: (0, i.jsx)(M.P, { checked: r }) }),
            ],
        })
    );
}
function er(e) {
    let { user: t, subLabel: n, ...l } = e,
        a = et.Ay.useName(t),
        s = et.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, _.bG)([Y.A], () => Y.A.getNickname(t.id)),
        c = (0, _.bG)([X.A], () => X.A.getStatus(t.id));
    return (0, i.jsx)(es, {
        ...l,
        icon: (0, i.jsx)(q.A, { "aria-hidden": !0, size: z._3.SIZE_32, user: t, status: c }),
        label: r ?? a,
        subLabel: n ?? s,
    });
}
function ec(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, O.Ay)(t),
        s = (0, J.i)(t);
    return (0, i.jsx)(es, {
        ...l,
        icon: (0, i.jsx)(B.A, { "aria-hidden": !0, size: z._3.SIZE_32, channel: t }),
        label: a,
        subLabel: n ?? s,
    });
}
function eo(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, _.bG)([f.A], () => f.A.getGuild(t?.guild_id)),
        s = (0, O.Ay)(t),
        r = (0, _.bG)([b.A, $.default, Y.A], () => {
            let e = b.A.getChannel(t.parent_id);
            return null == e ? null : (0, O.m1)(e, $.default, Y.A, !1);
        }),
        c = (0, _.bG)([K.Ay], () => K.Ay.lastMessageTimestamp(t.id, ei.P.CHANNEL)),
        o = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? I.b : G.N;
        o = (0, i.jsxs)("div", {
            className: ea.vr,
            children: [
                (0, i.jsx)(e, { color: H.A.colors.TEXT_SUBTLE, className: ea.Q9 }),
                (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.E, {
                                  className: ea.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, i.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, ee.Fe)(T()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsx)(es, {
        ...l,
        icon: (0, i.jsx)(Z.A, { size: Z.q.SMALL_32, guild: a, channel: t }),
        label: s,
        subLabel: n ?? o,
    });
}
function eu(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: a,
            disableSelection: s,
            originDestination: r,
        } = e,
        c = l.useMemo(() => n?.map(g.I) ?? [], [n]);
    return l.useMemo(() => {
        let e = t.filter((e) => e.type !== U.rD.HEADER);
        return e.map((t, n) => {
            let { type: l, record: o } = t,
                u = l === U.rD.USER ? { type: "user", id: o.id } : { type: "channel", id: o.id },
                d = (0, g.I)(u),
                m =
                    null != r
                        ? (function (e, t) {
                              if (t instanceof V.YB && (0, V.zy)(t.type)) {
                                  if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(0, Q.F3)(t))
                                      return { label: el.intl.string(el.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !W.A.can(en.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: el.intl.string(el.t.v8MLqz) };
                                  let n = (0, g._5)(t.id);
                                  if (e.id === n.id) return { label: el.intl.string(el.t.mD4gqe) };
                              }
                          })(r, o)
                        : null,
                x = c.includes(d),
                h = {
                    destination: u,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (s && !x) || null != m,
                    selected: x,
                    onPressDestination: a,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            switch (l) {
                case U.rD.USER:
                    return (0, i.jsx)(er, { user: o, ...h }, d);
                case U.rD.GROUP_DM:
                    return (0, i.jsx)(ec, { channel: o, ...h }, d);
                case U.rD.TEXT_CHANNEL:
                case U.rD.VOICE_CHANNEL:
                    return (0, i.jsx)(eo, { channel: o, ...h }, d);
                default:
                    return (0, A.xb)(l);
            }
        });
    }, [s, a, r, t, c]);
}
var ed = n(293588),
    em = n(119390);
let ex = [x.kc.CHAT];
function eh() {
    (0, s.closeModal)(ed.C);
}
function eg(e) {
    var t;
    let {
            applicationId: n,
            channel: s,
            command: x,
            onClose: C,
            requireLaunchChannel: N,
            onShareResult: S,
            previewMessage: y,
            ...k
        } = e,
        D = l.useMemo(() => (null == s ? null : (0, g._5)(s.id)), [s]),
        [w, L] = l.useState(!1),
        { commands: P, loading: T } =
            ((t = l.useMemo(() => (null == s ? { type: "contextless" } : { type: "channel", channel: s }), [s])),
            (0, v.ZA)(t, { commandTypes: ex }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        _ = l.useRef(0),
        [F, M] = l.useState(N && null != D ? [D] : []),
        z = F.length,
        I = z >= 5,
        [G, H] = l.useState(""),
        { results: q, updateSearchText: R } = (0, p.R)({
            selectedDestinations: F,
            originDestination: D ?? void 0,
            includeMissingDMs: !0,
        }),
        U = l.useCallback(
            (e) => {
                (H(e), R(e));
            },
            [R],
        ),
        O = l.useCallback(() => (S(!1), C()), [S, C]),
        [Q] = (0, h.A)([n]),
        B = l.useCallback(() => {
            H("");
        }, [H]),
        Z = l.useRef(null);
    l.useEffect(() => {
        "" === G && Z.current?.focus();
    }, [G]);
    let J = l.useCallback(
            (e) => {
                M((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: i } = t;
                        return n === e.type && i === e.id;
                    });
                    if (-1 === n) return I ? t : (H(""), R(""), (_.current += 1), [e, ...t]);
                    let i = [...t];
                    return (i.splice(n, 1), (_.current += 1), i);
                });
            },
            [I, R],
        ),
        [V, W] = l.useMemo(() => {
            if (T) return [null, !1];
            let e = P.find((e) => e.untranslatedName === x.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [x, P, T]),
        X = l.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === V) return;
                L(!0);
                let n = (await Promise.all(e.map(g.pk))).filter(A.Vq);
                (t && (S(!0), eh()),
                    n.forEach(async (e) => {
                        let t = b.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                x.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            i = f.A.getGuild(t?.guild_id);
                        null != (await (0, j.A)({ command: V, optionValues: n, context: { channel: t, guild: i } })) &&
                            (0, r.P0)((0, c.o)(el.intl.string(el.t["5WjJcl"]), o.Ck.MESSAGE));
                    }),
                    S(!0),
                    eh());
            },
            [S, V, x.options],
        ),
        K = l.useCallback(() => {
            X(F, { closeAfterSend: !0 });
        }, [X, F]);
    if (T)
        return (0, i.jsx)(a.a, {
            title: el.intl.string(el.t.fuFvwx),
            "aria-label": el.intl.string(el.t.fuFvwx),
            transitionState: k.transitionState,
            onClose: C,
            actions: [],
            children: (0, i.jsx)(u.y, { className: ea.dc }),
        });
    if (W)
        return (0, i.jsx)(a.a, {
            title: el.intl.string(el.t.fuFvwx),
            "aria-label": el.intl.string(el.t.fuFvwx),
            transitionState: k.transitionState,
            onClose: C,
            actions: [{ text: el.intl.string(el.t.cpT0Cq), onClick: C, variant: "primary" }],
            children: el.intl.string(el.t.yAk8ZT),
        });
    let Y =
            q.length > 0
                ? (0, i.jsx)(eu, {
                      rowData: q,
                      handleToggleDestination: J,
                      selectedDestinations: F,
                      disableSelection: I,
                      originDestination: D,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("img", { className: ea.BJ, src: em, alt: "" }),
                          (0, i.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: el.intl.string(el.t.V6nAfF),
                          }),
                      ],
                  }),
        $ = el.intl.format(el.t.hajTkz, { appName: Q?.name });
    null == Q && ($ = el.intl.string(el.t.fuFvwx));
    let ee = el.intl.format(el.t["DF+q2l"], { appName: Q?.name });
    return (
        I && (ee = el.intl.format(el.t["/KhyPe"], { count: 5 })),
        (0, i.jsx)(a.a, {
            title: $.toString(),
            subtitle: ee,
            "aria-label": $.toString(),
            transitionState: k.transitionState,
            onClose: O,
            size: "md",
            actions: [
                { text: el.intl.string(el.t.cpT0Cq), onClick: O, variant: "secondary" },
                { text: el.intl.string(el.t.TXNS7S), onClick: K, disabled: 0 === z || w, variant: "primary" },
            ],
            preview: void 0 !== y ? (0, i.jsx)(E, { previewMessage: y }) : null,
            input: (0, i.jsx)(m.I, {
                ref: Z,
                query: G,
                onChange: U,
                onClear: B,
                placeholder: el.intl.string(el.t["5h0QOP"]),
                "aria-label": el.intl.string(el.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: Y,
        })
    );
}
