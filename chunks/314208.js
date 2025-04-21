n.d(t, { Z: () => C });
var r = n(200651),
    a = n(192379),
    l = n(442837),
    s = n(481060),
    i = n(99690),
    o = n(616780),
    c = n(471445),
    d = n(905405),
    u = n(937889),
    h = n(739566),
    g = n(267128),
    m = n(884902),
    f = n(271383),
    x = n(306680),
    j = n(699516),
    v = n(594174),
    Z = n(709054),
    p = n(51144),
    b = n(144140),
    N = n(91159),
    T = n(217702),
    y = n(388032),
    P = n(915298);
function C(e) {
    return e.isActiveThread() ? (0, r.jsx)(I, { channel: e }) : (0, r.jsx)(S, { channel: e });
}
function I(e) {
    let { channel: t } = e,
        n = (0, l.e7)([b.Z], () => b.Z.getMostRecentMessage(t.id));
    return null == n
        ? (0, r.jsx)(O, { channel: t })
        : (0, r.jsx)(w, {
              channel: t,
              message: n
          });
}
function O(e) {
    let { channel: t } = e,
        n = (0, N.Ok)(t);
    return (0, r.jsxs)(s.Text, {
        className: P.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [y.intl.string(y.t.Jmh6n5), '\xA0 \u2022 \xA0', (0, N.Ye)(n)]
    });
}
function w(e) {
    let { channel: t, message: n } = e;
    (0, o.$)({ [t.guild_id]: [n.author.id] });
    let c = (0, l.e7)([v.default], () => {
            var e;
            return null != (e = v.default.getUser(n.author.id)) ? e : n.author;
        }),
        { nick: f, colorString: x, colorStrings: p } = (0, h.ZP)(n),
        b = (0, m.X)(t.guild_id, p),
        { isBlocked: y, isIgnored: C } = (0, l.cj)(
            [j.Z],
            () => ({
                isBlocked: j.Z.isBlockedForMessage(n),
                isIgnored: j.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        I = (0, d.p)(),
        O = a.useMemo(() => {
            let e =
                    null != n.content && '' !== n.content
                        ? (0, u.ZP)(n, {
                              formatInline: !0,
                              shouldFilterKeywords: I
                          }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: a,
                    trailingIcon: l,
                    leadingIcon: s
                } = (0, g.f)(n, e, y, C, P.messageContent, {
                    trailingIconClass: P.messageContentTrailingIcon,
                    leadingIconClass: P.messageContentLeadingIcon,
                    iconSize: T.WW
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [s, null != a ? a : (0, r.jsx)('span', { children: t }), l]
            });
        }, [n, y, C, I]);
    return (0, r.jsxs)(s.Text, {
        className: P.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [
            (0, r.jsx)(i.Z, {
                className: P.avatar,
                user: c,
                size: s.EFr.SIZE_16
            }),
            (0, r.jsx)(s.PUh, {
                name: f,
                color: x,
                roleColors: b,
                className: P.authorName
            }),
            ':\xA0',
            O,
            '\xA0 \u2022 \xA0',
            (0, N.Ye)(Z.default.extractTimestamp(n.id))
        ]
    });
}
function S(e) {
    var t, n, a;
    let { channel: d } = e,
        u = (0, l.e7)([x.ZP], () => x.ZP.lastMessageId(d.id)),
        h = null == u ? new Date(null != (n = null == (t = d.threadMetadata) ? void 0 : t.archiveTimestamp) ? n : Date.now()).getTime() : Z.default.extractTimestamp(u);
    (0, o.$)({ [d.guild_id]: [d.ownerId] });
    let g = (0, l.e7)([v.default], () => v.default.getUser(d.ownerId)),
        j = (0, l.e7)([f.ZP], () => f.ZP.getMember(d.guild_id, d.ownerId)),
        b = (0, m.X)(d.guild_id, null == j ? void 0 : j.colorStrings),
        T = null != (a = (0, c.KS)(d)) ? a : s.or_;
    return (0, r.jsx)(s.Text, {
        className: P.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children:
            null == g
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: P.noAvatarIcon,
                              children: (0, r.jsx)(T, {
                                  width: 10,
                                  height: 10,
                                  size: 'custom',
                                  color: 'currentColor'
                              })
                          }),
                          y.intl.format(y.t['5Wk9+v'], { time: (0, N.Ye)(h) })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(i.Z, {
                              className: P.avatar,
                              user: g,
                              size: s.EFr.SIZE_16
                          }),
                          y.intl.format(y.t.GFDmd3, {
                              authorHook(e, t) {
                                  var n, a;
                                  return (0, r.jsx)(
                                      s.PUh,
                                      {
                                          className: P.startedByName,
                                          color: null != (n = null == j ? void 0 : j.colorString) ? n : void 0,
                                          roleColors: b,
                                          name: null != (a = null == j ? void 0 : j.nick) ? a : p.ZP.getName(g)
                                      },
                                      t
                                  );
                              }
                          }),
                          (0, r.jsx)('span', {
                              className: P.bullet,
                              children: '\u2022'
                          }),
                          y.intl.format(y.t['5Wk9+v'], { time: (0, N.Ye)(h) })
                      ]
                  })
    });
}
