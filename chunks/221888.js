n.d(t, { Z: () => O }), n(411104), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(846519),
    d = n(481060),
    f = n(239091),
    _ = n(410575),
    p = n(350810),
    h = n(751688),
    m = n(199902),
    g = n(594174),
    E = n(823379),
    v = n(5192),
    y = n(354459),
    I = n(981631),
    T = n(388032),
    b = n(290464);
let S = 150;
function A(e, t) {
    switch (e) {
        case y.fO.ACTIVITY:
            return T.intl.formatToPlainString(T.t.TCM94e, { numUsers: t });
        case y.fO.STREAM:
            return T.intl.formatToPlainString(T.t.BR7Tnp, { numViewers: t });
        default:
            throw Error('Unknown participant type.');
    }
}
function N(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: a, channelId: o, handleUserContextMenu: l } = e,
        u = A(a, t.length);
    return (0, i.jsx)(d.VqE, {
        'aria-label': u,
        className: b.popoutWrapper,
        children: (0, i.jsxs)(d.Ttm, {
            className: b.scroller,
            children: [
                (0, i.jsx)(d.X6q, {
                    variant: 'heading-deprecated-12/semibold',
                    className: b.memberListHeader,
                    children: u
                }),
                (0, i.jsx)('div', {
                    children: t.map((e) =>
                        (0, i.jsx)(
                            h.Z,
                            {
                                user: e,
                                guildId: null != r ? r : void 0,
                                channelId: o,
                                nick: v.ZP.getNickname(r, o, e),
                                className: s()(b.memberListItem, { [b.popoutDisabled]: n }),
                                textClassName: b.memberListItemText,
                                disablePopout: n,
                                onContextMenu: (t) => (n ? null : l(t, e))
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    });
}
function C(e) {
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: a = 3, className: o, participantType: l } = e,
        u = A(l, t.length),
        c =
            t.length < a
                ? t.map((e) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: b.viewersTooltipItem,
                              children: v.ZP.getName(n, r, e)
                          },
                          e.id
                      )
                  )
                : u;
    return (0, i.jsx)(d.DY3, {
        text: c,
        'aria-label': u,
        children: (0, i.jsxs)('div', {
            className: s()(b.viewers, o),
            children: [
                (0, i.jsx)(d.tEF, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.viewersIcon
                }),
                (0, i.jsx)('span', {
                    'aria-hidden': 'true',
                    children: t.length
                })
            ]
        })
    });
}
let R = [];
function O(e) {
    let { channelId: t, guildId: a, participant: o, className: h, compact: v = !1, disableInteraction: T = !1, maxVisibleUsers: A = 3 } = e,
        O = (0, p.Z)(),
        [D, L] = r.useState(!1),
        x = r.useRef(new c.sW(S, () => L(!1))),
        P = (0, u.Wu)(
            [m.Z, g.default],
            () => {
                if (o.type === y.fO.STREAM) {
                    let e = m.Z.getViewerIds(o.id);
                    return e.length > 0 ? e.map((e) => g.default.getUser(e)).filter(E.lm) : R;
                }
                return o.type === y.fO.ACTIVITY && o.participants.length > 0
                    ? Array.from(o.participants)
                          .map((e) => g.default.getUser(e.userId))
                          .filter(E.lm)
                    : R;
            },
            [o]
        );
    r.useEffect(() => {
        O && (x.current.cancel(), L(!1));
    }, [O]);
    let w = r.useCallback(() => {
            x.current.cancel(), L(!0);
        }, []),
        M = r.useCallback(() => {
            x.current.delay();
        }, []),
        k = r.useCallback(
            (e, t) => {
                w(),
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('34272')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t
                                });
                        },
                        { onClose: M }
                    );
            },
            [M, w]
        );
    if (0 === P.length) return null;
    if (v)
        return (0, i.jsx)(C, {
            maxVisibleUsers: A,
            users: P,
            guildId: a,
            channelId: t,
            className: h,
            participantType: o.type
        });
    let U = l()(P)
        .take(A)
        .map((e) =>
            (0, i.jsx)(
                d.qEK,
                {
                    src: e.getAvatarURL(a, 24),
                    'aria-label': e.username,
                    size: d.EFr.SIZE_24,
                    className: b.viewer
                },
                e.id
            )
        )
        .value();
    return (
        P.length > A &&
            (U[U.length - 1] = (0, i.jsxs)(
                'div',
                {
                    className: b.overflow,
                    children: ['+', P.length - A + 1]
                },
                'overflow'
            )),
        (0, i.jsx)(_.Z, {
            section: I.jXE.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)('div', {
                onMouseEnter: w,
                onMouseLeave: M,
                children: (0, i.jsx)(d.yRy, {
                    renderPopout: () =>
                        (0, i.jsx)(N, {
                            participantType: o.type,
                            handleUserContextMenu: k,
                            guildId: a,
                            channelId: t,
                            users: P,
                            disableInteraction: T
                        }),
                    shouldShow: D && !O,
                    position: 'top',
                    children: () =>
                        (0, i.jsx)('div', {
                            className: s()(b.viewers, h),
                            children: U
                        })
                })
            })
        })
    );
}
