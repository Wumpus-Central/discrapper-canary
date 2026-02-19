"use strict";
n.d(t, { Z: () => b });
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
    p = n(886019),
    g = n(846218),
    m = n(806246),
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
        R = (0, l.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]),
        O = (0, l.bG)([d.A], () => d.A.can(C.xBc.CONNECT, n), [n]),
        L = null == t.emoji || (0, g.n)(t.emoji, n);
    s.useEffect(() => {
        h.default.track(C.HAw.VIEW_HANG_STATUS, { source: S, other_user_id: b, ...(0, m.A)(n.id) });
    }, [S, n.id, b]);
    let M = s.useCallback(() => {
            !R &&
                O &&
                (c.default.selectVoiceChannel(n.id),
                T?.(),
                h.default.track(C.HAw.HANG_STATUS_CTA_CLICKED, {
                    source: S,
                    ...(0, m.A)(n.id),
                    other_user_id: b,
                    cta_type: "join",
                }));
        }, [R, O, n.id, b, S, T]),
        D = s.useCallback(() => {
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
                        ...(0, m.A)(n.id),
                        other_user_id: b,
                        cta_type: "swipe",
                    });
            }
        }, [R, L, t, n.id, b, S, T]),
        G = (0, p.Au)(b, t);
    return (0, i.jsxs)("div", {
        className: v ?? I.kL,
        children: [
            (0, i.jsx)(f.A, { userId: b, size: 32, className: y ?? I.Kk, hangStatusActivity: t }),
            (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                className: j ?? I.qS,
                children: (0, i.jsx)(r.A, { delay: 0, children: G }),
            }),
            R && !N
                ? (0, i.jsx)(a.m_, {
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
