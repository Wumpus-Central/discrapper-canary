l.d(n, { default: () => p }), l(47120);
var t = l(200651),
    i = l(192379),
    o = l(442837),
    a = l(481060),
    r = l(596454),
    s = l(493773),
    d = l(313201),
    u = l(318766),
    c = l(907040),
    m = l(339085),
    j = l(984933),
    x = l(883429),
    v = l(981631),
    h = l(185923),
    k = l(388032),
    C = l(866878);
function p(e) {
    var n;
    let { transitionState: l, onClose: p, channelId: N, guildId: g, tag: _ } = e,
        b = (0, d.Dt)(),
        z = null != _,
        [I, f] = i.useState(null !== (n = null == _ ? void 0 : _.name) && void 0 !== n ? n : ''),
        [B, y] = i.useState(
            null != _
                ? {
                      id: _.emojiId,
                      name: _.emojiName
                  }
                : null
        ),
        [Z, E] = i.useState(null == _ ? void 0 : _.moderated),
        T = (0, o.e7)([m.ZP], () => ((null == B ? void 0 : B.id) != null ? m.ZP.getUsableCustomEmojiById(B.id) : null)),
        R = (null == _ ? void 0 : _.name) !== I || (null == _ ? void 0 : _.emojiId) !== (null == B ? void 0 : B.id) || (null == _ ? void 0 : _.emojiName) !== (null == B ? void 0 : B.name) || Z !== (null == _ ? void 0 : _.moderated),
        P = () => {
            if (null != I && R) {
                if (z) {
                    x.Z.updateForumTag(
                        {
                            id: _.id,
                            name: I,
                            emojiId: null == B ? void 0 : B.id,
                            emojiName: null == B ? void 0 : B.name,
                            moderated: Z
                        },
                        N
                    ),
                        p();
                    return;
                }
                x.Z.createForumTag(
                    {
                        name: I,
                        emojiId: null == B ? void 0 : B.id,
                        emojiName: null == B ? void 0 : B.name,
                        moderated: Z
                    },
                    N
                ),
                    p();
            }
        },
        S = (e) => {
            null != e &&
                y(
                    null != e.id
                        ? {
                              id: e.id,
                              name: e.name
                          }
                        : {
                              id: void 0,
                              name: e.optionallyDiverseSequence
                          }
                );
        },
        D = i.useCallback((e) => f(e), []),
        w = i.createRef();
    return (
        (0, s.ZP)(() => {
            null != w.current && w.current.focus();
        }),
        (0, t.jsxs)(a.Y0X, {
            transitionState: l,
            'aria-labelledby': b,
            children: [
                (0, t.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        children: z ? k.intl.string(k.t.zeVg5e) : k.intl.string(k.t['/jubeH'])
                    })
                }),
                (0, t.jsxs)('div', {
                    className: C.content,
                    children: [
                        (0, t.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: k.intl.string(k.t['3v8kZG'])
                        }),
                        (0, t.jsxs)('div', {
                            className: C.inputContainer,
                            children: [
                                (0, t.jsx)('div', {
                                    className: C.emojiButtonContainer,
                                    children: (0, t.jsx)(a.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: n } = e,
                                                l = j.ZP.getDefaultChannel(g);
                                            return (0, t.jsx)(c.Z, {
                                                guildId: g,
                                                closePopout: n,
                                                onSelectEmoji: (e, l) => {
                                                    S(e), l && n();
                                                },
                                                pickerIntention: h.Hz.COMMUNITY_CONTENT,
                                                onNavigateAway: p,
                                                channel: l
                                            });
                                        },
                                        position: 'left',
                                        animation: a.yRy.Animation.NONE,
                                        align: 'bottom',
                                        children: (e, n) => {
                                            let { isShown: l } = n;
                                            return (0, t.jsx)(u.Z, {
                                                ...e,
                                                onClick: (n) => {
                                                    var l;
                                                    null === (l = e.onClick) || void 0 === l || l.call(e, n);
                                                },
                                                active: l,
                                                className: C.emojiButton,
                                                tabIndex: 0,
                                                renderButtonContents:
                                                    null != B && (null != B.id || null != B.name)
                                                        ? () =>
                                                              (0, t.jsx)(r.Z, {
                                                                  className: C.emoji,
                                                                  emojiId: B.id,
                                                                  emojiName: B.name,
                                                                  animated: !!(null == T ? void 0 : T.animated)
                                                              })
                                                        : null
                                            });
                                        }
                                    })
                                }),
                                (0, t.jsx)(a.oil, {
                                    inputRef: w,
                                    maxLength: 20,
                                    value: I,
                                    inputClassName: C.input,
                                    placeholder: k.intl.string(k.t['5vpeb2']),
                                    onChange: D,
                                    autoFocus: !0,
                                    onKeyDown: (e) => {
                                        e.keyCode === v.yXg.ENTER && I.length > 0 && (I.length > 0 && P(), e.preventDefault());
                                    }
                                }),
                                I.length > 0 || null != B
                                    ? (0, t.jsx)(a.zxk, {
                                          'aria-label': k.intl.string(k.t.o8lsHR),
                                          className: C.clearButton,
                                          onClick: () => {
                                              f(''), y(null);
                                          },
                                          look: a.zxk.Looks.BLANK,
                                          size: a.zxk.Sizes.NONE,
                                          children: (0, t.jsx)(a.k$p, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: C.clearIcon
                                          })
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, t.jsx)(a.XZJ, {
                    type: a.XZJ.Types.INVERTED,
                    size: 18,
                    value: null != Z && Z,
                    onChange: (e, n) => E(n || ((null == _ ? void 0 : _.moderated) == null && void 0)),
                    className: C.moderatedCheckbox,
                    children: (0, t.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: k.intl.string(k.t['rMH+rq'])
                    })
                }),
                (0, t.jsxs)(a.mzw, {
                    className: C.footer,
                    children: [
                        (0, t.jsxs)('div', {
                            className: C.buttons,
                            children: [
                                (0, t.jsx)(a.zxk, {
                                    color: a.zxk.Colors.PRIMARY,
                                    onClick: () => {
                                        p();
                                    },
                                    children: k.intl.string(k.t['ETE/oK'])
                                }),
                                (0, t.jsx)(a.zxk, {
                                    onClick: P,
                                    disabled: 0 === I.length || !R,
                                    autoFocus: !0,
                                    children: k.intl.string(k.t.R3BPHx)
                                })
                            ]
                        }),
                        z &&
                            (0, t.jsx)(a.zxk, {
                                color: a.zxk.Colors.RED,
                                look: a.zxk.Looks.LINK,
                                onClick: () => {
                                    z && (x.Z.deleteForumTag(N, _.id), p());
                                },
                                children: k.intl.string(k.t.huYSMj)
                            })
                    ]
                })
            ]
        })
    );
}
