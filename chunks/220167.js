n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(477782),
    r = n(87221),
    s = n(930125),
    o = n(282108),
    d = n(985018);
function c(e, t) {
    let c = (0, o.Fg)(e),
        u = null != t && (0, o.qo)({ type: s.D.GenericMedia, media: t }, c);
    return null != t && u
        ? (0, i.jsx)(
              a.Dr,
              {
                  id: "report-image-false-positive",
                  label: d.intl.string(d.t.ZH7P2h),
                  action: () => {
                      (0, l.openModalLazy)(async () => {
                          let { default: l } = await n(652442);
                          return (n) =>
                              (0, i.jsx)(l, { channelId: e.channel_id, messageId: e.id, mediaItemUrl: t.url, ...n });
                      });
                  },
                  leadingAccessory: { type: "icon", icon: r.D },
                  icon: r.D,
              },
              "report-image-false-positive",
          )
        : null;
}
