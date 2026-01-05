n.d(t, { Z: () => N }), n(35282), n(539854), n(388685), n(387201), n(642613);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    c = n(36563),
    a = n(481060),
    d = n(212819),
    u = n(938078),
    f = n(823385),
    h = n(601565),
    p = n(131704),
    x = n(601964),
    m = n(592125),
    g = n(580005),
    v = n(984933),
    j = n(430824),
    _ = n(496675),
    b = n(914010),
    y = n(594174),
    w = n(938475),
    O = n(823379),
    C = n(102172),
    S = n(981631),
    I = n(715689),
    Z = n(388032),
    E = n(151141);
function P(e) {
    let { result: t, onSelectChannel: n } = e,
        i = (0, o.e7)([j.Z], () => j.Z.getGuild(t.record.guild_id)),
        s = (0, o.Wu)([w.ZP, y.default], () =>
            w.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => y.default.getUser(e.user.id))
                .filter(O.lm),
        );
    return (0, r.jsxs)(a.P3F, {
        className: E.channelResult,
        onClick: () => n(t.record.id),
        children: [
            (0, r.jsxs)("div", {
                className: E.channelResultInfo,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: null != i ? (0, x.EB)(i, 32) : void 0,
                        className: E.guildIcon,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(a.Text, {
                                className: E.channelName,
                                variant: "text-md/medium",
                                color: "interactive-text-default",
                                children: [
                                    (0, r.jsx)(a.gj8, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    " ",
                                    t.record.name,
                                ],
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: null == i ? void 0 : i.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(c.Z, {
                users: s,
                maxUsers: 3,
                hideOverflowCount: !0,
            }),
        ],
    });
}
function N(e) {
    let { onSelectChannel: t, className: n } = e,
        { search: s, query: c, results: x } = (0, h.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        y = (0, o.Wu)([b.Z, v.ZP, m.Z, j.Z, _.Z], () => {
            let e = [],
                t = b.Z.getGuildId();
            if (null == t) return e;
            for (let n of v.ZP.getVocalChannelIds(t)) {
                let t = m.Z.getChannel(n);
                null != t && (0, C.JL)(t, j.Z, _.Z) && e.push(t);
            }
            return e;
        }),
        w = (0, o.Wu)([f.Z, m.Z, g.Z, j.Z, _.Z], () => {
            let e = [],
                t = new Set();
            for (let n of f.Z.getChannelHistory()) {
                let r = m.Z.getChannel(n);
                (null == r ? void 0 : r.type) === S.d4z.GUILD_VOICE &&
                    (0, C.JL)(r, j.Z, _.Z) &&
                    (t.add(r.id), e.push(r));
            }
            for (let n of g.Z.getFrequentlyWithoutFetchingLatest())
                n instanceof p.Sf &&
                    n.type === S.d4z.GUILD_VOICE &&
                    !t.has(n.id) &&
                    (0, C.JL)(n, j.Z, _.Z) &&
                    (t.add(n.id), e.push(n));
            return e;
        }),
        N = i.useMemo(() => {
            let e = new Set(w.map((e) => e.id)),
                t = new Set(y.map((e) => e.id));
            return [
                ...y
                    .toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, u.Z)(e.id))
                    .filter(O.lm),
                ...w
                    .filter((e) => !t.has(e.id))
                    .map((e) => (0, u.Z)(e.id))
                    .filter(O.lm),
            ];
        }, [w, y]),
        R = "" !== c ? x : N;
    return (0, r.jsxs)("div", {
        className: l()(E.root, n),
        children: [
            (0, r.jsx)("div", {
                className: E.searchBar,
                children: (0, r.jsx)(a.E1j, {
                    placeholder: Z.intl.string(Z.t["3jvv+6"]),
                    query: c,
                    onChange: (e) =>
                        s({
                            query: e,
                            resultTypes: [d.h8.VOICE_CHANNEL],
                        }),
                    onClear: () =>
                        s({
                            query: "",
                            resultTypes: [d.h8.VOICE_CHANNEL],
                        }),
                    autoFocus: !0,
                }),
            }),
            R.length > 0
                ? (0, r.jsx)(a.aVo, {
                      renderListHeader: function () {
                          return (0, r.jsx)(a.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: Z.intl.string(I.default.FZ9Fl7),
                          });
                      },
                      sections: [R.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: n } = e,
                              i = R[n];
                          return (0, r.jsx)(
                              P,
                              {
                                  result: i,
                                  onSelectChannel: t,
                              },
                              i.record.id,
                          );
                      },
                  })
                : (0, r.jsx)(T, {}),
        ],
    });
}
function T() {
    return (0, r.jsxs)("div", {
        className: E.emptyState,
        children: [
            (0, r.jsx)(a._Ve, {
                className: E.emptyIcon,
                size: "md",
                color: a.TVs.colors.ICON_MUTED,
            }),
            (0, r.jsx)(a.Text, {
                className: E.emptyHeader,
                variant: "text-lg/medium",
                color: "text-strong",
                children: Z.intl.string(I.default.sWGfr9),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: Z.intl.string(I.default["nBRtt/"]),
            }),
        ],
    });
}
