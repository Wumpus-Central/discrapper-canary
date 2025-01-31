n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(25209),
    s = n(794295),
    o = n(865427),
    l = n(853425),
    u = n(49012),
    c = n(773352);
let d = 1024;
function f(e) {
    return {
        react(t, n, f) {
            if (e.enableBuildOverrides && (0, o._G)(t.target)) return (0, i.jsx)(r.Fragment, { children: (0, i.jsx)(l.Z, { url: t.target }, t.target) }, f.key);
            let _ = n(t.content, f),
                p = 'string' == typeof t.title && 0 !== t.title.length ? t.title : (0, a.Rp)(t.content),
                h = () => (0, c.r)(t),
                m = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, u.q)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: f.messageId,
                              channelId: f.channelId
                          }),
                          null
                      )
                    : void 0;
            if (f.previewLinkTarget && !(0, c.r)(t)) {
                let e = '\n\n('.concat(t.target, ')');
                p.length + e.length > d && ((e = '...' + e), (p = (p = p.substr(0, d - e.length)).trimEnd())), (p += e);
            }
            return f.noStyleAndInteraction
                ? (0, i.jsx)(
                      'span',
                      {
                          title: p,
                          children: _
                      },
                      f.key
                  )
                : (0, i.jsx)(
                      s.Z,
                      {
                          title: p,
                          href: t.target,
                          trusted: h,
                          onClick: m,
                          messageId: f.messageId,
                          channelId: f.channelId,
                          children: _
                      },
                      f.key
                  );
        }
    };
}
