n.d(t, { A: () => O });
var s = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(311907),
    o = n(815021),
    d = n(935063),
    c = n(378939),
    u = n(964486),
    h = n(475743),
    _ = n(323073),
    A = n(202803),
    m = n(636922),
    g = n(835835),
    f = n(566908),
    E = n(253932),
    N = n(734057),
    p = n(517019),
    I = n(309010),
    C = n(187508),
    S = n(576456),
    x = n(572448),
    R = n(963702),
    y = n(652215),
    T = n(985018),
    j = n(575863);
let b = { offset: { left: 4, right: -12 } };
function D(e, t, n) {
    let s = t ? C.Ay.guildFilter : null,
        a = t ? C.Ay.roleFilter : null,
        l = t ? C.Ay.everyoneFilter : null,
        i = null;
    null != e && null != s && (i = s === y.KE7.ALL_SERVERS ? null : e.getGuildId()),
        c.A.fetchRecentMentions({ before: n, limit: y.Ue3, guildId: i, roles: a, everyone: l });
}
function O(e) {
    let { onJump: t } = e,
        n = (0, r.bG)([N.A, I.A], () => N.A.getChannel(I.A.getChannelId())),
        {
            messages: l,
            hasMore: o,
            loading: d,
            guildFilter: _,
            roleFilter: m,
            everyoneFilter: E,
        } = (0, r.cf)([C.Ay], () => ({
            messages: C.Ay.getMentions(),
            hasMore: C.Ay.hasMore,
            loading: C.Ay.loading,
            guildFilter: C.Ay.guildFilter,
            roleFilter: C.Ay.roleFilter,
            everyoneFilter: C.Ay.everyoneFilter,
        })),
        p = (0, f.Sc)(),
        S = (0, h.A)(_),
        x = (0, h.A)(m),
        R = (0, h.A)(E);
    a.useEffect(() => {
        C.Ay.hasLoadedEver
            ? ((null != S && _ !== S) || (null != x && m !== x) || (null != R && E !== R)) && D(n, !0)
            : D(n, !0);
    }, [S, _, x, m, R, E, n, !0]),
        (0, u.Ay)(() => {
            l?.some(A.$r) && (c.A.clearMentions(), D(n, !0));
        }),
        a.useEffect(
            () => () => {
                c.A.truncateMentions(y.Ue3);
            },
            [],
        );
    let b = a.useCallback(() => null, []);
    return (0, s.jsx)(g.Ay, {
        className: i()(j.sH, { [j.qC]: p }),
        scrollerClassName: j.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: l,
        loading: d,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            D(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: b,
        renderEmptyState: F,
        renderMessage: v,
        "aria-label": T.intl.string(T.t.jbV6MM),
        listName: "recents",
    });
}
function v(e, t) {
    return [(0, s.jsx)(M, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function M(e) {
    let { message: t, gotoMessage: n, dismissible: a } = e;
    if (null == t) return null;
    let l = N.A.getChannel(t.channel_id);
    if (null == l || (0, _.Jm)(l) || (0, _.$v)(l)) return null;
    let i = p.A.didAgree(l.getGuildId()),
        r = !!(0, _.Gc)(l) && !i;
    return (0, s.jsxs)("div", {
        className: j.kL,
        children: [
            (0, s.jsx)(x.A, {
                channel: l,
                gotoChannel: n,
                children:
                    null != a ? (0, s.jsx)(o.J, { size: "sm", onClick: () => c.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, s.jsxs)("div", {
                className: j.zC,
                children: [
                    (0, s.jsx)(S.A, { className: j.QT, onJump: n }),
                    (0, s.jsx)(
                        m.A,
                        {
                            message: t,
                            channel: l,
                            className: j.iU,
                            hideAccessories: r,
                            compact: E.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: b,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function F() {
    return (0, s.jsx)(R.A, { Icon: d.X, header: T.intl.string(T.t.bgDz74), tip: T.intl.string(T.t.NS15vk) });
}
