n.d(t, {
    F: () => W,
    G: () => j
}),
    n(47120);
var l,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    o = n(913527),
    c = n.n(o),
    u = n(91192),
    d = n(442837),
    _ = n(481060),
    h = n(700582),
    f = n(493773),
    g = n(724757),
    m = n(212819),
    E = n(933557),
    p = n(266076),
    I = n(810123),
    A = n(448486),
    S = n(987509),
    C = n(592125),
    x = n(430824),
    b = n(158776),
    L = n(306680),
    v = n(699516),
    N = n(594174),
    T = n(626135),
    y = n(55935),
    P = n(823379),
    Z = n(51144),
    w = n(784384),
    R = n(981631),
    O = n(490897),
    k = n(388032),
    D = n(190417),
    j = (((l = {}).TOGGLE = 'toggle'), (l.SEND = 'send'), l);
function F(e) {
    let { message: t, destination: n, rowMode: l, icon: s, label: o, subLabel: c, selected: d, disabled: h, onPressDestination: g, 'aria-setsize': m, 'aria-posinset': E } = e,
        p = (0, u.JA)(n.id),
        [I, A] = a.useState(!1),
        S = a.useRef(!1),
        C = a.useCallback(() => {
            if ('send' === l) {
                A(!0), (S.current = !0);
                return;
            }
            null == g || g(n);
        }, [l, g, n]),
        x = a.useCallback(() => {
            T.default.track(R.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (S.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [t.channel_id, t.id, g, n]),
        b = a.useCallback(() => {
            A(!1),
                (S.current = !1),
                T.default.track(R.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, f.Z)(() => () => {
            S.current &&
                ((S.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, i.jsxs)(_.P3F, {
            className: r()(D.destinationRow, { [D.disabled]: h }),
            onClick: h || I ? void 0 : C,
            'aria-selected': d,
            'aria-setsize': m,
            'aria-posinset': E,
            ...p,
            children: [
                (0, i.jsxs)('div', {
                    className: D.identity,
                    children: [
                        (0, i.jsx)('div', {
                            className: D.iconWrapper,
                            children: s
                        }),
                        (0, i.jsxs)('div', {
                            className: D.labels,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    tag: 'strong',
                                    className: D.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: o
                                }),
                                (0, i.jsx)(_.Text, {
                                    className: D.subLabel,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: c
                                })
                            ]
                        })
                    ]
                }),
                'toggle' === l &&
                    !h &&
                    (0, i.jsx)(_.XZJ, {
                        type: _.XZJ.Types.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: d,
                        className: D.checkbox
                    }),
                'send' === l &&
                    !h &&
                    (0, i.jsxs)('div', {
                        className: D.actions,
                        children: [
                            I
                                ? (0, i.jsx)(_.zxk, {
                                      size: _.zxk.Sizes.SMALL,
                                      color: _.zxk.Colors.PRIMARY,
                                      look: _.zxk.Looks.LINK,
                                      onClick: x,
                                      children: k.intl.string(k.t['HO/oXl'])
                                  })
                                : (0, i.jsx)('div', {
                                      className: r()(
                                          (0, _.nYM)({
                                              size: _.zxk.Sizes.SMALL,
                                              color: _.zxk.Colors.BRAND
                                          }),
                                          D.fauxButton
                                      ),
                                      children: k.intl.string(k.t.TXNS7e)
                                  }),
                            I &&
                                (0, i.jsx)(_.zxk, {
                                    size: _.zxk.Sizes.SMALL,
                                    color: _.zxk.Colors.BRAND,
                                    look: _.zxk.Looks.OUTLINED,
                                    onClick: b,
                                    children: k.intl.string(k.t.KyUKhY)
                                })
                        ]
                    })
            ]
        })
    );
}
function M(e) {
    let { user: t, subLabel: n, ...l } = e,
        a = Z.ZP.useName(t),
        s = Z.ZP.useUserTag(t, { decoration: 'never' }),
        r = (0, d.e7)([v.Z], () => v.Z.getNickname(t.id)),
        o = (0, d.e7)([b.Z], () => b.Z.getStatus(t.id));
    return (0, i.jsx)(F, {
        ...l,
        icon: (0, i.jsx)(h.Z, {
            'aria-hidden': !0,
            size: _.EFr.SIZE_32,
            user: t,
            status: o
        }),
        label: null != r ? r : a,
        subLabel: null != n ? n : s
    });
}
function G(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, E.ZP)(t),
        s = (0, A._)(t);
    return (0, i.jsx)(F, {
        ...l,
        icon: (0, i.jsx)(p.Z, {
            'aria-hidden': !0,
            size: _.EFr.SIZE_32,
            channel: t,
            experimentLocation: 'forward-modal'
        }),
        label: a,
        subLabel: null != n ? n : s
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...l } = e,
        a = (0, d.e7)([x.Z], () => x.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, E.ZP)(t),
        r = (0, d.e7)([C.Z, N.default, v.Z], () => {
            let e = C.Z.getChannel(t.parent_id);
            return null == e ? null : (0, E.F6)(e, N.default, v.Z, !1);
        }),
        o = (0, d.e7)([L.ZP], () => L.ZP.lastMessageTimestamp(t.id, O.W.CHANNEL)),
        u = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? _.Mmi : _.VL1;
        u = (0, i.jsxs)('div', {
            className: D.threadSubLabel,
            children: [
                (0, i.jsx)(e, {
                    color: _.TVs.colors.TEXT_SECONDARY,
                    className: D.subLabelIcon
                }),
                (0, i.jsx)(_.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: r
                }),
                null != o
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(_.Text, {
                                  className: D.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, i.jsx)(_.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, y.Xf)(c()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, i.jsx)(F, {
        ...l,
        icon: (0, i.jsx)(I.Z, {
            size: I.E.SMALL_32,
            guild: a,
            channel: t
        }),
        label: s,
        subLabel: null != n ? n : u
    });
}
function W(e) {
    let { rowData: t, rowMode: n, message: l, originChannel: s, selectedDestinations: r, handleToggleDestination: o, disableSelection: c, ...d } = e,
        h = a.useMemo(() => [t.length], [t.length]),
        f = a.useCallback(() => 48, []),
        E = a.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.map(S.hC)) && void 0 !== e ? e : [];
        }, [r]),
        p = a.useCallback(
            (e) => {
                let { section: a, row: r } = e;
                if (a > 0) return;
                let { type: u, record: d } = t[r];
                if (u === m.h8.HEADER) return;
                let _ =
                        u === m.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    h = (0, S.hC)(_),
                    f = (0, w.HY)(l, s, d),
                    g = E.includes(h),
                    p = {
                        key: h,
                        message: l,
                        destination: _,
                        rowMode: n,
                        subLabel: null != f ? f.label : void 0,
                        disabled: (c && !g) || null != f,
                        selected: g,
                        onPressDestination: o,
                        'aria-posinset': r + 1,
                        'aria-setsize': t.length
                    };
                return u === m.h8.USER
                    ? (0, i.jsx)(M, {
                          user: d,
                          ...p
                      })
                    : u === m.h8.GROUP_DM
                      ? (0, i.jsx)(G, {
                            channel: d,
                            ...p
                        })
                      : u === m.h8.TEXT_CHANNEL || u === m.h8.VOICE_CHANNEL
                        ? (0, i.jsx)(U, {
                              channel: d,
                              ...p
                          })
                        : void (0, P.vE)(u);
            },
            [c, o, l, s, t, n, E]
        ),
        I = a.useRef(null),
        A = (0, g.Z)('forward-modal', I);
    return (0, i.jsx)(u.bG, {
        navigator: A,
        children: (0, i.jsx)(u.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsx)(_.YAO, {
                    scrollerRef: (e) => {
                        var n;
                        (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...d,
                    sections: h,
                    sectionHeight: 0,
                    renderRow: p,
                    rowHeight: f
                });
            }
        })
    });
}
