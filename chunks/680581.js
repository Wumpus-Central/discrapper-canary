n.d(t, { A: () => ej });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(736819),
    o = n(855986),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    f = n(834730),
    A = n(939249),
    S = n(140735),
    h = n(717421),
    T = n(847374),
    m = n(775602),
    g = n(51183),
    x = n(793574),
    E = n(688810),
    R = n(915089),
    p = n(410540),
    y = n(7584),
    C = n(208971),
    j = n(46653),
    v = n(562153),
    P = n(183555),
    N = n(679492),
    b = n(453903),
    I = n(265872),
    L = n(403777),
    _ = n(462887),
    U = n(920134),
    M = n(413599),
    O = n(403362),
    V = n(427262),
    k = n(448613),
    w = n(866665),
    $ = n(460905),
    F = n(110384),
    Y = n(365199),
    D = n(101555),
    G = n(570287),
    H = n(518477),
    B = n(792996),
    Q = n(47119);
let z = {
        [H.dS.AVATAR]: () => B.intl.string(B.t["fEUP/i"]),
        [H.dS.STATUS]: () => B.intl.string(B.t.TKdBC8),
        [H.dS.ACTIVITY]: () => B.intl.string(B.t.bSe71F),
    },
    K = {
        [H.dS.AVATAR]: () => B.intl.string(B.t.xvN0fV),
        [H.dS.STATUS]: () => B.intl.string(B.t["C/vzS7"]),
        [H.dS.ACTIVITY]: () => B.intl.string(B.t.ObfsSj),
    };
