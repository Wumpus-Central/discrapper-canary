n.d(t, { Z: () => x }), n(388685), n(642613), n(583741);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(99690),
    u = n(359110),
    d = n(601070),
    f = n(91159),
    h = n(488131),
    p = n(496675),
    g = n(306680),
    b = n(594174),
    m = n(768581),
    y = n(709054),
    O = n(981631),
    v = n(124368),
    j = n(388032),
    C = n(988014);
function x(e) {
    let { channel: t } = e,
        l = (0, o.Wu)([d.Z, g.ZP, p.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return a()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(a().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && p.Z.can(O.Plq.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = g.ZP.lastMessageId(e.id),
                        r = g.ZP.lastMessageId(t.id);
                    return y.default.compare(n, r);
                })
                .reverse()
                .value();
        }),
        c = t.isForumLikeChannel() ? 5 : 3;
    return (
        i.useEffect(() => {
            (0, f.q)();
        }, []),
        (0, r.jsxs)("div", {
            className: C.popout,
            children: [
                (0, r.jsx)(s.Text, {
                    className: C.title,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: t.isForumLikeChannel() ? j.intl.string(j.t.ioVdO2) : j.intl.string(j.t.VNYs2v),
                }),
                l
                    .slice(0, t.isForumLikeChannel() ? l.length : c)
                    .map((e) => (0, r.jsx)(E, { thread: e }, e.id))
                    .filter((e) => i.isValidElement(e))
                    .slice(0, c),
                (0, r.jsx)(s.P3F, {
                    className: C.more,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, u.Kh)(t.id)
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e("36970").then(n.bind(n, 223901));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          (function (e) {
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
                                          })({ channel: t }, n),
                                      );
                              });
                    },
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: j.intl.string(j.t["4qdZ93"]),
                    }),
                }),
            ],
        })
    );
}
function E(e) {
    let { thread: t } = e,
        n = (0, o.e7)([b.default], () => b.default.getUser(t.ownerId)),
        i = (0, f.Ok)(t);
    return (0, r.jsxs)(s.P3F, {
        className: C.row,
        onClick: (e) => {
            (0, h.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, v.on.POPOUT);
        },
        children: [
            null == n
                ? (0, r.jsx)("img", {
                      className: C.avatar,
                      src: m.ZP.getDefaultAvatarURL(void 0, void 0),
                      alt: "",
                  })
                : (0, r.jsx)(c.Z, {
                      className: C.avatar,
                      user: n,
                      size: s.EFr.SIZE_16,
                  }),
            (0, r.jsx)(s.Text, {
                className: C.name,
                variant: "text-sm/normal",
                color: "none",
                children: t.name,
            }),
            (0, r.jsxs)(s.Text, {
                className: C.timestamp,
                variant: "text-sm/normal",
                color: "none",
                children: [
                    (0, r.jsx)("span", {
                        className: C.bullet,
                        children: "\u2022",
                    }),
                    (0, f.Ye)(i),
                ],
            }),
        ],
    });
}
