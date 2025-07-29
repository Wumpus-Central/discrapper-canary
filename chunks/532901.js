(n.d(t, { Z: () => _ }), n(125548));
var r = n(255367),
    i = n(73800),
    a = n(25209),
    o = n(794295),
    s = n(865427),
    l = n(853425),
    c = n(49012),
    u = n(773352);
let d = 1024;
function _(e) {
    return {
        react(t, n, _) {
            if (e.enableBuildOverrides && (0, s._G)(t.target)) return (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(l.Z, { url: t.target }, t.target) }, _.key);
            let f = n(t.content, _),
                p = 'string' == typeof t.title && 0 !== t.title.length ? t.title : (0, a.Rp)(t.content),
                h = () => (0, u.r)(t),
                m = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, c.q)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: _.messageId,
                              channelId: _.channelId
                          }),
                          null
                      )
                    : void 0;
            if (_.previewLinkTarget && !(0, u.r)(t)) {
                let e = '\n\n('.concat(t.target, ')');
                (p.length + e.length > d && ((e = '...' + e), (p = (p = p.substr(0, d - e.length)).trimEnd())), (p += e));
            }
            return _.noStyleAndInteraction
                ? (0, r.jsx)(
                      'span',
                      {
                          title: p,
                          children: f
                      },
                      _.key
                  )
                : (0, r.jsx)(
                      o.Z,
                      {
                          title: p,
                          href: t.target,
                          trusted: h,
                          onClick: m,
                          messageId: _.messageId,
                          channelId: _.channelId,
                          children: f
                      },
                      _.key
                  );
        }
    };
}
