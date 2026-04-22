n.d(t, { Dt: () => O, Fb: () => D, Fh: () => R, Vx: () => M, e5: () => G, k$: () => U }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(889137),
    o = n(827734),
    d = n(785007),
    c = n(939249),
    u = n(628284),
    m = n(933832),
    _ = n(565645),
    h = n(619517),
    p = n(253932),
    g = n(44234),
    A = n(282054),
    f = n(218394),
    x = n(180662),
    C = n(969632),
    E = n(438437),
    I = n(290794),
    v = n(789646),
    b = n(985018),
    T = n(150834);
function S(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("ul", { "aria-label": b.intl.string(b.t.sJpqBS), className: t, children: n });
}
function y(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("div", { "aria-label": b.intl.string(b.t.sJpqBS), role: "group", className: t, children: n });
}
function N(e) {
    let { className: t, children: n } = e,
        { ref: l, ...a } = (0, d._u)({ orientation: "vertical" });
    return (0, i.jsx)("div", { "aria-label": b.intl.string(b.t.sJpqBS), ref: l, ...a, className: t, children: n });
}
function j(e) {
    let { className: t, onClick: n, isSelected: l, isFirstAnswer: a, children: r } = e,
        { pollAnswerRef: o } = (0, v.Mg)();
    return (0, i.jsx)(c.D, {
        role: "checkbox",
        className: s()(t, T.Sn),
        onClick: n,
        "aria-checked": l,
        ref: a ? o : void 0,
        children: r,
    });
}
function L(e) {
    let { className: t, children: n, onClick: l, isSelected: a, hasSelectedAnyAnswer: r, isFirstAnswer: o } = e,
        { pollAnswerRef: d } = (0, v.Mg)();
    return (0, i.jsx)(c.D, {
        role: "radio",
        className: s()(t, T.Sn),
        onClick: l,
        "aria-checked": a,
        tabIndex: r ? (a ? 0 : -1) : o ? 0 : -1,
        ref: o ? d : void 0,
        children: n,
    });
}
function R(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: l,
            canTapAnswers: a,
            hasSelectedAnyAnswer: s,
            className: o,
            answerClassName: d,
            renderAnswerContent: c,
        } = e,
        { ContainerComponent: u, answerElementType: m } = (0, r.YW)({ canTapAnswers: a, answersInteraction: n })
            .with({ answersInteraction: E.CQ.RADIO_BUTTONS }, () => ({ ContainerComponent: N, answerElementType: 1 }))
            .with({ answersInteraction: E.CQ.CHECKBOXES }, () => ({ ContainerComponent: y, answerElementType: 2 }))
            .with({ canTapAnswers: !0, answersInteraction: E.CQ.LIST }, () => ({
                ContainerComponent: S,
                answerElementType: 3,
            }))
            .otherwise(() => ({ ContainerComponent: S, answerElementType: 0 }));
    return (0, i.jsx)(u, {
        className: o,
        children: t.map((e, t) =>
            (0, i.jsx)(
                P,
                {
                    className: d,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: m,
                    answerTapAccessibilityLabel: l,
                    hasSelectedAnyAnswer: s,
                    children: c(e),
                },
                e.answerId,
            ),
        ),
    });
}
function P(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: r, isFirstAnswer: o, elementType: d } = e,
        { channelId: c, messageId: u } = (0, I.Tu)(),
        m = (0, I.hd)(n.style),
        _ = !0 === n.isSelected,
        h = l.useCallback(() => {
            x.A.handlePollAnswerTapped({ channelId: c, messageId: u, answerId: n.answerId });
        }, [c, u, n.answerId]);
    switch (d) {
        case 0:
        case 3:
            return (0, i.jsx)("li", { className: s()(t, m), children: a });
        case 1:
            return (0, i.jsx)(L, {
                className: s()(t, m),
                onClick: h,
                isSelected: _,
                hasSelectedAnyAnswer: r,
                isFirstAnswer: o,
                children: a,
            });
        case 2:
            return (0, i.jsx)(j, { className: s()(t, m), onClick: h, isSelected: _, isFirstAnswer: o, children: a });
    }
}
function w(e) {
    let { attachment: t, className: n } = e,
        l = (0, f.j)(),
        a = p.kt.useSetting();
    return (0, i.jsx)(h.Ay, {
        className: n,
        imageClassName: T.Bw,
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
function D(e) {
    let { className: t, emoji: n } = e;
    return (0, i.jsx)(_.A, { className: t, emojiId: n.id, emojiName: n.name, animated: n.animated });
}
function k(e, t) {
    return null != e ? (0, i.jsx)("div", { className: e, children: t }) : t;
}
function O(e) {
    let { media: t, containerClassName: n, attachmentClassName: l, emojiClassName: a, fallback: s } = e,
        { message: r } = (0, I.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = r.attachments.find((e) => e.id === t.attachmentIds?.[0]);
        if (null != e) return k(n, (0, i.jsx)(w, { className: l, attachment: e }));
    }
    return null != t.emoji ? k(n, (0, i.jsx)(D, { className: a, emoji: t.emoji })) : void 0 !== s ? s : null;
}
function M(e) {
    let { isVictor: t, isExpired: n, size: l, className: a } = e,
        { color: s, backgroundColor: d } = (0, r.YW)({ isVictor: t, isExpired: n })
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
        color: s,
        secondaryColor: d,
        "aria-hidden": !0,
    });
}
function U(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = { width: n, height: n, background: T.So, "aria-hidden": !0 };
    return t ? (0, i.jsx)(A.A, { ...a, foreground: T.dY, className: l }) : (0, i.jsx)(g.A, { ...a, className: l });
}
function G(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = 0.85 * n;
    return (0, i.jsx)("div", {
        className: s()(T.kv, { [T.H7]: t }, l),
        style: { width: n, height: n },
        "aria-hidden": !0,
        children: t && (0, i.jsx)(m.A, { size: "custom", width: a, height: a, color: o.A.unsafe_rawColors.WHITE.css }),
    });
}
