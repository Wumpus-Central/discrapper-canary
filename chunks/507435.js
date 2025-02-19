n.d(t, { Z: () => N }), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(468194),
    s = n(481060),
    c = n(904245),
    d = n(596454),
    u = n(377171),
    p = n(540059),
    m = n(739566),
    f = n(942951),
    h = n(834129),
    g = n(809026),
    _ = n(139256),
    b = n(489887),
    v = n(388032),
    y = n(791628);
function x() {
    return (0, r.jsx)('svg', {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: u.Z.INTERACTIVE_NORMAL,
        'aria-hidden': !0,
        children: (0, r.jsx)('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d: 'M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z',
            fill: 'currentColor'
        })
    });
}
function O(e) {
    let t,
        { hasNoVotes: n, victorEmoji: i } = e;
    if (n) t = (0, r.jsx)(x, {});
    else if (null != i) {
        let e = '' !== i.name ? i.name : i.displayName;
        t = (0, r.jsx)(d.Z, {
            emojiId: i.id,
            emojiName: e,
            animated: i.animated
        });
    }
    return null != t
        ? (0, r.jsx)('div', {
              className: y.imageContainer,
              children: t
          })
        : null;
}
function E(e) {
    let t;
    var { type: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['type']);
    let a = (0, p.Q3)('PollResultText') ? 'text-muted' : 'input-placeholder-text';
    switch (n) {
        case 'NO_VOTES':
            t = (0, r.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'text-normal',
                scaleFontToUserSetting: !0,
                children: v.NW.string(v.t['a+lSZ2'])
            });
            break;
        case 'VICTOR':
            let { victorAnswerText: o, victorVotePercentage: l } = i;
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: y.victorAnswer,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/semibold',
                                color: 'text-normal',
                                className: y.victorAnswerText,
                                scaleFontToUserSetting: !0,
                                children: o
                            }),
                            (0, r.jsx)(_.ZY, {
                                size: 16,
                                className: y.victorIcon,
                                isVictor: !0,
                                isExpired: !0
                            })
                        ]
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-xs/medium',
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [v.NW.string(v.t.ufIDIy), ' \u2022 ', l, '%']
                    })
                ]
            });
            break;
        case 'TIE':
            let { tiedVotePercentage: c } = i;
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        scaleFontToUserSetting: !0,
                        children: v.NW.string(v.t.kPN9sr)
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-xs/medium',
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [c, '%']
                    })
                ]
            });
    }
    return (0, r.jsx)('div', {
        className: y.description,
        children: t
    });
}
function j(e) {
    let { className: t, data: n, onClickPollLink: a } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    if (0 === e.totalVotes) return { type: 'NO_VOTES' };
                    let t = null != e.victorAnswerId,
                        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
                    return t
                        ? {
                              type: 'VICTOR',
                              victorAnswerText: e.victorAnswerText,
                              victorVotePercentage: n
                          }
                        : {
                              type: 'TIE',
                              tiedVotePercentage: n
                          };
                })(n),
            [n]
        ),
        c = null != n.victorEmoji || 'NO_VOTES' === l.type;
    return (0, r.jsxs)('div', {
        className: o()(y.container, { [y.containerWithImage]: c }, t),
        children: [
            (0, r.jsx)(O, {
                hasNoVotes: 'NO_VOTES' === l.type,
                victorEmoji: n.victorEmoji
            }),
            (0, r.jsx)(
                E,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, l)
            ),
            null != a &&
                (0, r.jsx)(s.zxk, {
                    className: y.button,
                    size: s.zxk.Sizes.TINY,
                    onClick: a,
                    color: s.zxk.Colors.PRIMARY,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: v.NW.string(v.t.Jw7VbW)
                    })
                })
        ]
    });
}
function N(e) {
    var t;
    let { message: n, channel: a, compact: o, disableInteraction: d = !1 } = e,
        u = n.embeds[0],
        p = i.useMemo(() => (0, g.Z)(u), [u]),
        _ = (0, l.aF)(null !== (t = null == p ? void 0 : p.questionText) && void 0 !== t ? t : '', b.Dv),
        x = (0, m.ZP)(n),
        O = (0, f.l)({
            user: n.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: n.id
        }),
        E = n.messageReference,
        N = i.useCallback(() => {
            null != E &&
                c.Z.jumpToMessage({
                    channelId: E.channel_id,
                    messageId: E.message_id,
                    flash: !0,
                    returnMessageId: n.id
                });
        }, [n.id, E]);
    return null == p
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h.Z, {
                      iconNode: (0, r.jsx)(s.QDj, { size: 'xs' }),
                      timestamp: n.timestamp,
                      compact: o,
                      children: v.NW.format(v.t['VJcK4+'], {
                          username: x.nick,
                          usernameHook: O(x),
                          title: _,
                          titleOnClick: N
                      })
                  }),
                  (0, r.jsx)(j, {
                      className: y.embed,
                      data: p,
                      onClickPollLink: d ? void 0 : N
                  })
              ]
          });
}
