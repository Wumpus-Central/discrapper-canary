n.d(t, { Z: () => T }), n(35282), n(539854), n(388685), n(387201), n(642613);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    c = n(212819),
    d = n(938078),
    u = n(318374),
    f = n(823385),
    m = n(601565),
    h = n(131704),
    p = n(601964),
    g = n(592125),
    x = n(580005),
    _ = n(984933),
    v = n(430824),
    j = n(496675),
    b = n(914010),
    S = n(594174),
    C = n(938475),
    y = n(823379),
    O = n(102172),
    w = n(981631),
    Z = n(637824),
    I = n(388032),
    P = n(603410);
function N(e) {
    let { result: t, onSelectChannel: n } = e,
        i = (0, o.e7)([v.Z], () => v.Z.getGuild(t.record.guild_id)),
        l = (0, o.Wu)([C.ZP, S.default], () =>
            C.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => S.default.getUser(e.user.id))
                .filter(y.lm),
        );
    return (0, r.jsxs)(a.P3F, {
        className: P.channelResult,
        onClick: () => n(t.record.id),
        children: [
            (0, r.jsxs)("div", {
                className: P.channelResultInfo,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: null != i ? (0, p.EB)(i, 32) : void 0,
                        className: P.guildIcon,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(a.Text, {
                                className: P.channelName,
                                variant: "text-md/medium",
                                color: "interactive-normal",
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
            (0, r.jsx)(u.Z, {
                users: l,
                maxUsers: 3,
                hideOverflowCount: !0,
            }),
        ],
    });
}
function T(e) {
    let { onSelectChannel: t, className: n } = e,
        { search: l, query: u, results: p } = (0, m.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        S = (0, o.Wu)([b.Z, _.ZP, g.Z, v.Z, j.Z], () => {
            let e = [],
                t = b.Z.getGuildId();
            if (null == t) return e;
            for (let n of _.ZP.getVocalChannelIds(t)) {
                let t = g.Z.getChannel(n);
                null != t && (0, O.JL)(t, v.Z, j.Z) && e.push(t);
            }
            return e;
        }),
        C = (0, o.Wu)([f.Z, g.Z, x.Z, v.Z, j.Z], () => {
            let e = [],
                t = new Set();
            for (let n of f.Z.getChannelHistory()) {
                let r = g.Z.getChannel(n);
                (null == r ? void 0 : r.type) === w.d4z.GUILD_VOICE &&
                    (0, O.JL)(r, v.Z, j.Z) &&
                    (t.add(r.id), e.push(r));
            }
            for (let n of x.Z.getFrequentlyWithoutFetchingLatest())
                n instanceof h.Sf &&
                    n.type === w.d4z.GUILD_VOICE &&
                    !t.has(n.id) &&
                    (0, O.JL)(n, v.Z, j.Z) &&
                    (t.add(n.id), e.push(n));
            return e;
        }),
        T = i.useMemo(() => {
            let e = new Set(C.map((e) => e.id)),
                t = new Set(S.map((e) => e.id));
            return [
                ...S.toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, d.Z)(e.id))
                    .filter(y.lm),
                ...C.filter((e) => !t.has(e.id))
                    .map((e) => (0, d.Z)(e.id))
                    .filter(y.lm),
            ];
        }, [C, S]),
        R = "" !== u ? p : T;
    return (0, r.jsxs)("div", {
        className: s()(P.root, n),
        children: [
            (0, r.jsx)("div", {
                className: P.searchBar,
                children: (0, r.jsx)(a.E1j, {
                    placeholder: I.intl.string(I.t["3jvv+/"]),
                    query: u,
                    onChange: (e) =>
                        l({
                            query: e,
                            resultTypes: [c.h8.VOICE_CHANNEL],
                        }),
                    onClear: () =>
                        l({
                            query: "",
                            resultTypes: [c.h8.VOICE_CHANNEL],
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
                              children: I.intl.string(Z.default.FZ9Fl5),
                          });
                      },
                      sections: [R.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: n } = e,
                              i = R[n];
                          return (0, r.jsx)(
                              N,
                              {
                                  result: i,
                                  onSelectChannel: t,
                              },
                              i.record.id,
                          );
                      },
                  })
                : (0, r.jsx)(E, {}),
        ],
    });
}
function E() {
    return (0, r.jsxs)("div", {
        className: P.emptyState,
        children: [
            (0, r.jsx)(a._Ve, {
                className: P.emptyIcon,
                size: "md",
                color: a.TVs.colors.ICON_MUTED,
            }),
            (0, r.jsx)(a.Text, {
                className: P.emptyHeader,
                variant: "text-lg/medium",
                color: "header-primary",
                children: I.intl.string(Z.default.sWGfr6),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                children: I.intl.string(Z.default.nBRtt7),
            }),
        ],
    });
}
