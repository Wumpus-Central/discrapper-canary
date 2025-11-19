l.d(n, { default: () => A }), l(539854), l(388685), l(472816), l(794429);
var t = l(54381),
    i = l(473749),
    a = l(658722),
    r = l.n(a),
    o = l(793030),
    s = l(399606),
    u = l(159691),
    c = l(481060),
    d = l(596454),
    m = l(110924),
    h = l(471445),
    p = l(907040),
    v = l(734893),
    j = l(813197),
    g = l(592125),
    x = l(984933),
    b = l(430824),
    y = l(768581),
    f = l(823379),
    C = l(700785),
    N = l(969632),
    S = l(580357),
    T = l(981631),
    O = l(185923),
    P = l(388032),
    I = l(319407);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            t.forEach(function (n) {
                var t;
                (t = l[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = t);
            });
    }
    return e;
}
function k(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, t);
                  }
                  return l;
              })(Object(n)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
              }),
        e
    );
}
function w(e, n) {
    switch (e) {
        case v.NewMemberActionTypes.VIEW:
            return C.Uu(T.Plq.VIEW_CHANNEL, n);
        case v.NewMemberActionTypes.CHAT:
            if (T.TPd.GUILD_THREADS_ONLY.has(n.type))
                return C.Uu(T.Plq.SEND_MESSAGES_IN_THREADS, n) || C.Uu(T.Plq.SEND_MESSAGES, n);
            return C.Uu(T.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function Z() {
    return {
        channelId: [],
        title: [],
        description: [],
        actionType: [],
        emoji: [],
        icon: [],
    };
}
function M(e) {
    let n = Z(),
        l = g.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < v.Wz) &&
            n.title.push(P.intl.formatToPlainString(P.t.iu6AGk, { minLength: v.Wz })),
        null == e.actionType ||
            null == l ||
            w(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case v.NewMemberActionTypes.VIEW:
                            return P.intl.string(P.t.lD7FOX);
                        case v.NewMemberActionTypes.CHAT:
                            return P.intl.string(P.t.fIF2Uy);
                        default:
                            (0, f.vE)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function A(e) {
    var n, l, a, f, C, A;
    let { transitionState: D, onClose: _, guildId: R, action: G, onSave: H, onDelete: U } = e,
        L = i.useRef(null),
        F = i.useRef(null),
        [z] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = g.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name,
                      };
            })(G),
        ),
        [W, V] = i.useState(z),
        Y = (0, s.e7)([g.Z], () => g.Z.getChannel(null == W ? void 0 : W.value)),
        q = (null == Y ? void 0 : Y.isMediaChannel()) === !0,
        X = i.useMemo(
            () => [
                {
                    value: v.NewMemberActionTypes.VIEW,
                    name: P.intl.string(P.t.jfieRw),
                },
                {
                    value: v.NewMemberActionTypes.CHAT,
                    name:
                        (null == Y ? void 0 : Y.type) === T.d4z.GUILD_FORUM
                            ? q
                                ? P.intl.string(P.t["1EgDpA"])
                                : P.intl.string(P.t.x5Di7M)
                            : P.intl.string(P.t["R+dC4C"]),
                },
            ],
            [null == Y ? void 0 : Y.type, q],
        ),
        [B, K] = i.useState(Z()),
        [Q, J] = i.useState(null != (n = null == G ? void 0 : G.title) ? n : ""),
        $ = (0, s.e7)([N.Z], () => {
            let e = N.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != z && n.delete(z.value), n;
        }),
        [ee, en] = i.useState(
            null == G
                ? null
                : null != (A = null == (C = X.find((e) => e.value === G.actionType)) ? void 0 : C.value)
                  ? A
                  : null,
        ),
        [el, et] = i.useState(null != (l = null == G ? void 0 : G.emoji) ? l : null),
        ei = (0, s.e7)([N.Z], () => {
            var e;
            return null == (e = N.Z.getNewMemberAction(null == G ? void 0 : G.channelId)) ? void 0 : e.icon;
        }),
        [ea, er] = i.useState(
            null != ei && null != W
                ? y.ZP.getNewMemberActionIconURL({
                      channelId: W.value,
                      icon: ei,
                  })
                : null,
        ),
        eo = (0, m.Z)(ea),
        es = (0, m.Z)(el),
        eu = null == Q || 0 === Q.length || null == ee || null == W,
        ec = Object.values(B).flat().length > 0,
        ed = i.useCallback(() => {
            if (null == W || null == ee || Q.length <= 0) return;
            let e = {
                    channelId: W.value,
                    title: Q,
                    description: "",
                    actionType: ee,
                    emoji: null != el ? el : null,
                    icon: null != ei ? ei : null,
                },
                n = ea !== eo || el !== es;
            H(e, null != ea ? ea : null, n), _();
        }, [H, _, Q, ee, W, el, ei, ea, eo, es]),
        em = i.useCallback(() => {
            null == U || U(), _();
        }, [U, _]),
        eh = i.useCallback(
            (e) => {
                J(e),
                    K(
                        M({
                            channelId: null == W ? void 0 : W.value,
                            title: e,
                            description: "",
                            actionType: null != ee ? ee : void 0,
                            emoji: null != el ? el : void 0,
                        }),
                    );
            },
            [J, K, W, ee, el],
        ),
        ep = i.useCallback(
            (e) => {
                V(e),
                    K(
                        M({
                            channelId: null == e ? void 0 : e.value,
                            title: Q,
                            description: "",
                            actionType: null != ee ? ee : void 0,
                            emoji: null != el ? el : void 0,
                        }),
                    );
            },
            [V, K, Q, ee, el],
        ),
        ev = i.useCallback(
            (e) => {
                en(e),
                    K(
                        M({
                            channelId: null == W ? void 0 : W.value,
                            title: Q,
                            description: "",
                            actionType: e,
                            emoji: null != el ? el : void 0,
                        }),
                    );
            },
            [en, K, W, Q, el],
        ),
        ej = i.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(R)
                        .filter((n) => !$.has(n.channel.id) && (0, v.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [R, $],
        ),
        eg = i.useCallback(
            (e) => {
                if (null == e || null == R) return null;
                let n = g.Z.getChannel(e.value),
                    l = b.Z.getGuild(R);
                if (null == n || null == l) return null;
                let i = (0, h.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: "xs",
                          color: "customColor",
                          className: I.channelIcon,
                      });
            },
            [R],
        ),
        ex = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            et(n), er(e);
        }, []),
        eb = i.useCallback(() => (null != ea ? ea : null), [ea, el])(),
        ey = i.useCallback(
            (e) => {
                null != e && ex(e, null);
            },
            [ex],
        ),
        ef = null;
    ef =
        null != eb
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("img", {
                          src: eb,
                          alt: "",
                          "aria-hidden": !0,
                          className: I.__invalid_image,
                          width: 24,
                          height: 24,
                      }),
                      (0, t.jsx)("div", {
                          className: I.imageOverlay,
                          children: (0, t.jsx)(c.vdY, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                  ],
              })
            : null != el
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(d.Z, {
                            animated: null != (a = el.animated) && a,
                            emojiId: el.id,
                            emojiName: el.name,
                        }),
                        (0, t.jsx)("div", {
                            className: I.imageOverlay,
                            children: (0, t.jsx)(c.vdY, {
                                size: "md",
                                color: "currentColor",
                            }),
                        }),
                    ],
                })
              : (0, t.jsx)(c.FmF, {
                    size: "md",
                    color: "currentColor",
                });
    let eC = i.useMemo(
        () => [
            {
                text: P.intl.string(P.t["ETE/oC"]),
                onClick: _,
                variant: "secondary",
            },
            {
                text: P.intl.string(P.t["R3BPH+"]),
                variant: "primary",
                onClick: ed,
                disabled: eu || ec,
            },
        ],
        [ed, ec, eu, _],
    );
    return (0, t.jsxs)(o.IX, {
        transitionState: D,
        onClose: _,
        children: [
            (0, t.jsx)("div", {
                className: I.closeButton,
                children: (0, t.jsx)(u.PZ7, { onClick: _ }),
            }),
            (0, t.jsxs)("div", {
                className: I.container,
                children: [
                    (0, t.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, t.jsxs)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [P.intl.string(P.t["j+fhOY"]), (0, t.jsx)(S.Z, {})],
                            }),
                            (0, t.jsx)(c.oil, {
                                value: Q,
                                error:
                                    (null != (f = null == Q ? void 0 : Q.length) ? f : 0) > 0
                                        ? B.title.join(", ")
                                        : null,
                                onChange: eh,
                                placeholder: P.intl.string(P.t.oN1Sm2),
                                maxLength: v.Z3,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: I.separator }),
                    (0, t.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, t.jsxs)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [P.intl.string(P.t.jVDc5W), (0, t.jsx)(S.Z, {})],
                            }),
                            (0, t.jsx)(c.VcW, {
                                value: W,
                                renderOptionPrefix: eg,
                                options: ej,
                                onChange: ep,
                            }),
                            (0, t.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: P.intl.string(P.t.cypQPz),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: I.separator }),
                    (0, t.jsxs)("div", {
                        className: I.splitGroup,
                        children: [
                            (0, t.jsxs)("div", {
                                children: [
                                    (0, t.jsx)(c.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: P.intl.string(P.t.gs5rQm),
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: P.intl.string(P.t.LjsoiT),
                                    }),
                                ],
                            }),
                            (0, t.jsx)("div", {
                                className: I.iconUploadContainer,
                                children: (0, t.jsx)(c.yRy, {
                                    position: "bottom",
                                    renderPopout: (e) => {
                                        let n = e.closePopout,
                                            l = (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(j.ZP, {
                                                        onChange: (e) => {
                                                            ey(e), n();
                                                        },
                                                        tabIndex: 0,
                                                    }),
                                                    (0, t.jsx)(c.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "none",
                                                        children: P.intl.string(P.t["2YKkdd"]),
                                                    }),
                                                ],
                                            }),
                                            i = (0, t.jsx)(c.yRy, {
                                                targetElementRef: L,
                                                position: "top",
                                                renderPopout: (e) => {
                                                    let l,
                                                        { closePopout: i } = e;
                                                    return (0, t.jsx)(p.Z, {
                                                        closePopout: () => {
                                                            i(), n();
                                                        },
                                                        onSelectEmoji:
                                                            ((l = () => {
                                                                i(), n();
                                                            }),
                                                            (e) => {
                                                                var n, t;
                                                                let { emoji: i, willClose: a } = e;
                                                                if (null != i)
                                                                    ex(
                                                                        null,
                                                                        null == i.id
                                                                            ? {
                                                                                  id: null,
                                                                                  name:
                                                                                      null !=
                                                                                      (n = i.optionallyDiverseSequence)
                                                                                          ? n
                                                                                          : "",
                                                                                  animated: !1,
                                                                              }
                                                                            : {
                                                                                  id: i.id,
                                                                                  name:
                                                                                      null != (t = i.originalName)
                                                                                          ? t
                                                                                          : i.name,
                                                                                  animated: i.animated,
                                                                              },
                                                                    ),
                                                                        a && l();
                                                            }),
                                                        pickerIntention: O.Hz.COMMUNITY_CONTENT,
                                                        channel: Y,
                                                    });
                                                },
                                                children: (e) =>
                                                    (0, t.jsx)(
                                                        c.Text,
                                                        k(E({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "none",
                                                            ref: L,
                                                            children: P.intl.string(P.t["amsyN+"]),
                                                        }),
                                                    ),
                                            });
                                        return (0, t.jsxs)(c.v2r, {
                                            navId: "set-image-for-action",
                                            "aria-label": "upload",
                                            onClose: () => !1,
                                            onSelect: () => !1,
                                            children: [
                                                (0, t.jsx)(c.sNh, {
                                                    id: "emoji",
                                                    label: i,
                                                    icon: c.EO4,
                                                }),
                                                (0, t.jsx)(c.sNh, {
                                                    className: I.uploadMenuItem,
                                                    id: "upload",
                                                    label: l,
                                                    icon: c.rG2,
                                                }),
                                                null != eb || null != el
                                                    ? (0, t.jsx)(c.sNh, {
                                                          id: "clear",
                                                          color: "danger",
                                                          label: P.intl.string(P.t.ZCLmoR),
                                                          icon: c.XHJ,
                                                          action: () => {
                                                              ex(null);
                                                          },
                                                      })
                                                    : null,
                                            ],
                                        });
                                    },
                                    targetElementRef: F,
                                    children: (e) =>
                                        (0, t.jsx)(
                                            "div",
                                            k(E({}, e), {
                                                className: I.iconUpload,
                                                ref: F,
                                                children: ef,
                                            }),
                                        ),
                                }),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: I.separator }),
                    (0, t.jsxs)("div", {
                        className: I.formGroup,
                        children: [
                            (0, t.jsxs)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [P.intl.string(P.t.MIMVLa), (0, t.jsx)(S.Z, {})],
                            }),
                            (0, t.jsx)(c.FXm, {
                                value: ee,
                                onChange: ev,
                                options: null == Y ? X : X.map((e) => k(E({}, e), { disabled: !w(e.value, Y) })),
                            }),
                            null != ee && B.actionType.length > 0
                                ? B.actionType.map((e) =>
                                      (0, t.jsx)(
                                          c.Text,
                                          {
                                              variant: "text-xs/normal",
                                              color: "text-danger",
                                              children: e,
                                          },
                                          e,
                                      ),
                                  )
                                : null,
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(o.Go$, {
                actions: eC,
                leading:
                    null != G
                        ? (0, t.jsx)(c.Avr, {
                              text: P.intl.string(P.t.N86XcP),
                              onClick: em,
                              variant: "critical",
                          })
                        : void 0,
            }),
        ],
    });
}
