n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    l = n(681154),
    a = n(311907),
    s = n(713654),
    o = n(263063),
    c = n(698441),
    u = n(995273),
    d = n(734057),
    p = n(71393),
    h = n(287809),
    g = n(661191),
    f = n(652215),
    m = n(985018),
    A = n(310633);

function _(e) {
    var t;
    let { item: n } = e,
        _ = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                case "guildEvent":
                case "forumThread":
                case "generatedCandidate":
                    return "guild";
                case "contentInventory":
                    return "user";
                default:
                    return "unknown";
            }
        }, [n]),
        b = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                    return n.data.message.channel_id;
                case "generatedCandidate":
                    return n.data.item.channel_id;
                case "forumThread":
                    return n.data.threadChannel.id;
                default:
                    return;
            }
        }, [n]),
        E = i.useMemo(() => {
            if ("guildEvent" === n.data.kind) {
                let e = c.Ay.getGuildScheduledEvent(n.data.eventId);
                return null == e ? void 0 : e.guild_id;
            }
        }, [n]),
        O = i.useMemo(() => {
            if ("contentInventory" === n.data.kind) return n.data.content.author_id;
        }, [n]),
        y = i.useMemo(() => {
            switch (n.data.kind) {
                case "message":
                case "forumThread":
                    return g.default.extractTimestamp(n.data.message.id);
                case "guildEvent":
                    return g.default.extractTimestamp(n.data.eventId);
                case "generatedCandidate":
                    return g.default.extractTimestamp(n.data.item.content_id);
                default:
                    return n.timestamp;
            }
        }, [n]),
        I = (0, a.bG)([d.A], () => d.A.getChannel(b), [b]),
        v = null != (t = null == I ? void 0 : I.guild_id) ? t : E,
        S = (0, a.bG)([p.A], () => (null != v ? p.A.getGuild(v) : null), [v]),
        C = (0, a.bG)([h.default], () => (null != O ? h.default.getUser(O) : null), [O]);
    return "unknown" === _
        ? null
        : (0, r.jsx)("div", {
              className: A.kL,
              children: (0, r.jsxs)("div", {
                  className: A.wx,
                  children: [
                      (() => {
                          if ("guild" === _ && null != S)
                              return (0, r.jsx)(o.A, {
                                  guild: S,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === _ && null != C) {
                              let e = C.getAvatarURL(void 0, 50);
                              return (0, r.jsx)("img", {
                                  src: e,
                                  alt: C.username,
                                  className: A.my,
                              });
                          }
                          return null;
                      })(),
                      (0, r.jsxs)("div", {
                          className: A.Se,
                          children: [
                              (0, r.jsx)("div", {
                                  className: A.$,
                                  children: (0, r.jsxs)("div", {
                                      className: A.gH,
                                      children: [
                                          "guild" === _ && null != S
                                              ? (0, r.jsx)("div", {
                                                    className: A.DD,
                                                    children: S.name,
                                                })
                                              : "user" === _ && null != C
                                                ? (0, r.jsx)("div", {
                                                      className: A.DD,
                                                      children: C.username,
                                                  })
                                                : null,
                                          (0, r.jsx)("div", {
                                              className: A.vE,
                                              children: (0, u.jb)(y),
                                          }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (n.data.kind) {
                                          case "message":
                                              if (n.channelType === f.rbe.GUILD_ANNOUNCEMENT)
                                                  return m.intl.string(m.t["8P08G9"]);
                                              return m.intl.string(m.t.hMFMY9);
                                          case "generatedCandidate":
                                              return m.intl.string(m.t.ljgIO9);
                                          case "guildEvent":
                                              return m.intl.string(m.t["6pFsLQ"]);
                                          case "forumThread":
                                              return m.intl.string(m.t.bYNuVx);
                                          case "contentInventory":
                                              switch (n.data.content.content_type) {
                                                  case l.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return m.intl.string(m.t.fxOLPR);
                                                  case l.ContentInventoryEntryType.TOP_GAME:
                                                  case l.ContentInventoryEntryType.PLAYED_GAME:
                                                      return m.intl.string(m.t.ktOTRQ);
                                                  default:
                                                      return "".concat(n.data.content.content_type);
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === _)
                                      return (0, r.jsx)("div", {
                                          className: A.VA,
                                          children: (0, r.jsx)("span", {
                                              className: A.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != I && null != e) {
                                      let t = (0, s.gU)(I, S);
                                      return (0, r.jsxs)("div", {
                                          className: A.VA,
                                          children: [
                                              (0, r.jsx)("span", {
                                                  className: A.o4,
                                                  children: e,
                                              }),
                                              (0, r.jsx)("span", {
                                                  className: A.o4,
                                                  children: m.intl.string(m.t.CHUAYk),
                                              }),
                                              (0, r.jsxs)("span", {
                                                  className: A.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, r.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: A.p,
                                                          }),
                                                      I.name,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, r.jsx)("div", {
                                            className: A.VA,
                                            children: (0, r.jsx)("span", {
                                                className: A.o4,
                                                children: e,
                                            }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
