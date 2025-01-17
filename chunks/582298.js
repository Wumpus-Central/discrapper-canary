n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(430824),
    a = n(646504),
    o = n(834129),
    s = n(981631),
    c = n(388032),
    d = n(543170);
function u(e) {
    let t,
        { compact: u, isOwner: m, channel: h } = e,
        f = () => {
            let e = l.Z.getGuild(h.getGuildId());
            null != e &&
                ((0, r.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e('7654'), n.e('92124')]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guild: e,
                            channel: h,
                            source: s.t4x.INVITE_SYSTEM_MESSAGE
                        });
                }),
                (0, a.w)());
        },
        p = (e, t) =>
            (0, i.jsx)(
                r.Anchor,
                {
                    className: d.inviteLink,
                    onClick: f,
                    children: e
                },
                t
            );
    return (
        (t = u
            ? (0, i.jsx)('div', {
                  className: d.inviteContent,
                  children: m ? c.intl.format(c.t['9OheEh'], { inviteHook: p }) : c.intl.format(c.t['7hv6yM'], { inviteHook: p })
              })
            : (0, i.jsxs)('div', {
                  className: d.content,
                  children: [
                      (0, i.jsx)('div', {
                          className: d.inviteHeader,
                          children: m ? c.intl.string(c.t['Ry1T//']) : c.intl.string(c.t.ppUFLy)
                      }),
                      (0, i.jsx)('div', {
                          className: d.inviteContent,
                          children: m ? c.intl.string(c.t.kLfkNj) : c.intl.string(c.t.gRHGFB)
                      }),
                      (0, i.jsx)(r.Button, {
                          onClick: f,
                          size: r.Button.Sizes.SMALL,
                          className: d.inviteButton,
                          children: c.intl.string(c.t.K1BAQ0)
                      })
                  ]
              })),
        (0, i.jsx)(o.Z, {
            className: u ? d.compact : d.inviteContent,
            iconNode: u
                ? null
                : (0, i.jsx)('img', {
                      alt: '',
                      src: n(826926),
                      width: 40,
                      height: 40
                  }),
            iconContainerClassName: d.iconContainer,
            compact: u,
            children: t
        })
    );
}
