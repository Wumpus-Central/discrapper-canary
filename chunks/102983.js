n.d(t, {
    h: () => d,
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(571694),
    s = n(954376),
    o = n(576692),
    u = n(652215),
    c = n(75379);
let d = r.memo(function (e) {
    let {
            channel: t,
            user: n,
            mentionCount: d = 0,
            isMentionLowImportance: h,
            size: p = l._3J.SIZE_32,
            status: f,
            isMobile: g,
            isTyping: m = !1,
            "aria-hidden": y = !1,
        } = e,
        A = (0, l.FT9)(p),
        v = r.useMemo(() => {
            if ((null == t ? void 0 : t.isDM()) && null != n)
                return (0, i.jsx)(l.euF, {
                    src: n.getAvatarURL(null == t ? void 0 : t.getGuildId(), (0, l.FT9)(p), !1),
                    size: p,
                    "aria-hidden": y,
                    "aria-label": y ? void 0 : n.username,
                    status: f,
                    isMobile: !(d > 0) && g,
                    isTyping: m,
                });
            if (null == t ? void 0 : t.isMultiUserDM()) {
                var e;
                return (null == t ? void 0 : t.recipients.length) >= 2 && null == t.icon
                    ? (0, i.jsx)(s.A, {
                          "aria-hidden": y,
                          recipients: t.recipients,
                          size: (function (e) {
                              switch (e) {
                                  case l._3J.SIZE_16:
                                  case l._3J.SIZE_20:
                                  case l._3J.SIZE_24:
                                  case l._3J.SIZE_32:
                                      return e;
                                  case l._3J.SIZE_40:
                                  case l._3J.SIZE_48:
                                      return l._3J.SIZE_40;
                                  case l._3J.SIZE_56:
                                  case l._3J.SIZE_80:
                                  case l._3J.SIZE_96:
                                  case l._3J.SIZE_120:
                                      return e;
                                  default:
                                      return l._3J.SIZE_32;
                              }
                          })(p),
                          isTyping: m,
                          status: m ? u.clD.ONLINE : null,
                      })
                    : (0, i.jsx)(l.euF, {
                          src: null != (e = (0, a.Y)(t)) ? e : void 0,
                          "aria-hidden": y,
                          size: p,
                          status: m ? u.clD.ONLINE : null,
                          isTyping: m,
                      });
            }
            return (0, i.jsx)(l.euF, {
                src: void 0,
                "aria-hidden": y,
                size: p,
            });
        }, [y, t, g, m, d, p, f, n]);
    return d <= 0
        ? v
        : (0, i.jsx)(o.i, {
              size: A,
              rounded: null == t || !t.isMultiUserDM(),
              lowerBadge: (0, i.jsx)(l.hVq, {
                  count: d,
                  color: h ? l.LU0.colors.BACKGROUND_ACCENT.css : l.LU0.colors.STATUS_DANGER.css,
                  "aria-hidden": !0,
              }),
              lowerBadgeSize: {
                  width: (0, l.o6S)(d),
              },
              children: (0, i.jsx)("div", {
                  className: c.R,
                  children: v,
              }),
          });
});
