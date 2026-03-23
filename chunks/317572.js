"use strict";
n.d(t, { A: () => l });
var r = n(788733),
    i = n(82149),
    s = n(129894),
    a = n(652215),
    o = n(985018);
function l(e) {
    let t = (0, s.A)(e),
        n = t?.icon,
        l = t?.name ?? "";
    return e.type === a.$pd.PLAYING && t?.type === a.fg2.XBOX
        ? {
              text: o.intl.formatToPlainString(o.t.A17aM8, { platform: o.intl.string(o.t.Nfvo72) }),
              platformIcon: n,
              platformLabel: l,
          }
        : e.type === a.$pd.PLAYING && t?.type === a.fg2.PLAYSTATION
          ? {
                text: o.intl.formatToPlainString(o.t.A17aM8, { platform: o.intl.string(o.t.fFl4jo) }),
                platformIcon: n,
                platformLabel: l,
            }
          : e.type === a.$pd.PLAYING && t?.type === a.fg2.META_QUEST_OR_HORIZON
            ? {
                  text: o.intl.formatToPlainString(o.t.A17aM8, {
                      platform: (0, r.A)(e) ? o.intl.string(o.t.BrHQaq) : o.intl.string(o.t.p6vL0e),
                  }),
                  platformIcon: n,
                  platformLabel: l,
              }
            : e.type === a.$pd.WATCHING && t?.type === a.fg2.META_QUEST_OR_HORIZON
              ? {
                    text: o.intl.formatToPlainString(o.t.ENbTKQ, {
                        platform: (0, r.A)(e) ? o.intl.string(o.t.BrHQaq) : o.intl.string(o.t.p6vL0e),
                    }),
                    platformIcon: n,
                    platformLabel: l,
                }
              : e.type === a.$pd.STREAMING && t?.type === a.fg2.TWITCH
                ? {
                      text: o.intl.formatToPlainString(o.t["4CQq9Q"], { name: o.intl.string(o.t.q4pBG3) }),
                      platformIcon: n,
                      platformLabel: l,
                  }
                : e.type === a.$pd.STREAMING && t?.type === a.fg2.YOUTUBE
                  ? {
                        text: o.intl.formatToPlainString(o.t["4CQq9Q"], { name: o.intl.string(o.t.aS6cK4) }),
                        platformIcon: n,
                        platformLabel: l,
                    }
                  : e.type === a.$pd.PLAYING
                    ? { text: o.intl.string(o.t.BMTj28), platformIcon: n, platformLabel: l }
                    : e.type === a.$pd.STREAMING
                      ? { text: o.intl.string(o.t["Jpkr/q"]), platformIcon: n, platformLabel: l }
                      : (0, i.Cy)(e)
                        ? { text: o.intl.formatToPlainString(o.t.pW3Ip3, { name: e.name }) }
                        : e.type === a.$pd.LISTENING && null != e.details
                          ? {
                                text: o.intl.formatToPlainString(o.t["b+lA5+"], { name: e.name }),
                                platformIcon: n,
                                platformLabel: l,
                            }
                          : e.type === a.$pd.LISTENING
                            ? { text: o.intl.string(o.t.dBISa6), platformIcon: n, platformLabel: l }
                            : e.type === a.$pd.WATCHING && null != e.details
                              ? {
                                    text: o.intl.formatToPlainString(o.t.mqdfDc, { name: e.name }),
                                    platformIcon: n,
                                    platformLabel: l,
                                }
                              : e.type === a.$pd.WATCHING
                                ? { text: o.intl.string(o.t.GpNXjC), platformIcon: n, platformLabel: l }
                                : e.type === a.$pd.COMPETING && null != e.details
                                  ? {
                                        text: o.intl.formatToPlainString(o.t.oHF7Ch, { name: e.name }),
                                        platformIcon: n,
                                        platformLabel: l,
                                    }
                                  : e.type === a.$pd.COMPETING
                                    ? { text: o.intl.string(o.t.OzCsIA), platformIcon: n, platformLabel: l }
                                    : e.type === a.$pd.HANG_STATUS
                                      ? { text: o.intl.string(o.t.Hi4tob), platformIcon: n, platformLabel: l }
                                      : { text: void 0, platformIcon: n, platformLabel: l };
}
