n.d(t, { Z: () => w }), n(301563), n(653041), n(47120), n(308318), n(230036);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(212819),
    a = n(938078),
    c = n(318374),
    d = n(823385),
    u = n(601565),
    f = n(131704),
    m = n(592125),
    h = n(580005),
    x = n(984933),
    p = n(430824),
    g = n(496675),
    _ = n(914010),
    j = n(594174),
    v = n(938475),
    b = n(823379),
    S = n(102172),
    C = n(981631),
    N = n(843874),
    y = n(388032),
    Z = n(152965);
function I(e) {
    let { result: t, onSelectChannel: n } = e,
        l = (0, i.e7)([p.Z], () => p.Z.getGuild(t.record.guild_id)),
        o = (0, i.Wu)([v.ZP, j.default], () =>
            v.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => j.default.getUser(e.user.id))
                .filter(b.lm)
        );
    return (0, r.jsxs)(s.P3F, {
        className: Z.channelResult,
        onClick: () => n(t.record.id),
        children: [
            (0, r.jsxs)('div', {
                className: Z.channelResultInfo,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: null == l ? void 0 : l.getIconURL(32),
                        className: Z.guildIcon
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(s.Text, {
                                className: Z.channelName,
                                variant: 'text-md/medium',
                                color: 'interactive-normal',
                                children: [
                                    (0, r.jsx)(s.gj8, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    ' ',
                                    t.record.name
                                ]
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: null == l ? void 0 : l.name
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                users: o,
                maxUsers: 4
            })
        ]
    });
}
function w(e) {
    let { onSelectChannel: t } = e,
        { search: n, query: c, results: j } = (0, u.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        v = (0, i.Wu)([_.Z, x.ZP, m.Z, p.Z, g.Z], () => {
            let e = [],
                t = _.Z.getGuildId();
            if (null == t) return e;
            for (let n of x.ZP.getVocalChannelIds(t)) {
                let t = m.Z.getChannel(n);
                null != t && (0, S.JL)(t, p.Z, g.Z) && e.push(t);
            }
            return e;
        }),
        w = (0, i.Wu)([d.Z, m.Z, h.Z, p.Z, g.Z], () => {
            let e = [],
                t = new Set();
            for (let n of d.Z.getChannelHistory()) {
                let r = m.Z.getChannel(n);
                (null == r ? void 0 : r.type) === C.d4z.GUILD_VOICE && (0, S.JL)(r, p.Z, g.Z) && (t.add(r.id), e.push(r));
            }
            for (let n of h.Z.getFrequentlyWithoutFetchingLatest()) n instanceof f.Sf && n.type === C.d4z.GUILD_VOICE && !t.has(n.id) && (0, S.JL)(n, p.Z, g.Z) && (t.add(n.id), e.push(n));
            return e;
        }),
        T = l.useMemo(() => {
            let e = new Set(w.map((e) => e.id)),
                t = new Set(v.map((e) => e.id));
            return [
                ...v
                    .toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, a.Z)(e.id))
                    .filter(b.lm),
                ...w
                    .filter((e) => !t.has(e.id))
                    .map((e) => (0, a.Z)(e.id))
                    .filter(b.lm)
            ];
        }, [w, v]),
        E = '' !== c ? j : T;
    return (0, r.jsxs)('div', {
        className: Z.root,
        children: [
            (0, r.jsx)(s.E1j, {
                className: Z.searchBar,
                placeholder: y.NW.string(y.t['3jvv+/']),
                query: c,
                size: s.E1j.Sizes.MEDIUM,
                onChange: (e) =>
                    n({
                        query: e,
                        resultTypes: [o.h8.VOICE_CHANNEL]
                    }),
                onClear: () =>
                    n({
                        query: '',
                        resultTypes: [o.h8.VOICE_CHANNEL]
                    }),
                autoFocus: !0
            }),
            E.length > 0
                ? (0, r.jsx)(s.aVo, {
                      renderListHeader: function () {
                          return (0, r.jsx)(s.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: y.NW.string(N.Z.FZ9Fl5)
                          });
                      },
                      sections: [E.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: n } = e,
                              l = E[n];
                          return (0, r.jsx)(
                              I,
                              {
                                  result: l,
                                  onSelectChannel: t
                              },
                              l.record.id
                          );
                      }
                  })
                : (0, r.jsx)(O, {})
        ]
    });
}
function O() {
    return (0, r.jsxs)('div', {
        className: Z.emptyState,
        children: [
            (0, r.jsx)(s._Ve, {
                className: Z.emptyIcon,
                size: 'md',
                color: s.TVs.colors.ICON_MUTED
            }),
            (0, r.jsx)(s.Text, {
                className: Z.emptyHeader,
                variant: 'text-lg/medium',
                color: 'header-primary',
                children: y.NW.string(N.Z.sWGfr6)
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                children: y.NW.string(N.Z.nBRtt7)
            })
        ]
    });
}
