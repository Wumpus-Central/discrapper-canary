s.d(t, { A: () => L }), s(321073), s(839272);
var i = s(627968),
    r = s(64700),
    n = s(503698),
    l = s.n(n),
    a = s(311907),
    o = s(342952),
    c = s(939249),
    d = s(834730),
    u = s(983851),
    f = s(892547),
    h = s(475825),
    x = s(7689),
    p = s(827734),
    _ = s(629357),
    m = s(280157),
    g = s(174768),
    j = s(146793),
    v = s(95701),
    A = s(260509),
    C = s(734057),
    S = s(205761),
    y = s(808728),
    b = s(71393),
    w = s(576705),
    E = s(967198),
    I = s(287809),
    N = s(607567),
    O = s(403362),
    R = s(279250),
    T = s(652215),
    M = s(710787),
    D = s(985018),
    G = s(617335);
function U(e) {
    let { result: t, onSelectChannel: s } = e,
        r = (0, a.bG)([b.A], () => b.A.getGuild(t.record.guild_id)),
        n = (0, a.yK)([N.Ay, I.default], () =>
            N.Ay.getVoiceStatesForChannel(t.record)
                .map((e) => I.default.getUser(e.user.id))
                .filter(O.Vq),
        );
    return (0, i.jsxs)(c.D, {
        className: G.p8,
        onClick: () => s(t.record.id),
        children: [
            (0, i.jsxs)("div", {
                className: G.nN,
                children: [
                    (0, i.jsx)("img", { alt: "", src: null != r ? (0, A.Iv)(r, 32) : void 0, className: G.$f }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(d.E, {
                                className: G.HA,
                                variant: "text-md/medium",
                                color: "interactive-text-default",
                                children: [(0, i.jsx)(u.H, { size: "xs", color: "currentColor" }), " ", t.record.name],
                            }),
                            (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-muted", children: r?.name }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(o.A, { users: n, maxUsers: 3, hideOverflowCount: !0 }),
        ],
    });
}
function L(e) {
    let { onSelectChannel: t, className: s } = e,
        { search: n, query: o, results: c } = (0, j.A)({ searchOptions: { frecencyBoosters: !0 } }),
        u = (0, a.yK)([E.A, y.Ay, C.A, b.A, w.A], () => {
            let e = [],
                t = E.A.getGuildId();
            if (null == t) return e;
            for (let s of y.Ay.getVocalChannelIds(t)) {
                let t = C.A.getChannel(s);
                null != t && (0, R.vz)(t, b.A, w.A) && e.push(t);
            }
            return e;
        }),
        x = (0, a.yK)([g.A, C.A, S.A, b.A, w.A], () => {
            let e = [],
                t = new Set();
            for (let s of g.A.getChannelHistory()) {
                let i = C.A.getChannel(s);
                i?.type === T.rbe.GUILD_VOICE && (0, R.vz)(i, b.A, w.A) && (t.add(i.id), e.push(i));
            }
            for (let s of S.A.getFrequentlyWithoutFetchingLatest())
                s instanceof v.YB &&
                    s.type === T.rbe.GUILD_VOICE &&
                    !t.has(s.id) &&
                    (0, R.vz)(s, b.A, w.A) &&
                    (t.add(s.id), e.push(s));
            return e;
        }),
        p = r.useMemo(() => {
            let e = new Set(x.map((e) => e.id)),
                t = new Set(u.map((e) => e.id));
            return [
                ...u
                    .toSorted((t, s) => (e.has(t.id) && !e.has(s.id) ? -1 : e.has(s.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, m.A)(e.id))
                    .filter(O.Vq),
                ...x
                    .filter((e) => !t.has(e.id))
                    .map((e) => (0, m.A)(e.id))
                    .filter(O.Vq),
            ];
        }, [x, u]),
        A = "" !== o ? c : p;
    return (0, i.jsxs)("div", {
        className: l()(G.zr, s),
        children: [
            (0, i.jsx)("div", {
                className: G.ON,
                children: (0, i.jsx)(f.I, {
                    placeholder: D.intl.string(D.t["3jvv+6"]),
                    query: o,
                    onChange: (e) => n({ query: e, resultTypes: [_.rD.VOICE_CHANNEL] }),
                    onClear: () => n({ query: "", resultTypes: [_.rD.VOICE_CHANNEL] }),
                    autoFocus: !0,
                }),
            }),
            A.length > 0
                ? (0, i.jsx)(h.OZ, {
                      renderListHeader: function () {
                          return (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: D.intl.string(M.default.FZ9Fl7),
                          });
                      },
                      sections: [A.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: s } = e,
                              r = A[s];
                          return (0, i.jsx)(U, { result: r, onSelectChannel: t }, r.record.id);
                      },
                  })
                : (0, i.jsx)(P, {}),
        ],
    });
}
function P() {
    return (0, i.jsxs)("div", {
        className: G.p$,
        children: [
            (0, i.jsx)(x.$, { className: G.Dw, size: "md", color: p.A.colors.ICON_MUTED }),
            (0, i.jsx)(d.E, {
                className: G.jU,
                variant: "text-lg/medium",
                color: "text-strong",
                children: D.intl.string(M.default.sWGfr9),
            }),
            (0, i.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: D.intl.string(M.default["nBRtt/"]),
            }),
        ],
    });
}
