n.d(t, { h: () => c });
var l = n(627968),
    i = n(64700),
    r = n(397927),
    s = n(571694),
    a = n(954376),
    u = n(576692),
    o = n(652215),
    d = n(813104);
let c = i.memo(function (e) {
    let {
            channel: t,
            user: n,
            mentionCount: c = 0,
            isMentionLowImportance: h,
            size: g = r._3J.SIZE_32,
            status: I,
            isMobile: A,
            isTyping: f = !1,
            "aria-hidden": E = !1,
        } = e,
        m = (0, r.FT9)(g),
        S = i.useMemo(
            () =>
                t?.isDM() && null != n
                    ? (0, l.jsx)(r.euF, {
                          src: n.getAvatarURL(t?.getGuildId(), (0, r.FT9)(g), !1),
                          size: g,
                          "aria-hidden": E,
                          "aria-label": E ? void 0 : n.username,
                          status: I,
                          isMobile: !(c > 0) && A,
                          isTyping: f,
                      })
                    : t?.isMultiUserDM()
                      ? t?.recipients.length >= 2 && null == t.icon
                          ? (0, l.jsx)(a.A, {
                                "aria-hidden": E,
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
                                isTyping: f,
                                status: f ? o.clD.ONLINE : null,
                            })
                          : (0, l.jsx)(r.euF, {
                                src: (0, s.Y)(t) ?? void 0,
                                "aria-hidden": E,
                                size: g,
                                status: f ? o.clD.ONLINE : null,
                                isTyping: f,
                            })
                      : (0, l.jsx)(r.euF, { src: void 0, "aria-hidden": E, size: g }),
            [E, t, A, f, c, g, I, n],
        );
    return c <= 0
        ? S
        : (0, l.jsx)(u.i, {
              size: m,
              rounded: !t?.isMultiUserDM(),
              lowerBadge: (0, l.jsx)(r.hVq, {
                  count: c,
                  color: h ? r.LU0.colors.BACKGROUND_ACCENT.css : r.LU0.colors.STATUS_DANGER.css,
                  "aria-hidden": !0,
              }),
              lowerBadgeSize: { width: (0, r.o6S)(c) },
              children: (0, l.jsx)("div", { className: d.R, children: S }),
          });
});
