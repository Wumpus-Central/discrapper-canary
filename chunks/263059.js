n.d(t, { Z: () => k }), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(503438),
    c = n(100527),
    u = n(906732),
    d = n(379357),
    f = n(358696),
    _ = n(649700),
    p = n(313201),
    h = n(952164),
    m = n(960870),
    g = n(139793),
    E = n(994746),
    b = n(273284),
    y = n(510659),
    O = n(287954),
    v = n(660579),
    I = n(652853),
    T = n(64621),
    S = n(448980),
    A = n(336383),
    C = n(194811),
    N = n(373826),
    R = n(262210),
    P = n(666984),
    w = n(386019),
    D = n(228168),
    x = n(671955),
    L = n(704543);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e) {
    var t;
    let { user: n, currentUser: a, activity: j, profileGuildId: k, className: U, onClose: G } = e,
        B = (0, p.Dt)(),
        Z = (0, p.Dt)(),
        V = i.useRef(null),
        { themeType: F } = (0, I.z)(),
        { interactionSource: H, interactionSourceId: Y } = (0, y.Xo)(),
        W = (0, _.Z)({
            activity: j,
            user: n,
        }),
        K = (0, E.Z)(j),
        z = null != K.text && "" !== K.text,
        { largeImage: q } = (0, d.FO)(j),
        { analyticsLocations: X } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Q = (0, m.Z)({
            display: "live",
            user: n,
            activity: j,
            entry: W,
            analyticsLocations: X,
        }),
        J = (0, g.Z)({
            userId: n.id,
            onAction: Q,
        });
    if (!(0, l.Z)(j)) return null;
    let $ = () => {
            var e, t;
            let a = null != (t = null == (e = j.state) ? void 0 : e.split(";")) ? t : [];
            return 0 === a.length
                ? null
                : null == j.sync_id
                  ? (0, r.jsx)(N.Z, {
                        variant: "text-xs/normal",
                        text: a.join(", "),
                    })
                  : (0, r.jsx)(N.Z, {
                        variant: "text-xs/normal",
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(s.P3F, {
                                            className: o()(L.clickableText, L.inline),
                                            onClick: (e) => {
                                                e.stopPropagation(),
                                                    Q({ action: "OPEN_SPOTIFY_ARTIST" }),
                                                    (0, h.d$)(j, n.id, t);
                                            },
                                            children: e,
                                        }),
                                        t < a.length - 1 ? ", " : "",
                                    ],
                                },
                                t,
                            ),
                        ),
                    });
        },
        ee = () => {
            let { timestamps: e } = j;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(R.Z, {
                      start: t,
                      end: n,
                  });
        },
        et = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)("div", {
                      className: L.actions,
                      children: (0, r.jsx)(P.Z, {
                          user: n,
                          activity: j,
                          onAction: Q,
                      }),
                  });
    if (null === F) return null;
    let en = null != (t = j.application_id) ? t : j.name,
        er = H === D.n_.ACTIVITY && Y === en;
    return (0, r.jsx)(u.Gt, {
        value: X,
        children: (0, r.jsx)(T.Z, {
            targetElementRef: V,
            sourceType: D.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(O.Z, {
                user: n,
                guildId: k,
                themeType: F,
                sourceId: en,
                sourceDetails: null == W ? (0, b.Z)(j) : null,
                entry: W,
                sourceType: D.n_.ACTIVITY,
                onAction: Q,
                children: () =>
                    (0, r.jsx)(v.Z, {
                        ref: V,
                        user: n,
                        className: L.toolbarContainer,
                        sourceType: D.n_.ACTIVITY,
                        interactionSourceId: en,
                        onAction: Q,
                        onShowToolbar: () => Q({ action: "HOVER_ACTIVITY_CARD" }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(w.Z, {
                                display: "live",
                                user: n,
                                activity: j,
                                entry: W,
                                onClose: G,
                                children: e,
                            }),
                        children: (0, r.jsxs)(A.Z, {
                            ref: J,
                            className: o()(U, { [L.hoisted]: er }),
                            onAction: Q,
                            onClose: G,
                            "aria-labelledby": z ? "".concat(Z, " ").concat(B) : B,
                            children: [
                                (0, r.jsx)(C.Z, M({ textId: Z }, K)),
                                (0, r.jsx)("div", {
                                    className: L.body,
                                    children: (0, r.jsxs)("div", {
                                        className: L.content,
                                        children: [
                                            (0, r.jsx)(f.E, {
                                                image: q,
                                                size: F === x.l.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
                                                className: L.clickableImage,
                                                onClick: (e) => {
                                                    e.stopPropagation(),
                                                        Q({ action: "OPEN_SPOTIFY_ALBUM" }),
                                                        (0, h.Z5)(j, n.id);
                                                },
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: L.details,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        children: [
                                                            (0, r.jsx)(N.f, {
                                                                variant: "heading-sm/semibold",
                                                                text: j.details,
                                                                onClick: () => {
                                                                    Q({ action: "OPEN_SPOTIFY_TRACK" }), (0, h.aG)(j);
                                                                },
                                                                id: B,
                                                            }),
                                                            $(),
                                                        ],
                                                    }),
                                                    (0, r.jsx)(S.Z, {
                                                        user: n,
                                                        activity: j,
                                                        className: L.badges,
                                                    }),
                                                    ee(),
                                                    F === x.l.MODAL_V2 && et(),
                                                ],
                                            }),
                                            F === x.l.MODAL && et(),
                                        ],
                                    }),
                                }),
                                F !== x.l.MODAL && F !== x.l.MODAL_V2 && et(),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
