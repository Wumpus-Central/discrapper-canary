r.d(n, {
    K: function () {
        return N;
    }
});
var i = r(200651);
r(192379);
var a = r(693789),
    s = r(952265),
    o = r(911969),
    l = r(555573),
    u = r(254711),
    c = r(213459),
    d = r(10718),
    f = r(367790),
    _ = r(998698),
    h = r(895924),
    p = r(581364),
    m = r(826298),
    g = r(588468),
    E = r(496675),
    v = r(226951),
    I = r(877565),
    T = r(590921),
    b = r(665692),
    y = r(689079),
    S = r(388032),
    A = r(858567);
let N = { results: { entries: [] } };
function C() {
    (0, s.ZD)(async () => {
        let { default: e } = await r.e('87549').then(r.bind(r, 913962));
        return (n) => (0, i.jsx)(e, { ...n });
    });
}
let R = {
    sentinel: b.GI,
    stores: [_.Z, c.ZP, E.Z],
    matches: (e, n, r, i, a) => a.commands !== T.L8.DISABLED && null == _.Z.getActiveCommand(e.id) && (i || a.commands !== T.L8.OLD_BUILT_INS),
    queryResults(e, n, r, i, a) {
        if (0 === r.length && i.commands !== T.L8.OLD_BUILT_INS) return N;
        if (i.commands === T.L8.OLD_BUILT_INS) {
            let i = (0, u.Kh)([o.yU.CHAT], !1, !1),
                a = RegExp('^'.concat(v.Z.escape(r)), 'i'),
                s = (0, p.Dd)(
                    i,
                    a,
                    {
                        channel: e,
                        guild: n
                    },
                    T.AQ
                ),
                l = u.Tm[y.bi.BUILT_IN];
            return 0 === s.length
                ? N
                : {
                      results: {
                          entries: s.map((e) => ({
                              command: e,
                              section: l
                          }))
                      }
                  };
        }
        let s = (0, m.hV)(e, r),
            { commands: l, sections: c } = d.JT(
                e,
                {
                    commandTypes: [o.yU.CHAT],
                    text: s.text
                },
                {
                    limit: T.AQ,
                    placeholderCount: T.YP,
                    scoreMethod: f.p.COMMAND_OR_APPLICATION,
                    allowFetch: a
                }
            );
        if (null == l) return N;
        let _ = l;
        if (s.hasSpaceTerminator) {
            let e = s.text.trim(),
                n = e + ' ';
            _ = _.filter((r) => r.displayName === e || r.displayName.startsWith(n));
        }
        return 0 === _.length
            ? N
            : {
                  results: {
                      entries: _.slice(0, T.AQ).map((e) => ({
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
                channel: s,
                query: o,
                options: l,
                onHover: u,
                onClick: c
            } = e,
            d = (0, m.hV)(s, o),
            f = l.commands === T.L8.OLD_BUILT_INS;
        return (0, I.HI)({
            query: d.text,
            selectedIndex: r,
            autocompletes: n,
            onHover: u,
            onClick: c,
            titleWithQuery: S.t.HFRoZW,
            titleWithoutQuery: S.intl.string(S.t['0hKkS0']),
            getQuery: (e) => ''.concat(b.GI).concat(e),
            Component: f ? g.ZP.Command : g.ZP.NewCommand,
            getProps: (e) => {
                let { command: n, section: r } = e;
                return {
                    key: n.id,
                    command: n,
                    channel: s,
                    guildId: s.guild_id,
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
                      onClick: C,
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
                channel: s,
                location: o,
                tabOrEnter: u
            } = e,
            { command: c, section: d } = n[r];
        if (c.inputType === h.iw.PLACEHOLDER) return null;
        if (a.commands === T.L8.OLD_BUILT_INS) a.insertText(O(c));
        else {
            let e = o;
            null == e && (e = u ? h.Vh.QUERY : h.Vh.DISCOVERY),
                l.Po({
                    channelId: s.id,
                    command: c,
                    section: null != d ? d : null,
                    location: e,
                    queryLength: null == i ? void 0 : i.length
                });
        }
        return { type: T.z2.COMMAND };
    }
};
function O(e) {
    return ''.concat(b.GI).concat(e.displayName);
}
n.Z = R;
