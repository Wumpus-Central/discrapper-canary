n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(144144),
    d = n(276264),
    u = n(100527),
    p = n(906732),
    h = n(385499),
    f = n(545957),
    g = n(82295),
    m = n(850020),
    b = n(670188),
    _ = n(158776),
    y = n(699516),
    x = n(111583),
    O = n(594174),
    j = n(626135),
    v = n(585483),
    C = n(233870),
    I = n(51144),
    S = n(998502),
    E = n(981631),
    Z = n(388032),
    P = n(32482);
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
    R = S.ZP.getEnableHardwareAcceleration();
function w(e) {
    let { user: t, channel: s, status: u, activities: p } = e,
        h = (0, a.e7)([x.Z], () => null != x.Z.getTypingUsers(s.id)[t.id]),
        g = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
        j = (0, a.e7)([_.Z], () => _.Z.isMobileOnline(t.id)),
        C = (0, a.e7)([y.Z], () => y.Z.getNickname(t.id)),
        S = (0, f.Z)(t.id),
        P = i.useRef(null),
        N = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("98783"), n.e("49062")]).then(
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
            let e = "@".concat(I.ZP.getUserTag(t, { decoration: "never" })),
                n = "<@".concat(t.id, ">");
            v.S.dispatch(E.CkL.TEXTAREA_FOCUS, { channelId: s.id }),
                v.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n,
                }),
                c.Z.startTyping(s.id);
        },
        A = (0, m.K)({ user: t }),
        [D, L] = i.useState(!1);
    return (0, r.jsx)(b.Z, {
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
                d.Z,
                T(
                    {
                        ref: P,
                        user: t,
                        currentUser: g,
                        isOwner: t.id === s.ownerId,
                        ownerTooltipText: Z.intl.string(Z.t["MRXZ+x"]),
                        shouldAnimateStatus: R,
                        isTyping: h,
                        status: u,
                        activities: p,
                        applicationStream: S,
                        channel: s,
                        onContextMenu: N,
                        selected: D,
                        isMobile: j,
                        nick: C,
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
        n = O.default.getCurrentUser(),
        l = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: o } = (0, p.ZP)(u.Z.MEMBER_LIST),
        { listItems: c } = (0, a.e7)(
            [y.Z, O.default, _.Z],
            () => {
                let e = (0, C.T)(t.recipients, O.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    y.Z.isFriend(t.id) || t.id === (null == (r = O.default.getCurrentUser()) ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null != (i = _.Z.getStatus(t.id)) ? i : E.Skl.OFFLINE,
                              activities: null != (l = _.Z.getActivities(t.id)) ? l : N,
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
        j.default.track(E.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id,
        });
    }, [t.guild_id, t.id, t.type]);
    let d = l && c.every((e) => e.user.isStaff());
    return (0, r.jsx)(p.Gt, {
        value: o,
        children: (0, r.jsx)("div", {
            className: P.container,
            children: (0, r.jsx)("aside", {
                className: P.membersWrap,
                children: (0, r.jsxs)(s.Ttm, {
                    className: P.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(g.Z, {
                            className: P.membersGroup,
                            children: [
                                "".concat(Z.intl.string(Z.t["9Oq93m"]), "\u2014").concat(c.length, " "),
                                d && (0, r.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM }),
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
