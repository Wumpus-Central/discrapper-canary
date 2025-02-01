n.d(t, {
    K: () => A,
    Z: () => R
});
var i = n(200651);
n(192379);
var r = n(693789),
    a = n(952265),
    s = n(911969),
    o = n(555573),
    l = n(254711),
    u = n(213459),
    c = n(10718),
    d = n(367790),
    f = n(998698),
    _ = n(895924),
    p = n(581364),
    h = n(826298),
    m = n(588468),
    g = n(496675),
    E = n(226951),
    v = n(877565),
    y = n(590921),
    I = n(665692),
    T = n(689079),
    b = n(388032),
    S = n(858567);
let A = { results: { entries: [] } };
function N() {
    (0, a.ZD)(async () => {
        let { default: e } = await n.e('87549').then(n.bind(n, 913962));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function C(e) {
    return ''.concat(I.GI).concat(e.displayName);
}
let R = {
    sentinel: I.GI,
    stores: [f.Z, u.ZP, g.Z],
    matches: (e, t, n, i, r) => r.commands !== y.L8.DISABLED && null == f.Z.getActiveCommand(e.id) && (i || r.commands !== y.L8.OLD_BUILT_INS),
    queryResults(e, t, n, i, r) {
        if (0 === n.length && i.commands !== y.L8.OLD_BUILT_INS) return A;
        if (i.commands === y.L8.OLD_BUILT_INS) {
            let i = (0, l.Kh)([s.yU.CHAT], !1, !1),
                r = RegExp('^'.concat(E.Z.escape(n)), 'i'),
                a = (0, p.Dd)(
                    i,
                    r,
                    {
                        channel: e,
                        guild: t
                    },
                    y.AQ
                ),
                o = l.Tm[T.bi.BUILT_IN];
            return 0 === a.length
                ? A
                : {
                      results: {
                          entries: a.map((e) => ({
                              command: e,
                              section: o
                          }))
                      }
                  };
        }
        let a = (0, h.hV)(e, n),
            { commands: o, sections: u } = c.JT(
                {
                    channel: e,
                    type: 'channel'
                },
                {
                    commandTypes: [s.yU.CHAT],
                    text: a.text
                },
                {
                    limit: y.AQ,
                    placeholderCount: y.YP,
                    scoreMethod: d.p.COMMAND_OR_APPLICATION,
                    allowFetch: r
                }
            );
        if (null == o) return A;
        let f = o;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + ' ';
            f = f.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === f.length
            ? A
            : {
                  results: {
                      entries: f.slice(0, y.AQ).map((e) => ({
                          command: e,
                          section: null == u ? void 0 : u.find((t) => t.id === e.applicationId)
                      }))
                  }
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
                onClick: u
            } = e,
            c = (0, h.hV)(a, s),
            d = o.commands === y.L8.OLD_BUILT_INS;
        return (0, v.HI)({
            query: c.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: u,
            titleWithQuery: b.t.HFRoZW,
            titleWithoutQuery: b.intl.string(b.t['0hKkS0']),
            getQuery: (e) => ''.concat(I.GI).concat(e),
            Component: d ? m.ZP.Command : m.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: a,
                    guildId: a.guild_id,
                    showImage: !0,
                    section: n
                };
            },
            key: 'commands',
            headerClassName: d ? S.legacyInputCommandHeader : null,
            headerTrailingContent: d
                ? (0, i.jsx)(r.zx, {
                      type: 'button',
                      look: r.zx.Looks.LINK,
                      color: r.zx.Colors.BRAND,
                      size: r.zx.Sizes.MIN,
                      onClick: N,
                      children: b.intl.string(b.t['8a0P09'])
                  })
                : null
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: i,
                options: r,
                channel: a,
                location: s,
                tabOrEnter: l
            } = e,
            { command: u, section: c } = t[n];
        if (u.inputType === _.iw.PLACEHOLDER) return null;
        if (r.commands === y.L8.OLD_BUILT_INS) r.insertText(C(u));
        else {
            let e = s;
            null == e && (e = l ? _.Vh.QUERY : _.Vh.DISCOVERY),
                o.Po({
                    channelId: a.id,
                    command: u,
                    section: null != c ? c : null,
                    location: e,
                    queryLength: null == i ? void 0 : i.length
                });
        }
        return { type: y.z2.COMMAND };
    }
};
