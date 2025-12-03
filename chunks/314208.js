n.d(t, { Z: () => S });
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(481060),
    o = n(99690),
    i = n(616780),
    c = n(471445),
    d = n(937889),
    u = n(739566),
    h = n(267128),
    g = n(884902),
    m = n(271383),
    f = n(306680),
    j = n(699516),
    v = n(594174),
    x = n(709054),
    p = n(51144),
    b = n(144140),
    Z = n(91159),
    w = n(217702),
    y = n(388032),
    O = n(712335);
function S(e) {
    return e.isActiveThread() ? (0, r.jsx)(N, { channel: e }) : (0, r.jsx)(C, { channel: e });
}
function N(e) {
    let { channel: t } = e,
        n = (0, a.e7)([b.Z], () => b.Z.getMostRecentMessage(t.id));
    return null == n
        ? (0, r.jsx)(P, { channel: t })
        : (0, r.jsx)(T, {
              channel: t,
              message: n,
          });
}
function P(e) {
    let { channel: t } = e,
        n = (0, Z.Ok)(t);
    return (0, r.jsxs)(s.Text, {
        className: O.subtext,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: [y.intl.string(y.t.Jmh6n9), "\xA0 \u2022 \xA0", (0, Z.Ye)(n)],
    });
}
function T(e) {
    let { channel: t, message: n } = e;
    (0, i.$)({ [t.guild_id]: [n.author.id] }, "ThreadBrowserRowSubtext");
    let c = (0, a.e7)([v.default], () => {
            var e;
            return null != (e = v.default.getUser(n.author.id)) ? e : n.author;
        }),
        { nick: m, colorString: f, colorStrings: p } = (0, u.ZP)(n),
        b = (0, g.X7)(t.guild_id, c.id, p),
        { isBlocked: y, isIgnored: S } = (0, a.cj)(
            [j.Z],
            () => ({
                isBlocked: j.Z.isBlockedForMessage(n),
                isIgnored: j.Z.isIgnoredForMessage(n),
            }),
            [n],
        ),
        N = l.useMemo(() => {
            let e = null != n.content && "" !== n.content ? (0, d.ZP)(n, { formatInline: !0 }).content : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: a,
                    leadingIcon: s,
                } = (0, h.f)(n, e, y, S, O.messageContent, {
                    trailingIconClass: O.messageContentTrailingIcon,
                    leadingIconClass: O.messageContentLeadingIcon,
                    iconSize: w.WW,
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [s, null != l ? l : (0, r.jsx)("span", { children: t }), a],
            });
        }, [n, y, S]);
    return (0, r.jsxs)(s.Text, {
        className: O.subtext,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: [
            (0, r.jsx)(o.Z, {
                className: O.avatar,
                user: c,
                size: s.EFr.SIZE_16,
            }),
            (0, r.jsx)(s.PUh, {
                name: m,
                colorString: f,
                colorStrings: b,
                className: O.authorName,
            }),
            ":\xA0",
            N,
            "\xA0 \u2022 \xA0",
            (0, Z.Ye)(x.default.extractTimestamp(n.id)),
        ],
    });
}
function C(e) {
    var t, n, l, d;
    let { channel: u } = e,
        h = (0, a.e7)([f.ZP], () => f.ZP.lastMessageId(u.id)),
        j =
            null == h
                ? new Date(
                      null != (n = null == (t = u.threadMetadata) ? void 0 : t.archiveTimestamp) ? n : Date.now(),
                  ).getTime()
                : x.default.extractTimestamp(h);
    (0, i.$)({ [u.guild_id]: [u.ownerId] }, "ThreadBrowserRowSubtext");
    let b = (0, a.e7)([v.default], () => v.default.getUser(u.ownerId)),
        w = (0, a.e7)([m.ZP], () => m.ZP.getMember(u.guild_id, u.ownerId)),
        S = (0, g.X7)(
            u.guild_id,
            null == b ? void 0 : b.id,
            null != (l = null == w ? void 0 : w.colorStrings) ? l : null,
        ),
        N = null != (d = (0, c.KS)(u)) ? d : s.or_;
    return (0, r.jsx)(s.Text, {
        className: O.subtext,
        variant: "text-sm/normal",
        color: "header-secondary",
        children:
            null == b
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", {
                              className: O.noAvatarIcon,
                              children: (0, r.jsx)(N, {
                                  width: 10,
                                  height: 10,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                          }),
                          y.intl.format(y.t["5Wk9+o"], { time: (0, Z.Ye)(j) }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.Z, {
                              className: O.avatar,
                              user: b,
                              size: s.EFr.SIZE_16,
                          }),
                          y.intl.format(y.t["GFDmd/"], {
                              authorHook(e, t) {
                                  var n, l;
                                  return (0, r.jsx)(
                                      s.PUh,
                                      {
                                          className: O.startedByName,
                                          colorString: null != (n = null == w ? void 0 : w.colorString) ? n : null,
                                          colorStrings: S,
                                          name: null != (l = null == w ? void 0 : w.nick) ? l : p.ZP.getName(b),
                                      },
                                      t,
                                  );
                              },
                          }),
                          (0, r.jsx)("span", {
                              className: O.bullet,
                              children: "\u2022",
                          }),
                          y.intl.format(y.t["5Wk9+o"], { time: (0, Z.Ye)(j) }),
                      ],
                  }),
    });
}
