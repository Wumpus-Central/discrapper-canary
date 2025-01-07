n.d(t, {
    F: function () {
        return W;
    },
    G: function () {
        return l;
    }
}),
    n(47120);
var l,
    i,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(91192),
    h = n(442837),
    f = n(481060),
    _ = n(700582),
    g = n(493773),
    m = n(724757),
    E = n(212819),
    I = n(933557),
    p = n(266076),
    S = n(810123),
    A = n(448486),
    C = n(987509),
    v = n(592125),
    L = n(430824),
    T = n(158776),
    b = n(306680),
    N = n(699516),
    x = n(594174),
    P = n(626135),
    y = n(55935),
    Z = n(823379),
    O = n(51144),
    R = n(784384),
    w = n(981631),
    D = n(490897),
    M = n(388032),
    j = n(190417);
function U(e) {
    let { message: t, destination: n, rowMode: l, icon: i, label: s, subLabel: c, selected: u, disabled: h, onPressDestination: _, 'aria-setsize': m, 'aria-posinset': E } = e,
        I = (0, d.JA)(n.id),
        [p, S] = r.useState(!1),
        A = r.useRef(!1),
        C = r.useCallback(() => {
            if ('send' === l) {
                S(!0), (A.current = !0);
                return;
            }
            null == _ || _(n);
        }, [l, _, n]),
        v = r.useCallback(() => {
            P.default.track(w.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (A.current = !1),
                null == _ ||
                    _(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [t.channel_id, t.id, _, n]),
        L = r.useCallback(() => {
            S(!1),
                (A.current = !1),
                P.default.track(w.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, g.Z)(() => () => {
            A.current &&
                ((A.current = !1),
                null == _ ||
                    _(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, a.jsxs)(f.Clickable, {
            className: o()(j.destinationRow, { [j.disabled]: h }),
            onClick: h || p ? void 0 : C,
            'aria-selected': u,
            'aria-setsize': m,
            'aria-posinset': E,
            ...I,
            children: [
                (0, a.jsxs)('div', {
                    className: j.identity,
                    children: [
                        (0, a.jsx)('div', {
                            className: j.iconWrapper,
                            children: i
                        }),
                        (0, a.jsxs)('div', {
                            className: j.labels,
                            children: [
                                (0, a.jsx)(f.Text, {
                                    tag: 'strong',
                                    className: j.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: s
                                }),
                                (0, a.jsx)(f.Text, {
                                    className: j.subLabel,
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
                    (0, a.jsx)(f.Checkbox, {
                        type: f.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: u,
                        className: j.checkbox
                    }),
                'send' === l &&
                    !h &&
                    (0, a.jsxs)('div', {
                        className: j.actions,
                        children: [
                            p
                                ? (0, a.jsx)(f.Button, {
                                      size: f.Button.Sizes.SMALL,
                                      color: f.Button.Colors.PRIMARY,
                                      look: f.Button.Looks.LINK,
                                      onClick: v,
                                      children: M.intl.string(M.t['HO/oXl'])
                                  })
                                : (0, a.jsx)('div', {
                                      className: o()(
                                          (0, f.getButtonStyle)({
                                              size: f.Button.Sizes.SMALL,
                                              color: f.Button.Colors.BRAND
                                          }),
                                          j.fauxButton
                                      ),
                                      children: M.intl.string(M.t.TXNS7e)
                                  }),
                            p &&
                                (0, a.jsx)(f.Button, {
                                    size: f.Button.Sizes.SMALL,
                                    color: f.Button.Colors.BRAND,
                                    look: f.Button.Looks.OUTLINED,
                                    onClick: L,
                                    children: M.intl.string(M.t.KyUKhY)
                                })
                        ]
                    })
            ]
        })
    );
}
function k(e) {
    let { user: t, subLabel: n, ...l } = e,
        i = O.ZP.useName(t),
        r = O.ZP.useUserTag(t, { decoration: 'never' }),
        s = (0, h.e7)([N.Z], () => N.Z.getNickname(t.id)),
        o = (0, h.e7)([T.Z], () => T.Z.getStatus(t.id));
    return (0, a.jsx)(U, {
        ...l,
        icon: (0, a.jsx)(_.Z, {
            'aria-hidden': !0,
            size: f.AvatarSizes.SIZE_32,
            user: t,
            status: o
        }),
        label: null != s ? s : i,
        subLabel: null != n ? n : r
    });
}
function F(e) {
    let { channel: t, subLabel: n, ...l } = e,
        i = (0, I.ZP)(t),
        r = (0, A._)(t);
    return (0, a.jsx)(U, {
        ...l,
        icon: (0, a.jsx)(p.Z, {
            'aria-hidden': !0,
            size: f.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'forward-modal'
        }),
        label: i,
        subLabel: null != n ? n : r
    });
}
function G(e) {
    let { channel: t, subLabel: n, ...l } = e,
        i = (0, h.e7)([L.Z], () => L.Z.getGuild(null == t ? void 0 : t.guild_id)),
        r = (0, I.ZP)(t),
        s = (0, h.e7)([v.Z, x.default, N.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return null == e ? null : (0, I.F6)(e, x.default, N.Z, !1);
        }),
        o = (0, h.e7)([b.ZP], () => b.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
        c = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.ForumIcon : f.TextIcon;
        c = (0, a.jsxs)('div', {
            className: j.threadSubLabel,
            children: [
                (0, a.jsx)(e, {
                    color: f.tokens.colors.TEXT_SECONDARY,
                    className: j.subLabelIcon
                }),
                (0, a.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: s
                }),
                null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(f.Text, {
                                  className: j.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, a.jsx)(f.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, y.Xf)(u()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, a.jsx)(U, {
        ...l,
        icon: (0, a.jsx)(S.Z, {
            size: S.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: r,
        subLabel: null != n ? n : c
    });
}
function W(e) {
    let { rowData: t, rowMode: n, message: l, originChannel: i, selectedDestinations: s, handleToggleDestination: o, disableSelection: c, ...u } = e,
        h = r.useMemo(() => [t.length], [t.length]),
        _ = r.useCallback(() => 48, []),
        g = r.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.map(C.hC)) && void 0 !== e ? e : [];
        }, [s]),
        I = r.useCallback(
            (e) => {
                let { section: r, row: s } = e;
                if (r > 0) return;
                let { type: u, record: d } = t[s];
                if (u === E.h8.HEADER) return;
                let h =
                        u === E.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    f = (0, C.hC)(h),
                    _ = (0, R.HY)(l, i, d),
                    m = g.includes(f),
                    I = {
                        key: f,
                        message: l,
                        destination: h,
                        rowMode: n,
                        subLabel: null != _ ? _.label : void 0,
                        disabled: (c && !m) || null != _,
                        selected: m,
                        onPressDestination: o,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                if (u === E.h8.USER)
                    return (0, a.jsx)(k, {
                        user: d,
                        ...I
                    });
                if (u === E.h8.GROUP_DM)
                    return (0, a.jsx)(F, {
                        channel: d,
                        ...I
                    });
                if (u === E.h8.TEXT_CHANNEL || u === E.h8.VOICE_CHANNEL)
                    return (0, a.jsx)(G, {
                        channel: d,
                        ...I
                    });
                else (0, Z.vE)(u);
            },
            [c, o, l, i, t, n, g]
        ),
        p = r.useRef(null),
        S = (0, m.Z)('forward-modal', p);
    return (0, a.jsx)(d.bG, {
        navigator: S,
        children: (0, a.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(f.ModalListContent, {
                    scrollerRef: (e) => {
                        var n;
                        (p.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...u,
                    sections: h,
                    sectionHeight: 0,
                    renderRow: I,
                    rowHeight: _
                });
            }
        })
    });
}
((i = l || (l = {})).TOGGLE = 'toggle'), (i.SEND = 'send');
