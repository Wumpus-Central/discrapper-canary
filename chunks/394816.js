n.d(t, { A: () => ej });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(202091),
    o = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    f = n(834730),
    A = n(939249),
    S = n(140735),
    T = n(717421),
    h = n(847374),
    m = n(775602),
    g = n(51183),
    x = n(793574),
    E = n(688810),
    R = n(915089),
    p = n(410540),
    C = n(7584),
    y = n(208971),
    j = n(280450),
    v = n(562153),
    P = n(183555),
    N = n(679492),
    I = n(922016),
    L = n(403777),
    _ = n(462887),
    b = n(879064),
    U = n(363195),
    M = n(403362),
    O = n(427262),
    $ = n(448613),
    V = n(866665),
    k = n(460905),
    w = n(110384),
    F = n(365199),
    Y = n(101555),
    D = n(570287),
    G = n(518477),
    H = n(660183),
    B = n(47119);
let Q = "> -# *",
    z = {
        [G.dS.AVATAR]: () => H.intl.string(H.t["fEUP/i"]),
        [G.dS.STATUS]: () => H.intl.string(H.t.TKdBC8),
        [G.dS.ACTIVITY]: () => H.intl.string(H.t.bSe71F),
    },
    K = {
        [G.dS.AVATAR]: () => H.intl.string(H.t.xvN0fV),
        [G.dS.STATUS]: () => H.intl.string(H.t["C/vzS7"]),
        [G.dS.ACTIVITY]: () => H.intl.string(H.t.ObfsSj),
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
        T = (0, D.A)(t.id),
        { onInteraction: h, onInteractionPopoutTargetRefChange: m } = (0, N.Pq)();
    return t.bot || S || !T
        ? null
        : (0, l.jsxs)(Y.Ay, {
              className: a()(B.oO, {
                  [B.RK]: r,
                  [B.lu]: s,
                  [B.U7]: n === G.dS.STATUS,
                  [B.nL]: n === G.dS.AVATAR,
                  [B.bt]: n === G.dS.ACTIVITY,
              }),
              children: [
                  (0, l.jsx)(V.m, {
                      asContainer: !0,
                      text: H.intl.string(H.t.nhaI4b),
                      shouldShow: r,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(Y.$n, {
                          onClick: function () {
                              (m(c),
                                  n === G.dS.AVATAR
                                      ? d({ action: "PRESS_REACT_AVATAR" })
                                      : n === G.dS.STATUS
                                        ? d({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REACT_ACTIVITY" }),
                                  h?.({ interactionType: G.AQ.REACT, interactionSource: n, interactionSourceId: u }));
                          },
                          className: B.x6,
                          "aria-label": z[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(k.n, { size: "xs", className: B.Kk }),
                      }),
                  }),
                  (0, l.jsx)(V.m, {
                      asContainer: !0,
                      text: H.intl.string(H.t.RmDYKK),
                      shouldShow: r,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(Y.$n, {
                          onClick: function () {
                              (m(c),
                                  n === G.dS.AVATAR
                                      ? d({ action: "PRESS_REPLY_AVATAR" })
                                      : n === G.dS.STATUS
                                        ? d({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REPLY_ACTIVITY" }),
                                  h?.({ interactionType: G.AQ.REPLY, interactionSource: n, interactionSourceId: u }));
                          },
                          className: B.x6,
                          "aria-label": K[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(w.W, { size: "xs", className: B.Kk }),
                      }),
                  }),
                  f?.((e) =>
                      (0, l.jsx)(V.m, {
                          asContainer: !0,
                          text: H.intl.string(H.t["UKOtz+"]),
                          shouldShow: r,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, l.jsx)(Y.$n, {
                              ref: A,
                              ...e,
                              onClick: function () {
                                  (m(A), e.onClick?.());
                              },
                              className: B.x6,
                              "aria-label": H.intl.string(H.t["UKOtz+"]),
                              children: (0, l.jsx)(F.MoreHorizontalIcon, { size: "xs", className: B.Kk }),
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
        T = (0, o.bG)([U.A], () => U.A.theme),
        h = (0, _.M)(T) ? !(0, _.M)(S) : (0, _.M)(S),
        m = i.useRef(null);
    async function g(e) {
        if (null == e) return;
        a === G.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : a === G.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: l, sourceDetails: i } = e,
                r = `:${t.name}:`;
            switch (l) {
                case G.dS.ACTIVITY:
                    let a = H.intl.formatToPlainString(H.t.EUFEJt, { username: n }),
                        s = `
> ${i}`;
                    return null != i
                        ? `${Q}${a}*${s}
${r}`
                        : `${Q}${a}*
${r}`;
                case G.dS.AVATAR:
                    let o = H.intl.formatToPlainString(H.t.E6H15q, { username: n });
                    return `${Q}${o}*
${r}`;
                case G.dS.STATUS:
                    let u = H.intl.formatToPlainString(H.t.XPQgL2, { username: n }),
                        c = `
> ${i}`;
                    return null != i
                        ? `${Q}${u}*${c}
${r}`
                        : `${Q}${u}*
${r}`;
                default:
                    (0, M.xb)(l);
            }
        })({ emoji: e, username: O.Ay.getName(t), sourceType: a, sourceDetails: s });
        A(null);
        try {
            await (0, $.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: r,
            });
        } catch (e) {}
        A(G.AQ.REACT);
    }
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
        (0, l.jsx)(b.A, {
            headerClassName: h ? ee.X : void 0,
            guildId: n ?? void 0,
            closePopout: J.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                (await g(t), n && (f(), d?.()));
            },
            pickerIntention: X.EmojiIntention.PROFILE,
        })
    );
}
var en = n(478437),
    el = n(305866),
    ei = n(355622),
    er = n(408018),
    ea = n(479909),
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
        { resetInteraction: S, setInteractionToast: T } = (0, N.Pq)(),
        { primaryColor: h } = (0, W.E)(),
        [m, g] = i.useState(""),
        [x, E] = i.useState((0, er.x7)(m)),
        R = i.useRef(!1),
        p = i.useRef(null),
        C = i.useCallback(
            (e) => {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), S());
            },
            [S],
        );
    async function y(e) {
        if (null == e) return;
        s === G.dS.AVATAR
            ? d({ action: "SEND_REPLY_AVATAR" })
            : s === G.dS.STATUS
              ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
              : d({ action: "SEND_REPLY_ACTIVITY" });
        let n = (function (e) {
            let { input: t, username: n, sourceType: l, sourceDetails: i } = e;
            switch (l) {
                case G.dS.ACTIVITY:
                    let r = H.intl.formatToPlainString(H.t.WmvMCo, { username: n }),
                        a = `
> ${i}`;
                    return null != i
                        ? `${Q}${r}*${a}
${t}`
                        : `${Q}${r}*
${t}`;
                case G.dS.AVATAR:
                    let s = H.intl.formatToPlainString(H.t.lpaBsB, { username: n });
                    return `${Q}${s}*
${t}`;
                case G.dS.STATUS:
                    let o = H.intl.formatToPlainString(H.t.lFXgFV, { username: n }),
                        u = `
> ${i}`;
                    return null != i
                        ? `${Q}${o}*${u}
${t}`
                        : `${Q}${o}*
${t}`;
                default:
                    (0, M.xb)(l);
            }
        })({ input: e, username: O.Ay.getName(t), sourceType: s, sourceDetails: o });
        T(null);
        try {
            await (0, $.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: A,
            });
        } catch (e) {}
        T(G.AQ.REPLY);
    }
    i.useEffect(() => {
        u?.(p?.current);
    }, [p, u]);
    let j = { [eo.h5]: s === G.dS.STATUS, [eo.my]: s === G.dS.AVATAR, [eo.Eb]: s === G.dS.ACTIVITY };
    return (0, l.jsx)(el.l, {
        ref: p,
        onKeyDown: C,
        children: (0, l.jsx)("div", {
            className: a()(eo.kL, j, { [eo.GE]: null != h }),
            children: (0, l.jsx)(ea.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: eo.hF,
                innerClassName: eo.rn,
                editorClassName: eo.EN,
                type: ei.oU.USER_PROFILE_REPLY,
                placeholder: H.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case G.dS.ACTIVITY:
                                return H.t.Qn081O;
                            case G.dS.AVATAR:
                                return H.t.xGNPFK;
                            case G.dS.STATUS:
                                return H.t.g9BTCM;
                            default:
                                (0, M.xb)(e);
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
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return (await y(n), S(), f?.(), { shouldClear: !0, shouldRefocus: !1 });
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
        T = c === o.sourceType && u === G.AQ.REACT,
        h = c === o.sourceType && u === G.AQ.REPLY,
        m = (T || h) && f === o.sourceId;
    return (0, l.jsx)(I.Y, {
        targetElementRef: A ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(T ? et : ec, {
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
            return t === G.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === ed.d.MODAL || l === ed.d.MODAL_V2 || n === G.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: r }),
        children: s,
    });
}
var eA = n(22231),
    eS = n(241326),
    eT = n(885386),
    eh = n(33969),
    em = n(777357);
function eg(e) {
    let { isVisible: t, isExpandable: r, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, P.NJ)(),
        f = i.useRef(null),
        { themeType: A } = (0, W.E)();
    return (0, l.jsxs)(eh.A, {
        className: a()(em.oO, { [em.RK]: t, [em.lu]: r }),
        children: [
            (0, l.jsx)(eh.Y, {
                variant: "custom-status",
                ref: o,
                tooltipText: H.intl.string(H.t.bt75uw),
                shouldDelayTooltip: r,
                onClick: function () {
                    (d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                        (function (e) {
                            let { analyticsLocations: t, stackingBehavior: i, returnRef: r } = e;
                            (0, c.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("775417"),
                                        n.e("865429"),
                                        n.e("25300"),
                                        n.e("291103"),
                                        n.e("686889"),
                                        n.e("875762"),
                                        n.e("526807"),
                                        n.e("193158"),
                                        n.e("455924"),
                                        n.e("250478"),
                                        n.e("348900"),
                                        n.e("356296"),
                                        n.e("220287"),
                                        n.e("428367"),
                                        n.e("655552"),
                                        n.e("772163"),
                                        n.e("689122"),
                                    ]).then(n.bind(n, 657977));
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
                "aria-label": H.intl.string(H.t.QdHxos),
                "aria-haspopup": "dialog",
                icon: eA.PencilIcon,
            }),
            (0, l.jsx)(eh.Y, {
                variant: "custom-status",
                ref: f,
                tooltipText: H.intl.string(H.t.VkKicb),
                shouldDelayTooltip: r,
                onClick: function () {
                    (d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                        eT.G2.updateSetting(void 0),
                        requestAnimationFrame(() => o.current?.focus()));
                },
                "aria-label": H.intl.string(H.t.wfYTHe),
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
        { trackUserProfileAction: T } = (0, P.NJ)(),
        { themeType: h } = (0, W.E)(),
        m = null != i ? i.label() : H.intl.string(H.t.evw0oz),
        g = (0, l.jsxs)("div", {
            className: ex.Qs,
            children: [
                (0, l.jsx)(d.U, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                (0, l.jsx)(f.E, { variant: "text-sm/normal", className: a()(ex.ch, null != i && ex.R9), children: m }),
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
                    "aria-label": H.intl.string(H.t["zrpF/b"]),
                    "aria-describedby": o,
                    onClick: function () {
                        (T({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                            t?.(),
                            (0, c.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("775417"),
                                        n.e("865429"),
                                        n.e("25300"),
                                        n.e("291103"),
                                        n.e("686889"),
                                        n.e("875762"),
                                        n.e("526807"),
                                        n.e("193158"),
                                        n.e("455924"),
                                        n.e("250478"),
                                        n.e("348900"),
                                        n.e("356296"),
                                        n.e("220287"),
                                        n.e("428367"),
                                        n.e("655552"),
                                        n.e("772163"),
                                        n.e("689122"),
                                    ]).then(n.bind(n, 657977));
                                    return (t) =>
                                        (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: u, prompt: i, returnRef: r });
                                },
                                h === ed.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                            ));
                    },
                    focusProps: { ringClassName: ex.hN },
                    children: (0, l.jsxs)("span", {
                        className: a()(ex.vW, ex.vk),
                        children: [
                            (0, l.jsx)(d.U, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                            (0, l.jsxs)(S.A, { id: o, children: [H.intl.string(H.t.EVV6uZ), ": ", m] }),
                            (0, l.jsx)(f.E, {
                                variant: "text-sm/normal",
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
            onShowToolbar: C,
            placeholderText: y,
            hasEntered: j = !0,
            ref: v,
        } = e,
        I = (0, N.NR)(),
        { trackUserProfileAction: L } = (0, P.NJ)(),
        _ = 1.25 * (null != t),
        b = 36 + _,
        U = 144 + _,
        M = i.useRef(null),
        O = i.useRef(null),
        $ = i.useRef(null),
        V = (0, R.GV)(),
        k = i.useRef(b),
        w = i.useRef(b),
        F = null != t && null == n,
        [Y, D] = i.useState(!1),
        [B, Q] = i.useState(!0),
        [z, K] = i.useState(!F && j),
        [q, W] = i.useState(!1),
        X = j && Y,
        J = c === ed.d.MODAL || c === ed.d.MODAL_V2,
        Z = i.useCallback((e) => (J ? e : Math.min(e, U)), [U, J]),
        ee = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        [et] = i.useState(() => new u.Ep());
    (i.useEffect(() => () => et.stop(), [et]),
        i.useEffect(() => {
            I?.onInteractionPopoutTargetRefChange(M);
        }, [I]));
    let [en, el] = (0, T.z)(() => ({ maxHeight: `${k.current}px`, config: { clamp: !0, duration: 150 } }));
    function ei(e) {
        z &&
            (W(e),
            e
                ? el({ maxHeight: `${Z(w.current)}px`, delay: 300 * !ee, config: { clamp: !0, duration: 150 * !ee } })
                : el({ maxHeight: `${Math.min(k.current, b)}px`, delay: 0 }),
            ee ? Q(!e) : et.start(e ? 300 : 150, () => Q(!e)));
    }
    i.useLayoutEffect(() => {
        if ((D(!0), null == O.current || null == $.current || !X)) return;
        let e = O.current.getBoundingClientRect().height,
            t = $.current.getBoundingClientRect().height,
            n = Z(t);
        (K(n > e), (k.current = e), (w.current = t), el({ maxHeight: `${B ? Math.min(k.current, b) : n}px` }));
    }, [X, n, t, el, B, b, Z]);
    let er =
            null != t
                ? (0, l.jsx)(g.A, { emoji: t, animate: d, hideTooltip: !1, tooltipDelay: G.In, className: ex.H0 })
                : null,
        ea = null != n ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: ex.qS, children: n }) : null,
        es =
            void 0 !== y && null == t
                ? (0, l.jsx)(f.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      "aria-label": `${H.intl.string(H.t.EVV6uZ)}: ${y}`,
                      className: a()(ex.qS, ex.R9),
                      children: y ?? "",
                  })
                : null,
        eo = null == ea || "" === n ? es : ea,
        eu = (0, l.jsxs)("div", { className: ex.Qs, children: [er, eo] }),
        ec = (0, l.jsxs)("div", { ref: O, className: a()(ex.Qs, ex.mj), children: [er, eo] }),
        ef = (0, l.jsxs)("div", { ref: $, className: a()(ex.Qs, ex.m2, ex.mj), children: [er, eo] }),
        eA = H.intl.string(q ? H.t.fFaN1b : H.t.xPkLPy),
        eS = z
            ? (0, l.jsx)(S.A, {
                  showOnFocus: !0,
                  children: (0, l.jsx)(A.D, {
                      className: ex.uJ,
                      "aria-label": eA,
                      "aria-controls": V,
                      "aria-expanded": q,
                      onClick: () => ei(!q),
                      focusProps: { ringClassName: ex.o5 },
                      children: (0, l.jsx)(h.a, { size: "xs", color: "currentColor", className: q ? ex.DE : void 0 }),
                  }),
              })
            : null,
        eT = (0, l.jsx)("div", {
            ref: v,
            className: ex.A7,
            role: "group",
            "aria-label": r,
            children: (0, l.jsx)("span", {
                className: ex.vW,
                children: (0, l.jsxs)(s.animated.div, {
                    id: V,
                    style: en,
                    className: a()(ex.Qs, { [ex.m2]: !B && J, [ex.p$]: !B && !J }),
                    children: [er, eo],
                }),
            }),
        }),
        eh = (0, l.jsxs)(eE, { className: E, children: [eu, ec, ef] });
    return null == C
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  eh,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(ex.kL, x),
                      onMouseEnter: () => {
                          (L({ action: "HOVER_CUSTOM_STATUS" }), ei(!0));
                      },
                      onMouseLeave: () => {
                          ei(!1);
                      },
                      children: [eT, p?.(z), eS],
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
                          C(!0);
                      },
                      onBlur: (e) => {
                          M.current?.contains(e.relatedTarget) || C(!1);
                      },
                      onMouseEnter: () => {
                          (L({ action: "HOVER_CUSTOM_STATUS" }), C(!0), ei(!0));
                      },
                      onMouseLeave: () => {
                          (C(!1), ei(!1));
                      },
                      children: [eT, p?.(z), eS],
                  }),
              ],
          });
}
function eC(e) {
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
function ey(e) {
    let t,
        { emoji: n, text: r, user: s, guildId: o, channelId: u, themeType: c, className: d, ...f } = e,
        { trackUserProfileAction: A } = (0, P.NJ)(),
        { interactionType: S, interactionSource: T, resetInteraction: h } = (0, N.Pq)(),
        m = T === G.dS.STATUS && S === G.AQ.REACT,
        g = T === G.dS.STATUS && S === G.AQ.REPLY,
        x = m || g,
        E = i.useRef(null),
        R = i.useRef(n),
        p = i.useRef(r);
    i.useEffect(() => {
        T === G.dS.STATUS && ((R.current !== n || p.current !== r) && h(), (R.current = n), (p.current = r));
    }, [T, h, n, r]);
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
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : C.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == r ? t : null == t ? r : `${t} ${r}`),
        sourceType: G.dS.STATUS,
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
                        sourceType: G.dS.STATUS,
                        isVisible: y && !x,
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
            ...T
        } = n,
        h = (0, p.A)(r.id),
        { analyticsLocations: m } = (0, E.Ay)(x.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        g = i.useRef(null),
        R = null != c || null != d,
        C = (0, y.G)(R ? c : h?.state),
        P = (0, o.bG)([j.default], () => j.default.getId() === r.id),
        N = P && !S,
        I = v.Ay.useName(a, s, r),
        L = P ? H.intl.string(H.t.SlKMnR) : H.intl.formatToPlainString(H.t["91lTRe"], { name: I }),
        _ = !P && !r.bot && !S;
    if (R) {
        let e = null != C && "" !== C ? C : null;
        return (0, l.jsx)(E.f5, {
            value: m,
            children: (0, l.jsx)(ep, { emoji: d ?? null, text: e, statusLabel: L, placeholderText: f, ref: t, ...T }),
        });
    }
    let b = h?.emoji ?? null,
        U = null != C && "" !== C ? C : null;
    return null != b || null != U || N
        ? null == b && null == U
            ? (0, l.jsx)(E.f5, {
                  value: m,
                  children: (0, l.jsx)(eR, { onCloseProfile: u, prompt: A, ref: t, addButtonRef: g }),
              })
            : _
              ? (0, l.jsx)(E.f5, {
                    value: m,
                    children: (0, l.jsx)(ey, {
                        user: r,
                        guildId: a,
                        channelId: s,
                        emoji: b,
                        text: U,
                        statusLabel: L,
                        ...T,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(eC, {
                          emoji: b,
                          text: U,
                          statusLabel: L,
                          onCloseProfile: u,
                          editButtonRef: g,
                          ref: t,
                          ...T,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ep, { emoji: b, text: U, statusLabel: L, ref: t, ...T }),
                  })
        : null;
};
