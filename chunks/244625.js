n.d(t, { A: () => f });
var a = n(627968),
    i = n(64700),
    s = n(681154),
    l = n(311907),
    r = n(47167),
    d = n(713654),
    o = n(263063),
    c = n(698441),
    u = n(995273),
    m = n(734057),
    h = n(71393),
    g = n(287809),
    p = n(661191),
    v = n(652215),
    x = n(985018),
    A = n(950156);
function f(e) {
    let { item: t } = e,
        n = i.useMemo(() => {
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
        f = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        _ = i.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = c.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        y = i.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        b = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return p.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return p.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        I = (0, l.bG)([m.A], () => m.A.getChannel(f), [f]),
        j = (0, r.Ay)(I),
        E = I?.guild_id ?? _,
        k = (0, l.bG)([h.A], () => (null != E ? h.A.getGuild(E) : null), [E]),
        T = (0, l.bG)([g.default], () => (null != y ? g.default.getUser(y) : null), [y]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: A.kL,
              children: (0, a.jsxs)("div", {
                  className: A.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != k)
                              return (0, a.jsx)(o.Ay, {
                                  guild: k,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === n && null != T) {
                              let e = T.getAvatarURL(void 0, 50);
                              return (0, a.jsx)("img", { src: e, alt: T.username, className: A.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: A.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: A.$,
                                  children: (0, a.jsxs)("div", {
                                      className: A.gH,
                                      children: [
                                          "guild" === n && null != k
                                              ? (0, a.jsx)("div", { className: A.DD, children: k.name })
                                              : "user" === n && null != T
                                                ? (0, a.jsx)("div", { className: A.DD, children: T.username })
                                                : null,
                                          (0, a.jsx)("div", { className: A.vE, children: (0, u.jb)(b) }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === v.rbe.GUILD_ANNOUNCEMENT)
                                                  return x.intl.string(x.t["8P08G9"]);
                                              return x.intl.string(x.t.hMFMY9);
                                          case "guildEvent":
                                              return x.intl.string(x.t["6pFsLQ"]);
                                          case "forumThread":
                                              return x.intl.string(x.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case s.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return x.intl.string(x.t.fxOLPR);
                                                  case s.ContentInventoryEntryType.TOP_GAME:
                                                  case s.ContentInventoryEntryType.PLAYED_GAME:
                                                      return x.intl.string(x.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: A.VA,
                                          children: (0, a.jsx)("span", { className: A.o4, children: e }),
                                      });
                                  if (null != I && null != e) {
                                      let t = (0, d.gU)(I, k);
                                      return (0, a.jsxs)("div", {
                                          className: A.VA,
                                          children: [
                                              (0, a.jsx)("span", { className: A.o4, children: e }),
                                              (0, a.jsx)("span", {
                                                  className: A.o4,
                                                  children: x.intl.string(x.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)("span", {
                                                  className: A.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: A.p,
                                                          }),
                                                      j,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: A.VA,
                                            children: (0, a.jsx)("span", { className: A.o4, children: e }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
