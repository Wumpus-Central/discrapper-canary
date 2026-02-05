"use strict";
n.d(t, { A: () => C });
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
    h = n(808728),
    _ = n(975571),
    A = n(661191),
    p = n(997509),
    f = n(834720),
    j = n(652215),
    N = n(985018),
    E = n(960552);
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
            className: E.gd,
            children: [
                (0, i.jsx)("div", { className: E.aV, children: c }),
                (0, i.jsxs)("div", {
                    className: E.QL,
                    children: [
                        (0, i.jsx)(x.Heading, { variant: "heading-md/semibold", children: d }),
                        (0, i.jsx)(x.Text, { color: "text-muted", variant: "text-sm/normal", children: u }),
                    ],
                }),
            ],
        })
    );
};
function T(e, t) {
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
let C = (e) => {
    let t,
        { guild: l, guildId: a, className: o, headerContent: d, failedItemsOnly: m = !1 } = e,
        [C, I] = (0, u.yK)([f.Ay], () => [f.Ay.getDiscoveryChecklist(a), f.Ay.isLoading()], [a]),
        { nsfwProperties: v } = C ?? {},
        S = l?.features.has(j.GuildFeatures.PARTNERED),
        y = v?.channels_banned_keywords,
        R = (0, u.bG)(
            [h.Ay],
            () => {
                if (null == y) return [];
                let e = (h.Ay.getChannels(l.id) ?? {})[h.I6] ?? [],
                    t = e?.map((e) => e.channel).reduce((e, t) => ({ ...e, [t.id]: t }), {}) ?? {};
                return null == y
                    ? []
                    : Object.entries(y).map((e) => {
                          let [n, i] = e;
                          return [t[n], i];
                      });
            },
            [l.id, y],
            T,
        );
    if (I || null == C)
        return (0, i.jsxs)("div", {
            className: r()(E.kL, E.NQ, o),
            children: [
                (0, i.jsx)(x.Heading, {
                    className: E.KQ,
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: N.intl.string(N.t.e1gm0f),
                }),
                (0, i.jsx)(x.y$y, { className: E.__invalid_spinner }),
            ],
        });
    let O = S ? N.t["WH+1Yz"] : N.t.a4MYDO,
        G = [
            {
                name: N.intl.string(N.t.yvk9py),
                failingName: N.intl.string(N.t["IY/UT/"]),
                description: N.intl.string(N.t.hSLSM6),
                failingDescription: N.intl.format(N.t.odsGgy, {
                    termsURL: j.X7G.TERMS,
                    guidelinesURL: _.A.getArticleURL(j.MVz.PUBLIC_GUILD_GUILDLINES),
                }),
                checked: C?.safeEnvironment,
            },
            {
                name: N.intl.formatToPlainString(N.t.NYovA2, { minMembers: C.minimumGuildSize }),
                failingName: N.intl.formatToPlainString(N.t.wvJwYs, {
                    minMembers: C.minimumGuildSize.toLocaleString(),
                }),
                description: null,
                failingDescription: N.intl.format(O, { minMembers: C.minimumGuildSize.toLocaleString() }),
                checked: C?.size,
            },
            {
                name: N.intl.string(N.t.PtxOCK),
                failingName: N.intl.string(N.t.JPF5IL),
                description: N.intl.formatToPlainString(N.t.VT0bQJ, {
                    minimumGuildAge: Math.ceil(C.minimumGuildAge / 7),
                }),
                failingDescription: N.intl.formatToPlainString(N.t.jYwM1Y, {
                    minimumGuildAge: Math.ceil(C.minimumGuildAge / 7),
                    passDate: c()(A.default.extractTimestamp(a)).add(C.minimumGuildAge, "days").format("LL"),
                }),
                checked: C?.age,
            },
            {
                name: C?.healthScorePending ? N.intl.string(N.t.G77ud0) : N.intl.string(N.t["95nW0H"]),
                failingName: N.intl.string(N.t["+GHxPy"]),
                description: N.intl.string(N.t.rTWJwX),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(x.Text, {
                            color: "text-muted",
                            className: E.t,
                            variant: "text-sm/normal",
                            children: N.intl.string(N.t.LjqS0G),
                        }),
                        C?.engagementHealthy
                            ? null
                            : (0, i.jsx)(x.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: N.intl.string(N.t.X8Lt77),
                              }),
                        C?.retentionHealthy
                            ? null
                            : (0, i.jsx)(x.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: N.intl.string(N.t.esdy89),
                              }),
                        (() => {
                            if (null == C || null == C.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = C,
                                {
                                    avg_nonnew_participators: i,
                                    avg_nonnew_communicators: s,
                                    perc_ret_w1_intentful: l,
                                } = n;
                            return (!e && null != l) || (!t && null != i && null != s);
                        })() &&
                            (0, i.jsx)(g.$n, {
                                className: E.zh,
                                look: g.$n.Looks.LINK,
                                size: g.$n.Sizes.NONE,
                                color: g.$n.Colors.LINK,
                                onClick: () =>
                                    (0, x.mMO)(async () => {
                                        let { default: e } = await n.e("63401").then(n.bind(n, 247920));
                                        return (t) => (0, i.jsx)(e, { ...t, guildChecklist: C });
                                    }),
                                children: N.intl.string(N.t.qyiTH8),
                            }),
                    ],
                }),
                pendingDescription: C?.size
                    ? N.intl.format(N.t.ALtXIF, {
                          checkBackHook: (e, t) => (0, i.jsx)("strong", { className: E.eb, children: e }, t),
                      })
                    : N.intl.formatToPlainString(N.t["6S/96D"], { minMembers: 200 }),
                checked: C?.healthy,
                pending: C?.healthScorePending,
            },
            {
                name: N.intl.string(N.t["AUUV/x"]),
                failingName: N.intl.string(N.t["jURyO+"]),
                description: N.intl.string(N.t.wikb1q),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        v?.channels != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: N.intl.format(N.t["T+DQYY"], {
                                      channelHook: (e, t) => (0, i.jsx)("span", { className: E.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        R.length > 0
                            ? (0, i.jsx)("div", {
                                  className: E.pZ,
                                  children: R.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, i.jsxs)(
                                                x.Text,
                                                {
                                                    color: "text-muted",
                                                    variant: "text-sm/normal",
                                                    children: ["#", t.name, ": ", n.join(", ")],
                                                },
                                                t.id,
                                            )
                                          : null;
                                  }),
                              })
                            : null,
                        v?.name != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: N.intl.format(N.t.KVD8E3, {
                                      nameHook: (e, t) => (0, i.jsx)("span", { className: E.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        v?.description != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: N.intl.format(N.t["/W9Kel"], {
                                      descriptionHook: (e, t) =>
                                          (0, i.jsx)("span", { className: E.ty, children: e }, t),
                                  }),
                              })
                            : null,
                        v?.icon != null || v?.discovery_splash != null || v?.invite_splash != null || v?.banner != null
                            ? (0, i.jsx)(x.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: N.intl.string(N.t.WVKQ6q),
                              })
                            : null,
                    ],
                }),
                checked: null == v || 0 === Object.keys(v).length,
            },
            {
                name: N.intl.string(N.t.lSXnL9),
                failingName: N.intl.string(N.t.awA3Pb),
                description: N.intl.string(N.t.QbBJ7R),
                failingDescription: N.intl.format(N.t.kBXInb, {
                    onClick: () => p.A.setSection(j.BEX.SAFETY, j.nd0.SAFETY_PERMISSIONS),
                }),
                checked: C?.protected,
            },
        ];
    return (0, i.jsxs)("div", {
        className: r()(E.kL, o),
        children: [
            ((t = C?.sufficient ? n(617416) : n(848887)),
            null == d
                ? null
                : (0, i.jsxs)("div", {
                      className: E.wx,
                      children: [(0, i.jsx)("img", { alt: "", src: t, className: E.nr, width: 40 }), d],
                  })),
            G.filter((e) => !m || null == e.checked || !e.checked).map((e, t) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(b, { ...e }),
                            t < G.length - 1 ? (0, i.jsx)("hr", { className: E.me }) : null,
                        ],
                    },
                    `${e.name}`,
                ),
            ),
        ],
    });
};
