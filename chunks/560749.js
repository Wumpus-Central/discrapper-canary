n.d(t, { Z: () => P }), n(47120), n(301563), n(653041), n(308318), n(230036);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(835473),
    a = n(212819),
    c = n(938078),
    d = n(318374),
    u = n(925329),
    f = n(823385),
    h = n(601565),
    m = n(131704),
    p = n(592125),
    x = n(580005),
    g = n(984933),
    _ = n(430824),
    v = n(496675),
    j = n(914010),
    b = n(594174),
    C = n(938475),
    S = n(823379),
    N = n(102172),
    y = n(615161),
    Z = n(981631),
    w = n(388032),
    O = n(358476);
function I(e) {
    let { result: t, onSelectChannel: n } = e,
        l = (0, i.e7)([_.Z], () => _.Z.getGuild(t.record.guild_id)),
        o = (0, i.Wu)([C.ZP, b.default], () =>
            C.ZP.getVoiceStatesForChannel(t.record)
                .map((e) => b.default.getUser(e.user.id))
                .filter(S.lm)
        );
    return (0, r.jsxs)(s.P3F, {
        className: O.channelResult,
        onClick: () => n(t.record.id),
        children: [
            (0, r.jsxs)('div', {
                className: O.channelResultInfo,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: null == l ? void 0 : l.getIconURL(32),
                        className: O.guildIcon
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(s.Text, {
                                className: O.channelName,
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
            (0, r.jsx)(d.Z, {
                users: o,
                maxUsers: 4
            })
        ]
    });
}
function P(e) {
    var t, n;
    let { onSelectChannel: d } = e,
        [b, C] = (0, y.E_)(),
        P = (0, o.q)(null === (t = b.sourceApplication) || void 0 === t ? void 0 : t.id),
        { search: T, query: E, results: R } = (0, h.Z)({ searchOptions: { frecencyBoosters: !0 } }),
        W = (0, i.Wu)([j.Z, g.ZP, p.Z, _.Z, v.Z], () => {
            let e = [],
                t = j.Z.getGuildId();
            if (null == t) return e;
            for (let n of g.ZP.getVocalChannelIds(t)) {
                let t = p.Z.getChannel(n);
                null != t && (0, N.JL)(t, _.Z, v.Z) && e.push(t);
            }
            return e;
        }),
        A = (0, i.Wu)([f.Z, p.Z, x.Z, _.Z, v.Z], () => {
            let e = [],
                t = new Set();
            for (let n of f.Z.getChannelHistory()) {
                let r = p.Z.getChannel(n);
                (null == r ? void 0 : r.type) === Z.d4z.GUILD_VOICE && (0, N.JL)(r, _.Z, v.Z) && (t.add(r.id), e.push(r));
            }
            for (let n of x.Z.getFrequentlyWithoutFetchingLatest()) n instanceof m.Sf && n.type === Z.d4z.GUILD_VOICE && !t.has(n.id) && (0, N.JL)(n, _.Z, v.Z) && (t.add(n.id), e.push(n));
            return e;
        }),
        k = l.useMemo(() => {
            let e = new Set(A.map((e) => e.id)),
                t = new Set(W.map((e) => e.id));
            return [
                ...W.toSorted((t, n) => (e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, c.Z)(e.id))
                    .filter(S.lm),
                ...A.filter((e) => !t.has(e.id))
                    .map((e) => (0, c.Z)(e.id))
                    .filter(S.lm)
            ];
        }, [A, W]),
        M = '' !== E ? R : k;
    return (0, r.jsxs)('div', {
        className: O.root,
        children: [
            (0, r.jsxs)('div', {
                className: O.header,
                children: [
                    (0, r.jsx)(u.Z, {
                        className: O.sourceIcon,
                        game: P
                    }),
                    (0, r.jsxs)('div', {
                        className: O.headingGroup,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'text-lg/semibold',
                                color: 'header-primary',
                                children: w.NW.string(w.t.WEYae3)
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: null === (n = b.sourceApplication) || void 0 === n ? void 0 : n.name
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(s.E1j, {
                className: O.searchBar,
                placeholder: w.NW.string(w.t['3jvv+/']),
                query: E,
                size: s.E1j.Sizes.MEDIUM,
                onChange: (e) =>
                    T({
                        query: e,
                        resultTypes: [a.h8.VOICE_CHANNEL]
                    }),
                onClear: () =>
                    T({
                        query: '',
                        resultTypes: [a.h8.VOICE_CHANNEL]
                    }),
                autoFocus: !0
            }),
            (0, r.jsx)(s.aVo, {
                renderListHeader: function () {
                    return (0, r.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: 'Recent Channels'
                    });
                },
                sections: [M.length],
                sectionHeight: 0,
                rowHeight: 48,
                renderRow: function (e) {
                    let { rowIndex: t } = e,
                        n = M[t];
                    return (0, r.jsx)(
                        I,
                        {
                            result: n,
                            onSelectChannel: d
                        },
                        n.record.id
                    );
                }
            })
        ]
    });
}
