n.d(t, {
    j: () => C,
}),
    n(896048),
    n(801541);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(126031),
    o = n(92674),
    c = n(889137),
    u = n(615300),
    d = n(990078),
    p = n(397927),
    m = n(915089),
    f = n(956703),
    g = n(180662),
    _ = n(969632),
    h = n(438437),
    b = n(306417),
    y = n(290794),
    A = n(985018),
    v = n(121272);

function O(e) {
    let { percentage: t, label: n, canShowVoterDetails: l, answerId: a } = e,
        o = (0, m.GV)(),
        { channelId: c, messageId: u } = (0, y.Tu)(),
        [h, b] = i.useState(""),
        [A, O] = i.useState(!1),
        x = "" !== h && A,
        E = i.useCallback(() => {
            b((0, _.$m)(u, c, a));
        }, [u, c, a]),
        j = i.useCallback(() => {
            E(), O(!0);
        }, [E]),
        C = i.useCallback(() => {
            O(!1);
        }, []),
        I = i.useCallback(() => {
            (0, g.e)({
                channelId: c,
                messageId: u,
                answerId: a,
            });
        }, [c, u, a]);
    return (
        i.useEffect(() => {
            if (A)
                return (
                    f.A.addReactChangeListener(E),
                    () => {
                        f.A.removeReactChangeListener(E);
                    }
                );
        }, [A, E]),
        (0, r.jsxs)("div", {
            className: v.AA,
            children: [
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              "" !== h
                                  ? (0, r.jsx)(d.m, {
                                        __unsupportedReactNodeAsText: (0, r.jsx)(p.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: h,
                                        }),
                                        forceOpen: x,
                                        "aria-label": !1,
                                        children: (0, r.jsx)(p.QWc, {
                                            onMouseEnter: j,
                                            onMouseLeave: C,
                                            onFocus: j,
                                            onBlur: C,
                                            onClick: I,
                                            "aria-describedby": x ? o : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, r.jsx)(p.QWc, {
                                        onMouseEnter: j,
                                        onMouseLeave: C,
                                        onFocus: j,
                                        onBlur: C,
                                        onClick: I,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              x &&
                                  (0, r.jsx)(s.s, {
                                      id: o,
                                      children: h,
                                  }),
                          ],
                      })
                    : (0, r.jsx)(p.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, r.jsxs)(p.Text, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}

function x(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, p.zhh)(
            {
                from: {
                    width: n ? "0%" : "".concat(t, "%"),
                },
                to: {
                    width: "".concat(t, "%"),
                },
                config: {
                    duration: 1200,
                    easing: u.A.Easing.inOut(u.A.Easing.ease),
                },
            },
            "animate-always",
        );
    return (0, r.jsx)(o.animated.span, {
        className: v.an,
        style: i,
        "aria-hidden": !0,
    });
}

function E(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: l, isExpired: a, className: s } = e;
    return (0, c.YW)({
        answersInteraction: t,
        didSelfVote: i,
    })
        .with(
            {
                answersInteraction: h.CQ.RADIO_BUTTONS,
            },
            () =>
                (0, r.jsx)(b.k$, {
                    isSelected: n,
                    size: 24,
                    className: s,
                }),
        )
        .with(
            {
                answersInteraction: h.CQ.CHECKBOXES,
            },
            () =>
                (0, r.jsx)(b.e5, {
                    isSelected: n,
                    size: 20,
                    className: s,
                }),
        )
        .with(
            {
                answersInteraction: h.CQ.LIST,
                didSelfVote: !0,
            },
            () =>
                (0, r.jsx)(b.Vx, {
                    isVictor: l,
                    isExpired: a,
                    size: 24,
                    className: s,
                }),
        )
        .otherwise(() => null);
}

function j(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: l, canShowVoterDetails: o } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, r.jsxs)("div", {
        className: a()(v.Fk, {
            [v.EK]: i !== h.CQ.LIST,
            [v.wH]: c,
        }),
        children: [
            l
                ? (0, r.jsx)(x, {
                      percentage: t.votesPercentage,
                      shouldAnimate: m,
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(b.Fb, {
                    className: v.Zg,
                    emoji: t.pollMedia.emoji,
                }),
            (0, r.jsx)(p.Text, {
                className: v.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote &&
                (0, r.jsx)(s.s, {
                    children: A.intl.string(A.t["8DAM+5"]),
                }),
            l &&
                (0, r.jsx)(O, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: o,
                    answerId: t.answerId,
                }),
            (0, r.jsx)(E, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: u,
                isVictor: d,
                isExpired: n,
                className: v.ck,
            }),
        ],
    });
}

function C(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: l } = e,
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
        })(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
    return (0, r.jsx)(
        b.Fh,
        (function (e) {
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
        })(
            {
                className: v.ry,
                answerClassName: v.ZF,
                answersInteraction: n,
                canTapAnswers: l,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(j, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: l,
                    }),
            },
            a,
        ),
    );
}
