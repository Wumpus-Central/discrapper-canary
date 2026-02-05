"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(436857),
    s = n(9578),
    o = n(380610),
    l = n(348056),
    u = n(307600),
    c = n(637557);
let d = 1024;
function _(e) {
    return {
        react(t, n, _) {
            if (e.enableBuildOverrides && (0, o.vS)(t.target))
                return (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(l.A, { url: t.target }, t.target) }, _.key);
            let f = n(t.content, _),
                p = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.$)(t.content),
                h = () => (0, c.m)(t),
                m = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, u.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: _.messageId,
                              channelId: _.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (_.previewLinkTarget && !(0, c.m)(t)) {
                let e = `

(${t.target})`;
                p.length + e.length > d && ((e = "..." + e), (p = (p = p.substr(0, d - e.length)).trimEnd())), (p += e);
            }
            return _.noStyleAndInteraction
                ? (0, r.jsx)("span", { title: p, children: f }, _.key)
                : (0, r.jsx)(
                      s.A,
                      {
                          title: p,
                          href: t.target,
                          trusted: h,
                          onClick: m,
                          messageId: _.messageId,
                          channelId: _.channelId,
                          children: f,
                      },
                      _.key,
                  );
        },
    };
}
