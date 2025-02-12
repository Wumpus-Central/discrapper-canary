n.d(t, {
    F: () => H,
    G: () => j
}),
    n(47120);
var a,
    l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    o = n(913527),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    m = n(481060),
    _ = n(700582),
    h = n(493773),
    g = n(724757),
    p = n(212819),
    f = n(933557),
    E = n(266076),
    I = n(810123),
    C = n(448486),
    x = n(987509),
    A = n(592125),
    S = n(430824),
    T = n(158776),
    v = n(306680),
    b = n(699516),
    L = n(594174),
    y = n(626135),
    N = n(55935),
    P = n(823379),
    Z = n(51144),
    M = n(784384),
    w = n(981631),
    D = n(490897),
    R = n(388032),
    O = n(122710),
    j = (((a = {}).TOGGLE = 'toggle'), (a.SEND = 'send'), a);
function k(e) {
    let { message: t, destination: n, rowMode: a, icon: s, label: o, subLabel: c, selected: u, disabled: _, onPressDestination: g, 'aria-setsize': p, 'aria-posinset': f } = e,
        E = (0, d.JA)(n.id),
        [I, C] = i.useState(!1),
        x = i.useRef(!1),
        A = i.useCallback(() => {
            if ('send' === a) {
                C(!0), (x.current = !0);
                return;
            }
            null == g || g(n);
        }, [a, g, n]),
        S = i.useCallback(() => {
            y.default.track(w.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (x.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [t.channel_id, t.id, g, n]),
        T = i.useCallback(() => {
            C(!1),
                (x.current = !1),
                y.default.track(w.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, h.ZP)(() => () => {
            x.current &&
                ((x.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, l.jsxs)(m.P3F, {
            className: r()(O.destinationRow, { [O.disabled]: _ }),
            onClick: _ || I ? void 0 : A,
            'aria-selected': u,
            'aria-setsize': p,
            'aria-posinset': f,
            ...E,
            children: [
                (0, l.jsxs)('div', {
                    className: O.identity,
                    children: [
                        (0, l.jsx)('div', {
                            className: O.iconWrapper,
                            children: s
                        }),
                        (0, l.jsxs)('div', {
                            className: O.labels,
                            children: [
                                (0, l.jsx)(m.Text, {
                                    tag: 'strong',
                                    className: O.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: o
                                }),
                                (0, l.jsx)(m.Text, {
                                    className: O.subLabel,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: c
                                })
                            ]
                        })
                    ]
                }),
                'toggle' === a &&
                    !_ &&
                    (0, l.jsx)(m.XZJ, {
                        type: m.XZJ.Types.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: u,
                        className: O.checkbox
                    }),
                'send' === a &&
                    !_ &&
                    (0, l.jsxs)('div', {
                        className: O.actions,
                        children: [
                            I
                                ? (0, l.jsx)(m.zxk, {
                                      size: m.zxk.Sizes.SMALL,
                                      color: m.zxk.Colors.PRIMARY,
                                      look: m.zxk.Looks.LINK,
                                      onClick: S,
                                      children: R.intl.string(R.t['HO/oXl'])
                                  })
                                : (0, l.jsx)('div', {
                                      className: r()(
                                          (0, m.nYM)({
                                              size: m.zxk.Sizes.SMALL,
                                              color: m.zxk.Colors.BRAND
                                          }),
                                          O.fauxButton
                                      ),
                                      children: R.intl.string(R.t.TXNS7e)
                                  }),
                            I &&
                                (0, l.jsx)(m.zxk, {
                                    size: m.zxk.Sizes.SMALL,
                                    color: m.zxk.Colors.BRAND,
                                    look: m.zxk.Looks.OUTLINED,
                                    onClick: T,
                                    children: R.intl.string(R.t.KyUKhY)
                                })
                        ]
                    })
            ]
        })
    );
}
function F(e) {
    let { user: t, subLabel: n, ...a } = e,
        i = Z.ZP.useName(t),
        s = Z.ZP.useUserTag(t, { decoration: 'never' }),
        r = (0, u.e7)([b.Z], () => b.Z.getNickname(t.id)),
        o = (0, u.e7)([T.Z], () => T.Z.getStatus(t.id));
    return (0, l.jsx)(k, {
        ...a,
        icon: (0, l.jsx)(_.Z, {
            'aria-hidden': !0,
            size: m.EFr.SIZE_32,
            user: t,
            status: o
        }),
        label: null != r ? r : i,
        subLabel: null != n ? n : s
    });
}
function G(e) {
    let { channel: t, subLabel: n, ...a } = e,
        i = (0, f.ZP)(t),
        s = (0, C._)(t);
    return (0, l.jsx)(k, {
        ...a,
        icon: (0, l.jsx)(E.Z, {
            'aria-hidden': !0,
            size: m.EFr.SIZE_32,
            channel: t,
            experimentLocation: 'forward-modal'
        }),
        label: i,
        subLabel: null != n ? n : s
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...a } = e,
        i = (0, u.e7)([S.Z], () => S.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, f.ZP)(t),
        r = (0, u.e7)([A.Z, L.default, b.Z], () => {
            let e = A.Z.getChannel(t.parent_id);
            return null == e ? null : (0, f.F6)(e, L.default, b.Z, !1);
        }),
        o = (0, u.e7)([v.ZP], () => v.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
        d = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? m.Mmi : m.VL1;
        d = (0, l.jsxs)('div', {
            className: O.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: m.TVs.colors.TEXT_SECONDARY,
                    className: O.subLabelIcon
                }),
                (0, l.jsx)(m.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: r
                }),
                null != o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(m.Text, {
                                  className: O.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, l.jsx)(m.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, N.Xf)(c()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, l.jsx)(k, {
        ...a,
        icon: (0, l.jsx)(I.Z, {
            size: I.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: s,
        subLabel: null != n ? n : d
    });
}
function H(e) {
    let { rowData: t, rowMode: n, message: a, originChannel: s, selectedDestinations: r, handleToggleDestination: o, disableSelection: c, ...u } = e,
        _ = i.useMemo(() => [t.length], [t.length]),
        h = i.useCallback(() => 48, []),
        f = i.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.map(x.hC)) && void 0 !== e ? e : [];
        }, [r]),
        E = i.useCallback(
            (e) => {
                let { section: i, row: r } = e;
                if (i > 0) return;
                let { type: d, record: u } = t[r];
                if (d === p.h8.HEADER) return;
                let m =
                        d === p.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    _ = (0, x.hC)(m),
                    h = (0, M.HY)(a, s, u),
                    g = f.includes(_),
                    E = {
                        key: _,
                        message: a,
                        destination: m,
                        rowMode: n,
                        subLabel: null != h ? h.label : void 0,
                        disabled: (c && !g) || null != h,
                        selected: g,
                        onPressDestination: o,
                        'aria-posinset': r + 1,
                        'aria-setsize': t.length
                    };
                return d === p.h8.USER
                    ? (0, l.jsx)(F, {
                          user: u,
                          ...E
                      })
                    : d === p.h8.GROUP_DM
                      ? (0, l.jsx)(G, {
                            channel: u,
                            ...E
                        })
                      : d === p.h8.TEXT_CHANNEL || d === p.h8.VOICE_CHANNEL
                        ? (0, l.jsx)(U, {
                              channel: u,
                              ...E
                          })
                        : void (0, P.vE)(d);
            },
            [c, o, a, s, t, n, f]
        ),
        I = i.useRef(null),
        C = (0, g.Z)('forward-modal', I);
    return (0, l.jsx)(d.bG, {
        navigator: C,
        children: (0, l.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(m.YAO, {
                    scrollerRef: (e) => {
                        var n;
                        (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...u,
                    sections: _,
                    sectionHeight: 0,
                    renderRow: E,
                    rowHeight: h
                });
            }
        })
    });
}
