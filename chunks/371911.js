n.d(t, { C: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(873298),
    r = n(265872),
    o = n(793574),
    d = n(688810),
    c = n(268218),
    u = n(335180),
    h = n(966597),
    A = n(85109),
    _ = n(566908),
    m = n(594061),
    g = n(617617),
    p = n(203982),
    f = n(652215);
let E = (0, c.Fe)({
    createPromise: () => Promise.all([n.e("49681"), n.e("7602"), n.e("42235"), n.e("70276")]).then(n.bind(n, 124902)),
    webpackId: 124902,
    name: "RecentsPopoutRenderer",
    renderLoader: u.hc,
});
function x(e) {
    let t,
        n,
        {
            onOpen: c,
            onClose: u,
            children: x,
            badgeState: I,
            popoutPosition: C,
            popoutAlign: b,
            targetElementRef: N,
            spacing: S,
            dialogClassName: v,
        } = e,
        { analyticsLocations: T } = (0, d.Ay)(o.A.NOTIFICATION_CENTER),
        [y, R] = l.useState(!1),
        [j, L] = [
            (0, s.bG)([g.A], () => g.A.settings.inbox?.currentTab ?? a.Y2.UNREADS),
            l.useCallback((e) => {
                m.wc.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    m.Sb.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: O, setSeenTutorial: G } =
            ((t = (0, s.bG)([g.A], () => g.A.settings.inbox?.viewedTutorial ?? !1)),
            (n = l.useCallback(() => {
                m.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    m.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && j === a.Y2.UNREADS, setSeenTutorial: n }),
        D = l.useCallback(() => {
            R(!1), y && u?.();
        }, [u, y]),
        M = l.useCallback(() => {
            R(!y), y ? u?.() : c?.();
        }, [u, c, y]);
    l.useEffect(() => (p._.subscribe(f.jej.TOGGLE_INBOX, M), () => void p._.unsubscribe(f.jej.TOGGLE_INBOX, M)), [M]);
    let { enabled: U, inInbox: P } = h.A.useConfig({ location: "RecentsPopout" }),
        w = (0, s.bG)([A.A], () => A.A.hasOverdueReminder(), []) && U && P;
    l.useEffect(() => {
        j !== a.Y2.BOOKMARKS || U || P || L(a.Y2.MENTIONS), j === a.Y2.GAME_INVITES && L(a.Y2.MENTIONS);
    });
    let k = l.useCallback(
            (e) => {
                e.shiftKey || D();
            },
            [D],
        ),
        V = (0, _.Sc)();
    return (0, i.jsx)(d.f5, {
        value: T,
        children: (0, i.jsx)(r.Y, {
            targetElementRef: N,
            animation: r.Y.Animation.NONE,
            position: C,
            align: b,
            autoInvert: !1,
            shouldShow: y,
            onRequestClose: D,
            renderPopout: function () {
                return (0, i.jsx)(E, {
                    dialogClassName: v,
                    isScheduledMessagesEnabled: V,
                    tab: j,
                    setTab: L,
                    badgeState: I,
                    closePopout: D,
                    handleMentionsJump: k,
                    showTutorial: O,
                    setSeenTutorial: G,
                    forLaterEnabled: U,
                    showForLater: P,
                });
            },
            ignoreModalClicks: !0,
            spacing: S,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return x(M, n, e, w);
            },
        }),
    });
}
