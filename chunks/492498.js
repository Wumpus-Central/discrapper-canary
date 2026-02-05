n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(378939),
    c = n(964486),
    u = n(475743),
    h = n(323073),
    A = n(202803),
    g = n(636922),
    m = n(835835),
    p = n(566908),
    _ = n(253932),
    x = n(734057),
    f = n(517019),
    E = n(309010),
    C = n(187508),
    I = n(576456),
    S = n(572448),
    b = n(963702),
    N = n(652215),
    T = n(985018),
    j = n(318136);
let v = { offset: { left: 4, right: -12 } };
function y(e, t, n) {
    let i = t ? C.Ay.guildFilter : null,
        l = t ? C.Ay.roleFilter : null,
        s = t ? C.Ay.everyoneFilter : null,
        a = null;
    null != e && null != i && (a = i === N.KE7.ALL_SERVERS ? null : e.getGuildId()),
        d.A.fetchRecentMentions({ before: n, limit: N.Ue3, guildId: a, roles: l, everyone: s });
}
function R(e) {
    let { onJump: t } = e,
        n = (0, r.bG)([x.A, E.A], () => x.A.getChannel(E.A.getChannelId())),
        {
            messages: s,
            hasMore: o,
            loading: h,
            guildFilter: g,
            roleFilter: _,
            everyoneFilter: f,
        } = (0, r.cf)([C.Ay], () => ({
            messages: C.Ay.getMentions(),
            hasMore: C.Ay.hasMore,
            loading: C.Ay.loading,
            guildFilter: C.Ay.guildFilter,
            roleFilter: C.Ay.roleFilter,
            everyoneFilter: C.Ay.everyoneFilter,
        })),
        I = (0, p.Sc)({ location: "RecentMentions" }),
        S = (0, u.A)(g),
        b = (0, u.A)(_),
        v = (0, u.A)(f);
    l.useEffect(() => {
        C.Ay.hasLoadedEver
            ? ((null != S && g !== S) || (null != b && _ !== b) || (null != v && f !== v)) && y(n, !0)
            : y(n, !0);
    }, [S, g, b, _, v, f, n, !0]),
        (0, c.Ay)(() => {
            s?.some(A.$r) && (d.A.clearMentions(), y(n, !0));
        }),
        l.useEffect(
            () => () => {
                d.A.truncateMentions(N.Ue3);
            },
            [],
        );
    let R = l.useCallback(() => null, []);
    return (0, i.jsx)(m.Ay, {
        className: a()(j.sH, { [j.qC]: I }),
        scrollerClassName: j.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            d.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: h,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            y(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: R,
        renderEmptyState: D,
        renderMessage: O,
        "aria-label": T.intl.string(T.t.jbV6MM),
        listName: "recents",
    });
}
function O(e, t) {
    return [(0, i.jsx)(L, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function L(e) {
    let { message: t, gotoMessage: n, dismissible: l } = e;
    if (null == t) return null;
    let s = x.A.getChannel(t.channel_id);
    if (null == s || (0, h.Jm)(s) || (0, h.$v)(s)) return null;
    let a = f.A.didAgree(s.getGuildId()),
        r = !!(0, h.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(S.A, {
                channel: s,
                gotoChannel: n,
                children:
                    null != l ? (0, i.jsx)(o.JnF, { size: "sm", onClick: () => d.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: j.zC,
                children: [
                    (0, i.jsx)(I.A, { className: j.QT, onJump: n }),
                    (0, i.jsx)(
                        g.A,
                        {
                            message: t,
                            channel: s,
                            className: j.iU,
                            hideAccessories: r,
                            compact: _.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: v,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function D() {
    return (0, i.jsx)(b.A, { Icon: o.XxR, header: T.intl.string(T.t.bgDz74), tip: T.intl.string(T.t.NS15vk) });
}
