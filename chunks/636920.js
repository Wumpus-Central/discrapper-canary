n.d(t, { Z: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(435371),
    r = n(397927),
    o = n(956793),
    d = n(576705),
    c = n(309010),
    u = n(954571),
    h = n(69555),
    A = n(886019),
    g = n(846218),
    m = n(806246),
    p = n(358957),
    _ = n(559405),
    x = n(708455),
    f = n(652215),
    E = n(985018),
    C = n(334994);
function I(e) {
    let {
            hangStatusActivity: t,
            channel: n,
            userId: I,
            isSelf: S = !1,
            analyticsSource: b,
            onAction: N,
            className: T,
            iconClassName: j,
            textClassName: v,
        } = e,
        y = (0, s.bG)([c.A], () => c.A.getVoiceChannelId() === n.id, [n]),
        R = (0, s.bG)([d.A], () => d.A.can(f.xBc.CONNECT, n), [n]),
        O = null == t.emoji || (0, g.n)(t.emoji, n);
    l.useEffect(() => {
        u.default.track(f.HAw.VIEW_HANG_STATUS, { source: b, other_user_id: I, ...(0, m.A)(n.id) });
    }, [b, n.id, I]);
    let L = l.useCallback(() => {
            !y &&
                R &&
                (o.default.selectVoiceChannel(n.id),
                N?.(),
                u.default.track(f.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: b,
                    ...(0, m.A)(n.id),
                    other_user_id: I,
                    cta_type: "join",
                }));
        }, [y, R, n.id, I, b, N]),
        D = l.useCallback(() => {
            if (!y || !O || null == t.state) return;
            let [e] = (0, p.e)(I, t.state);
            if (null != e) {
                if (e === x.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, h.hS)(t.details, t.emoji, !0);
                } else (0, h.Iq)(e, !0);
                N?.(),
                    u.default.track(f.HAw.HANG_STATUS_CTA_CLICKED, {
                        source: b,
                        ...(0, m.A)(n.id),
                        other_user_id: I,
                        cta_type: "swipe",
                    });
            }
        }, [y, O, t, n.id, I, b, N]);
    return (0, i.jsxs)("div", {
        className: T ?? C.kL,
        children: [
            (0, i.jsx)(_.A, { userId: I, size: 32, className: j ?? C.Kk, hangStatusActivity: t }),
            (0, i.jsx)(r.Text, { variant: "text-md/medium", className: v ?? C.qS, children: (0, A.Au)(I, t) }),
            y && !S
                ? (0, i.jsx)(a.m_, {
                      text: O ? void 0 : E.intl.string(E.t["0LMpW+"]),
                      children: (0, i.jsx)("div", {
                          children: (0, i.jsx)(r.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: E.intl.string(E.t["0eHzpm"]),
                              onClick: D,
                              disabled: !O,
                          }),
                      }),
                  })
                : !S &&
                  R &&
                  (0, i.jsx)(r.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: E.intl.string(E.t["B/dHXL"]),
                      onClick: L,
                  }),
        ],
    });
}
