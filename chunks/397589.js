n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(481060),
    s = n(782568),
    l = n(592125),
    c = n(594174),
    u = n(63063),
    d = n(5192),
    f = n(992970),
    _ = n(111810),
    p = n(287941),
    h = n(477931),
    m = n(235894),
    g = n(981631),
    E = n(388032),
    b = n(975405);
let y = (e) => {
    var t;
    let { message: n } = e,
        y = i.useRef(null),
        O = (0, _.p7)("Message Header") && n.hasPotions(),
        v = l.Z.getChannel(n.getChannelId()),
        I = null == (t = n.potions) ? void 0 : t[0],
        T = i.useMemo(() => {
            var e;
            if (null == I) return null;
            let t = c.default.getUser(I.used_by);
            return null != (e = (0, d.y)(null == v ? void 0 : v.getGuildId(), null == v ? void 0 : v.id, t))
                ? e
                : null == t
                  ? void 0
                  : t.globalName;
        }, [I, v]),
        S = i.useCallback(() => {
            if (null != y.current && (0, m.Uw)(n)) {
                let { x: e, y: t, width: r, height: i } = y.current.getBoundingClientRect();
                (0, p.Z)(
                    n,
                    {
                        x: e,
                        y: t,
                        w: r,
                        h: i,
                    },
                    !0,
                    f.LL.UserTriggered,
                );
            }
        }, [n]),
        A = i.useCallback(() => {
            (0, s.Z)(u.Z.getArticleURL(g.BhN.CONFETTI_POTION));
        }, []);
    return O && null != T && (null == I ? void 0 : I.type) === h.B.CONFETTI
        ? (0, r.jsx)(o.P3F, {
              onFocus: S,
              onClick: A,
              "aria-label": E.intl.string(E.t.Mp5k6E),
              children: (0, r.jsx)(a.u, {
                  text: E.intl.formatToPlainString(E.t["FE++aN"], { user: T }),
                  children: (0, r.jsxs)("div", {
                      ref: y,
                      className: b.potionBadge,
                      children: [
                          (0, r.jsx)(o.l22, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              height: 12,
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-xs/bold",
                              color: "currentColor",
                              children: E.intl.string(E.t["8Rrro+"]),
                          }),
                      ],
                  }),
              }),
          })
        : null;
};
