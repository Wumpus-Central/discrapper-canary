"use strict";
n.d(t, { A: () => eT });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(308186),
    l = n(17928),
    u = n(451988),
    c = n(192308),
    d = n(245604),
    _ = n(834730),
    h = n(939249),
    f = n(140735),
    p = n(717421),
    E = n(187322),
    m = n(775602),
    g = n(51183),
    A = n(793574),
    I = n(688810),
    T = n(915089),
    S = n(410540),
    y = n(621466);
let C = '[data-mana-component="modal"]';
function N(e) {
    for (let t of document.querySelectorAll(C)) if (!e.has(t)) return t;
    return null;
}
function v(e) {
    return null != e && document.body.contains(e) && R(e);
}
function R(e) {
    let t = e.getAttribute("aria-label");
    if (null != t && "" !== t.trim()) return !0;
    let n = e.getAttribute("aria-labelledby");
    if (null != n) {
        let e = n.split(/\s+/).filter((e) => "" !== e);
        if (e.length > 0 && e.every((e) => "" !== (document.getElementById(e)?.textContent ?? "").trim())) return !0;
    }
    return "" !== (e.textContent ?? "").trim();
}
function O(e) {
    let t = (0, y.vq)(document.activeElement, HTMLElement) ? document.activeElement : null,
        n = new Set(document.querySelectorAll(C));
    return () => {
        if (null != t && !R(t) && null == e) return;
        let i = N(n),
            r = 0,
            s = () => {
                if (((r += 1), null == i && (i = N(n)), !(null != i ? !document.body.contains(i) : null == N(n)))) {
                    r < 90 && requestAnimationFrame(s);
                    return;
                }
                let a = null == e ? null : "function" == typeof e ? e() : "current" in e ? e.current : e,
                    o = v(t) ? t : v(a) ? a : null;
                null == o ||
                    (document.activeElement !== o && o.focus(),
                    document.activeElement !== o && r < 90 && requestAnimationFrame(s));
            };
        requestAnimationFrame(s);
    };
}
var b = n(7584),
    D = n(495544),
    L = n(183555),
    w = n(679492),
    M = n(922016),
    P = n(403777),
    x = n(462887),
    k = n(334295),
    U = n(363195),
    G = n(403362),
    F = n(427262),
    V = n(448613),
    B = n(8925),
    j = n(939496),
    H = n(518477),
    Y = n(307731),
    W = n(818348),
    K = n(650583),
    $ = n(375708),
    z = n(435693);
