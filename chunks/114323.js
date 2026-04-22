n.d(t, { A: () => T, f: () => f });
var l = n(627968);
n(64700);
var r = n(123292),
    i = n(192308),
    s = n(155718),
    o = n(721768),
    u = n(827785),
    a = n(264322),
    m = n(842209),
    c = n(210978),
    d = n(861382),
    p = n(392054),
    y = n(168186),
    A = n(664929),
    h = n(580424),
    g = n(576705),
    M = n(257120),
    I = n(634788),
    N = n(374803);
n(827669);
var E = n(73510),
    S = n(985018),
    C = n(905636);
let f = { results: { entries: [] } };
function _() {
    (0, i.openModalLazy)(async () => {
        let { default: e } = await n.e("76429").then(n.bind(n, 717020));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
let T = {
    sentinel: "/",
    stores: [d.A, a.Ay, g.A],
    matches: (e, t, n, l, r) =>
        r.commands !== N.Ze.DISABLED && null == d.A.getActiveCommand(e.id) && (l || r.commands !== N.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, l, r) {
        if (0 === n.length && l.commands !== N.Ze.OLD_BUILT_INS) return f;
        if (l.commands === N.Ze.OLD_BUILT_INS) {
            let l = (0, u.Ez)([s.kc.CHAT], !1, !1),
                r = RegExp(`^${M.A.escape(n)}`, "i"),
                i = (0, y.PV)(l, r, { channel: e, guild: t }, 20),
                o = u.gZ[E.Ik.BUILT_IN];
            return 0 === i.length ? f : { results: { entries: i.map((e) => ({ command: e, section: o })) } };
        }
        let i = (0, A.Yn)(e, n),
            { commands: o, sections: a } = m.eW(
                { channel: e, type: "channel" },
                { commandTypes: [s.kc.CHAT], text: i.text },
                { limit: 20, placeholderCount: 3, scoreMethod: c.M.COMMAND_OR_APPLICATION, allowFetch: r },
            );
        if (null == o) return f;
        let d = o;
        if (i.hasSpaceTerminator) {
            let e = i.text.trim(),
                t = e + " ";
            d = d.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === d.length
            ? f
            : {
                  results: {
                      entries: d
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: a?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: i,
                query: s,
                options: o,
                onHover: u,
                onClick: a,
            } = e,
            m = (0, A.Yn)(i, s),
            c = o.commands === N.Ze.OLD_BUILT_INS;
        return (0, I.GM)({
            query: m.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: u,
            onClick: a,
            titleWithQuery: S.t.HFRoZR,
            titleWithoutQuery: S.intl.string(S.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: c ? h.Ay.Command : h.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: i, guildId: i.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: c ? C.Y : null,
            headerTrailingContent: c && (0, l.jsx)(r.Q, { size: "xs", onClick: _, text: S.intl.string(S.t["8a0P0y"]) }),
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: l,
                options: r,
                channel: i,
                location: s,
                tabOrEnter: u,
            } = e,
            { command: a, section: m } = t[n];
        if (a.inputType === p.y$.PLACEHOLDER) return null;
        if (r.commands === N.Ze.OLD_BUILT_INS) {
            var c;
            r.insertText(((c = a), `/${c.displayName}`));
        } else {
            let e = s;
            null == e && (e = u ? p.Oh.QUERY : p.Oh.DISCOVERY),
                o.Gf({ channelId: i.id, command: a, section: m ?? null, location: e, queryLength: l?.length });
        }
        return { type: N.kc.COMMAND };
    },
};
