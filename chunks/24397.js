n.d(t, {
    K: () => C,
    Z: () => R,
}),
    n(413496),
    n(433524),
    n(35282),
    n(781311);
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(952265),
    o = n(911969),
    s = n(555573),
    l = n(254711),
    c = n(213459),
    u = n(10718),
    d = n(367790),
    f = n(998698),
    p = n(895924),
    _ = n(581364),
    m = n(826298),
    h = n(588468),
    g = n(496675),
    E = n(226951),
    b = n(877565),
    y = n(590921),
    O = n(761652),
    v = n(689079),
    S = n(388032),
    I = n(793872);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
let C = { results: { entries: [] } };
function N() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e("87549").then(n.bind(n, 913962));
        return (t) => (0, r.jsx)(e, A({}, t));
    });
}
function P(e) {
    return "".concat(O.GI).concat(e.displayName);
}
let R = {
    sentinel: O.GI,
    stores: [f.Z, c.ZP, g.Z],
    matches: (e, t, n, r, i) =>
        i.commands !== y.L8.DISABLED && null == f.Z.getActiveCommand(e.id) && (r || i.commands !== y.L8.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== y.L8.OLD_BUILT_INS) return C;
        if (r.commands === y.L8.OLD_BUILT_INS) {
            let r = (0, l.Kh)([o.yU.CHAT], !1, !1),
                i = RegExp("^".concat(E.Z.escape(n)), "i"),
                a = (0, _.Dd)(
                    r,
                    i,
                    {
                        channel: e,
                        guild: t,
                    },
                    y.AQ,
                ),
                s = l.Tm[v.bi.BUILT_IN];
            return 0 === a.length
                ? C
                : {
                      results: {
                          entries: a.map((e) => ({
                              command: e,
                              section: s,
                          })),
                      },
                  };
        }
        let a = (0, m.hV)(e, n),
            { commands: s, sections: c } = u.JT(
                {
                    channel: e,
                    type: "channel",
                },
                {
                    commandTypes: [o.yU.CHAT],
                    text: a.text,
                },
                {
                    limit: y.AQ,
                    placeholderCount: y.YP,
                    scoreMethod: d.p.COMMAND_OR_APPLICATION,
                    allowFetch: i,
                },
            );
        if (null == s) return C;
        let f = s;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + " ";
            f = f.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === f.length
            ? C
            : {
                  results: {
                      entries: f.slice(0, y.AQ).map((e) => ({
                          command: e,
                          section: null == c ? void 0 : c.find((t) => t.id === e.applicationId),
                      })),
                  },
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: a,
                query: o,
                options: s,
                onHover: l,
                onClick: c,
            } = e,
            u = (0, m.hV)(a, o),
            d = s.commands === y.L8.OLD_BUILT_INS;
        return (0, b.HI)({
            query: u.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: c,
            titleWithQuery: S.t.HFRoZR,
            titleWithoutQuery: S.intl.string(S.t["0hKkS+"]),
            getQuery: (e) => "".concat(O.GI).concat(e),
            Component: d ? h.ZP.Command : h.ZP.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return {
                    key: t.id,
                    command: t,
                    channel: a,
                    guildId: a.guild_id,
                    showImage: !0,
                    section: n,
                };
            },
            key: "commands",
            headerClassName: d ? I.legacyInputCommandHeader : null,
            headerTrailingContent:
                d &&
                (0, r.jsx)(i.Avr, {
                    size: "xs",
                    onClick: N,
                    text: S.intl.string(S.t["8a0P0y"]),
                }),
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: r,
                options: i,
                channel: a,
                location: o,
                tabOrEnter: l,
            } = e,
            { command: c, section: u } = t[n];
        if (c.inputType === p.iw.PLACEHOLDER) return null;
        if (i.commands === y.L8.OLD_BUILT_INS) i.insertText(P(c));
        else {
            let e = o;
            null == e && (e = l ? p.Vh.QUERY : p.Vh.DISCOVERY),
                s.Po({
                    channelId: a.id,
                    command: c,
                    section: null != u ? u : null,
                    location: e,
                    queryLength: null == r ? void 0 : r.length,
                });
        }
        return { type: y.z2.COMMAND };
    },
};