function q(e) {
    let {
            user: t,
            guildId: n,
            entry: s,
            sourceType: a,
            sourceDetails: o,
            setPopoutRef: u,
            onAction: c,
            onClose: d,
        } = e,
        { resetInteraction: _, setInteractionToast: h } = (0, w.Pq)(),
        { theme: f } = (0, j.E)(),
        p = (0, l.bG)([U.A], () => U.A.theme),
        E = (0, x.M)(p) ? !(0, x.M)(f) : (0, x.M)(f),
        m = r.useRef(null);
    r.useEffect(() => {
        u?.(m?.current);
    }, [m, u]),
        r.useEffect(() => {
            function e(e) {
                e.key === K.dh.ESCAPE && (e.stopPropagation(), _());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d, _]);
    let g = async (e) => {
        if (null == e) return;
        a === H.dS.AVATAR
            ? c({ action: "SEND_REACT_AVATAR" })
            : a === H.dS.STATUS
              ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
              : c({ action: "SEND_REACT_ACTIVITY" });
        let n = (function (e) {
            let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
                s = `:${t.name}:`;
            switch (i) {
                case H.dS.ACTIVITY:
                    let a = $.intl.formatToPlainString($.t.EUFEJt, { username: n }),
                        o = `
> ${r}`;
                    return null != r
                        ? `${B.c5}${a}*${o}
${s}`
                        : `${B.c5}${a}*
${s}`;
                case H.dS.AVATAR:
                    let l = $.intl.formatToPlainString($.t.E6H15q, { username: n });
                    return `${B.c5}${l}*
${s}`;
                case H.dS.STATUS:
                    let u = $.intl.formatToPlainString($.t.XPQgL2, { username: n }),
                        c = `
> ${r}`;
                    return null != r
                        ? `${B.c5}${u}*${c}
${s}`
                        : `${B.c5}${u}*
${s}`;
                default:
                    (0, G.xb)(i);
            }
        })({ emoji: e, username: F.Ay.getName(t), sourceType: a, sourceDetails: o });
        h(null);
        try {
            await (0, V.p)({
                userId: t.id,
                content: n,
                location: "UserProfileReactPopout",
                openChannel: !1,
                whenReady: !1,
                entry: s,
            });
        } catch (e) {}
        h(H.AQ.REACT);
    };
    return (0, i.jsx)(k.A, {
        headerClassName: E ? z.X : void 0,
        guildId: n ?? void 0,
        closePopout: W.tE,
        onSelectEmoji: async (e) => {
            let { emoji: t, willClose: n } = e;
            await g(t), n && (_(), d?.());
        },
        pickerIntention: Y.EmojiIntention.PROFILE,
    });
}
var Z = n(478437),
    X = n(305866),
    Q = n(355622),
    J = n(408018),
    ee = n(138617),
    et = n(95701),
    en = n(562153),
    ei = n(450262);
let er = (0, et.createChannelRecord)({ id: "1", type: Z.r.DM });
function es(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            sourceType: o,
            sourceDetails: l,
            setPopoutRef: u,
            modalKey: c,
            onAction: d,
            onClose: _,
            entry: h,
        } = e,
        { resetInteraction: f, setInteractionToast: p } = (0, w.Pq)(),
        { primaryColor: E } = (0, j.E)(),
        [m, g] = r.useState(""),
        [A, I] = r.useState((0, J.x7)(m)),
        T = r.useRef(!1),
        S = r.useRef(null),
        y = r.useCallback(
            (e) => {
                e.key === K.dh.ESCAPE && (e.stopPropagation(), f());
            },
            [f],
        );
    r.useEffect(() => {
        u?.(S?.current);
    }, [S, u]);
    let C = async (e) => {
            if (null == e) return;
            o === H.dS.AVATAR
                ? d({ action: "SEND_REPLY_AVATAR" })
                : o === H.dS.STATUS
                  ? d({ action: "SEND_REPLY_CUSTOM_STATUS" })
                  : d({ action: "SEND_REPLY_ACTIVITY" });
            let n = (function (e) {
                let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
                switch (i) {
                    case H.dS.ACTIVITY:
                        let s = $.intl.formatToPlainString($.t.WmvMCo, { username: n }),
                            a = `
> ${r}`;
                        return null != r
                            ? `${B.c5}${s}*${a}
${t}`
                            : `${B.c5}${s}*
${t}`;
                    case H.dS.AVATAR:
                        let o = $.intl.formatToPlainString($.t.lpaBsB, { username: n });
                        return `${B.c5}${o}*
${t}`;
                    case H.dS.STATUS:
                        let l = $.intl.formatToPlainString($.t.lFXgFV, { username: n }),
                            u = `
> ${r}`;
                        return null != r
                            ? `${B.c5}${l}*${u}
${t}`
                            : `${B.c5}${l}*
${t}`;
                    default:
                        (0, G.xb)(i);
                }
            })({ input: e, username: F.Ay.getName(t), sourceType: o, sourceDetails: l });
            p(null);
            try {
                await (0, V.p)({
                    userId: t.id,
                    content: n,
                    location: "UserProfileReplyPopout",
                    openChannel: !1,
                    whenReady: !1,
                    entry: h,
                });
            } catch (e) {}
            p(H.AQ.REPLY);
        },
        N = { [ei.h5]: o === H.dS.STATUS, [ei.my]: o === H.dS.AVATAR, [ei.Eb]: o === H.dS.ACTIVITY };
    return (0, i.jsx)(X.l, {
        ref: S,
        onKeyDown: y,
        children: (0, i.jsx)("div", {
            className: a()(ei.kL, N, { [ei.GE]: null != E }),
            children: (0, i.jsx)(ee.Ay, {
                parentModalKey: c,
                emojiPickerCloseOnModalOuterClick: !0,
                className: ei.hF,
                innerClassName: ei.rn,
                editorClassName: ei.EN,
                type: Q.oU.USER_PROFILE_REPLY,
                placeholder: $.intl.formatToPlainString(
                    (function (e) {
                        switch (e) {
                            case H.dS.ACTIVITY:
                                return $.t.Qn081O;
                            case H.dS.AVATAR:
                                return $.t.xGNPFK;
                            case H.dS.STATUS:
                                return $.t.g9BTCM;
                            default:
                                (0, G.xb)(e);
                        }
                    })(o),
                    { username: en.Ay.getName(n, s, t) },
                ),
                channel: er,
                textValue: m,
                richValue: A,
                onChange: (e, t, n) => {
                    t !== m && (g(t), I(n));
                },
                focused: T.current,
                onFocus: () => {
                    T.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
                    try {
                        return await C(n), f(), _?.(), { shouldClear: !0, shouldRefocus: !1 };
                    } catch {
                        return { shouldClear: !1, shouldRefocus: !1 };
                    }
                },
            }),
        }),
    });
}
var ea = n(996988);
function eo(e) {
    let { user: t, guildId: n, channelId: r, themeType: s, onClose: a, children: o, ...l } = e,
        {
            interactionType: u,
            interactionSource: c,
            resetInteraction: d,
            interactionSourceId: _,
            interactionPopoutTargetRef: h,
        } = (0, w.Pq)(),
        f = [ea.d.MODAL, ea.d.MODAL_V2].includes(s) ? (0, P.n)(t.id, n) : void 0,
        p = c === l.sourceType && u === H.AQ.REACT,
        E = c === l.sourceType && u === H.AQ.REPLY,
        m = (p || E) && _ === l.sourceId;
    return (0, i.jsx)(M.Y, {
        targetElementRef: h ?? void 0,
        renderPopout: (e) => {
            let { setPopoutRef: o } = e;
            return (0, i.jsx)(p ? q : es, {
                user: t,
                guildId: n,
                channelId: r,
                themeType: s,
                onClose: a,
                modalKey: f,
                setPopoutRef: o,
                ...l,
            });
        },
        onRequestClose: () => {
            d(), a?.();
        },
        shouldShow: m,
        ...(function (e) {
            let { interactionType: t, interactionSource: n, themeType: i } = e;
            return t === H.AQ.REACT
                ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
                : i === ea.d.MODAL || i === ea.d.MODAL_V2 || n === H.dS.ACTIVITY
                  ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
                  : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
        })({ interactionType: u, interactionSource: c, themeType: s }),
        children: o,
    });
}
var el = n(990078),
    eu = n(22231),
    ec = n(241326),
    ed = n(101555),
    e_ = n(885386),
    eh = n(242744);
