"use strict";
n.d(t, { C: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(484030),
    o = n(311907),
    c = n(873298),
    d = n(397927),
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
    N = n(547945),
    b = n(412484),
    S = n(652215),
    T = n(985018),
    v = n(868192);
function y(e) {
    let t,
        n,
        {
            onOpen: l,
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
        [P, w] = s.useState(!1),
        [k, V] = [
            (0, o.bG)([f.A], () => f.A.settings.inbox?.currentTab ?? c.Y2.UNREADS),
            s.useCallback((e) => {
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
            (n = s.useCallback(() => {
                _.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            { showTutorial: !t && k === c.Y2.UNREADS, setSeenTutorial: n }),
        F = s.useCallback(() => {
            w(!1), P && y?.();
        }, [y, P]),
        K = s.useCallback(() => {
            w(!P), P ? y?.() : l?.();
        }, [y, l, P]);
    s.useEffect(() => (x._.subscribe(S.jej.TOGGLE_INBOX, K), () => void x._.unsubscribe(S.jej.TOGGLE_INBOX, K)), [K]);
    let { enabled: W, inInbox: Y } = A.A.useExperiment({ location: "RecentsPopout" }),
        z = (0, o.bG)([m.A], () => m.A.hasOverdueReminder(), []) && W && Y;
    s.useEffect(() => {
        k !== c.Y2.BOOKMARKS || W || Y || V(c.Y2.MENTIONS), k === c.Y2.GAME_INVITES && V(c.Y2.MENTIONS);
    });
    let q = s.useCallback(
            (e) => {
                e.shiftKey || F();
            },
            [F],
        ),
        X = (0, g.Sc)({ location: "ForYou" });
    return (0, i.jsx)(h.f5, {
        value: U,
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
                    "aria-label": T.intl.string(T.t.GSmTKJ),
                    className: G,
                    children: (0, i.jsx)("div", {
                        className: r()(v.k, { [v.q]: X }),
                        children: (0, i.jsx)(d.Fmo, {
                            component: (0, i.jsx)(I.A, { tab: k, setTab: V, badgeState: R, closePopout: F }),
                            children:
                                k === c.Y2.FOR_YOU
                                    ? (0, i.jsx)(C.Ay, {})
                                    : k === c.Y2.MENTIONS
                                      ? (0, i.jsx)(E.A, { onJump: q })
                                      : W && Y && k === c.Y2.BOOKMARKS
                                        ? (0, i.jsx)(p.J, { closePopout: F })
                                        : k === c.Y2.SCHEDULED
                                          ? (0, i.jsx)(N.w, {})
                                          : (0, i.jsx)(a.tH, {
                                                fallback: (0, i.jsx)(b.T, {}),
                                                children: (0, i.jsx)(b.Ay, {
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
