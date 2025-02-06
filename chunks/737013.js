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
    d = n(756890);
function f(e) {
    let t = (0, a.vRw)(),
        { videoEnabled: f, hasVideoDevice: _ } = (0, r.cj)([l.Z], () => ({
            videoEnabled: l.Z.isVideoEnabled(),
            hasVideoDevice: l.Z.isVideoAvailable()
        })),
        p = (0, r.e7)([o.default], () => o.default.getId() === e),
        h = (0, s.Z)(),
        { enabled: m } = (0, u.Z)({ location: 'usePreviewVideoItem' });
    function g() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('23217'), n.e('84605'), n.e('51269'), n.e('8016'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('66711'), n.e('78447'), n.e('17938'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('76540'), n.e('8739'), n.e('58059'), n.e('86282'), n.e('18543'), n.e('22173'), n.e('68445'), n.e('99624'), n.e('30243'), n.e('99393'), n.e('49508'), n.e('22646'), n.e('68241'), n.e('3940'), n.e('25183'), n.e('80284'), n.e('47903'), n.e('40103'), n.e('48923'), n.e('30419'), n.e('18824'), n.e('60691'), n.e('41070'), n.e('45161'), n.e('63158'), n.e('84466'), n.e('86133'), n.e('28986'), n.e('42755'), n.e('80606')]).then(n.bind(n, 601572));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        videoEnabled: f
                    });
            },
            {
                modalKey: 'camera-preview',
                contextKey: t
            }
        );
    }
    return (!f || h) && p && _
        ? (0, i.jsx)(a.sNh, {
              id: 'change-video-background',
              label: (0, i.jsx)('div', {
                  className: d.item,
                  children: f ? c.intl.string(c.t.mZKxHR) : c.intl.string(c.t.vkV939)
              }),
              action: g,
              icon: m && (f ? a.yMH : a.tEF)
          })
        : null;
}