function ef(e) {
    let { isVisible: t, isExpandable: s, onCloseProfile: o } = e,
        { analyticsLocations: u } = (0, I.Ay)(),
        { trackUserProfileAction: d } = (0, L.NJ)(),
        _ = r.useRef(null),
        h = r.useRef(null),
        [f, p] = (0, l.yK)([m.Ay], () => [m.Ay.useReducedMotion, m.Ay.keyboardModeEnabled]),
        E = !s || f || p ? 0 : 300,
        { themeType: g } = (0, j.E)();
    return (0, i.jsxs)(ed.Ay, {
        className: a()(eh.oO, { [eh.RK]: t, [eh.lu]: s }),
        children: [
            (0, i.jsx)(el.m, {
                asContainer: !0,
                targetElementRef: _,
                text: $.intl.string($.t.bt75uw),
                delay: E,
                ariaHidden: !0,
                children: (0, i.jsx)(ed.$n, {
                    ref: _,
                    className: a()(eh.x6, eh.kb),
                    "aria-label": $.intl.string($.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: function () {
                        d({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            (function (e) {
                                let { analyticsLocations: t, stackingBehavior: r, returnRef: s } = e,
                                    a = O();
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("33973"),
                                            n.e("57328"),
                                            n.e("4803"),
                                            n.e("67251"),
                                            n.e("28367"),
                                            n.e("20287"),
                                            n.e("20491"),
                                            n.e("33171"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t, returnRef: s });
                                    },
                                    { ...(null != r ? { stackingBehavior: r } : void 0), onCloseCallback: a },
                                );
                            })({
                                analyticsLocations: u,
                                stackingBehavior: g === ea.d.MODAL_V2 ? "stack" : void 0,
                                returnRef: _,
                            }),
                            o?.();
                    },
                    children: (0, i.jsx)(eu.R, { size: "xs", colorClass: eh.Kk }),
                }),
            }),
            (0, i.jsx)(el.m, {
                asContainer: !0,
                text: $.intl.string($.t.VkKicb),
                delay: E,
                ariaHidden: !0,
                children: (0, i.jsx)(ed.$n, {
                    ref: h,
                    className: a()(eh.x6, eh.pG),
                    "aria-label": $.intl.string($.t.wfYTHe),
                    onClick: function () {
                        d({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), e_.G2.updateSetting(void 0);
                    },
                    children: (0, i.jsx)(ec.u, { size: "xs", colorClass: eh.Kk }),
                }),
            }),
        ],
    });
}
var ep = n(713305);
function eE(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: a()(ep.nL, n),
        children: (0, i.jsx)("div", {
            className: ep.A7,
            children: (0, i.jsx)("span", { className: ep.vW, children: t }),
        }),
    });
}
let em = r.forwardRef(function (e, t) {
        let { onCloseProfile: s, prompt: o } = e,
            l = (0, T.GV)(),
            { analyticsLocations: u } = (0, I.Ay)(),
            { trackUserProfileAction: p } = (0, L.NJ)(),
            E = r.useRef(null),
            { themeType: m } = (0, j.E)(),
            g = null != o ? o.label() : $.intl.string($.t.evw0oz),
            A = (0, i.jsxs)("div", {
                className: ep.Qs,
                children: [
                    (0, i.jsx)(d.U, { size: "xs", className: ep.Tw, colorClass: ep.qv }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/normal",
                        className: a()(ep.ch, null != o && ep.R9),
                        children: g,
                    }),
                ],
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eE, { children: A }),
                (0, i.jsx)("div", {
                    className: a()(ep.kL, ep.LL),
                    ref: t,
                    children: (0, i.jsx)(h.D, {
                        innerRef: E,
                        className: ep.A7,
                        "aria-label": $.intl.string($.t["zrpF/b"]),
                        "aria-describedby": l,
                        onClick: function () {
                            p({ action: "PRESS_ADD_CUSTOM_STATUS" });
                            let e = O();
                            s?.(),
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("33973"),
                                            n.e("57328"),
                                            n.e("4803"),
                                            n.e("67251"),
                                            n.e("28367"),
                                            n.e("20287"),
                                            n.e("20491"),
                                            n.e("33171"),
                                            n.e("72163"),
                                            n.e("89122"),
                                        ]).then(n.bind(n, 657977));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                sourceAnalyticsLocations: u,
                                                prompt: o,
                                                returnRef: E,
                                            });
                                    },
                                    {
                                        ...(m === ea.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0),
                                        onCloseCallback: e,
                                    },
                                );
                        },
                        focusProps: { ringClassName: ep.hN },
                        children: (0, i.jsxs)("span", {
                            className: a()(ep.vW, ep.vk),
                            children: [
                                (0, i.jsx)(d.U, { size: "xs", className: ep.Tw, colorClass: ep.qv }),
                                (0, i.jsxs)(f.A, { id: l, children: [$.intl.string($.t.EVV6uZ), ": ", g] }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    className: a()(ep.ch, null != o && ep.R9),
                                    "aria-hidden": "true",
                                    children: g,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    eg = r.forwardRef(function (e, t) {
        let {
                emoji: n,
                text: s,
                animate: c,
                className: d,
                renderToolbar: h,
                onShowToolbar: f,
                placeholderText: A,
                hasEntered: I = !0,
            } = e,
            T = (0, w.NR)(),
            { trackUserProfileAction: S } = (0, L.NJ)(),
            y = 1.25 * (null != n),
            C = 36 + y,
            N = 144 + y,
            v = r.useRef(null),
            R = r.useRef(null),
            O = r.useRef(null),
            b = r.useRef(C),
            D = r.useRef(N),
            M = null != n && null == s,
            [P, x] = r.useState(!1),
            [k, U] = r.useState(!0),
            [G, F] = r.useState(!M && I),
            V = I && P,
            B = (0, l.bG)([m.Ay], () => m.Ay.useReducedMotion),
            [j] = r.useState(() => new u.Ep());
        r.useEffect(() => () => j.stop(), [j]),
            r.useEffect(() => {
                T?.onInteractionPopoutTargetRefChange(v);
            }, [T]);
        let [Y, W] = (0, p.z)(() => ({ maxHeight: `${b.current}px`, config: { clamp: !0, duration: 150 } }));
        function K(e) {
            G &&
                (e
                    ? W({
                          maxHeight: `${Math.min(D.current, N)}px`,
                          delay: 300 * !B,
                          config: { clamp: !0, duration: 150 * !B },
                      })
                    : W({ maxHeight: `${Math.min(b.current, C)}px`, delay: 0 }),
                B ? U(!e) : j.start(e ? 300 : 150, () => U(!e)));
        }
        r.useLayoutEffect(() => {
            if ((x(!0), null == R.current || null == O.current || !V)) return;
            let e = R.current.getBoundingClientRect().height,
                t = O.current.getBoundingClientRect().height;
            F(t > e),
                (b.current = e),
                (D.current = t),
                W({ maxHeight: `${Math.min(k ? b.current : D.current, k ? C : N)}px` });
        }, [V, s, n, W, k, C, N]);
        let z =
                null != n
                    ? (0, i.jsx)(g.A, { emoji: n, animate: c, hideTooltip: !1, tooltipDelay: H.In, className: ep.H0 })
                    : null,
            q = null != s ? (0, i.jsx)(_.E, { variant: "text-sm/normal", className: ep.qS, children: s }) : null,
            Z =
                void 0 !== A && null == n
                    ? (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          "aria-label": `${$.intl.string($.t.EVV6uZ)}: ${A}`,
                          className: a()(ep.qS, ep.R9),
                          children: A ?? "",
                      })
                    : null,
            X = null == q || "" === s ? Z : q,
            Q = (0, i.jsxs)("div", { ref: R, className: ep.Qs, children: [z, X] }),
            J = (0, i.jsxs)("div", { ref: O, className: a()(ep.Qs, ep.m2), children: [z, X] }),
            ee = (0, i.jsx)("div", {
                ref: t,
                className: ep.A7,
                children: (0, i.jsx)("span", {
                    className: ep.vW,
                    children: (0, i.jsxs)(o.animated.div, {
                        style: Y,
                        className: a()(ep.Qs, { [ep.m2]: !k }),
                        children: [z, X],
                    }),
                }),
            }),
            et = (0, i.jsxs)(eE, { children: [Q, J] });
        return null == f
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: v,
                          className: a()(ep.kL, d),
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), K(!0);
                          },
                          onMouseLeave: () => {
                              K(!1);
                          },
                          onFocus: () => K(!0),
                          onBlur: () => K(!1),
                          children: [
                              (0, i.jsx)(E.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ep.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": $.intl.formatToPlainString($.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(G),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      et,
                      (0, i.jsxs)("div", {
                          ref: v,
                          className: a()(ep.kL, d),
                          onFocus: () => {
                              f(!0), K(!0);
                          },
                          onBlur: (e) => {
                              v.current?.contains(e.relatedTarget) || (f(!1), K(!1));
                          },
                          onMouseEnter: () => {
                              S({ action: "HOVER_CUSTOM_STATUS" }), f(!0), K(!0);
                          },
                          onMouseLeave: () => {
                              f(!1), K(!1);
                          },
                          children: [
                              (0, i.jsx)(E.vN, {
                                  children: (0, i.jsx)("div", {
                                      className: ep.hN,
                                      role: "tooltip",
                                      tabIndex: 0,
                                      "aria-label": $.intl.formatToPlainString($.t.UpF5Qa, {
                                          emoji: n?.name ?? "",
                                          status: s,
                                      }),
                                      children: ee,
                                  }),
                              }),
                              h?.(G),
                          ],
                      }),
                  ],
              });
    }),
    eA = r.forwardRef(function (e, t) {
        let { emoji: n, text: s, onCloseProfile: a, ...o } = e,
            [l, u] = r.useState(!1);
        return (0, i.jsx)(eg, {
            ...o,
            ref: t,
            emoji: n,
            text: s,
            className: ep.LL,
            onShowToolbar: u,
            renderToolbar: (e) => (0, i.jsx)(ef, { isVisible: l, isExpandable: e, onCloseProfile: a }),
        });
    });
