n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(144144),
    d = n(100527),
    u = n(906732),
    p = n(385499),
    h = n(545957),
    f = n(82295),
    g = n(850020),
    m = n(670188),
    b = n(158776),
    y = n(699516),
    _ = n(111583),
    j = n(594174),
    O = n(626135),
    x = n(585483),
    v = n(233870),
    C = n(51144),
    I = n(998502),
    S = n(276264),
    E = n(981631),
    Z = n(388032),
    P = n(854641);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let N = [],
    R = I.ZP.getEnableHardwareAcceleration();
function w(e) {
    let { user: t, channel: s, status: d, activities: u } = e,
        p = (0, a.e7)([_.Z], () => null != _.Z.getTypingUsers(s.id)[t.id]),
        f = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        O = (0, a.e7)([b.Z], () => b.Z.isMobileOnline(t.id)),
        v = (0, a.e7)([y.Z], () => y.Z.getNickname(t.id)),
        I = (0, h.Z)(t.id),
        P = i.useRef(null),
        N = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("98783"), n.e("92775")]).then(
                    n.bind(n, 354589),
                );
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = T({}, n)),
                        (l = l =
                            {
                                user: t,
                                channel: s,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            });
        },
        w = () => {
            let e = "@".concat(C.ZP.getUserTag(t, { decoration: "never" })),
                n = "<@".concat(t.id, ">");
            x.S.dispatch(E.CkL.TEXTAREA_FOCUS, { channelId: s.id }),
                x.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n,
                }),
                c.Z.startTyping(s.id);
        },
        A = (0, g.K)({ user: t }),
        [D, L] = i.useState(!1);
    return (0, r.jsx)(m.Z, {
        targetElementRef: P,
        user: t,
        channelId: s.id,
        position: l.tq ? "window_center" : "left",
        spacing: 16,
        onShiftClick: w,
        shouldShow: D,
        onRequestClose: () => L(!1),
        children: (e) => {
            var { onClick: n, onMouseDown: i } = e,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(e, ["onClick", "onMouseDown"]);
            return (0, r.jsx)(
                S.Z,
                T(
                    {
                        ref: P,
                        user: t,
                        currentUser: f,
                        isOwner: t.id === s.ownerId,
                        ownerTooltipText: Z.intl.string(Z.t["MRXZ+/"]),
                        shouldAnimateStatus: R,
                        isTyping: p,
                        status: d,
                        activities: u,
                        applicationStream: I,
                        channel: s,
                        onContextMenu: N,
                        selected: D,
                        isMobile: O,
                        nick: v,
                        nameplate: A,
                        onClick: (e) => {
                            e.shiftKey ? null == w || w() : L((e) => !e);
                        },
                        onMouseDown: (e) => {
                            D ? e.stopPropagation() : null == i || i(e);
                        },
                    },
                    l,
                ),
                t.id,
            );
        },
    });
}
function A(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let r = e.listItems[n],
            i = t.listItems[n];
        if (r.user !== i.user || r.status !== i.status || r.activities !== i.activities) return !1;
    }
    return !0;
}
function D(e) {
    let { channel: t } = e,
        n = j.default.getCurrentUser(),
        l = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: o } = (0, u.ZP)(d.Z.MEMBER_LIST),
        { listItems: c } = (0, a.e7)(
            [y.Z, j.default, b.Z],
            () => {
                let e = (0, v.T)(t.recipients, j.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    y.Z.isFriend(t.id) || t.id === (null == (r = j.default.getCurrentUser()) ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null != (i = b.Z.getStatus(t.id)) ? i : E.Skl.OFFLINE,
                              activities: null != (l = b.Z.getActivities(t.id)) ? l : N,
                          })
                        : (n[t.id] = {
                              status: E.Skl.OFFLINE,
                              activities: N,
                          });
                }
                let a = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities,
                    };
                    a.push(e);
                }
                return { listItems: a };
            },
            [t],
            A,
        );
    i.useEffect(() => {
        O.default.track(E.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id,
        });
    }, [t.guild_id, t.id, t.type]);
    let h = l && c.every((e) => e.user.isStaff());
    return (0, r.jsx)(u.Gt, {
        value: o,
        children: (0, r.jsx)("div", {
            className: P.container,
            children: (0, r.jsx)("aside", {
                className: P.membersWrap,
                children: (0, r.jsxs)(s.Ttm, {
                    className: P.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(f.Z, {
                            className: P.membersGroup,
                            children: [
                                "".concat(Z.intl.string(Z.t["9Oq93t"]), "\u2014").concat(c.length, " "),
                                h && (0, r.jsx)(p.Z, { type: p.Z.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        c.map((e) =>
                            (0, r.jsx)(
                                w,
                                {
                                    user: e.user,
                                    status: e.status,
                                    activities: e.activities,
                                    channel: t,
                                },
                                e.user.id,
                            ),
                        ),
                    ],
                }),
            }),
        }),
    });
}
