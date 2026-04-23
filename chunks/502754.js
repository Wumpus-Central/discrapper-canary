n.d(t, { A: () => j }), n(321073);
var s = n(627968),
    a = n(64700),
    l = n(989349),
    i = n.n(l),
    r = n(837381),
    o = n(187322),
    d = n(123292),
    c = n(289873),
    u = n(559149),
    h = n(857069),
    _ = n(694318),
    A = n(813516),
    m = n(906141),
    g = n(253932),
    f = n(961350),
    E = n(287809),
    N = n(405269),
    p = n(576456),
    I = n(712209),
    C = n(652215),
    S = n(985018),
    x = n(357242);
let R = { left: 4, right: -12 },
    y = [C.lAJ.THREAD_CREATED];
function T(e) {
    let { channel: t, message: n, compact: l, isGroupStart: i, treatSpam: d, gotoChannel: c } = e,
        u = (0, r.rm)(n.id ?? ""),
        h = a.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), c(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, c, n.id],
        ),
        _ = y.includes(n.type);
    return (0, s.jsx)(o.vN, {
        offset: R,
        children: (0, s.jsxs)("div", {
            className: x.zC,
            onKeyDown: h,
            ...u,
            children: [
                !_ && (0, s.jsx)(p.A, { className: x.nn, onJump: (e) => c(e, n.id) }),
                (0, s.jsx)(m.A, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: x.iU,
                    compact: l,
                    animateAvatar: !1,
                    isGroupStart: i,
                    treatSpam: d,
                }),
            ],
        }),
    });
}
function j(e) {
    let { channel: t, channelRecord: n, gotoChannel: a } = e,
        { enabled: l } = u.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        r = g.hH.useSetting(),
        o = (0, _.iJ)(n),
        m = !1,
        p = 0 === t.messages.length || i()(t.messages[0].timestamp).isSame(i()(), "day"),
        R = E.default.getUser(f.default.getId())?.hasFlag(C.nhx.SPAMMER) ?? !1,
        y = [];
    if (!t.collapsed) {
        let e = null,
            u = null,
            g = t.messages.slice(0, I.sz);
        g.forEach((t) => {
            if (!p && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, N.i$)(t.timestamp, "LL");
                y.push((0, s.jsx)(A.A, { className: x.yF, children: n }, n)), (e = i()(t.timestamp));
            }
            let d = null == u || (0, h.A)(n, u, t);
            (u = t),
                (m = m || (0, _.kf)(t)),
                y.push(
                    (0, s.jsx)(
                        T,
                        {
                            channel: n,
                            message: t,
                            compact: r,
                            isGroupStart: d,
                            treatSpam: !R && l && (0, _.kf)(t) && o,
                            gotoChannel: a,
                        },
                        t.id,
                    ),
                );
        }),
            t.messages.length >= I.sz &&
                y.push(
                    (0, s.jsx)(
                        "div",
                        {
                            className: x.Gr,
                            children: (0, s.jsx)(d.Q, {
                                variant: "primary",
                                text: `${S.intl.string(S.t["9OB9hq"])} \u203A`,
                                onClick: (e) => a(e, g[g.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === y.length && (y = [(0, s.jsx)(c.y, {}, "spinner")]);
    }
    return m && o && u.A.trackExposure({ location: "20e3b0_2" }), (0, s.jsx)("div", { className: x.DZ, children: y });
}
