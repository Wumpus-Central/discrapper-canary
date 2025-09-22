l.d(n, { default: () => D }), l(539854), l(388685), l(472816), l(794429);
var t = l(951288),
    i = l(647438),
    a = l(658722),
    r = l.n(a),
    o = l(399606),
    s = l(257465),
    u = l(369585),
    c = l(159691),
    d = l(755721),
    m = l(481060),
    p = l(596454),
    h = l(110924),
    v = l(471445),
    g = l(907040),
    j = l(734893),
    x = l(813197),
    f = l(592125),
    b = l(984933),
    y = l(430824),
    C = l(768581),
    I = l(823379),
    N = l(700785),
    O = l(969632),
    S = l(580357),
    T = l(981631),
    _ = l(185923),
    k = l(388032),
    E = l(353441);
function P(e) {
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
function Z(e, n) {
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
        case j.oi.VIEW:
            return N.Uu(T.Plq.VIEW_CHANNEL, n);
        case j.oi.CHAT:
            if (T.TPd.GUILD_THREADS_ONLY.has(n.type))
                return N.Uu(T.Plq.SEND_MESSAGES_IN_THREADS, n) || N.Uu(T.Plq.SEND_MESSAGES, n);
            return N.Uu(T.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function G() {
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
    let n = G(),
        l = f.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < j.Wz) &&
            n.title.push(k.intl.formatToPlainString(k.t.iu6AGh, { minLength: j.Wz })),
        null == e.actionType ||
            null == l ||
            w(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case j.oi.VIEW:
                            return k.intl.string(k.t.lD7FOT);
                        case j.oi.CHAT:
                            return k.intl.string(k.t.fIF2U1);
                        default:
                            (0, I.vE)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function D(e) {
    var n, l, a, I, N;
    let { transitionState: D, onClose: U, guildId: A, action: R, onSave: H, onDelete: z } = e,
        L = i.useRef(null),
        q = i.useRef(null),
        [F] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = f.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name,
                      };
            })(R),
        ),
        [W, X] = i.useState(F),
        V = (0, o.e7)([f.Z], () => f.Z.getChannel(null == W ? void 0 : W.value)),
        Y = (null == V ? void 0 : V.isMediaChannel()) === !0,
        B = i.useMemo(
            () => [
                {
                    value: j.oi.VIEW,
                    name: k.intl.string(k.t.jfieR0),
                },
                {
                    value: j.oi.CHAT,
                    name:
                        (null == V ? void 0 : V.type) === T.d4z.GUILD_FORUM
                            ? Y
                                ? k.intl.string(k.t["1EgDpK"])
                                : k.intl.string(k.t.x5Di7O)
                            : k.intl.string(k.t["R+dC4O"]),
                },
            ],
            [null == V ? void 0 : V.type, Y],
        ),
        [K, Q] = i.useState(G()),
        [J, $] = i.useState(null != (n = null == R ? void 0 : R.title) ? n : ""),
        ee = (0, o.e7)([O.Z], () => {
            let e = O.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != F && n.delete(F.value), n;
        }),
        [en, el] = i.useState(null == R ? null : null != (N = B.find((e) => e.value === R.actionType)) ? N : null),
        [et, ei] = i.useState(null != (l = null == R ? void 0 : R.emoji) ? l : null),
        ea = (0, o.e7)([O.Z], () => {
            var e;
            return null == (e = O.Z.getNewMemberAction(null == R ? void 0 : R.channelId)) ? void 0 : e.icon;
        }),
        [er, eo] = i.useState(
            null != ea && null != W
                ? C.ZP.getNewMemberActionIconURL({
                      channelId: W.value,
                      icon: ea,
                  })
                : null,
        ),
        es = (0, h.Z)(er),
        eu = (0, h.Z)(et),
        ec = null == J || 0 === J.length || null == en || null == W,
        ed = Object.values(K).flat().length > 0,
        em = i.useCallback(() => {
            if (null == W || null == en || J.length <= 0) return;
            let e = {
                    channelId: W.value,
                    title: J,
                    description: "",
                    actionType: en.value,
                    emoji: null != et ? et : null,
                    icon: null != ea ? ea : null,
                },
                n = er !== es || et !== eu;
            H(e, null != er ? er : null, n), U();
        }, [H, U, J, en, W, et, ea, er, es, eu]),
        ep = i.useCallback(() => {
            null == z || z(), U();
        }, [z, U]),
        eh = i.useCallback(
            (e) => {
                $(e),
                    Q(
                        M({
                            channelId: null == W ? void 0 : W.value,
                            title: e,
                            description: "",
                            actionType: null == en ? void 0 : en.value,
                            emoji: null != et ? et : void 0,
                        }),
                    );
            },
            [$, Q, W, en, et],
        ),
        ev = i.useCallback(
            (e) => {
                X(e),
                    Q(
                        M({
                            channelId: null == e ? void 0 : e.value,
                            title: J,
                            description: "",
                            actionType: null == en ? void 0 : en.value,
                            emoji: null != et ? et : void 0,
                        }),
                    );
            },
            [X, Q, J, en, et],
        ),
        eg = i.useCallback(
            (e) => {
                el(e),
                    Q(
                        M({
                            channelId: null == W ? void 0 : W.value,
                            title: J,
                            description: "",
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != et ? et : void 0,
                        }),
                    );
            },
            [el, Q, W, J, et],
        ),
        ej = i.useCallback(
            (e) =>
                Promise.resolve(
                    b.ZP.getSelectableChannels(A)
                        .filter((n) => !ee.has(n.channel.id) && (0, j.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name,
                        })),
                ),
            [A, ee],
        ),
        ex = i.useCallback(
            (e) => {
                if (null == e || null == A) return null;
                let n = f.Z.getChannel(e.value),
                    l = y.Z.getGuild(A);
                if (null == n || null == l) return null;
                let i = (0, v.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: "xs",
                          color: "customColor",
                          className: E.channelIcon,
                      });
            },
            [A],
        ),
        ef = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            ei(n), eo(e);
        }, []),
        eb = i.useCallback(() => (null != er ? er : null), [er, et])(),
        ey = i.useCallback(
            (e) => {
                null != e && ef(e, null);
            },
            [ef],
        ),
        eC = null;
    eC =
        null != eb
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("img", {
                          src: eb,
                          alt: "",
                          "aria-hidden": !0,
                          className: E.__invalid_image,
                          width: 24,
                          height: 24,
                      }),
                      (0, t.jsx)("div", {
                          className: E.imageOverlay,
                          children: (0, t.jsx)(m.vdY, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                  ],
              })
            : null != et
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(p.Z, {
                            animated: null != (a = et.animated) && a,
                            emojiId: et.id,
                            emojiName: et.name,
                        }),
                        (0, t.jsx)("div", {
                            className: E.imageOverlay,
                            children: (0, t.jsx)(m.vdY, {
                                size: "md",
                                color: "currentColor",
                            }),
                        }),
                    ],
                })
              : (0, t.jsx)(m.FmF, {
                    size: "md",
                    color: "currentColor",
                });
    let eI = i.useMemo(
        () => [
            {
                text: k.intl.string(k.t["ETE/oK"]),
                onClick: U,
                variant: "secondary",
            },
            {
                text: k.intl.string(k.t.R3BPHx),
                variant: "primary",
                onClick: em,
                disabled: ec || ed,
            },
        ],
        [em, ed, ec, U],
    );
    return (0, t.jsxs)(s.IX, {
        transitionState: D,
        onClose: U,
        children: [
            (0, t.jsx)("div", {
                className: E.closeButton,
                children: (0, t.jsx)(c.PZ7, { onClick: U }),
            }),
            (0, t.jsxs)("div", {
                className: E.container,
                children: [
                    (0, t.jsxs)("div", {
                        className: E.formGroup,
                        children: [
                            (0, t.jsxs)(m.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t["j+fhOT"]), (0, t.jsx)(S.Z, {})],
                            }),
                            (0, t.jsx)(m.oil, {
                                value: J,
                                error:
                                    (null != (I = null == J ? void 0 : J.length) ? I : 0) > 0
                                        ? K.title.join(", ")
                                        : null,
                                onChange: eh,
                                placeholder: k.intl.string(k.t.oN1Sm5),
                                maxLength: j.Z3,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: E.separator }),
                    (0, t.jsxs)("div", {
                        className: E.formGroup,
                        children: [
                            (0, t.jsxs)(m.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t.jVDc5e), (0, t.jsx)(S.Z, {})],
                            }),
                            (0, t.jsx)(m.VcW, {
                                value: W,
                                renderOptionPrefix: ex,
                                options: ej,
                                onChange: ev,
                            }),
                            (0, t.jsx)(m.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: k.intl.string(k.t.cypQPz),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: E.separator }),
                    (0, t.jsxs)("div", {
                        className: E.splitGroup,
                        children: [
                            (0, t.jsxs)("div", {
                                children: [
                                    (0, t.jsx)(m.X6q, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: k.intl.string(k.t.gs5rQk),
                                    }),
                                    (0, t.jsx)(m.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: k.intl.string(k.t.LjsoiY),
                                    }),
                                ],
                            }),
                            (0, t.jsx)("div", {
                                className: E.iconUploadContainer,
                                children: (0, t.jsx)(m.yRy, {
                                    position: "bottom",
                                    renderPopout: (e) => {
                                        let n = e.closePopout,
                                            l = (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(x.ZP, {
                                                        onChange: (e) => {
                                                            ey(e), n();
                                                        },
                                                        tabIndex: 0,
                                                    }),
                                                    (0, t.jsx)(m.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "none",
                                                        children: k.intl.string(k.t["2YKkdX"]),
                                                    }),
                                                ],
                                            }),
                                            i = (0, t.jsx)(m.yRy, {
                                                targetElementRef: L,
                                                position: "top",
                                                renderPopout: (e) => {
                                                    let l,
                                                        { closePopout: i } = e;
                                                    return (0, t.jsx)(g.Z, {
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
                                                                    ef(
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
                                                        pickerIntention: _.Hz.COMMUNITY_CONTENT,
                                                        channel: V,
                                                    });
                                                },
                                                children: (e) =>
                                                    (0, t.jsx)(
                                                        m.Text,
                                                        Z(P({}, e), {
                                                            variant: "text-sm/medium",
                                                            color: "none",
                                                            ref: L,
                                                            children: k.intl.string(k.t.amsyNz),
                                                        }),
                                                    ),
                                            });
                                        return (0, t.jsxs)(m.v2r, {
                                            navId: "set-image-for-action",
                                            "aria-label": "upload",
                                            onClose: () => !1,
                                            onSelect: () => !1,
                                            children: [
                                                (0, t.jsx)(m.sNh, {
                                                    id: "emoji",
                                                    label: i,
                                                    icon: m.EO4,
                                                }),
                                                (0, t.jsx)(m.sNh, {
                                                    className: E.uploadMenuItem,
                                                    id: "upload",
                                                    label: l,
                                                    icon: m.rG2,
                                                }),
                                                null != eb || null != et
                                                    ? (0, t.jsx)(m.sNh, {
                                                          id: "clear",
                                                          color: "danger",
                                                          label: k.intl.string(k.t.ZCLmoa),
                                                          icon: m.XHJ,
                                                          action: () => {
                                                              ef(null);
                                                          },
                                                      })
                                                    : null,
                                            ],
                                        });
                                    },
                                    targetElementRef: q,
                                    children: (e) =>
                                        (0, t.jsx)(
                                            "div",
                                            Z(P({}, e), {
                                                className: E.iconUpload,
                                                ref: q,
                                                children: eC,
                                            }),
                                        ),
                                }),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: E.separator }),
                    (0, t.jsxs)("div", {
                        className: E.formGroup,
                        children: [
                            (0, t.jsxs)(m.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [k.intl.string(k.t.MIMVLS), (0, t.jsx)(S.Z, {})],
                            }),
                            (0, t.jsx)(d.Gu, {
                                withTransparentBackground: !0,
                                size: d.l7.NONE,
                                value: null == en ? void 0 : en.value,
                                onChange: eg,
                                options: null == V ? B : B.map((e) => Z(P({}, e), { disabled: !w(e.value, V) })),
                            }),
                            null != en && K.actionType.length > 0
                                ? K.actionType.map((e) =>
                                      (0, t.jsx)(
                                          m.Text,
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
            (0, t.jsx)(u.G, {
                actions: eI,
                leading:
                    null != R
                        ? (0, t.jsx)(m.Avr, {
                              text: k.intl.string(k.t.N86XcH),
                              onClick: ep,
                              variant: "critical",
                          })
                        : void 0,
            }),
        ],
    });
}
