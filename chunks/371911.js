n.d(t, { C: () => C });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    l = n(873298),
    s = n(922016),
    o = n(793574),
    d = n(688810),
    c = n(268218),
    u = n(335180),
    _ = n(966597),
    A = n(85109),
    h = n(910425),
    E = n(594061),
    p = n(617617),
    m = n(625494),
    I = n(652215);
let g = (0, c.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("32292"),
            n.e("49681"),
            n.e("28367"),
            n.e("45174"),
            n.e("85519"),
            n.e("87963"),
            n.e("37266"),
            n.e("55057"),
            n.e("34717"),
            n.e("63229"),
            n.e("31988"),
            n.e("55343"),
            n.e("8555"),
            n.e("40142"),
            n.e("60161"),
            n.e("98765"),
            n.e("65437"),
            n.e("34983"),
            n.e("92414"),
            n.e("95208"),
            n.e("72401"),
            n.e("47417"),
            n.e("19558"),
            n.e("53142"),
            n.e("76390"),
            n.e("93312"),
            n.e("95752"),
            n.e("67339"),
            n.e("21055"),
            n.e("31538"),
            n.e("21453"),
            n.e("54436"),
            n.e("6698"),
            n.e("98954"),
            n.e("227"),
            n.e("90184"),
            n.e("62718"),
            n.e("68883"),
            n.e("52286"),
            n.e("86674"),
            n.e("4009"),
            n.e("10730"),
            n.e("49320"),
            n.e("73644"),
            n.e("54490"),
            n.e("42516"),
            n.e("29297"),
            n.e("70276"),
        ]).then(n.bind(n, 922068)),
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
            badgeState: f,
            popoutPosition: T,
            popoutAlign: N,
            targetElementRef: S,
            spacing: L,
            dialogClassName: y,
        } = e,
        { analyticsLocations: O } = (0, d.Ay)(o.A.NOTIFICATION_CENTER),
        [b, v] = r.useState(!1),
        [R, P] = [
            (0, a.bG)([p.A], () => p.A.settings.inbox?.currentTab ?? l.Y2.UNREADS),
            r.useCallback((e) => {
                E.wc.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    E.Sb.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: D, setSeenTutorial: x } =
            ((t = (0, a.bG)([p.A], () => p.A.settings.inbox?.viewedTutorial ?? !1)),
            (n = r.useCallback(() => {
                E.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    E.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && R === l.Y2.UNREADS, setSeenTutorial: n }),
        w = r.useCallback(() => {
            v(!1), b && u?.();
        }, [u, b]),
        M = r.useCallback(() => {
            v(!b), b ? u?.() : c?.();
        }, [u, c, b]);
    r.useEffect(() => (m._.subscribe(I.jej.TOGGLE_INBOX, M), () => void m._.unsubscribe(I.jej.TOGGLE_INBOX, M)), [M]);
    let { enabled: U, inInbox: G } = _.A.useConfig({ location: "RecentsPopout" }),
        j = (0, a.bG)([A.A], () => A.A.hasOverdueReminder(), []) && U && G;
    r.useEffect(() => {
        R !== l.Y2.BOOKMARKS || U || G || P(l.Y2.MENTIONS), R === l.Y2.GAME_INVITES && P(l.Y2.MENTIONS);
    });
    let k = r.useCallback(
            (e) => {
                e.shiftKey || w();
            },
            [w],
        ),
        V = (0, h.Sc)();
    return (0, i.jsx)(d.f5, {
        value: O,
        children: (0, i.jsx)(s.Y, {
            targetElementRef: S,
            animation: s.Y.Animation.NONE,
            position: T,
            align: N,
            autoInvert: !1,
            shouldShow: b,
            onRequestClose: w,
            renderPopout: function () {
                return (0, i.jsx)(g, {
                    dialogClassName: y,
                    isScheduledMessagesEnabled: V,
                    tab: R,
                    setTab: P,
                    badgeState: f,
                    closePopout: w,
                    handleMentionsJump: k,
                    showTutorial: D,
                    setSeenTutorial: x,
                    forLaterEnabled: U,
                    showForLater: G,
                });
            },
            ignoreModalClicks: !0,
            spacing: L,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return C(M, n, e, j);
            },
        }),
    });
}
