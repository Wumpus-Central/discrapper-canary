n.d(t, { Z: () => T }), n(35282), n(539854), n(388685), n(387201), n(642613);
var r = n(255367),
    i = n(73800),
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
    p = n(592125),
    x = n(580005),
    g = n(984933),
    _ = n(430824),
    v = n(496675),
    j = n(914010),
    b = n(594174),
    S = n(938475),
    C = n(823379),
    y = n(102172),
    O = n(981631),
    Z = n(676462),
    I = n(388032),
    w = n(152965);
function N(e) {
    let { result: t, onSelectChannel: n } = e,
        i = (0, o.e7)([_.Z], () => _.Z.getGuild(t.record.guild_id)),
        l = (0, o.Wu)([S.ZP, b.default], () =>
            S.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => b.default.getUser(e.user.id))
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
                        src: null == i ? void 0 : i.getIconURL(32),
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
                                children: null == i ? void 0 : i.name
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.Z, {
                users: l,
                maxUsers: 4
            })
        ]
    });
}
function T(e) {
    let { onSelectChannel: t, className: n } = e,
        { search: l, query: u, results: b } = (0, m.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        S = (0, o.Wu)([j.Z, g.ZP, p.Z, _.Z, v.Z], () => {
            let e = [],
                t = j.Z.getGuildId();
            if (null == t) return e;
            for (let n of g.ZP.getVocalChannelIds(t)) {
                let t = p.Z.getChannel(n);
                null != t && (0, y.JL)(t, _.Z, v.Z) && e.push(t);
            }
            return e;
        }),
        T = (0, o.Wu)([f.Z, p.Z, x.Z, _.Z, v.Z], () => {
            let e = [],
                t = new Set();
            for (let n of f.Z.getChannelHistory()) {
                let r = p.Z.getChannel(n);
                (null == r ? void 0 : r.type) === O.d4z.GUILD_VOICE && (0, y.JL)(r, _.Z, v.Z) && (t.add(r.id), e.push(r));
            }
            for (let n of x.Z.getFrequentlyWithoutFetchingLatest()) n instanceof h.Sf && n.type === O.d4z.GUILD_VOICE && !t.has(n.id) && (0, y.JL)(n, _.Z, v.Z) && (t.add(n.id), e.push(n));
            return e;
        }),
        P = i.useMemo(() => {
            let e = new Set(T.map((e) => e.id)),
                t = new Set(S.map((e) => e.id));
            return [
                ...S.toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, d.Z)(e.id))
                    .filter(C.lm),
                ...T.filter((e) => !t.has(e.id))
                    .map((e) => (0, d.Z)(e.id))
                    .filter(C.lm)
            ];
        }, [T, S]),
        R = '' !== u ? b : P;
    return (0, r.jsxs)('div', {
        className: s()(w.root, n),
        children: [
            (0, r.jsx)(a.E1j, {
                className: w.searchBar,
                placeholder: I.intl.string(I.t['3jvv+/']),
                query: u,
                size: a.E1j.Sizes.MEDIUM,
                onChange: (e) =>
                    l({
                        query: e,
                        resultTypes: [c.h8.VOICE_CHANNEL]
                    }),
                onClear: () =>
                    l({
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
                              i = R[n];
                          return (0, r.jsx)(
                              N,
                              {
                                  result: i,
                                  onSelectChannel: t
                              },
                              i.record.id
                          );
                      }
                  })
                : (0, r.jsx)(E, {})
        ]
    });
}
function E() {
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
