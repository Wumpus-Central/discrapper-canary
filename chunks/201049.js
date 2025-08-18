t.d(n, { default: () => f }), t(388685);
var i = t(951288),
    l = t(647438),
    o = t(442837),
    r = t(82659),
    a = t(481060),
    u = t(596454),
    d = t(493773),
    c = t(318766),
    s = t(907040),
    m = t(339085),
    j = t(984933),
    p = t(883429),
    v = t(981631),
    g = t(185923),
    b = t(388032),
    y = t(851458);
function f(e) {
    var n;
    let { transitionState: t, onClose: f, channelId: h, guildId: C, tag: O } = e,
        x = l.useRef(null),
        k = null != O,
        [P, N] = l.useState(null != (n = null == O ? void 0 : O.name) ? n : ""),
        [Z, w] = l.useState(
            null != O
                ? {
                      id: O.emojiId,
                      name: O.emojiName,
                  }
                : null,
        ),
        [E, I] = l.useState(null == O ? void 0 : O.moderated),
        S = (0, o.e7)([m.ZP], () => ((null == Z ? void 0 : Z.id) != null ? m.ZP.getUsableCustomEmojiById(Z.id) : null)),
        T =
            (null == O ? void 0 : O.name) !== P ||
            (null == O ? void 0 : O.emojiId) !== (null == Z ? void 0 : Z.id) ||
            (null == O ? void 0 : O.emojiName) !== (null == Z ? void 0 : Z.name) ||
            E !== (null == O ? void 0 : O.moderated),
        _ = () => {
            if (null != P && T) {
                if (k) {
                    p.Z.updateForumTag(
                        {
                            id: O.id,
                            name: P,
                            emojiId: null == Z ? void 0 : Z.id,
                            emojiName: null == Z ? void 0 : Z.name,
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
                        emojiId: null == Z ? void 0 : Z.id,
                        emojiName: null == Z ? void 0 : Z.name,
                        moderated: E,
                    },
                    h,
                ),
                    f();
            }
        },
        B = l.useCallback((e) => N(e), []),
        R = l.useRef(null);
    return (
        (0, d.ZP)(() => {
            null != R.current && R.current.focus();
        }),
        (0, i.jsxs)(r.Modal, {
            title: k ? b.intl.string(b.t.zeVg5e) : b.intl.string(b.t["/jubeH"]),
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
                    onClick: _,
                    disabled: 0 === P.length || !T,
                    autoFocus: !0,
                },
            ],
            actionBarInput: k
                ? (0, i.jsx)(a.zxk, {
                      variant: "critical-secondary",
                      text: b.intl.string(b.t.huYSMj),
                      onClick: () => {
                          k && (p.Z.deleteForumTag(h, O.id), f());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: y.inputContainer,
                    children: (0, i.jsx)(a.oil, {
                        inputRef: R,
                        maxLength: 20,
                        value: P,
                        placeholder: b.intl.string(b.t["5vpeb2"]),
                        onChange: B,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: y.emojiButtonContainer,
                                children: (0, i.jsx)(a.yRy, {
                                    targetElementRef: x,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            t = j.ZP.getDefaultChannel(C);
                                        return (0, i.jsx)(s.Z, {
                                            guildId: C,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    w(
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
                                    animation: a.yRy.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        var t, l;
                                        let { isShown: o } = n;
                                        return (0, i.jsx)(
                                            c.Z,
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
                                                    ref: x,
                                                    onClick: (n) => {
                                                        var t;
                                                        null == (t = e.onClick) || t.call(e, n);
                                                    },
                                                    active: o,
                                                    className: y.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null != Z && (null != Z.id || null != Z.name)
                                                            ? () =>
                                                                  (0, i.jsx)(u.Z, {
                                                                      className: y.emoji,
                                                                      emojiId: Z.id,
                                                                      emojiName: Z.name,
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
                            e.keyCode === v.yXg.ENTER && P.length > 0 && (P.length > 0 && _(), e.preventDefault());
                        },
                        trailing:
                            P.length > 0 || null != Z
                                ? {
                                      icon: a.k$p,
                                      onClick: () => {
                                          N(""), w(null);
                                      },
                                      "aria-label": b.intl.string(b.t.o8lsHR),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(a.LZC, { size: 16 }),
                (0, i.jsx)(a.XZJ, {
                    type: a.XZJ.Types.INVERTED,
                    size: 18,
                    value: null != E && E,
                    onChange: (e, n) => I(n || ((null == O ? void 0 : O.moderated) == null && void 0)),
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: b.intl.string(b.t["rMH+rq"]),
                    }),
                }),
            ],
        })
    );
}
