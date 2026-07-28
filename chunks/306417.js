n.d(t, { Dt: () => F, Fb: () => M, Fh: () => V, Vx: () => O, e5: () => B, k$: () => U }), n(801541);
var s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    l = n(889137),
    o = n(661531),
    c = n(785007),
    d = n(939249),
    u = n(628284),
    h = n(933832),
    m = n(565645),
    x = n(619517),
    w = n(885386),
    p = n(44234),
    g = n(282054),
    A = n(218394),
    f = n(180662),
    j = n(969632),
    S = n(438437),
    y = n(290794),
    v = n(789646),
    C = n(375708),
    b = n(192778);
function N(e) {
    let { className: t, children: n } = e;
    return (0, s.jsx)("ul", { "aria-label": C.intl.string(C.t.sJpqBS), className: t, children: n });
}
function E(e) {
    let { className: t, children: n } = e;
    return (0, s.jsx)("div", { "aria-label": C.intl.string(C.t.sJpqBS), role: "group", className: t, children: n });
}
function I(e) {
    let { className: t, children: n } = e,
        { ref: i, ...a } = (0, c._u)({ orientation: "vertical" });
    return (0, s.jsx)("div", { "aria-label": C.intl.string(C.t.sJpqBS), ref: i, ...a, className: t, children: n });
}
function T(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: a, children: l } = e,
        { pollAnswerRef: o } = (0, v.Mg)();
    return (0, s.jsx)(d.D, {
        role: "checkbox",
        className: r()(t, b.Sn),
        onClick: n,
        "aria-checked": i,
        ref: a ? o : void 0,
        children: l,
    });
}
function _(e) {
    let { className: t, children: n, onClick: i, isSelected: a, hasSelectedAnyAnswer: l, isFirstAnswer: o } = e,
        { pollAnswerRef: c } = (0, v.Mg)();
    return (0, s.jsx)(d.D, {
        role: "radio",
        className: r()(t, b.Sn),
        onClick: i,
        "aria-checked": a,
        tabIndex: l ? (a ? 0 : -1) : o ? 0 : -1,
        ref: o ? c : void 0,
        children: n,
    });
}
function V(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: i,
            canTapAnswers: a,
            hasSelectedAnyAnswer: r,
            className: o,
            answerClassName: c,
            renderAnswerContent: d,
        } = e,
        { ContainerComponent: u, answerElementType: h } = (0, l.YW)({ canTapAnswers: a, answersInteraction: n })
            .with({ answersInteraction: S.CQ.RADIO_BUTTONS }, () => ({ ContainerComponent: I, answerElementType: 1 }))
            .with({ answersInteraction: S.CQ.CHECKBOXES }, () => ({ ContainerComponent: E, answerElementType: 2 }))
            .with({ canTapAnswers: !0, answersInteraction: S.CQ.LIST }, () => ({
                ContainerComponent: N,
                answerElementType: 3,
            }))
            .otherwise(() => ({ ContainerComponent: N, answerElementType: 0 }));
    return (0, s.jsx)(u, {
        className: o,
        children: t.map((e, t) =>
            (0, s.jsx)(
                k,
                {
                    className: c,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: h,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: r,
                    children: d(e),
                },
                e.answerId,
            ),
        ),
    });
}
function k(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: l, isFirstAnswer: o, elementType: c } = e,
        { channelId: d, messageId: u } = (0, y.Tu)(),
        h = (0, y.hd)(n.style),
        m = !0 === n.isSelected,
        x = i.useCallback(() => {
            f.A.handlePollAnswerTapped({ channelId: d, messageId: u, answerId: n.answerId });
        }, [d, u, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, s.jsx)("li", { className: r()(t, h), children: a });
        case 1:
            return (0, s.jsx)(_, {
                className: r()(t, h),
                onClick: x,
                isSelected: m,
                hasSelectedAnyAnswer: l,
                isFirstAnswer: o,
                children: a,
            });
        case 2:
            return (0, s.jsx)(T, { className: r()(t, h), onClick: x, isSelected: m, isFirstAnswer: o, children: a });
    }
}
function L(e) {
    let { attachment: t, className: n } = e,
        i = (0, A.j)(),
        a = w.kt.useSetting();
    return (0, s.jsx)(x.Ay, {
        className: n,
        imageClassName: b.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, j.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: a,
        shouldAnimate: i,
        shouldRenderAccessory: !1,
    });
}
function M(e) {
    let { className: t, emoji: n } = e;
    return (0, s.jsx)(m.A, { className: t, emojiId: n.id, emojiName: n.name, animated: n.animated });
}
function R(e, t) {
    return null != e ? (0, s.jsx)("div", { className: e, children: t }) : t;
}
function F(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: a, fallback: r } = e,
        { message: l } = (0, y.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = l.attachments.find((e) => e.id === t.attachmentIds?.[0]);
        if (null != e) return R(n, (0, s.jsx)(L, { className: i, attachment: e }));
    }
    return null != t.emoji ? R(n, (0, s.jsx)(M, { className: a, emoji: t.emoji })) : void 0 !== r ? r : null;
}
function O(e) {
    let { isVictor: t, isExpired: n, size: i, className: a } = e,
        { color: r, backgroundColor: c } = (0, l.YW)({ isVictor: t, isExpired: n })
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
    return (0, s.jsx)(u.y, {
        size: "custom",
        width: i,
        height: i,
        className: a,
        color: r,
        secondaryColor: c,
        "aria-hidden": !0,
    });
}
function U(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = { width: n, height: n, background: b.So, "aria-hidden": !0 };
    return t ? (0, s.jsx)(g.A, { ...a, foreground: b.dY, className: i }) : (0, s.jsx)(p.A, { ...a, className: i });
}
function B(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = 0.85 * n;
    return (0, s.jsx)("div", {
        className: r()(b.kv, { [b.H7]: t }, i),
        style: { width: n, height: n },
        "aria-hidden": !0,
        children: t && (0, s.jsx)(h.A, { size: "custom", width: a, height: a, color: o.A.unsafe_rawColors.WHITE.css }),
    });
}
