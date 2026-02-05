n.d(t, { Dt: () => P, Fb: () => M, Fh: () => j, Vx: () => D, e5: () => U, k$: () => k }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(889137),
    o = n(827734),
    d = n(421380),
    c = n(397927),
    u = n(565645),
    m = n(619517),
    _ = n(253932),
    h = n(44234),
    p = n(282054),
    g = n(218394),
    A = n(180662),
    f = n(969632),
    x = n(438437),
    E = n(290794),
    C = n(789646),
    I = n(985018),
    T = n(846537);
function v(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("ul", { "aria-label": I.intl.string(I.t.sJpqBS), className: t, children: n });
}
function N(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("div", { "aria-label": I.intl.string(I.t.sJpqBS), role: "group", className: t, children: n });
}
function S(e) {
    let { className: t, children: n } = e,
        { ref: l, ...a } = (0, d._u)({ orientation: "vertical" });
    return (0, i.jsx)("div", { "aria-label": I.intl.string(I.t.sJpqBS), ref: l, ...a, className: t, children: n });
}
function b(e) {
    let { className: t, onClick: n, isSelected: l, isFirstAnswer: a, children: s } = e,
        { pollAnswerRef: o } = (0, C.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "checkbox",
        className: r()(t, T.Sn),
        onClick: n,
        "aria-checked": l,
        ref: a ? o : void 0,
        children: s,
    });
}
function y(e) {
    let { className: t, children: n, onClick: l, isSelected: a, hasSelectedAnyAnswer: s, isFirstAnswer: o } = e,
        { pollAnswerRef: d } = (0, C.Mg)();
    return (0, i.jsx)(c.DUT, {
        role: "radio",
        className: r()(t, T.Sn),
        onClick: l,
        "aria-checked": a,
        tabIndex: s ? (a ? 0 : -1) : o ? 0 : -1,
        ref: o ? d : void 0,
        children: n,
    });
}
function j(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: l,
            canTapAnswers: a,
            hasSelectedAnyAnswer: r,
            className: o,
            answerClassName: d,
            renderAnswerContent: c,
        } = e,
        { ContainerComponent: u, answerElementType: m } = (0, s.YW)({ canTapAnswers: a, answersInteraction: n })
            .with({ answersInteraction: x.CQ.RADIO_BUTTONS }, () => ({ ContainerComponent: S, answerElementType: 1 }))
            .with({ answersInteraction: x.CQ.CHECKBOXES }, () => ({ ContainerComponent: N, answerElementType: 2 }))
            .with({ canTapAnswers: !0, answersInteraction: x.CQ.LIST }, () => ({
                ContainerComponent: v,
                answerElementType: 3,
            }))
            .otherwise(() => ({ ContainerComponent: v, answerElementType: 0 }));
    return (0, i.jsx)(u, {
        className: o,
        children: t.map((e, t) =>
            (0, i.jsx)(
                R,
                {
                    className: d,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: m,
                    answerTapAccessibilityLabel: l,
                    hasSelectedAnyAnswer: r,
                    children: c(e),
                },
                e.answerId,
            ),
        ),
    });
}
function R(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: s, isFirstAnswer: o, elementType: d } = e,
        { channelId: c, messageId: u } = (0, E.Tu)(),
        m = (0, E.hd)(n.style),
        _ = !0 === n.isSelected,
        h = l.useCallback(() => {
            A.A.handlePollAnswerTapped({ channelId: c, messageId: u, answerId: n.answerId });
        }, [c, u, n.answerId]);
    switch (d) {
        case 0:
        case 3:
            return (0, i.jsx)("li", { className: r()(t, m), children: a });
        case 1:
            return (0, i.jsx)(y, {
                className: r()(t, m),
                onClick: h,
                isSelected: _,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: a,
            });
        case 2:
            return (0, i.jsx)(b, { className: r()(t, m), onClick: h, isSelected: _, isFirstAnswer: o, children: a });
    }
}
function L(e) {
    let { attachment: t, className: n } = e,
        l = (0, g.j)(),
        a = _.kt.useSetting();
    return (0, i.jsx)(m.Ay, {
        className: n,
        imageClassName: T.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, f.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: a,
        shouldAnimate: l,
        shouldRenderAccessory: !1,
    });
}
function M(e) {
    let { className: t, emoji: n } = e;
    return (0, i.jsx)(u.A, { className: t, emojiId: n.id, emojiName: n.name, animated: n.animated });
}
function O(e, t) {
    return null != e ? (0, i.jsx)("div", { className: e, children: t }) : t;
}
function P(e) {
    let { media: t, containerClassName: n, attachmentClassName: l, emojiClassName: a, fallback: r } = e,
        { message: s } = (0, E.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => e.id === t.attachmentIds?.[0]);
        if (null != e) return O(n, (0, i.jsx)(L, { className: l, attachment: e }));
    }
    return null != t.emoji ? O(n, (0, i.jsx)(M, { className: a, emoji: t.emoji })) : void 0 !== r ? r : null;
}
function D(e) {
    let { isVictor: t, isExpired: n, size: l, className: a } = e,
        { color: r, backgroundColor: d } = (0, s.YW)({ isVictor: t, isExpired: n })
            .with({ isExpired: !0, isVictor: !0 }, () => ({
                color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                backgroundColor: o.A.unsafe_rawColors.WHITE.css,
            }))
            .with({ isExpired: !0, isVictor: !1 }, () => ({
                color: o.A.colors.ICON_STRONG.css,
                backgroundColor: o.A.colors.BACKGROUND_MOD_MUTED.css,
            }))
            .otherwise(() => ({
                color: o.A.unsafe_rawColors.BRAND_500.css,
                backgroundColor: o.A.unsafe_rawColors.WHITE.css,
            }));
    return (0, i.jsx)(c.yr3, {
        size: "custom",
        width: l,
        height: l,
        className: a,
        color: r,
        secondaryColor: d,
        "aria-hidden": !0,
    });
}
function k(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = { width: n, height: n, background: T.So, "aria-hidden": !0 };
    return t ? (0, i.jsx)(p.A, { ...a, foreground: T.dY, className: l }) : (0, i.jsx)(h.A, { ...a, className: l });
}
function U(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = 0.85 * n;
    return (0, i.jsx)("div", {
        className: r()(T.kv, { [T.H7]: t }, l),
        style: { width: n, height: n },
        "aria-hidden": !0,
        children:
            t && (0, i.jsx)(c.A9s, { size: "custom", width: a, height: a, color: o.A.unsafe_rawColors.WHITE.css }),
    });
}
