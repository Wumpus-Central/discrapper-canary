n.d(t, { Z: () => j }), n(953529), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(594174),
    s = n(311888),
    c = n(63063),
    d = n(5192),
    u = n(431328),
    x = n(501655),
    h = n(659972),
    g = n(981631),
    m = n(765305),
    b = n(388032),
    f = n(493748);
function p(e) {
    let { icon: t } = e;
    return (0, r.jsx)("div", {
        className: f.iconContainer,
        children: (0, r.jsx)(t, {
            color: "currentColor",
            size: "md",
        }),
    });
}
function v(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: f.listItemContainer,
        children: [
            (0, r.jsx)("div", {
                className: f.listItemIconContainer,
                children: t,
            }),
            (0, r.jsx)(a.Text, {
                className: f.listItemText,
                variant: "text-md/normal",
                color: "header-secondary",
                children: n,
            }),
        ],
    });
}
function _(e) {
    var t;
    let { guild: n, channel: l, stageData: a } = e,
        s = (0, i.e7)([o.default], () => o.default.getCurrentUser(), []),
        c = {
            id: "1337",
            guild_id: n.id,
            channel_id: l.id,
            topic: a.topic,
            description: a.description,
            privacy_level: null != (t = a.privacyLevel) ? t : m.j8.PUBLIC,
        },
        g = (0, u.w8)(l.id, x.pV.SPEAKER),
        b = (0, u.Rk)(l.id, x.pV.AUDIENCE),
        p = g.slice(0, 5);
    return (
        null ==
            p.find((e) => {
                var t;
                return (null == (t = e.user) ? void 0 : t.id) === (null == s ? void 0 : s.id);
            }) &&
            p.push({
                user: s,
                userNick: d.ZP.getName(n.id, l.id, s),
            }),
        (0, r.jsx)("div", {
            className: f.previewCardContainer,
            children: (0, r.jsx)("div", {
                className: f.previewCard,
                children: (0, r.jsx)(h.Z, {
                    guild: n,
                    stageInstance: c,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: h.k.UNSPECIFIED,
                    speakers: p,
                    speakerCount: g.length,
                    audienceCount: Math.max(1337, b),
                    channelName: l.name,
                }),
            }),
        })
    );
}
function j(e) {
    let { guild: t, channel: n, stageData: i, headerId: o, loading: d, onNext: u, onCancel: x, onBack: h } = e;
    return null == t || null == n || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_, {
                      guild: t,
                      channel: n,
                      stageData: i,
                  }),
                  (0, r.jsxs)(a.hzk, {
                      className: f.container,
                      children: [
                          (0, r.jsxs)("div", {
                              className: f.header,
                              children: [
                                  (0, r.jsx)(a.X6q, {
                                      id: o,
                                      className: f.__invalid_title,
                                      variant: "heading-xl/semibold",
                                      children: b.intl.string(b.t.GXpXTE),
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: f.subtitle,
                                      color: "header-secondary",
                                      variant: "text-sm/normal",
                                      children: b.intl.string(b.t.JaYMvL),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: f.__invalid_list,
                              children: [
                                  (0, r.jsx)(v, {
                                      icon: (0, r.jsx)(p, { icon: a.Jmo }),
                                      text: b.intl.string(b.t.u6oOcn),
                                  }),
                                  (0, r.jsx)(v, {
                                      icon: (0, r.jsx)(p, { icon: a.iFz }),
                                      text: b.intl.string(b.t.QC8ymZ),
                                  }),
                                  (0, r.jsx)(v, {
                                      icon: (0, r.jsx)(p, { icon: a.vdY }),
                                      text: b.intl.string(b.t.mgGOT0),
                                  }),
                                  (0, r.jsx)(v, {
                                      icon: (0, r.jsx)(s.Z, {
                                          className: f.badgeIconBackground,
                                          foreground: f.badgeIconForeground,
                                          width: 40,
                                          height: 40,
                                      }),
                                      text: b.intl.format(b.t.qLmNLC, {
                                          articleURL: c.Z.getArticleURL(g.BhN.STAGE_CHANNEL_GUIDELINES),
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsxs)(a.mzw, {
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "active",
                              text: b.intl.string(b.t.s8mM8P),
                              onClick: u,
                              loading: d,
                          }),
                          (0, r.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: f.cancelButton,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: "secondary",
                                  text: b.intl.string(b.t["ETE/oK"]),
                                  onClick: x,
                              }),
                          }),
                          (0, r.jsx)(l.zx, {
                              look: l.zx.Looks.LINK,
                              color: l.zx.Colors.LINK,
                              className: f.backButton,
                              onClick: h,
                              size: l.zx.Sizes.MIN,
                              children: b.intl.string(b.t["13/7kZ"]),
                          }),
                      ],
                  }),
              ],
          });
}
