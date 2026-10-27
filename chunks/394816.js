n.d(t, { A: () => ev });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(399513),
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
    R = n(915089),
    p = n(410540),
    C = n(7584),
    y = n(208971),
    j = n(280450),
    v = n(562153),
    P = n(183555),
    N = n(679492),
    I = n(453903),
    L = n(265872),
    _ = n(403777),
    b = n(462887),
    U = n(969602),
    M = n(363195),
    O = n(403362),
    $ = n(427262),
    V = n(448613),
    k = n(866665),
    w = n(460905),
    F = n(110384),
    Y = n(365199),
    D = n(101555),
    G = n(570287),
    H = n(518477),
    B = n(105292),
    Q = n(47119);
let z = "> -# *",
    K = {
        [H.dS.AVATAR]: () => B.intl.string(B.t["fEUP/i"]),
        [H.dS.STATUS]: () => B.intl.string(B.t.TKdBC8),
        [H.dS.ACTIVITY]: () => B.intl.string(B.t.bSe71F),
    },
    q = {
        [H.dS.AVATAR]: () => B.intl.string(B.t.xvN0fV),
        [H.dS.STATUS]: () => B.intl.string(B.t["C/vzS7"]),
        [H.dS.ACTIVITY]: () => B.intl.string(B.t.ObfsSj),
    };
