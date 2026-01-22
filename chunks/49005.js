n.d(t, {
    A: () => f,
}),
    n(183875);
var r = n(627968),
    i = n(64700),
    a = n(436857),
    s = n(9578),
    o = n(380610),
    l = n(348056),
    c = n(307600),
    u = n(637557);
let d = 1024;

function f(e) {
    return {
        react(t, n, f) {
            if (e.enableBuildOverrides && (0, o.vS)(t.target))
                return (0, r.jsx)(
                    i.Fragment,
                    {
                        children: (0, r.jsx)(
                            l.A,
                            {
                                url: t.target,
                            },
                            t.target,
                        ),
                    },
                    f.key,
                );
            let p = n(t.content, f),
                _ = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.$)(t.content),
                h = () => (0, u.m)(t),
                m = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, c.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: f.messageId,
                              channelId: f.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (f.previewLinkTarget && !(0, u.m)(t)) {
                let e = "\n\n(".concat(t.target, ")");
                _.length + e.length > d && ((e = "..." + e), (_ = (_ = _.substr(0, d - e.length)).trimEnd())), (_ += e);
            }
            return f.noStyleAndInteraction
                ? (0, r.jsx)(
                      "span",
                      {
                          title: _,
                          children: p,
                      },
                      f.key,
                  )
                : (0, r.jsx)(
                      s.A,
                      {
                          title: _,
                          href: t.target,
                          trusted: h,
                          onClick: m,
                          messageId: f.messageId,
                          channelId: f.channelId,
                          children: p,
                      },
                      f.key,
                  );
        },
    };
}
