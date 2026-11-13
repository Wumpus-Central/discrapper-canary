t.d(n, { A: () => ej });
var l = t(477900),
    i = t(582128),
    r = t(503698),
    a = t.n(r),
    s = t(120692),
    o = t(855986),
    u = t(451988),
    c = t(192308),
    d = t(245604),
    f = t(834730),
    S = t(939249),
    A = t(140735),
    T = t(717421),
    h = t(847374),
    m = t(775602),
    g = t(51183),
    x = t(793574),
    E = t(688810),
    R = t(915089),
    p = t(410540),
    C = t(7584),
    y = t(208971),
    j = t(46653),
    v = t(562153),
    P = t(183555),
    N = t(679492),
    I = t(453903),
    _ = t(265872),
    b = t(403777),
    L = t(462887),
    U = t(863576),
    M = t(413599),
    O = t(403362),
    V = t(427262),
    w = t(448613),
    k = t(866665),
    $ = t(460905),
    D = t(110384),
    Y = t(365199),
    F = t(101555),
    H = t(570287),
    G = t(518477),
    B = t(792996),
    Q = t(47119);
let z = {
        [G.dS.AVATAR]: () => B.intl.string(B.t["fEUP/i"]),
        [G.dS.STATUS]: () => B.intl.string(B.t.TKdBC8),
        [G.dS.ACTIVITY]: () => B.intl.string(B.t.bSe71F),
    },
    K = {
        [G.dS.AVATAR]: () => B.intl.string(B.t.xvN0fV),
        [G.dS.STATUS]: () => B.intl.string(B.t["C/vzS7"]),
        [G.dS.ACTIVITY]: () => B.intl.string(B.t.ObfsSj),
    };
