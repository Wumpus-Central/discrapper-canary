e.d(n, { A: () => p });
var i = e(360469),
    l = e(652215);
function r(t) {
    return t?.application_id === i.D4 && (t?.platform === l.yTV.ANDROID || t?.platform === l.yTV.IOS);
}
var a = e(82149),
    s = e(573648),
    o = e(541806),
    c = e(90644),
    u = e(141639),
    d = e(61330);
let A = new Set([l.fg2.LEAGUE_OF_LEGENDS, l.fg2.ROBLOX, l.fg2.TWITCH, l.fg2.YOUTUBE]);
var x = e(985018);
function p(t) {
    let n = (function (t) {
            if ((0, c.A)(t)) return s.A.get(l.fg2.SPOTIFY);
            if ((0, o.A)(t)) return s.A.get(l.fg2.CRUNCHYROLL);
            if ((0, d.A)(t)) return s.A.get(l.fg2.XBOX);
            if ((0, u.A)(t)) return s.A.get(l.fg2.PLAYSTATION);
            if (t?.platform === l.yTV.META_QUEST || r(t)) return s.A.get(l.fg2.META_QUEST_OR_HORIZON);
            let n = s.A.find((n) => {
                let { name: e } = n;
                return e === t.name;
            });
            return null != n && A.has(n.type) ? n : null;
        })(t),
        e = n?.icon,
        i = n?.name ?? "";
    return t.type === l.$pd.PLAYING && n?.type === l.fg2.XBOX
        ? {
              text: x.intl.formatToPlainString(x.t.A17aM8, { platform: x.intl.string(x.t.Nfvo72) }),
              platformIcon: e,
              platformLabel: i,
          }
        : t.type === l.$pd.PLAYING && n?.type === l.fg2.PLAYSTATION
          ? {
                text: x.intl.formatToPlainString(x.t.A17aM8, { platform: x.intl.string(x.t.fFl4jo) }),
                platformIcon: e,
                platformLabel: i,
            }
          : t.type === l.$pd.PLAYING && n?.type === l.fg2.META_QUEST_OR_HORIZON
            ? {
                  text: x.intl.formatToPlainString(x.t.A17aM8, {
                      platform: r(t) ? x.intl.string(x.t.BrHQaq) : x.intl.string(x.t.p6vL0e),
                  }),
                  platformIcon: e,
                  platformLabel: i,
              }
            : t.type === l.$pd.WATCHING && n?.type === l.fg2.META_QUEST_OR_HORIZON
              ? {
                    text: x.intl.formatToPlainString(x.t.ENbTKQ, {
                        platform: r(t) ? x.intl.string(x.t.BrHQaq) : x.intl.string(x.t.p6vL0e),
                    }),
                    platformIcon: e,
                    platformLabel: i,
                }
              : t.type === l.$pd.STREAMING && n?.type === l.fg2.TWITCH
                ? {
                      text: x.intl.formatToPlainString(x.t["4CQq9Q"], { name: x.intl.string(x.t.q4pBG3) }),
                      platformIcon: e,
                      platformLabel: i,
                  }
                : t.type === l.$pd.STREAMING && n?.type === l.fg2.YOUTUBE
                  ? {
                        text: x.intl.formatToPlainString(x.t["4CQq9Q"], { name: x.intl.string(x.t.aS6cK4) }),
                        platformIcon: e,
                        platformLabel: i,
                    }
                  : t.type === l.$pd.PLAYING
                    ? { text: x.intl.string(x.t.BMTj28), platformIcon: e, platformLabel: i }
                    : t.type === l.$pd.STREAMING
                      ? { text: x.intl.string(x.t["Jpkr/q"]), platformIcon: e, platformLabel: i }
                      : (0, a.Cy)(t)
                        ? { text: x.intl.formatToPlainString(x.t.pW3Ip3, { name: t.name }) }
                        : t.type === l.$pd.LISTENING && null != t.details
                          ? {
                                text: x.intl.formatToPlainString(x.t["b+lA5+"], { name: t.name }),
                                platformIcon: e,
                                platformLabel: i,
                            }
                          : t.type === l.$pd.LISTENING
                            ? { text: x.intl.string(x.t.dBISa6), platformIcon: e, platformLabel: i }
                            : t.type === l.$pd.WATCHING && null != t.details
                              ? {
                                    text: x.intl.formatToPlainString(x.t.mqdfDc, { name: t.name }),
                                    platformIcon: e,
                                    platformLabel: i,
                                }
                              : t.type === l.$pd.WATCHING
                                ? { text: x.intl.string(x.t.GpNXjC), platformIcon: e, platformLabel: i }
                                : t.type === l.$pd.COMPETING && null != t.details
                                  ? {
                                        text: x.intl.formatToPlainString(x.t.oHF7Ch, { name: t.name }),
                                        platformIcon: e,
                                        platformLabel: i,
                                    }
                                  : t.type === l.$pd.COMPETING
                                    ? { text: x.intl.string(x.t.OzCsIA), platformIcon: e, platformLabel: i }
                                    : { text: void 0, platformIcon: e, platformLabel: i };
}
