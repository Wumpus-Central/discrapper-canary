n.d(t, {
    E: () => S,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(417597),
    o = n(435371),
    c = n(397927),
    u = n(956793),
    d = n(576705),
    f = n(309010),
    p = n(954571),
    h = n(69555),
    b = n(886019),
    g = n(846218),
    m = n(806246),
    A = n(358957),
    y = n(559405),
    O = n(708455),
    j = n(652215),
    v = n(985018),
    x = n(889599),
    E = n(248789);

function _(e) {
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

function C(e, t) {
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
    let { hangStatusActivity: t, channel: n, userId: i, setPopoutRef: S } = e,
        I = l.useRef(null),
        N = (0, s.bG)([f.A], () => f.A.getVoiceChannelId() === n.id),
        T = (0, s.bG)([d.A], () => d.A.can(j.xBc.CONNECT, n)),
        P = (null == t ? void 0 : t.emoji) == null || (0, g.n)(t.emoji, n);
    l.useEffect(() => {
        null == S || S(null == I ? void 0 : I.current);
    }, [I, S]),
        l.useEffect(() => {
            p.default.track(
                j.HAw.VIEW_HANG_STATUS,
                _(
                    {
                        source: "HangStatusPopout",
                        other_user_id: i,
                    },
                    (0, m.A)(n.id),
                ),
            );
        }, [n.guild_id, n.id, i]);
    let w = l.useCallback(() => {
            !N &&
                T &&
                (u.default.selectVoiceChannel(n.id),
                p.default.track(
                    j.HAw.HANG_STATUS_CTA_CLICKED,
                    C(
                        _(
                            {
                                source: "HangStatusPopout",
                            },
                            (0, m.A)(n.id),
                        ),
                        {
                            other_user_id: i,
                            cta_type: "join",
                        },
                    ),
                ));
        }, [N, T, n.id, i]),
        R = l.useCallback(() => {
            if (!N || !P || null == t.state) return;
            let [e] = (0, A.e)(i, t.state);
            if (null != e) {
                if (e === O.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, h.hS)(t.details, t.emoji, !0);
                } else (0, h.Iq)(e, !0);
                p.default.track(
                    j.HAw.HANG_STATUS_CTA_CLICKED,
                    C(
                        _(
                            {
                                source: "HangStatusPopout",
                            },
                            (0, m.A)(n.id),
                        ),
                        {
                            other_user_id: i,
                            cta_type: "swipe",
                        },
                    ),
                );
            }
        }, [N, P, t, n.id, i]);
    return (0, r.jsxs)("div", {
        ref: I,
        className: a()(E.popover, x.kL),
        children: [
            (0, r.jsx)(y.A, {
                userId: i,
                size: 32,
                className: x.Kk,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-md/medium",
                className: x.qS,
                children: (0, b.Au)(i, t),
            }),
            N
                ? (0, r.jsx)(o.m_, {
                      text: P ? void 0 : v.intl.string(v.t["0LMpW+"]),
                      children: (0, r.jsx)("div", {
                          children: (0, r.jsx)(c.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: v.intl.string(v.t["0eHzpm"]),
                              onClick: R,
                              disabled: !P,
                          }),
                      }),
                  })
                : T &&
                  (0, r.jsx)(c.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: v.intl.string(v.t["B/dHXL"]),
                      onClick: w,
                  }),
        ],
    });
}
