n.d(t, {
    $e: () => j,
    $w: () => Z,
    Og: () => F,
    ZY: () => B,
    sc: () => U,
    zs: () => V,
}),
    n(314940),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(596454),
    f = n(124347),
    p = n(695346),
    _ = n(186523),
    m = n(553826),
    h = n(506071),
    g = n(203143),
    E = n(79390),
    b = n(839963),
    y = n(294608),
    O = n(65145),
    v = n(388032),
    S = n(313464);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("ul", {
        "aria-label": v.intl.string(v.t.sJpqBS),
        className: t,
        children: n,
    });
}
function D(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("div", {
        "aria-label": v.intl.string(v.t.sJpqBS),
        role: "group",
        className: t,
        children: n,
    });
}
function w(e) {
    let { className: t, children: n } = e,
        i = (0, c.Jb)({ orientation: "vertical" }),
        { ref: a } = i,
        o = N(i, ["ref"]);
    return (0, r.jsx)(
        "div",
        C(
            T(
                {
                    "aria-label": v.intl.string(v.t.sJpqBS),
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
function x(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: a, children: s } = e,
        { pollAnswerRef: l } = (0, O.dv)();
    return (0, r.jsx)(u.P3F, {
        role: "checkbox",
        className: o()(t, S.enabled),
        onClick: n,
        "aria-checked": i,
        ref: a ? l : void 0,
        children: s,
    });
}
function L(e) {
    let t,
        { className: n, children: i, onClick: a, isSelected: s, hasSelectedAnyAnswer: l, isFirstAnswer: c } = e;
    t = l ? (s ? 0 : -1) : c ? 0 : -1;
    let { pollAnswerRef: d } = (0, O.dv)();
    return (0, r.jsx)(u.P3F, {
        role: "radio",
        className: o()(n, S.enabled),
        onClick: a,
        "aria-checked": s,
        tabIndex: t,
        ref: c ? d : void 0,
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
            .with({ answersInteraction: b.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: w,
                answerElementType: 1,
            }))
            .with({ answersInteraction: b.Y7.CHECKBOXES }, () => ({
                ContainerComponent: D,
                answerElementType: 2,
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: b.Y7.LIST,
                },
                () => ({
                    ContainerComponent: R,
                    answerElementType: 3,
                }),
            )
            .otherwise(() => ({
                ContainerComponent: R,
                answerElementType: 0,
            }));
    return (0, r.jsx)(d, {
        className: l,
        children: t.map((e, t) =>
            (0, r.jsx)(
                M,
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
function M(e) {
    let { className: t, answer: n, children: a, hasSelectedAnyAnswer: s, isFirstAnswer: l, elementType: c } = e,
        { channelId: u, messageId: d } = (0, y.pE)(),
        f = (0, y.$B)(n.style),
        p = !0 === n.isSelected,
        _ = i.useCallback(() => {
            g.Z.handlePollAnswerTapped({
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
            return (0, r.jsx)(L, {
                className: o()(t, f),
                onClick: _,
                isSelected: p,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: l,
                children: a,
            });
        case 2:
            return (0, r.jsx)(x, {
                className: o()(t, f),
                onClick: _,
                isSelected: p,
                isFirstAnswer: l,
                children: a,
            });
    }
}
function k(e) {
    var t;
    let { attachment: n, className: i } = e,
        a = (0, h.n)(),
        o = p.QK.useSetting(),
        s = 212;
    return (0, r.jsx)(f.ZP, {
        className: i,
        imageClassName: S.attachmentImage,
        src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
        alt: null != (t = n.description) ? t : (0, E.fw)(n.filename),
        responsive: !0,
        width: s,
        height: s,
        autoPlay: o,
        shouldAnimate: a,
        shouldRenderAccessory: !1,
    });
}
function U(e) {
    let { className: t, emoji: n } = e;
    return (0, r.jsx)(d.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated,
    });
}
function G(e, t) {
    return null != e
        ? (0, r.jsx)("div", {
              className: e,
              children: t,
          })
        : t;
}
function Z(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: a, fallback: o } = e,
        { message: s } = (0, y.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => {
            var n;
            return e.id === (null == (n = t.attachmentIds) ? void 0 : n[0]);
        });
        if (null != e)
            return G(
                n,
                (0, r.jsx)(k, {
                    className: i,
                    attachment: e,
                }),
            );
    }
    return null != t.emoji
        ? G(
              n,
              (0, r.jsx)(U, {
                  className: a,
                  emoji: t.emoji,
              }),
          )
        : void 0 !== o
          ? o
          : null;
}
function B(e) {
    let { isVictor: t, isExpired: n, size: i, className: a } = e,
        { color: o, backgroundColor: c } = (0, s.EQ)({
            isVictor: t,
            isExpired: n,
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0,
                },
                () => ({
                    color: l.Z.colors.BUTTON_POSITIVE_BACKGROUND.css,
                    backgroundColor: l.Z.unsafe_rawColors.WHITE_500.css,
                }),
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1,
                },
                () => ({
                    color: l.Z.colors.ICON_PRIMARY.css,
                    backgroundColor: l.Z.colors.BACKGROUND_MOD_FAINT.css,
                }),
            )
            .otherwise(() => ({
                color: l.Z.unsafe_rawColors.BRAND_500.css,
                backgroundColor: l.Z.unsafe_rawColors.WHITE_500.css,
            }));
    return (0, r.jsx)(u.owK, {
        size: "custom",
        width: i,
        height: i,
        className: a,
        color: o,
        secondaryColor: c,
        "aria-hidden": !0,
    });
}
function F(e) {
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
              C(T({}, a), {
                  foreground: S.radioForeground,
                  className: i,
              }),
          )
        : (0, r.jsx)(_.Z, C(T({}, a), { className: i }));
}
function V(e) {
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
            (0, r.jsx)(u.dz2, {
                size: "custom",
                width: a,
                height: a,
                color: l.Z.unsafe_rawColors.WHITE_500.css,
            }),
    });
}
