t.d(n, { default: () => h }), t(388685);
var i = t(951288),
    l = t(647438),
    o = t(793030),
    r = t(442837),
    a = t(755721),
    u = t(481060),
    d = t(596454),
    c = t(493773),
    s = t(318766),
    m = t(907040),
    j = t(339085),
    p = t(984933),
    v = t(883429),
    g = t(981631),
    b = t(185923),
    y = t(388032),
    f = t(851458);
function h(e) {
    var n;
    let { transitionState: t, onClose: h, channelId: C, guildId: O, tag: x } = e,
        k = l.useRef(null),
        P = null != x,
        [N, w] = l.useState(null != (n = null == x ? void 0 : x.name) ? n : ""),
        [E, I] = l.useState(
            null != x
                ? {
                      id: x.emojiId,
                      name: x.emojiName,
                  }
                : null,
        ),
        [Z, S] = l.useState(null == x ? void 0 : x.moderated),
        _ = (0, r.e7)([j.ZP], () => ((null == E ? void 0 : E.id) != null ? j.ZP.getUsableCustomEmojiById(E.id) : null)),
        B =
            (null == x ? void 0 : x.name) !== N ||
            (null == x ? void 0 : x.emojiId) !== (null == E ? void 0 : E.id) ||
            (null == x ? void 0 : x.emojiName) !== (null == E ? void 0 : E.name) ||
            Z !== (null == x ? void 0 : x.moderated),
        R = () => {
            if (null != N && B) {
                if (P) {
                    v.Z.updateForumTag(
                        {
                            id: x.id,
                            name: N,
                            emojiId: null == E ? void 0 : E.id,
                            emojiName: null == E ? void 0 : E.name,
                            moderated: Z,
                        },
                        C,
                    ),
                        h();
                    return;
                }
                v.Z.createForumTag(
                    {
                        name: N,
                        emojiId: null == E ? void 0 : E.id,
                        emojiName: null == E ? void 0 : E.name,
                        moderated: Z,
                    },
                    C,
                ),
                    h();
            }
        },
        T = l.useCallback((e) => w(e), []),
        D = l.useRef(null);
    return (
        (0, c.ZP)(() => {
            null != D.current && D.current.focus();
        }),
        (0, i.jsxs)(o.Modal, {
            title: P ? y.intl.string(y.t.zeVg5e) : y.intl.string(y.t["/jubeH"]),
            subtitle: y.intl.string(y.t["3v8kZG"]),
            transitionState: t,
            onClose: h,
            actions: [
                {
                    variant: "secondary",
                    text: y.intl.string(y.t["ETE/oK"]),
                    onClick: () => {
                        h();
                    },
                },
                {
                    variant: "primary",
                    text: y.intl.string(y.t.R3BPHx),
                    onClick: R,
                    disabled: 0 === N.length || !B,
                    autoFocus: !0,
                },
            ],
            actionBarInput: P
                ? (0, i.jsx)(u.zxk, {
                      variant: "critical-secondary",
                      text: y.intl.string(y.t.huYSMj),
                      onClick: () => {
                          P && (v.Z.deleteForumTag(C, x.id), h());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: f.inputContainer,
                    children: (0, i.jsx)(u.oil, {
                        inputRef: D,
                        maxLength: 20,
                        value: N,
                        placeholder: y.intl.string(y.t["5vpeb2"]),
                        onChange: T,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: f.emojiButtonContainer,
                                children: (0, i.jsx)(u.yRy, {
                                    targetElementRef: k,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            t = p.ZP.getDefaultChannel(O);
                                        return (0, i.jsx)(m.Z, {
                                            guildId: O,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    I(
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
                                            pickerIntention: b.Hz.COMMUNITY_CONTENT,
                                            onNavigateAway: h,
                                            channel: t,
                                        });
                                    },
                                    position: "left",
                                    animation: u.yRy.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        var t, l;
                                        let { isShown: o } = n;
                                        return (0, i.jsx)(
                                            s.Z,
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
                                                    className: f.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null != E && (null != E.id || null != E.name)
                                                            ? () =>
                                                                  (0, i.jsx)(d.Z, {
                                                                      className: f.emoji,
                                                                      emojiId: E.id,
                                                                      emojiName: E.name,
                                                                      animated: !!(null == _ ? void 0 : _.animated),
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
                            e.keyCode === g.yXg.ENTER && N.length > 0 && (N.length > 0 && R(), e.preventDefault());
                        },
                        trailing:
                            N.length > 0 || null != E
                                ? {
                                      icon: u.k$p,
                                      onClick: () => {
                                          w(""), I(null);
                                      },
                                      "aria-label": y.intl.string(y.t.o8lsHR),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(u.LZC, { size: 16 }),
                (0, i.jsx)(a.$q, {
                    type: a.M0.INVERTED,
                    size: 18,
                    value: null != Z && Z,
                    onChange: (e, n) => S(n || ((null == x ? void 0 : x.moderated) == null && void 0)),
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        children: y.intl.string(y.t["rMH+rq"]),
                    }),
                }),
            ],
        })
    );
}
