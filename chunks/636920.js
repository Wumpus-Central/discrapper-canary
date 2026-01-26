n.d(t, {
    Z: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(435371),
    o = n(397927),
    l = n(956793),
    c = n(576705),
    u = n(309010),
    d = n(954571),
    f = n(69555),
    p = n(886019),
    _ = n(846218),
    h = n(806246),
    m = n(358957),
    g = n(559405),
    E = n(708455),
    y = n(652215),
    b = n(985018),
    O = n(334994);

function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 32;

function C(e) {
    let {
            hangStatusActivity: t,
            channel: n,
            userId: v,
            isSelf: I = !1,
            analyticsSource: C,
            onAction: N,
            className: w,
            iconClassName: R,
            textClassName: P,
        } = e,
        D = (0, a.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        x = (0, a.bG)([c.A], () => c.A.can(y.xBc.CONNECT, n), [n]),
        L = null == t.emoji || (0, _.n)(t.emoji, n);
    i.useEffect(() => {
        d.default.track(
            y.HAw.VIEW_HANG_STATUS,
            A(
                {
                    source: C,
                    other_user_id: v,
                },
                (0, h.A)(n.id),
            ),
        );
    }, [C, n.id, v]);
    let j = i.useCallback(() => {
            !D &&
                x &&
                (l.default.selectVoiceChannel(n.id),
                null == N || N(),
                d.default.track(
                    y.HAw.HANG_STATUS_CTA_CLICKED,
                    S(
                        A(
                            {
                                source: C,
                            },
                            (0, h.A)(n.id),
                        ),
                        {
                            other_user_id: v,
                            cta_type: "join",
                        },
                    ),
                ));
        }, [D, x, n.id, v, C, N]),
        M = i.useCallback(() => {
            if (!D || !L || null == t.state) return;
            let [e] = (0, m.e)(v, t.state);
            if (null != e) {
                if (e === E.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, f.hS)(t.details, t.emoji, !0);
                } else (0, f.Iq)(e, !0);
                null == N || N(),
                    d.default.track(
                        y.HAw.HANG_STATUS_CTA_CLICKED,
                        S(
                            A(
                                {
                                    source: C,
                                },
                                (0, h.A)(n.id),
                            ),
                            {
                                other_user_id: v,
                                cta_type: "swipe",
                            },
                        ),
                    );
            }
        }, [D, L, t, n.id, v, C, N]);
    return (0, r.jsxs)("div", {
        className: null != w ? w : O.kL,
        children: [
            (0, r.jsx)(g.A, {
                userId: v,
                size: T,
                className: null != R ? R : O.Kk,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                className: null != P ? P : O.qS,
                children: (0, p.Au)(v, t),
            }),
            D && !I
                ? (0, r.jsx)(s.m_, {
                      text: L ? void 0 : b.intl.string(b.t["0LMpW+"]),
                      children: (0, r.jsx)("div", {
                          children: (0, r.jsx)(o.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: b.intl.string(b.t["0eHzpm"]),
                              onClick: M,
                              disabled: !L,
                          }),
                      }),
                  })
                : !I &&
                  x &&
                  (0, r.jsx)(o.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: b.intl.string(b.t["B/dHXL"]),
                      onClick: j,
                  }),
        ],
    });
}
