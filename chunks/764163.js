n.d(t, {
    DI: () => E,
    x3: () => N,
}),
    n(388685),
    n(953529),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(82659),
    c = n(481060),
    d = n(596454),
    u = n(313201),
    m = n(318766),
    g = n(907040),
    p = n(339085),
    f = n(633302),
    h = n(984933),
    b = n(691886),
    x = n(185923),
    j = n(388032),
    _ = n(803931);
function v(e) {
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
function O(e, t) {
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
function y(e) {
    let { guildId: t, emojiData: n, onSelectEmoji: l } = e,
        a = i.useRef(null),
        o = (0, s.e7)([p.ZP], () => (null != n.id ? p.ZP.getCustomEmojiById(n.id) : void 0)),
        u = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t)),
        b = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.Z, {
                    pickerIntention: x.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: u,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: r } = e;
                        null != n &&
                            l(
                                null != n.id
                                    ? {
                                          id: n.id,
                                          name: void 0,
                                      }
                                    : {
                                          id: void 0,
                                          name: n.optionallyDiverseSequence,
                                      },
                            ),
                            r && t();
                    },
                });
            },
            [l, u],
        ),
        j = i.useMemo(
            () =>
                null == o && null == n.name
                    ? null
                    : function () {
                          return (0, r.jsx)(d.Z, {
                              className: _.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == o ? void 0 : o.animated,
                          });
                      },
            [n, o],
        ),
        y = "";
    return (
        null != o ? (y = ":".concat(o.name, ":")) : null != n.name && (y = f.ZP.convertSurrogateToName(n.name)),
        (0, r.jsx)(c.yRy, {
            targetElementRef: a,
            animation: c.yRy.Animation.NONE,
            position: "top",
            renderPopout: b,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    "div",
                    O(
                        v(
                            {
                                ref: a,
                                className: _.emojiInputContainer,
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(m.Z, {
                                    className: _.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: j,
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: _.emojiText,
                                    children: y,
                                }),
                            ],
                        },
                    ),
                );
            },
        })
    );
}
function C(e) {
    var t;
    let {
            guildId: n,
            initialData: l,
            benefitTypeInput: a,
            descriptionPlaceholder: s,
            canSubmit: d,
            onSave: m,
            onDelete: g,
            transitionState: p,
            onClose: f,
        } = e,
        h = (0, u.Dt)(),
        [b, x] = i.useState(null != (t = null == l ? void 0 : l.description) ? t : ""),
        [_, v] = i.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name,
        })),
        O = d && "" !== b && (null != _.id || null != _.name);
    function C(e) {
        e.preventDefault(),
            O &&
                (m({
                    description: b,
                    emojiId: _.id,
                    emojiName: _.name,
                }),
                f());
    }
    let N = [
        {
            text: j.intl.string(j.t["ETE/oK"]),
            variant: "secondary",
            onClick: f,
        },
    ];
    return (
        null != g &&
            N.push({
                text: j.intl.string(j.t.oyYWHB),
                variant: "critical-secondary",
                onClick: () => {
                    g(), f();
                },
                icon: c.XHJ,
            }),
        N.push({
            text: null == l ? j.intl.string(j.t.OYkgVl) : j.intl.string(j.t.R3BPHx),
            variant: "primary",
            onClick: C,
            disabled: !O,
        }),
        (0, r.jsx)("form", {
            onSubmit: C,
            children: (0, r.jsx)(o.Modal, {
                transitionState: p,
                onClose: f,
                title: j.intl.string(j.t["2qf9EB"]),
                actions: N,
                children: (0, r.jsxs)(c.Kqy, {
                    gap: "md",
                    children: [
                        a,
                        (0, r.jsx)(c.hjN, {
                            title: j.intl.string(j.t["1Ts7QE"]),
                            titleId: h,
                            children: (0, r.jsx)(c.Kx8, {
                                placeholder: s,
                                value: b,
                                rows: 1,
                                autosize: !0,
                                onChange: x,
                                "aria-labelledby": h,
                            }),
                        }),
                        (0, r.jsx)(c.hjN, {
                            title: j.intl.string(j.t.sMOuub),
                            children: (0, r.jsx)(y, {
                                guildId: n,
                                emojiData: _,
                                onSelectEmoji: v,
                            }),
                        }),
                    ],
                }),
            }),
        })
    );
}
function N(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: s, onDelete: o, transitionState: d, onClose: m } = e,
        [g, p] = i.useState(null == l ? void 0 : l.ref_id),
        f = (0, u.Dt)(),
        h = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Wn, {
                    messageType: c.QYI.WARNING,
                    children: j.intl.string(j.t.xunxCg),
                }),
                (0, r.jsx)(c.LZC, { size: 24 }),
                (0, r.jsx)(c.hjN, {
                    title: j.intl.string(j.t.GK18KC),
                    titleId: f,
                    children: (0, r.jsx)(b.Z, {
                        guildId: t,
                        value: g,
                        initialChannelId: null == l ? void 0 : l.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            p(e);
                        },
                        "aria-labelledby": f,
                    }),
                }),
            ],
        });
    return (0, r.jsx)(C, {
        guildId: t,
        initialData: l,
        benefitTypeInput: h,
        descriptionPlaceholder: j.intl.string(j.t.J8O1Li),
        canSubmit: null != g,
        onSave: function (e) {
            a()(null != g, "Cannot submit null channel"), s(O(v({}, e), { channelId: g }));
        },
        transitionState: d,
        onClose: m,
        onDelete: o,
    });
}
function E(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: s, onClose: o, onDelete: d, guildId: m } = e,
        [g, p] = i.useState(null != (t = null == n ? void 0 : n.name) ? t : ""),
        f = (0, u.Dt)(),
        h = (0, r.jsx)(c.hjN, {
            title: j.intl.string(j.t.NPOJra),
            titleId: f,
            children: (0, r.jsx)(c.Kx8, {
                placeholder: j.intl.string(j.t.NPOJra),
                value: g,
                rows: 1,
                onChange: function (e) {
                    p(e);
                },
                "aria-labelledby": f,
            }),
        });
    return (0, r.jsx)(C, {
        guildId: m,
        initialData: n,
        benefitTypeInput: h,
        descriptionPlaceholder: j.intl.string(j.t.ucP4Tk),
        canSubmit: "" !== g,
        onSave: function (e) {
            a()("" !== g, "Cannot submit empty name"), l(O(v({}, e), { name: g }));
        },
        transitionState: s,
        onClose: o,
        onDelete: d,
    });
}
