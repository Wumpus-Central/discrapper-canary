n.d(t, { Z: () => j }), n(388685), n(642613), n(583741);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(99690),
    u = n(359110),
    d = n(601070),
    h = n(91159),
    p = n(488131),
    f = n(496675),
    g = n(306680),
    m = n(594174),
    b = n(768581),
    O = n(709054),
    _ = n(981631),
    y = n(124368),
    C = n(388032),
    v = n(82393);
function j(e) {
    let { channel: t } = e,
        l = (0, s.Wu)([d.Z, g.ZP, f.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && f.Z.can(_.Plq.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = g.ZP.lastMessageId(e.id),
                        r = g.ZP.lastMessageId(t.id);
                    return O.default.compare(n, r);
                })
                .reverse()
                .value();
        }),
        c = t.isForumLikeChannel() ? 5 : 3;
    return (
        i.useEffect(() => {
            (0, h.q)();
        }, []),
        (0, r.jsxs)("div", {
            className: v.popout,
            children: [
                (0, r.jsx)(a.Text, {
                    className: v.title,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: t.isForumLikeChannel() ? C.intl.string(C.t.ioVdOz) : C.intl.string(C.t.VNYs2t),
                }),
                l
                    .slice(0, t.isForumLikeChannel() ? l.length : c)
                    .map((e) => (0, r.jsx)(E, { thread: e }, e.id))
                    .filter((e) => i.isValidElement(e))
                    .slice(0, c),
                (0, r.jsx)(a.P3F, {
                    className: v.more,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, u.Kh)(t.id)
                            : (0, a.ZDy)(async () => {
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
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: C.intl.string(C.t["4qdZ9/"]),
                    }),
                }),
            ],
        })
    );
}
function E(e) {
    let { thread: t } = e,
        n = (0, s.e7)([m.default], () => m.default.getUser(t.ownerId)),
        i = (0, h.Ok)(t);
    return (0, r.jsxs)(a.P3F, {
        className: v.row,
        onClick: (e) => {
            (0, p.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, y.on.POPOUT);
        },
        children: [
            null == n
                ? (0, r.jsx)("img", {
                      className: v.avatar,
                      src: b.ZP.getDefaultAvatarURL(void 0, void 0),
                      alt: "",
                  })
                : (0, r.jsx)(c.Z, {
                      className: v.avatar,
                      user: n,
                      size: a.EFr.SIZE_16,
                  }),
            (0, r.jsx)(a.Text, {
                className: v.name,
                variant: "text-sm/normal",
                color: "none",
                children: t.name,
            }),
            (0, r.jsxs)(a.Text, {
                className: v.timestamp,
                variant: "text-sm/normal",
                color: "none",
                children: [
                    (0, r.jsx)("span", {
                        className: v.bullet,
                        children: "\u2022",
                    }),
                    (0, h.Ye)(i),
                ],
            }),
        ],
    });
}
