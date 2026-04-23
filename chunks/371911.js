n.d(t, { C: () => C });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(873298),
    a = n(922016),
    o = n(793574),
    d = n(688810),
    c = n(268218),
    u = n(335180),
    h = n(966597),
    A = n(85109),
    _ = n(910425),
    g = n(594061),
    m = n(617617),
    p = n(625494),
    f = n(652215);
let E = (0, c.Fe)({
    createPromise: () => Promise.all([n.e("49681"), n.e("42516"), n.e("38951"), n.e("70276")]).then(n.bind(n, 922068)),
    webpackId: 922068,
    name: "RecentsPopoutRenderer",
    renderLoader: u.hc,
});
function C(e) {
    let t,
        n,
        {
            onOpen: c,
            onClose: u,
            children: C,
            badgeState: x,
            popoutPosition: I,
            popoutAlign: b,
            targetElementRef: S,
            spacing: N,
            dialogClassName: T,
        } = e,
        { analyticsLocations: v } = (0, d.Ay)(o.A.NOTIFICATION_CENTER),
        [y, R] = l.useState(!1),
        [j, L] = [
            (0, s.bG)([m.A], () => m.A.settings.inbox?.currentTab ?? r.Y2.UNREADS),
            l.useCallback((e) => {
                g.wc.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    g.Sb.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: O, setSeenTutorial: G } =
            ((t = (0, s.bG)([m.A], () => m.A.settings.inbox?.viewedTutorial ?? !1)),
            (n = l.useCallback(() => {
                g.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    g.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && j === r.Y2.UNREADS, setSeenTutorial: n }),
        M = l.useCallback(() => {
            R(!1), y && u?.();
        }, [u, y]),
        D = l.useCallback(() => {
            R(!y), y ? u?.() : c?.();
        }, [u, c, y]);
    l.useEffect(() => (p._.subscribe(f.jej.TOGGLE_INBOX, D), () => void p._.unsubscribe(f.jej.TOGGLE_INBOX, D)), [D]);
    let { enabled: U, inInbox: P } = h.A.useConfig({ location: "RecentsPopout" }),
        w = (0, s.bG)([A.A], () => A.A.hasOverdueReminder(), []) && U && P;
    l.useEffect(() => {
        j !== r.Y2.BOOKMARKS || U || P || L(r.Y2.MENTIONS), j === r.Y2.GAME_INVITES && L(r.Y2.MENTIONS);
    });
    let k = l.useCallback(
            (e) => {
                e.shiftKey || M();
            },
            [M],
        ),
        V = (0, _.Sc)();
    return (0, i.jsx)(d.f5, {
        value: v,
        children: (0, i.jsx)(a.Y, {
            targetElementRef: S,
            animation: a.Y.Animation.NONE,
            position: I,
            align: b,
            autoInvert: !1,
            shouldShow: y,
            onRequestClose: M,
            renderPopout: function () {
                return (0, i.jsx)(E, {
                    dialogClassName: T,
                    isScheduledMessagesEnabled: V,
                    tab: j,
                    setTab: L,
                    badgeState: x,
                    closePopout: M,
                    handleMentionsJump: k,
                    showTutorial: O,
                    setSeenTutorial: G,
                    forLaterEnabled: U,
                    showForLater: P,
                });
            },
            ignoreModalClicks: !0,
            spacing: N,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return C(D, n, e, w);
            },
        }),
    });
}
