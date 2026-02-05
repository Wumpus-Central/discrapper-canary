n.d(t, { h: () => c });
var l = n(627968),
    i = n(64700),
    s = n(397927),
    r = n(571694),
    a = n(954376),
    u = n(576692),
    o = n(652215),
    d = n(75379);
let c = i.memo(function (e) {
    let {
            channel: t,
            user: n,
            mentionCount: c = 0,
            isMentionLowImportance: h,
            size: g = s._3J.SIZE_32,
            status: I,
            isMobile: E,
            isTyping: A = !1,
            "aria-hidden": f = !1,
        } = e,
        m = (0, s.FT9)(g),
        S = i.useMemo(
            () =>
                t?.isDM() && null != n
                    ? (0, l.jsx)(s.euF, {
                          src: n.getAvatarURL(t?.getGuildId(), (0, s.FT9)(g), !1),
                          size: g,
                          "aria-hidden": f,
                          "aria-label": f ? void 0 : n.username,
                          status: I,
                          isMobile: !(c > 0) && E,
                          isTyping: A,
                      })
                    : t?.isMultiUserDM()
                      ? t?.recipients.length >= 2 && null == t.icon
                          ? (0, l.jsx)(a.A, {
                                "aria-hidden": f,
                                recipients: t.recipients,
                                size: (function (e) {
                                    switch (e) {
                                        case s._3J.SIZE_16:
                                        case s._3J.SIZE_20:
                                        case s._3J.SIZE_24:
                                        case s._3J.SIZE_32:
                                            return e;
                                        case s._3J.SIZE_40:
                                        case s._3J.SIZE_48:
                                            return s._3J.SIZE_40;
                                        case s._3J.SIZE_56:
                                        case s._3J.SIZE_80:
                                        case s._3J.SIZE_96:
                                        case s._3J.SIZE_120:
                                            return e;
                                        default:
                                            return s._3J.SIZE_32;
                                    }
                                })(g),
                                isTyping: A,
                                status: A ? o.clD.ONLINE : null,
                            })
                          : (0, l.jsx)(s.euF, {
                                src: (0, r.Y)(t) ?? void 0,
                                "aria-hidden": f,
                                size: g,
                                status: A ? o.clD.ONLINE : null,
                                isTyping: A,
                            })
                      : (0, l.jsx)(s.euF, { src: void 0, "aria-hidden": f, size: g }),
            [f, t, E, A, c, g, I, n],
        );
    return c <= 0
        ? S
        : (0, l.jsx)(u.i, {
              size: m,
              rounded: !t?.isMultiUserDM(),
              lowerBadge: (0, l.jsx)(s.hVq, {
                  count: c,
                  color: h ? s.LU0.colors.BACKGROUND_ACCENT.css : s.LU0.colors.STATUS_DANGER.css,
                  "aria-hidden": !0,
              }),
              lowerBadgeSize: { width: (0, s.o6S)(c) },
              children: (0, l.jsx)("div", { className: d.R, children: S }),
          });
});
