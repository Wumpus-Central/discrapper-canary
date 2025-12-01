n.d(t, { Z: () => R }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(468194),
    l = n(692547),
    c = n(481060),
    u = n(904245),
    d = n(596454),
    f = n(739566),
    p = n(942951),
    _ = n(834129),
    m = n(809026),
    h = n(139256),
    g = n(489887),
    E = n(388032),
    b = n(18294);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = 16;
function T() {
    return (0, r.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: l.Z.colors.INTERACTIVE_NORMAL.css,
        "aria-hidden": !0,
        children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
            fill: "currentColor",
        }),
    });
}
function A(e) {
    let t,
        { hasNoVotes: n, victorEmoji: i } = e;
    if (n) t = (0, r.jsx)(T, {});
    else if (null != i) {
        let e = "" !== i.name ? i.name : i.displayName;
        t = (0, r.jsx)(d.Z, {
            emojiId: i.id,
            emojiName: e,
            animated: i.animated,
        });
    }
    return null != t
        ? (0, r.jsx)("div", {
              className: b.imageContainer,
              children: t,
          })
        : null;
}
function C(e) {
    if (0 === e.totalVotes) return { type: "NO_VOTES" };
    let t = null != e.victorAnswerId,
        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
    return t
        ? {
              type: "VICTOR",
              victorAnswerText: e.victorAnswerText,
              victorVotePercentage: n,
          }
        : {
              type: "TIE",
              tiedVotePercentage: n,
          };
}
function N(e) {
    let t;
    var { type: n } = e,
        i = v(e, ["type"]);
    let a = "text-muted";
    switch (n) {
        case "NO_VOTES":
            t = (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-default",
                scaleFontToUserSetting: !0,
                children: E.intl.string(E.t["a+lSZ/"]),
            });
            break;
        case "VICTOR":
            let { victorAnswerText: o, victorVotePercentage: s } = i;
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: b.victorAnswer,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                className: b.victorAnswerText,
                                scaleFontToUserSetting: !0,
                                children: o,
                            }),
                            (0, r.jsx)(h.ZY, {
                                size: I,
                                className: b.victorIcon,
                                isVictor: !0,
                                isExpired: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: "text-xs/medium",
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [E.intl.string(E.t.ufIDIx), " \u2022 ", s, "%"],
                    }),
                ],
            });
            break;
        case "TIE":
            let { tiedVotePercentage: l } = i;
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        scaleFontToUserSetting: !0,
                        children: E.intl.string(E.t.kPN9si),
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: "text-xs/medium",
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [l, "%"],
                    }),
                ],
            });
    }
    return (0, r.jsx)("div", {
        className: b.description,
        children: t,
    });
}
function P(e) {
    let { className: t, data: n, onClickPollLink: a } = e,
        s = i.useMemo(() => C(n), [n]),
        l = null != n.victorEmoji || "NO_VOTES" === s.type;
    return (0, r.jsxs)("div", {
        className: o()(b.container, { [b.containerWithImage]: l }, t),
        children: [
            (0, r.jsx)(A, {
                hasNoVotes: "NO_VOTES" === s.type,
                victorEmoji: n.victorEmoji,
            }),
            (0, r.jsx)(N, O({}, s)),
            null != a &&
                (0, r.jsx)(c.Button, {
                    size: "sm",
                    onClick: a,
                    variant: "secondary",
                    text: E.intl.string(E.t.Jw7Vbf),
                }),
        ],
    });
}
function R(e) {
    var t;
    let { message: n, channel: a, compact: o, disableInteraction: l = !1 } = e,
        d = n.embeds[0],
        h = i.useMemo(() => (0, m.Z)(d), [d]),
        y = (0, s.aF)(null != (t = null == h ? void 0 : h.questionText) ? t : "", g.Dv),
        O = (0, f.ZP)(n),
        v = (0, p.l)({
            user: n.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: n.id,
        }),
        S = n.messageReference,
        I = i.useCallback(() => {
            null != S &&
                u.Z.jumpToMessage({
                    channelId: S.channel_id,
                    messageId: S.message_id,
                    flash: !0,
                    returnMessageId: n.id,
                });
        }, [n.id, S]);
    return null == h
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_.Z, {
                      iconNode: (0, r.jsx)(c.QDj, { size: "xs" }),
                      timestamp: n.timestamp,
                      compact: o,
                      children: E.intl.format(E.t.VJcK41, {
                          username: O.nick,
                          usernameHook: v(O),
                          title: y,
                          titleOnClick: I,
                      }),
                  }),
                  (0, r.jsx)(P, {
                      className: b.embed,
                      data: h,
                      onClickPollLink: l ? void 0 : I,
                  }),
              ],
          });
}
