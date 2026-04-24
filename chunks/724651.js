n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(778492),
    s = n(534514),
    o = n(834730),
    c = n(939249),
    d = n(285796),
    u = n(857182);
n(938796);
var _ = n(665260),
    m = n(506774),
    h = n(228366),
    p = n(495544),
    g = n(734057),
    f = n(576705),
    x = n(287809),
    A = n(812930),
    C = n(652215);
let v = "ChannelFollowingBumpChannels",
    I = new Set(),
    E = new Set();
class b extends a.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        this.waitFor(p.default, g.A, f.A, x.default), (I = new Set(m.w.get(v)));
    }
    shouldShowBump(e) {
        return E.has(e);
    }
}
let y = new b(h.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || I.has(t)) return !1;
        let l = g.A.getChannel(t),
            a = x.default.getCurrentUser();
        if (
            !(
                null != l &&
                l.type === C.rbe.GUILD_ANNOUNCEMENT &&
                (0, A.A)(n) &&
                (null != a && n.author?.id === a.id
                    ? f.A.can(C.xBc.SEND_MESSAGES, l)
                    : f.A.can(C.xBc.MANAGE_MESSAGES, l)) &&
                !_.Lt(Number(n.flags), C.pr7.CROSSPOSTED)
            )
        )
            return !1;
        E.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        E.has(t.id) && _.Lt(Number(t.flags), C.pr7.CROSSPOSTED) && E.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        E.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        E.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        I.add(t), m.w.set(v, I), E.clear();
    },
});
var T = n(419056),
    j = n(985018),
    N = n(676544);
let S = (e) => {
    let { channelId: t, messageId: n } = e,
        _ = (0, a.bG)([y], () => y.shouldShowBump(n), [n]),
        m = l.useCallback(() => {
            u.A.dismissPublishBump(n), (0, T.A)(t, n);
        }, [t, n]),
        h = l.useCallback(() => {
            u.A.dismissPublishBump(n);
        }, [n]),
        p = l.useCallback(() => {
            u.A.permanentlyHidePublishBump(t);
        }, [t]);
    return _
        ? (0, i.jsxs)("div", {
              className: N.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: N.mp,
                      children: [
                          (0, i.jsx)(r.k, { size: "xs", color: "currentColor", className: N.Kk }),
                          (0, i.jsx)(s.D, {
                              variant: "heading-sm/normal",
                              className: N.dS,
                              children: j.intl.string(j.t.hasZoU),
                          }),
                          (0, i.jsx)(o.E, {
                              color: "text-brand",
                              className: N.mk,
                              variant: "text-sm/normal",
                              children: (0, i.jsx)(c.D, { onClick: m, children: j.intl.string(j.t.MFGE51) }),
                          }),
                          (0, i.jsx)(c.D, {
                              onClick: h,
                              children: (0, i.jsx)(d.a, { size: "xs", color: "currentColor", className: N.ut }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(o.E, {
                      color: "text-muted",
                      className: N.qx,
                      variant: "text-sm/normal",
                      children: (0, i.jsx)(c.D, { onClick: p, children: j.intl.string(j.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
