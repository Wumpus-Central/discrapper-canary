n.d(e, { A: () => p });
var l = n(788733),
    i = n(82149),
    a = n(573648),
    r = n(541806),
    s = n(90644),
    o = n(652215),
    c = n(141639),
    u = n(61330),
    d = n(287743);
let A = new Set([o.fg2.LEAGUE_OF_LEGENDS, o.fg2.ROBLOX, o.fg2.TWITCH, o.fg2.YOUTUBE]);
var f = n(190915),
    g = n(660183);
function p(t) {
    let e = (0, d.A)(t.session_id),
        n = (function (t) {
            let e = (0, d.A)(t.session_id);
            if (null != e) return e;
            if ((0, s.A)(t)) return a.A.get(o.fg2.SPOTIFY);
            if ((0, r.A)(t)) return a.A.get(o.fg2.CRUNCHYROLL);
            if ((0, u.A)(t)) return a.A.get(o.fg2.XBOX);
            if ((0, c.A)(t)) return a.A.get(o.fg2.PLAYSTATION);
            if (t?.platform === o.yTV.META_QUEST || (0, l.A)(t)) return a.A.get(o.fg2.META_QUEST_OR_HORIZON);
            let n = a.A.find((e) => {
                let { name: n } = e;
                return n === t.name;
            });
            return null != n && A.has(n.type) ? n : null;
        })(t),
        p = n?.icon,
        m = n?.name ?? "";
    if (t.type === o.$pd.PLAYING && n?.type === o.fg2.XBOX)
        return {
            text: g.intl.formatToPlainString(g.t.A17aM8, { platform: g.intl.string(g.t.Nfvo72) }),
            platformIcon: p,
            platformLabel: m,
        };
    if (t.type === o.$pd.PLAYING && n?.type === o.fg2.PLAYSTATION)
        return {
            text: g.intl.formatToPlainString(g.t.A17aM8, { platform: g.intl.string(g.t.fFl4jo) }),
            platformIcon: p,
            platformLabel: m,
        };
    if (t.type === o.$pd.PLAYING && n?.type === o.fg2.META_QUEST_OR_HORIZON)
        return {
            text: g.intl.formatToPlainString(g.t.A17aM8, {
                platform: (0, l.A)(t) ? g.intl.string(g.t.BrHQaq) : g.intl.string(g.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: m,
        };
    if (t.type === o.$pd.WATCHING && n?.type === o.fg2.META_QUEST_OR_HORIZON)
        return {
            text: g.intl.formatToPlainString(g.t.ENbTKQ, {
                platform: (0, l.A)(t) ? g.intl.string(g.t.BrHQaq) : g.intl.string(g.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: m,
        };
    if (t.type === o.$pd.STREAMING && n?.type === o.fg2.TWITCH)
        return {
            text: g.intl.formatToPlainString(g.t["4CQq9Q"], { name: g.intl.string(g.t.q4pBG3) }),
            platformIcon: p,
            platformLabel: m,
        };
    if (t.type === o.$pd.STREAMING && n?.type === o.fg2.YOUTUBE)
        return {
            text: g.intl.formatToPlainString(g.t["4CQq9Q"], { name: g.intl.string(g.t.aS6cK4) }),
            platformIcon: p,
            platformLabel: m,
        };
    if (null != e) {
        let n,
            l = (0, f.A)(e, t);
        switch (t.type) {
            case o.$pd.PLAYING:
                n = g.t.A17aM8;
                break;
            case o.$pd.WATCHING:
                n = g.t.ENbTKQ;
                break;
            case o.$pd.LISTENING:
                n = g.t.EcHzWI;
                break;
            case o.$pd.COMPETING:
                n = g.t.ikpHeS;
                break;
            case o.$pd.STREAMING:
                n = g.t.Dzgz4u;
        }
        if (void 0 !== n)
            return { text: g.intl.formatToPlainString(n, { platform: l }), platformIcon: p, platformLabel: m };
    }
    return t.type === o.$pd.PLAYING
        ? { text: g.intl.string(g.t.BMTj28), platformIcon: p, platformLabel: m }
        : t.type === o.$pd.STREAMING
          ? { text: g.intl.string(g.t["Jpkr/q"]), platformIcon: p, platformLabel: m }
          : (0, i.Cy)(t)
            ? { text: g.intl.formatToPlainString(g.t.pW3Ip3, { name: t.name }) }
            : t.type === o.$pd.LISTENING && null != t.details
              ? { text: g.intl.formatToPlainString(g.t["b+lA5+"], { name: t.name }), platformIcon: p, platformLabel: m }
              : t.type === o.$pd.LISTENING
                ? { text: g.intl.string(g.t.dBISa6), platformIcon: p, platformLabel: m }
                : t.type === o.$pd.WATCHING && null != t.details
                  ? {
                        text: g.intl.formatToPlainString(g.t.mqdfDc, { name: t.name }),
                        platformIcon: p,
                        platformLabel: m,
                    }
                  : t.type === o.$pd.WATCHING
                    ? { text: g.intl.string(g.t.GpNXjC), platformIcon: p, platformLabel: m }
                    : t.type === o.$pd.COMPETING && null != t.details
                      ? {
                            text: g.intl.formatToPlainString(g.t.oHF7Ch, { name: t.name }),
                            platformIcon: p,
                            platformLabel: m,
                        }
                      : t.type === o.$pd.COMPETING
                        ? { text: g.intl.string(g.t.OzCsIA), platformIcon: p, platformLabel: m }
                        : { text: void 0, platformIcon: p, platformLabel: m };
}
