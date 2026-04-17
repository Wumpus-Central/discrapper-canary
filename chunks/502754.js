n.d(t, { A: () => b }), n(321073);
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
    _ = n(253932),
    m = n(961350),
    p = n(287809),
    g = n(405269),
    f = n(576456),
    E = n(712209),
    x = n(652215),
    I = n(985018),
    C = n(357242);
let N = { left: 4, right: -12 },
    T = [x.lAJ.THREAD_CREATED];
function S(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, treatSpam: d, gotoChannel: c } = e,
        u = (0, r.rm)(n.id ?? ""),
        h = l.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), c(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, c, n.id],
        ),
        _ = T.includes(n.type);
    return (0, i.jsx)(o.vN3, {
        offset: N,
        children: (0, i.jsxs)("div", {
            className: C.zC,
            onKeyDown: h,
            ...u,
            children: [
                !_ && (0, i.jsx)(f.A, { className: C.nn, onJump: (e) => c(e, n.id) }),
                (0, i.jsx)(A.A, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: C.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                    treatSpam: d,
                }),
            ],
        }),
    });
}
function b(e) {
    let { channel: t, channelRecord: n, gotoChannel: l } = e,
        { enabled: s } = d.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        r = _.hH.useSetting(),
        A = (0, u.iJ)(n),
        f = !1,
        N = 0 === t.messages.length || a()(t.messages[0].timestamp).isSame(a()(), "day"),
        T = p.default.getUser(m.default.getId())?.hasFlag(x.nhx.SPAMMER) ?? !1,
        b = [];
    if (!t.collapsed) {
        let e = null,
            d = null,
            _ = t.messages.slice(0, E.sz);
        _.forEach((t) => {
            if (!N && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, g.i$)(t.timestamp, "LL");
                b.push((0, i.jsx)(h.A, { className: C.yF, children: n }, n)), (e = a()(t.timestamp));
            }
            let o = null == d || (0, c.A)(n, d, t);
            (d = t),
                (f = f || (0, u.kf)(t)),
                b.push(
                    (0, i.jsx)(
                        S,
                        {
                            channel: n,
                            message: t,
                            compact: r,
                            isGroupStart: o,
                            treatSpam: !T && s && (0, u.kf)(t) && A,
                            gotoChannel: l,
                        },
                        t.id,
                    ),
                );
        }),
            t.messages.length >= E.sz &&
                b.push(
                    (0, i.jsx)(
                        "div",
                        {
                            className: C.Gr,
                            children: (0, i.jsx)(o.QWc, {
                                variant: "primary",
                                text: `${I.intl.string(I.t["9OB9hq"])} \u203A`,
                                onClick: (e) => l(e, _[_.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === b.length && (b = [(0, i.jsx)(o.y$y, {}, "spinner")]);
    }
    return f && A && d.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: C.DZ, children: b });
}
