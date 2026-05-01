n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(778492),
    r = n(534514),
    o = n(834730),
    d = n(939249),
    c = n(285796),
    u = n(857182);
n(938796);
var m = n(665260),
    h = n(506774),
    g = n(228366),
    A = n(495544),
    p = n(734057),
    x = n(576705),
    f = n(287809),
    C = n(812930),
    E = n(652215);
let v = "ChannelFollowingBumpChannels",
    I = new Set(),
    _ = new Set();
class j extends s.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(A.default, p.A, x.A, f.default), (I = new Set(h.w.get(v)));
    }
    shouldShowBump(e) {
        return _.has(e);
    }
}
let N = new j(g.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || I.has(t)) return !1;
        let l = p.A.getChannel(t),
            s = f.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === E.rbe.GUILD_ANNOUNCEMENT &&
                (0, C.A)(n) &&
                (null != s && n.author?.id === s.id
                    ? x.A.can(E.xBc.SEND_MESSAGES, l)
                    : x.A.can(E.xBc.MANAGE_MESSAGES, l)) &&
                !m.Lt(Number(n.flags), E.pr7.CROSSPOSTED)
            )
        )
            return !1;
        _.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        _.has(t.id) && m.Lt(Number(t.flags), E.pr7.CROSSPOSTED) && _.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        _.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        _.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        I.add(t), h.w.set(v, I), _.clear();
    },
});
var T = n(419056),
    y = n(985018),
    S = n(676544);
let b = (e) => {
    let { channelId: t, messageId: n } = e,
        m = (0, s.bG)([N], () => N.shouldShowBump(n), [n]),
        h = l.useCallback(() => {
            u.A.dismissPublishBump(n), (0, T.A)(t, n);
        }, [t, n]),
        g = l.useCallback(() => {
            u.A.dismissPublishBump(n);
        }, [n]),
        A = l.useCallback(() => {
            u.A.permanentlyHidePublishBump(t);
        }, [t]);
    return m
        ? (0, i.jsxs)("div", {
              className: S.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: S.mp,
                      children: [
                          (0, i.jsx)(a.k, { size: "xs", color: "currentColor", className: S.Kk }),
                          (0, i.jsx)(r.D, {
                              variant: "heading-sm/normal",
                              className: S.dS,
                              children: y.intl.string(y.t.hasZoU),
                          }),
                          (0, i.jsx)(o.E, {
                              color: "text-brand",
                              className: S.mk,
                              variant: "text-sm/normal",
                              children: (0, i.jsx)(d.D, { onClick: h, children: y.intl.string(y.t.MFGE51) }),
                          }),
                          (0, i.jsx)(d.D, {
                              onClick: g,
                              children: (0, i.jsx)(c.a, { size: "xs", color: "currentColor", className: S.ut }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(o.E, {
                      color: "text-muted",
                      className: S.qx,
                      variant: "text-sm/normal",
                      children: (0, i.jsx)(d.D, { onClick: A, children: y.intl.string(y.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
