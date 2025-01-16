n.d(t, {
    P: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(607070),
    a = n(70097),
    s = n(970731),
    o = n(111653),
    c = n(921944),
    d = n(388032),
    u = n(125071);
let h = (e) => {
    let { markAsDismissed: t } = e,
        n = (0, r.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, o.t)()
        ? (0, i.jsx)(s.ZP, {
              asset: (0, i.jsx)(a.Z, {
                  src: 'https://cdn.discordapp.com/attachments/1063579271815245944/1095089224421740695/CEC_Reporting_Animation_v03_EN_1x1_Music_1.mp4',
                  loop: !0,
                  autoPlay: !n,
                  className: u.video,
                  width: '100%'
              }),
              header: d.intl.string(d.t['4JBut7']),
              content: d.intl.string(d.t.Lpp6PD),
              buttonCTA: d.intl.string(d.t['NX+WJC']),
              onClick: (e) => {
                  e.stopPropagation(), t(c.L.UNKNOWN);
              },
              markAsDismissed: t,
              caretPosition: s.DF.BOTTOM_CENTER,
              headerClassName: u.header
          })
        : null;
};
