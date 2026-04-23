n.d(t, { A: () => g }), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    a = n(477782),
    r = n(32880),
    s = n(803316),
    o = n(307600),
    d = n(751775),
    c = n(652215),
    u = n(985018);
function g(e) {
    let t = (0, d.R)("use-save-voice-message-audio");
    return (0, l.Lt)(e.flags, c.pr7.IS_VOICE_MESSAGE) && t
        ? (0, i.jsx)(a.Dr, {
              id: "save-voice-message-audio",
              label: u.intl.string(u.t.vbAEaA),
              leadingAccessory: { type: "icon", icon: r.s },
              icon: r.s,
              action: () => {
                  let t = (0, s.XW)(e.attachments[0].url);
                  (0, o.h)({ href: t });
              },
          })
        : null;
}
