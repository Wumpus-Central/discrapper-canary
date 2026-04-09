n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    l = n(681154),
    r = n(311907),
    s = n(47167),
    o = n(713654),
    d = n(263063),
    c = n(698441),
    u = n(995273),
    A = n(734057),
    h = n(71393),
    _ = n(287809),
    m = n(661191),
    g = n(652215),
    p = n(985018),
    E = n(133535);
function I(e) {
    let { item: t } = e,
        n = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "guildEvent":
                case "forumThread":
                    return "guild";
                case "contentInventory":
                    return "user";
                default:
                    return "unknown";
            }
        }, [t]),
        I = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        f = a.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = c.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        C = a.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        T = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return m.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return m.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        N = (0, r.bG)([A.A], () => A.A.getChannel(I), [I]),
        S = (0, s.Ay)(N),
        x = N?.guild_id ?? f,
        v = (0, r.bG)([h.A], () => (null != x ? h.A.getGuild(x) : null), [x]),
        b = (0, r.bG)([_.default], () => (null != C ? _.default.getUser(C) : null), [C]);
    return "unknown" === n
        ? null
        : (0, i.jsx)("div", {
              className: E.kL,
              children: (0, i.jsxs)("div", {
                  className: E.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != v)
                              return (0, i.jsx)(d.Ay, {
                                  guild: v,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === n && null != b) {
                              let e = b.getAvatarURL(void 0, 50);
                              return (0, i.jsx)("img", { src: e, alt: b.username, className: E.my });
                          }
                          return null;
                      })(),
                      (0, i.jsxs)("div", {
                          className: E.Se,
                          children: [
                              (0, i.jsx)("div", {
                                  className: E.$,
                                  children: (0, i.jsxs)("div", {
                                      className: E.gH,
                                      children: [
                                          "guild" === n && null != v
                                              ? (0, i.jsx)("div", { className: E.DD, children: v.name })
                                              : "user" === n && null != b
                                                ? (0, i.jsx)("div", { className: E.DD, children: b.username })
                                                : null,
                                          (0, i.jsx)("div", { className: E.vE, children: (0, u.jb)(T) }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === g.rbe.GUILD_ANNOUNCEMENT)
                                                  return p.intl.string(p.t["8P08G9"]);
                                              return p.intl.string(p.t.hMFMY9);
                                          case "guildEvent":
                                              return p.intl.string(p.t["6pFsLQ"]);
                                          case "forumThread":
                                              return p.intl.string(p.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case l.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return p.intl.string(p.t.fxOLPR);
                                                  case l.ContentInventoryEntryType.TOP_GAME:
                                                  case l.ContentInventoryEntryType.PLAYED_GAME:
                                                      return p.intl.string(p.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, i.jsx)("div", {
                                          className: E.VA,
                                          children: (0, i.jsx)("span", { className: E.o4, children: e }),
                                      });
                                  if (null != N && null != e) {
                                      let t = (0, o.gU)(N, v);
                                      return (0, i.jsxs)("div", {
                                          className: E.VA,
                                          children: [
                                              (0, i.jsx)("span", { className: E.o4, children: e }),
                                              (0, i.jsx)("span", {
                                                  className: E.o4,
                                                  children: p.intl.string(p.t.CHUAYk),
                                              }),
                                              (0, i.jsxs)("span", {
                                                  className: E.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, i.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: E.p,
                                                          }),
                                                      S,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, i.jsx)("div", {
                                            className: E.VA,
                                            children: (0, i.jsx)("span", { className: E.o4, children: e }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
