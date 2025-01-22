r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(25209),
    s = r(794295),
    l = r(865427),
    u = r(853425),
    c = r(49012),
    d = r(773352);
let f = 1024;
function p(e) {
    return {
        react(n, r, p) {
            if (e.enableBuildOverrides && (0, l._G)(n.target)) return (0, i.jsx)(a.Fragment, { children: (0, i.jsx)(u.Z, { url: n.target }, n.target) }, p.key);
            let h = r(n.content, p),
                _ = 'string' == typeof n.title && 0 !== n.title.length ? n.title : (0, o.Rp)(n.content),
                m = () => (0, d.r)(n),
                g = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, c.q)({
                              href: n.target,
                              shouldConfirm: !0,
                              messageId: p.messageId,
                              channelId: p.channelId
                          }),
                          null
                      )
                    : void 0;
            if (p.previewLinkTarget && !(0, d.r)(n)) {
                let e = '\n\n('.concat(n.target, ')');
                _.length + e.length > f && ((e = '...' + e), (_ = (_ = _.substr(0, f - e.length)).trimEnd())), (_ += e);
            }
            return p.noStyleAndInteraction
                ? (0, i.jsx)(
                      'span',
                      {
                          title: _,
                          children: h
                      },
                      p.key
                  )
                : (0, i.jsx)(
                      s.Z,
                      {
                          title: _,
                          href: n.target,
                          trusted: m,
                          onClick: g,
                          messageId: p.messageId,
                          channelId: p.channelId,
                          children: h
                      },
                      p.key
                  );
        }
    };
}
