"use strict";
n.d(t, { A: () => h });
var i = n(360469),
    r = n(652215);
function s(e) {
    return e?.application_id === i.D4 && (e?.platform === r.yTV.ANDROID || e?.platform === r.yTV.IOS);
}
var a = n(82149),
    o = n(573648),
    l = n(541806),
    u = n(90644),
    c = n(141639),
    d = n(61330);
let _ = new Set([r.fg2.LEAGUE_OF_LEGENDS, r.fg2.ROBLOX, r.fg2.TWITCH, r.fg2.YOUTUBE]);
var f = n(375708);
function h(e) {
    let t = (function (e) {
            if ((0, u.A)(e)) return o.A.get(r.fg2.SPOTIFY);
            if ((0, l.A)(e)) return o.A.get(r.fg2.CRUNCHYROLL);
            if ((0, d.A)(e)) return o.A.get(r.fg2.XBOX);
            if ((0, c.A)(e)) return o.A.get(r.fg2.PLAYSTATION);
            if (e?.platform === r.yTV.META_QUEST || s(e)) return o.A.get(r.fg2.META_QUEST_OR_HORIZON);
            let t = o.A.find((t) => {
                let { name: n } = t;
                return n === e.name;
            });
            return null != t && _.has(t.type) ? t : null;
        })(e),
        n = t?.icon,
        i = t?.name ?? "";
    return e.type === r.$pd.PLAYING && t?.type === r.fg2.XBOX
        ? {
              text: f.intl.formatToPlainString(f.t.A17aM8, { platform: f.intl.string(f.t.Nfvo72) }),
              platformIcon: n,
              platformLabel: i,
          }
        : e.type === r.$pd.PLAYING && t?.type === r.fg2.PLAYSTATION
          ? {
                text: f.intl.formatToPlainString(f.t.A17aM8, { platform: f.intl.string(f.t.fFl4jo) }),
                platformIcon: n,
                platformLabel: i,
            }
          : e.type === r.$pd.PLAYING && t?.type === r.fg2.META_QUEST_OR_HORIZON
            ? {
                  text: f.intl.formatToPlainString(f.t.A17aM8, {
                      platform: s(e) ? f.intl.string(f.t.BrHQaq) : f.intl.string(f.t.p6vL0e),
                  }),
                  platformIcon: n,
                  platformLabel: i,
              }
            : e.type === r.$pd.WATCHING && t?.type === r.fg2.META_QUEST_OR_HORIZON
              ? {
                    text: f.intl.formatToPlainString(f.t.ENbTKQ, {
                        platform: s(e) ? f.intl.string(f.t.BrHQaq) : f.intl.string(f.t.p6vL0e),
                    }),
                    platformIcon: n,
                    platformLabel: i,
                }
              : e.type === r.$pd.STREAMING && t?.type === r.fg2.TWITCH
                ? {
                      text: f.intl.formatToPlainString(f.t["4CQq9Q"], { name: f.intl.string(f.t.q4pBG3) }),
                      platformIcon: n,
                      platformLabel: i,
                  }
                : e.type === r.$pd.STREAMING && t?.type === r.fg2.YOUTUBE
                  ? {
                        text: f.intl.formatToPlainString(f.t["4CQq9Q"], { name: f.intl.string(f.t.aS6cK4) }),
                        platformIcon: n,
                        platformLabel: i,
                    }
                  : e.type === r.$pd.PLAYING
                    ? { text: f.intl.string(f.t.BMTj28), platformIcon: n, platformLabel: i }
                    : e.type === r.$pd.STREAMING
                      ? { text: f.intl.string(f.t["Jpkr/q"]), platformIcon: n, platformLabel: i }
                      : (0, a.Cy)(e)
                        ? { text: f.intl.formatToPlainString(f.t.pW3Ip3, { name: e.name }) }
                        : e.type === r.$pd.LISTENING && null != e.details
                          ? {
                                text: f.intl.formatToPlainString(f.t["b+lA5+"], { name: e.name }),
                                platformIcon: n,
                                platformLabel: i,
                            }
                          : e.type === r.$pd.LISTENING
                            ? { text: f.intl.string(f.t.dBISa6), platformIcon: n, platformLabel: i }
                            : e.type === r.$pd.WATCHING && null != e.details
                              ? {
                                    text: f.intl.formatToPlainString(f.t.mqdfDc, { name: e.name }),
                                    platformIcon: n,
                                    platformLabel: i,
                                }
                              : e.type === r.$pd.WATCHING
                                ? { text: f.intl.string(f.t.GpNXjC), platformIcon: n, platformLabel: i }
                                : e.type === r.$pd.COMPETING && null != e.details
                                  ? {
                                        text: f.intl.formatToPlainString(f.t.oHF7Ch, { name: e.name }),
                                        platformIcon: n,
                                        platformLabel: i,
                                    }
                                  : e.type === r.$pd.COMPETING
                                    ? { text: f.intl.string(f.t.OzCsIA), platformIcon: n, platformLabel: i }
                                    : { text: void 0, platformIcon: n, platformLabel: i };
}
