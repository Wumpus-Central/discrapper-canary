"use strict";
n.d(t, { ApplicationCommandShareModal: () => ep });
var i = n(627968),
    a = n(64700),
    r = n(189213),
    s = n(192308),
    l = n(691540),
    c = n(857250),
    o = n(97483),
    d = n(289873),
    u = n(834730),
    _ = n(892547),
    m = n(155718),
    p = n(429913),
    f = n(223863),
    g = n(151054),
    h = n(734057),
    b = n(71393),
    C = n(403362),
    I = n(264322),
    T = n(545152),
    x = n(398817),
    A = n(465364),
    E = n(291812),
    S = n(34337),
    v = n(253932),
    N = n(816350);
function L(e) {
    let { previewMessage: t } = e,
        n = v.hH.useSetting(),
        { content: r } = (0, A.Ay)(t, { allowHeading: !0, allowLinks: !0 }),
        s = t.attachments.map((e, t) => {
            let n = (0, S.LL)({
                src: e.url,
                containerClassName: N.oz,
                imageContainerClassName: N.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, i.jsx)(a.Fragment, { children: n }, t);
        });
    return (0, i.jsxs)("div", {
        className: N.i1,
        children: [
            (0, i.jsx)("div", { className: N.hD }),
            (0, i.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, i.jsx)(E.Ay, { message: t, content: r, compact: n }),
                    s,
                    t.components.length > 0
                        ? (0, i.jsx)(x.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
var y = n(503698),
    O = n.n(y),
    P = n(989349),
    M = n.n(P),
    w = n(17928),
    D = n(939249),
    F = n(658675),
    j = n(778712),
    R = n(56059),
    k = n(276293),
    G = n(661531),
    B = n(966327),
    H = n(964486),
    U = n(115718),
    z = n(47167),
    V = n(598104),
    W = n(255266),
    $ = n(72563),
    J = n(95701),
    q = n(576705),
    X = n(290863),
    K = n(222823),
    Q = n(994500),
    Y = n(287809),
    Z = n(58703),
    ee = n(427262),
    et = n(652215),
    en = n(790782),
    ei = n(985018),
    ea = n(236167);
function er(e) {
    let {
            destination: t,
            icon: n,
            label: r,
            subLabel: s,
            selected: l,
            disabled: c,
            onPressDestination: o,
            "aria-setsize": d,
            "aria-posinset": _,
        } = e,
        m = a.useRef(!1),
        p = a.useCallback(() => {
            c || o?.(t);
        }, [o, c, t]);
    return (
        (0, H.l0)(() => () => {
            m.current && ((m.current = !1), o?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, i.jsxs)(D.D, {
            className: O()(ea.HP, { [ea.r9]: c }),
            onClick: p,
            "aria-selected": l,
            "aria-setsize": d,
            "aria-posinset": _,
            children: [
                (0, i.jsxs)("div", {
                    className: ea.D_,
                    children: [
                        (0, i.jsx)("div", { className: ea.P0, children: n }),
                        (0, i.jsxs)("div", {
                            className: ea.WD,
                            children: [
                                (0, i.jsx)(u.E, {
                                    tag: "strong",
                                    className: ea.Pf,
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: r,
                                }),
                                (0, i.jsx)(u.E, {
                                    className: ea.J2,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: ea.kv, children: (0, i.jsx)(F.P, { checked: l }) }),
            ],
        })
    );
}
function es(e) {
    let { user: t, subLabel: n, ...a } = e,
        r = ee.Ay.useName(t),
        s = ee.Ay.useUserTag(t, { decoration: "never" }),
        l = (0, w.bG)([Q.A], () => Q.A.getNickname(t.id)),
        c = (0, w.bG)([X.A], () => X.A.getStatus(t.id));
    return (0, i.jsx)(er, {
        ...a,
        icon: (0, i.jsx)(B.A, { "aria-hidden": !0, size: j._3.SIZE_32, user: t, status: c }),
        label: l ?? r,
        subLabel: n ?? s,
    });
}
function el(e) {
    let { channel: t, subLabel: n, ...a } = e,
        r = (0, z.Ay)(t),
        s = (0, $.i)(t);
    return (0, i.jsx)(er, {
        ...a,
        icon: (0, i.jsx)(V.A, { "aria-hidden": !0, size: j._3.SIZE_32, channel: t }),
        label: r,
        subLabel: n ?? s,
    });
}
function ec(e) {
    let { channel: t, subLabel: n, ...a } = e,
        r = (0, w.bG)([b.A], () => b.A.getGuild(t?.guild_id)),
        s = (0, z.Ay)(t),
        l = (0, w.bG)([h.A, Y.default, Q.A], () => {
            let e = h.A.getChannel(t.parent_id);
            return null == e ? null : (0, z.m1)(e, Y.default, Q.A, !1);
        }),
        c = (0, w.bG)([K.Ay], () => K.Ay.lastMessageTimestamp(t.id, en.P.CHANNEL)),
        o = r?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? R.b : k.N;
        o = (0, i.jsxs)("div", {
            className: ea.vr,
            children: [
                (0, i.jsx)(e, { color: G.A.colors.TEXT_SUBTLE, className: ea.Q9 }),
                (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: l }),
                null != c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.E, {
                                  className: ea.Ql,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: "•",
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  children: (0, Z.Fe)(M()(c)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsx)(er, {
        ...a,
        icon: (0, i.jsx)(W.A, { size: W.q.SMALL_32, guild: r, channel: t }),
        label: s,
        subLabel: n ?? o,
    });
}
function eo(e) {
    let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: r,
            disableSelection: s,
            originDestination: l,
        } = e,
        c = a.useMemo(() => n?.map(f.I) ?? [], [n]);
    return a.useMemo(() => {
        let e = t.filter((e) => e.type !== U.rD.HEADER);
        return e.map((t, n) => {
            let { type: a, record: o } = t,
                d = a === U.rD.USER ? { type: "user", id: o.id } : { type: "channel", id: o.id },
                u = (0, f.I)(d),
                _ =
                    null != l
                        ? (function (e, t) {
                              if (t instanceof J.YB && (0, J.zy)(t.type)) {
                                  if (
                                      null != t.rateLimitPerUser &&
                                      t.rateLimitPerUser > 0 &&
                                      !(q.A.can(et.xBc.MANAGE_CHANNELS, t) || q.A.can(et.xBc.MANAGE_MESSAGES, t))
                                  )
                                      return { label: ei.intl.string(ei.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !q.A.can(et.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: ei.intl.string(ei.t.v8MLqz) };
                                  let n = (0, f._5)(t.id);
                                  if (e.id === n.id) return { label: ei.intl.string(ei.t.mD4gqe) };
                              }
                          })(l, o)
                        : null,
                m = c.includes(u),
                p = {
                    destination: d,
                    subLabel: null != _ ? _.label : void 0,
                    disabled: (s && !m) || null != _,
                    selected: m,
                    onPressDestination: r,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            return a === U.rD.USER
                ? (0, i.jsx)(es, { user: o, ...p }, u)
                : a === U.rD.GROUP_DM
                  ? (0, i.jsx)(el, { channel: o, ...p }, u)
                  : a === U.rD.TEXT_CHANNEL || a === U.rD.VOICE_CHANNEL
                    ? (0, i.jsx)(ec, { channel: o, ...p }, u)
                    : void (0, C.xb)(a);
        });
    }, [s, r, l, t, c]);
}
var ed = n(293588),
    eu = n(119390);
let e_ = [m.kc.CHAT],
    em = () => {
        (0, s.closeModal)(ed.C);
    };
function ep(e) {
    var t;
    let {
            applicationId: n,
            channel: s,
            command: m,
            onClose: x,
            requireLaunchChannel: A,
            onShareResult: E,
            previewMessage: S,
            ...v
        } = e,
        N = a.useMemo(() => (null == s ? null : (0, f._5)(s.id)), [s]),
        [y, O] = a.useState(!1),
        { commands: P, loading: M } =
            ((t = a.useMemo(() => (null == s ? { type: "contextless" } : { type: "channel", channel: s }), [s])),
            (0, I.ZA)(t, { commandTypes: e_ }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        w = a.useRef(0),
        [D, F] = a.useState(A && null != N ? [N] : []),
        j = D.length,
        R = j >= 5,
        [k, G] = a.useState(""),
        { results: B, updateSearchText: H } = (0, g.R)({
            selectedDestinations: D,
            originDestination: N ?? void 0,
            includeMissingDMs: !0,
        }),
        U = a.useCallback(
            (e) => {
                G(e), H(e);
            },
            [H],
        ),
        z = a.useCallback(() => (E(!1), x()), [E, x]),
        [V] = (0, p.A)([n]),
        W = a.useCallback(() => {
            G("");
        }, [G]),
        $ = a.useRef(null);
    a.useEffect(() => {
        "" === k && $.current?.focus();
    }, [k]);
    let J = a.useCallback(
            (e) => {
                F((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: i } = t;
                        return n === e.type && i === e.id;
                    });
                    if (-1 === n) return R ? t : (G(""), H(""), (w.current += 1), [e, ...t]);
                    let i = [...t];
                    return i.splice(n, 1), (w.current += 1), i;
                });
            },
            [R, H],
        ),
        [q, X] = a.useMemo(() => {
            if (M) return [null, !1];
            let e = P.find((e) => e.untranslatedName === m.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [m, P, M]),
        K = a.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === q) return;
                O(!0);
                let n = (await Promise.all(e.map(f.pk))).filter(C.Vq);
                t && (E(!0), em()),
                    n.forEach(async (e) => {
                        let t = h.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                m.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            i = b.A.getGuild(t?.guild_id);
                        null != (await (0, T.A)({ command: q, optionValues: n, context: { channel: t, guild: i } })) &&
                            (0, l.P0)((0, c.o)(ei.intl.string(ei.t["5WjJcl"]), o.Ck.MESSAGE));
                    }),
                    E(!0),
                    em();
            },
            [E, q, m.options],
        ),
        Q = a.useCallback(() => {
            K(D, { closeAfterSend: !0 });
        }, [K, D]);
    if (M)
        return (0, i.jsx)(r.Modal, {
            title: ei.intl.string(ei.t.fuFvwx),
            "aria-label": ei.intl.string(ei.t.fuFvwx),
            transitionState: v.transitionState,
            onClose: x,
            actions: [],
            children: (0, i.jsx)(d.y, { className: ea.dc }),
        });
    if (X)
        return (0, i.jsx)(r.Modal, {
            title: ei.intl.string(ei.t.fuFvwx),
            "aria-label": ei.intl.string(ei.t.fuFvwx),
            transitionState: v.transitionState,
            onClose: x,
            actions: [{ text: ei.intl.string(ei.t.cpT0Cq), onClick: x, variant: "primary" }],
            children: ei.intl.string(ei.t.yAk8ZT),
        });
    let Y =
            B.length > 0
                ? (0, i.jsx)(eo, {
                      rowData: B,
                      handleToggleDestination: J,
                      selectedDestinations: D,
                      disableSelection: R,
                      originDestination: N,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("img", { className: ea.BJ, src: eu, alt: "" }),
                          (0, i.jsx)(u.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: ei.intl.string(ei.t.V6nAfF),
                          }),
                      ],
                  }),
        Z = ei.intl.format(ei.t.hajTkz, { appName: V?.name });
    null == V && (Z = ei.intl.string(ei.t.fuFvwx));
    let ee = ei.intl.format(ei.t["DF+q2l"], { appName: V?.name });
    return (
        R && (ee = ei.intl.format(ei.t["/KhyPe"], { count: 5 })),
        (0, i.jsx)(r.Modal, {
            title: Z.toString(),
            subtitle: ee,
            "aria-label": Z.toString(),
            transitionState: v.transitionState,
            onClose: z,
            size: "md",
            actions: [
                { text: ei.intl.string(ei.t.cpT0Cq), onClick: z, variant: "secondary" },
                { text: ei.intl.string(ei.t.TXNS7S), onClick: Q, disabled: 0 === j || y, variant: "primary" },
            ],
            preview: void 0 !== S ? (0, i.jsx)(L, { previewMessage: S }) : null,
            input: (0, i.jsx)(_.I, {
                ref: $,
                query: k,
                onChange: U,
                onClear: W,
                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                "aria-label": ei.intl.string(ei.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: Y,
        })
    );
}
