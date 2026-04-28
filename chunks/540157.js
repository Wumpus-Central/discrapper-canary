n.d(t, { A: () => v });
var l = n(627968);
n(64700);
var i = n(17928),
    s = n(661531),
    a = n(192308),
    r = n(81466),
    o = n(931991),
    c = n(734057),
    u = n(228366),
    d = n(988794);
let A = {};
class E extends i.Ay.PersistedStore {
    static displayName = "EventBannerStore";
    static persistKey = "EventBanner";
    initialize(e) {
        null != e && (A = e.dismissedEventIds ?? {});
    }
    isEventDismissed(e) {
        return null != A[e];
    }
    getState() {
        return { dismissedEventIds: A };
    }
}
let m = new E(u.h, {
    EVENT_BANNER_DISMISS: function (e) {
        let { eventId: t } = e;
        A = { ...A, [t]: !0 };
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        if ((t.status !== d.XG.CANCELED && t.status !== d.XG.COMPLETED) || null == A[t.id]) return !1;
        let n = { ...A };
        delete n[t.id], (A = n);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        if (null == A[t.id]) return !1;
        let n = { ...A };
        delete n[t.id], (A = n);
    },
});
var h = n(707592),
    C = n(698441),
    g = n(935159),
    I = n(508654),
    p = n(974930),
    x = n(47868),
    T = n(985018),
    _ = n(282741);
function v(e) {
    let { channelId: t, showDismiss: u = !0 } = e,
        d = (0, i.bG)([c.A], () => c.A.getChannel(t), [t]),
        A = (0, I.RO)(t),
        E = null != (0, I.Qs)(t),
        { canManageGuildEvent: v } = (0, o.nr)(d),
        N = (0, i.bG)([m], () => A.filter((e) => !m.isEventDismissed(e.id)), [A]),
        f = (0, i.cf)([C.Ay], () => N.reduce((e, t) => ((e[t.id] = C.Ay.getUserCount(t.id, (0, p.G3)(t))), e), {}), [
            N,
        ]);
    return N.length < 1 || E
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: N.map((e) =>
                  (0, l.jsx)(
                      x.A,
                      {
                          icon: (0, l.jsx)(r.C, { size: "custom", color: "currentColor", height: 20, width: 20 }),
                          color: s.A.unsafe_rawColors.GREEN_360.css,
                          title: T.intl.formatToPlainString(v(e) ? T.t["1vGXqM"] : T.t.xMJyla, { eventName: e.name }),
                          description: T.intl.formatToPlainString(T.t.PTebCR, {
                              startTime: (0, p.CC)(e.scheduled_start_time).startDateTimeString,
                          }),
                          onClick: () => {
                              v(e)
                                  ? (0, a.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("44588"),
                                            n.e("70644"),
                                            n.e("49347"),
                                            n.e("68248"),
                                            n.e("69772"),
                                        ]).then(n.bind(n, 914119));
                                        return (n) => (0, l.jsx)(t, { ...n, event: e });
                                    })
                                  : (0, h.uR)({ eventId: e.id });
                          },
                          onDismiss: u
                              ? () => {
                                    var t;
                                    return (t = e.id), void (0, g.Nt)(t);
                                }
                              : void 0,
                          userCount: f[e.id],
                          className: _.f,
                      },
                      e.id,
                  ),
              ),
          });
}
