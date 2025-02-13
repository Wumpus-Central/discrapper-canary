n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(430824),
    r = n(646504),
    s = n(834129),
    o = n(981631),
    c = n(388032),
    d = n(54567);
function u(e) {
    let t,
        { compact: u, isOwner: m, channel: _ } = e,
        h = () => {
            let e = a.Z.getGuild(_.getGuildId());
            null != e &&
                ((0, l.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e('7654'), n.e('59980')]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guild: e,
                            channel: _,
                            source: o.t4x.INVITE_SYSTEM_MESSAGE
                        });
                }),
                (0, r.w)());
        },
        p = (e, t) =>
            (0, i.jsx)(
                l.eee,
                {
                    className: d.inviteLink,
                    onClick: h,
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
                      (0, i.jsx)(l.zxk, {
                          onClick: h,
                          size: l.zxk.Sizes.SMALL,
                          className: d.inviteButton,
                          children: c.intl.string(c.t.K1BAQ0)
                      })
                  ]
              })),
        (0, i.jsx)(s.Z, {
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
