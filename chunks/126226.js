n.d(t, {
    K: () => A,
    Z: () => P
}),
    n(474991),
    n(398202),
    n(301563),
    n(566702);
var r = n(200651);
n(192379);
var i = n(693789),
    o = n(952265),
    a = n(911969),
    s = n(555573),
    l = n(254711),
    c = n(213459),
    u = n(10718),
    d = n(367790),
    f = n(998698),
    _ = n(895924),
    p = n(581364),
    h = n(826298),
    m = n(588468),
    g = n(496675),
    E = n(226951),
    b = n(877565),
    y = n(590921),
    v = n(665692),
    O = n(689079),
    I = n(388032),
    S = n(270764);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = { results: { entries: [] } };
function C() {
    (0, o.ZD)(async () => {
        let { default: e } = await n.e('87549').then(n.bind(n, 913962));
        return (t) => (0, r.jsx)(e, N({}, t));
    });
}
function R(e) {
    return ''.concat(v.GI).concat(e.displayName);
}
let P = {
    sentinel: v.GI,
    stores: [f.Z, c.ZP, g.Z],
    matches: (e, t, n, r, i) => i.commands !== y.L8.DISABLED && null == f.Z.getActiveCommand(e.id) && (r || i.commands !== y.L8.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== y.L8.OLD_BUILT_INS) return A;
        if (r.commands === y.L8.OLD_BUILT_INS) {
            let r = (0, l.Kh)([a.yU.CHAT], !1, !1),
                i = RegExp('^'.concat(E.Z.escape(n)), 'i'),
                o = (0, p.Dd)(
                    r,
                    i,
                    {
                        channel: e,
                        guild: t
                    },
                    y.AQ
                ),
                s = l.Tm[O.bi.BUILT_IN];
            return 0 === o.length
                ? A
                : {
                      results: {
                          entries: o.map((e) => ({
                              command: e,
                              section: s
                          }))
                      }
                  };
        }
        let o = (0, h.hV)(e, n),
            { commands: s, sections: c } = u.JT(
                {
                    channel: e,
                    type: 'channel'
                },
                {
                    commandTypes: [a.yU.CHAT],
                    text: o.text
                },
                {
                    limit: y.AQ,
                    placeholderCount: y.YP,
                    scoreMethod: d.p.COMMAND_OR_APPLICATION,
                    allowFetch: i
                }
            );
        if (null == s) return A;
        let f = s;
        if (o.hasSpaceTerminator) {
            let e = o.text.trim(),
                t = e + ' ';
            f = f.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === f.length
            ? A
            : {
                  results: {
                      entries: f.slice(0, y.AQ).map((e) => ({
                          command: e,
                          section: null == c ? void 0 : c.find((t) => t.id === e.applicationId)
                      }))
                  }
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: o,
                query: a,
                options: s,
                onHover: l,
                onClick: c
            } = e,
            u = (0, h.hV)(o, a),
            d = s.commands === y.L8.OLD_BUILT_INS;
        return (0, b.HI)({
            query: u.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: c,
            titleWithQuery: I.t.HFRoZW,
            titleWithoutQuery: I.NW.string(I.t['0hKkS0']),
            getQuery: (e) => ''.concat(v.GI).concat(e),
            Component: d ? m.ZP.Command : m.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: o,
                    guildId: o.guild_id,
                    showImage: !0,
                    section: n
                };
            },
            key: 'commands',
            headerClassName: d ? S.legacyInputCommandHeader : null,
            headerTrailingContent: d
                ? (0, r.jsx)(i.zx, {
                      type: 'button',
                      look: i.zx.Looks.LINK,
                      color: i.zx.Colors.BRAND,
                      size: i.zx.Sizes.MIN,
                      onClick: C,
                      children: I.NW.string(I.t['8a0P09'])
                  })
                : null
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: r,
                options: i,
                channel: o,
                location: a,
                tabOrEnter: l
            } = e,
            { command: c, section: u } = t[n];
        if (c.inputType === _.iw.PLACEHOLDER) return null;
        if (i.commands === y.L8.OLD_BUILT_INS) i.insertText(R(c));
        else {
            let e = a;
            null == e && (e = l ? _.Vh.QUERY : _.Vh.DISCOVERY),
                s.Po({
                    channelId: o.id,
                    command: c,
                    section: null != u ? u : null,
                    location: e,
                    queryLength: null == r ? void 0 : r.length
                });
        }
        return { type: y.z2.COMMAND };
    }
};
