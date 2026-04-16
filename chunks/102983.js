n.d(t, { h: () => c });
var i = n(627968),
    l = n(64700),
    r = n(397927),
    s = n(571694),
    a = n(954376),
    o = n(576692),
    u = n(652215),
    d = n(25792);
let c = l.memo(function (e) {
    let {
            channel: t,
            user: n,
            mentionCount: c = 0,
            isMentionLowImportance: h,
            size: g = r._3J.SIZE_32,
            status: m,
            isMobile: f,
            isTyping: A = !1,
            "aria-hidden": I = !1,
        } = e,
        E = (0, r.FT9)(g),
        p = l.useMemo(
            () =>
                t?.isDM() && null != n
                    ? (0, i.jsx)(r.euF, {
                          src: n.getAvatarURL(t?.getGuildId(), (0, r.FT9)(g), !1),
                          size: g,
                          "aria-hidden": I,
                          "aria-label": I ? void 0 : n.username,
                          status: m,
                          isMobile: !(c > 0) && f,
                          isTyping: A,
                      })
                    : t?.isMultiUserDM()
                      ? t?.recipients.length >= 2 && null == t.icon
                          ? (0, i.jsx)(a.A, {
                                "aria-hidden": I,
                                recipients: t.recipients,
                                size: (function (e) {
                                    switch (e) {
                                        case r._3J.SIZE_16:
                                        case r._3J.SIZE_20:
                                        case r._3J.SIZE_24:
                                        case r._3J.SIZE_32:
                                            return e;
                                        case r._3J.SIZE_40:
                                        case r._3J.SIZE_48:
                                            return r._3J.SIZE_40;
                                        case r._3J.SIZE_56:
                                        case r._3J.SIZE_80:
                                        case r._3J.SIZE_96:
                                        case r._3J.SIZE_120:
                                            return e;
                                        default:
                                            return r._3J.SIZE_32;
                                    }
                                })(g),
                                isTyping: A,
                                status: A ? u.clD.ONLINE : null,
                            })
                          : (0, i.jsx)(r.euF, {
                                src: (0, s.Y)(t) ?? void 0,
                                "aria-hidden": I,
                                size: g,
                                status: A ? u.clD.ONLINE : null,
                                isTyping: A,
                            })
                      : (0, i.jsx)(r.euF, { src: void 0, "aria-hidden": I, size: g }),
            [I, t, f, A, c, g, m, n],
        );
    return c <= 0
        ? p
        : (0, i.jsx)(o.i, {
              size: E,
              rounded: !t?.isMultiUserDM(),
              lowerBadge: (0, i.jsx)(r.hVq, {
                  count: c,
                  color: h ? r.LU0.colors.BACKGROUND_ACCENT.css : r.LU0.colors.STATUS_DANGER.css,
                  "aria-hidden": !0,
              }),
              lowerBadgeSize: { width: (0, r.o6S)(c) },
              children: (0, i.jsx)("div", { className: d.R, children: p }),
          });
});
