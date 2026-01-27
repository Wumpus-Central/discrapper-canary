n.d(t, {
    A: () => O,
    n: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(990078),
    o = n(397927),
    s = n(442433),
    l = n(50268),
    c = n(409626),
    u = n(692969),
    d = n(243949),
    f = n(20805),
    p = n(420706),
    _ = n(985018),
    h = n(596020);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = "content-inventory-context";

function O(e) {
    var t;
    let { user: n, guildId: m, channel: E, entry: O, onSelect: v, disableGameProfileLinks: A } = e,
        I = i.useRef(null),
        S = i.useContext(p.Jd),
        T = (0, d.A)({
            userId: n.id,
            guildId: m,
            channelId: null == E ? void 0 : E.id,
            onAction: S,
        }),
        C = (0, l.A)({
            id: n.id,
            label: _.intl.string(_.t["/AXYnE"]),
        }),
        N = "application_id" in O.extra ? O.extra.application_id : null,
        w = (0, l.A)({
            id: N,
            label: _.intl.string(_.t["FfCL+6"]),
        }),
        R = (0, f.zD)(O),
        P = (0, u.A)({
            location: "ContentPopoutContextMenu",
            applicationId: R && !0 !== A ? (null == (t = O.extra) ? void 0 : t.application_id) : void 0,
            source: c.Ob.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: O.author_id,
        });
    return (0, r.jsx)(o.YNO, {
        targetElementRef: I,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.W1t, {
                "data-menu-migrated-auto": !0,
                navId: b,
                onClose: () => {
                    (0, s.Z_)(), t();
                },
                "aria-label": _.intl.string(_.t.liqwPJ),
                onSelect: v,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(o.rXV, {
                            children: [
                                T,
                                null != P &&
                                    (0, r.jsx)(o.Drp, {
                                        id: "game-profile",
                                        label: _.intl.string(_.t.f7aVGn),
                                        action: (e) => {
                                            P(e), null == S || S();
                                        },
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(o.rXV, {
                            children: [C, w],
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(a.m, {
                asContainer: !0,
                text: _.intl.string(_.t["UKOtz+"]),
                children: (0, r.jsx)(
                    o.DUT,
                    y(
                        g(
                            {
                                innerRef: I,
                                className: h.r,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(o.jNK, {
                                color: "currentColor",
                                size: "custom",
                                width: 16,
                                height: 16,
                            }),
                        },
                    ),
                ),
            }),
    });
}
