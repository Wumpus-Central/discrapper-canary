n.d(t, { Z: () => P });
var r = n(200651),
    a = n(192379),
    s = n(442837),
    l = n(481060),
    i = n(99690),
    o = n(616780),
    c = n(471445),
    d = n(905405),
    u = n(937889),
    h = n(739566),
    m = n(267128),
    g = n(271383),
    f = n(306680),
    x = n(699516),
    j = n(594174),
    v = n(709054),
    Z = n(51144),
    N = n(144140),
    p = n(91159),
    b = n(217702),
    T = n(388032),
    y = n(915298);
function P(e) {
    return e.isActiveThread() ? (0, r.jsx)(w, { channel: e }) : (0, r.jsx)(I, { channel: e });
}
function w(e) {
    let { channel: t } = e,
        n = (0, s.e7)([N.Z], () => N.Z.getMostRecentMessage(t.id));
    return null == n
        ? (0, r.jsx)(O, { channel: t })
        : (0, r.jsx)(C, {
              channel: t,
              message: n
          });
}
function O(e) {
    let { channel: t } = e,
        n = (0, p.Ok)(t);
    return (0, r.jsxs)(l.Text, {
        className: y.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [T.NW.string(T.t.Jmh6n5), '\xA0 \u2022 \xA0', (0, p.Ye)(n)]
    });
}
function C(e) {
    let { channel: t, message: n } = e;
    (0, o.$)({ [t.guild_id]: [n.author.id] });
    let c = (0, s.e7)([j.default], () => {
            var e;
            return null != (e = j.default.getUser(n.author.id)) ? e : n.author;
        }),
        { nick: g, colorString: f } = (0, h.ZP)(n),
        { isBlocked: Z, isIgnored: N } = (0, s.cj)(
            [x.Z],
            () => ({
                isBlocked: x.Z.isBlockedForMessage(n),
                isIgnored: x.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        T = (0, d.p)(),
        P = a.useMemo(() => {
            let e =
                    null != n.content && '' !== n.content
                        ? (0, u.ZP)(n, {
                              formatInline: !0,
                              shouldFilterKeywords: T
                          }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: a,
                    trailingIcon: s,
                    leadingIcon: l
                } = (0, m.f)(n, e, Z, N, y.messageContent, {
                    trailingIconClass: y.messageContentTrailingIcon,
                    leadingIconClass: y.messageContentLeadingIcon,
                    iconSize: b.WW
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [l, null != a ? a : (0, r.jsx)('span', { children: t }), s]
            });
        }, [n, Z, N, T]);
    return (0, r.jsxs)(l.Text, {
        className: y.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [
            (0, r.jsx)(i.Z, {
                className: y.avatar,
                user: c,
                size: l.EFr.SIZE_16
            }),
            (0, r.jsx)(l.PUh, {
                name: g,
                color: f,
                className: y.authorName
            }),
            ':\xA0',
            P,
            '\xA0 \u2022 \xA0',
            (0, p.Ye)(v.default.extractTimestamp(n.id))
        ]
    });
}
function I(e) {
    var t, n, a;
    let { channel: d } = e,
        u = (0, s.e7)([f.ZP], () => f.ZP.lastMessageId(d.id)),
        h = null == u ? new Date(null != (n = null == (t = d.threadMetadata) ? void 0 : t.archiveTimestamp) ? n : Date.now()).getTime() : v.default.extractTimestamp(u);
    (0, o.$)({ [d.guild_id]: [d.ownerId] });
    let m = (0, s.e7)([j.default], () => j.default.getUser(d.ownerId)),
        x = (0, s.e7)([g.ZP], () => g.ZP.getMember(d.guild_id, d.ownerId)),
        N = null != (a = (0, c.KS)(d)) ? a : l.or_;
    return (0, r.jsx)(l.Text, {
        className: y.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children:
            null == m
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: y.noAvatarIcon,
                              children: (0, r.jsx)(N, {
                                  width: 10,
                                  height: 10,
                                  size: 'custom',
                                  color: 'currentColor'
                              })
                          }),
                          T.NW.format(T.t['5Wk9+v'], { time: (0, p.Ye)(h) })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(i.Z, {
                              className: y.avatar,
                              user: m,
                              size: l.EFr.SIZE_16
                          }),
                          T.NW.format(T.t.GFDmd3, {
                              authorHook(e, t) {
                                  var n, a;
                                  return (0, r.jsx)(
                                      l.PUh,
                                      {
                                          className: y.startedByName,
                                          color: null != (n = null == x ? void 0 : x.colorString) ? n : void 0,
                                          name: null != (a = null == x ? void 0 : x.nick) ? a : Z.ZP.getName(m)
                                      },
                                      t
                                  );
                              }
                          }),
                          (0, r.jsx)('span', {
                              className: y.bullet,
                              children: '\u2022'
                          }),
                          T.NW.format(T.t['5Wk9+v'], { time: (0, p.Ye)(h) })
                      ]
                  })
    });
}
