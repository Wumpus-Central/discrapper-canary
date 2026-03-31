n.d(t, { C: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(484030),
    o = n(311907),
    c = n(873298),
    d = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(966597),
    _ = n(85109),
    m = n(44022),
    g = n(566908),
    p = n(594061),
    f = n(617617),
    x = n(203982),
    E = n(646468),
    I = n(492498),
    C = n(765627),
    N = n(547945),
    T = n(412484),
    S = n(652215),
    b = n(985018),
    y = n(217793);
function v(e) {
    let t,
        n,
        {
            onOpen: s,
            onClose: v,
            children: j,
            badgeState: R,
            popoutPosition: O,
            popoutAlign: L,
            targetElementRef: M,
            spacing: D,
            dialogClassName: U,
        } = e,
        { analyticsLocations: G } = (0, h.Ay)(u.A.NOTIFICATION_CENTER),
        [P, k] = l.useState(!1),
        [w, B] = [
            (0, o.bG)([f.A], () => f.A.settings.inbox?.currentTab ?? c.Y2.UNREADS),
            l.useCallback((e) => {
                p.wc.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    p.Sb.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: V, setSeenTutorial: H } =
            ((t = (0, o.bG)([f.A], () => f.A.settings.inbox?.viewedTutorial ?? !1)),
            (n = l.useCallback(() => {
                p.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    p.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && w === c.Y2.UNREADS, setSeenTutorial: n }),
        F = l.useCallback(() => {
            k(!1), P && v?.();
        }, [v, P]),
        K = l.useCallback(() => {
            k(!P), P ? v?.() : s?.();
        }, [v, s, P]);
    l.useEffect(() => (x._.subscribe(S.jej.TOGGLE_INBOX, K), () => void x._.unsubscribe(S.jej.TOGGLE_INBOX, K)), [K]);
    let { enabled: W, inInbox: Y } = A.A.useConfig({ location: "RecentsPopout" }),
        z = (0, o.bG)([_.A], () => _.A.hasOverdueReminder(), []) && W && Y;
    l.useEffect(() => {
        w !== c.Y2.BOOKMARKS || W || Y || B(c.Y2.MENTIONS), w === c.Y2.GAME_INVITES && B(c.Y2.MENTIONS);
    });
    let q = l.useCallback(
            (e) => {
                e.shiftKey || F();
            },
            [F],
        ),
        X = (0, g.Sc)();
    return (0, i.jsx)(h.f5, {
        value: G,
        children: (0, i.jsx)(d.YNO, {
            targetElementRef: M,
            animation: d.YNO.Animation.NONE,
            position: O,
            align: L,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: F,
            renderPopout: function () {
                return (0, i.jsx)(d.lGe, {
                    "aria-label": b.intl.string(b.t.GSmTKJ),
                    className: U,
                    children: (0, i.jsx)("div", {
                        className: a()(y.k, { [y.q]: X }),
                        children: (0, i.jsx)(d.Fmo, {
                            component: (0, i.jsx)(C.A, { tab: w, setTab: B, badgeState: R, closePopout: F }),
                            children:
                                w === c.Y2.FOR_YOU
                                    ? (0, i.jsx)(E.Ay, {})
                                    : w === c.Y2.MENTIONS
                                      ? (0, i.jsx)(I.A, { onJump: q })
                                      : W && Y && w === c.Y2.BOOKMARKS
                                        ? (0, i.jsx)(m.J, { closePopout: F })
                                        : w === c.Y2.SCHEDULED
                                          ? (0, i.jsx)(N.w, {})
                                          : (0, i.jsx)(r.tH, {
                                                fallback: (0, i.jsx)(T.T, {}),
                                                children: (0, i.jsx)(T.Ay, {
                                                    onJump: q,
                                                    showTutorial: V,
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
