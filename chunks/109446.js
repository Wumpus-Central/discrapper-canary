n.d(t, { Z: () => x }), n(47120), n(230036), n(978209);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(99690),
    u = n(359110),
    d = n(601070),
    p = n(91159),
    h = n(488131),
    f = n(496675),
    g = n(306680),
    m = n(594174),
    b = n(768581),
    y = n(709054),
    _ = n(981631),
    v = n(124368),
    O = n(388032),
    j = n(571658);
function x(e) {
    let { channel: t } = e,
        l = (0, a.Wu)([d.Z, g.ZP, f.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && f.Z.can(_.Plq.VIEW_CHANNEL, t))
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
            (0, p.q)();
        }, []),
        (0, r.jsxs)('div', {
            className: j.popout,
            children: [
                (0, r.jsx)(s.Text, {
                    className: j.title,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: t.isForumLikeChannel() ? O.NW.string(O.t.ioVdOz) : O.NW.string(O.t.VNYs2t)
                }),
                l
                    .slice(0, t.isForumLikeChannel() ? l.length : c)
                    .map((e) => (0, r.jsx)(C, { thread: e }, e.id))
                    .filter((e) => i.isValidElement(e))
                    .slice(0, c),
                (0, r.jsx)(s.P3F, {
                    className: j.more,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, u.Kh)(t.id)
                            : (0, s.ZDy)(async () => {
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
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: O.NW.string(O.t['4qdZ9/'])
                    })
                })
            ]
        })
    );
}
function C(e) {
    let { thread: t } = e,
        n = (0, a.e7)([m.default], () => m.default.getUser(t.ownerId)),
        i = (0, p.Ok)(t);
    return (0, r.jsxs)(s.P3F, {
        className: j.row,
        onClick: (e) => {
            (0, h.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, v.on.POPOUT);
        },
        children: [
            null == n
                ? (0, r.jsx)('img', {
                      className: j.avatar,
                      src: b.ZP.getDefaultAvatarURL(void 0, void 0),
                      alt: ''
                  })
                : (0, r.jsx)(c.Z, {
                      className: j.avatar,
                      user: n,
                      size: s.EFr.SIZE_16
                  }),
            (0, r.jsx)(s.Text, {
                className: j.name,
                variant: 'text-sm/normal',
                color: 'none',
                children: t.name
            }),
            (0, r.jsxs)(s.Text, {
                className: j.timestamp,
                variant: 'text-sm/normal',
                color: 'none',
                children: [
                    (0, r.jsx)('span', {
                        className: j.bullet,
                        children: '\u2022'
                    }),
                    (0, p.Ye)(i)
                ]
            })
        ]
    });
}
