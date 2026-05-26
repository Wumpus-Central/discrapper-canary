"use strict";
n.d(t, { A: () => p });
var i = n(788733),
    r = n(82149),
    s = n(573648),
    a = n(541806),
    o = n(90644),
    l = n(652215),
    u = n(141639),
    c = n(61330),
    d = n(287743);
let _ = new Set([l.fg2.LEAGUE_OF_LEGENDS, l.fg2.ROBLOX, l.fg2.TWITCH, l.fg2.YOUTUBE]);
var f = n(190915),
    h = n(375708);
function p(e) {
    let t = (0, d.A)(e.session_id),
        n = (function (e) {
            let t = (0, d.A)(e.session_id);
            if (null != t) return t;
            if ((0, o.A)(e)) return s.A.get(l.fg2.SPOTIFY);
            if ((0, a.A)(e)) return s.A.get(l.fg2.CRUNCHYROLL);
            if ((0, c.A)(e)) return s.A.get(l.fg2.XBOX);
            if ((0, u.A)(e)) return s.A.get(l.fg2.PLAYSTATION);
            if (e?.platform === l.yTV.META_QUEST || (0, i.A)(e)) return s.A.get(l.fg2.META_QUEST_OR_HORIZON);
            let n = s.A.find((t) => {
                let { name: n } = t;
                return n === e.name;
            });
            return null != n && _.has(n.type) ? n : null;
        })(e),
        p = n?.icon,
        E = n?.name ?? "";
    if (e.type === l.$pd.PLAYING && n?.type === l.fg2.XBOX)
        return {
            text: h.intl.formatToPlainString(h.t.A17aM8, { platform: h.intl.string(h.t.Nfvo72) }),
            platformIcon: p,
            platformLabel: E,
        };
    if (e.type === l.$pd.PLAYING && n?.type === l.fg2.PLAYSTATION)
        return {
            text: h.intl.formatToPlainString(h.t.A17aM8, { platform: h.intl.string(h.t.fFl4jo) }),
            platformIcon: p,
            platformLabel: E,
        };
    if (e.type === l.$pd.PLAYING && n?.type === l.fg2.META_QUEST_OR_HORIZON)
        return {
            text: h.intl.formatToPlainString(h.t.A17aM8, {
                platform: (0, i.A)(e) ? h.intl.string(h.t.BrHQaq) : h.intl.string(h.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: E,
        };
    if (e.type === l.$pd.WATCHING && n?.type === l.fg2.META_QUEST_OR_HORIZON)
        return {
            text: h.intl.formatToPlainString(h.t.ENbTKQ, {
                platform: (0, i.A)(e) ? h.intl.string(h.t.BrHQaq) : h.intl.string(h.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: E,
        };
    if (e.type === l.$pd.STREAMING && n?.type === l.fg2.TWITCH)
        return {
            text: h.intl.formatToPlainString(h.t["4CQq9Q"], { name: h.intl.string(h.t.q4pBG3) }),
            platformIcon: p,
            platformLabel: E,
        };
    if (e.type === l.$pd.STREAMING && n?.type === l.fg2.YOUTUBE)
        return {
            text: h.intl.formatToPlainString(h.t["4CQq9Q"], { name: h.intl.string(h.t.aS6cK4) }),
            platformIcon: p,
            platformLabel: E,
        };
    if (null != t) {
        let n,
            i = (0, f.A)(t, e);
        switch (e.type) {
            case l.$pd.PLAYING:
                n = h.t.A17aM8;
                break;
            case l.$pd.WATCHING:
                n = h.t.ENbTKQ;
                break;
            case l.$pd.LISTENING:
                n = h.t.EcHzWI;
                break;
            case l.$pd.COMPETING:
                n = h.t.ikpHeS;
                break;
            case l.$pd.STREAMING:
                n = h.t.Dzgz4u;
        }
        if (void 0 !== n)
            return { text: h.intl.formatToPlainString(n, { platform: i }), platformIcon: p, platformLabel: E };
    }
    return e.type === l.$pd.PLAYING
        ? { text: h.intl.string(h.t.BMTj28), platformIcon: p, platformLabel: E }
        : e.type === l.$pd.STREAMING
          ? { text: h.intl.string(h.t["Jpkr/q"]), platformIcon: p, platformLabel: E }
          : (0, r.Cy)(e)
            ? { text: h.intl.formatToPlainString(h.t.pW3Ip3, { name: e.name }) }
            : e.type === l.$pd.LISTENING && null != e.details
              ? { text: h.intl.formatToPlainString(h.t["b+lA5+"], { name: e.name }), platformIcon: p, platformLabel: E }
              : e.type === l.$pd.LISTENING
                ? { text: h.intl.string(h.t.dBISa6), platformIcon: p, platformLabel: E }
                : e.type === l.$pd.WATCHING && null != e.details
                  ? {
                        text: h.intl.formatToPlainString(h.t.mqdfDc, { name: e.name }),
                        platformIcon: p,
                        platformLabel: E,
                    }
                  : e.type === l.$pd.WATCHING
                    ? { text: h.intl.string(h.t.GpNXjC), platformIcon: p, platformLabel: E }
                    : e.type === l.$pd.COMPETING && null != e.details
                      ? {
                            text: h.intl.formatToPlainString(h.t.oHF7Ch, { name: e.name }),
                            platformIcon: p,
                            platformLabel: E,
                        }
                      : e.type === l.$pd.COMPETING
                        ? { text: h.intl.string(h.t.OzCsIA), platformIcon: p, platformLabel: E }
                        : { text: void 0, platformIcon: p, platformLabel: E };
}