function W(e) {
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
                  (0, l.jsx)(k.m, {
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
                          "aria-label": K[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(w.n, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  (0, l.jsx)(k.m, {
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
                          "aria-label": q[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(F.W, { size: "xs", className: Q.Kk }),
                      }),
                  }),
                  f?.((e) =>
                      (0, l.jsx)(k.m, {
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
var X = n(939496),
    J = n(307731),
    Z = n(818348),
    ee = n(650583),
    et = n(954024);
function en(e) {
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
        { theme: S } = (0, X.E)(),
        h = (0, o.bG)([M.A], () => M.A.theme),
        T = (0, b.M)(h) ? !(0, b.M)(S) : (0, b.M)(S),
        m = i.useRef(null);
    async function g(e) {
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
                        ? `${z}${a}*${s}
${r}`
                        : `${z}${a}*
${r}`;
                case H.dS.AVATAR:
                    let o = B.intl.formatToPlainString(B.t.E6H15q, { username: n });
                    return `${z}${o}*
${r}`;
                case H.dS.STATUS:
                    let u = B.intl.formatToPlainString(B.t.XPQgL2, { username: n }),
                        c = `
> ${i}`;
                    return null != i
                        ? `${z}${u}*${c}
${r}`
                        : `${z}${u}*
${r}`;
                default:
                    (0, O.xb)(l);
            }
        })({ emoji: e, username: $.Ay.getName(t), sourceType: a, sourceDetails: s });
        A(null);
        try {
            await (0, V.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: r,
            });
        } catch (e) {}
        A(H.AQ.REACT);
    }
    return (
        i.useEffect(() => {
            u?.(m?.current);
        }, [m, u]),
        i.useEffect(() => {
            function e(e) {
                e.key === ee.dh.ESCAPE && (e.stopPropagation(), f());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, f]),
        (0, l.jsx)(U.A, {
            headerClassName: T ? et.X : void 0,
            guildId: n ?? void 0,
            closePopout: Z.tE,
            onSelectEmoji: async (e) => {
                let { emoji: t, willClose: n } = e;
                (await g(t), n && (f(), d?.()));
            },
            pickerIntention: J.EmojiIntention.PROFILE,
        })
    );
}
var el = n(478437),
    ei = n(305866),
    er = n(355622),
    ea = n(408018),
    es = n(845207),
    eo = n(95701),
    eu = n(767523);
let ec = (0, eo.createChannelRecord)({ id: "1", type: el.r.DM });
function ed(e) {
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
        { primaryColor: T } = (0, X.E)(),
        [m, g] = i.useState(""),
        [x, E] = i.useState((0, ea.x7)(m)),
        R = i.useRef(!1),
        p = i.useRef(null),
        C = i.useCallback(
            (e) => {
                e.key === ee.dh.ESCAPE && (e.stopPropagation(), S());
            },
            [S],
        );
    async function y(e) {
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
                        ? `${z}${r}*${a}
${t}`
                        : `${z}${r}*
${t}`;
                case H.dS.AVATAR:
                    let s = B.intl.formatToPlainString(B.t.lpaBsB, { username: n });
                    return `${z}${s}*
${t}`;
                case H.dS.STATUS:
                    let o = B.intl.formatToPlainString(B.t.lFXgFV, { username: n }),
                        u = `
> ${i}`;
                    return null != i
                        ? `${z}${o}*${u}
${t}`
                        : `${z}${o}*
${t}`;
                default:
                    (0, O.xb)(l);
            }
        })({ input: e, username: $.Ay.getName(t), sourceType: s, sourceDetails: o });
        h(null);
        try {
            await (0, V.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReplyPopout",
                openChannel: !1,
                whenReady: !1,
                entry: A,
            });
        } catch (e) {}
        h(H.AQ.REPLY);
    }
    i.useEffect(() => {
        u?.(p?.current);
    }, [p, u]);
    let j = { [eu.h5]: s === H.dS.STATUS, [eu.my]: s === H.dS.AVATAR, [eu.Eb]: s === H.dS.ACTIVITY };
    return (0, l.jsx)(ei.l, {
        ref: p,
        onKeyDown: C,
        children: (0, l.jsx)("div", {
            className: a()(eu.kL, j, { [eu.GE]: null != T }),
            children: (0, l.jsx)(es.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: eu.hF,
                innerClassName: eu.rn,
                editorClassName: eu.EN,
                type: er.oU.USER_PROFILE_REPLY,
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
                channel: ec,
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
var ef = n(996988);
function eA(e) {
    let { user: t, guildId: n, channelId: i, themeType: r, onClose: a, children: s, ...o } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: f,
            interactionPopoutTargetRef: A,
        } = (0, N.Pq)(),
        S = [ef.d.MODAL, ef.d.MODAL_V2].includes(r) ? (0, _.n1)(t.id, n) : void 0,
        h = c === o.sourceType && u === H.AQ.REACT,
        T = c === o.sourceType && u === H.AQ.REPLY,
        m = (h || T) && f === o.sourceId;
    return (0, l.jsx)(I.NA.Provider, {
        value: null,
        children: (0, l.jsx)(L.Y, {
            targetElementRef: A ?? void 0,
            renderPopout: (e) => {
                let { setPopoutRef: s } = e;
                return (0, l.jsx)(h ? en : ed, {
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
                    : l === ef.d.MODAL || l === ef.d.MODAL_V2 || n === H.dS.ACTIVITY
                      ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                      : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
            })({ interactionType: u, interactionSource: c, themeType: r }),
            children: s,
        }),
    });
}
var eS = n(22231),
    eh = n(241326),
    eT = n(885386),
    em = n(33969),
    eg = n(777357);
function ex(e) {
    let { isVisible: t, isExpandable: r, onCloseProfile: s, editButtonRef: o } = e,
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: d } = (0, P.NJ)(),
        f = i.useRef(null),
        { themeType: A } = (0, X.E)();
    return (0, l.jsxs)(em.A, {
        className: a()(eg.oO, { [eg.RK]: t, [eg.lu]: r }),
        children: [
            (0, l.jsx)(em.Y, {
                variant: "custom-status",
                ref: o,
                tooltipText: B.intl.string(B.t.bt75uw),
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
                            stackingBehavior: A === ef.d.MODAL_V2 ? "stack" : void 0,
                            returnRef: o,
                        }),
                        s?.());
                },
                "aria-label": B.intl.string(B.t.QdHxos),
                "aria-haspopup": "dialog",
                icon: eS.PencilIcon,
            }),
            (0, l.jsx)(em.Y, {
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
                icon: eh.TrashIcon,
            }),
        ],
    });
}
var eE = n(502622);
function eR(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", {
        className: a()(eE.nL, n),
        children: (0, l.jsx)("div", {
            className: eE.A7,
            children: (0, l.jsx)("span", { className: eE.vW, children: t }),
        }),
    });
}
function ep(e) {
    let { onCloseProfile: t, prompt: i, addButtonRef: r, ref: s } = e,
        o = (0, R.GV)(),
        { analyticsLocations: u } = (0, E.Ay)(),
        { trackUserProfileAction: h } = (0, P.NJ)(),
        { themeType: T } = (0, X.E)(),
        m = null != i ? i.label() : B.intl.string(B.t.evw0oz),
        g = (0, l.jsxs)("div", {
            className: eE.Qs,
            children: [
                (0, l.jsx)(d.U, { size: "xs", className: eE.Tw, colorClass: eE.qv }),
                (0, l.jsx)(f.E, { variant: "text-sm/normal", className: a()(eE.ch, null != i && eE.R9), children: m }),
            ],
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eR, { children: g }),
            (0, l.jsx)("div", {
                className: a()(eE.kL, eE.LL),
                ref: s,
                children: (0, l.jsx)(A.D, {
                    innerRef: r,
                    className: eE.A7,
                    "aria-label": B.intl.string(B.t["zrpF/b"]),
                    "aria-describedby": o,
                    onClick: function () {
                        (h({ action: "PRESS_ADD_CUSTOM_STATUS" }),
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
                                T === ef.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                            ));
                    },
                    focusProps: { ringClassName: eE.hN },
                    children: (0, l.jsxs)("span", {
                        className: a()(eE.vW, eE.vk),
                        children: [
                            (0, l.jsx)(d.U, { size: "xs", className: eE.Tw, colorClass: eE.qv }),
                            (0, l.jsxs)(S.A, { id: o, children: [B.intl.string(B.t.EVV6uZ), ": ", m] }),
                            (0, l.jsx)(f.E, {
                                variant: "text-sm/normal",
                                className: a()(eE.ch, null != i && eE.R9),
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
function eC(e) {
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
        [G, Q] = i.useState(!0),
        [z, K] = i.useState(!F && j),
        [q, W] = i.useState(!1),
        X = j && Y,
        J = c === ef.d.MODAL || c === ef.d.MODAL_V2,
        Z = i.useCallback((e) => (J ? e : Math.min(e, U)), [U, J]),
        ee = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        [et] = i.useState(() => new u.Ep());
    (i.useEffect(() => () => et.stop(), [et]),
        i.useEffect(() => {
            I?.onInteractionPopoutTargetRefChange(M);
        }, [I]));
    let [en, el] = (0, h.z)(() => ({ maxHeight: `${k.current}px`, config: { clamp: !0, duration: 150 } }));
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
        (K(n > e), (k.current = e), (w.current = t), el({ maxHeight: `${G ? Math.min(k.current, b) : n}px` }));
    }, [X, n, t, el, G, b, Z]);
    let er =
            null != t
                ? (0, l.jsx)(g.A, { emoji: t, animate: d, hideTooltip: !1, tooltipDelay: H.In, className: eE.H0 })
                : null,
        ea = null != n ? (0, l.jsx)(f.E, { variant: "text-sm/normal", className: eE.qS, children: n }) : null,
        es =
            void 0 !== y && null == t
                ? (0, l.jsx)(f.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      "aria-label": `${B.intl.string(B.t.EVV6uZ)}: ${y}`,
                      className: a()(eE.qS, eE.R9),
                      children: y ?? "",
                  })
                : null,
        eo = null == ea || "" === n ? es : ea,
        eu = (0, l.jsxs)("div", { className: eE.Qs, children: [er, eo] }),
        ec = (0, l.jsxs)("div", { ref: O, className: a()(eE.Qs, eE.mj), children: [er, eo] }),
        ed = (0, l.jsxs)("div", { ref: $, className: a()(eE.Qs, eE.m2, eE.mj), children: [er, eo] }),
        eA = B.intl.string(q ? B.t.fFaN1b : B.t.xPkLPy),
        eS = z
            ? (0, l.jsx)(S.A, {
                  showOnFocus: !0,
                  children: (0, l.jsx)(A.D, {
                      className: eE.uJ,
                      "aria-label": eA,
                      "aria-controls": V,
                      "aria-expanded": q,
                      onClick: () => ei(!q),
                      focusProps: { ringClassName: eE.o5 },
                      children: (0, l.jsx)(T.a, { size: "xs", color: "currentColor", className: q ? eE.DE : void 0 }),
                  }),
              })
            : null,
        eh = (0, l.jsx)("div", {
            ref: v,
            className: eE.A7,
            role: "group",
            "aria-label": r,
            children: (0, l.jsx)("span", {
                className: eE.vW,
                children: (0, l.jsxs)(s.animated.div, {
                    id: V,
                    style: en,
                    className: a()(eE.Qs, { [eE.m2]: !G && J, [eE.p$]: !G && !J }),
                    children: [er, eo],
                }),
            }),
        }),
        eT = (0, l.jsxs)(eR, { className: E, children: [eu, ec, ed] });
    return null == C
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  eT,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(eE.kL, x),
                      onMouseEnter: () => {
                          (L({ action: "HOVER_CUSTOM_STATUS" }), ei(!0));
                      },
                      onMouseLeave: () => {
                          ei(!1);
                      },
                      children: [eh, p?.(z), eS],
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  eT,
                  (0, l.jsxs)("div", {
                      ref: M,
                      className: a()(eE.kL, x),
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
                      children: [eh, p?.(z), eS],
                  }),
              ],
          });
}
function ey(e) {
    let { emoji: t, text: n, onCloseProfile: r, editButtonRef: s, className: o, ref: u, ...c } = e,
        [d, f] = i.useState(!1);
    return (0, l.jsx)(eC, {
        ...c,
        ref: u,
        emoji: t,
        text: n,
        className: a()(eE.LL, o),
        onShowToolbar: f,
        renderToolbar: (e) => (0, l.jsx)(ex, { isVisible: d, isExpandable: e, onCloseProfile: r, editButtonRef: s }),
    });
}
function ej(e) {
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
    let [y, j] = i.useState(!1),
        v = i.useCallback(
            (e) => {
                (e || !x) && j(e);
            },
            [x],
        );
    return (0, l.jsx)(eA, {
        user: s,
        guildId: o,
        channelId: u,
        themeType: c,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : C.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == r ? t : null == t ? r : `${t} ${r}`),
        sourceType: H.dS.STATUS,
        onAction: A,
        onClose: () => j(!1),
        children: () =>
            (0, l.jsx)(eC, {
                ...f,
                ref: E,
                emoji: n,
                text: r,
                themeType: c,
                className: a()(d, { [eE.zf]: x }),
                onShowToolbar: v,
                renderToolbar: (e) =>
                    (0, l.jsx)(W, {
                        targetRef: E,
                        user: s,
                        sourceType: H.dS.STATUS,
                        isVisible: y && !x,
                        isExpandable: e,
                        onAction: A,
                    }),
            }),
    });
}
let ev = function (e) {
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
        C = (0, y.G)(R ? c : T?.state),
        P = (0, o.bG)([j.default], () => j.default.getId() === r.id),
        N = P && !S,
        I = v.Ay.useName(a, s, r),
        L = P ? B.intl.string(B.t.SlKMnR) : B.intl.formatToPlainString(B.t["91lTRe"], { name: I }),
        _ = !P && !r.bot && !S;
    if (R) {
        let e = null != C && "" !== C ? C : null;
        return (0, l.jsx)(E.f5, {
            value: m,
            children: (0, l.jsx)(eC, { emoji: d ?? null, text: e, statusLabel: L, placeholderText: f, ref: t, ...h }),
        });
    }
    let b = T?.emoji ?? null,
        U = null != C && "" !== C ? C : null;
    return null != b || null != U || N
        ? null == b && null == U
            ? (0, l.jsx)(E.f5, {
                  value: m,
                  children: (0, l.jsx)(ep, { onCloseProfile: u, prompt: A, ref: t, addButtonRef: g }),
              })
            : _
              ? (0, l.jsx)(E.f5, {
                    value: m,
                    children: (0, l.jsx)(ej, {
                        user: r,
                        guildId: a,
                        channelId: s,
                        emoji: b,
                        text: U,
                        statusLabel: L,
                        ...h,
                    }),
                })
              : N
                ? (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(ey, {
                          emoji: b,
                          text: U,
                          statusLabel: L,
                          onCloseProfile: u,
                          editButtonRef: g,
                          ref: t,
                          ...h,
                      }),
                  })
                : (0, l.jsx)(E.f5, {
                      value: m,
                      children: (0, l.jsx)(eC, { emoji: b, text: U, statusLabel: L, ref: t, ...h }),
                  })
        : null;
};
