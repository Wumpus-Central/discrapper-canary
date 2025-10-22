n.d(t, { Z: () => I }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(498607),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    g = n(692547),
    m = n(755721),
    p = n(481060),
    f = n(984933),
    h = n(63063),
    b = n(709054),
    x = n(434404),
    j = n(733895),
    v = n(981631),
    _ = n(388032),
    C = n(81190);
function O(e) {
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
function y(e, t) {
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
let E = (e) => {
    let {
            name: t,
            failingName: n,
            description: i,
            checked: l,
            pending: a,
            pendingDescription: s,
            failingDescription: o,
        } = e,
        c = t,
        d = null,
        u = null;
    return (
        a
            ? ((d = (0, r.jsx)(p.Mgn, {
                  size: "custom",
                  color: g.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20,
              })),
              (u = null != s ? s : i))
            : l
              ? ((d = (0, r.jsx)(m.$q, {
                    readOnly: !0,
                    shape: m.zV.ROUND,
                    size: 20,
                    type: m.M0.INVERTED,
                    value: !0,
                })),
                (u = i))
              : ((d = (0, r.jsx)(p.k$p, {
                    size: "custom",
                    color: g.Z.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20,
                })),
                (c = null != n ? n : t),
                (u = null != o ? o : i)),
        (0, r.jsxs)("div", {
            className: C.checklistItem,
            children: [
                (0, r.jsx)("div", {
                    className: C.checklistIcon,
                    children: d,
                }),
                (0, r.jsxs)("div", {
                    className: C.checklistText,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: "heading-md/semibold",
                            children: c,
                        }),
                        (0, r.jsx)(p.Text, {
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
function N(e, t) {
    return o()(
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
let I = (e) => {
    let { guild: t, guildId: l, className: s, headerContent: o, failedItemsOnly: c = !1 } = e,
        [g, I] = (0, u.Wu)([j.ZP], () => [j.ZP.getDiscoveryChecklist(l), j.ZP.isLoading()], [l]),
        { nsfwProperties: S } = null != g ? g : {},
        T = null == t ? void 0 : t.features.has(v.GuildFeatures.PARTNERED),
        P = null == S ? void 0 : S.channels_banned_keywords,
        w = (0, u.e7)(
            [f.ZP],
            () => {
                var e, n, r;
                if (null == P) return [];
                let i = null != (n = (null != (e = f.ZP.getChannels(t.id)) ? e : {})[f.sH]) ? n : [],
                    l =
                        null !=
                        (r =
                            null == i
                                ? void 0
                                : i.map((e) => e.channel).reduce((e, t) => y(O({}, e), { [t.id]: t }), {}))
                            ? r
                            : {};
                return null == P
                    ? []
                    : Object.entries(P).map((e) => {
                          let [t, n] = e;
                          return [l[t], n];
                      });
            },
            [t.id, P],
            N,
        );
    if (I || null == g)
        return (0, r.jsxs)("div", {
            className: a()(C.container, C.loaderContainer, s),
            children: [
                (0, r.jsx)(p.Heading, {
                    className: C.loadingText,
                    variant: "heading-md/semibold",
                    color: "header-secondary",
                    children: _.intl.string(_.t.e1gm0f),
                }),
                (0, r.jsx)(p.$jN, { className: C.__invalid_spinner }),
            ],
        });
    let Z = T ? _.t["WH+1Yz"] : _.t.a4MYDO,
        R = [
            {
                name: _.intl.string(_.t.yvk9py),
                failingName: _.intl.string(_.t["IY/UT/"]),
                description: _.intl.string(_.t.hSLSM6),
                failingDescription: _.intl.format(_.t.odsGgy, {
                    termsURL: v.EYA.TERMS,
                    guidelinesURL: h.Z.getArticleURL(v.BhN.PUBLIC_GUILD_GUILDLINES),
                }),
                checked: null == g ? void 0 : g.safeEnvironment,
            },
            {
                name: _.intl.formatToPlainString(_.t.NYovA2, { minMembers: g.minimumGuildSize }),
                failingName: _.intl.formatToPlainString(_.t.wvJwYs, {
                    minMembers: g.minimumGuildSize.toLocaleString(),
                }),
                description: null,
                failingDescription: _.intl.format(Z, { minMembers: g.minimumGuildSize.toLocaleString() }),
                checked: null == g ? void 0 : g.size,
            },
            {
                name: _.intl.string(_.t.PtxOCK),
                failingName: _.intl.string(_.t.JPF5IL),
                description: _.intl.formatToPlainString(_.t.VT0bQJ, {
                    minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
                }),
                failingDescription: _.intl.formatToPlainString(_.t.jYwM1Y, {
                    minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
                    passDate: d()(b.default.extractTimestamp(l)).add(g.minimumGuildAge, "days").format("LL"),
                }),
                checked: null == g ? void 0 : g.age,
            },
            {
                name: (null == g ? void 0 : g.healthScorePending)
                    ? _.intl.string(_.t.G77ud0)
                    : _.intl.string(_.t["95nW0H"]),
                failingName: _.intl.string(_.t["+GHxPy"]),
                description: _.intl.string(_.t.rTWJwX),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.Text, {
                            color: "text-muted",
                            className: C.healthFailingDescription,
                            variant: "text-sm/normal",
                            children: _.intl.string(_.t.LjqS0G),
                        }),
                        (null == g ? void 0 : g.engagementHealthy)
                            ? null
                            : (0, r.jsx)(p.Text, {
                                  color: "text-danger",
                                  variant: "text-sm/normal",
                                  children: _.intl.string(_.t.X8Lt77),
                              }),
                        (null == g ? void 0 : g.retentionHealthy)
                            ? null
                            : (0, r.jsx)(p.Text, {
                                  color: "text-danger",
                                  variant: "text-sm/normal",
                                  children: _.intl.string(_.t.esdy89),
                              }),
                        (() => {
                            if (null == g || null == g.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = g,
                                {
                                    avg_nonnew_participators: r,
                                    avg_nonnew_communicators: i,
                                    perc_ret_w1_intentful: l,
                                } = n;
                            return (!e && null != l) || (!t && null != r && null != i);
                        })() &&
                            (0, r.jsx)(m.zx, {
                                className: C.detailsButton,
                                look: m.zx.Looks.LINK,
                                size: m.zx.Sizes.NONE,
                                color: m.zx.Colors.LINK,
                                onClick: () =>
                                    (0, p.ZDy)(async () => {
                                        let { default: e } = await n.e("23401").then(n.bind(n, 666599));
                                        return (t) => (0, r.jsx)(e, y(O({}, t), { guildChecklist: g }));
                                    }),
                                children: _.intl.string(_.t.qyiTH8),
                            }),
                    ],
                }),
                pendingDescription: (null == g ? void 0 : g.size)
                    ? _.intl.format(_.t.ALtXIF, {
                          checkBackHook: (e, t) =>
                              (0, r.jsx)(
                                  "strong",
                                  {
                                      className: C.healthPending,
                                      children: e,
                                  },
                                  t,
                              ),
                      })
                    : _.intl.formatToPlainString(_.t["6S/96D"], { minMembers: 200 }),
                checked: null == g ? void 0 : g.healthy,
                pending: null == g ? void 0 : g.healthScorePending,
            },
            {
                name: _.intl.string(_.t["AUUV/x"]),
                failingName: _.intl.string(_.t["jURyO+"]),
                description: _.intl.string(_.t.wikb1q),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (null == S ? void 0 : S.channels) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: _.intl.format(_.t["T+DQYY"], {
                                      channelHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: C.doesNot,
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        w.length > 0
                            ? (0, r.jsx)("div", {
                                  className: C.indent,
                                  children: w.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, r.jsxs)(
                                                p.Text,
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
                        (null == S ? void 0 : S.name) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: _.intl.format(_.t.KVD8E3, {
                                      nameHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: C.doesNot,
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (null == S ? void 0 : S.description) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: _.intl.format(_.t["/W9Kel"], {
                                      descriptionHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: C.doesNot,
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (null == S ? void 0 : S.icon) != null ||
                        (null == S ? void 0 : S.discovery_splash) != null ||
                        (null == S ? void 0 : S.invite_splash) != null ||
                        (null == S ? void 0 : S.banner) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: _.intl.string(_.t.WVKQ6q),
                              })
                            : null,
                    ],
                }),
                checked: null == S || 0 === Object.keys(S).length,
            },
            {
                name: _.intl.string(_.t.lSXnL9),
                failingName: _.intl.string(_.t.awA3Pb),
                description: _.intl.string(_.t.QbBJ7R),
                failingDescription: _.intl.format(_.t.kBXInb, {
                    onClick: () => x.Z.setSection(v.pNK.SAFETY, v.KsC.SAFETY_PERMISSIONS),
                }),
                checked: null == g ? void 0 : g.protected,
            },
        ];
    return (0, r.jsxs)("div", {
        className: a()(C.container, s),
        children: [
            (() => {
                let e = (null == g ? void 0 : g.sufficient) ? n(909425) : n(177266);
                return null == o
                    ? null
                    : (0, r.jsxs)("div", {
                          className: C.header,
                          children: [
                              (0, r.jsx)("img", {
                                  alt: "",
                                  src: e,
                                  className: C.headerIcon,
                                  width: 40,
                              }),
                              o,
                          ],
                      });
            })(),
            R.filter((e) => !c || null == e.checked || !e.checked).map((e, t) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, r.jsx)(E, O({}, e)),
                            t < R.length - 1 ? (0, r.jsx)("hr", { className: C.separator }) : null,
                        ],
                    },
                    "".concat(e.name),
                ),
            ),
        ],
    });
};
