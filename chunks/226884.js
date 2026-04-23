"use strict";
n.d(t, { A: () => f });
var l = n(627968);
n(64700);
var a = n(506803),
    s = n(534514),
    i = n(834730),
    r = n(821609),
    o = n(964486),
    c = n(58149),
    u = n(652176),
    d = n(448290),
    m = n(734057),
    g = n(309010),
    h = n(954571),
    p = n(652215),
    A = n(985018),
    _ = n(828567);
let f = function (e) {
    let { guild: t, message: n, onClose: f } = e,
        v = m.A.getChannel(g.A.getChannelId(t.id));
    return ((0, o.Ay)(() => {
        h.default.track(p.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: t.id, channel_id: v?.id });
    }),
    null == v)
        ? null
        : (0, l.jsx)(u.Uq, {
              className: _.cc,
              children: (0, l.jsxs)("div", {
                  className: _.jC,
                  children: [
                      (0, l.jsxs)("div", {
                          className: _.rb,
                          children: [
                              (0, l.jsx)("div", {
                                  className: _.zc,
                                  children: (0, l.jsx)(a.N, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 40,
                                      height: 40,
                                  }),
                              }),
                              (0, l.jsxs)("div", {
                                  children: [
                                      (0, l.jsx)(s.D, {
                                          variant: "heading-md/semibold",
                                          className: _.wx,
                                          children: A.intl.string(A.t["v/OYd2"]),
                                      }),
                                      (0, l.jsx)(i.E, {
                                          variant: "text-sm/normal",
                                          children: A.intl.string(A.t.Z85MlD),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: _.lI,
                          children: (0, l.jsx)(r.$, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.format(A.t["+xsVS6"], { username: n.author.username }),
                              fullWidth: !0,
                              onClick: () => {
                                  c.Ay.trackWithMetadata(p.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                      target_user_id: n.author.id,
                                  }),
                                      f(),
                                      (0, d.C)(n.author, v.id);
                              },
                          }),
                      }),
                  ],
              }),
          });
};
