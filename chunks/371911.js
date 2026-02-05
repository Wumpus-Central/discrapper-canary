n.d(t, { C: () => v });
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
    g = n(85109),
    m = n(44022),
    p = n(566908),
    _ = n(594061),
    x = n(617617),
    f = n(203982),
    E = n(646468),
    C = n(492498),
    I = n(765627),
    S = n(547945),
    b = n(412484),
    N = n(652215),
    T = n(985018),
    j = n(98938);
function v(e) {
    let t,
        n,
        {
            onOpen: s,
            onClose: v,
            children: y,
            badgeState: R,
            popoutPosition: O,
            popoutAlign: L,
            targetElementRef: D,
            spacing: M,
            dialogClassName: G,
        } = e,
        { analyticsLocations: U } = (0, h.Ay)(u.A.NOTIFICATION_CENTER),
        [P, k] = l.useState(!1),
        [w, V] = [
            (0, o.bG)([x.A], () => x.A.settings.inbox?.currentTab ?? d.Y2.UNREADS),
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
            ((t = (0, o.bG)([x.A], () => x.A.settings.inbox?.viewedTutorial ?? !1)),
            (n = l.useCallback(() => {
                _.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && w === d.Y2.UNREADS, setSeenTutorial: n }),
        F = l.useCallback(() => {
            k(!1), P && v?.();
        }, [v, P]),
        Y = l.useCallback(() => {
            k(!P), P ? v?.() : s?.();
        }, [v, s, P]);
    l.useEffect(() => (f._.subscribe(N.jej.TOGGLE_INBOX, Y), () => void f._.unsubscribe(N.jej.TOGGLE_INBOX, Y)), [Y]);
    let { enabled: W, inInbox: K } = A.A.useExperiment({ location: "RecentsPopout" }),
        z = (0, o.bG)([g.A], () => g.A.hasOverdueReminder(), []) && W && K;
    l.useEffect(() => {
        w !== d.Y2.BOOKMARKS || W || K || V(d.Y2.MENTIONS), w === d.Y2.GAME_INVITES && V(d.Y2.MENTIONS);
    });
    let X = l.useCallback(
            (e) => {
                e.shiftKey || F();
            },
            [F],
        ),
        q = (0, p.Sc)({ location: "ForYou" });
    return (0, i.jsx)(h.f5, {
        value: U,
        children: (0, i.jsx)(c.YNO, {
            targetElementRef: D,
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
                        className: a()(j.k, { [j.q]: q }),
                        children: (0, i.jsx)(c.Fmo, {
                            component: (0, i.jsx)(I.A, { tab: w, setTab: V, badgeState: R, closePopout: F }),
                            children:
                                w === d.Y2.FOR_YOU
                                    ? (0, i.jsx)(E.Ay, {})
                                    : w === d.Y2.MENTIONS
                                      ? (0, i.jsx)(C.A, { onJump: X })
                                      : W && K && w === d.Y2.BOOKMARKS
                                        ? (0, i.jsx)(m.J, { closePopout: F })
                                        : w === d.Y2.SCHEDULED
                                          ? (0, i.jsx)(S.w, {})
                                          : (0, i.jsx)(r.tH, {
                                                fallback: (0, i.jsx)(b.T, {}),
                                                children: (0, i.jsx)(b.Ay, {
                                                    onJump: X,
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
            spacing: M,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return y(Y, n, e, z);
            },
        }),
    });
}
