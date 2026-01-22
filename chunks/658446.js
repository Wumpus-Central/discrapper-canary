n.d(t, {
    A: () => S,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(33851),
    c = n.n(a),
    o = n(989349),
    d = n.n(o),
    u = n(311907),
    f = n(827734),
    g = n(421380),
    b = n(397927),
    m = n(808728),
    p = n(975571),
    x = n(661191),
    h = n(997509),
    j = n(834720),
    O = n(652215),
    y = n(985018),
    v = n(960552);

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => {
    let {
            name: t,
            failingName: n,
            description: i,
            checked: l,
            pending: s,
            pendingDescription: a,
            failingDescription: c,
        } = e,
        o = t,
        d = null,
        u = null;
    return (
        s
            ? ((d = (0, r.jsx)(b.EpV, {
                  size: "custom",
                  color: f.A.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20,
              })),
              (u = null != a ? a : i))
            : l
              ? ((d = (0, r.jsx)(g.Kj, {
                    readOnly: !0,
                    shape: g.Ib.ROUND,
                    size: 20,
                    type: g.Xo.INVERTED,
                    value: !0,
                })),
                (u = i))
              : ((d = (0, r.jsx)(b.aXh, {
                    size: "custom",
                    color: f.A.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20,
                })),
                (o = null != n ? n : t),
                (u = null != c ? c : i)),
        (0, r.jsxs)("div", {
            className: v.gd,
            children: [
                (0, r.jsx)("div", {
                    className: v.aV,
                    children: d,
                }),
                (0, r.jsxs)("div", {
                    className: v.QL,
                    children: [
                        (0, r.jsx)(b.Heading, {
                            variant: "heading-md/semibold",
                            children: o,
                        }),
                        (0, r.jsx)(b.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: u,
                        }),
                    ],
                }),
            ],
        })
    );
};

function _(e, t) {
    return c()(
        null == e
            ? void 0
            : e.map((e) => {
                  let [t, n] = e;
                  return null == t ? void 0 : t.id;
              }),
        null == t
            ? void 0
            : t.map((e) => {
                  let [t, n] = e;
                  return null == t ? void 0 : t.id;
              }),
    );
}
let S = (e) => {
    let t,
        { guild: l, guildId: a, className: c, headerContent: o, failedItemsOnly: f = !1 } = e,
        [S, T] = (0, u.yK)([j.Ay], () => [j.Ay.getDiscoveryChecklist(a), j.Ay.isLoading()], [a]),
        { nsfwProperties: I } = null != S ? S : {},
        C = null == l ? void 0 : l.features.has(O.GuildFeatures.PARTNERED),
        P = null == I ? void 0 : I.channels_banned_keywords,
        w = (0, u.bG)(
            [m.Ay],
            () => {
                var e, t, n;
                if (null == P) return [];
                let r = null != (e = (null != (t = m.Ay.getChannels(l.id)) ? t : {})[m.I6]) ? e : [],
                    i =
                        null !=
                        (n =
                            null == r
                                ? void 0
                                : r
                                      .map((e) => e.channel)
                                      .reduce(
                                          (e, t) =>
                                              E(A({}, e), {
                                                  [t.id]: t,
                                              }),
                                          {},
                                      ))
                            ? n
                            : {};
                return null == P
                    ? []
                    : Object.entries(P).map((e) => {
                          let [t, n] = e;
                          return [i[t], n];
                      });
            },
            [l.id, P],
            _,
        );
    if (T || null == S)
        return (0, r.jsxs)("div", {
            className: s()(v.kL, v.NQ, c),
            children: [
                (0, r.jsx)(b.Heading, {
                    className: v.KQ,
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: y.intl.string(y.t.e1gm0f),
                }),
                (0, r.jsx)(b.y$y, {
                    className: v.__invalid_spinner,
                }),
            ],
        });
    let R = C ? y.t["WH+1Yz"] : y.t.a4MYDO,
        D = [
            {
                name: y.intl.string(y.t.yvk9py),
                failingName: y.intl.string(y.t["IY/UT/"]),
                description: y.intl.string(y.t.hSLSM6),
                failingDescription: y.intl.format(y.t.odsGgy, {
                    termsURL: O.X7G.TERMS,
                    guidelinesURL: p.A.getArticleURL(O.MVz.PUBLIC_GUILD_GUILDLINES),
                }),
                checked: null == S ? void 0 : S.safeEnvironment,
            },
            {
                name: y.intl.formatToPlainString(y.t.NYovA2, {
                    minMembers: S.minimumGuildSize,
                }),
                failingName: y.intl.formatToPlainString(y.t.wvJwYs, {
                    minMembers: S.minimumGuildSize.toLocaleString(),
                }),
                description: null,
                failingDescription: y.intl.format(R, {
                    minMembers: S.minimumGuildSize.toLocaleString(),
                }),
                checked: null == S ? void 0 : S.size,
            },
            {
                name: y.intl.string(y.t.PtxOCK),
                failingName: y.intl.string(y.t.JPF5IL),
                description: y.intl.formatToPlainString(y.t.VT0bQJ, {
                    minimumGuildAge: Math.ceil(S.minimumGuildAge / 7),
                }),
                failingDescription: y.intl.formatToPlainString(y.t.jYwM1Y, {
                    minimumGuildAge: Math.ceil(S.minimumGuildAge / 7),
                    passDate: d()(x.default.extractTimestamp(a)).add(S.minimumGuildAge, "days").format("LL"),
                }),
                checked: null == S ? void 0 : S.age,
            },
            {
                name: (null == S ? void 0 : S.healthScorePending)
                    ? y.intl.string(y.t.G77ud0)
                    : y.intl.string(y.t["95nW0H"]),
                failingName: y.intl.string(y.t["+GHxPy"]),
                description: y.intl.string(y.t.rTWJwX),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.Text, {
                            color: "text-muted",
                            className: v.t,
                            variant: "text-sm/normal",
                            children: y.intl.string(y.t.LjqS0G),
                        }),
                        (null == S ? void 0 : S.engagementHealthy)
                            ? null
                            : (0, r.jsx)(b.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: y.intl.string(y.t.X8Lt77),
                              }),
                        (null == S ? void 0 : S.retentionHealthy)
                            ? null
                            : (0, r.jsx)(b.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: y.intl.string(y.t.esdy89),
                              }),
                        (() => {
                            if (null == S || null == S.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = S,
                                {
                                    avg_nonnew_participators: r,
                                    avg_nonnew_communicators: i,
                                    perc_ret_w1_intentful: l,
                                } = n;
                            return (!e && null != l) || (!t && null != r && null != i);
                        })() &&
                            (0, r.jsx)(g.$n, {
                                className: v.zh,
                                look: g.$n.Looks.LINK,
                                size: g.$n.Sizes.NONE,
                                color: g.$n.Colors.LINK,
                                onClick: () =>
                                    (0, b.mMO)(async () => {
                                        let { default: e } = await n.e("63401").then(n.bind(n, 247920));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                E(A({}, t), {
                                                    guildChecklist: S,
                                                }),
                                            );
                                    }),
                                children: y.intl.string(y.t.qyiTH8),
                            }),
                    ],
                }),
                pendingDescription: (null == S ? void 0 : S.size)
                    ? y.intl.format(y.t.ALtXIF, {
                          checkBackHook: (e, t) =>
                              (0, r.jsx)(
                                  "strong",
                                  {
                                      className: v.eb,
                                      children: e,
                                  },
                                  t,
                              ),
                      })
                    : y.intl.formatToPlainString(y.t["6S/96D"], {
                          minMembers: 200,
                      }),
                checked: null == S ? void 0 : S.healthy,
                pending: null == S ? void 0 : S.healthScorePending,
            },
            {
                name: y.intl.string(y.t["AUUV/x"]),
                failingName: y.intl.string(y.t["jURyO+"]),
                description: y.intl.string(y.t.wikb1q),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (null == I ? void 0 : I.channels) != null
                            ? (0, r.jsx)(b.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: y.intl.format(y.t["T+DQYY"], {
                                      channelHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: v.ty,
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        w.length > 0
                            ? (0, r.jsx)("div", {
                                  className: v.pZ,
                                  children: w.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, r.jsxs)(
                                                b.Text,
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
                        (null == I ? void 0 : I.name) != null
                            ? (0, r.jsx)(b.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: y.intl.format(y.t.KVD8E3, {
                                      nameHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: v.ty,
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (null == I ? void 0 : I.description) != null
                            ? (0, r.jsx)(b.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: y.intl.format(y.t["/W9Kel"], {
                                      descriptionHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: v.ty,
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (null == I ? void 0 : I.icon) != null ||
                        (null == I ? void 0 : I.discovery_splash) != null ||
                        (null == I ? void 0 : I.invite_splash) != null ||
                        (null == I ? void 0 : I.banner) != null
                            ? (0, r.jsx)(b.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: y.intl.string(y.t.WVKQ6q),
                              })
                            : null,
                    ],
                }),
                checked: null == I || 0 === Object.keys(I).length,
            },
            {
                name: y.intl.string(y.t.lSXnL9),
                failingName: y.intl.string(y.t.awA3Pb),
                description: y.intl.string(y.t.QbBJ7R),
                failingDescription: y.intl.format(y.t.kBXInb, {
                    onClick: () => h.A.setSection(O.BEX.SAFETY, O.nd0.SAFETY_PERMISSIONS),
                }),
                checked: null == S ? void 0 : S.protected,
            },
        ];
    return (0, r.jsxs)("div", {
        className: s()(v.kL, c),
        children: [
            ((t = (null == S ? void 0 : S.sufficient) ? n(617416) : n(848887)),
            null == o
                ? null
                : (0, r.jsxs)("div", {
                      className: v.wx,
                      children: [
                          (0, r.jsx)("img", {
                              alt: "",
                              src: t,
                              className: v.nr,
                              width: 40,
                          }),
                          o,
                      ],
                  })),
            D.filter((e) => !f || null == e.checked || !e.checked).map((e, t) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, r.jsx)(N, A({}, e)),
                            t < D.length - 1
                                ? (0, r.jsx)("hr", {
                                      className: v.me,
                                  })
                                : null,
                        ],
                    },
                    "".concat(e.name),
                ),
            ),
        ],
    });
};
