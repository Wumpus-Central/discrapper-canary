n.d(t, {
    $e: () => Z,
    $w: () => M,
    Og: () => D,
    ZY: () => O,
    sc: () => P,
    zs: () => w
}),
    n(627341);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(278074),
    o = n(481060),
    c = n(596454),
    d = n(44315),
    u = n(377171),
    m = n(124347),
    _ = n(695346),
    h = n(186523),
    p = n(553826),
    g = n(506071),
    f = n(203143),
    x = n(79390),
    C = n(839963),
    v = n(294608),
    E = n(65145),
    I = n(981631),
    N = n(388032),
    S = n(508827);
function T(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)('ul', {
        'aria-label': N.intl.string(N.t.sJpqBQ),
        className: t,
        children: n
    });
}
function b(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)('div', {
        'aria-label': N.intl.string(N.t.sJpqBQ),
        role: 'group',
        className: t,
        children: n
    });
}
function A(e) {
    let { className: t, children: n } = e,
        l = (0, o.arW)({ orientation: 'vertical' });
    return (0, i.jsx)('div', {
        'aria-label': N.intl.string(N.t.sJpqBQ),
        ...l,
        className: t,
        children: n
    });
}
function j(e) {
    let { className: t, onClick: n, isSelected: l, isFirstAnswer: a, children: s } = e,
        { pollAnswerRef: c } = (0, E.dv)();
    return (0, i.jsx)(o.P3F, {
        role: 'checkbox',
        className: r()(t, S.enabled),
        onClick: n,
        'aria-checked': l,
        ref: a ? c : void 0,
        children: s
    });
}
function y(e) {
    let t,
        { className: n, children: l, onClick: a, isSelected: s, hasSelectedAnyAnswer: c, isFirstAnswer: d } = e;
    t = c ? (s ? 0 : -1) : d ? 0 : -1;
    let { pollAnswerRef: u } = (0, E.dv)();
    return (0, i.jsx)(o.P3F, {
        role: 'radio',
        className: r()(n, S.enabled),
        onClick: a,
        'aria-checked': s,
        tabIndex: t,
        ref: d ? u : void 0,
        children: l
    });
}
function Z(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: l, canTapAnswers: a, hasSelectedAnyAnswer: o, className: c, answerClassName: d, renderAnswerContent: u } = e,
        { ContainerComponent: m, answerElementType: _ } = (0, s.EQ)({
            canTapAnswers: a,
            answersInteraction: n
        })
            .with({ answersInteraction: C.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: A,
                answerElementType: 1
            }))
            .with({ answersInteraction: C.Y7.CHECKBOXES }, () => ({
                ContainerComponent: b,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: C.Y7.LIST
                },
                () => ({
                    ContainerComponent: T,
                    answerElementType: 3
                })
            )
            .otherwise(() => ({
                ContainerComponent: T,
                answerElementType: 0
            }));
    return (0, i.jsx)(m, {
        className: c,
        children: t.map((e, t) =>
            (0, i.jsx)(
                R,
                {
                    className: r()(S.__invalid_answer, d),
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: _,
                    answerTapAccessibilityLabel: l,
                    hasSelectedAnyAnswer: o,
                    children: u(e)
                },
                e.answerId
            )
        )
    });
}
function R(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: s, isFirstAnswer: o, elementType: c } = e,
        { channelId: d, messageId: u } = (0, v.pE)(),
        m = (0, v.$B)(n.style),
        _ = !0 === n.isSelected,
        h = l.useCallback(() => {
            f.Z.handlePollAnswerTapped({
                channelId: d,
                messageId: u,
                answerId: n.answerId
            });
        }, [d, u, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, i.jsx)('li', {
                className: r()(t, m),
                children: a
            });
        case 1:
            return (0, i.jsx)(y, {
                className: r()(t, m),
                onClick: h,
                isSelected: _,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: a
            });
        case 2:
            return (0, i.jsx)(j, {
                className: r()(t, m),
                onClick: h,
                isSelected: _,
                isFirstAnswer: o,
                children: a
            });
    }
}
function L(e) {
    var t;
    let { attachment: n, className: l } = e,
        a = (0, g.n)(),
        r = _.QK.useSetting();
    return (0, i.jsx)(m.ZP, {
        className: l,
        imageClassName: S.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null !== (t = n.description) && void 0 !== t ? t : (0, x.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: r,
        shouldAnimate: a,
        shouldRenderAccessory: !1
    });
}
function P(e) {
    let { className: t, emoji: n } = e;
    return (0, i.jsx)(c.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    });
}
function k(e, t) {
    return null != e
        ? (0, i.jsx)('div', {
              className: e,
              children: t
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}
function M(e) {
    let { media: t, containerClassName: n, attachmentClassName: l, emojiClassName: a, fallback: r } = e,
        { message: s } = (0, v.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => {
            var n;
            return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0]);
        });
        if (null != e)
            return k(
                n,
                (0, i.jsx)(L, {
                    className: l,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? k(
              n,
              (0, i.jsx)(P, {
                  className: a,
                  emoji: t.emoji
              })
          )
        : void 0 !== r
          ? (0, i.jsx)(i.Fragment, { children: r })
          : null;
}
function O(e) {
    let { isVictor: t, isExpired: n, size: l, className: a } = e,
        { color: r, backgroundColor: c } = (0, s.EQ)({
            isVictor: t,
            isExpired: n
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0
                },
                () => ({
                    color: u.Z.BUTTON_POSITIVE_BACKGROUND,
                    backgroundColor: (0, d.Lq)(I.Ilk.WHITE_500)
                })
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1
                },
                () => ({
                    color: u.Z.ICON_PRIMARY,
                    backgroundColor: u.Z.BG_MOD_FAINT
                })
            )
            .otherwise(() => ({
                color: (0, d.Lq)(I.Ilk.BRAND_500),
                backgroundColor: (0, d.Lq)(I.Ilk.WHITE_500)
            }));
    return (0, i.jsx)(o.owK, {
        size: 'custom',
        width: l,
        height: l,
        className: a,
        color: r,
        secondaryColor: c,
        'aria-hidden': !0
    });
}
function D(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = {
            width: n,
            height: n,
            background: S.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, i.jsx)(p.Z, {
              ...a,
              foreground: S.radioForeground,
              className: l
          })
        : (0, i.jsx)(h.Z, {
              ...a,
              className: l
          });
}
function w(e) {
    let { isSelected: t, size: n, className: l } = e,
        a = 0.85 * n;
    return (0, i.jsx)('div', {
        className: r()(S.checkbox, { [S.checkboxSelected]: t }, l),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children:
            t &&
            (0, i.jsx)(o.dz2, {
                size: 'custom',
                width: a,
                height: a,
                color: (0, d.Lq)(I.Ilk.WHITE_500)
            })
    });
}
