r.d(n, {
    K: function () {
        return C;
    }
});
var i = r(200651);
r(192379);
var a = r(693789),
    o = r(952265),
    s = r(911969),
    l = r(555573),
    u = r(254711),
    c = r(213459),
    d = r(10718),
    f = r(367790),
    p = r(998698),
    h = r(895924),
    _ = r(581364),
    m = r(826298),
    g = r(588468),
    E = r(496675),
    v = r(226951),
    y = r(877565),
    b = r(590921),
    I = r(665692),
    T = r(689079),
    S = r(388032),
    A = r(858567);
let C = { results: { entries: [] } };
function N() {
    (0, o.ZD)(async () => {
        let { default: e } = await r.e('87549').then(r.bind(r, 913962));
        return (n) => (0, i.jsx)(e, { ...n });
    });
}
let R = {
    sentinel: I.GI,
    stores: [p.Z, c.ZP, E.Z],
    matches: (e, n, r, i, a) => a.commands !== b.L8.DISABLED && null == p.Z.getActiveCommand(e.id) && (i || a.commands !== b.L8.OLD_BUILT_INS),
    queryResults(e, n, r, i, a) {
        if (0 === r.length && i.commands !== b.L8.OLD_BUILT_INS) return C;
        if (i.commands === b.L8.OLD_BUILT_INS) {
            let i = (0, u.Kh)([s.yU.CHAT], !1, !1),
                a = RegExp('^'.concat(v.Z.escape(r)), 'i'),
                o = (0, _.Dd)(
                    i,
                    a,
                    {
                        channel: e,
                        guild: n
                    },
                    b.AQ
                ),
                l = u.Tm[T.bi.BUILT_IN];
            return 0 === o.length
                ? C
                : {
                      results: {
                          entries: o.map((e) => ({
                              command: e,
                              section: l
                          }))
                      }
                  };
        }
        let o = (0, m.hV)(e, r),
            { commands: l, sections: c } = d.JT(
                {
                    channel: e,
                    type: 'channel'
                },
                {
                    commandTypes: [s.yU.CHAT],
                    text: o.text
                },
                {
                    limit: b.AQ,
                    placeholderCount: b.YP,
                    scoreMethod: f.p.COMMAND_OR_APPLICATION,
                    allowFetch: a
                }
            );
        if (null == l) return C;
        let p = l;
        if (o.hasSpaceTerminator) {
            let e = o.text.trim(),
                n = e + ' ';
            p = p.filter((r) => r.displayName === e || r.displayName.startsWith(n));
        }
        return 0 === p.length
            ? C
            : {
                  results: {
                      entries: p.slice(0, b.AQ).map((e) => ({
                          command: e,
                          section: null == c ? void 0 : c.find((n) => n.id === e.applicationId)
                      }))
                  }
              };
    },
    renderResults(e) {
        let {
                results: { entries: n },
                selectedIndex: r,
                channel: o,
                query: s,
                options: l,
                onHover: u,
                onClick: c
            } = e,
            d = (0, m.hV)(o, s),
            f = l.commands === b.L8.OLD_BUILT_INS;
        return (0, y.HI)({
            query: d.text,
            selectedIndex: r,
            autocompletes: n,
            onHover: u,
            onClick: c,
            titleWithQuery: S.t.HFRoZW,
            titleWithoutQuery: S.intl.string(S.t['0hKkS0']),
            getQuery: (e) => ''.concat(I.GI).concat(e),
            Component: f ? g.ZP.Command : g.ZP.NewCommand,
            getProps: (e) => {
                let { command: n, section: r } = e;
                return {
                    key: n.id,
                    command: n,
                    channel: o,
                    guildId: o.guild_id,
                    showImage: !0,
                    section: r
                };
            },
            key: 'commands',
            headerClassName: f ? A.legacyInputCommandHeader : null,
            headerTrailingContent: f
                ? (0, i.jsx)(a.zx, {
                      type: 'button',
                      look: a.zx.Looks.LINK,
                      color: a.zx.Colors.BRAND,
                      size: a.zx.Sizes.MIN,
                      onClick: N,
                      children: S.intl.string(S.t['8a0P09'])
                  })
                : null
        });
    },
    onSelect(e) {
        let {
                results: { entries: n },
                index: r,
                queryText: i,
                options: a,
                channel: o,
                location: s,
                tabOrEnter: u
            } = e,
            { command: c, section: d } = n[r];
        if (c.inputType === h.iw.PLACEHOLDER) return null;
        if (a.commands === b.L8.OLD_BUILT_INS) a.insertText(O(c));
        else {
            let e = s;
            null == e && (e = u ? h.Vh.QUERY : h.Vh.DISCOVERY),
                l.Po({
                    channelId: o.id,
                    command: c,
                    section: null != d ? d : null,
                    location: e,
                    queryLength: null == i ? void 0 : i.length
                });
        }
        return { type: b.z2.COMMAND };
    }
};
function O(e) {
    return ''.concat(I.GI).concat(e.displayName);
}
n.Z = R;
