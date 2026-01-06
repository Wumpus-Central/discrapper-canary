l.d(n, { default: () => D }), l(539854), l(388685), l(472816), l(794429);
var t = l(54381),
    i = l(473749),
    a = l(658722),
    r = l.n(a),
    o = l(793030),
    s = l(399606),
    u = l(668339),
    c = l(481060),
    d = l(596454),
    m = l(110924),
    h = l(471445),
    v = l(907040),
    p = l(734893),
    g = l(813197),
    j = l(592125),
    x = l(984933),
    b = l(430824),
    f = l(768581),
    y = l(823379),
    C = l(700785),
    N = l(8426),
    S = l(969632),
    T = l(580357),
    O = l(981631),
    I = l(185923),
    P = l(388032),
    k = l(609442);
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
function w(e, n) {
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
function Z(e, n) {
    switch (e) {
        case p.NewMemberActionTypes.VIEW:
            return C.Uu(O.Plq.VIEW_CHANNEL, n);
        case p.NewMemberActionTypes.CHAT:
            if (O.TPd.GUILD_THREADS_ONLY.has(n.type))
                return C.Uu(O.Plq.SEND_MESSAGES_IN_THREADS, n) || C.Uu(O.Plq.SEND_MESSAGES, n);
            return C.Uu(O.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function M() {
    return {
        channelId: [],
        title: [],
        description: [],
        actionType: [],
        emoji: [],
        icon: [],
    };
}
function A(e) {
    let n = M(),
        l = j.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < p.Wz) &&
            n.title.push(P.intl.formatToPlainString(P.t.iu6AGk, { minLength: p.Wz })),
        null == e.actionType ||
            null == l ||
            Z(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case p.NewMemberActionTypes.VIEW:
                            return P.intl.string(P.t.lD7FOX);
                        case p.NewMemberActionTypes.CHAT:
                            return P.intl.string(P.t.fIF2Uy);
                        default:
                            (0, y.vE)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function D(e) {
    var n, l, a, y, C, D;
    let { transitionState: _, onClose: R, guildId: H, action: L, onSave: G, onDelete: U } = e,
        F = i.useRef(null),
        z = i.useRef(null),
        [W] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = j.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name,
                      };
            })(L),
        ),
        [V, Y] = i.useState(W),
        q = (0, s.e7)([j.Z], () => j.Z.getChannel(null == V ? void 0 : V.value)),
        X = (null == q ? void 0 : q.isMediaChannel()) === !0,
        B = i.useMemo(
            () => [
                {
                    value: p.NewMemberActionTypes.VIEW,
                    name: P.intl.string(P.t.jfieRw),
                },
                {
                    value: p.NewMemberActionTypes.CHAT,
                    name:
                        (null == q ? void 0 : q.type) === O.d4z.GUILD_FORUM
                            ? X
                                ? P.intl.string(P.t["1EgDpA"])
                                : P.intl.string(P.t.x5Di7M)
                            : P.intl.string(P.t["R+dC4C"]),
                },
            ],
            [null == q ? void 0 : q.type, X],
        ),
        [K, Q] = i.useState(M()),
        [J, $] = i.useState(null != (n = null == L ? void 0 : L.title) ? n : ""),
        ee = (0, s.e7)([S.Z], () => {
            let e = S.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != W && n.delete(W.value), n;
        }),
        [en, el] = i.useState(
            null == L
                ? null
                : null != (D = null == (C = B.find((e) => e.value === L.actionType)) ? void 0 : C.value)
                  ? D
                  : null,
        ),
        [et, ei] = i.useState(null != (l = null == L ? void 0 : L.emoji) ? l : null),
        ea = (0, s.e7)([S.Z], () => {
            var e;
            return null == (e = S.Z.getNewMemberAction(null == L ? void 0 : L.channelId)) ? void 0 : e.icon;
        }),
        er = null == L ? void 0 : L.channelId,
        eo = (0, s.e7)([S.Z], () => S.Z.getPendingDataForChannel(er), [er]),
        [es, eu] = i.useState(
            null != eo && null != eo.iconData
                ? eo.iconData
                : null != ea && null != V
                  ? f.ZP.getNewMemberActionIconURL({
                        channelId: V.value,
                        icon: ea,
                    })
                  : null,
        ),
        ec = (0, m.Z)(et),
        ed = (0, m.Z)(es),
        em = null == J || 0 === J.length || null == en || null == V,
        eh = Object.values(K).flat().length > 0,
        ev = i.useCallback(() => {
            if (null == V || null == en || J.length <= 0) return;
            let e = {
                    channelId: V.value,
                    title: J,
                    description: "",
                    actionType: en,
                    emoji: null != et ? et : null,
                    icon: null != ea ? ea : null,
                },
                n = void 0 !== er && V.value !== er,
                l = void 0 !== eo,
                t = null != et || void 0 !== es,
                i = {
                    icon: null != es ? es : null,
                    emoji: et,
                };
            (n || (l && t)) && (l && (0, N.Lo)(er), (0, N.Wp)(V.value, i));
            let a = es !== ed;
            G(e, i, (et !== ec || a) && !n), R();
        }, [G, R, J, en, V, et, ea, es, ec, ed, er, eo]),
        ep = i.useCallback(() => {
            null == U || U(), R();
        }, [U, R]),
        eg = i.useCallback(
            (e) => {
                $(e),
                    Q(
                        A({
                            channelId: null == V ? void 0 : V.value,
                            title: e,
                            description: "",
                            actionType: null != en ? en : void 0,
                            emoji: null != et ? et : void 0,
                        }),
                    );
            },
            [$, Q, V, en, et],
        ),
        ej = i.useCallback(
            (e) => {
                Y(e),
                    Q(
                        A({
                            channelId: null == e ? void 0 : e.value,
                            title: J,
                            description: "",
                            actionType: null != en ? en : void 0,
                            emoji: null != et ? et : void 0,
                        }),
                    );
            },
            [Y, Q, J, en, et],
        ),
        ex = i.useCallback(
            (e) => {
                el(e),
                    Q(
                        A({
                            channelId: null == V ? void 0 : V.value,
                            title: J,
                            description: "",
                            actionType: e,
                            emoji: null != et ? et : void 0,
                        }),
                    );
            },
            [el, Q, V, J, et],
        ),
        eb = i.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(H)
                        .filter((n) => !ee.has(n.channel.id) && (0, p.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [H, ee],
        ),
        ef = i.useCallback(
            (e) => {
                if (null == e || null == H) return null;
                let n = j.Z.getChannel(e.value),
                    l = b.Z.getGuild(H);
                if (null == n || null == l) return null;
                let i = (0, h.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: "xs",
                          color: "customColor",
                          className: k.channelIcon,
                      });
            },
            [H],
        ),
        ey = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            ei(n), eu(e);
        }, []),
        eC = i.useCallback(() => (null != es ? es : null), [es, et])(),
        eN = i.useCallback(
            (e) => {
                null != e && ey(e, null);
            },
            [ey],
        ),
        eS = null;
    eS =
        null != eC
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("img", {
                          src: eC,
                          alt: "",
                          "aria-hidden": !0,
                          className: k.__invalid_image,
                          width: 24,
                          height: 24,
                      }),
                      (0, t.jsx)("div", {
                          className: k.imageOverlay,
                          children: (0, t.jsx)(c.vdY, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                  ],
              })
            : null != et
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(d.Z, {
                            animated: null != (a = et.animated) && a,
                            emojiId: et.id,
                            emojiName: et.name,
                        }),
                        (0, t.jsx)("div", {
                            className: k.imageOverlay,
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
    let eT = i.useMemo(
        () => [
            {
                text: P.intl.string(P.t["ETE/oC"]),
                onClick: R,
                variant: "secondary",
            },
            {
                text: P.intl.string(P.t["R3BPH+"]),
                variant: "primary",
                onClick: ev,
                disabled: em || eh,
            },
        ],
        [ev, eh, em, R],
    );
    return (0, t.jsxs)(o.Modal, {
        title: P.intl.string(P.t.ncTLSo),
        transitionState: _,
        onClose: R,
        actions: eT,
        actionBarInput:
            null != L
                ? (0, t.jsx)(c.Avr, {
                      text: P.intl.string(P.t.N86XcP),
                      onClick: ep,
                      variant: "critical",
                  })
                : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: k.formGroup,
                children: [
                    (0, t.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [P.intl.string(P.t["j+fhOY"]), (0, t.jsx)(T.Z, {})],
                    }),
                    (0, t.jsx)(c.oil, {
                        value: J,
                        error: (null != (y = null == J ? void 0 : J.length) ? y : 0) > 0 ? K.title.join(", ") : null,
                        onChange: eg,
                        placeholder: P.intl.string(P.t.oN1Sm2),
                        maxLength: p.Z3,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: k.separator }),
            (0, t.jsxs)("div", {
                className: k.formGroup,
                children: [
                    (0, t.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [P.intl.string(P.t.jVDc5W), (0, t.jsx)(T.Z, {})],
                    }),
                    (0, t.jsx)(u.d, {
                        value: V,
                        renderOptionPrefix: ef,
                        options: eb,
                        onChange: ej,
                    }),
                    (0, t.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: P.intl.string(P.t.cypQPz),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: k.separator }),
            (0, t.jsxs)("div", {
                className: k.splitGroup,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
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
                        className: k.iconUploadContainer,
                        children: (0, t.jsx)(c.yRy, {
                            position: "bottom",
                            renderPopout: (e) => {
                                let n = e.closePopout,
                                    l = (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(g.ZP, {
                                                onChange: (e) => {
                                                    eN(e), n();
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
                                        targetElementRef: F,
                                        position: "top",
                                        renderPopout: (e) => {
                                            let l,
                                                { closePopout: i } = e;
                                            return (0, t.jsx)(v.Z, {
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
                                                            ey(
                                                                null,
                                                                null == i.id
                                                                    ? {
                                                                          id: null,
                                                                          name:
                                                                              null != (n = i.optionallyDiverseSequence)
                                                                                  ? n
                                                                                  : "",
                                                                          animated: !1,
                                                                      }
                                                                    : {
                                                                          id: i.id,
                                                                          name:
                                                                              null != (t = i.originalName) ? t : i.name,
                                                                          animated: i.animated,
                                                                      },
                                                            ),
                                                                a && l();
                                                    }),
                                                pickerIntention: I.Hz.COMMUNITY_CONTENT,
                                                channel: q,
                                            });
                                        },
                                        children: (e) =>
                                            (0, t.jsx)(
                                                c.Text,
                                                w(E({}, e), {
                                                    variant: "text-sm/medium",
                                                    color: "none",
                                                    ref: F,
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
                                            className: k.uploadMenuItem,
                                            id: "upload",
                                            label: l,
                                            icon: c.rG2,
                                        }),
                                        null != eC || null != et
                                            ? (0, t.jsx)(c.sNh, {
                                                  id: "clear",
                                                  color: "danger",
                                                  label: P.intl.string(P.t.ZCLmoR),
                                                  icon: c.XHJ,
                                                  action: () => {
                                                      ey(null);
                                                  },
                                              })
                                            : null,
                                    ],
                                });
                            },
                            targetElementRef: z,
                            children: (e) =>
                                (0, t.jsx)(
                                    "div",
                                    w(E({}, e), {
                                        className: k.iconUpload,
                                        ref: z,
                                        children: eS,
                                    }),
                                ),
                        }),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: k.separator }),
            (0, t.jsxs)("div", {
                className: k.formGroup,
                children: [
                    (0, t.jsxs)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [P.intl.string(P.t.MIMVLa), (0, t.jsx)(T.Z, {})],
                    }),
                    (0, t.jsx)(c.FXm, {
                        value: en,
                        onChange: ex,
                        options: null == q ? B : B.map((e) => w(E({}, e), { disabled: !Z(e.value, q) })),
                    }),
                    null != en && K.actionType.length > 0
                        ? K.actionType.map((e) =>
                              (0, t.jsx)(
                                  c.Text,
                                  {
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      children: e,
                                  },
                                  e,
                              ),
                          )
                        : null,
                ],
            }),
        ],
    });
}
