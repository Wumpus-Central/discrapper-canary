"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(4208),
    o = n(311907),
    c = n(827734);
n(990078);
var d = n(397927),
    u = n(73153),
    h = n(334738),
    A = n(964486);
n(793574), n(688810);
var m = n(952790),
    p = n(85109),
    g = n(734057),
    _ = n(71393),
    f = n(320501),
    x = n(222823),
    C = n(661191),
    E = n(851109),
    I = n(706341),
    N = n(932883),
    b = n(599486),
    S = n(320697),
    T = n(394953),
    v = n(628325),
    y = n(524628),
    j = n(81435),
    R = n(313452),
    O = n(849077),
    L = n(652215),
    M = n(985018),
    D = n(674823);
let G = [],
    U = {
        controller: new a.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: O.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function P(e) {
    let { includePanelSpacing: t } = e,
        n = (0, N.op)(),
        { selectedFilter: l } = (0, b.A)(),
        a = (0, o.bG)([S.A], () => S.A.oldestDisplayedMessageId),
        c = (0, o.yK)([S.A], () => S.A.getInboxMessages()),
        v = (0, o.yK)([x.Ay, _.A, S.A], () =>
            c.filter(
                (e) =>
                    !(0, T.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: x.Ay,
                        GuildStore_: _.A,
                    }) && !(0, T.zo)(e, S.A.selectedItemInfo),
            ),
        ),
        y = (0, o.yK)([x.Ay, _.A, S.A], () =>
            c.filter(
                (e) =>
                    (0, T.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: x.Ay,
                        GuildStore_: _.A,
                    }) || (0, T.zo)(e, S.A.selectedItemInfo),
            ),
        ),
        j = s.useCallback(
            (e) => {
                l !== O.Io.BOOKMARKS && I.A.loadMoreInbox({ viewId: n, loadingTrigger: e });
            },
            [l, n],
        ),
        { hasLoadedEver: M, canLoadMore: P } = (0, o.cf)([S.A], () => ({
            hasLoadedEver: S.A.hasLoadedEver,
            canLoadMore: S.A.canLoadMore({}),
        }));
    s.useEffect(() => {
        P && !M && j(O.VA.ON_OPEN);
    }, [P, M, j]),
        (function (e) {
            let { unreadChannelIds: t } = (0, T.U4)();
            s.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        let t = f.A.getMessages(e),
                            n = t.last()?.id,
                            i = x.Ay.ackMessageId(e),
                            s = t.hasPresent() && t.ready && !t.cached;
                        null != n &&
                            null != i &&
                            s &&
                            C.default.compare(i, n) >= 0 &&
                            h.ack(
                                e,
                                {
                                    section: L.JJy.NOTIFICATIONS_INBOX,
                                    object: L.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: L.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(M ? y : null);
    let k = (0, o.yK)([p.A], () => p.A.getSavedMessages()),
        F = s.useMemo(
            () =>
                k.flatMap((e) => {
                    let { message: t } = e;
                    return null == t
                        ? G
                        : [
                              {
                                  id: t.id,
                                  channelId: t.channel_id,
                                  guildId: g.A.getBasicChannel(t.channel_id)?.guild_id,
                                  kind: O.yL.BOOKMARK,
                                  message: t,
                              },
                          ];
                }),
            [k],
        ),
        K = w(v, l, a),
        W = w(y, l, null);
    (0, A.Ay)(() => {
        u.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, E.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            t = S.A.getDevOverrides().navOnClick ?? !0;
        if (e !== E.U5.SIDEBAR || !1 === t) return;
        let { message: i, isUnread: s } = (function (e, t) {
            let n = e[e.length - 1]?.message,
                i = t[t.length - 1]?.message,
                s = i ?? n;
            if (null != s) return { message: s, isUnread: null != i };
            let l = S.A.getNotifyingChannelIds();
            if (null == l || 0 === l.length) return { message: null, isUnread: !1 };
            let r = l[0],
                a = x.Ay.getTrackedAckMessageId(r);
            return null == a
                ? { message: null, isUnread: !1 }
                : { message: { id: C.default.atNextMillisecond(a), channel_id: r }, isUnread: x.Ay.hasUnread(r) ?? !1 };
        })(K, W);
        null != i &&
            I.A.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: s,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: n,
            });
    }),
        (0, A.l0)(() => {
            u.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: Y } = (0, E.X8)({ location: "NotificationsInboxSidebar" }),
        z = Y === E.yF.DROPDOWN && l !== O.Io.ALL,
        q = (0, O.Yw)(l);
    return (0, i.jsx)("nav", {
        className: r()(D.kL, { [D.Yu]: t }),
        children: (0, i.jsxs)(d.Fmo, {
            forceLevel: 1,
            component: (0, i.jsx)(m.Ay, { hasSubheader: !0, guild: q, ...U }),
            children: [
                l === O.Io.ALL && (0, i.jsx)(H, { hideBanner: !M || l !== O.Io.ALL }),
                z && (0, i.jsx)(d.hKd, { size: 8 }),
                (0, i.jsx)(R.A, {
                    className: D.cl,
                    renderMessageGroup: B,
                    messages: l === O.Io.BOOKMARKS ? F : K,
                    unreadMessages: l === O.Io.BOOKMARKS ? [] : W,
                    listName: "notifications-inbox",
                    renderLoadingState: V,
                    ignoreGrouping: l === O.Io.BOOKMARKS,
                    loadMore: j,
                }),
            ],
        }),
    });
}
function k(e) {
    return (0, i.jsx)(N.GM, { children: (0, i.jsx)(P, { ...e }) });
}
function w(e, t, n) {
    return s.useMemo(
        () =>
            0 === e.length || t === O.Io.BOOKMARKS
                ? G
                : e.filter((e) => {
                      let { id: i } = e;
                      return (
                          !(C.default.age(i) > O.V$ || (null != n && 0 >= C.default.compare(i, n))) && t === O.Io.ALL
                      );
                  }),
        [e, t, n],
    );
}
function V() {
    return (0, i.jsx)(y.A, {});
}
function B(e, t) {
    return (0, i.jsx)(j.A, { message: e[0], groupedMessages: e.slice(1), isUnread: t }, e[0].id);
}
function H(e) {
    let { hideBanner: t } = e,
        n = (0, v.S)((e) => e.shouldHide());
    return (0, i.jsx)("div", {
        className: r()(D.dl, { [D.jD]: n || t }),
        children: (0, i.jsxs)("div", {
            className: D.XD,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: D.vi,
                    children: M.intl.string(M.t["6XMM+D"]),
                }),
                (0, i.jsx)(d.iA$, { size: "sm", color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
            ],
        }),
    });
}
