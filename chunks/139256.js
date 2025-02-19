n.d(t, {
    $e: () => w,
    $w: () => D,
    Og: () => W,
    ZY: () => M,
    sc: () => R,
    zs: () => F
}),
    n(627341),
    n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(278074),
    s = n(481060),
    c = n(596454),
    d = n(44315),
    u = n(377171),
    p = n(124347),
    m = n(695346),
    f = n(186523),
    h = n(553826),
    g = n(506071),
    _ = n(203143),
    b = n(79390),
    v = n(839963),
    y = n(294608),
    x = n(65145),
    O = n(981631),
    E = n(388032),
    j = n(226644);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('ul', {
        'aria-label': E.NW.string(E.t.sJpqBQ),
        className: t,
        children: n
    });
}
function S(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('div', {
        'aria-label': E.NW.string(E.t.sJpqBQ),
        role: 'group',
        className: t,
        children: n
    });
}
function P(e) {
    let { className: t, children: n } = e,
        i = (0, s.arW)({ orientation: 'vertical' });
    return (0, r.jsx)(
        'div',
        C(N({ 'aria-label': E.NW.string(E.t.sJpqBQ) }, i), {
            className: t,
            children: n
        })
    );
}
function T(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: a, children: l } = e,
        { pollAnswerRef: c } = (0, x.dv)();
    return (0, r.jsx)(s.P3F, {
        role: 'checkbox',
        className: o()(t, j.enabled),
        onClick: n,
        'aria-checked': i,
        ref: a ? c : void 0,
        children: l
    });
}
function A(e) {
    let t,
        { className: n, children: i, onClick: a, isSelected: l, hasSelectedAnyAnswer: c, isFirstAnswer: d } = e;
    t = c ? (l ? 0 : -1) : d ? 0 : -1;
    let { pollAnswerRef: u } = (0, x.dv)();
    return (0, r.jsx)(s.P3F, {
        role: 'radio',
        className: o()(n, j.enabled),
        onClick: a,
        'aria-checked': l,
        tabIndex: t,
        ref: d ? u : void 0,
        children: i
    });
}
function w(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: i, canTapAnswers: a, hasSelectedAnyAnswer: s, className: c, answerClassName: d, renderAnswerContent: u } = e,
        { ContainerComponent: p, answerElementType: m } = (0, l.EQ)({
            canTapAnswers: a,
            answersInteraction: n
        })
            .with({ answersInteraction: v.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: P,
                answerElementType: 1
            }))
            .with({ answersInteraction: v.Y7.CHECKBOXES }, () => ({
                ContainerComponent: S,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: v.Y7.LIST
                },
                () => ({
                    ContainerComponent: I,
                    answerElementType: 3
                })
            )
            .otherwise(() => ({
                ContainerComponent: I,
                answerElementType: 0
            }));
    return (0, r.jsx)(p, {
        className: c,
        children: t.map((e, t) =>
            (0, r.jsx)(
                Z,
                {
                    className: o()(j.__invalid_answer, d),
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: m,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: s,
                    children: u(e)
                },
                e.answerId
            )
        )
    });
}
function Z(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: l, isFirstAnswer: s, elementType: c } = e,
        { channelId: d, messageId: u } = (0, y.pE)(),
        p = (0, y.$B)(n.style),
        m = !0 === n.isSelected,
        f = i.useCallback(() => {
            _.Z.handlePollAnswerTapped({
                channelId: d,
                messageId: u,
                answerId: n.answerId
            });
        }, [d, u, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, r.jsx)('li', {
                className: o()(t, p),
                children: a
            });
        case 1:
            return (0, r.jsx)(A, {
                className: o()(t, p),
                onClick: f,
                isSelected: m,
                hasSelectedAnyAnswer: l,
                isFirstAnswer: s,
                children: a
            });
        case 2:
            return (0, r.jsx)(T, {
                className: o()(t, p),
                onClick: f,
                isSelected: m,
                isFirstAnswer: s,
                children: a
            });
    }
}
function k(e) {
    var t;
    let { attachment: n, className: i } = e,
        a = (0, g.n)(),
        o = m.QK.useSetting();
    return (0, r.jsx)(p.ZP, {
        className: i,
        imageClassName: j.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null !== (t = n.description) && void 0 !== t ? t : (0, b.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: o,
        shouldAnimate: a,
        shouldRenderAccessory: !1
    });
}
function R(e) {
    let { className: t, emoji: n } = e;
    return (0, r.jsx)(c.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    });
}
function L(e, t) {
    return null != e
        ? (0, r.jsx)('div', {
              className: e,
              children: t
          })
        : (0, r.jsx)(r.Fragment, { children: t });
}
function D(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: a, fallback: o } = e,
        { message: l } = (0, y.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = l.attachments.find((e) => {
            var n;
            return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0]);
        });
        if (null != e)
            return L(
                n,
                (0, r.jsx)(k, {
                    className: i,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? L(
              n,
              (0, r.jsx)(R, {
                  className: a,
                  emoji: t.emoji
              })
          )
        : void 0 !== o
          ? (0, r.jsx)(r.Fragment, { children: o })
          : null;
}
function M(e) {
    let { isVictor: t, isExpired: n, size: i, className: a } = e,
        { color: o, backgroundColor: c } = (0, l.EQ)({
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
                    backgroundColor: (0, d.Lq)(O.Ilk.WHITE_500)
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
                color: (0, d.Lq)(O.Ilk.BRAND_500),
                backgroundColor: (0, d.Lq)(O.Ilk.WHITE_500)
            }));
    return (0, r.jsx)(s.owK, {
        size: 'custom',
        width: i,
        height: i,
        className: a,
        color: o,
        secondaryColor: c,
        'aria-hidden': !0
    });
}
function W(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = {
            width: n,
            height: n,
            background: j.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, r.jsx)(
              h.Z,
              C(N({}, a), {
                  foreground: j.radioForeground,
                  className: i
              })
          )
        : (0, r.jsx)(f.Z, C(N({}, a), { className: i }));
}
function F(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = 0.85 * n;
    return (0, r.jsx)('div', {
        className: o()(j.checkbox, { [j.checkboxSelected]: t }, i),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children:
            t &&
            (0, r.jsx)(s.dz2, {
                size: 'custom',
                width: a,
                height: a,
                color: (0, d.Lq)(O.Ilk.WHITE_500)
            })
    });
}
