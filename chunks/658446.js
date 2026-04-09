"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(33851),
    o = n.n(a),
    d = n(989349),
    c = n.n(d),
    u = n(311907),
    m = n(827734),
    g = n(421380),
    x = n(397927),
    h = n(47167),
    _ = n(808728),
    A = n(994500),
    p = n(287809),
    f = n(975571),
    j = n(661191),
    N = n(997509),
    E = n(834720),
    C = n(652215),
    T = n(985018),
    I = n(859854);
let b = (e) => {
    let {
            name: t,
            failingName: n,
            description: s,
            checked: l,
            pending: r,
            pendingDescription: a,
            failingDescription: o,
        } = e,
        d = t,
        c = null,
        u = null;
    return (
        r
            ? ((c = (0, i.jsx)(x.EpV, {
                  size: "custom",
                  color: m.A.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20,
              })),
              (u = null != a ? a : s))
            : l
              ? ((c = (0, i.jsx)(g.Kj, { readOnly: !0, shape: g.Ib.ROUND, size: 20, type: g.Xo.INVERTED, value: !0 })),
                (u = s))
              : ((c = (0, i.jsx)(x.aXh, {
                    size: "custom",
                    color: m.A.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20,
                })),
                (d = null != n ? n : t),
                (u = null != o ? o : s)),
        (0, i.jsxs)("div", {
            className: I.gd,
            children: [
                (0, i.jsx)("div", { className: I.aV, children: c }),
                (0, i.jsxs)("div", {
                    className: I.QL,
                    children: [
                        (0, i.jsx)(x.Heading, { variant: "heading-md/semibold", children: d }),
                        (0, i.jsx)(x.Text, { color: "text-muted", variant: "text-sm/normal", children: u }),
                    ],
                }),
            ],
        })
    );
};
function v(e, t) {
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
let S = (e) => {
    let t,
        { guild: l, guildId: a, className: o, headerContent: d, failedItemsOnly: m = !1 } = e,
        [S, y] = (0, u.yK)([E.Ay], () => [E.Ay.getDiscoveryChecklist(a), E.Ay.isLoading()], [a]),
        { nsfwProperties: R } = S ?? {},
        O = l?.features.has(C.GuildFeatures.PARTNERED),
        G = R?.channels_banned_keywords,
        L = (0, u.bG)(
            [_.Ay],
            () => {
                if (null == G) return [];
                let e = (_.Ay.getChannels(l.id) ?? {})[_.I6] ?? [],
                    t = e?.map((e) => e.channel).reduce((e, t) => ({ ...e, [t.id]: t }), {}) ?? {};
                return null == G
                    ? []
                    : Object.entries(G).map((e) => {
                          let [n, i] = e;
                          return [t[n], i];
                      });
            },
            [l.id, G],
            v,
        );
    if (y || null == S)
        return (0, i.jsxs)("div", {
            className: r()(I.kL, I.NQ, o),
            children: [
                (0, i.jsx)(x.Heading, {
                    className: I.KQ,
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: T.intl.string(T.t.e1gm0f),
                }),
                (0, i.jsx)(x.y$y, { className: I.__invalid_spinner }),
            ],
        });
    let D = O ? T.t["WH+1Yz"] : T.t.a4MYDO,
        M = [
            {
                name: T.intl.string(T.t.yvk9py),
                failingName: T.intl.string(T.t["IY/UT/"]),
                description: T.intl.string(T.t.hSLSM6),
                failingDescription: T.intl.format(T.t.odsGgy, {
                    termsURL: C.X7G.TERMS,
                    guidelinesURL: f.A.getArticleURL(C.MVz.PUBLIC_GUILD_GUILDLINES),
                }),
                checked: S?.safeEnvironment,
            },
            {
                name: T.intl.formatToPlainString(T.t.NYovA2, { minMembers: S.minimumGuildSize }),
                failingName: T.intl.formatToPlainString(T.t.wvJwYs, {
                    minMembers: S.minimumGuildSize.toLocaleString(),
                }),
                description: null,
                failingDescription: T.intl.format(D, { minMembers: S.minimumGuildSize.toLocaleString() }),
                checked: S?.size,
            },
            {
                name: T.intl.string(T.t.PtxOCK),
                failingName: T.intl.string(T.t.JPF5IL),
                description: T.intl.formatToPlainString(T.t.VT0bQJ, {
                    minimumGuildAge: Math.ceil(S.minimumGuildAge / 7),
                }),
                failingDescription: T.intl.formatToPlainString(T.t.jYwM1Y, {
                    minimumGuildAge: Math.ceil(S.minimumGuildAge / 7),
                    passDate: c()(j.default.extractTimestamp(a)).add(S.minimumGuildAge, "days").format("LL"),
                }),
                checked: S?.age,
            },
            {
                name: S?.healthScorePending ? T.intl.string(T.t.G77ud0) : T.intl.string(T.t["95nW0H"]),
                failingName: T.intl.string(T.t["+GHxPy"]),
                description: T.intl.string(T.t.rTWJwX),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(x.Text, {
                            color: "text-muted",
                            className: I.t,
                            variant: "text-sm/normal",
                            children: T.intl.string(T.t.LjqS0G),
                        }),
                        S?.engagementHealthy
                            ? null
                            : (0, i.jsx)(x.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: T.intl.string(T.t.X8Lt77),
                              }),
                        S?.retentionHealthy
                            ? null
                            : (0, i.jsx)(x.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: T.intl.string(T.t.esdy89),
                              }),
                        (() => {
                            if (null == S || null == S.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = S,
                                {
                                    avg_nonnew_participators: i,
                                    avg_nonnew_communicators: s,
                                    perc_ret_w1_intentful: l,
                                } = n;
                            return (!e && null != l) || (!t && null != i && null != s);
                        })() &&
                            (0, i.jsx)(g.$n, {
                                className: I.zh,
                                look: g.$n.Looks.LINK,
                                size: g.$n.Sizes.NONE,
                                color: g.$n.Colors.LINK,
                                onClick: () =>
                                    (0, x.mMO)(async () => {
                                        let { default: e } = await n.e("63401").then(n.bind(n, 247920));
                                        return (t) => (0, i.jsx)(e, { ...t, guildChecklist: S });
                                    }),
                                children: T.intl.string(T.t.qyiTH8),
                            }),
                    ],
                }),
                pendingDescription: S?.size
                    ? T.intl.format(T.t.ALtXIF, {
                          checkBackHook: (e, t) => (0, i.jsx)("strong", { className: I.eb, children: e }, t),
                      })
                    : T.intl.formatToPlainString(T.t["6S/96D"], { minMembers: 200 }),
                checked: S?.healthy,
                pending: S?.healthScorePending,
            },
            {
                name: T.intl.string(T.t["AUUV/x"]),
                failingName: T.intl.string(T.t["jURyO+"]),
                description: T.intl.string(T.t.wikb1q),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        R?.channels != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: T.intl.format(T.t["T+DQYY"], {
                                      channelHook: (e, t) => (0, i.jsx)("span", { className: I.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        L.length > 0
                            ? (0, i.jsx)("div", {
                                  className: I.pZ,
                                  children: L.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, i.jsxs)(
                                                x.Text,
                                                {
                                                    color: "text-muted",
                                                    variant: "text-sm/normal",
                                                    children: [(0, h.m1)(t, p.default, A.A, !0), ": ", n.join(", ")],
                                                },
                                                t.id,
                                            )
                                          : null;
                                  }),
                              })
                            : null,
                        R?.name != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: T.intl.format(T.t.KVD8E3, {
                                      nameHook: (e, t) => (0, i.jsx)("span", { className: I.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        R?.description != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: T.intl.format(T.t["/W9Kel"], {
                                      descriptionHook: (e, t) =>
                                          (0, i.jsx)("span", { className: I.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        R?.icon != null || R?.discovery_splash != null || R?.invite_splash != null || R?.banner != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: T.intl.string(T.t.WVKQ6q),
                              })
                            : null,
                    ],
                }),
                checked: null == R || 0 === Object.keys(R).length,
            },
            {
                name: T.intl.string(T.t.lSXnL9),
                failingName: T.intl.string(T.t.awA3Pb),
                description: T.intl.string(T.t.QbBJ7R),
                failingDescription: T.intl.format(T.t.kBXInb, {
                    onClick: () => N.A.setSection(C.BEX.SAFETY, C.nd0.SAFETY_PERMISSIONS),
                }),
                checked: S?.protected,
            },
        ];
    return (0, i.jsxs)("div", {
        className: r()(I.kL, o),
        children: [
            ((t = S?.sufficient ? n(617416) : n(848887)),
            null == d
                ? null
                : (0, i.jsxs)("div", {
                      className: I.wx,
                      children: [(0, i.jsx)("img", { alt: "", src: t, className: I.nr, width: 40 }), d],
                  })),
            M.filter((e) => !m || null == e.checked || !e.checked).map((e, t) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(b, { ...e }),
                            t < M.length - 1 ? (0, i.jsx)("hr", { className: I.me }) : null,
                        ],
                    },
                    `${e.name}`,
                ),
            ),
        ],
    });
};
