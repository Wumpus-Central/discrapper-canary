i.d(t, { A: () => T });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    d = i(939249),
    r = i(90644),
    o = i(793574),
    c = i(688810),
    u = i(939341),
    A = i(623671),
    h = i(365185),
    g = i(915089),
    x = i(172710),
    m = i(92240),
    C = i(257367),
    _ = i(317572),
    p = i(939496),
    N = i(282197),
    f = i(584904),
    v = i(351638),
    j = i(531648),
    E = i(753713),
    S = i(646648),
    O = i(8738),
    I = i(996988),
    y = i(514566);
function T(e) {
    let t,
        { user: i, currentUser: s, activity: T, className: b, onClose: L } = e,
        M = (0, g.GV)(),
        V = (0, g.GV)(),
        { themeType: D } = (0, p.E)(),
        w = (0, h.A)({ activity: T, user: i }),
        G = (0, _.A)(T),
        U = null != G.text && "" !== G.text,
        { largeImage: P } = (0, u.XN)(T),
        { analyticsLocations: F } = (0, c.Ay)(o.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        k = (0, m.A)({ display: "live", user: i, activity: T, entry: w, analyticsLocations: F }),
        R = (0, C.A)({ userId: i.id, onAction: k });
    if (!(0, r.A)(T)) return null;
    let H = () =>
        i.id === s.id
            ? null
            : (0, l.jsx)("div", { className: y.o1, children: (0, l.jsx)(S.A, { user: i, activity: T, onAction: k }) });
    return (0, l.jsx)(c.f5, {
        value: F,
        children: (0, l.jsxs)(f.A, {
            ref: R,
            className: a()(y.Nr, b),
            onAction: k,
            onClose: L,
            "aria-labelledby": U ? `${V} ${M}` : M,
            children: [
                (0, l.jsx)(v.A, {
                    textId: V,
                    ...G,
                    contextMenu: (0, l.jsx)(O.A, { display: "live", user: i, activity: T, entry: w, onClose: L }),
                }),
                (0, l.jsx)("div", {
                    className: y.rf,
                    children: (0, l.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, l.jsx)(A.d, {
                                image: P,
                                size: D === I.d.MODAL_V2 ? A.w.SIZE_100 : A.w.SIZE_60,
                                className: y.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), k({ action: "OPEN_SPOTIFY_ALBUM" }), (0, x.QX)(T, i.id);
                                },
                            }),
                            (0, l.jsxs)("div", {
                                className: y.zH,
                                children: [
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(j.Q, {
                                                variant: "heading-sm/semibold",
                                                text: T.details,
                                                onClick: () => {
                                                    k({ action: "OPEN_SPOTIFY_TRACK" }), (0, x.Mp)(T);
                                                },
                                                id: M,
                                            }),
                                            0 === (t = T.state?.split("; ") ?? []).length
                                                ? null
                                                : null == T.sync_id
                                                  ? (0, l.jsx)(j.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, l.jsx)(j.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((e, s) =>
                                                            (0, l.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, l.jsx)(d.D, {
                                                                            className: a()(y.sd, y.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    k({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, x.mN)(T, i.id, s);
                                                                            },
                                                                            children: e,
                                                                        }),
                                                                        s < t.length - 1 ? ", " : "",
                                                                    ],
                                                                },
                                                                s,
                                                            ),
                                                        ),
                                                    }),
                                        ],
                                    }),
                                    (0, l.jsx)(N.A, { user: i, activity: T, className: y.jp }),
                                    (() => {
                                        let { timestamps: e } = T;
                                        if (null == e) return null;
                                        let { start: t, end: i } = e;
                                        return null == t || null == i ? null : (0, l.jsx)(E.A, { start: t, end: i });
                                    })(),
                                    D === I.d.MODAL_V2 && H(),
                                ],
                            }),
                            D === I.d.MODAL && H(),
                        ],
                    }),
                }),
                D !== I.d.MODAL && D !== I.d.MODAL_V2 && H(),
            ],
        }),
    });
}
