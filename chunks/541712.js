n.d(t, { ApplicationCommandShareModal: () => ef });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(192308),
    r = n(691540),
    u = n(857250),
    o = n(97483),
    c = n(289873),
    d = n(834730),
    m = n(892547),
    h = n(155718),
    f = n(429913),
    g = n(223863),
    b = n(151054),
    x = n(734057),
    p = n(71393),
    A = n(403362),
    _ = n(264322),
    v = n(545152),
    S = n(398817),
    y = n(465364),
    C = n(291812),
    j = n(34337),
    N = n(253932),
    L = n(816350);
function E(e) {
    let { previewMessage: t } = e,
        n = N.hH.useSetting(),
        { content: s } = (0, y.Ay)(t, { allowHeading: !0, allowLinks: !0 }),
        a = t.attachments.map((e, t) => {
            let n = (0, j.LL)({
                src: e.url,
                containerClassName: L.oz,
                imageContainerClassName: L.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, l.jsx)(i.Fragment, { children: n }, t);
        });
    return (0, l.jsxs)("div", {
        className: L.i1,
        children: [
            (0, l.jsx)("div", { className: L.hD }),
            (0, l.jsxs)("div", {
                className: L.Qs,
                children: [
                    (0, l.jsx)(C.Ay, { message: t, content: s, compact: n }),
                    a,
                    t.components.length > 0
                        ? (0, l.jsx)(S.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
var k = n(503698),
    D = n.n(k),
    M = n(989349),
    P = n.n(M),
    w = n(17928),
    T = n(939249),
    I = n(658675),
    q = n(778712),
    F = n(56059),
    G = n(276293),
    R = n(661531),
    z = n(966327),
    H = n(964486),
    U = n(115718),
    W = n(47167),
    B = n(598104),
    O = n(255266),
    Q = n(72563),
    J = n(95701),
    V = n(576705),
    K = n(290863),
    Y = n(222823),
    Z = n(994500),
    X = n(287809),
    $ = n(58703),
    ee = n(427262),
    et = n(652215),
    en = n(790782),
    el = n(985018),
    ei = n(236167);
function es(e) {
    let {
            destination: t,
            icon: n,
            label: s,
            subLabel: a,
            selected: r,
            disabled: u,
            onPressDestination: o,
            "aria-setsize": c,
            "aria-posinset": m,
        } = e,
        h = i.useRef(!1),
        f = i.useCallback(() => {
            u || o?.(t);
        }, [o, u, t]);
    return (
        (0, H.l0)(() => () => {
            h.current && ((h.current = !1), o?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, l.jsxs)(T.D, {
            className: D()(ei.HP, { [ei.r9]: u }),
            onClick: f,
            "aria-selected": r,
            "aria-setsize": c,
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
                                    children: s,
                                }),
                                (0, l.jsx)(d.E, {
                                    className: ei.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: ei.kv, children: (0, l.jsx)(I.P, { checked: r }) }),
            ],
        })
    );
}
function ea(e) {
    let { user: t, subLabel: n, ...i } = e,
        s = ee.Ay.useName(t),
        a = ee.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, w.bG)([Z.A], () => Z.A.getNickname(t.id)),
        u = (0, w.bG)([K.A], () => K.A.getStatus(t.id));
    return (0, l.jsx)(es, {
        ...i,
        icon: (0, l.jsx)(z.A, { "aria-hidden": !0, size: q._3.SIZE_32, user: t, status: u }),
        label: r ?? s,
        subLabel: n ?? a,
    });
}
function er(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, W.Ay)(t),
        a = (0, Q.i)(t);
    return (0, l.jsx)(es, {
        ...i,
        icon: (0, l.jsx)(B.A, { "aria-hidden": !0, size: q._3.SIZE_32, channel: t }),
        label: s,
        subLabel: n ?? a,
    });
}
function eu(e) {
    let { channel: t, subLabel: n, ...i } = e,
        s = (0, w.bG)([p.A], () => p.A.getGuild(t?.guild_id)),
        a = (0, W.Ay)(t),
        r = (0, w.bG)([x.A, X.default, Z.A], () => {
            let e = x.A.getChannel(t.parent_id);
            return null == e ? null : (0, W.m1)(e, X.default, Z.A, !1);
        }),
        u = (0, w.bG)([Y.Ay], () => Y.Ay.lastMessageTimestamp(t.id, en.P.CHANNEL)),
        o = s?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? F.b : G.N;
        o = (0, l.jsxs)("div", {
            className: ei.vr,
            children: [
                (0, l.jsx)(e, { color: R.A.colors.TEXT_SUBTLE, className: ei.Q9 }),
                (0, l.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != u
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.E, {
                                  className: ei.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, l.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, $.Fe)(P()(u)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)(es, {
        ...i,
        icon: (0, l.jsx)(O.A, { size: O.q.SMALL_32, guild: s, channel: t }),
        label: a,
        subLabel: n ?? o,
    });
}
function eo(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: s,
            disableSelection: a,
            originDestination: r,
        } = e,
        u = i.useMemo(() => n?.map(g.I) ?? [], [n]);
    return i.useMemo(() => {
        let e = t.filter((e) => e.type !== U.rD.HEADER);
        return e.map((t, n) => {
            let { type: i, record: o } = t,
                c = i === U.rD.USER ? { type: "user", id: o.id } : { type: "channel", id: o.id },
                d = (0, g.I)(c),
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
                          })(r, o)
                        : null,
                h = u.includes(d),
                f = {
                    destination: c,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (a && !h) || null != m,
                    selected: h,
                    onPressDestination: s,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return i === U.rD.USER
                ? (0, l.jsx)(ea, { user: o, ...f }, d)
                : i === U.rD.GROUP_DM
                  ? (0, l.jsx)(er, { channel: o, ...f }, d)
                  : i === U.rD.TEXT_CHANNEL || i === U.rD.VOICE_CHANNEL
                    ? (0, l.jsx)(eu, { channel: o, ...f }, d)
                    : void (0, A.xb)(i);
        });
    }, [a, s, r, t, u]);
}
var ec = n(293588),
    ed = n(119390);
let em = [h.kc.CHAT],
    eh = () => {
        (0, a.closeModal)(ec.C);
    };
function ef(e) {
    var t;
    let {
            applicationId: n,
            channel: a,
            command: h,
            onClose: S,
            requireLaunchChannel: y,
            onShareResult: C,
            previewMessage: j,
            ...N
        } = e,
        L = i.useMemo(() => (null == a ? null : (0, g._5)(a.id)), [a]),
        [k, D] = i.useState(!1),
        { commands: M, loading: P } =
            ((t = i.useMemo(() => (null == a ? { type: "contextless" } : { type: "channel", channel: a }), [a])),
            (0, _.ZA)(t, { commandTypes: em }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        w = i.useRef(0),
        [T, I] = i.useState(y && null != L ? [L] : []),
        q = T.length,
        F = q >= 5,
        [G, R] = i.useState(""),
        { results: z, updateSearchText: H } = (0, b.R)({
            selectedDestinations: T,
            originDestination: L ?? void 0,
            includeMissingDMs: !0,
        }),
        U = i.useCallback(
            (e) => {
                R(e), H(e);
            },
            [H],
        ),
        W = i.useCallback(() => (C(!1), S()), [C, S]),
        [B] = (0, f.A)([n]),
        O = i.useCallback(() => {
            R("");
        }, [R]),
        Q = i.useRef(null);
    i.useEffect(() => {
        "" === G && Q.current?.focus();
    }, [G]);
    let J = i.useCallback(
            (e) => {
                I((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return F ? t : (R(""), H(""), (w.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (w.current += 1), l;
                });
            },
            [F, H],
        ),
        [V, K] = i.useMemo(() => {
            if (P) return [null, !1];
            let e = M.find((e) => e.untranslatedName === h.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [h, M, P]),
        Y = i.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === V) return;
                D(!0);
                let n = (await Promise.all(e.map(g.pk))).filter(A.Vq);
                t && (C(!0), eh()),
                    n.forEach(async (e) => {
                        let t = x.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                h.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            l = p.A.getGuild(t?.guild_id);
                        null != (await (0, v.A)({ command: V, optionValues: n, context: { channel: t, guild: l } })) &&
                            (0, r.P0)((0, u.o)(el.intl.string(el.t["5WjJcl"]), o.Ck.MESSAGE));
                    }),
                    C(!0),
                    eh();
            },
            [C, V, h.options],
        ),
        Z = i.useCallback(() => {
            Y(T, { closeAfterSend: !0 });
        }, [Y, T]);
    if (P)
        return (0, l.jsx)(s.Modal, {
            title: el.intl.string(el.t.fuFvwx),
            "aria-label": el.intl.string(el.t.fuFvwx),
            transitionState: N.transitionState,
            onClose: S,
            actions: [],
            children: (0, l.jsx)(c.y, { className: ei.dc }),
        });
    if (K)
        return (0, l.jsx)(s.Modal, {
            title: el.intl.string(el.t.fuFvwx),
            "aria-label": el.intl.string(el.t.fuFvwx),
            transitionState: N.transitionState,
            onClose: S,
            actions: [{ text: el.intl.string(el.t.cpT0Cq), onClick: S, variant: "primary" }],
            children: el.intl.string(el.t.yAk8ZT),
        });
    let X =
            z.length > 0
                ? (0, l.jsx)(eo, {
                      rowData: z,
                      handleToggleDestination: J,
                      selectedDestinations: T,
                      disableSelection: F,
                      originDestination: L,
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
        $ = el.intl.format(el.t.hajTkz, { appName: B?.name });
    null == B && ($ = el.intl.string(el.t.fuFvwx));
    let ee = el.intl.format(el.t["DF+q2l"], { appName: B?.name });
    return (
        F && (ee = el.intl.format(el.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(s.Modal, {
            title: $.toString(),
            subtitle: ee,
            "aria-label": $.toString(),
            transitionState: N.transitionState,
            onClose: W,
            size: "md",
            actions: [
                { text: el.intl.string(el.t.cpT0Cq), onClick: W, variant: "secondary" },
                { text: el.intl.string(el.t.TXNS7S), onClick: Z, disabled: 0 === q || k, variant: "primary" },
            ],
            preview: void 0 !== j ? (0, l.jsx)(E, { previewMessage: j }) : null,
            input: (0, l.jsx)(m.I, {
                ref: Q,
                query: G,
                onChange: U,
                onClear: O,
                placeholder: el.intl.string(el.t["5h0QOP"]),
                "aria-label": el.intl.string(el.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: X,
        })
    );
}
