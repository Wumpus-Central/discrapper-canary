n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    c = n(144144),
    u = n(276264),
    d = n(100527),
    p = n(906732),
    f = n(385499),
    h = n(545957),
    g = n(82295),
    m = n(850020),
    b = n(670188),
    y = n(158776),
    v = n(699516),
    O = n(111583),
    j = n(594174),
    x = n(626135),
    C = n(585483),
    E = n(233870),
    S = n(51144),
    _ = n(998502),
    I = n(981631),
    P = n(388032),
    Z = n(791486);
function N(e) {
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
let T = [],
    A = _.ZP.getEnableHardwareAcceleration();
function w(e) {
    let { user: t, channel: o, status: d, activities: p } = e,
        f = (0, a.e7)([O.Z], () => null != O.Z.getTypingUsers(o.id)[t.id]),
        g = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        x = (0, a.e7)([y.Z], () => y.Z.isMobileOnline(t.id)),
        E = (0, a.e7)([v.Z], () => v.Z.getNickname(t.id)),
        _ = (0, h.Z)(t.id),
        Z = i.useRef(null),
        T = (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("4040"), n.e("60677"), n.e("60655")]).then(
                    n.bind(n, 354589),
                );
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = N({}, n)),
                        (l = l =
                            {
                                user: t,
                                channel: o,
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
            let e = "@".concat(S.ZP.getUserTag(t, { decoration: "never" })),
                n = "<@".concat(t.id, ">");
            C.S.dispatch(I.CkL.TEXTAREA_FOCUS, { channelId: o.id }),
                C.S.dispatchToLastSubscribed(I.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n,
                }),
                c.Z.startTyping(o.id);
        },
        R = (0, m.K)({ user: t }),
        [D, M] = i.useState(!1);
    return (0, r.jsx)(b.Z, {
        targetElementRef: Z,
        user: t,
        channelId: o.id,
        position: l.tq ? "window_center" : "left",
        spacing: 16,
        onShiftClick: w,
        shouldShow: D,
        onRequestClose: () => M(!1),
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
                u.Z,
                N(
                    {
                        ref: Z,
                        user: t,
                        currentUser: g,
                        isOwner: t.id === o.ownerId,
                        ownerTooltipText: P.intl.string(P.t["MRXZ+x"]),
                        shouldAnimateStatus: A,
                        isTyping: f,
                        status: d,
                        activities: p,
                        applicationStream: _,
                        channel: o,
                        onContextMenu: T,
                        selected: D,
                        isMobile: x,
                        nick: E,
                        nameplate: R,
                        onClick: (e) => {
                            e.shiftKey ? null == w || w() : M((e) => !e);
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
function R(e, t) {
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
        { analyticsLocations: s } = (0, p.ZP)(d.Z.MEMBER_LIST),
        { listItems: c } = (0, a.e7)(
            [v.Z, j.default, y.Z],
            () => {
                let e = (0, E.T)(t.recipients, j.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    v.Z.isFriend(t.id) || t.id === (null == (r = j.default.getCurrentUser()) ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null != (i = y.Z.getStatus(t.id)) ? i : I.Skl.OFFLINE,
                              activities: null != (l = y.Z.getActivities(t.id)) ? l : T,
                          })
                        : (n[t.id] = {
                              status: I.Skl.OFFLINE,
                              activities: T,
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
            R,
        );
    i.useEffect(() => {
        x.default.track(I.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id,
        });
    }, [t.guild_id, t.id, t.type]);
    let u = l && c.every((e) => e.user.isStaff());
    return (0, r.jsx)(p.Gt, {
        value: s,
        children: (0, r.jsx)("div", {
            className: Z.container,
            children: (0, r.jsx)("aside", {
                className: Z.membersWrap,
                children: (0, r.jsxs)(o.Ttm, {
                    className: Z.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(g.Z, {
                            className: Z.membersGroup,
                            children: [
                                "".concat(P.intl.string(P.t["9Oq93m"]), "\u2014").concat(c.length, " "),
                                u && (0, r.jsx)(f.Z, { type: f.Z.Types.STAFF_ONLY_DM }),
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
