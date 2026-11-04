n.d(t, { ApplicationCommandShareModal: () => ex });
var i = n(477900),
    l = n(582128),
    a = n(189213),
    s = n(192308),
    r = n(858899),
    o = n(289873),
    c = n(834730),
    u = n(683438),
    d = n(155718),
    m = n(429913),
    h = n(223863),
    x = n(151054),
    b = n(734057),
    g = n(71393),
    p = n(403362),
    f = n(264322),
    A = n(545152),
    v = n(232430),
    j = n(74096),
    C = n(383055),
    y = n(538355),
    N = n(253932),
    S = n(28905);
let D = { allowHeading: !0, allowLinks: !0 };
function k(e) {
    let { previewMessage: t } = e,
        n = N.hH.useSetting(),
        { content: a } = (0, y.A)(t, D),
        s = t.attachments.map((e, t) => {
            let n = (0, C.LL)({
                src: e.url,
                containerClassName: S.oz,
                imageContainerClassName: S.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, i.jsx)(l.Fragment, { children: n }, t);
        });
    return (0, i.jsxs)("div", {
        className: S.i1,
        children: [
            (0, i.jsx)("div", { className: S.hD }),
            (0, i.jsxs)("div", {
                className: S.Qs,
                children: [
                    (0, i.jsx)(j.Ay, { message: t, content: a, compact: n }),
                    s,
                    t.components.length > 0
                        ? (0, i.jsx)(v.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
var E = n(503698),
    w = n.n(E),
    L = n(536637),
    P = n.n(L),
    T = n(855986),
    _ = n(939249),
    F = n(658675),
    M = n(778712),
    z = n(56059),
    I = n(276293),
    H = n(646514),
    q = n(966327),
    G = n(964486),
    R = n(662090),
    U = n(47167),
    O = n(960850),
    Q = n(598104),
    B = n(255266),
    Z = n(72563),
    J = n(95701),
    V = n(576705),
    W = n(290863),
    X = n(218461),
    K = n(994500),
    Y = n(287809),
    $ = n(5377),
    ee = n(427262),
    et = n(652215),
    en = n(790782),
    ei = n(792996),
    el = n(311356);
function ea(e) {
    let {
            destination: t,
            icon: n,
            label: a,
            subLabel: s,
            selected: r,
            disabled: o,
            onPressDestination: u,
            "aria-setsize": d,
            "aria-posinset": m,
        } = e,
        h = l.useRef(!1),
        x = l.useCallback(() => {
            o || u?.(t);
        }, [u, o, t]);
    return (
        (0, G.l0)(() => () => {
            h.current && ((h.current = !1), u?.(t, { transitionToDestination: !1, closeAfterSend: !1 }));
        }),
        (0, i.jsxs)(_.D, {
            className: w()(el.HP, { [el.r9]: o }),
            onClick: x,
            "aria-selected": r,
            "aria-setsize": d,
            "aria-posinset": m,
            children: [
                (0, i.jsxs)("div", {
                    className: el.D_,
                    children: [
                        (0, i.jsx)("div", { className: el.P0, children: n }),
                        (0, i.jsxs)("div", {
                            className: el.WD,
                            children: [
                                (0, i.jsx)(c.E, {
                                    tag: "strong",
                                    className: el.Pf,
                                    variant: "body-md/semibold",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                (0, i.jsx)(c.E, {
                                    className: el.J2,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: el.kv, children: (0, i.jsx)(F.P, { checked: r }) }),
            ],
        })
    );
}
function es(e) {
    let { user: t, subLabel: n, ...l } = e,
        a = ee.Ay.useName(t),
        s = ee.Ay.useUserTag(t, { decoration: "never" }),
        r = (0, T.bG)([K.A], () => K.A.getNickname(t.id)),
        o = (0, T.bG)([W.A], () => W.A.getStatus(t.id));
    return (0, i.jsx)(ea, {
        ...l,
        icon: (0, i.jsx)(q.A, { "aria-hidden": !0, size: M._3.SIZE_32, user: t, status: o }),
        label: r ?? a,
        subLabel: n ?? s,
    });
}
function er(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, U.Ay)(t),
        s = (0, Z.i)(t);
    return (0, i.jsx)(ea, {
        ...l,
        icon: (0, i.jsx)(Q.A, { "aria-hidden": !0, size: M._3.SIZE_32, channel: t }),
        label: a,
        subLabel: n ?? s,
    });
}
function eo(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, T.bG)([g.A], () => g.A.getGuild(t?.guild_id)),
        s = (0, U.Ay)(t),
        r = (0, T.bG)([b.A, Y.default, K.A], () => {
            let e = b.A.getChannel(t.parent_id);
            return null == e ? null : (0, U.m1)(e, Y.default, K.A, !1);
        }),
        o = (0, T.bG)([X.Ay], () => X.Ay.lastMessageTimestamp(t.id, en.P.CHANNEL)),
        u = a?.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? z.b : I.N;
        u = (0, i.jsxs)("div", {
            className: el.vr,
            children: [
                (0, i.jsx)(e, { color: H.A.colors.TEXT_SUBTLE, className: el.Q9 }),
                (0, i.jsx)(c.E, { variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, children: r }),
                null != o
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(c.E, {
                                  className: el.Ql,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  children: "\u2022",
                              }),
                              (0, i.jsx)(c.E, {
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  children: (0, $.Fe)(P()(o)),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsx)(ea, {
        ...l,
        icon: (0, i.jsx)(B.A, { size: B.q.SMALL_32, guild: a, channel: t }),
        label: s,
        subLabel: n ?? u,
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
        o = l.useMemo(() => n?.map(h.I) ?? [], [n]);
    return l.useMemo(() => {
        let e = t.filter((e) => e.type !== R.rD.HEADER);
        return e.map((t, n) => {
            let { type: l, record: c } = t,
                u = l === R.rD.USER ? { type: "user", id: c.id } : { type: "channel", id: c.id },
                d = (0, h.I)(u),
                m =
                    null != r
                        ? (function (e, t) {
                              if (t instanceof J.YB && (0, J.zy)(t.type)) {
                                  if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(0, O.F3)(t))
                                      return { label: ei.intl.string(ei.t.Icu3bf) };
                                  if (t.isThread() || t.isForumPost() || !V.A.can(et.xBc.USE_APPLICATION_COMMANDS, t))
                                      return { label: ei.intl.string(ei.t.v8MLqz) };
                                  let n = (0, h._5)(t.id);
                                  if (e.id === n.id) return { label: ei.intl.string(ei.t.mD4gqe) };
                              }
                          })(r, c)
                        : null,
                x = o.includes(d),
                b = {
                    destination: u,
                    subLabel: null != m ? m.label : void 0,
                    disabled: (s && !x) || null != m,
                    selected: x,
                    onPressDestination: a,
                    "aria-posinset": n + 1,
                    "aria-setsize": e.length,
                };
            switch (l) {
                case R.rD.USER:
                    return (0, i.jsx)(es, { user: c, ...b }, d);
                case R.rD.GROUP_DM:
                    return (0, i.jsx)(er, { channel: c, ...b }, d);
                case R.rD.TEXT_CHANNEL:
                case R.rD.VOICE_CHANNEL:
                    return (0, i.jsx)(eo, { channel: c, ...b }, d);
                default:
                    return (0, p.xb)(l);
            }
        });
    }, [s, a, r, t, o]);
}
var eu = n(293588),
    ed = n(119390);
let em = [d.kc.CHAT];
function eh() {
    (0, s.Oo)(eu.C);
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
            previewMessage: y,
            ...N
        } = e,
        S = l.useMemo(() => (null == s ? null : (0, h._5)(s.id)), [s]),
        [D, E] = l.useState(!1),
        { commands: w, loading: L } =
            ((t = l.useMemo(() => (null == s ? { type: "contextless" } : { type: "channel", channel: s }), [s])),
            (0, f.ZA)(t, { commandTypes: em }, { applicationId: n, allowFetch: !0, allowApplicationState: !0 })),
        P = l.useRef(0),
        [T, _] = l.useState(j && null != S ? [S] : []),
        F = T.length,
        M = F >= 5,
        [z, I] = l.useState(""),
        { results: H, updateSearchText: q } = (0, x.R)({
            selectedDestinations: T,
            originDestination: S ?? void 0,
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
                let n = (await Promise.all(e.map(h.pk))).filter(p.Vq);
                (t && (C(!0), eh()),
                    n.forEach(async (e) => {
                        let t = b.A.getChannel(e);
                        if (null == t) return;
                        let n =
                                d.options?.reduce((e, t) => ((e[t.name] = [{ type: "text", text: t.value }]), e), {}) ??
                                {},
                            i = g.A.getGuild(t?.guild_id);
                        null != (await (0, A.A)({ command: Z, optionValues: n, context: { channel: t, guild: i } })) &&
                            (0, r.P0)({ text: ei.intl.string(ei.t["5WjJcl"]) });
                    }),
                    C(!0),
                    eh());
            },
            [C, Z, d.options],
        ),
        W = l.useCallback(() => {
            V(T, { closeAfterSend: !0 });
        }, [V, T]);
    if (L)
        return (0, i.jsx)(a.a, {
            title: ei.intl.string(ei.t.fuFvwx),
            "aria-label": ei.intl.string(ei.t.fuFvwx),
            transitionState: N.transitionState,
            onClose: v,
            actions: [],
            children: (0, i.jsx)(o.y, { className: el.dc }),
        });
    if (J)
        return (0, i.jsx)(a.a, {
            title: ei.intl.string(ei.t.fuFvwx),
            "aria-label": ei.intl.string(ei.t.fuFvwx),
            transitionState: N.transitionState,
            onClose: v,
            actions: [{ text: ei.intl.string(ei.t.cpT0Cq), onClick: v, variant: "primary" }],
            children: ei.intl.string(ei.t.yAk8ZT),
        });
    let X =
            H.length > 0
                ? (0, i.jsx)(ec, {
                      rowData: H,
                      handleToggleDestination: B,
                      selectedDestinations: T,
                      disableSelection: M,
                      originDestination: S,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("img", { className: el.BJ, src: ed, alt: "" }),
                          (0, i.jsx)(c.E, {
                              variant: "body-md/normal",
                              color: "text-muted",
                              children: ei.intl.string(ei.t.V6nAfF),
                          }),
                      ],
                  }),
        K = ei.intl.format(ei.t.hajTkz, { appName: U?.name });
    null == U && (K = ei.intl.string(ei.t.fuFvwx));
    let Y = ei.intl.format(ei.t["DF+q2l"], { appName: U?.name });
    return (
        M && (Y = ei.intl.format(ei.t["/KhyPe"], { count: 5 })),
        (0, i.jsx)(a.a, {
            title: K.toString(),
            subtitle: Y,
            "aria-label": K.toString(),
            transitionState: N.transitionState,
            onClose: R,
            size: "md",
            actions: [
                { text: ei.intl.string(ei.t.cpT0Cq), onClick: R, variant: "secondary" },
                { text: ei.intl.string(ei.t.TXNS7S), onClick: W, disabled: 0 === F || D, variant: "primary" },
            ],
            preview: void 0 !== y ? (0, i.jsx)(k, { previewMessage: y }) : null,
            input: (0, i.jsx)(u.I, {
                ref: Q,
                query: z,
                onChange: G,
                onClear: O,
                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                "aria-label": ei.intl.string(ei.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: X,
        })
    );
}
