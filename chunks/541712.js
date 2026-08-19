n.d(t, { ApplicationCommandShareModal: () => eg });
var l = n(477900),
    i = n(582128),
    a = n(189213),
    s = n(192308),
    r = n(691540),
    o = n(857250),
    c = n(97483),
    u = n(289873),
    d = n(834730),
    m = n(892547),
    x = n(155718),
    h = n(429913),
    g = n(223863),
    p = n(151054),
    b = n(734057),
    f = n(71393),
    A = n(403362),
    v = n(264322),
    j = n(545152),
    C = n(844789),
    N = n(521981),
    S = n(438729),
    y = n(966245),
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
            return (0, l.jsx)(i.Fragment, { children: n }, t);
        });
    return (0, l.jsxs)("div", {
        className: D.i1,
        children: [
            (0, l.jsx)("div", { className: D.hD }),
            (0, l.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, l.jsx)(S.Ay, { message: t, content: a, compact: n }),
                    s,
                    t.components.length > 0
                        ? (0, l.jsx)(C.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
var w = n(503698),
    L = n.n(w),
    M = n(989349),
    P = n.n(M),
    T = n(17928),
    _ = n(939249),
    F = n(658675),
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
    K = n(568548),
    Y = n(994500),
    $ = n(287809),
    ee = n(58703),
    et = n(427262),
    en = n(652215),
    el = n(790782),
    ei = n(375708),
    ea = n(311356);
function es(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: s,
            selected: r,
            disabled: o,
            onPressDestination: c,
            "aria-setsize": u,
            "aria-posinset": m,
        } = e,
        x = i.useRef(!1),
        h = i.useCallback(() => {
            o || c?.(t);
        }, [c, o, t]);
    return (
        (0, R.l0)(() => () => {
            x.current && ((x.current = !1), c?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, l.jsxs)(_.D, {
            className: L()(ea.HP, { [ea.r9]: o }),
            onClick: h,
            "aria-selected": r,
            "aria-setsize": u,
            "aria-posinset": m,
            children: [
                (0, l.jsxs)("div", {
                    className: ea.D_,
                    children: [
                        (0, l.jsx)("div", { className: ea.P0, children: n }),
                        (0, l.jsxs)("div", {
                            className: ea.WD,
                            children: [
                                (0, l.jsx)(d.E, {
                                    tag: "strong",
                                    className: ea.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                (0, l.jsx)(d.E, {
                                    className: ea.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: ea.kv, children: (0, l.jsx)(F.P, { checked: r }) }),
            ],
        })
    );
}
function er(e) {
    let { user: t, subLabel: n, ...i } = e,
        a = et.Ay.useName(t),
        s = et.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, T.bG)([Y.A], () => Y.A.getNickname(t.id)),
        o = (0, T.bG)([X.A], () => X.A.getStatus(t.id));
    return (0, l.jsx)(es, {
        ...i,
        icon: (0, l.jsx)(q.A, { "aria-hidden": !0, size: z._3.SIZE_32, user: t, status: o }),
        label: r ?? a,
        subLabel: n ?? s,
    });
}
function eo(e) {
    let { channel: t, subLabel: n, ...i } = e,
        a = (0, O.Ay)(t),
        s = (0, J.i)(t);
    return (0, l.jsx)(es, {
        ...i,
        icon: (0, l.jsx)(B.A, { "aria-hidden": !0, size: z._3.SIZE_32, channel: t }),
        label: a,
        subLabel: n ?? s,
    });
}
function ec(e) {
    let { channel: t, subLabel: n, ...i } = e,
        a = (0, T.bG)([f.A], () => f.A.getGuild(t?.guild_id)),
        s = (0, O.Ay)(t),
        r = (0, T.bG)([b.A, $.default, Y.A], () => {
            let e = b.A.getChannel(t.parent_id);
            return null == e ? null : (0, O.m1)(e, $.default, Y.A, !1);
        }),
        o = (0, T.bG)([K.Ay], () => K.Ay.lastMessageTimestamp(t.id, el.P.CHANNEL)),
        c = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? I.b : G.N;
        c = (0, l.jsxs)("div", {
            className: ea.vr,
            children: [
                (0, l.jsx)(e, { color: H.A.colors.TEXT_SUBTLE, className: ea.Q9 }),
                (0, l.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.E, {
                                  className: ea.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, ee.Fe)(P()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(es, {
        ...i,
        icon: (0, l.jsx)(Z.A, { size: Z.q.SMALL_32, guild: a, channel: t }),
        label: s,
        subLabel: n ?? c,
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
        o = i.useMemo(() => n?.map(g.I) ?? [], [n]);
    return i.useMemo(() => {
        let e = t.filter((e) => e.type !== U.rD.HEADER);
        return e.map((t, n) => {
            let { type: i, record: c } = t,
                u = i === U.rD.USER ? { type: "user", id: c.id } : { type: "channel", id: c.id },
                d = (0, g.I)(u),
                m =
                    null != r
                        ? (function (e, t) {
                              if (t instanceof V.YB && (0, V.zy)(t.type)) {
                                  if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(0, Q.F3)(t))
                                      return { label: ei.intl.string(ei.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !W.A.can(en.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: ei.intl.string(ei.t.v8MLqz) };
                                  let n = (0, g._5)(t.id);
                                  if (e.id === n.id) return { label: ei.intl.string(ei.t.mD4gqe) };
                              }
                          })(r, c)
                        : null,
                x = o.includes(d),
                h = {
                    destination: u,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (s && !x) || null != m,
                    selected: x,
                    onPressDestination: a,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            switch (i) {
                case U.rD.USER:
                    return (0, l.jsx)(er, { user: c, ...h }, d);
                case U.rD.GROUP_DM:
                    return (0, l.jsx)(eo, { channel: c, ...h }, d);
                case U.rD.TEXT_CHANNEL:
                case U.rD.VOICE_CHANNEL:
                    return (0, l.jsx)(ec, { channel: c, ...h }, d);
                default:
                    return (0, A.xb)(i);
            }
        });
    }, [s, a, r, t, o]);
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
        D = i.useMemo(() => (null == s ? null : (0, g._5)(s.id)), [s]),
        [w, L] = i.useState(!1),
        { commands: M, loading: P } =
            ((t = i.useMemo(() => (null == s ? { type: "contextless" } : { type: "channel", channel: s }), [s])),
            (0, v.ZA)(t, { commandTypes: ex }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        T = i.useRef(0),
        [_, F] = i.useState(N && null != D ? [D] : []),
        z = _.length,
        I = z >= 5,
        [G, H] = i.useState(""),
        { results: q, updateSearchText: R } = (0, p.R)({
            selectedDestinations: _,
            originDestination: D ?? void 0,
            includeMissingDMs: !0,
        }),
        U = i.useCallback(
            (e) => {
                H(e), R(e);
            },
            [R],
        ),
        O = i.useCallback(() => (S(!1), C()), [S, C]),
        [Q] = (0, h.A)([n]),
        B = i.useCallback(() => {
            H("");
        }, [H]),
        Z = i.useRef(null);
    i.useEffect(() => {
        "" === G && Z.current?.focus();
    }, [G]);
    let J = i.useCallback(
            (e) => {
                F((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return I ? t : (H(""), R(""), (T.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (T.current += 1), l;
                });
            },
            [I, R],
        ),
        [V, W] = i.useMemo(() => {
            if (P) return [null, !1];
            let e = M.find((e) => e.untranslatedName === x.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [x, M, P]),
        X = i.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === V) return;
                L(!0);
                let n = (await Promise.all(e.map(g.pk))).filter(A.Vq);
                t && (S(!0), eh()),
                    n.forEach(async (e) => {
                        let t = b.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                x.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            l = f.A.getGuild(t?.guild_id);
                        null != (await (0, j.A)({ command: V, optionValues: n, context: { channel: t, guild: l } })) &&
                            (0, r.P0)((0, o.o)(ei.intl.string(ei.t["5WjJcl"]), c.Ck.MESSAGE));
                    }),
                    S(!0),
                    eh();
            },
            [S, V, x.options],
        ),
        K = i.useCallback(() => {
            X(_, { closeAfterSend: !0 });
        }, [X, _]);
    if (P)
        return (0, l.jsx)(a.Modal, {
            title: ei.intl.string(ei.t.fuFvwx),
            "aria-label": ei.intl.string(ei.t.fuFvwx),
            transitionState: k.transitionState,
            onClose: C,
            actions: [],
            children: (0, l.jsx)(u.y, { className: ea.dc }),
        });
    if (W)
        return (0, l.jsx)(a.Modal, {
            title: ei.intl.string(ei.t.fuFvwx),
            "aria-label": ei.intl.string(ei.t.fuFvwx),
            transitionState: k.transitionState,
            onClose: C,
            actions: [{ text: ei.intl.string(ei.t.cpT0Cq), onClick: C, variant: "primary" }],
            children: ei.intl.string(ei.t.yAk8ZT),
        });
    let Y =
            q.length > 0
                ? (0, l.jsx)(eu, {
                      rowData: q,
                      handleToggleDestination: J,
                      selectedDestinations: _,
                      disableSelection: I,
                      originDestination: D,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: ea.BJ, src: em, alt: "" }),
                          (0, l.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: ei.intl.string(ei.t.V6nAfF),
                          }),
                      ],
                  }),
        $ = ei.intl.format(ei.t.hajTkz, { appName: Q?.name });
    null == Q && ($ = ei.intl.string(ei.t.fuFvwx));
    let ee = ei.intl.format(ei.t["DF+q2l"], { appName: Q?.name });
    return (
        I && (ee = ei.intl.format(ei.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(a.Modal, {
            title: $.toString(),
            subtitle: ee,
            "aria-label": $.toString(),
            transitionState: k.transitionState,
            onClose: O,
            size: "md",
            actions: [
                { text: ei.intl.string(ei.t.cpT0Cq), onClick: O, variant: "secondary" },
                { text: ei.intl.string(ei.t.TXNS7S), onClick: K, disabled: 0 === z || w, variant: "primary" },
            ],
            preview: void 0 !== y ? (0, l.jsx)(E, { previewMessage: y }) : null,
            input: (0, l.jsx)(m.I, {
                ref: Z,
                query: G,
                onChange: U,
                onClear: B,
                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                "aria-label": ei.intl.string(ei.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: Y,
        })
    );
}
