e.d(n, { A: () => p });
var l = e(350835),
    i = e(788733),
    a = e(82149),
    r = e(573648),
    s = e(541806),
    o = e(90644),
    c = e(570138),
    u = e(141639),
    d = e(61330),
    A = e(287743),
    x = e(652215);
let m = new Set([x.fg2.LEAGUE_OF_LEGENDS, x.fg2.ROBLOX, x.fg2.TWITCH, x.fg2.YOUTUBE]);
var f = e(190915),
    g = e(792996);
function p(t) {
    let n = (0, A.A)(t.session_id),
        e = (function (t) {
            let n = (0, A.A)(t.session_id);
            if (null != n) return n;
            if ((0, o.A)(t)) return r.A.get(x.fg2.SPOTIFY);
            if ((0, s.A)(t)) return r.A.get(x.fg2.CRUNCHYROLL);
            if ((0, d.A)(t)) return r.A.get(x.fg2.XBOX);
            if ((0, u.A)(t)) return r.A.get(x.fg2.PLAYSTATION);
            if (t?.platform === c.y.META_QUEST || (0, i.A)(t)) return r.A.get(x.fg2.META_QUEST_OR_HORIZON);
            let e = r.A.find((n) => {
                let { name: e } = n;
                return e === t.name;
            });
            return null != e && m.has(e.type) ? e : null;
        })(t),
        p = e?.icon,
        _ = e?.name ?? "";
    if (t.type === l.$.PLAYING && e?.type === x.fg2.XBOX)
        return {
            text: g.intl.formatToPlainString(g.t.A17aM8, { platform: g.intl.string(g.t.Nfvo72) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.PLAYING && e?.type === x.fg2.PLAYSTATION)
        return {
            text: g.intl.formatToPlainString(g.t.A17aM8, { platform: g.intl.string(g.t.fFl4jo) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.PLAYING && e?.type === x.fg2.META_QUEST_OR_HORIZON)
        return {
            text: g.intl.formatToPlainString(g.t.A17aM8, {
                platform: (0, i.A)(t) ? g.intl.string(g.t.BrHQaq) : g.intl.string(g.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.WATCHING && e?.type === x.fg2.META_QUEST_OR_HORIZON)
        return {
            text: g.intl.formatToPlainString(g.t.ENbTKQ, {
                platform: (0, i.A)(t) ? g.intl.string(g.t.BrHQaq) : g.intl.string(g.t.p6vL0e),
            }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.STREAMING && e?.type === x.fg2.TWITCH)
        return {
            text: g.intl.formatToPlainString(g.t["4CQq9Q"], { name: g.intl.string(g.t.q4pBG3) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (t.type === l.$.STREAMING && e?.type === x.fg2.YOUTUBE)
        return {
            text: g.intl.formatToPlainString(g.t["4CQq9Q"], { name: g.intl.string(g.t.aS6cK4) }),
            platformIcon: p,
            platformLabel: _,
        };
    if (null != n) {
        let e,
            i = (0, f.A)(n, t);
        switch (t.type) {
            case l.$.PLAYING:
                e = g.t.A17aM8;
                break;
            case l.$.WATCHING:
                e = g.t.ENbTKQ;
                break;
            case l.$.LISTENING:
                e = g.t.EcHzWI;
                break;
            case l.$.COMPETING:
                e = g.t.ikpHeS;
                break;
            case l.$.STREAMING:
                e = g.t.Dzgz4u;
        }
        if (void 0 !== e)
            return { text: g.intl.formatToPlainString(e, { platform: i }), platformIcon: p, platformLabel: _ };
    }
    return t.type === l.$.PLAYING
        ? { text: g.intl.string(g.t.BMTj28), platformIcon: p, platformLabel: _ }
        : t.type === l.$.STREAMING
          ? { text: g.intl.string(g.t["Jpkr/q"]), platformIcon: p, platformLabel: _ }
          : (0, a.Cy)(t)
            ? { text: g.intl.formatToPlainString(g.t.pW3Ip3, { name: t.name }) }
            : t.type === l.$.LISTENING && null != t.details
              ? { text: g.intl.formatToPlainString(g.t["b+lA5+"], { name: t.name }), platformIcon: p, platformLabel: _ }
              : t.type === l.$.LISTENING
                ? { text: g.intl.string(g.t.dBISa6), platformIcon: p, platformLabel: _ }
                : t.type === l.$.WATCHING && null != t.details
                  ? {
                        text: g.intl.formatToPlainString(g.t.mqdfDc, { name: t.name }),
                        platformIcon: p,
                        platformLabel: _,
                    }
                  : t.type === l.$.WATCHING
                    ? { text: g.intl.string(g.t.GpNXjC), platformIcon: p, platformLabel: _ }
                    : t.type === l.$.COMPETING && null != t.details
                      ? {
                            text: g.intl.formatToPlainString(g.t.oHF7Ch, { name: t.name }),
                            platformIcon: p,
                            platformLabel: _,
                        }
                      : t.type === l.$.COMPETING
                        ? { text: g.intl.string(g.t.OzCsIA), platformIcon: p, platformLabel: _ }
                        : { text: void 0, platformIcon: p, platformLabel: _ };
}
