n.d(t, {
    aP: () => _,
    oJ: () => N,
}),
    n(896048),
    n(228524),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(158954),
    c = n(311907),
    o = n(397927),
    d = n(565645),
    u = n(915089),
    f = n(375499),
    g = n(937773),
    b = n(508675),
    m = n(7584),
    p = n(808728),
    x = n(841650),
    h = n(307731),
    j = n(985018),
    O = n(790943);
function y(e) {
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
function v(e, t) {
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
function A(e) {
    let { guildId: t, emojiData: n, onSelectEmoji: l } = e,
        s = i.useRef(null),
        a = (0, c.bG)([b.Ay], () => (null != n.id ? b.Ay.getCustomEmojiById(n.id) : void 0)),
        u = (0, c.bG)([p.Ay], () => p.Ay.getDefaultChannel(t)),
        x = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(g.A, {
                    pickerIntention: h.b_.GUILD_ROLE_BENEFIT_EMOJI,
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
                null == a && null == n.name
                    ? null
                    : function () {
                          return (0, r.jsx)(d.A, {
                              className: O.Zg,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == a ? void 0 : a.animated,
                          });
                      },
            [n, a],
        ),
        A = "";
    return (
        null != a ? (A = ":".concat(a.name, ":")) : null != n.name && (A = m.Ay.convertSurrogateToName(n.name)),
        (0, r.jsx)(o.YNO, {
            targetElementRef: s,
            animation: o.YNO.Animation.NONE,
            position: "top",
            renderPopout: x,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, r.jsxs)(
                    "div",
                    v(
                        y(
                            {
                                ref: s,
                                className: O.oc,
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(f.A, {
                                    className: O.Z8,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: j,
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: O.at,
                                    children: A,
                                }),
                            ],
                        },
                    ),
                );
            },
        })
    );
}
function E(e) {
    var t;
    let {
            guildId: n,
            initialData: l,
            benefitTypeInput: s,
            descriptionPlaceholder: c,
            canSubmit: d,
            onSave: f,
            onDelete: g,
            transitionState: b,
            onClose: m,
        } = e,
        p = (0, u.GV)(),
        [x, h] = i.useState(null != (t = null == l ? void 0 : l.description) ? t : ""),
        [O, y] = i.useState(() => ({
            id: null == l ? void 0 : l.emoji_id,
            name: null == l ? void 0 : l.emoji_name,
        })),
        v = d && "" !== x && (null != O.id || null != O.name);
    function E(e) {
        e.preventDefault(),
            v &&
                (f({
                    description: x,
                    emojiId: O.id,
                    emojiName: O.name,
                }),
                m());
    }
    let N = [
        {
            text: j.intl.string(j.t["ETE/oC"]),
            variant: "secondary",
            onClick: m,
        },
    ];
    return (
        null != g &&
            N.push({
                text: j.intl.string(j.t.oyYWHE),
                variant: "critical-secondary",
                onClick: () => {
                    g(), m();
                },
                icon: o.ucK,
            }),
        N.push({
            text: null == l ? j.intl.string(j.t.OYkgVk) : j.intl.string(j.t["R3BPH+"]),
            variant: "primary",
            onClick: E,
            disabled: !v,
        }),
        (0, r.jsx)("form", {
            onSubmit: E,
            children: (0, r.jsx)(a.Modal, {
                transitionState: b,
                onClose: m,
                title: j.intl.string(j.t["2qf9EI"]),
                actions: N,
                children: (0, r.jsxs)(o.BJc, {
                    gap: "md",
                    children: [
                        s,
                        (0, r.jsx)(o.fs1, {
                            label: j.intl.string(j.t["1Ts7QP"]),
                            placeholder: c,
                            value: x,
                            rows: 1,
                            autosize: !0,
                            onChange: h,
                            "aria-labelledby": p,
                        }),
                        (0, r.jsx)(a.D0$, {
                            label: j.intl.string(j.t.sMOuuS),
                            children: (0, r.jsx)(A, {
                                guildId: n,
                                emojiData: O,
                                onSelectEmoji: y,
                            }),
                        }),
                    ],
                }),
            }),
        })
    );
}
function N(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: a, onDelete: c, transitionState: d, onClose: f } = e,
        [g, b] = i.useState(null == l ? void 0 : l.ref_id),
        m = (0, u.GV)(),
        p = (0, r.jsxs)(o.BJc, {
            gap: 16,
            children: [
                (0, r.jsx)(o.po8, {
                    messageType: o.YCn.WARNING,
                    children: j.intl.string(j.t.xunxCo),
                }),
                (0, r.jsx)(x.A, {
                    label: j.intl.string(j.t.GK18KJ),
                    guildId: t,
                    value: g,
                    initialChannelId: null == l ? void 0 : l.ref_id,
                    omitChannelIds: n,
                    onChange: function (e) {
                        b(e);
                    },
                    "aria-labelledby": m,
                }),
            ],
        });
    return (0, r.jsx)(E, {
        guildId: t,
        initialData: l,
        benefitTypeInput: p,
        descriptionPlaceholder: j.intl.string(j.t.J8O1Lp),
        canSubmit: null != g,
        onSave: function (e) {
            s()(null != g, "Cannot submit null channel"), a(v(y({}, e), { channelId: g }));
        },
        transitionState: d,
        onClose: f,
        onDelete: c,
    });
}
function _(e) {
    var t;
    let { initialData: n, onSave: l, transitionState: a, onClose: c, onDelete: d, guildId: f } = e,
        [g, b] = i.useState(null != (t = null == n ? void 0 : n.name) ? t : ""),
        m = (0, u.GV)(),
        p = (0, r.jsx)(o.fs1, {
            label: j.intl.string(j.t.NPOJrU),
            placeholder: j.intl.string(j.t.NPOJrU),
            value: g,
            rows: 1,
            onChange: function (e) {
                b(e);
            },
            "aria-labelledby": m,
        });
    return (0, r.jsx)(E, {
        guildId: f,
        initialData: n,
        benefitTypeInput: p,
        descriptionPlaceholder: j.intl.string(j.t.ucP4Tt),
        canSubmit: "" !== g,
        onSave: function (e) {
            s()("" !== g, "Cannot submit empty name"), l(v(y({}, e), { name: g }));
        },
        transitionState: a,
        onClose: c,
        onDelete: d,
    });
}
