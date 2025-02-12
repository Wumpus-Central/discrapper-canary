n.d(t, { Z: () => T });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(468194),
    o = n(481060),
    c = n(904245),
    d = n(596454),
    u = n(377171),
    m = n(540059),
    _ = n(739566),
    h = n(942951),
    p = n(834129),
    g = n(809026),
    f = n(139256),
    x = n(489887),
    C = n(388032),
    v = n(172810);
function E() {
    return (0, i.jsx)('svg', {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: u.Z.INTERACTIVE_NORMAL,
        'aria-hidden': !0,
        children: (0, i.jsx)('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            d: 'M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z',
            fill: 'currentColor'
        })
    });
}
function I(e) {
    let t,
        { hasNoVotes: n, victorEmoji: l } = e;
    if (n) t = (0, i.jsx)(E, {});
    else if (null != l) {
        let e = '' !== l.name ? l.name : l.displayName;
        t = (0, i.jsx)(d.Z, {
            emojiId: l.id,
            emojiName: e,
            animated: l.animated
        });
    }
    return null != t
        ? (0, i.jsx)('div', {
              className: v.imageContainer,
              children: t
          })
        : null;
}
function N(e) {
    let t,
        { type: n, ...l } = e,
        a = (0, m.Q3)('PollResultText') ? 'text-muted' : 'input-placeholder-text';
    switch (n) {
        case 'NO_VOTES':
            t = (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'text-normal',
                scaleFontToUserSetting: !0,
                children: C.intl.string(C.t['a+lSZ2'])
            });
            break;
        case 'VICTOR':
            let { victorAnswerText: r, victorVotePercentage: s } = l;
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: v.victorAnswer,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                color: 'text-normal',
                                className: v.victorAnswerText,
                                scaleFontToUserSetting: !0,
                                children: r
                            }),
                            (0, i.jsx)(f.ZY, {
                                size: 16,
                                className: v.victorIcon,
                                isVictor: !0,
                                isExpired: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.Text, {
                        variant: 'text-xs/medium',
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [C.intl.string(C.t.ufIDIy), ' \u2022 ', s, '%']
                    })
                ]
            });
            break;
        case 'TIE':
            let { tiedVotePercentage: c } = l;
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        scaleFontToUserSetting: !0,
                        children: C.intl.string(C.t.kPN9sr)
                    }),
                    (0, i.jsxs)(o.Text, {
                        variant: 'text-xs/medium',
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [c, '%']
                    })
                ]
            });
    }
    return (0, i.jsx)('div', {
        className: v.description,
        children: t
    });
}
function S(e) {
    let { className: t, data: n, onClickPollLink: a } = e,
        s = l.useMemo(
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
        c = null != n.victorEmoji || 'NO_VOTES' === s.type;
    return (0, i.jsxs)('div', {
        className: r()(v.container, { [v.containerWithImage]: c }, t),
        children: [
            (0, i.jsx)(I, {
                hasNoVotes: 'NO_VOTES' === s.type,
                victorEmoji: n.victorEmoji
            }),
            (0, i.jsx)(N, { ...s }),
            null != a &&
                (0, i.jsx)(o.zxk, {
                    className: v.button,
                    size: o.zxk.Sizes.TINY,
                    onClick: a,
                    color: o.zxk.Colors.PRIMARY,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: C.intl.string(C.t.Jw7VbW)
                    })
                })
        ]
    });
}
function T(e) {
    var t;
    let { message: n, channel: a, compact: r, disableInteraction: d = !1 } = e,
        u = n.embeds[0],
        m = l.useMemo(() => (0, g.Z)(u), [u]),
        f = (0, s.aF)(null !== (t = null == m ? void 0 : m.questionText) && void 0 !== t ? t : '', x.Dv),
        E = (0, _.ZP)(n),
        I = (0, h.l)({
            user: n.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: n.id
        }),
        N = n.messageReference,
        T = l.useCallback(() => {
            null != N &&
                c.Z.jumpToMessage({
                    channelId: N.channel_id,
                    messageId: N.message_id,
                    flash: !0,
                    returnMessageId: n.id
                });
        }, [n.id, N]);
    return null == m
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.Z, {
                      iconNode: (0, i.jsx)(o.QDj, { size: 'xs' }),
                      timestamp: n.timestamp,
                      compact: r,
                      children: C.intl.format(C.t['VJcK4+'], {
                          username: E.nick,
                          usernameHook: I(E),
                          title: f,
                          titleOnClick: T
                      })
                  }),
                  (0, i.jsx)(S, {
                      className: v.embed,
                      data: m,
                      onClickPollLink: d ? void 0 : T
                  })
              ]
          });
}
