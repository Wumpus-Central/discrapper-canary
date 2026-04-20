s.d(t, { A: () => T }), s(321073), s(839272);
var r = s(627968),
    i = s(64700),
    n = s(503698),
    l = s.n(n),
    a = s(311907),
    o = s(342952),
    c = s(397927),
    d = s(629357),
    u = s(280157),
    f = s(174768),
    h = s(146793),
    x = s(95701),
    p = s(260509),
    m = s(734057),
    _ = s(205761),
    g = s(808728),
    j = s(71393),
    v = s(576705),
    A = s(967198),
    S = s(287809),
    y = s(607567),
    C = s(403362),
    b = s(279250),
    w = s(652215),
    I = s(710787),
    E = s(985018),
    N = s(617335);
function O(e) {
    let { result: t, onSelectChannel: s } = e,
        i = (0, a.bG)([j.A], () => j.A.getGuild(t.record.guild_id)),
        n = (0, a.yK)([y.Ay, S.default], () =>
            y.Ay.getVoiceStatesForChannel(t.record)
                .map((e) => S.default.getUser(e.user.id))
                .filter(C.Vq),
        );
    return (0, r.jsxs)(c.DUT, {
        className: N.p8,
        onClick: () => s(t.record.id),
        children: [
            (0, r.jsxs)("div", {
                className: N.nN,
                children: [
                    (0, r.jsx)("img", { alt: "", src: null != i ? (0, p.Iv)(i, 32) : void 0, className: N.$f }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(c.Text, {
                                className: N.HA,
                                variant: "text-md/medium",
                                color: "interactive-text-default",
                                children: [
                                    (0, r.jsx)(c.HKD, { size: "xs", color: "currentColor" }),
                                    " ",
                                    t.record.name,
                                ],
                            }),
                            (0, r.jsx)(c.Text, { variant: "text-xs/medium", color: "text-muted", children: i?.name }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(o.A, { users: n, maxUsers: 3, hideOverflowCount: !0 }),
        ],
    });
}
function T(e) {
    let { onSelectChannel: t, className: s } = e,
        { search: n, query: o, results: p } = (0, h.A)({ searchOptions: { frecencyBoosters: !0 } }),
        S = (0, a.yK)([A.A, g.Ay, m.A, j.A, v.A], () => {
            let e = [],
                t = A.A.getGuildId();
            if (null == t) return e;
            for (let s of g.Ay.getVocalChannelIds(t)) {
                let t = m.A.getChannel(s);
                null != t && (0, b.vz)(t, j.A, v.A) && e.push(t);
            }
            return e;
        }),
        y = (0, a.yK)([f.A, m.A, _.A, j.A, v.A], () => {
            let e = [],
                t = new Set();
            for (let s of f.A.getChannelHistory()) {
                let r = m.A.getChannel(s);
                r?.type === w.rbe.GUILD_VOICE && (0, b.vz)(r, j.A, v.A) && (t.add(r.id), e.push(r));
            }
            for (let s of _.A.getFrequentlyWithoutFetchingLatest())
                s instanceof x.YB &&
                    s.type === w.rbe.GUILD_VOICE &&
                    !t.has(s.id) &&
                    (0, b.vz)(s, j.A, v.A) &&
                    (t.add(s.id), e.push(s));
            return e;
        }),
        T = i.useMemo(() => {
            let e = new Set(y.map((e) => e.id)),
                t = new Set(S.map((e) => e.id));
            return [
                ...S.toSorted((t, s) => (e.has(t.id) && !e.has(s.id) ? -1 : e.has(s.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, u.A)(e.id))
                    .filter(C.Vq),
                ...y
                    .filter((e) => !t.has(e.id))
                    .map((e) => (0, u.A)(e.id))
                    .filter(C.Vq),
            ];
        }, [y, S]),
        M = "" !== o ? p : T;
    return (0, r.jsxs)("div", {
        className: l()(N.zr, s),
        children: [
            (0, r.jsx)("div", {
                className: N.ON,
                children: (0, r.jsx)(c.IWV, {
                    placeholder: E.intl.string(E.t["3jvv+6"]),
                    query: o,
                    onChange: (e) => n({ query: e, resultTypes: [d.rD.VOICE_CHANNEL] }),
                    onClear: () => n({ query: "", resultTypes: [d.rD.VOICE_CHANNEL] }),
                    autoFocus: !0,
                }),
            }),
            M.length > 0
                ? (0, r.jsx)(c.B8B, {
                      renderListHeader: function () {
                          return (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: E.intl.string(I.default.FZ9Fl7),
                          });
                      },
                      sections: [M.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: s } = e,
                              i = M[s];
                          return (0, r.jsx)(O, { result: i, onSelectChannel: t }, i.record.id);
                      },
                  })
                : (0, r.jsx)(R, {}),
        ],
    });
}
function R() {
    return (0, r.jsxs)("div", {
        className: N.p$,
        children: [
            (0, r.jsx)(c.$p$, { className: N.Dw, size: "md", color: c.LU0.colors.ICON_MUTED }),
            (0, r.jsx)(c.Text, {
                className: N.jU,
                variant: "text-lg/medium",
                color: "text-strong",
                children: E.intl.string(I.default.sWGfr9),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: E.intl.string(I.default["nBRtt/"]),
            }),
        ],
    });
}
