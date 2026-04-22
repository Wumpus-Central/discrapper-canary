n.r(t), n.d(t, { default: () => E });
var s = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    i = n(484030),
    r = n(873298),
    o = n(305866),
    d = n(707554),
    c = n(44022),
    u = n(646468),
    h = n(492498),
    _ = n(765627),
    A = n(547945),
    m = n(412484),
    g = n(985018),
    f = n(66001);
function E(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: a,
        setTab: E,
        badgeState: N,
        closePopout: p,
        handleMentionsJump: I,
        showTutorial: C,
        setSeenTutorial: S,
        forLaterEnabled: x,
        showForLater: R,
    } = e;
    return (0, s.jsx)(o.l, {
        "aria-label": g.intl.string(g.t.GSmTKJ),
        className: t,
        children: (0, s.jsx)("div", {
            className: l()(f.k, { [f.q]: n }),
            children: (0, s.jsx)(d.F, {
                component: (0, s.jsx)(_.A, { tab: a, setTab: E, badgeState: N, closePopout: p }),
                children:
                    a === r.Y2.FOR_YOU
                        ? (0, s.jsx)(u.Ay, {})
                        : a === r.Y2.MENTIONS
                          ? (0, s.jsx)(h.A, { onJump: I })
                          : x && R && a === r.Y2.BOOKMARKS
                            ? (0, s.jsx)(c.J, { closePopout: p })
                            : a === r.Y2.SCHEDULED
                              ? (0, s.jsx)(A.w, {})
                              : (0, s.jsx)(i.tH, {
                                    fallback: (0, s.jsx)(m.T, {}),
                                    children: (0, s.jsx)(m.Ay, {
                                        onJump: I,
                                        showTutorial: C,
                                        setSeenTutorial: S,
                                        closePopout: p,
                                    }),
                                }),
            }),
        }),
    });
}
