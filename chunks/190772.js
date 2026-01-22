n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(730134),
    i = n(80682),
    c = n(713654),
    u = n(465364),
    d = n(763754),
    h = n(448368),
    g = n(967144),
    m = n(696451),
    f = n(222823),
    j = n(994500),
    x = n(287809),
    v = n(661191),
    b = n(427262),
    A = n(456874),
    p = n(707539),
    y = n(838541),
    w = n(985018),
    O = n(106259);
function S(e) {
    return e.isActiveThread() ? (0, r.jsx)(T, { channel: e }) : (0, r.jsx)(C, { channel: e });
}
function T(e) {
    let { channel: t } = e,
        n = (0, a.bG)([A.A], () => A.A.getMostRecentMessage(t.id));
    return null == n
        ? (0, r.jsx)(N, { channel: t })
        : (0, r.jsx)(k, {
              channel: t,
              message: n,
          });
}
function N(e) {
    let { channel: t } = e,
        n = (0, p.JO)(t);
    return (0, r.jsxs)(s.Text, {
        className: O.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [w.intl.string(w.t.Jmh6n9), "\xA0 \u2022 \xA0", (0, p.aK)(n)],
    });
}
function k(e) {
    let { channel: t, message: n } = e;
    (0, i.E)({ [t.guild_id]: [n.author.id] }, "ThreadBrowserRowSubtext");
    let c = (0, a.bG)([x.default], () => {
            var e;
            return null != (e = x.default.getUser(n.author.id)) ? e : n.author;
        }),
        { nick: m, colorString: f, colorStrings: b } = (0, d.Ay)(n),
        A = (0, g.gn)(t.guild_id, c.id, b),
        { isBlocked: w, isIgnored: S } = (0, a.cf)(
            [j.A],
            () => ({
                isBlocked: j.A.isBlockedForMessage(n),
                isIgnored: j.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        T = l.useMemo(() => {
            let e = null != n.content && "" !== n.content ? (0, u.Ay)(n, { formatInline: !0 }).content : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: a,
                    leadingIcon: s,
                } = (0, h.o)(n, e, w, S, O.BK, {
                    trailingIconClass: O.sl,
                    leadingIconClass: O.aG,
                    iconSize: y.eJ,
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [s, null != l ? l : (0, r.jsx)("span", { children: t }), a],
            });
        }, [n, w, S]);
    return (0, r.jsxs)(s.Text, {
        className: O.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, r.jsx)(o.A, {
                className: O.my,
                user: c,
                size: s._3J.SIZE_16,
            }),
            (0, r.jsx)(s.gyj, {
                name: m,
                colorString: f,
                colorStrings: A,
                className: O.fh,
            }),
            ":\xA0",
            T,
            "\xA0 \u2022 \xA0",
            (0, p.aK)(v.default.extractTimestamp(n.id)),
        ],
    });
}
function C(e) {
    var t, n, l, u;
    let { channel: d } = e,
        h = (0, a.bG)([f.Ay], () => f.Ay.lastMessageId(d.id)),
        j =
            null == h
                ? new Date(
                      null != (t = null == (u = d.threadMetadata) ? void 0 : u.archiveTimestamp) ? t : Date.now(),
                  ).getTime()
                : v.default.extractTimestamp(h);
    (0, i.E)({ [d.guild_id]: [d.ownerId] }, "ThreadBrowserRowSubtext");
    let A = (0, a.bG)([x.default], () => x.default.getUser(d.ownerId)),
        y = (0, a.bG)([m.Ay], () => m.Ay.getMember(d.guild_id, d.ownerId)),
        S = (0, g.gn)(
            d.guild_id,
            null == A ? void 0 : A.id,
            null != (n = null == y ? void 0 : y.colorStrings) ? n : null,
        ),
        T = null != (l = (0, c.gU)(d)) ? l : s.ysw;
    return (0, r.jsx)(s.Text, {
        className: O.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == A
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("div", {
                              className: O.A2,
                              children: (0, r.jsx)(T, {
                                  width: 10,
                                  height: 10,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                          }),
                          w.intl.format(w.t["5Wk9+o"], { time: (0, p.aK)(j) }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.A, {
                              className: O.my,
                              user: A,
                              size: s._3J.SIZE_16,
                          }),
                          w.intl.format(w.t["GFDmd/"], {
                              authorHook(e, t) {
                                  var n, l;
                                  return (0, r.jsx)(
                                      s.gyj,
                                      {
                                          className: O.eS,
                                          colorString: null != (n = null == y ? void 0 : y.colorString) ? n : null,
                                          colorStrings: S,
                                          name: null != (l = null == y ? void 0 : y.nick) ? l : b.Ay.getName(A),
                                      },
                                      t,
                                  );
                              },
                          }),
                          (0, r.jsx)("span", {
                              className: O.xE,
                              children: "\u2022",
                          }),
                          w.intl.format(w.t["5Wk9+o"], { time: (0, p.aK)(j) }),
                      ],
                  }),
    });
}
