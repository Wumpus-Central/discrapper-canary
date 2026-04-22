n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(33851),
    o = n.n(a),
    d = n(989349),
    c = n.n(d),
    u = n(311907),
    m = n(827734),
    g = n(27192),
    h = n(862482),
    x = n(695366),
    _ = n(285796),
    p = n(534514),
    A = n(834730),
    E = n(289873),
    f = n(192308),
    j = n(47167),
    N = n(808728),
    I = n(994500),
    C = n(287809),
    b = n(975571),
    v = n(661191),
    S = n(997509),
    T = n(834720),
    y = n(652215),
    R = n(985018),
    L = n(672419);
let D = (e) => {
    let {
            name: t,
            failingName: n,
            description: l,
            checked: s,
            pending: r,
            pendingDescription: a,
            failingDescription: o,
        } = e,
        d = t,
        c = null,
        u = null;
    return (
        r
            ? ((c = (0, i.jsx)(x.E, {
                  size: "custom",
                  color: m.A.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20,
              })),
              (u = null != a ? a : l))
            : s
              ? ((c = (0, i.jsx)(g.Kj, { readOnly: !0, shape: g.DO.ROUND, size: 20, type: g.Or.INVERTED, value: !0 })),
                (u = l))
              : ((c = (0, i.jsx)(_.a, {
                    size: "custom",
                    color: m.A.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20,
                })),
                (d = null != n ? n : t),
                (u = null != o ? o : l)),
        (0, i.jsxs)("div", {
            className: L.gd,
            children: [
                (0, i.jsx)("div", { className: L.aV, children: c }),
                (0, i.jsxs)("div", {
                    className: L.QL,
                    children: [
                        (0, i.jsx)(p.D, { variant: "heading-md/semibold", children: d }),
                        (0, i.jsx)(A.E, { color: "text-muted", variant: "text-sm/normal", children: u }),
                    ],
                }),
            ],
        })
    );
};
function O(e, t) {
    return o()(
        e?.map((e) => {
            let [t, n] = e;
            return t?.id;
        }),
        t?.map((e) => {
            let [t, n] = e;
            return t?.id;
        }),
    );
}
let G = (e) => {
    let t,
        { guild: s, guildId: a, className: o, headerContent: d, failedItemsOnly: m = !1 } = e,
        [g, x] = (0, u.yK)([T.Ay], () => [T.Ay.getDiscoveryChecklist(a), T.Ay.isLoading()], [a]),
        { nsfwProperties: _ } = g ?? {},
        G = s?.features.has(y.GuildFeatures.PARTNERED),
        M = _?.channels_banned_keywords,
        k = (0, u.bG)(
            [N.Ay],
            () => {
                if (null == M) return [];
                let e = (N.Ay.getChannels(s.id) ?? {})[N.I6] ?? [],
                    t = e?.map((e) => e.channel).reduce((e, t) => ({ ...e, [t.id]: t }), {}) ?? {};
                return null == M
                    ? []
                    : Object.entries(M).map((e) => {
                          let [n, i] = e;
                          return [t[n], i];
                      });
            },
            [s.id, M],
            O,
        );
    if (x || null == g)
        return (0, i.jsxs)("div", {
            className: r()(L.kL, L.NQ, o),
            children: [
                (0, i.jsx)(p.D, {
                    className: L.KQ,
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: R.intl.string(R.t.e1gm0f),
                }),
                (0, i.jsx)(E.y, { className: L.__invalid_spinner }),
            ],
        });
    let U = G ? R.t["WH+1Yz"] : R.t.a4MYDO,
        w = [
            {
                name: R.intl.string(R.t.yvk9py),
                failingName: R.intl.string(R.t["IY/UT/"]),
                description: R.intl.string(R.t.hSLSM6),
                failingDescription: R.intl.format(R.t.odsGgy, {
                    termsURL: y.X7G.TERMS,
                    guidelinesURL: b.A.getArticleURL(y.MVz.PUBLIC_GUILD_GUILDLINES),
                }),
                checked: g?.safeEnvironment,
            },
            {
                name: R.intl.formatToPlainString(R.t.NYovA2, { minMembers: g.minimumGuildSize }),
                failingName: R.intl.formatToPlainString(R.t.wvJwYs, {
                    minMembers: g.minimumGuildSize.toLocaleString(),
                }),
                description: null,
                failingDescription: R.intl.format(U, { minMembers: g.minimumGuildSize.toLocaleString() }),
                checked: g?.size,
            },
            {
                name: R.intl.string(R.t.PtxOCK),
                failingName: R.intl.string(R.t.JPF5IL),
                description: R.intl.formatToPlainString(R.t.VT0bQJ, {
                    minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
                }),
                failingDescription: R.intl.formatToPlainString(R.t.jYwM1Y, {
                    minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
                    passDate: c()(v.default.extractTimestamp(a)).add(g.minimumGuildAge, "days").format("LL"),
                }),
                checked: g?.age,
            },
            {
                name: g?.healthScorePending ? R.intl.string(R.t.G77ud0) : R.intl.string(R.t["95nW0H"]),
                failingName: R.intl.string(R.t["+GHxPy"]),
                description: R.intl.string(R.t.rTWJwX),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(A.E, {
                            color: "text-muted",
                            className: L.t,
                            variant: "text-sm/normal",
                            children: R.intl.string(R.t.LjqS0G),
                        }),
                        g?.engagementHealthy
                            ? null
                            : (0, i.jsx)(A.E, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: R.intl.string(R.t.X8Lt77),
                              }),
                        g?.retentionHealthy
                            ? null
                            : (0, i.jsx)(A.E, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: R.intl.string(R.t.esdy89),
                              }),
                        (() => {
                            if (null == g || null == g.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = g,
                                {
                                    avg_nonnew_participators: i,
                                    avg_nonnew_communicators: l,
                                    perc_ret_w1_intentful: s,
                                } = n;
                            return (!e && null != s) || (!t && null != i && null != l);
                        })() &&
                            (0, i.jsx)(h.$n, {
                                className: L.zh,
                                look: h.$n.Looks.LINK,
                                size: h.$n.Sizes.NONE,
                                color: h.$n.Colors.LINK,
                                onClick: () =>
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await n.e("63401").then(n.bind(n, 247920));
                                        return (t) => (0, i.jsx)(e, { ...t, guildChecklist: g });
                                    }),
                                children: R.intl.string(R.t.qyiTH8),
                            }),
                    ],
                }),
                pendingDescription: g?.size
                    ? R.intl.format(R.t.ALtXIF, {
                          checkBackHook: (e, t) => (0, i.jsx)("strong", { className: L.eb, children: e }, t),
                      })
                    : R.intl.formatToPlainString(R.t["6S/96D"], { minMembers: 200 }),
                checked: g?.healthy,
                pending: g?.healthScorePending,
            },
            {
                name: R.intl.string(R.t["AUUV/x"]),
                failingName: R.intl.string(R.t["jURyO+"]),
                description: R.intl.string(R.t.wikb1q),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        _?.channels != null
                            ? (0, i.jsx)(A.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: R.intl.format(R.t["T+DQYY"], {
                                      channelHook: (e, t) => (0, i.jsx)("span", { className: L.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        k.length > 0
                            ? (0, i.jsx)("div", {
                                  className: L.pZ,
                                  children: k.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, i.jsxs)(
                                                A.E,
                                                {
                                                    color: "text-muted",
                                                    variant: "text-sm/normal",
                                                    children: [(0, j.m1)(t, C.default, I.A, !0), ": ", n.join(", ")],
                                                },
                                                t.id,
                                            )
                                          : null;
                                  }),
                              })
                            : null,
                        _?.name != null
                            ? (0, i.jsx)(A.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: R.intl.format(R.t.KVD8E3, {
                                      nameHook: (e, t) => (0, i.jsx)("span", { className: L.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        _?.description != null
                            ? (0, i.jsx)(A.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: R.intl.format(R.t["/W9Kel"], {
                                      descriptionHook: (e, t) =>
                                          (0, i.jsx)("span", { className: L.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        _?.icon != null || _?.discovery_splash != null || _?.invite_splash != null || _?.banner != null
                            ? (0, i.jsx)(A.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: R.intl.string(R.t.WVKQ6q),
                              })
                            : null,
                    ],
                }),
                checked: null == _ || 0 === Object.keys(_).length,
            },
            {
                name: R.intl.string(R.t.lSXnL9),
                failingName: R.intl.string(R.t.awA3Pb),
                description: R.intl.string(R.t.QbBJ7R),
                failingDescription: R.intl.format(R.t.kBXInb, {
                    onClick: () => S.A.setSection(y.BEX.SAFETY, y.nd0.SAFETY_PERMISSIONS),
                }),
                checked: g?.protected,
            },
        ];
    return (0, i.jsxs)("div", {
        className: r()(L.kL, o),
        children: [
            ((t = g?.sufficient ? n(617416) : n(848887)),
            null == d
                ? null
                : (0, i.jsxs)("div", {
                      className: L.wx,
                      children: [(0, i.jsx)("img", { alt: "", src: t, className: L.nr, width: 40 }), d],
                  })),
            w
                .filter((e) => !m || null == e.checked || !e.checked)
                .map((e, t) =>
                    (0, i.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, i.jsx)(D, { ...e }),
                                t < w.length - 1 ? (0, i.jsx)("hr", { className: L.me }) : null,
                            ],
                        },
                        `${e.name}`,
                    ),
                ),
        ],
    });
};
