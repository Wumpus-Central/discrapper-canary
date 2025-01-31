n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(247206),
    s = n(388032);
function r(e, t) {
    return null != t &&
        (0, a.KP)(
            {
                type: a.lJ.GenericMedia,
                media: t
            },
            (0, a.HH)(e)
        )
        ? (0, i.jsx)(
              l.sNh,
              {
                  id: 'report-image-false-positive',
                  label: s.intl.string(s.t.ZH7P2t),
                  action: () => {
                      (0, l.ZDy)(async () => {
                          let { default: l } = await n(788679);
                          return (n) =>
                              (0, i.jsx)(l, {
                                  channelId: e.channel_id,
                                  messageId: e.id,
                                  mediaItemUrl: t.url,
                                  ...n
                              });
                      });
                  },
                  icon: l.fFY
              },
              'report-image-false-positive'
          )
        : null;
}
