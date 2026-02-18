"use strict";
n.d(t, { A: () => p });
var l = n(627968);
n(64700);
var s = n(397927),
    i = n(964486),
    r = n(58149),
    a = n(652176),
    o = n(448290),
    u = n(734057),
    c = n(309010),
    d = n(954571),
    m = n(652215),
    h = n(985018),
    g = n(360158);
let p = function (e) {
    let { guild: t, message: n, onClose: p } = e,
        A = u.A.getChannel(c.A.getChannelId(t.id));
    return ((0, i.Ay)(() => {
        d.default.track(m.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: t.id, channel_id: A?.id });
    }),
    null == A)
        ? null
        : (0, l.jsx)(a.Uq, {
              className: g.cc,
              children: (0, l.jsxs)("div", {
                  className: g.jC,
                  children: [
                      (0, l.jsxs)("div", {
                          className: g.rb,
                          children: [
                              (0, l.jsx)("div", {
                                  className: g.zc,
                                  children: (0, l.jsx)(s.NVf, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 40,
                                      height: 40,
                                  }),
                              }),
                              (0, l.jsxs)("div", {
                                  children: [
                                      (0, l.jsx)(s.Heading, {
                                          variant: "heading-md/semibold",
                                          className: g.wx,
                                          children: h.intl.string(h.t["v/OYd2"]),
                                      }),
                                      (0, l.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          children: h.intl.string(h.t.Z85MlD),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: g.lI,
                          children: (0, l.jsx)(s.Button, {
                              variant: "primary",
                              size: "sm",
                              text: h.intl.format(h.t["+xsVS6"], { username: n.author.username }),
                              fullWidth: !0,
                              onClick: () => {
                                  r.Ay.trackWithMetadata(m.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                      target_user_id: n.author.id,
                                  }),
                                      p(),
                                      (0, o.C)(n.author, A.id);
                              },
                          }),
                      }),
                  ],
              }),
          });
};
