n.d(t, { Z: () => E }), n(35282), n(539854), n(388685), n(387201), n(642613);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    a = n(481060),
    c = n(212819),
    d = n(938078),
    u = n(318374),
    f = n(823385),
    m = n(601565),
    h = n(131704),
    p = n(592125),
    x = n(580005),
    g = n(984933),
    _ = n(430824),
    v = n(496675),
    j = n(914010),
    S = n(594174),
    b = n(938475),
    C = n(823379),
    y = n(102172),
    O = n(981631),
    Z = n(843874),
    I = n(388032),
    w = n(152965);
function N(e) {
    let { result: t, onSelectChannel: n } = e,
        l = (0, o.e7)([_.Z], () => _.Z.getGuild(t.record.guild_id)),
        i = (0, o.Wu)([b.ZP, S.default], () =>
            b.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => S.default.getUser(e.user.id))
                .filter(C.lm)
        );
    return (0, r.jsxs)(a.P3F, {
        className: w.channelResult,
        onClick: () => n(t.record.id),
        children: [
            (0, r.jsxs)('div', {
                className: w.channelResultInfo,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: null == l ? void 0 : l.getIconURL(32),
                        className: w.guildIcon
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(a.Text, {
                                className: w.channelName,
                                variant: 'text-md/medium',
                                color: 'interactive-normal',
                                children: [
                                    (0, r.jsx)(a.gj8, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    ' ',
                                    t.record.name
                                ]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: null == l ? void 0 : l.name
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.Z, {
                users: i,
                maxUsers: 4
            })
        ]
    });
}
function E(e) {
    let { onSelectChannel: t, className: n } = e,
        { search: i, query: u, results: S } = (0, m.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        b = (0, o.Wu)([j.Z, g.ZP, p.Z, _.Z, v.Z], () => {
            let e = [],
                t = j.Z.getGuildId();
            if (null == t) return e;
            for (let n of g.ZP.getVocalChannelIds(t)) {
                let t = p.Z.getChannel(n);
                null != t && (0, y.JL)(t, _.Z, v.Z) && e.push(t);
            }
            return e;
        }),
        E = (0, o.Wu)([f.Z, p.Z, x.Z, _.Z, v.Z], () => {
            let e = [],
                t = new Set();
            for (let n of f.Z.getChannelHistory()) {
                let r = p.Z.getChannel(n);
                (null == r ? void 0 : r.type) === O.d4z.GUILD_VOICE && (0, y.JL)(r, _.Z, v.Z) && (t.add(r.id), e.push(r));
            }
            for (let n of x.Z.getFrequentlyWithoutFetchingLatest()) n instanceof h.Sf && n.type === O.d4z.GUILD_VOICE && !t.has(n.id) && (0, y.JL)(n, _.Z, v.Z) && (t.add(n.id), e.push(n));
            return e;
        }),
        P = l.useMemo(() => {
            let e = new Set(E.map((e) => e.id)),
                t = new Set(b.map((e) => e.id));
            return [
                ...b
                    .toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, d.Z)(e.id))
                    .filter(C.lm),
                ...E.filter((e) => !t.has(e.id))
                    .map((e) => (0, d.Z)(e.id))
                    .filter(C.lm)
            ];
        }, [E, b]),
        R = '' !== u ? S : P;
    return (0, r.jsxs)('div', {
        className: s()(w.root, n),
        children: [
            (0, r.jsx)(a.E1j, {
                className: w.searchBar,
                placeholder: I.intl.string(I.t['3jvv+/']),
                query: u,
                size: a.E1j.Sizes.MEDIUM,
                onChange: (e) =>
                    i({
                        query: e,
                        resultTypes: [c.h8.VOICE_CHANNEL]
                    }),
                onClear: () =>
                    i({
                        query: '',
                        resultTypes: [c.h8.VOICE_CHANNEL]
                    }),
                autoFocus: !0
            }),
            R.length > 0
                ? (0, r.jsx)(a.aVo, {
                      renderListHeader: function () {
                          return (0, r.jsx)(a.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: I.intl.string(Z.default.FZ9Fl5)
                          });
                      },
                      sections: [R.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: n } = e,
                              l = R[n];
                          return (0, r.jsx)(
                              N,
                              {
                                  result: l,
                                  onSelectChannel: t
                              },
                              l.record.id
                          );
                      }
                  })
                : (0, r.jsx)(T, {})
        ]
    });
}
function T() {
    return (0, r.jsxs)('div', {
        className: w.emptyState,
        children: [
            (0, r.jsx)(a._Ve, {
                className: w.emptyIcon,
                size: 'md',
                color: a.TVs.colors.ICON_MUTED
            }),
            (0, r.jsx)(a.Text, {
                className: w.emptyHeader,
                variant: 'text-lg/medium',
                color: 'header-primary',
                children: I.intl.string(Z.default.sWGfr6)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                children: I.intl.string(Z.default.nBRtt7)
            })
        ]
    });
}
