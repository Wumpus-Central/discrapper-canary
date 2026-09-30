n.d(t, { A: () => ev });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(202091),
    o = n(17928),
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
    p = n(915089),
    R = n(410540),
    y = n(7584),
    C = n(208971),
    v = n(280450),
    j = n(562153),
    N = n(183555),
    P = n(679492),
    b = n(922016),
    I = n(403777),
    L = n(462887),
    _ = n(267889),
    U = n(363195),
    M = n(403362),
    O = n(427262),
    w = n(448613),
    $ = n(866665),
    V = n(460905),
    k = n(110384),
    D = n(365199),
    F = n(101555),
    Y = n(570287),
    G = n(518477),
    H = n(375708),
    B = n(47119);
let z = "> -# *",
    Q = {
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
            isVisible: a,
            isExpandable: s,
            interactionSourceId: u,
            targetRef: c,
            onAction: d,
            renderMoreButtonPopout: f,
        } = e,
        A = i.useRef(null),
        S = (0, o.bG)([v.default], () => v.default.getId() === t.id),
        h = (0, Y.A)(t.id),
        { onInteraction: T, onInteractionPopoutTargetRefChange: m } = (0, P.Pq)();
    return t.bot || S || !h
        ? null
        : (0, l.jsxs)(F.Ay, {
              className: r()(B.oO, {
                  [B.RK]: a,
                  [B.lu]: s,
                  [B.U7]: n === G.dS.STATUS,
                  [B.nL]: n === G.dS.AVATAR,
                  [B.bt]: n === G.dS.ACTIVITY,
              }),
              children: [
                  (0, l.jsx)($.m, {
                      asContainer: !0,
                      text: H.intl.string(H.t.nhaI4b),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(F.$n, {
                          onClick: function () {
                              (m(c),
                                  n === G.dS.AVATAR
                                      ? d({ action: "PRESS_REACT_AVATAR" })
                                      : n === G.dS.STATUS
                                        ? d({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REACT_ACTIVITY" }),
                                  T?.({ interactionType: G.AQ.REACT, interactionSource: n, interactionSourceId: u }));
                          },
                          className: B.x6,
                          "aria-label": Q[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(V.n, { size: "xs", className: B.Kk }),
                      }),
                  }),
                  (0, l.jsx)($.m, {
                      asContainer: !0,
                      text: H.intl.string(H.t.RmDYKK),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(F.$n, {
                          onClick: function () {
                              (m(c),
                                  n === G.dS.AVATAR
                                      ? d({ action: "PRESS_REPLY_AVATAR" })
                                      : n === G.dS.STATUS
                                        ? d({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : d({ action: "PRESS_REPLY_ACTIVITY" }),
                                  T?.({ interactionType: G.AQ.REPLY, interactionSource: n, interactionSourceId: u }));
                          },
                          className: B.x6,
                          "aria-label": K[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(k.W, { size: "xs", className: B.Kk }),
                      }),
                  }),
                  f?.((e) =>
                      (0, l.jsx)($.m, {
                          asContainer: !0,
                          text: H.intl.string(H.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, l.jsx)(F.$n, {
                              ref: A,
                              ...e,
                              onClick: function () {
                                  (m(A), e.onClick?.());
                              },
                              className: B.x6,
                              "aria-label": H.intl.string(H.t["UKOtz+"]),
                              children: (0, l.jsx)(D.MoreHorizontalIcon, { size: "xs", className: B.Kk }),
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
            entry: a,
            sourceType: r,
            sourceDetails: s,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: f, setInteractionToast: A } = (0, P.Pq)(),
        { theme: S } = (0, W.E)(),
        h = (0, o.bG)([U.A], () => U.A.theme),
        T = (0, L.M)(h) ? !(0, L.M)(S) : (0, L.M)(S),
        m = i.useRef(null);
    async function g(e) {
        if (null == e) return;
        r === G.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : r === G.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: l, sourceDetails: i } = e,
                a = `:${t.name}:`;
            switch (l) {
                case G.dS.ACTIVITY:
                    let r = H.intl.formatToPlainString(H.t.EUFEJt, { username: n }),
                        s = `
> ${i}`;
                    return null != i
                        ? `${z}${r}*${s}
${a}`
                        : `${z}${r}*
${a}`;
                case G.dS.AVATAR:
                    let o = H.intl.formatToPlainString(H.t.E6H15q, { username: n });
                    return `${z}${o}*
${a}`;
                case G.dS.STATUS:
                    let u = H.intl.formatToPlainString(H.t.XPQgL2, { username: n }),
                        c = `
> ${i}`;
                    return null != i
                        ? `${z}${u}*${c}
${a}`
                        : `${z}${u}*
${a}`;
                default:
                    (0, M.xb)(l);
            }
        })({ emoji: e, username: O.Ay.getName(t), sourceType: r, sourceDetails: s });
        A(null);
        try {
            await (0, w.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: a,
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
        (0, l.jsx)(_.A, {
            headerClassName: T ? ee.X : void 0,
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
    ea = n(408018),
    er = n(959070),
    es = n(95701),
    eo = n(767523);
let eu = (0, es.createChannelRecord)({ id: "1", type: en.r.DM });
function ec(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            sourceType: s,
            sourceDetails: o,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: f,
            entry: A,
        } = e,
        { resetInteraction: S, setInteractionToast: h } = (0, P.Pq)(),
        { primaryColor: T } = (0, W.E)(),
        [m, g] = i.useState(""),
        [x, E] = i.useState((0, ea.x7)(m)),
        p = i.useRef(!1),
        R = i.useRef(null),
        y = i.useCallback(
            (e) => {
                e.key === Z.dh.ESCAPE && (e.stopPropagation(), S());
            },
            [S],
        );
    async function C(e) {
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
                    let a = H.intl.formatToPlainString(H.t.WmvMCo, { username: n }),
                        r = `
> ${i}`;
                    return null != i
                        ? `${z}${a}*${r}
${t}`
                        : `${z}${a}*
${t}`;
                case G.dS.AVATAR:
                    let s = H.intl.formatToPlainString(H.t.lpaBsB, { username: n });
                    return `${z}${s}*
${t}`;
                case G.dS.STATUS:
                    let o = H.intl.formatToPlainString(H.t.lFXgFV, { username: n }),
                        u = `
> ${i}`;
                    return null != i
                        ? `${z}${o}*${u}
${t}`
                        : `${z}${o}*
${t}`;
                default:
                    (0, M.xb)(l);
            }
        })({ input: e, username: O.Ay.getName(t), sourceType: s, sourceDetails: o });
        h(null);
        try {
            await (0, w.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: A,
            });
        } catch (e) {}
        h(G.AQ.REPLY);
    }
    i.useEffect(() => {
        u?.(R?.current);
    }, [R, u]);
    let v = { [eo.h5]: s === G.dS.STATUS, [eo.my]: s === G.dS.AVATAR, [eo.Eb]: s === G.dS.ACTIVITY };
    return (0, l.jsx)(el.l, {
        ref: R,
        onKeyDown: y,
        children: (0, l.jsx)("div", {
            className: r()(eo.kL, v, { [eo.GE]: null != T }),
            children: (0, l.jsx)(er.Ay, {
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
                    { username: j.Ay.getName(n, a, t) },
                ),
                channel: eu,
                textValue: m,
                richValue: x,
                onChange: (e, t, n) => {
                    t !== m && (g(t), E(n));
                },
                focused: p.current,
                onFocus: () => {
                    p.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return (await C(n), S(), f?.(), { shouldClear: !0, shouldRefocus: !1 });
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
    let { user: t, guildId: n, channelId: i, themeType: a, onClose: r, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: A,
        } = (0, P.Pq)(),
        S = [ed.d.MODAL, ed.d.MODAL_V2].includes(a) ? (0, I.n1)(t.id, n) : void 0,
        h = c === o.sourceType && u === G.AQ.REACT,
        T = c === o.sourceType && u === G.AQ.REPLY,
        m = (h || T) && f === o.sourceId;
    return (0, l.jsx)(b.Y, {
        targetElementRef: A ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: s } = e;
            return (0, l.jsx)(h ? et : ec, {
                user: t,
                guildId: n,
                channelId: i,
                themeType: a,
                onClose: r,
                modalKey: S,
                setPopoutRef: s,
                ...o,
            });
        },
        onRequestClose: () => {
            (d(), r?.());
        },
        shouldShow: m,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: l } = e;
            return t === G.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : l === ed.d.MODAL || l === ed.d.MODAL_V2 || n === G.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: a }),
        children: s,
    });
}
var eA = n(22231),
    eS = n(241326),
    eh = n(885386),
    eT = n(33969),
    em = n(777357);
function eg(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, N.NJ)(),
        f = i.useRef(null),
        { themeType: A } = (0, W.E)();
    return (0, l.jsxs)(eT.A, {
        className: r()(em.oO, { [em.RK]: t, [em.lu]: a }),
        children: [
            (0, l.jsx)(eT.Y, {
                variant: "custom-status",
                ref: o,
                tooltipText: H.intl.string(H.t.bt75uw),
                shouldDelayTooltip: a,
                onClick: function () {
                    (d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                        (function (e) {
                            let { analyticsLocations: t, stackingBehavior: i, returnRef: a } = e;
                            (0, c.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("775417"),
                                        n.e("456506"),
                                        n.e("25300"),
                                        n.e("291103"),
                                        n.e("875762"),
                                        n.e("526807"),
                                        n.e("348900"),
                                        n.e("220287"),
                                        n.e("428367"),
                                        n.e("655552"),
                                        n.e("772163"),
                                        n.e("689122"),
                                    ]).then(n.bind(n, 657977));
                                    return (n) => (0, l.jsx)(e, { ...n, sourceAnalyticsLocations: t, returnRef: a });
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
            (0, l.jsx)(eT.Y, {
                variant: "custom-status",
                ref: f,
                tooltipText: H.intl.string(H.t.VkKicb),
                shouldDelayTooltip: a,
                onClick: function () {
                    (d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
                        eh.G2.updateSetting(void 0),
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
        className: r()(ex.nL, n),
        children: (0, l.jsx)("div", {
            className: ex.A7,
            children: (0, l.jsx)("span", { className: ex.vW, children: t }),
        }),
    });
}
let ep = i.forwardRef(function (e, t) {
        let { onCloseProfile: i, prompt: a, addButtonRef: s } = e,
            o = (0, p.GV)(),
            { analyticsLocations: u } = (0, E.Ay)(),
            { trackUserProfileAction: h } = (0, N.NJ)(),
            { themeType: T } = (0, W.E)(),
            m = null != a ? a.label() : H.intl.string(H.t.evw0oz),
            g = (0, l.jsxs)("div", {
                className: ex.Qs,
                children: [
                    (0, l.jsx)(d.U, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        className: r()(ex.ch, null != a && ex.R9),
                        children: m,
                    }),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eE, { children: g }),
                (0, l.jsx)("div", {
                    className: r()(ex.kL, ex.LL),
                    ref: t,
                    children: (0, l.jsx)(A.D, {
                        innerRef: s,
                        className: ex.A7,
                        "aria-label": H.intl.string(H.t["zrpF/b"]),
                        "aria-describedby": o,
                        onClick: function () {
                            (h({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                                i?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("775417"),
                                            n.e("456506"),
                                            n.e("25300"),
                                            n.e("291103"),
                                            n.e("875762"),
                                            n.e("526807"),
                                            n.e("348900"),
                                            n.e("220287"),
                                            n.e("428367"),
                                            n.e("655552"),
                                            n.e("772163"),
                                            n.e("689122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) =>
                                            (0, l.jsx)(e, {
                                                ...t,
                                                sourceAnalyticsLocations: u,
                                                prompt: a,
                                                returnRef: s,
                                            });
                                    },
                                    T === ed.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                                ));
                        },
                        focusProps: { ringClassName: ex.hN },
                        children: (0, l.jsxs)("span", {
                            className: r()(ex.vW, ex.vk),
                            children: [
                                (0, l.jsx)(d.U, { size: "xs", className: ex.Tw, colorClass: ex.qv }),
                                (0, l.jsxs)(S.A, { id: o, children: [H.intl.string(H.t.EVV6uZ), ": ", m] }),
                                (0, l.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    className: r()(ex.ch, null != a && ex.R9),
                                    "aria-hidden": "true",
                                    children: m,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    eR = i.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: a,
                statusLabel: c,
                themeType: d,
                animate: x,
                className: E,
                referenceClassName: R,
                renderToolbar: y,
                onShowToolbar: C,
                placeholderText: v,
                hasEntered: j = !0,
            } = e,
            b = (0, P.NR)(),
            { trackUserProfileAction: I } = (0, N.NJ)(),
            L = 1.25 * (null != n),
            _ = 36 + L,
            U = 144 + L,
            M = i.useRef(null),
            O = i.useRef(null),
            w = i.useRef(null),
            $ = (0, p.GV)(),
            V = i.useRef(_),
            k = i.useRef(_),
            D = null != n && null == a,
            [F, Y] = i.useState(!1),
            [B, z] = i.useState(!0),
            [Q, K] = i.useState(!D && j),
            [q, W] = i.useState(!1),
            X = j && F,
            J = d === ed.d.MODAL || d === ed.d.MODAL_V2,
            Z = i.useCallback((e) => (J ? e : Math.min(e, U)), [U, J]),
            ee = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
            [et] = i.useState(() => new u.Ep());
        (i.useEffect(() => () => et.stop(), [et]),
            i.useEffect(() => {
                b?.onInteractionPopoutTargetRefChange(M);
            }, [b]));
        let [en, el] = (0, h.z)(() => ({ maxHeight: `${V.current}px`, config: { clamp: !0, duration: 150 } }));
        function ei(e) {
            Q &&
                (W(e),
                e
                    ? el({
                          maxHeight: `${Z(k.current)}px`,
                          delay: 300 * !ee,
                          config: { clamp: !0, duration: 150 * !ee },
                      })
                    : el({ maxHeight: `${Math.min(V.current, _)}px`, delay: 0 }),
                ee ? z(!e) : et.start(e ? 300 : 150, () => z(!e)));
        }
        i.useLayoutEffect(() => {
            if ((Y(!0), null == O.current || null == w.current || !X)) return;
            let e = O.current.getBoundingClientRect().height,
                t = w.current.getBoundingClientRect().height,
                n = Z(t);
            (K(n > e), (V.current = e), (k.current = t), el({ maxHeight: `${B ? Math.min(V.current, _) : n}px` }));
        }, [X, a, n, el, B, _, Z]);
        let ea =
                null != n
                    ? (0, l.jsx)(g.A, { emoji: n, animate: x, hideTooltip: !1, tooltipDelay: G.In, className: ex.H0 })
                    : null,
            er = null != a ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: ex.qS, children: a }) : null,
            es =
                void 0 !== v && null == n
                    ? (0, l.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${H.intl.string(H.t.EVV6uZ)}: ${v}`,
                          className: r()(ex.qS, ex.R9),
                          children: v ?? "",
                      })
                    : null,
            eo = null == er || "" === a ? es : er,
            eu = (0, l.jsxs)("div", { className: ex.Qs, children: [ea, eo] }),
            ec = (0, l.jsxs)("div", { ref: O, className: r()(ex.Qs, ex.mj), children: [ea, eo] }),
            ef = (0, l.jsxs)("div", { ref: w, className: r()(ex.Qs, ex.m2, ex.mj), children: [ea, eo] }),
            eA = H.intl.string(q ? H.t.fFaN1b : H.t.xPkLPy),
            eS = Q
                ? (0, l.jsx)(S.A, {
                      showOnFocus: !0,
                      children: (0, l.jsx)(A.D, {
                          className: ex.uJ,
                          "aria-label": eA,
                          "aria-controls": $,
                          "aria-expanded": q,
                          onClick: () => ei(!q),
                          focusProps: { ringClassName: ex.o5 },
                          children: (0, l.jsx)(T.a, {
                              size: "xs",
                              color: "currentColor",
                              className: q ? ex.DE : void 0,
                          }),
                      }),
                  })
                : null,
            eh = (0, l.jsx)("div", {
                ref: t,
                className: ex.A7,
                role: "group",
                "aria-label": c,
                children: (0, l.jsx)("span", {
                    className: ex.vW,
                    children: (0, l.jsxs)(s.animated.div, {
                        id: $,
                        style: en,
                        className: r()(ex.Qs, { [ex.m2]: !B && J, [ex.p$]: !B && !J }),
                        children: [ea, eo],
                    }),
                }),
            }),
            eT = (0, l.jsxs)(eE, { className: R, children: [eu, ec, ef] });
        return null == C
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eT,
                      (0, l.jsxs)("div", {
                          ref: M,
                          className: r()(ex.kL, E),
                          onMouseEnter: () => {
                              (I({ action: "HOVER_CUSTOM_STATUS" }), ei(!0));
                          },
                          onMouseLeave: () => {
                              ei(!1);
                          },
                          children: [eh, y?.(Q), eS],
                      }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      eT,
                      (0, l.jsxs)("div", {
                          ref: M,
                          className: r()(ex.kL, E),
                          onFocus: () => {
                              C(!0);
                          },
                          onBlur: (e) => {
                              M.current?.contains(e.relatedTarget) || C(!1);
                          },
                          onMouseEnter: () => {
                              (I({ action: "HOVER_CUSTOM_STATUS" }), C(!0), ei(!0));
                          },
                          onMouseLeave: () => {
                              (C(!1), ei(!1));
                          },
                          children: [eh, y?.(Q), eS],
                      }),
                  ],
              });
    }),
    ey = i.forwardRef(function (e, t) {
        let { emoji: n, text: a, onCloseProfile: s, editButtonRef: o, className: u, ...c } = e,
            [d, f] = i.useState(!1);
        return (0, l.jsx)(eR, {
            ...c,
            ref: t,
            emoji: n,
            text: a,
            className: r()(ex.LL, u),
            onShowToolbar: f,
            renderToolbar: (e) =>
                (0, l.jsx)(eg, { isVisible: d, isExpandable: e, onCloseProfile: s, editButtonRef: o }),
        });
    });
function eC(e) {
    let t,
        { emoji: n, text: a, user: s, guildId: o, channelId: u, themeType: c, className: d, ...f } = e,
        { trackUserProfileAction: A } = (0, N.NJ)(),
        { interactionType: S, interactionSource: h, resetInteraction: T } = (0, P.Pq)(),
        m = h === G.dS.STATUS && S === G.AQ.REACT,
        g = h === G.dS.STATUS && S === G.AQ.REPLY,
        x = m || g,
        E = i.useRef(null),
        p = i.useRef(n),
        R = i.useRef(a);
    i.useEffect(() => {
        h === G.dS.STATUS && ((p.current !== n || R.current !== a) && T(), (p.current = n), (R.current = a));
    }, [h, T, n, a]);
    let [C, v] = i.useState(!1),
        j = i.useCallback(
            (e) => {
                (e || !x) && v(e);
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
            null == a ? t : null == t ? a : `${t} ${a}`),
        sourceType: G.dS.STATUS,
        onAction: A,
        onClose: () => v(!1),
        children: () =>
            (0, l.jsx)(eR, {
                ...f,
                ref: E,
                emoji: n,
                text: a,
                themeType: c,
                className: r()(d, { [ex.zf]: x }),
                onShowToolbar: j,
                renderToolbar: (e) =>
                    (0, l.jsx)(q, {
                        targetRef: E,
                        user: s,
                        sourceType: G.dS.STATUS,
                        isVisible: C && !x,
                        isExpandable: e,
                        onAction: A,
                    }),
            }),
    });
}
let ev = i.forwardRef(function (e, t) {
    let {
            user: n,
            guildId: a,
            channelId: r,
            onCloseProfile: s,
            previewText: u,
            previewEmoji: c,
            placeholderText: d,
            prompt: f,
            disableToolbar: A = !1,
            ...S
        } = e,
        h = (0, R.A)(n.id),
        { analyticsLocations: T } = (0, E.Ay)(x.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        m = i.useRef(null),
        g = null != u || null != c,
        p = (0, C.G)(g ? u : h?.state),
        y = (0, o.bG)([v.default], () => v.default.getId() === n.id),
        N = y && !A,
        P = j.Ay.useName(a, r, n),
        b = y ? H.intl.string(H.t.SlKMnR) : H.intl.formatToPlainString(H.t["91lTRe"], { name: P }),
        I = !y && !n.bot && !A;
    if (g) {
        let e = null != p && "" !== p ? p : null;
        return (0, l.jsx)(E.f5, {
            value: T,
            children: (0, l.jsx)(eR, { emoji: c ?? null, text: e, statusLabel: b, placeholderText: d, ref: t, ...S }),
        });
    }
    let L = h?.emoji ?? null,
        _ = null != p && "" !== p ? p : null;
    return null != L || null != _ || N
        ? null == L && null == _
            ? (0, l.jsx)(E.f5, {
                  value: T,
                  children: (0, l.jsx)(ep, { onCloseProfile: s, prompt: f, ref: t, addButtonRef: m }),
              })
            : I
              ? (0, l.jsx)(E.f5, {
                    value: T,
                    children: (0, l.jsx)(eC, {
                        user: n,
                        guildId: a,
                        channelId: r,
                        emoji: L,
                        text: _,
                        statusLabel: b,
                        ...S,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: T,
                      children: (0, l.jsx)(ey, {
                          emoji: L,
                          text: _,
                          statusLabel: b,
                          onCloseProfile: s,
                          editButtonRef: m,
                          ref: t,
                          ...S,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: T,
                      children: (0, l.jsx)(eR, { emoji: L, text: _, statusLabel: b, ref: t, ...S }),
                  })
        : null;
});
