n.d(t, {
    A: () => R,
    f: () => T,
}),
    n(591487),
    n(727858),
    n(747238),
    n(733351);
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(192308),
    s = n(155718),
    o = n(721768),
    l = n(827785),
    c = n(264322),
    u = n(842209),
    d = n(210978),
    f = n(861382),
    p = n(392054),
    _ = n(168186),
    h = n(664929),
    m = n(580424),
    g = n(576705),
    E = n(257120),
    b = n(634788),
    y = n(374803);
n(827669);
var O = n(73510),
    A = n(985018),
    v = n(31639);

function S(e, t, n) {
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

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = {
    results: {
        entries: [],
    },
};

function C() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e("76429").then(n.bind(n, 717020));
        return (t) => (0, r.jsx)(e, I({}, t));
    });
}

function N(e) {
    return "".concat("/").concat(e.displayName);
}
let R = {
    sentinel: "/",
    stores: [f.A, c.Ay, g.A],
    matches: (e, t, n, r, i) =>
        i.commands !== y.Ze.DISABLED && null == f.A.getActiveCommand(e.id) && (r || i.commands !== y.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, r, i) {
        if (0 === n.length && r.commands !== y.Ze.OLD_BUILT_INS) return T;
        if (r.commands === y.Ze.OLD_BUILT_INS) {
            let r = (0, l.Ez)([s.kc.CHAT], !1, !1),
                i = RegExp("^".concat(E.A.escape(n)), "i"),
                a = (0, _.PV)(
                    r,
                    i,
                    {
                        channel: e,
                        guild: t,
                    },
                    20,
                ),
                o = l.gZ[O.Ik.BUILT_IN];
            return 0 === a.length
                ? T
                : {
                      results: {
                          entries: a.map((e) => ({
                              command: e,
                              section: o,
                          })),
                      },
                  };
        }
        let a = (0, h.Yn)(e, n),
            { commands: o, sections: c } = u.eW(
                {
                    channel: e,
                    type: "channel",
                },
                {
                    commandTypes: [s.kc.CHAT],
                    text: a.text,
                },
                {
                    limit: 20,
                    placeholderCount: 3,
                    scoreMethod: d.M.COMMAND_OR_APPLICATION,
                    allowFetch: i,
                },
            );
        if (null == o) return T;
        let f = o;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + " ";
            f = f.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === f.length
            ? T
            : {
                  results: {
                      entries: f.slice(0, 20).map((e) => ({
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
                query: s,
                options: o,
                onHover: l,
                onClick: c,
            } = e,
            u = (0, h.Yn)(a, s),
            d = o.commands === y.Ze.OLD_BUILT_INS;
        return (0, b.GM)({
            query: u.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: l,
            onClick: c,
            titleWithQuery: A.t.HFRoZR,
            titleWithoutQuery: A.intl.string(A.t["0hKkS+"]),
            getQuery: (e) => "".concat("/").concat(e),
            Component: d ? m.Ay.Command : m.Ay.NewCommand,
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
            headerClassName: d ? v.Y : null,
            headerTrailingContent:
                d &&
                (0, r.jsx)(i.QWc, {
                    size: "xs",
                    onClick: C,
                    text: A.intl.string(A.t["8a0P0y"]),
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
                location: s,
                tabOrEnter: l,
            } = e,
            { command: c, section: u } = t[n];
        if (c.inputType === p.y$.PLACEHOLDER) return null;
        if (i.commands === y.Ze.OLD_BUILT_INS) i.insertText(N(c));
        else {
            let e = s;
            null == e && (e = l ? p.Oh.QUERY : p.Oh.DISCOVERY),
                o.Gf({
                    channelId: a.id,
                    command: c,
                    section: null != u ? u : null,
                    location: e,
                    queryLength: null == r ? void 0 : r.length,
                });
        }
        return {
            type: y.kc.COMMAND,
        };
    },
};
