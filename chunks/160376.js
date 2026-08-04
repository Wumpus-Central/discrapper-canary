"use strict";
n.d(t, { A: () => h });
var i = n(788733),
    r = n(82149),
    a = n(573648),
    s = n(541806),
    l = n(90644),
    o = n(652215),
    d = n(141639),
    c = n(61330),
    u = n(287743);
let _ = new Set([o.fg2.LEAGUE_OF_LEGENDS, o.fg2.ROBLOX, o.fg2.TWITCH, o.fg2.YOUTUBE]);
var E = n(190915),
    A = n(375708);
function h(e) {
    let t = (0, u.A)(e.session_id),
        n = (function (e) {
            let t = (0, u.A)(e.session_id);
            if (null != t) return t;
            if ((0, l.A)(e)) return a.A.get(o.fg2.SPOTIFY);
            if ((0, s.A)(e)) return a.A.get(o.fg2.CRUNCHYROLL);
            if ((0, c.A)(e)) return a.A.get(o.fg2.XBOX);
            if ((0, d.A)(e)) return a.A.get(o.fg2.PLAYSTATION);
            if (e?.platform === o.yTV.META_QUEST || (0, i.A)(e)) return a.A.get(o.fg2.META_QUEST_OR_HORIZON);
            let n = a.A.find((t) => {
                let { name: n } = t;
                return n === e.name;
            });
            return null != n && _.has(n.type) ? n : null;
        })(e),
        h = n?.icon,
        I = n?.name ?? "";
    if (e.type === o.$pd.PLAYING && n?.type === o.fg2.XBOX)
        return {
            text: A.intl.formatToPlainString(A.t.A17aM8, { platform: A.intl.string(A.t.Nfvo72) }),
            platformIcon: h,
            platformLabel: I,
        };
    if (e.type === o.$pd.PLAYING && n?.type === o.fg2.PLAYSTATION)
        return {
            text: A.intl.formatToPlainString(A.t.A17aM8, { platform: A.intl.string(A.t.fFl4jo) }),
            platformIcon: h,
            platformLabel: I,
        };
    if (e.type === o.$pd.PLAYING && n?.type === o.fg2.META_QUEST_OR_HORIZON)
        return {
            text: A.intl.formatToPlainString(A.t.A17aM8, {
                platform: (0, i.A)(e) ? A.intl.string(A.t.BrHQaq) : A.intl.string(A.t.p6vL0e),
            }),
            platformIcon: h,
            platformLabel: I,
        };
    if (e.type === o.$pd.WATCHING && n?.type === o.fg2.META_QUEST_OR_HORIZON)
        return {
            text: A.intl.formatToPlainString(A.t.ENbTKQ, {
                platform: (0, i.A)(e) ? A.intl.string(A.t.BrHQaq) : A.intl.string(A.t.p6vL0e),
            }),
            platformIcon: h,
            platformLabel: I,
        };
    if (e.type === o.$pd.STREAMING && n?.type === o.fg2.TWITCH)
        return {
            text: A.intl.formatToPlainString(A.t["4CQq9Q"], { name: A.intl.string(A.t.q4pBG3) }),
            platformIcon: h,
            platformLabel: I,
        };
    if (e.type === o.$pd.STREAMING && n?.type === o.fg2.YOUTUBE)
        return {
            text: A.intl.formatToPlainString(A.t["4CQq9Q"], { name: A.intl.string(A.t.aS6cK4) }),
            platformIcon: h,
            platformLabel: I,
        };
    if (null != t) {
        let n,
            i = (0, E.A)(t, e);
        switch (e.type) {
            case o.$pd.PLAYING:
                n = A.t.A17aM8;
                break;
            case o.$pd.WATCHING:
                n = A.t.ENbTKQ;
                break;
            case o.$pd.LISTENING:
                n = A.t.EcHzWI;
                break;
            case o.$pd.COMPETING:
                n = A.t.ikpHeS;
                break;
            case o.$pd.STREAMING:
                n = A.t.Dzgz4u;
        }
        if (void 0 !== n)
            return { text: A.intl.formatToPlainString(n, { platform: i }), platformIcon: h, platformLabel: I };
    }
    return e.type === o.$pd.PLAYING
        ? { text: A.intl.string(A.t.BMTj28), platformIcon: h, platformLabel: I }
        : e.type === o.$pd.STREAMING
          ? { text: A.intl.string(A.t["Jpkr/q"]), platformIcon: h, platformLabel: I }
          : (0, r.Cy)(e)
            ? { text: A.intl.formatToPlainString(A.t.pW3Ip3, { name: e.name }) }
            : e.type === o.$pd.LISTENING && null != e.details
              ? { text: A.intl.formatToPlainString(A.t["b+lA5+"], { name: e.name }), platformIcon: h, platformLabel: I }
              : e.type === o.$pd.LISTENING
                ? { text: A.intl.string(A.t.dBISa6), platformIcon: h, platformLabel: I }
                : e.type === o.$pd.WATCHING && null != e.details
                  ? {
                        text: A.intl.formatToPlainString(A.t.mqdfDc, { name: e.name }),
                        platformIcon: h,
                        platformLabel: I,
                    }
                  : e.type === o.$pd.WATCHING
                    ? { text: A.intl.string(A.t.GpNXjC), platformIcon: h, platformLabel: I }
                    : e.type === o.$pd.COMPETING && null != e.details
                      ? {
                            text: A.intl.formatToPlainString(A.t.oHF7Ch, { name: e.name }),
                            platformIcon: h,
                            platformLabel: I,
                        }
                      : e.type === o.$pd.COMPETING
                        ? { text: A.intl.string(A.t.OzCsIA), platformIcon: h, platformLabel: I }
                        : { text: void 0, platformIcon: h, platformLabel: I };
}
