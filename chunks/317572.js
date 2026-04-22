e.d(n, { A: () => o });
var i = e(788733),
    l = e(82149),
    r = e(129894),
    a = e(652215),
    s = e(985018);
function o(t) {
    let n = (0, r.A)(t),
        e = n?.icon,
        o = n?.name ?? "";
    return t.type === a.$pd.PLAYING && n?.type === a.fg2.XBOX
        ? {
              text: s.intl.formatToPlainString(s.t.A17aM8, { platform: s.intl.string(s.t.Nfvo72) }),
              platformIcon: e,
              platformLabel: o,
          }
        : t.type === a.$pd.PLAYING && n?.type === a.fg2.PLAYSTATION
          ? {
                text: s.intl.formatToPlainString(s.t.A17aM8, { platform: s.intl.string(s.t.fFl4jo) }),
                platformIcon: e,
                platformLabel: o,
            }
          : t.type === a.$pd.PLAYING && n?.type === a.fg2.META_QUEST_OR_HORIZON
            ? {
                  text: s.intl.formatToPlainString(s.t.A17aM8, {
                      platform: (0, i.A)(t) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e),
                  }),
                  platformIcon: e,
                  platformLabel: o,
              }
            : t.type === a.$pd.WATCHING && n?.type === a.fg2.META_QUEST_OR_HORIZON
              ? {
                    text: s.intl.formatToPlainString(s.t.ENbTKQ, {
                        platform: (0, i.A)(t) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e),
                    }),
                    platformIcon: e,
                    platformLabel: o,
                }
              : t.type === a.$pd.STREAMING && n?.type === a.fg2.TWITCH
                ? {
                      text: s.intl.formatToPlainString(s.t["4CQq9Q"], { name: s.intl.string(s.t.q4pBG3) }),
                      platformIcon: e,
                      platformLabel: o,
                  }
                : t.type === a.$pd.STREAMING && n?.type === a.fg2.YOUTUBE
                  ? {
                        text: s.intl.formatToPlainString(s.t["4CQq9Q"], { name: s.intl.string(s.t.aS6cK4) }),
                        platformIcon: e,
                        platformLabel: o,
                    }
                  : t.type === a.$pd.PLAYING
                    ? { text: s.intl.string(s.t.BMTj28), platformIcon: e, platformLabel: o }
                    : t.type === a.$pd.STREAMING
                      ? { text: s.intl.string(s.t["Jpkr/q"]), platformIcon: e, platformLabel: o }
                      : (0, l.Cy)(t)
                        ? { text: s.intl.formatToPlainString(s.t.pW3Ip3, { name: t.name }) }
                        : t.type === a.$pd.LISTENING && null != t.details
                          ? {
                                text: s.intl.formatToPlainString(s.t["b+lA5+"], { name: t.name }),
                                platformIcon: e,
                                platformLabel: o,
                            }
                          : t.type === a.$pd.LISTENING
                            ? { text: s.intl.string(s.t.dBISa6), platformIcon: e, platformLabel: o }
                            : t.type === a.$pd.WATCHING && null != t.details
                              ? {
                                    text: s.intl.formatToPlainString(s.t.mqdfDc, { name: t.name }),
                                    platformIcon: e,
                                    platformLabel: o,
                                }
                              : t.type === a.$pd.WATCHING
                                ? { text: s.intl.string(s.t.GpNXjC), platformIcon: e, platformLabel: o }
                                : t.type === a.$pd.COMPETING && null != t.details
                                  ? {
                                        text: s.intl.formatToPlainString(s.t.oHF7Ch, { name: t.name }),
                                        platformIcon: e,
                                        platformLabel: o,
                                    }
                                  : t.type === a.$pd.COMPETING
                                    ? { text: s.intl.string(s.t.OzCsIA), platformIcon: e, platformLabel: o }
                                    : { text: void 0, platformIcon: e, platformLabel: o };
}
