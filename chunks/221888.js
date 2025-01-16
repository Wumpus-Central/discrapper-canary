r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    _ = r(846519),
    h = r(481060),
    p = r(239091),
    m = r(410575),
    g = r(751688),
    E = r(199902),
    v = r(594174),
    I = r(823379),
    T = r(5192),
    b = r(354459),
    y = r(981631),
    S = r(388032),
    A = r(140369);
let N = 150;
function C(e, n) {
    switch (e) {
        case b.fO.ACTIVITY:
            return S.intl.formatToPlainString(S.t.TCM94e, { numUsers: n });
        case b.fO.STREAM:
            return S.intl.formatToPlainString(S.t.BR7Tnp, { numViewers: n });
        default:
            throw Error('Unknown participant type.');
    }
}
function R(e) {
    let { users: n, disableInteraction: r, guildId: i, participantType: a, channelId: o, handleUserContextMenu: l } = e,
        c = C(a, n.length);
    return (0, s.jsx)(h.Dialog, {
        'aria-label': c,
        className: A.popoutWrapper,
        children: (0, s.jsxs)(h.Scroller, {
            className: A.scroller,
            children: [
                (0, s.jsx)(h.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: A.memberListHeader,
                    children: c
                }),
                (0, s.jsx)('div', {
                    children: n.map((e) =>
                        (0, s.jsx)(
                            g.Z,
                            {
                                guildId: null != i ? i : void 0,
                                className: u()(A.memberListItem, { [A.popoutDisabled]: r }),
                                textClassName: A.memberListItemText,
                                user: e,
                                disablePopout: r,
                                nick: T.ZP.getNickname(i, o, e),
                                onContextMenu: (n) => (r ? null : l(n, e))
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    });
}
function O(e) {
    let { users: n, guildId: r, channelId: i, maxVisibleUsers: a = 3, className: o, participantType: l } = e,
        c = C(l, n.length),
        d =
            n.length < a
                ? n.map((e) =>
                      (0, s.jsx)(
                          'div',
                          {
                              className: A.viewersTooltipItem,
                              children: T.ZP.getName(r, i, e)
                          },
                          e.id
                      )
                  )
                : c;
    return (0, s.jsx)(h.TooltipContainer, {
        text: d,
        'aria-label': c,
        children: (0, s.jsxs)('div', {
            className: u()(A.viewers, o),
            children: [
                (0, s.jsx)(h.EyeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.viewersIcon
                }),
                (0, s.jsx)('span', {
                    'aria-hidden': 'true',
                    children: n.length
                })
            ]
        })
    });
}
let D = [];
function L(e) {
    let { channelId: n, guildId: i, participant: a, className: l, compact: c = !1, disableInteraction: g = !1, maxVisibleUsers: T = 3 } = e,
        [S, C] = o.useState(!1),
        L = o.useRef(new _.sW(N, () => C(!1))),
        x = (0, f.Wu)(
            [E.Z, v.default],
            () => {
                if (a.type === b.fO.STREAM) {
                    let e = E.Z.getViewerIds(a.id);
                    return e.length > 0 ? e.map((e) => v.default.getUser(e)).filter(I.lm) : D;
                }
                return a.type === b.fO.ACTIVITY
                    ? a.participants.length > 0
                        ? Array.from(a.participants)
                              .map((e) => v.default.getUser(e.userId))
                              .filter(I.lm)
                        : D
                    : D;
            },
            [a]
        ),
        w = o.useCallback(() => {
            L.current.cancel(), C(!0);
        }, []),
        P = o.useCallback(() => {
            L.current.delay();
        }, []),
        M = o.useCallback(
            (e, n) => {
                w(),
                    (0, p.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('351')]).then(r.bind(r, 881351));
                            return (r) =>
                                (0, s.jsx)(e, {
                                    ...r,
                                    user: n
                                });
                        },
                        { onClose: P }
                    );
            },
            [P, w]
        );
    if (0 === x.length) return null;
    if (c)
        return (0, s.jsx)(O, {
            maxVisibleUsers: T,
            users: x,
            guildId: i,
            channelId: n,
            className: l,
            participantType: a.type
        });
    let k = d()(x)
        .take(T)
        .map((e) =>
            (0, s.jsx)(
                h.Avatar,
                {
                    src: e.getAvatarURL(i, 24),
                    'aria-label': e.username,
                    size: h.AvatarSizes.SIZE_24,
                    className: A.viewer
                },
                e.id
            )
        )
        .value();
    return (
        x.length > T &&
            (k[k.length - 1] = (0, s.jsxs)(
                'div',
                {
                    className: A.overflow,
                    children: ['+', x.length - T + 1]
                },
                'overflow'
            )),
        (0, s.jsx)(m.Z, {
            section: y.jXE.STREAM_VIEWER_POPOUT,
            children: (0, s.jsx)('div', {
                onMouseEnter: w,
                onMouseLeave: P,
                children: (0, s.jsx)(h.Popout, {
                    renderPopout: () =>
                        (0, s.jsx)(R, {
                            participantType: a.type,
                            handleUserContextMenu: M,
                            guildId: i,
                            channelId: n,
                            users: x,
                            disableInteraction: g
                        }),
                    shouldShow: S,
                    position: 'top',
                    children: () =>
                        (0, s.jsx)('div', {
                            className: u()(A.viewers, l),
                            children: k
                        })
                })
            })
        })
    );
}
