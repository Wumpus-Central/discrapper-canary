t.d(n, { default: () => f }), t(388685);
var i = t(951288),
    l = t(647438),
    o = t(793030),
    a = t(442837),
    r = t(481060),
    u = t(596454),
    c = t(493773),
    d = t(318766),
    s = t(907040),
    m = t(339085),
    j = t(984933),
    p = t(883429),
    v = t(981631),
    g = t(185923),
    b = t(388032),
    y = t(984915);
function f(e) {
    var n;
    let { transitionState: t, onClose: f, channelId: h, guildId: C, tag: O } = e,
        k = l.useRef(null),
        x = null != O,
        [P, N] = l.useState(null != (n = null == O ? void 0 : O.name) ? n : ""),
        [w, Z] = l.useState(
            null != O
                ? {
                      id: O.emojiId,
                      name: O.emojiName,
                  }
                : null,
        ),
        [E, I] = l.useState(null == O ? void 0 : O.moderated),
        S = (0, a.e7)([m.ZP], () => ((null == w ? void 0 : w.id) != null ? m.ZP.getUsableCustomEmojiById(w.id) : null)),
        _ =
            (null == O ? void 0 : O.name) !== P ||
            (null == O ? void 0 : O.emojiId) !== (null == w ? void 0 : w.id) ||
            (null == O ? void 0 : O.emojiName) !== (null == w ? void 0 : w.name) ||
            E !== (null == O ? void 0 : O.moderated),
        B = () => {
            if (null != P && _) {
                if (x) {
                    p.Z.updateForumTag(
                        {
                            id: O.id,
                            name: P,
                            emojiId: null == w ? void 0 : w.id,
                            emojiName: null == w ? void 0 : w.name,
                            moderated: E,
                        },
                        h,
                    ),
                        f();
                    return;
                }
                p.Z.createForumTag(
                    {
                        name: P,
                        emojiId: null == w ? void 0 : w.id,
                        emojiName: null == w ? void 0 : w.name,
                        moderated: E,
                    },
                    h,
                ),
                    f();
            }
        },
        R = l.useCallback((e) => N(e), []),
        T = l.useRef(null);
    return (
        (0, c.ZP)(() => {
            null != T.current && T.current.focus();
        }),
        (0, i.jsxs)(o.Modal, {
            title: x ? b.intl.string(b.t.zeVg5e) : b.intl.string(b.t["/jubeH"]),
            subtitle: b.intl.string(b.t["3v8kZG"]),
            transitionState: t,
            onClose: f,
            actions: [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oK"]),
                    onClick: () => {
                        f();
                    },
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t.R3BPHx),
                    onClick: B,
                    disabled: 0 === P.length || !_,
                    autoFocus: !0,
                },
            ],
            actionBarInput: x
                ? (0, i.jsx)(r.zxk, {
                      variant: "critical-secondary",
                      text: b.intl.string(b.t.huYSMj),
                      onClick: () => {
                          x && (p.Z.deleteForumTag(h, O.id), f());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: y.inputContainer,
                    children: (0, i.jsx)(r.oil, {
                        inputRef: T,
                        maxLength: 20,
                        value: P,
                        placeholder: b.intl.string(b.t["5vpeb2"]),
                        onChange: R,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: y.emojiButtonContainer,
                                children: (0, i.jsx)(r.yRy, {
                                    targetElementRef: k,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            t = j.ZP.getDefaultChannel(C);
                                        return (0, i.jsx)(s.Z, {
                                            guildId: C,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    Z(
                                                        null != t.id
                                                            ? {
                                                                  id: t.id,
                                                                  name: t.name,
                                                              }
                                                            : {
                                                                  id: void 0,
                                                                  name: t.optionallyDiverseSequence,
                                                              },
                                                    ),
                                                    i && n();
                                            },
                                            pickerIntention: g.Hz.COMMUNITY_CONTENT,
                                            onNavigateAway: f,
                                            channel: t,
                                        });
                                    },
                                    position: "left",
                                    animation: r.yRy.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        var t, l;
                                        let { isShown: o } = n;
                                        return (0, i.jsx)(
                                            d.Z,
                                            ((t = (function (e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        i = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (i = i.concat(
                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                            }),
                                                        )),
                                                        i.forEach(function (n) {
                                                            var i;
                                                            (i = t[n]),
                                                                n in e
                                                                    ? Object.defineProperty(e, n, {
                                                                          value: i,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[n] = i);
                                                        });
                                                }
                                                return e;
                                            })({}, e)),
                                            (l = l =
                                                {
                                                    ref: k,
                                                    onClick: (n) => {
                                                        var t;
                                                        null == (t = e.onClick) || t.call(e, n);
                                                    },
                                                    active: o,
                                                    className: y.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null != w && (null != w.id || null != w.name)
                                                            ? () =>
                                                                  (0, i.jsx)(u.Z, {
                                                                      className: y.emoji,
                                                                      emojiId: w.id,
                                                                      emojiName: w.name,
                                                                      animated: !!(null == S ? void 0 : S.animated),
                                                                  })
                                                            : null,
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                                : (function (e, n) {
                                                      var t = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          t.push.apply(t, i);
                                                      }
                                                      return t;
                                                  })(Object(l)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          t,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(l, e),
                                                      );
                                                  }),
                                            t),
                                        );
                                    },
                                }),
                            }),
                        },
                        onKeyDown: (e) => {
                            e.keyCode === v.yXg.ENTER && P.length > 0 && (P.length > 0 && B(), e.preventDefault());
                        },
                        trailing:
                            P.length > 0 || null != w
                                ? {
                                      icon: r.k$p,
                                      onClick: () => {
                                          N(""), Z(null);
                                      },
                                      "aria-label": b.intl.string(b.t.o8lsHR),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(r.LZC, { size: 16 }),
                (0, i.jsx)(r.XZJ, {
                    checked: null != E && E,
                    onChange: (e) => I(e || ((null == O ? void 0 : O.moderated) == null && void 0)),
                    label: b.intl.string(b.t["rMH+rq"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
