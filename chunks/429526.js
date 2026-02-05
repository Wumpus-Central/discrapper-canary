"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(417597),
    a = n(397927),
    o = n(374084),
    d = n(808728),
    c = n(71393),
    u = n(488926),
    m = n(199940),
    g = n(132514),
    x = n(139497),
    h = n(652215),
    _ = n(985018),
    A = n(659233);
let p = [],
    f = function (e) {
        let { guildId: t } = e,
            n = (0, r.bG)([c.A], () => c.A.getGuild(t)),
            f = (0, r.yK)([g.A], () => {
                let e = g.A.getSettings();
                return e.resourceChannels?.map((e) => e.channelId) ?? p;
            }),
            j = (0, r.yK)([g.A], () => g.A.getDismissedSuggestedChannelIds(t)),
            N = (0, r.bG)([d.Ay], () => d.Ay.getSelectableChannels(t)),
            E = s.useMemo(
                () =>
                    (0, l.chain)(N)
                        .filter(
                            (e) =>
                                e.channel.type === h.rbe.GUILD_TEXT &&
                                e.channel.id !== n?.rulesChannelId &&
                                !j.includes(e.channel.id) &&
                                !f.includes(e.channel.id) &&
                                u.MJ(h.xBc.VIEW_CHANNEL, e.channel) &&
                                !u.MJ(h.xBc.SEND_MESSAGES, e.channel),
                        )
                        .take(5)
                        .value(),
                [N, j, n?.rulesChannelId, f],
            ),
            b = s.useCallback(() => {
                let e = E.map((e) => e.channel.id);
                (0, m.kO)(t, e);
            }, [t, E]);
        return E.length <= 0 || f.length >= o.CW
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: A.rS,
                          children: [
                              (0, i.jsx)(a.Text, { variant: "text-md/semibold", children: _.intl.string(_.t.WThgAR) }),
                              (0, i.jsxs)("div", {
                                  className: A.vn,
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: _.intl.string(_.t.YtNI8C),
                                      }),
                                      (0, i.jsxs)(a.DUT, {
                                          className: A.iC,
                                          onClick: b,
                                          children: [
                                              (0, i.jsx)(a.A9s, { size: "md", color: "currentColor", className: A.An }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-brand",
                                                  children: _.intl.string(_.t.aLqZTl),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: A.cF,
                                  children: E.map((e, t) =>
                                      (0, i.jsx)(x.A, { channel: e.channel, end: t < E.length - 1 }, e.channel.id),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: A.DY }),
                  ],
              });
    };
