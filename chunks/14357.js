n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(399606),
    s = n(607070),
    l = n(70097),
    a = n(970731),
    o = n(19199),
    c = n(921944),
    d = n(388032),
    u = n(452209);
let m = (e) => {
    let { markAsDismissed: t } = e,
        n = (0, r.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, o.D)()
        ? (0, i.jsx)(a.ZP, {
              asset: (0, i.jsx)(l.Z, {
                  className: u.video,
                  src: 'https://cdn.discordapp.com/attachments/1067194967979733053/1067195118026772480/Safety_MUTE_Coachmark.mp4',
                  loop: !0,
                  autoPlay: !n,
                  width: '100%'
              }),
              header: d.intl.string(d.t.ajEMl5),
              content: d.intl.string(d.t.xmrJWl),
              buttonCTA: d.intl.string(d.t['NX+WJC']),
              className: u.__invalid_coachmark,
              onClick: (e) => {
                  e.stopPropagation(), t(c.L.UNKNOWN);
              },
              markAsDismissed: t,
              caretPosition: a.DF.BOTTOM_CENTER,
              headerClassName: u.header
          })
        : null;
};