function eI(e) {
    let t,
        { emoji: n, text: s, user: a, guildId: o, channelId: l, themeType: u, ...c } = e,
        { trackUserProfileAction: d } = (0, L.NJ)(),
        { interactionType: _, interactionSource: h, resetInteraction: f } = (0, w.Pq)(),
        p = h === H.dS.STATUS && _ === H.AQ.REACT,
        E = h === H.dS.STATUS && _ === H.AQ.REPLY,
        m = p || E,
        g = r.useRef(null),
        A = r.useRef(n),
        I = r.useRef(s);
    r.useEffect(() => {
        h === H.dS.STATUS && ((A.current !== n || I.current !== s) && f(), (A.current = n), (I.current = s));
    }, [h, f, n, s]);
    let [T, S] = r.useState(!1),
        y = r.useCallback(
            (e) => {
                (e || !m) && S(e);
            },
            [m],
        );
    return (0, i.jsx)(eo, {
        user: a,
        guildId: o,
        channelId: l,
        themeType: u,
        sourceDetails:
            ((t = null == n ? null : null != n.id ? `\`:${n.name}:\`` : b.Ay.translateSurrogatesToInlineEmoji(n.name)),
            null == s ? t : null == t ? s : `${t} ${s}`),
        sourceType: H.dS.STATUS,
        onAction: d,
        onClose: () => S(!1),
        children: () =>
            (0, i.jsx)(eg, {
                ...c,
                ref: g,
                emoji: n,
                text: s,
                themeType: u,
                className: m ? ep.zf : void 0,
                onShowToolbar: y,
                renderToolbar: (e) =>
                    (0, i.jsx)(B.Ay, {
                        targetRef: g,
                        user: a,
                        sourceType: H.dS.STATUS,
                        isVisible: T && !m,
                        isExpandable: e,
                        onAction: d,
                    }),
            }),
    });
}
let eT = r.forwardRef(function (e, t) {
    let {
            user: n,
            onCloseProfile: r,
            previewText: s,
            previewEmoji: a,
            placeholderText: o,
            prompt: u,
            disableToolbar: c = !1,
            ...d
        } = e,
        _ = (0, S.A)(n.id),
        { analyticsLocations: h } = (0, I.Ay)(A.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
        f = (0, l.bG)([D.default], () => D.default.getId() === n.id),
        p = f && !c,
        E = !f && !n.bot && !c;
    if (null != s || null != a)
        return (0, i.jsx)(I.f5, {
            value: h,
            children: (0, i.jsx)(eg, {
                emoji: a ?? null,
                text: null != s && "" !== s ? s : null,
                placeholderText: o,
                ref: t,
                ...d,
            }),
        });
    let m = _?.emoji ?? null,
        g = _?.state ?? null,
        T = null != g && "" !== g ? g : null;
    return null != m || null != T || p
        ? null == m && null == T
            ? (0, i.jsx)(I.f5, { value: h, children: (0, i.jsx)(em, { onCloseProfile: r, prompt: u, ref: t, ...d }) })
            : E
              ? (0, i.jsx)(I.f5, { value: h, children: (0, i.jsx)(eI, { user: n, emoji: m, text: T, ...d }) })
              : p
                ? (0, i.jsx)(I.f5, {
                      value: h,
                      children: (0, i.jsx)(eA, { emoji: m, text: T, onCloseProfile: r, ref: t, ...d }),
                  })
                : (0, i.jsx)(I.f5, { value: h, children: (0, i.jsx)(eg, { emoji: m, text: T, ref: t, ...d }) })
        : null;
});
