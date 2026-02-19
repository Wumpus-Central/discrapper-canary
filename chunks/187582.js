"use strict";
n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(607399),
    r = n(311907),
    a = n(397927),
    o = n(442433),
    c = n(414798),
    d = n(110574),
    u = n(793574),
    h = n(688810),
    A = n(709066),
    p = n(87664),
    g = n(485947),
    m = n(111864),
    _ = n(342296),
    f = n(290863),
    x = n(994500),
    C = n(741961),
    E = n(287809),
    I = n(954571),
    b = n(203982),
    N = n(398219),
    S = n(427262),
    T = n(837921),
    v = n(652215),
    y = n(985018),
    j = n(701939);
let R = [],
    O = T.Ay.getEnableHardwareAcceleration();
function L(e) {
    let { user: t, channel: a, status: u, activities: h } = e,
        A = (0, r.bG)([C.A], () => null != C.A.getTypingUsers(a.id)[t.id]),
        g = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        I = (0, r.bG)([f.A], () => f.A.isMobileOnline(t.id)),
        N = (0, r.bG)([x.A], () => x.A.getNickname(t.id)),
        T = (0, p.A)(t.id),
        j = s.useRef(null),
        R = (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("69293")]).then(
                    n.bind(n, 228006),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t, channel: a });
            });
        },
        L = () => {
            let e = `@${S.Ay.getUserTag(t, { decoration: "never" })}`,
                n = `<@${t.id}>`;
            b._.dispatch(v.jej.TEXTAREA_FOCUS, { channelId: a.id }),
                b._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                c.A.startTyping(a.id);
        },
        M = (0, m.r)({ user: t }),
        [D, G] = s.useState(!1);
    return (0, i.jsx)(_.A, {
        targetElementRef: j,
        user: t,
        channelId: a.id,
        position: l.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: L,
        shouldShow: D,
        onRequestClose: () => G(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: s, ...l } = e;
            return (0, i.jsx)(
                d.A,
                {
                    ref: j,
                    user: t,
                    currentUser: g,
                    isOwner: t.id === a.ownerId,
                    ownerTooltipText: y.intl.string(y.t["MRXZ+x"]),
                    shouldAnimateStatus: O,
                    isTyping: A,
                    status: u,
                    activities: h,
                    applicationStream: T,
                    channel: a,
                    onContextMenu: R,
                    selected: D,
                    isMobile: I,
                    nick: N,
                    nameplate: M,
                    onClick: (e) => {
                        e.shiftKey ? L?.() : G((e) => !e);
                    },
                    onMouseDown: (e) => {
                        D ? e.stopPropagation() : s?.(e);
                    },
                    ...l,
                },
                t.id,
            );
        },
    });
}
function M(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            s = t.listItems[n];
        if (i.user !== s.user || i.status !== s.status || i.activities !== s.activities) return !1;
    }
    return !0;
}
function D(e) {
    let { channel: t } = e,
        n = E.default.getCurrentUser(),
        l = n?.isStaff(),
        { analyticsLocations: o } = (0, h.Ay)(u.A.MEMBER_LIST),
        { listItems: c } = (0, r.bG)(
            [x.A, E.default, f.A],
            () => {
                let e = (0, N.F)(t.recipients, E.default),
                    n = {};
                for (let t of e)
                    x.A.isFriend(t.id) || t.id === E.default.getCurrentUser()?.id
                        ? (n[t.id] = {
                              status: f.A.getStatus(t.id) ?? v.clD.OFFLINE,
                              activities: f.A.getActivities(t.id) ?? R,
                          })
                        : (n[t.id] = { status: v.clD.OFFLINE, activities: R });
                let i = [];
                for (let t of e) {
                    let e = { user: t, status: n[t.id].status, activities: n[t.id].activities };
                    i.push(e);
                }
                return { listItems: i };
            },
            [t],
            M,
        );
    s.useEffect(() => {
        I.default.track(v.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let d = l && c.every((e) => e.user.isStaff());
    return (0, i.jsx)(h.f5, {
        value: o,
        children: (0, i.jsx)("div", {
            className: j.kL,
            children: (0, i.jsx)("aside", {
                className: j.yg,
                children: (0, i.jsxs)(a.HOs, {
                    className: j.ol,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(g.A, {
                            className: j.lL,
                            children: [
                                `${y.intl.string(y.t["9Oq93m"])}—${c.length} `,
                                d && (0, i.jsx)(A.A, { type: A.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        c.map((e) =>
                            (0, i.jsx)(
                                L,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                    ],
                }),
            }),
        }),
    });
}
