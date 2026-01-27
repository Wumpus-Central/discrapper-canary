n.d(t, {
    Dt: () => M,
    Fb: () => D,
    Fh: () => P,
    Vx: () => k,
    e5: () => G,
    k$: () => U,
}),
    n(801541),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(889137),
    o = n(827734),
    c = n(421380),
    u = n(397927),
    d = n(565645),
    p = n(619517),
    m = n(253932),
    f = n(44234),
    g = n(282054),
    h = n(218394),
    _ = n(180662),
    b = n(969632),
    A = n(438437),
    y = n(290794),
    v = n(789646),
    x = n(985018),
    O = n(846537);

function E(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function j(e, t) {
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

function C(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("ul", {
        "aria-label": x.intl.string(x.t.sJpqBS),
        className: t,
        children: n,
    });
}

function I(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("div", {
        "aria-label": x.intl.string(x.t.sJpqBS),
        role: "group",
        className: t,
        children: n,
    });
}

function S(e) {
    let { className: t, children: n } = e,
        i = (0, c._u)({
            orientation: "vertical",
        }),
        { ref: l } = i,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(i, ["ref"]);
    return (0, r.jsx)(
        "div",
        j(
            E(
                {
                    "aria-label": x.intl.string(x.t.sJpqBS),
                    ref: l,
                },
                a,
            ),
            {
                className: t,
                children: n,
            },
        ),
    );
}

function T(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: l, children: s } = e,
        { pollAnswerRef: o } = (0, v.Mg)();
    return (0, r.jsx)(u.DUT, {
        role: "checkbox",
        className: a()(t, O.Sn),
        onClick: n,
        "aria-checked": i,
        ref: l ? o : void 0,
        children: s,
    });
}

function N(e) {
    let { className: t, children: n, onClick: i, isSelected: l, hasSelectedAnyAnswer: s, isFirstAnswer: o } = e,
        { pollAnswerRef: c } = (0, v.Mg)();
    return (0, r.jsx)(u.DUT, {
        role: "radio",
        className: a()(t, O.Sn),
        onClick: i,
        "aria-checked": l,
        tabIndex: s ? (l ? 0 : -1) : o ? 0 : -1,
        ref: o ? c : void 0,
        children: n,
    });
}

function P(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: i,
            canTapAnswers: l,
            hasSelectedAnyAnswer: a,
            className: o,
            answerClassName: c,
            renderAnswerContent: u,
        } = e,
        { ContainerComponent: d, answerElementType: p } = (0, s.YW)({
            canTapAnswers: l,
            answersInteraction: n,
        })
            .with(
                {
                    answersInteraction: A.CQ.RADIO_BUTTONS,
                },
                () => ({
                    ContainerComponent: S,
                    answerElementType: 1,
                }),
            )
            .with(
                {
                    answersInteraction: A.CQ.CHECKBOXES,
                },
                () => ({
                    ContainerComponent: I,
                    answerElementType: 2,
                }),
            )
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: A.CQ.LIST,
                },
                () => ({
                    ContainerComponent: C,
                    answerElementType: 3,
                }),
            )
            .otherwise(() => ({
                ContainerComponent: C,
                answerElementType: 0,
            }));
    return (0, r.jsx)(d, {
        className: o,
        children: t.map((e, t) =>
            (0, r.jsx)(
                w,
                {
                    className: c,
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: p,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: a,
                    children: u(e),
                },
                e.answerId,
            ),
        ),
    });
}

function w(e) {
    let { className: t, answer: n, children: l, hasSelectedAnyAnswer: s, isFirstAnswer: o, elementType: c } = e,
        { channelId: u, messageId: d } = (0, y.Tu)(),
        p = (0, y.hd)(n.style),
        m = !0 === n.isSelected,
        f = i.useCallback(() => {
            _.A.handlePollAnswerTapped({
                channelId: u,
                messageId: d,
                answerId: n.answerId,
            });
        }, [u, d, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, r.jsx)("li", {
                className: a()(t, p),
                children: l,
            });
        case 1:
            return (0, r.jsx)(N, {
                className: a()(t, p),
                onClick: f,
                isSelected: m,
                hasSelectedAnyAnswer: s,
                isFirstAnswer: o,
                children: l,
            });
        case 2:
            return (0, r.jsx)(T, {
                className: a()(t, p),
                onClick: f,
                isSelected: m,
                isFirstAnswer: o,
                children: l,
            });
    }
}

function R(e) {
    var t;
    let { attachment: n, className: i } = e,
        l = (0, h.j)(),
        a = m.kt.useSetting();
    return (0, r.jsx)(p.Ay, {
        className: i,
        imageClassName: O.Bw,
        src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
        alt: null != (t = n.description) ? t : (0, b.Kj)(n.filename),
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
    return (0, r.jsx)(d.A, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated,
    });
}

function L(e, t) {
    return null != e
        ? (0, r.jsx)("div", {
              className: e,
              children: t,
          })
        : t;
}

function M(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: l, fallback: a } = e,
        { message: s } = (0, y.y0)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => {
            var n;
            return e.id === (null == (n = t.attachmentIds) ? void 0 : n[0]);
        });
        if (null != e)
            return L(
                n,
                (0, r.jsx)(R, {
                    className: i,
                    attachment: e,
                }),
            );
    }
    return null != t.emoji
        ? L(
              n,
              (0, r.jsx)(D, {
                  className: l,
                  emoji: t.emoji,
              }),
          )
        : void 0 !== a
          ? a
          : null;
}

function k(e) {
    let { isVictor: t, isExpired: n, size: i, className: l } = e,
        { color: a, backgroundColor: c } = (0, s.YW)({
            isVictor: t,
            isExpired: n,
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0,
                },
                () => ({
                    color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                    backgroundColor: o.A.unsafe_rawColors.WHITE.css,
                }),
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1,
                },
                () => ({
                    color: o.A.colors.ICON_STRONG.css,
                    backgroundColor: o.A.colors.BACKGROUND_MOD_MUTED.css,
                }),
            )
            .otherwise(() => ({
                color: o.A.unsafe_rawColors.BRAND_500.css,
                backgroundColor: o.A.unsafe_rawColors.WHITE.css,
            }));
    return (0, r.jsx)(u.yr3, {
        size: "custom",
        width: i,
        height: i,
        className: l,
        color: a,
        secondaryColor: c,
        "aria-hidden": !0,
    });
}

function U(e) {
    let { isSelected: t, size: n, className: i } = e,
        l = {
            width: n,
            height: n,
            background: O.So,
            "aria-hidden": !0,
        };
    return t
        ? (0, r.jsx)(
              g.A,
              j(E({}, l), {
                  foreground: O.dY,
                  className: i,
              }),
          )
        : (0, r.jsx)(
              f.A,
              j(E({}, l), {
                  className: i,
              }),
          );
}

function G(e) {
    let { isSelected: t, size: n, className: i } = e,
        l = 0.85 * n;
    return (0, r.jsx)("div", {
        className: a()(
            O.kv,
            {
                [O.H7]: t,
            },
            i,
        ),
        style: {
            width: n,
            height: n,
        },
        "aria-hidden": !0,
        children:
            t &&
            (0, r.jsx)(u.A9s, {
                size: "custom",
                width: l,
                height: l,
                color: o.A.unsafe_rawColors.WHITE.css,
            }),
    });
}
