n.d(t, {
    $e: function () {
        return L;
    },
    $w: function () {
        return D;
    },
    Og: function () {
        return U;
    },
    ZY: function () {
        return B;
    },
    sc: function () {
        return M;
    },
    zs: function () {
        return w;
    }
}),
    n(627341);
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(278074),
    d = n(481060),
    u = n(596454),
    m = n(44315),
    h = n(377171),
    f = n(124347),
    p = n(695346),
    _ = n(186523),
    g = n(553826),
    E = n(506071),
    C = n(203143),
    I = n(79390),
    x = n(839963),
    N = n(294608),
    v = n(65145),
    T = n(981631),
    S = n(388032),
    A = n(214163);
function b(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('ul', {
        'aria-label': S.intl.string(S.t.sJpqBQ),
        className: t,
        children: n
    });
}
function j(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        'aria-label': S.intl.string(S.t.sJpqBQ),
        role: 'group',
        className: t,
        children: n
    });
}
function R(e) {
    let { className: t, children: n } = e,
        i = (0, d.useRadioGroup)({ orientation: 'vertical' });
    return (0, l.jsx)('div', {
        'aria-label': S.intl.string(S.t.sJpqBQ),
        ...i,
        className: t,
        children: n
    });
}
function Z(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: r, children: a } = e,
        { pollAnswerRef: o } = (0, v.dv)();
    return (0, l.jsx)(d.Clickable, {
        role: 'checkbox',
        className: s()(t, A.enabled),
        onClick: n,
        'aria-checked': i,
        ref: r ? o : void 0,
        children: a
    });
}
function P(e) {
    let t,
        { className: n, children: i, onClick: r, isSelected: a, hasSelectedAnyAnswer: o, isFirstAnswer: c } = e;
    t = o ? (a ? 0 : -1) : c ? 0 : -1;
    let { pollAnswerRef: u } = (0, v.dv)();
    return (0, l.jsx)(d.Clickable, {
        role: 'radio',
        className: s()(n, A.enabled),
        onClick: r,
        'aria-checked': a,
        tabIndex: t,
        ref: c ? u : void 0,
        children: i
    });
}
function L(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: i, canTapAnswers: r, hasSelectedAnyAnswer: a, className: o, answerClassName: d, renderAnswerContent: u } = e,
        { ContainerComponent: m, answerElementType: h } = (0, c.EQ)({
            canTapAnswers: r,
            answersInteraction: n
        })
            .with({ answersInteraction: x.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: R,
                answerElementType: 1
            }))
            .with({ answersInteraction: x.Y7.CHECKBOXES }, () => ({
                ContainerComponent: j,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: x.Y7.LIST
                },
                () => ({
                    ContainerComponent: b,
                    answerElementType: 3
                })
            )
            .otherwise(() => ({
                ContainerComponent: b,
                answerElementType: 0
            }));
    return (0, l.jsx)(m, {
        className: o,
        children: t.map((e, t) =>
            (0, l.jsx)(
                y,
                {
                    className: s()(A.__invalid_answer, d),
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: h,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: a,
                    children: u(e)
                },
                e.answerId
            )
        )
    });
}
function y(e) {
    let { className: t, answer: n, children: i, hasSelectedAnyAnswer: r, isFirstAnswer: o, elementType: c } = e,
        { channelId: d, messageId: u } = (0, N.pE)(),
        m = (0, N.$B)(n.style),
        h = !0 === n.isSelected,
        f = a.useCallback(() => {
            C.Z.handlePollAnswerTapped({
                channelId: d,
                messageId: u,
                answerId: n.answerId
            });
        }, [d, u, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, l.jsx)('li', {
                className: s()(t, m),
                children: i
            });
        case 1:
            return (0, l.jsx)(P, {
                className: s()(t, m),
                onClick: f,
                isSelected: h,
                hasSelectedAnyAnswer: r,
                isFirstAnswer: o,
                children: i
            });
        case 2:
            return (0, l.jsx)(Z, {
                className: s()(t, m),
                onClick: f,
                isSelected: h,
                isFirstAnswer: o,
                children: i
            });
    }
}
function O(e) {
    var t;
    let { attachment: n, className: i } = e,
        r = (0, E.n)(),
        a = p.QK.useSetting();
    return (0, l.jsx)(f.ZP, {
        className: i,
        imageClassName: A.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null !== (t = n.description) && void 0 !== t ? t : (0, I.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: a,
        shouldAnimate: r,
        shouldRenderAccessory: !1
    });
}
function M(e) {
    let { className: t, emoji: n } = e;
    return (0, l.jsx)(u.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    });
}
function k(e, t) {
    return null != e
        ? (0, l.jsx)('div', {
              className: e,
              children: t
          })
        : (0, l.jsx)(l.Fragment, { children: t });
}
function D(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: r, fallback: a } = e,
        { message: o } = (0, N.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = o.attachments.find((e) => {
            var n;
            return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0]);
        });
        if (null != e)
            return k(
                n,
                (0, l.jsx)(O, {
                    className: i,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? k(
              n,
              (0, l.jsx)(M, {
                  className: r,
                  emoji: t.emoji
              })
          )
        : void 0 !== a
          ? (0, l.jsx)(l.Fragment, { children: a })
          : null;
}
function B(e) {
    let { isVictor: t, isExpired: n, size: i, className: r } = e,
        { color: a, backgroundColor: o } = (0, c.EQ)({
            isVictor: t,
            isExpired: n
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0
                },
                () => ({
                    color: h.Z.BUTTON_POSITIVE_BACKGROUND,
                    backgroundColor: (0, m.Lq)(T.Ilk.WHITE_500)
                })
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1
                },
                () => ({
                    color: h.Z.ICON_PRIMARY,
                    backgroundColor: h.Z.BG_MOD_FAINT
                })
            )
            .otherwise(() => ({
                color: (0, m.Lq)(T.Ilk.BRAND_500),
                backgroundColor: (0, m.Lq)(T.Ilk.WHITE_500)
            }));
    return (0, l.jsx)(d.CircleCheckIcon, {
        size: 'custom',
        width: i,
        height: i,
        className: r,
        color: a,
        secondaryColor: o,
        'aria-hidden': !0
    });
}
function U(e) {
    let { isSelected: t, size: n, className: i } = e,
        r = {
            width: n,
            height: n,
            background: A.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, l.jsx)(g.Z, {
              ...r,
              foreground: A.radioForeground,
              className: i
          })
        : (0, l.jsx)(_.Z, {
              ...r,
              className: i
          });
}
function w(e) {
    let { isSelected: t, size: n, className: i } = e,
        r = 0.85 * n;
    return (0, l.jsx)('div', {
        className: s()(A.checkbox, { [A.checkboxSelected]: t }, i),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children:
            t &&
            (0, l.jsx)(d.CheckmarkLargeIcon, {
                size: 'custom',
                width: r,
                height: r,
                color: (0, m.Lq)(T.Ilk.WHITE_500)
            })
    });
}
((r = i || (i = {}))[(r.LIST_ITEM = 0)] = 'LIST_ITEM'), (r[(r.RADIO = 1)] = 'RADIO'), (r[(r.CHECKBOX = 2)] = 'CHECKBOX'), (r[(r.LIST_ITEM_BUTTON = 3)] = 'LIST_ITEM_BUTTON');
