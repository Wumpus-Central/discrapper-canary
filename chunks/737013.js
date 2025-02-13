n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(898531),
    o = n(314897),
    l = n(131951),
    u = n(682901),
    c = n(388032),
    d = n(641874);
function f(e, t) {
    let f = (0, a.vRw)(),
        { videoEnabled: _, hasVideoDevice: p } = (0, r.cj)([l.Z], () => ({
            videoEnabled: l.Z.isVideoEnabled(),
            hasVideoDevice: l.Z.isVideoAvailable()
        })),
        h = (0, r.e7)([o.default], () => o.default.getId() === e),
        m = (0, s.Z)(),
        { enabled: g } = (0, u.Z)({ location: 'usePreviewVideoItem' });
    function E() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('23217'), n.e('68880'), n.e('84605'), n.e('25292'), n.e('33053'), n.e('8016'), n.e('17298'), n.e('51269'), n.e('76540'), n.e('17938'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('81966'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('78447'), n.e('22646'), n.e('3940'), n.e('88682'), n.e('78258'), n.e('48923'), n.e('53937'), n.e('30419'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('18824'), n.e('86282'), n.e('18543'), n.e('28467'), n.e('72992'), n.e('22173'), n.e('83595'), n.e('30243'), n.e('99393'), n.e('49508'), n.e('68241'), n.e('25183'), n.e('80284'), n.e('90783'), n.e('6009'), n.e('28044'), n.e('60691'), n.e('78593'), n.e('27541'), n.e('96023'), n.e('84466'), n.e('71864'), n.e('25001'), n.e('255'), n.e('80606')]).then(n.bind(n, 601572));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        videoEnabled: _
                    });
            },
            {
                modalKey: 'camera-preview',
                contextKey: null != t ? (0, a.VnL)(t) : f
            }
        );
    }
    return (!_ || m) && h && p
        ? (0, i.jsx)(a.sNh, {
              id: 'change-video-background',
              label: (0, i.jsx)('div', {
                  className: d.item,
                  children: _ ? c.intl.string(c.t.mZKxHR) : c.intl.string(c.t.vkV939)
              }),
              action: E,
              icon: g && (_ ? a.yMH : a.tEF)
          })
        : null;
}
