r.d(t, {
    A: () => T,
}),
    r(747238),
    r(321073),
    r(896048),
    r(638769),
    r(839272);
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(311907),
    o = r(342952),
    c = r(397927),
    d = r(629357),
    u = r(280157),
    f = r(174768),
    h = r(146793),
    p = r(95701),
    x = r(260509),
    m = r(734057),
    j = r(205761),
    g = r(808728),
    _ = r(71393),
    v = r(576705),
    b = r(967198),
    y = r(287809),
    S = r(607567),
    O = r(403362),
    A = r(279250),
    w = r(652215),
    C = r(191850),
    E = r(985018),
    I = r(374166);

function N(e) {
    let { result: t, onSelectChannel: r } = e,
        i = (0, a.bG)([_.A], () => _.A.getGuild(t.record.guild_id)),
        l = (0, a.yK)([S.Ay, y.default], () =>
            S.Ay.getVoiceStatesForChannel(t.record)
                .map((e) => y.default.getUser(e.user.id))
                .filter(O.Vq),
        );
    return (0, n.jsxs)(c.DUT, {
        className: I.p8,
        onClick: () => r(t.record.id),
        children: [
            (0, n.jsxs)("div", {
                className: I.nN,
                children: [
                    (0, n.jsx)("img", {
                        alt: "",
                        src: null != i ? (0, x.Iv)(i, 32) : void 0,
                        className: I.$f,
                    }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)(c.Text, {
                                className: I.HA,
                                variant: "text-md/medium",
                                color: "interactive-text-default",
                                children: [
                                    (0, n.jsx)(c.HKD, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    " ",
                                    t.record.name,
                                ],
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: null == i ? void 0 : i.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(o.A, {
                users: l,
                maxUsers: 3,
                hideOverflowCount: !0,
            }),
        ],
    });
}

function T(e) {
    let { onSelectChannel: t, className: r } = e,
        {
            search: l,
            query: o,
            results: x,
        } = (0, h.A)({
            searchOptions: {
                frecencyBoosters: !0,
            },
        }),
        y = (0, a.yK)([b.A, g.Ay, m.A, _.A, v.A], () => {
            let e = [],
                t = b.A.getGuildId();
            if (null == t) return e;
            for (let r of g.Ay.getVocalChannelIds(t)) {
                let t = m.A.getChannel(r);
                null != t && (0, A.vz)(t, _.A, v.A) && e.push(t);
            }
            return e;
        }),
        S = (0, a.yK)([f.A, m.A, j.A, _.A, v.A], () => {
            let e = [],
                t = new Set();
            for (let r of f.A.getChannelHistory()) {
                let n = m.A.getChannel(r);
                (null == n ? void 0 : n.type) === w.rbe.GUILD_VOICE &&
                    (0, A.vz)(n, _.A, v.A) &&
                    (t.add(n.id), e.push(n));
            }
            for (let r of j.A.getFrequentlyWithoutFetchingLatest())
                r instanceof p.YB &&
                    r.type === w.rbe.GUILD_VOICE &&
                    !t.has(r.id) &&
                    (0, A.vz)(r, _.A, v.A) &&
                    (t.add(r.id), e.push(r));
            return e;
        }),
        T = i.useMemo(() => {
            let e = new Set(S.map((e) => e.id)),
                t = new Set(y.map((e) => e.id));
            return [
                ...y
                    .toSorted((t, r) => (e.has(t.id) && !e.has(r.id) ? -1 : e.has(r.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, u.A)(e.id))
                    .filter(O.Vq),
                ...S.filter((e) => !t.has(e.id))
                    .map((e) => (0, u.A)(e.id))
                    .filter(O.Vq),
            ];
        }, [S, y]),
        P = "" !== o ? x : T;
    return (0, n.jsxs)("div", {
        className: s()(I.zr, r),
        children: [
            (0, n.jsx)("div", {
                className: I.ON,
                children: (0, n.jsx)(c.IWV, {
                    placeholder: E.intl.string(E.t["3jvv+6"]),
                    query: o,
                    onChange: (e) =>
                        l({
                            query: e,
                            resultTypes: [d.rD.VOICE_CHANNEL],
                        }),
                    onClear: () =>
                        l({
                            query: "",
                            resultTypes: [d.rD.VOICE_CHANNEL],
                        }),
                    autoFocus: !0,
                }),
            }),
            P.length > 0
                ? (0, n.jsx)(c.B8B, {
                      renderListHeader: function () {
                          return (0, n.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: E.intl.string(C.default.FZ9Fl7),
                          });
                      },
                      sections: [P.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: r } = e,
                              i = P[r];
                          return (0, n.jsx)(
                              N,
                              {
                                  result: i,
                                  onSelectChannel: t,
                              },
                              i.record.id,
                          );
                      },
                  })
                : (0, n.jsx)(R, {}),
        ],
    });
}

function R() {
    return (0, n.jsxs)("div", {
        className: I.p$,
        children: [
            (0, n.jsx)(c.$p$, {
                className: I.Dw,
                size: "md",
                color: c.LU0.colors.ICON_MUTED,
            }),
            (0, n.jsx)(c.Text, {
                className: I.jU,
                variant: "text-lg/medium",
                color: "text-strong",
                children: E.intl.string(C.default.sWGfr9),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: E.intl.string(C.default["nBRtt/"]),
            }),
        ],
    });
}
