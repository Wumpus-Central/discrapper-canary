n.d(e, { A: () => p });
var l = n(350835),
    i = n(788733),
    a = n(82149),
    r = n(573648),
    s = n(541806),
    o = n(90644),
    c = n(570138),
    u = n(141639),
    d = n(61330),
    A = n(287743),
    f = n(652215);
let g = new Set([f.fg2.LEAGUE_OF_LEGENDS, f.fg2.ROBLOX, f.fg2.TWITCH, f.fg2.YOUTUBE]);
var m = n(190915),
    x = n(105292);
function p(t) {
    let e = (0, A.A)(t.session_id),
        n = (function (t) {
            let e = (0, A.A)(t.session_id);
            if (null != e) return e;
            if ((0, o.A)(t)) return r.A.get(f.fg2.SPOTIFY);
            if ((0, s.A)(t)) return r.A.get(f.fg2.CRUNCHYROLL);
            if ((0, d.A)(t)) return r.A.get(f.fg2.XBOX);
            if ((0, u.A)(t)) return r.A.get(f.fg2.PLAYSTATION);
            if (t?.platform === c.y.META_QUEST || (0, i.A)(t)) return r.A.get(f.fg2.META_QUEST_OR_HORIZON);
            let n = r.A.find((e) => {
                let { name: n } = e;
                return n === t.name;
            });
            return null != n && g.has(n.type) ? n : null;
        })(t),
        p = n?.icon,
        _ = n?.name ?? "";
    if (t.type === l.$.PLAYING && n?.type === f.fg2.XBOX)
        return {
            text: x.intl.formatToPlainString(x.t.A17aM8, { platform: x.intl.string(x.t.Nfvo72) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.PLAYING && n?.type === f.fg2.PLAYSTATION)
        return {
            text: x.intl.formatToPlainString(x.t.A17aM8, { platform: x.intl.string(x.t.fFl4jo) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.PLAYING && n?.type === f.fg2.META_QUEST_OR_HORIZON)
        return {
            text: x.intl.formatToPlainString(x.t.A17aM8, {
                platform: (0, i.A)(t) ? x.intl.string(x.t.BrHQaq) : x.intl.string(x.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.WATCHING && n?.type === f.fg2.META_QUEST_OR_HORIZON)
        return {
            text: x.intl.formatToPlainString(x.t.ENbTKQ, {
                platform: (0, i.A)(t) ? x.intl.string(x.t.BrHQaq) : x.intl.string(x.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.STREAMING && n?.type === f.fg2.TWITCH)
        return {
            text: x.intl.formatToPlainString(x.t["4CQq9Q"], { name: x.intl.string(x.t.q4pBG3) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.STREAMING && n?.type === f.fg2.YOUTUBE)
        return {
            text: x.intl.formatToPlainString(x.t["4CQq9Q"], { name: x.intl.string(x.t.aS6cK4) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (null != e) {
        let n,
            i = (0, m.A)(e, t);
        switch (t.type) {
            case l.$.PLAYING:
                n = x.t.A17aM8;
                break;
            case l.$.WATCHING:
                n = x.t.ENbTKQ;
                break;
            case l.$.LISTENING:
                n = x.t.EcHzWI;
                break;
            case l.$.COMPETING:
                n = x.t.ikpHeS;
                break;
            case l.$.STREAMING:
                n = x.t.Dzgz4u;
        }
        if (void 0 !== n)
            return { text: x.intl.formatToPlainString(n, { platform: i }), platformIcon: p, platformLabel: _ };
    }
    return t.type === l.$.PLAYING
        ? { text: x.intl.string(x.t.BMTj28), platformIcon: p, platformLabel: _ }
        : t.type === l.$.STREAMING
          ? { text: x.intl.string(x.t["Jpkr/q"]), platformIcon: p, platformLabel: _ }
          : (0, a.Cy)(t)
            ? { text: x.intl.formatToPlainString(x.t.pW3Ip3, { name: t.name }) }
            : t.type === l.$.LISTENING && null != t.details
              ? { text: x.intl.formatToPlainString(x.t["b+lA5+"], { name: t.name }), platformIcon: p, platformLabel: _ }
              : t.type === l.$.LISTENING
                ? { text: x.intl.string(x.t.dBISa6), platformIcon: p, platformLabel: _ }
                : t.type === l.$.WATCHING && null != t.details
                  ? {
                        text: x.intl.formatToPlainString(x.t.mqdfDc, { name: t.name }),
                        platformIcon: p,
                        platformLabel: _,
                    }
                  : t.type === l.$.WATCHING
                    ? { text: x.intl.string(x.t.GpNXjC), platformIcon: p, platformLabel: _ }
                    : t.type === l.$.COMPETING && null != t.details
                      ? {
                            text: x.intl.formatToPlainString(x.t.oHF7Ch, { name: t.name }),
                            platformIcon: p,
                            platformLabel: _,
                        }
                      : t.type === l.$.COMPETING
                        ? { text: x.intl.string(x.t.OzCsIA), platformIcon: p, platformLabel: _ }
                        : { text: void 0, platformIcon: p, platformLabel: _ };
}