function q(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: r,
            isExpandable: s,
            interactionSourceId: u,
            targetRef: c,
            onAction: d,
            renderMoreButtonPopout: f,
        } = e,
        A = i.useRef(null),
        S = (0, o.bG)([j.default], () => j.default.getId() === t.id),
        h = (0, G.A)(t.id),
        { onInteraction: T, onInteractionPopoutTargetRefChange: m } = (0, N.Pq)();
    return t.bot || S || !h
        ? null
        : (0, l.jsxs)(D.Ay, {
              className: a()(Q.oO, {
                  [Q.RK]: r,
                  [Q.lu]: s,
                  [Q.U7]: n === H.dS.STATUS,
                  [Q.nL]: n === H.dS.AVATAR,
                  [Q.bt]: n === H.dS.ACTIVITY,
              }),
              children: [
                  (0, l.jsx)(w.m, {
                      asContainer: !0,
                      text: B.intl.string(B.t.nhaI4b),
                      shouldShow: r,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(D.$n, {
                          onClick: function () {
                              (m(c),
                                  n === H.dS.AVATAR
                                      ? d({ action: "PRESS_REACT_AVATAR" })
                                      : n === H.dS.STATUS
                                        ? d({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REACT_ACTIVITY" }),
                                  T?.({ interactionType: H.AQ.REACT, interactionSource: n, interactionSourceId: u }));
                          },
                          className: Q.x6,
                          "aria-label": z[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)($.n, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  (0, l.jsx)(w.m, {
                      asContainer: !0,
                      text: B.intl.string(B.t.RmDYKK),
                      shouldShow: r,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(D.$n, {
                          onClick: function () {
                              (m(c),
                                  n === H.dS.AVATAR
                                      ? d({ action: "PRESS_REPLY_AVATAR" })
                                      : n === H.dS.STATUS
                                        ? d({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REPLY_ACTIVITY" }),
                                  T?.({ interactionType: H.AQ.REPLY, interactionSource: n, interactionSourceId: u }));
                          },
                          className: Q.x6,
                          "aria-label": K[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(F.W, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  f?.((e) =>
                      (0, l.jsx)(w.m, {
                          asContainer: !0,
                          text: B.intl.string(B.t["UKOtz+"]),
                          shouldShow: r,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, l.jsx)(D.$n, {
                              ref: A,
                              ...e,
                              onClick: function () {
                                  (m(A), e.onClick?.());
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
var W = n(939496),
    X = n(307731),
    J = n(818348),
    Z = n(650583),
    ee = n(954024);
function et(e) {
    let {
            user: t,
            guildId: n,
            entry: r,
            sourceType: a,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: A } = (0, N.Pq)(),
        { theme: S } = (0, W.E)(),
        h = (0, o.bG)([M.A], () => M.A.theme),
        T = (0, _.M)(h) ? !(0, _.M)(S) : (0, _.M)(S),
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
            headerClassName: T ? ee.X : void 0,
            guildId: n ?? void 0,
            closePopout: J.tE,
            onSelectEmoji: async (e) => {
                let { emoji: n, willClose: l } = e;
                (await (async function (e) {
                    if (null == e) return;
                    a === H.dS.AVATAR
                        ? c({ action: "SEND_REACT_AVATAR" })
                        : a === H.dS.STATUS
                          ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
                          : c({ action: "SEND_REACT_ACTIVITY" });
                    let n = (function (e) {
                        let { emoji: t, username: n, sourceType: l, sourceDetails: i } = e,
                            r = `:${t.name}:`;
                        switch (l) {
                            case H.dS.ACTIVITY:
                                let a = B.intl.formatToPlainString(B.t.EUFEJt, { username: n }),
                                    s = `
> ${i}`;
                                return null != i
                                    ? `> -# *${a}*${s}
${r}`
                                    : `> -# *${a}*
${r}`;
                            case H.dS.AVATAR:
                                let o = B.intl.formatToPlainString(B.t.E6H15q, { username: n });
                                return `> -# *${o}*
${r}`;
                            case H.dS.STATUS:
                                let u = B.intl.formatToPlainString(B.t.XPQgL2, { username: n }),
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
                    })({ emoji: e, username: V.Ay.getName(t), sourceType: a, sourceDetails: s });
                    A(null);
                    try {
                        await (0, k.p)({
                            userId: t.id,
                            content: n,
                            location: "UserProfileReactPopout",
                            openChannel: !1,
                            whenReady: !1,
                            entry: r,
                        });
                    } catch (e) {}
                    A(H.AQ.REACT);
                })(n),
                    l && (f(), d?.()));
            },
            pickerIntention: X.EmojiIntention.PROFILE,
        })
    );
}
var en = n(478437),
    el = n(305866),
    ei = n(355622),
    er = n(408018),
    ea = n(989161),
    es = n(95701),
    eo = n(767523);
let eu = (0, es.createChannelRecord)({ id: "1", type: en.r.DM });
function ec(e) {
    let {
            user: t,
            guildId: n,
            channelId: r,
            sourceType: s,
            sourceDetails: o,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: f,
            entry: A,
        } = e,
        { resetInteraction: S, setInteractionToast: h } = (0, N.Pq)(),
        { primaryColor: T } = (0, W.E)(),
        [m, g] = i.useState(""),
        [x, E] = i.useState((0, er.x7)(m)),
        R = i.useRef(!1),
        p = i.useRef(null),
        y = i.useCallback(
            (e) => {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), S());
            },
            [S],
        );
    i.useEffect(() => {
        u?.(p?.current);
    }, [p, u]);
    let C = { [eo.h5]: s === H.dS.STATUS, [eo.my]: s === H.dS.AVATAR, [eo.Eb]: s === H.dS.ACTIVITY };
    return (0, l.jsx)(el.l, {
        ref: p,
        onKeyDown: y,
        children: (0, l.jsx)("div", {
            className: a()(eo.kL, C, { [eo.GE]: null != T }),
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
                            case H.dS.ACTIVITY:
                                return B.t.Qn081O;
                            case H.dS.AVATAR:
                                return B.t.xGNPFK;
                            case H.dS.STATUS:
                                return B.t.g9BTCM;
                            default:
                                (0, O.xb)(e);
                        }
                    })(s),
                    { username: v.Ay.getName(n, r, t) },
                ),
                channel: eu,
                textValue: m,
                richValue: x,
                onChange: (e, t, n) => {
                    t !== m && (g(t), E(n));
                },
                focused: R.current,
                onFocus: () => {
                    R.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: n } = e,
                        l = n.trim();
                    if (0 === l.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return (
                            await (async function (e) {
                                if (null == e) return;
                                s === H.dS.AVATAR
                                    ? d({ action: "SEND_REPLY_AVATAR" })
                                    : s === H.dS.STATUS
                                      ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                                      : d({ action: "SEND_REPLY_ACTIVITY" });
                                let n = (function (e) {
                                    let { input: t, username: n, sourceType: l, sourceDetails: i } = e;
                                    switch (l) {
                                        case H.dS.ACTIVITY:
                                            let r = B.intl.formatToPlainString(B.t.WmvMCo, { username: n }),
                                                a = `
> ${i}`;
                                            return null != i
                                                ? `> -# *${r}*${a}
${t}`
                                                : `> -# *${r}*
${t}`;
                                        case H.dS.AVATAR:
                                            let s = B.intl.formatToPlainString(B.t.lpaBsB, { username: n });
                                            return `> -# *${s}*
${t}`;
                                        case H.dS.STATUS:
                                            let o = B.intl.formatToPlainString(B.t.lFXgFV, { username: n }),
                                                u = `
> ${i}`;
                                            return null != i
                                                ? `> -# *${o}*${u}
${t}`
                                                : `> -# *${o}*
${t}`;
                                        default:
                                            (0, O.xb)(l);
                                    }
                                })({ input: e, username: V.Ay.getName(t), sourceType: s, sourceDetails: o });
                                h(null);
                                try {
                                    await (0, k.p)({
                                        userId: t.id,
                                        content: n,
                                        location: "UserProfileReplyPopout",
                                        openChannel: !1,
                                        whenReady: !1,
                                        entry: A,
                                    });
                                } catch (e) {}
                                h(H.AQ.REPLY);
                            })(l),
                            S(),
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
var ed = n(996988);
function ef(e) {
    let { user: t, guildId: n, channelId: i, themeType: r, onClose: a, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: A,
        } = (0, N.Pq)(),
        S = [ed.d.MODAL, ed.d.MODAL_V2].includes(r) ? (0, L.n1)(t.id, n) : void 0,
        h = c === o.sourceType && u === H.AQ.REACT,
        T = c === o.sourceType && u === H.AQ.REPLY,
        m = (h || T) && f === o.sourceId;
    return (0, l.jsx)(b.NA.Provider, {
        value: null,
        children: (0, l.jsx)(I.Y, {
            targetElementRef: A ?? void 0,
            renderPopout: (e) => {
                let { setPopoutRef: s } = e;
                return (0, l.jsx)(h ? et : ec, {
                    user: t,
                    guildId: n,
                    channelId: i,
                    themeType: r,
                    onClose: a,
                    modalKey: S,
                    setPopoutRef: s,
                    ...o,
                });
            },
            onRequestClose: () => {
                (d(), a?.());
            },
            shouldShow: m,
            ...(function (e) {
                let { interactionType: t, interactionSource: n, themeType: l } = e;
                return t === H.AQ.REACT
                    ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                    : l === ed.d.MODAL || l === ed.d.MODAL_V2 || n === H.dS.ACTIVITY
                      ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                      : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
            })({ interactionType: u, interactionSource: c, themeType: r }),
            children: s,
        }),
    });
}
var eA = n(22231),
    eS = n(241326),
    eh = n(253932),
    eT = n(33969),
    em = n(777357);
function eg(e) {
    let { isVisible: t, isExpandable: r, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, P.NJ)(),
        f = i.useRef(null),
        { themeType: A } = (0, W.E)();
    return (0, l.jsxs)(eT.A, {
        className: a()(em.oO, { [em.RK]: t, [em.lu]: r }),
        children: [
            (0, l.jsx)(eT.Y, {
                variant: "custom-status",
                ref: o,
                tooltipText: B.intl.string(B.t.bt75uw),
                shouldDelayTooltip: r,
                onClick: function () {
                    (d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                        (function (e) {
                            let { analyticsLocations: t, stackingBehavior: i, returnRef: r } = e;
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(775417),
                                        n.e(865429),
                                        n.e(25300),
                                        n.e(291103),
                                        n.e(686889),
                                        n.e(875762),
                                        n.e(526807),
                                        n.e(826240),
                                        n.e(455924),
                                        n.e(250478),
                                        n.e(993610),
                                        n.e(356296),
                                        n.e(220287),
                                        n.e(428367),
                                        n.e(655552),
                                        n.e(772163),
                                        n.e(748370),
                                    ]).then(n.bind(n, 431273));
                                    return (n) => (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t, returnRef: r });
                                },
                                null != i ? { stackingBehavior: i } : void 0,
                            );
                        })({
                            analyticsLocations: u,
                            stackingBehavior: A === ed.d.MODAL_V2 ? "stack" : void 0,
                            returnRef: o,
                        }),
                        s?.());
                },
                "aria-label": B.intl.string(B.t.QdHxos),
                "aria-haspopup": "dialog",
                icon: eA.PencilIcon,
            }),
            (0, l.jsx)(eT.Y, {
                variant: "custom-status",
                ref: f,
                tooltipText: B.intl.string(B.t.VkKicb),
                shouldDelayTooltip: r,
                onClick: function () {
                    (d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                        eh.G2.updateSetting(void 0),
                        requestAnimationFrame(() => o.current?.focus()));
                },
                "aria-label": B.intl.string(B.t.wfYTHe),
                icon: eS.TrashIcon,
            }),
        ],
    });
}
var ex = n(502622);
function eE(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: a()(ex.nL, n),
        children: (0, l.jsx)("div", {
            className: ex.A7,
            children: (0, l.jsx)("span", { className: ex.vW, children: t }),
        }),
    });
}
function eR(e) {
    let { onCloseProfile: t, prompt: i, addButtonRef: r, ref: s } = e,
        o = (0, R.GV)(),
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: h } = (0, P.NJ)(),
        { themeType: T } = (0, W.E)(),
        m = null != i ? i.label() : B.intl.string(B.t.evw0oz),
        g = (0, l.jsxs)("div", {
            className: ex.Qs,
            children: [
                (0, l.jsx)(d.U, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                (0, l.jsx)(f.E, { variant: "body-sm/normal", className: a()(ex.ch, null != i && ex.R9), children: m }),
            ],
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eE, { children: g }),
            (0, l.jsx)("div", {
                className: a()(ex.kL, ex.LL),
                ref: s,
                children: (0, l.jsx)(A.D, {
                    innerRef: r,
                    className: ex.A7,
                    "aria-label": B.intl.string(B.t["zrpF/b"]),
                    "aria-describedby": o,
                    onClick: function () {
                        (h({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                            t?.(),
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(775417),
                                        n.e(865429),
                                        n.e(25300),
                                        n.e(291103),
                                        n.e(686889),
                                        n.e(875762),
                                        n.e(526807),
                                        n.e(826240),
                                        n.e(455924),
                                        n.e(250478),
                                        n.e(993610),
                                        n.e(356296),
                                        n.e(220287),
                                        n.e(428367),
                                        n.e(655552),
                                        n.e(772163),
                                        n.e(748370),
                                    ]).then(n.bind(n, 431273));
                                    return (t) =>
                                        (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: u, prompt: i, returnRef: r });
                                },
                                T === ed.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                            ));
                    },
                    focusProps: { ringClassName: ex.hN },
                    children: (0, l.jsxs)("span", {
                        className: a()(ex.vW, ex.vk),
                        children: [
                            (0, l.jsx)(d.U, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                            (0, l.jsxs)(S.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", m] }),
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
            emoji: t,
            text: n,
            statusLabel: r,
            themeType: c,
            animate: d,
            className: x,
            referenceClassName: E,
            renderToolbar: p,
            onShowToolbar: y,
            placeholderText: C,
            hasEntered: j = !0,
            ref: v,
        } = e,
        b = (0, N.NR)(),
        { trackUserProfileAction: I } = (0, P.NJ)(),
        L = 1.25 * (null != t),
        _ = 36 + L,
        U = 144 + L,
        M = i.useRef(null),
        O = i.useRef(null),
        V = i.useRef(null),
        k = (0, R.GV)(),
        w = i.useRef(_),
        $ = i.useRef(_),
        F = null != t && null == n,
        [Y, D] = i.useState(!1),
        [G, H] = i.useState(!0),
        [Q, z] = i.useState(!F && j),
        [K, q] = i.useState(!1),
        W = j && Y,
        X = c === ed.d.MODAL || c === ed.d.MODAL_V2,
        J = i.useCallback((e) => (X ? e : Math.min(e, U)), [U, X]),
        Z = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        [ee] = i.useState(() => new u.Ep());
    (i.useEffect(() => () => ee.stop(), [ee]),
        i.useEffect(() => {
            b?.onInteractionPopoutTargetRefChange(M);
        }, [b]));
    let [et, en] = (0, h.z)(() => ({ maxHeight: `${w.current}px`, config: { clamp: !0, duration: 150 } }));
    function el(e) {
        Q &&
            (q(e),
            e
                ? en({ maxHeight: `${J($.current)}px`, delay: 300 * !Z, config: { clamp: !0, duration: 150 * !Z } })
                : en({ maxHeight: `${Math.min(w.current, _)}px`, delay: 0 }),
            Z ? H(!e) : ee.start(e ? 300 : 150, () => H(!e)));
    }
    i.useLayoutEffect(() => {
        if ((D(!0), null == O.current || null == V.current || !W)) return;
        let e = O.current.getBoundingClientRect().height,
            t = V.current.getBoundingClientRect().height,
            n = J(t);
        (z(n > e), (w.current = e), ($.current = t), en({ maxHeight: `${G ? Math.min(w.current, _) : n}px` }));
    }, [W, n, t, en, G, _, J]);
    let ei =
            null != t
                ? (0, l.jsx)(g.A, { emoji: t, animate: d, hideTooltip: !1, tooltipDelay: 300, className: ex.H0 })
                : null,
        er = null != n ? (0, l.jsx)(f.E, { variant: "body-sm/normal", className: ex.qS, children: n }) : null,
        ea =
            void 0 !== C && null == t
                ? (0, l.jsx)(f.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${C}`,
                      className: a()(ex.qS, ex.R9),
                      children: C ?? "",
                  })
                : null,
        es = null == er || "" === n ? ea : er,
        eo = (0, l.jsxs)("div", { className: ex.Qs, children: [ei, es] }),
        eu = (0, l.jsxs)("div", { ref: O, className: a()(ex.Qs, ex.mj), children: [ei, es] }),
        ec = (0, l.jsxs)("div", { ref: V, className: a()(ex.Qs, ex.m2, ex.mj), children: [ei, es] }),
        ef = B.intl.string(K ? B.t.fFaN1b : B.t.xPkLPy),
        eA = Q
            ? (0, l.jsx)(S.A, {
                  showOnFocus: !0,
                  children: (0, l.jsx)(A.D, {
                      className: ex.uJ,
                      "aria-label": ef,
                      "aria-controls": k,
                      "aria-expanded": K,
                      onClick: () => el(!K),
                      focusProps: { ringClassName: ex.o5 },
                      children: (0, l.jsx)(T.a, { size: "xs", color: "currentColor", className: K ? ex.DE : void 0 }),
                  }),
              })
            : null,
        eS = (0, l.jsx)("div", {
            ref: v,
            className: ex.A7,
            role: "group",
            "aria-label": r,
            children: (0, l.jsx)("span", {
                className: ex.vW,
                children: (0, l.jsxs)(s.animated.div, {
                    id: k,
                    style: et,
                    className: a()(ex.Qs, { [ex.m2]: !G && X, [ex.p$]: !G && !X }),
                    children: [ei, es],
                }),
            }),
        }),
        eh = (0, l.jsxs)(eE, { className: E, children: [eo, eu, ec] });
    return null == y
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  eh,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(ex.kL, x),
                      onMouseEnter: () => {
                          (I({ action: "HOVER_CUSTOM_STATUS" }), el(!0));
                      },
                      onMouseLeave: () => {
                          el(!1);
                      },
                      children: [eS, p?.(Q), eA],
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  eh,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(ex.kL, x),
                      onFocus: () => {
                          y(!0);
                      },
                      onBlur: (e) => {
                          M.current?.contains(e.relatedTarget) || y(!1);
                      },
                      onMouseEnter: () => {
                          (I({ action: "HOVER_CUSTOM_STATUS" }), y(!0), el(!0));
                      },
                      onMouseLeave: () => {
                          (y(!1), el(!1));
                      },
                      children: [eS, p?.(Q), eA],
                  }),
              ],
          });
}
function ey(e) {
    let { emoji: t, text: n, onCloseProfile: r, editButtonRef: s, className: o, ref: u, ...c } = e,
        [d, f] = i.useState(!1);
    return (0, l.jsx)(ep, {
        ...c,
        ref: u,
        emoji: t,
        text: n,
        className: a()(ex.LL, o),
        onShowToolbar: f,
        renderToolbar: (e) => (0, l.jsx)(eg, { isVisible: d, isExpandable: e, onCloseProfile: r, editButtonRef: s }),
    });
}
function eC(e) {
    let t,
        { emoji: n, text: r, user: s, guildId: o, channelId: u, themeType: c, className: d, ...f } = e,
        { trackUserProfileAction: A } = (0, P.NJ)(),
        { interactionType: S, interactionSource: h, resetInteraction: T } = (0, N.Pq)(),
        m = h === H.dS.STATUS && S === H.AQ.REACT,
        g = h === H.dS.STATUS && S === H.AQ.REPLY,
        x = m || g,
        E = i.useRef(null),
        R = i.useRef(n),
        p = i.useRef(r);
    i.useEffect(() => {
        h === H.dS.STATUS && ((R.current !== n || p.current !== r) && T(), (R.current = n), (p.current = r));
    }, [h, T, n, r]);
    let [C, j] = i.useState(!1),
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
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : y.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == r ? t : null == t ? r : `${t} ${r}`),
        sourceType: H.dS.STATUS,
        onAction: A,
        onClose: () => j(!1),
        children: () =>
            (0, l.jsx)(ep, {
                ...f,
                ref: E,
                emoji: n,
                text: r,
                themeType: c,
                className: a()(d, { [ex.zf]: x }),
                onShowToolbar: v,
                renderToolbar: (e) =>
                    (0, l.jsx)(q, {
                        targetRef: E,
                        user: s,
                        sourceType: H.dS.STATUS,
                        isVisible: C && !x,
                        isExpandable: e,
                        onAction: A,
                    }),
            }),
    });
}
let ej = function (e) {
    let { ref: t, ...n } = e,
        {
            user: r,
            guildId: a,
            channelId: s,
            onCloseProfile: u,
            previewText: c,
            previewEmoji: d,
            placeholderText: f,
            prompt: A,
            disableToolbar: S = !1,
            ...h
        } = n,
        T = (0, p.A)(r.id),
        { analyticsLocations: m } = (0, E.Ay)(x.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        g = i.useRef(null),
        R = null != c || null != d,
        y = (0, C.G)(R ? c : T?.state),
        P = (0, o.bG)([j.default], () => j.default.getId() === r.id),
        N = P && !S,
        b = v.Ay.useName(a, s, r),
        I = P ? B.intl.string(B.t.SlKMnR) : B.intl.formatToPlainString(B.t["91lTRe"], { name: b }),
        L = !P && !r.bot && !S;
    if (R) {
        let e = null != y && "" !== y ? y : null;
        return (0, l.jsx)(E.f5, {
            value: m,
            children: (0, l.jsx)(ep, { emoji: d ?? null, text: e, statusLabel: I, placeholderText: f, ref: t, ...h }),
        });
    }
    let _ = T?.emoji ?? null,
        U = null != y && "" !== y ? y : null;
    return null != _ || null != U || N
        ? null == _ && null == U
            ? (0, l.jsx)(E.f5, {
                  value: m,
                  children: (0, l.jsx)(eR, { onCloseProfile: u, prompt: A, ref: t, addButtonRef: g }),
              })
            : L
              ? (0, l.jsx)(E.f5, {
                    value: m,
                    children: (0, l.jsx)(eC, {
                        user: r,
                        guildId: a,
                        channelId: s,
                        emoji: _,
                        text: U,
                        statusLabel: I,
                        ...h,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ey, {
                          emoji: _,
                          text: U,
                          statusLabel: I,
                          onCloseProfile: u,
                          editButtonRef: g,
                          ref: t,
                          ...h,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ep, { emoji: _, text: U, statusLabel: I, ref: t, ...h }),
                  })
        : null;
};
