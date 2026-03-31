n.d(t, { Z: () => N });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(3026),
    r = n(435371),
    o = n(397927),
    c = n(956793),
    d = n(576705),
    u = n(309010),
    h = n(954571),
    A = n(69555),
    _ = n(886019),
    m = n(846218),
    g = n(806246),
    p = n(358957),
    f = n(559405),
    x = n(708455),
    E = n(652215),
    I = n(985018),
    C = n(392951);
function N(e) {
    let { hangStatusActivity: t, channel: n, userId: N, isSelf: T = !1, analyticsSource: S, onAction: b } = e,
        y = (0, s.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        v = (0, s.bG)([d.A], () => d.A.can(E.xBc.CONNECT, n), [n]),
        j = null == t.emoji || (0, m.n)(t.emoji, n);
    l.useEffect(() => {
        h.default.track(E.HAw.VIEW_HANG_STATUS, { source: S, other_user_id: N, ...(0, g.A)(n.id) });
    }, [S, n.id, N]);
    let R = l.useCallback(() => {
            !y &&
                v &&
                (c.default.selectVoiceChannel(n.id),
                b?.(),
                h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: S,
                    ...(0, g.A)(n.id),
                    other_user_id: N,
                    cta_type: "join",
                }));
        }, [y, v, n.id, N, S, b]),
        O = l.useCallback(() => {
            if (!y || !j || null == t.state) return;
            let [e] = (0, p.e)(N, t.state);
            if (null != e) {
                if (e === x.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, A.hS)(t.details, t.emoji, !0);
                } else (0, A.Iq)(e, !0);
                b?.(),
                    h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                        source: S,
                        ...(0, g.A)(n.id),
                        other_user_id: N,
                        cta_type: "swipe",
                    });
            }
        }, [y, j, t, n.id, N, S, b]),
        L = (0, _.Au)(N, t);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)(f.A, { userId: N, size: 32, className: C.Kk, hangStatusActivity: t }),
            (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                className: C.qS,
                children: (0, i.jsx)(a.A, { delay: 0, children: L }),
            }),
            y && !T
                ? (0, i.jsx)(r.m_, {
                      text: j ? void 0 : I.intl.string(I.t["0LMpW+"]),
                      children: (0, i.jsx)("div", {
                          children: (0, i.jsx)(o.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: I.intl.string(I.t["0eHzpm"]),
                              onClick: O,
                              disabled: !j,
                          }),
                      }),
                  })
                : !T &&
                  v &&
                  (0, i.jsx)(o.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: I.intl.string(I.t["B/dHXL"]),
                      onClick: R,
                  }),
        ],
    });
}
