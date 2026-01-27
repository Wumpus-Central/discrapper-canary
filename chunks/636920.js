n.d(t, {
    Z: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(435371),
    s = n(397927),
    o = n(956793),
    c = n(576705),
    u = n(309010),
    d = n(954571),
    p = n(69555),
    f = n(886019),
    m = n(846218),
    g = n(806246),
    y = n(358957),
    _ = n(559405),
    b = n(708455),
    A = n(652215),
    h = n(985018),
    v = n(334994);

function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e) {
    let {
            hangStatusActivity: t,
            channel: n,
            userId: S,
            isSelf: I = !1,
            analyticsSource: x,
            onAction: E,
            className: P,
            iconClassName: T,
            textClassName: N,
        } = e,
        w = (0, l.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        C = (0, l.bG)([c.A], () => c.A.can(A.xBc.CONNECT, n), [n]),
        D = null == t.emoji || (0, m.n)(t.emoji, n);
    i.useEffect(() => {
        d.default.track(
            A.HAw.VIEW_HANG_STATUS,
            O(
                {
                    source: x,
                    other_user_id: S,
                },
                (0, g.A)(n.id),
            ),
        );
    }, [x, n.id, S]);
    let L = i.useCallback(() => {
            !w &&
                C &&
                (o.default.selectVoiceChannel(n.id),
                null == E || E(),
                d.default.track(
                    A.HAw.HANG_STATUS_CTA_CLICKED,
                    j(
                        O(
                            {
                                source: x,
                            },
                            (0, g.A)(n.id),
                        ),
                        {
                            other_user_id: S,
                            cta_type: "join",
                        },
                    ),
                ));
        }, [w, C, n.id, S, x, E]),
        k = i.useCallback(() => {
            if (!w || !D || null == t.state) return;
            let [e] = (0, y.e)(S, t.state);
            if (null != e) {
                if (e === b.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, p.hS)(t.details, t.emoji, !0);
                } else (0, p.Iq)(e, !0);
                null == E || E(),
                    d.default.track(
                        A.HAw.HANG_STATUS_CTA_CLICKED,
                        j(
                            O(
                                {
                                    source: x,
                                },
                                (0, g.A)(n.id),
                            ),
                            {
                                other_user_id: S,
                                cta_type: "swipe",
                            },
                        ),
                    );
            }
        }, [w, D, t, n.id, S, x, E]);
    return (0, r.jsxs)("div", {
        className: null != P ? P : v.kL,
        children: [
            (0, r.jsx)(_.A, {
                userId: S,
                size: 32,
                className: null != T ? T : v.Kk,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: null != N ? N : v.qS,
                children: (0, f.Au)(S, t),
            }),
            w && !I
                ? (0, r.jsx)(a.m_, {
                      text: D ? void 0 : h.intl.string(h.t["0LMpW+"]),
                      children: (0, r.jsx)("div", {
                          children: (0, r.jsx)(s.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: h.intl.string(h.t["0eHzpm"]),
                              onClick: k,
                              disabled: !D,
                          }),
                      }),
                  })
                : !I &&
                  C &&
                  (0, r.jsx)(s.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: h.intl.string(h.t["B/dHXL"]),
                      onClick: L,
                  }),
        ],
    });
}
