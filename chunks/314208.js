n.d(t, { Z: () => E });
var a = n(200651),
    l = n(192379),
    s = n(442837),
    r = n(481060),
    i = n(99690),
    o = n(616780),
    c = n(471445),
    d = n(905405),
    u = n(937889),
    h = n(739566),
    m = n(267128),
    g = n(271383),
    x = n(306680),
    f = n(699516),
    Z = n(594174),
    v = n(709054),
    j = n(51144),
    N = n(144140),
    T = n(91159),
    C = n(217702),
    I = n(388032),
    p = n(466218);
function E(e) {
    return e.isActiveThread() ? (0, a.jsx)(k, { channel: e }) : (0, a.jsx)(_, { channel: e });
}
function k(e) {
    let { channel: t } = e,
        n = (0, s.e7)([N.Z], () => N.Z.getMostRecentMessage(t.id));
    return null == n
        ? (0, a.jsx)(S, { channel: t })
        : (0, a.jsx)(P, {
              channel: t,
              message: n
          });
}
function S(e) {
    let { channel: t } = e,
        n = (0, T.Ok)(t);
    return (0, a.jsxs)(r.Text, {
        className: p.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [I.intl.string(I.t.Jmh6n5), '\xA0 \u2022 \xA0', (0, T.Ye)(n)]
    });
}
function P(e) {
    let { channel: t, message: n } = e;
    (0, o.$)({ [t.guild_id]: [n.author.id] });
    let c = (0, s.e7)([Z.default], () => {
            var e;
            return null !== (e = Z.default.getUser(n.author.id)) && void 0 !== e ? e : n.author;
        }),
        { nick: g, colorString: x } = (0, h.ZP)(n),
        { isBlocked: j, isIgnored: N } = (0, s.cj)(
            [f.Z],
            () => ({
                isBlocked: f.Z.isBlockedForMessage(n),
                isIgnored: f.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        I = (0, d.p)(),
        E = l.useMemo(() => {
            let e =
                    null != n.content && '' !== n.content
                        ? (0, u.ZP)(n, {
                              formatInline: !0,
                              shouldFilterKeywords: I
                          }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: s,
                    leadingIcon: r
                } = (0, m.f)(n, e, j, N, p.messageContent, {
                    trailingIconClass: p.messageContentTrailingIcon,
                    leadingIconClass: p.messageContentLeadingIcon,
                    iconSize: C.WW
                });
            return (0, a.jsxs)(a.Fragment, {
                children: [r, null != l ? l : (0, a.jsx)('span', { children: t }), s]
            });
        }, [n, j, N, I]);
    return (0, a.jsxs)(r.Text, {
        className: p.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [
            (0, a.jsx)(i.Z, {
                className: p.avatar,
                user: c,
                size: r.EFr.SIZE_16
            }),
            (0, a.jsx)(r.PUh, {
                name: g,
                color: x,
                className: p.authorName
            }),
            ':\xA0',
            E,
            '\xA0 \u2022 \xA0',
            (0, T.Ye)(v.default.extractTimestamp(n.id))
        ]
    });
}
function _(e) {
    var t, n, l;
    let { channel: d } = e,
        u = (0, s.e7)([x.ZP], () => x.ZP.lastMessageId(d.id)),
        h = null == u ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : v.default.extractTimestamp(u);
    (0, o.$)({ [d.guild_id]: [d.ownerId] });
    let m = (0, s.e7)([Z.default], () => Z.default.getUser(d.ownerId)),
        f = (0, s.e7)([g.ZP], () => g.ZP.getMember(d.guild_id, d.ownerId)),
        N = null !== (l = (0, c.KS)(d)) && void 0 !== l ? l : r.or_;
    return (0, a.jsx)(r.Text, {
        className: p.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children:
            null == m
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', {
                              className: p.noAvatarIcon,
                              children: (0, a.jsx)(N, {
                                  width: 10,
                                  height: 10,
                                  size: 'custom',
                                  color: 'currentColor'
                              })
                          }),
                          I.intl.format(I.t['5Wk9+v'], { time: (0, T.Ye)(h) })
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(i.Z, {
                              className: p.avatar,
                              user: m,
                              size: r.EFr.SIZE_16
                          }),
                          I.intl.format(I.t.GFDmd3, {
                              authorHook(e, t) {
                                  var n, l;
                                  return (0, a.jsx)(
                                      r.PUh,
                                      {
                                          className: p.startedByName,
                                          color: null !== (n = null == f ? void 0 : f.colorString) && void 0 !== n ? n : void 0,
                                          name: null !== (l = null == f ? void 0 : f.nick) && void 0 !== l ? l : j.ZP.getName(m)
                                      },
                                      t
                                  );
                              }
                          }),
                          (0, a.jsx)('span', {
                              className: p.bullet,
                              children: '\u2022'
                          }),
                          I.intl.format(I.t['5Wk9+v'], { time: (0, T.Ye)(h) })
                      ]
                  })
    });
}
