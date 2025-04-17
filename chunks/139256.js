n.d(t, {
    $e: () => w,
    $w: () => L,
    Og: () => W,
    ZY: () => M,
    sc: () => k,
    zs: () => U
}),
    n(314940),
    n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
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
    N = n(388032),
    O = n(56228);
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
function S(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('ul', {
        'aria-label': N.NW.string(N.t.sJpqBQ),
        className: t,
        children: n
    });
}
function I(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)('div', {
        'aria-label': N.NW.string(N.t.sJpqBQ),
        role: 'group',
        className: t,
        children: n
    });
}
function T(e) {
    let { className: t, children: n } = e,
        i = (0, s.arW)({ orientation: 'vertical' }),
        { ref: l } = i,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(i, ['ref']);
    return (0, r.jsx)(
        'div',
        C(
            j(
                {
                    'aria-label': N.NW.string(N.t.sJpqBQ),
                    ref: l
                },
                a
            ),
            {
                className: t,
                children: n
            }
        )
    );
}
function P(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: l, children: o } = e,
        { pollAnswerRef: c } = (0, E.dv)();
    return (0, r.jsx)(s.P3F, {
        role: 'checkbox',
        className: a()(t, O.enabled),
        onClick: n,
        'aria-checked': i,
        ref: l ? c : void 0,
        children: o
    });
}
function A(e) {
    let { className: t, children: n, onClick: i, isSelected: l, hasSelectedAnyAnswer: o, isFirstAnswer: c } = e,
        { pollAnswerRef: u } = (0, E.dv)();
    return (0, r.jsx)(s.P3F, {
        role: 'radio',
        className: a()(t, O.enabled),
        onClick: i,
        'aria-checked': l,
        tabIndex: o ? (l ? 0 : -1) : c ? 0 : -1,
        ref: c ? u : void 0,
        children: n
    });
}
function w(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: i, canTapAnswers: l, hasSelectedAnyAnswer: a, className: s, answerClassName: c, renderAnswerContent: u } = e,
        { ContainerComponent: d, answerElementType: p } = (0, o.EQ)({
            canTapAnswers: l,
            answersInteraction: n
        })
            .with({ answersInteraction: x.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: T,
                answerElementType: 1
            }))
            .with({ answersInteraction: x.Y7.CHECKBOXES }, () => ({
                ContainerComponent: I,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: x.Y7.LIST
                },
                () => ({
                    ContainerComponent: S,
                    answerElementType: 3
                })
            )
            .otherwise(() => ({
                ContainerComponent: S,
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
                    hasSelectedAnyAnswer: a,
                    children: u(e)
                },
                e.answerId
            )
        )
    });
}
function Z(e) {
    let { className: t, answer: n, children: l, hasSelectedAnyAnswer: o, isFirstAnswer: s, elementType: c } = e,
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
                className: a()(t, p),
                children: l
            });
        case 1:
            return (0, r.jsx)(A, {
                className: a()(t, p),
                onClick: f,
                isSelected: m,
                hasSelectedAnyAnswer: o,
                isFirstAnswer: s,
                children: l
            });
        case 2:
            return (0, r.jsx)(P, {
                className: a()(t, p),
                onClick: f,
                isSelected: m,
                isFirstAnswer: s,
                children: l
            });
    }
}
function R(e) {
    var t;
    let { attachment: n, className: i } = e,
        l = (0, g.n)(),
        a = m.QK.useSetting();
    return (0, r.jsx)(p.ZP, {
        className: i,
        imageClassName: O.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null != (t = n.description) ? t : (0, b.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: a,
        shouldAnimate: l,
        shouldRenderAccessory: !1
    });
}
function k(e) {
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
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: l, fallback: a } = e,
        { message: o } = (0, y.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = o.attachments.find((e) => {
            var n;
            return e.id === (null == (n = t.attachmentIds) ? void 0 : n[0]);
        });
        if (null != e)
            return D(
                n,
                (0, r.jsx)(R, {
                    className: i,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? D(
              n,
              (0, r.jsx)(k, {
                  className: l,
                  emoji: t.emoji
              })
          )
        : void 0 !== a
          ? a
          : null;
}
function M(e) {
    let { isVictor: t, isExpired: n, size: i, className: l } = e,
        { color: a, backgroundColor: c } = (0, o.EQ)({
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
        className: l,
        color: a,
        secondaryColor: c,
        'aria-hidden': !0
    });
}
function W(e) {
    let { isSelected: t, size: n, className: i } = e,
        l = {
            width: n,
            height: n,
            background: O.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, r.jsx)(
              h.Z,
              C(j({}, l), {
                  foreground: O.radioForeground,
                  className: i
              })
          )
        : (0, r.jsx)(f.Z, C(j({}, l), { className: i }));
}
function U(e) {
    let { isSelected: t, size: n, className: i } = e,
        l = 0.85 * n;
    return (0, r.jsx)('div', {
        className: a()(O.checkbox, { [O.checkboxSelected]: t }, i),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children:
            t &&
            (0, r.jsx)(s.dz2, {
                size: 'custom',
                width: l,
                height: l,
                color: (0, u.Lq)(v.Ilk.WHITE_500)
            })
    });
}
