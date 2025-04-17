n.d(t, { Z: () => S }), n(388685), n(642613), n(583741);
var r = n(200651),
    i = n(192379),
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
    _ = n(709054),
    y = n(981631),
    v = n(124368),
    O = n(388032),
    C = n(571658);
function S(e) {
    let { channel: t } = e,
        l = (0, s.Wu)([d.Z, g.ZP, f.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && f.Z.can(y.Plq.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = g.ZP.lastMessageId(e.id),
                        r = g.ZP.lastMessageId(t.id);
                    return _.default.compare(n, r);
                })
                .reverse()
                .value();
        }),
        c = t.isForumLikeChannel() ? 5 : 3;
    return (
        i.useEffect(() => {
            (0, h.q)();
        }, []),
        (0, r.jsxs)('div', {
            className: C.popout,
            children: [
                (0, r.jsx)(a.Text, {
                    className: C.title,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: t.isForumLikeChannel() ? O.NW.string(O.t.ioVdOz) : O.NW.string(O.t.VNYs2t)
                }),
                l
                    .slice(0, t.isForumLikeChannel() ? l.length : c)
                    .map((e) => (0, r.jsx)(j, { thread: e }, e.id))
                    .filter((e) => i.isValidElement(e))
                    .slice(0, c),
                (0, r.jsx)(a.P3F, {
                    className: C.more,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, u.Kh)(t.id)
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e('36970').then(n.bind(n, 223901));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  'function' == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          })
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          (r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (e[t] = r);
                                                      });
                                              }
                                              return e;
                                          })({ channel: t }, n)
                                      );
                              });
                    },
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: O.NW.string(O.t['4qdZ9/'])
                    })
                })
            ]
        })
    );
}
function j(e) {
    let { thread: t } = e,
        n = (0, s.e7)([m.default], () => m.default.getUser(t.ownerId)),
        i = (0, h.Ok)(t);
    return (0, r.jsxs)(a.P3F, {
        className: C.row,
        onClick: (e) => {
            (0, p.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, v.on.POPOUT);
        },
        children: [
            null == n
                ? (0, r.jsx)('img', {
                      className: C.avatar,
                      src: b.ZP.getDefaultAvatarURL(void 0, void 0),
                      alt: ''
                  })
                : (0, r.jsx)(c.Z, {
                      className: C.avatar,
                      user: n,
                      size: a.EFr.SIZE_16
                  }),
            (0, r.jsx)(a.Text, {
                className: C.name,
                variant: 'text-sm/normal',
                color: 'none',
                children: t.name
            }),
            (0, r.jsxs)(a.Text, {
                className: C.timestamp,
                variant: 'text-sm/normal',
                color: 'none',
                children: [
                    (0, r.jsx)('span', {
                        className: C.bullet,
                        children: '\u2022'
                    }),
                    (0, h.Ye)(i)
                ]
            })
        ]
    });
}
