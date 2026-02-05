n.d(t, { A: () => u }), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    a = n(397927),
    r = n(803316),
    s = n(307600),
    o = n(751775),
    d = n(652215),
    c = n(985018);
function u(e) {
    let t = (0, o.R)("use-save-voice-message-audio");
    return (0, l.Lt)(e.flags, d.pr7.IS_VOICE_MESSAGE) && t
        ? (0, i.jsx)(a.Drp, {
              id: "save-voice-message-audio",
              label: c.intl.string(c.t.vbAEaA),
              leadingAccessory: { type: "icon", icon: a.s3U },
              icon: a.s3U,
              action: () => {
                  let t = (0, r.XW)(e.attachments[0].url);
                  (0, s.h)({ href: t });
              },
          })
        : null;
}
