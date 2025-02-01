n.d(t, { Z: () => R }), n(411104), n(47120);
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
    p = n(751688),
    h = n(199902),
    m = n(594174),
    g = n(823379),
    E = n(5192),
    v = n(354459),
    y = n(981631),
    I = n(388032),
    T = n(140369);
let b = 150;
function S(e, t) {
    switch (e) {
        case v.fO.ACTIVITY:
            return I.intl.formatToPlainString(I.t.TCM94e, { numUsers: t });
        case v.fO.STREAM:
            return I.intl.formatToPlainString(I.t.BR7Tnp, { numViewers: t });
        default:
            throw Error('Unknown participant type.');
    }
}
function A(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: a, channelId: o, handleUserContextMenu: l } = e,
        u = S(a, t.length);
    return (0, i.jsx)(d.VqE, {
        'aria-label': u,
        className: T.popoutWrapper,
        children: (0, i.jsxs)(d.Ttm, {
            className: T.scroller,
            children: [
                (0, i.jsx)(d.X6q, {
                    variant: 'heading-deprecated-12/semibold',
                    className: T.memberListHeader,
                    children: u
                }),
                (0, i.jsx)('div', {
                    children: t.map((e) =>
                        (0, i.jsx)(
                            p.Z,
                            {
                                user: e,
                                guildId: null != r ? r : void 0,
                                channelId: o,
                                nick: E.ZP.getNickname(r, o, e),
                                className: s()(T.memberListItem, { [T.popoutDisabled]: n }),
                                textClassName: T.memberListItemText,
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
function N(e) {
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: a = 3, className: o, participantType: l } = e,
        u = S(l, t.length),
        c =
            t.length < a
                ? t.map((e) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: T.viewersTooltipItem,
                              children: E.ZP.getName(n, r, e)
                          },
                          e.id
                      )
                  )
                : u;
    return (0, i.jsx)(d.DY3, {
        text: c,
        'aria-label': u,
        children: (0, i.jsxs)('div', {
            className: s()(T.viewers, o),
            children: [
                (0, i.jsx)(d.tEF, {
                    size: 'xs',
                    color: 'currentColor',
                    className: T.viewersIcon
                }),
                (0, i.jsx)('span', {
                    'aria-hidden': 'true',
                    children: t.length
                })
            ]
        })
    });
}
let C = [];
function R(e) {
    let { channelId: t, guildId: a, participant: o, className: p, compact: E = !1, disableInteraction: I = !1, maxVisibleUsers: S = 3 } = e,
        [R, O] = r.useState(!1),
        D = r.useRef(new c.sW(b, () => O(!1))),
        x = (0, u.Wu)(
            [h.Z, m.default],
            () => {
                if (o.type === v.fO.STREAM) {
                    let e = h.Z.getViewerIds(o.id);
                    return e.length > 0 ? e.map((e) => m.default.getUser(e)).filter(g.lm) : C;
                }
                return o.type === v.fO.ACTIVITY && o.participants.length > 0
                    ? Array.from(o.participants)
                          .map((e) => m.default.getUser(e.userId))
                          .filter(g.lm)
                    : C;
            },
            [o]
        ),
        L = r.useCallback(() => {
            D.current.cancel(), O(!0);
        }, []),
        P = r.useCallback(() => {
            D.current.delay();
        }, []),
        w = r.useCallback(
            (e, t) => {
                L(),
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t
                                });
                        },
                        { onClose: P }
                    );
            },
            [P, L]
        );
    if (0 === x.length) return null;
    if (E)
        return (0, i.jsx)(N, {
            maxVisibleUsers: S,
            users: x,
            guildId: a,
            channelId: t,
            className: p,
            participantType: o.type
        });
    let M = l()(x)
        .take(S)
        .map((e) =>
            (0, i.jsx)(
                d.qEK,
                {
                    src: e.getAvatarURL(a, 24),
                    'aria-label': e.username,
                    size: d.EFr.SIZE_24,
                    className: T.viewer
                },
                e.id
            )
        )
        .value();
    return (
        x.length > S &&
            (M[M.length - 1] = (0, i.jsxs)(
                'div',
                {
                    className: T.overflow,
                    children: ['+', x.length - S + 1]
                },
                'overflow'
            )),
        (0, i.jsx)(_.Z, {
            section: y.jXE.STREAM_VIEWER_POPOUT,
            children: (0, i.jsx)('div', {
                onMouseEnter: L,
                onMouseLeave: P,
                children: (0, i.jsx)(d.yRy, {
                    renderPopout: () =>
                        (0, i.jsx)(A, {
                            participantType: o.type,
                            handleUserContextMenu: w,
                            guildId: a,
                            channelId: t,
                            users: x,
                            disableInteraction: I
                        }),
                    shouldShow: R,
                    position: 'top',
                    children: () =>
                        (0, i.jsx)('div', {
                            className: s()(T.viewers, p),
                            children: M
                        })
                })
            })
        })
    );
}
