n.d(t, { C: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(484030),
    o = n(311907),
    d = n(873298),
    c = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(966597),
    m = n(85109),
    p = n(44022),
    g = n(566908),
    _ = n(594061),
    f = n(617617),
    x = n(203982),
    C = n(646468),
    E = n(492498),
    I = n(765627),
    b = n(547945),
    N = n(412484),
    S = n(652215),
    T = n(985018),
    v = n(868192);
function y(e) {
    let t,
        n,
        {
            onOpen: s,
            onClose: y,
            children: j,
            badgeState: R,
            popoutPosition: O,
            popoutAlign: L,
            targetElementRef: M,
            spacing: D,
            dialogClassName: G,
        } = e,
        { analyticsLocations: U } = (0, h.Ay)(u.A.NOTIFICATION_CENTER),
        [P, w] = l.useState(!1),
        [k, V] = [
            (0, o.bG)([f.A], () => f.A.settings.inbox?.currentTab ?? d.Y2.UNREADS),
            l.useCallback((e) => {
                _.wc.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    _.Sb.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: B, setSeenTutorial: H } =
            ((t = (0, o.bG)([f.A], () => f.A.settings.inbox?.viewedTutorial ?? !1)),
            (n = l.useCallback(() => {
                _.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && k === d.Y2.UNREADS, setSeenTutorial: n }),
        F = l.useCallback(() => {
            w(!1), P && y?.();
        }, [y, P]),
        K = l.useCallback(() => {
            w(!P), P ? y?.() : s?.();
        }, [y, s, P]);
    l.useEffect(() => (x._.subscribe(S.jej.TOGGLE_INBOX, K), () => void x._.unsubscribe(S.jej.TOGGLE_INBOX, K)), [K]);
    let { enabled: W, inInbox: Y } = A.A.useExperiment({ location: "RecentsPopout" }),
        z = (0, o.bG)([m.A], () => m.A.hasOverdueReminder(), []) && W && Y;
    l.useEffect(() => {
        k !== d.Y2.BOOKMARKS || W || Y || V(d.Y2.MENTIONS), k === d.Y2.GAME_INVITES && V(d.Y2.MENTIONS);
    });
    let q = l.useCallback(
            (e) => {
                e.shiftKey || F();
            },
            [F],
        ),
        X = (0, g.Sc)({ location: "ForYou" });
    return (0, i.jsx)(h.f5, {
        value: U,
        children: (0, i.jsx)(c.YNO, {
            targetElementRef: M,
            animation: c.YNO.Animation.NONE,
            position: O,
            align: L,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: F,
            renderPopout: function () {
                return (0, i.jsx)(c.lGe, {
                    "aria-label": T.intl.string(T.t.GSmTKJ),
                    className: G,
                    children: (0, i.jsx)("div", {
                        className: a()(v.k, { [v.q]: X }),
                        children: (0, i.jsx)(c.Fmo, {
                            component: (0, i.jsx)(I.A, { tab: k, setTab: V, badgeState: R, closePopout: F }),
                            children:
                                k === d.Y2.FOR_YOU
                                    ? (0, i.jsx)(C.Ay, {})
                                    : k === d.Y2.MENTIONS
                                      ? (0, i.jsx)(E.A, { onJump: q })
                                      : W && Y && k === d.Y2.BOOKMARKS
                                        ? (0, i.jsx)(p.J, { closePopout: F })
                                        : k === d.Y2.SCHEDULED
                                          ? (0, i.jsx)(b.w, {})
                                          : (0, i.jsx)(r.tH, {
                                                fallback: (0, i.jsx)(N.T, {}),
                                                children: (0, i.jsx)(N.Ay, {
                                                    onJump: q,
                                                    showTutorial: B,
                                                    setSeenTutorial: H,
                                                    closePopout: F,
                                                }),
                                            }),
                        }),
                    }),
                });
            },
            ignoreModalClicks: !0,
            spacing: D,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return j(K, n, e, z);
            },
        }),
    });
}
