n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(409626),
    f = n(611656),
    p = n(52129),
    _ = n(734057),
    h = n(760751),
    m = n(486020),
    g = n(332173),
    E = n(936755),
    b = n(985018),
    y = n(670567);

function O(e, t, n) {
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

function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = function (e) {
    let { gameId: t, channelId: a } = e,
        O = i.useRef(null),
        v = (0, o.bG)([h.A], () => h.A.getDetectableGame(t)),
        I = (0, o.bG)([_.A], () => _.A.getChannel(a)),
        T = null != I ? I.getGuildId() : null,
        C =
            null != v
                ? (e) => {
                      (0, u.L3)(e, async () => {
                          let { default: e } = await n.e("24843").then(n.bind(n, 348902));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  S(A({}, t), {
                                      game: v,
                                      guildId: T,
                                  }),
                              );
                      });
                  }
                : void 0,
        N =
            null != v
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: s()(y.Kk, y.FP),
                      src: m.Ay.getApplicationIconURL({
                          id: v.id,
                          icon: v.icon,
                          size: 32,
                      }),
                  })
                : null,
        R = (0, f.Ay)({
            applicationId: t,
            location: "GameMention",
            source: d.Ob.GameMention,
            trackEntryPointImpression: !1,
            autoTrackExposure: !1,
        }),
        w = i.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("56466").then(n.bind(n, 188841));
                return (t) => (0, r.jsx)(e, A({}, t));
            });
        }, []),
        P = null != v ? "@game ".concat(v.name) : void 0;
    return (0, r.jsx)(p.A, {
        applicationId: t,
        targetElementRef: O,
        source: d.Ob.GameMention,
        children: (e) => {
            var n;
            return (0, r.jsx)(l.m, {
                asContainer: !0,
                tag: "span",
                text: P,
                "aria-label": P,
                delay: 750,
                children: (0, r.jsxs)(
                    g.A,
                    S(
                        A(
                            {
                                onContextMenu: C,
                                ref: O,
                            },
                            e,
                        ),
                        {
                            onClick: (n) => {
                                if (R.shouldOpenGameProfile && null != t) {
                                    var r;
                                    null == (r = e.onClick) || r.call(e, n);
                                } else w();
                            },
                            children: [
                                (0, r.jsx)(E.A, {
                                    children: N,
                                }),
                                (0, r.jsx)("span", {
                                    className: y.UU,
                                    children:
                                        null != (n = null == v ? void 0 : v.name) ? n : b.intl.string(b.t["11pdXZ"]),
                                }),
                            ],
                        },
                    ),
                ),
            });
        },
    });
};
