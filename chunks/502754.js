"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(989349),
    r = n.n(l),
    a = n(837381),
    o = n(397927),
    c = n(559149),
    d = n(857069),
    u = n(694318),
    h = n(813516),
    A = n(906141),
    p = n(253932),
    g = n(961350),
    m = n(287809),
    _ = n(405269),
    f = n(576456),
    x = n(712209),
    C = n(652215),
    E = n(985018),
    I = n(359884);
let b = { left: 4, right: -12 },
    N = [C.lAJ.THREAD_CREATED];
function S(e) {
    let { channel: t, message: n, compact: l, isGroupStart: r, treatSpam: c, gotoChannel: d } = e,
        u = (0, a.rm)(n.id ?? ""),
        h = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id],
        ),
        p = N.includes(n.type);
    return (0, i.jsx)(o.vN3, {
        offset: b,
        children: (0, i.jsxs)(
            "div",
            {
                className: I.zC,
                onKeyDown: h,
                ...u,
                children: [
                    !p && (0, i.jsx)(f.A, { className: I.nn, onJump: (e) => d(e, n.id) }),
                    (0, i.jsx)(A.A, {
                        id: n.id,
                        message: n,
                        channel: t,
                        className: I.iU,
                        compact: l,
                        animateAvatar: !1,
                        isGroupStart: r,
                        onKeyDown: h,
                        treatSpam: c,
                    }),
                ],
            },
            n.id,
        ),
    });
}
function T(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        { enabled: l } = c.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        a = p.hH.useSetting(),
        A = (0, u.iJ)(n),
        f = !1,
        b = 0 === t.messages.length || r()(t.messages[0].timestamp).isSame(r()(), "day"),
        N = m.default.getUser(g.default.getId())?.hasFlag(C.nhx.SPAMMER) ?? !1,
        T = [];
    if (!t.collapsed) {
        let e = null,
            c = null,
            p = t.messages.slice(0, x.sz);
        p.forEach((t) => {
            if (!b && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, _.i$)(t.timestamp, "LL");
                T.push((0, i.jsx)(h.A, { className: I.yF, children: n }, n)), (e = r()(t.timestamp));
            }
            let o = null == c || (0, d.A)(n, c, t);
            (c = t),
                (f = f || (0, u.kf)(t)),
                T.push(
                    (0, i.jsx)(
                        S,
                        {
                            channel: n,
                            message: t,
                            compact: a,
                            isGroupStart: o,
                            treatSpam: !N && l && (0, u.kf)(t) && A,
                            gotoChannel: s,
                        },
                        t.id,
                    ),
                );
        }),
            t.messages.length >= x.sz &&
                T.push(
                    (0, i.jsx)(
                        "div",
                        {
                            className: I.Gr,
                            children: (0, i.jsx)(o.QWc, {
                                variant: "primary",
                                text: `${E.intl.string(E.t["9OB9hq"])} \u203A`,
                                onClick: (e) => s(e, p[p.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === T.length && (T = [(0, i.jsx)(o.y$y, {}, "spinner")]);
    }
    return f && A && c.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: I.DZ, children: T });
}
