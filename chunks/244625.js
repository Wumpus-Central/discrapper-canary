n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(681154),
    a = n(311907),
    s = n(713654),
    o = n(263063),
    d = n(698441),
    c = n(995273),
    u = n(734057),
    A = n(71393),
    h = n(287809),
    _ = n(661191),
    m = n(652215),
    p = n(985018),
    g = n(444175);
function E(e) {
    let { item: t } = e,
        n = r.useMemo(() => {
            switch (t.data.kind) {
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
        }, [t]),
        E = r.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "generatedCandidate":
                    return t.data.item.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        I = r.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = d.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        f = r.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        C = r.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return _.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return _.default.extractTimestamp(t.data.eventId);
                case "generatedCandidate":
                    return _.default.extractTimestamp(t.data.item.content_id);
                default:
                    return t.timestamp;
            }
        }, [t]),
        T = (0, a.bG)([u.A], () => u.A.getChannel(E), [E]),
        N = T?.guild_id ?? I,
        S = (0, a.bG)([A.A], () => (null != N ? A.A.getGuild(N) : null), [N]),
        x = (0, a.bG)([h.default], () => (null != f ? h.default.getUser(f) : null), [f]);
    return "unknown" === n
        ? null
        : (0, i.jsx)("div", {
              className: g.kL,
              children: (0, i.jsxs)("div", {
                  className: g.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != S)
                              return (0, i.jsx)(o.Ay, {
                                  guild: S,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === n && null != x) {
                              let e = x.getAvatarURL(void 0, 50);
                              return (0, i.jsx)("img", { src: e, alt: x.username, className: g.my });
                          }
                          return null;
                      })(),
                      (0, i.jsxs)("div", {
                          className: g.Se,
                          children: [
                              (0, i.jsx)("div", {
                                  className: g.$,
                                  children: (0, i.jsxs)("div", {
                                      className: g.gH,
                                      children: [
                                          "guild" === n && null != S
                                              ? (0, i.jsx)("div", { className: g.DD, children: S.name })
                                              : "user" === n && null != x
                                                ? (0, i.jsx)("div", { className: g.DD, children: x.username })
                                                : null,
                                          (0, i.jsx)("div", { className: g.vE, children: (0, c.jb)(C) }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === m.rbe.GUILD_ANNOUNCEMENT)
                                                  return p.intl.string(p.t["8P08G9"]);
                                              return p.intl.string(p.t.hMFMY9);
                                          case "generatedCandidate":
                                              return p.intl.string(p.t.ljgIO9);
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
                                          className: g.VA,
                                          children: (0, i.jsx)("span", { className: g.o4, children: e }),
                                      });
                                  if (null != T && null != e) {
                                      let t = (0, s.gU)(T, S);
                                      return (0, i.jsxs)("div", {
                                          className: g.VA,
                                          children: [
                                              (0, i.jsx)("span", { className: g.o4, children: e }),
                                              (0, i.jsx)("span", {
                                                  className: g.o4,
                                                  children: p.intl.string(p.t.CHUAYk),
                                              }),
                                              (0, i.jsxs)("span", {
                                                  className: g.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, i.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: g.p,
                                                          }),
                                                      T.name,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, i.jsx)("div", {
                                            className: g.VA,
                                            children: (0, i.jsx)("span", { className: g.o4, children: e }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
