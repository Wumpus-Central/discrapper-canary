n.d(t, { Z: () => S });
var r = n(255367),
    l = n(73800),
    a = n(442837),
    s = n(481060),
    o = n(99690),
    i = n(616780),
    c = n(471445),
    d = n(905405),
    u = n(937889),
    h = n(739566),
    g = n(267128),
    m = n(884902),
    f = n(271383),
    j = n(306680),
    v = n(699516),
    x = n(594174),
    p = n(709054),
    b = n(51144),
    Z = n(144140),
    y = n(91159),
    O = n(217702),
    w = n(388032),
    N = n(915298);
function S(e) {
    return e.isActiveThread() ? (0, r.jsx)(P, { channel: e }) : (0, r.jsx)(I, { channel: e });
}
function P(e) {
    let { channel: t } = e,
        n = (0, a.e7)([Z.Z], () => Z.Z.getMostRecentMessage(t.id));
    return null == n
        ? (0, r.jsx)(T, { channel: t })
        : (0, r.jsx)(C, {
              channel: t,
              message: n
          });
}
function T(e) {
    let { channel: t } = e,
        n = (0, y.Ok)(t);
    return (0, r.jsxs)(s.Text, {
        className: N.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [w.intl.string(w.t.Jmh6n5), '\xA0 \u2022 \xA0', (0, y.Ye)(n)]
    });
}
function C(e) {
    let { channel: t, message: n } = e;
    (0, i.$)({ [t.guild_id]: [n.author.id] });
    let c = (0, a.e7)([x.default], () => {
            var e;
            return null != (e = x.default.getUser(n.author.id)) ? e : n.author;
        }),
        { nick: f, colorString: j, colorStrings: b } = (0, h.ZP)(n),
        Z = (0, m.X7)(t.guild_id, c.id, b),
        { isBlocked: w, isIgnored: S } = (0, a.cj)(
            [v.Z],
            () => ({
                isBlocked: v.Z.isBlockedForMessage(n),
                isIgnored: v.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        P = (0, d.p)(),
        T = l.useMemo(() => {
            let e =
                    null != n.content && '' !== n.content
                        ? (0, u.ZP)(n, {
                              formatInline: !0,
                              shouldFilterKeywords: P
                          }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: a,
                    leadingIcon: s
                } = (0, g.f)(n, e, w, S, N.messageContent, {
                    trailingIconClass: N.messageContentTrailingIcon,
                    leadingIconClass: N.messageContentLeadingIcon,
                    iconSize: O.WW
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [s, null != l ? l : (0, r.jsx)('span', { children: t }), a]
            });
        }, [n, w, S, P]);
    return (0, r.jsxs)(s.Text, {
        className: N.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [
            (0, r.jsx)(o.Z, {
                className: N.avatar,
                user: c,
                size: s.EFr.SIZE_16
            }),
            (0, r.jsx)(s.PUh, {
                name: f,
                colorString: j,
                colorStrings: Z,
                className: N.authorName
            }),
            ':\xA0',
            T,
            '\xA0 \u2022 \xA0',
            (0, y.Ye)(p.default.extractTimestamp(n.id))
        ]
    });
}
function I(e) {
    var t, n, l, d;
    let { channel: u } = e,
        h = (0, a.e7)([j.ZP], () => j.ZP.lastMessageId(u.id)),
        g = null == h ? new Date(null != (n = null == (t = u.threadMetadata) ? void 0 : t.archiveTimestamp) ? n : Date.now()).getTime() : p.default.extractTimestamp(h);
    (0, i.$)({ [u.guild_id]: [u.ownerId] });
    let v = (0, a.e7)([x.default], () => x.default.getUser(u.ownerId)),
        Z = (0, a.e7)([f.ZP], () => f.ZP.getMember(u.guild_id, u.ownerId)),
        O = (0, m.X7)(u.guild_id, null == v ? void 0 : v.id, null != (l = null == Z ? void 0 : Z.colorStrings) ? l : null),
        S = null != (d = (0, c.KS)(u)) ? d : s.or_;
    return (0, r.jsx)(s.Text, {
        className: N.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children:
            null == v
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: N.noAvatarIcon,
                              children: (0, r.jsx)(S, {
                                  width: 10,
                                  height: 10,
                                  size: 'custom',
                                  color: 'currentColor'
                              })
                          }),
                          w.intl.format(w.t['5Wk9+v'], { time: (0, y.Ye)(g) })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.Z, {
                              className: N.avatar,
                              user: v,
                              size: s.EFr.SIZE_16
                          }),
                          w.intl.format(w.t.GFDmd3, {
                              authorHook(e, t) {
                                  var n, l;
                                  return (0, r.jsx)(
                                      s.PUh,
                                      {
                                          className: N.startedByName,
                                          colorString: null != (n = null == Z ? void 0 : Z.colorString) ? n : null,
                                          colorStrings: O,
                                          name: null != (l = null == Z ? void 0 : Z.nick) ? l : b.ZP.getName(v)
                                      },
                                      t
                                  );
                              }
                          }),
                          (0, r.jsx)('span', {
                              className: N.bullet,
                              children: '\u2022'
                          }),
                          w.intl.format(w.t['5Wk9+v'], { time: (0, y.Ye)(g) })
                      ]
                  })
    });
}
