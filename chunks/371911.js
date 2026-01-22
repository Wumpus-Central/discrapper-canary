n.d(t, {
    C: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(484030),
    o = n(311907),
    c = n(873298),
    u = n(397927),
    d = n(793574),
    f = n(688810),
    p = n(966597),
    h = n(85109),
    b = n(44022),
    g = n(566908),
    m = n(594061),
    A = n(617617),
    y = n(203982),
    O = n(646468),
    j = n(492498),
    v = n(765627),
    x = n(547945),
    E = n(412484),
    _ = n(652215),
    C = n(985018),
    S = n(98938);

function I(e) {
    let t,
        n,
        {
            onOpen: i,
            onClose: I,
            children: N,
            badgeState: T,
            popoutPosition: P,
            popoutAlign: w,
            targetElementRef: R,
            spacing: D,
            dialogClassName: M,
        } = e,
        { analyticsLocations: L } = (0, f.Ay)(d.A.NOTIFICATION_CENTER),
        [G, k] = l.useState(!1),
        [U, V] = [
            (0, o.bG)([A.A], () => {
                var e, t;
                return null != (e = null == (t = A.A.settings.inbox) ? void 0 : t.currentTab) ? e : c.Y2.UNREADS;
            }),
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
        { showTutorial: F, setSeenTutorial: H } =
            ((t = (0, o.bG)([A.A], () => {
                var e, t;
                return null != (e = null == (t = A.A.settings.inbox) ? void 0 : t.viewedTutorial) && e;
            })),
            (n = l.useCallback(() => {
                m.wc.updateAsync(
                    "inbox",
                    (e) => {
                        e.viewedTutorial = !0;
                    },
                    m.Sb.INFREQUENT_USER_ACTION,
                );
            }, [])),
            {
                showTutorial: !t && U === c.Y2.UNREADS,
                setSeenTutorial: n,
            }),
        B = l.useCallback(() => {
            k(!1), G && (null == I || I());
        }, [I, G]),
        K = l.useCallback(() => {
            k(!G), G ? null == I || I() : null == i || i();
        }, [I, i, G]);
    l.useEffect(() => (y._.subscribe(_.jej.TOGGLE_INBOX, K), () => void y._.unsubscribe(_.jej.TOGGLE_INBOX, K)), [K]);
    let { enabled: W, inInbox: z } = p.A.useExperiment({
            location: "RecentsPopout",
        }),
        Y = (0, o.bG)([h.A], () => h.A.hasOverdueReminder(), []) && W && z;
    l.useEffect(() => {
        U !== c.Y2.BOOKMARKS || W || z || V(c.Y2.MENTIONS), U === c.Y2.GAME_INVITES && V(c.Y2.MENTIONS);
    });
    let q = l.useCallback(
            (e) => {
                e.shiftKey || B();
            },
            [B],
        ),
        X = (0, g.Sc)({
            location: "ForYou",
        });
    return (0, r.jsx)(f.f5, {
        value: L,
        children: (0, r.jsx)(u.YNO, {
            targetElementRef: R,
            animation: u.YNO.Animation.NONE,
            position: P,
            align: w,
            autoInvert: !1,
            shouldShow: G,
            onRequestClose: B,
            renderPopout: function () {
                return (0, r.jsx)(u.lGe, {
                    "aria-label": C.intl.string(C.t.GSmTKJ),
                    className: M,
                    children: (0, r.jsx)("div", {
                        className: a()(S.k, {
                            [S.q]: X,
                        }),
                        children: (0, r.jsx)(u.Fmo, {
                            component: (0, r.jsx)(v.A, {
                                tab: U,
                                setTab: V,
                                badgeState: T,
                                closePopout: B,
                            }),
                            children:
                                U === c.Y2.FOR_YOU
                                    ? (0, r.jsx)(O.Ay, {})
                                    : U === c.Y2.MENTIONS
                                      ? (0, r.jsx)(j.A, {
                                            onJump: q,
                                        })
                                      : W && z && U === c.Y2.BOOKMARKS
                                        ? (0, r.jsx)(b.J, {
                                              closePopout: B,
                                          })
                                        : U === c.Y2.SCHEDULED
                                          ? (0, r.jsx)(x.w, {})
                                          : (0, r.jsx)(s.tH, {
                                                fallback: (0, r.jsx)(E.T, {}),
                                                children: (0, r.jsx)(E.Ay, {
                                                    onJump: q,
                                                    showTutorial: F,
                                                    setSeenTutorial: H,
                                                    closePopout: B,
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
                return N(K, n, e, Y);
            },
        }),
    });
}
