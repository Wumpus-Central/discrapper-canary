"use strict";
n.d(t, { A: () => R, f: () => v });
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(192308),
    a = n(155718),
    o = n(721768),
    l = n(827785),
    u = n(264322),
    c = n(842209),
    d = n(210978),
    _ = n(861382),
    f = n(392054),
    p = n(168186),
    h = n(664929),
    m = n(580424),
    E = n(576705),
    g = n(257120),
    A = n(634788),
    I = n(374803);
n(827669);
var T = n(73510),
    S = n(985018),
    y = n(959796);
let v = { results: { entries: [] } };
function N() {
    (0, s.openModalLazy)(async () => {
        let { default: e } = await n.e("76429").then(n.bind(n, 717020));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function C(e) {
    return `/${e.displayName}`;
}
let R = {
    sentinel: "/",
    stores: [_.A, u.Ay, E.A],
    matches: (e, t, n, r, i) =>
        i.commands !== I.Ze.DISABLED && null == _.A.getActiveCommand(e.id) && (r || i.commands !== I.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== I.Ze.OLD_BUILT_INS) return v;
        if (r.commands === I.Ze.OLD_BUILT_INS) {
            let r = (0, l.Ez)([a.kc.CHAT], !1, !1),
                i = RegExp(`^${g.A.escape(n)}`, "i"),
                s = (0, p.PV)(r, i, { channel: e, guild: t }, 20),
                o = l.gZ[T.Ik.BUILT_IN];
            return 0 === s.length ? v : { results: { entries: s.map((e) => ({ command: e, section: o })) } };
        }
        let s = (0, h.Yn)(e, n),
            { commands: o, sections: u } = c.eW(
                { channel: e, type: "channel" },
                { commandTypes: [a.kc.CHAT], text: s.text },
                { limit: 20, placeholderCount: 3, scoreMethod: d.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return v;
        let _ = o;
        if (s.hasSpaceTerminator) {
            let e = s.text.trim(),
                t = e + " ";
            _ = _.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === _.length
            ? v
            : {
                  results: {
                      entries: _.slice(0, 20).map((e) => ({
                          command: e,
                          section: u?.find((t) => t.id === e.applicationId),
                      })),
                  },
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: s,
                query: a,
                options: o,
                onHover: l,
                onClick: u,
            } = e,
            c = (0, h.Yn)(s, a),
            d = o.commands === I.Ze.OLD_BUILT_INS;
        return (0, A.GM)({
            query: c.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: u,
            titleWithQuery: S.t.HFRoZR,
            titleWithoutQuery: S.intl.string(S.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: d ? m.Ay.Command : m.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: s, guildId: s.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: d ? y.Y : null,
            headerTrailingContent:
                d && (0, r.jsx)(i.QWc, { size: "xs", onClick: N, text: S.intl.string(S.t["8a0P0y"]) }),
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: r,
                options: i,
                channel: s,
                location: a,
                tabOrEnter: l,
            } = e,
            { command: u, section: c } = t[n];
        if (u.inputType === f.y$.PLACEHOLDER) return null;
        if (i.commands === I.Ze.OLD_BUILT_INS) i.insertText(C(u));
        else {
            let e = a;
            null == e && (e = l ? f.Oh.QUERY : f.Oh.DISCOVERY),
                o.Gf({ channelId: s.id, command: u, section: c ?? null, location: e, queryLength: r?.length });
        }
        return { type: I.kc.COMMAND };
    },
};
