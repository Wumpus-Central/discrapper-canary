n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(311907),
    r = n(397927),
    o = n(442433),
    d = n(414798),
    c = n(110574),
    u = n(793574),
    h = n(688810),
    A = n(709066),
    g = n(87664),
    m = n(485947),
    p = n(111864),
    _ = n(342296),
    x = n(290863),
    f = n(994500),
    E = n(741961),
    C = n(287809),
    I = n(954571),
    S = n(203982),
    b = n(398219),
    N = n(427262),
    T = n(837921),
    j = n(652215),
    v = n(985018),
    y = n(701939);
let R = [],
    O = T.Ay.getEnableHardwareAcceleration();
function L(e) {
    let { user: t, channel: r, status: u, activities: h } = e,
        A = (0, a.bG)([E.A], () => null != E.A.getTypingUsers(r.id)[t.id]),
        m = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        I = (0, a.bG)([x.A], () => x.A.isMobileOnline(t.id)),
        b = (0, a.bG)([f.A], () => f.A.getNickname(t.id)),
        T = (0, g.A)(t.id),
        y = l.useRef(null),
        R = (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("69293")]).then(
                    n.bind(n, 228006),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t, channel: r });
            });
        },
        L = () => {
            let e = `@${N.Ay.getUserTag(t, { decoration: "never" })}`,
                n = `<@${t.id}>`;
            S._.dispatch(j.jej.TEXTAREA_FOCUS, { channelId: r.id }),
                S._.dispatchToLastSubscribed(j.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                d.A.startTyping(r.id);
        },
        D = (0, p.r)({ user: t }),
        [M, G] = l.useState(!1);
    return (0, i.jsx)(_.A, {
        targetElementRef: y,
        user: t,
        channelId: r.id,
        position: s.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: L,
        shouldShow: M,
        onRequestClose: () => G(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: l, ...s } = e;
            return (0, i.jsx)(
                c.A,
                {
                    ref: y,
                    user: t,
                    currentUser: m,
                    isOwner: t.id === r.ownerId,
                    ownerTooltipText: v.intl.string(v.t["MRXZ+x"]),
                    shouldAnimateStatus: O,
                    isTyping: A,
                    status: u,
                    activities: h,
                    applicationStream: T,
                    channel: r,
                    onContextMenu: R,
                    selected: M,
                    isMobile: I,
                    nick: b,
                    nameplate: D,
                    onClick: (e) => {
                        e.shiftKey ? L?.() : G((e) => !e);
                    },
                    onMouseDown: (e) => {
                        M ? e.stopPropagation() : l?.(e);
                    },
                    ...s,
                },
                t.id,
            );
        },
    });
}
function D(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function M(e) {
    let { channel: t } = e,
        n = C.default.getCurrentUser(),
        s = n?.isStaff(),
        { analyticsLocations: o } = (0, h.Ay)(u.A.MEMBER_LIST),
        { listItems: d } = (0, a.bG)(
            [f.A, C.default, x.A],
            () => {
                let e = (0, b.F)(t.recipients, C.default),
                    n = {};
                for (let t of e)
                    f.A.isFriend(t.id) || t.id === C.default.getCurrentUser()?.id
                        ? (n[t.id] = {
                              status: x.A.getStatus(t.id) ?? j.clD.OFFLINE,
                              activities: x.A.getActivities(t.id) ?? R,
                          })
                        : (n[t.id] = { status: j.clD.OFFLINE, activities: R });
                let i = [];
                for (let t of e) {
                    let e = { user: t, status: n[t.id].status, activities: n[t.id].activities };
                    i.push(e);
                }
                return { listItems: i };
            },
            [t],
            D,
        );
    l.useEffect(() => {
        I.default.track(j.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let c = s && d.every((e) => e.user.isStaff());
    return (0, i.jsx)(h.f5, {
        value: o,
        children: (0, i.jsx)("div", {
            className: y.kL,
            children: (0, i.jsx)("aside", {
                className: y.yg,
                children: (0, i.jsxs)(r.HOs, {
                    className: y.ol,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(m.A, {
                            className: y.lL,
                            children: [
                                `${v.intl.string(v.t["9Oq93m"])}—${d.length} `,
                                c && (0, i.jsx)(A.A, { type: A.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        d.map((e) =>
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
