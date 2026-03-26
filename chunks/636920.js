"use strict";
n.d(t, { Z: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(3026),
    a = n(435371),
    o = n(397927),
    c = n(956793),
    d = n(576705),
    u = n(309010),
    h = n(954571),
    A = n(69555),
    m = n(886019),
    p = n(846218),
    g = n(806246),
    _ = n(358957),
    f = n(559405),
    x = n(708455),
    C = n(652215),
    E = n(985018),
    I = n(334994);
function N(e) {
    let { hangStatusActivity: t, channel: n, userId: N, isSelf: b = !1, analyticsSource: S, onAction: T } = e,
        v = (0, l.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        y = (0, l.bG)([d.A], () => d.A.can(C.xBc.CONNECT, n), [n]),
        j = null == t.emoji || (0, p.n)(t.emoji, n);
    s.useEffect(() => {
        h.default.track(C.HAw.VIEW_HANG_STATUS, { source: S, other_user_id: N, ...(0, g.A)(n.id) });
    }, [S, n.id, N]);
    let R = s.useCallback(() => {
            !v &&
                y &&
                (c.default.selectVoiceChannel(n.id),
                T?.(),
                h.default.track(C.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: S,
                    ...(0, g.A)(n.id),
                    other_user_id: N,
                    cta_type: "join",
                }));
        }, [v, y, n.id, N, S, T]),
        O = s.useCallback(() => {
            if (!v || !j || null == t.state) return;
            let [e] = (0, _.e)(N, t.state);
            if (null != e) {
                if (e === x.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, A.hS)(t.details, t.emoji, !0);
                } else (0, A.Iq)(e, !0);
                T?.(),
                    h.default.track(C.HAw.HANG_STATUS_CTA_CLICKED, {
                        source: S,
                        ...(0, g.A)(n.id),
                        other_user_id: N,
                        cta_type: "swipe",
                    });
            }
        }, [v, j, t, n.id, N, S, T]),
        L = (0, m.Au)(N, t);
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [
            (0, i.jsx)(f.A, { userId: N, size: 32, className: I.Kk, hangStatusActivity: t }),
            (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                className: I.qS,
                children: (0, i.jsx)(r.A, { delay: 0, children: L }),
            }),
            v && !b
                ? (0, i.jsx)(a.m_, {
                      text: j ? void 0 : E.intl.string(E.t["0LMpW+"]),
                      children: (0, i.jsx)("div", {
                          children: (0, i.jsx)(o.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: E.intl.string(E.t["0eHzpm"]),
                              onClick: O,
                              disabled: !j,
                          }),
                      }),
                  })
                : !b &&
                  y &&
                  (0, i.jsx)(o.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: E.intl.string(E.t["B/dHXL"]),
                      onClick: R,
                  }),
        ],
    });
}
