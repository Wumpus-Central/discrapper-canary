n.d(t, { n: () => g });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(435371),
    s = n(732955),
    o = n(344731),
    l = n(576705),
    c = n(203982),
    u = n(184761),
    d = n(355622),
    f = n(545428),
    p = n(652215),
    _ = n(985018),
    h = n(111314);
let m = [d.oU.NORMAL, d.oU.SIDEBAR, d.oU.CREATE_FORUM_POST];
function g(e) {
    let { disabled: t, channel: n, inputType: d } = e,
        g = (0, u.p)(o.T);
    return (0, i.bG)(
        [l.A],
        () => n.isPrivate() || (l.A.can(p.xBc.ATTACH_FILES, n) && l.A.can(p.xBc.SEND_MESSAGES, n)),
    ) && m.includes(d)
        ? (0, r.jsx)(a.m_, {
              shouldShow: !t && null != g,
              keyboardShortcut: g,
              text: _.intl.string(_.t.nzoF5p),
              children: (0, r.jsx)(f.A, {
                  disabled: t,
                  isActive: !1,
                  className: h.x6,
                  "aria-label": _.intl.string(_.t.nzoF5p),
                  onClick: () => {
                      c._.dispatch(p.jej.UPLOAD_FILE, { channelId: n.id });
                  },
                  children: (0, r.jsx)(s.xfq, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
