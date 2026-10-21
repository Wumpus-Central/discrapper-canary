n.d(t, { ApplicationCommandShareModal: () => ex });
var i = n(477900),
    l = n(582128),
    a = n(189213),
    s = n(192308),
    r = n(858899),
    c = n(289873),
    u = n(834730),
    o = n(683438),
    d = n(155718),
    m = n(429913),
    x = n(446244),
    h = n(151054),
    g = n(734057),
    p = n(71393),
    b = n(403362),
    f = n(264322),
    A = n(545152),
    v = n(70540),
    j = n(521981),
    C = n(438729),
    N = n(44788),
    S = n(885386),
    y = n(28905);
function D(e) {
    let { previewMessage: t } = e,
        n = S.hH.useSetting(),
        { content: a } = (0, j.Ay)(t, { allowHeading: !0, allowLinks: !0 }),
        s = t.attachments.map((e, t) => {
            let n = (0, N.LL)({
                src: e.url,
                containerClassName: y.oz,
                imageContainerClassName: y.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, i.jsx)(l.Fragment, { children: n }, t);
        });
    return (0, i.jsxs)("div", {
        className: y.i1,
        children: [
            (0, i.jsx)("div", { className: y.hD }),
            (0, i.jsxs)("div", {
                className: y.Qs,
                children: [
                    (0, i.jsx)(C.Ay, { message: t, content: a, compact: n }),
                    s,
                    t.components.length > 0
                        ? (0, i.jsx)(v.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
var k = n(503698),
    E = n.n(k),
    w = n(536637),
    L = n.n(w),
    P = n(17928),
    T = n(939249),
    _ = n(658675),
    F = n(778712),
    M = n(56059),
    z = n(276293),
    I = n(661531),
    H = n(966327),
    q = n(964486),
    G = n(115718),
    R = n(47167),
    U = n(960850),
    O = n(598104),
    Q = n(255266),
    B = n(72563),
    Z = n(95701),
    J = n(576705),
    V = n(290863),
    W = n(573163),
    X = n(994500),
    K = n(287809),
    Y = n(58703),
    $ = n(427262),
    ee = n(652215),
    et = n(790782),
    en = n(105292),
    ei = n(311356);
function el(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: s,
            selected: r,
            disabled: c,
            onPressDestination: o,
            "aria-setsize": d,
            "aria-posinset": m,
        } = e,
        x = l.useRef(!1),
        h = l.useCallback(() => {
            c || o?.(t);
        }, [o, c, t]);
    return (
        (0, q.l0)(() => () => {
            x.current && ((x.current = !1), o?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, i.jsxs)(T.D, {
            className: E()(ei.HP, { [ei.r9]: c }),
            onClick: h,
            "aria-selected": r,
            "aria-setsize": d,
            "aria-posinset": m,
            children: [
                (0, i.jsxs)("div", {
                    className: ei.D_,
                    children: [
                        (0, i.jsx)("div", { className: ei.P0, children: n }),
                        (0, i.jsxs)("div", {
                            className: ei.WD,
                            children: [
                                (0, i.jsx)(u.E, {
                                    tag: "strong",
                                    className: ei.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                (0, i.jsx)(u.E, {
                                    className: ei.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: ei.kv, children: (0, i.jsx)(_.P, { checked: r }) }),
            ],
        })
    );
}
function ea(e) {
    let { user: t, subLabel: n, ...l } = e,
        a = $.Ay.useName(t),
        s = $.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, P.bG)([X.A], () => X.A.getNickname(t.id)),
        c = (0, P.bG)([V.A], () => V.A.getStatus(t.id));
    return (0, i.jsx)(el, {
        ...l,
        icon: (0, i.jsx)(H.A, { "aria-hidden": !0, size: F._3.SIZE_32, user: t, status: c }),
        label: r ?? a,
        subLabel: n ?? s,
    });
}
function es(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, R.Ay)(t),
        s = (0, B.i)(t);
    return (0, i.jsx)(el, {
        ...l,
        icon: (0, i.jsx)(O.A, { "aria-hidden": !0, size: F._3.SIZE_32, channel: t }),
        label: a,
        subLabel: n ?? s,
    });
}
function er(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, P.bG)([p.A], () => p.A.getGuild(t?.guild_id)),
        s = (0, R.Ay)(t),
        r = (0, P.bG)([g.A, K.default, X.A], () => {
            let e = g.A.getChannel(t.parent_id);
            return null == e ? null : (0, R.m1)(e, K.default, X.A, !1);
        }),
        c = (0, P.bG)([W.Ay], () => W.Ay.lastMessageTimestamp(t.id, et.P.CHANNEL)),
        o = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? M.b : z.N;
        o = (0, i.jsxs)("div", {
            className: ei.vr,
            children: [
                (0, i.jsx)(e, { color: I.A.colors.TEXT_SUBTLE, className: ei.Q9 }),
                (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.E, {
                                  className: ei.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, Y.Fe)(L()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsx)(el, {
        ...l,
        icon: (0, i.jsx)(Q.A, { size: Q.q.SMALL_32, guild: a, channel: t }),
        label: s,
        subLabel: n ?? o,
    });
}
function ec(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: a,
            disableSelection: s,
            originDestination: r,
        } = e,
        c = l.useMemo(() => n?.map(x.I) ?? [], [n]);
    return l.useMemo(() => {
        let e = t.filter((e) => e.type !== G.rD.HEADER);
        return e.map((t, n) => {
            let { type: l, record: u } = t,
                o = l === G.rD.USER ? { type: "user", id: u.id } : { type: "channel", id: u.id },
                d = (0, x.I)(o),
                m =
                    null != r
                        ? (function (e, t) {
                              if (t instanceof Z.YB && (0, Z.zy)(t.type)) {
                                  if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(0, U.F3)(t))
                                      return { label: en.intl.string(en.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !J.A.can(ee.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: en.intl.string(en.t.v8MLqz) };
                                  let n = (0, x._5)(t.id);
                                  if (e.id === n.id) return { label: en.intl.string(en.t.mD4gqe) };
                              }
                          })(r, u)
                        : null,
                h = c.includes(d),
                g = {
                    destination: o,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (s && !h) || null != m,
                    selected: h,
                    onPressDestination: a,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            switch (l) {
                case G.rD.USER:
                    return (0, i.jsx)(ea, { user: u, ...g }, d);
                case G.rD.GROUP_DM:
                    return (0, i.jsx)(es, { channel: u, ...g }, d);
                case G.rD.TEXT_CHANNEL:
                case G.rD.VOICE_CHANNEL:
                    return (0, i.jsx)(er, { channel: u, ...g }, d);
                default:
                    return (0, b.xb)(l);
            }
        });
    }, [s, a, r, t, c]);
}
var eu = n(293588),
    eo = n(119390);
let ed = [d.kc.CHAT];
function em() {
    (0, s.closeModal)(eu.C);
}
function ex(e) {
    var t;
    let {
            applicationId: n,
            channel: s,
            command: d,
            onClose: v,
            requireLaunchChannel: j,
            onShareResult: C,
            previewMessage: N,
            ...S
        } = e,
        y = l.useMemo(() => (null == s ? null : (0, x._5)(s.id)), [s]),
        [k, E] = l.useState(!1),
        { commands: w, loading: L } =
            ((t = l.useMemo(() => (null == s ? { type: "contextless" } : { type: "channel", channel: s }), [s])),
            (0, f.ZA)(t, { commandTypes: ed }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        P = l.useRef(0),
        [T, _] = l.useState(j && null != y ? [y] : []),
        F = T.length,
        M = F >= 5,
        [z, I] = l.useState(""),
        { results: H, updateSearchText: q } = (0, h.R)({
            selectedDestinations: T,
            originDestination: y ?? void 0,
            includeMissingDMs: !0,
        }),
        G = l.useCallback(
            (e) => {
                (I(e), q(e));
            },
            [q],
        ),
        R = l.useCallback(() => (C(!1), v()), [C, v]),
        [U] = (0, m.A)([n]),
        O = l.useCallback(() => {
            I("");
        }, [I]),
        Q = l.useRef(null);
    l.useEffect(() => {
        "" === z && Q.current?.focus();
    }, [z]);
    let B = l.useCallback(
            (e) => {
                _((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: i } = t;
                        return n === e.type && i === e.id;
                    });
                    if (-1 === n) return M ? t : (I(""), q(""), (P.current += 1), [e, ...t]);
                    let i = [...t];
                    return (i.splice(n, 1), (P.current += 1), i);
                });
            },
            [M, q],
        ),
        [Z, J] = l.useMemo(() => {
            if (L) return [null, !1];
            let e = w.find((e) => e.untranslatedName === d.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [d, w, L]),
        V = l.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Z) return;
                E(!0);
                let n = (await Promise.all(e.map(x.pk))).filter(b.Vq);
                (t && (C(!0), em()),
                    n.forEach(async (e) => {
                        let t = g.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                d.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            i = p.A.getGuild(t?.guild_id);
                        null != (await (0, A.A)({ command: Z, optionValues: n, context: { channel: t, guild: i } })) &&
                            (0, r.P0)({ text: en.intl.string(en.t["5WjJcl"]) });
                    }),
                    C(!0),
                    em());
            },
            [C, Z, d.options],
        ),
        W = l.useCallback(() => {
            V(T, { closeAfterSend: !0 });
        }, [V, T]);
    if (L)
        return (0, i.jsx)(a.a, {
            title: en.intl.string(en.t.fuFvwx),
            "aria-label": en.intl.string(en.t.fuFvwx),
            transitionState: S.transitionState,
            onClose: v,
            actions: [],
            children: (0, i.jsx)(c.y, { className: ei.dc }),
        });
    if (J)
        return (0, i.jsx)(a.a, {
            title: en.intl.string(en.t.fuFvwx),
            "aria-label": en.intl.string(en.t.fuFvwx),
            transitionState: S.transitionState,
            onClose: v,
            actions: [{ text: en.intl.string(en.t.cpT0Cq), onClick: v, variant: "primary" }],
            children: en.intl.string(en.t.yAk8ZT),
        });
    let X =
            H.length > 0
                ? (0, i.jsx)(ec, {
                      rowData: H,
                      handleToggleDestination: B,
                      selectedDestinations: T,
                      disableSelection: M,
                      originDestination: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("img", { className: ei.BJ, src: eo, alt: "" }),
                          (0, i.jsx)(u.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: en.intl.string(en.t.V6nAfF),
                          }),
                      ],
                  }),
        K = en.intl.format(en.t.hajTkz, { appName: U?.name });
    null == U && (K = en.intl.string(en.t.fuFvwx));
    let Y = en.intl.format(en.t["DF+q2l"], { appName: U?.name });
    return (
        M && (Y = en.intl.format(en.t["/KhyPe"], { count: 5 })),
        (0, i.jsx)(a.a, {
            title: K.toString(),
            subtitle: Y,
            "aria-label": K.toString(),
            transitionState: S.transitionState,
            onClose: R,
            size: "md",
            actions: [
                { text: en.intl.string(en.t.cpT0Cq), onClick: R, variant: "secondary" },
                { text: en.intl.string(en.t.TXNS7S), onClick: W, disabled: 0 === F || k, variant: "primary" },
            ],
            preview: void 0 !== N ? (0, i.jsx)(D, { previewMessage: N }) : null,
            input: (0, i.jsx)(o.I, {
                ref: Q,
                query: z,
                onChange: G,
                onClear: O,
                placeholder: en.intl.string(en.t["5h0QOP"]),
                "aria-label": en.intl.string(en.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: X,
        })
    );
}
