"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(90644),
    u = n(793574),
    c = n(688810),
    d = n(939341),
    _ = n(623671),
    f = n(365185),
    p = n(915089),
    h = n(172710),
    m = n(92240),
    g = n(257367),
    E = n(317572),
    A = n(939496),
    I = n(282197),
    T = n(584904),
    y = n(351638),
    S = n(531648),
    v = n(753713),
    C = n(646648),
    b = n(8738),
    N = n(996988),
    R = n(380297);
function O(e) {
    let { user: t, currentUser: n, activity: a, className: O, onClose: D } = e,
        L = (0, p.GV)(),
        w = (0, p.GV)(),
        { themeType: x } = (0, A.E)(),
        P = (0, f.A)({ activity: a, user: t }),
        M = (0, E.A)(a),
        k = null != M.text && "" !== M.text,
        { largeImage: U } = (0, d.XN)(a),
        { analyticsLocations: G } = (0, c.Ay)(u.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        V = (0, m.A)({ display: "live", user: t, activity: a, entry: P, analyticsLocations: G }),
        F = (0, g.A)({ userId: t.id, onAction: V });
    if (!(0, l.A)(a)) return null;
    let B = () => {
            let e = a.state?.split("; ") ?? [];
            return 0 === e.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(S.A, { variant: "text-xs/normal", text: e.join(", ") })
                  : (0, r.jsx)(S.A, {
                        variant: "text-xs/normal",
                        text: e.map((n, l) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.DUT, {
                                            className: s()(R.sd, R.mG),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    V({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                    (0, h.mN)(a, t.id, l);
                                            },
                                            children: n,
                                        }),
                                        l < e.length - 1 ? ", " : "",
                                    ],
                                },
                                l,
                            ),
                        ),
                    });
        },
        j = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n ? null : (0, r.jsx)(v.A, { start: t, end: n });
        },
        H = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: R.o1,
                      children: (0, r.jsx)(C.A, { user: t, activity: a, onAction: V }),
                  });
    return (0, r.jsx)(c.f5, {
        value: G,
        children: (0, r.jsxs)(T.A, {
            ref: F,
            className: s()(R.Nr, O),
            onAction: V,
            onClose: D,
            "aria-labelledby": k ? `${w} ${L}` : L,
            children: [
                (0, r.jsx)(y.A, {
                    textId: w,
                    ...M,
                    contextMenu: (0, r.jsx)(b.A, { display: "live", user: t, activity: a, entry: P, onClose: D }),
                }),
                (0, r.jsx)("div", {
                    className: R.rf,
                    children: (0, r.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, r.jsx)(_.d, {
                                image: U,
                                size: x === N.d.MODAL_V2 ? _.w.SIZE_100 : _.w.SIZE_60,
                                className: R.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), V({ action: "OPEN_SPOTIFY_ALBUM" }), (0, h.QX)(a, t.id);
                                },
                            }),
                            (0, r.jsxs)("div", {
                                className: R.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(S.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    V({ action: "OPEN_SPOTIFY_TRACK" }), (0, h.Mp)(a);
                                                },
                                                id: L,
                                            }),
                                            B(),
                                        ],
                                    }),
                                    (0, r.jsx)(I.A, { user: t, activity: a, className: R.jp }),
                                    j(),
                                    x === N.d.MODAL_V2 && H(),
                                ],
                            }),
                            x === N.d.MODAL && H(),
                        ],
                    }),
                }),
                x !== N.d.MODAL && x !== N.d.MODAL_V2 && H(),
            ],
        }),
    });
}
