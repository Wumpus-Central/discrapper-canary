n.d(t, { ApplicationCommandShareModal: () => eh });
var l = n(627968),
    i = n(64700),
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
    A = n(734057),
    b = n(71393),
    f = n(403362),
    v = n(264322),
    j = n(545152),
    C = n(398817),
    N = n(465364),
    S = n(291812),
    y = n(34337),
    E = n(885386),
    k = n(816350);
function D(e) {
    let { previewMessage: t } = e,
        n = E.hH.useSetting(),
        { content: a } = (0, N.Ay)(t, { allowHeading: !0, allowLinks: !0 }),
        s = t.attachments.map((e, t) => {
            let n = (0, y.LL)({
                src: e.url,
                containerClassName: k.oz,
                imageContainerClassName: k.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, l.jsx)(i.Fragment, { children: n }, t);
        });
    return (0, l.jsxs)("div", {
        className: k.i1,
        children: [
            (0, l.jsx)("div", { className: k.hD }),
            (0, l.jsxs)("div", {
                className: k.Qs,
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
var M = n(503698),
    L = n.n(M),
    _ = n(989349),
    w = n.n(_),
    P = n(17928),
    T = n(939249),
    F = n(658675),
    z = n(778712),
    G = n(56059),
    I = n(276293),
    H = n(661531),
    q = n(966327),
    R = n(964486),
    U = n(115718),
    B = n(47167),
    O = n(598104),
    Q = n(255266),
    Z = n(72563),
    J = n(95701),
    V = n(576705),
    W = n(290863),
    X = n(222823),
    K = n(994500),
    Y = n(287809),
    $ = n(58703),
    ee = n(427262),
    et = n(652215),
    en = n(790782),
    el = n(375708),
    ei = n(236167);
function ea(e) {
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
        (0, l.jsxs)(T.D, {
            className: L()(ei.HP, { [ei.r9]: o }),
            onClick: h,
            "aria-selected": r,
            "aria-setsize": u,
            "aria-posinset": m,
            children: [
                (0, l.jsxs)("div", {
                    className: ei.D_,
                    children: [
                        (0, l.jsx)("div", { className: ei.P0, children: n }),
                        (0, l.jsxs)("div", {
                            className: ei.WD,
                            children: [
                                (0, l.jsx)(d.E, {
                                    tag: "strong",
                                    className: ei.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                (0, l.jsx)(d.E, {
                                    className: ei.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: ei.kv, children: (0, l.jsx)(F.P, { checked: r }) }),
            ],
        })
    );
}
function es(e) {
    let { user: t, subLabel: n, ...i } = e,
        a = ee.Ay.useName(t),
        s = ee.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, P.bG)([K.A], () => K.A.getNickname(t.id)),
        o = (0, P.bG)([W.A], () => W.A.getStatus(t.id));
    return (0, l.jsx)(ea, {
        ...i,
        icon: (0, l.jsx)(q.A, { "aria-hidden": !0, size: z._3.SIZE_32, user: t, status: o }),
        label: r ?? a,
        subLabel: n ?? s,
    });
}
function er(e) {
    let { channel: t, subLabel: n, ...i } = e,
        a = (0, B.Ay)(t),
        s = (0, Z.i)(t);
    return (0, l.jsx)(ea, {
        ...i,
        icon: (0, l.jsx)(O.A, { "aria-hidden": !0, size: z._3.SIZE_32, channel: t }),
        label: a,
        subLabel: n ?? s,
    });
}
function eo(e) {
    let { channel: t, subLabel: n, ...i } = e,
        a = (0, P.bG)([b.A], () => b.A.getGuild(t?.guild_id)),
        s = (0, B.Ay)(t),
        r = (0, P.bG)([A.A, Y.default, K.A], () => {
            let e = A.A.getChannel(t.parent_id);
            return null == e ? null : (0, B.m1)(e, Y.default, K.A, !1);
        }),
        o = (0, P.bG)([X.Ay], () => X.Ay.lastMessageTimestamp(t.id, en.P.CHANNEL)),
        c = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? G.b : I.N;
        c = (0, l.jsxs)("div", {
            className: ei.vr,
            children: [
                (0, l.jsx)(e, { color: H.A.colors.TEXT_SUBTLE, className: ei.Q9 }),
                (0, l.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.E, {
                                  className: ei.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, l.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, $.Fe)(w()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(ea, {
        ...i,
        icon: (0, l.jsx)(Q.A, { size: Q.q.SMALL_32, guild: a, channel: t }),
        label: s,
        subLabel: n ?? c,
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
                              if (t instanceof J.YB && (0, J.zy)(t.type)) {
                                  if (
                                      null != t.rateLimitPerUser &&
                                      t.rateLimitPerUser > 0 &&
                                      !(V.A.can(et.xBc.MANAGE_CHANNELS, t) || V.A.can(et.xBc.MANAGE_MESSAGES, t))
                                  )
                                      return { label: el.intl.string(el.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !V.A.can(et.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: el.intl.string(el.t.v8MLqz) };
                                  let n = (0, g._5)(t.id);
                                  if (e.id === n.id) return { label: el.intl.string(el.t.mD4gqe) };
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
            return i === U.rD.USER
                ? (0, l.jsx)(es, { user: c, ...h }, d)
                : i === U.rD.GROUP_DM
                  ? (0, l.jsx)(er, { channel: c, ...h }, d)
                  : i === U.rD.TEXT_CHANNEL || i === U.rD.VOICE_CHANNEL
                    ? (0, l.jsx)(eo, { channel: c, ...h }, d)
                    : void (0, f.xb)(i);
        });
    }, [s, a, r, t, o]);
}
var eu = n(293588),
    ed = n(119390);
let em = [x.kc.CHAT],
    ex = () => {
        (0, s.closeModal)(eu.C);
    };
function eh(e) {
    var t;
    let {
            applicationId: n,
            channel: s,
            command: x,
            onClose: C,
            requireLaunchChannel: N,
            onShareResult: S,
            previewMessage: y,
            ...E
        } = e,
        k = i.useMemo(() => (null == s ? null : (0, g._5)(s.id)), [s]),
        [M, L] = i.useState(!1),
        { commands: _, loading: w } =
            ((t = i.useMemo(() => (null == s ? { type: "contextless" } : { type: "channel", channel: s }), [s])),
            (0, v.ZA)(t, { commandTypes: em }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        P = i.useRef(0),
        [T, F] = i.useState(N && null != k ? [k] : []),
        z = T.length,
        G = z >= 5,
        [I, H] = i.useState(""),
        { results: q, updateSearchText: R } = (0, p.R)({
            selectedDestinations: T,
            originDestination: k ?? void 0,
            includeMissingDMs: !0,
        }),
        U = i.useCallback(
            (e) => {
                H(e), R(e);
            },
            [R],
        ),
        B = i.useCallback(() => (S(!1), C()), [S, C]),
        [O] = (0, h.A)([n]),
        Q = i.useCallback(() => {
            H("");
        }, [H]),
        Z = i.useRef(null);
    i.useEffect(() => {
        "" === I && Z.current?.focus();
    }, [I]);
    let J = i.useCallback(
            (e) => {
                F((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return G ? t : (H(""), R(""), (P.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (P.current += 1), l;
                });
            },
            [G, R],
        ),
        [V, W] = i.useMemo(() => {
            if (w) return [null, !1];
            let e = _.find((e) => e.untranslatedName === x.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [x, _, w]),
        X = i.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === V) return;
                L(!0);
                let n = (await Promise.all(e.map(g.pk))).filter(f.Vq);
                t && (S(!0), ex()),
                    n.forEach(async (e) => {
                        let t = A.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                x.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            l = b.A.getGuild(t?.guild_id);
                        null != (await (0, j.A)({ command: V, optionValues: n, context: { channel: t, guild: l } })) &&
                            (0, r.P0)((0, o.o)(el.intl.string(el.t["5WjJcl"]), c.Ck.MESSAGE));
                    }),
                    S(!0),
                    ex();
            },
            [S, V, x.options],
        ),
        K = i.useCallback(() => {
            X(T, { closeAfterSend: !0 });
        }, [X, T]);
    if (w)
        return (0, l.jsx)(a.Modal, {
            title: el.intl.string(el.t.fuFvwx),
            "aria-label": el.intl.string(el.t.fuFvwx),
            transitionState: E.transitionState,
            onClose: C,
            actions: [],
            children: (0, l.jsx)(u.y, { className: ei.dc }),
        });
    if (W)
        return (0, l.jsx)(a.Modal, {
            title: el.intl.string(el.t.fuFvwx),
            "aria-label": el.intl.string(el.t.fuFvwx),
            transitionState: E.transitionState,
            onClose: C,
            actions: [{ text: el.intl.string(el.t.cpT0Cq), onClick: C, variant: "primary" }],
            children: el.intl.string(el.t.yAk8ZT),
        });
    let Y =
            q.length > 0
                ? (0, l.jsx)(ec, {
                      rowData: q,
                      handleToggleDestination: J,
                      selectedDestinations: T,
                      disableSelection: G,
                      originDestination: k,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: ei.BJ, src: ed, alt: "" }),
                          (0, l.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: el.intl.string(el.t.V6nAfF),
                          }),
                      ],
                  }),
        $ = el.intl.format(el.t.hajTkz, { appName: O?.name });
    null == O && ($ = el.intl.string(el.t.fuFvwx));
    let ee = el.intl.format(el.t["DF+q2l"], { appName: O?.name });
    return (
        G && (ee = el.intl.format(el.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(a.Modal, {
            title: $.toString(),
            subtitle: ee,
            "aria-label": $.toString(),
            transitionState: E.transitionState,
            onClose: B,
            size: "md",
            actions: [
                { text: el.intl.string(el.t.cpT0Cq), onClick: B, variant: "secondary" },
                { text: el.intl.string(el.t.TXNS7S), onClick: K, disabled: 0 === z || M, variant: "primary" },
            ],
            preview: void 0 !== y ? (0, l.jsx)(D, { previewMessage: y }) : null,
            input: (0, l.jsx)(m.I, {
                ref: Z,
                query: I,
                onChange: U,
                onClear: Q,
                placeholder: el.intl.string(el.t["5h0QOP"]),
                "aria-label": el.intl.string(el.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: Y,
        })
    );
}
