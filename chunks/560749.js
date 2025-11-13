n.d(t, { Z: () => E }), n(35282), n(539854), n(388685), n(387201), n(642613);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(36563),
    c = n(481060),
    d = n(212819),
    u = n(938078),
    f = n(823385),
    p = n(601565),
    h = n(131704),
    m = n(601964),
    _ = n(592125),
    g = n(580005),
    x = n(984933),
    v = n(430824),
    j = n(496675),
    b = n(914010),
    S = n(594174),
    y = n(938475),
    C = n(823379),
    O = n(102172),
    w = n(981631),
    P = n(604415),
    T = n(388032),
    Z = n(603410);
function I(e) {
    let { result: t, onSelectChannel: n } = e,
        i = (0, s.e7)([v.Z], () => v.Z.getGuild(t.record.guild_id)),
        l = (0, s.Wu)([y.ZP, S.default], () =>
            y.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => S.default.getUser(e.user.id))
                .filter(C.lm),
        );
    return (0, r.jsxs)(c.P3F, {
        className: Z.channelResult,
        onClick: () => n(t.record.id),
        children: [
            (0, r.jsxs)("div", {
                className: Z.channelResultInfo,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: null != i ? (0, m.EB)(i, 32) : void 0,
                        className: Z.guildIcon,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(c.Text, {
                                className: Z.channelName,
                                variant: "text-md/medium",
                                color: "interactive-normal",
                                children: [
                                    (0, r.jsx)(c.gj8, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    " ",
                                    t.record.name,
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: null == i ? void 0 : i.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.Z, {
                users: l,
                maxUsers: 3,
                hideOverflowCount: !0,
            }),
        ],
    });
}
function E(e) {
    let { onSelectChannel: t, className: n } = e,
        { search: l, query: a, results: m } = (0, p.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        S = (0, s.Wu)([b.Z, x.ZP, _.Z, v.Z, j.Z], () => {
            let e = [],
                t = b.Z.getGuildId();
            if (null == t) return e;
            for (let n of x.ZP.getVocalChannelIds(t)) {
                let t = _.Z.getChannel(n);
                null != t && (0, O.JL)(t, v.Z, j.Z) && e.push(t);
            }
            return e;
        }),
        y = (0, s.Wu)([f.Z, _.Z, g.Z, v.Z, j.Z], () => {
            let e = [],
                t = new Set();
            for (let n of f.Z.getChannelHistory()) {
                let r = _.Z.getChannel(n);
                (null == r ? void 0 : r.type) === w.d4z.GUILD_VOICE &&
                    (0, O.JL)(r, v.Z, j.Z) &&
                    (t.add(r.id), e.push(r));
            }
            for (let n of g.Z.getFrequentlyWithoutFetchingLatest())
                n instanceof h.Sf &&
                    n.type === w.d4z.GUILD_VOICE &&
                    !t.has(n.id) &&
                    (0, O.JL)(n, v.Z, j.Z) &&
                    (t.add(n.id), e.push(n));
            return e;
        }),
        E = i.useMemo(() => {
            let e = new Set(y.map((e) => e.id)),
                t = new Set(S.map((e) => e.id));
            return [
                ...S.toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, u.Z)(e.id))
                    .filter(C.lm),
                ...y
                    .filter((e) => !t.has(e.id))
                    .map((e) => (0, u.Z)(e.id))
                    .filter(C.lm),
            ];
        }, [y, S]),
        A = "" !== a ? m : E;
    return (0, r.jsxs)("div", {
        className: o()(Z.root, n),
        children: [
            (0, r.jsx)("div", {
                className: Z.searchBar,
                children: (0, r.jsx)(c.E1j, {
                    placeholder: T.intl.string(T.t["3jvv+6"]),
                    query: a,
                    onChange: (e) =>
                        l({
                            query: e,
                            resultTypes: [d.h8.VOICE_CHANNEL],
                        }),
                    onClear: () =>
                        l({
                            query: "",
                            resultTypes: [d.h8.VOICE_CHANNEL],
                        }),
                    autoFocus: !0,
                }),
            }),
            A.length > 0
                ? (0, r.jsx)(c.aVo, {
                      renderListHeader: function () {
                          return (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: T.intl.string(P.default.FZ9Fl7),
                          });
                      },
                      sections: [A.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: n } = e,
                              i = A[n];
                          return (0, r.jsx)(
                              I,
                              {
                                  result: i,
                                  onSelectChannel: t,
                              },
                              i.record.id,
                          );
                      },
                  })
                : (0, r.jsx)(N, {}),
        ],
    });
}
function N() {
    return (0, r.jsxs)("div", {
        className: Z.emptyState,
        children: [
            (0, r.jsx)(c._Ve, {
                className: Z.emptyIcon,
                size: "md",
                color: c.TVs.colors.ICON_MUTED,
            }),
            (0, r.jsx)(c.Text, {
                className: Z.emptyHeader,
                variant: "text-lg/medium",
                color: "header-primary",
                children: T.intl.string(P.default.sWGfr9),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                children: T.intl.string(P.default["nBRtt/"]),
            }),
        ],
    });
}
