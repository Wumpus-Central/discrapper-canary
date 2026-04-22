t.d(l, { A: () => c });
var r = t(627968),
    n = t(64700),
    i = t(436857),
    a = t(9578),
    s = t(380610),
    d = t(348056),
    o = t(307600),
    u = t(637557);
function c(e) {
    return {
        react(l, t, c) {
            if (e.enableBuildOverrides && (0, s.vS)(l.target))
                return (0, r.jsx)(n.Fragment, { children: (0, r.jsx)(d.A, { url: l.target }, l.target) }, c.key);
            let v = t(l.content, c),
                C = "string" == typeof l.title && 0 !== l.title.length ? l.title : (0, i.$)(l.content),
                h = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, o.h)({
                              href: l.target,
                              shouldConfirm: !0,
                              messageId: c.messageId,
                              channelId: c.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (c.previewLinkTarget && !(0, u.m)(l)) {
                let e = `

(${l.target})`;
                C.length + e.length > 1024 && ((e = "..." + e), (C = (C = C.substr(0, 1024 - e.length)).trimEnd())),
                    (C += e);
            }
            return c.noStyleAndInteraction
                ? (0, r.jsx)("span", { title: C, children: v }, c.key)
                : (0, r.jsx)(
                      a.A,
                      {
                          title: C,
                          href: l.target,
                          trusted: () => (0, u.m)(l),
                          onClick: h,
                          messageId: c.messageId,
                          channelId: c.channelId,
                          children: v,
                      },
                      c.key,
                  );
        },
    };
}