function q(e) {
    let {
            user: n,
            sourceType: t,
            isVisible: r,
            isExpandable: s,
            interactionSourceId: u,
            targetRef: c,
            onAction: d,
            renderMoreButtonPopout: f,
        } = e,
        S = i.useRef(null),
        A = (0, o.bG)([j.default], () => j.default.getId() === n.id),
        T = (0, H.A)(n.id),
        { onInteraction: h, onInteractionPopoutTargetRefChange: m } = (0, N.Pq)();
    return n.bot || A || !T
        ? null
        : (0, l.jsxs)(F.Ay, {
              className: a()(Q.oO, {
                  [Q.RK]: r,
                  [Q.lu]: s,
                  [Q.U7]: t === G.dS.STATUS,
                  [Q.nL]: t === G.dS.AVATAR,
                  [Q.bt]: t === G.dS.ACTIVITY,
              }),
              children: [
                  (0, l.jsx)(k.m, {
                      asContainer: !0,
                      text: B.intl.string(B.t.nhaI4b),
                      shouldShow: r,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(F.$n, {
                          onClick: function () {
                              (m(c),
                                  t === G.dS.AVATAR
                                      ? d({ action: "PRESS_REACT_AVATAR" })
                                      : t === G.dS.STATUS
                                        ? d({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REACT_ACTIVITY" }),
                                  h?.({ interactionType: G.AQ.REACT, interactionSource: t, interactionSourceId: u }));
                          },
                          className: Q.x6,
                          "aria-label": z[t](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)($.ReactionIcon, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  (0, l.jsx)(k.m, {
                      asContainer: !0,
                      text: B.intl.string(B.t.RmDYKK),
                      shouldShow: r,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(F.$n, {
                          onClick: function () {
                              (m(c),
                                  t === G.dS.AVATAR
                                      ? d({ action: "PRESS_REPLY_AVATAR" })
                                      : t === G.dS.STATUS
                                        ? d({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REPLY_ACTIVITY" }),
                                  h?.({ interactionType: G.AQ.REPLY, interactionSource: t, interactionSourceId: u }));
                          },
                          className: Q.x6,
                          "aria-label": K[t](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(D.ArrowAngleLeftUpIcon, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  f?.((e) =>
                      (0, l.jsx)(k.m, {
                          asContainer: !0,
                          text: B.intl.string(B.t["UKOtz+"]),
                          shouldShow: r,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, l.jsx)(F.$n, {
                              ref: S,
                              ...e,
                              onClick: function () {
                                  (m(S), e.onClick?.());
                              },
                              className: Q.x6,
                              "aria-label": B.intl.string(B.t["UKOtz+"]),
                              children: (0, l.jsx)(Y.MoreHorizontalIcon, { size: "xs", className: Q.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
var W = t(939496),
    X = t(307731),
    J = t(818348),
    Z = t(650583),
    ee = t(954024);
function en(e) {
    let {
            user: n,
            guildId: t,
            entry: r,
            sourceType: a,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: S } = (0, N.Pq)(),
        { theme: A } = (0, W.E)(),
        T = (0, o.bG)([M.A], () => M.A.theme),
        h = (0, L.M)(T) ? !(0, L.M)(A) : (0, L.M)(A),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            u?.(m?.current);
        }, [m, u]),
        i.useEffect(() => {
            function e(e) {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), f());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]),
        (0, l.jsx)(U.A, {
            headerClassName: h ? ee.X : void 0,
            guildId: t ?? void 0,
            closePopout: J.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: l } = e;
                (await (async function (e) {
                    if (null == e) return;
                    a === G.dS.AVATAR
                        ? c({ action: "SEND_REACT_AVATAR" })
                        : a === G.dS.STATUS
                          ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
                          : c({ action: "SEND_REACT_ACTIVITY" });
                    let t = (function (e) {
                        let { emoji: n, username: t, sourceType: l, sourceDetails: i } = e,
                            r = `:${n.name}:`;
                        switch (l) {
                            case G.dS.ACTIVITY:
                                let a = B.intl.formatToPlainString(B.t.EUFEJt, { username: t }),
                                    s = `
> ${i}`;
                                return null != i
                                    ? `> -# *${a}*${s}
${r}`
                                    : `> -# *${a}*
${r}`;
                            case G.dS.AVATAR:
                                let o = B.intl.formatToPlainString(B.t.E6H15q, { username: t });
                                return `> -# *${o}*
${r}`;
                            case G.dS.STATUS:
                                let u = B.intl.formatToPlainString(B.t.XPQgL2, { username: t }),
                                    c = `
> ${i}`;
                                return null != i
                                    ? `> -# *${u}*${c}
${r}`
                                    : `> -# *${u}*
${r}`;
                            default:
                                (0, O.xb)(l);
                        }
                    })({ emoji: e, username: V.Ay.getName(n), sourceType: a, sourceDetails: s });
                    S(null);
                    try {
                        await (0, w.p)({
                            userId: n.id,
                            content: t,
                            location: "UserProfileReactPopout",
                            openChannel: !1,
                            whenReady: !1,
                            entry: r,
                        });
                    } catch (e) {}
                    S(G.AQ.REACT);
                })(t),
                    l && (f(), d?.()));
            },
            pickerIntention: X.EmojiIntention.PROFILE,
        })
    );
}
var et = t(478437),
    el = t(305866),
    ei = t(355622),
    er = t(408018),
    ea = t(989161),
    es = t(95701),
    eo = t(767523);
let eu = (0, es.createChannelRecord)({ id: "1", type: et.r.DM });
function ec(e) {
    let {
            user: n,
            guildId: t,
            channelId: r,
            sourceType: s,
            sourceDetails: o,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: f,
            entry: S,
        } = e,
        { resetInteraction: A, setInteractionToast: T } = (0, N.Pq)(),
        { primaryColor: h } = (0, W.E)(),
        [m, g] = i.useState(""),
        [x, E] = i.useState((0, er.x7)(m)),
        R = i.useRef(!1),
        p = i.useRef(null),
        C = i.useCallback(
            (e) => {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), A());
            },
            [A],
        );
    i.useEffect(() => {
        u?.(p?.current);
    }, [p, u]);
    let y = { [eo.h5]: s === G.dS.STATUS, [eo.my]: s === G.dS.AVATAR, [eo.Eb]: s === G.dS.ACTIVITY };
    return (0, l.jsx)(el.l, {
        ref: p,
        onKeyDown: C,
        children: (0, l.jsx)("div", {
            className: a()(eo.kL, y, { [eo.GE]: null != h }),
            children: (0, l.jsx)(ea.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: eo.hF,
                innerClassName: eo.rn,
                editorClassName: eo.EN,
                type: ei.oU.USER_PROFILE_REPLY,
                placeholder: B.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case G.dS.ACTIVITY:
                                return B.t.Qn081O;
                            case G.dS.AVATAR:
                                return B.t.xGNPFK;
                            case G.dS.STATUS:
                                return B.t.g9BTCM;
                            default:
                                (0, O.xb)(e);
                        }
                    })(s),
                    { username: v.Ay.getName(t, r, n) },
                ),
                channel: eu,
                textValue: m,
                richValue: x,
                onChange: (e, n, t) => {
                    n !== m && (g(n), E(t));
                },
                focused: R.current,
                onFocus: () => {
                    R.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        l = t.trim();
                    if (0 === l.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return (
                            await (async function (e) {
                                if (null == e) return;
                                s === G.dS.AVATAR
                                    ? d({ action: "SEND_REPLY_AVATAR" })
                                    : s === G.dS.STATUS
                                      ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                                      : d({ action: "SEND_REPLY_ACTIVITY" });
                                let t = (function (e) {
                                    let { input: n, username: t, sourceType: l, sourceDetails: i } = e;
                                    switch (l) {
                                        case G.dS.ACTIVITY:
                                            let r = B.intl.formatToPlainString(B.t.WmvMCo, { username: t }),
                                                a = `
> ${i}`;
                                            return null != i
                                                ? `> -# *${r}*${a}
${n}`
                                                : `> -# *${r}*
${n}`;
                                        case G.dS.AVATAR:
                                            let s = B.intl.formatToPlainString(B.t.lpaBsB, { username: t });
                                            return `> -# *${s}*
${n}`;
                                        case G.dS.STATUS:
                                            let o = B.intl.formatToPlainString(B.t.lFXgFV, { username: t }),
                                                u = `
> ${i}`;
                                            return null != i
                                                ? `> -# *${o}*${u}
${n}`
                                                : `> -# *${o}*
${n}`;
                                        default:
                                            (0, O.xb)(l);
                                    }
                                })({ input: e, username: V.Ay.getName(n), sourceType: s, sourceDetails: o });
                                T(null);
                                try {
                                    await (0, w.p)({
                                        userId: n.id,
                                        content: t,
                                        location: "UserProfileReplyPopout",
                                        openChannel: !1,
                                        whenReady: !1,
                                        entry: S,
                                    });
                                } catch (e) {}
                                T(G.AQ.REPLY);
                            })(l),
                            A(),
                            f?.(),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}
var ed = t(996988);
function ef(e) {
    let { user: n, guildId: t, channelId: i, themeType: r, onClose: a, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: S,
        } = (0, N.Pq)(),
        A = [ed.d.MODAL, ed.d.MODAL_V2].includes(r) ? (0, b.n1)(n.id, t) : void 0,
        T = c === o.sourceType && u === G.AQ.REACT,
        h = c === o.sourceType && u === G.AQ.REPLY,
        m = (T || h) && f === o.sourceId;
    return (0, l.jsx)(I.NA.Provider, {
        value: null,
        children: (0, l.jsx)(_.Y, {
            targetElementRef: S ?? void 0,
            renderPopout: (e) => {
                let { setPopoutRef: s } = e;
                return (0, l.jsx)(T ? en : ec, {
                    user: n,
                    guildId: t,
                    channelId: i,
                    themeType: r,
                    onClose: a,
                    modalKey: A,
                    setPopoutRef: s,
                    ...o,
                });
            },
            onRequestClose: () => {
                (d(), a?.());
            },
            shouldShow: m,
            ...(function (e) {
                let { interactionType: n, interactionSource: t, themeType: l } = e;
                return n === G.AQ.REACT
                    ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                    : l === ed.d.MODAL || l === ed.d.MODAL_V2 || t === G.dS.ACTIVITY
                      ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                      : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
            })({ interactionType: u, interactionSource: c, themeType: r }),
            children: s,
        }),
    });
}
var eS = t(22231),
    eA = t(241326),
    eT = t(253932),
    eh = t(33969),
    em = t(777357);
function eg(e) {
    let { isVisible: n, isExpandable: r, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, P.NJ)(),
        f = i.useRef(null),
        { themeType: S } = (0, W.E)();
    return (0, l.jsxs)(eh.A, {
        className: a()(em.oO, { [em.RK]: n, [em.lu]: r }),
        children: [
            (0, l.jsx)(eh.Y, {
                variant: "custom-status",
                ref: o,
                tooltipText: B.intl.string(B.t.bt75uw),
                shouldDelayTooltip: r,
                onClick: function () {
                    (d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                        (function (e) {
                            let { analyticsLocations: n, stackingBehavior: i, returnRef: r } = e;
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        t.e(775417),
                                        t.e(865429),
                                        t.e(25300),
                                        t.e(291103),
                                        t.e(686889),
                                        t.e(875762),
                                        t.e(526807),
                                        t.e(826240),
                                        t.e(455924),
                                        t.e(250478),
                                        t.e(993610),
                                        t.e(356296),
                                        t.e(220287),
                                        t.e(428367),
                                        t.e(655552),
                                        t.e(772163),
                                        t.e(748370),
                                    ]).then(t.bind(t, 431273));
                                    return (t) => (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: n, returnRef: r });
                                },
                                null != i ? { stackingBehavior: i } : void 0,
                            );
                        })({
                            analyticsLocations: u,
                            stackingBehavior: S === ed.d.MODAL_V2 ? "stack" : void 0,
                            returnRef: o,
                        }),
                        s?.());
                },
                "aria-label": B.intl.string(B.t.QdHxos),
                "aria-haspopup": "dialog",
                icon: eS.PencilIcon,
            }),
            (0, l.jsx)(eh.Y, {
                variant: "custom-status",
                ref: f,
                tooltipText: B.intl.string(B.t.VkKicb),
                shouldDelayTooltip: r,
                onClick: function () {
                    (d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                        eT.G2.updateSetting(void 0),
                        requestAnimationFrame(() => o.current?.focus()));
                },
                "aria-label": B.intl.string(B.t.wfYTHe),
                icon: eA.TrashIcon,
            }),
        ],
    });
}
var ex = t(502622);
function eE(e) {
    let { children: n, className: t } = e;
    return (0, l.jsx)("div", {
        className: a()(ex.nL, t),
        children: (0, l.jsx)("div", {
            className: ex.A7,
            children: (0, l.jsx)("span", { className: ex.vW, children: n }),
        }),
    });
}
function eR(e) {
    let { onCloseProfile: n, prompt: i, addButtonRef: r, ref: s } = e,
        o = (0, R.GV)(),
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: T } = (0, P.NJ)(),
        { themeType: h } = (0, W.E)(),
        m = null != i ? i.label() : B.intl.string(B.t.evw0oz),
        g = (0, l.jsxs)("div", {
            className: ex.Qs,
            children: [
                (0, l.jsx)(d.CirclePlusIcon, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                (0, l.jsx)(f.E, { variant: "body-sm/normal", className: a()(ex.ch, null != i && ex.R9), children: m }),
            ],
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eE, { children: g }),
            (0, l.jsx)("div", {
                className: a()(ex.kL, ex.LL),
                ref: s,
                children: (0, l.jsx)(S.D, {
                    innerRef: r,
                    className: ex.A7,
                    "aria-label": B.intl.string(B.t["zrpF/b"]),
                    "aria-describedby": o,
                    onClick: function () {
                        (T({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                            n?.(),
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        t.e(775417),
                                        t.e(865429),
                                        t.e(25300),
                                        t.e(291103),
                                        t.e(686889),
                                        t.e(875762),
                                        t.e(526807),
                                        t.e(826240),
                                        t.e(455924),
                                        t.e(250478),
                                        t.e(993610),
                                        t.e(356296),
                                        t.e(220287),
                                        t.e(428367),
                                        t.e(655552),
                                        t.e(772163),
                                        t.e(748370),
                                    ]).then(t.bind(t, 431273));
                                    return (n) =>
                                        (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: u, prompt: i, returnRef: r });
                                },
                                h === ed.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                            ));
                    },
                    focusProps: { ringClassName: ex.hN },
                    children: (0, l.jsxs)("span", {
                        className: a()(ex.vW, ex.vk),
                        children: [
                            (0, l.jsx)(d.CirclePlusIcon, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                            (0, l.jsxs)(A.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", m] }),
                            (0, l.jsx)(f.E, {
                                variant: "body-sm/normal",
                                className: a()(ex.ch, null != i && ex.R9),
                                "aria-hidden": "true",
                                children: m,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ep(e) {
    let {
            emoji: n,
            text: t,
            statusLabel: r,
            themeType: c,
            animate: d,
            className: x,
            referenceClassName: E,
            renderToolbar: p,
            onShowToolbar: C,
            placeholderText: y,
            hasEntered: j = !0,
            ref: v,
        } = e,
        I = (0, N.NR)(),
        { trackUserProfileAction: _ } = (0, P.NJ)(),
        b = 1.25 * (null != n),
        L = 36 + b,
        U = 144 + b,
        M = i.useRef(null),
        O = i.useRef(null),
        V = i.useRef(null),
        w = (0, R.GV)(),
        k = i.useRef(L),
        $ = i.useRef(L),
        D = null != n && null == t,
        [Y, F] = i.useState(!1),
        [H, G] = i.useState(!0),
        [Q, z] = i.useState(!D && j),
        [K, q] = i.useState(!1),
        W = j && Y,
        X = c === ed.d.MODAL || c === ed.d.MODAL_V2,
        J = i.useCallback((e) => (X ? e : Math.min(e, U)), [U, X]),
        Z = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        [ee] = i.useState(() => new u.Ep());
    (i.useEffect(() => () => ee.stop(), [ee]),
        i.useEffect(() => {
            I?.onInteractionPopoutTargetRefChange(M);
        }, [I]));
    let [en, et] = (0, T.z)(() => ({ maxHeight: `${k.current}px`, config: { clamp: !0, duration: 150 } }));
    function el(e) {
        Q &&
            (q(e),
            e
                ? et({ maxHeight: `${J($.current)}px`, delay: 300 * !Z, config: { clamp: !0, duration: 150 * !Z } })
                : et({ maxHeight: `${Math.min(k.current, L)}px`, delay: 0 }),
            Z ? G(!e) : ee.start(e ? 300 : 150, () => G(!e)));
    }
    i.useLayoutEffect(() => {
        if ((F(!0), null == O.current || null == V.current || !W)) return;
        let e = O.current.getBoundingClientRect().height,
            n = V.current.getBoundingClientRect().height,
            t = J(n);
        (z(t > e), (k.current = e), ($.current = n), et({ maxHeight: `${H ? Math.min(k.current, L) : t}px` }));
    }, [W, t, n, et, H, L, J]);
    let ei =
            null != n
                ? (0, l.jsx)(g.A, { emoji: n, animate: d, hideTooltip: !1, tooltipDelay: 300, className: ex.H0 })
                : null,
        er = null != t ? (0, l.jsx)(f.E, { variant: "body-sm/normal", className: ex.qS, children: t }) : null,
        ea =
            void 0 !== y && null == n
                ? (0, l.jsx)(f.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${y}`,
                      className: a()(ex.qS, ex.R9),
                      children: y ?? "",
                  })
                : null,
        es = null == er || "" === t ? ea : er,
        eo = (0, l.jsxs)("div", { className: ex.Qs, children: [ei, es] }),
        eu = (0, l.jsxs)("div", { ref: O, className: a()(ex.Qs, ex.mj), children: [ei, es] }),
        ec = (0, l.jsxs)("div", { ref: V, className: a()(ex.Qs, ex.m2, ex.mj), children: [ei, es] }),
        ef = B.intl.string(K ? B.t.fFaN1b : B.t.xPkLPy),
        eS = Q
            ? (0, l.jsx)(A.A, {
                  showOnFocus: !0,
                  children: (0, l.jsx)(S.D, {
                      className: ex.uJ,
                      "aria-label": ef,
                      "aria-controls": w,
                      "aria-expanded": K,
                      onClick: () => el(!K),
                      focusProps: { ringClassName: ex.o5 },
                      children: (0, l.jsx)(h.ChevronSmallDownIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: K ? ex.DE : void 0,
                      }),
                  }),
              })
            : null,
        eA = (0, l.jsx)("div", {
            ref: v,
            className: ex.A7,
            role: "group",
            "aria-label": r,
            children: (0, l.jsx)("span", {
                className: ex.vW,
                children: (0, l.jsxs)(s.animated.div, {
                    id: w,
                    style: en,
                    className: a()(ex.Qs, { [ex.m2]: !H && X, [ex.p$]: !H && !X }),
                    children: [ei, es],
                }),
            }),
        }),
        eT = (0, l.jsxs)(eE, { className: E, children: [eo, eu, ec] });
    return null == C
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  eT,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(ex.kL, x),
                      onMouseEnter: () => {
                          (_({ action: "HOVER_CUSTOM_STATUS" }), el(!0));
                      },
                      onMouseLeave: () => {
                          el(!1);
                      },
                      children: [eA, p?.(Q), eS],
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  eT,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(ex.kL, x),
                      onFocus: () => {
                          C(!0);
                      },
                      onBlur: (e) => {
                          M.current?.contains(e.relatedTarget) || C(!1);
                      },
                      onMouseEnter: () => {
                          (_({ action: "HOVER_CUSTOM_STATUS" }), C(!0), el(!0));
                      },
                      onMouseLeave: () => {
                          (C(!1), el(!1));
                      },
                      children: [eA, p?.(Q), eS],
                  }),
              ],
          });
}
function eC(e) {
    let { emoji: n, text: t, onCloseProfile: r, editButtonRef: s, className: o, ref: u, ...c } = e,
        [d, f] = i.useState(!1);
    return (0, l.jsx)(ep, {
        ...c,
        ref: u,
        emoji: n,
        text: t,
        className: a()(ex.LL, o),
        onShowToolbar: f,
        renderToolbar: (e) => (0, l.jsx)(eg, { isVisible: d, isExpandable: e, onCloseProfile: r, editButtonRef: s }),
    });
}
function ey(e) {
    let n,
        { emoji: t, text: r, user: s, guildId: o, channelId: u, themeType: c, className: d, ...f } = e,
        { trackUserProfileAction: S } = (0, P.NJ)(),
        { interactionType: A, interactionSource: T, resetInteraction: h } = (0, N.Pq)(),
        m = T === G.dS.STATUS && A === G.AQ.REACT,
        g = T === G.dS.STATUS && A === G.AQ.REPLY,
        x = m || g,
        E = i.useRef(null),
        R = i.useRef(t),
        p = i.useRef(r);
    i.useEffect(() => {
        T === G.dS.STATUS && ((R.current !== t || p.current !== r) && h(), (R.current = t), (p.current = r));
    }, [T, h, t, r]);
    let [y, j] = i.useState(!1),
        v = i.useCallback(
            (e) => {
                (e || !x) && j(e);
            },
            [x],
        );
    return (0, l.jsx)(ef, {
        user: s,
        guildId: o,
        channelId: u,
        themeType: c,
        sourceDetails:
            ((n = null == t ? null : null != t.id ? `\`:${t.name}:\`` : C.Ay.translateSurrogatesToInlineEmoji(t.name)),
            null == r ? n : null == n ? r : `${n} ${r}`),
        sourceType: G.dS.STATUS,
        onAction: S,
        onClose: () => j(!1),
        children: () =>
            (0, l.jsx)(ep, {
                ...f,
                ref: E,
                emoji: t,
                text: r,
                themeType: c,
                className: a()(d, { [ex.zf]: x }),
                onShowToolbar: v,
                renderToolbar: (e) =>
                    (0, l.jsx)(q, {
                        targetRef: E,
                        user: s,
                        sourceType: G.dS.STATUS,
                        isVisible: y && !x,
                        isExpandable: e,
                        onAction: S,
                    }),
            }),
    });
}
let ej = function (e) {
    let { ref: n, ...t } = e,
        {
            user: r,
            guildId: a,
            channelId: s,
            onCloseProfile: u,
            previewText: c,
            previewEmoji: d,
            placeholderText: f,
            prompt: S,
            disableToolbar: A = !1,
            ...T
        } = t,
        h = (0, p.A)(r.id),
        { analyticsLocations: m } = (0, E.Ay)(x.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        g = i.useRef(null),
        R = null != c || null != d,
        C = (0, y.G)(R ? c : h?.state),
        P = (0, o.bG)([j.default], () => j.default.getId() === r.id),
        N = P && !A,
        I = v.Ay.useName(a, s, r),
        _ = P ? B.intl.string(B.t.SlKMnR) : B.intl.formatToPlainString(B.t["91lTRe"], { name: I }),
        b = !P && !r.bot && !A;
    if (R) {
        let e = null != C && "" !== C ? C : null;
        return (0, l.jsx)(E.f5, {
            value: m,
            children: (0, l.jsx)(ep, { emoji: d ?? null, text: e, statusLabel: _, placeholderText: f, ref: n, ...T }),
        });
    }
    let L = h?.emoji ?? null,
        U = null != C && "" !== C ? C : null;
    return null != L || null != U || N
        ? null == L && null == U
            ? (0, l.jsx)(E.f5, {
                  value: m,
                  children: (0, l.jsx)(eR, { onCloseProfile: u, prompt: S, ref: n, addButtonRef: g }),
              })
            : b
              ? (0, l.jsx)(E.f5, {
                    value: m,
                    children: (0, l.jsx)(ey, {
                        user: r,
                        guildId: a,
                        channelId: s,
                        emoji: L,
                        text: U,
                        statusLabel: _,
                        ...T,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(eC, {
                          emoji: L,
                          text: U,
                          statusLabel: _,
                          onCloseProfile: u,
                          editButtonRef: g,
                          ref: n,
                          ...T,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ep, { emoji: L, text: U, statusLabel: _, ref: n, ...T }),
                  })
        : null;
};
