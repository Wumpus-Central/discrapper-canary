n.d(t, { Dt: () => M, Fb: () => P, Fh: () => L, Vx: () => O, e5: () => G, k$: () => U }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(889137),
    o = n(661531),
    c = n(785007),
    d = n(939249),
    u = n(628284),
    _ = n(933832),
    m = n(565645),
    h = n(619517),
    p = n(253932),
    g = n(44234),
    f = n(282054),
    x = n(218394),
    A = n(962514),
    C = n(969632),
    v = n(438437),
    I = n(290794),
    E = n(789646),
    b = n(985018),
    y = n(150834);
function T(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("ul", { "aria-label": b.intl.string(b.t.sJpqBS), className: t, children: n });
}
function j(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("div", { "aria-label": b.intl.string(b.t.sJpqBS), role: "group", className: t, children: n });
}
function N(e) {
    let { className: t, children: n } = e,
        { ref: l, ...a } = (0, c._u)({ orientation: "vertical" });
    return (0, i.jsx)("div", { "aria-label": b.intl.string(b.t.sJpqBS), ref: l, ...a, className: t, children: n });
}
function S(e) {
    let { className: t, onClick: n, isSelected: l, isFirstAnswer: a, children: s } = e,
        { pollAnswerRef: o } = (0, E.Mg)();
    return (0, i.jsx)(d.D, {
        role: "checkbox",
        className: r()(t, y.Sn),
        onClick: n,
        "aria-checked": l,
        ref: a ? o : void 0,
        children: s,
    });
}
function k(e) {
    let { className: t, children: n, onClick: l, isSelected: a, hasSelectedAnyAnswer: s, isFirstAnswer: o } = e,
        { pollAnswerRef: c } = (0, E.Mg)();
    return (0, i.jsx)(d.D, {
        role: "radio",
        className: r()(t, y.Sn),
        onClick: l,
        "aria-checked": a,
        tabIndex: s ? (a ? 0 : -1) : o ? 0 : -1,
        ref: o ? c : void 0,
        children: n,
    });
}
function L(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: l,
            canTapAnswers: a,
            hasSelectedAnyAnswer: r,
            className: o,
            answerClassName: c,
            renderAnswerContent: d,
        } = e,
        { ContainerComponent: u, answerElementType: _ } = (0, s.YW)({ canTapAnswers: a, answersInteraction: n })
            .with({ answersInteraction: v.CQ.RADIO_BUTTONS }, () => ({ ContainerComponent: N, answerElementType: 1 }))
            .with({ answersInteraction: v.CQ.CHECKBOXES }, () => ({ ContainerComponent: j, answerElementType: 2 }))
            .with({ canTapAnswers: !0, answersInteraction: v.CQ.LIST }, () => ({
                ContainerComponent: T,
                answerElementType: 3,
            }))
            .otherwise(() => ({ ContainerComponent: T, answerElementType: 0 }));
    return (0, i.jsx)(u, {
        className: o,
        children: t.map((e, t) =>
            (0, i.jsx)(
                R,
                {
                    className: c,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: _,
                    answerTapAccessibilityLabel: l,
                    hasSelectedAnyAnswer: r,
                    children: d(e),
                },
                e.answerId,
            ),
        ),
    });
}
function R(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: s, isFirstAnswer: o, elementType: c } = e,
        { channelId: d, messageId: u } = (0, I.Tu)(),
        _ = (0, I.hd)(n.style),
        m = !0 === n.isSelected,
        h = l.useCallback(() => {
            A.A.handlePollAnswerTapped({ channelId: d, messageId: u, answerId: n.answerId });
        }, [d, u, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, i.jsx)("li", { className: r()(t, _), children: a });
        case 1:
            return (0, i.jsx)(k, {
                className: r()(t, _),
                onClick: h,
                isSelected: m,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: a,
            });
        case 2:
            return (0, i.jsx)(S, { className: r()(t, _), onClick: h, isSelected: m, isFirstAnswer: o, children: a });
    }
}
function w(e) {
    let { attachment: t, className: n } = e,
        l = (0, x.j)(),
        a = p.kt.useSetting();
    return (0, i.jsx)(h.Ay, {
        className: n,
        imageClassName: y.Bw,
        src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
        alt: t.description ?? (0, C.Kj)(t.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: a,
        shouldAnimate: l,
        shouldRenderAccessory: !1,
    });
}
function P(e) {
    let { className: t, emoji: n } = e;
    return (0, i.jsx)(m.A, { className: t, emojiId: n.id, emojiName: n.name, animated: n.animated });
}
function D(e, t) {
    return null != e ? (0, i.jsx)("div", { className: e, children: t }) : t;
}
function M(e) {
    let { media: t, containerClassName: n, attachmentClassName: l, emojiClassName: a, fallback: r } = e,
        { message: s } = (0, I.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => e.id === t.attachmentIds?.[0]);
        if (null != e) return D(n, (0, i.jsx)(w, { className: l, attachment: e }));
    }
    return null != t.emoji ? D(n, (0, i.jsx)(P, { className: a, emoji: t.emoji })) : void 0 !== r ? r : null;
}
function O(e) {
    let { isVictor: t, isExpired: n, size: l, className: a } = e,
        { color: r, backgroundColor: c } = (0, s.YW)({ isVictor: t, isExpired: n })
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
    return (0, i.jsx)(u.y, {
        size: "custom",
        width: l,
        height: l,
        className: a,
        color: r,
        secondaryColor: c,
        "aria-hidden": !0,
    });
}
function U(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = { width: n, height: n, background: y.So, "aria-hidden": !0 };
    return t ? (0, i.jsx)(f.A, { ...a, foreground: y.dY, className: l }) : (0, i.jsx)(g.A, { ...a, className: l });
}
function G(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = 0.85 * n;
    return (0, i.jsx)("div", {
        className: r()(y.kv, { [y.H7]: t }, l),
        style: { width: n, height: n },
        "aria-hidden": !0,
        children: t && (0, i.jsx)(_.A, { size: "custom", width: a, height: a, color: o.A.unsafe_rawColors.WHITE.css }),
    });
}
