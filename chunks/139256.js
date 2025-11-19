n.d(t, {
    $e: () => j,
    $w: () => F,
    Og: () => H,
    ZY: () => V,
    sc: () => B,
    zs: () => Y,
}),
    n(314940),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(755721),
    c = n(481060),
    u = n(596454),
    d = n(44315),
    f = n(377171),
    _ = n(124347),
    p = n(695346),
    h = n(186523),
    m = n(553826),
    g = n(506071),
    E = n(203143),
    b = n(79390),
    y = n(839963),
    O = n(294608),
    v = n(65145),
    I = n(981631),
    T = n(388032),
    S = n(397789);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function w(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("ul", {
        "aria-label": T.intl.string(T.t.sJpqBS),
        className: t,
        children: n,
    });
}
function L(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("div", {
        "aria-label": T.intl.string(T.t.sJpqBS),
        role: "group",
        className: t,
        children: n,
    });
}
function x(e) {
    let { className: t, children: n } = e,
        i = (0, l.Jb)({ orientation: "vertical" }),
        { ref: a } = i,
        o = P(i, ["ref"]);
    return (0, r.jsx)(
        "div",
        R(
            C(
                {
                    "aria-label": T.intl.string(T.t.sJpqBS),
                    ref: a,
                },
                o,
            ),
            {
                className: t,
                children: n,
            },
        ),
    );
}
function M(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: a, children: s } = e,
        { pollAnswerRef: l } = (0, v.dv)();
    return (0, r.jsx)(c.P3F, {
        role: "checkbox",
        className: o()(t, S.enabled),
        onClick: n,
        "aria-checked": i,
        ref: a ? l : void 0,
        children: s,
    });
}
function k(e) {
    let t,
        { className: n, children: i, onClick: a, isSelected: s, hasSelectedAnyAnswer: l, isFirstAnswer: u } = e;
    t = l ? (s ? 0 : -1) : u ? 0 : -1;
    let { pollAnswerRef: d } = (0, v.dv)();
    return (0, r.jsx)(c.P3F, {
        role: "radio",
        className: o()(n, S.enabled),
        onClick: a,
        "aria-checked": s,
        tabIndex: t,
        ref: u ? d : void 0,
        children: i,
    });
}
function j(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: i,
            canTapAnswers: a,
            hasSelectedAnyAnswer: o,
            className: l,
            answerClassName: c,
            renderAnswerContent: u,
        } = e,
        { ContainerComponent: d, answerElementType: f } = (0, s.EQ)({
            canTapAnswers: a,
            answersInteraction: n,
        })
            .with({ answersInteraction: y.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: x,
                answerElementType: 1,
            }))
            .with({ answersInteraction: y.Y7.CHECKBOXES }, () => ({
                ContainerComponent: L,
                answerElementType: 2,
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: y.Y7.LIST,
                },
                () => ({
                    ContainerComponent: w,
                    answerElementType: 3,
                }),
            )
            .otherwise(() => ({
                ContainerComponent: w,
                answerElementType: 0,
            }));
    return (0, r.jsx)(d, {
        className: l,
        children: t.map((e, t) =>
            (0, r.jsx)(
                U,
                {
                    className: c,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: f,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: o,
                    children: u(e),
                },
                e.answerId,
            ),
        ),
    });
}
function U(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: s, isFirstAnswer: l, elementType: c } = e,
        { channelId: u, messageId: d } = (0, O.pE)(),
        f = (0, O.$B)(n.style),
        _ = !0 === n.isSelected,
        p = i.useCallback(() => {
            E.Z.handlePollAnswerTapped({
                channelId: u,
                messageId: d,
                answerId: n.answerId,
            });
        }, [u, d, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, r.jsx)("li", {
                className: o()(t, f),
                children: a,
            });
        case 1:
            return (0, r.jsx)(k, {
                className: o()(t, f),
                onClick: p,
                isSelected: _,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: l,
                children: a,
            });
        case 2:
            return (0, r.jsx)(M, {
                className: o()(t, f),
                onClick: p,
                isSelected: _,
                isFirstAnswer: l,
                children: a,
            });
    }
}
function G(e) {
    var t;
    let { attachment: n, className: i } = e,
        a = (0, g.n)(),
        o = p.QK.useSetting(),
        s = 212;
    return (0, r.jsx)(_.ZP, {
        className: i,
        imageClassName: S.attachmentImage,
        src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
        alt: null != (t = n.description) ? t : (0, b.fw)(n.filename),
        responsive: !0,
        width: s,
        height: s,
        autoPlay: o,
        shouldAnimate: a,
        shouldRenderAccessory: !1,
    });
}
function B(e) {
    let { className: t, emoji: n } = e;
    return (0, r.jsx)(u.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated,
    });
}
function Z(e, t) {
    return null != e
        ? (0, r.jsx)("div", {
              className: e,
              children: t,
          })
        : t;
}
function F(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: a, fallback: o } = e,
        { message: s } = (0, O.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => {
            var n;
            return e.id === (null == (n = t.attachmentIds) ? void 0 : n[0]);
        });
        if (null != e)
            return Z(
                n,
                (0, r.jsx)(G, {
                    className: i,
                    attachment: e,
                }),
            );
    }
    return null != t.emoji
        ? Z(
              n,
              (0, r.jsx)(B, {
                  className: a,
                  emoji: t.emoji,
              }),
          )
        : void 0 !== o
          ? o
          : null;
}
function V(e) {
    let { isVictor: t, isExpired: n, size: i, className: a } = e,
        { color: o, backgroundColor: l } = (0, s.EQ)({
            isVictor: t,
            isExpired: n,
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0,
                },
                () => ({
                    color: f.Z.BUTTON_POSITIVE_BACKGROUND,
                    backgroundColor: (0, d.Lq)(I.Ilk.WHITE_500),
                }),
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1,
                },
                () => ({
                    color: f.Z.ICON_PRIMARY,
                    backgroundColor: f.Z.BACKGROUND_MOD_FAINT,
                }),
            )
            .otherwise(() => ({
                color: (0, d.Lq)(I.Ilk.BRAND_500),
                backgroundColor: (0, d.Lq)(I.Ilk.WHITE_500),
            }));
    return (0, r.jsx)(c.owK, {
        size: "custom",
        width: i,
        height: i,
        className: a,
        color: o,
        secondaryColor: l,
        "aria-hidden": !0,
    });
}
function H(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = {
            width: n,
            height: n,
            background: S.radioBackground,
            "aria-hidden": !0,
        };
    return t
        ? (0, r.jsx)(
              m.Z,
              R(C({}, a), {
                  foreground: S.radioForeground,
                  className: i,
              }),
          )
        : (0, r.jsx)(h.Z, R(C({}, a), { className: i }));
}
function Y(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = 0.85 * n;
    return (0, r.jsx)("div", {
        className: o()(S.checkbox, { [S.checkboxSelected]: t }, i),
        style: {
            width: n,
            height: n,
        },
        "aria-hidden": !0,
        children:
            t &&
            (0, r.jsx)(c.dz2, {
                size: "custom",
                width: a,
                height: a,
                color: (0, d.Lq)(I.Ilk.WHITE_500),
            }),
    });
}
