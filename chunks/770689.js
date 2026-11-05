e.d(n, { A: () => x });
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
    f = e(652215);
let g = new Set([f.fg2.LEAGUE_OF_LEGENDS, f.fg2.ROBLOX, f.fg2.TWITCH, f.fg2.YOUTUBE]);
var m = e(190915),
    p = e(792996);
function x(t) {
    let n = (0, A.A)(t.session_id),
        e = (function (t) {
            let n = (0, A.A)(t.session_id);
            if (null != n) return n;
            if ((0, o.A)(t)) return r.A.get(f.fg2.SPOTIFY);
            if ((0, s.A)(t)) return r.A.get(f.fg2.CRUNCHYROLL);
            if ((0, d.A)(t)) return r.A.get(f.fg2.XBOX);
            if ((0, u.A)(t)) return r.A.get(f.fg2.PLAYSTATION);
            if (t?.platform === c.y.META_QUEST || (0, i.A)(t)) return r.A.get(f.fg2.META_QUEST_OR_HORIZON);
            let e = r.A.find((n) => {
                let { name: e } = n;
                return e === t.name;
            });
            return null != e && g.has(e.type) ? e : null;
        })(t),
        x = e?.icon,
        I = e?.name ?? "";
    if (t.type === l.$.PLAYING && e?.type === f.fg2.XBOX)
        return {
            text: p.intl.formatToPlainString(p.t.A17aM8, { platform: p.intl.string(p.t.Nfvo72) }),
            platformIcon: x,
            platformLabel: I,
        };
    if (t.type === l.$.PLAYING && e?.type === f.fg2.PLAYSTATION)
        return {
            text: p.intl.formatToPlainString(p.t.A17aM8, { platform: p.intl.string(p.t.fFl4jo) }),
            platformIcon: x,
            platformLabel: I,
        };
    if (t.type === l.$.PLAYING && e?.type === f.fg2.META_QUEST_OR_HORIZON)
        return {
            text: p.intl.formatToPlainString(p.t.A17aM8, {
                platform: (0, i.A)(t) ? p.intl.string(p.t.BrHQaq) : p.intl.string(p.t.p6vL0e),
            }),
            platformIcon: x,
            platformLabel: I,
        };
    if (t.type === l.$.WATCHING && e?.type === f.fg2.META_QUEST_OR_HORIZON)
        return {
            text: p.intl.formatToPlainString(p.t.ENbTKQ, {
                platform: (0, i.A)(t) ? p.intl.string(p.t.BrHQaq) : p.intl.string(p.t.p6vL0e),
            }),
            platformIcon: x,
            platformLabel: I,
        };
    if (t.type === l.$.STREAMING && e?.type === f.fg2.TWITCH)
        return {
            text: p.intl.formatToPlainString(p.t["4CQq9Q"], { name: p.intl.string(p.t.q4pBG3) }),
            platformIcon: x,
            platformLabel: I,
        };
    if (t.type === l.$.STREAMING && e?.type === f.fg2.YOUTUBE)
        return {
            text: p.intl.formatToPlainString(p.t["4CQq9Q"], { name: p.intl.string(p.t.aS6cK4) }),
            platformIcon: x,
            platformLabel: I,
        };
    if (null != n) {
        let e,
            i = (0, m.A)(n, t);
        switch (t.type) {
            case l.$.PLAYING:
                e = p.t.A17aM8;
                break;
            case l.$.WATCHING:
                e = p.t.ENbTKQ;
                break;
            case l.$.LISTENING:
                e = p.t.EcHzWI;
                break;
            case l.$.COMPETING:
                e = p.t.ikpHeS;
                break;
            case l.$.STREAMING:
                e = p.t.Dzgz4u;
        }
        if (void 0 !== e)
            return { text: p.intl.formatToPlainString(e, { platform: i }), platformIcon: x, platformLabel: I };
    }
    return t.type === l.$.PLAYING
        ? { text: p.intl.string(p.t.BMTj28), platformIcon: x, platformLabel: I }
        : t.type === l.$.STREAMING
          ? { text: p.intl.string(p.t["Jpkr/q"]), platformIcon: x, platformLabel: I }
          : (0, a.Cy)(t)
            ? { text: p.intl.formatToPlainString(p.t.pW3Ip3, { name: t.name }) }
            : t.type === l.$.LISTENING && null != t.details
              ? { text: p.intl.formatToPlainString(p.t["b+lA5+"], { name: t.name }), platformIcon: x, platformLabel: I }
              : t.type === l.$.LISTENING
                ? { text: p.intl.string(p.t.dBISa6), platformIcon: x, platformLabel: I }
                : t.type === l.$.WATCHING && null != t.details
                  ? {
                        text: p.intl.formatToPlainString(p.t.mqdfDc, { name: t.name }),
                        platformIcon: x,
                        platformLabel: I,
                    }
                  : t.type === l.$.WATCHING
                    ? { text: p.intl.string(p.t.GpNXjC), platformIcon: x, platformLabel: I }
                    : t.type === l.$.COMPETING && null != t.details
                      ? {
                            text: p.intl.formatToPlainString(p.t.oHF7Ch, { name: t.name }),
                            platformIcon: x,
                            platformLabel: I,
                        }
                      : t.type === l.$.COMPETING
                        ? { text: p.intl.string(p.t.OzCsIA), platformIcon: x, platformLabel: I }
                        : { text: void 0, platformIcon: x, platformLabel: I };
}
