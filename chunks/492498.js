n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(378939),
    d = n(964486),
    u = n(475743),
    h = n(323073),
    A = n(202803),
    _ = n(636922),
    m = n(835835),
    g = n(566908),
    p = n(253932),
    f = n(734057),
    x = n(517019),
    E = n(309010),
    I = n(187508),
    C = n(576456),
    N = n(572448),
    T = n(963702),
    S = n(652215),
    b = n(985018),
    y = n(917831);
let v = { offset: { left: 4, right: -12 } };
function j(e, t, n) {
    let i = t ? I.Ay.guildFilter : null,
        l = t ? I.Ay.roleFilter : null,
        s = t ? I.Ay.everyoneFilter : null,
        a = null;
    null != e && null != i && (a = i === S.KE7.ALL_SERVERS ? null : e.getGuildId()),
        c.A.fetchRecentMentions({ before: n, limit: S.Ue3, guildId: a, roles: l, everyone: s });
}
function R(e) {
    let { onJump: t } = e,
        n = (0, r.bG)([f.A, E.A], () => f.A.getChannel(E.A.getChannelId())),
        {
            messages: s,
            hasMore: o,
            loading: h,
            guildFilter: _,
            roleFilter: p,
            everyoneFilter: x,
        } = (0, r.cf)([I.Ay], () => ({
            messages: I.Ay.getMentions(),
            hasMore: I.Ay.hasMore,
            loading: I.Ay.loading,
            guildFilter: I.Ay.guildFilter,
            roleFilter: I.Ay.roleFilter,
            everyoneFilter: I.Ay.everyoneFilter,
        })),
        C = (0, g.Sc)(),
        N = (0, u.A)(_),
        T = (0, u.A)(p),
        v = (0, u.A)(x);
    l.useEffect(() => {
        I.Ay.hasLoadedEver
            ? ((null != N && _ !== N) || (null != T && p !== T) || (null != v && x !== v)) && j(n, !0)
            : j(n, !0);
    }, [N, _, T, p, v, x, n, !0]),
        (0, d.Ay)(() => {
            s?.some(A.$r) && (c.A.clearMentions(), j(n, !0));
        }),
        l.useEffect(
            () => () => {
                c.A.truncateMentions(S.Ue3);
            },
            [],
        );
    let R = l.useCallback(() => null, []);
    return (0, i.jsx)(m.Ay, {
        className: a()(y.sH, { [y.qC]: C }),
        scrollerClassName: y.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: h,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            j(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: R,
        renderEmptyState: M,
        renderMessage: O,
        "aria-label": b.intl.string(b.t.jbV6MM),
        listName: "recents",
    });
}
function O(e, t) {
    return [(0, i.jsx)(L, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function L(e) {
    let { message: t, gotoMessage: n, dismissible: l } = e;
    if (null == t) return null;
    let s = f.A.getChannel(t.channel_id);
    if (null == s || (0, h.Jm)(s) || (0, h.$v)(s)) return null;
    let a = x.A.didAgree(s.getGuildId()),
        r = !!(0, h.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [
            (0, i.jsx)(N.A, {
                channel: s,
                gotoChannel: n,
                children:
                    null != l ? (0, i.jsx)(o.JnF, { size: "sm", onClick: () => c.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: y.zC,
                children: [
                    (0, i.jsx)(C.A, { className: y.QT, onJump: n }),
                    (0, i.jsx)(
                        _.A,
                        {
                            message: t,
                            channel: s,
                            className: y.iU,
                            hideAccessories: r,
                            compact: p.hH.getSetting(),
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
function M() {
    return (0, i.jsx)(T.A, { Icon: o.XxR, header: b.intl.string(b.t.bgDz74), tip: b.intl.string(b.t.NS15vk) });
}
