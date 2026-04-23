"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(436857),
    a = n(9578),
    o = n(380610),
    l = n(348056),
    u = n(307600),
    c = n(637557);
function d(e) {
    return {
        react(t, n, d) {
            if (e.enableBuildOverrides && (0, o.vS)(t.target))
                return (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(l.A, { url: t.target }, t.target) }, d.key);
            let _ = n(t.content, d),
                f = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, s.$)(t.content),
                p = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, u.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: d.messageId,
                              channelId: d.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (d.previewLinkTarget && !(0, c.m)(t)) {
                let e = `

(${t.target})`;
                f.length + e.length > 1024 && ((e = "..." + e), (f = (f = f.substr(0, 1024 - e.length)).trimEnd())),
                    (f += e);
            }
            return d.noStyleAndInteraction
                ? (0, r.jsx)("span", { title: f, children: _ }, d.key)
                : (0, r.jsx)(
                      a.A,
                      {
                          title: f,
                          href: t.target,
                          trusted: () => (0, c.m)(t),
                          onClick: p,
                          messageId: d.messageId,
                          channelId: d.channelId,
                          children: _,
                      },
                      d.key,
                  );
        },
    };
}
