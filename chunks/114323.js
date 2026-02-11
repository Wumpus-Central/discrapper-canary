"use strict";
n.d(t, { A: () => R, f: () => C });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(192308),
    s = n(155718),
    o = n(721768),
    l = n(827785),
    u = n(264322),
    c = n(842209),
    d = n(210978),
    _ = n(861382),
    f = n(392054),
    h = n(168186),
    p = n(664929),
    g = n(580424),
    E = n(576705),
    A = n(257120),
    I = n(634788),
    T = n(374803);
n(827669);
var y = n(73510),
    S = n(985018),
    v = n(522013);
let C = { results: { entries: [] } };
function b() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e("76429").then(n.bind(n, 717020));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function N(e) {
    return `/${e.displayName}`;
}
let R = {
    sentinel: "/",
    stores: [_.A, u.Ay, E.A],
    matches: (e, t, n, r, i) =>
        i.commands !== T.Ze.DISABLED && null == _.A.getActiveCommand(e.id) && (r || i.commands !== T.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== T.Ze.OLD_BUILT_INS) return C;
        if (r.commands === T.Ze.OLD_BUILT_INS) {
            let r = (0, l.Ez)([s.kc.CHAT], !1, !1),
                i = RegExp(`^${A.A.escape(n)}`, "i"),
                a = (0, h.PV)(r, i, { channel: e, guild: t }, 20),
                o = l.gZ[y.Ik.BUILT_IN];
            return 0 === a.length ? C : { results: { entries: a.map((e) => ({ command: e, section: o })) } };
        }
        let a = (0, p.Yn)(e, n),
            { commands: o, sections: u } = c.eW(
                { channel: e, type: "channel" },
                { commandTypes: [s.kc.CHAT], text: a.text },
                { limit: 20, placeholderCount: 3, scoreMethod: d.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return C;
        let _ = o;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + " ";
            _ = _.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === _.length
            ? C
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
                channel: a,
                query: s,
                options: o,
                onHover: l,
                onClick: u,
            } = e,
            c = (0, p.Yn)(a, s),
            d = o.commands === T.Ze.OLD_BUILT_INS;
        return (0, I.GM)({
            query: c.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: u,
            titleWithQuery: S.t.HFRoZR,
            titleWithoutQuery: S.intl.string(S.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: d ? g.Ay.Command : g.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: a, guildId: a.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: d ? v.Y : null,
            headerTrailingContent:
                d && (0, r.jsx)(i.QWc, { size: "xs", onClick: b, text: S.intl.string(S.t["8a0P0y"]) }),
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: r,
                options: i,
                channel: a,
                location: s,
                tabOrEnter: l,
            } = e,
            { command: u, section: c } = t[n];
        if (u.inputType === f.y$.PLACEHOLDER) return null;
        if (i.commands === T.Ze.OLD_BUILT_INS) i.insertText(N(u));
        else {
            let e = s;
            null == e && (e = l ? f.Oh.QUERY : f.Oh.DISCOVERY),
                o.Gf({ channelId: a.id, command: u, section: c ?? null, location: e, queryLength: r?.length });
        }
        return { type: T.kc.COMMAND };
    },
};
