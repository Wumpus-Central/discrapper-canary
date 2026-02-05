n.d(t, { Z: () => S });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(3026),
    r = n(435371),
    o = n(397927),
    d = n(956793),
    c = n(576705),
    u = n(309010),
    h = n(954571),
    A = n(69555),
    g = n(886019),
    m = n(846218),
    p = n(806246),
    _ = n(358957),
    x = n(559405),
    f = n(708455),
    E = n(652215),
    C = n(985018),
    I = n(334994);
function S(e) {
    let {
            hangStatusActivity: t,
            channel: n,
            userId: S,
            isSelf: b = !1,
            analyticsSource: N,
            onAction: T,
            className: j,
            iconClassName: v,
            textClassName: y,
        } = e,
        R = (0, s.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        O = (0, s.bG)([c.A], () => c.A.can(E.xBc.CONNECT, n), [n]),
        L = null == t.emoji || (0, m.n)(t.emoji, n);
    l.useEffect(() => {
        h.default.track(E.HAw.VIEW_HANG_STATUS, { source: N, other_user_id: S, ...(0, p.A)(n.id) });
    }, [N, n.id, S]);
    let M = l.useCallback(() => {
            !R &&
                O &&
                (d.default.selectVoiceChannel(n.id),
                T?.(),
                h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: N,
                    ...(0, p.A)(n.id),
                    other_user_id: S,
                    cta_type: "join",
                }));
        }, [R, O, n.id, S, N, T]),
        D = l.useCallback(() => {
            if (!R || !L || null == t.state) return;
            let [e] = (0, _.e)(S, t.state);
            if (null != e) {
                if (e === f.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, A.hS)(t.details, t.emoji, !0);
                } else (0, A.Iq)(e, !0);
                T?.(),
                    h.default.track(E.HAw.HANG_STATUS_CTA_CLICKED, {
                        source: N,
                        ...(0, p.A)(n.id),
                        other_user_id: S,
                        cta_type: "swipe",
                    });
            }
        }, [R, L, t, n.id, S, N, T]),
        G = (0, g.Au)(S, t);
    return (0, i.jsxs)("div", {
        className: j ?? I.kL,
        children: [
            (0, i.jsx)(x.A, { userId: S, size: 32, className: v ?? I.Kk, hangStatusActivity: t }),
            (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                className: y ?? I.qS,
                children: (0, i.jsx)(a.A, { children: G }),
            }),
            R && !b
                ? (0, i.jsx)(r.m_, {
                      text: L ? void 0 : C.intl.string(C.t["0LMpW+"]),
                      children: (0, i.jsx)("div", {
                          children: (0, i.jsx)(o.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: C.intl.string(C.t["0eHzpm"]),
                              onClick: D,
                              disabled: !L,
                          }),
                      }),
                  })
                : !b &&
                  O &&
                  (0, i.jsx)(o.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: C.intl.string(C.t["B/dHXL"]),
                      onClick: M,
                  }),
        ],
    });
}
