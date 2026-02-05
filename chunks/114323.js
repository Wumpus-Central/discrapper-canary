"use strict";
n.d(t, { A: () => N, f: () => v });
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
    p = n(168186),
    h = n(664929),
    m = n(580424),
    g = n(576705),
    E = n(257120),
    A = n(634788),
    I = n(374803);
n(827669);
var T = n(73510),
    y = n(985018),
    S = n(31639);
let v = { results: { entries: [] } };
function C() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e("76429").then(n.bind(n, 717020));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function b(e) {
    return `/${e.displayName}`;
}
let N = {
    sentinel: "/",
    stores: [_.A, u.Ay, g.A],
    matches: (e, t, n, r, i) =>
        i.commands !== I.Ze.DISABLED && null == _.A.getActiveCommand(e.id) && (r || i.commands !== I.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== I.Ze.OLD_BUILT_INS) return v;
        if (r.commands === I.Ze.OLD_BUILT_INS) {
            let r = (0, l.Ez)([s.kc.CHAT], !1, !1),
                i = RegExp(`^${E.A.escape(n)}`, "i"),
                a = (0, p.PV)(r, i, { channel: e, guild: t }, 20),
                o = l.gZ[T.Ik.BUILT_IN];
            return 0 === a.length ? v : { results: { entries: a.map((e) => ({ command: e, section: o })) } };
        }
        let a = (0, h.Yn)(e, n),
            { commands: o, sections: u } = c.eW(
                { channel: e, type: "channel" },
                { commandTypes: [s.kc.CHAT], text: a.text },
                { limit: 20, placeholderCount: 3, scoreMethod: d.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == o) return v;
        let _ = o;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
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
                channel: a,
                query: s,
                options: o,
                onHover: l,
                onClick: u,
            } = e,
            c = (0, h.Yn)(a, s),
            d = o.commands === I.Ze.OLD_BUILT_INS;
        return (0, A.GM)({
            query: c.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: u,
            titleWithQuery: y.t.HFRoZR,
            titleWithoutQuery: y.intl.string(y.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: d ? m.Ay.Command : m.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: a, guildId: a.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: d ? S.Y : null,
            headerTrailingContent:
                d && (0, r.jsx)(i.QWc, { size: "xs", onClick: C, text: y.intl.string(y.t["8a0P0y"]) }),
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
        if (i.commands === I.Ze.OLD_BUILT_INS) i.insertText(b(u));
        else {
            let e = s;
            null == e && (e = l ? f.Oh.QUERY : f.Oh.DISCOVERY),
                o.Gf({ channelId: a.id, command: u, section: c ?? null, location: e, queryLength: r?.length });
        }
        return { type: I.kc.COMMAND };
    },
};
