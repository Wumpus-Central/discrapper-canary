n.d(e, { A: () => g });
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
    p = n(375708);
function g(t) {
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
        g = n?.icon,
        m = n?.name ?? "";
    if (t.type === o.$pd.PLAYING && n?.type === o.fg2.XBOX)
        return {
            text: p.intl.formatToPlainString(p.t.A17aM8, { platform: p.intl.string(p.t.Nfvo72) }),
            platformIcon: g,
            platformLabel: m,
        };
    if (t.type === o.$pd.PLAYING && n?.type === o.fg2.PLAYSTATION)
        return {
            text: p.intl.formatToPlainString(p.t.A17aM8, { platform: p.intl.string(p.t.fFl4jo) }),
            platformIcon: g,
            platformLabel: m,
        };
    if (t.type === o.$pd.PLAYING && n?.type === o.fg2.META_QUEST_OR_HORIZON)
        return {
            text: p.intl.formatToPlainString(p.t.A17aM8, {
                platform: (0, l.A)(t) ? p.intl.string(p.t.BrHQaq) : p.intl.string(p.t.p6vL0e),
            }),
            platformIcon: g,
            platformLabel: m,
        };
    if (t.type === o.$pd.WATCHING && n?.type === o.fg2.META_QUEST_OR_HORIZON)
        return {
            text: p.intl.formatToPlainString(p.t.ENbTKQ, {
                platform: (0, l.A)(t) ? p.intl.string(p.t.BrHQaq) : p.intl.string(p.t.p6vL0e),
            }),
            platformIcon: g,
            platformLabel: m,
        };
    if (t.type === o.$pd.STREAMING && n?.type === o.fg2.TWITCH)
        return {
            text: p.intl.formatToPlainString(p.t["4CQq9Q"], { name: p.intl.string(p.t.q4pBG3) }),
            platformIcon: g,
            platformLabel: m,
        };
    if (t.type === o.$pd.STREAMING && n?.type === o.fg2.YOUTUBE)
        return {
            text: p.intl.formatToPlainString(p.t["4CQq9Q"], { name: p.intl.string(p.t.aS6cK4) }),
            platformIcon: g,
            platformLabel: m,
        };
    if (null != e) {
        let n,
            l = (0, f.A)(e, t);
        switch (t.type) {
            case o.$pd.PLAYING:
                n = p.t.A17aM8;
                break;
            case o.$pd.WATCHING:
                n = p.t.ENbTKQ;
                break;
            case o.$pd.LISTENING:
                n = p.t.EcHzWI;
                break;
            case o.$pd.COMPETING:
                n = p.t.ikpHeS;
                break;
            case o.$pd.STREAMING:
                n = p.t.Dzgz4u;
        }
        if (void 0 !== n)
            return { text: p.intl.formatToPlainString(n, { platform: l }), platformIcon: g, platformLabel: m };
    }
    return t.type === o.$pd.PLAYING
        ? { text: p.intl.string(p.t.BMTj28), platformIcon: g, platformLabel: m }
        : t.type === o.$pd.STREAMING
          ? { text: p.intl.string(p.t["Jpkr/q"]), platformIcon: g, platformLabel: m }
          : (0, i.Cy)(t)
            ? { text: p.intl.formatToPlainString(p.t.pW3Ip3, { name: t.name }) }
            : t.type === o.$pd.LISTENING && null != t.details
              ? { text: p.intl.formatToPlainString(p.t["b+lA5+"], { name: t.name }), platformIcon: g, platformLabel: m }
              : t.type === o.$pd.LISTENING
                ? { text: p.intl.string(p.t.dBISa6), platformIcon: g, platformLabel: m }
                : t.type === o.$pd.WATCHING && null != t.details
                  ? {
                        text: p.intl.formatToPlainString(p.t.mqdfDc, { name: t.name }),
                        platformIcon: g,
                        platformLabel: m,
                    }
                  : t.type === o.$pd.WATCHING
                    ? { text: p.intl.string(p.t.GpNXjC), platformIcon: g, platformLabel: m }
                    : t.type === o.$pd.COMPETING && null != t.details
                      ? {
                            text: p.intl.formatToPlainString(p.t.oHF7Ch, { name: t.name }),
                            platformIcon: g,
                            platformLabel: m,
                        }
                      : t.type === o.$pd.COMPETING
                        ? { text: p.intl.string(p.t.OzCsIA), platformIcon: g, platformLabel: m }
                        : { text: void 0, platformIcon: g, platformLabel: m };
}
