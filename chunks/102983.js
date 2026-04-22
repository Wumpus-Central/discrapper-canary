n.d(t, { h: () => m });
var l = n(627968),
    i = n(64700),
    r = n(777666),
    s = n(827734),
    a = n(778712),
    u = n(97808),
    o = n(571694),
    d = n(954376),
    c = n(576692),
    h = n(652215),
    g = n(284352);
let m = i.memo(function (e) {
    let {
            channel: t,
            user: n,
            mentionCount: m = 0,
            isMentionLowImportance: I,
            size: E = a._3.SIZE_32,
            status: A,
            isMobile: f,
            isTyping: p = !1,
            "aria-hidden": S = !1,
        } = e,
        N = (0, a.FT)(E),
        x = i.useMemo(
            () =>
                t?.isDM() && null != n
                    ? (0, l.jsx)(u.eu, {
                          src: n.getAvatarURL(t?.getGuildId(), (0, a.FT)(E), !1),
                          size: E,
                          "aria-hidden": S,
                          "aria-label": S ? void 0 : n.username,
                          status: A,
                          isMobile: !(m > 0) && f,
                          isTyping: p,
                      })
                    : t?.isMultiUserDM()
                      ? t?.recipients.length >= 2 && null == t.icon
                          ? (0, l.jsx)(d.A, {
                                "aria-hidden": S,
                                recipients: t.recipients,
                                size: (function (e) {
                                    switch (e) {
                                        case a._3.SIZE_16:
                                        case a._3.SIZE_20:
                                        case a._3.SIZE_24:
                                        case a._3.SIZE_32:
                                            return e;
                                        case a._3.SIZE_40:
                                        case a._3.SIZE_48:
                                            return a._3.SIZE_40;
                                        case a._3.SIZE_56:
                                        case a._3.SIZE_80:
                                        case a._3.SIZE_96:
                                        case a._3.SIZE_120:
                                            return e;
                                        default:
                                            return a._3.SIZE_32;
                                    }
                                })(E),
                                isTyping: p,
                                status: p ? h.clD.ONLINE : null,
                            })
                          : (0, l.jsx)(u.eu, {
                                src: (0, o.Y)(t) ?? void 0,
                                "aria-hidden": S,
                                size: E,
                                status: p ? h.clD.ONLINE : null,
                                isTyping: p,
                            })
                      : (0, l.jsx)(u.eu, { src: void 0, "aria-hidden": S, size: E }),
            [S, t, f, p, m, E, A, n],
        );
    return m <= 0
        ? x
        : (0, l.jsx)(c.i, {
              size: N,
              rounded: !t?.isMultiUserDM(),
              lowerBadge: (0, l.jsx)(r.hV, {
                  count: m,
                  color: I ? s.A.colors.BACKGROUND_ACCENT.css : s.A.colors.STATUS_DANGER.css,
                  "aria-hidden": !0,
              }),
              lowerBadgeSize: { width: (0, r.o6)(m) },
              children: (0, l.jsx)("div", { className: g.R, children: x }),
          });
});
