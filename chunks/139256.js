n.d(t, {
    $e: () => w,
    $w: () => L,
    Og: () => W,
    ZY: () => M,
    sc: () => R,
    zs: () => U
}),
    n(627341),
    n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(278074),
    s = n(481060),
    c = n(596454),
    u = n(44315),
    d = n(377171),
    p = n(124347),
    m = n(695346),
    f = n(186523),
    h = n(553826),
    g = n(506071),
    _ = n(203143),
    b = n(79390),
    x = n(839963),
    y = n(294608),
    E = n(65145),
    v = n(981631),
    O = n(388032),
    N = n(56228);
function j(e) {
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
        'aria-label': O.NW.string(O.t.sJpqBQ),
        className: t,
        children: n
    });
}
function S(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('div', {
        'aria-label': O.NW.string(O.t.sJpqBQ),
        role: 'group',
        className: t,
        children: n
    });
}
function T(e) {
    let { className: t, children: n } = e,
        i = (0, s.arW)({ orientation: 'vertical' });
    return (0, r.jsx)(
        'div',
        C(j({ 'aria-label': O.NW.string(O.t.sJpqBQ) }, i), {
            className: t,
            children: n
        })
    );
}
function P(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: a, children: o } = e,
        { pollAnswerRef: c } = (0, E.dv)();
    return (0, r.jsx)(s.P3F, {
        role: 'checkbox',
        className: l()(t, N.enabled),
        onClick: n,
        'aria-checked': i,
        ref: a ? c : void 0,
        children: o
    });
}
function A(e) {
    let { className: t, children: n, onClick: i, isSelected: a, hasSelectedAnyAnswer: o, isFirstAnswer: c } = e,
        { pollAnswerRef: u } = (0, E.dv)();
    return (0, r.jsx)(s.P3F, {
        role: 'radio',
        className: l()(t, N.enabled),
        onClick: i,
        'aria-checked': a,
        tabIndex: o ? (a ? 0 : -1) : c ? 0 : -1,
        ref: c ? u : void 0,
        children: n
    });
}
function w(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: i, canTapAnswers: a, hasSelectedAnyAnswer: l, className: s, answerClassName: c, renderAnswerContent: u } = e,
        { ContainerComponent: d, answerElementType: p } = (0, o.EQ)({
            canTapAnswers: a,
            answersInteraction: n
        })
            .with({ answersInteraction: x.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: T,
                answerElementType: 1
            }))
            .with({ answersInteraction: x.Y7.CHECKBOXES }, () => ({
                ContainerComponent: S,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: x.Y7.LIST
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
    return (0, r.jsx)(d, {
        className: s,
        children: t.map((e, t) =>
            (0, r.jsx)(
                Z,
                {
                    className: c,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: p,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: l,
                    children: u(e)
                },
                e.answerId
            )
        )
    });
}
function Z(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: o, isFirstAnswer: s, elementType: c } = e,
        { channelId: u, messageId: d } = (0, y.pE)(),
        p = (0, y.$B)(n.style),
        m = !0 === n.isSelected,
        f = i.useCallback(() => {
            _.Z.handlePollAnswerTapped({
                channelId: u,
                messageId: d,
                answerId: n.answerId
            });
        }, [u, d, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, r.jsx)('li', {
                className: l()(t, p),
                children: a
            });
        case 1:
            return (0, r.jsx)(A, {
                className: l()(t, p),
                onClick: f,
                isSelected: m,
                hasSelectedAnyAnswer: o,
                isFirstAnswer: s,
                children: a
            });
        case 2:
            return (0, r.jsx)(P, {
                className: l()(t, p),
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
        l = m.QK.useSetting();
    return (0, r.jsx)(p.ZP, {
        className: i,
        imageClassName: N.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null != (t = n.description) ? t : (0, b.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: l,
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
function D(e, t) {
    return null != e
        ? (0, r.jsx)('div', {
              className: e,
              children: t
          })
        : t;
}
function L(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: a, fallback: l } = e,
        { message: o } = (0, y.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = o.attachments.find((e) => {
            var n;
            return e.id === (null == (n = t.attachmentIds) ? void 0 : n[0]);
        });
        if (null != e)
            return D(
                n,
                (0, r.jsx)(k, {
                    className: i,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? D(
              n,
              (0, r.jsx)(R, {
                  className: a,
                  emoji: t.emoji
              })
          )
        : void 0 !== l
          ? l
          : null;
}
function M(e) {
    let { isVictor: t, isExpired: n, size: i, className: a } = e,
        { color: l, backgroundColor: c } = (0, o.EQ)({
            isVictor: t,
            isExpired: n
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0
                },
                () => ({
                    color: d.Z.BUTTON_POSITIVE_BACKGROUND,
                    backgroundColor: (0, u.Lq)(v.Ilk.WHITE_500)
                })
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1
                },
                () => ({
                    color: d.Z.ICON_PRIMARY,
                    backgroundColor: d.Z.BG_MOD_FAINT
                })
            )
            .otherwise(() => ({
                color: (0, u.Lq)(v.Ilk.BRAND_500),
                backgroundColor: (0, u.Lq)(v.Ilk.WHITE_500)
            }));
    return (0, r.jsx)(s.owK, {
        size: 'custom',
        width: i,
        height: i,
        className: a,
        color: l,
        secondaryColor: c,
        'aria-hidden': !0
    });
}
function W(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = {
            width: n,
            height: n,
            background: N.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, r.jsx)(
              h.Z,
              C(j({}, a), {
                  foreground: N.radioForeground,
                  className: i
              })
          )
        : (0, r.jsx)(f.Z, C(j({}, a), { className: i }));
}
function U(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = 0.85 * n;
    return (0, r.jsx)('div', {
        className: l()(N.checkbox, { [N.checkboxSelected]: t }, i),
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
                color: (0, u.Lq)(v.Ilk.WHITE_500)
            })
    });
}
