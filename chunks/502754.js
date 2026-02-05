n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(837381),
    o = n(397927),
    d = n(559149),
    c = n(857069),
    u = n(694318),
    h = n(813516),
    A = n(906141),
    g = n(253932),
    m = n(961350),
    p = n(287809),
    _ = n(405269),
    x = n(576456),
    f = n(712209),
    E = n(652215),
    C = n(985018),
    I = n(359884);
let S = { left: 4, right: -12 },
    b = [E.lAJ.THREAD_CREATED];
function N(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, treatSpam: d, gotoChannel: c } = e,
        u = (0, r.rm)(n.id ?? ""),
        h = l.useCallback(
            (e) => {
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id],
        ),
        g = b.includes(n.type);
    return (0, i.jsx)(o.vN3, {
        offset: S,
        children: (0, i.jsxs)(
            "div",
            {
                className: I.zC,
                onKeyDown: h,
                ...u,
                children: [
                    !g && (0, i.jsx)(x.A, { className: I.nn, onJump: (e) => c(e, n.id) }),
                    (0, i.jsx)(A.A, {
                        id: n.id,
                        message: n,
                        channel: t,
                        className: I.iU,
                        compact: s,
                        animateAvatar: !1,
                        isGroupStart: a,
                        onKeyDown: h,
                        treatSpam: d,
                    }),
                ],
            },
            n.id,
        ),
    });
}
function T(e) {
    let { channel: t, channelRecord: n, gotoChannel: l } = e,
        { enabled: s } = d.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        r = g.hH.useSetting(),
        A = (0, u.iJ)(n),
        x = !1,
        S = 0 === t.messages.length || a()(t.messages[0].timestamp).isSame(a()(), "day"),
        b = p.default.getUser(m.default.getId())?.hasFlag(E.nhx.SPAMMER) ?? !1,
        T = [];
    if (!t.collapsed) {
        let e = null,
            d = null,
            g = t.messages.slice(0, f.sz);
        g.forEach((t) => {
            if (!S && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, _.i$)(t.timestamp, "LL");
                T.push((0, i.jsx)(h.A, { className: I.yF, children: n }, n)), (e = a()(t.timestamp));
            }
            let o = null == d || (0, c.A)(n, d, t);
            (d = t),
                (x = x || (0, u.kf)(t)),
                T.push(
                    (0, i.jsx)(
                        N,
                        {
                            channel: n,
                            message: t,
                            compact: r,
                            isGroupStart: o,
                            treatSpam: !b && s && (0, u.kf)(t) && A,
                            gotoChannel: l,
                        },
                        t.id,
                    ),
                );
        }),
            t.messages.length >= f.sz &&
                T.push(
                    (0, i.jsx)(
                        "div",
                        {
                            className: I.Gr,
                            children: (0, i.jsx)(o.QWc, {
                                variant: "primary",
                                text: `${C.intl.string(C.t["9OB9hq"])} \u203A`,
                                onClick: (e) => l(e, g[g.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === T.length && (T = [(0, i.jsx)(o.y$y, {}, "spinner")]);
    }
    return x && A && d.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: I.DZ, children: T });
}
