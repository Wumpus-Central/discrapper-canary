n.d(t, { A: () => l });
var r = n(788733),
    i = n(82149),
    a = n(129894),
    s = n(652215),
    o = n(985018);
function l(e) {
    let t = (0, a.A)(e),
        n = null == t ? void 0 : t.icon;
    return e.type === s.$pd.PLAYING && (null == t ? void 0 : t.type) === s.fg2.XBOX
        ? {
              text: o.intl.formatToPlainString(o.t.A17aM8, { platform: o.intl.string(o.t.Nfvo72) }),
              platformIcon: n,
          }
        : e.type === s.$pd.PLAYING && (null == t ? void 0 : t.type) === s.fg2.PLAYSTATION
          ? {
                text: o.intl.formatToPlainString(o.t.A17aM8, { platform: o.intl.string(o.t.fFl4jo) }),
                platformIcon: n,
            }
          : e.type === s.$pd.PLAYING && (null == t ? void 0 : t.type) === s.fg2.META_QUEST_OR_HORIZON
            ? {
                  text: o.intl.formatToPlainString(o.t.A17aM8, {
                      platform: (0, r.A)(e) ? o.intl.string(o.t.BrHQaq) : o.intl.string(o.t.p6vL0e),
                  }),
                  platformIcon: n,
              }
            : e.type === s.$pd.WATCHING && (null == t ? void 0 : t.type) === s.fg2.META_QUEST_OR_HORIZON
              ? {
                    text: o.intl.formatToPlainString(o.t.ENbTKQ, {
                        platform: (0, r.A)(e) ? o.intl.string(o.t.BrHQaq) : o.intl.string(o.t.p6vL0e),
                    }),
                    platformIcon: n,
                }
              : e.type === s.$pd.STREAMING && (null == t ? void 0 : t.type) === s.fg2.TWITCH
                ? {
                      text: o.intl.formatToPlainString(o.t["4CQq9Q"], { name: o.intl.string(o.t.q4pBG3) }),
                      platformIcon: n,
                  }
                : e.type === s.$pd.STREAMING && (null == t ? void 0 : t.type) === s.fg2.YOUTUBE
                  ? {
                        text: o.intl.formatToPlainString(o.t["4CQq9Q"], { name: o.intl.string(o.t.aS6cK4) }),
                        platformIcon: n,
                    }
                  : e.type === s.$pd.PLAYING
                    ? {
                          text: o.intl.string(o.t.BMTj28),
                          platformIcon: n,
                      }
                    : e.type === s.$pd.STREAMING
                      ? {
                            text: o.intl.string(o.t["Jpkr/q"]),
                            platformIcon: n,
                        }
                      : (0, i.Cy)(e)
                        ? { text: o.intl.formatToPlainString(o.t.pW3Ip3, { name: e.name }) }
                        : e.type === s.$pd.LISTENING && null != e.details
                          ? {
                                text: o.intl.formatToPlainString(o.t["b+lA5+"], { name: e.name }),
                                platformIcon: n,
                            }
                          : e.type === s.$pd.LISTENING
                            ? {
                                  text: o.intl.string(o.t.dBISa6),
                                  platformIcon: n,
                              }
                            : e.type === s.$pd.WATCHING && null != e.details
                              ? {
                                    text: o.intl.formatToPlainString(o.t.mqdfDc, { name: e.name }),
                                    platformIcon: n,
                                }
                              : e.type === s.$pd.WATCHING
                                ? {
                                      text: o.intl.string(o.t.GpNXjC),
                                      platformIcon: n,
                                  }
                                : e.type === s.$pd.COMPETING && null != e.details
                                  ? {
                                        text: o.intl.formatToPlainString(o.t.oHF7Ch, { name: e.name }),
                                        platformIcon: n,
                                    }
                                  : e.type === s.$pd.COMPETING
                                    ? {
                                          text: o.intl.string(o.t.OzCsIA),
                                          platformIcon: n,
                                      }
                                    : e.type === s.$pd.HANG_STATUS
                                      ? {
                                            text: o.intl.string(o.t.Hi4tob),
                                            platformIcon: n,
                                        }
                                      : {
                                            text: void 0,
                                            platformIcon: n,
                                        };
}
