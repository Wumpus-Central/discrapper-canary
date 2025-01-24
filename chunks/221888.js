r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    p = r(846519),
    h = r(481060),
    _ = r(239091),
    m = r(410575),
    g = r(751688),
    E = r(199902),
    v = r(594174),
    y = r(823379),
    b = r(5192),
    I = r(354459),
    T = r(981631),
    S = r(388032),
    A = r(140369);
let C = 150;
function N(e, n) {
    switch (e) {
        case I.fO.ACTIVITY:
            return S.intl.formatToPlainString(S.t.TCM94e, { numUsers: n });
        case I.fO.STREAM:
            return S.intl.formatToPlainString(S.t.BR7Tnp, { numViewers: n });
        default:
            throw Error('Unknown participant type.');
    }
}
function R(e) {
    let { users: n, disableInteraction: r, guildId: i, participantType: a, channelId: s, handleUserContextMenu: l } = e,
        c = N(a, n.length);
    return (0, o.jsx)(h.Dialog, {
        'aria-label': c,
        className: A.popoutWrapper,
        children: (0, o.jsxs)(h.Scroller, {
            className: A.scroller,
            children: [
                (0, o.jsx)(h.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: A.memberListHeader,
                    children: c
                }),
                (0, o.jsx)('div', {
                    children: n.map((e) =>
                        (0, o.jsx)(
                            g.Z,
                            {
                                guildId: null != i ? i : void 0,
                                className: u()(A.memberListItem, { [A.popoutDisabled]: r }),
                                textClassName: A.memberListItemText,
                                user: e,
                                disablePopout: r,
                                nick: b.ZP.getNickname(i, s, e),
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
    let { users: n, guildId: r, channelId: i, maxVisibleUsers: a = 3, className: s, participantType: l } = e,
        c = N(l, n.length),
        d =
            n.length < a
                ? n.map((e) =>
                      (0, o.jsx)(
                          'div',
                          {
                              className: A.viewersTooltipItem,
                              children: b.ZP.getName(r, i, e)
                          },
                          e.id
                      )
                  )
                : c;
    return (0, o.jsx)(h.TooltipContainer, {
        text: d,
        'aria-label': c,
        children: (0, o.jsxs)('div', {
            className: u()(A.viewers, s),
            children: [
                (0, o.jsx)(h.EyeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.viewersIcon
                }),
                (0, o.jsx)('span', {
                    'aria-hidden': 'true',
                    children: n.length
                })
            ]
        })
    });
}
let D = [];
function L(e) {
    let { channelId: n, guildId: i, participant: a, className: l, compact: c = !1, disableInteraction: g = !1, maxVisibleUsers: b = 3 } = e,
        [S, N] = s.useState(!1),
        L = s.useRef(new p.sW(C, () => N(!1))),
        x = (0, f.Wu)(
            [E.Z, v.default],
            () => {
                if (a.type === I.fO.STREAM) {
                    let e = E.Z.getViewerIds(a.id);
                    return e.length > 0 ? e.map((e) => v.default.getUser(e)).filter(y.lm) : D;
                }
                return a.type === I.fO.ACTIVITY
                    ? a.participants.length > 0
                        ? Array.from(a.participants)
                              .map((e) => v.default.getUser(e.userId))
                              .filter(y.lm)
                        : D
                    : D;
            },
            [a]
        ),
        w = s.useCallback(() => {
            L.current.cancel(), N(!0);
        }, []),
        P = s.useCallback(() => {
            L.current.delay();
        }, []),
        M = s.useCallback(
            (e, n) => {
                w(),
                    (0, _.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('10125')]).then(r.bind(r, 881351));
                            return (r) =>
                                (0, o.jsx)(e, {
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
        return (0, o.jsx)(O, {
            maxVisibleUsers: b,
            users: x,
            guildId: i,
            channelId: n,
            className: l,
            participantType: a.type
        });
    let k = d()(x)
        .take(b)
        .map((e) =>
            (0, o.jsx)(
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
        x.length > b &&
            (k[k.length - 1] = (0, o.jsxs)(
                'div',
                {
                    className: A.overflow,
                    children: ['+', x.length - b + 1]
                },
                'overflow'
            )),
        (0, o.jsx)(m.Z, {
            section: T.jXE.STREAM_VIEWER_POPOUT,
            children: (0, o.jsx)('div', {
                onMouseEnter: w,
                onMouseLeave: P,
                children: (0, o.jsx)(h.Popout, {
                    renderPopout: () =>
                        (0, o.jsx)(R, {
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
                        (0, o.jsx)('div', {
                            className: u()(A.viewers, l),
                            children: k
                        })
                })
            })
        })
    );
}
