n.d(t, { A: () => T });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(378939),
    u = n(964486),
    d = n(475743),
    f = n(323073),
    p = n(202803),
    h = n(636922),
    b = n(835835),
    g = n(566908),
    m = n(253932),
    A = n(734057),
    y = n(517019),
    O = n(309010),
    j = n(187508),
    v = n(576456),
    x = n(572448),
    E = n(963702),
    _ = n(652215),
    C = n(985018),
    S = n(318136);
let I = {
    offset: {
        left: 4,
        right: -12,
    },
};
function N(e, t, n) {
    let r = t ? j.Ay.guildFilter : null,
        l = t ? j.Ay.roleFilter : null,
        i = t ? j.Ay.everyoneFilter : null,
        a = null;
    null != e && null != r && (a = r === _.KE7.ALL_SERVERS ? null : e.getGuildId()),
        c.A.fetchRecentMentions({
            before: n,
            limit: _.Ue3,
            guildId: a,
            roles: l,
            everyone: i,
        });
}
function T(e) {
    let { onJump: t } = e,
        n = (0, s.bG)([A.A, O.A], () => A.A.getChannel(O.A.getChannelId())),
        {
            messages: i,
            hasMore: o,
            loading: f,
            guildFilter: h,
            roleFilter: m,
            everyoneFilter: y,
        } = (0, s.cf)([j.Ay], () => ({
            messages: j.Ay.getMentions(),
            hasMore: j.Ay.hasMore,
            loading: j.Ay.loading,
            guildFilter: j.Ay.guildFilter,
            roleFilter: j.Ay.roleFilter,
            everyoneFilter: j.Ay.everyoneFilter,
        })),
        v = (0, g.Sc)({ location: "RecentMentions" }),
        x = (0, d.A)(h),
        E = (0, d.A)(m),
        I = (0, d.A)(y);
    l.useEffect(() => {
        j.Ay.hasLoadedEver
            ? ((null != x && h !== x) || (null != E && m !== E) || (null != I && y !== I)) && N(n, !0)
            : N(n, !0);
    }, [x, h, E, m, I, y, n, !0]),
        (0, u.Ay)(() => {
            (null == i ? void 0 : i.some(p.$r)) && (c.A.clearMentions(), N(n, !0));
        }),
        l.useEffect(
            () => () => {
                c.A.truncateMentions(_.Ue3);
            },
            [],
        );
    let T = l.useCallback(() => null, []);
    return (0, r.jsx)(b.Ay, {
        className: a()(S.sH, { [S.qC]: v }),
        scrollerClassName: S.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: i,
        loading: f,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            N(n, !0, null != i && i.length > 0 ? i[i.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: T,
        renderEmptyState: R,
        renderMessage: P,
        "aria-label": C.intl.string(C.t.jbV6MM),
        listName: "recents",
    });
}
function P(e, t) {
    return [
        (0, r.jsx)(
            w,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0,
            },
            e.id,
        ),
    ];
}
function w(e) {
    let { message: t, gotoMessage: n, dismissible: l } = e;
    if (null == t) return null;
    let i = A.A.getChannel(t.channel_id);
    if (null == i || (0, f.Jm)(i) || (0, f.$v)(i)) return null;
    let a = y.A.didAgree(i.getGuildId()),
        s = !!(0, f.Gc)(i) && !a;
    return (0, r.jsxs)("div", {
        className: S.kL,
        children: [
            (0, r.jsx)(x.A, {
                channel: i,
                gotoChannel: n,
                children:
                    null != l
                        ? (0, r.jsx)(o.JnF, {
                              size: "sm",
                              onClick: () => c.A.deleteRecentMention(t.id),
                          })
                        : null,
            }),
            (0, r.jsxs)("div", {
                className: S.zC,
                children: [
                    (0, r.jsx)(v.A, {
                        className: S.QT,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        h.A,
                        {
                            message: t,
                            channel: i,
                            className: S.iU,
                            hideAccessories: s,
                            compact: m.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: I,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function R() {
    return (0, r.jsx)(E.A, {
        Icon: o.XxR,
        header: C.intl.string(C.t.bgDz74),
        tip: C.intl.string(C.t.NS15vk),
    });
}
