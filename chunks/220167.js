n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(930125),
    r = n(282108),
    s = n(985018);
function o(e, t) {
    let o = (0, r.Fg)(e),
        d = null != t && (0, r.qo)({ type: a.D.GenericMedia, media: t }, o);
    return null != t && d
        ? (0, i.jsx)(
              l.Drp,
              {
                  id: "report-image-false-positive",
                  label: s.intl.string(s.t.ZH7P2h),
                  action: () => {
                      (0, l.mMO)(async () => {
                          let { default: l } = await n(652442);
                          return (n) =>
                              (0, i.jsx)(l, { channelId: e.channel_id, messageId: e.id, mediaItemUrl: t.url, ...n });
                      });
                  },
                  leadingAccessory: { type: "icon", icon: l.DAq },
                  icon: l.DAq,
              },
              "report-image-false-positive",
          )
        : null;
}
