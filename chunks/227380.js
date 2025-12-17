n.d(t, { Z: () => S }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(498607),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    g = n(692547),
    f = n(755721),
    m = n(481060),
    b = n(984933),
    p = n(63063),
    h = n(709054),
    x = n(434404),
    j = n(733895),
    v = n(981631),
    O = n(388032),
    C = n(349348);
function y(e) {
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
function N(e, t) {
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
            ? ((d = (0, r.jsx)(m.Mgn, {
                  size: "custom",
                  color: g.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20,
              })),
              (u = null != s ? s : i))
            : l
              ? ((d = (0, r.jsx)(f.$q, {
                    readOnly: !0,
                    shape: f.zV.ROUND,
                    size: 20,
                    type: f.M0.INVERTED,
                    value: !0,
                })),
                (u = i))
              : ((d = (0, r.jsx)(m.k$p, {
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
                        (0, r.jsx)(m.Heading, {
                            variant: "heading-md/semibold",
                            children: c,
                        }),
                        (0, r.jsx)(m.Text, {
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
function I(e, t) {
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
let S = (e) => {
    let { guild: t, guildId: l, className: s, headerContent: o, failedItemsOnly: c = !1 } = e,
        [g, S] = (0, u.Wu)([j.ZP], () => [j.ZP.getDiscoveryChecklist(l), j.ZP.isLoading()], [l]),
        { nsfwProperties: _ } = null != g ? g : {},
        T = null == t ? void 0 : t.features.has(v.GuildFeatures.PARTNERED),
        P = null == _ ? void 0 : _.channels_banned_keywords,
        w = (0, u.e7)(
            [b.ZP],
            () => {
                var e, n, r;
                if (null == P) return [];
                let i = null != (n = (null != (e = b.ZP.getChannels(t.id)) ? e : {})[b.sH]) ? n : [],
                    l =
                        null !=
                        (r =
                            null == i
                                ? void 0
                                : i.map((e) => e.channel).reduce((e, t) => N(y({}, e), { [t.id]: t }), {}))
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
            I,
        );
    if (S || null == g)
        return (0, r.jsxs)("div", {
            className: a()(C.container, C.loaderContainer, s),
            children: [
                (0, r.jsx)(m.Heading, {
                    className: C.loadingText,
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: O.intl.string(O.t.e1gm0f),
                }),
                (0, r.jsx)(m.$jN, { className: C.__invalid_spinner }),
            ],
        });
    let Z = T ? O.t["WH+1Yz"] : O.t.a4MYDO,
        R = [
            {
                name: O.intl.string(O.t.yvk9py),
                failingName: O.intl.string(O.t["IY/UT/"]),
                description: O.intl.string(O.t.hSLSM6),
                failingDescription: O.intl.format(O.t.odsGgy, {
                    termsURL: v.EYA.TERMS,
                    guidelinesURL: p.Z.getArticleURL(v.BhN.PUBLIC_GUILD_GUILDLINES),
                }),
                checked: null == g ? void 0 : g.safeEnvironment,
            },
            {
                name: O.intl.formatToPlainString(O.t.NYovA2, { minMembers: g.minimumGuildSize }),
                failingName: O.intl.formatToPlainString(O.t.wvJwYs, {
                    minMembers: g.minimumGuildSize.toLocaleString(),
                }),
                description: null,
                failingDescription: O.intl.format(Z, { minMembers: g.minimumGuildSize.toLocaleString() }),
                checked: null == g ? void 0 : g.size,
            },
            {
                name: O.intl.string(O.t.PtxOCK),
                failingName: O.intl.string(O.t.JPF5IL),
                description: O.intl.formatToPlainString(O.t.VT0bQJ, {
                    minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
                }),
                failingDescription: O.intl.formatToPlainString(O.t.jYwM1Y, {
                    minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
                    passDate: d()(h.default.extractTimestamp(l)).add(g.minimumGuildAge, "days").format("LL"),
                }),
                checked: null == g ? void 0 : g.age,
            },
            {
                name: (null == g ? void 0 : g.healthScorePending)
                    ? O.intl.string(O.t.G77ud0)
                    : O.intl.string(O.t["95nW0H"]),
                failingName: O.intl.string(O.t["+GHxPy"]),
                description: O.intl.string(O.t.rTWJwX),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.Text, {
                            color: "text-muted",
                            className: C.healthFailingDescription,
                            variant: "text-sm/normal",
                            children: O.intl.string(O.t.LjqS0G),
                        }),
                        (null == g ? void 0 : g.engagementHealthy)
                            ? null
                            : (0, r.jsx)(m.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: O.intl.string(O.t.X8Lt77),
                              }),
                        (null == g ? void 0 : g.retentionHealthy)
                            ? null
                            : (0, r.jsx)(m.Text, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/normal",
                                  children: O.intl.string(O.t.esdy89),
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
                            (0, r.jsx)(f.zx, {
                                className: C.detailsButton,
                                look: f.zx.Looks.LINK,
                                size: f.zx.Sizes.NONE,
                                color: f.zx.Colors.LINK,
                                onClick: () =>
                                    (0, m.ZDy)(async () => {
                                        let { default: e } = await n.e("23401").then(n.bind(n, 666599));
                                        return (t) => (0, r.jsx)(e, N(y({}, t), { guildChecklist: g }));
                                    }),
                                children: O.intl.string(O.t.qyiTH8),
                            }),
                    ],
                }),
                pendingDescription: (null == g ? void 0 : g.size)
                    ? O.intl.format(O.t.ALtXIF, {
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
                    : O.intl.formatToPlainString(O.t["6S/96D"], { minMembers: 200 }),
                checked: null == g ? void 0 : g.healthy,
                pending: null == g ? void 0 : g.healthScorePending,
            },
            {
                name: O.intl.string(O.t["AUUV/x"]),
                failingName: O.intl.string(O.t["jURyO+"]),
                description: O.intl.string(O.t.wikb1q),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (null == _ ? void 0 : _.channels) != null
                            ? (0, r.jsx)(m.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: O.intl.format(O.t["T+DQYY"], {
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
                                                m.Text,
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
                        (null == _ ? void 0 : _.name) != null
                            ? (0, r.jsx)(m.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: O.intl.format(O.t.KVD8E3, {
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
                        (null == _ ? void 0 : _.description) != null
                            ? (0, r.jsx)(m.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: O.intl.format(O.t["/W9Kel"], {
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
                        (null == _ ? void 0 : _.icon) != null ||
                        (null == _ ? void 0 : _.discovery_splash) != null ||
                        (null == _ ? void 0 : _.invite_splash) != null ||
                        (null == _ ? void 0 : _.banner) != null
                            ? (0, r.jsx)(m.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: O.intl.string(O.t.WVKQ6q),
                              })
                            : null,
                    ],
                }),
                checked: null == _ || 0 === Object.keys(_).length,
            },
            {
                name: O.intl.string(O.t.lSXnL9),
                failingName: O.intl.string(O.t.awA3Pb),
                description: O.intl.string(O.t.QbBJ7R),
                failingDescription: O.intl.format(O.t.kBXInb, {
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
                            (0, r.jsx)(E, y({}, e)),
                            t < R.length - 1 ? (0, r.jsx)("hr", { className: C.separator }) : null,
                        ],
                    },
                    "".concat(e.name),
                ),
            ),
        ],
    });
};
