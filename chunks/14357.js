n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(607070),
    a = n(70097),
    s = n(970731),
    o = n(19199),
    d = n(921944),
    c = n(388032),
    u = n(718458);
let h = (e) => {
    let { markAsDismissed: t } = e,
        n = (0, l.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, o.D)()
        ? (0, i.jsx)(s.ZP, {
              asset: (0, i.jsx)(a.Z, {
                  className: u.video,
                  src: 'https://cdn.discordapp.com/attachments/1067194967979733053/1067195118026772480/Safety_MUTE_Coachmark.mp4',
                  loop: !0,
                  autoPlay: !n,
                  width: '100%'
              }),
              header: c.intl.string(c.t.ajEMl5),
              content: c.intl.string(c.t.xmrJWl),
              buttonCTA: c.intl.string(c.t['NX+WJC']),
              className: u.__invalid_coachmark,
              onClick: (e) => {
                  e.stopPropagation(), t(d.L.UNKNOWN);
              },
              markAsDismissed: t,
              caretPosition: s.DF.BOTTOM_CENTER,
              headerClassName: u.header
          })
        : null;
};
