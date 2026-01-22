r.d(t, {
    A: () => T,
}),
    r(747238),
    r(321073),
    r(896048),
    r(638769),
    r(839272);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    i = r.n(s),
    a = r(311907),
    c = r(342952),
    o = r(397927),
    d = r(629357),
    f = r(280157),
    u = r(174768),
    h = r(146793),
    p = r(95701),
    x = r(260509),
    j = r(734057),
    m = r(205761),
    g = r(808728),
    b = r(71393),
    v = r(576705),
    y = r(967198),
    S = r(287809),
    A = r(607567),
    _ = r(403362),
    O = r(279250),
    C = r(652215),
    w = r(191850),
    E = r(985018),
    N = r(374166);

function I(e) {
    let { result: t, onSelectChannel: r } = e,
        l = (0, a.bG)([b.A], () => b.A.getGuild(t.record.guild_id)),
        s = (0, a.yK)([A.Ay, S.default], () =>
            A.Ay.getVoiceStatesForChannel(t.record)
                .map((e) => S.default.getUser(e.user.id))
                .filter(_.Vq),
        );
    return (0, n.jsxs)(o.DUT, {
        className: N.p8,
        onClick: () => r(t.record.id),
        children: [
            (0, n.jsxs)("div", {
                className: N.nN,
                children: [
                    (0, n.jsx)("img", {
                        alt: "",
                        src: null != l ? (0, x.Iv)(l, 32) : void 0,
                        className: N.$f,
                    }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)(o.Text, {
                                className: N.HA,
                                variant: "text-md/medium",
                                color: "interactive-text-default",
                                children: [
                                    (0, n.jsx)(o.HKD, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    " ",
                                    t.record.name,
                                ],
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: null == l ? void 0 : l.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.A, {
                users: s,
                maxUsers: 3,
                hideOverflowCount: !0,
            }),
        ],
    });
}

function T(e) {
    let { onSelectChannel: t, className: r } = e,
        {
            search: s,
            query: c,
            results: x,
        } = (0, h.A)({
            searchOptions: {
                frecencyBoosters: !0,
            },
        }),
        S = (0, a.yK)([y.A, g.Ay, j.A, b.A, v.A], () => {
            let e = [],
                t = y.A.getGuildId();
            if (null == t) return e;
            for (let r of g.Ay.getVocalChannelIds(t)) {
                let t = j.A.getChannel(r);
                null != t && (0, O.vz)(t, b.A, v.A) && e.push(t);
            }
            return e;
        }),
        A = (0, a.yK)([u.A, j.A, m.A, b.A, v.A], () => {
            let e = [],
                t = new Set();
            for (let r of u.A.getChannelHistory()) {
                let n = j.A.getChannel(r);
                (null == n ? void 0 : n.type) === C.rbe.GUILD_VOICE &&
                    (0, O.vz)(n, b.A, v.A) &&
                    (t.add(n.id), e.push(n));
            }
            for (let r of m.A.getFrequentlyWithoutFetchingLatest())
                r instanceof p.YB &&
                    r.type === C.rbe.GUILD_VOICE &&
                    !t.has(r.id) &&
                    (0, O.vz)(r, b.A, v.A) &&
                    (t.add(r.id), e.push(r));
            return e;
        }),
        T = l.useMemo(() => {
            let e = new Set(A.map((e) => e.id)),
                t = new Set(S.map((e) => e.id));
            return [
                ...S.toSorted((t, r) => (e.has(t.id) && !e.has(r.id) ? -1 : e.has(r.id) && !e.has(t.id) ? 1 : 0))
                    .map((e) => (0, f.A)(e.id))
                    .filter(_.Vq),
                ...A.filter((e) => !t.has(e.id))
                    .map((e) => (0, f.A)(e.id))
                    .filter(_.Vq),
            ];
        }, [A, S]),
        P = "" !== c ? x : T;
    return (0, n.jsxs)("div", {
        className: i()(N.zr, r),
        children: [
            (0, n.jsx)("div", {
                className: N.ON,
                children: (0, n.jsx)(o.IWV, {
                    placeholder: E.intl.string(E.t["3jvv+6"]),
                    query: c,
                    onChange: (e) =>
                        s({
                            query: e,
                            resultTypes: [d.rD.VOICE_CHANNEL],
                        }),
                    onClear: () =>
                        s({
                            query: "",
                            resultTypes: [d.rD.VOICE_CHANNEL],
                        }),
                    autoFocus: !0,
                }),
            }),
            P.length > 0
                ? (0, n.jsx)(o.B8B, {
                      renderListHeader: function () {
                          return (0, n.jsx)(o.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: E.intl.string(w.default.FZ9Fl7),
                          });
                      },
                      sections: [P.length],
                      sectionHeight: 0,
                      rowHeight: 48,
                      renderRow: function (e) {
                          let { rowIndex: r } = e,
                              l = P[r];
                          return (0, n.jsx)(
                              I,
                              {
                                  result: l,
                                  onSelectChannel: t,
                              },
                              l.record.id,
                          );
                      },
                  })
                : (0, n.jsx)(R, {}),
        ],
    });
}

function R() {
    return (0, n.jsxs)("div", {
        className: N.p$,
        children: [
            (0, n.jsx)(o.$p$, {
                className: N.Dw,
                size: "md",
                color: o.LU0.colors.ICON_MUTED,
            }),
            (0, n.jsx)(o.Text, {
                className: N.jU,
                variant: "text-lg/medium",
                color: "text-strong",
                children: E.intl.string(w.default.sWGfr9),
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: E.intl.string(w.default["nBRtt/"]),
            }),
        ],
    });
}
