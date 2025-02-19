n.d(t, { Z: () => x }), n(411104), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    f = n(239091),
    p = n(410575),
    _ = n(350810),
    h = n(751688),
    m = n(199902),
    g = n(594174),
    E = n(823379),
    v = n(5192),
    b = n(354459),
    y = n(981631),
    O = n(388032),
    S = n(82007);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 150;
function R(e, t) {
    switch (e) {
        case b.fO.ACTIVITY:
            return O.NW.formatToPlainString(O.t.TCM94e, { numUsers: t });
        case b.fO.STREAM:
            return O.NW.formatToPlainString(O.t.BR7Tnp, { numViewers: t });
        default:
            throw Error('Unknown participant type.');
    }
}
function P(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: o, channelId: s, handleUserContextMenu: l } = e,
        c = R(o, t.length);
    return (0, r.jsx)(d.VqE, {
        'aria-label': c,
        className: S.popoutWrapper,
        children: (0, r.jsxs)(d.Ttm, {
            className: S.scroller,
            children: [
                (0, r.jsx)(d.X6q, {
                    variant: 'heading-deprecated-12/semibold',
                    className: S.memberListHeader,
                    children: c
                }),
                (0, r.jsx)('div', {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            h.Z,
                            {
                                user: e,
                                guildId: null != i ? i : void 0,
                                channelId: s,
                                nick: v.ZP.getNickname(i, s, e),
                                className: a()(S.memberListItem, { [S.popoutDisabled]: n }),
                                textClassName: S.memberListItemText,
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
function w(e) {
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: o = 3, className: s, participantType: l } = e,
        c = R(l, t.length),
        u =
            t.length < o
                ? t.map((e) =>
                      (0, r.jsx)(
                          'div',
                          {
                              className: S.viewersTooltipItem,
                              children: v.ZP.getName(n, i, e)
                          },
                          e.id
                      )
                  )
                : c;
    return (0, r.jsx)(d.DY3, {
        text: u,
        'aria-label': c,
        children: (0, r.jsxs)('div', {
            className: a()(S.viewers, s),
            children: [
                (0, r.jsx)(d.tEF, {
                    size: 'xs',
                    color: 'currentColor',
                    className: S.viewersIcon
                }),
                (0, r.jsx)('span', {
                    'aria-hidden': 'true',
                    children: t.length
                })
            ]
        })
    });
}
let D = [];
function x(e) {
    let { channelId: t, guildId: o, participant: s, className: h, compact: v = !1, disableInteraction: O = !1, maxVisibleUsers: I = 3 } = e,
        N = (0, _.Z)(),
        [R, x] = i.useState(!1),
        L = i.useRef(new u.sW(C, () => x(!1))),
        M = (0, c.Wu)(
            [m.Z, g.default],
            () => {
                if (s.type === b.fO.STREAM) {
                    let e = m.Z.getViewerIds(s.id);
                    return e.length > 0 ? e.map((e) => g.default.getUser(e)).filter(E.lm) : D;
                }
                return s.type === b.fO.ACTIVITY && s.participants.length > 0
                    ? Array.from(s.participants)
                          .map((e) => g.default.getUser(e.userId))
                          .filter(E.lm)
                    : D;
            },
            [s]
        );
    i.useEffect(() => {
        N && (L.current.cancel(), x(!1));
    }, [N]);
    let k = i.useCallback(() => {
            L.current.cancel(), x(!0);
        }, []),
        j = i.useCallback(() => {
            L.current.delay();
        }, []),
        U = i.useCallback(
            (e, t) => {
                k(),
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('31327')]).then(n.bind(n, 881351));
                            return (n) => (0, r.jsx)(e, A(T({}, n), { user: t }));
                        },
                        { onClose: j }
                    );
            },
            [j, k]
        );
    if (0 === M.length) return null;
    if (v)
        return (0, r.jsx)(w, {
            maxVisibleUsers: I,
            users: M,
            guildId: o,
            channelId: t,
            className: h,
            participantType: s.type
        });
    let G = l()(M)
        .take(I)
        .map((e) =>
            (0, r.jsx)(
                d.qEK,
                {
                    src: e.getAvatarURL(o, 24),
                    'aria-label': e.username,
                    size: d.EFr.SIZE_24,
                    className: S.viewer
                },
                e.id
            )
        )
        .value();
    return (
        M.length > I &&
            (G[G.length - 1] = (0, r.jsxs)(
                'div',
                {
                    className: S.overflow,
                    children: ['+', M.length - I + 1]
                },
                'overflow'
            )),
        (0, r.jsx)(p.Z, {
            section: y.jXE.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)('div', {
                onMouseEnter: k,
                onMouseLeave: j,
                children: (0, r.jsx)(d.yRy, {
                    renderPopout: () =>
                        (0, r.jsx)(P, {
                            participantType: s.type,
                            handleUserContextMenu: U,
                            guildId: o,
                            channelId: t,
                            users: M,
                            disableInteraction: O
                        }),
                    shouldShow: R && !N,
                    position: 'top',
                    children: () =>
                        (0, r.jsx)('div', {
                            className: a()(S.viewers, h),
                            children: G
                        })
                })
            })
        })
    );
}
