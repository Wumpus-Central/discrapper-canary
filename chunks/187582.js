n.d(t, { A: () => D }), n(321073);
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
    _ = n(87664),
    m = n(449582),
    p = n(485947),
    g = n(342296),
    f = n(290863),
    E = n(994500),
    x = n(741961),
    I = n(287809),
    C = n(954571),
    N = n(203982),
    T = n(398219),
    S = n(427262),
    b = n(837921),
    y = n(652215),
    v = n(985018),
    j = n(922936);
let R = [],
    O = b.Ay.getEnableHardwareAcceleration();
function L(e) {
    let { user: t, channel: r, status: u, activities: h } = e,
        A = (0, a.bG)([x.A], () => null != x.A.getTypingUsers(r.id)[t.id]),
        p = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        C = (0, a.bG)([f.A], () => f.A.isMobileOnline(t.id)),
        T = (0, a.bG)([E.A], () => E.A.getNickname(t.id)),
        b = (0, _.A)(t.id),
        j = l.useRef(null),
        R = (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("62891"), n.e("30915")]).then(
                    n.bind(n, 228006),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: t, channel: r });
            });
        },
        L = () => {
            let e = `@${S.Ay.getUserTag(t, { decoration: "never" })}`,
                n = `<@${t.id}>`;
            N._.dispatch(y.jej.TEXTAREA_FOCUS, { channelId: r.id }),
                N._.dispatchToLastSubscribed(y.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                d.A.startTyping(r.id);
        },
        M = (0, m.r)({ user: t }),
        [D, U] = l.useState(!1);
    return (0, i.jsx)(g.default, {
        targetElementRef: j,
        user: t,
        channelId: r.id,
        position: s.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: L,
        shouldShow: D,
        onRequestClose: () => U(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: l, ...s } = e;
            return (0, i.jsx)(
                c.A,
                {
                    ref: j,
                    user: t,
                    currentUser: p,
                    isOwner: t.id === r.ownerId,
                    ownerTooltipText: v.intl.string(v.t["MRXZ+x"]),
                    shouldAnimateStatus: O,
                    isTyping: A,
                    status: u,
                    activities: h,
                    applicationStream: b,
                    channel: r,
                    onContextMenu: R,
                    selected: D,
                    isMobile: C,
                    nick: T,
                    nameplate: M,
                    onClick: (e) => {
                        e.shiftKey ? L?.() : U((e) => !e);
                    },
                    onMouseDown: (e) => {
                        D ? e.stopPropagation() : l?.(e);
                    },
                    ...s,
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
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function D(e) {
    let { channel: t } = e,
        n = I.default.getCurrentUser(),
        s = n?.isStaff(),
        { analyticsLocations: o } = (0, h.Ay)(u.A.MEMBER_LIST),
        { listItems: d } = (0, a.bG)(
            [E.A, I.default, f.A],
            () => {
                let e = (0, T.F)(t.recipients, I.default),
                    n = {};
                for (let t of e)
                    E.A.isFriend(t.id) || t.id === I.default.getCurrentUser()?.id
                        ? (n[t.id] = {
                              status: f.A.getStatus(t.id) ?? y.clD.OFFLINE,
                              activities: f.A.getActivities(t.id) ?? R,
                          })
                        : (n[t.id] = { status: y.clD.OFFLINE, activities: R });
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
    l.useEffect(() => {
        C.default.track(y.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let c = s && d.every((e) => e.user.isStaff());
    return (0, i.jsx)(h.f5, {
        value: o,
        children: (0, i.jsx)("div", {
            className: j.kL,
            children: (0, i.jsx)("aside", {
                className: j.yg,
                children: (0, i.jsxs)(r.HOs, {
                    className: j.ol,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(p.A, {
                            className: j.lL,
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
