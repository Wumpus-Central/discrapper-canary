n.d(t, { Z: () => b });
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
    m = n(886019),
    p = n(846218),
    g = n(806246),
    _ = n(358957),
    f = n(559405),
    x = n(708455),
    C = n(652215),
    E = n(985018),
    I = n(334994);
function b(e) {
    let {
            hangStatusActivity: t,
            channel: n,
            userId: b,
            isSelf: N = !1,
            analyticsSource: S,
            onAction: T,
            className: v,
            iconClassName: y,
            textClassName: j,
        } = e,
        R = (0, s.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        O = (0, s.bG)([c.A], () => c.A.can(C.xBc.CONNECT, n), [n]),
        L = null == t.emoji || (0, p.n)(t.emoji, n);
    l.useEffect(() => {
        h.default.track(C.HAw.VIEW_HANG_STATUS, { source: S, other_user_id: b, ...(0, g.A)(n.id) });
    }, [S, n.id, b]);
    let M = l.useCallback(() => {
            !R &&
                O &&
                (d.default.selectVoiceChannel(n.id),
                T?.(),
                h.default.track(C.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: S,
                    ...(0, g.A)(n.id),
                    other_user_id: b,
                    cta_type: "join",
                }));
        }, [R, O, n.id, b, S, T]),
        D = l.useCallback(() => {
            if (!R || !L || null == t.state) return;
            let [e] = (0, _.e)(b, t.state);
            if (null != e) {
                if (e === x.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, A.hS)(t.details, t.emoji, !0);
                } else (0, A.Iq)(e, !0);
                T?.(),
                    h.default.track(C.HAw.HANG_STATUS_CTA_CLICKED, {
                        source: S,
                        ...(0, g.A)(n.id),
                        other_user_id: b,
                        cta_type: "swipe",
                    });
            }
        }, [R, L, t, n.id, b, S, T]),
        G = (0, m.Au)(b, t);
    return (0, i.jsxs)("div", {
        className: v ?? I.kL,
        children: [
            (0, i.jsx)(f.A, { userId: b, size: 32, className: y ?? I.Kk, hangStatusActivity: t }),
            (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                className: j ?? I.qS,
                children: (0, i.jsx)(a.A, { delay: 0, children: G }),
            }),
            R && !N
                ? (0, i.jsx)(r.m_, {
                      text: L ? void 0 : E.intl.string(E.t["0LMpW+"]),
                      children: (0, i.jsx)("div", {
                          children: (0, i.jsx)(o.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: E.intl.string(E.t["0eHzpm"]),
                              onClick: D,
                              disabled: !L,
                          }),
                      }),
                  })
                : !N &&
                  O &&
                  (0, i.jsx)(o.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: E.intl.string(E.t["B/dHXL"]),
                      onClick: M,
                  }),
        ],
    });
}
