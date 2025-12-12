n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    o = n(442837),
    a = n(28664),
    s = n(481060),
    l = n(358555),
    c = n(769654),
    u = n(706454),
    d = n(314897),
    f = n(271383),
    p = n(411198),
    _ = n(709054),
    m = n(997431),
    h = n(388032),
    g = n(212229);
function E(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        l = t.id,
        u = (0, o.e7)([f.ZP, d.default], () => {
            var e;
            return (null == (e = f.ZP.getMember(l, d.default.getId())) ? void 0 : e.joinedAt) != null;
        }, [l]),
        p = i.useCallback(
            (e) => {
                u && (e.stopPropagation(), (0, c.X)(t.id));
            },
            [u, t.id],
        );
    return !u || n
        ? (0, r.jsx)(a.u, {
              text: t.name,
              overflowOnly: !0,
              children: (0, r.jsx)(s.Heading, {
                  className: g.guildName,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, r.jsx)(s.P3F, {
              className: g.guildNameContainer,
              onClick: p,
              children: (0, r.jsx)(a.u, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, r.jsx)(s.Heading, {
                      className: g.guildName,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function b(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        a = (0, o.e7)([u.default], () => u.default.locale),
        c = (0, m.M)(_.default.extractTimestamp(t.id), a),
        d = i.useMemo(() => {
            let e = (0, p.$5)(t);
            return (0, r.jsx)(l.Z, {
                guild: e,
                isBannerVisible: !1,
            });
        }, [t]);
    return (0, r.jsxs)("div", {
        className: g.header,
        children: [
            (0, r.jsxs)("div", {
                className: g.nameContainer,
                children: [
                    (0, r.jsx)(E, {
                        profile: t,
                        disableGuildNameClick: n,
                    }),
                    d,
                ],
            }),
            (0, r.jsxs)("div", {
                className: g.members,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.memberCount,
                        children: [
                            (0, r.jsx)("div", { className: g.dotOnline }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.format(h.t["LC+S+m"], { membersOnline: t.onlineCount }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: g.memberCount,
                        children: [
                            (0, r.jsx)("div", { className: g.dot }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: h.intl.format(h.t.zRl6XR, { count: t.memberCount }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.established,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: h.intl.format(h.t.zb2Q56, { createdAtDate: c }),
                }),
            }),
        ],
    });
}
